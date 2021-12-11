const { verifyPassword } = require("./passwordexercise")
const functions = require("./passwordexercise")

describe("Password is valid", () => {
    test("password has less then 9 caracters", () => {
        const fakePassword1 = "henkie1"
        const fakePassword2 = "henkiedegroot"
        expect(functions.lessThanNineCharacters(fakePassword1)).toBe(true)
        expect(functions.lessThanNineCharacters(fakePassword2)).toBe(false)
    })
    test("password isn't null", () => {
        const fakePassword1 = "henkie1"
        const fakePassword3 = null
        expect(functions.notNull(fakePassword1)).not.toBeNull
        expect(functions.notNull(fakePassword3)).toBeNull
    })
    test("password has uppercase character", () => {
        const fakePassword1 = "henkie1"
        const fakePassword4 = "Henkie1"
        expect(functions.Uppercase(fakePassword1)).toBe(false)
        expect(functions.Uppercase(fakePassword4)).toBe(true)
    })
    test("password has lowercase characters", () => {
        const fakePassword1 = "henkie1"
        const fakePassword4 = "HENKIE2"
        expect(functions.Lowercase(fakePassword1)).toBe(true)
        expect(functions.Lowercase(fakePassword4)).toBe(false)
    })
    test("password has digits", () => {
        const fakePassword2 = "henkiedegroot"
        const fakePassword1 = "henkie1"
        expect(functions.digitCheck(fakePassword2)).toBe(false)
        expect(functions.digitCheck(fakePassword1)).toBe(true)
    })
    test("password verified", () => {
        const fakePassword5 = "HENKIE1" //false
        const fakePassword6 = "henkiedegroot" //false
        const fakePassword7 = "Henkie1" // true
        const fakePassword8 = "HENKIe2" //true
        expect(functions.verifyPassword(fakePassword5)).toBe(false)
        expect(functions.verifyPassword(fakePassword6)).toBe(false)
        expect(functions.verifyPassword(fakePassword7)).toBe(true)
        expect(functions.verifyPassword(fakePassword8)).toBe(true)
    })
})