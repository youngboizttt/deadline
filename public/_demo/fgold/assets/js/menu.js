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


});

$(function() {
  $('.scroll-down').click (function() {
    $('html, body').animate({scrollTop: $('.to_bottom.ok').offset().top }, 'slow');
    return false;
  });
});