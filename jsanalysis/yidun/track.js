{

    y=function (e, t) {
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
    },

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
    },

    sample= function(e, t) {
        var n = e.length;
        if (n <= t)
            return e;
        for (var i = [], r = 0, o = 0; o < n; o++)
            o >= r * (n - 1) / (t - 1) && (i.push(e[o]),
                r += 1);
        return i
    }
    initData= function() {
        this.drag = Object.assign({}, S),
            this.traceData = [],
            this.mouseDownCounts = 0
    },
    changeSlideIcon= function(e) {
        !this.$store.state.config.customStyles.icon.slider && this.$slideIcon && (e ? (this.$slideIcon.src = e,
            this.$slideIcon.style.display = "block") : this.$slideIcon.style.display = "none")
    },
    initEvents= function() {
        var e = this;
        this.$slideIndicator = o.find("." + u.SLIDE_INDICATOR, this.$el),
            this.$jigsaw = o.find("." + u.JIGSAW, this.$el),
            this.$control = o.find("." + u.CONTROL, this.$el),
            this.$slider = o.find("." + u.SLIDER, this.$el),
            this.$slideIcon = o.find(".yidun_slider__icon--img", this.$el);
        var t = this.$parent.$data.customStyles.controlBar
            , n = void 0 === t ? {} : t;
        this.controlBar = n;
        var i = this.onMouseDown.bind(this)
            , r = this.onMouseDown.bind(this)
            , a = this.onMouseMove.bind(this)
            , l = this.onMouseUp.bind(this)
            , s = o.supportPointer ? "pointer" : "mouse";
        return o.on(this.$slider, s + "down", i),
            o.on(this.$jigsaw, s + "down", r),
            o.on(_, s + "move", a),
            o.on(_, s + "up", l),
            this.sliderTransition = o.transition(this.$slider, {
                beforeLeave: function(e) {
                    e.style.transition = "left .3s ease-out"
                },
                afterLeave: function(e) {
                    e.style.transition = ""
                }
            }),
        o.supportPointer && (document.documentElement.style.touchAction = "none"),
            function() {
                o.off(e.$slider, s + "down", i),
                    o.off(e.$jigsaw, s + "down", r),
                    o.off(_, s + "move", a),
                    o.off(_, s + "up", l),
                    e.sliderTransition.dispose(),
                o.supportPointer && (document.documentElement.style.touchAction = "auto")
            }
    },
    reset= function() {
        var e = this.$store.state.countsOfVerifyError > f;
        e || (this.initData(),
            o.delClass(this.$control, "yidun_control--moving"),
        parseInt(this.$slider.style.left) && this.sliderTransition.leave(),
            this.$slideIndicator.style.width = 0,
            this.$slider.style.left = 0,
            this.$jigsaw.style.left = 0)
    },
    changeLoadStatus= function(e) {
        var t = e.data;
        if (this.changeSlideIcon(this.controlBar.slideIcon),
        "loading" === e.status && t) {
            var n = this.$store.state
                , r = n.langPkg
                , a = n.config
                , l = o.find(".yidun_tips__text", this.$el)
                , s = o.find(".yidun_bg-img", this.$el)
                , f = o.find("." + u.JIGSAW, this.$el)
                , j = this.$store.commit
                , p = m(a, {
                token: t.token
            });
            g.all([g.image({
                url: t.bg,
                timeout: a.timeout,
                onTryError: p
            }), g.image({
                url: t.front,
                timeout: a.timeout,
                onTryError: p
            })]).then(function(e) {
                var n = i(e, 2)
                    , a = n[0]
                    , u = n[1];
                s.src = a.src,
                    f.src = u.src,
                    o.text(l, r.slideTip),
                    j(c, {
                        status: "done",
                        data: t
                    })
            })["catch"](function(e) {
                var n = Object.assign({}, e.data, {
                    token: t.token
                });
                j(c, {
                    status: "fail"
                }),
                    j(d, {
                        name: "onError",
                        args: [new v(b,e.message,n)]
                    })
            })
        }
    },
    onMouseDown= function(e) {
        e.preventDefault(),
            this.mouseDownCounts++,
            this.width = this.$el.offsetWidth;
        var t = this.$store.state
            , n = t.load
            , i = t.verifyStatus;
        if ("done" === n.status && !i) {
            var r = e.clientX
                , o = e.clientY
                , l = this.drag;
            "dragend" === l.status && Object.assign(l, {
                beginTime: a.now(),
                clientX: r,
                startX: r,
                clientY: o,
                startY: o,
                dragX: 0
            })
        }
    },
    onMouseMove= function(e) {
        var t = e.clientX
            , n = e.clientY
            , i = this.drag
            , r = i.status
            , l = i.beginTime
            , u = i.startX;
        if (i.status = l && t - u > 3 && "dragend" === r ? "dragstart" : r,
        "dragend" !== i.status) {
            !(e.type.indexOf("touch") !== -1 && o.supportPassive) && e.preventDefault(),
                Object.assign(i, {
                    clientX: t,
                    clientY: n,
                    dragX: t - i.startX
                });
            var s = this.$store.state.token
                , f = y(s, [Math.round(i.dragX < 0 ? 0 : i.dragX), Math.round(i.clientY - i.startY), a.now() - i.beginTime] + "");
            this.traceData.push(f),
            "dragstart" === i.status && this.onMouseMoveStart(e),
            "dragging" === i.status && this.onMouseMoving(e)
        }
    },
    onMouseMoveStart= function(e) {
        var t = o.getComputedStyle(this.$slider, "left")
            , n = o.find(".yidun_tips__text", this.$el);
        o.text(n, ""),
            Object.assign(this.drag, {
                status: "dragging",
                startLeft: parseInt(t.slice(0, -2), 10)
            }),
            this.$parent.getAnticheatToken({
                timeout: 750
            })
    },
    onMouseMoving= function() {
        var e = this.$slider.offsetWidth
            , t = this.$jigsaw.offsetWidth
            , n = this.drag.left = this.restrict(this.$slider);
        this.$slider.style.left = n + "px",
            this.$jigsaw.style.left = this.restrict(this.$jigsaw, e - t) + "px",
            o.addClass(this.$control, "yidun_control--moving"),
            this.$slideIndicator.style.width = n + e + "px",
            this.changeSlideIcon(this.controlBar.slideIconMoving)
    },
    onMouseUp= function(e,token) {
        var t = this.drag;
        if ("dragend" === t.status)
            return void Object.assign(t, {
                beginTime: 0
            });
        Object.assign(t, S);
        var n = sample(this.traceData, s)
            , i = token
            , r = B(y(i, parseInt(this.$jigsaw.style.left, 10) / this.width * 100 + ""));
        this.onVerifyCaptcha({
            data: JSON.stringify({
                d: B(n.join(":")),
                m: "",
                p: r,
                ext: h(y(i, this.mouseDownCounts + "," + this.traceData.length))
            })
        })
    },
    restrict= function(e, t) {
        if (e) {
            var n, i, r = this.drag, o = r.startLeft, a = r.dragX, l = this.width, u = e.offsetWidth, s = this.$slider.offsetWidth, f = l - u, j = o + a, c = t < 0 ? -t : t / 2;
            return e === this.$jigsaw && (a <= c ? (n = a,
                i = t < 0 ? -n / 2 : n,
                j += i) : l - a - s <= c ? (n = a - (l - s - c),
                i = t < 0 ? -n / 2 : n,
                j += t / 2 + i) : j += t / 2),
            j <= 0 && (j = 0),
            j >= f && (j = f),
                j
        }
    }
}