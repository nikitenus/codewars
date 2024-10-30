//Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
// Return as a number.

function divCon(x){
    let str = x.filter(el=>typeof el === 'string').map(el=>Number(el)).reduce((a,b)=>a+b, 0);
    let num = x.filter(el=>typeof el === 'number').reduce((a,b)=>a+b, 0);
    return num - str;
}

