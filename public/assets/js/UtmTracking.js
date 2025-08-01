var Utm = {

    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    utm_full_url: "",

    getUtm: function() {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.toString().length !== 0) {
            const campData = [
                'utm_source',
                'utm_medium',
                'utm_campaign',
                'utm_term',
                'utm_content'
            ];
            campData.forEach(function(param) {
                if (urlParams.has(param)) {
                    sessionStorage.setItem(param, urlParams.get(param) || '');
                    localStorage.setItem(param, urlParams.get(param) || '');
                }
            });
        }
    },
    extraTracking : function () {
        let urlParams = new URLSearchParams(window.location.search);
        let params = {};
        urlParams.forEach(function(value, key) {
            params[key] = value;
        });
        let result = {}
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                if(key.includes('utm_extra_')){
                    result[key.replace(new RegExp('utm_extra_'), '')] = params[key]
                }
            }
        }
        if(Object.keys(result).length>0){
            sessionStorage.extra_tracking = JSON.stringify(result);
            localStorage.extra_tracking = JSON.stringify(result);
        }
    },
    init : function (a) {
        this.utm_source = a.utm_source ? a.utm_source : "";
        this.utm_medium = a.utm_medium ? a.utm_medium : "";
        this.utm_campaign = a.utm_campaign ? a.utm_campaign : "";
        this.utm_term = a.utm_term ? a.utm_term : "";
        this.utm_content = a.utm_content ? a.utm_content : "";
        this.utm_full_url = a.utm_full_url ? a.utm_full_url : "";
    }
}