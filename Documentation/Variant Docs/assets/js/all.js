/*!
 * jQuery JavaScript Library v2.1.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-01-23T21:10Z
 */
/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 1.0.0
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */
function FastClick(a) {
  "use strict";
  function b(a, b) {
    return function () {
      return a.apply(b, arguments);
    };
  }
  var c;
  (this.trackingClick = !1),
    (this.trackingClickStart = 0),
    (this.targetElement = null),
    (this.touchStartX = 0),
    (this.touchStartY = 0),
    (this.lastTouchIdentifier = 0),
    (this.touchBoundary = 10),
    (this.layer = a),
    FastClick.notNeeded(a) ||
      (deviceIsAndroid &&
        (a.addEventListener("mouseover", b(this.onMouse, this), !0),
        a.addEventListener("mousedown", b(this.onMouse, this), !0),
        a.addEventListener("mouseup", b(this.onMouse, this), !0)),
      a.addEventListener("click", b(this.onClick, this), !0),
      a.addEventListener("touchstart", b(this.onTouchStart, this), !1),
      a.addEventListener("touchmove", b(this.onTouchMove, this), !1),
      a.addEventListener("touchend", b(this.onTouchEnd, this), !1),
      a.addEventListener("touchcancel", b(this.onTouchCancel, this), !1),
      Event.prototype.stopImmediatePropagation ||
        ((a.removeEventListener = function (b, c, d) {
          var e = Node.prototype.removeEventListener;
          "click" === b ? e.call(a, b, c.hijacked || c, d) : e.call(a, b, c, d);
        }),
        (a.addEventListener = function (b, c, d) {
          var e = Node.prototype.addEventListener;
          "click" === b
            ? e.call(
                a,
                b,
                c.hijacked ||
                  (c.hijacked = function (a) {
                    a.propagationStopped || c(a);
                  }),
                d
              )
            : e.call(a, b, c, d);
        })),
      "function" == typeof a.onclick &&
        ((c = a.onclick),
        a.addEventListener(
          "click",
          function (a) {
            c(a);
          },
          !1
        ),
        (a.onclick = null)));
}
function initializeMaps() {
  {
    var a = {
        zoom: 11,
        center: new google.maps.LatLng(40.67, -73.94),
        styles: [
          {
            featureType: "water",
            stylers: [{ visibility: "on" }, { color: "#acbcc9" }],
          },
          { featureType: "landscape", stylers: [{ color: "#f2e5d4" }] },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#c5c6c6" }],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#e4d7c6" }],
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{ color: "#fbfaf7" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#c5dac6" }],
          },
          {
            featureType: "administrative",
            stylers: [{ visibility: "on" }, { lightness: 33 }],
          },
          { featureType: "road" },
          {
            featureType: "poi.park",
            elementType: "labels",
            stylers: [{ visibility: "on" }, { lightness: 20 }],
          },
          {},
          { featureType: "road", stylers: [{ lightness: 20 }] },
        ],
      },
      b = document.getElementById("map");
    new google.maps.Map(b, a);
  }
}
!(function (a, b) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = a.document
        ? b(a, !0)
        : function (a) {
            if (!a.document)
              throw new Error("jQuery requires a window with a document");
            return b(a);
          })
    : b(a);
})("undefined" != typeof window ? window : this, function (a, b) {
  function c(a) {
    var b = a.length,
      c = ab.type(a);
    return "function" === c || ab.isWindow(a)
      ? !1
      : 1 === a.nodeType && b
      ? !0
      : "array" === c ||
        0 === b ||
        ("number" == typeof b && b > 0 && b - 1 in a);
  }
  function d(a, b, c) {
    if (ab.isFunction(b))
      return ab.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c;
      });
    if (b.nodeType)
      return ab.grep(a, function (a) {
        return (a === b) !== c;
      });
    if ("string" == typeof b) {
      if (hb.test(b)) return ab.filter(b, a, c);
      b = ab.filter(b, a);
    }
    return ab.grep(a, function (a) {
      return U.call(b, a) >= 0 !== c;
    });
  }
  function e(a, b) {
    for (; (a = a[b]) && 1 !== a.nodeType; );
    return a;
  }
  function f(a) {
    var b = (ob[a] = {});
    return (
      ab.each(a.match(nb) || [], function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  function g() {
    $.removeEventListener("DOMContentLoaded", g, !1),
      a.removeEventListener("load", g, !1),
      ab.ready();
  }
  function h() {
    Object.defineProperty((this.cache = {}), 0, {
      get: function () {
        return {};
      },
    }),
      (this.expando = ab.expando + Math.random());
  }
  function i(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType)
      if (
        ((d = "data-" + b.replace(ub, "-$1").toLowerCase()),
        (c = a.getAttribute(d)),
        "string" == typeof c)
      ) {
        try {
          c =
            "true" === c
              ? !0
              : "false" === c
              ? !1
              : "null" === c
              ? null
              : +c + "" === c
              ? +c
              : tb.test(c)
              ? ab.parseJSON(c)
              : c;
        } catch (e) {}
        sb.set(a, b, c);
      } else c = void 0;
    return c;
  }
  function j() {
    return !0;
  }
  function k() {
    return !1;
  }
  function l() {
    try {
      return $.activeElement;
    } catch (a) {}
  }
  function m(a, b) {
    return ab.nodeName(a, "table") &&
      ab.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr")
      ? a.getElementsByTagName("tbody")[0] ||
          a.appendChild(a.ownerDocument.createElement("tbody"))
      : a;
  }
  function n(a) {
    return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
  }
  function o(a) {
    var b = Kb.exec(a.type);
    return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
  }
  function p(a, b) {
    for (var c = 0, d = a.length; d > c; c++)
      rb.set(a[c], "globalEval", !b || rb.get(b[c], "globalEval"));
  }
  function q(a, b) {
    var c, d, e, f, g, h, i, j;
    if (1 === b.nodeType) {
      if (
        rb.hasData(a) &&
        ((f = rb.access(a)), (g = rb.set(b, f)), (j = f.events))
      ) {
        delete g.handle, (g.events = {});
        for (e in j)
          for (c = 0, d = j[e].length; d > c; c++) ab.event.add(b, e, j[e][c]);
      }
      sb.hasData(a) &&
        ((h = sb.access(a)), (i = ab.extend({}, h)), sb.set(b, i));
    }
  }
  function r(a, b) {
    var c = a.getElementsByTagName
      ? a.getElementsByTagName(b || "*")
      : a.querySelectorAll
      ? a.querySelectorAll(b || "*")
      : [];
    return void 0 === b || (b && ab.nodeName(a, b)) ? ab.merge([a], c) : c;
  }
  function s(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && yb.test(a.type)
      ? (b.checked = a.checked)
      : ("input" === c || "textarea" === c) &&
        (b.defaultValue = a.defaultValue);
  }
  function t(b, c) {
    var d = ab(c.createElement(b)).appendTo(c.body),
      e = a.getDefaultComputedStyle
        ? a.getDefaultComputedStyle(d[0]).display
        : ab.css(d[0], "display");
    return d.detach(), e;
  }
  function u(a) {
    var b = $,
      c = Ob[a];
    return (
      c ||
        ((c = t(a, b)),
        ("none" !== c && c) ||
          ((Nb = (
            Nb || ab("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(b.documentElement)),
          (b = Nb[0].contentDocument),
          b.write(),
          b.close(),
          (c = t(a, b)),
          Nb.detach()),
        (Ob[a] = c)),
      c
    );
  }
  function v(a, b, c) {
    var d,
      e,
      f,
      g,
      h = a.style;
    return (
      (c = c || Rb(a)),
      c && (g = c.getPropertyValue(b) || c[b]),
      c &&
        ("" !== g || ab.contains(a.ownerDocument, a) || (g = ab.style(a, b)),
        Qb.test(g) &&
          Pb.test(b) &&
          ((d = h.width),
          (e = h.minWidth),
          (f = h.maxWidth),
          (h.minWidth = h.maxWidth = h.width = g),
          (g = c.width),
          (h.width = d),
          (h.minWidth = e),
          (h.maxWidth = f))),
      void 0 !== g ? g + "" : g
    );
  }
  function w(a, b) {
    return {
      get: function () {
        return a()
          ? void delete this.get
          : (this.get = b).apply(this, arguments);
      },
    };
  }
  function x(a, b) {
    if (b in a) return b;
    for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xb.length; e--; )
      if (((b = Xb[e] + c), b in a)) return b;
    return d;
  }
  function y(a, b, c) {
    var d = Tb.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function z(a, b, c, d, e) {
    for (
      var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
        g = 0;
      4 > f;
      f += 2
    )
      "margin" === c && (g += ab.css(a, c + wb[f], !0, e)),
        d
          ? ("content" === c && (g -= ab.css(a, "padding" + wb[f], !0, e)),
            "margin" !== c &&
              (g -= ab.css(a, "border" + wb[f] + "Width", !0, e)))
          : ((g += ab.css(a, "padding" + wb[f], !0, e)),
            "padding" !== c &&
              (g += ab.css(a, "border" + wb[f] + "Width", !0, e)));
    return g;
  }
  function A(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = Rb(a),
      g = "border-box" === ab.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (
        ((e = v(a, b, f)), (0 > e || null == e) && (e = a.style[b]), Qb.test(e))
      )
        return e;
      (d = g && (Z.boxSizingReliable() || e === a.style[b])),
        (e = parseFloat(e) || 0);
    }
    return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }
  function B(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
      (d = a[g]),
        d.style &&
          ((f[g] = rb.get(d, "olddisplay")),
          (c = d.style.display),
          b
            ? (f[g] || "none" !== c || (d.style.display = ""),
              "" === d.style.display &&
                xb(d) &&
                (f[g] = rb.access(d, "olddisplay", u(d.nodeName))))
            : f[g] ||
              ((e = xb(d)),
              ((c && "none" !== c) || !e) &&
                rb.set(d, "olddisplay", e ? c : ab.css(d, "display"))));
    for (g = 0; h > g; g++)
      (d = a[g]),
        d.style &&
          ((b && "none" !== d.style.display && "" !== d.style.display) ||
            (d.style.display = b ? f[g] || "" : "none"));
    return a;
  }
  function C(a, b, c, d, e) {
    return new C.prototype.init(a, b, c, d, e);
  }
  function D() {
    return (
      setTimeout(function () {
        Yb = void 0;
      }),
      (Yb = ab.now())
    );
  }
  function E(a, b) {
    var c,
      d = 0,
      e = { height: a };
    for (b = b ? 1 : 0; 4 > d; d += 2 - b)
      (c = wb[d]), (e["margin" + c] = e["padding" + c] = a);
    return b && (e.opacity = e.width = a), e;
  }
  function F(a, b, c) {
    for (
      var d, e = (cc[b] || []).concat(cc["*"]), f = 0, g = e.length;
      g > f;
      f++
    )
      if ((d = e[f].call(c, b, a))) return d;
  }
  function G(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k = this,
      l = {},
      m = a.style,
      n = a.nodeType && xb(a),
      o = rb.get(a, "fxshow");
    c.queue ||
      ((h = ab._queueHooks(a, "fx")),
      null == h.unqueued &&
        ((h.unqueued = 0),
        (i = h.empty.fire),
        (h.empty.fire = function () {
          h.unqueued || i();
        })),
      h.unqueued++,
      k.always(function () {
        k.always(function () {
          h.unqueued--, ab.queue(a, "fx").length || h.empty.fire();
        });
      })),
      1 === a.nodeType &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [m.overflow, m.overflowX, m.overflowY]),
        (j = ab.css(a, "display")),
        "none" === j && (j = u(a.nodeName)),
        "inline" === j &&
          "none" === ab.css(a, "float") &&
          (m.display = "inline-block")),
      c.overflow &&
        ((m.overflow = "hidden"),
        k.always(function () {
          (m.overflow = c.overflow[0]),
            (m.overflowX = c.overflow[1]),
            (m.overflowY = c.overflow[2]);
        }));
    for (d in b)
      if (((e = b[d]), $b.exec(e))) {
        if (
          (delete b[d], (f = f || "toggle" === e), e === (n ? "hide" : "show"))
        ) {
          if ("show" !== e || !o || void 0 === o[d]) continue;
          n = !0;
        }
        l[d] = (o && o[d]) || ab.style(a, d);
      }
    if (!ab.isEmptyObject(l)) {
      o ? "hidden" in o && (n = o.hidden) : (o = rb.access(a, "fxshow", {})),
        f && (o.hidden = !n),
        n
          ? ab(a).show()
          : k.done(function () {
              ab(a).hide();
            }),
        k.done(function () {
          var b;
          rb.remove(a, "fxshow");
          for (b in l) ab.style(a, b, l[b]);
        });
      for (d in l)
        (g = F(n ? o[d] : 0, d, k)),
          d in o ||
            ((o[d] = g.start),
            n &&
              ((g.end = g.start),
              (g.start = "width" === d || "height" === d ? 1 : 0)));
    }
  }
  function H(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (
        ((d = ab.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        ab.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = ab.cssHooks[d]),
        g && "expand" in g)
      ) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
  }
  function I(a, b, c) {
    var d,
      e,
      f = 0,
      g = bc.length,
      h = ab.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        if (e) return !1;
        for (
          var b = Yb || D(),
            c = Math.max(0, j.startTime + j.duration - b),
            d = c / j.duration || 0,
            f = 1 - d,
            g = 0,
            i = j.tweens.length;
          i > g;
          g++
        )
          j.tweens[g].run(f);
        return (
          h.notifyWith(a, [j, f, c]),
          1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: ab.extend({}, b),
        opts: ab.extend(!0, { specialEasing: {} }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: Yb || D(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c) {
          var d = ab.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(d), d;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
        },
      }),
      k = j.props;
    for (H(k, j.opts.specialEasing); g > f; f++)
      if ((d = bc[f].call(j, a, k, j.opts))) return d;
    return (
      ab.map(k, F, j),
      ab.isFunction(j.opts.start) && j.opts.start.call(a, j),
      ab.fx.timer(ab.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  function J(a) {
    return function (b, c) {
      "string" != typeof b && ((c = b), (b = "*"));
      var d,
        e = 0,
        f = b.toLowerCase().match(nb) || [];
      if (ab.isFunction(c))
        for (; (d = f[e++]); )
          "+" === d[0]
            ? ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c))
            : (a[d] = a[d] || []).push(c);
    };
  }
  function K(a, b, c, d) {
    function e(h) {
      var i;
      return (
        (f[h] = !0),
        ab.each(a[h] || [], function (a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || g || f[j]
            ? g
              ? !(i = j)
              : void 0
            : (b.dataTypes.unshift(j), e(j), !1);
        }),
        i
      );
    }
    var f = {},
      g = a === vc;
    return e(b.dataTypes[0]) || (!f["*"] && e("*"));
  }
  function L(a, b) {
    var c,
      d,
      e = ab.ajaxSettings.flatOptions || {};
    for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    return d && ab.extend(!0, a, d), a;
  }
  function M(a, b, c) {
    for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; )
      i.shift(),
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    if (d)
      for (e in h)
        if (h[e] && h[e].test(d)) {
          i.unshift(e);
          break;
        }
    if (i[0] in c) f = i[0];
    else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break;
        }
        g || (g = e);
      }
      f = f || g;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }
  function N(a, b, c, d) {
    var e,
      f,
      g,
      h,
      i,
      j = {},
      k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    for (f = k.shift(); f; )
      if (
        (a.responseFields[f] && (c[a.responseFields[f]] = b),
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
        (i = f),
        (f = k.shift()))
      )
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
          if (((g = j[i + " " + f] || j["* " + f]), !g))
            for (e in j)
              if (
                ((h = e.split(" ")),
                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
              ) {
                g === !0
                  ? (g = j[e])
                  : j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                break;
              }
          if (g !== !0)
            if (g && a["throws"]) b = g(b);
            else
              try {
                b = g(b);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: g ? l : "No conversion from " + i + " to " + f,
                };
              }
        }
    return { state: "success", data: b };
  }
  function O(a, b, c, d) {
    var e;
    if (ab.isArray(b))
      ab.each(b, function (b, e) {
        c || zc.test(a)
          ? d(a, e)
          : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
      });
    else if (c || "object" !== ab.type(b)) d(a, b);
    else for (e in b) O(a + "[" + e + "]", b[e], c, d);
  }
  function P(a) {
    return ab.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }
  var Q = [],
    R = Q.slice,
    S = Q.concat,
    T = Q.push,
    U = Q.indexOf,
    V = {},
    W = V.toString,
    X = V.hasOwnProperty,
    Y = "".trim,
    Z = {},
    $ = a.document,
    _ = "2.1.0",
    ab = function (a, b) {
      return new ab.fn.init(a, b);
    },
    bb = /^-ms-/,
    cb = /-([\da-z])/gi,
    db = function (a, b) {
      return b.toUpperCase();
    };
  (ab.fn = ab.prototype =
    {
      jquery: _,
      constructor: ab,
      selector: "",
      length: 0,
      toArray: function () {
        return R.call(this);
      },
      get: function (a) {
        return null != a
          ? 0 > a
            ? this[a + this.length]
            : this[a]
          : R.call(this);
      },
      pushStack: function (a) {
        var b = ab.merge(this.constructor(), a);
        return (b.prevObject = this), (b.context = this.context), b;
      },
      each: function (a, b) {
        return ab.each(this, a, b);
      },
      map: function (a) {
        return this.pushStack(
          ab.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      slice: function () {
        return this.pushStack(R.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (a) {
        var b = this.length,
          c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: T,
      sort: Q.sort,
      splice: Q.splice,
    }),
    (ab.extend = ab.fn.extend =
      function () {
        var a,
          b,
          c,
          d,
          e,
          f,
          g = arguments[0] || {},
          h = 1,
          i = arguments.length,
          j = !1;
        for (
          "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
            "object" == typeof g || ab.isFunction(g) || (g = {}),
            h === i && ((g = this), h--);
          i > h;
          h++
        )
          if (null != (a = arguments[h]))
            for (b in a)
              (c = g[b]),
                (d = a[b]),
                g !== d &&
                  (j && d && (ab.isPlainObject(d) || (e = ab.isArray(d)))
                    ? (e
                        ? ((e = !1), (f = c && ab.isArray(c) ? c : []))
                        : (f = c && ab.isPlainObject(c) ? c : {}),
                      (g[b] = ab.extend(j, f, d)))
                    : void 0 !== d && (g[b] = d));
        return g;
      }),
    ab.extend({
      expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (a) {
        throw new Error(a);
      },
      noop: function () {},
      isFunction: function (a) {
        return "function" === ab.type(a);
      },
      isArray: Array.isArray,
      isWindow: function (a) {
        return null != a && a === a.window;
      },
      isNumeric: function (a) {
        return a - parseFloat(a) >= 0;
      },
      isPlainObject: function (a) {
        if ("object" !== ab.type(a) || a.nodeType || ab.isWindow(a)) return !1;
        try {
          if (
            a.constructor &&
            !X.call(a.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (b) {
          return !1;
        }
        return !0;
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      type: function (a) {
        return null == a
          ? a + ""
          : "object" == typeof a || "function" == typeof a
          ? V[W.call(a)] || "object"
          : typeof a;
      },
      globalEval: function (a) {
        var b,
          c = eval;
        (a = ab.trim(a)),
          a &&
            (1 === a.indexOf("use strict")
              ? ((b = $.createElement("script")),
                (b.text = a),
                $.head.appendChild(b).parentNode.removeChild(b))
              : c(a));
      },
      camelCase: function (a) {
        return a.replace(bb, "ms-").replace(cb, db);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, b, d) {
        var e,
          f = 0,
          g = a.length,
          h = c(a);
        if (d) {
          if (h) for (; g > f && ((e = b.apply(a[f], d)), e !== !1); f++);
          else for (f in a) if (((e = b.apply(a[f], d)), e === !1)) break;
        } else if (h)
          for (; g > f && ((e = b.call(a[f], f, a[f])), e !== !1); f++);
        else for (f in a) if (((e = b.call(a[f], f, a[f])), e === !1)) break;
        return a;
      },
      trim: function (a) {
        return null == a ? "" : Y.call(a);
      },
      makeArray: function (a, b) {
        var d = b || [];
        return (
          null != a &&
            (c(Object(a))
              ? ab.merge(d, "string" == typeof a ? [a] : a)
              : T.call(d, a)),
          d
        );
      },
      inArray: function (a, b, c) {
        return null == b ? -1 : U.call(b, a, c);
      },
      merge: function (a, b) {
        for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
          (d = !b(a[f], f)), d !== h && e.push(a[f]);
        return e;
      },
      map: function (a, b, d) {
        var e,
          f = 0,
          g = a.length,
          h = c(a),
          i = [];
        if (h) for (; g > f; f++) (e = b(a[f], f, d)), null != e && i.push(e);
        else for (f in a) (e = b(a[f], f, d)), null != e && i.push(e);
        return S.apply([], i);
      },
      guid: 1,
      proxy: function (a, b) {
        var c, d, e;
        return (
          "string" == typeof b && ((c = a[b]), (b = a), (a = c)),
          ab.isFunction(a)
            ? ((d = R.call(arguments, 2)),
              (e = function () {
                return a.apply(b || this, d.concat(R.call(arguments)));
              }),
              (e.guid = a.guid = a.guid || ab.guid++),
              e)
            : void 0
        );
      },
      now: Date.now,
      support: Z,
    }),
    ab.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (a, b) {
        V["[object " + b + "]"] = b.toLowerCase();
      }
    );
  var eb =
    /*!
     * Sizzle CSS Selector Engine v1.10.16
     * http://sizzlejs.com/
     *
     * Copyright 2013 jQuery Foundation, Inc. and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2014-01-13
     */

    (function (a) {
      function b(a, b, c, d) {
        var e, f, g, h, i, j, l, o, p, q;
        if (
          ((b ? b.ownerDocument || b : O) !== G && F(b),
          (b = b || G),
          (c = c || []),
          !a || "string" != typeof a)
        )
          return c;
        if (1 !== (h = b.nodeType) && 9 !== h) return [];
        if (I && !d) {
          if ((e = sb.exec(a)))
            if ((g = e[1])) {
              if (9 === h) {
                if (((f = b.getElementById(g)), !f || !f.parentNode)) return c;
                if (f.id === g) return c.push(f), c;
              } else if (
                b.ownerDocument &&
                (f = b.ownerDocument.getElementById(g)) &&
                M(b, f) &&
                f.id === g
              )
                return c.push(f), c;
            } else {
              if (e[2]) return _.apply(c, b.getElementsByTagName(a)), c;
              if (
                (g = e[3]) &&
                x.getElementsByClassName &&
                b.getElementsByClassName
              )
                return _.apply(c, b.getElementsByClassName(g)), c;
            }
          if (x.qsa && (!J || !J.test(a))) {
            if (
              ((o = l = N),
              (p = b),
              (q = 9 === h && a),
              1 === h && "object" !== b.nodeName.toLowerCase())
            ) {
              for (
                j = m(a),
                  (l = b.getAttribute("id"))
                    ? (o = l.replace(ub, "\\$&"))
                    : b.setAttribute("id", o),
                  o = "[id='" + o + "'] ",
                  i = j.length;
                i--;

              )
                j[i] = o + n(j[i]);
              (p = (tb.test(a) && k(b.parentNode)) || b), (q = j.join(","));
            }
            if (q)
              try {
                return _.apply(c, p.querySelectorAll(q)), c;
              } catch (r) {
              } finally {
                l || b.removeAttribute("id");
              }
          }
        }
        return v(a.replace(ib, "$1"), b, c, d);
      }
      function c() {
        function a(c, d) {
          return (
            b.push(c + " ") > y.cacheLength && delete a[b.shift()],
            (a[c + " "] = d)
          );
        }
        var b = [];
        return a;
      }
      function d(a) {
        return (a[N] = !0), a;
      }
      function e(a) {
        var b = G.createElement("div");
        try {
          return !!a(b);
        } catch (c) {
          return !1;
        } finally {
          b.parentNode && b.parentNode.removeChild(b), (b = null);
        }
      }
      function f(a, b) {
        for (var c = a.split("|"), d = a.length; d--; ) y.attrHandle[c[d]] = b;
      }
      function g(a, b) {
        var c = b && a,
          d =
            c &&
            1 === a.nodeType &&
            1 === b.nodeType &&
            (~b.sourceIndex || W) - (~a.sourceIndex || W);
        if (d) return d;
        if (c) for (; (c = c.nextSibling); ) if (c === b) return -1;
        return a ? 1 : -1;
      }
      function h(a) {
        return function (b) {
          var c = b.nodeName.toLowerCase();
          return "input" === c && b.type === a;
        };
      }
      function i(a) {
        return function (b) {
          var c = b.nodeName.toLowerCase();
          return ("input" === c || "button" === c) && b.type === a;
        };
      }
      function j(a) {
        return d(function (b) {
          return (
            (b = +b),
            d(function (c, d) {
              for (var e, f = a([], c.length, b), g = f.length; g--; )
                c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
            })
          );
        });
      }
      function k(a) {
        return a && typeof a.getElementsByTagName !== V && a;
      }
      function l() {}
      function m(a, c) {
        var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = S[a + " "];
        if (k) return c ? 0 : k.slice(0);
        for (h = a, i = [], j = y.preFilter; h; ) {
          (!d || (e = jb.exec(h))) &&
            (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
            (d = !1),
            (e = kb.exec(h)) &&
              ((d = e.shift()),
              f.push({ value: d, type: e[0].replace(ib, " ") }),
              (h = h.slice(d.length)));
          for (g in y.filter)
            !(e = ob[g].exec(h)) ||
              (j[g] && !(e = j[g](e))) ||
              ((d = e.shift()),
              f.push({ value: d, type: g, matches: e }),
              (h = h.slice(d.length)));
          if (!d) break;
        }
        return c ? h.length : h ? b.error(a) : S(a, i).slice(0);
      }
      function n(a) {
        for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
        return d;
      }
      function o(a, b, c) {
        var d = b.dir,
          e = c && "parentNode" === d,
          f = Q++;
        return b.first
          ? function (b, c, f) {
              for (; (b = b[d]); ) if (1 === b.nodeType || e) return a(b, c, f);
            }
          : function (b, c, g) {
              var h,
                i,
                j = [P, f];
              if (g) {
                for (; (b = b[d]); )
                  if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
              } else
                for (; (b = b[d]); )
                  if (1 === b.nodeType || e) {
                    if (
                      ((i = b[N] || (b[N] = {})),
                      (h = i[d]) && h[0] === P && h[1] === f)
                    )
                      return (j[2] = h[2]);
                    if (((i[d] = j), (j[2] = a(b, c, g)))) return !0;
                  }
            };
      }
      function p(a) {
        return a.length > 1
          ? function (b, c, d) {
              for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
              return !0;
            }
          : a[0];
      }
      function q(a, b, c, d, e) {
        for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
          (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
        return g;
      }
      function r(a, b, c, e, f, g) {
        return (
          e && !e[N] && (e = r(e)),
          f && !f[N] && (f = r(f, g)),
          d(function (d, g, h, i) {
            var j,
              k,
              l,
              m = [],
              n = [],
              o = g.length,
              p = d || u(b || "*", h.nodeType ? [h] : h, []),
              r = !a || (!d && b) ? p : q(p, m, a, h, i),
              s = c ? (f || (d ? a : o || e) ? [] : g) : r;
            if ((c && c(r, s, h, i), e))
              for (j = q(s, n), e(j, [], h, i), k = j.length; k--; )
                (l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
            if (d) {
              if (f || a) {
                if (f) {
                  for (j = [], k = s.length; k--; )
                    (l = s[k]) && j.push((r[k] = l));
                  f(null, (s = []), j, i);
                }
                for (k = s.length; k--; )
                  (l = s[k]) &&
                    (j = f ? bb.call(d, l) : m[k]) > -1 &&
                    (d[j] = !(g[j] = l));
              }
            } else (s = q(s === g ? s.splice(o, s.length) : s)), f ? f(null, g, s, i) : _.apply(g, s);
          })
        );
      }
      function s(a) {
        for (
          var b,
            c,
            d,
            e = a.length,
            f = y.relative[a[0].type],
            g = f || y.relative[" "],
            h = f ? 1 : 0,
            i = o(
              function (a) {
                return a === b;
              },
              g,
              !0
            ),
            j = o(
              function (a) {
                return bb.call(b, a) > -1;
              },
              g,
              !0
            ),
            k = [
              function (a, c, d) {
                return (
                  (!f && (d || c !== C)) ||
                  ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
                );
              },
            ];
          e > h;
          h++
        )
          if ((c = y.relative[a[h].type])) k = [o(p(k), c)];
          else {
            if (((c = y.filter[a[h].type].apply(null, a[h].matches)), c[N])) {
              for (d = ++h; e > d && !y.relative[a[d].type]; d++);
              return r(
                h > 1 && p(k),
                h > 1 &&
                  n(
                    a
                      .slice(0, h - 1)
                      .concat({ value: " " === a[h - 2].type ? "*" : "" })
                  ).replace(ib, "$1"),
                c,
                d > h && s(a.slice(h, d)),
                e > d && s((a = a.slice(d))),
                e > d && n(a)
              );
            }
            k.push(c);
          }
        return p(k);
      }
      function t(a, c) {
        var e = c.length > 0,
          f = a.length > 0,
          g = function (d, g, h, i, j) {
            var k,
              l,
              m,
              n = 0,
              o = "0",
              p = d && [],
              r = [],
              s = C,
              t = d || (f && y.find.TAG("*", j)),
              u = (P += null == s ? 1 : Math.random() || 0.1),
              v = t.length;
            for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
              if (f && k) {
                for (l = 0; (m = a[l++]); )
                  if (m(k, g, h)) {
                    i.push(k);
                    break;
                  }
                j && (P = u);
              }
              e && ((k = !m && k) && n--, d && p.push(k));
            }
            if (((n += o), e && o !== n)) {
              for (l = 0; (m = c[l++]); ) m(p, r, g, h);
              if (d) {
                if (n > 0) for (; o--; ) p[o] || r[o] || (r[o] = Z.call(i));
                r = q(r);
              }
              _.apply(i, r),
                j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i);
            }
            return j && ((P = u), (C = s)), p;
          };
        return e ? d(g) : g;
      }
      function u(a, c, d) {
        for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
        return d;
      }
      function v(a, b, c, d) {
        var e,
          f,
          g,
          h,
          i,
          j = m(a);
        if (!d && 1 === j.length) {
          if (
            ((f = j[0] = j[0].slice(0)),
            f.length > 2 &&
              "ID" === (g = f[0]).type &&
              x.getById &&
              9 === b.nodeType &&
              I &&
              y.relative[f[1].type])
          ) {
            if (
              ((b = (y.find.ID(g.matches[0].replace(vb, wb), b) || [])[0]), !b)
            )
              return c;
            a = a.slice(f.shift().value.length);
          }
          for (
            e = ob.needsContext.test(a) ? 0 : f.length;
            e-- && ((g = f[e]), !y.relative[(h = g.type)]);

          )
            if (
              (i = y.find[h]) &&
              (d = i(
                g.matches[0].replace(vb, wb),
                (tb.test(f[0].type) && k(b.parentNode)) || b
              ))
            ) {
              if ((f.splice(e, 1), (a = d.length && n(f)), !a))
                return _.apply(c, d), c;
              break;
            }
        }
        return B(a, j)(d, b, !I, c, (tb.test(a) && k(b.parentNode)) || b), c;
      }
      var w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        K,
        L,
        M,
        N = "sizzle" + -new Date(),
        O = a.document,
        P = 0,
        Q = 0,
        R = c(),
        S = c(),
        T = c(),
        U = function (a, b) {
          return a === b && (E = !0), 0;
        },
        V = "undefined",
        W = 1 << 31,
        X = {}.hasOwnProperty,
        Y = [],
        Z = Y.pop,
        $ = Y.push,
        _ = Y.push,
        ab = Y.slice,
        bb =
          Y.indexOf ||
          function (a) {
            for (var b = 0, c = this.length; c > b; b++)
              if (this[b] === a) return b;
            return -1;
          },
        cb =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        db = "[\\x20\\t\\r\\n\\f]",
        eb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        fb = eb.replace("w", "w#"),
        gb =
          "\\[" +
          db +
          "*(" +
          eb +
          ")" +
          db +
          "*(?:([*^$|!~]?=)" +
          db +
          "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
          fb +
          ")|)|)" +
          db +
          "*\\]",
        hb =
          ":(" +
          eb +
          ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
          gb.replace(3, 8) +
          ")*)|.*)\\)|)",
        ib = new RegExp(
          "^" + db + "+|((?:^|[^\\\\])(?:\\\\.)*)" + db + "+$",
          "g"
        ),
        jb = new RegExp("^" + db + "*," + db + "*"),
        kb = new RegExp("^" + db + "*([>+~]|" + db + ")" + db + "*"),
        lb = new RegExp("=" + db + "*([^\\]'\"]*?)" + db + "*\\]", "g"),
        mb = new RegExp(hb),
        nb = new RegExp("^" + fb + "$"),
        ob = {
          ID: new RegExp("^#(" + eb + ")"),
          CLASS: new RegExp("^\\.(" + eb + ")"),
          TAG: new RegExp("^(" + eb.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + gb),
          PSEUDO: new RegExp("^" + hb),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              db +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              db +
              "*(?:([+-]|)" +
              db +
              "*(\\d+)|))" +
              db +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + cb + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              db +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              db +
              "*((?:-\\d)?\\d*)" +
              db +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        pb = /^(?:input|select|textarea|button)$/i,
        qb = /^h\d$/i,
        rb = /^[^{]+\{\s*\[native \w/,
        sb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        tb = /[+~]/,
        ub = /'|\\/g,
        vb = new RegExp("\\\\([\\da-f]{1,6}" + db + "?|(" + db + ")|.)", "ig"),
        wb = function (a, b, c) {
          var d = "0x" + b - 65536;
          return d !== d || c
            ? b
            : 0 > d
            ? String.fromCharCode(d + 65536)
            : String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
        };
      try {
        _.apply((Y = ab.call(O.childNodes)), O.childNodes),
          Y[O.childNodes.length].nodeType;
      } catch (xb) {
        _ = {
          apply: Y.length
            ? function (a, b) {
                $.apply(a, ab.call(b));
              }
            : function (a, b) {
                for (var c = a.length, d = 0; (a[c++] = b[d++]); );
                a.length = c - 1;
              },
        };
      }
      (x = b.support = {}),
        (A = b.isXML =
          function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
          }),
        (F = b.setDocument =
          function (a) {
            var b,
              c = a ? a.ownerDocument || a : O,
              d = c.defaultView;
            return c !== G && 9 === c.nodeType && c.documentElement
              ? ((G = c),
                (H = c.documentElement),
                (I = !A(c)),
                d &&
                  d !== d.top &&
                  (d.addEventListener
                    ? d.addEventListener(
                        "unload",
                        function () {
                          F();
                        },
                        !1
                      )
                    : d.attachEvent &&
                      d.attachEvent("onunload", function () {
                        F();
                      })),
                (x.attributes = e(function (a) {
                  return (a.className = "i"), !a.getAttribute("className");
                })),
                (x.getElementsByTagName = e(function (a) {
                  return (
                    a.appendChild(c.createComment("")),
                    !a.getElementsByTagName("*").length
                  );
                })),
                (x.getElementsByClassName =
                  rb.test(c.getElementsByClassName) &&
                  e(function (a) {
                    return (
                      (a.innerHTML =
                        "<div class='a'></div><div class='a i'></div>"),
                      (a.firstChild.className = "i"),
                      2 === a.getElementsByClassName("i").length
                    );
                  })),
                (x.getById = e(function (a) {
                  return (
                    (H.appendChild(a).id = N),
                    !c.getElementsByName || !c.getElementsByName(N).length
                  );
                })),
                x.getById
                  ? ((y.find.ID = function (a, b) {
                      if (typeof b.getElementById !== V && I) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : [];
                      }
                    }),
                    (y.filter.ID = function (a) {
                      var b = a.replace(vb, wb);
                      return function (a) {
                        return a.getAttribute("id") === b;
                      };
                    }))
                  : (delete y.find.ID,
                    (y.filter.ID = function (a) {
                      var b = a.replace(vb, wb);
                      return function (a) {
                        var c =
                          typeof a.getAttributeNode !== V &&
                          a.getAttributeNode("id");
                        return c && c.value === b;
                      };
                    })),
                (y.find.TAG = x.getElementsByTagName
                  ? function (a, b) {
                      return typeof b.getElementsByTagName !== V
                        ? b.getElementsByTagName(a)
                        : void 0;
                    }
                  : function (a, b) {
                      var c,
                        d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                      if ("*" === a) {
                        for (; (c = f[e++]); ) 1 === c.nodeType && d.push(c);
                        return d;
                      }
                      return f;
                    }),
                (y.find.CLASS =
                  x.getElementsByClassName &&
                  function (a, b) {
                    return typeof b.getElementsByClassName !== V && I
                      ? b.getElementsByClassName(a)
                      : void 0;
                  }),
                (K = []),
                (J = []),
                (x.qsa = rb.test(c.querySelectorAll)) &&
                  (e(function (a) {
                    (a.innerHTML =
                      "<select t=''><option selected=''></option></select>"),
                      a.querySelectorAll("[t^='']").length &&
                        J.push("[*^$]=" + db + "*(?:''|\"\")"),
                      a.querySelectorAll("[selected]").length ||
                        J.push("\\[" + db + "*(?:value|" + cb + ")"),
                      a.querySelectorAll(":checked").length ||
                        J.push(":checked");
                  }),
                  e(function (a) {
                    var b = c.createElement("input");
                    b.setAttribute("type", "hidden"),
                      a.appendChild(b).setAttribute("name", "D"),
                      a.querySelectorAll("[name=d]").length &&
                        J.push("name" + db + "*[*^$|!~]?="),
                      a.querySelectorAll(":enabled").length ||
                        J.push(":enabled", ":disabled"),
                      a.querySelectorAll("*,:x"),
                      J.push(",.*:");
                  })),
                (x.matchesSelector = rb.test(
                  (L =
                    H.webkitMatchesSelector ||
                    H.mozMatchesSelector ||
                    H.oMatchesSelector ||
                    H.msMatchesSelector)
                )) &&
                  e(function (a) {
                    (x.disconnectedMatch = L.call(a, "div")),
                      L.call(a, "[s!='']:x"),
                      K.push("!=", hb);
                  }),
                (J = J.length && new RegExp(J.join("|"))),
                (K = K.length && new RegExp(K.join("|"))),
                (b = rb.test(H.compareDocumentPosition)),
                (M =
                  b || rb.test(H.contains)
                    ? function (a, b) {
                        var c = 9 === a.nodeType ? a.documentElement : a,
                          d = b && b.parentNode;
                        return (
                          a === d ||
                          !(
                            !d ||
                            1 !== d.nodeType ||
                            !(c.contains
                              ? c.contains(d)
                              : a.compareDocumentPosition &&
                                16 & a.compareDocumentPosition(d))
                          )
                        );
                      }
                    : function (a, b) {
                        if (b)
                          for (; (b = b.parentNode); ) if (b === a) return !0;
                        return !1;
                      }),
                (U = b
                  ? function (a, b) {
                      if (a === b) return (E = !0), 0;
                      var d =
                        !a.compareDocumentPosition - !b.compareDocumentPosition;
                      return d
                        ? d
                        : ((d =
                            (a.ownerDocument || a) === (b.ownerDocument || b)
                              ? a.compareDocumentPosition(b)
                              : 1),
                          1 & d ||
                          (!x.sortDetached &&
                            b.compareDocumentPosition(a) === d)
                            ? a === c || (a.ownerDocument === O && M(O, a))
                              ? -1
                              : b === c || (b.ownerDocument === O && M(O, b))
                              ? 1
                              : D
                              ? bb.call(D, a) - bb.call(D, b)
                              : 0
                            : 4 & d
                            ? -1
                            : 1);
                    }
                  : function (a, b) {
                      if (a === b) return (E = !0), 0;
                      var d,
                        e = 0,
                        f = a.parentNode,
                        h = b.parentNode,
                        i = [a],
                        j = [b];
                      if (!f || !h)
                        return a === c
                          ? -1
                          : b === c
                          ? 1
                          : f
                          ? -1
                          : h
                          ? 1
                          : D
                          ? bb.call(D, a) - bb.call(D, b)
                          : 0;
                      if (f === h) return g(a, b);
                      for (d = a; (d = d.parentNode); ) i.unshift(d);
                      for (d = b; (d = d.parentNode); ) j.unshift(d);
                      for (; i[e] === j[e]; ) e++;
                      return e
                        ? g(i[e], j[e])
                        : i[e] === O
                        ? -1
                        : j[e] === O
                        ? 1
                        : 0;
                    }),
                c)
              : G;
          }),
        (b.matches = function (a, c) {
          return b(a, null, null, c);
        }),
        (b.matchesSelector = function (a, c) {
          if (
            ((a.ownerDocument || a) !== G && F(a),
            (c = c.replace(lb, "='$1']")),
            !(!x.matchesSelector || !I || (K && K.test(c)) || (J && J.test(c))))
          )
            try {
              var d = L.call(a, c);
              if (
                d ||
                x.disconnectedMatch ||
                (a.document && 11 !== a.document.nodeType)
              )
                return d;
            } catch (e) {}
          return b(c, G, null, [a]).length > 0;
        }),
        (b.contains = function (a, b) {
          return (a.ownerDocument || a) !== G && F(a), M(a, b);
        }),
        (b.attr = function (a, b) {
          (a.ownerDocument || a) !== G && F(a);
          var c = y.attrHandle[b.toLowerCase()],
            d =
              c && X.call(y.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
          return void 0 !== d
            ? d
            : x.attributes || !I
            ? a.getAttribute(b)
            : (d = a.getAttributeNode(b)) && d.specified
            ? d.value
            : null;
        }),
        (b.error = function (a) {
          throw new Error("Syntax error, unrecognized expression: " + a);
        }),
        (b.uniqueSort = function (a) {
          var b,
            c = [],
            d = 0,
            e = 0;
          if (
            ((E = !x.detectDuplicates),
            (D = !x.sortStable && a.slice(0)),
            a.sort(U),
            E)
          ) {
            for (; (b = a[e++]); ) b === a[e] && (d = c.push(e));
            for (; d--; ) a.splice(c[d], 1);
          }
          return (D = null), a;
        }),
        (z = b.getText =
          function (a) {
            var b,
              c = "",
              d = 0,
              e = a.nodeType;
            if (e) {
              if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof a.textContent) return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling) c += z(a);
              } else if (3 === e || 4 === e) return a.nodeValue;
            } else for (; (b = a[d++]); ) c += z(b);
            return c;
          }),
        (y = b.selectors =
          {
            cacheLength: 50,
            createPseudo: d,
            match: ob,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (a) {
                return (
                  (a[1] = a[1].replace(vb, wb)),
                  (a[3] = (a[4] || a[5] || "").replace(vb, wb)),
                  "~=" === a[2] && (a[3] = " " + a[3] + " "),
                  a.slice(0, 4)
                );
              },
              CHILD: function (a) {
                return (
                  (a[1] = a[1].toLowerCase()),
                  "nth" === a[1].slice(0, 3)
                    ? (a[3] || b.error(a[0]),
                      (a[4] = +(a[4]
                        ? a[5] + (a[6] || 1)
                        : 2 * ("even" === a[3] || "odd" === a[3]))),
                      (a[5] = +(a[7] + a[8] || "odd" === a[3])))
                    : a[3] && b.error(a[0]),
                  a
                );
              },
              PSEUDO: function (a) {
                var b,
                  c = !a[5] && a[2];
                return ob.CHILD.test(a[0])
                  ? null
                  : (a[3] && void 0 !== a[4]
                      ? (a[2] = a[4])
                      : c &&
                        mb.test(c) &&
                        (b = m(c, !0)) &&
                        (b = c.indexOf(")", c.length - b) - c.length) &&
                        ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                    a.slice(0, 3));
              },
            },
            filter: {
              TAG: function (a) {
                var b = a.replace(vb, wb).toLowerCase();
                return "*" === a
                  ? function () {
                      return !0;
                    }
                  : function (a) {
                      return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
              },
              CLASS: function (a) {
                var b = R[a + " "];
                return (
                  b ||
                  ((b = new RegExp("(^|" + db + ")" + a + "(" + db + "|$)")) &&
                    R(a, function (a) {
                      return b.test(
                        ("string" == typeof a.className && a.className) ||
                          (typeof a.getAttribute !== V &&
                            a.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (a, c, d) {
                return function (e) {
                  var f = b.attr(e, a);
                  return null == f
                    ? "!=" === c
                    : c
                    ? ((f += ""),
                      "=" === c
                        ? f === d
                        : "!=" === c
                        ? f !== d
                        : "^=" === c
                        ? d && 0 === f.indexOf(d)
                        : "*=" === c
                        ? d && f.indexOf(d) > -1
                        : "$=" === c
                        ? d && f.slice(-d.length) === d
                        : "~=" === c
                        ? (" " + f + " ").indexOf(d) > -1
                        : "|=" === c
                        ? f === d || f.slice(0, d.length + 1) === d + "-"
                        : !1)
                    : !0;
                };
              },
              CHILD: function (a, b, c, d, e) {
                var f = "nth" !== a.slice(0, 3),
                  g = "last" !== a.slice(-4),
                  h = "of-type" === b;
                return 1 === d && 0 === e
                  ? function (a) {
                      return !!a.parentNode;
                    }
                  : function (b, c, i) {
                      var j,
                        k,
                        l,
                        m,
                        n,
                        o,
                        p = f !== g ? "nextSibling" : "previousSibling",
                        q = b.parentNode,
                        r = h && b.nodeName.toLowerCase(),
                        s = !i && !h;
                      if (q) {
                        if (f) {
                          for (; p; ) {
                            for (l = b; (l = l[p]); )
                              if (
                                h
                                  ? l.nodeName.toLowerCase() === r
                                  : 1 === l.nodeType
                              )
                                return !1;
                            o = p = "only" === a && !o && "nextSibling";
                          }
                          return !0;
                        }
                        if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                          for (
                            k = q[N] || (q[N] = {}),
                              j = k[a] || [],
                              n = j[0] === P && j[1],
                              m = j[0] === P && j[2],
                              l = n && q.childNodes[n];
                            (l = (++n && l && l[p]) || (m = n = 0) || o.pop());

                          )
                            if (1 === l.nodeType && ++m && l === b) {
                              k[a] = [P, n, m];
                              break;
                            }
                        } else if (
                          s &&
                          (j = (b[N] || (b[N] = {}))[a]) &&
                          j[0] === P
                        )
                          m = j[1];
                        else
                          for (
                            ;
                            (l =
                              (++n && l && l[p]) || (m = n = 0) || o.pop()) &&
                            ((h
                              ? l.nodeName.toLowerCase() !== r
                              : 1 !== l.nodeType) ||
                              !++m ||
                              (s && ((l[N] || (l[N] = {}))[a] = [P, m]),
                              l !== b));

                          );
                        return (m -= e), m === d || (m % d === 0 && m / d >= 0);
                      }
                    };
              },
              PSEUDO: function (a, c) {
                var e,
                  f =
                    y.pseudos[a] ||
                    y.setFilters[a.toLowerCase()] ||
                    b.error("unsupported pseudo: " + a);
                return f[N]
                  ? f(c)
                  : f.length > 1
                  ? ((e = [a, a, "", c]),
                    y.setFilters.hasOwnProperty(a.toLowerCase())
                      ? d(function (a, b) {
                          for (var d, e = f(a, c), g = e.length; g--; )
                            (d = bb.call(a, e[g])), (a[d] = !(b[d] = e[g]));
                        })
                      : function (a) {
                          return f(a, 0, e);
                        })
                  : f;
              },
            },
            pseudos: {
              not: d(function (a) {
                var b = [],
                  c = [],
                  e = B(a.replace(ib, "$1"));
                return e[N]
                  ? d(function (a, b, c, d) {
                      for (var f, g = e(a, null, d, []), h = a.length; h--; )
                        (f = g[h]) && (a[h] = !(b[h] = f));
                    })
                  : function (a, d, f) {
                      return (b[0] = a), e(b, null, f, c), !c.pop();
                    };
              }),
              has: d(function (a) {
                return function (c) {
                  return b(a, c).length > 0;
                };
              }),
              contains: d(function (a) {
                return function (b) {
                  return (b.textContent || b.innerText || z(b)).indexOf(a) > -1;
                };
              }),
              lang: d(function (a) {
                return (
                  nb.test(a || "") || b.error("unsupported lang: " + a),
                  (a = a.replace(vb, wb).toLowerCase()),
                  function (b) {
                    var c;
                    do
                      if (
                        (c = I
                          ? b.lang
                          : b.getAttribute("xml:lang") ||
                            b.getAttribute("lang"))
                      )
                        return (
                          (c = c.toLowerCase()),
                          c === a || 0 === c.indexOf(a + "-")
                        );
                    while ((b = b.parentNode) && 1 === b.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (b) {
                var c = a.location && a.location.hash;
                return c && c.slice(1) === b.id;
              },
              root: function (a) {
                return a === H;
              },
              focus: function (a) {
                return (
                  a === G.activeElement &&
                  (!G.hasFocus || G.hasFocus()) &&
                  !!(a.type || a.href || ~a.tabIndex)
                );
              },
              enabled: function (a) {
                return a.disabled === !1;
              },
              disabled: function (a) {
                return a.disabled === !0;
              },
              checked: function (a) {
                var b = a.nodeName.toLowerCase();
                return (
                  ("input" === b && !!a.checked) ||
                  ("option" === b && !!a.selected)
                );
              },
              selected: function (a) {
                return (
                  a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                );
              },
              empty: function (a) {
                for (a = a.firstChild; a; a = a.nextSibling)
                  if (a.nodeType < 6) return !1;
                return !0;
              },
              parent: function (a) {
                return !y.pseudos.empty(a);
              },
              header: function (a) {
                return qb.test(a.nodeName);
              },
              input: function (a) {
                return pb.test(a.nodeName);
              },
              button: function (a) {
                var b = a.nodeName.toLowerCase();
                return ("input" === b && "button" === a.type) || "button" === b;
              },
              text: function (a) {
                var b;
                return (
                  "input" === a.nodeName.toLowerCase() &&
                  "text" === a.type &&
                  (null == (b = a.getAttribute("type")) ||
                    "text" === b.toLowerCase())
                );
              },
              first: j(function () {
                return [0];
              }),
              last: j(function (a, b) {
                return [b - 1];
              }),
              eq: j(function (a, b, c) {
                return [0 > c ? c + b : c];
              }),
              even: j(function (a, b) {
                for (var c = 0; b > c; c += 2) a.push(c);
                return a;
              }),
              odd: j(function (a, b) {
                for (var c = 1; b > c; c += 2) a.push(c);
                return a;
              }),
              lt: j(function (a, b, c) {
                for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                return a;
              }),
              gt: j(function (a, b, c) {
                for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                return a;
              }),
            },
          }),
        (y.pseudos.nth = y.pseudos.eq);
      for (w in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        y.pseudos[w] = h(w);
      for (w in { submit: !0, reset: !0 }) y.pseudos[w] = i(w);
      return (
        (l.prototype = y.filters = y.pseudos),
        (y.setFilters = new l()),
        (B = b.compile =
          function (a, b) {
            var c,
              d = [],
              e = [],
              f = T[a + " "];
            if (!f) {
              for (b || (b = m(a)), c = b.length; c--; )
                (f = s(b[c])), f[N] ? d.push(f) : e.push(f);
              f = T(a, t(e, d));
            }
            return f;
          }),
        (x.sortStable = N.split("").sort(U).join("") === N),
        (x.detectDuplicates = !!E),
        F(),
        (x.sortDetached = e(function (a) {
          return 1 & a.compareDocumentPosition(G.createElement("div"));
        })),
        e(function (a) {
          return (
            (a.innerHTML = "<a href='#'></a>"),
            "#" === a.firstChild.getAttribute("href")
          );
        }) ||
          f("type|href|height|width", function (a, b, c) {
            return c
              ? void 0
              : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
          }),
        (x.attributes &&
          e(function (a) {
            return (
              (a.innerHTML = "<input/>"),
              a.firstChild.setAttribute("value", ""),
              "" === a.firstChild.getAttribute("value")
            );
          })) ||
          f("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase()
              ? void 0
              : a.defaultValue;
          }),
        e(function (a) {
          return null == a.getAttribute("disabled");
        }) ||
          f(cb, function (a, b, c) {
            var d;
            return c
              ? void 0
              : a[b] === !0
              ? b.toLowerCase()
              : (d = a.getAttributeNode(b)) && d.specified
              ? d.value
              : null;
          }),
        b
      );
    })(a);
  (ab.find = eb),
    (ab.expr = eb.selectors),
    (ab.expr[":"] = ab.expr.pseudos),
    (ab.unique = eb.uniqueSort),
    (ab.text = eb.getText),
    (ab.isXMLDoc = eb.isXML),
    (ab.contains = eb.contains);
  var fb = ab.expr.match.needsContext,
    gb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    hb = /^.[^:#\[\.,]*$/;
  (ab.filter = function (a, b, c) {
    var d = b[0];
    return (
      c && (a = ":not(" + a + ")"),
      1 === b.length && 1 === d.nodeType
        ? ab.find.matchesSelector(d, a)
          ? [d]
          : []
        : ab.find.matches(
            a,
            ab.grep(b, function (a) {
              return 1 === a.nodeType;
            })
          )
    );
  }),
    ab.fn.extend({
      find: function (a) {
        var b,
          c = this.length,
          d = [],
          e = this;
        if ("string" != typeof a)
          return this.pushStack(
            ab(a).filter(function () {
              for (b = 0; c > b; b++) if (ab.contains(e[b], this)) return !0;
            })
          );
        for (b = 0; c > b; b++) ab.find(a, e[b], d);
        return (
          (d = this.pushStack(c > 1 ? ab.unique(d) : d)),
          (d.selector = this.selector ? this.selector + " " + a : a),
          d
        );
      },
      filter: function (a) {
        return this.pushStack(d(this, a || [], !1));
      },
      not: function (a) {
        return this.pushStack(d(this, a || [], !0));
      },
      is: function (a) {
        return !!d(
          this,
          "string" == typeof a && fb.test(a) ? ab(a) : a || [],
          !1
        ).length;
      },
    });
  var ib,
    jb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    kb = (ab.fn.init = function (a, b) {
      var c, d;
      if (!a) return this;
      if ("string" == typeof a) {
        if (
          ((c =
            "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3
              ? [null, a, null]
              : jb.exec(a)),
          !c || (!c[1] && b))
        )
          return !b || b.jquery
            ? (b || ib).find(a)
            : this.constructor(b).find(a);
        if (c[1]) {
          if (
            ((b = b instanceof ab ? b[0] : b),
            ab.merge(
              this,
              ab.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : $, !0)
            ),
            gb.test(c[1]) && ab.isPlainObject(b))
          )
            for (c in b)
              ab.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
          return this;
        }
        return (
          (d = $.getElementById(c[2])),
          d && d.parentNode && ((this.length = 1), (this[0] = d)),
          (this.context = $),
          (this.selector = a),
          this
        );
      }
      return a.nodeType
        ? ((this.context = this[0] = a), (this.length = 1), this)
        : ab.isFunction(a)
        ? "undefined" != typeof ib.ready
          ? ib.ready(a)
          : a(ab)
        : (void 0 !== a.selector &&
            ((this.selector = a.selector), (this.context = a.context)),
          ab.makeArray(a, this));
    });
  (kb.prototype = ab.fn), (ib = ab($));
  var lb = /^(?:parents|prev(?:Until|All))/,
    mb = { children: !0, contents: !0, next: !0, prev: !0 };
  ab.extend({
    dir: function (a, b, c) {
      for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; )
        if (1 === a.nodeType) {
          if (e && ab(a).is(c)) break;
          d.push(a);
        }
      return d;
    },
    sibling: function (a, b) {
      for (var c = []; a; a = a.nextSibling)
        1 === a.nodeType && a !== b && c.push(a);
      return c;
    },
  }),
    ab.fn.extend({
      has: function (a) {
        var b = ab(a, this),
          c = b.length;
        return this.filter(function () {
          for (var a = 0; c > a; a++) if (ab.contains(this, b[a])) return !0;
        });
      },
      closest: function (a, b) {
        for (
          var c,
            d = 0,
            e = this.length,
            f = [],
            g =
              fb.test(a) || "string" != typeof a ? ab(a, b || this.context) : 0;
          e > d;
          d++
        )
          for (c = this[d]; c && c !== b; c = c.parentNode)
            if (
              c.nodeType < 11 &&
              (g
                ? g.index(c) > -1
                : 1 === c.nodeType && ab.find.matchesSelector(c, a))
            ) {
              f.push(c);
              break;
            }
        return this.pushStack(f.length > 1 ? ab.unique(f) : f);
      },
      index: function (a) {
        return a
          ? "string" == typeof a
            ? U.call(ab(a), this[0])
            : U.call(this, a.jquery ? a[0] : a)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (a, b) {
        return this.pushStack(ab.unique(ab.merge(this.get(), ab(a, b))));
      },
      addBack: function (a) {
        return this.add(
          null == a ? this.prevObject : this.prevObject.filter(a)
        );
      },
    }),
    ab.each(
      {
        parent: function (a) {
          var b = a.parentNode;
          return b && 11 !== b.nodeType ? b : null;
        },
        parents: function (a) {
          return ab.dir(a, "parentNode");
        },
        parentsUntil: function (a, b, c) {
          return ab.dir(a, "parentNode", c);
        },
        next: function (a) {
          return e(a, "nextSibling");
        },
        prev: function (a) {
          return e(a, "previousSibling");
        },
        nextAll: function (a) {
          return ab.dir(a, "nextSibling");
        },
        prevAll: function (a) {
          return ab.dir(a, "previousSibling");
        },
        nextUntil: function (a, b, c) {
          return ab.dir(a, "nextSibling", c);
        },
        prevUntil: function (a, b, c) {
          return ab.dir(a, "previousSibling", c);
        },
        siblings: function (a) {
          return ab.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function (a) {
          return ab.sibling(a.firstChild);
        },
        contents: function (a) {
          return a.contentDocument || ab.merge([], a.childNodes);
        },
      },
      function (a, b) {
        ab.fn[a] = function (c, d) {
          var e = ab.map(this, b, c);
          return (
            "Until" !== a.slice(-5) && (d = c),
            d && "string" == typeof d && (e = ab.filter(d, e)),
            this.length > 1 &&
              (mb[a] || ab.unique(e), lb.test(a) && e.reverse()),
            this.pushStack(e)
          );
        };
      }
    );
  var nb = /\S+/g,
    ob = {};
  (ab.Callbacks = function (a) {
    a = "string" == typeof a ? ob[a] || f(a) : ab.extend({}, a);
    var b,
      c,
      d,
      e,
      g,
      h,
      i = [],
      j = !a.once && [],
      k = function (f) {
        for (
          b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0;
          i && g > h;
          h++
        )
          if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
            b = !1;
            break;
          }
        (d = !1),
          i && (j ? j.length && k(j.shift()) : b ? (i = []) : l.disable());
      },
      l = {
        add: function () {
          if (i) {
            var c = i.length;
            !(function f(b) {
              ab.each(b, function (b, c) {
                var d = ab.type(c);
                "function" === d
                  ? (a.unique && l.has(c)) || i.push(c)
                  : c && c.length && "string" !== d && f(c);
              });
            })(arguments),
              d ? (g = i.length) : b && ((e = c), k(b));
          }
          return this;
        },
        remove: function () {
          return (
            i &&
              ab.each(arguments, function (a, b) {
                for (var c; (c = ab.inArray(b, i, c)) > -1; )
                  i.splice(c, 1), d && (g >= c && g--, h >= c && h--);
              }),
            this
          );
        },
        has: function (a) {
          return a ? ab.inArray(a, i) > -1 : !(!i || !i.length);
        },
        empty: function () {
          return (i = []), (g = 0), this;
        },
        disable: function () {
          return (i = j = b = void 0), this;
        },
        disabled: function () {
          return !i;
        },
        lock: function () {
          return (j = void 0), b || l.disable(), this;
        },
        locked: function () {
          return !j;
        },
        fireWith: function (a, b) {
          return (
            !i ||
              (c && !j) ||
              ((b = b || []),
              (b = [a, b.slice ? b.slice() : b]),
              d ? j.push(b) : k(b)),
            this
          );
        },
        fire: function () {
          return l.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!c;
        },
      };
    return l;
  }),
    ab.extend({
      Deferred: function (a) {
        var b = [
            ["resolve", "done", ab.Callbacks("once memory"), "resolved"],
            ["reject", "fail", ab.Callbacks("once memory"), "rejected"],
            ["notify", "progress", ab.Callbacks("memory")],
          ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return ab
                .Deferred(function (c) {
                  ab.each(b, function (b, f) {
                    var g = ab.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                      var a = g && g.apply(this, arguments);
                      a && ab.isFunction(a.promise)
                        ? a
                            .promise()
                            .done(c.resolve)
                            .fail(c.reject)
                            .progress(c.notify)
                        : c[f[0] + "With"](
                            this === d ? c.promise() : this,
                            g ? [a] : arguments
                          );
                    });
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function (a) {
              return null != a ? ab.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          ab.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[1 ^ a][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = function () {
                return e[f[0] + "With"](this === e ? d : this, arguments), this;
              }),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b,
          c,
          d,
          e = 0,
          f = R.call(arguments),
          g = f.length,
          h = 1 !== g || (a && ab.isFunction(a.promise)) ? g : 0,
          i = 1 === h ? a : ab.Deferred(),
          j = function (a, c, d) {
            return function (e) {
              (c[a] = this),
                (d[a] = arguments.length > 1 ? R.call(arguments) : e),
                d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
            };
          };
        if (g > 1)
          for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++)
            f[e] && ab.isFunction(f[e].promise)
              ? f[e]
                  .promise()
                  .done(j(e, d, f))
                  .fail(i.reject)
                  .progress(j(e, c, b))
              : --h;
        return h || i.resolveWith(d, f), i.promise();
      },
    });
  var pb;
  (ab.fn.ready = function (a) {
    return ab.ready.promise().done(a), this;
  }),
    ab.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? ab.readyWait++ : ab.ready(!0);
      },
      ready: function (a) {
        (a === !0 ? --ab.readyWait : ab.isReady) ||
          ((ab.isReady = !0),
          (a !== !0 && --ab.readyWait > 0) ||
            (pb.resolveWith($, [ab]),
            ab.fn.trigger && ab($).trigger("ready").off("ready")));
      },
    }),
    (ab.ready.promise = function (b) {
      return (
        pb ||
          ((pb = ab.Deferred()),
          "complete" === $.readyState
            ? setTimeout(ab.ready)
            : ($.addEventListener("DOMContentLoaded", g, !1),
              a.addEventListener("load", g, !1))),
        pb.promise(b)
      );
    }),
    ab.ready.promise();
  var qb = (ab.access = function (a, b, c, d, e, f, g) {
    var h = 0,
      i = a.length,
      j = null == c;
    if ("object" === ab.type(c)) {
      e = !0;
      for (h in c) ab.access(a, b, h, c[h], !0, f, g);
    } else if (
      void 0 !== d &&
      ((e = !0),
      ab.isFunction(d) || (g = !0),
      j &&
        (g
          ? (b.call(a, d), (b = null))
          : ((j = b),
            (b = function (a, b, c) {
              return j.call(ab(a), c);
            }))),
      b)
    )
      for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  });
  (ab.acceptData = function (a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  }),
    (h.uid = 1),
    (h.accepts = ab.acceptData),
    (h.prototype = {
      key: function (a) {
        if (!h.accepts(a)) return 0;
        var b = {},
          c = a[this.expando];
        if (!c) {
          c = h.uid++;
          try {
            (b[this.expando] = { value: c }), Object.defineProperties(a, b);
          } catch (d) {
            (b[this.expando] = c), ab.extend(a, b);
          }
        }
        return this.cache[c] || (this.cache[c] = {}), c;
      },
      set: function (a, b, c) {
        var d,
          e = this.key(a),
          f = this.cache[e];
        if ("string" == typeof b) f[b] = c;
        else if (ab.isEmptyObject(f)) ab.extend(this.cache[e], b);
        else for (d in b) f[d] = b[d];
        return f;
      },
      get: function (a, b) {
        var c = this.cache[this.key(a)];
        return void 0 === b ? c : c[b];
      },
      access: function (a, b, c) {
        var d;
        return void 0 === b || (b && "string" == typeof b && void 0 === c)
          ? ((d = this.get(a, b)),
            void 0 !== d ? d : this.get(a, ab.camelCase(b)))
          : (this.set(a, b, c), void 0 !== c ? c : b);
      },
      remove: function (a, b) {
        var c,
          d,
          e,
          f = this.key(a),
          g = this.cache[f];
        if (void 0 === b) this.cache[f] = {};
        else {
          ab.isArray(b)
            ? (d = b.concat(b.map(ab.camelCase)))
            : ((e = ab.camelCase(b)),
              b in g
                ? (d = [b, e])
                : ((d = e), (d = d in g ? [d] : d.match(nb) || []))),
            (c = d.length);
          for (; c--; ) delete g[d[c]];
        }
      },
      hasData: function (a) {
        return !ab.isEmptyObject(this.cache[a[this.expando]] || {});
      },
      discard: function (a) {
        a[this.expando] && delete this.cache[a[this.expando]];
      },
    });
  var rb = new h(),
    sb = new h(),
    tb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ub = /([A-Z])/g;
  ab.extend({
    hasData: function (a) {
      return sb.hasData(a) || rb.hasData(a);
    },
    data: function (a, b, c) {
      return sb.access(a, b, c);
    },
    removeData: function (a, b) {
      sb.remove(a, b);
    },
    _data: function (a, b, c) {
      return rb.access(a, b, c);
    },
    _removeData: function (a, b) {
      rb.remove(a, b);
    },
  }),
    ab.fn.extend({
      data: function (a, b) {
        var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (
            this.length &&
            ((e = sb.get(f)), 1 === f.nodeType && !rb.get(f, "hasDataAttrs"))
          ) {
            for (c = g.length; c--; )
              (d = g[c].name),
                0 === d.indexOf("data-") &&
                  ((d = ab.camelCase(d.slice(5))), i(f, d, e[d]));
            rb.set(f, "hasDataAttrs", !0);
          }
          return e;
        }
        return "object" == typeof a
          ? this.each(function () {
              sb.set(this, a);
            })
          : qb(
              this,
              function (b) {
                var c,
                  d = ab.camelCase(a);
                if (f && void 0 === b) {
                  if (((c = sb.get(f, a)), void 0 !== c)) return c;
                  if (((c = sb.get(f, d)), void 0 !== c)) return c;
                  if (((c = i(f, d, void 0)), void 0 !== c)) return c;
                } else
                  this.each(function () {
                    var c = sb.get(this, d);
                    sb.set(this, d, b),
                      -1 !== a.indexOf("-") &&
                        void 0 !== c &&
                        sb.set(this, a, b);
                  });
              },
              null,
              b,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (a) {
        return this.each(function () {
          sb.remove(this, a);
        });
      },
    }),
    ab.extend({
      queue: function (a, b, c) {
        var d;
        return a
          ? ((b = (b || "fx") + "queue"),
            (d = rb.get(a, b)),
            c &&
              (!d || ab.isArray(c)
                ? (d = rb.access(a, b, ab.makeArray(c)))
                : d.push(c)),
            d || [])
          : void 0;
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = ab.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = ab._queueHooks(a, b),
          g = function () {
            ab.dequeue(a, b);
          };
        "inprogress" === e && ((e = c.shift()), d--),
          e &&
            ("fx" === b && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          rb.get(a, c) ||
          rb.access(a, c, {
            empty: ab.Callbacks("once memory").add(function () {
              rb.remove(a, [b + "queue", c]);
            }),
          })
        );
      },
    }),
    ab.fn.extend({
      queue: function (a, b) {
        var c = 2;
        return (
          "string" != typeof a && ((b = a), (a = "fx"), c--),
          arguments.length < c
            ? ab.queue(this[0], a)
            : void 0 === b
            ? this
            : this.each(function () {
                var c = ab.queue(this, a, b);
                ab._queueHooks(this, a),
                  "fx" === a && "inprogress" !== c[0] && ab.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          ab.dequeue(this, a);
        });
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, b) {
        var c,
          d = 1,
          e = ab.Deferred(),
          f = this,
          g = this.length,
          h = function () {
            --d || e.resolveWith(f, [f]);
          };
        for (
          "string" != typeof a && ((b = a), (a = void 0)), a = a || "fx";
          g--;

        )
          (c = rb.get(f[g], a + "queueHooks")),
            c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b);
      },
    });
  var vb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    wb = ["Top", "Right", "Bottom", "Left"],
    xb = function (a, b) {
      return (
        (a = b || a),
        "none" === ab.css(a, "display") || !ab.contains(a.ownerDocument, a)
      );
    },
    yb = /^(?:checkbox|radio)$/i;
  !(function () {
    var a = $.createDocumentFragment(),
      b = a.appendChild($.createElement("div"));
    (b.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
      (Z.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (b.innerHTML = "<textarea>x</textarea>"),
      (Z.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
  })();
  var zb = "undefined";
  Z.focusinBubbles = "onfocusin" in a;
  var Ab = /^key/,
    Bb = /^(?:mouse|contextmenu)|click/,
    Cb = /^(?:focusinfocus|focusoutblur)$/,
    Db = /^([^.]*)(?:\.(.+)|)$/;
  (ab.event = {
    global: {},
    add: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = rb.get(a);
      if (q)
        for (
          c.handler && ((f = c), (c = f.handler), (e = f.selector)),
            c.guid || (c.guid = ab.guid++),
            (i = q.events) || (i = q.events = {}),
            (g = q.handle) ||
              (g = q.handle =
                function (b) {
                  return typeof ab !== zb && ab.event.triggered !== b.type
                    ? ab.event.dispatch.apply(a, arguments)
                    : void 0;
                }),
            b = (b || "").match(nb) || [""],
            j = b.length;
          j--;

        )
          (h = Db.exec(b[j]) || []),
            (n = p = h[1]),
            (o = (h[2] || "").split(".").sort()),
            n &&
              ((l = ab.event.special[n] || {}),
              (n = (e ? l.delegateType : l.bindType) || n),
              (l = ab.event.special[n] || {}),
              (k = ab.extend(
                {
                  type: n,
                  origType: p,
                  data: d,
                  handler: c,
                  guid: c.guid,
                  selector: e,
                  needsContext: e && ab.expr.match.needsContext.test(e),
                  namespace: o.join("."),
                },
                f
              )),
              (m = i[n]) ||
                ((m = i[n] = []),
                (m.delegateCount = 0),
                (l.setup && l.setup.call(a, d, o, g) !== !1) ||
                  (a.addEventListener && a.addEventListener(n, g, !1))),
              l.add &&
                (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)),
              e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
              (ab.event.global[n] = !0));
    },
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q = rb.hasData(a) && rb.get(a);
      if (q && (i = q.events)) {
        for (b = (b || "").match(nb) || [""], j = b.length; j--; )
          if (
            ((h = Db.exec(b[j]) || []),
            (n = p = h[1]),
            (o = (h[2] || "").split(".").sort()),
            n)
          ) {
            for (
              l = ab.event.special[n] || {},
                n = (d ? l.delegateType : l.bindType) || n,
                m = i[n] || [],
                h =
                  h[2] &&
                  new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                g = f = m.length;
              f--;

            )
              (k = m[f]),
                (!e && p !== k.origType) ||
                  (c && c.guid !== k.guid) ||
                  (h && !h.test(k.namespace)) ||
                  (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                  (m.splice(f, 1),
                  k.selector && m.delegateCount--,
                  l.remove && l.remove.call(a, k));
            g &&
              !m.length &&
              ((l.teardown && l.teardown.call(a, o, q.handle) !== !1) ||
                ab.removeEvent(a, n, q.handle),
              delete i[n]);
          } else for (n in i) ab.event.remove(a, n + b[j], c, d, !0);
        ab.isEmptyObject(i) && (delete q.handle, rb.remove(a, "events"));
      }
    },
    trigger: function (b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m = [d || $],
        n = X.call(b, "type") ? b.type : b,
        o = X.call(b, "namespace") ? b.namespace.split(".") : [];
      if (
        ((g = h = d = d || $),
        3 !== d.nodeType &&
          8 !== d.nodeType &&
          !Cb.test(n + ab.event.triggered) &&
          (n.indexOf(".") >= 0 &&
            ((o = n.split(".")), (n = o.shift()), o.sort()),
          (j = n.indexOf(":") < 0 && "on" + n),
          (b = b[ab.expando] ? b : new ab.Event(n, "object" == typeof b && b)),
          (b.isTrigger = e ? 2 : 3),
          (b.namespace = o.join(".")),
          (b.namespace_re = b.namespace
            ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (b.result = void 0),
          b.target || (b.target = d),
          (c = null == c ? [b] : ab.makeArray(c, [b])),
          (l = ab.event.special[n] || {}),
          e || !l.trigger || l.trigger.apply(d, c) !== !1))
      ) {
        if (!e && !l.noBubble && !ab.isWindow(d)) {
          for (
            i = l.delegateType || n, Cb.test(i + n) || (g = g.parentNode);
            g;
            g = g.parentNode
          )
            m.push(g), (h = g);
          h === (d.ownerDocument || $) &&
            m.push(h.defaultView || h.parentWindow || a);
        }
        for (f = 0; (g = m[f++]) && !b.isPropagationStopped(); )
          (b.type = f > 1 ? i : l.bindType || n),
            (k = (rb.get(g, "events") || {})[b.type] && rb.get(g, "handle")),
            k && k.apply(g, c),
            (k = j && g[j]),
            k &&
              k.apply &&
              ab.acceptData(g) &&
              ((b.result = k.apply(g, c)),
              b.result === !1 && b.preventDefault());
        return (
          (b.type = n),
          e ||
            b.isDefaultPrevented() ||
            (l._default && l._default.apply(m.pop(), c) !== !1) ||
            !ab.acceptData(d) ||
            (j &&
              ab.isFunction(d[n]) &&
              !ab.isWindow(d) &&
              ((h = d[j]),
              h && (d[j] = null),
              (ab.event.triggered = n),
              d[n](),
              (ab.event.triggered = void 0),
              h && (d[j] = h))),
          b.result
        );
      }
    },
    dispatch: function (a) {
      a = ab.event.fix(a);
      var b,
        c,
        d,
        e,
        f,
        g = [],
        h = R.call(arguments),
        i = (rb.get(this, "events") || {})[a.type] || [],
        j = ab.event.special[a.type] || {};
      if (
        ((h[0] = a),
        (a.delegateTarget = this),
        !j.preDispatch || j.preDispatch.call(this, a) !== !1)
      ) {
        for (
          g = ab.event.handlers.call(this, a, i), b = 0;
          (e = g[b++]) && !a.isPropagationStopped();

        )
          for (
            a.currentTarget = e.elem, c = 0;
            (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();

          )
            (!a.namespace_re || a.namespace_re.test(f.namespace)) &&
              ((a.handleObj = f),
              (a.data = f.data),
              (d = (
                (ab.event.special[f.origType] || {}).handle || f.handler
              ).apply(e.elem, h)),
              void 0 !== d &&
                (a.result = d) === !1 &&
                (a.preventDefault(), a.stopPropagation()));
        return j.postDispatch && j.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function (a, b) {
      var c,
        d,
        e,
        f,
        g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type))
        for (; i !== this; i = i.parentNode || this)
          if (i.disabled !== !0 || "click" !== a.type) {
            for (d = [], c = 0; h > c; c++)
              (f = b[c]),
                (e = f.selector + " "),
                void 0 === d[e] &&
                  (d[e] = f.needsContext
                    ? ab(e, this).index(i) >= 0
                    : ab.find(e, this, null, [i]).length),
                d[e] && d.push(f);
            d.length && g.push({ elem: i, handlers: d });
          }
      return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          null == a.which &&
            (a.which = null != b.charCode ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (a, b) {
        var c,
          d,
          e,
          f = b.button;
        return (
          null == a.pageX &&
            null != b.clientX &&
            ((c = a.target.ownerDocument || $),
            (d = c.documentElement),
            (e = c.body),
            (a.pageX =
              b.clientX +
              ((d && d.scrollLeft) || (e && e.scrollLeft) || 0) -
              ((d && d.clientLeft) || (e && e.clientLeft) || 0)),
            (a.pageY =
              b.clientY +
              ((d && d.scrollTop) || (e && e.scrollTop) || 0) -
              ((d && d.clientTop) || (e && e.clientTop) || 0))),
          a.which ||
            void 0 === f ||
            (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
          a
        );
      },
    },
    fix: function (a) {
      if (a[ab.expando]) return a;
      var b,
        c,
        d,
        e = a.type,
        f = a,
        g = this.fixHooks[e];
      for (
        g ||
          (this.fixHooks[e] = g =
            Bb.test(e) ? this.mouseHooks : Ab.test(e) ? this.keyHooks : {}),
          d = g.props ? this.props.concat(g.props) : this.props,
          a = new ab.Event(f),
          b = d.length;
        b--;

      )
        (c = d[b]), (a[c] = f[c]);
      return (
        a.target || (a.target = $),
        3 === a.target.nodeType && (a.target = a.target.parentNode),
        g.filter ? g.filter(a, f) : a
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== l() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === l() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type &&
            this.click &&
            ab.nodeName(this, "input")
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (a) {
          return ab.nodeName(a.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result && (a.originalEvent.returnValue = a.result);
        },
      },
    },
    simulate: function (a, b, c, d) {
      var e = ab.extend(new ab.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {},
      });
      d ? ab.event.trigger(e, null, b) : ab.event.dispatch.call(b, e),
        e.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (ab.removeEvent = function (a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c, !1);
    }),
    (ab.Event = function (a, b) {
      return this instanceof ab.Event
        ? (a && a.type
            ? ((this.originalEvent = a),
              (this.type = a.type),
              (this.isDefaultPrevented =
                a.defaultPrevented ||
                (void 0 === a.defaultPrevented &&
                  a.getPreventDefault &&
                  a.getPreventDefault())
                  ? j
                  : k))
            : (this.type = a),
          b && ab.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || ab.now()),
          void (this[ab.expando] = !0))
        : new ab.Event(a, b);
    }),
    (ab.Event.prototype = {
      isDefaultPrevented: k,
      isPropagationStopped: k,
      isImmediatePropagationStopped: k,
      preventDefault: function () {
        var a = this.originalEvent;
        (this.isDefaultPrevented = j),
          a && a.preventDefault && a.preventDefault();
      },
      stopPropagation: function () {
        var a = this.originalEvent;
        (this.isPropagationStopped = j),
          a && a.stopPropagation && a.stopPropagation();
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = j), this.stopPropagation();
      },
    }),
    ab.each(
      { mouseenter: "mouseover", mouseleave: "mouseout" },
      function (a, b) {
        ab.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj;
            return (
              (!e || (e !== d && !ab.contains(d, e))) &&
                ((a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b)),
              c
            );
          },
        };
      }
    ),
    Z.focusinBubbles ||
      ab.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function (a) {
          ab.event.simulate(b, a.target, ab.event.fix(a), !0);
        };
        ab.event.special[b] = {
          setup: function () {
            var d = this.ownerDocument || this,
              e = rb.access(d, b);
            e || d.addEventListener(a, c, !0), rb.access(d, b, (e || 0) + 1);
          },
          teardown: function () {
            var d = this.ownerDocument || this,
              e = rb.access(d, b) - 1;
            e
              ? rb.access(d, b, e)
              : (d.removeEventListener(a, c, !0), rb.remove(d, b));
          },
        };
      }),
    ab.fn.extend({
      on: function (a, b, c, d, e) {
        var f, g;
        if ("object" == typeof a) {
          "string" != typeof b && ((c = c || b), (b = void 0));
          for (g in a) this.on(g, b, c, a[g], e);
          return this;
        }
        if (
          (null == c && null == d
            ? ((d = b), (c = b = void 0))
            : null == d &&
              ("string" == typeof b
                ? ((d = c), (c = void 0))
                : ((d = c), (c = b), (b = void 0))),
          d === !1)
        )
          d = k;
        else if (!d) return this;
        return (
          1 === e &&
            ((f = d),
            (d = function (a) {
              return ab().off(a), f.apply(this, arguments);
            }),
            (d.guid = f.guid || (f.guid = ab.guid++))),
          this.each(function () {
            ab.event.add(this, a, d, c, b);
          })
        );
      },
      one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1);
      },
      off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)
          return (
            (d = a.handleObj),
            ab(a.delegateTarget).off(
              d.namespace ? d.origType + "." + d.namespace : d.origType,
              d.selector,
              d.handler
            ),
            this
          );
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this;
        }
        return (
          (b === !1 || "function" == typeof b) && ((c = b), (b = void 0)),
          c === !1 && (c = k),
          this.each(function () {
            ab.event.remove(this, a, c, b);
          })
        );
      },
      trigger: function (a, b) {
        return this.each(function () {
          ab.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        var c = this[0];
        return c ? ab.event.trigger(a, b, c, !0) : void 0;
      },
    });
  var Eb =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Fb = /<([\w:]+)/,
    Gb = /<|&#?\w+;/,
    Hb = /<(?:script|style|link)/i,
    Ib = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Jb = /^$|\/(?:java|ecma)script/i,
    Kb = /^true\/(.*)/,
    Lb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Mb = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (Mb.optgroup = Mb.option),
    (Mb.tbody = Mb.tfoot = Mb.colgroup = Mb.caption = Mb.thead),
    (Mb.th = Mb.td),
    ab.extend({
      clone: function (a, b, c) {
        var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = ab.contains(a.ownerDocument, a);
        if (
          !(
            Z.noCloneChecked ||
            (1 !== a.nodeType && 11 !== a.nodeType) ||
            ab.isXMLDoc(a)
          )
        )
          for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++)
            s(f[d], g[d]);
        if (b)
          if (c)
            for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++)
              q(f[d], g[d]);
          else q(a, h);
        return (
          (g = r(h, "script")), g.length > 0 && p(g, !i && r(a, "script")), h
        );
      },
      buildFragment: function (a, b, c, d) {
        for (
          var e,
            f,
            g,
            h,
            i,
            j,
            k = b.createDocumentFragment(),
            l = [],
            m = 0,
            n = a.length;
          n > m;
          m++
        )
          if (((e = a[m]), e || 0 === e))
            if ("object" === ab.type(e)) ab.merge(l, e.nodeType ? [e] : e);
            else if (Gb.test(e)) {
              for (
                f = f || k.appendChild(b.createElement("div")),
                  g = (Fb.exec(e) || ["", ""])[1].toLowerCase(),
                  h = Mb[g] || Mb._default,
                  f.innerHTML = h[1] + e.replace(Eb, "<$1></$2>") + h[2],
                  j = h[0];
                j--;

              )
                f = f.lastChild;
              ab.merge(l, f.childNodes),
                (f = k.firstChild),
                (f.textContent = "");
            } else l.push(b.createTextNode(e));
        for (k.textContent = "", m = 0; (e = l[m++]); )
          if (
            (!d || -1 === ab.inArray(e, d)) &&
            ((i = ab.contains(e.ownerDocument, e)),
            (f = r(k.appendChild(e), "script")),
            i && p(f),
            c)
          )
            for (j = 0; (e = f[j++]); ) Jb.test(e.type || "") && c.push(e);
        return k;
      },
      cleanData: function (a) {
        for (
          var b, c, d, e, f, g, h = ab.event.special, i = 0;
          void 0 !== (c = a[i]);
          i++
        ) {
          if (
            ab.acceptData(c) &&
            ((f = c[rb.expando]), f && (b = rb.cache[f]))
          ) {
            if (((d = Object.keys(b.events || {})), d.length))
              for (g = 0; void 0 !== (e = d[g]); g++)
                h[e] ? ab.event.remove(c, e) : ab.removeEvent(c, e, b.handle);
            rb.cache[f] && delete rb.cache[f];
          }
          delete sb.cache[c[sb.expando]];
        }
      },
    }),
    ab.fn.extend({
      text: function (a) {
        return qb(
          this,
          function (a) {
            return void 0 === a
              ? ab.text(this)
              : this.empty().each(function () {
                  (1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType) &&
                    (this.textContent = a);
                });
          },
          null,
          a,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = m(this, a);
            b.appendChild(a);
          }
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (a) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var b = m(this, a);
            b.insertBefore(a, b.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
        });
      },
      remove: function (a, b) {
        for (
          var c, d = a ? ab.filter(a, this) : this, e = 0;
          null != (c = d[e]);
          e++
        )
          b || 1 !== c.nodeType || ab.cleanData(r(c)),
            c.parentNode &&
              (b && ab.contains(c.ownerDocument, c) && p(r(c, "script")),
              c.parentNode.removeChild(c));
        return this;
      },
      empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++)
          1 === a.nodeType && (ab.cleanData(r(a, !1)), (a.textContent = ""));
        return this;
      },
      clone: function (a, b) {
        return (
          (a = null == a ? !1 : a),
          (b = null == b ? a : b),
          this.map(function () {
            return ab.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return qb(
          this,
          function (a) {
            var b = this[0] || {},
              c = 0,
              d = this.length;
            if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
            if (
              "string" == typeof a &&
              !Hb.test(a) &&
              !Mb[(Fb.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = a.replace(Eb, "<$1></$2>");
              try {
                for (; d > c; c++)
                  (b = this[c] || {}),
                    1 === b.nodeType &&
                      (ab.cleanData(r(b, !1)), (b.innerHTML = a));
                b = 0;
              } catch (e) {}
            }
            b && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function () {
        var a = arguments[0];
        return (
          this.domManip(arguments, function (b) {
            (a = this.parentNode),
              ab.cleanData(r(this)),
              a && a.replaceChild(b, this);
          }),
          a && (a.length || a.nodeType) ? this : this.remove()
        );
      },
      detach: function (a) {
        return this.remove(a, !0);
      },
      domManip: function (a, b) {
        a = S.apply([], a);
        var c,
          d,
          e,
          f,
          g,
          h,
          i = 0,
          j = this.length,
          k = this,
          l = j - 1,
          m = a[0],
          p = ab.isFunction(m);
        if (p || (j > 1 && "string" == typeof m && !Z.checkClone && Ib.test(m)))
          return this.each(function (c) {
            var d = k.eq(c);
            p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b);
          });
        if (
          j &&
          ((c = ab.buildFragment(a, this[0].ownerDocument, !1, this)),
          (d = c.firstChild),
          1 === c.childNodes.length && (c = d),
          d)
        ) {
          for (e = ab.map(r(c, "script"), n), f = e.length; j > i; i++)
            (g = c),
              i !== l &&
                ((g = ab.clone(g, !0, !0)), f && ab.merge(e, r(g, "script"))),
              b.call(this[i], g, i);
          if (f)
            for (
              h = e[e.length - 1].ownerDocument, ab.map(e, o), i = 0;
              f > i;
              i++
            )
              (g = e[i]),
                Jb.test(g.type || "") &&
                  !rb.access(g, "globalEval") &&
                  ab.contains(h, g) &&
                  (g.src
                    ? ab._evalUrl && ab._evalUrl(g.src)
                    : ab.globalEval(g.textContent.replace(Lb, "")));
        }
        return this;
      },
    }),
    ab.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        ab.fn[a] = function (a) {
          for (var c, d = [], e = ab(a), f = e.length - 1, g = 0; f >= g; g++)
            (c = g === f ? this : this.clone(!0)),
              ab(e[g])[b](c),
              T.apply(d, c.get());
          return this.pushStack(d);
        };
      }
    );
  var Nb,
    Ob = {},
    Pb = /^margin/,
    Qb = new RegExp("^(" + vb + ")(?!px)[a-z%]+$", "i"),
    Rb = function (a) {
      return a.ownerDocument.defaultView.getComputedStyle(a, null);
    };
  !(function () {
    function b() {
      (h.style.cssText =
        "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%"),
        f.appendChild(g);
      var b = a.getComputedStyle(h, null);
      (c = "1%" !== b.top), (d = "4px" === b.width), f.removeChild(g);
    }
    var c,
      d,
      e =
        "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
      f = $.documentElement,
      g = $.createElement("div"),
      h = $.createElement("div");
    (h.style.backgroundClip = "content-box"),
      (h.cloneNode(!0).style.backgroundClip = ""),
      (Z.clearCloneStyle = "content-box" === h.style.backgroundClip),
      (g.style.cssText =
        "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
      g.appendChild(h),
      a.getComputedStyle &&
        ab.extend(Z, {
          pixelPosition: function () {
            return b(), c;
          },
          boxSizingReliable: function () {
            return null == d && b(), d;
          },
          reliableMarginRight: function () {
            var b,
              c = h.appendChild($.createElement("div"));
            return (
              (c.style.cssText = h.style.cssText = e),
              (c.style.marginRight = c.style.width = "0"),
              (h.style.width = "1px"),
              f.appendChild(g),
              (b = !parseFloat(a.getComputedStyle(c, null).marginRight)),
              f.removeChild(g),
              (h.innerHTML = ""),
              b
            );
          },
        });
  })(),
    (ab.swap = function (a, b, c, d) {
      var e,
        f,
        g = {};
      for (f in b) (g[f] = a.style[f]), (a.style[f] = b[f]);
      e = c.apply(a, d || []);
      for (f in b) a.style[f] = g[f];
      return e;
    });
  var Sb = /^(none|table(?!-c[ea]).+)/,
    Tb = new RegExp("^(" + vb + ")(.*)$", "i"),
    Ub = new RegExp("^([+-])=(" + vb + ")", "i"),
    Vb = { position: "absolute", visibility: "hidden", display: "block" },
    Wb = { letterSpacing: 0, fontWeight: 400 },
    Xb = ["Webkit", "O", "Moz", "ms"];
  ab.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = v(a, "opacity");
            return "" === c ? "1" : c;
          }
        },
      },
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
          f,
          g,
          h = ab.camelCase(b),
          i = a.style;
        return (
          (b = ab.cssProps[h] || (ab.cssProps[h] = x(i, h))),
          (g = ab.cssHooks[b] || ab.cssHooks[h]),
          void 0 === c
            ? g && "get" in g && void 0 !== (e = g.get(a, !1, d))
              ? e
              : i[b]
            : ((f = typeof c),
              "string" === f &&
                (e = Ub.exec(c)) &&
                ((c = (e[1] + 1) * e[2] + parseFloat(ab.css(a, b))),
                (f = "number")),
              null != c &&
                c === c &&
                ("number" !== f || ab.cssNumber[h] || (c += "px"),
                Z.clearCloneStyle ||
                  "" !== c ||
                  0 !== b.indexOf("background") ||
                  (i[b] = "inherit"),
                (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                  ((i[b] = ""), (i[b] = c))),
              void 0)
        );
      }
    },
    css: function (a, b, c, d) {
      var e,
        f,
        g,
        h = ab.camelCase(b);
      return (
        (b = ab.cssProps[h] || (ab.cssProps[h] = x(a.style, h))),
        (g = ab.cssHooks[b] || ab.cssHooks[h]),
        g && "get" in g && (e = g.get(a, !0, c)),
        void 0 === e && (e = v(a, b, d)),
        "normal" === e && b in Wb && (e = Wb[b]),
        "" === c || c
          ? ((f = parseFloat(e)), c === !0 || ab.isNumeric(f) ? f || 0 : e)
          : e
      );
    },
  }),
    ab.each(["height", "width"], function (a, b) {
      ab.cssHooks[b] = {
        get: function (a, c, d) {
          return c
            ? 0 === a.offsetWidth && Sb.test(ab.css(a, "display"))
              ? ab.swap(a, Vb, function () {
                  return A(a, b, d);
                })
              : A(a, b, d)
            : void 0;
        },
        set: function (a, c, d) {
          var e = d && Rb(a);
          return y(
            a,
            c,
            d
              ? z(a, b, d, "border-box" === ab.css(a, "boxSizing", !1, e), e)
              : 0
          );
        },
      };
    }),
    (ab.cssHooks.marginRight = w(Z.reliableMarginRight, function (a, b) {
      return b
        ? ab.swap(a, { display: "inline-block" }, v, [a, "marginRight"])
        : void 0;
    })),
    ab.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (ab.cssHooks[a + b] = {
        expand: function (c) {
          for (
            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c];
            4 > d;
            d++
          )
            e[a + wb[d] + b] = f[d] || f[d - 2] || f[0];
          return e;
        },
      }),
        Pb.test(a) || (ab.cssHooks[a + b].set = y);
    }),
    ab.fn.extend({
      css: function (a, b) {
        return qb(
          this,
          function (a, b, c) {
            var d,
              e,
              f = {},
              g = 0;
            if (ab.isArray(b)) {
              for (d = Rb(a), e = b.length; e > g; g++)
                f[b[g]] = ab.css(a, b[g], !1, d);
              return f;
            }
            return void 0 !== c ? ab.style(a, b, c) : ab.css(a, b);
          },
          a,
          b,
          arguments.length > 1
        );
      },
      show: function () {
        return B(this, !0);
      },
      hide: function () {
        return B(this);
      },
      toggle: function (a) {
        return "boolean" == typeof a
          ? a
            ? this.show()
            : this.hide()
          : this.each(function () {
              xb(this) ? ab(this).show() : ab(this).hide();
            });
      },
    }),
    (ab.Tween = C),
    (C.prototype = {
      constructor: C,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || "swing"),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (ab.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = C.propHooks[this.prop];
        return a && a.get ? a.get(this) : C.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = C.propHooks[this.prop];
        return (
          (this.pos = b =
            this.options.duration
              ? ab.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                )
              : a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : C.propHooks._default.set(this),
          this
        );
      },
    }),
    (C.prototype.init.prototype = C.prototype),
    (C.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return null == a.elem[a.prop] ||
            (a.elem.style && null != a.elem.style[a.prop])
            ? ((b = ab.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0)
            : a.elem[a.prop];
        },
        set: function (a) {
          ab.fx.step[a.prop]
            ? ab.fx.step[a.prop](a)
            : a.elem.style &&
              (null != a.elem.style[ab.cssProps[a.prop]] || ab.cssHooks[a.prop])
            ? ab.style(a.elem, a.prop, a.now + a.unit)
            : (a.elem[a.prop] = a.now);
        },
      },
    }),
    (C.propHooks.scrollTop = C.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    (ab.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
    }),
    (ab.fx = C.prototype.init),
    (ab.fx.step = {});
  var Yb,
    Zb,
    $b = /^(?:toggle|show|hide)$/,
    _b = new RegExp("^(?:([+-])=|)(" + vb + ")([a-z%]*)$", "i"),
    ac = /queueHooks$/,
    bc = [G],
    cc = {
      "*": [
        function (a, b) {
          var c = this.createTween(a, b),
            d = c.cur(),
            e = _b.exec(b),
            f = (e && e[3]) || (ab.cssNumber[a] ? "" : "px"),
            g =
              (ab.cssNumber[a] || ("px" !== f && +d)) &&
              _b.exec(ab.css(c.elem, a)),
            h = 1,
            i = 20;
          if (g && g[3] !== f) {
            (f = f || g[3]), (e = e || []), (g = +d || 1);
            do (h = h || ".5"), (g /= h), ab.style(c.elem, a, g + f);
            while (h !== (h = c.cur() / d) && 1 !== h && --i);
          }
          return (
            e &&
              ((g = c.start = +g || +d || 0),
              (c.unit = f),
              (c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2])),
            c
          );
        },
      ],
    };
  (ab.Animation = ab.extend(I, {
    tweener: function (a, b) {
      ab.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.split(" "));
      for (var c, d = 0, e = a.length; e > d; d++)
        (c = a[d]), (cc[c] = cc[c] || []), cc[c].unshift(b);
    },
    prefilter: function (a, b) {
      b ? bc.unshift(a) : bc.push(a);
    },
  })),
    (ab.speed = function (a, b, c) {
      var d =
        a && "object" == typeof a
          ? ab.extend({}, a)
          : {
              complete: c || (!c && b) || (ab.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !ab.isFunction(b) && b),
            };
      return (
        (d.duration = ab.fx.off
          ? 0
          : "number" == typeof d.duration
          ? d.duration
          : d.duration in ab.fx.speeds
          ? ab.fx.speeds[d.duration]
          : ab.fx.speeds._default),
        (null == d.queue || d.queue === !0) && (d.queue = "fx"),
        (d.old = d.complete),
        (d.complete = function () {
          ab.isFunction(d.old) && d.old.call(this),
            d.queue && ab.dequeue(this, d.queue);
        }),
        d
      );
    }),
    ab.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(xb)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = ab.isEmptyObject(a),
          f = ab.speed(b, c, d),
          g = function () {
            var b = I(this, ab.extend({}, a), f);
            (e || rb.get(this, "finish")) && b.stop(!0);
          };
        return (
          (g.finish = g),
          e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        );
      },
      stop: function (a, b, c) {
        var d = function (a) {
          var b = a.stop;
          delete a.stop, b(c);
        };
        return (
          "string" != typeof a && ((c = b), (b = a), (a = void 0)),
          b && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              e = null != a && a + "queueHooks",
              f = ab.timers,
              g = rb.get(this);
            if (e) g[e] && g[e].stop && d(g[e]);
            else for (e in g) g[e] && g[e].stop && ac.test(e) && d(g[e]);
            for (e = f.length; e--; )
              f[e].elem !== this ||
                (null != a && f[e].queue !== a) ||
                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
            (b || !c) && ab.dequeue(this, a);
          })
        );
      },
      finish: function (a) {
        return (
          a !== !1 && (a = a || "fx"),
          this.each(function () {
            var b,
              c = rb.get(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = ab.timers,
              g = d ? d.length : 0;
            for (
              c.finish = !0,
                ab.queue(this, a, []),
                e && e.stop && e.stop.call(this, !0),
                b = f.length;
              b--;

            )
              f[b].elem === this &&
                f[b].queue === a &&
                (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)
              d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish;
          })
        );
      },
    }),
    ab.each(["toggle", "show", "hide"], function (a, b) {
      var c = ab.fn[b];
      ab.fn[b] = function (a, d, e) {
        return null == a || "boolean" == typeof a
          ? c.apply(this, arguments)
          : this.animate(E(b, !0), a, d, e);
      };
    }),
    ab.each(
      {
        slideDown: E("show"),
        slideUp: E("hide"),
        slideToggle: E("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        ab.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (ab.timers = []),
    (ab.fx.tick = function () {
      var a,
        b = 0,
        c = ab.timers;
      for (Yb = ab.now(); b < c.length; b++)
        (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
      c.length || ab.fx.stop(), (Yb = void 0);
    }),
    (ab.fx.timer = function (a) {
      ab.timers.push(a), a() ? ab.fx.start() : ab.timers.pop();
    }),
    (ab.fx.interval = 13),
    (ab.fx.start = function () {
      Zb || (Zb = setInterval(ab.fx.tick, ab.fx.interval));
    }),
    (ab.fx.stop = function () {
      clearInterval(Zb), (Zb = null);
    }),
    (ab.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (ab.fn.delay = function (a, b) {
      return (
        (a = ab.fx ? ab.fx.speeds[a] || a : a),
        (b = b || "fx"),
        this.queue(b, function (b, c) {
          var d = setTimeout(b, a);
          c.stop = function () {
            clearTimeout(d);
          };
        })
      );
    }),
    (function () {
      var a = $.createElement("input"),
        b = $.createElement("select"),
        c = b.appendChild($.createElement("option"));
      (a.type = "checkbox"),
        (Z.checkOn = "" !== a.value),
        (Z.optSelected = c.selected),
        (b.disabled = !0),
        (Z.optDisabled = !c.disabled),
        (a = $.createElement("input")),
        (a.value = "t"),
        (a.type = "radio"),
        (Z.radioValue = "t" === a.value);
    })();
  var dc,
    ec,
    fc = ab.expr.attrHandle;
  ab.fn.extend({
    attr: function (a, b) {
      return qb(this, ab.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        ab.removeAttr(this, a);
      });
    },
  }),
    ab.extend({
      attr: function (a, b, c) {
        var d,
          e,
          f = a.nodeType;
        if (a && 3 !== f && 8 !== f && 2 !== f)
          return typeof a.getAttribute === zb
            ? ab.prop(a, b, c)
            : ((1 === f && ab.isXMLDoc(a)) ||
                ((b = b.toLowerCase()),
                (d =
                  ab.attrHooks[b] || (ab.expr.match.bool.test(b) ? ec : dc))),
              void 0 === c
                ? d && "get" in d && null !== (e = d.get(a, b))
                  ? e
                  : ((e = ab.find.attr(a, b)), null == e ? void 0 : e)
                : null !== c
                ? d && "set" in d && void 0 !== (e = d.set(a, c, b))
                  ? e
                  : (a.setAttribute(b, c + ""), c)
                : void ab.removeAttr(a, b));
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e = 0,
          f = b && b.match(nb);
        if (f && 1 === a.nodeType)
          for (; (c = f[e++]); )
            (d = ab.propFix[c] || c),
              ab.expr.match.bool.test(c) && (a[d] = !1),
              a.removeAttribute(c);
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (!Z.radioValue && "radio" === b && ab.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
      },
    }),
    (ec = {
      set: function (a, b, c) {
        return b === !1 ? ab.removeAttr(a, c) : a.setAttribute(c, c), c;
      },
    }),
    ab.each(ab.expr.match.bool.source.match(/\w+/g), function (a, b) {
      var c = fc[b] || ab.find.attr;
      fc[b] = function (a, b, d) {
        var e, f;
        return (
          d ||
            ((f = fc[b]),
            (fc[b] = e),
            (e = null != c(a, b, d) ? b.toLowerCase() : null),
            (fc[b] = f)),
          e
        );
      };
    });
  var gc = /^(?:input|select|textarea|button)$/i;
  ab.fn.extend({
    prop: function (a, b) {
      return qb(this, ab.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return this.each(function () {
        delete this[ab.propFix[a] || a];
      });
    },
  }),
    ab.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (a, b, c) {
        var d,
          e,
          f,
          g = a.nodeType;
        if (a && 3 !== g && 8 !== g && 2 !== g)
          return (
            (f = 1 !== g || !ab.isXMLDoc(a)),
            f && ((b = ab.propFix[b] || b), (e = ab.propHooks[b])),
            void 0 !== c
              ? e && "set" in e && void 0 !== (d = e.set(a, c, b))
                ? d
                : (a[b] = c)
              : e && "get" in e && null !== (d = e.get(a, b))
              ? d
              : a[b]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            return a.hasAttribute("tabindex") || gc.test(a.nodeName) || a.href
              ? a.tabIndex
              : -1;
          },
        },
      },
    }),
    Z.optSelected ||
      (ab.propHooks.selected = {
        get: function (a) {
          var b = a.parentNode;
          return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
      }),
    ab.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        ab.propFix[this.toLowerCase()] = this;
      }
    );
  var hc = /[\t\r\n\f]/g;
  ab.fn.extend({
    addClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = "string" == typeof a && a,
        i = 0,
        j = this.length;
      if (ab.isFunction(a))
        return this.each(function (b) {
          ab(this).addClass(a.call(this, b, this.className));
        });
      if (h)
        for (b = (a || "").match(nb) || []; j > i; i++)
          if (
            ((c = this[i]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(hc, " ") : " ")))
          ) {
            for (f = 0; (e = b[f++]); )
              d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            (g = ab.trim(d)), c.className !== g && (c.className = g);
          }
      return this;
    },
    removeClass: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = 0 === arguments.length || ("string" == typeof a && a),
        i = 0,
        j = this.length;
      if (ab.isFunction(a))
        return this.each(function (b) {
          ab(this).removeClass(a.call(this, b, this.className));
        });
      if (h)
        for (b = (a || "").match(nb) || []; j > i; i++)
          if (
            ((c = this[i]),
            (d =
              1 === c.nodeType &&
              (c.className ? (" " + c.className + " ").replace(hc, " ") : "")))
          ) {
            for (f = 0; (e = b[f++]); )
              for (; d.indexOf(" " + e + " ") >= 0; )
                d = d.replace(" " + e + " ", " ");
            (g = a ? ab.trim(d) : ""), c.className !== g && (c.className = g);
          }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c
        ? b
          ? this.addClass(a)
          : this.removeClass(a)
        : this.each(
            ab.isFunction(a)
              ? function (c) {
                  ab(this).toggleClass(a.call(this, c, this.className, b), b);
                }
              : function () {
                  if ("string" === c)
                    for (
                      var b, d = 0, e = ab(this), f = a.match(nb) || [];
                      (b = f[d++]);

                    )
                      e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                  else
                    (c === zb || "boolean" === c) &&
                      (this.className &&
                        rb.set(this, "__className__", this.className),
                      (this.className =
                        this.className || a === !1
                          ? ""
                          : rb.get(this, "__className__") || ""));
                }
          );
    },
    hasClass: function (a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
        if (
          1 === this[c].nodeType &&
          (" " + this[c].className + " ").replace(hc, " ").indexOf(b) >= 0
        )
          return !0;
      return !1;
    },
  });
  var ic = /\r/g;
  ab.fn.extend({
    val: function (a) {
      var b,
        c,
        d,
        e = this[0];
      {
        if (arguments.length)
          return (
            (d = ab.isFunction(a)),
            this.each(function (c) {
              var e;
              1 === this.nodeType &&
                ((e = d ? a.call(this, c, ab(this).val()) : a),
                null == e
                  ? (e = "")
                  : "number" == typeof e
                  ? (e += "")
                  : ab.isArray(e) &&
                    (e = ab.map(e, function (a) {
                      return null == a ? "" : a + "";
                    })),
                (b =
                  ab.valHooks[this.type] ||
                  ab.valHooks[this.nodeName.toLowerCase()]),
                (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                  (this.value = e));
            })
          );
        if (e)
          return (
            (b = ab.valHooks[e.type] || ab.valHooks[e.nodeName.toLowerCase()]),
            b && "get" in b && void 0 !== (c = b.get(e, "value"))
              ? c
              : ((c = e.value),
                "string" == typeof c ? c.replace(ic, "") : null == c ? "" : c)
          );
      }
    },
  }),
    ab.extend({
      valHooks: {
        select: {
          get: function (a) {
            for (
              var b,
                c,
                d = a.options,
                e = a.selectedIndex,
                f = "select-one" === a.type || 0 > e,
                g = f ? null : [],
                h = f ? e + 1 : d.length,
                i = 0 > e ? h : f ? e : 0;
              h > i;
              i++
            )
              if (
                ((c = d[i]),
                !(
                  (!c.selected && i !== e) ||
                  (Z.optDisabled
                    ? c.disabled
                    : null !== c.getAttribute("disabled")) ||
                  (c.parentNode.disabled &&
                    ab.nodeName(c.parentNode, "optgroup"))
                ))
              ) {
                if (((b = ab(c).val()), f)) return b;
                g.push(b);
              }
            return g;
          },
          set: function (a, b) {
            for (
              var c, d, e = a.options, f = ab.makeArray(b), g = e.length;
              g--;

            )
              (d = e[g]),
                (d.selected = ab.inArray(ab(d).val(), f) >= 0) && (c = !0);
            return c || (a.selectedIndex = -1), f;
          },
        },
      },
    }),
    ab.each(["radio", "checkbox"], function () {
      (ab.valHooks[this] = {
        set: function (a, b) {
          return ab.isArray(b)
            ? (a.checked = ab.inArray(ab(a).val(), b) >= 0)
            : void 0;
        },
      }),
        Z.checkOn ||
          (ab.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
          });
    }),
    ab.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, b) {
        ab.fn[b] = function (a, c) {
          return arguments.length > 0
            ? this.on(b, null, a, c)
            : this.trigger(b);
        };
      }
    ),
    ab.fn.extend({
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return 1 === arguments.length
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
    });
  var jc = ab.now(),
    kc = /\?/;
  (ab.parseJSON = function (a) {
    return JSON.parse(a + "");
  }),
    (ab.parseXML = function (a) {
      var b, c;
      if (!a || "string" != typeof a) return null;
      try {
        (c = new DOMParser()), (b = c.parseFromString(a, "text/xml"));
      } catch (d) {
        b = void 0;
      }
      return (
        (!b || b.getElementsByTagName("parsererror").length) &&
          ab.error("Invalid XML: " + a),
        b
      );
    });
  var lc,
    mc,
    nc = /#.*$/,
    oc = /([?&])_=[^&]*/,
    pc = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    qc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    rc = /^(?:GET|HEAD)$/,
    sc = /^\/\//,
    tc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    uc = {},
    vc = {},
    wc = "*/".concat("*");
  try {
    mc = location.href;
  } catch (xc) {
    (mc = $.createElement("a")), (mc.href = ""), (mc = mc.href);
  }
  (lc = tc.exec(mc.toLowerCase()) || []),
    ab.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: mc,
        type: "GET",
        isLocal: qc.test(lc[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": wc,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": ab.parseJSON,
          "text xml": ab.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (a, b) {
        return b ? L(L(a, ab.ajaxSettings), b) : L(ab.ajaxSettings, a);
      },
      ajaxPrefilter: J(uc),
      ajaxTransport: J(vc),
      ajax: function (a, b) {
        function c(a, b, c, g) {
          var i,
            k,
            r,
            s,
            u,
            w = b;
          2 !== t &&
            ((t = 2),
            h && clearTimeout(h),
            (d = void 0),
            (f = g || ""),
            (v.readyState = a > 0 ? 4 : 0),
            (i = (a >= 200 && 300 > a) || 304 === a),
            c && (s = M(l, v, c)),
            (s = N(l, s, v, i)),
            i
              ? (l.ifModified &&
                  ((u = v.getResponseHeader("Last-Modified")),
                  u && (ab.lastModified[e] = u),
                  (u = v.getResponseHeader("etag")),
                  u && (ab.etag[e] = u)),
                204 === a || "HEAD" === l.type
                  ? (w = "nocontent")
                  : 304 === a
                  ? (w = "notmodified")
                  : ((w = s.state), (k = s.data), (r = s.error), (i = !r)))
              : ((r = w), (a || !w) && ((w = "error"), 0 > a && (a = 0))),
            (v.status = a),
            (v.statusText = (b || w) + ""),
            i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]),
            v.statusCode(q),
            (q = void 0),
            j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]),
            p.fireWith(m, [v, w]),
            j &&
              (n.trigger("ajaxComplete", [v, l]),
              --ab.active || ab.event.trigger("ajaxStop")));
        }
        "object" == typeof a && ((b = a), (a = void 0)), (b = b || {});
        var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = ab.ajaxSetup({}, b),
          m = l.context || l,
          n = l.context && (m.nodeType || m.jquery) ? ab(m) : ab.event,
          o = ab.Deferred(),
          p = ab.Callbacks("once memory"),
          q = l.statusCode || {},
          r = {},
          s = {},
          t = 0,
          u = "canceled",
          v = {
            readyState: 0,
            getResponseHeader: function (a) {
              var b;
              if (2 === t) {
                if (!g)
                  for (g = {}; (b = pc.exec(f)); ) g[b[1].toLowerCase()] = b[2];
                b = g[a.toLowerCase()];
              }
              return null == b ? null : b;
            },
            getAllResponseHeaders: function () {
              return 2 === t ? f : null;
            },
            setRequestHeader: function (a, b) {
              var c = a.toLowerCase();
              return t || ((a = s[c] = s[c] || a), (r[a] = b)), this;
            },
            overrideMimeType: function (a) {
              return t || (l.mimeType = a), this;
            },
            statusCode: function (a) {
              var b;
              if (a)
                if (2 > t) for (b in a) q[b] = [q[b], a[b]];
                else v.always(a[v.status]);
              return this;
            },
            abort: function (a) {
              var b = a || u;
              return d && d.abort(b), c(0, b), this;
            },
          };
        if (
          ((o.promise(v).complete = p.add),
          (v.success = v.done),
          (v.error = v.fail),
          (l.url = ((a || l.url || mc) + "")
            .replace(nc, "")
            .replace(sc, lc[1] + "//")),
          (l.type = b.method || b.type || l.method || l.type),
          (l.dataTypes = ab
            .trim(l.dataType || "*")
            .toLowerCase()
            .match(nb) || [""]),
          null == l.crossDomain &&
            ((i = tc.exec(l.url.toLowerCase())),
            (l.crossDomain = !(
              !i ||
              (i[1] === lc[1] &&
                i[2] === lc[2] &&
                (i[3] || ("http:" === i[1] ? "80" : "443")) ===
                  (lc[3] || ("http:" === lc[1] ? "80" : "443")))
            ))),
          l.data &&
            l.processData &&
            "string" != typeof l.data &&
            (l.data = ab.param(l.data, l.traditional)),
          K(uc, l, b, v),
          2 === t)
        )
          return v;
        (j = l.global),
          j && 0 === ab.active++ && ab.event.trigger("ajaxStart"),
          (l.type = l.type.toUpperCase()),
          (l.hasContent = !rc.test(l.type)),
          (e = l.url),
          l.hasContent ||
            (l.data &&
              ((e = l.url += (kc.test(e) ? "&" : "?") + l.data), delete l.data),
            l.cache === !1 &&
              (l.url = oc.test(e)
                ? e.replace(oc, "$1_=" + jc++)
                : e + (kc.test(e) ? "&" : "?") + "_=" + jc++)),
          l.ifModified &&
            (ab.lastModified[e] &&
              v.setRequestHeader("If-Modified-Since", ab.lastModified[e]),
            ab.etag[e] && v.setRequestHeader("If-None-Match", ab.etag[e])),
          ((l.data && l.hasContent && l.contentType !== !1) || b.contentType) &&
            v.setRequestHeader("Content-Type", l.contentType),
          v.setRequestHeader(
            "Accept",
            l.dataTypes[0] && l.accepts[l.dataTypes[0]]
              ? l.accepts[l.dataTypes[0]] +
                  ("*" !== l.dataTypes[0] ? ", " + wc + "; q=0.01" : "")
              : l.accepts["*"]
          );
        for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
        if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t))
          return v.abort();
        u = "abort";
        for (k in { success: 1, error: 1, complete: 1 }) v[k](l[k]);
        if ((d = K(vc, l, b, v))) {
          (v.readyState = 1),
            j && n.trigger("ajaxSend", [v, l]),
            l.async &&
              l.timeout > 0 &&
              (h = setTimeout(function () {
                v.abort("timeout");
              }, l.timeout));
          try {
            (t = 1), d.send(r, c);
          } catch (w) {
            if (!(2 > t)) throw w;
            c(-1, w);
          }
        } else c(-1, "No Transport");
        return v;
      },
      getJSON: function (a, b, c) {
        return ab.get(a, b, c, "json");
      },
      getScript: function (a, b) {
        return ab.get(a, void 0, b, "script");
      },
    }),
    ab.each(["get", "post"], function (a, b) {
      ab[b] = function (a, c, d, e) {
        return (
          ab.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
          ab.ajax({ url: a, type: b, dataType: e, data: c, success: d })
        );
      };
    }),
    ab.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (a, b) {
        ab.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    (ab._evalUrl = function (a) {
      return ab.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    ab.fn.extend({
      wrapAll: function (a) {
        var b;
        return ab.isFunction(a)
          ? this.each(function (b) {
              ab(this).wrapAll(a.call(this, b));
            })
          : (this[0] &&
              ((b = ab(a, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && b.insertBefore(this[0]),
              b
                .map(function () {
                  for (var a = this; a.firstElementChild; )
                    a = a.firstElementChild;
                  return a;
                })
                .append(this)),
            this);
      },
      wrapInner: function (a) {
        return this.each(
          ab.isFunction(a)
            ? function (b) {
                ab(this).wrapInner(a.call(this, b));
              }
            : function () {
                var b = ab(this),
                  c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
              }
        );
      },
      wrap: function (a) {
        var b = ab.isFunction(a);
        return this.each(function (c) {
          ab(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            ab.nodeName(this, "body") || ab(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (ab.expr.filters.hidden = function (a) {
      return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }),
    (ab.expr.filters.visible = function (a) {
      return !ab.expr.filters.hidden(a);
    });
  var yc = /%20/g,
    zc = /\[\]$/,
    Ac = /\r?\n/g,
    Bc = /^(?:submit|button|image|reset|file)$/i,
    Cc = /^(?:input|select|textarea|keygen)/i;
  (ab.param = function (a, b) {
    var c,
      d = [],
      e = function (a, b) {
        (b = ab.isFunction(b) ? b() : null == b ? "" : b),
          (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
      };
    if (
      (void 0 === b && (b = ab.ajaxSettings && ab.ajaxSettings.traditional),
      ab.isArray(a) || (a.jquery && !ab.isPlainObject(a)))
    )
      ab.each(a, function () {
        e(this.name, this.value);
      });
    else for (c in a) O(c, a[c], b, e);
    return d.join("&").replace(yc, "+");
  }),
    ab.fn.extend({
      serialize: function () {
        return ab.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var a = ab.prop(this, "elements");
          return a ? ab.makeArray(a) : this;
        })
          .filter(function () {
            var a = this.type;
            return (
              this.name &&
              !ab(this).is(":disabled") &&
              Cc.test(this.nodeName) &&
              !Bc.test(a) &&
              (this.checked || !yb.test(a))
            );
          })
          .map(function (a, b) {
            var c = ab(this).val();
            return null == c
              ? null
              : ab.isArray(c)
              ? ab.map(c, function (a) {
                  return { name: b.name, value: a.replace(Ac, "\r\n") };
                })
              : { name: b.name, value: c.replace(Ac, "\r\n") };
          })
          .get();
      },
    }),
    (ab.ajaxSettings.xhr = function () {
      try {
        return new XMLHttpRequest();
      } catch (a) {}
    });
  var Dc = 0,
    Ec = {},
    Fc = { 0: 200, 1223: 204 },
    Gc = ab.ajaxSettings.xhr();
  a.ActiveXObject &&
    ab(a).on("unload", function () {
      for (var a in Ec) Ec[a]();
    }),
    (Z.cors = !!Gc && "withCredentials" in Gc),
    (Z.ajax = Gc = !!Gc),
    ab.ajaxTransport(function (a) {
      var b;
      return Z.cors || (Gc && !a.crossDomain)
        ? {
            send: function (c, d) {
              var e,
                f = a.xhr(),
                g = ++Dc;
              if (
                (f.open(a.type, a.url, a.async, a.username, a.password),
                a.xhrFields)
              )
                for (e in a.xhrFields) f[e] = a.xhrFields[e];
              a.mimeType &&
                f.overrideMimeType &&
                f.overrideMimeType(a.mimeType),
                a.crossDomain ||
                  c["X-Requested-With"] ||
                  (c["X-Requested-With"] = "XMLHttpRequest");
              for (e in c) f.setRequestHeader(e, c[e]);
              (b = function (a) {
                return function () {
                  b &&
                    (delete Ec[g],
                    (b = f.onload = f.onerror = null),
                    "abort" === a
                      ? f.abort()
                      : "error" === a
                      ? d(f.status, f.statusText)
                      : d(
                          Fc[f.status] || f.status,
                          f.statusText,
                          "string" == typeof f.responseText
                            ? { text: f.responseText }
                            : void 0,
                          f.getAllResponseHeaders()
                        ));
                };
              }),
                (f.onload = b()),
                (f.onerror = b("error")),
                (b = Ec[g] = b("abort")),
                f.send((a.hasContent && a.data) || null);
            },
            abort: function () {
              b && b();
            },
          }
        : void 0;
    }),
    ab.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (a) {
          return ab.globalEval(a), a;
        },
      },
    }),
    ab.ajaxPrefilter("script", function (a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }),
    ab.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var b, c;
        return {
          send: function (d, e) {
            (b = ab("<script>")
              .prop({ async: !0, charset: a.scriptCharset, src: a.url })
              .on(
                "load error",
                (c = function (a) {
                  b.remove(),
                    (c = null),
                    a && e("error" === a.type ? 404 : 200, a.type);
                })
              )),
              $.head.appendChild(b[0]);
          },
          abort: function () {
            c && c();
          },
        };
      }
    });
  var Hc = [],
    Ic = /(=)\?(?=&|$)|\?\?/;
  ab.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = Hc.pop() || ab.expando + "_" + jc++;
      return (this[a] = !0), a;
    },
  }),
    ab.ajaxPrefilter("json jsonp", function (b, c, d) {
      var e,
        f,
        g,
        h =
          b.jsonp !== !1 &&
          (Ic.test(b.url)
            ? "url"
            : "string" == typeof b.data &&
              !(b.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              Ic.test(b.data) &&
              "data");
      return h || "jsonp" === b.dataTypes[0]
        ? ((e = b.jsonpCallback =
            ab.isFunction(b.jsonpCallback)
              ? b.jsonpCallback()
              : b.jsonpCallback),
          h
            ? (b[h] = b[h].replace(Ic, "$1" + e))
            : b.jsonp !== !1 &&
              (b.url += (kc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
          (b.converters["script json"] = function () {
            return g || ab.error(e + " was not called"), g[0];
          }),
          (b.dataTypes[0] = "json"),
          (f = a[e]),
          (a[e] = function () {
            g = arguments;
          }),
          d.always(function () {
            (a[e] = f),
              b[e] && ((b.jsonpCallback = c.jsonpCallback), Hc.push(e)),
              g && ab.isFunction(f) && f(g[0]),
              (g = f = void 0);
          }),
          "script")
        : void 0;
    }),
    (ab.parseHTML = function (a, b, c) {
      if (!a || "string" != typeof a) return null;
      "boolean" == typeof b && ((c = b), (b = !1)), (b = b || $);
      var d = gb.exec(a),
        e = !c && [];
      return d
        ? [b.createElement(d[1])]
        : ((d = ab.buildFragment([a], b, e)),
          e && e.length && ab(e).remove(),
          ab.merge([], d.childNodes));
    });
  var Jc = ab.fn.load;
  (ab.fn.load = function (a, b, c) {
    if ("string" != typeof a && Jc) return Jc.apply(this, arguments);
    var d,
      e,
      f,
      g = this,
      h = a.indexOf(" ");
    return (
      h >= 0 && ((d = a.slice(h)), (a = a.slice(0, h))),
      ab.isFunction(b)
        ? ((c = b), (b = void 0))
        : b && "object" == typeof b && (e = "POST"),
      g.length > 0 &&
        ab
          .ajax({ url: a, type: e, dataType: "html", data: b })
          .done(function (a) {
            (f = arguments),
              g.html(d ? ab("<div>").append(ab.parseHTML(a)).find(d) : a);
          })
          .complete(
            c &&
              function (a, b) {
                g.each(c, f || [a.responseText, b, a]);
              }
          ),
      this
    );
  }),
    (ab.expr.filters.animated = function (a) {
      return ab.grep(ab.timers, function (b) {
        return a === b.elem;
      }).length;
    });
  var Kc = a.document.documentElement;
  (ab.offset = {
    setOffset: function (a, b, c) {
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k = ab.css(a, "position"),
        l = ab(a),
        m = {};
      "static" === k && (a.style.position = "relative"),
        (h = l.offset()),
        (f = ab.css(a, "top")),
        (i = ab.css(a, "left")),
        (j =
          ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1),
        j
          ? ((d = l.position()), (g = d.top), (e = d.left))
          : ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
        ab.isFunction(b) && (b = b.call(a, c, h)),
        null != b.top && (m.top = b.top - h.top + g),
        null != b.left && (m.left = b.left - h.left + e),
        "using" in b ? b.using.call(a, m) : l.css(m);
    },
  }),
    ab.fn.extend({
      offset: function (a) {
        if (arguments.length)
          return void 0 === a
            ? this
            : this.each(function (b) {
                ab.offset.setOffset(this, a, b);
              });
        var b,
          c,
          d = this[0],
          e = { top: 0, left: 0 },
          f = d && d.ownerDocument;
        if (f)
          return (
            (b = f.documentElement),
            ab.contains(b, d)
              ? (typeof d.getBoundingClientRect !== zb &&
                  (e = d.getBoundingClientRect()),
                (c = P(f)),
                {
                  top: e.top + c.pageYOffset - b.clientTop,
                  left: e.left + c.pageXOffset - b.clientLeft,
                })
              : e
          );
      },
      position: function () {
        if (this[0]) {
          var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };
          return (
            "fixed" === ab.css(c, "position")
              ? (b = c.getBoundingClientRect())
              : ((a = this.offsetParent()),
                (b = this.offset()),
                ab.nodeName(a[0], "html") || (d = a.offset()),
                (d.top += ab.css(a[0], "borderTopWidth", !0)),
                (d.left += ab.css(a[0], "borderLeftWidth", !0))),
            {
              top: b.top - d.top - ab.css(c, "marginTop", !0),
              left: b.left - d.left - ab.css(c, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var a = this.offsetParent || Kc;
            a && !ab.nodeName(a, "html") && "static" === ab.css(a, "position");

          )
            a = a.offsetParent;
          return a || Kc;
        });
      },
    }),
    ab.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (b, c) {
        var d = "pageYOffset" === c;
        ab.fn[b] = function (e) {
          return qb(
            this,
            function (b, e, f) {
              var g = P(b);
              return void 0 === f
                ? g
                  ? g[c]
                  : b[e]
                : void (g
                    ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset)
                    : (b[e] = f));
            },
            b,
            e,
            arguments.length,
            null
          );
        };
      }
    ),
    ab.each(["top", "left"], function (a, b) {
      ab.cssHooks[b] = w(Z.pixelPosition, function (a, c) {
        return c
          ? ((c = v(a, b)), Qb.test(c) ? ab(a).position()[b] + "px" : c)
          : void 0;
      });
    }),
    ab.each({ Height: "height", Width: "width" }, function (a, b) {
      ab.each(
        { padding: "inner" + a, content: b, "": "outer" + a },
        function (c, d) {
          ab.fn[d] = function (d, e) {
            var f = arguments.length && (c || "boolean" != typeof d),
              g = c || (d === !0 || e === !0 ? "margin" : "border");
            return qb(
              this,
              function (b, c, d) {
                var e;
                return ab.isWindow(b)
                  ? b.document.documentElement["client" + a]
                  : 9 === b.nodeType
                  ? ((e = b.documentElement),
                    Math.max(
                      b.body["scroll" + a],
                      e["scroll" + a],
                      b.body["offset" + a],
                      e["offset" + a],
                      e["client" + a]
                    ))
                  : void 0 === d
                  ? ab.css(b, c, g)
                  : ab.style(b, c, d, g);
              },
              b,
              f ? d : void 0,
              f,
              null
            );
          };
        }
      );
    }),
    (ab.fn.size = function () {
      return this.length;
    }),
    (ab.fn.andSelf = ab.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return ab;
      });
  var Lc = a.jQuery,
    Mc = a.$;
  return (
    (ab.noConflict = function (b) {
      return (
        a.$ === ab && (a.$ = Mc), b && a.jQuery === ab && (a.jQuery = Lc), ab
      );
    }),
    typeof b === zb && (a.jQuery = a.$ = ab),
    ab
  );
}),
  function () {
    function a(a, b, c) {
      c = (c || 0) - 1;
      for (var d = a ? a.length : 0; ++c < d; ) if (a[c] === b) return c;
      return -1;
    }
    function b(b, c) {
      var d = typeof c;
      if (((b = b.l), "boolean" == d || null == c)) return b[c] ? 0 : -1;
      "number" != d && "string" != d && (d = "object");
      var e = "number" == d ? c : r + c;
      return (
        (b = (b = b[d]) && b[e]),
        "object" == d ? (b && -1 < a(b, c) ? 0 : -1) : b ? 0 : -1
      );
    }
    function c(a) {
      var b = this.l,
        c = typeof a;
      if ("boolean" == c || null == a) b[a] = !0;
      else {
        "number" != c && "string" != c && (c = "object");
        var d = "number" == c ? a : r + a,
          b = b[c] || (b[c] = {});
        "object" == c ? (b[d] || (b[d] = [])).push(a) : (b[d] = !0);
      }
    }
    function d(a) {
      return a.charCodeAt(0);
    }
    function e(a, b) {
      for (var c = a.m, d = b.m, e = -1, f = c.length; ++e < f; ) {
        var g = c[e],
          h = d[e];
        if (g !== h) {
          if (g > h || "undefined" == typeof g) return 1;
          if (h > g || "undefined" == typeof h) return -1;
        }
      }
      return a.n - b.n;
    }
    function f(a) {
      var b = -1,
        d = a.length,
        e = a[0],
        f = a[(d / 2) | 0],
        g = a[d - 1];
      if (
        e &&
        "object" == typeof e &&
        f &&
        "object" == typeof f &&
        g &&
        "object" == typeof g
      )
        return !1;
      for (
        e = i(),
          e["false"] = e["null"] = e["true"] = e.undefined = !1,
          f = i(),
          f.k = a,
          f.l = e,
          f.push = c;
        ++b < d;

      )
        f.push(a[b]);
      return f;
    }
    function g(a) {
      return "\\" + U[a];
    }
    function h() {
      return o.pop() || [];
    }
    function i() {
      return (
        p.pop() || {
          k: null,
          l: null,
          m: null,
          false: !1,
          n: 0,
          null: !1,
          number: null,
          object: null,
          push: null,
          string: null,
          true: !1,
          undefined: !1,
          o: null,
        }
      );
    }
    function j(a) {
      (a.length = 0), o.length < t && o.push(a);
    }
    function k(a) {
      var b = a.l;
      b && k(b),
        (a.k = a.l = a.m = a.object = a.number = a.string = a.o = null),
        p.length < t && p.push(a);
    }
    function l(a, b, c) {
      b || (b = 0), "undefined" == typeof c && (c = a ? a.length : 0);
      var d = -1;
      c = c - b || 0;
      for (var e = Array(0 > c ? 0 : c); ++d < c; ) e[d] = a[b + d];
      return e;
    }
    function m(c) {
      function o(a, b, c) {
        if (!a || !T[typeof a]) return a;
        b = b && "undefined" == typeof c ? b : bb(b, c, 3);
        for (
          var d = -1, e = T[typeof a] && Kc(a), f = e ? e.length : 0;
          ++d < f && ((c = e[d]), !1 !== b(a[c], c, a));

        );
        return a;
      }
      function p(a, b, c) {
        var d;
        if (!a || !T[typeof a]) return a;
        b = b && "undefined" == typeof c ? b : bb(b, c, 3);
        for (d in a) if (!1 === b(a[d], d, a)) break;
        return a;
      }
      function t(a, b, c) {
        var d,
          e = a,
          f = e;
        if (!e) return f;
        for (
          var g = arguments, h = 0, i = "number" == typeof c ? 2 : g.length;
          ++h < i;

        )
          if ((e = g[h]) && T[typeof e])
            for (
              var j = -1, k = T[typeof e] && Kc(e), l = k ? k.length : 0;
              ++j < l;

            )
              (d = k[j]), "undefined" == typeof f[d] && (f[d] = e[d]);
        return f;
      }
      function U(a, b, c) {
        var d,
          e = a,
          f = e;
        if (!e) return f;
        var g = arguments,
          h = 0,
          i = "number" == typeof c ? 2 : g.length;
        if (i > 3 && "function" == typeof g[i - 2])
          var j = bb(g[--i - 1], g[i--], 2);
        else i > 2 && "function" == typeof g[i - 1] && (j = g[--i]);
        for (; ++h < i; )
          if ((e = g[h]) && T[typeof e])
            for (
              var k = -1, l = T[typeof e] && Kc(e), m = l ? l.length : 0;
              ++k < m;

            )
              (d = l[k]), (f[d] = j ? j(f[d], e[d]) : e[d]);
        return f;
      }
      function W(a) {
        var b,
          c = [];
        if (!a || !T[typeof a]) return c;
        for (b in a) rc.call(a, b) && c.push(b);
        return c;
      }
      function X(a) {
        return a && "object" == typeof a && !Jc(a) && rc.call(a, "__wrapped__")
          ? a
          : new Y(a);
      }
      function Y(a, b) {
        (this.__chain__ = !!b), (this.__wrapped__ = a);
      }
      function Z(a) {
        function b() {
          if (d) {
            var a = l(d);
            sc.apply(a, arguments);
          }
          if (this instanceof b) {
            var f = ab(c.prototype),
              a = c.apply(f, a || arguments);
            return vb(a) ? a : f;
          }
          return c.apply(e, a || arguments);
        }
        var c = a[0],
          d = a[2],
          e = a[4];
        return Ic(b, a), b;
      }
      function _(a, b, c, d, e) {
        if (c) {
          var f = c(a);
          if ("undefined" != typeof f) return f;
        }
        if (!vb(a)) return a;
        var g = kc.call(a);
        if (!Q[g]) return a;
        var i = Gc[g];
        switch (g) {
          case J:
          case K:
            return new i(+a);
          case M:
          case P:
            return new i(a);
          case O:
            return (f = i(a.source, z.exec(a))), (f.lastIndex = a.lastIndex), f;
        }
        if (((g = Jc(a)), b)) {
          var k = !d;
          d || (d = h()), e || (e = h());
          for (var m = d.length; m--; ) if (d[m] == a) return e[m];
          f = g ? i(a.length) : {};
        } else f = g ? l(a) : U({}, a);
        return (
          g &&
            (rc.call(a, "index") && (f.index = a.index),
            rc.call(a, "input") && (f.input = a.input)),
          b
            ? (d.push(a),
              e.push(f),
              (g ? Db : o)(a, function (a, g) {
                f[g] = _(a, b, c, d, e);
              }),
              k && (j(d), j(e)),
              f)
            : f
        );
      }
      function ab(a) {
        return vb(a) ? xc(a) : {};
      }
      function bb(a, b, c) {
        if ("function" != typeof a) return Ub;
        if ("undefined" == typeof b || !("prototype" in a)) return a;
        var d = a.__bindData__;
        if (
          "undefined" == typeof d &&
          (Hc.funcNames && (d = !a.name), (d = d || !Hc.funcDecomp), !d)
        ) {
          var e = pc.call(a);
          Hc.funcNames || (d = !A.test(e)), d || ((d = E.test(e)), Ic(a, d));
        }
        if (!1 === d || (!0 !== d && 1 & d[1])) return a;
        switch (c) {
          case 1:
            return function (c) {
              return a.call(b, c);
            };
          case 2:
            return function (c, d) {
              return a.call(b, c, d);
            };
          case 3:
            return function (c, d, e) {
              return a.call(b, c, d, e);
            };
          case 4:
            return function (c, d, e, f) {
              return a.call(b, c, d, e, f);
            };
        }
        return Sb(a, b);
      }
      function cb(a) {
        function b() {
          var a = i ? g : this;
          if (e) {
            var o = l(e);
            sc.apply(o, arguments);
          }
          return (f || k) &&
            (o || (o = l(arguments)), f && sc.apply(o, f), k && o.length < h)
            ? ((d |= 16), cb([c, m ? d : -4 & d, o, null, g, h]))
            : (o || (o = arguments),
              j && (c = a[n]),
              this instanceof b
                ? ((a = ab(c.prototype)), (o = c.apply(a, o)), vb(o) ? o : a)
                : c.apply(a, o));
        }
        var c = a[0],
          d = a[1],
          e = a[2],
          f = a[3],
          g = a[4],
          h = a[5],
          i = 1 & d,
          j = 2 & d,
          k = 4 & d,
          m = 8 & d,
          n = c;
        return Ic(b, a), b;
      }
      function db(c, d) {
        var e = -1,
          g = mb(),
          h = c ? c.length : 0,
          i = h >= s && g === a,
          j = [];
        if (i) {
          var l = f(d);
          l ? ((g = b), (d = l)) : (i = !1);
        }
        for (; ++e < h; ) (l = c[e]), 0 > g(d, l) && j.push(l);
        return i && k(d), j;
      }
      function eb(a, b, c, d) {
        d = (d || 0) - 1;
        for (var e = a ? a.length : 0, f = []; ++d < e; ) {
          var g = a[d];
          if (
            g &&
            "object" == typeof g &&
            "number" == typeof g.length &&
            (Jc(g) || qb(g))
          ) {
            b || (g = eb(g, b, c));
            var h = -1,
              i = g.length,
              j = f.length;
            for (f.length += i; ++h < i; ) f[j++] = g[h];
          } else c || f.push(g);
        }
        return f;
      }
      function fb(a, b, c, d, e, f) {
        if (c) {
          var g = c(a, b);
          if ("undefined" != typeof g) return !!g;
        }
        if (a === b) return 0 !== a || 1 / a == 1 / b;
        if (a === a && !((a && T[typeof a]) || (b && T[typeof b]))) return !1;
        if (null == a || null == b) return a === b;
        var i = kc.call(a),
          k = kc.call(b);
        if ((i == H && (i = N), k == H && (k = N), i != k)) return !1;
        switch (i) {
          case J:
          case K:
            return +a == +b;
          case M:
            return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
          case O:
          case P:
            return a == fc(b);
        }
        if (((k = i == I), !k)) {
          var l = rc.call(a, "__wrapped__"),
            m = rc.call(b, "__wrapped__");
          if (l || m)
            return fb(l ? a.__wrapped__ : a, m ? b.__wrapped__ : b, c, d, e, f);
          if (i != N) return !1;
          if (
            ((i = a.constructor),
            (l = b.constructor),
            i != l &&
              !(ub(i) && i instanceof i && ub(l) && l instanceof l) &&
              "constructor" in a &&
              "constructor" in b)
          )
            return !1;
        }
        for (i = !e, e || (e = h()), f || (f = h()), l = e.length; l--; )
          if (e[l] == a) return f[l] == b;
        var n = 0,
          g = !0;
        if ((e.push(a), f.push(b), k)) {
          if (((l = a.length), (n = b.length), (g = n == l) || d))
            for (; n--; )
              if (((k = l), (m = b[n]), d))
                for (; k-- && !(g = fb(a[k], m, c, d, e, f)); );
              else if (!(g = fb(a[n], m, c, d, e, f))) break;
        } else
          p(b, function (b, h, i) {
            return rc.call(i, h)
              ? (n++, (g = rc.call(a, h) && fb(a[h], b, c, d, e, f)))
              : void 0;
          }),
            g &&
              !d &&
              p(a, function (a, b, c) {
                return rc.call(c, b) ? (g = -1 < --n) : void 0;
              });
        return e.pop(), f.pop(), i && (j(e), j(f)), g;
      }
      function gb(a, b, c, d, e) {
        (Jc(b) ? Db : o)(b, function (b, f) {
          var g,
            h,
            i = b,
            j = a[f];
          if (b && ((h = Jc(b)) || Pc(b))) {
            for (i = d.length; i--; )
              if ((g = d[i] == b)) {
                j = e[i];
                break;
              }
            if (!g) {
              var k;
              c && ((i = c(j, b)), (k = "undefined" != typeof i)) && (j = i),
                k || (j = h ? (Jc(j) ? j : []) : Pc(j) ? j : {}),
                d.push(b),
                e.push(j),
                k || gb(j, b, c, d, e);
            }
          } else c && ((i = c(j, b)), "undefined" == typeof i && (i = b)), "undefined" != typeof i && (j = i);
          a[f] = j;
        });
      }
      function hb(a, b) {
        return a + oc(Fc() * (b - a + 1));
      }
      function ib(c, d, e) {
        var g = -1,
          i = mb(),
          l = c ? c.length : 0,
          m = [],
          n = !d && l >= s && i === a,
          o = e || n ? h() : m;
        for (n && ((o = f(o)), (i = b)); ++g < l; ) {
          var p = c[g],
            q = e ? e(p, g, c) : p;
          (d ? !g || o[o.length - 1] !== q : 0 > i(o, q)) &&
            ((e || n) && o.push(q), m.push(p));
        }
        return n ? (j(o.k), k(o)) : e && j(o), m;
      }
      function jb(a) {
        return function (b, c, d) {
          var e = {};
          (c = X.createCallback(c, d, 3)), (d = -1);
          var f = b ? b.length : 0;
          if ("number" == typeof f)
            for (; ++d < f; ) {
              var g = b[d];
              a(e, g, c(g, d, b), b);
            }
          else
            o(b, function (b, d, f) {
              a(e, b, c(b, d, f), f);
            });
          return e;
        };
      }
      function kb(a, b, c, d, e, f) {
        var g = 1 & b,
          h = 4 & b,
          i = 16 & b,
          j = 32 & b;
        if (!(2 & b || ub(a))) throw new gc();
        i && !c.length && ((b &= -17), (i = c = !1)),
          j && !d.length && ((b &= -33), (j = d = !1));
        var k = a && a.__bindData__;
        return k && !0 !== k
          ? ((k = l(k)),
            k[2] && (k[2] = l(k[2])),
            k[3] && (k[3] = l(k[3])),
            !g || 1 & k[1] || (k[4] = e),
            !g && 1 & k[1] && (b |= 8),
            !h || 4 & k[1] || (k[5] = f),
            i && sc.apply(k[2] || (k[2] = []), c),
            j && vc.apply(k[3] || (k[3] = []), d),
            (k[1] |= b),
            kb.apply(null, k))
          : (1 == b || 17 === b ? Z : cb)([a, b, c, d, e, f]);
      }
      function lb(a) {
        return Lc[a];
      }
      function mb() {
        var b = (b = X.indexOf) === Mb ? a : b;
        return b;
      }
      function nb(a) {
        return "function" == typeof a && lc.test(a);
      }
      function ob(a) {
        var b, c;
        return a &&
          kc.call(a) == N &&
          ((b = a.constructor), !ub(b) || b instanceof b)
          ? (p(a, function (a, b) {
              c = b;
            }),
            "undefined" == typeof c || rc.call(a, c))
          : !1;
      }
      function pb(a) {
        return Mc[a];
      }
      function qb(a) {
        return (
          (a &&
            "object" == typeof a &&
            "number" == typeof a.length &&
            kc.call(a) == H) ||
          !1
        );
      }
      function rb(a, b, c) {
        var d = Kc(a),
          e = d.length;
        for (b = bb(b, c, 3); e-- && ((c = d[e]), !1 !== b(a[c], c, a)); );
        return a;
      }
      function sb(a) {
        var b = [];
        return (
          p(a, function (a, c) {
            ub(a) && b.push(c);
          }),
          b.sort()
        );
      }
      function tb(a) {
        for (var b = -1, c = Kc(a), d = c.length, e = {}; ++b < d; ) {
          var f = c[b];
          e[a[f]] = f;
        }
        return e;
      }
      function ub(a) {
        return "function" == typeof a;
      }
      function vb(a) {
        return !(!a || !T[typeof a]);
      }
      function wb(a) {
        return (
          "number" == typeof a ||
          (a && "object" == typeof a && kc.call(a) == M) ||
          !1
        );
      }
      function xb(a) {
        return (
          "string" == typeof a ||
          (a && "object" == typeof a && kc.call(a) == P) ||
          !1
        );
      }
      function yb(a) {
        for (var b = -1, c = Kc(a), d = c.length, e = Zb(d); ++b < d; )
          e[b] = a[c[b]];
        return e;
      }
      function zb(a, b, c) {
        var d = -1,
          e = mb(),
          f = a ? a.length : 0,
          g = !1;
        return (
          (c = (0 > c ? Cc(0, f + c) : c) || 0),
          Jc(a)
            ? (g = -1 < e(a, b, c))
            : "number" == typeof f
            ? (g = -1 < (xb(a) ? a.indexOf(b, c) : e(a, b, c)))
            : o(a, function (a) {
                return ++d < c ? void 0 : !(g = a === b);
              }),
          g
        );
      }
      function Ab(a, b, c) {
        var d = !0;
        (b = X.createCallback(b, c, 3)), (c = -1);
        var e = a ? a.length : 0;
        if ("number" == typeof e) for (; ++c < e && (d = !!b(a[c], c, a)); );
        else
          o(a, function (a, c, e) {
            return (d = !!b(a, c, e));
          });
        return d;
      }
      function Bb(a, b, c) {
        var d = [];
        (b = X.createCallback(b, c, 3)), (c = -1);
        var e = a ? a.length : 0;
        if ("number" == typeof e)
          for (; ++c < e; ) {
            var f = a[c];
            b(f, c, a) && d.push(f);
          }
        else
          o(a, function (a, c, e) {
            b(a, c, e) && d.push(a);
          });
        return d;
      }
      function Cb(a, b, c) {
        (b = X.createCallback(b, c, 3)), (c = -1);
        var d = a ? a.length : 0;
        if ("number" != typeof d) {
          var e;
          return (
            o(a, function (a, c, d) {
              return b(a, c, d) ? ((e = a), !1) : void 0;
            }),
            e
          );
        }
        for (; ++c < d; ) {
          var f = a[c];
          if (b(f, c, a)) return f;
        }
      }
      function Db(a, b, c) {
        var d = -1,
          e = a ? a.length : 0;
        if (
          ((b = b && "undefined" == typeof c ? b : bb(b, c, 3)),
          "number" == typeof e)
        )
          for (; ++d < e && !1 !== b(a[d], d, a); );
        else o(a, b);
        return a;
      }
      function Eb(a, b, c) {
        var d = a ? a.length : 0;
        if (
          ((b = b && "undefined" == typeof c ? b : bb(b, c, 3)),
          "number" == typeof d)
        )
          for (; d-- && !1 !== b(a[d], d, a); );
        else {
          var e = Kc(a),
            d = e.length;
          o(a, function (a, c, f) {
            return (c = e ? e[--d] : --d), b(f[c], c, f);
          });
        }
        return a;
      }
      function Fb(a, b, c) {
        var d = -1,
          e = a ? a.length : 0;
        if (((b = X.createCallback(b, c, 3)), "number" == typeof e))
          for (var f = Zb(e); ++d < e; ) f[d] = b(a[d], d, a);
        else
          (f = []),
            o(a, function (a, c, e) {
              f[++d] = b(a, c, e);
            });
        return f;
      }
      function Gb(a, b, c) {
        var e = -1 / 0,
          f = e;
        if (
          ("function" != typeof b && c && c[b] === a && (b = null),
          null == b && Jc(a))
        ) {
          c = -1;
          for (var g = a.length; ++c < g; ) {
            var h = a[c];
            h > f && (f = h);
          }
        } else
          (b = null == b && xb(a) ? d : X.createCallback(b, c, 3)),
            Db(a, function (a, c, d) {
              (c = b(a, c, d)), c > e && ((e = c), (f = a));
            });
        return f;
      }
      function Hb(a, b, c, d) {
        if (!a) return c;
        var e = 3 > arguments.length;
        b = X.createCallback(b, d, 4);
        var f = -1,
          g = a.length;
        if ("number" == typeof g)
          for (e && (c = a[++f]); ++f < g; ) c = b(c, a[f], f, a);
        else
          o(a, function (a, d, f) {
            c = e ? ((e = !1), a) : b(c, a, d, f);
          });
        return c;
      }
      function Ib(a, b, c, d) {
        var e = 3 > arguments.length;
        return (
          (b = X.createCallback(b, d, 4)),
          Eb(a, function (a, d, f) {
            c = e ? ((e = !1), a) : b(c, a, d, f);
          }),
          c
        );
      }
      function Jb(a) {
        var b = -1,
          c = a ? a.length : 0,
          d = Zb("number" == typeof c ? c : 0);
        return (
          Db(a, function (a) {
            var c = hb(0, ++b);
            (d[b] = d[c]), (d[c] = a);
          }),
          d
        );
      }
      function Kb(a, b, c) {
        var d;
        (b = X.createCallback(b, c, 3)), (c = -1);
        var e = a ? a.length : 0;
        if ("number" == typeof e) for (; ++c < e && !(d = b(a[c], c, a)); );
        else
          o(a, function (a, c, e) {
            return !(d = b(a, c, e));
          });
        return !!d;
      }
      function Lb(a, b, c) {
        var d = 0,
          e = a ? a.length : 0;
        if ("number" != typeof b && null != b) {
          var f = -1;
          for (b = X.createCallback(b, c, 3); ++f < e && b(a[f], f, a); ) d++;
        } else if (((d = b), null == d || c)) return a ? a[0] : n;
        return l(a, 0, Dc(Cc(0, d), e));
      }
      function Mb(b, c, d) {
        if ("number" == typeof d) {
          var e = b ? b.length : 0;
          d = 0 > d ? Cc(0, e + d) : d || 0;
        } else if (d) return (d = Ob(b, c)), b[d] === c ? d : -1;
        return a(b, c, d);
      }
      function Nb(a, b, c) {
        if ("number" != typeof b && null != b) {
          var d = 0,
            e = -1,
            f = a ? a.length : 0;
          for (b = X.createCallback(b, c, 3); ++e < f && b(a[e], e, a); ) d++;
        } else d = null == b || c ? 1 : Cc(0, b);
        return l(a, d);
      }
      function Ob(a, b, c, d) {
        var e = 0,
          f = a ? a.length : e;
        for (c = c ? X.createCallback(c, d, 1) : Ub, b = c(b); f > e; )
          (d = (e + f) >>> 1), c(a[d]) < b ? (e = d + 1) : (f = d);
        return e;
      }
      function Pb(a, b, c, d) {
        return (
          "boolean" != typeof b &&
            null != b &&
            ((d = c),
            (c = "function" != typeof b && d && d[b] === a ? null : b),
            (b = !1)),
          null != c && (c = X.createCallback(c, d, 3)),
          ib(a, b, c)
        );
      }
      function Qb() {
        for (
          var a = 1 < arguments.length ? arguments : arguments[0],
            b = -1,
            c = a ? Gb(Tc(a, "length")) : 0,
            d = Zb(0 > c ? 0 : c);
          ++b < c;

        )
          d[b] = Tc(a, b);
        return d;
      }
      function Rb(a, b) {
        var c = -1,
          d = a ? a.length : 0,
          e = {};
        for (b || !d || Jc(a[0]) || (b = []); ++c < d; ) {
          var f = a[c];
          b ? (e[f] = b[c]) : f && (e[f[0]] = f[1]);
        }
        return e;
      }
      function Sb(a, b) {
        return 2 < arguments.length
          ? kb(a, 17, l(arguments, 2), null, b)
          : kb(a, 1, null, null, b);
      }
      function Tb(a, b, c) {
        function d() {
          k && nc(k),
            (g = k = l = n),
            (p || o !== b) &&
              ((m = Uc()), (h = a.apply(j, f)), k || g || (f = j = null));
        }
        function e() {
          var c = b - (Uc() - i);
          c > 0
            ? (k = tc(e, c))
            : (g && nc(g),
              (c = l),
              (g = k = l = n),
              c && ((m = Uc()), (h = a.apply(j, f)), k || g || (f = j = null)));
        }
        var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = 0,
          o = !1,
          p = !0;
        if (!ub(a)) throw new gc();
        if (((b = Cc(0, b) || 0), !0 === c))
          var q = !0,
            p = !1;
        else
          vb(c) &&
            ((q = c.leading),
            (o = "maxWait" in c && (Cc(b, c.maxWait) || 0)),
            (p = "trailing" in c ? c.trailing : p));
        return function () {
          if (
            ((f = arguments),
            (i = Uc()),
            (j = this),
            (l = p && (k || !q)),
            !1 === o)
          )
            var c = q && !k;
          else {
            g || q || (m = i);
            var n = o - (i - m),
              r = 0 >= n;
            r
              ? (g && (g = nc(g)), (m = i), (h = a.apply(j, f)))
              : g || (g = tc(d, n));
          }
          return (
            r && k ? (k = nc(k)) : k || b === o || (k = tc(e, b)),
            c && ((r = !0), (h = a.apply(j, f))),
            !r || k || g || (f = j = null),
            h
          );
        };
      }
      function Ub(a) {
        return a;
      }
      function Vb(a, b, c) {
        var d = !0,
          e = b && sb(b);
        (b && (c || e.length)) ||
          (null == c && (c = b), (f = Y), (b = a), (a = X), (e = sb(b))),
          !1 === c ? (d = !1) : vb(c) && "chain" in c && (d = c.chain);
        var f = a,
          g = ub(f);
        Db(e, function (c) {
          var e = (a[c] = b[c]);
          g &&
            (f.prototype[c] = function () {
              var b = this.__chain__,
                c = this.__wrapped__,
                g = [c];
              if ((sc.apply(g, arguments), (g = e.apply(a, g)), d || b)) {
                if (c === g && vb(g)) return this;
                (g = new f(g)), (g.__chain__ = b);
              }
              return g;
            });
        });
      }
      function Wb() {}
      function Xb(a) {
        return function (b) {
          return b[a];
        };
      }
      function Yb() {
        return this.__wrapped__;
      }
      c = c ? $.defaults(V.Object(), c, $.pick(V, G)) : V;
      var Zb = c.Array,
        $b = c.Boolean,
        _b = c.Date,
        ac = c.Function,
        bc = c.Math,
        cc = c.Number,
        dc = c.Object,
        ec = c.RegExp,
        fc = c.String,
        gc = c.TypeError,
        hc = [],
        ic = dc.prototype,
        jc = c._,
        kc = ic.toString,
        lc = ec(
          "^" +
            fc(kc)
              .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
              .replace(/toString| for [^\]]+/g, ".*?") +
            "$"
        ),
        mc = bc.ceil,
        nc = c.clearTimeout,
        oc = bc.floor,
        pc = ac.prototype.toString,
        qc = nb((qc = dc.getPrototypeOf)) && qc,
        rc = ic.hasOwnProperty,
        sc = hc.push,
        tc = c.setTimeout,
        uc = hc.splice,
        vc = hc.unshift,
        wc = (function () {
          try {
            var a = {},
              b = nb((b = dc.defineProperty)) && b,
              c = b(a, a, a) && b;
          } catch (d) {}
          return c;
        })(),
        xc = nb((xc = dc.create)) && xc,
        yc = nb((yc = Zb.isArray)) && yc,
        zc = c.isFinite,
        Ac = c.isNaN,
        Bc = nb((Bc = dc.keys)) && Bc,
        Cc = bc.max,
        Dc = bc.min,
        Ec = c.parseInt,
        Fc = bc.random,
        Gc = {};
      (Gc[I] = Zb),
        (Gc[J] = $b),
        (Gc[K] = _b),
        (Gc[L] = ac),
        (Gc[N] = dc),
        (Gc[M] = cc),
        (Gc[O] = ec),
        (Gc[P] = fc),
        (Y.prototype = X.prototype);
      var Hc = (X.support = {});
      (Hc.funcDecomp = !nb(c.a) && E.test(m)),
        (Hc.funcNames = "string" == typeof ac.name),
        (X.templateSettings = {
          escape: /<%-([\s\S]+?)%>/g,
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: B,
          variable: "",
          imports: { _: X },
        }),
        xc ||
          (ab = (function () {
            function a() {}
            return function (b) {
              if (vb(b)) {
                a.prototype = b;
                var d = new a();
                a.prototype = null;
              }
              return d || c.Object();
            };
          })());
      var Ic = wc
          ? function (a, b) {
              (S.value = b), wc(a, "__bindData__", S);
            }
          : Wb,
        Jc =
          yc ||
          function (a) {
            return (
              (a &&
                "object" == typeof a &&
                "number" == typeof a.length &&
                kc.call(a) == I) ||
              !1
            );
          },
        Kc = Bc
          ? function (a) {
              return vb(a) ? Bc(a) : [];
            }
          : W,
        Lc = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        },
        Mc = tb(Lc),
        Nc = ec("(" + Kc(Mc).join("|") + ")", "g"),
        Oc = ec("[" + Kc(Lc).join("") + "]", "g"),
        Pc = qc
          ? function (a) {
              if (!a || kc.call(a) != N) return !1;
              var b = a.valueOf,
                c = nb(b) && (c = qc(b)) && qc(c);
              return c ? a == c || qc(a) == c : ob(a);
            }
          : ob,
        Qc = jb(function (a, b, c) {
          rc.call(a, c) ? a[c]++ : (a[c] = 1);
        }),
        Rc = jb(function (a, b, c) {
          (rc.call(a, c) ? a[c] : (a[c] = [])).push(b);
        }),
        Sc = jb(function (a, b, c) {
          a[c] = b;
        }),
        Tc = Fb,
        Uc =
          (nb((Uc = _b.now)) && Uc) ||
          function () {
            return new _b().getTime();
          },
        Vc =
          8 == Ec(u + "08")
            ? Ec
            : function (a, b) {
                return Ec(xb(a) ? a.replace(C, "") : a, b || 0);
              };
      return (
        (X.after = function (a, b) {
          if (!ub(b)) throw new gc();
          return function () {
            return 1 > --a ? b.apply(this, arguments) : void 0;
          };
        }),
        (X.assign = U),
        (X.at = function (a) {
          for (
            var b = arguments,
              c = -1,
              d = eb(b, !0, !1, 1),
              b = b[2] && b[2][b[1]] === a ? 1 : d.length,
              e = Zb(b);
            ++c < b;

          )
            e[c] = a[d[c]];
          return e;
        }),
        (X.bind = Sb),
        (X.bindAll = function (a) {
          for (
            var b = 1 < arguments.length ? eb(arguments, !0, !1, 1) : sb(a),
              c = -1,
              d = b.length;
            ++c < d;

          ) {
            var e = b[c];
            a[e] = kb(a[e], 1, null, null, a);
          }
          return a;
        }),
        (X.bindKey = function (a, b) {
          return 2 < arguments.length
            ? kb(b, 19, l(arguments, 2), null, a)
            : kb(b, 3, null, null, a);
        }),
        (X.chain = function (a) {
          return (a = new Y(a)), (a.__chain__ = !0), a;
        }),
        (X.compact = function (a) {
          for (var b = -1, c = a ? a.length : 0, d = []; ++b < c; ) {
            var e = a[b];
            e && d.push(e);
          }
          return d;
        }),
        (X.compose = function () {
          for (var a = arguments, b = a.length; b--; )
            if (!ub(a[b])) throw new gc();
          return function () {
            for (var b = arguments, c = a.length; c--; )
              b = [a[c].apply(this, b)];
            return b[0];
          };
        }),
        (X.constant = function (a) {
          return function () {
            return a;
          };
        }),
        (X.countBy = Qc),
        (X.create = function (a, b) {
          var c = ab(a);
          return b ? U(c, b) : c;
        }),
        (X.createCallback = function (a, b, c) {
          var d = typeof a;
          if (null == a || "function" == d) return bb(a, b, c);
          if ("object" != d) return Xb(a);
          var e = Kc(a),
            f = e[0],
            g = a[f];
          return 1 != e.length || g !== g || vb(g)
            ? function (b) {
                for (
                  var c = e.length, d = !1;
                  c-- && (d = fb(b[e[c]], a[e[c]], null, !0));

                );
                return d;
              }
            : function (a) {
                return (a = a[f]), g === a && (0 !== g || 1 / g == 1 / a);
              };
        }),
        (X.curry = function (a, b) {
          return (
            (b = "number" == typeof b ? b : +b || a.length),
            kb(a, 4, null, null, null, b)
          );
        }),
        (X.debounce = Tb),
        (X.defaults = t),
        (X.defer = function (a) {
          if (!ub(a)) throw new gc();
          var b = l(arguments, 1);
          return tc(function () {
            a.apply(n, b);
          }, 1);
        }),
        (X.delay = function (a, b) {
          if (!ub(a)) throw new gc();
          var c = l(arguments, 2);
          return tc(function () {
            a.apply(n, c);
          }, b);
        }),
        (X.difference = function (a) {
          return db(a, eb(arguments, !0, !0, 1));
        }),
        (X.filter = Bb),
        (X.flatten = function (a, b, c, d) {
          return (
            "boolean" != typeof b &&
              null != b &&
              ((d = c),
              (c = "function" != typeof b && d && d[b] === a ? null : b),
              (b = !1)),
            null != c && (a = Fb(a, c, d)),
            eb(a, b)
          );
        }),
        (X.forEach = Db),
        (X.forEachRight = Eb),
        (X.forIn = p),
        (X.forInRight = function (a, b, c) {
          var d = [];
          p(a, function (a, b) {
            d.push(b, a);
          });
          var e = d.length;
          for (b = bb(b, c, 3); e-- && !1 !== b(d[e--], d[e], a); );
          return a;
        }),
        (X.forOwn = o),
        (X.forOwnRight = rb),
        (X.functions = sb),
        (X.groupBy = Rc),
        (X.indexBy = Sc),
        (X.initial = function (a, b, c) {
          var d = 0,
            e = a ? a.length : 0;
          if ("number" != typeof b && null != b) {
            var f = e;
            for (b = X.createCallback(b, c, 3); f-- && b(a[f], f, a); ) d++;
          } else d = null == b || c ? 1 : b || d;
          return l(a, 0, Dc(Cc(0, e - d), e));
        }),
        (X.intersection = function () {
          for (
            var c = [],
              d = -1,
              e = arguments.length,
              g = h(),
              i = mb(),
              l = i === a,
              m = h();
            ++d < e;

          ) {
            var n = arguments[d];
            (Jc(n) || qb(n)) &&
              (c.push(n), g.push(l && n.length >= s && f(d ? c[d] : m)));
          }
          var l = c[0],
            o = -1,
            p = l ? l.length : 0,
            q = [];
          a: for (; ++o < p; ) {
            var r = g[0],
              n = l[o];
            if (0 > (r ? b(r, n) : i(m, n))) {
              for (d = e, (r || m).push(n); --d; )
                if (((r = g[d]), 0 > (r ? b(r, n) : i(c[d], n)))) continue a;
              q.push(n);
            }
          }
          for (; e--; ) (r = g[e]) && k(r);
          return j(g), j(m), q;
        }),
        (X.invert = tb),
        (X.invoke = function (a, b) {
          var c = l(arguments, 2),
            d = -1,
            e = "function" == typeof b,
            f = a ? a.length : 0,
            g = Zb("number" == typeof f ? f : 0);
          return (
            Db(a, function (a) {
              g[++d] = (e ? b : a[b]).apply(a, c);
            }),
            g
          );
        }),
        (X.keys = Kc),
        (X.map = Fb),
        (X.mapValues = function (a, b, c) {
          var d = {};
          return (
            (b = X.createCallback(b, c, 3)),
            o(a, function (a, c, e) {
              d[c] = b(a, c, e);
            }),
            d
          );
        }),
        (X.max = Gb),
        (X.memoize = function (a, b) {
          function c() {
            var d = c.cache,
              e = b ? b.apply(this, arguments) : r + arguments[0];
            return rc.call(d, e) ? d[e] : (d[e] = a.apply(this, arguments));
          }
          if (!ub(a)) throw new gc();
          return (c.cache = {}), c;
        }),
        (X.merge = function (a) {
          var b = arguments,
            c = 2;
          if (!vb(a)) return a;
          if (
            ("number" != typeof b[2] && (c = b.length),
            c > 3 && "function" == typeof b[c - 2])
          )
            var d = bb(b[--c - 1], b[c--], 2);
          else c > 2 && "function" == typeof b[c - 1] && (d = b[--c]);
          for (var b = l(arguments, 1, c), e = -1, f = h(), g = h(); ++e < c; )
            gb(a, b[e], d, f, g);
          return j(f), j(g), a;
        }),
        (X.min = function (a, b, c) {
          var e = 1 / 0,
            f = e;
          if (
            ("function" != typeof b && c && c[b] === a && (b = null),
            null == b && Jc(a))
          ) {
            c = -1;
            for (var g = a.length; ++c < g; ) {
              var h = a[c];
              f > h && (f = h);
            }
          } else
            (b = null == b && xb(a) ? d : X.createCallback(b, c, 3)),
              Db(a, function (a, c, d) {
                (c = b(a, c, d)), e > c && ((e = c), (f = a));
              });
          return f;
        }),
        (X.omit = function (a, b, c) {
          var d = {};
          if ("function" != typeof b) {
            var e = [];
            p(a, function (a, b) {
              e.push(b);
            });
            for (
              var e = db(e, eb(arguments, !0, !1, 1)), f = -1, g = e.length;
              ++f < g;

            ) {
              var h = e[f];
              d[h] = a[h];
            }
          } else
            (b = X.createCallback(b, c, 3)),
              p(a, function (a, c, e) {
                b(a, c, e) || (d[c] = a);
              });
          return d;
        }),
        (X.once = function (a) {
          var b, c;
          if (!ub(a)) throw new gc();
          return function () {
            return b
              ? c
              : ((b = !0), (c = a.apply(this, arguments)), (a = null), c);
          };
        }),
        (X.pairs = function (a) {
          for (var b = -1, c = Kc(a), d = c.length, e = Zb(d); ++b < d; ) {
            var f = c[b];
            e[b] = [f, a[f]];
          }
          return e;
        }),
        (X.partial = function (a) {
          return kb(a, 16, l(arguments, 1));
        }),
        (X.partialRight = function (a) {
          return kb(a, 32, null, l(arguments, 1));
        }),
        (X.pick = function (a, b, c) {
          var d = {};
          if ("function" != typeof b)
            for (
              var e = -1,
                f = eb(arguments, !0, !1, 1),
                g = vb(a) ? f.length : 0;
              ++e < g;

            ) {
              var h = f[e];
              h in a && (d[h] = a[h]);
            }
          else
            (b = X.createCallback(b, c, 3)),
              p(a, function (a, c, e) {
                b(a, c, e) && (d[c] = a);
              });
          return d;
        }),
        (X.pluck = Tc),
        (X.property = Xb),
        (X.pull = function (a) {
          for (
            var b = arguments, c = 0, d = b.length, e = a ? a.length : 0;
            ++c < d;

          )
            for (var f = -1, g = b[c]; ++f < e; )
              a[f] === g && (uc.call(a, f--, 1), e--);
          return a;
        }),
        (X.range = function (a, b, c) {
          (a = +a || 0),
            (c = "number" == typeof c ? c : +c || 1),
            null == b && ((b = a), (a = 0));
          var d = -1;
          b = Cc(0, mc((b - a) / (c || 1)));
          for (var e = Zb(b); ++d < b; ) (e[d] = a), (a += c);
          return e;
        }),
        (X.reject = function (a, b, c) {
          return (
            (b = X.createCallback(b, c, 3)),
            Bb(a, function (a, c, d) {
              return !b(a, c, d);
            })
          );
        }),
        (X.remove = function (a, b, c) {
          var d = -1,
            e = a ? a.length : 0,
            f = [];
          for (b = X.createCallback(b, c, 3); ++d < e; )
            (c = a[d]), b(c, d, a) && (f.push(c), uc.call(a, d--, 1), e--);
          return f;
        }),
        (X.rest = Nb),
        (X.shuffle = Jb),
        (X.sortBy = function (a, b, c) {
          var d = -1,
            f = Jc(b),
            g = a ? a.length : 0,
            l = Zb("number" == typeof g ? g : 0);
          for (
            f || (b = X.createCallback(b, c, 3)),
              Db(a, function (a, c, e) {
                var g = (l[++d] = i());
                f
                  ? (g.m = Fb(b, function (b) {
                      return a[b];
                    }))
                  : ((g.m = h())[0] = b(a, c, e)),
                  (g.n = d),
                  (g.o = a);
              }),
              g = l.length,
              l.sort(e);
            g--;

          )
            (a = l[g]), (l[g] = a.o), f || j(a.m), k(a);
          return l;
        }),
        (X.tap = function (a, b) {
          return b(a), a;
        }),
        (X.throttle = function (a, b, c) {
          var d = !0,
            e = !0;
          if (!ub(a)) throw new gc();
          return (
            !1 === c
              ? (d = !1)
              : vb(c) &&
                ((d = "leading" in c ? c.leading : d),
                (e = "trailing" in c ? c.trailing : e)),
            (R.leading = d),
            (R.maxWait = b),
            (R.trailing = e),
            Tb(a, b, R)
          );
        }),
        (X.times = function (a, b, c) {
          a = -1 < (a = +a) ? a : 0;
          var d = -1,
            e = Zb(a);
          for (b = bb(b, c, 1); ++d < a; ) e[d] = b(d);
          return e;
        }),
        (X.toArray = function (a) {
          return a && "number" == typeof a.length ? l(a) : yb(a);
        }),
        (X.transform = function (a, b, c, d) {
          var e = Jc(a);
          if (null == c)
            if (e) c = [];
            else {
              var f = a && a.constructor;
              c = ab(f && f.prototype);
            }
          return (
            b &&
              ((b = X.createCallback(b, d, 4)),
              (e ? Db : o)(a, function (a, d, e) {
                return b(c, a, d, e);
              })),
            c
          );
        }),
        (X.union = function () {
          return ib(eb(arguments, !0, !0));
        }),
        (X.uniq = Pb),
        (X.values = yb),
        (X.where = Bb),
        (X.without = function (a) {
          return db(a, l(arguments, 1));
        }),
        (X.wrap = function (a, b) {
          return kb(b, 16, [a]);
        }),
        (X.xor = function () {
          for (var a = -1, b = arguments.length; ++a < b; ) {
            var c = arguments[a];
            if (Jc(c) || qb(c)) var d = d ? ib(db(d, c).concat(db(c, d))) : c;
          }
          return d || [];
        }),
        (X.zip = Qb),
        (X.zipObject = Rb),
        (X.collect = Fb),
        (X.drop = Nb),
        (X.each = Db),
        (X.eachRight = Eb),
        (X.extend = U),
        (X.methods = sb),
        (X.object = Rb),
        (X.select = Bb),
        (X.tail = Nb),
        (X.unique = Pb),
        (X.unzip = Qb),
        Vb(X),
        (X.clone = function (a, b, c, d) {
          return (
            "boolean" != typeof b && null != b && ((d = c), (c = b), (b = !1)),
            _(a, b, "function" == typeof c && bb(c, d, 1))
          );
        }),
        (X.cloneDeep = function (a, b, c) {
          return _(a, !0, "function" == typeof b && bb(b, c, 1));
        }),
        (X.contains = zb),
        (X.escape = function (a) {
          return null == a ? "" : fc(a).replace(Oc, lb);
        }),
        (X.every = Ab),
        (X.find = Cb),
        (X.findIndex = function (a, b, c) {
          var d = -1,
            e = a ? a.length : 0;
          for (b = X.createCallback(b, c, 3); ++d < e; )
            if (b(a[d], d, a)) return d;
          return -1;
        }),
        (X.findKey = function (a, b, c) {
          var d;
          return (
            (b = X.createCallback(b, c, 3)),
            o(a, function (a, c, e) {
              return b(a, c, e) ? ((d = c), !1) : void 0;
            }),
            d
          );
        }),
        (X.findLast = function (a, b, c) {
          var d;
          return (
            (b = X.createCallback(b, c, 3)),
            Eb(a, function (a, c, e) {
              return b(a, c, e) ? ((d = a), !1) : void 0;
            }),
            d
          );
        }),
        (X.findLastIndex = function (a, b, c) {
          var d = a ? a.length : 0;
          for (b = X.createCallback(b, c, 3); d--; )
            if (b(a[d], d, a)) return d;
          return -1;
        }),
        (X.findLastKey = function (a, b, c) {
          var d;
          return (
            (b = X.createCallback(b, c, 3)),
            rb(a, function (a, c, e) {
              return b(a, c, e) ? ((d = c), !1) : void 0;
            }),
            d
          );
        }),
        (X.has = function (a, b) {
          return a ? rc.call(a, b) : !1;
        }),
        (X.identity = Ub),
        (X.indexOf = Mb),
        (X.isArguments = qb),
        (X.isArray = Jc),
        (X.isBoolean = function (a) {
          return (
            !0 === a ||
            !1 === a ||
            (a && "object" == typeof a && kc.call(a) == J) ||
            !1
          );
        }),
        (X.isDate = function (a) {
          return (a && "object" == typeof a && kc.call(a) == K) || !1;
        }),
        (X.isElement = function (a) {
          return (a && 1 === a.nodeType) || !1;
        }),
        (X.isEmpty = function (a) {
          var b = !0;
          if (!a) return b;
          var c = kc.call(a),
            d = a.length;
          return c == I ||
            c == P ||
            c == H ||
            (c == N && "number" == typeof d && ub(a.splice))
            ? !d
            : (o(a, function () {
                return (b = !1);
              }),
              b);
        }),
        (X.isEqual = function (a, b, c, d) {
          return fb(a, b, "function" == typeof c && bb(c, d, 2));
        }),
        (X.isFinite = function (a) {
          return zc(a) && !Ac(parseFloat(a));
        }),
        (X.isFunction = ub),
        (X.isNaN = function (a) {
          return wb(a) && a != +a;
        }),
        (X.isNull = function (a) {
          return null === a;
        }),
        (X.isNumber = wb),
        (X.isObject = vb),
        (X.isPlainObject = Pc),
        (X.isRegExp = function (a) {
          return (a && "object" == typeof a && kc.call(a) == O) || !1;
        }),
        (X.isString = xb),
        (X.isUndefined = function (a) {
          return "undefined" == typeof a;
        }),
        (X.lastIndexOf = function (a, b, c) {
          var d = a ? a.length : 0;
          for (
            "number" == typeof c &&
            (d = (0 > c ? Cc(0, d + c) : Dc(c, d - 1)) + 1);
            d--;

          )
            if (a[d] === b) return d;
          return -1;
        }),
        (X.mixin = Vb),
        (X.noConflict = function () {
          return (c._ = jc), this;
        }),
        (X.noop = Wb),
        (X.now = Uc),
        (X.parseInt = Vc),
        (X.random = function (a, b, c) {
          var d = null == a,
            e = null == b;
          return (
            null == c &&
              ("boolean" == typeof a && e
                ? ((c = a), (a = 1))
                : e || "boolean" != typeof b || ((c = b), (e = !0))),
            d && e && (b = 1),
            (a = +a || 0),
            e ? ((b = a), (a = 0)) : (b = +b || 0),
            c || a % 1 || b % 1
              ? ((c = Fc()),
                Dc(
                  a + c * (b - a + parseFloat("1e-" + ((c + "").length - 1))),
                  b
                ))
              : hb(a, b)
          );
        }),
        (X.reduce = Hb),
        (X.reduceRight = Ib),
        (X.result = function (a, b) {
          if (a) {
            var c = a[b];
            return ub(c) ? a[b]() : c;
          }
        }),
        (X.runInContext = m),
        (X.size = function (a) {
          var b = a ? a.length : 0;
          return "number" == typeof b ? b : Kc(a).length;
        }),
        (X.some = Kb),
        (X.sortedIndex = Ob),
        (X.template = function (a, b, c) {
          var d = X.templateSettings;
          (a = fc(a || "")), (c = t({}, c, d));
          var e,
            f = t({}, c.imports, d.imports),
            d = Kc(f),
            f = yb(f),
            h = 0,
            i = c.interpolate || D,
            j = "__p+='",
            i = ec(
              (c.escape || D).source +
                "|" +
                i.source +
                "|" +
                (i === B ? y : D).source +
                "|" +
                (c.evaluate || D).source +
                "|$",
              "g"
            );
          a.replace(i, function (b, c, d, f, i, k) {
            return (
              d || (d = f),
              (j += a.slice(h, k).replace(F, g)),
              c && (j += "'+__e(" + c + ")+'"),
              i && ((e = !0), (j += "';" + i + ";\n__p+='")),
              d && (j += "'+((__t=(" + d + "))==null?'':__t)+'"),
              (h = k + b.length),
              b
            );
          }),
            (j += "';"),
            (i = c = c.variable),
            i || ((c = "obj"), (j = "with(" + c + "){" + j + "}")),
            (j = (e ? j.replace(v, "") : j).replace(w, "$1").replace(x, "$1;")),
            (j =
              "function(" +
              c +
              "){" +
              (i ? "" : c + "||(" + c + "={});") +
              "var __t,__p='',__e=_.escape" +
              (e
                ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}"
                : ";") +
              j +
              "return __p}");
          try {
            var k = ac(d, "return " + j).apply(n, f);
          } catch (l) {
            throw ((l.source = j), l);
          }
          return b ? k(b) : ((k.source = j), k);
        }),
        (X.unescape = function (a) {
          return null == a ? "" : fc(a).replace(Nc, pb);
        }),
        (X.uniqueId = function (a) {
          var b = ++q;
          return fc(null == a ? "" : a) + b;
        }),
        (X.all = Ab),
        (X.any = Kb),
        (X.detect = Cb),
        (X.findWhere = Cb),
        (X.foldl = Hb),
        (X.foldr = Ib),
        (X.include = zb),
        (X.inject = Hb),
        Vb(
          (function () {
            var a = {};
            return (
              o(X, function (b, c) {
                X.prototype[c] || (a[c] = b);
              }),
              a
            );
          })(),
          !1
        ),
        (X.first = Lb),
        (X.last = function (a, b, c) {
          var d = 0,
            e = a ? a.length : 0;
          if ("number" != typeof b && null != b) {
            var f = e;
            for (b = X.createCallback(b, c, 3); f-- && b(a[f], f, a); ) d++;
          } else if (((d = b), null == d || c)) return a ? a[e - 1] : n;
          return l(a, Cc(0, e - d));
        }),
        (X.sample = function (a, b, c) {
          return (
            a && "number" != typeof a.length && (a = yb(a)),
            null == b || c
              ? a
                ? a[hb(0, a.length - 1)]
                : n
              : ((a = Jb(a)), (a.length = Dc(Cc(0, b), a.length)), a)
          );
        }),
        (X.take = Lb),
        (X.head = Lb),
        o(X, function (a, b) {
          var c = "sample" !== b;
          X.prototype[b] ||
            (X.prototype[b] = function (b, d) {
              var e = this.__chain__,
                f = a(this.__wrapped__, b, d);
              return e || (null != b && (!d || (c && "function" == typeof b)))
                ? new Y(f, e)
                : f;
            });
        }),
        (X.VERSION = "2.4.1"),
        (X.prototype.chain = function () {
          return (this.__chain__ = !0), this;
        }),
        (X.prototype.toString = function () {
          return fc(this.__wrapped__);
        }),
        (X.prototype.value = Yb),
        (X.prototype.valueOf = Yb),
        Db(["join", "pop", "shift"], function (a) {
          var b = hc[a];
          X.prototype[a] = function () {
            var a = this.__chain__,
              c = b.apply(this.__wrapped__, arguments);
            return a ? new Y(c, a) : c;
          };
        }),
        Db(["push", "reverse", "sort", "unshift"], function (a) {
          var b = hc[a];
          X.prototype[a] = function () {
            return b.apply(this.__wrapped__, arguments), this;
          };
        }),
        Db(["concat", "slice", "splice"], function (a) {
          var b = hc[a];
          X.prototype[a] = function () {
            return new Y(b.apply(this.__wrapped__, arguments), this.__chain__);
          };
        }),
        X
      );
    }
    var n,
      o = [],
      p = [],
      q = 0,
      r = +new Date() + "",
      s = 75,
      t = 40,
      u = " 	\f ﻿\n\r\u2028\u2029 ᠎             　",
      v = /\b__p\+='';/g,
      w = /\b(__p\+=)''\+/g,
      x = /(__e\(.*?\)|\b__t\))\+'';/g,
      y = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      z = /\w*$/,
      A = /^\s*function[ \n\r\t]+\w/,
      B = /<%=([\s\S]+?)%>/g,
      C = RegExp("^[" + u + "]*0+(?=.$)"),
      D = /($^)/,
      E = /\bthis\b/,
      F = /['\n\r\t\u2028\u2029\\]/g,
      G =
        "Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(
          " "
        ),
      H = "[object Arguments]",
      I = "[object Array]",
      J = "[object Boolean]",
      K = "[object Date]",
      L = "[object Function]",
      M = "[object Number]",
      N = "[object Object]",
      O = "[object RegExp]",
      P = "[object String]",
      Q = {};
    (Q[L] = !1), (Q[H] = Q[I] = Q[J] = Q[K] = Q[M] = Q[N] = Q[O] = Q[P] = !0);
    var R = { leading: !1, maxWait: 0, trailing: !1 },
      S = { configurable: !1, enumerable: !1, value: null, writable: !1 },
      T = {
        boolean: !1,
        function: !0,
        object: !0,
        number: !1,
        string: !1,
        undefined: !1,
      },
      U = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      V = (T[typeof window] && window) || this,
      W = T[typeof exports] && exports && !exports.nodeType && exports,
      X = T[typeof module] && module && !module.nodeType && module,
      Y = X && X.exports === W && W,
      Z = T[typeof global] && global;
    !Z || (Z.global !== Z && Z.window !== Z) || (V = Z);
    var $ = m();
    "function" == typeof define && "object" == typeof define.amd && define.amd
      ? ((V._ = $),
        define(function () {
          return $;
        }))
      : W && X
      ? Y
        ? ((X.exports = $)._ = $)
        : (W._ = $)
      : (V._ = $);
  }.call(this);
var deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0,
  deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent),
  deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent),
  deviceIsIOSWithBadTarget =
    deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);
(FastClick.prototype.needsClick = function (a) {
  "use strict";
  switch (a.nodeName.toLowerCase()) {
    case "button":
    case "select":
    case "textarea":
      if (a.disabled) return !0;
      break;
    case "input":
      if ((deviceIsIOS && "file" === a.type) || a.disabled) return !0;
      break;
    case "label":
    case "video":
      return !0;
  }
  return /\bneedsclick\b/.test(a.className);
}),
  (FastClick.prototype.needsFocus = function (a) {
    "use strict";
    switch (a.nodeName.toLowerCase()) {
      case "textarea":
        return !0;
      case "select":
        return !deviceIsAndroid;
      case "input":
        switch (a.type) {
          case "button":
          case "checkbox":
          case "file":
          case "image":
          case "radio":
          case "submit":
            return !1;
        }
        return !a.disabled && !a.readOnly;
      default:
        return /\bneedsfocus\b/.test(a.className);
    }
  }),
  (FastClick.prototype.sendClick = function (a, b) {
    "use strict";
    var c, d;
    document.activeElement &&
      document.activeElement !== a &&
      document.activeElement.blur(),
      (d = b.changedTouches[0]),
      (c = document.createEvent("MouseEvents")),
      c.initMouseEvent(
        this.determineEventType(a),
        !0,
        !0,
        window,
        1,
        d.screenX,
        d.screenY,
        d.clientX,
        d.clientY,
        !1,
        !1,
        !1,
        !1,
        0,
        null
      ),
      (c.forwardedTouchEvent = !0),
      a.dispatchEvent(c);
  }),
  (FastClick.prototype.determineEventType = function (a) {
    "use strict";
    return deviceIsAndroid && "select" === a.tagName.toLowerCase()
      ? "mousedown"
      : "click";
  }),
  (FastClick.prototype.focus = function (a) {
    "use strict";
    var b;
    deviceIsIOS &&
    a.setSelectionRange &&
    0 !== a.type.indexOf("date") &&
    "time" !== a.type
      ? ((b = a.value.length), a.setSelectionRange(b, b))
      : a.focus();
  }),
  (FastClick.prototype.updateScrollParent = function (a) {
    "use strict";
    var b, c;
    if (((b = a.fastClickScrollParent), !b || !b.contains(a))) {
      c = a;
      do {
        if (c.scrollHeight > c.offsetHeight) {
          (b = c), (a.fastClickScrollParent = c);
          break;
        }
        c = c.parentElement;
      } while (c);
    }
    b && (b.fastClickLastScrollTop = b.scrollTop);
  }),
  (FastClick.prototype.getTargetElementFromEventTarget = function (a) {
    "use strict";
    return a.nodeType === Node.TEXT_NODE ? a.parentNode : a;
  }),
  (FastClick.prototype.onTouchStart = function (a) {
    "use strict";
    var b, c, d;
    if (a.targetTouches.length > 1) return !0;
    if (
      ((b = this.getTargetElementFromEventTarget(a.target)),
      (c = a.targetTouches[0]),
      deviceIsIOS)
    ) {
      if (((d = window.getSelection()), d.rangeCount && !d.isCollapsed))
        return !0;
      if (!deviceIsIOS4) {
        if (c.identifier === this.lastTouchIdentifier)
          return a.preventDefault(), !1;
        (this.lastTouchIdentifier = c.identifier), this.updateScrollParent(b);
      }
    }
    return (
      (this.trackingClick = !0),
      (this.trackingClickStart = a.timeStamp),
      (this.targetElement = b),
      (this.touchStartX = c.pageX),
      (this.touchStartY = c.pageY),
      a.timeStamp - this.lastClickTime < 200 && a.preventDefault(),
      !0
    );
  }),
  (FastClick.prototype.touchHasMoved = function (a) {
    "use strict";
    var b = a.changedTouches[0],
      c = this.touchBoundary;
    return Math.abs(b.pageX - this.touchStartX) > c ||
      Math.abs(b.pageY - this.touchStartY) > c
      ? !0
      : !1;
  }),
  (FastClick.prototype.onTouchMove = function (a) {
    "use strict";
    return this.trackingClick
      ? ((this.targetElement !==
          this.getTargetElementFromEventTarget(a.target) ||
          this.touchHasMoved(a)) &&
          ((this.trackingClick = !1), (this.targetElement = null)),
        !0)
      : !0;
  }),
  (FastClick.prototype.findControl = function (a) {
    "use strict";
    return void 0 !== a.control
      ? a.control
      : a.htmlFor
      ? document.getElementById(a.htmlFor)
      : a.querySelector(
          "button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea"
        );
  }),
  (FastClick.prototype.onTouchEnd = function (a) {
    "use strict";
    var b,
      c,
      d,
      e,
      f,
      g = this.targetElement;
    if (!this.trackingClick) return !0;
    if (a.timeStamp - this.lastClickTime < 200)
      return (this.cancelNextClick = !0), !0;
    if (
      ((this.cancelNextClick = !1),
      (this.lastClickTime = a.timeStamp),
      (c = this.trackingClickStart),
      (this.trackingClick = !1),
      (this.trackingClickStart = 0),
      deviceIsIOSWithBadTarget &&
        ((f = a.changedTouches[0]),
        (g =
          document.elementFromPoint(
            f.pageX - window.pageXOffset,
            f.pageY - window.pageYOffset
          ) || g),
        (g.fastClickScrollParent = this.targetElement.fastClickScrollParent)),
      (d = g.tagName.toLowerCase()),
      "label" === d)
    ) {
      if ((b = this.findControl(g))) {
        if ((this.focus(g), deviceIsAndroid)) return !1;
        g = b;
      }
    } else if (this.needsFocus(g))
      return a.timeStamp - c > 100 ||
        (deviceIsIOS && window.top !== window && "input" === d)
        ? ((this.targetElement = null), !1)
        : (this.focus(g),
          this.sendClick(g, a),
          (deviceIsIOS4 && "select" === d) ||
            ((this.targetElement = null), a.preventDefault()),
          !1);
    return deviceIsIOS &&
      !deviceIsIOS4 &&
      ((e = g.fastClickScrollParent),
      e && e.fastClickLastScrollTop !== e.scrollTop)
      ? !0
      : (this.needsClick(g) || (a.preventDefault(), this.sendClick(g, a)), !1);
  }),
  (FastClick.prototype.onTouchCancel = function () {
    "use strict";
    (this.trackingClick = !1), (this.targetElement = null);
  }),
  (FastClick.prototype.onMouse = function (a) {
    "use strict";
    return this.targetElement
      ? a.forwardedTouchEvent
        ? !0
        : a.cancelable &&
          (!this.needsClick(this.targetElement) || this.cancelNextClick)
        ? (a.stopImmediatePropagation
            ? a.stopImmediatePropagation()
            : (a.propagationStopped = !0),
          a.stopPropagation(),
          a.preventDefault(),
          !1)
        : !0
      : !0;
  }),
  (FastClick.prototype.onClick = function (a) {
    "use strict";
    var b;
    return this.trackingClick
      ? ((this.targetElement = null), (this.trackingClick = !1), !0)
      : "submit" === a.target.type && 0 === a.detail
      ? !0
      : ((b = this.onMouse(a)), b || (this.targetElement = null), b);
  }),
  (FastClick.prototype.destroy = function () {
    "use strict";
    var a = this.layer;
    deviceIsAndroid &&
      (a.removeEventListener("mouseover", this.onMouse, !0),
      a.removeEventListener("mousedown", this.onMouse, !0),
      a.removeEventListener("mouseup", this.onMouse, !0)),
      a.removeEventListener("click", this.onClick, !0),
      a.removeEventListener("touchstart", this.onTouchStart, !1),
      a.removeEventListener("touchmove", this.onTouchMove, !1),
      a.removeEventListener("touchend", this.onTouchEnd, !1),
      a.removeEventListener("touchcancel", this.onTouchCancel, !1);
  }),
  (FastClick.notNeeded = function (a) {
    "use strict";
    var b, c;
    if ("undefined" == typeof window.ontouchstart) return !0;
    if ((c = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1])) {
      if (!deviceIsAndroid) return !0;
      if ((b = document.querySelector("meta[name=viewport]"))) {
        if (-1 !== b.content.indexOf("user-scalable=no")) return !0;
        if (c > 31 && window.innerWidth <= window.screen.width) return !0;
      }
    }
    return "none" === a.style.msTouchAction ? !0 : !1;
  }),
  (FastClick.attach = function (a) {
    "use strict";
    return new FastClick(a);
  }),
  "undefined" != typeof define && define.amd
    ? define(function () {
        "use strict";
        return FastClick;
      })
    : "undefined" != typeof module && module.exports
    ? ((module.exports = FastClick.attach),
      (module.exports.FastClick = FastClick))
    : (window.FastClick = FastClick),
  (function (a, b, c) {
    function d(a) {
      var b = {},
        d = /^jQuery\d+$/;
      return (
        c.each(a.attributes, function (a, c) {
          c.specified && !d.test(c.name) && (b[c.name] = c.value);
        }),
        b
      );
    }
    function e(a, d) {
      var e = this,
        f = c(e);
      if (e.value == f.attr("placeholder") && f.hasClass("placeholder"))
        if (f.data("placeholder-password")) {
          if (
            ((f = f
              .hide()
              .next()
              .show()
              .attr("id", f.removeAttr("id").data("placeholder-id"))),
            a === !0)
          )
            return (f[0].value = d);
          f.focus();
        } else
          (e.value = ""),
            f.removeClass("placeholder"),
            e == b.activeElement && e.select();
    }
    function f() {
      var a,
        b = this,
        f = c(b),
        g = this.id;
      if ("" == b.value) {
        if ("password" == b.type) {
          if (!f.data("placeholder-textinput")) {
            try {
              a = f.clone().attr({ type: "text" });
            } catch (h) {
              a = c("<input>").attr(c.extend(d(this), { type: "text" }));
            }
            a
              .removeAttr("name")
              .data({ "placeholder-password": !0, "placeholder-id": g })
              .bind("focus.placeholder", e),
              f
                .data({ "placeholder-textinput": a, "placeholder-id": g })
                .before(a);
          }
          f = f.removeAttr("id").hide().prev().attr("id", g).show();
        }
        f.addClass("placeholder"), (f[0].value = f.attr("placeholder"));
      } else f.removeClass("placeholder");
    }
    var g,
      h,
      i = "placeholder" in b.createElement("input"),
      j = "placeholder" in b.createElement("textarea"),
      k = c.fn,
      l = c.valHooks;
    i && j
      ? ((h = k.placeholder =
          function () {
            return this;
          }),
        (h.input = h.textarea = !0))
      : ((h = k.placeholder =
          function () {
            var a = this;
            return (
              a
                .filter((i ? "textarea" : ":input") + "[placeholder]")
                .not(".placeholder")
                .bind({ "focus.placeholder": e, "blur.placeholder": f })
                .data("placeholder-enabled", !0)
                .trigger("blur.placeholder"),
              a
            );
          }),
        (h.input = i),
        (h.textarea = j),
        (g = {
          get: function (a) {
            var b = c(a);
            return b.data("placeholder-enabled") && b.hasClass("placeholder")
              ? ""
              : a.value;
          },
          set: function (a, d) {
            var g = c(a);
            return g.data("placeholder-enabled")
              ? ("" == d
                  ? ((a.value = d), a != b.activeElement && f.call(a))
                  : g.hasClass("placeholder")
                  ? e.call(a, !0, d) || (a.value = d)
                  : (a.value = d),
                g)
              : (a.value = d);
          },
        }),
        i || (l.input = g),
        j || (l.textarea = g),
        c(function () {
          c(b).delegate("form", "submit.placeholder", function () {
            var a = c(".placeholder", this).each(e);
            setTimeout(function () {
              a.each(f);
            }, 10);
          });
        }),
        c(a).bind("beforeunload.placeholder", function () {
          c(".placeholder").each(function () {
            this.value = "";
          });
        }));
  })(this, document, jQuery),
  (function (a) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], a)
      : a(jQuery);
  })(function (a) {
    "use strict";
    function b(c, d) {
      var e = function () {},
        f = this,
        g = {
          autoSelectFirst: !1,
          appendTo: "body",
          serviceUrl: null,
          lookup: null,
          onSelect: null,
          width: "auto",
          minChars: 1,
          maxHeight: 300,
          deferRequestBy: 0,
          params: {},
          formatResult: b.formatResult,
          delimiter: null,
          zIndex: 9999,
          type: "GET",
          noCache: !1,
          onSearchStart: e,
          onSearchComplete: e,
          onSearchError: e,
          containerClass: "autocomplete-suggestions",
          tabDisabled: !1,
          dataType: "text",
          currentRequest: null,
          triggerSelectOnValidInput: !0,
          lookupFilter: function (a, b, c) {
            return -1 !== a.value.toLowerCase().indexOf(c);
          },
          paramName: "query",
          transformResult: function (b) {
            return "string" == typeof b ? a.parseJSON(b) : b;
          },
        };
      (f.element = c),
        (f.el = a(c)),
        (f.suggestions = []),
        (f.badQueries = []),
        (f.selectedIndex = -1),
        (f.currentValue = f.element.value),
        (f.intervalId = 0),
        (f.cachedResponse = {}),
        (f.onChangeInterval = null),
        (f.onChange = null),
        (f.isLocal = !1),
        (f.suggestionsContainer = null),
        (f.options = a.extend({}, g, d)),
        (f.classes = {
          selected: "autocomplete-selected",
          suggestion: "autocomplete-suggestion",
        }),
        (f.hint = null),
        (f.hintValue = ""),
        (f.selection = null),
        f.initialize(),
        f.setOptions(d);
    }
    var c = (function () {
        return {
          escapeRegExChars: function (a) {
            return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
          },
          createNode: function (a) {
            var b = document.createElement("div");
            return (
              (b.className = a),
              (b.style.position = "absolute"),
              (b.style.display = "none"),
              b
            );
          },
        };
      })(),
      d = {
        ESC: 27,
        TAB: 9,
        RETURN: 13,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
      };
    (b.utils = c),
      (a.Autocomplete = b),
      (b.formatResult = function (a, b) {
        var d = "(" + c.escapeRegExChars(b) + ")";
        return a.value.replace(new RegExp(d, "gi"), "<strong>$1</strong>");
      }),
      (b.prototype = {
        killerFn: null,
        initialize: function () {
          var c,
            d = this,
            e = "." + d.classes.suggestion,
            f = d.classes.selected,
            g = d.options;
          d.element.setAttribute("autocomplete", "off"),
            (d.killerFn = function (b) {
              0 ===
                a(b.target).closest("." + d.options.containerClass).length &&
                (d.killSuggestions(), d.disableKillerFn());
            }),
            (d.suggestionsContainer = b.utils.createNode(g.containerClass)),
            (c = a(d.suggestionsContainer)),
            c.appendTo(g.appendTo),
            "auto" !== g.width && c.width(g.width),
            c.on("mouseover.autocomplete", e, function () {
              d.activate(a(this).data("index"));
            }),
            c.on("mouseout.autocomplete", function () {
              (d.selectedIndex = -1), c.children("." + f).removeClass(f);
            }),
            c.on("click.autocomplete", e, function () {
              d.select(a(this).data("index"));
            }),
            d.fixPosition(),
            (d.fixPositionCapture = function () {
              d.visible && d.fixPosition();
            }),
            a(window).on("resize.autocomplete", d.fixPositionCapture),
            d.el.on("keydown.autocomplete", function (a) {
              d.onKeyPress(a);
            }),
            d.el.on("keyup.autocomplete", function (a) {
              d.onKeyUp(a);
            }),
            d.el.on("blur.autocomplete", function () {
              d.onBlur();
            }),
            d.el.on("focus.autocomplete", function () {
              d.onFocus();
            }),
            d.el.on("change.autocomplete", function (a) {
              d.onKeyUp(a);
            });
        },
        onFocus: function () {
          var a = this;
          a.fixPosition(),
            a.options.minChars <= a.el.val().length && a.onValueChange();
        },
        onBlur: function () {
          this.enableKillerFn();
        },
        setOptions: function (b) {
          var c = this,
            d = c.options;
          a.extend(d, b),
            (c.isLocal = a.isArray(d.lookup)),
            c.isLocal && (d.lookup = c.verifySuggestionsFormat(d.lookup)),
            a(c.suggestionsContainer).css({
              "max-height": d.maxHeight + "px",
              width: d.width + "px",
              "z-index": d.zIndex,
            });
        },
        clearCache: function () {
          (this.cachedResponse = {}), (this.badQueries = []);
        },
        clear: function () {
          this.clearCache(), (this.currentValue = ""), (this.suggestions = []);
        },
        disable: function () {
          var a = this;
          (a.disabled = !0), a.currentRequest && a.currentRequest.abort();
        },
        enable: function () {
          this.disabled = !1;
        },
        fixPosition: function () {
          var b,
            c,
            d = this;
          "body" === d.options.appendTo &&
            ((b = d.el.offset()),
            (c = {
              top: b.top + d.el.outerHeight() + "px",
              left: b.left + "px",
            }),
            "auto" === d.options.width &&
              (c.width = d.el.outerWidth() - 2 + "px"),
            a(d.suggestionsContainer).css(c));
        },
        enableKillerFn: function () {
          var b = this;
          a(document).on("click.autocomplete", b.killerFn);
        },
        disableKillerFn: function () {
          var b = this;
          a(document).off("click.autocomplete", b.killerFn);
        },
        killSuggestions: function () {
          var a = this;
          a.stopKillSuggestions(),
            (a.intervalId = window.setInterval(function () {
              a.hide(), a.stopKillSuggestions();
            }, 50));
        },
        stopKillSuggestions: function () {
          window.clearInterval(this.intervalId);
        },
        isCursorAtEnd: function () {
          var a,
            b = this,
            c = b.el.val().length,
            d = b.element.selectionStart;
          return "number" == typeof d
            ? d === c
            : document.selection
            ? ((a = document.selection.createRange()),
              a.moveStart("character", -c),
              c === a.text.length)
            : !0;
        },
        onKeyPress: function (a) {
          var b = this;
          if (!b.disabled && !b.visible && a.which === d.DOWN && b.currentValue)
            return void b.suggest();
          if (!b.disabled && b.visible) {
            switch (a.which) {
              case d.ESC:
                b.el.val(b.currentValue), b.hide();
                break;
              case d.RIGHT:
                if (b.hint && b.options.onHint && b.isCursorAtEnd()) {
                  b.selectHint();
                  break;
                }
                return;
              case d.TAB:
                if (b.hint && b.options.onHint) return void b.selectHint();
              case d.RETURN:
                if (-1 === b.selectedIndex) return void b.hide();
                if (
                  (b.select(b.selectedIndex),
                  a.which === d.TAB && b.options.tabDisabled === !1)
                )
                  return;
                break;
              case d.UP:
                b.moveUp();
                break;
              case d.DOWN:
                b.moveDown();
                break;
              default:
                return;
            }
            a.stopImmediatePropagation(), a.preventDefault();
          }
        },
        onKeyUp: function (a) {
          var b = this;
          if (!b.disabled) {
            switch (a.which) {
              case d.UP:
              case d.DOWN:
                return;
            }
            clearInterval(b.onChangeInterval),
              b.currentValue !== b.el.val() &&
                (b.findBestHint(),
                b.options.deferRequestBy > 0
                  ? (b.onChangeInterval = setInterval(function () {
                      b.onValueChange();
                    }, b.options.deferRequestBy))
                  : b.onValueChange());
          }
        },
        onValueChange: function () {
          var b,
            c = this,
            d = c.options,
            e = c.el.val(),
            f = c.getQuery(e);
          return (
            c.selection &&
              ((c.selection = null),
              (d.onInvalidateSelection || a.noop).call(c.element)),
            clearInterval(c.onChangeInterval),
            (c.currentValue = e),
            (c.selectedIndex = -1),
            d.triggerSelectOnValidInput &&
            ((b = c.findSuggestionIndex(f)), -1 !== b)
              ? void c.select(b)
              : void (f.length < d.minChars ? c.hide() : c.getSuggestions(f))
          );
        },
        findSuggestionIndex: function (b) {
          var c = this,
            d = -1,
            e = b.toLowerCase();
          return (
            a.each(c.suggestions, function (a, b) {
              return b.value.toLowerCase() === e ? ((d = a), !1) : void 0;
            }),
            d
          );
        },
        getQuery: function (b) {
          var c,
            d = this.options.delimiter;
          return d ? ((c = b.split(d)), a.trim(c[c.length - 1])) : b;
        },
        getSuggestionsLocal: function (b) {
          var c,
            d = this,
            e = d.options,
            f = b.toLowerCase(),
            g = e.lookupFilter,
            h = parseInt(e.lookupLimit, 10);
          return (
            (c = {
              suggestions: a.grep(e.lookup, function (a) {
                return g(a, b, f);
              }),
            }),
            h &&
              c.suggestions.length > h &&
              (c.suggestions = c.suggestions.slice(0, h)),
            c
          );
        },
        getSuggestions: function (b) {
          var c,
            d,
            e,
            f = this,
            g = f.options,
            h = g.serviceUrl;
          if (
            ((g.params[g.paramName] = b),
            (d = g.ignoreParams ? null : g.params),
            f.isLocal
              ? (c = f.getSuggestionsLocal(b))
              : (a.isFunction(h) && (h = h.call(f.element, b)),
                (e = h + "?" + a.param(d || {})),
                (c = f.cachedResponse[e])),
            c && a.isArray(c.suggestions))
          )
            (f.suggestions = c.suggestions), f.suggest();
          else if (!f.isBadQuery(b)) {
            if (g.onSearchStart.call(f.element, g.params) === !1) return;
            f.currentRequest && f.currentRequest.abort(),
              (f.currentRequest = a
                .ajax({ url: h, data: d, type: g.type, dataType: g.dataType })
                .done(function (a) {
                  (f.currentRequest = null),
                    f.processResponse(a, b, e),
                    g.onSearchComplete.call(f.element, b);
                })
                .fail(function (a, c, d) {
                  g.onSearchError.call(f.element, b, a, c, d);
                }));
          }
        },
        isBadQuery: function (a) {
          for (var b = this.badQueries, c = b.length; c--; )
            if (0 === a.indexOf(b[c])) return !0;
          return !1;
        },
        hide: function () {
          var b = this;
          (b.visible = !1),
            (b.selectedIndex = -1),
            a(b.suggestionsContainer).hide(),
            b.signalHint(null);
        },
        suggest: function () {
          if (0 === this.suggestions.length) return void this.hide();
          var b,
            c,
            d = this,
            e = d.options,
            f = e.formatResult,
            g = d.getQuery(d.currentValue),
            h = d.classes.suggestion,
            i = d.classes.selected,
            j = a(d.suggestionsContainer),
            k = e.beforeRender,
            l = "";
          return e.triggerSelectOnValidInput &&
            ((b = d.findSuggestionIndex(g)), -1 !== b)
            ? void d.select(b)
            : (a.each(d.suggestions, function (a, b) {
                l +=
                  '<div class="' +
                  h +
                  '" data-index="' +
                  a +
                  '">' +
                  f(b, g) +
                  "</div>";
              }),
              "auto" === e.width &&
                ((c = d.el.outerWidth() - 2), j.width(c > 0 ? c : 300)),
              j.html(l),
              e.autoSelectFirst &&
                ((d.selectedIndex = 0), j.children().first().addClass(i)),
              a.isFunction(k) && k.call(d.element, j),
              j.show(),
              (d.visible = !0),
              void d.findBestHint());
        },
        findBestHint: function () {
          var b = this,
            c = b.el.val().toLowerCase(),
            d = null;
          c &&
            (a.each(b.suggestions, function (a, b) {
              var e = 0 === b.value.toLowerCase().indexOf(c);
              return e && (d = b), !e;
            }),
            b.signalHint(d));
        },
        signalHint: function (b) {
          var c = "",
            d = this;
          b && (c = d.currentValue + b.value.substr(d.currentValue.length)),
            d.hintValue !== c &&
              ((d.hintValue = c),
              (d.hint = b),
              (this.options.onHint || a.noop)(c));
        },
        verifySuggestionsFormat: function (b) {
          return b.length && "string" == typeof b[0]
            ? a.map(b, function (a) {
                return { value: a, data: null };
              })
            : b;
        },
        processResponse: function (a, b, c) {
          var d = this,
            e = d.options,
            f = e.transformResult(a, b);
          (f.suggestions = d.verifySuggestionsFormat(f.suggestions)),
            e.noCache ||
              ((d.cachedResponse[c] = f),
              0 === f.suggestions.length && d.badQueries.push(c)),
            b === d.getQuery(d.currentValue) &&
              ((d.suggestions = f.suggestions), d.suggest());
        },
        activate: function (b) {
          var c,
            d = this,
            e = d.classes.selected,
            f = a(d.suggestionsContainer),
            g = f.children();
          return (
            f.children("." + e).removeClass(e),
            (d.selectedIndex = b),
            -1 !== d.selectedIndex && g.length > d.selectedIndex
              ? ((c = g.get(d.selectedIndex)), a(c).addClass(e), c)
              : null
          );
        },
        selectHint: function () {
          var b = this,
            c = a.inArray(b.hint, b.suggestions);
          b.select(c);
        },
        select: function (a) {
          var b = this;
          b.hide(), b.onSelect(a);
        },
        moveUp: function () {
          var b = this;
          if (-1 !== b.selectedIndex)
            return 0 === b.selectedIndex
              ? (a(b.suggestionsContainer)
                  .children()
                  .first()
                  .removeClass(b.classes.selected),
                (b.selectedIndex = -1),
                b.el.val(b.currentValue),
                void b.findBestHint())
              : void b.adjustScroll(b.selectedIndex - 1);
        },
        moveDown: function () {
          var a = this;
          a.selectedIndex !== a.suggestions.length - 1 &&
            a.adjustScroll(a.selectedIndex + 1);
        },
        adjustScroll: function (b) {
          var c,
            d,
            e,
            f = this,
            g = f.activate(b),
            h = 25;
          g &&
            ((c = g.offsetTop),
            (d = a(f.suggestionsContainer).scrollTop()),
            (e = d + f.options.maxHeight - h),
            d > c
              ? a(f.suggestionsContainer).scrollTop(c)
              : c > e &&
                a(f.suggestionsContainer).scrollTop(
                  c - f.options.maxHeight + h
                ),
            f.el.val(f.getValue(f.suggestions[b].value)),
            f.signalHint(null));
        },
        onSelect: function (b) {
          var c = this,
            d = c.options.onSelect,
            e = c.suggestions[b];
          (c.currentValue = c.getValue(e.value)),
            c.el.val(c.currentValue),
            c.signalHint(null),
            (c.suggestions = []),
            (c.selection = e),
            a.isFunction(d) && d.call(c.element, e);
        },
        getValue: function (a) {
          var b,
            c,
            d = this,
            e = d.options.delimiter;
          return e
            ? ((b = d.currentValue),
              (c = b.split(e)),
              1 === c.length
                ? a
                : b.substr(0, b.length - c[c.length - 1].length) + a)
            : a;
        },
        dispose: function () {
          var b = this;
          b.el.off(".autocomplete").removeData("autocomplete"),
            b.disableKillerFn(),
            a(window).off("resize.autocomplete", b.fixPositionCapture),
            a(b.suggestionsContainer).remove();
        },
      }),
      (a.fn.autocomplete = function (c, d) {
        var e = "autocomplete";
        return 0 === arguments.length
          ? this.first().data(e)
          : this.each(function () {
              var f = a(this),
                g = f.data(e);
              "string" == typeof c
                ? g && "function" == typeof g[c] && g[c](d)
                : (g && g.dispose && g.dispose(),
                  (g = new b(this, c)),
                  f.data(e, g));
            });
      });
  }),
  (function (a, b, c, d) {
    "use strict";
    function e(a) {
      return (
        ("string" == typeof a || a instanceof String) &&
          (a = a.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")),
        a
      );
    }
    var f = function (b) {
      for (var c = b.length, d = a("head"); c--; )
        0 === d.has("." + b[c]).length &&
          d.append('<meta class="' + b[c] + '" />');
    };
    f([
      "foundation-mq-small",
      "foundation-mq-medium",
      "foundation-mq-large",
      "foundation-mq-xlarge",
      "foundation-mq-xxlarge",
      "foundation-data-attribute-namespace",
    ]),
      a(function () {
        "undefined" != typeof FastClick &&
          "undefined" != typeof c.body &&
          FastClick.attach(c.body);
      });
    var g = function (b, d) {
        if ("string" == typeof b) {
          if (d) {
            var e;
            if (d.jquery) {
              if (((e = d[0]), !e)) return d;
            } else e = d;
            return a(e.querySelectorAll(b));
          }
          return a(c.querySelectorAll(b));
        }
        return a(b, d);
      },
      h = function (a) {
        var b = [];
        return (
          a || b.push("data"),
          this.namespace.length > 0 && b.push(this.namespace),
          b.push(this.name),
          b.join("-")
        );
      },
      i = function (a) {
        for (var b = a.split("-"), c = b.length, d = []; c--; )
          0 !== c
            ? d.push(b[c])
            : this.namespace.length > 0
            ? d.push(this.namespace, b[c])
            : d.push(b[c]);
        return d.reverse().join("-");
      },
      j = function (b, c) {
        var d = this,
          e = !g(this).data(this.attr_name(!0));
        return (
          g(this.scope).is("[" + this.attr_name() + "]")
            ? (g(this.scope).data(
                this.attr_name(!0) + "-init",
                a.extend(
                  {},
                  this.settings,
                  c || b,
                  this.data_options(g(this.scope))
                )
              ),
              e && this.events(this.scope))
            : g("[" + this.attr_name() + "]", this.scope).each(function () {
                var e = !g(this).data(d.attr_name(!0) + "-init");
                g(this).data(
                  d.attr_name(!0) + "-init",
                  a.extend({}, d.settings, c || b, d.data_options(g(this)))
                ),
                  e && d.events(this);
              }),
          "string" == typeof b ? this[b].call(this, c) : void 0
        );
      },
      k = function (a, b) {
        function c() {
          b(a[0]);
        }
        function d() {
          if (
            (this.one("load", c), /MSIE (\d+\.\d+);/.test(navigator.userAgent))
          ) {
            var a = this.attr("src"),
              b = a.match(/\?/) ? "&" : "?";
            (b += "random=" + new Date().getTime()), this.attr("src", a + b);
          }
        }
        return a.attr("src")
          ? void (a[0].complete || 4 === a[0].readyState ? c() : d.call(a))
          : void c();
      };
    (b.matchMedia =
      b.matchMedia ||
      (function (a) {
        var b,
          c = a.documentElement,
          d = c.firstElementChild || c.firstChild,
          e = a.createElement("body"),
          f = a.createElement("div");
        return (
          (f.id = "mq-test-1"),
          (f.style.cssText = "position:absolute;top:-100em"),
          (e.style.background = "none"),
          e.appendChild(f),
          function (a) {
            return (
              (f.innerHTML =
                '&shy;<style media="' +
                a +
                '"> #mq-test-1 { width: 42px; }</style>'),
              c.insertBefore(e, d),
              (b = 42 === f.offsetWidth),
              c.removeChild(e),
              { matches: b, media: a }
            );
          }
        );
      })(c)),
      (function () {
        function a() {
          c && (f(a), h && jQuery.fx.tick());
        }
        for (
          var c,
            d = 0,
            e = ["webkit", "moz"],
            f = b.requestAnimationFrame,
            g = b.cancelAnimationFrame,
            h = "undefined" != typeof jQuery.fx;
          d < e.length && !f;
          d++
        )
          (f = b[e[d] + "RequestAnimationFrame"]),
            (g =
              g ||
              b[e[d] + "CancelAnimationFrame"] ||
              b[e[d] + "CancelRequestAnimationFrame"]);
        f
          ? ((b.requestAnimationFrame = f),
            (b.cancelAnimationFrame = g),
            h &&
              ((jQuery.fx.timer = function (b) {
                b() && jQuery.timers.push(b) && !c && ((c = !0), a());
              }),
              (jQuery.fx.stop = function () {
                c = !1;
              })))
          : ((b.requestAnimationFrame = function (a) {
              var c = new Date().getTime(),
                e = Math.max(0, 16 - (c - d)),
                f = b.setTimeout(function () {
                  a(c + e);
                }, e);
              return (d = c + e), f;
            }),
            (b.cancelAnimationFrame = function (a) {
              clearTimeout(a);
            }));
      })(jQuery),
      (b.Foundation = {
        name: "Foundation",
        version: "5.2.3",
        media_queries: {
          small: g(".foundation-mq-small")
            .css("font-family")
            .replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
          medium: g(".foundation-mq-medium")
            .css("font-family")
            .replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
          large: g(".foundation-mq-large")
            .css("font-family")
            .replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
          xlarge: g(".foundation-mq-xlarge")
            .css("font-family")
            .replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
          xxlarge: g(".foundation-mq-xxlarge")
            .css("font-family")
            .replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
        },
        stylesheet: a("<style></style>").appendTo("head")[0].sheet,
        global: { namespace: d },
        init: function (a, b, c, d, e) {
          var f = [a, c, d, e],
            h = [];
          if (
            ((this.rtl = /rtl/i.test(g("html").attr("dir"))),
            (this.scope = a || this.scope),
            this.set_namespace(),
            b && "string" == typeof b && !/reflow/i.test(b))
          )
            this.libs.hasOwnProperty(b) && h.push(this.init_lib(b, f));
          else for (var i in this.libs) h.push(this.init_lib(i, b));
          return a;
        },
        init_lib: function (b, c) {
          return this.libs.hasOwnProperty(b)
            ? (this.patch(this.libs[b]),
              c && c.hasOwnProperty(b)
                ? ("undefined" != typeof this.libs[b].settings
                    ? a.extend(!0, this.libs[b].settings, c[b])
                    : "undefined" != typeof this.libs[b].defaults &&
                      a.extend(!0, this.libs[b].defaults, c[b]),
                  this.libs[b].init.apply(this.libs[b], [this.scope, c[b]]))
                : ((c = c instanceof Array ? c : new Array(c)),
                  this.libs[b].init.apply(this.libs[b], c)))
            : function () {};
        },
        patch: function (a) {
          (a.scope = this.scope),
            (a.namespace = this.global.namespace),
            (a.rtl = this.rtl),
            (a.data_options = this.utils.data_options),
            (a.attr_name = h),
            (a.add_namespace = i),
            (a.bindings = j),
            (a.S = this.utils.S);
        },
        inherit: function (a, b) {
          for (var c = b.split(" "), d = c.length; d--; )
            this.utils.hasOwnProperty(c[d]) && (a[c[d]] = this.utils[c[d]]);
        },
        set_namespace: function () {
          var b =
            this.global.namespace === d
              ? a(".foundation-data-attribute-namespace").css("font-family")
              : this.global.namespace;
          this.global.namespace = b === d || /false/i.test(b) ? "" : b;
        },
        libs: {},
        utils: {
          S: g,
          throttle: function (a, b) {
            var c = null;
            return function () {
              var d = this,
                e = arguments;
              null == c &&
                (c = setTimeout(function () {
                  a.apply(d, e), (c = null);
                }, b));
            };
          },
          debounce: function (a, b, c) {
            var d, e;
            return function () {
              var f = this,
                g = arguments,
                h = function () {
                  (d = null), c || (e = a.apply(f, g));
                },
                i = c && !d;
              return (
                clearTimeout(d),
                (d = setTimeout(h, b)),
                i && (e = a.apply(f, g)),
                e
              );
            };
          },
          data_options: function (b, c) {
            function d(a) {
              return (
                !isNaN(a - 0) && null !== a && "" !== a && a !== !1 && a !== !0
              );
            }
            function e(b) {
              return "string" == typeof b ? a.trim(b) : b;
            }
            c = c || "options";
            var f,
              g,
              h,
              i = {},
              j = function (a) {
                var b = Foundation.global.namespace;
                return a.data(b.length > 0 ? b + "-" + c : c);
              },
              k = j(b);
            if ("object" == typeof k) return k;
            for (h = (k || ":").split(";"), f = h.length; f--; )
              (g = h[f].split(":")),
                (g = [g[0], g.slice(1).join(":")]),
                /true/i.test(g[1]) && (g[1] = !0),
                /false/i.test(g[1]) && (g[1] = !1),
                d(g[1]) &&
                  (g[1] =
                    -1 === g[1].indexOf(".")
                      ? parseInt(g[1], 10)
                      : parseFloat(g[1])),
                2 === g.length && g[0].length > 0 && (i[e(g[0])] = e(g[1]));
            return i;
          },
          register_media: function (b, c) {
            Foundation.media_queries[b] === d &&
              (a("head").append('<meta class="' + c + '">'),
              (Foundation.media_queries[b] = e(a("." + c).css("font-family"))));
          },
          add_custom_rule: function (a, b) {
            if (b === d && Foundation.stylesheet)
              Foundation.stylesheet.insertRule(
                a,
                Foundation.stylesheet.cssRules.length
              );
            else {
              var c = Foundation.media_queries[b];
              c !== d &&
                Foundation.stylesheet.insertRule(
                  "@media " + Foundation.media_queries[b] + "{ " + a + " }"
                );
            }
          },
          image_loaded: function (a, b) {
            var c = this,
              d = a.length;
            0 === d && b(a),
              a.each(function () {
                k(c.S(this), function () {
                  (d -= 1), 0 === d && b(a);
                });
              });
          },
          random_str: function () {
            return (
              this.fidx || (this.fidx = 0),
              (this.prefix =
                this.prefix ||
                [this.name || "F", (+new Date()).toString(36)].join("-")),
              this.prefix + (this.fidx++).toString(36)
            );
          },
        },
      }),
      (a.fn.foundation = function () {
        var a = Array.prototype.slice.call(arguments, 0);
        return this.each(function () {
          return Foundation.init.apply(Foundation, [this].concat(a)), this;
        });
      });
  })(jQuery, window, window.document),
  (function (a, b, c) {
    "use strict";
    Foundation.libs.abide = {
      name: "abide",
      version: "5.2.3",
      settings: {
        live_validate: !0,
        focus_on_invalid: !0,
        error_labels: !0,
        timeout: 1e3,
        patterns: {
          alpha: /^[a-zA-Z]+$/,
          alpha_numeric: /^[a-zA-Z0-9]+$/,
          integer: /^[-+]?\d+$/,
          number: /^[-+]?\d*(?:\.\d+)?$/,
          card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
          cvv: /^([0-9]){3,4}$/,
          email:
            /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
          domain:
            /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,
          datetime:
            /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
          date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
          time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
          dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
          month_day_year:
            /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
          color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
        },
        validators: {
          equalTo: function (a) {
            var b = c.getElementById(
                a.getAttribute(this.add_namespace("data-equalto"))
              ).value,
              d = a.value,
              e = b === d;
            return e;
          },
        },
      },
      timer: null,
      init: function (a, b, c) {
        this.bindings(b, c);
      },
      events: function (b) {
        var c = this,
          d = c.S(b).attr("novalidate", "novalidate"),
          e = d.data(this.attr_name(!0) + "-init") || {};
        (this.invalid_attr = this.add_namespace("data-invalid")),
          d
            .off(".abide")
            .on("submit.fndtn.abide validate.fndtn.abide", function (a) {
              var b = /ajax/i.test(c.S(this).attr(c.attr_name()));
              return c.validate(
                c.S(this).find("input, textarea, select").get(),
                a,
                b
              );
            })
            .on("reset", function () {
              return c.reset(a(this));
            })
            .find("input, textarea, select")
            .off(".abide")
            .on("blur.fndtn.abide change.fndtn.abide", function (a) {
              c.validate([this], a);
            })
            .on("keydown.fndtn.abide", function (a) {
              e.live_validate === !0 &&
                (clearTimeout(c.timer),
                (c.timer = setTimeout(
                  function () {
                    c.validate([this], a);
                  }.bind(this),
                  e.timeout
                )));
            });
      },
      reset: function (b) {
        b.removeAttr(this.invalid_attr),
          a(this.invalid_attr, b).removeAttr(this.invalid_attr),
          a(".error", b).not("small").removeClass("error");
      },
      validate: function (a, b, c) {
        var d = this.parse_patterns(a),
          e = d.length,
          f = this.S(a[0]).closest("[data-" + this.attr_name(!0) + "]"),
          g = f.data(this.attr_name(!0) + "-init") || {},
          h = /submit/.test(b.type);
        f.trigger("validated");
        for (var i = 0; e > i; i++)
          if (!d[i] && (h || c))
            return (
              g.focus_on_invalid && a[i].focus(),
              f.trigger("invalid"),
              this.S(a[i])
                .closest("[data-" + this.attr_name(!0) + "]")
                .attr(this.invalid_attr, ""),
              !1
            );
        return (
          (h || c) && f.trigger("valid"),
          f.removeAttr(this.invalid_attr),
          c ? !1 : !0
        );
      },
      parse_patterns: function (a) {
        for (var b = a.length, c = []; b--; ) c.push(this.pattern(a[b]));
        return this.check_validation_and_apply_styles(c);
      },
      pattern: function (a) {
        var b = a.getAttribute("type"),
          c = "string" == typeof a.getAttribute("required"),
          d = a.getAttribute("pattern") || "";
        return this.settings.patterns.hasOwnProperty(d) && d.length > 0
          ? [a, this.settings.patterns[d], c]
          : d.length > 0
          ? [a, new RegExp("^" + d + "$"), c]
          : this.settings.patterns.hasOwnProperty(b)
          ? [a, this.settings.patterns[b], c]
          : ((d = /.*/), [a, d, c]);
      },
      check_validation_and_apply_styles: function (b) {
        for (
          var c = b.length,
            d = [],
            e = this.S(b[0][0]).closest("[data-" + this.attr_name(!0) + "]"),
            f = e.data(this.attr_name(!0) + "-init") || {};
          c--;

        ) {
          var g,
            h,
            i = b[c][0],
            j = b[c][2],
            k = i.value.trim(),
            l = this.S(i).parent(),
            m = i.getAttribute(this.add_namespace("data-abide-validator")),
            n = "radio" === i.type,
            o = "checkbox" === i.type,
            p = this.S('label[for="' + i.getAttribute("id") + '"]'),
            q = j ? i.value.length > 0 : !0;
          i.getAttribute(this.add_namespace("data-equalto")) && (m = "equalTo"),
            (g = l.is("label") ? l.parent() : l),
            n && j
              ? d.push(this.valid_radio(i, j))
              : o && j
              ? d.push(this.valid_checkbox(i, j))
              : m
              ? ((h = this.settings.validators[m].apply(this, [i, j, g])),
                d.push(h),
                h
                  ? (this.S(i).removeAttr(this.invalid_attr),
                    g.removeClass("error"))
                  : (this.S(i).attr(this.invalid_attr, ""),
                    g.addClass("error")))
              : (b[c][1].test(k) && q) ||
                (!j && i.value.length < 1) ||
                a(i).attr("disabled")
              ? (this.S(i).removeAttr(this.invalid_attr),
                g.removeClass("error"),
                p.length > 0 && f.error_labels && p.removeClass("error"),
                d.push(!0),
                a(i).triggerHandler("valid"))
              : (this.S(i).attr(this.invalid_attr, ""),
                g.addClass("error"),
                p.length > 0 && f.error_labels && p.addClass("error"),
                d.push(!1),
                a(i).triggerHandler("invalid"));
        }
        return d;
      },
      valid_checkbox: function (a, b) {
        var a = this.S(a),
          c = a.is(":checked") || !b;
        return (
          c
            ? a.removeAttr(this.invalid_attr).parent().removeClass("error")
            : a.attr(this.invalid_attr, "").parent().addClass("error"),
          c
        );
      },
      valid_radio: function (a) {
        for (
          var b = a.getAttribute("name"),
            c = this.S(a)
              .closest("[data-" + this.attr_name(!0) + "]")
              .find("[name='" + b + "']"),
            d = c.length,
            e = !1,
            f = 0;
          d > f;
          f++
        )
          c[f].checked && (e = !0);
        for (var f = 0; d > f; f++)
          e
            ? this.S(c[f])
                .removeAttr(this.invalid_attr)
                .parent()
                .removeClass("error")
            : this.S(c[f])
                .attr(this.invalid_attr, "")
                .parent()
                .addClass("error");
        return e;
      },
      valid_equal: function (a, b, d) {
        var e = c.getElementById(
            a.getAttribute(this.add_namespace("data-equalto"))
          ).value,
          f = a.value,
          g = e === f;
        return (
          g
            ? (this.S(a).removeAttr(this.invalid_attr), d.removeClass("error"))
            : (this.S(a).attr(this.invalid_attr, ""), d.addClass("error")),
          g
        );
      },
      valid_oneof: function (a, b, c, d) {
        var a = this.S(a),
          e = this.S("[" + this.add_namespace("data-oneof") + "]"),
          f = e.filter(":checked").length > 0;
        if (
          (f
            ? a.removeAttr(this.invalid_attr).parent().removeClass("error")
            : a.attr(this.invalid_attr, "").parent().addClass("error"),
          !d)
        ) {
          var g = this;
          e.each(function () {
            g.valid_oneof.call(g, this, null, null, !0);
          });
        }
        return f;
      },
    };
  })(jQuery, window, window.document),
  (function (a) {
    "use strict";
    Foundation.libs.accordion = {
      name: "accordion",
      version: "5.2.3",
      settings: {
        active_class: "active",
        multi_expand: !1,
        toggleable: !0,
        callback: function () {},
      },
      init: function (a, b, c) {
        this.bindings(b, c);
      },
      events: function () {
        var b = this,
          c = this.S;
        c(this.scope)
          .off(".fndtn.accordion")
          .on(
            "click.fndtn.accordion",
            "[" + this.attr_name() + "] > dd > a",
            function (d) {
              var e = c(this).closest("[" + b.attr_name() + "]"),
                f = c("#" + this.href.split("#")[1]),
                g = c("dd > .content", e),
                h = a("dd", e),
                i = b.attr_name() + "=" + e.attr(b.attr_name()),
                j = e.data(b.attr_name(!0) + "-init"),
                k = c("dd > .content." + j.active_class, e);
              return (
                d.preventDefault(),
                e.attr(b.attr_name()) &&
                  ((g = g.add("[" + i + "] dd > .content")),
                  (h = h.add("[" + i + "] dd"))),
                j.toggleable && f.is(k)
                  ? (f.parent("dd").toggleClass(j.active_class, !1),
                    f.toggleClass(j.active_class, !1))
                  : (j.multi_expand ||
                      (g.removeClass(j.active_class),
                      h.removeClass(j.active_class)),
                    f
                      .addClass(j.active_class)
                      .parent()
                      .addClass(j.active_class),
                    void j.callback(f))
              );
            }
          );
      },
      off: function () {},
      reflow: function () {},
    };
  })(jQuery, window, window.document),
  (function (a, b) {
    "use strict";
    Foundation.libs.alert = {
      name: "alert",
      version: "5.2.3",
      settings: { callback: function () {} },
      init: function (a, b, c) {
        this.bindings(b, c);
      },
      events: function () {
        var c = this,
          d = this.S;
        a(this.scope)
          .off(".alert")
          .on(
            "click.fndtn.alert",
            "[" + this.attr_name() + "] a.close",
            function (a) {
              var e = d(this).closest("[" + c.attr_name() + "]"),
                f = e.data(c.attr_name(!0) + "-init") || c.settings;
              a.preventDefault(),
                "transitionend" in b ||
                "webkitTransitionEnd" in b ||
                "oTransitionEnd" in b
                  ? (e.addClass("alert-close"),
                    e.on(
                      "transitionend webkitTransitionEnd oTransitionEnd",
                      function () {
                        d(this).trigger("close").remove(), f.callback();
                      }
                    ))
                  : e.fadeOut(300, function () {
                      d(this).trigger("close").remove(), f.callback();
                    });
            }
          );
      },
      reflow: function () {},
    };
  })(jQuery, window, window.document),
  (function (a, b, c, d) {
    "use strict";
    Foundation.libs.clearing = {
      name: "clearing",
      version: "5.2.3",
      settings: {
        templates: {
          viewing:
            '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>',
        },
        close_selectors: ".clearing-close",
        open_selectors: "",
        touch_label: "",
        init: !1,
        locked: !1,
      },
      init: function (a, b, c) {
        var d = this;
        Foundation.inherit(this, "throttle image_loaded"),
          this.bindings(b, c),
          d.S(this.scope).is("[" + this.attr_name() + "]")
            ? this.assemble(d.S("li", this.scope))
            : d.S("[" + this.attr_name() + "]", this.scope).each(function () {
                d.assemble(d.S("li", this));
              });
      },
      events: function (d) {
        var e = this,
          f = e.S,
          g = a(".scroll-container");
        g.length > 0 && (this.scope = g),
          f(this.scope)
            .off(".clearing")
            .on(
              "click.fndtn.clearing",
              "ul[" + this.attr_name() + "] li " + this.settings.open_selectors,
              function (a, b, c) {
                var b = b || f(this),
                  c = c || b,
                  d = b.next("li"),
                  g = b
                    .closest("[" + e.attr_name() + "]")
                    .data(e.attr_name(!0) + "-init"),
                  h = f(a.target);
                a.preventDefault(),
                  g ||
                    (e.init(),
                    (g = b
                      .closest("[" + e.attr_name() + "]")
                      .data(e.attr_name(!0) + "-init"))),
                  c.hasClass("visible") &&
                    b[0] === c[0] &&
                    d.length > 0 &&
                    e.is_open(b) &&
                    ((c = d), (h = f("img", c))),
                  e.open(h, b, c),
                  e.update_paddles(c);
              }
            )
            .on("click.fndtn.clearing", ".clearing-main-next", function (a) {
              e.nav(a, "next");
            })
            .on("click.fndtn.clearing", ".clearing-main-prev", function (a) {
              e.nav(a, "prev");
            })
            .on(
              "click.fndtn.clearing",
              this.settings.close_selectors,
              function (a) {
                Foundation.libs.clearing.close(a, this);
              }
            ),
          a(c).on("keydown.fndtn.clearing", function (a) {
            e.keydown(a);
          }),
          f(b)
            .off(".clearing")
            .on("resize.fndtn.clearing", function () {
              e.resize();
            }),
          this.swipe_events(d);
      },
      swipe_events: function () {
        var a = this,
          b = a.S;
        b(this.scope)
          .on("touchstart.fndtn.clearing", ".visible-img", function (a) {
            a.touches || (a = a.originalEvent);
            var c = {
              start_page_x: a.touches[0].pageX,
              start_page_y: a.touches[0].pageY,
              start_time: new Date().getTime(),
              delta_x: 0,
              is_scrolling: d,
            };
            b(this).data("swipe-transition", c), a.stopPropagation();
          })
          .on("touchmove.fndtn.clearing", ".visible-img", function (c) {
            if (
              (c.touches || (c = c.originalEvent),
              !(c.touches.length > 1 || (c.scale && 1 !== c.scale)))
            ) {
              var d = b(this).data("swipe-transition");
              if (
                ("undefined" == typeof d && (d = {}),
                (d.delta_x = c.touches[0].pageX - d.start_page_x),
                "undefined" == typeof d.is_scrolling &&
                  (d.is_scrolling = !!(
                    d.is_scrolling ||
                    Math.abs(d.delta_x) <
                      Math.abs(c.touches[0].pageY - d.start_page_y)
                  )),
                !d.is_scrolling && !d.active)
              ) {
                c.preventDefault();
                var e = d.delta_x < 0 ? "next" : "prev";
                (d.active = !0), a.nav(c, e);
              }
            }
          })
          .on("touchend.fndtn.clearing", ".visible-img", function (a) {
            b(this).data("swipe-transition", {}), a.stopPropagation();
          });
      },
      assemble: function (b) {
        var c = b.parent();
        if (!c.parent().hasClass("carousel")) {
          c.after('<div id="foundationClearingHolder"></div>');
          var d = c.detach(),
            e = "";
          if (null != d[0]) {
            e = d[0].outerHTML;
            var f = this.S("#foundationClearingHolder"),
              g = c.data(this.attr_name(!0) + "-init"),
              h = {
                grid: '<div class="carousel">' + e + "</div>",
                viewing: g.templates.viewing,
              },
              i =
                '<div class="clearing-assembled"><div>' +
                h.viewing +
                h.grid +
                "</div></div>",
              j = this.settings.touch_label;
            Modernizr.touch &&
              (i = a(i).find(".clearing-touch-label").html(j).end()),
              f.after(i).remove();
          }
        }
      },
      open: function (b, d, e) {
        function f() {
          setTimeout(
            function () {
              this.image_loaded(
                m,
                function () {
                  1 !== m.outerWidth() || o ? g.call(this, m) : f.call(this);
                }.bind(this)
              );
            }.bind(this),
            50
          );
        }
        function g(b) {
          var c = a(b);
          c.css("visibility", "visible"),
            i.css("overflow", "hidden"),
            j.addClass("clearing-blackout"),
            k.addClass("clearing-container"),
            l.show(),
            this.fix_height(e)
              .caption(h.S(".clearing-caption", l), h.S("img", e))
              .center_and_label(b, n)
              .shift(d, e, function () {
                e.closest("li").siblings().removeClass("visible"),
                  e.closest("li").addClass("visible");
              }),
            l.trigger("opened.fndtn.clearing");
        }
        var h = this,
          i = a(c.body),
          j = e.closest(".clearing-assembled"),
          k = h.S("div", j).first(),
          l = h.S(".visible-img", k),
          m = h.S("img", l).not(b),
          n = h.S(".clearing-touch-label", k),
          o = !1;
        m.error(function () {
          o = !0;
        }),
          this.locked() ||
            (l.trigger("open.fndtn.clearing"),
            m.attr("src", this.load(b)).css("visibility", "hidden"),
            f.call(this));
      },
      close: function (b, d) {
        b.preventDefault();
        var e,
          f,
          g = (function (a) {
            return /blackout/.test(a.selector)
              ? a
              : a.closest(".clearing-blackout");
          })(a(d)),
          h = a(c.body);
        return (
          d === b.target &&
            g &&
            (h.css("overflow", ""),
            (e = a("div", g).first()),
            (f = a(".visible-img", e)),
            f.trigger("close.fndtn.clearing"),
            (this.settings.prev_index = 0),
            a("ul[" + this.attr_name() + "]", g)
              .attr("style", "")
              .closest(".clearing-blackout")
              .removeClass("clearing-blackout"),
            e.removeClass("clearing-container"),
            f.hide(),
            f.trigger("closed.fndtn.clearing")),
          !1
        );
      },
      is_open: function (a) {
        return a.parent().prop("style").length > 0;
      },
      keydown: function (b) {
        var c = a(".clearing-blackout ul[" + this.attr_name() + "]"),
          d = this.rtl ? 37 : 39,
          e = this.rtl ? 39 : 37,
          f = 27;
        b.which === d && this.go(c, "next"),
          b.which === e && this.go(c, "prev"),
          b.which === f && this.S("a.clearing-close").trigger("click");
      },
      nav: function (b, c) {
        var d = a("ul[" + this.attr_name() + "]", ".clearing-blackout");
        b.preventDefault(), this.go(d, c);
      },
      resize: function () {
        var b = a("img", ".clearing-blackout .visible-img"),
          c = a(".clearing-touch-label", ".clearing-blackout");
        b.length &&
          (this.center_and_label(b, c), b.trigger("resized.fndtn.clearing"));
      },
      fix_height: function (a) {
        var b = a.parent().children(),
          c = this;
        return (
          b
            .each(function () {
              var a = c.S(this),
                b = a.find("img");
              a.height() > b.outerHeight() && a.addClass("fix-height");
            })
            .closest("ul")
            .width(100 * b.length + "%"),
          this
        );
      },
      update_paddles: function (a) {
        a = a.closest("li");
        var b = a.closest(".carousel").siblings(".visible-img");
        a.next().length > 0
          ? this.S(".clearing-main-next", b).removeClass("disabled")
          : this.S(".clearing-main-next", b).addClass("disabled"),
          a.prev().length > 0
            ? this.S(".clearing-main-prev", b).removeClass("disabled")
            : this.S(".clearing-main-prev", b).addClass("disabled");
      },
      center_and_label: function (a, b) {
        return (
          this.rtl
            ? (a.css({
                marginRight: -(a.outerWidth() / 2),
                marginTop: -(a.outerHeight() / 2),
                left: "auto",
                right: "50%",
              }),
              b.length > 0 &&
                b.css({
                  marginRight: -(b.outerWidth() / 2),
                  marginTop: -(a.outerHeight() / 2) - b.outerHeight() - 10,
                  left: "auto",
                  right: "50%",
                }))
            : (a.css({
                marginLeft: -(a.outerWidth() / 2),
                marginTop: -(a.outerHeight() / 2),
              }),
              b.length > 0 &&
                b.css({
                  marginLeft: -(b.outerWidth() / 2),
                  marginTop: -(a.outerHeight() / 2) - b.outerHeight() - 10,
                })),
          this
        );
      },
      load: function (a) {
        var b;
        return (
          (b =
            "A" === a[0].nodeName ? a.attr("href") : a.parent().attr("href")),
          this.preload(a),
          b ? b : a.attr("src")
        );
      },
      preload: function (a) {
        this.img(a.closest("li").next()).img(a.closest("li").prev());
      },
      img: function (a) {
        if (a.length) {
          var b = new Image(),
            c = this.S("a", a);
          b.src = c.length ? c.attr("href") : this.S("img", a).attr("src");
        }
        return this;
      },
      caption: function (a, b) {
        var c = b.attr("data-caption");
        return c ? a.html(c).show() : a.text("").hide(), this;
      },
      go: function (a, b) {
        var c = this.S(".visible", a),
          d = c[b]();
        d.length &&
          this.S("img", d)
            .trigger("click", [c, d])
            .trigger("change.fndtn.clearing");
      },
      shift: function (a, b, c) {
        var d,
          e = b.parent(),
          f = this.settings.prev_index || b.index(),
          g = this.direction(e, a, b),
          h = this.rtl ? "right" : "left",
          i = parseInt(e.css("left"), 10),
          j = b.outerWidth(),
          k = {};
        b.index() === f || /skip/.test(g)
          ? /skip/.test(g) &&
            ((d = b.index() - this.settings.up_count),
            this.lock(),
            d > 0
              ? ((k[h] = -(d * j)), e.animate(k, 300, this.unlock()))
              : ((k[h] = 0), e.animate(k, 300, this.unlock())))
          : /left/.test(g)
          ? (this.lock(), (k[h] = i + j), e.animate(k, 300, this.unlock()))
          : /right/.test(g) &&
            (this.lock(), (k[h] = i - j), e.animate(k, 300, this.unlock())),
          c();
      },
      direction: function (a, b, c) {
        var d,
          e = this.S("li", a),
          f = e.outerWidth() + e.outerWidth() / 4,
          g = Math.floor(this.S(".clearing-container").outerWidth() / f) - 1,
          h = e.index(c);
        return (
          (this.settings.up_count = g),
          (d = this.adjacent(this.settings.prev_index, h)
            ? h > g && h > this.settings.prev_index
              ? "right"
              : h > g - 1 && h <= this.settings.prev_index
              ? "left"
              : !1
            : "skip"),
          (this.settings.prev_index = h),
          d
        );
      },
      adjacent: function (a, b) {
        for (var c = b + 1; c >= b - 1; c--) if (c === a) return !0;
        return !1;
      },
      lock: function () {
        this.settings.locked = !0;
      },
      unlock: function () {
        this.settings.locked = !1;
      },
      locked: function () {
        return this.settings.locked;
      },
      off: function () {
        this.S(this.scope).off(".fndtn.clearing"),
          this.S(b).off(".fndtn.clearing");
      },
      reflow: function () {
        this.init();
      },
    };
  })(jQuery, window, window.document),
  (function (a, b) {
    "use strict";
    Foundation.libs.dropdown = {
      name: "dropdown",
      version: "5.2.3",
      settings: {
        active_class: "open",
        align: "bottom",
        is_hover: !1,
        opened: function () {},
        closed: function () {},
      },
      init: function (a, b, c) {
        Foundation.inherit(this, "throttle"), this.bindings(b, c);
      },
      events: function () {
        var c = this,
          d = c.S;
        d(this.scope)
          .off(".dropdown")
          .on(
            "click.fndtn.dropdown",
            "[" + this.attr_name() + "]",
            function (b) {
              var e = d(this).data(c.attr_name(!0) + "-init") || c.settings;
              (!e.is_hover || Modernizr.touch) &&
                (b.preventDefault(), c.toggle(a(this)));
            }
          )
          .on(
            "mouseenter.fndtn.dropdown",
            "[" + this.attr_name() + "], [" + this.attr_name() + "-content]",
            function (a) {
              var b,
                e,
                f = d(this);
              clearTimeout(c.timeout),
                f.data(c.data_attr())
                  ? ((b = d("#" + f.data(c.data_attr()))), (e = f))
                  : ((b = f),
                    (e = d("[" + c.attr_name() + "='" + b.attr("id") + "']")));
              var g = e.data(c.attr_name(!0) + "-init") || c.settings;
              d(a.target).data(c.data_attr()) &&
                g.is_hover &&
                c.closeall.call(c),
                g.is_hover && c.open.apply(c, [b, e]);
            }
          )
          .on(
            "mouseleave.fndtn.dropdown",
            "[" + this.attr_name() + "], [" + this.attr_name() + "-content]",
            function () {
              var a = d(this);
              c.timeout = setTimeout(
                function () {
                  if (a.data(c.data_attr())) {
                    var b = a.data(c.data_attr(!0) + "-init") || c.settings;
                    b.is_hover &&
                      c.close.call(c, d("#" + a.data(c.data_attr())));
                  } else {
                    var e = d(
                        "[" + c.attr_name() + '="' + d(this).attr("id") + '"]'
                      ),
                      b = e.data(c.attr_name(!0) + "-init") || c.settings;
                    b.is_hover && c.close.call(c, a);
                  }
                }.bind(this),
                150
              );
            }
          )
          .on("click.fndtn.dropdown", function (b) {
            var e = d(b.target).closest("[" + c.attr_name() + "-content]");
            if (
              !d(b.target).data(c.data_attr()) &&
              !d(b.target).parent().data(c.data_attr())
            )
              return !d(b.target).data("revealId") &&
                e.length > 0 &&
                (d(b.target).is("[" + c.attr_name() + "-content]") ||
                  a.contains(e.first()[0], b.target))
                ? void b.stopPropagation()
                : void c.close.call(c, d("[" + c.attr_name() + "-content]"));
          })
          .on(
            "opened.fndtn.dropdown",
            "[" + c.attr_name() + "-content]",
            function () {
              c.settings.opened.call(this);
            }
          )
          .on(
            "closed.fndtn.dropdown",
            "[" + c.attr_name() + "-content]",
            function () {
              c.settings.closed.call(this);
            }
          ),
          d(b)
            .off(".dropdown")
            .on(
              "resize.fndtn.dropdown",
              c.throttle(function () {
                c.resize.call(c);
              }, 50)
            ),
          this.resize();
      },
      close: function (a) {
        var b = this;
        a.each(function () {
          b.S(this).hasClass(b.settings.active_class) &&
            (b
              .S(this)
              .css(Foundation.rtl ? "right" : "left", "-99999px")
              .removeClass(b.settings.active_class)
              .prev("[" + b.attr_name() + "]")
              .removeClass(b.settings.active_class)
              .removeData("target"),
            b.S(this).trigger("closed", [a]));
        });
      },
      closeall: function () {
        var b = this;
        a.each(b.S("[" + this.attr_name() + "-content]"), function () {
          b.close.call(b, b.S(this));
        });
      },
      open: function (a, b) {
        this.css(a.addClass(this.settings.active_class), b),
          a
            .prev("[" + this.attr_name() + "]")
            .addClass(this.settings.active_class),
          a.data("target", b.get(0)).trigger("opened", [a, b]);
      },
      data_attr: function () {
        return this.namespace.length > 0
          ? this.namespace + "-" + this.name
          : this.name;
      },
      toggle: function (a) {
        var b = this.S("#" + a.data(this.data_attr()));
        0 !== b.length &&
          (this.close.call(
            this,
            this.S("[" + this.attr_name() + "-content]").not(b)
          ),
          b.hasClass(this.settings.active_class)
            ? (this.close.call(this, b),
              b.data("target") !== a.get(0) && this.open.call(this, b, a))
            : this.open.call(this, b, a));
      },
      resize: function () {
        var a = this.S("[" + this.attr_name() + "-content].open"),
          b = this.S("[" + this.attr_name() + "='" + a.attr("id") + "']");
        a.length && b.length && this.css(a, b);
      },
      css: function (a, b) {
        var c = (b.width() - a.width()) / 2;
        if ((this.clear_idx(), this.small())) {
          var d = this.dirs.bottom.call(a, b);
          a
            .attr("style", "")
            .removeClass("drop-left drop-right drop-top")
            .css({
              position: "absolute",
              width: "95%",
              "max-width": "none",
              top: d.top,
            }),
            a.css(Foundation.rtl ? "right" : "left", c);
        } else {
          var e = b.data(this.attr_name(!0) + "-init") || this.settings;
          this.style(a, b, e);
        }
        return a;
      },
      style: function (b, c, d) {
        var e = a.extend(
          { position: "absolute" },
          this.dirs[d.align].call(b, c, d)
        );
        b.attr("style", "").css(e);
      },
      dirs: {
        _base: function (a) {
          var b = this.offsetParent(),
            c = b.offset(),
            d = a.offset();
          return (d.top -= c.top), (d.left -= c.left), d;
        },
        top: function (a) {
          var b = Foundation.libs.dropdown,
            c = b.dirs._base.call(this, a),
            d = a.outerWidth() / 2 - 8;
          return (
            this.addClass("drop-top"),
            (a.outerWidth() < this.outerWidth() || b.small()) &&
              b.adjust_pip(d, c),
            Foundation.rtl
              ? {
                  left: c.left - this.outerWidth() + a.outerWidth(),
                  top: c.top - this.outerHeight(),
                }
              : { left: c.left, top: c.top - this.outerHeight() }
          );
        },
        bottom: function (a) {
          var b = Foundation.libs.dropdown,
            c = b.dirs._base.call(this, a),
            d = this.outerWidth() / 2 - 8;
          return (
            (a.outerWidth() < this.outerWidth() || b.small()) &&
              b.adjust_pip(d, c),
            b.rtl
              ? {
                  left: c.left - this.outerWidth() + a.outerWidth(),
                  top: c.top + a.outerHeight(),
                }
              : { left: c.left, top: c.top + a.outerHeight() }
          );
        },
        left: function (a) {
          var b = Foundation.libs.dropdown.dirs._base.call(this, a);
          return (
            this.addClass("drop-left"),
            { left: b.left - this.outerWidth(), top: b.top }
          );
        },
        right: function (a) {
          var b = Foundation.libs.dropdown.dirs._base.call(this, a);
          return (
            this.addClass("drop-right"),
            { left: b.left + a.outerWidth(), top: b.top }
          );
        },
      },
      adjust_pip: function (a, b) {
        var c = Foundation.stylesheet;
        this.small() && (a += b.left - 8), (this.rule_idx = c.cssRules.length);
        var d = ".f-dropdown.open:before",
          e = ".f-dropdown.open:after",
          f = "left: " + a + "px;",
          g = "left: " + (a - 1) + "px;";
        c.insertRule
          ? (c.insertRule([d, "{", f, "}"].join(" "), this.rule_idx),
            c.insertRule([e, "{", g, "}"].join(" "), this.rule_idx + 1))
          : (c.addRule(d, f, this.rule_idx),
            c.addRule(e, g, this.rule_idx + 1));
      },
      clear_idx: function () {
        var a = Foundation.stylesheet;
        this.rule_idx &&
          (a.deleteRule(this.rule_idx),
          a.deleteRule(this.rule_idx),
          delete this.rule_idx);
      },
      small: function () {
        return (
          matchMedia(Foundation.media_queries.small).matches &&
          !matchMedia(Foundation.media_queries.medium).matches
        );
      },
      off: function () {
        this.S(this.scope).off(".fndtn.dropdown"),
          this.S("html, body").off(".fndtn.dropdown"),
          this.S(b).off(".fndtn.dropdown"),
          this.S("[data-dropdown-content]").off(".fndtn.dropdown");
      },
      reflow: function () {},
    };
  })(jQuery, window, window.document),
  (function (a, b) {
    "use strict";
    Foundation.libs.equalizer = {
      name: "equalizer",
      version: "5.2.3",
      settings: {
        use_tallest: !0,
        before_height_change: a.noop,
        after_height_change: a.noop,
        equalize_on_stack: !1,
      },
      init: function (a, b, c) {
        Foundation.inherit(this, "image_loaded"),
          this.bindings(b, c),
          this.reflow();
      },
      events: function () {
        this.S(b)
          .off(".equalizer")
          .on(
            "resize.fndtn.equalizer",
            function () {
              this.reflow();
            }.bind(this)
          );
      },
      equalize: function (b) {
        var c = !1,
          d = b.find("[" + this.attr_name() + "-watch]:visible"),
          e = b.data(this.attr_name(!0) + "-init");
        if (0 !== d.length) {
          var f = d.first().offset().top;
          if (
            (e.before_height_change(),
            b.trigger("before-height-change"),
            d.height("inherit"),
            d.each(function () {
              var b = a(this);
              b.offset().top !== f && (c = !0);
            }),
            e.equalize_on_stack !== !1 || !c)
          ) {
            var g = d
              .map(function () {
                return a(this).outerHeight(!1);
              })
              .get();
            if (e.use_tallest) {
              var h = Math.max.apply(null, g);
              d.css("height", h);
            } else {
              var i = Math.min.apply(null, g);
              d.css("height", i);
            }
            e.after_height_change(), b.trigger("after-height-change");
          }
        }
      },
      reflow: function () {
        var b = this;
        this.S("[" + this.attr_name() + "]", this.scope).each(function () {
          var c = a(this);
          b.image_loaded(b.S("img", this), function () {
            b.equalize(c);
          });
        });
      },
    };
  })(jQuery, window, window.document),
  (function (a, b) {
    "use strict";
    Foundation.libs.interchange = {
      name: "interchange",
      version: "5.2.3",
      cache: {},
      images_loaded: !1,
      nodes_loaded: !1,
      settings: {
        load_attr: "interchange",
        named_queries: {
          default: "only screen",
          small: Foundation.media_queries.small,
          medium: Foundation.media_queries.medium,
          large: Foundation.media_queries.large,
          xlarge: Foundation.media_queries.xlarge,
          xxlarge: Foundation.media_queries.xxlarge,
          landscape: "only screen and (orientation: landscape)",
          portrait: "only screen and (orientation: portrait)",
          retina:
            "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)",
        },
        directives: {
          replace: function (b, c, d) {
            if (/IMG/.test(b[0].nodeName)) {
              var e = b[0].src;
              if (new RegExp(c, "i").test(e)) return;
              return (b[0].src = c), d(b[0].src);
            }
            var f = b.data(this.data_attr + "-last-path");
            if (f != c)
              return /\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(c)
                ? (a(b).css("background-image", "url(" + c + ")"),
                  b.data("interchange-last-path", c),
                  d(c))
                : a.get(c, function (a) {
                    b.html(a), b.data(this.data_attr + "-last-path", c), d();
                  });
          },
        },
      },
      init: function (b, c, d) {
        Foundation.inherit(this, "throttle random_str"),
          (this.data_attr = this.set_data_attr()),
          a.extend(!0, this.settings, c, d),
          this.bindings(c, d),
          this.load("images"),
          this.load("nodes");
      },
      get_media_hash: function () {
        var a = "";
        for (var b in this.settings.named_queries)
          a += matchMedia(this.settings.named_queries[b]).matches.toString();
        return a;
      },
      events: function () {
        var c,
          d = this;
        return (
          a(b)
            .off(".interchange")
            .on(
              "resize.fndtn.interchange",
              d.throttle(function () {
                var a = d.get_media_hash();
                a !== c && d.resize(), (c = a);
              }, 50)
            ),
          this
        );
      },
      resize: function () {
        var b = this.cache;
        if (!this.images_loaded || !this.nodes_loaded)
          return void setTimeout(a.proxy(this.resize, this), 50);
        for (var c in b)
          if (b.hasOwnProperty(c)) {
            var d = this.results(c, b[c]);
            d &&
              this.settings.directives[d.scenario[1]].call(
                this,
                d.el,
                d.scenario[0],
                function () {
                  if (arguments[0] instanceof Array) var a = arguments[0];
                  else var a = Array.prototype.slice.call(arguments, 0);
                  d.el.trigger(d.scenario[1], a);
                }
              );
          }
      },
      results: function (a, b) {
        var c = b.length;
        if (c > 0)
          for (
            var d = this.S(
              "[" + this.add_namespace("data-uuid") + '="' + a + '"]'
            );
            c--;

          ) {
            var e,
              f = b[c][2];
            if (
              ((e = matchMedia(
                this.settings.named_queries.hasOwnProperty(f)
                  ? this.settings.named_queries[f]
                  : f
              )),
              e.matches)
            )
              return { el: d, scenario: b[c] };
          }
        return !1;
      },
      load: function (a, b) {
        return (
          ("undefined" == typeof this["cached_" + a] || b) &&
            this["update_" + a](),
          this["cached_" + a]
        );
      },
      update_images: function () {
        var a = this.S("img[" + this.data_attr + "]"),
          b = a.length,
          c = b,
          d = 0,
          e = this.data_attr;
        for (
          this.cache = {},
            this.cached_images = [],
            this.images_loaded = 0 === b;
          c--;

        ) {
          if ((d++, a[c])) {
            var f = a[c].getAttribute(e) || "";
            f.length > 0 && this.cached_images.push(a[c]);
          }
          d === b && ((this.images_loaded = !0), this.enhance("images"));
        }
        return this;
      },
      update_nodes: function () {
        var a = this.S("[" + this.data_attr + "]").not("img"),
          b = a.length,
          c = b,
          d = 0,
          e = this.data_attr;
        for (this.cached_nodes = [], this.nodes_loaded = 0 === b; c--; ) {
          d++;
          var f = a[c].getAttribute(e) || "";
          f.length > 0 && this.cached_nodes.push(a[c]),
            d === b && ((this.nodes_loaded = !0), this.enhance("nodes"));
        }
        return this;
      },
      enhance: function (c) {
        for (var d = this["cached_" + c].length; d--; )
          this.object(a(this["cached_" + c][d]));
        return a(b).trigger("resize");
      },
      parse_params: function (a, b, c) {
        return [this.trim(a), this.convert_directive(b), this.trim(c)];
      },
      convert_directive: function (a) {
        var b = this.trim(a);
        return b.length > 0 ? b : "replace";
      },
      object: function (a) {
        var b = this.parse_data_attr(a),
          c = [],
          d = b.length;
        if (d > 0)
          for (; d--; ) {
            var e = b[d].split(/\((.*?)(\))$/);
            if (e.length > 1) {
              var f = e[0].split(/\, /),
                g = this.parse_params(f[0], f[1], e[1]);
              c.push(g);
            }
          }
        return this.store(a, c);
      },
      store: function (a, b) {
        var c = this.random_str(),
          d = a.data(this.add_namespace("uuid", !0));
        return this.cache[d]
          ? this.cache[d]
          : (a.attr(this.add_namespace("data-uuid"), c), (this.cache[c] = b));
      },
      trim: function (b) {
        return "string" == typeof b ? a.trim(b) : b;
      },
      set_data_attr: function (a) {
        return a
          ? this.namespace.length > 0
            ? this.namespace + "-" + this.settings.load_attr
            : this.settings.load_attr
          : this.namespace.length > 0
          ? "data-" + this.namespace + "-" + this.settings.load_attr
          : "data-" + this.settings.load_attr;
      },
      parse_data_attr: function (a) {
        for (
          var b = a.attr(this.attr_name()).split(/\[(.*?)\]/),
            c = b.length,
            d = [];
          c--;

        )
          b[c].replace(/[\W\d]+/, "").length > 4 && d.push(b[c]);
        return d;
      },
      reflow: function () {
        this.load("images", !0), this.load("nodes", !0);
      },
    };
  })(jQuery, window, window.document),
  (function (a, b, c, d) {
    "use strict";
    Foundation.libs.joyride = {
      name: "joyride",
      version: "5.2.3",
      defaults: {
        expose: !1,
        modal: !0,
        tip_location: "bottom",
        nub_position: "auto",
        scroll_speed: 1500,
        scroll_animation: "linear",
        timer: 0,
        start_timer_on_click: !0,
        start_offset: 0,
        next_button: !0,
        tip_animation: "fade",
        pause_after: [],
        exposed: [],
        tip_animation_fade_speed: 300,
        cookie_monster: !1,
        cookie_name: "joyride",
        cookie_domain: !1,
        cookie_expires: 365,
        tip_container: "body",
        abort_on_close: !0,
        tip_location_patterns: {
          top: ["bottom"],
          bottom: [],
          left: ["right", "top", "bottom"],
          right: ["left", "top", "bottom"],
        },
        post_ride_callback: function () {},
        post_step_callback: function () {},
        pre_step_callback: function () {},
        pre_ride_callback: function () {},
        post_expose_callback: function () {},
        template: {
          link: '<a href="#close" class="joyride-close-tip">&times;</a>',
          timer:
            '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
          tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
          wrapper: '<div class="joyride-content-wrapper"></div>',
          button: '<a href="#" class="small button joyride-next-tip"></a>',
          modal: '<div class="joyride-modal-bg"></div>',
          expose: '<div class="joyride-expose-wrapper"></div>',
          expose_cover: '<div class="joyride-expose-cover"></div>',
        },
        expose_add_class: "",
      },
      init: function (b, c, d) {
        Foundation.inherit(this, "throttle random_str"),
          (this.settings =
            this.settings || a.extend({}, this.defaults, d || c)),
          this.bindings(c, d);
      },
      events: function () {
        var c = this;
        a(this.scope)
          .off(".joyride")
          .on(
            "click.fndtn.joyride",
            ".joyride-next-tip, .joyride-modal-bg",
            function (a) {
              a.preventDefault(),
                this.settings.$li.next().length < 1
                  ? this.end()
                  : this.settings.timer > 0
                  ? (clearTimeout(this.settings.automate),
                    this.hide(),
                    this.show(),
                    this.startTimer())
                  : (this.hide(), this.show());
            }.bind(this)
          )
          .on(
            "click.fndtn.joyride",
            ".joyride-close-tip",
            function (a) {
              a.preventDefault(), this.end(this.settings.abort_on_close);
            }.bind(this)
          ),
          a(b)
            .off(".joyride")
            .on(
              "resize.fndtn.joyride",
              c.throttle(function () {
                if (
                  a("[" + c.attr_name() + "]").length > 0 &&
                  c.settings.$next_tip
                ) {
                  if (c.settings.exposed.length > 0) {
                    var b = a(c.settings.exposed);
                    b.each(function () {
                      var b = a(this);
                      c.un_expose(b), c.expose(b);
                    });
                  }
                  c.is_phone() ? c.pos_phone() : c.pos_default(!1);
                }
              }, 100)
            );
      },
      start: function () {
        var b = this,
          c = a("[" + this.attr_name() + "]", this.scope),
          d = [
            "timer",
            "scrollSpeed",
            "startOffset",
            "tipAnimationFadeSpeed",
            "cookieExpires",
          ],
          e = d.length;
        !c.length > 0 ||
          (this.settings.init || this.events(),
          (this.settings = c.data(this.attr_name(!0) + "-init")),
          (this.settings.$content_el = c),
          (this.settings.$body = a(this.settings.tip_container)),
          (this.settings.body_offset = a(
            this.settings.tip_container
          ).position()),
          (this.settings.$tip_content = this.settings.$content_el.find("> li")),
          (this.settings.paused = !1),
          (this.settings.attempts = 0),
          "function" != typeof a.cookie && (this.settings.cookie_monster = !1),
          (!this.settings.cookie_monster ||
            (this.settings.cookie_monster &&
              !a.cookie(this.settings.cookie_name))) &&
            (this.settings.$tip_content.each(function (c) {
              var f = a(this);
              this.settings = a.extend({}, b.defaults, b.data_options(f));
              for (var g = e; g--; )
                b.settings[d[g]] = parseInt(b.settings[d[g]], 10);
              b.create({ $li: f, index: c });
            }),
            !this.settings.start_timer_on_click && this.settings.timer > 0
              ? (this.show("init"), this.startTimer())
              : this.show("init")));
      },
      resume: function () {
        this.set_li(), this.show();
      },
      tip_template: function (b) {
        var c, d;
        return (
          (b.tip_class = b.tip_class || ""),
          (c = a(this.settings.template.tip).addClass(b.tip_class)),
          (d =
            a.trim(a(b.li).html()) +
            this.button_text(b.button_text) +
            this.settings.template.link +
            this.timer_instance(b.index)),
          c.append(a(this.settings.template.wrapper)),
          c.first().attr(this.add_namespace("data-index"), b.index),
          a(".joyride-content-wrapper", c).append(d),
          c[0]
        );
      },
      timer_instance: function (b) {
        var c;
        return (c =
          (0 === b &&
            this.settings.start_timer_on_click &&
            this.settings.timer > 0) ||
          0 === this.settings.timer
            ? ""
            : a(this.settings.template.timer)[0].outerHTML);
      },
      button_text: function (b) {
        return (
          this.settings.next_button
            ? ((b = a.trim(b) || "Next"),
              (b = a(this.settings.template.button).append(b)[0].outerHTML))
            : (b = ""),
          b
        );
      },
      create: function (b) {
        var c =
            b.$li.attr(this.add_namespace("data-button")) ||
            b.$li.attr(this.add_namespace("data-text")),
          d = b.$li.attr("class"),
          e = a(
            this.tip_template({
              tip_class: d,
              index: b.index,
              button_text: c,
              li: b.$li,
            })
          );
        a(this.settings.tip_container).append(e);
      },
      show: function (b) {
        var c = null;
        this.settings.$li === d ||
        -1 === a.inArray(this.settings.$li.index(), this.settings.pause_after)
          ? (this.settings.paused
              ? (this.settings.paused = !1)
              : this.set_li(b),
            (this.settings.attempts = 0),
            this.settings.$li.length && this.settings.$target.length > 0
              ? (b &&
                  (this.settings.pre_ride_callback(
                    this.settings.$li.index(),
                    this.settings.$next_tip
                  ),
                  this.settings.modal && this.show_modal()),
                this.settings.pre_step_callback(
                  this.settings.$li.index(),
                  this.settings.$next_tip
                ),
                this.settings.modal && this.settings.expose && this.expose(),
                (this.settings.tip_settings = a.extend(
                  {},
                  this.settings,
                  this.data_options(this.settings.$li)
                )),
                (this.settings.timer = parseInt(this.settings.timer, 10)),
                (this.settings.tip_settings.tip_location_pattern =
                  this.settings.tip_location_patterns[
                    this.settings.tip_settings.tip_location
                  ]),
                /body/i.test(this.settings.$target.selector) ||
                  this.scroll_to(),
                this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0),
                (c = this.settings.$next_tip.find(".joyride-timer-indicator")),
                /pop/i.test(this.settings.tip_animation)
                  ? (c.width(0),
                    this.settings.timer > 0
                      ? (this.settings.$next_tip.show(),
                        setTimeout(
                          function () {
                            c.animate(
                              { width: c.parent().width() },
                              this.settings.timer,
                              "linear"
                            );
                          }.bind(this),
                          this.settings.tip_animation_fade_speed
                        ))
                      : this.settings.$next_tip.show())
                  : /fade/i.test(this.settings.tip_animation) &&
                    (c.width(0),
                    this.settings.timer > 0
                      ? (this.settings.$next_tip
                          .fadeIn(this.settings.tip_animation_fade_speed)
                          .show(),
                        setTimeout(
                          function () {
                            c.animate(
                              { width: c.parent().width() },
                              this.settings.timer,
                              "linear"
                            );
                          }.bind(this),
                          this.settings.tip_animation_fade_speed
                        ))
                      : this.settings.$next_tip.fadeIn(
                          this.settings.tip_animation_fade_speed
                        )),
                (this.settings.$current_tip = this.settings.$next_tip))
              : this.settings.$li && this.settings.$target.length < 1
              ? this.show()
              : this.end())
          : (this.settings.paused = !0);
      },
      is_phone: function () {
        return (
          matchMedia(Foundation.media_queries.small).matches &&
          !matchMedia(Foundation.media_queries.medium).matches
        );
      },
      hide: function () {
        this.settings.modal && this.settings.expose && this.un_expose(),
          this.settings.modal || a(".joyride-modal-bg").hide(),
          this.settings.$current_tip.css("visibility", "hidden"),
          setTimeout(
            a.proxy(function () {
              this.hide(), this.css("visibility", "visible");
            }, this.settings.$current_tip),
            0
          ),
          this.settings.post_step_callback(
            this.settings.$li.index(),
            this.settings.$current_tip
          );
      },
      set_li: function (a) {
        a
          ? ((this.settings.$li = this.settings.$tip_content.eq(
              this.settings.start_offset
            )),
            this.set_next_tip(),
            (this.settings.$current_tip = this.settings.$next_tip))
          : ((this.settings.$li = this.settings.$li.next()),
            this.set_next_tip()),
          this.set_target();
      },
      set_next_tip: function () {
        (this.settings.$next_tip = a(".joyride-tip-guide").eq(
          this.settings.$li.index()
        )),
          this.settings.$next_tip.data("closed", "");
      },
      set_target: function () {
        var b = this.settings.$li.attr(this.add_namespace("data-class")),
          d = this.settings.$li.attr(this.add_namespace("data-id")),
          e = function () {
            return d
              ? a(c.getElementById(d))
              : b
              ? a("." + b).first()
              : a("body");
          };
        this.settings.$target = e();
      },
      scroll_to: function () {
        var c, d;
        (c = a(b).height() / 2),
          (d = Math.ceil(
            this.settings.$target.offset().top -
              c +
              this.settings.$next_tip.outerHeight()
          )),
          0 != d &&
            a("html, body")
              .stop()
              .animate({ scrollTop: d }, this.settings.scroll_speed, "swing");
      },
      paused: function () {
        return (
          -1 ===
          a.inArray(this.settings.$li.index() + 1, this.settings.pause_after)
        );
      },
      restart: function () {
        this.hide(), (this.settings.$li = d), this.show("init");
      },
      pos_default: function (a) {
        var b = this.settings.$next_tip.find(".joyride-nub"),
          c = Math.ceil(b.outerWidth() / 2),
          d = Math.ceil(b.outerHeight() / 2),
          e = a || !1;
        if (
          (e &&
            (this.settings.$next_tip.css("visibility", "hidden"),
            this.settings.$next_tip.show()),
          /body/i.test(this.settings.$target.selector))
        )
          this.settings.$li.length && this.pos_modal(b);
        else {
          var f = this.settings.tip_settings.tipAdjustmentY
              ? parseInt(this.settings.tip_settings.tipAdjustmentY)
              : 0,
            g = this.settings.tip_settings.tipAdjustmentX
              ? parseInt(this.settings.tip_settings.tipAdjustmentX)
              : 0;
          this.bottom()
            ? (this.settings.$next_tip.css(
                this.rtl
                  ? {
                      top:
                        this.settings.$target.offset().top +
                        d +
                        this.settings.$target.outerHeight() +
                        f,
                      left:
                        this.settings.$target.offset().left +
                        this.settings.$target.outerWidth() -
                        this.settings.$next_tip.outerWidth() +
                        g,
                    }
                  : {
                      top:
                        this.settings.$target.offset().top +
                        d +
                        this.settings.$target.outerHeight() +
                        f,
                      left: this.settings.$target.offset().left + g,
                    }
              ),
              this.nub_position(
                b,
                this.settings.tip_settings.nub_position,
                "top"
              ))
            : this.top()
            ? (this.settings.$next_tip.css(
                this.rtl
                  ? {
                      top:
                        this.settings.$target.offset().top -
                        this.settings.$next_tip.outerHeight() -
                        d +
                        f,
                      left:
                        this.settings.$target.offset().left +
                        this.settings.$target.outerWidth() -
                        this.settings.$next_tip.outerWidth(),
                    }
                  : {
                      top:
                        this.settings.$target.offset().top -
                        this.settings.$next_tip.outerHeight() -
                        d +
                        f,
                      left: this.settings.$target.offset().left + g,
                    }
              ),
              this.nub_position(
                b,
                this.settings.tip_settings.nub_position,
                "bottom"
              ))
            : this.right()
            ? (this.settings.$next_tip.css({
                top: this.settings.$target.offset().top + f,
                left:
                  this.settings.$target.outerWidth() +
                  this.settings.$target.offset().left +
                  c +
                  g,
              }),
              this.nub_position(
                b,
                this.settings.tip_settings.nub_position,
                "left"
              ))
            : this.left() &&
              (this.settings.$next_tip.css({
                top: this.settings.$target.offset().top + f,
                left:
                  this.settings.$target.offset().left -
                  this.settings.$next_tip.outerWidth() -
                  c +
                  g,
              }),
              this.nub_position(
                b,
                this.settings.tip_settings.nub_position,
                "right"
              )),
            !this.visible(this.corners(this.settings.$next_tip)) &&
              this.settings.attempts <
                this.settings.tip_settings.tip_location_pattern.length &&
              (b
                .removeClass("bottom")
                .removeClass("top")
                .removeClass("right")
                .removeClass("left"),
              (this.settings.tip_settings.tip_location =
                this.settings.tip_settings.tip_location_pattern[
                  this.settings.attempts
                ]),
              this.settings.attempts++,
              this.pos_default());
        }
        e &&
          (this.settings.$next_tip.hide(),
          this.settings.$next_tip.css("visibility", "visible"));
      },
      pos_phone: function (b) {
        var c = this.settings.$next_tip.outerHeight(),
          d =
            (this.settings.$next_tip.offset(),
            this.settings.$target.outerHeight()),
          e = a(".joyride-nub", this.settings.$next_tip),
          f = Math.ceil(e.outerHeight() / 2),
          g = b || !1;
        e
          .removeClass("bottom")
          .removeClass("top")
          .removeClass("right")
          .removeClass("left"),
          g &&
            (this.settings.$next_tip.css("visibility", "hidden"),
            this.settings.$next_tip.show()),
          /body/i.test(this.settings.$target.selector)
            ? this.settings.$li.length && this.pos_modal(e)
            : this.top()
            ? (this.settings.$next_tip.offset({
                top: this.settings.$target.offset().top - c - f,
              }),
              e.addClass("bottom"))
            : (this.settings.$next_tip.offset({
                top: this.settings.$target.offset().top + d + f,
              }),
              e.addClass("top")),
          g &&
            (this.settings.$next_tip.hide(),
            this.settings.$next_tip.css("visibility", "visible"));
      },
      pos_modal: function (a) {
        this.center(), a.hide(), this.show_modal();
      },
      show_modal: function () {
        if (!this.settings.$next_tip.data("closed")) {
          var b = a(".joyride-modal-bg");
          b.length < 1 && a("body").append(this.settings.template.modal).show(),
            /pop/i.test(this.settings.tip_animation)
              ? b.show()
              : b.fadeIn(this.settings.tip_animation_fade_speed);
        }
      },
      expose: function () {
        var c,
          d,
          e,
          f,
          g,
          h = "expose-" + this.random_str(6);
        if (arguments.length > 0 && arguments[0] instanceof a) e = arguments[0];
        else {
          if (
            !this.settings.$target ||
            /body/i.test(this.settings.$target.selector)
          )
            return !1;
          e = this.settings.$target;
        }
        return e.length < 1
          ? (b.console && console.error("element not valid", e), !1)
          : ((c = a(this.settings.template.expose)),
            this.settings.$body.append(c),
            c.css({
              top: e.offset().top,
              left: e.offset().left,
              width: e.outerWidth(!0),
              height: e.outerHeight(!0),
            }),
            (d = a(this.settings.template.expose_cover)),
            (f = { zIndex: e.css("z-index"), position: e.css("position") }),
            (g = null == e.attr("class") ? "" : e.attr("class")),
            e.css("z-index", parseInt(c.css("z-index")) + 1),
            "static" == f.position && e.css("position", "relative"),
            e.data("expose-css", f),
            e.data("orig-class", g),
            e.attr("class", g + " " + this.settings.expose_add_class),
            d.css({
              top: e.offset().top,
              left: e.offset().left,
              width: e.outerWidth(!0),
              height: e.outerHeight(!0),
            }),
            this.settings.modal && this.show_modal(),
            this.settings.$body.append(d),
            c.addClass(h),
            d.addClass(h),
            e.data("expose", h),
            this.settings.post_expose_callback(
              this.settings.$li.index(),
              this.settings.$next_tip,
              e
            ),
            void this.add_exposed(e));
      },
      un_expose: function () {
        var c,
          d,
          e,
          f,
          g,
          h = !1;
        if (arguments.length > 0 && arguments[0] instanceof a) d = arguments[0];
        else {
          if (
            !this.settings.$target ||
            /body/i.test(this.settings.$target.selector)
          )
            return !1;
          d = this.settings.$target;
        }
        return d.length < 1
          ? (b.console && console.error("element not valid", d), !1)
          : ((c = d.data("expose")),
            (e = a("." + c)),
            arguments.length > 1 && (h = arguments[1]),
            h === !0
              ? a(".joyride-expose-wrapper,.joyride-expose-cover").remove()
              : e.remove(),
            (f = d.data("expose-css")),
            "auto" == f.zIndex
              ? d.css("z-index", "")
              : d.css("z-index", f.zIndex),
            f.position != d.css("position") &&
              ("static" == f.position
                ? d.css("position", "")
                : d.css("position", f.position)),
            (g = d.data("orig-class")),
            d.attr("class", g),
            d.removeData("orig-classes"),
            d.removeData("expose"),
            d.removeData("expose-z-index"),
            void this.remove_exposed(d));
      },
      add_exposed: function (b) {
        (this.settings.exposed = this.settings.exposed || []),
          b instanceof a || "object" == typeof b
            ? this.settings.exposed.push(b[0])
            : "string" == typeof b && this.settings.exposed.push(b);
      },
      remove_exposed: function (b) {
        var c, d;
        for (
          b instanceof a ? (c = b[0]) : "string" == typeof b && (c = b),
            this.settings.exposed = this.settings.exposed || [],
            d = this.settings.exposed.length;
          d--;

        )
          if (this.settings.exposed[d] == c)
            return void this.settings.exposed.splice(d, 1);
      },
      center: function () {
        var c = a(b);
        return (
          this.settings.$next_tip.css({
            top:
              (c.height() - this.settings.$next_tip.outerHeight()) / 2 +
              c.scrollTop(),
            left:
              (c.width() - this.settings.$next_tip.outerWidth()) / 2 +
              c.scrollLeft(),
          }),
          !0
        );
      },
      bottom: function () {
        return /bottom/i.test(this.settings.tip_settings.tip_location);
      },
      top: function () {
        return /top/i.test(this.settings.tip_settings.tip_location);
      },
      right: function () {
        return /right/i.test(this.settings.tip_settings.tip_location);
      },
      left: function () {
        return /left/i.test(this.settings.tip_settings.tip_location);
      },
      corners: function (c) {
        var d = a(b),
          e = d.height() / 2,
          f = Math.ceil(
            this.settings.$target.offset().top -
              e +
              this.settings.$next_tip.outerHeight()
          ),
          g = d.width() + d.scrollLeft(),
          h = d.height() + f,
          i = d.height() + d.scrollTop(),
          j = d.scrollTop();
        return (
          j > f && (j = 0 > f ? 0 : f),
          h > i && (i = h),
          [
            c.offset().top < j,
            g < c.offset().left + c.outerWidth(),
            i < c.offset().top + c.outerHeight(),
            d.scrollLeft() > c.offset().left,
          ]
        );
      },
      visible: function (a) {
        for (var b = a.length; b--; ) if (a[b]) return !1;
        return !0;
      },
      nub_position: function (a, b, c) {
        a.addClass("auto" === b ? c : b);
      },
      startTimer: function () {
        this.settings.$li.length
          ? (this.settings.automate = setTimeout(
              function () {
                this.hide(), this.show(), this.startTimer();
              }.bind(this),
              this.settings.timer
            ))
          : clearTimeout(this.settings.automate);
      },
      end: function (b) {
        this.settings.cookie_monster &&
          a.cookie(this.settings.cookie_name, "ridden", {
            expires: this.settings.cookie_expires,
            domain: this.settings.cookie_domain,
          }),
          this.settings.timer > 0 && clearTimeout(this.settings.automate),
          this.settings.modal && this.settings.expose && this.un_expose(),
          this.settings.$next_tip.data("closed", !0),
          a(".joyride-modal-bg").hide(),
          this.settings.$current_tip.hide(),
          ("undefined" == typeof b || b === !1) &&
            (this.settings.post_step_callback(
              this.settings.$li.index(),
              this.settings.$current_tip
            ),
            this.settings.post_ride_callback(
              this.settings.$li.index(),
              this.settings.$current_tip
            )),
          a(".joyride-tip-guide").remove();
      },
      off: function () {
        a(this.scope).off(".joyride"),
          a(b).off(".joyride"),
          a(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(
            ".joyride"
          ),
          a(".joyride-tip-guide, .joyride-modal-bg").remove(),
          clearTimeout(this.settings.automate),
          (this.settings = {});
      },
      reflow: function () {},
    };
  })(jQuery, window, window.document),
  (function (a, b) {
    "use strict";
    Foundation.libs["magellan-expedition"] = {
      name: "magellan-expedition",
      version: "5.2.3",
      settings: {
        active_class: "active",
        threshold: 0,
        destination_threshold: 20,
        throttle_delay: 30,
        fixed_top: 0,
      },
      init: function (a, b, c) {
        Foundation.inherit(this, "throttle"), this.bindings(b, c);
      },
      events: function () {
        var c = this,
          d = c.S,
          e = c.settings;
        c.set_expedition_position(),
          d(c.scope)
            .off(".magellan")
            .on(
              "click.fndtn.magellan",
              "[" + c.add_namespace("data-magellan-arrival") + '] a[href^="#"]',
              function (b) {
                b.preventDefault();
                var d = a(this).closest("[" + c.attr_name() + "]"),
                  e =
                    (d.data("magellan-expedition-init"),
                    this.hash.split("#").join("")),
                  f = a("a[name='" + e + "']");
                0 === f.length && (f = a("#" + e));
                var g = f.offset().top;
                (g -= d.outerHeight()),
                  a("html, body")
                    .stop()
                    .animate({ scrollTop: g }, 700, "swing", function () {
                      history.pushState
                        ? history.pushState(null, null, "#" + e)
                        : (location.hash = "#" + e);
                    });
              }
            )
            .on(
              "scroll.fndtn.magellan",
              c.throttle(this.check_for_arrivals.bind(this), e.throttle_delay)
            ),
          a(b).on(
            "resize.fndtn.magellan",
            c.throttle(
              this.set_expedition_position.bind(this),
              e.throttle_delay
            )
          );
      },
      check_for_arrivals: function () {
        var a = this;
        a.update_arrivals(), a.update_expedition_positions();
      },
      set_expedition_position: function () {
        var b = this;
        a("[" + this.attr_name() + "=fixed]", b.scope).each(function () {
          var c,
            d = a(this),
            e = d.attr("styles");
          d.attr("style", ""),
            (c = d.offset().top + b.settings.threshold),
            d.data(b.data_attr("magellan-top-offset"), c),
            d.attr("style", e);
        });
      },
      update_expedition_positions: function () {
        var c = this,
          d = a(b).scrollTop();
        a("[" + this.attr_name() + "=fixed]", c.scope).each(function () {
          var b = a(this),
            e = b.data("magellan-top-offset");
          if (d >= e) {
            var f = b.prev(
              "[" + c.add_namespace("data-magellan-expedition-clone") + "]"
            );
            0 === f.length &&
              ((f = b.clone()),
              f.removeAttr(c.attr_name()),
              f.attr(c.add_namespace("data-magellan-expedition-clone"), ""),
              b.before(f)),
              b.css({ position: "fixed", top: c.settings.fixed_top });
          } else b.prev("[" + c.add_namespace("data-magellan-expedition-clone") + "]").remove(), b.attr("style", "").removeClass("fixed");
        });
      },
      update_arrivals: function () {
        var c = this,
          d = a(b).scrollTop();
        a("[" + this.attr_name() + "]", c.scope).each(function () {
          var b = a(this),
            e = b.data(c.attr_name(!0) + "-init"),
            f = c.offsets(b, d),
            g = b.find("[" + c.add_namespace("data-magellan-arrival") + "]"),
            h = !1;
          f.each(function (a, d) {
            if (d.viewport_offset >= d.top_offset) {
              var f = b.find(
                "[" + c.add_namespace("data-magellan-arrival") + "]"
              );
              return (
                f.not(d.arrival).removeClass(e.active_class),
                d.arrival.addClass(e.active_class),
                (h = !0),
                !0
              );
            }
          }),
            h || g.removeClass(e.active_class);
        });
      },
      offsets: function (b, c) {
        var d = this,
          e = b.data(d.attr_name(!0) + "-init"),
          f = c;
        return b
          .find("[" + d.add_namespace("data-magellan-arrival") + "]")
          .map(function () {
            var c = a(this).data(d.data_attr("magellan-arrival")),
              g = a(
                "[" +
                  d.add_namespace("data-magellan-destination") +
                  "=" +
                  c +
                  "]"
              );
            if (g.length > 0) {
              var h =
                g.offset().top - e.destination_threshold - b.outerHeight();
              return {
                destination: g,
                arrival: a(this),
                top_offset: h,
                viewport_offset: f,
              };
            }
          })
          .sort(function (a, b) {
            return a.top_offset < b.top_offset
              ? -1
              : a.top_offset > b.top_offset
              ? 1
              : 0;
          });
      },
      data_attr: function (a) {
        return this.namespace.length > 0 ? this.namespace + "-" + a : a;
      },
      off: function () {
        this.S(this.scope).off(".magellan"), this.S(b).off(".magellan");
      },
      reflow: function () {
        var b = this;
        a(
          "[" + b.add_namespace("data-magellan-expedition-clone") + "]",
          b.scope
        ).remove();
      },
    };
  })(jQuery, window, window.document),
  (function () {
    "use strict";
    Foundation.libs.offcanvas = {
      name: "offcanvas",
      version: "5.2.3",
      settings: { open_method: "move", close_on_click: !0 },
      init: function (a, b, c) {
        this.bindings(b, c);
      },
      events: function () {
        var a = this,
          b = a.S,
          c = "",
          d = "",
          e = "";
        "move" === this.settings.open_method
          ? ((c = "move-"), (d = "right"), (e = "left"))
          : "overlap" === this.settings.open_method &&
            (c = "offcanvas-overlap"),
          b(this.scope)
            .off(".offcanvas")
            .on(
              "click.fndtn.offcanvas",
              ".left-off-canvas-toggle",
              function (b) {
                a.click_toggle_class(b, c + d);
              }
            )
            .on(
              "click.fndtn.offcanvas",
              ".left-off-canvas-menu a",
              function (b) {
                var e = a.get_settings(b);
                e.close_on_click && a.hide.call(a, c + d, a.get_wrapper(b));
              }
            )
            .on(
              "click.fndtn.offcanvas",
              ".right-off-canvas-toggle",
              function (b) {
                a.click_toggle_class(b, c + e);
              }
            )
            .on(
              "click.fndtn.offcanvas",
              ".right-off-canvas-menu a",
              function (b) {
                var d = a.get_settings(b);
                d.close_on_click && a.hide.call(a, c + e, a.get_wrapper(b));
              }
            )
            .on("click.fndtn.offcanvas", ".exit-off-canvas", function (b) {
              a.click_remove_class(b, c + e),
                d && a.click_remove_class(b, c + d);
            });
      },
      toggle: function (a, b) {
        (b = b || this.get_wrapper()),
          b.is("." + a) ? this.hide(a, b) : this.show(a, b);
      },
      show: function (a, b) {
        (b = b || this.get_wrapper()), b.trigger("open"), b.addClass(a);
      },
      hide: function (a, b) {
        (b = b || this.get_wrapper()), b.trigger("close"), b.removeClass(a);
      },
      click_toggle_class: function (a, b) {
        a.preventDefault();
        var c = this.get_wrapper(a);
        this.toggle(b, c);
      },
      click_remove_class: function (a, b) {
        a.preventDefault();
        var c = this.get_wrapper(a);
        this.hide(b, c);
      },
      get_settings: function (a) {
        var b = this.S(a.target).closest("[" + this.attr_name() + "]");
        return b.data(this.attr_name(!0) + "-init") || this.settings;
      },
      get_wrapper: function (a) {
        var b = this.S(a ? a.target : this.scope).closest(".off-canvas-wrap");
        return 0 === b.length && (b = this.S(".off-canvas-wrap")), b;
      },
      reflow: function () {},
    };
  })(jQuery, window, window.document),
  (function (a, b, c) {
    "use strict";
    var d = function () {},
      e = function (d, e) {
        if (d.hasClass(e.slides_container_class)) return this;
        var h,
          i,
          j,
          k,
          l,
          m = this,
          n = d,
          o = 0,
          p = n.find("." + e.active_slide_class).length > 0;
        (m.cache = {}),
          (m.slides = function () {
            return n.children(e.slide_selector);
          }),
          p || m.slides().first().addClass(e.active_slide_class),
          (m.update_slide_number = function (b) {
            e.slide_number &&
              (i.find("span:first").text(parseInt(b) + 1),
              i.find("span:last").text(m.slides().length)),
              e.bullets &&
                (j.children().removeClass(e.bullets_active_class),
                a(j.children().get(b)).addClass(e.bullets_active_class));
          }),
          (m.update_active_link = function (b) {
            var c = a(
              '[data-orbit-link="' +
                m.slides().eq(b).attr("data-orbit-slide") +
                '"]'
            );
            c.siblings().removeClass(e.bullets_active_class),
              c.addClass(e.bullets_active_class);
          }),
          (m.build_markup = function () {
            n.wrap('<div class="' + e.container_class + '"></div>'),
              (h = n.parent()),
              n.addClass(e.slides_container_class),
              n.addClass(e.animation),
              e.stack_on_small && h.addClass(e.stack_on_small_class),
              e.navigation_arrows &&
                (h.append(
                  a('<a href="#"><span></span></a>').addClass(e.prev_class)
                ),
                h.append(
                  a('<a href="#"><span></span></a>').addClass(e.next_class)
                )),
              e.timer &&
                ((k = a("<div>").addClass(e.timer_container_class)),
                k.append("<span>"),
                e.timer_show_progress_bar &&
                  k.append(a("<div>").addClass(e.timer_progress_class)),
                k.addClass(e.timer_paused_class),
                h.append(k)),
              e.slide_number &&
                ((i = a("<div>").addClass(e.slide_number_class)),
                i.append(
                  "<span></span> " + e.slide_number_text + " <span></span>"
                ),
                h.append(i)),
              e.bullets &&
                ((j = a("<ol>").addClass(e.bullets_container_class)),
                h.append(j),
                j.wrap('<div class="orbit-bullets-container"></div>'),
                m.slides().each(function (b) {
                  var c = a("<li>")
                    .attr("data-orbit-slide", b)
                    .on("click", m.link_bullet);
                  j.append(c);
                }));
          }),
          (m._prepare_direction = function (b) {
            var c = "next";
            o >= b && (c = "prev"),
              "slide" === e.animation &&
                setTimeout(function () {
                  n.removeClass("swipe-prev swipe-next"),
                    "next" === c
                      ? n.addClass("swipe-next")
                      : "prev" === c && n.addClass("swipe-prev");
                }, 0);
            var d = m.slides();
            if (b >= d.length) {
              if (!e.circular) return !1;
              b = 0;
            } else if (0 > b) {
              if (!e.circular) return !1;
              b = d.length - 1;
            }
            var f = a(d.get(o)),
              g = a(d.get(b));
            return [c, f, g, b];
          }),
          (m._goto = function (a, b) {
            if (null === a) return !1;
            if (m.cache.animating) return !1;
            if (a === o) return !1;
            "object" == typeof m.cache.timer && m.cache.timer.restart();
            var c = m.slides();
            m.cache.animating = !0;
            var d = m._prepare_direction(a),
              f = d[0],
              g = d[1],
              h = d[2],
              a = d[3];
            if (d === !1) return !1;
            n.trigger("before-slide-change.fndtn.orbit"),
              e.before_slide_change(),
              (o = a),
              g.css("transitionDuration", e.animation_speed + "ms"),
              h.css("transitionDuration", e.animation_speed + "ms");
            var i = function () {
              var d = function () {
                b === !0 && m.cache.timer.restart(),
                  m.update_slide_number(o),
                  h.removeClass("animate-in"),
                  h.addClass(e.active_slide_class),
                  m.update_active_link(a),
                  n.trigger("after-slide-change.fndtn.orbit", [
                    { slide_number: o, total_slides: c.length },
                  ]),
                  e.after_slide_change(o, c.length),
                  setTimeout(function () {
                    m.cache.animating = !1;
                  }, 100);
              };
              n.height() != h.height() && e.variable_height
                ? n.animate({ "min-height": h.height() }, 250, "linear", d)
                : d();
            };
            if (1 === c.length) return i(), !1;
            var j = function () {
              "next" === f && l.next(g, h, i), "prev" === f && l.prev(g, h, i);
            };
            h.height() > n.height() && e.variable_height
              ? n.animate({ "min-height": h.height() }, 250, "linear", j)
              : j();
          }),
          (m.next = function (a) {
            a.stopImmediatePropagation(),
              a.preventDefault(),
              m._prepare_direction(o + 1),
              setTimeout(function () {
                m._goto(o + 1);
              }, 100);
          }),
          (m.prev = function (a) {
            a.stopImmediatePropagation(),
              a.preventDefault(),
              m._prepare_direction(o - 1),
              setTimeout(function () {
                m._goto(o - 1);
              }, 100);
          }),
          (m.link_custom = function (b) {
            b.preventDefault();
            var c = a(this).attr("data-orbit-link");
            if ("string" == typeof c && "" != (c = a.trim(c))) {
              var d = h.find("[data-orbit-slide=" + c + "]");
              -1 != d.index() &&
                setTimeout(function () {
                  m._goto(d.index());
                }, 100);
            }
          }),
          (m.link_bullet = function () {
            var b = a(this).attr("data-orbit-slide");
            if ("string" == typeof b && "" != (b = a.trim(b)))
              if (isNaN(parseInt(b))) {
                var c = h.find("[data-orbit-slide=" + b + "]");
                -1 != c.index() &&
                  ((b = c.index() + 1),
                  m._prepare_direction(b),
                  setTimeout(function () {
                    m._goto(b);
                  }, 100));
              } else
                (b = parseInt(b)),
                  m._prepare_direction(b),
                  setTimeout(function () {
                    m._goto(b);
                  }, 100);
          }),
          (m.timer_callback = function () {
            m._goto(o + 1, !0);
          }),
          (m.compute_dimensions = function () {
            var b = a(m.slides().get(o)),
              c = b.height();
            e.variable_height ||
              m.slides().each(function () {
                a(this).height() > c && (c = a(this).height());
              }),
              n.css("minHeight", String(c) + "px");
          }),
          (m.create_timer = function () {
            var a = new f(
              h.find("." + e.timer_container_class),
              e,
              m.timer_callback
            );
            return a;
          }),
          (m.stop_timer = function () {
            "object" == typeof m.cache.timer && m.cache.timer.stop();
          }),
          (m.toggle_timer = function () {
            var a = h.find("." + e.timer_container_class);
            a.hasClass(e.timer_paused_class)
              ? ("undefined" == typeof m.cache.timer &&
                  (m.cache.timer = m.create_timer()),
                m.cache.timer.start())
              : "object" == typeof m.cache.timer && m.cache.timer.stop();
          }),
          (m.init = function () {
            if (
              (m.build_markup(),
              e.timer &&
                ((m.cache.timer = m.create_timer()),
                Foundation.utils.image_loaded(
                  this.slides().find("img"),
                  m.cache.timer.start
                )),
              (l = new g(e, n)),
              p)
            ) {
              var d = n.find("." + e.active_slide_class),
                f = e.animation_speed;
              (e.animation_speed = 1),
                d.removeClass("active"),
                m._goto(d.index()),
                (e.animation_speed = f);
            }
            h.on("click", "." + e.next_class, m.next),
              h.on("click", "." + e.prev_class, m.prev),
              e.next_on_click &&
                h.on(
                  "click",
                  "." + e.slides_container_class + " [data-orbit-slide]",
                  m.link_bullet
                ),
              h.on("click", m.toggle_timer),
              e.swipe &&
                n
                  .on("touchstart.fndtn.orbit", function (a) {
                    m.cache.animating ||
                      (a.touches || (a = a.originalEvent),
                      a.preventDefault(),
                      a.stopPropagation(),
                      (m.cache.start_page_x = a.touches[0].pageX),
                      (m.cache.start_page_y = a.touches[0].pageY),
                      (m.cache.start_time = new Date().getTime()),
                      (m.cache.delta_x = 0),
                      (m.cache.is_scrolling = null),
                      (m.cache.direction = null),
                      m.stop_timer());
                  })
                  .on("touchmove.fndtn.orbit", function (a) {
                    Math.abs(m.cache.delta_x) > 5 &&
                      (a.preventDefault(), a.stopPropagation()),
                      m.cache.animating ||
                        requestAnimationFrame(function () {
                          if (
                            (a.touches || (a = a.originalEvent),
                            !(
                              a.touches.length > 1 ||
                              (a.scale && 1 !== a.scale) ||
                              ((m.cache.delta_x =
                                a.touches[0].pageX - m.cache.start_page_x),
                              null === m.cache.is_scrolling &&
                                (m.cache.is_scrolling = !!(
                                  m.cache.is_scrolling ||
                                  Math.abs(m.cache.delta_x) <
                                    Math.abs(
                                      a.touches[0].pageY - m.cache.start_page_y
                                    )
                                )),
                              m.cache.is_scrolling)
                            ))
                          ) {
                            var b = m.cache.delta_x < 0 ? o + 1 : o - 1;
                            if (m.cache.direction !== b) {
                              var c = m._prepare_direction(b);
                              (m.cache.direction = b),
                                (m.cache.dir = c[0]),
                                (m.cache.current = c[1]),
                                (m.cache.next = c[2]);
                            }
                            if ("slide" === e.animation) {
                              var d, f;
                              (d = (m.cache.delta_x / h.width()) * 100),
                                (f = d >= 0 ? -(100 - d) : 100 + d),
                                m.cache.current.css(
                                  "transform",
                                  "translate3d(" + d + "%,0,0)"
                                ),
                                m.cache.next.css(
                                  "transform",
                                  "translate3d(" + f + "%,0,0)"
                                );
                            }
                          }
                        });
                  })
                  .on("touchend.fndtn.orbit", function (a) {
                    m.cache.animating ||
                      (a.preventDefault(),
                      a.stopPropagation(),
                      setTimeout(function () {
                        m._goto(m.cache.direction);
                      }, 50));
                  }),
              h
                .on("mouseenter.fndtn.orbit", function () {
                  e.timer && e.pause_on_hover && m.stop_timer();
                })
                .on("mouseleave.fndtn.orbit", function () {
                  e.timer && e.resume_on_mouseout && m.cache.timer.start();
                }),
              a(c).on("click", "[data-orbit-link]", m.link_custom),
              a(b).on("load resize", m.compute_dimensions);
            var i = this.slides().find("img");
            Foundation.utils.image_loaded(i, m.compute_dimensions),
              Foundation.utils.image_loaded(i, function () {
                h.prev("." + e.preloader_class).css("display", "none"),
                  m.update_slide_number(o),
                  m.update_active_link(o),
                  n.trigger("ready.fndtn.orbit");
              });
          }),
          m.init();
      },
      f = function (a, b, c) {
        var d,
          e,
          f = this,
          g = b.timer_speed,
          h = a.find("." + b.timer_progress_class),
          i = h && "none" != h.css("display"),
          j = -1;
        (this.update_progress = function (a) {
          var b = h.clone();
          b.attr("style", ""),
            b.css("width", a + "%"),
            h.replaceWith(b),
            (h = b);
        }),
          (this.restart = function () {
            clearTimeout(e),
              a.addClass(b.timer_paused_class),
              (j = -1),
              i && f.update_progress(0),
              f.start();
          }),
          (this.start = function () {
            return a.hasClass(b.timer_paused_class)
              ? ((j = -1 === j ? g : j),
                a.removeClass(b.timer_paused_class),
                i &&
                  ((d = new Date().getTime()),
                  h.animate({ width: "100%" }, j, "linear")),
                (e = setTimeout(function () {
                  f.restart(), c();
                }, j)),
                void a.trigger("timer-started.fndtn.orbit"))
              : !0;
          }),
          (this.stop = function () {
            if (a.hasClass(b.timer_paused_class)) return !0;
            if ((clearTimeout(e), a.addClass(b.timer_paused_class), i)) {
              var c = new Date().getTime();
              j -= c - d;
              var h = 100 - (j / g) * 100;
              f.update_progress(h);
            }
            a.trigger("timer-stopped.fndtn.orbit");
          });
      },
      g = function (a, b) {
        var c =
          "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend";
        (this.next = function (d, e, f) {
          Modernizr.csstransitions
            ? e.on(c, function () {
                e.unbind(c),
                  d.removeClass("active animate-out"),
                  b
                    .children()
                    .css({
                      transform: "",
                      "-ms-transform": "",
                      "-webkit-transition-duration": "",
                      "-moz-transition-duration": "",
                      "-o-transition-duration": "",
                      "transition-duration": "",
                    }),
                  f();
              })
            : setTimeout(function () {
                d.removeClass("active animate-out"),
                  b
                    .children()
                    .css({
                      transform: "",
                      "-ms-transform": "",
                      "-webkit-transition-duration": "",
                      "-moz-transition-duration": "",
                      "-o-transition-duration": "",
                      "transition-duration": "",
                    }),
                  f();
              }, a.animation_speed),
            b
              .children()
              .css({
                transform: "",
                "-ms-transform": "",
                "-webkit-transition-duration": "",
                "-moz-transition-duration": "",
                "-o-transition-duration": "",
                "transition-duration": "",
              }),
            d.addClass("animate-out"),
            e.addClass("animate-in");
        }),
          (this.prev = function (d, e, f) {
            Modernizr.csstransitions
              ? e.on(c, function () {
                  e.unbind(c),
                    d.removeClass("active animate-out"),
                    b
                      .children()
                      .css({
                        transform: "",
                        "-ms-transform": "",
                        "-webkit-transition-duration": "",
                        "-moz-transition-duration": "",
                        "-o-transition-duration": "",
                        "transition-duration": "",
                      }),
                    f();
                })
              : setTimeout(function () {
                  d.removeClass("active animate-out"),
                    b
                      .children()
                      .css({
                        transform: "",
                        "-ms-transform": "",
                        "-webkit-transition-duration": "",
                        "-moz-transition-duration": "",
                        "-o-transition-duration": "",
                        "transition-duration": "",
                      }),
                    f();
                }, a.animation_speed),
              b
                .children()
                .css({
                  transform: "",
                  "-ms-transform": "",
                  "-webkit-transition-duration": "",
                  "-moz-transition-duration": "",
                  "-o-transition-duration": "",
                  "transition-duration": "",
                }),
              d.addClass("animate-out"),
              e.addClass("animate-in");
          });
      };
    (Foundation.libs = Foundation.libs || {}),
      (Foundation.libs.orbit = {
        name: "orbit",
        version: "5.2.3",
        settings: {
          animation: "slide",
          timer_speed: 1e4,
          pause_on_hover: !0,
          resume_on_mouseout: !1,
          next_on_click: !0,
          animation_speed: 500,
          stack_on_small: !1,
          navigation_arrows: !0,
          slide_number: !0,
          slide_number_text: "of",
          container_class: "orbit-container",
          stack_on_small_class: "orbit-stack-on-small",
          next_class: "orbit-next",
          prev_class: "orbit-prev",
          timer_container_class: "orbit-timer",
          timer_paused_class: "paused",
          timer_progress_class: "orbit-progress",
          timer_show_progress_bar: !0,
          slides_container_class: "orbit-slides-container",
          preloader_class: "preloader",
          slide_selector: "*",
          bullets_container_class: "orbit-bullets",
          bullets_active_class: "active",
          slide_number_class: "orbit-slide-number",
          caption_class: "orbit-caption",
          active_slide_class: "active",
          orbit_transition_class: "orbit-transitioning",
          bullets: !0,
          circular: !0,
          timer: !0,
          variable_height: !1,
          swipe: !0,
          before_slide_change: d,
          after_slide_change: d,
        },
        init: function (a, b, c) {
          this.bindings(b, c);
        },
        events: function (a) {
          var b = this,
            c = new e(this.S(a), this.S(a).data("orbit-init"));
          this.S(a).data(b.name + "-instance", c);
        },
        reflow: function () {
          var a = this;
          if (a.S(a.scope).is("[data-orbit]")) {
            var b = a.S(a.scope),
              c = b.data(a.name + "-instance");
            c.compute_dimensions();
          } else
            a.S("[data-orbit]", a.scope).each(function (b, c) {
              var d = a.S(c),
                e = (a.data_options(d), d.data(a.name + "-instance"));
              e.compute_dimensions();
            });
        },
      });
  })(jQuery, window, window.document),
  (function (a, b, c, d) {
    "use strict";
    function e(a) {
      var b = /fade/i.test(a),
        c = /pop/i.test(a);
      return { animate: b || c, pop: c, fade: b };
    }
    Foundation.libs.reveal = {
      name: "reveal",
      version: "5.2.3",
      locked: !1,
      settings: {
        animation: "fadeAndPop",
        animation_speed: 250,
        close_on_background_click: !0,
        close_on_esc: !0,
        dismiss_modal_class: "close-reveal-modal",
        bg_class: "reveal-modal-bg",
        open: function () {},
        opened: function () {},
        close: function () {},
        closed: function () {},
        bg: a(".reveal-modal-bg"),
        css: {
          open: { opacity: 0, visibility: "visible", display: "block" },
          close: { opacity: 1, visibility: "hidden", display: "none" },
        },
      },
      init: function (b, c, d) {
        a.extend(!0, this.settings, c, d), this.bindings(c, d);
      },
      events: function () {
        var a = this,
          b = a.S;
        return (
          b(this.scope)
            .off(".reveal")
            .on(
              "click.fndtn.reveal",
              "[" + this.add_namespace("data-reveal-id") + "]",
              function (c) {
                if ((c.preventDefault(), !a.locked)) {
                  var d = b(this),
                    e = d.data(a.data_attr("reveal-ajax"));
                  if (((a.locked = !0), "undefined" == typeof e))
                    a.open.call(a, d);
                  else {
                    var f = e === !0 ? d.attr("href") : e;
                    a.open.call(a, d, { url: f });
                  }
                }
              }
            ),
          b(c).on(
            "touchend.fndtn.reveal click.fndtn.reveal",
            this.close_targets(),
            function (c) {
              if ((c.preventDefault(), !a.locked)) {
                var d = b("[" + a.attr_name() + "].open").data(
                    a.attr_name(!0) + "-init"
                  ),
                  e = b(c.target)[0] === b("." + d.bg_class)[0];
                if (e) {
                  if (!d.close_on_background_click) return;
                  c.stopPropagation();
                }
                (a.locked = !0),
                  a.close.call(
                    a,
                    e
                      ? b("[" + a.attr_name() + "].open")
                      : b(this).closest("[" + a.attr_name() + "]")
                  );
              }
            }
          ),
          b("[" + a.attr_name() + "]", this.scope).length > 0
            ? b(this.scope)
                .on("open.fndtn.reveal", this.settings.open)
                .on("opened.fndtn.reveal", this.settings.opened)
                .on("opened.fndtn.reveal", this.open_video)
                .on("close.fndtn.reveal", this.settings.close)
                .on("closed.fndtn.reveal", this.settings.closed)
                .on("closed.fndtn.reveal", this.close_video)
            : b(this.scope)
                .on(
                  "open.fndtn.reveal",
                  "[" + a.attr_name() + "]",
                  this.settings.open
                )
                .on(
                  "opened.fndtn.reveal",
                  "[" + a.attr_name() + "]",
                  this.settings.opened
                )
                .on(
                  "opened.fndtn.reveal",
                  "[" + a.attr_name() + "]",
                  this.open_video
                )
                .on(
                  "close.fndtn.reveal",
                  "[" + a.attr_name() + "]",
                  this.settings.close
                )
                .on(
                  "closed.fndtn.reveal",
                  "[" + a.attr_name() + "]",
                  this.settings.closed
                )
                .on(
                  "closed.fndtn.reveal",
                  "[" + a.attr_name() + "]",
                  this.close_video
                ),
          !0
        );
      },
      key_up_on: function () {
        var a = this;
        return (
          a
            .S("body")
            .off("keyup.fndtn.reveal")
            .on("keyup.fndtn.reveal", function (b) {
              var c = a.S("[" + a.attr_name() + "].open"),
                d = c.data(a.attr_name(!0) + "-init");
              d &&
                27 === b.which &&
                d.close_on_esc &&
                !a.locked &&
                a.close.call(a, c);
            }),
          !0
        );
      },
      key_up_off: function () {
        return this.S("body").off("keyup.fndtn.reveal"), !0;
      },
      open: function (b, c) {
        var d,
          e = this;
        b
          ? "undefined" != typeof b.selector
            ? (d = e.S("#" + b.data(e.data_attr("reveal-id"))).first())
            : ((d = e.S(this.scope)), (c = b))
          : (d = e.S(this.scope));
        var f = d.data(e.attr_name(!0) + "-init");
        if (((f = f || this.settings), !d.hasClass("open"))) {
          var g = e.S("[" + e.attr_name() + "].open");
          if (
            ("undefined" == typeof d.data("css-top") &&
              d
                .data("css-top", parseInt(d.css("top"), 10))
                .data("offset", this.cache_offset(d)),
            this.key_up_on(d),
            d.trigger("open"),
            g.length < 1 && this.toggle_bg(d, !0),
            "string" == typeof c && (c = { url: c }),
            "undefined" != typeof c && c.url)
          ) {
            var h = "undefined" != typeof c.success ? c.success : null;
            a.extend(c, {
              success: function (b, c, i) {
                a.isFunction(h) && h(b, c, i),
                  d.html(b),
                  e.S(d).foundation("section", "reflow"),
                  e.S(d).children().foundation(),
                  g.length > 0 && e.hide(g, f.css.close),
                  e.show(d, f.css.open);
              },
            }),
              a.ajax(c);
          } else
            g.length > 0 && this.hide(g, f.css.close), this.show(d, f.css.open);
        }
      },
      close: function (a) {
        var a = a && a.length ? a : this.S(this.scope),
          b = this.S("[" + this.attr_name() + "].open"),
          c = a.data(this.attr_name(!0) + "-init") || this.settings;
        b.length > 0 &&
          ((this.locked = !0),
          this.key_up_off(a),
          a.trigger("close"),
          this.toggle_bg(a, !1),
          this.hide(b, c.css.close, c));
      },
      close_targets: function () {
        var a = "." + this.settings.dismiss_modal_class;
        return this.settings.close_on_background_click
          ? a + ", ." + this.settings.bg_class
          : a;
      },
      toggle_bg: function (b, c) {
        0 === this.S("." + this.settings.bg_class).length &&
          (this.settings.bg = a("<div />", { class: this.settings.bg_class })
            .appendTo("body")
            .hide());
        var e = this.settings.bg.filter(":visible").length > 0;
        c != e &&
          ((c == d ? e : !c)
            ? this.hide(this.settings.bg)
            : this.show(this.settings.bg));
      },
      show: function (c, d) {
        if (d) {
          var f = c.data(this.attr_name(!0) + "-init");
          if (((f = f || this.settings), 0 === c.parent("body").length)) {
            var g = c.wrap('<div style="display: none;" />').parent(),
              h = this.settings.rootElement || "body";
            c.on("closed.fndtn.reveal.wrapped", function () {
              c.detach().appendTo(g),
                c.unwrap().unbind("closed.fndtn.reveal.wrapped");
            }),
              c.detach().appendTo(h);
          }
          var i = e(f.animation);
          if ((i.animate || (this.locked = !1), i.pop)) {
            d.top = a(b).scrollTop() - c.data("offset") + "px";
            var j = {
              top: a(b).scrollTop() + c.data("css-top") + "px",
              opacity: 1,
            };
            return setTimeout(
              function () {
                return c
                  .css(d)
                  .animate(
                    j,
                    f.animation_speed,
                    "linear",
                    function () {
                      (this.locked = !1), c.trigger("opened");
                    }.bind(this)
                  )
                  .addClass("open");
              }.bind(this),
              f.animation_speed / 2
            );
          }
          if (i.fade) {
            d.top = a(b).scrollTop() + c.data("css-top") + "px";
            var j = { opacity: 1 };
            return setTimeout(
              function () {
                return c
                  .css(d)
                  .animate(
                    j,
                    f.animation_speed,
                    "linear",
                    function () {
                      (this.locked = !1), c.trigger("opened");
                    }.bind(this)
                  )
                  .addClass("open");
              }.bind(this),
              f.animation_speed / 2
            );
          }
          return c
            .css(d)
            .show()
            .css({ opacity: 1 })
            .addClass("open")
            .trigger("opened");
        }
        var f = this.settings;
        return e(f.animation).fade
          ? c.fadeIn(f.animation_speed / 2)
          : ((this.locked = !1), c.show());
      },
      hide: function (c, d) {
        if (d) {
          var f = c.data(this.attr_name(!0) + "-init");
          f = f || this.settings;
          var g = e(f.animation);
          if ((g.animate || (this.locked = !1), g.pop)) {
            var h = {
              top: -a(b).scrollTop() - c.data("offset") + "px",
              opacity: 0,
            };
            return setTimeout(
              function () {
                return c
                  .animate(
                    h,
                    f.animation_speed,
                    "linear",
                    function () {
                      (this.locked = !1), c.css(d).trigger("closed");
                    }.bind(this)
                  )
                  .removeClass("open");
              }.bind(this),
              f.animation_speed / 2
            );
          }
          if (g.fade) {
            var h = { opacity: 0 };
            return setTimeout(
              function () {
                return c
                  .animate(
                    h,
                    f.animation_speed,
                    "linear",
                    function () {
                      (this.locked = !1), c.css(d).trigger("closed");
                    }.bind(this)
                  )
                  .removeClass("open");
              }.bind(this),
              f.animation_speed / 2
            );
          }
          return c.hide().css(d).removeClass("open").trigger("closed");
        }
        var f = this.settings;
        return e(f.animation).fade
          ? c.fadeOut(f.animation_speed / 2)
          : c.hide();
      },
      close_video: function (b) {
        var c = a(".flex-video", b.target),
          d = a("iframe", c);
        d.length > 0 &&
          (d.attr("data-src", d[0].src),
          d.attr("src", "about:blank"),
          c.hide());
      },
      open_video: function (b) {
        var c = a(".flex-video", b.target),
          e = c.find("iframe");
        if (e.length > 0) {
          var f = e.attr("data-src");
          if ("string" == typeof f) e[0].src = e.attr("data-src");
          else {
            var g = e[0].src;
            (e[0].src = d), (e[0].src = g);
          }
          c.show();
        }
      },
      data_attr: function (a) {
        return this.namespace.length > 0 ? this.namespace + "-" + a : a;
      },
      cache_offset: function (a) {
        var b = a.show().height() + parseInt(a.css("top"), 10);
        return a.hide(), b;
      },
      off: function () {
        a(this.scope).off(".fndtn.reveal");
      },
      reflow: function () {},
    };
  })(jQuery, window, window.document),
  (function (a, b) {
    "use strict";
    Foundation.libs.slider = {
      name: "slider",
      version: "5.2.3",
      settings: {
        start: 0,
        end: 100,
        step: 1,
        initial: null,
        display_selector: "",
        on_change: function () {},
      },
      cache: {},
      init: function (a, b, c) {
        Foundation.inherit(this, "throttle"),
          this.bindings(b, c),
          this.reflow();
      },
      events: function () {
        var c = this;
        a(this.scope)
          .off(".slider")
          .on(
            "mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider",
            "[" + c.attr_name() + "] .range-slider-handle",
            function (b) {
              c.cache.active ||
                (b.preventDefault(), c.set_active_slider(a(b.target)));
            }
          )
          .on(
            "mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider",
            function (a) {
              c.cache.active &&
                (a.preventDefault(),
                c.calculate_position(
                  c.cache.active,
                  a.pageX ||
                    a.originalEvent.clientX ||
                    a.originalEvent.touches[0].clientX ||
                    a.currentPoint.x
                ));
            }
          )
          .on(
            "mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider",
            function () {
              c.remove_active_slider();
            }
          )
          .on("change.fndtn.slider", function () {
            c.settings.on_change();
          }),
          c.S(b).on(
            "resize.fndtn.slider",
            c.throttle(function () {
              c.reflow();
            }, 300)
          );
      },
      set_active_slider: function (a) {
        this.cache.active = a;
      },
      remove_active_slider: function () {
        this.cache.active = null;
      },
      calculate_position: function (b, c) {
        var d = this,
          e = a.extend({}, d.settings, d.data_options(b.parent())),
          f =
            (a.data(b[0], "handle_w"),
            a.data(b[0], "handle_o"),
            a.data(b[0], "bar_w")),
          g = a.data(b[0], "bar_o");
        requestAnimationFrame(function () {
          var a;
          a = Foundation.rtl
            ? d.limit_to((g + f - c) / f, 0, 1)
            : d.limit_to((c - g) / f, 0, 1);
          var h = d.normalized_value(a, e.start, e.end, e.step);
          d.set_ui(b, h);
        });
      },
      set_ui: function (b, c) {
        var d = a.extend({}, this.settings, this.data_options(b.parent())),
          e = a.data(b[0], "handle_w"),
          f = a.data(b[0], "bar_w"),
          g = this.normalized_percentage(c, d.start, d.end),
          h = g * (f - e) - 1,
          i = 100 * g;
        Foundation.rtl && (h = -h),
          this.set_translate(b, h),
          b.siblings(".range-slider-active-segment").css("width", i + "%"),
          b.parent().attr(this.attr_name(), c),
          b.parent().trigger("change"),
          b.parent().children("input[type=hidden]").val(c),
          "" != d.input_id &&
            a(d.display_selector).each(function () {
              this.hasOwnProperty("value") ? a(this).val(c) : a(this).text(c);
            });
      },
      normalized_percentage: function (a, b, c) {
        return (a - b) / (c - b);
      },
      normalized_value: function (a, b, c, d) {
        var e = c - b,
          f = a * e,
          g = (f - (f % d)) / d,
          h = f % d,
          i = h >= 0.5 * d ? d : 0;
        return g * d + i + b;
      },
      set_translate: function (b, c, d) {
        d
          ? a(b)
              .css("-webkit-transform", "translateY(" + c + "px)")
              .css("-moz-transform", "translateY(" + c + "px)")
              .css("-ms-transform", "translateY(" + c + "px)")
              .css("-o-transform", "translateY(" + c + "px)")
              .css("transform", "translateY(" + c + "px)")
          : a(b)
              .css("-webkit-transform", "translateX(" + c + "px)")
              .css("-moz-transform", "translateX(" + c + "px)")
              .css("-ms-transform", "translateX(" + c + "px)")
              .css("-o-transform", "translateX(" + c + "px)")
              .css("transform", "translateX(" + c + "px)");
      },
      limit_to: function (a, b, c) {
        return Math.min(Math.max(a, b), c);
      },
      initialize_settings: function (b) {
        a.data(b, "bar", a(b).parent()),
          a.data(b, "bar_o", a(b).parent().offset().left),
          a.data(b, "bar_w", a(b).parent().outerWidth()),
          a.data(b, "handle_o", a(b).offset().left),
          a.data(b, "handle_w", a(b).outerWidth()),
          a.data(
            b,
            "settings",
            a.extend({}, this.settings, this.data_options(a(b).parent()))
          );
      },
      set_initial_position: function (b) {
        var c = a.data(b.children(".range-slider-handle")[0], "settings"),
          d = c.initial
            ? c.initial
            : Math.floor((0.5 * (c.end - c.start)) / c.step) * c.step + c.start,
          e = b.children(".range-slider-handle");
        this.set_ui(e, d);
      },
      set_value: function (b) {
        var c = this;
        a("[" + c.attr_name() + "]", this.scope).each(function () {
          a(this).attr(c.attr_name(), b);
        }),
          a(this.scope).attr(c.attr_name()) &&
            a(this.scope).attr(c.attr_name(), b),
          c.reflow();
      },
      reflow: function () {
        var b = this;
        b.S("[" + this.attr_name() + "]").each(function () {
          var c = a(this).children(".range-slider-handle")[0],
            d = a(this).attr(b.attr_name());
          b.initialize_settings(c),
            d ? b.set_ui(a(c), parseFloat(d)) : b.set_initial_position(a(this));
        });
      },
    };
  })(jQuery, window, window.document),
  (function (a, b, c, d) {
    "use strict";
    Foundation.libs.tab = {
      name: "tab",
      version: "5.2.3",
      settings: {
        active_class: "active",
        callback: function () {},
        deep_linking: !1,
        scroll_to_content: !0,
        is_hover: !1,
      },
      default_tab_hashes: [],
      init: function (a, b, c) {
        var d = this,
          e = this.S;
        this.bindings(b, c),
          this.handle_location_hash_change(),
          e("[" + this.attr_name() + "] > .active > a", this.scope).each(
            function () {
              d.default_tab_hashes.push(this.hash);
            }
          );
      },
      events: function () {
        var a = this,
          c = this.S;
        c(this.scope)
          .off(".tab")
          .on(
            "click.fndtn.tab",
            "[" + this.attr_name() + "] > * > a",
            function (b) {
              var d = c(this)
                .closest("[" + a.attr_name() + "]")
                .data(a.attr_name(!0) + "-init");
              (!d.is_hover || Modernizr.touch) &&
                (b.preventDefault(),
                b.stopPropagation(),
                a.toggle_active_tab(c(this).parent()));
            }
          )
          .on(
            "mouseenter.fndtn.tab",
            "[" + this.attr_name() + "] > * > a",
            function () {
              var b = c(this)
                .closest("[" + a.attr_name() + "]")
                .data(a.attr_name(!0) + "-init");
              b.is_hover && a.toggle_active_tab(c(this).parent());
            }
          ),
          c(b).on("hashchange.fndtn.tab", function (b) {
            b.preventDefault(), a.handle_location_hash_change();
          });
      },
      handle_location_hash_change: function () {
        var b = this,
          c = this.S;
        c("[" + this.attr_name() + "]", this.scope).each(function () {
          var e = c(this).data(b.attr_name(!0) + "-init");
          if (e.deep_linking) {
            var f = b.scope.location.hash;
            if ("" != f) {
              var g = c(f);
              if (g.hasClass("content") && g.parent().hasClass("tab-content"))
                b.toggle_active_tab(
                  a("[" + b.attr_name() + "] > * > a[href=" + f + "]").parent()
                );
              else {
                var h = g.closest(".content").attr("id");
                h != d &&
                  b.toggle_active_tab(
                    a(
                      "[" + b.attr_name() + "] > * > a[href=#" + h + "]"
                    ).parent(),
                    f
                  );
              }
            } else
              for (var i in b.default_tab_hashes)
                b.toggle_active_tab(
                  a(
                    "[" +
                      b.attr_name() +
                      "] > * > a[href=" +
                      b.default_tab_hashes[i] +
                      "]"
                  ).parent()
                );
          }
        });
      },
      toggle_active_tab: function (c, e) {
        var f = this.S,
          g = c.closest("[" + this.attr_name() + "]"),
          h = c.children("a").first(),
          i = "#" + h.attr("href").split("#")[1],
          j = f(i),
          k = c.siblings(),
          l = g.data(this.attr_name(!0) + "-init");
        if (
          (f(this).data(this.data_attr("tab-content")) &&
            ((i =
              "#" + f(this).data(this.data_attr("tab-content")).split("#")[1]),
            (j = f(i))),
          l.deep_linking)
        ) {
          var m = a("body,html").scrollTop();
          (b.location.hash = e != d ? e : i),
            l.scroll_to_content
              ? e == d || e == i
                ? c.parent()[0].scrollIntoView()
                : f(i)[0].scrollIntoView()
              : (e == d || e == i) && a("body,html").scrollTop(m);
        }
        c.addClass(l.active_class).triggerHandler("opened"),
          k.removeClass(l.active_class),
          j
            .siblings()
            .removeClass(l.active_class)
            .end()
            .addClass(l.active_class),
          l.callback(c),
          j.triggerHandler("toggled", [c]),
          g.triggerHandler("toggled", [j]);
      },
      data_attr: function (a) {
        return this.namespace.length > 0 ? this.namespace + "-" + a : a;
      },
      off: function () {},
      reflow: function () {},
    };
  })(jQuery, window, window.document),
  (function (a, b) {
    "use strict";
    Foundation.libs.tooltip = {
      name: "tooltip",
      version: "5.2.3",
      settings: {
        additional_inheritable_classes: [],
        tooltip_class: ".tooltip",
        append_to: "body",
        touch_close_text: "Tap To Close",
        disable_for_touch: !1,
        hover_delay: 200,
        show_on: "all",
        tip_template: function (a, b) {
          return (
            '<span data-selector="' +
            a +
            '" class="' +
            Foundation.libs.tooltip.settings.tooltip_class.substring(1) +
            '">' +
            b +
            '<span class="nub"></span></span>'
          );
        },
      },
      cache: {},
      init: function (a, b, c) {
        Foundation.inherit(this, "random_str"), this.bindings(b, c);
      },
      should_show: function (b) {
        var c = a.extend({}, this.settings, this.data_options(b));
        return "all" === c.show_on
          ? !0
          : this.small() && "small" === c.show_on
          ? !0
          : this.medium() && "medium" === c.show_on
          ? !0
          : this.large() && "large" === c.show_on
          ? !0
          : !1;
      },
      medium: function () {
        return matchMedia(Foundation.media_queries.medium).matches;
      },
      large: function () {
        return matchMedia(Foundation.media_queries.large).matches;
      },
      events: function (b) {
        var c = this,
          d = c.S;
        c.create(this.S(b)),
          a(this.scope)
            .off(".tooltip")
            .on(
              "mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip",
              "[" + this.attr_name() + "]",
              function (b) {
                var e = d(this),
                  f = a.extend({}, c.settings, c.data_options(e)),
                  g = !1;
                if (
                  Modernizr.touch &&
                  /touchstart|MSPointerDown/i.test(b.type) &&
                  d(b.target).is("a")
                )
                  return !1;
                if (/mouse/i.test(b.type) && c.ie_touch(b)) return !1;
                if (e.hasClass("open"))
                  Modernizr.touch &&
                    /touchstart|MSPointerDown/i.test(b.type) &&
                    b.preventDefault(),
                    c.hide(e);
                else {
                  if (
                    f.disable_for_touch &&
                    Modernizr.touch &&
                    /touchstart|MSPointerDown/i.test(b.type)
                  )
                    return;
                  !f.disable_for_touch &&
                    Modernizr.touch &&
                    /touchstart|MSPointerDown/i.test(b.type) &&
                    (b.preventDefault(),
                    d(f.tooltip_class + ".open").hide(),
                    (g = !0)),
                    /enter|over/i.test(b.type)
                      ? (this.timer = setTimeout(
                          function () {
                            c.showTip(e);
                          }.bind(this),
                          c.settings.hover_delay
                        ))
                      : "mouseout" === b.type || "mouseleave" === b.type
                      ? (clearTimeout(this.timer), c.hide(e))
                      : c.showTip(e);
                }
              }
            )
            .on(
              "mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip",
              "[" + this.attr_name() + "].open",
              function (b) {
                return /mouse/i.test(b.type) && c.ie_touch(b)
                  ? !1
                  : void (
                      ("touch" != a(this).data("tooltip-open-event-type") ||
                        "mouseleave" != b.type) &&
                      ("mouse" == a(this).data("tooltip-open-event-type") &&
                      /MSPointerDown|touchstart/i.test(b.type)
                        ? c.convert_to_touch(a(this))
                        : c.hide(a(this)))
                    );
              }
            )
            .on(
              "DOMNodeRemoved DOMAttrModified",
              "[" + this.attr_name() + "]:not(a)",
              function () {
                c.hide(d(this));
              }
            );
      },
      ie_touch: function () {
        return !1;
      },
      showTip: function (a) {
        var b = this.getTip(a);
        return this.should_show(a, b) ? this.show(a) : void 0;
      },
      getTip: function (b) {
        var c = this.selector(b),
          d = a.extend({}, this.settings, this.data_options(b)),
          e = null;
        return (
          c &&
            (e = this.S('span[data-selector="' + c + '"]' + d.tooltip_class)),
          "object" == typeof e ? e : !1
        );
      },
      selector: function (a) {
        var b = a.attr("id"),
          c = a.attr(this.attr_name()) || a.attr("data-selector");
        return (
          ((b && b.length < 1) || !b) &&
            "string" != typeof c &&
            ((c = this.random_str(6)), a.attr("data-selector", c)),
          b && b.length > 0 ? b : c
        );
      },
      create: function (c) {
        var d = this,
          e = a.extend({}, this.settings, this.data_options(c)),
          f = this.settings.tip_template;
        "string" == typeof e.tip_template &&
          b.hasOwnProperty(e.tip_template) &&
          (f = b[e.tip_template]);
        var g = a(
            f(this.selector(c), a("<div></div>").html(c.attr("title")).html())
          ),
          h = this.inheritable_classes(c);
        g.addClass(h).appendTo(e.append_to),
          Modernizr.touch &&
            (g.append(
              '<span class="tap-to-close">' + e.touch_close_text + "</span>"
            ),
            g.on(
              "touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip",
              function () {
                d.hide(c);
              }
            )),
          c.removeAttr("title").attr("title", "");
      },
      reposition: function (b, c, d) {
        var e, f, g, h, i;
        if (
          (c.css("visibility", "hidden").show(),
          (e = b.data("width")),
          (f = c.children(".nub")),
          (g = f.outerHeight()),
          (h = f.outerHeight()),
          c.css(this.small() ? { width: "100%" } : { width: e ? e : "auto" }),
          (i = function (a, b, c, d, e) {
            return a
              .css({
                top: b ? b : "auto",
                bottom: d ? d : "auto",
                left: e ? e : "auto",
                right: c ? c : "auto",
              })
              .end();
          }),
          i(
            c,
            b.offset().top + b.outerHeight() + 10,
            "auto",
            "auto",
            b.offset().left
          ),
          this.small())
        )
          i(
            c,
            b.offset().top + b.outerHeight() + 10,
            "auto",
            "auto",
            12.5,
            a(this.scope).width()
          ),
            c.addClass("tip-override"),
            i(f, -g, "auto", "auto", b.offset().left);
        else {
          var j = b.offset().left;
          Foundation.rtl &&
            (f.addClass("rtl"),
            (j = b.offset().left + b.outerWidth() - c.outerWidth())),
            i(c, b.offset().top + b.outerHeight() + 10, "auto", "auto", j),
            c.removeClass("tip-override"),
            d && d.indexOf("tip-top") > -1
              ? (Foundation.rtl && f.addClass("rtl"),
                i(
                  c,
                  b.offset().top - c.outerHeight(),
                  "auto",
                  "auto",
                  j
                ).removeClass("tip-override"))
              : d && d.indexOf("tip-left") > -1
              ? (i(
                  c,
                  b.offset().top + b.outerHeight() / 2 - c.outerHeight() / 2,
                  "auto",
                  "auto",
                  b.offset().left - c.outerWidth() - g
                ).removeClass("tip-override"),
                f.removeClass("rtl"))
              : d &&
                d.indexOf("tip-right") > -1 &&
                (i(
                  c,
                  b.offset().top + b.outerHeight() / 2 - c.outerHeight() / 2,
                  "auto",
                  "auto",
                  b.offset().left + b.outerWidth() + g
                ).removeClass("tip-override"),
                f.removeClass("rtl"));
        }
        c.css("visibility", "visible").hide();
      },
      small: function () {
        return (
          matchMedia(Foundation.media_queries.small).matches &&
          !matchMedia(Foundation.media_queries.medium).matches
        );
      },
      inheritable_classes: function (b) {
        var c = a.extend({}, this.settings, this.data_options(b)),
          d = [
            "tip-top",
            "tip-left",
            "tip-bottom",
            "tip-right",
            "radius",
            "round",
          ].concat(c.additional_inheritable_classes),
          e = b.attr("class"),
          f = e
            ? a
                .map(e.split(" "), function (b) {
                  return -1 !== a.inArray(b, d) ? b : void 0;
                })
                .join(" ")
            : "";
        return a.trim(f);
      },
      convert_to_touch: function (b) {
        var c = this,
          d = c.getTip(b),
          e = a.extend({}, c.settings, c.data_options(b));
        0 === d.find(".tap-to-close").length &&
          (d.append(
            '<span class="tap-to-close">' + e.touch_close_text + "</span>"
          ),
          d.on(
            "click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose",
            function () {
              c.hide(b);
            }
          )),
          b.data("tooltip-open-event-type", "touch");
      },
      show: function (a) {
        var b = this.getTip(a);
        "touch" == a.data("tooltip-open-event-type") &&
          this.convert_to_touch(a),
          this.reposition(a, b, a.attr("class")),
          a.addClass("open"),
          b.fadeIn(150);
      },
      hide: function (a) {
        var b = this.getTip(a);
        b.fadeOut(150, function () {
          b.find(".tap-to-close").remove(),
            b.off(
              "click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"
            ),
            a.removeClass("open");
        });
      },
      off: function () {
        var b = this;
        this.S(this.scope).off(".fndtn.tooltip"),
          this.S(this.settings.tooltip_class)
            .each(function (c) {
              a("[" + b.attr_name() + "]")
                .eq(c)
                .attr("title", a(this).text());
            })
            .remove();
      },
      reflow: function () {},
    };
  })(jQuery, window, window.document),
  (function (a, b, c) {
    "use strict";
    Foundation.libs.topbar = {
      name: "topbar",
      version: "5.2.3",
      settings: {
        index: 0,
        sticky_class: "sticky",
        custom_back_text: !0,
        back_text: "Back",
        is_hover: !0,
        mobile_show_parent_link: !1,
        scrolltop: !0,
        sticky_on: "all",
      },
      init: function (b, c, d) {
        Foundation.inherit(this, "add_custom_rule register_media throttle");
        var e = this;
        e.register_media("topbar", "foundation-mq-topbar"),
          this.bindings(c, d),
          e.S("[" + this.attr_name() + "]", this.scope).each(function () {
            {
              var b = a(this),
                c = b.data(e.attr_name(!0) + "-init");
              e.S("section", this);
            }
            b.data("index", 0);
            var d = b.parent();
            d.hasClass("fixed") || e.is_sticky(b, d, c)
              ? ((e.settings.sticky_class = c.sticky_class),
                (e.settings.sticky_topbar = b),
                b.data("height", d.outerHeight()),
                b.data("stickyoffset", d.offset().top))
              : b.data("height", b.outerHeight()),
              c.assembled || e.assemble(b),
              c.is_hover
                ? e.S(".has-dropdown", b).addClass("not-click")
                : e.S(".has-dropdown", b).removeClass("not-click"),
              e.add_custom_rule(
                ".f-topbar-fixed { padding-top: " + b.data("height") + "px }"
              ),
              d.hasClass("fixed") && e.S("body").addClass("f-topbar-fixed");
          });
      },
      is_sticky: function (a, b, c) {
        var d = b.hasClass(c.sticky_class);
        return d && "all" === c.sticky_on
          ? !0
          : d && this.small() && "small" === c.sticky_on
          ? !0
          : d && this.medium() && "medium" === c.sticky_on
          ? !0
          : d && this.large() && "large" === c.sticky_on
          ? !0
          : !1;
      },
      toggle: function (c) {
        var d,
          e = this;
        d = c
          ? e.S(c).closest("[" + this.attr_name() + "]")
          : e.S("[" + this.attr_name() + "]");
        var f = d.data(this.attr_name(!0) + "-init"),
          g = e.S("section, .section", d);
        e.breakpoint() &&
          (e.rtl
            ? (g.css({ right: "0%" }), a(">.name", g).css({ right: "100%" }))
            : (g.css({ left: "0%" }), a(">.name", g).css({ left: "100%" })),
          e.S("li.moved", g).removeClass("moved"),
          d.data("index", 0),
          d.toggleClass("expanded").css("height", "")),
          f.scrolltop
            ? d.hasClass("expanded")
              ? d.parent().hasClass("fixed") &&
                (f.scrolltop
                  ? (d.parent().removeClass("fixed"),
                    d.addClass("fixed"),
                    e.S("body").removeClass("f-topbar-fixed"),
                    b.scrollTo(0, 0))
                  : d.parent().removeClass("expanded"))
              : d.hasClass("fixed") &&
                (d.parent().addClass("fixed"),
                d.removeClass("fixed"),
                e.S("body").addClass("f-topbar-fixed"))
            : (e.is_sticky(d, d.parent(), f) && d.parent().addClass("fixed"),
              d.parent().hasClass("fixed") &&
                (d.hasClass("expanded")
                  ? (d.addClass("fixed"),
                    d.parent().addClass("expanded"),
                    e.S("body").addClass("f-topbar-fixed"))
                  : (d.removeClass("fixed"),
                    d.parent().removeClass("expanded"),
                    e.update_sticky_positioning())));
      },
      timer: null,
      events: function () {
        var c = this,
          d = this.S;
        d(this.scope)
          .off(".topbar")
          .on(
            "click.fndtn.topbar",
            "[" + this.attr_name() + "] .toggle-topbar",
            function (a) {
              a.preventDefault(), c.toggle(this);
            }
          )
          .on(
            "click.fndtn.topbar",
            '.top-bar .top-bar-section li a[href^="#"],[' +
              this.attr_name() +
              '] .top-bar-section li a[href^="#"]',
            function () {
              var b = a(this).closest("li");
              !c.breakpoint() ||
                b.hasClass("back") ||
                b.hasClass("has-dropdown") ||
                c.toggle();
            }
          )
          .on(
            "click.fndtn.topbar",
            "[" + this.attr_name() + "] li.has-dropdown",
            function (b) {
              var e = d(this),
                f = d(b.target),
                g = e.closest("[" + c.attr_name() + "]"),
                h = g.data(c.attr_name(!0) + "-init");
              return f.data("revealId")
                ? void c.toggle()
                : void (
                    c.breakpoint() ||
                    ((!h.is_hover || Modernizr.touch) &&
                      (b.stopImmediatePropagation(),
                      e.hasClass("hover")
                        ? (e
                            .removeClass("hover")
                            .find("li")
                            .removeClass("hover"),
                          e.parents("li.hover").removeClass("hover"))
                        : (e.addClass("hover"),
                          a(e).siblings().removeClass("hover"),
                          "A" === f[0].nodeName &&
                            f.parent().hasClass("has-dropdown") &&
                            b.preventDefault())))
                  );
            }
          )
          .on(
            "click.fndtn.topbar",
            "[" + this.attr_name() + "] .has-dropdown>a",
            function (a) {
              if (c.breakpoint()) {
                a.preventDefault();
                var b = d(this),
                  e = b.closest("[" + c.attr_name() + "]"),
                  f = e.find("section, .section"),
                  g = (b.next(".dropdown").outerHeight(), b.closest("li"));
                e.data("index", e.data("index") + 1),
                  g.addClass("moved"),
                  c.rtl
                    ? (f.css({ right: -(100 * e.data("index")) + "%" }),
                      f
                        .find(">.name")
                        .css({ right: 100 * e.data("index") + "%" }))
                    : (f.css({ left: -(100 * e.data("index")) + "%" }),
                      f
                        .find(">.name")
                        .css({ left: 100 * e.data("index") + "%" })),
                  e.css(
                    "height",
                    b.siblings("ul").outerHeight(!0) + e.data("height")
                  );
              }
            }
          ),
          d(b)
            .off(".topbar")
            .on(
              "resize.fndtn.topbar",
              c.throttle(function () {
                c.resize.call(c);
              }, 50)
            )
            .trigger("resize"),
          d("body")
            .off(".topbar")
            .on("click.fndtn.topbar touchstart.fndtn.topbar", function (a) {
              var b = d(a.target).closest("li").closest("li.hover");
              b.length > 0 ||
                d("[" + c.attr_name() + "] li.hover").removeClass("hover");
            }),
          d(this.scope).on(
            "click.fndtn.topbar",
            "[" + this.attr_name() + "] .has-dropdown .back",
            function (a) {
              a.preventDefault();
              var b = d(this),
                e = b.closest("[" + c.attr_name() + "]"),
                f = e.find("section, .section"),
                g = (e.data(c.attr_name(!0) + "-init"), b.closest("li.moved")),
                h = g.parent();
              e.data("index", e.data("index") - 1),
                c.rtl
                  ? (f.css({ right: -(100 * e.data("index")) + "%" }),
                    f
                      .find(">.name")
                      .css({ right: 100 * e.data("index") + "%" }))
                  : (f.css({ left: -(100 * e.data("index")) + "%" }),
                    f
                      .find(">.name")
                      .css({ left: 100 * e.data("index") + "%" })),
                0 === e.data("index")
                  ? e.css("height", "")
                  : e.css("height", h.outerHeight(!0) + e.data("height")),
                setTimeout(function () {
                  g.removeClass("moved");
                }, 300);
            }
          );
      },
      resize: function () {
        var a = this;
        a.S("[" + this.attr_name() + "]").each(function () {
          var b,
            d = a.S(this),
            e = d.data(a.attr_name(!0) + "-init"),
            f = d.parent("." + a.settings.sticky_class);
          if (!a.breakpoint()) {
            var g = d.hasClass("expanded");
            d
              .css("height", "")
              .removeClass("expanded")
              .find("li")
              .removeClass("hover"),
              g && a.toggle(d);
          }
          a.is_sticky(d, f, e) &&
            (f.hasClass("fixed")
              ? (f.removeClass("fixed"),
                (b = f.offset().top),
                a.S(c.body).hasClass("f-topbar-fixed") &&
                  (b -= d.data("height")),
                d.data("stickyoffset", b),
                f.addClass("fixed"))
              : ((b = f.offset().top), d.data("stickyoffset", b)));
        });
      },
      breakpoint: function () {
        return !matchMedia(Foundation.media_queries.topbar).matches;
      },
      small: function () {
        return matchMedia(Foundation.media_queries.small).matches;
      },
      medium: function () {
        return matchMedia(Foundation.media_queries.medium).matches;
      },
      large: function () {
        return matchMedia(Foundation.media_queries.large).matches;
      },
      assemble: function (b) {
        var c = this,
          d = b.data(this.attr_name(!0) + "-init"),
          e = c.S("section", b);
        e.detach(),
          c.S(".has-dropdown>a", e).each(function () {
            var b,
              e = c.S(this),
              f = e.siblings(".dropdown"),
              g = e.attr("href");
            f.find(".title.back").length ||
              ((b = a(
                d.mobile_show_parent_link && g && g.length > 1
                  ? '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li><a class="parent-link js-generated" href="' +
                      g +
                      '">' +
                      e.text() +
                      "</a></li>"
                  : '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li>'
              )),
              a("h5>a", b).html(
                1 == d.custom_back_text ? d.back_text : "&laquo; " + e.html()
              ),
              f.prepend(b));
          }),
          e.appendTo(b),
          this.sticky(),
          this.assembled(b);
      },
      assembled: function (b) {
        b.data(
          this.attr_name(!0),
          a.extend({}, b.data(this.attr_name(!0)), { assembled: !0 })
        );
      },
      height: function (b) {
        var c = 0,
          d = this;
        return (
          a("> li", b).each(function () {
            c += d.S(this).outerHeight(!0);
          }),
          c
        );
      },
      sticky: function () {
        var a = this;
        this.S(b).on("scroll", function () {
          a.update_sticky_positioning();
        });
      },
      update_sticky_positioning: function () {
        var a = "." + this.settings.sticky_class,
          c = this.S(b),
          d = this;
        if (
          d.settings.sticky_topbar &&
          d.is_sticky(
            this.settings.sticky_topbar,
            this.settings.sticky_topbar.parent(),
            this.settings
          )
        ) {
          var e = this.settings.sticky_topbar.data("stickyoffset");
          d.S(a).hasClass("expanded") ||
            (c.scrollTop() > e
              ? d.S(a).hasClass("fixed") ||
                (d.S(a).addClass("fixed"),
                d.S("body").addClass("f-topbar-fixed"))
              : c.scrollTop() <= e &&
                d.S(a).hasClass("fixed") &&
                (d.S(a).removeClass("fixed"),
                d.S("body").removeClass("f-topbar-fixed")));
        }
      },
      off: function () {
        this.S(this.scope).off(".fndtn.topbar"), this.S(b).off(".fndtn.topbar");
      },
      reflow: function () {},
    };
  })(jQuery, this, this.document);
var components = [];
$("[data-search]").each(function () {
  {
    var a = $(this),
      b = a.text().trim(),
      c = a.data("search").trim();
    a.attr("href");
  }
  components.push({ value: b, data: a.attr("href") }),
    "" !== c &&
      $.each(c.split(","), function (b, c) {
        components.push({ value: c, data: a.attr("href") });
      });
}),
  $("#autocomplete").autocomplete({
    lookup: components,
    autoSelectFirst: !0,
    onSelect: function (a) {
      window.location = a.data;
    },
  }),
  $("input, textarea").placeholder(),
  $("#interchangeMarkup").on("replace", function () {
    $.getScript(
      "https://maps.googleapis.com/maps/api/js?key=#"
    );
  });
var currentUrl = window.location.href;
if (
  ((partial = currentUrl.split("docs")[1].split("/")),
  (page = partial[partial.length - 1]),
  (sidenav_links = $(".side-nav a")),
  sidenav_links.each(function () {
    var a = $(this);
    page == a.attr("href") && a.closest("li").addClass("active");
  }),
  $("[data-forum-posts]").length > 0)
) {
  var cb = function (a) {
    var b = "";
    $.each(a, function (a, c) {
      b += JST["doc/templates/forum_post.html"](c);
    }),
      $("[data-forum-posts]").each(function () {
        $(this).html(b);
      });
  };
  $.ajax({
    url: "http://foundation.zurb.com/forum/api/v1/posts.json",
    dataType: "jsonp",
    success: cb,
  });
}
