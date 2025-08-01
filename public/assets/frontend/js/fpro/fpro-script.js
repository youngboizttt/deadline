// equalheight ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$(window).load(function() {
    equalheight('.flex-item > div');
});
$(window).resize(function() {
    equalheight('.flex-item > div');
});

$(window).load(function() {
    equalheight('.item-quy_trinh>div');
});
$(window).resize(function() {
    equalheight('.item-quy_trinh>div');
});

$(window).load(function() {
    equalheight('.my-services>div');
});
$(window).resize(function() {
    equalheight('.my-services>div');
});

// moreless-button ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$(document).ready(function() {
    // Configure/customize these variables.
    var fpro_showChar = 170;  // How many characters are shown by default
    var fpro_ellipsestext = "...";
    var fpro_moretext = "Xem thêm";
    var fpro_lesstext = "Đóng";
    
    $('.fpro_more').each(function() {
        var fpro_content = $(this).html();
        if(fpro_content.length > fpro_showChar) {
            var c = fpro_content.substr(0, fpro_showChar);
            var h = fpro_content.substr(fpro_showChar, fpro_content.length - fpro_showChar);
 
            var html = c + '<span class="moreellipses">' + fpro_ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="fpro_morelink">' + fpro_moretext + '</a></span>';
            
            $(this).html(html);
        }
 
    });
 
    $(".fpro_morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(fpro_moretext);
        } else {
            $(this).addClass("less");
            $(this).html(fpro_lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
// owlCarousel ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
jQuery(document).ready(function($) {
    
    // slide 1
    var loops_img_du_an;
    var count_item_img_du_an = $("._item_img_du_an").length;
    // console.log(count_item_img_du_an);
    var widthsc = $(window).width();
    if (count_item_img_du_an <= 3 && widthsc >= 1024) {
        loops_img_du_an = false;
    } else loops_img_du_an = true;

    $('#owl_vienthong_dien').owlCarousel({
        loop: true,
        center: false,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        nav: true,
        autoplayTimeout: 5500, //8500
        smartSpeed: 250, //450
        navigation : true,
        navText: ['<i class="owl_pre_vt_dien"></i>', '<i class="owl_next_vt_dien"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1024: {
                items: 1
            },
            1170: {
                items: 1
            }
        }
    });
    if (count_item_img_du_an == 3 && widthsc > 1024) {
        // $("#owl_vienthong_dien .owl-stage").addClass('add_mgl')
    }
    if (count_item_img_du_an <= 2 && widthsc > 1024) {
        // $("#owl_vienthong_dien .owl-stage").addClass('add_mgl_2item')
    } else if (count_item_img_du_an <= 3 && widthsc <= 1024) {
        // $("#owl_vienthong_dien .owl-stage").addClass('remove_mgl')
    }
    // end slide 1


    // slide 2
    var loops_img_dn;
    var count_item_my_proj = $("._item_my_proj").length;
    // console.log(count_item_my_proj);
    var widthsc = $(window).width();
    if (count_item_my_proj <= 3 && widthsc >= 1024) {
        loops_img_dn = false;
    } else loops_img_dn = true;

    $('#owl_my_project_fpro').owlCarousel({
        loop: true,
        // center: false,
        center: true,// set item center
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        nav: true,
        autoplayTimeout: 4500, //8500
        smartSpeed: 250, //450
        navText: ['<i class="owl_pre_vt_dien"></i>', '<i class="owl_next_vt_dien"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1366: {
                items: 4
            },
            1600: {
                items: 5
            },
            2560: {
                items: 6
            }
        }
    });
    // end slide 2

    var loops_img_fpro_banner;
    var count_item_fpro_banner = $("._item_fpro_banner").length;
    // console.log(count_item_fpro_banner);
    var width_fpr_bn = $(window).width();
    if (count_item_fpro_banner <= 3 && width_fpr_bn >= 1024) {
        loops_img_fpro_banner = false;
    } else loops_img_fpro_banner = true;

    $('#owl_fpro_banner').owlCarousel({
        loop: true,
        center: false,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        nav: true,
        autoplayTimeout: 5000, //8500
        smartSpeed: 250, //450
        navigation : true,
        navText: ['<i class="owl_pre_bn_fpro"></i>', '<i class="owl_next_bn_fpro"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1024: {
                items: 1
            },
            1170: {
                items: 1
            }
        }
    });
});

// more less-button new for hi fpt product ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/*
class ReadMore extends HTMLElement {
    constructor() {
      super();
  
      this.originalHTML = this.innerHTML;
      this.originalTextContent = this.textContent;
    }
  
    static get observedAttributes() {
      return ['limit', 'open'];
    }
    
    get less() {
      return this.getAttribute('less');
    }
    
    get more() {
      return this.getAttribute('more');
    }
  
    get limit() {
      return this.hasAttribute('limit') ? Number(this.getAttribute('limit')) : 10;
    }
  
    get isOpen() {
      return this.hasAttribute('open');
    }
  
    attributeChangedCallback(name, oldVal, newVal) {
      this.render();
    }
  
    render() {
      if (this.textContent.length > this.limit) {
  
        if (!this.isOpen) {
          // Closed
          this.innerHTML = `
            <p>
              ${this.originalTextContent.trim().slice(0, this.limit)}&hellip;
              <button type="button">${this.more}</button>
            </p>
          `;
        } else {
          // Open
          this.innerHTML = this.originalHTML;
          this.querySelector('p:last-child').innerHTML = `
            ${this.querySelector('p:last-child').innerHTML}
            <button type="button">${this.less}</button>
          `;
        };
  
        this.querySelector('button')?.addEventListener('click', this.toggle.bind(this));
      }
    }
  
    toggle(event) {
  
      this.toggleAttribute('open');
    }
  }
  
  customElements.define('read-more', ReadMore);
*/
// end more less-button new ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
