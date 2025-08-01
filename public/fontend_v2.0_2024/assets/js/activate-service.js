$(document).ready(function () {
    // Hàm tạo dropdown ---------------------------------------------------------
    function initializeCustomSelect(selectElement) {
        const $selectedOption = $(selectElement).find(".selected-option");
        const $dropdownOptions = $(selectElement).find(".dropdown-options");
        const $optionItems = $(selectElement).find(".option-item");

        // Toggle dropdown khi click vào phần đã chọn
        $selectedOption.click(function (e) {
            // Ngừng sự kiện click đi lên (tránh sự kiện click ngoài)
            e.stopPropagation();

            // Đóng tất cả dropdowns khác
            $(".dropdown-options").not($dropdownOptions).hide();

            // Toggle dropdown hiện tại
            $dropdownOptions.toggle();
        });

        // Xử lý khi chọn một option
        $optionItems.click(function () {
            const selectedText = $(this).data("value"); // Lấy giá trị của item
            // Cập nhật giá trị hiển thị ở trên
            $selectedOption.text(selectedText);

            // Bỏ class "selected" khỏi tất cả option
            $optionItems.removeClass("selected");
            // Thêm class "selected" cho option được chọn
            $(this).addClass("selected");

            // Ẩn dropdown
            $dropdownOptions.hide();
        });
    }

    // Khởi tạo tất cả các custom select trên trang
    $(".custom-select").each(function () {
        initializeCustomSelect(this);
    });

    // Ẩn dropdown khi click ra ngoài
    $(document).click(function (e) {
        if (!$(e.target).closest(".custom-select").length) {
            $(".dropdown-options").hide();
        }
    });


    $('#phone-fsafe-go').on('input', function () {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });

    // Tùy chọn: Ngăn không cho nhập ký tự ngay từ đầu
    $('#phone-fsafe-go').on('keypress', function (e) {
        // Chỉ cho phép nhập số (0-9)
        if (e.which < 48 || e.which > 57) {
            e.preventDefault(); // Ngăn không cho nhập
        }
    });


    $('#phone-fsafe-go').on('input', function () {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });

    // Tùy chọn: Ngăn không cho nhập ký tự ngay từ đầu
    $('#phone-fsafe-go').on('keypress', function (e) {
        // Chỉ cho phép nhập số (0-9)
        if (e.which < 48 || e.which > 57) {
            e.preventDefault(); // Ngăn không cho nhập
        }
    });


    $('#code_ultra_fast').on('input', function () {
        // Chỉ cho phép chữ cái, số và khoảng trắng
        alert('code_ultra_fast');
        $(this).val($(this).val().replace(/[^a-zA-Z0-9]/g, ''));
    });


    $('#code-fsafe-go').on('input', function () {
        
        // Chỉ cho phép chữ cái, số và khoảng trắng
        $(this).val($(this).val().replace(/[^a-zA-Z0-9]/g, ''));
    });

    // kết thúc Hàm tạo dropdown ---------------------------------------------------------


    
    // modal ---------------------------------------------------------
    // showModal()


    // xét nếu tồn tại id #col_mahd_khac thì thêm class col_sm_4
    const $activationForm = $(".activation-form");
    const $colMahdKhac = $activationForm.find("#col_mahd_khac");

    if ($colMahdKhac.length) {
        $(".col-sm-6.col-ma-hd-khac").addClass("col_sm_4");
        $(".col-sm-6.col-ma-hd").addClass("col_sm_4");
        $(".col-sm-6.col-ma-kichhoat").addClass("col_sm_4");
    } else {
        $(".col-sm-6.col-ma-hd-khac").removeClass("col_sm_4");
        $(".col-sm-6.col-ma-hd").removeClass("col_sm_4");
        $(".col-sm-6.col-ma-kichhoat").removeClass("col_sm_4");
    }

   

    // add scroll khi dropdown mã HĐ nhiều hơn 8 item
    // Tìm tất cả các <ul> có class .dropdown-options
    $('.dropdown-options').each(function () {
        const itemCount = $(this).find('.option-item').length;
        if (itemCount > 8) {
            $(this).addClass('dropdown_scroll');
        }
    });

});

// xử lý modal ---------------------------------------------------------
    function showModal(){
        $('#modal_error').modal('show');
    };
// kết thúc xử lý modal ---------------------------------------------------------

function initCol4(){
    const $activationForm = $(".activation-form");
    const $colMahdKhac = $activationForm.find("#order-service");

    if ($colMahdKhac.length) {
        $(".col-sm-6.col-ma-hd-khac").addClass("col_sm_4");
        $(".col-sm-6.col-ma-hd").addClass("col_sm_4");
        $(".col-sm-6.col-ma-kichhoat").addClass("col_sm_4");
    } else {
        $(".col-sm-6.col-ma-hd-khac").removeClass("col_sm_4");
        $(".col-sm-6.col-ma-hd").removeClass("col_sm_4");
        $(".col-sm-6.col-ma-kichhoat").removeClass("col_sm_4");
    }


}

function initCol6(){
    const $activationForm = $(".activation-form");
    const $colMahdKhac = $activationForm.find("#order-service");

    $(".col-sm-6.col-ma-hd-khac").removeClass("col_sm_4");
    $(".col-sm-6.col-ma-hd").removeClass("col_sm_4");
    $(".col-sm-6.col-ma-kichhoat").removeClass("col_sm_4");

}