// This code loads the IFrame Player API code asynchronously
const tag = document.createElement("script");
tag.src = "https://youtube.com/iframe_api";
tag.id = "youtubeScript";
const firstScriptTag = document.getElementsByTagName("script")[1];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
const videoID = document.querySelector(".video-bg-player").getAttribute("data-video");

const videoOverlay = document.querySelector(".video-bg-overlay");


// Create youtube player (function called by YouTube API)
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("video-player", {
    //videoId: "QAUzWtLMnU0", // a random clip with sound // neu dung playlist thi ko dung dong nay
    width: "100%",
    height: "100vh",
    playerVars: {
    autohide: 1,
    autoplay: 1,
    controls: 0,
    disablekb: 1,
    loop: 1,
    rel: 0,
    fs: 0,
    playlist: videoID,
    modestbranding: 1,
    rel: 0,
    showinfo: 0,
    dataautoplay: 1,
    'data-autoplay': '',
    },
    events: {
      onReady: function (e) {
        // console.log("Mute Player");
        e.target.mute();
      },
      onStateChange: function (e) {
        if (e.data === YT.PlayerState.ENDED) {
          player.playVideo();
        }
        // xu ly background cua id video
        if (e.data == YT.PlayerState.PLAYING) {
          videoOverlay.classList.add("video-bg-overlay--fadeOut");
        }


      }
    } // events
  });
} // onYouTubeIframeAPIReady

jQuery(document).ready(function ($) {
  $("#mute").click(function () {
    if (player.isMuted()) {
      player.unMute();
      // console.log("unMute Player");
      $("#mute i.vc_btn3-icon")
        .removeClass("fa-volume-mute")
        .addClass("fa-volume-up");
    } else {
      player.mute();
      // console.log("Mute Player");
      $("#mute i.vc_btn3-icon")
        .removeClass("fa-volume-up")
        .addClass("fa-volume-mute");
    } // endif
  }); // #mute
}); // ready