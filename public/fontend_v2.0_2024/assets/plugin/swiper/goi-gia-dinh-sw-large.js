
    $(document).ready(function () {
        if ($(".swiper.sw_goi_giadinh_large").length > 0) {
            sw_GoiGiadinhBottom();
        }

        // if ($(".parents_goi_giadinh_large .swiper-button-disabled.swiper-button-lock").length > 0) { // check if swiper button is locked
        //     $(".swiper.sw_goi_giadinh_large .swiper-wrapper").addClass('js_customer_reviews_center_');// cho center khi xác định ko xuất hiện silde.
        // }

        // cuctom cho chiều cao bằng nhau nếu nội dung ko format bằng nhau
        function equalizeSwiperSlideHeight() {
            const slides = document.querySelectorAll(".sw_goi_giadinh_large .swiper-slide");
            let maxHeight = 0;

            // Tìm chiều cao lớn nhất
            slides.forEach(slide => {
                slide.style.height = "auto"; // Reset trước khi tính toán
                let slideHeight = slide.offsetHeight;
                maxHeight = Math.max(maxHeight, slideHeight);
            });

            // Gán chiều cao lớn nhất cho tất cả các slide
            slides.forEach(slide => {
                slide.style.height = maxHeight + "px";
            });
        }

        // Gọi hàm khi trang load xong hoặc thay đổi kích thước màn hình
        window.addEventListener("load", equalizeSwiperSlideHeight);
        window.addEventListener("resize", equalizeSwiperSlideHeight);
        // END cuctom cho chiều cao bằng nhau nếu nội dung ko format bằng nhau

        function sw_GoiGiadinhBottom() {
            var swiper = new Swiper('.swiper.sw_goi_giadinh_large', {
                slidesPerView: 3,
                spaceBetween: 24,
                loop: false,
                // initialSlide: 1,
                navigation: {
                    nextEl: '.parents_goi_giadinh_large .swiper-button-next',
                    prevEl: '.parents_goi_giadinh_large .swiper-button-prev',
                },
                breakpoints: {
                    // 1366: {
                    // },
                    // 1200: {
                    // },
                    // 1114: {
                    // },
                    // 1024: {
                    // },
                    0: {
                        slidesPerView: 'auto', // vẫn giữ auto nhưng cho phép center
                        centeredSlides: true,
                        // loop: 'true',
                        spaceBetween: 16,
                    },
                    // 320: {
                    //     slidesPerView: "auto",
                    //     spaceBetween: 12,
                    // },
                    769: {
                        slidesPerView: 'auto',
                        spaceBetween: 16,
                        centeredSlides: false
                    },
                    820: {
                        slidesPerView: 1.6,
                        spaceBetween: 18,
                    },
                    834: {
                        slidesPerView: 1.6,
                        spaceBetween: 18,
                    },
                    884: {
                        slidesPerView: 1.6,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 2.5,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                    
                },
                on: {
                    lock: function(e) {
                        if ($('.swiper.sw_goi_giadinh_large').length > 0) {
                            $('.swiper.sw_goi_giadinh_large').find('.swiper-slider-controls').addClass('swiper-slider-controls--has-lock');
                            $(".swiper.sw_goi_giadinh_large .swiper-wrapper").addClass('js_customer_reviews_center_');// cho center khi xác định ko xuất hiện silde.
                        }
                    },
                    unlock: function(e) {
                        if ($('.swiper.sw_goi_giadinh_large').length > 0) {
                            $('.swiper.sw_goi_giadinh_large').find('.swiper-slider-controls').removeClass('swiper-slider-controls--has-lock');
                            $(".swiper.sw_goi_giadinh_large .swiper-wrapper").removeClass('js_customer_reviews_center_');// cho center khi xác định ko xuất hiện silde.
                        }
                    }
                },
                lazy: true,
                // touchStartPreventDefault: false,
    
                //chiều cao của .row-text > span
                /*
                on: {
                    init: () => updateSpanHeight(),
                    slideChange: () => updateSpanHeight()
                }
                */
                
            });
        }
    });









//  set chiều cao của .row-text > span sau khi Swiper đã render nội dung
/*
function updateSpanHeight() {
    const spans = document.querySelectorAll(".sw_goi_giadinh_large .row-text span");
    let maxHeight = 0;

    spans.forEach(span => {
        span.style.height = 'auto';
        const height = span.offsetHeight;
        if (height > maxHeight) maxHeight = height;
    });

    spans.forEach(span => {
        span.style.height = `${maxHeight}px`;
    });
}
*/