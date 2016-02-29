    // -------------------- setClasses --------------------
    var classPrefix = Useragnt._classPrefix = $classPrefix;
    var rootElement = document.documentElement;
    var className = rootElement.className;

    var i, len, prop;

    len = Useragnt._detects.length;
    for (i = 0; i < len; i++) {
        prop = Useragnt._detects[i];

        if (Useragnt[prop]) {
            className += " " + classPrefix + prop;
        } else {
            className += " " + classPrefix + "no-" + prop;
        }
    }

    rootElement.className = className;