jQuery(document).ready(function($) {
    $(window).scroll(function() {
        var targetElement = $('body');
        var targetOffset = targetElement.offset().top;
        var distanceToTop = targetOffset - $(this).scrollTop();
        // console.log('Distance to top of element:', distanceToTop);
        
        // Truong hop co smartbanner
        if (targetElement.hasClass('smr-banner-added')) {
            // 
            if (distanceToTop <= 84 && distanceToTop > -1) {
                $('.header_area').css('top', distanceToTop + 'px');
            } else {
                $('.header_area').css('top', '0px');
            }
        }
        
    });
    
    // custom button allways on top 
    if (window.innerWidth <= 540) {
        // console.log(" <= 540px.");
        $(window).scroll(function() {
            var scrollPosition = $(window).scrollTop() + $(window).height();
            var documentHeight = $(document).height();
            
            if (documentHeight - scrollPosition <= 180) {
                $('.always-on').addClass('js_always_on_bottom');
                $('.back-to-top').addClass('_js_back_top');
            } else {
                $('.always-on').removeClass('js_always_on_bottom');
                $('.back-to-top').removeClass('_js_back_top');
            }
        });

    }
});