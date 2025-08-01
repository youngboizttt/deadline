(function (p, l, o, w, i, n, g) {
    if (!p[i]) {
        p.GlobalSnowplowNamespace = p.GlobalSnowplowNamespace || [];
        p.GlobalSnowplowNamespace.push(i);
        p[i] = function () {
            (p[i].q = p[i].q || []).push(arguments);
        };
        p[i].q = p[i].q || [];
        n = l.createElement(o);
        g = l.getElementsByTagName(o)[0];
        n.async = 1;
        n.src = w;
        g.parentNode.insertBefore(n, g);
    }
})(
    window,
    document,
    "script",
    "https://cdp.fpt.vn/sdk/acti/cdp.js",
    "snowplow",
);
window.snowplow(
    "newTracker",
    "sp1",
    "https://octopus-stream01-cads.fpt.vn",
    {
        appId: "600", // remember to replace with real appId
        platform: "web",
        encodeBase64: true,
        post: true,
        postPath: "/com.fpt/600",
    },
);
window.snowplow(
    "addPlugin",
    "https://cdp.fpt.vn/sdk/acti/plugins/cdp/index.umd.min.js",
    ["snowplowCDP", "CDPPlugin"],
);
window.snowplow('enableActivityTracking', {
    minimumVisitLength: 5,
    heartbeatDelay: 10
});

// start tracking page
window.snowplow('trackPageView');

// Tracking default load page addon
function trackingEventDc5(event_name = 'view_page', screen_location = 'Homepage') {
    // 
    let payload = {
        event_name,
        screen_location,
        user_id: getUserId(),
        device_id: getDeviceId(),
        device: detectDeviceTypeDc5(),
        operation_system: detectOSDc5(),
        location: getLocationName(),
        is_location: getLocationName() ? 1 : 0,
        is_fid: getCookie('fptvn_user_info') ? 1 : 0,
        session_startdate: formatDateTime(getSessionStartTime()),
        timestamp: getFormattedTimestamp(),

        // user_id: null,
        // device: detectDeviceTypeDc5(),
        // operation_system: detectOSDc5(),
        // location_name: '',
        // location_type,
        // screen_location,
        // event_name,
        // page_context,
        // value,
        // product_name,
        // timestamp: getFormattedTimestamp(),
        
    };

    // console.log(payload);

    if (typeof snowplow === "function") {
        window.snowplow('trackSelfDescribingEvent', {
            event: {
                schema: `iglu:vn.fpt.ftel.snowplow/${event_name}/jsonschema/1-0-0`,
                data: payload
            }
        });
        // console.log({payload})
    } else {
        console.warn("Snowplow is not initialized");
    }

    
};

function getFormattedTimestamp() {
    const now = new Date();

    // Format day, month, year
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = now.getFullYear();

    // Format hours, minutes, seconds
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Combine to the format dd/mm/yyyy hh:mm:ss
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

const detectDeviceTypeDc5 = () => {
    const userAgent = navigator.userAgent;

    if (/Tablet|iPad/i.test(userAgent)) {
        return 'Tablet';
    } else if (/Mobi|Android|iPhone/i.test(userAgent)) {
        return 'Mobile';
    } else {
        return 'PC';
    }
};

const detectOSDc5 = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Kiểm tra các hệ điều hành phổ biến
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }
    if (/android/i.test(userAgent)) {
        return "Android";
    }
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }
    if (/Macintosh|Mac OS X/i.test(userAgent)) {
        return "macOS";
    }
    if (/Windows NT/i.test(userAgent)) {
        return "Windows";
    }
    if (/Linux/i.test(userAgent)) {
        return "Linux";
    }

    return "Unknown OS";
};

/**
 * Lấy các giá trị tracking và gọi về hàm trackingdc5
 */
function executeTracking() {
    const path  = window.location.pathname; // lấy url path
    const slugify        = str => str.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const event_name = 'view_page';
    const page_context    = path === '/vi' ? 'Homepage' : path.split('/').filter(Boolean).pop();
    const screen      = `view_page_${slugify(page_context)}`;
    const screen_location = $('title').text();
    // const screen_Location = checkScreenLocation(path, page_context);
    
    // trackingEventDc5('view_page', screenLocation, 'screen', eventName, pageContext, '', '');
    trackingEventDc5(event_name, screen_location);
}

/**
 * Format tên trang đang truy cập
 * @param {*} slug 
 * @returns 
 */
function formatPageContext(slug) {
    if (slug === 'Homepage') return 'Homepage';
    return slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

/**
 * Hàm xác định loại trang đang truy cập
 * @param {*} path 
 * @param {*} def 
 * @returns 
 */
function checkScreenLocation(path, def) {
    let pageType = def; // mặc định là trang thường

    // nếu là trang tin tức
    if (path.includes('tin-tuc')) {
        pageType = 'tin-tuc';
    }
    // nếu là trang hỗ trợ 
    else if (path.includes('ho-tro-thong-tin')) {
        pageType = 'ho-tro-thong-tin';
    }
    else if (path.includes('ho-tro-y-thuat')) {
        pageType = 'ho-tro-ky-thuat';
    }
    else if (path.includes('ho-tro-y-thuat')) {
        pageType = 'phan-hoi-khach-hang';
    }
    else if (path.includes('lien-he-24-7')) {
        pageType = 'lien-he-24-7';
    }
    else if (path.includes('ve-fpt-telecom')) {
        pageType = 've-fpt-telecom';
    }

    return pageType;
}

// 
function extractText(el) {
    if (!el) return "";
    // Ưu tiên data-sp-label nếu có
    const label = el.getAttribute("data-sp-label");
    if (label) return label;
    // Nếu là ảnh -> dùng alt
    if (el.tagName === "IMG") {
        return el.getAttribute("alt") || "";
    }

    // Ngược lại -> dùng text content
    return el.textContent.trim();
}

function getDeviceId() {
    const key = "sp_device_id";
    let id = localStorage.getItem(key);
    if (!id) {
      // Tạo chuỗi hash mới: 16 ký tự ngẫu nhiên
        id = generateDeviceId();
        localStorage.setItem(key, id);
    }
    return id;
}

// Hàm tạo chuỗi hash ngẫu nhiên
function generateDeviceId() {
    const timestamp = Date.now().toString(36); // thời gian hiện tại
    const random = Math.random().toString(36).substring(2, 10); // random 8 ký tự
    const userAgent = navigator.userAgent.slice(0, 10).replace(/\W/g, ""); // entropy
    return `${timestamp}-${random}-${userAgent}`;
}

function getLocationName(){
    const locationName = localStorage.getItem('locationname') || "";
    const districtName = localStorage.getItem('districtname') || "";
    const wardName = localStorage.getItem('wardname') || "";

    if(!locationName){
        return null;
    }

    return `${locationName} | ${districtName} | ${wardName}`;
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

function formatDateTime(input) {
    const date = new Date(input);
    const pad = (n) => n.toString().padStart(2, '0');
    const month = pad(date.getMonth() + 1); // getMonth trả 0-11
    const day = pad(date.getDate());
    const year = date.getFullYear();
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());
    return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
}

// Lấy Thời gian bắt đầu của phiên truy cập
function getSessionStartTime() {
    let startTime = sessionStorage.getItem('session_start');
    if (!startTime) {
        startTime = new Date();
        sessionStorage.setItem('session_start', startTime);
    }
    return startTime;
}

function getSessionDurationInSeconds() {
    const start = sessionStorage.getItem('session_start');
    if (!start) return 0;

    const startTime = new Date(start);
    const now = new Date();
    const durationMs = now - startTime;

    return Math.floor(durationMs / 1000); // Trả về số giây
}

function getScrollPercentage() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Tính chiều cao đã cuộn + chiều cao cửa sổ
    const scrollPosition = scrollTop + windowHeight;

    // Tính phần trăm dựa trên 4 phần bằng nhau
    const percent = (scrollPosition / documentHeight) * 100;

    if (percent >= 100) return 100;
    else if (percent >= 75) return 75;
    else if (percent >= 50) return 50;
    else if (percent >= 25) return 25;
    else return 0;
}

// 
function getUserId() {
    if ($('.profile-idd').length > 0) {
        return $('.profile-idd').text().replace(/\s+/g, '');
    }
    return 'Unknown';
}

// Gọi default tracking custom param
executeTracking();

//Tracking Click Event
document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", function (event) {
        const target = event.target.closest("[data-sp-action]");
        if (!target) return;

        const action = target.getAttribute("data-sp-action");
        const position = target.getAttribute("data-sp-position") || "default";
        const area = target.getAttribute("data-sp-area") || "default";
        const label = extractText(target); // Tự động lấy label từ data hoặc alt/text
        const additionalData = target.getAttribute("data-sp-extra"); // JSON string

        const startTime = getSessionStartTime();

        //Tỉ lệ cuộn trang
        const scrollPercentage = getScrollPercentage();

        const eventTime = getSessionDurationInSeconds();

        let contextData = {
            schema: `iglu:vn.fpt.ftel.snowplow/${action}/jsonschema/1-0-0`, 
            data: {
                event_name: action,
                position,
                area,
                label,
                user_id: getUserId(),
                device_id: getDeviceId(),
                location: getLocationName(),
                is_location: getLocationName() ? 1 : 0,
                is_fid: getCookie('fptvn_user_info') ? 1 : 0,
                session_startdate: formatDateTime(startTime),
                event_time: eventTime,
                scroll_depth: scrollPercentage,
                timestamp: new Date().toISOString()
            },
        };

        // Nếu có thêm dữ liệu JSON từ data-sp-extra
        if (additionalData) {
            try {
                const extra = JSON.parse(additionalData);
                contextData.data = { ...contextData.data, ...extra };
            } catch (err) {
                console.warn("Invalid JSON in data-sp-extra", err);
            }
        }

        // console.log(contextData)

        // Gửi dữ liệu tới Snowplow
        if (typeof snowplow === "function") {
            window.snowplow('trackSelfDescribingEvent', {event: contextData});
            // console.log({contextData})
        } else {
            console.warn("Snowplow is not initialized");
        }
    });

    const parentsLinkProduct = document.querySelector(".parents_link_product");

    if (parentsLinkProduct) {
        parentsLinkProduct.querySelectorAll(".cards").forEach((card, index) => {
            const link = card.querySelector("a[title]");
            const linkTitle = link?.getAttribute("title")?.trim() || '';

            card.setAttribute("data-sp-action", "view_page");
            card.setAttribute("data-sp-area", "link_product");
            card.setAttribute("data-sp-position", index + 1);
            card.setAttribute("data-sp-extra", `{"area_id": 4, "element_name": "link_product_${linkTitle}", "element_type": "card", "event_description": "view trang ${linkTitle}"}`);
        });
    }
});