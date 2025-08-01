$(document).ready(function () {
  const SCROLLING_HEIGHT = $(window).height() * 2.5;
  const _w = $(window).width();
  // Scrolling
  if ($("#scrolling-swiper").length) {
    const items = $("#scrolling-swiper").find(".swiper-slide").length;
    const step = SCROLLING_HEIGHT / (items + 2);
    const section = $("#scrolling-swiper").closest(".section--fullscreen");

    const swiper = new Swiper("#scrolling-swiper", {
      allowTouchMove: false,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      speed: 300,
      on: {
        init: function () {
          $(window).scroll(function (event) {
            const scroll = $(window).scrollTop();
            if ($(window).width() >= 768) {
              const index = Math.round(scroll / step);
  
              let targetIndex = index;
              if (index >= items) {
                targetIndex = items;
              }
  
              if (!$("#scrolling-swiper").closest(".section--fullscreen").hasClass('is-last-section')) {
                swiper.slideTo(targetIndex);
              }
  
              if (scroll > SCROLLING_HEIGHT - ($(window).height() / 3)) {
                section.addClass('is-last-section');
                section.removeClass('run-animate');
              } else {
                section.removeClass('is-last-section');
                section.addClass('run-animate');
              }
            }
          });

          setTimeout(function() {
            section.addClass('animate-moving');
          }, 1000);

          $('.section--fullscreen')
            .on( 'swipeup', function( ev, touch ) {
              const scroll = $(window).scrollTop();
              if ($(window).width() <= 768) {
                const currentIndex = $("#scrolling-swiper").find('.swiper-slide-active').index();
                if (currentIndex + 1 < items) {
                  swiper.slideTo(currentIndex + 1);
                } else {
                  $('html, body').addClass('scollable');
                }
              }
            })
            .on( 'swipedown', function( ev, touch ) {
              $('html, body').removeClass('scollable');
              if ($(window).width() <= 768) {
                const currentIndex = $("#scrolling-swiper").find('.swiper-slide-active').index();
                if (currentIndex - 1 >= 0) {
                  swiper.slideTo(currentIndex - 1);
                }
              }
            });
        },
        slideChangeTransitionStart: function ({ activeIndex }) {
          if (activeIndex === 0) {
            section.addClass("overlay-top-left");
            section.removeClass("overlay-left-center");
          } else {
            section.addClass("overlay-left-center");
            section.removeClass("overlay-top-left");
          }
        },
      },
    });

    
    $('.arrow-down').on('click', function() {
      const idx = $("#scrolling-swiper").find('.swiper-slide-active').index();
      const dTop = $('.dark-bg').offset().top;

      if ($(window).width() >= 768) {
        if (idx + 1 < items) {
          $('html, body').animate({ scrollTop: (idx + 1) * step}, 100);
        } else {
          $('html, body').animate({ scrollTop: dTop - 100}, 100);
        }
        
      } else {
        if (idx + 1 < items) {
          swiper.slideTo(idx + 1);
        } else {
          $('html, body').animate({ scrollTop: dTop - 100}, 100);
          $('html, body').addClass('scollable');
        }
      }
    });
      
    //  else {
    //   const currentIndex = $("#scrolling-swiper").find('.swiper-slide-active').index();
    //   console.log(currentIndex);
    //   if (currentIndex - 1 >= 0) {
    //     swiper.slideTo(currentIndex - 1);
    //   }
    // }
  }

  // Hover
  if (_w > 540) {
    $(".page-section").hover(function() {
      const self = $(this);
      $(".page-section").addClass("hover-out");
      self.addClass("hover-in");
    }, function() {
      $(".page-section").removeClass("hover-out");
      $(".page-section").removeClass("hover-in");
    });
  }


  // Faq-show
  if ($(".item-faq").length) { 
    var $item = $('.item-faq');

    $item.click(function(e) {
      var $current = $(this);
      e.preventDefault()
      e.stopPropagation()
      $item.removeClass('show-faq')
      $current.addClass('show-faq')
      $current.find('input').prop('checked', true);
    });
  }
});
