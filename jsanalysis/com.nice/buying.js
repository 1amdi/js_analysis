const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM();
const window = dom.window;
const document = window.document;



var $ = require('jquery')(document.defaultView);
const base = "";
const jQuery = require('jquery');

var localHandlerbars = {
    getTemplate: function(b) {
        var a = Handlebars.compile(b);
        Handlebars.registerHelper(handlerbarHelpers);
        return a
    },
    getTemplateHtml: function(b, c) {
        var a = localHandlerbars.getTemplate(b);
        return a(c)
    },
    renderToSelector: function(d, c, b) {
        var a = b(c);
        d.html(a)
    }
};
var handlerbarHelpers = {
    imageUrlHelper: function(a, b) {
        var c = defaultImg;
        if (null == b || "" == b || undefined == b || $.type(b) != "string") {
            c = imgbase + a
        } else {
            c = formatImage(a, b)
        }
        return c
    },
    hrefHelper: function(b, a) {
        if (b == null || b.length == 0 || b == "") {
            return base + "/item/" + a
        } else {
            return base + "/item/" + b.replace(" ", "-").toLowerCase() + "/" + a
        }
    },
    fmtMoney: function(a) {
        return toDecimal2(a)
    },
    priceCompareHelper: function(c, a, b) {
        if (c != a) {
            return b.fn(this)
        }
        return b.inverse(this)
    },
    formatDateHelper: function(a, b) {
        return moment(a).format(b)
    },
    equals: function(c, b, a) {
        if (c == b) {
            return a.fn(this)
        }
        return a.inverse(this)
    },
    notEquals: function(c, b, a) {
        if (c == b) {
            return a.inverse(this)
        }
        return a.fn(this)
    },
    comparing: function(c, b, a) {
        if (c > b) {
            return a.fn(this)
        }
        return a.inverse(this)
    },
    priceHelper: function(c, b) {
        var a = "";
        if (null == c || "" == c || undefined == c) {
            c = 0
        }
        if (null == b || "" == b || undefined == b) {
            b = 0
        }
        if (c == b) {
            a = "¥" + toDecimal2(c)
        } else {
            a = "¥" + toDecimal2(c) + "<del>¥" + toDecimal2(b) + "</del>"
        }
        return a
    },
    dailogPriceHelper: function(c, b) {
        var a = "";
        if (null == c || "" == c || undefined == c) {
            c = 0
        }
        if (null == b || "" == b || undefined == b) {
            b = 0
        }
        if (c == b) {
            a = "HK$" + toDecimal2(c)
        } else {
            a = "HK$" + toDecimal2(c) + "<del> HK$" + toDecimal2(b) + "</del>"
        }
        return a
    },
    fnSubString: function(c, b, a) {
        if (c.length > a) {
            return c.substring(b, a)
        } else {
            return c
        }
    },
    isNotNullOrEmpty: function(b, a) {
        if (b == null || b.length == 0 || b == "") {
            return a.inverse(this)
        }
        return a.fn(this)
    },
    toUpperCase: function(a) {
        if (a == null || a.length == 0 || a == "") {
            return ""
        }
        return a.toUpperCase()
    },
    indexBetween: function(c, d, a, b) {
        if (c >= d && c <= a) {
            return b.fn(this)
        }
        return b.inverse(this)
    },
    getI18NMessage: function(a) {
        if (a == null || a.length == 0 || a == "") {
            console.log("I18N code is null");
            return ""
        }
        var b = loxia.getLocaleMsg(a);
        if (a == null || a.length == 0 || a == "") {
            return ""
        }
        return b
    },
    getI18NMessageFormat: function(b, a) {
        if (b == null || b.length == 0 || b == "") {
            console.log("I18N code is null");
            return ""
        }
        var c = loxia.getLocaleMsg(b, a);
        if (b == null || b.length == 0 || b == "") {
            return ""
        }
        return c
    },
    adpriceHelper: function(c, b) {
        var a = "";
        if (null == c || "" == c || undefined == c) {
            c = 0
        }
        if (null == b || "" == b || undefined == b) {
            b = 0
        }
        if (c == b) {
            a = "￥" + plpPrice(c) / 1
        } else {
            a = "<span class='goods-price'> ￥ " + plpPrice(c) / 1 + "<del class='original-price'>￥" + plpPrice(b) / 1 + "</del></span>"
        }
        return a
    },
    iflocal: function(v1, operator, v2, options) {
        switch (operator) {
        case "==":
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case "!=":
            return (v1 != v2) ? options.fn(this) : options.inverse(this);
        case "===":
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case "!==":
            return (v1 !== v2) ? options.fn(this) : options.inverse(this);
        case "&&":
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case "||":
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        case "<":
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case "<=":
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case ">":
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case ">=":
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        default:
            return eval("" + v1 + operator + v2) ? options.fn(this) : options.inverse(this)
        }
    },
    subStrBefore: function(a, b) {
        if (a == null) {
            return null
        }
        return a.split(b)[0]
    },
    dateToCountdown: function(b, d, k) {
        var a = d - b;
        if (a < 0) {
            return true
        }
        var j = parseInt(a / 1000);
        var h = Math.floor(j / (60 * 60 * 24));
        var g = Math.floor((j - h * 24 * 60 * 60) / 3600);
        var f = Math.floor((j - h * 24 * 60 * 60 - g * 3600) / 60);
        var c = Math.floor(j - h * 24 * 60 * 60 - g * 3600 - f * 60);
        var e = "<div class='time_main float-clearfix'><div class='time_show'><p class='time_countdown'>" + h + loxia.getLocaleMsg("pdp_time_day") + "</p></div><div class='time_show'><p class='time_countdown'>" + g + loxia.getLocaleMsg("pdp_time_hour") + "</p></div><div class='time_show'><p class='time_countdown'>" + f + loxia.getLocaleMsg("pdp_time_minute") + "</p></div><div class='time_show'><p class='time_countdown'>" + c + loxia.getLocaleMsg("pdp_time_second") + "</p></div></div>";
        return e
    },
    htmlConvertHelper: function(b) {
        var a = b;
        return a
    },
    formateHlu: function(a) {
        return frontendBase + a
    },
    formateHluForHype: function(a) {
        if (a == "" || a == undefined || a == null) {
            return ""
        }
        if (a.indexOf(hypeDomain) != -1) {
            return a
        } else {
            return hypeDomain + a
        }
    },
    itemRankAvg: function(a) {
        var a = a * 100 / 5;
        return a
    }
};
function Result(a, b) {
    this.result = a;
    this.msg = b
}
function loadJsonjsonDataAndRenderTemplateHtmlToSelector(a) {
    console.log("renderConfig is:%o", a);
    loxia.asyncXhrPost(a.url, a.params, {
        success: function(d) {
            if (null != d && "" != d && !$.isEmptyObject(d)) {
                console.log("return jsonData:%o", d);
                var b = true;
                if ($.isFunction(a.beforeRenderjsonDataEvent)) {
                    b = a.beforeRenderjsonDataEvent(d)
                }
                if (!b) {
                    return
                }
                var c = getHandlebarsTemplate($(a.renderTemplateSelector).html());
                renderTemplateHtmlToSelector(a.renderToSelector, a.parseRenderjsonData(d), c);
                if ($.isFunction(a.afterRenderjsonDataEvent)) {
                    a.afterRenderjsonDataEvent(d)
                }
            } else {
                console.warn("[%o] jsonData is null or empty,nothing to do!!!", a.renderToSelector)
            }
        }
    }, {
        error: function(b) {
            console.log(b)
        }
    })
}
function formatImage(b, a) {
    if (ossSwitch && !isOldImgUrlWithSize(b)) {
        return ossFormatImage(b, a)
    } else {
        return commonFormatImage(b, a)
    }
}
function commonFormatImage(e, c) {
    if (null == e || undefined == e || "" == e) {
        return defaultImg
    }
    var a = e.lastIndexOf(".");
    var b = e.lastIndexOf("_");
    var d = "";
    if (b != -1) {
        d = e.substring(0, b)
    } else {
        d = e.substring(0, a)
    }
    if ("source" != c) {
        d = d + "_";
        d = d + c
    }
    d = imgbase + d + e.substring(a);
    return d
}
function ossFormatImage(d, b) {
    if (null == d || undefined == d || "" == d) {
        return defaultImg
    }
    var c = "";
    var a = b.split("X");
    if (isWidthHighParamsInUrl(d)) {
        if ("source" != b) {
            imgUrlArray = d.split(",");
            for (i = 0; i < imgUrlArray.length; i++) {
                if (isWidthParamsInUrl(imgUrlArray[i])) {
                    c += ("w_" + a[0] + ",")
                } else {
                    if (isHighParamsInUrl(imgUrlArray[i])) {
                        c += ("h_" + a[1] + ",")
                    } else {
                        c += (imgUrlArray[i] + ",")
                    }
                }
            }
            c = c.substring(0, c.length - 1)
        }
    } else {
        if ("source" != b) {
            c = forceChangeImageSize(d, b)
        }
    }
    c = imgbase + d.split("?")[0];
    return c
}
function toDecimal2(a) {
    var d = parseFloat(a);
    if (isNaN(d)) {
        return false
    }
    var d = Math.round(a * 100) / 100;
    var c = d.toString();
    var b = c.indexOf(".");
    if (b < 0) {
        b = c.length;
        c += "."
    }
    while (c.length <= b + 2) {
        c += "0"
    }
    return c
}
function plpPrice(a) {
    var b = null;
    if (a < 1) {
        b = 0
    }
    if (a > 1) {
        b = a
    }
    return b
}
String.format = function(d, a) {
    if (a.length == 0) {
        return null
    }
    for (var b = 1; b < a.length; b++) {
        var c = new RegExp("\{" + (b - 1) + "\}","gm");
        d = d.replace(c, arguments[b])
    }
    return d
}
;
/**
 *
 * 图片放大
 * 详细用法请参考：http://v3.spice.lh/javascript/smartZoom
 *
 * @ version 1.0
 *
 */
function transitionEnd() {
    var a = document.createElement("bootstrap")
      , b = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
    };
    for (var c in b)
        if (void 0 !== a.style[c])
            return {
                end: b[c]
            };
    return !1
}
$.fn.emulateTransitionEnd = function(a) {
    var b = !1
      , c = this;
    $(this).one($.support.transition.end, function() {
        b = !0
    });
    var d = function() {
        b || $(c).trigger($.support.transition.end)
    };
    return setTimeout(d, a),
    this
}
,
$(function() {
    $.support.transition = transitionEnd()
});
var CryptoJS = CryptoJS || function(s, q) {
    var t = {}
      , w = t.lib = {}
      , c = w.Base = function() {
        function b() {}
        return {
            extend: function(d) {
                b.prototype = this;
                var f = new b;
                d && f.mixIn(d);
                f.$super = this;
                return f
            },
            create: function() {
                var d = this.extend();
                d.init.apply(d, arguments);
                return d
            },
            init: function() {},
            mixIn: function(d) {
                for (var f in d) {
                    d.hasOwnProperty(f) && (this[f] = d[f])
                }
                d.hasOwnProperty("toString") && (this.toString = d.toString)
            },
            clone: function() {
                return this.$super.extend(this)
            }
        }
    }()
      , e = w.WordArray = c.extend({
        init: function(b, d) {
            b = this.words = b || [];
            this.sigBytes = d != q ? d : 4 * b.length
        },
        toString: function(b) {
            return (b || v).stringify(this)
        },
        concat: function(f) {
            var g = this.words
              , i = f.words
              , h = this.sigBytes
              , f = f.sigBytes;
            this.clamp();
            if (h % 4) {
                for (var d = 0; d < f; d++) {
                    g[h + d >>> 2] |= (i[d >>> 2] >>> 24 - 8 * (d % 4) & 255) << 24 - 8 * ((h + d) % 4)
                }
            } else {
                if (65535 < i.length) {
                    for (d = 0; d < f; d += 4) {
                        g[h + d >>> 2] = i[d >>> 2]
                    }
                } else {
                    g.push.apply(g, i)
                }
            }
            this.sigBytes += f;
            return this
        },
        clamp: function() {
            var b = this.words
              , d = this.sigBytes;
            b[d >>> 2] &= 4294967295 << 32 - 8 * (d % 4);
            b.length = s.ceil(d / 4)
        },
        clone: function() {
            var b = c.clone.call(this);
            b.words = this.words.slice(0);
            return b
        },
        random: function(b) {
            for (var d = [], f = 0; f < b; f += 4) {
                d.push(4294967296 * s.random() | 0)
            }
            return e.create(d, b)
        }
    })
      , a = t.enc = {}
      , v = a.Hex = {
        stringify: function(g) {
            for (var h = g.words, g = g.sigBytes, j = [], f = 0; f < g; f++) {
                var i = h[f >>> 2] >>> 24 - 8 * (f % 4) & 255;
                j.push((i >>> 4).toString(16));
                j.push((i & 15).toString(16))
            }
            return j.join("")
        },
        parse: function(f) {
            for (var g = f.length, h = [], d = 0; d < g; d += 2) {
                h[d >>> 3] |= parseInt(f.substr(d, 2), 16) << 24 - 4 * (d % 8)
            }
            return e.create(h, g / 2)
        }
    }
      , p = a.Latin1 = {
        stringify: function(g) {
            for (var h = g.words, g = g.sigBytes, f = [], i = 0; i < g; i++) {
                f.push(String.fromCharCode(h[i >>> 2] >>> 24 - 8 * (i % 4) & 255))
            }
            return f.join("")
        },
        parse: function(g) {
            for (var f = g.length, i = [], h = 0; h < f; h++) {
                i[h >>> 2] |= (g.charCodeAt(h) & 255) << 24 - 8 * (h % 4)
            }
            return e.create(i, f)
        }
    }
      , o = a.Utf8 = {
        stringify: function(f) {
            try {
                return decodeURIComponent(escape(p.stringify(f)))
            } catch (d) {
                throw Error("Malformed UTF-8 data")
            }
        },
        parse: function(b) {
            return p.parse(unescape(encodeURIComponent(b)))
        }
    }
      , r = w.BufferedBlockAlgorithm = c.extend({
        reset: function() {
            this._data = e.create();
            this._nDataBytes = 0
        },
        _append: function(b) {
            "string" == typeof b && (b = o.parse(b));
            this._data.concat(b);
            this._nDataBytes += b.sigBytes
        },
        _process: function(i) {
            var g = this._data
              , u = g.words
              , n = g.sigBytes
              , k = this.blockSize
              , l = n / (4 * k)
              , l = i ? s.ceil(l) : s.max((l | 0) - this._minBufferSize, 0)
              , i = l * k
              , n = s.min(4 * i, n);
            if (i) {
                for (var m = 0; m < i; m += k) {
                    this._doProcessBlock(u, m)
                }
                m = u.splice(0, i);
                g.sigBytes -= n
            }
            return e.create(m, n)
        },
        clone: function() {
            var b = c.clone.call(this);
            b._data = this._data.clone();
            return b
        },
        _minBufferSize: 0
    });
    w.Hasher = r.extend({
        init: function() {
            this.reset()
        },
        reset: function() {
            r.reset.call(this);
            this._doReset()
        },
        update: function(b) {
            this._append(b);
            this._process();
            return this
        },
        finalize: function(b) {
            b && this._append(b);
            this._doFinalize();
            return this._hash
        },
        clone: function() {
            var b = r.clone.call(this);
            b._hash = this._hash.clone();
            return b
        },
        blockSize: 16,
        _createHelper: function(b) {
            return function(d, f) {
                return b.create(f).finalize(d)
            }
        },
        _createHmacHelper: function(b) {
            return function(d, f) {
                return x.HMAC.create(b, f).finalize(d)
            }
        }
    });
    var x = t.algo = {};
    return t
}(Math);
(function() {
    var e = CryptoJS
      , d = e.lib
      , h = d.WordArray
      , d = d.Hasher
      , c = []
      , a = e.algo.SHA1 = d.extend({
        _doReset: function() {
            this._hash = h.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520])
        },
        _doProcessBlock: function(p, b) {
            for (var r = this._hash.words, l = r[0], i = r[1], m = r[2], o = r[3], t = r[4], q = 0; 80 > q; q++) {
                if (16 > q) {
                    c[q] = p[b + q] | 0
                } else {
                    var s = c[q - 3] ^ c[q - 8] ^ c[q - 14] ^ c[q - 16];
                    c[q] = s << 1 | s >>> 31
                }
                s = (l << 5 | l >>> 27) + t + c[q];
                s = 20 > q ? s + ((i & m | ~i & o) + 1518500249) : 40 > q ? s + ((i ^ m ^ o) + 1859775393) : 60 > q ? s + ((i & m | i & o | m & o) - 1894007588) : s + ((i ^ m ^ o) - 899497514);
                t = o;
                o = m;
                m = i << 30 | i >>> 2;
                i = l;
                l = s
            }
            r[0] = r[0] + l | 0;
            r[1] = r[1] + i | 0;
            r[2] = r[2] + m | 0;
            r[3] = r[3] + o | 0;
            r[4] = r[4] + t | 0
        },
        _doFinalize: function() {
            var g = this._data
              , k = g.words
              , l = 8 * this._nDataBytes
              , i = 8 * g.sigBytes;
            k[i >>> 5] |= 128 << 24 - i % 32;
            k[(i + 64 >>> 9 << 4) + 15] = l;
            g.sigBytes = 4 * k.length;
            this._process()
        }
    });
    e.SHA1 = d._createHelper(a);
    e.HmacSHA1 = d._createHmacHelper(a)
}
)();
(function() {
    var b = CryptoJS
      , a = b.enc.Utf8;
    b.algo.HMAC = b.lib.Base.extend({
        init: function(q, s) {
            q = this._hasher = q.create();
            "string" == typeof s && (s = a.parse(s));
            var p = q.blockSize
              , e = 4 * p;
            s.sigBytes > e && (s = q.finalize(s));
            for (var c = this._oKey = s.clone(), r = this._iKey = s.clone(), m = c.words, i = r.words, o = 0; o < p; o++) {
                m[o] ^= 1549556828,
                i[o] ^= 909522486
            }
            c.sigBytes = r.sigBytes = e;
            this.reset()
        },
        reset: function() {
            var c = this._hasher;
            c.reset();
            c.update(this._iKey)
        },
        update: function(c) {
            this._hasher.update(c);
            return this
        },
        finalize: function(d) {
            var c = this._hasher
              , d = c.finalize(d);
            c.reset();
            return c.finalize(this._oKey.clone().concat(d))
        }
    })
}
)();
(function() {
    var h = CryptoJS
      , e = h.lib
      , j = e.Base
      , c = e.WordArray
      , e = h.algo
      , a = e.HMAC
      , d = e.PBKDF2 = j.extend({
        cfg: j.extend({
            keySize: 4,
            hasher: e.SHA1,
            iterations: 1
        }),
        init: function(f) {
            this.cfg = this.cfg.extend(f)
        },
        compute: function(z, B) {
            for (var y = this.cfg, u = a.create(y.hasher, z), x = c.create(), w = c.create([1]), D = x.words, A = w.words, C = y.keySize, y = y.iterations; D.length < C; ) {
                var o = u.update(B).finalize(w);
                u.reset();
                for (var m = o.words, F = m.length, b = o, G = 1; G < y; G++) {
                    b = u.finalize(b);
                    u.reset();
                    for (var E = b.words, n = 0; n < F; n++) {
                        m[n] ^= E[n]
                    }
                }
                x.concat(o);
                A[0]++
            }
            x.sigBytes = 4 * C;
            return x
        }
    });
    h.PBKDF2 = function(g, k, i) {
        return d.create(i).compute(g, k)
    }
}
)();
var CryptoJS = CryptoJS || function(b, u) {
    var t = {}
      , j = t.lib = {}
      , a = j.Base = function() {
        function f() {}
        return {
            extend: function(g) {
                f.prototype = this;
                var h = new f;
                g && h.mixIn(g);
                h.$super = this;
                return h
            },
            create: function() {
                var g = this.extend();
                g.init.apply(g, arguments);
                return g
            },
            init: function() {},
            mixIn: function(g) {
                for (var h in g) {
                    g.hasOwnProperty(h) && (this[h] = g[h])
                }
                g.hasOwnProperty("toString") && (this.toString = g.toString)
            },
            clone: function() {
                return this.$super.extend(this)
            }
        }
    }()
      , c = j.WordArray = a.extend({
        init: function(f, g) {
            f = this.words = f || [];
            this.sigBytes = g != u ? g : 4 * f.length
        },
        toString: function(f) {
            return (f || x).stringify(this)
        },
        concat: function(g) {
            var h = this.words
              , k = g.words
              , f = this.sigBytes
              , g = g.sigBytes;
            this.clamp();
            if (f % 4) {
                for (var i = 0; i < g; i++) {
                    h[f + i >>> 2] |= (k[i >>> 2] >>> 24 - 8 * (i % 4) & 255) << 24 - 8 * ((f + i) % 4)
                }
            } else {
                if (65535 < k.length) {
                    for (i = 0; i < g; i += 4) {
                        h[f + i >>> 2] = k[i >>> 2]
                    }
                } else {
                    h.push.apply(h, k)
                }
            }
            this.sigBytes += g;
            return this
        },
        clamp: function() {
            var f = this.words
              , g = this.sigBytes;
            f[g >>> 2] &= 4294967295 << 32 - 8 * (g % 4);
            f.length = b.ceil(g / 4)
        },
        clone: function() {
            var f = a.clone.call(this);
            f.words = this.words.slice(0);
            return f
        },
        random: function(f) {
            for (var g = [], h = 0; h < f; h += 4) {
                g.push(4294967296 * b.random() | 0)
            }
            return c.create(g, f)
        }
    })
      , e = t.enc = {}
      , x = e.Hex = {
        stringify: function(g) {
            for (var h = g.words, g = g.sigBytes, k = [], f = 0; f < g; f++) {
                var i = h[f >>> 2] >>> 24 - 8 * (f % 4) & 255;
                k.push((i >>> 4).toString(16));
                k.push((i & 15).toString(16))
            }
            return k.join("")
        },
        parse: function(g) {
            for (var h = g.length, i = [], f = 0; f < h; f += 2) {
                i[f >>> 3] |= parseInt(g.substr(f, 2), 16) << 24 - 4 * (f % 8)
            }
            return c.create(i, h / 2)
        }
    }
      , d = e.Latin1 = {
        stringify: function(g) {
            for (var h = g.words, g = g.sigBytes, i = [], f = 0; f < g; f++) {
                i.push(String.fromCharCode(h[f >>> 2] >>> 24 - 8 * (f % 4) & 255))
            }
            return i.join("")
        },
        parse: function(g) {
            for (var h = g.length, i = [], f = 0; f < h; f++) {
                i[f >>> 2] |= (g.charCodeAt(f) & 255) << 24 - 8 * (f % 4)
            }
            return c.create(i, h)
        }
    }
      , q = e.Utf8 = {
        stringify: function(f) {
            try {
                return decodeURIComponent(escape(d.stringify(f)))
            } catch (g) {
                throw Error("Malformed UTF-8 data")
            }
        },
        parse: function(f) {
            return d.parse(unescape(encodeURIComponent(f)))
        }
    }
      , w = j.BufferedBlockAlgorithm = a.extend({
        reset: function() {
            this._data = c.create();
            this._nDataBytes = 0
        },
        _append: function(f) {
            "string" == typeof f && (f = q.parse(f));
            this._data.concat(f);
            this._nDataBytes += f.sigBytes
        },
        _process: function(g) {
            var k = this._data
              , m = k.words
              , f = k.sigBytes
              , l = this.blockSize
              , i = f / (4 * l)
              , i = g ? b.ceil(i) : b.max((i | 0) - this._minBufferSize, 0)
              , g = i * l
              , f = b.min(4 * g, f);
            if (g) {
                for (var h = 0; h < g; h += l) {
                    this._doProcessBlock(m, h)
                }
                h = m.splice(0, g);
                k.sigBytes -= f
            }
            return c.create(h, f)
        },
        clone: function() {
            var f = a.clone.call(this);
            f._data = this._data.clone();
            return f
        },
        _minBufferSize: 0
    });
    j.Hasher = w.extend({
        init: function() {
            this.reset()
        },
        reset: function() {
            w.reset.call(this);
            this._doReset()
        },
        update: function(f) {
            this._append(f);
            this._process();
            return this
        },
        finalize: function(f) {
            f && this._append(f);
            this._doFinalize();
            return this._hash
        },
        clone: function() {
            var f = w.clone.call(this);
            f._hash = this._hash.clone();
            return f
        },
        blockSize: 16,
        _createHelper: function(f) {
            return function(g, h) {
                return f.create(h).finalize(g)
            }
        },
        _createHmacHelper: function(f) {
            return function(g, h) {
                return v.HMAC.create(f, h).finalize(g)
            }
        }
    });
    var v = t.algo = {};
    return t
}(Math);
(function() {
    var b = CryptoJS
      , a = b.lib.WordArray;
    b.enc.Base64 = {
        stringify: function(e) {
            var d = e.words
              , g = e.sigBytes
              , j = this._map;
            e.clamp();
            for (var e = [], c = 0; c < g; c += 3) {
                for (var f = (d[c >>> 2] >>> 24 - 8 * (c % 4) & 255) << 16 | (d[c + 1 >>> 2] >>> 24 - 8 * ((c + 1) % 4) & 255) << 8 | d[c + 2 >>> 2] >>> 24 - 8 * ((c + 2) % 4) & 255, k = 0; 4 > k && c + 0.75 * k < g; k++) {
                    e.push(j.charAt(f >>> 6 * (3 - k) & 63))
                }
            }
            if (d = j.charAt(64)) {
                for (; e.length % 4; ) {
                    e.push(d)
                }
            }
            return e.join("")
        },
        parse: function(f) {
            var f = f.replace(/\s/g, "")
              , d = f.length
              , h = this._map
              , j = h.charAt(64);
            j && (j = f.indexOf(j),
            -1 != j && (d = j));
            for (var j = [], c = 0, g = 0; g < d; g++) {
                if (g % 4) {
                    var p = h.indexOf(f.charAt(g - 1)) << 2 * (g % 4)
                      , e = h.indexOf(f.charAt(g)) >>> 6 - 2 * (g % 4);
                    j[c >>> 2] |= (p | e) << 24 - 8 * (c % 4);
                    c++
                }
            }
            return a.create(j, c)
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
}
)();
(function(b) {
    function q(l, k, i, m, o, h, n) {
        l = l + (k & i | ~k & m) + o + n;
        return (l << h | l >>> 32 - h) + k
    }
    function j(l, k, i, m, o, h, n) {
        l = l + (k & m | i & ~m) + o + n;
        return (l << h | l >>> 32 - h) + k
    }
    function f(l, k, i, m, o, h, n) {
        l = l + (k ^ i ^ m) + o + n;
        return (l << h | l >>> 32 - h) + k
    }
    function a(l, k, i, m, o, h, n) {
        l = l + (i ^ (k | ~m)) + o + n;
        return (l << h | l >>> 32 - h) + k
    }
    var c = CryptoJS
      , e = c.lib
      , t = e.WordArray
      , e = e.Hasher
      , d = c.algo
      , g = [];
    (function() {
        for (var h = 0; 64 > h; h++) {
            g[h] = 4294967296 * b.abs(b.sin(h + 1)) | 0
        }
    }
    )();
    d = d.MD5 = e.extend({
        _doReset: function() {
            this._hash = t.create([1732584193, 4023233417, 2562383102, 271733878])
        },
        _doProcessBlock: function(m, k) {
            for (var i = 0; 16 > i; i++) {
                var n = k + i
                  , p = m[n];
                m[n] = (p << 8 | p >>> 24) & 16711935 | (p << 24 | p >>> 8) & 4278255360
            }
            for (var n = this._hash.words, p = n[0], h = n[1], o = n[2], l = n[3], i = 0; 64 > i; i += 4) {
                16 > i ? (p = q(p, h, o, l, m[k + i], 7, g[i]),
                l = q(l, p, h, o, m[k + i + 1], 12, g[i + 1]),
                o = q(o, l, p, h, m[k + i + 2], 17, g[i + 2]),
                h = q(h, o, l, p, m[k + i + 3], 22, g[i + 3])) : 32 > i ? (p = j(p, h, o, l, m[k + (i + 1) % 16], 5, g[i]),
                l = j(l, p, h, o, m[k + (i + 6) % 16], 9, g[i + 1]),
                o = j(o, l, p, h, m[k + (i + 11) % 16], 14, g[i + 2]),
                h = j(h, o, l, p, m[k + i % 16], 20, g[i + 3])) : 48 > i ? (p = f(p, h, o, l, m[k + (3 * i + 5) % 16], 4, g[i]),
                l = f(l, p, h, o, m[k + (3 * i + 8) % 16], 11, g[i + 1]),
                o = f(o, l, p, h, m[k + (3 * i + 11) % 16], 16, g[i + 2]),
                h = f(h, o, l, p, m[k + (3 * i + 14) % 16], 23, g[i + 3])) : (p = a(p, h, o, l, m[k + 3 * i % 16], 6, g[i]),
                l = a(l, p, h, o, m[k + (3 * i + 7) % 16], 10, g[i + 1]),
                o = a(o, l, p, h, m[k + (3 * i + 14) % 16], 15, g[i + 2]),
                h = a(h, o, l, p, m[k + (3 * i + 5) % 16], 21, g[i + 3]))
            }
            n[0] = n[0] + p | 0;
            n[1] = n[1] + h | 0;
            n[2] = n[2] + o | 0;
            n[3] = n[3] + l | 0
        },
        _doFinalize: function() {
            var k = this._data
              , i = k.words
              , h = 8 * this._nDataBytes
              , l = 8 * k.sigBytes;
            i[l >>> 5] |= 128 << 24 - l % 32;
            i[(l + 64 >>> 9 << 4) + 14] = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360;
            k.sigBytes = 4 * (i.length + 1);
            this._process();
            k = this._hash.words;
            for (i = 0; 4 > i; i++) {
                h = k[i],
                k[i] = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360
            }
        }
    });
    c.MD5 = e._createHelper(d);
    c.HmacMD5 = e._createHmacHelper(d)
}
)(Math);
(function() {
    var e = CryptoJS
      , c = e.lib
      , b = c.Base
      , a = c.WordArray
      , c = e.algo
      , d = c.EvpKDF = b.extend({
        cfg: b.extend({
            keySize: 4,
            hasher: c.MD5,
            iterations: 1
        }),
        init: function(f) {
            this.cfg = this.cfg.extend(f)
        },
        compute: function(p, l) {
            for (var q = this.cfg, j = q.hasher.create(), o = a.create(), s = o.words, r = q.keySize, q = q.iterations; s.length < r; ) {
                u && j.update(u);
                var u = j.update(p).finalize(l);
                j.reset();
                for (var t = 1; t < q; t++) {
                    u = j.finalize(u),
                    j.reset()
                }
                o.concat(u)
            }
            o.sigBytes = 4 * r;
            return o
        }
    });
    e.EvpKDF = function(g, f, j) {
        return d.create(j).compute(g, f)
    }
}
)();
CryptoJS.lib.Cipher || function(d) {
    var x = CryptoJS
      , w = x.lib
      , u = w.Base
      , b = w.WordArray
      , j = w.BufferedBlockAlgorithm
      , t = x.enc.Base64
      , D = x.algo.EvpKDF
      , q = w.Cipher = j.extend({
        cfg: u.extend(),
        createEncryptor: function(a, c) {
            return this.create(this._ENC_XFORM_MODE, a, c)
        },
        createDecryptor: function(a, c) {
            return this.create(this._DEC_XFORM_MODE, a, c)
        },
        init: function(c, f, e) {
            this.cfg = this.cfg.extend(e);
            this._xformMode = c;
            this._key = f;
            this.reset()
        },
        reset: function() {
            j.reset.call(this);
            this._doReset()
        },
        process: function(a) {
            this._append(a);
            return this._process()
        },
        finalize: function(a) {
            a && this._append(a);
            return this._doFinalize()
        },
        keySize: 4,
        ivSize: 4,
        _ENC_XFORM_MODE: 1,
        _DEC_XFORM_MODE: 2,
        _createHelper: function() {
            return function(a) {
                return {
                    encrypt: function(c, f, e) {
                        return ("string" == typeof f ? B : A).encrypt(a, c, f, e)
                    },
                    decrypt: function(c, f, e) {
                        return ("string" == typeof f ? B : A).decrypt(a, c, f, e)
                    }
                }
            }
        }()
    });
    w.StreamCipher = q.extend({
        _doFinalize: function() {
            return this._process(!0)
        },
        blockSize: 1
    });
    var v = x.mode = {}
      , z = w.BlockCipherMode = u.extend({
        createEncryptor: function(c, e) {
            return this.Encryptor.create(c, e)
        },
        createDecryptor: function(c, e) {
            return this.Decryptor.create(c, e)
        },
        init: function(c, e) {
            this._cipher = c;
            this._iv = e
        }
    })
      , v = v.CBC = function() {
        function c(f, g, i) {
            var k = this._iv;
            k ? this._iv = d : k = this._prevBlock;
            for (var h = 0; h < i; h++) {
                f[g + h] ^= k[h]
            }
        }
        var e = z.extend();
        e.Encryptor = e.extend({
            processBlock: function(f, h) {
                var i = this._cipher
                  , g = i.blockSize;
                c.call(this, f, h, g);
                i.encryptBlock(f, h);
                this._prevBlock = f.slice(h, h + g)
            }
        });
        e.Decryptor = e.extend({
            processBlock: function(g, k) {
                var l = this._cipher
                  , i = l.blockSize
                  , h = g.slice(k, k + i);
                l.decryptBlock(g, k);
                c.call(this, g, k, i);
                this._prevBlock = h
            }
        });
        return e
    }()
      , y = (x.pad = {}).Pkcs7 = {
        pad: function(h, i) {
            for (var n = 4 * i, n = n - h.sigBytes % n, m = n << 24 | n << 16 | n << 8 | n, l = [], k = 0; k < n; k += 4) {
                l.push(m)
            }
            n = b.create(l, n);
            h.concat(n)
        },
        unpad: function(a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    w.BlockCipher = q.extend({
        cfg: q.cfg.extend({
            mode: v,
            padding: y
        }),
        reset: function() {
            q.reset.call(this);
            var e = this.cfg
              , f = e.iv
              , e = e.mode;
            if (this._xformMode == this._ENC_XFORM_MODE) {
                var g = e.createEncryptor
            } else {
                g = e.createDecryptor,
                this._minBufferSize = 1
            }
            this._mode = g.call(e, this, f && f.words)
        },
        _doProcessBlock: function(c, e) {
            this._mode.processBlock(c, e)
        },
        _doFinalize: function() {
            var c = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
                c.pad(this._data, this.blockSize);
                var e = this._process(!0)
            } else {
                e = this._process(!0),
                c.unpad(e)
            }
            return e
        },
        blockSize: 4
    });
    var C = w.CipherParams = u.extend({
        init: function(c) {
            this.mixIn(c)
        },
        toString: function(c) {
            return (c || this.formatter).stringify(this)
        }
    })
      , v = (x.format = {}).OpenSSL = {
        stringify: function(c) {
            var e = c.ciphertext
              , c = c.salt
              , e = (c ? b.create([1398893684, 1701076831]).concat(c).concat(e) : e).toString(t);
            return e = e.replace(/(.{64})/g, "$1")
        },
        parse: function(a) {
            var a = t.parse(a)
              , e = a.words;
            if (1398893684 == e[0] && 1701076831 == e[1]) {
                var f = b.create(e.slice(2, 4));
                e.splice(0, 4);
                a.sigBytes -= 16
            }
            return C.create({
                ciphertext: a,
                salt: f
            })
        }
    }
      , A = w.SerializableCipher = u.extend({
        cfg: u.extend({
            format: v
        }),
        encrypt: function(a, i, k, h) {
            var h = this.cfg.extend(h)
              , g = a.createEncryptor(k, h)
              , i = g.finalize(i)
              , g = g.cfg;
            return C.create({
                ciphertext: i,
                key: k,
                iv: g.iv,
                algorithm: a,
                mode: g.mode,
                padding: g.padding,
                blockSize: a.blockSize,
                formatter: h.format
            })
        },
        decrypt: function(g, k, i, h) {
            h = this.cfg.extend(h);
            k = this._parse(k, h.format);
            return g.createDecryptor(i, h).finalize(k.ciphertext)
        },
        _parse: function(e, f) {
            return "string" == typeof e ? f.parse(e) : e
        }
    })
      , x = (x.kdf = {}).OpenSSL = {
        compute: function(a, i, h, g) {
            g || (g = b.random(8));
            a = D.create({
                keySize: i + h
            }).compute(a, g);
            h = b.create(a.words.slice(i), 4 * h);
            a.sigBytes = 4 * i;
            return C.create({
                key: a,
                iv: h,
                salt: g
            })
        }
    }
      , B = w.PasswordBasedCipher = A.extend({
        cfg: A.cfg.extend({
            kdf: x
        }),
        encrypt: function(e, i, h, g) {
            g = this.cfg.extend(g);
            h = g.kdf.compute(h, e.keySize, e.ivSize);
            g.iv = h.iv;
            e = A.encrypt.call(this, e, i, h.key, g);
            e.mixIn(h);
            return e
        },
        decrypt: function(e, i, h, g) {
            g = this.cfg.extend(g);
            i = this._parse(i, g.format);
            h = g.kdf.compute(h, e.keySize, e.ivSize, i.salt);
            g.iv = h.iv;
            return A.decrypt.call(this, e, i, h.key, g)
        }
    })
}();
(function() {
    var c = CryptoJS
      , w = c.lib.BlockCipher
      , v = c.algo
      , t = []
      , b = []
      , d = []
      , q = []
      , B = []
      , j = []
      , u = []
      , y = []
      , x = []
      , A = [];
    (function() {
        for (var n = [], o = 0; 256 > o; o++) {
            n[o] = 128 > o ? o << 1 : o << 1 ^ 283
        }
        for (var m = 0, l = 0, o = 0; 256 > o; o++) {
            var f = l ^ l << 1 ^ l << 2 ^ l << 3 ^ l << 4
              , f = f >>> 8 ^ f & 255 ^ 99;
            t[m] = f;
            b[f] = m;
            var g = n[m]
              , k = n[g]
              , a = n[k]
              , r = 257 * n[f] ^ 16843008 * f;
            d[m] = r << 24 | r >>> 8;
            q[m] = r << 16 | r >>> 16;
            B[m] = r << 8 | r >>> 24;
            j[m] = r;
            r = 16843009 * a ^ 65537 * k ^ 257 * g ^ 16843008 * m;
            u[f] = r << 24 | r >>> 8;
            y[f] = r << 16 | r >>> 16;
            x[f] = r << 8 | r >>> 24;
            A[f] = r;
            m ? (m = g ^ n[n[n[a ^ g]]],
            l ^= n[n[l]]) : m = l = 1
        }
    }
    )();
    var z = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
      , v = v.AES = w.extend({
        _doReset: function() {
            for (var l = this._key, a = l.words, k = l.sigBytes / 4, l = 4 * ((this._nRounds = k + 6) + 1), f = this._keySchedule = [], e = 0; e < l; e++) {
                if (e < k) {
                    f[e] = a[e]
                } else {
                    var g = f[e - 1];
                    e % k ? 6 < k && 4 == e % k && (g = t[g >>> 24] << 24 | t[g >>> 16 & 255] << 16 | t[g >>> 8 & 255] << 8 | t[g & 255]) : (g = g << 8 | g >>> 24,
                    g = t[g >>> 24] << 24 | t[g >>> 16 & 255] << 16 | t[g >>> 8 & 255] << 8 | t[g & 255],
                    g ^= z[e / k | 0] << 24);
                    f[e] = f[e - k] ^ g
                }
            }
            a = this._invKeySchedule = [];
            for (k = 0; k < l; k++) {
                e = l - k,
                g = k % 4 ? f[e] : f[e - 4],
                a[k] = 4 > k || 4 >= e ? g : u[t[g >>> 24]] ^ y[t[g >>> 16 & 255]] ^ x[t[g >>> 8 & 255]] ^ A[t[g & 255]]
            }
        },
        encryptBlock: function(f, e) {
            this._doCryptBlock(f, e, this._keySchedule, d, q, B, j, t)
        },
        decryptBlock: function(f, a) {
            var e = f[a + 1];
            f[a + 1] = f[a + 3];
            f[a + 3] = e;
            this._doCryptBlock(f, a, this._invKeySchedule, u, y, x, A, b);
            e = f[a + 1];
            f[a + 1] = f[a + 3];
            f[a + 3] = e
        },
        _doCryptBlock: function(T, S, R, Q, P, N, M, O) {
            for (var K = this._nRounds, L = T[S] ^ R[0], J = T[S + 1] ^ R[1], H = T[S + 2] ^ R[2], I = T[S + 3] ^ R[3], G = 4, F = 1; F < K; F++) {
                var E = Q[L >>> 24] ^ P[J >>> 16 & 255] ^ N[H >>> 8 & 255] ^ M[I & 255] ^ R[G++]
                  , D = Q[J >>> 24] ^ P[H >>> 16 & 255] ^ N[I >>> 8 & 255] ^ M[L & 255] ^ R[G++]
                  , C = Q[H >>> 24] ^ P[I >>> 16 & 255] ^ N[L >>> 8 & 255] ^ M[J & 255] ^ R[G++]
                  , I = Q[I >>> 24] ^ P[L >>> 16 & 255] ^ N[J >>> 8 & 255] ^ M[H & 255] ^ R[G++]
                  , L = E
                  , J = D
                  , H = C
            }
            E = (O[L >>> 24] << 24 | O[J >>> 16 & 255] << 16 | O[H >>> 8 & 255] << 8 | O[I & 255]) ^ R[G++];
            D = (O[J >>> 24] << 24 | O[H >>> 16 & 255] << 16 | O[I >>> 8 & 255] << 8 | O[L & 255]) ^ R[G++];
            C = (O[H >>> 24] << 24 | O[I >>> 16 & 255] << 16 | O[L >>> 8 & 255] << 8 | O[J & 255]) ^ R[G++];
            I = (O[I >>> 24] << 24 | O[L >>> 16 & 255] << 16 | O[J >>> 8 & 255] << 8 | O[H & 255]) ^ R[G++];
            T[S] = E;
            T[S + 1] = D;
            T[S + 2] = C;
            T[S + 3] = I
        },
        keySize: 8
    });
    c.AES = w._createHelper(v)
}
)();
var ananbeike = function() {
    this.keySize = 128 / 32;
    this.iterationCount = 10000
};
ananbeike.prototype.generateKey = function(b, c) {
    var a = CryptoJS.PBKDF2(c, CryptoJS.enc.Hex.parse(b), {
        keySize: this.keySize,
        iterations: this.iterationCount
    });
    return a
}
;
ananbeike.prototype.e = function(d, a, f, c) {
    var b = this.generateKey(d, f);
    var e = CryptoJS.AES.encrypt(c, b, {
        iv: CryptoJS.enc.Hex.parse(a)
    });
    return e.ciphertext.toString(CryptoJS.enc.Base64)
}
;
ananbeike.prototype.d = function(f, c, g, e) {
    var d = this.generateKey(f, g);
    var b = CryptoJS.lib.CipherParams.create({
        ciphertext: CryptoJS.enc.Base64.parse(e)
    });
    var a = CryptoJS.AES.decrypt(b, d, {
        iv: CryptoJS.enc.Hex.parse(c)
    });
    return a.toString(CryptoJS.enc.Utf8)
}
;

var _0x9d06 = ["zWq", ".login-text .lginfo", "html", "msI", "Giw", "cQP", "rHt", "getLocaleMsg", "pdp_not_login_msg", "<a href=\"", "/member/login?locale=\"", "pdp_login_in", "</a>", "本商品9月21日0点正式公开发售，请您届时前往本站购买，感谢您的参与！", "pdp-htper-room-info-dialog", "hypePanelTrgt", ".btn-icon-cart", "is-disabled", "cbstep", "hypeLaunchBuy", "bYz", "target", "renderUI", "showArrivalNoticeDialog", ".events-take-notice", "arrivalNotice", ".pdp-size-loading", "show", "Imp", "DEX", "/hl/data/date/", "jdB", "input[name=\"uid\"]", ".json", "asyncXhrPost", "PoW", "parseJSON", "renderHypePanel", "fMm", "MPu", "Llo", "status", "miZ", "Qzs", "mbx", ".gl-cta-color-disabled", "getSelectedSkuId", "msg", "skuId", "validateIfTouclick", "tQI", "validateIfLoTouclick", "result", "nextstep", "fzG", "reverse", "join", "firsttoken", "zTT", "length", "substr", "extend", "NwJ", "Kfr", "/hl/", "/retrievev2.json", "clearErrorMsg", "returnObject", "ctstep", "Hog", "translate", "nwc", "/hp/transaction/hypeOver", "showErrorMsg", "pdp_check_fail", "QRY", "tobuy", "buyNowOnHypePdp", "XEO", "kqL", "QNk", "disableSelectedSize", "pdp_inv_notenough", "pdp_operate_exception", "showBuyBtn", "XzG", "Fgj", "/member/login?locale=", "xVI", "YTy", "/orderHistory?orderType=0\"  style=\"color: #FF6D6D !important;font-size: 12px;text-decoration: underline;\" target=\"_blank\">", "pdp_or_msg", "ZBC", "Vpu", "/orderHistory?orderType=0\" style=\"color: #FF6D6D !important;font-size: 12px;text-decoration: underline;\" target=\"_blank\">", "pdp_cancel_msg", "pdp_topay_order_msg1", "oeD", ".limits", "pdp_limit_id_buy", "pdp_limit_account_buy", "pdp_activity_popular", "Jfv", "qvP", "/hp/transaction/queue?locale=", "ADD TO CART", "0|8|7|3|5|1|2|6|4", "getArrivalNoticeSkuId", ".arrival-notice-prompt .send-own-email", "text", "OGo", "parents", "syncXhrPost", "/hl/item/arrivalNotice.json", "sts", "YWK", "input[name=\"token\"]", "BiS", "setProductLabel", "renderCountdown", "renderExpire", "6|0|1|2|5|7|4|3|8", "now", "bWN", "input[name=\"specialDesc\"]", "numRandom", "getNumRandomByArray", "aiY", "EBk", "pLf", "pqm", "crr", "renderToSelector", "#countdown-template", "QmK", "dateToCountdown", "5|0|4|7|8|10|3|2|6|9|1", "dynamicData", "input[name=\"sizeTable\"]", ".events-size-chart", "getTemplate", "NXJ", "#ongoing-template", "removeClass", "the-pre-sale", "addClass", "msg_label_new", "verifyType", "initSizeSelectOption", "staticbase", "UTs", ".hype-panel .time-box", "NTK", "nGS", "hour", "minute", "Lhq", "FkX", "retrieveType", "initSkuIdsAndIvts", "input[name=\"key\"]", "19|3|12|16|18|8|4|1|9|0|14|17|5|7|11|6|2|15|10|13", "initCapatchType", "size-num-box", "token", "4|3|0|2|1", "NHc", "#expired-template", "remove", ".right-message", "product-sell-out", "mpA", "getOngoingRenderJson", "Rqa", "LKr", "Xwg", "#productType", "Huj", "VBV", "iFN", "shoes", "9|0|4|1|5|7|8|3|6|2", ".product-title h1", ".product-scroll-b-c li:eq(0)", "find", "img:eq(0)", "attr", "spice", "cIJ", "JIP", "QOX", ".events-color-close", "getTemplateHtml", "LVQ", "rjg", "0|4|1|2|3", "SgG", "#sizesku .is-disabled", "each", "data-id", "ljy", "vhp", "GNM", "PIb", "VVG", "Oom", "Mtd", "rZd", "Mbw", "DDT", "dlC", "Vjl", "rlu", "Uhs", "ZlJ", "Bef", "tNb", "Ugt", "Mxe", "<div class='time_main float-clearfix'><div class='time_show'><p class='time_countdown'>", "pdp_time_day", "pdp_time_hour", "</p></div><div class='time_show'><p class='time_countdown'>", "pdp_time_minute", "pdp_time_second", "getTime", "iiH", "efw", "skus", "skuIds", "skuIvts", ".hype-panel ul li", "wBi", "vWX", "rzr", "BpB", "is-disabled-three", "sizeHaveChancebuy", ".events-arrival-notice", "Enh", "mYW", "Epn", ".is-active a", "Kxb", "showLoTopicData", "loTouchClick", "vkstep", ".event-validate", "loGetTopicData", "Wlh", "0|4|2|5|1|3", ".event-validate .problem-box,.event-problem,.event-success", "is-error", "span", "pdp_operate_by_msg", ".event-success", "is-active", ".event-problem-input", "sMM", ".event-mit", "2|5|6|1|3|0|4", "jMp", "iQD", "/tans.json", "validate reuslt:", "heo", ".event-problem", "Exp", "vkstaus", ".event-diy-shirt,.event-validate", "input_answer_validate", "8|11|2|1|3|7|10|0|12|9|13|5|6|4", "hFO", ".problem-box .event-problem .topic-img", "Rdy", "rNY", "Qwa", "PeF", "Gem", "Pqt", "Mvs", "rHE", "4|1|0|5|6|3|2", "VZM", ".hype-panel .event-validate", "cpc", ".pdp-color ul ", "fky", "pdp_choose_color", "thP", ".hype-panel ul", ".is-active", "ePA", "push", "getItemProperties", "GMt", "pdp_validate_tobuy", "dropdown", "5|6|2|4|0|1|3", "displaySize", "xKa", "dropElem", "span:eq(0)", "clickcount", "NbR", "sort", "rcN", "key", "passphrase", "tGN", "#captcha-target", "click", "KkH", ".touclick-lock-mb", "egw", "css", "ready", "touclick", "dXl", "#token", "YIu", "#checkAddress", "#sid", "sid", "AYK", "en_GB", "wLd", "zh-CN", "isEmptyObject", "validate", "necapatch err", "PRA", ".hype-panel select", "option:selected", "lkY", "ZTZ", ".d-arrival-notice ul", ".info-size-select .msg-block", "pdp_choose_notice_size", ".info-size-select", "zOm", "epK", "qYu", "parent", ".msg-block span", "pdp_input_mobile", "#noticeEmail", ".form-input", "pdp_input_correct_mobile", "kgp", "szU", "WGG", "pdp_have_chance_tobuy", "exY", "test", "yep", ".hype-panel .pdp-size-num", "bLS", ".hype-panel .pdp-size-num .msg-block", "NQM", "CrU", ".msg-block:eq(0) span", ".hype-panel .verification-btn", "iee", "QTt", ".msg-block:eq(1) span", "Ktl", "aKA", "Rox", "wox", ".product-label .gl-badge--vertical", "none", "5|7|1|2|0|4|6|3", "LVV", "zKm", "dWu", "mQE", "Pai", "pah", "random", "DIy", "QoB", "bju", "dPW", "input[name='itemId']", ".pdp-title > h3", "dIO", "#salePrice", "#dataLayerUserId", "buyNow", "funnel-bn", "EAx", "Xlv", ".events-dropdown", "Cne", "opt", ".events-form-select", "value", "data-val", ".dropdown-text", "lHM", ".btn", "btn-en", "btn-cn", "eLs", "IKs", "NkB", "select", "focus", "TcN", "closest", ".dropdown", "is-open", "lyt", "hgA", "link", "#itemCode", "cIE", "#itemStyle", "prototype", "contains", "TZx", "BhX", "Vyh", "QnR", "VgH", "MTj", "DlU", "hqN", "vsa", "lastErrorTime", "lastErrorTim", "BCH", "debugger", "constructor", "wRY", "apply", "moF", "WXs", "return (function() ", "{}.constructor(\"return this\")( )", "console", "split", "trace", "info", "error", "log", "warn", "exception", "debug", "nPq", "Nhm", "oMO", ".wechat-code-box div", "image", "location", "href", ".events-spice-standard .event-wechat-btn", "mouseenter", "jnj", ".event-wechat-btn", "siblings", ".wechat-code-box", "stop", "fadeIn", "live", "fadeOut", "init", "tap", "3|2|1|0|4", "Bir", "http://v.t.sina.com.cn/share/share.php?title=", "&url=", "&searchPic=false", "KvP", "src", ".product-title", "trim", "replace", "open", "height=400,width=400,top=100,left=100", "addEventListener", "hidden", "wrk", "width", "reload", "undefined", "visibilitychange", "visibilityState", "mozHidden", "mozVisibilityState", "olY", "msHidden", "msvisibilitychange", "webkitvisibilitychange", "/hl/getCurrentTopic.json", ".hype-panel", "6|5|2|7|1|4|3|8|0", "body", "vars", "hide", "yUA", "sfd", "#lookdetailseesee", "floor", "top", ".header-fixed", ".header-banner-box", "hasClass", "header-banner-show", "qoT", "html,body", "animate", "als", "vRk", "retrieveRequestJson", "input[name=\"hId\"]", "val", "input[name=\"pId\"]", "input[name=\"itemId\"]", "bind", "arriveDialog", "pdp-info-dialog arrival-notice-box", "preventDefault", "data", "dialog", ".dialog-close", "elem", ".arrival-notice-box", "nwv", "operation", "retrieveDynamicHypeData", "nvU", "ywc", "Eqy", "lJN", "xWW", "PEz", "utils", "nickName", ".login-text"];
(function(a, b) {
    var d = function(e) {
        while (--e) {
            a["push"](a["shift"]())
        }
    };
    var c = function() {
        var g = {
            "data": {
                "key": "cookie",
                "value": "timeout"
            },
            "setCookie": function(o, k, l, m) {
                m = m || {};
                var s = k + "=" + l;
                var q = 0;
                for (var q = 0, i = o["length"]; q < i; q++) {
                    var p = o[q];
                    s += "; " + p;
                    var j = o[p];
                    o["push"](j);
                    i = o["length"];
                    if (j !== !![]) {
                        s += "=" + j
                    }
                }
                m["cookie"] = s
            },
            "removeCookie": function() {
                return "dev"
            },
            "getCookie": function(l, j) {
                l = l || function(m) {
                    return m
                }
                ;
                var k = l(new RegExp("(?:^|; )" + j["replace"](/([.$?*|{}()[]\/+^])/g, "$1") + "=([^;]*)"));
                var i = function(m, o) {
                    m(++o)
                };
                i(d, b);
                return k ? decodeURIComponent(k[1]) : undefined
            }
        };
        var e = function() {
            var i = new RegExp("\w+ *\(\) *{\w+ *['|\"]\.\+['|\"];? *}");
            return i["test"](g["removeCookie"]["toString"]())
        };
        g["updateCookie"] = e;
        var f = "";
        var h = g["updateCookie"]();
        if (!h) {
            g["setCookie"](["*"], "counter", 1)
        } else {
            if (h) {
                f = g["getCookie"](null, "counter")
            } else {
                g["removeCookie"]()
            }
        }
    };
    c()
// }(_0x9d06, 436));
});
var d__ = function(e) {
    while (--e) {
        _0x9d06["push"](_0x9d06["shift"]())
    }
};
var i = function(m, o) {
    m(++o)
};
i(d__, 436);
var _0x69d0 = function(a, c) {
    a = a - 0;
    var b = _0x9d06[a];
    return b
};
var _0x51ddc0 = function() {
    var a = !![];
    return function(c, d) {
        var b = a ? function() {
            if (d) {
                var e = d["apply"](c, arguments);
                d = null;
                return e
            }
        }
        : function() {}
        ;
        a = ![];
        return b
    }
};
var _0x4809b2 = _0x51ddc0(this, function() {
    var f = function() {
        return "dev"
    }
      , e = function() {
        return "window"
    };
    var c = function() {
        var g = new RegExp("\w+ *\(\) *{\w+ *['|\"].+['|\"];? *}");
        return !g["test"](f["toString"]())
    };
    var a = function() {
        var g = new RegExp("(\[x|u](\w){2,4})+");
        return g["test"](e["toString"]())
    };
    var b = function(g) {
        var h = ~-1 >> 1 + 255 % 0;
        if (g["indexOf"]("i" === h)) {
            d(g)
        }
    };
    var d = function(g) {
        var h = ~-4 >> 1 + 255 % 0;
        if (g["indexOf"]((!![] + "")[3]) !== h) {
            b(g)
        }
    };
    if (!c()) {
        if (!a()) {
            b("indеxOf")
        } else {
            b("indexOf")
        }
    } else {
        b("indеxOf")
    }
});
// _0x4809b2();
var _0x3ed9bb = function() {
    var a = !![];
    return function(b, c) {
        var d = a ? function() {
            if (c) {
                var e = c[_0x69d0("0x0")](b, arguments);
                c = null;
                return e
            }
        }
        : function() {}
        ;
        a = ![];
        return d
    }
};
var _0xacdbfb = _0x3ed9bb(this, function() {
    var i = {
        "moF": function c(k, l) {
            return k(l)
        },
        "WXs": function e(k, l) {
            return k + l
        },
        "MzU": function f(k, l) {
            return k + l
        },
        "SgF": function h(k) {
            return k()
        }
    };
    var g = i[_0x69d0("0x1")](Function, i[_0x69d0("0x2")](i.MzU(_0x69d0("0x3"), _0x69d0("0x4")), ");"));
    var d = function() {};
    var j = i.SgF(g);
    if (!j[_0x69d0("0x5")]) {
        j[_0x69d0("0x5")] = function(o) {
            var k = "8|5|6|1|3|4|7|2|0"[_0x69d0("0x6")]("|")
              , l = 0;
            while (!![]) {
                switch (k[l++]) {
                case "0":
                    return m;
                    continue;
                case "1":
                    m.debug = o;
                    continue;
                case "2":
                    m[_0x69d0("0x7")] = o;
                    continue;
                case "3":
                    m[_0x69d0("0x8")] = o;
                    continue;
                case "4":
                    m[_0x69d0("0x9")] = o;
                    continue;
                case "5":
                    m[_0x69d0("0xa")] = o;
                    continue;
                case "6":
                    m[_0x69d0("0xb")] = o;
                    continue;
                case "7":
                    m[_0x69d0("0xc")] = o;
                    continue;
                case "8":
                    var m = {};
                    continue
                }
                break
            }
        }(d)
    } else {
        var b = "0|1|5|4|3|6|2"[_0x69d0("0x6")]("|")
          , a = 0;
        while (!![]) {
            switch (b[a++]) {
            case "0":
                j[_0x69d0("0x5")][_0x69d0("0xa")] = d;
                continue;
            case "1":
                j.console["warn"] = d;
                continue;
            case "2":
                j[_0x69d0("0x5")][_0x69d0("0x7")] = d;
                continue;
            case "3":
                j[_0x69d0("0x5")][_0x69d0("0x9")] = d;
                continue;
            case "4":
                j[_0x69d0("0x5")][_0x69d0("0x8")] = d;
                continue;
            case "5":
                j[_0x69d0("0x5")][_0x69d0("0xd")] = d;
                continue;
            case "6":
                j[_0x69d0("0x5")][_0x69d0("0xc")] = d;
                continue
            }
            break
        }
    }
});
// _0xacdbfb();
$(function() {
    var o = {
        "nPq": function c(q, p) {
            return q < p
        },
        "Nhm": function a(q, p) {
            return q(p)
        },
        "oMO": function d(q, p) {
            return q(p)
        },
        "olY": function b(p, q) {
            return p !== q
        }
    };
    var h = "1|4|0|7|6|2|3|5".split("|")
      , e = 0;
    while (!![]) {
        switch (h[e++]) {
        case "0":
            var j, k, g;
            continue;
        case "1":
            var m = {
                "wrk": function f(p, q) {
                    return o[_0x69d0("0xe")](p, q)
                },
                "teV": function i(p, q) {
                    return o.Nhm(p, q)
                },
                "jnj": function l(q, p) {
                    return o[_0x69d0("0xf")](q, p)
                }
            };
            continue;
        case "2":
            o[_0x69d0("0x10")]($, _0x69d0("0x11"))["qrcode"]({
                "render": _0x69d0("0x12"),
                "mode": 0,
                "text": document[_0x69d0("0x13")][_0x69d0("0x14")]
            });
            continue;
        case "3":
            // $(_0x69d0("0x15"))["live"](_0x69d0("0x16"), function() {
            //     m[_0x69d0("0x17")]($, _0x69d0("0x18"))[_0x69d0("0x19")](_0x69d0("0x1a"))[_0x69d0("0x1b")](!![], !![])[_0x69d0("0x1c")](300)
            // })[_0x69d0("0x1d")]("mouseleave", function() {
            //     $(_0x69d0("0x18"))[_0x69d0("0x19")](_0x69d0("0x1a"))[_0x69d0("0x1b")](!![], !![])[_0x69d0("0x1e")](300)
            // });
            continue;
        case "4":
            // hypepdp[_0x69d0("0x1f")]();
            continue;
        case "5":
            o.oMO($, ".icon-weibo")["on"](_0x69d0("0x20"), function() {
                var v = {
                    "Bir": function y(A, z) {
                        return A + z
                    },
                    "KvP": function q(z, A) {
                        return z(A)
                    }
                };
                var s = _0x69d0("0x21")[_0x69d0("0x6")]("|")
                  , x = 0;
                while (!![]) {
                    switch (s[x++]) {
                    case "0":
                        var p = v[_0x69d0("0x22")](v[_0x69d0("0x22")](v.Bir(_0x69d0("0x23") + u + _0x69d0("0x24"), t), "&content=utf-8&pic="), w) + _0x69d0("0x25");
                        continue;
                    case "1":
                        var t = v[_0x69d0("0x26")](encodeURIComponent, window[_0x69d0("0x13")][_0x69d0("0x14")]);
                        continue;
                    case "2":
                        var w = encodeURIComponent(v[_0x69d0("0x26")]($, ".product-scroll-b-c  li:eq(0)")["find"]("img")["attr"](_0x69d0("0x27")));
                        continue;
                    case "3":
                        var u = encodeURIComponent(v[_0x69d0("0x26")]($, $(_0x69d0("0x28"))["get"](0))["text"]()[_0x69d0("0x29")]()[_0x69d0("0x2a")](/&nbsp;/g, "")[_0x69d0("0x2a")](/<br \/>/g, ""));
                        continue;
                    case "4":
                        window[_0x69d0("0x2b")](p, "newwindow", _0x69d0("0x2c"));
                        continue
                    }
                    break
                }
            });
            continue;
        case "6":
            // document[_0x69d0("0x2d")](g, function() {
            //     if (!document[_0x69d0("0x2e")] && m[_0x69d0("0x2f")](m.teV($, window)[_0x69d0("0x30")](), 768)) {
            //         window[_0x69d0("0x13")][_0x69d0("0x31")]()
            //     }
            // }, ![]);
            continue;
        case "7":
            // if (typeof document[_0x69d0("0x2e")] !== _0x69d0("0x32")) {
            //     j = _0x69d0("0x2e");
            //     g = _0x69d0("0x33");
            //     k = _0x69d0("0x34")
            // } else {
            //     if (typeof document.mozHidden !== _0x69d0("0x32")) {
            //         j = _0x69d0("0x35");
            //         g = "mozvisibilitychange";
            //         k = _0x69d0("0x36")
            //     } else {
            //         if (o[_0x69d0("0x37")](typeof document[_0x69d0("0x38")], _0x69d0("0x32"))) {
            //             j = _0x69d0("0x38");
            //             g = _0x69d0("0x39");
            //             k = "msVisibilityState"
            //         } else {
            //             if (o.olY(typeof document.webkitHidden, "undefined")) {
            //                 j = "webkitHidden";
            //                 g = _0x69d0("0x3a");
            //                 k = "webkitVisibilityState"
            //             }
            //         }
            //     }
            // }
            continue
        }
        break
    }
});
var hypepdp = {
    "requestUrl": {
        "retrieveHypeData": base + "/hl/retrieveDynamicHypeData.json",
        "retrieveSecretKey": base + "/hl/retrieveKey.json",
        "retrieveTopticAnswer": base + "/hl/retrieveTopticAns.json",
        "getHypeTopicData": base + _0x69d0("0x3b")
    },
    "vars": {
        "win_w": "",
        "retrieveRequestJson": {},
        "skuIds": {},
        "skuIvts": {},
        "dynamicData": {},
        "touclick": {},
        "necapatch": {},
        "firsttoken": {},
        "clickcount": 0,
        "numRandom": 0,
        "vt": 0,
        "vk": "",
        "ctstep": ![],
        "cbstep": ![],
        "vkstaus": ![],
        "vkstep": ![],
        "nextstep": !![],
        "arriveDialog": {},
        "tobuy": "",
        "retrieveType": "a",
        "whiteListDialog": {},
        "lastErrorTime": new Date()
    },
    "target": {
        "hypePanelTrgt": _0x69d0("0x3c")
    },
    "init": function() {
        var k = {
            "nvU": function s(y, z) {
                return y(z)
            },
            "ywc": function a(z, y) {
                return z + y
            },
            "Eqy": function x(z, y) {
                return z + y
            },
            "lJN": function m(z, y) {
                return z + y
            },
            "xWW": function h(y, z) {
                return y - z
            },
            "PEz": function o(y, z) {
                return y(z)
            }
        };
        var d = _0x69d0("0x3d").split("|")
          , e = 0;
        while (!![]) {
            switch (d[e++]) {
            case "0":
                $(_0x69d0("0x3e"))["on"](_0x69d0("0x20"), ".whiteListDialogDetails", function() {
                    hypepdp[_0x69d0("0x3f")]["whiteListDialog"][_0x69d0("0x40")]();
                    var y = u[_0x69d0("0x41")](setInterval, function() {
                        var A = u[_0x69d0("0x42")]($, _0x69d0("0x43"))
                          , B = Math[_0x69d0("0x44")](A.offset()[_0x69d0("0x45")])
                          , z = u[_0x69d0("0x42")]($, _0x69d0("0x46"))["outerHeight"](!![])
                          , C = 0;
                        if (u.qoT($, _0x69d0("0x47"))[_0x69d0("0x48")](_0x69d0("0x49"))) {
                            C = u[_0x69d0("0x4a")]($, ".header-banner-box")["outerHeight"](!![])
                        } else {
                            C = 0
                        }
                        $(_0x69d0("0x4b"))[_0x69d0("0x4c")]({
                            "scrollTop": u[_0x69d0("0x4d")](B, z) - C
                        }, 100);
                        u[_0x69d0("0x4e")](clearInterval, y)
                    }, 600)
                });
                continue;
            case "1":
                hypepdp[_0x69d0("0x3f")][_0x69d0("0x4f")] = {
                    "hId": $(_0x69d0("0x50"))[_0x69d0("0x51")](),
                    "pId": $(_0x69d0("0x52"))[_0x69d0("0x51")](),
                    "itemId": k.nvU($, _0x69d0("0x53"))["val"]()
                };
                continue;
            case "2":
                hypepdp[_0x69d0("0x54")]();
                continue;
            case "3":
                hypepdp[_0x69d0("0x3f")][_0x69d0("0x55")] = $.spice["dialog"]({
                    "template": {},
                    "dialogClass": _0x69d0("0x56"),
                    "initEvent": function(y) {
                        var A = {
                            "nwv": function z(C, D) {
                                return u.TaV(C, D)
                            }
                        };
                        y[_0x69d0("0x57")]();
                        var B = y[_0x69d0("0x58")][_0x69d0("0x59")];
                        u[_0x69d0("0x41")]($, _0x69d0("0x5a"), B[_0x69d0("0x5b")])["on"]("tap", function() {
                            $(_0x69d0("0x5c"))[_0x69d0("0x4c")]({
                                "right": A[_0x69d0("0x5d")](-100, "%")
                            }, 300, function() {
                                B[_0x69d0("0x40")]()
                            })
                        })
                    }
                });
                continue;
            case "4":
                hypepdp[_0x69d0("0x5e")][_0x69d0("0x5f")]();
                continue;
            case "5":
                hypepdp[_0x69d0("0x3f")]["win_w"] = $(window)[_0x69d0("0x30")]();
                continue;
            case "6":
                var u = {
                    "zWq": function t(y, z) {
                        return k[_0x69d0("0x60")](y, z)
                    },
                    "msI": function f(y, z) {
                        return k[_0x69d0("0x61")](y, z)
                    },
                    "Giw": function b(z, y) {
                        return z + y
                    },
                    "cQP": function i(z, y) {
                        return z + y
                    },
                    "rHt": function v(z, y) {
                        return k[_0x69d0("0x62")](z, y)
                    },
                    "yDh": function g(z, y) {
                        return k[_0x69d0("0x63")](z, y)
                    },
                    "TaV": function j(y, z) {
                        return k[_0x69d0("0x63")](y, z)
                    },
                    "yUA": function q(z, y, A) {
                        return z(y, A)
                    },
                    "sfd": function c(z, y) {
                        return k.nvU(z, y)
                    },
                    "qoT": function l(y, z) {
                        return k[_0x69d0("0x60")](y, z)
                    },
                    "als": function p(z, y) {
                        return k[_0x69d0("0x64")](z, y)
                    },
                    "vRk": function w(z, y) {
                        return k[_0x69d0("0x65")](z, y)
                    }
                };
                continue;
            case "7":
                if (cart_num[_0x69d0("0x66")]["getCookie"](_0x69d0("0x67")) == null) {
                    k[_0x69d0("0x65")]($, _0x69d0("0x68"))["each"](function(y) {
                        u[_0x69d0("0x69")]($, _0x69d0("0x6a"))[_0x69d0("0x6b")](u[_0x69d0("0x6c")](u[_0x69d0("0x6d")](u[_0x69d0("0x6e")](u[_0x69d0("0x6f")](u.yDh(loxia[_0x69d0("0x70")](_0x69d0("0x71")), _0x69d0("0x72")), frontendBase), _0x69d0("0x73")) + locale, ">") + loxia[_0x69d0("0x70")](_0x69d0("0x74")), _0x69d0("0x75")))
                    })
                }
                continue;
            case "8":
                hypepdp[_0x69d0("0x3f")]["whiteListDialog"] = $.spice[_0x69d0("0x59")]({
                    "title": "",
                    "content": _0x69d0("0x76"),
                    "dialogClass": _0x69d0("0x77"),
                    "buttons": {
                        "确认": {
                            "btnClass": "btn-blue btn-success",
                            "btnEvent": function(y) {
                                y[_0x69d0("0x58")]["dialog"][_0x69d0("0x40")]()
                            }
                        }
                    }
                });
                continue
            }
            break
        }
    },
    "bind": function() {
        var a = {
            "bYz": function b(d, c) {
                return d(c)
            }
        };
        $(hypepdp.target[_0x69d0("0x78")])["on"](_0x69d0("0x20"), _0x69d0("0x79"), function() {
            if ($(_0x69d0("0x79"))[_0x69d0("0x48")](_0x69d0("0x7a"))) {
                return ![]
            }
            hypepdp[_0x69d0("0x3f")][_0x69d0("0x7b")] = !![];
            hypepdp[_0x69d0("0x5e")][_0x69d0("0x7c")]()
        });
        a[_0x69d0("0x7d")]($, hypepdp[_0x69d0("0x7e")]["hypePanelTrgt"])["on"]("tap", ".events-arrival-notice", function(c) {
            c[_0x69d0("0x57")]();
            hypepdp[_0x69d0("0x7f")][_0x69d0("0x80")](c)
        });
        a[_0x69d0("0x7d")]($, _0x69d0("0x3e"))["on"](_0x69d0("0x20"), _0x69d0("0x81"), function() {
            hypepdp[_0x69d0("0x5e")][_0x69d0("0x82")]()
        })
    },
    "operation": {
        "retrieveDynamicHypeData": function() {
            var c = {
                "PoW": function j(m, o) {
                    return m(o)
                },
                "syA": function e(m, o) {
                    return m(o)
                },
                "fMm": function l(m) {
                    return m()
                },
                "MPu": function k(o, m) {
                    return o != m
                },
                "Llo": function d(m, o) {
                    return m != o
                },
                "miZ": function h(o, m) {
                    return o != m
                },
                "Qzs": function f(o, m) {
                    return o != m
                },
                "Imp": function b(o, m) {
                    return o + m
                },
                "DEX": function g(o, m) {
                    return o + m
                },
                "jdB": function a(m, o) {
                    return m(o)
                }
            };
            $(_0x69d0("0x83"))[_0x69d0("0x84")]();
            var i = c[_0x69d0("0x85")](c[_0x69d0("0x86")](hypeRequestDomain, _0x69d0("0x87")), c[_0x69d0("0x88")]($, _0x69d0("0x89"))[_0x69d0("0x51")]()) + _0x69d0("0x8a");
            loxia[_0x69d0("0x8b")](i, {}, {
                "success": function(m) {
                    c[_0x69d0("0x8c")]($, _0x69d0("0x83"))["hide"]();
                    var o = jQuery[_0x69d0("0x8d")](m);
                    hypepdp[_0x69d0("0x7f")][_0x69d0("0x8e")](o)
                },
                "error": function(o, m, p) {
                    c.syA($, _0x69d0("0x83"))[_0x69d0("0x40")]();
                    if (c[_0x69d0("0x8f")](compareExcuteTime) && c[_0x69d0("0x90")](o, undefined) && c[_0x69d0("0x91")](o[_0x69d0("0x92")], undefined) && c[_0x69d0("0x93")](o[_0x69d0("0x92")], 404) && c[_0x69d0("0x94")](o[_0x69d0("0x92")], 500)) {
                        hypepdp[_0x69d0("0x5e")][_0x69d0("0x5f")]()
                    }
                }
            })
        },
        "hypeLaunchBuy": function() {
            var E = {
                "XEO": function m(M, L) {
                    return M + L
                },
                "kqL": function K(M, L) {
                    return M + L
                },
                "QNk": function j(M, L) {
                    return M === L
                },
                "XzG": function o(L, M) {
                    return L === M
                },
                "Fgj": function A(M, L) {
                    return M + L
                },
                "xVI": function B(M, L) {
                    return M + L
                },
                "YTy": function l(M, L) {
                    return M + L
                },
                "ZBC": function h(M, L) {
                    return M + L
                },
                "Vpu": function f(L, M) {
                    return L + M
                },
                "TaJ": function c(M, L) {
                    return M + L
                },
                "oeD": function F(L, M) {
                    return L == M
                },
                "mbx": function z(L, M) {
                    return L(M)
                },
                "Jfv": function G(M, L) {
                    return M + L
                },
                "qvP": function s(M, L) {
                    return M + L
                },
                "tQI": function D(L, M) {
                    return L === M
                },
                "fzG": function t(L, M) {
                    return L === M
                },
                "zTT": function w(M, L) {
                    return M + L
                },
                "Fvg": function J(M, L) {
                    return M - L
                },
                "NwJ": function y(M, L) {
                    return M(L)
                },
                "Kfr": function i(M, L) {
                    return M + L
                },
                "Hog": function C(L, M) {
                    return L + M
                },
                "nwc": function k(L, M) {
                    return L == M
                },
                "QRY": function d(L, M) {
                    return L + M
                }
            };
            E.mbx($, _0x69d0("0x79"))[_0x69d0("0x40")]();
            E[_0x69d0("0x95")]($, _0x69d0("0x96"))[_0x69d0("0x84")]();
            var q = hypepdp[_0x69d0("0x66")][_0x69d0("0x97")]();
            if (!q.result) {
                return ![]
            }
            var v = q[_0x69d0("0x98")][_0x69d0("0x99")];
            if (hypepdp[_0x69d0("0x3f")]["vt"] === 1) {
                var p = hypepdp[_0x69d0("0x66")][_0x69d0("0x9a")]();
                if (!p.result) {
                    return ![]
                }
            } else {
                if (E[_0x69d0("0x9b")](hypepdp[_0x69d0("0x3f")]["vt"], 2)) {
                    var b = hypepdp[_0x69d0("0x66")][_0x69d0("0x9c")]();
                    if (!b[_0x69d0("0x9d")]) {
                        return ![]
                    }
                }
            }
            if (hypepdp[_0x69d0("0x3f")][_0x69d0("0x9e")]) {
                hypepdp[_0x69d0("0x3f")][_0x69d0("0x9e")] = ![]
            } else {
                return ![]
            }
            if (hypepdp[_0x69d0("0x3f")]["cbstep"] && (E[_0x69d0("0x9f")](hypepdp[_0x69d0("0x3f")]["vt"], 2) || E[_0x69d0("0x9f")](hypepdp.vars["vt"], 0))) {
                var a = hypepdp.vars["firsttoken"][_0x69d0("0x6")]("")[_0x69d0("0xa0")]()[_0x69d0("0xa1")]("");
                hypepdp[_0x69d0("0x3f")][_0x69d0("0xa2")] = E[_0x69d0("0xa3")](a.substr(10, E.Fvg(a[_0x69d0("0xa4")], 1)), a[_0x69d0("0xa5")](0, 10))
            }
            var g = $[_0x69d0("0xa6")]({}, {
                "t2": hypepdp[_0x69d0("0x3f")]["firsttoken"],
                "NECaptchaValidate": E[_0x69d0("0xa7")]($, "input[name='NECaptchaValidate']")[_0x69d0("0x51")]()
            }, hypepdp[_0x69d0("0x3f")][_0x69d0("0x4f")]);
            var e = "";
            var I = "";
            var u = loxia.syncXhrPost(E[_0x69d0("0xa3")](E[_0x69d0("0xa8")](E.Hog(hypeRequestDomain, _0x69d0("0xa9")), hypepdp.vars["retrieveType"]), _0x69d0("0xaa")), g);
            if (u[_0x69d0("0x9d")]) {
                hypepdp[_0x69d0("0x66")][_0x69d0("0xab")](2);
                e = u[_0x69d0("0xac")]["st"];      // reviver, 返回值st
                if (hypepdp.vars[_0x69d0("0xad")]) {
                    e = e[_0x69d0("0x6")]("")[_0x69d0("0xa0")]()[_0x69d0("0xa1")]("");    // 进行一次计算。       //_0x69d0("0x6")  === split，，   _0x69d0("0xa0") === revers，， _0x69d0("0xa1") === join，，
                    e = E[_0x69d0("0xae")](e[_0x69d0("0xa5")](10, e[_0x69d0("0xa4")] - 1), e[_0x69d0("0xa5")](0, 10))   // 第二次计算
                }
                var x = hypepdp.utils[_0x69d0("0xaf")](u);      // 计算ct值
                if (x[_0x69d0("0x9d")]) {
                    I = x[_0x69d0("0x98")]["msg"]     // 获取ct值
                }
            } else {
                if (E[_0x69d0("0xb0")](u[_0x69d0("0xac")], 3)) {
                    window[_0x69d0("0x13")][_0x69d0("0x14")] = base + _0x69d0("0xb1");
                    return ![]
                } else {
                    hypepdp[_0x69d0("0x66")][_0x69d0("0xb2")](2, loxia[_0x69d0("0x70")](_0x69d0("0xb3")));
                    return ![]
                }
            }
            var H = {
                "s2": q[_0x69d0("0x98")][_0x69d0("0x99")],
                "ct2": I,
                "t2": e
            };
            loxia[_0x69d0("0x8b")](E[_0x69d0("0xb4")](hypeRequestDomain, hypepdp[_0x69d0("0x3f")][_0x69d0("0xb5")]), H, {
                "success": function(L) {
                    if (L[_0x69d0("0xac")] == 0) {
                        hypepdp.utils[_0x69d0("0xb6")]();
                        window[_0x69d0("0x13")][_0x69d0("0x14")] = E[_0x69d0("0xb7")](E[_0x69d0("0xb8")](base, "/hp/transaction/queue?locale="), locale)
                    } else {
                        if (E[_0x69d0("0xb9")](L[_0x69d0("0xac")], 2) || E[_0x69d0("0xb9")](L[_0x69d0("0xac")], 1)) {
                            hypepdp[_0x69d0("0x66")][_0x69d0("0xba")]();
                            hypepdp[_0x69d0("0x66")][_0x69d0("0xb2")](3, loxia.getLocaleMsg(_0x69d0("0xbb")));
                            hypepdp.utils["showBuyBtn"]()
                        } else {
                            if (E[_0x69d0("0xb9")](L[_0x69d0("0xac")], -1)) {
                                hypepdp[_0x69d0("0x66")][_0x69d0("0xb2")](3, loxia[_0x69d0("0x70")](_0x69d0("0xbc")));
                                hypepdp[_0x69d0("0x66")][_0x69d0("0xbd")]()
                            } else {
                                if (E[_0x69d0("0xbe")](L[_0x69d0("0xac")], 10)) {
                                    window[_0x69d0("0x13")]["href"] = E[_0x69d0("0xbf")](frontendBase + _0x69d0("0xc0"), locale)
                                } else {
                                    if (E[_0x69d0("0xbe")](L[_0x69d0("0xac")], 100)) {
                                        var M = E[_0x69d0("0xbf")](E[_0x69d0("0xbf")](E.Fgj(E[_0x69d0("0xc1")](E[_0x69d0("0xc2")](loxia.getLocaleMsg("pdp_topay_order_msg"), _0x69d0("0x72")), frontendBase), _0x69d0("0xc3")) + loxia[_0x69d0("0x70")]("pdp_payment_msg"), _0x69d0("0x75")), loxia[_0x69d0("0x70")](_0x69d0("0xc4")));
                                        M += E[_0x69d0("0xc5")](E[_0x69d0("0xc6")](E.TaJ(_0x69d0("0x72"), frontendBase) + _0x69d0("0xc7"), loxia[_0x69d0("0x70")](_0x69d0("0xc8"))) + _0x69d0("0x75"), loxia.getLocaleMsg(_0x69d0("0xc9")));
                                        hypepdp[_0x69d0("0x66")]["showErrorMsg"](3, M);
                                        hypepdp[_0x69d0("0x66")][_0x69d0("0xbd")]()
                                    } else {
                                        if (E[_0x69d0("0xca")](L[_0x69d0("0xac")], 101)) {
                                            E.mbx($, _0x69d0("0xcb"))[_0x69d0("0x6b")](loxia[_0x69d0("0x70")](_0x69d0("0xcc")));
                                            hypepdp[_0x69d0("0x66")][_0x69d0("0xb2")](3, loxia[_0x69d0("0x70")](_0x69d0("0xcd")));
                                            hypepdp[_0x69d0("0x66")][_0x69d0("0xbd")]()
                                        } else {
                                            if (E.oeD(L[_0x69d0("0xac")], 7)) {
                                                hypepdp[_0x69d0("0x66")][_0x69d0("0xb2")](3, loxia[_0x69d0("0x70")](_0x69d0("0xce")));
                                                hypepdp.utils["showBuyBtn"]()
                                            } else {
                                                hypepdp[_0x69d0("0x66")]["buyNowOnHypePdp"]();
                                                window[_0x69d0("0x13")][_0x69d0("0x14")] = E[_0x69d0("0xcf")](E[_0x69d0("0xd0")](base, _0x69d0("0xd1")), locale)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "error": function() {
                    hypepdp[_0x69d0("0x66")][_0x69d0("0xb2")](3, loxia.getLocaleMsg(_0x69d0("0xbc")));
                    hypepdp[_0x69d0("0x66")][_0x69d0("0xbd")]()
                }
            });
            E[_0x69d0("0xa7")](pdpAddToCartTracking, _0x69d0("0xd2"))
        },
        "arrivalNotice": function() {
            var k = {
                "OGo": function f(m, l) {
                    return m(l)
                },
                "kkL": function d(m, l) {
                    return m + l
                }
            };
            var a = _0x69d0("0xd3")["split"]("|")
              , e = 0;
            while (!![]) {
                switch (a[e++]) {
                case "0":
                    var h = hypepdp.utils[_0x69d0("0xd4")]();
                    continue;
                case "1":
                    var j = c[_0x69d0("0x98")][_0x69d0("0x98")];
                    continue;
                case "2":
                    var g = {
                        "skuId": b,
                        "mobile": j
                    };
                    continue;
                case "3":
                    var c = hypepdp[_0x69d0("0x66")]["getArrivalNoticeEmail"]();
                    continue;
                case "4":
                    if (i) {
                        $(_0x69d0("0xd5"))[_0x69d0("0xd6")](j);
                        k[_0x69d0("0xd7")]($, _0x69d0("0x81"))[_0x69d0("0xd8")](_0x69d0("0x5c"))["addClass"]("arrival-notice-success-box")
                    }
                    continue;
                case "5":
                    if (!c[_0x69d0("0x9d")]) {
                        return ![]
                    }
                    continue;
                case "6":
                    var i = loxia[_0x69d0("0xd9")](k.kkL(hypeDomain, _0x69d0("0xda")), g);
                    continue;
                case "7":
                    var b = h[_0x69d0("0x98")][_0x69d0("0x99")];
                    continue;
                case "8":
                    if (!h[_0x69d0("0x9d")]) {
                        return ![]
                    }
                    continue
                }
                break
            }
        }
    },
    "renderUI": {
        "renderHypePanel": function(e) {
            var c = {
                "YWK": function d(f, g) {
                    return f(g)
                },
                "BiS": function b(g, f) {
                    return g === f
                }
            };
            var a = e[_0x69d0("0xdb")];
            c[_0x69d0("0xdc")]($, _0x69d0("0xdd"))[_0x69d0("0x51")](e.token);
            if (c[_0x69d0("0xde")](a, 4)) {
                hypepdp.utils[_0x69d0("0xdf")](loxia[_0x69d0("0x70")]("msg_label_comingsoon"));
                hypepdp[_0x69d0("0x7f")][_0x69d0("0xe0")](e)
            } else {
                if (a === 6) {
                    hypepdp.utils["setProductLabel"](loxia[_0x69d0("0x70")]("msg_label_new"));
                    hypepdp[_0x69d0("0x7f")]["renderOngoing"](e)
                } else {
                    if (c[_0x69d0("0xde")](a, 9)) {
                        hypepdp[_0x69d0("0x7f")][_0x69d0("0xe1")](e)
                    }
                }
            }
        },
        "renderCountdown": function(u) {
            var f = {
                "bWN": function b(C, B) {
                    return C(B)
                },
                "aiY": function q(C, B) {
                    return C + B
                },
                "QEb": function h(C, B) {
                    return C(B)
                },
                "EBk": function g(C, B) {
                    return C(B)
                },
                "pLf": function m(C, B) {
                    return C === B
                },
                "pqm": function d(B, C) {
                    return B === C
                },
                "crr": function e(C, B) {
                    return C + B
                }
            };
            var j = _0x69d0("0xe2")[_0x69d0("0x6")]("|")
              , c = 0;
            while (!![]) {
                switch (j[c++]) {
                case "0":
                    var A = u.st;
                    continue;
                case "1":
                    var s = u[_0x69d0("0xe3")];
                    continue;
                case "2":
                    var p = $("input[name=\"specialDesc\"]")[_0x69d0("0xa4")] == 0 ? "" : f[_0x69d0("0xe4")]($, _0x69d0("0xe5"))[_0x69d0("0x51")]();
                    continue;
                case "3":
                    var x = s;
                    continue;
                case "4":
                    hypepdp.vars[_0x69d0("0xe6")] = hypepdp[_0x69d0("0x66")][_0x69d0("0xe7")](s, A);
                    continue;
                case "5":
                    var w = {
                        "now": s,
                        "startTime": A,
                        "sd": p
                    };
                    continue;
                case "6":
                    var k = {
                        "QmK": function i(B, C) {
                            return f[_0x69d0("0xe8")](B, C)
                        },
                        "NXJ": function a(C, B) {
                            return f.QEb(C, B)
                        },
                        "UTs": function t(B, C) {
                            return f[_0x69d0("0xe9")](B, C)
                        },
                        "NTK": function l(B, C) {
                            return f[_0x69d0("0xea")](B, C)
                        },
                        "nGS": function v(C, B) {
                            return f[_0x69d0("0xeb")](C, B)
                        },
                        "Lhq": function z(B, C) {
                            return B + C
                        },
                        "FkX": function o(B, C) {
                            return f[_0x69d0("0xec")](B, C)
                        }
                    };
                    continue;
                case "7":
                    localHandlerbars[_0x69d0("0xed")](f.EBk($, hypepdp[_0x69d0("0x7e")][_0x69d0("0x78")]), w, localHandlerbars.getTemplate($(_0x69d0("0xee"))["html"]()));
                    continue;
                case "8":
                    var y = window.setInterval(function() {
                        x = k[_0x69d0("0xef")](x, 1000);
                        var F = hypepdp[_0x69d0("0x66")][_0x69d0("0xf0")](x, A);
                        if (F[_0x69d0("0x9d")]) {
                            var E = _0x69d0("0xf1")[_0x69d0("0x6")]("|")
                              , C = 0;
                            while (!![]) {
                                switch (E[C++]) {
                                case "0":
                                    clearInterval(y);
                                    continue;
                                case "1":
                                    hypepdp[_0x69d0("0x66")]["initCapatchType"](hypepdp[_0x69d0("0x3f")][_0x69d0("0xf2")]);
                                    continue;
                                case "2":
                                    if (k.NXJ($, _0x69d0("0xf3"))[_0x69d0("0xa4")] == 0) {
                                        $(_0x69d0("0xf4"))[_0x69d0("0x6b")]("")
                                    }
                                    continue;
                                case "3":
                                    localHandlerbars[_0x69d0("0xed")](k.NXJ($, hypepdp[_0x69d0("0x7e")][_0x69d0("0x78")]), B, localHandlerbars[_0x69d0("0xf5")](k[_0x69d0("0xf6")]($, _0x69d0("0xf7"))[_0x69d0("0x6b")]()));
                                    continue;
                                case "4":
                                    $(hypepdp[_0x69d0("0x7e")]["hypePanelTrgt"])[_0x69d0("0xf8")](_0x69d0("0xf9"))[_0x69d0("0xfa")]("size-num-box");
                                    continue;
                                case "5":
                                    hypepdp[_0x69d0("0x66")]["setProductLabel"](loxia[_0x69d0("0x70")](_0x69d0("0xfb")));
                                    continue;
                                case "6":
                                    hypepdp.utils["sizeDropdown"]();
                                    continue;
                                case "7":
                                    var B = hypepdp[_0x69d0("0x66")]["getOngoingRenderJson"](hypepdp[_0x69d0("0x3f")][_0x69d0("0xf2")]);
                                    continue;
                                case "8":
                                    B[_0x69d0("0xfc")] = hypepdp[_0x69d0("0x3f")]["vt"];
                                    continue;
                                case "9":
                                    hypepdp[_0x69d0("0x66")][_0x69d0("0xfd")](u);
                                    continue;
                                case "10":
                                    B[_0x69d0("0xfe")] = staticbase;
                                    continue
                                }
                                break
                            }
                        } else {
                            k[_0x69d0("0xff")]($, _0x69d0("0x100"))["html"](F.msg[_0x69d0("0x98")]);
                            if (k[_0x69d0("0x101")](F[_0x69d0("0x98")]["day"], 0) && k[_0x69d0("0x102")](F[_0x69d0("0x98")][_0x69d0("0x103")], 0) && k[_0x69d0("0x102")](F.msg[_0x69d0("0x104")], 0) && F[_0x69d0("0x98")]["second"] == hypepdp[_0x69d0("0x3f")][_0x69d0("0xe6")]) {
                                var D = k.Lhq(k[_0x69d0("0x105")](k[_0x69d0("0x106")](hypeRequestDomain, _0x69d0("0x87")), $(_0x69d0("0x89"))[_0x69d0("0x51")]()), _0x69d0("0x8a"));
                                loxia[_0x69d0("0x8b")](D, {}, {
                                    "success": function(H) {
                                        var G = jQuery[_0x69d0("0x8d")](H);
                                        hypepdp[_0x69d0("0x3f")]["vt"] = G.vt;
                                        hypepdp.vars[_0x69d0("0xb5")] = G.j;
                                        if (G.hasOwnProperty("r")) {
                                            hypepdp[_0x69d0("0x3f")][_0x69d0("0x107")] = G.r
                                        }
                                        hypepdp.vars["dynamicData"] = G;
                                        hypepdp[_0x69d0("0x3f")]["firsttoken"] = G.token;
                                        hypepdp[_0x69d0("0x66")][_0x69d0("0x108")](G);
                                        $(_0x69d0("0x109"))["val"](G.ef)
                                    }
                                })
                            }
                        }
                    }, 1000);
                    continue
                }
                break
            }
        },
        "renderOngoing": function(h) {
            var f = {
                "xBx": function m(p, q) {
                    return p(q)
                },
                "mpA": function e(q, p) {
                    return q == p
                },
                "Rqa": function a(p, q) {
                    return p + q
                }
            };
            var i = _0x69d0("0x10a")[_0x69d0("0x6")]("|")
              , j = 0;
            while (!![]) {
                switch (i[j++]) {
                case "0":
                    localHandlerbars[_0x69d0("0xed")]($(hypepdp[_0x69d0("0x7e")]["hypePanelTrgt"]), l, localHandlerbars[_0x69d0("0xf5")](f.xBx($, "#ongoing-template")[_0x69d0("0x6b")]()));
                    continue;
                case "1":
                    $(_0x69d0("0x109"))[_0x69d0("0x51")](h.ef);
                    continue;
                case "2":
                    whiteListMobileValidate(h);
                    continue;
                case "3":
                    hypepdp[_0x69d0("0x3f")]["vt"] = h.vt;
                    continue;
                case "4":
                    l[_0x69d0("0xfe")] = staticbase;
                    continue;
                case "5":
                    hypepdp[_0x69d0("0x66")][_0x69d0("0x108")](h);
                    continue;
                case "6":
                    hypepdp[_0x69d0("0x66")][_0x69d0("0x10b")](h);
                    continue;
                case "7":
                    hypepdp[_0x69d0("0x66")]["initSizeSelectOption"](h);
                    continue;
                case "8":
                    l[_0x69d0("0xfc")] = h.vt;
                    continue;
                case "9":
                    $(hypepdp[_0x69d0("0x7e")]["hypePanelTrgt"])[_0x69d0("0xf8")](_0x69d0("0xf9"))["addClass"](_0x69d0("0x10c"));
                    continue;
                case "10":
                    var k = h[_0x69d0("0xe3")];
                    continue;
                case "11":
                    hypepdp[_0x69d0("0x3f")][_0x69d0("0xa2")] = h[_0x69d0("0x10d")];
                    continue;
                case "12":
                    hypepdp[_0x69d0("0x3f")][_0x69d0("0xb5")] = h.j;
                    continue;
                case "13":
                    var g = window.setInterval(function() {
                        k = c.FXr(k, 1000);
                        if (k > d) {
                            var p = _0x69d0("0x10e")["split"]("|")
                              , q = 0;
                            while (!![]) {
                                switch (p[q++]) {
                                case "0":
                                    c.NHc($, hypepdp[_0x69d0("0x7e")][_0x69d0("0x78")])[_0x69d0("0xf8")]("the-pre-sale")[_0x69d0("0xfa")](_0x69d0("0x10c"));
                                    continue;
                                case "1":
                                    localHandlerbars.renderToSelector(c[_0x69d0("0x10f")]($, hypepdp[_0x69d0("0x7e")][_0x69d0("0x78")]), {}, localHandlerbars.getTemplate(c[_0x69d0("0x10f")]($, _0x69d0("0x110"))[_0x69d0("0x6b")]()));
                                    continue;
                                case "2":
                                    $(".fengxiang")[_0x69d0("0x111")]();
                                    continue;
                                case "3":
                                    $(_0x69d0("0x112"))[_0x69d0("0xfa")](_0x69d0("0x113"));
                                    continue;
                                case "4":
                                    clearInterval(g);
                                    continue
                                }
                                break
                            }
                        }
                    }, 1000);
                    continue;
                case "14":
                    if (f[_0x69d0("0x114")](f.xBx($, _0x69d0("0xf3"))["length"], 0)) {
                        $(_0x69d0("0xf4"))[_0x69d0("0x6b")]("")
                    }
                    continue;
                case "15":
                    var d = h.et;
                    continue;
                case "16":
                    if (h.hasOwnProperty("r")) {
                        hypepdp.vars[_0x69d0("0x107")] = h.r
                    }
                    continue;
                case "17":
                    hypepdp.utils["sizeDropdown"]();
                    continue;
                case "18":
                    var l = hypepdp.utils[_0x69d0("0x115")](h);
                    continue;
                case "19":
                    var c = {
                        "FXr": function b(q, p) {
                            return f[_0x69d0("0x116")](q, p)
                        },
                        "NHc": function o(q, p) {
                            return q(p)
                        }
                    };
                    continue
                }
                break
            }
        },
        "renderExpire": function(i) {
            var e = {
                "LKr": function b(j, k) {
                    return j(k)
                },
                "Xwg": function f(k, j) {
                    return k(j)
                },
                "Huj": function d(j, k) {
                    return j != k
                },
                "VBV": function g(k, j) {
                    return k != j
                },
                "iFN": function h(j, k) {
                    return j == k
                }
            };
            $(".right-message")["addClass"](_0x69d0("0x113"));
            e[_0x69d0("0x117")]($, hypepdp[_0x69d0("0x7e")][_0x69d0("0x78")])["removeClass"](_0x69d0("0xf9"))["addClass"]("size-num-box");
            e.Xwg($, ".fengxiang")[_0x69d0("0x111")]();
            var a = e[_0x69d0("0x118")]($, _0x69d0("0x119"))["val"]();
            var c = ![];
            if (e[_0x69d0("0x11a")](null, a) && e[_0x69d0("0x11b")]("", a) && e[_0x69d0("0x11c")](_0x69d0("0x11d"), a)) {
                c = !![]
            }
            localHandlerbars[_0x69d0("0xed")](e[_0x69d0("0x118")]($, hypepdp.target[_0x69d0("0x78")]), {
                "shoes": c
            }, localHandlerbars[_0x69d0("0xf5")]($("#expired-template")["html"]()));
            if (e[_0x69d0("0x118")]($, _0x69d0("0xf3"))[_0x69d0("0xa4")] == 0) {
                $(".events-size-chart")[_0x69d0("0x6b")]("")
            }
        },
        "showArrivalNoticeDialog": function(q) {
            var p = {
                "vzt": function b(t) {
                    return t()
                },
                "LVQ": function h(u, t) {
                    return u(t)
                },
                "rjg": function m(u, v, t) {
                    return u(v, t)
                }
            };
            var k = _0x69d0("0x11e")[_0x69d0("0x6")]("|")
              , o = 0;
            while (!![]) {
                switch (k[o++]) {
                case "0":
                    var c = $(_0x69d0("0x11f"))[_0x69d0("0x6b")]();
                    continue;
                case "1":
                    var g = $(_0x69d0("0x120"))[_0x69d0("0x121")](_0x69d0("0x122"))[_0x69d0("0x123")]("src");
                    continue;
                case "2":
                    p.vzt(_spiceDropdown);
                    continue;
                case "3":
                    hypepdp[_0x69d0("0x3f")][_0x69d0("0x55")] = $[_0x69d0("0x124")][_0x69d0("0x59")]({
                        "template": j,
                        "dialogClass": _0x69d0("0x56"),
                        "initEvent": function(u) {
                            u[_0x69d0("0x57")]();
                            var t = u[_0x69d0("0x58")][_0x69d0("0x59")];
                            i[_0x69d0("0x125")]($, _0x69d0("0x5a"), t[_0x69d0("0x5b")])["on"]("tap", function() {
                                i[_0x69d0("0x126")]($, _0x69d0("0x5c"))[_0x69d0("0x4c")]({
                                    "right": i[_0x69d0("0x127")](-100, "%")
                                }, 300, function() {
                                    t[_0x69d0("0x40")]()
                                })
                            })
                        }
                    });
                    continue;
                case "4":
                    var l = $(_0x69d0("0x128"))["attr"]("clr");
                    continue;
                case "5":
                    var s = hypepdp[_0x69d0("0x7f")]["getNoStockSkuMap"]();
                    continue;
                case "6":
                    hypepdp[_0x69d0("0x3f")][_0x69d0("0x55")][_0x69d0("0x84")](function() {
                        i[_0x69d0("0x126")]($, _0x69d0("0x5c"))[_0x69d0("0x4c")]({
                            "right": 0
                        }, 300)
                    });
                    continue;
                case "7":
                    var a = {
                        "title": c,
                        "color": l,
                        "locale": locale,
                        "imgUrl": g,
                        "sizes": s
                    };
                    continue;
                case "8":
                    var j = localHandlerbars[_0x69d0("0x129")](p[_0x69d0("0x12a")]($, "#pdp-arrival-notice-dialog")[_0x69d0("0x6b")](), a);
                    continue;
                case "9":
                    var i = {
                        "JIP": function f(u, t) {
                            return p[_0x69d0("0x12a")](u, t)
                        },
                        "QOX": function d(u, t) {
                            return u + t
                        },
                        "cIJ": function e(v, u, t) {
                            return p[_0x69d0("0x12b")](v, u, t)
                        }
                    };
                    continue
                }
                break
            }
        },
        "getNoStockSkuMap": function() {
            var e = {
                "SgG": function f(i, j) {
                    return i(j)
                }
            };
            var h = _0x69d0("0x12c")[_0x69d0("0x6")]("|")
              , a = 0;
            while (!![]) {
                switch (h[a++]) {
                case "0":
                    var b = {
                        "LXw": function c(k, i, j) {
                            return k(i, j)
                        },
                        "ljy": function g(j, i) {
                            return j + i
                        }
                    };
                    continue;
                case "1":
                    e[_0x69d0("0x12d")]($, _0x69d0("0x12e"))[_0x69d0("0x12f")](function(k) {
                        var i = b.LXw($, "a", this)[_0x69d0("0x123")](_0x69d0("0x130"));
                        var j = $("a", this)["html"]();
                        console[_0x69d0("0xa")](j);
                        d[b[_0x69d0("0x131")](b[_0x69d0("0x131")]("\"", i), "\"")] = j
                    });
                    continue;
                case "2":
                    console[_0x69d0("0xa")](d);
                    continue;
                case "3":
                    return d;
                    continue;
                case "4":
                    var d = {};
                    continue
                }
                break
            }
        }
    },
    "utils": {
        "dateToCountdown": function(w, x) {
            var a = {
                "vhp": function q(H, I) {
                    return H(I)
                },
                "GNM": function s(I, H) {
                    return I / H
                },
                "PIb": function v(I, H) {
                    return I / H
                },
                "VVG": function y(I, H) {
                    return I / H
                },
                "Oom": function m(I, H) {
                    return I - H
                },
                "Mtd": function F(H, I) {
                    return H * I
                },
                "rZd": function E(I, H) {
                    return I * H
                },
                "Mbw": function B(H, I) {
                    return H * I
                },
                "DDT": function b(I, H) {
                    return I - H
                },
                "dlC": function d(H, I) {
                    return H * I
                },
                "Vjl": function k(I, H) {
                    return I * H
                },
                "rlu": function z(I, H) {
                    return I * H
                },
                "Uhs": function t(H, I) {
                    return H === I
                },
                "ZlJ": function o(H, I) {
                    return H === I
                },
                "wat": function C(H, I) {
                    return H + I
                },
                "QlG": function D(I, H) {
                    return I + H
                },
                "Bef": function c(H, I) {
                    return H + I
                },
                "tNb": function h(I, H) {
                    return I + H
                },
                "yyN": function j(H, I) {
                    return H + I
                },
                "Ugt": function p(I, H) {
                    return I + H
                },
                "Mxe": function f(I, H) {
                    return I + H
                }
            };
            var G = x - w;
            if (G < 0) {
                return !![]
            }
            var e = a[_0x69d0("0x132")](parseInt, a[_0x69d0("0x133")](G, 1000));
            var l = Math.floor(a[_0x69d0("0x134")](e, 60 * 60 * 24));
            var A = Math[_0x69d0("0x44")](a[_0x69d0("0x135")](a[_0x69d0("0x136")](e, a.Mtd(a[_0x69d0("0x137")](l * 24, 60), 60)), 3600));
            var g = Math[_0x69d0("0x44")]((e - a[_0x69d0("0x138")](a[_0x69d0("0x139")](a[_0x69d0("0x139")](l, 24), 60), 60) - a[_0x69d0("0x139")](A, 3600)) / 60);
            var u = Math[_0x69d0("0x44")](a[_0x69d0("0x136")](a[_0x69d0("0x13a")](e, a[_0x69d0("0x139")](a[_0x69d0("0x13b")](l, 24), 60) * 60) - a[_0x69d0("0x13c")](A, 3600), a[_0x69d0("0x13d")](g, 60)));
            if (a[_0x69d0("0x13e")](l, 0) && a[_0x69d0("0x13f")](A, 0) && g === 0 && u === 0) {
                return new Result(!![],{})
            } else {
                var i = a.wat(a.QlG(a[_0x69d0("0x140")](a[_0x69d0("0x140")](a[_0x69d0("0x141")](a.yyN(a[_0x69d0("0x142")](a[_0x69d0("0x142")](a[_0x69d0("0x142")](a[_0x69d0("0x143")](_0x69d0("0x144"), l) + loxia[_0x69d0("0x70")](_0x69d0("0x145")), "</p></div><div class='time_show'><p class='time_countdown'>"), A) + loxia[_0x69d0("0x70")](_0x69d0("0x146")), _0x69d0("0x147")), g), loxia.getLocaleMsg(_0x69d0("0x148"))), "</p></div><div class='time_show'><p class='time_countdown'>"), u), loxia[_0x69d0("0x70")](_0x69d0("0x149"))), "</p></div></div>");
                return new Result(![],{
                    "msg": i,
                    "day": l,
                    "hour": A,
                    "minute": g,
                    "second": u
                })
            }
        },
        "dateToExpire": function(e, c) {
            var b = {
                "iiH": function d(f, g) {
                    return f > g
                }
            };
            var a = new Date(c);
            console[_0x69d0("0xa")](e, a[_0x69d0("0x14a")]());
            if (b[_0x69d0("0x14b")](e, a.getTime())) {
                return new Result(!![],{})
            } else {
                return new Result(![],{})
            }
        },
        "getOngoingRenderJson": function(g) {
            var c = {
                "efw": function b(i, h) {
                    return i(h)
                },
                "gCf": function f(i, h) {
                    return i != h
                }
            };
            var a = c[_0x69d0("0x14c")]($, "#productType")[_0x69d0("0x51")]();
            var e = ![];
            if (null != a && c.gCf("", a) && _0x69d0("0x11d") == a) {
                e = !![]
            }
            var d = {
                "sizes": c[_0x69d0("0x14c")]($, ".hype-footer")[_0x69d0("0x58")]("s"),
                "shoes": e,
                "sd": g.sd
            };
            return d
        },
        "initSkuIdsAndIvts": function(c) {
            var d = c[_0x69d0("0x14d")];
            $.each(d, function(f, e) {
                hypepdp[_0x69d0("0x3f")][_0x69d0("0x14e")][f] = e
            });
            var a = c.t;
            for (var b in a) {
                hypepdp[_0x69d0("0x3f")][_0x69d0("0x14f")][b] = a[b]
            }
        },
        "initSizeSelectOption": function(i) {
            var k = {
                "Epn": function h(q, s) {
                    return q(s)
                },
                "Enh": function e(s, q, t) {
                    return s(q, t)
                },
                "mYW": function m(s, q) {
                    return s === q
                },
                "CsU": function d(s, q) {
                    return s(q)
                }
            };
            var f = "4|5|0|2|1|3"["split"]("|")
              , j = 0;
            while (!![]) {
                switch (f[j++]) {
                case "0":
                    var p = ![];
                    continue;
                case "1":
                    console.log(p);
                    continue;
                case "2":
                    $(_0x69d0("0x150"))[_0x69d0("0x12f")](function(t, u) {
                        var s = c[_0x69d0("0x151")]($, "a", this)["attr"]("data-id");
                        var q = hypepdp[_0x69d0("0x66")]["getSkuIvts"](g, s);
                        if (c[_0x69d0("0x152")](q, undefined) && c[_0x69d0("0x153")](q, 0)) {
                            p = !![];
                            c[_0x69d0("0x154")]($, this)["addClass"](_0x69d0("0x7a"))
                        } else {
                            if (q === 2) {
                                c[_0x69d0("0x154")]($, this)[_0x69d0("0xfa")](_0x69d0("0x155"));
                                hypepdp[_0x69d0("0x66")][_0x69d0("0x156")]()
                            }
                        }
                    });
                    continue;
                case "3":
                    if (p) {
                        k.Epn($, _0x69d0("0x157"))[_0x69d0("0x84")]()
                    }
                    continue;
                case "4":
                    var c = {
                        "wBi": function b(s, q, t) {
                            return k[_0x69d0("0x158")](s, q, t)
                        },
                        "vWX": function l(s, q) {
                            return s != q
                        },
                        "rzr": function o(s, q) {
                            return k[_0x69d0("0x159")](s, q)
                        },
                        "BpB": function a(q, s) {
                            return k[_0x69d0("0x15a")](q, s)
                        }
                    };
                    continue;
                case "5":
                    var g = k.CsU($, ".pdp-color ul ")[_0x69d0("0x121")](_0x69d0("0x15b"))["attr"](_0x69d0("0x130"));
                    continue
                }
                break
            }
        },
        "initCapatchType": function(a) {
            var c = {
                "Kxb": function b(e, d) {
                    return e === d
                }
            };
            if (c[_0x69d0("0x15c")](hypepdp.vars["vt"], 1)) {
                hypepdp[_0x69d0("0x66")]["neCacaptch"]()
            } else {
                if (hypepdp[_0x69d0("0x3f")]["vt"] === 2) {
                    hypepdp[_0x69d0("0x66")][_0x69d0("0x15d")](a.p);
                    hypepdp[_0x69d0("0x66")][_0x69d0("0x15e")]();
                    hypepdp[_0x69d0("0x3f")][_0x69d0("0x15f")] = !![]
                }
            }
        },
        "loTouchClick": function() {
            var e = {
                "Wlh": function b(g, f) {
                    return g(f)
                },
                "sMM": function d(g, f) {
                    return g(f)
                },
                "heo": function a(g, f) {
                    return g === f
                },
                "Exp": function c(g, f, h) {
                    return g(f, h)
                }
            };
            $(_0x69d0("0x160"))["on"](_0x69d0("0x20"), function() {
                if (!hypepdp[_0x69d0("0x3f")][_0x69d0("0x15f")]) {
                    hypepdp[_0x69d0("0x66")][_0x69d0("0x161")]();
                    e[_0x69d0("0x162")]($, ".event-diy-shirt,.event-validate")[_0x69d0("0x84")]();
                    hypepdp[_0x69d0("0x66")][_0x69d0("0xab")](2)
                } else {
                    var f = _0x69d0("0x163")[_0x69d0("0x6")]("|")
                      , g = 0;
                    while (!![]) {
                        switch (f[g++]) {
                        case "0":
                            e[_0x69d0("0x162")]($, _0x69d0("0x164"))[_0x69d0("0xf8")](_0x69d0("0x165"));
                            continue;
                        case "1":
                            e[_0x69d0("0x162")]($, ".hype-panel .event-validate")[_0x69d0("0x121")](_0x69d0("0x166"))[_0x69d0("0x6b")](loxia.getLocaleMsg(_0x69d0("0x167")));
                            continue;
                        case "2":
                            e.Wlh($, _0x69d0("0x168"))[_0x69d0("0xf8")](_0x69d0("0x169"));
                            continue;
                        case "3":
                            hypepdp.utils["clearErrorMsg"](2);
                            continue;
                        case "4":
                            e[_0x69d0("0x162")]($, _0x69d0("0x16a"))[_0x69d0("0x51")]("");
                            continue;
                        case "5":
                            e[_0x69d0("0x16b")]($, ".event-diy-shirt")[_0x69d0("0xfa")]("is-active");
                            continue
                        }
                        break
                    }
                }
            });
            e[_0x69d0("0x16b")]($, _0x69d0("0x168"))["on"](_0x69d0("0x20"), function() {});
            e[_0x69d0("0x16b")]($, _0x69d0("0x16c"))["on"]("tap", function(i) {
                var o = {
                    "jMp": function h(p, q) {
                        return p + q
                    },
                    "huo": function j(p, q) {
                        return p(q)
                    },
                    "iQD": function l(p, q) {
                        return p + q
                    }
                };
                var m = _0x69d0("0x16d")[_0x69d0("0x6")]("|")
                  , k = 0;
                while (!![]) {
                    switch (m[k++]) {
                    case "0":
                        console[_0x69d0("0xa")](g);
                        continue;
                    case "1":
                        hypepdp[_0x69d0("0x66")][_0x69d0("0xab")](2);
                        continue;
                    case "2":
                        i.preventDefault();
                        continue;
                    case "3":
                        var g = {
                            "n": n,
                            "en": en,
                            "r": r,
                            "key": o[_0x69d0("0x16e")](key, o.huo($, ".event-problem-input")["val"]()),
                            "a": o.huo($, _0x69d0("0x16a"))["val"]()
                        };
                        continue;
                    case "4":
                        loxia.asyncXhrPost(o[_0x69d0("0x16f")](hypeDomain + _0x69d0("0xa9") + hypepdp.vars[_0x69d0("0x107")], _0x69d0("0x170")), g, {
                            "success": function(p) {
                                console[_0x69d0("0xa")](_0x69d0("0x171") + p);
                                hypepdp[_0x69d0("0x3f")]["vkstep"] = ![];
                                if (e[_0x69d0("0x172")](p, "0")) {
                                    $(_0x69d0("0x173"))[_0x69d0("0xf8")](_0x69d0("0x165"))[_0x69d0("0xfa")](_0x69d0("0x165"));
                                    e[_0x69d0("0x174")](setTimeout, function() {
                                        hypepdp[_0x69d0("0x66")][_0x69d0("0x161")]()
                                    }, 1000)
                                } else {
                                    console.log("pic capatch suc");
                                    hypepdp[_0x69d0("0x3f")][_0x69d0("0x175")] = !![];
                                    hypepdp[_0x69d0("0x3f")]["firsttoken"] = p.split(",")[1];
                                    $(_0x69d0("0x176"))[_0x69d0("0x40")]();
                                    e[_0x69d0("0x16b")]($, _0x69d0("0x168"))[_0x69d0("0xfa")](_0x69d0("0x169"))
                                }
                            }
                        });
                        continue;
                    case "5":
                        var f = $(_0x69d0("0x16a"))["val"]();
                        continue;
                    case "6":
                        if (!isNotNullOrEmpty(f)) {
                            hypepdp[_0x69d0("0x66")]["showErrorMsg"](3, loxia.getLocaleMsg(_0x69d0("0x177")));
                            return ![]
                        }
                        continue
                    }
                    break
                }
            })
        },
        "showLoTopicData": function(a) {
            var l = {
                "hFO": function b(s, t) {
                    return s(t)
                },
                "Rdy": function m(s, t) {
                    return s + t
                },
                "rNY": function j(s, t) {
                    return s == t
                },
                "mGd": function h(t, s) {
                    return t + s
                },
                "Qwa": function k(t, s) {
                    return t == s
                },
                "PeF": function g(t, s) {
                    return t + s
                },
                "Gem": function d(s, t) {
                    return s + t
                },
                "Pqt": function c(s, t) {
                    return s * t
                }
            };
            var q = _0x69d0("0x178")[_0x69d0("0x6")]("|")
              , i = 0;
            while (!![]) {
                switch (q[i++]) {
                case "0":
                    l[_0x69d0("0x179")]($, _0x69d0("0x17a"))["attr"]("src", l[_0x69d0("0x17b")](hypeImgBase, f));
                    continue;
                case "1":
                    console[_0x69d0("0xa")](e);
                    continue;
                case "2":
                    var e = a[_0x69d0("0x6")](",");
                    continue;
                case "3":
                    var p = e[0]
                      , o = e[1];
                    continue;
                case "4":
                    console.log(key);
                    continue;
                case "5":
                    console[_0x69d0("0xa")](en);
                    continue;
                case "6":
                    console[_0x69d0("0xa")](r);
                    continue;
                case "7":
                    var f = new ananbeike()["d"](o, i_v, pd, p);
                    continue;
                case "8":
                    $(_0x69d0("0x17a"))[_0x69d0("0x123")]("src", "");
                    continue;
                case "9":
                    if (l.rNY(r, 1)) {
                        key = l.Rdy(e[4], e[2]) + e[3]
                    } else {
                        if (l[_0x69d0("0x17c")](r, 2)) {
                            key = l.mGd(e[2] + e[4], e[3])
                        } else {
                            if (l[_0x69d0("0x17d")](r, 3)) {
                                key = l.PeF(e[4], e[3]) + e[2]
                            }
                        }
                    }
                    continue;
                case "10":
                    console[_0x69d0("0xa")](f);
                    continue;
                case "11":
                    console.log(a);
                    continue;
                case "12":
                    n = l[_0x69d0("0x17e")](l[_0x69d0("0x17f")](tst, ""), l[_0x69d0("0x180")](e[2], 2)),
                    en = e[3],
                    r = e[4];
                    continue;
                case "13":
                    console[_0x69d0("0xa")](n);
                    continue
                }
                break
            }
        },
        "loGetTopicData": function() {
            var a = {
                "Mvs": function c(e, d) {
                    return e + d
                },
                "rHE": function b(d, e) {
                    return d + e
                }
            };
            loxia[_0x69d0("0x8b")](a[_0x69d0("0x181")](a[_0x69d0("0x181")](a[_0x69d0("0x182")](hypeDomain, "/hl/"), hypepdp[_0x69d0("0x3f")]["retrieveType"]), "/topic.json"), {}, {
                "success": function(f) {
                    var h = {
                        "VZM": function e(j, i) {
                            return j(i)
                        }
                    };
                    var d = _0x69d0("0x183")[_0x69d0("0x6")]("|")
                      , g = 0;
                    while (!![]) {
                        switch (d[g++]) {
                        case "0":
                            $(_0x69d0("0x16a"))[_0x69d0("0x51")]("");
                            continue;
                        case "1":
                            h[_0x69d0("0x184")]($, _0x69d0("0x164"))[_0x69d0("0xf8")](_0x69d0("0x165"));
                            continue;
                        case "2":
                            hypepdp[_0x69d0("0x3f")]["vkstep"] = !![];
                            continue;
                        case "3":
                            h[_0x69d0("0x184")]($, _0x69d0("0x185"))["find"]("span")[_0x69d0("0x6b")](loxia[_0x69d0("0x70")](_0x69d0("0x167")));
                            continue;
                        case "4":
                            hypepdp.utils[_0x69d0("0x15d")](f);
                            continue;
                        case "5":
                            h.VZM($, _0x69d0("0x168"))[_0x69d0("0xf8")](_0x69d0("0x169"));
                            continue;
                        case "6":
                            $(".event-diy-shirt")[_0x69d0("0xfa")]("is-active");
                            continue
                        }
                        break
                    }
                }
            })
        },
        "getSelectedSkuId": function() {
            var h = {
                "cpc": function a(l, m) {
                    return l(m)
                },
                "fky": function c(l, m) {
                    return l(m)
                },
                "thP": function g(m, l) {
                    return m == l
                },
                "lUX": function f(l, m) {
                    return l(m)
                },
                "ePA": function j(l, m) {
                    return l(m)
                }
            };
            var d = h[_0x69d0("0x186")]($, _0x69d0("0x187"))[_0x69d0("0x121")](".is-active a")[_0x69d0("0x123")](_0x69d0("0x130"));
            if (!h[_0x69d0("0x188")](isNotNullOrEmpty, d)) {
                hypepdp[_0x69d0("0x66")][_0x69d0("0xb2")](1, loxia[_0x69d0("0x70")](_0x69d0("0x189")));
                return new Result(![],{})
            } else {
                hypepdp[_0x69d0("0x66")][_0x69d0("0xab")](1)
            }
            var i;
            if (h[_0x69d0("0x18a")](h.lUX($, _0x69d0("0x18b"))[_0x69d0("0x121")](_0x69d0("0x18c"))["length"], 0)) {
                hypepdp[_0x69d0("0x66")][_0x69d0("0xb2")](1, loxia[_0x69d0("0x70")]("pdp_choose_size"));
                return new Result(![],{})
            } else {
                hypepdp.utils[_0x69d0("0xab")](1);
                i = h[_0x69d0("0x18d")]($, ".hype-panel ul")[_0x69d0("0x121")](_0x69d0("0x15b"))[_0x69d0("0x123")]("data-id")
            }
            var k = new Array();
            k[_0x69d0("0x18e")](d);
            k[_0x69d0("0x18e")](i);
            var e = hypepdp.utils[_0x69d0("0x18f")](k);
            var b = hypepdp[_0x69d0("0x3f")][_0x69d0("0x14e")][e];
            return new Result(!![],{
                "skuId": b
            })
        },
        "validateIfTouclick": function() {
            var c = {
                "GMt": function b(d, e) {
                    return d(e)
                }
            };
            var a = c[_0x69d0("0x190")]($, "input[name='NECaptchaValidate']")[_0x69d0("0x51")]();
            if (!jQuery.isEmptyObject(a)) {
                hypepdp[_0x69d0("0x66")][_0x69d0("0xab")](2);
                return new Result(!![],{})
            } else {
                hypepdp[_0x69d0("0x66")][_0x69d0("0xb2")](2, loxia[_0x69d0("0x70")](_0x69d0("0x191")));
                return new Result(![],{})
            }
        },
        "validateIfLoTouclick": function() {
            if (hypepdp[_0x69d0("0x3f")][_0x69d0("0x175")]) {
                hypepdp.utils[_0x69d0("0xab")](2);
                return new Result(!![],{})
            } else {
                hypepdp.utils[_0x69d0("0xb2")](2, loxia.getLocaleMsg(_0x69d0("0x191")));
                return new Result(![],{})
            }
        },
        "sizeDropdown": function() {
            $[_0x69d0("0x124")][_0x69d0("0x192")](".events-dropdown", {
                "isIscroll": !![],
                "tinyscrollbarConfig": {
                    "wheelLock": !![],
                    "touchLock": ![]
                },
                "showElemTapCallBack": function(b, g) {
                    var f = {
                        "xKa": function d(h, i, j) {
                            return h(i, j)
                        }
                    };
                    var a = _0x69d0("0x193")["split"]("|")
                      , c = 0;
                    while (!![]) {
                        switch (a[c++]) {
                        case "0":
                            var e = b[_0x69d0("0x123")](_0x69d0("0x194"));
                            continue;
                        case "1":
                            f[_0x69d0("0x195")]($, g.opt[_0x69d0("0x196")], g[_0x69d0("0x5b")])[_0x69d0("0x121")](_0x69d0("0x197"))[_0x69d0("0x6b")](e);
                            continue;
                        case "2":
                            hypepdp[_0x69d0("0x3f")][_0x69d0("0x198")] = hypepdp[_0x69d0("0x3f")][_0x69d0("0x198")] + 1;
                            continue;
                        case "3":
                            hypepdp[_0x69d0("0x66")]["clearErrorMsg"](1);
                            continue;
                        case "4":
                            b.addClass(_0x69d0("0x169"))["siblings"]()[_0x69d0("0xf8")](_0x69d0("0x169"));
                            continue;
                        case "5":
                            if (b[_0x69d0("0x48")](_0x69d0("0x7a"))) {
                                return ![]
                            }
                            continue;
                        case "6":
                            hypepdp[_0x69d0("0x3f")][_0x69d0("0xad")] = !![];
                            continue
                        }
                        break
                    }
                }
            })
        },
        "getSkuIvts": function(e, a) {
            var b = new Array();
            b[_0x69d0("0x18e")](e);
            b[_0x69d0("0x18e")](a);
            var c = hypepdp[_0x69d0("0x66")][_0x69d0("0x18f")](b);
            var d = hypepdp[_0x69d0("0x3f")][_0x69d0("0x14e")][c];
            return hypepdp.vars[_0x69d0("0x14f")][d]
        },
        "getItemProperties": function(d) {
            var c = {
                "NbR": function b(g, f) {
                    return g instanceof f
                },
                "rcN": function e(g, f) {
                    return g + f
                },
                "oOm": function a(f, g) {
                    return f + g
                }
            };
            if (c[_0x69d0("0x199")](d, Array)) {
                d[_0x69d0("0x19a")](function(f, g) {
                    return f - g
                });
                return c[_0x69d0("0x19b")](c.oOm("[", d[_0x69d0("0xa1")](",")), "]")
            } else {
                return ""
            }
        },
        "translate": function(a) {
            var c = {
                "cRJ": function b(e, d) {
                    return e(d)
                }
            };
            return new Result(!![],{
                "msg": new ananbeike()["d"](a[_0x69d0("0xac")][_0x69d0("0x19c")], a[_0x69d0("0xac")]["iv"], a[_0x69d0("0xac")][_0x69d0("0x19d")], c.cRJ($, _0x69d0("0x109"))[_0x69d0("0x51")]())
            })
        },
        "touchClik": function() {
            var f = {
                "LII": function g(j, k) {
                    return j(k)
                },
                "KkH": function b(j, k) {
                    return j < k
                },
                "egw": function a(k, j) {
                    return k(j)
                },
                "voX": function h(k, j) {
                    return k(j)
                },
                "YIu": function e(k, j) {
                    return k(j)
                },
                "xPo": function c(j, k, l) {
                    return j(k, l)
                },
                "AYK": function d(j, k) {
                    return j == k
                },
                "tGN": function i(j, k) {
                    return j(k)
                }
            };
            f[_0x69d0("0x19e")]($, _0x69d0("0x19f"))[_0x69d0("0x1a0")](function() {
                var j = f.LII($, window)["width"]();
                if (f[_0x69d0("0x1a1")](j, 768)) {
                    $(_0x69d0("0x1a2"))[_0x69d0("0x84")]();
                    f[_0x69d0("0x1a3")]($, _0x69d0("0x46"))[_0x69d0("0x1a4")]({
                        "z-index": 0
                    })
                }
            });
            TouClick[_0x69d0("0x1a5")](function() {
                hypepdp.vars[_0x69d0("0x1a6")] = f.xPo(TouClick, "captcha-target", {
                    "onClose": function() {
                        var k = {
                            "dXl": function j(m, o) {
                                return m(o)
                            },
                            "pJd": function l(o, m) {
                                return f[_0x69d0("0x1a1")](o, m)
                            }
                        };
                        setTimeout(function() {
                            var m = k.dXl($, window)[_0x69d0("0x30")]();
                            if (k.pJd(m, 768)) {
                                k[_0x69d0("0x1a7")]($, _0x69d0("0x46"))[_0x69d0("0x1a4")]({
                                    "z-index": 11
                                });
                                k[_0x69d0("0x1a7")]($, _0x69d0("0x1a2"))[_0x69d0("0x40")]()
                            }
                        }, 300)
                    },
                    "onSuccess": function(j) {
                        hypepdp[_0x69d0("0x66")][_0x69d0("0xab")](2);
                        console.log(j);
                        f.voX($, _0x69d0("0x1a8"))[_0x69d0("0x51")](j[_0x69d0("0x10d")]);
                        f[_0x69d0("0x1a9")]($, _0x69d0("0x1aa"))[_0x69d0("0x51")](j.checkAddress);
                        $(_0x69d0("0x1ab"))[_0x69d0("0x51")](j[_0x69d0("0x1ac")])
                    },
                    "readyCheck": function() {
                        return {
                            "status": !![],
                            "ckCode": hypepdp[_0x69d0("0x3f")][_0x69d0("0xa2")]
                        }
                    },
                    "language": f[_0x69d0("0x1ad")](locale, _0x69d0("0x1ae")) ? "en" : "cn"
                })
            })
        },
        "neCacaptch": function() {
            var d = {
                "wLd": function e(g, f, i, h) {
                    return g(f, i, h)
                },
                "oTe": function b(g, f) {
                    return g == f
                }
            };
            d[_0x69d0("0x1af")](initNECaptcha, {
                "captchaId": "b86db9f6da5946cd9cefac00fb6fd763",
                "element": _0x69d0("0x19f"),
                "mode": "float",
                "lang": d.oTe(locale, _0x69d0("0x1ae")) ? "en" : _0x69d0("0x1b0"),
                "onVerify": function(f, g) {
                    if (jQuery[_0x69d0("0x1b1")](f)) {
                        console[_0x69d0("0xa")](g[_0x69d0("0x1b2")])
                    }
                }
            }, function c(f) {}, function a(f) {
                console[_0x69d0("0xa")](_0x69d0("0x1b3"))
            })
        },
        "disableSelectedSize": function() {
            var b = {
                "PRA": function a(d, c) {
                    return d(c)
                }
            };
            b[_0x69d0("0x1b4")]($, _0x69d0("0x3c"))["find"](_0x69d0("0x18c"))[_0x69d0("0xfa")](_0x69d0("0x7a"));
            b[_0x69d0("0x1b4")]($, _0x69d0("0x1b5"))[_0x69d0("0x121")](_0x69d0("0x1b6"))[_0x69d0("0x123")]("disabled", "disabled")
        },
        "getArrivalNoticeSkuId": function() {
            var h = {
                "lkY": function b(k, l) {
                    return k(l)
                },
                "ZTZ": function j(l, k) {
                    return l == k
                },
                "zOm": function c(k, l) {
                    return k(l)
                },
                "epK": function d(k, l) {
                    return k(l)
                }
            };
            var e = h[_0x69d0("0x1b7")]($, _0x69d0("0x187"))["find"](_0x69d0("0x15b"))[_0x69d0("0x123")](_0x69d0("0x130"));
            var f;
            if (h[_0x69d0("0x1b8")](h[_0x69d0("0x1b7")]($, _0x69d0("0x1b9"))[_0x69d0("0x121")](_0x69d0("0x18c"))[_0x69d0("0xa4")], 0)) {
                h[_0x69d0("0x1b7")]($, _0x69d0("0x1ba"))[_0x69d0("0x121")](_0x69d0("0x166"))[_0x69d0("0x6b")](loxia[_0x69d0("0x70")](_0x69d0("0x1bb")));
                h[_0x69d0("0x1b7")]($, _0x69d0("0x1bc"))[_0x69d0("0xfa")]("is-error");
                return new Result(![],{})
            } else {
                h[_0x69d0("0x1bd")]($, ".info-size-select")[_0x69d0("0xf8")](_0x69d0("0x165"));
                f = h[_0x69d0("0x1be")]($, _0x69d0("0x1b9"))[_0x69d0("0x121")](".is-active a")[_0x69d0("0x123")](_0x69d0("0x130"))
            }
            h[_0x69d0("0x1be")]($, _0x69d0("0x1bc"))["removeClass"](_0x69d0("0x165"));
            var g = new Array();
            g[_0x69d0("0x18e")](e);
            g[_0x69d0("0x18e")](f[_0x69d0("0x2a")]("\"", "")[_0x69d0("0x2a")]("\"", ""));
            console.log(g);
            var i = hypepdp[_0x69d0("0x66")][_0x69d0("0x18f")](g);
            var a = hypepdp[_0x69d0("0x3f")][_0x69d0("0x14e")][i];
            return new Result(!![],{
                "skuId": a
            })
        },
        "getArrivalNoticeEmail": function() {
            var c = {
                "qYu": function b(e, f) {
                    return e(f)
                },
                "kgp": function d(f, e) {
                    return f(e)
                }
            };
            var a = $("#noticeEmail")["val"]();
            if (!isNotNullOrEmpty(a)) {
                c[_0x69d0("0x1bf")]($, "#noticeEmail")[_0x69d0("0x1c0")](".form-input")[_0x69d0("0x121")](_0x69d0("0x1c1"))[_0x69d0("0x6b")](loxia[_0x69d0("0x70")](_0x69d0("0x1c2")));
                $(_0x69d0("0x1c3"))[_0x69d0("0x1c0")](_0x69d0("0x1c4"))[_0x69d0("0xfa")](_0x69d0("0x165"));
                return new Result(![],{})
            }
            if (!hypepdp[_0x69d0("0x66")]["verifyEmail"](a)) {
                $(_0x69d0("0x1c3"))[_0x69d0("0x1c0")](_0x69d0("0x1c4"))[_0x69d0("0x121")](".msg-block span")[_0x69d0("0x6b")](loxia.getLocaleMsg(_0x69d0("0x1c5")));
                c[_0x69d0("0x1bf")]($, "#noticeEmail")["parent"](_0x69d0("0x1c4"))[_0x69d0("0xfa")]("is-error");
                return new Result(![],{})
            }
            c[_0x69d0("0x1c6")]($, "#noticeEmail")[_0x69d0("0x1c0")](_0x69d0("0x1c4"))["removeClass"](_0x69d0("0x165"));
            return new Result(!![],{
                "msg": a
            })
        },
        "sizeHaveChancebuy": function() {
            var b = {
                "pNd": function e(g, f) {
                    return g(f)
                },
                "WGG": function d(g, f) {
                    return g(f)
                },
                "exY": function c(g, f) {
                    return g(f)
                },
                "szU": function a(f, g) {
                    return f(g)
                }
            };
            b[_0x69d0("0x1c7")]($, ".hype-panel ul li")["on"](_0x69d0("0x20"), function(f) {
                if (!b.pNd($, this)[_0x69d0("0x48")](_0x69d0("0x7a")) && b[_0x69d0("0x1c8")]($, this)[_0x69d0("0x48")]("is-disabled-three")) {
                    hypepdp.utils["showErrorMsg"](1, loxia[_0x69d0("0x70")](_0x69d0("0x1c9")));
                    b[_0x69d0("0x1ca")]($, ".btn-icon-cart")[_0x69d0("0xfa")]("is-disabled")
                } else {
                    b[_0x69d0("0x1ca")]($, _0x69d0("0x79"))[_0x69d0("0xf8")](_0x69d0("0x7a"))
                }
            })
        },
        "verifyEmail": function(a) {
            var b = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
            return b[_0x69d0("0x1cb")](a)
        },
        "showErrorMsg": function(e, f) {
            var i = {
                "yep": function h(k, j) {
                    return k === j
                },
                "bLS": function a(k, j) {
                    return k(j)
                },
                "NQM": function g(k, j) {
                    return k === j
                },
                "CrU": function d(j, k) {
                    return j(k)
                },
                "iee": function c(k, j) {
                    return k === j
                },
                "QTt": function b(j, k) {
                    return j(k)
                }
            };
            if (i[_0x69d0("0x1cc")](e, 1)) {
                $(_0x69d0("0x1cd"))["find"](_0x69d0("0x1c1"))["html"](f);
                i[_0x69d0("0x1ce")]($, _0x69d0("0x1cf"))["show"]()
            } else {
                if (i[_0x69d0("0x1d0")](e, 2)) {
                    i[_0x69d0("0x1d1")]($, ".hype-panel .verification-btn")[_0x69d0("0x121")](_0x69d0("0x1d2"))[_0x69d0("0x6b")](f);
                    i[_0x69d0("0x1d1")]($, _0x69d0("0x1d3"))[_0x69d0("0xfa")](_0x69d0("0x165"))
                } else {
                    if (i[_0x69d0("0x1d4")](e, 3)) {
                        i[_0x69d0("0x1d5")]($, _0x69d0("0x1d3"))[_0x69d0("0x121")](_0x69d0("0x1d6"))[_0x69d0("0x6b")](f);
                        i.QTt($, _0x69d0("0x1d3"))[_0x69d0("0xfa")](_0x69d0("0x165"))
                    }
                }
            }
        },
        "clearErrorMsg": function(d) {
            var c = {
                "Ktl": function a(g, f) {
                    return g === f
                },
                "aKA": function b(f, g) {
                    return f === g
                },
                "Rox": function e(g, f) {
                    return g(f)
                }
            };
            if (c[_0x69d0("0x1d7")](d, 1)) {
                $(_0x69d0("0x1cd"))["find"](_0x69d0("0x1c1"))[_0x69d0("0x6b")]("");
                $(_0x69d0("0x1cf"))["hide"]()
            } else {
                if (c[_0x69d0("0x1d8")](d, 2)) {
                    c[_0x69d0("0x1d9")]($, _0x69d0("0x1d3"))[_0x69d0("0x121")](_0x69d0("0x1c1"))[_0x69d0("0x6b")]("");
                    c.Rox($, ".hype-panel .verification-btn")[_0x69d0("0xf8")](_0x69d0("0x165"))
                }
            }
        },
        "setProductLabel": function(c) {
            var a = {
                "wox": function b(e, d) {
                    return e(d)
                }
            };
            a[_0x69d0("0x1da")]($, _0x69d0("0x1db"))[_0x69d0("0x6b")](c);
            $(_0x69d0("0x1db"))["removeClass"](_0x69d0("0x1dc"))
        },
        "getNumRandomByArray": function(j, y) {
            var w = {
                "LVV": function h(D, C) {
                    return D / C
                },
                "mQE": function c(C, D) {
                    return C - D
                },
                "zKm": function q(C, D) {
                    return C * D
                },
                "ikS": function u(D, C) {
                    return D * C
                },
                "mbv": function e(D, C) {
                    return D / C
                },
                "pah": function b(D, C) {
                    return D * C
                },
                "dWu": function f(C, D) {
                    return C > D
                },
                "oWJ": function a(C, D) {
                    return C(D)
                },
                "Pai": function g(D, C) {
                    return D + C
                },
                "DIy": function s(D, C) {
                    return D / C
                },
                "QoB": function i(C, D) {
                    return C * D
                },
                "bju": function t(C, D) {
                    return C * D
                },
                "dPW": function v(D, C) {
                    return D < C
                }
            };
            var A = _0x69d0("0x1dd")[_0x69d0("0x6")]("|")
              , p = 0;
            while (!![]) {
                switch (A[p++]) {
                case "0":
                    var x = Math.floor(w[_0x69d0("0x1de")](w.mQE(l, w[_0x69d0("0x1df")](w.ikS(o, 24) * 60, 60)), 3600));
                    continue;
                case "1":
                    var l = parseInt(B / 1000);
                    continue;
                case "2":
                    var o = Math.floor(w.mbv(l, w.ikS(w.pah(60, 60), 24)));
                    continue;
                case "3":
                    if (w[_0x69d0("0x1e0")](k, 10)) {
                        var m = [4, 5, 6, 7, 8, 9, 10];
                        var d = parseInt(7 * Math.random());
                        return m[d]
                    } else {
                        if (k <= 10 && w.dWu(k, 1)) {
                            l = w[_0x69d0("0x1e1")](l, 1);
                            return w.oWJ(parseInt, w[_0x69d0("0x1e2")](w[_0x69d0("0x1e3")](l, Math[_0x69d0("0x1e4")]()), 1))
                        } else {
                            return 0
                        }
                    }
                    continue;
                case "4":
                    var z = Math[_0x69d0("0x44")](w[_0x69d0("0x1e5")](w[_0x69d0("0x1e1")](w[_0x69d0("0x1e1")](l, w[_0x69d0("0x1e3")](w[_0x69d0("0x1e3")](o, 24) * 60, 60)), w[_0x69d0("0x1e3")](x, 3600)), 60));
                    continue;
                case "5":
                    var B = w[_0x69d0("0x1e1")](y, j);
                    continue;
                case "6":
                    var k = Math[_0x69d0("0x44")](w[_0x69d0("0x1e1")](w[_0x69d0("0x1e1")](l - w[_0x69d0("0x1e3")](w.pah(w[_0x69d0("0x1e6")](o, 24), 60), 60), w.QoB(x, 3600)), w[_0x69d0("0x1e7")](z, 60)));
                    continue;
                case "7":
                    if (w[_0x69d0("0x1e8")](B, 0)) {
                        return 0
                    }
                    continue
                }
                break
            }
        },
        "buyNowOnHypePdp": function() {
            var e = {
                "jre": function h(i, j) {
                    return i(j)
                },
                "dIO": function g(i, j) {
                    return i(j)
                },
                "trn": function d(i, j) {
                    return i * j
                }
            };
            var c = e.jre($, _0x69d0("0x1e9"))[_0x69d0("0x51")]();
            var a = e.dIO($, _0x69d0("0x1ea"))[_0x69d0("0xd6")]();
            var b = e[_0x69d0("0x1eb")]($, _0x69d0("0x1ec"))[_0x69d0("0x51")]()["replace"]("¥ ", "");
            var f = e[_0x69d0("0x1eb")]($, _0x69d0("0x1ed"))[_0x69d0("0x51")]();
            dataLayer[_0x69d0("0x18e")]({
                "page_type": "BUY NOW",
                "event": _0x69d0("0x1ee"),
                "userId": f,
                "pt_source": _0x69d0("0x1ef"),
                "product_id": c,
                "product_name": a,
                "product_price": e.trn(b, 1)
            })
        },
        "showBuyBtn": function() {
            var c = {
                "EAx": function a(e, d) {
                    return e(d)
                },
                "Xlv": function b(e, d) {
                    return e(d)
                }
            };
            c[_0x69d0("0x1f0")]($, _0x69d0("0x96"))[_0x69d0("0x40")]();
            c[_0x69d0("0x1f1")]($, _0x69d0("0x79"))[_0x69d0("0x84")]()
        }
    }
};
function _spiceDropdown() {
    var h = {
        "Cne": function b(j, k, l) {
            return j(k, l)
        },
        "Wmz": function i(j, l, k) {
            return j(l, k)
        },
        "lHM": function e(j, k) {
            return j(k)
        },
        "eLs": function d(j, k) {
            return j == k
        },
        "IKs": function g(j, k) {
            return j(k)
        },
        "TcN": function c(k, j) {
            return k(j)
        },
        "lyt": function a(j, k) {
            return j(k)
        },
        "NkB": function f(l, k, j) {
            return l(k, j)
        }
    };
    $.spice[_0x69d0("0x192")](_0x69d0("0x1f2"), {
        "isIscroll": !![],
        "tinyscrollbarConfig": {
            "wheelLock": !![],
            "touchLock": ![]
        },
        "showElemTapCallBack": function(k, j) {
            k[_0x69d0("0xfa")](_0x69d0("0x169"))[_0x69d0("0x19")]()[_0x69d0("0xf8")](_0x69d0("0x169"));
            h[_0x69d0("0x1f3")]($, j[_0x69d0("0x1f4")]["dropElem"], j[_0x69d0("0x5b")])[_0x69d0("0x121")]("span:eq(0)")[_0x69d0("0x6b")](k[_0x69d0("0x121")]("a")["html"]())
        }
    });
    h.Wmz($, "select", _0x69d0("0x1f5"))["on"]("change", function() {
        var k = $(this)
          , j = h.Cne($, _0x69d0("0x1b6"), this)[_0x69d0("0x123")](_0x69d0("0x1f6"))
          , l = h.Cne($, _0x69d0("0x1b6"), this)["attr"](_0x69d0("0x1f7"));
        h.Wmz($, _0x69d0("0x1f8"), h[_0x69d0("0x1f9")]($, this)[_0x69d0("0x19")](_0x69d0("0x1fa")))[_0x69d0("0x6b")](j);
        if (h.eLs(l, "cn")) {
            h.IKs($, this)[_0x69d0("0x19")](_0x69d0("0x1fa"))["removeClass"](_0x69d0("0x1fb"))[_0x69d0("0xfa")](_0x69d0("0x1fc"))
        }
        if (h[_0x69d0("0x1fd")](l, "en")) {
            h[_0x69d0("0x1fe")]($, this)["siblings"](_0x69d0("0x1fa"))[_0x69d0("0xf8")](_0x69d0("0x1fc"))["addClass"](_0x69d0("0x1fb"))
        }
    });
    h[_0x69d0("0x1ff")]($, _0x69d0("0x200"), _0x69d0("0x1f5"))["on"](_0x69d0("0x201"), function() {
        h[_0x69d0("0x202")]($, this)[_0x69d0("0x203")](_0x69d0("0x204"))[_0x69d0("0xfa")](_0x69d0("0x205"))
    })["on"]("blur", function() {
        h[_0x69d0("0x206")]($, this)["closest"](_0x69d0("0x204"))["removeClass"](_0x69d0("0x205"))
    })
}
function pdpAddToCartTracking(e) {
    var a = {
        "hgA": function c(f, g, h) {
            return f(g, h)
        },
        "hoJ": function d(g, f) {
            return g(f)
        },
        "cIE": function b(f, g) {
            return f(g)
        }
    };
    a[_0x69d0("0x207")](sendAnalytics, _0x69d0("0x208"), {
        "event_name": e,
        "product_id": [a.hoJ($, _0x69d0("0x209"))[_0x69d0("0x51")]()],
        "product_model_id": [a[_0x69d0("0x20a")]($, _0x69d0("0x20b"))[_0x69d0("0x51")]()],
        "product_price": [a[_0x69d0("0x20a")]($, _0x69d0("0x1ec"))[_0x69d0("0x51")]()],
        "product_quantity": ["1"],
        "product_size": ""
    })
}
function zmnImgCenter(a) {
    a.each(function() {
        var g = $(this);
        var f = g.height();
        var b = g.width();
        var c = g.parent().height();
        var e = g.parent().width();
        var d = f / b;
        if (f > c && b > e) {
            if (f > b) {
                g.width(e);
                g.height(e * d)
            } else {
                g.height(c);
                g.width(c / d)
            }
            f = g.height();
            b = g.width();
            $(this).css("left", (e - b) / 2);
            $(this).css("top", (c - f) / 2)
        } else {
            $(this).css("left", (e - b) / 2);
            $(this).css("top", (c - f) / 2)
        }
    })
}
function GetRect(a) {
    var b = a.getBoundingClientRect();
    var d = !!document.documentElement.clientTop ? document.documentElement.clientTop : 0;
    var c = !!document.documentElement.clientLeft ? document.documentElement.clientLeft : 0;
    return {
        top: b.top - d,
        bottom: b.bottom - d,
        left: b.left - c,
        right: b.right - c
    }
}
function detailVideoPlay() {
    if (!$("#detail-video").hasClass("is-active")) {
        $("#detail-video").addClass("is-active");
        $("#detail-video .detail-video").css("visibility", "visible");
        var a = $("#detail-video").find("video");
        a[0].play();
        a[0].addEventListener("ended", function() {
            this.play()
        })
    }
}
function detailVideoPause() {
    $("#detail-video").removeClass("is-active");
    if ($("#detail-video").hasClass("is-active")) {
        var a = $("#detail-video").find("video");
        a[0].pause()
    }
}
;$(function() {
    rate.bind();
    rate.tableExchange()
});
var rate = {
    attr: {},
    bind: function() {
        $(document).on("tap", ".zoom-img .icon-close", function(a) {
            a.stopPropagation();
            $(this).parent(".zoom-img").removeClass("active")
        });
        $("body").on("tap", function(b) {
            var a = $(b.target);
            if (!a.hasClass("events-select-box") && a.parents(".events-select-box").length == 0) {
                $(".events-select-box .events-evaluate-screen").removeClass("is-open")
            }
        });
        $("#load-more-review").on("tap", function() {
            rate.loadingPageRateMore()
        })
    },
    zmnImgCenter: function(a) {
        a.each(function() {
            var g = $(this);
            var f = g.height();
            var b = g.width();
            var c = g.parent().height();
            var e = g.parent().width();
            var d = f / b;
            if (f > c && b > e) {
                if (f > b) {
                    g.width(e);
                    g.height(e * d)
                } else {
                    g.height(c);
                    g.width(c / d)
                }
                f = g.height();
                b = g.width();
                $(this).css("left", (e - b) / 2);
                $(this).css("top", (c - f) / 2)
            } else {
                $(this).css("left", (e - b) / 2);
                $(this).css("top", (c - f) / 2)
            }
        })
    },
    loadingPageRateMore: function() {
        var a = hypeDomain + "/hl/getCurrentPageRateView/" + $('input[name="itemStyle"]').val() + ".json";
        var c = $("#load-more-review").attr("current-page");
        if (rate.attr.flag) {
            console.log("加载中，请稍后 current page:" + c);
            return
        }
        c++;
        rate.attr.flag = true;
        var b = {
            pageNum: c
        };
        loxia.asyncXhrGet(a, b, {
            success: function(d) {
                console.log(d);
                if (d) {
                    $(".ass-right .hype-item-rate").append(d);
                    $("#load-more-review").attr("current-page", c);
                    setTimeout(function() {
                        zmnImgCenter($(".evaluation-img ul li img"));
                        $(".review-module-dialog .ass-right .zoom-img").remove()
                    }, 100);
                    if (c * 5 >= $("#load-more-review").attr("rate-count")) {
                        $("#load-more-review").addClass("none")
                    }
                } else {
                    $("#load-more-review").addClass("none")
                }
                rate.attr.flag = false
            }
        })
    },
    showMobRateView: function() {
        $(".evaluation .evaluation-inner li").show();
        setTimeout(function() {
            zmnImgCenter($(".evaluation-img ul li img"))
        }, 100);
        $("#load-more-review").on("tap", function() {
            rate.loadingPageRateMore()
        })
    },
    tableExchange: function() {
        var a = parseInt($("#rateCount").val());
        if (a > 0) {
            $(".article-table .table-check-review").html(loxia.getLocaleMsg("msg_product_rating_content", a))
        }
        $(".table-check span").on("tap", function() {
            $(this).addClass("is-active").siblings().removeClass("is-active");
            if ($.spice.getWindowWidth() > 1024) {
                if ($(this).data("index") === 0) {
                    $(".article-hot,.article-prompt-copy,.prompt-copy,.article-matching-recommendation-m,.how-wear").css({
                        display: "block"
                    });
                    $(".ass-inner").addClass("none");
                    $(".ass-empty").addClass("none")
                } else {
                    if ($(this).data("index") === 1) {
                        $(".article-hot,.article-prompt-copy,.prompt-copy,.article-matching-recommendation-m,.how-wear").css({
                            display: "none"
                        });
                        $(".ass-inner").css({
                            display: "block"
                        });
                        a > 0 ? $(".ass-inner").removeClass("none") : $(".ass-empty").removeClass("none")
                    }
                }
            } else {
                if ($(this).data("index") === 0) {
                    $(".article-hot,.article-prompt-copy,.prompt-copy,.article-matching-recommendation-m,.how-wear").css({
                        display: "block"
                    });
                    $(".ass-inner").addClass("none");
                    $(".ass-empty").addClass("none")
                } else {
                    if ($(this).data("index") === 1) {
                        $(".article-hot,.article-prompt-copy,.prompt-copy,.article-matching-recommendation-m,.how-wear").css({
                            display: "none"
                        });
                        a > 0 ? $(".ass-inner").removeClass("none") : $(".ass-empty").removeClass("none")
                    }
                }
            }
            setTimeout(function() {
                rate.zmnImgCenter($(".evaluation-img ul li img"))
            }, 100)
        });
        $(".gl-review-link").on("tap", function() {
            $(".table-check .table-check-review").addClass("is-active").siblings().removeClass("is-active");
            $(".article-hot,.article-prompt-copy").addClass("none");
            $(".user-ass .event-hot-mob-title .icon").toggleClass("icon-arrow-down").toggleClass("icon-arrow-up");
            if ($.spice.getWindowWidth() > 1024) {
                $(".article-hot,.article-prompt-copy,.article-matching-recommendation-m,.how-wear").css({
                    display: "none"
                });
                $(".ass-inner").css({
                    display: "block"
                });
                $(".ass-inner,.article-hot,.article-prompt-copy").removeClass("none")
            } else {
                $(".article-hot,.article-prompt-copy,.article-matching-recommendation-m,.how-wear").css({
                    display: "none"
                });
                $(".ass-inner,.article-hot,.article-prompt-copy").removeClass("none")
            }
            rate.zmnImgCenter($(".evaluation-img ul li img"))
        })
    }
};
/*! jquery-qrcode v0.14.0 - https://larsjung.de/jquery-qrcode/ */
!function(r) {
    "use strict";
    function t(t, e, n, o) {
        function a(r, t) {
            return r -= o,
            t -= o,
            0 > r || r >= c || 0 > t || t >= c ? !1 : f.isDark(r, t)
        }
        function i(r, t, e, n) {
            var o = u.isDark
              , a = 1 / l;
            u.isDark = function(i, u) {
                var f = u * a
                  , c = i * a
                  , l = f + a
                  , g = c + a;
                return o(i, u) && (r > l || f > e || t > g || c > n)
            }
        }
        var u = {}
          , f = r(n, e);
        f.addData(t),
        f.make(),
        o = o || 0;
        var c = f.getModuleCount()
          , l = f.getModuleCount() + 2 * o;
        return u.text = t,
        u.level = e,
        u.version = n,
        u.moduleCount = l,
        u.isDark = a,
        u.addBlank = i,
        u
    }
    function e(r, e, n, o, a) {
        n = Math.max(1, n || 1),
        o = Math.min(40, o || 40);
        for (var i = n; o >= i; i += 1)
            try {
                return t(r, e, i, a)
            } catch (u) {}
    }
    function n(r, t, e) {
        var n = e.size
          , o = "bold " + e.mSize * n + "px " + e.fontname
          , a = w("<canvas/>")[0].getContext("2d");
        a.font = o;
        var i = a.measureText(e.label).width
          , u = e.mSize
          , f = i / n
          , c = (1 - f) * e.mPosX
          , l = (1 - u) * e.mPosY
          , g = c + f
          , s = l + u
          , v = .01;
        1 === e.mode ? r.addBlank(0, l - v, n, s + v) : r.addBlank(c - v, l - v, g + v, s + v),
        t.fillStyle = e.fontcolor,
        t.font = o,
        t.fillText(e.label, c * n, l * n + .75 * e.mSize * n)
    }
    function o(r, t, e) {
        var n = e.size
          , o = e.image.naturalWidth || 1
          , a = e.image.naturalHeight || 1
          , i = e.mSize
          , u = i * o / a
          , f = (1 - u) * e.mPosX
          , c = (1 - i) * e.mPosY
          , l = f + u
          , g = c + i
          , s = .01;
        3 === e.mode ? r.addBlank(0, c - s, n, g + s) : r.addBlank(f - s, c - s, l + s, g + s),
        t.drawImage(e.image, f * n, c * n, u * n, i * n)
    }
    function a(r, t, e) {
        w(e.background).is("img") ? t.drawImage(e.background, 0, 0, e.size, e.size) : e.background && (t.fillStyle = e.background,
        t.fillRect(e.left, e.top, e.size, e.size));
        var a = e.mode;
        1 === a || 2 === a ? n(r, t, e) : (3 === a || 4 === a) && o(r, t, e)
    }
    function i(r, t, e, n, o, a, i, u) {
        r.isDark(i, u) && t.rect(n, o, a, a)
    }
    function u(r, t, e, n, o, a, i, u, f, c) {
        i ? r.moveTo(t + a, e) : r.moveTo(t, e),
        u ? (r.lineTo(n - a, e),
        r.arcTo(n, e, n, o, a)) : r.lineTo(n, e),
        f ? (r.lineTo(n, o - a),
        r.arcTo(n, o, t, o, a)) : r.lineTo(n, o),
        c ? (r.lineTo(t + a, o),
        r.arcTo(t, o, t, e, a)) : r.lineTo(t, o),
        i ? (r.lineTo(t, e + a),
        r.arcTo(t, e, n, e, a)) : r.lineTo(t, e)
    }
    function f(r, t, e, n, o, a, i, u, f, c) {
        i && (r.moveTo(t + a, e),
        r.lineTo(t, e),
        r.lineTo(t, e + a),
        r.arcTo(t, e, t + a, e, a)),
        u && (r.moveTo(n - a, e),
        r.lineTo(n, e),
        r.lineTo(n, e + a),
        r.arcTo(n, e, n - a, e, a)),
        f && (r.moveTo(n - a, o),
        r.lineTo(n, o),
        r.lineTo(n, o - a),
        r.arcTo(n, o, n - a, o, a)),
        c && (r.moveTo(t + a, o),
        r.lineTo(t, o),
        r.lineTo(t, o - a),
        r.arcTo(t, o, t + a, o, a))
    }
    function c(r, t, e, n, o, a, i, c) {
        var l = r.isDark
          , g = n + a
          , s = o + a
          , v = e.radius * a
          , h = i - 1
          , d = i + 1
          , w = c - 1
          , m = c + 1
          , y = l(i, c)
          , T = l(h, w)
          , p = l(h, c)
          , B = l(h, m)
          , A = l(i, m)
          , E = l(d, m)
          , k = l(d, c)
          , M = l(d, w)
          , C = l(i, w);
        y ? u(t, n, o, g, s, v, !p && !C, !p && !A, !k && !A, !k && !C) : f(t, n, o, g, s, v, p && C && T, p && A && B, k && A && E, k && C && M)
    }
    function l(r, t, e) {
        var n, o, a = r.moduleCount, u = e.size / a, f = i;
        for (e.radius > 0 && e.radius <= .5 && (f = c),
        t.beginPath(),
        n = 0; a > n; n += 1)
            for (o = 0; a > o; o += 1) {
                var l = e.left + o * u
                  , g = e.top + n * u
                  , s = u;
                f(r, t, e, l, g, s, n, o)
            }
        if (w(e.fill).is("img")) {
            t.strokeStyle = "rgba(0,0,0,0.5)",
            t.lineWidth = 2,
            t.stroke();
            var v = t.globalCompositeOperation;
            t.globalCompositeOperation = "destination-out",
            t.fill(),
            t.globalCompositeOperation = v,
            t.clip(),
            t.drawImage(e.fill, 0, 0, e.size, e.size),
            t.restore()
        } else
            t.fillStyle = e.fill,
            t.fill()
    }
    function g(r, t) {
        var n = e(t.text, t.ecLevel, t.minVersion, t.maxVersion, t.quiet);
        if (!n)
            return null;
        var o = w(r).data("qrcode", n)
          , i = o[0].getContext("2d");
        return a(n, i, t),
        l(n, i, t),
        o
    }
    function s(r) {
        var t = w("<canvas/>").attr("width", r.size).attr("height", r.size);
        return g(t, r)
    }
    function v(r) {
        return w("<img/>").attr("src", s(r)[0].toDataURL("image/png"))
    }
    function h(r) {
        var t = e(r.text, r.ecLevel, r.minVersion, r.maxVersion, r.quiet);
        if (!t)
            return null;
        var n, o, a = r.size, i = r.background, u = Math.floor, f = t.moduleCount, c = u(a / f), l = u(.5 * (a - c * f)), g = {
            position: "relative",
            left: 0,
            top: 0,
            padding: 0,
            margin: 0,
            width: a,
            height: a
        }, s = {
            position: "absolute",
            padding: 0,
            margin: 0,
            width: c,
            height: c,
            "background-color": r.fill
        }, v = w("<div/>").data("qrcode", t).css(g);
        for (i && v.css("background-color", i),
        n = 0; f > n; n += 1)
            for (o = 0; f > o; o += 1)
                t.isDark(n, o) && w("<div/>").css(s).css({
                    left: l + o * c,
                    top: l + n * c
                }).appendTo(v);
        return v
    }
    function d(r) {
        return m && "canvas" === r.render ? s(r) : m && "image" === r.render ? v(r) : h(r)
    }
    var w = window.jQuery
      , m = function() {
        var r = document.createElement("canvas");
        return !(!r.getContext || !r.getContext("2d"))
    }()
      , y = {
        render: "canvas",
        minVersion: 1,
        maxVersion: 40,
        ecLevel: "L",
        left: 0,
        top: 0,
        size: 200,
        fill: "#000",
        background: null,
        text: "no text",
        radius: 0,
        quiet: 0,
        mode: 0,
        mSize: .1,
        mPosX: .5,
        mPosY: .5,
        label: "no label",
        fontname: "sans",
        fontcolor: "#000",
        image: null
    };
    w.fn.qrcode = function(r) {
        var t = w.extend({}, y, r);
        return this.each(function(r, e) {
            "canvas" === e.nodeName.toLowerCase() ? g(e, t) : w(e).append(d(t))
        })
    }
}(function() {
    var r = function() {
        function r(t, e) {
            if ("undefined" == typeof t.length)
                throw new Error(t.length + "/" + e);
            var n = function() {
                for (var r = 0; r < t.length && 0 == t[r]; )
                    r += 1;
                for (var n = new Array(t.length - r + e), o = 0; o < t.length - r; o += 1)
                    n[o] = t[o + r];
                return n
            }()
              , o = {};
            return o.getAt = function(r) {
                return n[r]
            }
            ,
            o.getLength = function() {
                return n.length
            }
            ,
            o.multiply = function(t) {
                for (var e = new Array(o.getLength() + t.getLength() - 1), n = 0; n < o.getLength(); n += 1)
                    for (var a = 0; a < t.getLength(); a += 1)
                        e[n + a] ^= i.gexp(i.glog(o.getAt(n)) + i.glog(t.getAt(a)));
                return r(e, 0)
            }
            ,
            o.mod = function(t) {
                if (o.getLength() - t.getLength() < 0)
                    return o;
                for (var e = i.glog(o.getAt(0)) - i.glog(t.getAt(0)), n = new Array(o.getLength()), a = 0; a < o.getLength(); a += 1)
                    n[a] = o.getAt(a);
                for (var a = 0; a < t.getLength(); a += 1)
                    n[a] ^= i.gexp(i.glog(t.getAt(a)) + e);
                return r(n, 0).mod(t)
            }
            ,
            o
        }
        var t = function(t, e) {
            var o = 236
              , i = 17
              , l = t
              , g = n[e]
              , s = null
              , v = 0
              , d = null
              , w = new Array
              , m = {}
              , y = function(r, t) {
                v = 4 * l + 17,
                s = function(r) {
                    for (var t = new Array(r), e = 0; r > e; e += 1) {
                        t[e] = new Array(r);
                        for (var n = 0; r > n; n += 1)
                            t[e][n] = null
                    }
                    return t
                }(v),
                T(0, 0),
                T(v - 7, 0),
                T(0, v - 7),
                A(),
                B(),
                k(r, t),
                l >= 7 && E(r),
                null == d && (d = D(l, g, w)),
                M(d, t)
            }
              , T = function(r, t) {
                for (var e = -1; 7 >= e; e += 1)
                    if (!(-1 >= r + e || r + e >= v))
                        for (var n = -1; 7 >= n; n += 1)
                            -1 >= t + n || t + n >= v || (e >= 0 && 6 >= e && (0 == n || 6 == n) || n >= 0 && 6 >= n && (0 == e || 6 == e) || e >= 2 && 4 >= e && n >= 2 && 4 >= n ? s[r + e][t + n] = !0 : s[r + e][t + n] = !1)
            }
              , p = function() {
                for (var r = 0, t = 0, e = 0; 8 > e; e += 1) {
                    y(!0, e);
                    var n = a.getLostPoint(m);
                    (0 == e || r > n) && (r = n,
                    t = e)
                }
                return t
            }
              , B = function() {
                for (var r = 8; v - 8 > r; r += 1)
                    null == s[r][6] && (s[r][6] = r % 2 == 0);
                for (var t = 8; v - 8 > t; t += 1)
                    null == s[6][t] && (s[6][t] = t % 2 == 0)
            }
              , A = function() {
                for (var r = a.getPatternPosition(l), t = 0; t < r.length; t += 1)
                    for (var e = 0; e < r.length; e += 1) {
                        var n = r[t]
                          , o = r[e];
                        if (null == s[n][o])
                            for (var i = -2; 2 >= i; i += 1)
                                for (var u = -2; 2 >= u; u += 1)
                                    -2 == i || 2 == i || -2 == u || 2 == u || 0 == i && 0 == u ? s[n + i][o + u] = !0 : s[n + i][o + u] = !1
                    }
            }
              , E = function(r) {
                for (var t = a.getBCHTypeNumber(l), e = 0; 18 > e; e += 1) {
                    var n = !r && 1 == (t >> e & 1);
                    s[Math.floor(e / 3)][e % 3 + v - 8 - 3] = n
                }
                for (var e = 0; 18 > e; e += 1) {
                    var n = !r && 1 == (t >> e & 1);
                    s[e % 3 + v - 8 - 3][Math.floor(e / 3)] = n
                }
            }
              , k = function(r, t) {
                for (var e = g << 3 | t, n = a.getBCHTypeInfo(e), o = 0; 15 > o; o += 1) {
                    var i = !r && 1 == (n >> o & 1);
                    6 > o ? s[o][8] = i : 8 > o ? s[o + 1][8] = i : s[v - 15 + o][8] = i
                }
                for (var o = 0; 15 > o; o += 1) {
                    var i = !r && 1 == (n >> o & 1);
                    8 > o ? s[8][v - o - 1] = i : 9 > o ? s[8][15 - o - 1 + 1] = i : s[8][15 - o - 1] = i
                }
                s[v - 8][8] = !r
            }
              , M = function(r, t) {
                for (var e = -1, n = v - 1, o = 7, i = 0, u = a.getMaskFunction(t), f = v - 1; f > 0; f -= 2)
                    for (6 == f && (f -= 1); ; ) {
                        for (var c = 0; 2 > c; c += 1)
                            if (null == s[n][f - c]) {
                                var l = !1;
                                i < r.length && (l = 1 == (r[i] >>> o & 1));
                                var g = u(n, f - c);
                                g && (l = !l),
                                s[n][f - c] = l,
                                o -= 1,
                                -1 == o && (i += 1,
                                o = 7)
                            }
                        if (n += e,
                        0 > n || n >= v) {
                            n -= e,
                            e = -e;
                            break
                        }
                    }
            }
              , C = function(t, e) {
                for (var n = 0, o = 0, i = 0, u = new Array(e.length), f = new Array(e.length), c = 0; c < e.length; c += 1) {
                    var l = e[c].dataCount
                      , g = e[c].totalCount - l;
                    o = Math.max(o, l),
                    i = Math.max(i, g),
                    u[c] = new Array(l);
                    for (var s = 0; s < u[c].length; s += 1)
                        u[c][s] = 255 & t.getBuffer()[s + n];
                    n += l;
                    var v = a.getErrorCorrectPolynomial(g)
                      , h = r(u[c], v.getLength() - 1)
                      , d = h.mod(v);
                    f[c] = new Array(v.getLength() - 1);
                    for (var s = 0; s < f[c].length; s += 1) {
                        var w = s + d.getLength() - f[c].length;
                        f[c][s] = w >= 0 ? d.getAt(w) : 0
                    }
                }
                for (var m = 0, s = 0; s < e.length; s += 1)
                    m += e[s].totalCount;
                for (var y = new Array(m), T = 0, s = 0; o > s; s += 1)
                    for (var c = 0; c < e.length; c += 1)
                        s < u[c].length && (y[T] = u[c][s],
                        T += 1);
                for (var s = 0; i > s; s += 1)
                    for (var c = 0; c < e.length; c += 1)
                        s < f[c].length && (y[T] = f[c][s],
                        T += 1);
                return y
            }
              , D = function(r, t, e) {
                for (var n = u.getRSBlocks(r, t), c = f(), l = 0; l < e.length; l += 1) {
                    var g = e[l];
                    c.put(g.getMode(), 4),
                    c.put(g.getLength(), a.getLengthInBits(g.getMode(), r)),
                    g.write(c)
                }
                for (var s = 0, l = 0; l < n.length; l += 1)
                    s += n[l].dataCount;
                if (c.getLengthInBits() > 8 * s)
                    throw new Error("code length overflow. (" + c.getLengthInBits() + ">" + 8 * s + ")");
                for (c.getLengthInBits() + 4 <= 8 * s && c.put(0, 4); c.getLengthInBits() % 8 != 0; )
                    c.putBit(!1);
                for (; ; ) {
                    if (c.getLengthInBits() >= 8 * s)
                        break;
                    if (c.put(o, 8),
                    c.getLengthInBits() >= 8 * s)
                        break;
                    c.put(i, 8)
                }
                return C(c, n)
            };
            return m.addData = function(r) {
                var t = c(r);
                w.push(t),
                d = null
            }
            ,
            m.isDark = function(r, t) {
                if (0 > r || r >= v || 0 > t || t >= v)
                    throw new Error(r + "," + t);
                return s[r][t]
            }
            ,
            m.getModuleCount = function() {
                return v
            }
            ,
            m.make = function() {
                y(!1, p())
            }
            ,
            m.createTableTag = function(r, t) {
                r = r || 2,
                t = "undefined" == typeof t ? 4 * r : t;
                var e = "";
                e += '<table style="',
                e += " border-width: 0px; border-style: none;",
                e += " border-collapse: collapse;",
                e += " padding: 0px; margin: " + t + "px;",
                e += '">',
                e += "<tbody>";
                for (var n = 0; n < m.getModuleCount(); n += 1) {
                    e += "<tr>";
                    for (var o = 0; o < m.getModuleCount(); o += 1)
                        e += '<td style="',
                        e += " border-width: 0px; border-style: none;",
                        e += " border-collapse: collapse;",
                        e += " padding: 0px; margin: 0px;",
                        e += " width: " + r + "px;",
                        e += " height: " + r + "px;",
                        e += " background-color: ",
                        e += m.isDark(n, o) ? "#000000" : "#ffffff",
                        e += ";",
                        e += '"/>';
                    e += "</tr>"
                }
                return e += "</tbody>",
                e += "</table>"
            }
            ,
            m.createImgTag = function(r, t) {
                r = r || 2,
                t = "undefined" == typeof t ? 4 * r : t;
                var e = m.getModuleCount() * r + 2 * t
                  , n = t
                  , o = e - t;
                return h(e, e, function(t, e) {
                    if (t >= n && o > t && e >= n && o > e) {
                        var a = Math.floor((t - n) / r)
                          , i = Math.floor((e - n) / r);
                        return m.isDark(i, a) ? 0 : 1
                    }
                    return 1
                })
            }
            ,
            m
        };
        t.stringToBytes = function(r) {
            for (var t = new Array, e = 0; e < r.length; e += 1) {
                var n = r.charCodeAt(e);
                t.push(255 & n)
            }
            return t
        }
        ,
        t.createStringToBytes = function(r, t) {
            var e = function() {
                for (var e = s(r), n = function() {
                    var r = e.read();
                    if (-1 == r)
                        throw new Error;
                    return r
                }, o = 0, a = {}; ; ) {
                    var i = e.read();
                    if (-1 == i)
                        break;
                    var u = n()
                      , f = n()
                      , c = n()
                      , l = String.fromCharCode(i << 8 | u)
                      , g = f << 8 | c;
                    a[l] = g,
                    o += 1
                }
                if (o != t)
                    throw new Error(o + " != " + t);
                return a
            }()
              , n = "?".charCodeAt(0);
            return function(r) {
                for (var t = new Array, o = 0; o < r.length; o += 1) {
                    var a = r.charCodeAt(o);
                    if (128 > a)
                        t.push(a);
                    else {
                        var i = e[r.charAt(o)];
                        "number" == typeof i ? (255 & i) == i ? t.push(i) : (t.push(i >>> 8),
                        t.push(255 & i)) : t.push(n)
                    }
                }
                return t
            }
        }
        ;
        var e = {
            MODE_NUMBER: 1,
            MODE_ALPHA_NUM: 2,
            MODE_8BIT_BYTE: 4,
            MODE_KANJI: 8
        }
          , n = {
            L: 1,
            M: 0,
            Q: 3,
            H: 2
        }
          , o = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        }
          , a = function() {
            var t = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]]
              , n = 1335
              , a = 7973
              , u = 21522
              , f = {}
              , c = function(r) {
                for (var t = 0; 0 != r; )
                    t += 1,
                    r >>>= 1;
                return t
            };
            return f.getBCHTypeInfo = function(r) {
                for (var t = r << 10; c(t) - c(n) >= 0; )
                    t ^= n << c(t) - c(n);
                return (r << 10 | t) ^ u
            }
            ,
            f.getBCHTypeNumber = function(r) {
                for (var t = r << 12; c(t) - c(a) >= 0; )
                    t ^= a << c(t) - c(a);
                return r << 12 | t
            }
            ,
            f.getPatternPosition = function(r) {
                return t[r - 1]
            }
            ,
            f.getMaskFunction = function(r) {
                switch (r) {
                case o.PATTERN000:
                    return function(r, t) {
                        return (r + t) % 2 == 0
                    }
                    ;
                case o.PATTERN001:
                    return function(r, t) {
                        return r % 2 == 0
                    }
                    ;
                case o.PATTERN010:
                    return function(r, t) {
                        return t % 3 == 0
                    }
                    ;
                case o.PATTERN011:
                    return function(r, t) {
                        return (r + t) % 3 == 0
                    }
                    ;
                case o.PATTERN100:
                    return function(r, t) {
                        return (Math.floor(r / 2) + Math.floor(t / 3)) % 2 == 0
                    }
                    ;
                case o.PATTERN101:
                    return function(r, t) {
                        return r * t % 2 + r * t % 3 == 0
                    }
                    ;
                case o.PATTERN110:
                    return function(r, t) {
                        return (r * t % 2 + r * t % 3) % 2 == 0
                    }
                    ;
                case o.PATTERN111:
                    return function(r, t) {
                        return (r * t % 3 + (r + t) % 2) % 2 == 0
                    }
                    ;
                default:
                    throw new Error("bad maskPattern:" + r)
                }
            }
            ,
            f.getErrorCorrectPolynomial = function(t) {
                for (var e = r([1], 0), n = 0; t > n; n += 1)
                    e = e.multiply(r([1, i.gexp(n)], 0));
                return e
            }
            ,
            f.getLengthInBits = function(r, t) {
                if (t >= 1 && 10 > t)
                    switch (r) {
                    case e.MODE_NUMBER:
                        return 10;
                    case e.MODE_ALPHA_NUM:
                        return 9;
                    case e.MODE_8BIT_BYTE:
                        return 8;
                    case e.MODE_KANJI:
                        return 8;
                    default:
                        throw new Error("mode:" + r)
                    }
                else if (27 > t)
                    switch (r) {
                    case e.MODE_NUMBER:
                        return 12;
                    case e.MODE_ALPHA_NUM:
                        return 11;
                    case e.MODE_8BIT_BYTE:
                        return 16;
                    case e.MODE_KANJI:
                        return 10;
                    default:
                        throw new Error("mode:" + r)
                    }
                else {
                    if (!(41 > t))
                        throw new Error("type:" + t);
                    switch (r) {
                    case e.MODE_NUMBER:
                        return 14;
                    case e.MODE_ALPHA_NUM:
                        return 13;
                    case e.MODE_8BIT_BYTE:
                        return 16;
                    case e.MODE_KANJI:
                        return 12;
                    default:
                        throw new Error("mode:" + r)
                    }
                }
            }
            ,
            f.getLostPoint = function(r) {
                for (var t = r.getModuleCount(), e = 0, n = 0; t > n; n += 1)
                    for (var o = 0; t > o; o += 1) {
                        for (var a = 0, i = r.isDark(n, o), u = -1; 1 >= u; u += 1)
                            if (!(0 > n + u || n + u >= t))
                                for (var f = -1; 1 >= f; f += 1)
                                    0 > o + f || o + f >= t || (0 != u || 0 != f) && i == r.isDark(n + u, o + f) && (a += 1);
                        a > 5 && (e += 3 + a - 5)
                    }
                for (var n = 0; t - 1 > n; n += 1)
                    for (var o = 0; t - 1 > o; o += 1) {
                        var c = 0;
                        r.isDark(n, o) && (c += 1),
                        r.isDark(n + 1, o) && (c += 1),
                        r.isDark(n, o + 1) && (c += 1),
                        r.isDark(n + 1, o + 1) && (c += 1),
                        (0 == c || 4 == c) && (e += 3)
                    }
                for (var n = 0; t > n; n += 1)
                    for (var o = 0; t - 6 > o; o += 1)
                        r.isDark(n, o) && !r.isDark(n, o + 1) && r.isDark(n, o + 2) && r.isDark(n, o + 3) && r.isDark(n, o + 4) && !r.isDark(n, o + 5) && r.isDark(n, o + 6) && (e += 40);
                for (var o = 0; t > o; o += 1)
                    for (var n = 0; t - 6 > n; n += 1)
                        r.isDark(n, o) && !r.isDark(n + 1, o) && r.isDark(n + 2, o) && r.isDark(n + 3, o) && r.isDark(n + 4, o) && !r.isDark(n + 5, o) && r.isDark(n + 6, o) && (e += 40);
                for (var l = 0, o = 0; t > o; o += 1)
                    for (var n = 0; t > n; n += 1)
                        r.isDark(n, o) && (l += 1);
                var g = Math.abs(100 * l / t / t - 50) / 5;
                return e += 10 * g
            }
            ,
            f
        }()
          , i = function() {
            for (var r = new Array(256), t = new Array(256), e = 0; 8 > e; e += 1)
                r[e] = 1 << e;
            for (var e = 8; 256 > e; e += 1)
                r[e] = r[e - 4] ^ r[e - 5] ^ r[e - 6] ^ r[e - 8];
            for (var e = 0; 255 > e; e += 1)
                t[r[e]] = e;
            var n = {};
            return n.glog = function(r) {
                if (1 > r)
                    throw new Error("glog(" + r + ")");
                return t[r]
            }
            ,
            n.gexp = function(t) {
                for (; 0 > t; )
                    t += 255;
                for (; t >= 256; )
                    t -= 255;
                return r[t]
            }
            ,
            n
        }()
          , u = function() {
            var r = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]]
              , t = function(r, t) {
                var e = {};
                return e.totalCount = r,
                e.dataCount = t,
                e
            }
              , e = {}
              , o = function(t, e) {
                switch (e) {
                case n.L:
                    return r[4 * (t - 1) + 0];
                case n.M:
                    return r[4 * (t - 1) + 1];
                case n.Q:
                    return r[4 * (t - 1) + 2];
                case n.H:
                    return r[4 * (t - 1) + 3];
                default:
                    return
                }
            };
            return e.getRSBlocks = function(r, e) {
                var n = o(r, e);
                if ("undefined" == typeof n)
                    throw new Error("bad rs block @ typeNumber:" + r + "/errorCorrectLevel:" + e);
                for (var a = n.length / 3, i = new Array, u = 0; a > u; u += 1)
                    for (var f = n[3 * u + 0], c = n[3 * u + 1], l = n[3 * u + 2], g = 0; f > g; g += 1)
                        i.push(t(c, l));
                return i
            }
            ,
            e
        }()
          , f = function() {
            var r = new Array
              , t = 0
              , e = {};
            return e.getBuffer = function() {
                return r
            }
            ,
            e.getAt = function(t) {
                var e = Math.floor(t / 8);
                return 1 == (r[e] >>> 7 - t % 8 & 1)
            }
            ,
            e.put = function(r, t) {
                for (var n = 0; t > n; n += 1)
                    e.putBit(1 == (r >>> t - n - 1 & 1))
            }
            ,
            e.getLengthInBits = function() {
                return t
            }
            ,
            e.putBit = function(e) {
                var n = Math.floor(t / 8);
                r.length <= n && r.push(0),
                e && (r[n] |= 128 >>> t % 8),
                t += 1
            }
            ,
            e
        }
          , c = function(r) {
            var n = e.MODE_8BIT_BYTE
              , o = t.stringToBytes(r)
              , a = {};
            return a.getMode = function() {
                return n
            }
            ,
            a.getLength = function(r) {
                return o.length
            }
            ,
            a.write = function(r) {
                for (var t = 0; t < o.length; t += 1)
                    r.put(o[t], 8)
            }
            ,
            a
        }
          , l = function() {
            var r = new Array
              , t = {};
            return t.writeByte = function(t) {
                r.push(255 & t)
            }
            ,
            t.writeShort = function(r) {
                t.writeByte(r),
                t.writeByte(r >>> 8)
            }
            ,
            t.writeBytes = function(r, e, n) {
                e = e || 0,
                n = n || r.length;
                for (var o = 0; n > o; o += 1)
                    t.writeByte(r[o + e])
            }
            ,
            t.writeString = function(r) {
                for (var e = 0; e < r.length; e += 1)
                    t.writeByte(r.charCodeAt(e))
            }
            ,
            t.toByteArray = function() {
                return r
            }
            ,
            t.toString = function() {
                var t = "";
                t += "[";
                for (var e = 0; e < r.length; e += 1)
                    e > 0 && (t += ","),
                    t += r[e];
                return t += "]"
            }
            ,
            t
        }
          , g = function() {
            var r = 0
              , t = 0
              , e = 0
              , n = ""
              , o = {}
              , a = function(r) {
                n += String.fromCharCode(i(63 & r))
            }
              , i = function(r) {
                if (0 > r)
                    ;
                else {
                    if (26 > r)
                        return 65 + r;
                    if (52 > r)
                        return 97 + (r - 26);
                    if (62 > r)
                        return 48 + (r - 52);
                    if (62 == r)
                        return 43;
                    if (63 == r)
                        return 47
                }
                throw new Error("n:" + r)
            };
            return o.writeByte = function(n) {
                for (r = r << 8 | 255 & n,
                t += 8,
                e += 1; t >= 6; )
                    a(r >>> t - 6),
                    t -= 6
            }
            ,
            o.flush = function() {
                if (t > 0 && (a(r << 6 - t),
                r = 0,
                t = 0),
                e % 3 != 0)
                    for (var o = 3 - e % 3, i = 0; o > i; i += 1)
                        n += "="
            }
            ,
            o.toString = function() {
                return n
            }
            ,
            o
        }
          , s = function(r) {
            var t = r
              , e = 0
              , n = 0
              , o = 0
              , a = {};
            a.read = function() {
                for (; 8 > o; ) {
                    if (e >= t.length) {
                        if (0 == o)
                            return -1;
                        throw new Error("unexpected end of file./" + o)
                    }
                    var r = t.charAt(e);
                    if (e += 1,
                    "=" == r)
                        return o = 0,
                        -1;
                    r.match(/^\s$/) || (n = n << 6 | i(r.charCodeAt(0)),
                    o += 6)
                }
                var a = n >>> o - 8 & 255;
                return o -= 8,
                a
            }
            ;
            var i = function(r) {
                if (r >= 65 && 90 >= r)
                    return r - 65;
                if (r >= 97 && 122 >= r)
                    return r - 97 + 26;
                if (r >= 48 && 57 >= r)
                    return r - 48 + 52;
                if (43 == r)
                    return 62;
                if (47 == r)
                    return 63;
                throw new Error("c:" + r)
            };
            return a
        }
          , v = function(r, t) {
            var e = r
              , n = t
              , o = new Array(r * t)
              , a = {};
            a.setPixel = function(r, t, n) {
                o[t * e + r] = n
            }
            ,
            a.write = function(r) {
                r.writeString("GIF87a"),
                r.writeShort(e),
                r.writeShort(n),
                r.writeByte(128),
                r.writeByte(0),
                r.writeByte(0),
                r.writeByte(0),
                r.writeByte(0),
                r.writeByte(0),
                r.writeByte(255),
                r.writeByte(255),
                r.writeByte(255),
                r.writeString(","),
                r.writeShort(0),
                r.writeShort(0),
                r.writeShort(e),
                r.writeShort(n),
                r.writeByte(0);
                var t = 2
                  , o = u(t);
                r.writeByte(t);
                for (var a = 0; o.length - a > 255; )
                    r.writeByte(255),
                    r.writeBytes(o, a, 255),
                    a += 255;
                r.writeByte(o.length - a),
                r.writeBytes(o, a, o.length - a),
                r.writeByte(0),
                r.writeString(";")
            }
            ;
            var i = function(r) {
                var t = r
                  , e = 0
                  , n = 0
                  , o = {};
                return o.write = function(r, o) {
                    if (r >>> o != 0)
                        throw new Error("length over");
                    for (; e + o >= 8; )
                        t.writeByte(255 & (r << e | n)),
                        o -= 8 - e,
                        r >>>= 8 - e,
                        n = 0,
                        e = 0;
                    n = r << e | n,
                    e += o
                }
                ,
                o.flush = function() {
                    e > 0 && t.writeByte(n)
                }
                ,
                o
            }
              , u = function(r) {
                for (var t = 1 << r, e = (1 << r) + 1, n = r + 1, a = f(), u = 0; t > u; u += 1)
                    a.add(String.fromCharCode(u));
                a.add(String.fromCharCode(t)),
                a.add(String.fromCharCode(e));
                var c = l()
                  , g = i(c);
                g.write(t, n);
                var s = 0
                  , v = String.fromCharCode(o[s]);
                for (s += 1; s < o.length; ) {
                    var h = String.fromCharCode(o[s]);
                    s += 1,
                    a.contains(v + h) ? v += h : (g.write(a.indexOf(v), n),
                    a.size() < 4095 && (a.size() == 1 << n && (n += 1),
                    a.add(v + h)),
                    v = h)
                }
                return g.write(a.indexOf(v), n),
                g.write(e, n),
                g.flush(),
                c.toByteArray()
            }
              , f = function() {
                var r = {}
                  , t = 0
                  , e = {};
                return e.add = function(n) {
                    if (e.contains(n))
                        throw new Error("dup key:" + n);
                    r[n] = t,
                    t += 1
                }
                ,
                e.size = function() {
                    return t
                }
                ,
                e.indexOf = function(t) {
                    return r[t]
                }
                ,
                e.contains = function(t) {
                    return "undefined" != typeof r[t]
                }
                ,
                e
            };
            return a
        }
          , h = function(r, t, e, n) {
            for (var o = v(r, t), a = 0; t > a; a += 1)
                for (var i = 0; r > i; i += 1)
                    o.setPixel(i, a, e(i, a));
            var u = l();
            o.write(u);
            for (var f = g(), c = u.toByteArray(), s = 0; s < c.length; s += 1)
                f.writeByte(c[s]);
            f.flush();
            var h = "";
            return h += "<img",
            h += ' src="',
            h += "data:image/gif;base64,",
            h += f,
            h += '"',
            h += ' width="',
            h += r,
            h += '"',
            h += ' height="',
            h += t,
            h += '"',
            n && (h += ' alt="',
            h += n,
            h += '"'),
            h += "/>"
        };
        return t
    }();
    return function(r) {
        "function" == typeof define && define.amd ? define([], r) : "object" == typeof exports && (module.exports = r())
    }(function() {
        return r
    }),
    !function(r) {
        r.stringToBytes = function(r) {
            function t(r) {
                for (var t = [], e = 0; e < r.length; e++) {
                    var n = r.charCodeAt(e);
                    128 > n ? t.push(n) : 2048 > n ? t.push(192 | n >> 6, 128 | 63 & n) : 55296 > n || n >= 57344 ? t.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n) : (e++,
                    n = 65536 + ((1023 & n) << 10 | 1023 & r.charCodeAt(e)),
                    t.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n))
                }
                return t
            }
            return t(r)
        }
    }(r),
    r
});
var run_buying = function(data, dom_key){
    // var x = hypepdp.utils[_0x69d0("0xaf")](data);
    // var UII = x[_0x69d0("0x98")]["msg"] 
    if (dom_key === "" || dom_key === undefined || dom_key === null){
        dom_key = "test"
    }
    var a = data;
    UII = new ananbeike()["d"](a[_0x69d0("0xac")][_0x69d0("0x19c")], a[_0x69d0("0xac")]["iv"], a[_0x69d0("0xac")][_0x69d0("0x19d")], dom_key)
    console.log("这是UII", UII)

    var e = data["returnObject"]["st"]
    e = e.split("").reverse().join(""); 
var E = {
    "XEO": function m(M, L) {
        return M + L
    },
    "kqL": function K(M, L) {
        return M + L
    },
    "QNk": function j(M, L) {
        return M === L
    },
    "XzG": function o(L, M) {
        return L === M
    },
    "Fgj": function A(M, L) {
        return M + L
    },
    "xVI": function B(M, L) {
        return M + L
    },
    "YTy": function l(M, L) {
        return M + L
    },
    "ZBC": function h(M, L) {
        return M + L
    },
    "Vpu": function f(L, M) {
        return L + M
    },
    "TaJ": function c(M, L) {
        return M + L
    },
    "oeD": function F(L, M) {
        return L == M
    },
    "mbx": function z(L, M) {
        return L(M)
    },
    "Jfv": function G(M, L) {
        return M + L
    },
    "qvP": function s(M, L) {
        return M + L
    },
    "tQI": function D(L, M) {
        return L === M
    },
    "fzG": function t(L, M) {
        return L === M
    },
    "zTT": function w(M, L) {
        return M + L
    },
    "Fvg": function J(M, L) {
        return M - L
    },
    "NwJ": function y(M, L) {
        return M(L)
    },
    "Kfr": function i(M, L) {
        return M + L
    },
    "Hog": function C(L, M) {
        return L + M
    },
    "nwc": function k(L, M) {
        return L == M
    },
    "QRY": function d(L, M) {
        return L + M
    }
}  // 进行一次计算。       //_0x69d0("0x6")  === split，，   _0x69d0("0xa0") === revers，， _0x69d0("0xa1") === join，，
    e = E[_0x69d0("0xae")](e[_0x69d0("0xa5")](10, e[_0x69d0("0xa4")] - 1), e[_0x69d0("0xa5")](0, 10))   // 第二次计算
    return {
        "ct2": UII,
        "t": e,       
    }
}
data = {
    "result": true,
    "statusCode": null,
    "resultMessage": null,
    "returnObject": {
        "st": "431baf56-a2bb-4433-90a0-dd765bcd1ab4",
        "passphrase": "7A6741F01C36",
        "iv": "7A674153C63CFF1AD7F0E261C369AB2C",
        "key": "2f3dad04f4b4c1df224f85faa43f23f6"
    },
    "extraResultMessages": []
}
dom_key = "Alhptiwf77KDZx5/tyDNdllE3/5Wcn++/vzmQuFs0r1gVtgHnBRy5yfHJEcO9TD3"
console.log(run_buying(data, dom_key))