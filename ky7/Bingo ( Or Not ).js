// For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

// Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.

function bingo(a) {
  const requiredLetters = new Set('bingo');
  const inputLetters = new Set();
  
  for (let num of a) {
      const letter = String.fromCharCode(num + 96);
      inputLetters.add(letter);
  }
  
  return [...requiredLetters].every(letter => inputLetters.has(letter)) ? "WIN" : "LOSE";
}


console.log(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // "LOSE"
console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10])) // "WIN"
