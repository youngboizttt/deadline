function clickToggle() {
    $('button.navbar-toggle').click(function () {
        $('button.navbar-toggle').toggleClass('bg');
        $('.btn-toggle').toggleClass('hidden');
        $('.btn-toggle-x').toggleClass('hidden');
//        $('#navbar-collapse-1').addClass('in');

        // hide search input
        $('.input-group-search-phone').removeClass('show');

        // hide right menu
        $('.info-customer-phone').removeClass('show');
        $('.menu-customer-phone').removeClass('show-arr');
    });
}

function clickSearch() {
    $('#custom-search-input img').click(function () {
        $('.input-group-search-phone').toggleClass('show');

        // hide left menu
        $('button.navbar-toggle').removeClass('bg');
        $('.btn-toggle').removeClass('hidden');
        $('.btn-toggle-x').addClass('hidden');
        $('#navbar-collapse-1').removeClass('in');

        // hide right menu
        $('.info-customer-phone').removeClass('show');
        $('.menu-customer-phone').removeClass('show-arr');
    });
}

function clickRightMenu() {
    $('#menu-customer-phone').click(function () {

        // hide left menu
        $('button.navbar-toggle').removeClass('bg');
        $('.btn-toggle').removeClass('hidden');
        $('.btn-toggle-x').addClass('hidden');
        $('#navbar-collapse-1').removeClass('in');

        // hide search input
        $('.input-group-search-phone').removeClass('show');

        $('#menu-customer-phone').toggleClass('show-arr');
        $('#info-customer-phone').toggleClass('show');

//        if ($('#info-customer-phone').hasClass('show') ==  true) {
//            $('#info-customer-phone').removeClass('show');
//        } else {
//            $('#info-customer-phone').addClass('show');
//        }

        var wdoc = $(document).width();
        $('#info-customer-phone.show').css('width', wdoc - (wdoc * 0.1));

    });
}

function bottomToTop() {
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
}

function blockUI() {
    $.blockUI({
        message: $('#spinner'),
        css: {
            top:  ($(window).height() - 100) /2 + 'px',
            left: ($(window).width() - 100) /2 + 'px',
            width: '100px',
            display: '',
            border: 'none',
            padding: '15px',
//            backgroundColor: '#000',
            '-webkit-border-radius': '10px',
            '-moz-border-radius': '10px',
            opacity: .3,
            color: '#fff'
        }
    });
}

function unblockUI() {
    $.unblockUI();
}

function showMask() {
    var mark = $('body .mask');
    if (mark.length) {
        mark.show();
    } else {
        $('body').append('<div class="mask"></div>').show();
    }
}

function hideMask() {
    $('body .mask').remove();
}

function sidebar() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        $('.support-right-side-bar').css('right', 17);
        $('#back-to-top').css('right', 17);
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

var popUpWin = 0;
function popUpWindow(url, title, width, height) {
    if (popUpWin) {
        if (!popUpWin.closed) popUpWin.close();
    }
    var left = (window.innerWidth - width) / 2;
    var top = (window.innerHeight - height) / 2;

    popUpWin = open(url, title, 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,copyhistory=no,width=' + width + ',height=' + height + ',left=' + left + ', top=' + top + ',screenX=' + left + ',screenY=' + top + '');
}

function printContent(url, title) {
    url += '?display=print';
    popUpWindow(url, title, 800, 600);
}

function emailToFriend(url, link, title) {
    popUpWindow(url, link, title, 800, 600);
}

function stickyHeader()
{
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {

        var st = $(this).scrollTop();

        if (Math.abs(lastScrollTop - st) <= delta) {
            return;
        }

        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll down
//            $('header').removeClass('nav-down').addClass('nav-up').animate(500);

        } else {
            // Scroll up
            if (st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down').animate(500);
            }
        }

        lastScrollTop = st;
    }


//    var scrollStart = 0;
//    var startchange = $("header>div");
//    var offset = startchange.offset();
//
//    if (startchange.length) {
//        $(document).scroll(function () {
//            scrollStart = $(this).scrollTop();
//            if (scrollStart > offset.top) {
//                //$("nav").css('background-color', 'rgba(0,0,0,.65)');
//                //$("header >div").css('background-color', 'rgba(255, 255, 255, 0.3)');
//                $("header>div").css('background-color', 'rgba(240, 240, 240, 1)');
//            } else {
//                $("header>div").css('background-color', '#ffffff');
//                //$('nav').css('background-color', 'transparent');
//            }
//        });
//    }
}

function paginate() {

    $('.pager > li > a').click(function (e) {

        //alert($(e.target).is('img'));
        e.preventDefault();

        var target = $(e.target);
        var url = e.target.href;

        if ($(e.target).is('img')) {
            //alert(target.parent().attr('href'));
            //target = target.parent();
            url = target.parent().attr('href');
            target = target.parent();
        }

        //alert(url.slice(-1));

        if (target !== undefined
                && url !== ''
                && url !== undefined
                && url.slice(-1) !== '#'
                ) {

            $.smoothScroll({scrollTarget: '#ajax-container'});
            blockUI();

            $.ajax({
                type: 'GET',
                url: url,
                success: function(result) {

                    $('#ajax-container').html(result);
                    window.history.pushState('', '', url);
                    //window.history.replaceState('', '', url);
                    paginate();

                    unblockUI();

                    onpopstate = function(){

                        var url = document.location.href;

                        if (url !== undefined
                                && url !== ''
                                && url !== '#'
//                                && url !== window.location.href.replace(/#/, '')
                                && url.slice(-1) !== '#') {

                            $.smoothScroll({scrollTarget: '#ajax-container'});
                            blockUI();

                            $.ajax({
                                type: 'GET',
                                url: url,
                                success: function(result) {

                                    $('#ajax-container').html(result);
                                    paginate();
                                    unblockUI();

                                },
                                fail: function(errors) {
                                    //console.log(errors);
                                }
                           });

                        }
                    };
                },
                fail: function(errors) {
                    //console.log(errors);
                }
            });
        }
    });
}

function fadeIn()
{
    $('body').css('display', 'none');
    $('body').fadeIn(300);
}

$(document).ready(function () {

    clickToggle();
    clickSearch();
    clickRightMenu();
    bottomToTop();
    sidebar();
    paginate();
//    stickyHeader();

    // Require notification
//    Notification.requestPermission().then(function(result) {
//        console.log(result);
//    });

    // Warning cross site iframe including
//    if (window.self !== window.top) {
//        alert(location.hostname.toString());
//    }
});
