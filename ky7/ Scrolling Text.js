// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

// Example
// scrollingText("codewars") should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]
// Good luck!

function scrollingText(text) {
  text = text.toUpperCase();
  let result = [];
  for(let i = 0; i < text.length; i++) {
      let part1 = text.slice(i);
      let part2 = text.slice(0, i);
      result.push(part1 + part2);
  }
  
  return result;
}

console.log(scrollingText('abc')) // ["ABC","BCA","CAB"]
