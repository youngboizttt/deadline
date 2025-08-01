$(document).ready(function () {
  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 2.3,
    spaceBetween: 30,
    mousewheel: false,
    grabCursor: true,
    loop: true,
    allowTouchMove: true,
    /*
    
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
      },
  */
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },

    // add arrow up down
    navigation: {
      prevEl: '.slidePrev-btn',
      nextEl: '.slideNext-btn'
    }
  });


  // // Lấy phần tử swiper container
  // var swiperContainer = document.querySelector('.swiper-container');

  // // Lắng nghe sự kiện lăn chuột và ngăn chặn nó
  // swiperContainer.addEventListener('wheel', function (event) {
  //   event.preventDefault();
  // }, { passive: false });



    // cho hiệu ứng tự động trược, hover vào thì dừng ở section Kết nối hội viên
    var swiper = new Swiper('.custom-sw', {
      direction: 'vertical',
      slidesPerView: 'auto',
      mousewheel: true,
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
      autoplay: {
        delay: 0, // false
        disableOnInteraction: false,
      },
      speed: 5000, // Tốc độ của hiệu ứng cuộn
      loop: true,
    });
  
    $('.custom-sw').hover(function(){
      swiper.autoplay.stop();
    }, function(){
      swiper.autoplay.start();
    });
  
    $('.slidePrev-btn').click(function(){
      swiper.slidePrev();
    });
  
    $('.slideNext-btn').click(function(){
      swiper.slideNext();
    });
});