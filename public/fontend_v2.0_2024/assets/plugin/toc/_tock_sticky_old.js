// sticky
window.addEventListener("scroll", function () {
    // const tocWrap = document.querySelector(".toc-wrap");// sticky cũ
    const article = document.querySelector(".article-toc");

    // update lại
    const tocWrap = document.querySelector(".div_sticky_child"); // thay bằng sticky mới
    const toggle_chapter = document.querySelector(".toggle-chapter-list");;

    if (!tocWrap || !article) return;

    const articleBottom = article.getBoundingClientRect().bottom; // Khoảng cách từ article đến đáy màn hình
    const windowHeight = window.innerHeight; // Chiều cao cửa sổ hiển thị
    
    if (window.scrollY > 150 && articleBottom > windowHeight) {
        tocWrap.classList.add("sticky");
        tocWrap.classList.remove("bottom__0");

        toggle_chapter.classList.add("toggle_chapter_sticky");



    } else {
        tocWrap.classList.remove("sticky");
        tocWrap.classList.add("bottom__0");

        toggle_chapter.classList.remove("toggle_chapter_sticky");

    }
    
    if (window.scrollY <= 150) {
        tocWrap.classList.remove("bottom__0");
    }

});
// end sticky