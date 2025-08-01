var playlist = {
    loadMore: function() {

        var category = $('#category_alias').val();
        var page = $('#page').val();
        var url = $('#url').val();
        var data = {
            page: page,
            category: category
        };

        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            success: function(response) {
                
                if (response.error_code == 0) {

                    page = parseInt($('#page').val(), 10) + 1;
                    var count = response.count;
                    if(count < 8){
                        
                        $('#playlist-videos-loadmore').prop('disabled', true);
                    }

                    $('#page').val(page);
                    $('#playlist-videos').append(response.data);

                    if(response.data == ""){
                       
                        $('#playlist-videos-loadmore').prop('disabled', true);
                    }
                }else{
                    $
                    $('#playlist-videos-loadmore').prop('disabled', true);
                }
            },
            error: function(err) {
                
                $('#playlist-videos-loadmore').prop('disabled', true);
                console.log(err);
            }
        });
    },
}