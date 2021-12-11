const functions = {
    notNull: function (password) {
        if (password !== null) {
            return true
        } else { return false }
    },
    lessThanNineCharacters: function (password) {
        if (password.length < 9) { return true } else { return false }
    },
    Uppercase: function (password) {
        const UCarray = []
        for (let i = 0; i <= password.length - 1; i++) {
            const character = password.charAt(i)
            if (character == character.toUpperCase()) {
                if (isNaN(character * 1)) {
                    UCarray.push(character)
                }
            }
        } if (UCarray.length < 1) {
            return false
        } else return true
    },
    Lowercase: function (password) {
        const LCarray = []
        for (let i = 0; i <= password.length - 1; i++) {
            const character = password.charAt(i)
            if (character == character.toLowerCase()) {
                if (isNaN(character * 1)) {
                    LCarray.push(character)
                }
            }
        } if (LCarray.length < 1) {
            return false
        } else return true
    },
    digitCheck: function (password) {
        arr = []
        for (let i = 0; i <= password.length - 1; i++) {
            const character = password.charAt(i)
            arr.push(character)
        }
        const newArray = []
        arr.forEach(function (element) {
            if (!isNaN(element)) {
                newArray.push(element)
            }
        })
        if (newArray.length > 0) {
            return true
        } else { return false }
    },
    minimumConditionsReached: function (conditions) {
        trueConditions = conditions.filter(bool => bool);
        return trueConditions.length >= 3;
    },
    verifyPassword: function (password) {
        const conditions = [
            functions.notNull(password),
            functions.lessThanNineCharacters(password),
            functions.Uppercase(password),
            functions.Lowercase(password),
            functions.digitCheck(password),
        ]
        const result =
            functions.minimumConditionsReached(conditions) && functions.Lowercase(password);
        return result;
    }
}


module.exports = functions




