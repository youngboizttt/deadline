


if ($(".swiper.items_link_product").length > 0) {
    function sw_link_product() {
        var swiper = new Swiper('.swiper.items_link_product', {
            slidesPerView: 6,
            spaceBetween: 24,
            // centeredSlides: true,
            navigation: {
                nextEl: '.parents_link_product .swiper-button-next',
                prevEl: '.parents_link_product .swiper-button-prev',
            },
            breakpoints: {
                1500: {
                    slidesPerView: 6,
                },

                1366: {
                    slidesPerView: 6,
                    spaceBetween: 16,
                },
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 16,
                },
                1024: {
                    slidesPerView: "auto", //4
                    spaceBetween: 16,
                },
                767: {
                    slidesPerView: "auto", //3
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

        sw_link_product();

        if ($(".parents_link_product .swiper-button-disabled.swiper-button-lock").length > 0) { // check if swiper button is locked
            // console.log('parents_link_product');
            $(".swiper.items_link_product .swiper-wrapper").addClass('js_item_product_center');
        }

    });
}
