import './list-products.scss'

document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});