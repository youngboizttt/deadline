
$(document).ready(function () {

    $(".form-otp *:input[type!=hidden]:first").on("focus", function () {
        let otp_fields = $(".form-otp .otp-field"),
            otp_value_field = $(".form-otp .otp-value");
        otp_fields
            .on("input", function (e) {
                $(this).val(
                    $(this).val().replace(/[^0-9]/g, "")
                );

                console.log('input');
                $('.code_hieu_luc').html('');
                let opt_value = "";
                otp_fields.each(function () {
                    let field_value = $(this).val();
                    if (field_value != "") opt_value += field_value;
                });
                otp_value_field.val(opt_value);
            })
            .on("keyup", function (e) {
                console.log(e);
                $('.code_hieu_luc').html('');

                let key = e.keyCode || e.charCode;
                console.log(key);
                if (key == 8 || key == 46 || key == 37 || key == 40) {

                    // Backspace or Delete or Left Arrow or Down Arrow
                    $(this).prev().focus();
                } else if (key == 38 || key == 39 || $(this).val() != "") {
                    // Right Arrow or Top Arrow or Value not empty
                    $(this).next().focus();
                }
            })
            .on("paste", function (e) {
                let paste_data = e.originalEvent.clipboardData.getData("text");
                let paste_data_splitted = paste_data.split("");
                $.each(paste_data_splitted, function (index, value) {
                    otp_fields.eq(index).val(value);
                });
            });
    });


    // khi trường input đã được nhập thì add class input-filled

    $(".otp-field.otp__digit").on("input", function () {
        if ($(this).val().trim() !== "") {
            $(this).addClass("input-filled"); 
        } else {
            $(this).removeClass("input-filled"); 
        }
    });

    countdown_times()
    
});

    // ---------------
    function reSendOtp() {
        // Xóa nội dung trong các ô input
        $(".otp__digit").val("").removeClass("input-filled");

        // Focus vào ô nhập đầu tiên
        $(".otp__digit").first().focus();

        // Gọi hàm đếm ngược 15 giây
        countdown_times();
    
        // Ngăn chặn hành động mặc định của nút
        return false;
    }
    
    function countdown_times() {
        let timeLeft = 15; // Đếm ngược từ 15 giây
        const $timeDisplay = $(".times"); // Phần tử hiển thị thời gian
    
        // Hàm thực hiện đếm ngược
        function updateCountdown() {
            if (timeLeft <= 0) {
                clearInterval(timer); // Dừng đếm ngược khi hết thời gian
                $(".btn-resend").prop("disabled", false).removeClass("resend-disable"); // Bật lại nút "Gửi lại"
            } else {
                $timeDisplay.text(`00:${timeLeft.toString().padStart(2, "0")}`); // Hiển thị thời gian
                timeLeft--;
            }
        }
    
        // Tắt nút "Gửi lại" khi đếm ngược
        $(".btn-resend").prop("disabled", true).addClass("resend-disable");
    
        // Thực hiện đếm ngược ngay lập tức và sau mỗi giây
        updateCountdown();
        const timer = setInterval(updateCountdown, 1000);
    }


// Xử lý field digit




