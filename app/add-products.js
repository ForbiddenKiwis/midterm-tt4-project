// /app/add-products.js

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const productTitle = document.getElementById("productTitle").value;
        const productDescription = document.getElementById("productDescription").value;
        const productPrice = document.getElementById("productPrice").value;
        const productQuantity = document.getElementById("productQuantity").value;

        console.log("Product Title:", productTitle);
        console.log("Product Description:", productDescription);
        console.log("Product Price:", productPrice);
        console.log("Product Quantity:", productQuantity);

        if (!productTitle || !productDescription || !productPrice || !productQuantity) {
            alert("Please fill out all fields.");
        } else {
            alert("Product added successfully!");
            form.reset();
        }
    });
});
