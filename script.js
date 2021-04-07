// OBJECT LITERALS
const cart = document.getElementById("cart")

// ES5
// function addProduct(name, category){
//     return{
//         name: name,
//         category: category
//     }
// }

// var getProduct = addProduct("iPhone 12", "Smartphone");

// console.log(getProduct);

// cart.innerHTML = `Product 1: ${getProduct.name}, category ${getProduct.category}`;

// ES6
function addProduct(name, category){
    return{name, category};
}

var getProduct = addProduct("iPhone 12", "Smartphone");

console.log(getProduct);

cart.innerHTML = `Product 1: ${getProduct.name}, category ${getProduct.category}`;