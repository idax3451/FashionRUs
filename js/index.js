const categorylist = document.querySelector(".category_list_container");

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((categories) => showCategories(categories));

function showCategories(categories) {
  categories.forEach((category) => {
    categorylist.innerHTML += `<div> <a href="productlist.html?category=${category.category}">${category.category}</a></div>`;
  });
}
