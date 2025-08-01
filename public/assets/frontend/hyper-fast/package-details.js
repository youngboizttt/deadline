jQuery(document).ready(function ($) {
    try {
        new LazyLoad({
            elements_selector: ".lazy",
            threshold: 200,
            effect: "fadeIn",
        });
    } catch (error) {
        console.error('Có lỗi xảy ra:', error.message);
    }
});

const urlDetail = window.APP_DATA?.route_ajax || '';

const slug = window.APP_DATA?.slug || '';
const prefix = window.APP_DATA?.api_prefix || '/hyperfast/chi-tiet/';
const register_url = window.APP_DATA?.register_url || '/register/';
var sliderProdImageThumbOption ={
    spaceBetween: 12,
    slidesPerView: 5,
    slidesPerGroup: 1,
    freeMode: false,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: false,
    slideToClickedSlide:  true,
    grabCursor: true,
    breakpoints: {
        768: {
            spaceBetween: 8
        }
    },
    on: {
        slideChange: function () {
            let targetIndex = sliderProdImage.realIndex;

            // console.log('currentIndex====='+this.realIndex);
            // console.log('targetIndex====='+targetIndex);
            const maxIndex = this.slides.length - this.params.slidesPerView;
            if(this.realIndex !== targetIndex && !(targetIndex>= maxIndex && this.realIndex >= maxIndex)){
                // console.log('change');
                sliderProdImage.slideTo(this.realIndex, 300, false);
            }
        },
        slideChangeTransitionEnd: function () { 
            let targetIndex = sliderProdImage.realIndex;
            const maxIndex = this.slides.length - this.params.slidesPerView;
            if (this.realIndex !== targetIndex && targetIndex<maxIndex) {
                // console.log('change end');
                let safeIndex = Math.min(targetIndex, maxIndex);
                sliderProdImage.slideTo(safeIndex, 300, false);
            }
        }
    }
};
var sliderProdImageThumb = new Swiper('.gallery-thumbs',sliderProdImageThumbOption);
document.querySelector('.gallery-thumbs .swiper-button-next').addEventListener('click', function () {
    if (!this.classList.contains('swiper-button-disabled')) {
        sliderProdImage.slideNext();
    }
});

document.querySelector('.gallery-thumbs .swiper-button-prev').addEventListener('click', function () {
    if (!this.classList.contains('swiper-button-disabled')) {
        sliderProdImage.slidePrev();
    }
});
var sliderProdImage = new Swiper('.gallery-top',
{
    loop: false,
    spaceBetween: 10,
    effect: 'fade',
    navigation: {
        nextEl: '.gallery-top .swiper-button-next',
        prevEl: '.gallery-top .swiper-button-prev',
    },
    thumbs: {
        swiper: sliderProdImageThumb
    },
    on: {
        afterInit: function (){
            let currentIndex = this.realIndex + 1;
            document.querySelector('.index-label .curent-index').textContent = currentIndex;
            let endIndex = this.slides.length;
            let nextButton = document.querySelector('.gallery-thumbs .swiper-button-next');
            let prevButton = document.querySelector('.gallery-thumbs .swiper-button-prev');
            
            prevButton.classList.add('swiper-button-disabled');
            prevButton.setAttribute("aria-disabled", "true");
            if(endIndex>1){
                nextButton.classList.remove('swiper-button-disabled');
                nextButton.setAttribute("aria-disabled", "false");
            }else{
                nextButton.classList.add('swiper-button-disabled');
                nextButton.setAttribute("aria-disabled", "true");
            }
        },
        slideChange: function () {
            let currentIndex = this.realIndex + 1;
            document.querySelector('.index-label .curent-index').textContent = currentIndex;
            document.querySelectorAll('.gallery-top iframe').forEach(iframe => {
                iframe.contentWindow.postMessage(
                    JSON.stringify({
                        event: "command",
                        func: "pauseVideo",
                        args: []
                    }),
                    "*"
                );
            });
            let endIndex = this.slides.length;
            let nextButton = document.querySelector('.gallery-thumbs .swiper-button-next');
            let prevButton = document.querySelector('.gallery-thumbs .swiper-button-prev');
            
            if(currentIndex >= endIndex){
                nextButton.classList.add('swiper-button-disabled');
                nextButton.setAttribute("aria-disabled", "true");
            }else{
                nextButton.classList.remove('swiper-button-disabled');
                nextButton.setAttribute("aria-disabled", "false");
            }
            if(currentIndex<2){
                prevButton.classList.add('swiper-button-disabled');
                prevButton.setAttribute("aria-disabled", "true");
            }else{
                prevButton.classList.remove('swiper-button-disabled');
                prevButton.setAttribute("aria-disabled", "false");
            }
            document.activeElement.blur();
        },
        slideChangeTransitionEnd: function (){
            let iframe = document.querySelector('.gallery-top .swiper-slide-active iframe');

            if (iframe) {
                let src = iframe.getAttribute('src');
                
                // Đảm bảo URL có `enablejsapi=1`
                if (!src.includes('enablejsapi=1')) {
                    let separator = src.includes('?') ? '&' : '?';
                    iframe.setAttribute('src', src + separator + 'enablejsapi=1');
                }

                // Gửi lệnh Play
                iframe.contentWindow.postMessage(
                    JSON.stringify({
                        event: "command",
                        func: "playVideo",
                        args: []
                    }),
                    "*"
                );
            }
        }
    }
});

let images = document.querySelectorAll('.gallery-top img');
let lightbox = document.getElementById('lightbox');
let lightboxImg = document.getElementById('lightbox-img');

images.forEach(img => {
    img.addEventListener('click', function () {
        lightboxImg.src = this.src;
        lightbox.style.display = 'flex';
    });
});

function closeLightbox() {
    lightbox.style.display = 'none';
}

// Đóng lightbox khi click ra ngoài ảnh
lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

var sliderRecommend =new Swiper('.prod-list-recommand',{
    slidesPerView: 'auto',
    spaceBetween: 24,
    slidesPerGroup: 1,
    slidesPerGroupAuto: true,
    navigation: {
        nextEl: '.prod-list-recommand .swiper-button-next',
        prevEl: '.prod-list-recommand .swiper-button-prev',
    },
    loop: true,
    breakpoints: {
        768: {
            navigation: false,
        },
    },
});
function changeQuantity(amount) {
    let input = document.getElementById('quantity');
    let newValue = parseInt(input.value) + amount;
    
    $('.quantity-left').prop('disabled', newValue<=1); 
    if ($(this).prop('disabled')) {
        return;
    }
    if (newValue >= 1) {
        input.value = newValue;
    }else{
        input.value = "";
    }
}
function destroyProdSlide(){

    if (typeof sliderProdImage !== 'undefined' && sliderProdImage !== null) {
        sliderProdImage.destroy(true, true);  
    }
    if (typeof sliderProdImageThumb !== 'undefined' && sliderProdImageThumb !== null) {
        sliderProdImageThumb.destroy(true, true);  
    }
    // Tìm tất cả Swiper đang chạy và hủy chúng
    document.querySelectorAll('.prod-d-image .swiper-container').forEach(container => {
        if (container.swiper) {
            container.swiper.destroy(true, true);
        }
    });
}

function validateInput() {
    let input = document.getElementById('quantity');
    if (isNaN(value) || input.value == "" || input.value < 1) {
        input.value = 1;
    }
}
$('#quantity').on('focus', function () {
    $(this).data('oldValue', $(this).val());
}).on('change', function () {
    let value = $(this).val();
    let oldValue = $(this).data('oldValue');

    if (isNaN(value) || value < 1) {
        $(this).val(oldValue);
    }
    
    $('.quantity-left').prop('disabled', value <= 1);
});
$('.prod-option-item input[type="radio"]').on('change', function () {

    let groupName = $(this).attr('name');
    let price = $(this).attr('data-price');
    var route = $(this).attr('data-route');
    
    $('#prod_total_price').html(price + 'đ');
    if($('#prod-buy-now').length){
        $('#prod-buy-now').attr('data-route', route);
        if(price>0){
            $('#prod-buy-now').removeClass('hidden');
        }else{
            $('#prod-buy-now').addClass('hidden');
        }
    }
  
    $.ajax({
        url: urlDetail,
        type: "GET",
        data: {'slug': route},
        dataType: "json",
        timeout: 5000,
        beforeSend: function() {
            // show loading
            activeLoading(true);
        },
        success: function (response, lightboxImg, lightbox) {
            
            if (response.error_code == 0) {
                document.title = response.data.display_name;
                var totalSlider = response.data.images_list.length;
                $('#total_slider').html(totalSlider);
                $('#product-name').html(response.data.display_name);
                if($('#big_details').length){
                    $('#big_details').html(response.data.big_details);
                }
                
                if($('.prod-sumany').length){
                     $('.prod-sumany').html('');
                    if(response.data.description_detail){
                        var description_detail = response.data.description_detail;
                        description_detail.forEach(item => {
                            $('.prod-sumany').append(`<p>${item}</p>`);
                        })
                    }
                    $('.prod-sumany').append('<button class="read-more">Xem thêm</button>');
                }

                var content = document.querySelector('.prod-detail-full-info');
                if(content){
                    if(!response.data.big_details){
                        content.classList.add('hidden');
                    }else{
                        content.classList.remove('hidden');
                    }
                }
                if($('.prod-d-image').length){
                    if(totalSlider>0){
                        $('.prod-d-image>div').removeClass('hidden');
                    }else{
                        $('.prod-d-image>div').addClass('hidden');
                    }
                }
                readMore();
                destroyProdSlide();
                if(response.data.images_list){
                    let dataImageList = response.data.images_list;

                    $('.gallery-thumbs .swiper-wrapper').html('');

                    dataImageList.forEach(item => {
                        let newSlideThumb = '';
                        if(item.type == 'video'){
                            newSlideThumb = `<div class="swiper-slide">
                                    <div class="swiper-slide-container">
                                        <img src="${item.image_url}" alt="">
                                    <div class="video-mark"></div>
                                    </div>
                                </div>`;
                        
                            
                        }else{
                            newSlideThumb = `<div class="swiper-slide">
                                    <div class="swiper-slide-container">
                                        <img src="${item.image_url}" alt="">
                                    </div>
                                </div>`;
                        
                        }
                        
                        $('.gallery-thumbs .swiper-wrapper').append(newSlideThumb);
                    });
                    // reloadUrlVideo();
                    const oldNextButton = document.querySelector('.gallery-thumbs .swiper-button-next');
                    const newNextButton = oldNextButton.cloneNode(true);
                    oldNextButton.parentNode.replaceChild(newNextButton, oldNextButton);
                    const oldPrevButton = document.querySelector('.gallery-thumbs .swiper-button-next');
                    const newPrevButton = oldPrevButton.cloneNode(true);
                    oldPrevButton.parentNode.replaceChild(newPrevButton, oldPrevButton);
                    
                    var sliderProdImageThumb = new Swiper(".gallery-thumbs", sliderProdImageThumbOption);

                    $('.gallery-top .swiper-wrapper').html('');
                    dataImageList.forEach(item => {
                        let newSlideBig  ='';
                        if(item.type == 'video'){
                            newSlideBig = `<div class="swiper-slide">
                                    <div class="swiper-slide-container">
                                        <iframe width="560" height="315" src="${item.video_url}&enablejsapi=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                                    </div>
                                </div>`;
                        }else{
                            newSlideBig = `<div class="swiper-slide">
                                    <div class="swiper-slide-container">
                                        <img src="${item.image_url}">
                                    </div>
                                </div>`;
                        
                        }
                            
                        $('.gallery-top .swiper-wrapper').append(newSlideBig);
                    });
                    
                    const oldNextButtonTop = document.querySelector('.gallery-top .swiper-button-next');
                    const newNextButtonTop = oldNextButtonTop.cloneNode(true);
                    oldNextButtonTop.parentNode.replaceChild(newNextButtonTop, oldNextButtonTop);
                    const oldPrevButtonTop = document.querySelector('.gallery-top .swiper-button-next');
                    const newPrevButtonTop = oldPrevButtonTop.cloneNode(true);
                    oldPrevButtonTop.parentNode.replaceChild(newPrevButtonTop, oldPrevButtonTop);
                    
                    var sliderProdImage = new Swiper('.gallery-top', {
                        loop: false,
                        spaceBetween: 10,
                        effect: 'fade',
                        // touchRatio: 1,
                        navigation: {
                            nextEl: '.gallery-top .swiper-button-next',
                            prevEl: '.gallery-top .swiper-button-prev',
                        },
                        thumbs: {
                            swiper: sliderProdImageThumb
                        },
                        on: {
                            afterInit: function (){
                                let currentIndex = this.realIndex + 1;
                                document.querySelector('.index-label .curent-index').textContent = currentIndex;
                                let endIndex = this.slides.length;
                                let nextButton = document.querySelector('.gallery-thumbs .swiper-button-next');
                                let prevButton = document.querySelector('.gallery-thumbs .swiper-button-prev');
                                
                                prevButton.classList.add('swiper-button-disabled');
                                prevButton.setAttribute("aria-disabled", "true");
                                if(endIndex>1){
                                    nextButton.classList.remove('swiper-button-disabled');
                                    nextButton.setAttribute("aria-disabled", "false");
                                }else{
                                    nextButton.classList.add('swiper-button-disabled');
                                    nextButton.setAttribute("aria-disabled", "true");
                                }
                            },
                            slideChange: function () {
                                let currentIndex = this.realIndex + 1;
                                document.querySelector('.index-label .curent-index').textContent = currentIndex;
                                let endIndex = this.slides.length;
                                let nextButton = document.querySelector('.gallery-thumbs .swiper-button-next');
                                let prevButton = document.querySelector('.gallery-thumbs .swiper-button-prev');
                                
                                if(currentIndex >= endIndex){
                                    nextButton.classList.add('swiper-button-disabled');
                                    nextButton.setAttribute("aria-disabled", "true");
                                }else{
                                    nextButton.classList.remove('swiper-button-disabled');
                                    nextButton.setAttribute("aria-disabled", "false");
                                }
                                if(currentIndex<2){
                                    prevButton.classList.add('swiper-button-disabled');
                                    prevButton.setAttribute("aria-disabled", "true");
                                }else{
                                    prevButton.classList.remove('swiper-button-disabled');
                                    prevButton.setAttribute("aria-disabled", "false");
                                }
                                document.querySelectorAll('.gallery-top iframe').forEach(iframe => {
                                    iframe.contentWindow.postMessage(
                                        JSON.stringify({
                                            event: "command",
                                            func: "pauseVideo",
                                            args: []
                                        }),
                                        "*"
                                    );
                                });
                                document.activeElement.blur();
                            },
                            slideChangeTransitionEnd: function (){
                                let iframe = document.querySelector('.gallery-top .swiper-slide-active iframe');

                                if (iframe) {
                                    let src = iframe.getAttribute('src');
                                    
                                    // Đảm bảo URL có `enablejsapi=1`
                                    if (!src.includes('enablejsapi=1')) {
                                        let separator = src.includes('?') ? '&' : '?';
                                        iframe.setAttribute('src', src + separator + 'enablejsapi=1');
                                    }

                                    // Gửi lệnh Play
                                    iframe.contentWindow.postMessage(
                                        JSON.stringify({
                                            event: "command",
                                            func: "playVideo",
                                            args: []
                                        }),
                                        "*"
                                    );
                                }
                            }
                        }
                    });

                    document.querySelector('.gallery-thumbs .swiper-button-next').addEventListener('click', function () {
                        if (!this.classList.contains('swiper-button-disabled')) {
                            sliderProdImage.slideNext();
                        }
                    });
                    
                    document.querySelector('.gallery-thumbs .swiper-button-prev').addEventListener('click', function () {
                        if (!this.classList.contains('swiper-button-disabled')) {
                            sliderProdImage.slidePrev();
                        }
                    });
                    let images = document.querySelectorAll('.gallery-top img');
                    let lightbox = document.getElementById('lightbox');
                    let lightboxImg = document.getElementById('lightbox-img');
                    images.forEach(img => {
                        img.addEventListener('click', function () {
                            lightboxImg.src = this.src;
                            lightbox.style.display = 'flex';
                        });
                    });
                }
                if($('#prod-price').length){
                    $('#prod-price').html(price+ 'đ/ tháng');
                    if(price>0){
                        $('#prod-price').removeClass('hidden');
                        if($('.prod-price-vat').length){
                            $('.prod-price-vat').removeClass('hidden')
                        }
                    }else{
                        $('#prod-price').addClass('hidden');
                        if($('.prod-price-vat').length){
                            $('.prod-price-vat').addClass('hidden')
                        }
                    }
                }
                history.replaceState( null , response.data.display_name, prefix + route);

                // 
                setTimeout(() => {
                    // hide loading
                    activeLoading(false);
                }, 600);
            }
        },
        error: function (data, textStatus, errorThrown) {
            // hide loading
            activeLoading(false);
        },
    });

    $(`input[name="${groupName}"]`).closest('.prod-option-item').find('.collapse').removeClass('in');
    $(`input[name="${groupName}"]`).closest('.prod-option-item').removeClass('in');
    if ($(this).is(':checked')) {
        $(this).closest('.prod-option-item').find('.collapse').addClass('in');
        $(this).closest('.prod-option-item').addClass('in');
    }
});
function prodContentReadMore() {
    console.log('prodContentReadMore');
    var content = document.querySelector('.prod-detail-full-info');
    var button = document.querySelector('.content-read-more button');

    if (content && button) {
        content.classList.toggle('show');
        button.textContent = content.classList.contains('show') ? 'Rút gọn' : 'Xem thêm';
    }
}

function readMore(){
    document.querySelectorAll('.prod-detail-full-info .content-read-more').forEach(elReadMore => {
        elReadMore.innerHTML = '<button>Xem thêm</button>';
    });

    document.querySelectorAll('.prod-detail-full-info .content-read-more button').forEach(button => {
        button.addEventListener('click', function () { prodContentReadMore(); });
        button.addEventListener('touchstart', function () { prodContentReadMore(); }, { passive: true });
    });

    var content =  document.querySelector('.prod-detail-full-info');
    let contentElement = document.querySelector('.prod-detail-full-info.show');
    var contentHeight = 0;
    var maxHeight = window.innerWidth <= 768 ? 300 : 488; // Mobile: 300px, Desktop: 488px // + px của content-read-more
    var readMoreEl = document.querySelector('.content-read-more');
    if (contentElement) {
        contentHeight = contentElement.offsetHeight;
    }else{
        if(content){
            content.classList.add('show');
            contentHeight = document.querySelector('.prod-detail-full-info.show').offsetHeight;
        }
    }
    // console.log('contentHeight=',contentHeight);
    // console.log('maxHeight=',maxHeight);

    if (contentHeight > maxHeight){
        // document.querySelector('.content-read-more button').textContent = 'Xem thêm';
        if(readMoreEl){
            readMoreEl.querySelector('button').textContent = 'Xem thêm';
            readMoreEl.style.display = "block";
        }
        if(content){
            contentHeight = content.classList.remove('show');
        }
    } else {
        if(readMoreEl){
            readMoreEl.style.display = "none";
        }
    }

}
readMore();
function contentReadMore(event) {
    var button = event.target;
    var parent = button.parentElement;

    if (parent.classList.contains('show')) {
        button.textContent = "Xem thêm";
        parent.classList.remove('show');
    } else {
        button.textContent = "Rút gọn";
        parent.classList.add('show');
    }
}

document.querySelectorAll('.prod-sumany button.read-more').forEach(button => {
    button.addEventListener('click', contentReadMore);
    button.addEventListener('touchstart', contentReadMore, { passive: true });
});

document.querySelectorAll('.prod-sumany').forEach(container => {
    let textElement = container.querySelector('p'); // Đối tượng nội dung
    let readMoreButton = container.querySelector('button.read-more'); // Nút "Xem thêm"
    if (textElement && readMoreButton) {
        if (textElement.scrollHeight <= textElement.offsetHeight) {
            readMoreButton.style.display = 'none'; // Ẩn nút nếu không bị cắt
            container.style.height = 'auto';
        }
    }
});

function buyNow(obj){
    let route = obj.getAttribute('data-route'); // Lấy giá trị data-route
    
    console.log(route);
    window.location.href = register_url+route;
}

if($('#prod_option_group_' + slug).length > 0){
    $('#prod_option_group_' + slug).click();
}else{
    $('.prod_option_group').first().click();
}
    
document.querySelectorAll('.prod-option-item .icon-collapse').forEach(icon => {
    icon.addEventListener('click', function () {


        const parentItem = this.closest('.prod-option-item');
        const collapseItem = parentItem.querySelector('.collapse');

        if (parentItem.classList.contains('in')) {
            parentItem.classList.remove('in');
            collapseItem && collapseItem.classList.remove('in');
        } else {
            parentItem.classList.add('in');
            collapseItem && collapseItem.classList.add('in');
        }
    });
});