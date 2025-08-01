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

swiper.on('slideChangeTransitionEnd', function () {
    var acs = document.querySelectorAll('.swiper-slide-active')[0];
    var hasVerticalScrollbar = acs.scrollHeight > acs.clientHeight;
    console.log(hasVerticalScrollbar);

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


    

});


 // xu ly navbar link va cac button toi section trong swiper
 /*
*/
 $('#_service').click(function(){
    $(window).scrollTop(300);
    swiper.slideTo(1);
  })
  $('#_feature').click(function(){
    $(window).scrollTop(700);
    swiper.slideTo(2);
  })
  $('#_price').click(function(){
    $(window).scrollTop(1000);
    swiper.slideTo(4);
  })
  $('#_link_trai_nghiem').click(function(){
    swiper.slideTo(1);
  })
  $('#_link_dk').click(function(){
    swiper.slideTo(4);
  })
  $('#_link_dk1').click(function(){
    swiper.slideTo(4);
  })
  $('#_toguide').click(function(){
    swiper.slideTo(5).scrollTop(300);
  })
  /*
  $("#_toguide").click(function() { 
    console.log('_toguide');
    $('html,body').animate({
        scrollTop: $("._e_toguide").offset().top},
        'slow');
    });

    */