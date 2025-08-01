//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// bxslider AND ORTHER JS

//$('#fpro_slider_home.bxslider').zoom({ on:'click' }); 
/*
$('#fpro_slider_home.bxslider').bxSlider({
    pagerCustom: '.bx-pager',
    auto:false,
    easing:'ease-in-out',
    adaptiveHeight: true,
    captions: true,
});
*/
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
(function($){
    $(document).ready(function(){
        //bxslider
        $('#slide-counter').prepend('<span class="current-index"></span> / ');

        var slider = $('#fpro_slider_home.bxslider').bxSlider({
            pagerCustom: '.bx-pager',
            // auto:true,
            auto:false,
            easing:'ease-in-out',
            adaptiveHeight: true,
            captions: true,

            onSliderLoad: function (currentIndex){
            $('#slide-counter .current-index').text(currentIndex + 1);
            },
            onSlideBefore: function ($slideElement, oldIndex, newIndex){
            $('#slide-counter .current-index').text(newIndex + 1);
            }
        });
        $('#slide-counter').append(slider.getSlideCount());
    });

})(jQuery);

// equalheight ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$(window).load(function() {
    equalheight('.flex-item > div');
});
$(window).resize(function() {
    equalheight('.flex-item > div');
});

$(window).load(function() {
    equalheight('.item-quy_trinh>div');
});
$(window).resize(function() {
    equalheight('.item-quy_trinh>div');
});


// owlCarousel ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
jQuery(document).ready(function($) {
    // xử lý khi:
    // + số item <=3 thì kg cho loop
    // + số item >3 thì cho loop
    var loops;
    var count_item = $("._item_cloud_service").length;
    console.log(count_item);
    var widthsc = $(window).width();
    if (count_item <= 3 && widthsc >= 1024) {
        loops = false;
    } else loops = true;
    "use strict";
    // slide 1
    $('#cmr-cloud-service').owlCarousel({
        loop: true, // nếu xét loop dựa theo số item thì dùng:  loop: loops/true
        center: false,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        nav: true,
        autoplayTimeout: 19500, //8500
        smartSpeed: 250, //450
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 2
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1170: {
                items: 3
            }
        }
    });
    // kiem tra so item để canh giữa toàn bộ	
    var widthsc = $(window).width();
    if (count_item == 3 && widthsc > 1024) {
        // $("#cmr-cloud-service .owl-stage").addClass('add_mgl')
    }
    if (count_item <= 2 && widthsc > 1024) {
        // $("#cmr-cloud-service .owl-stage").addClass('add_mgl_2item')
    } else if (count_item >= 4 && widthsc <= 1024) {
        // $("#cmr-cloud-service .owl-stage").addClass('remove_mgl')
    }
    // end slide 1
    
    // slide 2
    var loops_img_dn;
    var count_item_my_proj = $("._item_my_proj").length;
    console.log(count_item_my_proj);
    var widthsc = $(window).width();
    if (count_item_my_proj <= 3 && widthsc >= 1024) {
        loops_img_dn = false;
    } else loops_img_dn = true;

    $('#slide_img_DN').owlCarousel({
        loop: true, // nếu xét loop dựa theo số item thì dùng:  loop: loops
        center: false,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        nav: true,
        autoplayTimeout: 9500, //8500
        smartSpeed: 250, //450
        navText: ['<i class="owl-pree-orange"></i>', '<i class="owl-next-orange"></i>'],
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
                items: 3
            }
        }
    });
    if (count_item_my_proj == 3 && widthsc > 1024) {
        $("#package-compo-net_tv .owl-stage").addClass('add_mgl')
    }
    if (count_item_my_proj <= 2 && widthsc > 1024) {
        $("#package-compo-net_tv .owl-stage").addClass('add_mgl_2item')
    } else if (count_item_my_proj <= 3 && widthsc <= 1024) {
        $("#package-compo-net_tv .owl-stage").addClass('remove_mgl')
    }
    // end slide 2
    
    // slide 3
    var loops_img_du_an;
    var count_item_img_du_an = $("._item_img_du_an").length;
    console.log(count_item_img_du_an);
    var widthsc = $(window).width();
    if (count_item_img_du_an <= 3 && widthsc >= 1024) {
        loops_img_du_an = false;
    } else loops_img_du_an = true;

    $('#slide_img_du_an').owlCarousel({
        loop: true, // nếu xét loop dựa theo số item thì dùng:  loop: loops
        center: false,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        nav: true,
        autoplayTimeout: 9500, //8500
        smartSpeed: 250, //450
        navText: ['<i class="owl-pree-orange"></i>', '<i class="owl-next-orange"></i>'],
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
    if (count_item_img_du_an == 3 && widthsc > 1024) {
        // $("#slide_img_du_an .owl-stage").addClass('add_mgl')
    }
    if (count_item_img_du_an <= 2 && widthsc > 1024) {
        // $("#slide_img_du_an .owl-stage").addClass('add_mgl_2item')
    } else if (count_item_img_du_an <= 3 && widthsc <= 1024) {
        // $("#slide_img_du_an .owl-stage").addClass('remove_mgl')
    }
    // end slide 3
    
});