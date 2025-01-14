/*
const fs = require('fs').promises; //importing the promises module from the fs module.fs is an object that provides a way of interacting with the file system.

async function readFileAndLog() {
    try {
        const data = await fs.readFile('notes.txt', 'utf8'); //utf8 is the encoding type of the file. It is a character encoding that can represent any Unicode character. It is the default encoding type. 
        console.log(data);
    }
    catch (err) {
        console.error('Error reading file:', err);
    }
}
readFileAndLog('notes.txt');
for (let i = 0; i < 10; i++) {
    console.log("Hello world");  
}
*/


/*
//Set timeout function

console.log("hey there!"); //This will be printed first
let t1;
setTimeout(() => {
    for (let i = 0; i < 10; i++) {
        //do nothing
        console.log(Date.now() - t1); //This will be printed fourth after 2 seconds. This counting task will be operating by the worker threads.
        console.log("I am inside the set timeout function"); //This will be printed third after 2 seconds.
    }
}, 2000);
t1 = Date.now();
console.log("Hello world");       //This will be printed second

//at first the main thread will do its work in a synchronous way and then it will wait for the worker threads to complete their work. The worker threads will do their work in an asynchronous way.
*/

//Set interval function

let t1 = Date.now();
let count = 0;
console.log("Hello world");
const intervalId = setInterval(() => {
    console.log(Date.now() - t1);
    console.log(count);
    count++;
    console.log("I am inside the set interval function");

}, 1000);

setTimeout(() => {
    clearInterval(intervalId);

    console.log("Interval cleared");
}, 5000);