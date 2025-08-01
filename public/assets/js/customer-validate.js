$(document).ready(function() {
    $("#validate-button").on("click", function() {
        let isValid = true;

        $(".text-error").text("");
        $("#phone_number").removeClass("border_red");
        $("#cus_name").removeClass("border_red");

        if ($("#cus_name").val().trim() === "") {
            isValid = false;
            $("#name-error").text("Vui lòng nhập họ và tên");
            $("#cus_name").addClass("border_red");

        }else{
            // Biểu thức regex để phát hiện ký tự đặc biệt
            const specialCharsRegex = /[!@#$%^&*(),.?":{}|<>_\[\]\/\\;~`+=₫€¥•]/;
            var fullName = $("#cus_name").val().trim();
            
            if (fullName.toLowerCase().includes("test")) {
                isValid = false;
                $("#name-error").text("Tên có chứa ký tự không hợp lệ. Quý khách vui lòng nhập lại!");
                $("#cus_name").addClass("border_red");
            }

            // Kiểm tra có ký tự đặc biệt hay không
            if (specialCharsRegex.test(fullName)) {
                
                isValid = false;
                $("#name-error").text("Họ và tên không hợp lệ");
                $("#cus_name").addClass("border_red");
            }
        }

        if ($("#phone_number").val().trim() === "") {
            isValid = false;
            $("#phone-error").text("Vui lòng nhập số điện thoại");
            $("#phone_number").addClass("border_red");

            if ($("#phone_number").val() != "" && $("#phone_number").val().length < 10) {
                isValid = false;
                $("#phone-error").text("Số điện thoại không hợp lệ");
                $("#phone_number").addClass("border_red");
            }

        }else{
            var phone = $("#phone_number").val();
            if (phonenumber(phone) == false) {
                isValid = false;
                $("#phone-error").text("Số điện thoại không hợp lệ");
                $("#phone_number").addClass("border_red");
            }
        }


        var email = $('#email').val();

        if (email != "") {
            if (!customerNew.isValidEmail(email)) {

                isValid = false;
                $("#email-error").text("Email không hợp lệ");
                $("#email").addClass("border_red");

            }
        }


        var captcha = $('#g-recaptcha-response').val();

        if (captcha == "") {
            
            isValid = false;
            $("#g-recaptcha-error").text("Vui lòng nhập captcha");
            $("#g-recaptcha").addClass("border_red");

        }


        if (isValid) {
            console.log("Form hợp lệ");
            $("#phone_number").removeClass("border_red");
            $("#cus_name").removeClass("border_red");
            $("#email").removeClass("border_red");
            customerNew.createPotentialCustomer()

        }
    });
});

function showModal() {
    $('#modal_register_success').modal('show');
};



function phonenumber(phone) {
    // Regular expression for Vietnamese phone numbers
    var pattern = new RegExp("^((03|05|07|08|09)[0-9]{8})$");

    // Test the phone number against the pattern
    var isValid = pattern.test(phone);

    return isValid;
}