$(document).ready(function () { 
    swiper_auto_init('.swiper-camera', 24,{
        0: {
            spaceBetween: 16
        },
        768: {
            spaceBetween: 24 
        }
    });
    const swiper_none_mb_el = '.swiper-camera-certificate';
    var swiper_none_mb = null;
    if ($(swiper_none_mb_el).length){
        if(window.innerWidth >= 768) {
            swiper_none_mb = swiper_auto_init(swiper_none_mb_el, 24,{
                0: {
                    spaceBetween: 19,
                    slidesPerView: 'auto'
                },
                521: {
                    spaceBetween: 24,
                    slidesPerView: 2
                },
                768: {
                    spaceBetween: 24,
                    slidesPerView: 3
                },
                992: {
                    spaceBetween: 24,
                    slidesPerView: 4
                }
            });
        }
    }
    var oldWidth = window.innerWidth;
    var newWidth = window.innerWidth;
    $(window).on('resize', function () {
        newWidth = window.innerWidth;
        if ((oldWidth >= 768) !== (newWidth >= 768)){
            if ($(swiper_none_mb_el).length){
                if(newWidth >= 768) {
                    swiper_none_mb = swiper_auto_init(swiper_none_mb_el, 24,{
                        0: {
                            spaceBetween: 19,
                            slidesPerView: 3
                        },
                        768: {
                            spaceBetween: 24,
                            slidesPerView: 4
                        },
                        992: {
                            spaceBetween: 24,
                            slidesPerView: 5
                        }
                    });
                }else{
                    if (swiper_none_mb) {
                        swiper_none_mb.destroy(true, true);
                        swiper_none_mb = null;
                    }
                }
            }
        }
    });
    const btn_show_full = '.btn-show-more .btn-toggle';
    if($(btn_show_full).length){
        $(btn_show_full).on('click', function() {
            const container = $('.swiper-camera-certificate');
            if(container.length){
                container.toggleClass('show-short');
        
                if (container.hasClass('show-short')) {
                    $(this).text('Xem tất cả giải thưởng');
                    // Scroll về đầu danh sách nếu muốn
                    container.animate({
                        scrollTop: container.offset().top - 100
                    }, 300);
                } else {
                    $(this).text('Thu gọn');
                }
            }
        });
    }
    
});
