// function to add product 
function addProduct()
{
    const productField = document.getElementById("product");
    const product = productField.value;

    const quantityField = document.getElementById("quantity");
    const quantity = quantityField.value;

    productField.value = "";
    quantityField.value = "";

    
    showProduct(product,quantity);
    // save product to local storage
    saveProductToLocalStorage(product,quantity);
}
// function to show product on web page 
function showProduct(product,quantity)
{
    const productContainer = document.getElementById("productContainer");
    const li = document.createElement("li");
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li);
}

// function to check if shopping cart is saved in localStorage or not.
const getStoredShoppingCart =()=>{
    // tak an object
    let cart = {};
    // look for the cart in local storage
    const storedCart = localStorage.getItem('cart');
    // condition for card exist or not
    if(storedCart)
    {
        // card exist. parse JSON object to the cart object
        cart = JSON.parse(storedCart);
    }
    // if cart is not found, simply add the new cart to localStorage


    // return cart
    return cart;
}

// function to save products as cart to localstorage
const saveProductToLocalStorage = (product,quantity) =>{
    const cart = getStoredShoppingCart();
    // add cart  key-value 
    cart[product] = quantity;
    // stringify the cart object
    const cartStringified = JSON.stringify(cart);
    // set the cart object at local storage
    localStorage.setItem('cart', cartStringified);
}

// function to show products saved on local storage
const displayProductsFromLocalStorage = () =>{
    const savedCart = getStoredShoppingCart();
    console.log(savedCart);
    // show each product and quantity using for in loop
    for(const product in savedCart)
    {
        console.log(product, savedCart[product]);
    }
}

displayProductsFromLocalStorage();