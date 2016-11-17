Useragnt.ie = m("trident") || m("msie");
if (Useragnt.ie) {
    Useragnt.ie = new Boolean(true);
    if (u.match(/(msie|rv:?)\s?([\d.]+)/g)) Useragnt.ie.version = v(RegExp.$2);
}