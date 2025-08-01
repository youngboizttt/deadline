
/*
|
|---------------------------- page Home: status ping
|
*/
if ($("#doan_ping-section-status").length) {

    $(document).ready(function () {

        // XỬ LÝ TOGGLE PING IMAGE
        const pingImg = document.getElementById("ping-image");
        const pingStatus = document.getElementById("ping-status");
        const toggleBtn = document.getElementById("toggle-btn");
        // const abc = 

        let isHyperFast = true;
        let autoSwitch = true;
        let currentState = 'low';

        // Hàm cập nhật trạng thái ping + hình ảnh với hiệu ứng
        const updateState = (state) => {
            currentState = state;

            // Fade out
            pingImg.classList.add("fade-out");

            setTimeout(() => {
                // Đổi ảnh & cập nhật text
                if (state === 'low') {
                    pingImg.src = pingImg.dataset.pingLow;
                    pingStatus.innerHTML = 'Ping thấp: <strong>18ms</strong>';

                    // xử lý button
                    $('.border-toggle-btn').addClass('border_pinglow');
                    $('.border-toggle-btn').removeClass('border_pinghight');
                    toggleBtn.textContent = "Sử dụng HyperFast";

                } else {
                    pingImg.src = pingImg.dataset.pingHigh;
                    pingStatus.innerHTML = 'Ping cao: <strong>92ms</strong>';

                    // xử lý button
                    $('.border-toggle-btn').addClass('border_pinghight');
                    $('.border-toggle-btn').removeClass('border_pinglow');
                    toggleBtn.textContent = "Không dùng HyperFast";

                }
                pingStatus.classList.toggle("high", state === 'high');// add class cho text ping
                // Fade in
                pingImg.classList.remove("fade-out");
            }, 100);
        };

        // Tự động chuyển ping mỗi 2 giây nếu autoSwitch = true
        const interval = setInterval(() => {
            if (!autoSwitch) return;
            const nextState = currentState === 'low' ? 'high' : 'low';
            updateState(nextState);
        }, 2000);



        let autoResumeTimeout; // timeout để resume tự động sau 30s

        // Hàm bật lại autoSwitch sau 30 giây không thao tác
        const startAutoResumeTimer = () => {
            clearTimeout(autoResumeTimeout); // hủy nếu có timer cũ
            autoResumeTimeout = setTimeout(() => {
                autoSwitch = true;
            }, 9000); // 30 giây: 30000
        };

        // Sự kiện toggle HyperFast
        toggleBtn.addEventListener("click", () => {
            isHyperFast = !isHyperFast;
            autoSwitch = false;

            if (isHyperFast) {
                updateState('low');
                toggleBtn.textContent = "Sử dụng HyperFast";
                toggleBtn.classList.remove("off");
            } else {
                updateState('high');
                toggleBtn.textContent = "Không dùng HyperFast";
                toggleBtn.classList.add("off");
            }

            startAutoResumeTimer(); // bắt đầu đếm 30s sau thao tác
        });

        // END XỬ LÝ TOGGLE PING IMAGE



    });
}

// 
$(document).ready(function () {
    if ($("#ping-section-status").length) {
        const pingImg = document.getElementById("ping-image");
        const pingStatus = document.getElementById("ping-status");
        const toggleBtn = document.getElementById("toggle-btn");

        const pingLowURL = pingImg.dataset.pingLow;
        const pingHighURL = pingImg.dataset.pingHigh;

        // ✅ Inject CSS class chỉ 1 lần
        const style = document.createElement("style");
        style.textContent = `
            .ping-low {
                background-image: url('${pingLowURL}');
            }
            .ping-high {
                background-image: url('${pingHighURL}');
            }
            .ping_image {
                width: 64px;
                height: 64px;
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
            }
        `;
        document.head.appendChild(style);

        // ✅ Preload ảnh 1 lần
        [pingLowURL, pingHighURL].forEach(src => {
            const img = new Image();
            img.src = src;
        });

        let isHyperFast = true;
        let autoSwitch = true;
        let currentState = 'low';
        let autoResumeTimeout;

        const updateState = (state) => {
            if (state === currentState) return;
            currentState = state;

            pingImg.classList.toggle("ping-low", state === 'low');
            pingImg.classList.toggle("ping-high", state === 'high');

            if (state === 'low') {
                pingStatus.innerHTML = 'Ping thấp: <strong>18ms</strong>';
                $('.border-toggle-btn').addClass('border_pinglow').removeClass('border_pinghight');
                toggleBtn.textContent = "Sử dụng HyperFast";
                $('#ping-status').removeClass('high');
            } else {
                pingStatus.innerHTML = 'Ping cao: <strong>92ms</strong>';
                $('.border-toggle-btn').addClass('border_pinghight').removeClass('border_pinglow');
                toggleBtn.textContent = "Không dùng HyperFast";
                $('#ping-status').addClass('high');
            }
        };

        const interval = setInterval(() => {
            if (!autoSwitch) return;
            const nextState = currentState === 'low' ? 'high' : 'low';
            updateState(nextState);
        }, 2000);

        const startAutoResumeTimer = () => {
            clearTimeout(autoResumeTimeout);
            autoResumeTimeout = setTimeout(() => {
                autoSwitch = true;
            }, 9000);
        };

        toggleBtn.addEventListener("click", () => {
            isHyperFast = !isHyperFast;
            autoSwitch = false;

            updateState(isHyperFast ? 'low' : 'high');
            toggleBtn.classList.toggle('off', !isHyperFast);

            startAutoResumeTimer();
        });
    }

    // Scroll to div
    const hash = window.location.hash;
    // 
    if (hash) {
        const $target = $(hash);
        if ($target.length) {
            $target.removeAttr('id'); // xóa id
        }
    }

    // Window loaded run animation
    $(window).on("load", function() {
        // Scrool to div
        scrolltoEm(hash);
    });
});



// Scroll to elem
function scrolltoEm(_hash = 'undefined') {

    var offset = $('.header-menu').outerHeight();
    var offset_sub = $('.sub-nav-hyperfast').outerHeight();
    var speedS = 1000;
    var space = 40;

    // 
    var target = null;
    if (_hash && _hash !== 'undefined') {
        target = $('[data-id="' + _hash.replace('#', '') + '"]');
    } else {
        const currentHash = window.location.hash.replace('#', '');
        target = $('[data-id="' + currentHash + '"]');
    }

    // bypass auto scrolling, stop remember position scroll when f5.
    console.log(_hash);
    if (!_hash || _hash === 'undefined') {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
    }

    // scroll by hash url
    if ($(target).length) {
        history.replaceState(null, null, window.location.pathname);

        // force top header memnu
        $('.header-menu').css({ "top": 0 });
        
        // 
        $(target).attr('id', _hash.replace('#', '')); // gán lại id

        // Offset fixed header
        $('html, body').animate({
            scrollTop: $(target).offset().top - (offset + offset_sub + space)
        }, speedS, function() {
            console.log(_hash);
            history.replaceState(null, null, window.location.pathname + _hash);
        });

        return false;
    }
}



/*
|
|---------------------------- page Support
|
*/
// xử lý menu tab
if ($("#hyper-fast-support").length) {
    $(document).ready(function () {
        // Click tab (desktop)
        $('.tab-list li').on('click', function () {
            const tabId = $(this).data('tab');
            $('.tab-list li').removeClass('active');
            $(this).addClass('active');

            $('.tab-pane').removeClass('active');
            $('#' + tabId).addClass('active');

            $('.tab-select').val(tabId); // Sync dropdown
        });

        // Change select (mobile)
        $('.tab-select').on('change', function () {
            const tabId = $(this).val();
            $('.tab-list li').removeClass('active');
            $('.tab-list li[data-tab="' + tabId + '"]').addClass('active');

            $('.tab-pane').removeClass('active');
            $('#' + tabId).addClass('active');
        });
    });
}

// xử lý toggle (accor)
if ($(".hyperfast_accor_support").length) {
    /*
    - Khi checkbox thay đổi, cập nhật lại class .js_active_border đúng cho .tab--support cha tương ứng.
    - Khi load trang, checkbox nào được checked thì .tab--support của nó cũng phải có class .js_active_border.
    */

    function updateActiveBorder() {
        $('.hyperfast_accor_support .js_check').each(function () {
            const $tab = $(this).closest('.tab--support');
            if ($(this).is(':checked')) {
                $tab.addClass('js_active_border');
            } else {
                $tab.removeClass('js_active_border');
            }
        });
    }

    $(document).ready(function () {
        // Khởi tạo trạng thái ban đầu
        updateActiveBorder();

        // Xử lý khi thay đổi checkbox
        $('.hyperfast_accor_support .js_check').on('change', function () {
            updateActiveBorder();
        });
    });
}


/*
|
|---------------------------- page đăng ký dùng thử
|
*/
if ($("#signUpForTrial_hyperFast").length) {

    function signup_hyper_fast() {
        const form = document.getElementById('signUpForTrial_hyperFast');
        let isValid = true;

        const fullname = form.elements['fullname'];
        const phone = form.elements['phone'];
        const email = form.elements['email'];
        const recaptchaError = document.getElementById('recaptcha-error');

        // Validate fullname
        if (!fullname.value.trim()) {
            fullname.classList.add('error');
            fullname.nextElementSibling.style.display = 'block'; // Hiện span lỗi
            isValid = false;
        } else {
            fullname.classList.remove('error');
            fullname.nextElementSibling.style.display = 'none';
        }

        // Validate phone: 10 chữ số
        const phoneRegex = /^\d{10}$/;
        if (!phone.value.trim() || !phoneRegex.test(phone.value)) {
            phone.classList.add('error');
            phone.nextElementSibling.style.display = 'block';
            isValid = false;
        } else {
            phone.classList.remove('error');
            phone.nextElementSibling.style.display = 'none';
        }

        // Validate email
        if (!email.value.trim()) {
            email.classList.add('error');
            email.nextElementSibling.style.display = 'block';
            isValid = false;
        } else {
            email.classList.remove('error');
            if (!/^\S+@\S+\.\S+$/.test(email.value)) {
                email.classList.add('error');
                email.nextElementSibling.textContent = "Email không hợp lệ";
                email.nextElementSibling.style.display = 'block';
                isValid = false;
            } else {
                email.nextElementSibling.textContent = "Vui lòng nhập email của bạn";
                email.nextElementSibling.style.display = 'none';
            }
        }

        // Validate reCAPTCHA
        const recaptchaResponse = grecaptcha.getResponse();
        if (recaptchaResponse.length === 0) {
            recaptchaError.style.display = 'block';
            isValid = false;
        } else {
            recaptchaError.style.display = 'none';
        }

        // Nếu tất cả đều hợp lệ
        if (isValid) {
            alert('Bạn đã đăng ký dùng thử thành công!');
            window.location.href = "https://fpt.vn";
        }
    }

}


/*
|
|---------------------------- headmenu: xử lý sticky trong trường hợp có menu hyper fast 
|
*/

$(document).ready(function () {

    let lastScrollY = window.scrollY;
    let isSubnavFixed = false;

    window.addEventListener('scroll', function () {
        const headerBlock = document.querySelector('.header-menu.header_area');
        const headerTop = document.querySelector('.header-top');
        const subNav = document.querySelector('.sub-nav-hyperfast');
        const navbar = document.querySelector('.navbar');

        const currentScrollY = window.scrollY;
        const goingDown = currentScrollY > lastScrollY;

        // Khi scroll xuống, subnav cách top <= 105px
        if (goingDown && !isSubnavFixed) {
            const rect = subNav.getBoundingClientRect();
            if (rect.top <= 105) {
                headerTop.style.opacity = '0';
                headerTop.style.visibility = 'hidden';

                subNav.classList.add('fixed-subnav');
                // subNav.style.top = navbar.offsetHeight + 'px'; // ko set cứng
                headerBlock.classList.add('header-top-style');
                isSubnavFixed = true;
            }
        }

        // Khi scroll lên, scrollY <= vị trí ban đầu subnav (~subnav offsetTop)
        if (!goingDown && isSubnavFixed) {
            const subNavOffsetTop = navbar.offsetHeight + headerTop.offsetHeight;
            if (currentScrollY <= subNavOffsetTop) {
                headerTop.style.opacity = '1';
                headerTop.style.visibility = 'visible';

                subNav.classList.remove('fixed-subnav');
                headerBlock.classList.remove('header-top-style');
                // subNav.style.top = ''; // ko set cứng
                isSubnavFixed = false;
            }
        }

        lastScrollY = currentScrollY;
    });

})

/*
|
|---------------------------- Xử lý check window hoặc macOS / iOS / Android cho nút download ứng dụng hyper fast 
|
*/
if ($(".btn-download-hyperfast").length) {

    var _btn = $(".btn-download-hyperfast");

    // Goi modal 
    function showModal_download() {
        $('#not_support_download').modal('show');
    }

    // button detesct os click
    _btn.on('click', function (e) {
        var _self = $(this);
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;
        var isWindows = /windows phone|win/i.test(userAgent);
        var isMac = /macintosh|mac os x/i.test(userAgent);
        var isAndroid = /android/i.test(userAgent);
        var isIOS = /iphone|ipad|ipod/i.test(userAgent);
        var isLinux = /linux/i.test(userAgent) && !isAndroid;
        var allowed = _self.hasClass("detectos");

        // 
        if (!allowed) return;
    
        // 
        if (isWindows) {
            var downloadLink = _self.attr('href');
            window.open(downloadLink, '_blank');
        } else {
            e.preventDefault();
            showModal_download();
        }
    });

    // 
    // document.getElementById('btn-download-hyperfast').addEventListener('click', function (e) {
    //     const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    //     const isWindows = /windows phone|win/i.test(userAgent);
    //     const isMac = /macintosh|mac os x/i.test(userAgent);
    //     const isAndroid = /android/i.test(userAgent);
    //     const isIOS = /iphone|ipad|ipod/i.test(userAgent);
    //     const isLinux = /linux/i.test(userAgent) && !isAndroid;

    //     if (isWindows) {
    //         // Lấy link download từ thuộc tính data-download
    //         const downloadLink = this.getAttribute('data-download');
    //         window.open(downloadLink, "_blank");
    //     } else {
    //         e.preventDefault(); // Chặn mở link

    //         if (isMac) {
    //             showModal_download();
    //         } else if (isAndroid) {
    //             showModal_download();
    //         } else if (isIOS) {
    //             showModal_download();
    //         } else if (isLinux) {
    //             showModal_download();
    //         } else {
    //             showModal_download();
    //         }
    //     }
    // });
}


