$(document).ready(function () {

    // gói kèm theo
    if ($(".swiper.goi-kem-theo").length > 0) {
        sw_goi_kem_theo();
    }

    if ($(".parents_goi-kem-theo .swiper-button-disabled.swiper-button-lock").length > 0) { // check if swiper button is locked
        $(".swiper.goi-kem-theo .swiper-wrapper").addClass('js_wrapper_goi_kem_theo');
    }

    if ($(".swiper.goi-kem-theo .swiper-slide.with-de-xuat").length == 0) { // nếu có gói đề xuất thì set lại padding của tiêu đề
        $(".swiper.goi-kem-theo .swiper-slide .package-content").addClass('not_label_goi_kem_theo');
    }

    if ($(".swiper.goi-kem-theo .swiper-slide").length == 1) {
        $(".swiper.goi-kem-theo .swiper-slide").addClass('one_item');
    }
    // end 

    // fpt movie: /truyen-hinh-fpt-play
    if ($("#sw_fpt_movie").length > 0) {
        swiper_fpt_movie();
    }

    if ($(".parents_new_release .swiper-button-disabled.swiper-button-lock").length > 0) { // check if swiper button is locked
        $("#sw_fpt_movie .swiper-wrapper").addClass('js_sw_fptvn_center');// cho center khi xác định ko xuất hiện silde: js_video_center
    }
    // end 

});

// gói kèm theo
function sw_goi_kem_theo() {
    var swiper = new Swiper('.swiper.goi-kem-theo', {
        slidesPerView: 4,
        spaceBetween: 24,
        navigation: {
            nextEl: '.parents_goi-kem-theo .swiper-button-next',
            prevEl: '.parents_goi-kem-theo .swiper-button-prev',
        },
        breakpoints: {
            1500: {// 1280
                slidesPerView: 4,
            },

            1024: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            884: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            834: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            767: {
                slidesPerView: "auto",
                spaceBetween: 16,
            },
            320: {
                slidesPerView: "auto",// dùng auto để cho with tùy ý >> & set width của item nhỏ hơn 100vw để hiển thị hơn 1 item
                spaceBetween: 16,
            },
        },
        lazy: true,
        touchStartPreventDefault: false,
    });
}

// fpt movie: /truyen-hinh-fpt-play
function swiper_fpt_movie() {
    var swiper = new Swiper('#sw_fpt_movie', {
        slidesPerView: 6,
        spaceBetween: 24,
        loop: true,
        // slideToClickedSlide: true, // click bất kỳ trong sw sẽ trượt 1 item
        navigation: {
            nextEl: '.parents_new_release .swiper-button-next',
            prevEl: '.parents_new_release .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: "auto",
                spaceBetween: 16,
                // loop: false,
            },
            768: {
                slidesPerView: "auto",
                spaceBetween: 16,
            },
            834: {
                slidesPerView: "auto",
                spaceBetween: 16,
            },
            992: {
                slidesPerView: "auto",
                spaceBetween: 16,
            },
            1024: {
                slidesPerView: "auto",
                spaceBetween: 16,
            },
            1200: {
                slidesPerView: "auto",
                spaceBetween: 16,
            },
            1500: {
                slidesPerView: 6,
            },
        },
        lazy: true,
        touchStartPreventDefault: false,
    });
}
