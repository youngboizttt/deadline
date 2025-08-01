let currentSec = 1;
let currentImg = 1;
let isAnimating = false;
let isCardClickLoadIndex = 0;

$(document).ready(function () {
  
  $('body').on('mousewheel DOMMouseScroll', function (e) {
    // Kiểm tra xem có nên kích hoạt chức năng không
    // if (!isFunctionEnabled) return;

    if (typeof e.originalEvent.detail == 'number' && e.originalEvent.detail !== 0) {
      if (e.originalEvent.detail > 0) {
        if (!isAnimating) mouseDown();
      } else if (e.originalEvent.detail < 0) {
        if (!isAnimating) mouseUp();
      }
    } else if (typeof e.originalEvent.wheelDelta == 'number') {
      if (e.originalEvent.wheelDelta < 0) {
        if (!isAnimating) mouseDown();
      } else if (e.originalEvent.wheelDelta > 0) {
        if (!isAnimating) mouseUp();
      }
    }
  });



});

function mouseDown() {
  if (currentSec != 11) { // currentSec != 12 => số section có trong landing page //article id="art12"
    // xử lý khi scroll từng section ------------------
    isAnimating = true;
    currentSec++;

    if (isCardClickLoadIndex) {
      currentSec = isCardClickLoadIndex;
    }

    if (currentSec != 1) {
      $("#sec" + currentSec).css("top", "0px").removeClass('animate-on-scroll').addClass('animate-on-scroll'); //.css("top","-150px") //location section
    }

    $("#sec" + currentSec).css("top", "0px").addClass('animate-on-scroll');
    if ($("#sec" + currentSec).hasClass("change")) {
      currentImg++;

      if (isCardClickLoadIndex) {
        currentImg = isCardClickLoadIndex;

        if (isCardClickLoadIndex == 4){
          //Nếu click vào thẻ bạc

          // Load trước section 2
          $(".s2-img1").addClass('_js_s2_animate_img1');
          $(".s2-img2").addClass('_js_s2_animate_img2');
          $(".s2-img3").addClass('_js_s2_animate_img3');
          $(".s2-img4").addClass('_js_s2_animate_img4');
          $(".sec2-right-bg").addClass('sec-2bg--animate');
          $("#sec2").css("top", "0px").addClass('animate-on-scroll');

          $("#art2").css("top", "0px").removeClass('animate-on-scroll').addClass('animate-on-scroll');
          $("#art1").css("top", "0px").removeClass('animate-on-scroll');

          // Load trước section 3
          $(".s3-img1").addClass('_js_s3_animate_img1');
          $(".s3-img2").addClass('_js_s3_animate_img2');
          $(".s3-img3").addClass('_js_s3_animate_img3');
          $(".s3-img4").addClass('_js_s3_animate_img4');
          $(".sec3-right-bg").addClass('sec-3bg--animate');
          $("#sec3").css("top", "0px").addClass('animate-on-scroll');

          $("#art3").css("top", "0px").removeClass('animate-on-scroll').addClass('animate-on-scroll');
          $("#art2").css("top", "0px").removeClass('animate-on-scroll');
        }

        if (isCardClickLoadIndex == 5){
          //Nếu click vào thẻ vàng

          // Load trước section 2
          $(".s2-img1").addClass('_js_s2_animate_img1');
          $(".s2-img2").addClass('_js_s2_animate_img2');
          $(".s2-img3").addClass('_js_s2_animate_img3');
          $(".s2-img4").addClass('_js_s2_animate_img4');
          $(".sec2-right-bg").addClass('sec-2bg--animate');
          $("#sec2").css("top", "0px").addClass('animate-on-scroll');

          $("#art2").css("top", "0px").removeClass('animate-on-scroll').addClass('animate-on-scroll');
          $("#art1").css("top", "0px").removeClass('animate-on-scroll');

          // Load trước section 3
          $(".s3-img1").addClass('_js_s3_animate_img1');
          $(".s3-img2").addClass('_js_s3_animate_img2');
          $(".s3-img3").addClass('_js_s3_animate_img3');
          $(".s3-img4").addClass('_js_s3_animate_img4');
          $(".sec3-right-bg").addClass('sec-3bg--animate');
          $("#sec3").css("top", "0px").addClass('animate-on-scroll');

          $("#art3").css("top", "0px").removeClass('animate-on-scroll').addClass('animate-on-scroll');
          $("#art2").css("top", "0px").removeClass('animate-on-scroll');

          // Load trước section 4
          $(".s4-img1").addClass('_js_s4_animate_img1');
          $(".sec4-right-bg").addClass('sec-4bg--animate');
          $("#sec4").css("top", "0px").addClass('animate-on-scroll');

          $("#art4").css("top", "0px").removeClass('animate-on-scroll').addClass('animate-on-scroll');
          $("#art3").css("top", "0px").removeClass('animate-on-scroll');
        }

        if (isCardClickLoadIndex == 6){
          //Nếu click vào thẻ bạch kim

          // Load trước section 2
          $(".s2-img1").addClass('_js_s2_animate_img1');
          $(".s2-img2").addClass('_js_s2_animate_img2');
          $(".s2-img3").addClass('_js_s2_animate_img3');
          $(".s2-img4").addClass('_js_s2_animate_img4');
          $(".sec2-right-bg").addClass('sec-2bg--animate');
          $("#sec2").css("top", "0px").addClass('animate-on-scroll');

          $("#art2").css("top", "0px").removeClass('animate-on-scroll').addClass('animate-on-scroll');
          $("#art1").css("top", "0px").removeClass('animate-on-scroll');

          // Load trước section 3
          $(".s3-img1").addClass('_js_s3_animate_img1');
          $(".s3-img2").addClass('_js_s3_animate_img2');
          $(".s3-img3").addClass('_js_s3_animate_img3');
          $(".s3-img4").addClass('_js_s3_animate_img4');
          $(".sec3-right-bg").addClass('sec-3bg--animate');
          $("#sec3").css("top", "0px").addClass('animate-on-scroll');

          $("#art3").css("top", "0px").removeClass('animate-on-scroll').addClass('animate-on-scroll');
          $("#art2").css("top", "0px").removeClass('animate-on-scroll');

          // Load trước section 4
          $(".s4-img1").addClass('_js_s4_animate_img1');
          $(".sec4-right-bg").addClass('sec-4bg--animate');
          $("#sec4").css("top", "0px").addClass('animate-on-scroll');

          $("#art4").css("top", "0px").removeClass('animate-on-scroll').addClass('animate-on-scroll');
          $("#art3").css("top", "0px").removeClass('animate-on-scroll');

          // Load trước section 5
          $(".s5-img1").addClass('_js_s5_animate_img1');
          $(".sec5-right-bg").addClass('sec-5bg--animate');
          $("#sec5").css("top", "0px").addClass('animate-on-scroll');

          $("#art5").css("top", "0px").removeClass('animate-on-scroll').addClass('animate-on-scroll');
          $("#art4").css("top", "0px").removeClass('animate-on-scroll');
        }

        if (isCardClickLoadIndex == 7){
          //Nếu click vào thẻ kim cương

          // Load trước section 2
          $(".s2-img1").addClass('_js_s2_animate_img1');
          $(".s2-img2").addClass('_js_s2_animate_img2');
          $(".s2-img3").addClass('_js_s2_animate_img3');
          $(".s2-img4").addClass('_js_s2_animate_img4');
          $(".sec2-right-bg").addClass('sec-2bg--animate');
          $("#sec2").css("top", "0px").addClass('animate-on-scroll');

          $("#art2").css("top", "0px").removeClass('animate-on-scroll').addClass('animate-on-scroll');
          $("#art1").css("top", "0px").removeClass('animate-on-scroll');

          // Load trước section 3
          $(".s3-img1").addClass('_js_s3_animate_img1');
          $(".s3-img2").addClass('_js_s3_animate_img2');
          $(".s3-img3").addClass('_js_s3_animate_img3');
          $(".s3-img4").addClass('_js_s3_animate_img4');
          $(".sec3-right-bg").addClass('sec-3bg--animate');
          $("#sec3").css("top", "0px").addClass('animate-on-scroll');

          $("#art3").css("top", "0px").removeClass('animate-on-scroll').addClass('animate-on-scroll');
          $("#art2").css("top", "0px").removeClass('animate-on-scroll');

          // Load trước section 4
          $(".s4-img1").addClass('_js_s4_animate_img1');
          $(".sec4-right-bg").addClass('sec-4bg--animate');
          $("#sec4").css("top", "0px").addClass('animate-on-scroll');

          $("#art4").css("top", "0px").removeClass('animate-on-scroll').addClass('animate-on-scroll');
          $("#art3").css("top", "0px").removeClass('animate-on-scroll');

          // Load trước section 5
          $(".s5-img1").addClass('_js_s5_animate_img1');
          $(".sec5-right-bg").addClass('sec-5bg--animate');
          $("#sec5").css("top", "0px").addClass('animate-on-scroll');

          $("#art5").css("top", "0px").removeClass('animate-on-scroll').addClass('animate-on-scroll');
          $("#art4").css("top", "0px").removeClass('animate-on-scroll');

          // Load trước section 6
          $(".s6-img1").addClass('_js_s6_animate_img1');
          $(".sec6-right-bg").addClass('sec-6bg--animate');
          $("#sec6").css("top", "0px").addClass('animate-on-scroll');

          $("#art6").css("top", "0px").removeClass('animate-on-scroll').addClass('animate-on-scroll');
          $("#art5").css("top", "0px").removeClass('animate-on-scroll');
        }
      }

      $("#art" + currentImg).css("top", "0px").removeClass('animate-on-scroll').addClass('animate-on-scroll');
      // $(".s2-img4").removeClass('_js_s2_animate_img4');
      if (currentImg != 1) {
        $("#art" + (currentImg - 1)).css("top", "0px").removeClass('animate-on-scroll'); //.css("top","-150px")
      }

      // section 2 (Giới thiệu) ------------------
      if ($(".sec2-right").hasClass("animate-on-scroll")) {
        // alert('xuong');
        $(".s2-img1").addClass('_js_s2_animate_img1');
        $(".s2-img2").addClass('_js_s2_animate_img2');
        $(".s2-img3").addClass('_js_s2_animate_img3');
        $(".s2-img4").addClass('_js_s2_animate_img4');

        $(".sec2-right-bg").addClass('sec-2bg--animate');
      }
      
      // section 3 (Quyền lợi hội viên) ------------------
      if ($(".sec3-right").hasClass("animate-on-scroll")) {
        // alert('xuong');
        $(".s3-img1").addClass('_js_s3_animate_img1');
        $(".s3-img2").addClass('_js_s3_animate_img2');
        $(".s3-img3").addClass('_js_s3_animate_img3');
        $(".s3-img4").addClass('_js_s3_animate_img4');

        $(".sec3-right-bg").addClass('sec-3bg--animate');
      }

      // section 4 ------------------
      if ($(".sec4-right").hasClass("animate-on-scroll")) {
        $(".s4-img1").addClass('_js_s4_animate_img1');
        $(".sec4-right-bg").addClass('sec-4bg--animate');
      }

      // section 5 ------------------
      if ($(".sec5-right").hasClass("animate-on-scroll")) {
        $(".s5-img1").addClass('_js_s5_animate_img1');

        $(".sec5-right-bg").addClass('sec-5bg--animate');
      }

      // section 6 ------------------
      if ($(".sec6-right").hasClass("animate-on-scroll")) {
        $(".s6-img1").addClass('_js_s6_animate_img1');
        $(".sec6-right-bg").addClass('sec-6bg--animate');
      }

      // section 7 ------------------
      if ($(".sec7-right").hasClass("animate-on-scroll")) {
        $(".s7-img1").addClass('_js_s7_animate_img1');

        $(".sec7-right-bg").addClass('sec-7bg--animate');
      }

      // section 8: scroll image ------------------
      if ($(".art8").hasClass("animate-on-scroll")) {
        $(".gallery").addClass('show-block');
      }

      // section 9 // 2 section child ------------------
      if ($(".sec9-right2").hasClass("animate-on-scroll")) { 
        //.sec9-right << lúc trước có 2 div con ở section 9 nên dùng .sec9-right. PO bỏ div đầu tiên nên phải đổi thành .sec9-right2
        // $(".sec9-right-bg").addClass('sec-9bg--animate');
        $(".sec9-right2-bg").addClass('sec-9bg2--animate');

        // $(".s9-img1").addClass('_js_s9_animate_img1');
        // $(".s9-img2").addClass('_js_s9_animate_img2');
        // $(".s9-img3").addClass('_js_s9_animate_img3');
      }

      // section 2 (Giới thiệu) ------------------
      

    }

    isCardClickLoadIndex = 0;
    setTimeout(function () {
      isAnimating = false;
      }, 1400); //700
  }
}

function mouseUp() {

  //Load trước sec 2, fix lỗi hiển thị KH thân thiết mờ ở sec 1
  $("#art2").addClass('animate-on-scroll');

  $("#art" + (currentSec - 1)).addClass('animate-on-scroll'); // scroll up then add class animate-on-scroll to 
  // #sec: top = 2
  if (currentSec != 1) {
    isAnimating = true;
    $("#sec" + (currentSec - 1)).css("top", "0px").addClass('animate-on-scroll');
    $("#sec" + currentSec).css("top", "100vh").removeClass('animate-on-scroll');

    // section 2
    $(".s2-img1").removeClass('_js_s2_animate_img1');
    $(".s2-img2").removeClass('_js_s2_animate_img2');
    $(".s2-img3").removeClass('_js_s2_animate_img3');
    $(".s2-img4").removeClass('_js_s2_animate_img4');
    $(".sec2-right-bg").removeClass('sec-2bg--animate');

    // section 3
    $(".s3-img1").removeClass('_js_s3_animate_img1');
    $(".s3-img2").removeClass('_js_s3_animate_img2');
    $(".s3-img3").removeClass('_js_s3_animate_img3');
    $(".s3-img4").removeClass('_js_s3_animate_img4');
    $(".sec3-right-bg").removeClass('sec-3bg--animate');

    // section 4
    $(".s4-img1").removeClass('_js_s4_animate_img1');
    $(".sec4-right-bg").removeClass('sec-4bg--animate');

    // section 5
    $(".s5-img1").removeClass('_js_s5_animate_img1');
    $(".sec5-right-bg").removeClass('sec-5bg--animate');

    // section 6
    $(".s6-img1").removeClass('_js_s6_animate_img1');
    $(".sec6-right-bg").removeClass('sec-6bg--animate');

    // section 7
    $(".s7-img1").removeClass('_js_s7_animate_img1');
    $(".sec7-right-bg").removeClass('sec-7bg--animate');

    // section 8: scroll image ------------------
    $(".gallery").removeClass('show-block');

    // section 9 // 2 section child
    /*
    $(".sec9-right-bg").removeClass('sec-9bg--animate');
    $(".sec9-right2-bg").removeClass('sec-9bg2--animate');
    */

    // $(".s9-img1").removeClass('_js_s9_animate_img1');
    // $(".s9-img2").removeClass('_js_s9_animate_img2');
    // $(".s9-img3").removeClass('_js_s9_animate_img3');



    if ($("#sec" + currentSec).hasClass("change")) {
      $("#art" + currentImg).css("top", "100vh").removeClass('animate-on-scroll');

      $("#art" + (currentImg - 1)).css("top", "0");
      currentImg--;

      // section 2 ------------------
      if ($(".sec2-right").hasClass("animate-on-scroll")) {
        $(".s2-img1").addClass('_js_s2_animate_img1');
        $(".s2-img2").addClass('_js_s2_animate_img2');
        $(".s2-img3").addClass('_js_s2_animate_img3');
        $(".s2-img4").addClass('_js_s2_animate_img4');

        $(".sec2-right-bg").addClass('sec-2bg--animate');
      }

      // section 3 ------------------
      if ($(".sec3-right").hasClass("animate-on-scroll")) {
        $(".s3-img1").addClass('_js_s3_animate_img1');
        $(".s3-img2").addClass('_js_s3_animate_img2');
        $(".s3-img3").addClass('_js_s3_animate_img3');
        $(".s3-img4").addClass('_js_s3_animate_img4');

        $(".sec3-right-bg").addClass('sec-3bg--animate');
      }
      // section 4 ------------------
      if ($(".sec4-right").hasClass("animate-on-scroll")) {
        $(".s4-img1").addClass('_js_s4_animate_img1');
        $(".sec4-right-bg").addClass('sec-4bg--animate');
      }
      // section 5 ------------------
      if ($(".sec5-right").hasClass("animate-on-scroll")) {
        $(".s5-img1").addClass('_js_s5_animate_img1');
        $(".sec5-right-bg").addClass('sec-5bg--animate');
      }
      // section 6 ------------------
      if ($(".sec6-right").hasClass("animate-on-scroll")) {
        $(".s6-img1").addClass('_js_s6_animate_img1');
        $(".sec6-right-bg").addClass('sec-6bg--animate');
      }

      // section 7 ------------------
      if ($(".sec7-right").hasClass("animate-on-scroll")) {
        $(".s7-img1").addClass('_js_s7_animate_img1');
        $(".sec7-right-bg").addClass('sec-7bg--animate');
      }

      // section 8: scroll image ------------------
      if ($(".art8").hasClass("animate-on-scroll")) {
        $(".gallery").addClass('show-block');
      }

      // section 9 ------------------
      if ($(".sec9-right2").hasClass("animate-on-scroll")) { 
        //.sec9-right << lúc trước có 2 div con ở section 9 nên dùng .sec9-right. PO bỏ div đầu tiên nên phải đổi thành .sec9-right2
        // $(".sec9-right-bg").addClass('sec-9bg--animate');
        $(".sec9-right2-bg").addClass('sec-9bg2--animate');

        // $(".s9-img1").addClass('_js_s9_animate_img1');
        // $(".s9-img2").addClass('_js_s9_animate_img2');
        // $(".s9-img3").addClass('_js_s9_animate_img3');
      }

    }

    currentSec--;
    setTimeout(function () { isAnimating = false;}, 1400); //700
  }

} //end mouseUp

// click show popup
$(function(){
  $("._jsshow").click(function(){
    $(".wrapper-popup").fadeIn("200");
  })
  $(".wrapper-popup,.close-popup").click(function(){
    $(".wrapper-popup").fadeOut("200");
  })
  $(".contents-popup").click(function(e){
    e.stopPropagation();
  });
});



//////////////////////// Open modal when button is clicked
$(document).ready(function () {
  $(".open-modal").mouseover(function () { 
    var modalId = $(this).data("modal-id"); 
    $("#" + modalId).fadeIn("200");
    // $("#" + modalId).show(); // Show modal
  });

  // Close modal when close button or outside modal is clicked
  $(".modal .close, .modal").click(function () {
    $(".modal").fadeOut("200");// thay doi phuong thuc hide thanh fadeOut
    // $(".modal").hide(); // Hide modal
  });

  $(".modal .modal-content").click(function (event) {
    event.stopPropagation();
  });
});

// button scroll to
$("#to-section2").click(function () {
  mouseDown();
});

function handleTagClick(index) {
  isCardClickLoadIndex = index;
  mouseDown();
}

$(".silver-card").click(function () {
  handleTagClick(4); // Bạc
});

$(".gold-card").click(function () {
  handleTagClick(5); // Vàng
});

$(".platinum-card").click(function () {
  handleTagClick(6); // Bạch kim
});

$(".diamond-card").click(function () {
  handleTagClick(7); // Kim cương
});