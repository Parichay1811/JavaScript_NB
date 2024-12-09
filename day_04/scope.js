/*
//Global Scope
console.log("......");
let a   

// functional scope
function name(params) {
    
}

//block scope
if (condition) {
    // args
}
    */

// var, let and const
/*
// var has a fucntional scope
function hello() {
    var firstName = "John"
    console.log();
    // console.log(firstName);
    if(abc){
        var lastName = "Jane"   // this will print because var has a fucntional scope not normal scope
    }else{

    }
    console.log(firstName); // this will also print because we are accessing inside the function
    console.log(lastName);   
}
hello()
console.log(firstName); //this will throw new Error("");

// let has block scope so it will not thorw error if we try to access it out of the fucntion. but it will throw error if we try to access it out side of a block
// simmillarly const also have a block scope
*/
/*
var xyz = 67
function outerfunc() {
    if(90){
        var xyz = 95
        if(true){
            var xyz = 89
            console.log(xyz);
            
        }
    }
}
outerfunc()
*/

/*
console.log(num1);
var num1 = 89;
//Rule=> whenever we create a var variable and not innitialize it js will put undefiend into it
console.log(num1);

// let num2
// console.log(num2);
*/


// function fun() {
    
//     console.log(abc);
    
//     if(65){
//         var abc = "hey abc"
//     }else{

//     }
//     console.log(abc);
// }
// fun()


/*
// let can also be hoised but it is a part of temporal dead zone
// var can be hoisted but it is not a part of temporal dead zone
console.log(abc);
let abc = 93

// js compiler will break the code 👇🏻
let abc     //temporal dead zone
console.log();
abc = 90
*/

/*
fun()
function fun() {
    console.log(abc);
    var abc = "this is abc"
    console.log(abc);
    
}
fun()
*/


/*  
function inside a function is a local function
function outer() {
    console.log("sojd");
    function inner() {
        console.log("jfdjk");
        
    }
    inner()
}
outer()
*/
