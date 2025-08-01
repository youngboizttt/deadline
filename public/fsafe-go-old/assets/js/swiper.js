const swiperConf = {
    /*
    */
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: -1,
    mousewheel: true,
    keyboard: true,
    speed: 900,//900
    followFinger: false,
    allowTouchMove: false, //enable/ disable double click 
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    scrollbar: {
                el:'.swiper-scrollbar',
              }
        

}

var swiper = new Swiper('.swiper-container', swiperConf);
swiper.on("slideChangeTransitionStart", function () {
  let currentSlide = swiper.activeIndex;
  // Animation video
  if (currentSlide != 1) {
    // console.log('not video')
    $('._video_y').removeClass("_show_video");
    $('._video_y').addClass("_hide_video");

    // xử lý menu khi ở video
    $('.header').removeClass('_mn_no_bg');

    // 
    $('._thumb_yt').removeClass("_show_thumbnail");
    $('._thumb_yt').addClass("_hide_thumbnail");
  }
  if (currentSlide === 1) {
    // console.log('video')
    $('._video_y').removeClass("_hide_video");
    $('._video_y').addClass("_show_video");

    // xử lý menu khi ở video
    $('.header').addClass('_mn_no_bg');

    $('._thumb_yt').removeClass("_hide_thumbnail");
    $('._thumb_yt').addClass("_show_thumbnail");
  }
});

swiper.on('slideChangeTransitionEnd', function () {
    var acs = document.querySelectorAll('.swiper-slide-active')[0];
    var hasVerticalScrollbar = acs.scrollHeight > acs.clientHeight;
    // console.log(hasVerticalScrollbar);

    if (hasVerticalScrollbar) {
        var scrollHeight = acs.scrollHeight;
        var slideSize = acs.swiperSlideSize;
        var scrollDifferenceTop = scrollHeight - slideSize;

        acs.addEventListener('wheel', findScrollDirectionOtherBrowsers);

        function findScrollDirectionOtherBrowsers(event) {
            var scrollTop = acs.scrollTop;
            scrollHeight = acs.scrollHeight;
            slideSize = acs.swiperSlideSize;
            var scrollDifference = scrollHeight - (scrollTop + slideSize);
            var delta;

            if (event.wheelDelta) {
                delta = event.wheelDelta;
            } else {
                delta = -1 * event.deltaY;
            }

            if (delta < 0) {
                if (scrollDifference == 0) {
                    swiper.mousewheel.enable();
                } else {
                    swiper.mousewheel.disable();

                }
            } else if (delta > 0) {
                if (scrollDifference == scrollDifferenceTop) {
                    swiper.mousewheel.enable();
                } else {
                    swiper.mousewheel.disable();

                }
            }

        }
    } else {
        swiper.mousewheel.enable();
    }

    // add: fix touch error
    // https://github.com/nolimits4web/swiper/issues/4829
    // https://github.com/nolimits4web/swiper/issues/3728
    function touchCapable() {
      return (
        'ontouchstart' in window||
        (window.DocumentTouch && document instanceof window.DocumentTouch) ||
        navigator.maxTouchPoints > 0 ||
        window.navigator.msMaxTouchPoints > 0
      );
    };
    swiperConfig = {
    simulateTouch : !touchCapable()
    }

});


 // xu ly navbar link va cac button toi section trong swiper
 /*
*/
// _toTop_m

$('#_toTop').click(function(){
  swiper.slideTo(0);
})
$('#_service').click(function(){
    // $(window).scrollTop(300);
    swiper.slideTo(1);
})
  $('#_feature').click(function(){
    swiper.slideTo(2);
  })
  $('#_price').click(function(){
    swiper.slideTo(4);
  })
  $('#_link_trai_nghiem').click(function(){
    swiper.slideTo(1);
  })
  $('#_link_dk').click(function(){
    swiper.slideTo(4);
  })
  $('#_link_dk1').click(function(){
    swiper.slideTo(5);
  })
  $('#_toguide').click(function(){
    swiper.slideTo(5);
  })
  $('#_toreviews').click(function(){
    swiper.slideTo(6);
  })
  $('#_tofaq').click(function(){
    swiper.slideTo(7);
  })
  
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // xu ly nut scroll
  $("#scroll-event").click(function () {
    swiper.slideNext();
  });
  
  // xu ly khi den slide last-1 thi an nut scroll-event
  swiper.on("slideChange", function () {
    var currentSlide = swiper.activeIndex;
    const idScrollEvent = $("#scroll-event");
    if (currentSlide >= 9) { //===
      idScrollEvent.css("display", "none");
    } else {
      idScrollEvent.css("display", "block");
    }
  });