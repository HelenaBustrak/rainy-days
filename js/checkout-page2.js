const form = document.querySelector(".checkoutForm");
const cardNumber = document.querySelector("#cardNumber");
const expDate = document.querySelector("#expDate");
const cvc = document.querySelector("#cvc");
const cardholderName = document.querySelector("#cardholderName");
const button = document.querySelector(".button");
const sucessButton = document.querySelector(".continue");


function checkButton(event) {
    event.preventDefault();
    if (checkLength(cardNumber.value, 16) && checkLength(expDate.value, 5) && checkLength(cvc.value, 3) && checkLength(cardholderName.value, 5)) {
        button.style.display = "none";
        sucessButton.style.display = "block";
    } else {
        button.disabled = true;
    }
}

cardNumber.addEventListener("keyup", checkButton);
expDate.addEventListener("keyup", checkButton);
cvc.addEventListener("keyup", checkButton);
cardholderName.addEventListener("keyup", checkButton);


function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}