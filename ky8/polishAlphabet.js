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
			if (el === 'ą') {
				return 'a'
			}
			if (el === 'ć') {
				return 'c'
			}
			if (el === 'ę') {
				return 'e'
			}
			if (el === 'ł') {
				return 'l'
			}
			if (el === 'ń') {
				return 'n'
			}
			if (el === 'ó') {
				return 'o'
			}
			if (el === 'ź') {
				return 'z'
			}
			if (el === 'ś') {
				return 's'
			}
			if (el === 'ż') {
				return 'z'
			}
			return el
		})
		.join('')
}

console.log(correctPolishLetters('Jędrzej Błądziński'))
