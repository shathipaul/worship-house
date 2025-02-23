const bannerCarousel = document.getElementById('bannerCarousel');
const prevButton = document.getElementById('prev-bannerCarousel');
const nextButton = document.getElementById('next-bannerCarousel');

let currentIndex = 0;
const totalSlides = bannerCarousel.children.length;

function updateCarousel() {
    const offset = -currentIndex * 100; // Move the images left/right
    bannerCarousel.style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides; // Loop back to first
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop back to last
    updateCarousel();
});