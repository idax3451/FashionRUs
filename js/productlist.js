const params = new URLSearchParams(window.location.search);
const category = params.get("category");
console.log(category);

const product_list_container = document.querySelector("main");
const header = (document.querySelector("h2").textContent = category);

document.querySelector("#filters").addEventListener("click", showFiltered);

function showFiltered(event) {
  console.log(event.target.dataset.gender);
  const gender = event.target.dataset.gender;
  if (gender == "All") {
    currentDataSet = allData;
  } else {
    const udsnit = allData.filter((product) => product.gender == gender);
    currentDataSet = udsnit;
  }
  showProducts(currentDataSet);
}

let allData, currentDataSet;

//sætter eventlistener på elementet der indeholder sortingsknapperne
document.querySelector("#sorting").addEventListener("click", sortItems);

//funktion der sorterer arrayet currentDataSet baseret på hvilken sorteringsknap der er trykket på
function sortItems(event) {
  const direction = event.target.dataset.direction;
  if (direction == "lohi") {
    //her sorteres arrayet ifth. egenskaben price fra lav til høj
    currentDataSet.sort((firstItem, secondItem) => firstItem.price - secondItem.price);
  } else {
    //her sorteres arrayet ifth. egenskaben price fra høj til lav
    currentDataSet.sort((firstItem, secondItem) => secondItem.price - firstItem.price);
  }
  showProducts(currentDataSet);
  //showProducts kaldes med det sorterede array som argument
}

fetch(`https://kea-alt-del.dk/t7/api/products?limit=20&category=${category}`)
  .then((response) => response.json())
  .then((data) => {
    allData = currentDataSet = data;
    showProducts(currentDataSet);
  });

function showProducts(products) {
  //Her laver du en funktion, der hedder showProducts. Den får en "pakke" med data ind, som hedder products (det er en liste med flere produkter).
  console.log(products); //Her tjekker du i konsollen (inde i browserens udviklerværktøjer), hvad der ligger i den "pakke" af produkter. Det er mest for at se, om det hele virker.'
  product_list_container.innerHTML = ""; //Du sletter alt indholdet i boksen (containeren), hvor produkterne skal vises. Det gør du for, at der ikke bare bliver lagt nye produkter under de gamle.
  products.forEach((element) => {
    //Du siger: "Gå igennem hver eneste ting (element) i listen af produkter". Altså: kig på ét produkt ad gangen.
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
