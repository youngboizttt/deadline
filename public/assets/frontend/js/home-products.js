
jQuery(document).ready(function($) {
    // new js  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Change button to active when clicked
    $(".row-location").click(function() {
    $(".row-location").removeClass("active-locations");
    $(this).addClass("active-locations");
    });

    // Makes variables for button and page content 
    var $categoryButtonLocation = $(".row-location");
    var $productPageContent = $(".product-page-content");

    // Hide all page content shows first one
    $(".product-page-content")
    .hide()
    .first()
    .show();

    // When button is clicked, show content 
    $categoryButtonLocation.on("click", function(e) {
    var $categoryLocation = $(this).data("target");
    $productPageContent
        .hide()
        .find('img').hide()
        .end()
        .filter("." + $categoryLocation)
        .show()
        .find('img').fadeIn();
    });

    // get name location
    var div_locations = document.getElementsByClassName("row-location");
    for (var i = 0; i < div_locations.length; i++) {
    div_locations[i].addEventListener("click", function() {
        var content = this.textContent;
        document.getElementById("name-location").textContent = content;
    });
    }
    // new js  




    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ owlCarousel ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // GOI NET HN
    var loops_local_1_net;
    var count_local_1_net = $("._js_local_1_net").length;
    // console.log('goi combo: ' + count_local_1_net);
    var width_1net = $(window).width(); //width_1net
    if (count_local_1_net <= 3 && width_1net >= 1024) {
        loops_local_1_net = false;
    } else loops_local_1_net = true;
    "use strict";
    // slide 1
    $('#home_local_1_net').owlCarousel({
        loop: false, // nếu xét loop dựa theo số item thì dùng:  loop: loops
        center: false,
        items: 3,
        margin: 0,
        autoplay: false,//final > true
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
                items: 3
            }
        }
    });
    // var widthsc = $(window).width();
    if (count_local_1_net == 3 && width_1net > 1024) {
        $("#home_local_1_net").addClass('_js-owl-3item');
        window.dispatchEvent(new Event('resize')); //Refreshing Owl Carousel
    }
    if (count_local_1_net <= 2 && width_1net > 1024) {
        $("#home_local_1_net").addClass('add_mgl_2item');
        window.dispatchEvent(new Event('resize'));
    } else if (count_local_1_net >= 4 && width_1net <= 1024) {
        $("#home_local_1_net").addClass('_js-remove-owl-3item');
        window.dispatchEvent(new Event('resize'));
    }


    // GOI COMBO HN
    var loops_local_1_combo;
    var count_local_1_combo = $("._js_local_1_combo").length;
    // console.log('goi combo: ' + count_local_1_combo);
    var width_1combo = $(window).width();//width_1combo
    if (count_local_1_combo <= 3 && width_1combo >= 1024) {
        loops_local_1_combo = false;
    } else loops_local_1_combo = true;
    "use strict";
    // slide 1
    $('#home_local_1_combo').owlCarousel({
        loop: false, // nếu xét loop dựa theo số item thì dùng:  loop: loops
        center: false,
        items: 3,
        margin: 0,
        autoplay: false,//final > true
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
                items: 3 //4
            }
        }
    });

    // GOI COMBO CAM HN
    var loops_local_1_combo_cam;
    var count_local_1_combo_cam = $("._js_local_1_combo_cam").length;
    var width_1combo_cam = $(window).width();
    if (count_local_1_combo_cam <= 3 && width_1combo_cam >= 1024) {
        loops_local_1_combo_cam = false;
    } else loops_local_1_combo_cam = true;
    "use strict";
    $('#home_local_1_combo_cam').owlCarousel({
        loop: false,
        center: false,
        items: 3,
        margin: 0,
        autoplay: false,
        dots: true,
        nav: true,
        autoplayTimeout: 9500,
        smartSpeed: 250, 
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
                items: 3 //4
            }
        }
    });


    
    // GOI NET HCM
    var loops_local_2_net;
    var count_local_2_net = $("._js_local_2_net").length;
    var width_2net = $(window).width();
    if (count_local_2_net <= 3 && width_2net >= 1024) {
        loops_local_2_net = false;
    } else loops_local_2_net = true;
    "use strict";
    $('#home_local_2_net').owlCarousel({
        loop: false, // nếu xét loop dựa theo số item thì dùng:  loop: loops
        center: false,
        items: 3,
        margin: 0,
        autoplay: false,//final > true
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
                items: 3
            }
        }
    });
    if (count_local_2_net == 3 && width_2net > 1024) {
        $("#home_local_2_net").addClass('_js-owl-3item');
        window.dispatchEvent(new Event('resize')); //Refreshing Owl Carousel
    }
    if (count_local_2_net <= 2 && width_2net > 1024) {
        $("#home_local_2_net").addClass('add_mgl_2item');
        window.dispatchEvent(new Event('resize'));
    } else if (count_local_2_net >= 4 && width_2net <= 1024) {
        $("#home_local_2_net").addClass('_js-remove-owl-3item');
        window.dispatchEvent(new Event('resize'));
    }

    // GOI COMBO HCM
    var loops_local_2_combo;
    var count_local_2_combo = $("._js_local_2_combo").length;
    var width_2combo = $(window).width();
    if (count_local_2_combo <= 3 && width_2combo >= 1024) {
        loops_local_2_combo = false;
    } else loops_local_2_combo = true;
    "use strict";
    $('#home_local_2_combo').owlCarousel({
        loop: false,
        center: false,
        items: 3,
        margin: 0,
        autoplay: false,
        dots: true,
        nav: true,
        autoplayTimeout: 9500,
        smartSpeed: 250, 
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
                items: 3 //4
            }
        }
    });

    // GOI COMBO CAMERA HCM (bổ sung)
    var loops_local_2_combo_cam;
    var count_local_2_combo_cam = $("._js_local_2_combo_cam").length;
    var width_2combo_cam = $(window).width();
    if (count_local_2_combo_cam <= 3 && width_2combo_cam >= 1024) {
        loops_local_2_combo_cam = false;
    } else loops_local_2_combo_cam = true;
    "use strict";
    $('#home_local_2_combo_cam').owlCarousel({
        loop: false,
        center: false,
        items: 3,
        margin: 0,
        autoplay: false,
        dots: true,
        nav: true,
        autoplayTimeout: 9500,
        smartSpeed: 250, 
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
                items: 3 //4
            }
        }
    });

    // GOI NET KHAC
    var loops_local_3_net;
    var count_local_3_net = $("._js_local_3_net").length;
    var width_3net = $(window).width();
    if (count_local_3_net <= 3 && width_3net >= 1024) {
        loops_local_3_net = false;
    } else loops_local_3_net = true;
    "use strict";
    $('#home_local_3_net').owlCarousel({
        loop: false,
        center: false,
        items: 3,
        margin: 0,
        autoplay: false,
        dots: true,
        nav: true,
        autoplayTimeout: 9500,
        smartSpeed: 250,
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
                items: 3
            }
        }
    });
    if (count_local_3_net == 3 && width_3net > 1024) {
        $("#home_local_3_net").addClass('_js-owl-3item');
        window.dispatchEvent(new Event('resize')); //Refreshing Owl Carousel
    }
    if (count_local_3_net <= 2 && width_3net > 1024) {
        $("#home_local_3_net").addClass('add_mgl_2item');
        window.dispatchEvent(new Event('resize'));
    } else if (count_local_3_net >= 4 && width_3net <= 1024) {
        $("#home_local_3_net").addClass('_js-remove-owl-3item');
        window.dispatchEvent(new Event('resize'));
    }

    // GOI COMBO KHAC
    var loops_local_3_combo;
    var count_local_3_combo = $("._js_local_3_combo").length;
    var width_3combo = $(window).width();
    if (count_local_3_combo <= 3 && width_3combo >= 1024) {
        loops_local_3_combo = false;
    } else loops_local_3_combo = true;
    "use strict";
    $('#home_local_3_combo').owlCarousel({
        loop: false,
        center: false,
        items: 3,
        margin: 0,
        autoplay: false,
        dots: true,
        nav: true,
        autoplayTimeout: 9500,
        smartSpeed: 250, 
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
                items: 3 //4
            }
        }
    });

    // GOI COMBO CAMERA KHAC
    var loops_local_3_combo_cam;
    var count_local_3_combo = $("._js_local_3_combo_cam").length;
    var width_3combo_cam = $(window).width();
    if (count_local_3_combo <= 3 && width_3combo_cam >= 1024) {
        loops_local_3_combo_cam = false;
    } else loops_local_3_combo_cam = true;
    "use strict";
    $('#home_local_3_combo_cam').owlCarousel({
        loop: false,
        center: false,
        items: 3,
        margin: 0,
        autoplay: false,
        dots: true,
        nav: true,
        autoplayTimeout: 9500,
        smartSpeed: 250, 
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
                items: 3 //4
            }
        }
    });

});



$(window).load(function() {
    equalheight('.owl-carousel.home-net>div .middle_1');
});

$(window).resize(function(){
    equalheight('.owl-carousel.home-net>div .middle_1');
    $(".row-location").click(function() {
        equalheight('.owl-carousel.home-net>div .middle_1');
    })
    $('.tab__header>div').on('click', function() {
        equalheight('.owl-carousel.home-net>div .middle_1');
    });
});


// $('#tab_detail_1').multitabs();
// $('#tab_detail_2').multitabs();
// $('#tab_detail_3').multitabs();