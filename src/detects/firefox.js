Useragnt.firefox = m("firefox") && !m("edge");
if (Useragnt.firefox) {
    Useragnt.firefox = new Boolean(true);
    if (u.match(/firefox\/([\d.]+)/g)) Useragnt.firefox.version = v(RegExp.$1);
}