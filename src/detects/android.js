Useragnt.android = m("android");
if (Useragnt.android) {
    Useragnt.android = new Boolean(true);
    if (u.match(/android ([\d\.]+)/g)) Useragnt.android.version = v(RegExp.$1);
}