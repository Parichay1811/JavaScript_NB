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
    try{
        const selectedPizza = await choosePizza();
        cosole.log(`Selection of pizza is completed and the selected pizza is ${selectedPizza}`);  
        const order = await placeOrder(selectedPizza);
        console.log(`Order is placed successfully`);
        await deliverPizza(orderStatus, selectedPizza);
        console.log(`Pizza is delivered successfully`);
    }catch(err){
        console.log(err);
    }
})