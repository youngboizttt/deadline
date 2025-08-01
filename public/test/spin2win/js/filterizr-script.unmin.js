$(document).ready(function() {
    // filterizr
    /*
    */
    $('.filterizr-filter li').click(function() {
      $('.filterizr-filter li').removeClass('filtr-active');
      $(this).addClass('filtr-active');
    });
    $('.filterizr-sorting li').click(function() {
      $('.filterizr-sorting li').removeClass('filtr-active');
      $(this).addClass('filtr-active');
    });

    var filterizd = $('.filtr-container').filterizr();

    filterizd.filterizr('sort', 'title', 'asc');
    // end filterizr
});