jQuery(document).ready(function($) {
    // 1---------------------------------------------------

    // xử lý khi:
    // + số item <=3 thì kg cho loop
    // + số item >3 thì cho loop
    var loops;
    var count_item = $("#latency_owl_1>._countItem").length;
    // console.log(count_item);
    var widthsc = $(window).width();
    if (count_item <= 3 && widthsc >= 1024) {
        loops = false;
    } else loops = true;
    "use strict";
    // slide 1
    $('#latency_owl_1').owlCarousel({
        loop: true, // nếu xét loop dựa theo số item thì dùng:  loop: loops/false
        center: false,
        items: 3,
        margin: 0,
        autoplay: false,
        dots: true,
        nav: true,
        autoplayTimeout: 9500, //8500
        smartSpeed: 250, //450
        navText: ['<i class="owl-arrow-game-left"></i>', '<i class="owl-arrow-game-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1024: {
                items: 1
            },
            1170: {
                items: 1
            }
        }
    });
    // kiem tra so item để canh giữa toàn bộ	
    var widthsc = $(window).width();
    if (count_item == 3 && widthsc > 1024) {
        // $("#latency_owl_1 .owl-stage").addClass('add_mgl')
    }
    if (count_item <= 2 && widthsc > 1024) {
        // $("#latency_owl_1 .owl-stage").addClass('add_mgl_2item')
    } else if (count_item >= 4 && widthsc <= 1024) {
        // $("#latency_owl_1 .owl-stage").addClass('remove_mgl')
    }

    // 2---------------------------------------------------
    var loops_2;
    var count_item_2 = $("#latency_owl_2>._countItem").length;
    // console.log(count_item_2);
    var widthsc_2 = $(window).width();
    if (count_item_2 <= 3 && widthsc_2 >= 1024) {
        loops_2 = false;
    } else loops_2 = true;
    "use strict";
    // slide 1
    $('#latency_owl_2').owlCarousel({
        loop: true, // nếu xét loop dựa theo số item thì dùng:  loop: loops_2/false
        center: false,
        items: 3,
        margin: 0,
        autoplay: false,
        dots: true,
        nav: true,
        autoplayTimeout: 9500, //8500
        smartSpeed: 250, //450
        navText: ['<i class="owl-arrow-game-left"></i>', '<i class="owl-arrow-game-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1024: {
                items: 1
            },
            1170: {
                items: 1
            }
        }
    });
    // kiem tra so item để canh giữa toàn bộ	
    var widthsc_2 = $(window).width();
    if (count_item_2 == 3 && widthsc_2 > 1024) {
        // $("#latency_owl_2 .owl-stage").addClass('add_mgl')
    }
    if (count_item_2 <= 2 && widthsc_2 > 1024) {
        // $("#latency_owl_2 .owl-stage").addClass('add_mgl_2item')
    } else if (count_item_2 >= 4 && widthsc_2 <= 1024) {
        // $("#latency_owl_2 .owl-stage").addClass('remove_mgl')
    }

    // 3 ------------------------------------------------------
    var loops_3;
    var count_item_3 = $("#latency_owl_3>._countItem").length;
    // console.log(count_item_3);
    var widthsc_3 = $(window).width();
    if (count_item_3 <= 3 && widthsc_3 >= 1024) {
        loops_3 = false;
    } else loops_3 = true;
    "use strict";
    // slide 1
    $('#latency_owl_3').owlCarousel({
        loop: true, // nếu xét loop dựa theo số item thì dùng:  loop: loops_3/false
        center: false,
        items: 3,
        margin: 0,
        autoplay: false,
        dots: true,
        nav: true,
        autoplayTimeout: 9500, //8500
        smartSpeed: 250, //450
        navText: ['<i class="owl-arrow-game-left"></i>', '<i class="owl-arrow-game-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1024: {
                items: 1
            },
            1170: {
                items: 1
            }
        }
    });
    // kiem tra so item để canh giữa toàn bộ	
    var widthsc_3 = $(window).width();
    if (count_item_3 == 3 && widthsc_3 > 1024) {
        // $("#latency_owl_3 .owl-stage").addClass('add_mgl')
    }
    if (count_item_3 <= 2 && widthsc_3 > 1024) {
        // $("#latency_owl_3 .owl-stage").addClass('add_mgl_3item')
    } else if (count_item_3 >= 4 && widthsc_3 <= 1024) {
        // $("#latency_owl_3 .owl-stage").addClass('remove_mgl')
    }

    // playgame_owl ---------------------------------
    var loops_playgame;
    var count_item_playgame = $("#playgame_owl>._countItem").length;
    // console.log(count_item_playgame);
    var widthsc_playgame = $(window).width();
    if (count_item_playgame <= 3 && widthsc_playgame >= 1024) {
        loops_playgame = false;
    } else loops_playgame = true;
    "use strict";
    // slide 1
    $('#playgame_owl').owlCarousel({
        loop: true, // nếu xét loop dựa theo số item thì dùng:  loop: loops_playgame/false
        center: false,
        items: 3,
        margin: 4,
        autoplay: false,
        dots: true,
        nav: true,
        autoplayTimeout: 9500, //8500
        smartSpeed: 250, //450
        navText: ['<i class="owl-arrow-left"></i>', '<i class="owl-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 2
            },
            1170: {
                items: 3
            },
        }
    });
    // end ---------------------------------------------------
    
});