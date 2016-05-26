Useragnt.chrome = m("chrome") && !m("edge") && !m("opera") && !m("opr");
if (Useragnt.chrome) {
    Useragnt.chrome = new Boolean(true);
    u.match(/chrome\/([\d.]+)/g);
    Useragnt.chrome.version = v(RegExp.$1);
}