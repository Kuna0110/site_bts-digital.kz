//Анимированный бургер
const navButton = document.querySelector('.nav-button');
if (navButton) {
    const navBox = document.querySelector('.nav-box');
    navButton.addEventListener('click', function(e) {
        document.body.classList.toggle('lock');
        navButton.classList.toggle('_active');
    });
}

$(document).ready(function() {
    let position = 0;
    const sliderToShow = 3;
    const sliderToScroll = 3;
    const container = $('.products-carousel-inner');
    const track = $('.slick-slider');
    const box = $('.slick-box');
    const btnPrev = $('.slick-arrow-prev');
    const btnNext = $('.slick-arrow-next');
    const boxWidth = container.width() / sliderToShow;
    const movePosition = sliderToScroll + boxWidth;

    const setPosition = ()  => {
        box.css({
            transform: `translateX(${position}px)`
        });
    }

    btnNext.click(function() {
        position -= movePosition;

        setPosition();
    });

    btnPrev.click(function() {
        position += movePosition;

        setPosition();
    });
});

//Первый слайдер сдвиг влево
/*const buttonPrev = document.querySelector('.slick-arrow-prev');
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
}*/