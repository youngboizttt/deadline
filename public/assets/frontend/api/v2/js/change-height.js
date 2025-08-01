 // Doanvh script change height when view other devices
 equalheight = function(container){

  var currentTallest = 0,
  currentRowStart = 0,
  rowDivs = new Array(),
  $el,
  topPosition = 0;
  $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
   }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

// script 1: page mix166
$(window).load(function() {
  equalheight('div.col-sm-6.col-md-3.group-item.text-center.height-mix166');
});
$(window).resize(function(){
  equalheight('div.col-sm-6.col-md-3.group-item.text-center.height-mix166');
});

// script 2: page hi-gio-cloud
$(window).load(function() {
  equalheight('.list-news-items div.col-xs-12.item-hgc');
});
$(window).resize(function(){
  equalheight('.list-news-items div.col-xs-12.item-hgc');
});

// script 3: page hoi-nghi-truyen-hinh-va-ip-camera
$(window).load(function() {
  equalheight('.inline-block.item_mesh .col-xs-12');
});
$(window).resize(function(){
  equalheight('.inline-block.item_mesh .col-xs-12');
});

// script 4: page security services
$(window).load(function() {
  equalheight('.customer-service-list>div.col-xs-12');
});
$(window).resize(function(){
  equalheight('.customer-service-list>div.col-xs-12');
});

// script 5: page startalk
$(window).load(function() {
  equalheight('.item-startalk.col-sm-20');
});
$(window).resize(function(){
  equalheight('.item-startalk.col-sm-20');
});

//SCRIPT 6: azure AND office 365
$(window).load(function() {
  equalheight('.col-azure-products>div');
});
$(window).resize(function(){
  equalheight('.col-azure-products>div');
});

// script 7: page azure-office-365
$(window).load(function() {
  equalheight('.col-azure-products>div');
});
$(window).resize(function(){
  equalheight('.col-azure-products>div');
});
