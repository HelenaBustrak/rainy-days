const addProductToCart = document.querySelector(".cartButton");
const sizes = document.querySelector("#sizes");
const noSizeOption = document.querySelector(".no-size")
const xs = document.querySelector(".xs")
const s = document.querySelector(".s")
const m = document.querySelector(".m")
const l = document.querySelector(".l")
const xl = document.querySelector(".xl")
const itemsInCart = document.querySelector(".itemNumber")
const sizeError = document.querySelector(".sizeError")
const addToCartBt = document.querySelector("#add-to-cart");
const successMessage = document.querySelector(".SucessMessage");
const quantity = document.querySelector(".quantity");

let count = 0;

function validateAddToCart() {

    if (sizes.value === "noe-size") {
        //sizeError.style.display = "block";

    }  else {
        //sizeError.style.display = "none";
        return true;  
    }
}



addProductToCart.addEventListener ("click", function () {

    validateAddToCart();
    count++;
    quantity.innerHTML = count;
    itemsInCart.innerHTML = count;
    successMessage.style.display = "block";

});


