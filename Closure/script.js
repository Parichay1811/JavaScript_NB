/* function parent(){
    var a = 18;
    function child(){
        console.log(a);        
    }
    child()
}
parent() */
//this will give us the out put 18. Because of the closure.
//closure is a function bind together with in its lexical scope. or, function along with its lexical scope is called as closure.

/* 
function parent(){
    var a = 18;
    function child(){
        console.log(a);        
    }
    return child
}
var p = parent()
console.log(p);  //this will give us the function child. [Function: child]
p() // this will give us the output 18. Because of the closure. at line 19 even if teh parent function is destroyed But, the chiled still remembered that where is it came from. and when we call the child function p() it will give us the output 18. Using closure the child function can access the parent function's scope... */

/* 
    Uses of closure
    - Module design pattern
    - Currying
    - Functions like once
    - memoize
    - maintaining state in async world
    - Iterators

*/


/* 
//Function currying
function multiplier(num1) {
    return function(num2) {
        return num1 * num2;
    }
}
var double = multiplier(2);
console.log(double(5));
console.log(double(7));
console.log(double(3));
var double = multiplier(3);
console.log(double(5));
console.log(double(7));
console.log(double(3));

// Currying is a functional programming technique where a function with multiple arguments is transformed into a series of functions, each taking a single argument. In the above example, the multiplier function is curried to create a new function that takes only one argument, num1 . This new function returns another function that takes only one argument, num2. */

