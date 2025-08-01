window.loadNews = function(page) {
    const newsContainer = document.getElementById('news_last_content');
    fetch(window.location.pathname+`/ajax/news-last?page=${page}`)
        .then(response => response.text())
        .then(html => {
            newsContainer.innerHTML = html;
            // $("#news_last_content img.lazyload").lazyload({
            //     effect: "fadeIn",
            //     effectTime: 2000,
            //     threshold: 200 
            // });
        });
}