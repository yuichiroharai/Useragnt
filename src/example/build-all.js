var fs = require("fs");
var useragnt = require("../build.js");

var configAll = require("../config-all.json");
var isUglify = true;

var result = useragnt.build(configAll, isUglify);

fs.writeFileSync("./useragnt.min.js", result);