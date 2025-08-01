if ($(".swiper.sw-customer-reviews").length > 0) {
    function sw_customer_reviews() {
        var swiper = new Swiper('.swiper.sw-customer-reviews', {
            slidesPerView: "auto",
            spaceBetween: 0,
            loop: true,
            centeredSlides: true,
            initialSlide: 1,
            slideToClickedSlide: true,
            
            navigation: {
                nextEl: '.parents_customer_reviews .swiper-button-next',
                prevEl: '.parents_customer_reviews .swiper-button-prev',
            },
            breakpoints: {
                
                320: {
                    slidesPerView: "auto",
                    spaceBetween: 0,
                    centeredSlides: false,
                    initialSlide: 0,
                },
                1023: {
                    slidesPerView: "auto",
                    spaceBetween: 0,
                    centeredSlides: false,
                    initialSlide: 0,
                },
                1024: {
                    slidesPerView: "auto",
                    spaceBetween: 0,
                    centeredSlides: true,
                },
                1200: {
                    slidesPerView: "auto",
                    spaceBetween: 0,
                },
                1366: {
                    slidesPerView: "auto",
                    spaceBetween: 0,
                },
                1500: {
                    slidesPerView: "auto",
                    spaceBetween: 0,
                }
            },
            lazy: true,
            touchStartPreventDefault: false,
        });
    }

    $(document).ready(function () {
        sw_customer_reviews();

        if ($(".parents_customer_reviews .swiper-button-disabled.swiper-button-lock").length > 0) { // check if swiper button is locked
            $(".swiper.sw-customer-reviews .swiper-wrapper").addClass('js_customer_reviews_center_');// cho center khi xác định ko xuất hiện silde.
        }

        // cuctom cho chiều cao bằng nhau nếu nội dung ko format bằng nhau
        function equalizeSwiperSlideHeight() {
            const slides = document.querySelectorAll(".sw-customer-reviews .swiper-slide");
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
    });
}