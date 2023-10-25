const response = await fetch('api/products.json');
const products = await response.json();
renderProducts(products);

// fetch('api/products.json')
//     .then( response => response.json() )
//     .then( products => renderProducts(products) );

function renderProducts(products, rate = 1) {
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
                        Buy - ${(product.price * rate).toFixed(2)}
                    </button>
                </div>
            </article>
      `;
    }
    const productsContainer = document.querySelector('.products__list');
    productsContainer.innerHTML = productsDomString;
}

let currencies;
async function convertCurrency() {
    const currencyName = document.querySelector('.products__currency').value;
    if (!currencies) {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        currencies = await response.json();
    }
    const rate = currencies.rates[currencyName];
    renderProducts(products, rate);
}

document.querySelector('.products__currency').addEventListener('change', convertCurrency);