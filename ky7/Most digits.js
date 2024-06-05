// DESCRIPTION:
// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array) {
  let sArr = array.sort((a, b) => b.toString().length - a.toString().length);
  return +sArr[0];
}
