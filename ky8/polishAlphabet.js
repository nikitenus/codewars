// There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

// Your task is to change the letters with diacritics:

// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z
// and print out the string without the use of the Polish letters.

// For example:

// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

function correctPolishLetters(string) {
	return string
		.split('')
		.map(el => {
			if (el === 'ą') el = 'a'
			if (el === 'ć') el = 'c'
			if (el === 'ę') el = 'e'
			if (el === 'ł') el = 'l'
			if (el === 'ń') el = 'n'
			if (el === 'ó') el = 'o'
			if (el === 'ź') el = 'z'
			if (el === 'ś') el = 's'
			if (el === 'ż') el = 'z'
		})
		.join('')
}

