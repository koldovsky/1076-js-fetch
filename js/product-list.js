const products = [
    {
        id: "1",
        name: "Baby Yoda",
        description: "Sticker with Grogu from Star Wars",
        price: 9.99,
        image: "img/baby-yoda.svg"
    },
    {
        id: "2",
        name: "Banana",
        description: "Sticker with banana",
        price: 8.99,
        image: "img/banana.svg"
    },
    {
        id: "3",
        name: "Viking",
        description: "Sticker with viking",
        price: 7.99,
        image: "img/viking.svg"
    },
    {
        id: "4",
        name: "Girl",
        description: "Sticker with girl",
        price: 7.59,
        image: "img/girl.svg"
    },
];

renderProducts(products);

function renderProducts(products) {
    let productsDomString = '';
    for (const product of products) {
      productsDomString += `
        <article class="product-card">
                <img src="${product.image}" alt="${product.description}">
                <h3 class="product-card__h3">${product.name}</h3>
                <p class="product-card__description">
                ${product.description}
                </p>
                <div class="product-card__buttons">
                    <button class="product-card__buttons-info button button-card">
                        Info
                    </button>
                    <button class="product-card__buttons-buy button button-card">
                        Buy - ${product.price}
                    </button>
                </div>
            </article>
      `;
    }
    const productsContainer = document.querySelector('.products__list');
    productsContainer.innerHTML = productsDomString;
}