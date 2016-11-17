Useragnt.safari = m("safari") && !m("android") && !m("edge") && !m("opera") && !m("opr") && !m("chrome");
if (Useragnt.safari) {
    Useragnt.safari = new Boolean(true);
    if (u.match(/version\/([\d.]+)/g)) Useragnt.safari.version = v(RegExp.$1);
}