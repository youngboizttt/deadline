$(document).ready(function() {
    $('#carousel-banner').swipe({
        swipeLeft: function() {
            $(this).carousel('next');
        },
        swipeRight: function() {
            $(this).carousel('prev');
        },
        threshold: 25
    });
});