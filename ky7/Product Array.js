// Task
// Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].

function productArray(numbers) {
	return numbers.map(el => numbers.reduce((a, b) => a * b) / el)
}

console.log(productArray([12, 20])) // [20, 12]
console.log(productArray([3, 27, 4, 2])) // [216,24,162,324]
console.log(productArray([16, 17, 4, 3, 5, 2])) // [2040,1920,8160,10880,6528,16320]
