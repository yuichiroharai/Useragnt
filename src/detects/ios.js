Useragnt.ios = m("iphone") || m("ipad") || m("ipod");
if (Useragnt.ios) {
    Useragnt.ios = new Boolean(true);
    if (u.match(/ os ([\d_]+)/g)) Useragnt.ios.version = v(RegExp.$1.replace(/_/g, "."));
}