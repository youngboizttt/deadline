$(document).ready(function () {
    $("img.lazyload").lazyload({
      effect: "fadeIn",
      effectTime: 2000, // Tăng thời gian fadeIn (1000ms = 1 giây)
      threshold: 900 // 200: Load image sớm hơn khi gần đến vùng của image
    });

    // LazyLoad khi có scroll ngang
    var $horizontalScroll = $(".horizontal_scrolls");
    if ($horizontalScroll.length > 0) {
        $horizontalScroll.on("scroll", function () {
            $("img.lazyload").trigger("appear"); 
        });
    }

  });