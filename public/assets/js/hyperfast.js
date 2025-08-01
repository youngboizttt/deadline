var hyperFast = {
    registerTrial: function () {

      let error = false;
      $(".error-mess").addClass("hidden");

      var fullName = $("#fullname").val();
      if (fullName == "") {
          $("#fullname").addClass("error");
          $("#fullname_error").html("Vui lòng nhập họ và tên");
          error = true;
      }

      var phoneNumber = $("#phone").val();
      
      if (phoneNumber == "") {
          $("#phone").addClass("error");
          $("#phone_error").html("Vui lòng nhập số điện thoại");
          error = true;
      } else if (phoneNumber.length < 10) {
          $("#phone").addClass("error");
          $("#phone_error").html("Số điện thoại không đúng định dạng");
          error = true;
      } else if (hyperFast.phonenumber(phoneNumber) == false) {
        
          $("#phone").addClass("error");
          $("#phone_error").html("Số điện thoại không đúng định dạng");
          error = true;
      }

      var email = $('#email').val();

      if (email == "") {
          $("#email").addClass("error");
          $("#email_error").html("Vui lòng nhập email");
          error = true;
      }

      if (email != "") {
          if (!hyperFast.isValidEmail(email)) {
              $("#email").addClass("error");
              $("#email_error").html("Email không đúng định dạng");
              error = true;
          }
      }

      var token = $("#g-recaptcha-response").val();

      if (token == "") {
          $("#recaptcha").addClass("error");
          $("#recaptcha-error").html("Vui lòng tick vào check box");
          $("#recaptcha-error").css("display", "block");
          error = true;
      }

      if (error == false) {
        var url = $("#signUpForTrial_hyperFast1").attr("action");
        var dataForm = $("#signUpForTrial_hyperFast1").serializeArray();
        var fullUrl = window.location.href;
        var fullName = $("#fullname").val();
        fullName = fullName.trim();
        fullName = fullName.replace(/\s+/g, " ");
        var phoneSMS = $("#phone").val();
        phoneSMS = phoneSMS.trim();


        var campInfo = {
            CampSource: localStorage.getItem("utm_source") ?? 'hyperfast',
            CampMedium: localStorage.getItem("utm_medium"),
            CampName: localStorage.getItem("utm_campaign"),
            CampTerm: localStorage.getItem("utm_term"),
            CampContent: localStorage.getItem("utm_content"),
            CampExtra: localStorage.getItem("extra_tracking"),
        };

    
        const customerInfo = {
            FullName: fullName ?? "",
            PhoneNumber: phoneSMS ?? "",
            Email: email ?? "",
            GuestId: localStorage.getItem("guestId") ?? "",
        };
        

        const locationInfo = {
            LocationId: 4,
            DistrictId: 0,
            WardId: 0,
            StreetId: 0,
        };


        hyperFast.showLoading();

            var token = $("#g-recaptcha-response").val();
        
            hyperFast.saveToSheet(fullName, phoneSMS, email); // Gọi thử

            const dataPush = {
                ServiceInfo: "",
                CustomerInfo: customerInfo,
                CampInfo: campInfo,
                LocationInfo: locationInfo,
                captcha: token
            };

            $.ajax({
                url: url,
                type: "POST",
                data: dataPush,
                dataType: "json",

                success: function (response) {
                    hyperFast.hideLoading();
                    
                    // localStorage.setItem("fullname", fullName);
                    // localStorage.setItem("phonenumber", phoneSMS);
                    // localStorage.setItem("email", email);

                    console.log(response.error_code);

           
                    if (response.error_code == 0) {
                        
                        $("#messageSuccess").html(response.message);
                        $("#modal_success").modal("show");

                        // if(response.data.Code == 1) {
                        //     var title = "Gửi yêu cầu hỗ trợ thành công";
                        //     message = "Cảm ơn bạn đã phản hồi. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất, vui lòng để ý điện thoại/email để nhận hỗ trợ.";
                        //     $("#messageSuccess").html(message);
                        //     $("#modal_success").modal("show");
                        // }else{


                        //     $("#messageFail").html(response.message);
                        //     $("#modal_failed").modal("show");
                        // }
                        
                    } else {
                        $("#messageFail").html(response.message);
                        $("#modal_failed").modal("show");
                    }
                    
                },
                error: function (data, textStatus, errorThrown) {
                    hyperFast.hideLoading();

                    $("#messageFail").html("Đã có lỗi xảy ra. Vui lòng thử lại");
                    $("#modal_failed").modal("show");
                },
            });

         
        }
    },

    phonenumber: function (phone) {

        // var pattern = /^0(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5|8|9]|9[0-9])[0-9]{7}$/;

        // var isValid = pattern.test(phone);
        // console.log(isValid);
        // return isValid;

        const cleaned = phone.replace(/[^0-9]/g, '');

        // Regex kiểm tra số điện thoại Việt Nam hợp lệ (10 số, đầu số hợp lệ)
        const regex = /^(03[2-9]|05[6|8|9]|07[0|6-9]|08[1-6|8|9]|09[0-9])\d{7}$/;

        return regex.test(cleaned);

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
    },

    saveToSheet: function (name, phone, email) {
        var sheetId = 'AKfycbzIzegiLiG3ZJ7P100RNMYwfIH645TiAgnfnA32m3E9TGuuhfwcZglPtImyv99q9rNmBQ';
            
        const webAppUrl = `https://script.google.com/macros/s/${sheetId}/exec`;



        $.ajax({
            url: webAppUrl,
            dataType: 'jsonp',        // kiểu gọi JSONP
            jsonpCallback: 'hyperFast.handleResponse', // tên callback phải trùng với bên server
            data: {
                callback: 'handleResponse',
                name: name,
                phone: phone,
                email: email
            },
            success: function(resp) {
                if (resp.status === 'success') {
                    console.log('Gửi thành công!');
                } else {
                    console.log('Gửi thất bại, hãy thử lại.');
                }
            },
            error: function(xhr, status, err) {
                
                console.log('Lỗi khi gửi dữ liệu.');
            }
        });
    },

    handleResponse: function (response) {
        console.log('JSONP callback:', response);
    },
    
};
