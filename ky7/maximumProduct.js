// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes
// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .

function adjacentElementsProduct(array) {
  return Math.max(...array.map((el, i) => el * array[i + 1]).slice(0, -1));
}
