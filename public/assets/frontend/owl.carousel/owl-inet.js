jQuery(document).ready(function($) {
	// xử lý khi:
	// + số item <=3 thì kg cho loop
	// + số item >3 thì cho loop
	var loops;
	var count_item = $(".col-data").length;
	var widthsc = $(window).width();
	if(count_item <=3 && widthsc >= 1024){
		loops = false;
	}	
	else loops = true;
	"use strict";
	$('#package-internet-fpt').owlCarousel( {
		loop: false,// nếu xét loop dựa theo số item thì dùng:  loop: loops
		center: false,
		items: 3,
		margin: 0,
		autoplay: false,//hoan thanh sua thanh > true
		dots:true,
		nav:true,
		autoplayTimeout: 9500,//8500
		smartSpeed: 250,//450
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
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
	// var widthsc = $(window).width();
	if(count_item <= 3 && widthsc > 1024){
		$(".owl-carousel .owl-stage").addClass('add_mgl')
	}
	else if(count_item <= 3 && widthsc <= 1024){
		$(".owl-carousel .owl-stage").addClass('remove_mgl')
	}


	// 30/12/2022
    // GOI CA NHAN
    var loops_canhan;
    var count_js_net_canhan = $("._js_net_canhan").length;
    // console.log('goi ca nhan: ' + count_js_net_canhan);
    var widthsc = $(window).width();
    if (count_js_net_canhan <= 3 && widthsc >= 1024) {
        loops_canhan = false;
    } else loops_canhan = true;
    "use strict";
    // slide 1
    $('#package_net_canhan').owlCarousel({
        loop: false, // nếu xét loop dựa theo số item thì dùng:  loop: loops
        center: false,
        items: 3,
        margin: 0,
        autoplay: false,//hoan thanh sua thanh > true
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
    // kiem tra so item để canh giữa toàn bộ	
    var widthsc = $(window).width();
    if (count_js_net_canhan == 3 && widthsc > 1024) {
        $("#package_net_canhan .owl-stage").addClass('add_mgl')
    }
    if (count_js_net_canhan <= 2 && widthsc > 1024) {
        $("#package_net_canhan .owl-stage").addClass('add_mgl_2item')
    } else if (count_js_net_canhan >= 4 && widthsc <= 1024) {
        $("#package_net_canhan .owl-stage").addClass('remove_mgl')
    }


    // GOI DOANH NGHIEP
    var loops_doanhnghiep;
    var count_doanhnghiep = $("._js_net_doanhnghiep").length;
    // console.log('goi doanh nghiep: ' + count_doanhnghiep);
    var widthsc = $(window).width();
    if (count_doanhnghiep <= 3 && widthsc >= 1024) {
        loops_doanhnghiep = false;
    } else loops_doanhnghiep = true;
    "use strict";
    // slide 1
    $('#package_net_doanhnghiep').owlCarousel({
        loop: false, // nếu xét loop dựa theo số item thì dùng:  loop: loops
        center: false,
        items: 3,
        margin: 0,
        autoplay: false,//hoan thanh sua thanh > true
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
    // kiem tra so item để canh giữa toàn bộ	
    var widthsc = $(window).width();
    if (count_doanhnghiep == 3 && widthsc > 1024) {
        $("#package_net_doanhnghiep .owl-stage").addClass('add_mgl')
    }
    if (count_doanhnghiep <= 2 && widthsc > 1024) {
        $("#package_net_doanhnghiep .owl-stage").addClass('add_mgl_2item')
    } else if (count_doanhnghiep >= 4 && widthsc <= 1024) {
        $("#package_net_doanhnghiep .owl-stage").addClass('remove_mgl')
    }

    // GOI COMBO
    var loops_combo_net_tivi;
    var count_combo_net_tivi = $("._js_combo_net_tivi").length;
    // console.log('goi combo: ' + count_combo_net_tivi);
    var widthsc = $(window).width();
    if (count_combo_net_tivi <= 3 && widthsc >= 1024) {
        loops_combo_net_tivi = false;
    } else loops_combo_net_tivi = true;
    "use strict";
    // slide 1
    $('#package_combo_net_tivi').owlCarousel({
        loop: false, // nếu xét loop dựa theo số item thì dùng:  loop: loops
        center: false,
        items: 3,
        margin: 0,
        autoplay: false,//hoan thanh sua thanh > true
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
    // kiem tra so item để canh giữa toàn bộ	
    var widthsc = $(window).width();
    if (count_combo_net_tivi == 3 && widthsc > 1024) {
        $("#package_combo_net_tivi .owl-stage").addClass('add_mgl')
    }
    if (count_combo_net_tivi <= 2 && widthsc > 1024) {
        $("#package_combo_net_tivi .owl-stage").addClass('add_mgl_2item')
    } else if (count_combo_net_tivi >= 4 && widthsc <= 1024) {
        $("#package_combo_net_tivi .owl-stage").addClass('remove_mgl')
    }
	// end 30/12/2022
});