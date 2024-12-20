//functions
/*
// syntex 
function add(a,b) {
    return a + b        //if we do not return anything it will return undefined
}
console.log(add(2,4));


function addition(a,b,...c) {       //... means rest parameter
    // console.log(c);
    // console.log(a);
    // console.log(b);
    let sum = a + b;
    for (let i = 0; i < c.length; i++) {
        sum += c[i];
    }
    return sum;
}
// console.log(addition(1,2,3,4,5,6,7,8,9,10));
console.log(addition(1));
function addition1(params) {
    //function have arguments objects which is array like object which contains all the arguments passed to the function
}
    */

/*
//namedFunction
//known as a function declaration
function add(a,b) {
    return a + b
}
console.log(add(2,4)); //this will print 6

//Annonmous Function
//known as a function expression
const add1 = function(a,b){
    return a + b
}

//Arrow Function
//known as a function expression
const add2 = (a,b) => {
    return a + b
}

const add3 = (a,b) => a + b;

//IIFE : Immediately Invoked Function Expression

// (function (a, b){       //this is also known as function expression
//     return a + b
// })

(function (a, b){       
    return a + b
})(1, 2) //calling the function  //this will print 3   


//HOF( Higher Order Function)

function doOperation(a, b, operation) {     //this is called as Higher Order Function. which can take another function as an argument.
    return operation(a, b);
}
function operation(a,b) {
    return a + b;
}
console.log(doOperation(1,2, operation));
*/

// let a = 10;
// console.log(a);
// let b = 20
// console.log(b);

// function sum() {
//     console.log(a + b);
// }
// console.log(sum());

// loops
/*
// 1. for of LOOP

const cars = ['BMW', 'AUDI', 'FORD'];
for(let car of cars) {
    console.log(car);
}
*/
// 2. for in loop
/*
//it can iterate over objects and arrays

//obj
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
*/
//3. forEach loop
//  forEach loop can be applied on the array

//on array
const array = [1, 2, 3, 4, 5];
array.forEach((number) => {
    console.log(number);
    
})

// we hav total 5 products in the array. To show the product name and price we can use the forEach loop

const cars = [
    { brand: 'BMW', model: 'X5', year: 2019 },
    { brand: 'AUDI', model: 'A4', year: 2020 },
    { brand: 'FORD', model: 'Mustang', year: 2018 },
    { brand: 'TOYOTA', model: 'Camry', year: 2017 },
    { brand: 'HONDA', model: 'Civic', year: 2016 },
]
cars.forEach((car) => {
    console.log(`Brand: ${car.brand}`);
    console.log(`Model: ${car.model}`);
    console.log(`Launch: ${car.year}`);
    console.log(`-----------------`);
})




