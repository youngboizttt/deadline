<!DOCTYPE html>

<html>
    <head>
        <title>Hi FPT</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Hi FPT">
        <script>

                var appAndroidDeepLink = 'com.rad.hifpt://';
                var appiOSDeepLink = 'rad.ftel.hi-fpt://';
                var appWebUrl = 'https://hi.fpt.vn';
                var appGooglePlayUrl = 'https://play.google.com/store/apps/details?id=com.rad.hifpt';
                var appAppStoreUrl = 'https://itunes.apple.com/vn/app/hi-fpt/id1144417173';

                var isIOS = navigator.userAgent.match(/iPhone|iPad|iPod/i) ? 1 : 0;
                var isAndroid = navigator.userAgent.match(/Android/i) ? 1 : 0;

                if (isIOS || isAndroid) {

                    if (isIOS) {
                        var appUrl = appAppStoreUrl;
                    } else {
                        var appUrl = appGooglePlayUrl;
                    }

                    if (isIOS) {
                        window.location.replace(appiOSDeepLink);
                        setTimeout(function () {
                            window.location.replace(appAppStoreUrl);
                        }, 1000);
                    } else {
                        window.location.replace(appAndroidDeepLink);
                        setTimeout(function () {
                            window.location.replace(appGooglePlayUrl);
                        }, 1000);
                    }

                } else {
                    window.location.replace(appWebUrl);
                }

        </script>
    </head>
    <body>

    </body>
    </html>