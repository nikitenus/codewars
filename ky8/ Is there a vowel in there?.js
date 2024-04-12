// DESCRIPTION:
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(arr){
    const vowelCodes = [97, 101, 105, 111, 117];
    for (let i = 0; i < arr.length; i++) {
      if (vowelCodes.includes(arr[i])) {
        arr[i] = String.fromCharCode(arr[i]);
      }
    }
    return arr;
  }