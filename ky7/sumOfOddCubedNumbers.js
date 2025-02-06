// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
    if (arr.some(el => typeof el !== 'number')) {
        return undefined
    }
    return arr
        .map(el => el ** 3)
        .filter(el => el % 2 != 0)
        .reduce((a, b) => a + b, 0)
}

console.log(cubeOdd([1, 2, 3, 4]));
console.log(cubeOdd([1, 2, 3, "ds"]));


