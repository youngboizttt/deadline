
if ($(".swiper.sw_banner_hyperfast").length > 0) {
  function sw_home_hyperfast() {
    var swiper = new Swiper('.swiper.sw_banner_hyperfast', {
      // Optional parameters,
      // direction: 'horizontal',
      // loop: false,
      // mousewheelControl: false,
      // keyboardControl: true,
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
      /////
      lazy: true,
      // touchStartPreventDefault: false,
    });
  }

  $(document).ready(function () {
    sw_home_hyperfast();
  });
}