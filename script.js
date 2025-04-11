function filterProducts(category) {
  const products = document.querySelectorAll('.product-card');

  products.forEach(product => {
    const productCategory = product.getAttribute('data-category');
    if (category === 'all' || productCategory === category) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}
