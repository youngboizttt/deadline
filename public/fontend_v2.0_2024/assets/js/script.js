jQuery(document).ready(function ($) {
    $(window).scroll(function () {
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
        $(window).scroll(function () {
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

    // box contact with sale man on left bottom page
    /*
    //with toggle open / close
    const $wrapper = $('.contact-box-wrapper');
    const $contact = $wrapper.find('.contact');
    const $toggleBtn = $wrapper.find('#toggleContact');

    if ($wrapper.length > 0) {
        $toggleBtn.on('click', function () {
            const isHidden = $contact.hasClass('hidden');

            if (isHidden) {
                $contact.removeClass('hidden');
                $toggleBtn.removeClass('open').addClass('close');
            } else {
                $contact.addClass('hidden');
                $toggleBtn.removeClass('close').addClass('open');
            }
        });
    }
    */

    const $wrapper = $('.contact-box-wrapper');
    const $contact = $wrapper.find('.contact');
    const $toggleBtn = $wrapper.find('#toggleContact');

    if ($wrapper.length > 0 && $contact.length > 0 && $toggleBtn.length > 0) {
        $toggleBtn.on('click', function () {
            $contact.addClass('hidden'); // chỉ ẩn
            $toggleBtn.hide(); // hoặc bạn có thể ẩn nút luôn
        });
    }
    /////////////////


    ///////////////// bổ sung Tab: Hướng Dẫn Xem Phim trang /truyen-hinh-fpt-play
    if ($("ul.tabs-movie-guide").length > 0) {
        $('ul.tabs-movie-guide li').click(function () {
            var tab_id = $(this).attr('data-tab');

            $('ul.tabs-movie-guide li').removeClass('current');
            $('.tab-content').removeClass('current');

            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        })
    }
    //////////////////
});