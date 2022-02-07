const url = "https://kea-alt-del.dk/t7/api/products";

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

  //   copy.querySelector(
  //     "article img"
  //   ).textContent = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(
    ".subtle"
  ).textContent = `${product.brandname} | ${product.articletype}`;
  copy.querySelector("h1").textContent = product.productdisplayname;
  copy.querySelector(".percentageDiscount p").textContent =
    product.discount + "%";
  copy.querySelector(".price").textContent = "DKK " + product.price + ",-";
  copy.querySelector(".newPrice").textContent =
    product.price - (product.price / 100) * product.discount;

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
// 1. add DKK in newPrice
// 2. price on discount cant add margin
