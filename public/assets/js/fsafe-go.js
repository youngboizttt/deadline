var fsafeGo = {
    createPotentialCustomer: function () {

        var url = $("#formPush").attr("action");
        var dataForm = $("#formPush").serializeArray();
        var fullUrl = window.location.href;
        var fullName = $("#fullname").val();
        fullName = fullName.trim();
        fullName = fullName.replace(/\s+/g, " ");
        var phoneSMS = $("#phonenumber").val();
        phoneSMS = phoneSMS.trim();
    
        var locationId = $("#province").val();
        var email = $("#email").val();
        var campaignCode = $("#CampaignCode").val();
        var token = $("#g-recaptcha-response").val();
        fsafeGo.showLoading();

        const dataPush = {
            FullName: fullName ?? "",
            Phone: phoneSMS ?? "",
            Email: email ?? "",
            LocationId: locationId ?? "",
            Captcha: token,
            CampaignCode: campaignCode
        };

        
        $.ajax({
            url: url,
            type: "POST",
            data: dataPush,
            dataType: "json",

            success: function (response) {
                fsafeGo.hideLoading();
                
                localStorage.setItem("fullname", fullName);
                localStorage.setItem("phonenumber", phoneSMS);
                localStorage.setItem("email", email);
             
                if (response.error_code == 0) {

                    $('#fullname').val('');
                    $('#phonenumber').val('');
                    grecaptcha.reset();

                    $("#messageSuccess").html(response.message);
                    $("#modal_success").modal("show");
                    
                } else {
                    grecaptcha.reset();
                    $('#validate-button').prop('disabled', true);
                    $("#messageFail").html(response.message);
                    $("#modal_failed").modal("show");
                }
                
            },
            error: function (data, textStatus, errorThrown) {
                fsafeGo.hideLoading();
                grecaptcha.reset();
                $('#validate-button').prop('disabled', true);
                $("#messageFail").html("Đã có lỗi xảy ra. Vui lòng thử lại");
                $("#modal_failed").modal("show");
            },
        });

        
        
    },

    phonenumber: function (phone) {
        var pattern = new RegExp("^[0-9]{10}$");

        var isValid = pattern.test(phone);
        console.log(isValid);
        if (isValid) {
            return true;
        } else {
            return false;
        }
    },

    // Hàm kiểm tra email hợp lệ
    isValidEmail: function (email) {
        // Kiểm tra nếu email tồn tại và chứa ký tự @ với định dạng cơ bản
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        return emailRegex.test(email);
    },

    showLoading: function () {
        $('#loading').show();
    },

    hideLoading: function () {
        $('#loading').hide();
    }
};
