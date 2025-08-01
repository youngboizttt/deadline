/*
|
|---------------------------- slide package-hyper
|
*/

if ($(".swiper.package-hyper").length) {
    function sw_package_hyper() {
        var swiper = new Swiper('.swiper.package-hyper', {
            slidesPerView: "auto",
            spaceBetween: 0,//24
            navigation: {
                nextEl: '.parents_hyper .swiper-button-next',
                prevEl: '.parents_hyper .swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: "auto",// dùng auto để cho with tùy ý >> & set width của item nhỏ hơn 100vw để hiển thị hơn 1 item
                    spaceBetween: 0,
                },
                767: {
                    spaceBetween: 0, //16
                },
                834: {
                    spaceBetween: 0,
                },
                884: {
                    spaceBetween: 0,
                },
                992: {
                    spaceBetween: 0,
                },
                1024: {
                    spaceBetween: 0,
                },
                1500: {

                },
            },
            /////
            lazy: true,
        });
    }

    $(document).ready(function () {
        sw_package_hyper();

        if ($(".parents_hyper .swiper-button-disabled.swiper-button-lock").length > 0) { // check if swiper button is locked
            $(".swiper.package-hyper .swiper-wrapper").addClass('js_hyperfast_center');
        }

        if ($(".swiper.package-hyper .swiper-slide.with-suggest").length == 0) { // nếu có gói đề xuất thì set lại padding của tiêu đề
            $(".swiper.package-hyper .swiper-slide .package-content").addClass('not_label_hyper');
            $(".package-hyper .swiper-slide .package-content .middle").addClass('no_bullet_bg');
        }
        if ($(".swiper.package-hyper .swiper-slide.with-suggest").length > 0) {
            // console.log('co gói đề xuất');
        }
    });

}




/*
| 
|---------------------------- slide marquee cho section Tối ưu ping cho những tựa game bạn yêu thích nhất
|
*/


function __animate(carousel, speed, offsetRef, animationIdRef) {
    offsetRef.value -= speed;
    if (Math.abs(offsetRef.value) >= carousel.scrollWidth / 2) {
        offsetRef.value = 0; // reset để loop mượt
    }
    carousel.style.transform = `translateX(${offsetRef.value}px)`;
    animationIdRef.value = requestAnimationFrame(() => animate(carousel, speed, offsetRef, animationIdRef));
}

$(document).ready(function () {
    if ($('.__marquee-carousel .swiper-wrapper').length) {
        // console.log('có');
        const carousel = document.querySelector('.marquee-carousel .swiper-wrapper');
        const marqueeContainer = document.querySelector('.marquee-carousel');
        let offset = { value: 0 };
        let animationId = { value: null };
        let speed = 1;
        var swiper = new Swiper('.marquee-carousel', {
            lazy: true,
            
        });


        animate(carousel, speed, offset, animationId);

        marqueeContainer.addEventListener('mouseenter', () => {
            cancelAnimationFrame(animationId.value);
        });

        marqueeContainer.addEventListener('mouseleave', () => {
            animate(carousel, speed, offset, animationId);
        });
    }
});


$(document).ready(function () {
    if ($('.marquee-carousel .swiper-wrapper').length) {
        const carousel = document.querySelector('.marquee-carousel .swiper-wrapper');
        const marqueeContainer = document.querySelector('.marquee-carousel');
        let offset = { value: 0 };
        let animationId = { value: null };
        let speed = 1;

        // Kiểm tra nếu là mobile thì không chạy animation
        if ($(window).width() > 768) {
            animate(carousel, speed, offset, animationId);

            marqueeContainer.addEventListener('mouseenter', () => {
                cancelAnimationFrame(animationId.value);
            });

            marqueeContainer.addEventListener('mouseleave', () => {
                animate(carousel, speed, offset, animationId);
            });
        } else {
            // Cấu hình Swiper cho mobile
            new Swiper('.marquee-carousel', {
                lazy: true,
                slidesPerView: 'auto',
                spaceBetween: 16,
                freeMode: true,
            });
        }
    }
});


function animate(carousel, speed, offsetRef, animationIdRef) {
    offsetRef.value -= speed;
    if (Math.abs(offsetRef.value) >= carousel.scrollWidth / 2) {
        offsetRef.value = 0;
    }
    carousel.style.transform = `translateX(${offsetRef.value}px)`;
    animationIdRef.value = requestAnimationFrame(() =>
        animate(carousel, speed, offsetRef, animationIdRef)
    );
}


/*
|
|---------------------------- slide gamer
|
*/

if ($(".swiper.hyper-gamers").length) {
    function sw_hyper_gamers() {
        var swiper = new Swiper('.swiper.hyper-gamers', {
            slidesPerView: "auto",
            spaceBetween: 0,
            navigation: {
                nextEl: '.hyper_parents_gamers .swiper-button-next',
                prevEl: '.hyper_parents_gamers .swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: "auto",// dùng auto để cho with tùy ý >> & set width của item nhỏ hơn 100vw để hiển thị hơn 1 item
                    // spaceBetween: 16,
                },
                767: {
                    // spaceBetween: 16,
                },
                834: {
                    // spaceBetween: 24,
                },
                1024: {
                    // spaceBetween: 16,
                },
            },
            /////
            lazy: true,
        });
    }

    $(document).ready(function () {
        sw_hyper_gamers();
        if ($(".hyper_parents_gamers .swiper-button-disabled.swiper-button-lock").length > 0) { // check if swiper button is locked
            $(".swiper.hyper-gamers .swiper-wrapper").addClass('js_hyper_gamer_center');
        }
    });

}


/*
| 
|---------------------------- trường hợp trang chủ chỉ hiển thị 1 gói sản phẩm thì disable slide đi
|
*/

if ($(".package-hyper.sw_hyper_one_item").length) {
    // console.log('sw chỉ có 1 item');
    document.addEventListener('DOMContentLoaded', function () {
        const swiperContainer = document.querySelector('.package-hyper.sw_hyper_one_item');
        const swiperSlides = swiperContainer.querySelectorAll('.package-hyper.sw_hyper_one_item .swiper-slide');

        // Kiểm tra nếu chỉ có 1 slide
        if (swiperSlides.length <= 1) {
            //swiperContainer.classList.add('swiper-no-swiping');
        }
    });
}