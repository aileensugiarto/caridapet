const params = new URLSearchParams(window.location.search);

const slug = params.get("product");

const product = products.find(p => p.slug === slug);

if (product) {

    document.getElementById("productImage").src = product.image;

    document.getElementById("productName").textContent = product.name;

    document.getElementById("productDescription").textContent = product.description;

    document.getElementById("amazonBtn").href = product.amazon;

    document.getElementById("shopeeBtn").href = product.shopee;

}
else{

    document.body.innerHTML = "<h1>Product not found.</h1>";

}