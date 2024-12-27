const catagoryTag = document.getElementById('category-filter')
const productTag = document.querySelector('#product-list')

catagoryTag.addEventListener('change', () => {
    const select = catagoryTag.value    //this is the value of the selected option. example: samsung, apple or moto.
    const products = productTag.querySelectorAll(".product")
    products.forEach(product => {
        const productCategory = product.getAttribute('data-category')
        if (productCategory === select || select === 'all') {
            product.style.display = 'block'
        }else{
            product.style.display = 'none'
        }
    })
})