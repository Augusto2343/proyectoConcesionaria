AOS.init();
const toast = document.querySelector(".toast");
const slides = document.querySelectorAll('.carousel-slide');
const navBtns = document.querySelectorAll('.nav-btn');
let currentSlide = 0;
const linkDrop=document.querySelector('.contTools');
const btnDrop=document.querySelector('.btnTools');
function showSlide(n) {
  slides.forEach((slide, index) => {
    slide.style.display = index === n ? 'block' : 'none';
  });
  currentSlide = n;
  updateNav();
}

function updateNav() {
  navBtns.forEach((btn, index) => {
    btn.classList.toggle('active', index === currentSlide);
  });
}

navBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => showSlide(index));
});

if (slides.length > 0) {
  showSlide(currentSlide);
}

function showToast() {
  if (toast) toast.style.display = "block";
}
function hiddenToast() {
  if (toast) toast.style.display = "none";
}
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
showToast();