// Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.

// Examples
// If a = [1, 2] and b = [1], the result should be [2].

// If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].

function arrayDiff(a, b) {
	let arr = a
	if (a.length === 0) return a
	for (let i = 0; i < b.length; i++) {
		if (a.includes(b[i])) {
			arr = arr.filter(el => el != b[i])
		}
	}
	return arr
}

// function arrayDiff(a, b) {
// 	return a.filter(e => b.includes(e))
// }

console.log(arrayDiff([1, 2], [1])) // [2]
console.log(arrayDiff([1, 2, 2], [1])) // [2,2]
console.log(arrayDiff([1, 2, 2], [2])) // [1]
console.log(arrayDiff([1, 2, 2], [])) // [1,2,2]
console.log(arrayDiff([], [1, 2])) // []
console.log(arrayDiff([1, 2, 3], [1, 2])) // [3]
