
var sliderFooter;
var oldWidth = 0;

$(document).ready(function () {

    if (window.innerWidth >= 768) {

        if ($('.slider-footer-logo')) {
            sliderFooter = $('.slider-footer-logo').bxSlider({
                slideWidth: 200,
                minSlides: 4,
                maxSlides: 4,
                moveSlides: 1,
                slideMargin: 0,
                pager: false,
                infiniteLoop: false,
                control: false,
                hideControlOnEnd: true
            });
        }

    } else {

        if ($('.slider-footer-logo')) {
            sliderFooter = $('.slider-footer-logo').bxSlider({
                slideWidth: 270,
                minSlides: 2,
                maxSlides: 2,
                moveSlides: 2,
                slideMargin: 0,
                pager: false,
                hideControlOnEnd: true
            });
        }

    }
    oldWidth = window.innerWidth;
//    slideLargeFormat();
});

$(window).resize(function () {
//    clickSearch();
//    clickRightMenu();

    if (window.innerWidth >= 768) {

        if (oldWidth < 768) {

            if (sliderFooter != undefined
                    && (typeof sliderFooter.reloadSlider == 'function')) {
                sliderFooter.reloadSlider({
                slideWidth: 200,
                minSlides: 4,
                maxSlides: 4,
//                moveSlides: 1,
                slideMargin: 0,
                pager: false,
                infiniteLoop: false,
//                control: false,
                hideControlOnEnd: true
                });
            }
        }

    } else {

        if (oldWidth >= 768) {

            if (sliderFooter != undefined
                    && (typeof sliderFooter.reloadSlider == 'function')) {
                sliderFooter.reloadSlider({
                slideWidth: 270,
                minSlides: 2,
                maxSlides: 2,
                slideMargin: 0,
                pager: false,
                infiniteLoop: false,
                control: false,
                hideControlOnEnd: true
                });
            }

        }

    }
    oldWidth = window.innerWidth;

//    slideLargeFormat();

});