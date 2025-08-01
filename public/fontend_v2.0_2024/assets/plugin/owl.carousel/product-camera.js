jQuery(document).ready(function($) {
    
    if ($("#product-camera-slide").length > 0) {

        $('#product-camera-slide').owlCarousel({
            loop: false,
            center: false,
            items: 3,
            margin: 0,
            autoplay: false,
            dots: true,
            nav: true,
            autoplayTimeout: 9500,
            smartSpeed: 250,
            navText: ['<i class="nav-owl arrow-left"></i>', '<i class="nav-owl arrow-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 60,
                    margin: 16,
                },
                768: {
                    items: 2,
                },
                1024: {
                    items: 3
                },
                1170: {
                    items: 4
                }
            }
        });
    }
});