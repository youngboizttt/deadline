$(document).ready(function() {

  $('ul.menu a').click(function(){
    $('#menu-btn').prop('checked', false);
  });


   // script xu ly multi tab  / https://cp.io/joao-goncalves/pen/ZXYGmo
   $('ul.tabs li').click(function(){
      var $this = $(this);
      var $theTab = $(this).attr('id');
      // console.log($theTab);
      if($this.hasClass('active')){
      } else{
        $this.closest('.tabs_wrapper').find('ul.tabs li, .tabs_container .tab_content').removeClass('active');
        $('.tabs_container .tab_content[data-tab="'+$theTab+'"], ul.tabs li[id="'+$theTab+'"]').addClass('active');
      }    
    });
    


    // xu ly scroll opacity div
    $(window).scroll(function() {
      var scrollDistance = $(window).scrollTop() + 400;
      $('.page-section').each(function(i) {
          if ($(this).position().top <= scrollDistance) {            
            $('.page-section').removeClass('d-active');
            $('.page-section').eq(i).addClass('d-active');
            //  console.log($(this).position().top);
          }        
      });
      //////////////////////////// scroll to change bg box security >> ok
      /*
      var scrollDistance1 = $(window).scrollTop() - 6100;
      $('.row-security').each(function(i) {
          if ($(this).position().top <= scrollDistance1) {            
              $('.row-security').removeClass('security-bg-1');
              $('.row-security').removeClass('security-bg-0');
              $('.row-security').eq(i).addClass('security-bg-1');
          }
          else{
            $('.row-security').removeClass('security-bg-1');
            $('.row-security').addClass('security-bg-0');
          }
      });
      */
      ////////////////////////////////
      var windscroll = $(window).scrollTop();
      if (windscroll >= 0) {
        $('._scrollTo').each(function(i) {
          if ($(this).position().top <= windscroll - 0) {
            $('header .menu li._activeLink').removeClass('_activeLink');
            $('header .menu li').eq(i).addClass('_activeLink');
          }
        });  
      } else {  
        $('header .menu li._activeLink').removeClass('_activeLink');
        $('header .menu li:first').addClass('_activeLink');
      }
    }).scroll();


    // filterizr
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

jQuery(document).ready(function($) {
  /*check height & xử lý scroll cho danh sach game*/
  $('#_filtr_container').addClass('scroll_filtr__contain');// mac dinh add scroll
  $('.filterizr-filter li').click(function() {
    $(window).resize(function() {
      // location.reload();
      // return false;// check again
      // window.reload();
      return false;
    });
    var Height = document.getElementById("_filtr_container").clientHeight;
    var Width = window.innerWidth;
    // console.log(Height);
    // console.log(Width);
    if(Width > 539){
      $('#_filtr_container').removeClass('scroll_filtr__contain');
      if(Height >= 784){// >=784 >>>important
        $('#_filtr_container').addClass('scroll_filtr__contain');
      }      
      else {
        $('#_filtr_container').removeClass('scroll_filtr__contain');
      }
    }
    if(Width <= 539){
      // console.log('mb' + Height);
      $('#_filtr_container').removeClass('scroll_filtr__contain');
      if(Height >= 628){
        // height 2 item = 628 >>>important
        $('#_filtr_container').addClass('scroll_filtr__contain');
      }
      else {
        $('#_filtr_container').removeClass('scroll_filtr__contain');
      }
    } 
  });  
});