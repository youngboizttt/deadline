
function generatePseudoUUID() {

    let v =localStorage.getItem('tokenDeviceId');
    if(v && v!=='undefined'){
        return localStorage.getItem('tokenDeviceId');
    }else{

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
    }
  }
  
 

function generateSessionId() {
    let v =sessionStorage.getItem('trackingSessionId');
    if(v && v!=='undefined'){
        return sessionStorage.getItem('trackingSessionId');
    }else{
        const timestamp = Date.now().toString(16);
        const randomPart = Math.random().toString(16).substr(2, 8);
        return timestamp + randomPart;
    }
  }
  const sessionId = generateSessionId();
  const tokenDeviceId =generatePseudoUUID();
  localStorage.setItem('tokenDeviceId',tokenDeviceId);
  sessionStorage.setItem('trackingSessionId',sessionId);
        window.onload = function () {
            var targetElement = document.getElementById('target');
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        };


        function getDirectoryPath(url) {
            // Find the last occurrence of "/"
            var lastIndex = url.lastIndexOf("/");
            
            // Extract the directory path
            var directoryPath = url.substring(0, lastIndex + 1);
            
            return directoryPath;
        }

        function goto(url, id, scrollTop) {

            var span = document.getElementsByClassName("close")[0];
 modal.style.display = "none";
            let sessionId = sessionStorage.getItem('trackingSessionId');
            if (!sessionId || sessionId === 'null' || sessionId === 'undefined') {
                sessionId = `NoHaveSessionId`;
            }
            Countly?.q?.push([
                'add_event',
                {
                    key: 'action',
                    segmentation: {
                        type: 'click',
                        target_type: 'button',
                        target_id: url,
                        session_id: sessionId
                    },
                },
            ]);
   
    // Extract the directory path
    var directoryPath = getDirectoryPath(window.location.href);
    var urlFormat = url && url.includes('/') ? url.split('/')[1] : url;
    var urlHref = String(directoryPath + urlFormat);
    var listCheck  = [
        'https://safeavenue-jp.f-secure.com/',
        'https://shop.fpt.vn/',
        'https://shop.fpt.vn/fsafe-go/',
        'https://fpt.vn/',
        "https://fptsmarthome.vn",
        "https://fptplay.net",
        "https://fptcameraiq.vn",
        "http://fptplay.tv",
        "https://www.fshare.vn",
        "https://www.fsend.vn",
        "https://gioithieubanbe.fpt.vn/",
        "http://online.gov.vn/",
        "https://www.youtube.com/",
        "https://www.instagram.com/",
        "http://zalo.me/",
        "https://www.facebook.com/",
        "https://hi.fpt.vn/",
    ];
    if(scrollTop){
        sessionStorage.setItem('scrollTop','1');
    }
    setTimeout(() => {
        let targetUrl = listCheck.some(checkUrl => url.includes(checkUrl)) ? url : urlHref;
        
        if (id === 2) {
            window.open(targetUrl, '_blank');
        } else {
            window.location.href = targetUrl;
        }
    }, 400);
    }
        function openView(screen_id) {
            let sessionId = sessionStorage.getItem('trackingSessionId');
            if (!sessionId || sessionId === 'null' || sessionId === 'undefined') {
                sessionId = `NoHaveSessionId`;
            }
            Countly?.q?.push([
                'add_event',
                {
                    key: 'start_view',
                    segmentation: {
                        screen_id: 'fsafego/landingpage/'+screen_id,
                        session_id: sessionId
                    },
                },
            ]);
        }