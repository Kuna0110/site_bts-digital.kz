//Анимированный бургер
const navButton = document.querySelector('.nav-button');
if (navButton) {
    const navBox = document.querySelector('.nav-box');
    navButton.addEventListener('click', function(e) {
        document.body.classList.toggle('lock');
        navButton.classList.toggle('_active');
    });
}
//Первый слайдер сдвиг влево
const buttonPrev = document.querySelector('.slick-arrow-prev');
if (buttonPrev) {
    const slickSliderPrev = document.querySelector('.slick-box');
    buttonPrev.addEventListener('click', function(e) {
        slickSliderPrev.classList.toggle('prev');
    });
}

//Первый слайдер сдвиг вправо
const buttonNext = document.querySelector('.slick-arrow-next');
if (buttonNext) {
    const slickSliderPrev = document.querySelector('.slick-box');
    buttonNext.addEventListener('click', function(e) {
        slickSliderPrev.classList.toggle('next');
    });
}