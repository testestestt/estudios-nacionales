const swiper = new Swiper('.swiper-detras', {
    slidesPerView: 1.52,
    spaceBetween: 15,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        768: {
            slidesPerView: 1.7,
            spaceBetween: 30,
        },
        993: {
            spaceBetween: 30,
            slidesPerView: 2.4,
        }
    }
});