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

    // kết thúc Hàm tạo dropdown ---------------------------------------------------------


    
    // modal ---------------------------------------------------------
    // showModal()

});

// xử lý modal ---------------------------------------------------------
    function showModal(){
        $('#modal_error').modal('show');
    };
// kết thúc xử lý modal ---------------------------------------------------------


// new ----------------------------------------



// xong thì xóa cái dưới này đi

$(document).ready(function () {

    $(".select2").select2({ placeholder: "Chọn dịch vụ", allowClear: true });

    $("#service").on("change", handleServiceChange);
    $("#contractUltrafast").on("change", handleUltrafastContractChange);
    $("#contractFsafe").on("change", handleFsafeContractChange);
    $("#ultrafastOther, #fsafeOther, #ultrafastActivationCode, #fsafeActivationCode").on("input", validateFormFields);

    function handleServiceChange() {
        resetFields();
        const service = $("#service").val();

        if (service === "ultrafast") {
            $("#contractUltrafastSection").slideDown();
        } else if (service === "fsafe") {
            $("#contractFsafeSection").slideDown();
        }
        validateFormFields();
    }

    function handleUltrafastContractChange() {
        const value = $("#contractUltrafast").val();

        if (value) {
            $("#ultrafastActivationCodeSection").slideDown();
        } else {
            $("#ultrafastActivationCodeSection").slideUp();
            $("#ultrafastActivationCode").val("");
        }

        if (value === "other") {
            $("#ultrafastOtherSection").slideDown();
        } else {
            $("#ultrafastOtherSection").slideUp();
            $("#ultrafastOther").val("");
        }
        validateFormFields();
    }

    function handleFsafeContractChange() {
        const value = $("#contractFsafe").val();

        if (value) {
            $("#fsafeActivationCodeSection").slideDown();
        } else {
            $("#fsafeActivationCodeSection").slideUp();
            $("#fsafeActivationCode").val("");
        }

        if (value === "other") {
            $("#fsafeOtherSection").slideDown();
        } else {
            $("#fsafeOtherSection").slideUp();
            $("#fsafeOther").val("");
        }
        validateFormFields();
    }

    function validateFormFields() {
        const service = $("#service").val();
        const ultrafastActivation = $("#ultrafastActivationCode").val().trim();
        const fsafeActivation = $("#fsafeActivationCode").val().trim();
        const ultrafastOther = $("#ultrafastOther").val().trim();
        const fsafeOther = $("#fsafeOther").val().trim();

        const isValid =
            (service === "ultrafast" && ultrafastActivation && ($("#contractUltrafast").val() !== "other" || ultrafastOther)) ||
            (service === "fsafe" && fsafeActivation && ($("#contractFsafe").val() !== "other" || fsafeOther));

        $("#submitBtn").prop("disabled", !isValid);
    }

    function resetFields() {
        $("#contractUltrafastSection, #contractFsafeSection, #ultrafastActivationCodeSection, #fsafeActivationCodeSection, #ultrafastOtherSection, #fsafeOtherSection").slideUp();
        $("#contractUltrafast, #contractFsafe, #ultrafastOther, #fsafeOther, #ultrafastActivationCode, #fsafeActivationCode").val("");
        $("#submitBtn").prop("disabled", true);
    }
});