// Type definitions for Useragnt 0.5.1
// Project: https://github.com/yuichiroharai/Useragnt
// Definitions by: Yuichiroh Arai <https://github.com/yuichiroharai/>
// Definitions: https://github.com/yuichiroharai/Useragnt

declare namespace __Useragnt {

    interface UADetectsVersion {
        str: string;
        float: number;
        major: number;
        minor: number;
        build: number;
        revision: number;
    }

    interface UADetectsBooleanVersion extends Boolean {
        version: UADetectsVersion;
    }

    interface UADetects {
        userAgent: string;

        mobile: boolean;
        tablet: boolean;
        pc: boolean;

        windows: boolean;
        mac: boolean;
        linux: boolean;
        ios: UADetectsBooleanVersion;
        android: UADetectsBooleanVersion;

        edge: boolean;
        ie: boolean;
        safari: boolean;
        webkit: boolean;
        chrome: UADetectsBooleanVersion;
        firefox: boolean;
        opera: boolean;

        webview: boolean;
    }

    export interface UseragntrStatic extends UADetects { }
}

declare var Useragnt: __Useragnt.UseragntrStatic;