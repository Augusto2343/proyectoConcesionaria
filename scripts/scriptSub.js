AOS.init();
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const linkDrop=document.querySelector('.contTools');
const btnDrop=document.querySelector('.btnTools');
let currentSlide = 0;
function desplegar(){
    linkDrop.classList.toggle('show');
    btnDrop.classList.toggle('btnActivado');
}
window.onclick = function(event) {
    if (!event.target.matches('.tools')) {
      for (let i = 0; i < linkDrop.length; i++) {
        let openDropdown = linkDrop[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          btnDrop.classList.remove('btnActivado');
        }
      }
    }
  };
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