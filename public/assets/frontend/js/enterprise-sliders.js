
var sliderProductService;
var sliderNews;
var sliderLarge;
var sliderFooter;
var sliderNavigation;
var sliderOtherNews;
var oldWidth = 0;

//function slideLargeFormat() {
//    if ($('#bx-pager-large') && $('.wrap-text-slide>div:last-child').position()) {
//        var wItemTextImg = ($('#bx-pager-large>.container').innerWidth() - 100) / 5;
//        $('.wrap-text-slide>div').css('width', wItemTextImg);
//        var pLeft = $('.wrap-text-slide>div:last-child').position().left;
//        $('#slide-large .bx-wrapper .bx-prev').css('left', pLeft + wItemTextImg + 15);
//        $('#slide-large .bx-wrapper .bx-next').css('left', pLeft + wItemTextImg + 70);
//        $('#slide-large .bx-controls-auto-item').css('left', pLeft + wItemTextImg + 45);
//    }
//}

//$(document).on('click', '.bx-caption', function(){
//    var func = $( $(this).parent() ).find('a').attr('onclick');
//    eval(func);
//    });

$(document).ready(function () {

//    $(".bxslider li").each(function () {
//        var sLink = $(this).find('a').attr('href');
//        $(this).find('div').click(function () {
//            window.location = sLink;
//        });
//    });

    $(".slide").each(function () {
        var sLink = $(this).find('a').attr('href');
//        alert(sLink);
        $(this).click(function () {
//            alert(sLink);
            window.location = sLink;
        });
    });




    if (window.innerWidth >= 768) {

        if ($('.bxslider-enterprise-large')) {
            sliderLarge = $('.bxslider-enterprise-large').bxSlider({
//                pagerCustom: '#bx-enterprise-pager-large',
                auto: true,
                autoControls: false,
                adaptiveHeight: false,
                pager: true,
                responsive: true
//                onSliderLoad: function(currentIndex){
//                    $('a[data-slide-index="0"]').addClass('active');
//                    $('#bx-pager-large .wrap-text-slide').find('a.active').parent().addClass('banner-bottom-border');
//                },
//                onSlideAfter: function($slideElement, oldIndex, newIndex){
//                    $('#bx-pager-large .wrap-text-slide').find('.banner-bottom-border').removeClass('banner-bottom-border');
//                    $('#bx-pager-large .wrap-text-slide').find('a.active').parent().addClass('banner-bottom-border');
//                }
            });
        }

        if ($('.slider-product-service')) {
            sliderProductService = $('.slider-product-service').bxSlider({
                auto: true,
                slideWidth: 260,
                minSlides: 2,
                maxSlides: 4,
                moveSlides: 1,
                slideMargin: 20,
                pager: false,
                infiniteLoop: true,
                hideControlOnEnd: true
            });
        }

        if ($('.slider-news')) {
            sliderNews = $('.slider-news').bxSlider({
                slideWidth: 550,
                minSlides: 2,
                maxSlides: 2,
                moveSlides: 1,
                slideMargin: 10,
                pager: false,
                infiniteLoop: false,
                control: false,
                hideControlOnEnd: true
            });
        }

//        if ($('.slider-social')) {
//            sliderFooter = $('.slider-social').bxSlider({
//                slideWidth: 200,
//                minSlides: 4,
//                maxSlides: 4,
////                moveSlides: 1,
//                slideMargin: 30,
//                pager: false,
//                infiniteLoop: false,
//                control: false
//            });
//        }

        if ($('.slider-other-news')) {
            $('.slider-other-news').bxSlider({
                slideWidth: 150,
                minSlides: 2,
                maxSlides: 7,
                moveSlides: 1,
                slideMargin: 10,
                pager: false,
                infiniteLoop: false,
                hideControlOnEnd: true
            });
        }

        if ($('#slide-partner')) {
            $('#slide-partner').bxSlider({
                slideWidth: 187,
                minSlides: 2,
                maxSlides: 4,
                moveSlides: 2,
                pager: false,
                infiniteLoop: false
            });
        }

//        if ($('#slider-navigation')) {
//            sliderNavigation = $('#slider-navigation').bxSlider({
//                slideWidth: 250,
//                minSlides: 4,
//                maxSlides: 4,
//                moveSlides: 1,
//                slideMargin: 15,
//                pager: false,
//                infiniteLoop: false
//            });
//        }

    } else {

        if ($('.bxslider-enterprise-large')) {
            sliderLarge = $('.bxslider-enterprise-large').bxSlider({
                auto: true,
                autoControls: false,
                adaptiveHeight: false,
                pager: true
            });
        }

        if ($('.slider-product-service')) {
            sliderProductService = $('.slider-product-service').bxSlider({
                auto: true,
                minSlides: 2,
                maxSlides: 2,
                slideWidth: 240,
                moveSlides: 1,
                slideMargin: 30,
                pager: false,
                infiniteLoop: true,
                hideControlOnEnd: true
            });
        }

        if ($('.slider-news')) {
            sliderNews = $('.slider-news').bxSlider({
                slideWidth: 767,
                minSlides: 1,
                maxSlides: 1,
                moveSlides: 1,
                pager: false,
                infiniteLoop: false,
                hideControlOnEnd: true
            });
        }

//        if ($('.slider-social')) {
//            sliderFooter = $('.slider-social').bxSlider({
//                slideWidth: 270,
//                minSlides: 2,
//                maxSlides: 2,
//                moveSlides: 2,
//                slideMargin: 20,
//                pager: false
//            });
//        }

        if ($('.slider-other-news')) {
            sliderOtherNews = $('.slider-other-news').bxSlider({
                slideWidth: 150,
                minSlides: 2,
                maxSlides: 2,
                moveSlides: 1,
                slideMargin: 10,
                pager: false,
                infiniteLoop: false,
                hideControlOnEnd: true
            });
        }

//        if ($('#slider-navigation')) {
//            sliderNavigation = $('#slider-navigation').bxSlider({
//                slideWidth: 120,
//                minSlides: 2,
//                maxSlides: 2,
//                moveSlides: 1,
//                slideMargin: 10,
//                pager: false,
//                infiniteLoop: false,
//                hideControlOnEnd: true
//            });
//        }

    }
    oldWidth = window.innerWidth;
//    slideLargeFormat();
});

$(window).resize(function () {
//    clickSearch();
//    clickRightMenu();

    if (window.innerWidth >= 768) {

        if (oldWidth < 768) {

//            if (sliderLarge != undefined
//                && (typeof sliderLarge.reloadSlider == 'function')) {
//                sliderLarge.reloadSlider({
////                    pagerCustom: '#bx-pager-large',
//                    auto: true,
//                    autoControls: false,
//                    adaptiveHeight: true,
//                    pager: true
////                    onSliderLoad: function(currentIndex){
////                        $('a[data-slide-index="0"]').addClass('active');
////                        $('#bx-pager-large .wrap-text-slide').find('a.active').parent().addClass('banner-bottom-border');
////                    },
////                    onSlideAfter: function($slideElement, oldIndex, newIndex){
////                        $('#bx-pager-large .wrap-text-slide').find('.banner-bottom-border').removeClass('banner-bottom-border');
////                        $('#bx-pager-large .wrap-text-slide').find('a.active').parent().addClass('banner-bottom-border');
////                    }
//                });
//                //slideLargeFormat();
//                    }

            if (sliderProductService != undefined
                    && (typeof sliderProductService.reloadSlider == 'function')) {
                sliderProductService.reloadSlider({
                    auto: true,
                    slideWidth: 260,
                    minSlides: 2,
                    maxSlides: 4,
                    moveSlides: 1,
                    slideMargin: 20,
                    pager: false,
                    infiniteLoop: true,
                    hideControlOnEnd: true
                });
            }

            if (sliderNews != undefined
                    && (typeof sliderNews.reloadSlider == 'function')) {
                sliderNews.reloadSlider({
                    slideWidth: 550,
                    minSlides: 2,
                    maxSlides: 2,
                    moveSlides: 1,
                    slideMargin: 10,
                    pager: false,
                    infiniteLoop: false,
                    control: false,
                    hideControlOnEnd: true
                });
            }

//            if (sliderFooter != undefined
//                    && (typeof sliderFooter.reloadSlider == 'function')) {
//                sliderFooter.reloadSlider({
//                slideWidth: 200,
//                minSlides: 4,
//                maxSlides: 4,
////                moveSlides: 1,
//                slideMargin: 30,
//                pager: false,
//                infiniteLoop: false,
////                control: false,
//                hideControlOnEnd: true
//                });
//            }

            if (sliderNavigation != undefined
                    && (typeof sliderNavigation.reloadSlider == 'function')) {
                sliderNavigation.reloadSlider({
                    slideWidth: 250,
                    minSlides: 4,
                    maxSlides: 4,
                    moveSlides: 1,
                    slideMargin: 15,
                    pager: false,
                    infiniteLoop: false
                });
            }
        }

    } else {

        if (oldWidth >= 768) {


//            if (sliderLarge != undefined
//                && (typeof sliderLarge.reloadSlider == 'function')) {
//                sliderLarge.reloadSlider({
//                    auto: true,
//                    autoControls: false,
//                    adaptiveHeight: true,
//                    pager: false
//                });
//
//            }

            if (sliderProductService != undefined
                    && (typeof sliderProductService.reloadSlider == 'function')) {
                sliderProductService.reloadSlider({
                    auto: true,
                    slideWidth: 240,
                    minSlides: 2,
                    maxSlides: 2,
                    moveSlides: 1,
                    slideMargin: 30,
                    pager: false,
                    infiniteLoop: true,
                    hideControlOnEnd: true
                });
            }

            if (sliderNews != undefined
                    && (typeof sliderNews.reloadSlider == 'function')) {
                sliderNews.reloadSlider({
                    slideWidth: 767,
                    minSlides: 1,
                    maxSlides: 1,
                    moveSlides: 1,
                    pager: false,
                    infiniteLoop: false,
                    hideControlOnEnd: true
                });
            }

//            if (sliderFooter != undefined
//                    && (typeof sliderFooter.reloadSlider == 'function')) {
//                sliderFooter.reloadSlider({
//                slideWidth: 270,
//                minSlides: 2,
//                maxSlides: 2,
//                slideMargin: 30,
//                pager: false,
//                infiniteLoop: false,
//                control: false,
//                hideControlOnEnd: true
//                });
//            }

            if (sliderNavigation != undefined
                && (typeof sliderNavigation.reloadSlider == 'function')) {

                sliderNavigation.reloadSlider({
                    slideWidth: 120,
                    minSlides: 2,
                    maxSlides: 2,
                    moveSlides: 1,
                    slideMargin: 10,
                    pager: false,
                    infiniteLoop: false,
                    hideControlOnEnd: true
                });
            }

        }

    }
    oldWidth = window.innerWidth;

//    slideLargeFormat();

});