$(document).ready(function () {
    var mySwiper = new Swiper('.swiper-container.swiper-home-banner', {
        /*
        Optional parameters,
        direction: 'horizontal',
        loop: false,
        mousewheelControl: false,
        keyboardControl: true,
        */
        loop: true,
        pagination: {
            el: ".swiper-home-banner .swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-home-banner .swiper-button-next",
            prevEl: ".swiper-home-banner .swiper-button-prev",
          },
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
          },

    })
});
