const product_page = document.querySelector("#product_page");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((product) => {
    //console.log(product.articletype);

    product_page.innerHTML = `  

    <nav class="breadcrumb"><a href="#">Home</a> > <a href="#">Brands</a> > <a href="#">${product.brandname}</a> > ${product.productdisplayname}</nav>
    
<!-- Venstre: Billede -->
        <div class="product_image">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
        </div>

        <!-- Midt: Info -->
        <div class="product_info">
          <h2>Product Information</h2>
          <p class="modelName"><strong>Model name</strong><br /> ${product.productdisplayname}</p>
          <p class="modelColor"><strong>Color</strong><br /> ${product.basecolour}</p>
         

          <p><strong>Brand name</strong><br />${product.brandname}</p>
          <p><i>${product.brandbio}</i></p>
          <p>${product.description}</p>
        </div>

        <!-- Højre: Køb-boks -->
        <aside class="product_buybox">
          <h2>${product.productdisplayname}</h2>
          <p class="productCategory">${product.articletype}</p>
          <label for="size">Choose a size</label>
          <select id="size" name="size">
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
 <p class="inventoryNumber"><strong>Price</strong><br /> ${product.price}</p>
          <button class="buy_button">Add to basket</button>
        </aside>
        `;
  });
