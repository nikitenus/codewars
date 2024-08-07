// DESCRIPTION:
// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function (n) {
  return `Hello ${n[0].toUpperCase()}${n.slice(1).toLowerCase()}!`;
};
