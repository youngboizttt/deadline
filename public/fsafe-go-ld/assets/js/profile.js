/**
 * Xử lý popup chọn hợp đồng khi load trang
 * @author HaoNMN
 * @since Nov 2024
 */
$(document).ready(function ($) {
    // mở popup sau khi load trang
    if (!localStorage.getItem('modalShown')) {
        window.onload = function () {
            $(".fid-popup").delay(1000).addClass('is-visible');
        }
        // Đặt cờ trong localStorage để không mở modal nữa trong các lần truy cập tiếp theo
        localStorage.setItem('modalShown', 'true');
    }

    //open popup
    $('.fid-popup-trigger').on('click', function (event) {
        event.preventDefault();
        $('.fid-popup').addClass('is-visible');
    });

    $('#openContractList').on('click', function () {
        $('.fid-popup').addClass('is-visible');
    });

    $('#openContractListMobi').on('click', function () {
        
        $('.fid-popup').addClass('is-visible');
    });

    //btn close popup
    $('.fid-popup').on('click', function (event) {
        if ($(event.target).is('.fid-popup-close') || $(event.target).is('.fid-popup')) {
            event.preventDefault();
            $(this).removeClass('is-visible');
        }
    });

    // click btn back
    $('.fid-popup').on('click', function (event) {
        if ($(event.target).is('.fid-btn-back') || $(event.target).is('.fid-popup')) {
            event.preventDefault();
            $(this).removeClass('is-visible');
        }
    });

    //close popup when clicking the esc keyboard button
    $(document).keyup(function (event) {
        if (event.which == '27') {
            $('.fid-popup').removeClass('is-visible');
        }
    });

    //chon ma hop dong
    $('.user-child').on('click', function () {
        $('.user-parent').removeClass('_js_active');
        $(this).parent().addClass('_js_active');

        var contract       = $(this).parent().find('.radio-user').data('contract');
        var contractId     = $(this).parent().find('.radio-user').data('contract-id');
        var contractAdress = $(this).parent().find('.radio-user').data('address');
        var contractName   = $(this).parent().find('.radio-user').data('name');
        $('#profile_contract').val(contract);
        $('#profile_contract_id').val(contractId);
        $('#profile_contract_address').val(contractAdress);
        $('#profile_contract_name').val(contractName);
    });

});

/**
 * Hàm gọi API lấy dữ liệu các tab tương ứng
 * @author HaoNMN
 * @since Oct 2024
 */
function fetchData(url, self) {
    console.log(url);
    // Xóa class 'active' khỏi tất cả các thẻ li
    $('.list-menu-user li a').removeClass('active');

    // Thêm class 'active' cho thẻ li vừa click
    $('#' + self).addClass('active');
    // $('#form-content').html('<div style="height: 600px;"><div class="parent-load"><div class="circle-loading"></div></div></div>'); // bỏ loading cũ
    showLoading();


    $.ajax({
        url: url,
        method: 'GET', // Hoặc 'POST' tùy thuộc vào API của bạn
        success: function (response) {

            // Scroll the list-menu-user div to the active menu item
            var windowWidth = $(window).width();
            if (windowWidth <= 767) {
                var activeItem = $('#' + self);
                var container = $('.list-menu-user');
                console.log(activeItem);
                setTimeout(() => {

                    // Xóa class 'active' khỏi tất cả các thẻ li
                    $('.list-menu-user li a').removeClass('active');

                    // Thêm class 'active' cho thẻ li vừa click
                    $(activeItem).addClass('active');
                    container.animate({
                        scrollLeft: activeItem.offset().left - container.offset().left + container.scrollLeft()
                    }, 300); // Duration in milliseconds
                }, 600);
            }

            // Cập nhật nội dung vào id="block-content"
            $('#form-content').html(response);
            hideLoading();

            $('.input-group.date').datepicker({
                format: 'mm/dd/yyyy',
                todayHighlight: false,
                autoclose: true
            });

            selectService('#selectService');
            selectContract('#selectContract');

            $('#code_ultra_fast').on('input', function () {
                // Chỉ cho phép chữ cái, số và khoảng trắng
                $(this).val($(this).val().replace(/[^a-zA-Z0-9]/g, ''));
            });

            $('#code-fsafe-go').on('input', function () {
                // Chỉ cho phép chữ cái, số và khoảng trắng
                $(this).val($(this).val().replace(/[^a-zA-Z0-9]/g, ''));
            });

            $('#contract_active_ultrafast').on('input', function () {
                // Chỉ cho phép chữ cái, số và khoảng trắng
                $(this).val($(this).val().replace(/[^a-zA-Z0-9]/g, ''));
            });

            $('.dropdown-options').each(function () {
                const itemCount = $(this).find('.option-item').length;
                console.log(itemCount);
                if (itemCount > 8) {
                    $(this).addClass('dropdown_scroll');
                }
            });

            initCol6();
            
        },
        error: function (xhr, status, error) {
            var err_html = "<div class='col-right'>";
            err_html += "<div class='col-right'>";
            err_html +="<div class='user-nodata'>";
            err_html +="<div>";
            // err_html +="<img src='https://fpt.vn/fontend_v2.0_2024/assets/images/empty-data.svg' alt='Có lỗi xảy ra'>";
            err_html +="<img src='../../fontend_v2.0_2024/assets/images/empty-data.svg' alt='Có lỗi xảy ra'>";
            err_html +="<p>Có lỗi xảy ra</p>";
            err_html +="</div>";
            err_html +="</div>";
            err_html +="</div>";
            
            console.error('AJAX Error:', error);
            $('#form-content').html(err_html);
            hideLoading();
        }
    });
}

/**
 * Hàm filter lịch sử thanh toán
 * @author HaoNMN
 * @since Nov 2024
 */
function filterPaymentHistory(url) {
    console.log($('#from-date').val());
    var filters = {
        fromDate: $('#from-date').val(),
        toDate: $('#to-date').val(),
        perPage: $('#select-page').val(),
        order: $('#select-fromto').val()
    }

    $.ajax({
        url: url,
        method: 'GET',
        data: filters,
        contentType: 'application/json; charset=utf-8',
        success: function (response) {
            // Cập nhật nội dung vào id="block-content"
            $('#form-content').html(response);

            $('.input-group.date').datepicker({
                format: 'dd/mm/yyyy',
                todayHighlight: false,
                autoclose: true
            });
        },
        error: function (xhr, status, error) {
            console.error('AJAX Error:', error);
            $('#form-content').html('<p>Có lỗi xảy ra, vui lòng quay lại sau...</p>');
        }
    });
}

/**
 * Xác nhận chọn hợp đồng để hiển thị thông tin
 */
function chooseContract(url, callback) {
    var contract        = $('#profile_contract').val();
    var contractId      = $('#profile_contract_id').val();
    var contractAddress = $('#profile_contract_address').val();
    var contractName    = $('#profile_contract_name').val();
    
    // Gọi route để đẩy mã hợp đồng lên session
    $.ajax({
        url: url,
        method: 'POST',
        data: {
            _token: $('meta[name="csrf-token"]').attr('content'),
            contract: contract,
            contract_id: contractId,
            contract_address: contractAddress,
            contract_name: contractName
        },
        success: function (response) {
            if (response.status == 'success') {
                // Nếu thành công thì load lại section thông tin hợp đồng
                $('.fid-popup').removeClass('is-visible');
                window.location.reload();
            }
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
}



