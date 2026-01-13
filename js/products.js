document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('products-grid');
    if (!container) return; // Exit if not on products page

    // 1. Get URL parameters
    const params = new URLSearchParams(window.location.search);
    const selectedCategory = params.get('category');

    // 2. Filter Products
    let filteredProducts = productsData;
    if (selectedCategory) {
        filteredProducts = productsData.filter(p => p.category === selectedCategory);
    }

    // 3. Sort by Priority (Low number = High priority)
    filteredProducts.sort((a, b) => a.priority - b.priority);

    // 4. Render
    if (filteredProducts.length === 0) {
        container.innerHTML = `<div class="col-12 text-center text-white"><p>No products found in this category.</p></div>`;
        return;
    }

    container.innerHTML = filteredProducts.map(product => `
    <div class="col-md-3">
      <a href="product-detail.html?id=${product.id}" class="text-decoration-none h-100 d-block">
        <div class="product-card h-100">
          <div class="product-image ratio ratio-1x1 rounded-2 overflow-hidden mb-2">
            <img src="${product.image}" class="w-100 h-100 object-fit-contain" alt="${product.name}">
          </div>
          <h6 class="fw-semibold mb-2">${product.name}</h6>
          <p class="text-muted small mb-2">${product.description.substring(0, 80)}...</p>
        </div>
      </a>
    </div>
  `).join('');

    // Optional: distinct active state for category links if we had them on this page
});
