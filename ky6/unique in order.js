// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function (iterable) {
	let arr = []
	let newIterable = [...iterable]
	for (let i = 0; i < newIterable.length; i++) {
		if (newIterable[i] !== newIterable[i + 1]) {
			arr.push(newIterable[i])
		}
	}
	return arr
}

console.log(uniqueInOrder('AAAABBBCCDAABBB')) //
console.log(uniqueInOrder('ABBCcAD')) //
console.log(uniqueInOrder([1, 2, 2, 3, 3])) //
