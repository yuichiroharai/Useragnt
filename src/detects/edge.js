Useragnt.edge = m("edge");
if (Useragnt.edge) {
    Useragnt.edge = new Boolean(true);
    if (u.match(/edge\/([\d.]+)/g)) Useragnt.edge.version = v(RegExp.$1);
}