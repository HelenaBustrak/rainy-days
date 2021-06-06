const main = document.querySelector("main");
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
const quantity = document.querySelector(".quantity");

const productDetailsPage = document.querySelector(".top")


const queryString = document.location.search;


const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://www.helbus.no/wp-json/wc/store/products/" + id;

productDetailsPage.innerHTML = '<div class="loader"></div>'

fetch(url)
   .then(function(response) {
       return response.json();
   })
   .then(function(product) {
       console.log(product);
       populateCards(product);
       const addProductToCart = document.querySelector(".cartButton");
       const successMessage = document.querySelector(".sucessMessage");
       let count = 0;

       addProductToCart.addEventListener("click", function () {
        count++;
    
        itemsInCart.innerHTML = count;
        quantity.innerHTML = count;
        successMessage.style.display = "block";
        successMessage.style.transition = "0.2s";
        console.log("hello")
        console.log(error);
       }) 


   })
   .catch(function(error) {
     console.log(error)
     main.innerHTML = "There has been an error, please try again later."
   });

   

function populateCards(product) {

        productDetailsPage.innerHTML = `
        <div class="jacketspec_left">
        <div class="crumbs"><a href="index.html">Home</a> / <a href="new-collection-jackets.html">New Collection</a> / <span>${product.name}</span></div>
         <img src="${product.images[0].src}" class="jacketspec">
         </div>
      </div>
     </div>
      <div class="jacketspec_right">
        <h1>${product.name}</h1>
        <h2>${product.price_html}</h2>
        <div class="select-size">
          <label>XS
            <input type="radio" id="xs" name="size" checked>
          </label>
          <label>S
            <input type="radio" id="s" name="size" value="standard">
          </label>
          <label>M
            <input type="radio" id="m" name="size" value="standard">
          </label>
          <label>L
            <input type="radio" id="l" name="size" value="standard">
          </label>
          <label>XL
            <input type="radio" id="xl" name="size" value="standard">
          </label>
        </div>
        <button class="button yellow cartButton">ADD TO CART+</button>
      <input type="checkbox" id="add-to-cart">
        <h4 class="sucessMessage">Your item was added to the cart.</h4>
        <h3>Description</h3>
        <p class="description">${product.description}</p>
      </div>`
    }


    

    








