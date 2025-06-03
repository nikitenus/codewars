// Task
// Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

// The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

// Examples (input -> output)
// "ab","AB"     -> true
// "aB","Ab"     -> true
// "aBcd","AbCD" -> true
// "AB","Ab"     -> false
// "",""         -> false

function isOpposite(s1, s2) {
	let answer = true
	if (s1.length > 0 && s1.length === s2.length) {
		for (let i = 0; i < s1.length; i++) {
			if (s1[i].toLowerCase() === s2[i].toLowerCase()) {
				if (s1[i] === s2[i]) {
					answer = false
				}
			} else answer = false
		}
	} else answer = false
	return answer
}

console.log(isOpposite('ab', 'AB')) // t
console.log(isOpposite('aB', 'Ab')) // t
console.log(isOpposite('aBcd', 'AbCD')) // t
console.log(isOpposite('aBcde', 'AbCD')) // f
console.log(isOpposite('AB', 'Ab')) // f
console.log(isOpposite('Ab', 'cD')) // f
console.log(isOpposite('', '')) // f
