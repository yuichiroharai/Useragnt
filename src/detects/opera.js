Useragnt.opera = m("opera") || m("opr\/d+.d+");
if (Useragnt.opera) {
    Useragnt.opera = new Boolean(true);
    if (u.match(/(opera|opr)\/([\d.]+)/g)) Useragnt.opera.version = v(RegExp.$2);
}