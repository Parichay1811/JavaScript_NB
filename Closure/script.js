/*
function parent(){
    const firstName = "John";
    function child(){
        console.log(firstName);
    }
    return child;
}
const fun = parent(); // John
fun();

const multiplierGenerator = (num1) => {
    return (num2) => {
        return num1 * num2;
    }
}
const multiplyByTwo = multiplierGenerator(2)
console.log(multiplyByTwo(2));
console.log(multiplyByTwo(3));
console.log(multiplyByTwo(4));

const multiplyByThree = multiplierGenerator(3)
console.log(multiplyByThree(2));
console.log(multiplyByThree(4));
console.log(multiplyByThree(5));
*/

function createCounter(){
    let count = 0;

    const increment = () => {
        count++;
    }
    const decrement = () => {
        count--;
    }
    const getCount = () => {
        const counter = document.querySelector("#counter")
        counter.textContent = count;
    }
    const incrementBtn = document.querySelector('#inc-btn')
    const decrementBtn = document.querySelector('#dec-btn')

    incrementBtn.addEventListener('click', increment);
    decrementBtn.addEventListener('click', decrement);


    // return {
    //     increment,
    //     decrement,
    //     getCount
    // }
}

// const counter = createCounter();
// console.log(counter.getCount());
// counter.increment();
// console.log(counter.getCount());
// counter.decrement()
// console.log(counter.getCount());
createCounter()

const backEndApiCall = () => {
    console.log('made backend call')
}
const searchTag = document.querySelector('#search-tag')
searchTag.addEventListener('input', backEndApiCall);