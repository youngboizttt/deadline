jQuery(document).ready(function($) {
    setTimeout(function() {

        $('#owl_items_product').owlCarousel({
            loop: false, // nếu xét loop dựa theo số item thì dùng:  loop: loops
            center: false,
            items: 6,
            margin: 24,
            autoplay: false,
            dots: true,
            nav: true,
            autoplayTimeout: 9500,
            smartSpeed: 250,
            navText: ['<i class="nav-owl arrow-left"></i>', '<i class="nav-owl arrow-right"></i>'],
            responsive: {
                0: {
                    items: 2,
                    margin: 16,
                    stagePadding: 60,
                },
                768: {
                    items: 4,
                    // loop: true,

                },
                1024: {
                    items: 4
                },
                1170: {
                    items: 5
                },
                1366: {
                    items: 6
                }
            }
        });

    }, 1000); // Set timeout to 1 second (1000 ms)

    setTimeout(function () {
        // xử lý img có thước đúng độ rộng trong block
        $('.owl-carousel.custom-link-products .top .img1 img').css('max-width', '100%');
        $('.owl-carousel.custom-link-products').css({'height':'unset', 'overflow':'unset'});
    }, 1500); // 6000ms = 1.5 giây

});