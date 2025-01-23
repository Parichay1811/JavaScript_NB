
//Debouncing & Throttling in JavaScript.

/* Q1. Create a button UI and add debounce as follows =>
        --> Show "Button Pressed <X> times" every time the button is pressed
        --> Increase "Triggered <Y> Times" count after 800ms of debounce */

/* const btn = document.querySelector('.increment-btn');
const btnPress = document.querySelector('.increment-pressed');
const count = document.querySelector('.increment-count');

var pressedCount = 0;
var triggeredCount = 0;

const debounceCount = _.debounce(() => {
    count.innerHTML = ++triggeredCount;
}, 800) 

btn.addEventListener('click', () =>{
    // pressedCount++;
    btnPress.innerHTML = ++pressedCount;
    debounceCount();
}) */

/* Q1. Create a button UI and add Throttle as follows =>
    --> Show "Button Pressed <X> times" every time the button is pressed
    --> Increase "Triggered <Y> Times" count after 800ms of throttle */

const btn = document.querySelector('.increment-btn');
const btnPress = document.querySelector('.increment-pressed');
const count = document.querySelector('.increment-count');

var pressedCount = 0;
var triggeredCount = 0;

const time = new Date().getTime();

const throttleCount = _.throttle(() => {
    const now = new Date().getTime();
    const diff = now - time;
    console.log(diff);
    
    count.innerHTML = ++triggeredCount;
}, 800)
btn.addEventListener('click', () =>{
    // pressedCount++;
    btnPress.innerHTML = ++pressedCount;
    throttleCount();
})

