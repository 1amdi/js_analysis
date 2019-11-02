var crypto = require('crypto');

function o(e) {
    if (e.length <= 1)
        return e;
    for (var t = Math.floor(e.length / 2), n = e.splice(t, 1), i = [], r = [], a = 0; a < e.length; a++)
        n > e[a] ? i.push(e[a]) : r.push(e[a]);
    return o(i).concat(n, o(r))
}

_doFinalize=function() {
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
}

function r(e) {
    var t = []
        , n = "";
    for (n in e)
        t.push(n + "=" + e[n]);
    return t
}

finalize=function(e) {
    e && this._append(e);
    var t = this._doFinalize();
    return t
},
    md5 =function md5(data){
        // 以md5的格式创建一个哈希值
        let hash = crypto.createHash('md5');
        return hash.update(data).digest('base64');
    }

sha1 =function sha1(data){
    // 以sha1的格式创建一个哈希值
    let hash = crypto.createHash('sha1');
    return hash.update(data).digest('base64');
}

function a(e, t, n, i, a, s) {
    var u = r(n)
        , d = r(i);
    u = o(u),
        a = a || "01",
        e = e.toUpperCase(),
        s = s || Math.round((new Date).getTime() / 1e3);
    var f = md5(d.join("&"))
        , p = t + (u.length ? "?" + u.join("&") : "")
        , h = s.toString(16)
        , g = a + "\n" + e + "\n" + f + "\n" + p + "\n" + s
        , m = sha1(g);
    return a + m + h
}

e="POST"
t = "/mroute.html"
n={"method": "beibei.h5.register"}
i={"tel": "18410096754", "tel_code": "566453", "passwd": "7876ghjf", "checkcode": "", "rams_device_id": 675144628}
forth = undefined
fifth = undefined
var test = a(e,t,n,i,forth,fifth)
console.log(test)