/**
 * Problem 11: Palindrome
 * 
 * Given a string, return true if it is a palindrome.
 * A palindrome is a string that is the same forward and backwards.
 * Only consider letters, ignore spaces and cases.
 * 
 * @example "racecar" -> true
*/
function problem(str) {
    strArray = str.replaceAll(" ", "").split("")
    let value = true
    let reversed = strArray.slice().reverse()
    reversed.forEach((e, i) => {
        value = value && e.toLowerCase() === strArray[i].toLowerCase()
    });
    return value
}

const tests = [
    ["racecar", true],
    ["icssc", false],
    ["dont nod", true],
    ["Was it a cat I saw", true],
    ["how are you", false]
]

module.exports = {problem, tests};