$(document).ready(function () {


//    //var hBody = $('body').height();
//    //$('.login-form-wrapper').css('height', hBody);
//
//    //$('.ul-top-bar-support li:nth-child(3)').click(function () {
//    $('.ul-top-bar-support #login-popup-link').click(function () {
////        $('.ul-top-bar-support li:nth-child(3)').addClass('arr');
//        $('.ul-top-bar-support #login-popup-link').addClass('arr');
//        $('.login-form-wrapper').removeClass('off');
//        $('.form-popup-login').removeClass('off');
//        $('.form-popup-login').toggleClass('showpopup');
//        //$('.login-form-wrapper').addClass('showpopup');
//        $('.ul-top-bar-support li:nth-child(3)').toggleClass('arr');
//
//    });
//
//    $('.login-form-wrapper').click(function () {
//        $('.login-form-wrapper').addClass('off');
//        $('.form-popup-login').addClass('off');
////        $('.ul-top-bar-support li:nth-child(3)').removeClass('arr');
//        $('.ul-top-bar-support #login-popup-link').removeClass('arr');
//    });

    $('.item-level-child').on('click', function (e) {
        if ($(window).innerWidth() < 768) {
            var curentUl = $(this).find('ul.child-phone-menu');
            $('.child-phone-menu').not(curentUl).hide();
            curentUl.toggle();
            e.stopPropagation();
        }
    });

    $('.child-phone-menu').on('click', function (e) {
        if ($(window).innerWidth() < 768) {
            e.stopPropagation();
        }
    });

    var menuPopupTimer;

    $('ul.menu-secondary>li').each(function () {
        var that = $(this);
        $(this).hover(function () {
            if (menuPopupTimer) {
                clearTimeout(menuPopupTimer);
            }

            $(this).addClass('menu-active');

            menuPopupTimer = setTimeout(function () {
                that.addClass('open');
                resetPosition(that);
            }, 10);
        }, function () {

            $(this).removeClass('menu-active');

            if (menuPopupTimer) {
                clearTimeout(menuPopupTimer);
            }
            $(this).removeClass('open');
//            menuPopupTimer = setTimeout(function () {
//                that.removeClass('open');
//            }, 200);
        });
    });

    $('ul.menu-secondary>li').click(function (event) {

        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).removeClass('menu-active');
        } else {
            $(this).addClass('open');
            $(this).addClass('menu-active');
        }
    });

    function resetPosition(eSelected) {
        var wBoxParrent, pSelected, pChild, wChild, pMidSelected, eChild;
        if ($(window).innerWidth() >= 768) {
            /*
             *  Gán các giá trị ban đầu
             */
            wBoxParrent = $('#navbar-collapse-1').width();
            if (eSelected != undefined) {
                pSelected = eSelected.position().left;
                eChild = eSelected.find('.mega-dropdown-menu');
                wChild = eChild.width();
                /*
                 * Tính vị trí child
                 */
                pMidSelected = pSelected + (eSelected.width() / 2);
                pChild = pMidSelected - (wChild / 2);
                /*
                 * Nếu pChild <0 tức là element đang chọn quá gần bên trái=> cho pChild=0
                 */
                if (pChild < 0) {
                    pChild = 0;
                }
                /*
                 * Nếu pChild vượt mức (wBoxParrent - wChild)tức là Child đang bị lệch phải và vượt quá right=0,
                 * nên xét pChild= số âm để nhận dạng dùng cho bước sau
                 */
                if (pChild > (wBoxParrent - wChild)) {
                    pChild = -1;
                }
                /*
                 * Gán giá trị left right.
                 * Nếu pChild >=0 thì xét theo left, pChild <=0 thì xét theo right;
                 * Giá trị còn lại cho auto để khi resize tránh trường hợp giá trị gắn lần tính trước bị trùng
                 */
                if (pChild >= 0) {
                    eChild.css('left', pChild);
                    eChild.css('right', 'auto');
                } else {
                    eChild.css('right', '0');
                    eChild.css('left', 'auto');
                }
            }
        }
    }

    function setPositionMenuChild() {
        /**
         * Abbreviations:
         * e <=> element
         * p <=> position
         * w <=> width
         */
        var eSelected;
        $('.navbar-menu-second .menu-secondary>li').click(function () {
            eSelected = $(this);
        });
        resetPosition(eSelected);
        $('#navbar-collapse-1').on({
            'shown.bs.dropdown': function () {
                resetPosition();
            }
        });
    }

//    $(window).resize(function (e) {
//        if ($(window).innerWidth() >= 768) {
//            $('.child-phone-menu').show();
//            setPositionMenuChild();
//        }
//    });

//    setPositionMenuChild();

    $('body,html').click(function (e) {

        var container = $('.info-customer-phone');

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            var container2 = $('.menu-customer-phone');
            if (!container2.is(e.target) && container2.has(e.target).length === 0) {
            $('.info-customer-phone').removeClass('show');
            $('.menu-customer-phone').removeClass('show-arr');
            }
        }
    });

});

