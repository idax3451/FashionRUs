// Hent produkt-id fra URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

// Find produkt i vores "database"
fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((data) => showProduct(data));



if (product) {
  // Byg breadcrumb
  const breadcrumb = document.querySelector(".breadcrumb");
  breadcrumb.innerHTML = `
    <a href="../html/index.html">Home</a> >
    <a href="">Brands</a> >
    <a href="brand.html?name=${product.brand}">${product.brand}</a> >
    ${product.productdisplayname}
  `;

// <nav class="breadcrumb"><a href="#">Home</a> > <a href="#">Brands</a> > <a href="#">Nike</a> > Sahara Team India Fanwear Round Neck Jersey</nav>
