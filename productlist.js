// const query = urlParams.get("q");
// const start = urlParams.get("start");
const urlParams = new URLSearchParams(window.location.search);
const brandname = urlParams.get("brand");
const url =
  "https://kea-alt-del.dk/t7/api/products?limit=12&brandname=" + brandname;

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  //   console.log(data);
  data.forEach(showProduct);
}

function showProduct(product) {
  console.log(product);
  // grab template
  const template = document.querySelector("#smallProductTemplate").content;
  // Clone it
  const copy = template.cloneNode(true);
  //   change content
  copy
    .querySelector("article a")
    .setAttribute("href", `product.html?id=${product.id}`);
  copy.querySelector(
    ".smallProduct img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".smallProduct img").alt = product.productdisplayname;
  copy.querySelector("h1").textContent = product.brandname;
  copy.querySelector(
    ".subtle"
  ).textContent = `${product.brandname} | ${product.articletype}`;
  copy.querySelector("h1").textContent = product.productdisplayname;
  copy.querySelector(".percentageDiscount p").textContent =
    product.discount + "%";
  copy.querySelector(".price").textContent = "DKK " + product.price + ",-";
  copy.querySelector(".newPrice").textContent =
    "DKK " +
    Math.round(`${product.price - (product.price / 100) * product.discount}`) +
    ",-";

  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }

  if (product.discount) {
    copy.querySelector("article").classList.add("sale");
    copy.querySelector(".price").classList.add("discounted");
    copy.querySelector("article").classList.add("saleBox");
  }
  // grab parrent
  const parent = document.querySelector(".productsGrid");

  // append
  parent.appendChild(copy);
}

// I don't know why its not working need help with:
