/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    let dict = {}
    let majority = {key: "", count: 0}
    numbers.forEach(element => {
        dict[element] = (dict[element] ?? 0) + 1
        if (dict[element] > majority.count){
            majority.key = element
            majority.value = dict[element] 
        }
    });
    return majority.key
}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};