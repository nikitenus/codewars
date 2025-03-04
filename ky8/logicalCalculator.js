// Your Task
// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

// Examples
// booleans = [True, True, False], operator = "AND"
// True AND True -> True
// True AND False -> False
// return False
// booleans = [True, True, False], operator = "OR"
// True OR True -> True
// True OR False -> True
// return True
// booleans = [True, True, False], operator = "XOR"
// True XOR True -> False
// False XOR False -> False
// return False
// Input
// an array of Boolean values (1 <= array_length <= 50)
// a string specifying a logical operator: "AND", "OR", "XOR"
// Output
// A Boolean value (True or False).

function logicalCalc(array, op) {
	if (op === 'AND') {
		return array.every(value => value)
	}

	if (op === 'OR') {
		return array.some(value => value)
	}

	if (op === 'XOR') {
		return array.filter(value => value).length % 2 === 1
	}

	return false
}

console.log(logicalCalc([true, true, true, false], 'AND'))
console.log(logicalCalc([true, true, true, false], 'OR'))
console.log(logicalCalc([true, true, true, false], 'XOR'))
console.log(logicalCalc([true, true, false, false], 'AND'))
console.log(logicalCalc([true, true, false, false], 'OR'))
console.log(logicalCalc([true, true, false, false], 'XOR'))
console.log(logicalCalc([true, false, false, false], 'AND'))
console.log(logicalCalc([true, false, false, false], 'OR'))
console.log(logicalCalc([true, false, false, false], 'XOR'))
console.log(logicalCalc([true, true], 'AND'))
console.log(logicalCalc([true, true], 'OR'))
console.log(logicalCalc([true, true], 'XOR'))
console.log(logicalCalc([false, false], 'AND'))
console.log(logicalCalc([false, false], 'OR'))
console.log(logicalCalc([false, false], 'XOR'))
console.log(logicalCalc([false], 'AND'))
console.log(logicalCalc([false], 'OR'))
console.log(logicalCalc([false], 'XOR'))
console.log(logicalCalc([true], 'AND'))
console.log(logicalCalc([true], 'OR'))
console.log(logicalCalc([true], 'XOR'))
