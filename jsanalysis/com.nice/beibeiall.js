!function() {
    function e(t, n, i) {
        function r(a, s) {
            if (!n[a]) {
                if (!t[a]) {
                    var c = "function" == typeof require && require;
                    if (!s && c)
                        return c(a, !0);
                    if (o)
                        return o(a, !0);
                    var u = new Error("Cannot find module '" + a + "'");
                    throw u.code = "MODULE_NOT_FOUND",
                        u
                }
                var l = n[a] = {
                    exports: {}
                };
                t[a][0].call(l.exports, function(e) {
                    var n = t[a][1][e];
                    return r(n || e)
                }, l, l.exports, e, t, n, i)
            }
            return n[a].exports
        }
        for (var o = "function" == typeof require && require, a = 0; a < i.length; a++)
            r(i[a]);
        return r
    }
    return e
}()({
    1: [function(e, t, n) {
        t.exports = e("./src/index")
    }
        , {
            "./src/index": 4
        }],
    2: [function(e, t, n) {
        t.exports = e("./lib/index")
    }
        , {
            "./lib/index": 3
        }],
    3: [function(e, t, n) {
        t.exports = function(e) {
            function t(i) {
                if (n[i])
                    return n[i].exports;
                var r = n[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                };
                return e[i].call(r.exports, r, r.exports, t),
                    r.l = !0,
                    r.exports
            }
            var n = {};
            return t.m = e,
                t.c = n,
                t.i = function(e) {
                    return e
                }
                ,
                t.d = function(e, n, i) {
                    t.o(e, n) || Object.defineProperty(e, n, {
                        configurable: !1,
                        enumerable: !0,
                        get: i
                    })
                }
                ,
                t.n = function(e) {
                    var n = e && e.__esModule ? function() {
                            return e["default"]
                        }
                        : function() {
                            return e
                        }
                    ;
                    return t.d(n, "a", n),
                        n
                }
                ,
                t.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                ,
                t.p = "",
                t(t.s = 3)
        }([function(e, t, n) {
            !function(n, i) {
                e.exports = t = i()
            }(this, function() {
                var e = e || function(e, t) {
                    var n = Object.create || function() {
                        function e() {}
                        return function(t) {
                            var n;
                            return e.prototype = t,
                                n = new e,
                                e.prototype = null,
                                n
                        }
                    }()
                        , i = {}
                        , r = i.lib = {}
                        , o = r.Base = function() {
                        return {
                            extend: function(e) {
                                var t = n(this);
                                return e && t.mixIn(e),
                                t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
                                        t.$super.init.apply(this, arguments)
                                    }
                                ),
                                    t.init.prototype = t,
                                    t.$super = this,
                                    t
                            },
                            create: function() {
                                var e = this.extend();
                                return e.init.apply(e, arguments),
                                    e
                            },
                            init: function() {},
                            mixIn: function(e) {
                                for (var t in e)
                                    e.hasOwnProperty(t) && (this[t] = e[t]);
                                e.hasOwnProperty("toString") && (this.toString = e.toString)
                            },
                            clone: function() {
                                return this.init.prototype.extend(this)
                            }
                        }
                    }()
                        , a = r.WordArray = o.extend({
                        init: function(e, n) {
                            e = this.words = e || [],
                                n != t ? this.sigBytes = n : this.sigBytes = 4 * e.length
                        },
                        toString: function(e) {
                            return (e || c).stringify(this)
                        },
                        concat: function(e) {
                            var t = this.words
                                , n = e.words
                                , i = this.sigBytes
                                , r = e.sigBytes;
                            if (this.clamp(),
                            i % 4)
                                for (var o = 0; r > o; o++) {
                                    var a = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                                    t[i + o >>> 2] |= a << 24 - (i + o) % 4 * 8
                                }
                            else
                                for (var o = 0; r > o; o += 4)
                                    t[i + o >>> 2] = n[o >>> 2];
                            return this.sigBytes += r,
                                this
                        },
                        clamp: function() {
                            var t = this.words
                                , n = this.sigBytes;
                            t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8,
                                t.length = e.ceil(n / 4)
                        },
                        clone: function() {
                            var e = o.clone.call(this);
                            return e.words = this.words.slice(0),
                                e
                        },
                        random: function(t) {
                            for (var n, i = [], r = function(t) {
                                var t = t
                                    , n = 987654321
                                    , i = 4294967295;
                                return function() {
                                    n = 36969 * (65535 & n) + (n >> 16) & i,
                                        t = 18e3 * (65535 & t) + (t >> 16) & i;
                                    var r = (n << 16) + t & i;
                                    return r /= 4294967296,
                                        r += .5,
                                    r * (e.random() > .5 ? 1 : -1)
                                }
                            }, o = 0; t > o; o += 4) {
                                var s = r(4294967296 * (n || e.random()));
                                n = 987654071 * s(),
                                    i.push(4294967296 * s() | 0)
                            }
                            return new a.init(i,t)
                        }
                    })
                        , s = i.enc = {}
                        , c = s.Hex = {
                        stringify: function(e) {
                            for (var t = e.words, n = e.sigBytes, i = [], r = 0; n > r; r++) {
                                var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                                i.push((o >>> 4).toString(16)),
                                    i.push((15 & o).toString(16))
                            }
                            return i.join("")
                        },
                        parse: function(e) {
                            for (var t = e.length, n = [], i = 0; t > i; i += 2)
                                n[i >>> 3] |= parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4;
                            return new a.init(n,t / 2)
                        }
                    }
                        , u = s.Latin1 = {
                        stringify: function(e) {
                            for (var t = e.words, n = e.sigBytes, i = [], r = 0; n > r; r++) {
                                var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
                                i.push(String.fromCharCode(o))
                            }
                            return i.join("")
                        },
                        parse: function(e) {
                            for (var t = e.length, n = [], i = 0; t > i; i++)
                                n[i >>> 2] |= (255 & e.charCodeAt(i)) << 24 - i % 4 * 8;
                            return new a.init(n,t)
                        }
                    }
                        , l = s.Utf8 = {
                        stringify: function(e) {
                            try {
                                return decodeURIComponent(escape(u.stringify(e)))
                            } catch (t) {
                                throw new Error("Malformed UTF-8 data")
                            }
                        },
                        parse: function(e) {
                            return u.parse(unescape(encodeURIComponent(e)))
                        }
                    }
                        , d = r.BufferedBlockAlgorithm = o.extend({
                        reset: function() {
                            this._data = new a.init,
                                this._nDataBytes = 0
                        },
                        _append: function(e) {
                            "string" == typeof e && (e = l.parse(e)),
                                this._data.concat(e),
                                this._nDataBytes += e.sigBytes
                        },
                        _process: function(t) {
                            var n = this._data
                                , i = n.words
                                , r = n.sigBytes
                                , o = this.blockSize
                                , s = 4 * o
                                , c = r / s;
                            c = t ? e.ceil(c) : e.max((0 | c) - this._minBufferSize, 0);
                            var u = c * o
                                , l = e.min(4 * u, r);
                            if (u) {
                                for (var d = 0; u > d; d += o)
                                    this._doProcessBlock(i, d);
                                var f = i.splice(0, u);
                                n.sigBytes -= l
                            }
                            return new a.init(f,l)
                        },
                        clone: function() {
                            var e = o.clone.call(this);
                            return e._data = this._data.clone(),
                                e
                        },
                        _minBufferSize: 0
                    })
                        , f = (r.Hasher = d.extend({
                        cfg: o.extend(),
                        init: function(e) {
                            this.cfg = this.cfg.extend(e),
                                this.reset()
                        },
                        reset: function() {
                            d.reset.call(this),
                                this._doReset()
                        },
                        update: function(e) {
                            return this._append(e),
                                this._process(),
                                this
                        },
                        finalize: function(e) {
                            e && this._append(e);
                            var t = this._doFinalize();
                            return t
                        },
                        blockSize: 16,
                        _createHelper: function(e) {
                            return function(t, n) {
                                return new e.init(n).finalize(t)
                            }
                        },
                        _createHmacHelper: function(e) {
                            return function(t, n) {
                                return new f.HMAC.init(e,n).finalize(t)
                            }
                        }
                    }),
                        i.algo = {});
                    return i
                }(Math);
                return e
            })
        }
            , function(e, t, n) {
                !function(i, r, o) {
                    e.exports = t = r(n(0), n(5), n(4))
                }(this, function(e) {
                    return e.HmacSHA1
                })
            }
            , function(e, t, n) {
                !function(i, r) {
                    e.exports = t = r(n(0))
                }(this, function(e) {
                    return function(t) {
                        function n(e, t, n, i, r, o, a) {
                            var s = e + (t & n | ~t & i) + r + a;
                            return (s << o | s >>> 32 - o) + t
                        }
                        function i(e, t, n, i, r, o, a) {
                            var s = e + (t & i | n & ~i) + r + a;
                            return (s << o | s >>> 32 - o) + t
                        }
                        function r(e, t, n, i, r, o, a) {
                            var s = e + (t ^ n ^ i) + r + a;
                            return (s << o | s >>> 32 - o) + t
                        }
                        function o(e, t, n, i, r, o, a) {
                            var s = e + (n ^ (t | ~i)) + r + a;
                            return (s << o | s >>> 32 - o) + t
                        }
                        var a = e
                            , s = a.lib
                            , c = s.WordArray
                            , u = s.Hasher
                            , l = a.algo
                            , d = [];
                        !function() {
                            for (var e = 0; 64 > e; e++)
                                d[e] = 4294967296 * t.abs(t.sin(e + 1)) | 0
                        }();
                        var f = l.MD5 = u.extend({
                            _doReset: function() {
                                this._hash = new c.init([1732584193, 4023233417, 2562383102, 271733878])
                            },
                            _doProcessBlock: function(e, t) {
                                for (var a = 0; 16 > a; a++) {
                                    var s = t + a
                                        , c = e[s];
                                    e[s] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8)
                                }
                                var u = this._hash.words
                                    , l = e[t + 0]
                                    , f = e[t + 1]
                                    , p = e[t + 2]
                                    , h = e[t + 3]
                                    , g = e[t + 4]
                                    , m = e[t + 5]
                                    , b = e[t + 6]
                                    , v = e[t + 7]
                                    , y = e[t + 8]
                                    , _ = e[t + 9]
                                    , w = e[t + 10]
                                    , x = e[t + 11]
                                    , k = e[t + 12]
                                    , S = e[t + 13]
                                    , C = e[t + 14]
                                    , T = e[t + 15]
                                    , E = u[0]
                                    , I = u[1]
                                    , j = u[2]
                                    , O = u[3];
                                E = n(E, I, j, O, l, 7, d[0]),
                                    O = n(O, E, I, j, f, 12, d[1]),
                                    j = n(j, O, E, I, p, 17, d[2]),
                                    I = n(I, j, O, E, h, 22, d[3]),
                                    E = n(E, I, j, O, g, 7, d[4]),
                                    O = n(O, E, I, j, m, 12, d[5]),
                                    j = n(j, O, E, I, b, 17, d[6]),
                                    I = n(I, j, O, E, v, 22, d[7]),
                                    E = n(E, I, j, O, y, 7, d[8]),
                                    O = n(O, E, I, j, _, 12, d[9]),
                                    j = n(j, O, E, I, w, 17, d[10]),
                                    I = n(I, j, O, E, x, 22, d[11]),
                                    E = n(E, I, j, O, k, 7, d[12]),
                                    O = n(O, E, I, j, S, 12, d[13]),
                                    j = n(j, O, E, I, C, 17, d[14]),
                                    I = n(I, j, O, E, T, 22, d[15]),
                                    E = i(E, I, j, O, f, 5, d[16]),
                                    O = i(O, E, I, j, b, 9, d[17]),
                                    j = i(j, O, E, I, x, 14, d[18]),
                                    I = i(I, j, O, E, l, 20, d[19]),
                                    E = i(E, I, j, O, m, 5, d[20]),
                                    O = i(O, E, I, j, w, 9, d[21]),
                                    j = i(j, O, E, I, T, 14, d[22]),
                                    I = i(I, j, O, E, g, 20, d[23]),
                                    E = i(E, I, j, O, _, 5, d[24]),
                                    O = i(O, E, I, j, C, 9, d[25]),
                                    j = i(j, O, E, I, h, 14, d[26]),
                                    I = i(I, j, O, E, y, 20, d[27]),
                                    E = i(E, I, j, O, S, 5, d[28]),
                                    O = i(O, E, I, j, p, 9, d[29]),
                                    j = i(j, O, E, I, v, 14, d[30]),
                                    I = i(I, j, O, E, k, 20, d[31]),
                                    E = r(E, I, j, O, m, 4, d[32]),
                                    O = r(O, E, I, j, y, 11, d[33]),
                                    j = r(j, O, E, I, x, 16, d[34]),
                                    I = r(I, j, O, E, C, 23, d[35]),
                                    E = r(E, I, j, O, f, 4, d[36]),
                                    O = r(O, E, I, j, g, 11, d[37]),
                                    j = r(j, O, E, I, v, 16, d[38]),
                                    I = r(I, j, O, E, w, 23, d[39]),
                                    E = r(E, I, j, O, S, 4, d[40]),
                                    O = r(O, E, I, j, l, 11, d[41]),
                                    j = r(j, O, E, I, h, 16, d[42]),
                                    I = r(I, j, O, E, b, 23, d[43]),
                                    E = r(E, I, j, O, _, 4, d[44]),
                                    O = r(O, E, I, j, k, 11, d[45]),
                                    j = r(j, O, E, I, T, 16, d[46]),
                                    I = r(I, j, O, E, p, 23, d[47]),
                                    E = o(E, I, j, O, l, 6, d[48]),
                                    O = o(O, E, I, j, v, 10, d[49]),
                                    j = o(j, O, E, I, C, 15, d[50]),
                                    I = o(I, j, O, E, m, 21, d[51]),
                                    E = o(E, I, j, O, k, 6, d[52]),
                                    O = o(O, E, I, j, h, 10, d[53]),
                                    j = o(j, O, E, I, w, 15, d[54]),
                                    I = o(I, j, O, E, f, 21, d[55]),
                                    E = o(E, I, j, O, y, 6, d[56]),
                                    O = o(O, E, I, j, T, 10, d[57]),
                                    j = o(j, O, E, I, b, 15, d[58]),
                                    I = o(I, j, O, E, S, 21, d[59]),
                                    E = o(E, I, j, O, g, 6, d[60]),
                                    O = o(O, E, I, j, x, 10, d[61]),
                                    j = o(j, O, E, I, p, 15, d[62]),
                                    I = o(I, j, O, E, _, 21, d[63]),
                                    u[0] = u[0] + E | 0,
                                    u[1] = u[1] + I | 0,
                                    u[2] = u[2] + j | 0,
                                    u[3] = u[3] + O | 0
                            },
                            _doFinalize: function() {
                                var e = this._data
                                    , n = e.words
                                    , i = 8 * this._nDataBytes
                                    , r = 8 * e.sigBytes;
                                n[r >>> 5] |= 128 << 24 - r % 32;
                                var o = t.floor(i / 4294967296)
                                    , a = i;
                                n[(r + 64 >>> 9 << 4) + 15] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8),
                                    n[(r + 64 >>> 9 << 4) + 14] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8),
                                    e.sigBytes = 4 * (n.length + 1),
                                    this._process();
                                for (var s = this._hash, c = s.words, u = 0; 4 > u; u++) {
                                    var l = c[u];
                                    c[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8)
                                }
                                return s
                            },
                            clone: function() {
                                var e = u.clone.call(this);
                                return e._hash = this._hash.clone(),
                                    e
                            }
                        });
                        a.MD5 = u._createHelper(f),
                            a.HmacMD5 = u._createHmacHelper(f)
                    }(Math),
                        e.MD5
                })
            }
            , function(e, t, n) {
                "use strict";
                function i(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                }
                function r(e) {
                    var t = []
                        , n = "";
                    for (n in e)
                        t.push(n + "=" + e[n]);
                    return t
                }
                function o(e) {
                    if (e.length <= 1)
                        return e;
                    for (var t = Math.floor(e.length / 2), n = e.splice(t, 1), i = [], r = [], a = 0; a < e.length; a++)
                        n > e[a] ? i.push(e[a]) : r.push(e[a]);
                    return o(i).concat(n, o(r))
                }
                function a(e, t, n, i, a, s) {
                    var u = r(n)
                        , d = r(i);
                    u = o(u),
                        a = a || "01",
                        e = e.toUpperCase(),
                        s = s || Math.round((new Date).getTime() / 1e3);
                    var f = d.length ? (0,
                        l["default"])(d.join("&")) : ""
                        , p = t + (u.length ? "?" + u.join("&") : "")
                        , h = s.toString(16)
                        , g = a + "\n" + e + "\n" + f + "\n" + p + "\n" + s
                        , m = (0,c["default"])(g, "ytU7vwqIx2UXQNsi");
                    return a + m + h
                }
                var s = n(1)
                    , c = i(s)
                    , u = n(2)
                    , l = i(u);
                e.exports = a
            }
            , function(e, t, n) {
                !function(i, r) {
                    e.exports = t = r(n(0))
                }(this, function(e) {
                    !function() {
                        var t = e
                            , n = t.lib
                            , i = n.Base
                            , r = t.enc
                            , o = r.Utf8
                            , a = t.algo;
                        a.HMAC = i.extend({
                            init: function(e, t) {
                                e = this._hasher = new e.init,
                                "string" == typeof t && (t = o.parse(t));
                                var n = e.blockSize
                                    , i = 4 * n;
                                t.sigBytes > i && (t = e.finalize(t)),
                                    t.clamp();
                                for (var r = this._oKey = t.clone(), a = this._iKey = t.clone(), s = r.words, c = a.words, u = 0; n > u; u++)
                                    s[u] ^= 1549556828,
                                        c[u] ^= 909522486;
                                r.sigBytes = a.sigBytes = i,
                                    this.reset()
                            },
                            reset: function() {
                                var e = this._hasher;
                                e.reset(),
                                    e.update(this._iKey)
                            },
                            update: function(e) {
                                return this._hasher.update(e),
                                    this
                            },
                            finalize: function(e) {
                                var t = this._hasher
                                    , n = t.finalize(e);
                                t.reset();
                                var i = t.finalize(this._oKey.clone().concat(n));
                                return i
                            }
                        })
                    }()
                })
            }
            , function(e, t, n) {
                !function(i, r) {
                    e.exports = t = r(n(0))
                }(this, function(e) {
                    return function() {
                        var t = e
                            , n = t.lib
                            , i = n.WordArray
                            , r = n.Hasher
                            , o = t.algo
                            , a = []
                            , s = o.SHA1 = r.extend({
                            _doReset: function() {
                                this._hash = new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
                            },
                            _doProcessBlock: function(e, t) {
                                for (var n = this._hash.words, i = n[0], r = n[1], o = n[2], s = n[3], c = n[4], u = 0; 80 > u; u++) {
                                    if (16 > u)
                                        a[u] = 0 | e[t + u];
                                    else {
                                        var l = a[u - 3] ^ a[u - 8] ^ a[u - 14] ^ a[u - 16];
                                        a[u] = l << 1 | l >>> 31
                                    }
                                    var d = (i << 5 | i >>> 27) + c + a[u];
                                    d += 20 > u ? (r & o | ~r & s) + 1518500249 : 40 > u ? (r ^ o ^ s) + 1859775393 : 60 > u ? (r & o | r & s | o & s) - 1894007588 : (r ^ o ^ s) - 899497514,
                                        c = s,
                                        s = o,
                                        o = r << 30 | r >>> 2,
                                        r = i,
                                        i = d
                                }
                                n[0] = n[0] + i | 0,
                                    n[1] = n[1] + r | 0,
                                    n[2] = n[2] + o | 0,
                                    n[3] = n[3] + s | 0,
                                    n[4] = n[4] + c | 0
                            },
                            _doFinalize: function() {
                                var e = this._data
                                    , t = e.words
                                    , n = 8 * this._nDataBytes
                                    , i = 8 * e.sigBytes;
                                return t[i >>> 5] |= 128 << 24 - i % 32,
                                    t[(i + 64 >>> 9 << 4) + 14] = Math.floor(n / 4294967296),
                                    t[(i + 64 >>> 9 << 4) + 15] = n,
                                    e.sigBytes = 4 * t.length,
                                    this._process(),
                                    this._hash
                            },
                            clone: function() {
                                var e = r.clone.call(this);
                                return e._hash = this._hash.clone(),
                                    e
                            }
                        });
                        t.SHA1 = r._createHelper(s),
                            t.HmacSHA1 = r._createHmacHelper(s)
                    }(),
                        e.SHA1
                })
            }
        ])
    }
        , {}],
    4: [function(e, t, n) {
        function i(e) {
            return d.app.isBeibei && e.indexOf("//api.beibei.com") > -1 ? !0 : !1
        }
        function r(e) {
            return b[e] ? !0 : (b[e] = !0,
                !1)
        }
        function o(e) {
            return /https?:/.test(e) || (e = location.protocol + e),
                new h.httpurl(e)
        }
        function a(e) {
            for (var t in e)
                "undefined" != typeof e[t] && null !== e[t] ? e[t] = e[t] + "" : e[t] = "";
            return e
        }
        function s(e) {
            var t = {
                url: "//api.beibei.com/mroute.html?method=",
                data: {},
                query: {},
                form: {},
                method: "",
                type: "GET",
                dataType: "json",
                jsonpCallback: "",
                cache: !0,
                beforeSend: function() {},
                success: function() {},
                failure: function() {},
                error: function() {},
                complete: function() {},
                loginHandler: null,
                noFailure: !1,
                noHybridAjax: !1,
                encrypt: !0,
                showLoginDialog: !0,
                wxItemType: "bbtm"
            };
            return e = $.extend(t, e),
                e.type = e.type.toUpperCase(),
                e.url += e.method || "",
                e.uri = o(e.url),
                e.data = a(e.data),
                e.urlKey = e.url + Object.keys(e.data).map(function(t) {
                    return encodeURIComponent(t) + "=" + encodeURIComponent(e.data[t])
                }).join("&"),
            "POST" === e.type && e.url.indexOf("//api.beibei.com") > -1 && (e.data.rams_device_id = g.get()),
                "GET" === e.type ? (e.query = $.extend({}, e.uri.params, e.data),
                    e.form = {}) : (e.query = $.extend({}, e.uri.params),
                    e.form = e.data),
                e
        }
        function c(e) {
            e.beforeSend() !== !1 && window.bbhybrid.config({
                jsApiList: {
                    ajax: "optional",
                    checkLogin: "optional"
                }
            }, function() {
                window.bbhybrid.ajax({
                    apiURL: "",
                    url: "<default-api-url>",
                    query: e.query,
                    form: e.form,
                    method: e.type
                }, function(t, n) {
                    t ? 1 === t.code || 2 === t.code || 6 === t.code ? window.bbhybrid.checkLogin(function(t, n) {
                        (n === !1 || 0 === parseInt(n, 10)) && ("function" == typeof e.loginHandler ? e.loginHandler() : f.checkLogin(function() {
                            f.login(function() {
                                e.showLoginDialog && location.reload()
                            }, e.wxItemType)
                        }, e.showLoginDialog))
                    }) : e.error(t) : n && "2" === n.err_code ? "function" == typeof e.loginHandler ? e.loginHandler() : f.checkLogin(function() {
                        f.login(function() {
                            e.showLoginDialog && location.reload()
                        }, e.wxItemType)
                    }, e.showLoginDialog) : n && "101" === n.err_code ? location.href = n.data.target + "&redirect=" + encodeURIComponent(location.href) : n.success !== !1 || e.noFailure ? e.success(n) : (p.note(n.message),
                        e.failure(n)),
                        e.complete(),
                        b[e.urlKey] = !1
                })
            })
        }
        function u(e) {
            return e.encrypt && /\/\/api\./.test(e.url) && (e.query._abr_ = m(e.type, e.uri.pathname, e.query, e.form),
                e.url += (e.url.indexOf("?") > -1 ? "&" : "?") + "_abr_=" + e.query._abr_),
                $.ajax({
                    url: e.url,
                    type: e.type,
                    data: e.data,
                    dataType: e.dataType,
                    jsonpCallback: e.jsonpCallback,
                    cache: e.cache,
                    xhrFields: {
                        withCredentials: !0
                    },
                    beforeSend: e.beforeSend,
                    success: function(t, n, i) {
                        t && "2" === t.err_code ? "function" == typeof e.loginHandler ? e.loginHandler() : f.checkLogin(function() {
                            f.login(function() {
                                e.showLoginDialog && location.reload()
                            }, e.wxItemType)
                        }, e.showLoginDialog) : t && "101" === t.err_code ? location.href = t.data.target + "&redirect=" + encodeURIComponent(location.href) : t.success !== !1 || e.noFailure ? e.success(t, n, i) : (p.note(t.message),
                            e.failure(t, n, i))
                    },
                    error: function(t, n, i) {
                        e.error(t, n, i)
                    },
                    complete: function(t, n) {
                        b[e.urlKey] = !1,
                            e.complete(t, n)
                    }
                })
        }
        function l(e) {
            return e = s(e),
                r(e.urlKey) ? !1 : e.noHybridAjax || !i(e.url) ? u(e) : void c(e)
        }
        var d = e("@beibei/env")
            , f = e("@beibei/login")
            , p = e("@beibei/popup")
            , h = e("@beibei/httpurl")
            , g = e("@beibei/fingerprint")
            , m = e("@base/abr")
            , b = {};
        t.exports = l
    }
        , {
            "@base/abr": 2,
            "@beibei/env": 17,
            "@beibei/fingerprint": 18,
            "@beibei/httpurl": 20,
            "@beibei/login": 30,
            "@beibei/popup": 33
        }],
    5: [function(e, t, n) {
        arguments[4][1][0].apply(n, arguments)
    }
        , {
            "./src/index": 7,
            dup: 1
        }],
    6: [function(e, t, n) {
        !function(e, t) {
            function n(t, n, i) {
                e.WeixinJSBridge ? WeixinJSBridge.invoke(t, r(n), function(e) {
                    a(t, e, i)
                }) : u(t, i)
            }
            function i(t, n, i) {
                e.WeixinJSBridge ? WeixinJSBridge.on(t, function(e) {
                    i && i.trigger && i.trigger(e),
                        a(t, e, n)
                }) : i ? u(t, i) : u(t, n)
            }
            function r(e) {
                return e = e || {},
                    e.appId = O.appId,
                    e.verifyAppId = O.appId,
                    e.verifySignType = "sha1",
                    e.verifyTimestamp = O.timestamp + "",
                    e.verifyNonceStr = O.nonceStr,
                    e.verifySignature = O.signature,
                    e
            }
            function o(e) {
                return {
                    timeStamp: e.timestamp + "",
                    nonceStr: e.nonceStr,
                    "package": e["package"],
                    paySign: e.paySign,
                    signType: e.signType || "SHA1"
                }
            }
            function a(e, t, n) {
                var i, r, o;
                switch (delete t.err_code,
                    delete t.err_desc,
                    delete t.err_detail,
                    i = t.errMsg,
                i || (i = t.err_msg,
                    delete t.err_msg,
                    i = s(e, i),
                    t.errMsg = i),
                    n = n || {},
                n._complete && (n._complete(t),
                    delete n._complete),
                    i = t.errMsg || "",
                O.debug && !n.isInnerInvoke && alert(JSON.stringify(t)),
                    r = i.indexOf(":"),
                    o = i.substring(r + 1)) {
                    case "ok":
                        n.success && n.success(t);
                        break;
                    case "cancel":
                        n.cancel && n.cancel(t);
                        break;
                    default:
                        n.fail && n.fail(t)
                }
                n.complete && n.complete(t)
            }
            function s(e, t) {
                var n, i, r = e, o = g[r];
                return o && (r = o),
                    n = "ok",
                t && (i = t.indexOf(":"),
                    n = t.substring(i + 1),
                "confirm" == n && (n = "ok"),
                "failed" == n && (n = "fail"),
                -1 != n.indexOf("failed_") && (n = n.substring(7)),
                -1 != n.indexOf("fail_") && (n = n.substring(5)),
                    n = n.replace(/_/g, " "),
                    n = n.toLowerCase(),
                ("access denied" == n || "no permission to execute" == n) && (n = "permission denied"),
                "config" == r && "function not exist" == n && (n = "ok"),
                "" == n && (n = "fail")),
                    t = r + ":" + n
            }
            function c(e) {
                var t, n, i, r;
                if (e) {
                    for (t = 0,
                             n = e.length; n > t; ++t)
                        i = e[t],
                            r = h[i],
                        r && (e[t] = r);
                    return e
                }
            }
            function u(e, t) {
                if (!(!O.debug || t && t.isInnerInvoke)) {
                    var n = g[e];
                    n && (e = n),
                    t && t._complete && delete t._complete,
                        console.log('"' + e + '",', t || "")
                }
            }
            function l() {
                0 != j.preVerifyState && (_ || w || O.debug || "6.0.2" > C || j.systemType < 0 || T || (T = !0,
                    j.appId = O.appId,
                    j.initTime = I.initEndTime - I.initStartTime,
                    j.preVerifyTime = I.preVerifyEndTime - I.preVerifyStartTime,
                    N.getNetworkType({
                        isInnerInvoke: !0,
                        success: function(e) {
                            var t, n;
                            j.networkType = e.networkType,
                                t = "http://open.weixin.qq.com/sdk/report?v=" + j.version + "&o=" + j.preVerifyState + "&s=" + j.systemType + "&c=" + j.clientVersion + "&a=" + j.appId + "&n=" + j.networkType + "&i=" + j.initTime + "&p=" + j.preVerifyTime + "&u=" + j.url,
                                n = new Image,
                                n.src = t
                        }
                    })))
            }
            function d() {
                return (new Date).getTime()
            }
            function f(t) {
                x && (e.WeixinJSBridge ? t() : m.addEventListener && m.addEventListener("WeixinJSBridgeReady", t, !1))
            }
            function p() {
                N.invoke || (N.invoke = function(t, n, i) {
                        e.WeixinJSBridge && WeixinJSBridge.invoke(t, r(n), i)
                    }
                        ,
                        N.on = function(t, n) {
                            e.WeixinJSBridge && WeixinJSBridge.on(t, n)
                        }
                )
            }
            var h, g, m, b, v, y, _, w, x, k, S, C, T, E, I, j, O, D, M, N;
            return e.jWeixin ? void 0 : (h = {
                config: "preVerifyJSAPI",
                onMenuShareTimeline: "menu:share:timeline",
                onMenuShareAppMessage: "menu:share:appmessage",
                onMenuShareQQ: "menu:share:qq",
                onMenuShareWeibo: "menu:share:weiboApp",
                onMenuShareQZone: "menu:share:QZone",
                previewImage: "imagePreview",
                getLocation: "geoLocation",
                openProductSpecificView: "openProductViewWithPid",
                addCard: "batchAddCard",
                openCard: "batchViewCard",
                chooseWXPay: "getBrandWCPayRequest"
            },
                g = function() {
                    var e, t = {};
                    for (e in h)
                        t[h[e]] = e;
                    return t
                }(),
                m = e.document,
                b = m.title,
                v = navigator.userAgent.toLowerCase(),
                y = navigator.platform.toLowerCase(),
                _ = !(!y.match("mac") && !y.match("win")),
                w = -1 != v.indexOf("wxdebugger"),
                x = -1 != v.indexOf("micromessenger"),
                k = -1 != v.indexOf("android"),
                S = -1 != v.indexOf("iphone") || -1 != v.indexOf("ipad"),
                C = function() {
                    var e = v.match(/micromessenger\/(\d+\.\d+\.\d+)/) || v.match(/micromessenger\/(\d+\.\d+)/);
                    return e ? e[1] : ""
                }(),
                T = !1,
                E = !1,
                I = {
                    initStartTime: d(),
                    initEndTime: 0,
                    preVerifyStartTime: 0,
                    preVerifyEndTime: 0
                },
                j = {
                    version: 1,
                    appId: "",
                    initTime: 0,
                    preVerifyTime: 0,
                    networkType: "",
                    preVerifyState: 1,
                    systemType: S ? 1 : k ? 2 : -1,
                    clientVersion: C,
                    url: encodeURIComponent(location.href)
                },
                O = {},
                D = {
                    _completes: []
                },
                M = {
                    state: 0,
                    data: {}
                },
                f(function() {
                    I.initEndTime = d()
                }),
                N = {
                    config: function(e) {
                        O = e,
                            u("config", e);
                        var t = O.check === !1 ? !1 : !0;
                        f(function() {
                            var e, i, r;
                            if (t)
                                n(h.config, {
                                    verifyJsApiList: c(O.jsApiList)
                                }, function() {
                                    D._complete = function(e) {
                                        I.preVerifyEndTime = d(),
                                            M.state = 1,
                                            M.data = e
                                    }
                                        ,
                                        D.success = function() {
                                            j.preVerifyState = 0
                                        }
                                        ,
                                        D.fail = function(e) {
                                            D._fail ? D._fail(e) : M.state = -1
                                        }
                                    ;
                                    var e = D._completes;
                                    return e.push(function() {
                                        l()
                                    }),
                                        D.complete = function() {
                                            for (var t = 0, n = e.length; n > t; ++t)
                                                e[t]();
                                            D._completes = []
                                        }
                                        ,
                                        D
                                }()),
                                    I.preVerifyStartTime = d();
                            else {
                                for (M.state = 1,
                                         e = D._completes,
                                         i = 0,
                                         r = e.length; r > i; ++i)
                                    e[i]();
                                D._completes = []
                            }
                        }),
                        O.beta && p()
                    },
                    ready: function(e) {
                        0 != M.state ? e() : (D._completes.push(e),
                        !x && O.debug && e())
                    },
                    error: function(e) {
                        "6.0.2" > C || E || (E = !0,
                            -1 == M.state ? e(M.data) : D._fail = e)
                    },
                    checkJsApi: function(e) {
                        var t = function(e) {
                            var t, n, i = e.checkResult;
                            for (t in i)
                                n = g[t],
                                n && (i[n] = i[t],
                                    delete i[t]);
                            return e
                        };
                        n("checkJsApi", {
                            jsApiList: c(e.jsApiList)
                        }, function() {
                            return e._complete = function(e) {
                                if (k) {
                                    var n = e.checkResult;
                                    n && (e.checkResult = JSON.parse(n))
                                }
                                e = t(e)
                            }
                                ,
                                e
                        }())
                    },
                    onMenuShareTimeline: function(e) {
                        i(h.onMenuShareTimeline, {
                            complete: function() {
                                n("shareTimeline", {
                                    title: e.title || b,
                                    desc: e.title || b,
                                    img_url: e.imgUrl || "",
                                    link: e.link || location.href,
                                    type: e.type || "link",
                                    data_url: e.dataUrl || ""
                                }, e)
                            }
                        }, e)
                    },
                    onMenuShareAppMessage: function(e) {
                        i(h.onMenuShareAppMessage, {
                            complete: function() {
                                n("sendAppMessage", {
                                    title: e.title || b,
                                    desc: e.desc || "",
                                    link: e.link || location.href,
                                    img_url: e.imgUrl || "",
                                    type: e.type || "link",
                                    data_url: e.dataUrl || ""
                                }, e)
                            }
                        }, e)
                    },
                    onMenuShareQQ: function(e) {
                        i(h.onMenuShareQQ, {
                            complete: function() {
                                n("shareQQ", {
                                    title: e.title || b,
                                    desc: e.desc || "",
                                    img_url: e.imgUrl || "",
                                    link: e.link || location.href
                                }, e)
                            }
                        }, e)
                    },
                    onMenuShareWeibo: function(e) {
                        i(h.onMenuShareWeibo, {
                            complete: function() {
                                n("shareWeiboApp", {
                                    title: e.title || b,
                                    desc: e.desc || "",
                                    img_url: e.imgUrl || "",
                                    link: e.link || location.href
                                }, e)
                            }
                        }, e)
                    },
                    onMenuShareQZone: function(e) {
                        i(h.onMenuShareQZone, {
                            complete: function() {
                                n("shareQZone", {
                                    title: e.title || b,
                                    desc: e.desc || "",
                                    img_url: e.imgUrl || "",
                                    link: e.link || location.href
                                }, e)
                            }
                        }, e)
                    },
                    startRecord: function(e) {
                        n("startRecord", {}, e)
                    },
                    stopRecord: function(e) {
                        n("stopRecord", {}, e)
                    },
                    onVoiceRecordEnd: function(e) {
                        i("onVoiceRecordEnd", e)
                    },
                    playVoice: function(e) {
                        n("playVoice", {
                            localId: e.localId
                        }, e)
                    },
                    pauseVoice: function(e) {
                        n("pauseVoice", {
                            localId: e.localId
                        }, e)
                    },
                    stopVoice: function(e) {
                        n("stopVoice", {
                            localId: e.localId
                        }, e)
                    },
                    onVoicePlayEnd: function(e) {
                        i("onVoicePlayEnd", e)
                    },
                    uploadVoice: function(e) {
                        n("uploadVoice", {
                            localId: e.localId,
                            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                        }, e)
                    },
                    downloadVoice: function(e) {
                        n("downloadVoice", {
                            serverId: e.serverId,
                            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                        }, e)
                    },
                    translateVoice: function(e) {
                        n("translateVoice", {
                            localId: e.localId,
                            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                        }, e)
                    },
                    chooseImage: function(e) {
                        n("chooseImage", {
                            scene: "1|2",
                            count: e.count || 9,
                            sizeType: e.sizeType || ["original", "compressed"],
                            sourceType: e.sourceType || ["album", "camera"]
                        }, function() {
                            return e._complete = function(e) {
                                if (k) {
                                    var t = e.localIds;
                                    t && (e.localIds = JSON.parse(t))
                                }
                            }
                                ,
                                e
                        }())
                    },
                    previewImage: function(e) {
                        n(h.previewImage, {
                            current: e.current,
                            urls: e.urls
                        }, e)
                    },
                    uploadImage: function(e) {
                        n("uploadImage", {
                            localId: e.localId,
                            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                        }, e)
                    },
                    downloadImage: function(e) {
                        n("downloadImage", {
                            serverId: e.serverId,
                            isShowProgressTips: 0 == e.isShowProgressTips ? 0 : 1
                        }, e)
                    },
                    getNetworkType: function(e) {
                        var t = function(e) {
                            var t, n, i, r = e.errMsg;
                            if (e.errMsg = "getNetworkType:ok",
                                t = e.subtype,
                                delete e.subtype,
                                t)
                                e.networkType = t;
                            else
                                switch (n = r.indexOf(":"),
                                    i = r.substring(n + 1)) {
                                    case "wifi":
                                    case "edge":
                                    case "wwan":
                                        e.networkType = i;
                                        break;
                                    default:
                                        e.errMsg = "getNetworkType:fail"
                                }
                            return e
                        };
                        n("getNetworkType", {}, function() {
                            return e._complete = function(e) {
                                e = t(e)
                            }
                                ,
                                e
                        }())
                    },
                    openLocation: function(e) {
                        n("openLocation", {
                            latitude: e.latitude,
                            longitude: e.longitude,
                            name: e.name || "",
                            address: e.address || "",
                            scale: e.scale || 28,
                            infoUrl: e.infoUrl || ""
                        }, e)
                    },
                    getLocation: function(e) {
                        e = e || {},
                            n(h.getLocation, {
                                type: e.type || "wgs84"
                            }, function() {
                                return e._complete = function(e) {
                                    delete e.type
                                }
                                    ,
                                    e
                            }())
                    },
                    hideOptionMenu: function(e) {
                        n("hideOptionMenu", {}, e)
                    },
                    showOptionMenu: function(e) {
                        n("showOptionMenu", {}, e)
                    },
                    closeWindow: function(e) {
                        e = e || {},
                            n("closeWindow", {}, e)
                    },
                    hideMenuItems: function(e) {
                        n("hideMenuItems", {
                            menuList: e.menuList
                        }, e)
                    },
                    showMenuItems: function(e) {
                        n("showMenuItems", {
                            menuList: e.menuList
                        }, e)
                    },
                    hideAllNonBaseMenuItem: function(e) {
                        n("hideAllNonBaseMenuItem", {}, e)
                    },
                    showAllNonBaseMenuItem: function(e) {
                        n("showAllNonBaseMenuItem", {}, e)
                    },
                    scanQRCode: function(e) {
                        e = e || {},
                            n("scanQRCode", {
                                needResult: e.needResult || 0,
                                scanType: e.scanType || ["qrCode", "barCode"]
                            }, function() {
                                return e._complete = function(e) {
                                    var t, n;
                                    S && (t = e.resultStr,
                                    t && (n = JSON.parse(t),
                                        e.resultStr = n && n.scan_code && n.scan_code.scan_result))
                                }
                                    ,
                                    e
                            }())
                    },
                    openProductSpecificView: function(e) {
                        n(h.openProductSpecificView, {
                            pid: e.productId,
                            view_type: e.viewType || 0,
                            ext_info: e.extInfo
                        }, e)
                    },
                    addCard: function(e) {
                        var t, i, r, o, a = e.cardList, s = [];
                        for (t = 0,
                                 i = a.length; i > t; ++t)
                            r = a[t],
                                o = {
                                    card_id: r.cardId,
                                    card_ext: r.cardExt
                                },
                                s.push(o);
                        n(h.addCard, {
                            card_list: s
                        }, function() {
                            return e._complete = function(e) {
                                var t, n, i, r = e.card_list;
                                if (r) {
                                    for (r = JSON.parse(r),
                                             t = 0,
                                             n = r.length; n > t; ++t)
                                        i = r[t],
                                            i.cardId = i.card_id,
                                            i.cardExt = i.card_ext,
                                            i.isSuccess = i.is_succ ? !0 : !1,
                                            delete i.card_id,
                                            delete i.card_ext,
                                            delete i.is_succ;
                                    e.cardList = r,
                                        delete e.card_list
                                }
                            }
                                ,
                                e
                        }())
                    },
                    chooseCard: function(e) {
                        n("chooseCard", {
                            app_id: O.appId,
                            location_id: e.shopId || "",
                            sign_type: e.signType || "SHA1",
                            card_id: e.cardId || "",
                            card_type: e.cardType || "",
                            card_sign: e.cardSign,
                            time_stamp: e.timestamp + "",
                            nonce_str: e.nonceStr
                        }, function() {
                            return e._complete = function(e) {
                                e.cardList = e.choose_card_info,
                                    delete e.choose_card_info
                            }
                                ,
                                e
                        }())
                    },
                    openCard: function(e) {
                        var t, i, r, o, a = e.cardList, s = [];
                        for (t = 0,
                                 i = a.length; i > t; ++t)
                            r = a[t],
                                o = {
                                    card_id: r.cardId,
                                    code: r.code
                                },
                                s.push(o);
                        n(h.openCard, {
                            card_list: s
                        }, e)
                    },
                    chooseWXPay: function(e) {
                        n(h.chooseWXPay, o(e), e)
                    }
                },
            t && (e.wx = e.jWeixin = N),
                N)
        }(window, !0)
    }
        , {}],
    7: [function(e, t, n) {
        function i(e, t) {
            if (o.app.isWeixin) {
                if (window.HAS_WINXIN_CONFIG)
                    return void ("function" == typeof e && window.wx.ready(e));
                $.ajax({
                    type: "GET",
                    url: s,
                    data: {
                        method: "beibei.wx.get.sign.package",
                        url: encodeURIComponent(r.encode(location.href))
                    },
                    dataType: "json",
                    cache: !0,
                    success: function(n) {
                        var i = n.data;
                        n.success ? (window.wx.config({
                            debug: t || !1,
                            appId: i.appId,
                            timestamp: i.timestamp,
                            nonceStr: i.nonceStr,
                            signature: i.signature,
                            jsApiList: c
                        }),
                        "function" == typeof e && window.wx.ready(e)) : console.error("获取微信签名失败:" + n.message)
                    }
                })
            }
        }
        e("@beibei/weixin-sdk");
        var r = e("@beibei/encode/base64_utf8")
            , o = e("@beibei/env")
            , a = function(e) {
            var t = e.split(".");
            return t[0] = "api",
                t.join(".")
        }
            , s = window.location.protocol + "//" + a(window.location.host) + "/mroute.html"
            , c = ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone", "startRecord", "stopRecord", "onVoiceRecordEnd", "playVoice", "pauseVoice", "stopVoice", "onVoicePlayEnd", "uploadVoice", "downloadVoice", "chooseImage", "previewImage", "uploadImage", "downloadImage", "translateVoice", "getNetworkType", "openLocation", "getLocation", "hideOptionMenu", "showOptionMenu", "hideMenuItems", "showMenuItems", "hideAllNonBaseMenuItem", "showAllNonBaseMenuItem", "closeWindow", "scanQRCode", "chooseWXPay", "openProductSpecificView", "addCard", "chooseCard", "openCard"];
        setTimeout(function() {
            window.HAS_SHARE_TIMELINE || i(function() {
                window.wx.hideMenuItems({
                    menuList: ["menuItem:share:timeline"]
                })
            })
        }, 1e3)
    }
        , {
            "@beibei/encode/base64_utf8": 11,
            "@beibei/env": 17,
            "@beibei/weixin-sdk": 6
        }],
    8: [function(e, t, n) {
        t.exports = e("./lib/beibei_m")
    }
        , {
            "./lib/beibei_m": 9
        }],
    9: [function(e, t, n) {
        t.exports = function(e) {
            function t(i) {
                if (n[i])
                    return n[i].exports;
                var r = n[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                };
                return e[i].call(r.exports, r, r.exports, t),
                    r.l = !0,
                    r.exports
            }
            var n = {};
            return t.m = e,
                t.c = n,
                t.i = function(e) {
                    return e
                }
                ,
                t.d = function(e, t, n) {
                    Object.defineProperty(e, t, {
                        configurable: !1,
                        enumerable: !0,
                        get: n
                    })
                }
                ,
                t.n = function(e) {
                    var n = e && e.__esModule ? function() {
                            return e["default"]
                        }
                        : function() {
                            return e
                        }
                    ;
                    return t.d(n, "a", n),
                        n
                }
                ,
                t.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                ,
                t.p = "",
                t(t.s = 9)
        }([function(e, t) {
            e.exports = function() {
                return {
                    ignoreErrors: ["WeixinJSBridge is not defined", "Can't find variable: WeixinJSBridge", "null", "Can't find variable: mraid", "diableNightMode is not defined", "Can't find variable: IsClickShowFun", "The quota has been exceeded.", "Not enough arguments.", "Can't find variable: _WXJS", "getClipboard is not defined", "Cannot redefine property: BCMain", /undefined is not an object.*/, "Object [object Object] has no method 'sendMessage'", "shareCallback is not defined", /QuotaExceededError.*/, "Can't find variable: getMoreInfo", '""', "Unknown error", /.*captureException.*/],
                    ignoreUrls: [],
                    sampleRate: .1
                }
            }
        }
            , function(e, t) {
                e.exports = function() {
                    function e() {
                        var e = window.location.href
                            , t = e.match(/\https?:\/\/([a-z\.]+)/)
                            , n = t && t[1]
                            , i = ["www.beibei.com", "seller.beibei.com", "hx.beibei.com", "yuying.beibei.com", "you.beibei.com", "global.beibei.com"]
                            , r = i.indexOf(n) > -1;
                        return r && console.log("IMAGE_SUFFIX_IGNORED: " + n),
                            r
                    }
                    function t() {
                        var e = 1e4;
                        n(),
                            setInterval(n, e)
                    }
                    function n() {
                        var e = performance.getEntries()
                            , t = e.length
                            , n = [];
                        if (e = e && e.slice(s),
                        e && e.length && (s = t,
                            e.forEach(function(e) {
                                var t = e.name;
                                t && !i(t) && n.push(t)
                            }),
                            n.length)) {
                            var r = o(n);
                            l && a(r),
                                console.warn(r)
                        }
                    }
                    function i(e) {
                        if (r(e))
                            return !0;
                        var t = /^https?:\/\/b[1-9]+\.hucdn\.com/
                            , n = /\!\S+$/;
                        return !(t.test(e) && !n.test(e))
                    }
                    function r(e) {
                        var t = e.replace(/https?:\/\//, "");
                        return !!(c.length && c.indexOf(t) > -1 || e.match(/\.gif$/) || /^https?:\/\/b5\.hucdn\.com/.test(e) || /^https?:\/\/b2\.hucdn\.com\/upload\/hmp/.test(e))
                    }
                    function o(e) {
                        return "IMG_SUFFIX_REQUIRED:" + e.join(",")
                    }
                    if (window.performance && window.performance.getEntries && !e()) {
                        var a = arguments[2] || function() {}
                            , s = 0
                            , c = ["b7.hucdn.com/favicon.ico"]
                            , u = .1
                            , l = Math.random() < u;
                        window.PERF_FROM_LOCAL_CACHE ? "complete" === document.readyState ? t() : document.addEventListener("readystatechange", function() {
                            "complete" === document.readyState && t()
                        }) : window.addEventListener("load", t)
                    }
                }
            }
            , function(e, t) {
                e.exports = function(e, t) {
                    if ("https:" !== window.location.protocol.toLowerCase()) {
                        var n = ["script", "iframe"]
                            , i = ["beibei.com", "live800.com", "mizhe.com", "husor.com.cn", "hucdn.com", "127.0.0.1", "openapi.baidu.com", "api.map.baidu.com", "apps.bdimg.com", "google-analytics.com", "yuerbao.com"]
                            , r = []
                            , o = [/^webviewprogressproxy/, /^beibeiapp/, /^beibei/, /^mizheapp/, /^mizhe/, /^yurebao/]
                            , a = []
                            , s = ["http"];
                        i.forEach(function(e) {
                            var t = new RegExp("^(" + s.join("|") + ")://[\\w-\\.]*?" + e);
                            r.push(t)
                        }),
                            a = r.concat(o);
                        var c = function(e) {
                            if ("" === e)
                                return !0;
                            var t = !1;
                            return a.forEach(function(n) {
                                return n.test(e) ? (t = !0,
                                    !1) : void 0
                            }),
                                t
                        }
                            , u = function(e) {
                            e.forEach(function(e) {
                                Array.prototype.slice.call(e.addedNodes).forEach(function(e) {
                                    n.forEach(function(t) {
                                        e.tagName === t.toUpperCase() && (c(e.src) || e.parentNode.removeChild(e))
                                    })
                                })
                            })
                        }
                            , l = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
                            , d = !!l;
                        d && new l(u).observe(document.getElementsByTagName("body")[0], {
                            childList: !0,
                            subtree: !0
                        });
                        try {
                            Object.defineProperty(window, "BCMain", {
                                value: function() {},
                                configurable: !1
                            }),
                                Object.defineProperties(window.BCMain, {
                                    _js: {
                                        value: "127.0.0.1",
                                        configurable: !1
                                    },
                                    _redirect: {
                                        value: "127.0.0.1",
                                        configurable: !1
                                    },
                                    _ads: {
                                        value: "127.0.0.1",
                                        configurable: !1
                                    },
                                    _cms: {
                                        value: "127.0.0.1",
                                        configurable: !1
                                    },
                                    _third_req: {
                                        value: "127.0.0.1",
                                        configurable: !1
                                    },
                                    show: {
                                        value: function() {},
                                        configurable: !1
                                    },
                                    third_req: {
                                        value: function() {},
                                        configurable: !1
                                    },
                                    ready: {
                                        value: function() {},
                                        configurable: !1
                                    }
                                }),
                            "undefined" != typeof Object.freeze && Object.freeze(window.BCMain)
                        } catch (f) {}
                    }
                }
            }
            , function(e, t) {
                function n() {
                    throw new Error("setTimeout has not been defined")
                }
                function i() {
                    throw new Error("clearTimeout has not been defined")
                }
                function r(e) {
                    if (l === setTimeout)
                        return setTimeout(e, 0);
                    if ((l === n || !l) && setTimeout)
                        return l = setTimeout,
                            setTimeout(e, 0);
                    try {
                        return l(e, 0)
                    } catch (t) {
                        try {
                            return l.call(null, e, 0)
                        } catch (t) {
                            return l.call(this, e, 0)
                        }
                    }
                }
                function o(e) {
                    if (d === clearTimeout)
                        return clearTimeout(e);
                    if ((d === i || !d) && clearTimeout)
                        return d = clearTimeout,
                            clearTimeout(e);
                    try {
                        return d(e)
                    } catch (t) {
                        try {
                            return d.call(null, e)
                        } catch (t) {
                            return d.call(this, e)
                        }
                    }
                }
                function a() {
                    g && p && (g = !1,
                        p.length ? h = p.concat(h) : m = -1,
                    h.length && s())
                }
                function s() {
                    if (!g) {
                        var e = r(a);
                        g = !0;
                        for (var t = h.length; t; ) {
                            for (p = h,
                                     h = []; ++m < t; )
                                p && p[m].run();
                            m = -1,
                                t = h.length
                        }
                        p = null,
                            g = !1,
                            o(e)
                    }
                }
                function c(e, t) {
                    this.fun = e,
                        this.array = t
                }
                function u() {}
                var l, d, f = e.exports = {};
                !function() {
                    try {
                        l = "function" == typeof setTimeout ? setTimeout : n
                    } catch (e) {
                        l = n
                    }
                    try {
                        d = "function" == typeof clearTimeout ? clearTimeout : i
                    } catch (e) {
                        d = i
                    }
                }();
                var p, h = [], g = !1, m = -1;
                f.nextTick = function(e) {
                    var t = new Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var n = 1; n < arguments.length; n++)
                            t[n - 1] = arguments[n];
                    h.push(new c(e,t)),
                    1 !== h.length || g || r(s)
                }
                    ,
                    c.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }
                    ,
                    f.title = "browser",
                    f.browser = !0,
                    f.env = {},
                    f.argv = [],
                    f.version = "",
                    f.versions = {},
                    f.on = u,
                    f.addListener = u,
                    f.once = u,
                    f.off = u,
                    f.removeListener = u,
                    f.removeAllListeners = u,
                    f.emit = u,
                    f.prependListener = u,
                    f.prependOnceListener = u,
                    f.listeners = function(e) {
                        return []
                    }
                    ,
                    f.binding = function(e) {
                        throw new Error("process.binding is not supported")
                    }
                    ,
                    f.cwd = function() {
                        return "/"
                    }
                    ,
                    f.chdir = function(e) {
                        throw new Error("process.chdir is not supported")
                    }
                    ,
                    f.umask = function() {
                        return 0
                    }
            }
            , function(t, n) {
                t.exports = e("raven-js")
            }
            , , , , , function(e, t, n) {
                (function(t) {
                        function i(e) {
                            s.captureMessage(e, {
                                level: "info"
                            })
                        }
                        function r(e) {
                            s.captureMessage(JSON.stringify(e), {
                                level: "warning"
                            })
                        }
                        function o(e) {
                            s.captureException(new Error(JSON.stringify(e)), {
                                level: "error"
                            })
                        }
                        function a(e, t) {
                            s.captureException(new Error(JSON.stringify(e)), {
                                level: "fatal",
                                tags: {
                                    business: t || "public"
                                }
                            })
                        }
                        var s = n(4)
                            , c = n(0)()
                            , u = n(2)
                            , l = n(1);
                        s.config("development" !== t.env.NODE_ENV && "https://fa95fd55114f449ba06952cc783e744f@js.str.hucdn.com/9", c).install(),
                            u(i, r),
                            l(i, r, o),
                            e.exports = {
                                info: i,
                                warn: r,
                                error: o,
                                fatal: a
                            }
                    }
                ).call(t, n(3))
            }
        ])
    }
        , {
            "raven-js": 40
        }],
    10: [function(e, t, n) {
        t.exports = function(e, t, n) {
            var i, r, o, a;
            return arguments.length > 1 && "[object Object]" !== String(t) ? (n = $.extend({}, n),
            (null === t || void 0 === t) && (n.expires = -1),
            "number" == typeof n.expires && (i = 24 * n.expires * 60 * 60 * 1e3,
                r = n.expires = new Date,
                r.setTime(r.getTime() + i)),
                t = String(t),
                document.cookie = [encodeURIComponent(e), "=", n.raw ? t : encodeURIComponent(t), n.expires ? "; expires=" + n.expires.toUTCString() : "", "; path=/", n.domain ? "; domain=" + n.domain : "", n.secure ? "; secure" : ""].join("")) : (n = t || {},
                a = n.raw ? function(e) {
                        return e
                    }
                    : decodeURIComponent,
                (o = new RegExp("(?:^|; )" + encodeURIComponent(e) + "=([^;]*)").exec(document.cookie)) ? a(o[1]) : null)
        }
    }
        , {}],
    11: [function(e, t, n) {
        function i(e) {
            var t, n, i, r = "", o = 0;
            for (t = n = i = 0; o < e.length; )
                t = e.charCodeAt(o),
                    128 > t ? (r += String.fromCharCode(t),
                        o++) : t > 191 && 224 > t ? (i = e.charCodeAt(o + 1),
                        r += String.fromCharCode((31 & t) << 6 | 63 & i),
                        o += 2) : (i = e.charCodeAt(o + 1),
                        n = e.charCodeAt(o + 2),
                        r += String.fromCharCode((15 & t) << 12 | (63 & i) << 6 | 63 & n),
                        o += 3);
            return r
        }
        function r(e) {
            e = e.replace(/\r\n/g, "\n");
            for (var t = "", n = 0; n < e.length; n++) {
                var i = e.charCodeAt(n);
                128 > i ? t += String.fromCharCode(i) : i > 127 && 2048 > i ? (t += String.fromCharCode(i >> 6 | 192),
                    t += String.fromCharCode(63 & i | 128)) : (t += String.fromCharCode(i >> 12 | 224),
                    t += String.fromCharCode(i >> 6 & 63 | 128),
                    t += String.fromCharCode(63 & i | 128))
            }
            return t
        }
        var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        t.exports = {
            encode: function(e) {
                var t, n, i, a, s, c, u, l = "", d = 0;
                for (e = r(e); d < e.length; )
                    t = e.charCodeAt(d++),
                        n = e.charCodeAt(d++),
                        i = e.charCodeAt(d++),
                        a = t >> 2,
                        s = (3 & t) << 4 | n >> 4,
                        c = (15 & n) << 2 | i >> 6,
                        u = 63 & i,
                        isNaN(n) ? c = u = 64 : isNaN(i) && (u = 64),
                        l = l + o.charAt(a) + o.charAt(s) + o.charAt(c) + o.charAt(u);
                return l
            },
            decode: function(e) {
                var t, n, r, a, s, c, u, l = "", d = 0;
                for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); d < e.length; )
                    a = o.indexOf(e.charAt(d++)),
                        s = o.indexOf(e.charAt(d++)),
                        c = o.indexOf(e.charAt(d++)),
                        u = o.indexOf(e.charAt(d++)),
                        t = a << 2 | s >> 4,
                        n = (15 & s) << 4 | c >> 2,
                        r = (3 & c) << 6 | u,
                        l += String.fromCharCode(t),
                    64 !== c && (l += String.fromCharCode(n)),
                    64 !== u && (l += String.fromCharCode(r));
                return l = i(l)
            }
        }
    }
        , {}],
    12: [function(e, t, n) {
        var i, r = {}, o = window.navigator.userAgent;
        r = (i = o.match(/MicroMessenger\/([\d\.]+)?/)) ? {
            name: "Weixin",
            isWeixin: !0,
            version: i[1] || "0.0.0"
        } : (i = o.match(/QQ\/?([\d\.]+)/)) ? {
            name: "QQ",
            isQQ: !0,
            version: i[1]
        } : (i = o.match(/__weibo__([\d\.]+)/)) ? {
            name: "Weibo",
            isWeibo: !0,
            version: i[1]
        } : (i = o.match(/Mizhe\/([\d\.]+)/)) ? {
            name: "Mizhe",
            isMizhe: !0,
            version: i[1]
        } : (i = o.match(/Beibei\/([\d\.]+)/)) ? {
            name: "Beibei",
            isBeibei: !0,
            version: i[1]
        } : (i = o.match(/MizheHD\/([\d\.]+)/)) ? {
            name: "MizheHD",
            isMizhe: !0,
            isMizheHD: !0,
            version: i[1]
        } : (i = o.match(/BeibeiHD\/([\d\.]+)/)) ? {
            name: "BeibeiHD",
            isBeibei: !0,
            isBeibeiHD: !0,
            version: i[1]
        } : (i = o.match(/Yuerbao\/([\d\.]+)/)) ? {
            name: "Yuerbao",
            isYuerbao: !0,
            version: i[1]
        } : (i = o.match(/Feifan\/([\d\.]+)/)) ? {
            name: "Feifan",
            isFeifan: !0,
            version: i[1]
        } : (i = o.match(/beibeipush\/([\d\.]+)/)) ? {
            name: "Beibeipush",
            isBeibeipush: !0,
            version: i[1]
        } : (i = o.match(/Beidian\/([\d\.]+)/)) ? {
            name: "Beidian",
            isBeidian: !0,
            version: i[1]
        } : (i = o.match(/xretail\/([\d\.]+)/)) ? {
            name: "xretail",
            isBeicang: !0,
            version: i[1]
        } : (i = o.match(/Beidai\/([\d\.]+)/)) ? {
            name: "Beidai",
            isBeidai: !0,
            version: i[1]
        } : (i = o.match(/education\/([\d\.]+)/)) ? {
            name: "education",
            isEducation: !0,
            version: i[1]
        } : {
            name: "unknown",
            version: "0.0.0"
        },
            r.version = e("./version.js")(r.version),
            t.exports = r
    }
        , {
            "./version.js": 16
        }],
    13: [function(e, t, n) {
        var i, r = window.navigator.userAgent, o = {};
        (i = r.match(/(?:UCWEB|UCBrowser\/)([\d\.]+)/)) ? o = {
            name: "UC",
            isUC: !0,
            version: i[1]
        } : (i = r.match(/MQQBrowser\/([\d\.]+)/)) ? o = {
            name: "QQ",
            isQQ: !0,
            version: i[1]
        } : (i = r.match(/MiuiBrowser\/([\d\.]+)/)) ? o = {
            name: "Xiaomi",
            isXiaomi: !0,
            version: i[1]
        } : (i = r.match(/(?:Chrome|CriOS)\/([\d\.]+)/)) ? o = {
            name: "Chrome",
            isChrome: !0,
            version: i[1]
        } : r.match(/Mobile Safari/) && (i = r.match(/Android[\s\/]([\d\.]+)/)) ? o = {
            name: "Android",
            isAndroid: !0,
            version: i[1]
        } : r.match(/iPhone|iPad|iPod/) ? r.match(/Safari/) ? (i = r.match(/Version\/([\d\.]+)/),
            o = {
                name: "Safari",
                isSafari: !0,
                version: i ? i[1] : "0.0.0"
            }) : (i = r.match(/OS ([\d_\.]+) like Mac OS X/),
            o = {
                name: "iOS Webview",
                isWebview: !0,
                version: i[1].replace(/\_/, ".")
            }) : o = {
            name: "unknown",
            version: "0.0.0"
        },
            o.version = e("./version.js")(o.version),
            t.exports = o
    }
        , {
            "./version.js": 16
        }],
    14: [function(e, t, n) {
        var i, r = {}, o = window.navigator.userAgent;
        r = (i = o.match(/hybrid[\s\/]([\d\.]+)/i)) ? {
            exist: !0,
            version: i[1]
        } : {
            exist: !1,
            version: "0.0.0"
        },
            r.version = e("./version.js")(r.version),
            t.exports = r
    }
        , {
            "./version.js": 16
        }],
    15: [function(e, t, n) {
        var i, r = {}, o = window.navigator.userAgent;
        if (i = o.match(/Android[\s\/]([\d\.]+)/))
            r = {
                name: "Android",
                isAndroid: !0,
                version: i[1]
            };
        else if (i = o.match(/(iPhone|iPad|iPod)/)) {
            var a = i[1];
            i = o.match(/OS ([\d_\.]+) like Mac OS X/),
                r = {
                    name: a,
                    isIPhone: "iPhone" === a || "iPod" === a,
                    isIPad: "iPad" === a,
                    isIOS: !0,
                    version: i[1].split("_").join(".")
                }
        } else
            r = (i = o.match(/Windows NT ([\d\.]+)/)) ? {
                name: "Windows",
                isWin: !0,
                version: i[1]
            } : (i = o.match(/Mac OS X ([\d_\.]+)/)) ? {
                name: "MAC",
                isMac: !0,
                version: i[1].split("_").join(".")
            } : {
                name: "unknown",
                version: "0.0.0"
            };
        r.version = e("./version.js")(r.version),
            t.exports = r
    }
        , {
            "./version.js": 16
        }],
    16: [function(e, t, n) {
        function i(e) {
            this.string = e.toString()
        }
        i.prototype.toString = function() {
            return this.string
        }
            ,
            i.prototype.valueOf = function() {
                for (var e = this.toString().split("."), t = [], n = 0; n < e.length; n++) {
                    var i = parseInt(e[n], 10);
                    window.isNaN(i) && (i = 0);
                    var r = i.toString();
                    r.length < 5 && (r = Array(6 - r.length).join("0") + r),
                        t.push(r),
                    1 === t.length && t.push(".")
                }
                return window.parseFloat(t.join(""))
            }
            ,
            i.prototype.gt = function(e) {
                return i.compare(this, e) > 0
            }
            ,
            i.prototype.gte = function(e) {
                return i.compare(this, e) >= 0
            }
            ,
            i.prototype.lt = function(e) {
                return i.compare(this, e) < 0
            }
            ,
            i.prototype.lte = function(e) {
                return i.compare(this, e) <= 0
            }
            ,
            i.prototype.eq = function(e) {
                return 0 === i.compare(this, e)
            }
            ,
            i.compare = function(e, t) {
                e = e.toString().split("."),
                    t = t.toString().split(".");
                for (var n = 0; n < e.length || n < t.length; n++) {
                    var i = parseInt(e[n], 10)
                        , r = parseInt(t[n], 10);
                    if (window.isNaN(i) && (i = 0),
                    window.isNaN(r) && (r = 0),
                    r > i)
                        return -1;
                    if (i > r)
                        return 1
                }
                return 0
            }
            ,
            t.exports = function(e) {
                return new i(e)
            }
    }
        , {}],
    17: [function(e, t, n) {
        var i = {
            app: e("./bin/app.js"),
            browser: e("./bin/browser.js"),
            os: e("./bin/os.js"),
            hybrid: e("./bin/hybrid.js"),
            version: e("./bin/version.js")
        };
        "unknown" == i.app.name || i.app.isWeixin || i.app.isWeibo || (i.husorApp = {
            appname: i.app.name,
            platform: i.os.name,
            version: i.app.version
        }),
            t.exports = i
    }
        , {
            "./bin/app.js": 12,
            "./bin/browser.js": 13,
            "./bin/hybrid.js": 14,
            "./bin/os.js": 15,
            "./bin/version.js": 16
        }],
    18: [function(e, t, n) {
        var i = e("./lib/fingerprint")
            , r = {
            canvas: !0,
            ie_activex: !0,
            screen_resolution: !0,
            screen_orientation: !0
        };
        t.exports = new i(r)
    }
        , {
            "./lib/fingerprint": 19
        }],
    19: [function(e, t, n) {
        t.exports = function(e) {
            function t(i) {
                if (n[i])
                    return n[i].exports;
                var r = n[i] = {
                    i: i,
                    l: !1,
                    exports: {}
                };
                return e[i].call(r.exports, r, r.exports, t),
                    r.l = !0,
                    r.exports
            }
            var n = {};
            return t.m = e,
                t.c = n,
                t.i = function(e) {
                    return e
                }
                ,
                t.d = function(e, t, n) {
                    Object.defineProperty(e, t, {
                        configurable: !1,
                        enumerable: !0,
                        get: n
                    })
                }
                ,
                t.n = function(e) {
                    var n = e && e.__esModule ? function() {
                            return e["default"]
                        }
                        : function() {
                            return e
                        }
                    ;
                    return t.d(n, "a", n),
                        n
                }
                ,
                t.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                ,
                t.p = "",
                t(t.s = 0)
        }([function(e, t, n) {
            "use strict";
            var i, r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
            ;
            !function(o, a, s) {
                "undefined" != typeof e && e.exports ? e.exports = s() : (i = s,
                    r = "function" == typeof i ? i.call(t, n, t, e) : i,
                    !(void 0 !== r && (e.exports = r)))
            }("Fingerprint", void 0, function() {
                var e = function(e) {
                    var t, n;
                    t = Array.prototype.forEach,
                        n = Array.prototype.map,
                        this.each = function(e, n, i) {
                            if (null !== e)
                                if (t && e.forEach === t)
                                    e.forEach(n, i);
                                else if (e.length === +e.length) {
                                    for (var r = 0, o = e.length; o > r; r++)
                                        if (n.call(i, e[r], r, e) === {})
                                            return
                                } else
                                    for (var a in e)
                                        if (e.hasOwnProperty(a) && n.call(i, e[a], a, e) === {})
                                            return
                        }
                        ,
                        this.map = function(e, t, i) {
                            var r = [];
                            return null == e ? r : n && e.map === n ? e.map(t, i) : (this.each(e, function(e, n, o) {
                                r[r.length] = t.call(i, e, n, o)
                            }),
                                r)
                        }
                        ,
                        "object" == ("undefined" == typeof e ? "undefined" : o(e)) ? (this.hasher = e.hasher,
                            this.screen_resolution = e.screen_resolution,
                            this.screen_orientation = e.screen_orientation,
                            this.canvas = e.canvas,
                            this.ie_activex = e.ie_activex) : "function" == typeof e && (this.hasher = e)
                };
                return e.prototype = {
                    get: function() {
                        var e = [];
                        if (e.push(navigator.userAgent),
                            e.push(navigator.language),
                            e.push(screen.colorDepth),
                            this.screen_resolution) {
                            var t = this.getScreenResolution();
                            "undefined" != typeof t && e.push(t.join("x"))
                        }
                        return e.push((new Date).getTimezoneOffset()),
                            e.push(this.hasSessionStorage()),
                            e.push(this.hasLocalStorage()),
                            e.push(!!window.indexedDB),
                            document.body ? e.push(o(document.body.addBehavior)) : e.push("undefined"),
                            e.push(o(window.openDatabase)),
                            e.push(navigator.cpuClass),
                            e.push(navigator.platform),
                            e.push(navigator.doNotTrack),
                            e.push(this.getPluginsString()),
                        this.canvas && this.isCanvasSupported() && e.push(this.getCanvasFingerprint()),
                            this.hasher ? this.hasher(e.join("###"), 31) : this.murmurhash3_32_gc(e.join("###"), 31)
                    },
                    murmurhash3_32_gc: function(e, t) {
                        var n, i, r, o, a, s, c, u;
                        for (n = 3 & e.length,
                                 i = e.length - n,
                                 r = t,
                                 a = 3432918353,
                                 s = 461845907,
                                 u = 0; i > u; )
                            c = 255 & e.charCodeAt(u) | (255 & e.charCodeAt(++u)) << 8 | (255 & e.charCodeAt(++u)) << 16 | (255 & e.charCodeAt(++u)) << 24,
                                ++u,
                                c = (65535 & c) * a + (((c >>> 16) * a & 65535) << 16) & 4294967295,
                                c = c << 15 | c >>> 17,
                                c = (65535 & c) * s + (((c >>> 16) * s & 65535) << 16) & 4294967295,
                                r ^= c,
                                r = r << 13 | r >>> 19,
                                o = 5 * (65535 & r) + ((5 * (r >>> 16) & 65535) << 16) & 4294967295,
                                r = (65535 & o) + 27492 + (((o >>> 16) + 58964 & 65535) << 16);
                        switch (c = 0,
                            n) {
                            case 3:
                                c ^= (255 & e.charCodeAt(u + 2)) << 16;
                            case 2:
                                c ^= (255 & e.charCodeAt(u + 1)) << 8;
                            case 1:
                                c ^= 255 & e.charCodeAt(u),
                                    c = (65535 & c) * a + (((c >>> 16) * a & 65535) << 16) & 4294967295,
                                    c = c << 15 | c >>> 17,
                                    c = (65535 & c) * s + (((c >>> 16) * s & 65535) << 16) & 4294967295,
                                    r ^= c
                        }
                        return r ^= e.length,
                            r ^= r >>> 16,
                            r = 2246822507 * (65535 & r) + ((2246822507 * (r >>> 16) & 65535) << 16) & 4294967295,
                            r ^= r >>> 13,
                            r = 3266489909 * (65535 & r) + ((3266489909 * (r >>> 16) & 65535) << 16) & 4294967295,
                            r ^= r >>> 16,
                        r >>> 0
                    },
                    hasLocalStorage: function() {
                        try {
                            return !!window.localStorage
                        } catch (e) {
                            return !0
                        }
                    },
                    hasSessionStorage: function() {
                        try {
                            return !!window.sessionStorage
                        } catch (e) {
                            return !0
                        }
                    },
                    isCanvasSupported: function() {
                        var e = document.createElement("canvas");
                        return !(!e.getContext || !e.getContext("2d"))
                    },
                    isIE: function() {
                        return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
                    },
                    getPluginsString: function() {
                        return this.isIE() && this.ie_activex ? this.getIEPluginsString() : this.getRegularPluginsString()
                    },
                    getRegularPluginsString: function() {
                        return this.map(navigator.plugins, function(e) {
                            var t = this.map(e, function(e) {
                                return [e.type, e.suffixes].join("~")
                            }).join(",");
                            return [e.name, e.description, t].join("::")
                        }, this).join(";")
                    },
                    getIEPluginsString: function() {
                        if (window.ActiveXObject) {
                            var e = ["ShockwaveFlash.ShockwaveFlash", "AcroPDF.PDF", "PDF.PdfCtrl", "QuickTime.QuickTime", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer", "SWCtl.SWCtl", "WMPlayer.OCX", "AgControl.AgControl", "Skype.Detection"];
                            return this.map(e, function(e) {
                                try {
                                    return new ActiveXObject(e),
                                        e
                                } catch (e) {
                                    return null
                                }
                            }).join(";")
                        }
                        return ""
                    },
                    getScreenResolution: function() {
                        var e;
                        return e = this.screen_orientation ? screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height] : [screen.height, screen.width]
                    },
                    getCanvasFingerprint: function() {
                        var e = document.createElement("canvas")
                            , t = e.getContext("2d")
                            , n = "http://valve.github.io";
                        return t.textBaseline = "top",
                            t.font = "14px 'Arial'",
                            t.textBaseline = "alphabetic",
                            t.fillStyle = "#f60",
                            t.fillRect(125, 1, 62, 20),
                            t.fillStyle = "#069",
                            t.fillText(n, 2, 15),
                            t.fillStyle = "rgba(102, 204, 0, 0.7)",
                            t.fillText(n, 4, 17),
                            e.toDataURL()
                    }
                },
                    e
            })
        }
        ])
    }
        , {}],
    20: [function(e, t, n) {
        function i(e) {
            var t = {};
            Object.defineProperty(this, "params", {
                set: function(e) {
                    if ("object" == typeof e) {
                        for (var n in t)
                            delete t[n];
                        for (var n in e)
                            t[n] = e[n]
                    }
                },
                get: function() {
                    return t
                },
                enumerable: !1
            }),
                Object.defineProperty(this, "search", {
                    set: function(e) {
                        if ("string" == typeof e) {
                            var n, i = e.indexOf("?");
                            0 === i ? e = e.substring(1) : i > 0 && (e = e.substring(0, i)),
                                n = e.split("&");
                            for (var r in t)
                                delete t[r];
                            for (var o = 0; o < n.length; o++) {
                                var a = n[o].split("=");
                                if (a[0])
                                    try {
                                        t[decodeURIComponent(a[0])] = decodeURIComponent(a[1] || "")
                                    } catch (s) {
                                        t[a[0]] = a[1] || ""
                                    }
                            }
                        }
                    },
                    get: function() {
                        var e = [];
                        for (var n in t)
                            if (t[n])
                                try {
                                    e.push(encodeURIComponent(n) + "=" + encodeURIComponent(t[n]))
                                } catch (i) {
                                    e.push(n + "=" + t[n])
                                }
                            else
                                try {
                                    e.push(encodeURIComponent(n))
                                } catch (i) {
                                    e.push(n)
                                }
                        return e.length ? "?" + e.join("&") : ""
                    },
                    enumerable: !0
                });
            var n;
            Object.defineProperty(this, "hash", {
                set: function(e) {
                    e && e.indexOf("#") < 0 && (e = "#" + e),
                        n = e || ""
                },
                get: function() {
                    return n
                },
                enumerable: !0
            }),
                this.set = function(e) {
                    e = e || "";
                    var t;
                    (t = e.match(new RegExp("^(https?|beibei|beibeiapp|mizhe|mizheapp):[/]{2}(?:([^@/:?]+)(?::([^@/:]+))?@)?([^:/?#]+)(?:[:]([0-9]+))?([/][^?#;]*)?(?:[?]([^#]*))?(#[^#]*)?$"))) ? (this.protocal = t[1],
                        this.username = t[2] || "",
                        this.password = t[3] || "",
                        this.hostname = this.host = t[4],
                        this.port = t[5] || "",
                        this.pathname = t[6] || "/",
                        this.search = t[7] || "",
                        this.hash = t[8] || "",
                        this.origin = this.protocal + "://" + this.hostname) : console.warn("Wrong uri scheme.")
                }
                ,
                this.toString = function() {
                    var e = this.protocal + "://";
                    return this.username && (e += this.username,
                    this.password && (e += ":" + this.password),
                        e += "@"),
                        e += this.host,
                    this.port && "80" !== this.port && (e += ":" + this.port),
                    this.pathname && (e += this.pathname),
                    this.search && (e += this.search),
                    this.hash && (e += this.hash),
                        e
                }
                ,
            e && this.set(e.toString())
        }
        t.exports = {
            httpurl: i
        },
        "undefined" != typeof window && (t.exports.uri = new i(window.location.href))
    }
        , {}],
    21: [function(e, t, n) {
        !function(e) {
            if (!e.bbhybrid) {
                var t = e.navigator.userAgent;
                if (t.match(/beidian/gi) || t.match(/beibei/gi) || t.match(/yuerbao/gi) || t.match(/feifan/gi) || t.match(/mizhe/gi) || t.indexOf("Hybrid") > -1) {
                    if (t.match(/android/gi)) {
                        var n = 1
                            , i = e.WebViewJavascriptBridge;
                        if (!i)
                            return;
                        i.callbacks = {},
                            i.__proto__.send = function(e, t) {
                                e.id = n,
                                    this.callbacks[n] = function(e, n) {
                                        t({
                                            error: e,
                                            result: n
                                        })
                                    }
                                    ,
                                    n++,
                                    this.sendMessage(JSON.stringify(e))
                            }
                            ,
                            i.__proto__.actionDidFinish = function(e, t, n) {
                                var i = this.callbacks[e];
                                i && (i(t, n),
                                    delete this.callbacks[e])
                            }
                    } else {
                        var n = 1
                            , i = new Object;
                        i.postMessage = function(t) {
                            var n = e.WebViewJavascriptBridge;
                            !n && e.webkit && e.webkit.messageHandlers && (n = e.webkit.messageHandlers.WebViewJavascriptBridge),
                                n ? n.postMessage(t) : setTimeout(function() {
                                    i.postMessage(t)
                                }, 10)
                        }
                            ,
                            i.callbacks = {},
                            i.send = function(e, t) {
                                e.id = n,
                                    this.callbacks[n] = function(e, n) {
                                        t({
                                            error: e,
                                            result: n
                                        })
                                    }
                                    ,
                                    n++,
                                    this.postMessage(e)
                            }
                            ,
                            e.WebViewJavascriptBridge_actionDidFinish = function(e, t, n) {
                                var r = i.callbacks[e];
                                r && (r(t, n),
                                n && n.reusable || delete i.callbacks[e])
                            }
                    }
                    e.bbhybrid = {
                        config: function(e, t) {
                            i.send({
                                target: "config",
                                data: e
                            }, function(e) {
                                if (e.error)
                                    t(e.error);
                                else if (e.result) {
                                    var n = e.result;
                                    n.forEach(function(e) {
                                        bbhybrid[e] || (bbhybrid[e] = function() {
                                                var t = Array.prototype.slice.call(arguments)
                                                    , n = t.shift()
                                                    , r = t.shift();
                                                if (n ? "function" == typeof n && (r = n,
                                                    n = {}) : n = {},
                                                r || (r = function() {}
                                                ),
                                                "function" != typeof r)
                                                    throw new Error("callback is not a function");
                                                i.send({
                                                    target: e,
                                                    data: n
                                                }, function(e) {
                                                    e.error ? r(e.error) : r(null, e.result)
                                                })
                                            }
                                        )
                                    }),
                                        t(null, e.result)
                                }
                            })
                        },
                        bridge: i
                    },
                        e.alert = function(e) {
                            bbhybrid.alert ? bbhybrid.alert({
                                title: "提示",
                                message: e + ""
                            }, function() {}) : bbhybrid.config({
                                jsApiList: {
                                    alert: "optional"
                                }
                            }, function(t, n) {
                                t ? alert("初始化alert失败,你的信息是:" + e) : bbhybrid.alert({
                                    title: "提示",
                                    message: e + ""
                                }, function() {})
                            })
                        }
                }
            }
        }(window)
    }
        , {}],
    22: [function(e, t, n) {
        e("@beibei/hybrid");
        var i = e("@beibei/cookie")
            , r = e("@beibei/popup")
            , o = e("./login-dialog/login-dialog")
            , a = null
            , s = window.bbhybrid
            , c = null
            , u = null
            , l = function() {
            return !(!i("st_au") || !i("_last_login_gmt_"))
        }
            , d = function(e, t) {
            if ("function" == typeof e) {
                if (!s)
                    throw "no bbhybrid";
                var n = function() {
                    s.checkLogin(function(n, i) {
                        if (n)
                            throw "bbhybrid.checkLogin error";
                        1 == i ? f(function(t) {
                            e(t)
                        }, !0) : (t && !a && (a = o(function() {
                            p(e, !0)
                        })),
                            e(!1))
                    })
                };
                "function" != typeof s.checkLogin ? s.config({
                    jsApiList: {
                        checkLogin: "optional"
                    }
                }, function(e, t) {
                    if (e || "function" != typeof s.checkLogin)
                        throw "bbhybrid config checkLogin error";
                    n()
                }) : n()
            }
        }
            , f = function(e, t) {
            if (!s)
                throw "no bbhybrid";
            var n = function() {
                s.login(function(n, i) {
                    if (n)
                        throw "bbhybrid.login error";
                    if ("string" == typeof i)
                        try {
                            i = JSON.parse("{" + i + "}")
                        } catch (o) {
                            throw "bbhybrid.login parse result error:" + i
                        }
                    u = JSON.stringify(i),
                        c = i.uid,
                        $.ajax({
                            type: "GET",
                            url: "//api.beibei.com/login/ajax_trust.html",
                            data: {
                                sign: i.sign,
                                ts: i.ts,
                                uid: i.uid,
                                session: i.session,
                                udid: i.udid
                            },
                            dataType: "jsonp",
                            success: function(n) {
                                n.success ? (a && a.remove(),
                                    a = null,
                                "function" == typeof e && e(t ? !0 : g())) : t ? "function" == typeof e && e(!1) : alert("为了您的购物安全，请去个人中心重新登录验证")
                            },
                            error: function() {
                                r.note("网络错误,请稍后重试")
                            }
                        })
                })
            };
            "function" != typeof s.login ? s.config({
                jsApiList: {
                    login: "optional"
                }
            }, function(e, t) {
                if (e || "function" != typeof s.login)
                    throw "bbhybrid config login error";
                n()
            }) : n()
        }
            , p = function(e, t) {
            "function" == typeof e && (l() ? u ? e(!0) : f(function(t) {
                e(t)
            }, !0) : d(e, t))
        }
            , h = function(e) {
            l() && u ? "function" == typeof e && e(g()) : f(e)
        }
            , g = function() {
            return {
                uid: c,
                appLoginInfo: u
            }
        };
        t.exports = {
            checkLogin: p,
            login: h,
            getUserInfo: g
        }
    }
        , {
            "./login-dialog/login-dialog": 27,
            "@beibei/cookie": 10,
            "@beibei/hybrid": 21,
            "@beibei/popup": 33
        }],
    23: [function(e, t, n) {
        var i, r, o, a = e("@beibei/popup"), s = e("@base/abr"), c = e("../tool.js"), u = c.wxSourceToken, l = c.openidStorage, d = c.sessionStatus, f = c.lastShowTime, p = e("./css").val, h = e("./html").val, g = !1, m = $(h), b = function() {
            m.find(".J_login_cancel").on("click", function() {
                _()
            }),
                m.find("#J_login_code").on("click", function(e) {
                    var t = $(e.currentTarget)
                        , n = m.find("input[name=phone]").val()
                        , i = "";
                    return t.hasClass("disabled") ? void 0 : 11 !== n.length ? void a.note("请输入以1开头的11位数字！", {
                        mask: !1
                    }) : void (11 === n.length && (i = s("post", "/mroute.html", {
                        method: "beibei.user.code.send"
                    }, {
                        key: "quick_access",
                        tel: n.replace(/\s/g, "")
                    }),
                        $.ajax({
                            url: "//api.beibei.com/mroute.html?method=beibei.user.code.send&_abr_=" + i,
                            type: "POST",
                            data: {
                                key: "quick_access",
                                tel: n.replace(/\s/g, "")
                            },
                            dataType: "json",
                            cache: !0,
                            xhrFields: {
                                withCredentials: !0
                            },
                            success: function(e) {
                                if (e.success) {
                                    t.removeClass("resend").addClass("disabled");
                                    var n = 60;
                                    !function i() {
                                        return 0 >= n ? void t.html("重新发送").removeClass("disabled").addClass("resend") : (t.html(n-- + "s后重发"),
                                            void window.setTimeout(i, 1e3))
                                    }()
                                }
                                a.note(e.message, {
                                    mask: !1
                                })
                            },
                            error: function() {
                                console.log("sendMessage error!")
                            }
                        })))
                }),
                m.find(".J_login_submit").on("click", function() {
                    var e = m.find("input[name=phone]").val().replace(/\s/g, "")
                        , t = m.find("input[name=code]").val();
                    e && t && i && $.ajax({
                        url: "//api.beibei.com/mroute.html?method=beibei.h5.quick.access",
                        type: "POST",
                        data: {
                            token: i,
                            code: t,
                            tel: e,
                            wx_type: r
                        },
                        dataType: "json",
                        cache: !0,
                        xhrFields: {
                            withCredentials: !0
                        },
                        success: function(e) {
                            e.success ? (g = !1,
                                m.remove(),
                                u.clear(),
                                d.setSymbol(),
                                l.setFromMap(e.op_map),
                            o && o()) : a.alert(e.message || e.err_msg || "绑定失败~")
                        },
                        error: function() {
                            throw new Error("quickRequest error!")
                        }
                    })
                })
        }, v = function(e, t, n) {
            t && (i = t,
                r = e,
            g || ($(p).appendTo("head"),
                m.appendTo("body"),
                b(),
                g = !0))
        }, y = function(e) {
            o = "function" == typeof e ? e : null,
                m.addClass("show"),
                f.update()
        }, _ = function() {
            m.removeClass("show")
        };
        t.exports = {
            init: v,
            show: y,
            needBind: function() {
                return g
            }
        }
    }
        , {
            "../tool.js": 28,
            "./css": 24,
            "./html": 25,
            "@base/abr": 31,
            "@beibei/popup": 33
        }],
    24: [function(e, t, n) {
        t.exports = {
            val: '<style type="text/css">.ui-dialog{position:fixed;top:0;left:0;width:100%;height:100%;z-index:999999;background:rgba(0,0,0,.4);color:#3d3d3d;display:none}.ui-dialog.show{display:block}.ui-dialog .ui-dialog-layer{width:100%;height:100%;display:-webkit-box;display:-moz-box;display:box;-webkit-box-orient:horizontal;-moz-box-orient:horizontal;box-orient:horizontal;-webkit-box-pack:center;-moz-box-pack:center;box-pack:center;-webkit-box-align:center;-moz-box-align:center;box-align:center}.ui-dialog .ui-dialog-cnt{width:12.16rem;border-radius:16px;outline:0;pointer-events:auto;background-color:#fff;position:relative}.ui-dialog .ui-dialog-bd{width:100%;padding:1.28rem .85333333rem;box-sizing:border-box;border-top-left-radius:16px;border-top-right-radius:16px}.ui-dialog .ui-dialog-bd h4{margin-bottom:20px;font-size:16px;color:#3d3d3d;width:100%;text-align:center}[data-dpr="2"] .ui-dialog .ui-dialog-bd h4{margin-bottom:40px}[data-dpr="2.5"] .ui-dialog .ui-dialog-bd h4{margin-bottom:50px}[data-dpr="2.75"] .ui-dialog .ui-dialog-bd h4{margin-bottom:55px}[data-dpr="3"] .ui-dialog .ui-dialog-bd h4{margin-bottom:60px}[data-dpr="4"] .ui-dialog .ui-dialog-bd h4{margin-bottom:80px}[data-dpr="2"] .ui-dialog .ui-dialog-bd h4{font-size:32px}[data-dpr="2.5"] .ui-dialog .ui-dialog-bd h4{font-size:40px}[data-dpr="2.75"] .ui-dialog .ui-dialog-bd h4{font-size:44px}[data-dpr="3"] .ui-dialog .ui-dialog-bd h4{font-size:48px}[data-dpr="4"] .ui-dialog .ui-dialog-bd h4{font-size:64px}.ui-dialog .ui-dialog-bd .input-container{position:relative;border:1px solid rgba(0,0,0,.08);border-radius:8px}@media screen and (-webkit-min-device-pixel-ratio:2){.ui-dialog .ui-dialog-bd .input-container{position:relative;border:0}.ui-dialog .ui-dialog-bd .input-container:after{content:"";width:200%;height:200%;position:absolute;z-index:1;top:0;left:0;border:1px solid rgba(0,0,0,.08);-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;padding:1px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:16px;pointer-events:none}}.ui-dialog .ui-dialog-bd input{padding-left:10px;height:1.87733333rem;background-color:#eee;width:100%;font-size:14px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;-ms-box-sizing:border-box;box-sizing:border-box;border-radius:8px}[data-dpr="2"] .ui-dialog .ui-dialog-bd input{padding-left:20px}[data-dpr="2.5"] .ui-dialog .ui-dialog-bd input{padding-left:25px}[data-dpr="2.75"] .ui-dialog .ui-dialog-bd input{padding-left:27px}[data-dpr="3"] .ui-dialog .ui-dialog-bd input{padding-left:30px}[data-dpr="4"] .ui-dialog .ui-dialog-bd input{padding-left:40px}[data-dpr="2"] .ui-dialog .ui-dialog-bd input{font-size:28px}[data-dpr="2.5"] .ui-dialog .ui-dialog-bd input{font-size:35px}[data-dpr="2.75"] .ui-dialog .ui-dialog-bd input{font-size:38px}[data-dpr="3"] .ui-dialog .ui-dialog-bd input{font-size:42px}[data-dpr="4"] .ui-dialog .ui-dialog-bd input{font-size:56px}.ui-dialog .ui-dialog-bd .code-container{margin-top:10px}.ui-dialog .ui-dialog-bd .code-container .input-container{display:inline-block}[data-dpr="2"] .ui-dialog .ui-dialog-bd .code-container{margin-top:20px}[data-dpr="2.5"] .ui-dialog .ui-dialog-bd .code-container{margin-top:25px}[data-dpr="2.75"] .ui-dialog .ui-dialog-bd .code-container{margin-top:27px}[data-dpr="3"] .ui-dialog .ui-dialog-bd .code-container{margin-top:30px}[data-dpr="4"] .ui-dialog .ui-dialog-bd .code-container{margin-top:40px}.ui-dialog .ui-dialog-bd .code-container:after,.ui-dialog .ui-dialog-bd .code-container:before{display:table;content:""}.ui-dialog .ui-dialog-bd .code-container:after{clear:both}.ui-dialog .ui-dialog-bd .code-container input{width:6.528rem;height:1.87733333rem}.ui-dialog .ui-dialog-bd .code-container button{position:relative;width:3.60533333rem;height:1.87733333rem;float:right;color:#fff;border-radius:8px;background-color:#ff4848}.ui-dialog .ui-dialog-bd .code-container button.disabled{color:#8f8f8f;background-color:#fff;border:2px solid #8f8f8f;border-radius:8px}@media screen and (-webkit-min-device-pixel-ratio:2){.ui-dialog .ui-dialog-bd .code-container button.disabled{position:relative;border:0}.ui-dialog .ui-dialog-bd .code-container button.disabled:after{content:"";width:200%;height:200%;position:absolute;z-index:1;top:0;left:0;border:2px solid #8f8f8f;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;padding:2px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:16px;pointer-events:none}}.ui-dialog .ui-dialog-bd .code-container button.resend{color:#ff4848;background-color:#fff;border:2px solid #ff4848;border-radius:8px}@media screen and (-webkit-min-device-pixel-ratio:2){.ui-dialog .ui-dialog-bd .code-container button.resend{position:relative;border:0}.ui-dialog .ui-dialog-bd .code-container button.resend:after{content:"";width:200%;height:200%;position:absolute;z-index:1;top:0;left:0;border:2px solid #ff4848;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;padding:2px;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:16px;pointer-events:none}}.ui-dialog .ui-dialog-ft{display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:flex;position:relative;border-bottom-left-radius:16px;border-bottom-right-radius:16px}.ui-dialog .ui-dialog-ft:after{display:block;content:"";position:absolute;top:0;right:0;bottom:0;left:0;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(1);transform:scale(1);pointer-events:none;z-index:1}@media only screen and (-webkit-min-device-pixel-ratio:2){.ui-dialog .ui-dialog-ft:after{right:-100%;bottom:-100%;-webkit-transform:scale(.5);transform:scale(.5);z-index:1}}.ui-dialog .ui-dialog-ft:after{border-top:1px solid rgba(0,0,0,.08)}.ui-dialog .ui-dialog-ft button{-webkit-box-flex:1;-moz-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:1.87733333rem;background-color:#fff;text-align:center;font-size:16px;font-weight:700}[data-dpr="2"] .ui-dialog .ui-dialog-ft button{font-size:32px}[data-dpr="2.5"] .ui-dialog .ui-dialog-ft button{font-size:40px}[data-dpr="2.75"] .ui-dialog .ui-dialog-ft button{font-size:44px}[data-dpr="3"] .ui-dialog .ui-dialog-ft button{font-size:48px}[data-dpr="4"] .ui-dialog .ui-dialog-ft button{font-size:64px}.ui-dialog .ui-dialog-ft button:first-child{position:relative;border-bottom-left-radius:16px}.ui-dialog .ui-dialog-ft button:first-child:after{display:block;content:"";position:absolute;top:0;right:0;bottom:0;left:0;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(1);transform:scale(1);pointer-events:none;z-index:1}@media only screen and (-webkit-min-device-pixel-ratio:2){.ui-dialog .ui-dialog-ft button:first-child:after{right:-100%;bottom:-100%;-webkit-transform:scale(.5);transform:scale(.5);z-index:1}}.ui-dialog .ui-dialog-ft button:first-child:after{border-right:1px solid rgba(0,0,0,.08)}.ui-dialog .ui-dialog-ft button:last-child{color:#ff4848;border-bottom-right-radius:16px}</style>'
        }
    }
        , {}],
    25: [function(e, t, n) {
        t.exports = {
            val: '<div class="ui-dialog"><div class="ui-dialog-layer"><div class="ui-dialog-cnt"><div class="ui-dialog-bd"><h4 id="J_login_title">为保证帐号安全，请绑定手机号码</h4><div class="input-container"><input type="tel" name="phone" placeholder="请输入手机号码" maxlength="11"></div><div class="code-container"><div class="input-container"><input type="number" name="code" placeholder="请输入验证码" maxlength="4"></div><button id="J_login_code">获取验证码</button></div></div><div class="ui-dialog-ft"><button class="J_login_cancel">取消</button> <button class="J_login_submit">确认</button></div></div></div></div>'
        }
    }
        , {}],
    26: [function(e, t, n) {
        var i = e("@beibei/httpurl")
            , r = e("./bind-dialog/bind-dialog")
            , o = e("./tool.js")
            , a = o.getAuthorizeURL
            , s = o.utmSource
            , c = o.getWxItem
            , u = o.wxSourceToken
            , l = o.openidStorage
            , d = o.orderCounts
            , f = o.sessionStatus
            , p = window.navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/)
            , h = i.uri.params.code
            , g = function(e, t, n, i) {
            $.ajax({
                url: "//api.beibei.com/mroute.html?method=beibei.h5.open.auth",
                data: {
                    code: e,
                    source: "weixin",
                    wx_type: t
                },
                dataType: "json",
                type: "GET",
                cache: !0,
                xhrFields: {
                    withCredentials: !0
                },
                success: function(e) {
                    n(e)
                },
                error: function(e) {
                    i(e)
                }
            })
        }
            , m = function(e, t) {
            var n = t ? {
                source: t
            } : {
                source: "bbtm"
            }
                , o = c(n)
                , p = i.uri.params.state
                , m = u.get(n)
                , b = a("base", null, o.appid)
                , v = a("user", "snsapi_userinfo", o.appid);
            s.set(),
                m ? (r.init(o.type, m),
                    r.show(e)) : h ? g(h, o.type, function(t) {
                    t.success !== !0 ? location.href = b : t.data ? (f.setSymbol(),
                        d.set(t.fightgroup_order_count),
                        l.setFromMap(t.op_map),
                    "function" == typeof e && e()) : t.base_auth === !0 && "base" === p ? window.location = v : t.base_auth === !1 || "user" === p ? t.token && (r.init(o.type, t.token),
                        u.set(o, t.token),
                        r.show(e)) : popup.alert("网络异常，请稍后再试!", {}, function() {
                        history.go(-1)
                    })
                }, function() {
                    history.go(-1)
                }) : location.href = b
        }
            , b = function() {
            location.href = "/login/login.html?redirect=" + encodeURIComponent(location.href)
        }
            , v = function(e) {
            "function" == typeof e && e(f.isLogin())
        }
            , y = function(e, t) {
            return f.isLogin() ? void ("function" == typeof e && e()) : p ? void m(e, t) : void b()
        }
            , _ = function() {
            return {
                uid: "",
                appLoginInfo: null
            }
        };
        t.exports = {
            checkLogin: v,
            login: y,
            getUserInfo: _
        }
    }
        , {
            "./bind-dialog/bind-dialog": 23,
            "./tool.js": 28,
            "@beibei/httpurl": 20
        }],
    27: [function(e, t, n) {
        function i(e) {
            var t = {
                mainStyle: {
                    width: "72%",
                    "border-radius": ".55rem"
                },
                mask: !0,
                actionConfig: [{
                    text: "随便逛逛",
                    callback: function() {
                        i.remove(),
                            location.href = '//m.beibei.com?beibeiapp_info={"target":"home"}'
                    }
                }, {
                    text: "立即登录",
                    callback: function() {
                        e && e()
                    }
                }]
            }
                , n = '<div style="text-align:center;padding:.853rem 0 1.28rem;"><img src="//b0.hucdn.com/party/2016/12/upload_d7d0562e2b5de5ab92702c3c8bf03c25_200x200.png" style="height:4.27rem;width:4.27rem;"/><div style="font-size:.64rem;color:#3D3D3D;line-height:.64rem;">亲，请先登录哦</div></div>'
                , i = r(n, t);
            return i.$mask.css("z-index", "99999"),
                i
        }
        var r = e("@beibei/popup");
        t.exports = i
    }
        , {
            "@beibei/popup": 33
        }],
    28: [function(e, t, n) {
        var i = e("@beibei/httpurl")
            , r = e("@beibei/cookie")
            , o = [{
            type: 1,
            source: "bbtm",
            appid: "wxc2cfaa2db99e1d82"
        }, {
            type: 7,
            source: "bbpt",
            appid: "wx7d1aecce588595be"
        }, {
            type: 10,
            source: "bbts",
            appid: "wx5c515370b018aef5"
        }, {
            type: 6,
            source: "jingxuan",
            appid: "wx395cf077b2dc65be"
        }, {
            type: 4,
            source: "yeb",
            appid: "wxebbb942103dcad90"
        }]
            , a = function(e, t, n) {
            var r = new i.httpurl("https://open.weixin.qq.com/connect/oauth2/authorize")
                , o = c({
                source: "bbts"
            }).appId === n ? "zb.beibei.com" : "m.beibei.com"
                , a = location.href
                , s = -1 === a.indexOf(o);
            return a = a.replace(/[&\?]code=[\s\S^&]+/, ""),
                r.params = {
                    appid: n,
                    redirect_uri: s ? window.location.protocol + "//" + o + "/login/wx-bridge.html?redirect=" + encodeURIComponent(a) : a,
                    response_type: "code",
                    scope: t || "snsapi_base",
                    state: e || ""
                },
                r.hash = "wechat_redirect",
                r.toString()
        }
            , s = {
            set: function() {
                var e = i.uri.params.utm_source;
                e && sessionStorage.setItem("utm_source", e)
            },
            get: function() {
                var e = i.uri.params.utm_source || sessionStorage.getItem("utm_source");
                return e ? e : ""
            }
        }
            , c = function(e) {
            var t;
            return o.some(function(n) {
                return ["type", "source", "appid"].some(function(t) {
                    return e[t] === n[t]
                }) ? (t = n,
                    !0) : void 0
            }),
                t ? t : o[1]
        }
            , u = {
            get: function(e) {
                var t = localStorage.getItem(e);
                if (t) {
                    try {
                        t = JSON.parse(t),
                        (!t.time || t.time && t.time > Date.now()) && (t = t.value)
                    } catch (n) {
                        return
                    }
                    return t
                }
            },
            set: function(e, t, n) {
                var i = 0;
                "number" == typeof n ? i = Date.now() + 864e5 * n : "[object Date]" === Object.prototype.toString.call(n) && (i = n.getTime()),
                    localStorage.setItem(e, JSON.stringify({
                        value: t,
                        time: i
                    }))
            },
            remove: function(e) {
                localStorage.removeItem(e)
            }
        }
            , l = {
            get: function() {
                var e = u.get("_order_counts");
                return e ? parseInt(e) : 0
            },
            set: function(e) {
                var t = new Date;
                t.setMinutes(t.getMinutes() + 300),
                    u.set("_order_counts", e, t)
            },
            isOldCustomer: function() {
                return this.get() > 1
            }
        }
            , d = {
            getName: function(e) {
                return "_token_" + e.source
            },
            get: function(e) {
                return r(this.getName(c(e)))
            },
            set: function(e, t) {
                var n = new Date;
                n.setMinutes(n.getMinutes() + 10),
                    r(this.getName(c(e)), t, {
                        path: "/",
                        expires: n,
                        domain: "beibei.com"
                    })
            },
            clear: function() {
                var e = this;
                o.forEach(function(t) {
                    r(e.getName(t), 0, {
                        path: "/",
                        expires: -1,
                        domain: "beibei.com"
                    })
                })
            }
        }
            , f = {
            isLogin: function() {
                return r("st_au") && (r("_last_login_gmt_") || this.getSymbol())
            },
            setSymbol: function() {
                var e = new Date;
                e.setMinutes(e.getMinutes() + 240),
                    r("_has_session_", 1, {
                        path: "/",
                        expires: e,
                        domain: "beibei.com"
                    })
            },
            getSymbol: function() {
                return r("_has_session_")
            }
        }
            , p = {
            getName: function(e) {
                return "pt_openid_" + e.source + "_" + r("_logged_")
            },
            get: function(e) {
                var t = u.get(this.getName(c(e)));
                return t ? t : ""
            },
            remove: function(e) {
                u.remove(this.getName(c(e)))
            },
            set: function(e, t) {
                var n = new Date;
                n.setDate(n.getDate() + 30),
                    u.set(this.getName(c(e)), t, n)
            },
            setFromMap: function(e) {
                var t = {}
                    , n = [];
                "string" == typeof e ? (n = e.trim().split(":"),
                2 === n.length && (t[n[0]] = n[1])) : "[object Object]" === Object.prototype.toString.call(e) && (t = e);
                for (var i in t)
                    this.set({
                        type: parseInt(i, 10)
                    }, t[i])
            },
            promiseGetOpenId: function(e, t) {
                return isNaN(parseInt(e)) ? void 0 : new Promise(function(n, i) {
                        $.ajax({
                            url: "//api.beibei.com/mroute.html?method=beibei.h5.wechat.openid.get",
                            type: "get",
                            cache: !0,
                            xhrFields: {
                                withCredentials: !0
                            },
                            data: {
                                type: e,
                                code: t
                            },
                            success: n,
                            error: i
                        })
                    }
                )
            },
            getOpenId: function(e, t) {
                const n = c({
                    type: e
                })
                    , r = (location.href,
                    i.uri.params.code)
                    , o = i.uri.params.state
                    , s = this.get(n)
                    , u = "getopenid_" + n.type
                    , l = function() {
                    location.href = a(u, "snsapi_base", n.appid)
                };
                s ? t(s) : o === u ? this.promiseGetOpenId(n.type, r).then(function(e) {
                    if (e.success) {
                        const i = e.data.open_id;
                        p.set(n, i),
                            t(i)
                    } else
                        l()
                })["catch"](l) : l()
            }
        }
            , h = {
            get: function() {
                return window.localStorage.getItem("pt_signin_modal_show_time")
            },
            update: function() {
                window.localStorage.setItem("pt_signin_modal_show_time", Date.now())
            },
            isOverDays: function(e) {
                var t = parseInt(this.get());
                return t = t ? t : 0,
                "number" == typeof e && Date.now() - 864e5 * e > t
            }
        };
        t.exports = {
            WX_CONFIG_LIST: o,
            getAuthorizeURL: a,
            utmSource: s,
            getWxItem: c,
            localStorageHelper: u,
            wxSourceToken: d,
            sessionStatus: f,
            orderCounts: l,
            openidStorage: p,
            lastShowTime: h
        }
    }
        , {
            "@beibei/cookie": 10,
            "@beibei/httpurl": 20
        }],
    29: [function(e, t, n) {
        e("@beibei/hybrid");
        var i = e("@beibei/cookie")
            , r = e("@beibei/popup")
            , o = window.bbhybrid
            , a = null
            , s = null
            , c = function() {
            return !(!i("st_au") || !i("_last_login_gmt_"))
        }
            , u = function(e) {
            if ("function" == typeof e) {
                if (!o)
                    throw "no bbhybrid";
                var t = function() {
                    o.checkLogin(function(t, n) {
                        if (t)
                            throw "bbhybrid.checkLogin error";
                        1 == n ? l(function(t) {
                            e(t)
                        }, !0) : e(!1)
                    })
                };
                "function" != typeof o.checkLogin ? o.config({
                    jsApiList: {
                        checkLogin: "optional"
                    }
                }, function(e, n) {
                    if (e || "function" != typeof o.checkLogin)
                        throw "bbhybrid config checkLogin error";
                    t()
                }) : t()
            }
        }
            , l = function(e, t) {
            if (!o)
                throw "no bbhybrid";
            var n = function() {
                o.login(function(n, i) {
                    if (n)
                        throw "bbhybrid.login error";
                    if ("string" == typeof i)
                        try {
                            i = JSON.parse("{" + i + "}")
                        } catch (o) {
                            throw "bbhybrid.login parse result error:" + i
                        }
                    a = i.uid,
                        s = JSON.stringify(i),
                        $.ajax({
                            type: "GET",
                            url: "//api.beibei.com/login/ajax_trust.html",
                            data: {
                                type: "yeb",
                                sign: i.sign,
                                ts: i.ts,
                                uid: i.uid,
                                session: i.session,
                                udid: i.udid
                            },
                            dataType: "jsonp",
                            success: function(n) {
                                n.success ? "function" == typeof e && e(t ? !0 : p()) : t ? "function" == typeof e && e(!1) : r.note(n.message || n.err_msg || "网络错误,请稍后重试")
                            },
                            error: function() {
                                r.note("网络错误,请稍后重试")
                            }
                        })
                })
            };
            "function" != typeof o.login ? o.config({
                jsApiList: {
                    login: "optional"
                }
            }, function(e, t) {
                if (e || "function" != typeof o.login)
                    throw "bbhybrid config login error";
                n()
            }) : n()
        }
            , d = function(e) {
            "function" == typeof e && (c() ? s ? e(!0) : l(function(t) {
                e(t)
            }, !0) : u(e))
        }
            , f = function(e) {
            c() && s ? "function" == typeof e && e(p()) : l(e)
        }
            , p = function() {
            return {
                uid: a,
                appLoginInfo: s
            }
        };
        t.exports = {
            checkLogin: d,
            login: f,
            getUserInfo: p
        }
    }
        , {
            "@beibei/cookie": 10,
            "@beibei/hybrid": 21,
            "@beibei/popup": 33
        }],
    30: [function(e, t, n) {
        var i = e("@beibei/env")
            , r = e("./bin/h5-login")
            , o = e("./bin/app-login")
            , a = e("./bin/yeb-login")
            , s = r;
        i.app.isBeibei ? s = o : i.app.isYuerbao && (s = a),
            t.exports = {
                checkLogin: s.checkLogin,
                login: s.login,
                getUserInfo: s.getUserInfo
            }
    }
        , {
            "./bin/app-login": 22,
            "./bin/h5-login": 26,
            "./bin/yeb-login": 29,
            "@beibei/env": 17
        }],
    31: [function(e, t, n) {
        arguments[4][2][0].apply(n, arguments)
    }
        , {
            "./lib/index": 32,
            dup: 2
        }],
    32: [function(e, t, n) {
        arguments[4][3][0].apply(n, arguments)
    }
        , {
            dup: 3
        }],
    33: [function(e, t, n) {
        function i(e, t) {
            var n = $.extend(!0, {}, r, t);
            n.content = e || n.content;
            var i = $("<div></div>").addClass("popup-mask")
                , o = $("<div></div>").addClass("popup-main")
                , a = $("<div></div>").addClass("popup-content");
            i.css({
                position: "fixed",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                background: "rgba( 47, 52, 61,.4)",
                "z-index": 999
            }),
                o.css(n.mainStyle),
                i.append(o),
                o.append(a),
            n.mask === !1 && i.css({
                background: "rgba(0,0,0,0)"
            }),
                a.html(n.content),
            "object" == typeof n.size && o.css({
                width: n.size.width,
                height: n.size.height
            });
            var s = n.actionConfig.length;
            if (s > 0) {
                var c = $("<div></div>").addClass("popup-action")
                    , u = $("<a></a>").addClass("popup-action-btn")
                    , l = {
                    text: "",
                    callback: function() {}
                };
                c.css({
                    padding: "0",
                    "text-align": "center"
                }),
                    o.append(c),
                s >= 3 && u.css({
                    width: 100 / n.actionConfig.length + "%",
                    "text-align": "center",
                    "font-size": "0.875rem",
                    color: "#0d81ff",
                    display: "inline-block",
                    "text-decoration": "none",
                    "border-top": "1px #eee solid",
                    padding: "0.625rem 0"
                }),
                    n.actionConfig.reverse();
                for (var d = s; d--; ) {
                    var f = u.clone()
                        , p = $.extend({}, l, n.actionConfig[d]);
                    f.css({
                        display: "inline-block",
                        height: "1.87rem",
                        "text-align": "center",
                        "font-size": "0.7rem",
                        "line-height": "1.87rem",
                        "text-decoration": "none",
                        "box-sizing": "border-box",
                        "border-top": "1px solid rgba(0,0,0,.08)",
                        "font-weight": "600"
                    }),
                        1 === s ? f.css({
                            width: "100%",
                            color: "#ff4965"
                        }) : 2 === s && (1 === d ? f.css({
                            width: "50%",
                            color: "#3d3d3d",
                            "border-right": "1px solid rgba(0,0,0,.08)"
                        }) : f.css({
                            width: "50%",
                            color: "#ff4965"
                        })),
                        f.html(p.text).on("click", {
                            acf: p
                        }, function(e) {
                            e.data.acf.callback()
                        }),
                    d < n.actionConfig.length - 1 && n.actionConfig.length >= 3 && f.css({
                        "box-sizing": "border-box",
                        "border-right": "1px #eee solid"
                    }),
                        c.append(f)
                }
            }
            $("body").append(i),
                "center" === n.position ? o.css({
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    "margin-left": -o.width() / 2,
                    "margin-top": -o.height() / 2
                }) : "top" === n.position ? o.css({
                    position: "absolute",
                    top: "5%",
                    left: "50%",
                    "margin-left": -o.width() / 2
                }) : "bottom" === n.position && o.css({
                    position: "absolute",
                    top: "95%",
                    left: "50%",
                    "margin-left": -o.width() / 2,
                    "margin-top": -o.height()
                }),
            0 !== n.closeTime && setTimeout(function() {
                h.fadeOut(function() {
                    h.remove()
                })
            }, n.closeTime);
            var h = {
                $mask: i,
                $main: o,
                $contnet: a,
                show: function() {
                    return this.$mask.show(),
                        this
                },
                hide: function() {
                    return this.$mask.hide(),
                        this
                },
                fadeOut: function(e) {
                    var t = this
                        , n = function(i, r) {
                        i -= r,
                            t.$mask.css("opacity", i / 200),
                            setTimeout(function() {
                                n(i, r)
                            }, r),
                        0 === i && e()
                    };
                    n(200, 20)
                },
                remove: function() {
                    return this.$mask.remove(),
                        this
                }
            };
            return h
        }
        var r = {
            content: "",
            size: "auto",
            mask: !0,
            position: "center",
            radius: 8,
            closeTime: 0,
            actionConfig: [],
            mainStyle: {
                display: "inline-block",
                "max-width": "80%",
                "border-radius": "0.2rem",
                background: "#fff"
            }
        };
        i.loading = function(e) {
            return e = $.extend(!0, {}, {
                mainStyle: {
                    background: "rgba(0,0,0,.5)",
                    padding: ".375rem .5rem"
                }
            }, e),
                i('<style>.sk-fading-circle{width:1.5rem;height:1.5rem;position:relative}.sk-fading-circle .sk-circle{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle:before{content:"";display:block;margin:0 auto;width:15%;height:15%;background-color:#fff;border-radius:100%;-webkit-animation:sk-circleFadeDelay 1.2s infinite ease-in-out both;animation:sk-circleFadeDelay 1.2s infinite ease-in-out both}.sk-fading-circle .sk-circle2{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.sk-fading-circle .sk-circle3{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.sk-fading-circle .sk-circle4{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.sk-fading-circle .sk-circle5{-webkit-transform:rotate(120deg);-ms-transform:rotate(120deg);transform:rotate(120deg)}.sk-fading-circle .sk-circle6{-webkit-transform:rotate(150deg);-ms-transform:rotate(150deg);transform:rotate(150deg)}.sk-fading-circle .sk-circle7{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.sk-fading-circle .sk-circle8{-webkit-transform:rotate(210deg);-ms-transform:rotate(210deg);transform:rotate(210deg)}.sk-fading-circle .sk-circle9{-webkit-transform:rotate(240deg);-ms-transform:rotate(240deg);transform:rotate(240deg)}.sk-fading-circle .sk-circle10{-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.sk-fading-circle .sk-circle11{-webkit-transform:rotate(300deg);-ms-transform:rotate(300deg);transform:rotate(300deg)}.sk-fading-circle .sk-circle12{-webkit-transform:rotate(330deg);-ms-transform:rotate(330deg);transform:rotate(330deg)}.sk-fading-circle .sk-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-fading-circle .sk-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-fading-circle .sk-circle4:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-fading-circle .sk-circle5:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-fading-circle .sk-circle6:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-fading-circle .sk-circle7:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-fading-circle .sk-circle8:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-fading-circle .sk-circle9:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-fading-circle .sk-circle10:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-fading-circle .sk-circle11:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-fading-circle .sk-circle12:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}@keyframes sk-circleFadeDelay{0%,39%,100%{opacity:0}40%{opacity:1}}</style><div class="sk-fading-circle"><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div>', e)
        }
            ,
            i.note = function(e, t) {
                var n = {
                    mainStyle: {
                        background: "rgba(41,49,61,.7)",
                        padding: ".426rem .512rem"
                    },
                    closeTime: 1e3
                };
                return t = "number" == typeof t ? $.extend(!0, {}, n, {
                    closeTime: t
                }) : $.extend(!0, {}, n, t),
                    i('<div style="color:#fff;font-size:0.6rem;margin:0">' + e + "</div>", t)
            }
            ,
            i.confirm = function(e, t, n, r) {
                r = $.extend(!0, {}, {
                    mainStyle: {
                        width: "72%",
                        "border-radius": "0.55rem"
                    },
                    mask: !0,
                    actionConfig: [{
                        text: "取消",
                        callback: function() {
                            o.remove(),
                            n && n.apply(o)
                        }
                    }, {
                        text: "确认",
                        callback: function() {
                            o.remove(),
                            t && t.apply(o)
                        }
                    }]
                }, r);
                var o = i('<div style="padding:.756rem 1.06rem;text-align:center;font-size:0.7rem;">' + e + "</div>", r);
                return o
            }
            ,
            i.alert = function(e, t, n) {
                t = $.extend(!0, {}, {
                    mainStyle: {
                        width: "72%",
                        "border-radius": "0.55rem"
                    },
                    mask: !0,
                    actionConfig: [{
                        text: "确认",
                        callback: function() {
                            r.remove(),
                            n && n()
                        }
                    }]
                }, t);
                var r = i('<div style="padding:.756rem 1.06rem;text-align:center;font-size: 0.7rem;">' + e + "</div>", t);
                return r
            }
            ,
            t.exports = i
    }
        , {}],
    34: [function(require, module, exports) {
        (function(process) {
                "development" !== process.env.NODE_ENV && (window._ty_rum && window._ty_rum.server || function(t) {
                    function r(e) {
                        switch (typeof e) {
                            case "object":
                                if (!e)
                                    return "null";
                                if (e instanceof Array) {
                                    for (var t = "[", n = 0; n < e.length; n++)
                                        t += (n > 0 ? "," : "") + r(e[n]);
                                    return t + "]"
                                }
                                var t = "{"
                                    , n = 0;
                                for (var i in e)
                                    if ("function" != typeof e[i]) {
                                        var o = r(e[i]);
                                        t += (n > 0 ? "," : "") + r(i) + ":" + o,
                                            n++
                                    }
                                return t + "}";
                            case "string":
                                return '"' + e.replace(/([\"\\])/g, "\\$1").replace(/\n/g, "\\n") + '"';
                            case "number":
                                return e.toString();
                            case "boolean":
                                return e ? "true" : "false";
                            case "function":
                                return r(e.toString());
                            case "undefined":
                            default:
                                return '"undefined"'
                        }
                    }
                    function e(e) {
                        return O ? O(e) : e
                    }
                    function n() {
                        return Date.now ? Date.now() : (new Date).valueOf()
                    }
                    function a(t, r, e) {
                        function n() {
                            var t = N.args.apply(this, arguments);
                            return r(o, t, e)
                        }
                        var a, o = t[t.length - 1];
                        if ("function" == typeof o) {
                            switch (o.length) {
                                case 0:
                                    a = function() {
                                        return n.apply(this, arguments)
                                    }
                                    ;
                                    break;
                                case 1:
                                    a = function(e) {
                                        return n.apply(this, arguments)
                                    }
                                    ;
                                    break;
                                case 2:
                                    a = function(e, t) {
                                        return n.apply(this, arguments)
                                    }
                                    ;
                                    break;
                                case 3:
                                    a = function(e, t, i) {
                                        return n.apply(this, arguments)
                                    }
                                    ;
                                    break;
                                case 4:
                                    a = function(e, t, i, r) {
                                        return n.apply(this, arguments)
                                    }
                                    ;
                                    break;
                                case 5:
                                    a = function(e, t, i, r, o) {
                                        return n.apply(this, arguments)
                                    }
                                    ;
                                    break;
                                default:
                                    for (var i = [], s = 0, u = o.length; u > s; s++)
                                        i.push("_" + s);
                                    a = eval("(function(){return function(" + i.join(",") + "){var args = [].slice.call(arguments, 0);return r(o, args, e);};})();")
                            }
                            t[t.length - 1] = a
                        }
                        return t
                    }
                    function o(e, t) {
                        return e && t && (e.moduleName = t),
                            e
                    }
                    function i(e, t, n) {
                        return function() {
                            try {
                                E = t,
                                n && s(t),
                                    e.apply(this, arguments),
                                n && u()
                            } catch (i) {
                                throw n && u(),
                                    o(i, t)
                            }
                        }
                    }
                    function s(e) {
                        N.each(["setTimeout", "setInterval"], function(n) {
                            N.wrap(!0, t, n, function(t) {
                                return function() {
                                    var n, r = N.args.apply(this, arguments), o = r[0];
                                    return "function" == typeof o && (n = i(o, e, !0)),
                                    n && (r[0] = n),
                                        t.apply ? t.apply(this, r) : Function.prototype.apply.apply(t, [t, r])
                                }
                            })
                        })
                    }
                    function u() {
                        N.each(["setTimeout", "setInterval"], function(e) {
                            N.unwrap(t, e)
                        })
                    }
                    function c(e) {
                        P && N.wrap(!1, P.prototype, "addEventListener", function(t) {
                            return function() {
                                var n, r = N.args.apply(this, arguments), o = r[1];
                                return "function" == typeof o && (n = i(o, e, !0)),
                                n && (r[1] = n),
                                    t.apply(this, r)
                            }
                        }),
                            s(e)
                    }
                    function f() {
                        P && N.unwrap(P.prototype, "addEventListener"),
                            u()
                    }
                    function l(e) {
                        return function(e, t) {}
                    }
                    function p() {
                        if (this.errors.length) {
                            var e = function(e) {
                                var t = []
                                    , n = {};
                                N.each(e, function(e) {
                                    var t = _(e[1], e[2], e[3], e[6]);
                                    n[t] ? n[t][4] += 1 : n[t] = [e[1], e[2], e[3], "#" == e[4] ? x.URL : e[4], 1, e[5], e[6], e[7]]
                                });
                                for (var i in n)
                                    t.push(n[i]);
                                return t
                            }(this.errors)
                                , t = this;
                            N.POST(N.mkurl(D.server.beacon, "err", {
                                fu: q ? q : q++,
                                os: parseInt((n() - (B || D.st)) / 1e3)
                            }), N.stringify({
                                datas: e
                            }), {}, function(e, n) {
                                e || (t.errors = [])
                            })
                        }
                    }
                    function d() {
                        j.initend()
                    }
                    function h() {
                        "complete" === x.readyState && j.initend()
                    }
                    function y(e) {
                        function t() {
                            j.send()
                        }
                        return !!D.load_time || (j.initend(),
                            D.load_time = n(),
                            void (9 === e ? t() : setTimeout(t, 0)))
                    }
                    function m() {
                        z || y(9),
                            N.bind(p, j)(),
                            z = 1
                    }
                    function v() {
                        j.touch || (j.touch = n())
                    }
                    function g(e) {
                        if (e[6]) {
                            var t = e[4]
                                , n = e[5];
                            if (n && "string" == typeof n && t) {
                                n = n.split(/\n/);
                                var i = C.exec(n[0]);
                                i || (i = C.exec(n[1])),
                                i && i[1] != t && (e[4] = i[1] || t,
                                    e[2] = i[2] || e[2],
                                    e[3] = i[3] || e[3])
                            }
                        }
                    }
                    function _(e, t, n, i) {
                        return e + t + n + (i ? i : "")
                    }
                    function w(e) {
                        var i = arguments
                            , r = "unknown"
                            , o = [n()];
                        if (0 != i.length) {
                            if ("string" == typeof e) {
                                var a = i.length < 4 ? i.length : 4;
                                o[1] = i[0],
                                a > 2 && (o[2] = i[2],
                                    o[3] = 0,
                                    o[4] = i[1]),
                                a > 3 && i[3] && (o[3] = i[3])
                            } else if (e instanceof Event || t.ErrorEvent && e instanceof ErrorEvent) {
                                if (o[1] = e.message || (e.error && e.error.constructor.name) + (e.error && e.error.message) || "",
                                    o[2] = e.lineno ? e.lineno : 0,
                                    o[3] = e.colno ? e.colno : 0,
                                    o[4] = e.filename || e.error && e.error.fileName || e.target && e.target.baseURI || "",
                                !o[4] && M)
                                    return;
                                o[4] == x.URL && (o[4] = "#"),
                                    e.error ? (o[5] = e.error.stack,
                                        o[6] = e.error.moduleName) : (o[5] = null,
                                        o[6] = null);
                                var s = _(o[1], o[2], o[3], o[6]);
                                if (o[7] = J[s] ? 0 : 1,
                                    J[s] = !0,
                                o[1] === r && o[4] === r)
                                    return;
                                g(o)
                            }
                            j.errors.push(o)
                        }
                    }
                    function S(e) {
                        return function() {
                            var t = arguments;
                            if (!this._ty_wrap) {
                                var i = N.args.apply(this, t);
                                this._ty_rum = {
                                    method: i[0],
                                    url: i[1],
                                    start: n()
                                }
                            }
                            try {
                                return e.apply(this, t)
                            } catch (r) {
                                return Function.prototype.apply.call(e, this, t)
                            }
                        }
                    }
                    function T(e) {
                        return "string" == typeof e ? e.length : t.ArrayBuffer && e instanceof ArrayBuffer ? e.byteLength : t.Blob && e instanceof Blob ? e.size : e && e.length ? e.length : 0
                    }
                    function b(e) {
                        return function() {
                            function i(e) {
                                var t, i, r = f._ty_rum;
                                if (r) {
                                    if (4 !== r.readyState && (r.end = n()),
                                        r.s = f.status,
                                    "" == f.responseType || "text" == f.responseType)
                                        r.res = T(f.responseText);
                                    else if (f.response)
                                        r.res = T(f.response);
                                    else
                                        try {
                                            r.res = T(f.responseText)
                                        } catch (o) {
                                            r.res = 0
                                        }
                                    if (r.readyState = f.readyState,
                                        r.cb_time = p,
                                        t = [r.method + " " + r.url, r.s > 0 ? r.end - r.start : 0, p, r.s, r.s > 0 ? 0 : e, r.res, r.req],
                                    r.r && (i = a(f),
                                    i && (i = i.xData) && (t.push(i.id),
                                        t.push(i.action),
                                        t.push(i.time && i.time.duration),
                                        t.push(i.time && i.time.qu))),
                                        D.aa.push(t),
                                    D.server.custom_urls && D.server.custom_urls.length && !j.ct) {
                                        if (!D.pattern) {
                                            D.pattern = [];
                                            for (var s = 0; s < D.server.custom_urls.length; s++)
                                                D.pattern.push(new RegExp(D.server.custom_urls[s]))
                                        }
                                        for (var s = 0; s < D.pattern.length; s++)
                                            if (r.url.match(D.pattern[s])) {
                                                j.ct = r.end + p;
                                                break
                                            }
                                    }
                                    j.sa(),
                                        f._ty_rum = null
                                }
                            }
                            function r() {
                                4 == f.readyState && i(0)
                            }
                            function a(e) {
                                var n;
                                if (e.getResponseHeader) {
                                    var i = N.parseJSON(e.getResponseHeader("X-Tingyun-Tx-Data"));
                                    i && i.r && e._ty_rum && i.r + "" == e._ty_rum.r + "" && (n = {
                                        name: e._ty_rum.url,
                                        xData: i
                                    },
                                    X && t._ty_rum.c_ra.push(n))
                                }
                                return n
                            }
                            function c(e) {
                                return function() {
                                    var t, i;
                                    4 == f.readyState && f._ty_rum && (f._ty_rum.end = t = n(),
                                        f._ty_rum.readyState = 4);
                                    try {
                                        E && s(E),
                                            i = e.apply(this, arguments),
                                        E && u()
                                    } catch (a) {
                                        throw a = o(a, E),
                                        E && u(),
                                            E = null,
                                            a
                                    }
                                    return 4 == f.readyState && (p = n() - t),
                                        r(),
                                        i
                                }
                            }
                            function l(e) {
                                return function() {
                                    var t = f._ty_rum;
                                    return !t || "progress" == e || ("abort" == e ? i(905) : "loadstart" == e ? t.start = n() : "error" == e ? i(990) : "timeout" == e && i(903),
                                        !0)
                                }
                            }
                            function d(e, t) {
                                t instanceof Array || (t = [t]);
                                for (var n = 0; n < t.length; n++) {
                                    var i = t[n];
                                    N.sh(e, i, l(i), !1)
                                }
                            }
                            if (!this._ty_wrap) {
                                this._ty_rum.start = n(),
                                    this._ty_rum.req = arguments[0] ? T(arguments[0]) : 0;
                                var f = this
                                    , p = 0
                                    , h = N.wrap(!1, this, "onreadystatechange", c);
                                h || N.sh(this, "readystatechange", r, !1),
                                    d(this, ["error", "progress", "abort", "load", "loadstart", "loadend", "timeout"]),
                                h || setTimeout(function() {
                                    N.wrap(!1, f, "onreadystatechange", c)
                                }, 0)
                            }
                            var g = function() {
                                function e(e) {
                                    var t = {}
                                        , n = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?/.exec(e);
                                    return n && (t.protocol = n[1] ? n[1] + ":" : "http:",
                                        t.hostname = n[3],
                                        t.port = n[4] || ""),
                                        t
                                }
                                return function(t) {
                                    var n = location;
                                    if (t = N.trim(t)) {
                                        if (t = t.toLowerCase(),
                                        t.startsWith("//") && (t = n.protocol + t),
                                            !t.startsWith("http"))
                                            return !0;
                                        var i = e(t)
                                            , r = i.protocol === n.protocol && i.hostname === n.hostname;
                                        return r && (r = i.port === n.port || !n.port && ("http:" === n.protocol && "80" === i.port || "https:" === n.protocol && "443" === i.port)),
                                            r
                                    }
                                    return !1
                                }
                            }()
                                , m = arguments;
                            try {
                                var b = D.server;
                                b && b.id && this._ty_rum && g(this._ty_rum.url) && (this._ty_rum.r = (new Date).getTime() % 1e8,
                                this.setRequestHeader && this.setRequestHeader("X-Tingyun-Id", b.id + ";r=" + this._ty_rum.r))
                            } catch (v) {}
                            try {
                                return e.apply(this, m)
                            } catch (y) {
                                return Function.prototype.apply.call(e, this, m)
                            }
                        }
                    }
                    var E, k = t.XMLHttpRequest, x = document, R = Object.defineProperty, L = t.define, P = t.EventTarget, q = 0, C = new RegExp("([a-z]+:/{2,3}.*):(\\d+):(\\d+)"), O = t.encodeURIComponent, B = null, N = {
                        wrap: function(e, t, n, i, r) {
                            try {
                                var o = t[n]
                            } catch (a) {
                                if (!e)
                                    return !1
                            }
                            if (!o && !e)
                                return !1;
                            if (o && o._ty_wrap)
                                return !1;
                            try {
                                t[n] = i(o, r)
                            } catch (a) {
                                return !1
                            }
                            return t[n]._ty_wrap = [o],
                                !0
                        },
                        unwrap: function(e, t) {
                            try {
                                var n = e[t]._ty_wrap;
                                n && (e[t] = n[0])
                            } catch (i) {}
                        },
                        each: function(e, t) {
                            if (e) {
                                var n;
                                for (n = 0; n < e.length && (!e[n] || !t(e[n], n, e)); n += 1)
                                    ;
                            }
                        },
                        mkurl: function(i, r) {
                            var o = arguments
                                , a = /^https/i.test(x.URL) ? "https" : "http";
                            if (a = a + "://" + i + "/" + r + "?av=1.3.3&v=1.3.2&key=" + e(D.server.key) + "&ref=" + e(x.URL) + "&rand=" + n() + "&pvid=" + H,
                            "pf" !== r && D && (D.agent = D.agent || t._ty_rum.agent,
                            D.agent && D.agent.n && (a += "&n=" + e(D.agent.n))),
                            o.length > 2) {
                                var s = o[2];
                                for (var c in s)
                                    a += "&" + c + "=" + s[c]
                            }
                            return A.host && (a += "&cshst=" + e(A.host)),
                            A.url && (a += "&csurl=" + e(A.url)),
                                a
                        },
                        GET: function(e, t) {
                            function n() {
                                t && t.apply(this, arguments),
                                i.parentNode && i.parentNode.removeChild(i)
                            }
                            if (navigator && navigator.sendBeacon && F.test(e))
                                return navigator.sendBeacon(e, null);
                            var i = x.createElement("img");
                            return i.setAttribute("src", e),
                                i.setAttribute("style", "display:none"),
                                this.sh(i, "readystatechange", function() {
                                    "loaded" != i.readyState && 4 != i.readyState || n("loaded")
                                }, !1),
                                this.sh(i, "load", function() {
                                    return n("load"),
                                        !0
                                }, !1),
                                this.sh(i, "error", function() {
                                    return n("error"),
                                        !0
                                }, !1),
                                x.body.appendChild(i)
                        },
                        fpt: function(e, t, n) {
                            function i(e, t, n) {
                                var i = x.createElement(e);
                                try {
                                    for (var r in t)
                                        i[r] = t[r]
                                } catch (o) {
                                    var a = "<" + e;
                                    for (var r in t)
                                        a += " " + r + '="' + t[r] + '"';
                                    a += ">",
                                    n || (a += "</" + e + ">"),
                                        i = x.createElement(a)
                                }
                                return i
                            }
                            var r = i("div", {
                                style: "display:none"
                            }, !1)
                                , o = i("iframe", {
                                name: "_ty_rum_frm",
                                width: 0,
                                height: 0,
                                style: "display:none"
                            }, !1)
                                , a = i("form", {
                                style: "display:none",
                                action: e,
                                enctype: "application/x-www-form-urlencoded",
                                method: "post",
                                target: "_ty_rum_frm"
                            }, !1)
                                , s = i("input", {
                                name: "data",
                                type: "hidden"
                            }, !0);
                            return s.value = t,
                                a.appendChild(s),
                                r.appendChild(o),
                                r.appendChild(a),
                                x.body.appendChild(r),
                                a.submit(),
                                o.onreadystatechange = function() {
                                    "complete" !== o.readyState && 4 !== o.readyState || (n(null, o.innerHTML),
                                        x.body.removeChild(r))
                                }
                                ,
                                !0
                        },
                        POST: function(e, n, i, r) {
                            if (this.ie)
                                return this.fpt(e, n, r);
                            if (navigator && navigator.sendBeacon && F.test(e)) {
                                var o = navigator.sendBeacon(e, n);
                                return r(!o),
                                    o
                            }
                            var a;
                            if (t.XDomainRequest)
                                return a = new XDomainRequest,
                                    a.open("POST", e),
                                    a.onload = function() {
                                        r(null, a.responseText)
                                    }
                                    ,
                                    this.sh(a, "load", function() {
                                        r(null, a.responseText)
                                    }, !1),
                                    this.sh(a, "error", function() {
                                        r("POST(" + e + ")error")
                                    }, !1),
                                    this.wrap(!0, a, "onerror", function(e) {
                                        return function() {
                                            return r && r("post error", a.responseText),
                                                !0
                                        }
                                    }),
                                    a.send(n),
                                    !0;
                            if (!k)
                                return !1;
                            a = new k,
                            a.overrideMimeType && a.overrideMimeType("text/html");
                            try {
                                a._ty_wrap = 1
                            } catch (s) {}
                            var c = 0;
                            a.onreadystatechange = function() {
                                4 == a.readyState && 200 == a.status && (0 == c && r(null, a.responseText),
                                    c++)
                            }
                                ,
                            a.onerror && this.wrap(!0, a, "onerror", function(e) {
                                return function() {
                                    return r("post error", a.responseText),
                                    "function" != typeof e || e.apply(this, arguments)
                                }
                            });
                            try {
                                a.open("POST", e, !0)
                            } catch (s) {
                                return this.fpt(e, n, r)
                            }
                            for (var u in i)
                                a.setRequestHeader(u, i[u]);
                            return a.send(n),
                                !0
                        },
                        sh: function(e, t, n, i) {
                            return e.addEventListener ? e.addEventListener(t, n, i) : !!e.attachEvent && e.attachEvent("on" + t, n)
                        },
                        args: function() {
                            for (var e = [], t = 0; t < arguments.length; t++)
                                e.push(arguments[t]);
                            return e
                        },
                        stringify: r,
                        parseJSON: function(e) {
                            if (e && "string" == typeof e) {
                                var n = t.JSON ? t.JSON.parse : function(e) {
                                        return new Function("return " + e)()
                                    }
                                ;
                                return n(e)
                            }
                            return null
                        },
                        trim: $ ? function(e) {
                                return null == e ? "" : $.call(e)
                            }
                            : function(e) {
                                return null == e ? "" : e.toString().replace(/^\s+/, "").replace(/\s+$/, "")
                            }
                        ,
                        extend: function(e, t) {
                            if (e && t)
                                for (var n in t)
                                    t.hasOwnProperty(n) && (e[n] = t[n]);
                            return e
                        },
                        bind: function(e, t) {
                            return function() {
                                e.apply(t, arguments)
                            }
                        }
                    }, A = {}, D = t._ty_rum = N.extend({
                        st: n(),
                        ra: [],
                        c_ra: [],
                        aa: [],
                        snd_du: function() {
                            return this.server.adu ? 1e3 * this.server.adu : 1e4
                        },
                        cc: function() {
                            return this.server.ac ? this.server.ac : 10
                        },
                        config: function(e, t) {
                            var n;
                            if ("object" == typeof e)
                                n = e;
                            else {
                                if ("string" != typeof e || void 0 === t)
                                    throw new Error("illegal arguments");
                                n = {},
                                    n[e] = t
                            }
                            for (var i in n)
                                A[i] = n[i];
                            return this
                        }
                    }, t._ty_rum || {}), ty_rum = D;
                    if (ty_rum.server = {
                        id: "F71C2GOhe8I",
                        ignore_err: !0,
                        beacon: "beacon.tingyun.com",
                        beacon_err: "beacon-err.tingyun.com",
                        key: "shwEPBxnHE4",
                        trace_threshold: 7e3,
                        custom_urls: [],
                        sr: 1
                    },
                    D.server && !(D.server.sr && Math.random() >= D.server.sr)) {
                        var I = "ignore_err"
                            , M = !(I in D.server) || D.server[I]
                            , $ = String.prototype.trim;
                        String.prototype.startsWith || (String.prototype.startsWith = function(e, t) {
                                return t = t || 0,
                                this.indexOf(e, t) === t
                            }
                        );
                        var F = /^http/i
                            , H = function() {
                            function e() {
                                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
                            }
                            return e() + "-" + e() + e()
                        }();
                        try {
                            R && R(t, "define", {
                                get: function() {
                                    return L
                                },
                                set: function(e) {
                                    "function" == typeof e && (e.amd || e.cmd) ? (L = function() {
                                        var t = N.args.apply(this, arguments);
                                        if (3 !== t.length)
                                            return e.apply(this, t);
                                        var n = "string" == typeof t[0] ? t[0] : "anonymous";
                                        return e.apply(this, a(t, function(e, t, n) {
                                            var i;
                                            try {
                                                E = n,
                                                    c(n),
                                                    i = e.apply(this, t),
                                                    f()
                                            } catch (r) {
                                                throw f(),
                                                    o(r, n)
                                            }
                                            return i
                                        }, n))
                                    }
                                        ,
                                        N.extend(L, e)) : L = e
                                },
                                configurable: !0
                            })
                        } catch (U) {}
                        var X = t.performance ? t.performance : t.Performance;
                        X && (N.sh(X, "resourcetimingbufferfull", function() {
                            var e = X.getEntriesByType("resource");
                            e && (D.ra = D.ra.concat(e),
                                X.clearResourceTimings())
                        }, !1),
                            N.sh(X, "webkitresourcetimingbufferfull", function() {
                                var e = X.getEntriesByType("resource");
                                e && (D.ra = D.ra.concat(e),
                                    X.webkitClearResourceTimings())
                            }, !1));
                        for (var j = D.metric = {
                            ready: function() {
                                return D.load_time
                            },
                            initend: function() {
                                function e() {
                                    j.sa()
                                }
                                D.end_time || (D.end_time = n(),
                                    this._h = setInterval(e, 2e3))
                            },
                            send: function() {
                                function i() {
                                    function n(e) {
                                        return r[e] > 0 ? r[e] - a : 0
                                    }
                                    var i = {};
                                    if (X && X.timing) {
                                        var r = X.timing;
                                        a = r.navigationStart;
                                        var o = n("domainLookupStart")
                                            , s = n("domainLookupEnd")
                                            , c = n("redirectStart")
                                            , u = n("redirectEnd")
                                            , l = n("connectStart")
                                            , d = n("connectEnd");
                                        i = {
                                            f: n("fetchStart"),
                                            qs: n("requestStart"),
                                            rs: n("responseStart"),
                                            re: n("responseEnd"),
                                            os: n("domContentLoadedEventStart"),
                                            oe: n("domContentLoadedEventEnd"),
                                            oi: n("domInteractive"),
                                            oc: n("domComplete"),
                                            ls: n("loadEventStart"),
                                            le: n("loadEventEnd"),
                                            tus: n("unloadEventStart"),
                                            tue: n("unloadEventEnd")
                                        },
                                        d - l > 0 && (i.cs = l,
                                            i.ce = d),
                                        s - o > 0 && (i.ds = o,
                                            i.de = s),
                                        (u - c > 0 || u > 0) && (i.es = c,
                                            i.ee = u),
                                        0 == i.le && (i.ue = D.load_time - a);
                                        var f;
                                        if (r.msFirstPaint)
                                            f = r.msFirstPaint;
                                        else if (t.chrome && chrome.loadTimes) {
                                            var p = chrome.loadTimes();
                                            p && p.firstPaintTime && (f = 1e3 * p.firstPaintTime)
                                        } else
                                            D.firstPaint && (f = D.firstPaint);
                                        f && (i.fp = Math.round(f - a)),
                                        r.secureConnectionStart && (i.sl = n("secureConnectionStart"))
                                    } else
                                        i = {
                                            t: a,
                                            os: D.end_time - a,
                                            ls: D.load_time - a
                                        };
                                    i.je = j.errors.length,
                                    j.ct && (i.ct = j.ct - a),
                                    j.touch && (i.fi = j.touch - a);
                                    var h = D.agent || t._ty_rum && t._ty_rum.agent;
                                    return h && (i.id = e(h.id),
                                        i.a = h.a,
                                        i.q = h.q,
                                        i.tid = e(h.tid),
                                        i.n = e(h.n)),
                                        i.sh = t.screen && t.screen.height,
                                        i.sw = t.screen && t.screen.width,
                                        i
                                }
                                function r(e) {
                                    var n = t._ty_rum.c_ra;
                                    if (e)
                                        for (var i = n.length - 1; i >= 0; i--)
                                            if (e.indexOf(n[i].name) > -1)
                                                return n[i].xData;
                                    return null
                                }
                                function o(t) {
                                    function n(e) {
                                        return l[e] > 0 ? l[e] : 0
                                    }
                                    if (t < D.server.trace_threshold)
                                        return null;
                                    var i = X;
                                    if (i && i.getEntriesByType) {
                                        var o = {
                                            tr: !0,
                                            tt: e(x.title),
                                            charset: x.characterSet
                                        }
                                            , s = D.ra
                                            , c = i.getEntriesByType("resource");
                                        c && (s = s.concat(c),
                                        i.webkitClearResourceTimings && i.webkitClearResourceTimings(),
                                        i.clearResourceTimings && i.clearResourceTimings()),
                                            o.res = [];
                                        for (var u = 0; u < s.length; u++) {
                                            var l = s[u]
                                                , d = {
                                                o: n("startTime"),
                                                rt: l.initiatorType,
                                                n: l.name,
                                                f: n("fetchStart"),
                                                ds: n("domainLookupStart"),
                                                de: n("domainLookupEnd"),
                                                cs: n("connectStart"),
                                                ce: n("connectEnd"),
                                                sl: n("secureConnectionStart"),
                                                qs: n("requestStart"),
                                                rs: n("responseStart"),
                                                re: n("responseEnd")
                                            }
                                                , f = r(l.name);
                                            f && (d.aid = f.id,
                                                d.atd = f.trId,
                                                d.an = f.action,
                                                d.aq = f.time && f.time.qu,
                                                d.as = f.time && f.time.duration),
                                                o.res.push(d)
                                        }
                                        if (j.errors.length) {
                                            o.err = [];
                                            for (var u = 0, p = j.errors, h = p.length; h > u; u++)
                                                o.err.push({
                                                    o: Math.round(p[u][0] - a),
                                                    e: p[u][1] && p[u][1].replace(/([\"\\])/g, "\\$1").replace(/\n/g, "\\n"),
                                                    l: p[u][2],
                                                    c: p[u][3],
                                                    r: p[u][4],
                                                    ec: h,
                                                    s: p[u][5],
                                                    m: p[u][6],
                                                    ep: p[u][7]
                                                })
                                        }
                                        return o
                                    }
                                    return null
                                }
                                if (this.sended)
                                    return !1;
                                if (!this.ready())
                                    return !1;
                                var a = D.st
                                    , s = {};
                                try {
                                    var c = i();
                                    s = o(c.ls > 0 ? c.ls : D.load_time - a)
                                } catch (u) {}
                                s = s ? N.stringify(s) : "";
                                var d = N.mkurl(D.server.beacon, "pf", c);
                                B = n(),
                                0 != s.length && N.POST(d, s, {}, l("POST")) || N.GET(d);
                                var f = N.bind(p, this);
                                return f(),
                                    setInterval(f, 1e4),
                                    this.sended = !0,
                                    this.sa(1),
                                    !0
                            },
                            sa: function(e) {
                                (this.ready() || e) && (e || (e = !this._last_send || n() - this._last_send > D.snd_du() || D.aa.length >= D.cc()),
                                D.aa.length > 0 && e && (this._last_send = n(),
                                    N.POST(N.mkurl(D.server.beacon, "xhr"), N.stringify({
                                        xhr: D.aa
                                    }), {}, l("POST")),
                                    D.aa = []))
                            },
                            errors: []
                        }, z = null, J = {}, W = [["load", y], ["beforeunload", m], ["pagehide", m], ["unload", m]], G = 0; G < W.length; G++)
                            N.sh(t, W[G][0], W[G][1], !1);
                        t.addEventListener ? N.sh(t, "error", w, !1) : t.onerror = function(e, t, i, r, o) {
                            if (t || !M) {
                                var a = [n(), e, i, r, t == x.URL ? "#" : t]
                                    , s = _(e, i, r, o && o.moduleName);
                                a = a.concat([o && o.stack, o && o.moduleName, J[s] ? 0 : 1]),
                                    J[s] = !0,
                                    g(a),
                                    j.errors.push(a)
                            }
                        }
                        ;
                        for (var Z = [["scroll", v], ["keypress", v], ["click", v], ["DOMContentLoaded", d], ["readystatechange", h]], G = 0; G < Z.length; G++)
                            N.sh(x, Z[G][0], Z[G][1], !1);
                        if (N.wrap(!1, t, "requestAnimationFrame", function(e) {
                            return function() {
                                return D.firstPaint = n(),
                                    t.requestAnimationFrame = e,
                                    e.apply(this, arguments)
                            }
                        }),
                            k)
                            if (k.prototype)
                                N.wrap(!1, k.prototype, "open", S),
                                    N.wrap(!1, k.prototype, "send", b);
                            else {
                                N.ie = 7;
                                var Q = k;
                                t.XMLHttpRequest = function() {
                                    var e = new Q;
                                    return N.wrap(!1, e, "open", S),
                                        N.wrap(!1, e, "send", b),
                                        e
                                }
                            }
                        else
                            t.ActiveXObject && (N.ie = 6)
                    }
                }(window))
            }
        ).call(this, require("_process"))
    }
        , {
            _process: 36
        }],
    35: [function(e, t, n) {
        function i(e, t, n, i) {
            return JSON.stringify(e, r(t, i), n)
        }
        function r(e, t) {
            var n = []
                , i = [];
            return null == t && (t = function(e, t) {
                    return n[0] === t ? "[Circular ~]" : "[Circular ~." + i.slice(0, n.indexOf(t)).join(".") + "]"
                }
            ),
                function(r, o) {
                    if (n.length > 0) {
                        var a = n.indexOf(this);
                        ~a ? n.splice(a + 1) : n.push(this),
                            ~a ? i.splice(a, 1 / 0, r) : i.push(r),
                        ~n.indexOf(o) && (o = t.call(this, r, o))
                    } else
                        n.push(o);
                    return null == e ? o : e.call(this, r, o)
                }
        }
        n = t.exports = i,
            n.getSerialize = r
    }
        , {}],
    36: [function(e, t, n) {
        function i() {
            throw new Error("setTimeout has not been defined")
        }
        function r() {
            throw new Error("clearTimeout has not been defined")
        }
        function o(e) {
            if (d === setTimeout)
                return setTimeout(e, 0);
            if ((d === i || !d) && setTimeout)
                return d = setTimeout,
                    setTimeout(e, 0);
            try {
                return d(e, 0)
            } catch (t) {
                try {
                    return d.call(null, e, 0)
                } catch (t) {
                    return d.call(this, e, 0)
                }
            }
        }
        function a(e) {
            if (f === clearTimeout)
                return clearTimeout(e);
            if ((f === r || !f) && clearTimeout)
                return f = clearTimeout,
                    clearTimeout(e);
            try {
                return f(e)
            } catch (t) {
                try {
                    return f.call(null, e)
                } catch (t) {
                    return f.call(this, e)
                }
            }
        }
        function s() {
            m && h && (m = !1,
                h.length ? g = h.concat(g) : b = -1,
            g.length && c())
        }
        function c() {
            if (!m) {
                var e = o(s);
                m = !0;
                for (var t = g.length; t; ) {
                    for (h = g,
                             g = []; ++b < t; )
                        h && h[b].run();
                    b = -1,
                        t = g.length
                }
                h = null,
                    m = !1,
                    a(e)
            }
        }
        function u(e, t) {
            this.fun = e,
                this.array = t
        }
        function l() {}
        var d, f, p = t.exports = {};
        !function() {
            try {
                d = "function" == typeof setTimeout ? setTimeout : i
            } catch (e) {
                d = i
            }
            try {
                f = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (e) {
                f = r
            }
        }();
        var h, g = [], m = !1, b = -1;
        p.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
            g.push(new u(e,t)),
            1 !== g.length || m || o(c)
        }
            ,
            u.prototype.run = function() {
                this.fun.apply(null, this.array)
            }
            ,
            p.title = "browser",
            p.browser = !0,
            p.env = {},
            p.argv = [],
            p.version = "",
            p.versions = {},
            p.on = l,
            p.addListener = l,
            p.once = l,
            p.off = l,
            p.removeListener = l,
            p.removeAllListeners = l,
            p.emit = l,
            p.prependListener = l,
            p.prependOnceListener = l,
            p.listeners = function(e) {
                return []
            }
            ,
            p.binding = function(e) {
                throw new Error("process.binding is not supported")
            }
            ,
            p.cwd = function() {
                return "/"
            }
            ,
            p.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }
            ,
            p.umask = function() {
                return 0
            }
    }
        , {}],
    37: [function(e, t, n) {
        "use strict";
        function i(e) {
            this.name = "RavenConfigError",
                this.message = e
        }
        i.prototype = new Error,
            i.prototype.constructor = i,
            t.exports = i
    }
        , {}],
    38: [function(e, t, n) {
        "use strict";
        var i = function(e, t, n) {
            var i = e[t]
                , r = e;
            if (t in e) {
                var o = "warn" === t ? "warning" : t;
                e[t] = function() {
                    var e = [].slice.call(arguments)
                        , t = "" + e.join(" ")
                        , a = {
                        level: o,
                        logger: "console",
                        extra: {
                            arguments: e
                        }
                    };
                    n && n(t, a),
                    i && Function.prototype.apply.call(i, r, e)
                }
            }
        };
        t.exports = {
            wrapMethod: i
        }
    }
        , {}],
    39: [function(e, t, n) {
        "use strict";
        function i() {
            return +new Date
        }
        function r() {
            this._hasJSON = !("object" != typeof JSON || !JSON.stringify),
                this._hasDocument = !o(j),
                this._lastCapturedException = null,
                this._lastEventId = null,
                this._globalServer = null,
                this._globalKey = null,
                this._globalProject = null,
                this._globalContext = {},
                this._globalOptions = {
                    logger: "javascript",
                    ignoreErrors: [],
                    ignoreUrls: [],
                    whitelistUrls: [],
                    includePaths: [],
                    crossOrigin: "anonymous",
                    collectWindowErrors: !0,
                    maxMessageLength: 0,
                    stackTraceLimit: 50,
                    autoBreadcrumbs: !0
                },
                this._ignoreOnError = 0,
                this._isRavenInstalled = !1,
                this._originalErrorStackTraceLimit = Error.stackTraceLimit,
                this._originalConsole = I.console || {},
                this._originalConsoleMethods = {},
                this._plugins = [],
                this._startTime = i(),
                this._wrappedBuiltIns = [],
                this._breadcrumbs = [],
                this._lastCapturedEvent = null,
                this._keypressTimeout,
                this._location = I.location,
                this._lastHref = this._location && this._location.href;
            for (var e in this._originalConsole)
                this._originalConsoleMethods[e] = this._originalConsole[e]
        }
        function o(e) {
            return void 0 === e
        }
        function a(e) {
            return "function" == typeof e
        }
        function s(e) {
            return "[object String]" === O.toString.call(e)
        }
        function c(e) {
            return "object" == typeof e && null !== e
        }
        function u(e) {
            for (var t in e)
                return !1;
            return !0
        }
        function l(e) {
            var t = O.toString.call(e);
            return c(e) && "[object Error]" === t || "[object Exception]" === t || e instanceof Error
        }
        function d(e, t) {
            var n, i;
            if (o(e.length))
                for (n in e)
                    h(e, n) && t.call(null, n, e[n]);
            else if (i = e.length)
                for (n = 0; i > n; n++)
                    t.call(null, n, e[n])
        }
        function f(e, t) {
            return t ? (d(t, function(t, n) {
                e[t] = n
            }),
                e) : e
        }
        function p(e, t) {
            return !t || e.length <= t ? e : e.substr(0, t) + "…"
        }
        function h(e, t) {
            return O.hasOwnProperty.call(e, t)
        }
        function g(e) {
            for (var t, n = [], i = 0, r = e.length; r > i; i++)
                t = e[i],
                    s(t) ? n.push(t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")) : t && t.source && n.push(t.source);
            return new RegExp(n.join("|"),"i")
        }
        function m(e) {
            var t = [];
            return d(e, function(e, n) {
                t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n))
            }),
                t.join("&")
        }
        function b(e) {
            var t = e.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
            if (!t)
                return {};
            var n = t[6] || ""
                , i = t[8] || "";
            return {
                protocol: t[2],
                host: t[4],
                path: t[5],
                relative: t[5] + n + i
            }
        }
        function v() {
            var e = window.crypto || window.msCrypto;
            if (!o(e) && e.getRandomValues) {
                var t = new Uint16Array(8);
                e.getRandomValues(t),
                    t[3] = 4095 & t[3] | 16384,
                    t[4] = 16383 & t[4] | 32768;
                var n = function(e) {
                    for (var t = e.toString(16); t.length < 4; )
                        t = "0" + t;
                    return t
                };
                return n(t[0]) + n(t[1]) + n(t[2]) + n(t[3]) + n(t[4]) + n(t[5]) + n(t[6]) + n(t[7])
            }
            return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0
                    , n = "x" === e ? t : 3 & t | 8;
                return n.toString(16)
            })
        }
        function y(e) {
            for (var t, n = 5, i = 80, r = [], o = 0, a = 0, s = " > ", c = s.length; e && o++ < n && (t = _(e),
                !("html" === t || o > 1 && a + r.length * c + t.length >= i)); )
                r.push(t),
                    a += t.length,
                    e = e.parentNode;
            return r.reverse().join(s)
        }
        function _(e) {
            var t, n, i, r, o, a = [];
            if (!e || !e.tagName)
                return "";
            if (a.push(e.tagName.toLowerCase()),
            e.id && a.push("#" + e.id),
                t = e.className,
            t && s(t))
                for (n = t.split(" "),
                         o = 0; o < n.length; o++)
                    a.push("." + n[o]);
            var c = ["type", "name", "title", "alt"];
            for (o = 0; o < c.length; o++)
                i = c[o],
                    r = e.getAttribute(i),
                r && a.push("[" + i + '="' + r + '"]');
            return a.join("")
        }
        function w(e, t, n, i) {
            var r = e[t];
            e[t] = n(r),
            i && i.push([e, t, r])
        }
        var x = e("../vendor/TraceKit/tracekit")
            , k = e("./configError")
            , S = e("json-stringify-safe")
            , C = e("./console").wrapMethod
            , T = "source protocol user pass host port path".split(" ")
            , E = /^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/
            , I = "undefined" != typeof window ? window : void 0
            , j = I && I.document;
        r.prototype = {
            VERSION: "3.8.0",
            debug: !1,
            TraceKit: x,
            config: function(e, t) {
                var n = this;
                if (n._globalServer)
                    return this._logDebug("error", "Error: Raven has already been configured"),
                        n;
                if (!e)
                    return n;
                var i = n._globalOptions;
                t && d(t, function(e, t) {
                    "tags" === e || "extra" === e ? n._globalContext[e] = t : i[e] = t
                }),
                    n.setDSN(e),
                    i.ignoreErrors.push(/^Script error\.?$/),
                    i.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/),
                    i.ignoreErrors = g(i.ignoreErrors),
                    i.ignoreUrls = i.ignoreUrls.length ? g(i.ignoreUrls) : !1,
                    i.whitelistUrls = i.whitelistUrls.length ? g(i.whitelistUrls) : !1,
                    i.includePaths = g(i.includePaths),
                    i.maxBreadcrumbs = Math.max(0, Math.min(i.maxBreadcrumbs || 100, 100));
                var r = {
                    xhr: !0,
                    console: !0,
                    dom: !0,
                    location: !0
                }
                    , o = i.autoBreadcrumbs;
                return "[object Object]" === {}.toString.call(o) ? o = f(r, o) : o !== !1 && (o = r),
                    i.autoBreadcrumbs = o,
                    x.collectWindowErrors = !!i.collectWindowErrors,
                    n
            },
            install: function() {
                var e = this;
                return e.isSetup() && !e._isRavenInstalled && (x.report.subscribe(function() {
                    e._handleOnErrorStackInfo.apply(e, arguments)
                }),
                    e._instrumentTryCatch(),
                e._globalOptions.autoBreadcrumbs && e._instrumentBreadcrumbs(),
                    e._drainPlugins(),
                    e._isRavenInstalled = !0),
                    Error.stackTraceLimit = e._globalOptions.stackTraceLimit,
                    this
            },
            setDSN: function(e) {
                var t = this
                    , n = t._parseDSN(e)
                    , i = n.path.lastIndexOf("/")
                    , r = n.path.substr(1, i);
                t._dsn = e,
                    t._globalKey = n.user,
                    t._globalSecret = n.pass && n.pass.substr(1),
                    t._globalProject = n.path.substr(i + 1),
                    t._globalServer = t._getGlobalServer(n),
                    t._globalEndpoint = t._globalServer + "/" + r + "api/" + t._globalProject + "/store/"
            },
            context: function(e, t, n) {
                return a(e) && (n = t || [],
                    t = e,
                    e = void 0),
                    this.wrap(e, t).apply(this, n)
            },
            wrap: function(e, t, n) {
                function i() {
                    var i = []
                        , o = arguments.length
                        , s = !e || e && e.deep !== !1;
                    for (n && a(n) && n.apply(this, arguments); o--; )
                        i[o] = s ? r.wrap(e, arguments[o]) : arguments[o];
                    try {
                        return t.apply(this, i)
                    } catch (c) {
                        throw r._ignoreNextOnError(),
                            r.captureException(c, e),
                            c
                    }
                }
                var r = this;
                if (o(t) && !a(e))
                    return e;
                if (a(e) && (t = e,
                    e = void 0),
                    !a(t))
                    return t;
                try {
                    if (t.__raven__)
                        return t;
                    if (t.__raven_wrapper__)
                        return t.__raven_wrapper__
                } catch (s) {
                    return t
                }
                for (var c in t)
                    h(t, c) && (i[c] = t[c]);
                return i.prototype = t.prototype,
                    t.__raven_wrapper__ = i,
                    i.__raven__ = !0,
                    i.__inner__ = t,
                    i
            },
            uninstall: function() {
                return x.report.uninstall(),
                    this._restoreBuiltIns(),
                    Error.stackTraceLimit = this._originalErrorStackTraceLimit,
                    this._isRavenInstalled = !1,
                    this
            },
            captureException: function(e, t) {
                if (!l(e))
                    return this.captureMessage(e, f({
                        trimHeadFrames: 1,
                        stacktrace: !0
                    }, t));
                this._lastCapturedException = e;
                try {
                    var n = x.computeStackTrace(e);
                    this._handleStackInfo(n, t)
                } catch (i) {
                    if (e !== i)
                        throw i
                }
                return this
            },
            captureMessage: function(e, t) {
                if (!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(e)) {
                    var n = f({
                        message: e + ""
                    }, t);
                    if (t && t.stacktrace) {
                        var i;
                        try {
                            throw new Error(e)
                        } catch (r) {
                            i = r
                        }
                        i.name = null,
                            t = f({
                                fingerprint: e,
                                trimHeadFrames: (t.trimHeadFrames || 0) + 1
                            }, t);
                        var o = x.computeStackTrace(i)
                            , a = this._prepareFrames(o, t);
                        n.stacktrace = {
                            frames: a.reverse()
                        }
                    }
                    return this._send(n),
                        this
                }
            },
            captureBreadcrumb: function(e) {
                var t = f({
                    timestamp: i() / 1e3
                }, e);
                return this._breadcrumbs.push(t),
                this._breadcrumbs.length > this._globalOptions.maxBreadcrumbs && this._breadcrumbs.shift(),
                    this
            },
            addPlugin: function(e) {
                var t = [].slice.call(arguments, 1);
                return this._plugins.push([e, t]),
                this._isRavenInstalled && this._drainPlugins(),
                    this
            },
            setUserContext: function(e) {
                return this._globalContext.user = e,
                    this
            },
            setExtraContext: function(e) {
                return this._mergeContext("extra", e),
                    this
            },
            setTagsContext: function(e) {
                return this._mergeContext("tags", e),
                    this
            },
            clearContext: function() {
                return this._globalContext = {},
                    this
            },
            getContext: function() {
                return JSON.parse(S(this._globalContext))
            },
            setEnvironment: function(e) {
                return this._globalOptions.environment = e,
                    this
            },
            setRelease: function(e) {
                return this._globalOptions.release = e,
                    this
            },
            setDataCallback: function(e) {
                var t = this._globalOptions.dataCallback;
                return this._globalOptions.dataCallback = a(e) ? function(n) {
                        return e(n, t)
                    }
                    : e,
                    this
            },
            setShouldSendCallback: function(e) {
                var t = this._globalOptions.shouldSendCallback;
                return this._globalOptions.shouldSendCallback = a(e) ? function(n) {
                        return e(n, t)
                    }
                    : e,
                    this
            },
            setTransport: function(e) {
                return this._globalOptions.transport = e,
                    this
            },
            lastException: function() {
                return this._lastCapturedException
            },
            lastEventId: function() {
                return this._lastEventId
            },
            isSetup: function() {
                return this._hasJSON ? this._globalServer ? !0 : (this.ravenNotConfiguredError || (this.ravenNotConfiguredError = !0,
                    this._logDebug("error", "Error: Raven has not been configured.")),
                    !1) : !1
            },
            afterLoad: function() {
                var e = I.RavenConfig;
                e && this.config(e.dsn, e.config).install()
            },
            showReportDialog: function(e) {
                if (j) {
                    e = e || {};
                    var t = e.eventId || this.lastEventId();
                    if (!t)
                        throw new k("Missing eventId");
                    var n = e.dsn || this._dsn;
                    if (!n)
                        throw new k("Missing DSN");
                    var i = encodeURIComponent
                        , r = "";
                    r += "?eventId=" + i(t),
                        r += "&dsn=" + i(n);
                    var o = e.user || this._globalContext.user;
                    o && (o.name && (r += "&name=" + i(o.name)),
                    o.email && (r += "&email=" + i(o.email)));
                    var a = this._getGlobalServer(this._parseDSN(n))
                        , s = j.createElement("script");
                    s.async = !0,
                        s.src = a + "/api/embed/error-page/" + r,
                        (j.head || j.body).appendChild(s)
                }
            },
            _ignoreNextOnError: function() {
                var e = this;
                this._ignoreOnError += 1,
                    setTimeout(function() {
                        e._ignoreOnError -= 1
                    })
            },
            _triggerEvent: function(e, t) {
                var n, i;
                if (this._hasDocument) {
                    t = t || {},
                        e = "raven" + e.substr(0, 1).toUpperCase() + e.substr(1),
                        j.createEvent ? (n = j.createEvent("HTMLEvents"),
                            n.initEvent(e, !0, !0)) : (n = j.createEventObject(),
                            n.eventType = e);
                    for (i in t)
                        h(t, i) && (n[i] = t[i]);
                    if (j.createEvent)
                        j.dispatchEvent(n);
                    else
                        try {
                            j.fireEvent("on" + n.eventType.toLowerCase(), n)
                        } catch (r) {}
                }
            },
            _breadcrumbEventHandler: function(e) {
                var t = this;
                return function(n) {
                    if (t._keypressTimeout = null,
                    t._lastCapturedEvent !== n) {
                        t._lastCapturedEvent = n;
                        var i, r = n.target;
                        try {
                            i = y(r)
                        } catch (o) {
                            i = "<unknown>"
                        }
                        t.captureBreadcrumb({
                            category: "ui." + e,
                            message: i
                        })
                    }
                }
            },
            _keypressEventHandler: function() {
                var e = this
                    , t = 1e3;
                return function(n) {
                    var i = n.target
                        , r = i && i.tagName;
                    if (r && ("INPUT" === r || "TEXTAREA" === r || i.isContentEditable)) {
                        var o = e._keypressTimeout;
                        o || e._breadcrumbEventHandler("input")(n),
                            clearTimeout(o),
                            e._keypressTimeout = setTimeout(function() {
                                e._keypressTimeout = null
                            }, t)
                    }
                }
            },
            _captureUrlChange: function(e, t) {
                var n = b(this._location.href)
                    , i = b(t)
                    , r = b(e);
                this._lastHref = t,
                n.protocol === i.protocol && n.host === i.host && (t = i.relative),
                n.protocol === r.protocol && n.host === r.host && (e = r.relative),
                    this.captureBreadcrumb({
                        category: "navigation",
                        data: {
                            to: t,
                            from: e
                        }
                    })
            },
            _instrumentTryCatch: function() {
                function e(e) {
                    return function(t, i) {
                        for (var r = new Array(arguments.length), o = 0; o < r.length; ++o)
                            r[o] = arguments[o];
                        var s = r[0];
                        return a(s) && (r[0] = n.wrap(s)),
                            e.apply ? e.apply(this, r) : e(r[0], r[1])
                    }
                }
                function t(e) {
                    var t = I[e] && I[e].prototype;
                    t && t.hasOwnProperty && t.hasOwnProperty("addEventListener") && (w(t, "addEventListener", function(t) {
                        return function(i, o, a, s) {
                            try {
                                o && o.handleEvent && (o.handleEvent = n.wrap(o.handleEvent))
                            } catch (c) {}
                            var u;
                            return r && r.dom && ("EventTarget" === e || "Node" === e) && ("click" === i ? u = n._breadcrumbEventHandler(i) : "keypress" === i && (u = n._keypressEventHandler())),
                                t.call(this, i, n.wrap(o, void 0, u), a, s)
                        }
                    }, i),
                        w(t, "removeEventListener", function(e) {
                            return function(t, n, i, r) {
                                try {
                                    n = n && (n.__raven_wrapper__ ? n.__raven_wrapper__ : n)
                                } catch (o) {}
                                return e.call(this, t, n, i, r)
                            }
                        }, i))
                }
                var n = this
                    , i = n._wrappedBuiltIns
                    , r = this._globalOptions.autoBreadcrumbs;
                w(I, "setTimeout", e, i),
                    w(I, "setInterval", e, i),
                I.requestAnimationFrame && w(I, "requestAnimationFrame", function(e) {
                    return function(t) {
                        return e(n.wrap(t))
                    }
                }, i);
                for (var o = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], s = 0; s < o.length; s++)
                    t(o[s]);
                var c = I.jQuery || I.$;
                c && c.fn && c.fn.ready && w(c.fn, "ready", function(e) {
                    return function(t) {
                        return e.call(this, n.wrap(t))
                    }
                }, i)
            },
            _instrumentBreadcrumbs: function() {
                function e(e, n) {
                    e in n && a(n[e]) && w(n, e, function(e) {
                        return t.wrap(e)
                    })
                }
                var t = this
                    , n = this._globalOptions.autoBreadcrumbs
                    , i = t._wrappedBuiltIns;
                if (n.xhr && "XMLHttpRequest"in I) {
                    var r = XMLHttpRequest.prototype;
                    w(r, "open", function(e) {
                        return function(n, i) {
                            return s(i) && -1 === i.indexOf(t._globalKey) && (this.__raven_xhr = {
                                method: n,
                                url: i,
                                status_code: null
                            }),
                                e.apply(this, arguments)
                        }
                    }, i),
                        w(r, "send", function(n) {
                            return function(i) {
                                function r() {
                                    if (o.__raven_xhr && (1 === o.readyState || 4 === o.readyState)) {
                                        try {
                                            o.__raven_xhr.status_code = o.status
                                        } catch (e) {}
                                        t.captureBreadcrumb({
                                            type: "http",
                                            category: "xhr",
                                            data: o.__raven_xhr
                                        })
                                    }
                                }
                                for (var o = this, s = ["onload", "onerror", "onprogress"], c = 0; c < s.length; c++)
                                    e(s[c], o);
                                return "onreadystatechange"in o && a(o.onreadystatechange) ? w(o, "onreadystatechange", function(e) {
                                    return t.wrap(e, void 0, r)
                                }) : o.onreadystatechange = r,
                                    n.apply(this, arguments)
                            }
                        }, i)
                }
                n.xhr && "fetch"in I && w(I, "fetch", function(e) {
                    return function(n, i) {
                        for (var r = new Array(arguments.length), o = 0; o < r.length; ++o)
                            r[o] = arguments[o];
                        var a = "GET";
                        r[1] && r[1].method && (a = r[1].method);
                        var s = {
                            method: a,
                            url: r[0],
                            status_code: null
                        };
                        return t.captureBreadcrumb({
                            type: "http",
                            category: "fetch",
                            data: s
                        }),
                            e.apply(this, r).then(function(e) {
                                return s.status_code = e.status,
                                    e
                            })
                    }
                }, i),
                n.dom && this._hasDocument && (j.addEventListener ? (j.addEventListener("click", t._breadcrumbEventHandler("click"), !1),
                    j.addEventListener("keypress", t._keypressEventHandler(), !1)) : (j.attachEvent("onclick", t._breadcrumbEventHandler("click")),
                    j.attachEvent("onkeypress", t._keypressEventHandler())));
                var o = I.chrome
                    , c = o && o.app && o.app.runtime
                    , u = !c && I.history && history.pushState;
                if (n.location && u) {
                    var l = I.onpopstate;
                    I.onpopstate = function() {
                        var e = t._location.href;
                        return t._captureUrlChange(t._lastHref, e),
                            l ? l.apply(this, arguments) : void 0
                    }
                        ,
                        w(history, "pushState", function(e) {
                            return function() {
                                var n = arguments.length > 2 ? arguments[2] : void 0;
                                return n && t._captureUrlChange(t._lastHref, n + ""),
                                    e.apply(this, arguments)
                            }
                        }, i)
                }
                if (n.console && "console"in I && console.log) {
                    var f = function(e, n) {
                        t.captureBreadcrumb({
                            message: e,
                            level: n.level,
                            category: "console"
                        })
                    };
                    d(["debug", "info", "warn", "error", "log"], function(e, t) {
                        C(console, t, f)
                    })
                }
            },
            _restoreBuiltIns: function() {
                for (var e; this._wrappedBuiltIns.length; ) {
                    e = this._wrappedBuiltIns.shift();
                    var t = e[0]
                        , n = e[1]
                        , i = e[2];
                    t[n] = i
                }
            },
            _drainPlugins: function() {
                var e = this;
                d(this._plugins, function(t, n) {
                    var i = n[0]
                        , r = n[1];
                    i.apply(e, [e].concat(r))
                })
            },
            _parseDSN: function(e) {
                var t = E.exec(e)
                    , n = {}
                    , i = 7;
                try {
                    for (; i--; )
                        n[T[i]] = t[i] || ""
                } catch (r) {
                    throw new k("Invalid DSN: " + e)
                }
                if (n.pass && !this._globalOptions.allowSecretKey)
                    throw new k("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");
                return n
            },
            _getGlobalServer: function(e) {
                var t = "//" + e.host + (e.port ? ":" + e.port : "");
                return e.protocol && (t = e.protocol + ":" + t),
                    t
            },
            _handleOnErrorStackInfo: function() {
                this._ignoreOnError || this._handleStackInfo.apply(this, arguments)
            },
            _handleStackInfo: function(e, t) {
                var n = this._prepareFrames(e, t);
                this._triggerEvent("handle", {
                    stackInfo: e,
                    options: t
                }),
                    this._processException(e.name, e.message, e.url, e.lineno, n, t)
            },
            _prepareFrames: function(e, t) {
                var n = this
                    , i = [];
                if (e.stack && e.stack.length && (d(e.stack, function(e, t) {
                    var r = n._normalizeFrame(t);
                    r && i.push(r)
                }),
                t && t.trimHeadFrames))
                    for (var r = 0; r < t.trimHeadFrames && r < i.length; r++)
                        i[r].in_app = !1;
                return i = i.slice(0, this._globalOptions.stackTraceLimit)
            },
            _normalizeFrame: function(e) {
                if (e.url) {
                    var t = {
                        filename: e.url,
                        lineno: e.line,
                        colno: e.column,
                        "function": e.func || "?"
                    };
                    return t.in_app = !(this._globalOptions.includePaths.test && !this._globalOptions.includePaths.test(t.filename) || /(Raven|TraceKit)\./.test(t["function"]) || /raven\.(min\.)?js$/.test(t.filename)),
                        t
                }
            },
            _processException: function(e, t, n, i, r, o) {
                var a;
                if ((!this._globalOptions.ignoreErrors.test || !this._globalOptions.ignoreErrors.test(t)) && (t += "",
                    r && r.length ? (n = r[0].filename || n,
                        r.reverse(),
                        a = {
                            frames: r
                        }) : n && (a = {
                        frames: [{
                            filename: n,
                            lineno: i,
                            in_app: !0
                        }]
                    }),
                (!this._globalOptions.ignoreUrls.test || !this._globalOptions.ignoreUrls.test(n)) && (!this._globalOptions.whitelistUrls.test || this._globalOptions.whitelistUrls.test(n)))) {
                    var s = f({
                        exception: {
                            values: [{
                                type: e,
                                value: t,
                                stacktrace: a
                            }]
                        },
                        culprit: n
                    }, o);
                    this._send(s)
                }
            },
            _trimPacket: function(e) {
                var t = this._globalOptions.maxMessageLength;
                if (e.message && (e.message = p(e.message, t)),
                    e.exception) {
                    var n = e.exception.values[0];
                    n.value = p(n.value, t)
                }
                return e
            },
            _getHttpData: function() {
                if (this._hasDocument && j.location && j.location.href) {
                    var e = {
                        headers: {
                            "User-Agent": navigator.userAgent
                        }
                    };
                    return e.url = j.location.href,
                    j.referrer && (e.headers.Referer = j.referrer),
                        e
                }
            },
            _send: function(e) {
                var t = this._globalOptions
                    , n = {
                    project: this._globalProject,
                    logger: t.logger,
                    platform: "javascript"
                }
                    , r = this._getHttpData();
                r && (n.request = r),
                e.trimHeadFrames && delete e.trimHeadFrames,
                    e = f(n, e),
                    e.tags = f(f({}, this._globalContext.tags), e.tags),
                    e.extra = f(f({}, this._globalContext.extra), e.extra),
                    e.extra["session:duration"] = i() - this._startTime,
                this._breadcrumbs && this._breadcrumbs.length > 0 && (e.breadcrumbs = {
                    values: [].slice.call(this._breadcrumbs, 0)
                }),
                u(e.tags) && delete e.tags,
                this._globalContext.user && (e.user = this._globalContext.user),
                t.environment && (e.environment = t.environment),
                t.release && (e.release = t.release),
                t.serverName && (e.server_name = t.serverName),
                a(t.dataCallback) && (e = t.dataCallback(e) || e),
                e && !u(e) && (!a(t.shouldSendCallback) || t.shouldSendCallback(e)) && this._sendProcessedPayload(e)
            },
            _getUuid: function() {
                return v()
            },
            _sendProcessedPayload: function(e, t) {
                var n = this
                    , i = this._globalOptions;
                if (this._lastEventId = e.event_id || (e.event_id = this._getUuid()),
                    e = this._trimPacket(e),
                    this._logDebug("debug", "Raven about to send:", e),
                    this.isSetup()) {
                    var r = {
                        sentry_version: "7",
                        sentry_client: "raven-js/" + this.VERSION,
                        sentry_key: this._globalKey
                    };
                    this._globalSecret && (r.sentry_secret = this._globalSecret);
                    var o = e.exception && e.exception.values[0];
                    this.captureBreadcrumb({
                        category: "sentry",
                        message: o ? (o.type ? o.type + ": " : "") + o.value : e.message,
                        event_id: e.event_id,
                        level: e.level || "error"
                    });
                    var a = this._globalEndpoint;
                    (i.transport || this._makeRequest).call(this, {
                        url: a,
                        auth: r,
                        data: e,
                        options: i,
                        onSuccess: function() {
                            n._triggerEvent("success", {
                                data: e,
                                src: a
                            }),
                            t && t()
                        },
                        onError: function(i) {
                            n._triggerEvent("failure", {
                                data: e,
                                src: a
                            }),
                                i = i || new Error("Raven send failed (no additional details provided)"),
                            t && t(i)
                        }
                    })
                }
            },
            _makeRequest: function(e) {
                function t() {
                    200 === n.status ? e.onSuccess && e.onSuccess() : e.onError && e.onError(new Error("Sentry error code: " + n.status))
                }
                var n = new XMLHttpRequest
                    , i = "withCredentials"in n || "undefined" != typeof XDomainRequest;
                if (i) {
                    var r = e.url;
                    "withCredentials"in n ? n.onreadystatechange = function() {
                            4 === n.readyState && t()
                        }
                        : (n = new XDomainRequest,
                            r = r.replace(/^https?:/, ""),
                            n.onload = t),
                        n.open("POST", r + "?" + m(e.auth)),
                        n.send(S(e.data))
                }
            },
            _logDebug: function(e) {
                this._originalConsoleMethods[e] && this.debug && Function.prototype.apply.call(this._originalConsoleMethods[e], this._originalConsole, [].slice.call(arguments, 1))
            },
            _mergeContext: function(e, t) {
                o(t) ? delete this._globalContext[e] : this._globalContext[e] = f(this._globalContext[e] || {}, t)
            }
        };
        var O = Object.prototype;
        "undefined" != typeof __DEV__ && __DEV__ && (r.utils = {
            isUndefined: o,
            isFunction: a,
            isString: s,
            isObject: c,
            isEmptyObject: u,
            isError: l,
            each: d,
            objectMerge: f,
            truncate: p,
            hasKey: h,
            joinRegExp: g,
            urlencode: m,
            uuid4: v,
            htmlTreeAsString: y,
            htmlElementAsString: _,
            parseUrl: b,
            fill: w
        }),
            r.prototype.setUser = r.prototype.setUserContext,
            r.prototype.setReleaseContext = r.prototype.setRelease,
            t.exports = r
    }
        , {
            "../vendor/TraceKit/tracekit": 41,
            "./configError": 37,
            "./console": 38,
            "json-stringify-safe": 35
        }],
    40: [function(e, t, n) {
        "use strict";
        var i = e("./raven")
            , r = window.Raven
            , o = new i;
        o.noConflict = function() {
            return window.Raven = r,
                o
        }
            ,
            o.afterLoad(),
            t.exports = o
    }
        , {
            "./raven": 39
        }],
    41: [function(e, t, n) {
        "use strict";
        function i() {
            return "undefined" == typeof document ? "" : document.location.href
        }
        var r = {
            collectWindowErrors: !0,
            debug: !1
        }
            , o = [].slice
            , a = "?"
            , s = /^(?:Uncaught (?:exception: )?)?((?:Eval|Internal|Range|Reference|Syntax|Type|URI)Error): ?(.*)$/;
        r.report = function() {
            function e(e) {
                l(),
                    m.push(e)
            }
            function t(e) {
                for (var t = m.length - 1; t >= 0; --t)
                    m[t] === e && m.splice(t, 1)
            }
            function n() {
                d(),
                    m = []
            }
            function c(e, t) {
                var n = null;
                if (!t || r.collectWindowErrors) {
                    for (var i in m)
                        if (m.hasOwnProperty(i))
                            try {
                                m[i].apply(null, [e].concat(o.call(arguments, 2)))
                            } catch (a) {
                                n = a
                            }
                    if (n)
                        throw n
                }
            }
            function u(e, t, n, o, u) {
                var l = null;
                if (y)
                    r.computeStackTrace.augmentStackTraceWithInitialElement(y, t, n, e),
                        f();
                else if (u)
                    l = r.computeStackTrace(u),
                        c(l, !0);
                else {
                    var d, p = {
                        url: t,
                        line: n,
                        column: o
                    }, g = void 0, m = e;
                    if ("[object String]" === {}.toString.call(e)) {
                        var d = e.match(s);
                        d && (g = d[1],
                            m = d[2])
                    }
                    p.func = a,
                        l = {
                            name: g,
                            message: m,
                            url: i(),
                            stack: [p]
                        },
                        c(l, !0)
                }
                return h ? h.apply(this, arguments) : !1
            }
            function l() {
                g || (h = window.onerror,
                    window.onerror = u,
                    g = !0)
            }
            function d() {
                g && (window.onerror = h,
                    g = !1,
                    h = void 0)
            }
            function f() {
                var e = y
                    , t = b;
                b = null,
                    y = null,
                    v = null,
                    c.apply(null, [e, !1].concat(t))
            }
            function p(e, t) {
                var n = o.call(arguments, 1);
                if (y) {
                    if (v === e)
                        return;
                    f()
                }
                var i = r.computeStackTrace(e);
                if (y = i,
                    v = e,
                    b = n,
                    setTimeout(function() {
                        v === e && f()
                    }, i.incomplete ? 2e3 : 0),
                t !== !1)
                    throw e
            }
            var h, g, m = [], b = null, v = null, y = null;
            return p.subscribe = e,
                p.unsubscribe = t,
                p.uninstall = n,
                p
        }(),
            r.computeStackTrace = function() {
                function e(e) {
                    if ("undefined" != typeof e.stack && e.stack) {
                        for (var t, n, r = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|<anonymous>).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, o = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|\[native).*?)(?::(\d+))?(?::(\d+))?\s*$/i, s = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, c = e.stack.split("\n"), u = [], l = (/^(.*) is undefined$/.exec(e.message),
                            0), d = c.length; d > l; ++l) {
                            if (t = r.exec(c[l])) {
                                var f = t[2] && -1 !== t[2].indexOf("native");
                                n = {
                                    url: f ? null : t[2],
                                    func: t[1] || a,
                                    args: f ? [t[2]] : [],
                                    line: t[3] ? +t[3] : null,
                                    column: t[4] ? +t[4] : null
                                }
                            } else if (t = s.exec(c[l]))
                                n = {
                                    url: t[2],
                                    func: t[1] || a,
                                    args: [],
                                    line: +t[3],
                                    column: t[4] ? +t[4] : null
                                };
                            else {
                                if (!(t = o.exec(c[l])))
                                    continue;
                                n = {
                                    url: t[3],
                                    func: t[1] || a,
                                    args: t[2] ? t[2].split(",") : [],
                                    line: t[4] ? +t[4] : null,
                                    column: t[5] ? +t[5] : null
                                }
                            }
                            !n.func && n.line && (n.func = a),
                                u.push(n)
                        }
                        return u.length ? (u[0].column || "undefined" == typeof e.columnNumber || (u[0].column = e.columnNumber + 1),
                            {
                                name: e.name,
                                message: e.message,
                                url: i(),
                                stack: u
                            }) : null
                    }
                }
                function t(e, t, n, i) {
                    var r = {
                        url: t,
                        line: n
                    };
                    if (r.url && r.line) {
                        if (e.incomplete = !1,
                        r.func || (r.func = a),
                        e.stack.length > 0 && e.stack[0].url === r.url) {
                            if (e.stack[0].line === r.line)
                                return !1;
                            if (!e.stack[0].line && e.stack[0].func === r.func)
                                return e.stack[0].line = r.line,
                                    !1
                        }
                        return e.stack.unshift(r),
                            e.partial = !0,
                            !0
                    }
                    return e.incomplete = !0,
                        !1
                }
                function n(e, s) {
                    for (var c, u, l = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, d = [], f = {}, p = !1, h = n.caller; h && !p; h = h.caller)
                        if (h !== o && h !== r.report) {
                            if (u = {
                                url: null,
                                func: a,
                                line: null,
                                column: null
                            },
                                h.name ? u.func = h.name : (c = l.exec(h.toString())) && (u.func = c[1]),
                            "undefined" == typeof u.func)
                                try {
                                    u.func = c.input.substring(0, c.input.indexOf("{"))
                                } catch (g) {}
                            f["" + h] ? p = !0 : f["" + h] = !0,
                                d.push(u)
                        }
                    s && d.splice(0, s);
                    var m = {
                        name: e.name,
                        message: e.message,
                        url: i(),
                        stack: d
                    };
                    return t(m, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description),
                        m
                }
                function o(t, o) {
                    var a = null;
                    o = null == o ? 0 : +o;
                    try {
                        if (a = e(t))
                            return a
                    } catch (s) {
                        if (r.debug)
                            throw s
                    }
                    try {
                        if (a = n(t, o + 1))
                            return a
                    } catch (s) {
                        if (r.debug)
                            throw s
                    }
                    return {
                        name: t.name,
                        message: t.message,
                        url: i()
                    }
                }
                return o.augmentStackTraceWithInitialElement = t,
                    o.computeStackTraceFromStackProp = e,
                    o
            }(),
            t.exports = r
    }
        , {}],
    42: [function(e, t, n) {
        e("@beibei/tingyun"),
            e("@base/sentry/beibei_m");
        var i = e("@beibei/httpurl")
            , r = e("@beibei/popup")
            , o = e("unit/common/js/common")
            , a = e("@base/ajax")
            , s = {
            confirmLogin: function() {
                r.confirm("该手机号已注册，可直接登录", function() {
                    window.location.href = "./login.html?appid=" + i.uri.params.appid + "&keyCode=" + i.uri.params.token + "&cid=" + i.uri.params.cid
                }, function() {}, {
                    mask: !0,
                    actionConfig: [{
                        text: "暂不"
                    }, {
                        text: "登录"
                    }]
                })
            },
            message: function(e) {
                r.note(e + "", 2e3)
            }
        }
            , c = {
            init: function() {
                var e = ($(".user-name-input"),
                    $(".phone-number-input"))
                    , t = $(".pin-input")
                    , n = $(".password-input")
                    , i = $(".i-checkcode");
                that = this,
                    that.backfillPhone(),
                    $(".signup-btn").on("click", function(r) {
                        var o = e.val()
                            , a = t.val()
                            , s = n.val()
                            , c = i.val() || ""
                            , u = null;
                        u = that.checkMobileInput({
                            phoneNumber: o,
                            pinCode: a,
                            password: s
                        }),
                        u === !0 && that.sendLoginRequest("beibei.h5.register", {
                            tel: o,
                            tel_code: a,
                            passwd: s,
                            checkcode: c
                        }),
                            r.stopPropagation()
                    }),
                    $(".pin-btn").click(function(e) {
                        if (!$(this).hasClass("for-modify")) {
                            e.preventDefault();
                            var t = $(".phone-number-input")
                                , n = t.val()
                                , i = that.checkMobileInput({
                                phoneNumber: n
                            });
                            i === !0 && u.show()
                        }
                    }),
                    $(".checkcode-img, .checkcode-tip a").click(function(e) {
                        e.preventDefault();
                        var t = $(".checkcode-img")
                            , n = t.attr("src");
                        t.attr("src", n.split("?")[0] + "?t=" + (new Date).getTime())
                    }),
                    that.inputClearBtn($(".phone-number-input"), $(".J_phone-clear")),
                    that.inputClearBtn($(".pin-input"), $(".J_msg-pin-clear")),
                    that.inputClearBtn($(".password-input"), $(".J_sign-pwd-clear"))
            },
            backfillPhone: function() {
                var e = i.uri.params.mobile;
                /^1\d{10}$/.test(e) && $(".phone-number-input").val(e)
            },
            inputClearBtn: function(e, t) {
                t.on("click", function() {
                    e.val("").focus(),
                        $(this).hide()
                }),
                    e.on("focus", function() {
                        e.val().length > 0 ? t.show() : t.hide()
                    }),
                    e.on("input", function() {
                        e.val().length > 0 ? t.show() : t.hide()
                    }),
                    e.on("blur", function() {
                        setTimeout(function() {
                            t.hide()
                        }, 200)
                    })
            },
            checkMobileInput: function(e) {
                var t = !0
                    , n = e.phoneNumber
                    , i = e.pinCode
                    , o = e.password;
                return /^1\d{10}$/.test(n) ? void 0 !== i && 0 === i.length ? (t = {
                    error: "code",
                    errorText: "请输入验证码"
                },
                    r.note("请输入验证码", {
                        closeTime: 2e3,
                        mask: !1
                    })) : void 0 != o && (o.length < 6 || o.length > 16) && (t = {
                    error: "password",
                    errorText: "密码格式应为6-16位，同时包含数字和字母"
                },
                    r.note("密码格式应为6-16位，同时包含数字和字母", {
                        closeTime: 2e3,
                        mask: !1
                    })) : (t = {
                    error: "phoneNumber",
                    errorText: "手机格式错误，请重新输入"
                },
                    r.note("手机格式错误，请重新输入", {
                        closeTime: 2e3,
                        mask: !1
                    })),
                    t
            },
            sendLoginRequest: function(e, t) {
                var n = this
                    , o = function() {
                    var e = $(".check").not(".hidden");
                    if (0 !== e.size()) {
                        var t = e.find(".checkcode-img")
                            , n = t.attr("src");
                        t.attr("src", n.split("?")[0] + "?t=" + (new Date).getTime()),
                            e.find(".i-checkcode").val("")
                    }
                };
                a({
                    method: e,
                    data: t,
                    type: "POST",
                    noFailure: !0,
                    encrypt: !0,
                    success: function(e) {
                        if (e.success === !0) {
                            if (!i.uri.params.cid || !i.uri.params.appid) {
                                var t = i.uri;
                                return void ("undefined" != typeof t.params.redirect ? location.replace(t.params.redirect) : location.replace(window.location.origin))
                            }
                            n.getRedPacket()
                        } else
                            e.need_code === !0 && $(".login .check").show(),
                                o(),
                                "" === e.message ? r.note("请输入验证码", {
                                    closeTime: 2e3,
                                    mask: !1
                                }) : r.note(e.message, {
                                    closeTime: 2e3,
                                    mask: !1
                                })
                    }
                })
            },
            getRedPacket: function() {
                var e = $(".phone-number-input").val();
                o.callAPI({
                    url: "//d.beibei.com/wechat_v2/receive_card.html",
                    type: "POST",
                    data: {
                        appid: i.uri.params.appid,
                        cid: i.uri.params.cid,
                        tel: e
                    },
                    success: function(e) {
                        e.success ? window.location = "//m.beibei.com/coupon/coupon.html" : (r.note(e.message, {
                            closeTime: 800,
                            mask: !1
                        }),
                            setTimeout("window.location = '//m.beibei.com/index.html'", 1e3))
                    }
                })
            },
            getPinCode: function(e, t, n) {
                a({
                    url: e,
                    data: t,
                    type: "post",
                    noFailure: !0,
                    encrypt: !0,
                    success: function(e) {
                        return !e.success && e.message.indexOf("该手机号已注册") > -1 ? (s.confirmLogin(),
                            void u.hide()) : (r.note(e.message, {
                            closeTime: 2e3,
                            mask: !1
                        }),
                            void n(e))
                    }
                })
            },
            togglePinBtn: function(e) {
                var t = $(".pin-btn")
                    , n = this;
                if (e)
                    t.html("获取验证码"),
                        t.prop("disabled", !1);
                else {
                    t.prop("disabled", !0);
                    var i = 60
                        , r = function() {
                        return t.html(i--),
                            0 > i ? void n.togglePinBtn(!0) : void setTimeout(r, 1e3)
                    };
                    r()
                }
            }
        }
            , u = {
            cover: $(".vertify-form-cover"),
            form: $(".vertify-form"),
            img: $(".J_imgVertify"),
            input: $(".J_inputVertify"),
            show: function() {
                this.img.attr("src", this.img.attr("src")),
                    this.input.val(""),
                    this.cover.css("display", "block"),
                    this.form.css("display", "block")
            },
            hide: function() {
                this.cover.css("display", "none"),
                    this.form.css("display", "none")
            },
            init: function() {
                var e = this;
                $(".J_closeVertify").on("click", function() {
                    e.hide()
                }),
                    $(".J_changeVertify").on("click", function() {
                        e.img.attr("src", e.img.attr("src"))
                    })
            }
        };
        u.init(),
            $(".J_sendVertify").on("click", function() {
                var e = $(".J_inputVertify");
                if ("" === e.val())
                    return void r.note("请输入验证码", {
                        closeTime: 2e3,
                        mask: !1
                    });
                var t = c
                    , n = $(".pin-btn")
                    , i = $(".phone-number-input")
                    , a = i.val()
                    , s = n.attr("req-url");
                o.callAPI({
                    method: "beibei.user.token.get",
                    type: "post",
                    data: {
                        username: a,
                        scene: "h5_register"
                    },
                    dataType: "json",
                    success: function(n) {
                        if (n.success) {
                            t.getPinCode(s, {
                                checkcode: e.val(),
                                key: "register",
                                tel: a,
                                beibeitoken: n.token
                            }, function(e) {
                                if (-1 === e.message.indexOf("图片验证码输入错误"))
                                    u.hide(),
                                        t.togglePinBtn();
                                else {
                                    var n = $(".J_imgVertify");
                                    n.attr("src", n.attr("src"))
                                }
                            })
                        } else
                            r.note("获取token请求发送失败", {
                                closeTime: 2e3,
                                mask: !1
                            })
                    },
                    error: function() {
                        r.note("获取token请求发送失败", {
                            closeTime: 2e3,
                            mask: !1
                        })
                    }
                })
            }),
            c.init()
    }
        , {
            "@base/ajax": 1,
            "@base/sentry/beibei_m": 8,
            "@beibei/httpurl": 20,
            "@beibei/popup": 33,
            "@beibei/tingyun": 34,
            "unit/common/js/common": 43
        }],
    43: [function(e, t, n) {
        var i = e("@beibei/env")
            , r = e("@beibei/httpurl")
            , o = e("@beibei/cookie")
            , a = e("@beibei/popup")
            , s = e("unit/common/js/fingerprint")
            , c = {};
        e("@base/hide_menu");
        var u = {};
        $.extend(u, {
            callAPI: function(e) {
                var t = {
                    url: "",
                    baseUrl: "//api.beibei.com/mroute.html?method=",
                    type: "GET",
                    method: "",
                    cache: !0,
                    dataType: "json",
                    jsonpCallback: "",
                    data: {},
                    success: function() {
                        console.warn("你没有定义success回调函数")
                    },
                    error: function() {
                        console.error("网络故障，请稍后再试")
                    },
                    complete: function() {},
                    loginHandler: null
                };
                e = $.extend(t, e),
                e.url || (e.url = e.baseUrl + e.method),
                ("POST" === e.type || "post" === e.type) && (e.url ? -1 !== e.url.indexOf("//api.beibei.com") && (e.data.rams_device_id = s.get()) : e.data.rams_device_id = s.get());
                var n = e.url;
                if ("GET" === e.type && (n += Object.keys(e.data).map(function(t) {
                    return encodeURIComponent(t) + "=" + encodeURIComponent(e.data[t])
                }).join("&")),
                    !c[n]) {
                    c[n] = !0;
                    var i;
                    return $.ajax({
                        type: e.type,
                        url: e.url,
                        data: e.data,
                        dataType: e.dataType,
                        jsonpCallback: e.jsonpCallback,
                        cache: e.cache,
                        xhrFields: {
                            withCredentials: !0
                        },
                        beforeSend: function() {
                            e.noDialog || (i = a.loading({
                                mask: !1
                            }))
                        },
                        success: function(t) {
                            t && "2" === t.err_code ? e.loginHandler ? e.loginHandler() : u.login() : e.success(t)
                        },
                        error: function(t, n, i) {
                            e.error(t, n, i)
                        },
                        complete: function() {
                            c[n] = !1,
                            i && i.remove(),
                                e.complete()
                        }
                    })
                }
            },
            autoRun: function() {
                var e = this
                    , t = r.uri.pathname;
                e.isInXiaomiApp() && t.indexOf("login.html") < 0 && t.indexOf("signup.html") < 0 && e.autoLogin(),
                    e.customizeStyles(),
                    e.autoShow(),
                    e.initFooterLine()
            },
            autoShow: function() {
                var e = i.app.name || "";
                "Mizhe" == e || "Beibei" == e || o("xiaomiInfo") ? ($(".J_wrapper").css("padding-top", "0"),
                    $(".toolbar").addClass("hidden")) : ($(".J_navbar").removeClass("hidden"),
                    $(".J_footer").removeClass("hidden")),
                o("xiaomiInfo") && ($(".J_footer").removeClass("hidden"),
                    $(".toolbar").removeClass("hidden"),
                $(".J_footer").length > 0 && $(".J_footer").find(".info").html('<a href="javascript:void(0)">贝贝-买母婴上贝贝</a>'))
            },
            isLogin: function() {
                return o("st_au") && o("_last_login_gmt_") ? 1 : 0
            },
            autoLogin: function(e) {
                var t = this;
                if (e = e ? e : encodeURIComponent(window.location.href),
                i && i.app && !i.app.isMizhe && !i.app.isMizheHD && !t.isLogin()) {
                    var n = "/login/login.html";
                    e && e.length > 0 && (n += "?redirect=" + e),
                        window.location = n
                }
            },
            login: function(e) {
                if (i.app.isBeibei)
                    window.commonLoginHandler = function(e) {
                        if (e) {
                            var t = JSON.parse(e)
                                , n = "//api.beibei.com/login/ajax_trust.html?sign=" + t.sign + "&ts=" + t.ts + "&uid=" + t.uid + "&session=" + t.session + "&udid=" + t.udid;
                            $.ajax({
                                type: "GET",
                                url: n,
                                dataType: "jsonp",
                                success: function(e) {
                                    e.success ? location.reload() : a.note(e.message || e.err_msg)
                                },
                                error: function() {
                                    a.alert("网络出错，请重新尝试！")
                                }
                            })
                        }
                    }
                        ,
                        location.href = "beibei://action?target=login&callback=commonLoginHandler";
                else {
                    e = e ? e : encodeURIComponent(window.location.href);
                    var t = "//m.beibei.com/login/login.html";
                    e && e.length > 0 && (t += "?redirect=" + e),
                        window.location = t
                }
            },
            signup: function(e) {
                e = e ? e : encodeURIComponent(window.location.href);
                var t = "//m.beibei.com/login/signup.html";
                e && e.length > 0 && (t += "?redirect=" + e),
                    window.location = t
            },
            jumpToPc: function() {
                var e, t, n = location.href;
                t = (e = n.match(/beibei\.com\/detail\/detail\.html\?iid=(\d+)/)) ? "http://www.beibei.com/detail/" + e[1] + ".html" : (e = n.match(/beibei\.com\/list\/list\.html\?eventId=(\d+)/)) ? "http://www.beibei.com/martshow/" + e[1] + ".html" : (e = n.match(/beibei.com\/oversea\/oversea-list\.html\?bid=(\d+)/)) ? "http://global.beibei.com/show/" + e[1] + ".html" : (e = n.match(/beibei.com\/oversea\/oversea-detail\.html\?iid=(\d+)/)) ? "http://global.beibei.com/detail/" + e[1] + ".html" : (e = n.match(/beibei.com\/tuan\/tuan-index\.html/)) ? "http://you.beibei.com" : (e = n.match(/beibei.com\/tuan\/tuan-detail\.html\?iid=(\d+)/)) ? "http://you.beibei.com/detail/" + e[1] + ".html" : (e = n.match(/beibei.com\/tuan\/tuan-tomorrow\.html/)) ? "http://you.beibei.com" : "http://www.beibei.com",
                t && window.location.replace(t + "?from=wap")
            },
            tryReboot: function(e, t) {
                var n = this;
                if (o("_remember_me_")) {
                    var i = a.loading({
                        mask: !1
                    });
                    $.ajax({
                        url: "//d.beibei.com/member/boot",
                        method: "GET",
                        dataType: "jsonp",
                        success: function() {
                            return o("st_au") ? void e() : void n.login(t)
                        },
                        error: function() {
                            n.login(t)
                        },
                        complete: function() {
                            i.remove()
                        }
                    })
                } else
                    n.login(t)
            },
            getSourcesId: function(e, t) {
                var n = this;
                $.ajax({
                    type: "GET",
                    url: "//api.beibei.com/utm/cid.html",
                    data: e,
                    dataType: "jsonp",
                    cache: !0,
                    success: function(i) {
                        var r = function(e) {
                            return "object" == typeof e
                        };
                        if (i.success === !0) {
                            var a = n.getUrlParam("utm_source");
                            !a && r(e) && (a = e.utm_source || ""),
                                o("cid", i.message, {
                                    expires: 7,
                                    domain: ".beibei.com"
                                }),
                                o("utm_source", a, {
                                    expires: 7,
                                    domain: ".beibei.com"
                                })
                        } else
                            t && "function" == typeof t.error && t.error()
                    },
                    error: function() {}
                })
            },
            setSourcesInformation: function() {
                var e = this
                    , t = window.location.href
                    , n = new RegExp(/(utm_source|utm_campaign|utm_term)/g)
                    , i = n.test(t)
                    , r = {};
                i && (r.utm_source = e.getUrlParam("utm_source") || "",
                    r.utm_campaign = e.getUrlParam("utm_campaign") || "",
                    r.utm_term = e.getUrlParam("utm_term") || "",
                    r.refer = document.referrer,
                    e.getSourcesId(r)),
                i || "" === document.referrer || /\/\/([^\.])*\.{0,1}beibei\.com/g.test(document.referrer) || (r.refer = document.referrer,
                o("force_cid") || e.getSourcesId(r))
            },
            getUrlParam: function(e) {
                for (var t = window.location.search.split("&"), n = 0; n < t.length; n++)
                    if (-1 != t[n].indexOf(e))
                        var i = t[n].split(e + "=")
                            , r = i[i.length - 1];
                return r
            },
            isNoApp: function() {
                return o("xiaomiInfo") || o("utm_source") && "putao" === o("utm_source") || i.app.isMizhe || i.app.isMizheHD
            },
            isInXiaomiApp: function() {
                return o("xiaomiInfo") || r.uri && r.uri.params.utm_source && "xiaomi_life" === r.uri.params.utm_source
            },
            customizeStyles: function() {
                this.isInXiaomiApp() && $("body").addClass("xiaomi-life"),
                (i.app.isMizhe || i.app.isMizheHD) && $("body").addClass("mizhe-app"),
                (i.app.isBeibei || i.app.isBeibeiHD) && $("body").addClass("beibei-app"),
                (o("utm_source") && "putao" === o("utm_source") || r.uri && r.uri.params.utm_source && "putao" === r.uri.params.utm_source) && $("body").addClass("putao-app")
            },
            initFooterLine: function() {
                var e = this;
                if (this.isInXiaomiApp() && r.uri && r.uri.params.utm_source && "xiaomi_life" === r.uri.params.utm_source)
                    return void $(".info-line").hide();
                if (u.isLogin()) {
                    var t = '<a href="//m.beibei.com/i/i.html">我的贝贝</a><a href="//m.beibei.com/i/i-perinfo.html" class="logout">退出</a><a href="//t.beibei.com/h5dl">客户端</a><a href="javascript:void(0);" class="J_topc">电脑版</a>';
                    $(".info-line").empty().append(t)
                }
                $(".J_login").on("click", function() {
                    e.login()
                }),
                    $(".J_signup").on("click", function() {
                        e.signup()
                    }),
                    $(".J_topc").on("click", function() {
                        e.jumpToPc()
                    })
            }
        }),
            u.autoRun(),
            t.exports = u
    }
        , {
            "@base/hide_menu": 5,
            "@beibei/cookie": 10,
            "@beibei/env": 17,
            "@beibei/httpurl": 20,
            "@beibei/popup": 33,
            "unit/common/js/fingerprint": 45
        }],
    44: [function(e, t, n) {
        !function(e, n, i) {
            "undefined" != typeof t && t.exports ? t.exports = i() : "function" == typeof define && define.amd ? define(i) : n[e] = i()
        }("Fingerprint", this, function() {
            var e = function(e) {
                var t, n;
                t = Array.prototype.forEach,
                    n = Array.prototype.map,
                    this.each = function(e, n, i) {
                        if (null !== e)
                            if (t && e.forEach === t)
                                e.forEach(n, i);
                            else if (e.length === +e.length) {
                                for (var r = 0, o = e.length; o > r; r++)
                                    if (n.call(i, e[r], r, e) === {})
                                        return
                            } else
                                for (var a in e)
                                    if (e.hasOwnProperty(a) && n.call(i, e[a], a, e) === {})
                                        return
                    }
                    ,
                    this.map = function(e, t, i) {
                        var r = [];
                        return null == e ? r : n && e.map === n ? e.map(t, i) : (this.each(e, function(e, n, o) {
                            r[r.length] = t.call(i, e, n, o)
                        }),
                            r)
                    }
                    ,
                    "object" == typeof e ? (this.hasher = e.hasher,
                        this.screen_resolution = e.screen_resolution,
                        this.screen_orientation = e.screen_orientation,
                        this.canvas = e.canvas,
                        this.ie_activex = e.ie_activex) : "function" == typeof e && (this.hasher = e)
            };
            return e.prototype = {
                get: function() {
                    var e = [];
                    if (e.push(navigator.userAgent),
                        e.push(navigator.language),
                        e.push(screen.colorDepth),
                        this.screen_resolution) {
                        var t = this.getScreenResolution();
                        "undefined" != typeof t && e.push(t.join("x"))
                    }
                    return e.push((new Date).getTimezoneOffset()),
                        e.push(this.hasSessionStorage()),
                        e.push(this.hasLocalStorage()),
                        e.push(!!window.indexedDB),
                        document.body ? e.push(typeof document.body.addBehavior) : e.push("undefined"),
                        e.push(typeof window.openDatabase),
                        e.push(navigator.cpuClass),
                        e.push(navigator.platform),
                        e.push(navigator.doNotTrack),
                        e.push(this.getPluginsString()),
                    this.canvas && this.isCanvasSupported() && e.push(this.getCanvasFingerprint()),
                        this.hasher ? this.hasher(e.join("###"), 31) : this.murmurhash3_32_gc(e.join("###"), 31)
                },
                murmurhash3_32_gc: function(e, t) {
                    var n, i, r, o, a, s, c, u;
                    for (n = 3 & e.length,
                             i = e.length - n,
                             r = t,
                             a = 3432918353,
                             s = 461845907,
                             u = 0; i > u; )
                        c = 255 & e.charCodeAt(u) | (255 & e.charCodeAt(++u)) << 8 | (255 & e.charCodeAt(++u)) << 16 | (255 & e.charCodeAt(++u)) << 24,
                            ++u,
                            c = (65535 & c) * a + (((c >>> 16) * a & 65535) << 16) & 4294967295,
                            c = c << 15 | c >>> 17,
                            c = (65535 & c) * s + (((c >>> 16) * s & 65535) << 16) & 4294967295,
                            r ^= c,
                            r = r << 13 | r >>> 19,
                            o = 5 * (65535 & r) + ((5 * (r >>> 16) & 65535) << 16) & 4294967295,
                            r = (65535 & o) + 27492 + (((o >>> 16) + 58964 & 65535) << 16);
                    switch (c = 0,
                        n) {
                        case 3:
                            c ^= (255 & e.charCodeAt(u + 2)) << 16;
                        case 2:
                            c ^= (255 & e.charCodeAt(u + 1)) << 8;
                        case 1:
                            c ^= 255 & e.charCodeAt(u),
                                c = (65535 & c) * a + (((c >>> 16) * a & 65535) << 16) & 4294967295,
                                c = c << 15 | c >>> 17,
                                c = (65535 & c) * s + (((c >>> 16) * s & 65535) << 16) & 4294967295,
                                r ^= c
                    }
                    return r ^= e.length,
                        r ^= r >>> 16,
                        r = 2246822507 * (65535 & r) + ((2246822507 * (r >>> 16) & 65535) << 16) & 4294967295,
                        r ^= r >>> 13,
                        r = 3266489909 * (65535 & r) + ((3266489909 * (r >>> 16) & 65535) << 16) & 4294967295,
                        r ^= r >>> 16,
                    r >>> 0
                },
                hasLocalStorage: function() {
                    try {
                        return !!window.localStorage
                    } catch (e) {
                        return !0
                    }
                },
                hasSessionStorage: function() {
                    try {
                        return !!window.sessionStorage
                    } catch (e) {
                        return !0
                    }
                },
                isCanvasSupported: function() {
                    var e = document.createElement("canvas");
                    return !(!e.getContext || !e.getContext("2d"))
                },
                isIE: function() {
                    return "Microsoft Internet Explorer" === navigator.appName ? !0 : "Netscape" === navigator.appName && /Trident/.test(navigator.userAgent) ? !0 : !1
                },
                getPluginsString: function() {
                    return this.isIE() && this.ie_activex ? this.getIEPluginsString() : this.getRegularPluginsString()
                },
                getRegularPluginsString: function() {
                    return this.map(navigator.plugins, function(e) {
                        var t = this.map(e, function(e) {
                            return [e.type, e.suffixes].join("~")
                        }).join(",");
                        return [e.name, e.description, t].join("::")
                    }, this).join(";")
                },
                getIEPluginsString: function() {
                    if (window.ActiveXObject) {
                        var e = ["ShockwaveFlash.ShockwaveFlash", "AcroPDF.PDF", "PDF.PdfCtrl", "QuickTime.QuickTime", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "RealPlayer", "SWCtl.SWCtl", "WMPlayer.OCX", "AgControl.AgControl", "Skype.Detection"];
                        return this.map(e, function(e) {
                            try {
                                return new ActiveXObject(e),
                                    e
                            } catch (t) {
                                return null
                            }
                        }).join(";")
                    }
                    return ""
                },
                getScreenResolution: function() {
                    var e;
                    return e = this.screen_orientation ? screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height] : [screen.height, screen.width]
                },
                getCanvasFingerprint: function() {
                    var e = document.createElement("canvas")
                        , t = e.getContext("2d")
                        , n = "http://valve.github.io";
                    return t.textBaseline = "top",
                        t.font = "14px 'Arial'",
                        t.textBaseline = "alphabetic",
                        t.fillStyle = "#f60",
                        t.fillRect(125, 1, 62, 20),
                        t.fillStyle = "#069",
                        t.fillText(n, 2, 15),
                        t.fillStyle = "rgba(102, 204, 0, 0.7)",
                        t.fillText(n, 4, 17),
                        e.toDataURL()
                }
            },
                e
        })
    }
        , {}],
    45: [function(e, t, n) {
        var i = e("./fingerprint.js")
            , r = {
            canvas: !0,
            ie_activex: !0,
            screen_resolution: !0,
            screen_orientation: !0
        };
        t.exports = new i(r)
    }
        , {
            "./fingerprint.js": 44
        }]
}, {}, [42]);