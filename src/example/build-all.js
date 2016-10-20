var fs = require("fs");
var useragnt = require("../build.js");

var configAll = require("../config-all.json");

configAll.minify = false;
fs.writeFileSync("./dest/useragnt-all.js", useragnt.build(configAll));

configAll.minify = true;
fs.writeFileSync("./dest/useragnt-all.min.js", useragnt.build(configAll));