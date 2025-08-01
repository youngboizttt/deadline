$(document).ready(function() {
  $(".set-accor > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
      .siblings(".content-accor")
      .slideUp(100);
      $(".set-accor > a i")
      .removeClass("fa-minus")
      .addClass("fa-plus");
  } else {
      $(".set-accor > a i")
      .removeClass("fa-minus")
      .addClass("fa-plus");
      $(this)
      .find("i")
      .removeClass("fa-plus")
      .addClass("fa-minus");
      $(".set-accor > a").removeClass("active");
      $(this).addClass("active");
      $(".content-accor").slideUp(100);
      $(this)
      .siblings(".content-accor")
      .slideDown(100);
  }
});
});