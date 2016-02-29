(function () {
    'use strict';

    function readFile(src) {
        return fs.readFileSync(path.resolve(__dirname, src), { encoding: "utf8" });
    }

    var fs = require("fs");
    var path = require("path");
    var _ = require('lodash');
    var uglify = require("uglify-js");

    var configAll = JSON.parse(readFile("config-all.json"));
    var uaDetectsAll = configAll["uaDetects"];

    var useragnt = {

        build: function(config, isUglify) {
            var uaDetects, uaDetectsAvailable, options, classPrefix;

            if (!config) return "";

            uaDetects = config["uaDetects"];
            options = config["options"] || [];
            classPrefix = config["classPrefix"];

            if (!Array.isArray(uaDetects) || uaDetects.length < 1) return "";
            uaDetectsAvailable = _.intersection(uaDetects, uaDetectsAll);

            if (classPrefix === undefined) classPrefix = "";

            isUglify = !!isUglify;



            var i, len, prop, detect, tmpl, tmplSetClasses;

            len = uaDetectsAvailable.length;

            detect = [];
            for (i=0; i<len; i++) {
                prop = uaDetectsAvailable[i];

                detect.push("\n");
                detect.push("    " + "// " + prop);
                detect.push("    " + readFile("./detects/" + prop + ".js"));
            }

            tmpl = readFile("./templates/template.js");
            tmpl = tmpl
                .replace("$detects", uaDetects.map(function(e) { return '"' + e + '"'; }).join(", "))
                .replace("$uaDetects", detect.join("\n"));

            if (options.indexOf("setClasses") != -1) {
                tmplSetClasses = readFile("./templates/setClasses.js");
                tmplSetClasses = tmplSetClasses
                    .replace("$classPrefix",  '"' + classPrefix + '"');

            } else {
                tmplSetClasses = "";
            }

            tmpl = tmpl.replace("$setClasses", tmplSetClasses);

            var license, version;

            version = JSON.parse(readFile("../package.json")).version;

            license = readFile("./LICENSE");
            license = license.replace("$version", "v" + version);
            license += "\n\ndetects: " + uaDetectsAvailable.join(", ");
            license = "/*!\n * " + license.split("\n").join("\n * ") + "\n!*/\n";

            return license + ((isUglify) ? uglify.minify(tmpl, { fromString: true } ).code : tmpl);
        }

    };

    module.exports = useragnt;

})();