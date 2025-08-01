jQuery(document).ready(function ($) {
    // 
    
    

    // toggle expand fav
    $('.item-header').click(function() {
        $(this).toggleClass('expanded');
    });


    // Clibk banner
    if ($('.ldp-trial-fsafego').length) {
        $('.ldp-trial-fsafego a[data-click-banner]').click(function(e) {
            e.preventDefault();
            // 
            scrolltoEm('#secTrialForm');
        });
    }
});

// Window loaded run animation
$(window).on("load", function() {
    scrolltoEm();
});

// Scroll to elem
function scrolltoEm(_t = 'undefined') {

    var target = _t != 'undefined' ? _t : window.location.hash;
    var offset = $('.header-menu').outerHeight();
    var speedS = 1000;

    // bypass auto scrolling, stop remember position scroll when f5.
    if (_t == 'undefined') {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
    }

    // scroll by hash url
    if ($(target).length) {
        // force top header memnu
        $('.header-menu').css({ "top": 0 });

        // Offset fixed header
        $('html, body').animate({
            scrollTop: $(target).offset().top - offset
        }, speedS, function() {
            window.location.hash = target;
        });

        return false;
    }
}
