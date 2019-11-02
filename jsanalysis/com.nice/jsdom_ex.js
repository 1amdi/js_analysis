const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var options = {
    "userAgent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36",
};
JSDOM.fromURL("https://www.nike.com/cn/", options).then(dom => {  //如果使用本地文件打开的方式，那么需要重写方法的url获取方式！！！，暂用请求的方式进行测试
//   console.log(dom.serialize());

// const dom = new JSDOM(`<!DOCTYPE html><div class="l-typeahead-search-container"><div class="l-typeahead-search-input ncss-input-container bg-white d-sm-ib"><input type="text" id="TypeaheadSearchInput" class="typeahead-search-input ncss-input fs16-nav-sm fs14-nav-lg pt2-sm pr4-sm pb2-sm pl10-sm d-lg-ib" name="search" autoComplete="off" role="combobox" aria-controls="VisualSearchSuggestionsList" placeholder="搜索"/><button class="btn-clear-input z5 bg-transparent d-lg-h"><i class="g72-x-small fs32-nav-sm fs20-nav-lg nav-color-grey hover-color-black" aria-label="Clear"></i></button><button class="btn-search z2 bg-transparent" tabindex="-1"><i class="g72-search fs20-nav-sm" aria-hidden="true"></i></button></div></div></div></div>`, {
//     url: "https://www.nike.com/cn/",
//     referrer: "https://www.nike.com/cn/",
//     contentType: "text/html",
//     userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36/",
//     includeNodeLocations: true
//   }).window
    const window = dom.window.window
    const navigator = window.navigator
    const screen = window.screen
    const document = window.document
    document["cookie"] = "_abck=097C2EDF4640721D2A4E00B98FCBE66E~-1~YAAQ257C3VTfjrdsAQAAQFgY1gL0ZCtM1jvLa7u17nGTf4sKTzTnZo545kuseAUzPyNz4gNy5myftIqa5uKRQ4vr6VMgfMT5SmfHZkkdGY5g0kTLDBMi2NFl96kgD+JnXGxHVNfR26SuquFygHyW5rF6yMLyI7d8rWOtD+BcyiI7g4MWYgi4rP0+KGbrtKvF3JTXSe3HzeGmuXw5kMkf4p23tbpHt8zTo08YFmaZLrZcrTS0EpkWaXEiWwD2q/+hUvmVSsssxFcp8LQ7O1Lyk/UAJ0Og5aDPaj7RxKCIMzd2VTfSGPs+sqsijU1gwg+cw7xreLwMiijnEnpR4U4Bgw7rzd7mBNXkMw==~-1~-1~-1; Domain=.nike.com; Path=/; Expires=Thu, 27 Aug 2020 02:40:15 GMT; Max-Age=31536000; Secure"
// window.screenY = 23
// window.screenX = 0


    var _cf = _cf || []
        , bmak = {
        ver: 1.41,   //version
        ke_cnt_lmt: 150,
        mme_cnt_lmt: 100,
        mduce_cnt_lmt: 75,
        pme_cnt_lmt: 25,
        pduce_cnt_lmt: 25,
        tme_cnt_lmt: 25,
        tduce_cnt_lmt: 25,
        doe_cnt_lmt: 10,
        dme_cnt_lmt: 10,
        vc_cnt_lmt: 100,
        doa_throttle: 0,
        dma_throttle: 0,
        session_id: "default_session",
        js_post: !1,
        loc: "",
        cf_url: ("https:" === document["location"]["protocol"] ? "https://" : "http://") + "apid.cformanalytics.com/api/v1/attempt",
        auth: "",
        api_public_key: "afSbep8yjnZUjq3aL010jO15Sawj2VZfdYK8uY90uxq",
        aj_lmt_doact: 1,
        aj_lmt_dmact: 1,
        aj_lmt_tact: 1,
        ce_js_post: 0,
        init_time: 0,
        informinfo: "",
        prevfid: -1,
        fidcnt: 0,
        sensor_data: 0,
        ins: null,
        cns: null,
        enGetLoc: 0,
        enReadDocUrl: 1,
        disFpCalOnTimeout: 0,
        xagg: -1,
        pen: -1,
        brow: "",
        browver: "",
        psub: "-",
        lang: "-",
        prod: "-",
        plen: -1,
        doadma_en: 0,
        sdfn: [],
        d2: 0,
        d3: 0,
        thr: 0,
        cs: "0a46G5m17Vrp4o4c",
        hn: "unk",
        z1: 0,
        o9: 0,
        vc: "",
        y1: 2016,
        ta: 0,
        tst: -1,
        t_tst: 0,
        ckie: "_abck",
        n_ck: "0",
        ckurl: 0,
        bm: !1,
        mr: "-1",
        altFonts: !1,
        rst: !1,
        runFonts: !0,
        fsp: !1,
        mn_mc_lmt: 10,
        mn_state: 0,
        mn_mc_indx: 0,
        mn_sen: 0,
        mn_tout: 100,
        mn_stout: 1e3,
        mn_cc: "",
        mn_cd: 1e4,
        mn_lc: "",
        mn_ld: 1e4,
        mn_al: [],
        mn_il: [],
        mn_tcl: [],
        mn_r: "",
        mn_abck: "",
        mn_psn: "",
        mn_ts: "",
        mn_lg: [],
        ir: function() {
            bmak["start_ts"] = Date["now"] ? Date["now"]() : +new Date,
                bmak["kact"] = "",  //恒定为""
                bmak["ke_cnt"] = 0,
                bmak["ke_vel"] = 0,
                bmak["mact"] = "",
                bmak["mme_cnt"] = 0,
                bmak["mduce_cnt"] = 0,
                bmak["me_vel"] = 0,
                bmak["pact"] = "",
                bmak["pme_cnt"] = 0,
                bmak["pduce_cnt"] = 0,
                bmak["pe_vel"] = 0,
                bmak["tact"] = "",
                bmak["tme_cnt"] = 0,
                bmak["tduce_cnt"] = 0,
                bmak["te_vel"] = 0,
                bmak["doact"] = "",
                bmak["doe_cnt"] = 0,
                bmak["doe_vel"] = 0,
                bmak["dmact"] = "",
                bmak["dme_cnt"] = 0,
                bmak["dme_vel"] = 0,
                bmak["vcact"] = "",
                bmak["vc_cnt"] = 0,
                bmak["aj_indx"] = 0,
                bmak["aj_ss"] = 0,
                bmak["aj_type"] = -1,
                bmak["aj_indx_doact"] = 0,
                bmak["aj_indx_dmact"] = 0,
                bmak["aj_indx_tact"] = 0,
                bmak["me_cnt"] = 0,
                bmak["pe_cnt"] = 0,
                bmak["te_cnt"] = 0
        },
        get_cf_date: function() { //获取时间戳
            return Date["now"] ? Date["now"]() : +new Date
        },
        sd_debug: function(a) {
            if (!bmak["js_post"]) {
                var t = a;
                "string" == typeof _sd_trace ? _sd_trace += t : _sd_trace = t
            }
        },
        pi: function(a) {
            return parseInt(a)
        },
        uar: function() {
            return options.userAgent["replace"](/\\|"/g, "")
        },
        gd: function() {
            var a = bmak["uar"]()
                , t = "" + bmak["ab"](a)
                , e = bmak["start_ts"] / 2
                , n = window["screen"] ? window["screen"]["availWidth"] : -1
                , o = window["screen"] ? window["screen"]["availHeight"] : -1
                , m = window["screen"] ? window["screen"]["width"] : -1
                , r = window["screen"] ? window["screen"]["height"] : -1
                , i = window["innerWidth"] || document["body"]["clientWidth"]
                , c = window["innerHeight"] || document["body"]["clientHeight"]
                , b = window["outerWidth"] || document["body"]["outerWidth"];
            bmak["z1"] = bmak["pi"](bmak["start_ts"] / (bmak["y1"] * bmak["y1"]));
            var d = Math["random"]()
                , k = bmak["pi"](1e3 * d / 2)
                , s = d + "";
            return s = s["slice"](0, 11) + k,   //返回计算的data值的浏览器信息签名如：;
                // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36,uaend,12147,20030107,zh-CN,Gecko,3,0,0,0,385532,822547,1440,808,1440,900,1440,150,1440,,cpen:0,i1:0,dm:0,cwen:0,non:1,opc:0,fc:0,sc:0,wrc:1,isc:0,vib:1,bat:1,x11:0,x12:1,NaN,0.212747443106,783450411273,loc:"
                bmak["get_browser"](),
                bmak["bc"](),
                bmak["bmisc"](),
            a + ",uaend," + bmak["xagg"] + "," + bmak["psub"] + "," + bmak["lang"] + "," + bmak["prod"] + "," + bmak["plen"] + "," + bmak["pen"] + "," + bmak["wen"] + "," + bmak["den"] + "," + bmak["z1"] + "," + bmak["d3"] + "," + n + "," + o + "," + m + "," + r + "," + i + "," + c + "," + b + "," + bmak["bd"]() + "," + t + "," + s + "," + e + ",loc:" + bmak["loc"]
        },
        get_browser: function() {
            navigator["productSub"] && (bmak["psub"] = navigator["productSub"]),
            navigator["language"] && (bmak["lang"] = navigator["language"]),
            navigator["product"] && (bmak["prod"] = navigator["product"]),
                bmak["plen"] = void 0 !== navigator["plugins"] ? navigator["plugins"]["length"] : -1
        },
        bc: function() {
            var a = window["addEventListener"] ? 1 : 0
                , t = window["XMLHttpRequest"] ? 1 : 0
                , e = window["XDomainRequest"] ? 1 : 0
                , n = window["emit"] ? 1 : 0
                , o = window["DeviceOrientationEvent"] ? 1 : 0
                , m = window["DeviceMotionEvent"] ? 1 : 0
                , r = window["TouchEvent"] ? 1 : 0
                , i = window["spawn"] ? 1 : 0
                , c = window["innerWidth"] ? 1 : 0
                , b = window["outerWidth"] ? 1 : 0
                , d = window["chrome"] ? 1 : 0
                , k = Function["prototype"]["bind"] ? 1 : 0
                , s = window["Buffer"] ? 1 : 0
                , l = window["PointerEvent"] ? 1 : 0;
            bmak["xagg"] = a + (t << 1) + (e << 2) + (n << 3) + (o << 4) + (m << 5) + (r << 6) + (i << 7) + (c << 8) + (b << 9) + (d << 10) + (k << 11) + (s << 12) + (l << 13)
        },
        bmisc: function() {
            bmak["pen"] = window["_phantom"] ? 1 : 0,
                bmak["wen"] = window["webdriver"] ? 1 : 0,
                bmak["den"] = window["domAutomation"] ? 1 : 0
        },
        bd: function() {
            var a = []
                , t = window["callPhantom"] ? 1 : 0;
            a["push"](",cpen:" + t);
            try {
                var e = new Function("return/*@cc_on!@*/!1")() ? 1 : 0
            } catch (a) {
                var e = 0
            }
            a["push"]("i1:" + e);
            var n = "number" == typeof document["documentMode"] ? 1 : 0;
            a["push"]("dm:" + n);
            var o = window["chrome"] && window["chrome"]["webstore"] ? 1 : 0;
            a["push"]("cwen:" + o);
            var m = navigator["onLine"] ? 1 : 0;
            a["push"]("non:" + m);
            var r = window["opera"] ? 1 : 0;
            a["push"]("opc:" + r);
            var i = "undefined" != typeof InstallTrigger ? 1 : 0;
            a["push"]("fc:" + i);
            var c = window["HTMLElement"] && Object["prototype"]["toString"]["call"](window["HTMLElement"])["indexOf"]("Constructor") > 0 ? 1 : 0;
            a["push"]("sc:" + c);
            var b = "function" == typeof window["RTCPeerConnection"] || "function" == typeof window["mozRTCPeerConnection"] || "function" == typeof window["webkitRTCPeerConnection"] ? 1 : 0;
            a["push"]("wrc:" + b);
            var d = "mozInnerScreenY"in window ? window["mozInnerScreenY"] : 0;
            a["push"]("isc:" + d),
                bmak["d2"] = bmak["pi"](bmak["z1"] / 23);
            var k = "function" == typeof navigator["vibrate"] ? 1 : 0;
            a["push"]("vib:" + k);
            var s = "function" == typeof navigator["getBattery"] ? 1 : 0;
            a["push"]("bat:" + s);
            var l = Array["prototype"]["forEach"] ? 0 : 1;
            a["push"]("x11:" + l);
            var u = "FileReader"in window ? 1 : 0;
            return a["push"]("x12:" + u),
                a["join"](",")
        },
        fas: function() {
            try {
                return Boolean(navigator["credentials"]) + (Boolean(navigator["appMinorVersion"]) << 1) + (Boolean(navigator["bluetooth"]) << 2) + (Boolean(navigator["storage"]) << 3) + (Boolean(Math["imul"]) << 4) + (Boolean(navigator["getGamepads"]) << 5) + (Boolean(navigator["getStorageUpdates"]) << 6) + (Boolean(navigator["hardwareConcurrency"]) << 7) + (Boolean(navigator["mediaDevices"]) << 8) + (Boolean(navigator["mozAlarms"]) << 9) + (Boolean(navigator["mozConnection"]) << 10) + (Boolean(navigator["mozIsLocallyAvailable"]) << 11) + (Boolean(navigator["mozPhoneNumberService"]) << 12) + (Boolean(navigator["msManipulationViewsEnabled"]) << 13) + (Boolean(navigator["permissions"]) << 14) + (Boolean(navigator["registerProtocolHandler"]) << 15) + (Boolean(navigator["requestMediaKeySystemAccess"]) << 16) + (Boolean(navigator["requestWakeLock"]) << 17) + (Boolean(navigator["sendBeacon"]) << 18) + (Boolean(navigator["serviceWorker"]) << 19) + (Boolean(navigator["storeWebWideTrackingException"]) << 20) + (Boolean(navigator["webkitGetGamepads"]) << 21) + (Boolean(navigator["webkitTemporaryStorage"]) << 22) + (Boolean(Number["parseInt"]) << 23) + (Boolean(Math["hypot"]) << 24)
            } catch (a) {
                return 0
            }
        },
        getmr: function() {
            try {
                if ("undefined" == typeof performance || void 0 === performance["now"] || "undefined" == typeof JSON)
                    return void (bmak["mr"] = "undef");
                for (var a = "", t = 1e3, e = [Math["abs"], Math["acos"], Math["asin"], Math["atanh"], Math["cbrt"], Math["exp"], Math["random"], Math["round"], Math["sqrt"], isFinite, isNaN, parseFloat, parseInt, JSON["parse"]], n = 0; n < e["length"]; n++) {
                    var o = []
                        , m = 0
                        , r = performance["now"]()
                        , i = 0
                        , c = 0;
                    if (void 0 !== e[n]) {
                        for (i = 0; i < t && m < .6; i++) {
                            for (var b = performance["now"](), d = 0; d < 4e3; d++)
                                e[n](3.14);
                            var k = performance["now"]();
                            o["push"](Math["round"](1e3 * (k - b))),
                                m = k - r
                        }
                        var s = o["sort"]();
                        c = s[Math["floor"](s["length"] / 2)] / 5
                    }
                    a = a + c + ","
                }
                bmak["mr"] = a
            } catch (a) {
                bmak["mr"] = "exception"
            }
        },
        sed: function() {
            var a;
            a = window["$cdc_asdjflasutopfhvcZLmcfl_"] || document["$cdc_asdjflasutopfhvcZLmcfl_"] ? "1" : "0";
            var t;
            t = null != window["document"]["documentElement"]["getAttribute"]("webdriver") ? "1" : "0";
            var e;
            e = void 0 !== navigator["webdriver"] && navigator["webdriver"] ? "1" : "0";
            var n;
            n = void 0 !== window["webdriver"] ? "1" : "0";
            var o;
            o = void 0 !== window["XPathResult"] || void 0 !== document["XPathResult"] ? "1" : "0";
            var m;
            m = null != window["document"]["documentElement"]["getAttribute"]("driver") ? "1" : "0";
            var r;
            return r = null != window["document"]["documentElement"]["getAttribute"]("selenium") ? "1" : "0",
                [a, t, e, n, o, m, r]["join"](",")
        },
        cma: function(a, t) { //捕捉鼠标点击轨迹算法
            try {
                if (1 == t && bmak["mme_cnt"] < bmak["mme_cnt_lmt"] || 1 != t && bmak["mduce_cnt"] < bmak["mduce_cnt_lmt"]) {
                    var e = a || window["Event"]
                        , n = -1
                        , o = -1;
                    e && e["pageX"] && e["pageY"] ? (n = Math["floor"](e["pageX"]),
                        o = Math["floor"](e["pageY"])) : e && e["clientX"] && e["clientY"] && (n = Math["floor"](e["clientX"]),
                        o = Math["floor"](e["clientY"]));
                    var m = e["toElement"];
                    null == m && (m = e["target"]);
                    // var r = bmak["gf"](m)
                    var r = -1
                        , i = bmak["get_cf_date"]() - bmak["start_ts"]
                        , c = bmak["me_cnt"] + "," + t + "," + i + "," + n + "," + o;
                    if (1 != t) {
                        c = c + "," + r;
                        var b = void 0 !== e["which"] ? e["which"] : e["button"];
                        null != b && 1 != b && (c = c + "," + b)
                    }
                    c += ";",
                        bmak["me_vel"] = bmak["me_vel"] + bmak["me_cnt"] + t + i + n + o,
                        bmak["mact"] = bmak["mact"] + c,
                        bmak["ta"] += i
                }
                1 == t ? bmak["mme_cnt"]++ : bmak["mduce_cnt"]++,
                    bmak["me_cnt"]++,
                bmak["js_post"] && 3 == t && (bmak["aj_type"] = 1,
                    bmak["bpd"](),
                    // bmak["pd"](!0),
                    bmak["ce_js_post"] = 1)
            } catch (a) {}
        },
        x2: function() {
            var a = bmak["ff"]
                , t = a(98) + a(109) + a(97) + a(107) + a(46) + a(103) + a(101) + a(116);
            return t = t + a(95) + a(99) + a(102) + a(95),
                t = "return " + t + a(100) + a(97) + a(116) + a(101) + a(40) + a(41),
                t += ";",
                new Function(t)()
        },
        cpa: function(a, t) {
            try {
                var e = !1;
                if (1 == t && bmak["pme_cnt"] < bmak["pme_cnt_lmt"] || 1 != t && bmak["pduce_cnt"] < bmak["pduce_cnt_lmt"]) {
                    var n = a || window["Event"];
                    if (n && "mouse" != n["pointerType"]) {
                        e = !0;
                        var o = -1
                            , m = -1;
                        n && n["pageX"] && n["pageY"] ? (o = Math["floor"](n["pageX"]),
                            m = Math["floor"](n["pageY"])) : n && n["clientX"] && n["clientY"] && (o = Math["floor"](n["clientX"]),
                            m = Math["floor"](n["clientY"]));
                        var r = bmak["get_cf_date"]() - bmak["start_ts"]
                            , i = bmak["pe_cnt"] + "," + t + "," + r + "," + o + "," + m + ";";
                        bmak["pe_vel"] = bmak["pe_vel"] + bmak["pe_cnt"] + t + r + o + m,
                            bmak["pact"] = bmak["pact"] + i,
                            bmak["ta"] += r,
                            1 == t ? bmak["pme_cnt"]++ : bmak["pduce_cnt"]++
                    }
                }
                1 == t ? bmak["pme_cnt"]++ : bmak["pduce_cnt"]++,
                    bmak["pe_cnt"]++,
                bmak["js_post"] && 3 == t && e && (bmak["aj_type"] = 2,
                    bmak["bpd"](),
                    // bmak["pd"](!0),
                    bmak["ce_js_post"] = 1)
            } catch (a) {}
        },
        ab: function(a) { //对获取信息进行字符的 Unicode 编码
            if (null == a)
                return -1;
            try {
                for (var t = 0, e = 0; e < a["length"]; e++) { //！！！获取到ua进行签名计算
                    var n = a["charCodeAt"](e);
                    n < 128 && (t += n)
                }
                return t
            } catch (a) {
                return -2
            }
        },
        ff: function(a) {
            return String["fromCharCode"](a)
        },
        to: function() {
            var a = bmak["x2"]() % 1e7;
            bmak["d3"] = a;
            for (var t = a, e = 0; e < 5; e++) {
                var n = bmak["pi"](a / Math["pow"](10, e)) % 10
                    , o = n + 1
                    , m = "return a" + bmak["cc"](n) + o + ";";
                t = new Function("a",m)(t)
            }
            bmak["o9"] = t
        },
        gf: function(a) {
            var t;
            if (t = null == a ? document["activeElement"] : a,
            null == document["activeElement"])
                return -1;
            var e = t["getAttribute"]("name");
            if (null == e) {
                var n = t["getAttribute"]("id");
                return null == n ? -1 : bmak["ab"](n)
            }
            return bmak["ab"](e)
        },
        cc: function(a) {
            var t = a % 4;
            2 == t && (t = 3);
            var e = 42 + t;
            return String["fromCharCode"](e)
        },
        isIgn: function(a) {
            var t = document["activeElement"];
            if (null == document["activeElement"])
                return 0;
            var e = t["getAttribute"]("type");
            return 1 == (null == e ? -1 : bmak["get_type"](e)) && bmak["fidcnt"] > 12 && -2 == a ? 1 : 0
        },
        cka: function(a, t) {
            try {
                var e = a || window["event"]
                    , n = -1
                    , o = 1;
                if (bmak["ke_cnt"] < bmak["ke_cnt_lmt"] && e) {
                    n = e["keyCode"];
                    var m = e["charCode"]
                        , r = e["shiftKey"] ? 1 : 0
                        , i = e["ctrlKey"] ? 1 : 0
                        , c = e["metaKey"] ? 1 : 0
                        , b = e["altKey"] ? 1 : 0
                        , d = 8 * r + 4 * i + 2 * c + b
                        , k = bmak["get_cf_date"]() - bmak["start_ts"]
                        , s = bmak["gf"](null)
                        , l = 0;
                    m && n && (n = 0 != m && 0 != n && m != n ? -1 : 0 != n ? n : m),
                    0 == i && 0 == c && 0 == b && n >= 32 && (n = 3 == t && n >= 32 && n <= 126 ? -2 : n >= 33 && n <= 47 ? -3 : n >= 112 && n <= 123 ? -4 : -2),
                        s != bmak["prevfid"] ? (bmak["fidcnt"] = 0,
                            bmak["prevfid"] = s) : bmak["fidcnt"] = bmak["fidcnt"] + 1;
                    if (0 == bmak["isIgn"](n)) {
                        var u = bmak["ke_cnt"] + "," + t + "," + k + "," + n + "," + l + "," + d + "," + s;
                        null != e["isTrusted"] && !1 === e["isTrusted"] && (u += ",0"),
                            u += ";",
                            bmak["kact"] = bmak["kact"] + u,
                            bmak["ke_vel"] = bmak["ke_vel"] + bmak["ke_cnt"] + t + k + n + d + s,
                            bmak["ta"] += k
                    } else
                        o = 0
                }
                o && e && bmak["ke_cnt"]++,
                !bmak["js_post"] || 1 != t || 13 != n && 9 != n || (bmak["aj_type"] = 3,
                    bmak["bpd"](),
                    // bmak["pd"](!0),
                    bmak["ce_js_post"] = 1)
            } catch (a) {}
        },
        cta: function(a, t) {
            try {
                if (1 == t && bmak["tme_cnt"] < bmak["tme_cnt_lmt"] || 1 != t && bmak["tduce_cnt"] < bmak["tduce_cnt_lmt"]) {
                    var e = a || window["event"]
                        , n = -1
                        , o = -1;
                    e && e["pageX"] && e["pageY"] ? (n = Math["floor"](e["pageX"]),
                        o = Math["floor"](e["pageY"])) : e && e["clientX"] && e["clientY"] && (n = Math["floor"](e["clientX"]),
                        o = Math["floor"](e["clientY"]));
                    var m = bmak["get_cf_date"]() - bmak["start_ts"]
                        , r = bmak["te_cnt"] + "," + t + "," + m + "," + n + "," + o + ";";
                    bmak["tact"] = bmak["tact"] + r,
                        bmak["ta"] += m,
                        bmak["te_vel"] = bmak["te_vel"] + bmak["te_cnt"] + t + m + n + o,
                        bmak["doa_throttle"] = 0,
                        bmak["dma_throttle"] = 0
                }
                1 == t ? bmak["tme_cnt"]++ : bmak["tduce_cnt"]++,
                    bmak["te_cnt"]++,
                bmak["js_post"] && 2 == t && bmak["aj_indx_tact"] < bmak["aj_lmt_tact"] && (bmak["aj_type"] = 5,
                    bmak["bpd"](),
                    // bmak["pd"](!0),
                    bmak["ce_js_post"] = 1,
                    bmak["aj_indx_tact"]++)
            } catch (a) {}
        },
        getFloatVal: function(a) {
            try {
                if (-1 != bmak["chknull"](a) && !isNaN(a)) {
                    var t = parseFloat(a);
                    if (!isNaN(t))
                        return t["toFixed"](2)
                }
            } catch (a) {}
            return -1
        },
        cdoa: function(a) {
            try {
                if (bmak["doe_cnt"] < bmak["doe_cnt_lmt"] && bmak["doa_throttle"] < 2 && a) {
                    var t = bmak["get_cf_date"]() - bmak["start_ts"]
                        , e = bmak["getFloatVal"](a["alpha"])
                        , n = bmak["getFloatVal"](a["beta"])
                        , o = bmak["getFloatVal"](a["gamma"])
                        , m = bmak["doe_cnt"] + "," + t + "," + e + "," + n + "," + o + ";";
                    bmak["doact"] = bmak["doact"] + m,
                        bmak["ta"] += t,
                        bmak["doe_vel"] = bmak["doe_vel"] + bmak["doe_cnt"] + t,
                        bmak["doe_cnt"]++
                }
                bmak["js_post"] && bmak["doe_cnt"] > 1 && bmak["aj_indx_doact"] < bmak["aj_lmt_doact"] && (bmak["aj_type"] = 6,
                    bmak["bpd"](),
                    // bmak["pd"](!0),
                    bmak["ce_js_post"] = 1,
                    bmak["aj_indx_doact"]++),
                    bmak["doa_throttle"]++
            } catch (a) {}
        },
        cdma: function(a) {
            try {
                if (bmak["dme_cnt"] < bmak["dme_cnt_lmt"] && bmak["dma_throttle"] < 2 && a) {
                    var t = bmak["get_cf_date"]() - bmak["start_ts"]
                        , e = -1
                        , n = -1
                        , o = -1;
                    a["acceleration"] && (e = bmak["getFloatVal"](a["acceleration"]["x"]),
                        n = bmak["getFloatVal"](a["acceleration"]["y"]),
                        o = bmak["getFloatVal"](a["acceleration"]["z"]));
                    var m = -1
                        , r = -1
                        , i = -1;
                    a["accelerationIncludingGravity"] && (m = bmak["getFloatVal"](a["accelerationIncludingGravity"]["x"]),
                        r = bmak["getFloatVal"](a["accelerationIncludingGravity"]["y"]),
                        i = bmak["getFloatVal"](a["accelerationIncludingGravity"]["z"]));
                    var c = -1
                        , b = -1
                        , d = 1;
                    a["rotationRate"] && (c = bmak["getFloatVal"](a["rotationRate"]["alpha"]),
                        b = bmak["getFloatVal"](a["rotationRate"]["beta"]),
                        d = bmak["getFloatVal"](a["rotationRate"]["gamma"]));
                    var k = bmak["dme_cnt"] + "," + t + "," + e + "," + n + "," + o + "," + m + "," + r + "," + i + "," + c + "," + b + "," + d + ";";
                    bmak["dmact"] = bmak["dmact"] + k,
                        bmak["ta"] += t,
                        bmak["dme_vel"] = bmak["dme_vel"] + bmak["dme_cnt"] + t,
                        bmak["dme_cnt"]++
                }
                bmak["js_post"] && bmak["dme_cnt"] > 1 && bmak["aj_indx_dmact"] < bmak["aj_lmt_dmact"] && (bmak["aj_type"] = 7,
                    bmak["bpd"](),
                    // bmak["pd"](!0),
                    bmak["ce_js_post"] = 1,
                    bmak["aj_indx_dmact"]++),
                    bmak["dma_throttle"]++
            } catch (a) {}
        },
        get_type: function(a) {
            return a = a["toLowerCase"](),
                "text" == a || "search" == a || "url" == a || "email" == a || "tel" == a || "number" == a ? 0 : "password" == a ? 1 : 2
        },
        chknull: function(a) {
            return null == a ? -1 : a
        },
        forminfo: function() { // 获取搜索框的文本信息，如节点、属性等信息
            for (var a = "", t = "", e = document["getElementsByTagName"]("input"), n = -1, o = 0; o < e["length"]; o++) {
                var m = e[o]
                    , r = bmak["ab"](m["getAttribute"]("name"))
                    , i = bmak["ab"](m["getAttribute"]("id"))
                    , c = m["getAttribute"]("required")
                    , b = null == c ? 0 : 1
                    , d = m["getAttribute"]("type")
                    , k = null == d ? -1 : bmak["get_type"](d)
                    , s = m["getAttribute"]("autocomplete");
                null == s ? n = -1 : (s = s["toLowerCase"](),
                    n = "off" == s ? 0 : "on" == s ? 1 : 2);
                var l = m["defaultValue"]
                    , u = m["value"]
                    , _ = 0
                    , f = 0;
                l && 0 != l["length"] && (f = 1),
                !u || 0 == u["length"] || f && u == l || (_ = 1),
                2 != k && (a = a + k + "," + n + "," + _ + "," + b + "," + i + "," + r + "," + f + ";"),
                    t = t + _ + ";"
            }
            return null == bmak["ins"] && (bmak["ins"] = t),
                bmak["cns"] = t,
                a
        },
        startdoadma: function() {
            0 == bmak["doadma_en"] && window["addEventListener"] && (window["addEventListener"]("deviceorientation", bmak["cdoa"], !0),
                window["addEventListener"]("devicemotion", bmak["cdma"], !0),
                bmak["doadma_en"] = 1),
                bmak["doa_throttle"] = 0,
                bmak["dma_throttle"] = 0
        },
        updatet: function() {
            return bmak["get_cf_date"]() - bmak["start_ts"]
        },

        // 触摸
        htm: function(a) {
            bmak["cta"](a, 1)
        },
        hts: function(a) {
            bmak["cta"](a, 2)
        },
        hte: function(a) {
            bmak["cta"](a, 3)
        },
        htc: function(a) {
            bmak["cta"](a, 4)
        },

        // 鼠标
        hmm: function(a) {
            bmak["cma"](a, 1)
        },
        hc: function(a) {
            bmak["cma"](a, 2)
        },
        hmd: function(a) {
            bmak["cma"](a, 3)
        },
        hmu: function(a) {
            bmak["cma"](a, 4)
        },
        // 设备运动
        hpd: function(a) {
            bmak["cpa"](a, 3)
        },
        hpu: function(a) {
            bmak["cpa"](a, 4)
        },

        // 键盘
        hkd: function(a) {
            bmak["cka"](a, 1)
        },
        hku: function(a) {
            bmak["cka"](a, 2)
        },
        hkp: function(a) {
            bmak["cka"](a, 3)
        },
        cfsubmit: function() {
            bmak["sd_debug"]("<cfsubmit/>"),
                bmak["js_post"] ? (bmak["aj_type"] = 4,
                    bmak["bpd"](),
                0 == bmak["ce_js_post"] && bmak["cns"] != bmak["ins"] && bmak["pd"](!0)) : bmak["bpd"]()
        },
        getdurl: function() { //获取 域名
            return bmak["enReadDocUrl"] ? document["URL"]["replace"](/\\|"/g, "") : ""
        },
        x1: function() {
            return Math["floor"](16777216 * (1 + Math["random"]()))["toString"](36)
        },
        gck: function() {
            var a = bmak["x1"]() + bmak["x1"]() + bmak["x1"]() + bmak["x1"]();
            return bmak["set_cookie"](bmak["ckie"], a + "_" + bmak["ab"](a)),
                a
        },
        set_cookie: function(a, t) {
            void 0 !== document["cookie"] && (document["cookie"] = a + "=" + t + "; path=/; expires=Fri, 01 Feb 2025 08:00:00 GMT;")
        },
        get_cookie: function() { //获取_abck  cookie
            try {
                var a = bmak["cookie_chk_read"](bmak["ckie"]);
                return a || (bmak["n_ck"] = 1,
                    a = bmak["bm"] ? "2" : bmak["gck"]()),
                    a
            } catch (a) {}
            return "2"
        },
        cookie_chk_read: function(a) {
            if (document["cookie"])
            // console.log(document['cookie'])
                for (var t = a + "=", e = document["cookie"]["split"]("; "), n = 0; n < e["length"]; n++) {
                    var o = e[n];
                    if (0 === o["indexOf"](t)) {
                        var m = o["substring"](t["length"], o["length"]);
                        if (!bmak["bm"])
                            return m; //返回值m为cookie  _abck的value
                        if (-1 != m["indexOf"]("~"))
                            return m  //
                    }
                }
            return !1
        },
        bpd: function() {
            bmak["sd_debug"]("<bpd>");
            var a = 0;
            try {
                a = bmak["get_cf_date"]();
                var t = bmak["updatet"]()
                    , e = "3";
                bmak["ckie"] && (e = bmak["get_cookie"]());
                var n = bmak["gd"]()
                    , o = window["DeviceOrientationEvent"] ? "do_en" : "do_dis"
                    , m = window["DeviceMotionEvent"] ? "dm_en" : "dm_dis"
                    , r = window["TouchEvent"] ? "t_en" : "t_dis"
                    , i = o + "," + m + "," + r
                    , c = bmak["forminfo"]()
                    , b = bmak["getdurl"]()
                    , d = bmak["aj_type"] + "," + bmak["aj_indx"];
                !bmak["fpcf"]["fpValCalculated"] && (0 == bmak["js_post"] || bmak["aj_indx"] > 0) && bmak["fpcf"]["fpVal"]();
                var k = bmak["ke_vel"] + bmak["me_vel"] + bmak["doe_vel"] + bmak["dme_vel"] + bmak["te_vel"] + bmak["pe_vel"]
                    , s = bmak["get_cf_date"]() - bmak["start_ts"]
                    , l = bmak["pi"](bmak["d2"] / 6)
                    , u = bmak["fas"]()
                    , _ = [bmak["ke_vel"] + 1, bmak["me_vel"] + 1, bmak["te_vel"], bmak["doe_vel"], bmak["dme_vel"], bmak["pe_vel"], k, t, bmak["init_time"], bmak["start_ts"], bmak["fpcf"]["td"], bmak["d2"], bmak["ke_cnt"], bmak["me_cnt"], l, bmak["pe_cnt"], bmak["te_cnt"], s, bmak["ta"], bmak["n_ck"], e, bmak["ab"](e), bmak["fpcf"]["rVal"], bmak["fpcf"]["rCFP"], u]
                    , f = _["join"](",")
                    , p = "" + bmak["ab"](bmak["fpcf"]["fpValstr"])
                    , v = bmak["sed"]();
                bmak["sensor_data"] = bmak["ver"] + "-1,2,-94,-100," + n + "-1,2,-94,-101," + i + "-1,2,-94,-105," + bmak["informinfo"] + "-1,2,-94,-102," + c + "-1,2,-94,-108," + bmak["kact"] + "-1,2,-94,-110," + bmak["mact"] + "-1,2,-94,-117," + bmak["tact"] + "-1,2,-94,-111," + bmak["doact"] + "-1,2,-94,-109," + bmak["dmact"] + "-1,2,-94,-114," + bmak["pact"] + "-1,2,-94,-103," + bmak["vcact"] + "-1,2,-94,-112," + b + "-1,2,-94,-115," + f + "-1,2,-94,-106," + d,
                    bmak["sensor_data"] = bmak["sensor_data"] + "-1,2,-94,-119," + bmak["mr"] + "-1,2,-94,-122," + v + "-1,2,-94,-123," + bmak["mn_r"];
                var h = bmak["ab"](bmak["sensor_data"]);
                bmak["sensor_data"] = bmak["sensor_data"] + "-1,2,-94,-70," + bmak["fpcf"]["fpValstr"] + "-1,2,-94,-80," + p + "-1,2,-94,-116," + bmak["o9"] + "-1,2,-94,-118," + h + "-1,2,-94,-121,",
                    bmak["sd_debug"](",s1:" + bmak["sensor_data"]["slice"](0, 10))
                // console.log(s)
            } catch (a) {
                try {
                    bmak["sd_debug"](",s2:" + a),
                        bmak["sensor_data"] = bmak["ver"] + "-1,2,-94,-100," + bmak["uar"]() + "-1,2,-94,-120," + a["replace"](/\"/g, "\'")
                } catch (a) {
                    bmak["sd_debug"](",s3:" + a)
                }
            }
            try {
                var g = bmak["od"](bmak["cs"], bmak["api_public_key"])["slice"](0, 16)
                    , w = Math["floor"](bmak["get_cf_date"]() / 36e5)
                    , y = bmak["get_cf_date"]()
                    , C = g + bmak["od"](w, g) + bmak["sensor_data"];
                bmak["sensor_data"] = C + ";" + (bmak["get_cf_date"]() - a) + ";" + bmak["tst"] + ";" + (bmak["get_cf_date"]() - y)
            } catch (a) {}
            try {
                if (0 == bmak["sdfn"]["length"])
                    bmak["sd_debug"](",s4"),
                    document["getElementById"]("sensor_data") && (bmak["sd_debug"](",s5"),
                        document["getElementById"]("sensor_data")["value"] = bmak["sensor_data"]);
                else {
                    bmak["sd_debug"](",s6:");
                    for (var j = 0; j < bmak["sdfn"]["length"]; j++)
                        if (bmak["sd_debug"](",a-" + bmak["sdfn"][j]),
                            document["getElementById"](bmak["sdfn"][j])) {
                            bmak["sd_debug"](",b"),
                                document["getElementById"](bmak["sdfn"][j])["value"] = bmak["sensor_data"];
                            var S = document["getElementById"](bmak["sdfn"][j])["value"];
                            "string" == typeof S ? bmak["sd_debug"](",c-" + S["slice"](0, 5)) : bmak["sd_debug"](",c-null")
                        } else
                            bmak["sd_debug"](",d")
                }
            } catch (a) {
                bmak["sd_debug"](",s7:" + a + "," + bmak["sensor_data"])
            }
            bmak["sd_debug"]("</bpd>")
        },
        od: function(a, t) {
            try {
                a = String(a),
                    t = String(t);
                var e = []
                    , n = t["length"];
                if (n > 0) {
                    for (var o = 0; o < a["length"]; o++) {
                        var m = a["charCodeAt"](o)
                            , r = a["charAt"](o)
                            , i = t["charCodeAt"](o % n);
                        m = bmak["rir"](m, 47, 57, i),
                        m != a["charCodeAt"](o) && (r = String["fromCharCode"](m)),
                            e["push"](r)
                    }
                    if (e["length"] > 0)
                        return e["join"]("")
                }
            } catch (a) {}
            return a
        },
        rir: function(a, t, e, n) {
            return a > t && a <= e && (a += n % (e - t)) > e && (a = a - e + t),
                a
        },
        lvc: function(a) {
            try {
                if (bmak["vc_cnt"] < bmak["vc_cnt_lmt"]) {
                    var t = bmak["get_cf_date"]() - bmak["start_ts"]
                        , e = a + "," + t + ";";
                    bmak["vcact"] = bmak["vcact"] + e
                }
                bmak["vc_cnt"]++
            } catch (a) {}
        },
        hvc: function() {
            try {
                var a = 1;
                document[bmak["hn"]] && (a = 0),
                    bmak["lvc"](a)
            } catch (a) {}
        },
        hb: function(a) {
            bmak["lvc"](2)
        },
        hf: function(a) {
            bmak["lvc"](3)
        },
        rve: function() {
            void 0 !== document["hidden"] ? (bmak["hn"] = "hidden",
                bmak["vc"] = "visibilitychange") : void 0 !== document["mozHidden"] ? (bmak["hn"] = "mozHidden",
                bmak["vc"] = "mozvisibilitychange") : void 0 !== document["msHidden"] ? (bmak["hn"] = "msHidden",
                bmak["vc"] = "msvisibilitychange") : void 0 !== document["webkitHidden"] && (bmak["hn"] = "webkitHidden",
                bmak["vc"] = "webkitvisibilitychange"),
                document["addEventListener"] ? "unk" != bmak["hn"] && document["addEventListener"](bmak["vc"], bmak["hvc"], !0) : document["attachEvent"] && "unk" != bmak["hn"] && document["attachEvent"](bmak["vc"], bmak["hvc"]),
                window["onblur"] = bmak["hb"],
                window["onfocus"] = bmak["hf"]
        },
        startTracking: function() {  //启动监听事件
            bmak["startdoadma"]();
            try {
                bmak["to"]()
            } catch (a) {
                bmak["o9"] = -654321
            }
            setInterval(function() {
                bmak["startdoadma"]()
            }, 3e3),
                document["addEventListener"] ? (document["addEventListener"]("touchmove", bmak["htm"], !0),
                    document["addEventListener"]("touchstart", bmak["hts"], !0),
                    document["addEventListener"]("touchend", bmak["hte"], !0),
                    document["addEventListener"]("touchcancel", bmak["htc"], !0),
                    document["addEventListener"]("mousemove", bmak["hmm"], !0),
                    document["addEventListener"]("click", bmak["hc"], !0),
                    document["addEventListener"]("mousedown", bmak["hmd"], !0),
                    document["addEventListener"]("mouseup", bmak["hmu"], !0),
                    document["addEventListener"]("pointerdown", bmak["hpd"], !0),
                    document["addEventListener"]("pointerup", bmak["hpu"], !0),
                    document["addEventListener"]("keydown", bmak["hkd"], !0),
                    document["addEventListener"]("keyup", bmak["hku"], !0),
                    document["addEventListener"]("keypress", bmak["hkp"], !0)) : document["attachEvent"] && (document["attachEvent"]("touchmove", bmak["htm"]),
                    document["attachEvent"]("touchstart", bmak["hts"]),
                    document["attachEvent"]("touchend", bmak["hte"]),
                    document["attachEvent"]("touchcancel", bmak["htc"]),
                    document["attachEvent"]("onmousemove", bmak["hmm"]),
                    document["attachEvent"]("onclick", bmak["hc"]),
                    document["attachEvent"]("onmousedown", bmak["hmd"]),
                    document["attachEvent"]("onmouseup", bmak["hmu"]),
                    document["attachEvent"]("onpointerdown", bmak["hpd"]),
                    document["attachEvent"]("onpointerup", bmak["hpu"]),
                    document["attachEvent"]("onkeydown", bmak["hkd"]),
                    document["attachEvent"]("onkeyup", bmak["hku"]),
                    document["attachEvent"]("onkeypress", bmak["hkp"])),
                bmak["rve"](),
                bmak["informinfo"] = bmak["forminfo"](),
            bmak["js_post"] && (bmak["aj_type"] = 0,
                bmak["bpd"]())
            // bmak["pd"](!0))
        },
        gb: function(a, t) {
            var e = a["charCodeAt"](t);
            return e = e > 255 ? 0 : e
        },
        encode: function(a) {
            if ("undefined" != typeof btoa)
                return btoa(a);
            for (var t, e, n, o, m, r, i, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", b = "", d = 3 * Math["floor"](a["length"] / 3), k = 0; k < d; k += 3)
                t = bmak["gb"](a, k),
                    e = bmak["gb"](a, k + 1),
                    n = bmak["gb"](a, k + 2),
                    o = t >> 2,
                    m = ((3 & t) << 4) + (e >> 4),
                    r = ((15 & e) << 2) + (n >> 6),
                    i = 63 & n,
                    b = b + c["charAt"](o) + c["charAt"](m) + c["charAt"](r) + c["charAt"](i);
            return a["length"] % 3 == 1 && (t = bmak["gb"](a, k),
                o = t >> 2,
                m = (3 & t) << 4,
                b = b + c["charAt"](o) + c["charAt"](m) + "=="),
            a["length"] % 3 == 2 && (t = bmak["gb"](a, k),
                e = bmak["gb"](a, k + 1),
                o = t >> 2,
                m = ((3 & t) << 4) + (e >> 4),
                r = (15 & e) << 2,
                b = b + c["charAt"](o) + c["charAt"](m) + c["charAt"](r) + "="),
                b
        },
        ie9OrLower: function() {
            try {
                if ("string" == typeof navigator["appVersion"] && -1 != navigator["appVersion"]["indexOf"]("MSIE")) {
                    if (parseFloat(navigator["appVersion"]["split"]("MSIE")[1]) <= 9)
                        return !0
                }
            } catch (a) {}
            return !1
        },
        apicall: function(a, t) {
            var e;
            e = window["XDomainRequest"] ? new XDomainRequest : window["XMLHttpRequest"] ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP"),
                e["open"]("POST", a, t);
            var n = bmak["encode"](bmak["api_public_key"] + ":");
            bmak["auth"] = ",\"auth\" : \"" + n + "\"",
            e["setRequestHeader"] && (e["setRequestHeader"]("Content-type", "application/json"),
                e["setRequestHeader"]("Authorization", "Basic " + n),
                bmak["auth"] = "");
            var o = "{\"session_id\" : \"" + bmak["session_id"] + "\",\"sensor_data\" : \"" + bmak["sensor_data"] + "\"" + bmak["auth"] + "}";
            e["send"](o)
        },
        apicall_bm: function(a, t, e) {
            var n;
            void 0 !== window["XMLHttpRequest"] ? n = new XMLHttpRequest : void 0 !== window["XDomainRequest"] ? (n = new XDomainRequest,
                    n["onload"] = function() {
                        this["readyState"] = 4,
                        this["onreadystatechange"]instanceof Function && this["onreadystatechange"]()
                    }
            ) : n = new ActiveXObject("Microsoft.XMLHTTP"),
                n["open"]("POST", a, t),
            void 0 !== n["withCredentials"] && (n["withCredentials"] = !0);
            var o = "{\"sensor_data\":\"" + bmak["sensor_data"] + "\"}";
            n["onreadystatechange"] = function() {
                n["readyState"] > 3 && e && e(n)
            }
                ,
                n["send"](o)
        },
        pd_en: function() {
            var a, t = bmak["getdurl"]();
            return 0 == bmak["thr"] ? 1 : (a = t["indexOf"]("home.html") > -1 ? 1 : 0,
                bmak["start_ts"] % 10 != 0 ? 0 : bmak["aj_indx"] > 3 ? 0 : a && bmak["aj_indx"] > 0 ? 0 : 1)
        },
        pd: function(a) {  // 发送轨迹se
            var t;
            (t = bmak["pd_en"]()) && (bmak["bm"] ? bmak["check_stop_protocol"]() && bmak["apicall_bm"](bmak["cf_url"], a, bmak["patp"]) : bmak["apicall"](bmak["cf_url"], a),
                bmak["aj_indx"] = bmak["aj_indx"] + 1)
        },
        check_stop_protocol: function() {
            var a = bmak["get_stop_signals"]()
                , t = a[0];
            !bmak["rst"] && t > -1 && (bmak["ir"](),
                bmak["rst"] = !0);
            var e = a[1];
            return -1 == e || bmak["aj_ss"] < e
        },
        get_stop_signals: function() {   //获取cookie签名  计算
            var a = [-1, -1]
                , t = bmak["cookie_chk_read"](bmak["ckie"]);
            if (!1 !== t)
                try {
                    var e = decodeURIComponent(t)["split"]("~");
                    if (e["length"] >= 4) {
                        var n = bmak["pi"](e[1])
                            , o = bmak["pi"](e[3]);
                        n = isNaN(n) ? -1 : n,
                            o = isNaN(o) ? -1 : o,
                            a = [o, n]
                    }
                } catch (a) {}
            return a
        },
        patp: function(a) {
            bmak["aj_ss"]++,
                bmak["rst"] = !1
        },
        get_mn_params_from_abck: function() {
            var a = [0, "default_abck", "", 1e5, 100, 1e3];
            try {
                var t = bmak["cookie_chk_read"](bmak["ckie"]);
                if (!1 !== t) {
                    var e = decodeURIComponent(t)["split"]("~");
                    if (e["length"] >= 5) {
                        var n = e[0]
                            , o = e[4]
                            , m = o["split"]("-");
                        if (m["length"] >= 5) {
                            a = [bmak["pi"](m[0]), n, m[1], bmak["pi"](m[2]), bmak["pi"](m[3]), bmak["pi"](m[4])]
                        }
                    }
                }
            } catch (a) {}
            return a
        },
        mn_get_challenge: function() {
            var a = bmak["get_mn_params_from_abck"]()
                , t = a[0]
                , e = a[1]
                , n = a[2]
                , o = a[3]
                , m = a[4]
                , r = a[5];
            bmak["mn_abck"] = e,
                bmak["mn_psn"] = n["toString"](),
                bmak["mn_sen"] = t,
                bmak["mn_cd"] = o,
                bmak["mn_tout"] = m,
                bmak["mn_stout"] = r,
                bmak["mn_ts"] = bmak["start_ts"],
                bmak["mn_cc"] = bmak["mn_abck"] + bmak["start_ts"] + bmak["mn_psn"]
        },
        mn_check_if_new_challenge: function() {
            return bmak["mn_cc"] != bmak["mn_lc"] || bmak["mn_cd"] != bmak["mn_ld"] ? 1 : 0
        },
        mn_poll: function() {
            if (0 == bmak["mn_state"]) {
                bmak["mn_get_challenge"]();
                var a = bmak["mn_check_if_new_challenge"]();
                bmak["mn_sen"] && a && (bmak["mn_state"] = 1,
                    bmak["mn_mc_indx"] = 0,
                    bmak["mn_al"] = [],
                    bmak["mn_il"] = [],
                    bmak["mn_tcl"] = [],
                    bmak["mn_lg"] = [],
                    setTimeout(bmak["mn_w"], bmak["mn_tout"]))
            }
        },
        mn_init: function() {
            setInterval(bmak["mn_poll"], 1e3)
        },
        rotate_left: function(a, t) {
            return a << t | a >>> 32 - t
        },
        encode_utf8: function(a) {
            return unescape(encodeURIComponent(a))
        },
        mn_h: function(a) {
            var t = 1732584193
                , e = 4023233417
                , n = 2562383102
                , o = 271733878
                , m = 3285377520
                , r = bmak["encode_utf8"](a)
                , i = 8 * r["length"];
            r += String["fromCharCode"](128);
            for (var c = r["length"] / 4 + 2, b = Math["ceil"](c / 16), d = new Array(b), k = 0; k < b; k++) {
                d[k] = new Array(16);
                for (var s = 0; s < 16; s++)
                    d[k][s] = r["charCodeAt"](64 * k + 4 * s) << 24 | r["charCodeAt"](64 * k + 4 * s + 1) << 16 | r["charCodeAt"](64 * k + 4 * s + 2) << 8 | r["charCodeAt"](64 * k + 4 * s + 3) << 0
            }
            var l = i / Math["pow"](2, 32);
            d[b - 1][14] = Math["floor"](l),
                d[b - 1][15] = 4294967295 & i;
            for (var u = 0; u < b; u++) {
                for (var _, f, p, v = new Array(80), h = t, g = e, w = n, y = o, C = m, k = 0; k < 80; k++)
                    v[k] = k < 16 ? d[u][k] : bmak["rotate_left"](v[k - 3] ^ v[k - 8] ^ v[k - 14] ^ v[k - 16], 1),
                        k < 20 ? (_ = g & w | ~g & y,
                            f = 1518500249) : k < 40 ? (_ = g ^ w ^ y,
                            f = 1859775393) : k < 60 ? (_ = g & w | g & y | w & y,
                            f = 2400959708) : (_ = g ^ w ^ y,
                            f = 3395469782),
                        p = bmak["rotate_left"](h, 5) + _ + C + f + v[k],
                        C = y,
                        y = w,
                        w = bmak["rotate_left"](g, 30),
                        g = h,
                        h = p;
                t += h,
                    e += g,
                    n += w,
                    o += y,
                    m += C
            }
            return [t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n, o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, 255 & m]
        },
        bdm: function(a, t) {
            for (var e = 0, n = 0; n < a["length"]; ++n)
                e = (e << 8 | a[n]) >>> 0,
                    e %= t;
            return e
        },
        mn_w: function() {
            try {
                for (var a = 0, t = 0, e = 0, n = "", o = bmak["get_cf_date"](), m = bmak["mn_cd"] + bmak["mn_mc_indx"]; 0 == a; ) {
                    n = Math["random"]()["toString"](16);
                    var r = bmak["mn_cc"] + m["toString"]() + n
                        , i = bmak["mn_h"](r);
                    if (0 == bmak["bdm"](i, m))
                        a = 1,
                            e = bmak["get_cf_date"]() - o,
                            bmak["mn_al"]["push"](n),
                            bmak["mn_tcl"]["push"](e),
                            bmak["mn_il"]["push"](t),
                        0 == bmak["mn_mc_indx"] && (bmak["mn_lg"]["push"](bmak["mn_abck"]),
                            bmak["mn_lg"]["push"](bmak["mn_ts"]),
                            bmak["mn_lg"]["push"](bmak["mn_psn"]),
                            bmak["mn_lg"]["push"](bmak["mn_cc"]),
                            bmak["mn_lg"]["push"](bmak["mn_cd"]["toString"]()),
                            bmak["mn_lg"]["push"](m["toString"]()),
                            bmak["mn_lg"]["push"](n),
                            bmak["mn_lg"]["push"](r),
                            bmak["mn_lg"]["push"](i));
                    else if ((t += 1) % 1e3 == 0 && (e = bmak["get_cf_date"]() - o) > bmak["mn_stout"])
                        return void setTimeout(bmak["mn_w"], 1e3 + bmak["mn_stout"])
                }
                bmak["mn_mc_indx"] += 1,
                    bmak["mn_mc_indx"] < bmak["mn_mc_lmt"] ? setTimeout(bmak["mn_w"], bmak["mn_tout"] + e) : (bmak["mn_mc_indx"] = 0,
                        bmak["mn_state"] = 0,
                        bmak["mn_lc"] = bmak["mn_cc"],
                        bmak["mn_ld"] = bmak["mn_cd"],
                        bmak["mn_r"] = bmak["mn_pr"]())
            } catch (a) {
                bmak["sd_debug"](",mn_w:" + a)
            }
        },
        mn_pr: function() {
            return bmak["mn_al"]["join"](",") + ";" + bmak["mn_tcl"]["join"](",") + ";" + bmak["mn_il"]["join"](",") + ";" + bmak["mn_lg"]["join"](",") + ";"
        },
        listFunctions: {
            _setJsPost: function(a) {
                bmak["js_post"] = a,
                bmak["js_post"] && (bmak["enReadDocUrl"] = 1)
            },
            _setSessionId: function(a) {
                bmak["session_id"] = a
            },
            _setJavaScriptKey: function(a) {
                bmak["api_public_key"] = a
            },
            _setEnAddHidden: function(a) {
                bmak["enAddHidden"] = a
            },
            _setInitTime: function(a) {
                bmak["init_time"] = a
            },
            _setApiUrl: function(a) {
                bmak["cf_url"] = a
            },
            _setEnGetLoc: function(a) {
                bmak["enGetLoc"] = a
            },
            _setEnReadDocUrl: function(a) {
                bmak["enReadDocUrl"] = a
            },
            _setDisFpCalOnTimeout: function(a) {
                bmak["disFpCalOnTimeout"] = a
            },
            _setCookie: function(a) {
                bmak["ckie"] = a
            },
            _setCS: function(a) {
                bmak["cs"] = (String(a) + bmak["cs"])["slice"](0, 16)
            },
            _setFsp: function(a) {
                bmak["fsp"] = a,
                bmak["fsp"] && (bmak["cf_url"] = bmak["cf_url"]["replace"](/^http:\/\//i, "https://"))
            },
            _setBm: function(a) {
                bmak["bm"] = a,
                bmak["bm"] && (bmak["cf_url"] = (bmak["fsp"] ? "https:" : document["location"]["protocol"]) + "//" + document["location"]["hostname"] + "/_bm/_data",
                    bmak["api_public_key"] = "afSbep8yjnZUjq3aL010jO15Sawj2VZfdYK8uY90uxq",
                    bmak["js_post"] = !0,
                    bmak["enReadDocUrl"] = 1,
                    bmak["runFonts"] = !1)
            },
            _setAu: function(a) {
                "string" == typeof a && 0 === a["lastIndexOf"]("/", 0) && (bmak["cf_url"] = (bmak["fsp"] ? "https:" : document["location"]["protocol"]) + "//" + document["location"]["hostname"] + a)
            },
            _setSDFieldNames: function() {
                try {
                    var a;
                    for (a = 0; a < arguments["length"]; a += 1)
                        bmak["sdfn"]["push"](arguments[a])
                } catch (a) {
                    bmak["sd_debug"](",setSDFN:" + a)
                }
            },
            _setUseAltFonts: function(a) {
                bmak["altFonts"] = a
            }
        },
        applyFunc: function() {
            var a, t, e;
            for (a = 0; a < arguments["length"]; a += 1)
                e = arguments[a];
            t = e["shift"](),
            bmak["listFunctions"][t] && bmak["listFunctions"][t]["apply"](bmak["listFunctions"], e)
        }
    };
    bmak["sd_debug"]("<init/>");
    for (var i = 0; i < _cf["length"]; i++)
        bmak["applyFunc"](_cf[i]);
    bmak["sd_debug"]("<setSDFN>" + bmak["sdfn"]["join"]() + "</setSDFN>"),
        _cf = {
            push: bmak["applyFunc"]
        },
        function(a) {
            var t = {};
            a["fpcf"] = t,
                t["sf4"] = function() {
                    var a = bmak["uar"]();
                    return !(!~a["indexOf"]("Version/4.0") || !(~a["indexOf"]("iPad;") || ~a["indexOf"]("iPhone") || ~a["indexOf"]("Mac OS X 10_5")))
                }
                ,
                t["fpValstr"] = "-1",
                t["fpValCalculated"] = !1,
                t["rVal"] = "-1",
                t["rCFP"] = "-1",
                t["cache"] = {},
                t["td"] = -999999,
                t["clearCache"] = function() {
                    t["cache"] = {}
                }
                ,
                t["fpVal"] = function() {
                    t["fpValCalculated"] = !0;
                    try {
                        var a = 0;
                        a = Date["now"] ? Date["now"]() : +new Date;
                        var e = t["data"]();
                        t["fpValstr"] = e["replace"](/\"/g, "\\\"");
                        var n = 0;
                        n = Date["now"] ? Date["now"]() : +new Date,
                            t["td"] = n - a
                    } catch (a) {}
                }
                ,
                t["timezoneOffsetKey"] = function() {
                    return (new Date)["getTimezoneOffset"]()
                }
                ,
                t["data"] = function() { // canvas计算错误， 正确：
                    var a = screen["colorDepth"] ? screen["colorDepth"] : -1
                        , e = screen["pixelDepth"] ? screen["pixelDepth"] : -1
                        , n = navigator["cookieEnabled"] ? navigator["cookieEnabled"] : -1
                        , o = navigator["javaEnabled"] ? navigator["javaEnabled"]() : -1
                        , m = navigator["doNotTrack"] ? navigator["doNotTrack"] : -1
                        , r = "default";
                    return r = bmak["runFonts"] ? bmak["altFonts"] ? t["fonts_optm"]() : t["fonts"]() : "dis",
                        [t["canvas"](), r, t["pluginInfo"](), t["sessionStorageKey"](), t["localStorageKey"](), t["indexedDbKey"](), t["timezoneOffsetKey"](), t["webrtcKey"](), a, e, n, o, m]["join"](";")
                }
                ,
                t["PLUGINS"] = ["WebEx64 General Plugin Container", "YouTube Plug-in", "Java Applet Plug-in", "Shockwave Flash", "iPhotoPhotocast", "SharePoint Browser Plug-in", "Chrome Remote Desktop Viewer", "Chrome PDF Viewer", "Native Client", "Unity Player", "WebKit-integrierte PDF", "QuickTime Plug-in", "RealPlayer Version Plugin", "RealPlayer(tm) G2 LiveConnect-Enabled Plug-In (32-bit)", "Mozilla Default Plug-in", "Adobe Acrobat", "AdobeAAMDetect", "Google Earth Plug-in", "Java Plug-in 2 for NPAPI Browsers", "Widevine Content Decryption Module", "Microsoft Office Live Plug-in", "Windows Media Player Plug-in Dynamic Link Library", "Google Talk Plugin Video Renderer", "Edge PDF Viewer", "Shockwave for Director", "Default Browser Helper", "Silverlight Plug-In"],
                t["pluginInfo"] = function() {
                    if (void 0 === navigator["plugins"])
                        return null;
                    for (var a = t["PLUGINS"]["length"], e = "", n = 0; n < a; n++) {
                        var o = t["PLUGINS"][n];
                        void 0 !== navigator["plugins"][o] && (e = e + "," + n)
                    }
                    return e
                }
                ,
                t["canvas"] = function() {   //canvas 图片存在问题，无法获取最正确的值
                    try {
                        if (void 0 !== t["cache"]["canvas"])
                            return t["cache"]["canvas"];
                        var a = -1;
                        if (!t["sf4"]()) {
                            var e = document["createElement"]("canvas");
                            if (e["width"] = 280,
                                e["height"] = 60,
                                e["style"]["display"] = "none",
                            "function" == typeof e["getContext"]) {
                                var n = e["getContext"]("2d");
                                n["fillStyle"] = "rgb(102, 204, 0)",
                                    n["fillRect"](100, 5, 80, 50),
                                    n["fillStyle"] = "#f60",
                                    n["font"] = "16pt Arial",
                                    n["fillText"]("<@nv45. F1n63r,Pr1n71n6!", 10, 40),
                                    n["strokeStyle"] = "rgb(120, 186, 176)",
                                    n["arc"](80, 10, 20, 0, Math["PI"], !1),
                                    n["stroke"]();
                                var o = e["toDataURL"]();
                                a = 0;
                                for (var m = 0; m < o["length"]; m++) {
                                    a = (a << 5) - a + o["charCodeAt"](m),
                                        a &= a
                                }
                                a = a["toString"]();
                                var r = document["createElement"]("canvas");
                                r["width"] = 16,
                                    r["height"] = 16;
                                var i = r["getContext"]("2d");
                                i["font"] = "6pt Arial",
                                    t["rVal"] = Math["floor"](1e3 * Math["random"]())["toString"](),
                                    i["fillText"](t["rVal"], 1, 12);
                                for (var c = r["toDataURL"](), b = 0, d = 0; d < c["length"]; d++) {
                                    b = (b << 5) - b + c["charCodeAt"](d),
                                        b &= b
                                }
                                t["rCFP"] = b["toString"]()
                            }
                        }
                        return a
                    } catch (a) {
                        return "exception"
                    }
                }
                ,
                t["fonts_optm"] = function() {
                    var a = 200
                        , e = bmak["get_cf_date"]()
                        , n = [];
                    if (!t["sf4"]()) {
                        var o = ["sans-serif", "monospace"]
                            , m = [0, 0]
                            , r = [0, 0]
                            , i = document["createElement"]("div");
                        i["style"]["cssText"] = "position: relative; left: -9999px; visibility: hidden; display: block !important";
                        var c;
                        for (c = 0; c < o["length"]; c++) {
                            var b = document["createElement"]("span");
                            b["innerHTML"] = "abcdefhijklmnopqrstuvxyz1234567890;+-.",
                                b["style"]["fontSize"] = "90px",
                                b["style"]["fontFamily"] = o[c],
                                i["appendChild"](b)
                        }
                        for (document["body"]["appendChild"](i),
                                 c = 0; c < i["childNodes"]["length"]; c++)
                            b = i["childNodes"][c],
                                m[c] = b["offsetWidth"],
                                r[c] = b["offsetHeight"];
                        if (document["body"]["removeChild"](i),
                        bmak["get_cf_date"]() - e > a)
                            return "";
                        var d = ["Geneva", "Lobster", "New York", "Century", "Apple Gothic", "Minion Pro", "Apple LiGothic", "Century Gothic", "Monaco", "Lato", "Fantasque Sans Mono", "Adobe Braille", "Cambria", "Futura", "Bell MT", "Courier", "Courier New", "Calibri", "Avenir Next", "Birch Std", "Palatino", "Ubuntu Regular", "Oswald", "Batang", "Ubuntu Medium", "Cantarell", "Droid Serif", "Roboto", "Helvetica Neue", "Corsiva Hebrew", "Adobe Hebrew", "TI-Nspire", "Comic Neue", "Noto", "AlNile", "Palatino-Bold", "ArialHebrew-Light", "Avenir", "Papyrus", "Open Sans", "Times", "Quicksand", "Source Sans Pro", "Damascus", "Microsoft Sans Serif"]
                            , k = document["createElement"]("div");
                        k["style"]["cssText"] = "position: relative; left: -9999px; visibility: hidden; display: block !important";
                        for (var s = [], l = 0; l < d["length"]; l++) {
                            var u = document["createElement"]("div");
                            for (c = 0; c < o["length"]; c++) {
                                var b = document["createElement"]("span");
                                b["innerHTML"] = "abcdefhijklmnopqrstuvxyz1234567890;+-.",
                                    b["style"]["fontSize"] = "90px",
                                    b["style"]["fontFamily"] = d[l] + "," + o[c],
                                    u["appendChild"](b)
                            }
                            k["appendChild"](u)
                        }
                        if (bmak["get_cf_date"]() - e > a)
                            return "";
                        document["body"]["appendChild"](k);
                        for (var l = 0; l < k["childNodes"]["length"]; l++) {
                            var _ = !1
                                , u = k["childNodes"][l];
                            for (c = 0; c < u["childNodes"]["length"]; c++) {
                                var b = u["childNodes"][c];
                                if (b["offsetWidth"] !== m[c] || b["offsetHeight"] !== r[c]) {
                                    _ = !0;
                                    break
                                }
                            }
                            if (_ && s["push"](l),
                            bmak["get_cf_date"]() - e > a)
                                break
                        }
                        document["body"]["removeChild"](k),
                            n = s["sort"]()
                    }
                    return n["join"](",")
                }
                ,
                t["fonts"] = function() {
                    var a = [];
                    if (!t["sf4"]()) {
                        var e = ["serif", "sans-serif", "monospace"]
                            , n = [0, 0, 0]
                            , o = [0, 0, 0]
                            , m = document["createElement"]("span");
                        m["innerHTML"] = "abcdefhijklmnopqrstuvxyz1234567890;+-.",
                            m["style"]["fontSize"] = "90px";
                        var r;
                        for (r = 0; r < e["length"]; r++)
                            m["style"]["fontFamily"] = e[r],
                                document["body"]["appendChild"](m),
                                n[r] = m["offsetWidth"],
                                o[r] = m["offsetHeight"],
                                document["body"]["removeChild"](m);
                        for (var i = ["Geneva", "Lobster", "New York", "Century", "Apple Gothic", "Minion Pro", "Apple LiGothic", "Century Gothic", "Monaco", "Lato", "Fantasque Sans Mono", "Adobe Braille", "Cambria", "Futura", "Bell MT", "Courier", "Courier New", "Calibri", "Avenir Next", "Birch Std", "Palatino", "Ubuntu Regular", "Oswald", "Batang", "Ubuntu Medium", "Cantarell", "Droid Serif", "Roboto", "Helvetica Neue", "Corsiva Hebrew", "Adobe Hebrew", "TI-Nspire", "Comic Neue", "Noto", "AlNile", "Palatino-Bold", "ArialHebrew-Light", "Avenir", "Papyrus", "Open Sans", "Times", "Quicksand", "Source Sans Pro", "Damascus", "Microsoft Sans Serif"], c = [], b = 0; b < i["length"]; b++) {
                            var d = !1;
                            for (r = 0; r < e["length"]; r++)
                                if (m["style"]["fontFamily"] = i[b] + "," + e[r],
                                    document["body"]["appendChild"](m),
                                m["offsetWidth"] === n[r] && m["offsetHeight"] === o[r] || (d = !0),
                                    document["body"]["removeChild"](m),
                                    d) {
                                    c["push"](b);
                                    break
                                }
                        }
                        a = c["sort"]()
                    }
                    return a["join"](",")
                }
                ,
                t["webrtcKey"] = function() {
                    return "function" == typeof window["RTCPeerConnection"] || "function" == typeof window["mozRTCPeerConnection"] || "function" == typeof window["webkitRTCPeerConnection"]
                }
                ,
                t["indexedDbKey"] = function() {
                    return !!t["hasIndexedDB"]()
                }
                ,
                t["sessionStorageKey"] = function() {
                    return !!t["hasSessionStorage"]()
                }
                ,
                t["localStorageKey"] = function() {
                    return !!t["hasLocalStorage"]()
                }
                ,
                t["hasSessionStorage"] = function() {
                    try {
                        return !!window["sessionStorage"]
                    } catch (a) {
                        return !1
                    }
                }
                ,
                t["hasLocalStorage"] = function() {
                    try {
                        return !!window["localStorage"]
                    } catch (a) {
                        return !1
                    }
                }
                ,
                t["hasIndexedDB"] = function() {
                    return !!window["indexedDB"]
                }
        }(bmak);
    try {
        bmak["ckie"] && bmak["get_cookie"]()
    } catch (a) {}
    try {
        bmak["ir"](),
            bmak["t_tst"] = bmak["get_cf_date"](),
            bmak["startTracking"](),
            bmak["tst"] = bmak["get_cf_date"]() - bmak["t_tst"],
        bmak["disFpCalOnTimeout"] || setTimeout(bmak["fpcf"]["fpVal"], 100);
        for (var i = 0; i < 3; i++)
            setTimeout(bmak["getmr"], 400 + 5e3 * i);
        setTimeout(bmak["mn_init"], 1e3)
    } catch (a) {}
// 创造鼠标事件
    var evnt = document.createEvent("MouseEvents");
// var evnt_1 = document.createEvent("MouseEvents");
// var evnt_2 = document.createEvent("MouseEvents");
// var evnt_3 = document.createEvent("MouseEvents");
    var mouse_event_move = document.createEvent("MouseEvents");
    var mouse_event_move_1 = document.createEvent("MouseEvents");
    var mouse_event_move_2 = document.createEvent("MouseEvents");
    var mouse_event_move_3 = document.createEvent("MouseEvents");
    var mouse_event_move_4 = document.createEvent("MouseEvents");
    var mouse_event_move_5 = document.createEvent("MouseEvents");
    var mouse_event_move_6 = document.createEvent("MouseEvents");
    var mouse_event_move_7 = document.createEvent("MouseEvents");
    var mouse_event_move_8 = document.createEvent("MouseEvents");
    var mouse_event_move_9 = document.createEvent("MouseEvents");
    var mouse_event_move_10 = document.createEvent("MouseEvents");
    var mouse_event_move_11 = document.createEvent("MouseEvents");
    var mouse_event_click = document.createEvent("MouseEvents");
    var mouse_event_down = document.createEvent("MouseEvents");
    var mouse_event_up = document.createEvent("MouseEvents");
    var key_event_down = document.createEvent("KeyboardEvent");
    var key_event_up = document.createEvent("KeyboardEvent");
    var key_event_press = document.createEvent("KeyboardEvent");
// var pointer_event_down = document.createEvent("PointerEvent");
// var pointer_event_up = document.createEvent("PointerEvent");



// var poiner_event = window.
// 初始化鼠标事
// initMouseEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window,
// detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean,
// buttonArg: number, relatedTargetArg: EventTarget | null): void;
// mousemove,false,true,window,0,365,265,203,141,false,false,false,flase,0,null
    evnt.initMouseEvent("touchmove",true,true, window, 0, 293, 361, 292, 227, false, false,false,false,0,null)
// evnt_1.initMouseEvent("touchstart",true,true, window, 0, 294, 361, 291, 222, false, false,false,false,0,null)
// evnt_2.initMouseEvent("touchend",true,true, window, 0, 295, 360, 290, 223, false, false,false,false,0,null)
// evnt_3.initMouseEvent("touchcancel",true,true, window, 0, 291, 363, 293, 228, false, false,false,false,0,null)
    mouse_event_move.initMouseEvent("mousemove",true,true, window, 0, 296, 362, 294, 228,false, false,false,false,0,null,768,18)
// document.addEventListener("mousemove", bmak.hmm, false)

    mouse_event_move_1.initMouseEvent("mousemove",true,true, window, 0, 297, 346, 278, 228,false, false,false,false,0,null,768,18)

    mouse_event_move_2.initMouseEvent("mousemove",true,true, window, 0, 230, 389, 245, 228,false, false,false,false,0,null,768,18)
// document.addEventListener("mousemove", bmak.hmm, false)
    mouse_event_move_3.initMouseEvent("mousemove",true,true, window, 0, 231, 347, 255, 228,false, false,false,false,0,null,768,18)
// document.addEventListener("mousemove", bmak.hmm, false)
    mouse_event_move_4.initMouseEvent("mousemove",true,true, window, 0, 232, 331, 266, 228,false, false,false,false,0,null,768,18)
// document.addEventListener("mousemove", bmak.hmm, false)
    mouse_event_move_5.initMouseEvent("mousemove",true,true, window, 0, 244, 352, 277, 228,false, false,false,false,0,null,768,18)
// document.addEventListener("mousemove", bmak.hmm, false)
    mouse_event_move_6.initMouseEvent("mousemove",true,true, window, 0, 256, 367, 288, 228,false, false,false,false,0,null,768,18)
    mouse_event_move_7.initMouseEvent("mousemove",true,true, window, 0, 256, 367, 288, 228,false, false,false,false,0,null,768,18)
    mouse_event_move_8.initMouseEvent("mousemove",true,true, window, 0, 256, 367, 288, 228,false, false,false,false,0,null,768,18)
    mouse_event_move_9.initMouseEvent("mousemove",true,true, window, 0, 256, 367, 288, 228,false, false,false,false,0,null,768,18)
    mouse_event_move_10.initMouseEvent("mousemove",true,true, window, 0, 256, 367, 288, 228,false, false,false,false,0,null,768,18)
    mouse_event_move_11.initMouseEvent("mousemove",true,true, window, 0, 256, 367, 288, 228,false, false,false,false,0,null,768,18)
// document.addEventListener("mousemove", bmak.hmm, false)
// mouse_event_click.initMouseEvent("click",true,true, window, 0, 296, 362, 294, 228, false, false,false,false,0,768,18,null)
    mouse_event_down.initMouseEvent("mousedown",true,true, window, 0, 256, 367, 288, 228, false, false,false,false,0,null,768,18)
// mouse_event_up.initMouseEvent("mouseup",true,true, window, 0, 296, 362, 294, 228, false, false,false,false,0,768,18,null)
// 点击事件
// pointer_event_down.PointerEventInitOptional("pointerdown",true,true, window, 0, 296, 362, 294, 228, false, false,false,false,0,null)
// pointer_event_up.PointerEventInitOptional("pointerup",true,true, window, 0, 296, 362, 294, 228, false, false,false,false,0,null)
// key_event_down.KeyboardEventInit("keydown",true,true, window, 0, 296, 362, 294, 228, false, false,false,false,0,null)
// key_event_up.KeyboardEventInit("keyup",true,true, window, 0, 296, 362, 294, 228, false, false,false,false,0,null)
// key_event_press.KeyboardEventInit("keypress",true,true, window, 0, 296, 362, 294, 228, false, false,false,false,0,null)

// var downEvent = new PointerEvent("pointerdown",
//    {pointerId: 1,
//     bubbles: true,
//     cancelable: true,
//     pointerType: "touch",
//     width: 100,
//     height: 100,
//     isPrimary: true
//    });

// var targetBox = document.getElementsByTagName("body");

// targetBox.onpointerdown = handleDown;
// function handleDown (evt){
//     console.log(evt.pointerType)
//     evt.preventDefault();
// }handleDown(evnt_7)
// document["addEventListener"]("touchmove", bmak["htm"], !0)
// var eventlistener = document.addEventListener("touchmove", bmak.htm, !0)
// eventlistener.initMouseEvent("mousemove",true,true, window, 0, 296, 362, 294, 228, false, false,false,false,0,null)

    document.addEventListener("mousemove", bmak.hmm, false)
    document.addEventListener("mousedown", bmak["hmd"], false)

    document.addEventListener("keydown",bmak.hkd,false)
    document.addEventListener("keyup",bmak.hku,false)
    document.addEventListener("keypress",bmak.hkp,false)
    document.dispatchEvent(mouse_event_move);
    document.dispatchEvent(mouse_event_move_1);
    document.dispatchEvent(mouse_event_move_2);
    document.dispatchEvent(mouse_event_move_3);
    document.dispatchEvent(mouse_event_move_4);
    document.dispatchEvent(mouse_event_move_5);
    document.dispatchEvent(mouse_event_move_6);
    document.dispatchEvent(mouse_event_move_7);
    document.dispatchEvent(mouse_event_move_8);
    document.dispatchEvent(mouse_event_move_9);
    document.dispatchEvent(mouse_event_move_10);
    document.dispatchEvent(mouse_event_move_11);
    document.dispatchEvent(mouse_event_down);
// document.dispatchEvent(key_event_down);
// document.dispatchEvent(key_event_up);
// document.dispatchEvent(key_event_press);



// var event = new Event('touchmove');

// Listen for the event.

//添加事件监听，并回调相应函数
// document.addEventListener('touchmove', bmak.htm, false);
// document["addEventListener"]("touchstart", bmak["hts"], !0),
//         document["addEventListener"]("touchend", bmak["hte"], !0),
//         document["addEventListener"]("touchcancel", bmak["htc"], !0),
//         document["addEventListener"]("mousemove", bmak["hmm"], !0),
//         document["addEventListener"]("click", bmak["hc"], !0),
//         document["addEventListener"]("mousedown", bmak["hmd"], !0),
//         document["addEventListener"]("mouseup", bmak["hmu"], !0),
//         document["addEventListener"]("pointerdown", bmak["hpd"], !0),
//         document["addEventListener"]("pointerup", bmak["hpu"], !0),
//         document["addEventListener"]("keydown", bmak["hkd"], !0),
//         document["addEventListener"]("keyup", bmak["hku"], !0),
//         document["addEventListener"]("keypress", bmak["hkp"], !0))
// document.addEventListener("touchstart", bmak.hts, false)
// document.addEventListener("touchend", bmak.hte, false)
// document.addEventListener("touchcancel", bmak.htc, false)
// document.addEventListener("mousemove", bmak.hmm, false)
// document.addEventListener("click", bmak.hc, false)
// document.addEventListener("mousedown", bmak.hmd, false)
// document.addEventListener("mouseup", bmak.hmu, false)
// document.addEventListener("pointerdown", bmak.hpd, false)
// document.addEventListener("pointerup", bmak.hpu, false)
// document.addEventListener("keydown", bmak.hkd, false)
// document.addEventListener("keyup", bmak.hku, false)
// document.addEventListener("keypress", bmak.hkp, false)

// 触发相关事件
// document.dispatchEvent(evnt);
// document.dispatchEvent(evnt_1);
// document.dispatchEvent(evnt_2);
// document.dispatchEvent(evnt_3);
// document.dispatchEvent(evnt_4);
// document.dispatchEvent(evnt_5);
// document.dispatchEvent(evnt_6);
// document.dispatchEvent(evnt_7);
// document.dispatchEvent(mouse_event_move);
// document.dispatchEvent(downEvent);
// document.dispatchEvent(evnt_10);
// document.dispatchEvent(evnt_11);
// document.dispatchEvent(evnt);

// var evt = new evnt.MouseEvent("click", {
//     bubbles: true,
//     cancelable: true,
//     view: window,
//   });
// bmak.hmm(evnt)
// bmak.hmm(mouse_event_move_1)
// bmak.hc(evnt_3)
// t["canvas"]()
    bmak.hmd(mouse_event_down)
    bmak.hkd(key_event_down)
// bmak.hmm(evnt_7)
// bmak.hc(evnt_4)
// bmak.hmm(evnt_8)
// bmak.hmm(evnt_5)
// bmak.hc(evnt_6)
// bmak.hmm(evnt_8)
// bmak.hmm(evnt_9)
// bmak.hc(evnt_10)
// console.log(evnt)
    bmak.startTracking()
// var g = bmak.od("0a46G5m17Vrp4o4c", "afSbep8yjnZUjq3aL010jO15Sawj2VZfdYK8uY90uxq").slice(0,16)
// var w = Math["floor"](bmak["get_cf_date"]() / 36e5)
// var t = window["XMLHttpRequest"] ? 1 : 0
// console.log(t)
// console.log(bmak.od(w, g))
// console.log(window.screenY)
// bmak["rve"]()
// bmak["informinfo"] = bmak["forminfo"]()
// bmak["js_post"] && (bmak["aj_type"] = 0
// bmak["bpd"]()
// bmak["pd"](!0)
// bmak.bpd()
    console.log(bmak.sensor_data)
});