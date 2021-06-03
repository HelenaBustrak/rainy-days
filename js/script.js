const url = "https://www.helbus.no/wp-json/wc/store/products";
const productCards = document.querySelector(".rainjackets")
const productCard = document.querySelector(".rainjacket-card");
const productInfo = document.querySelector(".rainjacket-info");



async function fetchProducts() {
    try {
        const response = await fetch(url);
        const products = await response.json();

        productCards.innerHTML = ``

        console.log(products);

        for(let i = 0; i < products.length; i++) {
            console.log(products[i].name);

            if (i >= 3) {
                break;
            };


            productCards.innerHTML += `<div class="rainjacket-card"><div class="rainjacket-images">
            <a href="jacket-specific-page.html?id=${products[i].id}"><img src="${products[i].images[0].src}" class="rainjacket-image"></a>
           </div>
           <div class="rainjacket-info">
            <a href="jacket-specific-page.html">
              <h5>${products[i].name}</h5>
              <h6>${products[i].price_html}</h6>
             </a>
           </div>
           </div>`
        }

        
    }
    
    catch(error) {
        console.log(error);
    }
}

fetchProducts();

