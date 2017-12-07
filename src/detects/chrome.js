Useragnt.chrome = m("chrome") && !m("edge") && !m("opera") && !m("opr\/d+.d+");
if (Useragnt.chrome) {
    Useragnt.chrome = new Boolean(true);
    if (u.match(/chrome\/([\d.]+)/g)) Useragnt.chrome.version = v(RegExp.$1);
}