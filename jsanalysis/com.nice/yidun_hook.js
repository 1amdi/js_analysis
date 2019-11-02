verifyIntelliCaptcha= function(e) {//3955
    var t = this;
    this.$setData({
        status: "checking"
    });

    _ = function(e) {
        if (null == e || void 0 == e)
            return null;
        if (0 == e.length)
            return "";
        var t = 3;
        try {
            for (var n = [], i = 0; i < e.length; ) {
                if (!(i + t <= e.length)) {
                    n.push(m(e, i, e.length - i));
                    break
                }
                n.push(m(e, i, t)),
                    i += t
            }
            return n.join("")
        } catch (r) {
            throw new Error("1010")
        }
    };

    sample=function(e, t) {
        var n = e.length;
        if (n <= t)
            return e;
        for (var i = [], r = 0, o = 0; o < n; o++)
            o >= r * (n - 1) / (t - 1) && (i.push(e[o]),
                r += 1);
        return i
    };
        B = function(e) {
            var t = "14731382d816714fC59E47De5dA0C871D3F";
            if (null == t || void 0 == t)
                throw new Error("1008");
            null != e && void 0 != e || (e = "");
            var n = e + E(e)
                , i = j(n)
                , r = j(t)
                , o = Y(i, r);
            return _(o)
        };

    T =function n(e, t) {
        function n(e, t) {
            return e.charCodeAt(Math.floor(t % e.length))
        }
        function i(e, t) {
            return t.split("").map(function(t, i) {
                return t.charCodeAt(0) ^ n(e, i)
            })
        }
        return t = i(e, t),
            _(t)
    };
    var test = function(n) {
        k.all([new k(function(i, r) {
                var o = t.$store.state.token
                    , l = t.$el.getBoundingClientRect()
                    , u = l.left
                    , s = l.top
                    , f = b.now()
                    , j = T(o, [Math.round(e.clientX - u), Math.round(e.clientY - s), f - (t.beginTime || f)] + "")
                    , c = t.traceData.map(function(e) {
                    return T(o, e)
                });
                t.$store.dispatch(a, {
                    token: o,
                    acToken: n,
                    type: p.INTELLISENSE,
                    width: t.getWidth(),
                    data: JSON.stringify({
                        d: "",
                        m: B(sample(c, h).join(":")),
                        p: B(j),
                        ext: B(T(o, "1," + c.length))
                    })
                }, function(e, t) {
                    return e ? void r(e) : void i(t)
                })
            }
        ), new k(function(e, t) {
                window.setTimeout(e, 300)
            }
        )]).then(function(e) {
            var n = i(e, 1);
            n[0];
            t.$setData({
                status: "success"
            })
        })["catch"](function() {
            return t.loadClassicCaptcha()
        })
    };
    this.$store.state.captchaAnticheat.getToken({
        timeout: 500
    }).then(n)["catch"](n)
}



//this这种变量的属性怎么弄，还有window不知道什么时候它的属性就发生了变化
// var n = window.gdxidpyhxde fingerprint 不知道什么时候赋值的 3476