// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(2)); // as b is undefined so it will return NaN
// console.log(sum(3,5)); // 8
/*
function sum(a, b,...c) {
    // return a + b;
    console.log(a,b,c);
    let sum = a + b
    for (let i = 0; i < c.length; i++){
        sum += c[i]
    }
    return sum
}
console.log(sum);
*/

// console.log(sum(2)); // as b is undefined so it will return NaN
// console.log(sum(3,5)); // 8

function factorialIterative(n) {
    if(typeof n !== 'number')
    if (n < 0) {
        return "undefined";
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorialIterative(5));
