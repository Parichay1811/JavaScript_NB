// const person1 = {
//     firstName: 'John',
//     age: 23
// }
// const person2 = {
//     firstName: 'Parichay',
//     age: 24
// }
// const person3 = {
//     firstName: 'Jade',
//     age: 20
// }
// const person4 = {
//     firstName: 'Rakib',
//     age: 23
// }
// const people = [person1, person2, person3, person4]
// // people[0].age += 1;
// // console.log(people[0]);
// // console.log(person1);
// const partOfPeople = people.slice(0,2)
// // console.log(partOfPeople);

// partOfPeople[0].firstName = 'Priya'
// console.log(partOfPeople[0]);

// console.log(people);


// for(obj of people){
//     console.log(obj);
// }


/*
const nums = [1, 2, 3, 4, 5, 6, 7]
for(num of nums){           //for of loop works only for the Arrays
    console.log(nums);
    
}

const person = {
    firstName: "Parichay",
    age: 22
}
for(field in person){                           //for in loops works with the objects and also with the array
    console.log(field, ":", person[field]);  
}
    */

const product = {
    name: "Apple",
    price: 100,
    color: "black",
}
//printing object properties
console.log(product["name"]);       //instead of this we could use dot . operator as well but, we can use this when we don't know the key name. This is the most powerful way to access the object properties in JavaScript.
console.log(product["price"]);
console.log(product["color"]);

//inserting element in the object.

product.version = "1.0";
console.log(product);

//Updatation 

product.price = 80000;
console.log(product);

//- **Delete in an Object**
delete product.color;
console.log(product);

//Iterating over Object
for(let key in product){
    console.log(key, ":", product[key]);
}