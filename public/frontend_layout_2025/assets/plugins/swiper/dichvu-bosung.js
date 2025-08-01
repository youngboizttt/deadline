if ($(".swiper.dv-bo-sung").length > 0) {
    function sw_dv_bosung() {
        var swiper = new Swiper('.swiper.dv-bo-sung', {
            slidesPerView: 4,
            spaceBetween: 24,
            navigation: {
                nextEl: '.parents_dv-bo-sung .swiper-button-next',
                prevEl: '.parents_dv-bo-sung .swiper-button-prev',
            },
            breakpoints: {
                1500: {
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
                768: {
                    slidesPerView: "auto",
                    spaceBetween: 16,
                },
                767: {
                    slidesPerView: "auto",
                    spaceBetween: 16,
                },
                320: {
                    slidesPerView: "auto",
                    spaceBetween: 16,
        },
            },

        });
    }

    $(document).ready(function () {
        sw_dv_bosung();

        if ($(".parents_dv-bo-sung .swiper-button-disabled.swiper-button-lock").length > 0) { // check if swiper button is locked
            $(".swiper.dv-bo-sung .swiper-wrapper").addClass('js_dichvu_bosung_center');
        }
    });
}