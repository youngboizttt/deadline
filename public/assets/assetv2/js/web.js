(function($) {
    $.fn.multitabs = function() {
        $('.tab__header > div').on('click', function() {
            var num;
            var _this = $(this);
            var classNameTab = _this.attr('class').split(' ');
            var classNameContent = _this.parent().siblings().children();

            for (i = 0; i <= classNameTab.length; i++) {
                if (/([\d.]+)/.test(classNameTab[i])) {
                    num = classNameTab[i].split('-')[1];
                    _this.siblings().removeClass('tab__header--active');
                    _this.addClass('tab__header--active');
                }
            }

            $(classNameContent).each(function(i, n) {
                var name = $(n).attr('class').split(' ');
                for (n = 0; n <= name.length; n++) {
                    if (name[n] != undefined) {
                        if (/([\d.]+)/.test(name[n])) {
                            if (num === name[n].split('-')[1]) {
                                var el = $(classNameContent)[num - 1];
                                $(classNameContent).removeClass('tab__content--active');
                                $(el).addClass('tab__content--active');
                            }
                        }
                    }
                }
            });
        });
    }
})(jQuery);
$('#tab_detail_1').multitabs();


// code Show More/Less for CMR IQ 2 & CMR IQ2S (18/5/2022)
$(".show-more").click(function () {
    if($(".text").hasClass("show-more-height")) {
        $(this).text("Ẩn đi");
        $(this).addClass("_Less");
    } else {
        $(this).text("Xem thêm");
        $(this).removeClass("_Less");
    }

    $(".text").toggleClass("show-more-height");
});