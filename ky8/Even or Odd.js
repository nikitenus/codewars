// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
  return Math.abs(number) % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(2)); // 'even'
console.log(evenOrOdd(7)); // 'odd'
console.log(evenOrOdd(-42)); // 'odd'
