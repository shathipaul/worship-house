document.querySelectorAll(".featuredContainer").forEach((carouselContainer, idx) => {
    const carousel = carouselContainer.querySelector(".featureCarousel");
    const prevBtn = carouselContainer.querySelector(`#prev-${idx + 1}`);
    const nextBtn = carouselContainer.querySelector(`#next-${idx + 1}`);

    let index = 0;
    const images = carousel.children;
    const totalImages = images.length;

    function getImageWidth() {
        return images[0].clientWidth + 20; // Including gap
    }

    function updateCarousel() {
        carousel.style.transform = `translateX(${-index * getImageWidth()}px)`;
    }

    nextBtn.addEventListener("click", () => {
        if (index < totalImages - 2) {
            index++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });

    // Mobile Touch Scroll
    let isDragging = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener("touchstart", (e) => {
        isDragging = true;
        startX = e.touches[0].pageX;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener("touchmove", (e) => {
        if (!isDragging) return;
        const walk = startX - e.touches[0].pageX;
        carousel.scrollLeft = scrollLeft + walk;
    });

    carousel.addEventListener("touchend", () => {
        isDragging = false;
    });
});