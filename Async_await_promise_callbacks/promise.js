/*
const fs = require('fs');
function readFilePromise(path) {
    const promise = fs.readFile(path)
    console.log(promise);
    promise.then((data) => {
        console.log(`Promise resolved:`);
        console.log(data.toString());
    }).catch((err) => {
        console.log('Error: ', err);
    });
}
readFilePromise('notes.txt');
*/
function choosePizza(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const selectedPizza = 'Pizza Margherita';
            console.log(`You have selected: ${selectedPizza}`);
            resolve(selectedPizza);
        }, 1_000)
    })
}
function placeOrder(pizza){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const orderStatus = 'Order placed successfully';
            console.log(orderStatus);  
            resolve(orderStatus, pizza);
        }, 1_500);
    })
}
function deliverPizza(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const deliveryStatus = 'Pizza delivered successfully';
            console.log(deliveryStatus);
            console.log(`Enjoy your ${selectedPizza} pizza🍕`);
            resolve(deliveryStatus);
        }, 2_000);
    })
}

const button = document.getElementById('orderButton');
button.addEventListener('click', async () => {
    const choosePizzaPromise = choosePizza()

    choosePizzaPromise.then((selectedPizza) => {
        const placeOrderPromise = placeOrder(selectedPizza)
        placeOrderPromise.then((order) => {
            const deliveredPizzaPromise = deliverPizza(order.orderStatus, order.selectedPizza);
            deliveredPizzaPromise.then((deliveryStatus) => {
                console.log(deliveryStatus);
            })
        })
    }).catch((err) => {
        console.log(err)
    })
    // choosePizzaPromise.then((selectedPizza) => {
    //     console.log(selectedPizza)
    // }).catch((err) => {
    //     console.log(err)
    // })
})