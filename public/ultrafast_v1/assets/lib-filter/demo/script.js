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
  $('.filters-button-group').on('click', 'div', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

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



  jQuery(document).ready(function($) {
    $('.radios').click(function(){
      $('#uploads_row').resize(function(){
        window.reload();  
        // return true;
      });
        var _Height = document.getElementById("uploads_row").clientHeight;
        console.log(_Height);
        if(_Height >= 616){// >=764 >>>important
          $('#uploads_row').addClass('scroll_filtr__contain');
          $(this).attr('disabled','disabled');
        }
        else
          $('#uploads_row').removeClass('scroll_filtr__contain');
          $(this).attr('disabled','disabled');
          console.log(_Height) 
    });
    
  })