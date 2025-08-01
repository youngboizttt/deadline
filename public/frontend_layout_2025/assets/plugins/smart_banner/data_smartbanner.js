    // title
    var title = 'Hi FPT', title_meta='meta[name="smartbanner:title"]';
    $(title_meta).attr('content', title);
    var title_apply = $(title_meta).attr('content');
    
    //author
    var author = 'FPT Telecom', author_name='meta[name="smartbanner:author"]';
    $(author_name).attr('content', author);
    var author_apply = $(author_name).attr('content');

    //button Open
    var btnOpen = 'Mở App ngay', btn_meta='meta[name="smartbanner:button"]';
    $(btn_meta).attr('content', btnOpen);
    var btnOpen_apply = $(btn_meta).attr('content');

    //platforms
    // var platforms_name = 'Open App', platforms_meta='meta[name="smartbanner:enabled-platforms"]';
    // $(platforms_meta).attr('content', btnOpen);
    // var btnOpen_apply = $(btn_meta).attr('content');

    //price
    var price = 'FREE', price_name='meta[name="smartbanner:price"]';
    $(price_name).attr('content', price);
    var price_apply = $(price_name).attr('content');
    //in store
    /**/
    var _inItunes = ' - In the App Store', _inItunes_store = 'meta[name="smartbanner:price-suffix-apple"]';
    $(_inItunes_store).attr('content', _inItunes);
    var _inItunes_apply = $(_inItunes_store).attr('content');
    
    var _inGoogle = ' - In Google Play', _inGoogle_store = 'meta[name="smartbanner:price-suffix-google"]';
    $(_inGoogle_store).attr('content', _inGoogle);
    var _inGoogle_apply = $(_inGoogle_store).attr('content');

    


    //URL > for itunes
    //http://itunes.apple.com/[country]/app/[App–Name]/id[App Id or Store Id]?mt=8
    var url_itunes='https://itunes.apple.com/vn/app/hi-fpt/id', id_in_itunes = '1144417173', btnApple='meta[name="smartbanner:button-url-apple"]';
    var iosUrl_device = url_itunes + id_in_itunes;
    $(btnApple).attr("content", iosUrl_device);
    var iosUrl_apply = $(btnApple).attr("content");//alert(iosUrl_apply);
    //URL > for google play
    var url_googlePlay = 'https://play.google.com/store/apps/details?id=', id_in_google = 'com.rad.hifpt', btnGoogle='meta[name="smartbanner:button-url-google"]';
    var googleUrl_device  = url_googlePlay + id_in_google;
    $(btnGoogle).attr("content", googleUrl_device);
    var googleUrl_apply = $(btnGoogle).attr("content");

    //LOGO
    var logo_inItunes = 'https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/d0/18/ca/d018ca9e-d97e-8eb3-c96c-013b9dcf5254/AppIcon_default-0-0-1x_U007emarketing-0-10-0-85-220.png/230x0w.webp', icoApple = 'meta[name="smartbanner:icon-apple"]';
    $(icoApple).attr('content', logo_inItunes);
    var logo_inItunes_apply = $(icoApple).attr('content');
    
    var logo_inGoogle = 'https://play-lh.googleusercontent.com/s_Jq0D1EU-zKKkIXNQqNsGYLVDY6e6Dqu0IAtdxEk-M_GMAjg2CGI_DV-ZjecbGRlE4=w240-h480-rw', icoGoogle = 'meta[name="smartbanner:icon-google"]'
    $(icoGoogle).attr('content', logo_inGoogle);
    var logo_inGoogle_apply = $(icoGoogle).attr('content');

    //rating
    var rating_Itunes = '70%', rating_Itunes_meta = 'meta[name="smartbanner:rating-Itunes"]';
    $(rating_Itunes_meta).attr('content', rating_Itunes);
    var rating_Itunes_apply = $(rating_Itunes_meta).attr('content');

    var rating_Google = '68%', rating_Google_meta = 'meta[name="smartbanner:rating-Google"]';
    $(rating_Google_meta).attr('content', rating_Google);
    var rating_Google_apply = $(rating_Google_meta).attr('content');
 