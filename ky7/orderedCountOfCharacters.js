// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

const orderedCount = function (text) {
    const counts = {};

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }

  const result = [];
  for (const char in counts) {
    result.push([char, counts[char]]);
  }

  return result;
}
