// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    return array.length !== 0 ? array.reduce((a, b) => a + b) / array.length : 0;
  }