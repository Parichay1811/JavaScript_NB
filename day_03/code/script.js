// conditions and loops
/*
const answer = prompt('how much money you spend on grocerry?')
if(answer > 10000){
    alert('Congratulations! You are a big shopper! You are eligible for the 10% discount on the bill.')
    alert("Here is your discounted amount : " + (answer - answer * 0.1))
}else{
    alert('Sorry, you are not eligible for the discount.')
    alert("Here is your bill : " + answer)
}
    */
// console.log(answer);


// switch
/*
const day = prompt('Which day it is today?')
switch (day) {
    case 'monday':
        alert("Today is workday")
        break;
    case 'tuesday':
        alert("Today is workday")
        break;
    case 'wednesday':
        alert("Today is workday")
        break;
    case 'thursday':
        alert("Today is workday")
        break;
    case 'friday':
        alert("Today is workday")
        break;
    case 'saturday':
        alert("Yeeayyy!! it's the weekend")
        break;
    case 'sunday':
        alert("Yeeayyy!! it's the weekend")
        break;

    default:
        alert("Invalid day")
        break;
}
*/
/*
//loops
// for
let arr = [1,2,3,4,5,6]
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

//while

sum = 0
let i = 0;
while (i < arr.length) {
    sum += arr[i];
}
console.log(sum);
// do-while
sum = 0
i = 0;
do {
    sum += arr[i];
    i++;
} 
while (i < arr.length);
*/

let user = [
    {
        username : "Parichay",
        password : "parichay123"
    },
    {
        username : "Rahul",
        password : "rahul123"
    },
    {
        username : "Rohan",
        password : "rohan123"
    }

]
let attempts = 3;
while(attempts--){
    const username = prompt("Please enter the username")
    const password = prompt("Please enter the password")

    let isValidUser = false;

    for(let i = 0 ; i < user.length; i++) {
        if(user[i].username === username && user[i].password === password) {
            isValidUser = true
            break;
        }
    }
    if(isValidUser) {
        alert("Login Successfull")
        break;
    }else{
        alert("Invalid Username or Password")
    }
}

