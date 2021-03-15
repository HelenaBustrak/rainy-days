const addToCartBt = document.querySelector("#add-to-cart");
const successMessage = document.querySelector(".SucessMessage");

addToCartBt.onclick = function addSuccessMessage() {
    successMessage.style.display = "block";
}