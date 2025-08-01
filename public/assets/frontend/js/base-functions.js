
function playVideo(container, videoId) {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.position = 'absolute';
    iframe.style.top = 0;
    iframe.style.left = 0;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    
    container.innerHTML = '';
    container.appendChild(iframe);
}
function swiper_auto_init(el, v_spaceBetween = 0, v_breakpoints = {}) {
    if($(el).length){
        var swiper = new Swiper(el, {
            slidesPerView: 'auto',
            loop: false,
            spaceBetween: v_spaceBetween,
            navigation: {
                nextEl: el+' .swiper-button-next',
                prevEl: el+' .swiper-button-prev',
            },
            breakpoints: v_breakpoints,
            lazy: true,
        });
        return swiper;
    }else{
        console.log('Không tìm thấy el để khởi tạo swiper');
        return null;
    }
}