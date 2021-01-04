/*
 CanvasJS HTML5 & JavaScript Charts - v3.2 GA - https://canvasjs.com/ 
 Copyright 2020 fenopix

  --------------------- License Information --------------------
 CanvasJS is a commercial product which requires purchase of license. Without a commercial license you can use it for evaluation purposes for upto 30 days. Please refer to the following link for further details.
     https://canvasjs.com/license/

*/
/*eslint-disable*/
/*jshint ignore:start*/
(function() {
    function na(k, m) {
        k.prototype = bb(m.prototype);
        k.prototype.constructor = k;
        k.base = m.prototype
    }

    function bb(k) {
        function m() {}
        m.prototype = k;
        return new m
    }

    function Ua(k, m, v) {
        "millisecond" === v ? k.setMilliseconds(k.getMilliseconds() + 1 * m) : "second" === v ? k.setSeconds(k.getSeconds() + 1 * m) : "minute" === v ? k.setMinutes(k.getMinutes() + 1 * m) : "hour" === v ? k.setHours(k.getHours() + 1 * m) : "day" === v ? k.setDate(k.getDate() + 1 * m) : "week" === v ? k.setDate(k.getDate() + 7 * m) : "month" === v ? k.setMonth(k.getMonth() + 1 * m) : "year" === v && k.setFullYear(k.getFullYear() +
            1 * m);
        return k
    }

    function $(k, m) {
        var v = !1;
        0 > k && (v = !0, k *= -1);
        k = "" + k;
        for (m = m ? m : 1; k.length < m;) k = "0" + k;
        return v ? "-" + k : k
    }

    function Ea(k) {
        if (!k) return k;
        k = k.replace(/^\s\s*/, "");
        for (var m = /\s/, v = k.length; m.test(k.charAt(--v)););
        return k.slice(0, v + 1)
    }

    function Aa(k) {
        k.roundRect = function(k, v, s, u, qa, D, y, E) {
            y && (this.fillStyle = y);
            E && (this.strokeStyle = E);
            "undefined" === typeof qa && (qa = 5);
            this.lineWidth = D;
            this.beginPath();
            this.moveTo(k + qa, v);
            this.lineTo(k + s - qa, v);
            this.quadraticCurveTo(k + s, v, k + s, v + qa);
            this.lineTo(k + s,
                v + u - qa);
            this.quadraticCurveTo(k + s, v + u, k + s - qa, v + u);
            this.lineTo(k + qa, v + u);
            this.quadraticCurveTo(k, v + u, k, v + u - qa);
            this.lineTo(k, v + qa);
            this.quadraticCurveTo(k, v, k + qa, v);
            this.closePath();
            y && this.fill();
            E && 0 < D && this.stroke()
        }
    }

    function Oa(k, m) { return k - m }

    function P(k) {
        var m = ((k & 16711680) >> 16).toString(16),
            v = ((k & 65280) >> 8).toString(16);
        k = ((k & 255) >> 0).toString(16);
        m = 2 > m.length ? "0" + m : m;
        v = 2 > v.length ? "0" + v : v;
        k = 2 > k.length ? "0" + k : k;
        return "#" + m + v + k
    }

    function cb(k, m) {
        var v = this.length >>> 0,
            s = Number(m) || 0,
            s = 0 > s ? Math.ceil(s) :
            Math.floor(s);
        for (0 > s && (s += v); s < v; s++)
            if (s in this && this[s] === k) return s;
        return -1
    }

    function s(k) { return null === k || "undefined" === typeof k }

    function Ba(k) { k.indexOf || (k.indexOf = cb); return k }

    function db(k) { if (J.fSDec) k[Y("`eeDwdouMhrudods")](Y("e`u`@ohl`uhnoHuds`uhnoDoe"), function() { J._fTWm && J._fTWm(k) }) }

    function Va(k, m, v) {
        v = v || "normal";
        var s = k + "_" + m + "_" + v,
            u = Wa[s];
        if (isNaN(u)) {
            try {
                k = "position:absolute; left:0px; top:-20000px; padding:0px;margin:0px;border:none;white-space:pre;line-height:normal;font-family:" +
                    k + "; font-size:" + m + "px; font-weight:" + v + ";";
                if (!va) {
                    var qa = document.body;
                    va = document.createElement("span");
                    va.innerHTML = "";
                    var D = document.createTextNode("Mpgyi");
                    va.appendChild(D);
                    qa.appendChild(va)
                }
                va.style.display = "";
                va.setAttribute("style", k);
                u = Math.round(va.offsetHeight);
                va.style.display = "none"
            } catch (y) { u = Math.ceil(1.1 * m) }
            u = Math.max(u, m);
            Wa[s] = u
        }
        return u
    }

    function N(k, m) {
        var v = [];
        if (v = {
                solid: [],
                shortDash: [3, 1],
                shortDot: [1, 1],
                shortDashDot: [3, 1, 1, 1],
                shortDashDotDot: [3, 1, 1, 1, 1, 1],
                dot: [1, 2],
                dash: [4,
                    2
                ],
                dashDot: [4, 2, 1, 2],
                longDash: [8, 2],
                longDashDot: [8, 2, 1, 2],
                longDashDotDot: [8, 2, 1, 2, 1, 2]
            }[k || "solid"])
            for (var s = 0; s < v.length; s++) v[s] *= m;
        else v = [];
        return v
    }

    function V(k, m, v, u, y) {
        u = u || [];
        y = s(y) ? eb ? { passive: !1, capture: !1 } : !1 : y;
        u.push([k, m, v, y]);
        return k.addEventListener ? (k.addEventListener(m, v, y), v) : k.attachEvent ? (u = function(m) {
            m = m || window.event;
            m.preventDefault = m.preventDefault || function() { m.returnValue = !1 };
            m.stopPropagation = m.stopPropagation || function() { m.cancelBubble = !0 };
            v.call(k, m)
        }, k.attachEvent("on" +
            m, u), u) : !1
    }

    function fb(k) {
        if (k._menuButton) k.exportEnabled ? Ja(k._menuButton) : ta(k._menuButton);
        else if (k.exportEnabled && u) {
            var m = !1;
            k._menuButton = document.createElement("button");
            ua(k, k._menuButton, "menu");
            k._toolBar.appendChild(k._menuButton);
            V(k._menuButton, "touchstart", function(k) { m = !0 }, k.allDOMEventHandlers);
            V(k._menuButton, "click", function() {
                "none" !== k._dropdownMenu.style.display || k._dropDownCloseTime && 500 >= (new Date).getTime() - k._dropDownCloseTime.getTime() || (k._dropdownMenu.style.display = "block",
                    k._menuButton.blur(), k._dropdownMenu.focus())
            }, k.allDOMEventHandlers, !0);
            V(k._menuButton, "mouseover", function() { m || (oa(k._menuButton, { backgroundColor: k.toolbar.backgroundColorOnHover, color: k.toolbar.fontColorOnHover }), 0 >= navigator.userAgent.search("MSIE") && oa(k._menuButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" })) }, k.allDOMEventHandlers, !0);
            V(k._menuButton, "mouseout", function() {
                m || (oa(k._menuButton, { backgroundColor: k.toolbar.backgroundColor, color: k.toolbar.fontColor }), 0 >=
                    navigator.userAgent.search("MSIE") && oa(k._menuButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }))
            }, k.allDOMEventHandlers, !0)
        }
        if (!k._dropdownMenu && k.exportEnabled && u) {
            m = !1;
            k._dropdownMenu = document.createElement("div");
            k._dropdownMenu.setAttribute("tabindex", -1);
            var v = -1 !== k.theme.indexOf("dark") ? "black" : "#888888";
            k._dropdownMenu.style.cssText = "position: absolute; z-index: 1; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer;right: 0px;top: 25px;min-width: 120px;outline: 0;font-size: 14px; font-family: Arial, Helvetica, sans-serif;padding: 5px 0px 5px 0px;text-align: left;line-height: 10px;background-color:" +
                k.toolbar.backgroundColor + ";box-shadow: 2px 2px 10px " + v;
            k._dropdownMenu.style.display = "none";
            k._toolBar.appendChild(k._dropdownMenu);
            V(k._dropdownMenu, "blur", function() {
                ta(k._dropdownMenu);
                k._dropDownCloseTime = new Date
            }, k.allDOMEventHandlers, !0);
            v = document.createElement("div");
            v.style.cssText = "padding: 12px 8px 12px 8px";
            v.innerHTML = k._cultureInfo.printText;
            v.style.backgroundColor = k.toolbar.backgroundColor;
            v.style.color = k.toolbar.fontColor;
            k._dropdownMenu.appendChild(v);
            V(v, "touchstart", function(k) {
                m = !0
            }, k.allDOMEventHandlers);
            V(v, "mouseover", function() { m || (this.style.backgroundColor = k.toolbar.backgroundColorOnHover, this.style.color = k.toolbar.fontColorOnHover) }, k.allDOMEventHandlers, !0);
            V(v, "mouseout", function() { m || (this.style.backgroundColor = k.toolbar.backgroundColor, this.style.color = k.toolbar.fontColor) }, k.allDOMEventHandlers, !0);
            V(v, "click", function() {
                k.print();
                ta(k._dropdownMenu)
            }, k.allDOMEventHandlers, !0);
            v = document.createElement("div");
            v.style.cssText = "padding: 12px 8px 12px 8px";
            v.innerHTML =
                k._cultureInfo.saveJPGText;
            v.style.backgroundColor = k.toolbar.backgroundColor;
            v.style.color = k.toolbar.fontColor;
            k._dropdownMenu.appendChild(v);
            V(v, "touchstart", function(k) { m = !0 }, k.allDOMEventHandlers);
            V(v, "mouseover", function() { m || (this.style.backgroundColor = k.toolbar.backgroundColorOnHover, this.style.color = k.toolbar.fontColorOnHover) }, k.allDOMEventHandlers, !0);
            V(v, "mouseout", function() { m || (this.style.backgroundColor = k.toolbar.backgroundColor, this.style.color = k.toolbar.fontColor) }, k.allDOMEventHandlers, !0);
            V(v, "click", function() {
                k.exportChart({ format: "jpeg", fileName: k.exportFileName });
                ta(k._dropdownMenu)
            }, k.allDOMEventHandlers, !0);
            v = document.createElement("div");
            v.style.cssText = "padding: 12px 8px 12px 8px";
            v.innerHTML = k._cultureInfo.savePNGText;
            v.style.backgroundColor = k.toolbar.backgroundColor;
            v.style.color = k.toolbar.fontColor;
            k._dropdownMenu.appendChild(v);
            V(v, "touchstart", function(k) { m = !0 }, k.allDOMEventHandlers);
            V(v, "mouseover", function() {
                m || (this.style.backgroundColor = k.toolbar.backgroundColorOnHover,
                    this.style.color = k.toolbar.fontColorOnHover)
            }, k.allDOMEventHandlers, !0);
            V(v, "mouseout", function() { m || (this.style.backgroundColor = k.toolbar.backgroundColor, this.style.color = k.toolbar.fontColor) }, k.allDOMEventHandlers, !0);
            V(v, "click", function() {
                k.exportChart({ format: "png", fileName: k.exportFileName });
                ta(k._dropdownMenu)
            }, k.allDOMEventHandlers, !0)
        }
    }

    function Xa(k, m, v) {
        k *= ga;
        m *= ga;
        k = v.getImageData(k, m, 2, 2).data;
        m = !0;
        for (v = 0; 4 > v; v++)
            if (k[v] !== k[v + 4] | k[v] !== k[v + 8] | k[v] !== k[v + 12]) { m = !1; break }
        return m ? k[0] <<
            16 | k[1] << 8 | k[2] : 0
    }

    function la(k, m, v) { return k in m ? m[k] : v[k] }

    function Ka(k, m, v) {
        if (u && Ya) {
            var s = k.getContext("2d");
            La = s.webkitBackingStorePixelRatio || s.mozBackingStorePixelRatio || s.msBackingStorePixelRatio || s.oBackingStorePixelRatio || s.backingStorePixelRatio || 1;
            ga = Pa / La;
            k.width = m * ga;
            k.height = v * ga;
            Pa !== La && (k.style.width = m + "px", k.style.height = v + "px", s.scale(ga, ga))
        } else k.width = m, k.height = v
    }

    function gb(k) {
        if (!hb) {
            var m = !1,
                v = !1;
            "undefined" === typeof pa.Chart.creditHref ? (k.creditHref = Y("iuuqr;..b`ow`rkr/bnl."),
                k.creditText = Y("B`ow`rKR/bnl")) : (m = k.updateOption("creditText"), v = k.updateOption("creditHref"));
            if (k.creditHref && k.creditText) {
                k._creditLink || (k._creditLink = document.createElement("a"), k._creditLink.setAttribute("class", "canvasjs-chart-credit"), k._creditLink.setAttribute("title", "JavaScript Charts"), k._creditLink.setAttribute("style", "outline:none;margin:0px;position:absolute;right:2px;top:" + (k.height - 14) + "px;color:dimgrey;text-decoration:none;font-size:11px;font-family: Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif"),
                    k._creditLink.setAttribute("tabIndex", -1), k._creditLink.setAttribute("target", "_blank"));
                if (0 === k.renderCount || m || v) k._creditLink.setAttribute("href", k.creditHref), k._creditLink.innerHTML = k.creditText;
                k._creditLink && k.creditHref && k.creditText ? (k._creditLink.parentElement || k._canvasJSContainer.appendChild(k._creditLink), k._creditLink.style.top = k.height - 14 + "px") : k._creditLink.parentElement && k._canvasJSContainer.removeChild(k._creditLink)
            }
        }
    }

    function sa(k, m) {
        Fa && (this.canvasCount |= 0, window.console.log(++this.canvasCount));
        var v = document.createElement("canvas");
        v.setAttribute("class", "canvasjs-chart-canvas");
        Ka(v, k, m);
        u || "undefined" === typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(v);
        return v
    }

    function oa(k, m) { for (var v in m) k.style[v] = m[v] }

    function ua(k, m, v) {
        m.getAttribute("state") || (m.style.backgroundColor = k.toolbar.backgroundColor, m.style.color = k.toolbar.fontColor, m.style.border = "none", oa(m, { WebkitUserSelect: "none", MozUserSelect: "none", msUserSelect: "none", userSelect: "none" }));
        m.getAttribute("state") !==
            v && (m.setAttribute("state", v), m.setAttribute("type", "button"), oa(m, { padding: "5px 12px", cursor: "pointer", "float": "left", width: "40px", height: "25px", outline: "0px", verticalAlign: "baseline", lineHeight: "0" }), m.setAttribute("title", k._cultureInfo[v + "Text"]), m.innerHTML = "<img style='height:95%; pointer-events: none;' src='" + ib[v].image + "' alt='" + k._cultureInfo[v + "Text"] + "' />")
    }

    function Ja() { for (var k = null, m = 0; m < arguments.length; m++) k = arguments[m], k.style && (k.style.display = "inline") }

    function ta() {
        for (var k =
                null, m = 0; m < arguments.length; m++)(k = arguments[m]) && k.style && (k.style.display = "none")
    }

    function Qa(k, m, v, s, u) {
        if (null === k || "undefined" === typeof k) return "undefined" === typeof v ? m : v;
        k = parseFloat(k.toString()) * (0 <= k.toString().indexOf("%") ? m / 100 : 1);
        "undefined" !== typeof s && (k = Math.min(s, k), "undefined" !== typeof u && (k = Math.max(u, k)));
        return !isNaN(k) && k <= m && 0 <= k ? k : "undefined" === typeof v ? m : v
    }

    function W(k, m, v, u, y) {
        this._defaultsKey = k;
        this._themeOptionsKey = m;
        this._index = u;
        this.parent = y;
        this._eventListeners = [];
        k = {};
        this.theme && s(this.parent) && s(m) && s(u) ? k = s(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && (this.parent.themeOptions && this.parent.themeOptions[m]) && (null === u ? k = this.parent.themeOptions[m] : 0 < this.parent.themeOptions[m].length && (u = Math.min(this.parent.themeOptions[m].length - 1, u), k = this.parent.themeOptions[m][u]));
        this.themeOptions = k;
        this.options = v ? v : { _isPlaceholder: !0 };
        this.setOptions(this.options, k)
    }

    function Ca(k, m, v, s, u) {
        "undefined" ===
        typeof u && (u = 0);
        this._padding = u;
        this._x1 = k;
        this._y1 = m;
        this._x2 = v;
        this._y2 = s;
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding
    }

    function ia(k, m) {
        ia.base.constructor.call(this, "TextBlock", null, m, null, null);
        this.ctx = k;
        this._isDirty = !0;
        this._wrappedText = null;
        this._initialize()
    }

    function Ra(k, m) {
        Ra.base.constructor.call(this, "Toolbar", "toolbar", m, null, k);
        this.chart = k;
        this.canvas = k.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "toolbar"
    }

    function xa(k, m) {
        xa.base.constructor.call(this,
            "Title", "title", m, null, k);
        this.chart = k;
        this.canvas = k.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "title";
        if (s(this.options.margin) && k.options.subtitles)
            for (var v = k.options.subtitles, u = 0; u < v.length; u++)
                if ((s(v[u].horizontalAlign) && "center" === this.horizontalAlign || v[u].horizontalAlign === this.horizontalAlign) && (s(v[u].verticalAlign) && "top" === this.verticalAlign || v[u].verticalAlign === this.verticalAlign) && !v[u].dockInsidePlotArea === !this.dockInsidePlotArea) { this.margin = 0; break }
                "undefined" === typeof this.options.fontSize &&
            (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = { x1: null, y1: null, x2: null, y2: null }
    }

    function Ga(k, m, v) {
        Ga.base.constructor.call(this, "Subtitle", "subtitles", m, v, k);
        this.chart = k;
        this.canvas = k.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "subtitles";
        this.isOptionsInArray = !0;
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = { x1: null, y1: null, x2: null, y2: null }
    }

    function Sa() {
        this.pool = []
    }

    function Ha(k) {
        var m;
        k && Ia[k] && (m = Ia[k]);
        Ha.base.constructor.call(this, "CultureInfo", null, m, null, null)
    }
    var Fa = !1,
        J = {},
        u = !!document.createElement("canvas").getContext,
        pa = {
            Chart: {
                width: 500,
                height: 400,
                zoomEnabled: !1,
                zoomType: "x",
                backgroundColor: "white",
                theme: "light1",
                animationEnabled: !1,
                animationDuration: 1200,
                dataPointWidth: null,
                dataPointMinWidth: null,
                dataPointMaxWidth: null,
                colorSet: "colorSet1",
                culture: "en",
                creditHref: "",
                creditText: "CanvasJS",
                interactivityEnabled: !0,
                exportEnabled: !1,
                exportFileName: "Chart",
                rangeChanging: null,
                rangeChanged: null,
                publicProperties: { title: "readWrite", subtitles: "readWrite", toolbar: "readWrite", toolTip: "readWrite", legend: "readWrite", axisX: "readWrite", axisY: "readWrite", axisX2: "readWrite", axisY2: "readWrite", data: "readWrite", options: "readWrite", bounds: "readOnly", container: "readOnly" }
            },
            Title: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 20,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: u ? "transparent" : null,
                margin: 5,
                wrap: !0,
                maxWidth: null,
                dockInsidePlotArea: !1,
                publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" }
            },
            Subtitle: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 14,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                margin: 2,
                wrap: !0,
                maxWidth: null,
                dockInsidePlotArea: !1,
                publicProperties: {
                    options: "readWrite",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            Toolbar: { backgroundColor: "white", backgroundColorOnHover: "#2196f3", borderColor: "#2196f3", borderThickness: 1, fontColor: "black", fontColorOnHover: "white", publicProperties: { options: "readWrite", chart: "readOnly" } },
            Legend: {
                name: null,
                verticalAlign: "center",
                horizontalAlign: "right",
                fontSize: 14,
                fontFamily: "calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                cursor: null,
                itemmouseover: null,
                itemmouseout: null,
                itemmousemove: null,
                itemclick: null,
                dockInsidePlotArea: !1,
                reversed: !1,
                backgroundColor: u ? "transparent" : null,
                borderColor: u ? "transparent" : null,
                borderThickness: 0,
                cornerRadius: 0,
                maxWidth: null,
                maxHeight: null,
                markerMargin: null,
                itemMaxWidth: null,
                itemWidth: null,
                itemWrap: !0,
                itemTextFormatter: null,
                publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" }
            },
            ToolTip: {
                enabled: !0,
                shared: !1,
                animationEnabled: !0,
                content: null,
                contentFormatter: null,
                reversed: !1,
                backgroundColor: u ? "rgba(255,255,255,.9)" : "rgb(255,255,255)",
                borderColor: null,
                borderThickness: 2,
                cornerRadius: 5,
                fontSize: 14,
                fontColor: "black",
                fontFamily: "Calibri, Arial, Georgia, serif;",
                fontWeight: "normal",
                fontStyle: "italic",
                updated: null,
                hidden: null,
                publicProperties: { options: "readWrite", chart: "readOnly" }
            },
            Axis: {
                minimum: null,
                maximum: null,
                viewportMinimum: null,
                viewportMaximum: null,
                interval: null,
                intervalType: null,
                reversed: !1,
                logarithmic: !1,
                logarithmBase: 10,
                title: null,
                titleFontColor: "black",
                titleFontSize: 20,
                titleFontFamily: "arial",
                titleFontWeight: "normal",
                titleFontStyle: "normal",
                titleWrap: !0,
                titleMaxWidth: null,
                titleBackgroundColor: u ? "transparent" : null,
                titleBorderColor: u ? "transparent" : null,
                titleBorderThickness: 0,
                titleCornerRadius: 0,
                labelAngle: 0,
                labelFontFamily: "arial",
                labelFontColor: "black",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelAutoFit: !0,
                labelWrap: !0,
                labelMaxWidth: null,
                labelFormatter: null,
                labelBackgroundColor: u ? "transparent" : null,
                labelBorderColor: u ? "transparent" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                labelPlacement: "outside",
                labelTextAlign: "left",
                prefix: "",
                suffix: "",
                includeZero: !1,
                tickLength: 5,
                tickColor: "black",
                tickThickness: 1,
                tickPlacement: "outside",
                lineColor: "black",
                lineThickness: 1,
                lineDashType: "solid",
                gridColor: "#A0A0A0",
                gridThickness: 0,
                gridDashType: "solid",
                interlacedColor: u ? "transparent" : null,
                valueFormatString: null,
                margin: 2,
                publicProperties: { options: "readWrite", stripLines: "readWrite", scaleBreaks: "readWrite", crosshair: "readWrite", bounds: "readOnly", chart: "readOnly" }
            },
            StripLine: {
                value: null,
                startValue: null,
                endValue: null,
                color: "orange",
                opacity: null,
                thickness: 2,
                lineDashType: "solid",
                label: "",
                labelPlacement: "inside",
                labelAlign: "far",
                labelWrap: !0,
                labelMaxWidth: null,
                labelBackgroundColor: null,
                labelBorderColor: u ? "transparent" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                labelFontFamily: "arial",
                labelFontColor: "orange",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelFormatter: null,
                showOnTop: !1,
                publicProperties: { options: "readWrite", axis: "readOnly", bounds: "readOnly", chart: "readOnly" }
            },
            ScaleBreaks: {
                autoCalculate: !1,
                collapsibleThreshold: "25%",
                maxNumberOfAutoBreaks: 2,
                spacing: 8,
                type: "straight",
                color: "#FFFFFF",
                fillOpacity: 0.9,
                lineThickness: 2,
                lineColor: "#E16E6E",
                lineDashType: "solid",
                publicProperties: { options: "readWrite", customBreaks: "readWrite", axis: "readOnly", autoBreaks: "readOnly", bounds: "readOnly", chart: "readOnly" }
            },
            Break: {
                startValue: null,
                endValue: null,
                spacing: 8,
                type: "straight",
                color: "#FFFFFF",
                fillOpacity: 0.9,
                lineThickness: 2,
                lineColor: "#E16E6E",
                lineDashType: "solid",
                publicProperties: {
                    options: "readWrite",
                    scaleBreaks: "readOnly",
                    bounds: "readOnly",
                    chart: "readOnly"
                }
            },
            Crosshair: {
                enabled: !1,
                snapToDataPoint: !1,
                color: "grey",
                opacity: null,
                thickness: 2,
                lineDashType: "solid",
                label: "",
                labelWrap: !0,
                labelMaxWidth: null,
                labelBackgroundColor: u ? "grey" : null,
                labelBorderColor: u ? "grey" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                labelFontFamily: u ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                labelFontSize: 12,
                labelFontColor: "#fff",
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelFormatter: null,
                valueFormatString: null,
                updated: null,
                hidden: null,
                publicProperties: { options: "readWrite", axis: "readOnly", bounds: "readOnly", chart: "readOnly" }
            },
            DataSeries: {
                name: null,
                dataPoints: null,
                label: "",
                bevelEnabled: !1,
                highlightEnabled: !0,
                cursor: "default",
                indexLabel: "",
                indexLabelPlacement: "auto",
                indexLabelOrientation: "horizontal",
                indexLabelFontColor: "black",
                indexLabelFontSize: 12,
                indexLabelFontStyle: "normal",
                indexLabelFontFamily: "Arial",
                indexLabelFontWeight: "normal",
                indexLabelBackgroundColor: null,
                indexLabelLineColor: "gray",
                indexLabelLineThickness: 1,
                indexLabelLineDashType: "solid",
                indexLabelMaxWidth: null,
                indexLabelWrap: !0,
                indexLabelFormatter: null,
                lineThickness: 2,
                lineDashType: "solid",
                connectNullData: !1,
                nullDataLineDashType: "dash",
                color: null,
                lineColor: null,
                risingColor: "white",
                fallingColor: "red",
                fillOpacity: null,
                startAngle: 0,
                radius: null,
                innerRadius: null,
                neckHeight: null,
                neckWidth: null,
                reversed: !1,
                valueRepresents: null,
                linkedDataSeriesIndex: null,
                whiskerThickness: 2,
                whiskerDashType: "solid",
                whiskerColor: null,
                whiskerLength: null,
                stemThickness: 2,
                stemColor: null,
                stemDashType: "solid",
                upperBoxColor: "white",
                lowerBoxColor: "white",
                type: "column",
                xValueType: "number",
                axisXType: "primary",
                axisYType: "primary",
                axisXIndex: 0,
                axisYIndex: 0,
                xValueFormatString: null,
                yValueFormatString: null,
                zValueFormatString: null,
                percentFormatString: null,
                showInLegend: null,
                legendMarkerType: null,
                legendMarkerColor: null,
                legendText: null,
                legendMarkerBorderColor: u ? "transparent" : null,
                legendMarkerBorderThickness: 0,
                markerType: "circle",
                markerColor: null,
                markerSize: null,
                markerBorderColor: u ? "transparent" : null,
                markerBorderThickness: 0,
                mouseover: null,
                mouseout: null,
                mousemove: null,
                click: null,
                toolTipContent: null,
                visible: !0,
                publicProperties: { options: "readWrite", axisX: "readWrite", axisY: "readWrite", chart: "readOnly" }
            },
            TextBlock: { x: 0, y: 0, width: null, height: null, maxWidth: null, maxHeight: null, padding: 0, angle: 0, text: "", horizontalAlign: "center", textAlign: "left", fontSize: 12, fontFamily: "calibri", fontWeight: "normal", fontColor: "black", fontStyle: "normal", borderThickness: 0, borderColor: "black", cornerRadius: 0, backgroundColor: null, textBaseline: "top" },
            CultureInfo: {
                decimalSeparator: ".",
                digitGroupSeparator: ",",
                zoomText: "Zoom",
                panText: "Pan",
                resetText: "Reset",
                menuText: "More Options",
                saveJPGText: "Save as JPEG",
                savePNGText: "Save as PNG",
                printText: "Print",
                days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                months: "January February March April May June July August September October November December".split(" "),
                shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")
            }
        },
        Ia = { en: {} },
        y = u ? "Trebuchet MS, Helvetica, sans-serif" :
        "Arial",
        Da = u ? "Impact, Charcoal, sans-serif" : "Arial",
        ya = { colorSet1: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(" "), colorSet2: "#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(" "), colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" ") },
        I, aa, T, da, ha;
    aa = "#333333";
    T = "#000000";
    I = "#666666";
    ha = da = "#000000";
    var U = 20,
        E = 14,
        Ta = {
            colorSet: "colorSet1",
            backgroundColor: "#FFFFFF",
            title: { fontFamily: Da, fontSize: 32, fontColor: aa, fontWeight: "normal", verticalAlign: "top", margin: 5 },
            subtitles: [{ fontFamily: Da, fontSize: E, fontColor: aa, fontWeight: "normal", verticalAlign: "top", margin: 5 }],
            data: [{ indexLabelFontFamily: y, indexLabelFontSize: E, indexLabelFontColor: aa, indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }],
            axisX: [{
                titleFontFamily: y,
                titleFontSize: U,
                titleFontColor: aa,
                titleFontWeight: "normal",
                labelFontFamily: y,
                labelFontSize: E,
                labelFontColor: T,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: I,
                tickThickness: 1,
                tickColor: I,
                gridThickness: 0,
                gridColor: I,
                stripLines: [{ labelFontFamily: y, labelFontSize: E, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                crosshair: { labelFontFamily: y, labelFontSize: E, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
                scaleBreaks: {
                    type: "zigzag",
                    spacing: "2%",
                    lineColor: "#BBBBBB",
                    lineThickness: 1,
                    lineDashType: "solid"
                }
            }],
            axisX2: [{
                titleFontFamily: y,
                titleFontSize: U,
                titleFontColor: aa,
                titleFontWeight: "normal",
                labelFontFamily: y,
                labelFontSize: E,
                labelFontColor: T,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: I,
                tickThickness: 1,
                tickColor: I,
                gridThickness: 0,
                gridColor: I,
                stripLines: [{ labelFontFamily: y, labelFontSize: E, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                crosshair: {
                    labelFontFamily: y,
                    labelFontSize: E,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: ha,
                    color: da,
                    thickness: 1,
                    lineDashType: "dash"
                },
                scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
            }],
            axisY: [{
                titleFontFamily: y,
                titleFontSize: U,
                titleFontColor: aa,
                titleFontWeight: "normal",
                labelFontFamily: y,
                labelFontSize: E,
                labelFontColor: T,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: I,
                tickThickness: 1,
                tickColor: I,
                gridThickness: 1,
                gridColor: I,
                stripLines: [{
                    labelFontFamily: y,
                    labelFontSize: E,
                    labelFontColor: "#FF7300",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FF7300",
                    thickness: 1
                }],
                crosshair: { labelFontFamily: y, labelFontSize: E, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
                scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
            }],
            axisY2: [{
                titleFontFamily: y,
                titleFontSize: U,
                titleFontColor: aa,
                titleFontWeight: "normal",
                labelFontFamily: y,
                labelFontSize: E,
                labelFontColor: T,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: I,
                tickThickness: 1,
                tickColor: I,
                gridThickness: 1,
                gridColor: I,
                stripLines: [{ labelFontFamily: y, labelFontSize: E, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                crosshair: { labelFontFamily: y, labelFontSize: E, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
                scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
            }],
            legend: {
                fontFamily: y,
                fontSize: 14,
                fontColor: aa,
                fontWeight: "bold",
                verticalAlign: "bottom",
                horizontalAlign: "center"
            },
            toolTip: { fontFamily: y, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1 }
        };
    T = aa = "#F5F5F5";
    I = "#FFFFFF";
    da = "#40BAF1";
    ha = "#F5F5F5";
    var U = 20,
        E = 14,
        Za = {
            colorSet: "colorSet2",
            title: { fontFamily: y, fontSize: 33, fontColor: "#3A3A3A", fontWeight: "bold", verticalAlign: "top", margin: 5 },
            subtitles: [{ fontFamily: y, fontSize: E, fontColor: "#3A3A3A", fontWeight: "normal", verticalAlign: "top", margin: 5 }],
            data: [{
                indexLabelFontFamily: y,
                indexLabelFontSize: E,
                indexLabelFontColor: "#666666",
                indexLabelFontWeight: "normal",
                indexLabelLineThickness: 1
            }],
            axisX: [{
                titleFontFamily: y,
                titleFontSize: U,
                titleFontColor: "#666666",
                titleFontWeight: "normal",
                labelFontFamily: y,
                labelFontSize: E,
                labelFontColor: "#666666",
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: "#BBBBBB",
                tickThickness: 1,
                tickColor: "#BBBBBB",
                gridThickness: 1,
                gridColor: "#BBBBBB",
                stripLines: [{
                    labelFontFamily: y,
                    labelFontSize: E,
                    labelFontColor: "#FFA500",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FFA500",
                    thickness: 1
                }],
                crosshair: { labelFontFamily: y, labelFontSize: E, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
                scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
            }],
            axisX2: [{
                titleFontFamily: y,
                titleFontSize: U,
                titleFontColor: "#666666",
                titleFontWeight: "normal",
                labelFontFamily: y,
                labelFontSize: E,
                labelFontColor: "#666666",
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: "#BBBBBB",
                tickColor: "#BBBBBB",
                tickThickness: 1,
                gridThickness: 1,
                gridColor: "#BBBBBB",
                stripLines: [{ labelFontFamily: y, labelFontSize: E, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
                crosshair: { labelFontFamily: y, labelFontSize: E, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
                scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
            }],
            axisY: [{
                titleFontFamily: y,
                titleFontSize: U,
                titleFontColor: "#666666",
                titleFontWeight: "normal",
                labelFontFamily: y,
                labelFontSize: E,
                labelFontColor: "#666666",
                labelFontWeight: "normal",
                lineThickness: 0,
                lineColor: "#BBBBBB",
                tickColor: "#BBBBBB",
                tickThickness: 1,
                gridThickness: 1,
                gridColor: "#BBBBBB",
                stripLines: [{ labelFontFamily: y, labelFontSize: E, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
                crosshair: {
                    labelFontFamily: y,
                    labelFontSize: E,
                    labelFontColor: "#EEEEEE",
                    labelFontWeight: "normal",
                    labelBackgroundColor: "black",
                    color: "black",
                    thickness: 1,
                    lineDashType: "dot"
                },
                scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
            }],
            axisY2: [{
                titleFontFamily: y,
                titleFontSize: U,
                titleFontColor: "#666666",
                titleFontWeight: "normal",
                labelFontFamily: y,
                labelFontSize: E,
                labelFontColor: "#666666",
                labelFontWeight: "normal",
                lineThickness: 0,
                lineColor: "#BBBBBB",
                tickColor: "#BBBBBB",
                tickThickness: 1,
                gridThickness: 1,
                gridColor: "#BBBBBB",
                stripLines: [{
                    labelFontFamily: y,
                    labelFontSize: E,
                    labelFontColor: "#FFA500",
                    labelFontWeight: "normal",
                    labelBackgroundColor: null,
                    color: "#FFA500",
                    thickness: 1
                }],
                crosshair: { labelFontFamily: y, labelFontSize: E, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
                scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" }
            }],
            legend: { fontFamily: y, fontSize: 14, fontColor: "#3A3A3A", fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" },
            toolTip: {
                fontFamily: y,
                fontSize: 14,
                fontStyle: "normal",
                cornerRadius: 0,
                borderThickness: 1
            }
        };
    T = aa = "#F5F5F5";
    I = "#FFFFFF";
    da = "#40BAF1";
    ha = "#F5F5F5";
    U = 20;
    E = 14;
    Da = {
        colorSet: "colorSet12",
        backgroundColor: "#2A2A2A",
        title: { fontFamily: Da, fontSize: 32, fontColor: aa, fontWeight: "normal", verticalAlign: "top", margin: 5 },
        subtitles: [{ fontFamily: Da, fontSize: E, fontColor: aa, fontWeight: "normal", verticalAlign: "top", margin: 5 }],
        toolbar: {
            backgroundColor: "#666666",
            backgroundColorOnHover: "#FF7372",
            borderColor: "#FF7372",
            borderThickness: 1,
            fontColor: "#F5F5F5",
            fontColorOnHover: "#F5F5F5"
        },
        data: [{ indexLabelFontFamily: y, indexLabelFontSize: E, indexLabelFontColor: T, indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }],
        axisX: [{
            titleFontFamily: y,
            titleFontSize: U,
            titleFontColor: T,
            titleFontWeight: "normal",
            labelFontFamily: y,
            labelFontSize: E,
            labelFontColor: T,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: I,
            tickThickness: 1,
            tickColor: I,
            gridThickness: 0,
            gridColor: I,
            stripLines: [{
                labelFontFamily: y,
                labelFontSize: E,
                labelFontColor: "#FF7300",
                labelFontWeight: "normal",
                labelBackgroundColor: null,
                color: "#FF7300",
                thickness: 1
            }],
            crosshair: { labelFontFamily: y, labelFontSize: E, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
            scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" }
        }],
        axisX2: [{
            titleFontFamily: y,
            titleFontSize: U,
            titleFontColor: T,
            titleFontWeight: "normal",
            labelFontFamily: y,
            labelFontSize: E,
            labelFontColor: T,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: I,
            tickThickness: 1,
            tickColor: I,
            gridThickness: 0,
            gridColor: I,
            stripLines: [{ labelFontFamily: y, labelFontSize: E, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
            crosshair: { labelFontFamily: y, labelFontSize: E, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
            scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" }
        }],
        axisY: [{
            titleFontFamily: y,
            titleFontSize: U,
            titleFontColor: T,
            titleFontWeight: "normal",
            labelFontFamily: y,
            labelFontSize: E,
            labelFontColor: T,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: I,
            tickThickness: 1,
            tickColor: I,
            gridThickness: 1,
            gridColor: I,
            stripLines: [{ labelFontFamily: y, labelFontSize: E, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
            crosshair: { labelFontFamily: y, labelFontSize: E, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
            scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" }
        }],
        axisY2: [{
            titleFontFamily: y,
            titleFontSize: U,
            titleFontColor: T,
            titleFontWeight: "normal",
            labelFontFamily: y,
            labelFontSize: E,
            labelFontColor: T,
            labelFontWeight: "normal",
            lineThickness: 1,
            lineColor: I,
            tickThickness: 1,
            tickColor: I,
            gridThickness: 1,
            gridColor: I,
            stripLines: [{ labelFontFamily: y, labelFontSize: E, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
            crosshair: { labelFontFamily: y, labelFontSize: E, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
            scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" }
        }],
        legend: { fontFamily: y, fontSize: 14, fontColor: aa, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" },
        toolTip: { fontFamily: y, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1, fontColor: T, backgroundColor: "rgba(0, 0, 0, .7)" }
    };
    I = "#FFFFFF";
    T = aa = "#FAFAFA";
    da = "#40BAF1";
    ha = "#F5F5F5";
    var U = 20,
        E = 14,
        $a = {
            light1: Ta,
            light2: Za,
            dark1: Da,
            dark2: {
                colorSet: "colorSet2",
                backgroundColor: "#32373A",
                title: { fontFamily: y, fontSize: 32, fontColor: aa, fontWeight: "normal", verticalAlign: "top", margin: 5 },
                subtitles: [{ fontFamily: y, fontSize: E, fontColor: aa, fontWeight: "normal", verticalAlign: "top", margin: 5 }],
                toolbar: { backgroundColor: "#666666", backgroundColorOnHover: "#FF7372", borderColor: "#FF7372", borderThickness: 1, fontColor: "#F5F5F5", fontColorOnHover: "#F5F5F5" },
                data: [{ indexLabelFontFamily: y, indexLabelFontSize: E, indexLabelFontColor: T, indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }],
                axisX: [{
                    titleFontFamily: y,
                    titleFontSize: U,
                    titleFontColor: T,
                    titleFontWeight: "normal",
                    labelFontFamily: y,
                    labelFontSize: E,
                    labelFontColor: T,
                    labelFontWeight: "normal",
                    lineThickness: 1,
                    lineColor: I,
                    tickThickness: 1,
                    tickColor: I,
                    gridThickness: 0,
                    gridColor: I,
                    stripLines: [{
                        labelFontFamily: y,
                        labelFontSize: E,
                        labelFontColor: "#FF7300",
                        labelFontWeight: "normal",
                        labelBackgroundColor: null,
                        color: "#FF7300",
                        thickness: 1
                    }],
                    crosshair: { labelFontFamily: y, labelFontSize: E, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
                    scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" }
                }],
                axisX2: [{
                    titleFontFamily: y,
                    titleFontSize: U,
                    titleFontColor: T,
                    titleFontWeight: "normal",
                    labelFontFamily: y,
                    labelFontSize: E,
                    labelFontColor: T,
                    labelFontWeight: "normal",
                    lineThickness: 1,
                    lineColor: I,
                    tickThickness: 1,
                    tickColor: I,
                    gridThickness: 0,
                    gridColor: I,
                    stripLines: [{ labelFontFamily: y, labelFontSize: E, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                    crosshair: { labelFontFamily: y, labelFontSize: E, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
                    scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" }
                }],
                axisY: [{
                    titleFontFamily: y,
                    titleFontSize: U,
                    titleFontColor: T,
                    titleFontWeight: "normal",
                    labelFontFamily: y,
                    labelFontSize: E,
                    labelFontColor: T,
                    labelFontWeight: "normal",
                    lineThickness: 0,
                    lineColor: I,
                    tickThickness: 1,
                    tickColor: I,
                    gridThickness: 1,
                    gridColor: I,
                    stripLines: [{ labelFontFamily: y, labelFontSize: E, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                    crosshair: { labelFontFamily: y, labelFontSize: E, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ha, color: da, thickness: 1, lineDashType: "dash" },
                    scaleBreaks: {
                        type: "zigzag",
                        spacing: "2%",
                        lineColor: "#777777",
                        lineThickness: 1,
                        lineDashType: "solid",
                        color: "#111111"
                    }
                }],
                axisY2: [{
                    titleFontFamily: y,
                    titleFontSize: U,
                    titleFontColor: T,
                    titleFontWeight: "normal",
                    labelFontFamily: y,
                    labelFontSize: E,
                    labelFontColor: T,
                    labelFontWeight: "normal",
                    lineThickness: 0,
                    lineColor: I,
                    tickThickness: 1,
                    tickColor: I,
                    gridThickness: 1,
                    gridColor: I,
                    stripLines: [{ labelFontFamily: y, labelFontSize: E, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                    crosshair: {
                        labelFontFamily: y,
                        labelFontSize: E,
                        labelFontColor: "#000000",
                        labelFontWeight: "normal",
                        labelBackgroundColor: ha,
                        color: da,
                        thickness: 1,
                        lineDashType: "dash"
                    },
                    scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" }
                }],
                legend: { fontFamily: y, fontSize: 14, fontColor: aa, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" },
                toolTip: { fontFamily: y, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1, fontColor: T, backgroundColor: "rgba(0, 0, 0, .7)" }
            },
            theme1: Ta,
            theme2: Za,
            theme3: Ta
        },
        Q = { numberDuration: 1, yearDuration: 314496E5, monthDuration: 2592E6, weekDuration: 6048E5, dayDuration: 864E5, hourDuration: 36E5, minuteDuration: 6E4, secondDuration: 1E3, millisecondDuration: 1, dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ") };
    (function() {
        J.fSDec = function(k) { for (var m = "", v = 0; v < k.length; v++) m += String.fromCharCode(Math.ceil(k.length / 57 / 5) ^ k.charCodeAt(v)); return m };
        J.obj = {
            trVs: "Ush`m!Wdsrhno",
            fntStr: "qy!B`mhcsh-!Mtbhe`!Fs`oed-!Mtbhe`!R`or!Tohbned-!@sh`m-!r`or,rdshg",
            txtBl: "udyuC`rdmhod",
            fnt: "gnou",
            fSy: "ghmmRuxmd",
            fTx: "ghmmUdyu",
            grClr: "fsdx",
            cntx: "buy",
            tp: "unq"
        };
        delete pa[J.fSDec("Bi`su")][J.fSDec("bsdehuIsdg")];
        J.pro = { sCH: pa[J.fSDec("Bi`su")][J.fSDec("bsdehuIsdg")] };
        J._fTWm = function(k) {
            if ("undefined" === typeof J.pro.sCH && !ab) try {
                var m = k[J.fSDec(J.obj.cntx)];
                m[J.fSDec(J.obj.txtBl)] = J.fSDec(J.obj.tp);
                m[J.fSDec(J.obj.fnt)] = 11 + J.fSDec(J.obj.fntStr);
                m[J.fSDec(J.obj.fSy)] = J.fSDec(J.obj.grClr);
                m[J.fSDec(J.obj.fTx)](J.fSDec(J.obj.trVs), 2, k.height - 11 - 2)
            } catch (v) {}
        }
    })();
    var eb = function() {
            var k = !1;
            try {
                var m = Object.defineProperty && Object.defineProperty({}, "passive", { get: function() { k = !0; return !1 } });
                window.addEventListener && (window.addEventListener("test", null, m), window.removeEventListener("test", null, m))
            } catch (v) { k = !1 }
            return k
        }(),
        Wa = {},
        va = null,
        jb = function() {
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.backgroundColor && (this.ctx.fillStyle = this.backgroundColor, this.ctx.fillRect(0, 0, this.width, this.height))
        },
        kb = function(k, m, v) {
            m = Math.min(this.width, this.height);
            return Math.max("theme4" === this.theme ? 0 : 300 <= m ? 12 : 11, Math.round(m * (k / 400)))
        },
        za = function() {
            var k = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,
                m = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                v = "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                s = "January February March April May June July August September October November December".split(" "),
                u = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                y = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                D = /[^-+\dA-Z]/g;
            return function(E, N, M) {
                var I = M ? M.days : m,
                    P = M ? M.months : s,
                    V = M ? M.shortDays : v,
                    Q = M ? M.shortMonths : u;
                M = "";
                var J = !1;
                E = E && E.getTime ? E : E ? new Date(E) : new Date;
                if (isNaN(E)) throw SyntaxError("invalid date");
                "UTC:" === N.slice(0, 4) && (N = N.slice(4), J = !0);
                M = J ? "getUTC" : "get";
                var W = E[M + "Date"](),
                    L = E[M + "Day"](),
                    X = E[M + "Month"](),
                    a = E[M + "FullYear"](),
                    d = E[M + "Hours"](),
                    c = E[M + "Minutes"](),
                    b = E[M + "Seconds"](),
                    e = E[M + "Milliseconds"](),
                    f = J ? 0 : E.getTimezoneOffset();
                return M = N.replace(k, function(p) {
                    switch (p) {
                        case "D":
                            return W;
                        case "DD":
                            return $(W, 2);
                        case "DDD":
                            return V[L];
                        case "DDDD":
                            return I[L];
                        case "M":
                            return X + 1;
                        case "MM":
                            return $(X + 1, 2);
                        case "MMM":
                            return Q[X];
                        case "MMMM":
                            return P[X];
                        case "Y":
                            return parseInt(String(a).slice(-2));
                        case "YY":
                            return $(String(a).slice(-2), 2);
                        case "YYY":
                            return $(String(a).slice(-3), 3);
                        case "YYYY":
                            return $(a, 4);
                        case "h":
                            return d % 12 || 12;
                        case "hh":
                            return $(d % 12 || 12, 2);
                        case "H":
                            return d;
                        case "HH":
                            return $(d, 2);
                        case "m":
                            return c;
                        case "mm":
                            return $(c, 2);
                        case "s":
                            return b;
                        case "ss":
                            return $(b, 2);
                        case "f":
                            return String(e).slice(0, 1);
                        case "ff":
                            return $(String(e).slice(0, 2), 2);
                        case "fff":
                            return $(String(e).slice(0, 3), 3);
                        case "t":
                            return 12 > d ? "a" : "p";
                        case "tt":
                            return 12 > d ? "am" : "pm";
                        case "T":
                            return 12 > d ? "A" : "P";
                        case "TT":
                            return 12 > d ? "AM" : "PM";
                        case "K":
                            return J ? "UTC" : (String(E).match(y) || [""]).pop().replace(D, "");
                        case "z":
                            return (0 < f ? "-" : "+") + Math.floor(Math.abs(f) / 60);
                        case "zz":
                            return (0 < f ? "-" : "+") + $(Math.floor(Math.abs(f) / 60), 2);
                        case "zzz":
                            return (0 < f ? "-" : "+") + $(Math.floor(Math.abs(f) / 60), 2) + $(Math.abs(f) %
                                60, 2);
                        default:
                            return p.slice(1, p.length - 1)
                    }
                })
            }
        }(),
        ea = function(k, m, v) {
            if (null === k) return "";
            if (!isFinite(k)) return k;
            k = Number(k);
            var s = 0 > k ? !0 : !1;
            s && (k *= -1);
            var u = v ? v.decimalSeparator : ".",
                y = v ? v.digitGroupSeparator : ",",
                D = "";
            m = String(m);
            var D = 1,
                E = v = "",
                N = -1,
                M = [],
                I = [],
                P = 0,
                J = 0,
                V = 0,
                Q = !1,
                W = 0,
                E = m.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
            m = null;
            for (var L = 0; E && L < E.length; L++)
                if (m = E[L], "." === m && 0 > N) N = L;
                else {
                    if ("%" === m) D *= 100;
                    else if ("\u2030" === m) { D *= 1E3; continue } else if ("," === m[0] && "." === m[m.length -
                            1]) {
                        D /= Math.pow(1E3, m.length - 1);
                        N = L + m.length - 1;
                        continue
                    } else "E" !== m[0] && "e" !== m[0] || "0" !== m[m.length - 1] || (Q = !0);
                    0 > N ? (M.push(m), "#" === m || "0" === m ? P++ : "," === m && V++) : (I.push(m), "#" !== m && "0" !== m || J++)
                }
            Q && (m = Math.floor(k), E = -Math.floor(Math.log(k) / Math.LN10 + 1), W = 0 === k ? 0 : 0 === m ? -(P + E) : String(m).length - P, D /= Math.pow(10, W));
            0 > N && (N = L);
            D = (k * D).toFixed(J);
            m = D.split(".");
            D = (m[0] + "").split("");
            k = (m[1] + "").split("");
            D && "0" === D[0] && D.shift();
            for (Q = E = L = J = N = 0; 0 < M.length;)
                if (m = M.pop(), "#" === m || "0" === m)
                    if (N++, N === P) {
                        var X =
                            D,
                            D = [];
                        if ("0" === m)
                            for (m = P - J - (X ? X.length : 0); 0 < m;) X.unshift("0"), m--;
                        for (; 0 < X.length;) v = X.pop() + v, Q++, 0 === Q % E && (L === V && 0 < X.length) && (v = y + v)
                    } else 0 < D.length ? (v = D.pop() + v, J++, Q++) : "0" === m && (v = "0" + v, J++, Q++), 0 === Q % E && (L === V && 0 < D.length) && (v = y + v);
            else "E" !== m[0] && "e" !== m[0] || "0" !== m[m.length - 1] || !/[eE][+-]*[0]+/.test(m) ? "," === m ? (L++, E = Q, Q = 0, 0 < D.length && (v = y + v)) : v = 1 < m.length && ('"' === m[0] && '"' === m[m.length - 1] || "'" === m[0] && "'" === m[m.length - 1]) ? m.slice(1, m.length - 1) + v : m + v : (m = 0 > W ? m.replace("+", "").replace("-",
                "") : m.replace("-", ""), v += m.replace(/[0]+/, function(a) { return $(W, a.length) }));
            y = "";
            for (M = !1; 0 < I.length;) m = I.shift(), "#" === m || "0" === m ? 0 < k.length && 0 !== Number(k.join("")) ? (y += k.shift(), M = !0) : "0" === m && (y += "0", M = !0) : 1 < m.length && ('"' === m[0] && '"' === m[m.length - 1] || "'" === m[0] && "'" === m[m.length - 1]) ? y += m.slice(1, m.length - 1) : "E" !== m[0] && "e" !== m[0] || "0" !== m[m.length - 1] || !/[eE][+-]*[0]+/.test(m) ? y += m : (m = 0 > W ? m.replace("+", "").replace("-", "") : m.replace("-", ""), y += m.replace(/[0]+/, function(a) { return $(W, a.length) }));
            v += (M ? u : "") + y;
            return s ? "-" + v : v
        },
        Ma = function(k) {
            var m = 0,
                v = 0;
            k = k || window.event;
            k.offsetX || 0 === k.offsetX ? (m = k.offsetX, v = k.offsetY) : k.layerX || 0 == k.layerX ? (m = k.layerX, v = k.layerY) : (m = k.pageX - k.target.offsetLeft, v = k.pageY - k.target.offsetTop);
            return { x: m, y: v }
        },
        Ya = !0,
        Pa = window.devicePixelRatio || 1,
        La = 1,
        ga = Ya ? Pa / La : 1,
        ca = function(k, m, v, s, u, y, D, E, N, M, Q, P, I) {
            "undefined" === typeof I && (I = 1);
            D = D || 0;
            E = E || "black";
            var J = 15 < s - m && 15 < u - v ? 8 : 0.35 * Math.min(s - m, u - v);
            k.beginPath();
            k.moveTo(m, v);
            k.save();
            k.fillStyle = y;
            k.globalAlpha =
                I;
            k.fillRect(m, v, s - m, u - v);
            k.globalAlpha = 1;
            0 < D && (I = 0 === D % 2 ? 0 : 0.5, k.beginPath(), k.lineWidth = D, k.strokeStyle = E, k.moveTo(m, v), k.rect(m - I, v - I, s - m + 2 * I, u - v + 2 * I), k.stroke());
            k.restore();
            !0 === N && (k.save(), k.beginPath(), k.moveTo(m, v), k.lineTo(m + J, v + J), k.lineTo(s - J, v + J), k.lineTo(s, v), k.closePath(), D = k.createLinearGradient((s + m) / 2, v + J, (s + m) / 2, v), D.addColorStop(0, y), D.addColorStop(1, "rgba(255, 255, 255, .4)"), k.fillStyle = D, k.fill(), k.restore());
            !0 === M && (k.save(), k.beginPath(), k.moveTo(m, u), k.lineTo(m + J, u - J), k.lineTo(s -
                J, u - J), k.lineTo(s, u), k.closePath(), D = k.createLinearGradient((s + m) / 2, u - J, (s + m) / 2, u), D.addColorStop(0, y), D.addColorStop(1, "rgba(255, 255, 255, .4)"), k.fillStyle = D, k.fill(), k.restore());
            !0 === Q && (k.save(), k.beginPath(), k.moveTo(m, v), k.lineTo(m + J, v + J), k.lineTo(m + J, u - J), k.lineTo(m, u), k.closePath(), D = k.createLinearGradient(m + J, (u + v) / 2, m, (u + v) / 2), D.addColorStop(0, y), D.addColorStop(1, "rgba(255, 255, 255, 0.1)"), k.fillStyle = D, k.fill(), k.restore());
            !0 === P && (k.save(), k.beginPath(), k.moveTo(s, v), k.lineTo(s - J,
                v + J), k.lineTo(s - J, u - J), k.lineTo(s, u), D = k.createLinearGradient(s - J, (u + v) / 2, s, (u + v) / 2), D.addColorStop(0, y), D.addColorStop(1, "rgba(255, 255, 255, 0.1)"), k.fillStyle = D, D.addColorStop(0, y), D.addColorStop(1, "rgba(255, 255, 255, 0.1)"), k.fillStyle = D, k.fill(), k.closePath(), k.restore())
        },
        Y = function(k) { for (var m = "", v = 0; v < k.length; v++) m += String.fromCharCode(Math.ceil(k.length / 57 / 5) ^ k.charCodeAt(v)); return m },
        ab = window && window[Y("mnb`uhno")] && window[Y("mnb`uhno")].href && window[Y("mnb`uhno")].href.indexOf && (-1 !==
            window[Y("mnb`uhno")].href.indexOf(Y("b`ow`rkr/bnl")) || -1 !== window[Y("mnb`uhno")].href.indexOf(Y("gdonqhy/bnl")) || -1 !== window[Y("mnb`uhno")].href.indexOf(Y("gheemd"))),
        hb = ab && -1 === window[Y("mnb`uhno")].href.indexOf(Y("gheemd")),
        ib = {
            reset: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg==" },
            pan: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC" },
            zoom: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII=" },
            menu: { image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC" }
        };
    W.prototype.setOptions = function(k, m) {
        if (pa[this._defaultsKey]) {
            var v = pa[this._defaultsKey],
                s;
            for (s in v) "publicProperties" !== s && v.hasOwnProperty(s) && (this[s] = k && s in k ? k[s] : m && s in m ? m[s] : v[s])
        } else Fa && window.console && console.log("defaults not set")
    };
    W.prototype.get = function(k) {
        var m = pa[this._defaultsKey];
        if ("options" === k) return this.options && this.options._isPlaceholder ? null : this.options;
        if (m.hasOwnProperty(k) || m.publicProperties && m.publicProperties.hasOwnProperty(k)) return this[k];
        window.console &&
            window.console.log('Property "' + k + "\" doesn't exist. Please check for typo.")
    };
    W.prototype.set = function(k, m, s) {
        s = "undefined" === typeof s ? !0 : s;
        var u = pa[this._defaultsKey];
        if ("options" === k) this.createUserOptions(m);
        else if (u.hasOwnProperty(k) || u.publicProperties && u.publicProperties.hasOwnProperty(k) && "readWrite" === u.publicProperties[k]) this.options._isPlaceholder && this.createUserOptions(), this.options[k] = m;
        else {
            window.console && (u.publicProperties && u.publicProperties.hasOwnProperty(k) && "readOnly" === u.publicProperties[k] ?
                window.console.log('Property "' + k + '" is read-only.') : window.console.log('Property "' + k + "\" doesn't exist. Please check for typo."));
            return
        }
        s && (this.stockChart || this.chart || this).render()
    };
    W.prototype.addTo = function(k, m, s, u) {
        u = "undefined" === typeof u ? !0 : u;
        var y = pa[this._defaultsKey];
        y.hasOwnProperty(k) || y.publicProperties && y.publicProperties.hasOwnProperty(k) && "readWrite" === y.publicProperties[k] ? (this.options._isPlaceholder && this.createUserOptions(), "undefined" === typeof this.options[k] && (this.options[k] = []), k = this.options[k], s = "undefined" === typeof s || null === s ? k.length : s, k.splice(s, 0, m), u && (this.stockChart || this.chart || this).render()) : window.console && (y.publicProperties && y.publicProperties.hasOwnProperty(k) && "readOnly" === y.publicProperties[k] ? window.console.log('Property "' + k + '" is read-only.') : window.console.log('Property "' + k + "\" doesn't exist. Please check for typo."))
    };
    W.prototype.createUserOptions = function(k) {
        if ("undefined" !== typeof k || this.options._isPlaceholder)
            if (this.parent.options._isPlaceholder &&
                this.parent.createUserOptions(), this.isOptionsInArray) {
                this.parent.options[this.optionsName] || (this.parent.options[this.optionsName] = []);
                var m = this.parent.options[this.optionsName],
                    s = m.length;
                this.options._isPlaceholder || (Ba(m), s = m.indexOf(this.options));
                this.options = "undefined" === typeof k ? {} : k;
                m[s] = this.options
            } else this.options = "undefined" === typeof k ? {} : k, k = this.parent.options, this.optionsName ? m = this.optionsName : (m = this._defaultsKey) && 0 !== m.length ? (s = m.charAt(0).toLowerCase(), 1 < m.length && (s = s.concat(m.slice(1))),
                m = s) : m = void 0, k[m] = this.options
    };
    W.prototype.remove = function(k) {
        k = "undefined" === typeof k ? !0 : k;
        if (this.isOptionsInArray) {
            var m = this.parent.options[this.optionsName];
            Ba(m);
            var s = m.indexOf(this.options);
            0 <= s && m.splice(s, 1)
        } else delete this.parent.options[this.optionsName];
        k && (this.stockChart || this.chart || this).render()
    };
    W.prototype.updateOption = function(k) {
        !pa[this._defaultsKey] && (Fa && window.console) && console.log("defaults not set");
        var m = pa[this._defaultsKey],
            u = {},
            y = this[k],
            E = this._themeOptionsKey,
            J = this._index;
        this.theme && s(this.parent) && s(E) && s(J) ? u = s(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme] : this.parent && (this.parent.themeOptions && this.parent.themeOptions[E]) && (null === J ? u = this.parent.themeOptions[E] : 0 < this.parent.themeOptions[E].length && (u = Math.min(this.parent.themeOptions[E].length - 1, J), u = this.parent.themeOptions[E][u]));
        this.themeOptions = u;
        k in m && (y = k in this.options ? this.options[k] : u && k in u ? u[k] : m[k]);
        if (y === this[k]) return !1;
        this[k] =
            y;
        return !0
    };
    W.prototype.trackChanges = function(k) {
        if (!this.sessionVariables) throw "Session Variable Store not set";
        this.sessionVariables[k] = this.options[k]
    };
    W.prototype.isBeingTracked = function(k) { this.options._oldOptions || (this.options._oldOptions = {}); return this.options._oldOptions[k] ? !0 : !1 };
    W.prototype.hasOptionChanged = function(k) { if (!this.sessionVariables) throw "Session Variable Store not set"; return this.sessionVariables[k] !== this.options[k] };
    W.prototype.addEventListener = function(k, m, s) {
        k && m && (this._eventListeners[k] =
            this._eventListeners[k] || [], this._eventListeners[k].push({ context: s || this, eventHandler: m }))
    };
    W.prototype.removeEventListener = function(k, m) {
        if (k && m && this._eventListeners[k])
            for (var s = this._eventListeners[k], u = 0; u < s.length; u++)
                if (s[u].eventHandler === m) { s[u].splice(u, 1); break }
    };
    W.prototype.removeAllEventListeners = function() { this._eventListeners = [] };
    W.prototype.dispatchEvent = function(k, m, s) {
        if (k && this._eventListeners[k]) {
            m = m || {};
            for (var u = this._eventListeners[k], y = 0; y < u.length; y++) u[y].eventHandler.call(u[y].context,
                m)
        }
        "function" === typeof this[k] && this[k].call(s || this.chart, m)
    };
    Ca.prototype.registerSpace = function(k, m) { "top" === k ? this._topOccupied += m.height : "bottom" === k ? this._bottomOccupied += m.height : "left" === k ? this._leftOccupied += m.width : "right" === k && (this._rightOccupied += m.width) };
    Ca.prototype.unRegisterSpace = function(k, m) { "top" === k ? this._topOccupied -= m.height : "bottom" === k ? this._bottomOccupied -= m.height : "left" === k ? this._leftOccupied -= m.width : "right" === k && (this._rightOccupied -= m.width) };
    Ca.prototype.getFreeSpace =
        function() { return { x1: this._x1 + this._leftOccupied, y1: this._y1 + this._topOccupied, x2: this._x2 - this._rightOccupied, y2: this._y2 - this._bottomOccupied, width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied, height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied } };
    Ca.prototype.reset = function() { this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding };
    na(ia, W);
    ia.prototype._initialize = function() {
        s(this.padding) || "object" !== typeof this.padding ? this.topPadding =
            this.rightPadding = this.bottomPadding = this.leftPadding = Number(this.padding) | 0 : (this.topPadding = s(this.padding.top) ? 0 : Number(this.padding.top) | 0, this.rightPadding = s(this.padding.right) ? 0 : Number(this.padding.right) | 0, this.bottomPadding = s(this.padding.bottom) ? 0 : Number(this.padding.bottom) | 0, this.leftPadding = s(this.padding.left) ? 0 : Number(this.padding.left) | 0)
    };
    ia.prototype.render = function(k) {
        if (0 !== this.fontSize) {
            k && this.ctx.save();
            var m = this.ctx.font;
            this.ctx.textBaseline = this.textBaseline;
            var s = 0;
            this._isDirty &&
                this.measureText(this.ctx);
            this.ctx.translate(this.x, this.y + s);
            "middle" === this.textBaseline && (s = -this._lineHeight / 2);
            this.ctx.font = this._getFontString();
            this.ctx.rotate(Math.PI / 180 * this.angle);
            var u = 0,
                y = this.topPadding,
                E = null;
            this.ctx.roundRect || Aa(this.ctx);
            (0 < this.borderThickness && this.borderColor || this.backgroundColor) && this.ctx.roundRect(0, s, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
            this.ctx.fillStyle = this.fontColor;
            for (s = 0; s < this._wrappedText.lines.length; s++) {
                E =
                    this._wrappedText.lines[s];
                if ("right" === this.horizontalAlign || "right" === this.textAlign) u = this.width - E.width - this.rightPadding;
                else if ("left" === this.horizontalAlign || "left" === this.textAlign) u = this.leftPadding;
                else if ("center" === this.horizontalAlign || "center" === this.textAlign) u = (this.width - (this.leftPadding + this.rightPadding)) / 2 - E.width / 2 + this.leftPadding;
                this.ctx.fillText(E.text, u, y);
                y += E.height
            }
            this.ctx.font = m;
            k && this.ctx.restore()
        }
    };
    ia.prototype.setText = function(k) {
        this.text = k;
        this._isDirty = !0;
        this._wrappedText =
            null
    };
    ia.prototype.measureText = function() {
        this._lineHeight = Va(this.fontFamily, this.fontSize, this.fontWeight);
        if (null === this.maxWidth) throw "Please set maxWidth and height for TextBlock";
        this._wrapText(this.ctx);
        this._isDirty = !1;
        return { width: this.width, height: this.height }
    };
    ia.prototype._getLineWithWidth = function(k, m, s) {
        k = String(k);
        if (!k) return { text: "", width: 0 };
        var u = s = 0,
            y = k.length - 1,
            E = Infinity;
        for (this.ctx.font = this._getFontString(); u <= y;) {
            var E = Math.floor((u + y) / 2),
                D = k.substr(0, E + 1);
            s = this.ctx.measureText(D).width;
            if (s < m) u = E + 1;
            else if (s > m) y = E - 1;
            else break
        }
        s > m && 1 < D.length && (D = D.substr(0, D.length - 1), s = this.ctx.measureText(D).width);
        m = !0;
        if (D.length === k.length || " " === k[D.length]) m = !1;
        m && (k = D.split(" "), 1 < k.length && k.pop(), D = k.join(" "), s = this.ctx.measureText(D).width);
        return { text: D, width: s }
    };
    ia.prototype._wrapText = function() {
        var k = new String(Ea(String(this.text))),
            m = [],
            s = this.ctx.font,
            u = 0,
            y = 0;
        this.ctx.font = this._getFontString();
        if (0 === this.frontSize) y = u = 0;
        else
            for (; 0 < k.length;) {
                var E = this.maxHeight - (this.topPadding +
                        this.bottomPadding),
                    D = this._getLineWithWidth(k, this.maxWidth - (this.leftPadding + this.rightPadding), !1);
                D.height = this._lineHeight;
                m.push(D);
                var J = y,
                    y = Math.max(y, D.width),
                    u = u + D.height,
                    k = Ea(k.slice(D.text.length, k.length));
                E && u > E && (D = m.pop(), u -= D.height, y = J)
            }
        this._wrappedText = { lines: m, width: y, height: u };
        this.width = y + (this.leftPadding + this.rightPadding);
        this.height = u + (this.topPadding + this.bottomPadding);
        this.ctx.font = s
    };
    ia.prototype._getFontString = function() {
        var k;
        k = "" + (this.fontStyle ? this.fontStyle + " " :
            "");
        k += this.fontWeight ? this.fontWeight + " " : "";
        k += this.fontSize ? this.fontSize + "px " : "";
        var m = this.fontFamily ? this.fontFamily + "" : "";
        !u && m && (m = m.split(",")[0], "'" !== m[0] && '"' !== m[0] && (m = "'" + m + "'"));
        return k += m
    };
    na(Ra, W);
    na(xa, W);
    xa.prototype.setLayout = function() {
        if (this.text) {
            var k = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
                m = k.layoutManager.getFreeSpace(),
                u = m.x1,
                y = m.y1,
                E = 0,
                J = 0,
                D = this.chart._menuButton && this.chart.exportEnabled && "top" === this.verticalAlign ? 22 : 0,
                N, I;
            "top" === this.verticalAlign ||
                "bottom" === this.verticalAlign ? (null === this.maxWidth && (this.maxWidth = m.width - 4 - D * ("center" === this.horizontalAlign ? 2 : 1)), J = 0.5 * m.height - this.margin - 2, E = 0) : "center" === this.verticalAlign && ("left" === this.horizontalAlign || "right" === this.horizontalAlign ? (null === this.maxWidth && (this.maxWidth = m.height - 4), J = 0.5 * m.width - this.margin - 2) : "center" === this.horizontalAlign && (null === this.maxWidth && (this.maxWidth = m.width - 4), J = 0.5 * m.height - 4));
            var M;
            s(this.padding) || "number" !== typeof this.padding ? s(this.padding) || "object" !==
                typeof this.padding || (M = this.padding.top ? this.padding.top : this.padding.bottom ? this.padding.bottom : 0, M += this.padding.bottom ? this.padding.bottom : this.padding.top ? this.padding.top : 0) : M = 2 * this.padding;
            this.wrap || (J = Math.min(J, 1.5 * this.fontSize + M));
            J = new ia(this.ctx, {
                fontSize: this.fontSize,
                fontFamily: this.fontFamily,
                fontColor: this.fontColor,
                fontStyle: this.fontStyle,
                fontWeight: this.fontWeight,
                horizontalAlign: this.horizontalAlign,
                verticalAlign: this.verticalAlign,
                borderColor: this.borderColor,
                borderThickness: this.borderThickness,
                backgroundColor: this.backgroundColor,
                maxWidth: this.maxWidth,
                maxHeight: J,
                cornerRadius: this.cornerRadius,
                text: this.text,
                padding: this.padding,
                textBaseline: "top"
            });
            M = J.measureText();
            "top" === this.verticalAlign || "bottom" === this.verticalAlign ? ("top" === this.verticalAlign ? (y = m.y1 + 2, I = "top") : "bottom" === this.verticalAlign && (y = m.y2 - 2 - M.height, I = "bottom"), "left" === this.horizontalAlign ? u = m.x1 + 2 : "center" === this.horizontalAlign ? u = m.x1 + m.width / 2 - M.width / 2 : "right" === this.horizontalAlign && (u = m.x2 - 2 - M.width - D), N = this.horizontalAlign,
                this.width = M.width, this.height = M.height) : "center" === this.verticalAlign && ("left" === this.horizontalAlign ? (u = m.x1 + 2, y = m.y2 - 2 - (this.maxWidth / 2 - M.width / 2), E = -90, I = "left", this.width = M.height, this.height = M.width) : "right" === this.horizontalAlign ? (u = m.x2 - 2, y = m.y1 + 2 + (this.maxWidth / 2 - M.width / 2), E = 90, I = "right", this.width = M.height, this.height = M.width) : "center" === this.horizontalAlign && (y = k.y1 + (k.height / 2 - M.height / 2), u = k.x1 + (k.width / 2 - M.width / 2), I = "center", this.width = M.width, this.height = M.height), N = "center");
            J.x =
                u;
            J.y = y;
            J.angle = E;
            J.horizontalAlign = N;
            this._textBlock = J;
            k.layoutManager.registerSpace(I, { width: this.width + ("left" === I || "right" === I ? this.margin + 2 : 0), height: this.height + ("top" === I || "bottom" === I ? this.margin + 2 : 0) });
            this.bounds = { x1: u, y1: y, x2: u + this.width, y2: y + this.height };
            this.ctx.textBaseline = "top"
        }
    };
    xa.prototype.render = function() { this._textBlock && this._textBlock.render(!0) };
    na(Ga, W);
    Ga.prototype.setLayout = xa.prototype.setLayout;
    Ga.prototype.render = xa.prototype.render;
    Sa.prototype.get = function(k, m) {
        var s =
            null;
        0 < this.pool.length ? (s = this.pool.pop(), Ka(s, k, m)) : s = sa(k, m);
        return s
    };
    Sa.prototype.release = function(k) { this.pool.push(k) };
    na(Ha, W);
    var Na = { addTheme: function(k, m) { $a[k] = m }, addColorSet: function(k, m) { ya[k] = m }, addCultureInfo: function(k, m) { Ia[k] = m }, formatNumber: function(k, m, s) { s = s || "en"; if (Ia[s]) return ea(k, m || "#,##0.##", new Ha(s)); throw "Unknown Culture Name"; }, formatDate: function(k, m, s) { s = s || "en"; if (Ia[s]) return za(k, m || "DD MMM YYYY", new Ha(s)); throw "Unknown Culture Name"; } };
    "undefined" !== typeof module &&
        "undefined" !== typeof module.exports ? module.exports = Na : "function" === typeof define && define.amd ? define([], function() { return Na }) : (window.CanvasJS && window.console && window.console.log("CanvasJS namespace already exists. If you are loading both chart and stockchart scripts, just load stockchart alone as it includes all chart features."), window.CanvasJS = window.CanvasJS ? window.CanvasJS : Na);
    y = Na.Chart = function() {
        function k(a, d) { return a.x - d.x }

        function m(a, d, c) {
            d = d || {};
            s(c) ? (this.predefinedThemes = $a, this.optionsName =
                this.parent = this.index = null) : (this.parent = c.parent, this.index = c.index, this.predefinedThemes = c.predefinedThemes, this.optionsName = c.optionsName, this.stockChart = c.stockChart, this.panel = a, this.isOptionsInArray = c.isOptionsInArray);
            this.theme = s(d.theme) || s(this.predefinedThemes[d.theme]) ? "light1" : d.theme;
            m.base.constructor.call(this, "Chart", this.optionsName, d, this.index, this.parent);
            var b = this;
            this._containerId = a;
            this._objectsInitialized = !1;
            this.overlaidCanvasCtx = this.ctx = null;
            this._indexLabels = [];
            this._panTimerId =
                0;
            this._lastTouchEventType = "";
            this._lastTouchData = null;
            this.isAnimating = !1;
            this.renderCount = 0;
            this.disableToolTip = this.animatedRender = !1;
            this.canvasPool = new Sa;
            this.allDOMEventHandlers = [];
            this.panEnabled = !1;
            this._defaultCursor = "default";
            this.plotArea = { canvas: null, ctx: null, x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
            this._dataInRenderedOrder = [];
            (this.container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId) ? (this.container.innerHTML = "", d = a = 0, a = this.options.width ?
                this.width : 0 < this.container.clientWidth ? this.container.clientWidth : this.width, d = this.options.height ? this.height : 0 < this.container.clientHeight ? this.container.clientHeight : this.height, this.width = a, this.height = d, this.x1 = this.y1 = 0, this.x2 = this.width, this.y2 = this.height, this._selectedColorSet = "undefined" !== typeof ya[this.colorSet] ? ya[this.colorSet] : ya.colorSet1, this._canvasJSContainer = document.createElement("div"), this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container"), this._canvasJSContainer.style.position =
                "relative", this._canvasJSContainer.style.textAlign = "left", this._canvasJSContainer.style.cursor = "auto", this._canvasJSContainer.style.direction = "ltr", u || (this._canvasJSContainer.style.height = "0px"), this.container.appendChild(this._canvasJSContainer), this.canvas = sa(a, d), this._preRenderCanvas = sa(a, d), this.canvas.style.position = "absolute", this.canvas.style.WebkitUserSelect = "none", this.canvas.style.MozUserSelect = "none", this.canvas.style.msUserSelect = "none", this.canvas.style.userSelect = "none", this.canvas.getContext &&
                (this._canvasJSContainer.appendChild(this.canvas), this.ctx = this.canvas.getContext("2d"), this.ctx.textBaseline = "top", Aa(this.ctx), this._preRenderCtx = this._preRenderCanvas.getContext("2d"), this._preRenderCtx.textBaseline = "top", Aa(this._preRenderCtx), u ? this.plotArea.ctx = this.ctx : (this.plotArea.canvas = sa(a, d), this.plotArea.canvas.style.position = "absolute", this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"), this._canvasJSContainer.appendChild(this.plotArea.canvas), this.plotArea.ctx = this.plotArea.canvas.getContext("2d")),
                    this.overlaidCanvas = sa(a, d), this.overlaidCanvas.style.position = "absolute", this.overlaidCanvas.style.webkitTapHighlightColor = "transparent", this.overlaidCanvas.style.WebkitUserSelect = "none", this.overlaidCanvas.style.MozUserSelect = "none", this.overlaidCanvas.style.msUserSelect = "none", this.overlaidCanvas.style.userSelect = "none", this.overlaidCanvas.getContext && (this._canvasJSContainer.appendChild(this.overlaidCanvas), this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d"), this.overlaidCanvasCtx.textBaseline =
                        "top", Aa(this.overlaidCanvasCtx)), this._eventManager = new da(this), this.windowResizeHandler = V(window, "resize", function() { b._updateSize() && b.render() }, this.allDOMEventHandlers), this._toolBar = document.createElement("div"), this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"), this._toolBar.style.cssText = "position: absolute; right: 1px; top: 1px;", this._canvasJSContainer.appendChild(this._toolBar), this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height }, V(this.overlaidCanvas, "click", function(a) { b._mouseEventHandler(a) },
                        this.allDOMEventHandlers), V(this.overlaidCanvas, "mousemove", function(a) { b._mouseEventHandler(a) }, this.allDOMEventHandlers), V(this.overlaidCanvas, "mouseup", function(a) { b._mouseEventHandler(a) }, this.allDOMEventHandlers), V(this.overlaidCanvas, "mousedown", function(a) {
                        b._mouseEventHandler(a);
                        ta(b._dropdownMenu)
                    }, this.allDOMEventHandlers), V(this.overlaidCanvas, "mouseout", function(a) { b._mouseEventHandler(a) }, this.allDOMEventHandlers), V(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerDown" :
                        "touchstart",
                        function(a) { b._touchEventHandler(a) }, this.allDOMEventHandlers), V(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", function(a) { b._touchEventHandler(a) }, this.allDOMEventHandlers), V(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend", function(a) { b._touchEventHandler(a) }, this.allDOMEventHandlers), V(this.overlaidCanvas, window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel", function(a) { b._touchEventHandler(a) }, this.allDOMEventHandlers),
                    this.toolTip = new $(this, this.options.toolTip), this.data = null, this.axisX = [], this.axisX2 = [], this.axisY = [], this.axisY2 = [], this.sessionVariables = { axisX: [], axisX2: [], axisY: [], axisY2: [] })) : window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found')
        }

        function v(a, d) {
            for (var c = [], b, e = 0; e < a.length; e++)
                if (0 == e) c.push(a[0]);
                else {
                    var f, p, l;
                    l = e - 1;
                    f = 0 === l ? 0 : l - 1;
                    p = l === a.length - 1 ? l : l + 1;
                    b = Math.abs((a[p].x - a[f].x) / (0 === a[p].x - a[l].x ? 0.01 : a[p].x - a[l].x)) * (d - 1) /
                        2 + 1;
                    var A = (a[p].x - a[f].x) / b;
                    b = (a[p].y - a[f].y) / b;
                    c[c.length] = a[l].x > a[f].x && 0 < A || a[l].x < a[f].x && 0 > A ? { x: a[l].x + A / 3, y: a[l].y + b / 3 } : { x: a[l].x, y: a[l].y + b / 9 };
                    l = e;
                    f = 0 === l ? 0 : l - 1;
                    p = l === a.length - 1 ? l : l + 1;
                    b = Math.abs((a[p].x - a[f].x) / (0 === a[l].x - a[f].x ? 0.01 : a[l].x - a[f].x)) * (d - 1) / 2 + 1;
                    A = (a[p].x - a[f].x) / b;
                    b = (a[p].y - a[f].y) / b;
                    c[c.length] = a[l].x > a[f].x && 0 < A || a[l].x < a[f].x && 0 > A ? { x: a[l].x - A / 3, y: a[l].y - b / 3 } : { x: a[l].x, y: a[l].y - b / 9 };
                    c[c.length] = a[e]
                }
            return c
        }

        function y(a, d, c, b, e, f, p, l, A, h) {
            var n = 0;
            h ? (p.color = f, l.color = f) :
                h = 1;
            n = A ? Math.abs(e - c) : Math.abs(b - d);
            n = 0 < p.trimLength ? Math.abs(n * p.trimLength / 100) : Math.abs(n - p.length);
            A ? (c += n / 2, e -= n / 2) : (d += n / 2, b -= n / 2);
            var n = 1 === Math.round(p.thickness) % 2 ? 0.5 : 0,
                r = 1 === Math.round(l.thickness) % 2 ? 0.5 : 0;
            a.save();
            a.globalAlpha = h;
            a.strokeStyle = l.color || f;
            a.lineWidth = l.thickness || 2;
            a.setLineDash && a.setLineDash(N(l.dashType, l.thickness));
            a.beginPath();
            A && 0 < l.thickness ? (a.moveTo(b - p.thickness / 2, Math.round((c + e) / 2) - r), a.lineTo(d + p.thickness / 2, Math.round((c + e) / 2) - r)) : 0 < l.thickness && (a.moveTo(Math.round((d +
                b) / 2) - r, c + p.thickness / 2), a.lineTo(Math.round((d + b) / 2) - r, e - p.thickness / 2));
            a.stroke();
            a.strokeStyle = p.color || f;
            a.lineWidth = p.thickness || 2;
            a.setLineDash && a.setLineDash(N(p.dashType, p.thickness));
            a.beginPath();
            A && 0 < p.thickness ? (a.moveTo(b - n, c), a.lineTo(b - n, e), a.moveTo(d + n, c), a.lineTo(d + n, e)) : 0 < p.thickness && (a.moveTo(d, c + n), a.lineTo(b, c + n), a.moveTo(d, e - n), a.lineTo(b, e - n));
            a.stroke();
            a.restore()
        }

        function E(a, d) {
            E.base.constructor.call(this, "Legend", "legend", d, null, a);
            this.chart = a;
            this.canvas = a.canvas;
            this.ctx = this.chart.ctx;
            this.ghostCtx = this.chart._eventManager.ghostCtx;
            this.items = [];
            this.optionsName = "legend";
            this.height = this.width = 0;
            this.orientation = null;
            this.dataSeries = [];
            this.bounds = { x1: null, y1: null, x2: null, y2: null };
            "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
            this.lineHeight = Va(this.fontFamily, this.fontSize, this.fontWeight);
            this.horizontalSpacing = this.fontSize
        }

        function I(a, d, c, b) {
            I.base.constructor.call(this, "DataSeries", "data", d, c,
                a);
            this.chart = a;
            this.canvas = a.canvas;
            this._ctx = a.canvas.ctx;
            this.index = c;
            this.noDataPointsInPlotArea = 0;
            this.id = b;
            this.chart._eventManager.objectMap[b] = { id: b, objectType: "dataSeries", dataSeriesIndex: c };
            a = d.dataPoints ? d.dataPoints.length : 0;
            this.dataPointEOs = [];
            for (d = 0; d < a; d++) this.dataPointEOs[d] = {};
            this.dataPointIds = [];
            this.plotUnit = [];
            this.axisY = this.axisX = null;
            this.optionsName = "data";
            this.isOptionsInArray = !0;
            null === this.fillOpacity && (this.type.match(/area/i) ? this.fillOpacity = 0.7 : this.fillOpacity =
                1);
            this.axisPlacement = this.getDefaultAxisPlacement();
            "undefined" === typeof this.options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize))
        }

        function D(a, d, c, b, e, f) {
            D.base.constructor.call(this, "Axis", d, c, b, a);
            this.chart = a;
            this.canvas = a.canvas;
            this.ctx = a.ctx;
            this.intervalStartPosition = this.maxHeight = this.maxWidth = 0;
            this.labels = [];
            this.dataSeries = [];
            this._stripLineLabels = this._ticks = this._labels = null;
            this.dataInfo = {
                min: Infinity,
                max: -Infinity,
                viewPortMin: Infinity,
                viewPortMax: -Infinity,
                minDiff: Infinity
            };
            this.isOptionsInArray = !0;
            "axisX" === e ? ("left" === f || "bottom" === f ? (this.optionsName = "axisX", s(this.chart.sessionVariables.axisX[b]) && (this.chart.sessionVariables.axisX[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisX[b]) : (this.optionsName = "axisX2", s(this.chart.sessionVariables.axisX2[b]) && (this.chart.sessionVariables.axisX2[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisX2[b]), this.options.interval || (this.intervalType = null)) : "left" ===
                f || "bottom" === f ? (this.optionsName = "axisY", s(this.chart.sessionVariables.axisY[b]) && (this.chart.sessionVariables.axisY[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisY[b]) : (this.optionsName = "axisY2", s(this.chart.sessionVariables.axisY2[b]) && (this.chart.sessionVariables.axisY2[b] = {}), this.sessionVariables = this.chart.sessionVariables.axisY2[b]);
            "undefined" === typeof this.options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
            "undefined" === typeof this.options.labelFontSize &&
                (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
            this.type = e;
            "axisX" !== e || c && "undefined" !== typeof c.gridThickness || (this.gridThickness = 0);
            this._position = f;
            this.lineCoordinates = { x1: null, y1: null, x2: null, y2: null, width: null };
            this.labelAngle = (this.labelAngle % 360 + 360) % 360;
            90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360);
            this.options.scaleBreaks && (this.scaleBreaks = new T(this.chart, this.options.scaleBreaks, ++this.chart._eventManager.lastObjectId,
                this));
            this.stripLines = [];
            if (this.options.stripLines && 0 < this.options.stripLines.length)
                for (a = 0; a < this.options.stripLines.length; a++) this.stripLines.push(new M(this.chart, this.options.stripLines[a], a, ++this.chart._eventManager.lastObjectId, this));
            this.options.crosshair && (this.crosshair = new aa(this.chart, this.options.crosshair, this));
            this._titleTextBlock = null;
            this.hasOptionChanged("viewportMinimum") && null === this.viewportMinimum && (this.options.viewportMinimum = void 0, this.sessionVariables.viewportMinimum =
                null);
            this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) || null === this.sessionVariables.newViewportMinimum ? this.sessionVariables.newViewportMinimum = null : this.viewportMinimum = this.sessionVariables.newViewportMinimum;
            this.hasOptionChanged("viewportMaximum") && null === this.viewportMaximum && (this.options.viewportMaximum = void 0, this.sessionVariables.viewportMaximum = null);
            this.hasOptionChanged("viewportMaximum") || isNaN(this.sessionVariables.newViewportMaximum) || null ===
                this.sessionVariables.newViewportMaximum ? this.sessionVariables.newViewportMaximum = null : this.viewportMaximum = this.sessionVariables.newViewportMaximum;
            null !== this.minimum && null !== this.viewportMinimum && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
            null !== this.maximum && null !== this.viewportMaximum && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
            this.trackChanges("viewportMinimum");
            this.trackChanges("viewportMaximum")
        }

        function T(a, d, c, b) {
            T.base.constructor.call(this,
                "ScaleBreaks", "scaleBreaks", d, null, b);
            this.id = c;
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.axis = b;
            this.optionsName = "scaleBreaks";
            this.isOptionsInArray = !1;
            this._appliedBreaks = [];
            this.customBreaks = [];
            this.autoBreaks = [];
            "string" === typeof this.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 8 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.spacing && (this.spacing = 8);
            this.autoCalculate && (this.maxNumberOfAutoBreaks = Math.min(this.maxNumberOfAutoBreaks, 5));
            if (this.options.customBreaks &&
                0 < this.options.customBreaks.length) {
                for (a = 0; a < this.options.customBreaks.length; a++) this.customBreaks.push(new U(this.chart, "customBreaks", this.options.customBreaks[a], a, ++this.chart._eventManager.lastObjectId, this)), "number" === typeof this.customBreaks[a].startValue && ("number" === typeof this.customBreaks[a].endValue && this.customBreaks[a].endValue !== this.customBreaks[a].startValue) && this._appliedBreaks.push(this.customBreaks[a]);
                this._appliedBreaks.sort(function(a, b) { return a.startValue - b.startValue });
                for (a = 0; a < this._appliedBreaks.length - 1; a++) this._appliedBreaks[a].endValue >= this._appliedBreaks[a + 1].startValue && (this._appliedBreaks[a].endValue = Math.max(this._appliedBreaks[a].endValue, this._appliedBreaks[a + 1].endValue), window.console && window.console.log("CanvasJS Error: Breaks " + a + " and " + (a + 1) + " are overlapping."), this._appliedBreaks.splice(a, 2), a--)
            }
        }

        function U(a, d, c, b, e, f) {
            U.base.constructor.call(this, "Break", d, c, b, f);
            this.id = e;
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.scaleBreaks = f;
            this.optionsName =
                d;
            this.isOptionsInArray = !0;
            this.type = c.type ? this.type : f.type;
            this.fillOpacity = s(c.fillOpacity) ? f.fillOpacity : this.fillOpacity;
            this.lineThickness = s(c.lineThickness) ? f.lineThickness : this.lineThickness;
            this.color = c.color ? this.color : f.color;
            this.lineColor = c.lineColor ? this.lineColor : f.lineColor;
            this.lineDashType = c.lineDashType ? this.lineDashType : f.lineDashType;
            !s(this.startValue) && this.startValue.getTime && (this.startValue = this.startValue.getTime());
            !s(this.endValue) && this.endValue.getTime && (this.endValue =
                this.endValue.getTime());
            "number" === typeof this.startValue && ("number" === typeof this.endValue && this.endValue < this.startValue) && (a = this.startValue, this.startValue = this.endValue, this.endValue = a);
            this.spacing = "undefined" === typeof c.spacing ? f.spacing : c.spacing;
            "string" === typeof this.options.spacing ? (this.spacing = parseFloat(this.spacing), this.spacing = isNaN(this.spacing) ? 0 : (10 < this.spacing ? 10 : this.spacing) + "%") : "number" !== typeof this.options.spacing && (this.spacing = f.spacing);
            this.size = f.parent.logarithmic ?
                1 : 0
        }

        function M(a, d, c, b, e) {
            M.base.constructor.call(this, "StripLine", "stripLines", d, c, e);
            this.id = b;
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.label = this.label;
            this.axis = e;
            this.optionsName = "stripLines";
            this.isOptionsInArray = !0;
            this._thicknessType = "pixel";
            null !== this.startValue && null !== this.endValue && (this.value = e.logarithmic ? Math.sqrt((this.startValue.getTime ? this.startValue.getTime() : this.startValue) * (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) : ((this.startValue.getTime ? this.startValue.getTime() :
                this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2, this._thicknessType = null)
        }

        function aa(a, d, c) {
            aa.base.constructor.call(this, "Crosshair", "crosshair", d, null, c);
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.axis = c;
            this.optionsName = "crosshair";
            this._thicknessType = "pixel"
        }

        function $(a, d) {
            $.base.constructor.call(this, "ToolTip", "toolTip", d, null, a);
            this.chart = a;
            this.canvas = a.canvas;
            this.ctx = this.chart.ctx;
            this.currentDataPointIndex = this.currentSeriesIndex = -1;
            this._prevY = this._prevX =
                NaN;
            this.containerTransitionDuration = 0.1;
            this.mozContainerTransition = this.getContainerTransition(this.containerTransitionDuration);
            this.optionsName = "toolTip";
            this._initialize()
        }

        function da(a) {
            this.chart = a;
            this.lastObjectId = 0;
            this.objectMap = [];
            this.rectangularRegionEventSubscriptions = [];
            this.previousDataPointEventObject = null;
            this.ghostCanvas = sa(this.chart.width, this.chart.height);
            this.ghostCtx = this.ghostCanvas.getContext("2d");
            this.mouseoveredObjectMaps = []
        }

        function ha(a) {
            this.chart = a;
            this.ctx = this.chart.plotArea.ctx;
            this.animations = [];
            this.animationRequestId = null
        }
        na(m, W);
        m.prototype.destroy = function() {
            var a = this.allDOMEventHandlers;
            this._animator && this._animator.cancelAllAnimations();
            this._panTimerId && clearTimeout(this._panTimerId);
            for (var d = 0; d < a.length; d++) {
                var c = a[d][0],
                    b = a[d][1],
                    e = a[d][2],
                    f = a[d][3],
                    f = f || !1;
                c.removeEventListener ? c.removeEventListener(b, e, f) : c.detachEvent && c.detachEvent("on" + b, e)
            }
            this.allDOMEventHandlers = [];
            for (this.removeAllEventListeners(); this._canvasJSContainer && this._canvasJSContainer.hasChildNodes();) this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);
            for (; this.container && this.container.hasChildNodes();) this.container.removeChild(this.container.lastChild);
            for (; this._dropdownMenu && this._dropdownMenu.hasChildNodes();) this._dropdownMenu.removeChild(this._dropdownMenu.lastChild);
            this.overlaidCanvas = this.canvas = this.container = this._canvasJSContainer = null;
            this._toolBar = this._dropdownMenu = this._menuButton = this._resetButton = this._zoomButton = this._breaksCanvas = this._preRenderCanvas = this.toolTip.container = null
        };
        m.prototype._updateOptions = function() {
            var a =
                this;
            this.updateOption("width");
            this.updateOption("height");
            this.updateOption("dataPointWidth");
            this.updateOption("dataPointMinWidth");
            this.updateOption("dataPointMaxWidth");
            this.updateOption("interactivityEnabled");
            this.updateOption("theme");
            this.updateOption("colorSet") && (this._selectedColorSet = "undefined" !== typeof ya[this.colorSet] ? ya[this.colorSet] : ya.colorSet1);
            this.updateOption("backgroundColor");
            this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
            this.updateOption("culture");
            this._cultureInfo =
                new Ha(this.options.culture);
            this.updateOption("animationEnabled");
            this.animationEnabled = this.animationEnabled && u;
            this.updateOption("animationDuration");
            this.updateOption("rangeChanging");
            this.updateOption("rangeChanged");
            this.updateOption("exportEnabled");
            this.updateOption("exportFileName");
            this.updateOption("zoomType");
            if (this.options.zoomEnabled || this.panEnabled) {
                if (!this._zoomButton) {
                    var d = !1;
                    ta(this._zoomButton = document.createElement("button"));
                    ua(this, this._zoomButton, "pan");
                    this._toolBar.appendChild(this._zoomButton);
                    this._zoomButton.style.borderRight = this.toolbar.borderThickness + "px solid " + this.toolbar.borderColor;
                    V(this._zoomButton, "touchstart", function(a) { d = !0 }, this.allDOMEventHandlers);
                    V(this._zoomButton, "click", function() {
                        a.zoomEnabled ? (a.zoomEnabled = !1, a.panEnabled = !0, ua(a, a._zoomButton, "zoom")) : (a.zoomEnabled = !0, a.panEnabled = !1, ua(a, a._zoomButton, "pan"));
                        a.render()
                    }, this.allDOMEventHandlers);
                    V(this._zoomButton, "mouseover", function() {
                        d ? d = !1 : (oa(a._zoomButton, {
                            backgroundColor: a.toolbar.backgroundColorOnHover,
                            color: a.toolbar.fontColorOnHover,
                            transition: "0.4s",
                            WebkitTransition: "0.4s"
                        }), 0 >= navigator.userAgent.search("MSIE") && oa(a._zoomButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }))
                    }, this.allDOMEventHandlers);
                    V(this._zoomButton, "mouseout", function() { d || (oa(a._zoomButton, { backgroundColor: a.toolbar.backgroundColor, color: a.toolbar.fontColor, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && oa(a._zoomButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" })) },
                        this.allDOMEventHandlers)
                }
                this._resetButton || (d = !1, ta(this._resetButton = document.createElement("button")), ua(this, this._resetButton, "reset"), this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.borderThickness : 0) + "px solid " + this.toolbar.borderColor, this._toolBar.appendChild(this._resetButton), V(this._resetButton, "touchstart", function(a) { d = !0 }, this.allDOMEventHandlers), V(this._resetButton, "click", function() {
                    a.toolTip.hide();
                    a.toolTip.dispatchEvent("hidden", { chart: a, toolTip: a.toolTip },
                        a.toolTip);
                    a.zoomEnabled || a.panEnabled ? (a.zoomEnabled = !0, a.panEnabled = !1, ua(a, a._zoomButton, "pan"), a._defaultCursor = "default", a.overlaidCanvas.style.cursor = a._defaultCursor) : (a.zoomEnabled = !1, a.panEnabled = !1);
                    if (a.sessionVariables.axisX)
                        for (var b = 0; b < a.sessionVariables.axisX.length; b++) a.sessionVariables.axisX[b].newViewportMinimum = null, a.sessionVariables.axisX[b].newViewportMaximum = null;
                    if (a.sessionVariables.axisX2)
                        for (b = 0; b < a.sessionVariables.axisX2.length; b++) a.sessionVariables.axisX2[b].newViewportMinimum =
                            null, a.sessionVariables.axisX2[b].newViewportMaximum = null;
                    if (a.sessionVariables.axisY)
                        for (b = 0; b < a.sessionVariables.axisY.length; b++) a.sessionVariables.axisY[b].newViewportMinimum = null, a.sessionVariables.axisY[b].newViewportMaximum = null;
                    if (a.sessionVariables.axisY2)
                        for (b = 0; b < a.sessionVariables.axisY2.length; b++) a.sessionVariables.axisY2[b].newViewportMinimum = null, a.sessionVariables.axisY2[b].newViewportMaximum = null;
                    a.resetOverlayedCanvas();
                    ta(a._zoomButton, a._resetButton);
                    a.stockChart && (a.stockChart._rangeEventParameter = { stockChart: a.stockChart, source: "chart", index: a.stockChart.charts.indexOf(a), minimum: null, maximum: null });
                    a._dispatchRangeEvent("rangeChanging", "reset");
                    a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanging", a.stockChart.dispatchEvent("rangeChanging", a.stockChart._rangeEventParameter, a.stockChart));
                    a.render();
                    a.syncCharts && a.syncCharts(null, null);
                    a._dispatchRangeEvent("rangeChanged", "reset");
                    a.stockChart && (a.stockChart._rangeEventParameter.type = "rangeChanged", a.stockChart.dispatchEvent("rangeChanged",
                        a.stockChart._rangeEventParameter, a.stockChart))
                }, this.allDOMEventHandlers), V(this._resetButton, "mouseover", function() { d || (oa(a._resetButton, { backgroundColor: a.toolbar.backgroundColorOnHover, color: a.toolbar.hoverFfontColorOnHoverontColor, transition: "0.4s", WebkitTransition: "0.4s" }), 0 >= navigator.userAgent.search("MSIE") && oa(a._resetButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" })) }, this.allDOMEventHandlers), V(this._resetButton, "mouseout", function() {
                    d || (oa(a._resetButton, {
                        backgroundColor: a.toolbar.backgroundColor,
                        color: a.toolbar.fontColor,
                        transition: "0.4s",
                        WebkitTransition: "0.4s"
                    }), 0 >= navigator.userAgent.search("MSIE") && oa(a._resetButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }))
                }, this.allDOMEventHandlers), this.overlaidCanvas.style.cursor = a._defaultCursor);
                this.zoomEnabled || this.panEnabled || (this._zoomButton ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? (this.panEnabled = !0, this.zoomEnabled = !1) : (this.zoomEnabled = !0, this.panEnabled = !1), Ja(a._zoomButton, a._resetButton)) :
                    (this.zoomEnabled = !0, this.panEnabled = !1))
            } else this.panEnabled = this.zoomEnabled = !1;
            fb(this);
            "none" !== this._toolBar.style.display && this._zoomButton && (this.panEnabled ? ua(a, a._zoomButton, "zoom") : ua(a, a._zoomButton, "pan"), a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && ua(a, a._resetButton, "reset"));
            this.options.toolTip && this.toolTip.options !== this.options.toolTip && (this.toolTip.options = this.options.toolTip);
            for (var c in this.toolTip.options) this.toolTip.options.hasOwnProperty(c) && this.toolTip.updateOption(c)
        };
        m.prototype._updateSize = function() {
            var a;
            a = [this.canvas, this.overlaidCanvas, this._eventManager.ghostCanvas];
            var d = 0,
                c = 0;
            this.options.width ? d = this.width : this.width = d = 0 < this.container.clientWidth ? this.container.clientWidth : this.width;
            this.options.height ? c = this.height : this.height = c = 0 < this.container.clientHeight ? this.container.clientHeight : this.height;
            if (this.canvas.width !== d * ga || this.canvas.height !== c * ga) {
                for (var b = 0; b < a.length; b++) Ka(a[b], d, c);
                this.bounds = {
                    x1: 0,
                    y1: 0,
                    x2: this.width,
                    y2: this.height,
                    width: this.width,
                    height: this.height
                };
                a = !0
            } else a = !1;
            return a
        };
        m.prototype._initialize = function() {
            this.isNavigator = s(this.parent) || s(this.parent._defaultsKey) || "Navigator" !== this.parent._defaultsKey ? !1 : !0;
            this.toolbar = new Ra(this, this.options.toolbar);
            this._animator ? this._animator.cancelAllAnimations() : this._animator = new ha(this);
            this.removeAllEventListeners();
            this.disableToolTip = !1;
            this._axes = [];
            this.funnelPyramidClickHandler = this.pieDoughnutClickHandler = null;
            this._updateOptions();
            this.animatedRender = u && this.animationEnabled &&
                0 === this.renderCount;
            this._updateSize();
            this.clearCanvas();
            this.ctx.beginPath();
            this.axisX = [];
            this.axisX2 = [];
            this.axisY = [];
            this.axisY2 = [];
            this._indexLabels = [];
            this._dataInRenderedOrder = [];
            this._events = [];
            this._eventManager && this._eventManager.reset();
            this.plotInfo = { axisPlacement: null, plotTypes: [] };
            this.layoutManager = new Ca(0, 0, this.width, this.height, this.isNavigator ? 0 : 2);
            this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
            this.data = [];
            var a = 0,
                d = null;
            if (this.options.data) {
                for (var c = 0; c <
                    this.options.data.length; c++)
                    if (a++, !this.options.data[c].type || 0 <= m._supportedChartTypes.indexOf(this.options.data[c].type)) {
                        var b = new I(this, this.options.data[c], a - 1, ++this._eventManager.lastObjectId);
                        "error" === b.type && (b.linkedDataSeriesIndex = s(this.options.data[c].linkedDataSeriesIndex) ? c - 1 : this.options.data[c].linkedDataSeriesIndex, 0 > b.linkedDataSeriesIndex || b.linkedDataSeriesIndex >= this.options.data.length || "number" !== typeof b.linkedDataSeriesIndex || "error" === this.options.data[b.linkedDataSeriesIndex].type) &&
                            (b.linkedDataSeriesIndex = null);
                        null === b.name && (b.name = "DataSeries " + a);
                        null === b.color ? 1 < this.options.data.length ? (b._colorSet = [this._selectedColorSet[b.index % this._selectedColorSet.length]], b.color = this._selectedColorSet[b.index % this._selectedColorSet.length]) : b._colorSet = "line" === b.type || "stepLine" === b.type || "spline" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "candlestick" ===
                            b.type || "ohlc" === b.type || "waterfall" === b.type || "boxAndWhisker" === b.type ? [this._selectedColorSet[0]] : this._selectedColorSet : b._colorSet = [b.color];
                        null === b.markerSize && (("line" === b.type || "stepLine" === b.type || "spline" === b.type || 0 <= b.type.toLowerCase().indexOf("area")) && b.dataPoints && b.dataPoints.length < this.width / 16 || "scatter" === b.type) && (b.markerSize = 8);
                        "bubble" !== b.type && "scatter" !== b.type || !b.dataPoints || (b.dataPoints.some ? b.dataPoints.some(function(a) { return a.x }) && b.dataPoints.sort(k) : b.dataPoints.sort(k));
                        this.data.push(b);
                        var e = b.axisPlacement,
                            d = d || e,
                            f;
                        "normal" === e ? "xySwapped" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with bar chart' : "none" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal") : "xySwapped" === e ? "normal" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with line, area, column or pie chart' : "none" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' +
                            b.type + '" with pie chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped") : "none" === e ? "normal" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with line, area, column or bar chart' : "xySwapped" === this.plotInfo.axisPlacement ? f = 'You cannot combine "' + b.type + '" with bar chart' : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none") : null === e && "none" === this.plotInfo.axisPlacement && (f = 'You cannot combine "' + b.type + '" with pie chart');
                        if (f && window.console) {
                            window.console.log(f);
                            return
                        }
                    }
                for (c = 0; c < this.data.length; c++) { if ("none" == d && "error" === this.data[c].type && window.console) { window.console.log('You cannot combine "' + b.type + '" with error chart'); return } "error" === this.data[c].type && (this.data[c].axisPlacement = this.plotInfo.axisPlacement = d || "normal", this.data[c]._linkedSeries = null === this.data[c].linkedDataSeriesIndex ? null : this.data[this.data[c].linkedDataSeriesIndex]) }
            }
            this._objectsInitialized = !0;
            this._plotAreaElements = []
        };
        m._supportedChartTypes = Ba("line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(" "));
        m.prototype.setLayout = function() {
            for (var a = this._plotAreaElements, d = 0; d < this.data.length; d++)
                if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) {
                    if (!this.data[d].axisYType || "primary" === this.data[d].axisYType)
                        if (this.options.axisY && 0 < this.options.axisY.length) {
                            if (!this.axisY.length)
                                for (var c = 0; c < this.options.axisY.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[c] = new D(this, "axisY", this.options.axisY[c], c, "axisY", "left")) : "xySwapped" ===
                                    this.plotInfo.axisPlacement && this._axes.push(this.axisY[c] = new D(this, "axisY", this.options.axisY[c], c, "axisY", "bottom"));
                            this.data[d].axisY = this.axisY[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY.length ? this.data[d].axisYIndex : 0];
                            this.axisY[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY.length ? this.data[d].axisYIndex : 0].dataSeries.push(this.data[d])
                        } else this.axisY.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY[0] = new D(this, "axisY", this.options.axisY,
                            0, "axisY", "left")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY[0] = new D(this, "axisY", this.options.axisY, 0, "axisY", "bottom"))), this.data[d].axisY = this.axisY[0], this.axisY[0].dataSeries.push(this.data[d]);
                    if ("secondary" === this.data[d].axisYType)
                        if (this.options.axisY2 && 0 < this.options.axisY2.length) {
                            if (!this.axisY2.length)
                                for (c = 0; c < this.options.axisY2.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[c] = new D(this, "axisY2", this.options.axisY2[c], c,
                                    "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[c] = new D(this, "axisY2", this.options.axisY2[c], c, "axisY", "top"));
                            this.data[d].axisY = this.axisY2[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY2.length ? this.data[d].axisYIndex : 0];
                            this.axisY2[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY2.length ? this.data[d].axisYIndex : 0].dataSeries.push(this.data[d])
                        } else this.axisY2.length || ("normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisY2[0] =
                            new D(this, "axisY2", this.options.axisY2, 0, "axisY", "right")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisY2[0] = new D(this, "axisY2", this.options.axisY2, 0, "axisY", "top"))), this.data[d].axisY = this.axisY2[0], this.axisY2[0].dataSeries.push(this.data[d]);
                    if (!this.data[d].axisXType || "primary" === this.data[d].axisXType)
                        if (this.options.axisX && 0 < this.options.axisX.length) {
                            if (!this.axisX.length)
                                for (c = 0; c < this.options.axisX.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX[c] =
                                    new D(this, "axisX", this.options.axisX[c], c, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[c] = new D(this, "axisX", this.options.axisX[c], c, "axisX", "left"));
                            this.data[d].axisX = this.axisX[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX.length ? this.data[d].axisXIndex : 0];
                            this.axisX[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX.length ? this.data[d].axisXIndex : 0].dataSeries.push(this.data[d])
                        } else this.axisX.length || ("normal" === this.plotInfo.axisPlacement ?
                            this._axes.push(this.axisX[0] = new D(this, "axisX", this.options.axisX, 0, "axisX", "bottom")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX[0] = new D(this, "axisX", this.options.axisX, 0, "axisX", "left"))), this.data[d].axisX = this.axisX[0], this.axisX[0].dataSeries.push(this.data[d]);
                    if ("secondary" === this.data[d].axisXType)
                        if (this.options.axisX2 && 0 < this.options.axisX2.length) {
                            if (!this.axisX2.length)
                                for (c = 0; c < this.options.axisX2.length; c++) "normal" === this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[c] =
                                    new D(this, "axisX2", this.options.axisX2[c], c, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[c] = new D(this, "axisX2", this.options.axisX2[c], c, "axisX", "right"));
                            this.data[d].axisX = this.axisX2[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX2.length ? this.data[d].axisXIndex : 0];
                            this.axisX2[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX2.length ? this.data[d].axisXIndex : 0].dataSeries.push(this.data[d])
                        } else this.axisX2.length || ("normal" ===
                            this.plotInfo.axisPlacement ? this._axes.push(this.axisX2[0] = new D(this, "axisX2", this.options.axisX2, 0, "axisX", "top")) : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push(this.axisX2[0] = new D(this, "axisX2", this.options.axisX2, 0, "axisX", "right"))), this.data[d].axisX = this.axisX2[0], this.axisX2[0].dataSeries.push(this.data[d])
                }
            if (this.axisY) {
                for (c = 1; c < this.axisY.length; c++) "undefined" === typeof this.axisY[c].options.gridThickness && (this.axisY[c].gridThickness = 0);
                for (c = 0; c < this.axisY.length - 1; c++) "undefined" ===
                    typeof this.axisY[c].options.margin && (this.axisY[c].margin = 10)
            }
            if (this.axisY2) { for (c = 1; c < this.axisY2.length; c++) "undefined" === typeof this.axisY2[c].options.gridThickness && (this.axisY2[c].gridThickness = 0); for (c = 0; c < this.axisY2.length - 1; c++) "undefined" === typeof this.axisY2[c].options.margin && (this.axisY2[c].margin = 10) }
            this.axisY && 0 < this.axisY.length && (this.axisY2 && 0 < this.axisY2.length) && (0 < this.axisY[0].gridThickness && "undefined" === typeof this.axisY2[0].options.gridThickness ? this.axisY2[0].gridThickness =
                0 : 0 < this.axisY2[0].gridThickness && "undefined" === typeof this.axisY[0].options.gridThickness && (this.axisY[0].gridThickness = 0));
            if (this.axisX)
                for (c = 0; c < this.axisX.length; c++) "undefined" === typeof this.axisX[c].options.gridThickness && (this.axisX[c].gridThickness = 0);
            if (this.axisX2)
                for (c = 0; c < this.axisX2.length; c++) "undefined" === typeof this.axisX2[c].options.gridThickness && (this.axisX2[c].gridThickness = 0);
            this.axisX && 0 < this.axisX.length && (this.axisX2 && 0 < this.axisX2.length) && (0 < this.axisX[0].gridThickness &&
                "undefined" === typeof this.axisX2[0].options.gridThickness ? this.axisX2[0].gridThickness = 0 : 0 < this.axisX2[0].gridThickness && "undefined" === typeof this.axisX[0].options.gridThickness && (this.axisX[0].gridThickness = 0));
            c = !1;
            if (0 < this._axes.length && this.options.zoomEnabled && (this.zoomEnabled || this.panEnabled))
                for (d = 0; d < this._axes.length; d++)
                    if (null !== this._axes[d].viewportMinimum || null !== this._axes[d].viewportMaximum) { c = !0; break }
            c ? (Ja(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.borderThickness +
                "px solid " + this.toolbar.borderColor, this._zoomButton.style.borderRight = this.toolbar.borderThickness + "px solid " + this.toolbar.borderColor, this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.borderThickness : 0) + "px solid " + this.toolbar.borderColor) : (ta(this._zoomButton, this._resetButton), this._toolBar.style.border = this.toolbar.borderThickness + "px solid transparent", this.options.zoomEnabled && (this.zoomEnabled = !0, this.panEnabled = !1));
            db(this);
            this._processData();
            this.options.title && (this.title =
                new xa(this, this.options.title), this.title.dockInsidePlotArea ? a.push(this.title) : this.title.setLayout());
            this.subtitles = [];
            if (this.options.subtitles)
                for (d = 0; d < this.options.subtitles.length; d++) c = new Ga(this, this.options.subtitles[d], d), this.subtitles.push(c), c.dockInsidePlotArea ? a.push(c) : c.setLayout();
            this.legend = new E(this, this.options.legend);
            for (d = 0; d < this.data.length; d++)(this.data[d].showInLegend || "pie" === this.data[d].type || "doughnut" === this.data[d].type || "funnel" === this.data[d].type || "pyramid" ===
                this.data[d].type) && this.legend.dataSeries.push(this.data[d]);
            this.legend.dockInsidePlotArea ? a.push(this.legend) : this.legend.setLayout();
            for (d = 0; d < this._axes.length; d++)
                if (this._axes[d].scaleBreaks && this._axes[d].scaleBreaks._appliedBreaks.length) { u ? (this._breaksCanvas = sa(this.width, this.height, !0), this._breaksCanvasCtx = this._breaksCanvas.getContext("2d")) : (this._breaksCanvas = this.canvas, this._breaksCanvasCtx = this.ctx); break }
            this._preRenderCanvas = sa(this.width, this.height);
            this._preRenderCtx = this._preRenderCanvas.getContext("2d");
            "normal" !== this.plotInfo.axisPlacement && "xySwapped" !== this.plotInfo.axisPlacement || D.setLayout(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace())
        };
        m.prototype.renderElements = function() {
            var a = this._plotAreaElements;
            this.title && !this.title.dockInsidePlotArea && this.title.render();
            for (var d = 0; d < this.subtitles.length; d++) this.subtitles[d].dockInsidePlotArea || this.subtitles[d].render();
            this.legend.dockInsidePlotArea || this.legend.render();
            if ("normal" ===
                this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) D.render(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement);
            else if ("none" === this.plotInfo.axisPlacement) this.preparePlotArea();
            else return;
            for (d = 0; d < a.length; d++) a[d].setLayout(), a[d].render();
            var c = [];
            if (this.animatedRender) {
                var b = sa(this.width, this.height);
                b.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height)
            }
            gb(this);
            var a = this.ctx.miterLimit,
                e;
            this.ctx.miterLimit = 3;
            u && this._breaksCanvas &&
                (this._preRenderCtx.drawImage(this.canvas, 0, 0, this.width, this.height), this._preRenderCtx.drawImage(this._breaksCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx.globalCompositeOperation = "source-atop", this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), this._preRenderCtx.clearRect(0, 0, this.width, this.height));
            for (d = 0; d < this.plotInfo.plotTypes.length; d++)
                for (var f = this.plotInfo.plotTypes[d], p = 0; p < f.plotUnits.length; p++) {
                    var l = f.plotUnits[p],
                        A = null;
                    l.targetCanvas =
                        null;
                    this.animatedRender && (l.targetCanvas = sa(this.width, this.height), l.targetCanvasCtx = l.targetCanvas.getContext("2d"), e = l.targetCanvasCtx.miterLimit, l.targetCanvasCtx.miterLimit = 3);
                    "line" === l.type ? A = this.renderLine(l) : "stepLine" === l.type ? A = this.renderStepLine(l) : "spline" === l.type ? A = this.renderSpline(l) : "column" === l.type ? A = this.renderColumn(l) : "bar" === l.type ? A = this.renderBar(l) : "area" === l.type ? A = this.renderArea(l) : "stepArea" === l.type ? A = this.renderStepArea(l) : "splineArea" === l.type ? A = this.renderSplineArea(l) :
                        "stackedColumn" === l.type ? A = this.renderStackedColumn(l) : "stackedColumn100" === l.type ? A = this.renderStackedColumn100(l) : "stackedBar" === l.type ? A = this.renderStackedBar(l) : "stackedBar100" === l.type ? A = this.renderStackedBar100(l) : "stackedArea" === l.type ? A = this.renderStackedArea(l) : "stackedArea100" === l.type ? A = this.renderStackedArea100(l) : "bubble" === l.type ? A = A = this.renderBubble(l) : "scatter" === l.type ? A = this.renderScatter(l) : "pie" === l.type ? this.renderPie(l) : "doughnut" === l.type ? this.renderPie(l) : "funnel" === l.type ?
                        A = this.renderFunnel(l) : "pyramid" === l.type ? A = this.renderFunnel(l) : "candlestick" === l.type ? A = this.renderCandlestick(l) : "ohlc" === l.type ? A = this.renderCandlestick(l) : "rangeColumn" === l.type ? A = this.renderRangeColumn(l) : "error" === l.type ? A = this.renderError(l) : "rangeBar" === l.type ? A = this.renderRangeBar(l) : "rangeArea" === l.type ? A = this.renderRangeArea(l) : "rangeSplineArea" === l.type ? A = this.renderRangeSplineArea(l) : "waterfall" === l.type ? A = this.renderWaterfall(l) : "boxAndWhisker" === l.type && (A = this.renderBoxAndWhisker(l));
                    for (var h = 0; h < l.dataSeriesIndexes.length; h++) this._dataInRenderedOrder.push(this.data[l.dataSeriesIndexes[h]]);
                    this.animatedRender && (l.targetCanvasCtx.miterLimit = e, A && c.push(A))
                }
            this.ctx.miterLimit = a;
            this.animatedRender && this._breaksCanvasCtx && c.push({ source: this._breaksCanvasCtx, dest: this.plotArea.ctx, animationCallback: L.fadeInAnimation, easingFunction: L.easing.easeInQuad, animationBase: 0, startTimePercent: 0.7 });
            this.animatedRender && 0 < this._indexLabels.length && (e = sa(this.width, this.height).getContext("2d"),
                c.push(this.renderIndexLabels(e)));
            var n = this;
            if (0 < c.length) n.disableToolTip = !0, n._animator.animate(200, n.animationDuration, function(a) {
                n.ctx.clearRect(0, 0, n.width, n.height);
                n.ctx.drawImage(b, 0, 0, Math.floor(n.width * ga), Math.floor(n.height * ga), 0, 0, n.width, n.height);
                for (var e = 0; e < c.length; e++) A = c[e], 1 > a && "undefined" !== typeof A.startTimePercent ? a >= A.startTimePercent && A.animationCallback(A.easingFunction(a - A.startTimePercent, 0, 1, 1 - A.startTimePercent), A) : A.animationCallback(A.easingFunction(a, 0, 1, 1), A);
                n.dispatchEvent("dataAnimationIterationEnd", { chart: n })
            }, function() {
                c = [];
                for (var a = 0; a < n.plotInfo.plotTypes.length; a++)
                    for (var e = n.plotInfo.plotTypes[a], d = 0; d < e.plotUnits.length; d++) e.plotUnits[d].targetCanvas = null;
                b = null;
                n.disableToolTip = !1;
                n.dispatchEvent("dataAnimationEnd", { chart: n })
            });
            else {
                if (n._breaksCanvas)
                    if (u) n.plotArea.ctx.drawImage(n._breaksCanvas, 0, 0, this.width, this.height);
                    else
                        for (h = 0; h < n._axes.length; h++) n._axes[h].createMask();
                0 < n._indexLabels.length && n.renderIndexLabels();
                n.dispatchEvent("dataAnimationIterationEnd", { chart: n });
                n.dispatchEvent("dataAnimationEnd", { chart: n })
            }
            this.attachPlotAreaEventHandlers();
            this.zoomEnabled || (this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display) || ta(this._zoomButton, this._resetButton);
            this.toolTip._updateToolTip();
            this.renderCount++;
            Fa && (n = this, setTimeout(function() {
                var a = document.getElementById("ghostCanvasCopy");
                a && (Ka(a, n.width, n.height), a.getContext("2d").drawImage(n._eventManager.ghostCanvas, 0, 0))
            }, 2E3));
            this._breaksCanvas && (delete this._breaksCanvas,
                delete this._breaksCanvasCtx);
            for (h = 0; h < this._axes.length; h++) this._axes[h].maskCanvas && (delete this._axes[h].maskCanvas, delete this._axes[h].maskCtx)
        };
        m.prototype.render = function(a) {
            a && (this.options = a);
            this._initialize();
            this.setLayout();
            this.renderElements();
            this._preRenderCanvas = null
        };
        m.prototype.attachPlotAreaEventHandlers = function() {
            this.attachEvent({
                context: this,
                chart: this,
                mousedown: this._plotAreaMouseDown,
                mouseup: this._plotAreaMouseUp,
                mousemove: this._plotAreaMouseMove,
                cursor: this.panEnabled ?
                    "move" : "default",
                capture: !0,
                bounds: this.plotArea
            })
        };
        m.prototype.categoriseDataSeries = function() {
            for (var a = "", d = 0; d < this.data.length; d++)
                if (a = this.data[d], a.dataPoints && (0 !== a.dataPoints.length && a.visible) && 0 <= m._supportedChartTypes.indexOf(a.type)) {
                    for (var c = null, b = !1, e = null, f = !1, p = 0; p < this.plotInfo.plotTypes.length; p++)
                        if (this.plotInfo.plotTypes[p].type === a.type) {
                            b = !0;
                            c = this.plotInfo.plotTypes[p];
                            break
                        }
                    b || (c = { type: a.type, totalDataSeries: 0, plotUnits: [] }, this.plotInfo.plotTypes.push(c));
                    for (p = 0; p <
                        c.plotUnits.length; p++)
                        if (c.plotUnits[p].axisYType === a.axisYType && c.plotUnits[p].axisXType === a.axisXType && c.plotUnits[p].axisYIndex === a.axisYIndex && c.plotUnits[p].axisXIndex === a.axisXIndex) {
                            f = !0;
                            e = c.plotUnits[p];
                            break
                        }
                    f || (e = {
                        type: a.type,
                        previousDataSeriesCount: 0,
                        index: c.plotUnits.length,
                        plotType: c,
                        axisXType: a.axisXType,
                        axisYType: a.axisYType,
                        axisYIndex: a.axisYIndex,
                        axisXIndex: a.axisXIndex,
                        axisY: "primary" === a.axisYType ? this.axisY[0 <= a.axisYIndex && a.axisYIndex < this.axisY.length ? a.axisYIndex : 0] : this.axisY2[0 <=
                            a.axisYIndex && a.axisYIndex < this.axisY2.length ? a.axisYIndex : 0],
                        axisX: "primary" === a.axisXType ? this.axisX[0 <= a.axisXIndex && a.axisXIndex < this.axisX.length ? a.axisXIndex : 0] : this.axisX2[0 <= a.axisXIndex && a.axisXIndex < this.axisX2.length ? a.axisXIndex : 0],
                        dataSeriesIndexes: [],
                        yTotals: []
                    }, c.plotUnits.push(e));
                    c.totalDataSeries++;
                    e.dataSeriesIndexes.push(d);
                    a.plotUnit = e
                }
            for (d = 0; d < this.plotInfo.plotTypes.length; d++)
                for (c = this.plotInfo.plotTypes[d], p = a = 0; p < c.plotUnits.length; p++) c.plotUnits[p].previousDataSeriesCount =
                    a, a += c.plotUnits[p].dataSeriesIndexes.length
        };
        m.prototype.assignIdToDataPoints = function() {
            for (var a = 0; a < this.data.length; a++) {
                var d = this.data[a];
                if (d.dataPoints)
                    for (var c = d.dataPoints.length, b = 0; b < c; b++) d.dataPointIds[b] = ++this._eventManager.lastObjectId
            }
        };
        m.prototype._processData = function() {
            this.assignIdToDataPoints();
            this.categoriseDataSeries();
            for (var a = 0; a < this.plotInfo.plotTypes.length; a++)
                for (var d = this.plotInfo.plotTypes[a], c = 0; c < d.plotUnits.length; c++) {
                    var b = d.plotUnits[c];
                    "line" === b.type ||
                        "stepLine" === b.type || "spline" === b.type || "column" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "bar" === b.type || "bubble" === b.type || "scatter" === b.type ? this._processMultiseriesPlotUnit(b) : "stackedColumn" === b.type || "stackedBar" === b.type || "stackedArea" === b.type ? this._processStackedPlotUnit(b) : "stackedColumn100" === b.type || "stackedBar100" === b.type || "stackedArea100" === b.type ? this._processStacked100PlotUnit(b) : "candlestick" === b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" ===
                        b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type || "boxAndWhisker" === b.type ? this._processMultiYPlotUnit(b) : "waterfall" === b.type && this._processSpecificPlotUnit(b)
                }
            this.calculateAutoBreaks()
        };
        m.prototype._processMultiseriesPlotUnit = function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
                for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, f = !1, p = 0; p < a.dataSeriesIndexes.length; p++) {
                    var l = this.data[a.dataSeriesIndexes[p]],
                        A = 0,
                        h = !1,
                        n = !1,
                        r;
                    if ("normal" === l.axisPlacement ||
                        "xySwapped" === l.axisPlacement) var q = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : a.axisX.logarithmic ? 0 : -Infinity,
                        g = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX &&
                        this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                    if (l.dataPoints[A].x && l.dataPoints[A].x.getTime || "dateTime" === l.xValueType) f = !0;
                    for (A = 0; A < l.dataPoints.length; A++) {
                        "undefined" === typeof l.dataPoints[A].x && (l.dataPoints[A].x = A + (a.axisX.logarithmic ? 1 : 0));
                        l.dataPoints[A].x.getTime ? (f = !0, b = l.dataPoints[A].x.getTime()) : b = l.dataPoints[A].x;
                        e = l.dataPoints[A].y;
                        b < c.min && (c.min = b);
                        b > c.max && (c.max = b);
                        e < d.min && "number" === typeof e && (d.min = e);
                        e > d.max && "number" === typeof e && (d.max = e);
                        if (0 < A) {
                            if (a.axisX.logarithmic) {
                                var w =
                                    b / l.dataPoints[A - 1].x;
                                1 > w && (w = 1 / w);
                                c.minDiff > w && 1 !== w && (c.minDiff = w)
                            } else w = b - l.dataPoints[A - 1].x, 0 > w && (w *= -1), c.minDiff > w && 0 !== w && (c.minDiff = w);
                            null !== e && null !== l.dataPoints[A - 1].y && (a.axisY.logarithmic ? (w = e / l.dataPoints[A - 1].y, 1 > w && (w = 1 / w), d.minDiff > w && 1 !== w && (d.minDiff = w)) : (w = e - l.dataPoints[A - 1].y, 0 > w && (w *= -1), d.minDiff > w && 0 !== w && (d.minDiff = w)))
                        }
                        if (b < q && !h) null !== e && (r = b);
                        else {
                            if (!h && (h = !0, 0 < A)) { A -= 2; continue }
                            if (b > g && !n) n = !0;
                            else if (b > g && n) continue;
                            l.dataPoints[A].label && (a.axisX.labels[b] = l.dataPoints[A].label);
                            b < c.viewPortMin && (c.viewPortMin = b);
                            b > c.viewPortMax && (c.viewPortMax = b);
                            null === e ? c.viewPortMin === b && r < b && (c.viewPortMin = r) : (e < d.viewPortMin && "number" === typeof e && (d.viewPortMin = e), e > d.viewPortMax && "number" === typeof e && (d.viewPortMax = e))
                        }
                    }
                    l.axisX.valueType = l.xValueType = f ? "dateTime" : "number"
                }
        };
        m.prototype._processStackedPlotUnit = function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, f = !1, p = [], l = [], A = Infinity, h = -Infinity, n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var r =
                        this.data[a.dataSeriesIndexes[n]],
                        q = 0,
                        g = !1,
                        w = !1,
                        k;
                    if ("normal" === r.axisPlacement || "xySwapped" === r.axisPlacement) var m = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : -Infinity,
                        t = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ?
                        this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                    if (r.dataPoints[q].x && r.dataPoints[q].x.getTime || "dateTime" === r.xValueType) f = !0;
                    for (q = 0; q < r.dataPoints.length; q++) {
                        "undefined" === typeof r.dataPoints[q].x && (r.dataPoints[q].x = q + (a.axisX.logarithmic ? 1 : 0));
                        r.dataPoints[q].x.getTime ? (f = !0, b = r.dataPoints[q].x.getTime()) : b = r.dataPoints[q].x;
                        e = s(r.dataPoints[q].y) ? 0 : r.dataPoints[q].y;
                        b < c.min && (c.min = b);
                        b > c.max && (c.max = b);
                        if (0 < q) {
                            if (a.axisX.logarithmic) {
                                var x =
                                    b / r.dataPoints[q - 1].x;
                                1 > x && (x = 1 / x);
                                c.minDiff > x && 1 !== x && (c.minDiff = x)
                            } else x = b - r.dataPoints[q - 1].x, 0 > x && (x *= -1), c.minDiff > x && 0 !== x && (c.minDiff = x);
                            null !== e && null !== r.dataPoints[q - 1].y && (a.axisY.logarithmic ? 0 < e && (x = e / r.dataPoints[q - 1].y, 1 > x && (x = 1 / x), d.minDiff > x && 1 !== x && (d.minDiff = x)) : (x = e - r.dataPoints[q - 1].y, 0 > x && (x *= -1), d.minDiff > x && 0 !== x && (d.minDiff = x)))
                        }
                        if (b < m && !g) null !== r.dataPoints[q].y && (k = b);
                        else {
                            if (!g && (g = !0, 0 < q)) { q -= 2; continue }
                            if (b > t && !w) w = !0;
                            else if (b > t && w) continue;
                            r.dataPoints[q].label && (a.axisX.labels[b] =
                                r.dataPoints[q].label);
                            b < c.viewPortMin && (c.viewPortMin = b);
                            b > c.viewPortMax && (c.viewPortMax = b);
                            null === r.dataPoints[q].y ? c.viewPortMin === b && k < b && (c.viewPortMin = k) : (a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + e, 0 <= e ? p[b] ? p[b] += e : (p[b] = e, A = Math.min(e, A)) : l[b] ? l[b] += e : (l[b] = e, h = Math.max(e, h)))
                        }
                    }
                    a.axisY.scaleBreaks && (a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks) && (d.dataPointYPositiveSums ? (d.dataPointYPositiveSums.push.apply(d.dataPointYPositiveSums, p), d.dataPointYNegativeSums.push.apply(d.dataPointYPositiveSums,
                        l)) : (d.dataPointYPositiveSums = p, d.dataPointYNegativeSums = l));
                    r.axisX.valueType = r.xValueType = f ? "dateTime" : "number"
                }
                for (q in p) p.hasOwnProperty(q) && !isNaN(q) && (a = p[q], a < d.min && (d.min = Math.min(a, A)), a > d.max && (d.max = a), q < c.viewPortMin || q > c.viewPortMax || (a < d.viewPortMin && (d.viewPortMin = Math.min(a, A)), a > d.viewPortMax && (d.viewPortMax = a)));
                for (q in l) l.hasOwnProperty(q) && !isNaN(q) && (a = l[q], a < d.min && (d.min = a), a > d.max && (d.max = Math.max(a, h)), q < c.viewPortMin || q > c.viewPortMax || (a < d.viewPortMin && (d.viewPortMin =
                    a), a > d.viewPortMax && (d.viewPortMax = Math.max(a, h))))
            }
        };
        m.prototype._processStacked100PlotUnit = function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, f = !1, p = !1, l = !1, A = [], h = 0; h < a.dataSeriesIndexes.length; h++) {
                    var n = this.data[a.dataSeriesIndexes[h]],
                        r = 0,
                        q = !1,
                        g = !1,
                        w;
                    if ("normal" === n.axisPlacement || "xySwapped" === n.axisPlacement) var k = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX &&
                        this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : -Infinity,
                        m = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                    if (n.dataPoints[r].x && n.dataPoints[r].x.getTime || "dateTime" === n.xValueType) f = !0;
                    for (r =
                        0; r < n.dataPoints.length; r++) {
                        "undefined" === typeof n.dataPoints[r].x && (n.dataPoints[r].x = r + (a.axisX.logarithmic ? 1 : 0));
                        n.dataPoints[r].x.getTime ? (f = !0, b = n.dataPoints[r].x.getTime()) : b = n.dataPoints[r].x;
                        e = s(n.dataPoints[r].y) ? null : n.dataPoints[r].y;
                        b < c.min && (c.min = b);
                        b > c.max && (c.max = b);
                        if (0 < r) {
                            if (a.axisX.logarithmic) {
                                var t = b / n.dataPoints[r - 1].x;
                                1 > t && (t = 1 / t);
                                c.minDiff > t && 1 !== t && (c.minDiff = t)
                            } else t = b - n.dataPoints[r - 1].x, 0 > t && (t *= -1), c.minDiff > t && 0 !== t && (c.minDiff = t);
                            s(e) || null === n.dataPoints[r - 1].y ||
                                (a.axisY.logarithmic ? 0 < e && (t = e / n.dataPoints[r - 1].y, 1 > t && (t = 1 / t), d.minDiff > t && 1 !== t && (d.minDiff = t)) : (t = e - n.dataPoints[r - 1].y, 0 > t && (t *= -1), d.minDiff > t && 0 !== t && (d.minDiff = t)))
                        }
                        if (b < k && !q) null !== e && (w = b);
                        else {
                            if (!q && (q = !0, 0 < r)) { r -= 2; continue }
                            if (b > m && !g) g = !0;
                            else if (b > m && g) continue;
                            n.dataPoints[r].label && (a.axisX.labels[b] = n.dataPoints[r].label);
                            b < c.viewPortMin && (c.viewPortMin = b);
                            b > c.viewPortMax && (c.viewPortMax = b);
                            null === e ? c.viewPortMin === b && w < b && (c.viewPortMin = w) : (a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] :
                                0) + e, 0 <= e ? p = !0 : 0 > e && (l = !0), A[b] = A[b] ? A[b] + Math.abs(e) : Math.abs(e))
                        }
                    }
                    n.axisX.valueType = n.xValueType = f ? "dateTime" : "number"
                }
                a.axisY.logarithmic ? (d.max = s(d.viewPortMax) ? 99 * Math.pow(a.axisY.logarithmBase, -0.05) : Math.max(d.viewPortMax, 99 * Math.pow(a.axisY.logarithmBase, -0.05)), d.min = s(d.viewPortMin) ? 1 : Math.min(d.viewPortMin, 1)) : p && !l ? (d.max = s(d.viewPortMax) ? 99 : Math.max(d.viewPortMax, 99), d.min = s(d.viewPortMin) ? 1 : Math.min(d.viewPortMin, 1)) : p && l ? (d.max = s(d.viewPortMax) ? 99 : Math.max(d.viewPortMax, 99), d.min = s(d.viewPortMin) ?
                    -99 : Math.min(d.viewPortMin, -99)) : !p && l && (d.max = s(d.viewPortMax) ? -1 : Math.max(d.viewPortMax, -1), d.min = s(d.viewPortMin) ? -99 : Math.min(d.viewPortMin, -99));
                d.viewPortMin = d.min;
                d.viewPortMax = d.max;
                a.dataPointYSums = A
            }
        };
        m.prototype._processMultiYPlotUnit = function(a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
                for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, f, p, l = !1, A = 0; A < a.dataSeriesIndexes.length; A++) {
                    var h = this.data[a.dataSeriesIndexes[A]],
                        n = 0,
                        r = !1,
                        q = !1,
                        g, w, k;
                    if ("normal" === h.axisPlacement ||
                        "xySwapped" === h.axisPlacement) var m = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX && this.options.axisX.minimum ? this.options.axisX.minimum : a.axisX.logarithmic ? 0 : -Infinity,
                        t = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX &&
                        this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                    if (h.dataPoints[n].x && h.dataPoints[n].x.getTime || "dateTime" === h.xValueType) l = !0;
                    for (n = 0; n < h.dataPoints.length; n++) {
                        "undefined" === typeof h.dataPoints[n].x && (h.dataPoints[n].x = n + (a.axisX.logarithmic ? 1 : 0));
                        h.dataPoints[n].x.getTime ? (l = !0, b = h.dataPoints[n].x.getTime()) : b = h.dataPoints[n].x;
                        if ((e = h.dataPoints[n].y) && e.length) {
                            f = Math.min.apply(null, e);
                            p = Math.max.apply(null, e);
                            w = !0;
                            for (var x = 0; x < e.length; x++) null === e.k && (w = !1);
                            w && (r || (k = g), g =
                                b)
                        }
                        b < c.min && (c.min = b);
                        b > c.max && (c.max = b);
                        f < d.min && (d.min = f);
                        p > d.max && (d.max = p);
                        0 < n && (a.axisX.logarithmic ? (w = b / h.dataPoints[n - 1].x, 1 > w && (w = 1 / w), c.minDiff > w && 1 !== w && (c.minDiff = w)) : (w = b - h.dataPoints[n - 1].x, 0 > w && (w *= -1), c.minDiff > w && 0 !== w && (c.minDiff = w)), e && (null !== e[0] && h.dataPoints[n - 1].y && null !== h.dataPoints[n - 1].y[0]) && (a.axisY.logarithmic ? (w = e[0] / h.dataPoints[n - 1].y[0], 1 > w && (w = 1 / w), d.minDiff > w && 1 !== w && (d.minDiff = w)) : (w = e[0] - h.dataPoints[n - 1].y[0], 0 > w && (w *= -1), d.minDiff > w && 0 !== w && (d.minDiff = w))));
                        if (!(b < m) || r) {
                            if (!r && (r = !0, 0 < n)) {
                                n -= 2;
                                g = k;
                                continue
                            }
                            if (b > t && !q) q = !0;
                            else if (b > t && q) continue;
                            h.dataPoints[n].label && (a.axisX.labels[b] = h.dataPoints[n].label);
                            b < c.viewPortMin && (c.viewPortMin = b);
                            b > c.viewPortMax && (c.viewPortMax = b);
                            if (c.viewPortMin === b && e)
                                for (x = 0; x < e.length; x++)
                                    if (null === e[x] && g < b) { c.viewPortMin = g; break }
                            null === e ? c.viewPortMin === b && g < b && (c.viewPortMin = g) : (f < d.viewPortMin && (d.viewPortMin = f), p > d.viewPortMax && (d.viewPortMax = p))
                        }
                    }
                    h.axisX.valueType = h.xValueType = l ? "dateTime" : "number"
                }
        };
        m.prototype._processSpecificPlotUnit =
            function(a) {
                if ("waterfall" === a.type && a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
                    for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, f = !1, p = 0; p < a.dataSeriesIndexes.length; p++) {
                        var l = this.data[a.dataSeriesIndexes[p]],
                            A = 0,
                            h = !1,
                            n = !1,
                            r = b = 0;
                        if ("normal" === l.axisPlacement || "xySwapped" === l.axisPlacement) var q = a.axisX.sessionVariables.newViewportMinimum ? a.axisX.sessionVariables.newViewportMinimum : this.options.axisX && this.options.axisX.viewportMinimum ? this.options.axisX.viewportMinimum : this.options.axisX &&
                            this.options.axisX.minimum ? this.options.axisX.minimum : a.axisX.logarithmic ? 0 : -Infinity,
                            g = a.axisX.sessionVariables.newViewportMaximum ? a.axisX.sessionVariables.newViewportMaximum : this.options.axisX && this.options.axisX.viewportMaximum ? this.options.axisX.viewportMaximum : this.options.axisX && this.options.axisX.maximum ? this.options.axisX.maximum : Infinity;
                        if (l.dataPoints[A].x && l.dataPoints[A].x.getTime || "dateTime" === l.xValueType) f = !0;
                        for (A = 0; A < l.dataPoints.length; A++) "undefined" !== typeof l.dataPoints[A].isCumulativeSum &&
                            !0 === l.dataPoints[A].isCumulativeSum ? (l.dataPointEOs[A].cumulativeSumYStartValue = 0, l.dataPointEOs[A].cumulativeSum = 0 === A ? 0 : l.dataPointEOs[A - 1].cumulativeSum, l.dataPoints[A].y = 0 === A ? 0 : l.dataPointEOs[A - 1].cumulativeSum) : "undefined" !== typeof l.dataPoints[A].isIntermediateSum && !0 === l.dataPoints[A].isIntermediateSum ? (l.dataPointEOs[A].cumulativeSumYStartValue = r, l.dataPointEOs[A].cumulativeSum = 0 === A ? 0 : l.dataPointEOs[A - 1].cumulativeSum, l.dataPoints[A].y = 0 === A ? 0 : b, r = 0 === A ? 0 : l.dataPointEOs[A - 1].cumulativeSum,
                                b = 0) : (e = "number" !== typeof l.dataPoints[A].y ? 0 : l.dataPoints[A].y, l.dataPointEOs[A].cumulativeSumYStartValue = 0 === A ? 0 : l.dataPointEOs[A - 1].cumulativeSum, l.dataPointEOs[A].cumulativeSum = 0 === A ? e : l.dataPointEOs[A - 1].cumulativeSum + e, b += e);
                        for (A = 0; A < l.dataPoints.length; A++)
                            if ("undefined" === typeof l.dataPoints[A].x && (l.dataPoints[A].x = A + (a.axisX.logarithmic ? 1 : 0)), l.dataPoints[A].x.getTime ? (f = !0, b = l.dataPoints[A].x.getTime()) : b = l.dataPoints[A].x, e = l.dataPoints[A].y, b < c.min && (c.min = b), b > c.max && (c.max = b), l.dataPointEOs[A].cumulativeSum <
                                d.min && (d.min = l.dataPointEOs[A].cumulativeSum), l.dataPointEOs[A].cumulativeSum > d.max && (d.max = l.dataPointEOs[A].cumulativeSum), 0 < A && (a.axisX.logarithmic ? (r = b / l.dataPoints[A - 1].x, 1 > r && (r = 1 / r), c.minDiff > r && 1 !== r && (c.minDiff = r)) : (r = b - l.dataPoints[A - 1].x, 0 > r && (r *= -1), c.minDiff > r && 0 !== r && (c.minDiff = r)), null !== e && null !== l.dataPoints[A - 1].y && (a.axisY.logarithmic ? (e = l.dataPointEOs[A].cumulativeSum / l.dataPointEOs[A - 1].cumulativeSum, 1 > e && (e = 1 / e), d.minDiff > e && 1 !== e && (d.minDiff = e)) : (e = l.dataPointEOs[A].cumulativeSum -
                                    l.dataPointEOs[A - 1].cumulativeSum, 0 > e && (e *= -1), d.minDiff > e && 0 !== e && (d.minDiff = e)))), !(b < q) || h) {
                                if (!h && (h = !0, 0 < A)) { A -= 2; continue }
                                if (b > g && !n) n = !0;
                                else if (b > g && n) continue;
                                l.dataPoints[A].label && (a.axisX.labels[b] = l.dataPoints[A].label);
                                b < c.viewPortMin && (c.viewPortMin = b);
                                b > c.viewPortMax && (c.viewPortMax = b);
                                0 < A && (l.dataPointEOs[A - 1].cumulativeSum < d.viewPortMin && (d.viewPortMin = l.dataPointEOs[A - 1].cumulativeSum), l.dataPointEOs[A - 1].cumulativeSum > d.viewPortMax && (d.viewPortMax = l.dataPointEOs[A - 1].cumulativeSum));
                                l.dataPointEOs[A].cumulativeSum < d.viewPortMin && (d.viewPortMin = l.dataPointEOs[A].cumulativeSum);
                                l.dataPointEOs[A].cumulativeSum > d.viewPortMax && (d.viewPortMax = l.dataPointEOs[A].cumulativeSum)
                            }
                        l.axisX.valueType = l.xValueType = f ? "dateTime" : "number"
                    }
            };
        m.prototype.calculateAutoBreaks = function() {
            function a(a, b, c, e) {
                if (e) return c = Math.pow(Math.min(c * a / b, b / a), 0.2), 1 >= c && (c = Math.pow(1 > a ? 1 / a : Math.min(b / a, a), 0.25)), { startValue: a * c, endValue: b / c };
                c = 0.2 * Math.min(c - b + a, b - a);
                0 >= c && (c = 0.25 * Math.min(b - a, Math.abs(a)));
                return { startValue: a + c, endValue: b - c }
            }

            function d(a) {
                if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                    var b = a.axisX.scaleBreaks && a.axisX.scaleBreaks.autoCalculate && 1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks,
                        c = a.axisY.scaleBreaks && a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks;
                    if (b || c)
                        for (var d = a.axisY.dataInfo, f = a.axisX.dataInfo, g, h = f.min, p = f.max, l = d.min, n = d.max, f = f._dataRanges, d = d._dataRanges, q, r = 0, A = 0; A < a.dataSeriesIndexes.length; A++) {
                            var k = e.data[a.dataSeriesIndexes[A]];
                            if (!(4 > k.dataPoints.length))
                                for (r = 0; r < k.dataPoints.length; r++)
                                    if (b && (q = (p + 1 - h) * Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, g = k.dataPoints[r].x.getTime ? k.dataPoints[r].x.getTime() : k.dataPoints[r].x, q = Math.floor((g - h) / q), g < f[q].min && (f[q].min = g), g > f[q].max && (f[q].max = g)), c) {
                                        var m = (n + 1 - l) * Math.max(parseFloat(a.axisY.scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                                        if ((g = "waterfall" === a.type ? k.dataPointEOs[r].cumulativeSum : k.dataPoints[r].y) && g.length)
                                            for (var u = 0; u < g.length; u++) q =
                                                Math.floor((g[u] - l) / m), g[u] < d[q].min && (d[q].min = g[u]), g[u] > d[q].max && (d[q].max = g[u]);
                                        else s(g) || (q = Math.floor((g - l) / m), g < d[q].min && (d[q].min = g), g > d[q].max && (d[q].max = g))
                                    }
                        }
                }
            }

            function c(a) {
                if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length) && a.axisX.scaleBreaks && a.axisX.scaleBreaks.autoCalculate && 1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks)
                    for (var b = a.axisX.dataInfo, c = b.min, d = b.max, f = b._dataRanges, g, h = 0, p = 0; p < a.dataSeriesIndexes.length; p++) {
                        var l = e.data[a.dataSeriesIndexes[p]];
                        if (!(4 > l.dataPoints.length))
                            for (h =
                                0; h < l.dataPoints.length; h++) g = (d + 1 - c) * Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold) || 10, 10) / 100, b = l.dataPoints[h].x.getTime ? l.dataPoints[h].x.getTime() : l.dataPoints[h].x, g = Math.floor((b - c) / g), b < f[g].min && (f[g].min = b), b > f[g].max && (f[g].max = b)
                    }
            }
            for (var b, e = this, f = !1, p = 0; p < this._axes.length; p++)
                if (this._axes[p].scaleBreaks && this._axes[p].scaleBreaks.autoCalculate && 1 <= this._axes[p].scaleBreaks.maxNumberOfAutoBreaks) {
                    f = !0;
                    this._axes[p].dataInfo._dataRanges = [];
                    for (var l = 0; l < 100 / Math.max(parseFloat(this._axes[p].scaleBreaks.collapsibleThreshold) ||
                            10, 10); l++) this._axes[p].dataInfo._dataRanges.push({ min: Infinity, max: -Infinity })
                }
            if (f) {
                for (p = 0; p < this.plotInfo.plotTypes.length; p++)
                    for (f = this.plotInfo.plotTypes[p], l = 0; l < f.plotUnits.length; l++) b = f.plotUnits[l], "line" === b.type || "stepLine" === b.type || "spline" === b.type || "column" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "bar" === b.type || "bubble" === b.type || "scatter" === b.type || "candlestick" === b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" ===
                        b.type || "rangeSplineArea" === b.type || "waterfall" === b.type || "error" === b.type || "boxAndWhisker" === b.type ? d(b) : 0 <= b.type.indexOf("stacked") && c(b);
                for (p = 0; p < this._axes.length; p++)
                    if (this._axes[p].dataInfo._dataRanges) {
                        var A = this._axes[p].dataInfo.min;
                        b = (this._axes[p].dataInfo.max + 1 - A) * Math.max(parseFloat(this._axes[p].scaleBreaks.collapsibleThreshold) || 10, 10) / 100;
                        var h = this._axes[p].dataInfo._dataRanges,
                            n, r, f = [];
                        if (this._axes[p].dataInfo.dataPointYPositiveSums) {
                            var q = this._axes[p].dataInfo.dataPointYPositiveSums;
                            n = h;
                            for (l in q)
                                if (q.hasOwnProperty(l) && !isNaN(l) && (r = q[l], !s(r))) {
                                    var g = Math.floor((r - A) / b);
                                    r < n[g].min && (n[g].min = r);
                                    r > n[g].max && (n[g].max = r)
                                }
                            delete this._axes[p].dataInfo.dataPointYPositiveSums
                        }
                        if (this._axes[p].dataInfo.dataPointYNegativeSums) {
                            q = this._axes[p].dataInfo.dataPointYNegativeSums;
                            n = h;
                            for (l in q) q.hasOwnProperty(l) && !isNaN(l) && (r = -1 * q[l], s(r) || (g = Math.floor((r - A) / b), r < n[g].min && (n[g].min = r), r > n[g].max && (n[g].max = r)));
                            delete this._axes[p].dataInfo.dataPointYNegativeSums
                        }
                        for (l = 0; l < h.length -
                            1; l++)
                            if (n = h[l].max, isFinite(n))
                                for (; l < h.length - 1;)
                                    if (A = h[l + 1].min, isFinite(A)) {
                                        r = A - n;
                                        r > b && f.push({ diff: r, start: n, end: A });
                                        break
                                    } else l++;
                        if (this._axes[p].scaleBreaks.customBreaks)
                            for (l = 0; l < this._axes[p].scaleBreaks.customBreaks.length; l++)
                                for (b = 0; b < f.length; b++)
                                    if (this._axes[p].scaleBreaks.customBreaks[l].startValue <= f[b].start && f[b].start <= this._axes[p].scaleBreaks.customBreaks[l].endValue || this._axes[p].scaleBreaks.customBreaks[l].startValue <= f[b].start && f[b].start <= this._axes[p].scaleBreaks.customBreaks[l].endValue ||
                                        f[b].start <= this._axes[p].scaleBreaks.customBreaks[l].startValue && this._axes[p].scaleBreaks.customBreaks[l].startValue <= f[b].end || f[b].start <= this._axes[p].scaleBreaks.customBreaks[l].endValue && this._axes[p].scaleBreaks.customBreaks[l].endValue <= f[b].end) f.splice(b, 1), b--;
                        f.sort(function(a, b) { return b.diff - a.diff });
                        for (l = 0; l < Math.min(f.length, this._axes[p].scaleBreaks.maxNumberOfAutoBreaks); l++) b = a(f[l].start, f[l].end, this._axes[p].logarithmic ? this._axes[p].dataInfo.max / this._axes[p].dataInfo.min :
                            this._axes[p].dataInfo.max - this._axes[p].dataInfo.min, this._axes[p].logarithmic), this._axes[p].scaleBreaks.autoBreaks.push(new U(this, "autoBreaks", b, l, ++this._eventManager.lastObjectId, this._axes[p].scaleBreaks)), this._axes[p].scaleBreaks._appliedBreaks.push(this._axes[p].scaleBreaks.autoBreaks[this._axes[p].scaleBreaks.autoBreaks.length - 1]);
                        this._axes[p].scaleBreaks._appliedBreaks.sort(function(a, b) { return a.startValue - b.startValue })
                    }
            }
        };
        m.prototype.renderCrosshairs = function(a) {
            for (var d = 0; d < this.axisX.length; d++) this.axisX[d] !=
                a && (this.axisX[d].crosshair && this.axisX[d].crosshair.enabled && !this.axisX[d].crosshair._hidden) && this.axisX[d].showCrosshair(this.axisX[d].crosshair._updatedValue);
            for (d = 0; d < this.axisX2.length; d++) this.axisX2[d] != a && (this.axisX2[d].crosshair && this.axisX2[d].crosshair.enabled && !this.axisX2[d].crosshair._hidden) && this.axisX2[d].showCrosshair(this.axisX2[d].crosshair._updatedValue);
            for (d = 0; d < this.axisY.length; d++) this.axisY[d] != a && (this.axisY[d].crosshair && this.axisY[d].crosshair.enabled && !this.axisY[d].crosshair._hidden) &&
                this.axisY[d].showCrosshair(this.axisY[d].crosshair._updatedValue);
            for (d = 0; d < this.axisY2.length; d++) this.axisY2[d] != a && (this.axisY2[d].crosshair && this.axisY2[d].crosshair.enabled && !this.axisY2[d].crosshair._hidden) && this.axisY2[d].showCrosshair(this.axisY2[d].crosshair._updatedValue)
        };
        m.prototype.getDataPointAtXY = function(a, d, c) {
            c = c || !1;
            for (var b = [], e = this._dataInRenderedOrder.length - 1; 0 <= e; e--) {
                var f = null;
                (f = this._dataInRenderedOrder[e].getDataPointAtXY(a, d, c)) && b.push(f)
            }
            a = null;
            d = !1;
            for (c = 0; c < b.length; c++)
                if ("line" ===
                    b[c].dataSeries.type || "stepLine" === b[c].dataSeries.type || "area" === b[c].dataSeries.type || "stepArea" === b[c].dataSeries.type)
                    if (e = la("markerSize", b[c].dataPoint, b[c].dataSeries) || 8, b[c].distance <= e / 2) { d = !0; break }
            for (c = 0; c < b.length; c++) d && "line" !== b[c].dataSeries.type && "stepLine" !== b[c].dataSeries.type && "area" !== b[c].dataSeries.type && "stepArea" !== b[c].dataSeries.type || (a ? b[c].distance <= a.distance && (a = b[c]) : a = b[c]);
            return a
        };
        m.prototype.getObjectAtXY = function(a, d, c) {
            var b = null;
            if (c = this.getDataPointAtXY(a,
                    d, c || !1)) b = c.dataSeries.dataPointIds[c.dataPointIndex];
            else if (u) b = Xa(a, d, this._eventManager.ghostCtx);
            else
                for (c = 0; c < this.legend.items.length; c++) {
                    var e = this.legend.items[c];
                    a >= e.x1 && (a <= e.x2 && d >= e.y1 && d <= e.y2) && (b = e.id)
                }
            return b
        };
        m.prototype.getAutoFontSize = kb;
        m.prototype.resetOverlayedCanvas = function() { this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height) };
        m.prototype.clearCanvas = jb;
        m.prototype.attachEvent = function(a) { this._events.push(a) };
        m.prototype._touchEventHandler = function(a) {
            if (a.changedTouches &&
                this.interactivityEnabled) {
                var d = [],
                    c = a.changedTouches,
                    b = c ? c[0] : a,
                    e = null;
                switch (a.type) {
                    case "touchstart":
                    case "MSPointerDown":
                        d = ["mousemove", "mousedown"];
                        this._lastTouchData = Ma(b);
                        this._lastTouchData.time = new Date;
                        break;
                    case "touchmove":
                    case "MSPointerMove":
                        d = ["mousemove"];
                        break;
                    case "touchend":
                    case "MSPointerUp":
                        var f = this._lastTouchData && this._lastTouchData.time ? new Date - this._lastTouchData.time : 0,
                            d = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType || 300 > f ? ["mouseup",
                                "click"
                            ] : ["mouseup"];
                        break;
                    default:
                        return
                }
                if (!(c && 1 < c.length)) {
                    e = Ma(b);
                    e.time = new Date;
                    try {
                        var p = e.y - this._lastTouchData.y,
                            f = e.time - this._lastTouchData.time;
                        if (1 < Math.abs(p) && this._lastTouchData.scroll || 5 < Math.abs(p) && 250 > f) this._lastTouchData.scroll = !0
                    } catch (l) {}
                    this._lastTouchEventType = a.type;
                    if (this._lastTouchData.scroll && this.zoomEnabled) this.isDrag && this.resetOverlayedCanvas(), this.isDrag = !1;
                    else
                        for (c = 0; c < d.length; c++)
                            if (e = d[c], p = document.createEvent("MouseEvent"), p.initMouseEvent(e, !0, !0, window,
                                    1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null), b.target.dispatchEvent(p), !s(this._lastTouchData.scroll) && !this._lastTouchData.scroll || !this._lastTouchData.scroll && 250 < f || "click" === e) a.preventManipulation && a.preventManipulation(), a.preventDefault && a.cancelable && a.preventDefault()
                }
            }
        };
        m.prototype._dispatchRangeEvent = function(a, d) {
            var c = { chart: this };
            c.type = a;
            c.trigger = d;
            var b = [];
            this.axisX && 0 < this.axisX.length && b.push("axisX");
            this.axisX2 && 0 < this.axisX2.length && b.push("axisX2");
            this.axisY &&
                0 < this.axisY.length && b.push("axisY");
            this.axisY2 && 0 < this.axisY2.length && b.push("axisY2");
            for (var e = 0; e < b.length; e++)
                if (s(c[b[e]]) && (c[b[e]] = []), "axisY" === b[e])
                    for (var f = 0; f < this.axisY.length; f++) c[b[e]].push({ viewportMinimum: this[b[e]][f].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][f].sessionVariables.newViewportMaximum });
                else if ("axisY2" === b[e])
                for (f = 0; f < this.axisY2.length; f++) c[b[e]].push({ viewportMinimum: this[b[e]][f].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][f].sessionVariables.newViewportMaximum });
            else if ("axisX" === b[e])
                for (f = 0; f < this.axisX.length; f++) c[b[e]].push({ viewportMinimum: this[b[e]][f].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][f].sessionVariables.newViewportMaximum });
            else if ("axisX2" === b[e])
                for (f = 0; f < this.axisX2.length; f++) c[b[e]].push({ viewportMinimum: this[b[e]][f].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][f].sessionVariables.newViewportMaximum });
            this.dispatchEvent(a, c, this)
        };
        m.prototype._mouseEventHandler = function(a) {
            "undefined" === typeof a.target &&
                a.srcElement && (a.target = a.srcElement);
            var d = Ma(a),
                c = a.type,
                b, e;
            a.which ? e = 3 == a.which : a.button && (e = 2 == a.button);
            m.capturedEventParam && (b = m.capturedEventParam, "mouseup" === c && (m.capturedEventParam = null, b.chart.overlaidCanvas.releaseCapture ? b.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", b.chart._mouseEventHandler, !1)), b.hasOwnProperty(c) && ("mouseup" !== c || b.chart.overlaidCanvas.releaseCapture ? a.target !== b.chart.overlaidCanvas && u || b[c].call(b.context, d.x, d.y) :
                a.target !== b.chart.overlaidCanvas && (b.chart.isDrag = !1)));
            if (this.interactivityEnabled)
                if (this._ignoreNextEvent) this._ignoreNextEvent = !1;
                else if (a.preventManipulation && a.preventManipulation(), a.preventDefault && a.preventDefault(), Fa && window.console && (window.console.log(c + " --\x3e x: " + d.x + "; y:" + d.y), e && window.console.log(a.which), "mouseup" === c && window.console.log("mouseup")), !e) {
                if (!m.capturedEventParam && this._events) {
                    for (var f = 0; f < this._events.length; f++)
                        if (this._events[f].hasOwnProperty(c))
                            if (b =
                                this._events[f], e = b.bounds, d.x >= e.x1 && d.x <= e.x2 && d.y >= e.y1 && d.y <= e.y2) { b[c].call(b.context, d.x, d.y); "mousedown" === c && !0 === b.capture ? (m.capturedEventParam = b, this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup", this._mouseEventHandler, !1)) : "mouseup" === c && (b.chart.overlaidCanvas.releaseCapture ? b.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", this._mouseEventHandler, !1)); break } else b = null;
                    a.target.style.cursor =
                        b && b.cursor ? b.cursor : this._defaultCursor
                }
                c = this.plotArea;
                if (d.x < c.x1 || d.x > c.x2 || d.y < c.y1 || d.y > c.y2)
                    if (this.toolTip && this.toolTip.enabled) {
                        this.toolTip.hide();
                        this.toolTip.dispatchEvent("hidden", { chart: this, toolTip: this.toolTip }, this.toolTip);
                        for (f = 0; f < this.axisX.length; f++) this.axisX[f].crosshair && this.axisX[f].crosshair.enabled && this.axisX[f].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX[f].options }, this.axisX[f].crosshair);
                        for (f = 0; f < this.axisX2.length; f++) this.axisX2[f].crosshair &&
                            this.axisX2[f].crosshair.enabled && this.axisX2[f].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX2[f].options }, this.axisX2[f].crosshair);
                        for (f = 0; f < this.axisY.length; f++) this.axisY[f].crosshair && this.axisY[f].crosshair.enabled && this.axisY[f].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY[f].options }, this.axisY[f].crosshair);
                        for (f = 0; f < this.axisY2.length; f++) this.axisY2[f].crosshair && this.axisY2[f].crosshair.enabled && this.axisY2[f].crosshair.dispatchEvent("hidden", {
                            chart: this,
                            axis: this.axisY2[f].options
                        }, this.axisY2[f].crosshair)
                    } else this.resetOverlayedCanvas();
                this.isDrag && this.zoomEnabled || !this._eventManager || this._eventManager.mouseEventHandler(a)
            }
        };
        m.prototype._plotAreaMouseDown = function(a, d) {
            this.isDrag = !0;
            this.dragStartPoint = { x: a, y: d }
        };
        m.prototype._plotAreaMouseUp = function(a, d) {
            if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
                var c = d - this.dragStartPoint.y,
                    b = a - this.dragStartPoint.x,
                    e = 0 <= this.zoomType.indexOf("x"),
                    f = 0 <= this.zoomType.indexOf("y"),
                    p = !1;
                this.resetOverlayedCanvas();
                if ("xySwapped" === this.plotInfo.axisPlacement) var l = f,
                    f = e,
                    e = l;
                if (this.panEnabled || this.zoomEnabled) {
                    if (this.panEnabled)
                        for (e = f = 0; e < this._axes.length; e++) c = this._axes[e], c.logarithmic ? c.viewportMinimum < c.minimum ? (f = c.minimum / c.viewportMinimum, c.sessionVariables.newViewportMinimum = c.viewportMinimum * f, c.sessionVariables.newViewportMaximum = c.viewportMaximum * f, p = !0) : c.viewportMaximum > c.maximum && (f = c.viewportMaximum / c.maximum, c.sessionVariables.newViewportMinimum =
                            c.viewportMinimum / f, c.sessionVariables.newViewportMaximum = c.viewportMaximum / f, p = !0) : c.viewportMinimum < c.minimum ? (f = c.minimum - c.viewportMinimum, c.sessionVariables.newViewportMinimum = c.viewportMinimum + f, c.sessionVariables.newViewportMaximum = c.viewportMaximum + f, p = !0) : c.viewportMaximum > c.maximum && (f = c.viewportMaximum - c.maximum, c.sessionVariables.newViewportMinimum = c.viewportMinimum - f, c.sessionVariables.newViewportMaximum = c.viewportMaximum - f, p = !0);
                    else if ((!e || 2 < Math.abs(b)) && (!f || 2 < Math.abs(c)) && this.zoomEnabled) {
                        if (!this.dragStartPoint) return;
                        c = e ? this.dragStartPoint.x : this.plotArea.x1;
                        b = f ? this.dragStartPoint.y : this.plotArea.y1;
                        e = e ? a : this.plotArea.x2;
                        f = f ? d : this.plotArea.y2;
                        2 < Math.abs(c - e) && 2 < Math.abs(b - f) && this._zoomPanToSelectedRegion(c, b, e, f) && (p = !0)
                    }
                    p && (this._ignoreNextEvent = !0, this._dispatchRangeEvent("rangeChanging", "zoom"), this.stockChart && (this.stockChart.navigator && this.stockChart.navigator.enabled) && (this.stockChart._rangeEventParameter || (this.stockChart._rangeEventParameter = {
                        stockChart: this.stockChart,
                        source: "chart",
                        index: this.stockChart.charts.indexOf(this),
                        minimum: this.stockChart.sessionVariables._axisXMin,
                        maximum: this.stockChart.sessionVariables._axisXMax
                    }), this.stockChart._rangeEventParameter.type = "rangeChanging", this.stockChart.dispatchEvent("rangeChanging", this.stockChart._rangeEventParameter, this.stockChart)), this.render(), this._dispatchRangeEvent("rangeChanged", "zoom"), this.stockChart && (this.stockChart.navigator && this.stockChart.navigator.enabled) && (this.stockChart._rangeEventParameter.type = "rangeChanged", this.stockChart.dispatchEvent("rangeChanged",
                        this.stockChart._rangeEventParameter, this.stockChart)), p && (this.zoomEnabled && "none" === this._zoomButton.style.display) && (Ja(this._zoomButton, this._resetButton), ua(this, this._zoomButton, "pan"), ua(this, this._resetButton, "reset")))
                }
            }
            this.isDrag = !1;
            if ("none" !== this.plotInfo.axisPlacement) {
                this.resetOverlayedCanvas();
                if (this.axisX && 0 < this.axisX.length)
                    for (p = 0; p < this.axisX.length; p++) this.axisX[p].crosshair && this.axisX[p].crosshair.enabled && this.axisX[p].renderCrosshair(a, d);
                if (this.axisX2 && 0 < this.axisX2.length)
                    for (p =
                        0; p < this.axisX2.length; p++) this.axisX2[p].crosshair && this.axisX2[p].crosshair.enabled && this.axisX2[p].renderCrosshair(a, d);
                if (this.axisY && 0 < this.axisY.length)
                    for (p = 0; p < this.axisY.length; p++) this.axisY[p].crosshair && this.axisY[p].crosshair.enabled && this.axisY[p].renderCrosshair(a, d);
                if (this.axisY2 && 0 < this.axisY2.length)
                    for (p = 0; p < this.axisY2.length; p++) this.axisY2[p].crosshair && this.axisY2[p].crosshair.enabled && this.axisY2[p].renderCrosshair(a, d)
            }
        };
        m.prototype._plotAreaMouseMove = function(a, d) {
            if (this.isDrag &&
                "none" !== this.plotInfo.axisPlacement) {
                var c = 0,
                    b = 0,
                    e = c = null,
                    e = 0 <= this.zoomType.indexOf("x"),
                    f = 0 <= this.zoomType.indexOf("y"),
                    p = this;
                "xySwapped" === this.plotInfo.axisPlacement && (c = f, f = e, e = c);
                c = this.dragStartPoint.x - a;
                b = this.dragStartPoint.y - d;
                2 < Math.abs(c) && 8 > Math.abs(c) && (this.panEnabled || this.zoomEnabled) ? (this.toolTip.hide(), this.toolTip.dispatchEvent("hidden", { chart: this, toolTip: this.toolTip }, this.toolTip)) : this.panEnabled || this.zoomEnabled || this.toolTip.mouseMoveHandler(a, d);
                if ((!e || 2 < Math.abs(c) ||
                        !f || 2 < Math.abs(b)) && (this.panEnabled || this.zoomEnabled))
                    if (this.panEnabled) e = { x1: e ? this.plotArea.x1 + c : this.plotArea.x1, y1: f ? this.plotArea.y1 + b : this.plotArea.y1, x2: e ? this.plotArea.x2 + c : this.plotArea.x2, y2: f ? this.plotArea.y2 + b : this.plotArea.y2 }, clearTimeout(p._panTimerId), p._panTimerId = setTimeout(function(b, c, e, f) {
                        return function() {
                            p._zoomPanToSelectedRegion(b, c, e, f, !0) && (p._dispatchRangeEvent("rangeChanging", "pan"), p.stockChart && (p.stockChart.navigator && p.stockChart.navigator.enabled) && (p.stockChart._rangeEventParameter.type =
                                "rangeChanging", p.stockChart.dispatchEvent("rangeChanging", p.stockChart._rangeEventParameter, p.stockChart)), p.render(), p._dispatchRangeEvent("rangeChanged", "pan"), p.stockChart && (p.stockChart.navigator && p.stockChart.navigator.enabled) && (p.stockChart._rangeEventParameter.type = "rangeChanged", p.stockChart.dispatchEvent("rangeChanged", p.stockChart._rangeEventParameter, p.stockChart)), p.dragStartPoint.x = a, p.dragStartPoint.y = d)
                        }
                    }(e.x1, e.y1, e.x2, e.y2), 0);
                    else if (this.zoomEnabled) {
                    this.resetOverlayedCanvas();
                    c = this.overlaidCanvasCtx.globalAlpha;
                    this.overlaidCanvasCtx.fillStyle = "#A89896";
                    var b = e ? this.dragStartPoint.x : this.plotArea.x1,
                        l = f ? this.dragStartPoint.y : this.plotArea.y1,
                        A = e ? a - this.dragStartPoint.x : this.plotArea.x2 - this.plotArea.x1,
                        h = f ? d - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1;
                    this.validateRegion(b, l, e ? a : this.plotArea.x2 - this.plotArea.x1, f ? d : this.plotArea.y2 - this.plotArea.y1, "xy" !== this.zoomType).isValid && (this.resetOverlayedCanvas(), this.overlaidCanvasCtx.fillStyle = "#99B2B5");
                    this.overlaidCanvasCtx.globalAlpha =
                        0.7;
                    this.overlaidCanvasCtx.fillRect(b, l, A, h);
                    this.overlaidCanvasCtx.globalAlpha = c
                }
            } else if (this.toolTip.mouseMoveHandler(a, d), "none" !== this.plotInfo.axisPlacement) {
                if (this.axisX && 0 < this.axisX.length)
                    for (e = 0; e < this.axisX.length; e++) this.axisX[e].crosshair && this.axisX[e].crosshair.enabled && this.axisX[e].renderCrosshair(a, d);
                if (this.axisX2 && 0 < this.axisX2.length)
                    for (e = 0; e < this.axisX2.length; e++) this.axisX2[e].crosshair && this.axisX2[e].crosshair.enabled && this.axisX2[e].renderCrosshair(a, d);
                if (this.axisY &&
                    0 < this.axisY.length)
                    for (e = 0; e < this.axisY.length; e++) this.axisY[e].crosshair && this.axisY[e].crosshair.enabled && this.axisY[e].renderCrosshair(a, d);
                if (this.axisY2 && 0 < this.axisY2.length)
                    for (e = 0; e < this.axisY2.length; e++) this.axisY2[e].crosshair && this.axisY2[e].crosshair.enabled && this.axisY2[e].renderCrosshair(a, d)
            }
        };
        m.prototype._zoomPanToSelectedRegion = function(a, d, c, b, e) {
            a = this.validateRegion(a, d, c, b, e);
            d = a.axesWithValidRange;
            c = a.axesRanges;
            if (a.isValid)
                for (b = 0; b < d.length; b++) e = c[b], d[b].setViewPortRange(e.val1,
                    e.val2), this.syncCharts && "y" != this.zoomType && this.syncCharts(e.val1, e.val2), this.stockChart && (this.stockChart._rangeEventParameter = { stockChart: this.stockChart, source: "chart", index: this.stockChart.charts.indexOf(this), minimum: e.val1, maximum: e.val2 });
            return a.isValid
        };
        m.prototype.validateRegion = function(a, d, c, b, e) {
            e = e || !1;
            for (var f = 0 <= this.zoomType.indexOf("x"), p = 0 <= this.zoomType.indexOf("y"), l = !1, A = [], h = [], n = [], r = 0; r < this._axes.length; r++)("axisX" === this._axes[r].type && f || "axisY" === this._axes[r].type &&
                p) && h.push(this._axes[r]);
            for (p = 0; p < h.length; p++) {
                var r = h[p],
                    f = !1,
                    q = r.convertPixelToValue({ x: a, y: d }),
                    g = r.convertPixelToValue({ x: c, y: b });
                if (q > g) var w = g,
                    g = q,
                    q = w;
                if (r.scaleBreaks)
                    for (w = 0; !f && w < r.scaleBreaks._appliedBreaks.length; w++) f = r.scaleBreaks._appliedBreaks[w].startValue <= q && r.scaleBreaks._appliedBreaks[w].endValue >= g;
                if (isFinite(r.dataInfo.minDiff))
                    if (w = r.getApparentDifference(q, g, null, !0), !(f || !(this.panEnabled && r.scaleBreaks && r.scaleBreaks._appliedBreaks.length) && (r.logarithmic && w < Math.pow(r.dataInfo.minDiff,
                            3) || !r.logarithmic && w < 3 * Math.abs(r.dataInfo.minDiff)) || q < r.minimum || g > r.maximum)) A.push(r), n.push({ val1: q, val2: g }), l = !0;
                    else if (!e) { l = !1; break }
            }
            return { isValid: l, axesWithValidRange: A, axesRanges: n }
        };
        m.prototype.preparePlotArea = function() {
            var a = this.plotArea;
            !u && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
            if ((this.axisX[0] || this.axisX2[0]) && (this.axisY[0] || this.axisY2[0])) {
                var d = this.axisX[0] ? this.axisX[0].lineCoordinates : this.axisX2[0].lineCoordinates;
                if (this.axisY && 0 < this.axisY.length && this.axisY[0]) {
                    var c =
                        this.axisY[0];
                    a.x1 = d.x1 < d.x2 ? d.x1 : c.lineCoordinates.x1;
                    a.y1 = d.y1 < c.lineCoordinates.y1 ? d.y1 : c.lineCoordinates.y1;
                    a.x2 = d.x2 > c.lineCoordinates.x2 ? d.x2 : c.lineCoordinates.x2;
                    a.y2 = d.y2 > d.y1 ? d.y2 : c.lineCoordinates.y2;
                    a.width = a.x2 - a.x1;
                    a.height = a.y2 - a.y1
                }
                this.axisY2 && 0 < this.axisY2.length && this.axisY2[0] && (c = this.axisY2[0], a.x1 = d.x1 < d.x2 ? d.x1 : c.lineCoordinates.x1, a.y1 = d.y1 < c.lineCoordinates.y1 ? d.y1 : c.lineCoordinates.y1, a.x2 = d.x2 > c.lineCoordinates.x2 ? d.x2 : c.lineCoordinates.x2, a.y2 = d.y2 > d.y1 ? d.y2 : c.lineCoordinates.y2,
                    a.width = a.x2 - a.x1, a.height = a.y2 - a.y1)
            } else d = this.layoutManager.getFreeSpace(), a.x1 = d.x1, a.x2 = d.x2, a.y1 = d.y1, a.y2 = d.y2, a.width = d.width, a.height = d.height;
            u || (a.canvas.width = a.width, a.canvas.height = a.height, a.canvas.style.left = a.x1 + "px", a.canvas.style.top = a.y1 + "px", (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
            a.layoutManager = new Ca(a.x1, a.y1, a.x2, a.y2, 2)
        };
        m.prototype.renderIndexLabels = function(a) {
            var d = a || this.plotArea.ctx,
                c = this.plotArea,
                b = 0,
                e = 0,
                f = 0,
                p = 0,
                l = b = p = e = f = 0,
                A = 0;
            for (a = 0; a < this._indexLabels.length; a++) {
                var h =
                    this._indexLabels[a],
                    n = h.chartType.toLowerCase(),
                    r, q, l = la("indexLabelFontColor", h.dataPoint, h.dataSeries),
                    A = la("indexLabelFontSize", h.dataPoint, h.dataSeries);
                r = la("indexLabelFontFamily", h.dataPoint, h.dataSeries);
                q = la("indexLabelFontStyle", h.dataPoint, h.dataSeries);
                var p = la("indexLabelFontWeight", h.dataPoint, h.dataSeries),
                    g = la("indexLabelBackgroundColor", h.dataPoint, h.dataSeries),
                    e = la("indexLabelMaxWidth", h.dataPoint, h.dataSeries),
                    f = la("indexLabelWrap", h.dataPoint, h.dataSeries),
                    w = la("indexLabelLineDashType",
                        h.dataPoint, h.dataSeries),
                    k = la("indexLabelLineColor", h.dataPoint, h.dataSeries),
                    m = s(h.dataPoint.indexLabelLineThickness) ? s(h.dataSeries.options.indexLabelLineThickness) ? 0 : h.dataSeries.options.indexLabelLineThickness : h.dataPoint.indexLabelLineThickness,
                    b = 0 < m ? Math.min(10, ("normal" === this.plotInfo.axisPlacement ? this.plotArea.height : this.plotArea.width) << 0) : 0,
                    t = { percent: null, total: null },
                    x = null;
                if (0 <= h.dataSeries.type.indexOf("stacked") || "pie" === h.dataSeries.type || "doughnut" === h.dataSeries.type) t = this.getPercentAndTotal(h.dataSeries,
                    h.dataPoint);
                if (h.dataSeries.indexLabelFormatter || h.dataPoint.indexLabelFormatter) x = { chart: this, dataSeries: h.dataSeries, dataPoint: h.dataPoint, index: h.indexKeyword, total: t.total, percent: t.percent };
                var z = h.dataPoint.indexLabelFormatter ? h.dataPoint.indexLabelFormatter(x) : h.dataPoint.indexLabel ? this.replaceKeywordsWithValue(h.dataPoint.indexLabel, h.dataPoint, h.dataSeries, null, h.indexKeyword) : h.dataSeries.indexLabelFormatter ? h.dataSeries.indexLabelFormatter(x) : h.dataSeries.indexLabel ? this.replaceKeywordsWithValue(h.dataSeries.indexLabel,
                    h.dataPoint, h.dataSeries, null, h.indexKeyword) : null;
                if (null !== z && "" !== z) {
                    var t = la("indexLabelPlacement", h.dataPoint, h.dataSeries),
                        x = la("indexLabelOrientation", h.dataPoint, h.dataSeries),
                        F = h.direction,
                        B = h.dataSeries.axisX,
                        C = h.dataSeries.axisY,
                        v = !1,
                        g = new ia(d, { x: 0, y: 0, maxWidth: e ? e : 0.5 * this.width, maxHeight: f ? 5 * A : 1.5 * A, angle: "horizontal" === x ? 0 : -90, text: z, padding: 0, backgroundColor: g, horizontalAlign: "left", fontSize: A, fontFamily: r, fontWeight: p, fontColor: l, fontStyle: q, textBaseline: "top" });
                    g.measureText();
                    h.dataSeries.indexLabelMaxWidth =
                        g.maxWidth;
                    if ("stackedarea100" === n) { if (h.point.x < c.x1 || h.point.x > c.x2 || h.point.y < c.y1 - 1 || h.point.y > c.y2 + 1) continue } else if ("rangearea" === n || "rangesplinearea" === n) { if (h.dataPoint.x < B.viewportMinimum || h.dataPoint.x > B.viewportMaximum || Math.max.apply(null, h.dataPoint.y) < C.viewportMinimum || Math.min.apply(null, h.dataPoint.y) > C.viewportMaximum) continue } else if (0 <= n.indexOf("line") || 0 <= n.indexOf("area") || 0 <= n.indexOf("bubble") || 0 <= n.indexOf("scatter")) {
                        if (h.dataPoint.x < B.viewportMinimum || h.dataPoint.x > B.viewportMaximum ||
                            h.dataPoint.y < C.viewportMinimum || h.dataPoint.y > C.viewportMaximum) continue
                    } else if (0 <= n.indexOf("column") || "waterfall" === n || "error" === n && !h.axisSwapped) { if (h.dataPoint.x < B.viewportMinimum || h.dataPoint.x > B.viewportMaximum || h.bounds.y1 > c.y2 || h.bounds.y2 < c.y1) continue } else if (0 <= n.indexOf("bar") || "error" === n) { if (h.dataPoint.x < B.viewportMinimum || h.dataPoint.x > B.viewportMaximum || h.bounds.x1 > c.x2 || h.bounds.x2 < c.x1) continue } else if ("candlestick" === n || "ohlc" === n) {
                        if (h.dataPoint.x < B.viewportMinimum || h.dataPoint.x >
                            B.viewportMaximum || Math.max.apply(null, h.dataPoint.y) < C.viewportMinimum || Math.min.apply(null, h.dataPoint.y) > C.viewportMaximum) continue
                    } else if (h.dataPoint.x < B.viewportMinimum || h.dataPoint.x > B.viewportMaximum) continue;
                    e = p = 2;
                    "horizontal" === x ? (l = g.width, A = g.height) : (A = g.width, l = g.height);
                    if ("normal" === this.plotInfo.axisPlacement) {
                        if (0 <= n.indexOf("line") || 0 <= n.indexOf("area")) t = "auto", p = 4;
                        else if (0 <= n.indexOf("stacked")) "auto" === t && (t = "inside");
                        else if ("bubble" === n || "scatter" === n) t = "inside";
                        r = h.point.x -
                            l / 2;
                        "inside" !== t ? (e = c.y1, f = c.y2, 0 < F ? (q = h.point.y - A - p - b, q < e && (q = "auto" === t ? Math.max(h.point.y, e) + p + b : e + p + b, v = q + A > h.point.y)) : (q = h.point.y + p + b, q > f - A - p - b && (q = "auto" === t ? Math.min(h.point.y, f) - A - p - b : f - A - p - b, v = q < h.point.y))) : (e = Math.max(h.bounds.y1, c.y1), f = Math.min(h.bounds.y2, c.y2), b = 0 <= n.indexOf("range") || "error" === n ? 0 < F ? Math.max(h.bounds.y1, c.y1) + A / 2 + p : Math.min(h.bounds.y2, c.y2) - A / 2 - p : (Math.max(h.bounds.y1, c.y1) + Math.min(h.bounds.y2, c.y2)) / 2, 0 < F ? (q = Math.max(h.point.y, b) - A / 2, q < e && ("bubble" === n || "scatter" ===
                            n) && (q = Math.max(h.point.y - A - p, c.y1 + p))) : (q = Math.min(h.point.y, b) - A / 2, q > f - A - p && ("bubble" === n || "scatter" === n) && (q = Math.min(h.point.y + p, c.y2 - A - p))), q = Math.min(q, f - A))
                    } else 0 <= n.indexOf("line") || 0 <= n.indexOf("area") || 0 <= n.indexOf("scatter") ? (t = "auto", e = 4) : 0 <= n.indexOf("stacked") ? "auto" === t && (t = "inside") : "bubble" === n && (t = "inside"), q = h.point.y - A / 2, "inside" !== t ? (p = c.x1, f = c.x2, 0 > F ? (r = h.point.x - l - e - b, r < p && (r = "auto" === t ? Math.max(h.point.x, p) + e + b : p + e + b, v = r + l > h.point.x)) : (r = h.point.x + e + b, r > f - l - e - b && (r = "auto" ===
                        t ? Math.min(h.point.x, f) - l - e - b : f - l - e - b, v = r < h.point.x))) : (p = Math.max(h.bounds.x1, c.x1), Math.min(h.bounds.x2, c.x2), b = 0 <= n.indexOf("range") || "error" === n ? 0 > F ? Math.max(h.bounds.x1, c.x1) + l / 2 + e : Math.min(h.bounds.x2, c.x2) - l / 2 - e : (Math.max(h.bounds.x1, c.x1) + Math.min(h.bounds.x2, c.x2)) / 2, r = 0 > F ? Math.max(h.point.x, b) - l / 2 : Math.min(h.point.x, b) - l / 2, r = Math.max(r, p));
                    "vertical" === x && (q += A);
                    g.x = r;
                    g.y = q;
                    g.render(!0);
                    m && ("inside" !== t && (0 > n.indexOf("bar") && ("error" !== n || !h.axisSwapped) && h.point.x > c.x1 && h.point.x < c.x2 ||
                        !v) && (0 > n.indexOf("column") && ("error" !== n || h.axisSwapped) && h.point.y > c.y1 && h.point.y < c.y2 || !v)) && (d.lineWidth = m, d.strokeStyle = k ? k : "gray", d.setLineDash && d.setLineDash(N(w, m)), d.beginPath(), d.moveTo(h.point.x, h.point.y), 0 <= n.indexOf("bar") || "error" === n && h.axisSwapped ? d.lineTo(r + (0 < h.direction ? 0 : l), q + ("horizontal" === x ? A : -A) / 2) : 0 <= n.indexOf("column") || "error" === n && !h.axisSwapped ? d.lineTo(r + l / 2, q + ((0 < h.direction ? A : -A) + ("horizontal" === x ? A : -A)) / 2) : d.lineTo(r + l / 2, q + ((q < h.point.y ? A : -A) + ("horizontal" === x ? A :
                        -A)) / 2), d.stroke())
                }
            }
            d = { source: d, dest: this.plotArea.ctx, animationCallback: L.fadeInAnimation, easingFunction: L.easing.easeInQuad, animationBase: 0, startTimePercent: 0.7 };
            for (a = 0; a < this._indexLabels.length; a++) h = this._indexLabels[a], g = la("indexLabelBackgroundColor", h.dataPoint, h.dataSeries), h.dataSeries.indexLabelBackgroundColor = s(g) ? u ? "transparent" : null : g;
            return d
        };
        m.prototype.renderLine = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = u ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b =
                    this._eventManager.ghostCtx;
                c.save();
                var e = this.plotArea;
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                for (var f = [], p, l = 0; l < a.dataSeriesIndexes.length; l++) {
                    var A = a.dataSeriesIndexes[l],
                        h = this.data[A];
                    c.lineWidth = h.lineThickness;
                    var n = h.dataPoints,
                        r = "solid";
                    if (c.setLineDash) {
                        var q = N(h.nullDataLineDashType, h.lineThickness),
                            r = h.lineDashType,
                            g = N(r, h.lineThickness);
                        c.setLineDash(g)
                    }
                    var w = h.id;
                    this._eventManager.objectMap[w] = { objectType: "dataSeries", dataSeriesIndex: A };
                    w = P(w);
                    b.strokeStyle = w;
                    b.lineWidth = 0 < h.lineThickness ? Math.max(h.lineThickness, 4) : 0;
                    var w = h._colorSet,
                        k = w = h.lineColor = h.options.lineColor ? h.options.lineColor : w[0];
                    c.strokeStyle = w;
                    var m = !0,
                        t = 0,
                        x, s;
                    c.beginPath();
                    if (0 < n.length) {
                        for (var F = !1, t = 0; t < n.length; t++)
                            if (x = n[t].x.getTime ? n[t].x.getTime() : n[t].x, !(x < a.axisX.dataInfo.viewPortMin || x > a.axisX.dataInfo.viewPortMax && (!h.connectNullData || !F)))
                                if ("number" !== typeof n[t].y) 0 < t && !(h.connectNullData || F || m) && (c.stroke(), u && b.stroke()), F = !0;
                                else {
                                    x = a.axisX.convertValueToPixel(x);
                                    s =
                                        a.axisY.convertValueToPixel(n[t].y);
                                    var B = h.dataPointIds[t];
                                    this._eventManager.objectMap[B] = { id: B, objectType: "dataPoint", dataSeriesIndex: A, dataPointIndex: t, x1: x, y1: s };
                                    m || F ? (!m && h.connectNullData ? (c.setLineDash && (h.options.nullDataLineDashType || r === h.lineDashType && h.lineDashType !== h.nullDataLineDashType) && (c.stroke(), c.beginPath(), c.moveTo(p.x, p.y), r = h.nullDataLineDashType, c.setLineDash(q)), c.lineTo(x, s), u && b.lineTo(x, s)) : (c.beginPath(), c.moveTo(x, s), u && (b.beginPath(), b.moveTo(x, s))), F = m = !1) : (c.lineTo(x,
                                        s), u && b.lineTo(x, s), 0 == t % 500 && (c.stroke(), c.beginPath(), c.moveTo(x, s), u && (b.stroke(), b.beginPath(), b.moveTo(x, s))));
                                    p = { x: x, y: s };
                                    t < n.length - 1 && (k !== (n[t].lineColor || w) || r !== (n[t].lineDashType || h.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(x, s), k = n[t].lineColor || w, c.strokeStyle = k, c.setLineDash && (n[t].lineDashType ? (r = n[t].lineDashType, c.setLineDash(N(r, h.lineThickness))) : (r = h.lineDashType, c.setLineDash(g))));
                                    if (0 < n[t].markerSize || 0 < h.markerSize) {
                                        var C = h.getMarkerProperties(t, x, s, c);
                                        f.push(C);
                                        B = P(B);
                                        u && f.push({ x: x, y: s, ctx: b, type: C.type, size: C.size, color: B, borderColor: B, borderThickness: C.borderThickness })
                                    }(n[t].indexLabel || h.indexLabel || n[t].indexLabelFormatter || h.indexLabelFormatter) && this._indexLabels.push({ chartType: "line", dataPoint: n[t], dataSeries: h, point: { x: x, y: s }, direction: 0 > n[t].y === a.axisY.reversed ? 1 : -1, color: w })
                                }
                        c.stroke();
                        u && b.stroke()
                    }
                }
                X.drawMarkers(f);
                u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas &&
                    c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), b.beginPath());
                c.restore();
                c.beginPath();
                return { source: d, dest: this.plotArea.ctx, animationCallback: L.xClipAnimation, easingFunction: L.easing.linear, animationBase: 0 }
            }
        };
        m.prototype.renderStepLine = function(a) {
            var d = a.targetCanvasCtx ||
                this.plotArea.ctx,
                c = u ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = this._eventManager.ghostCtx;
                c.save();
                var e = this.plotArea;
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                for (var f = [], p, l = 0; l < a.dataSeriesIndexes.length; l++) {
                    var A = a.dataSeriesIndexes[l],
                        h = this.data[A];
                    c.lineWidth = h.lineThickness;
                    var n = h.dataPoints,
                        r = "solid";
                    if (c.setLineDash) {
                        var q = N(h.nullDataLineDashType, h.lineThickness),
                            r = h.lineDashType,
                            g = N(r, h.lineThickness);
                        c.setLineDash(g)
                    }
                    var w = h.id;
                    this._eventManager.objectMap[w] = { objectType: "dataSeries", dataSeriesIndex: A };
                    w = P(w);
                    b.strokeStyle = w;
                    b.lineWidth = 0 < h.lineThickness ? Math.max(h.lineThickness, 4) : 0;
                    var w = h._colorSet,
                        k = w = h.lineColor = h.options.lineColor ? h.options.lineColor : w[0];
                    c.strokeStyle = w;
                    var m = !0,
                        t = 0,
                        x, s;
                    c.beginPath();
                    if (0 < n.length) {
                        for (var F = !1, t = 0; t < n.length; t++)
                            if (x = n[t].getTime ? n[t].x.getTime() : n[t].x, !(x < a.axisX.dataInfo.viewPortMin || x > a.axisX.dataInfo.viewPortMax && (!h.connectNullData || !F)))
                                if ("number" !== typeof n[t].y) 0 < t && !(h.connectNullData || F || m) && (c.stroke(),
                                    u && b.stroke()), F = !0;
                                else {
                                    var B = s;
                                    x = a.axisX.convertValueToPixel(x);
                                    s = a.axisY.convertValueToPixel(n[t].y);
                                    var C = h.dataPointIds[t];
                                    this._eventManager.objectMap[C] = { id: C, objectType: "dataPoint", dataSeriesIndex: A, dataPointIndex: t, x1: x, y1: s };
                                    m || F ? (!m && h.connectNullData ? (c.setLineDash && (h.options.nullDataLineDashType || r === h.lineDashType && h.lineDashType !== h.nullDataLineDashType) && (c.stroke(), c.beginPath(), c.moveTo(p.x, p.y), r = h.nullDataLineDashType, c.setLineDash(q)), c.lineTo(x, B), c.lineTo(x, s), u && (b.lineTo(x,
                                        B), b.lineTo(x, s))) : (c.beginPath(), c.moveTo(x, s), u && (b.beginPath(), b.moveTo(x, s))), F = m = !1) : (c.lineTo(x, B), u && b.lineTo(x, B), c.lineTo(x, s), u && b.lineTo(x, s), 0 == t % 500 && (c.stroke(), c.beginPath(), c.moveTo(x, s), u && (b.stroke(), b.beginPath(), b.moveTo(x, s))));
                                    p = { x: x, y: s };
                                    t < n.length - 1 && (k !== (n[t].lineColor || w) || r !== (n[t].lineDashType || h.lineDashType)) && (c.stroke(), c.beginPath(), c.moveTo(x, s), k = n[t].lineColor || w, c.strokeStyle = k, c.setLineDash && (n[t].lineDashType ? (r = n[t].lineDashType, c.setLineDash(N(r, h.lineThickness))) :
                                        (r = h.lineDashType, c.setLineDash(g))));
                                    if (0 < n[t].markerSize || 0 < h.markerSize) B = h.getMarkerProperties(t, x, s, c), f.push(B), C = P(C), u && f.push({ x: x, y: s, ctx: b, type: B.type, size: B.size, color: C, borderColor: C, borderThickness: B.borderThickness });
                                    (n[t].indexLabel || h.indexLabel || n[t].indexLabelFormatter || h.indexLabelFormatter) && this._indexLabels.push({ chartType: "stepLine", dataPoint: n[t], dataSeries: h, point: { x: x, y: s }, direction: 0 > n[t].y === a.axisY.reversed ? 1 : -1, color: w })
                                }
                        c.stroke();
                        u && b.stroke()
                    }
                }
                X.drawMarkers(f);
                u &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), b.beginPath());
                c.restore();
                c.beginPath();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xClipAnimation,
                    easingFunction: L.easing.linear,
                    animationBase: 0
                }
            }
        };
        m.prototype.renderSpline = function(a) {
            function d(a) {
                a = v(a, 2);
                if (0 < a.length) {
                    b.beginPath();
                    u && e.beginPath();
                    b.moveTo(a[0].x, a[0].y);
                    a[0].newStrokeStyle && (b.strokeStyle = a[0].newStrokeStyle);
                    a[0].newLineDashArray && b.setLineDash(a[0].newLineDashArray);
                    u && e.moveTo(a[0].x, a[0].y);
                    for (var c = 0; c < a.length - 3; c += 3)
                        if (b.bezierCurveTo(a[c + 1].x, a[c + 1].y, a[c + 2].x, a[c + 2].y, a[c + 3].x, a[c + 3].y), u && e.bezierCurveTo(a[c + 1].x, a[c + 1].y, a[c + 2].x, a[c + 2].y, a[c + 3].x, a[c + 3].y),
                            0 < c && 0 === c % 3E3 || a[c + 3].newStrokeStyle || a[c + 3].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(a[c + 3].x, a[c + 3].y), a[c + 3].newStrokeStyle && (b.strokeStyle = a[c + 3].newStrokeStyle), a[c + 3].newLineDashArray && b.setLineDash(a[c + 3].newLineDashArray), u && (e.stroke(), e.beginPath(), e.moveTo(a[c + 3].x, a[c + 3].y));
                    b.stroke();
                    u && e.stroke()
                }
            }
            var c = a.targetCanvasCtx || this.plotArea.ctx,
                b = u ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx;
                b.save();
                var f = this.plotArea;
                b.beginPath();
                b.rect(f.x1, f.y1, f.width, f.height);
                b.clip();
                for (var p = [], l = 0; l < a.dataSeriesIndexes.length; l++) {
                    var A = a.dataSeriesIndexes[l],
                        h = this.data[A];
                    b.lineWidth = h.lineThickness;
                    var n = h.dataPoints,
                        r = "solid";
                    if (b.setLineDash) {
                        var q = N(h.nullDataLineDashType, h.lineThickness),
                            r = h.lineDashType,
                            g = N(r, h.lineThickness);
                        b.setLineDash(g)
                    }
                    var w = h.id;
                    this._eventManager.objectMap[w] = { objectType: "dataSeries", dataSeriesIndex: A };
                    w = P(w);
                    e.strokeStyle = w;
                    e.lineWidth = 0 < h.lineThickness ? Math.max(h.lineThickness, 4) : 0;
                    var w = h._colorSet,
                        k = w = h.lineColor = h.options.lineColor ? h.options.lineColor : w[0];
                    b.strokeStyle = w;
                    var m = 0,
                        t, x, s = [];
                    b.beginPath();
                    if (0 < n.length)
                        for (x = !1, m = 0; m < n.length; m++)
                            if (t = n[m].getTime ? n[m].x.getTime() : n[m].x, !(t < a.axisX.dataInfo.viewPortMin || t > a.axisX.dataInfo.viewPortMax && (!h.connectNullData || !x)))
                                if ("number" !== typeof n[m].y) 0 < m && !x && (h.connectNullData ? b.setLineDash && (0 < s.length && (h.options.nullDataLineDashType || !n[m - 1].lineDashType)) && (s[s.length - 1].newLineDashArray = q, r = h.nullDataLineDashType) : (d(s), s = [])), x = !0;
                                else {
                                    t = a.axisX.convertValueToPixel(t);
                                    x = a.axisY.convertValueToPixel(n[m].y);
                                    var F = h.dataPointIds[m];
                                    this._eventManager.objectMap[F] = { id: F, objectType: "dataPoint", dataSeriesIndex: A, dataPointIndex: m, x1: t, y1: x };
                                    s[s.length] = { x: t, y: x };
                                    m < n.length - 1 && (k !== (n[m].lineColor || w) || r !== (n[m].lineDashType || h.lineDashType)) && (k = n[m].lineColor || w, s[s.length - 1].newStrokeStyle = k, b.setLineDash && (n[m].lineDashType ? (r = n[m].lineDashType, s[s.length - 1].newLineDashArray = N(r, h.lineThickness)) : (r = h.lineDashType, s[s.length - 1].newLineDashArray =
                                        g)));
                                    if (0 < n[m].markerSize || 0 < h.markerSize) {
                                        var B = h.getMarkerProperties(m, t, x, b);
                                        p.push(B);
                                        F = P(F);
                                        u && p.push({ x: t, y: x, ctx: e, type: B.type, size: B.size, color: F, borderColor: F, borderThickness: B.borderThickness })
                                    }(n[m].indexLabel || h.indexLabel || n[m].indexLabelFormatter || h.indexLabelFormatter) && this._indexLabels.push({ chartType: "spline", dataPoint: n[m], dataSeries: h, point: { x: t, y: x }, direction: 0 > n[m].y === a.axisY.reversed ? 1 : -1, color: w });
                                    x = !1
                                }
                    d(s)
                }
                X.drawMarkers(p);
                u && (c.drawImage(this._preRenderCanvas, 0, 0, this.width,
                    this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(f.x1, f.y1, f.width, f.height), e.beginPath());
                b.restore();
                b.beginPath();
                return {
                    source: c,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xClipAnimation,
                    easingFunction: L.easing.linear,
                    animationBase: 0
                }
            }
        };
        m.prototype.renderColumn = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = u ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = null,
                    e = this.plotArea,
                    f = 0,
                    p, l, A, h = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    f = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                    n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width,
                        0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0,
                    r = a.axisX.dataInfo.minDiff;
                isFinite(r) || (r = 0.3 * Math.abs(a.axisX.range));
                r = this.dataPointWidth = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(r) / Math.log(a.axisX.range) : Math.abs(r) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && f > n && (f = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && n < f) && (n = Math.max(this.options.dataPointWidth ?
                    this.dataPointWidth : -Infinity, f));
                r < f && (r = f);
                r > n && (r = n);
                c.save();
                u && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var q = a.dataSeriesIndexes[n],
                        g = this.data[q],
                        w = g.dataPoints;
                    if (0 < w.length)
                        for (var k = 5 < r && g.bevelEnabled ? !0 : !1, f = 0; f < w.length; f++)
                            if (w[f].getTime ? A = w[f].x.getTime() :
                                A = w[f].x, !(A < a.axisX.dataInfo.viewPortMin || A > a.axisX.dataInfo.viewPortMax) && "number" === typeof w[f].y) {
                                p = a.axisX.convertValueToPixel(A);
                                l = a.axisY.convertValueToPixel(w[f].y);
                                p = a.axisX.reversed ? p + a.plotType.totalDataSeries * r / 2 - (a.previousDataSeriesCount + n) * r << 0 : p - a.plotType.totalDataSeries * r / 2 + (a.previousDataSeriesCount + n) * r << 0;
                                var m = a.axisX.reversed ? p - r << 0 : p + r << 0,
                                    t;
                                0 <= w[f].y ? t = h : (t = l, l = h);
                                l > t && (b = l, l = t, t = b);
                                b = w[f].color ? w[f].color : g._colorSet[f % g._colorSet.length];
                                ca(c, p, l, m, t, b, 0, null, k && 0 <= w[f].y,
                                    0 > w[f].y && k, !1, !1, g.fillOpacity);
                                b = g.dataPointIds[f];
                                this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: f, x1: p, y1: l, x2: m, y2: t };
                                b = P(b);
                                u && ca(this._eventManager.ghostCtx, p, l, m, t, b, 0, null, !1, !1, !1, !1);
                                (w[f].indexLabel || g.indexLabel || w[f].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "column",
                                    dataPoint: w[f],
                                    dataSeries: g,
                                    point: { x: p + (m - p) / 2, y: 0 > w[f].y === a.axisY.reversed ? l : t },
                                    direction: 0 > w[f].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: p,
                                        y1: Math.min(l, t),
                                        x2: m,
                                        y2: Math.max(l, t)
                                    },
                                    color: b
                                })
                            }
                }
                u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: L.yScaleAnimation, easingFunction: L.easing.easeOutQuart, animationBase: h < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : h > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : h }
            }
        };
        m.prototype.renderStackedColumn = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = u ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = null,
                    e = this.plotArea,
                    f = [],
                    p = [],
                    l = [],
                    A = [],
                    h = 0,
                    n, r, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    h = this.options.dataPointMinWidth ?
                    this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0;
                var g = a.axisX.dataInfo.minDiff;
                isFinite(g) || (g = 0.3 * Math.abs(a.axisX.range));
                g = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(g) / Math.log(a.axisX.range) : Math.abs(g) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                this.dataPointMaxWidth && h > n && (h = Math.min(this.options.dataPointWidth ?
                    this.dataPointWidth : Infinity, n));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && n < h) && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
                g < h && (g = h);
                g > n && (g = n);
                c.save();
                u && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var w = 0; w < a.dataSeriesIndexes.length; w++) {
                    var k = a.dataSeriesIndexes[w],
                        m = this.data[k],
                        t = m.dataPoints;
                    if (0 < t.length) {
                        var x = 5 < g && m.bevelEnabled ? !0 : !1;
                        c.strokeStyle = "#4572A7 ";
                        for (h = 0; h < t.length; h++)
                            if (b = t[h].x.getTime ? t[h].x.getTime() : t[h].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof t[h].y) {
                                n = a.axisX.convertValueToPixel(b);
                                var s = n - a.plotType.plotUnits.length * g / 2 + a.index * g << 0,
                                    F = s + g << 0,
                                    B;
                                if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < t[h].y) l[b] = t[h].y + (l[b] ? l[b] : 0), 0 < l[b] && (r = a.axisY.convertValueToPixel(l[b]),
                                    B = "undefined" !== typeof f[b] ? f[b] : q, f[b] = r);
                                else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= t[h].y) A[b] = t[h].y + (A[b] ? A[b] : 0), B = a.axisY.convertValueToPixel(A[b]), r = "undefined" !== typeof p[b] ? p[b] : q, p[b] = B;
                                else if (r = a.axisY.convertValueToPixel(t[h].y), 0 <= t[h].y) {
                                    var C = "undefined" !== typeof f[b] ? f[b] : 0;
                                    r -= C;
                                    B = q - C;
                                    f[b] = C + (B - r)
                                } else C = p[b] ? p[b] : 0, B = r + C, r = q + C, p[b] = C + (B - r);
                                b = t[h].color ? t[h].color : m._colorSet[h % m._colorSet.length];
                                ca(c, s, r, F, B, b, 0, null, x && 0 <= t[h].y, 0 > t[h].y && x, !1, !1, m.fillOpacity);
                                b = m.dataPointIds[h];
                                this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: k, dataPointIndex: h, x1: s, y1: r, x2: F, y2: B };
                                b = P(b);
                                u && ca(this._eventManager.ghostCtx, s, r, F, B, b, 0, null, !1, !1, !1, !1);
                                (t[h].indexLabel || m.indexLabel || t[h].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: "stackedColumn",
                                    dataPoint: t[h],
                                    dataSeries: m,
                                    point: { x: n, y: 0 <= t[h].y ? r : B },
                                    direction: 0 > t[h].y === a.axisY.reversed ? 1 : -1,
                                    bounds: {
                                        x1: s,
                                        y1: Math.min(r, B),
                                        x2: F,
                                        y2: Math.max(r,
                                            B)
                                    },
                                    color: b
                                })
                            }
                    }
                }
                u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.yScaleAnimation,
                    easingFunction: L.easing.easeOutQuart,
                    animationBase: q < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : q > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : q
                }
            }
        };
        m.prototype.renderStackedColumn100 = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = u ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = null,
                    e = this.plotArea,
                    f = [],
                    p = [],
                    l = [],
                    A = [],
                    h = 0,
                    n, r, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    h = this.options.dataPointMinWidth ? this.dataPointMinWidth :
                    this.options.dataPointWidth ? this.dataPointWidth : 1;
                n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.width << 0;
                var g = a.axisX.dataInfo.minDiff;
                isFinite(g) || (g = 0.3 * Math.abs(a.axisX.range));
                g = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(g) / Math.log(a.axisX.range) : Math.abs(g) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                this.dataPointMaxWidth && h > n && (h = Math.min(this.options.dataPointWidth ?
                    this.dataPointWidth : Infinity, n));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && n < h) && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
                g < h && (g = h);
                g > n && (g = n);
                c.save();
                u && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var w = 0; w < a.dataSeriesIndexes.length; w++) {
                    var k = a.dataSeriesIndexes[w],
                        m = this.data[k],
                        t = m.dataPoints;
                    if (0 < t.length)
                        for (var x = 5 < g && m.bevelEnabled ? !0 : !1, h = 0; h < t.length; h++)
                            if (b = t[h].x.getTime ? t[h].x.getTime() : t[h].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof t[h].y) {
                                n = a.axisX.convertValueToPixel(b);
                                r = 0 !== a.dataPointYSums[b] ? 100 * (t[h].y / a.dataPointYSums[b]) : 0;
                                var s = n - a.plotType.plotUnits.length * g / 2 + a.index * g << 0,
                                    F = s + g << 0,
                                    B;
                                if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < t[h].y) {
                                    l[b] = r +
                                        ("undefined" !== typeof l[b] ? l[b] : 0);
                                    if (0 >= l[b]) continue;
                                    r = a.axisY.convertValueToPixel(l[b]);
                                    B = f[b] ? f[b] : q;
                                    f[b] = r
                                } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= t[h].y) A[b] = r + ("undefined" !== typeof A[b] ? A[b] : 0), B = a.axisY.convertValueToPixel(A[b]), r = p[b] ? p[b] : q, p[b] = B;
                                else if (r = a.axisY.convertValueToPixel(r), 0 <= t[h].y) {
                                    var C = "undefined" !== typeof f[b] ? f[b] : 0;
                                    r -= C;
                                    B = q - C;
                                    a.dataSeriesIndexes.length - 1 === w && 1 >= Math.abs(e.y1 - r) && (r = e.y1);
                                    f[b] = C + (B - r)
                                } else C = "undefined" !== typeof p[b] ?
                                    p[b] : 0, B = r + C, r = q + C, a.dataSeriesIndexes.length - 1 === w && 1 >= Math.abs(e.y2 - B) && (B = e.y2), p[b] = C + (B - r);
                                b = t[h].color ? t[h].color : m._colorSet[h % m._colorSet.length];
                                ca(c, s, r, F, B, b, 0, null, x && 0 <= t[h].y, 0 > t[h].y && x, !1, !1, m.fillOpacity);
                                b = m.dataPointIds[h];
                                this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: k, dataPointIndex: h, x1: s, y1: r, x2: F, y2: B };
                                b = P(b);
                                u && ca(this._eventManager.ghostCtx, s, r, F, B, b, 0, null, !1, !1, !1, !1);
                                (t[h].indexLabel || m.indexLabel || t[h].indexLabelFormatter || m.indexLabelFormatter) &&
                                this._indexLabels.push({ chartType: "stackedColumn100", dataPoint: t[h], dataSeries: m, point: { x: n, y: 0 <= t[h].y ? r : B }, direction: 0 > t[h].y === a.axisY.reversed ? 1 : -1, bounds: { x1: s, y1: Math.min(r, B), x2: F, y2: Math.max(r, B) }, color: b })
                            }
                }
                u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx &&
                    this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: L.yScaleAnimation, easingFunction: L.easing.easeOutQuart, animationBase: q < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : q > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : q }
            }
        };
        m.prototype.renderBar = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = u ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b =
                    null,
                    e = this.plotArea,
                    f = 0,
                    p, l, A, h = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    f = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                    n = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0,
                    r = a.axisX.dataInfo.minDiff;
                isFinite(r) || (r = 0.3 * Math.abs(a.axisX.range));
                r = this.options.dataPointWidth ?
                    this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(r) / Math.log(a.axisX.range) : Math.abs(r) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && f > n && (f = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, n));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && n < f) && (n = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, f));
                r < f && (r = f);
                r > n && (r = n);
                c.save();
                u && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var q = a.dataSeriesIndexes[n],
                        g = this.data[q],
                        w = g.dataPoints;
                    if (0 < w.length) {
                        var k = 5 < r && g.bevelEnabled ? !0 : !1;
                        c.strokeStyle = "#4572A7 ";
                        for (f = 0; f < w.length; f++)
                            if (w[f].getTime ? A = w[f].x.getTime() : A = w[f].x, !(A < a.axisX.dataInfo.viewPortMin || A > a.axisX.dataInfo.viewPortMax) && "number" === typeof w[f].y) {
                                l = a.axisX.convertValueToPixel(A);
                                p = a.axisY.convertValueToPixel(w[f].y);
                                l = a.axisX.reversed ? l + a.plotType.totalDataSeries * r / 2 - (a.previousDataSeriesCount + n) * r << 0 : l - a.plotType.totalDataSeries * r / 2 + (a.previousDataSeriesCount + n) * r << 0;
                                var m = a.axisX.reversed ? l - r << 0 : l + r << 0,
                                    t;
                                0 <= w[f].y ? t = h : (t = p, p = h);
                                b = w[f].color ? w[f].color : g._colorSet[f % g._colorSet.length];
                                ca(c, t, l, p, m, b, 0, null, k, !1, !1, !1, g.fillOpacity);
                                b = g.dataPointIds[f];
                                this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: f, x1: t, y1: l, x2: p, y2: m };
                                b =
                                    P(b);
                                u && ca(this._eventManager.ghostCtx, t, l, p, m, b, 0, null, !1, !1, !1, !1);
                                (w[f].indexLabel || g.indexLabel || w[f].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({ chartType: "bar", dataPoint: w[f], dataSeries: g, point: { x: 0 <= w[f].y ? p : t, y: l + (m - l) / 2 }, direction: 0 > w[f].y === a.axisY.reversed ? 1 : -1, bounds: { x1: Math.min(t, p), y1: l, x2: Math.max(t, p), y2: m }, color: b })
                            }
                    }
                }
                u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas,
                    0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xScaleAnimation,
                    easingFunction: L.easing.easeOutQuart,
                    animationBase: h < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : h > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : h
                }
            }
        };
        m.prototype.renderStackedBar = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = u ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = null,
                    e = this.plotArea,
                    f = [],
                    p = [],
                    l = [],
                    A = [],
                    h = 0,
                    n, r, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                r = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height <<
                    0;
                var g = a.axisX.dataInfo.minDiff;
                isFinite(g) || (g = 0.3 * Math.abs(a.axisX.range));
                g = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(g) / Math.log(a.axisX.range) : Math.abs(g) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                this.dataPointMaxWidth && h > r && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, r));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && r < h) && (r = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
                g <
                    h && (g = h);
                g > r && (g = r);
                c.save();
                u && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var w = 0; w < a.dataSeriesIndexes.length; w++) {
                    var k = a.dataSeriesIndexes[w],
                        m = this.data[k],
                        t = m.dataPoints;
                    if (0 < t.length) {
                        var x = 5 < g && m.bevelEnabled ? !0 : !1;
                        c.strokeStyle = "#4572A7 ";
                        for (h = 0; h < t.length; h++)
                            if (b = t[h].x.getTime ? t[h].x.getTime() :
                                t[h].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof t[h].y) {
                                r = a.axisX.convertValueToPixel(b);
                                var s = r - a.plotType.plotUnits.length * g / 2 + a.index * g << 0,
                                    F = s + g << 0,
                                    B;
                                if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < t[h].y) l[b] = t[h].y + (l[b] ? l[b] : 0), 0 < l[b] && (B = f[b] ? f[b] : q, f[b] = n = a.axisY.convertValueToPixel(l[b]));
                                else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= t[h].y) A[b] = t[h].y + (A[b] ? A[b] : 0), n = p[b] ?
                                    p[b] : q, p[b] = B = a.axisY.convertValueToPixel(A[b]);
                                else if (n = a.axisY.convertValueToPixel(t[h].y), 0 <= t[h].y) {
                                    var C = f[b] ? f[b] : 0;
                                    B = q + C;
                                    n += C;
                                    f[b] = C + (n - B)
                                } else C = p[b] ? p[b] : 0, B = n - C, n = q - C, p[b] = C + (n - B);
                                b = t[h].color ? t[h].color : m._colorSet[h % m._colorSet.length];
                                ca(c, B, s, n, F, b, 0, null, x, !1, !1, !1, m.fillOpacity);
                                b = m.dataPointIds[h];
                                this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: k, dataPointIndex: h, x1: B, y1: s, x2: n, y2: F };
                                b = P(b);
                                u && ca(this._eventManager.ghostCtx, B, s, n, F, b, 0, null, !1, !1, !1, !1);
                                (t[h].indexLabel || m.indexLabel || t[h].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedBar", dataPoint: t[h], dataSeries: m, point: { x: 0 <= t[h].y ? n : B, y: r }, direction: 0 > t[h].y === a.axisY.reversed ? 1 : -1, bounds: { x1: Math.min(B, n), y1: s, x2: Math.max(B, n), y2: F }, color: b })
                            }
                    }
                }
                u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas &&
                    c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: L.xScaleAnimation, easingFunction: L.easing.easeOutQuart, animationBase: q < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : q > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : q }
            }
        };
        m.prototype.renderStackedBar100 = function(a) {
            var d =
                a.targetCanvasCtx || this.plotArea.ctx,
                c = u ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = null,
                    e = this.plotArea,
                    f = [],
                    p = [],
                    l = [],
                    A = [],
                    h = 0,
                    n, r, q = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                r = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.15 * this.height << 0;
                var g = a.axisX.dataInfo.minDiff;
                isFinite(g) ||
                    (g = 0.3 * Math.abs(a.axisX.range));
                g = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(g) / Math.log(a.axisX.range) : Math.abs(g) / Math.abs(a.axisX.range)) / a.plotType.plotUnits.length) << 0;
                this.dataPointMaxWidth && h > r && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, r));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && r < h) && (r = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
                g < h && (g = h);
                g > r && (g = r);
                c.save();
                u && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var w = 0; w < a.dataSeriesIndexes.length; w++) {
                    var k = a.dataSeriesIndexes[w],
                        m = this.data[k],
                        t = m.dataPoints;
                    if (0 < t.length) {
                        var s = 5 < g && m.bevelEnabled ? !0 : !1;
                        c.strokeStyle = "#4572A7 ";
                        for (h = 0; h < t.length; h++)
                            if (b = t[h].x.getTime ? t[h].x.getTime() : t[h].x, !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) &&
                                "number" === typeof t[h].y) {
                                r = a.axisX.convertValueToPixel(b);
                                var z;
                                z = 0 !== a.dataPointYSums[b] ? 100 * (t[h].y / a.dataPointYSums[b]) : 0;
                                var F = r - a.plotType.plotUnits.length * g / 2 + a.index * g << 0,
                                    B = F + g << 0;
                                if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < t[h].y) {
                                    l[b] = z + (l[b] ? l[b] : 0);
                                    if (0 >= l[b]) continue;
                                    z = f[b] ? f[b] : q;
                                    f[b] = n = a.axisY.convertValueToPixel(l[b])
                                } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= t[h].y) A[b] = z + (A[b] ? A[b] : 0), n = p[b] ? p[b] :
                                    q, p[b] = z = a.axisY.convertValueToPixel(A[b]);
                                else if (n = a.axisY.convertValueToPixel(z), 0 <= t[h].y) {
                                    var C = f[b] ? f[b] : 0;
                                    z = q + C;
                                    n += C;
                                    a.dataSeriesIndexes.length - 1 === w && 1 >= Math.abs(e.x2 - n) && (n = e.x2);
                                    f[b] = C + (n - z)
                                } else C = p[b] ? p[b] : 0, z = n - C, n = q - C, a.dataSeriesIndexes.length - 1 === w && 1 >= Math.abs(e.x1 - z) && (z = e.x1), p[b] = C + (n - z);
                                b = t[h].color ? t[h].color : m._colorSet[h % m._colorSet.length];
                                ca(c, z, F, n, B, b, 0, null, s, !1, !1, !1, m.fillOpacity);
                                b = m.dataPointIds[h];
                                this._eventManager.objectMap[b] = {
                                    id: b,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: k,
                                    dataPointIndex: h,
                                    x1: z,
                                    y1: F,
                                    x2: n,
                                    y2: B
                                };
                                b = P(b);
                                u && ca(this._eventManager.ghostCtx, z, F, n, B, b, 0, null, !1, !1, !1, !1);
                                (t[h].indexLabel || m.indexLabel || t[h].indexLabelFormatter || m.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedBar100", dataPoint: t[h], dataSeries: m, point: { x: 0 <= t[h].y ? n : z, y: r }, direction: 0 > t[h].y === a.axisY.reversed ? 1 : -1, bounds: { x1: Math.min(z, n), y1: F, x2: Math.max(z, n), y2: B }, color: b })
                            }
                    }
                }
                u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop",
                    a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xScaleAnimation,
                    easingFunction: L.easing.easeOutQuart,
                    animationBase: q < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : q > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : q
                }
            }
        };
        m.prototype.renderArea = function(a) {
            var d, c;

            function b() { B && (0 < g.lineThickness && f.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? F = z : 0 > a.axisY.viewportMaximum ? F = l.y1 : 0 < a.axisY.viewportMinimum && (F = z), f.lineTo(m, F), f.lineTo(B.x, F), f.closePath(), f.globalAlpha = g.fillOpacity, f.fill(), f.globalAlpha = 1, u && (p.lineTo(m, F), p.lineTo(B.x, F), p.closePath(), p.fill()), f.beginPath(), f.moveTo(m, t), p.beginPath(), p.moveTo(m, t), B = { x: m, y: t }) }
            var e = a.targetCanvasCtx || this.plotArea.ctx,
                f = u ? this._preRenderCtx : e;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var p = this._eventManager.ghostCtx,
                    l = a.axisY.lineCoordinates,
                    A = [],
                    h = this.plotArea,
                    n;
                f.save();
                u && p.save();
                f.beginPath();
                f.rect(h.x1, h.y1, h.width, h.height);
                f.clip();
                u && (p.beginPath(), p.rect(h.x1, h.y1, h.width, h.height), p.clip());
                for (var r = 0; r < a.dataSeriesIndexes.length; r++) {
                    var q = a.dataSeriesIndexes[r],
                        g = this.data[q],
                        w = g.dataPoints,
                        A = g.id;
                    this._eventManager.objectMap[A] = { objectType: "dataSeries", dataSeriesIndex: q };
                    A = P(A);
                    p.fillStyle = A;
                    A = [];
                    d = !0;
                    var k = 0,
                        m, t, s, z = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                        F, B = null;
                    if (0 < w.length) {
                        var C = g._colorSet[k % g._colorSet.length],
                            v = g.lineColor = g.options.lineColor || C,
                            y = v;
                        f.fillStyle = C;
                        f.strokeStyle = v;
                        f.lineWidth = g.lineThickness;
                        c = "solid";
                        if (f.setLineDash) {
                            var S = N(g.nullDataLineDashType, g.lineThickness);
                            c = g.lineDashType;
                            var R = N(c, g.lineThickness);
                            f.setLineDash(R)
                        }
                        for (var ja = !0; k < w.length; k++)
                            if (s = w[k].x.getTime ? w[k].x.getTime() : w[k].x, !(s < a.axisX.dataInfo.viewPortMin ||
                                    s > a.axisX.dataInfo.viewPortMax && (!g.connectNullData || !ja)))
                                if ("number" !== typeof w[k].y) g.connectNullData || (ja || d) || b(), ja = !0;
                                else {
                                    m = a.axisX.convertValueToPixel(s);
                                    t = a.axisY.convertValueToPixel(w[k].y);
                                    d || ja ? (!d && g.connectNullData ? (f.setLineDash && (g.options.nullDataLineDashType || c === g.lineDashType && g.lineDashType !== g.nullDataLineDashType) && (d = m, c = t, m = n.x, t = n.y, b(), f.moveTo(n.x, n.y), m = d, t = c, B = n, c = g.nullDataLineDashType, f.setLineDash(S)), f.lineTo(m, t), u && p.lineTo(m, t)) : (f.beginPath(), f.moveTo(m, t), u &&
                                        (p.beginPath(), p.moveTo(m, t)), B = { x: m, y: t }), ja = d = !1) : (f.lineTo(m, t), u && p.lineTo(m, t), 0 == k % 250 && b());
                                    n = { x: m, y: t };
                                    k < w.length - 1 && (y !== (w[k].lineColor || v) || c !== (w[k].lineDashType || g.lineDashType)) && (b(), y = w[k].lineColor || v, f.strokeStyle = y, f.setLineDash && (w[k].lineDashType ? (c = w[k].lineDashType, f.setLineDash(N(c, g.lineThickness))) : (c = g.lineDashType, f.setLineDash(R))));
                                    var Z = g.dataPointIds[k];
                                    this._eventManager.objectMap[Z] = { id: Z, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: k, x1: m, y1: t };
                                    0 !== w[k].markerSize &&
                                        (0 < w[k].markerSize || 0 < g.markerSize) && (s = g.getMarkerProperties(k, m, t, f), A.push(s), Z = P(Z), u && A.push({ x: m, y: t, ctx: p, type: s.type, size: s.size, color: Z, borderColor: Z, borderThickness: s.borderThickness }));
                                    (w[k].indexLabel || g.indexLabel || w[k].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({ chartType: "area", dataPoint: w[k], dataSeries: g, point: { x: m, y: t }, direction: 0 > w[k].y === a.axisY.reversed ? 1 : -1, color: C })
                                }
                        b();
                        X.drawMarkers(A)
                    }
                }
                u && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    f.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && f.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && f.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), f.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
                f.restore();
                return { source: e, dest: this.plotArea.ctx, animationCallback: L.xClipAnimation, easingFunction: L.easing.linear, animationBase: 0 }
            }
        };
        m.prototype.renderSplineArea = function(a) {
            function d() {
                var c = v(s, 2);
                if (0 < c.length) {
                    if (0 < n.lineThickness) {
                        b.beginPath();
                        b.moveTo(c[0].x, c[0].y);
                        c[0].newStrokeStyle && (b.strokeStyle = c[0].newStrokeStyle);
                        c[0].newLineDashArray && b.setLineDash(c[0].newLineDashArray);
                        for (var d = 0; d < c.length - 3; d += 3)
                            if (b.bezierCurveTo(c[d + 1].x, c[d + 1].y, c[d + 2].x, c[d + 2].y, c[d + 3].x, c[d + 3].y), u && e.bezierCurveTo(c[d + 1].x, c[d + 1].y, c[d + 2].x, c[d + 2].y, c[d + 3].x, c[d + 3].y), c[d + 3].newStrokeStyle || c[d + 3].newLineDashArray) b.stroke(), b.beginPath(),
                                b.moveTo(c[d + 3].x, c[d + 3].y), c[d + 3].newStrokeStyle && (b.strokeStyle = c[d + 3].newStrokeStyle), c[d + 3].newLineDashArray && b.setLineDash(c[d + 3].newLineDashArray);
                        b.stroke()
                    }
                    b.beginPath();
                    b.moveTo(c[0].x, c[0].y);
                    u && (e.beginPath(), e.moveTo(c[0].x, c[0].y));
                    for (d = 0; d < c.length - 3; d += 3) b.bezierCurveTo(c[d + 1].x, c[d + 1].y, c[d + 2].x, c[d + 2].y, c[d + 3].x, c[d + 3].y), u && e.bezierCurveTo(c[d + 1].x, c[d + 1].y, c[d + 2].x, c[d + 2].y, c[d + 3].x, c[d + 3].y);
                    a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? m = k : 0 > a.axisY.viewportMaximum ?
                        m = f.y1 : 0 < a.axisY.viewportMinimum && (m = k);
                    t = { x: c[0].x, y: c[0].y };
                    b.lineTo(c[c.length - 1].x, m);
                    b.lineTo(t.x, m);
                    b.closePath();
                    b.globalAlpha = n.fillOpacity;
                    b.fill();
                    b.globalAlpha = 1;
                    u && (e.lineTo(c[c.length - 1].x, m), e.lineTo(t.x, m), e.closePath(), e.fill())
                }
            }
            var c = a.targetCanvasCtx || this.plotArea.ctx,
                b = u ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx,
                    f = a.axisY.lineCoordinates,
                    p = [],
                    l = this.plotArea;
                b.save();
                u && e.save();
                b.beginPath();
                b.rect(l.x1, l.y1, l.width, l.height);
                b.clip();
                u && (e.beginPath(), e.rect(l.x1, l.y1, l.width, l.height), e.clip());
                for (var A = 0; A < a.dataSeriesIndexes.length; A++) {
                    var h = a.dataSeriesIndexes[A],
                        n = this.data[h],
                        r = n.dataPoints,
                        p = n.id;
                    this._eventManager.objectMap[p] = { objectType: "dataSeries", dataSeriesIndex: h };
                    p = P(p);
                    e.fillStyle = p;
                    var p = [],
                        q = 0,
                        g, w, k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                        m, t = null,
                        s = [];
                    if (0 < r.length) {
                        var z = n._colorSet[q % n._colorSet.length],
                            F = n.lineColor = n.options.lineColor || z,
                            B = F;
                        b.fillStyle = z;
                        b.strokeStyle =
                            F;
                        b.lineWidth = n.lineThickness;
                        var C = "solid";
                        if (b.setLineDash) {
                            var y = N(n.nullDataLineDashType, n.lineThickness),
                                C = n.lineDashType,
                                D = N(C, n.lineThickness);
                            b.setLineDash(D)
                        }
                        for (w = !1; q < r.length; q++)
                            if (g = r[q].x.getTime ? r[q].x.getTime() : r[q].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax && (!n.connectNullData || !w)))
                                if ("number" !== typeof r[q].y) 0 < q && !w && (n.connectNullData ? b.setLineDash && (0 < s.length && (n.options.nullDataLineDashType || !r[q - 1].lineDashType)) && (s[s.length - 1].newLineDashArray = y,
                                    C = n.nullDataLineDashType) : (d(), s = [])), w = !0;
                                else {
                                    g = a.axisX.convertValueToPixel(g);
                                    w = a.axisY.convertValueToPixel(r[q].y);
                                    var S = n.dataPointIds[q];
                                    this._eventManager.objectMap[S] = { id: S, objectType: "dataPoint", dataSeriesIndex: h, dataPointIndex: q, x1: g, y1: w };
                                    s[s.length] = { x: g, y: w };
                                    q < r.length - 1 && (B !== (r[q].lineColor || F) || C !== (r[q].lineDashType || n.lineDashType)) && (B = r[q].lineColor || F, s[s.length - 1].newStrokeStyle = B, b.setLineDash && (r[q].lineDashType ? (C = r[q].lineDashType, s[s.length - 1].newLineDashArray = N(C, n.lineThickness)) :
                                        (C = n.lineDashType, s[s.length - 1].newLineDashArray = D)));
                                    if (0 !== r[q].markerSize && (0 < r[q].markerSize || 0 < n.markerSize)) {
                                        var R = n.getMarkerProperties(q, g, w, b);
                                        p.push(R);
                                        S = P(S);
                                        u && p.push({ x: g, y: w, ctx: e, type: R.type, size: R.size, color: S, borderColor: S, borderThickness: R.borderThickness })
                                    }(r[q].indexLabel || n.indexLabel || r[q].indexLabelFormatter || n.indexLabelFormatter) && this._indexLabels.push({ chartType: "splineArea", dataPoint: r[q], dataSeries: n, point: { x: g, y: w }, direction: 0 > r[q].y === a.axisY.reversed ? 1 : -1, color: z });
                                    w = !1
                                }
                        d();
                        X.drawMarkers(p)
                    }
                }
                u && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(l.x1, l.y1, l.width, l.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return {
                    source: c,
                    dest: this.plotArea.ctx,
                    animationCallback: L.xClipAnimation,
                    easingFunction: L.easing.linear,
                    animationBase: 0
                }
            }
        };
        m.prototype.renderStepArea = function(a) {
            var d, c;

            function b() {
                B && (0 < g.lineThickness && f.stroke(), a.axisY.logarithmic || 0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum ? F = z : 0 > a.axisY.viewportMaximum ? F = l.y1 : 0 < a.axisY.viewportMinimum && (F = z), f.lineTo(m, F), f.lineTo(B.x, F), f.closePath(), f.globalAlpha = g.fillOpacity, f.fill(), f.globalAlpha = 1, u && (p.lineTo(m, F), p.lineTo(B.x, F), p.closePath(), p.fill()),
                    f.beginPath(), f.moveTo(m, t), p.beginPath(), p.moveTo(m, t), B = { x: m, y: t })
            }
            var e = a.targetCanvasCtx || this.plotArea.ctx,
                f = u ? this._preRenderCtx : e;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var p = this._eventManager.ghostCtx,
                    l = a.axisY.lineCoordinates,
                    A = [],
                    h = this.plotArea,
                    n;
                f.save();
                u && p.save();
                f.beginPath();
                f.rect(h.x1, h.y1, h.width, h.height);
                f.clip();
                u && (p.beginPath(), p.rect(h.x1, h.y1, h.width, h.height), p.clip());
                for (var r = 0; r < a.dataSeriesIndexes.length; r++) {
                    var q = a.dataSeriesIndexes[r],
                        g = this.data[q],
                        w = g.dataPoints,
                        A = g.id;
                    this._eventManager.objectMap[A] = { objectType: "dataSeries", dataSeriesIndex: q };
                    A = P(A);
                    p.fillStyle = A;
                    A = [];
                    d = !0;
                    var k = 0,
                        m, t, s, z = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                        F, B = null;
                    c = !1;
                    if (0 < w.length) {
                        var C = g._colorSet[k % g._colorSet.length],
                            v = g.lineColor = g.options.lineColor || C,
                            y = v;
                        f.fillStyle = C;
                        f.strokeStyle = v;
                        f.lineWidth = g.lineThickness;
                        var S = "solid";
                        if (f.setLineDash) {
                            var R = N(g.nullDataLineDashType, g.lineThickness),
                                S = g.lineDashType,
                                D = N(S, g.lineThickness);
                            f.setLineDash(D)
                        }
                        for (; k <
                            w.length; k++)
                            if (s = w[k].x.getTime ? w[k].x.getTime() : w[k].x, !(s < a.axisX.dataInfo.viewPortMin || s > a.axisX.dataInfo.viewPortMax && (!g.connectNullData || !c))) {
                                var Z = t;
                                "number" !== typeof w[k].y ? (g.connectNullData || (c || d) || b(), c = !0) : (m = a.axisX.convertValueToPixel(s), t = a.axisY.convertValueToPixel(w[k].y), d || c ? (!d && g.connectNullData ? (f.setLineDash && (g.options.nullDataLineDashType || S === g.lineDashType && g.lineDashType !== g.nullDataLineDashType) && (d = m, c = t, m = n.x, t = n.y, b(), f.moveTo(n.x, n.y), m = d, t = c, B = n, S = g.nullDataLineDashType,
                                        f.setLineDash(R)), f.lineTo(m, Z), f.lineTo(m, t), u && (p.lineTo(m, Z), p.lineTo(m, t))) : (f.beginPath(), f.moveTo(m, t), u && (p.beginPath(), p.moveTo(m, t)), B = { x: m, y: t }), c = d = !1) : (f.lineTo(m, Z), u && p.lineTo(m, Z), f.lineTo(m, t), u && p.lineTo(m, t), 0 == k % 250 && b()), n = { x: m, y: t }, k < w.length - 1 && (y !== (w[k].lineColor || v) || S !== (w[k].lineDashType || g.lineDashType)) && (b(), y = w[k].lineColor || v, f.strokeStyle = y, f.setLineDash && (w[k].lineDashType ? (S = w[k].lineDashType, f.setLineDash(N(S, g.lineThickness))) : (S = g.lineDashType, f.setLineDash(D)))),
                                    s = g.dataPointIds[k], this._eventManager.objectMap[s] = { id: s, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: k, x1: m, y1: t }, 0 !== w[k].markerSize && (0 < w[k].markerSize || 0 < g.markerSize) && (Z = g.getMarkerProperties(k, m, t, f), A.push(Z), s = P(s), u && A.push({ x: m, y: t, ctx: p, type: Z.type, size: Z.size, color: s, borderColor: s, borderThickness: Z.borderThickness })), (w[k].indexLabel || g.indexLabel || w[k].indexLabelFormatter || g.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "stepArea",
                                        dataPoint: w[k],
                                        dataSeries: g,
                                        point: {
                                            x: m,
                                            y: t
                                        },
                                        direction: 0 > w[k].y === a.axisY.reversed ? 1 : -1,
                                        color: C
                                    }))
                            }
                        b();
                        X.drawMarkers(A)
                    }
                }
                u && (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), f.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && f.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && f.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), f.clearRect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.restore());
                f.restore();
                return { source: e, dest: this.plotArea.ctx, animationCallback: L.xClipAnimation, easingFunction: L.easing.linear, animationBase: 0 }
            }
        };
        m.prototype.renderStackedArea = function(a) {
            function d() {
                if (!(1 > h.length)) {
                    for (0 < C.lineThickness && b.stroke(); 0 < h.length;) {
                        var a = h.pop();
                        b.lineTo(a.x, a.y);
                        u && s.lineTo(a.x, a.y)
                    }
                    b.closePath();
                    b.globalAlpha = C.fillOpacity;
                    b.fill();
                    b.globalAlpha = 1;
                    b.beginPath();
                    u && (s.closePath(), s.fill(), s.beginPath());
                    h = []
                }
            }
            var c = a.targetCanvasCtx || this.plotArea.ctx,
                b = u ? this._preRenderCtx :
                c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    f = null,
                    p = [],
                    l = this.plotArea,
                    A = [],
                    h = [],
                    n = [],
                    r = [],
                    q = 0,
                    g, k, m = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    s = this._eventManager.ghostCtx,
                    t, x, z;
                u && s.beginPath();
                b.save();
                u && s.save();
                b.beginPath();
                b.rect(l.x1, l.y1, l.width, l.height);
                b.clip();
                u && (s.beginPath(), s.rect(l.x1, l.y1, l.width, l.height), s.clip());
                for (var e = [], F = 0; F < a.dataSeriesIndexes.length; F++) {
                    var B = a.dataSeriesIndexes[F],
                        C = this.data[B],
                        v = C.dataPoints;
                    C.dataPointIndexes = [];
                    for (q = 0; q < v.length; q++) B = v[q].x.getTime ? v[q].x.getTime() : v[q].x, C.dataPointIndexes[B] = q, e[B] || (n.push(B), e[B] = !0);
                    n.sort(Oa)
                }
                for (F = 0; F < a.dataSeriesIndexes.length; F++) {
                    B = a.dataSeriesIndexes[F];
                    C = this.data[B];
                    v = C.dataPoints;
                    x = !0;
                    h = [];
                    q = C.id;
                    this._eventManager.objectMap[q] = { objectType: "dataSeries", dataSeriesIndex: B };
                    q = P(q);
                    s.fillStyle = q;
                    if (0 < n.length) {
                        var e = C._colorSet[0],
                            y = C.lineColor = C.options.lineColor || e,
                            S = y;
                        b.fillStyle = e;
                        b.strokeStyle = y;
                        b.lineWidth = C.lineThickness;
                        z = "solid";
                        if (b.setLineDash) {
                            var R =
                                N(C.nullDataLineDashType, C.lineThickness);
                            z = C.lineDashType;
                            var D = N(z, C.lineThickness);
                            b.setLineDash(D)
                        }
                        for (var Z = !0, q = 0; q < n.length; q++) {
                            var f = n[q],
                                fa = null,
                                fa = 0 <= C.dataPointIndexes[f] ? v[C.dataPointIndexes[f]] : { x: f, y: null };
                            if (!(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax && (!C.connectNullData || !Z)))
                                if ("number" !== typeof fa.y) C.connectNullData || (Z || x) || d(), Z = !0;
                                else {
                                    g = a.axisX.convertValueToPixel(f);
                                    var ma = A[f] ? A[f] : 0;
                                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                                        r[f] =
                                            fa.y + (r[f] ? r[f] : 0);
                                        if (0 >= r[f] && a.axisY.logarithmic) continue;
                                        k = a.axisY.convertValueToPixel(r[f])
                                    } else k = a.axisY.convertValueToPixel(fa.y), k -= ma;
                                    h.push({ x: g, y: m - ma });
                                    A[f] = m - k;
                                    x || Z ? (!x && C.connectNullData ? (b.setLineDash && (C.options.nullDataLineDashType || z === C.lineDashType && C.lineDashType !== C.nullDataLineDashType) && (x = h.pop(), z = h[h.length - 1], d(), b.moveTo(t.x, t.y), h.push(z), h.push(x), z = C.nullDataLineDashType, b.setLineDash(R)), b.lineTo(g, k), u && s.lineTo(g, k)) : (b.beginPath(), b.moveTo(g, k), u && (s.beginPath(),
                                        s.moveTo(g, k))), Z = x = !1) : (b.lineTo(g, k), u && s.lineTo(g, k), 0 == q % 250 && (d(), b.moveTo(g, k), u && s.moveTo(g, k), h.push({ x: g, y: m - ma })));
                                    t = { x: g, y: k };
                                    q < v.length - 1 && (S !== (v[q].lineColor || y) || z !== (v[q].lineDashType || C.lineDashType)) && (d(), b.beginPath(), b.moveTo(g, k), h.push({ x: g, y: m - ma }), S = v[q].lineColor || y, b.strokeStyle = S, b.setLineDash && (v[q].lineDashType ? (z = v[q].lineDashType, b.setLineDash(N(z, C.lineThickness))) : (z = C.lineDashType, b.setLineDash(D))));
                                    if (0 <= C.dataPointIndexes[f]) {
                                        var E = C.dataPointIds[C.dataPointIndexes[f]];
                                        this._eventManager.objectMap[E] = { id: E, objectType: "dataPoint", dataSeriesIndex: B, dataPointIndex: C.dataPointIndexes[f], x1: g, y1: k }
                                    }
                                    0 <= C.dataPointIndexes[f] && 0 !== fa.markerSize && (0 < fa.markerSize || 0 < C.markerSize) && (ma = C.getMarkerProperties(C.dataPointIndexes[f], g, k, b), p.push(ma), f = P(E), u && p.push({ x: g, y: k, ctx: s, type: ma.type, size: ma.size, color: f, borderColor: f, borderThickness: ma.borderThickness }));
                                    (fa.indexLabel || C.indexLabel || fa.indexLabelFormatter || C.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: "stackedArea",
                                        dataPoint: fa,
                                        dataSeries: C,
                                        point: { x: g, y: k },
                                        direction: 0 > v[q].y === a.axisY.reversed ? 1 : -1,
                                        color: e
                                    })
                                }
                        }
                        d();
                        b.moveTo(g, k);
                        u && s.moveTo(g, k)
                    }
                    delete C.dataPointIndexes
                }
                X.drawMarkers(p);
                u && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas,
                    0, 0, this.width, this.height), b.clearRect(l.x1, l.y1, l.width, l.height), s.restore());
                b.restore();
                return { source: c, dest: this.plotArea.ctx, animationCallback: L.xClipAnimation, easingFunction: L.easing.linear, animationBase: 0 }
            }
        };
        m.prototype.renderStackedArea100 = function(a) {
            function d() {
                for (0 < C.lineThickness && b.stroke(); 0 < h.length;) {
                    var a = h.pop();
                    b.lineTo(a.x, a.y);
                    u && z.lineTo(a.x, a.y)
                }
                b.closePath();
                b.globalAlpha = C.fillOpacity;
                b.fill();
                b.globalAlpha = 1;
                b.beginPath();
                u && (z.closePath(), z.fill(), z.beginPath());
                h = []
            }
            var c = a.targetCanvasCtx || this.plotArea.ctx,
                b = u ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    f = null,
                    p = this.plotArea,
                    l = [],
                    k = [],
                    h = [],
                    n = [],
                    r = [],
                    q = 0,
                    g, w, m, s, t, x = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    z = this._eventManager.ghostCtx;
                b.save();
                u && z.save();
                b.beginPath();
                b.rect(p.x1, p.y1, p.width, p.height);
                b.clip();
                u && (z.beginPath(), z.rect(p.x1, p.y1, p.width, p.height), z.clip());
                for (var e = [], v = 0; v < a.dataSeriesIndexes.length; v++) {
                    var B = a.dataSeriesIndexes[v],
                        C = this.data[B],
                        y = C.dataPoints;
                    C.dataPointIndexes = [];
                    for (q = 0; q < y.length; q++) B = y[q].x.getTime ? y[q].x.getTime() : y[q].x, C.dataPointIndexes[B] = q, e[B] || (n.push(B), e[B] = !0);
                    n.sort(Oa)
                }
                for (v = 0; v < a.dataSeriesIndexes.length; v++) {
                    B = a.dataSeriesIndexes[v];
                    C = this.data[B];
                    y = C.dataPoints;
                    s = !0;
                    e = C.id;
                    this._eventManager.objectMap[e] = { objectType: "dataSeries", dataSeriesIndex: B };
                    e = P(e);
                    z.fillStyle = e;
                    h = [];
                    if (0 < n.length) {
                        var e = C._colorSet[q % C._colorSet.length],
                            D = C.lineColor = C.options.lineColor || e,
                            S = D;
                        b.fillStyle = e;
                        b.strokeStyle =
                            D;
                        b.lineWidth = C.lineThickness;
                        t = "solid";
                        if (b.setLineDash) {
                            var R = N(C.nullDataLineDashType, C.lineThickness);
                            t = C.lineDashType;
                            var E = N(t, C.lineThickness);
                            b.setLineDash(E)
                        }
                        for (var Z = !0, q = 0; q < n.length; q++) {
                            var f = n[q],
                                fa = null,
                                fa = 0 <= C.dataPointIndexes[f] ? y[C.dataPointIndexes[f]] : { x: f, y: null };
                            if (!(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax && (!C.connectNullData || !Z)))
                                if ("number" !== typeof fa.y) C.connectNullData || (Z || s) || d(), Z = !0;
                                else {
                                    var ma;
                                    ma = 0 !== a.dataPointYSums[f] ? 100 * (fa.y / a.dataPointYSums[f]) :
                                        0;
                                    g = a.axisX.convertValueToPixel(f);
                                    var ba = k[f] ? k[f] : 0;
                                    if (a.axisY.logarithmic || a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length) {
                                        r[f] = ma + (r[f] ? r[f] : 0);
                                        if (0 >= r[f] && a.axisY.logarithmic) continue;
                                        w = a.axisY.convertValueToPixel(r[f])
                                    } else w = a.axisY.convertValueToPixel(ma), w -= ba;
                                    h.push({ x: g, y: x - ba });
                                    k[f] = x - w;
                                    s || Z ? (!s && C.connectNullData ? (b.setLineDash && (C.options.nullDataLineDashType || t === C.lineDashType && C.lineDashType !== C.nullDataLineDashType) && (s = h.pop(), t = h[h.length - 1], d(), b.moveTo(m.x,
                                        m.y), h.push(t), h.push(s), t = C.nullDataLineDashType, b.setLineDash(R)), b.lineTo(g, w), u && z.lineTo(g, w)) : (b.beginPath(), b.moveTo(g, w), u && (z.beginPath(), z.moveTo(g, w))), Z = s = !1) : (b.lineTo(g, w), u && z.lineTo(g, w), 0 == q % 250 && (d(), b.moveTo(g, w), u && z.moveTo(g, w), h.push({ x: g, y: x - ba })));
                                    m = { x: g, y: w };
                                    q < y.length - 1 && (S !== (y[q].lineColor || D) || t !== (y[q].lineDashType || C.lineDashType)) && (d(), b.beginPath(), b.moveTo(g, w), h.push({ x: g, y: x - ba }), S = y[q].lineColor || D, b.strokeStyle = S, b.setLineDash && (y[q].lineDashType ? (t = y[q].lineDashType,
                                        b.setLineDash(N(t, C.lineThickness))) : (t = C.lineDashType, b.setLineDash(E))));
                                    if (0 <= C.dataPointIndexes[f]) {
                                        var G = C.dataPointIds[C.dataPointIndexes[f]];
                                        this._eventManager.objectMap[G] = { id: G, objectType: "dataPoint", dataSeriesIndex: B, dataPointIndex: C.dataPointIndexes[f], x1: g, y1: w }
                                    }
                                    0 <= C.dataPointIndexes[f] && 0 !== fa.markerSize && (0 < fa.markerSize || 0 < C.markerSize) && (ba = C.getMarkerProperties(q, g, w, b), l.push(ba), f = P(G), u && l.push({ x: g, y: w, ctx: z, type: ba.type, size: ba.size, color: f, borderColor: f, borderThickness: ba.borderThickness }));
                                    (fa.indexLabel || C.indexLabel || fa.indexLabelFormatter || C.indexLabelFormatter) && this._indexLabels.push({ chartType: "stackedArea100", dataPoint: fa, dataSeries: C, point: { x: g, y: w }, direction: 0 > y[q].y === a.axisY.reversed ? 1 : -1, color: e })
                                }
                        }
                        d();
                        b.moveTo(g, w);
                        u && z.moveTo(g, w)
                    }
                    delete C.dataPointIndexes
                }
                X.drawMarkers(l);
                u && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas &&
                    b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(p.x1, p.y1, p.width, p.height), z.restore());
                b.restore();
                return { source: c, dest: this.plotArea.ctx, animationCallback: L.xClipAnimation, easingFunction: L.easing.linear, animationBase: 0 }
            }
        };
        m.prototype.renderBubble = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = u ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b =
                    this.plotArea,
                    e = 0,
                    f, p;
                c.save();
                u && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(b.x1, b.y1, b.width, b.height);
                c.clip();
                u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
                for (var l = -Infinity, k = Infinity, h = 0; h < a.dataSeriesIndexes.length; h++)
                    for (var n = a.dataSeriesIndexes[h], r = this.data[n], q = r.dataPoints, g = 0, e = 0; e < q.length; e++) f = q[e].getTime ? f = q[e].x.getTime() : f = q[e].x, f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax ||
                        "undefined" === typeof q[e].z || (g = q[e].z, g > l && (l = g), g < k && (k = g));
                for (var w = 25 * Math.PI, m = Math.max(Math.pow(0.25 * Math.min(b.height, b.width) / 2, 2) * Math.PI, w), h = 0; h < a.dataSeriesIndexes.length; h++)
                    if (n = a.dataSeriesIndexes[h], r = this.data[n], q = r.dataPoints, 0 < q.length)
                        for (c.strokeStyle = "#4572A7 ", e = 0; e < q.length; e++)
                            if (f = q[e].getTime ? f = q[e].x.getTime() : f = q[e].x, !(f < a.axisX.dataInfo.viewPortMin || f > a.axisX.dataInfo.viewPortMax) && "number" === typeof q[e].y) {
                                f = a.axisX.convertValueToPixel(f);
                                p = a.axisY.convertValueToPixel(q[e].y);
                                var g = q[e].z,
                                    s = 2 * Math.max(Math.sqrt((l === k ? m / 2 : w + (m - w) / (l - k) * (g - k)) / Math.PI) << 0, 1),
                                    g = r.getMarkerProperties(e, c);
                                g.size = s;
                                c.globalAlpha = r.fillOpacity;
                                X.drawMarker(f, p, c, g.type, g.size, g.color, g.borderColor, g.borderThickness);
                                c.globalAlpha = 1;
                                var t = r.dataPointIds[e];
                                this._eventManager.objectMap[t] = { id: t, objectType: "dataPoint", dataSeriesIndex: n, dataPointIndex: e, x1: f, y1: p, size: s };
                                s = P(t);
                                u && X.drawMarker(f, p, this._eventManager.ghostCtx, g.type, g.size, s, s, g.borderThickness);
                                (q[e].indexLabel || r.indexLabel ||
                                    q[e].indexLabelFormatter || r.indexLabelFormatter) && this._indexLabels.push({ chartType: "bubble", dataPoint: q[e], dataSeries: r, point: { x: f, y: p }, direction: 1, bounds: { x1: f - g.size / 2, y1: p - g.size / 2, x2: f + g.size / 2, y2: p + g.size / 2 }, color: null })
                            }
                u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx &&
                    this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: L.fadeInAnimation, easingFunction: L.easing.easeInQuad, animationBase: 0 }
            }
        };
        m.prototype.renderScatter = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = u ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = this.plotArea,
                    e = 0,
                    f, p;
                c.save();
                u && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(b.x1, b.y1, b.width, b.height);
                c.clip();
                u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
                for (var l = 0; l < a.dataSeriesIndexes.length; l++) {
                    var k = a.dataSeriesIndexes[l],
                        h = this.data[k],
                        n = h.dataPoints;
                    if (0 < n.length) {
                        c.strokeStyle = "#4572A7 ";
                        Math.pow(0.3 * Math.min(b.height, b.width) / 2, 2);
                        for (var r = 0, q = 0, e = 0; e < n.length; e++)
                            if (f = n[e].getTime ? f = n[e].x.getTime() : f = n[e].x, !(f < a.axisX.dataInfo.viewPortMin ||
                                    f > a.axisX.dataInfo.viewPortMax) && "number" === typeof n[e].y) {
                                f = a.axisX.convertValueToPixel(f);
                                p = a.axisY.convertValueToPixel(n[e].y);
                                var g = h.getMarkerProperties(e, f, p, c);
                                c.globalAlpha = h.fillOpacity;
                                X.drawMarker(g.x, g.y, g.ctx, g.type, g.size, g.color, g.borderColor, g.borderThickness);
                                c.globalAlpha = 1;
                                Math.sqrt((r - f) * (r - f) + (q - p) * (q - p)) < Math.min(g.size, 5) && n.length > Math.min(this.plotArea.width, this.plotArea.height) || (r = h.dataPointIds[e], this._eventManager.objectMap[r] = {
                                    id: r,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: k,
                                    dataPointIndex: e,
                                    x1: f,
                                    y1: p
                                }, r = P(r), u && X.drawMarker(g.x, g.y, this._eventManager.ghostCtx, g.type, g.size, r, r, g.borderThickness), (n[e].indexLabel || h.indexLabel || n[e].indexLabelFormatter || h.indexLabelFormatter) && this._indexLabels.push({ chartType: "scatter", dataPoint: n[e], dataSeries: h, point: { x: f, y: p }, direction: 1, bounds: { x1: f - g.size / 2, y1: p - g.size / 2, x2: f + g.size / 2, y2: p + g.size / 2 }, color: null }), r = f, q = p)
                            }
                    }
                }
                u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop",
                    a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: L.fadeInAnimation, easingFunction: L.easing.easeInQuad, animationBase: 0 }
            }
        };
        m.prototype.renderCandlestick =
            function(a) {
                var d = a.targetCanvasCtx || this.plotArea.ctx,
                    c = u ? this._preRenderCtx : d,
                    b = this._eventManager.ghostCtx;
                if (!(0 >= a.dataSeriesIndexes.length)) {
                    var e = null,
                        f = null,
                        p = this.plotArea,
                        l = 0,
                        k, h, n, r, q, g, e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                        f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width,
                        w = a.axisX.dataInfo.minDiff;
                    isFinite(w) || (w = 0.3 * Math.abs(a.axisX.range));
                    w = this.options.dataPointWidth ?
                        this.dataPointWidth : 0.7 * p.width * (a.axisX.logarithmic ? Math.log(w) / Math.log(a.axisX.range) : Math.abs(w) / Math.abs(a.axisX.range)) << 0;
                    this.dataPointMaxWidth && e > f && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
                    !this.dataPointMaxWidth && (this.dataPointMinWidth && f < e) && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
                    w < e && (w = e);
                    w > f && (w = f);
                    c.save();
                    u && b.save();
                    c.beginPath();
                    c.rect(p.x1, p.y1, p.width, p.height);
                    c.clip();
                    u && (b.beginPath(), b.rect(p.x1, p.y1, p.width,
                        p.height), b.clip());
                    for (var m = 0; m < a.dataSeriesIndexes.length; m++) {
                        var v = a.dataSeriesIndexes[m],
                            t = this.data[v],
                            x = t.dataPoints;
                        if (0 < x.length)
                            for (var z = 5 < w && t.bevelEnabled ? !0 : !1, l = 0; l < x.length; l++)
                                if (x[l].getTime ? g = x[l].x.getTime() : g = x[l].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) && !s(x[l].y) && x[l].y.length && "number" === typeof x[l].y[0] && "number" === typeof x[l].y[1] && "number" === typeof x[l].y[2] && "number" === typeof x[l].y[3]) {
                                    k = a.axisX.convertValueToPixel(g);
                                    h = a.axisY.convertValueToPixel(x[l].y[0]);
                                    n = a.axisY.convertValueToPixel(x[l].y[1]);
                                    r = a.axisY.convertValueToPixel(x[l].y[2]);
                                    q = a.axisY.convertValueToPixel(x[l].y[3]);
                                    var F = k - w / 2 << 0,
                                        B = F + w << 0,
                                        f = t.options.fallingColor ? t.fallingColor : t._colorSet[0],
                                        e = x[l].color ? x[l].color : t._colorSet[0],
                                        C = Math.round(Math.max(1, 0.15 * w)),
                                        y = 0 === C % 2 ? 0 : 0.5,
                                        D = t.dataPointIds[l];
                                    this._eventManager.objectMap[D] = { id: D, objectType: "dataPoint", dataSeriesIndex: v, dataPointIndex: l, x1: F, y1: h, x2: B, y2: n, x3: k, y3: r, x4: k, y4: q, borderThickness: C, color: e };
                                    c.strokeStyle = e;
                                    c.beginPath();
                                    c.lineWidth = C;
                                    b.lineWidth = Math.max(C, 4);
                                    "candlestick" === t.type ? (c.moveTo(k - y, n), c.lineTo(k - y, Math.min(h, q)), c.stroke(), c.moveTo(k - y, Math.max(h, q)), c.lineTo(k - y, r), c.stroke(), ca(c, F, Math.min(h, q), B, Math.max(h, q), x[l].y[0] <= x[l].y[3] ? t.risingColor : f, C, e, z, z, !1, !1, t.fillOpacity), u && (e = P(D), b.strokeStyle = e, b.moveTo(k - y, n), b.lineTo(k - y, Math.min(h, q)), b.stroke(), b.moveTo(k - y, Math.max(h, q)), b.lineTo(k - y, r), b.stroke(), ca(b, F, Math.min(h, q), B, Math.max(h, q), e, 0, null, !1, !1, !1, !1))) : "ohlc" === t.type && (c.moveTo(k -
                                        y, n), c.lineTo(k - y, r), c.stroke(), c.beginPath(), c.moveTo(k, h), c.lineTo(F, h), c.stroke(), c.beginPath(), c.moveTo(k, q), c.lineTo(B, q), c.stroke(), u && (e = P(D), b.strokeStyle = e, b.moveTo(k - y, n), b.lineTo(k - y, r), b.stroke(), b.beginPath(), b.moveTo(k, h), b.lineTo(F, h), b.stroke(), b.beginPath(), b.moveTo(k, q), b.lineTo(B, q), b.stroke()));
                                    (x[l].indexLabel || t.indexLabel || x[l].indexLabelFormatter || t.indexLabelFormatter) && this._indexLabels.push({
                                        chartType: t.type,
                                        dataPoint: x[l],
                                        dataSeries: t,
                                        point: {
                                            x: F + (B - F) / 2,
                                            y: a.axisY.reversed ?
                                                r : n
                                        },
                                        direction: 1,
                                        bounds: { x1: F, y1: Math.min(n, r), x2: B, y2: Math.max(n, r) },
                                        color: e
                                    })
                                }
                    }
                    u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(p.x1, p.y1, p.width, p.height), b.restore());
                    c.restore();
                    return { source: d, dest: this.plotArea.ctx, animationCallback: L.fadeInAnimation, easingFunction: L.easing.easeInQuad, animationBase: 0 }
                }
            };
        m.prototype.renderBoxAndWhisker = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = u ? this._preRenderCtx : d,
                b = this._eventManager.ghostCtx;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    f = this.plotArea,
                    p = 0,
                    l, k, h, n, r, q, g, e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                    p = this.options.dataPointMaxWidth ?
                    this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width,
                    w = a.axisX.dataInfo.minDiff;
                isFinite(w) || (w = 0.3 * Math.abs(a.axisX.range));
                w = this.options.dataPointWidth ? this.dataPointWidth : 0.7 * f.width * (a.axisX.logarithmic ? Math.log(w) / Math.log(a.axisX.range) : Math.abs(w) / Math.abs(a.axisX.range)) << 0;
                this.dataPointMaxWidth && e > p && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, p));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && p < e) && (p = Math.max(this.options.dataPointWidth ?
                    this.dataPointWidth : -Infinity, e));
                w < e && (w = e);
                w > p && (w = p);
                c.save();
                u && b.save();
                c.beginPath();
                c.rect(f.x1, f.y1, f.width, f.height);
                c.clip();
                u && (b.beginPath(), b.rect(f.x1, f.y1, f.width, f.height), b.clip());
                for (var m = !1, m = !!a.axisY.reversed, v = 0; v < a.dataSeriesIndexes.length; v++) {
                    var t = a.dataSeriesIndexes[v],
                        x = this.data[t],
                        z = x.dataPoints;
                    if (0 < z.length)
                        for (var F = 5 < w && x.bevelEnabled ? !0 : !1, p = 0; p < z.length; p++)
                            if (z[p].getTime ? g = z[p].x.getTime() : g = z[p].x, !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) &&
                                !s(z[p].y) && z[p].y.length && "number" === typeof z[p].y[0] && "number" === typeof z[p].y[1] && "number" === typeof z[p].y[2] && "number" === typeof z[p].y[3] && "number" === typeof z[p].y[4] && 5 === z[p].y.length) {
                                l = a.axisX.convertValueToPixel(g);
                                k = a.axisY.convertValueToPixel(z[p].y[0]);
                                h = a.axisY.convertValueToPixel(z[p].y[1]);
                                n = a.axisY.convertValueToPixel(z[p].y[2]);
                                r = a.axisY.convertValueToPixel(z[p].y[3]);
                                q = a.axisY.convertValueToPixel(z[p].y[4]);
                                var B = l - w / 2 << 0,
                                    C = l + w / 2 << 0,
                                    e = z[p].color ? z[p].color : x._colorSet[0],
                                    y = Math.round(Math.max(1,
                                        0.15 * w)),
                                    D = 0 === y % 2 ? 0 : 0.5,
                                    S = z[p].whiskerColor ? z[p].whiskerColor : z[p].color ? x.whiskerColor ? x.whiskerColor : z[p].color : x.whiskerColor ? x.whiskerColor : e,
                                    R = "number" === typeof z[p].whiskerThickness ? z[p].whiskerThickness : "number" === typeof x.options.whiskerThickness ? x.whiskerThickness : y,
                                    E = z[p].whiskerDashType ? z[p].whiskerDashType : x.whiskerDashType,
                                    Z = s(z[p].whiskerLength) ? s(x.options.whiskerLength) ? w : x.whiskerLength : z[p].whiskerLength,
                                    Z = "number" === typeof Z ? 0 >= Z ? 0 : Z >= w ? w : Z : "string" === typeof Z ? parseInt(Z) * w / 100 >
                                    w ? w : parseInt(Z) * w / 100 : w,
                                    fa = 1 === Math.round(R) % 2 ? 0.5 : 0,
                                    ma = z[p].stemColor ? z[p].stemColor : z[p].color ? x.stemColor ? x.stemColor : z[p].color : x.stemColor ? x.stemColor : e,
                                    ba = "number" === typeof z[p].stemThickness ? z[p].stemThickness : "number" === typeof x.options.stemThickness ? x.stemThickness : y,
                                    G = 1 === Math.round(ba) % 2 ? 0.5 : 0,
                                    J = z[p].stemDashType ? z[p].stemDashType : x.stemDashType,
                                    I = z[p].lineColor ? z[p].lineColor : z[p].color ? x.lineColor ? x.lineColor : z[p].color : x.lineColor ? x.lineColor : e,
                                    M = "number" === typeof z[p].lineThickness ?
                                    z[p].lineThickness : "number" === typeof x.options.lineThickness ? x.lineThickness : y,
                                    Q = z[p].lineDashType ? z[p].lineDashType : x.lineDashType,
                                    K = 1 === Math.round(M) % 2 ? 0.5 : 0,
                                    V = x.upperBoxColor,
                                    wa = x.lowerBoxColor,
                                    ra = s(x.options.fillOpacity) ? 1 : x.fillOpacity,
                                    O = x.dataPointIds[p];
                                this._eventManager.objectMap[O] = {
                                    id: O,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: t,
                                    dataPointIndex: p,
                                    x1: B,
                                    y1: k,
                                    x2: C,
                                    y2: h,
                                    x3: l,
                                    y3: n,
                                    x4: l,
                                    y4: r,
                                    y5: q,
                                    borderThickness: y,
                                    color: e,
                                    stemThickness: ba,
                                    stemColor: ma,
                                    whiskerThickness: R,
                                    whiskerLength: Z,
                                    whiskerColor: S,
                                    lineThickness: M,
                                    lineColor: I
                                };
                                c.save();
                                0 < ba && (c.beginPath(), c.strokeStyle = ma, c.lineWidth = ba, c.setLineDash && c.setLineDash(N(J, ba)), c.moveTo(l - G, h), c.lineTo(l - G, k), c.stroke(), c.moveTo(l - G, r), c.lineTo(l - G, n), c.stroke());
                                c.restore();
                                b.lineWidth = Math.max(y, 4);
                                c.beginPath();
                                ca(c, B, Math.min(q, h), C, Math.max(h, q), wa, 0, e, m ? F : !1, m ? !1 : F, !1, !1, ra);
                                c.beginPath();
                                ca(c, B, Math.min(n, q), C, Math.max(q, n), V, 0, e, m ? !1 : F, m ? F : !1, !1, !1, ra);
                                c.beginPath();
                                c.lineWidth = y;
                                c.strokeStyle = e;
                                c.rect(B - D, Math.min(h, n) - D, C - B + 2 * D, Math.max(h,
                                    n) - Math.min(h, n) + 2 * D);
                                c.stroke();
                                c.save();
                                0 < M && (c.beginPath(), c.globalAlpha = 1, c.setLineDash && c.setLineDash(N(Q, M)), c.strokeStyle = I, c.lineWidth = M, c.moveTo(B, q - K), c.lineTo(C, q - K), c.stroke());
                                c.restore();
                                c.save();
                                0 < R && (c.beginPath(), c.setLineDash && c.setLineDash(N(E, R)), c.strokeStyle = S, c.lineWidth = R, c.moveTo(l - Z / 2 << 0, r - fa), c.lineTo(l + Z / 2 << 0, r - fa), c.stroke(), c.moveTo(l - Z / 2 << 0, k + fa), c.lineTo(l + Z / 2 << 0, k + fa), c.stroke());
                                c.restore();
                                u && (e = P(O), b.strokeStyle = e, b.lineWidth = ba, 0 < ba && (b.moveTo(l - D - G, h), b.lineTo(l -
                                    D - G, Math.max(k, r)), b.stroke(), b.moveTo(l - D - G, Math.min(k, r)), b.lineTo(l - D - G, n), b.stroke()), ca(b, B, Math.max(h, n), C, Math.min(h, n), e, 0, null, !1, !1, !1, !1), 0 < R && (b.beginPath(), b.lineWidth = R, b.moveTo(l + Z / 2, r - fa), b.lineTo(l - Z / 2, r - fa), b.stroke(), b.moveTo(l + Z / 2, k + fa), b.lineTo(l - Z / 2, k + fa), b.stroke()));
                                (z[p].indexLabel || x.indexLabel || z[p].indexLabelFormatter || x.indexLabelFormatter) && this._indexLabels.push({
                                    chartType: x.type,
                                    dataPoint: z[p],
                                    dataSeries: x,
                                    point: { x: B + (C - B) / 2, y: a.axisY.reversed ? k : r },
                                    direction: 1,
                                    bounds: {
                                        x1: B,
                                        y1: Math.min(k, r),
                                        x2: C,
                                        y2: Math.max(k, r)
                                    },
                                    color: e
                                })
                            }
                }
                u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(f.x1, f.y1, f.width, f.height), b.restore());
                c.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: L.fadeInAnimation,
                    easingFunction: L.easing.easeInQuad,
                    animationBase: 0
                }
            }
        };
        m.prototype.renderRangeColumn = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = u ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = null,
                    e = this.plotArea,
                    f = 0,
                    p, l, k, f = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth :
                    0.03 * this.width;
                var h = a.axisX.dataInfo.minDiff;
                isFinite(h) || (h = 0.3 * Math.abs(a.axisX.range));
                h = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.width * (a.axisX.logarithmic ? Math.log(h) / Math.log(a.axisX.range) : Math.abs(h) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && f > p && (f = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, p));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && p < f) && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity,
                    f));
                h < f && (h = f);
                h > p && (h = p);
                c.save();
                u && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var r = a.dataSeriesIndexes[n],
                        q = this.data[r],
                        g = q.dataPoints;
                    if (0 < g.length)
                        for (var m = 5 < h && q.bevelEnabled ? !0 : !1, f = 0; f < g.length; f++)
                            if (g[f].getTime ? k = g[f].x.getTime() : k = g[f].x, !(k < a.axisX.dataInfo.viewPortMin ||
                                    k > a.axisX.dataInfo.viewPortMax) && !s(g[f].y) && g[f].y.length && "number" === typeof g[f].y[0] && "number" === typeof g[f].y[1]) {
                                b = a.axisX.convertValueToPixel(k);
                                p = a.axisY.convertValueToPixel(g[f].y[0]);
                                l = a.axisY.convertValueToPixel(g[f].y[1]);
                                var ka = a.axisX.reversed ? b + a.plotType.totalDataSeries * h / 2 - (a.previousDataSeriesCount + n) * h << 0 : b - a.plotType.totalDataSeries * h / 2 + (a.previousDataSeriesCount + n) * h << 0,
                                    v = a.axisX.reversed ? ka - h << 0 : ka + h << 0,
                                    b = g[f].color ? g[f].color : q._colorSet[f % q._colorSet.length];
                                if (p > l) {
                                    var t = p;
                                    p = l;
                                    l = t
                                }
                                t = q.dataPointIds[f];
                                this._eventManager.objectMap[t] = { id: t, objectType: "dataPoint", dataSeriesIndex: r, dataPointIndex: f, x1: ka, y1: p, x2: v, y2: l };
                                ca(c, ka, p, v, l, b, 0, b, m, m, !1, !1, q.fillOpacity);
                                b = P(t);
                                u && ca(this._eventManager.ghostCtx, ka, p, v, l, b, 0, null, !1, !1, !1, !1);
                                if (g[f].indexLabel || q.indexLabel || g[f].indexLabelFormatter || q.indexLabelFormatter) this._indexLabels.push({
                                    chartType: "rangeColumn",
                                    dataPoint: g[f],
                                    dataSeries: q,
                                    indexKeyword: 0,
                                    point: { x: ka + (v - ka) / 2, y: g[f].y[1] >= g[f].y[0] ? l : p },
                                    direction: g[f].y[1] >=
                                        g[f].y[0] ? -1 : 1,
                                    bounds: { x1: ka, y1: Math.min(p, l), x2: v, y2: Math.max(p, l) },
                                    color: b
                                }), this._indexLabels.push({ chartType: "rangeColumn", dataPoint: g[f], dataSeries: q, indexKeyword: 1, point: { x: ka + (v - ka) / 2, y: g[f].y[1] >= g[f].y[0] ? p : l }, direction: g[f].y[1] >= g[f].y[0] ? 1 : -1, bounds: { x1: ka, y1: Math.min(p, l), x2: v, y2: Math.max(p, l) }, color: b })
                            }
                }
                u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: L.fadeInAnimation, easingFunction: L.easing.easeInQuad, animationBase: 0 }
            }
        };
        m.prototype.renderError = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = u ? this._preRenderCtx :
                d,
                b = a.axisY._position ? "left" === a.axisY._position || "right" === a.axisY._position ? !1 : !0 : !1;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    f = !1,
                    p = this.plotArea,
                    l = 0,
                    k, h, n, r, q, g, m, ka = a.axisX.dataInfo.minDiff;
                isFinite(ka) || (ka = 0.3 * Math.abs(a.axisX.range));
                c.save();
                u && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(p.x1, p.y1, p.width, p.height);
                c.clip();
                u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(p.x1, p.y1, p.width, p.height), this._eventManager.ghostCtx.clip());
                for (var v =
                        0, t = 0; t < this.data.length; t++) !this.data[t].type.match(/(bar|column)/ig) || !this.data[t].visible || this.data[t].type.match(/(stacked)/ig) && v || v++;
                for (var x = 0; x < a.dataSeriesIndexes.length; x++) {
                    var z = a.dataSeriesIndexes[x],
                        F = this.data[z],
                        B = F.dataPoints,
                        C = s(F._linkedSeries) ? !1 : F._linkedSeries.type.match(/(bar|column)/ig) && F._linkedSeries.visible ? !0 : !1,
                        D = 0;
                    if (C)
                        for (e = F._linkedSeries.id, t = 0; t < e; t++) !this.data[t].type.match(/(bar|column)/ig) || !this.data[t].visible || this.data[t].type.match(/(stacked)/ig) &&
                            D || (this.data[t].type.match(/(range)/ig) && (f = !0), D++);
                    e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                    l = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : b ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (C ? v : 1))) << 0 : 0.3 * this.width;
                    f && (l = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : b ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height /
                        (C ? v : 1))) << 0 : 0.03 * this.width);
                    t = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * ((b ? p.height : p.width) * (a.axisX.logarithmic ? Math.log(ka) / Math.log(a.axisX.range) : Math.abs(ka) / Math.abs(a.axisX.range)) / (C ? v : 1)) << 0;
                    this.dataPointMaxWidth && e > l && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, l));
                    !this.dataPointMaxWidth && (this.dataPointMinWidth && l < e) && (l = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
                    t < e && (t = e);
                    t > l && (t = l);
                    if (0 < B.length)
                        for (var E = F._colorSet,
                                l = 0; l < B.length; l++) {
                            var e = F.lineColor = F.options.color ? F.options.color : E[0],
                                S = {
                                    color: B[l].whiskerColor ? B[l].whiskerColor : B[l].color ? F.whiskerColor ? F.whiskerColor : B[l].color : F.whiskerColor ? F.whiskerColor : e,
                                    thickness: s(B[l].whiskerThickness) ? F.whiskerThickness : B[l].whiskerThickness,
                                    dashType: B[l].whiskerDashType ? B[l].whiskerDashType : F.whiskerDashType,
                                    length: s(B[l].whiskerLength) ? s(F.options.whiskerLength) ? t : F.options.whiskerLength : B[l].whiskerLength,
                                    trimLength: s(B[l].whiskerLength) ? s(F.options.whiskerLength) ?
                                        50 : 0 : 0
                                };
                            S.length = "number" === typeof S.length ? 0 >= S.length ? 0 : S.length >= t ? t : S.length : "string" === typeof S.length ? parseInt(S.length) * t / 100 > t ? t : parseInt(S.length) * t / 100 > t : t;
                            S.thickness = "number" === typeof S.thickness ? 0 > S.thickness ? 0 : Math.round(S.thickness) : 2;
                            var R = { color: B[l].stemColor ? B[l].stemColor : B[l].color ? F.stemColor ? F.stemColor : B[l].color : F.stemColor ? F.stemColor : e, thickness: B[l].stemThickness ? B[l].stemThickness : F.stemThickness, dashType: B[l].stemDashType ? B[l].stemDashType : F.stemDashType };
                            R.thickness =
                                "number" === typeof R.thickness ? 0 > R.thickness ? 0 : Math.round(R.thickness) : 2;
                            B[l].getTime ? m = B[l].x.getTime() : m = B[l].x;
                            if (!(m < a.axisX.dataInfo.viewPortMin || m > a.axisX.dataInfo.viewPortMax) && !s(B[l].y) && B[l].y.length && "number" === typeof B[l].y[0] && "number" === typeof B[l].y[1]) {
                                var ja = a.axisX.convertValueToPixel(m);
                                b ? h = ja : k = ja;
                                ja = a.axisY.convertValueToPixel(B[l].y[0]);
                                b ? n = ja : q = ja;
                                ja = a.axisY.convertValueToPixel(B[l].y[1]);
                                b ? r = ja : g = ja;
                                b ? (q = a.axisX.reversed ? h + (C ? v : 1) * t / 2 - (C ? D - 1 : 0) * t << 0 : h - (C ? v : 1) * t / 2 + (C ? D - 1 : 0) *
                                    t << 0, g = a.axisX.reversed ? q - t << 0 : q + t << 0) : (n = a.axisX.reversed ? k + (C ? v : 1) * t / 2 - (C ? D - 1 : 0) * t << 0 : k - (C ? v : 1) * t / 2 + (C ? D - 1 : 0) * t << 0, r = a.axisX.reversed ? n - t << 0 : n + t << 0);
                                !b && q > g && (ja = q, q = g, g = ja);
                                b && n > r && (ja = n, n = r, r = ja);
                                ja = F.dataPointIds[l];
                                this._eventManager.objectMap[ja] = { id: ja, objectType: "dataPoint", dataSeriesIndex: z, dataPointIndex: l, x1: Math.min(n, r), y1: Math.min(q, g), x2: Math.max(r, n), y2: Math.max(g, q), isXYSwapped: b, stemProperties: R, whiskerProperties: S };
                                y(c, Math.min(n, r), Math.min(q, g), Math.max(r, n), Math.max(g, q), e,
                                    S, R, b);
                                u && y(this._eventManager.ghostCtx, n, q, r, g, e, S, R, b);
                                if (B[l].indexLabel || F.indexLabel || B[l].indexLabelFormatter || F.indexLabelFormatter) this._indexLabels.push({ chartType: "error", dataPoint: B[l], dataSeries: F, indexKeyword: 0, point: { x: b ? B[l].y[1] >= B[l].y[0] ? n : r : n + (r - n) / 2, y: b ? q + (g - q) / 2 : B[l].y[1] >= B[l].y[0] ? g : q }, direction: B[l].y[1] >= B[l].y[0] ? -1 : 1, bounds: { x1: b ? Math.min(n, r) : n, y1: b ? q : Math.min(q, g), x2: b ? Math.max(n, r) : r, y2: b ? g : Math.max(q, g) }, color: e, axisSwapped: b }), this._indexLabels.push({
                                    chartType: "error",
                                    dataPoint: B[l],
                                    dataSeries: F,
                                    indexKeyword: 1,
                                    point: { x: b ? B[l].y[1] >= B[l].y[0] ? r : n : n + (r - n) / 2, y: b ? q + (g - q) / 2 : B[l].y[1] >= B[l].y[0] ? q : g },
                                    direction: B[l].y[1] >= B[l].y[0] ? 1 : -1,
                                    bounds: { x1: b ? Math.min(n, r) : n, y1: b ? q : Math.min(q, g), x2: b ? Math.max(n, r) : r, y2: b ? g : Math.max(q, g) },
                                    color: e,
                                    axisSwapped: b
                                })
                            }
                        }
                }
                u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas,
                    0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(p.x1, p.y1, p.width, p.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: L.fadeInAnimation, easingFunction: L.easing.easeInQuad, animationBase: 0 }
            }
        };
        m.prototype.renderRangeBar = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = u ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b =
                    null,
                    e = this.plotArea,
                    f = 0,
                    p, l, k, h, f = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                p = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0;
                var n = a.axisX.dataInfo.minDiff;
                isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
                n = this.options.dataPointWidth ? this.dataPointWidth : 0.9 * (e.height * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) :
                    Math.abs(n) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth && f > p && (f = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, p));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && p < f) && (p = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, f));
                n < f && (n = f);
                n > p && (n = p);
                c.save();
                u && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1,
                    e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var r = 0; r < a.dataSeriesIndexes.length; r++) {
                    var q = a.dataSeriesIndexes[r],
                        g = this.data[q],
                        m = g.dataPoints;
                    if (0 < m.length) {
                        var ka = 5 < n && g.bevelEnabled ? !0 : !1;
                        c.strokeStyle = "#4572A7 ";
                        for (f = 0; f < m.length; f++)
                            if (m[f].getTime ? h = m[f].x.getTime() : h = m[f].x, !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && !s(m[f].y) && m[f].y.length && "number" === typeof m[f].y[0] && "number" === typeof m[f].y[1]) {
                                p = a.axisY.convertValueToPixel(m[f].y[0]);
                                l = a.axisY.convertValueToPixel(m[f].y[1]);
                                k = a.axisX.convertValueToPixel(h);
                                k = a.axisX.reversed ? k + a.plotType.totalDataSeries * n / 2 - (a.previousDataSeriesCount + r) * n << 0 : k - a.plotType.totalDataSeries * n / 2 + (a.previousDataSeriesCount + r) * n << 0;
                                var v = a.axisX.reversed ? k - n << 0 : k + n << 0;
                                p > l && (b = p, p = l, l = b);
                                b = m[f].color ? m[f].color : g._colorSet[f % g._colorSet.length];
                                ca(c, p, k, l, v, b, 0, null, ka, !1, !1, !1, g.fillOpacity);
                                b = g.dataPointIds[f];
                                this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: q, dataPointIndex: f, x1: p, y1: k, x2: l, y2: v };
                                b = P(b);
                                u && ca(this._eventManager.ghostCtx,
                                    p, k, l, v, b, 0, null, !1, !1, !1, !1);
                                if (m[f].indexLabel || g.indexLabel || m[f].indexLabelFormatter || g.indexLabelFormatter) this._indexLabels.push({ chartType: "rangeBar", dataPoint: m[f], dataSeries: g, indexKeyword: 0, point: { x: m[f].y[1] >= m[f].y[0] ? p : l, y: k + (v - k) / 2 }, direction: m[f].y[1] >= m[f].y[0] ? -1 : 1, bounds: { x1: Math.min(p, l), y1: k, x2: Math.max(p, l), y2: v }, color: b }), this._indexLabels.push({
                                    chartType: "rangeBar",
                                    dataPoint: m[f],
                                    dataSeries: g,
                                    indexKeyword: 1,
                                    point: { x: m[f].y[1] >= m[f].y[0] ? l : p, y: k + (v - k) / 2 },
                                    direction: m[f].y[1] >=
                                        m[f].y[0] ? 1 : -1,
                                    bounds: { x1: Math.min(p, l), y1: k, x2: Math.max(p, l), y2: v },
                                    color: b
                                })
                            }
                    }
                }
                u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: L.fadeInAnimation, easingFunction: L.easing.easeInQuad, animationBase: 0 }
            }
        };
        m.prototype.renderRangeArea = function(a) {
            function d() {
                if (x) {
                    for (var a = null, c = k.length - 1; 0 <= c; c--) a = k[c], b.lineTo(a.x, a.y2), e.lineTo(a.x, a.y2);
                    b.closePath();
                    b.globalAlpha = n.fillOpacity;
                    b.fill();
                    b.globalAlpha = 1;
                    e.fill();
                    if (0 < n.lineThickness) {
                        b.beginPath();
                        b.moveTo(a.x, a.y2);
                        for (c = 0; c < k.length; c++) a = k[c], b.lineTo(a.x, a.y2);
                        b.moveTo(k[0].x, k[0].y1);
                        for (c = 0; c < k.length; c++) a =
                            k[c], b.lineTo(a.x, a.y1);
                        b.stroke()
                    }
                    b.beginPath();
                    b.moveTo(m, s);
                    e.beginPath();
                    e.moveTo(m, s);
                    x = { x: m, y: s };
                    k = [];
                    k.push({ x: m, y1: s, y2: v })
                }
            }
            var c = a.targetCanvasCtx || this.plotArea.ctx,
                b = u ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx,
                    f = [],
                    p = this.plotArea;
                b.save();
                u && e.save();
                b.beginPath();
                b.rect(p.x1, p.y1, p.width, p.height);
                b.clip();
                u && (e.beginPath(), e.rect(p.x1, p.y1, p.width, p.height), e.clip());
                for (var l = 0; l < a.dataSeriesIndexes.length; l++) {
                    var k = [],
                        h = a.dataSeriesIndexes[l],
                        n = this.data[h],
                        r = n.dataPoints,
                        f = n.id;
                    this._eventManager.objectMap[f] = { objectType: "dataSeries", dataSeriesIndex: h };
                    f = P(f);
                    e.fillStyle = f;
                    var f = [],
                        q = !0,
                        g = 0,
                        m, s, v, t, x = null;
                    if (0 < r.length) {
                        var z = n._colorSet[g % n._colorSet.length],
                            F = n.lineColor = n.options.lineColor || z,
                            B = F;
                        b.fillStyle = z;
                        b.strokeStyle = F;
                        b.lineWidth = n.lineThickness;
                        var C = "solid";
                        if (b.setLineDash) {
                            var y = N(n.nullDataLineDashType, n.lineThickness),
                                C = n.lineDashType,
                                D = N(C, n.lineThickness);
                            b.setLineDash(D)
                        }
                        for (var S = !0; g < r.length; g++)
                            if (t = r[g].x.getTime ?
                                r[g].x.getTime() : r[g].x, !(t < a.axisX.dataInfo.viewPortMin || t > a.axisX.dataInfo.viewPortMax && (!n.connectNullData || !S)))
                                if (null !== r[g].y && r[g].y.length && "number" === typeof r[g].y[0] && "number" === typeof r[g].y[1]) {
                                    m = a.axisX.convertValueToPixel(t);
                                    s = a.axisY.convertValueToPixel(r[g].y[0]);
                                    v = a.axisY.convertValueToPixel(r[g].y[1]);
                                    q || S ? (n.connectNullData && !q ? (b.setLineDash && (n.options.nullDataLineDashType || C === n.lineDashType && n.lineDashType !== n.nullDataLineDashType) && (k[k.length - 1].newLineDashArray = D, C = n.nullDataLineDashType,
                                        b.setLineDash(y)), b.lineTo(m, s), u && e.lineTo(m, s), k.push({ x: m, y1: s, y2: v })) : (b.beginPath(), b.moveTo(m, s), x = { x: m, y: s }, k = [], k.push({ x: m, y1: s, y2: v }), u && (e.beginPath(), e.moveTo(m, s))), S = q = !1) : (b.lineTo(m, s), k.push({ x: m, y1: s, y2: v }), u && e.lineTo(m, s), 0 == g % 250 && d());
                                    t = n.dataPointIds[g];
                                    this._eventManager.objectMap[t] = { id: t, objectType: "dataPoint", dataSeriesIndex: h, dataPointIndex: g, x1: m, y1: s, y2: v };
                                    g < r.length - 1 && (B !== (r[g].lineColor || F) || C !== (r[g].lineDashType || n.lineDashType)) && (d(), B = r[g].lineColor || F, k[k.length -
                                        1].newStrokeStyle = B, b.strokeStyle = B, b.setLineDash && (r[g].lineDashType ? (C = r[g].lineDashType, k[k.length - 1].newLineDashArray = N(C, n.lineThickness), b.setLineDash(k[k.length - 1].newLineDashArray)) : (C = n.lineDashType, k[k.length - 1].newLineDashArray = D, b.setLineDash(D))));
                                    if (0 !== r[g].markerSize && (0 < r[g].markerSize || 0 < n.markerSize)) {
                                        var R = n.getMarkerProperties(g, m, v, b);
                                        f.push(R);
                                        var E = P(t);
                                        u && f.push({ x: m, y: v, ctx: e, type: R.type, size: R.size, color: E, borderColor: E, borderThickness: R.borderThickness });
                                        R = n.getMarkerProperties(g,
                                            m, s, b);
                                        f.push(R);
                                        E = P(t);
                                        u && f.push({ x: m, y: s, ctx: e, type: R.type, size: R.size, color: E, borderColor: E, borderThickness: R.borderThickness })
                                    }
                                    if (r[g].indexLabel || n.indexLabel || r[g].indexLabelFormatter || n.indexLabelFormatter) this._indexLabels.push({ chartType: "rangeArea", dataPoint: r[g], dataSeries: n, indexKeyword: 0, point: { x: m, y: s }, direction: r[g].y[0] > r[g].y[1] === a.axisY.reversed ? -1 : 1, color: z }), this._indexLabels.push({
                                        chartType: "rangeArea",
                                        dataPoint: r[g],
                                        dataSeries: n,
                                        indexKeyword: 1,
                                        point: { x: m, y: v },
                                        direction: r[g].y[0] >
                                            r[g].y[1] === a.axisY.reversed ? 1 : -1,
                                        color: z
                                    })
                                } else S || q || d(), S = !0;
                        d();
                        X.drawMarkers(f)
                    }
                }
                u && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(p.x1, p.y1, p.width, p.height), this._eventManager.ghostCtx.restore());
                b.restore();
                return { source: c, dest: this.plotArea.ctx, animationCallback: L.xClipAnimation, easingFunction: L.easing.linear, animationBase: 0 }
            }
        };
        m.prototype.renderRangeSplineArea = function(a) {
            function d(a, c) {
                var d = v(s, 2);
                if (0 < d.length) {
                    if (0 < h.lineThickness) {
                        b.strokeStyle = c;
                        b.setLineDash && b.setLineDash(a);
                        b.beginPath();
                        b.moveTo(d[0].x, d[0].y);
                        for (var f = 0; f < d.length - 3; f += 3) {
                            if (d[f].newStrokeStyle || d[f].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(d[f].x, d[f].y), d[f].newStrokeStyle && (b.strokeStyle = d[f].newStrokeStyle),
                                d[f].newLineDashArray && b.setLineDash(d[f].newLineDashArray);
                            b.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y)
                        }
                    }
                    b.beginPath();
                    b.moveTo(d[0].x, d[0].y);
                    u && (e.beginPath(), e.moveTo(d[0].x, d[0].y));
                    for (f = 0; f < d.length - 3; f += 3) b.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y), u && e.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y);
                    d = v(y, 2);
                    b.lineTo(y[y.length - 1].x, y[y.length - 1].y);
                    for (f = d.length - 1; 2 < f; f -= 3) b.bezierCurveTo(d[f - 1].x, d[f - 1].y, d[f - 2].x,
                        d[f - 2].y, d[f - 3].x, d[f - 3].y), u && e.bezierCurveTo(d[f - 1].x, d[f - 1].y, d[f - 2].x, d[f - 2].y, d[f - 3].x, d[f - 3].y);
                    b.closePath();
                    b.globalAlpha = h.fillOpacity;
                    b.fill();
                    u && (e.closePath(), e.fill());
                    b.globalAlpha = 1;
                    if (0 < h.lineThickness) {
                        b.strokeStyle = c;
                        b.setLineDash && b.setLineDash(a);
                        b.beginPath();
                        b.moveTo(d[0].x, d[0].y);
                        for (var g = f = 0; f < d.length - 3; f += 3, g++) {
                            if (s[g].newStrokeStyle || s[g].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(d[f].x, d[f].y), s[g].newStrokeStyle && (b.strokeStyle = s[g].newStrokeStyle), s[g].newLineDashArray &&
                                b.setLineDash(s[g].newLineDashArray);
                            b.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y)
                        }
                        d = v(s, 2);
                        b.moveTo(d[0].x, d[0].y);
                        for (g = f = 0; f < d.length - 3; f += 3, g++) {
                            if (s[g].newStrokeStyle || s[g].newLineDashArray) b.stroke(), b.beginPath(), b.moveTo(d[f].x, d[f].y), s[g].newStrokeStyle && (b.strokeStyle = s[g].newStrokeStyle), s[g].newLineDashArray && b.setLineDash(s[g].newLineDashArray);
                            b.bezierCurveTo(d[f + 1].x, d[f + 1].y, d[f + 2].x, d[f + 2].y, d[f + 3].x, d[f + 3].y)
                        }
                        b.stroke()
                    }
                    b.beginPath()
                }
            }
            var c = a.targetCanvasCtx ||
                this.plotArea.ctx,
                b = u ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx,
                    f = [],
                    p = this.plotArea;
                b.save();
                u && e.save();
                b.beginPath();
                b.rect(p.x1, p.y1, p.width, p.height);
                b.clip();
                u && (e.beginPath(), e.rect(p.x1, p.y1, p.width, p.height), e.clip());
                for (var l = 0; l < a.dataSeriesIndexes.length; l++) {
                    var k = a.dataSeriesIndexes[l],
                        h = this.data[k],
                        n = h.dataPoints,
                        f = h.id;
                    this._eventManager.objectMap[f] = { objectType: "dataSeries", dataSeriesIndex: k };
                    f = P(f);
                    e.fillStyle = f;
                    var f = [],
                        r = 0,
                        q,
                        g, m, s = [],
                        y = [];
                    if (0 < n.length) {
                        var t = h._colorSet[r % h._colorSet.length],
                            x = h.lineColor = h.options.lineColor || t,
                            z = x;
                        b.fillStyle = t;
                        b.lineWidth = h.lineThickness;
                        var F = "solid",
                            B;
                        if (b.setLineDash) {
                            var C = N(h.nullDataLineDashType, h.lineThickness),
                                F = h.lineDashType;
                            B = N(F, h.lineThickness)
                        }
                        for (g = !1; r < n.length; r++)
                            if (q = n[r].x.getTime ? n[r].x.getTime() : n[r].x, !(q < a.axisX.dataInfo.viewPortMin || q > a.axisX.dataInfo.viewPortMax && (!h.connectNullData || !g)))
                                if (null !== n[r].y && n[r].y.length && "number" === typeof n[r].y[0] && "number" ===
                                    typeof n[r].y[1]) {
                                    q = a.axisX.convertValueToPixel(q);
                                    g = a.axisY.convertValueToPixel(n[r].y[0]);
                                    m = a.axisY.convertValueToPixel(n[r].y[1]);
                                    var D = h.dataPointIds[r];
                                    this._eventManager.objectMap[D] = { id: D, objectType: "dataPoint", dataSeriesIndex: k, dataPointIndex: r, x1: q, y1: g, y2: m };
                                    s[s.length] = { x: q, y: g };
                                    y[y.length] = { x: q, y: m };
                                    r < n.length - 1 && (z !== (n[r].lineColor || x) || F !== (n[r].lineDashType || h.lineDashType)) && (z = n[r].lineColor || x, s[s.length - 1].newStrokeStyle = z, b.setLineDash && (n[r].lineDashType ? (F = n[r].lineDashType,
                                        s[s.length - 1].newLineDashArray = N(F, h.lineThickness)) : (F = h.lineDashType, s[s.length - 1].newLineDashArray = B)));
                                    if (0 !== n[r].markerSize && (0 < n[r].markerSize || 0 < h.markerSize)) {
                                        var E = h.getMarkerProperties(r, q, g, b);
                                        f.push(E);
                                        var S = P(D);
                                        u && f.push({ x: q, y: g, ctx: e, type: E.type, size: E.size, color: S, borderColor: S, borderThickness: E.borderThickness });
                                        E = h.getMarkerProperties(r, q, m, b);
                                        f.push(E);
                                        S = P(D);
                                        u && f.push({ x: q, y: m, ctx: e, type: E.type, size: E.size, color: S, borderColor: S, borderThickness: E.borderThickness })
                                    }
                                    if (n[r].indexLabel ||
                                        h.indexLabel || n[r].indexLabelFormatter || h.indexLabelFormatter) this._indexLabels.push({ chartType: "rangeSplineArea", dataPoint: n[r], dataSeries: h, indexKeyword: 0, point: { x: q, y: g }, direction: n[r].y[0] <= n[r].y[1] ? -1 : 1, color: t }), this._indexLabels.push({ chartType: "rangeSplineArea", dataPoint: n[r], dataSeries: h, indexKeyword: 1, point: { x: q, y: m }, direction: n[r].y[0] <= n[r].y[1] ? 1 : -1, color: t });
                                    g = !1
                                } else 0 < r && !g && (h.connectNullData ? b.setLineDash && (0 < s.length && (h.options.nullDataLineDashType || !n[r - 1].lineDashType)) && (s[s.length -
                                    1].newLineDashArray = C, F = h.nullDataLineDashType) : (d(B, x), s = [], y = [])), g = !0;
                        d(B, x);
                        X.drawMarkers(f)
                    }
                }
                u && (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height), a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), b.clearRect(p.x1, p.y1, p.width, p.height),
                    this._eventManager.ghostCtx.restore());
                b.restore();
                return { source: c, dest: this.plotArea.ctx, animationCallback: L.xClipAnimation, easingFunction: L.easing.linear, animationBase: 0 }
            }
        };
        m.prototype.renderWaterfall = function(a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = u ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = this._eventManager.ghostCtx,
                    e = null,
                    f = this.plotArea,
                    p = 0,
                    l, k, h, n, r = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    p = this.options.dataPointMinWidth ? this.dataPointMinWidth :
                    this.options.dataPointWidth ? this.dataPointWidth : 1;
                k = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0;
                var q = a.axisX.dataInfo.minDiff;
                isFinite(q) || (q = 0.3 * Math.abs(a.axisX.range));
                q = this.options.dataPointWidth ? this.dataPointWidth : 0.6 * (f.width * (a.axisX.logarithmic ? Math.log(q) / Math.log(a.axisX.range) : Math.abs(q) / Math.abs(a.axisX.range)) / a.plotType.totalDataSeries) << 0;
                this.dataPointMaxWidth &&
                    p > k && (p = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, k));
                !this.dataPointMaxWidth && (this.dataPointMinWidth && k < p) && (k = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, p));
                q < p && (q = p);
                q > k && (q = k);
                c.save();
                u && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(f.x1, f.y1, f.width, f.height);
                c.clip();
                u && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(f.x1, f.y1, f.width, f.height), this._eventManager.ghostCtx.clip());
                for (var g = 0; g < a.dataSeriesIndexes.length; g++) {
                    var m =
                        a.dataSeriesIndexes[g],
                        s = this.data[m],
                        v = s.dataPoints,
                        e = s._colorSet[0];
                    s.risingColor = s.options.risingColor ? s.options.risingColor : e;
                    s.fallingColor = s.options.fallingColor ? s.options.fallingColor : "#e40a0a";
                    var t = "number" === typeof s.options.lineThickness ? Math.round(s.lineThickness) : 1,
                        x = 1 === Math.round(t) % 2 ? -0.5 : 0;
                    if (0 < v.length)
                        for (var z = 5 < q && s.bevelEnabled ? !0 : !1, F = !1, B = null, C = null, p = 0; p < v.length; p++)
                            if (v[p].getTime ? n = v[p].x.getTime() : n = v[p].x, "number" !== typeof v[p].y) {
                                if (0 < p && !F && s.connectNullData) var y =
                                    s.options.nullDataLineDashType || !v[p - 1].lineDashType ? s.nullDataLineDashType : v[p - 1].lineDashType;
                                F = !0
                            } else {
                                l = a.axisX.convertValueToPixel(n);
                                k = 0 === s.dataPointEOs[p].cumulativeSum ? r : a.axisY.convertValueToPixel(s.dataPointEOs[p].cumulativeSum);
                                h = 0 === s.dataPointEOs[p].cumulativeSumYStartValue ? r : a.axisY.convertValueToPixel(s.dataPointEOs[p].cumulativeSumYStartValue);
                                l = a.axisX.reversed ? l + a.plotType.totalDataSeries * q / 2 - (a.previousDataSeriesCount + g) * q << 0 : l - a.plotType.totalDataSeries * q / 2 + (a.previousDataSeriesCount +
                                    g) * q << 0;
                                var D = a.axisX.reversed ? l - q << 0 : l + q << 0;
                                k > h && (e = k, k = h, h = e);
                                a.axisY.reversed && (e = k, k = h, h = e);
                                e = s.dataPointIds[p];
                                this._eventManager.objectMap[e] = { id: e, objectType: "dataPoint", dataSeriesIndex: m, dataPointIndex: p, x1: l, y1: k, x2: D, y2: h };
                                var S = v[p].color ? v[p].color : 0 < v[p].y ? s.risingColor : s.fallingColor;
                                ca(c, l, k, D, h, S, 0, S, z, z, !1, !1, s.fillOpacity);
                                e = P(e);
                                u && ca(this._eventManager.ghostCtx, l, k, D, h, e, 0, null, !1, !1, !1, !1);
                                var R, S = l;
                                R = "undefined" !== typeof v[p].isIntermediateSum && !0 === v[p].isIntermediateSum || "undefined" !==
                                    typeof v[p].isCumulativeSum && !0 === v[p].isCumulativeSum ? 0 < v[p].y ? k : h : 0 < v[p].y ? h : k;
                                0 < p && B && (!F || s.connectNullData) && (F && c.setLineDash && c.setLineDash(N(y, t)), c.beginPath(), c.moveTo(B, C - x), c.lineTo(S, R - x), 0 < t && c.stroke(), u && (b.beginPath(), b.moveTo(B, C - x), b.lineTo(S, R - x), 0 < t && b.stroke()));
                                F = !1;
                                B = D;
                                C = 0 < v[p].y ? k : h;
                                S = v[p].lineDashType ? v[p].lineDashType : s.options.lineDashType ? s.options.lineDashType : "shortDash";
                                c.strokeStyle = v[p].lineColor ? v[p].lineColor : s.options.lineColor ? s.options.lineColor : "#9e9e9e";
                                c.lineWidth =
                                    t;
                                c.setLineDash && (S = N(S, t), c.setLineDash(S));
                                (v[p].indexLabel || s.indexLabel || v[p].indexLabelFormatter || s.indexLabelFormatter) && this._indexLabels.push({ chartType: "waterfall", dataPoint: v[p], dataSeries: s, point: { x: l + (D - l) / 2, y: 0 <= v[p].y ? k : h }, direction: 0 > v[p].y === a.axisY.reversed ? 1 : -1, bounds: { x1: l, y1: Math.min(k, h), x2: D, y2: Math.max(k, h) }, color: e })
                            }
                }
                u && (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.globalCompositeOperation = "source-atop", a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas,
                    0, 0, this.width, this.height), a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height), this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height), c.clearRect(f.x1, f.y1, f.width, f.height), this._eventManager.ghostCtx.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: L.fadeInAnimation, easingFunction: L.easing.easeInQuad, animationBase: 0 }
            }
        };
        var Y = function(a, d, c, b, e, f, p, l, k) {
            if (!(0 > c)) {
                "undefined" === typeof l &&
                    (l = 1);
                if (!u) {
                    var h = Number((p % (2 * Math.PI)).toFixed(8));
                    Number((f % (2 * Math.PI)).toFixed(8)) === h && (p -= 1E-4)
                }
                a.save();
                a.globalAlpha = l;
                "pie" === e ? (a.beginPath(), a.moveTo(d.x, d.y), a.arc(d.x, d.y, c, f, p, !1), a.fillStyle = b, a.strokeStyle = "white", a.lineWidth = 2, a.closePath(), a.fill()) : "doughnut" === e && (a.beginPath(), a.arc(d.x, d.y, c, f, p, !1), 0 <= k && a.arc(d.x, d.y, k * c, p, f, !0), a.closePath(), a.fillStyle = b, a.strokeStyle = "white", a.lineWidth = 2, a.fill());
                a.globalAlpha = 1;
                a.restore()
            }
        };
        m.prototype.renderPie = function(a) {
            function d() {
                if (h &&
                    n) {
                    for (var a = 0, b = 0, c = 0, d = 0, e = 0; e < n.length; e++) {
                        var f = n[e],
                            p = h.dataPointIds[e];
                        g[e].id = p;
                        g[e].objectType = "dataPoint";
                        g[e].dataPointIndex = e;
                        g[e].dataSeriesIndex = 0;
                        var l = g[e],
                            r = { percent: null, total: null },
                            m = null,
                            r = k.getPercentAndTotal(h, f);
                        if (h.indexLabelFormatter || f.indexLabelFormatter) m = { chart: k.options, dataSeries: h, dataPoint: f, total: r.total, percent: r.percent };
                        r = f.indexLabelFormatter ? f.indexLabelFormatter(m) : f.indexLabel ? k.replaceKeywordsWithValue(f.indexLabel, f, h, e) : h.indexLabelFormatter ? h.indexLabelFormatter(m) :
                            h.indexLabel ? k.replaceKeywordsWithValue(h.indexLabel, f, h, e) : f.label ? f.label : "";
                        k._eventManager.objectMap[p] = l;
                        l.center = { x: z.x, y: z.y };
                        l.y = f.y;
                        l.radius = C;
                        l.percentInnerRadius = E;
                        l.indexLabelText = r;
                        l.indexLabelPlacement = h.indexLabelPlacement;
                        l.indexLabelLineColor = f.indexLabelLineColor ? f.indexLabelLineColor : h.options.indexLabelLineColor ? h.options.indexLabelLineColor : f.color ? f.color : h._colorSet[e % h._colorSet.length];
                        l.indexLabelLineThickness = s(f.indexLabelLineThickness) ? h.indexLabelLineThickness : f.indexLabelLineThickness;
                        l.indexLabelLineDashType = f.indexLabelLineDashType ? f.indexLabelLineDashType : h.indexLabelLineDashType;
                        l.indexLabelFontColor = f.indexLabelFontColor ? f.indexLabelFontColor : h.indexLabelFontColor;
                        l.indexLabelFontStyle = f.indexLabelFontStyle ? f.indexLabelFontStyle : h.indexLabelFontStyle;
                        l.indexLabelFontWeight = f.indexLabelFontWeight ? f.indexLabelFontWeight : h.indexLabelFontWeight;
                        l.indexLabelFontSize = s(f.indexLabelFontSize) ? h.indexLabelFontSize : f.indexLabelFontSize;
                        l.indexLabelFontFamily = f.indexLabelFontFamily ?
                            f.indexLabelFontFamily : h.indexLabelFontFamily;
                        l.indexLabelBackgroundColor = f.indexLabelBackgroundColor ? f.indexLabelBackgroundColor : h.options.indexLabelBackgroundColor ? h.options.indexLabelBackgroundColor : h.indexLabelBackgroundColor;
                        l.indexLabelMaxWidth = f.indexLabelMaxWidth ? f.indexLabelMaxWidth : h.indexLabelMaxWidth ? h.indexLabelMaxWidth : 0.33 * q.width;
                        l.indexLabelWrap = "undefined" !== typeof f.indexLabelWrap ? f.indexLabelWrap : h.indexLabelWrap;
                        l.startAngle = 0 === e ? h.startAngle ? h.startAngle / 180 * Math.PI : 0 : g[e - 1].endAngle;
                        l.startAngle = (l.startAngle + 2 * Math.PI) % (2 * Math.PI);
                        l.endAngle = l.startAngle + 2 * Math.PI / y * Math.abs(f.y);
                        f = (l.endAngle + l.startAngle) / 2;
                        f = (f + 2 * Math.PI) % (2 * Math.PI);
                        l.midAngle = f;
                        if (l.midAngle > Math.PI / 2 - t && l.midAngle < Math.PI / 2 + t) {
                            if (0 === a || g[c].midAngle > l.midAngle) c = e;
                            a++
                        } else if (l.midAngle > 3 * Math.PI / 2 - t && l.midAngle < 3 * Math.PI / 2 + t) {
                            if (0 === b || g[d].midAngle > l.midAngle) d = e;
                            b++
                        }
                        l.hemisphere = f > Math.PI / 2 && f <= 3 * Math.PI / 2 ? "left" : "right";
                        l.indexLabelTextBlock = new ia(k.plotArea.ctx, {
                            fontSize: l.indexLabelFontSize,
                            fontFamily: l.indexLabelFontFamily,
                            fontColor: l.indexLabelFontColor,
                            fontStyle: l.indexLabelFontStyle,
                            fontWeight: l.indexLabelFontWeight,
                            horizontalAlign: "left",
                            backgroundColor: l.indexLabelBackgroundColor,
                            maxWidth: l.indexLabelMaxWidth,
                            maxHeight: l.indexLabelWrap ? 5 * l.indexLabelFontSize : 1.5 * l.indexLabelFontSize,
                            text: l.indexLabelText,
                            padding: 0,
                            textBaseline: "top"
                        });
                        l.indexLabelTextBlock.measureText()
                    }
                    p = f = 0;
                    r = !1;
                    for (e = 0; e < n.length; e++) l = g[(c + e) % n.length], 1 < a && (l.midAngle > Math.PI / 2 - t && l.midAngle < Math.PI / 2 + t) && (f <= a / 2 && !r ? (l.hemisphere = "right",
                        f++) : (l.hemisphere = "left", r = !0));
                    r = !1;
                    for (e = 0; e < n.length; e++) l = g[(d + e) % n.length], 1 < b && (l.midAngle > 3 * Math.PI / 2 - t && l.midAngle < 3 * Math.PI / 2 + t) && (p <= b / 2 && !r ? (l.hemisphere = "left", p++) : (l.hemisphere = "right", r = !0))
                }
            }

            function c(a) {
                var b = k.plotArea.ctx;
                b.clearRect(q.x1, q.y1, q.width, q.height);
                b.fillStyle = k.backgroundColor;
                b.fillRect(q.x1, q.y1, q.width, q.height);
                for (b = 0; b < n.length; b++) {
                    var c = g[b].startAngle,
                        d = g[b].endAngle;
                    if (d > c) {
                        var e = 0.07 * C * Math.cos(g[b].midAngle),
                            f = 0.07 * C * Math.sin(g[b].midAngle),
                            l = !1;
                        if (n[b].exploded) {
                            if (1E-9 <
                                Math.abs(g[b].center.x - (z.x + e)) || 1E-9 < Math.abs(g[b].center.y - (z.y + f))) g[b].center.x = z.x + e * a, g[b].center.y = z.y + f * a, l = !0
                        } else if (0 < Math.abs(g[b].center.x - z.x) || 0 < Math.abs(g[b].center.y - z.y)) g[b].center.x = z.x + e * (1 - a), g[b].center.y = z.y + f * (1 - a), l = !0;
                        l && (e = {}, e.dataSeries = h, e.dataPoint = h.dataPoints[b], e.index = b, k.toolTip.highlightObjects([e]));
                        Y(k.plotArea.ctx, g[b].center, g[b].radius, n[b].color ? n[b].color : h._colorSet[b % h._colorSet.length], h.type, c, d, h.fillOpacity, g[b].percentInnerRadius)
                    }
                }
                a = k.plotArea.ctx;
                a.save();
                a.fillStyle = "black";
                a.strokeStyle = "grey";
                a.textBaseline = "middle";
                a.lineJoin = "round";
                for (b = b = 0; b < n.length; b++) c = g[b], c.indexLabelText && (c.indexLabelTextBlock.y -= c.indexLabelTextBlock.height / 2, d = 0, d = "left" === c.hemisphere ? "inside" !== h.indexLabelPlacement ? -(c.indexLabelTextBlock.width + r) : -c.indexLabelTextBlock.width / 2 : "inside" !== h.indexLabelPlacement ? r : -c.indexLabelTextBlock.width / 2, c.indexLabelTextBlock.x += d, c.indexLabelTextBlock.render(!0), c.indexLabelTextBlock.x -= d, c.indexLabelTextBlock.y +=
                    c.indexLabelTextBlock.height / 2, "inside" !== c.indexLabelPlacement && 0 < c.indexLabelLineThickness && (d = c.center.x + C * Math.cos(c.midAngle), e = c.center.y + C * Math.sin(c.midAngle), a.strokeStyle = c.indexLabelLineColor, a.lineWidth = c.indexLabelLineThickness, a.setLineDash && a.setLineDash(N(c.indexLabelLineDashType, c.indexLabelLineThickness)), a.beginPath(), a.moveTo(d, e), a.lineTo(c.indexLabelTextBlock.x, c.indexLabelTextBlock.y), a.lineTo(c.indexLabelTextBlock.x + ("left" === c.hemisphere ? -r : r), c.indexLabelTextBlock.y), a.stroke()),
                    a.lineJoin = "miter");
                a.save()
            }

            function b(a, b) {
                var c = 0,
                    c = a.indexLabelTextBlock.y - a.indexLabelTextBlock.height / 2,
                    d = a.indexLabelTextBlock.y + a.indexLabelTextBlock.height / 2,
                    e = b.indexLabelTextBlock.y - b.indexLabelTextBlock.height / 2,
                    f = b.indexLabelTextBlock.y + b.indexLabelTextBlock.height / 2;
                return c = b.indexLabelTextBlock.y > a.indexLabelTextBlock.y ? e - d : c - f
            }

            function e(a) {
                for (var c = null, d = 1; d < n.length; d++)
                    if (c = (a + d + g.length) % g.length, g[c].hemisphere !== g[a].hemisphere) { c = null; break } else if (g[c].indexLabelText && c !==
                    a && (0 > b(g[c], g[a]) || ("right" === g[a].hemisphere ? g[c].indexLabelTextBlock.y >= g[a].indexLabelTextBlock.y : g[c].indexLabelTextBlock.y <= g[a].indexLabelTextBlock.y))) break;
                else c = null;
                return c
            }

            function f(a, c, d) {
                d = (d || 0) + 1;
                if (1E3 < d) return 0;
                c = c || 0;
                var h = 0,
                    l = z.y - 1 * u,
                    p = z.y + 1 * u;
                if (0 <= a && a < n.length) {
                    var k = g[a];
                    if (0 > c && k.indexLabelTextBlock.y < l || 0 < c && k.indexLabelTextBlock.y > p) return 0;
                    var q = 0,
                        r = 0,
                        r = q = q = 0;
                    0 > c ? k.indexLabelTextBlock.y - k.indexLabelTextBlock.height / 2 > l && k.indexLabelTextBlock.y - k.indexLabelTextBlock.height /
                        2 + c < l && (c = -(l - (k.indexLabelTextBlock.y - k.indexLabelTextBlock.height / 2 + c))) : k.indexLabelTextBlock.y + k.indexLabelTextBlock.height / 2 < l && k.indexLabelTextBlock.y + k.indexLabelTextBlock.height / 2 + c > p && (c = k.indexLabelTextBlock.y + k.indexLabelTextBlock.height / 2 + c - p);
                    c = k.indexLabelTextBlock.y + c;
                    l = 0;
                    l = "right" === k.hemisphere ? z.x + Math.sqrt(Math.pow(u, 2) - Math.pow(c - z.y, 2)) : z.x - Math.sqrt(Math.pow(u, 2) - Math.pow(c - z.y, 2));
                    r = z.x + C * Math.cos(k.midAngle);
                    q = z.y + C * Math.sin(k.midAngle);
                    q = Math.sqrt(Math.pow(l - r, 2) + Math.pow(c -
                        q, 2));
                    r = Math.acos(C / u);
                    q = Math.acos((u * u + C * C - q * q) / (2 * C * u));
                    c = q < r ? c - k.indexLabelTextBlock.y : 0;
                    l = null;
                    for (p = 1; p < n.length; p++)
                        if (l = (a - p + g.length) % g.length, g[l].hemisphere !== g[a].hemisphere) { l = null; break } else if (g[l].indexLabelText && g[l].hemisphere === g[a].hemisphere && l !== a && (0 > b(g[l], g[a]) || ("right" === g[a].hemisphere ? g[l].indexLabelTextBlock.y <= g[a].indexLabelTextBlock.y : g[l].indexLabelTextBlock.y >= g[a].indexLabelTextBlock.y))) break;
                    else l = null;
                    r = l;
                    q = e(a);
                    p = l = 0;
                    0 > c ? (p = "right" === k.hemisphere ? r : q, h = c, null !==
                        p && (r = -c, c = k.indexLabelTextBlock.y - k.indexLabelTextBlock.height / 2 - (g[p].indexLabelTextBlock.y + g[p].indexLabelTextBlock.height / 2), c - r < m && (l = -r, p = f(p, l, d + 1), +p.toFixed(x) > +l.toFixed(x) && (h = c > m ? -(c - m) : -(r - (p - l)))))) : 0 < c && (p = "right" === k.hemisphere ? q : r, h = c, null !== p && (r = c, c = g[p].indexLabelTextBlock.y - g[p].indexLabelTextBlock.height / 2 - (k.indexLabelTextBlock.y + k.indexLabelTextBlock.height / 2), c - r < m && (l = r, p = f(p, l, d + 1), +p.toFixed(x) < +l.toFixed(x) && (h = c > m ? c - m : r - (l - p)))));
                    h && (d = k.indexLabelTextBlock.y + h, c = 0, c =
                        "right" === k.hemisphere ? z.x + Math.sqrt(Math.pow(u, 2) - Math.pow(d - z.y, 2)) : z.x - Math.sqrt(Math.pow(u, 2) - Math.pow(d - z.y, 2)), k.midAngle > Math.PI / 2 - t && k.midAngle < Math.PI / 2 + t ? (l = (a - 1 + g.length) % g.length, l = g[l], a = g[(a + 1 + g.length) % g.length], "left" === k.hemisphere && "right" === l.hemisphere && c > l.indexLabelTextBlock.x ? c = l.indexLabelTextBlock.x - 15 : "right" === k.hemisphere && ("left" === a.hemisphere && c < a.indexLabelTextBlock.x) && (c = a.indexLabelTextBlock.x + 15)) : k.midAngle > 3 * Math.PI / 2 - t && k.midAngle < 3 * Math.PI / 2 + t && (l = (a - 1 + g.length) %
                            g.length, l = g[l], a = g[(a + 1 + g.length) % g.length], "right" === k.hemisphere && "left" === l.hemisphere && c < l.indexLabelTextBlock.x ? c = l.indexLabelTextBlock.x + 15 : "left" === k.hemisphere && ("right" === a.hemisphere && c > a.indexLabelTextBlock.x) && (c = a.indexLabelTextBlock.x - 15)), k.indexLabelTextBlock.y = d, k.indexLabelTextBlock.x = c, k.indexLabelAngle = Math.atan2(k.indexLabelTextBlock.y - z.y, k.indexLabelTextBlock.x - z.x))
                }
                return h
            }

            function p() {
                var a = k.plotArea.ctx;
                a.fillStyle = "grey";
                a.strokeStyle = "grey";
                a.font = "16px Arial";
                a.textBaseline =
                    "middle";
                for (var c = a = 0, d = 0, l = !0, c = 0; 10 > c && (1 > c || 0 < d); c++) {
                    if (h.radius || !h.radius && "undefined" !== typeof h.innerRadius && null !== h.innerRadius && C - d <= D) l = !1;
                    l && (C -= d);
                    d = 0;
                    if ("inside" !== h.indexLabelPlacement) {
                        u = C * v;
                        for (a = 0; a < n.length; a++) {
                            var p = g[a];
                            p.indexLabelTextBlock.x = z.x + u * Math.cos(p.midAngle);
                            p.indexLabelTextBlock.y = z.y + u * Math.sin(p.midAngle);
                            p.indexLabelAngle = p.midAngle;
                            p.radius = C;
                            p.percentInnerRadius = E
                        }
                        for (var s, t, a = 0; a < n.length; a++) {
                            var p = g[a],
                                B = e(a);
                            if (null !== B) {
                                s = g[a];
                                t = g[B];
                                var y = 0,
                                    y = b(s, t) -
                                    m;
                                if (0 > y) {
                                    for (var F = t = 0, J = 0; J < n.length; J++) J !== a && g[J].hemisphere === p.hemisphere && (g[J].indexLabelTextBlock.y < p.indexLabelTextBlock.y ? t++ : F++);
                                    t = y / (t + F || 1) * F;
                                    var F = -1 * (y - t),
                                        I = J = 0;
                                    "right" === p.hemisphere ? (J = f(a, t), F = -1 * (y - J), I = f(B, F), +I.toFixed(x) < +F.toFixed(x) && +J.toFixed(x) <= +t.toFixed(x) && f(a, -(F - I))) : (J = f(B, t), F = -1 * (y - J), I = f(a, F), +I.toFixed(x) < +F.toFixed(x) && +J.toFixed(x) <= +t.toFixed(x) && f(B, -(F - I)))
                                }
                            }
                        }
                    } else
                        for (a = 0; a < n.length; a++) p = g[a], u = "pie" === h.type ? 0.7 * C : 0.8 * C, B = z.x + u * Math.cos(p.midAngle),
                            t = z.y + u * Math.sin(p.midAngle), p.indexLabelTextBlock.x = B, p.indexLabelTextBlock.y = t;
                    for (a = 0; a < n.length; a++)
                        if (p = g[a], B = p.indexLabelTextBlock.measureText(), 0 !== B.height && 0 !== B.width) B = B = 0, "right" === p.hemisphere ? (B = q.x2 - (p.indexLabelTextBlock.x + p.indexLabelTextBlock.width + r), B *= -1) : B = q.x1 - (p.indexLabelTextBlock.x - p.indexLabelTextBlock.width - r), 0 < B && (!l && p.indexLabelText && (t = "right" === p.hemisphere ? q.x2 - p.indexLabelTextBlock.x : p.indexLabelTextBlock.x - q.x1, 0.3 * p.indexLabelTextBlock.maxWidth > t ? p.indexLabelText =
                            "" : p.indexLabelTextBlock.maxWidth = 0.85 * t, 0.3 * p.indexLabelTextBlock.maxWidth < t && (p.indexLabelTextBlock.x -= "right" === p.hemisphere ? 2 : -2)), Math.abs(p.indexLabelTextBlock.y - p.indexLabelTextBlock.height / 2 - z.y) < C || Math.abs(p.indexLabelTextBlock.y + p.indexLabelTextBlock.height / 2 - z.y) < C) && (B /= Math.abs(Math.cos(p.indexLabelAngle)), 9 < B && (B *= 0.3), B > d && (d = B)), B = B = 0, 0 < p.indexLabelAngle && p.indexLabelAngle < Math.PI ? (B = q.y2 - (p.indexLabelTextBlock.y + p.indexLabelTextBlock.height / 2 + 5), B *= -1) : B = q.y1 - (p.indexLabelTextBlock.y -
                            p.indexLabelTextBlock.height / 2 - 5), 0 < B && (!l && p.indexLabelText && (t = 0 < p.indexLabelAngle && p.indexLabelAngle < Math.PI ? -1 : 1, 0 === f(a, B * t) && f(a, 2 * t)), Math.abs(p.indexLabelTextBlock.x - z.x) < C && (B /= Math.abs(Math.sin(p.indexLabelAngle)), 9 < B && (B *= 0.3), B > d && (d = B)));
                    var K = function(a, b, c) {
                        for (var d = [], e = 0; d.push(g[b]), b !== c; b = (b + 1 + n.length) % n.length);
                        d.sort(function(a, b) { return a.y - b.y });
                        for (b = 0; b < d.length; b++)
                            if (c = d[b], e < 0.7 * a) e += c.indexLabelTextBlock.height, c.indexLabelTextBlock.text = "", c.indexLabelText = "", c.indexLabelTextBlock.measureText();
                            else break
                    };
                    (function() {
                        for (var a = -1, c = -1, d = 0, f = !1, h = 0; h < n.length; h++)
                            if (f = !1, s = g[h], s.indexLabelText) {
                                var p = e(h);
                                if (null !== p) {
                                    var l = g[p];
                                    y = 0;
                                    y = b(s, l);
                                    var k;
                                    if (k = 0 > y) {
                                        k = s.indexLabelTextBlock.x;
                                        var q = s.indexLabelTextBlock.y - s.indexLabelTextBlock.height / 2,
                                            m = s.indexLabelTextBlock.y + s.indexLabelTextBlock.height / 2,
                                            t = l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2,
                                            w = l.indexLabelTextBlock.x + l.indexLabelTextBlock.width,
                                            A = l.indexLabelTextBlock.y + l.indexLabelTextBlock.height / 2;
                                        k = s.indexLabelTextBlock.x +
                                            s.indexLabelTextBlock.width < l.indexLabelTextBlock.x - r || k > w + r || q > A + r || m < t - r ? !1 : !0
                                    }
                                    k ? (0 > a && (a = h), p !== a && (c = p, d += -y), 0 === h % Math.max(n.length / 10, 3) && (f = !0)) : f = !0;
                                    f && (0 < d && 0 <= a && 0 <= c) && (K(d, a, c), c = a = -1, d = 0)
                                }
                            }
                        0 < d && K(d, a, c)
                    })()
                }
            }

            function l() {
                k.plotArea.layoutManager.reset();
                k.title && (k.title.dockInsidePlotArea || "center" === k.title.horizontalAlign && "center" === k.title.verticalAlign) && k.title.render();
                if (k.subtitles)
                    for (var a = 0; a < k.subtitles.length; a++) {
                        var b = k.subtitles[a];
                        (b.dockInsidePlotArea || "center" ===
                            b.horizontalAlign && "center" === b.verticalAlign) && b.render()
                    }
                k.legend && (k.legend.dockInsidePlotArea || "center" === k.legend.horizontalAlign && "center" === k.legend.verticalAlign) && (k.legend.setLayout(), k.legend.render())
            }
            var k = this;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var h = this.data[a.dataSeriesIndexes[0]],
                    n = h.dataPoints,
                    r = 10,
                    q = this.plotArea,
                    g = h.dataPointEOs,
                    m = 2,
                    u, v = 1.3,
                    t = 20 / 180 * Math.PI,
                    x = 6,
                    z = { x: (q.x2 + q.x1) / 2, y: (q.y2 + q.y1) / 2 },
                    y = 0;
                a = !1;
                for (var B = 0; B < n.length; B++) y += Math.abs(n[B].y), !a && ("undefined" !== typeof n[B].indexLabel &&
                    null !== n[B].indexLabel && 0 < n[B].indexLabel.toString().length) && (a = !0), !a && ("undefined" !== typeof n[B].label && null !== n[B].label && 0 < n[B].label.toString().length) && (a = !0);
                if (0 !== y) {
                    a = a || "undefined" !== typeof h.indexLabel && null !== h.indexLabel && 0 < h.indexLabel.toString().length;
                    var C = "inside" !== h.indexLabelPlacement && a ? 0.75 * Math.min(q.width, q.height) / 2 : 0.92 * Math.min(q.width, q.height) / 2;
                    h.radius && (C = Qa(h.radius, C));
                    var D = "undefined" !== typeof h.innerRadius && null !== h.innerRadius ? Qa(h.innerRadius, C) : 0.7 * C;
                    h.radius =
                        C;
                    "doughnut" === h.type && (h.innerRadius = D);
                    var E = Math.min(D / C, (C - 1) / C);
                    this.pieDoughnutClickHandler = function(a) {
                        k.isAnimating || !s(a.dataSeries.explodeOnClick) && !a.dataSeries.explodeOnClick || (a = a.dataPoint, a.exploded = a.exploded ? !1 : !0, 1 < this.dataPoints.length && k._animator.animate(0, 500, function(a) {
                            c(a);
                            l()
                        }))
                    };
                    d();
                    p();
                    p();
                    p();
                    p();
                    this.disableToolTip = !0;
                    this._animator.animate(0, this.animatedRender ? this.animationDuration : 0, function(a) {
                        var b = k.plotArea.ctx;
                        b.clearRect(q.x1, q.y1, q.width, q.height);
                        b.fillStyle =
                            k.backgroundColor;
                        b.fillRect(q.x1, q.y1, q.width, q.height);
                        a = g[0].startAngle + 2 * Math.PI * a;
                        for (b = 0; b < n.length; b++) {
                            var c = 0 === b ? g[b].startAngle : d,
                                d = c + (g[b].endAngle - g[b].startAngle),
                                e = !1;
                            d > a && (d = a, e = !0);
                            var f = n[b].color ? n[b].color : h._colorSet[b % h._colorSet.length];
                            d > c && Y(k.plotArea.ctx, g[b].center, g[b].radius, f, h.type, c, d, h.fillOpacity, g[b].percentInnerRadius);
                            if (e) break
                        }
                        l()
                    }, function() {
                        k.disableToolTip = !1;
                        k._animator.animate(0, k.animatedRender ? 500 : 0, function(a) {
                            c(a);
                            l()
                        })
                    })
                }
            }
        };
        var pa = function(a, d, c, b) {
            "undefined" ===
            typeof c && (c = 1);
            0 >= Math.round(d.y4 - d.y1) || (a.save(), a.globalAlpha = c, a.beginPath(), a.moveTo(Math.round(d.x1), Math.round(d.y1)), a.lineTo(Math.round(d.x2), Math.round(d.y2)), a.lineTo(Math.round(d.x3), Math.round(d.y3)), a.lineTo(Math.round(d.x4), Math.round(d.y4)), "undefined" !== d.x5 && (a.lineTo(Math.round(d.x5), Math.round(d.y5)), a.lineTo(Math.round(d.x6), Math.round(d.y6))), a.closePath(), a.fillStyle = b ? b : d.color, a.fill(), a.globalAplha = 1, a.restore())
        };
        m.prototype.renderFunnel = function(a) {
            function d() {
                for (var a =
                        0, b = [], c = 0; c < x.length; c++) {
                    if ("undefined" === typeof x[c].y) return -1;
                    x[c].y = "number" === typeof x[c].y ? x[c].y : 0;
                    a += Math.abs(x[c].y)
                }
                if (0 === a) return -1;
                for (c = b[0] = 0; c < x.length; c++) b.push(Math.abs(x[c].y) * D / a);
                return b
            }

            function c() {
                var a = W,
                    b = $,
                    c = K,
                    d = X,
                    e, f;
                e = Z;
                f = Q - ba;
                d = Math.abs((f - e) * (b - a + (d - c)) / 2);
                c = X - K;
                e = f - e;
                f = c * (f - Q);
                f = Math.abs(f);
                f = d + f;
                for (var d = [], g = 0, h = 0; h < x.length; h++) {
                    if ("undefined" === typeof x[h].y) return -1;
                    x[h].y = "number" === typeof x[h].y ? x[h].y : 0;
                    g += Math.abs(x[h].y)
                }
                if (0 === g) return -1;
                for (var p = d[0] =
                        0, l = 0, k, n, b = b - a, p = !1, h = 0; h < x.length; h++) a = Math.abs(x[h].y) * f / g, p ? k = 0 == Number(c.toFixed(3)) ? 0 : a / c : (n = aa * aa * b * b - 4 * Math.abs(aa) * a, 0 > n ? (n = c, p = (b + n) * (e - l) / 2, a -= p, k = e - l, l += e - l, k += 0 == n ? 0 : a / n, l += a / n, p = !0) : (k = (Math.abs(aa) * b - Math.sqrt(n)) / 2, n = b - 2 * k / Math.abs(aa), l += k, l > e && (l -= k, n = c, p = (b + n) * (e - l) / 2, a -= p, k = e - l, l += e - l, k += a / n, l += a / n, p = !0), b = n)), d.push(k);
                return d
            }

            function b() {
                if (t && x) {
                    for (var a, b, c, d, e, f, h, l, p, k, n, q, r, m, w = [], A = [], v = { percent: null, total: null }, B = null, z = 0; z < x.length; z++) m = O[z], m = "undefined" !== typeof m.x5 ?
                        (m.y2 + m.y4) / 2 : (m.y2 + m.y3) / 2, m = g(m).x2 + 1, w[z] = M - m - V;
                    m = 0.5 * V;
                    for (var z = 0, C = x.length - 1; z < x.length || 0 <= C; z++, C--) {
                        b = t.reversed ? x[C] : x[z];
                        a = b.color ? b.color : t.reversed ? t._colorSet[(x.length - 1 - z) % t._colorSet.length] : t._colorSet[z % t._colorSet.length];
                        c = b.indexLabelPlacement || t.indexLabelPlacement || "outside";
                        d = b.indexLabelBackgroundColor || t.indexLabelBackgroundColor || (u ? "transparent" : null);
                        e = b.indexLabelFontColor || t.indexLabelFontColor || "#979797";
                        f = s(b.indexLabelFontSize) ? t.indexLabelFontSize : b.indexLabelFontSize;
                        h = b.indexLabelFontStyle || t.indexLabelFontStyle || "normal";
                        l = b.indexLabelFontFamily || t.indexLabelFontFamily || "arial";
                        p = b.indexLabelFontWeight || t.indexLabelFontWeight || "normal";
                        a = b.indexLabelLineColor || t.options.indexLabelLineColor || a;
                        k = "number" === typeof b.indexLabelLineThickness ? b.indexLabelLineThickness : "number" === typeof t.indexLabelLineThickness ? t.indexLabelLineThickness : 2;
                        n = b.indexLabelLineDashType || t.indexLabelLineDashType || "solid";
                        q = "undefined" !== typeof b.indexLabelWrap ? b.indexLabelWrap : "undefined" !==
                            typeof t.indexLabelWrap ? t.indexLabelWrap : !0;
                        r = t.dataPointIds[z];
                        y._eventManager.objectMap[r] = { id: r, objectType: "dataPoint", dataPointIndex: z, dataSeriesIndex: 0, funnelSection: O[t.reversed ? x.length - 1 - z : z] };
                        "inside" === t.indexLabelPlacement && (w[z] = z !== ca ? t.reversed ? O[z].x2 - O[z].x1 : O[z].x3 - O[z].x4 : O[z].x3 - O[z].x6, 20 > w[z] && (w[z] = z !== ca ? t.reversed ? O[z].x3 - O[z].x4 : O[z].x2 - O[z].x1 : O[z].x2 - O[z].x1, w[z] /= 2));
                        r = b.indexLabelMaxWidth ? b.indexLabelMaxWidth : t.options.indexLabelMaxWidth ? t.indexLabelMaxWidth : w[z];
                        if (r >
                            w[z] || 0 > r) r = w[z];
                        A[z] = "inside" === t.indexLabelPlacement ? O[z].height : !1;
                        v = y.getPercentAndTotal(t, b);
                        if (t.indexLabelFormatter || b.indexLabelFormatter) B = { chart: y.options, dataSeries: t, dataPoint: b, total: v.total, percent: v.percent };
                        b = b.indexLabelFormatter ? b.indexLabelFormatter(B) : b.indexLabel ? y.replaceKeywordsWithValue(b.indexLabel, b, t, z) : t.indexLabelFormatter ? t.indexLabelFormatter(B) : t.indexLabel ? y.replaceKeywordsWithValue(t.indexLabel, b, t, z) : b.label ? b.label : "";
                        0 >= k && (k = 0);
                        1E3 > r && 1E3 - r < m && (r += 1E3 - r);
                        P.roundRect ||
                            Aa(P);
                        c = new ia(P, { fontSize: f, fontFamily: l, fontColor: e, fontStyle: h, fontWeight: p, horizontalAlign: c, backgroundColor: d, maxWidth: r, maxHeight: !1 === A[z] ? q ? 4.28571429 * f : 1.5 * f : A[z], text: b, padding: da });
                        c.measureText();
                        H.push({ textBlock: c, id: t.reversed ? C : z, isDirty: !1, lineColor: a, lineThickness: k, lineDashType: n, height: c.height < c.maxHeight ? c.height : c.maxHeight, width: c.width < c.maxWidth ? c.width : c.maxWidth })
                    }
                }
            }

            function e() {
                var a, b, c, d, e, f = [];
                e = !1;
                c = 0;
                for (var g, h = M - $ - V / 2, h = t.options.indexLabelMaxWidth ? t.indexLabelMaxWidth >
                        h ? h : t.indexLabelMaxWidth : h, l = H.length - 1; 0 <= l; l--) {
                    g = x[H[l].id];
                    c = H[l];
                    d = c.textBlock;
                    b = (a = q(l) < O.length ? H[q(l)] : null) ? a.textBlock : null;
                    c = c.height;
                    a && d.y + c + da > b.y && (e = !0);
                    c = g.indexLabelMaxWidth || h;
                    if (c > h || 0 > c) c = h;
                    f.push(c)
                }
                if (e)
                    for (l = H.length - 1; 0 <= l; l--) a = O[l], H[l].textBlock.maxWidth = f[f.length - (l + 1)], H[l].textBlock.measureText(), H[l].textBlock.x = M - h, c = H[l].textBlock.height < H[l].textBlock.maxHeight ? H[l].textBlock.height : H[l].textBlock.maxHeight, e = H[l].textBlock.width < H[l].textBlock.maxWidth ? H[l].textBlock.width :
                        H[l].textBlock.maxWidth, H[l].height = c, H[l].width = e, c = "undefined" !== typeof a.x5 ? (a.y2 + a.y4) / 2 : (a.y2 + a.y3) / 2, H[l].textBlock.y = c - H[l].height / 2, t.reversed ? (H[l].textBlock.y + H[l].height > T + F && (H[l].textBlock.y = T + F - H[l].height), H[l].textBlock.y < ra - F && (H[l].textBlock.y = ra - F)) : (H[l].textBlock.y < T - F && (H[l].textBlock.y = T - F), H[l].textBlock.y + H[l].height > ra + F && (H[l].textBlock.y = ra + F - H[l].height))
            }

            function f() {
                var a, b, c, d;
                if ("inside" !== t.indexLabelPlacement)
                    for (var e = 0; e < O.length; e++) 0 == H[e].textBlock.text.length ?
                        H[e].isDirty = !0 : (a = O[e], c = "undefined" !== typeof a.x5 ? (a.y2 + a.y4) / 2 : (a.y2 + a.y3) / 2, b = t.reversed ? "undefined" !== typeof a.x5 ? c > wa ? g(c).x2 + 1 : (a.x2 + a.x3) / 2 + 1 : (a.x2 + a.x3) / 2 + 1 : "undefined" !== typeof a.x5 ? c < wa ? g(c).x2 + 1 : (a.x4 + a.x3) / 2 + 1 : (a.x2 + a.x3) / 2 + 1, H[e].textBlock.x = b + V, H[e].textBlock.y = c - H[e].height / 2, t.reversed ? (H[e].textBlock.y + H[e].height > T + F && (H[e].textBlock.y = T + F - H[e].height), H[e].textBlock.y < ra - F && (H[e].textBlock.y = ra - F)) : (H[e].textBlock.y < T - F && (H[e].textBlock.y = T - F), H[e].textBlock.y + H[e].height > ra + F &&
                            (H[e].textBlock.y = ra + F - H[e].height)));
                else
                    for (e = 0; e < O.length; e++) 0 == H[e].textBlock.text.length ? H[e].isDirty = !0 : (a = O[e], b = a.height, c = H[e].height, d = H[e].width, b >= c ? (b = e != ca ? (a.x4 + a.x3) / 2 - d / 2 : (a.x5 + a.x4) / 2 - d / 2, c = e != ca ? (a.y1 + a.y3) / 2 - c / 2 : (a.y1 + a.y4) / 2 - c / 2, H[e].textBlock.x = b, H[e].textBlock.y = c) : H[e].isDirty = !0)
            }

            function p() {
                function a(b, c) {
                    var d;
                    if (0 > b || b >= H.length) return 0;
                    var e, f = H[b].textBlock;
                    if (0 > c) {
                        c *= -1;
                        e = r(b);
                        d = l(e, b);
                        if (d >= c) return f.y -= c, c;
                        if (0 == b) return 0 < d && (f.y -= d), d;
                        d += a(e, -(c - d));
                        0 < d && (f.y -=
                            d);
                        return d
                    }
                    e = q(b);
                    d = l(b, e);
                    if (d >= c) return f.y += c, c;
                    if (b == O.length - 1) return 0 < d && (f.y += d), d;
                    d += a(e, c - d);
                    0 < d && (f.y += d);
                    return d
                }

                function b() {
                    var a, d, e, f, g = 0,
                        h;
                    f = (Q - Z + 2 * F) / k;
                    h = k;
                    for (var l, p = 1; p < h; p++) { e = p * f; for (var n = H.length - 1; 0 <= n; n--) !H[n].isDirty && (H[n].textBlock.y < e && H[n].textBlock.y + H[n].height > e) && (l = q(n), !(l >= H.length - 1) && H[n].textBlock.y + H[n].height + da > H[l].textBlock.y && (H[n].textBlock.y = H[n].textBlock.y + H[n].height - e > e - H[n].textBlock.y ? e + 1 : e - H[n].height - 1)) }
                    for (l = O.length - 1; 0 < l; l--)
                        if (!H[l].isDirty) {
                            e =
                                r(l);
                            if (0 > e && (e = 0, H[e].isDirty)) break;
                            if (H[l].textBlock.y < H[e].textBlock.y + H[e].height) {
                                d = d || l;
                                f = l;
                                for (h = 0; H[f].textBlock.y < H[e].textBlock.y + H[e].height + da;) {
                                    a = a || H[f].textBlock.y + H[f].height;
                                    h += H[f].height;
                                    h += da;
                                    f = e;
                                    if (0 >= f) {
                                        f = 0;
                                        h += H[f].height;
                                        break
                                    }
                                    e = r(f);
                                    if (0 > e) {
                                        f = 0;
                                        h += H[f].height;
                                        break
                                    }
                                }
                                if (f != l) {
                                    g = H[f].textBlock.y;
                                    a -= g;
                                    a = h - a;
                                    g = c(a, d, f);
                                    break
                                }
                            }
                        }
                    return g
                }

                function c(a, b, d) {
                    var e = [],
                        f = 0,
                        g = 0;
                    for (a = Math.abs(a); d <= b; d++) e.push(O[d]);
                    e.sort(function(a, b) { return a.height - b.height });
                    for (d = 0; d < e.length; d++)
                        if (b =
                            e[d], f < a) g++, f += H[b.id].height + da, H[b.id].textBlock.text = "", H[b.id].indexLabelText = "", H[b.id].isDirty = !0, H[b.id].textBlock.measureText();
                        else break;
                    return g
                }
                for (var d, e, f, g, h, p, k = 1, n = 0; n < 2 * k; n++) {
                    for (var m = H.length - 1; 0 <= m && !(0 <= r(m) && r(m), f = H[m], g = f.textBlock, p = (h = q(m) < O.length ? H[q(m)] : null) ? h.textBlock : null, d = +f.height.toFixed(6), e = +g.y.toFixed(6), !f.isDirty && (h && e + d + da > +p.y.toFixed(6)) && (d = g.y + d + da - p.y, e = a(m, -d), e < d && (0 < e && (d -= e), e = a(q(m), d), e != d))); m--);
                    b()
                }
            }

            function l(a, b) {
                return (b < O.length ? H[b].textBlock.y :
                    t.reversed ? T + F : ra + F) - (0 > a ? t.reversed ? ra - F : T - F : H[a].textBlock.y + H[a].height + da)
            }

            function k(a, b, c) {
                var d, e, g, l = [],
                    p = F,
                    r = []; - 1 !== b && (0 <= Y.indexOf(b) ? (e = Y.indexOf(b), Y.splice(e, 1)) : (Y.push(b), Y = Y.sort(function(a, b) { return a - b })));
                if (0 === Y.length) l = ga;
                else {
                    e = F * (1 != Y.length || 0 != Y[0] && Y[0] != O.length - 1 ? 2 : 1) / h();
                    for (var q = 0; q < O.length; q++) {
                        if (1 == Y.length && 0 == Y[0]) {
                            if (0 === q) {
                                l.push(ga[q]);
                                d = p;
                                continue
                            }
                        } else 0 === q && (d = -1 * p);
                        l.push(ga[q] + d);
                        if (0 <= Y.indexOf(q) || q < O.length && 0 <= Y.indexOf(q + 1)) d += e
                    }
                }
                g = function() {
                    for (var a = [], b = 0; b < O.length; b++) a.push(l[b] - O[b].y1);
                    return a
                }();
                var s = { startTime: (new Date).getTime(), duration: c || 500, easingFunction: function(a, b, c, d) { return L.easing.easeOutQuart(a, b, c, d) }, changeSection: function(a) { for (var b, c, d = 0; d < O.length; d++) b = g[d], c = O[d], b *= a, "undefined" === typeof r[d] && (r[d] = 0), 0 > r && (r *= -1), c.y1 += b - r[d], c.y2 += b - r[d], c.y3 += b - r[d], c.y4 += b - r[d], c.y5 && (c.y5 += b - r[d], c.y6 += b - r[d]), r[d] = b } };
                a._animator.animate(0, c, function(c) {
                    var d = a.plotArea.ctx || a.ctx;
                    ha = !0;
                    d.clearRect(z.x1, z.y1, z.x2 - z.x1,
                        z.y2 - z.y1);
                    d.fillStyle = a.backgroundColor;
                    d.fillRect(z.x1, z.y1, z.width, z.height);
                    s.changeSection(c, b);
                    var e = {};
                    e.dataSeries = t;
                    e.dataPoint = t.reversed ? t.dataPoints[x.length - 1 - b] : t.dataPoints[b];
                    e.index = t.reversed ? x.length - 1 - b : b;
                    a.toolTip.highlightObjects([e]);
                    for (e = 0; e < O.length; e++) pa(d, O[e], t.fillOpacity);
                    v(d);
                    I && ("inside" !== t.indexLabelPlacement ? n(d) : f(), m(d));
                    1 <= c && (ha = !1)
                }, null, L.easing.easeOutQuart)
            }

            function h() { for (var a = 0, b = 0; b < O.length - 1; b++)(0 <= Y.indexOf(b) || 0 <= Y.indexOf(b + 1)) && a++; return a }

            function n(a) { for (var b, c, d, e, f = 0; f < O.length; f++) e = 1 === H[f].lineThickness % 2 ? 0.5 : 0, c = ((O[f].y2 + O[f].y4) / 2 << 0) + e, b = g(c).x2 - 1, d = H[f].textBlock.x, e = (H[f].textBlock.y + H[f].height / 2 << 0) + e, H[f].isDirty || 0 == H[f].lineThickness || (a.strokeStyle = H[f].lineColor, a.lineWidth = H[f].lineThickness, a.setLineDash && a.setLineDash(N(H[f].lineDashType, H[f].lineThickness)), a.beginPath(), a.moveTo(b, c), a.lineTo(d, e), a.stroke()) }

            function r(a) { for (a -= 1; - 1 <= a && -1 != a && H[a].isDirty; a--); return a }

            function q(a) {
                for (a += 1; a <= O.length &&
                    a != O.length && H[a].isDirty; a++);
                return a
            }

            function g(a) {
                for (var b, c = 0; c < x.length; c++)
                    if (O[c].y1 < a && O[c].y4 > a) { b = O[c]; break }
                return b ? (a = b.y6 ? a > b.y6 ? b.x3 + (b.x4 - b.x3) / (b.y4 - b.y3) * (a - b.y3) : b.x2 + (b.x3 - b.x2) / (b.y3 - b.y2) * (a - b.y2) : b.x2 + (b.x3 - b.x2) / (b.y3 - b.y2) * (a - b.y2), { x1: a, x2: a }) : -1
            }

            function m(a) { for (var b = 0; b < O.length; b++) H[b].isDirty || (a && (H[b].textBlock.ctx = a), H[b].textBlock.render(!0)) }

            function v(a) {
                y.plotArea.layoutManager.reset();
                a.roundRect || Aa(a);
                y.title && (y.title.dockInsidePlotArea || "center" === y.title.horizontalAlign &&
                    "center" === y.title.verticalAlign) && (y.title.ctx = a, y.title.render());
                if (y.subtitles)
                    for (var b = 0; b < y.subtitles.length; b++) { var c = y.subtitles[b]; if (c.dockInsidePlotArea || "center" === c.horizontalAlign && "center" === c.verticalAlign) y.subtitles.ctx = a, c.render() }
                y.legend && (y.legend.dockInsidePlotArea || "center" === y.legend.horizontalAlign && "center" === y.legend.verticalAlign) && (y.legend.ctx = a, y.legend.setLayout(), y.legend.render());
                J.fNg && J.fNg(y)
            }
            var y = this;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                for (var t = this.data[a.dataSeriesIndexes[0]],
                        x = t.dataPoints, z = this.plotArea, F = 0.025 * z.width, B = 0.01 * z.width, C = 0, D = z.height - 2 * F, E = Math.min(z.width - 2 * B, 2.8 * z.height), I = !1, R = 0; R < x.length; R++)
                    if (!I && ("undefined" !== typeof x[R].indexLabel && null !== x[R].indexLabel && 0 < x[R].indexLabel.toString().length) && (I = !0), !I && ("undefined" !== typeof x[R].label && null !== x[R].label && 0 < x[R].label.toString().length) && (I = !0), !I && "function" === typeof t.indexLabelFormatter || "function" === typeof x[R].indexLabelFormatter) I = !0;
                I = I || "undefined" !== typeof t.indexLabel && null !== t.indexLabel &&
                    0 < t.indexLabel.toString().length;
                "inside" !== t.indexLabelPlacement && I || (B = (z.width - 0.75 * E) / 2);
                var R = z.x1 + B,
                    M = z.x2 - B,
                    Z = z.y1 + F,
                    Q = z.y2 - F,
                    P = a.targetCanvasCtx || this.plotArea.ctx || this.ctx;
                if (0 != t.length && (t.dataPoints && t.visible) && 0 !== x.length) {
                    var ba, G;
                    a = 75 * E / 100;
                    var V = 30 * (M - a) / 100;
                    "funnel" === t.type ? (ba = s(t.options.neckHeight) ? 0.35 * D : t.neckHeight, G = s(t.options.neckWidth) ? 0.25 * a : t.neckWidth, "string" === typeof ba && ba.match(/%$/) ? (ba = parseInt(ba), ba = ba * D / 100) : ba = parseInt(ba), "string" === typeof G && G.match(/%$/) ?
                        (G = parseInt(G), G = G * a / 100) : G = parseInt(G), ba > D ? ba = D : 0 >= ba && (ba = 0), G > a ? G = a - 0.5 : 0 >= G && (G = 0)) : "pyramid" === t.type && (G = ba = 0, t.reversed = t.reversed ? !1 : !0);
                    var B = R + a / 2,
                        W = R,
                        $ = R + a,
                        T = t.reversed ? Q : Z,
                        K = B - G / 2,
                        X = B + G / 2,
                        wa = t.reversed ? Z + ba : Q - ba,
                        ra = t.reversed ? Z : Q;
                    a = [];
                    var B = [],
                        O = [],
                        E = [],
                        U = Z,
                        ca, aa = (wa - T) / (K - W),
                        ea = -aa,
                        R = "area" === (t.valueRepresents ? t.valueRepresents : "height") ? c() : d();
                    if (-1 !== R) {
                        if (t.reversed)
                            for (E.push(U), G = R.length - 1; 0 < G; G--) U += R[G], E.push(U);
                        else
                            for (G = 0; G < R.length; G++) U += R[G], E.push(U);
                        if (t.reversed)
                            for (G =
                                0; G < R.length; G++) E[G] < wa ? (a.push(K), B.push(X), ca = G) : (a.push((E[G] - T + aa * W) / aa), B.push((E[G] - T + ea * $) / ea));
                        else
                            for (G = 0; G < R.length; G++) E[G] < wa ? (a.push((E[G] - T + aa * W) / aa), B.push((E[G] - T + ea * $) / ea), ca = G) : (a.push(K), B.push(X));
                        for (G = 0; G < R.length - 1; G++) U = t.reversed ? x[x.length - 1 - G].color ? x[x.length - 1 - G].color : t._colorSet[(x.length - 1 - G) % t._colorSet.length] : x[G].color ? x[G].color : t._colorSet[G % t._colorSet.length], G === ca ? O.push({
                            x1: a[G],
                            y1: E[G],
                            x2: B[G],
                            y2: E[G],
                            x3: X,
                            y3: wa,
                            x4: B[G + 1],
                            y4: E[G + 1],
                            x5: a[G + 1],
                            y5: E[G + 1],
                            x6: K,
                            y6: wa,
                            id: G,
                            height: E[G + 1] - E[G],
                            color: U
                        }) : O.push({ x1: a[G], y1: E[G], x2: B[G], y2: E[G], x3: B[G + 1], y3: E[G + 1], x4: a[G + 1], y4: E[G + 1], id: G, height: E[G + 1] - E[G], color: U });
                        var da = 2,
                            H = [],
                            ha = !1,
                            Y = [],
                            ga = [],
                            R = !1;
                        a = a = 0;
                        Ba(Y);
                        for (G = 0; G < x.length; G++) x[G].exploded && (R = !0, t.reversed ? Y.push(x.length - 1 - G) : Y.push(G));
                        P.clearRect(z.x1, z.y1, z.width, z.height);
                        P.fillStyle = y.backgroundColor;
                        P.fillRect(z.x1, z.y1, z.width, z.height);
                        if (I && t.visible && (b(), f(), e(), "inside" !== t.indexLabelPlacement)) {
                            p();
                            for (G = 0; G < x.length; G++) H[G].isDirty ||
                                (a = H[G].textBlock.x + H[G].width, a = (M - a) / 2, 0 == G && (C = a), C > a && (C = a));
                            for (G = 0; G < O.length; G++) O[G].x1 += C, O[G].x2 += C, O[G].x3 += C, O[G].x4 += C, O[G].x5 && (O[G].x5 += C, O[G].x6 += C), H[G].textBlock.x += C
                        }
                        for (G = 0; G < O.length; G++) C = O[G], pa(P, C, t.fillOpacity), ga.push(C.y1);
                        v(P);
                        I && t.visible && ("inside" === t.indexLabelPlacement || y.animationEnabled || n(P), y.animationEnabled || m());
                        if (!I)
                            for (G = 0; G < x.length; G++) C = t.dataPointIds[G], a = {
                                id: C,
                                objectType: "dataPoint",
                                dataPointIndex: G,
                                dataSeriesIndex: 0,
                                funnelSection: O[t.reversed ? x.length -
                                    1 - G : G]
                            }, y._eventManager.objectMap[C] = a;
                        !y.animationEnabled && R ? k(y, -1, 0) : y.animationEnabled && !y.animatedRender && k(y, -1, 0);
                        this.funnelPyramidClickHandler = function(a) {
                            var b = -1;
                            if (!ha && !y.isAnimating && (s(a.dataSeries.explodeOnClick) || a.dataSeries.explodeOnClick) && (b = t.reversed ? x.length - 1 - a.dataPointIndex : a.dataPointIndex, 0 <= b)) {
                                a = b;
                                if ("funnel" === t.type || "pyramid" === t.type) t.reversed ? x[x.length - 1 - a].exploded = x[x.length - 1 - a].exploded ? !1 : !0 : x[a].exploded = x[a].exploded ? !1 : !0;
                                k(y, b, 500)
                            }
                        };
                        return {
                            source: P,
                            dest: this.plotArea.ctx,
                            animationCallback: function(a, b) {
                                L.fadeInAnimation(a, b);
                                1 <= a && (k(y, -1, 500), v(y.plotArea.ctx || y.ctx))
                            },
                            easingFunction: L.easing.easeInQuad,
                            animationBase: 0
                        }
                    }
                }
            }
        };
        m.prototype.requestAnimFrame = function() { return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) { window.setTimeout(a, 1E3 / 60) } }();
        m.prototype.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame ||
            window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
        m.prototype.set = function(a, d, c) { c = "undefined" === typeof c ? !0 : c; "options" === a ? (this.options = d, c && this.render()) : m.base.set.call(this, a, d, c) };
        m.prototype.exportChart = function(a) {
            a = "undefined" === typeof a ? {} : a;
            var d = a.format ? a.format : "png",
                c = a.fileName ? a.fileName : this.exportFileName;
            if (a.toDataURL) return this.canvas.toDataURL("image/" + d);
            var b = this.canvas;
            if (b && d && c) {
                c = c + "." + d;
                a = "image/" + d;
                var b = b.toDataURL(a),
                    e = !1,
                    f = document.createElement("a");
                f.download = c;
                f.href = b;
                if ("undefined" !== typeof Blob && new Blob) {
                    for (var p = b.replace(/^data:[a-z\/]*;base64,/, ""), p = atob(p), l = new ArrayBuffer(p.length), l = new Uint8Array(l), k = 0; k < p.length; k++) l[k] = p.charCodeAt(k);
                    d = new Blob([l.buffer], { type: "image/" + d });
                    try { window.navigator.msSaveBlob(d, c), e = !0 } catch (h) { f.dataset.downloadurl = [a, f.download, f.href].join(":"), f.href = window.URL.createObjectURL(d) }
                }
                if (!e) try {
                    event = document.createEvent("MouseEvents"),
                        event.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), f.dispatchEvent ? f.dispatchEvent(event) : f.fireEvent && f.fireEvent("onclick")
                } catch (n) { d = window.open(), d.document.write("<img src='" + b + "'></img><div>Please right click on the image and save it to your device</div>"), d.document.close() }
            }
        };
        m.prototype.print = function() {
            var a = this.exportChart({ toDataURL: !0 }),
                d = document.createElement("iframe");
            d.setAttribute("class", "canvasjs-chart-print-frame");
            d.setAttribute("style", "position:absolute; width:100%; border: 0px; margin: 0px 0px 0px 0px; padding 0px 0px 0px 0px;");
            d.style.height = this.height + "px";
            this._canvasJSContainer.appendChild(d);
            var c = this,
                b = d.contentWindow || d.contentDocument.document || d.contentDocument;
            b.document.open();
            b.document.write('<!DOCTYPE HTML>\n<html><body style="margin: 0px 0px 0px 0px; padding: 0px 0px 0px 0px;"><img src="' + a + '"/><body/></html>');
            b.document.close();
            setTimeout(function() {
                b.focus();
                b.print();
                setTimeout(function() { c._canvasJSContainer.removeChild(d) }, 1E3)
            }, 500)
        };
        m.prototype.getPercentAndTotal = function(a, d) {
            var c = null,
                b = null,
                e = null;
            if (0 <= a.type.indexOf("stacked")) b = 0, c = d.x.getTime ? d.x.getTime() : d.x, c in a.plotUnit.yTotals && (b = a.plotUnit.yTotals[c], e = isNaN(d.y) ? 0 : 100 * (d.y / b));
            else if ("pie" === a.type || "doughnut" === a.type || "funnel" === a.type || "pyramid" === a.type) {
                for (c = b = 0; c < a.dataPoints.length; c++) isNaN(a.dataPoints[c].y) || (b += a.dataPoints[c].y);
                e = isNaN(d.y) ? 0 : 100 * (d.y / b)
            }
            return { percent: e, total: b }
        };
        m.prototype.replaceKeywordsWithValue = function(a, d, c, b, e) {
            var f = this;
            e = "undefined" === typeof e ? 0 : e;
            if ((0 <= c.type.indexOf("stacked") ||
                    "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
                var p = "#percent",
                    l = "#total",
                    k = this.getPercentAndTotal(c, d),
                    l = isNaN(k.total) ? l : k.total,
                    p = isNaN(k.percent) ? p : k.percent;
                do {
                    k = "";
                    if (c.percentFormatString) k = c.percentFormatString;
                    else {
                        var k = "#,##0.",
                            h = Math.max(Math.ceil(Math.log(1 / Math.abs(p)) / Math.LN10), 2);
                        if (isNaN(h) || !isFinite(h)) h = 2;
                        for (var n = 0; n < h; n++) k += "#";
                        c.percentFormatString = k
                    }
                    a = a.replace("#percent", ea(p, k, f._cultureInfo));
                    a = a.replace("#total", ea(l, c.yValueFormatString ? c.yValueFormatString : "#,##0.########", f._cultureInfo))
                } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))
            }
            return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, function(a) {
                if ('"' === a[0] && '"' === a[a.length - 1] || "'" === a[0] && "'" === a[a.length - 1]) return a.slice(1, a.length - 1);
                a = Ea(a.slice(1, a.length - 1));
                a = a.replace("#index", e);
                var h = null;
                try {
                    var g = a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
                    g && 0 < g.length && (h = Ea(g[2]), a = Ea(g[1]))
                } catch (l) {}
                g = null;
                if ("color" === a) return "waterfall" ===
                    c.type ? d.color ? d.color : 0 < d.y ? c.risingColor : c.fallingColor : "error" === c.type ? c.color ? c.color : c._colorSet[h % c._colorSet.length] : d.color ? d.color : c.color ? c.color : c._colorSet[b % c._colorSet.length];
                if (d.hasOwnProperty(a)) g = d;
                else if (c.hasOwnProperty(a)) g = c;
                else return "";
                g = g[a];
                null !== h && (g = g[h]);
                if ("x" === a)
                    if ("dateTime" === c.axisX.valueType || "dateTime" === c.xValueType || d.x && d.x.getTime) {
                        if (f.plotInfo.plotTypes[0].plotUnits[0].axisX && !f.plotInfo.plotTypes[0].plotUnits[0].axisX.logarithmic) return za(g, d.xValueFormatString ?
                            d.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : c.xValueFormatString = f.axisX && f.axisX.autoValueFormatString ? f.axisX.autoValueFormatString : "DD MMM YY", f._cultureInfo)
                    } else return ea(g, d.xValueFormatString ? d.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : c.xValueFormatString = "#,##0.########", f._cultureInfo);
                else return "y" === a ? ea(g, d.yValueFormatString ? d.yValueFormatString : c.yValueFormatString ? c.yValueFormatString : c.yValueFormatString = "#,##0.########", f._cultureInfo) : "z" ===
                    a ? ea(g, d.zValueFormatString ? d.zValueFormatString : c.zValueFormatString ? c.zValueFormatString : c.zValueFormatString = "#,##0.########", f._cultureInfo) : g
            })
        };
        na(E, W);
        E.prototype.setLayout = function() {
            var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
                d = a.layoutManager.getFreeSpace(),
                c = null,
                b = 0,
                e = 0,
                f = 0,
                p = 0,
                l = this.markerMargin = this.chart.options.legend && !s(this.chart.options.legend.markerMargin) ? this.chart.options.legend.markerMargin : 0.3 * this.fontSize;
            this.height = 0;
            var k = [],
                h = [];
            "top" === this.verticalAlign ||
                "bottom" === this.verticalAlign ? (this.orientation = "horizontal", c = this.verticalAlign, f = this.maxWidth = null !== this.maxWidth ? this.maxWidth : d.width, p = this.maxHeight = null !== this.maxHeight ? this.maxHeight : 0.5 * d.height) : "center" === this.verticalAlign && (this.orientation = "vertical", c = this.horizontalAlign, f = this.maxWidth = null !== this.maxWidth ? this.maxWidth : 0.5 * d.width, p = this.maxHeight = null !== this.maxHeight ? this.maxHeight : d.height);
            this.errorMarkerColor = [];
            for (var n = 0; n < this.dataSeries.length; n++) {
                var r = this.dataSeries[n];
                if (r.dataPoints && r.dataPoints.length)
                    if ("pie" !== r.type && "doughnut" !== r.type && "funnel" !== r.type && "pyramid" !== r.type) {
                        var q = r.legendMarkerType = r.legendMarkerType ? r.legendMarkerType : "line" !== r.type && "stepLine" !== r.type && "spline" !== r.type && "scatter" !== r.type && "bubble" !== r.type || !r.markerType ? "error" === r.type && r._linkedSeries ? r._linkedSeries.legendMarkerType ? r._linkedSeries.legendMarkerType : I.getDefaultLegendMarker(r._linkedSeries.type) : I.getDefaultLegendMarker(r.type) : r.markerType,
                            g = r.legendText ? r.legendText :
                            this.itemTextFormatter ? this.itemTextFormatter({ chart: this.chart, legend: this.options, dataSeries: r, dataPoint: null }) : r.name,
                            m = r.legendMarkerColor = r.legendMarkerColor ? r.legendMarkerColor : r.markerColor ? r.markerColor : "error" === r.type ? s(r.whiskerColor) ? r._colorSet[0] : r.whiskerColor : r._colorSet[0],
                            u = r.markerSize || "line" !== r.type && "stepLine" !== r.type && "spline" !== r.type ? 0.75 * this.lineHeight : 0,
                            v = r.legendMarkerBorderColor ? r.legendMarkerBorderColor : r.markerBorderColor,
                            t = r.legendMarkerBorderThickness ? r.legendMarkerBorderThickness :
                            r.markerBorderThickness ? Math.max(1, Math.round(0.2 * u)) : 0;
                        "error" === r.type && this.errorMarkerColor.push(m);
                        g = this.chart.replaceKeywordsWithValue(g, r.dataPoints[0], r, n);
                        q = { markerType: q, markerColor: m, text: g, textBlock: null, chartType: r.type, markerSize: u, lineColor: r._colorSet[0], dataSeriesIndex: r.index, dataPointIndex: null, markerBorderColor: v, markerBorderThickness: t };
                        k.push(q)
                    } else
                        for (var x = 0; x < r.dataPoints.length; x++) {
                            var z = r.dataPoints[x],
                                q = z.legendMarkerType ? z.legendMarkerType : r.legendMarkerType ? r.legendMarkerType :
                                I.getDefaultLegendMarker(r.type),
                                g = z.legendText ? z.legendText : r.legendText ? r.legendText : this.itemTextFormatter ? this.itemTextFormatter({ chart: this.chart, legend: this.options, dataSeries: r, dataPoint: z }) : z.name ? z.name : "DataPoint: " + (x + 1),
                                m = z.legendMarkerColor ? z.legendMarkerColor : r.legendMarkerColor ? r.legendMarkerColor : z.color ? z.color : r.color ? r.color : r._colorSet[x % r._colorSet.length],
                                u = 0.75 * this.lineHeight,
                                v = z.legendMarkerBorderColor ? z.legendMarkerBorderColor : r.legendMarkerBorderColor ? r.legendMarkerBorderColor :
                                z.markerBorderColor ? z.markerBorderColor : r.markerBorderColor,
                                t = z.legendMarkerBorderThickness ? z.legendMarkerBorderThickness : r.legendMarkerBorderThickness ? r.legendMarkerBorderThickness : z.markerBorderThickness || r.markerBorderThickness ? Math.max(1, Math.round(0.2 * u)) : 0,
                                g = this.chart.replaceKeywordsWithValue(g, z, r, x),
                                q = { markerType: q, markerColor: m, text: g, textBlock: null, chartType: r.type, markerSize: u, dataSeriesIndex: n, dataPointIndex: x, markerBorderColor: v, markerBorderThickness: t };
                            (z.showInLegend || r.showInLegend &&
                                !1 !== z.showInLegend) && k.push(q)
                        }
            }!0 === this.reversed && k.reverse();
            if (0 < k.length) {
                r = null;
                m = g = z = x = 0;
                z = null !== this.itemWidth ? null !== this.itemMaxWidth ? Math.min(this.itemWidth, this.itemMaxWidth, f) : this.itemMaxWidth = Math.min(this.itemWidth, f) : null !== this.itemMaxWidth ? Math.min(this.itemMaxWidth, f) : this.itemMaxWidth = f;
                u = 0 === u ? 0.75 * this.lineHeight : u;
                z -= u + l;
                for (n = 0; n < k.length; n++) {
                    q = k[n];
                    v = z;
                    if ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType) v -= 2 * 0.1 * this.lineHeight;
                    if (!(0 >= p || "undefined" ===
                            typeof p || 0 >= v || "undefined" === typeof v)) {
                        if ("horizontal" === this.orientation) {
                            q.textBlock = new ia(this.ctx, { x: 0, y: 0, maxWidth: v, maxHeight: this.itemWrap ? p : this.lineHeight, angle: 0, text: q.text, horizontalAlign: "left", fontSize: this.fontSize, fontFamily: this.fontFamily, fontWeight: this.fontWeight, fontColor: this.fontColor, fontStyle: this.fontStyle, textBaseline: "middle" });
                            q.textBlock.measureText();
                            null !== this.itemWidth && (q.textBlock.width = this.itemWidth - (u + l + ("line" === q.chartType || "spline" === q.chartType || "stepLine" ===
                                q.chartType ? 2 * 0.1 * this.lineHeight : 0)));
                            if (!r || r.width + Math.round(q.textBlock.width + u + l + (0 === r.width ? 0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0)) > f) r = { items: [], width: 0 }, h.push(r), this.height += g, g = 0;
                            g = Math.max(g, q.textBlock.height)
                        } else q.textBlock = new ia(this.ctx, {
                            x: 0,
                            y: 0,
                            maxWidth: z,
                            maxHeight: !0 === this.itemWrap ? p : 1.5 * this.fontSize,
                            angle: 0,
                            text: q.text,
                            horizontalAlign: "left",
                            fontSize: this.fontSize,
                            fontFamily: this.fontFamily,
                            fontWeight: this.fontWeight,
                            fontColor: this.fontColor,
                            fontStyle: this.fontStyle,
                            textBaseline: "middle"
                        }), q.textBlock.measureText(), null !== this.itemWidth && (q.textBlock.width = this.itemWidth - (u + l + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0))), this.height < p - this.lineHeight ? (r = { items: [], width: 0 }, h.push(r)) : (r = h[x], x = (x + 1) % h.length), this.height += q.textBlock.height;
                        q.textBlock.x = r.width;
                        q.textBlock.y = 0;
                        r.width += Math.round(q.textBlock.width + u + l + (0 === r.width ?
                            0 : this.horizontalSpacing) + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0));
                        r.items.push(q);
                        this.width = Math.max(r.width, this.width);
                        m = q.textBlock.width + (u + l + ("line" === q.chartType || "spline" === q.chartType || "stepLine" === q.chartType ? 2 * 0.1 * this.lineHeight : 0))
                    }
                }
                this.itemWidth = m;
                this.height = !1 === this.itemWrap ? h.length * this.lineHeight : this.height + g;
                this.height = Math.min(p, this.height);
                this.width = Math.min(f, this.width)
            }
            "top" === this.verticalAlign ? (e = "left" === this.horizontalAlign ?
                d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2, b = d.y1) : "center" === this.verticalAlign ? (e = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2, b = d.y1 + d.height / 2 - this.height / 2) : "bottom" === this.verticalAlign && (e = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2, b = d.y2 - this.height);
            this.items = k;
            for (n = 0; n < this.items.length; n++) q = k[n], q.id = ++this.chart._eventManager.lastObjectId,
                this.chart._eventManager.objectMap[q.id] = { id: q.id, objectType: "legendItem", legendItemIndex: n, dataSeriesIndex: q.dataSeriesIndex, dataPointIndex: q.dataPointIndex };
            this.markerSize = u;
            this.rows = h;
            0 < k.length && a.layoutManager.registerSpace(c, { width: this.width + 2 + 2, height: this.height + 5 + 5 });
            this.bounds = { x1: e, y1: b, x2: e + this.width, y2: b + this.height }
        };
        E.prototype.render = function() {
            var a = this.bounds.x1,
                d = this.bounds.y1,
                c = this.markerMargin,
                b = this.maxWidth,
                e = this.maxHeight,
                f = this.markerSize,
                p = this.rows;
            (0 < this.borderThickness &&
                this.borderColor || this.backgroundColor) && this.ctx.roundRect(a, d, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
            for (var l = 0, k = 0; k < p.length; k++) {
                for (var h = p[k], n = 0, r = 0; r < h.items.length; r++) {
                    var q = h.items[r],
                        g = q.textBlock.x + a + (0 === r ? 0.2 * f : this.horizontalSpacing),
                        m = d + l,
                        s = g;
                    this.chart.data[q.dataSeriesIndex].visible || (this.ctx.globalAlpha = 0.5);
                    this.ctx.save();
                    this.ctx.beginPath();
                    this.ctx.rect(a, d, b, Math.max(e - e % this.lineHeight, 0));
                    this.ctx.clip();
                    if ("line" === q.chartType || "stepLine" === q.chartType || "spline" === q.chartType) this.ctx.strokeStyle = q.lineColor, this.ctx.lineWidth = Math.ceil(this.lineHeight / 8), this.ctx.beginPath(), this.ctx.moveTo(g - 0.1 * this.lineHeight, m + this.lineHeight / 2), this.ctx.lineTo(g + 0.85 * this.lineHeight, m + this.lineHeight / 2), this.ctx.stroke(), s -= 0.1 * this.lineHeight;
                    if ("error" === q.chartType) {
                        this.ctx.strokeStyle = this.errorMarkerColor[0];
                        this.ctx.lineWidth = f / 8;
                        this.ctx.beginPath();
                        var u = g - 0.08 * this.lineHeight + 0.1 * this.lineHeight,
                            t = m + 0.15 * this.lineHeight,
                            x = 0.7 * this.lineHeight,
                            v = x + 0.02 * this.lineHeight;
                        this.ctx.moveTo(u, t);
                        this.ctx.lineTo(u + x, t);
                        this.ctx.stroke();
                        this.ctx.beginPath();
                        this.ctx.moveTo(u + x / 2, t);
                        this.ctx.lineTo(u + x / 2, t + v);
                        this.ctx.stroke();
                        this.ctx.beginPath();
                        this.ctx.moveTo(u, t + v);
                        this.ctx.lineTo(u + x, t + v);
                        this.ctx.stroke();
                        this.errorMarkerColor.shift()
                    }
                    X.drawMarker(g + f / 2, m + this.lineHeight / 2, this.ctx, q.markerType, "error" === q.chartType || "line" === q.chartType || "spline" === q.chartType ? q.markerSize / 2 : q.markerSize, q.markerColor,
                        q.markerBorderColor, q.markerBorderThickness);
                    q.textBlock.x = g + c + f;
                    if ("line" === q.chartType || "stepLine" === q.chartType || "spline" === q.chartType) q.textBlock.x += 0.1 * this.lineHeight;
                    q.textBlock.y = Math.round(m + this.lineHeight / 2);
                    q.textBlock.render(!0);
                    this.ctx.restore();
                    n = 0 < r ? Math.max(n, q.textBlock.height) : q.textBlock.height;
                    this.chart.data[q.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1);
                    g = P(q.id);
                    this.ghostCtx.fillStyle = g;
                    this.ghostCtx.beginPath();
                    this.ghostCtx.fillRect(s, q.textBlock.y - this.lineHeight /
                        2, q.textBlock.x + q.textBlock.width - s, q.textBlock.height);
                    q.x1 = this.chart._eventManager.objectMap[q.id].x1 = s;
                    q.y1 = this.chart._eventManager.objectMap[q.id].y1 = q.textBlock.y - this.lineHeight / 2;
                    q.x2 = this.chart._eventManager.objectMap[q.id].x2 = q.textBlock.x + q.textBlock.width;
                    q.y2 = this.chart._eventManager.objectMap[q.id].y2 = q.textBlock.y + q.textBlock.height - this.lineHeight / 2
                }
                l += n
            }
        };
        na(I, W);
        I.prototype.getDefaultAxisPlacement = function() {
            var a = this.type;
            if ("column" === a || "line" === a || "stepLine" === a || "spline" ===
                a || "area" === a || "stepArea" === a || "splineArea" === a || "stackedColumn" === a || "stackedLine" === a || "bubble" === a || "scatter" === a || "stackedArea" === a || "stackedColumn100" === a || "stackedLine100" === a || "stackedArea100" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a) return "normal";
            if ("bar" === a || "stackedBar" === a || "stackedBar100" === a || "rangeBar" === a) return "xySwapped";
            if ("pie" === a || "doughnut" === a || "funnel" === a || "pyramid" === a) return "none";
            "error" !== a && window.console.log("Unknown Chart Type: " + a);
            return null
        };
        I.getDefaultLegendMarker = function(a) {
            if ("column" === a || "stackedColumn" === a || "stackedLine" === a || "bar" === a || "stackedBar" === a || "stackedBar100" === a || "bubble" === a || "scatter" === a || "stackedColumn100" === a || "stackedLine100" === a || "stepArea" === a || "candlestick" === a || "ohlc" === a || "rangeColumn" === a || "rangeBar" === a || "rangeArea" === a || "rangeSplineArea" === a || "boxAndWhisker" === a || "waterfall" === a) return "square";
            if ("line" === a || "stepLine" === a || "spline" ===
                a || "pie" === a || "doughnut" === a) return "circle";
            if ("area" === a || "splineArea" === a || "stackedArea" === a || "stackedArea100" === a || "funnel" === a || "pyramid" === a) return "triangle";
            if ("error" === a) return "none";
            window.console.log("Unknown Chart Type: " + a);
            return null
        };
        I.prototype.getDataPointAtX = function(a, d) {
            if (!this.dataPoints || 0 === this.dataPoints.length) return null;
            var c = { dataPoint: null, distance: Infinity, index: NaN },
                b = null,
                e = 0,
                f = 0,
                p = 1,
                l = Infinity,
                k = 0,
                h = 0,
                n = 0;
            "none" !== this.chart.plotInfo.axisPlacement && (this.axisX.logarithmic ?
                (n = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x), n = 1 < n ? Math.min(Math.max((this.dataPoints.length - 1) / n * Math.log(a / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0) : (n = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, n = 0 < n ? Math.min(Math.max((this.dataPoints.length - 1) / n * (a - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0));
            for (;;) {
                f = 0 < p ? n + e : n - e;
                if (0 <= f && f < this.dataPoints.length) {
                    var b = this.dataPoints[f],
                        r = this.axisX.logarithmic ? b.x > a ? b.x / a : a / b.x :
                        Math.abs(b.x - a);
                    r < c.distance && (c.dataPoint = b, c.distance = r, c.index = f);
                    b = r;
                    b <= l ? l = b : 0 < p ? k++ : h++;
                    if (1E3 < k && 1E3 < h) break
                } else if (0 > n - e && n + e >= this.dataPoints.length) break; - 1 === p ? (e++, p = 1) : p = -1
            }
            return d || (c.dataPoint.x.getTime ? c.dataPoint.x.getTime() : c.dataPoint.x) !== (a.getTime ? a.getTime() : a) ? d && null !== c.dataPoint ? c : null : c
        };
        I.prototype.getDataPointAtXY = function(a, d, c) {
            if (!this.dataPoints || 0 === this.dataPoints.length || a < this.chart.plotArea.x1 || a > this.chart.plotArea.x2 || d < this.chart.plotArea.y1 || d > this.chart.plotArea.y2) return null;
            c = c || !1;
            var b = [],
                e = 0,
                f = 0,
                p = 1,
                l = !1,
                k = Infinity,
                h = 0,
                n = 0,
                r = 0;
            if ("none" !== this.chart.plotInfo.axisPlacement)
                if (r = (this.chart.axisX[0] ? this.chart.axisX[0] : this.chart.axisX2[0]).getXValueAt({ x: a, y: d }), this.axisX.logarithmic) var q = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x),
                    r = 1 < q ? Math.min(Math.max((this.dataPoints.length - 1) / q * Math.log(r / this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
                else q = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x, r = 0 < q ? Math.min(Math.max((this.dataPoints.length -
                    1) / q * (r - this.dataPoints[0].x) >> 0, 0), this.dataPoints.length) : 0;
            for (;;) {
                f = 0 < p ? r + e : r - e;
                if (0 <= f && f < this.dataPoints.length) {
                    var q = this.chart._eventManager.objectMap[this.dataPointIds[f]],
                        g = this.dataPoints[f],
                        m = null;
                    if (q) {
                        switch (this.type) {
                            case "column":
                            case "stackedColumn":
                            case "stackedColumn100":
                            case "bar":
                            case "stackedBar":
                            case "stackedBar100":
                            case "rangeColumn":
                            case "rangeBar":
                            case "waterfall":
                            case "error":
                                a >= q.x1 && (a <= q.x2 && d >= q.y1 && d <= q.y2) && (b.push({
                                    dataPoint: g,
                                    dataPointIndex: f,
                                    dataSeries: this,
                                    distance: Math.min(Math.abs(q.x1 -
                                        a), Math.abs(q.x2 - a), Math.abs(q.y1 - d), Math.abs(q.y2 - d))
                                }), l = !0);
                                break;
                            case "line":
                            case "stepLine":
                            case "spline":
                            case "area":
                            case "stepArea":
                            case "stackedArea":
                            case "stackedArea100":
                            case "splineArea":
                            case "scatter":
                                var s = la("markerSize", g, this) || 4,
                                    u = c ? 20 : s,
                                    m = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - d, 2));
                                m <= u && b.push({ dataPoint: g, dataPointIndex: f, dataSeries: this, distance: m });
                                q = Math.abs(q.x1 - a);
                                q <= k ? k = q : 0 < p ? h++ : n++;
                                m <= s / 2 && (l = !0);
                                break;
                            case "rangeArea":
                            case "rangeSplineArea":
                                s = la("markerSize", g, this) ||
                                    4;
                                u = c ? 20 : s;
                                m = Math.min(Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - d, 2)), Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y2 - d, 2)));
                                m <= u && b.push({ dataPoint: g, dataPointIndex: f, dataSeries: this, distance: m });
                                q = Math.abs(q.x1 - a);
                                q <= k ? k = q : 0 < p ? h++ : n++;
                                m <= s / 2 && (l = !0);
                                break;
                            case "bubble":
                                s = q.size;
                                m = Math.sqrt(Math.pow(q.x1 - a, 2) + Math.pow(q.y1 - d, 2));
                                m <= s / 2 && (b.push({ dataPoint: g, dataPointIndex: f, dataSeries: this, distance: m }), l = !0);
                                break;
                            case "pie":
                            case "doughnut":
                                s = q.center;
                                u = "doughnut" === this.type ? q.percentInnerRadius * q.radius :
                                    0;
                                m = Math.sqrt(Math.pow(s.x - a, 2) + Math.pow(s.y - d, 2));
                                m < q.radius && m > u && (m = Math.atan2(d - s.y, a - s.x), 0 > m && (m += 2 * Math.PI), m = Number(((180 * (m / Math.PI) % 360 + 360) % 360).toFixed(12)), s = Number(((180 * (q.startAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), u = Number(((180 * (q.endAngle / Math.PI) % 360 + 360) % 360).toFixed(12)), 0 === u && 1 < q.endAngle && (u = 360), s >= u && 0 !== g.y && (u += 360, m < s && (m += 360)), m > s && m < u && (b.push({ dataPoint: g, dataPointIndex: f, dataSeries: this, distance: 0 }), l = !0));
                                break;
                            case "funnel":
                            case "pyramid":
                                m = q.funnelSection;
                                d > m.y1 && d < m.y4 && (m.y6 ? d > m.y6 ? (f = m.x6 + (m.x5 - m.x6) / (m.y5 - m.y6) * (d - m.y6), m = m.x3 + (m.x4 - m.x3) / (m.y4 - m.y3) * (d - m.y3)) : (f = m.x1 + (m.x6 - m.x1) / (m.y6 - m.y1) * (d - m.y1), m = m.x2 + (m.x3 - m.x2) / (m.y3 - m.y2) * (d - m.y2)) : (f = m.x1 + (m.x4 - m.x1) / (m.y4 - m.y1) * (d - m.y1), m = m.x2 + (m.x3 - m.x2) / (m.y3 - m.y2) * (d - m.y2)), a > f && a < m && (b.push({ dataPoint: g, dataPointIndex: q.dataPointIndex, dataSeries: this, distance: 0 }), l = !0));
                                break;
                            case "boxAndWhisker":
                                if (a >= q.x1 - q.borderThickness / 2 && a <= q.x2 + q.borderThickness / 2 && d >= q.y4 - q.borderThickness / 2 && d <= q.y1 + q.borderThickness /
                                    2 || Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && d >= q.y1 && d <= q.y4) b.push({ dataPoint: g, dataPointIndex: f, dataSeries: this, distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - d), Math.abs(q.y3 - d)) }), l = !0;
                                break;
                            case "candlestick":
                                if (a >= q.x1 - q.borderThickness / 2 && a <= q.x2 + q.borderThickness / 2 && d >= q.y2 - q.borderThickness / 2 && d <= q.y3 + q.borderThickness / 2 || Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && d >= q.y1 && d <= q.y4) b.push({
                                    dataPoint: g,
                                    dataPointIndex: f,
                                    dataSeries: this,
                                    distance: Math.min(Math.abs(q.x1 - a),
                                        Math.abs(q.x2 - a), Math.abs(q.y2 - d), Math.abs(q.y3 - d))
                                }), l = !0;
                                break;
                            case "ohlc":
                                if (Math.abs(q.x2 - a + q.x1 - a) < q.borderThickness && d >= q.y2 && d <= q.y3 || a >= q.x1 && a <= (q.x2 + q.x1) / 2 && d >= q.y1 - q.borderThickness / 2 && d <= q.y1 + q.borderThickness / 2 || a >= (q.x1 + q.x2) / 2 && a <= q.x2 && d >= q.y4 - q.borderThickness / 2 && d <= q.y4 + q.borderThickness / 2) b.push({ dataPoint: g, dataPointIndex: f, dataSeries: this, distance: Math.min(Math.abs(q.x1 - a), Math.abs(q.x2 - a), Math.abs(q.y2 - d), Math.abs(q.y3 - d)) }), l = !0
                        }
                        if (l || 1E3 < h && 1E3 < n) break
                    }
                } else if (0 > r - e && r + e >=
                    this.dataPoints.length) break; - 1 === p ? (e++, p = 1) : p = -1
            }
            a = null;
            for (d = 0; d < b.length; d++) a ? b[d].distance <= a.distance && (a = b[d]) : a = b[d];
            return a
        };
        I.prototype.getMarkerProperties = function(a, d, c, b) {
            var e = this.dataPoints;
            return {
                x: d,
                y: c,
                ctx: b,
                type: e[a].markerType ? e[a].markerType : this.markerType,
                size: e[a].markerSize ? e[a].markerSize : this.markerSize,
                color: e[a].markerColor ? e[a].markerColor : this.markerColor ? this.markerColor : e[a].color ? e[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length],
                borderColor: e[a].markerBorderColor ?
                    e[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null,
                borderThickness: e[a].markerBorderThickness ? e[a].markerBorderThickness : this.markerBorderThickness ? this.markerBorderThickness : null
            }
        };
        na(D, W);
        D.prototype.createExtraLabelsForLog = function(a) {
            a = (a || 0) + 1;
            if (!(5 < a)) {
                var d = this.logLabelValues[0] || this.intervalStartPosition;
                if (Math.log(this.range) / Math.log(d / this.viewportMinimum) < this.noTicks - 1) {
                    for (var c = D.getNiceNumber((d - this.viewportMinimum) / Math.min(Math.max(2, this.noTicks - this.logLabelValues.length),
                            3), !0), b = Math.ceil(this.viewportMinimum / c) * c; b < d; b += c) b < this.viewportMinimum || this.logLabelValues.push(b);
                    this.logLabelValues.sort(Oa);
                    this.createExtraLabelsForLog(a)
                }
            }
        };
        D.prototype.createLabels = function() {
            var a, d, c = 0,
                b = 0,
                e, f = 0,
                p = 0,
                b = 0,
                b = this.interval,
                l = 0,
                k, h = 0.6 * this.chart.height,
                n;
            a = !1;
            var r = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
                q = r.length ? s(this.scaleBreaks.firstBreakIndex) ? 0 : this.scaleBreaks.firstBreakIndex : 0;
            if ("axisX" !== this.type || "dateTime" !== this.valueType || this.logarithmic) {
                e =
                    this.viewportMaximum;
                if (this.labels) {
                    a = Math.ceil(b);
                    for (var b = Math.ceil(this.intervalStartPosition), g = !1, c = b; c < this.viewportMaximum; c += a)
                        if (this.labels[c]) g = !0;
                        else { g = !1; break }
                    g && (this.interval = a, this.intervalStartPosition = b)
                }
                if (this.logarithmic && !this.equidistantInterval)
                    for (this.logLabelValues || (this.logLabelValues = [], this.createExtraLabelsForLog()), b = 0, g = q; b < this.logLabelValues.length; b++)
                        if (c = this.logLabelValues[b], c < this.viewportMinimum) b++;
                        else {
                            for (; g < r.length && c > r[g].endValue; g++);
                            a = g < r.length &&
                                c >= r[g].startValue && c <= r[g].endValue;
                            n = c;
                            a || (a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.options, value: n, label: this.labels[n] ? this.labels[n] : null }) : "axisX" === this.type && this.labels[n] ? this.labels[n] : ea(n, this.valueFormatString, this.chart._cultureInfo), a = new ia(this.ctx, {
                                x: 0,
                                y: 0,
                                maxWidth: f,
                                maxHeight: p,
                                angle: this.labelAngle,
                                text: this.prefix + a + this.suffix,
                                backgroundColor: this.labelBackgroundColor,
                                borderColor: this.labelBorderColor,
                                cornerRadius: this.labelCornerRadius,
                                textAlign: this.labelTextAlign,
                                fontSize: this.labelFontSize,
                                fontFamily: this.labelFontFamily,
                                fontWeight: this.labelFontWeight,
                                fontColor: this.labelFontColor,
                                fontStyle: this.labelFontStyle,
                                textBaseline: "middle",
                                borderThickness: 0
                            }), this._labels.push({ position: n, textBlock: a, effectiveHeight: null }))
                        }
                g = q;
                for (c = this.intervalStartPosition; c <= e; c = parseFloat(1E-12 > this.interval ? this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase, this.interval) : c + this.interval : (this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase,
                        this.interval) : c + this.interval).toFixed(12))) {
                    for (; g < r.length && c > r[g].endValue; g++);
                    a = g < r.length && c >= r[g].startValue && c <= r[g].endValue;
                    n = c;
                    a || (a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.options, value: n, label: this.labels[n] ? this.labels[n] : null }) : "axisX" === this.type && this.labels[n] ? this.labels[n] : ea(n, this.valueFormatString, this.chart._cultureInfo), a = new ia(this.ctx, {
                        x: 0,
                        y: 0,
                        maxWidth: f,
                        maxHeight: p,
                        angle: this.labelAngle,
                        text: this.prefix + a + this.suffix,
                        textAlign: this.labelTextAlign,
                        backgroundColor: this.labelBackgroundColor,
                        borderColor: this.labelBorderColor,
                        borderThickness: this.labelBorderThickness,
                        cornerRadius: this.labelCornerRadius,
                        fontSize: this.labelFontSize,
                        fontFamily: this.labelFontFamily,
                        fontWeight: this.labelFontWeight,
                        fontColor: this.labelFontColor,
                        fontStyle: this.labelFontStyle,
                        textBaseline: "middle"
                    }), this._labels.push({ position: n, textBlock: a, effectiveHeight: null }))
                }
            } else
                for (this.intervalStartPosition = this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType,
                        this.interval), e = Ua(new Date(this.viewportMaximum), this.interval, this.intervalType), g = q, c = this.intervalStartPosition; c < e; Ua(c, b, this.intervalType)) {
                    for (a = c.getTime(); g < r.length && a > r[g].endValue; g++);
                    n = a;
                    a = g < r.length && a >= r[g].startValue && a <= r[g].endValue;
                    a || (a = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.options, value: new Date(n), label: this.labels[n] ? this.labels[n] : null }) : "axisX" === this.type && this.labels[n] ? this.labels[n] : za(n, this.valueFormatString, this.chart._cultureInfo),
                        a = new ia(this.ctx, { x: 0, y: 0, maxWidth: f, backgroundColor: this.labelBackgroundColor, borderColor: this.labelBorderColor, borderThickness: this.labelBorderThickness, cornerRadius: this.labelCornerRadius, maxHeight: p, angle: this.labelAngle, text: this.prefix + a + this.suffix, textAlign: this.labelTextAlign, fontSize: this.labelFontSize, fontFamily: this.labelFontFamily, fontWeight: this.labelFontWeight, fontColor: this.labelFontColor, fontStyle: this.labelFontStyle, textBaseline: "middle" }), this._labels.push({
                            position: n,
                            textBlock: a,
                            effectiveHeight: null,
                            breaksLabelType: void 0
                        }))
                }
            if ("bottom" === this._position || "top" === this._position) l = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.width * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.width / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) *
                Q[this.intervalType + "Duration"] * this.interval, f = "undefined" === typeof this.options.labelMaxWidth ? 0.5 * this.chart.width >> 0 : this.options.labelMaxWidth, this.chart.panEnabled || (p = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize);
            else if ("left" === this._position || "right" === this._position) l = this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length ? this.lineCoordinates.height * Math.log(Math.min(this._labels[this._labels.length - 1].position /
                    this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position)) / Math.log(this.range) : this.lineCoordinates.height / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range)) * Q[this.intervalType + "Duration"] * this.interval, this.chart.panEnabled || (f = "undefined" === typeof this.options.labelMaxWidth ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth), p = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >>
                0 : 1.5 * this.labelFontSize;
            for (b = 0; b < this._labels.length; b++) {
                a = this._labels[b].textBlock;
                a.maxWidth = f;
                a.maxHeight = p;
                var m = a.measureText();
                k = m.height
            }
            e = [];
            q = r = 0;
            if (this.labelAutoFit || this.options.labelAutoFit)
                if (s(this.labelAngle) || (this.labelAngle = (this.labelAngle % 360 + 360) % 360, 90 < this.labelAngle && 270 > this.labelAngle ? this.labelAngle -= 180 : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360)), "bottom" === this._position || "top" === this._position)
                    if (f = 0.9 * l >> 0, q = 0, !this.chart.panEnabled && 1 <=
                        this._labels.length) {
                        this.sessionVariables.labelFontSize = this.labelFontSize;
                        this.sessionVariables.labelMaxWidth = f;
                        this.sessionVariables.labelMaxHeight = p;
                        this.sessionVariables.labelAngle = this.labelAngle;
                        this.sessionVariables.labelWrap = this.labelWrap;
                        for (c = 0; c < this._labels.length; c++)
                            if (!this._labels[c].breaksLabelType) {
                                a = this._labels[c].textBlock;
                                for (var v, g = a.text.split(" "), b = 0; b < g.length; b++) n = g[b], this.ctx.font = a.fontStyle + " " + a.fontWeight + " " + a.fontSize + "px " + a.fontFamily, n = this.ctx.measureText(n),
                                    n.width > q && (v = c, q = n.width)
                            }
                        c = 0;
                        for (c = this.intervalStartPosition < this.viewportMinimum ? 1 : 0; c < this._labels.length; c++)
                            if (!this._labels[c].breaksLabelType) {
                                a = this._labels[c].textBlock;
                                m = a.measureText();
                                for (g = c + 1; g < this._labels.length; g++)
                                    if (!this._labels[g].breaksLabelType) {
                                        d = this._labels[g].textBlock;
                                        d = d.measureText();
                                        break
                                    }
                                e.push(a.height);
                                this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                                Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                                Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                                b = f * Math.sin(Math.PI /
                                    180 * Math.abs(this.labelAngle)) + (p - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                                if (s(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle)
                                    if (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? p : Math.min((b - f * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), b), n = (h - (k + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(-25))) / Math.sin(Math.PI / 180 * Math.abs(-25)), !s(this.options.labelWrap)) this.labelWrap ? s(this.options.labelMaxWidth) ?
                                        (this.sessionVariables.labelMaxWidth = Math.min(Math.max(f, q), n), this.sessionVariables.labelWrap = this.labelWrap, d && m.width + d.width >> 0 > 2 * f && (this.sessionVariables.labelAngle = -25)) : (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > f ? -25 : this.sessionVariables.labelAngle) : s(this.options.labelMaxWidth) ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight =
                                            p, this.sessionVariables.labelMaxWidth = f, d && m.width + d.width >> 0 > 2 * f && (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = n)) : (this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > f ? -25 : this.sessionVariables.labelAngle, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = p, this.sessionVariables.labelWrap = this.labelWrap);
                                    else {
                                        if (s(this.options.labelWrap))
                                            if (!s(this.options.labelMaxWidth)) this.options.labelMaxWidth < f ?
                                                (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = b) : (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth, this.sessionVariables.labelMaxHeight = p);
                                            else if (!s(d))
                                            if (b = m.width + d.width >> 0, g = this.labelFontSize, q < f) b - 2 * f > r && (r = b - 2 * f, b >= 2 * f && b < 2.2 * f ? (this.sessionVariables.labelMaxWidth = f, s(this.options.labelFontSize) && 12 < g && (g = Math.floor(12 / 13 * g), a.measureText()), this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ?
                                                g : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : b >= 2.2 * f && b < 2.8 * f ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = n, this.sessionVariables.labelFontSize = g) : b >= 2.8 * f && b < 3.2 * f ? (this.sessionVariables.labelMaxWidth = Math.max(f, q), this.sessionVariables.labelWrap = !0, s(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ?
                                                g : this.options.labelFontSize, this.sessionVariables.labelAngle = this.labelAngle) : b >= 3.2 * f && b < 3.6 * f ? (this.sessionVariables.labelAngle = -25, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelMaxWidth = n, this.sessionVariables.labelFontSize = this.labelFontSize) : b > 3.6 * f && b < 5 * f ? (s(this.options.labelFontSize) && 12 < g && (g = Math.floor(12 / 13 * g), a.measureText()), this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? g : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = n) : b > 5 * f && (this.sessionVariables.labelWrap = !0, this.sessionVariables.labelMaxWidth = f, this.sessionVariables.labelFontSize = g, this.sessionVariables.labelMaxHeight = p, this.sessionVariables.labelAngle = this.labelAngle));
                                            else if (v === c && (0 === v && q + this._labels[v + 1].textBlock.measureText().width - 2 * f > r || v === this._labels.length - 1 && q + this._labels[v - 1].textBlock.measureText().width - 2 * f > r || 0 < v && v < this._labels.length - 1 && q + this._labels[v + 1].textBlock.measureText().width - 2 * f > r &&
                                                q + this._labels[v - 1].textBlock.measureText().width - 2 * f > r)) r = 0 === v ? q + this._labels[v + 1].textBlock.measureText().width - 2 * f : q + this._labels[v - 1].textBlock.measureText().width - 2 * f, this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? g : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelAngle = -25, this.sessionVariables.labelMaxWidth = n;
                                        else if (0 === r)
                                            for (this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? g : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(f, q), n), m = a.measureText(), b < this._labels.length - 1 && (g = b + 1, d = this._labels[g].textBlock, d.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(f, q), n), d = d.measureText(), m.width + d.width >> 0 > 2 * f && (this.sessionVariables.labelAngle = -25))
                                    }
                                else(this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? p : Math.min((b - f * Math.cos(Math.PI /
                                    180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)), b), n = 0 != this.labelAngle ? (h - (k + a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) : f, this.sessionVariables.labelMaxHeight = p = this.labelWrap ? (h - n * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) : 1.5 * this.labelFontSize, s(this.options.labelWrap)) ? s(this.options.labelWrap) && (this.labelWrap && !s(this.options.labelMaxWidth) ?
                                    (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : n, this.sessionVariables.labelMaxHeight = p) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = n, this.sessionVariables.labelMaxHeight = b < 0.9 * l ? 0.9 * l : b, this.sessionVariables.labelWrap = this.labelWrap)) : (this.options.labelWrap ? (this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ?
                                    this.options.labelMaxWidth : n) : (s(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : n, this.sessionVariables.labelWrap = this.labelWrap), this.sessionVariables.labelMaxHeight = p)
                            }
                        for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle = this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap,
                            a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText()
                    } else
                        for (c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = s(this.options.labelMaxWidth) ? s(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = f : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = s(this.options.labelFontSize) ? s(this.sessionVariables.labelFontSize) ? this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize :
                            this.options.labelFontSize, a.angle = this.labelAngle = s(this.options.labelAngle) ? s(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = s(this.options.labelWrap) ? s(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = s(this.sessionVariables.labelMaxHeight) ? this.sessionVariables.labelMaxHeight = p : this.sessionVariables.labelMaxHeight,
                            a.measureText();
            else if ("left" === this._position || "right" === this._position)
                if (f = s(this.options.labelMaxWidth) ? 0.3 * this.chart.width >> 0 : this.options.labelMaxWidth, p = "undefined" === typeof this.options.labelWrap || this.labelWrap ? 0.3 * this.chart.height >> 0 : 1.5 * this.labelFontSize, !this.chart.panEnabled && 1 <= this._labels.length) {
                    this.sessionVariables.labelFontSize = this.labelFontSize;
                    this.sessionVariables.labelMaxWidth = f;
                    this.sessionVariables.labelMaxHeight = p;
                    this.sessionVariables.labelAngle = s(this.sessionVariables.labelAngle) ?
                        0 : this.sessionVariables.labelAngle;
                    this.sessionVariables.labelWrap = this.labelWrap;
                    for (c = 0; c < this._labels.length; c++)
                        if (!this._labels[c].breaksLabelType) {
                            a = this._labels[c].textBlock;
                            m = a.measureText();
                            for (g = c + 1; g < this._labels.length; g++)
                                if (!this._labels[g].breaksLabelType) {
                                    d = this._labels[g].textBlock;
                                    d = d.measureText();
                                    break
                                }
                            e.push(a.height);
                            this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                            b = f * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (p - a.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                            Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                            Math.sin(Math.PI / 180 * Math.abs(this.labelAngle));
                            s(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle ? s(this.options.labelWrap) ? s(this.options.labelWrap) && (s(this.options.labelMaxWidth) ? s(d) || (l = m.height + d.height >> 0, l - 2 * p > q && (q = l - 2 * p, l >= 2 * p && l < 2.4 * p ? (s(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelMaxHeight = p, this.sessionVariables.labelFontSize =
                                s(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize) : l >= 2.4 * p && l < 2.8 * p ? (this.sessionVariables.labelMaxHeight = b, this.sessionVariables.labelFontSize = this.labelFontSize, this.sessionVariables.labelWrap = !0) : l >= 2.8 * p && l < 3.2 * p ? (this.sessionVariables.labelMaxHeight = p, this.sessionVariables.labelWrap = !0, s(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ?
                                this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelAngle = s(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : l >= 3.2 * p && l < 3.6 * p ? (this.sessionVariables.labelMaxHeight = b, this.sessionVariables.labelWrap = !0, this.sessionVariables.labelFontSize = this.labelFontSize) : l > 3.6 * p && l < 10 * p ? (s(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ?
                                this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxWidth = f, this.sessionVariables.labelMaxHeight = p, this.sessionVariables.labelAngle = s(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle) : l > 10 * p && l < 50 * p && (s(this.options.labelFontSize) && 12 < this.labelFontSize && (this.labelFontSize = Math.floor(12 / 13 * this.labelFontSize), a.measureText()), this.sessionVariables.labelFontSize = s(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize, this.sessionVariables.labelMaxHeight =
                                p, this.sessionVariables.labelMaxWidth = f, this.sessionVariables.labelAngle = s(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))) : (this.sessionVariables.labelMaxHeight = p, this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth)) : (this.sessionVariables.labelMaxWidth = this.labelWrap ? this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : this.labelMaxWidth ? this.options.labelMaxWidth ?
                                this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth : f, this.sessionVariables.labelMaxHeight = p) : (this.sessionVariables.labelAngle = this.labelAngle, this.sessionVariables.labelMaxWidth = 0 === this.labelAngle ? f : Math.min((b - p * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle))) / Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), p), s(this.options.labelWrap)) ? s(this.options.labelWrap) && (this.labelWrap && !s(this.options.labelMaxWidth) ? (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth >
                                this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap, this.sessionVariables.labelMaxHeight = b) : (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : f, this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? p : b, s(this.options.labelMaxWidth) && (this.sessionVariables.labelAngle = this.labelAngle))) : this.options.labelWrap ? (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? p : b, this.sessionVariables.labelWrap =
                                this.labelWrap, this.sessionVariables.labelMaxWidth = f) : (this.sessionVariables.labelMaxHeight = p, s(this.options.labelMaxWidth), this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth, this.sessionVariables.labelWrap = this.labelWrap)
                        }
                    for (b = 0; b < this._labels.length; b++) a = this._labels[b].textBlock, a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth, a.fontSize = this.labelFontSize = this.sessionVariables.labelFontSize, a.angle = this.labelAngle =
                        this.sessionVariables.labelAngle, a.wrap = this.labelWrap = this.sessionVariables.labelWrap, a.maxHeight = this.sessionVariables.labelMaxHeight, a.measureText()
                } else
                    for (c = 0; c < this._labels.length; c++) a = this._labels[c].textBlock, a.maxWidth = this.labelMaxWidth = s(this.options.labelMaxWidth) ? s(this.sessionVariables.labelMaxWidth) ? this.sessionVariables.labelMaxWidth = f : this.sessionVariables.labelMaxWidth : this.options.labelMaxWidth, a.fontSize = this.labelFontSize = s(this.options.labelFontSize) ? s(this.sessionVariables.labelFontSize) ?
                        this.sessionVariables.labelFontSize = this.labelFontSize : this.sessionVariables.labelFontSize : this.options.labelFontSize, a.angle = this.labelAngle = s(this.options.labelAngle) ? s(this.sessionVariables.labelAngle) ? this.sessionVariables.labelAngle = this.labelAngle : this.sessionVariables.labelAngle : this.labelAngle, a.wrap = this.labelWrap = s(this.options.labelWrap) ? s(this.sessionVariables.labelWrap) ? this.sessionVariables.labelWrap = this.labelWrap : this.sessionVariables.labelWrap : this.options.labelWrap, a.maxHeight = s(this.sessionVariables.labelMaxHeight) ?
                        this.sessionVariables.labelMaxHeight = p : this.sessionVariables.labelMaxHeight, a.measureText();
            for (c = 0; c < this.stripLines.length; c++) {
                var f = this.stripLines[c],
                    y;
                if ("outside" === f.labelPlacement) {
                    p = this.sessionVariables.labelMaxWidth;
                    if ("bottom" === this._position || "top" === this._position) y = s(f.options.labelWrap) ? this.sessionVariables.labelMaxHeight : f.labelWrap ? 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize;
                    if ("left" === this._position || "right" === this._position) y = s(f.options.labelWrap) ? this.sessionVariables.labelMaxHeight :
                        f.labelWrap ? 0.8 * this.chart.width >> 0 : 1.5 * this.labelFontSize;
                    s(f.labelBackgroundColor) && (f.labelBackgroundColor = "#EEEEEE")
                } else p = "bottom" === this._position || "top" === this._position ? 0.9 * this.chart.width >> 0 : 0.9 * this.chart.height >> 0, y = s(f.options.labelWrap) || f.labelWrap ? "bottom" === this._position || "top" === this._position ? 0.8 * this.chart.width >> 0 : 0.8 * this.chart.height >> 0 : 1.5 * this.labelFontSize, s(f.labelBackgroundColor) && (s(f.startValue) && 0 !== f.startValue ? f.labelBackgroundColor = u ? "transparent" : null : f.labelBackgroundColor =
                    "#EEEEEE");
                a = new ia(this.ctx, {
                    x: 0,
                    y: 0,
                    backgroundColor: f.labelBackgroundColor,
                    borderColor: f.labelBorderColor,
                    borderThickness: f.labelBorderThickness,
                    cornerRadius: f.labelCornerRadius,
                    maxWidth: f.options.labelMaxWidth ? f.options.labelMaxWidth : p,
                    maxHeight: y,
                    angle: this.labelAngle,
                    text: f.labelFormatter ? f.labelFormatter({ chart: this.chart, axis: this, stripLine: f }) : f.label,
                    textAlign: this.labelTextAlign,
                    fontSize: "outside" === f.labelPlacement ? f.options.labelFontSize ? f.labelFontSize : this.labelFontSize : f.labelFontSize,
                    fontFamily: "outside" === f.labelPlacement ? f.options.labelFontFamily ? f.labelFontFamily : this.labelFontFamily : f.labelFontFamily,
                    fontWeight: "outside" === f.labelPlacement ? f.options.labelFontWeight ? f.labelFontWeight : this.labelFontWeight : f.labelFontWeight,
                    fontColor: f.labelFontColor || f.color,
                    fontStyle: "outside" === f.labelPlacement ? f.options.labelFontStyle ? f.labelFontStyle : this.fontWeight : f.labelFontStyle,
                    textBaseline: "middle"
                });
                this._stripLineLabels.push({ position: f.value, textBlock: a, effectiveHeight: null, stripLine: f })
            }
        };
        D.prototype.createLabelsAndCalculateWidth = function() {
            var a = 0,
                d = 0;
            this._labels = [];
            this._stripLineLabels = [];
            var c = this.chart.isNavigator ? 0 : 5;
            if ("left" === this._position || "right" === this._position) {
                this.createLabels();
                if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index)
                    for (d = 0; d < this._labels.length; d++) {
                        var b = this._labels[d].textBlock,
                            e = b.measureText(),
                            f = 0,
                            f = 0 === this.labelAngle ? e.width : e.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - b.fontSize / 2) * Math.sin(Math.PI /
                                180 * Math.abs(this.labelAngle));
                        a < f && (a = f);
                        this._labels[d].effectiveWidth = f
                    }
                for (d = 0; d < this._stripLineLabels.length; d++) "outside" === this._stripLineLabels[d].stripLine.labelPlacement && (this._stripLineLabels[d].stripLine.value >= this.viewportMinimum && this._stripLineLabels[d].stripLine.value <= this.viewportMaximum) && (b = this._stripLineLabels[d].textBlock, e = b.measureText(), f = 0 === this.labelAngle ? e.width : e.width * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - b.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)),
                    a < f && (a = f), this._stripLineLabels[d].effectiveWidth = f)
            }
            return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 : this.tickLength) + c
        };
        D.prototype.createLabelsAndCalculateHeight = function() {
            var a = 0;
            this._labels = [];
            this._stripLineLabels = [];
            var d, c = 0,
                b = this.chart.isNavigator ? 0 : 5;
            if ("bottom" === this._position || "top" === this._position) {
                this.createLabels();
                if ("inside" != this.labelPlacement || "inside" === this.labelPlacement && 0 < this._index)
                    for (c = 0; c < this._labels.length; c++) {
                        d =
                            this._labels[c].textBlock;
                        var e = d.measureText(),
                            f = 0,
                            f = 0 === this.labelAngle ? e.height : e.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - d.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle));
                        a < f && (a = f);
                        this._labels[c].effectiveHeight = f
                    }
                for (c = 0; c < this._stripLineLabels.length; c++) "outside" === this._stripLineLabels[c].stripLine.labelPlacement && (this._stripLineLabels[c].stripLine.value >= this.viewportMinimum && this._stripLineLabels[c].stripLine.value <= this.viewportMaximum) && (d = this._stripLineLabels[c].textBlock,
                    e = d.measureText(), f = 0 === this.labelAngle ? e.height : e.width * Math.sin(Math.PI / 180 * Math.abs(this.labelAngle)) + (e.height - d.fontSize / 2) * Math.cos(Math.PI / 180 * Math.abs(this.labelAngle)), a < f && (a = f), this._stripLineLabels[c].effectiveHeight = f)
            }
            return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? 0 : this.tickLength) + b
        };
        D.setLayout = function(a, d, c, b, e, f) {
            var p, l, k, h, n = a[0] ? a[0].chart : d[0].chart,
                r = n.isNavigator ? 0 : 10,
                q = n._axes;
            if (a && 0 < a.length)
                for (var g = 0; g < a.length; g++) a[g] &&
                    a[g].calculateAxisParameters();
            if (d && 0 < d.length)
                for (g = 0; g < d.length; g++) d[g].calculateAxisParameters();
            if (c && 0 < c.length)
                for (g = 0; g < c.length; g++) c[g].calculateAxisParameters();
            if (b && 0 < b.length)
                for (g = 0; g < b.length; g++) b[g].calculateAxisParameters();
            for (g = 0; g < q.length; g++)
                if (q[g] && q[g].scaleBreaks && q[g].scaleBreaks._appliedBreaks.length)
                    for (var m = q[g].scaleBreaks._appliedBreaks, u = 0; u < m.length && !(m[u].startValue > q[g].viewportMaximum); u++) m[u].endValue < q[g].viewportMinimum || (s(q[g].scaleBreaks.firstBreakIndex) &&
                        (q[g].scaleBreaks.firstBreakIndex = u), m[u].startValue >= q[g].viewPortMinimum && (q[g].scaleBreaks.lastBreakIndex = u));
            for (var v = u = 0, t = 0, x = 0, z = 0, y = 0, B = 0, C, D, E = l = 0, I, J, L, m = I = J = L = !1, g = 0; g < q.length; g++) q[g] && q[g].title && (q[g]._titleTextBlock = new ia(q[g].ctx, {
                text: q[g].title,
                horizontalAlign: "center",
                fontSize: q[g].titleFontSize,
                fontFamily: q[g].titleFontFamily,
                fontWeight: q[g].titleFontWeight,
                fontColor: q[g].titleFontColor,
                fontStyle: q[g].titleFontStyle,
                borderColor: q[g].titleBorderColor,
                borderThickness: q[g].titleBorderThickness,
                backgroundColor: q[g].titleBackgroundColor,
                cornerRadius: q[g].titleCornerRadius,
                textBaseline: "top"
            }));
            for (g = 0; g < q.length; g++)
                if (q[g].title) switch (q[g]._position) {
                    case "left":
                        q[g]._titleTextBlock.maxWidth = q[g].titleMaxWidth || f.height;
                        q[g]._titleTextBlock.maxHeight = q[g].titleWrap ? 0.8 * f.width : 1.5 * q[g].titleFontSize;
                        q[g]._titleTextBlock.angle = -90;
                        break;
                    case "right":
                        q[g]._titleTextBlock.maxWidth = q[g].titleMaxWidth || f.height;
                        q[g]._titleTextBlock.maxHeight = q[g].titleWrap ? 0.8 * f.width : 1.5 * q[g].titleFontSize;
                        q[g]._titleTextBlock.angle = 90;
                        break;
                    default:
                        q[g]._titleTextBlock.maxWidth = q[g].titleMaxWidth || f.width, q[g]._titleTextBlock.maxHeight = q[g].titleWrap ? 0.8 * f.height : 1.5 * q[g].titleFontSize, q[g]._titleTextBlock.angle = 0
                }
            if ("normal" === e) {
                for (var x = [], z = [], y = [], B = [], M = [], N = [], P = [], Q = []; 4 > u;) {
                    var G = 0,
                        V = 0,
                        T = 0,
                        W = 0,
                        Y = e = 0,
                        K = 0,
                        $ = 0,
                        U = 0,
                        X = 0,
                        O = 0,
                        aa = 0;
                    if (c && 0 < c.length)
                        for (y = [], g = O = 0; g < c.length; g++) y.push(Math.ceil(c[g] ? c[g].createLabelsAndCalculateWidth() : 0)), O += y[g], K += c[g] && !n.isNavigator ? c[g].margin : 0;
                    else y.push(Math.ceil(c[0] ?
                        c[0].createLabelsAndCalculateWidth() : 0));
                    P.push(y);
                    if (b && 0 < b.length)
                        for (B = [], g = aa = 0; g < b.length; g++) B.push(Math.ceil(b[g] ? b[g].createLabelsAndCalculateWidth() : 0)), aa += B[g], $ += b[g] ? b[g].margin : 0;
                    else B.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateWidth() : 0));
                    Q.push(B);
                    p = Math.round(f.x1 + O + K);
                    k = Math.round(f.x2 - aa - $ > n.width - r ? n.width - r : f.x2 - aa - $);
                    if (a && 0 < a.length)
                        for (x = [], g = U = 0; g < a.length; g++) a[g] && (a[g].lineCoordinates = {}), a[g].lineCoordinates.width = Math.abs(k - p), a[g].title && (a[g]._titleTextBlock.maxWidth =
                            0 < a[g].titleMaxWidth && a[g].titleMaxWidth < a[g].lineCoordinates.width ? a[g].titleMaxWidth : a[g].lineCoordinates.width), x.push(Math.ceil(a[g] ? a[g].createLabelsAndCalculateHeight() : 0)), U += x[g], e += a[g] && !n.isNavigator ? a[g].margin : 0;
                    else x.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateHeight() : 0));
                    M.push(x);
                    if (d && 0 < d.length)
                        for (z = [], g = X = 0; g < d.length; g++) d[g] && (d[g].lineCoordinates = {}), d[g].lineCoordinates.width = Math.abs(k - p), d[g].title && (d[g]._titleTextBlock.maxWidth = 0 < d[g].titleMaxWidth && d[g].titleMaxWidth <
                            d[g].lineCoordinates.width ? d[g].titleMaxWidth : d[g].lineCoordinates.width), z.push(Math.ceil(d[g] ? d[g].createLabelsAndCalculateHeight() : 0)), X += z[g], Y += d[g] && !n.isNavigator ? d[g].margin : 0;
                    else z.push(Math.ceil(d[0] ? d[0].createLabelsAndCalculateHeight() : 0));
                    N.push(z);
                    if (a && 0 < a.length)
                        for (g = 0; g < a.length; g++) a[g] && (a[g].lineCoordinates.x1 = p, k = Math.round(f.x2 - aa - $ > n.width - r ? n.width - r : f.x2 - aa - $), a[g]._labels && 1 < a[g]._labels.length && (l = h = 0, h = a[g]._labels[1], l = "dateTime" === a[g].valueType ? a[g]._labels[a[g]._labels.length -
                            2] : a[g]._labels[a[g]._labels.length - 1], v = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height - l.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle)), t = l.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(l.textBlock.angle)) + (l.textBlock.height - l.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(l.textBlock.angle))), !a[g] || (!a[g].labelAutoFit || s(C) || s(D) || n.isNavigator || n.stockChart) || (l = 0, 0 < a[g].labelAngle ? D + t > k && (l += 0 < a[g].labelAngle ? D + t - k - aa : 0) :
                            0 > a[g].labelAngle ? C - v < p && C - v < a[g].viewportMinimum && (E = p - (K + a[g].tickLength + y + C - v + a[g].labelFontSize / 2)) : 0 === a[g].labelAngle && (D + t > k && (l = D + t / 2 - k - aa), C - v < p && C - v < a[g].viewportMinimum && (E = p - K - a[g].tickLength - y - C + v / 2)), a[g].viewportMaximum === a[g].maximum && a[g].viewportMinimum === a[g].minimum && 0 < a[g].labelAngle && 0 < l ? k -= l : a[g].viewportMaximum === a[g].maximum && a[g].viewportMinimum === a[g].minimum && 0 > a[g].labelAngle && 0 < E ? p += E : a[g].viewportMaximum === a[g].maximum && a[g].viewportMinimum === a[g].minimum && 0 === a[g].labelAngle &&
                            (0 < E && (p += E), 0 < l && (k -= l))), n.panEnabled ? U = s(n.sessionVariables.axisX.height) ? n.sessionVariables.axisX.height = U : n.sessionVariables.axisX.height : n.sessionVariables.axisX.height = U, l = Math.round(f.y2 - U - e + G), h = Math.round(f.y2), a[g].lineCoordinates.x2 = k, a[g].lineCoordinates.width = k - p, a[g].lineCoordinates.y1 = l, a[g].lineCoordinates.y2 = l + a[g].lineThickness / 2, "inside" === a[g].labelPlacement && 0 < g && (a[g].lineCoordinates.y1 = a[g].lineCoordinates.y1 + x[g] - (a[g]._titleTextBlock ? a[g]._titleTextBlock.height : 0) - ("inside" ===
                            a[g].tickPlacement ? a[g].tickLength : 0), a[g].lineCoordinates.y2 = a[g].lineCoordinates.y1 + a[g].lineThickness / 2), a[g].bounds = { x1: p, y1: l, x2: k, y2: h - (U + e - x[g] - G), width: k - p, height: h - l }), G += x[g] + a[g].margin;
                    if (d && 0 < d.length)
                        for (g = 0; g < d.length; g++) d[g].lineCoordinates.x1 = Math.round(f.x1 + O + K), d[g].lineCoordinates.x2 = Math.round(f.x2 - aa - $ > n.width - r ? n.width - r : f.x2 - aa - $), d[g].lineCoordinates.width = Math.abs(k - p), d[g]._labels && 1 < d[g]._labels.length && (h = d[g]._labels[1], l = "dateTime" === d[g].valueType ? d[g]._labels[d[g]._labels.length -
                                2] : d[g]._labels[d[g]._labels.length - 1], v = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height - l.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle)), t = l.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(l.textBlock.angle)) + (l.textBlock.height - l.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(l.textBlock.angle))), n.panEnabled ? X = s(n.sessionVariables.axisX2.height) ? n.sessionVariables.axisX2.height = X : n.sessionVariables.axisX2.height : n.sessionVariables.axisX2.height =
                            X, l = Math.round(f.y1), h = Math.round(f.y2 + d[g].margin), d[g].lineCoordinates.y1 = l + X + Y - V, d[g].lineCoordinates.y2 = l, "inside" === d[g].labelPlacement && 0 < g && (d[g].lineCoordinates.y1 = d[g - 1].bounds.y1 - z[g] + (d[g]._titleTextBlock ? d[g]._titleTextBlock.height : 0)), d[g].bounds = { x1: p, y1: l + (X + Y - z[g] - V), x2: k, y2: h, width: k - p, height: h - l }, V += z[g] + d[g].margin;
                    if (c && 0 < c.length)
                        for (g = 0; g < c.length; g++) K = n.isNavigator ? 0 : 10, c[g] && (p = Math.round(a[0] ? a[0].lineCoordinates.x1 : d[0].lineCoordinates.x1), K = c[g]._labels && 0 < c[g]._labels.length ?
                            c[g]._labels[c[g]._labels.length - 1].textBlock.height / 2 : r, l = Math.round(f.y1 + X + Y < Math.max(K, r) ? Math.max(K, r) : f.y1 + X + Y), k = Math.round(a[0] ? a[0].lineCoordinates.x1 : d[0].lineCoordinates.x1), K = 0 < a.length ? 0 : c[g]._labels && 0 < c[g]._labels.length ? c[g]._labels[0].textBlock.height / 2 : r, h = Math.round(f.y2 - U - e - K), c[g].lineCoordinates = { x1: p - T, y1: l, x2: k - T, y2: h, height: Math.abs(h - l) }, "inside" === c[g].labelPlacement && 0 < g && (c[g].lineCoordinates.x1 = c[g].lineCoordinates.x1 - (y[g] - c[g]._titleTextBlock ? c[g]._titleTextBlock.height :
                                0) + ("outside" === c[g].tickPlacement ? c[g].tickLength : 0), c[g].lineCoordinates.x2 = c[g].lineCoordinates.x1 + c[g].lineThickness / 2), c[g].bounds = { x1: p - (y[g] + T), y1: l, x2: k, y2: h, width: k - p, height: h - l }, c[g].title && (c[g]._titleTextBlock.maxWidth = 0 < c[g].titleMaxWidth && c[g].titleMaxWidth < c[g].lineCoordinates.height ? c[g].titleMaxWidth : c[g].lineCoordinates.height), T += y[g] + c[g].margin);
                    if (b && 0 < b.length)
                        for (g = 0; g < b.length; g++) b[g] && (p = Math.round(a[0] ? a[0].lineCoordinates.x2 : d[0].lineCoordinates.x2), k = Math.round(p), K =
                            b[g]._labels && 0 < b[g]._labels.length ? b[g]._labels[b[g]._labels.length - 1].textBlock.height / 2 : 0, l = Math.round(f.y1 + X + Y < Math.max(K, r) ? Math.max(K, r) : f.y1 + X + Y), K = 0 < a.length ? 0 : b[g]._labels && 0 < b[g]._labels.length ? b[g]._labels[0].textBlock.height / 2 : 0, h = Math.round(f.y2 - (U + e + K)), b[g].lineCoordinates = { x1: p + W, y1: l, x2: p + W, y2: h, height: Math.abs(h - l) }, "inside" === b[g].labelPlacement && 0 < g && (b[g].lineCoordinates.x1 = b[g].lineCoordinates.x1 + (B[g] - b[g]._titleTextBlock ? b[g]._titleTextBlock.height : 0) - ("outside" === b[g].tickPlacement ?
                                b[g].tickLength : 0) - 2, b[g].lineCoordinates.x2 = b[g].lineCoordinates.x1 + b[g].lineThickness / 2), b[g].bounds = { x1: p, y1: l, x2: k + (B[g] + W), y2: h, width: k - p, height: h - l }, b[g].title && (b[g]._titleTextBlock.maxWidth = 0 < b[g].titleMaxWidth && b[g].titleMaxWidth < b[g].lineCoordinates.height ? b[g].titleMaxWidth : b[g].lineCoordinates.height), W += B[g] + b[g].margin);
                    if (a && 0 < a.length)
                        for (g = 0; g < a.length; g++) a[g] && (a[g].calculateValueToPixelConversionParameters(), a[g].calculateBreaksSizeInValues(), a[g]._labels && 1 < a[g]._labels.length &&
                            (C = (a[g].logarithmic ? Math.log(a[g]._labels[1].position / a[g].viewportMinimum) / a[g].conversionParameters.lnLogarithmBase : a[g]._labels[1].position - a[g].viewportMinimum) * Math.abs(a[g].conversionParameters.pixelPerUnit) + a[g].lineCoordinates.x1, p = a[g]._labels[a[g]._labels.length - ("dateTime" === a[g].valueType ? 2 : 1)].position, p = a[g].getApparentDifference(a[g].viewportMinimum, p), D = a[g].logarithmic ? (1 < p ? Math.log(p) / a[g].conversionParameters.lnLogarithmBase * Math.abs(a[g].conversionParameters.pixelPerUnit) : 0) +
                                a[g].lineCoordinates.x1 : (0 < p ? p * Math.abs(a[g].conversionParameters.pixelPerUnit) : 0) + a[g].lineCoordinates.x1));
                    if (d && 0 < d.length)
                        for (g = 0; g < d.length; g++) d[g].calculateValueToPixelConversionParameters(), d[g].calculateBreaksSizeInValues(), d[g]._labels && 1 < d[g]._labels.length && (C = (d[g].logarithmic ? Math.log(d[g]._labels[1].position / d[g].viewportMinimum) / d[g].conversionParameters.lnLogarithmBase : d[g]._labels[1].position - d[g].viewportMinimum) * Math.abs(d[g].conversionParameters.pixelPerUnit) + d[g].lineCoordinates.x1,
                            p = d[g]._labels[d[g]._labels.length - ("dateTime" === d[g].valueType ? 2 : 1)].position, p = d[g].getApparentDifference(d[g].viewportMinimum, p), D = d[g].logarithmic ? (1 < p ? Math.log(p) / d[g].conversionParameters.lnLogarithmBase * Math.abs(d[g].conversionParameters.pixelPerUnit) : 0) + d[g].lineCoordinates.x1 : (0 < p ? p * Math.abs(d[g].conversionParameters.pixelPerUnit) : 0) + d[g].lineCoordinates.x1);
                    for (g = 0; g < q.length; g++) "axisY" === q[g].type && (q[g].calculateValueToPixelConversionParameters(), q[g].calculateBreaksSizeInValues());
                    if (0 <
                        u) {
                        if (a && 0 < a.length)
                            for (g = 0; g < a.length; g++) m = M[u - 1][g] === M[u][g] ? !0 : !1;
                        else m = !0;
                        if (d && 0 < d.length)
                            for (g = 0; g < d.length; g++) I = N[u - 1][g] === N[u][g] ? !0 : !1;
                        else I = !0;
                        if (c && 0 < c.length)
                            for (g = 0; g < c.length; g++) J = P[u - 1][g] === P[u][g] ? !0 : !1;
                        else J = !0;
                        if (b && 0 < b.length)
                            for (g = 0; g < b.length; g++) L = Q[u - 1][g] === Q[u][g] ? !0 : !1;
                        else L = !0
                    }
                    if (m && I && J && L) break;
                    u++
                }
                if (a && 0 < a.length)
                    for (g = 0; g < a.length; g++) a[g].calculateStripLinesThicknessInValues(), a[g].calculateBreaksInPixels();
                if (d && 0 < d.length)
                    for (g = 0; g < d.length; g++) d[g].calculateStripLinesThicknessInValues(),
                        d[g].calculateBreaksInPixels();
                if (c && 0 < c.length)
                    for (g = 0; g < c.length; g++) c[g].calculateStripLinesThicknessInValues(), c[g].calculateBreaksInPixels();
                if (b && 0 < b.length)
                    for (g = 0; g < b.length; g++) b[g].calculateStripLinesThicknessInValues(), b[g].calculateBreaksInPixels()
            } else {
                r = [];
                C = [];
                E = [];
                v = [];
                D = [];
                t = [];
                M = [];
                for (N = []; 4 > u;) {
                    U = W = V = T = $ = K = Y = e = Q = P = G = X = 0;
                    if (a && 0 < a.length)
                        for (E = [], g = W = 0; g < a.length; g++) E.push(Math.ceil(a[g] ? a[g].createLabelsAndCalculateWidth() : 0)), W += E[g], e += a[g] && !n.isNavigator ? a[g].margin : 0;
                    else E.push(Math.ceil(a[0] ?
                        a[0].createLabelsAndCalculateWidth() : 0));
                    M.push(E);
                    if (d && 0 < d.length)
                        for (v = [], g = U = 0; g < d.length; g++) v.push(Math.ceil(d[g] ? d[g].createLabelsAndCalculateWidth() : 0)), U += v[g], Y += d[g] ? d[g].margin : 0;
                    else v.push(Math.ceil(d[0] ? d[0].createLabelsAndCalculateWidth() : 0));
                    N.push(v);
                    if (c && 0 < c.length)
                        for (g = 0; g < c.length; g++) c[g].lineCoordinates = {}, p = Math.round(f.x1 + W + e), k = Math.round(f.x2 - U - Y > n.width - 10 ? n.width - 10 : f.x2 - U - Y), c[g].labelAutoFit && !s(x) && (0 < !a.length && (p = 0 > c[g].labelAngle ? Math.max(p, x) : 0 === c[g].labelAngle ?
                            Math.max(p, x / 2) : p), 0 < !d.length && (k = 0 < c[g].labelAngle ? k - z / 2 : 0 === c[g].labelAngle ? k - z / 2 : k)), c[g].lineCoordinates.x1 = p, c[g].lineCoordinates.x2 = k, c[g].lineCoordinates.width = Math.abs(k - p), c[g].title && (c[g]._titleTextBlock.maxWidth = 0 < c[g].titleMaxWidth && c[g].titleMaxWidth < c[g].lineCoordinates.width ? c[g].titleMaxWidth : c[g].lineCoordinates.width);
                    if (b && 0 < b.length)
                        for (g = 0; g < b.length; g++) b[g].lineCoordinates = {}, p = Math.round(f.x1 + W + e), k = Math.round(f.x2 - U - Y > b[g].chart.width - 10 ? b[g].chart.width - 10 : f.x2 - U - Y), b[g] &&
                            b[g].labelAutoFit && !s(y) && (0 < !a.length && (p = 0 < b[g].labelAngle ? Math.max(p, y) : 0 === b[g].labelAngle ? Math.max(p, y / 2) : p), 0 < !d.length && (k -= B / 2)), b[g].lineCoordinates.x1 = p, b[g].lineCoordinates.x2 = k, b[g].lineCoordinates.width = Math.abs(k - p), b[g].title && (b[g]._titleTextBlock.maxWidth = 0 < b[g].titleMaxWidth && b[g].titleMaxWidth < b[g].lineCoordinates.width ? b[g].titleMaxWidth : b[g].lineCoordinates.width);
                    if (c && 0 < c.length)
                        for (r = [], g = T = 0; g < c.length; g++) r.push(Math.ceil(c[g] ? c[g].createLabelsAndCalculateHeight() : 0)), T +=
                            r[g] + c[g].margin, K += c[g].margin;
                    else r.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateHeight() : 0));
                    D.push(r);
                    if (b && 0 < b.length)
                        for (C = [], g = V = 0; g < b.length; g++) C.push(Math.ceil(b[g] ? b[g].createLabelsAndCalculateHeight() : 0)), V += C[g], $ += b[g].margin;
                    else C.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateHeight() : 0));
                    t.push(C);
                    if (c && 0 < c.length)
                        for (g = 0; g < c.length; g++) 0 < c[g]._labels.length && (h = c[g]._labels[0], l = c[g]._labels[c[g]._labels.length - 1], x = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) +
                            (h.textBlock.height - l.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(h.textBlock.angle)), z = l.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(l.textBlock.angle)) + (l.textBlock.height - l.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(l.textBlock.angle)));
                    if (b && 0 < b.length)
                        for (g = 0; g < b.length; g++) b[g] && 0 < b[g]._labels.length && (h = b[g]._labels[0], l = b[g]._labels[b[g]._labels.length - 1], y = h.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(h.textBlock.angle)) + (h.textBlock.height - l.textBlock.fontSize / 2) * Math.sin(Math.PI /
                            180 * Math.abs(h.textBlock.angle)), B = l.textBlock.width * Math.cos(Math.PI / 180 * Math.abs(l.textBlock.angle)) + (l.textBlock.height - l.textBlock.fontSize / 2) * Math.sin(Math.PI / 180 * Math.abs(l.textBlock.angle)));
                    if (n.panEnabled)
                        for (g = 0; g < c.length; g++) r[g] = s(n.sessionVariables.axisY.height) ? n.sessionVariables.axisY.height = r[g] : n.sessionVariables.axisY.height;
                    else
                        for (g = 0; g < c.length; g++) n.sessionVariables.axisY.height = r[g];
                    if (c && 0 < c.length)
                        for (g = c.length - 1; 0 <= g; g--) l = Math.round(f.y2), h = Math.round(f.y2 > c[g].chart.height ?
                            c[g].chart.height : f.y2), c[g].lineCoordinates.y1 = l - (r[g] + c[g].margin + X), c[g].lineCoordinates.y2 = l - (r[g] + c[g].margin + X), "inside" === c[g].labelPlacement && 0 < g && (c[g].lineCoordinates.y1 = c[g].lineCoordinates.y1 + r[g] - (c[g]._titleTextBlock ? c[g]._titleTextBlock.height : 0) - ("inside" === c[g].tickPlacement ? c[g].tickLength : 0), c[g].lineCoordinates.y2 = c[g].lineCoordinates.y1 + c[g].lineThickness / 2), c[g].bounds = { x1: p, y1: l - (r[g] + X + c[g].margin), x2: k, y2: h - (X + c[g].margin), width: k - p, height: r[g] }, c[g].title && (c[g]._titleTextBlock.maxWidth =
                            0 < c[g].titleMaxWidth && c[g].titleMaxWidth < c[g].lineCoordinates.width ? c[g].titleMaxWidth : c[g].lineCoordinates.width), X += r[g] + c[g].margin;
                    if (b && 0 < b.length)
                        for (g = b.length - 1; 0 <= g; g--) b[g] && (l = Math.round(f.y1), h = Math.round(f.y1 + (C[g] + b[g].margin + G)), b[g].lineCoordinates.y1 = h, b[g].lineCoordinates.y2 = h, "inside" === b[g].labelPlacement && 0 < g && (b[g].lineCoordinates.y1 = h - C[g] + (b[g]._titleTextBlock ? b[g]._titleTextBlock.height : 0)), b[g].bounds = { x1: p, y1: l + (b[g].margin + G), x2: k, y2: h, width: k - p, height: V }, b[g].title && (b[g]._titleTextBlock.maxWidth =
                            0 < b[g].titleMaxWidth && b[g].titleMaxWidth < b[g].lineCoordinates.width ? b[g].titleMaxWidth : b[g].lineCoordinates.width), G += C[g] + b[g].margin);
                    if (a && 0 < a.length)
                        for (g = 0; g < a.length; g++) {
                            K = a[g]._labels && 0 < a[g]._labels.length ? a[g]._labels[0].textBlock.fontSize / 2 : 0;
                            p = Math.round(f.x1 + e);
                            l = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : f.y1 < Math.max(K, 10) ? Math.max(K, 10) : f.y1) : f.y1 < Math.max(K, 10) ? Math.max(K, 10) : f.y1;
                            k = Math.round(f.x1 + W + e);
                            h = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : f.y2 - T > n.height -
                                Math.max(K, 10) ? n.height - Math.max(K, 10) : f.y2 - T) : f.y2 > n.height - Math.max(K, 10) ? n.height - Math.max(K, 10) : f.y2;
                            if (c && 0 < c.length)
                                for (K = 0; K < c.length; K++) c[K] && c[K].labelAutoFit && (k = 0 > c[K].labelAngle ? Math.max(k, x) : 0 === c[K].labelAngle ? Math.max(k, x / 2) : k, p = 0 > c[K].labelAngle || 0 === c[K].labelAngle ? k - W : p);
                            if (b && 0 < b.length)
                                for (K = 0; K < b.length; K++) b[K] && b[K].labelAutoFit && (k = b[K].lineCoordinates.x1, p = k - W);
                            a[g].lineCoordinates = { x1: k - P, y1: l, x2: k - P, y2: h, height: Math.abs(h - l) };
                            "inside" === a[g].labelPlacement && 0 < g && (a[g].lineCoordinates.x1 =
                                a[g].lineCoordinates.x1 - (E[g] - (a[g]._titleTextBlock ? a[g]._titleTextBlock.height : 0)) + ("outside" === a[g].tickPlacement ? a[g].tickLength : 0), a[g].lineCoordinates.x2 = a[g].lineCoordinates.x1 + a[g].lineThickness / 2);
                            a[g].bounds = { x1: k - (E[g] + P), y1: l, x2: k, y2: h, width: k - p, height: h - l };
                            a[g].title && (a[g]._titleTextBlock.maxWidth = 0 < a[g].titleMaxWidth && a[g].titleMaxWidth < a[g].lineCoordinates.height ? a[g].titleMaxWidth : a[g].lineCoordinates.height);
                            a[g].calculateValueToPixelConversionParameters();
                            a[g].calculateBreaksSizeInValues();
                            P += E[g] + a[g].margin
                        }
                    if (d && 0 < d.length)
                        for (g = 0; g < d.length; g++) {
                            K = d[g]._labels && 0 < d[g]._labels.length ? d[g]._labels[0].textBlock.fontSize / 2 : 0;
                            p = Math.round(f.x1 - e);
                            l = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : f.y1 < Math.max(K, 10) ? Math.max(K, 10) : f.y1) : f.y1 < Math.max(K, 10) ? Math.max(K, 10) : f.y1;
                            k = Math.round(f.x2 - U - Y);
                            h = c && 0 < c.length ? Math.round(c[0] ? c[0].lineCoordinates.y1 : f.y2 - T > n.height - Math.max(K, 10) ? n.height - Math.max(K, 10) : f.y2 - T) : f.y2 > n.height - Math.max(K, 10) ? n.height - Math.max(K, 10) : f.y2;
                            if (c &&
                                0 < c.length)
                                for (K = 0; K < c.length; K++) c[K] && c[K].labelAutoFit && (k = 0 > c[K].labelAngle ? Math.max(k, x) : 0 === c[K].labelAngle ? Math.max(k, x / 2) : k, p = 0 > c[K].labelAngle || 0 === c[K].labelAngle ? k - U : p);
                            if (b && 0 < b.length)
                                for (K = 0; K < b.length; K++) b[K] && b[K].labelAutoFit && (k = b[K].lineCoordinates.x2, p = k - U);
                            d[g].lineCoordinates = { x1: k + Q, y1: l, x2: k + Q, y2: h, height: Math.abs(h - l) };
                            "inside" === d[g].labelPlacement && 0 < g && (d[g].lineCoordinates.x1 = d[g].lineCoordinates.x1 + (v[g] - (d[g]._titleTextBlock ? d[g]._titleTextBlock.height : 0) - 2) - ("outside" ===
                                d[g].tickPlacement ? d[g].tickLength : 0), d[g].lineCoordinates.x2 = d[g].lineCoordinates.x1 + d[g].lineThickness / 2);
                            d[g].bounds = { x1: d[g].lineCoordinates.x1, y1: l, x2: k + v[g] + Q, y2: h, width: k - p, height: h - l };
                            d[g].title && (d[g]._titleTextBlock.maxWidth = 0 < d[g].titleMaxWidth && d[g].titleMaxWidth < d[g].lineCoordinates.height ? d[g].titleMaxWidth : d[g].lineCoordinates.height);
                            d[g].calculateValueToPixelConversionParameters();
                            d[g].calculateBreaksSizeInValues();
                            Q += v[g] + d[g].margin
                        }
                    for (g = 0; g < q.length; g++) "axisY" === q[g].type && (q[g].calculateValueToPixelConversionParameters(),
                        q[g].calculateBreaksSizeInValues());
                    if (0 < u) {
                        if (a && 0 < a.length)
                            for (g = 0; g < a.length; g++) m = M[u - 1][g] === M[u][g] ? !0 : !1;
                        else m = !0;
                        if (d && 0 < d.length)
                            for (g = 0; g < d.length; g++) I = N[u - 1][g] === N[u][g] ? !0 : !1;
                        else I = !0;
                        if (c && 0 < c.length)
                            for (g = 0; g < c.length; g++) J = D[u - 1][g] === D[u][g] ? !0 : !1;
                        else J = !0;
                        if (b && 0 < b.length)
                            for (g = 0; g < b.length; g++) L = t[u - 1][g] === t[u][g] ? !0 : !1;
                        else L = !0
                    }
                    if (m && I && J && L) break;
                    u++
                }
                if (c && 0 < c.length)
                    for (g = 0; g < c.length; g++) c[g].calculateStripLinesThicknessInValues(), c[g].calculateBreaksInPixels();
                if (b &&
                    0 < b.length)
                    for (g = 0; g < b.length; g++) b[g].calculateStripLinesThicknessInValues(), b[g].calculateBreaksInPixels();
                if (a && 0 < a.length)
                    for (g = 0; g < a.length; g++) a[g].calculateStripLinesThicknessInValues(), a[g].calculateBreaksInPixels();
                if (d && 0 < d.length)
                    for (g = 0; g < d.length; g++) d[g].calculateStripLinesThicknessInValues(), d[g].calculateBreaksInPixels()
            }
        };
        D.render = function(a, d, c, b, e) {
            var f = a[0] ? a[0].chart : d[0].chart;
            e = f.ctx;
            var k = f._axes;
            f.alignVerticalAxes && f.alignVerticalAxes();
            e.save();
            e.beginPath();
            a[0] && e.rect(5,
                a[0].bounds.y1, a[0].chart.width - 10, a[0].bounds.height);
            d[0] && e.rect(5, d[d.length - 1].bounds.y1, d[0].chart.width - 10, d[0].bounds.height);
            e.clip();
            if (a && 0 < a.length)
                for (var l = 0; l < a.length; l++) a[l].renderLabelsTicksAndTitle();
            if (d && 0 < d.length)
                for (l = 0; l < d.length; l++) d[l].renderLabelsTicksAndTitle();
            e.restore();
            if (c && 0 < c.length)
                for (l = 0; l < c.length; l++) c[l].renderLabelsTicksAndTitle();
            if (b && 0 < b.length)
                for (l = 0; l < b.length; l++) b[l].renderLabelsTicksAndTitle();
            f.preparePlotArea();
            f = f.plotArea;
            e.save();
            e.beginPath();
            e.rect(f.x1, f.y1, Math.abs(f.x2 - f.x1), Math.abs(f.y2 - f.y1));
            e.clip();
            if (a && 0 < a.length)
                for (l = 0; l < k.length; l++) k[l].renderStripLinesOfThicknessType("value");
            if (d && 0 < d.length)
                for (l = 0; l < d.length; l++) d[l].renderStripLinesOfThicknessType("value");
            if (c && 0 < c.length)
                for (l = 0; l < c.length; l++) c[l].renderStripLinesOfThicknessType("value");
            if (b && 0 < b.length)
                for (l = 0; l < b.length; l++) b[l].renderStripLinesOfThicknessType("value");
            if (a && 0 < a.length)
                for (l = 0; l < a.length; l++) a[l].renderInterlacedColors();
            if (d && 0 < d.length)
                for (l =
                    0; l < d.length; l++) d[l].renderInterlacedColors();
            if (c && 0 < c.length)
                for (l = 0; l < c.length; l++) c[l].renderInterlacedColors();
            if (b && 0 < b.length)
                for (l = 0; l < b.length; l++) b[l].renderInterlacedColors();
            e.restore();
            if (a && 0 < a.length)
                for (l = 0; l < a.length; l++) a[l].renderGrid(), u && (a[l].createMask(), a[l].renderBreaksBackground());
            if (d && 0 < d.length)
                for (l = 0; l < d.length; l++) d[l].renderGrid(), u && (d[l].createMask(), d[l].renderBreaksBackground());
            if (c && 0 < c.length)
                for (l = 0; l < c.length; l++) c[l].renderGrid(), u && (c[l].createMask(),
                    c[l].renderBreaksBackground());
            if (b && 0 < b.length)
                for (l = 0; l < b.length; l++) b[l].renderGrid(), u && (b[l].createMask(), b[l].renderBreaksBackground());
            if (a && 0 < a.length)
                for (l = 0; l < a.length; l++) a[l].renderAxisLine();
            if (d && 0 < d.length)
                for (l = 0; l < d.length; l++) d[l].renderAxisLine();
            if (c && 0 < c.length)
                for (l = 0; l < c.length; l++) c[l].renderAxisLine();
            if (b && 0 < b.length)
                for (l = 0; l < b.length; l++) b[l].renderAxisLine();
            if (a && 0 < a.length)
                for (l = 0; l < a.length; l++) a[l].renderStripLinesOfThicknessType("pixel");
            if (d && 0 < d.length)
                for (l = 0; l <
                    d.length; l++) d[l].renderStripLinesOfThicknessType("pixel");
            if (c && 0 < c.length)
                for (l = 0; l < c.length; l++) c[l].renderStripLinesOfThicknessType("pixel");
            if (b && 0 < b.length)
                for (l = 0; l < b.length; l++) b[l].renderStripLinesOfThicknessType("pixel")
        };
        D.prototype.calculateStripLinesThicknessInValues = function() {
            for (var a = 0; a < this.stripLines.length; a++)
                if (null !== this.stripLines[a].startValue && null !== this.stripLines[a].endValue) {
                    var d = Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue),
                        c = Math.max(this.stripLines[a].startValue,
                            this.stripLines[a].endValue),
                        d = this.getApparentDifference(d, c);
                    this.stripLines[a].value = this.logarithmic ? this.stripLines[a].value * Math.sqrt(Math.log(this.stripLines[a].endValue / this.stripLines[a].startValue) / Math.log(d)) : this.stripLines[a].value + (Math.abs(this.stripLines[a].endValue - this.stripLines[a].startValue) - d) / 2;
                    this.stripLines[a].thickness = d;
                    this.stripLines[a]._thicknessType = "value"
                }
        };
        D.prototype.calculateBreaksSizeInValues = function() {
            for (var a = "left" === this._position || "right" === this._position ?
                    this.lineCoordinates.height || this.chart.height : this.lineCoordinates.width || this.chart.width, d = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [], c = this.conversionParameters.pixelPerUnit || a / (this.logarithmic ? this.conversionParameters.maximum / this.conversionParameters.minimum : this.conversionParameters.maximum - this.conversionParameters.minimum), b = this.scaleBreaks && !s(this.scaleBreaks.options.spacing), e, f = 0; f < d.length; f++) e = b || !s(d[f].options.spacing), d[f].spacing = Qa(d[f].spacing, a, 8, e ? 0.1 * a : 8, e ? 0 : 3) <<
                0, d[f].size = 0 > d[f].spacing ? 0 : Math.abs(d[f].spacing / c), this.logarithmic && (d[f].size = Math.pow(this.logarithmBase, d[f].size))
        };
        D.prototype.calculateBreaksInPixels = function() {
            if (!(this.scaleBreaks && 0 >= this.scaleBreaks._appliedBreaks.length)) {
                var a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
                a.length && (this.scaleBreaks.firstBreakIndex = this.scaleBreaks.lastBreakIndex = null);
                for (var d = 0; d < a.length && !(a[d].startValue > this.conversionParameters.maximum); d++) a[d].endValue < this.conversionParameters.minimum ||
                    (s(this.scaleBreaks.firstBreakIndex) && (this.scaleBreaks.firstBreakIndex = d), a[d].startValue >= this.conversionParameters.minimum && (a[d].startPixel = this.convertValueToPixel(a[d].startValue), this.scaleBreaks.lastBreakIndex = d), a[d].endValue <= this.conversionParameters.maximum && (a[d].endPixel = this.convertValueToPixel(a[d].endValue)))
            }
        };
        D.prototype.renderLabelsTicksAndTitle = function() {
            var a = this,
                d = !1,
                c = 0,
                b = 0,
                e = 1,
                f = 0;
            0 !== this.labelAngle && 360 !== this.labelAngle && (e = 1.2);
            if ("undefined" === typeof this.options.interval) {
                if ("bottom" ===
                    this._position || "top" === this._position)
                    if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                        for (var c = [], e = 0 !== this.labelAngle && 360 !== this.labelAngle ? 1 : 1.2, k, l = this.viewportMaximum, m = this.lineCoordinates.width / Math.log(this.range), h = this._labels.length - 1; 0 <= h; h--) {
                            r = this._labels[h];
                            if (r.position < this.viewportMinimum) break;
                            r.position > this.viewportMaximum || !(h === this._labels.length - 1 || k < Math.log(l / r.position) * m / e) || (c.push(r), l = r.position, k = r.textBlock.width * Math.abs(Math.cos(Math.PI /
                                180 * this.labelAngle)) + r.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)))
                        }
                        this._labels = c
                    } else {
                        for (h = 0; h < this._labels.length; h++) r = this._labels[h], r.position < this.viewportMinimum || (k = r.textBlock.width * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + r.textBlock.height * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), c += k);
                        c > this.lineCoordinates.width * e && this.labelAutoFit && (d = !0)
                    }
                if ("left" === this._position || "right" === this._position)
                    if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                        for (var c = [], n, l = this.viewportMaximum, m = this.lineCoordinates.height / Math.log(this.range), h = this._labels.length - 1; 0 <= h; h--) {
                            r = this._labels[h];
                            if (r.position < this.viewportMinimum) break;
                            r.position > this.viewportMaximum || !(h === this._labels.length - 1 || n < Math.log(l / r.position) * m) || (c.push(r), l = r.position, n = r.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + r.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)))
                        }
                        this._labels = c
                    } else {
                        for (h = 0; h < this._labels.length; h++) r = this._labels[h], r.position <
                            this.viewportMinimum || (n = r.textBlock.height * Math.abs(Math.cos(Math.PI / 180 * this.labelAngle)) + r.textBlock.width * Math.abs(Math.sin(Math.PI / 180 * this.labelAngle)), b += n);
                        b > this.lineCoordinates.height * e && this.labelAutoFit && (d = !0)
                    }
            }
            this.logarithmic && (!this.equidistantInterval && this.labelAutoFit) && this._labels.sort(function(a, b) { return a.position - b.position });
            var h = 0,
                r, q;
            if ("bottom" === this._position) {
                for (h = 0; h < this._labels.length; h++) r = this._labels[h], r.position < this.viewportMinimum || r.position > this.viewportMaximum ||
                    (q = this.getPixelCoordinatesOnAxis(r.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, q.y << 0), this.ctx.lineTo(b, q.y + this.tickLength << 0), this.ctx.stroke()), d && 0 !== f++ % 2 && this.labelAutoFit || (0 === r.textBlock.angle ? (q.x -= r.textBlock.width / 2, q.y = "inside" === this.labelPlacement ? q.y - (("inside" === this.tickPlacement ? this.tickLength : 0) + r.textBlock.height -
                        r.textBlock.fontSize / 2) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + r.textBlock.fontSize / 2 + 5) : (q.x = "inside" === this.labelPlacement ? 0 > this.labelAngle ? q.x : q.x - r.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : q.x - (0 > this.labelAngle ? r.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), q.y = "inside" === this.labelPlacement ? 0 > this.labelAngle ? q.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.y - ("inside" === this.tickPlacement ? 0 : this.tickLength) - Math.abs(r.textBlock.width * Math.sin(Math.PI /
                        180 * this.labelAngle) + 5) : q.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + Math.abs(0 > this.labelAngle ? r.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5)), r.textBlock.x = q.x, r.textBlock.y = q.y));
                "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", function() {
                    for (h = 0; h < a._labels.length; h++)
                        if (r = a._labels[h], !(r.position < a.viewportMinimum || r.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(r.position), a.tickThickness)) {
                            a.ctx.lineWidth = a.tickThickness;
                            a.ctx.strokeStyle =
                                a.tickColor;
                            var b = 1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
                            a.ctx.save();
                            a.ctx.beginPath();
                            a.ctx.moveTo(b, q.y << 0);
                            a.ctx.lineTo(b, q.y - a.tickLength << 0);
                            a.ctx.stroke();
                            a.ctx.restore()
                        }
                }, this);
                this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y2 - this._titleTextBlock.height - 3, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
            } else if ("top" ===
                this._position) {
                for (h = 0; h < this._labels.length; h++) r = this._labels[h], r.position < this.viewportMinimum || r.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(r.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0, this.ctx.beginPath(), this.ctx.moveTo(b, q.y << 0), this.ctx.lineTo(b, q.y - this.tickLength << 0), this.ctx.stroke()), d && 0 !== f++ % 2 && this.labelAutoFit || (0 === r.textBlock.angle ?
                    (q.x -= r.textBlock.width / 2, q.y = "inside" === this.labelPlacement ? q.y + this.labelFontSize / 2 + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) + r.textBlock.height - r.textBlock.fontSize / 2)) : (q.x = "inside" === this.labelPlacement ? 0 < this.labelAngle ? q.x : q.x - r.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : q.x + (r.textBlock.height - this.labelFontSize) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? r.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) :
                        0), q.y = "inside" === this.labelPlacement ? 0 < this.labelAngle ? q.y + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - r.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) + ((r.textBlock.height - r.textBlock.fontSize / 2) * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? r.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))), r.textBlock.x = q.x, r.textBlock.y = q.y));
                "inside" === this.tickPlacement &&
                    this.chart.addEventListener("dataAnimationEnd", function() {
                        for (h = 0; h < a._labels.length; h++)
                            if (r = a._labels[h], !(r.position < a.viewportMinimum || r.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(r.position), a.tickThickness)) {
                                a.ctx.lineWidth = a.tickThickness;
                                a.ctx.strokeStyle = a.tickColor;
                                var b = 1 === a.ctx.lineWidth % 2 ? (q.x << 0) + 0.5 : q.x << 0;
                                a.ctx.save();
                                a.ctx.beginPath();
                                a.ctx.moveTo(b, q.y << 0);
                                a.ctx.lineTo(b, q.y + a.tickLength << 0);
                                a.ctx.stroke();
                                a.ctx.restore()
                            }
                    }, this);
                this.title && (this._titleTextBlock.measureText(),
                    this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2, this._titleTextBlock.y = this.bounds.y1 + 1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
            } else if ("left" === this._position) {
                for (h = 0; h < this._labels.length; h++) r = this._labels[h], r.position < this.viewportMinimum || r.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(r.position), this.tickThickness && "inside" != this.tickPlacement && (this.ctx.lineWidth = this.tickThickness,
                    this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0, this.ctx.beginPath(), this.ctx.moveTo(q.x << 0, b), this.ctx.lineTo(q.x - this.tickLength << 0, b), this.ctx.stroke()), d && 0 !== f++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (r.textBlock.y = q.y, r.textBlock.x = "inside" === this.labelPlacement ? q.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : q.x - r.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5) : (r.textBlock.y = "inside" ===
                    this.labelPlacement ? q.y : q.y - r.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), r.textBlock.x = "inside" === this.labelPlacement ? q.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 : 0 < this.labelAngle ? q.x - r.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5 : q.x - r.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (r.textBlock.height - r.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength))));
                "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", function() {
                    for (h = 0; h < a._labels.length; h++)
                        if (r = a._labels[h], !(r.position < a.viewportMinimum || r.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(r.position), a.tickThickness)) {
                            a.ctx.lineWidth = a.tickThickness;
                            a.ctx.strokeStyle = a.tickColor;
                            var b = 1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
                            a.ctx.save();
                            a.ctx.beginPath();
                            a.ctx.moveTo(q.x << 0, b);
                            a.ctx.lineTo(q.x + a.tickLength << 0, b);
                            a.ctx.stroke();
                            a.ctx.restore()
                        }
                }, this);
                this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x1 + 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
            } else if ("right" === this._position) {
                for (h = 0; h < this._labels.length; h++) r = this._labels[h], r.position < this.viewportMinimum || r.position > this.viewportMaximum || (q = this.getPixelCoordinatesOnAxis(r.position), this.tickThickness && "inside" !=
                    this.tickPlacement && (this.ctx.lineWidth = this.tickThickness, this.ctx.strokeStyle = this.tickColor, b = 1 === this.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0, this.ctx.beginPath(), this.ctx.moveTo(q.x << 0, b), this.ctx.lineTo(q.x + this.tickLength << 0, b), this.ctx.stroke()), d && 0 !== f++ % 2 && this.labelAutoFit || (0 === this.labelAngle ? (r.textBlock.y = q.y, r.textBlock.x = "inside" === this.labelPlacement ? q.x - r.textBlock.width - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : q.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5) : (r.textBlock.y =
                        "inside" === this.labelPlacement ? q.y - r.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0 > this.labelAngle ? q.y : q.y - (r.textBlock.height - r.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), r.textBlock.x = "inside" === this.labelPlacement ? q.x - r.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : 0 < this.labelAngle ? q.x + (r.textBlock.height - r.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) + ("inside" === this.tickPlacement ? 0 : this.tickLength) :
                        q.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5)));
                "inside" === this.tickPlacement && this.chart.addEventListener("dataAnimationEnd", function() {
                    for (h = 0; h < a._labels.length; h++)
                        if (r = a._labels[h], !(r.position < a.viewportMinimum || r.position > a.viewportMaximum) && (q = a.getPixelCoordinatesOnAxis(r.position), a.tickThickness)) {
                            a.ctx.lineWidth = a.tickThickness;
                            a.ctx.strokeStyle = a.tickColor;
                            var b = 1 === a.ctx.lineWidth % 2 ? (q.y << 0) + 0.5 : q.y << 0;
                            a.ctx.save();
                            a.ctx.beginPath();
                            a.ctx.moveTo(q.x << 0, b);
                            a.ctx.lineTo(q.x -
                                a.tickLength << 0, b);
                            a.ctx.stroke();
                            a.ctx.restore()
                        }
                }, this);
                this.title && (this._titleTextBlock.measureText(), this._titleTextBlock.x = this.bounds.x2 - 1, this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1, this.titleMaxWidth = this._titleTextBlock.maxWidth, this._titleTextBlock.render(!0))
            }
            f = 0;
            if ("inside" === this.labelPlacement) this.chart.addEventListener("dataAnimationEnd", function() {
                for (h = 0; h < a._labels.length; h++) r = a._labels[h], r.position < a.viewportMinimum ||
                    (r.position > a.viewportMaximum || d && 0 !== f++ % 2 && a.labelAutoFit) || (a.ctx.save(), a.ctx.beginPath(), r.textBlock.render(!0), a.ctx.restore())
            }, this);
            else
                for (h = 0; h < this._labels.length; h++) r = this._labels[h], r.position < this.viewportMinimum || (r.position > this.viewportMaximum || d && 0 !== f++ % 2 && this.labelAutoFit) || r.textBlock.render(!0)
        };
        D.prototype.renderInterlacedColors = function() {
            var a = this.chart.plotArea.ctx,
                d, c, b = this.chart.plotArea,
                e = 0;
            d = !0;
            if (("bottom" === this._position || "top" === this._position) && this.interlacedColor)
                for (a.fillStyle =
                    this.interlacedColor, e = 0; e < this._labels.length; e++) d ? (d = this.getPixelCoordinatesOnAxis(this._labels[e].position), c = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(Math.min(c.x, d.x), b.y1, Math.abs(c.x - d.x), Math.abs(b.y1 - b.y2)), d = !1) : d = !0;
            else if (("left" === this._position || "right" === this._position) && this.interlacedColor)
                for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++) d ? (c = this.getPixelCoordinatesOnAxis(this._labels[e].position),
                    d = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position), a.fillRect(b.x1, Math.min(c.y, d.y), Math.abs(b.x1 - b.x2), Math.abs(d.y - c.y)), d = !1) : d = !0;
            a.beginPath()
        };
        D.prototype.renderStripLinesOfThicknessType = function(a) {
            if (this.stripLines && 0 < this.stripLines.length && a) {
                for (var d = this, c, b = 0, e = 0, f = !1, k = !1, l = [], m = [], k = !1, b = 0; b < this.stripLines.length; b++) {
                    var h = this.stripLines[b];
                    h._thicknessType === a && ("pixel" === a && (h.value < this.viewportMinimum ||
                        h.value > this.viewportMaximum || s(h.value) || isNaN(this.range)) || l.push(h))
                }
                for (b = 0; b < this._stripLineLabels.length; b++)
                    if (h = this.stripLines[b], c = this._stripLineLabels[b], !(c.position < this.viewportMinimum || c.position > this.viewportMaximum || isNaN(this.range))) {
                        a = this.getPixelCoordinatesOnAxis(c.position);
                        if ("outside" === c.stripLine.labelPlacement)
                            if (h && (this.ctx.strokeStyle = h.color, "pixel" === h._thicknessType && (this.ctx.lineWidth = h.thickness)), "bottom" === this._position) {
                                var n = 1 === this.ctx.lineWidth % 2 ? (a.x <<
                                    0) + 0.5 : a.x << 0;
                                this.ctx.beginPath();
                                this.ctx.moveTo(n, a.y << 0);
                                this.ctx.lineTo(n, a.y + this.tickLength << 0);
                                this.ctx.stroke();
                                0 === this.labelAngle ? (a.x -= c.textBlock.width / 2, a.y += this.tickLength + c.textBlock.fontSize / 2) : (a.x -= 0 > this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0, a.y += this.tickLength + Math.abs(0 > this.labelAngle ? c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) - 5 : 5))
                            } else "top" === this._position ? (n = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, this.ctx.beginPath(), this.ctx.moveTo(n,
                                    a.y << 0), this.ctx.lineTo(n, a.y - this.tickLength << 0), this.ctx.stroke(), 0 === this.labelAngle ? (a.x -= c.textBlock.width / 2, a.y -= this.tickLength + c.textBlock.height) : (a.x += (c.textBlock.height - this.tickLength - this.labelFontSize / 2) * Math.sin(Math.PI / 180 * this.labelAngle) - (0 < this.labelAngle ? c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) : 0), a.y -= this.tickLength + (c.textBlock.height * Math.cos(Math.PI / 180 * this.labelAngle) + (0 < this.labelAngle ? c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle) : 0)))) : "left" ===
                                this._position ? (n = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, n), this.ctx.lineTo(a.x - this.tickLength << 0, n), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : (a.y -= c.textBlock.width * Math.sin(Math.PI / 180 * this.labelAngle), a.x = 0 < this.labelAngle ? a.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) - this.tickLength - 5 : a.x - c.textBlock.width * Math.cos(Math.PI / 180 * this.labelAngle) + (c.textBlock.height -
                                    c.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI / 180 * this.labelAngle) - this.tickLength)) : "right" === this._position && (n = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, this.ctx.beginPath(), this.ctx.moveTo(a.x << 0, n), this.ctx.lineTo(a.x + this.tickLength << 0, n), this.ctx.stroke(), 0 === this.labelAngle ? a.x = a.x + this.tickLength + 5 : (a.y = 0 > this.labelAngle ? a.y : a.y - (c.textBlock.height - c.textBlock.fontSize / 2 - 5) * Math.cos(Math.PI / 180 * this.labelAngle), a.x = 0 < this.labelAngle ? a.x + (c.textBlock.height - c.textBlock.fontSize / 2 - 5) * Math.sin(Math.PI /
                                    180 * this.labelAngle) + this.tickLength : a.x + this.tickLength + 5));
                        else c.textBlock.angle = -90, "bottom" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[b].labelMaxWidth ? this.options.stripLines[b].labelMaxWidth : this.chart.plotArea.height - 3, c.textBlock.measureText(), a.x - c.textBlock.height > this.chart.plotArea.x1 ? s(h.startValue) ? a.x -= c.textBlock.height - c.textBlock.fontSize / 2 : a.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3 : (c.textBlock.angle = 90, s(h.startValue) ? a.x += c.textBlock.height - c.textBlock.fontSize /
                                2 : a.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3), a.y = -90 === c.textBlock.angle ? "near" === c.stripLine.labelAlign ? this.chart.plotArea.y2 - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y1 + c.textBlock.width + 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y1 + 3) : "top" === this._position ?
                            (c.textBlock.maxWidth = this.options.stripLines[b].labelMaxWidth ? this.options.stripLines[b].labelMaxWidth : this.chart.plotArea.height - 3, c.textBlock.measureText(), a.x - c.textBlock.height > this.chart.plotArea.x1 ? s(h.startValue) ? a.x -= c.textBlock.height - c.textBlock.fontSize / 2 : a.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3 : (c.textBlock.angle = 90, s(h.startValue) ? a.x += c.textBlock.height - c.textBlock.fontSize / 2 : a.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3), a.y = -90 === c.textBlock.angle ? "near" === c.stripLine.labelAlign ?
                                this.chart.plotArea.y1 + c.textBlock.width + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + c.textBlock.width) / 2 : this.chart.plotArea.y2 - 3 : "near" === c.stripLine.labelAlign ? this.chart.plotArea.y1 + 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2 : this.chart.plotArea.y2 - c.textBlock.width - 3) : "left" === this._position ? (c.textBlock.maxWidth = this.options.stripLines[b].labelMaxWidth ? this.options.stripLines[b].labelMaxWidth :
                                this.chart.plotArea.width - 3, c.textBlock.angle = 0, c.textBlock.measureText(), a.y - c.textBlock.height > this.chart.plotArea.y1 ? s(h.startValue) ? a.y -= c.textBlock.height - c.textBlock.fontSize / 2 : a.y -= c.textBlock.height / 2 - c.textBlock.fontSize + 3 : a.y - c.textBlock.height < this.chart.plotArea.y2 ? a.y += c.textBlock.fontSize / 2 + 3 : s(h.startValue) ? a.y -= c.textBlock.height - c.textBlock.fontSize / 2 : a.y -= c.textBlock.height / 2 - c.textBlock.fontSize + 3, a.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x1 + 3 : "center" === c.stripLine.labelAlign ?
                                (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x2 - c.textBlock.width - 3) : "right" === this._position && (c.textBlock.maxWidth = this.options.stripLines[b].labelMaxWidth ? this.options.stripLines[b].labelMaxWidth : this.chart.plotArea.width - 3, c.textBlock.angle = 0, c.textBlock.measureText(), a.y - +c.textBlock.height > this.chart.plotArea.y1 ? s(h.startValue) ? a.y -= c.textBlock.height - c.textBlock.fontSize / 2 : a.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 - 3 : a.y - c.textBlock.height <
                                this.chart.plotArea.y2 ? a.y += c.textBlock.fontSize / 2 + 3 : s(h.startValue) ? a.y -= c.textBlock.height - c.textBlock.fontSize / 2 : a.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3, a.x = "near" === c.stripLine.labelAlign ? this.chart.plotArea.x2 - c.textBlock.width - 3 : "center" === c.stripLine.labelAlign ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2 : this.chart.plotArea.x1 + 3);
                        c.textBlock.x = a.x;
                        c.textBlock.y = a.y;
                        m.push(c)
                    }
                if (!k) {
                    k = !1;
                    this.ctx.save();
                    this.ctx.beginPath();
                    this.ctx.rect(this.chart.plotArea.x1,
                        this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                    this.ctx.clip();
                    for (b = 0; b < l.length; b++) h = l[b], h.showOnTop ? f || (f = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() {
                        this.ctx.save();
                        this.ctx.beginPath();
                        this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                        this.ctx.clip();
                        for (e = 0; e < l.length; e++) h = l[e], h.showOnTop && h.render();
                        this.ctx.restore()
                    }, h)) : h.render();
                    for (b = 0; b < m.length; b++) c = m[b], c.stripLine.showOnTop ?
                        k || (k = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() { for (e = 0; e < m.length; e++) c = m[e], "inside" === c.stripLine.labelPlacement && c.stripLine.showOnTop && (d.ctx.save(), d.ctx.beginPath(), d.ctx.rect(d.chart.plotArea.x1, d.chart.plotArea.y1, d.chart.plotArea.width, d.chart.plotArea.height), d.ctx.clip(), c.textBlock.render(!0), d.ctx.restore()) }, c.textBlock)) : "inside" === c.stripLine.labelPlacement && c.textBlock.render(!0);
                    this.ctx.restore();
                    k = !0
                }
                if (k)
                    for (k = !1, b = 0; b < m.length; b++) c = m[b], c.stripLine.showOnTop ?
                        k || (k = !0, this.chart.addEventListener("dataAnimationIterationEnd", function() { for (e = 0; e < m.length; e++) c = m[e], "outside" === c.stripLine.labelPlacement && c.stripLine.showOnTop && c.textBlock.render(!0) }, c.textBlock)) : "outside" === c.stripLine.labelPlacement && c.textBlock.render(!0)
            }
        };
        D.prototype.renderBreaksBackground = function() {
            this.chart._breaksCanvas && (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length && this.maskCanvas) && (this.chart._breaksCanvasCtx.save(), this.chart._breaksCanvasCtx.beginPath(), this.chart._breaksCanvasCtx.rect(this.chart.plotArea.x1,
                this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height), this.chart._breaksCanvasCtx.clip(), this.chart._breaksCanvasCtx.drawImage(this.maskCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx.restore())
        };
        D.prototype.createMask = function() {
            if (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length) {
                var a = this.scaleBreaks._appliedBreaks;
                u ? (this.maskCanvas = sa(this.chart.width, this.chart.height), this.maskCtx = this.maskCanvas.getContext("2d")) : (this.maskCanvas =
                    this.chart.plotArea.canvas, this.maskCtx = this.chart.plotArea.ctx);
                this.maskCtx.save();
                this.maskCtx.beginPath();
                this.maskCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                this.maskCtx.clip();
                for (var d = 0; d < a.length; d++) a[d].endValue < this.viewportMinimum || (a[d].startValue > this.viewportMaximum || isNaN(this.range)) || a[d].render(this.maskCtx);
                this.maskCtx.restore()
            }
        };
        D.prototype.renderCrosshair = function(a, d) {
            isFinite(this.minimum) && isFinite(this.maximum) &&
                (this.crosshair.render(a, d), this.crosshair.dispatchEvent("updated", { chart: this.chart, crosshair: this.options, axis: this, value: this.crosshair.value }, this))
        };
        D.prototype.showCrosshair = function(a) { s(a) || (a < this.viewportMinimum || a > this.viewportMaximum) || ("top" === this._position || "bottom" === this._position ? this.crosshair.render(this.convertValueToPixel(a), null, a) : this.crosshair.render(null, this.convertValueToPixel(a), a)) };
        D.prototype.renderGrid = function() {
            if (this.gridThickness && 0 < this.gridThickness) {
                var a =
                    this.chart.ctx;
                a.save();
                var d, c = this.chart.plotArea;
                a.lineWidth = this.gridThickness;
                a.strokeStyle = this.gridColor;
                a.setLineDash && a.setLineDash(N(this.gridDashType, this.gridThickness));
                if ("bottom" === this._position || "top" === this._position)
                    for (b = 0; b < this._labels.length; b++) this._labels[b].position < this.viewportMinimum || (this._labels[b].position > this.viewportMaximum || this._labels[b].breaksLabelType) || (a.beginPath(), d = this.getPixelCoordinatesOnAxis(this._labels[b].position), d = 1 === a.lineWidth % 2 ? (d.x << 0) +
                        0.5 : d.x << 0, a.moveTo(d, c.y1 << 0), a.lineTo(d, c.y2 << 0), a.stroke());
                else if ("left" === this._position || "right" === this._position)
                    for (var b = 0; b < this._labels.length; b++) this._labels[b].position < this.viewportMinimum || (this._labels[b].position > this.viewportMaximum || this._labels[b].breaksLabelType) || (a.beginPath(), d = this.getPixelCoordinatesOnAxis(this._labels[b].position), d = 1 === a.lineWidth % 2 ? (d.y << 0) + 0.5 : d.y << 0, a.moveTo(c.x1 << 0, d), a.lineTo(c.x2 << 0, d), a.stroke());
                a.restore()
            }
        };
        D.prototype.renderAxisLine = function() {
            var a =
                this.chart.ctx,
                d = u ? this.chart._preRenderCtx : a,
                c = Math.ceil(this.tickThickness / (this.reversed ? -2 : 2)),
                b = Math.ceil(this.tickThickness / (this.reversed ? 2 : -2)),
                e, f;
            d.save();
            if ("bottom" === this._position || "top" === this._position) {
                if (this.lineThickness) {
                    this.reversed ? (e = this.lineCoordinates.x2, f = this.lineCoordinates.x1) : (e = this.lineCoordinates.x1, f = this.lineCoordinates.x2);
                    d.lineWidth = this.lineThickness;
                    d.strokeStyle = this.lineColor ? this.lineColor : "black";
                    d.setLineDash && d.setLineDash(N(this.lineDashType, this.lineThickness));
                    var k = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
                    d.beginPath();
                    if (this.scaleBreaks && !s(this.scaleBreaks.firstBreakIndex))
                        if (s(this.scaleBreaks.lastBreakIndex)) e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + b;
                        else
                            for (var l = this.scaleBreaks.firstBreakIndex; l <= this.scaleBreaks.lastBreakIndex; l++) d.moveTo(e, k), d.lineTo(this.scaleBreaks._appliedBreaks[l].startPixel + c, k), e = this.scaleBreaks._appliedBreaks[l].endPixel + b;
                    e && (d.moveTo(e,
                        k), d.lineTo(f, k));
                    d.stroke()
                }
            } else if (("left" === this._position || "right" === this._position) && this.lineThickness) {
                this.reversed ? (e = this.lineCoordinates.y1, f = this.lineCoordinates.y2) : (e = this.lineCoordinates.y2, f = this.lineCoordinates.y1);
                d.lineWidth = this.lineThickness;
                d.strokeStyle = this.lineColor;
                d.setLineDash && d.setLineDash(N(this.lineDashType, this.lineThickness));
                k = 1 === this.lineThickness % 2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 << 0;
                d.beginPath();
                if (this.scaleBreaks && !s(this.scaleBreaks.firstBreakIndex))
                    if (s(this.scaleBreaks.lastBreakIndex)) e =
                        this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + c;
                    else
                        for (l = this.scaleBreaks.firstBreakIndex; l <= this.scaleBreaks.lastBreakIndex; l++) d.moveTo(k, e), d.lineTo(k, this.scaleBreaks._appliedBreaks[l].startPixel + b), e = this.scaleBreaks._appliedBreaks[l].endPixel + c;
                e && (d.moveTo(k, e), d.lineTo(k, f));
                d.stroke()
            }
            u && (a.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height), this.chart._breaksCanvasCtx && this.chart._breaksCanvasCtx.drawImage(this.chart._preRenderCanvas,
                0, 0, this.chart.width, this.chart.height), d.clearRect(0, 0, this.chart.width, this.chart.height));
            d.restore()
        };
        D.prototype.getPixelCoordinatesOnAxis = function(a) { var d = {}; if ("bottom" === this._position || "top" === this._position) d.x = this.convertValueToPixel(a), d.y = this.lineCoordinates.y1; if ("left" === this._position || "right" === this._position) d.y = this.convertValueToPixel(a), d.x = this.lineCoordinates.x2; return d };
        D.prototype.convertPixelToValue = function(a) {
            if ("undefined" === typeof a) return null;
            var d = 0,
                c = 0,
                b, d = !0,
                e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
                c = "number" === typeof a ? a : "left" === this._position || "right" === this._position ? a.y : a.x;
            if (this.logarithmic) {
                a = b = Math.pow(this.logarithmBase, (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit);
                if (c <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !== this.reversed)
                    for (c = 0; c < e.length; c++) {
                        if (!(e[c].endValue < this.conversionParameters.minimum))
                            if (d)
                                if (e[c].startValue < this.conversionParameters.minimum) {
                                    if (1 <
                                        e[c].size && this.conversionParameters.minimum * Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)) < e[c].endValue) { a = Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)); break } else a *= e[c].endValue / this.conversionParameters.minimum / Math.pow(e[c].size, Math.log(e[c].endValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue)), b /= Math.pow(e[c].size, Math.log(e[c].endValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue));
                                    d = !1
                                } else if (b > e[c].startValue / this.conversionParameters.minimum) {
                            b /= e[c].startValue / this.conversionParameters.minimum;
                            if (b < e[c].size) { a *= Math.pow(e[c].endValue / e[c].startValue, 1 === e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) / b; break } else a *= e[c].endValue / e[c].startValue / e[c].size;
                            b /= e[c].size;
                            d = !1
                        } else break;
                        else if (b > e[c].startValue / e[c - 1].endValue) {
                            b /= e[c].startValue / e[c - 1].endValue;
                            if (b < e[c].size) { a *= Math.pow(e[c].endValue / e[c].startValue, 1 === e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) / b; break } else a *=
                                e[c].endValue / e[c].startValue / e[c].size;
                            b /= e[c].size
                        } else break
                    } else
                        for (c = e.length - 1; 0 <= c; c--)
                            if (!(e[c].startValue > this.conversionParameters.minimum))
                                if (d)
                                    if (e[c].endValue > this.conversionParameters.minimum) {
                                        if (1 < e[c].size && this.conversionParameters.minimum * Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)) > e[c].startValue) { a = Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)); break } else a *= e[c].startValue / this.conversionParameters.minimum * Math.pow(e[c].size,
                                            Math.log(e[c].startValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue)) * b, b *= Math.pow(e[c].size, Math.log(this.conversionParameters.minimum / e[c].startValue) / Math.log(e[c].endValue / e[c].startValue));
                                        d = !1
                                    } else if (b < e[c].endValue / this.conversionParameters.minimum) {
                    b /= e[c].endValue / this.conversionParameters.minimum;
                    if (b > 1 / e[c].size) { a *= Math.pow(e[c].endValue / e[c].startValue, 1 >= e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) * b; break } else a /= e[c].endValue / e[c].startValue / e[c].size;
                    b *= e[c].size;
                    d = !1
                } else break;
                else if (b < e[c].endValue / e[c + 1].startValue) {
                    b /= e[c].endValue / e[c + 1].startValue;
                    if (b > 1 / e[c].size) { a *= Math.pow(e[c].endValue / e[c].startValue, 1 >= e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) * b; break } else a /= e[c].endValue / e[c].startValue / e[c].size;
                    b *= e[c].size
                } else break;
                d = a * this.viewportMinimum
            } else {
                a = b = (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit;
                if (c <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position) !==
                    this.reversed)
                    for (c = 0; c < e.length; c++) {
                        if (!(e[c].endValue < this.conversionParameters.minimum))
                            if (d)
                                if (e[c].startValue < this.conversionParameters.minimum) {
                                    if (e[c].size && this.conversionParameters.minimum + b * (e[c].endValue - e[c].startValue) / e[c].size < e[c].endValue) { a = 0 >= e[c].size ? 0 : b * (e[c].endValue - e[c].startValue) / e[c].size; break } else a += e[c].endValue - this.conversionParameters.minimum - e[c].size * (e[c].endValue - this.conversionParameters.minimum) / (e[c].endValue - e[c].startValue), b -= e[c].size * (e[c].endValue -
                                        this.conversionParameters.minimum) / (e[c].endValue - e[c].startValue);
                                    d = !1
                                } else if (b > e[c].startValue - this.conversionParameters.minimum) {
                            b -= e[c].startValue - this.conversionParameters.minimum;
                            if (b < e[c].size) { a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) - b; break } else a += e[c].endValue - e[c].startValue - e[c].size;
                            b -= e[c].size;
                            d = !1
                        } else break;
                        else if (b > e[c].startValue - e[c - 1].endValue) {
                            b -= e[c].startValue - e[c - 1].endValue;
                            if (b < e[c].size) {
                                a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) -
                                    b;
                                break
                            } else a += e[c].endValue - e[c].startValue - e[c].size;
                            b -= e[c].size
                        } else break
                    } else
                        for (c = e.length - 1; 0 <= c; c--)
                            if (!(e[c].startValue > this.conversionParameters.minimum))
                                if (d)
                                    if (e[c].endValue > this.conversionParameters.minimum)
                                        if (e[c].size && this.conversionParameters.minimum + b * (e[c].endValue - e[c].startValue) / e[c].size > e[c].startValue) { a = 0 >= e[c].size ? 0 : b * (e[c].endValue - e[c].startValue) / e[c].size; break } else a += e[c].startValue - this.conversionParameters.minimum + e[c].size * (this.conversionParameters.minimum -
                                            e[c].startValue) / (e[c].endValue - e[c].startValue), b += e[c].size * (this.conversionParameters.minimum - e[c].startValue) / (e[c].endValue - e[c].startValue), d = !1;
                else if (b < e[c].endValue - this.conversionParameters.minimum) {
                    b -= e[c].endValue - this.conversionParameters.minimum;
                    if (b > -1 * e[c].size) { a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) + b; break } else a -= e[c].endValue - e[c].startValue - e[c].size;
                    b += e[c].size;
                    d = !1
                } else break;
                else if (b < e[c].endValue - e[c + 1].startValue) {
                    b -= e[c].endValue - e[c + 1].startValue;
                    if (b > -1 * e[c].size) { a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) + b; break } else a -= e[c].endValue - e[c].startValue - e[c].size;
                    b += e[c].size
                } else break;
                d = this.conversionParameters.minimum + a
            }
            return d
        };
        D.prototype.convertValueToPixel = function(a) {
            a = this.getApparentDifference(this.conversionParameters.minimum, a, a);
            return this.logarithmic ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * Math.log(a / this.conversionParameters.minimum) / this.conversionParameters.lnLogarithmBase +
                0.5 << 0 : "axisX" === this.type ? this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5 << 0 : this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5
        };
        D.prototype.getApparentDifference = function(a, d, c, b) {
            var e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
            if (this.logarithmic) {
                c = s(c) ? d / a : c;
                for (var f = 0; f < e.length && !(d < e[f].startValue); f++) a > e[f].endValue || (a <= e[f].startValue && d >= e[f].endValue ?
                    c = c / e[f].endValue * e[f].startValue * e[f].size : a >= e[f].startValue && d >= e[f].endValue ? c = c / e[f].endValue * a * Math.pow(e[f].size, Math.log(e[f].endValue / a) / Math.log(e[f].endValue / e[f].startValue)) : a <= e[f].startValue && d <= e[f].endValue ? c = c / d * e[f].startValue * Math.pow(e[f].size, Math.log(d / e[f].startValue) / Math.log(e[f].endValue / e[f].startValue)) : !b && (a > e[f].startValue && d < e[f].endValue) && (c = a * Math.pow(e[f].size, Math.log(d / a) / Math.log(e[f].endValue / e[f].startValue))))
            } else
                for (c = s(c) ? Math.abs(d - a) : c, f = 0; f < e.length &&
                    !(d < e[f].startValue); f++) a > e[f].endValue || (a <= e[f].startValue && d >= e[f].endValue ? c = c - e[f].endValue + e[f].startValue + e[f].size : a > e[f].startValue && d >= e[f].endValue ? c = c - e[f].endValue + a + e[f].size * (e[f].endValue - a) / (e[f].endValue - e[f].startValue) : a <= e[f].startValue && d < e[f].endValue ? c = c - d + e[f].startValue + e[f].size * (d - e[f].startValue) / (e[f].endValue - e[f].startValue) : !b && (a > e[f].startValue && d < e[f].endValue) && (c = a + e[f].size * (d - a) / (e[f].endValue - e[f].startValue)));
            return c
        };
        D.prototype.setViewPortRange = function(a,
            d) {
            this.sessionVariables.newViewportMinimum = this.viewportMinimum = Math.min(a, d);
            this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(a, d)
        };
        D.prototype.getXValueAt = function(a) { if (!a) return null; var d = null; "left" === this._position ? d = this.convertPixelToValue(a.y) : "bottom" === this._position && (d = this.convertPixelToValue(a.x)); return d };
        D.prototype.calculateValueToPixelConversionParameters = function(a) {
            a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
            var d = {
                    pixelPerUnit: null,
                    minimum: null,
                    reference: null
                },
                c = this.lineCoordinates.width,
                b = this.lineCoordinates.height,
                c = "bottom" === this._position || "top" === this._position ? c : b,
                b = Math.abs(this.range);
            if (this.logarithmic)
                for (var e = 0; e < a.length && !(this.viewportMaximum < a[e].startValue); e++) this.viewportMinimum > a[e].endValue || (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue ? c = 0 : this.viewportMinimum <= a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b / a[e].endValue * a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ?
                        c * (1 - parseFloat(a[e].spacing) / 100) : c - Math.min(a[e].spacing, 0.1 * c)) : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b / a[e].endValue * this.viewportMinimum, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * Math.log(a[e].endValue / this.viewportMinimum) / Math.log(a[e].endValue / a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * Math.log(a[e].endValue / this.viewportMinimum) / Math.log(a[e].endValue / a[e].startValue)) : this.viewportMinimum <= a[e].startValue && this.viewportMaximum <
                    a[e].endValue && (b = b / this.viewportMaximum * a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * Math.log(this.viewportMaximum / a[e].startValue) / Math.log(a[e].endValue / a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * Math.log(this.viewportMaximum / a[e].startValue) / Math.log(a[e].endValue / a[e].startValue)));
            else
                for (e = 0; e < a.length && !(this.viewportMaximum < a[e].startValue); e++) this.viewportMinimum > a[e].endValue || (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <=
                    a[e].endValue ? c = 0 : this.viewportMinimum <= a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b - a[e].endValue + a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100) : c - Math.min(a[e].spacing, 0.1 * c)) : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue ? (b = b - a[e].endValue + this.viewportMinimum, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * (a[e].endValue - this.viewportMinimum) / (a[e].endValue - a[e].startValue)) : c - Math.min(a[e].spacing,
                        0.1 * c) * (a[e].endValue - this.viewportMinimum) / (a[e].endValue - a[e].startValue)) : this.viewportMinimum <= a[e].startValue && this.viewportMaximum < a[e].endValue && (b = b - this.viewportMaximum + a[e].startValue, c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100 * (this.viewportMaximum - a[e].startValue) / (a[e].endValue - a[e].startValue)) : c - Math.min(a[e].spacing, 0.1 * c) * (this.viewportMaximum - a[e].startValue) / (a[e].endValue - a[e].startValue)));
            d.minimum = this.viewportMinimum;
            d.maximum = this.viewportMaximum;
            d.range = b;
            if ("bottom" === this._position || "top" === this._position) this.logarithmic ? (d.lnLogarithmBase = Math.log(this.logarithmBase), d.pixelPerUnit = (this.reversed ? -1 : 1) * c * d.lnLogarithmBase / Math.log(Math.abs(b))) : d.pixelPerUnit = (this.reversed ? -1 : 1) * c / Math.abs(b), d.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1;
            if ("left" === this._position || "right" === this._position) this.logarithmic ? (d.lnLogarithmBase = Math.log(this.logarithmBase), d.pixelPerUnit = (this.reversed ? 1 : -1) * c * d.lnLogarithmBase /
                Math.log(Math.abs(b))) : d.pixelPerUnit = (this.reversed ? 1 : -1) * c / Math.abs(b), d.reference = this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2;
            this.conversionParameters = d
        };
        D.prototype.calculateAxisParameters = function() {
            if (this.logarithmic) this.calculateLogarithmicAxisParameters();
            else {
                var a = this.chart.layoutManager.getFreeSpace(),
                    d = !1,
                    c = !1;
                "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
                var a = "axisX" ===
                    this.type ? "xySwapped" === this.chart.plotInfo.axisPlacement ? 62 : 70 : "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 : 40,
                    b = 4;
                "axisX" === this.type && (b = 600 > this.maxWidth ? 8 : 6);
                var a = Math.max(b, Math.floor(this.maxWidth / a)),
                    e, f, k, b = 0;
                !s(this.options.viewportMinimum) && (!s(this.options.viewportMaximum) && this.options.viewportMinimum >= this.options.viewportMaximum) && (this.viewportMinimum = this.viewportMaximum = null);
                if (s(this.options.viewportMinimum) && !s(this.sessionVariables.newViewportMinimum) && !isNaN(this.sessionVariables.newViewportMinimum)) this.viewportMinimum =
                    this.sessionVariables.newViewportMinimum;
                else if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
                if (s(this.options.viewportMaximum) && !s(this.sessionVariables.newViewportMaximum) && !isNaN(this.sessionVariables.newViewportMaximum)) this.viewportMaximum = this.sessionVariables.newViewportMaximum;
                else if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
                if (this.scaleBreaks)
                    for (b = 0; b < this.scaleBreaks._appliedBreaks.length; b++)
                        if ((!s(this.sessionVariables.newViewportMinimum) &&
                                this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue || !s(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[b].startValue || !s(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue) && (!s(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue || !s(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[b].endValue ||
                                !s(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue)) { this.scaleBreaks._appliedBreaks.splice(b, 1); break }
                if ("axisX" === this.type) {
                    if (this.dataSeries && 0 < this.dataSeries.length)
                        for (e = 0; e < this.dataSeries.length; e++) "dateTime" === this.dataSeries[e].xValueType && (c = !0);
                    e = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin;
                    f = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax;
                    0 === f - e && (b = "undefined" === typeof this.options.interval ?
                        0.4 : this.options.interval, f += b, e -= b);
                    Infinity !== this.dataInfo.minDiff ? k = this.dataInfo.minDiff : 1 < f - e ? k = 0.5 * Math.abs(f - e) : (k = 1, c && (d = !0))
                } else "axisY" === this.type && (e = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, f = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, isFinite(e) || isFinite(f) ? isFinite(e) ? isFinite(f) || (f = e) : e = f : (f = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval, e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ?
                    0 : Infinity), 0 === e && 0 === f ? (f += 9, e = 0) : 0 === f - e ? (b = Math.min(Math.abs(0.01 * Math.abs(f)), 5), f += b, e -= b) : e > f ? (b = Math.min(0.01 * Math.abs(this.getApparentDifference(f, e, null, !0)), 5), 0 <= f ? e = f - b : f = isFinite(e) ? e + b : 0) : (b = Math.min(0.01 * Math.abs(this.getApparentDifference(e, f, null, !0)), 0.05), 0 !== f && (f += b), 0 !== e && (e -= b)), k = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < f - e ? 0.5 * Math.abs(f - e) : 1, this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 0 < e && (e = 0), this.includeZero && (null ===
                    this.viewportMaximum || isNaN(this.viewportMaximum)) && 0 > f && (f = 0));
                b = this.getApparentDifference(isNaN(this.viewportMinimum) || null === this.viewportMinimum ? e : this.viewportMinimum, isNaN(this.viewportMaximum) || null === this.viewportMaximum ? f : this.viewportMaximum, null, !0);
                if ("axisX" === this.type && c) {
                    this.intervalType || (b / 1 <= a ? (this.interval = 1, this.intervalType = "millisecond") : b / 2 <= a ? (this.interval = 2, this.intervalType = "millisecond") : b / 5 <= a ? (this.interval = 5, this.intervalType = "millisecond") : b / 10 <= a ? (this.interval =
                        10, this.intervalType = "millisecond") : b / 20 <= a ? (this.interval = 20, this.intervalType = "millisecond") : b / 50 <= a ? (this.interval = 50, this.intervalType = "millisecond") : b / 100 <= a ? (this.interval = 100, this.intervalType = "millisecond") : b / 200 <= a ? (this.interval = 200, this.intervalType = "millisecond") : b / 250 <= a ? (this.interval = 250, this.intervalType = "millisecond") : b / 300 <= a ? (this.interval = 300, this.intervalType = "millisecond") : b / 400 <= a ? (this.interval = 400, this.intervalType = "millisecond") : b / 500 <= a ? (this.interval = 500, this.intervalType =
                        "millisecond") : b / (1 * Q.secondDuration) <= a ? (this.interval = 1, this.intervalType = "second") : b / (2 * Q.secondDuration) <= a ? (this.interval = 2, this.intervalType = "second") : b / (5 * Q.secondDuration) <= a ? (this.interval = 5, this.intervalType = "second") : b / (10 * Q.secondDuration) <= a ? (this.interval = 10, this.intervalType = "second") : b / (15 * Q.secondDuration) <= a ? (this.interval = 15, this.intervalType = "second") : b / (20 * Q.secondDuration) <= a ? (this.interval = 20, this.intervalType = "second") : b / (30 * Q.secondDuration) <= a ? (this.interval = 30, this.intervalType =
                        "second") : b / (1 * Q.minuteDuration) <= a ? (this.interval = 1, this.intervalType = "minute") : b / (2 * Q.minuteDuration) <= a ? (this.interval = 2, this.intervalType = "minute") : b / (5 * Q.minuteDuration) <= a ? (this.interval = 5, this.intervalType = "minute") : b / (10 * Q.minuteDuration) <= a ? (this.interval = 10, this.intervalType = "minute") : b / (15 * Q.minuteDuration) <= a ? (this.interval = 15, this.intervalType = "minute") : b / (20 * Q.minuteDuration) <= a ? (this.interval = 20, this.intervalType = "minute") : b / (30 * Q.minuteDuration) <= a ? (this.interval = 30, this.intervalType =
                        "minute") : b / (1 * Q.hourDuration) <= a ? (this.interval = 1, this.intervalType = "hour") : b / (2 * Q.hourDuration) <= a ? (this.interval = 2, this.intervalType = "hour") : b / (3 * Q.hourDuration) <= a ? (this.interval = 3, this.intervalType = "hour") : b / (6 * Q.hourDuration) <= a ? (this.interval = 6, this.intervalType = "hour") : b / (1 * Q.dayDuration) <= a ? (this.interval = 1, this.intervalType = "day") : b / (2 * Q.dayDuration) <= a ? (this.interval = 2, this.intervalType = "day") : b / (4 * Q.dayDuration) <= a ? (this.interval = 4, this.intervalType = "day") : b / (1 * Q.weekDuration) <= a ? (this.interval =
                        1, this.intervalType = "week") : b / (2 * Q.weekDuration) <= a ? (this.interval = 2, this.intervalType = "week") : b / (3 * Q.weekDuration) <= a ? (this.interval = 3, this.intervalType = "week") : b / (1 * Q.monthDuration) <= a ? (this.interval = 1, this.intervalType = "month") : b / (2 * Q.monthDuration) <= a ? (this.interval = 2, this.intervalType = "month") : b / (3 * Q.monthDuration) <= a ? (this.interval = 3, this.intervalType = "month") : b / (6 * Q.monthDuration) <= a ? (this.interval = 6, this.intervalType = "month") : (this.interval = b / (1 * Q.yearDuration) <= a ? 1 : b / (2 * Q.yearDuration) <=
                        a ? 2 : b / (4 * Q.yearDuration) <= a ? 4 : Math.floor(D.getNiceNumber(b / (a - 1), !0) / Q.yearDuration), this.intervalType = "year"));
                    if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = e - k / 2;
                    if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = f + k / 2;
                    d ? this.autoValueFormatString = "MMM DD YYYY HH:mm" : "year" === this.intervalType ? this.autoValueFormatString = "YYYY" : "month" === this.intervalType ? this.autoValueFormatString = "MMM YYYY" : "week" === this.intervalType ? this.autoValueFormatString =
                        "MMM DD YYYY" : "day" === this.intervalType ? this.autoValueFormatString = "MMM DD YYYY" : "hour" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "minute" === this.intervalType ? this.autoValueFormatString = "hh:mm TT" : "second" === this.intervalType ? this.autoValueFormatString = "hh:mm:ss TT" : "millisecond" === this.intervalType && (this.autoValueFormatString = "fff'ms'");
                    this.valueFormatString || (this.valueFormatString = this.autoValueFormatString)
                } else {
                    this.intervalType = "number";
                    b = D.getNiceNumber(b, !1);
                    this.interval =
                        this.options && 0 < this.options.interval ? this.options.interval : D.getNiceNumber(b / (a - 1), !0);
                    if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? e - k / 2 : Math.floor(e / this.interval) * this.interval;
                    if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? f + k / 2 : Math.ceil(f / this.interval) * this.interval;
                    0 === this.viewportMaximum && 0 === this.viewportMinimum && (0 === this.options.viewportMinimum ? this.viewportMaximum += 10 : 0 === this.options.viewportMaximum &&
                        (this.viewportMinimum -= 10), this.options && "undefined" === typeof this.options.interval && (this.interval = D.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0)))
                }
                if (null === this.minimum || null === this.maximum)
                    if ("axisX" === this.type ? (e = null !== this.minimum ? this.minimum : this.dataInfo.min, f = null !== this.maximum ? this.maximum : this.dataInfo.max, 0 === f - e && (b = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval, f += b, e -= b), k = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < f - e ?
                            0.5 * Math.abs(f - e) : 1) : "axisY" === this.type && (e = null !== this.minimum ? this.minimum : this.dataInfo.min, f = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(e) || isFinite(f) ? 0 === e && 0 === f ? (f += 9, e = 0) : 0 === f - e ? (b = Math.min(Math.abs(0.01 * Math.abs(f)), 5), f += b, e -= b) : e > f ? (b = Math.min(0.01 * Math.abs(this.getApparentDifference(f, e, null, !0)), 5), 0 <= f ? e = f - b : f = isFinite(e) ? e + b : 0) : (b = Math.min(0.01 * Math.abs(this.getApparentDifference(e, f, null, !0)), 0.05), 0 !== f && (f += b), 0 !== e && (e -= b)) : (f = "undefined" === typeof this.options.interval ?
                            -Infinity : this.options.interval, e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity), k = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < f - e ? 0.5 * Math.abs(f - e) : 1, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 0 < e && (e = 0), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 0 > f && (f = 0)), Math.abs(this.getApparentDifference(e, f, null, !0)), "axisX" === this.type && c) {
                        this.valueType = "dateTime";
                        if (null === this.minimum || isNaN(this.minimum)) this.minimum =
                            e - k / 2;
                        if (null === this.maximum || isNaN(this.maximum)) this.maximum = f + k / 2
                    } else this.intervalType = this.valueType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? e - k / 2 : Math.floor(e / this.interval) * this.interval, this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum)), null === this.maximum && (this.maximum = "axisX" === this.type ? f + k / 2 : Math.ceil(f / this.interval) * this.interval, this.maximum =
                        Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum)), 0 === this.maximum && 0 === this.minimum && (0 === this.options.minimum ? this.maximum += 10 : 0 === this.options.maximum && (this.minimum -= 10));
                s(this.sessionVariables.newViewportMinimum) && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
                s(this.sessionVariables.newViewportMaximum) && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
                this.range = this.viewportMaximum - this.viewportMinimum;
                this.intervalStartPosition = "axisX" === this.type && c ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum + 0.2 * this.interval) / this.interval) * this.interval;
                this.valueFormatString || (this.valueFormatString = D.generateValueFormatString(this.range, 2))
            }
        };
        D.prototype.calculateLogarithmicAxisParameters = function() {
            var a = this.chart.layoutManager.getFreeSpace(),
                d = Math.log(this.logarithmBase),
                c;
            "bottom" === this._position || "top" === this._position ? (this.maxWidth = a.width, this.maxHeight = a.height) : (this.maxWidth = a.height, this.maxHeight = a.width);
            var a = "axisX" === this.type ? 500 > this.maxWidth ? 7 : Math.max(7, Math.floor(this.maxWidth / 100)) : Math.max(Math.floor(this.maxWidth / 50), 3),
                b, e, f, k;
            k = 1;
            if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
            if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
            if (this.scaleBreaks)
                for (k =
                    0; k < this.scaleBreaks._appliedBreaks.length; k++)
                    if ((!s(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[k].startValue || !s(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[k].startValue || !s(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[k].startValue) && (!s(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[k].endValue ||
                            !s(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[k].endValue || !s(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[k].endValue)) { this.scaleBreaks._appliedBreaks.splice(k, 1); break }
                    "axisX" === this.type ? (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 1 === e / b && (k = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ?
                0.4 : this.options.interval), e *= k, b /= k), f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin, e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax, 0 >= b && !isFinite(e) ? (e = "undefined" === typeof this.options.interval ? 0 : this.options.interval, b = 1) : 0 >= b ? b = e : isFinite(e) || (e = b), 1 === b && 1 === e ? (e *= this.logarithmBase -
                1 / this.logarithmBase, b = 1) : 1 === e / b ? (k = Math.min(e * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), e *= k, b /= k) : b > e ? (k = Math.min(b / e * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5)), 1 <= e ? b = e / k : e = b * k) : (k = Math.min(e / b * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== e && (e *= k), 1 !== b && (b /= k)), f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null ===
                this.viewportMinimum || isNaN(this.viewportMinimum)) && 1 < b && (b = 1), this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 1 > e && (e = 1));
            k = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) / (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? b : this.viewportMinimum);
            var l = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) - (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? b : this.viewportMinimum);
            this.intervalType =
                "number";
            k = Math.pow(this.logarithmBase, D.getNiceNumber(Math.abs(Math.log(k) / d), !1));
            this.options && 0 < this.options.interval ? this.interval = this.options.interval : (this.interval = D.getNiceExponent(Math.log(k) / d / (a - 1), !0), c = D.getNiceNumber(l / (a - 1), !0));
            if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? b / Math.sqrt(f) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(b) / d / this.interval));
            if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum =
                "axisX" === this.type ? e * Math.sqrt(f) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / d / this.interval));
            1 === this.viewportMaximum && 1 === this.viewportMinimum && (1 === this.options.viewportMinimum ? this.viewportMaximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.viewportMaximum && (this.viewportMinimum /= this.logarithmBase - 1 / this.logarithmBase), this.options && "undefined" === typeof this.options.interval && (this.interval = D.getNiceExponent(Math.ceil(Math.log(k) / d) / (a - 1)), c = D.getNiceNumber((this.viewportMaximum -
                this.viewportMinimum) / (a - 1), !0)));
            if (null === this.minimum || null === this.maximum) "axisX" === this.type ? (b = null !== this.minimum ? this.minimum : this.dataInfo.min, e = null !== this.maximum ? this.maximum : this.dataInfo.max, 1 === e / b && (k = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), e *= k, b /= k), f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase) : "axisY" === this.type && (b = null !== this.minimum ?
                this.minimum : this.dataInfo.min, e = null !== this.maximum ? this.maximum : this.dataInfo.max, isFinite(b) || isFinite(e) ? 1 === b && 1 === e ? (e *= this.logarithmBase, b /= this.logarithmBase) : 1 === e / b ? (k = Math.pow(this.logarithmBase, this.interval), e *= k, b /= k) : b > e ? (k = Math.min(0.01 * (b / e), 5), 1 <= e ? b = e / k : e = b * k) : (k = Math.min(e / b * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04)), 1 !== e && (e *= k), 1 !== b && (b /= k)) : (e = "undefined" === typeof this.options.interval ? 0 : this.options.interval, b = 1), f = Infinity !== this.dataInfo.minDiff ?
                this.dataInfo.minDiff : e / b > this.logarithmBase ? e / b * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase, this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 1 < b && (b = 1), this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 1 > e && (e = 1)), this.intervalType = "number", null === this.minimum && (this.minimum = "axisX" === this.type ? b / Math.sqrt(f) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(b) / d / this.interval)), this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum ||
                isNaN(this.sessionVariables.viewportMinimum) ? "undefined" === typeof this.sessionVariables.newViewportMinimum ? Infinity : this.sessionVariables.newViewportMinimum : this.sessionVariables.viewportMinimum)), null === this.maximum && (this.maximum = "axisX" === this.type ? e * Math.sqrt(f) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / d / this.interval)), this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? "undefined" === typeof this.sessionVariables.newViewportMaximum ?
                0 : this.sessionVariables.newViewportMaximum : this.sessionVariables.viewportMaximum)), 1 === this.maximum && 1 === this.minimum && (1 === this.options.minimum ? this.maximum *= this.logarithmBase - 1 / this.logarithmBase : 1 === this.options.maximum && (this.minimum /= this.logarithmBase - 1 / this.logarithmBase));
            this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
            this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum);
            this.viewportMinimum > this.viewportMaximum && (!this.options.viewportMinimum && !this.options.minimum ||
                this.options.viewportMaximum || this.options.maximum ? this.options.viewportMinimum || this.options.minimum || !this.options.viewportMaximum && !this.options.maximum || (this.viewportMinimum = this.minimum = (this.options.viewportMaximum || this.options.maximum) / Math.pow(this.logarithmBase, 2 * Math.ceil(this.interval))) : this.viewportMaximum = this.maximum = this.options.viewportMinimum || this.options.minimum);
            b = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (d * this.interval) + 0.2) * this.interval);
            this.range =
                this.viewportMaximum / this.viewportMinimum;
            this.noTicks = a;
            if (!this.options.interval && this.range < Math.pow(this.logarithmBase, 8 > this.viewportMaximum || 3 > a ? 2 : 3)) {
                for (d = Math.floor(this.viewportMinimum / c + 0.5) * c; d < this.viewportMinimum;) d += c;
                this.equidistantInterval = !1;
                this.intervalStartPosition = d;
                this.interval = c
            } else this.options.interval || (c = Math.ceil(this.interval), this.range > this.interval && (this.interval = c, b = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (d * this.interval) + 0.2) * this.interval))),
                this.equidistantInterval = !0, this.intervalStartPosition = b;
            if (!this.valueFormatString && (this.valueFormatString = "#,##0.##", 1 > this.viewportMinimum)) {
                d = Math.floor(Math.abs(Math.log(this.viewportMinimum) / Math.LN10)) + 2;
                if (isNaN(d) || !isFinite(d)) d = 2;
                if (2 < d)
                    for (k = 0; k < d - 2; k++) this.valueFormatString += "#"
            }
        };
        D.generateValueFormatString = function(a, d) {
            var c = "#,##0.",
                b = d;
            1 > a && (b += Math.floor(Math.abs(Math.log(a) / Math.LN10)), isNaN(b) || !isFinite(b)) && (b = d);
            for (var e = 0; e < b; e++) c += "#";
            return c
        };
        D.getNiceExponent = function(a,
            d) {
            var c = Math.floor(Math.log(a) / Math.LN10),
                b = a / Math.pow(10, c),
                b = 0 > c ? 1 >= b ? 1 : 5 >= b ? 5 : 10 : Math.max(Math.floor(b), 1);
            return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20))
        };
        D.getNiceNumber = function(a, d) {
            var c = Math.floor(Math.log(a) / Math.LN10),
                b = a / Math.pow(10, c),
                b = d ? 1.5 > b ? 1 : 3 > b ? 2 : 7 > b ? 5 : 10 : 1 >= b ? 1 : 2 >= b ? 2 : 5 >= b ? 5 : 10;
            return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20))
        };
        D.prototype.getLabelStartPoint = function() {
            var a = Q[this.intervalType + "Duration"] * this.interval,
                a =
                new Date(Math.floor(this.viewportMinimum / a) * a);
            if ("millisecond" !== this.intervalType)
                if ("second" === this.intervalType) 0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
                else if ("minute" === this.intervalType) { if (0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMinutes(a.getMinutes() + 1), a.setSeconds(0), a.setMilliseconds(0) } else if ("hour" === this.intervalType) { if (0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setHours(a.getHours() + 1), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0) } else if ("day" ===
                this.intervalType) { if (0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + 1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0) } else if ("week" === this.intervalType) { if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + (7 - a.getDay())), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0) } else if ("month" === this.intervalType) {
                if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() ||
                    0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMonth(a.getMonth() + 1), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)
            } else "year" === this.intervalType && (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) && (a.setFullYear(a.getFullYear() + 1), a.setMonth(0), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0));
            return a
        };
        na(T, W);
        na(U, W);
        U.prototype.createUserOptions = function(a) {
            if ("undefined" !==
                typeof a || this.options._isPlaceholder) {
                var d = 0;
                this.parent.options._isPlaceholder && this.parent.createUserOptions();
                this.options._isPlaceholder || (Ba(this.parent[this.optionsName]), d = this.parent.options[this.optionsName].indexOf(this.options));
                this.options = "undefined" === typeof a ? {} : a;
                this.parent.options[this.optionsName][d] = this.options
            }
        };
        U.prototype.render = function(a) {
            if (0 !== this.spacing || 0 !== this.options.lineThickness && ("undefined" !== typeof this.options.lineThickness || 0 !== this.parent.lineThickness)) {
                var d =
                    this.ctx,
                    c = this.ctx.globalAlpha;
                this.ctx = a || this.ctx;
                this.ctx.save();
                this.ctx.beginPath();
                this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                this.ctx.clip();
                var b = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.startValue),
                    e = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.endValue);
                this.ctx.strokeStyle = this.lineColor;
                this.ctx.fillStyle = this.color;
                this.ctx.beginPath();
                this.ctx.globalAlpha = 1;
                P(this.id);
                var f, k, l, m, h, n;
                a = Math.max(this.spacing,
                    3);
                var r = Math.max(0, this.lineThickness);
                this.ctx.lineWidth = r;
                this.ctx.setLineDash && this.ctx.setLineDash(N(this.lineDashType, r));
                if ("bottom" === this.scaleBreaks.parent._position || "top" === this.scaleBreaks.parent._position)
                    if (b = 1 === r % 2 ? (b.x << 0) + 0.5 : b.x << 0, k = 1 === r % 2 ? (e.x << 0) + 0.5 : e.x << 0, "top" === this.scaleBreaks.parent._position ? (e = this.chart.plotArea.y1, l = this.chart.plotArea.y2 + r / 2 + 0.5 << 0) : (e = this.chart.plotArea.y2, l = this.chart.plotArea.y1 - r / 2 + 0.5 << 0, a *= -1), this.bounds = { x1: b - r / 2, y1: e, x2: k + r / 2, y2: l }, this.ctx.moveTo(b,
                            e), "straight" === this.type || "top" === this.scaleBreaks.parent._position && 0 >= a || "bottom" === this.scaleBreaks.parent._position && 0 <= a) this.ctx.lineTo(b, l), this.ctx.lineTo(k, l), this.ctx.lineTo(k, e);
                    else if ("wavy" === this.type) {
                    m = b;
                    h = e;
                    f = 0.5;
                    n = (l - h) / a / 3;
                    for (var q = 0; q < n; q++) this.ctx.bezierCurveTo(m + f * a, h + a, m + f * a, h + 2 * a, m, h + 3 * a), h += 3 * a, f *= -1;
                    this.ctx.bezierCurveTo(m + f * a, h + a, m + f * a, h + 2 * a, m, h + 3 * a);
                    m = k;
                    f *= -1;
                    this.ctx.lineTo(m, h);
                    for (q = 0; q < n; q++) this.ctx.bezierCurveTo(m + f * a, h - a, m + f * a, h - 2 * a, m, h - 3 * a), h -= 3 * a, f *= -1
                } else {
                    if ("zigzag" ===
                        this.type) {
                        f = -1;
                        h = e + a;
                        m = b + a;
                        n = (l - h) / a / 2;
                        for (q = 0; q < n; q++) this.ctx.lineTo(m, h), m += 2 * f * a, h += 2 * a, f *= -1;
                        this.ctx.lineTo(m, h);
                        m += k - b;
                        for (q = 0; q < n + 1; q++) this.ctx.lineTo(m, h), m += 2 * f * a, h -= 2 * a, f *= -1;
                        this.ctx.lineTo(m + f * a, h + a)
                    }
                } else if ("left" === this.scaleBreaks.parent._position || "right" === this.scaleBreaks.parent._position)
                    if (e = 1 === r % 2 ? (e.y << 0) + 0.5 : e.y << 0, l = 1 === r % 2 ? (b.y << 0) + 0.5 : b.y << 0, "left" === this.scaleBreaks.parent._position ? (b = this.chart.plotArea.x1, k = this.chart.plotArea.x2 + r / 2 + 0.5 << 0) : (b = this.chart.plotArea.x2,
                            k = this.chart.plotArea.x1 - r / 2 + 0.5 << 0, a *= -1), this.bounds = { x1: b, y1: e - r / 2, x2: k, y2: l + r / 2 }, this.ctx.moveTo(b, e), "straight" === this.type || "left" === this.scaleBreaks.parent._position && 0 >= a || "right" === this.scaleBreaks.parent._position && 0 <= a) this.ctx.lineTo(k, e), this.ctx.lineTo(k, l), this.ctx.lineTo(b, l);
                    else if ("wavy" === this.type) {
                    m = b;
                    h = e;
                    f = 0.5;
                    n = (k - m) / a / 3;
                    for (q = 0; q < n; q++) this.ctx.bezierCurveTo(m + a, h + f * a, m + 2 * a, h + f * a, m + 3 * a, h), m += 3 * a, f *= -1;
                    this.ctx.bezierCurveTo(m + a, h + f * a, m + 2 * a, h + f * a, m + 3 * a, h);
                    h = l;
                    f *= -1;
                    this.ctx.lineTo(m,
                        h);
                    for (q = 0; q < n; q++) this.ctx.bezierCurveTo(m - a, h + f * a, m - 2 * a, h + f * a, m - 3 * a, h), m -= 3 * a, f *= -1
                } else if ("zigzag" === this.type) {
                    f = 1;
                    h = e - a;
                    m = b + a;
                    n = (k - m) / a / 2;
                    for (q = 0; q < n; q++) this.ctx.lineTo(m, h), h += 2 * f * a, m += 2 * a, f *= -1;
                    this.ctx.lineTo(m, h);
                    h += l - e;
                    for (q = 0; q < n + 1; q++) this.ctx.lineTo(m, h), h += 2 * f * a, m -= 2 * a, f *= -1;
                    this.ctx.lineTo(m + a, h + f * a)
                }
                0 < r && this.ctx.stroke();
                this.ctx.closePath();
                this.ctx.globalAlpha = this.fillOpacity;
                this.ctx.globalCompositeOperation = "destination-over";
                this.ctx.fill();
                this.ctx.restore();
                this.ctx.globalAlpha =
                    c;
                this.ctx = d
            }
        };
        na(M, W);
        M.prototype.createUserOptions = function(a) {
            if ("undefined" !== typeof a || this.options._isPlaceholder) {
                var d = 0;
                this.parent.options._isPlaceholder && this.parent.createUserOptions();
                this.options._isPlaceholder || (Ba(this.parent.stripLines), d = this.parent.options.stripLines.indexOf(this.options));
                this.options = "undefined" === typeof a ? {} : a;
                this.parent.options.stripLines[d] = this.options
            }
        };
        M.prototype.render = function() {
            this.ctx.save();
            var a = this.parent.getPixelCoordinatesOnAxis(this.value),
                d = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit * this.thickness);
            if (0 < d) {
                var c = null === this.opacity ? 1 : this.opacity;
                this.ctx.strokeStyle = this.color;
                this.ctx.beginPath();
                var b = this.ctx.globalAlpha;
                this.ctx.globalAlpha = c;
                P(this.id);
                var e, f, k, l;
                this.ctx.lineWidth = d;
                this.ctx.setLineDash && this.ctx.setLineDash(N(this.lineDashType, d));
                if ("bottom" === this.parent._position || "top" === this.parent._position) e = f = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0, k = this.chart.plotArea.y1,
                    l = this.chart.plotArea.y2, this.bounds = { x1: e - d / 2, y1: k, x2: f + d / 2, y2: l };
                else if ("left" === this.parent._position || "right" === this.parent._position) k = l = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0, e = this.chart.plotArea.x1, f = this.chart.plotArea.x2, this.bounds = { x1: e, y1: k - d / 2, x2: f, y2: l + d / 2 };
                this.ctx.moveTo(e, k);
                this.ctx.lineTo(f, l);
                this.ctx.stroke();
                this.ctx.globalAlpha = b
            }
            this.ctx.restore()
        };
        na(aa, W);
        aa.prototype.showAt = function(a) {
            if (!this.enabled) return !1;
            var d = this.chart,
                c = !1;
            d.resetOverlayedCanvas();
            d.clearedOverlayedCanvas =
                this.parent.type;
            if ("xySwapped" === d.plotInfo.axisPlacement)
                if ("bottom" === this.parent._position)
                    for (var b = 0; b < d.axisY.length; b++) this.parent === d.axisY[b] && (d.axisY[b]._crosshairValue = a >= d.axisY[b].viewportMinimum && a <= d.axisY[b].viewportMaximum ? a : null);
                else if ("top" === this.parent._position)
                for (b = 0; b < d.axisY2.length; b++) this.parent === d.axisY2[b] && (d.axisY2[b]._crosshairValue = a >= d.axisY2[b].viewportMinimum && a <= d.axisY2[b].viewportMaximum ? a : null);
            else if ("left" === this.parent._position)
                for (b = 0; b < d.axisX.length; b++) this.parent ===
                    d.axisX[b] && (d.axisX[b]._crosshairValue = a >= d.axisX[b].viewportMinimum && a <= d.axisX[b].viewportMaximum ? a : null);
            else {
                if ("right" === this.parent._position)
                    for (b = 0; b < d.axisX2.length; b++) this.parent === d.axisX2[b] && (d.axisX2[b]._crosshairValue = a >= d.axisX2[b].viewportMinimum && a <= d.axisX2[b].viewportMaximum ? a : null)
            } else if ("bottom" === this.parent._position)
                for (b = 0; b < d.axisX.length; b++) this.parent === d.axisX[b] && (d.axisX[b]._crosshairValue = a >= d.axisX[b].viewportMinimum && a <= d.axisX[b].viewportMaximum ? a : null);
            else if ("top" ===
                this.parent._position)
                for (b = 0; b < d.axisX2.length; b++) this.parent === d.axisX2[b] && (d.axisX2[b]._crosshairValue = a >= d.axisX2[b].viewportMinimum && a <= d.axisX2[b].viewportMaximum ? a : null);
            else if ("left" === this.parent._position)
                for (b = 0; b < d.axisY.length; b++) this.parent === d.axisY[b] && (d.axisY[b]._crosshairValue = a >= d.axisY[b].viewportMinimum && a <= d.axisY[b].viewportMaximum ? a : null);
            else if ("right" === this.parent._position)
                for (b = 0; b < d.axisY2.length; b++) this.parent === d.axisY2[b] && (d.axisY2[b]._crosshairValue = a >= d.axisY2[b].viewportMinimum &&
                    a <= d.axisY2[b].viewportMaximum ? a : null);
            for (b = 0; b < d.axisX.length; b++) a = d.axisX[b]._crosshairValue, d.axisX[b].crosshair && (d.axisX[b].crosshair.enabled && !s(a) && a >= d.axisX[b].viewportMinimum && a <= d.axisX[b].viewportMaximum) && (d.axisX[b].showCrosshair(a), d.axisX[b].crosshair._updatedValue = a, this === d.axisX[b].crosshair && (c = !0));
            for (b = 0; b < d.axisX2.length; b++) a = d.axisX2[b]._crosshairValue, d.axisX2[b].crosshair && (d.axisX2[b].crosshair.enabled && !s(a) && a >= d.axisX2[b].viewportMinimum && a <= d.axisX2[b].viewportMaximum) &&
                (d.axisX2[b].showCrosshair(a), d.axisX2[b].crosshair._updatedValue = a, this === d.axisX2[b].crosshair && (c = !0));
            for (b = 0; b < d.axisY.length; b++) a = d.axisY[b]._crosshairValue, d.axisY[b].crosshair && (d.axisY[b].crosshair.enabled && !s(a) && a >= d.axisY[b].viewportMinimum && a <= d.axisY[b].viewportMaximum) && (d.axisY[b].showCrosshair(a), d.axisY[b].crosshair._updatedValue = a, this === d.axisY[b].crosshair && (c = !0));
            for (b = 0; b < d.axisY2.length; b++) a = d.axisY2[b]._crosshairValue, d.axisY2[b].crosshair && (d.axisY2[b].crosshair.enabled &&
                !s(a) && d._crosshairY2Value >= d.axisY2[b].viewportMinimum && d._crosshairY2Value <= d.axisY2[b].viewportMaximum) && (d.axisY2[b].showCrosshair(a), d.axisY2[b].crosshair._updatedValue = a, this === d.axisY2[b].crosshair && (c = !0));
            this.chart.toolTip && this.chart.toolTip._entries && this.chart.toolTip.highlightObjects(this.chart.toolTip._entries);
            return c
        };
        aa.prototype.hide = function() {
            this.chart.resetOverlayedCanvas();
            this.chart.renderCrosshairs(this.parent);
            this._hidden = !0
        };
        aa.prototype.render = function(a, d, c) {
            var b,
                e, f, k, l = null,
                m = null,
                h = null,
                n = "";
            if (!this.valueFormatString)
                if ("dateTime" === this.parent.valueType) this.valueFormatString = this.parent.valueFormatString;
                else {
                    var r = 0,
                        r = "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 < this.parent.range ? 0 : 500 < this.chart.width && 25 > this.parent.range ? 2 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0) : 50 < this.parent.range ? 0 : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ?
                            1 : 0);
                    this.valueFormatString = D.generateValueFormatString(this.parent.range, r)
                }
            var h = null === this.opacity ? 1 : this.opacity,
                r = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit * this.thickness),
                q = this.chart.overlaidCanvasCtx,
                g = q.globalAlpha;
            q.globalAlpha = h;
            q.beginPath();
            q.strokeStyle = this.color;
            q.lineWidth = r;
            q.save();
            this.labelFontSize = s(this.options.labelFontSize) ? this.parent.labelFontSize : this.labelFontSize;
            this.labelMaxWidth = s(this.options.labelMaxWidth) ?
                0.3 * this.chart.width : this.labelMaxWidth;
            this.labelMaxHeight = s(this.options.labelWrap) || this.labelWrap ? 0.3 * this.chart.height : 2 * this.labelFontSize;
            0 < r && q.setLineDash && q.setLineDash(N(this.lineDashType, r));
            h = new ia(q, {
                x: 0,
                y: 0,
                padding: { top: 2, right: 3, bottom: 2, left: 4 },
                backgroundColor: this.labelBackgroundColor,
                borderColor: this.labelBorderColor,
                borderThickness: this.labelBorderThickness,
                cornerRadius: this.labelCornerRadius,
                maxWidth: this.labelMaxWidth,
                maxHeight: this.labelMaxHeight,
                angle: this.labelAngle,
                text: n,
                horizontalAlign: "left",
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle"
            });
            if (this.snapToDataPoint) {
                var w = 0,
                    n = [];
                if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
                    var u = null;
                    if ("bottom" === this.parent._position || "top" === this.parent._position) w = this.parent.dataSeries[0].axisX.convertPixelToValue({ y: d });
                    else if ("left" === this.parent._position || "right" === this.parent._position) w =
                        this.parent.convertPixelToValue({ y: d });
                    for (var v = 0; v < this.parent.dataSeries.length; v++)(u = this.parent.dataSeries[v].getDataPointAtX(w, !0)) && 0 <= u.index && (u.dataSeries = this.parent.dataSeries[v], null !== u.dataPoint.y && u.dataSeries.visible && n.push(u));
                    u = null;
                    if (0 === n.length) return;
                    n.sort(function(a, b) { return a.distance - b.distance });
                    u = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y));
                    v = 0;
                    if ("rangeBar" === n[0].dataSeries.type || "error" === n[0].dataSeries.type)
                        for (var u = Math.abs(a - this.parent.convertValueToPixel(n[v].dataPoint.y[0])),
                                t = 0, w = 0; w < n.length; w++)
                            if (n[w].dataPoint.y && n[w].dataPoint.y.length)
                                for (var x = 0; x < n[w].dataPoint.y.length; x++) t = Math.abs(a - this.parent.convertValueToPixel(n[w].dataPoint.y[x])), t < u && (u = t, v = w);
                            else t = Math.abs(a - this.parent.convertValueToPixel(n[w].dataPoint.y)), t < u && (u = t, v = w);
                    else if ("stackedBar" === n[0].dataSeries.type)
                        for (var u = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y)), z = t = 0, w = v = 0; w < n.length; w++)
                            if (n[w].dataPoint.y && n[w].dataPoint.y.length)
                                for (x = 0; x < n[w].dataPoint.y.length; x++) t =
                                    Math.abs(a - this.parent.convertValueToPixel(n[w].dataPoint.y[x])), t < u && (u = t, v = w);
                            else z += n[w].dataPoint.y, t = Math.abs(a - this.parent.convertValueToPixel(z)), t < u && (u = t, v = w);
                    else if ("stackedBar100" === n[0].dataSeries.type)
                        for (var u = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y)), y = z = t = 0, w = 0; w < n.length; w++)
                            if (n[w].dataPoint.y && n[w].dataPoint.y.length)
                                for (x = 0; x < n[w].dataPoint.y.length; x++) t = Math.abs(a - this.parent.convertValueToPixel(n[w].dataPoint.y[x])), t < u && (u = t, v = w);
                            else z += n[w].dataPoint.y,
                                y = n[w].dataPoint.x.getTime ? n[w].dataPoint.x.getTime() : n[w].dataPoint.x, y = 100 * (z / n[w].dataSeries.plotUnit.dataPointYSums[y]), t = Math.abs(a - this.parent.convertValueToPixel(y)), t < u && (u = t, v = w);
                    else
                        for (u = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y)), w = v = t = 0; w < n.length; w++)
                            if (n[w].dataPoint.y && n[w].dataPoint.y.length)
                                for (x = 0; x < n[w].dataPoint.y.length; x++) t = Math.abs(a - this.parent.convertValueToPixel(n[w].dataPoint.y[x])), t < u && (u = t, v = w);
                            else t = Math.abs(a - this.parent.convertValueToPixel(n[w].dataPoint.y)),
                                t < u && (u = t, v = w);
                    x = n[v];
                    if ("bottom" === this.parent._position || "top" === this.parent._position) {
                        b = 0;
                        if ("rangeBar" === this.parent.dataSeries[v].type || "error" === this.parent.dataSeries[v].type) {
                            u = Math.abs(a - this.parent.convertValueToPixel(x.dataPoint.y[0]));
                            for (w = t = 0; w < x.dataPoint.y.length; w++) t = Math.abs(a - this.parent.convertValueToPixel(x.dataPoint.y[w])), t < u && (u = t, b = w);
                            l = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(x.dataPoint.y[b]) << 0) + 0.5 : this.parent.convertValueToPixel(x.dataPoint.y[b]) << 0;
                            h.text =
                                this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: c ? c : x.dataPoint.y[b] }) : s(this.options.label) ? ea(c ? c : x.dataPoint.y[b], this.valueFormatString, this.chart._cultureInfo) : this.label
                        } else if ("stackedBar" === this.parent.dataSeries[v].type) {
                            u = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y));
                            z = t = 0;
                            for (w = v; 0 <= w; w--) z += n[w].dataPoint.y, t = Math.abs(a - this.parent.convertValueToPixel(z)), t < u && (u = t, b = w);
                            l = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(z) <<
                                0) + 0.5 : this.parent.convertValueToPixel(z) << 0;
                            h.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: c ? c : x.dataPoint.y }) : s(this.options.label) ? ea(c ? c : x.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label
                        } else if ("stackedBar100" === this.parent.dataSeries[v].type) {
                            u = Math.abs(a - this.parent.convertValueToPixel(n[0].dataPoint.y));
                            y = z = t = 0;
                            for (w = v; 0 <= w; w--) z += n[w].dataPoint.y, y = n[w].dataPoint.x.getTime ? n[w].dataPoint.x.getTime() :
                                n[w].dataPoint.x, y = 100 * (z / n[w].dataSeries.plotUnit.dataPointYSums[y]), t = Math.abs(a - this.parent.convertValueToPixel(y)), t < u && (u = t, b = w);
                            l = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(y) << 0) + 0.5 : this.parent.convertValueToPixel(y) << 0;
                            h.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: c ? c : y }) : s(this.options.label) ? ea(c ? c : y, this.valueFormatString, this.chart._cultureInfo) : this.label
                        } else l = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(x.dataPoint.y) <<
                            0) + 0.5 : this.parent.convertValueToPixel(x.dataPoint.y) << 0, h.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: c ? c : x.dataPoint.y }) : s(this.options.label) ? ea(c ? c : x.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label;
                        b = e = l;
                        f = this.chart.plotArea.y1;
                        k = this.chart.plotArea.y2;
                        this.bounds = { x1: b - r / 2, y1: f, x2: e + r / 2, y2: k };
                        h.x = b - h.measureText().width / 2;
                        h.x + h.width > this.chart.bounds.x2 ? h.x = this.chart.bounds.x2 - h.width : h.x < this.chart.bounds.x1 &&
                            (h.x = this.chart.bounds.x1);
                        h.y = this.parent.lineCoordinates.y2 + h.fontSize / 2 + 2;
                        h.y + h.height > this.chart.bounds.y2 ? h.y = this.chart.bounds.y2 - h.height : h.y < this.chart.bounds.y1 && (h.y = this.chart.bounds.y1)
                    } else if ("left" === this.parent._position || "right" === this.parent._position) {
                        f = k = m = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(x.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(x.dataPoint.x) << 0;
                        b = this.chart.plotArea.x1;
                        e = this.chart.plotArea.x2;
                        this.bounds = { x1: b, y1: f - r / 2, x2: e, y2: k + r / 2 };
                        y = !1;
                        if (this.parent.labels)
                            for (n =
                                Math.ceil(this.parent.interval), w = 0; w < this.parent.viewportMaximum; w += n)
                                if (this.parent.labels[w]) y = !0;
                                else { y = !1; break }
                        if (y) {
                            if ("axisX" === this.parent.type)
                                for (w = this.parent.convertPixelToValue({ y: d }), u = null, v = 0; v < this.parent.dataSeries.length; v++)(u = this.parent.dataSeries[v].getDataPointAtX(w, !0)) && 0 <= u.index && (h.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: x.dataPoint.x }) : s(this.options.label) ? u.dataPoint.label : this.label)
                        } else "dateTime" ===
                            this.parent.valueType ? h.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: c ? c : x.dataPoint.x }) : s(this.options.label) ? za(c ? c : x.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (h.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: c ? c : x.dataPoint.x }) : s(this.options.label) ? ea(c ? c : x.dataPoint.x, this.valueFormatString,
                                this.chart._cultureInfo) : this.label);
                        h.y = k + h.fontSize / 2 - h.measureText().height / 2 + 2;
                        h.y - h.fontSize / 2 < this.chart.bounds.y1 ? h.y = this.chart.bounds.y1 + h.fontSize / 2 + 2 : h.y + h.measureText().height - h.fontSize / 2 > this.chart.bounds.y2 && (h.y = this.chart.bounds.y2 - h.measureText().height + h.fontSize / 2);
                        "left" === this.parent._position ? h.x = this.parent.lineCoordinates.x2 - h.measureText().width : "right" === this.parent._position && (h.x = this.parent.lineCoordinates.x2)
                    }
                } else if ("bottom" === this.parent._position || "top" === this.parent._position) {
                    w =
                        this.parent.convertPixelToValue({ x: a });
                    for (v = 0; v < this.parent.dataSeries.length; v++)(u = this.parent.dataSeries[v].getDataPointAtX(w, !0)) && 0 <= u.index && (u.dataSeries = this.parent.dataSeries[v], null !== u.dataPoint.y && u.dataSeries.visible && n.push(u));
                    if (0 === n.length) return;
                    n.sort(function(a, b) { return a.distance - b.distance });
                    x = n[0];
                    b = e = l = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(x.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(x.dataPoint.x) << 0;
                    f = this.chart.plotArea.y1;
                    k = this.chart.plotArea.y2;
                    this.bounds = { x1: b - r / 2, y1: f, x2: e + r / 2, y2: k };
                    y = !1;
                    if (this.parent.labels)
                        for (n = Math.ceil(this.parent.interval), w = 0; w < this.parent.viewportMaximum; w += n)
                            if (this.parent.labels[w]) y = !0;
                            else { y = !1; break }
                    if (y) {
                        if ("axisX" === this.parent.type)
                            for (w = this.parent.convertPixelToValue({ x: a }), u = null, v = 0; v < this.parent.dataSeries.length; v++)(u = this.parent.dataSeries[v].getDataPointAtX(w, !0)) && 0 <= u.index && (h.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: x.dataPoint.x }) :
                                s(this.options.label) ? u.dataPoint.label : this.label)
                    } else "dateTime" === this.parent.valueType ? h.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: x.dataPoint.x }) : s(this.options.label) ? za(c ? c : x.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (h.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: x.dataPoint.x }) : s(this.options.label) ?
                        ea(c ? c : x.dataPoint.x, this.valueFormatString, this.chart._cultureInfo) : this.label);
                    this.value = x.dataPoint.x;
                    h.x = b - h.measureText().width / 2;
                    h.x + h.width > this.chart.bounds.x2 && (h.x = this.chart.bounds.x2 - h.width);
                    h.x < this.chart.bounds.x1 && (h.x = this.chart.bounds.x1);
                    "bottom" === this.parent._position ? h.y = this.parent.lineCoordinates.y2 + h.fontSize / 2 + 2 : "top" === this.parent._position && (h.y = this.parent.lineCoordinates.y1 - h.height + h.fontSize / 2 + 2)
                } else if ("left" === this.parent._position || "right" === this.parent._position) {
                    !s(this.parent.dataSeries) &&
                        0 < this.parent.dataSeries.length && (w = this.parent.dataSeries[0].axisX.convertPixelToValue({ x: a }));
                    for (v = 0; v < this.parent.dataSeries.length; v++)(u = this.parent.dataSeries[v].getDataPointAtX(w, !0)) && 0 <= u.index && (u.dataSeries = this.parent.dataSeries[v], null !== u.dataPoint.y && u.dataSeries.visible && n.push(u));
                    if (0 === n.length) return;
                    n.sort(function(a, b) { return a.distance - b.distance });
                    v = 0;
                    if ("rangeColumn" === n[0].dataSeries.type || "rangeArea" === n[0].dataSeries.type || "error" === n[0].dataSeries.type || "rangeSplineArea" ===
                        n[0].dataSeries.type || "candlestick" === n[0].dataSeries.type || "ohlc" === n[0].dataSeries.type || "boxAndWhisker" === n[0].dataSeries.type)
                        for (u = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y[0])), w = t = 0; w < n.length; w++)
                            if (n[w].dataPoint.y && n[w].dataPoint.y.length)
                                for (x = 0; x < n[w].dataPoint.y.length; x++) t = Math.abs(d - this.parent.convertValueToPixel(n[w].dataPoint.y[x])), t < u && (u = t, v = w);
                            else t = Math.abs(d - this.parent.convertValueToPixel(n[w].dataPoint.y)), t < u && (u = t, v = w);
                    else if ("stackedColumn" === n[0].dataSeries.type ||
                        "stackedArea" === n[0].dataSeries.type)
                        for (u = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y)), w = z = t = 0; w < n.length; w++)
                            if (n[w].dataPoint.y && n[w].dataPoint.y.length)
                                for (x = 0; x < n[w].dataPoint.y.length; x++) t = Math.abs(d - this.parent.convertValueToPixel(n[w].dataPoint.y[x])), t < u && (u = t, v = w);
                            else z += n[w].dataPoint.y, t = Math.abs(d - this.parent.convertValueToPixel(z)), t < u && (u = t, v = w);
                    else if ("stackedColumn100" === n[0].dataSeries.type || "stackedArea100" === n[0].dataSeries.type)
                        for (u = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y)),
                            w = y = z = t = 0; w < n.length; w++)
                            if (n[w].dataPoint.y && n[w].dataPoint.y.length)
                                for (x = 0; x < n[w].dataPoint.y.length; x++) t = Math.abs(d - this.parent.convertValueToPixel(n[w].dataPoint.y[x])), t < u && (u = t, v = w);
                            else z += n[w].dataPoint.y, y = n[w].dataPoint.x.getTime ? n[w].dataPoint.x.getTime() : n[w].dataPoint.x, y = 100 * (z / n[w].dataSeries.plotUnit.dataPointYSums[y]), t = Math.abs(d - this.parent.convertValueToPixel(y)), t < u && (u = t, v = w);
                    else
                        for (u = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y)), w = t = 0; w < n.length; w++)
                            if (n[w].dataPoint.y &&
                                n[w].dataPoint.y.length)
                                for (x = 0; x < n[w].dataPoint.y.length; x++) t = Math.abs(d - this.parent.convertValueToPixel(n[w].dataPoint.y[x])), t < u && (u = t, v = w);
                            else t = Math.abs(d - this.parent.convertValueToPixel(n[w].dataPoint.y)), t < u && (u = t, v = w);
                    x = n[v];
                    b = 0;
                    if ("rangeColumn" === this.parent.dataSeries[v].type || "rangeArea" === this.parent.dataSeries[v].type || "error" === this.parent.dataSeries[v].type || "rangeSplineArea" === this.parent.dataSeries[v].type || "candlestick" === this.parent.dataSeries[v].type || "ohlc" === this.parent.dataSeries[v].type ||
                        "boxAndWhisker" === this.parent.dataSeries[v].type) {
                        u = Math.abs(d - this.parent.convertValueToPixel(x.dataPoint.y[0]));
                        for (w = t = 0; w < x.dataPoint.y.length; w++) t = Math.abs(d - this.parent.convertValueToPixel(x.dataPoint.y[w])), t < u && (u = t, b = w);
                        m = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(x.dataPoint.y[b]) << 0) + 0.5 : this.parent.convertValueToPixel(x.dataPoint.y[b]) << 0;
                        h.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: c ? c : x.dataPoint.y[b] }) :
                            s(this.options.label) ? ea(c ? c : x.dataPoint.y[b], this.valueFormatString, this.chart._cultureInfo) : this.label;
                        this.value = x.dataPoint.y[b]
                    } else if ("stackedColumn" === this.parent.dataSeries[v].type || "stackedArea" === this.parent.dataSeries[v].type) {
                        u = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y));
                        z = t = 0;
                        for (w = v; 0 <= w; w--) z += n[w].dataPoint.y, t = Math.abs(d - this.parent.convertValueToPixel(z)), t < u && (u = t, b = w);
                        m = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(z) << 0) + 0.5 : this.parent.convertValueToPixel(z) <<
                            0;
                        h.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: c ? c : x.dataPoint.y }) : s(this.options.label) ? ea(c ? c : x.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label;
                        this.value = z
                    } else if ("stackedColumn100" === this.parent.dataSeries[v].type || "stackedArea100" === this.parent.dataSeries[v].type) {
                        u = Math.abs(d - this.parent.convertValueToPixel(n[0].dataPoint.y));
                        z = t = 0;
                        for (w = v; 0 <= w; w--) z += n[w].dataPoint.y, y = n[w].dataPoint.x.getTime ?
                            n[w].dataPoint.x.getTime() : n[w].dataPoint.x, y = 100 * (z / n[w].dataSeries.plotUnit.dataPointYSums[y]), t = Math.abs(d - this.parent.convertValueToPixel(y)), t < u && (u = t, b = w);
                        m = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(y) << 0) + 0.5 : this.parent.convertValueToPixel(y) << 0;
                        h.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: c ? c : y }) : s(this.options.label) ? ea(c ? c : y, this.valueFormatString, this.chart._cultureInfo) : this.label;
                        this.value = y
                    } else "waterfall" ===
                        this.parent.dataSeries[v].type ? (m = 1 === q.lineWidth % 2 ? (this.parent.convertValueToPixel(x.dataSeries.dataPointEOs[x.index].cumulativeSum) << 0) + 0.5 : this.parent.convertValueToPixel(x.dataSeries.dataPointEOs[x.index].cumulativeSum) << 0, h.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: c ? c : x.dataSeries.dataPointEOs[x.index].cumulativeSum }) : s(this.options.label) ? ea(c ? c : x.dataSeries.dataPointEOs[x.index].cumulativeSum, this.valueFormatString,
                            this.chart._cultureInfo) : this.label, this.value = x.dataSeries.dataPointEOs[x.index].cumulativeSum) : (m = 1 === q.lineWidth % 2 ? (s(a) ? d : this.parent.convertValueToPixel(x.dataPoint.y) << 0) + 0.5 : s(a) ? d : this.parent.convertValueToPixel(x.dataPoint.y) << 0, h.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: x.dataPoint.y }) : s(this.options.label) ? ea(c ? c : x.dataPoint.y, this.valueFormatString, this.chart._cultureInfo) : this.label, this.value = x.dataPoint.y);
                    f = k = m;
                    b = this.chart.plotArea.x1;
                    e = this.chart.plotArea.x2;
                    this.bounds = { x1: b, y1: f - r / 2, x2: e, y2: k + r / 2 };
                    h.y = k + h.fontSize / 2 - h.measureText().height / 2 + 2;
                    h.y - h.fontSize / 2 < this.chart.bounds.y1 ? h.y = this.chart.bounds.y1 + h.fontSize / 2 + 2 : h.y + h.measureText().height - h.fontSize / 2 > this.chart.bounds.y2 && (h.y = this.chart.bounds.y2 - h.measureText().height + h.fontSize / 2);
                    "left" === this.parent._position ? h.x = this.parent.lineCoordinates.x2 - h.measureText().width : "right" === this.parent._position && (h.x = this.parent.lineCoordinates.x2)
                }
                n =
                    null;
                if ("bottom" === this.parent._position || "top" === this.parent._position) "top" === this.parent._position && h.y - h.fontSize / 2 < this.chart.bounds.y1 && (h.y = this.chart.bounds.y1 + h.fontSize / 2), "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - h.fontSize / 2 + h.measureText().height > this.chart.bounds.y2 && (h.y = this.chart.bounds.y2 - h.height + h.fontSize / 2 + 2), b >= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMaximum : this.parent.viewportMinimum) && e <= this.parent.convertValueToPixel(this.parent.reversed ?
                    this.parent.viewportMinimum : this.parent.viewportMaximum) && (0 < r && (q.moveTo(b, f), q.lineTo(e, k), q.stroke(), this._hidden = !1), q.restore(), !s(h.text) && ("number" === typeof h.text.valueOf() || 0 < h.text.length) && h.render(!0));
                if ("left" === this.parent._position || "right" === this.parent._position) "left" === this.parent._position && h.x < this.chart.bounds.x1 && (h.x = this.chart.bounds.x1), "right" === this.parent._position && h.x + h.measureText().width > this.chart.bounds.x2 && (h.x = this.chart.bounds.x2 - h.measureText().width), k >= this.parent.convertValueToPixel(this.parent.reversed ?
                    this.parent.viewportMinimum : this.parent.viewportMaximum) && f <= this.parent.convertValueToPixel(this.parent.reversed ? this.parent.viewportMaximum : this.parent.viewportMinimum) && (0 < r && (q.moveTo(b, f), q.lineTo(e, k), q.stroke(), this._hidden = !1), q.restore(), !s(h.text) && ("number" === typeof h.text.valueOf() || 0 < h.text.length) && h.render(!0))
            } else {
                if ("bottom" === this.parent._position || "top" === this.parent._position) b = e = l = 1 === q.lineWidth % 2 ? (a << 0) + 0.5 : a << 0, f = this.chart.plotArea.y1, k = this.chart.plotArea.y2, this.bounds = { x1: b - r / 2, y1: f, x2: e + r / 2, y2: k };
                else if ("left" === this.parent._position || "right" === this.parent._position) f = k = m = 1 === q.lineWidth % 2 ? (d << 0) + 0.5 : d << 0, b = this.chart.plotArea.x1, e = this.chart.plotArea.x2, this.bounds = { x1: b, y1: f - r / 2, x2: e, y2: k + r / 2 };
                if ("xySwapped" === this.chart.plotInfo.axisPlacement)
                    if ("left" === this.parent._position || "right" === this.parent._position) {
                        y = !1;
                        if (this.parent.labels)
                            for (n = Math.ceil(this.parent.interval), w = 0; w < this.parent.viewportMaximum; w += n)
                                if (this.parent.labels[w]) y = !0;
                                else { y = !1; break }
                        if (y) {
                            if ("axisX" ===
                                this.parent.type)
                                for (w = this.parent.convertPixelToValue({ y: d }), u = null, v = 0; v < this.parent.dataSeries.length; v++)(u = this.parent.dataSeries[v].getDataPointAtX(w, !0)) && 0 <= u.index && (h.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: c ? c : this.parent.convertPixelToValue(a) }) : s(this.options.label) ? u.dataPoint.label : this.label)
                        } else "dateTime" === this.parent.valueType ? h.text = this.labelFormatter ? this.labelFormatter({
                            chart: this.chart,
                            axis: this.parent.options,
                            crosshair: this.options,
                            value: c ? c : this.parent.convertPixelToValue(d)
                        }) : s(this.options.label) ? za(c ? c : this.parent.convertPixelToValue(d), this.valueFormatString, this.chart._cultureInfo) : this.label : "number" === this.parent.valueType && (h.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: c ? c : this.parent.convertPixelToValue(d) }) : s(this.options.label) ? ea(c ? c : this.parent.convertPixelToValue(d), this.valueFormatString, this.chart._cultureInfo) : this.label);
                        h.y = d + h.fontSize / 2 - h.measureText().height / 2 + 2;
                        h.y - h.fontSize / 2 < this.chart.bounds.y1 ? h.y = this.chart.bounds.y1 + h.fontSize / 2 + 2 : h.y + h.measureText().height - h.fontSize / 2 > this.chart.bounds.y2 && (h.y = this.chart.bounds.y2 - h.measureText().height + h.fontSize / 2);
                        "left" === this.parent._position ? h.x = this.parent.lineCoordinates.x1 - h.measureText().width : "right" === this.parent._position && (h.x = this.parent.lineCoordinates.x2)
                    } else {
                        if ("bottom" === this.parent._position || "top" === this.parent._position) h.text = this.labelFormatter ?
                            this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: c ? c : this.parent.convertPixelToValue(a) }) : s(this.options.label) ? ea(c ? c : this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo) : this.label, h.x = b - h.measureText().width / 2, h.x + h.width > this.chart.bounds.x2 && (h.x = this.chart.bounds.x2 - h.width), h.x < this.chart.bounds.x1 && (h.x = this.chart.bounds.x1), "bottom" === this.parent._position ? h.y = this.parent.lineCoordinates.y2 + h.fontSize / 2 + 2 : "top" === this.parent._position &&
                            (h.y = this.parent.lineCoordinates.y1 - h.height + h.fontSize / 2 + 2)
                    }
                else if ("bottom" === this.parent._position || "top" === this.parent._position) {
                    y = !1;
                    n = "";
                    if (this.parent.labels)
                        for (n = Math.ceil(this.parent.interval), w = 0; w < this.parent.viewportMaximum; w += n)
                            if (this.parent.labels[w]) y = !0;
                            else { y = !1; break }
                    if (y) {
                        if ("axisX" === this.parent.type)
                            for (w = this.parent.convertPixelToValue({ x: a }), u = null, v = 0; v < this.parent.dataSeries.length; v++)(u = this.parent.dataSeries[v].getDataPointAtX(w, !0)) && 0 <= u.index && (h.text = this.labelFormatter ?
                                this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: c ? c : this.parent.convertPixelToValue(a) }) : s(this.options.label) ? c ? c : u.dataPoint.label : this.label)
                    } else "dateTime" === this.parent.valueType ? h.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: c ? c : this.parent.convertPixelToValue(a) }) : s(this.options.label) ? za(c ? c : this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo) : this.label :
                        "number" === this.parent.valueType && (h.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: c ? c : 0 < this.parent.dataSeries.length ? this.parent.convertPixelToValue(a) : "" }) : s(this.options.label) ? ea(c ? c : this.parent.convertPixelToValue(a), this.valueFormatString, this.chart._cultureInfo) : this.label);
                    h.x = b - h.measureText().width / 2;
                    h.x + h.width > this.chart.bounds.x2 && (h.x = this.chart.bounds.x2 - h.width);
                    h.x < this.chart.bounds.x1 && (h.x = this.chart.bounds.x1);
                    "bottom" === this.parent._position ? h.y = this.parent.lineCoordinates.y2 + h.fontSize / 2 + 2 : "top" === this.parent._position && (h.y = this.parent.lineCoordinates.y1 - h.height + h.fontSize / 2 + 2)
                } else if ("left" === this.parent._position || "right" === this.parent._position) h.text = this.labelFormatter ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: c ? c : this.parent.convertPixelToValue(d) }) : s(this.options.label) ? ea(c ? c : this.parent.convertPixelToValue(d), this.valueFormatString, this.chart._cultureInfo) :
                    this.label, h.y = d + h.fontSize / 2 - h.measureText().height / 2 + 2, h.y - h.fontSize / 2 < this.chart.bounds.y1 ? h.y = this.chart.bounds.y1 + h.fontSize / 2 + 2 : h.y + h.measureText().height - h.fontSize / 2 > this.chart.bounds.y2 && (h.y = this.chart.bounds.y2 - h.measureText().height + h.fontSize / 2), "left" === this.parent._position ? h.x = this.parent.lineCoordinates.x2 - h.measureText().width : "right" === this.parent._position && (h.x = this.parent.lineCoordinates.x2);
                "left" === this.parent._position && h.x < this.chart.bounds.x1 ? h.x = this.chart.bounds.x1 : "right" ===
                    this.parent._position && h.x + h.measureText().width > this.chart.bounds.x2 ? h.x = this.chart.bounds.x2 - h.measureText().width : "top" === this.parent._position && h.y - h.fontSize / 2 < this.chart.bounds.y1 ? h.y = this.chart.bounds.y1 + h.fontSize / 2 : "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - h.fontSize / 2 + h.measureText().height > this.chart.bounds.y2 && (h.y = this.chart.bounds.y2 - h.height + h.fontSize / 2 + 2);
                0 < r && (q.moveTo(b, f), q.lineTo(e, k), q.stroke(), this._hidden = !1);
                q.restore();
                !s(h.text) && ("number" === typeof h.text.valueOf() ||
                    0 < h.text.length) && h.render(!0);
                this.value = "bottom" === this.parent._position || "top" === this.parent._position ? this.parent.convertPixelToValue(a) : this.parent.convertPixelToValue(d)
            }
            if ("bottom" === this.parent._position || "top" === this.parent._position) this._updatedValue = this.parent.convertPixelToValue(l);
            if ("left" === this.parent._position || "right" === this.parent._position) this._updatedValue = this.parent.convertPixelToValue(m);
            q.globalAlpha = g
        };
        na($, W);
        $.prototype._initialize = function() {
            this.updateOption("updated");
            this.updateOption("hidden");
            if (this.enabled) {
                this.container = document.createElement("div");
                this.container.setAttribute("class", "canvasjs-chart-tooltip");
                this.container.style.position = "absolute";
                this.container.style.height = "auto";
                this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
                this.container.style.zIndex = "1000";
                this.container.style.pointerEvents = "none";
                this.container.style.display = "none";
                var a;
                a = '<div style=" width: auto;height: auto;min-width: 50px;';
                a += "line-height: auto;";
                a += "margin: 0px 0px 0px 0px;";
                a += "padding: 5px;";
                a += "font-family: Calibri, Arial, Georgia, serif;";
                a += "font-weight: normal;";
                a += "font-style: " + (u ? "italic;" : "normal;");
                a += "font-size: 14px;";
                a += "color: #000000;";
                a += "text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);";
                a += "text-align: left;";
                a += "border: 2px solid gray;";
                a += u ? "background: rgba(255,255,255,.9);" : "background: rgb(255,255,255);";
                a += "text-indent: 0px;";
                a += "white-space: nowrap;";
                a += "border-radius: 5px;";
                a += "-moz-user-select:none;";
                a += "-khtml-user-select: none;";
                a += "-webkit-user-select: none;";
                a += "-ms-user-select: none;";
                a += "user-select: none;";
                u || (a += "filter: alpha(opacity = 90);", a += "filter: progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666');");
                a += '} "> Sample Tooltip</div>';
                this.container.innerHTML = a;
                this.contentDiv = this.container.firstChild;
                this.container.style.borderRadius = this.contentDiv.style.borderRadius;
                this.chart._canvasJSContainer.appendChild(this.container)
            }
        };
        $.prototype.mouseMoveHandler = function(a, d) {
            this._lastUpdated && 4 > (new Date).getTime() -
                this._lastUpdated || (this._lastUpdated = (new Date).getTime(), this.chart.resetOverlayedCanvas(), this._updateToolTip(a, d))
        };
        $.prototype._updateToolTip = function(a, d, c) {
            c = "undefined" === typeof c ? !0 : c;
            this.container || this._initialize();
            this.enabled || (this.hide(), this.dispatchEvent("hidden", { chart: this.chart, toolTip: this }, this));
            if (!this.chart.disableToolTip) {
                if ("undefined" === typeof a || "undefined" === typeof d) {
                    if (isNaN(this._prevX) || isNaN(this._prevY)) return;
                    a = this._prevX;
                    d = this._prevY
                } else this._prevX = a, this._prevY =
                    d;
                var b = null,
                    e = null,
                    f = [],
                    k = 0;
                if (this.shared && this.enabled && "none" !== this.chart.plotInfo.axisPlacement) {
                    if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
                        var l = [];
                        if (this.chart.axisX)
                            for (var m = 0; m < this.chart.axisX.length; m++) {
                                for (var k = this.chart.axisX[m].convertPixelToValue({ y: d }), h = null, b = 0; b < this.chart.axisX[m].dataSeries.length; b++)(h = this.chart.axisX[m].dataSeries[b].getDataPointAtX(k, c)) && 0 <= h.index && (h.dataSeries = this.chart.axisX[m].dataSeries[b], null !== h.dataPoint.y && l.push(h));
                                h = null
                            }
                        if (this.chart.axisX2)
                            for (m =
                                0; m < this.chart.axisX2.length; m++) {
                                k = this.chart.axisX2[m].convertPixelToValue({ y: d });
                                h = null;
                                for (b = 0; b < this.chart.axisX2[m].dataSeries.length; b++)(h = this.chart.axisX2[m].dataSeries[b].getDataPointAtX(k, c)) && 0 <= h.index && (h.dataSeries = this.chart.axisX2[m].dataSeries[b], null !== h.dataPoint.y && l.push(h));
                                h = null
                            }
                    } else {
                        l = [];
                        if (this.chart.axisX)
                            for (m = 0; m < this.chart.axisX.length; m++)
                                for (k = this.chart.axisX[m].convertPixelToValue({ x: a }), h = null, b = 0; b < this.chart.axisX[m].dataSeries.length; b++)(h = this.chart.axisX[m].dataSeries[b].getDataPointAtX(k,
                                    c)) && 0 <= h.index && (h.dataSeries = this.chart.axisX[m].dataSeries[b], null !== h.dataPoint.y && l.push(h));
                        if (this.chart.axisX2)
                            for (m = 0; m < this.chart.axisX2.length; m++)
                                for (k = this.chart.axisX2[m].convertPixelToValue({ x: a }), h = null, b = 0; b < this.chart.axisX2[m].dataSeries.length; b++)(h = this.chart.axisX2[m].dataSeries[b].getDataPointAtX(k, c)) && 0 <= h.index && (h.dataSeries = this.chart.axisX2[m].dataSeries[b], null !== h.dataPoint.y && l.push(h))
                    }
                    if (0 === l.length) return;
                    l.sort(function(a, b) { return a.distance - b.distance });
                    c = l[0];
                    for (b = 0; b < l.length; b++) l[b].dataPoint.x.valueOf() === c.dataPoint.x.valueOf() && f.push(l[b]);
                    l = null
                } else {
                    if (h = this.chart.getDataPointAtXY(a, d, c)) this.currentDataPointIndex = h.dataPointIndex, this.currentSeriesIndex = h.dataSeries.index;
                    else if (u)
                        if (h = Xa(a, d, this.chart._eventManager.ghostCtx), 0 < h && "undefined" !== typeof this.chart._eventManager.objectMap[h]) {
                            h = this.chart._eventManager.objectMap[h];
                            if ("legendItem" === h.objectType) return;
                            this.currentSeriesIndex = h.dataSeriesIndex;
                            this.currentDataPointIndex = 0 <=
                                h.dataPointIndex ? h.dataPointIndex : -1
                        } else this.currentDataPointIndex = -1;
                    else this.currentDataPointIndex = -1;
                    if (0 <= this.currentSeriesIndex) {
                        e = this.chart.data[this.currentSeriesIndex];
                        h = {};
                        if (0 <= this.currentDataPointIndex) b = e.dataPoints[this.currentDataPointIndex], h.dataSeries = e, h.dataPoint = b, h.index = this.currentDataPointIndex, h.distance = Math.abs(b.x - k), "waterfall" === e.type && (h.cumulativeSumYStartValue = e.dataPointEOs[this.currentDataPointIndex].cumulativeSumYStartValue, h.cumulativeSum = e.dataPointEOs[this.currentDataPointIndex].cumulativeSum);
                        else {
                            if (!this.enabled || "line" !== e.type && "stepLine" !== e.type && "spline" !== e.type && "area" !== e.type && "stepArea" !== e.type && "splineArea" !== e.type && "stackedArea" !== e.type && "stackedArea100" !== e.type && "rangeArea" !== e.type && "rangeSplineArea" !== e.type && "candlestick" !== e.type && "ohlc" !== e.type && "boxAndWhisker" !== e.type) return;
                            k = e.axisX.convertPixelToValue({ x: a });
                            h = e.getDataPointAtX(k, c);
                            s(h) || (h.dataSeries = e, this.currentDataPointIndex = h.index, b = h.dataPoint)
                        }
                        if (!s(h) && !s(h.dataPoint) && !s(h.dataPoint.y))
                            if (h.dataSeries.axisY)
                                if (0 <
                                    h.dataPoint.y.length) {
                                    for (b = c = 0; b < h.dataPoint.y.length; b++) h.dataPoint.y[b] < h.dataSeries.axisY.viewportMinimum ? c-- : h.dataPoint.y[b] > h.dataSeries.axisY.viewportMaximum && c++;
                                    c < h.dataPoint.y.length && c > -h.dataPoint.y.length && f.push(h)
                                } else "column" === e.type || "bar" === e.type ? 0 > h.dataPoint.y ? 0 > h.dataSeries.axisY.viewportMinimum && h.dataSeries.axisY.viewportMaximum >= h.dataPoint.y && f.push(h) : h.dataSeries.axisY.viewportMinimum <= h.dataPoint.y && 0 <= h.dataSeries.axisY.viewportMaximum && f.push(h) : "bubble" === e.type ?
                                    (c = this.chart._eventManager.objectMap[e.dataPointIds[h.index]].size / 2, h.dataPoint.y >= h.dataSeries.axisY.viewportMinimum - c && h.dataPoint.y <= h.dataSeries.axisY.viewportMaximum + c && f.push(h)) : "waterfall" === e.type ? (c = 0, h.cumulativeSumYStartValue < h.dataSeries.axisY.viewportMinimum ? c-- : h.cumulativeSumYStartValue > h.dataSeries.axisY.viewportMaximum && c++, h.cumulativeSum < h.dataSeries.axisY.viewportMinimum ? c-- : h.cumulativeSum > h.dataSeries.axisY.viewportMaximum && c++, 2 > c && -2 < c && f.push(h)) : (0 <= h.dataSeries.type.indexOf("100") ||
                                        "stackedColumn" === e.type || "stackedBar" === e.type || h.dataPoint.y >= h.dataSeries.axisY.viewportMinimum && h.dataPoint.y <= h.dataSeries.axisY.viewportMaximum) && f.push(h);
                        else f.push(h)
                    }
                }
                if (0 < f.length) {
                    this.highlightObjects(f);
                    if (this.enabled) {
                        var n = "",
                            n = this.getToolTipInnerHTML({ entries: f });
                        if (null !== n) {
                            this.contentDiv.innerHTML = n;
                            c = !1;
                            "none" === this.container.style.display && (c = !0, this.container.style.display = "block");
                            try {
                                this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : u ? "rgba(255,255,255,.9)" :
                                    "rgb(255,255,255)", this.borderColor = "waterfall" === f[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataPoint.color ? f[0].dataPoint.color : 0 < f[0].dataPoint.y ? f[0].dataSeries.risingColor : f[0].dataSeries.fallingColor : "error" === f[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ?
                                    this.options.borderColor : f[0].dataSeries.color ? f[0].dataSeries.color : f[0].dataSeries._colorSet[e.index % f[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataPoint.color ? f[0].dataPoint.color : f[0].dataSeries.color ? f[0].dataSeries.color : f[0].dataSeries._colorSet[f[0].index % f[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness ||
                                    0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight =
                                    this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : u ? "italic" : "normal"
                            } catch (r) {}
                            "pie" === f[0].dataSeries.type || "doughnut" === f[0].dataSeries.type || "funnel" === f[0].dataSeries.type || "pyramid" === f[0].dataSeries.type || "bar" === f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type ? a = a - 10 - this.container.clientWidth : (a = f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x) -
                                this.container.clientWidth << 0, a -= 10);
                            0 > a && (a += this.container.clientWidth + 20);
                            a + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (a = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                            d = 1 !== f.length || this.shared || "line" !== f[0].dataSeries.type && "stepLine" !== f[0].dataSeries.type && "spline" !== f[0].dataSeries.type && "area" !== f[0].dataSeries.type && "stepArea" !== f[0].dataSeries.type && "splineArea" !== f[0].dataSeries.type ? "bar" ===
                                f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type ? f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x) : d : f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y);
                            d = -d + 10;
                            0 < d + this.container.clientHeight + 5 && (d -= d + this.container.clientHeight + 5 - 0);
                            this.fixMozTransitionDelay(a, d);
                            !this.animationEnabled || c ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
                            this.positionLeft = a;
                            this.positionBottom = d;
                            this.container.style.left = a + "px";
                            this.container.style.bottom = d + "px"
                        } else this.hide(!1), this.dispatchEvent("hidden", { chart: this.chart, toolTip: this }, this)
                    }
                    d = [];
                    for (b = 0; b < f.length; b++) d.push({ xValue: f[b].dataPoint.x, dataPoint: f[b].dataPoint, dataSeries: f[b].dataSeries, dataPointIndex: f[b].index, dataSeriesIndex: f[b].dataSeries._index });
                    n = { chart: this.chart, toolTip: this.options, content: n, entries: d };
                    this._entries = f;
                    this.dispatchEvent("updated", n, this)
                } else this.hide()
            }
        };
        $.prototype.highlightObjects = function(a) {
            var d = this.chart.overlaidCanvasCtx;
            if (s(this.chart.clearedOverlayedCanvas) || "toolTip" === this.chart.clearedOverlayedCanvas) this.chart.resetOverlayedCanvas(), d.clearRect(0, 0, this.chart.width, this.chart.height), this.chart.clearedOverlayedCanvas = "toolTip";
            d.save();
            var c = this.chart.plotArea,
                b = 0;
            d.beginPath();
            d.rect(c.x1, c.y1, c.x2 - c.x1, c.y2 - c.y1);
            d.clip();
            for (c = 0; c < a.length; c++) {
                var e = a[c];
                if ((e = this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]]) &&
                    e.objectType && "dataPoint" === e.objectType) {
                    var b = this.chart.data[e.dataSeriesIndex],
                        f = b.dataPoints[e.dataPointIndex],
                        k = e.dataPointIndex;
                    !1 === f.highlightEnabled || !0 !== b.highlightEnabled && !0 !== f.highlightEnabled || ("line" === b.type || "stepLine" === b.type || "spline" === b.type || "scatter" === b.type || "area" === b.type || "stepArea" === b.type || "splineArea" === b.type || "stackedArea" === b.type || "stackedArea100" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type ? (f = b.getMarkerProperties(k, e.x1, e.y1, this.chart.overlaidCanvasCtx),
                            f.size = Math.max(1.5 * f.size << 0, 10), f.borderColor = f.borderColor || "#FFFFFF", f.borderThickness = f.borderThickness || Math.ceil(0.1 * f.size), X.drawMarkers([f]), "undefined" !== typeof e.y2 && (f = b.getMarkerProperties(k, e.x1, e.y2, this.chart.overlaidCanvasCtx), f.size = Math.max(1.5 * f.size << 0, 10), f.borderColor = f.borderColor || "#FFFFFF", f.borderThickness = f.borderThickness || Math.ceil(0.1 * f.size), X.drawMarkers([f]))) : "bubble" === b.type ? (f = b.getMarkerProperties(k, e.x1, e.y1, this.chart.overlaidCanvasCtx), f.size = e.size, f.color =
                            "white", f.borderColor = "white", d.globalAlpha = 0.3, X.drawMarkers([f]), d.globalAlpha = 1) : "column" === b.type || "stackedColumn" === b.type || "stackedColumn100" === b.type || "bar" === b.type || "rangeBar" === b.type || "stackedBar" === b.type || "stackedBar100" === b.type || "rangeColumn" === b.type || "waterfall" === b.type ? ca(d, e.x1, e.y1, e.x2, e.y2, "white", 0, null, !1, !1, !1, !1, 0.3) : "pie" === b.type || "doughnut" === b.type ? Y(d, e.center, e.radius, "white", b.type, e.startAngle, e.endAngle, 0.3, e.percentInnerRadius) : "funnel" === b.type || "pyramid" === b.type ?
                        pa(d, e.funnelSection, 0.3, "white") : "candlestick" === b.type ? (d.globalAlpha = 1, d.strokeStyle = e.color, d.lineWidth = 2 * e.borderThickness, b = 0 === d.lineWidth % 2 ? 0 : 0.5, d.beginPath(), d.moveTo(e.x3 - b, Math.min(e.y2, e.y3)), d.lineTo(e.x3 - b, Math.min(e.y1, e.y4)), d.stroke(), d.beginPath(), d.moveTo(e.x3 - b, Math.max(e.y1, e.y4)), d.lineTo(e.x3 - b, Math.max(e.y2, e.y3)), d.stroke(), ca(d, e.x1, Math.min(e.y1, e.y4), e.x2, Math.max(e.y1, e.y4), "transparent", 2 * e.borderThickness, e.color, !1, !1, !1, !1), d.globalAlpha = 1) : "ohlc" === b.type ? (d.globalAlpha =
                            1, d.strokeStyle = e.color, d.lineWidth = 2 * e.borderThickness, b = 0 === d.lineWidth % 2 ? 0 : 0.5, d.beginPath(), d.moveTo(e.x3 - b, e.y2), d.lineTo(e.x3 - b, e.y3), d.stroke(), d.beginPath(), d.moveTo(e.x3, e.y1), d.lineTo(e.x1, e.y1), d.stroke(), d.beginPath(), d.moveTo(e.x3, e.y4), d.lineTo(e.x2, e.y4), d.stroke(), d.globalAlpha = 1) : "boxAndWhisker" === b.type ? (d.save(), d.globalAlpha = 1, d.strokeStyle = e.stemColor, d.lineWidth = 2 * e.stemThickness, 0 < e.stemThickness && (d.beginPath(), d.moveTo(e.x3, e.y2 + e.borderThickness / 2), d.lineTo(e.x3, e.y1 + e.whiskerThickness /
                            2), d.stroke(), d.beginPath(), d.moveTo(e.x3, e.y4 - e.whiskerThickness / 2), d.lineTo(e.x3, e.y3 - e.borderThickness / 2), d.stroke()), d.beginPath(), ca(d, e.x1 - e.borderThickness / 2, Math.max(e.y2 + e.borderThickness / 2, e.y3 + e.borderThickness / 2), e.x2 + e.borderThickness / 2, Math.min(e.y2 - e.borderThickness / 2, e.y3 - e.borderThickness / 2), "transparent", e.borderThickness, e.color, !1, !1, !1, !1), d.globalAlpha = 1, d.strokeStyle = e.whiskerColor, d.lineWidth = 2 * e.whiskerThickness, 0 < e.whiskerThickness && (d.beginPath(), d.moveTo(Math.floor(e.x3 -
                            e.whiskerLength / 2), e.y4), d.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y4), d.stroke(), d.beginPath(), d.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y1), d.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y1), d.stroke()), d.globalAlpha = 1, d.strokeStyle = e.lineColor, d.lineWidth = 2 * e.lineThickness, 0 < e.lineThickness && (d.beginPath(), d.moveTo(e.x1, e.y5), d.lineTo(e.x2, e.y5), d.stroke()), d.restore(), d.globalAlpha = 1) : "error" === b.type && y(d, e.x1, e.y1, e.x2, e.y2, "white", e.whiskerProperties, e.stemProperties, e.isXYSwapped, 0.3))
                }
            }
            d.restore();
            d.globalAlpha = 1;
            d.beginPath()
        };
        $.prototype.getToolTipInnerHTML = function(a) {
            a = a.entries;
            for (var d = null, c = null, b = null, e = 0, f = "", k = !0, l = 0; l < a.length; l++)
                if (a[l].dataSeries.toolTipContent || a[l].dataPoint.toolTipContent) { k = !1; break }
            if (k && (this.content && "function" === typeof this.content || this.contentFormatter)) a = { chart: this.chart, toolTip: this.options, entries: a }, d = this.contentFormatter ? this.contentFormatter(a) : this.content(a);
            else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
                for (var m = null,
                        h = "", l = 0; l < a.length; l++) c = a[l].dataSeries, b = a[l].dataPoint, e = a[l].index, f = "", 0 === l && (k && !this.content) && (this.chart.axisX && 0 < this.chart.axisX.length ? h += "undefined" !== typeof this.chart.axisX[0].labels[b.x] ? this.chart.axisX[0].labels[b.x] : "{x}" : this.chart.axisX2 && 0 < this.chart.axisX2.length && (h += "undefined" !== typeof this.chart.axisX2[0].labels[b.x] ? this.chart.axisX2[0].labels[b.x] : "{x}"), h += "</br>", h = this.chart.replaceKeywordsWithValue(h, b, c, e)), null === b.toolTipContent || "undefined" === typeof b.toolTipContent &&
                    null === c.options.toolTipContent || ("line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" === c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "waterfall" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (f += m != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" :
                            ""), f += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}", m = c.axisXIndex) : "bubble" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (f += m != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), f += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ?
                            this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}") : "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (f += m != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), f += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content :
                            "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}") : "candlestick" === c.type || "ohlc" === c.type ? (this.chart.axisX && 1 < this.chart.axisX.length && (f += m != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), f += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}") :
                        "boxAndWhisker" === c.type && (this.chart.axisX && 1 < this.chart.axisX.length && (f += m != c.axisXIndex ? c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>" : ""), f += b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>{name}:</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}"),
                        null === d && (d = ""), !0 === this.reversed ? (d = this.chart.replaceKeywordsWithValue(f, b, c, e) + d, l < a.length - 1 && (d = "</br>" + d)) : (d += this.chart.replaceKeywordsWithValue(f, b, c, e), l < a.length - 1 && (d += "</br>")));
                null !== d && (d = h + d)
            } else {
                c = a[0].dataSeries;
                b = a[0].dataPoint;
                e = a[0].index;
                if (null === b.toolTipContent || "undefined" === typeof b.toolTipContent && null === c.options.toolTipContent) return null;
                "line" === c.type || "stepLine" === c.type || "spline" === c.type || "area" === c.type || "stepArea" === c.type || "splineArea" === c.type || "column" ===
                    c.type || "bar" === c.type || "scatter" === c.type || "stackedColumn" === c.type || "stackedColumn100" === c.type || "stackedBar" === c.type || "stackedBar100" === c.type || "stackedArea" === c.type || "stackedArea100" === c.type || "waterfall" === c.type ? f = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}" : "bubble" === c.type ? f = b.toolTipContent ?
                    b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}" : "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type ? f = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" :
                        "'color:{color};'") + "\"'>" + (b.name ? "{name}:</span>&nbsp;&nbsp;" : b.label ? "{label}:</span>&nbsp;&nbsp;" : "</span>") + "{y}" : "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type ? f = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (b.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}" :
                    "candlestick" === c.type || "ohlc" === c.type ? f = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent : this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (b.label ? "{label}" : "{x}") + "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}" : "boxAndWhisker" === c.type && (f = b.toolTipContent ? b.toolTipContent : c.toolTipContent ? c.toolTipContent :
                        this.content && "function" !== typeof this.content ? this.content : "<span style='\"" + (this.options.fontColor ? "" : "'color:{color};'") + "\"'>" + (b.label ? "{label}" : "{x}") + "</span><br/>Minimum: &nbsp;&nbsp;{y[0]}<br/>Q1: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}");
                null === d && (d = "");
                d += this.chart.replaceKeywordsWithValue(f, b, c, e)
            }
            return d
        };
        $.prototype.enableAnimation = function() {
            if (!this.container.style.WebkitTransition) {
                var a = this.getContainerTransition(this.containerTransitionDuration);
                this.container.style.WebkitTransition = a;
                this.container.style.MsTransition = a;
                this.container.style.transition = a;
                this.container.style.MozTransition = this.mozContainerTransition
            }
        };
        $.prototype.disableAnimation = function() {
            this.container.style.WebkitTransition && (this.container.style.WebkitTransition =
                "", this.container.style.MozTransition = "", this.container.style.MsTransition = "", this.container.style.transition = "")
        };
        $.prototype.hide = function(a) { this.container && (this.container.style.display = "none", this.currentSeriesIndex = -1, this._prevY = this._prevX = NaN, ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas()) };
        $.prototype.show = function(a, d, c) { this._updateToolTip(a, d, "undefined" === typeof c ? !1 : c) };
        $.prototype.showAtIndex = function(a, d) {};
        $.prototype.showAtX = function(a, d) {
            if (!this.enabled) return !1;
            this.chart.clearedOverlayedCanvas = null;
            var c, b, e, f = [];
            e = !1;
            d = !s(d) && 0 <= d && d < this.chart.data.length ? d : 0;
            if (this.shared)
                for (var k = 0; k < this.chart.data.length; k++) c = this.chart.data[k], (b = c.getDataPointAtX(a, !1)) && (b.dataPoint && !s(b.dataPoint.y) && c.visible) && (b.dataSeries = c, f.push(b));
            else c = this.chart.data[d], (b = c.getDataPointAtX(a, !1)) && (b.dataPoint && !s(b.dataPoint.y) && c.visible) && (b.dataSeries = c, f.push(b));
            if (0 < f.length) {
                for (k = 0; k < f.length; k++)
                    if (b = f[k], b.dataPoint.x < b.dataSeries.axisX.viewportMinimum ||
                        b.dataPoint.x > b.dataSeries.axisX.viewportMaximum || b.dataPoint.y < b.dataSeries.axisY.viewportMinimum || b.dataPoint.y > b.dataSeries.axisY.viewportMaximum) e = !0;
                    else { e = !1; break }
                if (e) return this.hide(), !1;
                this.highlightObjects(f);
                this._entries = f;
                b = "";
                b = this.getToolTipInnerHTML({ entries: f });
                if (null !== b) {
                    this.contentDiv.innerHTML = b;
                    b = !1;
                    "none" === this.container.style.display && (b = !0, this.container.style.display = "block");
                    try {
                        this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : u ? "rgba(255,255,255,.9)" :
                            "rgb(255,255,255)", this.borderColor = "waterfall" === f[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataPoint.color ? f[0].dataPoint.color : 0 < f[0].dataPoint.y ? f[0].dataSeries.risingColor : f[0].dataSeries.fallingColor : "error" === f[0].dataSeries.type ? this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ?
                            this.options.borderColor : f[0].dataSeries.color ? f[0].dataSeries.color : f[0].dataSeries._colorSet[c.index % f[0].dataSeries._colorSet.length] : this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor ? this.options.borderColor : f[0].dataPoint.color ? f[0].dataPoint.color : f[0].dataSeries.color ? f[0].dataSeries.color : f[0].dataSeries._colorSet[f[0].index % f[0].dataSeries._colorSet.length], this.contentDiv.style.borderWidth = this.borderThickness ||
                            0 === this.borderThickness ? this.borderThickness + "px" : "2px", this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px", this.container.style.borderRadius = this.contentDiv.style.borderRadius, this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px", this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000", this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;", this.contentDiv.style.fontWeight =
                            this.fontWeight ? this.fontWeight : "normal", this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : u ? "italic" : "normal"
                    } catch (l) {}
                    "pie" === f[0].dataSeries.type || "doughnut" === f[0].dataSeries.type || "funnel" === f[0].dataSeries.type || "pyramid" === f[0].dataSeries.type ? c = mouseX - 10 - this.container.clientWidth : (c = "bar" === f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type ? f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y) -
                        this.container.clientWidth << 0 : f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x) - this.container.clientWidth << 0, c -= 10);
                    0 > c && (c += this.container.clientWidth + 20);
                    c + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (c = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                    f = 1 !== f.length || this.shared || "line" !== f[0].dataSeries.type && "stepLine" !== f[0].dataSeries.type && "spline" !== f[0].dataSeries.type && "area" !== f[0].dataSeries.type &&
                        "stepArea" !== f[0].dataSeries.type && "splineArea" !== f[0].dataSeries.type ? "bar" === f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type ? f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x) : f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y) : f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y);
                    f = -f + 10;
                    0 < f + this.container.clientHeight + 5 && (f -= f + this.container.clientHeight + 5 - 0);
                    this.fixMozTransitionDelay(c,
                        f);
                    !this.animationEnabled || b ? this.disableAnimation() : (this.enableAnimation(), this.container.style.MozTransition = this.mozContainerTransition);
                    this.container.style.left = c + "px";
                    this.container.style.bottom = f + "px"
                } else return this.hide(!1), !1
            } else return this.hide(), !1;
            return !0
        };
        $.prototype.fixMozTransitionDelay = function(a, d) {
            if (20 < this.chart._eventManager.lastObjectId) this.mozContainerTransition = this.getContainerTransition(0);
            else {
                var c = parseFloat(this.container.style.left),
                    c = isNaN(c) ? 0 : c,
                    b = parseFloat(this.container.style.bottom),
                    b = isNaN(b) ? 0 : b;
                10 < Math.sqrt(Math.pow(c - a, 2) + Math.pow(b - d, 2)) ? this.mozContainerTransition = this.getContainerTransition(0.1) : this.mozContainerTransition = this.getContainerTransition(0)
            }
        };
        $.prototype.getContainerTransition = function(a) { return "left " + a + "s ease-out 0s, bottom " + a + "s ease-out 0s" };
        da.prototype.reset = function() {
            this.lastObjectId = 0;
            this.objectMap = [];
            this.rectangularRegionEventSubscriptions = [];
            this.previousDataPointEventObject = null;
            this.eventObjects = [];
            u && (this.ghostCtx.clearRect(0, 0, this.chart.width,
                this.chart.height), this.ghostCtx.beginPath())
        };
        da.prototype.getNewObjectTrackingId = function() { return ++this.lastObjectId };
        da.prototype.mouseEventHandler = function(a) {
            if ("mousemove" === a.type || "click" === a.type) {
                var d = [],
                    c = Ma(a),
                    b = null;
                if ((b = this.chart.getObjectAtXY(c.x, c.y, !1)) && "undefined" !== typeof this.objectMap[b])
                    if (b = this.objectMap[b], "dataPoint" === b.objectType) {
                        var e = this.chart.data[b.dataSeriesIndex],
                            f = e.dataPoints[b.dataPointIndex],
                            k = b.dataPointIndex;
                        b.eventParameter = {
                            x: c.x,
                            y: c.y,
                            dataPoint: f,
                            dataSeries: e.options,
                            dataPointIndex: k,
                            dataSeriesIndex: e.index,
                            chart: this.chart
                        };
                        b.eventContext = { context: f, userContext: f, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click" };
                        d.push(b);
                        b = this.objectMap[e.id];
                        b.eventParameter = { x: c.x, y: c.y, dataPoint: f, dataSeries: e.options, dataPointIndex: k, dataSeriesIndex: e.index, chart: this.chart };
                        b.eventContext = { context: e, userContext: e.options, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click" };
                        d.push(this.objectMap[e.id])
                    } else "legendItem" ===
                        b.objectType && (e = this.chart.data[b.dataSeriesIndex], f = null !== b.dataPointIndex ? e.dataPoints[b.dataPointIndex] : null, b.eventParameter = { x: c.x, y: c.y, dataSeries: e.options, dataPoint: f, dataPointIndex: b.dataPointIndex, dataSeriesIndex: b.dataSeriesIndex, chart: this.chart }, b.eventContext = { context: this.chart.legend, userContext: this.chart.legend.options, mouseover: "itemmouseover", mousemove: "itemmousemove", mouseout: "itemmouseout", click: "itemclick" }, d.push(b));
                e = [];
                for (c = 0; c < this.mouseoveredObjectMaps.length; c++) {
                    f = !0;
                    for (b = 0; b < d.length; b++)
                        if (d[b].id === this.mouseoveredObjectMaps[c].id) { f = !1; break }
                    f ? this.fireEvent(this.mouseoveredObjectMaps[c], "mouseout", a) : e.push(this.mouseoveredObjectMaps[c])
                }
                this.mouseoveredObjectMaps = e;
                for (c = 0; c < d.length; c++) {
                    e = !1;
                    for (b = 0; b < this.mouseoveredObjectMaps.length; b++)
                        if (d[c].id === this.mouseoveredObjectMaps[b].id) { e = !0; break }
                    e || (this.fireEvent(d[c], "mouseover", a), this.mouseoveredObjectMaps.push(d[c]));
                    "click" === a.type ? this.fireEvent(d[c], "click", a) : "mousemove" === a.type && this.fireEvent(d[c],
                        "mousemove", a)
                }
            }
        };
        da.prototype.fireEvent = function(a, d, c) {
            if (a && d) {
                var b = a.eventParameter,
                    e = a.eventContext,
                    f = a.eventContext.userContext;
                f && (e && f[e[d]]) && f[e[d]].call(f, b);
                "mouseout" !== d ? f.cursor && f.cursor !== c.target.style.cursor && (c.target.style.cursor = f.cursor) : (c.target.style.cursor = this.chart._defaultCursor, delete a.eventParameter, delete a.eventContext);
                "click" === d && ("dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler) && this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex],
                    b);
                "click" === d && ("dataPoint" === a.objectType && this.chart.funnelPyramidClickHandler) && this.chart.funnelPyramidClickHandler.call(this.chart.data[a.dataSeriesIndex], b)
            }
        };
        ha.prototype.animate = function(a, d, c, b, e) {
            var f = this;
            this.chart.isAnimating = !0;
            e = e || L.easing.linear;
            c && this.animations.push({ startTime: (new Date).getTime() + (a ? a : 0), duration: d, animationCallback: c, onComplete: b });
            for (a = []; 0 < this.animations.length;)
                if (d = this.animations.shift(), c = (new Date).getTime(), b = 0, d.startTime <= c && (b = e(Math.min(c - d.startTime,
                        d.duration), 0, 1, d.duration), b = Math.min(b, 1), isNaN(b) || !isFinite(b)) && (b = 1), 1 > b && a.push(d), d.animationCallback(b), 1 <= b && d.onComplete) d.onComplete();
            this.animations = a;
            0 < this.animations.length ? this.animationRequestId = this.chart.requestAnimFrame.call(window, function() { f.animate.call(f) }) : this.chart.isAnimating = !1
        };
        ha.prototype.cancelAllAnimations = function() {
            this.animations = [];
            this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
            this.animationRequestId = null;
            this.chart.isAnimating = !1
        };
        var L = {
                yScaleAnimation: function(a, d) {
                    if (0 !== a) {
                        var c = d.dest,
                            b = d.source.canvas,
                            e = d.animationBase;
                        c.drawImage(b, 0, 0, b.width, b.height, 0, e - e * a, c.canvas.width / ga, a * c.canvas.height / ga)
                    }
                },
                xScaleAnimation: function(a, d) {
                    if (0 !== a) {
                        var c = d.dest,
                            b = d.source.canvas,
                            e = d.animationBase;
                        c.drawImage(b, 0, 0, b.width, b.height, e - e * a, 0, a * c.canvas.width / ga, c.canvas.height / ga)
                    }
                },
                xClipAnimation: function(a, d) {
                    if (0 !== a) {
                        var c = d.dest,
                            b = d.source.canvas;
                        c.save();
                        0 < a && c.drawImage(b, 0, 0, b.width * a, b.height, 0, 0, b.width * a / ga, b.height /
                            ga);
                        c.restore()
                    }
                },
                fadeInAnimation: function(a, d) {
                    if (0 !== a) {
                        var c = d.dest,
                            b = d.source.canvas;
                        c.save();
                        c.globalAlpha = a;
                        c.drawImage(b, 0, 0, b.width, b.height, 0, 0, c.canvas.width / ga, c.canvas.height / ga);
                        c.restore()
                    }
                },
                easing: { linear: function(a, d, c, b) { return c * a / b + d }, easeOutQuad: function(a, d, c, b) { return -c * (a /= b) * (a - 2) + d }, easeOutQuart: function(a, d, c, b) { return -c * ((a = a / b - 1) * a * a * a - 1) + d }, easeInQuad: function(a, d, c, b) { return c * (a /= b) * a + d }, easeInQuart: function(a, d, c, b) { return c * (a /= b) * a * a * a + d } }
            },
            X = {
                drawMarker: function(a,
                    d, c, b, e, f, k, l) {
                    if (c) {
                        var m = 1;
                        c.fillStyle = f ? f : "#000000";
                        c.strokeStyle = k ? k : "#000000";
                        c.lineWidth = l ? l : 0;
                        c.setLineDash && c.setLineDash(N("solid", l));
                        "circle" === b ? (c.moveTo(a, d), c.beginPath(), c.arc(a, d, e / 2, 0, 2 * Math.PI, !1), f && c.fill(), l && (k ? c.stroke() : (m = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = m))) : "square" === b ? (c.beginPath(), c.rect(a - e / 2, d - e / 2, e, e), f && c.fill(), l && (k ? c.stroke() : (m = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = m))) :
                            "triangle" === b ? (c.beginPath(), c.moveTo(a - e / 2, d + e / 2), c.lineTo(a + e / 2, d + e / 2), c.lineTo(a, d - e / 2), c.closePath(), f && c.fill(), l && (k ? c.stroke() : (m = c.globalAlpha, c.globalAlpha = 0.15, c.strokeStyle = "black", c.stroke(), c.globalAlpha = m)), c.beginPath()) : "cross" === b && (c.strokeStyle = f, c.lineWidth = e / 4, c.beginPath(), c.moveTo(a - e / 2, d - e / 2), c.lineTo(a + e / 2, d + e / 2), c.stroke(), c.moveTo(a + e / 2, d - e / 2), c.lineTo(a - e / 2, d + e / 2), c.stroke())
                    }
                },
                drawMarkers: function(a) {
                    for (var d = 0; d < a.length; d++) {
                        var c = a[d];
                        X.drawMarker(c.x, c.y, c.ctx, c.type,
                            c.size, c.color, c.borderColor, c.borderThickness)
                    }
                }
            };
        return m
    }();
    y.version = "v3.2 GA";
    window.CanvasJS && (y && !window.CanvasJS.Chart) && (window.CanvasJS.Chart = y)
})();

/*
  excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.

  Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
  Licensed under the Apache License, Version 2.0
*/
document.createElement("canvas").getContext || function() {
    function V() { return this.context_ || (this.context_ = new C(this)) }

    function W(a, b, c) { var g = M.call(arguments, 2); return function() { return a.apply(b, g.concat(M.call(arguments))) } }

    function N(a) { return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;") }

    function O(a) {
        a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
        a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
        a.styleSheets.ex_canvas_ || (a = a.createStyleSheet(), a.owningElement.id = "ex_canvas_", a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}")
    }

    function X(a) {
        var b = a.srcElement;
        switch (a.propertyName) {
            case "width":
                b.getContext().clearRect();
                b.style.width = b.attributes.width.nodeValue + "px";
                b.firstChild.style.width = b.clientWidth + "px";
                break;
            case "height":
                b.getContext().clearRect(), b.style.height = b.attributes.height.nodeValue + "px", b.firstChild.style.height = b.clientHeight +
                    "px"
        }
    }

    function Y(a) {
        a = a.srcElement;
        a.firstChild && (a.firstChild.style.width = a.clientWidth + "px", a.firstChild.style.height = a.clientHeight + "px")
    }

    function D() {
        return [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ]
    }

    function t(a, b) {
        for (var c = D(), g = 0; 3 > g; g++)
            for (var e = 0; 3 > e; e++) {
                for (var f = 0, d = 0; 3 > d; d++) f += a[g][d] * b[d][e];
                c[g][e] = f
            }
        return c
    }

    function P(a, b) {
        b.fillStyle = a.fillStyle;
        b.lineCap = a.lineCap;
        b.lineJoin = a.lineJoin;
        b.lineWidth = a.lineWidth;
        b.miterLimit = a.miterLimit;
        b.shadowBlur = a.shadowBlur;
        b.shadowColor = a.shadowColor;
        b.shadowOffsetX =
            a.shadowOffsetX;
        b.shadowOffsetY = a.shadowOffsetY;
        b.strokeStyle = a.strokeStyle;
        b.globalAlpha = a.globalAlpha;
        b.font = a.font;
        b.textAlign = a.textAlign;
        b.textBaseline = a.textBaseline;
        b.arcScaleX_ = a.arcScaleX_;
        b.arcScaleY_ = a.arcScaleY_;
        b.lineScale_ = a.lineScale_
    }

    function Q(a) {
        var b = a.indexOf("(", 3),
            c = a.indexOf(")", b + 1),
            b = a.substring(b + 1, c).split(",");
        if (4 != b.length || "a" != a.charAt(3)) b[3] = 1;
        return b
    }

    function E(a, b, c) { return Math.min(c, Math.max(b, a)) }

    function F(a, b, c) {
        0 > c && c++;
        1 < c && c--;
        return 1 > 6 * c ? a + 6 * (b - a) * c :
            1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a
    }

    function G(a) {
        if (a in H) return H[a];
        var b, c = 1;
        a = String(a);
        if ("#" == a.charAt(0)) b = a;
        else if (/^rgb/.test(a)) {
            c = Q(a);
            b = "#";
            for (var g, e = 0; 3 > e; e++) g = -1 != c[e].indexOf("%") ? Math.floor(255 * (parseFloat(c[e]) / 100)) : +c[e], b += v[E(g, 0, 255)];
            c = +c[3]
        } else if (/^hsl/.test(a)) {
            e = c = Q(a);
            b = parseFloat(e[0]) / 360 % 360;
            0 > b && b++;
            g = E(parseFloat(e[1]) / 100, 0, 1);
            e = E(parseFloat(e[2]) / 100, 0, 1);
            if (0 == g) g = e = b = e;
            else {
                var f = 0.5 > e ? e * (1 + g) : e + g - e * g,
                    d = 2 * e - f;
                g = F(d, f, b + 1 / 3);
                e = F(d, f, b);
                b = F(d, f, b - 1 / 3)
            }
            b = "#" +
                v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)];
            c = c[3]
        } else b = Z[a] || a;
        return H[a] = { color: b, alpha: c }
    }

    function C(a) {
        this.m_ = D();
        this.mStack_ = [];
        this.aStack_ = [];
        this.currentPath_ = [];
        this.fillStyle = this.strokeStyle = "#000";
        this.lineWidth = 1;
        this.lineJoin = "miter";
        this.lineCap = "butt";
        this.miterLimit = 1 * q;
        this.globalAlpha = 1;
        this.font = "10px sans-serif";
        this.textAlign = "left";
        this.textBaseline = "alphabetic";
        this.canvas = a;
        var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute",
            c = a.ownerDocument.createElement("div");
        c.style.cssText = b;
        a.appendChild(c);
        b = c.cloneNode(!1);
        b.style.backgroundColor = "red";
        b.style.filter = "alpha(opacity=0)";
        a.appendChild(b);
        this.element_ = c;
        this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1
    }

    function R(a, b, c, g) {
        a.currentPath_.push({ type: "bezierCurveTo", cp1x: b.x, cp1y: b.y, cp2x: c.x, cp2y: c.y, x: g.x, y: g.y });
        a.currentX_ = g.x;
        a.currentY_ = g.y
    }

    function S(a, b) {
        var c = G(a.strokeStyle),
            g = c.color,
            c = c.alpha * a.globalAlpha,
            e = a.lineScale_ * a.lineWidth;
        1 > e && (c *= e);
        b.push("<g_vml_:stroke",
            ' opacity="', c, '"', ' joinstyle="', a.lineJoin, '"', ' miterlimit="', a.miterLimit, '"', ' endcap="', $[a.lineCap] || "square", '"', ' weight="', e, 'px"', ' color="', g, '" />')
    }

    function T(a, b, c, g) {
        var e = a.fillStyle,
            f = a.arcScaleX_,
            d = a.arcScaleY_,
            k = g.x - c.x,
            n = g.y - c.y;
        if (e instanceof w) {
            var h = 0,
                l = g = 0,
                u = 0,
                m = 1;
            if ("gradient" == e.type_) {
                h = e.x1_ / f;
                c = e.y1_ / d;
                var p = s(a, e.x0_ / f, e.y0_ / d),
                    h = s(a, h, c),
                    h = 180 * Math.atan2(h.x - p.x, h.y - p.y) / Math.PI;
                0 > h && (h += 360);
                1E-6 > h && (h = 0)
            } else p = s(a, e.x0_, e.y0_), g = (p.x - c.x) / k, l = (p.y - c.y) / n, k /= f * q,
                n /= d * q, m = x.max(k, n), u = 2 * e.r0_ / m, m = 2 * e.r1_ / m - u;
            f = e.colors_;
            f.sort(function(a, b) { return a.offset - b.offset });
            d = f.length;
            p = f[0].color;
            c = f[d - 1].color;
            k = f[0].alpha * a.globalAlpha;
            a = f[d - 1].alpha * a.globalAlpha;
            for (var n = [], r = 0; r < d; r++) {
                var t = f[r];
                n.push(t.offset * m + u + " " + t.color)
            }
            b.push('<g_vml_:fill type="', e.type_, '"', ' method="none" focus="100%"', ' color="', p, '"', ' color2="', c, '"', ' colors="', n.join(","), '"', ' opacity="', a, '"', ' g_o_:opacity2="', k, '"', ' angle="', h, '"', ' focusposition="', g, ",", l, '" />')
        } else e instanceof
        I ? k && n && b.push("<g_vml_:fill", ' position="', -c.x / k * f * f, ",", -c.y / n * d * d, '"', ' type="tile"', ' src="', e.src_, '" />') : (e = G(a.fillStyle), b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'))
    }

    function s(a, b, c) { a = a.m_; return { x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r, y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r } }

    function z(a, b, c) {
        isFinite(b[0][0]) && (isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1])) && (a.m_ = b, c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] *
            b[1][0]))))
    }

    function w(a) {
        this.type_ = a;
        this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
        this.colors_ = []
    }

    function I(a, b) {
        if (!a || 1 != a.nodeType || "IMG" != a.tagName) throw new A("TYPE_MISMATCH_ERR");
        if ("complete" != a.readyState) throw new A("INVALID_STATE_ERR");
        switch (b) {
            case "repeat":
            case null:
            case "":
                this.repetition_ = "repeat";
                break;
            case "repeat-x":
            case "repeat-y":
            case "no-repeat":
                this.repetition_ = b;
                break;
            default:
                throw new A("SYNTAX_ERR");
        }
        this.src_ = a.src;
        this.width_ = a.width;
        this.height_ = a.height
    }

    function A(a) {
        this.code = this[a];
        this.message = a + ": DOM Exception " + this.code
    }
    var x = Math,
        k = x.round,
        J = x.sin,
        K = x.cos,
        ba = x.abs,
        aa = x.sqrt,
        q = 10,
        r = q / 2;
    navigator.userAgent.match(/MSIE ([\d.]+)?/);
    var M = Array.prototype.slice;
    O(document);
    var U = {
        init: function(a) {
            a = a || document;
            a.createElement("canvas");
            a.attachEvent("onreadystatechange", W(this.init_, this, a))
        },
        init_: function(a) { a = a.getElementsByTagName("canvas"); for (var b = 0; b < a.length; b++) this.initElement(a[b]) },
        initElement: function(a) {
            if (!a.getContext) {
                a.getContext =
                    V;
                O(a.ownerDocument);
                a.innerHTML = "";
                a.attachEvent("onpropertychange", X);
                a.attachEvent("onresize", Y);
                var b = a.attributes;
                b.width && b.width.specified ? a.style.width = b.width.nodeValue + "px" : a.width = a.clientWidth;
                b.height && b.height.specified ? a.style.height = b.height.nodeValue + "px" : a.height = a.clientHeight
            }
            return a
        }
    };
    U.init();
    for (var v = [], d = 0; 16 > d; d++)
        for (var B = 0; 16 > B; B++) v[16 * d + B] = d.toString(16) + B.toString(16);
    var Z = {
            aliceblue: "#F0F8FF",
            antiquewhite: "#FAEBD7",
            aquamarine: "#7FFFD4",
            azure: "#F0FFFF",
            beige: "#F5F5DC",
            bisque: "#FFE4C4",
            black: "#000000",
            blanchedalmond: "#FFEBCD",
            blueviolet: "#8A2BE2",
            brown: "#A52A2A",
            burlywood: "#DEB887",
            cadetblue: "#5F9EA0",
            chartreuse: "#7FFF00",
            chocolate: "#D2691E",
            coral: "#FF7F50",
            cornflowerblue: "#6495ED",
            cornsilk: "#FFF8DC",
            crimson: "#DC143C",
            cyan: "#00FFFF",
            darkblue: "#00008B",
            darkcyan: "#008B8B",
            darkgoldenrod: "#B8860B",
            darkgray: "#A9A9A9",
            darkgreen: "#006400",
            darkgrey: "#A9A9A9",
            darkkhaki: "#BDB76B",
            darkmagenta: "#8B008B",
            darkolivegreen: "#556B2F",
            darkorange: "#FF8C00",
            darkorchid: "#9932CC",
            darkred: "#8B0000",
            darksalmon: "#E9967A",
            darkseagreen: "#8FBC8F",
            darkslateblue: "#483D8B",
            darkslategray: "#2F4F4F",
            darkslategrey: "#2F4F4F",
            darkturquoise: "#00CED1",
            darkviolet: "#9400D3",
            deeppink: "#FF1493",
            deepskyblue: "#00BFFF",
            dimgray: "#696969",
            dimgrey: "#696969",
            dodgerblue: "#1E90FF",
            firebrick: "#B22222",
            floralwhite: "#FFFAF0",
            forestgreen: "#228B22",
            gainsboro: "#DCDCDC",
            ghostwhite: "#F8F8FF",
            gold: "#FFD700",
            goldenrod: "#DAA520",
            grey: "#808080",
            greenyellow: "#ADFF2F",
            honeydew: "#F0FFF0",
            hotpink: "#FF69B4",
            indianred: "#CD5C5C",
            indigo: "#4B0082",
            ivory: "#FFFFF0",
            khaki: "#F0E68C",
            lavender: "#E6E6FA",
            lavenderblush: "#FFF0F5",
            lawngreen: "#7CFC00",
            lemonchiffon: "#FFFACD",
            lightblue: "#ADD8E6",
            lightcoral: "#F08080",
            lightcyan: "#E0FFFF",
            lightgoldenrodyellow: "#FAFAD2",
            lightgreen: "#90EE90",
            lightgrey: "#D3D3D3",
            lightpink: "#FFB6C1",
            lightsalmon: "#FFA07A",
            lightseagreen: "#20B2AA",
            lightskyblue: "#87CEFA",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            lightsteelblue: "#B0C4DE",
            lightyellow: "#FFFFE0",
            limegreen: "#32CD32",
            linen: "#FAF0E6",
            magenta: "#FF00FF",
            mediumaquamarine: "#66CDAA",
            mediumblue: "#0000CD",
            mediumorchid: "#BA55D3",
            mediumpurple: "#9370DB",
            mediumseagreen: "#3CB371",
            mediumslateblue: "#7B68EE",
            mediumspringgreen: "#00FA9A",
            mediumturquoise: "#48D1CC",
            mediumvioletred: "#C71585",
            midnightblue: "#191970",
            mintcream: "#F5FFFA",
            mistyrose: "#FFE4E1",
            moccasin: "#FFE4B5",
            navajowhite: "#FFDEAD",
            oldlace: "#FDF5E6",
            olivedrab: "#6B8E23",
            orange: "#FFA500",
            orangered: "#FF4500",
            orchid: "#DA70D6",
            palegoldenrod: "#EEE8AA",
            palegreen: "#98FB98",
            paleturquoise: "#AFEEEE",
            palevioletred: "#DB7093",
            papayawhip: "#FFEFD5",
            peachpuff: "#FFDAB9",
            peru: "#CD853F",
            pink: "#FFC0CB",
            plum: "#DDA0DD",
            powderblue: "#B0E0E6",
            rosybrown: "#BC8F8F",
            royalblue: "#4169E1",
            saddlebrown: "#8B4513",
            salmon: "#FA8072",
            sandybrown: "#F4A460",
            seagreen: "#2E8B57",
            seashell: "#FFF5EE",
            sienna: "#A0522D",
            skyblue: "#87CEEB",
            slateblue: "#6A5ACD",
            slategray: "#708090",
            slategrey: "#708090",
            snow: "#FFFAFA",
            springgreen: "#00FF7F",
            steelblue: "#4682B4",
            tan: "#D2B48C",
            thistle: "#D8BFD8",
            tomato: "#FF6347",
            turquoise: "#40E0D0",
            violet: "#EE82EE",
            wheat: "#F5DEB3",
            whitesmoke: "#F5F5F5",
            yellowgreen: "#9ACD32"
        },
        H = {},
        L = {},
        $ = { butt: "flat", round: "round" },
        d = C.prototype;
    d.clearRect = function() {
        this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0), this.textMeasureEl_ = null);
        this.element_.innerHTML = ""
    };
    d.beginPath = function() { this.currentPath_ = [] };
    d.moveTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({ type: "moveTo", x: c.x, y: c.y });
        this.currentX_ = c.x;
        this.currentY_ = c.y
    };
    d.lineTo = function(a, b) {
        var c = s(this, a, b);
        this.currentPath_.push({ type: "lineTo", x: c.x, y: c.y });
        this.currentX_ = c.x;
        this.currentY_ = c.y
    };
    d.bezierCurveTo =
        function(a, b, c, g, e, f) {
            e = s(this, e, f);
            a = s(this, a, b);
            c = s(this, c, g);
            R(this, a, c, e)
        };
    d.quadraticCurveTo = function(a, b, c, g) {
        a = s(this, a, b);
        c = s(this, c, g);
        g = { x: this.currentX_ + 2 / 3 * (a.x - this.currentX_), y: this.currentY_ + 2 / 3 * (a.y - this.currentY_) };
        R(this, g, { x: g.x + (c.x - this.currentX_) / 3, y: g.y + (c.y - this.currentY_) / 3 }, c)
    };
    d.arc = function(a, b, c, g, e, f) {
        c *= q;
        var d = f ? "at" : "wa",
            k = a + K(g) * c - r,
            n = b + J(g) * c - r;
        g = a + K(e) * c - r;
        e = b + J(e) * c - r;
        k != g || f || (k += 0.125);
        a = s(this, a, b);
        k = s(this, k, n);
        g = s(this, g, e);
        this.currentPath_.push({
            type: d,
            x: a.x,
            y: a.y,
            radius: c,
            xStart: k.x,
            yStart: k.y,
            xEnd: g.x,
            yEnd: g.y
        })
    };
    d.rect = function(a, b, c, g) {
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath()
    };
    d.strokeRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a + c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.stroke();
        this.currentPath_ = e
    };
    d.fillRect = function(a, b, c, g) {
        var e = this.currentPath_;
        this.beginPath();
        this.moveTo(a, b);
        this.lineTo(a + c, b);
        this.lineTo(a +
            c, b + g);
        this.lineTo(a, b + g);
        this.closePath();
        this.fill();
        this.currentPath_ = e
    };
    d.createLinearGradient = function(a, b, c, g) {
        var e = new w("gradient");
        e.x0_ = a;
        e.y0_ = b;
        e.x1_ = c;
        e.y1_ = g;
        return e
    };
    d.createRadialGradient = function(a, b, c, g, e, f) {
        var d = new w("gradientradial");
        d.x0_ = a;
        d.y0_ = b;
        d.r0_ = c;
        d.x1_ = g;
        d.y1_ = e;
        d.r1_ = f;
        return d
    };
    d.drawImage = function(a, b) {
        var c, g, e, d, r, y, n, h;
        e = a.runtimeStyle.width;
        d = a.runtimeStyle.height;
        a.runtimeStyle.width = "auto";
        a.runtimeStyle.height = "auto";
        var l = a.width,
            u = a.height;
        a.runtimeStyle.width =
            e;
        a.runtimeStyle.height = d;
        if (3 == arguments.length) c = arguments[1], g = arguments[2], r = y = 0, n = e = l, h = d = u;
        else if (5 == arguments.length) c = arguments[1], g = arguments[2], e = arguments[3], d = arguments[4], r = y = 0, n = l, h = u;
        else if (9 == arguments.length) r = arguments[1], y = arguments[2], n = arguments[3], h = arguments[4], c = arguments[5], g = arguments[6], e = arguments[7], d = arguments[8];
        else throw Error("Invalid number of arguments");
        var m = s(this, c, g),
            p = [];
        p.push(" <g_vml_:group", ' coordsize="', 10 * q, ",", 10 * q, '"', ' coordorigin="0,0"', ' style="width:',
            10, "px;height:", 10, "px;position:absolute;");
        if (1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
            var t = [];
            t.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), "");
            var v = s(this, c + e, g),
                w = s(this, c, g + d);
            c = s(this, c + e, g + d);
            m.x = x.max(m.x, v.x, w.x, c.x);
            m.y = x.max(m.y, v.y, w.y, c.y);
            p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t.join(""), ", sizingmethod='clip');")
        } else p.push("top:",
            k(m.y / q), "px;left:", k(m.x / q), "px;");
        p.push(' ">', '<g_vml_:image src="', a.src, '"', ' style="width:', q * e, "px;", " height:", q * d, 'px"', ' cropleft="', r / l, '"', ' croptop="', y / u, '"', ' cropright="', (l - r - n) / l, '"', ' cropbottom="', (u - y - h) / u, '"', " />", "</g_vml_:group>");
        this.element_.insertAdjacentHTML("BeforeEnd", p.join(""))
    };
    d.stroke = function(a) {
        var b = [];
        b.push("<g_vml_:shape", ' filled="', !!a, '"', ' style="position:absolute;width:', 10, "px;height:", 10, 'px;"', ' coordorigin="0,0"', ' coordsize="', 10 * q, ",", 10 * q, '"',
            ' stroked="', !a, '"', ' path="');
        for (var c = { x: null, y: null }, d = { x: null, y: null }, e = 0; e < this.currentPath_.length; e++) {
            var f = this.currentPath_[e];
            switch (f.type) {
                case "moveTo":
                    b.push(" m ", k(f.x), ",", k(f.y));
                    break;
                case "lineTo":
                    b.push(" l ", k(f.x), ",", k(f.y));
                    break;
                case "close":
                    b.push(" x ");
                    f = null;
                    break;
                case "bezierCurveTo":
                    b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
                    break;
                case "at":
                case "wa":
                    b.push(" ", f.type, " ", k(f.x - this.arcScaleX_ * f.radius), ",", k(f.y - this.arcScaleY_ *
                        f.radius), " ", k(f.x + this.arcScaleX_ * f.radius), ",", k(f.y + this.arcScaleY_ * f.radius), " ", k(f.xStart), ",", k(f.yStart), " ", k(f.xEnd), ",", k(f.yEnd))
            }
            if (f) { if (null == c.x || f.x < c.x) c.x = f.x; if (null == d.x || f.x > d.x) d.x = f.x; if (null == c.y || f.y < c.y) c.y = f.y; if (null == d.y || f.y > d.y) d.y = f.y }
        }
        b.push(' ">');
        a ? T(this, b, c, d) : S(this, b);
        b.push("</g_vml_:shape>");
        this.element_.insertAdjacentHTML("beforeEnd", b.join(""))
    };
    d.fill = function() { this.stroke(!0) };
    d.closePath = function() { this.currentPath_.push({ type: "close" }) };
    d.save = function() {
        var a = {};
        P(this, a);
        this.aStack_.push(a);
        this.mStack_.push(this.m_);
        this.m_ = t(D(), this.m_)
    };
    d.restore = function() { this.aStack_.length && (P(this.aStack_.pop(), this), this.m_ = this.mStack_.pop()) };
    d.translate = function(a, b) {
        z(this, t([
            [1, 0, 0],
            [0, 1, 0],
            [a, b, 1]
        ], this.m_), !1)
    };
    d.rotate = function(a) {
        var b = K(a);
        a = J(a);
        z(this, t([
            [b, a, 0],
            [-a, b, 0],
            [0, 0, 1]
        ], this.m_), !1)
    };
    d.scale = function(a, b) {
        this.arcScaleX_ *= a;
        this.arcScaleY_ *= b;
        z(this, t([
            [a, 0, 0],
            [0, b, 0],
            [0, 0, 1]
        ], this.m_), !0)
    };
    d.transform = function(a, b, c, d, e, f) {
        z(this, t([
            [a,
                b, 0
            ],
            [c, d, 0],
            [e, f, 1]
        ], this.m_), !0)
    };
    d.setTransform = function(a, b, c, d, e, f) {
        z(this, [
            [a, b, 0],
            [c, d, 0],
            [e, f, 1]
        ], !0)
    };
    d.drawText_ = function(a, b, c, d, e) {
        var f = this.m_;
        d = 0;
        var r = 1E3,
            t = 0,
            n = [],
            h;
        h = this.font;
        if (L[h]) h = L[h];
        else {
            var l = document.createElement("div").style;
            try { l.font = h } catch (u) {}
            h = L[h] = { style: l.fontStyle || "normal", variant: l.fontVariant || "normal", weight: l.fontWeight || "normal", size: l.fontSize || 10, family: l.fontFamily || "sans-serif" }
        }
        var l = h,
            m = this.element_;
        h = {};
        for (var p in l) h[p] = l[p];
        p = parseFloat(m.currentStyle.fontSize);
        m = parseFloat(l.size);
        "number" == typeof l.size ? h.size = l.size : -1 != l.size.indexOf("px") ? h.size = m : -1 != l.size.indexOf("em") ? h.size = p * m : -1 != l.size.indexOf("%") ? h.size = p / 100 * m : -1 != l.size.indexOf("pt") ? h.size = m / 0.75 : h.size = p;
        h.size *= 0.981;
        p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
        m = this.element_.currentStyle;
        l = this.textAlign.toLowerCase();
        switch (l) {
            case "left":
            case "center":
            case "right":
                break;
            case "end":
                l = "ltr" == m.direction ? "right" : "left";
                break;
            case "start":
                l = "rtl" == m.direction ? "right" :
                    "left";
                break;
            default:
                l = "left"
        }
        switch (this.textBaseline) {
            case "hanging":
            case "top":
                t = h.size / 1.75;
                break;
            case "middle":
                break;
            default:
            case null:
            case "alphabetic":
            case "ideographic":
            case "bottom":
                t = -h.size / 2.25
        }
        switch (l) {
            case "right":
                d = 1E3;
                r = 0.05;
                break;
            case "center":
                d = r = 500
        }
        b = s(this, b + 0, c + t);
        n.push('<g_vml_:line from="', -d, ' 0" to="', r, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">');
        e ? S(this, n) : T(this, n, { x: -d, y: 0 }, { x: r, y: h.size });
        e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0";
        b = k(b.x / q) + "," + k(b.y / q);
        n.push('<g_vml_:skew on="t" matrix="', e, '" ', ' offset="', b, '" origin="', d, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', N(a), '" style="v-text-align:', l, ";font:", N(p), '" /></g_vml_:line>');
        this.element_.insertAdjacentHTML("beforeEnd", n.join(""))
    };
    d.fillText = function(a, b, c, d) { this.drawText_(a, b, c, d, !1) };
    d.strokeText = function(a,
        b, c, d) { this.drawText_(a, b, c, d, !0) };
    d.measureText = function(a) {
        this.textMeasureEl_ || (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'), this.textMeasureEl_ = this.element_.lastChild);
        var b = this.element_.ownerDocument;
        this.textMeasureEl_.innerHTML = "";
        this.textMeasureEl_.style.font = this.font;
        this.textMeasureEl_.appendChild(b.createTextNode(a));
        return { width: this.textMeasureEl_.offsetWidth }
    };
    d.clip = function() {};
    d.arcTo = function() {};
    d.createPattern = function(a, b) { return new I(a, b) };
    w.prototype.addColorStop = function(a, b) {
        b = G(b);
        this.colors_.push({ offset: a, color: b.color, alpha: b.alpha })
    };
    d = A.prototype = Error();
    d.INDEX_SIZE_ERR = 1;
    d.DOMSTRING_SIZE_ERR = 2;
    d.HIERARCHY_REQUEST_ERR = 3;
    d.WRONG_DOCUMENT_ERR = 4;
    d.INVALID_CHARACTER_ERR = 5;
    d.NO_DATA_ALLOWED_ERR = 6;
    d.NO_MODIFICATION_ALLOWED_ERR = 7;
    d.NOT_FOUND_ERR = 8;
    d.NOT_SUPPORTED_ERR = 9;
    d.INUSE_ATTRIBUTE_ERR = 10;
    d.INVALID_STATE_ERR = 11;
    d.SYNTAX_ERR = 12;
    d.INVALID_MODIFICATION_ERR =
        13;
    d.NAMESPACE_ERR = 14;
    d.INVALID_ACCESS_ERR = 15;
    d.VALIDATION_ERR = 16;
    d.TYPE_MISMATCH_ERR = 17;
    G_vmlCanvasManager = U;
    CanvasRenderingContext2D = C;
    CanvasGradient = w;
    CanvasPattern = I;
    DOMException = A
}();
/*eslint-enable*/
/*jshint ignore:end*/