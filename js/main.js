//Анимированный бургер
const navButton = document.querySelector('.nav-button');
if (navButton) {
    const navBox = document.querySelector('.nav-box');
    navButton.addEventListener('click', function(e) {
        document.body.classList.toggle('lock');
        navButton.classList.toggle('_active');
    });
}