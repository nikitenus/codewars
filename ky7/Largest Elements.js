// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]

function largest(n, array) {
	let arr = []
	let sArr = array.sort((a, b) => b - a)
	for (let i = 0; i < n; i++) {
		arr.push(sArr[i])
	}
	return arr.sort((a, b) => a - b)
}

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])) // [9, 10]
console.log(largest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])) // []
