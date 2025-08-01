$(document).ready(function () {
    // Lấy tất cả các heading trong bài viết
    //const headings = document.querySelectorAll('article h1, article h2, article h3, article h4, article h5, article h6')
    const headings = document.querySelectorAll('article h2')
    if (headings.length === 0) return

    // Khai bào nơi mà TOC sẽ được chèn vào
    const tocContainer = document.querySelector('#toc')

    // Xác định cấp độ bắt đầu của TOC (bởi vì không phải bài viết nào cũng có thẻ H1, hoặc H2)
    const startingLevel = headings[0].tagName[1]

    // Tạo TOC rỗng
    const toc = document.createElement('ul')
    toc.classList.add('catalogue-list', 'another-class');
    // Theo dõi các cấp độ heading trước đó
    const prevLevels = [0, 0, 0, 0, 0, 0]

    // Lặp qua từng heading và thêm chúng vào TOC
    for (let i = 0; i < headings.length; i++) {
        const heading = headings[i]
        const level = parseInt(heading.tagName[1])

        // Tăng các cấp độ trước đó lên đến cấp độ hiện tại
        prevLevels[level - 1]++
        for (let j = level; j < prevLevels.length; j++) {
            prevLevels[j] = 0
        }

        // Tạo số mục cho mục đó dựa trên các cấp độ trước đó
        // và loại bỏ số 0 nếu trường hợp h1 -> h3 (không có h2)
        // Sẽ tạo ra các đề mục ví dụ như:
        // 1. Heading h1a
        //     1.1 Heading h2
        // 2. Heading h1b
        //          2.1 Heading h3 (đẹp hơn 2.0.1 Heading h3)
        let sectionNumber = prevLevels.slice(startingLevel - 1, level).join('.').replace(/\.0/g, "");

        sectionNumber = ''; // gán rỗng cho number
        // Tạo ID mới và gán vào heading
        // Phải làm phần này để click vào mục lục có thể di chuyển đến được.
        const newHeadingId = `${heading.textContent.toLowerCase().replace(/ /g, '-')}`
        heading.id = newHeadingId

        // Tạo liên kết mục cho heading
        const anchor = document.createElement('a')
        anchor.setAttribute('href', `#${newHeadingId}`)
        anchor.textContent = heading.textContent

        // Thêm event listener để cuộn đến liên kết khi nhấp chuột
        anchor.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
        
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offset = 120; // khoảng cách muốn cách top
        
                window.scrollTo({
                    top: targetPosition - offset,
                    behavior: "smooth"
                });
        
                // Cập nhật URL
                history.pushState(null, null, `#${targetId}`);
            }
        });

        // Tạo thẻ <li> để thêm vào TOC
        const listItem = document.createElement('li')
        listItem.textContent = sectionNumber
        listItem.appendChild(anchor)

        // Thêm CSS class cho từng mục lục
        // Ví dụ "toc-item toc-h1", "toc-item toc-h2"
        const className = `toc-${heading.tagName.toLowerCase()}`
        listItem.classList.add('toc-item')
        listItem.classList.add(className)

        // Bỏ thẻ <li> vừa tạo vào TOC
        toc.appendChild(listItem)
    }

    // Thêm các TOC item vào toc contaner
    if(tocContainer){
        tocContainer.innerHTML = ''
        tocContainer.appendChild(toc);
    }



    // Thêm event listener cho window object để lắng nghe sự kiện scroll
    window.addEventListener('scroll', function () {
        let scroll = window.scrollY // Lấy giá trị scrollY của màn hình
        let height = window.innerHeight //Lấy chiều cao của màn hình
        let offset = 720 // 200

        headings.forEach(function (heading, index) {
            let i = index + 1
            let target = document.querySelector('#toc li:nth-of-type(' + i + ') > a') // Lấy phần tử target dựa trên số thứ tự
            let pos = heading.getBoundingClientRect().top + scroll// Lấy vị trí của heading
            if (!target) return

            // Nếu scroll lớn hơn vị trí của phần tử hiện tại trừ đi chiều cao màn hình cộng với offset
            if (scroll > pos - height + offset) { // Nếu cuộn quá vị trí của heading
                // Nếu phần tử tiếp theo tồn tại (không phải là phần tử cuối cùng)
                if (headings[index + 1] !== undefined) {
                    // Lấy vị trí của phần tử tiếp theo
                    let next_pos = headings[index + 1].getBoundingClientRect().top + scroll
                    // Nếu scroll vượt qua vị trí của phần tử tiếp theo
                    if (scroll > next_pos - height + offset) {
                        target.classList.remove('toc-active')
                    } else if (i === 1 && tocContainer.classList.contains('active') === false) { // Phần tử đầu tiên
                        target.classList.add('toc-active')
                        tocContainer.classList.add('active')
                    } else { // Nếu không có phần tử tiếp theo trong danh sách heading
                        target.classList.add('toc-active')
                    }
                } else { //Nếu là heading cuối cùng
                    target.classList.add('toc-active')
                }
            } else { // Nếu scroll không vượt qua heading
                target.classList.remove('toc-active')
                if (i === 1 && tocContainer.classList.contains('active')) { // Nếu chưa cuộn đến heading đầu tiên
                    tocContainer.classList.remove('active')
                }
            }
        })
        scrollActive()
    })

    // margin top cho block Sản phẩm liên quan ---------------------------------------------------
    function updateMarginTop() {
        const stickyChild = document.querySelector(".div_sticky_child");
        const otherProducts = document.querySelector(".other-products");
    
        if (!stickyChild || !otherProducts) return;
    
        const stickyHeight = stickyChild.offsetHeight; // Lấy độ cao của sticky
        otherProducts.style.marginTop = (stickyHeight + 0) + "px"; // Gán margin-top
        stickyChild.classList.add("opacity_1"); // mặc định opacity 0, sau khi update thì cho 1
    }
    
    // Gọi hàm khi trang load
    window.addEventListener("load", updateMarginTop);
    
    // Gọi lại hàm khi thay đổi kích thước cửa sổ (responsive)
    window.addEventListener("resize", updateMarginTop);

    // end margin top ---------------------------------------------------

    // sticky --------------------------------------------------------------
    // Hàm xử lý sticky cho màn hình lớn (> 991px)
    function handleDesktopSticky() {
        const article = document.querySelector(".article-toc");
        const tocWrap = document.querySelector(".toc-wrap");
        const mainContainer = document.querySelector(".main-toc-contain");
    
        if (!tocWrap || !article || !mainContainer) return;
    
        const articleHeight = article.offsetHeight;
        const tocHeight = tocWrap.offsetHeight;
    
        // Nếu TOC cao hơn hoặc bằng article thì bỏ sticky
        if (tocHeight >= articleHeight) {
            tocWrap.classList.remove('fixed', 'bottom');
            tocWrap.style.right = '';
            return;
        }
    
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const articleTop = article.offsetTop + 106;
        const maxFixedScroll = articleTop + articleHeight - tocHeight;
    
        if (scrollTop >= articleTop && scrollTop < maxFixedScroll) {
            tocWrap.classList.add('fixed');
            tocWrap.classList.remove('bottom');
    
            // Tính khoảng cách từ bên phải màn hình đến bên phải của container
            const containerRight = window.innerWidth - mainContainer.getBoundingClientRect().right;
            tocWrap.style.right = `${containerRight}px`;
        } else if (scrollTop >= maxFixedScroll) {
            tocWrap.classList.remove('fixed');
            tocWrap.classList.add('bottom');
            tocWrap.style.right = '';
        } else {
            tocWrap.classList.remove('fixed', 'bottom');
            tocWrap.style.right = '';
        }
    }    
    
    
    function handleDesktopStickyOld() { // Backup lại function của version trước
        const article = document.querySelector(".article-toc");
        const tocWrap = document.querySelector(".div_sticky_child");
        const toggle_chapter = document.querySelector(".toggle-chapter-list");
        const other_products = document.querySelector(".other-products");//sticky sản phẩm liên quan
        const block_share = document.querySelector(".block-share");// sticky block fb

        if (!tocWrap || !article) return;

        const articleBottom = article.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        // console.log('h' + windowHeight);


        if (window.scrollY > 150 && articleBottom > 780) { // 780 // if (window.scrollY > 350 && articleBottom > windowHeight)
            
            tocWrap.classList.add("sticky");
            tocWrap.classList.remove("bottom__0");

            toggle_chapter.classList.add("toggle_chapter_sticky");
            other_products.classList.add("other_products_sticky");
            block_share.classList.add("block_share_sticky");
        } else {
            tocWrap.classList.remove("sticky");
            tocWrap.classList.add("bottom__0");
            toggle_chapter.classList.remove("toggle_chapter_sticky");

            other_products.classList.remove("other_products_sticky");
            block_share.classList.remove("block_share_sticky");
        }
        

        if (window.scrollY <= 350) { //150
            tocWrap.classList.remove("bottom__0");
        }

        
    }

    // Hàm xử lý sticky cho màn hình nhỏ hơn hoặc bằng 991px
    /*
    function handleMobileSticky() {
        const tocWrap = document.querySelector(".div_sticky_child");

        if (!tocWrap) return;

        if (window.scrollY > 100) {
            tocWrap.classList.add("mobile-sticky");
        } else {
            tocWrap.classList.remove("mobile-sticky");
        }
    }
    */
    /**/
    function handleMobileSticky() {
        if (window.innerWidth > 991) return; // Chỉ chạy trên mobile & tablet
        
        const tocWrap = document.querySelector(".div_sticky_child");
        const articleToc = document.querySelector(".article-toc");
        const chapterList = document.querySelector(".toggle-chapter-list");
        
        if (!tocWrap || !articleToc) return;
    
        tocWrap.style.right = '';
        const articleBottom = articleToc.getBoundingClientRect().bottom; // Khoảng cách từ article đến đáy màn hình
        const windowHeight = window.innerHeight; // Chiều cao cửa sổ hiển thị
    
        if (window.scrollY > 100) {
            tocWrap.classList.add("mobile-sticky");
            tocWrap.classList.remove("mobile-no_sticky"); // Xóa nếu có

            chapterList.classList.add("chapter_list_sticky");// icon toggle
            chapterList.classList.remove("chapter_list_no_sticky");// icon toggle
        } else {
            tocWrap.classList.remove("mobile-sticky");
            tocWrap.classList.remove("mobile-no_sticky");

            chapterList.classList.remove("chapter_list_sticky");// icon toggle
            chapterList.classList.remove("chapter_list_no_sticky");// icon toggle
        }
    
        // Khi article-toc ra khỏi màn hình, chuyển sang absolute
        if (articleBottom <= windowHeight) {
            tocWrap.classList.remove("mobile-sticky");
            tocWrap.classList.add("mobile-no_sticky");

            chapterList.classList.remove("chapter_list_sticky");// icon toggle
            chapterList.classList.add("chapter_list_no_sticky");// icon toggle
        }
    }

    // nếu ko có .toc-item.toc-h2 thì cho .div_sticky display: none
    if ($(".toc-item.toc-h2").length === 0 ) {
        $('.div_sticky').addClass('display_none');
    }

    // nếu có .toc-item.toc-h2 thì cho .div_sticky display: block
    if ($(".toc-item.toc-h2").length > 0 ) {
        $('.div_sticky').addClass('display_block');
    }

    // Lắng nghe sự kiện scroll và resize
    window.addEventListener("scroll", handleMobileSticky);
    window.addEventListener("resize", handleMobileSticky);
    
    
    // -----------------------------------------------


    // Xử lý sự kiện scroll dựa trên kích thước màn hình
    function handleScroll() {
        if (window.matchMedia("(max-width: 991px)").matches) {
            handleMobileSticky(); // Màn nhỏ hơn hoặc bằng 991px
            // console.log('991')
        } else {
            handleDesktopSticky(); // Màn lớn hơn 991px
        }
    }

    // Thêm sự kiện scroll
    window.addEventListener("scroll", handleScroll);

    // Kiểm tra khi resize màn hình
    window.addEventListener("resize", handleScroll);

    // end sticky ------------------------------------------------

    



    // toggle chapter-list
    $(function() {
        $('.toggle-chapter-list').click(function() {
            $('#toc').toggle();
            $('#label_title_toc').toggle();
        });                        
    });
    // end toggle chapter-list

    function scrollActive(){
        const toc = document.querySelector('#toc');
        const activeItem = toc.querySelector('.toc-active');
      
        if (activeItem) {
            toc.scrollTop = activeItem.offsetTop - toc.offsetTop;
        }
    }

});