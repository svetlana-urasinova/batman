const swiper = new Swiper('.main-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: '.main-slider__arrow',
    },
    breakpoints: {
        400: {
            slidesPerView: 2,
            spaceBetween: 28
        }
    },
});

const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('_open');
});