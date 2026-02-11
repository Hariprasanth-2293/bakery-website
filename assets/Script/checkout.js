let cart = JSON.parse(localStorage.getItem("cart")) || [];

let itemsBox = document.getElementById("order-items");
let grandTotalBox = document.getElementById("grand-total");

let total = 0;

// Load cart summary
cart.forEach(item => {
    let itemTotal = item.itemPrice * item.qty;
    total += itemTotal;

    itemsBox.innerHTML += `
        <div class="summary-item">
            <span>${item.itemName} × ${item.qty}</span>
            <span>₹${itemTotal}</span>
        </div>
    `;
});

grandTotalBox.innerText = total;

// Place Order
function placeOrder() {

    let name = document.getElementById("name").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let address = document.getElementById("address").value.trim();

    if (!name || !mobile || !address) {
        alert("Please fill all details");
        return;
    }

    let order = {
        orderId: "HB" + Date.now(),
        customer: { name, mobile, address },
        items: cart,
        total: total
    };

    localStorage.setItem("lastOrder", JSON.stringify(order));
    localStorage.removeItem("cart");

    alert("🎉 Order Placed Successfully!");
    window.location.href = "index.html"; // or success.html
}
