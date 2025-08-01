jQuery(document).ready(function($) {
    // xử lý khi:
    // + số item <=3 thì kg cho loop
    // + số item >3 thì cho loop
    var loops;
    var count_item = $("._jsCountItemLux").length;
    // console.log(count_item);
    var widthsc = $(window).width();
    if (count_item <= 3 && widthsc >= 1024) {
        loops = false;
    } else loops = true;
    "use strict";
    // slide 1
    $('#package-internet-fpt').owlCarousel({
        loop: true, // nếu xét loop dựa theo số item thì dùng:  loop: loops/false
        center: false,
        items: 2,
        margin: 0,
        autoplay: false,
        dots: true,
        nav: true,
        autoplayTimeout: 9500, //8500
        smartSpeed: 250, //450
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1.2
            },
            768: {
                items: 3,
                loop: false
            },
            1024: {
                items: 3,
                loop: false
            },
            1170: {
                items: 4,
                loop: false
            }
        }
    });
    // kiem tra so item để canh giữa toàn bộ	
    var widthsc = $(window).width();
    if (count_item == 3 && widthsc > 1024) {
        $("#package-internet-fpt .owl-stage").addClass('add_mgl')
    }
    if (count_item <= 2 && widthsc > 1024) {
        $("#package-internet-fpt .owl-stage").addClass('add_mgl_2item')
    } else if (count_item >= 4 && widthsc <= 1024) {
        $("#package-internet-fpt .owl-stage").addClass('remove_mgl')
    }
    // ---------------------------------------------------

    // section Trai nghiem cong nghe
    var loopsTech;
    var count_itemTech = $("._jsCountItemTech").length;
    // console.log(count_itemTech);
    var widthTech = $(window).width();
    if (count_itemTech <= 3 && widthTech >= 1024) {
        loopsTech = false;
    } else loopsTech = true;
    "use strict";
    // slide 1
    $('#sectionTech').owlCarousel({
        loop: true, // nếu xét loop dựa theo số item thì dùng:  loop: loops/false
        center: false,
        items: 3,
        margin: 0,
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
                items: 1
            },
            1024: {
                items: 1
            },
            1170: {
                items: 1
            },
            1900: {
                items: 1
            }
        }
    });
    // kiem tra so item để canh giữa toàn bộ	
    var widthTech = $(window).width();
    if (count_itemTech == 3 && widthTech > 1024) {
        $("#sectionTech .owl-stage").addClass('add_mgl')
    }
    if (count_itemTech <= 2 && widthTech > 1024) {
        $("#sectionTech .owl-stage").addClass('add_mgl_2item')
    } else if (count_itemTech >= 4 && widthTech <= 1024) {
        $("#sectionTech .owl-stage").addClass('remove_mgl')
    }
    // -----------------------------------------------
    // slide so 3
    var loops__2;
    var count_item__2 = $("._jsCountItemLux__2").length;
    // console.log(count_item__2);
    var widthsc__2 = $(window).width();
    if (count_item__2 <= 3 && widthsc__2 >= 1024) {
        loops__2 = false;
    } else loops__2 = true;
    "use strict";
    // slide 1
    $('#package-internet-fpt__2').owlCarousel({
        loop: true, // nếu xét loop dựa theo số item thì dùng:  loop: loops/false
        center: false,
        items: 3,
        margin: 0,
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
});