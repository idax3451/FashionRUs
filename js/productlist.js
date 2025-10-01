const params = new URLSearchParams(window.location.search);
const category = params.get("category");
console.log(category);

const product_list_container = document.querySelector("main");
const header = (document.querySelector("h2").textContent = category);

document.querySelectorAll("#filters button").forEach((knap) => knap.addEventListener("click", showFiltered));

function showFiltered() {
  console.log(this.dataset.gender);
  const gender = this.dataset.gender;
  if (gender == "All") {
    showProducts(allData);
  } else {
    const udsnit = allData.filter((product) => product.gender == gender);
    showProducts(udsnit);
  }
}

let allData;

fetch(`https://kea-alt-del.dk/t7/api/products?limit=20&category=${category}`)
  .then((response) => response.json())
  .then((data) => {
    allData = data;
    showProducts(allData);
  });

function showProducts(products) {
  console.log(products);
  product_list_container.innerHTML = ""; /* Så produkterne ikke kun står nederest i filtrering */
  products.forEach((element) => {
    console.log(element);
    product_list_container.innerHTML += ` <!-- Produktkort 4 (udsolgt + rabat) -->
         <article class="product_card">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="product image" />
          ${element.soldout ? `<span class="soldout_label">Sold Out</span>` : ""}
          <h3>${element.productdisplayname}</h3>
          <p class="category">${element.articletype}</p>
          <p class="price">
            <span class= ${element.discount && "prev"}>DKK ${element.price}</span><br />
            
            ${
              element.discount
                ? `<span class="now">Now DKK ${Math.round(element.price - (element.price * element.discount) / 100)}</span>
            <span class="discount">-${element.discount}%</span>`
                : ""
            }
          </p>
          <a class="readmore" href="product.html?id=${element.id}">Read More</a>
        </article>`;
  });
}
