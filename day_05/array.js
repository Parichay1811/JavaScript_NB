// let arr = [1,2,3,4,
//     true,false, 
//     {FirstName: "Parichay"},
//     null,
//     ()=>{
//     console.log("This is a function");
// }]

/*
//Methods & properties of an array

let playerInfo = [
    { name: 'Priyanshu', score: 100 },  //0
    { name: 'Krishna', score: 90 },     //1
    { name: 'Rahul', score: 80 },       //2
    { name: 'Abhinav', score: 80 },     //3
    { name: 'Akhil', score: 70 },       //4
    { name: 'Anuj', score: 60 }         //5
];

// 1. push()

// playerInfo.push({name:"Parichay", score: 99})        //push method adds new items at the end of an array
// console.log(playerInfo);

// 2. pop()

// playerInfo.pop()             //pop method removes items from the end of an array
// console.log(playerInfo);

//3. 4. Shift and unshift



// playerInfo.shift()          // Shift removes elements from the beginning of an array        
// console.log();

// playerInfo.unshift({name:"Rajeev", score:99})        //unshift adds elements from the beginning of an array
// console.log(playerInfo);

// ***** Slice() & Splice() ***

// range  in javascrpit like beginning to end will be including the beginning one and go till one before the ending one

// console.log(playerInfo.slice(1,5));      //it will slice 1st element to the 4th element 
//Whenever we need a particular portion of an array then we use the slice() method.

//splice is been used to replace a particular portion of an array with another element

// playerInfo.splice(2,4, {name:"Raj", score:78}) // it will start counting from 2nd element and will go 4 steps then it will replace it with another element. In short if we want to add or remove element to or from a specific index we have to use splice with the range

// console.log(playerInfo);
*/


// const arr = [3,2,4,5,22,6,86,76,443,767]
// let reversedArray = arr.reverse()
// console.log(reversedArray);


//you want to check if there are any players in the leaderboard with a score above 90. How would you do that?
let playerInfo = [
    { name: 'Priyanshu', score: 100 },
    { name: 'Krishna', score: 90 },
    { name: 'Rahul', score: 80 },
    { name: 'Abhinav', score: 80 },
    { name: 'Akhil', score: 70 },
    { name: 'Anuj', score: 60 },
    { name: 'Lavinsh', score: 50 }
  ];

// function above90(arr, cuttOff) {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].score > cuttOff){
//             return arr[i]
//         }
//     }
// }
// console.log(above90(playerInfo, 90));

// the above process is the process to find the element which satisfy the condition.
//  that is why we have an function called some().
// some function will run the callback on each element of the array one after another 
// as soon as it gets true value it will stop the exectuion and return true to us
/*
const val = playerInfo.some((element) =>{
    if(element.score > 90){
        return true
    }else{
        return false
    }
})
console.log(val);
*/
//if we want to check wheather all the players are having a score above 90 or not then we have a function called every().
/*
const val = playerInfo.every((element) =>{
    if(element.score > 90){
        return true
    }else{
        return false;
    }
})
console.log(val);

*/

// suppose we want to find that player with a score 90 then we use the find().














































































































































































// push, pop,shift, unshift
/*
//slice
let playerInfo = [
  { name: 'Priyanshu', score: 100 },
  { name: 'Krishna', score: 90 },
  { name: 'Rahul', score: 80 },
  { name: 'Abhinav', score: 80 },
  { name: 'Akhil', score: 70 },
  { name: 'Anuj', score: 60 },
  { name: 'Lavinsh', score: 50 }
];
let subInfo= playerInfo.slice(1,4);
console.log(subInfo) 
*/
/*
const arr = [1,2,3,4,5,6,7]
console.log(arr);
const newArr = arr.splice(2,5);  //2 is the starting index => included;  4 is the nmber of elements which gonna be removed
console.log(newArr);
console.log(arr);

//reverse

const array = [0,1,2,32,34,4,5,5,5,6,7,7,8,8,89,]
console.log(array);
const reversedArray = array.reverse();
console.log(reversedArray);
// console.log(array);

function getMachine(task){
    if(task == 'addition'){
        return function(...array){
            let sum = 0;
            for(let i = 0; i <array.length; i++){
                sum += array[i];
            }
            return sum
        }
    }else if(task == 'mul'){
        return function(...array){
            let mul = 1;
            for(let i = 0; i <array.length; i++){
                mul *= array[i];
            }
            return mul
        }
    }
}
const additionMachine = getMachine('addition')
console.log(additionMachine(4,5));
*/


