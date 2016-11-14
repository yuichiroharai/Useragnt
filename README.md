# Useragnt
Useragnt is a JavaScript library that detects device, OS, and browser from User agent.

It behaves like a [Modernizr](https://modernizr.com/).


## Install

[![NPM](https://nodei.co/npm/useragnt.png?mini=true)](https://nodei.co/npm/useragnt/)

## Usage

### Custom build

```js
var fs = require("fs");
var useragnt = require("useragnt");

var configAll = {
  "minify": true,
  "classPrefix": "",
  "options": [
    "setClasses"
  ],
  "uaDetects": [
    "mobile",
    "tablet",
    "pc",

    "windows",
    "mac",
    "linux",
    "ios",
    "android",

    "edge",
    "ie",
    "safari",
    "webkit",
    "chrome",
    "firefox",
    "opera",

    "webview"
  ]
}

var result = useragnt.build(configAll);

fs.writeFileSync("./useragnt.min.js", result);
```


### Using Useragnt with CSS

```css
.pc .hoge {
  /*...*/
}
.no-pc .hoge {
  /*...*/
}
```


### Using Useragnt with JavaScript

```js
if (Useragnt.pc) {
  //...
} else {
  //...
}

// iOS & Android & Chrome only
if (Useragnt.ios) logVersion(Useragnt.ios.version, "ios");
if (Useragnt.android) logVersion(Useragnt.android.version, "android");
if (Useragnt.chrome) logVersion(Useragnt.chrome.version, "chrome");

function logVersion(version, title) {
  console.log("----- " + title + " -----");
  console.log("str: " + version.str);
  console.log("float: " + version.float);
  console.log("major: " + version.major);
  console.log("minor: " + version.minor);
  console.log("build: " + version.build);
  console.log("revision: " + version.revision);
}
```



## Example
http://codepen.io/yuichiroharai/pen/PzYeZg
