jQuery(document).ready(function($) {

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ owlCarousel ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // var loops_local_2_net;
    // var count_local_2_net = $("._js_local_2_net").length;
    // var width_2net = $(window).width();
    // if (count_local_2_net <= 3 && width_2net >= 1024) {
    //     loops_local_2_net = false;
    // } else loops_local_2_net = true;
    // "use strict";
    $('#home_local_all_net').owlCarousel({
        loop: false, // nếu xét loop dựa theo số item thì dùng:  loop: loops
        center: false,
        items: 3,
        margin: 24,
        autoplay: false,
        dots: true,
        nav: true,
        autoplayTimeout: 9500,
        smartSpeed: 250,
        navText: ['<i class="nav-owl arrow-left"></i>', '<i class="nav-owl arrow-right"></i>'],
        responsive: {
            0: {
                items: 1,
                loop: false,

            },
            768: {
                items: 2,
                loop: false,

            },
            1024: {
                items: 3
            },
            1170: {
                items: 4
            }
        }
    });

    // if (count_local_2_net == 3 && width_2net > 1024) {
    //     $("#home_local_all_net").addClass('_js-owl-3item');
    //     window.dispatchEvent(new Event('resize')); //Refreshing Owl Carousel
    // }
    // if (count_local_2_net <= 2 && width_2net > 1024) {
    //     $("#home_local_all_net").addClass('add_mgl_2item');
    //     window.dispatchEvent(new Event('resize'));
    // } else if (count_local_2_net >= 4 && width_2net <= 1024) {
    //     $("#home_local_all_net").addClass('_js-remove-owl-3item');
    //     window.dispatchEvent(new Event('resize'));
    // }



    $('#net-package-suggest').owlCarousel({
        loop: false, // nếu xét loop dựa theo số item thì dùng:  loop: loops
        center: false,
        items: 3,
        margin: 12,
        autoplay: false,
        dots: true,
        nav: true,
        autoplayTimeout: 9500,
        smartSpeed: 250,
        navText: ['<i class="nav-owl arrow-left"></i>', '<i class="nav-owl arrow-right"></i>'],
        // freeDrag: false,
        // pullDrag: false,
        responsive: {
            0: {
                items: 1,
                loop: false,
                margin: 4,
                // stagePadding: 68,
                stagePadding: 72,
            },
            768: {
                items: 2,
                loop: false,

            },
            1024: {
                items: 3
            },
            1170: {
                items: 4
            }
        }
    });

    /*trường hợp chỉ có 1 item 'owl-item'*/
    if ($('#net-package-suggest .owl-item').length === 1) {
        $('#net-package-suggest .owl-stage').addClass('_js_one_item');
    }

    $('._goi-le-fptplay').owlCarousel({
        loop: false, // nếu xét loop dựa theo số item thì dùng:  loop: loops
        center: false,
        items: 3,
        margin: 12,
        autoplay: false,
        dots: true,
        nav: true,
        autoplayTimeout: 9500,
        smartSpeed: 250,
        navText: ['<i class="nav-owl arrow-left"></i>', '<i class="nav-owl arrow-right"></i>'],
        responsive: {
            0: {
                items: 1,
                loop: false,
                margin: 4,
                // stagePadding: 68,
                stagePadding: 72,
            },
            768: {
                items: 2,
                loop: false,

            },
            1024: {
                items: 3
            },
            1170: {
                items: 4
            }
        }
    });

    /*trường hợp chỉ có 1 item 'owl-item'*/
    if ($('._goi-le-fptplay .owl-item').length === 1) {
        $('._goi-le-fptplay .owl-stage').addClass('_js_one_item');
    }

});