$(document).ready(function () {
  // ~~~~~~~~~~~~~~~ remove 5 section of desktop on mobile
  if ($(window).width() <= 768) {
    const _element = document.getElementById("content_desktop");
    _element.remove();
    // $('html, body').addClass('scollable');
  }
  // ~~~~~~~~~~~~~~~ remove 5 section of mobile on desktop
  if ($(window).width() > 769) {
    const _element_m = document.getElementById("content_mobile");
    _element_m.remove();
  }



  // click nav link on Mobile
  $('#_toTop_m').click(function(){//logo
    const top_mId = $("#_top_m")[0];
    top_mId.scrollIntoView({ behavior: "smooth" });
  })
  $("#_toservice_m").click(function () {// menu 1
    const service_mId = $("#_service_m")[0];
    service_mId.scrollIntoView({ behavior: "smooth" });
  });

  $("#_tofeature_m").click(function () { // menu 2
    const feature_mId = $("#_feature_m")[0];
    feature_mId.scrollIntoView({ behavior: "smooth" });
  });
  $("#_toprice_m").click(function () { // menu 3
    const price_mId = $("#_price_m")[0];
    price_mId.scrollIntoView({ behavior: "smooth" });
  });
  $("#_toguide_m").click(function () { // menu 3
    const guide_mId = $("#_guide_m")[0];
    guide_mId.scrollIntoView({ behavior: "smooth" });
  });

  $("#_toreviews_m").click(function () { // menu 4
    const reviews_mId = $("#_reviews_m")[0];
    reviews_mId.scrollIntoView({ behavior: "smooth" });
  });
  $("#_tofaq_m").click(function () { // menu 5
    const faq_mId = $("#_faq_m")[0];
    faq_mId.scrollIntoView({ behavior: "smooth" });
  });
  //
  $("#_to_dk_mb").click(function () { // menu 5
    const faq_mId = $("#_price_m")[0];
    faq_mId.scrollIntoView({ behavior: "smooth" });
  });
  
  $("#btn_trai_nghiem_m").click(function () {// menu 1
    const service_mId = $("#_service_m")[0];
    service_mId.scrollIntoView({ behavior: "smooth" });
  });
});

// Accordion (section 4): Một ứng dụng duy nhất bảo vệ cùng lúc nhiều thiết bị
(function ($) {
  $(document).ready(function () {
    $(document).on('click', '.animated-accordion .accordion-sections li .acc-title', function (e) {
      e.preventDefault();
      var toggle = $(this);
      var parent = $(this).closest('li');
      var section = $(this).closest('.animated-accordion')
      if (!parent.is('.active')) {
        var new_image = parent.attr('data-index');
        var image_section = section.find('.accordion-image-wrap');
        image_section.find('.active').removeClass('active');
        image_section.find('.image-slide[data-index=' + parent.attr('data-index') + ']').addClass('active');

        section.find('.accordion-sections .active').removeClass('active').find('.acc-content').slideUp(100);//400
        parent.addClass('active').find('.acc-content').slideDown(100);//400

      }

    });
  });
})(jQuery);

// Faq-show
if ($("._item_fsgo").length) {
  let $item = $('._item_fsgo');
  $item.click(function (e) {
    //   console.log('click');
    let $current = $(this);
    e.preventDefault()
    e.stopPropagation()
    $item.removeClass('show-faq-fs')
    $current.addClass('show-faq-fs')
    $current.find('input').prop('checked', true);
  });
}

$(document).ready(function () {
  // ***** popup form google
/*
  $("#bkgOverlay").delay(4900).fadeIn(400);
  $("#delayedPopup").delay(5000).fadeIn(400);
*/
  //Hide dialouge and background when the user clicks the close button
  /*
  $("#btnClose").click(function (e) {
      HideDialog();
      e.preventDefault();
  });
  $(".backgroundOverlay").click(function (e) {
      HideDialog();
      e.preventDefault();
  });
  */
});
//Controls how the modal popup is closed with the close button
/*
function HideDialog() {
  $("#bkgOverlay").fadeOut(400);
  $("#delayedPopup").fadeOut(300);
}
*/