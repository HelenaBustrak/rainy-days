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

const productDetailsPage = document.querySelector(".top")


const queryString = document.location.search;


const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://www.helbus.no/wp-json/wc/store/products/" + id;

productDetailsPage.innerHTML = '<div class="loader"> Loading..</div>'

fetch(url)
   .then(function(response) {
       return response.json();
   })
   .then(function(product) {
       console.log(product);
       populateCards(product);
   })
   .then(function(){
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
    
   }) 
   .catch(function(error) {
       console.log(error);
   }) 

   

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
          <div class="sizeError">You need to select a size</div>
          <select name="sizes" id="sizes">
            <option class="no-size" value="no-size">Select a size<i class="fas fa-arrow-down"></i></option>
            <option class="xs" value="xs">XS</option>
            <option class="s"value="s">S</option>
            <option class="m"value="m">M</option>
            <option class="l"value="l">L</option>
            <option class="xl" value="xl">XL</option>
          </select>
        </div>
        <button class="button yellow cartButton">ADD TO CART+</button>
      <input type="checkbox" id="add-to-cart">
        <h4 class="SucessMessage">Your item was added to the cart.</h4>
        <h3>Description</h3>
        <p class="description">${product.description}</p>
      </div>`
    }








