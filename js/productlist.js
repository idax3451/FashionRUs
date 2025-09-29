const product_list_container = document.querySelector("main");

fetch(`https://kea-alt-del.dk/t7/api/products`)
  .then((response) => response.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  console.log(products);
  products.forEach((element) => {
    console.log(element);
    product_list_container.innerHTML += ` <!-- Produktkort 4 (udsolgt + rabat) -->
         <a class="product_card soldout">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="product image" />
          <span class="soldout_label">Sold Out</span>
          <h3>${element.productdisplayname}</h3>
          <p class="category">${element.articletype}</p>
          <p class="price">
            <span class="prev">Prev. DKK ${element.price}</span><br />
            <span class="now">Now DKK ${element.price}</span>
          </p>
          <span class="discount">-34%</span>
          <p class="readmore">Read More</p>
          <a href="product.html?id=${element.id}">Read More</a>
        </a>`;
  });
}

//let markup = "";
//products.forEach(product => {
//  markup += `<article class="smallProduct ${product.discount && "onSale"} ${product.soldout && "soldOut"}">
