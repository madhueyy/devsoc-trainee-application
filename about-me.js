const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let counter = 0;
const slideWidth = slides[0].clientWidth;

nextBtn.addEventListener('click', () => {
    counter++;
    carousel.style.transform = `translateX(${-slideWidth * counter}px)`;
    
    if (counter === slides.length - 1) {
        counter = -1;
    }
});

prevBtn.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }

    carousel.style.transform = `translateX(${-slideWidth * counter}px)`;
});