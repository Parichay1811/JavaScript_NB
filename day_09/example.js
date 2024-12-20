const students = [
    { firstName: 'Ankit', lastName: 'Tiwari', age: 20 },
    { firstName: 'Rahul', lastName: 'Sharma', age: 21 },
    { firstName: 'Rohan', lastName: 'Kumar', age: 22 },
    { firstName: 'Rahul', lastName: 'Sharma', age: 21 },
    { firstName: 'Arijit', lastName: 'Kumar', age: 22 },
]

//I want a list of full name out of the array
//example: Ankit Tiwari, Rahul Sharma, Rohan Kumar, Rahul Sharma, Arijit Kumar.
//we will solve this using map. Because, map is used to transform the array into another array with the same number of elements, but with values of a different data type. In this case, we want to transform the array of objects into an array of strings.

const fullNames = students.map((student) =>{
    return `${student.firstName} ${student.lastName}`;
})
console.log(fullNames);

//we want that how many people are there of a individual ages
//example: 20: 1, 21: 2, 22: 2

//to find that we will be using reduce function. Because, we need to find the count of each age. So, we need to reduce the array to a single object.

const ageCount = students.reduce((acc, student) => {
    //if the age is already in the accumulator, then we will increment the count by 1
    if (acc[student.age]) {
        acc[student.age] += 1;
    }
    //if the age is not in the accumulator, then we will add it to the accumulator with count 1
    else {
        acc[student.age] = 1;
    }
    return acc;
}, {})
console.log(ageCount);


//Now I want is there any student with an age of <= 21 and alsro print their firstName
//we will solve this using filter function. Because, we need to find the students who are less than 18 years old. 

const ageCount1 = students.filter((student) =>{
    if(student.age <= 21){
        return true;
    }
}).map((student) =>{
    return student.firstName;
})
console.log(ageCount1);