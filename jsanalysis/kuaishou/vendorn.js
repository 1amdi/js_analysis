const jsdom = require("jsdom")
const { JSDOM } = jsdom;
const dom = new JSDOM();
window = dom.window;
document = window.document;
var e={
    "identity_package": {
    "device_id": "",
        "user_id": "",
        "union_id": "",
        "global_id": ""
},
    "network_package": {
    "type": 0
},
    "app_package": {
    "product": 0,
        "channel": "",
        "version_name": "",
        "version_code": 0,
        "package_name": "",
        "product_name": "KS_GAME_LIVE_PC"
},
    "experiment": [],
    "service_name": "",
    "safety_id": ""
}

function v(t) {
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
        domain:".kuaishou.com",
        path: "/"
    }),
        n
}

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
        }

    }
}()

test =new nt(e)
console.log(test)