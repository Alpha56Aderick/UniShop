// cart.js - Sample cart logic
// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add to cart button
    const addToCartBtn = document.getElementById('add-to-cart');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', addToCart);
    }

    // Load cart items if on cart page
    if (document.querySelector('.cart-items')) {
        loadCartItems();
    }

    // Load order summary if on checkout page
    if (document.querySelector('.order-summary')) {
        loadOrderSummary();
    }

    // Place order button
    const placeOrderBtn = document.getElementById('place-order');
    if (placeOrderBtn) {
        placeOrderBtn.addEventListener('click', placeOrder);
    }
});

// Add to cart function
function addToCart() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const quantity = parseInt(document.getElementById('quantity').value) || 1;
    
    if (productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            // Check if product already in cart
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: quantity
                });
            }
            
            // Save to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
            
            // Show success message
            alert(`${product.name} added to cart!`);
        }
    }
}

// Load cart items
function loadCartItems() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const emptyCartDiv = document.querySelector('.empty-cart');
    
    if (cart.length === 0) {
        emptyCartDiv.classList.remove('hidden');
        return;
    }
    
    emptyCartDiv.classList.add('hidden');
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image" style="background-image: url('${item.image}')"></div>
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn minus">-</button>
                <input type="number" value="${item.quantity}" min="1" data-id="${item.id}">
                <button class="quantity-btn plus">+</button>
                <span class="remove-item" data-id="${item.id}">Remove</span>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Add event listeners
    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', updateQuantity);
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', removeItem);
    });
    
    document.querySelectorAll('.cart-item-quantity input').forEach(input => {
        input.addEventListener('change', updateQuantityInput);
    });
    
    // Update totals
    updateCartTotals();
}

// Update quantity with buttons
function updateQuantity(e) {
    const btn = e.target;
    const input = btn.parentElement.querySelector('input');
    const id = parseInt(input.dataset.id);
    let quantity = parseInt(input.value);
    
    if (btn.classList.contains('plus')) {
        quantity++;
    } else if (btn.classList.contains('minus') && quantity > 1) {
        quantity--;
    }
    
    input.value = quantity;
    updateCartItem(id, quantity);
}

// Update quantity with direct input
function updateQuantityInput(e) {
    const input = e.target;
    const id = parseInt(input.dataset.id);
    const quantity = parseInt(input.value) || 1;
    
    if (quantity < 1) {
        input.value = 1;
        updateCartItem(id, 1);
    } else {
        updateCartItem(id, quantity);
    }
}

// Update cart item quantity
function updateCartItem(id, quantity) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartTotals();
    }
}

// Remove item from cart
function removeItem(e) {
    const id = parseInt(e.target.dataset.id);
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartItems();
}

// Update cart totals
function updateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = 5.00; // Flat rate shipping
    const total = subtotal + shipping;
    
    // Update on cart page
    if (document.getElementById('subtotal')) {
        document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('shipping').textContent = `$${shipping.toFixed(2)}`;
        document.getElementById('total').textContent = `$${total.toFixed(2)}`;
    }
    
    // Update on checkout page
    if (document.getElementById('checkout-subtotal')) {
        document.getElementById('checkout-subtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('checkout-shipping').textContent = `$${shipping.toFixed(2)}`;
        document.getElementById('checkout-total').textContent = `$${total.toFixed(2)}`;
    }
}

// Load order summary for checkout
function loadOrderSummary() {
    const summaryItems = document.querySelector('.summary-items');
    summaryItems.innerHTML = '';
    
    cart.forEach(item => {
        const summaryItem = document.createElement('div');
        summaryItem.className = 'summary-item';
        summaryItem.innerHTML = `
            <span>${item.name} (${item.quantity})</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        `;
        summaryItems.appendChild(summaryItem);
    });
    
    updateCartTotals();
}

// Place order
function placeOrder() {
    // Validate forms
    const shippingForm = document.getElementById('shipping-form');
    const paymentForm = document.getElementById('payment-form');
    
    if (!shippingForm.checkValidity() || !paymentForm.checkValidity()) {
        alert('Please fill out all required fields');
        return;
    }
    
    // In a real app, you would process payment here
    // For demo, we'll just clear the cart and show a success message
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    
    alert('Order placed successfully! Thank you for your purchase.');
    window.location.href = 'index.html';
}