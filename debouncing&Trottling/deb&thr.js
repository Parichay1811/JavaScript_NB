//instead of lodash we are going to create our own debounce function
/* const btn = document.querySelector('.increment-btn');
const btnPress = document.querySelector('.increment-pressed');
const count = document.querySelector('.increment-count');

var pressedCount = 0;
var triggeredCount = 0;

const myDebounce = (callBack, delay) =>{
    let timer;

    return function(...args){
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            callBack(...args);

        }, delay)
    }
}

let debounceCount = myDebounce(() => {
    triggeredCount++;
    count.innerHTML = triggeredCount;
}, 800)

btn.addEventListener('click', () =>{
    // pressedCount++;
    btnPress.innerHTML = ++pressedCount;
    debounceCount();
})  */


//Throttle pollyfill 

const btn = document.querySelector('.increment-btn');
const btnPress = document.querySelector('.increment-pressed');
const count = document.querySelector('.increment-count');

var pressedCount = 0;
var triggeredCount = 0;

const start = new Date().getTime();
const myThrottle = (callBack, delay) =>{
    let last = 0;
    return (...args) => {
        let now = new Date().getTime();
        if(now - last < delay){
            return;
        }else{
            last = now;
        }
        return callBack(...args);
    }
}

let throttleCount = myThrottle(() => {
    triggeredCount++;
    count.innerHTML = triggeredCount;
}, 800)

btn.addEventListener('click', () =>{
    // pressedCount++;
    btnPress.innerHTML = ++pressedCount;
    const now = new Date().getTime();
    const sec = (now - start) / 1000
    console.log(sec.toFixed());
    
    throttleCount();
}) 