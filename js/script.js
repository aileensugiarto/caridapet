const container = document.getElementById("productsContainer");
const searchInput = document.getElementById("searchInput");

function displayProducts(items) {
    container.innerHTML = "";

    const sorted = [...items].sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    sorted.forEach(product => {
        container.innerHTML += `
            <div class="product-card">
                <a href="${product.link}" target="_blank">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                    </div>
                </a>
            </div>
        `;
    });
}

displayProducts(products);

searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(value)
    );

    displayProducts(filtered);
});