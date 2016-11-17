Useragnt.mac = m("mac os x") && !m("iphone") && !m("ipad") && !m("ipod");
if (Useragnt.mac) {
    Useragnt.mac = new Boolean(true);
    if (u.match(/ mac os x ([\d_\.]+)/g)) Useragnt.mac.version = v(RegExp.$1.replace(/_/g, "."));
}