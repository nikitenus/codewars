// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

function hasUniqueChars(str) {
    const arr = []
    const arrStr = str.split('')
    for (let i = 0; i < arrStr.length; i++) {
        if (arr.includes(arrStr[i])) {
            return false
        } else {
            arr.push(arrStr[i])
        }
    }
    return true
}
