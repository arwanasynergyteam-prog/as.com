// Image Slider Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-item');

function nextSlide() {
    if (slides.length > 0) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
}

// Menjalankan pergantian gambar setiap 5 detik secara otomatis
if (slides.length > 0) {
    setInterval(nextSlide, 5000);
}