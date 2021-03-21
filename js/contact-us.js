const form = document.querySelector(".messageform");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const phoneNumber = document.querySelector("#phone");
const phoneError = document.querySelector("#phoneError");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
const button = document.querySelector(".formButton");
const successMessage = document.querySelector(".successMessage");


function validateForm(event) {
    event.preventDefault();

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(phoneNumber.value, 8) === true) {
        phoneError.style.display = "none";
    } else {
        phoneError.style.display = "block";
    }

    if(checkLength(message.value, 10) === true) {
        messageError.style.display = "none";
    }
    else {
        messageError.style.display = "block";
    }

    successMessage.innerHTML = "Your message has been sent!";

    form.reset();

}
validateForm();

email.addEventListener("keyup", checkButton);
phoneNumber.addEventListener("keyup", checkButton);
message.addEventListener("keyup", checkButton);

function checkButton() {
    if (validateEmail(email.value) && checkLength(phoneNumber.value, 7) && checkLength(message.value, 10)) {
        button.disabled = false;
    } else {
        successMessage.innerHTML = "";
        button.disabled = true;
    }
}

form.addEventListener("submit", validateForm);

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}


function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}