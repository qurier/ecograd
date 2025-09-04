const slides = document.querySelectorAll('.slides img');
const prev = document.querySelector('.slider-prev');
const next = document.querySelector('.slider-next');
const dotsContainer = document.querySelector('.slider-dots');

let current = 0;

// Создаем точки навигации
slides.forEach((_, idx) => {
    const dot = document.createElement('button');
    if(idx === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(idx));
    dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll('button');

function updateSlides() {
    slides.forEach((slide, idx) => {
        slide.classList.remove('active');
        dots[idx].classList.remove('active');
        if(idx === current) slide.classList.add('active');
        if(idx === current) dots[idx].classList.add('active');
    });
    const offset = -current * slides[0].clientWidth;
    document.querySelector('.slides').style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    current = (current + 1) % slides.length;
    updateSlides();
}

function prevSlide() {
    current = (current - 1 + slides.length) % slides.length;
    updateSlides();
}

function goToSlide(idx) {
    current = idx;
    updateSlides();
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);



// Инициализация
updateSlides();


