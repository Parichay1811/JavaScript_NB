let rick = {
    firstName : "Parichay",
    lastName : "Dutta Biswas",
    age : 25,
    isStudent : true
}
console.log(rick["firstName"]);

rick.firstName = "Par"
rick.add = "dsjfijfh"
console.log(rick);

delete rick.lastName //to remove an property from an object
console.log(rick);


// let pro = {
//     name: "laptop",
//     price: 50000,
//     description: "dsfhsdfh"
// }

function printTyprOf(variable) {
    if(typeof variable == 'string'){
        console.log("variable is a string");
    }
    else if(typeof variable == 'boolean'){
        console.log("variable is a Boolean");
    }
    else if(typeof variable == 'number'){
        console.log("variable is a Number");
    }
}
printTyprOf('hello')
printTyprOf(123)
printTyprOf([2,3,4,5])
