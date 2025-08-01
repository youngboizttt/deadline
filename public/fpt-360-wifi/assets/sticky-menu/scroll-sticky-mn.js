jQuery(function($) {
    $(document).ready(function() {
        function becomeSticky(el, padding) {
            if (el.length) {
                el.sticky({
                    topSpacing: padding
                });
            }
        }
        becomeSticky($("#eight-day-sticky-section"), 0);
    });
});

jQuery(function($) {
    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();
        $('.tour-details-section').each(function(i) {
            var topPos = $(this).offset().top;
            // if ((topPos - scrollPos) <= 80) {
            if ((topPos - scrollPos) <= 180) {
                // alert('xxx');
                $('.tour-details-section-active').removeClass('tour-details-section-active')
                $('#eight-day-sticky-section .active-highlight').eq(i).addClass('tour-details-section-active')
            }
        })
    });
});

// $("#change-button").click(function() {
//     $(".outer-container").toggleClass("active");
// });