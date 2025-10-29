// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
	const h = Math.floor(seconds / 3600)
	const m = Math.floor((seconds % 3600) / 60)
	const s = seconds % 60

	return [h, m, s].map(n => String(n).padStart(2, '0')).join(':')
}

console.log(humanReadable(0)) // 0
console.log(humanReadable(59)) // 00 00 59
console.log(humanReadable(60)) //  00 01 00
console.log(humanReadable(90)) // 00 01 30
console.log(humanReadable(3599)) // 00 59 59
console.log(humanReadable(45296)) // 12 34 56
console.log(humanReadable(359999)) // 99 59 59
