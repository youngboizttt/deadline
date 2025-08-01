$(document).ready(function() {
  // Initialize fullpage.js
  /*var autoScroll = true;*/
 // if (window.innerWidth > 900) {
  
  $('#fp-wrapper').fullpage({
    // anchors: ['About', 'Video', 'Wifi6', 'Service','Tech','Price','Connect', 'Contact'],
    anchors: ['About', 'Video', 'WiFi6', 'Service','Tech','Tech-WiFi','360-WiFi-1','360-WiFi-2','360-WiFi-3','Tech-Ultra','Price','Connect', 'Contact'],
    paddingTop: '0px', // padding top khi cần trừ độ cao menu 
    fixedElements: '.navbar-fixed-top',
    menu: '#myNavbar', // neu dung navbar thì mở
    loopBottom: true,
    //scrollOverflow: true,
    //normalScrollElements: '#section1',
    responsiveWidth: 820,//950,
    //scrollBar: true,
    //autoScrolling: autoScroll,
    // scrollHorizontally: true,
    responsiveHeight: 479,

    afterRender:function(){
    },
    
    afterLoad: function(){

      $('.fp-table.active .aos-init').addClass('aos-animate');// doanvh: Fix loi AOS ko hoat dong tren nhieu Section
      $('.video-stream').attr('data-autoplay');
      
    },

    onLeave: function(){
      //fix lỗi nhiều aos trên slide horizontal and all slide: khi https://stackoverflow.com/questions/48474761/fullpagejs-and-aos-not-working-together 
      $('.slide [data-aos]').each(function(){
          $(this).removeClass("aos-animate")
      });
      $('.section [data-aos]').each(function(){
          $(this).removeClass("aos-animate")
      });
    },
    onSlideLeave: function(){
      $('.intro [data-aos]').each(function(){
          $(this).removeClass("aos-animate")
      });
    },
    afterSlideLoad: function(){
      $('.fp-table.active [data-aos]').each(function(){
          $(this).addClass("aos-animate")
      });

      
    },
  });
  /*
  if (window.innerWidth < 800) {
    $.fn.fullpage.setAutoScrolling(false);
  }*/

  // custom: toggle then click menu
  $(".navbar-nav a").on("click", function() {
    $("#myNavbar").removeClass("in");
    // $(this).addClass("in");   
  }); 
    
});