const jsdom = require("jsdom")
const { JSDOM } = jsdom;
const dom = new JSDOM();
window = dom.window;

!function(e) {
    function t(t) {
        for (var i, r, a = t[0], c = t[1], l = t[2], u = 0, h = []; u < a.length; u++)
            r = a[u],
            o[r] && h.push(o[r][0]),
                o[r] = 0;
        for (i in c)
            Object.prototype.hasOwnProperty.call(c, i) && (e[i] = c[i]);
        for (d && d(t); h.length; )
            h.shift()();
        return s.push.apply(s, l || []),
            n()
    }
    function n() {
        for (var e, t = 0; t < s.length; t++) {
            for (var n = s[t], i = !0, r = 1; r < n.length; r++) {
                var c = n[r];
                0 !== o[c] && (i = !1)
            }
            i && (s.splice(t--, 1),
                e = a(a.s = n[0]))
        }
        return e
    }
    var i = {}
        , r = {
        4: 0
    }
        , o = {
        4: 0
    }
        , s = [];
    function a(t) {
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
    a.e = function(e) {
        var t = [];
        r[e] ? t.push(r[e]) : 0 !== r[e] && {
            0: 1,
            5: 1,
            6: 1,
            8: 1,
            9: 1,
            10: 1,
            11: 1,
            12: 1,
            13: 1,
            14: 1,
            15: 1,
            16: 1,
            17: 1,
            18: 1,
            19: 1,
            20: 1,
            21: 1,
            22: 1,
            23: 1,
            24: 1,
            25: 1,
            26: 1,
            28: 1,
            29: 1,
            30: 1
        }[e] && t.push(r[e] = new Promise(function(t, n) {
                for (var i = "css/" + ({
                    0: "common",
                    2: "404",
                    3: "500",
                    5: "category",
                    6: "categoryList",
                    7: "common-error",
                    8: "history",
                    9: "index",
                    10: "liveDetail",
                    11: "livePartner",
                    12: "liveStreamList",
                    13: "mroom",
                    14: "myFollowList",
                    15: "myFollowLiving",
                    16: "news",
                    17: "news-detail",
                    18: "news-list",
                    19: "playback",
                    20: "profile",
                    21: "search",
                    22: "searchDetail",
                    23: "searchOverview",
                    24: "share",
                    25: "thirdPart",
                    26: "tpl",
                    28: "uploadVideo",
                    29: "video-feeds",
                    30: "videoClip"
                }[e] || e) + "." + {
                    0: "12f5921c6d438bc54b63",
                    2: "31d6cfe0d16ae931b73c",
                    3: "31d6cfe0d16ae931b73c",
                    5: "7cd6aea58ae54e7ab408",
                    6: "db719013ced9d5b21778",
                    7: "31d6cfe0d16ae931b73c",
                    8: "3673568754a1fa9ae640",
                    9: "98461fd0e6ec6f9320b4",
                    10: "0766ffeb2913fe351f03",
                    11: "f916ce60128d1501feeb",
                    12: "508fc386f365b2daf25a",
                    13: "c0d4847f983b63322801",
                    14: "8a1b8a03ff7a8d7879a3",
                    15: "adcc230fe793da7307e5",
                    16: "8f2432dc2a0d041c0762",
                    17: "034c2221d2a6b6eb0fda",
                    18: "648bf6a17087bf0106c8",
                    19: "73bd2bff0ad5491d9dda",
                    20: "f64201623b53e3655faf",
                    21: "97a32d971f4f13f9d714",
                    22: "2c1e81ebec089c975856",
                    23: "a0746c6af6d95a38a711",
                    24: "1f7be25bf1d74dd45b82",
                    25: "00b4a5b56500c867b183",
                    26: "048751cbd416c6e49966",
                    28: "4448b8c25bf333125072",
                    29: "4ae17a8cd705050c3a20",
                    30: "b88321dfa2394b3ce3bf"
                }[e] + ".css", o = a.p + i, s = document.getElementsByTagName("link"), c = 0; c < s.length; c++) {
                    var l = s[c]
                        , u = l.getAttribute("data-href") || l.getAttribute("href");
                    if ("stylesheet" === l.rel && (u === i || u === o))
                        return t()
                }
                var d = document.getElementsByTagName("style");
                for (c = 0; c < d.length; c++) {
                    l = d[c],
                        u = l.getAttribute("data-href");
                    if (u === i || u === o)
                        return t()
                }
                var h = document.createElement("link");
                h.rel = "stylesheet",
                    h.type = "text/css",
                    h.onload = t,
                    h.onerror = function(t) {
                        var i = t && t.target && t.target.src || o
                            , s = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
                        s.code = "CSS_CHUNK_LOAD_FAILED",
                            s.request = i,
                            delete r[e],
                            h.parentNode.removeChild(h),
                            n(s)
                    }
                    ,
                    h.href = o;
                var p = document.getElementsByTagName("head")[0];
                p.appendChild(h)
            }
        ).then(function() {
            r[e] = 0
        }));
        var n = o[e];
        if (0 !== n)
            if (n)
                t.push(n[2]);
            else {
                var i = new Promise(function(t, i) {
                        n = o[e] = [t, i]
                    }
                );
                t.push(n[2] = i);
                var s, c = document.createElement("script");
                c.charset = "utf-8",
                    c.timeout = 120,
                a.nc && c.setAttribute("nonce", a.nc),
                    c.src = function(e) {
                        return a.p + "js/modern/" + ({
                            0: "common",
                            2: "404",
                            3: "500",
                            5: "category",
                            6: "categoryList",
                            7: "common-error",
                            8: "history",
                            9: "index",
                            10: "liveDetail",
                            11: "livePartner",
                            12: "liveStreamList",
                            13: "mroom",
                            14: "myFollowList",
                            15: "myFollowLiving",
                            16: "news",
                            17: "news-detail",
                            18: "news-list",
                            19: "playback",
                            20: "profile",
                            21: "search",
                            22: "searchDetail",
                            23: "searchOverview",
                            24: "share",
                            25: "thirdPart",
                            26: "tpl",
                            28: "uploadVideo",
                            29: "video-feeds",
                            30: "videoClip"
                        }[e] || e) + "." + {
                            0: "bbdcf202fc834136cb22",
                            2: "f7c11f19acf56cda153c",
                            3: "023256fd8f7c4e5e1ef6",
                            5: "11e0b48e81e97d0e9a00",
                            6: "34428d9551e07e051c17",
                            7: "23c13de00db61a4eadde",
                            8: "062d2b12ad5342115a2a",
                            9: "4f062271e43b62b49af9",
                            10: "ce2ad4e8aa1901f6fbb0",
                            11: "97c17328b3fbb326871d",
                            12: "ba96cfc98b5caa3ab1b6",
                            13: "362d2d728645cb0eac8b",
                            14: "7bc365f5e0de4e7111eb",
                            15: "1fa84f34fb375e4d7844",
                            16: "1db06bdfe080c9c66333",
                            17: "ffad64b1042329054803",
                            18: "f4e330183d0a873cecb9",
                            19: "574fd676c8091cc6073d",
                            20: "b5b283f48aff61c1154c",
                            21: "2812c7b33dd7b9270a0d",
                            22: "bbff31caae15cc9717a9",
                            23: "407b227ec1030e181040",
                            24: "c9346fd8b50a6b6068cb",
                            25: "c497f5ce689e946eac48",
                            26: "6dce5c7922a36a6a6435",
                            28: "e1dfd3e9b75692266f59",
                            29: "a730ea0e140f4ee5534e",
                            30: "1ab988c1cdb63425f58a"
                        }[e] + ".js"
                    }(e);
                var l = new Error;
                s = function(t) {
                    c.onerror = c.onload = null,
                        clearTimeout(u);
                    var n = o[e];
                    if (0 !== n) {
                        if (n) {
                            var i = t && ("load" === t.type ? "missing" : t.type)
                                , r = t && t.target && t.target.src;
                            l.message = "Loading chunk " + e + " failed.\n(" + i + ": " + r + ")",
                                l.name = "ChunkLoadError",
                                l.type = i,
                                l.request = r,
                                n[1](l)
                        }
                        o[e] = void 0
                    }
                }
                ;
                var u = setTimeout(function() {
                    s({
                        type: "timeout",
                        target: c
                    })
                }, 12e4);
                c.onerror = c.onload = s,
                    document.head.appendChild(c)
            }
        return Promise.all(t)
    }
    console.log(a.e)
        ,
        a.m = e,
        a.c = i,
        a.d = function(e, t, n) {
            a.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }
        ,
        a.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(e, "__esModule", {
                    value: !0
                })
        }
        ,
        a.t = function(e, t) {
            if (1 & t && (e = a(e)),
            8 & t)
                return e;
            if (4 & t && "object" == typeof e && e && e.__esModule)
                return e;
            var n = Object.create(null);
            if (a.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }),
            2 & t && "string" != typeof e)
                for (var i in e)
                    a.d(n, i, function(t) {
                        return e[t]
                    }
                        .bind(null, i));
            return n
        }
        ,
        a.n = function(e) {
            var t = e && e.__esModule ? function() {
                    return e.default
                }
                : function() {
                    return e
                }
            ;
            return a.d(t, "a", t),
                t
        }
        ,
        a.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        a.p = "//static.yximgs.com/s1/",
        a.oe = function(e) {
            throw console.error(e),
                e
        }
    ;
    var c = window.webpackJsonp = window.webpackJsonp || []
        , l = c.push.bind(c);
    c.push = t,
        c = c.slice();
    for (var u = 0; u < c.length; u++)
        t(c[u]);
    var d = l;
    s.push(["uIIQ", 1]),
        n()
}({
    "0J7F": function(e, t, n) {
        "use strict";
        var i = n("0nq8")
            , r = n.n(i);
        r.a
    },
    "0nq8": function(e, t, n) {},
    "1MnG": function(e, t, n) {
        "use strict";
        var i = n("PxMD")
            , r = n.n(i);
        r.a
    },
    "1PV9": function(e, t, n) {},
    "1U5r": function(e, t, n) {
        "use strict";
        var i = n("k7+O")
            , r = n.n(i);
        const o = function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            return e.reduce((e,t)=>(e[t] = !0,
                e), {})
        }(["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "interruptbegin", "interruptend", "loadeddata", "loadedmetadata", "loadstart", "mozaudioavailable", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting", "fullscreenchange"]);
        var s = n("TggW");
        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
                e
        }
        function c(e, t, n, i, r, o, s) {
            try {
                var a = e[o](s)
                    , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, r)
        }
        function l(e) {
            return function() {
                var t = this
                    , n = arguments;
                return new Promise(function(i, r) {
                        var o = e.apply(t, n);
                        function s(e) {
                            c(o, i, r, s, a, "next", e)
                        }
                        function a(e) {
                            c(o, i, r, s, a, "throw", e)
                        }
                        s(void 0)
                    }
                )
            }
        }
        var u = {
            name: "kwai-player",
            props: {
                width: {
                    type: [Number, String],
                    default: 0
                },
                height: {
                    type: [Number, String],
                    default: 0
                },
                isLive: {
                    type: Boolean,
                    default: !1
                },
                poster: {
                    type: String,
                    default: ""
                },
                muted: {
                    type: Boolean,
                    default: !1
                },
                config: {
                    type: Object,
                    default: ()=>({})
                },
                kernel: Function,
                liveStream: {
                    type: Object,
                    default: ()=>({})
                }
            },
            components: {
                blurImg: s.a
            },
            data() {
                return this.kernenListeners = [],
                    this.$plugins = {},
                    {
                        isFullscreen: !1,
                        src: "",
                        rotation: 0,
                        original: {
                            volume: 1,
                            currentTime: 0,
                            duration: NaN,
                            paused: !0,
                            ended: !0,
                            buffered: {},
                            playbackRate: 1,
                            defaultPlaybackRate: 1
                        }
                    }
            },
            computed: {
                computedMuted() {
                    const e = 0 === this.volume;
                    return this.muted || e
                },
                volume: {
                    get() {
                        return this.original.volume
                    },
                    set(e) {
                        this.original.volume = e,
                        this.$refs.video.volume !== e && (this.$refs.video.volume = e)
                    }
                },
                currentTime: {
                    get() {
                        return this.original.currentTime
                    },
                    set(e) {
                        this.original.currentTime = e,
                        this.$refs.video.currentTime !== e && (this.$refs.video.currentTime = e)
                    }
                },
                playbackRate: {
                    get() {
                        return this.original.playbackRate
                    },
                    set(e) {
                        this.original.playbackRate = e,
                        this.$refs.video.playbackRate !== e && (this.$refs.video.playbackRate = e)
                    }
                },
                defaultPlaybackRate: {
                    get() {
                        return this.original.defaultPlaybackRate
                    },
                    set(e) {
                        this.original.defaultPlaybackRate = e,
                        this.$refs.video.defaultPlaybackRate !== e && (this.$refs.video.defaultPlaybackRate = e)
                    }
                },
                duration() {
                    return this.original.duration
                },
                buffered() {
                    return this.original.buffered
                },
                paused() {
                    return this.original.paused
                },
                ended() {
                    return this.original.ended
                },
                computedWidth() {
                    return "number" == typeof this.width ? this.width + "px" : this.width
                },
                computedHeight() {
                    return "number" == typeof this.height ? this.height + "px" : this.height
                },
                rotationClass() {
                    return "kwai-player-rotation-".concat(this.rotation)
                }
            },
            methods: {
                syncAndEmit(e) {
                    let {event: t, name: n, properties: i=[], values: r} = e;
                    this.$refs.video && (i.forEach((e,t)=>{
                            const n = void 0 === r ? this.$refs.video[e] : r[t];
                            void 0 !== this.original[e] ? this.original[e] = n : this[e] = n
                        }
                    ),
                        this.$emit(n, t))
                },
                fullscreen(e) {
                    e ? r.a.request(this.$el) : r.a.element && r.a.exit()
                },
                fullscreenchange() {
                    r.a.element && r.a.element !== this.$el || (this.isFullscreen = r.a.isFullscreen,
                        this.$emit("fullscreenchange", r.a.isFullscreen))
                },
                rotate() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    if (this.rotation = void 0 === e ? this.rotation : e,
                    e % 180 == 0)
                        return void (this.$refs.video.style.cssText = "");
                    const t = this.$refs.playerContainer.clientWidth
                        , n = this.$refs.playerContainer.clientHeight;
                    this.$refs.video.style.cssText = ["width: ".concat(n, "px;"), "height: ".concat(t, "px;"), "max-height: ".concat(t, "px;")].join(" ")
                },
                play() {
                    var e = this;
                    return l(function*() {
                        e.$refs.video.src && (e.isLive ? yield e.reload() : yield e.$refs.video.play())
                    })()
                },
                pause() {
                    var e = this;
                    return l(function*() {
                        e.isLive && e.$kernel && e.$kernel.stopLoad(),
                        e.$refs.video.src && (yield e.$refs.video.pause())
                    })()
                },
                stop() {
                    this.$kernel && this.$kernel.stopLoad(),
                        this.$refs.video.removeAttribute("src"),
                        this.$refs.video.load(),
                        this.$emit("ended")
                },
                reload() {
                    return this.$emit("reload"),
                        this.load({
                            resource: this.src,
                            muted: this.muted
                        })
                },
                load(e) {
                    var t = this;
                    return l(function*() {
                        let {resource: n, muted: i} = e;
                        (i || t.muted) && (t.volume = 0),
                            t.src = n,
                            t.rotate(0),
                            t.initKernel(function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {}
                                        , i = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    }))),
                                        i.forEach(function(t) {
                                            a(e, t, n[t])
                                        })
                                }
                                return e
                            }({
                                isLive: t.isLive,
                                src: n
                            }, t.config)),
                            t.$kernel ? (t.$emit("loadstart"),
                                yield t.$nextTick(),
                                t.bindKernelEvents(),
                                t.$kernel.load(),
                                yield t.$refs.video.play()) : (t.$refs.video.src = n,
                                yield t.$nextTick(),
                                yield t.$refs.video.play())
                    })()
                },
                initKernel(e) {
                    var t = this;
                    return l(function*() {
                        t.destroyKernel(),
                        t.kernel && (t.$kernel = new t.kernel(t.$refs.video,e))
                    })()
                },
                destroyKernel() {
                    if (this.$kernel) {
                        this.unbindKernelEvents();
                        try {
                            this.$kernel.destroy()
                        } catch (e) {}
                        this.$kernel = null
                    }
                },
                bindKernelEvents() {
                    var e = this;
                    Object.keys(this._events).forEach(t=>{
                            if (o[t])
                                return;
                            const n = function() {
                                for (var n = arguments.length, i = new Array(n), r = 0; r < n; r++)
                                    i[r] = arguments[r];
                                const o = e._events[t];
                                "function" != typeof o ? o.forEach(t=>{
                                        t.call(e, ...i)
                                    }
                                ) : o.call(e, ...i)
                            };
                            this.kernenListeners.push({
                                eventName: t,
                                callback: n
                            }),
                                this.$kernel.on(t, n)
                        }
                    )
                },
                unbindKernelEvents() {
                    this.kernenListeners.forEach(e=>{
                            let {eventName: t, callback: n} = e;
                            try {
                                this.$kernel.off(t, n)
                            } catch (e) {}
                        }
                    ),
                        this.kernenListeners = []
                },
                error(e) {
                    this.$kernel || this.$emit("error", e)
                }
            },
            mounted() {
                Object.keys(this.original).forEach(e=>{
                        this.original[e] = this.$refs.video[e]
                    }
                ),
                    r.a.on("change", this.fullscreenchange)
            },
            beforeDestroy() {
                this.destroyKernel(),
                    r.a.off("change", this.fullscreenchange)
            }
        }
            , d = u
            , h = (n("PzhU"),
            n("KHd+"))
            , p = Object(h.a)(d, function() {
            var e = this
                , t = e.$createElement
                , n = e._self._c || t;
            return n("div", {
                ref: "playerContainer",
                staticClass: "kwai-player-container kwai-player",
                class: [e.rotationClass],
                style: {
                    width: e.computedWidth,
                    height: e.computedHeight
                }
            }, [n("blur-img", {
                key: e.poster,
                staticClass: "kwai-player-blur",
                attrs: {
                    src: e.poster
                }
            }), e._v(" "), n("div", {
                staticClass: "kwai-player-container-video"
            }, [n("video", {
                ref: "video",
                staticClass: "player-video",
                attrs: {
                    autoplay: ""
                },
                domProps: {
                    muted: e.computedMuted
                },
                on: {
                    contextmenu: function(e) {
                        e.stopPropagation(),
                            e.preventDefault()
                    },
                    play: function(t) {
                        return e.syncAndEmit({
                            name: "play",
                            properties: ["paused", "ended"],
                            event: t
                        })
                    },
                    playing: function(t) {
                        return e.syncAndEmit({
                            name: "playing",
                            properties: ["paused", "ended"],
                            event: t
                        })
                    },
                    waiting: function(t) {
                        return e.$emit("waiting", t)
                    },
                    ended: function(t) {
                        return e.syncAndEmit({
                            name: "ended",
                            properties: ["paused", "ended"],
                            event: t
                        })
                    },
                    pause: function(t) {
                        return e.syncAndEmit({
                            name: "pause",
                            properties: ["paused", "ended"],
                            event: t
                        })
                    },
                    seeking: function(t) {
                        return e.$emit("seeking", t)
                    },
                    seeked: function(t) {
                        return e.$emit("seeked", t)
                    },
                    timeupdate: function(t) {
                        return e.syncAndEmit({
                            name: "timeupdate",
                            properties: ["currentTime"],
                            event: t
                        })
                    },
                    ratechange: function(t) {
                        return e.syncAndEmit({
                            name: "ratechange",
                            properties: ["playbackRate", "defaultPlaybackRate"],
                            event: t
                        })
                    },
                    volumechange: function(t) {
                        return e.syncAndEmit({
                            name: "volumechange",
                            properties: ["volume"],
                            event: t
                        })
                    },
                    loadstart: function(t) {
                        return e.syncAndEmit({
                            name: "loadstart",
                            properties: ["buffered"],
                            event: t
                        })
                    },
                    durationchange: function(t) {
                        return e.syncAndEmit({
                            name: "durationchange",
                            properties: ["duration", "buffered"],
                            event: t
                        })
                    },
                    loadedmetadata: function(t) {
                        return e.syncAndEmit({
                            name: "loadedmetadata",
                            properties: ["buffered"],
                            event: t
                        })
                    },
                    loadeddata: function(t) {
                        return e.syncAndEmit({
                            name: "loadeddata",
                            properties: ["buffered"],
                            event: t
                        })
                    },
                    progress: function(t) {
                        return e.syncAndEmit({
                            name: "progress",
                            properties: ["buffered"],
                            event: t
                        })
                    },
                    canplay: function(t) {
                        return e.syncAndEmit({
                            name: "canplay",
                            properties: ["buffered"],
                            event: t
                        })
                    },
                    canplaythrough: function(t) {
                        return e.syncAndEmit({
                            name: "canplaythrough",
                            properties: ["buffered"],
                            event: t
                        })
                    },
                    error: function(t) {
                        return e.error(t)
                    }
                }
            }), e._v(" "), n("div", {
                staticClass: "kwai-player-plugins"
            }, [e._t("default")], 2)]), e._v(" "), n("div", {
                staticClass: "kwai-player-plugins-pad"
            }, [e._t("pad")], 2), e._v(" "), n("div", {
                staticClass: "kwai-player-plugins-bottom"
            }, [e._t("bottom")], 2)], 1)
        }, [], !1, null, "4035491f", null);
        t.a = p.exports
    },
    "2BOC": function(e, t, n) {},
    "3INh": function(e, t, n) {
        "use strict";
        var i = n("jJ61")
            , r = n.n(i);
        r.a
    },
    "4zj1": function(e, t, n) {
        "use strict";
        var i = n("GAV0")
            , r = n.n(i);
        r.a
    },
    "5T4V": function(e, t, n) {},
    "5bxM": function(e, t, n) {
        e.exports = n.p + "i/step1.7c92e32.png"
    },
    "6r1/": function(e, t, n) {
        "use strict";
        var i = n("1PV9")
            , r = n.n(i);
        r.a
    },
    "728j": function(e, t, n) {},
    "9TcE": function(e, t, n) {},
    "9Uo4": function(e, t, n) {
        "use strict";
        var i = n("LJEc")
            , r = n.n(i);
        r.a
    },
    "9uv/": function(e, t, n) {},
    A5Lr: function(e, t, n) {
        e.exports = n.p + "i/step3.29abc34.png"
    },
    ACE3: function(e, t, n) {
        e.exports = n.p + "i/step2.2a3d3dc.png"
    },
    AobF: function(e, t, n) {
        "use strict";
        var i = n("oCYn");
        t.a = new i.a
    },
    BCm8: function(e, t, n) {
        "use strict";
        var i = n("mrSG")
            , r = n("uycM");
        let o = class extends r.i {
                changeSex(e) {
                    this.$emit("change", e)
                }
            }
        ;
        i.__decorate([Object(r.f)("change", {
            type: String
        })], o.prototype, "sex", void 0),
            o = i.__decorate([r.a], o);
        var s = o
            , a = s
            , c = (n("6r1/"),
            n("KHd+"))
            , l = Object(c.a)(a, function() {
            var e = this
                , t = e.$createElement
                , n = e._self._c || t;
            return n("ul", {
                staticClass: "sex-select"
            }, [n("li", [n("span", {
                staticClass: "male",
                class: {
                    selected: "M" === e.sex
                },
                on: {
                    click: function(t) {
                        return e.changeSex("M")
                    }
                }
            }, [e._v("\n            男生\n        ")])]), e._v(" "), n("li", [n("span", {
                staticClass: "female",
                class: {
                    selected: "F" === e.sex
                },
                on: {
                    click: function(t) {
                        return e.changeSex("F")
                    }
                }
            }, [e._v("\n            女生\n        ")])])])
        }, [], !1, null, "65a93bdb", null);
        t.a = l.exports
    },
    Byqh: function(e, t, n) {},
    FMfQ: function(e, t, n) {
        "use strict";
        var i = n("jKxf")
            , r = n.n(i);
        r.a
    },
    GAV0: function(e, t, n) {},
    GtSK: function(e, t, n) {
        e.exports = n.p + "i/fail.07f2587.svg"
    },
    HSo8: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return o
        });
        const i = ["WebKit", "Gecko", "Blink"]
            , r = [{
            name: "Safari",
            min: 10.1
        }];
        function o(e) {
            const t = i.some(t=>e.engine.name === t)
                , n = r.some(t=>t.name === e.browser.name && e.browser.version < t.min);
            return !t || n
        }
    },
    I3o2: function(e, t, n) {
        "use strict";
        var i = n("728j")
            , r = n.n(i);
        r.a
    },
    "IJo+": function(e, t, n) {},
    IMje: function(e, t, n) {
        "use strict";
        n.d(t, "d", function() {
            return a
        }),
            n.d(t, "a", function() {
                return c
            }),
            n.d(t, "c", function() {
                return l
            }),
            n.d(t, "b", function() {
                return u
            });
        var i = n("p46w")
            , r = n.n(i)
            , o = n("bD1G");
        const s = o.b ? "kuaishou.com" : "gifshow.com";
        function a(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            r.a.set(e, t, {
                expires: n,
                domain: s
            })
        }
        function c(e) {
            return r.a.get(e, {
                domain: s
            })
        }
        function l(e) {
            r.a.remove(e, {
                domain: s
            })
        }
        function u(e) {
            return !!c(e)
        }
    },
    JFAF: function(e, t, n) {
        "use strict";
        var i = n("AobF");
        function r(e, t, n, i, r, o, s) {
            try {
                var a = e[o](s)
                    , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, r)
        }
        function o(e) {
            return function() {
                var t = this
                    , n = arguments;
                return new Promise(function(i, o) {
                        var s = e.apply(t, n);
                        function a(e) {
                            r(s, i, o, a, c, "next", e)
                        }
                        function c(e) {
                            r(s, i, o, a, c, "throw", e)
                        }
                        a(void 0)
                    }
                )
            }
        }
        t.a = function(e, t, n) {
            return {
                get() {
                    var e = this;
                    return o(function*() {
                        try {
                            for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
                                r[o] = arguments[o];
                            n.value ? yield n.value.apply(e, r) : yield n.get.call(e).apply(e, r)
                        } catch (e) {
                            throw i.a.$emit("global-error", {
                                result: e.result,
                                error_msg: navigator.onLine ? e.error_msg : "网络异常，请检查网络连接"
                            }),
                                e
                        }
                    })
                }
            }
        }
    },
    LJEc: function(e, t, n) {},
    Lgak: function(e, t, n) {
        "use strict";
        var i = n("lbd0")
            , r = n.n(i);
        r.a
    },
    MSMJ: function(e, t, n) {
        "use strict";
        var i = n("SnXw")
            , r = n.n(i);
        r.a
    },
    MgXp: function(e, t, n) {
        "use strict";
        var i = n("bD1G");
        const r = {
            NONE: 0,
            LOCAL_STORAGE: 1,
            BROADCAST_CHANNEL: 2
        };
        t.a = new class {
            constructor() {
                this.eventMap = {},
                    i.a && window.localStorage ? window.BroadcastChannel ? this.type = r.BROADCAST_CHANNEL : this.type = function() {
                        const e = "test_".concat(Math.random());
                        try {
                            return window.localStorage.setItem(e, "1"),
                                window.localStorage.removeItem(e),
                                !0
                        } catch (e) {
                            return !1
                        }
                    }() ? r.LOCAL_STORAGE : r.NONE : this.type = r.NONE
            }
            getInstance(e) {
                if (this.eventMap[e])
                    return this.eventMap[e];
                let t;
                return this.type === r.BROADCAST_CHANNEL ? (t = {
                    source: new BroadcastChannel(e),
                    handlerList: [],
                    on(e, t) {
                        this.handlerList.push(t),
                            this.source.addEventListener("message", t=>{
                                    let {data: n} = t;
                                    n.event === e && this.handlerList.forEach(e=>e(n.message))
                                }
                            )
                    },
                    broadcast(e, t) {
                        this.source.postMessage({
                            event: e,
                            message: t
                        })
                    },
                    off(e, t) {
                        if (!t)
                            return void (this.handlerList = []);
                        const n = this.handlerList.indexOf(t);
                        -1 !== n && this.handlerList.splice(n, 1)
                    }
                },
                    this.eventMap[e] = t,
                    t) : (t = {
                    handlerList: [],
                    on(e, t) {
                        console.log(t),
                            window.addEventListener("storage", ()=>{
                                    let t;
                                    try {
                                        t = JSON.parse(window.localStorage.getItem(e)) || {}
                                    } catch (e) {
                                        t = {}
                                    }
                                    t.event === e && this.handlerList.forEach(e=>e(t.message))
                                }
                                , !1)
                    },
                    broadcast(e, t) {
                        window.localStorage.setItem(e, JSON.stringify({
                            event: e,
                            message: t,
                            timestamp: Date.now()
                        }))
                    },
                    off(e, t) {
                        if (!t)
                            return void (this.handlerList = []);
                        const n = this.handlerList.indexOf(t);
                        -1 !== n && this.handlerList.splice(n, 1)
                    }
                },
                    this.eventMap[e] = t,
                    t)
            }
            broadcast(e, t) {
                this.type < 1 || this.getInstance(e).broadcast(e, t)
            }
            on(e, t) {
                this.type < 1 || this.getInstance(e).on(e, t)
            }
            off(e, t) {
                this.type < 1 || this.getInstance(e).off(e, t)
            }
        }
    },
    NkOo: function(e, t, n) {},
    "OJP/": function(e, t, n) {
        "use strict";
        var i = n("qbWX")
            , r = n.n(i);
        r.a
    },
    Oj1a: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return _
        });
        var i = n("mrSG")
            , r = n("b6HW")
            , o = n("lTCR")
            , s = n.n(o)
            , a = n("NlKi")
            , c = n.n(a)
            , l = n("Nndj")
            , u = n("MgXp")
            , d = n("bD1G")
            , h = n("QfRt");
        function p() {
            const e = g(["\n            mutation UserLogin($userLoginInfo: FlatObject) {\n                login(userLoginInfo: $userLoginInfo) {\n                    result\n                }\n            }\n        "]);
            return p = function() {
                return e
            }
                ,
                e
        }
        function f() {
            const e = g(["\n            mutation UserModify($userModifyInfo: FlatObject) {\n                modify(userModifyInfo: $userModifyInfo) {\n                    result\n                }\n            }\n        "]);
            return f = function() {
                return e
            }
                ,
                e
        }
        function v() {
            const e = g(["\n            mutation LogoutMutation {\n                logout {\n                    result\n                }\n            }\n        "]);
            return v = function() {
                return e
            }
                ,
                e
        }
        function m() {
            const e = g(["\n            query userInfoQuery {\n                kshellBalance {\n                    kshell\n                }\n                ownerInfo {\n                    id\n                    principalId\n                    kwaiId\n                    eid\n                    userId\n                    profile\n                    name\n                    description\n                    sex\n                    constellation\n                    cityName\n                    following\n                    living\n                    watchingCount\n                    isNew\n                    privacy\n                    # TODO 增加这个为了解决这个接口的强制刷新 现在Apollo Client如果判断拿到的结果和上一次一样就不next了\n                    # 如果用户登出再登录 登录状态不会变化\n                    timestamp\n                    feeds {\n                        eid\n                        photoId\n                        thumbnailUrl\n                        timestamp\n                    }\n                    verifiedStatus {\n                        verified\n                        description\n                        type\n                        new\n                    }\n                    countsInfo {\n                        fan\n                        follow\n                        photo\n                        liked\n                        open\n                        playback\n                        private\n                    }\n                    bannedStatus {\n                        banned\n                        defriend\n                        isolate\n                        socialBanned\n                    }\n                }\n            }\n        "]);
            return m = function() {
                return e
            }
                ,
                e
        }
        function g(e, t) {
            return t || (t = e.slice(0)),
                Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
        }
        function y(e, t, n, i, r, o, s) {
            try {
                var a = e[o](s)
                    , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, r)
        }
        function b(e) {
            return function() {
                var t = this
                    , n = arguments;
                return new Promise(function(i, r) {
                        var o = e.apply(t, n);
                        function s(e) {
                            y(o, i, r, s, a, "next", e)
                        }
                        function a(e) {
                            y(o, i, r, s, a, "throw", e)
                        }
                        s(void 0)
                    }
                )
            }
        }
        class _ extends r.a {
            constructor() {
                super(...arguments),
                    this.models = {
                        configModel: h.a
                    },
                    this.banned = "BANNED",
                    this.socialBanned = "SOCIALBANNED",
                    this.isolate = "ISOLATE",
                    this.cleanState = "CLEAN",
                    this.bannedErrMsg = "由于违反社区规定，账号封禁，请前往快手APP进行解封申诉",
                    this.socialBannedErrMsg = "账号异常，请前往快手APP激活",
                    this.isolateErrMsg = "该链接指向页面不存在",
                    this.bannedErrMsgByOther = "该用户因违反社区规定，账号封禁",
                    this.qrLoginInfo = {}
            }
            get userInfo() {
                return this.userInfoQuery.data.ownerInfo
            }
            get kshellBalance() {
                return this.userInfoQuery.data.kshellBalance.kshell
            }
            get userBannedValue() {
                const e = this.getBannedState(this.userInfo);
                return e === this.cleanState ? null : e
            }
            getAbnormalState(e) {
                if (!e || !e.bannedStatus)
                    return this.cleanState;
                const t = this.getBannedState(e);
                return t !== this.cleanState ? t : e.bannedStatus.isolate ? this.isolate : this.cleanState
            }
            getBannedState(e) {
                return e && e.bannedStatus ? e.bannedStatus.banned ? this.banned : e.bannedStatus.socialBanned ? this.socialBanned : this.cleanState : this.cleanState
            }
            cleanUserInfo() {
                Object.keys(this.userInfo).forEach(e=>{
                        this.userInfo[e] = ""
                    }
                )
            }
            getUserInfo() {
                var e = this;
                return b(function*() {
                    yield e.userInfoQuery.refetch(),
                    d.a && c.a.setUserContext({
                        id: e.configModel.did,
                        username: e.userInfo.id
                    }),
                    d.a && e.userInfo.id && u.a.broadcast("login")
                })()
            }
            getQRCode() {
                var e = this;
                return b(function*() {
                    e.qrLoginInfo = yield l.a.getQRLoginInfo()
                })()
            }
            getUserLoginInfo() {
                var e = this;
                return b(function*() {
                    return l.a.getUserLoginInfo({
                        qrLoginSignature: e.qrLoginInfo.qrLoginSignature,
                        qrLoginToken: e.qrLoginInfo.qrLoginToken
                    })
                })()
            }
            scanQRLoginResult() {
                var e = this;
                return b(function*() {
                    return l.a.scanQRLoginResult({
                        qrLoginSignature: e.qrLoginInfo.qrLoginSignature,
                        qrLoginToken: e.qrLoginInfo.qrLoginToken
                    })
                })()
            }
            logout() {
                var e = this;
                return b(function*() {
                    yield e.logoutMutation.mutate({}),
                        yield l.a.logout(),
                        c.a.setUserContext({
                            id: e.configModel.did
                        }),
                        e.cleanUserInfo(),
                    d.a && u.a.broadcast("logout")
                })()
            }
            requestMobileCode(e) {
                return l.a.requestMobileCode(e)
            }
            register(e) {
                return l.a.register(e)
            }
            modifyUserInfo(e) {
                var t = this;
                return b(function*() {
                    yield t.modifyMutation.mutate(e)
                })()
            }
            login(e) {
                var t = this;
                return b(function*() {
                    yield t.loginMutation.mutate(e),
                        yield t.getUserInfo()
                })()
            }
            cancelQrLogin() {
                l.a.cancelQrLogin()
            }
        }
        i.__decorate([Object(r.d)({
            query: s()(m()),
            initState: {
                kshellBalance: {
                    kshell: 0
                },
                ownerInfo: {
                    eid: "",
                    kwaiId: "",
                    userId: "",
                    id: "",
                    name: "",
                    profile: "",
                    description: "",
                    sex: "",
                    following: !1,
                    isNew: !1,
                    cityName: "",
                    verifiedStatus: {
                        verified: "",
                        type: ""
                    },
                    countsInfo: {
                        fan: "",
                        follow: "",
                        photo: ""
                    },
                    bannedStatus: {
                        banned: !1,
                        socialBanned: !1,
                        isolate: !1,
                        defriend: !1
                    },
                    living: !1,
                    privacy: !1
                }
            },
            fetchPolicy: "no-cache"
        })], _.prototype, "userInfoQuery", void 0),
            i.__decorate([Object(r.c)({
                mutation: s()(v()),
                variables: {}
            })], _.prototype, "logoutMutation", void 0),
            i.__decorate([Object(r.c)({
                mutation: s()(f()),
                variables(e) {
                    let {userName: t, userSex: n} = e;
                    return {
                        userModifyInfo: {
                            userName: t,
                            userSex: n
                        }
                    }
                }
            })], _.prototype, "modifyMutation", void 0),
            i.__decorate([Object(r.c)({
                mutation: s()(p()),
                variables(e) {
                    let {authToken: t, sid: n} = e;
                    return {
                        userLoginInfo: {
                            authToken: t,
                            sid: n
                        }
                    }
                }
            })], _.prototype, "loginMutation", void 0)
    },
    P9li: function(e, t, n) {},
    Phb6: function(e, t, n) {
        e.exports = n.p + "i/success.0e52895.svg"
    },
    PxMD: function(e, t, n) {},
    PzhU: function(e, t, n) {
        "use strict";
        var i = n("Yk8q")
            , r = n.n(i);
        r.a
    },
    QfRt: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return c
        });
        var i = n("mrSG")
            , r = n("b6HW")
            , o = n("lTCR")
            , s = n.n(o);
        function a() {
            const e = function(e, t) {
                t || (t = e.slice(0));
                return Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }(["\n            query configQuery {\n                config {\n                    did\n                    config\n                    abTest\n                }\n            }\n        "]);
            return a = function() {
                return e
            }
                ,
                e
        }
        class c extends r.a {
            get config() {
                return this.configQuery.data.config.config
            }
            get abTest() {
                return this.configQuery.data.config.abTest
            }
            get showInDanmakuGiftIds() {
                return this.config["pcLive.webConfig.liveGiftShowInBarrage"] || []
            }
            get did() {
                return this.configQuery.data.config.did
            }
        }
        i.__decorate([Object(r.d)({
            query: s()(a()),
            initState: {
                config: {
                    did: "",
                    config: {},
                    abTest: {}
                }
            },
            prefetch: !0
        })], c.prototype, "configQuery", void 0)
    },
    R4DR: function(e, t, n) {},
    "S2+C": function(e, t, n) {},
    SSrh: function(e, t, n) {},
    SnXw: function(e, t, n) {},
    TJTp: function(e, t, n) {
        "use strict";
        var i = n("yyeT")
            , r = n("z/if")
            , o = n.n(r)
            , s = n("7isM")
            , a = n.n(s);
        const c = "undefined" != typeof window
            , l = "undefined" == typeof window
            , u = e=>setTimeout(e, 62.5)
            , d = l ? u : window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || u;
        class h {
            constructor(e) {
                this.baseConfig = {
                    url: "",
                    retries: 0,
                    maxErrLog: 100,
                    timeout: 3e4,
                    useBeacon: !1
                },
                    this.errLogMap = {},
                    this.errTryMap = {},
                    this.errLogId = [],
                    this.init(e)
            }
            init(e) {
                e.url ? "number" != typeof e.retries || /^\d+$/.test(e.retries) ? Object.assign(this.baseConfig, e) : console.error("Log: retries需要是正整数") : console.error("Log: url不能为空")
            }
            sendData() {
                let {data: e, id: t, async: n} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!c)
                    return;
                const i = this.baseConfig
                    , r = t || a()()
                    , o = "boolean" != typeof n || n;
                if (i.useBeacon && navigator.sendBeacon)
                    navigator.sendBeacon(i.url, e) || (this.errHandler({
                        id: r,
                        data: e
                    }),
                        this.walkErrLog());
                else {
                    const t = new XMLHttpRequest;
                    t.open("POST", i.url, o),
                        t.setRequestHeader("kpn", "GAME_ZONE"),
                        t.setRequestHeader("kpf", "PC_WEB"),
                    o && (t.timeout = i.timeout),
                        t.onload = ()=>{
                            t.status >= 200 && t.status < 300 || 304 === t.status ? this.errLogId.includes(r) && this.removeErrLog(r) : (this.errHandler({
                                id: r,
                                data: e
                            }),
                                this.walkErrLog())
                        }
                        ,
                        t.ontimeout = t.onerror = ()=>{
                            this.errHandler({
                                id: r,
                                data: e
                            }),
                                this.walkErrLog()
                        }
                    ;
                    try {
                        t.send(e)
                    } catch (e) {
                        console.error("Log: ".concat(e))
                    }
                }
            }
            errHandler(e) {
                let {data: t, id: n} = e;
                this.baseConfig.retries && (this.errLogId.length < this.baseConfig.maxErrLog ? (this.errLogId.includes(n) || (this.errLogId.push(n),
                    this.errLogMap[n] = t),
                    this.errTryMap[n] ? this.errTryMap[n] += 1 : this.errTryMap[n] = 1) : console.error("Log: maxErrLog溢出"))
            }
            removeErrLog(e) {
                const t = this.errLogId.findIndex(t=>t === e);
                t > -1 && (this.errLogId.splice(t, 1),
                    this.errLogMap[e] = null,
                    this.errTryMap[e] = 0)
            }
            walkErrLog() {
                const e = this.errLogId.shift();
                if (e) {
                    if (this.errTryMap[e] > this.baseConfig.retries)
                        return void this.removeErrLog(e);
                    const t = {
                        data: this.errLogMap[e],
                        id: e
                    };
                    d(()=>{
                            this.sendData(t)
                        }
                    )
                }
            }
        }
        function p(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                    , i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))),
                    i.forEach(function(t) {
                        f(e, t, n[t])
                    })
            }
            return e
        }
        function f(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
                e
        }
        const v = "undefined" != typeof window;
        var m = n("bbP8");
        const g = new class extends h {
            constructor(e) {
                super(e),
                    this.config = {
                        wait: 1e3,
                        maxBatchLog: 100,
                        behavior: !1,
                        behaviorType: [],
                        behaviorKey: "",
                        maxBehaviorLog: 1e3,
                        getBaseDataFunc: null
                    },
                    this.logQueue = [],
                    this.behaviorLog = [],
                    this.waitTimer = null,
                    this.initState(e),
                    this.initEvents()
            }
            initState(e) {
                if (Object.assign(this.config, e),
                    this.config.behavior) {
                    if (!this.config.behaviorKey)
                        return void console.error("Log: behaviorKey不能为空");
                    this.behaviorLog = o.a.has(this.config.behaviorKey) ? o()(this.config.behaviorKey) : []
                }
            }
            initEvents() {
                v && (window.addEventListener("beforeunload", ()=>{
                        this.logQueue.length && this.sendBatchLog(!1),
                        this.config.behavior && this.sendBehaviorLog(!1)
                    }
                ),
                this.config.behavior && document.addEventListener("visibilitychange", e=>{
                        const t = document.visibilityState;
                        this.pushBehaviorLog({
                            type: "visibilitychange",
                            data: {
                                event_time: Date.now(),
                                event_value: {
                                    url: e.target.URL || e.target.documentURI
                                },
                                event_status: t
                            }
                        }),
                        "visible" === t && (this.behaviorLog = o()(this.config.behaviorKey))
                    }
                ))
            }
            sendBatchLog(e) {
                if (!this.logQueue.length)
                    return;
                const t = [...this.logQueue];
                this.logQueue = [],
                    super.sendData({
                        data: JSON.stringify({
                            base: "function" == typeof this.config.getBaseDataFunc ? this.config.getBaseDataFunc() : {},
                            events: t
                        }),
                        async: e
                    })
            }
            sendBehaviorLog(e) {
                const t = [...this.behaviorLog];
                this.behaviorLog = [],
                    o.a.remove(this.config.behaviorKey),
                    super.sendData({
                        data: JSON.stringify({
                            base: "function" == typeof this.config.getBaseDataFunc ? this.config.getBaseDataFunc() : {},
                            events: [{
                                type: "behavior",
                                data: {
                                    behavior: t
                                }
                            }]
                        }),
                        async: e
                    })
            }
            pushBehaviorLog(e) {
                this.behaviorLog.length < this.config.maxBehaviorLog ? this.behaviorLog.push(e) : this.sendBehaviorLog(),
                    o()(this.config.behaviorKey, this.behaviorLog)
            }
            sendImmediate() {
                this.sendBatchLog(),
                this.waitTimer && window.clearTimeout(this.waitTimer)
            }
            send(e) {
                const t = {
                    type: e.type,
                    data: p({
                        event_time: Date.now()
                    }, e.data)
                };
                this.logQueue.length < this.config.maxBatchLog ? (this.logQueue.push(t),
                this.waitTimer && clearTimeout(this.waitTimer),
                    this.waitTimer = window.setTimeout(()=>{
                            this.sendBatchLog()
                        }
                        , this.config.wait)) : this.sendImmediate(),
                this.config.behavior && this.config.behaviorType.includes(e.type) && this.pushBehaviorLog(t)
            }
        }
        ({
            url: "/rest/wd/live/web/log",
            retries: 3,
            behavior: !0,
            behaviorKey: "kslive.log.behavior",
            behaviorType: ["pv", "click"],
            getBaseDataFunc: m.d
        });
        var y = g;
        const b = new class extends h {
            send(e) {
                let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                try {
                    const n = new FormData;
                    Object.keys(e).forEach(t=>{
                            const i = "object" == typeof e[t] ? JSON.stringify(e[t]) : e[t];
                            n.append(t, i)
                        }
                    ),
                        this.sendData({
                            data: n,
                            async: t
                        })
                } catch (e) {
                    console.error("Log: ".concat(e))
                }
            }
        }
        ({
            url: "/rest/wd/live/web/collect",
            retries: 3
        });
        var _ = b;
        function w(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                    , i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))),
                    i.forEach(function(t) {
                        k(e, t, n[t])
                    })
            }
            return e
        }
        function k(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
                e
        }
        function I(e) {
            const t = w({}, e)
                , n = t.type;
            n && (delete t.type,
            "pv" !== n && i.a.collect(n, t.event_name || t.show_name, t.event_value || t.show_value),
            y && y.send({
                type: n,
                data: t
            }))
        }
        function x(e) {
            const t = w({}, e)
                , n = t.type;
            delete t.type,
                i.a.sendImmediately(n, t.event_name || t.show_name, t.event_value || t.show_value),
                _.send(Object.assign(Object(m.d)(), e))
        }
        function C(e) {
            const t = w({}, e)
                , n = t.type;
            delete t.type,
                i.a.sendImmediately(n, t.event_name || t.show_name, t.event_value || t.show_value),
                _.send(Object.assign(Object(m.d)(), e), !1)
        }
        n.d(t, "a", function() {
            return I
        }),
            n.d(t, "b", function() {
                return x
            }),
            n.d(t, "c", function() {
                return C
            })
    },
    TPB0: function(e, t) {
        e.exports = '<svg viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>展开 copy</title><desc>Created with Sketch.</desc><defs></defs><g id="__5aay0DD__Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="__5aay0DD__mini播放器-放大-hover" transform="translate(-1875.000000, -891.000000)"><g id="__5aay0DD__小窗" transform="translate(1580.000000, 883.000000)"><g id="__5aay0DD__展开-copy" transform="translate(292.000000, 5.000000)"><polygon id="__5aay0DD__Rectangle-10" opacity="0.5" points="0 0 23 0 23 14.3356107 23 23 6.83101403 23 0 23"></polygon><g id="__5aay0DD__收起" transform="translate(5.000000, 5.000000)"><rect id="__5aay0DD__Rectangle-7" stroke="currentColor" stroke-width="2" x="-1" y="-1" width="15" height="15" rx="2"></rect><path d="M4,5.5 L5.06122619,5.5 L9,5.5 C9.55228475,5.5 10,5.94771525 10,6.5 L10,6.5 C10,7.05228475 9.55228475,7.5 9,7.5 L4,7.5 C3.44771525,7.5 3,7.05228475 3,6.5 L3,6.5 C3,5.94771525 3.44771525,5.5 4,5.5 Z" id="__5aay0DD__Rectangle-9" fill="currentColor"></path></g></g></g></g></g></svg>'
    },
    TggW: function(e, t, n) {
        "use strict";
        var i = n("mrSG")
            , r = n("uycM")
            , o = n("oCYn");
        let s = class extends o.a {
                constructor() {
                    super(...arguments),
                        this.inited = !1,
                        this.io = null
                }
                get isIE() {
                    return "IE" === this.uaInfo.browser.name || "Edge" === this.uaInfo.browser.name
                }
                initCanvas() {
                    const e = new Image;
                    e.src = this.src,
                        e.onload = ()=>{
                            const t = this.$refs.canvas;
                            if (t) {
                                const n = t.getContext("2d");
                                n.filter = "blur(30px)";
                                const i = t.clientWidth
                                    , r = t.clientHeight;
                                n.drawImage(e, -15, -15, i + 30, r + 30)
                            }
                        }
                }
                mounted() {
                    this.isIE || (this.io = new IntersectionObserver(e=>{
                            e && e.length && e[0].intersectionRatio > 0 && (this.inited || (this.initCanvas(),
                                this.inited = !0))
                        }
                    ),
                        this.io.observe(this.$refs.canvas))
                }
                beforeDestroy() {
                    this.io && this.io.disconnect()
                }
            }
        ;
        i.__decorate([Object(r.c)()], s.prototype, "uaInfo", void 0),
            i.__decorate([Object(r.h)({
                type: String,
                required: !0
            })], s.prototype, "src", void 0),
            s = i.__decorate([r.a], s);
        var a = s
            , c = a
            , l = (n("VMNc"),
            n("KHd+"))
            , u = Object(l.a)(c, function() {
            var e = this.$createElement
                , t = this._self._c || e;
            return this.isIE ? t("svg", {
                staticClass: "blur-svg",
                attrs: {
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink"
                }
            }, [t("filter", {
                attrs: {
                    id: "blur"
                }
            }, [t("feGaussianBlur", {
                attrs: {
                    in: "SourceGraphic",
                    stdDeviation: "10"
                }
            })], 1), this._v(" "), t("image", {
                attrs: {
                    "xlink:href": this.src,
                    width: "100%",
                    height: "100%",
                    filter: "url(#blur)",
                    preserveAspectRatio: "xMinYMin slice"
                }
            })]) : t("canvas", {
                ref: "canvas",
                staticClass: "blur-canvas"
            })
        }, [], !1, null, "7209962c", null);
        t.a = u.exports
    },
    "Ut+I": function(e, t, n) {
        "use strict";
        var i = n("mrSG")
            , r = n("z/if")
            , o = n.n(r)
            , s = n("oCYn")
            , a = n("uycM");
        let c = class extends s.a {
                syncInitQuality(e) {
                    o.a.set("kslive.player.controls.quality", e)
                }
                getInitQuality(e) {
                    const t = o.a.get("kslive.player.controls.quality")
                        , n = e.some(e=>e.quality === t);
                    return n ? t : e.length ? e[0].quality : "standard"
                }
            }
        ;
        c = i.__decorate([a.a], c),
            t.a = c
    },
    "V/6D": function(e, t, n) {
        "use strict";
        var i = n("NkOo")
            , r = n.n(i);
        r.a
    },
    VMNc: function(e, t, n) {
        "use strict";
        var i = n("5T4V")
            , r = n.n(i);
        r.a
    },
    Y6Dz: function(e, t, n) {
        "use strict";
        var i = n("AobF")
            , r = n("k7+O")
            , o = n.n(r);
        function s(e, t, n, i, r, o, s) {
            try {
                var a = e[o](s)
                    , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, r)
        }
        function a(e) {
            return function() {
                var t = this
                    , n = arguments;
                return new Promise(function(i, r) {
                        var o = e.apply(t, n);
                        function a(e) {
                            s(o, i, r, a, c, "next", e)
                        }
                        function c(e) {
                            s(o, i, r, a, c, "throw", e)
                        }
                        a(void 0)
                    }
                )
            }
        }
        t.a = function(e, t, n) {
            return {
                get() {
                    var e = this;
                    return a(function*() {
                        if (!e.$root.$children[0].userModel.userInfo.id)
                            return o.a.element && o.a.exit(),
                                void i.a.$emit("showUserModal", {
                                    type: "login"
                                });
                        for (var t = arguments.length, r = new Array(t), s = 0; s < t; s++)
                            r[s] = arguments[s];
                        n.value ? yield n.value.apply(e, r) : yield n.get.call(e).apply(e, r)
                    })
                }
            }
        }
    },
    YXdx: function(e, t, n) {},
    Yk8q: function(e, t, n) {},
    b5Y1: function(e, t, n) {
        "use strict";
        var i = n("IJo+")
            , r = n.n(i);
        r.a
    },
    bD1G: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        }),
            n.d(t, "b", function() {
                return r
            });
        const i = "undefined" != typeof window
            , r = !0
    },
    bbP8: function(e, t, n) {
        "use strict";
        n.d(t, "h", function() {
            return v
        }),
            n.d(t, "i", function() {
                return g
            }),
            n.d(t, "e", function() {
                return y
            }),
            n.d(t, "c", function() {
                return b
            }),
            n.d(t, "d", function() {
                return _
            }),
            n.d(t, "g", function() {
                return w
            }),
            n.d(t, "b", function() {
                return k
            }),
            n.d(t, "a", function() {
                return I
            }),
            n.d(t, "f", function() {
                return x
            });
        var i = n("7isM")
            , r = n.n(i)
            , o = n("z/if")
            , s = n.n(o)
            , a = n("bD1G");
        const c = "kslive.log.session_id"
            , l = "kslive.log.page_id"
            , u = "kslive.log.refer_page_id"
            , d = "kslive.log.refer_show_id"
            , h = "kslive.log.refer_url"
            , p = "kslive.log.page_live_stream_id";
        function f() {
            return "".concat(r()(16), "_").concat(Date.now())
        }
        function v() {
            s.a.session.has(u) || s.a.session.has(l) ? s.a.session.has(l) && (s.a.session.set(u, s.a.session.get(l)),
                s.a.session.set(l, f())) : (s.a.session.set(l, f()),
                s.a.session.set(u, ""))
        }
        s.a.session.has(c) || s.a.session.set(c, r()(16));
        let m = !0;
        function g() {
            a.a && (document.referrer && m ? s.a.session.set(h, document.referrer) : s.a.session.set(h, location.href),
                m = !1)
        }
        function y() {
            return m
        }
        function b() {
            return "".concat(r()(16), "_").concat(Date.now())
        }
        function _() {
            return {
                session_id: s.a.session.get(c) || "",
                page_id: s.a.session.get(l) || "",
                refer_page_id: s.a.session.get(u) || "",
                refer_show_id: s.a.session.get(d) || "",
                refer_url: s.a.session.get(h) || "",
                page_live_stream_id: s.a.session.get(p) || "",
                url: location.href,
                screen: "".concat(screen.width, "*").concat(screen.height),
                platform: navigator.platform,
                log_time: "".concat(Date.now())
            }
        }
        function w() {
            s.a.session.remove(d)
        }
        function k(e) {
            s.a.session.set(d, e)
        }
        function I(e) {
            s.a.session.set(p, e)
        }
        function x() {
            s.a.session.remove(p)
        }
    },
    f0nO: function(e, t) {
        e.exports = '<svg viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>展开</title><desc>Created with Sketch.</desc><defs></defs><g id="__2e57NTx__Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="__2e57NTx__mini播放器-缩小-hover" transform="translate(-1725.000000, -973.000000)"><g id="__2e57NTx__小窗" transform="translate(1580.000000, 883.000000)"><g id="__2e57NTx__内容"><g id="__2e57NTx__展开" transform="translate(145.000000, 90.000000)"><rect id="__2e57NTx__Rectangle-10" fill="#000000" opacity="0.800000012" x="0" y="0" width="30" height="30" rx="4"></rect><g id="__2e57NTx__Group-10" transform="translate(7.000000, 7.000000)" stroke="#fff" stroke-width="2"><rect id="__2e57NTx__Rectangle-8" x="-1" y="-1" width="18" height="18" rx="2" stroke="currentColor"></rect><path d="M8,8 L5,8 C4.44771525,8 4,8.44771525 4,9 L4,12" id="__2e57NTx__Path-2" stroke-linejoin="round" transform="translate(6.000000, 10.000000) scale(1, -1) translate(-6.000000, -10.000000) " stroke="currentColor"></path><path d="M12,4 L9,4 C8.44771525,4 8,4.44771525 8,5 L8,8" id="__2e57NTx__Path-2-Copy" stroke-linejoin="round" transform="translate(10.000000, 6.000000) scale(-1, 1) translate(-10.000000, -6.000000) " stroke="currentColor"></path></g></g></g></g></g></g></svg>'
    },
    g5VV: function(e, t, n) {},
    iVog: function(e, t, n) {
        "use strict";
        var i = n("9TcE")
            , r = n.n(i);
        r.a
    },
    iitJ: function(e, t, n) {
        "use strict";
        var i = n("2BOC")
            , r = n.n(i);
        r.a
    },
    jJ61: function(e, t, n) {},
    jKxf: function(e, t, n) {},
    jP3h: function(e, t, n) {
        "use strict";
        var i = n("mrSG")
            , r = n("uycM")
            , o = n("lIuJ");
        n("tMVZ");
        let s = class extends r.i {
            }
        ;
        i.__decorate([Object(r.h)({
            type: Number,
            default: 160
        })], s.prototype, "size", void 0),
            s = i.__decorate([Object(r.a)({
                components: {
                    qrcode: o.a
                }
            })], s);
        var a = s
            , c = a
            , l = (n("1MnG"),
            n("KHd+"))
            , u = Object(l.a)(c, function() {
            var e = this.$createElement
                , t = this._self._c || e;
            return t("div", {
                staticClass: "qr-container"
            }, [t("qrcode", {
                staticClass: "kwai-ying-qr-content",
                attrs: {
                    size: this.size,
                    text: "http://qr21.cn/Ahvi2w"
                }
            }), this._v(" "), t("svgicon", {
                staticClass: "kwai-ying-icon",
                attrs: {
                    name: "kwai-ying-icon",
                    width: this.size / 5,
                    height: this.size / 5,
                    original: ""
                }
            })], 1)
        }, [], !1, null, "065ac074", null);
        t.a = u.exports
    },
    k861: function(e, t, n) {
        "use strict";
        const i = {};
        t.a = {
            set(e, t) {
                !function() {
                    if ("undefined" == typeof window)
                        throw new Error("Don't use this in SSR")
                }(),
                    i[e] = t
            },
            get(e) {
                const t = i[e];
                return t ? (i[e] = null,
                    t) : null
            }
        }
    },
    l2JU: function(e, t) {
        e.exports = '<svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="__1AQgEfi__意见反馈_弹窗" stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd" transform="translate(-713.000000, -193.000000)"><g id="__1AQgEfi__默认状态" transform="translate(227.000000, 176.000000)"><g id="__1AQgEfi__关闭按钮-copy-4" transform="translate(479.000000, 10.000000)"><path d="M19.2857143,14.2857143 L24.2857143,14.2857143 C24.6802034,14.2857143 25,14.6055109 25,15 C25,15.3944891 24.6802034,15.7142857 24.2857143,15.7142857 L19.2857143,15.7142857 C18.8912252,15.7142857 18.5714286,15.3944891 18.5714286,15 C18.5714286,14.6055109 18.8912252,14.2857143 19.2857143,14.2857143 Z M15.7142857,15.7142857 L15.7142857,24.2857143 C15.7142857,24.6802034 15.3944891,25 15,25 C14.6055109,25 14.2857143,24.6802034 14.2857143,24.2857143 L14.2857143,15.7142857 L5.71428571,15.7142857 C5.31979661,15.7142857 5,15.3944891 5,15 C5,14.6055109 5.31979661,14.2857143 5.71428571,14.2857143 L14.2857143,14.2857143 L14.2857143,5.71428571 C14.2857143,5.31979661 14.6055109,5 15,5 C15.3944891,5 15.7142857,5.31979661 15.7142857,5.71428571 L15.7142857,14.2857143 L15.7142857,15.7142857 Z" id="__1AQgEfi__Combined-Shape" transform="translate(15.000000, 15.000000) rotate(-315.000000) translate(-15.000000, -15.000000) "></path></g></g></g></svg>'
    },
    lIuJ: function(e, t, n) {
        "use strict";
        var i = n("mrSG")
            , r = n("uycM")
            , o = n("s4NR")
            , s = n.n(o);
        let a = class extends r.i {
                get qrcodeUrl() {
                    return this.text ? "https://ksurl.cn/createqrcode?".concat(s.a.stringify({
                        content: this.text,
                        width: this.size,
                        height: this.size,
                        contentType: "URL",
                        toShortUrl: !1
                    })) : ""
                }
            }
        ;
        i.__decorate([Object(r.h)({
            type: String,
            default: ""
        })], a.prototype, "text", void 0),
            i.__decorate([Object(r.h)({
                type: Number,
                default: 200
            })], a.prototype, "size", void 0),
            a = i.__decorate([r.a], a);
        var c = a
            , l = c
            , u = (n("V/6D"),
            n("KHd+"))
            , d = Object(u.a)(l, function() {
            var e = this.$createElement
                , t = this._self._c || e;
            return t("div", {
                staticClass: "qrcode",
                style: {
                    width: this.size + "px",
                    height: this.size + "px"
                }
            }, [this.qrcodeUrl ? t("img", {
                staticClass: "qrcode-img",
                attrs: {
                    src: this.qrcodeUrl,
                    alt: "qrcode"
                }
            }) : t("div", {
                staticClass: "qrcode-loading"
            })])
        }, [], !1, null, "40bf35c3", null);
        t.a = d.exports
    },
    lbd0: function(e, t, n) {},
    lbur: function(e, t, n) {
        "use strict";
        var i = n("P9li")
            , r = n.n(i);
        r.a
    },
    m1YK: function(e, t, n) {
        "use strict";
        var i = n("uSU4")
            , r = n.n(i);
        r.a
    },
    mt5F: function(e, t, n) {
        "use strict";
        var i = n("S2+C")
            , r = n.n(i);
        r.a
    },
    n6Cw: function(e, t, n) {},
    ncHj: function(e, t, n) {
        "use strict";
        var i = n("g5VV")
            , r = n.n(i);
        r.a
    },
    nvQl: function(e, t, n) {
        "use strict";
        var i = n("9uv/")
            , r = n.n(i);
        r.a
    },
    oR4X: function(e, t, n) {
        "use strict";
        n.d(t, "g", function() {
            return f
        }),
            n.d(t, "a", function() {
                return v
            }),
            n.d(t, "c", function() {
                return m
            }),
            n.d(t, "e", function() {
                return g
            }),
            n.d(t, "f", function() {
                return b
            }),
            n.d(t, "d", function() {
                return _
            }),
            n.d(t, "b", function() {
                return w
            }),
            n.d(t, "h", function() {
                return I
            });
        var i = n("Nndj")
            , r = n("AobF")
            , o = n("rseE")
            , s = n("sCe/")
            , a = n("lTCR")
            , c = n.n(a);
        function l() {
            const e = function(e, t) {
                t || (t = e.slice(0));
                return Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }(["\n                mutation UserLogin($userLoginInfo: FlatObject) {\n                    login(userLoginInfo: $userLoginInfo) {\n                        result\n                    }\n                }\n            "]);
            return l = function() {
                return e
            }
                ,
                e
        }
        function u(e, t, n, i, r, o, s) {
            try {
                var a = e[o](s)
                    , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, r)
        }
        const d = "undefined" == typeof window
            , h = e=>setTimeout(e, 62.5)
            , p = clearTimeout
            , f = d ? h : window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || h
            , v = d ? p : window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || p;
        !d && (window.MutationObserver || window.WebKitMutationObserver || window.WebkitMutationObserver || window.MozMutationObserver);
        function m(e) {
            return navigator.clipboard ? navigator.clipboard.writeText(e) : function(e) {
                return new Promise((t,n)=>{
                        const i = document.createElement("textarea");
                        i.style.cssText = "position: absolute; top: -9999px; left: -9999px",
                            i.value = e,
                            document.body.appendChild(i),
                            i.select();
                        try {
                            document.execCommand("copy"),
                                t()
                        } catch (e) {
                            n(e)
                        } finally {
                            document.body.removeChild(i)
                        }
                    }
                )
            }(e)
        }
        function g() {
            const e = new Date;
            return new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0).getTime()
        }
        function y(e) {
            return "0".concat(e).slice(-2)
        }
        function b(e) {
            const t = new Date(e)
                , n = t.getFullYear()
                , i = t.getMonth() + 1
                , r = t.getDate()
                , o = t.getHours()
                , s = t.getMinutes()
                , a = t.getSeconds();
            return {
                year: n,
                month: y(i),
                date: y(r),
                hour: y(o),
                minute: y(s),
                second: y(a)
            }
        }
        function _(e) {
            return new Promise(t=>setTimeout(t, e))
        }
        function w(e) {
            return k.apply(this, arguments)
        }
        function k() {
            return k = function(e) {
                return function() {
                    var t = this
                        , n = arguments;
                    return new Promise(function(i, r) {
                            var o = e.apply(t, n);
                            function s(e) {
                                u(o, i, r, s, a, "next", e)
                            }
                            function a(e) {
                                u(o, i, r, s, a, "throw", e)
                            }
                            s(void 0)
                        }
                    )
                }
            }(function*(e) {
                try {
                    const {authToken: t} = yield i.a.passToken();
                    if (!t)
                        throw e;
                    yield Object(o.a)(Object(s.a)()).mutate({
                        mutation: c()(l()),
                        variables: {
                            userLoginInfo: {
                                authToken: t,
                                sid: "kuaishou.live.web"
                            }
                        }
                    })
                } catch (e) {
                    throw e
                } finally {
                    r.a.$emit("relogin")
                }
            }),
                k.apply(this, arguments)
        }
        function I() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return Number.isNaN(+e) ? e + "" : (e = +e,
                e < 1e4 ? e + "" : +(e / 1e4).toFixed(1) + "w")
        }
    },
    obaf: function(e, t, n) {
        "use strict";
        var i = n("R4DR")
            , r = n.n(i);
        r.a
    },
    ouTL: function(e, t, n) {
        "use strict";
        var i = n("n6Cw")
            , r = n.n(i);
        r.a
    },
    pqvc: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return m
        });
        var i = n("mrSG")
            , r = n("scx0")
            , o = n.n(r)
            , s = n("b6HW")
            , a = n("lTCR")
            , c = n.n(a)
            , l = n("Oj1a");
        function u() {
            const e = f(["\n            query PayQuery($ksOrderId: String) {\n                payQuery(ksOrderId: $ksOrderId) {\n                    result\n                }\n            }\n        "]);
            return u = function() {
                return e
            }
                ,
                e
        }
        function d() {
            const e = f(["\n            query PrePayQuery($ksCoin: Int, $fen: Int) {\n                prePay(ksCoin: $ksCoin, fen: $fen) {\n                    perPayUrl\n                    ksOrderId\n                }\n            }\n        "]);
            return d = function() {
                return e
            }
                ,
                e
        }
        function h() {
            const e = f(["\n            mutation SendGift($sendGiftDetail: sendGiftDetail) {\n                sendGift(sendGiftDetail: $sendGiftDetail) {\n                    ksCoin\n                    styleType\n                }\n            }\n        "]);
            return h = function() {
                return e
            }
                ,
                e
        }
        function p() {
            const e = f(["\n            query giftQuery {\n                payKey {\n                    key\n                }\n                payConfig {\n                    depositRate\n                }\n                payWallet {\n                    ksCoin\n                }\n            }\n        "]);
            return p = function() {
                return e
            }
                ,
                e
        }
        function f(e, t) {
            return t || (t = e.slice(0)),
                Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
        }
        function v(e, t, n, i, r, o, s) {
            try {
                var a = e[o](s)
                    , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, r)
        }
        class m extends s.a {
            constructor() {
                super(...arguments),
                    this.models = {
                        userModel: l.a
                    },
                    this.styleType = "",
                    this.polling = !1,
                    this.getPayResultTimer = null,
                    this.giftList = [],
                    this.prePayInput = {
                        ksCoin: 0,
                        fen: 0,
                        timeStamp: 0
                    }
            }
            subscriptions() {
                return {
                    myGift$: o.a.create().startWith([])
                }
            }
            get depositRate() {
                return this.giftQuery.data.payConfig.depositRate
            }
            get payKey() {
                return this.giftQuery.data.payKey.key
            }
            get ksCoin() {
                return this.userModel.userInfo.id ? this.giftQuery.data.payWallet.ksCoin : 0
            }
            set ksCoin(e) {
                this.giftQuery.data.payWallet.ksCoin = e
            }
            refetchPayInfo() {
                if (this.userModel.userInfo.id)
                    try {
                        return this.giftQuery.refetch()
                    } catch (e) {}
            }
            get sendGiftResult() {
                return this.sendGiftMutation.data.sendGift
            }
            sendGift(e) {
                var t = this;
                return function(e) {
                    return function() {
                        var t = this
                            , n = arguments;
                        return new Promise(function(i, r) {
                                var o = e.apply(t, n);
                                function s(e) {
                                    v(o, i, r, s, a, "next", e)
                                }
                                function a(e) {
                                    v(o, i, r, s, a, "throw", e)
                                }
                                s(void 0)
                            }
                        )
                    }
                }(function*() {
                    yield t.sendGiftMutation.mutate(e),
                        t.ksCoin = t.sendGiftResult.ksCoin,
                        t.styleType = t.sendGiftResult.styleType
                })()
            }
            get perPayUrl() {
                return this.prePayQuery.data.prePay.perPayUrl
            }
            get ksOrderId() {
                return this.prePayQuery.data.prePay.ksOrderId
            }
            get payResult() {
                return this.payQueryResponse.data.payQuery.result
            }
        }
        i.__decorate([Object(s.d)({
            query: c()(p()),
            initState: {
                payKey: {
                    key: ""
                },
                payConfig: {
                    depositRate: ""
                },
                payWallet: {
                    ksCoin: ""
                }
            },
            skip() {
                return !this.userModel.userInfo.id
            }
        })], m.prototype, "giftQuery", void 0),
            i.__decorate([Object(s.c)({
                mutation: c()(h()),
                variables(e) {
                    let {e: t, iv: n, giftId: i, liveStreamId: r, count: o, comboKey: s} = e;
                    return {
                        sendGiftDetail: {
                            e: t,
                            iv: n,
                            giftId: i,
                            liveStreamId: r,
                            count: o,
                            comboKey: s
                        }
                    }
                }
            })], m.prototype, "sendGiftMutation", void 0),
            i.__decorate([Object(s.d)({
                query: c()(d()),
                initState: {
                    prePay: {
                        perPayUrl: "",
                        ksOrderId: ""
                    }
                },
                variables() {
                    return {
                        ksCoin: this.prePayInput.ksCoin,
                        fen: this.prePayInput.fen,
                        timeStamp: this.prePayInput.timeStamp
                    }
                },
                skip() {
                    return !(this.prePayInput.ksCoin && this.prePayInput.fen)
                }
            })], m.prototype, "prePayQuery", void 0),
            i.__decorate([Object(s.d)({
                query: c()(u()),
                initState: {
                    payQuery: {
                        result: -1
                    }
                },
                variables() {
                    return {
                        ksOrderId: this.ksOrderId
                    }
                },
                pollInterval() {
                    return this.polling ? 2e3 : 0
                },
                skip() {
                    return !this.ksOrderId
                }
            })], m.prototype, "payQueryResponse", void 0)
    },
    qQls: function(e, t, n) {
        "use strict";
        var i = n("mrSG")
            , r = n("uycM")
            , o = n("oCYn")
            , s = n("7isM")
            , a = n.n(s)
            , c = n("k7+O")
            , l = n.n(c)
            , u = n("TggW");
        const d = [{
            name: "AtJ_ready",
            event: "ready"
        }, {
            name: "AtJ_meta",
            event: "mediaInfo"
        }, {
            name: "AtJ_heartbeat",
            event: "heartbeat"
        }, {
            name: "AtJ_end",
            event: "end"
        }, {
            name: "AtJ_error",
            event: "error"
        }, {
            name: "AtJ_playing",
            event: "playing"
        }, {
            name: "AtJ_loadstart",
            event: "loadstart"
        }, {
            name: "AtJ_waiting",
            event: "waiting"
        }, {
            name: "AtJ_fullscreen",
            event: "fullscreen"
        }];
        let h = class extends o.a {
                constructor() {
                    super(...arguments),
                        this.paused = !1,
                        this.isReady = !1,
                        this.isFullscreen = !1,
                        this.playInfoList = [],
                        this.src = "",
                        this.volume = 1,
                        this.rotation = 0,
                        this.id = a()(),
                        this.isPadding = !1,
                        this.kernenListeners = [],
                        this.$plugins = {}
                }
                sync(e) {
                    let {properties: t, values: n} = e;
                    t.forEach((e,t)=>{
                            void 0 !== n && (this[e] = n[t])
                        }
                    )
                }
                reload() {
                    return this.load({
                        resource: this.src
                    })
                }
                load(e) {
                    let {resource: t, muted: n} = e;
                    t && (this.player ? (this.src = t,
                        this.muted = this.muted || n,
                        this.player.JtA_loadLive(JSON.stringify({
                            src: t,
                            buffer: 1,
                            rotation: !0
                        })),
                    this.muted && (this.volume = 0),
                        this.isReady = !0) : this.playInfoList.push(t))
                }
                setVolume(e) {
                    this.player && (this.player.JtA_volume(e),
                        this.$emit("volumechange", e))
                }
                play() {
                    this.player && (this.reload(),
                        this.$emit("playing"))
                }
                pause() {
                    this.player ? (this.isLive && this.player.JtA_stopLoad(),
                        this.player.JtA_pause(),
                        this.$emit("pause")) : this.$emit("pause")
                }
                stop() {
                    this.player ? (this.player.JtA_pause(),
                        this.$emit("ended")) : this.$emit("ended")
                }
                fullscreen(e) {
                    e ? l.a.request(this.$el) : l.a.element && l.a.exit()
                }
                fullscreenChange() {
                    l.a.element && l.a.element !== this.$el || (this.isFullscreen = l.a.isFullscreen,
                        this.$emit("fullscreenchange", l.a.isFullscreen))
                }
                get computedWidth() {
                    return "number" == typeof this.width ? this.width + "px" : this.width
                }
                get computedHeight() {
                    return "number" == typeof this.height ? this.height + "px" : this.height
                }
                mounted() {
                    l.a.enabled && l.a.on("change", this.fullscreenChange),
                        d.forEach(e=>{
                                let {name: t, event: n} = e;
                                window[t] = window[t] || (e=>{
                                        window[t].callbackList.forEach(t=>{
                                                let {callback: n} = t;
                                                n(e)
                                            }
                                        )
                                    }
                                ),
                                    window[t].callbackList = window[t].callbackList || [],
                                    window[t].callbackList.push({
                                        id: this.id,
                                        callback: e=>{
                                            const t = e[e.length - 1];
                                            this.id === t && ("heartbeat" === n ? this.$emit("report", {
                                                type: "heartbeat",
                                                value: e[0]
                                            }) : this.$emit(n, ...e))
                                        }
                                    })
                            }
                        ),
                        this.$on("playing", e=>{
                                this.sync({
                                    name: "playing",
                                    properties: ["paused", "ended"],
                                    event: e,
                                    values: [!1, !1]
                                })
                            }
                        ),
                        this.$on("ended", e=>{
                                this.sync({
                                    name: "ended",
                                    properties: ["paused", "ended"],
                                    event: e,
                                    values: [!0, !0]
                                })
                            }
                        ),
                        this.$on("pause", e=>{
                                this.sync({
                                    name: "pause",
                                    properties: ["paused", "ended"],
                                    event: e,
                                    values: [!0, !0]
                                })
                            }
                        ),
                        this.$on("volumechange", e=>{
                                this.sync({
                                    name: "volumechange",
                                    properties: ["volume"],
                                    event: e
                                })
                            }
                        ),
                        this.$on("ready", ()=>{
                                this.player = document.getElementById(this.id);
                                const e = this.playInfoList.pop();
                                e && (this.playInfoList = [],
                                    this.load({
                                        resource: e
                                    }))
                            }
                        ),
                        this.$refs.player.innerHTML = function(e) {
                            return '<object\n        type="application/x-shockwave-flash"\n        id="'.concat(e, '"\n        name="').concat(e, '"\n        data="/i/ks-flash-player.swf"\n        style="width: 100%; height: 100%;"\n    >\n        <param name="allowfullscreen" value="true">\n        <param name="wmode" value="transparent">\n        <param name="allowscriptaccess" value="always">\n    </object>')
                        }(this.id)
                }
                beforeDestroy() {
                    l.a.enabled && l.a.off("change", this.fullscreenChange)
                }
                destroyed() {
                    this.player = null,
                        d.forEach(e=>{
                                let {name: t} = e;
                                if (window[t]) {
                                    const e = window[t].callbackList.findIndex(e=>{
                                            let {id: t} = e;
                                            return this.id === t
                                        }
                                    );
                                    window[t].callbackList.splice(e, 1),
                                    window[t].callbackList.length || (window[t].callbackList = null,
                                        window[t] = null)
                                }
                            }
                        )
                }
            }
        ;
        i.__decorate([Object(r.h)({
            type: [Number, String],
            default: 0
        })], h.prototype, "width", void 0),
            i.__decorate([Object(r.h)({
                type: [Number, String],
                default: 0
            })], h.prototype, "height", void 0),
            i.__decorate([Object(r.h)({
                type: String,
                required: !0
            })], h.prototype, "poster", void 0),
            i.__decorate([Object(r.h)({
                type: Boolean,
                default: !1
            })], h.prototype, "muted", void 0),
            i.__decorate([Object(r.h)({
                type: Boolean,
                default: !1
            })], h.prototype, "isLive", void 0),
            i.__decorate([Object(r.h)({
                type: Boolean,
                required: !0
            })], h.prototype, "isLiving", void 0),
            i.__decorate([Object(r.h)({
                type: Object,
                default: ()=>({})
            })], h.prototype, "config", void 0),
            h = i.__decorate([Object(r.a)({
                name: "kwai-player",
                components: {
                    blurImg: u.a
                },
                watch: {
                    volume(e) {
                        this.setVolume(e)
                    }
                }
            })], h);
        var p = h
            , f = p
            , v = (n("ouTL"),
            n("KHd+"))
            , m = Object(v.a)(f, function() {
            var e = this
                , t = e.$createElement
                , n = e._self._c || t;
            return n("div", {
                ref: "container",
                staticClass: "kwai-player-container kwai-player",
                style: {
                    width: e.computedWidth,
                    height: e.computedHeight
                }
            }, [n("div", {
                staticClass: "kwai-player-container-video"
            }, [n("blur-img", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isReady,
                    expression: "isReady"
                }],
                key: e.poster,
                staticClass: "kwai-player-blur",
                style: {
                    "z-index": e.isReady ? 0 : 1
                },
                attrs: {
                    src: e.poster
                }
            }), e._v(" "), n("div", {
                ref: "player",
                staticClass: "flash-player"
            }), e._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isReady || !e.isLiving,
                    expression: "isReady || !isLiving"
                }],
                staticClass: "kwai-player-plugins",
                class: {
                    "player-not-online": !e.isLiving
                }
            }, [e._t("default")], 2)], 1), e._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isReady,
                    expression: "isReady"
                }],
                staticClass: "kwai-player-plugins-pad"
            }, [e._t("pad")], 2), e._v(" "), n("div", {
                staticClass: "kwai-player-bottomslot-container"
            }, [e._t("bottom")], 2)])
        }, [], !1, null, "bca15f18", null);
        t.a = m.exports
    },
    qbWX: function(e, t, n) {},
    qv8f: function(e, t, n) {
        "use strict";
        var i = n("Byqh")
            , r = n.n(i);
        r.a
    },
    r1fv: function(e, t, n) {
        "use strict";
        var i = n("SSrh")
            , r = n.n(i);
        r.a
    },
    rseE: function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return c
        });
        var i = n("K/JX")
            , r = n("dMq0")
            , o = n("mwIZ")
            , s = n.n(o);
        function a(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
                e
        }
        function c(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "defaultClient"
                , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "browser"
                , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            const c = new i.b({
                introspectionQueryResultData: {
                    __schema: {
                        types: [{
                            kind: "UNION",
                            name: "SearchResult",
                            possibleTypes: [{
                                name: "SearchCategoryList"
                            }, {
                                name: "SearchUserList"
                            }, {
                                name: "SearchLivestreamList"
                            }]
                        }]
                    }
                }
            })
                , l = new i.a({
                fragmentMatcher: c
            });
            return "browser" === n && window.__APOLLO_STATE__ && s()(window.__APOLLO_STATE__, t) && l.restore(s()(window.__APOLLO_STATE__, t)),
                new r.a(function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {}
                            , i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))),
                            i.forEach(function(t) {
                                a(e, t, n[t])
                            })
                    }
                    return e
                }({
                    link: e,
                    cache: l,
                    connectToDevTools: !1,
                    ssrMode: "node" === n
                }, o))
        }
    },
    "sCe/": function(e, t, n) {
        "use strict";
        n.d(t, "b", function() {
            return v
        }),
            n.d(t, "a", function() {
                return m
            });
        n("LpSC");
        var i = n("b0dj")
            , r = n("1jQf")
            , o = n("R44f")
            , s = n("zppH")
            , a = n("4Tsn")
            , c = n("AobF")
            , l = n("Nndj");
        function u(e, t, n, i, r, o, s) {
            try {
                var a = e[o](s)
                    , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, r)
        }
        let d = !1;
        const h = new class {
                constructor() {
                    this.captchaObservableList = []
                }
                flushQueryList(e) {
                    this.captchaObservableList.forEach(t=>{
                            let {operation: n, forward: i, sub: r, observer: o} = t;
                            n.setContext({
                                headers: {
                                    retrytoken: e
                                }
                            }),
                                r.observable = i(n).subscribe({
                                    next: o.next.bind(o),
                                    complete: o.complete.bind(o),
                                    error: o.error.bind(o)
                                })
                        }
                    ),
                        this.captchaObservableList = []
                }
                addObservable(e, t, n) {
                    const i = {
                        observable: null
                    };
                    return this.captchaObservableList.push({
                        operation: e,
                        forward: t,
                        observer: n,
                        sub: i
                    }),
                        i
                }
            }
        ;
        const p = Object(a.a)(e=>{
                let {graphQLErrors: t, response: n, operation: r, forward: o} = e;
                if (t && t.length) {
                    if (n.captcha)
                        return d ? new i.a(e=>{
                                const t = h.addObservable(r, o, e);
                                return ()=>{
                                    t.observable && t.observable.unsubscribe()
                                }
                            }
                        ) : new i.a(e=>{
                                const t = function(e, t, n, i) {
                                    const r = {
                                        observable: null
                                    };
                                    return d = !0,
                                        l.a.getCaptchaToken({
                                            key: e.captcha.captchaKey,
                                            type: e.captcha.captchaType,
                                            uri: e.captcha.captchaUri
                                        }).then(e=>{
                                                n.setContext({
                                                    headers: {
                                                        authorizationtoken: e
                                                    }
                                                }),
                                                    r.observable = i(n).subscribe({
                                                        next(n) {
                                                            d = !1,
                                                                t.next(n),
                                                                h.flushQueryList(e)
                                                        },
                                                        complete() {
                                                            d = !1,
                                                                t.complete()
                                                        },
                                                        error(e) {
                                                            d = !1,
                                                                t.error(e)
                                                        }
                                                    })
                                            }
                                        ),
                                        r
                                }(n, e, r, o);
                                return ()=>{
                                    t.observable && t.observable.unsubscribe()
                                }
                            }
                        );
                    {
                        const e = t[0].message;
                        c.a.$emit("global-error", {
                            error_msg: navigator.onLine ? e : "网络异常，请检查网络连接"
                        })
                    }
                }
            }
        )
            , f = ["/rest/wd/live/feed/v2"];
        function v() {
            const e = new s.RestLink({
                uri: "/",
                headers: {
                    kpn: "GAME_ZONE",
                    kpf: "PC_WEB"
                },
                credentials: "same-origin",
                defaultSerializer: (e,t)=>({
                    body: e,
                    headers: t
                }),
                responseTransformer: e=>(function(e) {
                        return function() {
                            var t = this
                                , n = arguments;
                            return new Promise(function(i, r) {
                                    var o = e.apply(t, n);
                                    function s(e) {
                                        u(o, i, r, s, a, "next", e)
                                    }
                                    function a(e) {
                                        u(o, i, r, s, a, "throw", e)
                                    }
                                    s(void 0)
                                }
                            )
                        }
                    }
                )(function*() {
                    f.some(t=>e.url.includes(t));
                    const t = (f.some(t=>e.url.includes(t)),
                        yield e.json());
                    return t
                })()
            });
            return r.ApolloLink.from([p, e])
        }
        function m(e) {
            const t = new o.a({
                credentials: "same-origin",
                uri: e || "/graphql"
            });
            return r.ApolloLink.from([p, t])
        }
    },
    sL8I: function(e, t, n) {
        "use strict";
        var i = n("mrSG")
            , r = n("uycM")
            , o = n("JFAF")
            , s = n("Oj1a");
        function a(e, t, n, i, r, o, s) {
            try {
                var a = e[o](s)
                    , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, r)
        }
        let c = class extends r.i {
                constructor() {
                    super(...arguments),
                        this.status = "scan"
                }
                start() {
                    var e = this;
                    return function(e) {
                        return function() {
                            var t = this
                                , n = arguments;
                            return new Promise(function(i, r) {
                                    var o = e.apply(t, n);
                                    function s(e) {
                                        a(o, i, r, s, c, "next", e)
                                    }
                                    function c(e) {
                                        a(o, i, r, s, c, "throw", e)
                                    }
                                    s(void 0)
                                }
                            )
                        }
                    }(function*() {
                        e.userModel.cancelQrLogin();
                        try {
                            yield e.userModel.getQRCode(),
                                e.status = "scan",
                                yield e.userModel.getUserLoginInfo(),
                                e.status = "confirm";
                            const {authToken: t, sid: n} = yield e.userModel.scanQRLoginResult();
                            yield e.userModel.login({
                                authToken: t,
                                sid: n
                            })
                        } catch (t) {
                            if (2 === t.result)
                                throw t;
                            if ("from cancel" === t.message)
                                return;
                            return void (e.status = "timeout")
                        }
                        e.$sendLog({
                            type: "click",
                            event_name: "login_status",
                            event_value: "".concat(e.userModel.userInfo.name),
                            event_index: "QRcode",
                            event_status: "success"
                        }),
                            e.$emit("login-success")
                    })()
                }
                mounted() {
                    this.start()
                }
                beforeDestroy() {
                    this.userModel && this.userModel.cancelQrLogin()
                }
            }
        ;
        i.__decorate([Object(r.h)({
            type: Number,
            default: 146
        })], c.prototype, "width", void 0),
            i.__decorate([Object(r.h)({
                type: Number,
                default: 146
            })], c.prototype, "height", void 0),
            i.__decorate([Object(r.g)(s.a)], c.prototype, "userModel", void 0),
            i.__decorate([o.a], c.prototype, "start", null),
            c = i.__decorate([r.a], c);
        var l = c
            , u = l
            , d = (n("4zj1"),
            n("KHd+"))
            , h = Object(d.a)(u, function() {
            var e = this
                , t = e.$createElement
                , n = e._self._c || t;
            return n("div", {
                staticClass: "qrcode"
            }, [e.userModel.qrLoginInfo.imageData ? n("img", {
                attrs: {
                    width: e.width + 18,
                    height: e.height + 18,
                    src: "data:image/png;base64," + e.userModel.qrLoginInfo.imageData
                }
            }) : e._e(), e._v(" "), n("span", {
                staticClass: "qrcode-icon"
            }), e._v(" "), n("div", {
                staticClass: "qrcode-status",
                class: "qrcode-status-" + e.status
            }, ["confirm" === e.status ? [n("strong", [e._v("扫码成功")]), e._v(" "), n("p", [e._v("请在手机上确认登录")])] : e._e(), e._v(" "), "timeout" === e.status ? [n("strong", [e._v("二维码已失效")]), e._v(" "), n("p", {
                staticClass: "qrcode-refresh",
                on: {
                    click: e.start
                }
            }, [e._v("\n                点击刷新\n            ")])] : e._e()], 2)])
        }, [], !1, null, "eceec010", null);
        t.a = h.exports
    },
    tRQO: function(e, t, n) {
        "use strict";
        var i = n("mrSG")
            , r = n("qQls")
            , o = n("1U5r")
            , s = n("HSo8")
            , a = n("Ut+I")
            , c = n("uycM")
            , l = n("tmkE");
        class u {
            constructor(e) {
                let {liveStreamId: t, streamUrl: n, playType: i, position: r, uaInfo: o} = e;
                this.startTime = Date.now(),
                    this.uaInfo = o,
                    this.position = r,
                    this.lastReceive = 0,
                    this.logInfo = {
                        user_id: null,
                        device_id: null,
                        server_timestamp: null,
                        client_timestamp: Date.now(),
                        browser_name: this.uaInfo.browser.name,
                        browser_version: this.uaInfo.browser.version,
                        os_type: this.uaInfo.os.name,
                        os_version: this.uaInfo.os.version,
                        client_ip: null,
                        live_stream_id: t,
                        total_duration: 0,
                        traffic: 0,
                        live_stream_host: new URL(n).hostname,
                        play_url: n,
                        resolution_type: 1,
                        client_id: null,
                        push_cdn: null,
                        pull_cdn: null,
                        play_type: i,
                        page_url: location.href
                    }
            }
        }
        let d = class extends (Object(c.e)(l.a)) {
                initLog(e) {
                    let {liveStreamId: t, streamUrl: n, playType: i, position: r, uaInfo: o} = e;
                    this.logInstance = new u({
                        liveStreamId: t,
                        streamUrl: n,
                        playType: i,
                        position: r,
                        uaInfo: o
                    })
                }
                heartbeat(e) {
                    let {totalReceive: t} = e;
                    this.logInstance && (this.logInstance.logInfo.traffic = t)
                }
                finish() {
                    this.logInstance.logInfo.total_duration = Date.now() - this.logInstance.startTime,
                        this.$emit("log", {
                            previewLog: this.logInstance.logInfo
                        })
                }
                mounted() {
                    window.addEventListener("beforeunload", this.finish)
                }
                beforeDestroy() {
                    window.removeEventListener("beforeunload", this.finish),
                        this.finish()
                }
            }
        ;
        d = i.__decorate([Object(c.a)({
            events: {
                report(e) {
                    let {type: t, value: n} = e;
                    "heartbeat" === t && this.heartbeat(n)
                }
            }
        })], d);
        var h = d
            , p = n("8AcX")
            , f = n.n(p);
        function v(e, t, n, i, r, o, s) {
            try {
                var a = e[o](s)
                    , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, r)
        }
        let m = class extends (Object(c.e)(a.a)) {
                constructor() {
                    super(...arguments),
                        this.kernel = f.a
                }
                get playerName() {
                    return Object(s.a)(this.uaInfo) ? "flash-player" : "kwai-player"
                }
                log(e) {
                    let {previewLog: t} = e;
                    this.$sendLogSync({
                        type: "preview",
                        previewLog: t,
                        position: this.type
                    })
                }
                finishLogger() {
                    this.$refs.log && this.$refs.log.finish()
                }
                pause() {
                    this.$refs.player && this.$refs.player.pause()
                }
                loadLive(e) {
                    var t = this;
                    return function(e) {
                        return function() {
                            var t = this
                                , n = arguments;
                            return new Promise(function(i, r) {
                                    var o = e.apply(t, n);
                                    function s(e) {
                                        v(o, i, r, s, a, "next", e)
                                    }
                                    function a(e) {
                                        v(o, i, r, s, a, "throw", e)
                                    }
                                    s(void 0)
                                }
                            )
                        }
                    }(function*() {
                        let {liveStreamId: n, playUrls: i=[], quality: r, playType: o} = e;
                        const s = r || t.getInitQuality(i);
                        if (!i.length)
                            return void t.$refs.player.stop();
                        const a = i.find(e=>e.quality === s);
                        t.$refs.log.initLog({
                            liveStreamId: n,
                            streamUrl: a.url,
                            playType: o,
                            position: t.type,
                            uaInfo: t.uaInfo
                        }),
                            yield t.$refs.player.load({
                                resource: a.url,
                                muted: !0
                            })
                    })()
                }
            }
        ;
        i.__decorate([Object(c.c)()], m.prototype, "uaInfo", void 0),
            i.__decorate([Object(c.h)({
                type: String,
                required: !0
            })], m.prototype, "type", void 0),
            i.__decorate([Object(c.h)({
                type: String,
                required: !0
            })], m.prototype, "poster", void 0),
            m = i.__decorate([Object(c.a)({
                name: "live-player",
                components: {
                    flashPlayer: r.a,
                    kwaiPlayer: o.a,
                    kwaiPlayerPluginMiniLogger: h
                }
            })], m);
        var g = m
            , y = g
            , b = n("KHd+")
            , _ = Object(b.a)(y, function() {
            var e = this
                , t = e.$createElement
                , n = e._self._c || t;
            return n(e.playerName, {
                ref: "player",
                tag: "component",
                attrs: {
                    "is-live": "",
                    "is-living": "",
                    width: "100%",
                    height: "100%",
                    muted: "",
                    poster: e.poster,
                    kernel: e.kernel
                },
                on: {
                    playing: function(t) {
                        return e.$emit("playing")
                    }
                }
            }, [n("kwai-player-plugin-mini-logger", {
                ref: "log",
                on: {
                    log: e.log
                }
            })], 1)
        }, [], !1, null, null, null);
        t.a = _.exports
    },
    tmkE: function(e, t, n) {
        "use strict";
        var i = n("mrSG")
            , r = n("uycM");
        let o = class extends r.i {
                get playerInstance() {
                    let e = this.$parent;
                    for (; e; ) {
                        if ("kwai-player" === e.$options.name || "audio-player" === e.$options.name)
                            return e;
                        e = e.$parent
                    }
                    return null
                }
                mounted() {
                    !function(e) {
                        const t = e.$options.events || {};
                        e.vueEventsList = Object.keys(t).map(n=>({
                            eventName: n,
                            handler: t[n].bind(e)
                        })).forEach(t=>{
                                let {eventName: n, handler: i} = t;
                                e.playerInstance.$on(n, i)
                            }
                        )
                    }(this);
                    const e = this.$options.name;
                    e ? this.playerInstance.$plugins && (this.playerInstance.$plugins[e] ? console.warn('You have a duplex plugin "'.concat(e, '"')) : (this.playerInstance.$plugins[e] = this,
                        this._pluginName = e)) : console.warn("You Don't have a plugin name, so you can't use $plugin[name] to use it")
                }
                beforeDestroy() {
                    this._pluginName && (this.playerInstance.$plugins[this._pluginName] = null),
                        function(e) {
                            Array.isArray(e.vueEventsList) && (e.vueEventsList.forEach(t=>{
                                    let {eventName: n, handler: i} = t;
                                    e.playerInstance.$off(n, i)
                                }
                            ),
                                e.vueEventsList = null)
                        }(this)
                }
            }
        ;
        o = i.__decorate([r.a], o);
        t.a = o
    },
    uIIQ: function(e, t, n) {
        "use strict";
        n.r(t);
        n("6VaU"),
            n("Vd3H"),
            n("RQRG"),
            n("/uf1"),
            n("uaHG"),
            n("ZNX/"),
            n("CX2u"),
            n("Oyvg"),
            n("OEbY"),
            n("SRfc"),
            n("pIFo"),
            n("KKXr"),
            n("OG14"),
            n("a1Th"),
            n("ioFf"),
            n("rE2o"),
            n("I74W"),
            n("fA63"),
            n("R5XZ"),
            n("Ew+T"),
            n("rGqo"),
            n("T1qB"),
            n("Wr5T");
        var i = n("oCYn")
            , r = n("NlKi")
            , o = n.n(r)
            , s = n("KVXB")
            , a = n.n(s)
            , c = (n("Pc/5"),
            n("MooE"))
            , l = (n("WJcA"),
            n("oqpS"))
            , u = n("mrSG")
            , d = n("uycM")
            , h = n("AobF")
            , p = (n("6NtY"),
            n("lEcC"))
            , f = n("zLfr");
        let v = class extends d.i {
                show() {
                    this.$refs.modal.show()
                }
                hide() {
                    h.a.$emit("retry-auto-play"),
                        this.$refs.modal.hide()
                }
                mounted() {
                    h.a.$on("auto-play-error", ()=>{
                            "Safari" === this.uaInfo.browser.name ? this.show() : h.a.$emit("mute-auto-play")
                        }
                    )
                }
                beforeDestroy() {
                    h.a.$off("auto-play-error")
                }
            }
        ;
        u.__decorate([Object(d.c)()], v.prototype, "uaInfo", void 0),
            v = u.__decorate([Object(d.a)({
                components: {
                    modal: f.a,
                    plButton: p.a
                }
            })], v);
        var m = v
            , g = m
            , y = (n("3INh"),
            n("KHd+"))
            , b = Object(y.a)(g, function() {
            var e = this
                , t = e.$createElement
                , i = e._self._c || t;
            return i("modal", {
                ref: "modal",
                staticClass: "tip",
                attrs: {
                    width: "700px",
                    title: "自动播放设置"
                }
            }, [i("div", {
                staticClass: "safari-tip"
            }, [i("div", {
                staticClass: "info"
            }, [e._v("你的Safari浏览器阻止了自动播放视频功能，你可以这样设置：")]), e._v(" "), i("div", {
                staticClass: "step1"
            }, [i("span", {
                staticClass: "sequence"
            }, [e._v(" 1 / ")]), e._v(" "), i("span", {
                staticClass: "content"
            }, [e._v("\n                鼠标右键点击浏览器顶部的地址栏【live.kuaishou.com】，并点击浮层中的【此网站的设置】。\n            ")]), e._v(" "), i("img", {
                staticClass: "step1-img",
                attrs: {
                    src: n("5bxM")
                }
            })]), e._v(" "), i("div", {
                staticClass: "step2"
            }, [i("span", {
                staticClass: "sequence"
            }, [e._v(" 2 / ")]), e._v(" "), i("span", {
                staticClass: "content"
            }, [e._v(" 点击【自动播放】后的选项【停止播放含声音的媒体】。 ")]), e._v(" "), i("img", {
                staticClass: "step2-img",
                attrs: {
                    src: n("ACE3")
                }
            })]), e._v(" "), i("div", {
                staticClass: "step3"
            }, [i("span", {
                staticClass: "sequence"
            }, [e._v(" 3 / ")]), e._v(" "), i("span", {
                staticClass: "content"
            }, [e._v(" 选择【允许全部自动播放】然后点击弹窗下的【设置成功】就搞定了。 ")]), e._v(" "), i("img", {
                staticClass: "step3-img",
                attrs: {
                    src: n("A5Lr")
                }
            })]), e._v(" "), i("pl-button", {
                attrs: {
                    radius: "",
                    type: "primary"
                },
                on: {
                    click: e.hide
                }
            }, [e._v(" 设置成功 ")])], 1)])
        }, [], !1, null, "e907bad8", null)
            , _ = b.exports;
        let w = 0
            , k = null
            , I = class extends d.i {
                constructor() {
                    super(...arguments),
                        this.isShow = !1
                }
                hide() {
                    this.isShow && (this.isShow = this.$parent.isShow = !1,
                        w--,
                    w || (document.body.style.overflow = k,
                        k = null))
                }
                show() {
                    this.isShow || (this.isShow = this.$parent.isShow = !0,
                        document.body.appendChild(this.$el),
                        w++,
                        k = null === k ? document.body.style.overflow : k,
                        document.body.style.overflow = "hidden")
                }
                pressEscape() {
                    this.closeOnPressEscape && this.hide()
                }
                triggerAfterEnter() {
                    this.$el.focus()
                }
                mounted() {
                    this.nextSibling = this.$el.nextSibling,
                        this.parentElement = this.$el.parentElement,
                        document.body.appendChild(this.$el)
                }
                beforeDestroy() {
                    this.nextSibling ? this.parentElement.insertBefore(this.$el, this.nextSibling) : this.parentElement.appendChild(this.$el),
                        this.nextSibling = null,
                        this.parentElement = null
                }
            }
        ;
        u.__decorate([Object(d.h)({
            type: String,
            default: "600px"
        })], I.prototype, "width", void 0),
            u.__decorate([Object(d.h)({
                type: Boolean,
                default: !0
            })], I.prototype, "closeOnPressEscape", void 0),
            I = u.__decorate([d.a], I);
        var x = I
            , C = x
            , O = (n("lbur"),
            Object(y.a)(C, function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("transition", {
                    attrs: {
                        name: "user-modal"
                    },
                    on: {
                        "after-enter": e.triggerAfterEnter
                    }
                }, [e.isShow ? n("div", {
                    staticClass: "user-modal",
                    attrs: {
                        tabindex: "1"
                    },
                    on: {
                        keydown: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "esc", 27, t.key, ["Esc", "Escape"]) ? null : e.hide(t)
                        }
                    }
                }, [n("div", {
                    staticClass: "user-modal-dialog",
                    style: {
                        width: e.width
                    },
                    on: {
                        keydown: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "esc", 27, t.key, ["Esc", "Escape"]) ? null : e.pressEscape(t)
                        }
                    }
                }, [n("a", {
                    staticClass: "user-modal-close",
                    attrs: {
                        href: "javascript:void(0)"
                    },
                    on: {
                        click: e.hide
                    }
                }), e._v(" "), n("div", {
                    staticClass: "user-modal-body"
                }, [e._t("default")], 2)])]) : e._e()])
            }, [], !1, null, "6922272a", null))
            , P = O.exports
            , L = (n("grCj"),
            n("ogXo"))
            , S = (n("3L3S"),
            n("n2cu"))
            , $ = {}
            , T = (n("m1YK"),
            Object(y.a)($, function() {
                var e = this.$createElement
                    , t = this._self._c || e;
                return t("div", {
                    staticClass: "third-part"
                }, [t("h4", {
                    staticClass: "third-part-title"
                }, [this._v("\n        第三方直接登录\n    ")]), this._v(" "), t("div", {
                    staticClass: "third-part-entry"
                }, [t("router-link", {
                    directives: [{
                        name: "log",
                        rawName: "v-log",
                        value: {
                            type: "click",
                            event_name: "login_type",
                            event_value: {
                                target: "wechat"
                            }
                        },
                        expression: "{\n                type: 'click',\n                event_name: 'login_type',\n                event_value: {\n                    target: 'wechat',\n                },\n            }"
                    }],
                    staticClass: "third-part-entry-wechat",
                    attrs: {
                        target: "_blank",
                        to: "/thirdPart/wechat/"
                    }
                }), this._v(" "), t("router-link", {
                    directives: [{
                        name: "log",
                        rawName: "v-log",
                        value: {
                            type: "click",
                            event_name: "login_type",
                            event_value: {
                                target: "qq"
                            }
                        },
                        expression: "{\n                type: 'click',\n                event_name: 'login_type',\n                event_value: {\n                    target: 'qq',\n                },\n            }"
                    }],
                    staticClass: "third-part-entry-qq",
                    attrs: {
                        target: "_blank",
                        to: "/thirdPart/qq/"
                    }
                })], 1)])
            }, [], !1, null, "a026242c", null))
            , j = T.exports
            , M = n("sL8I");
        let E = class extends d.i {
            }
        ;
        E = u.__decorate([Object(d.a)({
            components: {
                qrcode: M.a
            }
        })], E);
        var R = E
            , q = R
            , A = (n("mt5F"),
            Object(y.a)(q, function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "qr-login"
                }, [n("qrcode", {
                    staticClass: "qr-login-code",
                    on: {
                        "login-success": function(t) {
                            return e.$emit("login-success")
                        }
                    }
                }), e._v(" "), e._m(0)], 1)
            }, [function() {
                var e = this.$createElement
                    , t = this._self._c || e;
                return t("p", {
                    staticClass: "qr-login-download"
                }, [this._v("\n        打开\n        "), t("a", {
                    attrs: {
                        href: "https://m.uyouqu.com/download/kwai?f=qrcode_web",
                        target: "_blank",
                        rel: "noopener"
                    }
                }, [this._v(" 快手App ")]), this._v("\n        扫一扫登录\n    ")])
            }
            ], !1, null, "5f5dc117", null))
            , D = A.exports
            , N = (n("PaXu"),
            n("xKbv"))
            , U = n("bD1G")
            , Q = n("JFAF")
            , B = n("Nndj")
            , F = n("Oj1a");
        function z(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
                e
        }
        function G(e, t, n, i, r, o, s) {
            try {
                var a = e[o](s)
                    , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, r)
        }
        function H(e) {
            return function() {
                var t = this
                    , n = arguments;
                return new Promise(function(i, r) {
                        var o = e.apply(t, n);
                        function s(e) {
                            G(o, i, r, s, a, "next", e)
                        }
                        function a(e) {
                            G(o, i, r, s, a, "throw", e)
                        }
                        s(void 0)
                    }
                )
            }
        }
        let K = class extends d.i {
                constructor() {
                    super(...arguments),
                        this.phoneType = "verification",
                        this.isLogining = !1,
                        this.loginInfo = {
                            countryCode: U.b ? "+86" : "+1264",
                            phone: "",
                            password: "",
                            verification: "",
                            countdown: 0
                        }
                }
                get canSubmit() {
                    const e = U.b ? /^1[3578]\d{9}$/.test(this.loginInfo.phone) : /^1[3578]\d{9}$/.test(this.loginInfo.phone) || /^\d{10}$/.test(this.loginInfo.phone)
                        , t = this.loginInfo.password.length >= 6 && this.loginInfo.password.length <= 16
                        , n = U.b ? /^\d{6,}$/.test(this.loginInfo.verification) : /^\d{4,}$/.test(this.loginInfo.verification);
                    return "verification" === this.phoneType ? e && n && !this.isLogining : e && t && !this.isLogining
                }
                cleanLoginInfo() {
                    this.loginInfo = {
                        countryCode: U.b ? "+86" : "+1264",
                        phone: "",
                        password: "",
                        verification: "",
                        countdown: 0
                    }
                }
                getCaptcha(e) {
                    return H(function*() {
                        const {captchaKey: t, captchaType: n, captchaUri: i} = e
                            , r = yield B.a.getCaptchaToken({
                            key: t,
                            type: n,
                            uri: i
                        });
                        return r
                    })()
                }
                loginSubmit(e) {
                    var t = this;
                    return H(function*() {
                        if (t.canSubmit) {
                            t.isLogining = !0;
                            try {
                                const n = e ? yield t.getCaptcha(e) : null
                                    , i = "verification" === t.phoneType ? B.a.login({
                                    phone: t.loginInfo.phone,
                                    smsCode: t.loginInfo.verification,
                                    captchaToken: n
                                }) : B.a.passwordLogin(function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {}
                                            , i = Object.keys(n);
                                        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                                        }))),
                                            i.forEach(function(t) {
                                                z(e, t, n[t])
                                            })
                                    }
                                    return e
                                }({}, t.loginInfo, {
                                    captchaToken: n
                                }))
                                    , {authToken: r, sid: o} = yield i;
                                yield t.userModel.login({
                                    authToken: r,
                                    sid: o
                                }),
                                    t.$emit("login-success"),
                                    t.isLogining = !1
                            } catch (e) {
                                if (t.isLogining = !1,
                                2 === e.ret)
                                    return;
                                if (100110013 === e.result)
                                    return void t.loginSubmit(e);
                                if (100110031 === e.result)
                                    return void t.$emit("choose-user", {
                                        phone: t.loginInfo.phone,
                                        userInfos: e.userInfos,
                                        multiUserToken: e.multiUserToken
                                    });
                                throw e
                            }
                        }
                    })()
                }
                getVerification() {
                    var e = this;
                    return H(function*() {
                        e.$sendLog({
                            type: "click",
                            event_name: "login_phone_verification",
                            event_value: "phone_number",
                            phone_number: e.loginInfo.phone
                        }),
                            yield e.userModel.requestMobileCode({
                                countryCode: e.loginInfo.countryCode,
                                phone: e.loginInfo.phone,
                                isLogin: !0
                            }),
                            e.loginInfo.countdown = 60
                    })()
                }
                "loginInfo.countdown"(e) {
                    e > 0 && setTimeout(()=>{
                            this.loginInfo.countdown--
                        }
                        , 1e3)
                }
            }
        ;
        u.__decorate([Object(d.g)(F.a)], K.prototype, "userModel", void 0),
            u.__decorate([Q.a], K.prototype, "loginSubmit", null),
            u.__decorate([Q.a], K.prototype, "getVerification", null),
            u.__decorate([Object(d.j)("loginInfo.countdown")], K.prototype, "loginInfo.countdown", null),
            K = u.__decorate([Object(d.a)({
                components: {
                    plInput: N.a,
                    plButton: p.a
                }
            })], K);
        var V = K
            , W = V
            , J = (n("r1fv"),
            Object(y.a)(W, function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "normal-login"
                }, ["verification" === e.phoneType ? [n("pl-input", {
                    staticClass: "normal-login-item",
                    attrs: {
                        maxlength: "11",
                        placeholder: "请输入手机号"
                    },
                    nativeOn: {
                        keydown: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.loginSubmit()
                        }
                    },
                    model: {
                        value: e.loginInfo.phone,
                        callback: function(t) {
                            e.$set(e.loginInfo, "phone", t)
                        },
                        expression: "loginInfo.phone"
                    }
                }), e._v(" "), n("pl-input", {
                    staticClass: "normal-login-item verification-input",
                    attrs: {
                        maxlength: "16",
                        type: "password",
                        placeholder: "请输入验证码"
                    },
                    nativeOn: {
                        keydown: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.loginSubmit()
                        }
                    },
                    scopedSlots: e._u([{
                        key: "append",
                        fn: function() {
                            return [e.loginInfo.countdown ? n("span", {
                                staticClass: "get-verification disabled"
                            }, [e._v(" " + e._s(e.loginInfo.countdown) + "s ")]) : n("span", {
                                staticClass: "get-verification",
                                on: {
                                    click: e.getVerification
                                }
                            }, [e._v("\n                    获取验证码\n                ")])]
                        },
                        proxy: !0
                    }], null, !1, 2267674487),
                    model: {
                        value: e.loginInfo.verification,
                        callback: function(t) {
                            e.$set(e.loginInfo, "verification", t)
                        },
                        expression: "loginInfo.verification"
                    }
                }), e._v(" "), n("p", {
                    staticClass: "change-login",
                    on: {
                        click: function(t) {
                            e.phoneType = "password"
                        }
                    }
                }, [e._v("密码登录")]), e._v(" "), n("pl-button", {
                    staticClass: "login-button",
                    attrs: {
                        disabled: !e.canSubmit,
                        type: "primary",
                        radius: ""
                    },
                    on: {
                        click: function(t) {
                            return e.loginSubmit()
                        }
                    }
                }, [e._v("\n            登录\n        ")])] : [n("pl-input", {
                    staticClass: "normal-login-item",
                    attrs: {
                        maxlength: "11",
                        placeholder: "请输入手机号"
                    },
                    nativeOn: {
                        keydown: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.loginSubmit()
                        }
                    },
                    model: {
                        value: e.loginInfo.phone,
                        callback: function(t) {
                            e.$set(e.loginInfo, "phone", t)
                        },
                        expression: "loginInfo.phone"
                    }
                }), e._v(" "), n("pl-input", {
                    staticClass: "normal-login-item",
                    attrs: {
                        maxlength: "16",
                        type: "password",
                        placeholder: "请输入密码"
                    },
                    nativeOn: {
                        keydown: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.loginSubmit()
                        }
                    },
                    scopedSlots: e._u([{
                        key: "append",
                        fn: function() {},
                        proxy: !0
                    }]),
                    model: {
                        value: e.loginInfo.password,
                        callback: function(t) {
                            e.$set(e.loginInfo, "password", t)
                        },
                        expression: "loginInfo.password"
                    }
                }), e._v(" "), n("p", {
                    staticClass: "change-login",
                    on: {
                        click: function(t) {
                            e.phoneType = "verification"
                        }
                    }
                }, [e._v("短信验证码登录")]), e._v(" "), n("pl-button", {
                    staticClass: "login-button",
                    attrs: {
                        disabled: !e.canSubmit,
                        type: "primary",
                        radius: ""
                    },
                    on: {
                        click: function(t) {
                            return e.loginSubmit()
                        }
                    }
                }, [e._v("\n            登 录\n        ")])]], 2)
            }, [], !1, null, "0d1b6cc0", null))
            , X = J.exports
            , Y = (n("hXT/"),
            n("6Mz8"));
        function Z(e, t, n, i, r, o, s) {
            try {
                var a = e[o](s)
                    , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, r)
        }
        let ee = class extends d.i {
                constructor() {
                    super(...arguments),
                        this.currentUser = ""
                }
                submit() {
                    var e = this;
                    return function(e) {
                        return function() {
                            var t = this
                                , n = arguments;
                            return new Promise(function(i, r) {
                                    var o = e.apply(t, n);
                                    function s(e) {
                                        Z(o, i, r, s, a, "next", e)
                                    }
                                    function a(e) {
                                        Z(o, i, r, s, a, "throw", e)
                                    }
                                    s(void 0)
                                }
                            )
                        }
                    }(function*() {
                        const {authToken: t, sid: n} = yield B.a.chooseUser({
                            userId: e.currentUser,
                            multiUserToken: e.multiUserToken,
                            phone: e.phone
                        });
                        yield e.userModel.login({
                            authToken: t,
                            sid: n
                        }),
                            e.$emit("login-success")
                    })()
                }
            }
        ;
        u.__decorate([Object(d.g)(F.a)], ee.prototype, "userModel", void 0),
            u.__decorate([Object(d.h)({
                type: String,
                required: !0
            })], ee.prototype, "multiUserToken", void 0),
            u.__decorate([Object(d.h)({
                type: Array,
                required: !0
            })], ee.prototype, "userInfos", void 0),
            u.__decorate([Object(d.h)({
                type: String,
                required: !0
            })], ee.prototype, "phone", void 0),
            u.__decorate([Q.a], ee.prototype, "submit", null),
            ee = u.__decorate([Object(d.a)({
                components: {
                    plRadio: Y.a,
                    plButton: p.a
                }
            })], ee);
        var te = ee
            , ne = te
            , ie = (n("qv8f"),
            Object(y.a)(ne, function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "choose-user"
                }, [n("h4", {
                    staticClass: "choose-user-title"
                }, [e._v("选择要登录的账号")]), e._v(" "), n("ul", {
                    staticClass: "choose-user-list"
                }, e._l(e.userInfos, function(t) {
                    return n("li", {
                        key: t.userId,
                        staticClass: "choose-user-list-item",
                        on: {
                            click: function(n) {
                                e.currentUser = t.userId
                            }
                        }
                    }, [n("img", {
                        attrs: {
                            src: t.headUrl
                        }
                    }), e._v(" "), n("p", {
                        staticClass: "choose-user-list-item-detail"
                    }, [e._v(e._s(t.name))]), e._v(" "), n("pl-radio", {
                        attrs: {
                            value: t.userId
                        },
                        model: {
                            value: e.currentUser,
                            callback: function(t) {
                                e.currentUser = t
                            },
                            expression: "currentUser"
                        }
                    })], 1)
                }), 0), e._v(" "), n("pl-button", {
                    staticClass: "cofirm-button",
                    attrs: {
                        disabled: !e.currentUser,
                        type: "primary",
                        radius: ""
                    },
                    on: {
                        click: e.submit
                    }
                }, [e._v("\n        确定\n    ")])], 1)
            }, [], !1, null, "1b9b2c4c", null))
            , re = ie.exports
            , oe = n("QfRt");
        let se = class extends d.i {
                constructor() {
                    super(...arguments),
                        this.loginType = "qr",
                        this.multiUserInfo = {
                            userInfos: [],
                            multiUserToken: "",
                            phone: ""
                        }
                }
                get showRegister() {
                    return 1 === this.configModel.config["pcLive.webConfig.showRegister"]
                }
                chooseUser(e) {
                    this.multiUserInfo = e
                }
            }
        ;
        u.__decorate([Object(d.g)(oe.a)], se.prototype, "configModel", void 0),
            se = u.__decorate([Object(d.a)({
                components: {
                    plTab: S.a,
                    plTabPanel: L.a,
                    thirdPart: j,
                    qrLogin: D,
                    mobileLogin: X,
                    chooseUser: re
                }
            })], se);
        var ae = se
            , ce = ae
            , le = (n("FMfQ"),
            Object(y.a)(ce, function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "login"
                }, [e.multiUserInfo.userInfos.length ? n("choose-user", {
                    attrs: {
                        phone: e.multiUserInfo.phone,
                        "multi-user-token": e.multiUserInfo.multiUserToken,
                        "user-infos": e.multiUserInfo.userInfos
                    },
                    on: {
                        "login-success": function(t) {
                            return e.$emit("login-success")
                        }
                    }
                }) : [e.showRegister ? n("p", {
                    staticClass: "change-type"
                }, [e._v("\n            没有账号？"), n("span", {
                    on: {
                        click: function(t) {
                            return e.$emit("change-type", "register")
                        }
                    }
                }, [e._v(" 注册 ")])]) : e._e(), e._v(" "), n("pl-tab", {
                    staticClass: "login-tab",
                    attrs: {
                        "active-tab-id": e.loginType
                    },
                    on: {
                        "update:activeTabId": function(t) {
                            e.loginType = t
                        },
                        "update:active-tab-id": function(t) {
                            e.loginType = t
                        }
                    }
                }, [n("pl-tab-panel", {
                    attrs: {
                        id: "qr"
                    },
                    scopedSlots: e._u([{
                        key: "tab",
                        fn: function() {
                            return [n("h4", {
                                directives: [{
                                    name: "log",
                                    rawName: "v-log",
                                    value: {
                                        type: "click",
                                        event_name: "login_type",
                                        event_value: {
                                            target: "QRcode"
                                        }
                                    },
                                    expression: "{\n                            type: 'click',\n                            event_name: 'login_type',\n                            event_value: {\n                                target: 'QRcode',\n                            },\n                        }"
                                }],
                                staticClass: "login-tab-title"
                            }, [e._v("\n                        扫码登录\n                    ")])]
                        },
                        proxy: !0
                    }], null, !1, 3525152622)
                }, [e._v(" "), n("qr-login", {
                    staticClass: "login-tab-content",
                    on: {
                        "login-success": function(t) {
                            return e.$emit("login-success")
                        }
                    }
                })], 1), e._v(" "), n("pl-tab-panel", {
                    attrs: {
                        id: "mobile"
                    },
                    scopedSlots: e._u([{
                        key: "tab",
                        fn: function() {
                            return [n("h4", {
                                directives: [{
                                    name: "log",
                                    rawName: "v-log",
                                    value: {
                                        type: "click",
                                        event_name: "login_type",
                                        event_value: {
                                            target: "phone_password"
                                        }
                                    },
                                    expression: "{\n                            type: 'click',\n                            event_name: 'login_type',\n                            event_value: {\n                                target: 'phone_password',\n                            },\n                        }"
                                }],
                                staticClass: "login-tab-title"
                            }, [e._v("\n                        手机号登录\n                    ")])]
                        },
                        proxy: !0
                    }], null, !1, 1420740930)
                }, [e._v(" "), n("mobile-login", {
                    staticClass: "login-tab-content",
                    on: {
                        "login-success": function(t) {
                            return e.$emit("login-success")
                        },
                        "choose-user": e.chooseUser
                    }
                })], 1)], 1), e._v(" "), e.showRegister ? n("third-part") : e._e()]], 2)
            }, [], !1, null, "bd136278", null))
            , ue = le.exports
            , de = n("BCm8");
        function he(e, t, n, i, r, o, s) {
            try {
                var a = e[o](s)
                    , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, r)
        }
        let pe = class extends d.i {
                constructor() {
                    super(...arguments),
                        this.sex = "M",
                        this.nickName = ""
                }
                modifyUserInfo() {
                    var e = this;
                    return function(e) {
                        return function() {
                            var t = this
                                , n = arguments;
                            return new Promise(function(i, r) {
                                    var o = e.apply(t, n);
                                    function s(e) {
                                        he(o, i, r, s, a, "next", e)
                                    }
                                    function a(e) {
                                        he(o, i, r, s, a, "throw", e)
                                    }
                                    s(void 0)
                                }
                            )
                        }
                    }(function*() {
                        e.$sendLog({
                            type: "click",
                            event_name: "register_message",
                            event_value: "".concat(e.sex, "|").concat(e.nickName.trim())
                        }),
                            yield e.userModel.modifyUserInfo({
                                userName: e.nickName.trim(),
                                userSex: e.sex
                            }),
                            yield e.userModel.getUserInfo(),
                            e.$emit("modify-success")
                    })()
                }
                get canModify() {
                    return this.nickName.trim().length
                }
            }
        ;
        u.__decorate([Object(d.g)(F.a)], pe.prototype, "userModel", void 0),
            pe = u.__decorate([Object(d.a)({
                components: {
                    sexSelect: de.a,
                    plButton: p.a
                }
            })], pe);
        var fe = pe
            , ve = fe
            , me = (n("b5Y1"),
            Object(y.a)(ve, function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "modify"
                }, [e._m(0), e._v(" "), n("sex-select", {
                    model: {
                        value: e.sex,
                        callback: function(t) {
                            e.sex = t
                        },
                        expression: "sex"
                    }
                }), e._v(" "), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.nickName,
                        expression: "nickName"
                    }],
                    staticClass: "nick-name-input",
                    attrs: {
                        maxlength: "12",
                        type: "text",
                        placeholder: "请输入昵称"
                    },
                    domProps: {
                        value: e.nickName
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.nickName = t.target.value)
                        }
                    }
                }), e._v(" "), n("pl-button", {
                    staticClass: "next-step-button",
                    attrs: {
                        disabled: !e.canModify,
                        type: "primary",
                        radius: ""
                    },
                    on: {
                        click: e.modifyUserInfo
                    }
                }, [e._v("\n        完成\n    ")])], 1)
            }, [function() {
                var e = this.$createElement
                    , t = this._self._c || e;
                return t("header", [t("strong", [this._v("快手")]), this._v("欢迎你，请完善下基本信息")])
            }
            ], !1, null, "3c157766", null))
            , ge = me.exports;
        function ye(e, t, n, i, r, o, s) {
            try {
                var a = e[o](s)
                    , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, r)
        }
        function be(e) {
            return function() {
                var t = this
                    , n = arguments;
                return new Promise(function(i, r) {
                        var o = e.apply(t, n);
                        function s(e) {
                            ye(o, i, r, s, a, "next", e)
                        }
                        function a(e) {
                            ye(o, i, r, s, a, "throw", e)
                        }
                        s(void 0)
                    }
                )
            }
        }
        let _e = class extends d.i {
                constructor() {
                    super(...arguments),
                        this.registerInfo = {
                            countryCode: U.b ? "+86" : "+1264",
                            mobile: "",
                            verification: "",
                            password: ""
                        },
                        this.step = "verification",
                        this.countdown = 0,
                        this.isMobileInputHovered = !1,
                        this.showPassword = !1
                }
                clearRegisterInfo() {
                    Object.assign(this, {
                        registerInfo: {
                            countryCode: U.b ? "+86" : "+1264",
                            mobile: "",
                            verification: "",
                            password: ""
                        },
                        step: "verification",
                        countdown: 0,
                        isMobileInputHovered: !1,
                        showPassword: !1
                    })
                }
                togglePassword() {
                    this.showPassword = !this.showPassword
                }
                getVerification() {
                    var e = this;
                    return be(function*() {
                        e.$sendLog({
                            type: "click",
                            event_name: "register_next",
                            event_value: "phone_number",
                            phone_number: e.registerInfo.mobile
                        }),
                            yield e.userModel.requestMobileCode({
                                countryCode: e.registerInfo.countryCode,
                                phone: e.registerInfo.mobile
                            }),
                            e.countdown = 60
                    })()
                }
                submit() {
                    var e = this;
                    return be(function*() {
                        if (e.canToNextStep)
                            try {
                                const {authToken: t, sid: n} = yield e.userModel.register({
                                    countryCode: e.registerInfo.countryCode,
                                    phone: e.registerInfo.mobile,
                                    password: e.registerInfo.password,
                                    smsCode: e.registerInfo.verification
                                });
                                yield e.userModel.login({
                                    authToken: t,
                                    sid: n
                                }),
                                    e.$emit("register-success")
                            } catch (t) {
                                if (!t.captchaKey)
                                    throw t;
                                const {captchaKey: n, captchaType: i, captchaUri: r} = t;
                                try {
                                    const t = yield B.a.getCaptchaToken({
                                        key: n,
                                        type: i,
                                        uri: r
                                    })
                                        , {authToken: o, sid: s} = yield e.userModel.register({
                                        countryCode: e.registerInfo.countryCode,
                                        phone: e.registerInfo.mobile,
                                        password: e.registerInfo.password,
                                        smsCode: e.registerInfo.verification,
                                        captchaToken: t
                                    });
                                    yield e.userModel.login({
                                        authToken: o,
                                        sid: s
                                    }),
                                        e.$emit("register-success")
                                } catch (e) {
                                    if (2 !== e.ret)
                                        throw e
                                }
                            }
                    })()
                }
                get canToNextStep() {
                    const e = U.b ? /^1[3578]\d{9}$/.test(this.registerInfo.mobile) : /^\d{10}$/.test(this.registerInfo.mobile)
                        , t = /^\d{4,}$/.test(this.registerInfo.verification) && this.registerInfo.password.length >= 6 && this.registerInfo.password.length <= 16;
                    return e && t
                }
                get maxLength() {
                    return U.b ? 11 : 10
                }
                countdownHandler(e) {
                    e > 0 && setTimeout(()=>{
                            this.countdown--
                        }
                        , 1e3)
                }
            }
        ;
        u.__decorate([Object(d.g)(F.a)], _e.prototype, "userModel", void 0),
            u.__decorate([Q.a], _e.prototype, "getVerification", null),
            u.__decorate([Q.a], _e.prototype, "submit", null),
            u.__decorate([Object(d.j)("countdown")], _e.prototype, "countdownHandler", null),
            _e = u.__decorate([Object(d.a)({
                components: {
                    plButton: p.a,
                    plInput: N.a
                }
            })], _e);
        var we = _e
            , ke = we
            , Ie = (n("obaf"),
            Object(y.a)(ke, function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    staticClass: "register"
                }, [n("p", {
                    staticClass: "change-type"
                }, [e._v("已有账号？"), n("span", {
                    on: {
                        click: function(t) {
                            return e.$emit("change-type", "login")
                        }
                    }
                }, [e._v(" 登录 ")])]), e._v(" "), n("h4", {
                    staticClass: "register-title"
                }, [e._v("注册")]), e._v(" "), n("div", {
                    staticClass: "register-content"
                }, [n("pl-input", {
                    staticClass: "mobile-input",
                    attrs: {
                        maxlength: e.maxLength,
                        placeholder: "输入中国大陆手机号"
                    },
                    nativeOn: {
                        keydown: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.nextStep(t)
                        }
                    },
                    model: {
                        value: e.registerInfo.mobile,
                        callback: function(t) {
                            e.$set(e.registerInfo, "mobile", t)
                        },
                        expression: "registerInfo.mobile"
                    }
                }), e._v(" "), n("pl-input", {
                    staticClass: "password-input",
                    attrs: {
                        maxlength: "16",
                        placeholder: "请设置 6~16 位密码",
                        type: e.showPassword ? "text" : "password"
                    },
                    nativeOn: {
                        keydown: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.submit(t)
                        }
                    },
                    scopedSlots: e._u([{
                        key: "append",
                        fn: function() {
                            return [n("span", {
                                staticClass: "toggle-password",
                                class: {
                                    "password-show": e.showPassword
                                },
                                on: {
                                    click: e.togglePassword
                                }
                            })]
                        },
                        proxy: !0
                    }]),
                    model: {
                        value: e.registerInfo.password,
                        callback: function(t) {
                            e.$set(e.registerInfo, "password", t)
                        },
                        expression: "registerInfo.password"
                    }
                }), e._v(" "), n("pl-input", {
                    staticClass: "verification-input",
                    attrs: {
                        maxlength: "4",
                        placeholder: "请输入验证码"
                    },
                    nativeOn: {
                        keydown: function(t) {
                            return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.nextStep(t)
                        }
                    },
                    scopedSlots: e._u([{
                        key: "append",
                        fn: function() {
                            return [e.countdown ? n("span", {
                                staticClass: "get-verification disabled"
                            }, [e._v(" " + e._s(e.countdown) + "s ")]) : n("span", {
                                staticClass: "get-verification",
                                on: {
                                    click: e.getVerification
                                }
                            }, [e._v(" 获取验证码 ")])]
                        },
                        proxy: !0
                    }]),
                    model: {
                        value: e.registerInfo.verification,
                        callback: function(t) {
                            e.$set(e.registerInfo, "verification", t)
                        },
                        expression: "registerInfo.verification"
                    }
                })], 1), e._v(" "), n("pl-button", {
                    staticClass: "next-step-button",
                    attrs: {
                        disabled: !e.canToNextStep,
                        type: "primary",
                        size: "small",
                        radius: ""
                    },
                    on: {
                        click: e.submit
                    }
                }, [e._v("\n        注 册\n    ")]), e._v(" "), e._m(0)], 1)
            }, [function() {
                var e = this.$createElement
                    , t = this._self._c || e;
                return t("p", {
                    staticClass: "register-license"
                }, [this._v("\n        注册即代表你已经阅读\n        "), t("a", {
                    attrs: {
                        href: "https://www.kuaishou.com/about/policy?tab=protocol",
                        target: "_blank",
                        rel: "noopener"
                    }
                }, [this._v("\n            《用户服务协议》\n        ")]), this._v("\n        和\n        "), t("a", {
                    attrs: {
                        href: "https://www.kuaishou.com/about/policy?tab=privacy",
                        target: "_blank",
                        rel: "noopener"
                    }
                }, [this._v("\n            《隐私权保护政策》\n        ")])])
            }
            ], !1, null, "06744d67", null))
            , xe = Ie.exports;
        function Ce(e, t, n, i, r, o, s) {
            try {
                var a = e[o](s)
                    , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, r)
        }
        let Oe = class extends d.i {
                constructor() {
                    super(...arguments),
                        this.type = "login",
                        this.isShow = !1
                }
                login() {
                    this.type = "login",
                        this.$refs.modal.show()
                }
                changeType(e) {
                    this.type = e
                }
                register() {
                    this.type = "register",
                        this.$refs.modal.show(),
                    this.$refs.register && (this.$refs.register.step = "verification")
                }
                success(e) {
                    if ("register" === e)
                        return this.userModel.userInfo.isNew = !0,
                            this.type = "modify",
                            void this.$sendLog({
                                type: "click",
                                event_name: "register_status",
                                event_status: "success"
                            });
                    this.userModel.userInfo.isNew = !1,
                        this.$refs.modal.hide()
                }
                mounted() {
                    var e = this;
                    h.a.$on("showUserModal", function() {
                        var t = function(e) {
                            return function() {
                                var t = this
                                    , n = arguments;
                                return new Promise(function(i, r) {
                                        var o = e.apply(t, n);
                                        function s(e) {
                                            Ce(o, i, r, s, a, "next", e)
                                        }
                                        function a(e) {
                                            Ce(o, i, r, s, a, "throw", e)
                                        }
                                        s(void 0)
                                    }
                                )
                            }
                        }(function*(t) {
                            let {type: n, initiative: i=!0} = t;
                            e.isShow || (e.$sendLog({
                                type: "click",
                                event_name: "show_user_modal",
                                event_index: n,
                                event_status: i
                            }),
                                e[n]())
                        });
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }())
                }
                beforeDestroy() {
                    h.a.$off("showUserModal")
                }
            }
        ;
        u.__decorate([Object(d.g)(F.a)], Oe.prototype, "userModel", void 0),
            Oe = u.__decorate([Object(d.a)({
                components: {
                    userModal: P,
                    login: ue,
                    modify: ge,
                    register: xe
                }
            })], Oe);
        var Pe = Oe
            , Le = Pe
            , Se = Object(y.a)(Le, function() {
            var e = this
                , t = e.$createElement
                , n = e._self._c || t;
            return n("user-modal", {
                ref: "modal",
                attrs: {
                    width: "434px"
                }
            }, ["login" === e.type ? [n("login", {
                ref: "login",
                on: {
                    "login-success": function(t) {
                        return e.success("login")
                    },
                    "change-type": function(t) {
                        return e.changeType(t)
                    }
                }
            })] : "register" === e.type ? [n("register", {
                ref: "register",
                on: {
                    "register-success": function(t) {
                        return e.success("register")
                    },
                    "change-type": function(t) {
                        return e.changeType(t)
                    }
                }
            })] : [n("modify", {
                ref: "modify",
                on: {
                    "modify-success": function(t) {
                        return e.success("modify")
                    }
                }
            })]], 2)
        }, [], !1, null, null, null)
            , $e = Se.exports
            , Te = (n("Nakp"),
            n("G7rA"))
            , je = (n("eLzI"),
            n("Ge/r"))
            , Me = (n("ECXE"),
            n("Tziw"))
            , Ee = n("b6HW")
            , Re = n("lTCR")
            , qe = n.n(Re);
        function Ae() {
            const e = function(e, t) {
                t || (t = e.slice(0));
                return Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }(["\n            mutation Feedback($data: String, $contact: String, $contactType: String) {\n                sendFeedback(data: $data, contact: $contact, contactType: $contactType) {\n                    result\n                }\n            }\n        "]);
            return Ae = function() {
                return e
            }
                ,
                e
        }
        function De(e, t, n, i, r, o, s) {
            try {
                var a = e[o](s)
                    , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, r)
        }
        class Ne extends Ee.a {
            sendFeedback(e) {
                var t = this;
                return function(e) {
                    return function() {
                        var t = this
                            , n = arguments;
                        return new Promise(function(i, r) {
                                var o = e.apply(t, n);
                                function s(e) {
                                    De(o, i, r, s, a, "next", e)
                                }
                                function a(e) {
                                    De(o, i, r, s, a, "throw", e)
                                }
                                s(void 0)
                            }
                        )
                    }
                }(function*() {
                    yield t.feedbackMutation.mutate(e)
                })()
            }
        }
        function Ue(e, t, n, i, r, o, s) {
            try {
                var a = e[o](s)
                    , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, r)
        }
        u.__decorate([Object(Ee.c)({
            mutation: qe()(Ae()),
            variables(e) {
                let {data: t, contact: n, contactType: i} = e;
                return {
                    data: t,
                    contact: n,
                    contactType: i
                }
            }
        })], Ne.prototype, "feedbackMutation", void 0);
        let Qe = class extends d.i {
                constructor() {
                    super(...arguments),
                        this.title = "意见反馈",
                        this.val = "",
                        this.contactType = "QQ",
                        this.contactInfo = "",
                        this.width = "520px",
                        this.placeholder = "请说出你的问题或分享你的想法，让快手变得更好",
                        this.result = 0
                }
                show() {
                    this.$refs.modal.show()
                }
                submit() {
                    var e = this;
                    return function(e) {
                        return function() {
                            var t = this
                                , n = arguments;
                            return new Promise(function(i, r) {
                                    var o = e.apply(t, n);
                                    function s(e) {
                                        Ue(o, i, r, s, a, "next", e)
                                    }
                                    function a(e) {
                                        Ue(o, i, r, s, a, "throw", e)
                                    }
                                    s(void 0)
                                }
                            )
                        }
                    }(function*() {
                        e.$sendLog({
                            type: "click",
                            event_name: "live_feedback",
                            event_value: "".concat(e.val)
                        }),
                            yield e.feedbackModel.sendFeedback({
                                data: e.val,
                                contact: e.contactInfo,
                                contactType: e.contactType
                            }),
                            e.result = 1
                    })()
                }
                afterHide() {
                    this.val = "",
                        this.contactInfo = "",
                        this.result = 0,
                        this.contactType = "QQ"
                }
                mounted() {
                    h.a.$on("showFeedback", ()=>{
                            this.show()
                        }
                    )
                }
                beforeDestroy() {
                    h.a.$off("showFeedback")
                }
            }
        ;
        u.__decorate([Object(d.g)(Ne)], Qe.prototype, "feedbackModel", void 0),
            Qe = u.__decorate([Object(d.a)({
                components: {
                    modal: f.a,
                    plButton: p.a,
                    plTextarea: Me.a,
                    plInput: N.a,
                    plSelect: je.a,
                    plOption: Te.a
                }
            })], Qe);
        var Be = Qe
            , Fe = Be
            , ze = (n("ncHj"),
            Object(y.a)(Fe, function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("modal", {
                    ref: "modal",
                    attrs: {
                        width: e.width,
                        title: e.title
                    },
                    on: {
                        "after-hide": e.afterHide
                    }
                }, [n("div", {
                    staticClass: "feedback"
                }, [1 !== e.result ? n("div", {
                    staticClass: "feedback-con"
                }, [n("pl-textarea", {
                    attrs: {
                        placeholder: e.placeholder
                    },
                    model: {
                        value: e.val,
                        callback: function(t) {
                            e.val = "string" == typeof t ? t.trim() : t
                        },
                        expression: "val"
                    }
                }), e._v(" "), n("pl-select", {
                    attrs: {
                        width: 140
                    },
                    model: {
                        value: e.contactType,
                        callback: function(t) {
                            e.contactType = t
                        },
                        expression: "contactType"
                    }
                }, [n("pl-option", {
                    attrs: {
                        value: "QQ",
                        text: "QQ"
                    }
                }, [e._v(" QQ ")]), e._v(" "), n("pl-option", {
                    attrs: {
                        value: "mobile",
                        text: "联系电话"
                    }
                }, [e._v(" 联系电话 ")])], 1), e._v(" "), n("pl-input", {
                    staticClass: "feedback-contact",
                    attrs: {
                        maxlength: "50",
                        placeholder: "请留下您的联系方式（QQ/手机）"
                    },
                    model: {
                        value: e.contactInfo,
                        callback: function(t) {
                            e.contactInfo = "string" == typeof t ? t.trim() : t
                        },
                        expression: "contactInfo"
                    }
                }), e._v(" "), e.val ? n("pl-button", {
                    staticClass: "feedback-btn",
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: e.submit
                    }
                }, [e._v(" 发送 ")]) : n("pl-button", {
                    staticClass: "feedback-btn",
                    attrs: {
                        disabled: ""
                    },
                    on: {
                        click: e.submit
                    }
                }, [e._v(" 发送 ")])], 1) : n("div", {
                    staticClass: "feedback-succ"
                }, [e._v("\n            您的反馈已经成功发送，"), n("br"), e._v("\n            快手直播会在小本本上为你记一大功！\n        ")])])])
            }, [], !1, null, "72c9a985", null))
            , Ge = ze.exports
            , He = (n("OPM7"),
            n("4kjK"))
            , Ke = n("lIuJ");
        let Ve = class extends d.i {
                constructor() {
                    super(...arguments),
                        this.curVal = this.value
                }
                eventHandler(e) {
                    this.$emit(e)
                }
                get intLengthComputed() {
                    return parseInt(this.intLength, 10)
                }
                get decimalLengthComputed() {
                    return parseInt(this.decimalLength, 10)
                }
                get maxlength() {
                    return this.decimalLengthComputed > 0 ? this.intLengthComputed + 1 + this.decimalLengthComputed : this.intLengthComputed
                }
                get replaceReg() {
                    return this.decimalLengthComputed > 0 ? /([^\d.])/g : /([^\d])/g
                }
            }
        ;
        u.__decorate([Object(d.h)({
            type: String,
            default: ""
        })], Ve.prototype, "placeholder", void 0),
            u.__decorate([Object(d.h)({
                type: String,
                required: !0
            })], Ve.prototype, "value", void 0),
            u.__decorate([Object(d.h)({
                type: Number,
                default: 6
            })], Ve.prototype, "intLength", void 0),
            u.__decorate([Object(d.h)({
                type: Number,
                default: 0
            })], Ve.prototype, "decimalLength", void 0),
            Ve = u.__decorate([Object(d.a)({
                watch: {
                    curVal(e) {
                        e = e.replace(this.replaceReg, ()=>""),
                            this.$refs.input.value = e;
                        let t = "";
                        const n = e.split(".");
                        t += n[0].slice(0, this.intLengthComputed),
                        n.length >= 2 && "" !== t && (t += ".".concat(n[1].slice(0, this.decimalLengthComputed))),
                            this.$refs.input.value = t,
                            this.curVal = t,
                            this.$emit("input", t)
                    },
                    value(e) {
                        this.curVal = e
                    }
                }
            })], Ve);
        var We = Ve
            , Je = We
            , Xe = (n("9Uo4"),
            Object(y.a)(Je, function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.curVal,
                        expression: "curVal"
                    }],
                    ref: "input",
                    attrs: {
                        placeholder: e.placeholder,
                        maxlength: e.maxlength,
                        type: "text"
                    },
                    domProps: {
                        value: e.curVal
                    },
                    on: {
                        focus: function(t) {
                            return e.eventHandler("focus")
                        },
                        input: function(t) {
                            t.target.composing || (e.curVal = t.target.value)
                        }
                    }
                })
            }, [], !1, null, "151f54bc", null))
            , Ye = Xe.exports
            , Ze = n("pqvc");
        function et(e, t, n, i, r, o, s) {
            try {
                var a = e[o](s)
                    , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, r)
        }
        let tt = class extends d.i {
                constructor() {
                    super(...arguments),
                        this.showQrcode = !1,
                        this.agreement = !0,
                        this.money = "",
                        this.disabled = !1,
                        this.rechargeList = [6, 30, 58, 98, 198, 688, 1688],
                        this.curRechargeIndex = 0,
                        this.rechargeType = "quick"
                }
                handleKsOrderChange(e) {
                    this.giftSendModel.polling = !0,
                        this.timeoutId = setTimeout(()=>{
                                this.giftSendModel.polling = !1,
                                    h.a.$emit("showRechargeResult", {
                                        type: "timeout"
                                    }),
                                    this.$refs.modal.hide()
                            }
                            , 6e4)
                }
                handlePayResultChange(e) {
                    1 === e && (h.a.$emit("showRechargeResult", {
                        type: "success"
                    }),
                        this.giftSendModel.polling = !1,
                        this.$refs.modal.hide(),
                        clearTimeout(this.timeoutId))
                }
                changeAccount() {
                    var e = this;
                    return function(e) {
                        return function() {
                            var t = this
                                , n = arguments;
                            return new Promise(function(i, r) {
                                    var o = e.apply(t, n);
                                    function s(e) {
                                        et(o, i, r, s, a, "next", e)
                                    }
                                    function a(e) {
                                        et(o, i, r, s, a, "throw", e)
                                    }
                                    s(void 0)
                                }
                            )
                        }
                    }(function*() {
                        yield e.userModel.logout(),
                            e.$refs.modal.hide(),
                            h.a.$emit("showUserModal", {
                                type: "login"
                            })
                    })()
                }
                prePay() {
                    this.showQrcode = !0,
                        this.giftSendModel.prePayInput.ksCoin = this.ksCoinRecharge,
                        this.giftSendModel.prePayInput.fen = Math.round(100 * this.moneyPay),
                        this.giftSendModel.prePayInput.timeStamp = +new Date
                }
                back() {
                    this.showQrcode = !1,
                        this.giftSendModel.polling = !1,
                        clearTimeout(this.timeoutId)
                }
                afterHide() {
                    this.showQrcode = !1,
                        this.agreement = !0,
                        this.money = "",
                        this.giftSendModel.polling = !1,
                        clearTimeout(this.timeoutId),
                        this.curRechargeIndex = 0,
                        this.rechargeType = "quick"
                }
                afterShow() {
                    this.$sendLog({
                        type: "show",
                        show_name: "charge",
                        show_value: {
                            balance: this.giftSendModel.ksCoin
                        }
                    })
                }
                focus() {
                    this.rechargeType = "custom"
                }
                changeRecharge(e) {
                    this.curRechargeIndex = e,
                        this.rechargeType = "quick"
                }
                get userInfo() {
                    return this.userModel.userInfo
                }
                get title() {
                    return this.showQrcode ? "扫码支付" : "充值"
                }
                get canGoPrePay() {
                    return this.agreement && this.ksCoinRecharge > 0
                }
                get moneyPay() {
                    return "quick" === this.rechargeType ? this.rechargeList[this.curRechargeIndex] : parseFloat(this.money)
                }
                get ksCoinRecharge() {
                    return "quick" === this.rechargeType ? this.rechargeList[this.curRechargeIndex] * this.giftSendModel.depositRate : this.money ? Math.round(this.giftSendModel.depositRate * +this.money) : 0
                }
                mounted() {
                    var e = this;
                    h.a.$on("recharge", function() {
                        let {money: t} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        void 0 !== t && (e.money = t,
                            e.rechargeType = "custom"),
                            e.$refs.modal.show()
                    })
                }
                beforeDestroy() {
                    h.a.$off("recharge")
                }
            }
        ;
        u.__decorate([Object(d.g)(F.a)], tt.prototype, "userModel", void 0),
            u.__decorate([Object(d.g)(Ze.a)], tt.prototype, "giftSendModel", void 0),
            u.__decorate([Object(d.j)("giftSendModel.ksOrderId")], tt.prototype, "handleKsOrderChange", null),
            u.__decorate([Object(d.j)("giftSendModel.payResult")], tt.prototype, "handlePayResultChange", null),
            tt = u.__decorate([Object(d.a)({
                components: {
                    qrcode: Ke.a,
                    modal: f.a,
                    plButton: p.a,
                    plCheckbox: He.a,
                    priceInput: Ye
                }
            })], tt);
        var nt = tt
            , it = nt
            , rt = (n("iVog"),
            Object(y.a)(it, function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("modal", {
                    ref: "modal",
                    attrs: {
                        title: e.title,
                        "close-on-click-modal": "",
                        width: "700px"
                    },
                    on: {
                        "after-hide": e.afterHide,
                        "after-show": e.afterShow
                    }
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.showQrcode,
                        expression: "!showQrcode"
                    }],
                    staticClass: "recharge"
                }, [n("ul", [n("li", [n("div", {
                    staticClass: "title"
                }, [e._v("充值账号")]), e._v(" "), n("div", {
                    staticClass: "con"
                }, [e.userInfo.kwaiId ? n("span", {
                    staticClass: "account"
                }, [e._v("\n                        " + e._s(e.userInfo.name) + "(快手号:" + e._s(e.userInfo.kwaiId) + ")\n                    ")]) : n("span", {
                    staticClass: "account"
                }, [e._v(" " + e._s(e.userInfo.name) + "(快手ID:" + e._s(e.userInfo.userId) + ") ")]), e._v(" "), n("a", {
                    attrs: {
                        href: "javascript:void(0)"
                    },
                    on: {
                        click: e.changeAccount
                    }
                }, [e._v(" [切换账号] ")])])]), e._v(" "), n("li", [n("div", {
                    staticClass: "title"
                }, [e._v("账号余额")]), e._v(" "), n("div", {
                    staticClass: "con"
                }, [n("span", {
                    staticClass: "kwai-ico"
                }, [n("i", {
                    staticClass: "kwai-num"
                }, [e._v(" " + e._s(e.giftSendModel.ksCoin) + " ")]), e._v(" 个\n                    ")])])]), e._v(" "), n("li", [n("div", {
                    staticClass: "title"
                }, [e._v("\n                    充值金额 "), n("span", {
                    staticClass: "deposit-rate"
                }, [e._v(" 1元=" + e._s(e.giftSendModel.depositRate) + "快币 ")])]), e._v(" "), n("div", {
                    staticClass: "con"
                }, [n("div", {
                    staticClass: "recharge-input"
                }, [e._l(e.rechargeList, function(t, i) {
                    return n("span", {
                        class: {
                            cur: e.curRechargeIndex === i && "quick" === e.rechargeType
                        },
                        on: {
                            click: function(t) {
                                return e.changeRecharge(i)
                            }
                        }
                    }, [e._v("\n                            " + e._s(t) + "元\n                        ")])
                }), e._v(" "), n("price-input", {
                    ref: "priceInput",
                    staticClass: "recharge-input-area",
                    class: {
                        cur: "custom" === e.rechargeType
                    },
                    attrs: {
                        placeholder: "其他金额",
                        "int-length": 6,
                        "decimal-length": 1
                    },
                    on: {
                        focus: e.focus
                    },
                    model: {
                        value: e.money,
                        callback: function(t) {
                            e.money = t
                        },
                        expression: "money"
                    }
                })], 2)])]), e._v(" "), n("li", [n("div", {
                    staticClass: "title"
                }, [e._v("充值快币数")]), e._v(" "), n("div", {
                    staticClass: "con"
                }, [n("i", {
                    staticClass: "kwai-num"
                }, [e._v(" " + e._s(e.ksCoinRecharge) + " ")]), e._v(" 个\n                ")])])]), e._v(" "), n("div", {
                    staticClass: "agreement"
                }, [n("pl-checkbox", {
                    model: {
                        value: e.agreement,
                        callback: function(t) {
                            e.agreement = t
                        },
                        expression: "agreement"
                    }
                }, [e._v("\n                同意"), n("a", {
                    attrs: {
                        href: "https://www.kuaishou.com/about/policy",
                        target: "_blank",
                        rel: "noopener"
                    }
                }, [e._v("\n                    服务条款及隐私政策\n                ")])])], 1), e._v(" "), e.canGoPrePay ? n("pl-button", {
                    directives: [{
                        name: "log",
                        rawName: "v-log",
                        value: {
                            type: "click",
                            event_name: "pay",
                            event_value: {
                                charge: e.moneyPay,
                                balance: e.giftSendModel.ksCoin
                            }
                        },
                        expression: "{\n                type: 'click',\n                event_name: 'pay',\n                event_value: {\n                    charge: moneyPay,\n                    balance: giftSendModel.ksCoin,\n                },\n            }"
                    }],
                    staticClass: "recharge-btn",
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: e.prePay
                    }
                }, [e._v("\n            前往支付\n        ")]) : n("pl-button", {
                    staticClass: "recharge-btn",
                    attrs: {
                        type: "primary",
                        disabled: ""
                    },
                    on: {
                        click: e.prePay
                    }
                }, [e._v(" 前往支付 ")])], 1), e._v(" "), n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.showQrcode,
                        expression: "showQrcode"
                    }],
                    staticClass: "recharge qrcode-box"
                }, [n("span", {
                    staticClass: "back",
                    on: {
                        click: e.back
                    }
                }), e._v(" "), n("h3", [e._v("微信或支付宝支付" + e._s(e.moneyPay) + "元")]), e._v(" "), n("qrcode", {
                    attrs: {
                        size: "200",
                        text: e.giftSendModel.perPayUrl
                    }
                })], 1)])
            }, [], !1, null, "7d64969e", null))
            , ot = rt.exports
            , st = n("jP3h");
        let at = class extends d.i {
                show() {
                    this.$refs.modal.show()
                }
                mounted() {
                    h.a.$on("show-kwai-ying", this.show)
                }
                beforeDestroy() {
                    h.a.$off("show-kwai-ying", this.show)
                }
            }
        ;
        at = u.__decorate([Object(d.a)({
            components: {
                modal: f.a,
                qrContent: st.a
            }
        })], at);
        var ct = at
            , lt = ct
            , ut = (n("x/WW"),
            Object(y.a)(lt, function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("modal", {
                    ref: "modal",
                    staticClass: "kwai-ying-modal",
                    attrs: {
                        width: "435px"
                    }
                }, [n("div", {
                    staticClass: "kwai-ying"
                }, [n("p", {
                    staticClass: "kwai-ying-title"
                }, [e._v("下载快影 轻松编辑游戏短视频")]), e._v(" "), n("div", {
                    staticClass: "kwai-ying-qr-container"
                }, [n("qr-content", {
                    attrs: {
                        size: 160
                    }
                }), e._v(" "), n("div", {
                    staticClass: "circle-yellow"
                }), e._v(" "), n("div", {
                    staticClass: "circle-blue"
                }), e._v(" "), n("div", {
                    staticClass: "circle-red"
                })], 1), e._v(" "), n("p", {
                    staticClass: "kwai-ying-info"
                }, [e._v("扫码下载 "), n("span", {
                    staticClass: "kwai-ying-info-active"
                }, [e._v("快影APP")])]), e._v(" "), n("a", {
                    staticClass: "kwai-ying-website",
                    attrs: {
                        href: "https://www.kuaishou.com/kuaiying",
                        target: "_blank"
                    }
                }, [e._v("去官网看看")]), e._v(" "), n("div", {
                    staticClass: "kwai-ying-close",
                    on: {
                        click: function(t) {
                            return e.$refs.modal.hide()
                        }
                    }
                })])])
            }, [], !1, null, "7e877923", null))
            , dt = ut.exports
            , ht = n("tRQO")
            , pt = n("z/if")
            , ft = n.n(pt);
        function vt(e, t, n, i, r, o, s) {
            try {
                var a = e[o](s)
                    , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, r)
        }
        function mt(e) {
            return function() {
                var t = this
                    , n = arguments;
                return new Promise(function(i, r) {
                        var o = e.apply(t, n);
                        function s(e) {
                            vt(o, i, r, s, a, "next", e)
                        }
                        function a(e) {
                            vt(o, i, r, s, a, "throw", e)
                        }
                        s(void 0)
                    }
                )
            }
        }
        function gt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}
                    , i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))),
                    i.forEach(function(t) {
                        yt(e, t, n[t])
                    })
            }
            return e
        }
        function yt(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
                e
        }
        const bt = 3;
        class _t {
            constructor(e) {
                let {x: t, y: n, u: i, v: r} = e;
                this.x = t,
                    this.y = n,
                    this.u = i,
                    this.v = r
            }
        }
        class wt {
            constructor(e, t, n) {
                this.p0 = e,
                    this.p1 = t,
                    this.p2 = n
            }
            drawMeshLineToContext(e, t) {
                const n = e[this.p0]
                    , i = e[this.p1]
                    , r = e[this.p2];
                t.moveTo(n.x, n.y),
                    t.lineTo(i.x, i.y),
                    t.lineTo(r.x, r.y),
                    t.lineTo(n.x, n.y)
            }
            drawImageToContext(e, t, n) {
                const i = e[this.p0]
                    , r = e[this.p1]
                    , o = e[this.p2];
                wt.drawImageToContextWithPoints(t, n, i.x, i.y, r.x, r.y, o.x, o.y, i.u, i.v, r.u, r.v, o.u, o.v)
            }
            static extendVert(e, t, n, i, r, o) {
                const s = 2 * e - n - r
                    , a = 2 * t - i - o
                    , c = Math.sqrt(bt / (s * s + a * a));
                return [e + s * c, t + a * c]
            }
            static drawImageToContextWithPoints(e, t, n, i, r, o, s, a, c, l, u, d, h, p) {
                c *= e.width,
                    u *= e.width,
                    h *= e.width,
                    l *= e.height,
                    d *= e.height,
                    p *= e.height;
                const f = wt.extendVert(n, i, r, o, s, a)
                    , v = wt.extendVert(r, o, n, i, s, a)
                    , m = wt.extendVert(s, a, r, o, n, i);
                t.beginPath(),
                    t.moveTo(f[0], f[1]),
                    t.lineTo(v[0], v[1]),
                    t.lineTo(m[0], m[1]),
                    t.closePath(),
                    r -= n,
                    o -= i,
                    s -= n,
                    a -= i,
                    u -= c,
                    d -= l,
                    h -= c,
                    p -= l;
                const g = 1 / (u * p - h * d)
                    , y = (p * r - d * s) * g
                    , b = (p * o - d * a) * g
                    , _ = (u * s - h * r) * g
                    , w = (u * a - h * o) * g
                    , k = n - y * c - _ * l
                    , I = i - b * c - w * l;
                t.save(),
                    t.transform(y, b, _, w, k, I),
                    t.clip(),
                    t.drawImage(e, 0, 0),
                    t.restore()
            }
        }
        class kt {
            constructor() {
                this.points = [],
                    this.verts = []
            }
            move(e, t) {
                for (const n of this.points)
                    n.x += e,
                        n.y += t
            }
            drawMeshLine(e) {
                e.save(),
                    e.lineWidth = .5,
                    e.strokeStyle = "#0000ff";
                for (const t of this.verts)
                    t.drawMeshLineToContext(this.points, e);
                e.stroke(),
                    e.restore()
            }
            drawImageToContext(e, t) {
                for (const n of this.verts)
                    n.drawImageToContext(this.points, e, t)
            }
            static createMapMesh(e, t, n, i) {
                const r = new kt
                    , o = e / n
                    , s = t / i
                    , a = 1 / n
                    , c = 1 / i;
                for (let e = 0; e <= i; e++)
                    for (let t = 0; t <= n; t++)
                        r.points.push(new _t({
                            x: t * o,
                            y: e * s,
                            u: t * a,
                            v: e * c
                        }));
                for (let e = 0; e < i; e++)
                    for (let t = 0; t < n; t++) {
                        const i = (n + 1) * e + t;
                        r.verts.push(new wt(i + 1,i,i + n + 1)),
                            r.verts.push(new wt(i + n + 1,i + n + 2,i + 1))
                    }
                return r
            }
        }
        function It(e, t, n, i, r) {
            return e * (1 - r) ** 3 + 3 * t * r * (1 - r) ** 2 + 3 * n * r ** 2 * (1 - r) + i * r ** 3
        }
        function xt(e, t, n, i) {
            return It.bind(null, e, t, n, i)
        }
        function Ct(e, t, n, i) {
            return function e(t, n, i, r, o) {
                let s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : .5;
                const a = It(t, n, i, r, s);
                return a > o + 1 ? e(t, n, i, r, o, s - s / 2) : a < o - 1 ? e(t, n, i, r, o, s + s / 2) : s
            }
                .bind(null, e, t, n, i)
        }
        function Ot(e, t) {
            const n = {
                x: (t.x - e.x) / 2 + e.x,
                y: e.y
            }
                , i = {
                x: (t.x - e.x) / 2 + e.x,
                y: t.y
            };
            return {
                bezierTX: Ct(e.x, n.x, i.x, t.x),
                bezierTY: Ct(e.y, n.y, i.y, t.y)
            }
        }
        function Pt(e, t) {
            const n = {
                x: (t.x - e.x) / 2 + e.x,
                y: e.y
            }
                , i = {
                x: (t.x - e.x) / 2 + e.x,
                y: t.y
            };
            return {
                bezierPointX: xt(e.x, n.x, i.x, t.x),
                bezierPointY: xt(e.y, n.y, i.y, t.y)
            }
        }
        const Lt = 6;
        class St {
            constructor(e, t, n) {
                this.startRectInfo = t,
                    this.endRectInfo = n,
                    this.img = e
            }
            fold() {
                var e = this;
                return new Promise(function() {
                    var t = mt(function*(t) {
                        if ("string" == typeof e.img) {
                            const n = new Image;
                            return n.src = e.img,
                                void (n.onload = mt(function*() {
                                    e.img = n,
                                        yield e.init(),
                                        t()
                                }))
                        }
                        yield e.init(),
                            t()
                    });
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }())
            }
            init() {
                var e = this;
                return mt(function*() {
                    e.transformPointsInfo(),
                        e.initCanvas(),
                        yield e.draw()
                })()
            }
            transformPointsInfo() {
                this.topStartPoint = {
                    x: 0,
                    y: 0
                },
                    this.topEndPoint = {
                        x: this.endRectInfo.left - this.startRectInfo.left,
                        y: this.endRectInfo.top - this.startRectInfo.top
                    },
                    this.bottomStartPoint = {
                        x: 0,
                        y: this.startRectInfo.height
                    },
                    this.bottomEndPoint = {
                        x: this.endRectInfo.left - this.startRectInfo.left,
                        y: this.endRectInfo.top - this.startRectInfo.top + this.endRectInfo.height
                    }
            }
            initCanvas() {
                this.canvas = document.createElement("canvas"),
                    this.ctx = this.canvas.getContext("2d"),
                    this.canvas.style.cssText = "\n            position: fixed;\n            top: ".concat(this.startRectInfo.top, "px;\n            left: ").concat(this.startRectInfo.left, "px;\n            z-index: 50;"),
                    this.canvas.width = this.endRectInfo.left - this.startRectInfo.left + this.endRectInfo.width,
                    this.canvas.height = this.endRectInfo.top - this.startRectInfo.top + this.endRectInfo.height,
                    document.body.appendChild(this.canvas)
            }
            draw() {
                var e = this;
                return mt(function*() {
                    yield function(e, t) {
                        var n = this;
                        let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 800;
                        return new Promise(r=>{
                                let o = 0
                                    , s = Math.ceil(i / 60);
                                const a = 1 / s
                                    , c = gt({}, this.topStartPoint)
                                    , l = gt({}, this.topEndPoint, {
                                    y: this.topStartPoint.y
                                })
                                    , u = gt({}, this.bottomStartPoint)
                                    , d = gt({}, this.bottomEndPoint, {
                                    y: this.bottomStartPoint.y
                                })
                                    , h = function() {
                                    var i = mt(function*() {
                                        const i = kt.createMapMesh(0, 0, Lt, 1)
                                            , {bezierPointX: p, bezierPointY: f} = Pt(c, l)
                                            , {bezierPointX: v, bezierPointY: m} = Pt(u, d)
                                            , {bezierTX: g} = Ot(c, l)
                                            , y = g(n.startRectInfo.width)
                                            , b = i.points.length / 2;
                                        for (let e = 0; e < i.points.length; e++)
                                            e < i.points.length / 2 ? (i.points[e].x = p(y / Lt * e),
                                                i.points[e].y = f(y / Lt * e),
                                                i.points[e].y = i.points[e].x > l.x - c.x ? l.y : i.points[e].y) : (i.points[e].x = v(y / Lt * (e - b)),
                                                i.points[e].y = m(y / Lt * (e - b)),
                                                i.points[e].y = i.points[e].x > l.x - c.x ? d.y : i.points[e].y);
                                        n.clearCanvas(),
                                            i.drawImageToContext(t, e),
                                            s ? requestAnimationFrame(()=>{
                                                    o += a,
                                                        o = o > 1 ? 1 : o,
                                                        l.y = 0 + o * n.topEndPoint.y,
                                                        d.y = n.bottomStartPoint.y + o * (n.bottomEndPoint.y - n.bottomStartPoint.y),
                                                        h()
                                                }
                                            ) : r(),
                                            s--
                                    });
                                    return function() {
                                        return i.apply(this, arguments)
                                    }
                                }();
                                h()
                            }
                        )
                    }
                        .call(e, e.ctx, e.img),
                        yield function(e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1200;
                            return new Promise(i=>{
                                    let r = 0
                                        , o = Math.ceil(n / 60);
                                    const s = 1 / o
                                        , a = ()=>{
                                            const n = this.startRectInfo.width - 280 * r > 55 ? this.startRectInfo.width - 280 * r : 55
                                                , c = kt.createMapMesh(n, 0, Lt, 1)
                                                , {bezierPointX: l, bezierPointY: u} = Pt(this.topStartPoint, this.topEndPoint)
                                                , {bezierPointX: d, bezierPointY: h} = Pt(this.bottomStartPoint, this.bottomEndPoint)
                                                , {bezierTX: p} = Ot(this.topStartPoint, this.topEndPoint)
                                                , f = p(n)
                                                , v = c.points.length / 2;
                                            for (let e = 0; e < c.points.length; e++)
                                                e < c.points.length / 2 ? (c.points[e].x = l(f / Lt * e + r),
                                                    c.points[e].y = u(f / Lt * e + r),
                                                    c.points[e].y = c.points[e].x > this.topEndPoint.x - this.topStartPoint.x ? this.topEndPoint.y : c.points[e].y) : (c.points[e].x = d(f / Lt * (e - v) + r),
                                                    c.points[e].y = h(f / Lt * (e - v) + r),
                                                    c.points[e].y = c.points[e].x > this.topEndPoint.x - this.topStartPoint.x ? this.bottomEndPoint.y : c.points[e].y);
                                            this.clearCanvas(),
                                                c.drawImageToContext(t, e),
                                                o ? requestAnimationFrame(()=>{
                                                        r += s,
                                                            a()
                                                    }
                                                ) : i(),
                                                o--
                                        }
                                    ;
                                    a()
                                }
                            )
                        }
                            .call(e, e.ctx, e.img)
                })()
            }
            destroy() {
                this.clearCanvas(),
                    document.body.removeChild(this.canvas)
            }
            clearCanvas() {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
            }
        }
        function $t(e, t, n, i, r, o, s) {
            try {
                var a = e[o](s)
                    , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, r)
        }
        function Tt(e) {
            return function() {
                var t = this
                    , n = arguments;
                return new Promise(function(i, r) {
                        var o = e.apply(t, n);
                        function s(e) {
                            $t(o, i, r, s, a, "next", e)
                        }
                        function a(e) {
                            $t(o, i, r, s, a, "throw", e)
                        }
                        s(void 0)
                    }
                )
            }
        }
        let jt = class extends d.i {
                constructor() {
                    super(...arguments),
                        this.liveStreamId = null,
                        this.playUrls = [],
                        this.poster = "",
                        this.fold = 1 === ft()("kslive.miniPlayer.fold"),
                        this.user = {},
                        this.position = {
                            bottom: 20,
                            right: 20
                        },
                        this.minifyIcon = n("TPB0"),
                        this.spreadIcon = n("f0nO"),
                        this.isMoving = !1,
                        this.max = {
                            bottom: 0,
                            right: 0
                        },
                        this.startPositionInfo = {
                            x: 0,
                            y: 0,
                            bottom: 0,
                            right: 0
                        },
                        this.showFold = 1 === ft()("kslive.miniPlayer.fold"),
                        this.canJumpLiveDetail = !0
                }
                enter(e, t) {
                    t()
                }
                leave(e, t) {
                    var n = this;
                    return Tt(function*() {
                        const i = n.$refs.playerContainer;
                        if (n.$isServer)
                            return void t();
                        n.showFold = !1;
                        const r = i.getBoundingClientRect();
                        if (!r.width)
                            return void t();
                        e.style.display = "none";
                        const o = {
                            left: window.innerWidth - 50,
                            top: window.innerHeight - 53,
                            width: 50,
                            height: 33
                        }
                            , s = new St(n.poster,r,o);
                        yield s.fold(),
                            s.destroy(),
                            n.showFold = !0,
                            t()
                    })()
                }
                visibilityChange() {
                    "visible" !== document.visibilityState && this.$refs.player ? ("function" == typeof this.$refs.player.finishLogger && this.$refs.player.finishLogger(),
                    "function" == typeof this.$refs.player.pause && this.$refs.player.pause()) : this.play()
                }
                play() {
                    var e = this;
                    return Tt(function*() {
                        e.fold && e.liveStreamId || (yield e.$nextTick(),
                        !e.fold && e.liveStreamId && e.$refs.player.loadLive({
                            liveStreamId: e.liveStreamId,
                            playUrls: e.playUrls,
                            quality: "standard"
                        }))
                    })()
                }
                eventHandler(e) {
                    let {type: t, data: n} = e;
                    "stop" !== t ? (Object.assign(this, n),
                        this.fold = !1,
                        this.resetPosition(),
                        this.$sendLog({
                            type: "show",
                            show_name: "mini_player",
                            show_value: {
                                id: this.liveStreamId
                            }
                        }),
                        this.play()) : this.liveStreamId = null
                }
                toggleFold() {
                    this.fold = !this.fold,
                        this.play()
                }
                resetPosition() {
                    this.position = {
                        bottom: 20,
                        right: 20
                    }
                }
                startMove(e) {
                    const t = this.$refs.playerContainer
                        , {width: n, height: i} = t.getBoundingClientRect();
                    this.isMoving = !0,
                        this.startPositionInfo.x = e.clientX,
                        this.startPositionInfo.y = e.clientY,
                        this.startPositionInfo.bottom = this.position.bottom,
                        this.startPositionInfo.right = this.position.right,
                        this.max.bottom = window.innerHeight - i,
                        this.max.right = window.innerWidth - n,
                        this.$sendLog({
                            type: "click",
                            event_name: "move",
                            event_value: {
                                id: this.liveStreamId,
                                target: "mini_player"
                            }
                        })
                }
                stopMove() {
                    this.isMoving = !1
                }
                move(e) {
                    if (!this.isMoving)
                        return;
                    const t = this.startPositionInfo.y - e.clientY + this.startPositionInfo.bottom
                        , n = this.startPositionInfo.x - e.clientX + this.startPositionInfo.right;
                    this.position.bottom = Math.max(Math.min(t, this.max.bottom), 0),
                        this.position.right = Math.max(Math.min(n, this.max.right), 0)
                }
                mounted() {
                    document.addEventListener("visibilitychange", this.visibilityChange),
                        document.addEventListener("mouseup", this.stopMove),
                        document.addEventListener("mousemove", this.move),
                        h.a.$on("mini-play", this.eventHandler)
                }
                beforeDestroy() {
                    document.removeEventListener("visibilitychange", this.visibilityChange)
                }
            }
        ;
        jt = u.__decorate([Object(d.a)({
            components: {
                livePlayer: ht.a
            },
            watch: {
                fold(e) {
                    ft()("kslive.miniPlayer.fold", +e)
                }
            }
        })], jt);
        var Mt = jt
            , Et = Mt
            , Rt = (n("iitJ"),
            Object(y.a)(Et, function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return e.liveStreamId ? n("div", {
                    staticClass: "mini-player"
                }, [n("transition", {
                    attrs: {
                        css: !1
                    },
                    on: {
                        enter: e.enter,
                        leave: e.leave
                    }
                }, [e.liveStreamId && !e.fold ? n("div", {
                    ref: "playerContainer",
                    staticClass: "player",
                    style: {
                        bottom: e.position.bottom + "px",
                        right: e.position.right + "px"
                    },
                    on: {
                        mousedown: function(t) {
                            return e.startMove(t)
                        }
                    }
                }, [n("live-player", {
                    ref: "player",
                    attrs: {
                        type: "mini",
                        poster: e.poster,
                        muted: ""
                    }
                }), e._v(" "), n("header", {
                    class: {
                        moving: e.isMoving
                    }
                }, [n("h5", [e._v(e._s(e.user.name) + "的直播间")]), e._v(" "), n("span", {
                    directives: [{
                        name: "log",
                        rawName: "v-log",
                        value: {
                            type: "click",
                            event_name: "minimize",
                            event_value: {
                                id: "" + e.liveStreamId,
                                target: "mini_player"
                            }
                        },
                        expression: "{\n                        type: 'click',\n                        event_name: 'minimize',\n                        event_value: {\n                            id: `${liveStreamId}`,\n                            target: 'mini_player',\n                        },\n                    }"
                    }],
                    staticClass: "minify",
                    domProps: {
                        innerHTML: e._s(e.minifyIcon)
                    },
                    on: {
                        click: e.toggleFold,
                        mousedown: function(e) {
                            e.stopPropagation()
                        }
                    }
                })]), e._v(" "), e.canJumpLiveDetail ? n("div", {
                    directives: [{
                        name: "log",
                        rawName: "v-log",
                        value: {
                            type: "click",
                            event_name: "enter",
                            event_value: {
                                id: "" + e.liveStreamId,
                                target: "live",
                                source: "mini_player"
                            }
                        },
                        expression: "{\n                    type: 'click',\n                    event_name: 'enter',\n                    event_value: {\n                        id: `${liveStreamId}`,\n                        target: 'live',\n                        source: 'mini_player',\n                    },\n                }"
                    }],
                    ref: "enterDetailButton",
                    staticClass: "enter-detail",
                    domProps: {
                        innerHTML: e._s(e.spreadIcon)
                    },
                    on: {
                        click: function(t) {
                            return e.$router.push("/u/" + e.user.id)
                        },
                        mousedown: function(e) {
                            e.stopPropagation()
                        }
                    }
                }) : e._e()], 1) : e._e()]), e._v(" "), e.fold && e.showFold ? n("span", {
                    directives: [{
                        name: "log",
                        rawName: "v-log",
                        value: {
                            type: "click",
                            event_name: "open",
                            event_value: {
                                id: "" + e.liveStreamId,
                                target: "mini_player"
                            }
                        },
                        expression: "{\n            type: 'click',\n            event_name: 'open',\n            event_value: {\n                id: `${liveStreamId}`,\n                target: 'mini_player',\n            },\n        }"
                    }],
                    staticClass: "spread-icon",
                    on: {
                        click: e.toggleFold,
                        mousedown: function(e) {
                            e.stopPropagation()
                        }
                    }
                }, [e._v("\n        LIVE\n    ")]) : e._e()], 1) : e._e()
            }, [], !1, null, "72957142", null))
            , qt = Rt.exports;
        function At(e, t, n, i, r, o, s) {
            try {
                var a = e[o](s)
                    , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, r)
        }
        function Dt(e) {
            return function() {
                var t = this
                    , n = arguments;
                return new Promise(function(i, r) {
                        var o = e.apply(t, n);
                        function s(e) {
                            At(o, i, r, s, a, "next", e)
                        }
                        function a(e) {
                            At(o, i, r, s, a, "throw", e)
                        }
                        s(void 0)
                    }
                )
            }
        }
        let Nt = class extends d.i {
                constructor() {
                    super(...arguments),
                        this.invisible = !0,
                        this.isEnd = !0,
                        this.isLoading = !1
                }
                start() {
                    var e = this;
                    return Dt(function*() {
                        e.isEnd = !1,
                            yield e.reflow(),
                            e.invisible = !1,
                            yield e.reflow(),
                            e.isLoading = !0
                    })()
                }
                reflow() {
                    var e = this;
                    return Dt(function*() {
                        yield e.$nextTick(),
                            e.$el.scrollTop
                    })()
                }
                end() {
                    this.isLoading = !1,
                        this.isEnd = !0,
                        setTimeout(()=>{
                                this.invisible = !0
                            }
                            , 200)
                }
                mounted() {
                    h.a.$on("set-loading", e=>{
                            e ? this.start() : this.end()
                        }
                    )
                }
            }
        ;
        Nt = u.__decorate([d.a], Nt);
        var Ut = Nt
            , Qt = Ut
            , Bt = (n("nvQl"),
            Object(y.a)(Qt, function() {
                var e = this.$createElement
                    , t = this._self._c || e;
                return t("div", {
                    staticClass: "loading",
                    class: {
                        animate: this.isLoading,
                        end: this.isEnd,
                        invisible: this.invisible
                    }
                })
            }, [], !1, null, "aa285eba", null))
            , Ft = Bt.exports
            , zt = n("oR4X")
            , Gt = n("MgXp")
            , Ht = (n("se+i"),
            n("d3+L"))
            , Kt = n("Y6Dz")
            , Vt = n("vDqi")
            , Wt = n.n(Vt);
        function Jt(e, t, n, i, r, o, s) {
            try {
                var a = e[o](s)
                    , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, r)
        }
        const Xt = n("Qyje")
            , Yt = {
            host: {
                listType: "live",
                reportUrl: "/rest/wd/live/report/author",
                paramsList: ["liveStreamId", "reportType", "detail"]
            },
            audience: {
                listType: "audience",
                reportUrl: "/rest/wd/live/report/audience",
                paramsList: ["liveStreamId", "reportedUserId", "reportType", "detail"]
            },
            danmaku: {
                listType: "audience",
                reportUrl: "/rest/wd/live/report/audience",
                paramsList: ["liveStreamId", "reportedUserId", "reportType", "detail"]
            },
            comment: {
                listType: "comment",
                reportUrl: "/rest/wd/live/report/comment",
                paramsList: ["photoId", "commentId", "reportType", "detail"]
            },
            user: {
                listType: "user",
                reportUrl: "/rest/wd/live/report/user",
                paramsList: ["reportedUserId", "reportType", "detail"]
            },
            photo: {
                listType: "photo",
                reportUrl: "/rest/wd/live/report/photo",
                paramsList: ["photoId", "principalId", "realPhotoUrl", "reportType", "detail"]
            },
            playback: {
                listType: "live_playback",
                reportUrl: "/rest/wd/live/report/playback",
                paramsList: ["offset", "productId", "reportType", "detail"]
            }
        };
        function Zt() {
            return Zt = function(e) {
                return function() {
                    var t = this
                        , n = arguments;
                    return new Promise(function(i, r) {
                            var o = e.apply(t, n);
                            function s(e) {
                                Jt(o, i, r, s, a, "next", e)
                            }
                            function a(e) {
                                Jt(o, i, r, s, a, "throw", e)
                            }
                            s(void 0)
                        }
                    )
                }
            }(function*(e, t) {
                const n = function(e, t) {
                    return {
                        url: Yt[e].reportUrl,
                        param: Yt[e].paramsList.reduce((e,n)=>(e[n] = t[n],
                            e), {})
                    }
                }(e, t);
                n.param.refer = "",
                    n.param.preRefer = "";
                const i = yield Wt.a.post(n.url, Xt.stringify(n.param));
                return i
            }),
                Zt.apply(this, arguments)
        }
        var en = n("k7+O")
            , tn = n.n(en);
        function nn() {
            const e = function(e, t) {
                t || (t = e.slice(0));
                return Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }(["\n            query ReportMenuList($sourceType: String) {\n                reportMenuList(sourceType: $sourceType) {\n                    actionId\n                    needDetail\n                    submitUrl\n                    title\n                    type\n                }\n            }\n        "]);
            return nn = function() {
                return e
            }
                ,
                e
        }
        const rn = {
            host: "live",
            audience: "audience",
            danmaku: "audience",
            comment: "comment",
            user: "user",
            photo: "photo",
            playback: "live_playback"
        };
        class on extends Ee.a {
            constructor() {
                super(...arguments),
                    this.reportType = ""
            }
            get reportList() {
                return this.reportMenuListQuery.data.reportMenuList
            }
        }
        function sn(e, t, n, i, r, o, s) {
            try {
                var a = e[o](s)
                    , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, r)
        }
        function an(e) {
            return function() {
                var t = this
                    , n = arguments;
                return new Promise(function(i, r) {
                        var o = e.apply(t, n);
                        function s(e) {
                            sn(o, i, r, s, a, "next", e)
                        }
                        function a(e) {
                            sn(o, i, r, s, a, "throw", e)
                        }
                        s(void 0)
                    }
                )
            }
        }
        u.__decorate([Object(Ee.d)({
            query: qe()(nn()),
            initState: {
                reportMenuList: []
            },
            variables() {
                return {
                    sourceType: rn[this.reportType]
                }
            },
            skip() {
                return !this.reportType
            },
            client: "graphqlServerClient"
        })], on.prototype, "reportMenuListQuery", void 0);
        const cn = {
            filling: "filling",
            success: "success",
            fail: "fail"
        }
            , ln = {
            host: "举报主播",
            danmaku: "举报弹幕",
            audience: "举报观众",
            comment: "举报评论",
            user: "举报用户",
            photo: "举报作品",
            playback: "举报直播回看"
        };
        let un = class extends d.i {
                constructor() {
                    super(...arguments),
                        this.report = {
                            value: "",
                            textAreaValue: ""
                        },
                        this.user = {
                            profile: "",
                            userName: "",
                            userId: ""
                        },
                        this.danmaku = {
                            content: ""
                        },
                        this.comment = {
                            commentId: ""
                        },
                        this.photo = {
                            principalId: "",
                            realPhotoUrl: ""
                        },
                        this.playback = {
                            offset: 0,
                            productId: ""
                        },
                        this.photoId = "",
                        this.statusMap = cn,
                        this.status = cn.filling
                }
                get textAreaDisable() {
                    const e = this.reportModel.reportList.find(e=>e.type === this.report.value);
                    return !e || !e.needDetail
                }
                get modalTitle() {
                    return this.status !== cn.filling ? "" : ln[this.reportModel.reportType] || ""
                }
                get buttonDisable() {
                    const e = this.reportModel.reportList.find(e=>e.type === this.report.value);
                    return !e || !!("" === this.report.value || e.needDetail && "" === this.report.textAreaValue)
                }
                show() {
                    tn.a.element && tn.a.exit(),
                        this.$refs.modal.show()
                }
                clearState() {
                    this.report.value = "",
                        this.report.textAreaValue = "",
                        this.status = cn.filling
                }
                afterHide() {
                    this.clearState()
                }
                submitReport() {
                    var e = this;
                    return an(function*() {
                        try {
                            yield function(e, t) {
                                return Zt.apply(this, arguments)
                            }(e.reportModel.reportType, {
                                photoId: e.photoId,
                                commentId: e.comment.commentId,
                                reportedUserId: e.user.userId,
                                liveStreamId: e.liveStreamId,
                                reportType: e.report.value,
                                detail: e.report.textAreaValue,
                                principalId: e.photo.principalId,
                                realPhotoUrl: e.photo.realPhotoUrl,
                                productId: e.playback.productId,
                                offset: e.playback.offset
                            }),
                                e.status = cn.success
                        } catch (t) {
                            e.status = cn.fail
                        }
                    })()
                }
                init(e, t) {
                    var n = this;
                    return an(function*() {
                        let {userInfo: i, content: r, comment: o, photo: s, playback: a, liveStreamId: c} = t;
                        n.reportModel.reportType = e,
                        i && (n.user.profile = i.profile,
                            n.user.userName = i.name,
                            n.user.userId = i.userId),
                        r && (n.danmaku.content = r),
                        o && (n.comment.commentId = o.commentId,
                            n.photoId = o.photoId),
                        s && (n.photoId = s.photoId,
                            n.photo.principalId = s.principalId,
                            n.photo.realPhotoUrl = s.realPhotoUrl),
                        a && (n.playback.productId = a.productId,
                            n.playback.offset = a.offset),
                        c && (n.liveStreamId = c),
                            n.show()
                    })()
                }
                mounted() {
                    h.a.$on("show-report", this.init)
                }
                beforeDestroy() {
                    h.a.$off("show-report")
                }
                "report.value"() {
                    var e = this;
                    return an(function*() {
                        const t = e.reportModel.reportList.find(t=>t.type === e.report.value);
                        t && t.needDetail ? (yield e.$nextTick(),
                            e.$refs.textarea.$el.focus()) : e.report.textAreaValue = ""
                    })()
                }
            }
        ;
        u.__decorate([Object(d.g)(on)], un.prototype, "reportModel", void 0),
            u.__decorate([Kt.a], un.prototype, "init", null),
            u.__decorate([Object(d.j)("report.value")], un.prototype, "report.value", null),
            un = u.__decorate([Object(d.a)({
                components: {
                    modal: f.a,
                    plButton: p.a,
                    plTextarea: Me.a,
                    plRadioGroup: Ht.a,
                    plRadio: Y.a
                }
            })], un);
        var dn = un
            , hn = dn
            , pn = (n("Lgak"),
            n("OJP/"),
            Object(y.a)(hn, function() {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("modal", {
                    ref: "modal",
                    staticClass: "report-modal",
                    attrs: {
                        width: "520px",
                        title: e.modalTitle
                    },
                    on: {
                        "after-hide": e.afterHide
                    }
                }, [e.status === e.statusMap.filling ? i("div", {
                    staticClass: "report"
                }, ["danmaku" !== e.reportModel.reportType ? i("div", {
                    staticClass: "report-header"
                }, [i("img", {
                    staticClass: "report-header-profile",
                    attrs: {
                        src: e.user.profile
                    }
                }), e._v(" "), i("span", {
                    staticClass: "report-header-username"
                }, [e._v(" " + e._s(e.user.userName) + " ")]), e._v(" "), i("span", {
                    staticClass: "report-header-userid"
                }, [e._v(" ID:" + e._s(e.user.userId) + " ")])]) : i("div", {
                    staticClass: "report-danmaku"
                }, [e._v(e._s(e.danmaku.content))]), e._v(" "), i("pl-radio-group", {
                    staticClass: "report-radio-group",
                    model: {
                        value: e.report.value,
                        callback: function(t) {
                            e.$set(e.report, "value", t)
                        },
                        expression: "report.value"
                    }
                }, e._l(e.reportModel.reportList, function(t) {
                    return i("pl-radio", {
                        key: t.type,
                        staticClass: "report-radio",
                        class: {
                            detail: t.needDetail
                        },
                        attrs: {
                            value: t.type
                        }
                    }, [e._v("\n                " + e._s(t.needDetail ? t.title + "(必须详细说明)" : t.title) + "\n            ")])
                }), 1), e._v(" "), i("pl-textarea", {
                    ref: "textarea",
                    staticClass: "report-textarea",
                    attrs: {
                        placeholder: "详细说明, 最多200字",
                        maxlength: "200",
                        disabled: e.textAreaDisable
                    },
                    model: {
                        value: e.report.textAreaValue,
                        callback: function(t) {
                            e.$set(e.report, "textAreaValue", "string" == typeof t ? t.trim() : t)
                        },
                        expression: "report.textAreaValue"
                    }
                }), e._v(" "), i("pl-button", {
                    attrs: {
                        type: "primary",
                        disabled: e.buttonDisable
                    },
                    on: {
                        click: e.submitReport
                    }
                }, [e._v(" 举 报 ")]), e._v(" "), i("span", {
                    staticClass: "content-length"
                }, [e._v(" " + e._s(e.report.textAreaValue.length) + "/200 ")])], 1) : e.status === e.statusMap.success ? i("div", {
                    staticClass: "report-info"
                }, [i("img", {
                    staticClass: "report-info-img",
                    attrs: {
                        src: n("Phb6")
                    }
                }), e._v(" "), i("div", {
                    staticClass: "report-info-result"
                }, [e._v("举报已发送")]), e._v(" "), i("div", {
                    staticClass: "report-info-tip"
                }, [e._v("感谢您的反馈让快手直播变得更健康！")])]) : e.status === e.statusMap.fail ? i("div", {
                    staticClass: "report-info"
                }, [i("img", {
                    staticClass: "report-info-img",
                    attrs: {
                        src: n("GtSK")
                    }
                }), e._v(" "), i("div", {
                    staticClass: "report-info-result"
                }, [e._v("举报未发出")]), e._v(" "), i("div", {
                    staticClass: "report-info-tip"
                }, [e._v("网络让您的反馈未发出，请刷新重试。")])]) : e._e(), e._v(" "), i("div", {
                    staticClass: "report-close",
                    on: {
                        click: function(t) {
                            return e.$refs.modal.hide()
                        }
                    }
                })])
            }, [], !1, null, "5ef81988", null))
            , fn = pn.exports;
        function vn(e, t, n, i, r, o, s) {
            try {
                var a = e[o](s)
                    , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, r)
        }
        function mn(e) {
            return function() {
                var t = this
                    , n = arguments;
                return new Promise(function(i, r) {
                        var o = e.apply(t, n);
                        function s(e) {
                            vn(o, i, r, s, a, "next", e)
                        }
                        function a(e) {
                            vn(o, i, r, s, a, "throw", e)
                        }
                        s(void 0)
                    }
                )
            }
        }
        const gn = {
            672: "你的账户处于异常状态，请在手机打开「快手」app进行相关操作"
        };
        let yn = class extends i.a {
                constructor() {
                    super(...arguments),
                        this.hasBeenForceLogin = !1
                }
                alert() {
                    let {title: e="注意", msg: t="服务器错误，请刷新重试"} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return this.$refs.alert.show({
                        title: e,
                        msg: t
                    })
                }
                confirm() {
                    var e = this
                        , t = arguments;
                    return mn(function*() {
                        let {title: n="注意", msg: i="服务器错误，请刷新重试"} = t.length > 0 && void 0 !== t[0] ? t[0] : {};
                        yield e.$refs.confirm.show({
                            title: n,
                            msg: i
                        })
                    })()
                }
                login() {
                    var e = this;
                    return mn(function*() {
                        e.userModel.userInfo.id || (yield e.userModel.getUserInfo())
                    })()
                }
                get routePath() {
                    return this.$route.matched && this.$route.matched.length && "/u/:principalId/:photoId" === this.$route.matched[0].path ? this.$route.path.match(/^\/u\/((?:[^\/]+?))\//)[0] : this.$route.path
                }
                mounted() {
                    var e = this;
                    return mn(function*() {
                        h.a.$on("global-error", t=>{
                                e.alert({
                                    msg: t.error_msg || gn[t.result]
                                })
                            }
                        ),
                            Gt.a.on("logout", ()=>{
                                    e.userModel.userInfo.id && e.userModel.logout()
                                }
                            ),
                            Gt.a.on("login", ()=>{
                                    e.userModel.userInfo.id || e.userModel.getUserInfo()
                                }
                            ),
                            h.a.$on("relogin", mn(function*() {
                                e.login()
                            })),
                            o.a.setUserContext({
                                id: e.configModel.did,
                                username: e.userModel.userInfo.id
                            });
                        try {
                            yield Object(zt.b)()
                        } catch (e) {
                            if (10011e4 !== e.result)
                                throw e
                        }
                    })()
                }
            }
        ;
        u.__decorate([Object(d.g)(F.a)], yn.prototype, "userModel", void 0),
            u.__decorate([Object(d.g)(oe.a)], yn.prototype, "configModel", void 0),
            yn = u.__decorate([Object(d.a)({
                components: {
                    plModalAlert: l.a,
                    plModalConfirm: c.a,
                    userModal: $e,
                    feedback: Ge,
                    recharge: ot,
                    miniPlayer: qt,
                    safariTip: _,
                    loadingBar: Ft,
                    report: fn,
                    kwaiYing: dt
                }
            })], yn);
        var bn = yn
            , _n = bn
            , wn = (n("MSMJ"),
            n("0J7F"),
            Object(y.a)(_n, function() {
                var e = this
                    , t = e.$createElement
                    , n = e._self._c || t;
                return n("div", {
                    attrs: {
                        id: "app"
                    }
                }, [n("router-view", {
                    key: e.routePath
                }), e._v(" "), n("pl-modal-alert", {
                    ref: "alert",
                    staticClass: "alert"
                }), e._v(" "), n("pl-modal-confirm", {
                    ref: "confirm",
                    staticClass: "confirm"
                }), e._v(" "), n("user-modal"), e._v(" "), n("feedback", {
                    ref: "feedback"
                }), e._v(" "), n("recharge", {
                    ref: "recharge"
                }), e._v(" "), n("mini-player"), e._v(" "), n("loading-bar"), e._v(" "), n("safari-tip"), e._v(" "), n("report"), e._v(" "), n("kwai-ying"), e._v(" "), e._m(0)], 1)
            }, [function() {
                var e = this.$createElement
                    , t = this._self._c || e;
                return t("div", {
                    staticClass: "shadow-area"
                }, [t("a", {
                    attrs: {
                        rel: "nofollow",
                        href: "/i/page/traffic/index.html"
                    }
                }, [this._v("快手直播电竞官方号")])])
            }
            ], !1, null, "00114179", null))
            , kn = wn.exports
            , In = (n("mNvP"),
            n("WMpq"))
            , xn = n("jE9Z")
            , Cn = [{
            path: "/activity/tpl/:activityId",
            name: "tpl",
            component: ()=>Promise.all([n.e(0), n.e(26)]).then(n.bind(null, "2Vvt"))
        }, {
            path: "/activity/mini-room",
            component: ()=>Promise.all([n.e(0), n.e(13)]).then(n.bind(null, "2Hka"))
        }];
        function On(e, t, n, i, r, o, s) {
            try {
                var a = e[o](s)
                    , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, r)
        }
        function Pn(e) {
            return function() {
                var t = this
                    , n = arguments;
                return new Promise(function(i, r) {
                        var o = e.apply(t, n);
                        function s(e) {
                            On(o, i, r, s, a, "next", e)
                        }
                        function a(e) {
                            On(o, i, r, s, a, "throw", e)
                        }
                        s(void 0)
                    }
                )
            }
        }
        i.a.use(xn.a);
        const Ln = Wt.a.post;
        function Sn(e, t) {
            t.placeholder && (t.src && (e.src = t.placeholder),
            t.backgroundUrl && (e.style.backgroundImage = "url(".concat(t.placeholder, ")")))
        }
        function $n(e, t) {
            const n = new IntersectionObserver(i=>{
                    i && i.length && i.some(e=>e.isIntersecting) && (!function(e, t) {
                        t.src && (e.src = t.src),
                        t.backgroundUrl && (e.style.backgroundImage = "url(".concat(t.backgroundUrl, ")"))
                    }(e, t),
                    n && (n.disconnect(),
                        e.intersectionObserver = null))
                }
                ,{
                    threshold: 0
                });
            n.observe(e),
                e.intersectionObserver = n
        }
        Wt.a.post = Pn(function*() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            if (!U.a)
                return Ln.call(this, ...t);
            try {
                const e = yield Ln.call(this, ...t);
                return e
            } catch (e) {
                if (109 != +e.result)
                    throw e;
                this.loginPromise || (this.loginPromise = Object(zt.b)(e)),
                    yield this.loginPromise,
                    this.loginPromise = null;
                const n = yield Ln.call(this, ...t);
                return n
            }
        }),
            Wt.a.interceptors.request.use(e=>(e.headers.kpn = "GAME_ZONE",
                e.headers.kpf = "PC_WEB",
                e.headers.Accept = "arraybuffer" === e.responseType ? "application/octet-stream" : "application/json",
                e.withCredentials = !0,
                e)),
            Wt.a.interceptors.response.use(e=>{
                    const t = "result"in e ? e : e.data;
                    if (t instanceof ArrayBuffer)
                        return t;
                    if (t && 1 == +t.result)
                        return t;
                    throw t || e
                }
            );
        var Tn = {
            bind(e, t) {
                let {value: n} = t;
                Sn(e, n),
                    $n(e, n)
            },
            update(e, t) {
                let {value: n} = t;
                Sn(e, n),
                e.intersectionObserver || $n(e, n)
            },
            unbind(e) {
                e.intersectionObserver && (e.intersectionObserver.disconnect(),
                    e.intersectionObserver = null)
            }
        }
            , jn = n("2tPk")
            , Mn = n.n(jn)
            , En = n("scx0")
            , Rn = n.n(En)
            , qn = n("A4q5")
            , An = n.n(qn)
            , Dn = n("O+0m")
            , Nn = n.n(Dn);
        i.a.directive("lazyload", Tn),
            i.a.config.productionTip = !U.b,
            i.a.config.performance = !U.b,
            i.a.config.silent = !U.b,
            i.a.use(Ee.e),
            i.a.use(In.a),
            i.a.use(Mn.a, {
                Stream: Rn.a,
                fromEvent: Nn.a
            }),
            i.a.use(An.a, {
                tagName: "svgicon",
                defaultWidth: "13px",
                defaultHeight: "13px"
            });
        n("vOCa");
        var Un = n("TJTp");
        i.a.mixin({
            methods: {
                $sendLog(e) {
                    Object(Un.a)(e)
                },
                $sendLogSync(e) {
                    Object(Un.c)(e)
                }
            }
        });
        class Qn {
            constructor() {
                let {el: e, value: t} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.el = e,
                    this.value = t,
                    this.isDone = !1,
                    this.io = this.createIntersectionObserver(e)
            }
            createIntersectionObserver(e) {
                if (!U.a)
                    return null;
                this.io && (this.io.disconnect(),
                    this.io = null);
                const t = new IntersectionObserver(e=>{
                        e && e.length && e[0].isIntersecting && this.do()
                    }
                    ,{
                        threshold: 0
                    });
                return t.observe(e),
                    t
            }
            do() {
                this.isDone || (Object(Un.a)(this.value),
                    this.isDone = !0)
            }
            update(e, t) {
                this.io = this.createIntersectionObserver(e),
                    this.el = e,
                    this.value = t,
                    this.isDone = !1
            }
            destroy() {
                this.io && this.io.disconnect(),
                    this.el = null,
                    this.value = null
            }
        }
        const Bn = new class {
            constructor() {
                let {throttleTime: e, primaryKey: t} = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.options = {
                    throttleTime: e || 200,
                    primaryKey: t
                },
                    this.listenerQueue = []
            }
            add(e, t) {
                const n = this.listenerQueue.find(t=>t.el === e);
                if (n)
                    return void n.update(e, t);
                const i = new Qn({
                    el: e,
                    value: t
                });
                this.listenerQueue.push(i)
            }
            update(e, t, n) {
                if (!this.listenerQueue.length)
                    return;
                if (this.options.primaryKey && t[this.options.primaryKey] === n[this.options.primaryKey])
                    return;
                const i = this.listenerQueue.find(t=>t.el === e);
                i && i.update(e, t)
            }
            remove(e) {
                const t = this.listenerQueue.findIndex(t=>t.el === e);
                if (t > -1) {
                    const e = this.listenerQueue.splice(t, 1);
                    e[0].destroy()
                }
            }
        }
        ({
            primaryKey: "show_id"
        });
        const Fn = {
            pv(e, t) {
                Object(Un.b)(t),
                    Object(Un.a)(t)
            },
            show(e, t) {
                Bn.add.bind(Bn)(e, t)
            },
            click(e, t) {
                e.onclick = ()=>{
                    !function(e, t) {
                        Object(Un.a)(t)
                    }(0, t)
                }
            }
        }
            , zn = {
            show(e) {
                Bn.remove.bind(Bn)(e)
            },
            click(e) {
                e.onclick = null
            }
        };
        var Gn = {
            bind(e, t) {
                let {value: n} = t;
                const i = n.type;
                Fn[i] && Fn[i](e, n)
            },
            update(e, t) {
                let {value: n, oldValue: i} = t;
                Bn.update.bind(Bn)(e, n, i)
            },
            unbind(e, t) {
                let {value: n} = t;
                const i = n.type;
                zn[i] && zn[i](e)
            }
        }
            , Hn = n("yyeT")
            , Kn = n("bbP8")
            , Vn = n("n5Vj")
            , Wn = n.n(Vn);
        function Jn(e, t, n, i, r, o, s) {
            try {
                var a = e[o](s)
                    , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, r)
        }
        function Xn(e) {
            return function() {
                var t = this
                    , n = arguments;
                return new Promise(function(i, r) {
                        var o = e.apply(t, n);
                        function s(e) {
                            Jn(o, i, r, s, a, "next", e)
                        }
                        function a(e) {
                            Jn(o, i, r, s, a, "throw", e)
                        }
                        s(void 0)
                    }
                )
            }
        }
        function Yn() {
            return "https:" === location.protocol || "localhost" === location.hostname
        }
        function Zn() {
            return Zn = Xn(function*() {
                if (!Yn() || !window.Notification)
                    return;
                yield Notification.requestPermission()
            }),
                Zn.apply(this, arguments)
        }
        function ei() {
            return ei = Xn(function*() {
                (function() {
                        return "serviceWorker"in window.navigator
                    }
                )() && Yn() && (yield function() {
                    return Zn.apply(this, arguments)
                }(),
                    Wn.a.register())
            }),
                ei.apply(this, arguments)
        }
        var ti = n("k861")
            , ni = n("Puqe")
            , ii = n.n(ni)
            , ri = n("K4CH")
            , oi = n("sCe/")
            , si = n("rseE");
        function ai(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
                e
        }
        function ci(e, t, n, i, r, o, s) {
            try {
                var a = e[o](s)
                    , c = a.value
            } catch (e) {
                return void n(e)
            }
            a.done ? t(c) : Promise.resolve(c).then(i, r)
        }
        function li(e) {
            return function() {
                var t = this
                    , n = arguments;
                return new Promise(function(i, r) {
                        var o = e.apply(t, n);
                        function s(e) {
                            ci(o, i, r, s, a, "next", e)
                        }
                        function a(e) {
                            ci(o, i, r, s, a, "throw", e)
                        }
                        s(void 0)
                    }
                )
            }
        }
        i.a.directive("log", Gn);
        const ui = (new ri.UAParser).getResult();
        B.a.init({
            jumpHtml: ["".concat(location.protocol, "//").concat(location.hostname), "".concat(location.port ? ":" + location.port : ""), "/i/jump-html.html"].join(""),
            env: "production",
            sid: "kuaishou.live.web"
        }),
            i.a.config.errorHandler = (e,t,n)=>{
                console.error(e),
                    console.error("error vm is: ", t),
                n && console.error("error lifecycle is: ", n)
            }
            ,
            o.a.config("".concat(location.protocol, "//6c099dabea1a4dfd9f3c2b43c6e84fd0@").concat(location.host, "/2"), {
                release: "0410a65",
                environment: location.host.includes("kankan") ? "staging" : "production",
                breadcrumbCallback: e=>("xhr" !== e.category || "/rest/wd/live/web/collect" !== e.data.url) && e,
                ignoreErrors: ["SourceBuffer", "x5onSkinSwitch", "HTMLMediaElement"],
                ignoreUrls: ["u.c.b.r.o.w.s.e.r"],
                sampleRate: .01
            }).addPlugin(a.a, i.a).install();
        const {app: di, router: hi} = function(e) {
            let {apolloClients: t, uaInfo: r} = e;
            const o = function() {
                const e = new xn.a({
                    mode: "history",
                    routes: [{
                        path: "/",
                        name: "index",
                        component: ()=>Promise.all([n.e(0), n.e(1), n.e(9)]).then(n.bind(null, "4bTN"))
                    }, {
                        path: "/search",
                        component: ()=>Promise.all([n.e(0), n.e(21)]).then(n.bind(null, "eHuD")),
                        children: [{
                            path: "",
                            name: "search",
                            component: ()=>Promise.all([n.e(0), n.e(23)]).then(n.bind(null, "6MCA"))
                        }, {
                            path: ":type",
                            name: "searchDetail",
                            component: ()=>Promise.all([n.e(0), n.e(1), n.e(22)]).then(n.bind(null, "P5cg")),
                            meta: {
                                allowType: ["category", "liveStream", "author"]
                            }
                        }]
                    }, {
                        path: "/u/:principalId/:photoId",
                        name: "share",
                        component: ()=>Promise.all([n.e(0), n.e(24)]).then(n.bind(null, "eiqK"))
                    }, {
                        path: "/u/:principalId/",
                        name: "liveDetail",
                        component: ()=>Promise.all([n.e(0), n.e(1), n.e(10)]).then(n.bind(null, "+6Xv")),
                        meta: {
                            name: "live-detail"
                        }
                    }, {
                        path: "/cate",
                        component: ()=>Promise.all([n.e(0), n.e(5)]).then(n.bind(null, "YGY6")),
                        children: [{
                            path: "",
                            name: "categoryList",
                            component: ()=>Promise.all([n.e(0), n.e(6)]).then(n.bind(null, "iZod")),
                            meta: {
                                type: "all"
                            }
                        }, {
                            path: "my-follow/living",
                            name: "myLiving",
                            component: ()=>Promise.all([n.e(0), n.e(15)]).then(n.bind(null, "3W2e")),
                            meta: {
                                type: "my-follow",
                                auth: !0
                            }
                        }, {
                            path: "my-follow/all",
                            name: "myLivingAll",
                            component: ()=>Promise.all([n.e(0), n.e(14)]).then(n.bind(null, "67QR")),
                            meta: {
                                type: "my-follow",
                                auth: !0
                            }
                        }, {
                            path: "DQRM",
                            name: "hot",
                            component: ()=>Promise.all([n.e(0), n.e(12)]).then(n.bind(null, "RDyE")),
                            meta: {
                                type: "DQRM"
                            }
                        }, {
                            path: "video",
                            name: "video",
                            redirect: "/v/hot"
                        }, {
                            path: ":type/:gameId",
                            name: "categoryGame",
                            component: ()=>Promise.all([n.e(0), n.e(12)]).then(n.bind(null, "RDyE"))
                        }, {
                            path: ":type/:gameId/:heroType",
                            name: "categoryGameHeroType",
                            component: ()=>Promise.all([n.e(0), n.e(12)]).then(n.bind(null, "RDyE"))
                        }, {
                            path: ":type/:gameId/:heroType/:heroName",
                            name: "categoryGameHeroName",
                            component: ()=>Promise.all([n.e(0), n.e(12)]).then(n.bind(null, "RDyE"))
                        }, {
                            path: ":type/",
                            name: "cateCategory",
                            component: ()=>Promise.all([n.e(0), n.e(6)]).then(n.bind(null, "iZod"))
                        }]
                    }, {
                        path: "/profile/:principalId",
                        name: "profile",
                        component: ()=>Promise.all([n.e(0), n.e(1), n.e(20)]).then(n.bind(null, "QFEX"))
                    }, {
                        path: "/thirdPart/:type",
                        name: "thirdPart",
                        component: ()=>Promise.all([n.e(0), n.e(25)]).then(n.bind(null, "DdZw")),
                        meta: {
                            allowType: ["qq", "wechat"]
                        }
                    }, {
                        path: "/history",
                        name: "history",
                        component: ()=>Promise.all([n.e(0), n.e(8)]).then(n.bind(null, "kMqR")),
                        meta: {
                            auth: !0
                        }
                    }, {
                        path: "/video-clip",
                        name: "videoClip",
                        component: ()=>Promise.all([n.e(0), n.e(30)]).then(n.bind(null, "MwTk"))
                    }, {
                        path: "/upload-video",
                        name: "uploadVideo",
                        component: ()=>Promise.all([n.e(0), n.e(28)]).then(n.bind(null, "KjAl"))
                    }, {
                        path: "/live-partner",
                        name: "livePartner",
                        component: ()=>Promise.all([n.e(0), n.e(11)]).then(n.bind(null, "V2tY"))
                    }, {
                        path: "/playback/:productId",
                        name: "playback",
                        component: ()=>Promise.all([n.e(0), n.e(1), n.e(19)]).then(n.bind(null, "VQL/"))
                    }, {
                        path: "/error",
                        name: "error",
                        component: ()=>Promise.all([n.e(0), n.e(3)]).then(n.bind(null, "MEI8"))
                    }, {
                        path: "/news",
                        component: ()=>Promise.all([n.e(0), n.e(16)]).then(n.bind(null, "BOuB")),
                        children: [{
                            path: "",
                            name: "newsList",
                            component: ()=>Promise.all([n.e(0), n.e(18)]).then(n.bind(null, "oTGf"))
                        }, {
                            path: ":id",
                            name: "newsDetail",
                            component: ()=>Promise.all([n.e(0), n.e(17)]).then(n.bind(null, "Witl"))
                        }]
                    }, {
                        path: "/common-error",
                        name: "commonError",
                        component: ()=>Promise.all([n.e(0), n.e(7)]).then(n.bind(null, "Tr6o"))
                    }, {
                        path: "/v/hot",
                        name: "videoFeeds",
                        component: ()=>Promise.all([n.e(0), n.e(29)]).then(n.bind(null, "t1Kj"))
                    }, {
                        path: "*",
                        name: "404",
                        component: ()=>Promise.all([n.e(0), n.e(2)]).then(n.bind(null, "StMo"))
                    }, ...Cn]
                });
                return e
            }()
                , s = new i.a({
                provide: ()=>({
                    uaInfo: r
                }),
                render: e=>e(kn),
                store: new Ee.b(t),
                router: o
            });
            return {
                app: s,
                router: o
            }
        }({
            apolloClients: {
                defaultClient: Object(si.a)(Object(oi.a)()),
                clients: {
                    restClient: Object(si.a)(Object(oi.b)(), "restClient", "browser", {
                        watchQuery: {
                            fetchPolicy: "network-only"
                        }
                    }),
                    graphqlServerClient: Object(si.a)(Object(oi.a)("/m_graphql"), "clients.graphqlServerClient")
                }
            },
            uaInfo: ui
        })
            , pi = [function(e) {
            return !e.meta || !e.meta.allowType || e.meta.allowType.includes(e.params.type)
        }
            , function(e, t, n) {
                return !(e.meta && e.meta.auth && !n.app.userId) || Object(zt.b)()
            }
        ];
        hi.beforeResolve(function() {
            var e = li(function*(e, t, n) {
                if ("track_key"in e.query)
                    return e.query.track_value && ti.a.set(e.query.track_key, e.query.track_value),
                        void n(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {}
                                    , i = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))),
                                    i.forEach(function(t) {
                                        ai(e, t, n[t])
                                    })
                            }
                            return e
                        }({}, e, {
                            query: ii()(e.query, ["track_key", "track_value"])
                        }));
                h.a.$emit("set-loading", !0),
                    n()
            });
            return function(t, n, i) {
                return e.apply(this, arguments)
            }
        }()),
            hi.afterEach(()=>{
                    h.a.$emit("set-loading", !1)
                }
            ),
            hi.beforeResolve(function() {
                var e = li(function*(e, t, n) {
                    const i = pi.map(n=>n(e, t, hi));
                    try {
                        yield Promise.all(i),
                            n()
                    } catch (e) {
                        n({
                            path: "/",
                            replace: !0
                        })
                    }
                });
                return function(t, n, i) {
                    return e.apply(this, arguments)
                }
            }()),
            hi.afterEach((e,t)=>{
                    e.meta && e.meta.name && "live-detail" === e.meta.name || Object(Kn.g)(),
                        i.a.nextTick(()=>{
                                Object(Kn.e)() && (Hn.a.plugins.timingMonitor && Hn.a.plugins.timingMonitor.mark("whiteScreen"),
                                Hn.a.plugins.timingMonitor && Hn.a.plugins.timingMonitor.mark("firstScreen")),
                                    Object(Kn.h)(),
                                    Object(Kn.i)();
                                const n = {
                                    from: t.path,
                                    to: e.path,
                                    type: "pv",
                                    is_spammer: "error" === e.name
                                };
                                Object(Un.b)(n),
                                    Object(Un.a)(n)
                            }
                        ),
                    document.scrollingElement && (document.scrollingElement.scrollTop = 0)
                }
            ),
            hi.onReady(()=>{
                    di.$mount("#app")
                }
            ),
            function() {
                ei.apply(this, arguments)
            }()
    },
    uSU4: function(e, t, n) {},
    uycM: function(e, t, n) {
        "use strict";
        var i = n("L+H0");
        i.b.registerHooks(["apollo", "models", "beforeRouteEnter", "beforeRouteLeave", "subscriptions"]);
        var r = i.b;
        function o(e) {
            return Object(i.a)((t,n)=>{
                    t.models = t.models || {},
                        t.models[n] = e
                }
            )
        }
        const s = Object(i.a)((e,t)=>{
                e.metaInfo = e.methods[t]
            }
        );
        var a = n("YKMj");
        n.d(t, "a", function() {
            return r
        }),
            n.d(t, "g", function() {
                return o
            }),
            n.d(t, "d", function() {
                return s
            }),
            n.d(t, "i", function() {
                return a.f
            }),
            n.d(t, "e", function() {
                return a.c
            }),
            n.d(t, "c", function() {
                return a.b
            }),
            n.d(t, "f", function() {
                return a.d
            }),
            n.d(t, "h", function() {
                return a.e
            }),
            n.d(t, "j", function() {
                return a.g
            }),
            n.d(t, "b", function() {
                return a.a
            })
    },
    vOCa: function(e, t, n) {
        "use strict";
        !function() {
            const e = navigator.plugins
                , t = navigator.userAgent
                , n = window.self
                , i = "chrome"in window
                , r = "ActiveXObject"in window
                , o = document.getElementsByTagName("head")[0].style
                , s = !!n.addEventListener;
            function a(t) {
                for (let n = 0; n < e.length; n++) {
                    const i = e[n].name;
                    if (t.test(i))
                        return i
                }
                return !1
            }
            const c = {
                a: function() {
                    if (n.ActiveXObject)
                        try {
                            const e = new n.ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                            return !!e && "ShockwaveFlash.ShockwaveFlash"
                        } catch (e) {
                            return !1
                        }
                    return a(/Shockwave/i)
                }(),
                b: function() {
                    if (!localStorage)
                        return !0;
                    try {
                        localStorage.setItem("localStorage", 1),
                            localStorage.removeItem("localStorage")
                    } catch (e) {
                        return !1
                    }
                    return !0
                }(),
                c: !!a(/PDF|Acrobat/i),
                d: !!a(/Native Client/),
                e: !!a(/WangWang/i),
                f: !!a(/Alipay/i),
                g: "$cdc_asdjflasutopfhvcZLmcfl_"in document,
                h: "localStorage"in window,
                i: function() {
                    const e = document.createElement("canvas");
                    return e.getContext && !!e.getContext("webgl2")
                }(),
                j: "ontouchstart"in document,
                k: "1" === (navigator.msDoNotTrack || navigator.doNotTrack),
                l: /zh-cn/i.test(navigator.language || navigator.systemLanguage),
                m: navigator.languages && navigator.languages.length > 0,
                n: -480 === (new Date).getTimezoneOffset(),
                o: "iso-8859-1" === document.defaultCharset,
                p: "callPhantom"in window,
                q: i,
                r: "MozSettingsEvent"in window,
                s: "safari"in window,
                t: r && !("maxHeight"in o),
                u: r && !("postMessage"in window),
                v: r && !s,
                w: r && !window.Uint8Array,
                x: r && !window.WeakMap,
                y: r && window.WeakMap,
                z: "Google Inc." === navigator.vendor,
                aa: "Apple Computer, Inc." === navigator.vendor,
                bb: r,
                cc: "callPhantom"in window,
                dd: /python/i.test(navigator.appVersion),
                ee: "sgAppName"in navigator,
                ff: "opr"in window,
                gg: /Maxthon/i.test(navigator.vendor),
                hh: i && /BIDUBrowser/i.test(t),
                ii: i && /LBBROWSER/i.test(t),
                jj: i && /QQBrowser/.test(t),
                kk: i && /UBrowser/i.test(t),
                ll: i && /2345Explorer/.test(t),
                mm: i && /TheWorld/.test(t),
                nn: i && "MSGesture"in window,
                oo: "aef"in window,
                pp: function() {
                    const e = [/^Win32/, /^Win64/, /^Linux armv|Android/, /^Android/, /^iPhone/, /^iPad/, /^MacIntel/, /^Linux [ix]\d+/, /^ARM/, /^iPod/, /^BlackBerry/];
                    for (let t = 0; t < e.length; t++)
                        if (e[t].test(navigator.platform))
                            return t + 1;
                    return 0
                }()
            }
                , l = {
                a: document.domain || "",
                b: document.URL || "",
                c: document.title || "",
                d: document.referrer || "",
                e: navigator.userAgent,
                f: window.screen.height || 0,
                g: window.screen.width || 0,
                h: window.screen.colorDepth || 0,
                i: navigator.language || ""
            };
            !function(e, t) {
                const n = [];
                for (const e in t)
                    n.push(e + "=" + encodeURIComponent(JSON.stringify(t[e])));
                const i = document.createElement("img");
                i.src = e + "?" + n.join("&")
            }("https://live.kuaishou.com/rest/wd/live/web/security", {
                detectionPoint: c,
                collectInfo: l
            })
        }()
    },
    "x/WW": function(e, t, n) {
        "use strict";
        var i = n("YXdx")
            , r = n.n(i);
        r.a
    },
    yyeT: function(e, t, n) {
        "use strict";
        var i = n("IMje")
            , r = n("bD1G");
        let o;
        if (r.a) {
            const {Weblog: e} = n("b4Nf");
            o = new e({
                env: r.b ? "production" : "development",
                retries: 3
            },{
                user_id: Object(i.a)("userId") || "",
                product_name: "KS_GAME_LIVE_PC"
            })
        }
        t.a = o
    },
    zLfr: function(e, t, n) {
        "use strict";
        var i = n("mrSG")
            , r = n("l2JU")
            , o = n.n(r)
            , s = n("uycM");
        let a = 0
            , c = null
            , l = class extends s.i {
                constructor() {
                    super(...arguments),
                        this.closeIcon = o.a,
                        this.isShow = !1
                }
                hide() {
                    this.isShow && (this.isShow = !1,
                        a--,
                    a || (document.body.style.overflow = c,
                        c = null),
                        this.$emit("hide"))
                }
                show() {
                    this.isShow || (this.isShow = !0,
                        document.body.appendChild(this.$el),
                        a++,
                        c = null === c ? document.body.style.overflow : c,
                        document.body.style.overflow = "hidden")
                }
                trigger(e) {
                    this.$emit(e)
                }
                handleModalClick(e) {
                    this.closeOnClickModal && e.target === this.$el && this.hide()
                }
                mounted() {
                    this.nextSibling = this.$el.nextSibling,
                        this.parentElement = this.$el.parentElement,
                        document.body.appendChild(this.$el)
                }
                beforeDestroy() {
                    this.hide();
                    try {
                        this.nextSibling ? this.parentElement.insertBefore(this.$el, this.nextSibling) : this.parentElement.appendChild(this.$el)
                    } catch (e) {}
                    this.nextSibling = null,
                        this.parentElement = null
                }
            }
        ;
        i.__decorate([Object(s.h)({
            type: String,
            default: "600px"
        })], l.prototype, "width", void 0),
            i.__decorate([Object(s.h)({
                type: String,
                default: ""
            })], l.prototype, "title", void 0),
            i.__decorate([Object(s.h)({
                type: Boolean,
                default: !1
            })], l.prototype, "closeOnClickModal", void 0),
            l = i.__decorate([s.a], l);
        var u = l
            , d = u
            , h = (n("I3o2"),
            n("KHd+"))
            , p = Object(h.a)(d, function() {
            var e = this
                , t = e.$createElement
                , n = e._self._c || t;
            return n("transition", {
                attrs: {
                    name: "user-modal"
                },
                on: {
                    "before-enter": function(t) {
                        return e.trigger("before-show")
                    },
                    "after-enter": function(t) {
                        return e.trigger("after-show")
                    },
                    "before-leave": function(t) {
                        return e.trigger("before-hide")
                    },
                    "after-leave": function(t) {
                        return e.trigger("after-hide")
                    }
                }
            }, [e.isShow ? n("div", {
                staticClass: "user-modal",
                on: {
                    click: e.handleModalClick
                }
            }, [n("div", {
                staticClass: "user-modal-dialog",
                style: {
                    width: e.width
                }
            }, [n("a", {
                staticClass: "close",
                attrs: {
                    href: "javascript:void(0)"
                },
                on: {
                    click: e.hide
                }
            }, [n("span", {
                staticClass: "close-icon",
                domProps: {
                    innerHTML: e._s(e.closeIcon)
                }
            })]), e._v(" "), e._t("title", [n("h3", {
                staticClass: "title"
            }, [e._v(e._s(e.title))])]), e._v(" "), n("div", {
                staticClass: "user-modal-body"
            }, [e._t("default")], 2)], 2)]) : e._e()])
        }, [], !1, null, "3cc8416c", null);
        t.a = p.exports
    }
});
//# sourceMappingURL=http://sourcemap.test.gifshow.com/kuaishou-frontend-live/js/modern/app.3682e62953b352271f28.js.map
