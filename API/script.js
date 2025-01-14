/*
//fetching data using fetch API and promise.
const data = fetch('https://fakestoreapi.com/products')
    .then((data) => {
        console.log(data);
        data.json().then((products) => {
            console.log(products);
        }).catch((error) => {
            console.log(error);
        })
    }).catch((error) => {
        console.log(error);
    })
*/


//Fetcxhing data using async and await

const data = async() => {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    console.log(products);
}
data();

