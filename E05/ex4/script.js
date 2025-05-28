const productContainer = document.getElementById('product-container');
const categorySelect = document.getElementById('category-select');

// Function to fetch and display products based on category
function fetchProducts(category) {
    let url = 'https://fakestoreapi.com/products';
    if (category !== 'all') {
        url += `/category/${category}`;
    }

    fetch(url)
        .then(response => response.json())
        .then(products => {
            productContainer.innerHTML = ''; // Clear previous products
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h2>${product.title}</h2>
                    <p>Price: $${product.price}</p>
                    <p>${product.category}</p>
                `;
                productContainer.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
}

// Initial fetch for all products
fetchProducts('all');

// Event listener for category selection
categorySelect.addEventListener('change', (event) => {
    const selectedCategory = event.target.value;
    fetchProducts(selectedCategory);
});