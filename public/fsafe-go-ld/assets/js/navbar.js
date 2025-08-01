$(document).ready(function () {
    //~~~~~~~~~~~~~~~~~~~~~ xử lý hover trên desktop và click trên thiết bị di động ~~~~~~~~~~~~~~~~~~~~~

   /* đã di chuyển function này ra ngoài
    function isMobile() {
        return window.innerWidth <= 991; // Xác định breakpoint cho mobile (767)
    }
    */


    // Thêm sự kiện cho dropdown
    $('.navbar-nav > .dropdown').each(function () {
        const dropdown = $(this);
        /*
        */
        
        function activateDropdown() {
            dropdown.addClass('open');
        }

        function deactivateDropdown() {
            dropdown.removeClass('open');
        }
        
        // Xử lý hover trên desktop
        if (!isMobile()) {
            dropdown.on('mouseenter', activateDropdown);
            dropdown.on('mouseleave', deactivateDropdown);
        }else {
            // Xử lý click trên mobile
            dropdown.off('mouseenter mouseleave'); // Xóa sự kiện hover nếu có
            dropdown.children('a').on('click', function (e) {
                e.preventDefault(); // Ngăn chặn hành động mặc định
                dropdown.toggleClass('open');
            });
        }
        
    });

    // Lắng nghe thay đổi kích thước cửa sổ để cập nhật
    $(window).on('resize', function () {
        $('.navbar-nav > .dropdown').off('mouseenter mouseleave click'); // Xóa các sự kiện hiện tại
        $('.navbar-nav > .dropdown').each(function () {
            const dropdown = $(this);

            // Xử lý hover trên desktop
            if (!isMobile()) {
                dropdown.on('mouseenter', function () {
                    dropdown.addClass('open');
                });
                dropdown.on('mouseleave', function () {
                    dropdown.removeClass('open');
                });
            }else {
                dropdown.children('a').on('click', function (e) {
                    e.preventDefault();
                    dropdown.toggleClass('open');
                });
            }
            
        });
    });
    

    //~~~~~~~~~~~~~~~~~~~~~ Ngăn dropdown-menu bị tắt khi click vào khu vực bên trong dropdown-menu (trên desktop) ~~~~~~~~~~~~~~~~~~~~~

    $('.dropdown-menu').on('click', function (e) {
        e.stopPropagation(); // Ngăn chặn sự kiện lan ra ngoài
    });

    // Xử lý sự kiện click vào dropdown-toggle
    $('.dropdown > a').on('click', function (e) {
        e.preventDefault();
        // $(this).removeClass('open');
        // Toggle trạng thái open
        $(this).toggleClass('open');
    });

    // Đóng dropdown nếu click ra ngoài
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.dropdown').length) {
            $('.dropdown').removeClass('open');
        }
    });

    //~~~~~~~~~~~~~~~~~~~~~ xử lý form search
    $('#toggle-search').on('click', function() {
        // $('#searchBar').toggle('display: inline-block');
        const $searchBar = $('#searchBar');
        
        if ($searchBar.css('display') === 'none') {
            $searchBar.show();
        } else {
            $searchBar.hide();
        }
        
        $(this).toggleClass('btn-search-close'); 
    });
    //~~~~~~~~~~~~~~~~~~~~~ END xử lý form search


    //~~~~~~~~~~~~~~~~~~~~~ xử lý toogle nút hamburger
    $('.navbar-toggle').on('click', function () {

        // Xử lý disable scroll body và ẩn hiện logout ở mobile
        const isMenuOpen = $('.menu-links.collapse').hasClass('in'); // Kiểm tra trạng thái hiện tại của menu
        if (isMenuOpen) {
            $('body').removeClass('disable_scroll_body'); 

            $('._js_logout_mobile').removeClass('show_logout')
        } else {
            $('body').addClass('disable_scroll_body'); 

            $('._js_logout_mobile').addClass('show_logout')

        }

        // <<<< xử lý nút hamburger và close
        const $iconHamburger = $(this).find('.icon-hamburger');
        const $iconClose = $(this).find('.icon-close');

        $iconHamburger.toggle();
        $iconClose.toggle();

        $(this).toggleClass('menu-open');

        // <<<< end xử lý nút hamburger và close

        
    });
    //~~~~~~~~~~~~~~~~~~~~~ END Thêm sự kiện xử lý toogle nút hamburger



});



function isMobile() {
    return window.innerWidth <= 991; // Xác định breakpoint cho mobile (767)
}