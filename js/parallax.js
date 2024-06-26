function mr_parallax() {
  function a(a) {
    for (var b = 0; b < a.length; b++)
      if ("undefined" != typeof document.body.style[a[b]]) return a[b];
    return null;
  }
  function b() {
    var a = 0;
    return (a = C
      ? jQuery(".viu").find("nav:first").outerHeight(!0)
      : jQuery(document).find("nav:first").outerHeight(!0));
  }
  function c(a, b, c, d) {
    var e = a - 1;
    return (
      (e /= d),
      (a /= d),
      e--,
      a--,
      c * (a * a * a * a * a + 1) + b - (c * (e * e * e * e * e + 1) + b)
    );
  }
  function d() {
    if (D) {
      for (var a = j.length, b = f(); a--; ) e(j[a], b);
      D = !1;
    }
    p &&
      ((v += -s * c(r, 0, y, A)),
      (v > z || -z > v) && (B.scrollBy(0, v), (v = 0)),
      r++,
      r > A &&
        ((r = 0), (p = !1), (q = !0), (s = 0), (t = 0), (u = 0), (v = 0))),
      k(d);
  }
  function e(a, b) {
    if (C) {
      if (b + n > a.elemTop && b < a.elemBottom)
        if (a.isFirstSection) {
          var c = "translate3d(0, " + b / 2 + "px, 0)";
          a.imageHolder.style[m] = c;
        } else {
          var c = "translate3d(0, " + (b - a.elemTop - o) / 2 + "px, 0)";
          a.imageHolder.style[m] = c;
        }
    } else if (b + n > a.elemTop && b < a.elemBottom)
      if (a.isFirstSection) {
        var c = "translate3d(0, " + b / 2 + "px, 0)";
        a.imageHolder.style[m] = c;
      } else {
        var c = "translate3d(0, " + (b + n - a.elemTop) / 2 + "px, 0)";
        a.imageHolder.style[m] = c;
      }
  }
  function f() {
    return B != window
      ? B.scrollTop
      : 0 == document.documentElement.scrollTop
      ? document.body.scrollTop
      : document.documentElement.scrollTop;
  }
  function g() {
    D = !0;
  }
  function h(a) {
    a.preventDefault && a.preventDefault(),
      (s = a.notRealWheel
        ? -a.deltaY / 4
        : 1 == a.deltaMode
        ? -a.deltaY / 3
        : 100 === Math.abs(a.deltaY)
        ? -a.deltaY / 120
        : -a.deltaY / 40),
      (s = -w > s ? -w : s),
      (s = s > w ? w : s),
      (p = !0),
      (r = x);
  }
  function i(a) {
    var b = {};
    return a && "[object Function]" === b.toString.call(a);
  }
  var j,
    k =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame,
    l = [
      "transform",
      "msTransform",
      "webkitTransform",
      "mozTransform",
      "oTransform",
    ],
    m = a(l),
    n = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    ),
    o = 0,
    p = !1,
    q = !0,
    r = 0,
    s = 0,
    t = 0,
    u = 0,
    v = 0,
    w = 2,
    x = 4,
    y = 300,
    z = 1,
    A = 30,
    v = 0,
    B = window,
    C = void 0 == window.mr_variant ? !1 : !0,
    D = !1,
    E = this;
  jQuery(document).ready(function () {
    E.documentReady();
  }),
    jQuery(window).load(function () {
      E.windowLoad();
    }),
    (this.getScrollingState = function () {
      return r > 0 ? !0 : !1;
    }),
    (this.documentReady = function (a) {
      "use strict";
      return (
        (n = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        )),
        /Android|iPad|iPhone|iPod|BlackBerry|Windows Phone/i.test(
          navigator.userAgent || navigator.vendor || window.opera
        )
          ? jQuery(".parallax").removeClass("parallax")
          : k && (E.profileParallaxElements(), E.setupParallax()),
        i(a) ? void a() : void 0
      );
    }),
    (this.windowLoad = function () {
      (n = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      )),
        (o = b()),
        window.mr_parallax.profileParallaxElements();
    }),
    (this.setupParallax = function () {
      (C = void 0 == window.mr_variant ? !1 : !0),
        C &&
          ((B = jQuery(".viu").get(0)),
          void 0 != B &&
            (B.scrollBy = function (a, b) {
              this.scrollTop += b;
            })),
        void 0 != B &&
          (B.addEventListener("scroll", g, !1),
          window.addWheelListener(B, h, !1),
          window.addEventListener(
            "resize",
            function () {
              (n = Math.max(
                document.documentElement.clientHeight,
                window.innerHeight || 0
              )),
                (o = b()),
                E.profileParallaxElements();
            },
            !1
          ),
          d());
    }),
    (this.profileParallaxElements = function () {
      (j = []),
        (o = b()),
        (selector =
          ".parallax > .background-image-holder, .parallax ul.slides > li > .background-image-holder"),
        C &&
          (selector =
            ".viu .parallax > .background-image-holder, .viu .parallax ul.slides > li > .background-image-holder"),
        jQuery(selector).each(function (a, b) {
          var c = jQuery(this).closest(".parallax"),
            d = C ? c.position().top : c.offset().top;
          j.push({
            section: c.get(0),
            outerHeight: c.outerHeight(),
            elemTop: d,
            elemBottom: d + c.outerHeight(),
            isFirstSection: c.is(":first-of-type") ? !0 : !1,
            imageHolder: jQuery(this).get(0),
          }),
            C
              ? C &&
                (c.is(":first-of-type")
                  ? E.mr_setTranslate3DTransform(
                      jQuery(this).get(0),
                      0 == f() ? 0 : f() / 2
                    )
                  : E.mr_setTranslate3DTransform(
                      jQuery(this).get(0),
                      (f() - d - o) / 2
                    ))
              : c.is(":first-of-type")
              ? E.mr_setTranslate3DTransform(
                  jQuery(this).get(0),
                  0 == f() ? 0 : f() / 2
                )
              : E.mr_setTranslate3DTransform(
                  jQuery(this).get(0),
                  (f() + n - d - o) / 2
                );
        });
    }),
    (this.mr_setTranslate3DTransform = function (a, b) {
      a.style[m] = "translate3d(0, " + b + "px, 0)";
    });
}
(window.mr_parallax = new mr_parallax()),
  (function (a, b) {
    function c(b, c, g, h) {
      b[d](
        f + c,
        "wheel" == e
          ? g
          : function (b) {
              !b && (b = a.event);
              var c = {
                originalEvent: b,
                target: b.target || b.srcElement,
                type: "wheel",
                deltaMode: "MozMousePixelScroll" == b.type ? 0 : 1,
                deltaX: 0,
                deltaZ: 0,
                notRealWheel: 1,
                preventDefault: function () {
                  b.preventDefault ? b.preventDefault() : (b.returnValue = !1);
                },
              };
              return (
                "mousewheel" == e
                  ? ((c.deltaY = (-1 / 40) * b.wheelDelta),
                    b.wheelDeltaX && (c.deltaX = (-1 / 40) * b.wheelDeltaX))
                  : (c.deltaY = b.detail / 3),
                g(c)
              );
            },
        h || !1
      );
    }
    var d,
      e,
      f = "";
    a.addEventListener
      ? (d = "addEventListener")
      : ((d = "attachEvent"), (f = "on")),
      (e =
        "onwheel" in b.createElement("div")
          ? "wheel"
          : void 0 !== b.onmousewheel
          ? "mousewheel"
          : "DOMMouseScroll"),
      (a.addWheelListener = function (a, b, d) {
        c(a, e, b, d),
          "DOMMouseScroll" == e && c(a, "MozMousePixelScroll", b, d);
      });
  })(window, document);
