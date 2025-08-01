var activeCode = {
    getOtp: function() {

        showLoading();

        var phone = $('#phone-fsafe-go').val();
        var code = $('#code-fsafe-go').val();
        if (!isValidPhoneNumber(phone) && phone.length < 10) {
            $('#error').html("Số điện thoại không hợp lệ.");
            $('#modal_error').modal('show');
            hideLoading();
            return;
        }
        
        var token = $("#g-recaptcha-response-1").val();
        var data = {
            phone: phone,
            code: code,
            captcha : token
        }

        $('#phone-otp').html(phone);

        $.ajax({
            url: '/api/v2/fsafe-go/get-otp',
            type: 'POST',
            data: data,
            success: function(response) {
                var result = JSON.parse(response);

                if (result.error_code == 0) {
                    hideLoading();
                    $('#modal_success_fsafe_go').modal('hide');
                    step2();
                    initOtpForm();
                    
                    // // Bo 2 khi up production
                    // if (response.data.OTPState == 1) {
                    //     $('#modal_success_fsafe_go').modal('hide');
                    //     step2();
                    //     initOtpForm();
                    // } else {
                    //     $('#modal_success_fsafe_go').modal('hide');
                    //     $('#error').html(response.message ?? 'Đã có lỗi xảy ra, vui lòng thử lại sau.');
                    //     $('#modal_error').modal('show');
                    // }
                } else {
                    $('.error_message').html(result.message ?? 'Đã có lỗi xảy ra, vui lòng thử lại sau.');
                    
                    $('#modal_error').modal('show');
                }
            },
            error: function(err) {

                console.log(err);
            }
        });
    },

    verifyOtp: function() {
        var phone = $('#phone-fsafe-go').val();
        var otp = $('#otp').val();
        var code = $('#code-fsafe-go').val();
        showLoading();

        if (otp.length != 6) {
            $('#error').html("Mã OTP không hợp lệ.");
            $('#modal_error').modal('show');

            return;
        }

        if (!isValidPhoneNumber(phone) && phone.length < 10) {
            $('#error').html("Số điện thoại không hợp lệ.");
            $('#modal_error').modal('show');
            return;
        }
        if (containsWhitespaceOrSpecialCharacters(code)) {
            $('#error').html("Mã kích hoạt không hợp lệ.");
            $('#modal_error').modal('show');
            return;
        }
        var token = $("#g-recaptcha-response-1").val();

        var data = {
            phone: phone,
            otp: otp,
            code: code,
            captcha: token,
        }

        $('#phone-otp').html(phone);

        $.ajax({
            url: '/api/v2/fsafe-go/check-otp',
            type: 'POST',
            data: data,
            success: function(response) {
                hideLoading();

                var result = JSON.parse(response);

                if (result.error_code == 0) {

                    if( result.data.Code && response.data.Code == 1){
                        // Check OTP thành công, đi tới bước tiếp theo
                        step3FsafeGo();
                        return;
                    }
                    
                    // Check trường họp OK số 2: Bo 2 khi up production
                    if(result.data.OTPState && result.data.OTPState == 1){
                        step3FsafeGo();
                        return;
                    }

                    // Xuống dưới đây là sai rồi nè
                    // Show thông báo lỗi
                    $('#error').html(result.data.Desc);
                    $('#modal_error').modal('show');
                } else {

                    $('.error_message').html(result.message);
                    $('#modal_error').modal('show');
                }
            },
            error: function(err) {

                console.log(err);
            }
        });

          
        
    },

    checkCode: function() {

        var phone = $('#phone-fsafe-go').val();
        var code = $('#code-fsafe-go').val();
        var email = $('#email').val();

        showLoading();

        if (!isValidPhoneNumber(phone) || phone.length < 10) {
            $('#error').html("Số điện thoại không hợp lệ.");
            $('#modal_error').modal('show');
            hideLoading();
            return;
        }
        if (containsWhitespaceOrSpecialCharacters(code)) {
            $('#error').html("Mã kích hoạt không hợp lệ.");
            $('#modal_error').modal('show');
            hideLoading();
            return;
        }

        if (email != "") {
            
            if (!isValidEmail(email)) {
                $('#error').html("Email không đúng định dạng.");
                $('#modal_error').modal('show');
                hideLoading();
                return;
            }
        }



        var token = $("#g-recaptcha-response-1").val();

        var data = {
            phone: phone,
            code: code,
            email: email,
            captcha: token
        }

        $.ajax({
            url: '/api/v2/fsafe-go/check-code',
            type: 'POST',
            data: data,
            success: function(response) {
                hideLoading();
           

                var result = response;
                
                if (result.error_code == 0) {
                    // Bo 2 khi up production
                    if (result.data.Code == 0) {

                        activeCode.getOtp();

                    } else if (result.data.Code == 2) {
                        $('#error_success_fsafe_go').html(result.message);
                        $('#btn_modal_success_fsafe_go').html(result.data.MessageInfo.Title);

                        $('#modal_success_fsafe_go').modal('show');

                    } else {

                        $('.error_message').html(result.message);
                        $('#modal_error').modal('show');
                    }
                } else {
                    $('.error_message').html(result.message);
                    $('#modal_error').modal('show');
                }
            },
            error: function(err) {

                $('#modal_timeout').modal('show');
                console.log(err);
            }
        });

      

    },

    /**
     * Gọi API active dịch vụ ultrafast
     * @author HaoNMN
     * @since Dec, 2024
     */
    activeUltraFast: function() {
        var contractUf = $('#contract_active_ultrafast').val();
        var codeUf = $('#code_ultra_fast').val();

        $('#confirm_active_uf_popup').modal('hide');

        showLoading();

        var token = $("#g-recaptcha-response").val();

        var data = {
            contract: contractUf,
            code: codeUf,
            captcha: token
        }


        $.ajax({
            url: '/api/v2/ultrafast/active-code',
            type: 'POST',
            data: data,
            success: function(response) {

                hideLoading();
                
                var result = response;
                
                if (result.error_code == 0) {
                    // thêm <br/>. vào mỗi dấu chấm
                    var text  = result.message;

                    const datePattern = /\b(\d{2}\/\d{2}\/\d{4})\b/g;

                    text.replace(datePattern, '<b>$1</b>');

                    text.replace(/hợp đồng (\S+)/, 'hợp đồng <b>$1</b>');

                    var message = text.replace(/\./g, '.<br/>');

                    $('#finish_active_uf_msg').html(message);
                    $('#step1').hide();
                    $('#step2').hide();
                    $('#step3-ultra-fast').show();
                } else {
                    console.log(result.message);
                    
                    $('#uf_err_message').html(result.message);
                    $('#error_active_uf_popup').modal('show');
                }
            },
            error: function(err) {
                hideLoading();
                console.log(err);
            }
        });
        

    }
}


function checkService(selectElement) {

    const $selectedOption = $(selectElement).find(".selected-option");
    
}

function selectContract(selectElement) {
    const $selectedOption = $(selectElement).find(".selected-option");
    const $dropdownOptions = $(selectElement).find(".dropdown-options");
    const $optionItems = $(selectElement).find(".option-item");

    // Toggle dropdown khi click vào phần đã chọn
    $selectedOption.click(function(e) {
        // Ngừng sự kiện click đi lên (tránh sự kiện click ngoài)
        e.stopPropagation();

        // Đóng tất cả dropdowns khác
        $(".dropdown-options").not($dropdownOptions).hide();

        // Toggle dropdown hiện tại
        $dropdownOptions.toggle();
    });

    // Xử lý khi chọn một option
    $optionItems.click(function() {
        const selectedText = $(this).data("value"); // Lấy giá trị của item
        let id = $(this).data("id");

       

        if (id == "other_contract") {
            $('#contract_active_ultrafast').val('');
            $('#order-service').show();
            console.log('initCol4');
            initCol4();

        } else {
            $('#contract_active_ultrafast').val(selectedText);
            $('#order-service').hide();
            console.log('initCol6');
            initCol6();
        }

        // Cập nhật giá trị hiển thị ở trên
        $selectedOption.text(selectedText);

        // Bỏ class "selected" khỏi tất cả option
        $optionItems.removeClass("selected");
        // Thêm class "selected" cho option được chọn
        $(this).addClass("selected");


        checkFormUltraFast();

        // Ẩn dropdown
        $dropdownOptions.hide();
    });
}

function selectService(selectElement) {
    const $selectedOption = $(selectElement).find(".selected-option");
    const $dropdownOptions = $(selectElement).find(".dropdown-options");
    const $optionItems = $(selectElement).find(".option-item");

    // Toggle dropdown khi click vào phần đã chọn
    $selectedOption.click(function(e) {
        // Ngừng sự kiện click đi lên (tránh sự kiện click ngoài)
        e.stopPropagation();

        // Đóng tất cả dropdowns khác
        $(".dropdown-options").not($dropdownOptions).hide();

        // Toggle dropdown hiện tại
        $dropdownOptions.toggle();
    });

    // Xử lý khi chọn một option
    $optionItems.click(function() {
        const selectedText = $(this).data("value"); // Lấy giá trị của item
        let id = $(this).data("id");

        $('#checkService').hide();

        if (id == "Ultrafast") {
            $('#fsafe-go').hide();
            $('#ultra-fast').show();
        } else {
            $('#fsafe-go').show();
            $('#ultra-fast').hide();
        }

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

function checkFormUltraFast() {
    let contract_active_ultrafast = $('#contract_active_ultrafast').val();

    let code = $('#code_ultra_fast').val();

    $('#code_ultra_fast').on('input', function() {
        // Chỉ cho phép chữ cái, số và khoảng trắng
        $(this).val($(this).val().replace(/[^a-zA-Z0-9]/g, ''));
    });


    if (contract_active_ultrafast != '' && code != '') {
        $('#active-ultra-fast').removeAttr('disabled');
        return true;
    } else {
        console.log('disabled');
        $('#active-ultra-fast').attr('disabled', 'disabled');
    }
    
    return true;
}

function checkFormFsafeGo() {
    let phone = $('#phone-fsafe-go').val();
    let code = $('#code-fsafe-go').val();
    let email = $('#email').val();


    $('#phone-fsafe-go').on('input', function() {
        $(this).val($(this).val().replace(/[^0-9]/g, ''));
    });

    // Tùy chọn: Ngăn không cho nhập ký tự ngay từ đầu
    $('#phone-fsafe-go').on('keypress', function(e) {
        // Chỉ cho phép nhập số (0-9)
        if (e.which < 48 || e.which > 57) {
            e.preventDefault(); // Ngăn không cho nhập
        }
    });

    $('#code-fsafe-go').on('input', function() {
        // Chỉ cho phép chữ cái, số và khoảng trắng
        $(this).val($(this).val().replace(/[^a-zA-Z0-9]/g, ''));
    });



    if (phone != '' && code != '') {
        $('#active-fsafe-go').removeAttr('disabled');
        return true;
    } else {
        console.log('disabled');
        $('#active-fsafe-go').attr('disabled', 'disabled');
    }

    return true;
}

function step2() {
    $('#step1').hide();
    $('#step2').show();
    $('#step3').hide();
}

function step3() {
    $('#step1').hide();
    $('#step2').hide();
    $('#step3').show();
}

function step3FsafeGo() {
    $('#step1').hide();
    $('#step2').hide();
    $('#step3-fsafe-go').show();
}

/**
 * Hàm xử lý khi click kích hoạt ultrafast
 */
function activeUfCode() {
    var contractUf = $('#contract_active_ultrafast').val();
    $('#contract_active_uf_text').html(contractUf);
    $('#confirm_active_uf_popup').modal('show');
}


function isValidPhoneNumber(phone) {
    // Kiểm tra: 10 ký tự, chỉ chứa số, bắt đầu bằng số từ 0 đến 9
    // Đầu số hợp lệ của Việt Nam
    const phoneRegex = /^(03|05|07|08|09)\d{8}$/;
    return phoneRegex.test(phone);
}


function containsWhitespaceOrSpecialCharacters(str) {
    // - `\s`: Kiểm tra khoảng trắng (space, tab, newline, v.v.)
    // - `\W`: Kiểm tra ký tự không phải chữ và số (ngoại trừ dấu gạch dưới _)
    var regex = /[\s\W]/;
    return regex.test(str);
}

// Hàm kiểm tra email hợp lệ
function isValidEmail(email) {
    // Kiểm tra nếu email tồn tại và chứa ký tự @ với định dạng cơ bản
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showLoading() {
    $('#loading').show();
}

function hideLoading() {
    $('#loading').hide();
}