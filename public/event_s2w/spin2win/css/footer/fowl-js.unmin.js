jQuery(document).ready(function($) {
    // xử lý khi:
    // + số item <=3 thì kg cho loop
    // + số item >3 thì cho loop
    // ------------ xử lý slide của Internet
    var loops;
    var count_item = $("._item_logo").length;
    // console.log(count_item + ' item');
    var widthsc = $(window).width();
    if (count_item <= 3 && widthsc >= 1024) {
        loops = false;
    } else loops = true;
    // "use strict";
    // slide 1
    $('#logo-foot-slide').owlCarousel({
        loop: loops, // nếu đến item cuối cùng mà muốn trở lại item đầu thì dùng:  loop: loops, ngược lại: false
        center: false,
        items: 3,
        margin: 0,
        autoplay: false,
        dots: true,
        nav: true,
        autoplayTimeout: 9500, //8500
        smartSpeed: 250, //450
        navText: ['<i class="owlPre" aria-hidden="true"></i>', '<i class="owlNext" aria-hidden="true"></i>'],
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 4
            },
            1024: {
                items: 6
            },
            1400: {
                items: 8
            }
        }
    });
    // kiem tra so item để canh giữa toàn bộ	
    var widthsc = $(window).width();
    if (count_item == 3 && widthsc > 1024) {
        $("#logo-foot-slide .owl-stage").addClass('add_mgl')
    }
    if (count_item <= 2 && widthsc > 1024) {
        $("#logo-foot-slide .owl-stage").addClass('add_mgl_2item')
    } else if (count_item >= 4 && widthsc <= 1024) {
        $("#logo-foot-slide .owl-stage").addClass('remove_mgl')
    }

    // ------------ xử lý slide của combo Internet & Tivi

});


// xu li circle
/* more info : http://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html */