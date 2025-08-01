(function($) {
    $(function() {
        var jcarousel = $('.news-jcarousel');
        jcarousel.on('jcarousel:reload jcarousel:create', function () {
            var carousel = $(this), width = carousel.innerWidth();                    
            if (width >= 1000) {
                width = width / 6;                    
            } else if (width >= 800) {
                width = width / 4;                  
            } else if (width >= 600) {
                width = width / 3;                  
            } else if (width >= 350) {
                width = width / 2;                  
            }
            carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            carousel.jcarousel('items').css('height', Math.ceil(width*1) + '%');
        })
        .jcarousel({
            wrap: 'circular'
        });

        $('.news-jcarousel-control-prev')
        .jcarouselControl({
            target: '-=1'
        });

        $('.news-jcarousel-control-next')
        .jcarouselControl({
            target: '+=1'
        });

        $('.news-jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function() {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).removeClass('active');
        })
        .on('click', function(e) {
            e.preventDefault();
        })
        .jcarouselPagination({
            perPage: 1,
            item: function(page) {
                return '<a href="#' + page + '">' + page + '</a>';
            }
        });
    });
})(jQuery);