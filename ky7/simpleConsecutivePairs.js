// In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

// pairs([1,2,5,8,-4,-3,7,6,5]) = 3
// The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
// --the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
// --the second pair is (5,8) and are not consecutive
// --the third pair is (-4,-3), consecutive. Count = 2
// --the fourth pair is (7,6), also consecutive. Count = 3.
// --the last digit has no pair, so we ignore.
// More examples in the test cases.

// Good luck!

// Please also try Simple time difference

function pairs(ar) {
	const pairs = []
	for (let i = 0; i < ar.length; i += 2) {
		pairs.push(ar.slice(i, i + 2))
	}

	return pairs
		.map(el => (el[0] + 1 === el[1] || el[0] - 1 === el[1] ? 1 : 0))
		.reduce((a, b) => a + b, 0)
}

console.log(pairs([21, 20, 22, 40, 39, -56, 30, -55, 95, 94]))
console.log(pairs([81, 44, 80, 26, 12, 27, -34, 37, -35]))
console.log(pairs([-55, -56, -7, -6, 56, 55, 63, 62]))
