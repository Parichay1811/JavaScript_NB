/* Convert C to F */
const c = 32;
const f = c * 9 / 5 + 32;
console.log(f); // Output: 91.4


let n1 = 10;
let n2 = '20';
console.log(n1 - n2);   // -10
console.log(n1 * n2);

let flah = true
console.log(n1+flah);

let a = 10
let b = '10'
console.log(a === b);       //false
console.log(a == b);        //true

let obj1 = {}   //0F19
let obj2 = {}   //0F18  
console.log(obj1 === obj2); //false
console.log(obj1 == obj2);  //false

//for the above code the == or === both will consider it's address as the value 

function helper(str1, str2, operation) {
    if(operation == 'addition'){
        return str1 + str2;
    }else if(operation == 'subtraction'){
        return str1 - str2;
    }else{
        return null;
    }
}
console.log(helper('10','5','addition'));
console.log(helper('10','5','subtraction'));
