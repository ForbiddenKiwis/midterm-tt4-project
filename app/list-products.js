import './list-products.scss'

document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!');
    });
});

document.addEventListener("DOMContentLoaded", () => {

    const productsContainer = document.getElementById('products-container');

    const products = 
    [
        {
            name: 'Juice',
            description: 'Avocado Juice',
            price: '$1.99',
            rating: 4.5,
            image: '../app/assets/images/pexels-enginakyurt-4458519.jpg',
        },
        {
            name: 'Milk',
            description: 'Milk from cow',
            price: '$2.99',
            rating: 3.6,
            image: '../app/assets/image/product4.jpg'
        },
        {
            name: 'Camera',
            description: 'Fuji Camera',
            price: '$122.99',
            rating: 4.6,
            image: '../app/assets/image/product6.jpg'
        },
        {
            name: 'Coke Cola',
            description: 'Soft drink',
            price: '$2.99',
            rating: 2.6,
            image: '../app/assets/image/product5.jpg'
        },
        {
            name: 'Watch',
            description: 'Watch Lux',
            price: '$89.99',
            rating: 4.9,
            image: '..app/assets/images/pexels-yaazhini-17307532.jpg'
        },
        {
            name: 'Clothes',
            description: 'Colorful Clothes',
            price: '$28.99',
            rating: 3.6,
            image: '..app/assets/images/pexels-enginakyurt-4458519.jpg'
        },
        {
            name: 'Coke Diet',
            description: 'Coke Diet',
            price: '$3.99',
            rating: 1.2,
            image: '../app/assets/images/product7.jpg'
        },
        {
            name: 'Coke Diet',
            description: 'Coke Diet',
            price: '$3.99',
            rating: 1.2,
            image: '../app/assets/images/product7.jpg'
        },
        {
            name: 'Coke Diet',
            description: 'Coke Diet',
            price: '$3.99',
            rating: 1.2,
            image: '../app/assets/images/product7.jpg'
        },
        {
            name: 'Coke Diet',
            description: 'Coke Diet',
            price: '$3.99',
            rating: 1.2,
            image: '../app/assets/images/product7.jpg'
        },
        {
            name: 'Coke Diet',
            description: 'Coke Diet',
            price: '$3.99',
            rating: 1.2,
            image: '../app/assets/images/product7.jpg'
        },
        {
            name: 'Coke Diet',
            description: 'Coke Diet',
            price: '$3.99',
            rating: 1.2,
            image: '../app/assets/images/product7.jpg'
        },
    ];

    products.forEach(product => {
        // Create the outer card div
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.style.maxWidth = '320px';
    
        // Create the image element
        const img = document.createElement('img');
        img.classList.add('card-img-top');
        img.src = product.image;
        img.alt = product.name;
        img.style.maxWidth = '100%';
        img.style.maxHeight = '200px';
        img.style.objectFit = 'cover';
    
        // Create the card body
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
    
        // Title (Product name)
        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = product.name;
    
        // Description
        const description = document.createElement('p');
        description.classList.add('card-text');
        description.textContent = product.description;
    
        // Price
        const price = document.createElement('span');
        price.classList.add('h5');
        price.classList.add('mb-0');
        price.textContent = product.price;
    
        // Create the stars for the rating
        const starsContainer = document.createElement('div');
        const fullStars = Math.floor(product.rating);
        const halfStar = product.rating - fullStars > 0;
    
        for (let i = 0; i < fullStars; i++) {
            const star = document.createElement('i');
            star.classList.add('bi', 'bi-star-fill', 'text-warning');
            starsContainer.appendChild(star);
        }
    
        if (halfStar) {
            const halfStarIcon = document.createElement('i');
            halfStarIcon.classList.add('bi', 'bi-star-half', 'text-warning');
            starsContainer.appendChild(halfStarIcon);
        }
    
        // Add the stars to the card body
        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(price);
        cardBody.appendChild(starsContainer);
    
        // Create the footer (Add to Cart & Heart Icon)
        const cardFooter = document.createElement('div');
        cardFooter.classList.add('card-footer', 'd-flex', 'justify-content-between', 'bg-light');
    
        const addToCartBtn = document.createElement('button');
        addToCartBtn.classList.add('btn', 'btn-primary', 'btn-sm');
        addToCartBtn.textContent = 'Add to Cart';
    
        const heartBtn = document.createElement('button');
        heartBtn.classList.add('btn', 'btn-outline-secondary', 'btn-sm');
        heartBtn.innerHTML = '<i class="bi bi-heart"></i>';
    
        cardFooter.appendChild(addToCartBtn);
        cardFooter.appendChild(heartBtn);
    
        // Append the footer and card body to the card
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);
        cardDiv.appendChild(cardFooter);
    
        // Append the card to the container
        productsContainer.appendChild(cardDiv);
    });
});