// Given a string of lowercase letters and an array of integer indices, capitalize all letters at the given indices. If an index is beyond the string, it should be ignored.
//
//     Examples:
// "abcdef", [1,2,5]     ==> "aBCdeF"
// "abcdef", [1,2,5,100] ==> "aBCdeF" // There is no index 100.
// Good luck!

function capitalize(string, indices) {
  let arr = string.split("");
  for (let i = 0; i < indices.length; i++) {
    if (arr[indices[i]]) {
      arr[indices[i]] = arr[indices[i]].toUpperCase();
    }
  }
  return arr.join("");
}

console.log(capitalize("abcdef", [1, 2, 5])); // aBCdeF
console.log(capitalize("abcdef", [1, 2, 5, 100])); // aBCdeF
console.log(capitalize("codewars", [1, 3, 5, 50])); // cOdEwArs
