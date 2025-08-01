 // init Isotope
  var $grid = $('.uploads-row').isotope({
    itemSelector: '.col-media',
    layoutMode: 'fitRows',
    getSortData: {
      fileby:   '.file-by',
      filename: '.file-name',
      filedate: '[data-ticks]',
      filesize: function( itemElem ) {
        var filesize = $( itemElem ).attr('data-filesize');
        return parseInt( filesize );
      }
    }
  });

  // bind filter button click
  $('.filters-button-group').on('click', 'button.radios', function () {
    var filterValue = $(this).attr('data-filter');
    $('.filters-button-group .radios').removeClass('active');
    $(this).addClass('active');
    $grid.isotope({ filter: filterValue });
  } );


  // complete
  $grid.on( 'layoutComplete', function( event, laidOutItems ) {
    // console.log( 'Isotope layout completed on ' + laidOutItems.length + ' items' );
  });

  // arrange
  $grid.on( 'arrangeComplete',
    function( event, filteredItems ) {
      // console.log( 'Isotope arrange completed on ' + filteredItems.length + ' items' );
      const _w = $(window).width();
      if (_w > 1024) {
        filteredItems.length > 8 ? $('#uploads_row').addClass('ff__fix') : $('#uploads_row').removeClass('ff__fix');
      } else {
        filteredItems.length > 4 ? $('#uploads_row').addClass('ff__fix') : $('#uploads_row').removeClass('ff__fix');
      }
    }
  );


  // bind sort button click
  $('.sort-button-group').on( 'click', 'div', function() {

    /* Get the element name to sort */
    var sortValue = $(this).attr('data-sort-value');

    /* Get the sorting direction: asc||desc */
    var direction = $(this).attr('data-sort-direction');

    /* convert it to a boolean */
    var isAscending = (direction == 'asc');
    var newDirection = (isAscending) ? 'desc' : 'asc';

    /* pass it to isotope */
    $grid.isotope({ sortBy: sortValue, sortAscending: isAscending });

    $(this).attr('data-sort-direction', newDirection);

    // var span = $(this).find('.glyphicon');
    // span.toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
    var span = $(this).find('.txtShortName');
    span.toggleClass('txt-short-up txt-short-down');

  });