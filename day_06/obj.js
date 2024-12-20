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