AOS.init();
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let currentSlide = 0;

const showSlide = () => {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });
};

const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
};

const prevSlide = () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide();
};

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);