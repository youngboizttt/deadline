 // Dvh script change height when view other devices
 // [equalheight js]
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

$(window).load(function() {
// script 1: page mix166
equalheight('div.col-sm-6.col-md-3.group-item.text-center.height-mix166');
// script 2: page hi-gio-cloud
equalheight('.list-news-items div.col-xs-12.item-hgc');
// script 3: page hoi-nghi-truyen-hinh-va-ip-camera
equalheight('.inline-block.item_mesh .col-xs-12');
// script 4: page security services
equalheight('.customer-service-list>div.col-xs-12');
// script 5: page startalk
equalheight('.item-startalk.col-sm-20');
//SCRIPT 6: azure AND office 365
equalheight('.col-azure-products>div');
// script 8: page data center
equalheight('.customer-service-list.list-service1>.items-service');
// script 9: enterprise
equalheight('.items-enterprise-new .col-xs-12.col-sm-4');
// script 10: page azure-office-365
equalheight('.package-services .pad-box-buy');
// script 11: new internet product _ cho cac trang Internet
// equalheight('.col-data');
equalheight('.col-data>.middle');
equalheight('.col-data .bottom p');
equalheight('.col-data .top .img-combo span');
equalheight('.col-data .bottom a.btn-fpt');
//ihome
equalheight('.col-xs-12.accompany-ihome');
equalheight('.circle-ihome>div');

equalheight('#package_net_doanhnghiep.owl-carousel .owl-item .middle_1');
});


$(window).resize(function(){
  equalheight('div.col-sm-6.col-md-3.group-item.text-center.height-mix166');
  equalheight('.list-news-items div.col-xs-12.item-hgc');
  equalheight('.inline-block.item_mesh .col-xs-12');
  equalheight('.customer-service-list>div.col-xs-12');
  equalheight('.item-startalk.col-sm-20');
  equalheight('.col-azure-products>div');
  equalheight('.customer-service-list.list-service1>.items-service');
  equalheight('.items-enterprise-new .col-xs-12.col-sm-4');
  equalheight('.package-services .pad-box-buy');
  // equalheight('.col-data');
  equalheight('.col-data>.middle');
  equalheight('.col-data .bottom p');
  equalheight('.col-data .top .img-combo span');
  equalheight('.col-data .bottom a.btn-fpt');
  equalheight('.col-xs-12.accompany-ihome');
  equalheight('.circle-ihome>div');

  equalheight('#package_net_doanhnghiep.owl-carousel .owl-item .middle_1');
});
