# Useragnt
Useragnt is a JavaScript library that detects device, OS, and browser from Useragent.

It behaves like a [Modernizr](https://modernizr.com/).


## Install

```sh
npm install -D https://github.com/yuichiroharai/Useragnt.git
```

direct npm install is coming soon...


## Usage

### Custom build

```js
var fs = require("fs");
var useragnt = require("useragnt");

var configAll = {
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
    "chrome",
    "firefox",
    "opera"
  ]
}
var isUglify = true;

var result = useragnt.build(configAll, isUglify);

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

// iOS & Android only
var version;
if (Useragnt.ios) {
    version = Useragnt.ios.version;
    console.log("iOS version: " + version.float); // major.minor
    console.log("major:" + version.major);
    console.log("minor:" + version.minor);
    console.log("build:" + version.build);
}
if (Useragnt.android) {
    version = Useragnt.android.version;
    console.log("Android version: " + version.float); // major.minor
    console.log("major:" + version.major);
    console.log("minor:" + version.minor);
    console.log("build:" + version.build);
}
```


## Example
http://codepen.io/yuichiroharai/pen/zqjLJL
