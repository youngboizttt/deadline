/*
| 
|
|---------------------------- slide bảng giá Combo Internet truyền hình
|
|
*/

if ($(".swiper.package-combo-entertainment").length) {
    function sw_entertainment_combo() {
        var swiper = new Swiper('.swiper.package-combo-entertainment', {
            slidesPerView: 3,
            spaceBetween: 24,
            navigation: {
                nextEl: '.parents_entertainment .swiper-button-next',
                prevEl: '.parents_entertainment .swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: "auto",// dùng auto để cho with tùy ý >> & set width của item nhỏ hơn 100vw để hiển thị hơn 1 item
                    spaceBetween: 16,
                },
                767: {
                    slidesPerView: "auto",
                    spaceBetween: 16,
                },
                834: {
                    slidesPerView: 2,
                    spaceBetween: 24,
                },
                884: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                1500: {// 1280
                    slidesPerView: 3,
                },
            },
            /////
            lazy: true,
            touchStartPreventDefault: false,
        });
    }

    $(document).ready(function () {
        sw_entertainment_combo();

        if ($(".parents_entertainment .swiper-button-disabled.swiper-button-lock").length > 0) { // check if swiper button is locked
            $(".swiper.package-combo-entertainment .swiper-wrapper").addClass('js_wrapper_entertain_combo');
        }

        if ($(".swiper.package-combo-entertainment .swiper-slide.with-suggest").length == 0) { // nếu có gói đề xuất thì set lại padding của tiêu đề
            $(".swiper.package-combo-entertainment .swiper-slide .package-content").addClass('not_label_entertain_combo');
            $(".row-goi-de-xuat-homepage .new-title-label").removeClass('padding_new_title_label');
            $(".package-combo-entertainment .swiper-slide .package-content .middle").addClass('no_bullet_bg');
        }
        if ($(".swiper.package-combo-entertainment .swiper-slide.with-suggest").length > 0) {
            // console.log('co gói đề xuất');
            $(".row-goi-de-xuat-homepage .new-title-label").addClass('padding_new_title_label');
        }
    });

}
// ---------------------------- END 

/*
| 
|
|---------------------------- slide combo meta F1
|
|
*/
if ($(".swiper.sw-parents-combo-meta-f1").length > 0) {
    function sw_combo_meta_f1() {
        var swiper = new Swiper('.swiper.sw-parents-combo-meta-f1', {
            slidesPerView: 5,
            spaceBetween: 16,
            loop: true,
            slideToClickedSlide: true,
            navigation: {
                nextEl: '.parents_combo_meta_f1 .swiper-button-next',
                prevEl: '.parents_combo_meta_f1 .swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: "auto",
                    spaceBetween: 4,
                },
                767: {
                    slidesPerView: "auto",
                    spaceBetween: 16,
                },
                768: {
                    slidesPerView: "auto",
                    spaceBetween: 16,
                },
                834: {
                    slidesPerView: "auto",
                    spaceBetween: 12,
                },
                // 884: {
                //     slidesPerView: 4,
                //     spaceBetween: 12,
                // },
                992: {
                    slidesPerView: "auto",
                    spaceBetween: 12,
                },
                1024: {
                    slidesPerView: "auto",
                    spaceBetween: 16,
                    // 1024 -> 1199
                },
                1200: {
                    slidesPerView: "auto",
                    spaceBetween: 16,
                    //1200 -> 1499
                },
                1500: {
                    slidesPerView: 5,
                },
            },
            lazy: true,
            touchStartPreventDefault: false,
        });
    }

    $(document).ready(function () {
        sw_combo_meta_f1();

        if ($(".parents_combo_meta_f1 .swiper-button-disabled.swiper-button-lock").length > 0) { // check if swiper button is locked
            // $(".swiper.sw-parents-combo-meta-f1 .swiper-wrapper").addClass('js_promotions_center_');// cho center khi xác định ko xuất hiện silde: js_video_center
        }
    });
}
// ---------------------------- END 

/*
| 
|
|---------------------------- slide new release (mới ra mắt)
|
|
*/
if ($(".swiper.sw-parents-new-release").length > 0) {
    function sw_new_release() {
        var swiper = new Swiper('.swiper.sw-parents-new-release', {
            slidesPerView: 6,
            spaceBetween: 24,
            loop: true,
            // slideToClickedSlide: true,
            navigation: {
                nextEl: '.parents_new_release .swiper-button-next',
                prevEl: '.parents_new_release .swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: "auto",
                    spaceBetween: 8,
                    loop: false,
                },
                768: {
                    slidesPerView: "auto",
                    spaceBetween: 12,
                    loop: false,
                },
                834: {
                    slidesPerView: "auto",
                    spaceBetween: 12,
                },
                992: {
                    slidesPerView: "auto",
                    spaceBetween: 12,
                },
                1024: {
                    slidesPerView: "auto",
                    spaceBetween: 16,
                    // 1024 -> 1199
                },
                1200: {
                    slidesPerView: "auto",
                    spaceBetween: 16,
                    //1200 -> 1499
                },
                1500: {
                    slidesPerView: 6,
                },
            },
            lazy: true,
            touchStartPreventDefault: false,
        });
    }

    $(document).ready(function () {
        sw_new_release();

        if ($(".parents_new_release .swiper-button-disabled.swiper-button-lock").length > 0) { // check if swiper button is locked
            // $(".swiper.sw-parents-new-release .swiper-wrapper").addClass('js_promotions_center_');// cho center khi xác định ko xuất hiện silde: js_video_center
        }
    });
}
// ---------------------------- END 


/*
| 
|
|---------------------------- slide Khách hàng nói gì về Combo Internet FPT Play
|
|
*/

if ($(".swiper.sw-customer-reviews").length > 0) {
    function sw_customer_reviews() {
        var swiper = new Swiper('.swiper.sw-customer-reviews', {
            slidesPerView: 3,
            spaceBetween: 4,
            loop: true,
            slideToClickedSlide: true,
            navigation: {
                nextEl: '.parents_customer_reviews .swiper-button-next',
                prevEl: '.parents_customer_reviews .swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: "auto",
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: "auto",
                    spaceBetween: 0,
                },
                820: {
                    slidesPerView: "auto",
                    spaceBetween: 0,
                },
                834: {
                    slidesPerView: "auto",
                    spaceBetween: 0,
                },
                884: {
                    slidesPerView: "auto",
                    spaceBetween: 0,
                },
                992: {
                    slidesPerView: "auto",
                    spaceBetween: 0,
                },
                1024: {
                    slidesPerView: "auto",
                    spaceBetween: 0,
                },
                1114: {
                    slidesPerView: "auto",
                    spaceBetween: 0,
                },
                1200: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                1366: {
                    slidesPerView: 3,
                    spaceBetween: 4,
                },
            },
            lazy: true,
            touchStartPreventDefault: false,
        });
    }

    $(document).ready(function () {
        sw_customer_reviews();

        if ($(".parents_customer_reviews .swiper-button-disabled.swiper-button-lock").length > 0) { // check if swiper button is locked
            $(".swiper.sw-customer-reviews .swiper-wrapper").addClass('js_customer_reviews_center_');// cho center khi xác định ko xuất hiện silde.
        }

        // cuctom cho chiều cao bằng nhau nếu nội dung ko format bằng nhau
        function equalizeSwiperSlideHeight() {
            const slides = document.querySelectorAll(".sw-customer-reviews .swiper-slide");
            let maxHeight = 0;

            // Tìm chiều cao lớn nhất
            slides.forEach(slide => {
                slide.style.height = "auto"; // Reset trước khi tính toán
                let slideHeight = slide.offsetHeight;
                maxHeight = Math.max(maxHeight, slideHeight);
            });

            // Gán chiều cao lớn nhất cho tất cả các slide
            slides.forEach(slide => {
                slide.style.height = maxHeight + "px";
            });
        }
        // Gọi hàm khi trang load xong hoặc thay đổi kích thước màn hình
        window.addEventListener("load", equalizeSwiperSlideHeight);
        window.addEventListener("resize", equalizeSwiperSlideHeight);
        // END cuctom cho chiều cao bằng nhau nếu nội dung ko format bằng nhau
    });
}

// ---------------------------- END 

/*
| 
|
|---------------------------- slide new release (mới ra mắt)
|
|
*/
if ($(".swiper.sw-parents-hot-movie").length > 0) {
    function sw_hot_movie() {
        var swiper = new Swiper('.swiper.sw-parents-hot-movie', {
            // slidesPerView: 5,
            spaceBetween: 40,
            loop: true,
            slideToClickedSlide: true,
            navigation: {
                nextEl: '.parents_hot_movie .swiper-button-next',
                prevEl: '.parents_hot_movie .swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: "auto",
                    spaceBetween: 6,
                },
                767: {
                    slidesPerView: 4,
                    spaceBetween: 16,
                },
                768: {
                    slidesPerView: "auto",
                    spaceBetween: 16,
                },
                834: {
                    slidesPerView: "auto",
                    spaceBetween: 12,
                },
                992: {
                    slidesPerView: "auto",
                    spaceBetween: 12,
                },
                1024: {
                    slidesPerView: "auto",
                    spaceBetween: 16,
                    // 1024 -> 1199
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                    //1200 -> 1499
                },
                1500: {
                    slidesPerView: 3,
                },
            },
            lazy: true,
            touchStartPreventDefault: false,
        });


        //   oske-----------------------------
        const movieDescriptions = [
            {
                jstitle: 'Harold Và Cây Bút Phép Thuật',
                jstagline: '#1 Trending',
                jsrating: '5.0',
                jstime: '1 giờ 26 phút',
                jssummary: 'Phim xoay quanh Harold, một cậu bé có thể tạo ra bất cứ thứ gì chỉ với cây bút chì màu tím ma thuật của mình. Khi lớn lên, Harold quyết định vẽ một cánh cửa để bước ra Thế Giới Thật nhằm tìm kiếm người kể chuyện mà cậu gọi là "ông già". Trong hành trình này, cậu gặp gỡ và kết bạn với nhiều người, đồng thời học được nhiều bài học quý giá về cuộc sống.',
                jsonclick: 'return showModal();',
            },
            {
                jstitle: 'Kinh Hãi',
                jstagline: '#2 Trending',
                jsrating: '5.0',
                jstime: '1 giờ 20 phút',
                jssummary: 'Gia đình Curtis được chọn để thử nghiệm một thiết bị công nghệ mới, giữ vai trò trợ lý kỹ thuật số, tên là AIA. Sau khi cài đặt, AIA bắt đầu học hỏi hành vi của gia đình và dự đoán nhu cầu của họ. Tuy nhiên, thiết bị này bắt đầu can thiệp quá mức vào những thói quen sinh hoạt của nhà Curtis, thậm chí kiểm soát cuộc sống của họ theo những cách đáng sợ nhất.',
                jsonclick: 'return showModal();',
            },
            {
                jstitle: 'Cay Nóng Hôi Hổi',
                jstagline: '#3 Trending',
                jsrating: '5.0',
                jstime: '2 giờ 4 phút',
                jssummary: 'Yolo kể về câu chuyện của Lạc Oánh - một người phụ nữ thừa cân, thất nghiệp, sống không mục đích và đang ăn bám bố mẹ. Sau lần cãi vã căng thẳng với em gái, cô quyết định bỏ nhà ra đi, bắt đầu cuộc sống tự lập. Trong lúc đang vật lộn với mọi thứ, vào thời khắc khó khăn nhất, cô gặp được một huấn luyện viên đấm bốc. Kể từ đó, Lạc Oánh dần dần tìm thấy niềm đam mê với bộ môn "boxing", vượt qua những thử thách, vực dậy bản thân và tìm kiếm vinh quang.',
                jsonclick: 'return showModal();',
            },
            {
                jstitle: 'Bạo Động Ở L.A.',
                jstagline: '#4 Trending',
                jsrating: '5.0',
                jstime: '1 giờ 33 phút',
                jssummary: 'Lấy bối cảnh cuộc bạo loạn tại Los Angeles sau phán quyết về vụ án Rodney King, phim theo chân Mercer - một người cha đang cố gắng xây dựng lại cuộc sống cũng như cải thiện mối quan hệ với con trai mình. Trong khi đó, ở một phần khác của thành phố, một cặp cha con khác đang lên kế hoạch thực hiện vụ cướp nguy hiểm tại nơi làm việc của Mercer. Khi căng thẳng leo thang, hỗn loạn bùng nổ, hai gia đình này gặp nhau và đối mặt với những thử thách khắc nghiệt.',
                jsonclick: 'return showModal();',
            },
            {
                jstitle: 'Venom: Kèo Cuối',
                jstagline: '#5 Trending',
                jsrating: '5.0',
                jstime: '1 giờ 50 phút',
                jssummary: 'Venom: Kèo Cuối là phần phim cuối cùng và hoành tráng nhất về cặp đôi Venom - Eddie Brock. Sau khi dịch chuyển từ vũ trụ Marvel trong Spider-Man: No Way Home trở về thực tại, anh phóng viên số nhọ Eddie và quái vật Venom sẽ đối mặt với ác thần Knull hùng mạnh - kẻ tạo ra cả chủng tộc Symbiote và những thế lực đang rình rập khác. Bộ đôi bất bại Eddie - Venom phải đưa ra quyết định khốc liệt để hạ màn kèo cuối này.',
                jsonclick: 'return showModal();',
            },
            
            //...
        ];
        
        //   oske-----------------------------

        const descriptionEl = document.querySelector('.js_movie_description');

        swiper.on('slideChange', () => {
            // gán text cho từng poster phim
            const realIndex = swiper.realIndex;
            const data = movieDescriptions[realIndex];

            descriptionEl.querySelector('.jstagline').textContent = data.jstagline;
            descriptionEl.querySelector('.jstitle').textContent = data.jstitle;
            descriptionEl.querySelector('.jsrating').textContent = data.jsrating;
            descriptionEl.querySelector('.jstime').textContent = data.jstime;
            descriptionEl.querySelector('.jssummary').textContent = data.jssummary;
            descriptionEl.querySelector('.jstooltip').textContent = data.jssummary;

            const watchNowBtn = descriptionEl.querySelector('.jswatch-now');
            watchNowBtn.setAttribute('onclick', data.jsonclick);
        });
        //   oske-----------------------------
    }

    $(document).ready(function () {
        sw_hot_movie();

        if ($(".parents_hot_movie .swiper-button-disabled.swiper-button-lock").length > 0) { // check if swiper button is locked
            // $(".swiper.sw-parents-hot-movie .swiper-wrapper").addClass('js_promotions_center_');// cho center khi xác định ko xuất hiện silde: js_video_center
        }

        
    });


}
// ---------------------------- END 

/*
| 
|
|---------------------------- slide hướng dẫn
|
|
*/
if ($(".swiper.sw_guides").length > 0) {
    function sw_guides_func() {
        var swiper = new Swiper('.swiper.sw_guides', {
            slidesPerView: 6,
            spaceBetween: 24,
            loop: true,
            slideToClickedSlide: true,
            navigation: {
                nextEl: '.parents_guides .swiper-button-next',
                prevEl: '.parents_guides .swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 3,
                    spaceBetween: 8,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 12,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                1500: {
                    slidesPerView: 3,
                },
            },
            lazy: true,
            touchStartPreventDefault: false,
        });
    }

    $(document).ready(function () {
        sw_guides_func();

        if ($(".parents_guides .swiper-button-disabled.swiper-button-lock").length > 0) { // check if swiper button is locked
            // $(".swiper.sw_guides .swiper-wrapper").addClass('js_promotions_center_');// cho center khi xác định ko xuất hiện silde: js_video_center
        }
    });
}
// ---------------------------- END 

/*
| 
|
|---------------------------- tab content (not swiper)
|
|
*/

$(document).ready(function () {

    $('ul.tabs-movie-guide li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs-movie-guide li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

})