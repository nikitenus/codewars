// Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None or {-1, -1} in C if:

// sum < 0
// difference < 0
// Either of the calculated ages come out to be negative

function getAges(sum, difference) {
	if (sum < 0 || difference < 0) {
		return null
	}
	if ((sum >= 0 && difference > sum) || (sum < 0 && difference < sum)) {
		return null
	}
	const olderAge = (sum + difference) / 2
	const youngerAge = sum - olderAge
	if (olderAge < 0 || youngerAge < 0) {
		return null
	}

	return [olderAge, youngerAge]
}

console.log(getAges(24, 4)) // [14,10]
console.log(getAges(63, -14)) // null
