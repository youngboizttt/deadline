var customer = {
    createPotentialCustomer: function () {

      let error = false;
      $(".error-mess").addClass("hidden");

      var fullName = $("#cus_name").val();
      if (fullName == "") {
          $("#cus_name").addClass("error");
          error = true;
      }

      var phoneNumber = $("#phone_number").val();
      
      if (phoneNumber == "") {
          $("#phone_number").addClass("error");
          $("#phone-error").html("Vui lòng nhập số điện thoại");
          error = true;
      }

      if (phoneNumber != "" && phoneNumber.length < 10) {
          $("#phone_number").addClass("error");
          error = true;
      }

      if (customer.phonenumber(phoneNumber) == false) {
          $("#phone_number").addClass("error");
          error = true;
      }

      var email = $('#email').val();

      if (email != "") {
          if (!customer.isValidEmail(email)) {
              $("#email").addClass("error");
              error = true;
          }
      }


      if (error == false) {
        var url = $("#formPush").attr("action");
        var dataForm = $("#formPush").serializeArray();
        var fullUrl = window.location.href;
        var fullName = $("#cus_name").val();
        fullName = fullName.trim();
        fullName = fullName.replace(/\s+/g, " ");
        var phoneSMS = $("#phone_number").val();
        phoneSMS = phoneSMS.trim();
        
        console.log(localStorage.getItem("utm_source"));

        var campInfo = {
            CampSource: localStorage.getItem("utm_source") ?? 'eservice_tls_north',
            CampMedium: localStorage.getItem("utm_medium"),
            CampName: localStorage.getItem("utm_campaign"),
            CampTerm: localStorage.getItem("utm_term"),
            CampContent: localStorage.getItem("utm_content"),
            CampExtra: localStorage.getItem("extra_tracking"),
        };

    
        const customerInfo = {
            FullName: fullName ?? "",
            PhoneSMS: phoneSMS ?? "",
            Email: email ?? "",
            GuestId: localStorage.getItem("guestId") ?? "",
        };
        

        const locationInfo = {
            LocationId: 4,
            DistrictId: 0,
            WardId: 0,
            StreetId: 0,
        };


        customer.showLoading();

            var token = $("#g-recaptcha-response").val();
        

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
                    customer.hideLoading();
                    
                    localStorage.setItem("fullname", fullName);
                    localStorage.setItem("phonenumber", phoneSMS);
                    localStorage.setItem("email", email);
                    console.log(response);
                    if (response.error_code == '0') {
                        
                        if(response.data.Code ==1) {
                            message = "Bạn sẽ nhận được cuộc gọi lại từ nhân viên của chúng tôi trong vòng 30 phút.";
                            $("#messageSuccess").html(message);
                            $("#modal_success").modal("show");
                        }else{
                            $("#messageFail").html(response.message);
                            $("#modal_failed").modal("show");
                        }
                        
                    } else {
                        $("#messageFail").html(response.message);
                        $("#modal_failed").modal("show");
                    }
                    
                },
                error: function (data, textStatus, errorThrown) {
                    customer.hideLoading();
                    $("#messageFail").html("Đã có lỗi xảy ra. Vui lòng thử lại");
                    $("#modal_failed").modal("show");
                },
            });

         
        }
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
