// Load existing cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Display cart items
function loadCart() {

    cart = JSON.parse(localStorage.getItem("cart")) || [];

    let box = document.getElementById("cart-items");
    box.innerHTML = "";

    let total = 0;

    cart.forEach((item, i) => {

        let itemTotal = item.itemPrice * item.qty;
        total += itemTotal;

        box.innerHTML += `
            <div class="cart-item">
                <img src="${item.itemImg}" alt="">
                
                <div class="item-details">
                    <h3>${item.itemName}</h3>
                    <p>₹${item.itemPrice} × ${item.qty} = <b>₹${itemTotal}</b></p>
                </div>

                <div class="qty-box">
                    <button onclick="decreaseQty(${i})">-</button>
                    <span>${item.qty}</span>
                    <button onclick="increaseQty(${i})">+</button>
                </div>

                <button class="remove-btn" onclick="removeItem(${i})">✕</button>
            </div>
        `;
    });

    document.getElementById("total-amount").innerText = total;

    // FIX: Update cart count in cart page also
    updateCartCount();
}

// Qty increase
function increaseQty(i) {
    cart[i].qty++;
    saveAndReload();
}

// Qty decrease
function decreaseQty(i) {
    if (cart[i].qty > 1) cart[i].qty--;
    else cart.splice(i, 1);
    saveAndReload();
}

// Remove item
function removeItem(i) {
    cart.splice(i, 1);
    saveAndReload();
}

// Save cart + reload UI
function saveAndReload() {
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// FIX: Proper cart count update
function updateCartCount() {
    let totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
    document.getElementById("cart-count").innerText = totalItems;
}

// First load
loadCart();


// -------------------------------------------------------------------------------
// Checkout Button

function goToCheckout() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        alert("Your cart is empty");
        return;
    }

    window.location.href = "checkout.html";
}
