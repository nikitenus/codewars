// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

function add(num1, num2) {
  let arr1 = String(num1).split("").reverse();
  let arr2 = String(num2).split("").reverse();

  let maxLength = Math.max(arr1.length, arr2.length);
  let result = "";

  for (let i = 0; i < maxLength; i++) {
    let digit1 = Number(arr1[i] || 0);
    let digit2 = Number(arr2[i] || 0);

    result = String(digit1 + digit2) + result;
  }
  return Number(result);
}

console.log(add(2, 11)); // 13
console.log(add(0, 1)); // 1
console.log(add(0, 0)); // 0

console.log(add(16, 18)); // 214
console.log(add(26, 39)); // 515
console.log(add(122, 81)); // 1103
