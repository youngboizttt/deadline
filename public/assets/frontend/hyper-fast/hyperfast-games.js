const itemsData = window.APP_DATA?.itemsData || [];

function getResponsiveGutter() {
	const width = window.innerWidth;
	if (width <= 767) return 17;
	if (width <= 992) return 24;
	return 30;
}
var responsiveIsotope = [
	[767, 6],
	[992, 12]
];


jQuery(document).ready(function ($) {
    new LazyLoad({
        elements_selector: ".lazy",
        threshold: 200,
        effect: "fadeIn",
    });

    var itemSelector = '.grid-item'; 
    var $win = $(window);
    
    $option = {
        itemSelector: itemSelector,
        layoutMode: 'masonry',
        percentPosition: true,
        masonry: {
            columnWidth: itemSelector,
            gutter: getResponsiveGutter()
              //isFitWidth: true
        },
        // fitRows: {
        // 	gutter: 30 // khoảng cách giữa item
        // },
        getSortData: {
            view: item => Number($(item).data('view') || 0),
            play: item => Number($(item).data('play') || 0),
            title: item => ($(item).data('title') || '').toLowerCase()
        },
        sortAscending: {
            view: false,
            play: false,
            title: true
        },
        sortBy: sortByValue,
        filter: '.is-visible',
    };

    var $container = $('#grid-container').isotope($option);
        
    var itemsPerPageDefault = 18;
    var itemsPerPage = defineItemsPerPage();
    var currentNumberPages = 1;
    var currentPage = 1;
    var currentFilter = '*';
    var filterAtribute = 'data-category';
    var pageAtribute = 'data-page';
    var pagerClass = 'isotope-pager';
    var sortByValue = 'view';
    var searchText = '';
    const elSearch = $('#games-search-input');

    function defineItemsPerPage() {
        var pages = itemsPerPageDefault;
        for (var i = 0; i < responsiveIsotope.length; i++) {
            if ($(window).width() <= responsiveIsotope[i][0]) {
                pages = responsiveIsotope[i][1];
                break;
            }
        }
        return pages;
    }

    function countItem(){
        var visibleItems = $container.isotope('getFilteredItemElements');
        return visibleItems.length;
    }

    function changeFilter() {
        $container.isotope({
            sortBy: sortByValue,
            filter: function () {
                const $item = $(this);
                const itemFilter = $item.attr(filterAtribute);
                const itemPage = $item.attr(pageAtribute);
                const title = ($item.attr('data-title') || '').toLowerCase();
                const category = ($item.attr(filterAtribute) || '').toLowerCase();

                const matchesFilter = (currentFilter === '*' || itemFilter === currentFilter);
                const matchesPage = (itemPage == currentPage);
                const matchesSearch = (
                    searchText === '' ||
                    title.includes(searchText) ||
                    category.includes(searchText)
                );

                return matchesFilter && matchesPage && matchesSearch;
            }
        });
        let notfound = $('.hyperfast-games .not-found');
        let pager = $('.hyperfast-games .hyperfast-pagination');
        let itemLenght = countItem();
        if(notfound.length>0){
            if(itemLenght === 0){
                notfound.addClass('show');
                
            }else{
                notfound.removeClass('show'); 
            }
        }
        if(pager.length>0){
            if(currentNumberPages < 2){
                pager.addClass('hidden');
            }else{
                pager.removeClass('hidden');
            }
        }
    }

    function goToPage(n, animate = false) {
        currentPage = n;
        $('.' + pagerClass + ' .pager').removeClass('active');
        $('.' + pagerClass + ' .pager[data-page="' + currentPage + '"]').addClass('active');

        var prevBtn = $('.hyperfast-pagination .arrow-left');
        var nextBtn = $('.hyperfast-pagination .arrow-right');
        var animated = animate;

        if (prevBtn && nextBtn) {
            if (currentNumberPages < 2) {
                prevBtn.addClass('disabled');
                nextBtn.addClass('disabled');
            } else {
                prevBtn.toggleClass('disabled', currentPage == 1);
                nextBtn.toggleClass('disabled', currentPage == currentNumberPages);
            }
            prevBtn.data('page', currentPage - 1);
            nextBtn.data('page', currentPage + 1);
        }

        // 
        if (animated) {
            $('html, body').animate({
                scrollTop: $('#grid-container').offset().top - 200
            }, 800); // 800ms là thời gian cuộn
        }
        
        changeFilter();
    }

    function setPagination() {
        var itemsLength = $container.children(itemSelector).length;
        var pages = 1;
        var item = 1;
        var page = 1;

        $container.children(itemSelector).each(function () {
            var $item = $(this);
            const itemFilter = $item.attr(filterAtribute);
            const title = ($item.attr('data-title') || '').toLowerCase();
            const category = (itemFilter || '').toLowerCase();
            const matchesFilter = (currentFilter === '*' || itemFilter === currentFilter);
            const matchesSearch = (
                searchText === '' ||
                title.includes(searchText) ||
                category.includes(searchText)
            );

            if (matchesFilter && matchesSearch) {
                if (item > itemsPerPage) {
                    page++;
                    item = 1;
                }
                $item.attr(pageAtribute, page);
                item++;
            } else {
                $item.attr(pageAtribute, 0);
            }
        });

        currentNumberPages = page;
        initPages(page);
    }

    function refreshPaginationAndGoFirst() {
        itemsPerPage = defineItemsPerPage();
        setPagination();
        goToPage(1);
    }

    // INIT
    refreshPaginationAndGoFirst();

    $('.filters a').click(function () {
        currentFilter = $(this).attr('data-filter');
        $('.filters a').removeClass('active');
        $(this).addClass('active');
        refreshPaginationAndGoFirst();
    });

    $(window).resize(function () {
        if ($(window).width() > 600) {
            refreshPaginationAndGoFirst();
        }
    });
    
    function renderGridItems(sortedData) {
        $container.isotope('destroy'); // Xoá isotope cũ
        $container.empty(); // Xoá item cũ
      
        sortedData.forEach(item => {
          const html = `
            <div class="grid-item" 
                 data-category="${item.game_category_id}" 
                 data-title="${item.game_name}" 
                 data-view="${item.view_count}" 
                 data-play="${item.play_count}">
              <div class="wrap-item">
                <a class="img-wrapper" href="${item.link_detail}">
                  <img class="lazy" src="${item.game_image}" 
                       alt="${item.game_name}">
                </a>
                <label class="item-category">${item.category_name}</label>
                <h2 class="item-title">${item.game_name}</h2>
              </div>
            </div>
          `;
          $container.append(html);
        });
    }
    
    $('#games-sort-select').on('change', function () {
        sortByValue = $(this).val();
        const sorted = itemsData.slice().sort((a, b) => {
            if (sortByValue === 'title') {
                return a.game_name.localeCompare(b.game_name);
            } 
            else if (sortByValue === 'view') {
                return b.view_count - a.view_count; // giảm dần theo view_count
            } 
            else if (sortByValue === 'play') {
                return b.play_count - a.play_count; // giảm dần theo play_count
            }
            return 0;
        });
        renderGridItems(sorted);
        $container.isotope($option);
        refreshPaginationAndGoFirst();
    });

    elSearch.on('keyup', function () {
        let newText = $(this).val().toLowerCase();
        if (searchText !== newText) {
            searchText = newText;
            refreshPaginationAndGoFirst();
        }
    });

    $(document).on('click', '.' + pagerClass + ' .pager', function () {
        const iPage = Number($(this).data('page'));
        initPages(iPage);
        goToPage(iPage, true);
    });
    
    $(document).on('click', '.' + pagerClass + ' .arrow-left', function () {
        const iPage = Number($(this).data('page'));
        if (iPage > 0){
            initPages(iPage);
            goToPage(iPage, true);
        }
    });
    
    $(document).on('click', '.' + pagerClass + ' .arrow-right', function () {
        const iPage = Number($(this).data('page'));
        if (iPage <= currentNumberPages){
            initPages(iPage);
            goToPage(iPage, true);
        }
    });
    
    function initPages(iPage){
        // console.log(iPage);
        
        var $isotopePager = ($('.' + pagerClass).length == 0)
            ? $('<div class="' + pagerClass + ' hyperfast-pagination"></div>')
            : $('.' + pagerClass);
        $isotopePager.empty();

        $isotopePager.attr('data-current-page', currentPage);
        $isotopePager.attr('data-last-page', currentNumberPages);

        var $prevBtn = $('<a href="javascript:void(0);" class="arrow-left" data-page="' + (currentPage - 1) + '">Trước</a>');
        // $prevBtn.click(function () {
        //     let iPage = Number($(this).data('page'));
        //     if (iPage > 0) goToPage(iPage);
        // });
        $isotopePager.append($prevBtn);

        function appendPageBtn(i) {
            var $btn = $('<a href="javascript:void(0);" class="pager" data-page="' + i + '">' + i + '</a>');
            if (i == currentPage) $btn.addClass('active');
            // $btn.click(function () {
            //     goToPage(i);
            // });
            $isotopePager.append($btn);
        }

        if (currentNumberPages > 10) {
            if (currentPage < 4) {
                for (var i = 1; i <= 4; i++) appendPageBtn(i);
                $isotopePager.append('<span class="dots">...</span>');
                appendPageBtn(currentNumberPages);
            } else if (currentPage < currentNumberPages - 2) {
                appendPageBtn(1);
                $isotopePager.append('<span class="dots">...</span>');
                appendPageBtn(currentPage - 1);
                appendPageBtn(currentPage);
                appendPageBtn(currentPage + 1);
                $isotopePager.append('<span class="dots">...</span>');
                appendPageBtn(currentNumberPages);
            } else {
                appendPageBtn(1);
                $isotopePager.append('<span class="dots">...</span>');
                for (var i = currentNumberPages - 3; i <= currentNumberPages; i++) {
                    appendPageBtn(i);
                }
            }
        } else {
            for (var i = 1; i <= currentNumberPages; i++) {
                appendPageBtn(i);
            }
        }

        var $nextBtn = $('<a href="javascript:void(0);" class="arrow-right" data-page="' + (currentPage + 1) + '">Sau</a>');
        // $nextBtn.click(function () {
        //     let iPage = Number($(this).data('page'));
        //     if (iPage <= currentNumberPages) goToPage(iPage);
        // });
        $isotopePager.append($nextBtn);

        $('.' + pagerClass).remove();
        $container.after($isotopePager);
    }
});