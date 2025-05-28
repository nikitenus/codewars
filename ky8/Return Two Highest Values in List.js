// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

function twoHighest(arr) {
  if (!arr.length) return []
  if (arr.length === 1) return arr
  let newArr = arr.sort((a,b)=>b-a)
  let answer = []
  for (let i = 0; i < newArr.length; i++) {
   if (!answer.includes(newArr[i])) {
    answer.push(newArr[i])
   } 
  }
  return answer.slice(0, 2)
}

console.log(twoHighest([])) // []
console.log(twoHighest([15])) // 15
console.log(twoHighest([15, 20, 20, 17])) // 20 17
