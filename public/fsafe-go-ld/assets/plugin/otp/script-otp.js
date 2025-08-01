$(document).ready(function () {
    // initOtpForm();

    // Thêm sự kiện kiểm tra khi nhập
    $(".otp-field.otp__digit").on("input", function () {
        toggleInputFilledClass($(this)); // Thêm class khi ô đã được nhập
        checkOtpFields(); // Kiểm tra trạng thái đầy đủ của các ô
    });

    // Kiểm tra trạng thái các ô khi vừa load trang
    checkOtpFields();

    
});

// Khởi tạo xử lý cho form OTP
function initOtpForm() {
    
    countdown_times();
    
    $(".btn-resend").prop("disabled", true).addClass("resend-disable");


    let otpFields = $(".form-otp .otp-field");
    let otpValueField = $(".form-otp .otp-value");

    // Xử lý khi nhập giá trị
    otpFields.on("input", function () {
        // console.log("Input value:", $(this).val()); // Log giá trị mỗi lần nhập
        sanitizeInput($(this)); // Chỉ cho phép số
        updateOtpValue(otpFields, otpValueField); // Cập nhật giá trị OTP hợp nhất
        clearErrorMessage(); // Xóa thông báo lỗi
    });

    // Xử lý khi nhấn phím
    otpFields.on("keyup", function (e) {
        handleKeyNavigation($(this), e); // Điều hướng con trỏ
        clearErrorMessage(); // Xóa thông báo lỗi
    });

    // Xử lý khi dán
    otpFields.on("paste", function (e) {
        handlePaste(e, otpFields);
    });

    $(".otp-field.otp__digit").on("input", function () {
        toggleInputFilledClass($(this)); // Thêm class khi ô đã được nhập
        checkOtpFields(); // Kiểm tra trạng thái đầy đủ của các ô
    });

    // Thêm sự kiện khi các ô OTP được focus
    $(".otp-field.otp__digit[autofocus]").attr("placeholder", ""); // Xóa placeholder khi đang focus //áp dụng cho textbox đầu tiên có autofocus

    $(".otp-field.otp__digit").on("focus", function () {
        $(this).attr("placeholder", ""); // Xóa placeholder khi focus
    });

    $(".otp-field.otp__digit").on("blur", function () {
        // khi text mất focus mà không có giá trị thì placeholder = "-"
        if ($(this).val().trim() === "") {
            $(this).attr("placeholder", "-");
        }
    });

    checkOtpFields();
}

// Xử lý nhập chỉ cho phép số
function sanitizeInput(inputField) {
    inputField.val(inputField.val().replace(/[^0-9]/g, ""));
}

// Cập nhật giá trị OTP hợp nhất vào input ẩn
function updateOtpValue(otpFields, otpValueField) {
    let otpValue = "";
    otpFields.each(function () {
        let fieldValue = $(this).val();
        if (fieldValue) otpValue += fieldValue;
    });
    otpValueField.val(otpValue);
}

// Điều hướng con trỏ giữa các ô OTP
function handleKeyNavigation(inputField, event) {
    let key = event.keyCode || event.charCode;

    if (key === 8 || key === 46 || key === 37 || key === 40) {
        // Backspace, Delete, Left Arrow, Down Arrow
        inputField.prev().focus();
    } else if (key === 38 || key === 39 || inputField.val() !== "") {
        // Right Arrow, Top Arrow, hoặc khi có giá trị
        inputField.next().focus();
    }
}

// Xử lý khi dán dữ liệu
function handlePaste(event, otpFields) {
    let pasteData = event.originalEvent.clipboardData.getData("text");
    let pasteDataSplitted = pasteData.split("");

    $.each(pasteDataSplitted, function (index, value) {
        otpFields.eq(index).val(value);
    });

    checkOtpFields(); // Kiểm tra sau khi dán dữ liệu
}

// Xóa thông báo lỗi
function clearErrorMessage() {
    $(".code_hieu_luc").html("");
}

// Thêm/xóa class khi input đã được nhập hoặc xóa
function toggleInputFilledClass(inputField) {
    if (inputField.val().trim() !== "") {
        inputField.addClass("input-filled");
    } else {
        inputField.removeClass("input-filled");
    }
}

// Kiểm tra xem tất cả các ô OTP đã được điền chưa
function checkOtpFields() {
    let allFilled = $(".otp-field.otp__digit").toArray().every((field) => {
        return $(field).val().trim() !== "";
    });
    // console.log("All filled:", allFilled);
    if (allFilled) {
        
        $("._btn_continue").prop("disabled", false).removeClass("continue-disable");
    } else {
        $("._btn_continue").prop("disabled", true).addClass("continue-disable");
    }
}

// Xử lý gửi lại mã OTP
function reSendOtp() {
    // Xóa nội dung trong các ô input
    $(".otp__digit").val("").removeClass("input-filled");

    // Focus vào ô nhập đầu tiên
    $(".otp__digit").first().focus();

    // Vô hiệu hóa nút tiếp tục
    $("._btn_continue").prop("disabled", true).addClass("continue-disable");

    // Gọi hàm đếm ngược 60 giây
    countdown_times();

    // Ngăn chặn hành động mặc định của nút
    return false;
}
let timer = null;
// Hàm đếm ngược 60 giây
function countdown_times() {

    $(".btn-resend").prop("disabled", true).addClass("resend-disable"); 
    
    if(timer){
        clearInterval(timer);
        timer = null;
        $(".btn-resend").prop("disabled", true).addClass("resend-disable");
    }

    console.log('timer 1', timer);
    // Lấy giá trị thời gian từ thuộc tính data-time-left
    const timeDisplay = $(".times"); // Phần tử hiển thị thời gian
    let timeLeft = parseInt(timeDisplay.data("time-left"), 10) || 60; // Mặc định là 60 nếu không tìm thấy

    function updateCountdown() {
        console.log('timer 1', timer);

        timeDisplay.text(`00:${timeLeft.toString().padStart(2, "0")}`); // Hiển thị thời gian
        
        if (timeLeft <= 0) {
            clearInterval(timer); // Dừng đếm ngược khi hết thời gian
            $(".btn-resend").prop("disabled", false).removeClass("resend-disable");
            timer = null;
        } else {
            timeLeft--; // Giảm thời gian
        }
    }

    console.log('timer 2', timer);
    // Tắt nút "Gửi lại" khi đếm ngược
    updateCountdown(); // Thực hiện đếm ngược ngay lập tức
    timer = setInterval(updateCountdown, 1000);

    console.log('timer 3', timer);
}