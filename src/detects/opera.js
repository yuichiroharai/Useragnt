Useragnt.opera = m("opera") || m("opr");
if (Useragnt.opera) {
    Useragnt.opera = new Boolean(true);
    if (u.match(/(opera|opr)\/([\d.]+)/g)) Useragnt.opera.version = v(RegExp.$2);
}