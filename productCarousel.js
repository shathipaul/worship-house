document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("productCarousel");
    const prevBtn = document.getElementById("prev-productCarousel");
    const nextBtn = document.getElementById("next-productCarousel");

    let cardWidth = document.querySelector(".newProductCards").offsetWidth + 20; // Include gap

    function slideCarousel(direction) {
        carousel.scrollBy({
            left: direction * cardWidth * 2,
            behavior: "smooth",
        });
    }

    nextBtn.addEventListener("click", () => slideCarousel(1));
    prevBtn.addEventListener("click", () => slideCarousel(-1));

    window.addEventListener("resize", () => {
        cardWidth = document.querySelector(".newProductCards").offsetWidth + 20;
    });
});

// Mobile Scroll (Touch)
// newProductsCarousel.addEventListener('touchstart', (e) => {
//     const startX = e.touches[0].pageX;
//     let moveX = 0;

//     const touchMove = (e) => {
//         moveX = startX - e.touches[0].pageX;
//         newProductsCarousel.style.transform = `translateX(${moveX + scrollPosition}px)`;
//     };

//     const touchEnd = () => {
//         scrollPosition = moveX + scrollPosition;
//         newProductsCarousel.style.transform = `translateX(${scrollPosition}px)`;
//         newProductsCarousel.removeEventListener('touchmove', touchMove);
//         newProductsCarousel.removeEventListener('touchend', touchEnd);
//     };

//     newProductsCarousel.addEventListener('touchmove', touchMove);
//     newProductsCarousel.addEventListener('touchend', touchEnd);
// });