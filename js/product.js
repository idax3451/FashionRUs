const product_page = document.querySelector("#product_page");
const current = document.querySelector("#current");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  current.textContent = product.productdisplayname;
  product_page.innerHTML = `  
<!-- Venstre: Billede -->
        <div class="product_image">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
        </div>

        <!-- Midt: Info -->
        <div class="product_info">
          <h2>Product Information</h2>
          <p class="brandName"><strong>Brand name</strong><br/> ${product.brandname}</p>
          <p class="articleType"><span class="bold"> <strong>Type</strong><br/></span> ${product.articletype}</p>
          <p class="modelName"><strong>Model name</strong><br/> ${product.productdisplayname}</p>
          <p class="modelColor"><strong>Color</strong><br/>Blue ${product.colour1}</p>
          <p class="price"><strong>Price</strong><br/> DKK ${product.price}</p>
        </div>

        <!-- Højre: Køb-boks -->
        <aside class="product_buybox">
          <h2>${product.productdisplayname}</h2>

          <label for="size">Choose a size</label>
          <select id="size" name="size">
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>

          <button class="buy_button">Add to basket</button>
        </aside>
        `;
}
