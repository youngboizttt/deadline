jQuery(document).ready(function($) {
    // xử lý khi:
    // + số item <=3 thì kg cho loop
    // + số item >3 thì cho loop
    // ------------ xử lý slide của Internet
    var loops;
    var count_item = $("._item_net").length;
    console.log(count_item);
    var widthsc = $(window).width();
    if (count_item <= 3 && widthsc >= 1024) {
        loops = false;
    } else loops = true;
    "use strict";
    // slide 1
    $('#package-internet-fpt').owlCarousel({
        loop: false, // nếu xét loop dựa theo số item thì dùng:  loop: loops
        center: false,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        nav: true,
        autoplayTimeout: 9500, //8500
        smartSpeed: 250, //450
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1170: {
                items: 4
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

    // ------------ xử lý slide của combo Internet & Tivi

    // slide 2
    var loops_net_tv;
    var count_item_net_tv = $("._item_net_tv").length;
    console.log(count_item_net_tv);
    var widthsc = $(window).width();
    if (count_item_net_tv <= 3 && widthsc >= 1024) {
        loops_net_tv = false;
    } else loops_net_tv = true;

    $('#package-compo-net_tv').owlCarousel({
        loop: false, // nếu xét loop dựa theo số item thì dùng:  loop: loops
        center: false,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        nav: true,
        autoplayTimeout: 9500, //8500
        smartSpeed: 250, //450
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1170: {
                items: 4
            }
        }
    });
    if (count_item_net_tv == 3 && widthsc > 1024) {
        $("#package-compo-net_tv .owl-stage").addClass('add_mgl')
    }
    if (count_item_net_tv <= 2 && widthsc > 1024) {
        $("#package-compo-net_tv .owl-stage").addClass('add_mgl_2item')
    } else if (count_item_net_tv <= 3 && widthsc <= 1024) {
        $("#package-compo-net_tv .owl-stage").addClass('remove_mgl')
    }
    // end slide 2
});