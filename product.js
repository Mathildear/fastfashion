const url = "https://kea-alt-del.dk/t7/api/products/1525";
// fetch data

// populate the page
fetch(url)
  .then((res) => res.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".breadcrums .brand").textContent = product.brandname;
  document.querySelector(".breadcrums .productname").textContent =
    product.productdisplayname;
  document.querySelector(
    "img.productimage"
  ).src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;
  document.querySelector("img.productimage").alt = "product.productdisplayname";
  document.querySelector(".producttext .productname").textContent =
    product.productdisplayname;
  document.querySelector(".producttext .priceproductshow").textContent =
    "DKK " + product.price + ",-";
}
