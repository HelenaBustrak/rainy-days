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

let count = 0;

function validateAddToCart(event) {
    event.preventDefault();

    if (sizes.value === xs ||s || m ||l ||xl) {
        sizeError.style.display = "none";
        button.disabled = false;

    } else if (sizes.value === noSizeOption) {
        sizeError.style.display = "block";
        button.disabled = true;
    } 
        else {
        sizeError.style.display = "block";
        button.disabled = true;   
    }
}

xs.addEventListener("onmouseup", validateAddToCart);
s.addEventListener("onmouseup", validateAddToCart);
m.addEventListener("onmouseup", validateAddToCart);
l.addEventListener("onmouseup", validateAddToCart);
xl.addEventListener("onmouseup", validateAddToCart);

addProductToCart.addEventListener ("click", function () {

    count++;

    itemsInCart.innerHTML = count;
    successMessage.style.display = "block";

});


