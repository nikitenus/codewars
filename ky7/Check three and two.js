// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran, Chars in Haskell), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

function checkThreeAndTwo(array) {
	const count = {}
	for (let i = 0; i < array.length; i++) {
		const element = array[i]
		count[element] = (count[element] || 0) + 1
	}
	return (
		Object.entries(count).length === 2 &&
		(Object.values(count)[0] === 3 || Object.values(count)[0] === 2)
  )
}

console.log(checkThreeAndTwo(["a", "a", "b", "b", "b"]))



