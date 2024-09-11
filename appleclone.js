
const productUl = document.getElementById("product-ul");
const sortBtn = document.getElementById("sort-btn");

sortBtn.addEventListener("click", function() {
  const products = Array.from(productUl.getElementsByTagName("li"));
  products.sort((a, b) => a.innerText.localeCompare(b.innerText));
  productUl.innerHTML = "";
  products.forEach(product => productUl.appendChild(product));
});
