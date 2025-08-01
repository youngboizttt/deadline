$(document).ready(function () {
  if ($(".swiper-container.swiper-home-banner").length > 0) {
    // console.log('swiper-home-banner');
    // console.log('sw_home_banner');
    sw_home_banner();
  }
});
function sw_home_banner() {
  
  if ($(".swiper-home-banner .swiper-slide").length <= 1) {
    // update: bỏ icon next - prev khi banner chỉ có 1 item
    $('.swiper-home-banner .swiper-button-next').addClass('display_none')
    $('.swiper-home-banner .swiper-button-prev').addClass('display_none')
  }
  var swiper = new Swiper('.swiper-container.swiper-home-banner', {
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
    lazy: true,
    // touchStartPreventDefault: false,
    // simulateTouch: false,
  });
}
