// Description:
// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]
// If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II?

function smaller(nums) {
	let arr = []
	for (let i = 0; i < nums.length; i++) {
		let num = 0
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] > nums[j]) {
				num += 1
			}
		}
		arr[i] = num
	}
	return arr
}

console.log(smaller([5, 4, 3, 2, 1])) // [4, 3, 2, 1, 0]
console.log(smaller([1, 2, 3])) //  [0, 0, 0]
console.log(smaller([1, 2, 0])) // [1, 1, 0]
console.log(smaller([1, 2, 1])) // [0, 1, 0]
console.log(smaller([1, 1, -1, 0, 0])) // [3, 3, 0, 0, 0]
console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6])) // [4, 1, 5, 5, 0, 0, 0, 0, 0]
