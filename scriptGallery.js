AOS.init();
const toast = document.querySelector(".toast");
const btnYes = document.querySelector("#linkToastYes");
const btnNo = document.querySelector("#linkToastNo")
const slides = document.querySelectorAll('.carousel-slide');
const navBtns = document.querySelectorAll('.nav-btn');
const botones={} ;
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
  updateNav();
}

navBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => showSlide(index));
});

function updateNav() {
  navBtns.forEach((btn, index) => {
    if (index === currentSlide) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}
function hiddenSlide(){
    
    while(currentSlide==0){
        slides[currentSlide+n].style.display="none";
    }
}

showSlide(currentSlide);
for (let i = 1; i < slides.length; i++) {
  slides[i].style.display = 'none';
}
function hiddenToast(){
  toast.style.display="none";

}
function showToast(){
    toast.style.display="block";
}
showToast();