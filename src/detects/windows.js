Useragnt.windows = m("windows");
if (Useragnt.windows) {
    Useragnt.windows = new Boolean(true);
    if (u.match(/nt ([\d.]+)/g)) Useragnt.windows.version = v(RegExp.$1);
}