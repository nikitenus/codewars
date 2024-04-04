// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

function areaOfSquare(num) {
    return Number(Math.pow((num * 4) / (Math.PI * 2), 2).toFixed(2))
}