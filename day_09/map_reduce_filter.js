/*
Map:
Map function is used to transform an array
transformation means changing the data type of the array elements or changing the array elements themselves.

*/

const arr = [1, 2, 3, 4, 5];
const outPut = arr.map((x) =>{
    return x*x;
})
console.log(outPut);

const result = arr.map((x) => {
    return x.toString();        //return x.toString(2); this will return the binary of each element.

})
console.log(result);


/*
Filter:
Filter function is used to filter the array, it means to select only those elements from the array which satisfy the given condition.

 */

const arr2 = [1,2,3,4,5,6,7,9] //in this array we want to filter the odd numbers
const outPut2 = arr2.filter((x) => {
    return x % 2 !== 0
})
console.log(outPut2);
//we want to find the numbers divisablw by 3
const outPut3 = arr2.filter((x) => {
    return x % 3 == 0
})
console.log(outPut3);

/*
Reduce: 
Reduce function is used to reduce the array to a single value. It takes a callback function as an argument and returns a single value.
*/

//find sum of all the elements in the array

const arr3 = [1,2,3,4,5,6,7,9]
//normal way to write 
function sumOfAllElements(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(sumOfAllElements(arr3));

//using reduce function

const outPut4 = arr3.reduce((acc, current) => {     //using accumulator the function will be iterating over the arr3 and current represents the current element orr arr3[i]
    return acc + current;
}, 0)   //we have written 0 because the initial value of accumulator is 0.
console.log(outPut4);

//find the maximum number in an array

const arr4 = [1,2,3,4,15,6,7,9]
const outPut5 = arr4.reduce((acc, current) => {
    return Math.max(acc, current);
}, -Infinity)
console.log(outPut5);
