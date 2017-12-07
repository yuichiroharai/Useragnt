/*!
 * Useragnt
 * v0.6.2
 * 
 * Copyright (c) 2017 Yuichiroh Arai
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 * 
 * detects: mobile, tablet, pc, windows, mac, linux, ios, android, edge, ie, safari, webkit, chrome, firefox, opera, webview
!*/
;(function(window, document){
    var Useragnt = {};

    Useragnt._detects = ["mobile", "tablet", "pc", "windows", "mac", "linux", "ios", "android", "edge", "ie", "safari", "webkit", "chrome", "firefox", "opera", "webview"];

    var u = Useragnt.userAgent = window.navigator.userAgent.toLowerCase();
    var w = window;
    var d = document;

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
try {
Useragnt.mobile =
    m("iphone")
    || m("ipod")
    || (m("android") && m("mobile"))
    || (m("windows") && m("phone"))
    || (m("firefox") && m("mobile"))
    || m("blackberry");
} catch (e) {}


// tablet
try {
Useragnt.tablet =
    m("ipad")
    || (m("android") && !m("mobile"))
    || (m("windows") && m("touch") && !m("tablet pc"))
    || (m("firefox") && m("tablet"))
    || m("kindle")
    || m("silk")
    || m("playbook");
} catch (e) {}


// pc
try {
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
} catch (e) {}


// windows
try {
Useragnt.windows = m("windows");
if (Useragnt.windows) {
    Useragnt.windows = new Boolean(true);
    if (u.match(/nt ([\d.]+)/g)) Useragnt.windows.version = v(RegExp.$1);
}
} catch (e) {}


// mac
try {
Useragnt.mac = m("mac os x") && !m("iphone") && !m("ipad") && !m("ipod");
if (Useragnt.mac) {
    Useragnt.mac = new Boolean(true);
    if (u.match(/ mac os x ([\d_\.]+)/g)) Useragnt.mac.version = v(RegExp.$1.replace(/_/g, "."));
}
} catch (e) {}


// linux
try {
Useragnt.linux = m("linux") && !m("android");
} catch (e) {}


// ios
try {
Useragnt.ios = m("iphone") || m("ipad") || m("ipod");
if (Useragnt.ios) {
    Useragnt.ios = new Boolean(true);
    if (u.match(/ os ([\d_]+)/g)) Useragnt.ios.version = v(RegExp.$1.replace(/_/g, "."));
}
} catch (e) {}


// android
try {
Useragnt.android = m("android");
if (Useragnt.android) {
    Useragnt.android = new Boolean(true);
    if (u.match(/android ([\d\.]+)/g)) Useragnt.android.version = v(RegExp.$1);
}
} catch (e) {}


// edge
try {
Useragnt.edge = m("edge");
if (Useragnt.edge) {
    Useragnt.edge = new Boolean(true);
    if (u.match(/edge\/([\d.]+)/g)) Useragnt.edge.version = v(RegExp.$1);
}
} catch (e) {}


// ie
try {
Useragnt.ie = m("trident") || m("msie");
if (Useragnt.ie) {
    Useragnt.ie = new Boolean(true);
    if (u.match(/(msie|rv:?)\s?([\d.]+)/g)) Useragnt.ie.version = v(RegExp.$2);
}
} catch (e) {}


// safari
try {
Useragnt.safari = m("safari") && !m("android") && !m("edge") && !m("opera") && !m("opr/d+.d+") && !m("chrome");
if (Useragnt.safari) {
    Useragnt.safari = new Boolean(true);
    if (u.match(/version\/([\d.]+)/g)) Useragnt.safari.version = v(RegExp.$1);
}
} catch (e) {}


// webkit
try {
Useragnt.webkit = m("applewebkit") && !m("safari") && !m("android") && !m("edge") && !m("opera") && !m("opr/d+.d+") && !m("chrome");
} catch (e) {}


// chrome
try {
Useragnt.chrome = m("chrome") && !m("edge") && !m("opera") && !m("opr\/d+.d+");
if (Useragnt.chrome) {
    Useragnt.chrome = new Boolean(true);
    if (u.match(/chrome\/([\d.]+)/g)) Useragnt.chrome.version = v(RegExp.$1);
}
} catch (e) {}


// firefox
try {
Useragnt.firefox = m("firefox") && !m("edge");
if (Useragnt.firefox) {
    Useragnt.firefox = new Boolean(true);
    if (u.match(/firefox\/([\d.]+)/g)) Useragnt.firefox.version = v(RegExp.$1);
}
} catch (e) {}


// opera
try {
Useragnt.opera = m("opera") || m("opr\/d+.d+");
if (Useragnt.opera) {
    Useragnt.opera = new Boolean(true);
    if (u.match(/(opera|opr)\/([\d.]+)/g)) Useragnt.opera.version = v(RegExp.$2);
}
} catch (e) {}


// webview
try {
Useragnt.webview =
    (m("iphone") || m("ipad") || m("ipod"))
    && (!m("safari") || m("crios") || m("fxios") || m("opios") || m("twitter") || m("fbav") || m("line"));
} catch (e) {}

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