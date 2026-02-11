// Category Panel

function openPanel() {
    document.getElementById("categoryPanel").classList.add("open");
}

document.getElementById("closePanel").onclick = function () {
    document.getElementById("categoryPanel").classList.remove("open");
}




// Slideshow

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("myslides");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Show current slide
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 5000); // 5 seconds
}
// --------------------------------------------------------------------



// category Button

function filterMenu(category) {
    let blocks = document.querySelectorAll('.category-block');

    blocks.forEach(block => {
        let cat = block.getAttribute('data-category');

        if (category === 'all') {
            block.style.display = 'block';
        }
        else if (cat === category) {
            block.style.display = 'block';
        }
        else {
            block.style.display = 'none';
        }
    });
}

// cart function

function addToCart(btn) {

    let item = btn.closest(".menu-item");

    let name = item.querySelector("h3").innerText;
    let price = parseInt(item.querySelector(".price").innerText.replace("₹",""));
    let img = item.querySelector("img").getAttribute("src");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let exist = cart.find(x => x.itemName === name);

    if (exist) {
        exist.qty++;
    } else {
        cart.push({
            itemName: name,
            itemPrice: price,
            itemImg: img,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // FIX: Show Qty Count
    let totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
    document.getElementById("cart-count").innerText = totalItems;
}


function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let total = cart.reduce((acc, item) => acc + (item.itemPrice * item.qty), 0);

    document.getElementById("cart-total").innerText = "₹" + total;
}
