const product_page = document.querySelector("#product_page");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then(showProduct);

function showProduct(product) {
  product_page.innerHTML = `  
<!-- Venstre: Billede -->
        <div class="product_image">
          <img src="../imgs/1163_sahara-roundneck.webp" alt="Sahara Team India Fanwear Round Neck Jersey" />
        </div>

        <!-- Midt: Info -->
        <div class="product_info">
          <h2>Product Information</h2>
          <p class="modelName"><strong>Model name</strong><br />Sahara Team India Fanwear Round Neck Jersey ${product.productdisplayname}</p>
          <p class="modelColor"><strong>Color</strong><br />Blue ${product.colour1}</p>
          <p class="inventoryNumber"><strong>Inventory number</strong><br />1163 ${product.price}</p>

          <h3>Nike</h3>
          <p>Nike, creating experiences for today’s athlete</p>
          <p class="articleType"><span class="bold">Type:</span> ${product.articletype}</p>
        </div>

        <!-- Højre: Køb-boks -->
        <aside class="product_buybox">
          <h2>Sahara Team India Fanwear Round Neck Jersey</h2>
          <p class="productCategory">Nike | Tshirts ${product.category}</p>

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
