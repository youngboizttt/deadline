jQuery(document).ready(function ($) {
    // slide box-customer
    var loops_item_cus;
    var count_items_cus = $("._items_cus").length;
    // console.log('KH say: ' + count_items_cus);
    var widthsc = $(window).width();
    if (count_items_cus <= 3 && widthsc >= 1024) {
        loops_item_cus = false;
    } else loops_item_cus = true;

    $('#owl_cus-talk-about-us').owlCarousel({
        loop: true,
        center: false,
        // center: true,// set item center
        items: 3,
        margin: 0,
        autoplay: false,
        dots: true,
        nav: true,
        autoplayTimeout: 4500, //8500
        smartSpeed: 250, //450
        navText: ['<i class="owl-pre-orange-1"></i>', '<i class="owl-next-orange-1"></i>'],
        responsive: {
            0: {
                items: 1.2
            },
            541: {//768
                items: 2
            },
            1024: {
                items: 3
            },
            1366: {
                items: 4
            },
            1600: {
                items: 5
            },
            2560: {
                items: 5
            }
        }
    });

    // slide price-fsafego
    var loops_item_price_fsafe;
    var count_items_price_fsafe = $("._items_price_fsafe").length;
    // console.log('Giá: ' + count_items_price_fsafe);
    var widthsc = $(window).width();
    if (count_items_price_fsafe <= 3 && widthsc >= 1024) {
        loops_item_price_fsafe = false;
    } else loops_item_price_fsafe = true;

    $('#owl_price_fsafego').owlCarousel({
        loop: false,
        center: false,
        // center: true,// set item center
        items: 3,
        margin: 0,
        autoplay: false,
        dots: true,
        nav: true,
        autoplayTimeout: 4500, //8500
        smartSpeed: 250, //450
        navText: ['<i class="owl-pre-orange-1"></i>', '<i class="owl-next-orange-1"></i>'],
        responsive: {
            0: {
                items: 1
            },
            541: {//768
                items: 2
            },
            1024: {
                items: 3
            },
            1366: {
                items: 3
            },
            1600: {
                items: 3
            },
            2560: {
                items: 4
            }
        }
    });
    // end slide price-fsafego


    // slide price-fsafego mobile
    var item_price_fsafe_m;
    var count_price_fsafe_m = $("._items_price_fsafe_m").length;//_items_price_fsafe
    // console.log('item fsafe m: ' + count_price_fsafe_m);
    var w_fs_go = $(window).width();
    if (count_price_fsafe_m <= 3 && w_fs_go >= 1024) {
        item_price_fsafe_m = false;
    } else item_price_fsafe_m = true;

    $('#owl_price_fsafego_m').owlCarousel({//#owl_price_fsafego
        loop: true,// if on mobile then choose true
        center: false,
        // center: true,// set item center
        items: 1,
        margin: 0,
        autoplay: false,
        dots: true,
        nav: true,
        autoplayTimeout: 4500, //8500
        smartSpeed: 250, //450
        navText: ['<i class="owl-pre-orange-1"></i>', '<i class="owl-next-orange-1"></i>'],
        responsive: {
            0: {
                items: 1.2
            },
            541: {//768
                items: 2
            },
            1024: {
                items: 3
            },
            1366: {
                items: 3
            },
            1600: {
                items: 3
            },
            2560: {
                items: 4
            }
        }
    });
    // slide price-fsafego mobile


    // Expanding flex cards (section 3)
    // can use .click(function()
    $(".option").mouseover(function () {
        $(".option").removeClass("active");
        $(this).addClass("active");

        if ($(".option.active")) {
            $(".option").find($('.label_s p')).addClass('_font_label');
            $(".option.active").find($('.label_s p')).removeClass('_font_label');
        }
    });
    $(".option").mouseleave(function () {
        $(this).removeClass("active");
        // console.log('mouseleave')
        $(".option").find($('.label_s p')).removeClass('_font_label');
    });

    if ($('.option.active')) {
        // console.log('true')
    } else console.log('false')



    $(".owl-carousel .owl-item .box-price").hover(function () {
        // https://cp.io/seraphendipity/pen/dBqZNq >> remove border focus when hover item
        $(".focus").removeClass("focus");
        $(this).addClass("focus");
        $(this).siblings().addClass("focus");
    });

});




//  script auto play video on desktop >> for sound

var tag = document.createElement('script');
// console.log(tag);
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('id_video', {
        height: '360',
        width: '600',
        videoId: 'rRNCTKdo558',
        playerVars: {
            autoplay: 1, //
            controls: 0, //
            modestbranding: 1, // YouTube Logo
            loop: 1, // 
            // fs: 0, // 
            // cc_load_policty: 0, // 
            // iv_load_policy: 3, // 
            autohide: 0, // 
            mute: 1, // 
            playsinline: 1,
            playlist: 'rRNCTKdo558',

            // html5:1,
            // useCSS3Transforms: false
        },
        events: {
            'onReady': onPlayerReady,
            // 'onStateChange': onPlayerStateChange
        },
    });
}
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    // event.target.mute();
    // event.target.setVolume(0);
    event.target.setVolume(100);
    event.target.playVideo();
}

// mute
$("#mute_1").click(function () {
    if (player.isMuted()) {
        player.unMute();
        // console.log("unMute Player");
        $("#mute_1 i.vc_btn3-icon")
            .removeClass("fa-volume-mute")
            .addClass("fa-volume-up");
    } else {
        player.mute();
        // console.log("Mute Player");
        $("#mute_1 i.vc_btn3-icon")
            .removeClass("fa-volume-up")
            .addClass("fa-volume-mute");
    }
});

//  end script auto play video on desktop




$(document).ready(function () {
    // 5 item "Yên tâm tuyệt đối" on mobile
    if ($("._about_us").length) {
        let $item = $('._about_us');
        $item.click(function (e) {
            //   console.log('click');
            let $current = $(this);
            e.preventDefault()
            e.stopPropagation()
            $item.removeClass('show-about-us')
            $current.addClass('show-about-us')
            $current.find('input').prop('checked', true);
        });
    }
    // Faq-show
    //   if ($("._item_fsgo").length) { 
    //     let $item = $('._item_fsgo');
    //     $item.click(function(e) {
    //     //   console.log('click');
    //       let $current = $(this);
    //       e.preventDefault()
    //       e.stopPropagation()
    //       $item.removeClass('show-faq-fs')
    //       $current.addClass('show-faq-fs')
    //       $current.find('input').prop('checked', true);
    //     });
    //   }

    //   xu ly video mp4
    /* >> dùng cho video file MP4
        document.querySelector("#volume-switcher").onchange = function() {
            document.querySelector(".video").muted = !this.checked;
        }   
    */

    // opacity divs when hover a div 
    $(".flex-box-imgs .box-img").on("mouseenter", function () {
        $(".flex-box-imgs .box-img").addClass("_js_opacity");
        $(this).removeClass("_js_opacity");
    })
    $(".flex-box-imgs .box-img").on("mouseleave", function () {
        $(".flex-box-imgs .box-img").removeClass("_js_opacity");
    })

    // xu ly mouseover flex box moi
    // 1
    $("._js_box_1").mouseover(function () {//
        $(".box-img").addClass("_box_25");//25% _hide_box
        $("._js_box_5").addClass("_hide_box");
        $("._js_box_1").addClass("_box_hover");
    });
    $("._js_box_1").mouseleave(function () {
        $("._js_box_1").removeClass("_box_hover");
        $("._js_box_5").removeClass("_hide_box");
        $(".box-img").removeClass("_box_25")
    });

    // 2
    $("._js_box_2").mouseover(function () {//
        $(".box-img").addClass("_box_25");//25% _hide_box
        $("._js_box_5").addClass("_hide_box");
        $("._js_box_2").addClass("_box_hover");
    });
    $("._js_box_2").mouseleave(function () {
        $("._js_box_2").removeClass("_box_hover");
        $("._js_box_5").removeClass("_hide_box");
        $(".box-img").removeClass("_box_25")
    });

    // 3
    $("._js_box_3").mouseover(function () {//
        $(".box-img").addClass("_box_25");//25% _hide_box
        $("._js_box_5").addClass("_hide_box");
        $("._js_box_3").addClass("_box_hover");
    });
    $("._js_box_3").mouseleave(function () {
        $("._js_box_3").removeClass("_box_hover");
        $("._js_box_5").removeClass("_hide_box");
        $(".box-img").removeClass("_box_25")
    });
    // 4
    $("._js_box_4").mouseover(function () {//
        $(".box-img").addClass("_box_25");//25% _hide_box
        $("._js_box_5").addClass("_hide_box");
        $("._js_box_4").addClass("_box_hover");
    });
    $("._js_box_4").mouseleave(function () {
        $("._js_box_5").removeClass("_hide_box");
        $(".box-img").removeClass("_box_25")
        $("._js_box_4").removeClass("_box_hover");
    });
    // 5
    $("._js_box_5").mouseover(function () {//
        $("._js_box_4").addClass("_hide_box");
        $("._js_box_5").addClass("_box_hover");
        $(".box-img").addClass("_box_25");//25% _hide_box
        console.log('xx')
    });
    $("._js_box_5").mouseleave(function () {
        $("._js_box_5").removeClass("_box_hover");
        $("._js_box_4").removeClass("_hide_box");
        $(".box-img").removeClass("_box_25")
    });
});