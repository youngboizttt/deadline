var $item = $('.carousel-item'); 
var $wHeight = $(window).height();
var h_h_h = '550px';
$item.eq(0).addClass('active');
$item.height ('550px');//$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
    var $src = $(this).attr('src');
    var $color = $(this).attr('data-color');
    $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'overflow': 'hidden',
    'background-size': 'cover',
    'background-position': 'center center',
    'visibility': 'inherit',
    'display': 'block',
    // 'background-color' : $color
    });
    $(this).remove();
});

$(window).on('resize', function (){
    $wHeight = $(window).height();
    
    $item.height(h_h_h);// $item.height($wHeight);
    if ($(window).width() <= 1366) {
    $item.height('530px');
    }
    if ($(window).width() <= 1200) {
    $item.height('510px');
    }
    if ($(window).width() <= 1024) {
    $item.height('490px');
    }
    if ($(window).width() <= 768) {
    $item.height('400px');
    }
    if ($(window).width() <= 767) {
    $item.height('350px');
    }
    if ($(window).width() < 500) {
    $item.height('250px');
    }
});
$(window).trigger('resize');

$('.carousel').carousel({
    interval: 6000,
    pause: "false"
});

