/*!
 * Useragnt
 * v0.4.0
 * 
 * Copyright (c) 2016 Yuichiroh Arai
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 * 
 * detects: mobile, tablet, pc, windows, mac, linux, ios, android, edge, ie, safari, chrome, firefox, opera
!*/
;(function(window, document){
    var Useragnt = {};

    Useragnt._detects = ["mobile", "tablet", "pc", "windows", "mac", "linux", "ios", "android", "edge", "ie", "safari", "chrome", "firefox", "opera"];

    var u = Useragnt.userAgent = window.navigator.userAgent.toLowerCase();

    function m(str) {
        return u.indexOf(str) != -1;
    }
    function v(str) {
        var vs = (str).split(".");
        var result = {};
        result.str = str;
        result.float = parseFloat(str) || 0;
        result.major = (vs.length > 0) ? parseInt(vs[0]) || 0 : 0;
        result.minor = (vs.length > 1) ? parseInt(vs[1]) || 0 : 0;
        result.build = (vs.length > 2) ? parseInt(vs[2]) || 0 : 0;
        result.revision = (vs.length > 3) ? parseInt(vs[3]) || 0 : 0;
        return result;
    }

    // -------------------- ua-detects --------------------


    // mobile
    Useragnt.mobile =
    m("iphone")
    || m("ipod")
    || (m("android") && m("mobile"))
    || (m("windows") && m("phone"))
    || (m("firefox") && m("mobile"))
    || m("blackberry");


    // tablet
    Useragnt.tablet =
    m("ipad")
    || (m("android") && !m("mobile"))
    || (m("windows") && m("touch") && !m("tablet pc"))
    || (m("firefox") && m("tablet"))
    || m("kindle")
    || m("silk")
    || m("playbook");


    // pc
    Useragnt.pc =
    !m("iphone")
    && !m("ipod")
    && !m("ipad")
    && !m("android")
    && (!m("windows")
        || ( !m("phone")
            &&
            ( !m("touch") || m("tablet pc") )
        )
    )
    && (!m("firefox")
        || ( !m("mobile") && !m("tablet") )
    )
    && !m("blackberry")
    && !m("kindle")
    && !m("silk")
    && !m("playbook");


    // windows
    Useragnt.windows = m("windows");


    // mac
    Useragnt.mac = m("mac os x") && !m("iphone") && !m("ipad") && !m("ipod");


    // linux
    Useragnt.linux = m("linux") && !m("android");


    // ios
    Useragnt.ios = m("iphone") || m("ipad") || m("ipod");
if (Useragnt.ios) {
    Useragnt.ios = new Boolean(true);
    u.match(/ os ([\d_]+)/g);
    Useragnt.ios.version = v(RegExp.$1.replace("_", "."));
}


    // android
    Useragnt.android = m("android");
if (Useragnt.android) {
    Useragnt.android = new Boolean(true);
    u.match(/android ([\d\.]+)/g);
    Useragnt.android.version = v(RegExp.$1);
}


    // edge
    Useragnt.edge = m("edge");


    // ie
    Useragnt.ie = m("trident") || m("msie");


    // safari
    Useragnt.safari = m("safari") && !m("android") && !m("edge") && !m("opera") && !m("opr") && !m("chrome");


    // chrome
    Useragnt.chrome = m("chrome") && !m("edge") && !m("opera") && !m("opr");
if (Useragnt.chrome) {
    Useragnt.chrome = new Boolean(true);
    u.match(/chrome\/([\d.]+)/g);
    Useragnt.chrome.version = v(RegExp.$1);
}


    // firefox
    Useragnt.firefox = m("firefox") && !m("edge");


    // opera
    Useragnt.opera = m("opera") || m("opr");

    // -------------------- setClasses --------------------
    var classPrefix = Useragnt._classPrefix = "";
    var rootElement = document.documentElement;
    var className = rootElement.className;

    var i, len, prop;

    len = Useragnt._detects.length;
    for (i = 0; i < len; i++) {
        prop = Useragnt._detects[i];

        if (Useragnt[prop]) {
            className += " " + classPrefix + prop;
        } else {
            className += " " + classPrefix + "no-" + prop;
        }
    }

    rootElement.className = className;

    window.Useragnt = Useragnt;

})(window, document);