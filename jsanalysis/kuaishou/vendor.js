var t={
    "i": "b4Nf",
    "l": false,
    "exports": {}
}

var e ={}
var r = function a(t) {
    if (i[t])
        return i[t].exports;
    var n = i[t] = {
        i: t,
        l: !1,
        exports: {}
    };
    return e[t].call(n.exports, n, n.exports, a),
        n.l = !0,
        n.exports
}

b4Nf=function(t, e, r) {
    "use strict";
    r.r(e),
        function(t) {
            r.d(e, "Weblog", function() {
                return Rt
            }),
                r.d(e, "BasePlugin", function() {
                    return mt
                });
            var n = r("K4CH")
                , i = r.n(n);
            Object.defineProperty || (Object.defineProperty = function(t, e, r) {
                    t[e] = "[object Object]" === Object.prototype.toString.call(r) && r.hasOwnProperty("value") ? r.value : r
                }
            ),
            Object.assign || Object.defineProperty(Object, "assign", {
                value: function(t) {
                    if (null === t)
                        throw new TypeError("Cannot convert undefined or null to object");
                    for (var e = Object(t), r = 1; r < arguments.length; r++) {
                        var n = arguments[r];
                        if (null !== n)
                            for (var i in n)
                                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                },
                writable: !0,
                configurable: !0
            }),
            Function.prototype.bind || (Function.prototype.bind = function(t) {
                    if ("function" != typeof this)
                        throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                    var e = Array.prototype.slice.call(arguments, 1)
                        , r = this
                        , n = function() {
                        return function() {}
                    }()
                        , i = function() {
                        var i = this instanceof n ? this : t;
                        return r.apply(i, e.concat(Array.prototype.slice.call(arguments)))
                    };
                    return this.prototype && (n.prototype = this.prototype),
                        i.prototype = new n,
                        i
                }
            ),
            Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {
                    var r;
                    if (null == this)
                        throw new TypeError('"this" is null or not defined');
                    var n = Object(this)
                        , i = n.length >>> 0;
                    if (0 === i)
                        return -1;
                    var o = +e || 0;
                    if (Math.abs(o) === 1 / 0 && (o = 0),
                    o >= i)
                        return -1;
                    for (r = Math.max(o >= 0 ? o : i - Math.abs(o), 0); r < i; ) {
                        if (r in n && n[r] === t)
                            return r;
                        r++
                    }
                    return -1
                }
            ),
            Object.keys || (Object.keys = function() {
                var t = Object.prototype.hasOwnProperty
                    , e = !{
                    toString: null
                }.propertyIsEnumerable("toString")
                    , r = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"];
                return function(n) {
                    if ("object" != typeof n && "function" != typeof n || null === n)
                        throw new TypeError("Object.keys called on non-object");
                    var i = [];
                    for (var o in n)
                        t.call(n, o) && i.push(o);
                    if (e)
                        for (var a = 0, s = r; a < s.length; a++) {
                            var u = s[a];
                            t.call(n, u) && i.push(u)
                        }
                    return i
                }
            }())/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
            ;
            var o = function(t, e) {
                return o = Object.setPrototypeOf || {
                        __proto__: []
                    }instanceof Array && function(t, e) {
                        t.__proto__ = e
                    }
                    || function(t, e) {
                        for (var r in e)
                            e.hasOwnProperty(r) && (t[r] = e[r])
                    }
                    ,
                    o(t, e)
            };
            function a(t, e) {
                function r() {
                    this.constructor = t
                }
                o(t, e),
                    t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype,
                        new r)
            }
            var s = function() {
                return s = Object.assign || function(t) {
                    for (var e, r = 1, n = arguments.length; r < n; r++)
                        for (var i in e = arguments[r],
                            e)
                            Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                    return t
                }
                    ,
                    s.apply(this, arguments)
            };
            var u = [["a7", "640x1136", ["iPhone 5", "iPhone 5s"]], ["a7", "1536x2048", ["iPad Air", "iPad Mini 2", "iPad Mini 3"]], ["a8", "640x1136", ["iPod touch (6th gen)"]], ["a8", "750x1334", ["iPhone 6"]], ["a8", "1242x2208", ["iPhone 6 Plus"]], ["a8", "1536x2048", ["iPad Air 2", "iPad Mini 4"]], ["a9", "640x1136", ["iPhone SE"]], ["a9", "750x1334", ["iPhone 6s"]], ["a9", "1242x2208", ["iPhone 6s Plus"]], ["a9x", "1536x2048", ["iPad Pro (1st gen 9.7-inch)"]], ["a9x", "2048x2732", ["iPad Pro (1st gen 12.9-inch)"]], ["a10", "750x1334", ["iPhone 7"]], ["a10", "1242x2208", ["iPhone 7 Plus"]], ["a10x", "1668x2224", ["iPad Pro (2th gen 10.5-inch)"]], ["a10x", "2048x2732", ["iPad Pro (2th gen 12.9-inch)"]], ["a11", "750x1334", ["iPhone 8"]], ["a11", "1242x2208", ["iPhone 8 Plus"]], ["a11", "1125x2436", ["iPhone X"]], ["a12", "828x1792", ["iPhone Xr"]], ["a12", "1125x2436", ["iPhone Xs"]], ["a12", "1242x2688", ["iPhone Xs Max"]], ["a12x", "1668x2388", ["iPad Pro (3rd gen 11-inch)"]], ["a12x", "2048x2732", ["iPad Pro (3rd gen 12.9-inch)"]]]
                , c = function() {
                var t = "";
                return function() {
                    if (t)
                        return t;
                    var e = window.devicePixelRatio || 1
                        , r = Math.min(screen.width, screen.height) * e
                        , n = Math.max(screen.width, screen.height) * e;
                    return t = r + "x" + n,
                        t
                }
            }()
                , l = function() {
                var t = "";
                return function() {
                    if (t)
                        return t;
                    var e = document.createElement("canvas")
                        , r = e.getContext("webgl");
                    if (r) {
                        var n = r.getExtension("WEBGL_debug_renderer_info");
                        t = n ? r.getParameter(n.UNMASKED_RENDERER_WEBGL) : "unknown"
                    } else
                        t = "unknown";
                    return t
                }
            }()
                , f = function() {
                var t = "";
                return function() {
                    if (t)
                        return t;
                    var e = h();
                    if ("iOS" !== e.os.name)
                        return e.device.model || "unknown";
                    var r = l()
                        , n = c()
                        , i = r.match(/^apple\s+([_a-z0-9-]+)\s+gpu$/i);
                    if (!i)
                        return t = "unknown",
                            t;
                    for (var o = 0, a = u; o < a.length; o++) {
                        var s = a[o];
                        if (i[1].toLocaleLowerCase() === s[0] && n === s[1]) {
                            t = s[2].join(" or ");
                            break
                        }
                    }
                    return t = t || e.device.model || "unknown",
                        t
                }
            }()
                , d = null
                , h = function() {
                return function() {
                    return d || (d = (new i.a).getResult()),
                        d
                }
            }();
            function p(t) {
                if (void 0 === t && (t = location.hostname),
                    !t)
                    return "";
                var e = t.split(".")
                    , r = e.length;
                return r <= 2 ? "" : "." + e[r - 2] + "." + e[r - 1]
            }
            function v(t, e) {
                if (void 0 === e && (e = {}),
                    !document.cookie)
                    return null;
                var r = function(t, e, r) {
                    void 0 === r && (r = {});
                    var n = {};
                    if (t.length > 0)
                        for (var i = e ? decodeURIComponent : function(t) {
                            return t
                        }
                                 , o = t.split(/;\s/g), a = null, s = null, u = null, c = 0, l = o.length; c < l; c++) {
                            if (u = o[c].match(/([^=]+)=/i),
                            null !== u)
                                try {
                                    a = decodeURIComponent(u[1]),
                                        s = i(o[c].substring(u[1].length + 1))
                                } catch (t) {}
                            else
                                a = decodeURIComponent(o[c]),
                                    s = "";
                            null !== a && (n[a] = s)
                        }
                    return n
                }(document.cookie, !e.raw, e)
                    , n = r[t];
                return void 0 === n ? null : n
            }
            function m(t, e, r) {
                void 0 === r && (r = {}),
                    document.cookie = function(t, e, r, n) {
                        void 0 === n && (n = {});
                        var i = encodeURIComponent(t) + "=" + (r ? encodeURIComponent(e) : e)
                            , o = n.expires
                            , a = n.path || "/"
                            , s = n.domain || "";
                        return o instanceof Date && (i += "; expires=" + o.toUTCString()),
                        "number" == typeof o && (i += "; max-age==" + o),
                        "" !== a && (i += "; path=" + a),
                        "" !== s && (i += "; domain=" + s),
                        !0 === n.secure && (i += "; secure"),
                            i
                    }(t, e, !r.raw, r)
            }
            function _() {
                for (var t = 1e9 * Math.random() >>> 0, e = [], r = 0; r < 7; r++)
                    e.push("0123456789ABCDEF".charAt(16 * Math.random()));
                return t + e.join("")
            }
            function y() {
                var t = v("did") ? "did" : "_did"
                    , e = v(t)
                    , r = new Date;
                r.setFullYear(r.getFullYear() + 1);
                var n = e || "web_" + _();
                return m(t, n, {
                    expires: r,
                    domain: p(),
                    path: "/"
                }),
                    n
            }
            function g() {
                var t = _();
                return t
            }
            function b(t, e) {
                var r = t.indexOf(e);
                r > -1 && t.splice(r, 1)
            }
            function E(t, e, r, n) {
                return "attachEvent"in t ? t.attachEvent("on" + e, r) : t.addEventListener(e, r, n)
            }
            function w(t, e, r, n) {
                return "attachEvent"in t ? t.detachEvent("on" + e, r) : t.removeEventListener(e, r, n)
            }
            function S(t, e, r) {
                if (void 0 === r && (r = " "),
                    e -= t.length,
                e <= 0)
                    return t;
                for (var n = ""; e; )
                    1 & e && (n += r),
                        e >>= 1,
                        r += r;
                return n + t
            }
            var O = function() {
                var t = null;
                return function() {
                    return null === t && (t = /Kwai/.test(navigator.userAgent)),
                        t
                }
            }();
            function T(t) {
                return setTimeout(t, 62.5)
            }
            var x = clearTimeout;
            function R() {
                var t = window.navigator.userAgent;
                return (-1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone")) && (window.history && "pushState"in window.history)
            }
            function k(t) {
                for (var e = {}, r = t.split("&"), n = 0, i = r; n < i.length; n++) {
                    var o = i[n]
                        , a = o.split("=")
                        , s = a[0]
                        , u = a[1];
                    s in e ? e[s]instanceof Array ? e[s].push(u) : e[s] = [e[s], u] : e[s] = u
                }
                return e
            }
            function A(t) {
                var e = JSON.parse(t)
                    , r = [];
                return Object.keys(e).forEach(function(t) {
                    if (e[t]instanceof Array)
                        for (var n = 0, i = e[t]; n < i.length; n++) {
                            var o = i[n];
                            r.push(t + "=" + o)
                        }
                    else
                        "object" == typeof e[t] && null !== e[t] ? r.push(t + "=" + JSON.stringify(e[t])) : r.push(t + "=" + e[t])
                }),
                    r.join("&")
            }
            var I = function() {
                return function(t) {
                    this.env = "development",
                        this.retries = 0,
                        this.maxErrLog = 100,
                        this.timeout = 3e4,
                        this.useBeacon = !1,
                        this.wait = 1e3,
                        this.maxBatchLength = 100,
                        this.lazy = !1,
                        Object.assign(this, t)
                }
            }()
                , L = ["display: none;", "position: absolute;", "top: -9999px", "left: -9999px"].join("");
            function C(t, e) {
                var r = t.url
                    , n = t.data
                    , i = "iframe_" + _()
                    , o = function(t) {
                    var e = document.createElement("iframe");
                    return document.body.appendChild(e),
                        e.contentWindow.name = t,
                        e.style.cssText = L,
                        e
                }(i)
                    , a = function(t, e) {
                    var r = document.createElement("form");
                    return document.body.appendChild(r),
                        r.target = t,
                        r.enctype = "multipart/form-data",
                        r.method = "POST",
                        r.action = e,
                        r.style.cssText = L,
                        r
                }(i, r);
                !function(t, e) {
                    for (var r in e)
                        if (e.hasOwnProperty(r)) {
                            var n = document.createElement("input");
                            n.name = r,
                                n.value = JSON.stringify(e[r]),
                                t.appendChild(n)
                        }
                }(a, n);
                try {
                    a.submit()
                } catch (t) {
                    e(t)
                }
                o.onload = function() {
                    document.body.removeChild(o),
                        document.body.removeChild(a),
                        o = null,
                        a = null
                }
            }
            function D(t) {
                var e = new FormData;
                for (var r in t)
                    t.hasOwnProperty(r) && e.append(r, JSON.stringify(t[r]));
                return e
            }
            var P = h()
                , M = "Chrome" === P.browser.name && +(P.browser.major || 0) > 77;
            function N(t, e) {
                var r = t.url
                    , n = t.data
                    , i = t.async
                    , o = t.useBeacon
                    , a = void 0 !== o && o
                    , s = t.timeout;
                return a || M ? function(t, e) {
                    var r = t.url
                        , n = t.data;
                    navigator.sendBeacon(r, D(n)) || e()
                }({
                    url: r,
                    data: n
                }, e) : function() {
                    var t = h();
                    return "IE" === t.browser.name && t.browser.major && +t.browser.major <= 9
                }() ? C({
                    url: r,
                    data: n
                }, e) : function(t, e) {
                    var r = t.url
                        , n = t.data
                        , i = t.async
                        , o = void 0 === i || i
                        , a = t.timeout
                        , s = new XMLHttpRequest;
                    s.open("POST", r, o),
                    o && a && (s.timeout = a),
                        s.onload = function() {
                            s.status < 200 && s.status >= 300 && 304 !== s.status && e(s.response)
                        }
                        ,
                        s.ontimeout = s.onerror = function(t) {
                            e(t)
                        }
                        ,
                        s.send(D(n))
                }({
                    url: r,
                    data: n,
                    async: i,
                    timeout: s
                }, e)
            }
            var j, F, B, U, V, q = function() {
                function t() {
                    var t = this;
                    this.logQueue = [],
                        this.errorQueue = [],
                        this.batchWaitTimer = 0,
                        this.errorWaitTimer = 0,
                        this.flush = function(e) {
                            t.sendData(t.logQueue, e),
                                t.logQueue = []
                        }
                }
                return t.prototype.updateBase = function(t) {
                    this.commonPackage = t
                }
                    ,
                    Object.defineProperty(t.prototype, "url", {
                        get: function() {
                            return "production" === this.config.env ? "//log-sdk.ksapisrv.com/rest/wd/common/log/collect/misc2" : "//songyang05-web.test.gifshow.com/rest/wd/common/log/collect/misc2"
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    t.prototype.init = function(t, e) {
                        this.config = new I(s({}, this.config, t)),
                            this.updateBase(e)
                    }
                    ,
                    t.prototype.sendData = function(t, e) {
                        var r = this
                            , n = t instanceof Array ? {
                            retry: 0,
                            logs: t
                        } : t;
                        N({
                            url: this.url,
                            data: {
                                common: this.commonPackage,
                                logs: {
                                    event: n.logs
                                }
                            },
                            useBeacon: this.config.useBeacon,
                            async: void 0 !== e ? e : 0 !== this.config.wait,
                            timeout: this.config.timeout
                        }, function() {
                            r.errHandler(n)
                        })
                    }
                    ,
                    t.prototype.flushErrorQueue = function() {
                        var t = this;
                        this.errorQueue.forEach(function(e) {
                            e.retry > t.config.retries ? b(t.errorQueue, e) : (e.retry++,
                                t.sendData(e))
                        })
                    }
                    ,
                    t.prototype.send = function(t, e, r) {
                        var n = this;
                        void 0 === e && (e = !1),
                            e ? this.sendData([t], r) : this.config.lazy ? this.logQueue.push(t) : (clearTimeout(this.batchWaitTimer),
                                this.logQueue.length >= this.config.maxBatchLength ? this.flush(r) : (this.logQueue.push(t),
                                    this.batchWaitTimer = window.setTimeout(function() {
                                        n.flush(r)
                                    }, this.config.wait)))
                    }
                    ,
                    Object.defineProperty(t.prototype, "errorLogCount", {
                        get: function() {
                            return this.errorQueue.reduce(function(t, e) {
                                return t + e.logs.length
                            }, 0)
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    t.prototype.errHandler = function(t) {
                        var e = this;
                        this.config.retries && (this.errorQueue.push(t),
                            clearTimeout(this.errorWaitTimer),
                            this.errorLogCount >= this.config.maxErrLog ? this.flushErrorQueue() : this.errorWaitTimer = window.setTimeout(function() {
                                e.flushErrorQueue()
                            }, this.config.wait))
                    }
                    ,
                    t
            }();
            !function(t) {
                t[t.UNKNOWN_ACTION = 0] = "UNKNOWN_ACTION",
                    t[t.ENTER = 1] = "ENTER",
                    t[t.LEAVE = 2] = "LEAVE",
                    t[t.RESUME = 3] = "RESUME"
            }(j || (j = {})),
                function(t) {
                    t[t.UNKNOWN_SUB_ACTION = 0] = "UNKNOWN_SUB_ACTION",
                        t[t.PAGE_ENTER = 1] = "PAGE_ENTER",
                        t[t.PAGE_LEAVE = 2] = "PAGE_LEAVE",
                        t[t.PAGE_RESUME = 3] = "PAGE_RESUME",
                        t[t.PAGE_PAUSE = 4] = "PAGE_PAUSE"
                }(F || (F = {})),
                function(t) {
                    t[t.UNKNOWN_TYPE = 0] = "UNKNOWN_TYPE",
                        t[t.PAGE_AUTO = 10] = "PAGE_AUTO",
                        t[t.PAGE_CUSTOM = 11] = "PAGE_CUSTOM",
                        t[t.ELEMENT = 12] = "ELEMENT"
                }(B || (B = {})),
                function(t) {
                    t[t.UNKNOWN_STATUS = 0] = "UNKNOWN_STATUS",
                        t[t.SUCCESS = 1] = "SUCCESS",
                        t[t.FAIL = 2] = "FAIL"
                }(U || (U = {})),
                function(t) {
                    t[t.UNKNOWN_ACTION_TYPE = 0] = "UNKNOWN_ACTION_TYPE",
                        t[t.CLICK = 1] = "CLICK",
                        t[t.LEFT_PULL = 2] = "LEFT_PULL",
                        t[t.RIGHT_PULL = 3] = "RIGHT_PULL",
                        t[t.UP_PULL = 4] = "UP_PULL",
                        t[t.DOWN_PULL = 5] = "DOWN_PULL"
                }(V || (V = {}));
            var K, H, $, z = !0, Q = function() {
                return function(t) {
                    this.first_load = z,
                        this.action = j.ENTER,
                        this.time_cost = 0,
                        this.sub_action = F.PAGE_ENTER,
                        this.type = B.ELEMENT,
                        this.status = U.SUCCESS,
                        this.action_type = V.CLICK,
                        this.sub_page = !1,
                        z = !1;
                    var e = t.type
                        , r = t.currentUrlPackage
                        , n = t.referUrlPackage
                        , i = t.name
                        , o = void 0 === i ? "" : i
                        , a = t.action
                        , s = t.beginTime
                        , u = t.params
                        , c = void 0 === u ? {} : u;
                    if (this.url_package = r,
                        this.refer_url_package = n,
                    "PV" === e)
                        switch (this.type = B.PAGE_AUTO,
                            a) {
                            case "leave":
                                this.action = j.LEAVE,
                                    this.sub_action = F.PAGE_LEAVE,
                                s && (this.stay_length = (new Date).valueOf() - s);
                                break;
                            case "enter":
                                this.action = j.ENTER,
                                    this.sub_action = F.PAGE_ENTER;
                                break;
                            case "visible":
                                this.action = j.RESUME,
                                    this.sub_action = F.PAGE_RESUME;
                                break;
                            case "hidden":
                                this.action = j.LEAVE,
                                    this.sub_action = F.PAGE_PAUSE
                        }
                    "SHOW" === e && o && c && (this.element_package = {
                        action: o,
                        params: JSON.stringify(c)
                    })
                }
            }();
            !function(t) {
                t[t.UNKNOWN_TYPE = 0] = "UNKNOWN_TYPE",
                    t[t.USER_OPERATION = 1] = "USER_OPERATION",
                    t[t.STAY_LENGTH_STAT_EVENT = 2] = "STAY_LENGTH_STAT_EVENT",
                    t[t.BACKGROUND_TASK_EVENT = 3] = "BACKGROUND_TASK_EVENT"
            }(K || (K = {})),
                function(t) {
                    t[t.UNKNOWN_OPERATION = 0] = "UNKNOWN_OPERATION",
                        t[t.CLICK = 1] = "CLICK",
                        t[t.DOUBLE_CLICK = 2] = "DOUBLE_CLICK",
                        t[t.TRIPLE_CLICK = 3] = "TRIPLE_CLICK",
                        t[t.LONG_PRESS = 4] = "LONG_PRESS",
                        t[t.PULL = 5] = "PULL",
                        t[t.DRAG = 6] = "DRAG",
                        t[t.SCALE = 7] = "SCALE",
                        t[t.PULL_DOWN = 8] = "PULL_DOWN",
                        t[t.PULL_UP = 9] = "PULL_UP"
                }(H || (H = {})),
                function(t) {
                    t[t.UNKNOWN_OPERATION_DIRECTION = 0] = "UNKNOWN_OPERATION_DIRECTION",
                        t[t.UP = 1] = "UP",
                        t[t.DOWN = 2] = "DOWN",
                        t[t.LEFT = 3] = "LEFT",
                        t[t.RIGHT = 4] = "RIGHT"
                }($ || ($ = {}));
            var G, W, Y = function() {
                return function(t) {
                    this.type = K.USER_OPERATION,
                        this.operation_type = H.CLICK;
                    var e = t.sessionId
                        , r = t.currentUrlPackage
                        , n = t.referUrlPackage
                        , i = t.name
                        , o = t.params
                        , a = t.type;
                    this.operation_type = H[a],
                        this.session_id = e,
                        this.url_package = r,
                        this.refer_url_package = n,
                        this.element_package = {
                            action: i,
                            params: JSON.stringify(o)
                        }
                }
            }(), X = function() {
                return function(t) {
                    var e = t.name
                        , r = t.params;
                    this.key = e,
                        this.value = JSON.stringify(r)
                }
            }();
            function J(t) {
                console && console.error && console.error(t)
            }
            !function(t) {
                t[t.UNKNOWN_NETWORK = 0] = "UNKNOWN_NETWORK",
                    t[t.NOT_CONNECTED = 1] = "NOT_CONNECTED",
                    t[t.WIFI = 2] = "WIFI",
                    t[t.MOBILE_4G = 3] = "MOBILE_4G",
                    t[t.MOBILE_3G = 4] = "MOBILE_3G",
                    t[t.MOBILE_2G = 5] = "MOBILE_2G",
                    t[t.MOBILE_UNKNOWN = 6] = "MOBILE_UNKNOWN"
            }(G || (G = {})),
                function(t) {
                    t[t.UNKNOWN_PLATFORM = 0] = "UNKNOWN_PLATFORM",
                        t[t.ANDROID_PHONE = 1] = "ANDROID_PHONE",
                        t[t.ANDROID_PAD = 2] = "ANDROID_PAD",
                        t[t.IPHONE = 3] = "IPHONE",
                        t[t.IPAD = 4] = "IPAD",
                        t[t.WINDOWS_PC = 5] = "WINDOWS_PC",
                        t[t.ANDROID_PHONE_H5 = 6] = "ANDROID_PHONE_H5",
                        t[t.IPHONE_H5 = 7] = "IPHONE_H5",
                        t[t.OUTSIDE_ANDROID_H5 = 8] = "OUTSIDE_ANDROID_H5",
                        t[t.OUTSIDE_IOS_H5 = 9] = "OUTSIDE_IOS_H5",
                        t[t.PC_WEB = 10] = "PC_WEB"
                }(W || (W = {}));
            var Z = {
                unknown: G.UNKNOWN_NETWORK,
                none: G.NOT_CONNECTED,
                wifi: G.WIFI,
                "4g": G.MOBILE_4G,
                "3g": G.MOBILE_3G,
                "2g": G.MOBILE_2G,
                "slow-2g": G.MOBILE_2G
            };
            function tt() {
                var t = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                if (!t)
                    return Z.unknown;
                var e = t.type
                    , r = t.effectiveType;
                return Z[e] || Z[r] || Z.unknown
            }
            function et() {
                var t = h();
                if (!t.os.name)
                    return W.UNKNOWN_PLATFORM;
                var e = O();
                return "Android" === t.os.name ? e ? W.ANDROID_PHONE_H5 : W.OUTSIDE_ANDROID_H5 : "iOS" === t.os.name ? e ? W.IPHONE_H5 : W.OUTSIDE_IOS_H5 : W.PC_WEB
            }
            var rt = [["identity_package", "device_id"], ["identity_package", "global_id"], ["identity_package", "user_id"], ["app_package", "product"], ["app_package", "version_name"], ["app_package", "version_code"], ["app_package", "package_name"], ["app_package", "product_name"], ["app_package", "channel"], ["network_package", "type"]];
            var nt = function() {
                return function(t) {
                    this.identity_package = {
                        device_id: y()
                    },
                        this.app_package = {
                            language: navigator.language,
                            platform: et()
                        },
                        this.device_package = {
                            os_version: h().os.version || "unknown",
                            model: f()
                        },
                        this.network_package = {
                            type: tt()
                        },
                        function t(e, r) {
                            r && Object.keys(r).forEach(function(n) {
                                var i = r[n];
                                "object" == typeof i ? t(e[n], i) : i && (e[n] = i)
                            })
                        }(this, t),
                        O() ? function(t) {
                            for (var e = 0, r = rt; e < r.length; e++) {
                                for (var n = r[e], i = void 0, o = 0, a = n; o < a.length; o++) {
                                    var s = a[o];
                                    i = i ? i[s] : t[s]
                                }
                                i || J('Base Option "' + n[n.length - 1] + '" must be set when in Kwai App')
                            }
                        }(this) : this.network_package.type = tt()
                }
            }()
                , it = function() {
                var t = (new Date).getTimezoneOffset() / 60;
                return t <= 0 ? "GMT+" + S(-t + "", 2, "0") + ":00" : "GMT-" + S(t + "", 2, "0") + ":00"
            }()
                , ot = 0
                , at = function() {
                return function(t) {
                    this.client_timestamp = (new Date).valueOf(),
                        this.client_increment_id = ++ot,
                        this.session_id = sessionStorage.getItem("sessionId") || g(),
                        this.time_zone = it,
                        Object.assign(this, t)
                }
            }();
            function st(t, e) {
                switch (t) {
                    case "PV":
                    case "SHOW":
                        return new at({
                            event_package: {
                                show_event: new Q({
                                    type: t,
                                    currentUrlPackage: e.currentUrlPackage,
                                    referUrlPackage: e.referUrlPackage,
                                    action: e.type,
                                    beginTime: e.beginTime,
                                    name: e.name,
                                    params: e.params
                                })
                            }
                        });
                    case "CUSTOM":
                        return new at({
                            stat_package: {
                                custom_stat_event: new X({
                                    name: e.name,
                                    params: e.params
                                })
                            }
                        });
                    default:
                        return new at({
                            event_package: {
                                task_event: new Y({
                                    type: t,
                                    sessionId: sessionStorage.getItem("sessionId") || g(),
                                    currentUrlPackage: e.currentUrlPackage,
                                    referUrlPackage: e.referUrlPackage,
                                    name: e.name,
                                    params: e.params
                                })
                            }
                        })
                }
            }
            var ut = [{
                keys: ["identity_package", "device_id"],
                type: "string",
                validator: function(t) {
                    return "string" == typeof t
                }
            }, {
                keys: ["identity_package", "user_id"],
                type: "string",
                validator: function(t) {
                    return "string" == typeof t
                }
            }, {
                keys: ["identity_package", "union_id"],
                type: "string",
                validator: function(t) {
                    return "string" == typeof t
                }
            }, {
                keys: ["identity_package", "global_id"],
                type: "string",
                validator: function(t) {
                    return "string" == typeof t
                }
            }, {
                keys: ["app_package", "product"],
                type: "number",
                validator: function(t) {
                    return "number" == typeof t
                }
            }, {
                keys: ["app_package", "channel"],
                type: "string",
                validator: function(t) {
                    return "string" == typeof t
                }
            }, {
                keys: ["app_package", "version_name"],
                type: "string",
                validator: function(t) {
                    return "string" == typeof t
                }
            }, {
                keys: ["app_package", "version_code"],
                type: "number",
                validator: function(t) {
                    return "number" == typeof t
                }
            }, {
                keys: ["app_package", "package_name"],
                type: "string",
                validator: function(t) {
                    return "string" == typeof t
                }
            }, {
                keys: ["app_package", "product_name"],
                type: "string",
                validator: function(t) {
                    return "string" == typeof t
                }
            }, {
                keys: ["experiment"],
                type: "Array",
                validator: function(t) {
                    return t instanceof Array
                }
            }, {
                keys: ["service_name"],
                type: "string",
                validator: function(t) {
                    return "string" == typeof t
                }
            }, {
                keys: ["safety_id"],
                type: "string",
                validator: function(t) {
                    return "string" == typeof t
                }
            }];
            function ct(t) {
                for (var e = {
                    identity_package: {},
                    network_package: {},
                    app_package: {},
                    experiment: [],
                    service_name: "",
                    safety_id: ""
                }, r = 0, n = ut; r < n.length; r++) {
                    var i = n[r]
                        , o = i.keys
                        , a = i.validator
                        , s = i.type
                        , u = o[0]
                        , c = o[1]
                        , l = t[c || u];
                    if (c ? e[u][c] = t[c] : e[u] = t[u],
                    void 0 !== l && !a(l))
                        throw new Error(["There is an error init value on '" + (c || u) + "', ", "the type should be '" + s + "', ", "but your type is '" + typeof l + "'"].join(""))
                }
                return t.network_type && (e.network_package = e.network_package || {},
                    e.network_package.type = Z[t.network_type]),
                    new nt(e)
            }
            var lt = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {};
            var ft, dt = function(t, e) {
                return e = {
                    exports: {}
                },
                    t(e, e.exports),
                    e.exports
            }(function(t) {
                !function(e) {
                    function r(t, e) {
                        var r = (65535 & t) + (65535 & e)
                            , n = (t >> 16) + (e >> 16) + (r >> 16);
                        return n << 16 | 65535 & r
                    }
                    function n(t, e, n, i, o, a) {
                        return r(function(t, e) {
                            return t << e | t >>> 32 - e
                        }(r(r(e, t), r(i, a)), o), n)
                    }
                    function i(t, e, r, i, o, a, s) {
                        return n(e & r | ~e & i, t, e, o, a, s)
                    }
                    function o(t, e, r, i, o, a, s) {
                        return n(e & i | r & ~i, t, e, o, a, s)
                    }
                    function a(t, e, r, i, o, a, s) {
                        return n(e ^ r ^ i, t, e, o, a, s)
                    }
                    function s(t, e, r, i, o, a, s) {
                        return n(r ^ (e | ~i), t, e, o, a, s)
                    }
                    function u(t, e) {
                        var n, u, c, l, f;
                        t[e >> 5] |= 128 << e % 32,
                            t[14 + (e + 64 >>> 9 << 4)] = e;
                        var d = 1732584193
                            , h = -271733879
                            , p = -1732584194
                            , v = 271733878;
                        for (n = 0; n < t.length; n += 16)
                            u = d,
                                c = h,
                                l = p,
                                f = v,
                                d = i(d, h, p, v, t[n], 7, -680876936),
                                v = i(v, d, h, p, t[n + 1], 12, -389564586),
                                p = i(p, v, d, h, t[n + 2], 17, 606105819),
                                h = i(h, p, v, d, t[n + 3], 22, -1044525330),
                                d = i(d, h, p, v, t[n + 4], 7, -176418897),
                                v = i(v, d, h, p, t[n + 5], 12, 1200080426),
                                p = i(p, v, d, h, t[n + 6], 17, -1473231341),
                                h = i(h, p, v, d, t[n + 7], 22, -45705983),
                                d = i(d, h, p, v, t[n + 8], 7, 1770035416),
                                v = i(v, d, h, p, t[n + 9], 12, -1958414417),
                                p = i(p, v, d, h, t[n + 10], 17, -42063),
                                h = i(h, p, v, d, t[n + 11], 22, -1990404162),
                                d = i(d, h, p, v, t[n + 12], 7, 1804603682),
                                v = i(v, d, h, p, t[n + 13], 12, -40341101),
                                p = i(p, v, d, h, t[n + 14], 17, -1502002290),
                                h = i(h, p, v, d, t[n + 15], 22, 1236535329),
                                d = o(d, h, p, v, t[n + 1], 5, -165796510),
                                v = o(v, d, h, p, t[n + 6], 9, -1069501632),
                                p = o(p, v, d, h, t[n + 11], 14, 643717713),
                                h = o(h, p, v, d, t[n], 20, -373897302),
                                d = o(d, h, p, v, t[n + 5], 5, -701558691),
                                v = o(v, d, h, p, t[n + 10], 9, 38016083),
                                p = o(p, v, d, h, t[n + 15], 14, -660478335),
                                h = o(h, p, v, d, t[n + 4], 20, -405537848),
                                d = o(d, h, p, v, t[n + 9], 5, 568446438),
                                v = o(v, d, h, p, t[n + 14], 9, -1019803690),
                                p = o(p, v, d, h, t[n + 3], 14, -187363961),
                                h = o(h, p, v, d, t[n + 8], 20, 1163531501),
                                d = o(d, h, p, v, t[n + 13], 5, -1444681467),
                                v = o(v, d, h, p, t[n + 2], 9, -51403784),
                                p = o(p, v, d, h, t[n + 7], 14, 1735328473),
                                h = o(h, p, v, d, t[n + 12], 20, -1926607734),
                                d = a(d, h, p, v, t[n + 5], 4, -378558),
                                v = a(v, d, h, p, t[n + 8], 11, -2022574463),
                                p = a(p, v, d, h, t[n + 11], 16, 1839030562),
                                h = a(h, p, v, d, t[n + 14], 23, -35309556),
                                d = a(d, h, p, v, t[n + 1], 4, -1530992060),
                                v = a(v, d, h, p, t[n + 4], 11, 1272893353),
                                p = a(p, v, d, h, t[n + 7], 16, -155497632),
                                h = a(h, p, v, d, t[n + 10], 23, -1094730640),
                                d = a(d, h, p, v, t[n + 13], 4, 681279174),
                                v = a(v, d, h, p, t[n], 11, -358537222),
                                p = a(p, v, d, h, t[n + 3], 16, -722521979),
                                h = a(h, p, v, d, t[n + 6], 23, 76029189),
                                d = a(d, h, p, v, t[n + 9], 4, -640364487),
                                v = a(v, d, h, p, t[n + 12], 11, -421815835),
                                p = a(p, v, d, h, t[n + 15], 16, 530742520),
                                h = a(h, p, v, d, t[n + 2], 23, -995338651),
                                d = s(d, h, p, v, t[n], 6, -198630844),
                                v = s(v, d, h, p, t[n + 7], 10, 1126891415),
                                p = s(p, v, d, h, t[n + 14], 15, -1416354905),
                                h = s(h, p, v, d, t[n + 5], 21, -57434055),
                                d = s(d, h, p, v, t[n + 12], 6, 1700485571),
                                v = s(v, d, h, p, t[n + 3], 10, -1894986606),
                                p = s(p, v, d, h, t[n + 10], 15, -1051523),
                                h = s(h, p, v, d, t[n + 1], 21, -2054922799),
                                d = s(d, h, p, v, t[n + 8], 6, 1873313359),
                                v = s(v, d, h, p, t[n + 15], 10, -30611744),
                                p = s(p, v, d, h, t[n + 6], 15, -1560198380),
                                h = s(h, p, v, d, t[n + 13], 21, 1309151649),
                                d = s(d, h, p, v, t[n + 4], 6, -145523070),
                                v = s(v, d, h, p, t[n + 11], 10, -1120210379),
                                p = s(p, v, d, h, t[n + 2], 15, 718787259),
                                h = s(h, p, v, d, t[n + 9], 21, -343485551),
                                d = r(d, u),
                                h = r(h, c),
                                p = r(p, l),
                                v = r(v, f);
                        return [d, h, p, v]
                    }
                    function c(t) {
                        var e, r = "", n = 32 * t.length;
                        for (e = 0; e < n; e += 8)
                            r += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
                        return r
                    }
                    function l(t) {
                        var e, r = [];
                        for (r[(t.length >> 2) - 1] = void 0,
                                 e = 0; e < r.length; e += 1)
                            r[e] = 0;
                        var n = 8 * t.length;
                        for (e = 0; e < n; e += 8)
                            r[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
                        return r
                    }
                    function f(t) {
                        var e, r, n = "";
                        for (r = 0; r < t.length; r += 1)
                            e = t.charCodeAt(r),
                                n += "0123456789abcdef".charAt(e >>> 4 & 15) + "0123456789abcdef".charAt(15 & e);
                        return n
                    }
                    function d(t) {
                        return unescape(encodeURIComponent(t))
                    }
                    function h(t) {
                        return function(t) {
                            return c(u(l(t), 8 * t.length))
                        }(d(t))
                    }
                    function p(t, e) {
                        return function(t, e) {
                            var r, n, i = l(t), o = [], a = [];
                            for (o[15] = a[15] = void 0,
                                 i.length > 16 && (i = u(i, 8 * t.length)),
                                     r = 0; r < 16; r += 1)
                                o[r] = 909522486 ^ i[r],
                                    a[r] = 1549556828 ^ i[r];
                            return n = u(o.concat(l(e)), 512 + 8 * e.length),
                                c(u(a.concat(n), 640))
                        }(d(t), d(e))
                    }
                    function v(t, e, r) {
                        return e ? r ? p(e, t) : function(t, e) {
                            return f(p(t, e))
                        }(e, t) : r ? h(t) : function(t) {
                            return f(h(t))
                        }(t)
                    }
                    t.exports ? t.exports = v : e.md5 = v
                }(lt)
            });
            !function(t) {
                t[t.UNKNOWN_PAGE_TYPE = 0] = "UNKNOWN_PAGE_TYPE",
                    t[t.NATIVE = 1] = "NATIVE",
                    t[t.H5 = 2] = "H5",
                    t[t.MINA = 3] = "MINA"
            }(ft || (ft = {}));
            var ht = function() {
                return function(t) {
                    this.identity = dt(location.href),
                        this.page_type = ft.H5;
                    var e = function(t) {
                        void 0 === t && (t = location.href);
                        var e = t.lastIndexOf("?");
                        if (-1 === e)
                            return {
                                page: t,
                                params: void 0
                            };
                        var r = t.slice(0, e)
                            , n = t.slice(e + 1);
                        return {
                            page: r,
                            params: k(n)
                        }
                    }(t)
                        , r = e.page
                        , n = e.params;
                    this.params = JSON.stringify(n),
                        this.page = r
                }
            }()
                , pt = {
                device_id: "",
                global_id: "",
                union_id: "",
                user_id: "",
                product: 0,
                channel: "",
                version_name: "",
                version_code: 0,
                package_name: "",
                product_name: "",
                network_type: "unknown",
                appType: ft.H5,
                service_name: "",
                safety_id: "",
                experiment: []
            }
                , vt = function() {
                function t() {
                    this.events = {}
                }
                return t.prototype.on = function(t, e) {
                    e && "function" == typeof e && (this.events[t] = this.events[t] || [],
                        this.events[t].push(e))
                }
                    ,
                    t.prototype.off = function(t, e) {
                        this.events[t] && (e && "function" == typeof e && b(this.events[t], e),
                        e || (this.events[t] = []))
                    }
                    ,
                    t.prototype.emit = function(t) {
                        for (var e = [], r = 1; r < arguments.length; r++)
                            e[r - 1] = arguments[r];
                        this.events[t] && this.events[t].forEach(function(t) {
                            t.apply(void 0, e)
                        })
                    }
                    ,
                    t
            }()
                , mt = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return a(e, t),
                    e
            }(vt)
                , _t = {
                updateInterval: 2e4,
                crashThreshold: 1e4
            }
                , yt = function(t) {
                function e(e, r) {
                    var n = t.call(this) || this;
                    n.eventName = "onpagehide"in window ? "pagehide" : "beforeunload",
                        n.options = s({}, _t),
                        n.monitorId = "@ks.monitor.crash",
                        n.historyMoniorInfo = null,
                        n.stop = function() {
                            clearInterval(n.updateIntervalId);
                            try {
                                localStorage.removeItem(n.monitorId)
                            } catch (t) {}
                        }
                    ;
                    try {
                        var i = localStorage.getItem(n.monitorId);
                        n.historyMoniorInfo = JSON.parse(i) || {}
                    } catch (t) {}
                    return Object.assign(n.options, r),
                        E(window, n.eventName, n.stop),
                        n.on("crash", function(t) {
                            e.sendImmediately("CUSTOM", "crash", t)
                        }),
                        n.start(),
                        n
                }
                return a(e, t),
                    e.prototype.destroy = function() {
                        this.stop(),
                            this.off("crash"),
                            w(window, this.eventName, this.stop)
                    }
                    ,
                    e.prototype.checkHistoryCrash = function() {
                        var t = (new Date).valueOf();
                        this.historyMoniorInfo && t - this.historyMoniorInfo.time > this.options.crashThreshold && this.emit("crash", this.historyMoniorInfo)
                    }
                    ,
                    e.prototype.start = function() {
                        var t = this;
                        this.checkHistoryCrash(),
                            this.updateIntervalId = window.setInterval(function() {
                                t.update()
                            }, this.options.updateInterval),
                            this.update()
                    }
                    ,
                    e.prototype.update = function() {
                        if (performance && performance.memory) {
                            var t = {
                                time: (new Date).valueOf(),
                                memory: {
                                    limit: performance.memory.jsHeapSizeLimit / 1024,
                                    total: performance.memory.totalJSHeapSize / 1024,
                                    used: performance.memory.usedJSHeapSize / 1024
                                }
                            };
                            try {
                                localStorage.setItem(this.monitorId, JSON.stringify(t))
                            } catch (t) {}
                        }
                    }
                    ,
                    e.key = "crachMonitor",
                    e
            }(mt)
                , gt = {
                interval: 1e4,
                decimals: 2
            }
                , bt = function(t) {
                function e(e, r) {
                    var n = t.call(this) || this;
                    return n.options = s({}, gt),
                        n.count = 0,
                        Object.assign(n.options, r),
                        n.on("performance", function(t) {
                            e.collect("CUSTOM", "fps", {
                                fps: t
                            })
                        }),
                        n.start(),
                        n
                }
                return a(e, t),
                    e.prototype.destroy = function() {
                        this.off("performance"),
                            this.stop()
                    }
                    ,
                    e.prototype.start = function() {
                        this.loop(),
                            this.fpsTick()
                    }
                    ,
                    e.prototype.fpsTick = function() {
                        var t = this;
                        this.fpsTickId = function(t) {
                            var e = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || T;
                            return e.call(this, t)
                        }(function() {
                            t.count++,
                                t.fpsTick()
                        })
                    }
                    ,
                    e.prototype.loop = function() {
                        var t = this;
                        this.loopBeginTime = (new Date).valueOf(),
                            this.loopId = window.setTimeout(function() {
                                t.loopEndTime = (new Date).valueOf();
                                var e = t.calculate();
                                t.emit("performance", e),
                                    t.count = 0,
                                    t.loop()
                            }, this.options.interval)
                    }
                    ,
                    e.prototype.stop = function() {
                        !function(t) {
                            var e = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || x;
                            e.call(this, t)
                        }(this.fpsTickId),
                            window.clearTimeout(this.loopId)
                    }
                    ,
                    e.prototype.calculate = function() {
                        var t = this.loopEndTime - this.loopBeginTime
                            , e = t / this.count;
                        return +(1e3 / e).toFixed(this.options.decimals)
                    }
                    ,
                    e.key = "fpsMonitor",
                    e
            }(mt)
                , Et = "undefined" != typeof window ? performance : null
                , wt = Et && Et.timing || null
                , St = (Et && Et.getEntriesByType && Et.getEntriesByType("navigation")[0],
                {
                    dnsLookup: {
                        end: "domainLookupEnd",
                        start: "domainLookupStart"
                    },
                    tcpConnection: {
                        end: "connectEnd",
                        start: "connectStart"
                    },
                    resourceLoad: {
                        end: "responseEnd",
                        start: "requestStart"
                    },
                    jsCost: {
                        custom: function() {
                            if ("function" != typeof performance.getEntries)
                                return 0;
                            var t = performance.getEntries()
                                , e = t[0]
                                , r = t.filter(function(t) {
                                return "script" === t.initiatorType
                            })[0];
                            return r ? e.domComplete - r.fetchStart : 0
                        }
                    },
                    documentContentLoaded: {
                        end: "domComplete",
                        start: "fetchStart"
                    },
                    load: {
                        end: "loadEventEnd",
                        start: "fetchStart"
                    },
                    firstScreen: {
                        custom: function() {
                            return (new Date).valueOf() - wt.fetchStart
                        }
                    },
                    whiteScreen: {
                        custom: function() {
                            return (new Date).valueOf() - wt.fetchStart
                        }
                    }
                })
                , Ot = function(t) {
                function e(e) {
                    var r = t.call(this) || this;
                    return r.load = function() {
                        setTimeout(function() {
                            var t = r.collect();
                            ["load", "documentContentLoaded", "dnsLookup", "tcpConnection", "jsCost"].forEach(function(e) {
                                var n;
                                "jsCost" === e && 0 === t[e] || r.weblog.collect("CUSTOM", Tt[e], (n = {},
                                    n[Tt[e]] = t[e],
                                    n))
                            })
                        })
                    }
                        ,
                        r.weblog = e,
                        wt ? (E(window, "load", r.load),
                            r.on("perf", function(t) {
                                var e, n = t.key, i = t.data;
                                r.weblog.collect("CUSTOM", Tt[n], (e = {},
                                    e[Tt[n]] = i[n],
                                    e))
                            }),
                            r) : (J("The Timing Monitor need performance APIs to Support!"),
                            r)
                }
                return a(e, t),
                    e.prototype.destroy = function() {
                        w(window, "load", this.load),
                            this.off("perf")
                    }
                    ,
                    e.prototype.calculate = function(t) {
                        var e = St[t];
                        if (!e)
                            throw new Error("The perf key is not correct!");
                        if ("function" == typeof e.custom)
                            return e.custom(t);
                        var r = wt[St[t].end]
                            , n = wt[St[t].start];
                        return r - n
                    }
                    ,
                    e.prototype.mark = function(t) {
                        var e = this.collect(t);
                        this.emit("perf", {
                            key: t,
                            data: e
                        })
                    }
                    ,
                    e.prototype.collect = function(t) {
                        var e, r = this;
                        if (t)
                            return e = {},
                                e[t] = this.calculate(t),
                                e;
                        return Object.keys(St).reduce(function(t, e) {
                            return t[e] = r.calculate(e),
                                t
                        }, {})
                    }
                    ,
                    e.key = "timingMonitor",
                    e
            }(mt)
                , Tt = {
                load: "total_download_cost",
                documentContentLoaded: "operational_cost",
                dnsLookup: "dns_query_cost",
                tcpConnection: "tcp_cost",
                jsCost: "js_cost",
                whiteScreen: "white_screen_cost",
                firstScreen: "first_screen_cost"
            }
                , xt = function(t) {
                function e(e, r) {
                    var n = t.call(this) || this;
                    return n.oldPushState = history.pushState,
                        n.oldReplaceState = history.replaceState,
                        n.beginTime = wt && wt.fetchStart || (new Date).valueOf(),
                        n.visibilityChange = function() {
                            "hidden" === document.visibilityState && n.weblog.collect("PV", {
                                type: "hidden",
                                beginTime: n.beginTime
                            }),
                            "visible" === document.visibilityState && n.weblog.collect("PV", {
                                type: "visible",
                                beginTime: n.beginTime
                            })
                        }
                        ,
                        n.proxyPushState = function(t, e, r) {
                            return n.urlChange(),
                                n.oldPushState.call(history, t, e, r)
                        }
                        ,
                        n.proxyReplaceState = function(t, e, r) {
                            return n.urlChange(),
                                n.oldReplaceState.call(history, t, e, r)
                        }
                        ,
                        n.urlChange = function() {
                            setTimeout(function() {
                                if (!n.autoPVFilter(location.href, n.weblog.currentUrl))
                                    return !1;
                                n.weblog.collect("PV", {
                                    type: "leave",
                                    beginTime: n.beginTime
                                }),
                                    n.weblog.updateCurrentUrlPackage(location.href),
                                    n.weblog.collect("PV", {
                                        type: "enter",
                                        beginTime: n.beginTime
                                    }),
                                    n.beginTime = (new Date).valueOf()
                            })
                        }
                        ,
                        n.autoPVFilter = r || function() {
                            return !0
                        }
                        ,
                        n.weblog = e,
                        n.weblog.collect("PV", {
                            type: "enter",
                            beginTime: n.beginTime
                        }),
                        history.pushState = n.proxyPushState,
                        history.replaceState = n.proxyReplaceState,
                        E(window, R ? "popstate" : "hashchange", n.urlChange),
                        E(document, "visibilitychange", n.visibilityChange),
                        n
                }
                return a(e, t),
                    e.prototype.destroy = function() {
                        this.weblog.sendImmediately("PV", {
                            type: "leave"
                        }),
                            w(window, R ? "popstate" : "hashchange", this.urlChange),
                            w(document, "visibilitychange", this.visibilityChange),
                            history.pushState = this.oldPushState,
                            history.replaceState = this.oldReplaceState
                    }
                    ,
                    e.key = "autoPV",
                    e
            }(mt)
                , Rt = function(t) {
                function e(e, r) {
                    void 0 === e && (e = {});
                    var n = t.call(this) || this;
                    n.eventName = "onpagehide"in window ? "pagehide" : "beforeunload",
                        n.currentUrlPackage = new ht(location.href),
                        n.referUrlPackage = document.referrer ? new ht(document.referrer) : void 0,
                        n.logger = new q,
                        n.plugins = {},
                        n.flush = function() {
                            n.logger.flush(!1)
                        }
                        ,
                    wt || function(t) {
                        console && console.warn && console.warn(t)
                    }("Your browser don't support performance API, the auto pv duration may not correct"),
                        n.baseOption = s({}, pt, r),
                        n.commomPackage = ct(n.baseOption),
                        n.updateCurrentUrlPackage(location.href);
                    var i = e.autoPV
                        , o = e.fps
                        , a = e.timing
                        , u = e.crash
                        , c = e.autoPVFilter
                        , l = function(t, e) {
                        var r = {};
                        for (var n in t)
                            Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
                        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                            var i = 0;
                            for (n = Object.getOwnPropertySymbols(t); i < n.length; i++)
                                e.indexOf(n[i]) < 0 && (r[n[i]] = t[n[i]])
                        }
                        return r
                    }(e, ["autoPV", "fps", "timing", "crash", "autoPVFilter"]);
                    return n.logger.init(l, n.commomPackage),
                        E(window, n.eventName, n.flush),
                        n.initBuildInPlugins({
                            autoPV: i,
                            fps: o,
                            timing: a,
                            crash: u,
                            autoPVFilter: c
                        }),
                        n
                }
                return a(e, t),
                    Object.defineProperty(e.prototype, "currentUrl", {
                        get: function() {
                            var t = this.currentUrlPackage
                                , e = t.page
                                , r = t.params;
                            return r && "object" == typeof r ? e + "?" + A(r) : e
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(e.prototype, "referUrl", {
                        get: function() {
                            if (!this.referUrlPackage)
                                return "";
                            var t = this.referUrlPackage
                                , e = t.page
                                , r = t.params;
                            return r && "object" == typeof r ? e + "?" + A(r) : e
                        },
                        enumerable: !0,
                        configurable: !0
                    }),
                    e.prototype.initBuildInPlugins = function(t) {
                        var e = t.autoPV
                            , r = t.fps
                            , n = t.timing
                            , i = t.crash
                            , o = t.autoPVFilter;
                        e = void 0 === e || e,
                            r = void 0 === r || r,
                            n = void 0 === n || n,
                            i = void 0 === i || i,
                        r && this.plug(bt),
                        n && this.plug(Ot),
                        i && this.plug(yt),
                        e && this.plug(xt, o)
                    }
                    ,
                    e.prototype.updateCurrentUrlPackage = function(t) {
                        void 0 === t && (t = location.href),
                            this.referUrlPackage = this.currentUrlPackage,
                            this.currentUrlPackage = new ht(t)
                    }
                    ,
                    e.prototype.updateBase = function(t) {
                        this.logger.updateBase(ct(s({}, this.baseOption, t)))
                    }
                    ,
                    e.prototype.plug = function(t, e) {
                        if (this.plugins[t.key])
                            throw new Error("There is a duplex plugin called " + t.key);
                        return this.plugins[t.key] = new t(this,e),
                            this
                    }
                    ,
                    e.prototype.unplug = function(t) {
                        var e = this.plugins[t];
                        e && (e.destroy(),
                            delete this.plugins[t])
                    }
                    ,
                    e.prototype.unplugAll = function() {
                        for (var t in this.plugins)
                            this.plugins[t] && this.unplug(t)
                    }
                    ,
                    e.prototype.generateLog = function(t, e, r) {
                        return void 0 === t && (t = "CLICK"),
                            st(t, {
                                name: e,
                                params: r,
                                currentUrlPackage: this.currentUrlPackage,
                                referUrlPackage: this.referUrlPackage
                            })
                    }
                    ,
                    e.prototype.collect = function(t, e, r) {
                        if (void 0 === t && (t = "CLICK"),
                        "PV" === t) {
                            var n = e
                                , i = n.beginTime
                                , o = n.type;
                            this.logger.send(st("PV", {
                                name: "PV",
                                params: {},
                                beginTime: i,
                                type: o,
                                currentUrlPackage: this.currentUrlPackage,
                                referUrlPackage: this.referUrlPackage
                            }))
                        } else
                            this.logger.send(this.generateLog(t, e, r))
                    }
                    ,
                    e.prototype.sendImmediately = function(t, e, r) {
                        if (void 0 === t && (t = "CLICK"),
                        "PV" === t) {
                            var n = e
                                , i = n.beginTime
                                , o = n.type;
                            this.logger.send(st("PV", {
                                name: "PV",
                                params: {},
                                beginTime: i,
                                type: o,
                                currentUrlPackage: this.currentUrlPackage,
                                referUrlPackage: this.referUrlPackage
                            }), !0)
                        } else
                            this.logger.send(this.generateLog(t, e, r), !0)
                    }
                    ,
                    e.prototype.destroy = function() {
                        this.unplugAll(),
                            w(window, this.eventName, this.flush)
                    }
                    ,
                    e
            }(vt)
        }
            .call(this, r("yLpj"))
}