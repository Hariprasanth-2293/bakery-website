// // Category Panel


// Full screen enka click pannalum close aagum command panniruka code..........

// let panel = document.getElementById('categoryPanel');
// let openBtn = document.getElementById('openCategoryBtn');
// let closeBtn = document.getElementById('closePanel');

// let overlay = null; // global

// // OPEN PANEL
// openBtn.onclick = function () {
//     panel.style.right = "0";

//     // Create overlay only when panel opens
//     overlay = document.createElement("div");
//     overlay.id = "overlayBlocker";
//     overlay.style.position = "fixed";
//     overlay.style.top = "0";
//     overlay.style.left = "0";
//     overlay.style.width = "100vw";
//     overlay.style.height = "100vh";
//     overlay.style.background = "rgba(0,0,0,0)"; // transparent
//     overlay.style.zIndex = "900"; 

//     document.body.appendChild(overlay);

//     // Outside Click Close
//     overlay.onclick = function () {
//         closePanel();
//     };
// };

// // CLOSE PANEL
// function closePanel() {
//     panel.style.right = "-300px";

//     if (overlay) {
//         overlay.remove();
//         overlay = null;
//     }
// }

// // CLOSE BUTTON
// closeBtn.onclick = function () {
//     closePanel();
// };



function openPanel() {
    document.getElementById("categoryPanel").classList.add("open");
}

document.getElementById("closePanel").onclick = function () {
    document.getElementById("categoryPanel").classList.remove("open");
}

// -----------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.hash) {
        let section = document.querySelector(window.location.hash);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }
});





// SlideShow

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000); // 3 seconds
}

// Product Slide
let products = [
    {
        img: "./assets/images/product slide chicken burger1.webp",
        name: "Chicken Burger",
        desc: "Tender chicken patty stacked with fresh veggies and creamy sauce."
    },

    {
        img: "./assets/images/product slide choco cake.webp",
        name: "Chocolate Cake",
        desc: "Rich, moist chocolate layers topped with silky frosting."
    },

    {
        img: "./assets/images/product slide donut.webp",
        name: "Donuts",
        desc: "Soft, fluffy rings of sweetness — pure delight!"
    },

    {
        img: "./assets/images/product slide pomogranet.webp",
        name: "Pomegranate Fresh Juice",
        desc: "A refreshing and antioxidant-rich ruby red drink."
    },

    {
        img: "./assets/images/product slide hot Coffe.webp",
        name: "Hot Coffee",
        desc: "A Refreshing and Sweet hot drink!"
    }
];

let index = 0;

// // Arrow Button code
// document.getElementById("next").addEventListener("click", () => {
//     index = (index + 1) % products.length;
//     updateProduct();
// });

// document.getElementById("prev").addEventListener("click", () => {
//     index = (index - 1 + products.length) % products.length;
//     updateProduct();
// });

function updateProduct() {
    document.getElementById('prod-img').src = products[index].img;
    document.getElementById('prod-name').innerText = products[index].name;
    document.getElementById('prod-desc').innerText = products[index].desc;
}

setInterval(() => {
    index = (index + 1) % products.length;
    updateProduct();
}, 3000);





