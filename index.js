const swiper = new Swiper('.mySwiper', {
    loop: 100,
    slidesPerView: 3,  // отображать 3 слайда одновременно
    spaceBetween: 60,  // расстояние между слайдами 60px
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


