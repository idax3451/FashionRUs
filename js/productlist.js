const product_list_container = document.querySelector("main");

fetch(`https://kea-alt-del.dk/t7/api/products`)
  .then((response) => response.json())
  .then((showProducts);

function showProducts(data) {
consolelog(data)
let markup = "";
data.forEach(product => {
    markup += `<article class="smallProduct ${product.discount && "onSale"} ${product.soldout && "soldOut"}"> 






<a href="product.html?id=${element.id}">Read More</a>
        `;
  });
    product_list_container.innerHTML += markup;
}  