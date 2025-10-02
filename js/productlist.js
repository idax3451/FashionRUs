const params = new URLSearchParams(window.location.search);
const category = params.get("category");
console.log(category);

const product_list_container = document.querySelector("main");
const header = (document.querySelector("h2").textContent = category);

document.querySelector("#filters button").addEventListener("click", showFiltered);

function showFiltered(event) {
  console.log(event.dataset.gender);
  const gender = event.dataset.gender;
  if (gender == "All") {
    showProducts(allData);
  } else {
    const udsnit = allData.filter((product) => product.gender == gender);
    showProducts(udsnit);
  }
}

let allData;

//sætter eventlistener på elementet der indeholder sortingsknapperne
document.querySelector("#sorting").addEventListener("click", sortItems);

//funktion der sorterer arrayet currentDataSet baseret på hvilken sorteringsknap der er trykket på
function sortItems(event) {
  const direction = event.target.dataset.direction;
  if (direction == "lohi") {
    //her sorteres arrayet ifth. egenskaben price fra lav til høj
    allData.sort((firstItem, secondItem) => firstItem.price - secondItem.price);
  } else {
    //her sorteres arrayet ifth. egenskaben price fra høj til lav
    allData.sort((firstItem, secondItem) => secondItem.price - firstItem.price);
  }
  showProducts(allData);
  //showProducts kaldes med det sorterede array som argument
}

fetch(`https://kea-alt-del.dk/t7/api/products?limit=20&category=${category}`)
  .then((response) => response.json())
  .then((data) => {
    allData = data;
    showProducts(allData);
  });

function showProducts(products) {
  //Her laver du en funktion, der hedder showProducts. Den får en "pakke" med data ind, som hedder products (det er en liste med flere produkter).
  console.log(products); //Her tjekker du i konsollen (inde i browserens udviklerværktøjer), hvad der ligger i den "pakke" af produkter. Det er mest for at se, om det hele virker.
  product_list_container.innerHTML = ""; //Du sletter alt indholdet i boksen (containeren), hvor produkterne skal vises. Det gør du for, at der ikke bare bliver lagt nye produkter under de gamle.
  products.forEach((element) => {
    //Du siger: "Gå igennem hver eneste ting (element) i listen af produkter". Altså: kig på ét produkt ad gangen.
    console.log(element);
    product_list_container.innerHTML += ` <!-- Produktkort 4 (udsolgt + rabat) --> //Du tilføjer nyt HTML-indhold til din produktliste. Her begynder du at bygge en "produktboks" i HTML for hvert produkt.
         <article class="product_card">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="product image" />
          ${element.soldout ? `<span class="soldout_label">Sold Out</span>` : ""} //Dette er en kort måde at sige "hvis… så…": Hvis produktet er udsolgt, vis teksten "Sold Out". Hvis ikke, så vis ingenting.
          <h3>${element.productdisplayname}</h3>
          <p class="category">${element.articletype}</p>
          <p class="price">
            <span class= ${element.discount && "prev"}>DKK ${element.price}</span><br />
            
            ${
              element.discount //Dette betyder: Hvis produktet har en rabat: Vis den nye pris (beregnet som original pris minus rabat). Vis også hvor mange procent rabat der er. Hvis ikke der er rabat: vis ingenting.
                ? `<span class="now">Now DKK ${Math.round(element.price - (element.price * element.discount) / 100)}</span>
            <span class="discount">-${element.discount}%</span>`
                : ""
            }
          </p>
          <a class="readmore" href="product.html?id=${element.id}">Read More</a>
        </article>`;
  });
}
