$(document).ready(function () {
    toggle_video_modal();
    
    
});


/* Toggle Video Modal
-----------------------------------------*/
function toggle_video_modal() {

    // Click on video thumbnail or link
    $(".js-trigger-video-modal").on("click", function (e) {

        alert('fsknfsf');
        // prevent default behavior for a-tags, button tags, etc. 
        e.preventDefault();

        // Grab the video ID from the element clicked
        var id = $(this).attr('data-youtube-id');

        // Autoplay when the modal appears
        // Note: this is intetnionally disabled on most mobile devices
        // If critical on mobile, then some alternate method is needed
        var autoplay = '?autoplay=1'; // atoplay = 1 -> mute = 1 //  atoplay = 0 -> mute = 0 
        var mute = '&mute=1';
        // Don't show the 'Related Videos' view when the video ends
        var related_no = '&rel=0';

        // String the ID and param variables together
        var src = '//www.youtube.com/embed/' + id + autoplay + mute + related_no;

        // Pass the YouTube video ID into the iframe template...
        // Set the source on the iframe to match the video ID
        $("#youtube").attr('src', src);

        // Add class to the body to visually reveal the modal
        $("body").addClass("show-video-modal noscroll");

    });

    
    // if the 'close' button/element, or the overlay are clicked 
    $('body').on('click', '.close-video-modal, .video-modal .overlay', function (event) {

        // call the close and reset function
        close_video_modal();

    });
    // if the ESC key is tapped
    $('body').keyup(function (e) {
        // ESC key maps to keycode `27`
        if (e.keyCode == 27) {

            // call the close and reset function
            close_video_modal();

        }
    });
}


// Close and Reset the Video Modal
function close_video_modal() {

    event.preventDefault();

    // re-hide the video modal
    $("body").removeClass("show-video-modal noscroll");

    // reset the source attribute for the iframe template, kills the video
    $("#youtube").attr('src', '');

}

function playVideoYoutube(obj){// ko dùng hàm này
    
    // Grab the video ID from the element clicked
    var id = $(obj).attr('data-youtube-id');

    // Autoplay when the modal appears
    // Note: this is intetnionally disabled on most mobile devices
    // If critical on mobile, then some alternate method is needed
    var autoplay = '?autoplay=1'; // atoplay = 1 -> mute = 1 //  atoplay = 0 -> mute = 0 
    var mute = '&mute=1';
    // Don't show the 'Related Videos' view when the video ends
    var related_no = '&rel=0';

    // String the ID and param variables together
    var src = '//www.youtube.com/embed/' + id + autoplay + mute + related_no;

    // Pass the YouTube video ID into the iframe template...
    // Set the source on the iframe to match the video ID
    $("#youtube").attr('src', src);

    // Add class to the body to visually reveal the modal
    $("body").addClass("show-video-modal noscroll");

    
}