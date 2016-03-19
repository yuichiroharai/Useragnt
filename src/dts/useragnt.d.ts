// Type definitions for Useragnt 0.1.0
// Project: https://github.com/yuichiroharai/Useragnt
// Definitions by: Yuichiroh Arai <https://github.com/yuichiroharai/>
// Definitions: https://github.com/yuichiroharai/Useragnt

declare namespace __Useragnt {

    interface UADetects {
        mobile: boolean;
        tablet: boolean;
        pc: boolean;

        windows: boolean;
        mac: boolean;
        linux: boolean;
        ios: boolean;
        android: boolean;

        edge: boolean;
        ie: boolean;
        safari: boolean;
        chrome: boolean;
        firefox: boolean;
        opera: boolean;
    }

    export interface UseragntrStatic extends UADetects { }
}

declare var Useragnt: __Useragnt.UseragntrStatic;