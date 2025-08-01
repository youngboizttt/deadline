

$(document).ready(function () {
    if ($(".swiper.sw_goi_giadinh").length > 0) {
        sw_GoiGiadinh();
    }

    // if ($(".parents_goi_giadinh .swiper-button-disabled.swiper-button-lock").length > 0) { // check if swiper button is locked
    //     $(".swiper.sw_goi_giadinh .swiper-wrapper").addClass('js_customer_reviews_center_');// cho center khi xác định ko xuất hiện silde.
    // }

    // cuctom cho chiều cao bằng nhau nếu nội dung ko format bằng nhau
    function equalizeSwiperSlideHeight() {
        const slides = document.querySelectorAll(".sw_goi_giadinh .swiper-slide");
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

    // 
    function sw_GoiGiadinh() {
        var swiper = new Swiper('.swiper.sw_goi_giadinh', {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: false,
            navigation: {
                nextEl: '.parents_goi_giadinh .swiper-button-next',
                prevEl: '.parents_goi_giadinh .swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: "auto",
                    spaceBetween: 4,
                },
                768: {
                    // slidesPerView: 1.5,
                    slidesPerView: "auto",
                    spaceBetween: 12,
                },
                820: {
                    // slidesPerView: 1.6,
                    slidesPerView: "auto",
                    spaceBetween: 12,
                },
                834: {
                    // slidesPerView: 1.6,
                    slidesPerView: "auto",
                    spaceBetween: 12,
                },
                884: {
                    // slidesPerView: 1.6,
                    slidesPerView: "auto",
                    spaceBetween: 12,
                },
                992: {
                    // slidesPerView: 2.5,
                    slidesPerView: 3,
                    spaceBetween: 12,
                },
                1200: {
                    slidesPerView: 3,
                },
            },
            on: {
                lock: function(e) {
                    if ($('.swiper.sw_goi_giadinh').length > 0) {
                        $('.swiper.sw_goi_giadinh').find('.swiper-slider-controls').addClass('swiper-slider-controls--has-lock');
                        $(".swiper.sw_goi_giadinh .swiper-wrapper").addClass('js_customer_reviews_center_');// cho center khi xác định ko xuất hiện silde.
                    }
                },
                unlock: function(e) {
                    if ($('.swiper.sw_goi_giadinh').length > 0) {
                        $('.swiper.sw_goi_giadinh').find('.swiper-slider-controls').removeClass('swiper-slider-controls--has-lock');
                        $(".swiper.sw_goi_giadinh .swiper-wrapper").removeClass('js_customer_reviews_center_');// cho center khi xác định ko xuất hiện silde.
                    }
                }
            },
            lazy: true,
            touchStartPreventDefault: false,
        });
    }
});