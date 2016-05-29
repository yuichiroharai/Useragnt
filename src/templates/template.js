;(function(window, document){
    var Useragnt = {};

    Useragnt._detects = [$detects];

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
$uaDetects

$setClasses

    window.Useragnt = Useragnt;

})(window, document);