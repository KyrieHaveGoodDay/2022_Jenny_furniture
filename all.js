var swiper = new Swiper(".mySwiper", {
    // api 功能
    slidesPerView: 1.5,
    loop: true,
    breakpoints: {
        1000: {
            slidesPerView: 4.5,
        },
        768: {
            slidesPerView: 3.5,

        },
        500: {
            slidesPerView: 2.5,

        }
    },
    navigation: {
        nextEl: ".prev",
        prevEl: ".next",
      },

});

