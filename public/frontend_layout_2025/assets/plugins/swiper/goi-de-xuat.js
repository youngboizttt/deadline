if ($(".swiper.goi-de-xuat").length) {
    function sw_goi_de_xuat() {
        var swiper = new Swiper('.swiper.goi-de-xuat', {
            slidesPerView: 4,
            spaceBetween: 24,
            navigation: {
                nextEl: '.parents_goi-de-xuat .swiper-button-next',
                prevEl: '.parents_goi-de-xuat .swiper-button-prev',
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

        });
    }

    $(document).ready(function () {
        sw_goi_de_xuat();

        if ($(".parents_goi-de-xuat .swiper-button-disabled.swiper-button-lock").length > 0) { // check if swiper button is locked
            $(".swiper.goi-de-xuat .swiper-wrapper").addClass('js_wrapper_goi_de_xuat');
        }

        if ($(".swiper.goi-de-xuat .swiper-slide.with-de-xuat").length == 0) { // nếu có gói đề xuất thì set lại padding của tiêu đề
            $(".swiper.goi-de-xuat .swiper-slide .package-content").addClass('not_label_goi_de_xuat');
            $(".row-goi-de-xuat-homepage .new-title-label").removeClass('padding_new_title_label');
            //
        } 
        if ($(".swiper.goi-de-xuat .swiper-slide.with-de-xuat").length > 0) {
            // console.log('co gói đề xuất');
            $(".row-goi-de-xuat-homepage .new-title-label").addClass('padding_new_title_label');
        }
    });

}

if ($(".swiper.sw-goi-de-xuat-1").length) {
    function sw_goi_de_xuat_1() {
        var swiper = new Swiper('.swiper.sw-goi-de-xuat-1', {
            slidesPerView: 4,
            spaceBetween: 24,
            navigation: {
                nextEl: '.parents_goi-de-xuat-1 .swiper-button-next',
                prevEl: '.parents_goi-de-xuat-1 .swiper-button-prev',
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

        });
    }

    $(document).ready(function () {
        sw_goi_de_xuat_1();

        if ($(".parents_goi-de-xuat-1 .swiper-button-disabled.swiper-button-lock").length > 0) { // check if swiper button is locked
            $(".swiper.sw-goi-de-xuat-1 .swiper-wrapper").addClass('js_wrapper_goi_de_xuat');
        }

        if ($(".swiper.sw-goi-de-xuat-1 .swiper-slide.with-de-xuat").length == 0) { // nếu có gói đề xuất thì set lại padding của tiêu đề
            $(".swiper.sw-goi-de-xuat-1 .swiper-slide .package-content").addClass('not_label_goi_de_xuat');
            $(".row-goi-de-xuat-homepage .new-title-label").removeClass('padding_new_title_label');
            //
        } 
        if ($(".swiper.sw-goi-de-xuat-1 .swiper-slide.with-de-xuat").length > 0) {
            // console.log('co gói đề xuất');
            $(".row-goi-de-xuat-homepage .new-title-label").addClass('padding_new_title_label');
        }
    });
}

if ($(".swiper.sw-goi-de-xuat-2").length) {
    function sw_goi_de_xuat_2() {
        var swiper = new Swiper('.swiper.sw-goi-de-xuat-2', {
            slidesPerView: 4,
            spaceBetween: 24,
            navigation: {
                nextEl: '.parents_goi-de-xuat-2 .swiper-button-next',
                prevEl: '.parents_goi-de-xuat-2 .swiper-button-prev',
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

        });
    }

    $(document).ready(function () {
        sw_goi_de_xuat_2();

        if ($(".parents_goi-de-xuat-2 .swiper-button-disabled.swiper-button-lock").length > 0) { // check if swiper button is locked
            $(".swiper.sw-goi-de-xuat-2 .swiper-wrapper").addClass('js_wrapper_goi_de_xuat');
        }

        if ($(".swiper.sw-goi-de-xuat-2 .swiper-slide.with-de-xuat").length == 0) { // nếu có gói đề xuất thì set lại padding của tiêu đề
            $(".swiper.sw-goi-de-xuat-2 .swiper-slide .package-content").addClass('not_label_goi_de_xuat');
            $(".row-goi-de-xuat-homepage .new-title-label").removeClass('padding_new_title_label');
            //
        } 
        if ($(".swiper.sw-goi-de-xuat-2 .swiper-slide.with-de-xuat").length > 0) {
            // console.log('co gói đề xuất');
            $(".row-goi-de-xuat-homepage .new-title-label").addClass('padding_new_title_label');
        }
    });
}

if ($(".swiper.sw-goi-de-xuat-3").length) {
    function sw_goi_de_xuat_3() {
        var swiper = new Swiper('.swiper.sw-goi-de-xuat-3', {
            slidesPerView: 4,
            spaceBetween: 24,
            navigation: {
                nextEl: '.parents_goi-de-xuat-3 .swiper-button-next',
                prevEl: '.parents_goi-de-xuat-3 .swiper-button-prev',
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

        });
    }

    $(document).ready(function () {
        sw_goi_de_xuat_3();

        if ($(".parents_goi-de-xuat-3 .swiper-button-disabled.swiper-button-lock").length > 0) { // check if swiper button is locked
            $(".swiper.sw-goi-de-xuat-3 .swiper-wrapper").addClass('js_wrapper_goi_de_xuat');
        }

        if ($(".swiper.sw-goi-de-xuat-3 .swiper-slide.with-de-xuat").length == 0) { // nếu có gói đề xuất thì set lại padding của tiêu đề
            $(".swiper.sw-goi-de-xuat-3 .swiper-slide .package-content").addClass('not_label_goi_de_xuat');
            $(".row-goi-de-xuat-homepage .new-title-label").removeClass('padding_new_title_label');
            //
        } 
        if ($(".swiper.sw-goi-de-xuat-3 .swiper-slide.with-de-xuat").length > 0) {
            // console.log('co gói đề xuất');
            $(".row-goi-de-xuat-homepage .new-title-label").addClass('padding_new_title_label');
        }
    });
}

if ($(".swiper.sw-goi-de-xuat-4").length) {
    function sw_goi_de_xuat_4() {
        var swiper = new Swiper('.swiper.sw-goi-de-xuat-4', {
            slidesPerView: 4,
            spaceBetween: 24,
            navigation: {
                nextEl: '.parents_goi-de-xuat-4 .swiper-button-next',
                prevEl: '.parents_goi-de-xuat-4 .swiper-button-prev',
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

        });
    }

    $(document).ready(function () {
        sw_goi_de_xuat_4();

        if ($(".parents_goi-de-xuat-4 .swiper-button-disabled.swiper-button-lock").length > 0) { // check if swiper button is locked
            $(".swiper.sw-goi-de-xuat-4 .swiper-wrapper").addClass('js_wrapper_goi_de_xuat');
        }

        if ($(".swiper.sw-goi-de-xuat-4 .swiper-slide.with-de-xuat").length == 0) { // nếu có gói đề xuất thì set lại padding của tiêu đề
            $(".swiper.sw-goi-de-xuat-4 .swiper-slide .package-content").addClass('not_label_goi_de_xuat');
            $(".row-goi-de-xuat-homepage .new-title-label").removeClass('padding_new_title_label');
            //
        } 
        if ($(".swiper.sw-goi-de-xuat-4 .swiper-slide.with-de-xuat").length > 0) {
            // console.log('co gói đề xuất');
            $(".row-goi-de-xuat-homepage .new-title-label").addClass('padding_new_title_label');
        }
    });
}