function choosePizza (callback) {
    setTimeout(() => {
        const selectedPizza = 'Pizza Margherita';
        console.log(`You have selected: ${selectedPizza}`);     //here we are using callback function to pass the selectedPizza to the next function.
        callback(selectedPizza);        

    }, 1000);
}

function placeOrder(){
    setTimeout(() => {
        const orderStatus = 'Order placed successfully';
        console.log(orderStatus);       
    }, 1_500);
}

function deliverPizza(){
    setTimeout(() => {
        const deliveryStatus = 'Pizza delivered successfully';
        console.log(deliveryStatus);
        console.log(`Enjoy your ${selectedPizza} pizza🍕`);
        
    }, 2_000);
}
document.getElementById('orderButton').addEventListener('click', () => {
    choosePizza((selectedPizza) => {    //here we are passing the selectedPizza to the next function.
        placeOrder(); // we are calling the placeOrder function here. to place the order.
        deliverPizza(); // we are calling the deliverPizza function here. to deliver the pizza.
    });
    //this is called callback hell. to avoid this we can use promises or async await.
});