if (function(a, b) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
      if (!a.document) throw new Error("jQuery requires a window with a document");
      return b(a)
    } : b(a)
  }("undefined" != typeof window ? window : this, function(a, b) {
    "use strict";

    function c(a, b) {
      b = b || ba;
      var c = b.createElement("script");
      c.text = a, b.head.appendChild(c).parentNode.removeChild(c)
    }

    function d(a) {
      var b = !!a && "length" in a && a.length,
        c = oa.type(a);
      return "function" === c || oa.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function e(a, b, c) {
      return oa.isFunction(b) ? oa.grep(a, function(a, d) {
        return !!b.call(a, d, a) !== c
      }) : b.nodeType ? oa.grep(a, function(a) {
        return a === b !== c
      }) : "string" != typeof b ? oa.grep(a, function(a) {
        return ga.call(b, a) > -1 !== c
      }) : ya.test(b) ? oa.filter(b, a, c) : (b = oa.filter(b, a), oa.grep(a, function(a) {
        return ga.call(b, a) > -1 !== c && 1 === a.nodeType
      }))
    }

    function f(a, b) {
      for (;
        (a = a[b]) && 1 !== a.nodeType;);
      return a
    }

    function g(a) {
      var b = {};
      return oa.each(a.match(Ea) || [], function(a, c) {
        b[c] = !0
      }), b
    }

    function h(a) {
      return a
    }

    function i(a) {
      throw a
    }

    function j(a, b, c) {
      var d;
      try {
        a && oa.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && oa.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a)
      } catch (a) {
        c.call(void 0, a)
      }
    }

    function k() {
      ba.removeEventListener("DOMContentLoaded", k), a.removeEventListener("load", k), oa.ready()
    }

    function l() {
      this.expando = oa.expando + l.uid++
    }

    function m(a) {
      return "true" === a ? !0 : "false" === a ? !1 : "null" === a ? null : a === +a + "" ? +a : La.test(a) ? JSON.parse(a) : a
    }

    function n(a, b, c) {
      var d;
      if (void 0 === c && 1 === a.nodeType)
        if (d = "data-" + b.replace(Ma, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
          try {
            c = m(c)
          } catch (e) {}
          Ka.set(a, b, c)
        } else c = void 0;
      return c
    }

    function o(a, b, c, d) {
      var e, f = 1,
        g = 20,
        h = d ? function() {
          return d.cur()
        } : function() {
          return oa.css(a, b, "")
        },
        i = h(),
        j = c && c[3] || (oa.cssNumber[b] ? "" : "px"),
        k = (oa.cssNumber[b] || "px" !== j && +i) && Oa.exec(oa.css(a, b));
      if (k && k[3] !== j) {
        j = j || k[3], c = c || [], k = +i || 1;
        do f = f || ".5", k /= f, oa.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
      }
      return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }

    function p(a) {
      var b, c = a.ownerDocument,
        d = a.nodeName,
        e = Sa[d];
      return e ? e : (b = c.body.appendChild(c.createElement(d)), e = oa.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), Sa[d] = e, e)
    }

    function q(a, b) {
      for (var c, d, e = [], f = 0, g = a.length; g > f; f++) d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = Ja.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && Qa(d) && (e[f] = p(d))) : "none" !== c && (e[f] = "none", Ja.set(d, "display", c)));
      for (f = 0; g > f; f++) null != e[f] && (a[f].style.display = e[f]);
      return a
    }

    function r(a, b) {
      var c;
      return c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [], void 0 === b || b && oa.nodeName(a, b) ? oa.merge([a], c) : c
    }

    function s(a, b) {
      for (var c = 0, d = a.length; d > c; c++) Ja.set(a[c], "globalEval", !b || Ja.get(b[c], "globalEval"))
    }

    function t(a, b, c, d, e) {
      for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; o > n; n++)
        if (f = a[n], f || 0 === f)
          if ("object" === oa.type(f)) oa.merge(m, f.nodeType ? [f] : f);
          else if (Xa.test(f)) {
        for (g = g || l.appendChild(b.createElement("div")), h = (Ua.exec(f) || ["", ""])[1].toLowerCase(), i = Wa[h] || Wa._default, g.innerHTML = i[1] + oa.htmlPrefilter(f) + i[2], k = i[0]; k--;) g = g.lastChild;
        oa.merge(m, g.childNodes), g = l.firstChild, g.textContent = ""
      } else m.push(b.createTextNode(f));
      for (l.textContent = "", n = 0; f = m[n++];)
        if (d && oa.inArray(f, d) > -1) e && e.push(f);
        else if (j = oa.contains(f.ownerDocument, f), g = r(l.appendChild(f), "script"), j && s(g), c)
        for (k = 0; f = g[k++];) Va.test(f.type || "") && c.push(f);
      return l
    }

    function u() {
      return !0
    }

    function v() {
      return !1
    }

    function w() {
      try {
        return ba.activeElement
      } catch (a) {}
    }

    function x(a, b, c, d, e, f) {
      var g, h;
      if ("object" == typeof b) {
        "string" != typeof c && (d = d || c, c = void 0);
        for (h in b) x(a, h, c, d, b[h], f);
        return a
      }
      if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = v;
      else if (!e) return a;
      return 1 === f && (g = e, e = function(a) {
        return oa().off(a), g.apply(this, arguments)
      }, e.guid = g.guid || (g.guid = oa.guid++)), a.each(function() {
        oa.event.add(this, b, e, d, c)
      })
    }

    function y(a, b) {
      return oa.nodeName(a, "table") && oa.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a
    }

    function z(a) {
      return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function A(a) {
      var b = db.exec(a.type);
      return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function B(a, b) {
      var c, d, e, f, g, h, i, j;
      if (1 === b.nodeType) {
        if (Ja.hasData(a) && (f = Ja.access(a), g = Ja.set(b, f), j = f.events)) {
          delete g.handle, g.events = {};
          for (e in j)
            for (c = 0, d = j[e].length; d > c; c++) oa.event.add(b, e, j[e][c])
        }
        Ka.hasData(a) && (h = Ka.access(a), i = oa.extend({}, h), Ka.set(b, i))
      }
    }

    function C(a, b) {
      var c = b.nodeName.toLowerCase();
      "input" === c && Ta.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    function D(a, b, d, e) {
      b = ea.apply([], b);
      var f, g, h, i, j, k, l = 0,
        m = a.length,
        n = m - 1,
        o = b[0],
        p = oa.isFunction(o);
      if (p || m > 1 && "string" == typeof o && !ma.checkClone && cb.test(o)) return a.each(function(c) {
        var f = a.eq(c);
        p && (b[0] = o.call(this, c, f.html())), D(f, b, d, e)
      });
      if (m && (f = t(b, a[0].ownerDocument, !1, a, e), g = f.firstChild, 1 === f.childNodes.length && (f = g), g || e)) {
        for (h = oa.map(r(f, "script"), z), i = h.length; m > l; l++) j = f, l !== n && (j = oa.clone(j, !0, !0), i && oa.merge(h, r(j, "script"))), d.call(a[l], j, l);
        if (i)
          for (k = h[h.length - 1].ownerDocument, oa.map(h, A), l = 0; i > l; l++) j = h[l], Va.test(j.type || "") && !Ja.access(j, "globalEval") && oa.contains(k, j) && (j.src ? oa._evalUrl && oa._evalUrl(j.src) : c(j.textContent.replace(eb, ""), k))
      }
      return a
    }

    function E(a, b, c) {
      for (var d, e = b ? oa.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || oa.cleanData(r(d)), d.parentNode && (c && oa.contains(d.ownerDocument, d) && s(r(d, "script")), d.parentNode.removeChild(d));
      return a
    }

    function F(a, b, c) {
      var d, e, f, g, h = a.style;
      return c = c || hb(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || oa.contains(a.ownerDocument, a) || (g = oa.style(a, b)), !ma.pixelMarginRight() && gb.test(g) && fb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function G(a, b) {
      return {
        get: function() {
          return a() ? void delete this.get : (this.get = b).apply(this, arguments)
        }
      }
    }

    function H(a) {
      if (a in mb) return a;
      for (var b = a[0].toUpperCase() + a.slice(1), c = lb.length; c--;)
        if (a = lb[c] + b, a in mb) return a
    }

    function I(a, b, c) {
      var d = Oa.exec(b);
      return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b
    }

    function J(a, b, c, d, e) {
      var f, g = 0;
      for (f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0; 4 > f; f += 2) "margin" === c && (g += oa.css(a, c + Pa[f], !0, e)), d ? ("content" === c && (g -= oa.css(a, "padding" + Pa[f], !0, e)), "margin" !== c && (g -= oa.css(a, "border" + Pa[f] + "Width", !0, e))) : (g += oa.css(a, "padding" + Pa[f], !0, e), "padding" !== c && (g += oa.css(a, "border" + Pa[f] + "Width", !0, e)));
      return g
    }

    function K(a, b, c) {
      var d, e = !0,
        f = hb(a),
        g = "border-box" === oa.css(a, "boxSizing", !1, f);
      if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), 0 >= d || null == d) {
        if (d = F(a, b, f), (0 > d || null == d) && (d = a.style[b]), gb.test(d)) return d;
        e = g && (ma.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0
      }
      return d + J(a, b, c || (g ? "border" : "content"), e, f) + "px"
    }

    function L(a, b, c, d, e) {
      return new L.prototype.init(a, b, c, d, e)
    }

    function M() {
      ob && (a.requestAnimationFrame(M), oa.fx.tick())
    }

    function N() {
      return a.setTimeout(function() {
        nb = void 0
      }), nb = oa.now()
    }

    function O(a, b) {
      var c, d = 0,
        e = {
          height: a
        };
      for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = Pa[d], e["margin" + c] = e["padding" + c] = a;
      return b && (e.opacity = e.width = a), e
    }

    function P(a, b, c) {
      for (var d, e = (S.tweeners[b] || []).concat(S.tweeners["*"]), f = 0, g = e.length; g > f; f++)
        if (d = e[f].call(c, b, a)) return d
    }

    function Q(a, b, c) {
      var d, e, f, g, h, i, j, k, l = "width" in b || "height" in b,
        m = this,
        n = {},
        o = a.style,
        p = a.nodeType && Qa(a),
        r = Ja.get(a, "fxshow");
      c.queue || (g = oa._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function() {
        g.unqueued || h()
      }), g.unqueued++, m.always(function() {
        m.always(function() {
          g.unqueued--, oa.queue(a, "fx").length || g.empty.fire()
        })
      }));
      for (d in b)
        if (e = b[d], pb.test(e)) {
          if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
            if ("show" !== e || !r || void 0 === r[d]) continue;
            p = !0
          }
          n[d] = r && r[d] || oa.style(a, d)
        }
      if (i = !oa.isEmptyObject(b), i || !oa.isEmptyObject(n)) {
        l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = r && r.display, null == j && (j = Ja.get(a, "display")), k = oa.css(a, "display"), "none" === k && (j ? k = j : (q([a], !0), j = a.style.display || j, k = oa.css(a, "display"), q([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === oa.css(a, "float") && (i || (m.done(function() {
          o.display = j
        }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function() {
          o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        })), i = !1;
        for (d in n) i || (r ? "hidden" in r && (p = r.hidden) : r = Ja.access(a, "fxshow", {
          display: j
        }), f && (r.hidden = !p), p && q([a], !0), m.done(function() {
          p || q([a]), Ja.remove(a, "fxshow");
          for (d in n) oa.style(a, d, n[d])
        })), i = P(p ? r[d] : 0, d, m), d in r || (r[d] = i.start, p && (i.end = i.start, i.start = 0))
      }
    }

    function R(a, b) {
      var c, d, e, f, g;
      for (c in a)
        if (d = oa.camelCase(c), e = b[d], f = a[c], oa.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = oa.cssHooks[d], g && "expand" in g) {
          f = g.expand(f), delete a[d];
          for (c in f) c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function S(a, b, c) {
      var d, e, f = 0,
        g = S.prefilters.length,
        h = oa.Deferred().always(function() {
          delete i.elem
        }),
        i = function() {
          if (e) return !1;
          for (var b = nb || N(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
          return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        },
        j = h.promise({
          elem: a,
          props: oa.extend({}, b),
          opts: oa.extend(!0, {
            specialEasing: {},
            easing: oa.easing._default
          }, c),
          originalProperties: b,
          originalOptions: c,
          startTime: nb || N(),
          duration: c.duration,
          tweens: [],
          createTween: function(b, c) {
            var d = oa.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
            return j.tweens.push(d), d
          },
          stop: function(b) {
            var c = 0,
              d = b ? j.tweens.length : 0;
            if (e) return this;
            for (e = !0; d > c; c++) j.tweens[c].run(1);
            return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
          }
        }),
        k = j.props;
      for (R(k, j.opts.specialEasing); g > f; f++)
        if (d = S.prefilters[f].call(j, a, k, j.opts)) return oa.isFunction(d.stop) && (oa._queueHooks(j.elem, j.opts.queue).stop = oa.proxy(d.stop, d)), d;
      return oa.map(k, P, j), oa.isFunction(j.opts.start) && j.opts.start.call(a, j), oa.fx.timer(oa.extend(i, {
        elem: a,
        anim: j,
        queue: j.opts.queue
      })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function T(a) {
      var b = a.match(Ea) || [];
      return b.join(" ")
    }

    function U(a) {
      return a.getAttribute && a.getAttribute("class") || ""
    }

    function V(a, b, c, d) {
      var e;
      if (oa.isArray(b)) oa.each(b, function(b, e) {
        c || Ab.test(a) ? d(a, e) : V(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
      });
      else if (c || "object" !== oa.type(b)) d(a, b);
      else
        for (e in b) V(a + "[" + e + "]", b[e], c, d)
    }

    function W(a) {
      return function(b, c) {
        "string" != typeof b && (c = b, b = "*");
        var d, e = 0,
          f = b.toLowerCase().match(Ea) || [];
        if (oa.isFunction(c))
          for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
      }
    }

    function X(a, b, c, d) {
      function e(h) {
        var i;
        return f[h] = !0, oa.each(a[h] || [], function(a, h) {
          var j = h(b, c, d);
          return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
        }), i
      }
      var f = {},
        g = a === Mb;
      return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function Y(a, b) {
      var c, d, e = oa.ajaxSettings.flatOptions || {};
      for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
      return d && oa.extend(!0, a, d), a
    }

    function Z(a, b, c) {
      for (var d, e, f, g, h = a.contents, i = a.dataTypes;
        "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
      if (d)
        for (e in h)
          if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
          }
      if (i[0] in c) f = i[0];
      else {
        for (e in c) {
          if (!i[0] || a.converters[e + " " + i[0]]) {
            f = e;
            break
          }
          g || (g = e)
        }
        f = f || g
      }
      return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function $(a, b, c, d) {
      var e, f, g, h, i, j = {},
        k = a.dataTypes.slice();
      if (k[1])
        for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
      for (f = k.shift(); f;)
        if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
          if ("*" === f) f = i;
          else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g)
          for (e in j)
            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
              g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
              break
            }
        if (g !== !0)
          if (g && a["throws"]) b = g(b);
          else try {
            b = g(b)
          } catch (l) {
            return {
              state: "parsererror",
              error: g ? l : "No conversion from " + i + " to " + f
            }
          }
      }
      return {
        state: "success",
        data: b
      }
    }

    function _(a) {
      return oa.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var aa = [],
      ba = a.document,
      ca = Object.getPrototypeOf,
      da = aa.slice,
      ea = aa.concat,
      fa = aa.push,
      ga = aa.indexOf,
      ha = {},
      ia = ha.toString,
      ja = ha.hasOwnProperty,
      ka = ja.toString,
      la = ka.call(Object),
      ma = {},
      na = "3.1.1",
      oa = function(a, b) {
        return new oa.fn.init(a, b)
      },
      pa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      qa = /^-ms-/,
      ra = /-([a-z])/g,
      sa = function(a, b) {
        return b.toUpperCase()
      };
    oa.fn = oa.prototype = {
      jquery: na,
      constructor: oa,
      length: 0,
      toArray: function() {
        return da.call(this)
      },
      get: function(a) {
        return null == a ? da.call(this) : 0 > a ? this[a + this.length] : this[a]
      },
      pushStack: function(a) {
        var b = oa.merge(this.constructor(), a);
        return b.prevObject = this, b
      },
      each: function(a) {
        return oa.each(this, a)
      },
      map: function(a) {
        return this.pushStack(oa.map(this, function(b, c) {
          return a.call(b, c, b)
        }))
      },
      slice: function() {
        return this.pushStack(da.apply(this, arguments))
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      eq: function(a) {
        var b = this.length,
          c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
      },
      end: function() {
        return this.prevObject || this.constructor()
      },
      push: fa,
      sort: aa.sort,
      splice: aa.splice
    }, oa.extend = oa.fn.extend = function() {
      var a, b, c, d, e, f, g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;
      for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || oa.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
        if (null != (a = arguments[h]))
          for (b in a) c = g[b], d = a[b], g !== d && (j && d && (oa.isPlainObject(d) || (e = oa.isArray(d))) ? (e ? (e = !1, f = c && oa.isArray(c) ? c : []) : f = c && oa.isPlainObject(c) ? c : {}, g[b] = oa.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      return g
    }, oa.extend({
      expando: "jQuery" + (na + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(a) {
        throw new Error(a)
      },
      noop: function() {},
      isFunction: function(a) {
        return "function" === oa.type(a)
      },
      isArray: Array.isArray,
      isWindow: function(a) {
        return null != a && a === a.window
      },
      isNumeric: function(a) {
        var b = oa.type(a);
        return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a))
      },
      isPlainObject: function(a) {
        var b, c;
        return a && "[object Object]" === ia.call(a) ? (b = ca(a)) ? (c = ja.call(b, "constructor") && b.constructor, "function" == typeof c && ka.call(c) === la) : !0 : !1
      },
      isEmptyObject: function(a) {
        var b;
        for (b in a) return !1;
        return !0
      },
      type: function(a) {
        return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? ha[ia.call(a)] || "object" : typeof a
      },
      globalEval: function(a) {
        c(a)
      },
      camelCase: function(a) {
        return a.replace(qa, "ms-").replace(ra, sa)
      },
      nodeName: function(a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
      },
      each: function(a, b) {
        var c, e = 0;
        if (d(a))
          for (c = a.length; c > e && b.call(a[e], e, a[e]) !== !1; e++);
        else
          for (e in a)
            if (b.call(a[e], e, a[e]) === !1) break; return a
      },
      trim: function(a) {
        return null == a ? "" : (a + "").replace(pa, "")
      },
      makeArray: function(a, b) {
        var c = b || [];
        return null != a && (d(Object(a)) ? oa.merge(c, "string" == typeof a ? [a] : a) : fa.call(c, a)), c
      },
      inArray: function(a, b, c) {
        return null == b ? -1 : ga.call(b, a, c)
      },
      merge: function(a, b) {
        for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
        return a.length = e, a
      },
      grep: function(a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
        return e
      },
      map: function(a, b, c) {
        var e, f, g = 0,
          h = [];
        if (d(a))
          for (e = a.length; e > g; g++) f = b(a[g], g, c), null != f && h.push(f);
        else
          for (g in a) f = b(a[g], g, c), null != f && h.push(f);
        return ea.apply([], h)
      },
      guid: 1,
      proxy: function(a, b) {
        var c, d, e;
        return "string" == typeof b && (c = a[b], b = a, a = c), oa.isFunction(a) ? (d = da.call(arguments, 2), e = function() {
          return a.apply(b || this, d.concat(da.call(arguments)))
        }, e.guid = a.guid = a.guid || oa.guid++, e) : void 0
      },
      now: Date.now,
      support: ma
    }), "function" == typeof Symbol && (oa.fn[Symbol.iterator] = aa[Symbol.iterator]), oa.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
      ha["[object " + b + "]"] = b.toLowerCase()
    });
    var ta = function(a) {
      function b(a, b, c, d) {
        var e, f, g, h, i, j, k, m = b && b.ownerDocument,
          o = b ? b.nodeType : 9;
        if (c = c || [], "string" != typeof a || !a || 1 !== o && 9 !== o && 11 !== o) return c;
        if (!d && ((b ? b.ownerDocument || b : P) !== H && G(b), b = b || H, J)) {
          if (11 !== o && (i = ra.exec(a)))
            if (e = i[1]) {
              if (9 === o) {
                if (!(g = b.getElementById(e))) return c;
                if (g.id === e) return c.push(g), c
              } else if (m && (g = m.getElementById(e)) && N(b, g) && g.id === e) return c.push(g), c
            } else {
              if (i[2]) return $.apply(c, b.getElementsByTagName(a)), c;
              if ((e = i[3]) && w.getElementsByClassName && b.getElementsByClassName) return $.apply(c, b.getElementsByClassName(e)), c
            }
          if (w.qsa && !U[a + " "] && (!K || !K.test(a))) {
            if (1 !== o) m = b, k = a;
            else if ("object" !== b.nodeName.toLowerCase()) {
              for ((h = b.getAttribute("id")) ? h = h.replace(va, wa) : b.setAttribute("id", h = O), j = A(a), f = j.length; f--;) j[f] = "#" + h + " " + n(j[f]);
              k = j.join(","), m = sa.test(a) && l(b.parentNode) || b
            }
            if (k) try {
              return $.apply(c, m.querySelectorAll(k)), c
            } catch (p) {} finally {
              h === O && b.removeAttribute("id")
            }
          }
        }
        return C(a.replace(ha, "$1"), b, c, d)
      }

      function c() {
        function a(c, d) {
          return b.push(c + " ") > x.cacheLength && delete a[b.shift()], a[c + " "] = d
        }
        var b = [];
        return a
      }

      function d(a) {
        return a[O] = !0, a
      }

      function e(a) {
        var b = H.createElement("fieldset");
        try {
          return !!a(b)
        } catch (c) {
          return !1
        } finally {
          b.parentNode && b.parentNode.removeChild(b), b = null
        }
      }

      function f(a, b) {
        for (var c = a.split("|"), d = c.length; d--;) x.attrHandle[c[d]] = b
      }

      function g(a, b) {
        var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;
        if (d) return d;
        if (c)
          for (; c = c.nextSibling;)
            if (c === b) return -1;
        return a ? 1 : -1
      }

      function h(a) {
        return function(b) {
          var c = b.nodeName.toLowerCase();
          return "input" === c && b.type === a
        }
      }

      function i(a) {
        return function(b) {
          var c = b.nodeName.toLowerCase();
          return ("input" === c || "button" === c) && b.type === a
        }
      }

      function j(a) {
        return function(b) {
          return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === a : b.disabled === a : b.isDisabled === a || b.isDisabled !== !a && ya(b) === a : b.disabled === a : "label" in b ? b.disabled === a : !1
        }
      }

      function k(a) {
        return d(function(b) {
          return b = +b, d(function(c, d) {
            for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
          })
        })
      }

      function l(a) {
        return a && "undefined" != typeof a.getElementsByTagName && a
      }

      function m() {}

      function n(a) {
        for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
        return d
      }

      function o(a, b, c) {
        var d = b.dir,
          e = b.next,
          f = e || d,
          g = c && "parentNode" === f,
          h = R++;
        return b.first ? function(b, c, e) {
          for (; b = b[d];)
            if (1 === b.nodeType || g) return a(b, c, e);
          return !1
        } : function(b, c, i) {
          var j, k, l, m = [Q, h];
          if (i) {
            for (; b = b[d];)
              if ((1 === b.nodeType || g) && a(b, c, i)) return !0
          } else
            for (; b = b[d];)
              if (1 === b.nodeType || g)
                if (l = b[O] || (b[O] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;
                else {
                  if ((j = k[f]) && j[0] === Q && j[1] === h) return m[2] = j[2];
                  if (k[f] = m, m[2] = a(b, c, i)) return !0
                } return !1
        }
      }

      function p(a) {
        return a.length > 1 ? function(b, c, d) {
          for (var e = a.length; e--;)
            if (!a[e](b, c, d)) return !1;
          return !0
        } : a[0]
      }

      function q(a, c, d) {
        for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
        return d
      }

      function r(a, b, c, d, e) {
        for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
        return g
      }

      function s(a, b, c, e, f, g) {
        return e && !e[O] && (e = s(e)), f && !f[O] && (f = s(f, g)), d(function(d, g, h, i) {
          var j, k, l, m = [],
            n = [],
            o = g.length,
            p = d || q(b || "*", h.nodeType ? [h] : h, []),
            s = !a || !d && b ? p : r(p, m, a, h, i),
            t = c ? f || (d ? a : o || e) ? [] : g : s;
          if (c && c(s, t, h, i), e)
            for (j = r(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
          if (d) {
            if (f || a) {
              if (f) {
                for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                f(null, t = [], j, i)
              }
              for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
            }
          } else t = r(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
        })
      }

      function t(a) {
        for (var b, c, d, e = a.length, f = x.relative[a[0].type], g = f || x.relative[" "], h = f ? 1 : 0, i = o(function(a) {
            return a === b
          }, g, !0), j = o(function(a) {
            return aa(b, a) > -1
          }, g, !0), k = [function(a, c, d) {
            var e = !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
            return b = null, e
          }]; e > h; h++)
          if (c = x.relative[a[h].type]) k = [o(p(k), c)];
          else {
            if (c = x.filter[a[h].type].apply(null, a[h].matches), c[O]) {
              for (d = ++h; e > d && !x.relative[a[d].type]; d++);
              return s(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                value: " " === a[h - 2].type ? "*" : ""
              })).replace(ha, "$1"), c, d > h && t(a.slice(h, d)), e > d && t(a = a.slice(d)), e > d && n(a))
            }
            k.push(c)
          }
        return p(k)
      }

      function u(a, c) {
        var e = c.length > 0,
          f = a.length > 0,
          g = function(d, g, h, i, j) {
            var k, l, m, n = 0,
              o = "0",
              p = d && [],
              q = [],
              s = D,
              t = d || f && x.find.TAG("*", j),
              u = Q += null == s ? 1 : Math.random() || .1,
              v = t.length;
            for (j && (D = g === H || g || j); o !== v && null != (k = t[o]); o++) {
              if (f && k) {
                for (l = 0, g || k.ownerDocument === H || (G(k), h = !J); m = a[l++];)
                  if (m(k, g || H, h)) {
                    i.push(k);
                    break
                  }
                j && (Q = u)
              }
              e && ((k = !m && k) && n--, d && p.push(k))
            }
            if (n += o, e && o !== n) {
              for (l = 0; m = c[l++];) m(p, q, g, h);
              if (d) {
                if (n > 0)
                  for (; o--;) p[o] || q[o] || (q[o] = Y.call(i));
                q = r(q)
              }
              $.apply(i, q), j && !d && q.length > 0 && n + c.length > 1 && b.uniqueSort(i)
            }
            return j && (Q = u, D = s), p
          };
        return e ? d(g) : g
      }
      var v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = "sizzle" + 1 * new Date,
        P = a.document,
        Q = 0,
        R = 0,
        S = c(),
        T = c(),
        U = c(),
        V = function(a, b) {
          return a === b && (F = !0), 0
        },
        W = {}.hasOwnProperty,
        X = [],
        Y = X.pop,
        Z = X.push,
        $ = X.push,
        _ = X.slice,
        aa = function(a, b) {
          for (var c = 0, d = a.length; d > c; c++)
            if (a[c] === b) return c;
          return -1
        },
        ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ca = "[\\x20\\t\\r\\n\\f]",
        da = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
        ea = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + da + "))|)" + ca + "*\\]",
        fa = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ea + ")*)|.*)\\)|)",
        ga = new RegExp(ca + "+", "g"),
        ha = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
        ia = new RegExp("^" + ca + "*," + ca + "*"),
        ja = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
        ka = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
        la = new RegExp(fa),
        ma = new RegExp("^" + da + "$"),
        na = {
          ID: new RegExp("^#(" + da + ")"),
          CLASS: new RegExp("^\\.(" + da + ")"),
          TAG: new RegExp("^(" + da + "|[*])"),
          ATTR: new RegExp("^" + ea),
          PSEUDO: new RegExp("^" + fa),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + ba + ")$", "i"),
          needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
        },
        oa = /^(?:input|select|textarea|button)$/i,
        pa = /^h\d$/i,
        qa = /^[^{]+\{\s*\[native \w/,
        ra = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        sa = /[+~]/,
        ta = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
        ua = function(a, b, c) {
          var d = "0x" + b - 65536;
          return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        },
        va = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        wa = function(a, b) {
          return b ? "\x00" === a ? "�" : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a
        },
        xa = function() {
          G()
        },
        ya = o(function(a) {
          return a.disabled === !0 && ("form" in a || "label" in a)
        }, {
          dir: "parentNode",
          next: "legend"
        });
      try {
        $.apply(X = _.call(P.childNodes), P.childNodes), X[P.childNodes.length].nodeType
      } catch (za) {
        $ = {
          apply: X.length ? function(a, b) {
            Z.apply(a, _.call(b))
          } : function(a, b) {
            for (var c = a.length, d = 0; a[c++] = b[d++];);
            a.length = c - 1
          }
        }
      }
      w = b.support = {}, z = b.isXML = function(a) {
        var b = a && (a.ownerDocument || a).documentElement;
        return b ? "HTML" !== b.nodeName : !1
      }, G = b.setDocument = function(a) {
        var b, c, d = a ? a.ownerDocument || a : P;
        return d !== H && 9 === d.nodeType && d.documentElement ? (H = d, I = H.documentElement, J = !z(H), P !== H && (c = H.defaultView) && c.top !== c && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), w.attributes = e(function(a) {
          return a.className = "i", !a.getAttribute("className")
        }), w.getElementsByTagName = e(function(a) {
          return a.appendChild(H.createComment("")), !a.getElementsByTagName("*").length
        }), w.getElementsByClassName = qa.test(H.getElementsByClassName), w.getById = e(function(a) {
          return I.appendChild(a).id = O, !H.getElementsByName || !H.getElementsByName(O).length
        }), w.getById ? (x.filter.ID = function(a) {
          var b = a.replace(ta, ua);
          return function(a) {
            return a.getAttribute("id") === b
          }
        }, x.find.ID = function(a, b) {
          if ("undefined" != typeof b.getElementById && J) {
            var c = b.getElementById(a);
            return c ? [c] : []
          }
        }) : (x.filter.ID = function(a) {
          var b = a.replace(ta, ua);
          return function(a) {
            var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
            return c && c.value === b
          }
        }, x.find.ID = function(a, b) {
          if ("undefined" != typeof b.getElementById && J) {
            var c, d, e, f = b.getElementById(a);
            if (f) {
              if (c = f.getAttributeNode("id"), c && c.value === a) return [f];
              for (e = b.getElementsByName(a), d = 0; f = e[d++];)
                if (c = f.getAttributeNode("id"), c && c.value === a) return [f]
            }
            return []
          }
        }), x.find.TAG = w.getElementsByTagName ? function(a, b) {
          return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : w.qsa ? b.querySelectorAll(a) : void 0
        } : function(a, b) {
          var c, d = [],
            e = 0,
            f = b.getElementsByTagName(a);
          if ("*" === a) {
            for (; c = f[e++];) 1 === c.nodeType && d.push(c);
            return d
          }
          return f
        }, x.find.CLASS = w.getElementsByClassName && function(a, b) {
          return "undefined" != typeof b.getElementsByClassName && J ? b.getElementsByClassName(a) : void 0
        }, L = [], K = [], (w.qsa = qa.test(H.querySelectorAll)) && (e(function(a) {
          I.appendChild(a).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && K.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || K.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + O + "-]").length || K.push("~="), a.querySelectorAll(":checked").length || K.push(":checked"), a.querySelectorAll("a#" + O + "+*").length || K.push(".#.+[+~]")
        }), e(function(a) {
          a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var b = H.createElement("input");
          b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && K.push("name" + ca + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && K.push(":enabled", ":disabled"), I.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && K.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), K.push(",.*:")
        })), (w.matchesSelector = qa.test(M = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && e(function(a) {
          w.disconnectedMatch = M.call(a, "*"), M.call(a, "[s!='']:x"), L.push("!=", fa)
        }), K = K.length && new RegExp(K.join("|")), L = L.length && new RegExp(L.join("|")), b = qa.test(I.compareDocumentPosition), N = b || qa.test(I.contains) ? function(a, b) {
          var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;
          return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
        } : function(a, b) {
          if (b)
            for (; b = b.parentNode;)
              if (b === a) return !0;
          return !1
        }, V = b ? function(a, b) {
          if (a === b) return F = !0, 0;
          var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
          return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !w.sortDetached && b.compareDocumentPosition(a) === c ? a === H || a.ownerDocument === P && N(P, a) ? -1 : b === H || b.ownerDocument === P && N(P, b) ? 1 : E ? aa(E, a) - aa(E, b) : 0 : 4 & c ? -1 : 1)
        } : function(a, b) {
          if (a === b) return F = !0, 0;
          var c, d = 0,
            e = a.parentNode,
            f = b.parentNode,
            h = [a],
            i = [b];
          if (!e || !f) return a === H ? -1 : b === H ? 1 : e ? -1 : f ? 1 : E ? aa(E, a) - aa(E, b) : 0;
          if (e === f) return g(a, b);
          for (c = a; c = c.parentNode;) h.unshift(c);
          for (c = b; c = c.parentNode;) i.unshift(c);
          for (; h[d] === i[d];) d++;
          return d ? g(h[d], i[d]) : h[d] === P ? -1 : i[d] === P ? 1 : 0
        }, H) : H
      }, b.matches = function(a, c) {
        return b(a, null, null, c)
      }, b.matchesSelector = function(a, c) {
        if ((a.ownerDocument || a) !== H && G(a), c = c.replace(ka, "='$1']"), w.matchesSelector && J && !U[c + " "] && (!L || !L.test(c)) && (!K || !K.test(c))) try {
          var d = M.call(a, c);
          if (d || w.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
        } catch (e) {}
        return b(c, H, null, [a]).length > 0
      }, b.contains = function(a, b) {
        return (a.ownerDocument || a) !== H && G(a), N(a, b)
      }, b.attr = function(a, b) {
        (a.ownerDocument || a) !== H && G(a);
        var c = x.attrHandle[b.toLowerCase()],
          d = c && W.call(x.attrHandle, b.toLowerCase()) ? c(a, b, !J) : void 0;
        return void 0 !== d ? d : w.attributes || !J ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
      }, b.escape = function(a) {
        return (a + "").replace(va, wa)
      }, b.error = function(a) {
        throw new Error("Syntax error, unrecognized expression: " + a)
      }, b.uniqueSort = function(a) {
        var b, c = [],
          d = 0,
          e = 0;
        if (F = !w.detectDuplicates, E = !w.sortStable && a.slice(0), a.sort(V), F) {
          for (; b = a[e++];) b === a[e] && (d = c.push(e));
          for (; d--;) a.splice(c[d], 1)
        }
        return E = null, a
      }, y = b.getText = function(a) {
        var b, c = "",
          d = 0,
          e = a.nodeType;
        if (e) {
          if (1 === e || 9 === e || 11 === e) {
            if ("string" == typeof a.textContent) return a.textContent;
            for (a = a.firstChild; a; a = a.nextSibling) c += y(a)
          } else if (3 === e || 4 === e) return a.nodeValue
        } else
          for (; b = a[d++];) c += y(b);
        return c
      }, x = b.selectors = {
        cacheLength: 50,
        createPseudo: d,
        match: na,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function(a) {
            return a[1] = a[1].replace(ta, ua), a[3] = (a[3] || a[4] || a[5] || "").replace(ta, ua), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
          },
          CHILD: function(a) {
            return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
          },
          PSEUDO: function(a) {
            var b, c = !a[6] && a[2];
            return na.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && la.test(c) && (b = A(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
          }
        },
        filter: {
          TAG: function(a) {
            var b = a.replace(ta, ua).toLowerCase();
            return "*" === a ? function() {
              return !0
            } : function(a) {
              return a.nodeName && a.nodeName.toLowerCase() === b
            }
          },
          CLASS: function(a) {
            var b = S[a + " "];
            return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && S(a, function(a) {
              return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
            })
          },
          ATTR: function(a, c, d) {
            return function(e) {
              var f = b.attr(e, a);
              return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ga, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
            }
          },
          CHILD: function(a, b, c, d, e) {
            var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;
            return 1 === d && 0 === e ? function(a) {
              return !!a.parentNode
            } : function(b, c, i) {
              var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;
              if (q) {
                if (f) {
                  for (; p;) {
                    for (m = b; m = m[p];)
                      if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                    o = p = "only" === a && !o && "nextSibling"
                  }
                  return !0
                }
                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                  for (m = q, l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === Q && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop();)
                    if (1 === m.nodeType && ++t && m === b) {
                      k[a] = [Q, n, t];
                      break
                    }
                } else if (s && (m = b, l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === Q && j[1], t = n), t === !1)
                  for (;
                    (m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[O] || (m[O] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [Q, t]), m !== b)););
                return t -= e, t === d || t % d === 0 && t / d >= 0
              }
            }
          },
          PSEUDO: function(a, c) {
            var e, f = x.pseudos[a] || x.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
            return f[O] ? f(c) : f.length > 1 ? (e = [a, a, "", c], x.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
              for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
            }) : function(a) {
              return f(a, 0, e)
            }) : f
          }
        },
        pseudos: {
          not: d(function(a) {
            var b = [],
              c = [],
              e = B(a.replace(ha, "$1"));
            return e[O] ? d(function(a, b, c, d) {
              for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
            }) : function(a, d, f) {
              return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
            }
          }),
          has: d(function(a) {
            return function(c) {
              return b(a, c).length > 0
            }
          }),
          contains: d(function(a) {
            return a = a.replace(ta, ua),
              function(b) {
                return (b.textContent || b.innerText || y(b)).indexOf(a) > -1
              }
          }),
          lang: d(function(a) {
            return ma.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(ta, ua).toLowerCase(),
              function(b) {
                var c;
                do
                  if (c = J ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                while ((b = b.parentNode) && 1 === b.nodeType);
                return !1
              }
          }),
          target: function(b) {
            var c = a.location && a.location.hash;
            return c && c.slice(1) === b.id
          },
          root: function(a) {
            return a === I
          },
          focus: function(a) {
            return a === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
          },
          enabled: j(!1),
          disabled: j(!0),
          checked: function(a) {
            var b = a.nodeName.toLowerCase();
            return "input" === b && !!a.checked || "option" === b && !!a.selected
          },
          selected: function(a) {
            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
          },
          empty: function(a) {
            for (a = a.firstChild; a; a = a.nextSibling)
              if (a.nodeType < 6) return !1;
            return !0
          },
          parent: function(a) {
            return !x.pseudos.empty(a)
          },
          header: function(a) {
            return pa.test(a.nodeName)
          },
          input: function(a) {
            return oa.test(a.nodeName)
          },
          button: function(a) {
            var b = a.nodeName.toLowerCase();
            return "input" === b && "button" === a.type || "button" === b
          },
          text: function(a) {
            var b;
            return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
          },
          first: k(function() {
            return [0]
          }),
          last: k(function(a, b) {
            return [b - 1]
          }),
          eq: k(function(a, b, c) {
            return [0 > c ? c + b : c]
          }),
          even: k(function(a, b) {
            for (var c = 0; b > c; c += 2) a.push(c);
            return a
          }),
          odd: k(function(a, b) {
            for (var c = 1; b > c; c += 2) a.push(c);
            return a
          }),
          lt: k(function(a, b, c) {
            for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
            return a
          }),
          gt: k(function(a, b, c) {
            for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
            return a
          })
        }
      }, x.pseudos.nth = x.pseudos.eq;
      for (v in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) x.pseudos[v] = h(v);
      for (v in {
          submit: !0,
          reset: !0
        }) x.pseudos[v] = i(v);
      return m.prototype = x.filters = x.pseudos, x.setFilters = new m, A = b.tokenize = function(a, c) {
        var d, e, f, g, h, i, j, k = T[a + " "];
        if (k) return c ? 0 : k.slice(0);
        for (h = a, i = [], j = x.preFilter; h;) {
          (!d || (e = ia.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ja.exec(h)) && (d = e.shift(), f.push({
            value: d,
            type: e[0].replace(ha, " ")
          }), h = h.slice(d.length));
          for (g in x.filter) !(e = na[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
            value: d,
            type: g,
            matches: e
          }), h = h.slice(d.length));
          if (!d) break
        }
        return c ? h.length : h ? b.error(a) : T(a, i).slice(0)
      }, B = b.compile = function(a, b) {
        var c, d = [],
          e = [],
          f = U[a + " "];
        if (!f) {
          for (b || (b = A(a)), c = b.length; c--;) f = t(b[c]), f[O] ? d.push(f) : e.push(f);
          f = U(a, u(e, d)), f.selector = a
        }
        return f
      }, C = b.select = function(a, b, c, d) {
        var e, f, g, h, i, j = "function" == typeof a && a,
          k = !d && A(a = j.selector || a);
        if (c = c || [], 1 === k.length) {
          if (f = k[0] = k[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && 9 === b.nodeType && J && x.relative[f[1].type]) {
            if (b = (x.find.ID(g.matches[0].replace(ta, ua), b) || [])[0], !b) return c;
            j && (b = b.parentNode), a = a.slice(f.shift().value.length)
          }
          for (e = na.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !x.relative[h = g.type]);)
            if ((i = x.find[h]) && (d = i(g.matches[0].replace(ta, ua), sa.test(f[0].type) && l(b.parentNode) || b))) {
              if (f.splice(e, 1), a = d.length && n(f), !a) return $.apply(c, d), c;
              break
            }
        }
        return (j || B(a, k))(d, b, !J, c, !b || sa.test(a) && l(b.parentNode) || b), c
      }, w.sortStable = O.split("").sort(V).join("") === O, w.detectDuplicates = !!F, G(), w.sortDetached = e(function(a) {
        return 1 & a.compareDocumentPosition(H.createElement("fieldset"))
      }), e(function(a) {
        return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
      }) || f("type|href|height|width", function(a, b, c) {
        return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
      }), w.attributes && e(function(a) {
        return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
      }) || f("value", function(a, b, c) {
        return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
      }), e(function(a) {
        return null == a.getAttribute("disabled")
      }) || f(ba, function(a, b, c) {
        var d;
        return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
      }), b
    }(a);
    oa.find = ta, oa.expr = ta.selectors, oa.expr[":"] = oa.expr.pseudos, oa.uniqueSort = oa.unique = ta.uniqueSort, oa.text = ta.getText, oa.isXMLDoc = ta.isXML, oa.contains = ta.contains, oa.escapeSelector = ta.escape;
    var ua = function(a, b, c) {
        for (var d = [], e = void 0 !== c;
          (a = a[b]) && 9 !== a.nodeType;)
          if (1 === a.nodeType) {
            if (e && oa(a).is(c)) break;
            d.push(a)
          }
        return d
      },
      va = function(a, b) {
        for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
        return c
      },
      wa = oa.expr.match.needsContext,
      xa = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      ya = /^.[^:#\[\.,]*$/;
    oa.filter = function(a, b, c) {
      var d = b[0];
      return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? oa.find.matchesSelector(d, a) ? [d] : [] : oa.find.matches(a, oa.grep(b, function(a) {
        return 1 === a.nodeType
      }))
    }, oa.fn.extend({
      find: function(a) {
        var b, c, d = this.length,
          e = this;
        if ("string" != typeof a) return this.pushStack(oa(a).filter(function() {
          for (b = 0; d > b; b++)
            if (oa.contains(e[b], this)) return !0
        }));
        for (c = this.pushStack([]), b = 0; d > b; b++) oa.find(a, e[b], c);
        return d > 1 ? oa.uniqueSort(c) : c
      },
      filter: function(a) {
        return this.pushStack(e(this, a || [], !1))
      },
      not: function(a) {
        return this.pushStack(e(this, a || [], !0))
      },
      is: function(a) {
        return !!e(this, "string" == typeof a && wa.test(a) ? oa(a) : a || [], !1).length
      }
    });
    var za, Aa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      Ba = oa.fn.init = function(a, b, c) {
        var d, e;
        if (!a) return this;
        if (c = c || za, "string" == typeof a) {
          if (d = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : Aa.exec(a), !d || !d[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
          if (d[1]) {
            if (b = b instanceof oa ? b[0] : b, oa.merge(this, oa.parseHTML(d[1], b && b.nodeType ? b.ownerDocument || b : ba, !0)), xa.test(d[1]) && oa.isPlainObject(b))
              for (d in b) oa.isFunction(this[d]) ? this[d](b[d]) : this.attr(d, b[d]);
            return this
          }
          return e = ba.getElementById(d[2]), e && (this[0] = e, this.length = 1), this
        }
        return a.nodeType ? (this[0] = a, this.length = 1, this) : oa.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(oa) : oa.makeArray(a, this)
      };
    Ba.prototype = oa.fn, za = oa(ba);
    var Ca = /^(?:parents|prev(?:Until|All))/,
      Da = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
    oa.fn.extend({
      has: function(a) {
        var b = oa(a, this),
          c = b.length;
        return this.filter(function() {
          for (var a = 0; c > a; a++)
            if (oa.contains(this, b[a])) return !0
        })
      },
      closest: function(a, b) {
        var c, d = 0,
          e = this.length,
          f = [],
          g = "string" != typeof a && oa(a);
        if (!wa.test(a))
          for (; e > d; d++)
            for (c = this[d]; c && c !== b; c = c.parentNode)
              if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && oa.find.matchesSelector(c, a))) {
                f.push(c);
                break
              }
        return this.pushStack(f.length > 1 ? oa.uniqueSort(f) : f)
      },
      index: function(a) {
        return a ? "string" == typeof a ? ga.call(oa(a), this[0]) : ga.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(a, b) {
        return this.pushStack(oa.uniqueSort(oa.merge(this.get(), oa(a, b))))
      },
      addBack: function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
      }
    }), oa.each({
      parent: function(a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null
      },
      parents: function(a) {
        return ua(a, "parentNode")
      },
      parentsUntil: function(a, b, c) {
        return ua(a, "parentNode", c)
      },
      next: function(a) {
        return f(a, "nextSibling")
      },
      prev: function(a) {
        return f(a, "previousSibling")
      },
      nextAll: function(a) {
        return ua(a, "nextSibling")
      },
      prevAll: function(a) {
        return ua(a, "previousSibling")
      },
      nextUntil: function(a, b, c) {
        return ua(a, "nextSibling", c)
      },
      prevUntil: function(a, b, c) {
        return ua(a, "previousSibling", c)
      },
      siblings: function(a) {
        return va((a.parentNode || {}).firstChild, a)
      },
      children: function(a) {
        return va(a.firstChild)
      },
      contents: function(a) {
        return a.contentDocument || oa.merge([], a.childNodes)
      }
    }, function(a, b) {
      oa.fn[a] = function(c, d) {
        var e = oa.map(this, b, c);
        return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = oa.filter(d, e)), this.length > 1 && (Da[a] || oa.uniqueSort(e), Ca.test(a) && e.reverse()), this.pushStack(e)
      }
    });
    var Ea = /[^\x20\t\r\n\f]+/g;
    oa.Callbacks = function(a) {
      a = "string" == typeof a ? g(a) : oa.extend({}, a);
      var b, c, d, e, f = [],
        h = [],
        i = -1,
        j = function() {
          for (e = a.once, d = b = !0; h.length; i = -1)
            for (c = h.shift(); ++i < f.length;) f[i].apply(c[0], c[1]) === !1 && a.stopOnFalse && (i = f.length, c = !1);
          a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
        },
        k = {
          add: function() {
            return f && (c && !b && (i = f.length - 1, h.push(c)), function d(b) {
              oa.each(b, function(b, c) {
                oa.isFunction(c) ? a.unique && k.has(c) || f.push(c) : c && c.length && "string" !== oa.type(c) && d(c)
              })
            }(arguments), c && !b && j()), this
          },
          remove: function() {
            return oa.each(arguments, function(a, b) {
              for (var c;
                (c = oa.inArray(b, f, c)) > -1;) f.splice(c, 1), i >= c && i--
            }), this
          },
          has: function(a) {
            return a ? oa.inArray(a, f) > -1 : f.length > 0
          },
          empty: function() {
            return f && (f = []), this
          },
          disable: function() {
            return e = h = [], f = c = "", this
          },
          disabled: function() {
            return !f
          },
          lock: function() {
            return e = h = [], c || b || (f = c = ""), this
          },
          locked: function() {
            return !!e
          },
          fireWith: function(a, c) {
            return e || (c = c || [], c = [a, c.slice ? c.slice() : c], h.push(c), b || j()), this
          },
          fire: function() {
            return k.fireWith(this, arguments), this
          },
          fired: function() {
            return !!d
          }
        };
      return k
    }, oa.extend({
      Deferred: function(b) {
        var c = [
            ["notify", "progress", oa.Callbacks("memory"), oa.Callbacks("memory"), 2],
            ["resolve", "done", oa.Callbacks("once memory"), oa.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", oa.Callbacks("once memory"), oa.Callbacks("once memory"), 1, "rejected"]
          ],
          d = "pending",
          e = {
            state: function() {
              return d
            },
            always: function() {
              return f.done(arguments).fail(arguments), this
            },
            "catch": function(a) {
              return e.then(null, a)
            },
            pipe: function() {
              var a = arguments;
              return oa.Deferred(function(b) {
                oa.each(c, function(c, d) {
                  var e = oa.isFunction(a[d[4]]) && a[d[4]];
                  f[d[1]](function() {
                    var a = e && e.apply(this, arguments);
                    a && oa.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments)
                  })
                }), a = null
              }).promise()
            },
            then: function(b, d, e) {
              function f(b, c, d, e) {
                return function() {
                  var j = this,
                    k = arguments,
                    l = function() {
                      var a, l;
                      if (!(g > b)) {
                        if (a = d.apply(j, k), a === c.promise()) throw new TypeError("Thenable self-resolution");
                        l = a && ("object" == typeof a || "function" == typeof a) && a.then, oa.isFunction(l) ? e ? l.call(a, f(g, c, h, e), f(g, c, i, e)) : (g++, l.call(a, f(g, c, h, e), f(g, c, i, e), f(g, c, h, c.notifyWith))) : (d !== h && (j = void 0, k = [a]), (e || c.resolveWith)(j, k))
                      }
                    },
                    m = e ? l : function() {
                      try {
                        l()
                      } catch (a) {
                        oa.Deferred.exceptionHook && oa.Deferred.exceptionHook(a, m.stackTrace), b + 1 >= g && (d !== i && (j = void 0, k = [a]), c.rejectWith(j, k))
                      }
                    };
                  b ? m() : (oa.Deferred.getStackHook && (m.stackTrace = oa.Deferred.getStackHook()), a.setTimeout(m))
                }
              }
              var g = 0;
              return oa.Deferred(function(a) {
                c[0][3].add(f(0, a, oa.isFunction(e) ? e : h, a.notifyWith)), c[1][3].add(f(0, a, oa.isFunction(b) ? b : h)), c[2][3].add(f(0, a, oa.isFunction(d) ? d : i))
              }).promise()
            },
            promise: function(a) {
              return null != a ? oa.extend(a, e) : e
            }
          },
          f = {};
        return oa.each(c, function(a, b) {
          var g = b[2],
            h = b[5];
          e[b[1]] = g.add, h && g.add(function() {
            d = h
          }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function() {
            return f[b[0] + "With"](this === f ? void 0 : this, arguments), this
          }, f[b[0] + "With"] = g.fireWith
        }), e.promise(f), b && b.call(f, f), f
      },
      when: function(a) {
        var b = arguments.length,
          c = b,
          d = Array(c),
          e = da.call(arguments),
          f = oa.Deferred(),
          g = function(a) {
            return function(c) {
              d[a] = this, e[a] = arguments.length > 1 ? da.call(arguments) : c, --b || f.resolveWith(d, e)
            }
          };
        if (1 >= b && (j(a, f.done(g(c)).resolve, f.reject), "pending" === f.state() || oa.isFunction(e[c] && e[c].then))) return f.then();
        for (; c--;) j(e[c], g(c), f.reject);
        return f.promise()
      }
    });
    var Fa = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    oa.Deferred.exceptionHook = function(b, c) {
      a.console && a.console.warn && b && Fa.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c)
    }, oa.readyException = function(b) {
      a.setTimeout(function() {
        throw b
      })
    };
    var Ga = oa.Deferred();
    oa.fn.ready = function(a) {
      return Ga.then(a)["catch"](function(a) {
        oa.readyException(a)
      }), this
    }, oa.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(a) {
        a ? oa.readyWait++ : oa.ready(!0)
      },
      ready: function(a) {
        (a === !0 ? --oa.readyWait : oa.isReady) || (oa.isReady = !0, a !== !0 && --oa.readyWait > 0 || Ga.resolveWith(ba, [oa]))
      }
    }), oa.ready.then = Ga.then, "complete" === ba.readyState || "loading" !== ba.readyState && !ba.documentElement.doScroll ? a.setTimeout(oa.ready) : (ba.addEventListener("DOMContentLoaded", k), a.addEventListener("load", k));
    var Ha = function(a, b, c, d, e, f, g) {
        var h = 0,
          i = a.length,
          j = null == c;
        if ("object" === oa.type(c)) {
          e = !0;
          for (h in c) Ha(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, oa.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
            return j.call(oa(a), c)
          })), b))
          for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
      },
      Ia = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
      };
    l.uid = 1, l.prototype = {
      cache: function(a) {
        var b = a[this.expando];
        return b || (b = {}, Ia(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
          value: b,
          configurable: !0
        }))), b
      },
      set: function(a, b, c) {
        var d, e = this.cache(a);
        if ("string" == typeof b) e[oa.camelCase(b)] = c;
        else
          for (d in b) e[oa.camelCase(d)] = b[d];
        return e
      },
      get: function(a, b) {
        return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][oa.camelCase(b)]
      },
      access: function(a, b, c) {
        return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b)
      },
      remove: function(a, b) {
        var c, d = a[this.expando];
        if (void 0 !== d) {
          if (void 0 !== b) {
            oa.isArray(b) ? b = b.map(oa.camelCase) : (b = oa.camelCase(b), b = b in d ? [b] : b.match(Ea) || []), c = b.length;
            for (; c--;) delete d[b[c]]
          }(void 0 === b || oa.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando])
        }
      },
      hasData: function(a) {
        var b = a[this.expando];
        return void 0 !== b && !oa.isEmptyObject(b)
      }
    };
    var Ja = new l,
      Ka = new l,
      La = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Ma = /[A-Z]/g;
    oa.extend({
      hasData: function(a) {
        return Ka.hasData(a) || Ja.hasData(a)
      },
      data: function(a, b, c) {
        return Ka.access(a, b, c)
      },
      removeData: function(a, b) {
        Ka.remove(a, b)
      },
      _data: function(a, b, c) {
        return Ja.access(a, b, c)
      },
      _removeData: function(a, b) {
        Ja.remove(a, b)
      }
    }), oa.fn.extend({
      data: function(a, b) {
        var c, d, e, f = this[0],
          g = f && f.attributes;
        if (void 0 === a) {
          if (this.length && (e = Ka.get(f), 1 === f.nodeType && !Ja.get(f, "hasDataAttrs"))) {
            for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = oa.camelCase(d.slice(5)), n(f, d, e[d])));
            Ja.set(f, "hasDataAttrs", !0)
          }
          return e
        }
        return "object" == typeof a ? this.each(function() {
          Ka.set(this, a)
        }) : Ha(this, function(b) {
          var c;
          if (f && void 0 === b) {
            if (c = Ka.get(f, a), void 0 !== c) return c;
            if (c = n(f, a), void 0 !== c) return c
          } else this.each(function() {
            Ka.set(this, a, b)
          })
        }, null, b, arguments.length > 1, null, !0)
      },
      removeData: function(a) {
        return this.each(function() {
          Ka.remove(this, a)
        })
      }
    }), oa.extend({
      queue: function(a, b, c) {
        var d;
        return a ? (b = (b || "fx") + "queue", d = Ja.get(a, b), c && (!d || oa.isArray(c) ? d = Ja.access(a, b, oa.makeArray(c)) : d.push(c)), d || []) : void 0
      },
      dequeue: function(a, b) {
        b = b || "fx";
        var c = oa.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = oa._queueHooks(a, b),
          g = function() {
            oa.dequeue(a, b)
          };
        "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
      },
      _queueHooks: function(a, b) {
        var c = b + "queueHooks";
        return Ja.get(a, c) || Ja.access(a, c, {
          empty: oa.Callbacks("once memory").add(function() {
            Ja.remove(a, [b + "queue", c])
          })
        })
      }
    }), oa.fn.extend({
      queue: function(a, b) {
        var c = 2;
        return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? oa.queue(this[0], a) : void 0 === b ? this : this.each(function() {
          var c = oa.queue(this, a, b);
          oa._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && oa.dequeue(this, a)
        })
      },
      dequeue: function(a) {
        return this.each(function() {
          oa.dequeue(this, a)
        })
      },
      clearQueue: function(a) {
        return this.queue(a || "fx", [])
      },
      promise: function(a, b) {
        var c, d = 1,
          e = oa.Deferred(),
          f = this,
          g = this.length,
          h = function() {
            --d || e.resolveWith(f, [f])
          };
        for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = Ja.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b)
      }
    });
    var Na = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Oa = new RegExp("^(?:([+-])=|)(" + Na + ")([a-z%]*)$", "i"),
      Pa = ["Top", "Right", "Bottom", "Left"],
      Qa = function(a, b) {
        return a = b || a, "none" === a.style.display || "" === a.style.display && oa.contains(a.ownerDocument, a) && "none" === oa.css(a, "display")
      },
      Ra = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
      },
      Sa = {};
    oa.fn.extend({
      show: function() {
        return q(this, !0)
      },
      hide: function() {
        return q(this)
      },
      toggle: function(a) {
        return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
          Qa(this) ? oa(this).show() : oa(this).hide()
        })
      }
    });
    var Ta = /^(?:checkbox|radio)$/i,
      Ua = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      Va = /^$|\/(?:java|ecma)script/i,
      Wa = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
    Wa.optgroup = Wa.option, Wa.tbody = Wa.tfoot = Wa.colgroup = Wa.caption = Wa.thead, Wa.th = Wa.td;
    var Xa = /<|&#?\w+;/;
    ! function() {
      var a = ba.createDocumentFragment(),
        b = a.appendChild(ba.createElement("div")),
        c = ba.createElement("input");
      c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), ma.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", ma.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var Ya = ba.documentElement,
      Za = /^key/,
      $a = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      _a = /^([^.]*)(?:\.(.+)|)/;
    oa.event = {
      global: {},
      add: function(a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, n, o, p, q = Ja.get(a);
        if (q)
          for (c.handler && (f = c, c = f.handler, e = f.selector), e && oa.find.matchesSelector(Ya, e), c.guid || (c.guid = oa.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
              return "undefined" != typeof oa && oa.event.triggered !== b.type ? oa.event.dispatch.apply(a, arguments) : void 0
            }), b = (b || "").match(Ea) || [""], j = b.length; j--;) h = _a.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = oa.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = oa.event.special[n] || {}, k = oa.extend({
            type: n,
            origType: p,
            data: d,
            handler: c,
            guid: c.guid,
            selector: e,
            needsContext: e && oa.expr.match.needsContext.test(e),
            namespace: o.join(".")
          }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), oa.event.global[n] = !0)
      },
      remove: function(a, b, c, d, e) {
        var f, g, h, i, j, k, l, m, n, o, p, q = Ja.hasData(a) && Ja.get(a);
        if (q && (i = q.events)) {
          for (b = (b || "").match(Ea) || [""], j = b.length; j--;)
            if (h = _a.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
              for (l = oa.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
              g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || oa.removeEvent(a, n, q.handle), delete i[n])
            } else
              for (n in i) oa.event.remove(a, n + b[j], c, d, !0);
          oa.isEmptyObject(i) && Ja.remove(a, "handle events")
        }
      },
      dispatch: function(a) {
        var b, c, d, e, f, g, h = oa.event.fix(a),
          i = new Array(arguments.length),
          j = (Ja.get(this, "events") || {})[h.type] || [],
          k = oa.event.special[h.type] || {};
        for (i[0] = h, b = 1; b < arguments.length; b++) i[b] = arguments[b];
        if (h.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, h) !== !1) {
          for (g = oa.event.handlers.call(this, h, j), b = 0;
            (e = g[b++]) && !h.isPropagationStopped();)
            for (h.currentTarget = e.elem, c = 0;
              (f = e.handlers[c++]) && !h.isImmediatePropagationStopped();)(!h.rnamespace || h.rnamespace.test(f.namespace)) && (h.handleObj = f, h.data = f.data, d = ((oa.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, i), void 0 !== d && (h.result = d) === !1 && (h.preventDefault(), h.stopPropagation()));
          return k.postDispatch && k.postDispatch.call(this, h), h.result
        }
      },
      handlers: function(a, b) {
        var c, d, e, f, g, h = [],
          i = b.delegateCount,
          j = a.target;
        if (i && j.nodeType && !("click" === a.type && a.button >= 1))
          for (; j !== this; j = j.parentNode || this)
            if (1 === j.nodeType && ("click" !== a.type || j.disabled !== !0)) {
              for (f = [], g = {}, c = 0; i > c; c++) d = b[c], e = d.selector + " ", void 0 === g[e] && (g[e] = d.needsContext ? oa(e, this).index(j) > -1 : oa.find(e, this, null, [j]).length), g[e] && f.push(d);
              f.length && h.push({
                elem: j,
                handlers: f
              })
            }
        return j = this, i < b.length && h.push({
          elem: j,
          handlers: b.slice(i)
        }), h
      },
      addProp: function(a, b) {
        Object.defineProperty(oa.Event.prototype, a, {
          enumerable: !0,
          configurable: !0,
          get: oa.isFunction(b) ? function() {
            return this.originalEvent ? b(this.originalEvent) : void 0
          } : function() {
            return this.originalEvent ? this.originalEvent[a] : void 0
          },
          set: function(b) {
            Object.defineProperty(this, a, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: b
            })
          }
        })
      },
      fix: function(a) {
        return a[oa.expando] ? a : new oa.Event(a)
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function() {
            return this !== w() && this.focus ? (this.focus(), !1) : void 0
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            return this === w() && this.blur ? (this.blur(), !1) : void 0
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function() {
            return "checkbox" === this.type && this.click && oa.nodeName(this, "input") ? (this.click(), !1) : void 0
          },
          _default: function(a) {
            return oa.nodeName(a.target, "a")
          }
        },
        beforeunload: {
          postDispatch: function(a) {
            void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
          }
        }
      }
    }, oa.removeEvent = function(a, b, c) {
      a.removeEventListener && a.removeEventListener(b, c)
    }, oa.Event = function(a, b) {
      return this instanceof oa.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? u : v, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && oa.extend(this, b), this.timeStamp = a && a.timeStamp || oa.now(), void(this[oa.expando] = !0)) : new oa.Event(a, b)
    }, oa.Event.prototype = {
      constructor: oa.Event,
      isDefaultPrevented: v,
      isPropagationStopped: v,
      isImmediatePropagationStopped: v,
      isSimulated: !1,
      preventDefault: function() {
        var a = this.originalEvent;
        this.isDefaultPrevented = u, a && !this.isSimulated && a.preventDefault()
      },
      stopPropagation: function() {
        var a = this.originalEvent;
        this.isPropagationStopped = u, a && !this.isSimulated && a.stopPropagation()
      },
      stopImmediatePropagation: function() {
        var a = this.originalEvent;
        this.isImmediatePropagationStopped = u, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation()
      }
    }, oa.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      "char": !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function(a) {
        var b = a.button;
        return null == a.which && Za.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && $a.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which
      }
    }, oa.event.addProp), oa.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(a, b) {
      oa.event.special[a] = {
        delegateType: b,
        bindType: b,
        handle: function(a) {
          var c, d = this,
            e = a.relatedTarget,
            f = a.handleObj;
          return (!e || e !== d && !oa.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
        }
      }
    }), oa.fn.extend({
      on: function(a, b, c, d) {
        return x(this, a, b, c, d)
      },
      one: function(a, b, c, d) {
        return x(this, a, b, c, d, 1)
      },
      off: function(a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj) return d = a.handleObj, oa(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
        if ("object" == typeof a) {
          for (e in a) this.off(e, b, a[e]);
          return this
        }
        return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = v), this.each(function() {
          oa.event.remove(this, a, c, b)
        })
      }
    });
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      bb = /<script|<style|<link/i,
      cb = /checked\s*(?:[^=]|=\s*.checked.)/i,
      db = /^true\/(.*)/,
      eb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    oa.extend({
      htmlPrefilter: function(a) {
        return a.replace(ab, "<$1></$2>")
      },
      clone: function(a, b, c) {
        var d, e, f, g, h = a.cloneNode(!0),
          i = oa.contains(a.ownerDocument, a);
        if (!(ma.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || oa.isXMLDoc(a)))
          for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) C(f[d], g[d]);
        if (b)
          if (c)
            for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) B(f[d], g[d]);
          else B(a, h);
        return g = r(h, "script"), g.length > 0 && s(g, !i && r(a, "script")), h
      },
      cleanData: function(a) {
        for (var b, c, d, e = oa.event.special, f = 0; void 0 !== (c = a[f]); f++)
          if (Ia(c)) {
            if (b = c[Ja.expando]) {
              if (b.events)
                for (d in b.events) e[d] ? oa.event.remove(c, d) : oa.removeEvent(c, d, b.handle);
              c[Ja.expando] = void 0
            }
            c[Ka.expando] && (c[Ka.expando] = void 0)
          }
      }
    }), oa.fn.extend({
      detach: function(a) {
        return E(this, a, !0)
      },
      remove: function(a) {
        return E(this, a)
      },
      text: function(a) {
        return Ha(this, function(a) {
          return void 0 === a ? oa.text(this) : this.empty().each(function() {
            (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
          })
        }, null, a, arguments.length)
      },
      append: function() {
        return D(this, arguments, function(a) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var b = y(this, a);
            b.appendChild(a)
          }
        })
      },
      prepend: function() {
        return D(this, arguments, function(a) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var b = y(this, a);
            b.insertBefore(a, b.firstChild)
          }
        })
      },
      before: function() {
        return D(this, arguments, function(a) {
          this.parentNode && this.parentNode.insertBefore(a, this)
        })
      },
      after: function() {
        return D(this, arguments, function(a) {
          this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
        })
      },
      empty: function() {
        for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (oa.cleanData(r(a, !1)), a.textContent = "");
        return this
      },
      clone: function(a, b) {
        return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
          return oa.clone(this, a, b)
        })
      },
      html: function(a) {
        return Ha(this, function(a) {
          var b = this[0] || {},
            c = 0,
            d = this.length;
          if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
          if ("string" == typeof a && !bb.test(a) && !Wa[(Ua.exec(a) || ["", ""])[1].toLowerCase()]) {
            a = oa.htmlPrefilter(a);
            try {
              for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (oa.cleanData(r(b, !1)), b.innerHTML = a);
              b = 0
            } catch (e) {}
          }
          b && this.empty().append(a)
        }, null, a, arguments.length)
      },
      replaceWith: function() {
        var a = [];
        return D(this, arguments, function(b) {
          var c = this.parentNode;
          oa.inArray(this, a) < 0 && (oa.cleanData(r(this)), c && c.replaceChild(b, this))
        }, a)
      }
    }), oa.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(a, b) {
      oa.fn[a] = function(a) {
        for (var c, d = [], e = oa(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), oa(e[g])[b](c), fa.apply(d, c.get());
        return this.pushStack(d)
      }
    });
    var fb = /^margin/,
      gb = new RegExp("^(" + Na + ")(?!px)[a-z%]+$", "i"),
      hb = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b)
      };
    ! function() {
      function b() {
        if (h) {
          h.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ya.appendChild(g);
          var b = a.getComputedStyle(h);
          c = "1%" !== b.top, f = "2px" === b.marginLeft, d = "4px" === b.width, h.style.marginRight = "50%", e = "4px" === b.marginRight, Ya.removeChild(g), h = null
        }
      }
      var c, d, e, f, g = ba.createElement("div"),
        h = ba.createElement("div");
      h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", ma.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h), oa.extend(ma, {
        pixelPosition: function() {
          return b(), c
        },
        boxSizingReliable: function() {
          return b(), d
        },
        pixelMarginRight: function() {
          return b(), e
        },
        reliableMarginLeft: function() {
          return b(), f
        }
      }))
    }();
    var ib = /^(none|table(?!-c[ea]).+)/,
      jb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      kb = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      lb = ["Webkit", "Moz", "ms"],
      mb = ba.createElement("div").style;
    oa.extend({
      cssHooks: {
        opacity: {
          get: function(a, b) {
            if (b) {
              var c = F(a, "opacity");
              return "" === c ? "1" : c
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {
        "float": "cssFloat"
      },
      style: function(a, b, c, d) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
          var e, f, g, h = oa.camelCase(b),
            i = a.style;
          return b = oa.cssProps[h] || (oa.cssProps[h] = H(h) || h), g = oa.cssHooks[b] || oa.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Oa.exec(c)) && e[1] && (c = o(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (oa.cssNumber[h] ? "" : "px")), ma.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
        }
      },
      css: function(a, b, c, d) {
        var e, f, g, h = oa.camelCase(b);
        return b = oa.cssProps[h] || (oa.cssProps[h] = H(h) || h), g = oa.cssHooks[b] || oa.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = F(a, b, d)), "normal" === e && b in kb && (e = kb[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e
      }
    }), oa.each(["height", "width"], function(a, b) {
      oa.cssHooks[b] = {
        get: function(a, c, d) {
          return c ? !ib.test(oa.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? K(a, b, d) : Ra(a, jb, function() {
            return K(a, b, d)
          }) : void 0
        },
        set: function(a, c, d) {
          var e, f = d && hb(a),
            g = d && J(a, b, d, "border-box" === oa.css(a, "boxSizing", !1, f), f);
          return g && (e = Oa.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = oa.css(a, b)), I(a, c, g)
        }
      }
    }), oa.cssHooks.marginLeft = G(ma.reliableMarginLeft, function(a, b) {
      return b ? (parseFloat(F(a, "marginLeft")) || a.getBoundingClientRect().left - Ra(a, {
        marginLeft: 0
      }, function() {
        return a.getBoundingClientRect().left
      })) + "px" : void 0
    }), oa.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(a, b) {
      oa.cssHooks[a + b] = {
        expand: function(c) {
          for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Pa[d] + b] = f[d] || f[d - 2] || f[0];
          return e
        }
      }, fb.test(a) || (oa.cssHooks[a + b].set = I)
    }), oa.fn.extend({
      css: function(a, b) {
        return Ha(this, function(a, b, c) {
          var d, e, f = {},
            g = 0;
          if (oa.isArray(b)) {
            for (d = hb(a), e = b.length; e > g; g++) f[b[g]] = oa.css(a, b[g], !1, d);
            return f
          }
          return void 0 !== c ? oa.style(a, b, c) : oa.css(a, b)
        }, a, b, arguments.length > 1)
      }
    }), oa.Tween = L, L.prototype = {
      constructor: L,
      init: function(a, b, c, d, e, f) {
        this.elem = a, this.prop = c, this.easing = e || oa.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (oa.cssNumber[c] ? "" : "px")
      },
      cur: function() {
        var a = L.propHooks[this.prop];
        return a && a.get ? a.get(this) : L.propHooks._default.get(this)
      },
      run: function(a) {
        var b, c = L.propHooks[this.prop];
        return this.options.duration ? this.pos = b = oa.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : L.propHooks._default.set(this), this
      }
    }, L.prototype.init.prototype = L.prototype, L.propHooks = {
      _default: {
        get: function(a) {
          var b;
          return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = oa.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
        },
        set: function(a) {
          oa.fx.step[a.prop] ? oa.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[oa.cssProps[a.prop]] && !oa.cssHooks[a.prop] ? a.elem[a.prop] = a.now : oa.style(a.elem, a.prop, a.now + a.unit)
        }
      }
    }, L.propHooks.scrollTop = L.propHooks.scrollLeft = {
      set: function(a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
      }
    }, oa.easing = {
      linear: function(a) {
        return a
      },
      swing: function(a) {
        return .5 - Math.cos(a * Math.PI) / 2
      },
      _default: "swing"
    }, oa.fx = L.prototype.init, oa.fx.step = {};
    var nb, ob, pb = /^(?:toggle|show|hide)$/,
      qb = /queueHooks$/;
    oa.Animation = oa.extend(S, {
        tweeners: {
          "*": [function(a, b) {
            var c = this.createTween(a, b);
            return o(c.elem, a, Oa.exec(b), c), c
          }]
        },
        tweener: function(a, b) {
          oa.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(Ea);
          for (var c, d = 0, e = a.length; e > d; d++) c = a[d], S.tweeners[c] = S.tweeners[c] || [], S.tweeners[c].unshift(b)
        },
        prefilters: [Q],
        prefilter: function(a, b) {
          b ? S.prefilters.unshift(a) : S.prefilters.push(a)
        }
      }), oa.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? oa.extend({}, a) : {
          complete: c || !c && b || oa.isFunction(a) && a,
          duration: a,
          easing: c && b || b && !oa.isFunction(b) && b
        };
        return oa.fx.off || ba.hidden ? d.duration = 0 : "number" != typeof d.duration && (d.duration in oa.fx.speeds ? d.duration = oa.fx.speeds[d.duration] : d.duration = oa.fx.speeds._default), (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
          oa.isFunction(d.old) && d.old.call(this), d.queue && oa.dequeue(this, d.queue)
        }, d
      }, oa.fn.extend({
        fadeTo: function(a, b, c, d) {
          return this.filter(Qa).css("opacity", 0).show().end().animate({
            opacity: b
          }, a, c, d)
        },
        animate: function(a, b, c, d) {
          var e = oa.isEmptyObject(a),
            f = oa.speed(b, c, d),
            g = function() {
              var b = S(this, oa.extend({}, a), f);
              (e || Ja.get(this, "finish")) && b.stop(!0)
            };
          return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
          var d = function(a) {
            var b = a.stop;
            delete a.stop, b(c)
          };
          return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []),
            this.each(function() {
              var b = !0,
                e = null != a && a + "queueHooks",
                f = oa.timers,
                g = Ja.get(this);
              if (e) g[e] && g[e].stop && d(g[e]);
              else
                for (e in g) g[e] && g[e].stop && qb.test(e) && d(g[e]);
              for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
              (b || !c) && oa.dequeue(this, a)
            })
        },
        finish: function(a) {
          return a !== !1 && (a = a || "fx"), this.each(function() {
            var b, c = Ja.get(this),
              d = c[a + "queue"],
              e = c[a + "queueHooks"],
              f = oa.timers,
              g = d ? d.length : 0;
            for (c.finish = !0, oa.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish
          })
        }
      }), oa.each(["toggle", "show", "hide"], function(a, b) {
        var c = oa.fn[b];
        oa.fn[b] = function(a, d, e) {
          return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(O(b, !0), a, d, e)
        }
      }), oa.each({
        slideDown: O("show"),
        slideUp: O("hide"),
        slideToggle: O("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function(a, b) {
        oa.fn[a] = function(a, c, d) {
          return this.animate(b, a, c, d)
        }
      }), oa.timers = [], oa.fx.tick = function() {
        var a, b = 0,
          c = oa.timers;
        for (nb = oa.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || oa.fx.stop(), nb = void 0
      }, oa.fx.timer = function(a) {
        oa.timers.push(a), a() ? oa.fx.start() : oa.timers.pop()
      }, oa.fx.interval = 13, oa.fx.start = function() {
        ob || (ob = a.requestAnimationFrame ? a.requestAnimationFrame(M) : a.setInterval(oa.fx.tick, oa.fx.interval))
      }, oa.fx.stop = function() {
        a.cancelAnimationFrame ? a.cancelAnimationFrame(ob) : a.clearInterval(ob), ob = null
      }, oa.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, oa.fn.delay = function(b, c) {
        return b = oa.fx ? oa.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
          var e = a.setTimeout(c, b);
          d.stop = function() {
            a.clearTimeout(e)
          }
        })
      },
      function() {
        var a = ba.createElement("input"),
          b = ba.createElement("select"),
          c = b.appendChild(ba.createElement("option"));
        a.type = "checkbox", ma.checkOn = "" !== a.value, ma.optSelected = c.selected, a = ba.createElement("input"), a.value = "t", a.type = "radio", ma.radioValue = "t" === a.value
      }();
    var rb, sb = oa.expr.attrHandle;
    oa.fn.extend({
      attr: function(a, b) {
        return Ha(this, oa.attr, a, b, arguments.length > 1)
      },
      removeAttr: function(a) {
        return this.each(function() {
          oa.removeAttr(this, a)
        })
      }
    }), oa.extend({
      attr: function(a, b, c) {
        var d, e, f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? oa.prop(a, b, c) : (1 === f && oa.isXMLDoc(a) || (e = oa.attrHooks[b.toLowerCase()] || (oa.expr.match.bool.test(b) ? rb : void 0)), void 0 !== c ? null === c ? void oa.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = oa.find.attr(a, b), null == d ? void 0 : d))
      },
      attrHooks: {
        type: {
          set: function(a, b) {
            if (!ma.radioValue && "radio" === b && oa.nodeName(a, "input")) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b
            }
          }
        }
      },
      removeAttr: function(a, b) {
        var c, d = 0,
          e = b && b.match(Ea);
        if (e && 1 === a.nodeType)
          for (; c = e[d++];) a.removeAttribute(c)
      }
    }), rb = {
      set: function(a, b, c) {
        return b === !1 ? oa.removeAttr(a, c) : a.setAttribute(c, c), c
      }
    }, oa.each(oa.expr.match.bool.source.match(/\w+/g), function(a, b) {
      var c = sb[b] || oa.find.attr;
      sb[b] = function(a, b, d) {
        var e, f, g = b.toLowerCase();
        return d || (f = sb[g], sb[g] = e, e = null != c(a, b, d) ? g : null, sb[g] = f), e
      }
    });
    var tb = /^(?:input|select|textarea|button)$/i,
      ub = /^(?:a|area)$/i;
    oa.fn.extend({
      prop: function(a, b) {
        return Ha(this, oa.prop, a, b, arguments.length > 1)
      },
      removeProp: function(a) {
        return this.each(function() {
          delete this[oa.propFix[a] || a]
        })
      }
    }), oa.extend({
      prop: function(a, b, c) {
        var d, e, f = a.nodeType;
        if (3 !== f && 8 !== f && 2 !== f) return 1 === f && oa.isXMLDoc(a) || (b = oa.propFix[b] || b, e = oa.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
      },
      propHooks: {
        tabIndex: {
          get: function(a) {
            var b = oa.find.attr(a, "tabindex");
            return b ? parseInt(b, 10) : tb.test(a.nodeName) || ub.test(a.nodeName) && a.href ? 0 : -1
          }
        }
      },
      propFix: {
        "for": "htmlFor",
        "class": "className"
      }
    }), ma.optSelected || (oa.propHooks.selected = {
      get: function(a) {
        var b = a.parentNode;
        return b && b.parentNode && b.parentNode.selectedIndex, null
      },
      set: function(a) {
        var b = a.parentNode;
        b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
      }
    }), oa.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      oa.propFix[this.toLowerCase()] = this
    }), oa.fn.extend({
      addClass: function(a) {
        var b, c, d, e, f, g, h, i = 0;
        if (oa.isFunction(a)) return this.each(function(b) {
          oa(this).addClass(a.call(this, b, U(this)))
        });
        if ("string" == typeof a && a)
          for (b = a.match(Ea) || []; c = this[i++];)
            if (e = U(c), d = 1 === c.nodeType && " " + T(e) + " ") {
              for (g = 0; f = b[g++];) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
              h = T(d), e !== h && c.setAttribute("class", h)
            }
        return this
      },
      removeClass: function(a) {
        var b, c, d, e, f, g, h, i = 0;
        if (oa.isFunction(a)) return this.each(function(b) {
          oa(this).removeClass(a.call(this, b, U(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof a && a)
          for (b = a.match(Ea) || []; c = this[i++];)
            if (e = U(c), d = 1 === c.nodeType && " " + T(e) + " ") {
              for (g = 0; f = b[g++];)
                for (; d.indexOf(" " + f + " ") > -1;) d = d.replace(" " + f + " ", " ");
              h = T(d), e !== h && c.setAttribute("class", h)
            }
        return this
      },
      toggleClass: function(a, b) {
        var c = typeof a;
        return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : oa.isFunction(a) ? this.each(function(c) {
          oa(this).toggleClass(a.call(this, c, U(this), b), b)
        }) : this.each(function() {
          var b, d, e, f;
          if ("string" === c)
            for (d = 0, e = oa(this), f = a.match(Ea) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          else(void 0 === a || "boolean" === c) && (b = U(this), b && Ja.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : Ja.get(this, "__className__") || ""))
        })
      },
      hasClass: function(a) {
        var b, c, d = 0;
        for (b = " " + a + " "; c = this[d++];)
          if (1 === c.nodeType && (" " + T(U(c)) + " ").indexOf(b) > -1) return !0;
        return !1
      }
    });
    var vb = /\r/g;
    oa.fn.extend({
      val: function(a) {
        var b, c, d, e = this[0]; {
          if (arguments.length) return d = oa.isFunction(a), this.each(function(c) {
            var e;
            1 === this.nodeType && (e = d ? a.call(this, c, oa(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : oa.isArray(e) && (e = oa.map(e, function(a) {
              return null == a ? "" : a + ""
            })), b = oa.valHooks[this.type] || oa.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
          });
          if (e) return b = oa.valHooks[e.type] || oa.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(vb, "") : null == c ? "" : c)
        }
      }
    }), oa.extend({
      valHooks: {
        option: {
          get: function(a) {
            var b = oa.find.attr(a, "value");
            return null != b ? b : T(oa.text(a))
          }
        },
        select: {
          get: function(a) {
            var b, c, d, e = a.options,
              f = a.selectedIndex,
              g = "select-one" === a.type,
              h = g ? null : [],
              i = g ? f + 1 : e.length;
            for (d = 0 > f ? i : g ? f : 0; i > d; d++)
              if (c = e[d], (c.selected || d === f) && !c.disabled && (!c.parentNode.disabled || !oa.nodeName(c.parentNode, "optgroup"))) {
                if (b = oa(c).val(), g) return b;
                h.push(b)
              }
            return h
          },
          set: function(a, b) {
            for (var c, d, e = a.options, f = oa.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = oa.inArray(oa.valHooks.option.get(d), f) > -1) && (c = !0);
            return c || (a.selectedIndex = -1), f
          }
        }
      }
    }), oa.each(["radio", "checkbox"], function() {
      oa.valHooks[this] = {
        set: function(a, b) {
          return oa.isArray(b) ? a.checked = oa.inArray(oa(a).val(), b) > -1 : void 0
        }
      }, ma.checkOn || (oa.valHooks[this].get = function(a) {
        return null === a.getAttribute("value") ? "on" : a.value
      })
    });
    var wb = /^(?:focusinfocus|focusoutblur)$/;
    oa.extend(oa.event, {
      trigger: function(b, c, d, e) {
        var f, g, h, i, j, k, l, m = [d || ba],
          n = ja.call(b, "type") ? b.type : b,
          o = ja.call(b, "namespace") ? b.namespace.split(".") : [];
        if (g = h = d = d || ba, 3 !== d.nodeType && 8 !== d.nodeType && !wb.test(n + oa.event.triggered) && (n.indexOf(".") > -1 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[oa.expando] ? b : new oa.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : oa.makeArray(c, [b]), l = oa.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
          if (!e && !l.noBubble && !oa.isWindow(d)) {
            for (i = l.delegateType || n, wb.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
            h === (d.ownerDocument || ba) && m.push(h.defaultView || h.parentWindow || a)
          }
          for (f = 0;
            (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (Ja.get(g, "events") || {})[b.type] && Ja.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && Ia(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
          return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !Ia(d) || j && oa.isFunction(d[n]) && !oa.isWindow(d) && (h = d[j], h && (d[j] = null), oa.event.triggered = n, d[n](), oa.event.triggered = void 0, h && (d[j] = h)), b.result
        }
      },
      simulate: function(a, b, c) {
        var d = oa.extend(new oa.Event, c, {
          type: a,
          isSimulated: !0
        });
        oa.event.trigger(d, null, b)
      }
    }), oa.fn.extend({
      trigger: function(a, b) {
        return this.each(function() {
          oa.event.trigger(a, b, this)
        })
      },
      triggerHandler: function(a, b) {
        var c = this[0];
        return c ? oa.event.trigger(a, b, c, !0) : void 0
      }
    }), oa.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(a, b) {
      oa.fn[b] = function(a, c) {
        return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
      }
    }), oa.fn.extend({
      hover: function(a, b) {
        return this.mouseenter(a).mouseleave(b || a)
      }
    }), ma.focusin = "onfocusin" in a, ma.focusin || oa.each({
      focus: "focusin",
      blur: "focusout"
    }, function(a, b) {
      var c = function(a) {
        oa.event.simulate(b, a.target, oa.event.fix(a))
      };
      oa.event.special[b] = {
        setup: function() {
          var d = this.ownerDocument || this,
            e = Ja.access(d, b);
          e || d.addEventListener(a, c, !0), Ja.access(d, b, (e || 0) + 1)
        },
        teardown: function() {
          var d = this.ownerDocument || this,
            e = Ja.access(d, b) - 1;
          e ? Ja.access(d, b, e) : (d.removeEventListener(a, c, !0), Ja.remove(d, b))
        }
      }
    });
    var xb = a.location,
      yb = oa.now(),
      zb = /\?/;
    oa.parseXML = function(b) {
      var c;
      if (!b || "string" != typeof b) return null;
      try {
        c = (new a.DOMParser).parseFromString(b, "text/xml")
      } catch (d) {
        c = void 0
      }
      return (!c || c.getElementsByTagName("parsererror").length) && oa.error("Invalid XML: " + b), c
    };
    var Ab = /\[\]$/,
      Bb = /\r?\n/g,
      Cb = /^(?:submit|button|image|reset|file)$/i,
      Db = /^(?:input|select|textarea|keygen)/i;
    oa.param = function(a, b) {
      var c, d = [],
        e = function(a, b) {
          var c = oa.isFunction(b) ? b() : b;
          d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c)
        };
      if (oa.isArray(a) || a.jquery && !oa.isPlainObject(a)) oa.each(a, function() {
        e(this.name, this.value)
      });
      else
        for (c in a) V(c, a[c], b, e);
      return d.join("&")
    }, oa.fn.extend({
      serialize: function() {
        return oa.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          var a = oa.prop(this, "elements");
          return a ? oa.makeArray(a) : this
        }).filter(function() {
          var a = this.type;
          return this.name && !oa(this).is(":disabled") && Db.test(this.nodeName) && !Cb.test(a) && (this.checked || !Ta.test(a))
        }).map(function(a, b) {
          var c = oa(this).val();
          return null == c ? null : oa.isArray(c) ? oa.map(c, function(a) {
            return {
              name: b.name,
              value: a.replace(Bb, "\r\n")
            }
          }) : {
            name: b.name,
            value: c.replace(Bb, "\r\n")
          }
        }).get()
      }
    });
    var Eb = /%20/g,
      Fb = /#.*$/,
      Gb = /([?&])_=[^&]*/,
      Hb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ib = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Jb = /^(?:GET|HEAD)$/,
      Kb = /^\/\//,
      Lb = {},
      Mb = {},
      Nb = "*/".concat("*"),
      Ob = ba.createElement("a");
    Ob.href = xb.href, oa.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: xb.href,
        type: "GET",
        isLocal: Ib.test(xb.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Nb,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": oa.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(a, b) {
        return b ? Y(Y(a, oa.ajaxSettings), b) : Y(oa.ajaxSettings, a)
      },
      ajaxPrefilter: W(Lb),
      ajaxTransport: W(Mb),
      ajax: function(b, c) {
        function d(b, c, d, h) {
          var j, m, n, u, v, w = c;
          k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = Z(o, x, d)), u = $(o, u, x, j), j ? (o.ifModified && (v = x.getResponseHeader("Last-Modified"), v && (oa.lastModified[f] = v), v = x.getResponseHeader("etag"), v && (oa.etag[f] = v)), 204 === b || "HEAD" === o.type ? w = "nocontent" : 304 === b ? w = "notmodified" : (w = u.state, m = u.data, n = u.error, j = !n)) : (n = w, (b || !w) && (w = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || w) + "", j ? r.resolveWith(p, [m, w, x]) : r.rejectWith(p, [x, w, n]), x.statusCode(t), t = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [x, o, j ? m : n]), s.fireWith(p, [x, w]), l && (q.trigger("ajaxComplete", [x, o]), --oa.active || oa.event.trigger("ajaxStop")))
        }
        "object" == typeof b && (c = b, b = void 0), c = c || {};
        var e, f, g, h, i, j, k, l, m, n, o = oa.ajaxSetup({}, c),
          p = o.context || o,
          q = o.context && (p.nodeType || p.jquery) ? oa(p) : oa.event,
          r = oa.Deferred(),
          s = oa.Callbacks("once memory"),
          t = o.statusCode || {},
          u = {},
          v = {},
          w = "canceled",
          x = {
            readyState: 0,
            getResponseHeader: function(a) {
              var b;
              if (k) {
                if (!h)
                  for (h = {}; b = Hb.exec(g);) h[b[1].toLowerCase()] = b[2];
                b = h[a.toLowerCase()]
              }
              return null == b ? null : b
            },
            getAllResponseHeaders: function() {
              return k ? g : null
            },
            setRequestHeader: function(a, b) {
              return null == k && (a = v[a.toLowerCase()] = v[a.toLowerCase()] || a, u[a] = b), this
            },
            overrideMimeType: function(a) {
              return null == k && (o.mimeType = a), this
            },
            statusCode: function(a) {
              var b;
              if (a)
                if (k) x.always(a[x.status]);
                else
                  for (b in a) t[b] = [t[b], a[b]];
              return this
            },
            abort: function(a) {
              var b = a || w;
              return e && e.abort(b), d(0, b), this
            }
          };
        if (r.promise(x), o.url = ((b || o.url || xb.href) + "").replace(Kb, xb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(Ea) || [""], null == o.crossDomain) {
          j = ba.createElement("a");
          try {
            j.href = o.url, j.href = j.href, o.crossDomain = Ob.protocol + "//" + Ob.host != j.protocol + "//" + j.host
          } catch (y) {
            o.crossDomain = !0
          }
        }
        if (o.data && o.processData && "string" != typeof o.data && (o.data = oa.param(o.data, o.traditional)), X(Lb, o, c, x), k) return x;
        l = oa.event && o.global, l && 0 === oa.active++ && oa.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Jb.test(o.type), f = o.url.replace(Fb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(Eb, "+")) : (n = o.url.slice(f.length), o.data && (f += (zb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Gb, "$1"), n = (zb.test(f) ? "&" : "?") + "_=" + yb++ + n), o.url = f + n), o.ifModified && (oa.lastModified[f] && x.setRequestHeader("If-Modified-Since", oa.lastModified[f]), oa.etag[f] && x.setRequestHeader("If-None-Match", oa.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", o.contentType), x.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Nb + "; q=0.01" : "") : o.accepts["*"]);
        for (m in o.headers) x.setRequestHeader(m, o.headers[m]);
        if (o.beforeSend && (o.beforeSend.call(p, x, o) === !1 || k)) return x.abort();
        if (w = "abort", s.add(o.complete), x.done(o.success), x.fail(o.error), e = X(Mb, o, c, x)) {
          if (x.readyState = 1, l && q.trigger("ajaxSend", [x, o]), k) return x;
          o.async && o.timeout > 0 && (i = a.setTimeout(function() {
            x.abort("timeout")
          }, o.timeout));
          try {
            k = !1, e.send(u, d)
          } catch (y) {
            if (k) throw y;
            d(-1, y)
          }
        } else d(-1, "No Transport");
        return x
      },
      getJSON: function(a, b, c) {
        return oa.get(a, b, c, "json")
      },
      getScript: function(a, b) {
        return oa.get(a, void 0, b, "script")
      }
    }), oa.each(["get", "post"], function(a, b) {
      oa[b] = function(a, c, d, e) {
        return oa.isFunction(c) && (e = e || d, d = c, c = void 0), oa.ajax(oa.extend({
          url: a,
          type: b,
          dataType: e,
          data: c,
          success: d
        }, oa.isPlainObject(a) && a))
      }
    }), oa._evalUrl = function(a) {
      return oa.ajax({
        url: a,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        "throws": !0
      })
    }, oa.fn.extend({
      wrapAll: function(a) {
        var b;
        return this[0] && (oa.isFunction(a) && (a = a.call(this[0])), b = oa(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
          for (var a = this; a.firstElementChild;) a = a.firstElementChild;
          return a
        }).append(this)), this
      },
      wrapInner: function(a) {
        return oa.isFunction(a) ? this.each(function(b) {
          oa(this).wrapInner(a.call(this, b))
        }) : this.each(function() {
          var b = oa(this),
            c = b.contents();
          c.length ? c.wrapAll(a) : b.append(a)
        })
      },
      wrap: function(a) {
        var b = oa.isFunction(a);
        return this.each(function(c) {
          oa(this).wrapAll(b ? a.call(this, c) : a)
        })
      },
      unwrap: function(a) {
        return this.parent(a).not("body").each(function() {
          oa(this).replaceWith(this.childNodes)
        }), this
      }
    }), oa.expr.pseudos.hidden = function(a) {
      return !oa.expr.pseudos.visible(a)
    }, oa.expr.pseudos.visible = function(a) {
      return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length)
    }, oa.ajaxSettings.xhr = function() {
      try {
        return new a.XMLHttpRequest
      } catch (b) {}
    };
    var Pb = {
        0: 200,
        1223: 204
      },
      Qb = oa.ajaxSettings.xhr();
    ma.cors = !!Qb && "withCredentials" in Qb, ma.ajax = Qb = !!Qb, oa.ajaxTransport(function(b) {
      var c, d;
      return ma.cors || Qb && !b.crossDomain ? {
        send: function(e, f) {
          var g, h = b.xhr();
          if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
            for (g in b.xhrFields) h[g] = b.xhrFields[g];
          b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
          for (g in e) h.setRequestHeader(g, e[g]);
          c = function(a) {
            return function() {
              c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Pb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                binary: h.response
              } : {
                text: h.responseText
              }, h.getAllResponseHeaders()))
            }
          }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
            4 === h.readyState && a.setTimeout(function() {
              c && d()
            })
          }, c = c("abort");
          try {
            h.send(b.hasContent && b.data || null)
          } catch (i) {
            if (c) throw i
          }
        },
        abort: function() {
          c && c()
        }
      } : void 0
    }), oa.ajaxPrefilter(function(a) {
      a.crossDomain && (a.contents.script = !1)
    }), oa.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(a) {
          return oa.globalEval(a), a
        }
      }
    }), oa.ajaxPrefilter("script", function(a) {
      void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), oa.ajaxTransport("script", function(a) {
      if (a.crossDomain) {
        var b, c;
        return {
          send: function(d, e) {
            b = oa("<script>").prop({
              charset: a.scriptCharset,
              src: a.url
            }).on("load error", c = function(a) {
              b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
            }), ba.head.appendChild(b[0])
          },
          abort: function() {
            c && c()
          }
        }
      }
    });
    var Rb = [],
      Sb = /(=)\?(?=&|$)|\?\?/;
    oa.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var a = Rb.pop() || oa.expando + "_" + yb++;
        return this[a] = !0, a
      }
    }), oa.ajaxPrefilter("json jsonp", function(b, c, d) {
      var e, f, g, h = b.jsonp !== !1 && (Sb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Sb.test(b.data) && "data");
      return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = oa.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Sb, "$1" + e) : b.jsonp !== !1 && (b.url += (zb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
        return g || oa.error(e + " was not called"), g[0]
      }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
        g = arguments
      }, d.always(function() {
        void 0 === f ? oa(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Rb.push(e)), g && oa.isFunction(f) && f(g[0]), g = f = void 0
      }), "script") : void 0
    }), ma.createHTMLDocument = function() {
      var a = ba.implementation.createHTMLDocument("").body;
      return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length
    }(), oa.parseHTML = function(a, b, c) {
      if ("string" != typeof a) return [];
      "boolean" == typeof b && (c = b, b = !1);
      var d, e, f;
      return b || (ma.createHTMLDocument ? (b = ba.implementation.createHTMLDocument(""), d = b.createElement("base"), d.href = ba.location.href, b.head.appendChild(d)) : b = ba), e = xa.exec(a), f = !c && [], e ? [b.createElement(e[1])] : (e = t([a], b, f), f && f.length && oa(f).remove(), oa.merge([], e.childNodes))
    }, oa.fn.load = function(a, b, c) {
      var d, e, f, g = this,
        h = a.indexOf(" ");
      return h > -1 && (d = T(a.slice(h)), a = a.slice(0, h)), oa.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && oa.ajax({
        url: a,
        type: e || "GET",
        dataType: "html",
        data: b
      }).done(function(a) {
        f = arguments, g.html(d ? oa("<div>").append(oa.parseHTML(a)).find(d) : a)
      }).always(c && function(a, b) {
        g.each(function() {
          c.apply(this, f || [a.responseText, b, a])
        })
      }), this
    }, oa.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
      oa.fn[b] = function(a) {
        return this.on(b, a)
      }
    }), oa.expr.pseudos.animated = function(a) {
      return oa.grep(oa.timers, function(b) {
        return a === b.elem
      }).length
    }, oa.offset = {
      setOffset: function(a, b, c) {
        var d, e, f, g, h, i, j, k = oa.css(a, "position"),
          l = oa(a),
          m = {};
        "static" === k && (a.style.position = "relative"), h = l.offset(), f = oa.css(a, "top"), i = oa.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), oa.isFunction(b) && (b = b.call(a, c, oa.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
      }
    }, oa.fn.extend({
      offset: function(a) {
        if (arguments.length) return void 0 === a ? this : this.each(function(b) {
          oa.offset.setOffset(this, a, b)
        });
        var b, c, d, e, f = this[0];
        if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = _(e), b = e.documentElement, {
          top: d.top + c.pageYOffset - b.clientTop,
          left: d.left + c.pageXOffset - b.clientLeft
        }) : d) : {
          top: 0,
          left: 0
        }
      },
      position: function() {
        if (this[0]) {
          var a, b, c = this[0],
            d = {
              top: 0,
              left: 0
            };
          return "fixed" === oa.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), oa.nodeName(a[0], "html") || (d = a.offset()), d = {
            top: d.top + oa.css(a[0], "borderTopWidth", !0),
            left: d.left + oa.css(a[0], "borderLeftWidth", !0)
          }), {
            top: b.top - d.top - oa.css(c, "marginTop", !0),
            left: b.left - d.left - oa.css(c, "marginLeft", !0)
          }
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var a = this.offsetParent; a && "static" === oa.css(a, "position");) a = a.offsetParent;
          return a || Ya
        })
      }
    }), oa.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(a, b) {
      var c = "pageYOffset" === b;
      oa.fn[a] = function(d) {
        return Ha(this, function(a, d, e) {
          var f = _(a);
          return void 0 === e ? f ? f[b] : a[d] : void(f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e)
        }, a, d, arguments.length)
      }
    }), oa.each(["top", "left"], function(a, b) {
      oa.cssHooks[b] = G(ma.pixelPosition, function(a, c) {
        return c ? (c = F(a, b), gb.test(c) ? oa(a).position()[b] + "px" : c) : void 0
      })
    }), oa.each({
      Height: "height",
      Width: "width"
    }, function(a, b) {
      oa.each({
        padding: "inner" + a,
        content: b,
        "": "outer" + a
      }, function(c, d) {
        oa.fn[d] = function(e, f) {
          var g = arguments.length && (c || "boolean" != typeof e),
            h = c || (e === !0 || f === !0 ? "margin" : "border");
          return Ha(this, function(b, c, e) {
            var f;
            return oa.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? oa.css(b, c, h) : oa.style(b, c, e, h)
          }, b, g ? e : void 0, g)
        }
      })
    }), oa.fn.extend({
      bind: function(a, b, c) {
        return this.on(a, null, b, c)
      },
      unbind: function(a, b) {
        return this.off(a, null, b)
      },
      delegate: function(a, b, c, d) {
        return this.on(b, a, c, d)
      },
      undelegate: function(a, b, c) {
        return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
      }
    }), oa.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
      return oa
    });
    var Tb = a.jQuery,
      Ub = a.$;
    return oa.noConflict = function(b) {
      return a.$ === oa && (a.$ = Ub), b && a.jQuery === oa && (a.jQuery = Tb), oa
    }, b || (a.jQuery = a.$ = oa), oa
  }), function(a) {
    "use strict";

    function b(a, b) {
      return b = b || Error,
        function() {
          var c, d, e = 2,
            f = arguments,
            g = f[0],
            h = "[" + (a ? a + ":" : "") + g + "] ",
            i = f[1];
          for (h += i.replace(/\{\d+\}/g, function(a) {
              var b = +a.slice(1, -1),
                c = b + e;
              return c < f.length ? sa(f[c]) : a
            }), h += "\nhttp://errors.angularjs.org/1.5.8/" + (a ? a + "/" : "") + g, d = e, c = "?"; d < f.length; d++, c = "&") h += c + "p" + (d - e) + "=" + encodeURIComponent(sa(f[d]));
          return new b(h)
        }
    }

    function c(a) {
      if (null == a || A(a)) return !1;
      if (Wd(a) || v(a) || Ld && a instanceof Ld) return !0;
      var b = "length" in Object(a) && a.length;
      return w(b) && (b >= 0 && (b - 1 in a || a instanceof Array) || "function" == typeof a.item)
    }

    function d(a, b, e) {
      var f, g;
      if (a)
        if (y(a))
          for (f in a) "prototype" == f || "length" == f || "name" == f || a.hasOwnProperty && !a.hasOwnProperty(f) || b.call(e, a[f], f, a);
        else if (Wd(a) || c(a)) {
        var h = "object" != typeof a;
        for (f = 0, g = a.length; g > f; f++)(h || f in a) && b.call(e, a[f], f, a)
      } else if (a.forEach && a.forEach !== d) a.forEach(b, e, a);
      else if (u(a))
        for (f in a) b.call(e, a[f], f, a);
      else if ("function" == typeof a.hasOwnProperty)
        for (f in a) a.hasOwnProperty(f) && b.call(e, a[f], f, a);
      else
        for (f in a) Fd.call(a, f) && b.call(e, a[f], f, a);
      return a
    }

    function e(a, b, c) {
      for (var d = Object.keys(a).sort(), e = 0; e < d.length; e++) b.call(c, a[d[e]], d[e]);
      return d
    }

    function f(a) {
      return function(b, c) {
        a(c, b)
      }
    }

    function g() {
      return ++Vd
    }

    function h(a, b) {
      b ? a.$$hashKey = b : delete a.$$hashKey
    }

    function i(a, b, c) {
      for (var d = a.$$hashKey, e = 0, f = b.length; f > e; ++e) {
        var g = b[e];
        if (t(g) || y(g))
          for (var j = Object.keys(g), k = 0, l = j.length; l > k; k++) {
            var m = j[k],
              n = g[m];
            c && t(n) ? x(n) ? a[m] = new Date(n.valueOf()) : z(n) ? a[m] = new RegExp(n) : n.nodeName ? a[m] = n.cloneNode(!0) : J(n) ? a[m] = n.clone() : (t(a[m]) || (a[m] = Wd(n) ? [] : {}), i(a[m], [n], !0)) : a[m] = n
          }
      }
      return h(a, d), a
    }

    function j(a) {
      return i(a, Od.call(arguments, 1), !1)
    }

    function k(a) {
      return i(a, Od.call(arguments, 1), !0)
    }

    function l(a) {
      return parseInt(a, 10)
    }

    function m(a, b) {
      return j(Object.create(a), b)
    }

    function n() {}

    function o(a) {
      return a
    }

    function p(a) {
      return function() {
        return a
      }
    }

    function q(a) {
      return y(a.toString) && a.toString !== Rd
    }

    function r(a) {
      return "undefined" == typeof a
    }

    function s(a) {
      return "undefined" != typeof a
    }

    function t(a) {
      return null !== a && "object" == typeof a
    }

    function u(a) {
      return null !== a && "object" == typeof a && !Sd(a)
    }

    function v(a) {
      return "string" == typeof a
    }

    function w(a) {
      return "number" == typeof a
    }

    function x(a) {
      return "[object Date]" === Rd.call(a)
    }

    function y(a) {
      return "function" == typeof a
    }

    function z(a) {
      return "[object RegExp]" === Rd.call(a)
    }

    function A(a) {
      return a && a.window === a
    }

    function B(a) {
      return a && a.$evalAsync && a.$watch
    }

    function C(a) {
      return "[object File]" === Rd.call(a)
    }

    function D(a) {
      return "[object FormData]" === Rd.call(a)
    }

    function E(a) {
      return "[object Blob]" === Rd.call(a)
    }

    function F(a) {
      return "boolean" == typeof a
    }

    function G(a) {
      return a && y(a.then)
    }

    function H(a) {
      return a && w(a.length) && Xd.test(Rd.call(a))
    }

    function I(a) {
      return "[object ArrayBuffer]" === Rd.call(a)
    }

    function J(a) {
      return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
    }

    function K(a) {
      var b, c = {},
        d = a.split(",");
      for (b = 0; b < d.length; b++) c[d[b]] = !0;
      return c
    }

    function L(a) {
      return Gd(a.nodeName || a[0] && a[0].nodeName)
    }

    function M(a, b) {
      var c = a.indexOf(b);
      return c >= 0 && a.splice(c, 1), c
    }

    function N(a, b) {
      function c(a, b) {
        var c, d = b.$$hashKey;
        if (Wd(a))
          for (var f = 0, g = a.length; g > f; f++) b.push(e(a[f]));
        else if (u(a))
          for (c in a) b[c] = e(a[c]);
        else if (a && "function" == typeof a.hasOwnProperty)
          for (c in a) a.hasOwnProperty(c) && (b[c] = e(a[c]));
        else
          for (c in a) Fd.call(a, c) && (b[c] = e(a[c]));
        return h(b, d), b
      }

      function e(a) {
        if (!t(a)) return a;
        var b = g.indexOf(a);
        if (-1 !== b) return i[b];
        if (A(a) || B(a)) throw Td("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
        var d = !1,
          e = f(a);
        return void 0 === e && (e = Wd(a) ? [] : Object.create(Sd(a)), d = !0), g.push(a), i.push(e), d ? c(a, e) : e
      }

      function f(a) {
        switch (Rd.call(a)) {
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return new a.constructor(e(a.buffer), a.byteOffset, a.length);
          case "[object ArrayBuffer]":
            if (!a.slice) {
              var b = new ArrayBuffer(a.byteLength);
              return new Uint8Array(b).set(new Uint8Array(a)), b
            }
            return a.slice(0);
          case "[object Boolean]":
          case "[object Number]":
          case "[object String]":
          case "[object Date]":
            return new a.constructor(a.valueOf());
          case "[object RegExp]":
            var c = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]);
            return c.lastIndex = a.lastIndex, c;
          case "[object Blob]":
            return new a.constructor([a], {
              type: a.type
            })
        }
        return y(a.cloneNode) ? a.cloneNode(!0) : void 0
      }
      var g = [],
        i = [];
      if (b) {
        if (H(b) || I(b)) throw Td("cpta", "Can't copy! TypedArray destination cannot be mutated.");
        if (a === b) throw Td("cpi", "Can't copy! Source and destination are identical.");
        return Wd(b) ? b.length = 0 : d(b, function(a, c) {
          "$$hashKey" !== c && delete b[c]
        }), g.push(a), i.push(b), c(a, b)
      }
      return e(a)
    }

    function O(a, b) {
      if (a === b) return !0;
      if (null === a || null === b) return !1;
      if (a !== a && b !== b) return !0;
      var c, d, e, f = typeof a,
        g = typeof b;
      if (f == g && "object" == f) {
        if (!Wd(a)) {
          if (x(a)) return x(b) ? O(a.getTime(), b.getTime()) : !1;
          if (z(a)) return z(b) ? a.toString() == b.toString() : !1;
          if (B(a) || B(b) || A(a) || A(b) || Wd(b) || x(b) || z(b)) return !1;
          e = oa();
          for (d in a)
            if ("$" !== d.charAt(0) && !y(a[d])) {
              if (!O(a[d], b[d])) return !1;
              e[d] = !0
            }
          for (d in b)
            if (!(d in e) && "$" !== d.charAt(0) && s(b[d]) && !y(b[d])) return !1;
          return !0
        }
        if (!Wd(b)) return !1;
        if ((c = a.length) == b.length) {
          for (d = 0; c > d; d++)
            if (!O(a[d], b[d])) return !1;
          return !0
        }
      }
      return !1
    }

    function P(a, b, c) {
      return a.concat(Od.call(b, c))
    }

    function Q(a, b) {
      return Od.call(a, b || 0)
    }

    function R(a, b) {
      var c = arguments.length > 2 ? Q(arguments, 2) : [];
      return !y(b) || b instanceof RegExp ? b : c.length ? function() {
        return arguments.length ? b.apply(a, P(c, arguments, 0)) : b.apply(a, c)
      } : function() {
        return arguments.length ? b.apply(a, arguments) : b.call(a)
      }
    }

    function S(b, c) {
      var d = c;
      return "string" == typeof b && "$" === b.charAt(0) && "$" === b.charAt(1) ? d = void 0 : A(c) ? d = "$WINDOW" : c && a.document === c ? d = "$DOCUMENT" : B(c) && (d = "$SCOPE"), d
    }

    function T(a, b) {
      return r(a) ? void 0 : (w(b) || (b = b ? 2 : null), JSON.stringify(a, S, b))
    }

    function U(a) {
      return v(a) ? JSON.parse(a) : a
    }

    function V(a, b) {
      a = a.replace(ae, "");
      var c = Date.parse("Jan 01, 1970 00:00:00 " + a) / 6e4;
      return isNaN(c) ? b : c
    }

    function W(a, b) {
      return a = new Date(a.getTime()), a.setMinutes(a.getMinutes() + b), a
    }

    function X(a, b, c) {
      c = c ? -1 : 1;
      var d = a.getTimezoneOffset(),
        e = V(b, d);
      return W(a, c * (e - d))
    }

    function Y(a) {
      a = Ld(a).clone();
      try {
        a.empty()
      } catch (b) {}
      var c = Ld("<div>").append(a).html();
      try {
        return a[0].nodeType === ge ? Gd(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
          return "<" + Gd(b)
        })
      } catch (b) {
        return Gd(c)
      }
    }

    function Z(a) {
      try {
        return decodeURIComponent(a)
      } catch (b) {}
    }

    function $(a) {
      var b = {};
      return d((a || "").split("&"), function(a) {
        var c, d, e;
        a && (d = a = a.replace(/\+/g, "%20"), c = a.indexOf("="), -1 !== c && (d = a.substring(0, c), e = a.substring(c + 1)), d = Z(d), s(d) && (e = s(e) ? Z(e) : !0, Fd.call(b, d) ? Wd(b[d]) ? b[d].push(e) : b[d] = [b[d], e] : b[d] = e))
      }), b
    }

    function _(a) {
      var b = [];
      return d(a, function(a, c) {
        Wd(a) ? d(a, function(a) {
          b.push(ba(c, !0) + (a === !0 ? "" : "=" + ba(a, !0)))
        }) : b.push(ba(c, !0) + (a === !0 ? "" : "=" + ba(a, !0)))
      }), b.length ? b.join("&") : ""
    }

    function aa(a) {
      return ba(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function ba(a, b) {
      return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")
    }

    function ca(a, b) {
      var c, d, e = be.length;
      for (d = 0; e > d; ++d)
        if (c = be[d] + b, v(c = a.getAttribute(c))) return c;
      return null
    }

    function da(a, b) {
      var c, e, f = {};
      d(be, function(b) {
        var d = b + "app";
        !c && a.hasAttribute && a.hasAttribute(d) && (c = a, e = a.getAttribute(d))
      }), d(be, function(b) {
        var d, f = b + "app";
        !c && (d = a.querySelector("[" + f.replace(":", "\\:") + "]")) && (c = d, e = d.getAttribute(f))
      }), c && (f.strictDi = null !== ca(c, "strict-di"), b(c, e ? [e] : [], f))
    }

    function ea(b, c, e) {
      t(e) || (e = {});
      var f = {
        strictDi: !1
      };
      e = j(f, e);
      var g = function() {
          if (b = Ld(b), b.injector()) {
            var d = b[0] === a.document ? "document" : Y(b);
            throw Td("btstrpd", "App already bootstrapped with this element '{0}'", d.replace(/</, "&lt;").replace(/>/, "&gt;"))
          }
          c = c || [], c.unshift(["$provide", function(a) {
            a.value("$rootElement", b)
          }]), e.debugInfoEnabled && c.push(["$compileProvider", function(a) {
            a.debugInfoEnabled(!0)
          }]), c.unshift("ng");
          var f = db(c, e.strictDi);
          return f.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, d) {
            a.$apply(function() {
              b.data("$injector", d), c(b)(a)
            })
          }]), f
        },
        h = /^NG_ENABLE_DEBUG_INFO!/,
        i = /^NG_DEFER_BOOTSTRAP!/;
      return a && h.test(a.name) && (e.debugInfoEnabled = !0, a.name = a.name.replace(h, "")), a && !i.test(a.name) ? g() : (a.name = a.name.replace(i, ""), Ud.resumeBootstrap = function(a) {
        return d(a, function(a) {
          c.push(a)
        }), g()
      }, void(y(Ud.resumeDeferredBootstrap) && Ud.resumeDeferredBootstrap()))
    }

    function fa() {
      a.name = "NG_ENABLE_DEBUG_INFO!" + a.name, a.location.reload()
    }

    function ga(a) {
      var b = Ud.element(a).injector();
      if (!b) throw Td("test", "no injector found for element argument to getTestability");
      return b.get("$$testability")
    }

    function ha(a, b) {
      return b = b || "_", a.replace(ce, function(a, c) {
        return (c ? b : "") + a.toLowerCase()
      })
    }

    function ia() {
      var b;
      if (!de) {
        var c = _d();
        Md = r(c) ? a.jQuery : c ? a[c] : void 0, Md && Md.fn.on ? (Ld = Md, j(Md.fn, {
          scope: ze.scope,
          isolateScope: ze.isolateScope,
          controller: ze.controller,
          injector: ze.injector,
          inheritedData: ze.inheritedData
        }), b = Md.cleanData, Md.cleanData = function(a) {
          for (var c, d, e = 0; null != (d = a[e]); e++) c = Md._data(d, "events"), c && c.$destroy && Md(d).triggerHandler("$destroy");
          b(a)
        }) : Ld = Da, Ud.element = Ld, de = !0
      }
    }

    function ja(a, b, c) {
      if (!a) throw Td("areq", "Argument '{0}' is {1}", b || "?", c || "required");
      return a
    }

    function ka(a, b, c) {
      return c && Wd(a) && (a = a[a.length - 1]), ja(y(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), a
    }

    function la(a, b) {
      if ("hasOwnProperty" === a) throw Td("badname", "hasOwnProperty is not a valid {0} name", b)
    }

    function ma(a, b, c) {
      if (!b) return a;
      for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++) d = e[h], a && (a = (f = a)[d]);
      return !c && y(a) ? R(f, a) : a
    }

    function na(a) {
      for (var b, c = a[0], d = a[a.length - 1], e = 1; c !== d && (c = c.nextSibling); e++)(b || a[e] !== c) && (b || (b = Ld(Od.call(a, 0, e))), b.push(c));
      return b || a
    }

    function oa() {
      return Object.create(null)
    }

    function pa(a) {
      function c(a, b, c) {
        return a[b] || (a[b] = c())
      }
      var d = b("$injector"),
        e = b("ng"),
        f = c(a, "angular", Object);
      return f.$$minErr = f.$$minErr || b, c(f, "module", function() {
        var a = {};
        return function(b, f, g) {
          var h = function(a, b) {
            if ("hasOwnProperty" === a) throw e("badname", "hasOwnProperty is not a valid {0} name", b)
          };
          return h(b, "module"), f && a.hasOwnProperty(b) && (a[b] = null), c(a, b, function() {
            function a(a, b, c, d) {
              return d || (d = e),
                function() {
                  return d[c || "push"]([a, b, arguments]), k
                }
            }

            function c(a, c) {
              return function(d, f) {
                return f && y(f) && (f.$$moduleName = b), e.push([a, c, arguments]), k
              }
            }
            if (!f) throw d("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", b);
            var e = [],
              h = [],
              i = [],
              j = a("$injector", "invoke", "push", h),
              k = {
                _invokeQueue: e,
                _configBlocks: h,
                _runBlocks: i,
                requires: f,
                name: b,
                provider: c("$provide", "provider"),
                factory: c("$provide", "factory"),
                service: c("$provide", "service"),
                value: a("$provide", "value"),
                constant: a("$provide", "constant", "unshift"),
                decorator: c("$provide", "decorator"),
                animation: c("$animateProvider", "register"),
                filter: c("$filterProvider", "register"),
                controller: c("$controllerProvider", "register"),
                directive: c("$compileProvider", "directive"),
                component: c("$compileProvider", "component"),
                config: j,
                run: function(a) {
                  return i.push(a), this
                }
              };
            return g && j(g), k
          })
        }
      })
    }

    function qa(a, b) {
      if (Wd(a)) {
        b = b || [];
        for (var c = 0, d = a.length; d > c; c++) b[c] = a[c]
      } else if (t(a)) {
        b = b || {};
        for (var e in a)("$" !== e.charAt(0) || "$" !== e.charAt(1)) && (b[e] = a[e])
      }
      return b || a
    }

    function ra(a) {
      var b = [];
      return JSON.stringify(a, function(a, c) {
        if (c = S(a, c), t(c)) {
          if (b.indexOf(c) >= 0) return "...";
          b.push(c)
        }
        return c
      })
    }

    function sa(a) {
      return "function" == typeof a ? a.toString().replace(/ \{[\s\S]*$/, "") : r(a) ? "undefined" : "string" != typeof a ? ra(a) : a
    }

    function ta(c) {
      j(c, {
        bootstrap: ea,
        copy: N,
        extend: j,
        merge: k,
        equals: O,
        element: Ld,
        forEach: d,
        injector: db,
        noop: n,
        bind: R,
        toJson: T,
        fromJson: U,
        identity: o,
        isUndefined: r,
        isDefined: s,
        isString: v,
        isFunction: y,
        isObject: t,
        isNumber: w,
        isElement: J,
        isArray: Wd,
        version: ke,
        isDate: x,
        lowercase: Gd,
        uppercase: Hd,
        callbacks: {
          $$counter: 0
        },
        getTestability: ga,
        $$minErr: b,
        $$csp: $d,
        reloadWithDebugInfo: fa
      }), (Nd = pa(a))("ng", ["ngLocale"], ["$provide", function(a) {
        a.provider({
          $$sanitizeUri: yc
        }), a.provider("$compile", ob).directive({
          a: If,
          input: _f,
          textarea: _f,
          form: Nf,
          script: Wg,
          select: Zg,
          style: _g,
          option: $g,
          ngBind: cg,
          ngBindHtml: eg,
          ngBindTemplate: dg,
          ngClass: gg,
          ngClassEven: ig,
          ngClassOdd: hg,
          ngCloak: jg,
          ngController: kg,
          ngForm: Of,
          ngHide: Pg,
          ngIf: ng,
          ngInclude: og,
          ngInit: qg,
          ngNonBindable: Gg,
          ngPluralize: Kg,
          ngRepeat: Lg,
          ngShow: Og,
          ngStyle: Qg,
          ngSwitch: Rg,
          ngSwitchWhen: Sg,
          ngSwitchDefault: Tg,
          ngOptions: Jg,
          ngTransclude: Vg,
          ngModel: Dg,
          ngList: rg,
          ngChange: fg,
          pattern: bh,
          ngPattern: bh,
          required: ah,
          ngRequired: ah,
          minlength: dh,
          ngMinlength: dh,
          maxlength: ch,
          ngMaxlength: ch,
          ngValue: bg,
          ngModelOptions: Fg
        }).directive({
          ngInclude: pg
        }).directive(Jf).directive(lg), a.provider({
          $anchorScroll: eb,
          $animate: Pe,
          $animateCss: Se,
          $$animateJs: Ne,
          $$animateQueue: Oe,
          $$AnimateRunner: Re,
          $$animateAsyncRun: Qe,
          $browser: kb,
          $cacheFactory: lb,
          $controller: ub,
          $document: vb,
          $exceptionHandler: wb,
          $filter: Mc,
          $$forceReflow: Ye,
          $interpolate: Kb,
          $interval: Lb,
          $http: Gb,
          $httpParamSerializer: yb,
          $httpParamSerializerJQLike: zb,
          $httpBackend: Ib,
          $xhrFactory: Hb,
          $jsonpCallbacks: ff,
          $location: $b,
          $log: _b,
          $parse: sc,
          $rootScope: xc,
          $q: tc,
          $$q: uc,
          $sce: Cc,
          $sceDelegate: Bc,
          $sniffer: Dc,
          $templateCache: mb,
          $templateRequest: Ec,
          $$testability: Fc,
          $timeout: Gc,
          $window: Jc,
          $$rAF: wc,
          $$jqLite: Ya,
          $$HashMap: De,
          $$cookieReader: Lc
        })
      }])
    }

    function ua() {
      return ++me
    }

    function va(a) {
      return a.replace(pe, function(a, b, c, d) {
        return d ? c.toUpperCase() : c
      }).replace(qe, "Moz$1")
    }

    function wa(a) {
      return !ue.test(a)
    }

    function xa(a) {
      var b = a.nodeType;
      return b === ee || !b || b === ie
    }

    function ya(a) {
      for (var b in le[a.ng339]) return !0;
      return !1
    }

    function za(a) {
      for (var b = 0, c = a.length; c > b; b++) Ha(a[b])
    }

    function Aa(a, b) {
      var c, e, f, g, h = b.createDocumentFragment(),
        i = [];
      if (wa(a)) i.push(b.createTextNode(a));
      else {
        for (c = h.appendChild(b.createElement("div")), e = (ve.exec(a) || ["", ""])[1].toLowerCase(), f = xe[e] || xe._default, c.innerHTML = f[1] + a.replace(we, "<$1></$2>") + f[2], g = f[0]; g--;) c = c.lastChild;
        i = P(i, c.childNodes), c = h.firstChild, c.textContent = ""
      }
      return h.textContent = "", h.innerHTML = "", d(i, function(a) {
        h.appendChild(a)
      }), h
    }

    function Ba(b, c) {
      c = c || a.document;
      var d;
      return (d = te.exec(b)) ? [c.createElement(d[1])] : (d = Aa(b, c)) ? d.childNodes : []
    }

    function Ca(a, b) {
      var c = a.parentNode;
      c && c.replaceChild(b, a), b.appendChild(a)
    }

    function Da(a) {
      if (a instanceof Da) return a;
      var b;
      if (v(a) && (a = Yd(a), b = !0), !(this instanceof Da)) {
        if (b && "<" != a.charAt(0)) throw se("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
        return new Da(a)
      }
      b ? Na(this, Ba(a)) : Na(this, a)
    }

    function Ea(a) {
      return a.cloneNode(!0)
    }

    function Fa(a, b) {
      if (b || Ha(a), a.querySelectorAll)
        for (var c = a.querySelectorAll("*"), d = 0, e = c.length; e > d; d++) Ha(c[d])
    }

    function Ga(a, b, c, e) {
      if (s(e)) throw se("offargs", "jqLite#off() does not support the `selector` argument");
      var f = Ia(a),
        g = f && f.events,
        h = f && f.handle;
      if (h)
        if (b) {
          var i = function(b) {
            var d = g[b];
            s(c) && M(d || [], c), s(c) && d && d.length > 0 || (oe(a, b, h), delete g[b])
          };
          d(b.split(" "), function(a) {
            i(a), re[a] && i(re[a])
          })
        } else
          for (b in g) "$destroy" !== b && oe(a, b, h), delete g[b]
    }

    function Ha(a, b) {
      var c = a.ng339,
        d = c && le[c];
      if (d) {
        if (b) return void delete d.data[b];
        d.handle && (d.events.$destroy && d.handle({}, "$destroy"), Ga(a)), delete le[c], a.ng339 = void 0
      }
    }

    function Ia(a, b) {
      var c = a.ng339,
        d = c && le[c];
      return b && !d && (a.ng339 = c = ua(), d = le[c] = {
        events: {},
        data: {},
        handle: void 0
      }), d
    }

    function Ja(a, b, c) {
      if (xa(a)) {
        var d = s(c),
          e = !d && b && !t(b),
          f = !b,
          g = Ia(a, !e),
          h = g && g.data;
        if (d) h[b] = c;
        else {
          if (f) return h;
          if (e) return h && h[b];
          j(h, b)
        }
      }
    }

    function Ka(a, b) {
      return a.getAttribute ? (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1 : !1
    }

    function La(a, b) {
      b && a.setAttribute && d(b.split(" "), function(b) {
        a.setAttribute("class", Yd((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + Yd(b) + " ", " ")))
      })
    }

    function Ma(a, b) {
      if (b && a.setAttribute) {
        var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
        d(b.split(" "), function(a) {
          a = Yd(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ")
        }), a.setAttribute("class", Yd(c))
      }
    }

    function Na(a, b) {
      if (b)
        if (b.nodeType) a[a.length++] = b;
        else {
          var c = b.length;
          if ("number" == typeof c && b.window !== b) {
            if (c)
              for (var d = 0; c > d; d++) a[a.length++] = b[d]
          } else a[a.length++] = b
        }
    }

    function Oa(a, b) {
      return Pa(a, "$" + (b || "ngController") + "Controller")
    }

    function Pa(a, b, c) {
      a.nodeType == ie && (a = a.documentElement);
      for (var d = Wd(b) ? b : [b]; a;) {
        for (var e = 0, f = d.length; f > e; e++)
          if (s(c = Ld.data(a, d[e]))) return c;
        a = a.parentNode || a.nodeType === je && a.host
      }
    }

    function Qa(a) {
      for (Fa(a, !0); a.firstChild;) a.removeChild(a.firstChild)
    }

    function Ra(a, b) {
      b || Fa(a);
      var c = a.parentNode;
      c && c.removeChild(a)
    }

    function Sa(b, c) {
      c = c || a, "complete" === c.document.readyState ? c.setTimeout(b) : Ld(c).on("load", b)
    }

    function Ta(a, b) {
      var c = Ae[b.toLowerCase()];
      return c && Be[L(a)] && c
    }

    function Ua(a) {
      return Ce[a]
    }

    function Va(a, b) {
      var c = function(c, d) {
        c.isDefaultPrevented = function() {
          return c.defaultPrevented
        };
        var e = b[d || c.type],
          f = e ? e.length : 0;
        if (f) {
          if (r(c.immediatePropagationStopped)) {
            var g = c.stopImmediatePropagation;
            c.stopImmediatePropagation = function() {
              c.immediatePropagationStopped = !0, c.stopPropagation && c.stopPropagation(), g && g.call(c)
            }
          }
          c.isImmediatePropagationStopped = function() {
            return c.immediatePropagationStopped === !0
          };
          var h = e.specialHandlerWrapper || Wa;
          f > 1 && (e = qa(e));
          for (var i = 0; f > i; i++) c.isImmediatePropagationStopped() || h(a, c, e[i])
        }
      };
      return c.elem = a, c
    }

    function Wa(a, b, c) {
      c.call(a, b)
    }

    function Xa(a, b, c) {
      var d = b.relatedTarget;
      (!d || d !== a && !ye.call(a, d)) && c.call(a, b)
    }

    function Ya() {
      this.$get = function() {
        return j(Da, {
          hasClass: function(a, b) {
            return a.attr && (a = a[0]), Ka(a, b)
          },
          addClass: function(a, b) {
            return a.attr && (a = a[0]), Ma(a, b)
          },
          removeClass: function(a, b) {
            return a.attr && (a = a[0]), La(a, b)
          }
        })
      }
    }

    function Za(a, b) {
      var c = a && a.$$hashKey;
      if (c) return "function" == typeof c && (c = a.$$hashKey()), c;
      var d = typeof a;
      return c = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || g)() : d + ":" + a
    }

    function $a(a, b) {
      if (b) {
        var c = 0;
        this.nextUid = function() {
          return ++c
        }
      }
      d(a, this.put, this)
    }

    function _a(a) {
      return Function.prototype.toString.call(a) + " "
    }

    function ab(a) {
      var b = _a(a).replace(Ie, ""),
        c = b.match(Ee) || b.match(Fe);
      return c
    }

    function bb(a) {
      var b = ab(a);
      return b ? "function(" + (b[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function cb(a, b, c) {
      var e, f, g;
      if ("function" == typeof a) {
        if (!(e = a.$inject)) {
          if (e = [], a.length) {
            if (b) throw v(c) && c || (c = a.name || bb(a)), Je("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", c);
            f = ab(a), d(f[1].split(Ge), function(a) {
              a.replace(He, function(a, b, c) {
                e.push(c)
              })
            })
          }
          a.$inject = e
        }
      } else Wd(a) ? (g = a.length - 1, ka(a[g], "fn"), e = a.slice(0, g)) : ka(a, "fn", !0);
      return e
    }

    function db(a, b) {
      function c(a) {
        return function(b, c) {
          return t(b) ? void d(b, f(a)) : a(b, c)
        }
      }

      function e(a, b) {
        if (la(a, "service"), (y(b) || Wd(b)) && (b = x.instantiate(b)), !b.$get) throw Je("pget", "Provider '{0}' must define $get factory method.", a);
        return w[a + q] = b
      }

      function g(a, b) {
        return function() {
          var c = B.invoke(b, this);
          if (r(c)) throw Je("undef", "Provider '{0}' must return a value from $get factory method.", a);
          return c
        }
      }

      function h(a, b, c) {
        return e(a, {
          $get: c !== !1 ? g(a, b) : b
        })
      }

      function i(a, b) {
        return h(a, ["$injector", function(a) {
          return a.instantiate(b)
        }])
      }

      function j(a, b) {
        return h(a, p(b), !1)
      }

      function k(a, b) {
        la(a, "constant"), w[a] = b, z[a] = b
      }

      function l(a, b) {
        var c = x.get(a + q),
          d = c.$get;
        c.$get = function() {
          var a = B.invoke(d, c);
          return B.invoke(b, null, {
            $delegate: a
          })
        }
      }

      function m(a) {
        ja(r(a) || Wd(a), "modulesToLoad", "not an array");
        var b, c = [];
        return d(a, function(a) {
          function d(a) {
            var b, c;
            for (b = 0, c = a.length; c > b; b++) {
              var d = a[b],
                e = x.get(d[0]);
              e[d[1]].apply(e, d[2])
            }
          }
          if (!u.get(a)) {
            u.put(a, !0);
            try {
              v(a) ? (b = Nd(a), c = c.concat(m(b.requires)).concat(b._runBlocks), d(b._invokeQueue), d(b._configBlocks)) : y(a) ? c.push(x.invoke(a)) : Wd(a) ? c.push(x.invoke(a)) : ka(a, "module")
            } catch (e) {
              throw Wd(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Je("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, e.stack || e.message || e)
            }
          }
        }), c
      }

      function n(a, c) {
        function d(b, d) {
          if (a.hasOwnProperty(b)) {
            if (a[b] === o) throw Je("cdep", "Circular dependency found: {0}", b + " <- " + s.join(" <- "));
            return a[b]
          }
          try {
            return s.unshift(b), a[b] = o, a[b] = c(b, d)
          } catch (e) {
            throw a[b] === o && delete a[b], e
          } finally {
            s.shift()
          }
        }

        function e(a, c, e) {
          for (var f = [], g = db.$$annotate(a, b, e), h = 0, i = g.length; i > h; h++) {
            var j = g[h];
            if ("string" != typeof j) throw Je("itkn", "Incorrect injection token! Expected service name as string, got {0}", j);
            f.push(c && c.hasOwnProperty(j) ? c[j] : d(j, e))
          }
          return f
        }

        function f(a) {
          return 11 >= Kd ? !1 : "function" == typeof a && /^(?:class\b|constructor\()/.test(_a(a))
        }

        function g(a, b, c, d) {
          "string" == typeof c && (d = c, c = null);
          var g = e(a, c, d);
          return Wd(a) && (a = a[a.length - 1]), f(a) ? (g.unshift(null), new(Function.prototype.bind.apply(a, g))) : a.apply(b, g)
        }

        function h(a, b, c) {
          var d = Wd(a) ? a[a.length - 1] : a,
            f = e(a, b, c);
          return f.unshift(null), new(Function.prototype.bind.apply(d, f))
        }
        return {
          invoke: g,
          instantiate: h,
          get: d,
          annotate: db.$$annotate,
          has: function(b) {
            return w.hasOwnProperty(b + q) || a.hasOwnProperty(b)
          }
        }
      }
      b = b === !0;
      var o = {},
        q = "Provider",
        s = [],
        u = new $a([], !0),
        w = {
          $provide: {
            provider: c(e),
            factory: c(h),
            service: c(i),
            value: c(j),
            constant: c(k),
            decorator: l
          }
        },
        x = w.$injector = n(w, function(a, b) {
          throw Ud.isString(b) && s.push(b), Je("unpr", "Unknown provider: {0}", s.join(" <- "))
        }),
        z = {},
        A = n(z, function(a, b) {
          var c = x.get(a + q, b);
          return B.invoke(c.$get, c, void 0, a)
        }),
        B = A;
      w["$injector" + q] = {
        $get: p(A)
      };
      var C = m(a);
      return B = A.get("$injector"), B.strictDi = b, d(C, function(a) {
        a && B.invoke(a)
      }), B
    }

    function eb() {
      var a = !0;
      this.disableAutoScrolling = function() {
        a = !1
      }, this.$get = ["$window", "$location", "$rootScope", function(b, c, d) {
        function e(a) {
          var b = null;
          return Array.prototype.some.call(a, function(a) {
            return "a" === L(a) ? (b = a, !0) : void 0
          }), b
        }

        function f() {
          var a = h.yOffset;
          if (y(a)) a = a();
          else if (J(a)) {
            var c = a[0],
              d = b.getComputedStyle(c);
            a = "fixed" !== d.position ? 0 : c.getBoundingClientRect().bottom
          } else w(a) || (a = 0);
          return a
        }

        function g(a) {
          if (a) {
            a.scrollIntoView();
            var c = f();
            if (c) {
              var d = a.getBoundingClientRect().top;
              b.scrollBy(0, d - c)
            }
          } else b.scrollTo(0, 0)
        }

        function h(a) {
          a = v(a) ? a : c.hash();
          var b;
          a ? (b = i.getElementById(a)) ? g(b) : (b = e(i.getElementsByName(a))) ? g(b) : "top" === a && g(null) : g(null)
        }
        var i = b.document;
        return a && d.$watch(function() {
          return c.hash()
        }, function(a, b) {
          (a !== b || "" !== a) && Sa(function() {
            d.$evalAsync(h)
          })
        }), h
      }]
    }

    function fb(a, b) {
      return a || b ? a ? b ? (Wd(a) && (a = a.join(" ")), Wd(b) && (b = b.join(" ")), a + " " + b) : a : b : ""
    }

    function gb(a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (c.nodeType === Le) return c
      }
    }

    function hb(a) {
      v(a) && (a = a.split(" "));
      var b = oa();
      return d(a, function(a) {
        a.length && (b[a] = !0)
      }), b
    }

    function ib(a) {
      return t(a) ? a : {}
    }

    function jb(a, b, c, e) {
      function f(a) {
        try {
          a.apply(null, Q(arguments, 1))
        } finally {
          if (s--, 0 === s)
            for (; t.length;) try {
              t.pop()()
            } catch (b) {
              c.error(b)
            }
        }
      }

      function g(a) {
        var b = a.indexOf("#");
        return -1 === b ? "" : a.substr(b)
      }

      function h() {
        y = null, i(), j()
      }

      function i() {
        u = z(), u = r(u) ? null : u, O(u, C) && (u = C), C = u
      }

      function j() {
        (w !== k.url() || v !== u) && (w = k.url(), v = u, d(A, function(a) {
          a(k.url(), u)
        }))
      }
      var k = this,
        l = a.location,
        m = a.history,
        o = a.setTimeout,
        p = a.clearTimeout,
        q = {};
      k.isMock = !1;
      var s = 0,
        t = [];
      k.$$completeOutstandingRequest = f, k.$$incOutstandingRequestCount = function() {
        s++
      }, k.notifyWhenNoOutstandingRequests = function(a) {
        0 === s ? a() : t.push(a)
      };
      var u, v, w = l.href,
        x = b.find("base"),
        y = null,
        z = e.history ? function() {
          try {
            return m.state
          } catch (a) {}
        } : n;
      i(), v = u, k.url = function(b, c, d) {
        if (r(d) && (d = null), l !== a.location && (l = a.location), m !== a.history && (m = a.history), b) {
          var f = v === d;
          if (w === b && (!e.history || f)) return k;
          var h = w && Rb(w) === Rb(b);
          return w = b, v = d, !e.history || h && f ? (h || (y = b), c ? l.replace(b) : h ? l.hash = g(b) : l.href = b, l.href !== b && (y = b)) : (m[c ? "replaceState" : "pushState"](d, "", b), i(), v = u), y && (y = b), k
        }
        return y || l.href.replace(/%27/g, "'")
      }, k.state = function() {
        return u
      };
      var A = [],
        B = !1,
        C = null;
      k.onUrlChange = function(b) {
        return B || (e.history && Ld(a).on("popstate", h), Ld(a).on("hashchange", h), B = !0), A.push(b), b
      }, k.$$applicationDestroyed = function() {
        Ld(a).off("hashchange popstate", h)
      }, k.$$checkUrlChange = j, k.baseHref = function() {
        var a = x.attr("href");
        return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
      }, k.defer = function(a, b) {
        var c;
        return s++, c = o(function() {
          delete q[c], f(a)
        }, b || 0), q[c] = !0, c
      }, k.defer.cancel = function(a) {
        return q[a] ? (delete q[a], p(a), f(n), !0) : !1
      }
    }

    function kb() {
      this.$get = ["$window", "$log", "$sniffer", "$document", function(a, b, c, d) {
        return new jb(a, d, b, c)
      }]
    }

    function lb() {
      this.$get = function() {
        function a(a, d) {
          function e(a) {
            a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null)
          }

          function f(a, b) {
            a != b && (a && (a.p = b), b && (b.n = a))
          }
          if (a in c) throw b("$cacheFactory")("iid", "CacheId '{0}' is already taken!", a);
          var g = 0,
            h = j({}, d, {
              id: a
            }),
            i = oa(),
            k = d && d.capacity || Number.MAX_VALUE,
            l = oa(),
            m = null,
            n = null;
          return c[a] = {
            put: function(a, b) {
              if (!r(b)) {
                if (k < Number.MAX_VALUE) {
                  var c = l[a] || (l[a] = {
                    key: a
                  });
                  e(c)
                }
                return a in i || g++, i[a] = b, g > k && this.remove(n.key), b
              }
            },
            get: function(a) {
              if (k < Number.MAX_VALUE) {
                var b = l[a];
                if (!b) return;
                e(b)
              }
              return i[a]
            },
            remove: function(a) {
              if (k < Number.MAX_VALUE) {
                var b = l[a];
                if (!b) return;
                b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete l[a]
              }
              a in i && (delete i[a], g--)
            },
            removeAll: function() {
              i = oa(), g = 0, l = oa(), m = n = null
            },
            destroy: function() {
              i = null, h = null, l = null, delete c[a]
            },
            info: function() {
              return j({}, h, {
                size: g
              })
            }
          }
        }
        var c = {};
        return a.info = function() {
          var a = {};
          return d(c, function(b, c) {
            a[c] = b.info()
          }), a
        }, a.get = function(a) {
          return c[a]
        }, a
      }
    }

    function mb() {
      this.$get = ["$cacheFactory", function(a) {
        return a("templates")
      }]
    }

    function nb() {}

    function ob(b, c) {
      function e(a, b, c) {
        var e = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,
          f = oa();
        return d(a, function(a, d) {
          if (a in A) return void(f[d] = A[a]);
          var g = a.match(e);
          if (!g) throw Te("iscp", "Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}", b, d, a, c ? "controller bindings definition" : "isolate scope definition");
          f[d] = {
            mode: g[1][0],
            collection: "*" === g[2],
            optional: "?" === g[3],
            attrName: g[4] || d
          }, g[4] && (A[a] = f[d])
        }), f
      }

      function g(a, b) {
        var c = {
          isolateScope: null,
          bindToController: null
        };
        if (t(a.scope) && (a.bindToController === !0 ? (c.bindToController = e(a.scope, b, !0), c.isolateScope = {}) : c.isolateScope = e(a.scope, b, !1)), t(a.bindToController) && (c.bindToController = e(a.bindToController, b, !0)), t(c.bindToController)) {
          var d = a.controller,
            f = a.controllerAs;
          if (!d) throw Te("noctrl", "Cannot bind to controller without directive '{0}'s controller.", b);
          if (!tb(d, f)) throw Te("noident", "Cannot bind to controller without identifier for directive '{0}'.", b)
        }
        return c
      }

      function h(a) {
        var b = a.charAt(0);
        if (!b || b !== Gd(b)) throw Te("baddir", "Directive/Component name '{0}' is invalid. The first character must be a lowercase letter", a);
        if (a !== a.trim()) throw Te("baddir", "Directive/Component name '{0}' is invalid. The name should not contain leading or trailing whitespaces", a)
      }

      function i(a) {
        var b = a.require || a.controller && a.name;
        return !Wd(b) && t(b) && d(b, function(a, c) {
          var d = a.match(x),
            e = a.substring(d[0].length);
          e || (b[c] = d[0] + c)
        }), b
      }
      var k = {},
        l = "Directive",
        q = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
        u = /(([\w\-]+)(?:\:([^;]+))?;?)/,
        w = K("ngSrc,ngSrcset,src,srcset"),
        x = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
        z = /^(on[a-z]+|formaction)$/,
        A = oa();
      this.directive = function E(a, c) {
        return la(a, "directive"), v(a) ? (h(a), ja(c, "directiveFactory"), k.hasOwnProperty(a) || (k[a] = [], b.factory(a + l, ["$injector", "$exceptionHandler", function(b, c) {
          var e = [];
          return d(k[a], function(d, f) {
            try {
              var g = b.invoke(d);
              y(g) ? g = {
                compile: p(g)
              } : !g.compile && g.link && (g.compile = p(g.link)), g.priority = g.priority || 0, g.index = f, g.name = g.name || a, g.require = i(g), g.restrict = g.restrict || "EA", g.$$moduleName = d.$$moduleName, e.push(g)
            } catch (h) {
              c(h)
            }
          }), e
        }])), k[a].push(c)) : d(a, f(E)), this
      }, this.component = function(a, b) {
        function c(a) {
          function c(b) {
            return y(b) || Wd(b) ? function(c, d) {
              return a.invoke(b, this, {
                $element: c,
                $attrs: d
              })
            } : b
          }
          var f = b.template || b.templateUrl ? b.template : "",
            g = {
              controller: e,
              controllerAs: tb(b.controller) || b.controllerAs || "$ctrl",
              template: c(f),
              templateUrl: c(b.templateUrl),
              transclude: b.transclude,
              scope: {},
              bindToController: b.bindings || {},
              restrict: "E",
              require: b.require
            };
          return d(b, function(a, b) {
            "$" === b.charAt(0) && (g[b] = a)
          }), g
        }
        var e = b.controller || function() {};
        return d(b, function(a, b) {
          "$" === b.charAt(0) && (c[b] = a, y(e) && (e[b] = a))
        }), c.$inject = ["$injector"], this.directive(a, c)
      }, this.aHrefSanitizationWhitelist = function(a) {
        return s(a) ? (c.aHrefSanitizationWhitelist(a), this) : c.aHrefSanitizationWhitelist()
      }, this.imgSrcSanitizationWhitelist = function(a) {
        return s(a) ? (c.imgSrcSanitizationWhitelist(a), this) : c.imgSrcSanitizationWhitelist()
      };
      var C = !0;
      this.debugInfoEnabled = function(a) {
        return s(a) ? (C = a, this) : C
      };
      var D = 10;
      this.onChangesTtl = function(a) {
        return arguments.length ? (D = a, this) : D
      }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function(b, c, e, f, h, i, p, A, E, G) {
        function H() {
          try {
            if (!--xa) throw ta = void 0, Te("infchng", "{0} $onChanges() iterations reached. Aborting!\n", D);
            p.$apply(function() {
              for (var a = [], b = 0, c = ta.length; c > b; ++b) try {
                ta[b]()
              } catch (d) {
                a.push(d)
              }
              if (ta = void 0, a.length) throw a
            })
          } finally {
            xa++
          }
        }

        function I(a, b) {
          if (b) {
            var c, d, e, f = Object.keys(b);
            for (c = 0, d = f.length; d > c; c++) e = f[c], this[e] = b[e]
          } else this.$attr = {};
          this.$$element = a
        }

        function J(a, b, c) {
          va.innerHTML = "<span " + b + ">";
          var d = va.firstChild.attributes,
            e = d[0];
          d.removeNamedItem(e.name), e.value = c, a.attributes.setNamedItem(e)
        }

        function K(a, b) {
          try {
            a.addClass(b)
          } catch (c) {}
        }

        function N(b, c, d, e, f) {
          b instanceof Ld || (b = Ld(b));
          for (var g = /\S+/, h = 0, i = b.length; i > h; h++) {
            var j = b[h];
            j.nodeType === ge && j.nodeValue.match(g) && Ca(j, b[h] = a.document.createElement("span"))
          }
          var k = S(b, c, b, d, e, f);
          N.$$addScopeClass(b);
          var l = null;
          return function(a, c, d) {
            ja(a, "scope"), f && f.needsNewScope && (a = a.$parent.$new()), d = d || {};
            var e = d.parentBoundTranscludeFn,
              g = d.transcludeControllers,
              h = d.futureParentElement;
            e && e.$$boundTransclude && (e = e.$$boundTransclude), l || (l = P(h));
            var i;
            if (i = "html" !== l ? Ld(la(l, Ld("<div>").append(b).html())) : c ? ze.clone.call(b) : b, g)
              for (var j in g) i.data("$" + j + "Controller", g[j].instance);
            return N.$$addScopeInfo(i, a), c && c(i, a), k && k(a, i, i, e), i
          }
        }

        function P(a) {
          var b = a && a[0];
          return b && "foreignobject" !== L(b) && Rd.call(b).match(/SVG/) ? "svg" : "html"
        }

        function S(a, b, c, d, e, f) {
          function g(a, c, d, e) {
            var f, g, h, i, j, k, l, m, p;
            if (n) {
              var q = c.length;
              for (p = new Array(q), j = 0; j < o.length; j += 3) l = o[j], p[l] = c[l]
            } else p = c;
            for (j = 0, k = o.length; k > j;) h = p[o[j++]], f = o[j++], g = o[j++], f ? (f.scope ? (i = a.$new(), N.$$addScopeInfo(Ld(h), i)) : i = a, m = f.transcludeOnThisElement ? T(a, f.transclude, e) : !f.templateOnThisElement && e ? e : !e && b ? T(a, b) : null, f(g, i, h, d, m)) : g && g(a, h.childNodes, void 0, e)
          }
          for (var h, i, j, k, l, m, n, o = [], p = 0; p < a.length; p++) h = new I, i = U(a[p], [], h, 0 === p ? d : void 0, e), j = i.length ? $(i, a[p], h, b, c, null, [], [], f) : null, j && j.scope && N.$$addScopeClass(h.$$element), l = j && j.terminal || !(k = a[p].childNodes) || !k.length ? null : S(k, j ? (j.transcludeOnThisElement || !j.templateOnThisElement) && j.transclude : b), (j || l) && (o.push(p, j, l), m = !0, n = n || j), f = null;
          return m ? g : null
        }

        function T(a, b, c) {
          function d(d, e, f, g, h) {
            return d || (d = a.$new(!1, h), d.$$transcluded = !0), b(d, e, {
              parentBoundTranscludeFn: c,
              transcludeControllers: f,
              futureParentElement: g
            })
          }
          var e = d.$$slots = oa();
          for (var f in b.$$slots) b.$$slots[f] ? e[f] = T(a, b.$$slots[f], c) : e[f] = null;
          return d
        }

        function U(a, b, c, d, e) {
          var f, g, h = a.nodeType,
            i = c.$attr;
          switch (h) {
            case ee:
              ca(b, qb(L(a)), "E", d, e);
              for (var j, k, l, m, n, o, p = a.attributes, q = 0, r = p && p.length; r > q; q++) {
                var s = !1,
                  w = !1;
                j = p[q], k = j.name, n = Yd(j.value), m = qb(k), (o = Ba.test(m)) && (k = k.replace(Ve, "").substr(8).replace(/_(.)/g, function(a, b) {
                  return b.toUpperCase()
                }));
                var x = m.match(Da);
                x && da(x[1]) && (s = k, w = k.substr(0, k.length - 5) + "end", k = k.substr(0, k.length - 6)), l = qb(k.toLowerCase()), i[l] = k, (o || !c.hasOwnProperty(l)) && (c[l] = n, Ta(a, l) && (c[l] = !0)), na(a, b, n, l, o), ca(b, l, "A", d, e, s, w)
              }
              if (g = a.className, t(g) && (g = g.animVal), v(g) && "" !== g)
                for (; f = u.exec(g);) l = qb(f[2]), ca(b, l, "C", d, e) && (c[l] = Yd(f[3])), g = g.substr(f.index + f[0].length);
              break;
            case ge:
              if (11 === Kd)
                for (; a.parentNode && a.nextSibling && a.nextSibling.nodeType === ge;) a.nodeValue = a.nodeValue + a.nextSibling.nodeValue, a.parentNode.removeChild(a.nextSibling);
              ka(b, a.nodeValue);
              break;
            case he:
              V(a, b, c, d, e)
          }
          return b.sort(ga), b
        }

        function V(a, b, c, d, e) {
          try {
            var f = q.exec(a.nodeValue);
            if (f) {
              var g = qb(f[1]);
              ca(b, g, "M", d, e) && (c[g] = Yd(f[2]))
            }
          } catch (h) {}
        }

        function W(a, b, c) {
          var d = [],
            e = 0;
          if (b && a.hasAttribute && a.hasAttribute(b)) {
            do {
              if (!a) throw Te("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
              a.nodeType == ee && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), a = a.nextSibling
            } while (e > 0)
          } else d.push(a);
          return Ld(d)
        }

        function X(a, b, c) {
          return function(d, e, f, g, h) {
            return e = W(e[0], b, c), a(d, e, f, g, h)
          }
        }

        function Z(a, b, c, d, e, f) {
          var g;
          return a ? N(b, c, d, e, f) : function() {
            return g || (g = N(b, c, d, e, f), b = c = f = null), g.apply(this, arguments)
          }
        }

        function $(a, b, c, f, g, h, i, k, l) {
          function m(a, b, c, d) {
            a && (c && (a = X(a, c, d)), a.require = o.require, a.directiveName = p, (z === o || o.$$isolateScope) && (a = qa(a, {
              isolateScope: !0
            })), i.push(a)), b && (c && (b = X(b, c, d)), b.require = o.require, b.directiveName = p, (z === o || o.$$isolateScope) && (b = qa(b, {
              isolateScope: !0
            })), k.push(b))
          }

          function n(a, f, g, h, l) {
            function m(a, b, c, d) {
              var e;
              if (B(a) || (d = c, c = b, b = a, a = void 0), F && (e = u), c || (c = F ? C.parent() : C), !d) return l(a, b, e, c, M);
              var f = l.$$slots[d];
              if (f) return f(a, b, e, c, M);
              if (r(f)) throw Te("noslot", 'No parent directive that requires a transclusion with slot name "{0}". Element: {1}', d, Y(C))
            }
            var n, o, p, q, s, u, v, C, D, E;
            b === g ? (D = c, C = c.$$element) : (C = Ld(g), D = new I(C, c)), s = f, z ? q = f.$new(!0) : w && (s = f.$parent), l && (v = m, v.$$boundTransclude = l, v.isSlotFilled = function(a) {
              return !!l.$$slots[a]
            }), x && (u = aa(C, D, v, x, q, f, z)), z && (N.$$addScopeInfo(C, q, !0, !(A && (A === z || A === z.$$originalDirective))), N.$$addScopeClass(C, !0), q.$$isolateBindings = z.$$isolateBindings, E = sa(f, D, q, q.$$isolateBindings, z), E.removeWatches && q.$on("$destroy", E.removeWatches));
            for (var G in u) {
              var H = x[G],
                J = u[G],
                K = H.$$bindings.bindToController;
              J.identifier && K ? J.bindingInfo = sa(s, D, J.instance, K, H) : J.bindingInfo = {};
              var L = J();
              L !== J.instance && (J.instance = L, C.data("$" + H.name + "Controller", L), J.bindingInfo.removeWatches && J.bindingInfo.removeWatches(), J.bindingInfo = sa(s, D, J.instance, K, H))
            }
            for (d(x, function(a, b) {
                var c = a.require;
                a.bindToController && !Wd(c) && t(c) && j(u[b].instance, _(b, c, C, u))
              }), d(u, function(a) {
                var b = a.instance;
                if (y(b.$onChanges)) try {
                  b.$onChanges(a.bindingInfo.initialChanges)
                } catch (c) {
                  e(c)
                }
                if (y(b.$onInit)) try {
                  b.$onInit()
                } catch (c) {
                  e(c)
                }
                y(b.$doCheck) && (s.$watch(function() {
                  b.$doCheck()
                }), b.$doCheck()), y(b.$onDestroy) && s.$on("$destroy", function() {
                  b.$onDestroy()
                })
              }), n = 0, o = i.length; o > n; n++) p = i[n], ra(p, p.isolateScope ? q : f, C, D, p.require && _(p.directiveName, p.require, C, u), v);
            var M = f;
            for (z && (z.template || null === z.templateUrl) && (M = q), a && a(M, g.childNodes, void 0, l), n = k.length - 1; n >= 0; n--) p = k[n], ra(p, p.isolateScope ? q : f, C, D, p.require && _(p.directiveName, p.require, C, u), v);
            d(u, function(a) {
              var b = a.instance;
              y(b.$postLink) && b.$postLink()
            })
          }
          l = l || {};
          for (var o, p, q, s, u, v = -Number.MAX_VALUE, w = l.newScopeDirective, x = l.controllerDirectives, z = l.newIsolateScopeDirective, A = l.templateDirective, C = l.nonTlbTranscludeDirective, D = !1, E = !1, F = l.hasElementTranscludeDirective, G = c.$$element = Ld(b), H = h, J = f, K = !1, M = !1, O = 0, P = a.length; P > O; O++) {
            o = a[O];
            var S = o.$$start,
              T = o.$$end;
            if (S && (G = W(b, S, T)), q = void 0, v > o.priority) break;
            if ((u = o.scope) && (o.templateUrl || (t(u) ? (ia("new/isolated scope", z || w, o, G), z = o) : ia("new/isolated scope", z, o, G)), w = w || o), p = o.name, !K && (o.replace && (o.templateUrl || o.template) || o.transclude && !o.$$tlb)) {
              for (var V, $ = O + 1; V = a[$++];)
                if (V.transclude && !V.$$tlb || V.replace && (V.templateUrl || V.template)) {
                  M = !0;
                  break
                }
              K = !0
            }
            if (!o.templateUrl && o.controller && (u = o.controller, x = x || oa(), ia("'" + p + "' controller", x[p], o, G), x[p] = o), u = o.transclude)
              if (D = !0, o.$$tlb || (ia("transclusion", C, o, G), C = o), "element" == u) F = !0, v = o.priority, q = G, G = c.$$element = Ld(N.$$createComment(p, c[p])), b = G[0], pa(g, Q(q), b), q[0].$$parentNode = q[0].parentNode, J = Z(M, q, f, v, H && H.name, {
                nonTlbTranscludeDirective: C
              });
              else {
                var ca = oa();
                if (q = Ld(Ea(b)).contents(), t(u)) {
                  q = [];
                  var da = oa(),
                    ga = oa();
                  d(u, function(a, b) {
                    var c = "?" === a.charAt(0);
                    a = c ? a.substring(1) : a, da[a] = b, ca[b] = null, ga[b] = c
                  }), d(G.contents(), function(a) {
                    var b = da[qb(L(a))];
                    b ? (ga[b] = !0, ca[b] = ca[b] || [], ca[b].push(a)) : q.push(a)
                  }), d(ga, function(a, b) {
                    if (!a) throw Te("reqslot", "Required transclusion slot `{0}` was not filled.", b)
                  });
                  for (var ha in ca) ca[ha] && (ca[ha] = Z(M, ca[ha], f))
                }
                G.empty(), J = Z(M, q, f, void 0, void 0, {
                  needsNewScope: o.$$isolateScope || o.$$newScope
                }), J.$$slots = ca
              }
            if (o.template)
              if (E = !0, ia("template", A, o, G), A = o, u = y(o.template) ? o.template(G, c) : o.template, u = Aa(u), o.replace) {
                if (H = o, q = wa(u) ? [] : sb(la(o.templateNamespace, Yd(u))), b = q[0], 1 != q.length || b.nodeType !== ee) throw Te("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", p, "");
                pa(g, G, b);
                var ja = {
                    $attr: {}
                  },
                  ka = U(b, [], ja),
                  ma = a.splice(O + 1, a.length - (O + 1));
                (z || w) && ba(ka, z, w), a = a.concat(ka).concat(ma), ea(c, ja), P = a.length
              } else G.html(u);
            if (o.templateUrl) E = !0, ia("template", A, o, G), A = o, o.replace && (H = o), n = fa(a.splice(O, a.length - O), G, c, g, D && J, i, k, {
              controllerDirectives: x,
              newScopeDirective: w !== o && w,
              newIsolateScopeDirective: z,
              templateDirective: A,
              nonTlbTranscludeDirective: C
            }), P = a.length;
            else if (o.compile) try {
              s = o.compile(G, c, J);
              var na = o.$$originalDirective || o;
              y(s) ? m(null, R(na, s), S, T) : s && m(R(na, s.pre), R(na, s.post), S, T)
            } catch (ta) {
              e(ta, Y(G))
            }
            o.terminal && (n.terminal = !0, v = Math.max(v, o.priority))
          }
          return n.scope = w && w.scope === !0, n.transcludeOnThisElement = D, n.templateOnThisElement = E, n.transclude = J, l.hasElementTranscludeDirective = F, n
        }

        function _(a, b, c, e) {
          var f;
          if (v(b)) {
            var g = b.match(x),
              h = b.substring(g[0].length),
              i = g[1] || g[3],
              j = "?" === g[2];
            if ("^^" === i ? c = c.parent() : (f = e && e[h], f = f && f.instance), !f) {
              var k = "$" + h + "Controller";
              f = i ? c.inheritedData(k) : c.data(k)
            }
            if (!f && !j) throw Te("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", h, a)
          } else if (Wd(b)) {
            f = [];
            for (var l = 0, m = b.length; m > l; l++) f[l] = _(a, b[l], c, e)
          } else t(b) && (f = {}, d(b, function(b, d) {
            f[d] = _(a, b, c, e)
          }));
          return f || null
        }

        function aa(a, b, c, d, e, f, g) {
          var h = oa();
          for (var j in d) {
            var k = d[j],
              l = {
                $scope: k === g || k.$$isolateScope ? e : f,
                $element: a,
                $attrs: b,
                $transclude: c
              },
              m = k.controller;
            "@" == m && (m = b[k.name]);
            var n = i(m, l, !0, k.controllerAs);
            h[k.name] = n, a.data("$" + k.name + "Controller", n.instance)
          }
          return h
        }

        function ba(a, b, c) {
          for (var d = 0, e = a.length; e > d; d++) a[d] = m(a[d], {
            $$isolateScope: b,
            $$newScope: c
          })
        }

        function ca(a, c, d, f, h, i, j) {
          if (c === h) return null;
          var n = null;
          if (k.hasOwnProperty(c))
            for (var o, p = b.get(c + l), q = 0, s = p.length; s > q; q++) try {
              if (o = p[q], (r(f) || f > o.priority) && -1 != o.restrict.indexOf(d)) {
                if (i && (o = m(o, {
                    $$start: i,
                    $$end: j
                  })), !o.$$bindings) {
                  var u = o.$$bindings = g(o, o.name);
                  t(u.isolateScope) && (o.$$isolateBindings = u.isolateScope)
                }
                a.push(o), n = o
              }
            } catch (v) {
              e(v)
            }
          return n
        }

        function da(a) {
          if (k.hasOwnProperty(a))
            for (var c, d = b.get(a + l), e = 0, f = d.length; f > e; e++)
              if (c = d[e], c.multiElement) return !0;
          return !1
        }

        function ea(a, b) {
          var c = b.$attr,
            e = a.$attr;
          a.$$element;
          d(a, function(d, e) {
            "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
          }), d(b, function(b, d) {
            a.hasOwnProperty(d) || "$" === d.charAt(0) || (a[d] = b, "class" !== d && "style" !== d && (e[d] = c[d]))
          })
        }

        function fa(a, b, c, e, g, h, i, j) {
          var k, l, n = [],
            o = b[0],
            p = a.shift(),
            q = m(p, {
              templateUrl: null,
              transclude: null,
              replace: null,
              $$originalDirective: p
            }),
            r = y(p.templateUrl) ? p.templateUrl(b, c) : p.templateUrl,
            s = p.templateNamespace;
          return b.empty(), f(r).then(function(f) {
              var m, u, v, w;
              if (f = Aa(f), p.replace) {
                if (v = wa(f) ? [] : sb(la(s, Yd(f))), m = v[0], 1 != v.length || m.nodeType !== ee) throw Te("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", p.name, r);
                u = {
                  $attr: {}
                }, pa(e, b, m);
                var x = U(m, [], u);
                t(p.scope) && ba(x, !0), a = x.concat(a), ea(c, u)
              } else m = o, b.html(f);
              for (a.unshift(q), k = $(a, m, c, g, b, p, h, i, j), d(e, function(a, c) {
                  a == m && (e[c] = b[0])
                }), l = S(b[0].childNodes, g); n.length;) {
                var y = n.shift(),
                  z = n.shift(),
                  A = n.shift(),
                  B = n.shift(),
                  C = b[0];
                if (!y.$$destroyed) {
                  if (z !== o) {
                    var D = z.className;
                    j.hasElementTranscludeDirective && p.replace || (C = Ea(m)), pa(A, Ld(z), C), K(Ld(C), D)
                  }
                  w = k.transcludeOnThisElement ? T(y, k.transclude, B) : B, k(l, y, C, e, w)
                }
              }
              n = null
            }),
            function(a, b, c, d, e) {
              var f = e;
              b.$$destroyed || (n ? n.push(b, c, d, f) : (k.transcludeOnThisElement && (f = T(b, k.transclude, e)), k(l, b, c, d, f)))
            }
        }

        function ga(a, b) {
          var c = b.priority - a.priority;
          return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
        }

        function ia(a, b, c, d) {
          function e(a) {
            return a ? " (module: " + a + ")" : ""
          }
          if (b) throw Te("multidir", "Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}", b.name, e(b.$$moduleName), c.name, e(c.$$moduleName), a, Y(d))
        }

        function ka(a, b) {
          var d = c(b, !0);
          d && a.push({
            priority: 0,
            compile: function(a) {
              var b = a.parent(),
                c = !!b.length;
              return c && N.$$addBindingClass(b),
                function(a, b) {
                  var e = b.parent();
                  c || N.$$addBindingClass(e), N.$$addBindingInfo(e, d.expressions), a.$watch(d, function(a) {
                    b[0].nodeValue = a
                  })
                }
            }
          })
        }

        function la(b, c) {
          switch (b = Gd(b || "html")) {
            case "svg":
            case "math":
              var d = a.document.createElement("div");
              return d.innerHTML = "<" + b + ">" + c + "</" + b + ">", d.childNodes[0].childNodes;
            default:
              return c
          }
        }

        function ma(a, b) {
          if ("srcdoc" == b) return A.HTML;
          var c = L(a);
          return "xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b) ? A.RESOURCE_URL : void 0;
        }

        function na(a, b, d, e, f) {
          var g = ma(a, e);
          f = w[e] || f;
          var h = c(d, !0, g, f);
          if (h) {
            if ("multiple" === e && "select" === L(a)) throw Te("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", Y(a));
            b.push({
              priority: 100,
              compile: function() {
                return {
                  pre: function(a, b, i) {
                    var j = i.$$observers || (i.$$observers = oa());
                    if (z.test(e)) throw Te("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                    var k = i[e];
                    k !== d && (h = k && c(k, !0, g, f), d = k), h && (i[e] = h(a), (j[e] || (j[e] = [])).$$inter = !0, (i.$$observers && i.$$observers[e].$$scope || a).$watch(h, function(a, b) {
                      "class" === e && a != b ? i.$updateClass(a, b) : i.$set(e, a)
                    }))
                  }
                }
              }
            })
          }
        }

        function pa(b, c, d) {
          var e, f, g = c[0],
            h = c.length,
            i = g.parentNode;
          if (b)
            for (e = 0, f = b.length; f > e; e++)
              if (b[e] == g) {
                b[e++] = d;
                for (var j = e, k = j + h - 1, l = b.length; l > j; j++, k++) l > k ? b[j] = b[k] : delete b[j];
                b.length -= h - 1, b.context === g && (b.context = d);
                break
              }
          i && i.replaceChild(d, g);
          var m = a.document.createDocumentFragment();
          for (e = 0; h > e; e++) m.appendChild(c[e]);
          for (Ld.hasData(g) && (Ld.data(d, Ld.data(g)), Ld(g).off("$destroy")), Ld.cleanData(m.querySelectorAll("*")), e = 1; h > e; e++) delete c[e];
          c[0] = d, c.length = 1
        }

        function qa(a, b) {
          return j(function() {
            return a.apply(null, arguments)
          }, a, b)
        }

        function ra(a, b, c, d, f, g) {
          try {
            a(b, c, d, f, g)
          } catch (h) {
            e(h, Y(c))
          }
        }

        function sa(a, b, e, f, g) {
          function i(b, c, d) {
            y(e.$onChanges) && c !== d && (ta || (a.$$postDigest(H), ta = []), k || (k = {}, ta.push(j)), k[b] && (d = k[b].previousValue), k[b] = new pb(d, c))
          }

          function j() {
            e.$onChanges(k), k = void 0
          }
          var k, l = [],
            m = {};
          return d(f, function(d, f) {
            var j, k, o, p, q, r = d.attrName,
              s = d.optional,
              t = d.mode;
            switch (t) {
              case "@":
                s || Fd.call(b, r) || (e[f] = b[r] = void 0), b.$observe(r, function(a) {
                  if (v(a) || F(a)) {
                    var b = e[f];
                    i(f, a, b), e[f] = a
                  }
                }), b.$$observers[r].$$scope = a, j = b[r], v(j) ? e[f] = c(j)(a) : F(j) && (e[f] = j), m[f] = new pb(Ue, e[f]);
                break;
              case "=":
                if (!Fd.call(b, r)) {
                  if (s) break;
                  b[r] = void 0
                }
                if (s && !b[r]) break;
                k = h(b[r]), p = k.literal ? O : function(a, b) {
                  return a === b || a !== a && b !== b
                }, o = k.assign || function() {
                  throw j = e[f] = k(a), Te("nonassign", "Expression '{0}' in attribute '{1}' used with directive '{2}' is non-assignable!", b[r], r, g.name)
                }, j = e[f] = k(a);
                var u = function(b) {
                  return p(b, e[f]) || (p(b, j) ? o(a, b = e[f]) : e[f] = b), j = b
                };
                u.$stateful = !0, q = d.collection ? a.$watchCollection(b[r], u) : a.$watch(h(b[r], u), null, k.literal), l.push(q);
                break;
              case "<":
                if (!Fd.call(b, r)) {
                  if (s) break;
                  b[r] = void 0
                }
                if (s && !b[r]) break;
                k = h(b[r]);
                var w = e[f] = k(a);
                m[f] = new pb(Ue, e[f]), q = a.$watch(k, function(a, b) {
                  if (b === a) {
                    if (b === w) return;
                    b = w
                  }
                  i(f, a, b), e[f] = a
                }, k.literal), l.push(q);
                break;
              case "&":
                if (k = b.hasOwnProperty(r) ? h(b[r]) : n, k === n && s) break;
                e[f] = function(b) {
                  return k(a, b)
                }
            }
          }), {
            initialChanges: m,
            removeWatches: l.length && function() {
              for (var a = 0, b = l.length; b > a; ++a) l[a]()
            }
          }
        }
        var ta, ua = /^\w/,
          va = a.document.createElement("div"),
          xa = D;
        I.prototype = {
          $normalize: qb,
          $addClass: function(a) {
            a && a.length > 0 && E.addClass(this.$$element, a)
          },
          $removeClass: function(a) {
            a && a.length > 0 && E.removeClass(this.$$element, a)
          },
          $updateClass: function(a, b) {
            var c = rb(a, b);
            c && c.length && E.addClass(this.$$element, c);
            var d = rb(b, a);
            d && d.length && E.removeClass(this.$$element, d)
          },
          $set: function(a, b, c, f) {
            var g, h = this.$$element[0],
              i = Ta(h, a),
              j = Ua(a),
              k = a;
            if (i ? (this.$$element.prop(a, b), f = i) : j && (this[j] = b, k = j), this[a] = b, f ? this.$attr[a] = f : (f = this.$attr[a], f || (this.$attr[a] = f = ha(a, "-"))), g = L(this.$$element), "a" === g && ("href" === a || "xlinkHref" === a) || "img" === g && "src" === a) this[a] = b = G(b, "src" === a);
            else if ("img" === g && "srcset" === a && s(b)) {
              for (var l = "", m = Yd(b), n = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, o = /\s/.test(m) ? n : /(,)/, p = m.split(o), q = Math.floor(p.length / 2), t = 0; q > t; t++) {
                var u = 2 * t;
                l += G(Yd(p[u]), !0), l += " " + Yd(p[u + 1])
              }
              var v = Yd(p[2 * t]).split(/\s/);
              l += G(Yd(v[0]), !0), 2 === v.length && (l += " " + Yd(v[1])), this[a] = b = l
            }
            c !== !1 && (null === b || r(b) ? this.$$element.removeAttr(f) : ua.test(f) ? this.$$element.attr(f, b) : J(this.$$element[0], f, b));
            var w = this.$$observers;
            w && d(w[k], function(a) {
              try {
                a(b)
              } catch (c) {
                e(c)
              }
            })
          },
          $observe: function(a, b) {
            var c = this,
              d = c.$$observers || (c.$$observers = oa()),
              e = d[a] || (d[a] = []);
            return e.push(b), p.$evalAsync(function() {
                e.$$inter || !c.hasOwnProperty(a) || r(c[a]) || b(c[a])
              }),
              function() {
                M(e, b)
              }
          }
        };
        var ya = c.startSymbol(),
          za = c.endSymbol(),
          Aa = "{{" == ya && "}}" == za ? o : function(a) {
            return a.replace(/\{\{/g, ya).replace(/}}/g, za)
          },
          Ba = /^ngAttr[A-Z]/,
          Da = /^(.+)Start$/;
        return N.$$addBindingInfo = C ? function(a, b) {
          var c = a.data("$binding") || [];
          Wd(b) ? c = c.concat(b) : c.push(b), a.data("$binding", c)
        } : n, N.$$addBindingClass = C ? function(a) {
          K(a, "ng-binding")
        } : n, N.$$addScopeInfo = C ? function(a, b, c, d) {
          var e = c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
          a.data(e, b)
        } : n, N.$$addScopeClass = C ? function(a, b) {
          K(a, b ? "ng-isolate-scope" : "ng-scope")
        } : n, N.$$createComment = function(b, c) {
          var d = "";
          return C && (d = " " + (b || "") + ": ", c && (d += c + " ")), a.document.createComment(d)
        }, N
      }]
    }

    function pb(a, b) {
      this.previousValue = a, this.currentValue = b
    }

    function qb(a) {
      return va(a.replace(Ve, ""))
    }

    function rb(a, b) {
      var c = "",
        d = a.split(/\s+/),
        e = b.split(/\s+/);
      a: for (var f = 0; f < d.length; f++) {
        for (var g = d[f], h = 0; h < e.length; h++)
          if (g == e[h]) continue a;
        c += (c.length > 0 ? " " : "") + g
      }
      return c
    }

    function sb(a) {
      a = Ld(a);
      var b = a.length;
      if (1 >= b) return a;
      for (; b--;) {
        var c = a[b];
        c.nodeType === he && Pd.call(a, b, 1)
      }
      return a
    }

    function tb(a, b) {
      if (b && v(b)) return b;
      if (v(a)) {
        var c = Xe.exec(a);
        if (c) return c[3]
      }
    }

    function ub() {
      var a = {},
        c = !1;
      this.has = function(b) {
        return a.hasOwnProperty(b)
      }, this.register = function(b, c) {
        la(b, "controller"), t(b) ? j(a, b) : a[b] = c
      }, this.allowGlobals = function() {
        c = !0
      }, this.$get = ["$injector", "$window", function(d, e) {
        function f(a, c, d, e) {
          if (!a || !t(a.$scope)) throw b("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", e, c);
          a.$scope[c] = d
        }
        return function(b, g, h, i) {
          var k, l, m, n;
          if (h = h === !0, i && v(i) && (n = i), v(b)) {
            if (l = b.match(Xe), !l) throw We("ctrlfmt", "Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.", b);
            m = l[1], n = n || l[3], b = a.hasOwnProperty(m) ? a[m] : ma(g.$scope, m, !0) || (c ? ma(e, m, !0) : void 0), ka(b, m, !0)
          }
          if (h) {
            var o = (Wd(b) ? b[b.length - 1] : b).prototype;
            k = Object.create(o || null), n && f(g, n, k, m || b.name);
            var p;
            return p = j(function() {
              var a = d.invoke(b, k, g, m);
              return a !== k && (t(a) || y(a)) && (k = a, n && f(g, n, k, m || b.name)), k
            }, {
              instance: k,
              identifier: n
            })
          }
          return k = d.instantiate(b, g, m), n && f(g, n, k, m || b.name), k
        }
      }]
    }

    function vb() {
      this.$get = ["$window", function(a) {
        return Ld(a.document)
      }]
    }

    function wb() {
      this.$get = ["$log", function(a) {
        return function(b, c) {
          a.error.apply(a, arguments)
        }
      }]
    }

    function xb(a) {
      return t(a) ? x(a) ? a.toISOString() : T(a) : a
    }

    function yb() {
      this.$get = function() {
        return function(a) {
          if (!a) return "";
          var b = [];
          return e(a, function(a, c) {
            null === a || r(a) || (Wd(a) ? d(a, function(a) {
              b.push(ba(c) + "=" + ba(xb(a)))
            }) : b.push(ba(c) + "=" + ba(xb(a))))
          }), b.join("&")
        }
      }
    }

    function zb() {
      this.$get = function() {
        return function(a) {
          function b(a, f, g) {
            null === a || r(a) || (Wd(a) ? d(a, function(a, c) {
              b(a, f + "[" + (t(a) ? c : "") + "]")
            }) : t(a) && !x(a) ? e(a, function(a, c) {
              b(a, f + (g ? "" : "[") + c + (g ? "" : "]"))
            }) : c.push(ba(f) + "=" + ba(xb(a))))
          }
          if (!a) return "";
          var c = [];
          return b(a, "", !0), c.join("&")
        }
      }
    }

    function Ab(a, b) {
      if (v(a)) {
        var c = a.replace(bf, "").trim();
        if (c) {
          var d = b("Content-Type");
          (d && 0 === d.indexOf(Ze) || Bb(c)) && (a = U(c))
        }
      }
      return a
    }

    function Bb(a) {
      var b = a.match(_e);
      return b && af[b[0]].test(a)
    }

    function Cb(a) {
      function b(a, b) {
        a && (e[a] = e[a] ? e[a] + ", " + b : b)
      }
      var c, e = oa();
      return v(a) ? d(a.split("\n"), function(a) {
        c = a.indexOf(":"), b(Gd(Yd(a.substr(0, c))), Yd(a.substr(c + 1)))
      }) : t(a) && d(a, function(a, c) {
        b(Gd(c), Yd(a))
      }), e
    }

    function Db(a) {
      var b;
      return function(c) {
        if (b || (b = Cb(a)), c) {
          var d = b[Gd(c)];
          return void 0 === d && (d = null), d
        }
        return b
      }
    }

    function Eb(a, b, c, e) {
      return y(e) ? e(a, b, c) : (d(e, function(d) {
        a = d(a, b, c)
      }), a)
    }

    function Fb(a) {
      return a >= 200 && 300 > a
    }

    function Gb() {
      var a = this.defaults = {
          transformResponse: [Ab],
          transformRequest: [function(a) {
            return !t(a) || C(a) || E(a) || D(a) ? a : T(a)
          }],
          headers: {
            common: {
              Accept: "application/json, text/plain, */*"
            },
            post: qa($e),
            put: qa($e),
            patch: qa($e)
          },
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          paramSerializer: "$httpParamSerializer"
        },
        c = !1;
      this.useApplyAsync = function(a) {
        return s(a) ? (c = !!a, this) : c
      };
      var e = !0;
      this.useLegacyPromiseExtensions = function(a) {
        return s(a) ? (e = !!a, this) : e
      };
      var f = this.interceptors = [];
      this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function(g, h, i, k, l, m) {
        function n(c) {
          function f(a, b) {
            for (var c = 0, d = b.length; d > c;) {
              var e = b[c++],
                f = b[c++];
              a = a.then(e, f)
            }
            return b.length = 0, a
          }

          function g(a, b) {
            var c, e = {};
            return d(a, function(a, d) {
              y(a) ? (c = a(b), null != c && (e[d] = c)) : e[d] = a
            }), e
          }

          function h(b) {
            var c, d, e, f = a.headers,
              h = j({}, b.headers);
            f = j({}, f.common, f[Gd(b.method)]);
            a: for (c in f) {
              d = Gd(c);
              for (e in h)
                if (Gd(e) === d) continue a;
              h[c] = f[c]
            }
            return g(h, qa(b))
          }

          function i(b) {
            var c = b.headers,
              e = Eb(b.data, Db(c), void 0, b.transformRequest);
            return r(e) && d(c, function(a, b) {
              "content-type" === Gd(b) && delete c[b]
            }), r(b.withCredentials) && !r(a.withCredentials) && (b.withCredentials = a.withCredentials), q(b, e).then(k, k)
          }

          function k(a) {
            var b = j({}, a);
            return b.data = Eb(a.data, a.headers, a.status, n.transformResponse), Fb(a.status) ? b : l.reject(b)
          }
          if (!t(c)) throw b("$http")("badreq", "Http request configuration must be an object.  Received: {0}", c);
          if (!v(c.url)) throw b("$http")("badreq", "Http request configuration url must be a string.  Received: {0}", c.url);
          var n = j({
            method: "get",
            transformRequest: a.transformRequest,
            transformResponse: a.transformResponse,
            paramSerializer: a.paramSerializer
          }, c);
          n.headers = h(c), n.method = Hd(n.method), n.paramSerializer = v(n.paramSerializer) ? m.get(n.paramSerializer) : n.paramSerializer;
          var o = [],
            p = [],
            s = l.when(n);
          return d(x, function(a) {
            (a.request || a.requestError) && o.unshift(a.request, a.requestError), (a.response || a.responseError) && p.push(a.response, a.responseError)
          }), s = f(s, o), s = s.then(i), s = f(s, p), e ? (s.success = function(a) {
            return ka(a, "fn"), s.then(function(b) {
              a(b.data, b.status, b.headers, n)
            }), s
          }, s.error = function(a) {
            return ka(a, "fn"), s.then(null, function(b) {
              a(b.data, b.status, b.headers, n)
            }), s
          }) : (s.success = df("success"), s.error = df("error")), s
        }

        function o(a) {
          d(arguments, function(a) {
            n[a] = function(b, c) {
              return n(j({}, c || {}, {
                method: a,
                url: b
              }))
            }
          })
        }

        function p(a) {
          d(arguments, function(a) {
            n[a] = function(b, c, d) {
              return n(j({}, d || {}, {
                method: a,
                url: b,
                data: c
              }))
            }
          })
        }

        function q(b, e) {
          function f(a) {
            if (a) {
              var b = {};
              return d(a, function(a, d) {
                b[d] = function(b) {
                  function d() {
                    a(b)
                  }
                  c ? k.$applyAsync(d) : k.$$phase ? d() : k.$apply(d)
                }
              }), b
            }
          }

          function i(a, b, d, e) {
            function f() {
              j(b, a, d, e)
            }
            p && (Fb(a) ? p.put(z, [a, b, Cb(d), e]) : p.remove(z)), c ? k.$applyAsync(f) : (f(), k.$$phase || k.$apply())
          }

          function j(a, c, d, e) {
            c = c >= -1 ? c : 0, (Fb(c) ? v.resolve : v.reject)({
              data: a,
              status: c,
              headers: Db(d),
              config: b,
              statusText: e
            })
          }

          function m(a) {
            j(a.data, a.status, qa(a.headers()), a.statusText)
          }

          function o() {
            var a = n.pendingRequests.indexOf(b); - 1 !== a && n.pendingRequests.splice(a, 1)
          }
          var p, q, v = l.defer(),
            x = v.promise,
            y = b.headers,
            z = u(b.url, b.paramSerializer(b.params));
          if (n.pendingRequests.push(b), x.then(o, o), !b.cache && !a.cache || b.cache === !1 || "GET" !== b.method && "JSONP" !== b.method || (p = t(b.cache) ? b.cache : t(a.cache) ? a.cache : w), p && (q = p.get(z), s(q) ? G(q) ? q.then(m, m) : Wd(q) ? j(q[1], q[0], qa(q[2]), q[3]) : j(q, 200, {}, "OK") : p.put(z, x)), r(q)) {
            var A = Ic(b.url) ? h()[b.xsrfCookieName || a.xsrfCookieName] : void 0;
            A && (y[b.xsrfHeaderName || a.xsrfHeaderName] = A), g(b.method, z, e, i, y, b.timeout, b.withCredentials, b.responseType, f(b.eventHandlers), f(b.uploadEventHandlers))
          }
          return x
        }

        function u(a, b) {
          return b.length > 0 && (a += (-1 == a.indexOf("?") ? "?" : "&") + b), a
        }
        var w = i("$http");
        a.paramSerializer = v(a.paramSerializer) ? m.get(a.paramSerializer) : a.paramSerializer;
        var x = [];
        return d(f, function(a) {
          x.unshift(v(a) ? m.get(a) : m.invoke(a))
        }), n.pendingRequests = [], o("get", "delete", "head", "jsonp"), p("post", "put", "patch"), n.defaults = a, n
      }]
    }

    function Hb() {
      this.$get = function() {
        return function() {
          return new a.XMLHttpRequest
        }
      }
    }

    function Ib() {
      this.$get = ["$browser", "$jsonpCallbacks", "$document", "$xhrFactory", function(a, b, c, d) {
        return Jb(a, d, a.defer, b, c[0])
      }]
    }

    function Jb(a, b, c, e, f) {
      function g(a, b, c) {
        a = a.replace("JSON_CALLBACK", b);
        var d = f.createElement("script"),
          g = null;
        return d.type = "text/javascript", d.src = a, d.async = !0, g = function(a) {
          oe(d, "load", g), oe(d, "error", g), f.body.removeChild(d), d = null;
          var h = -1,
            i = "unknown";
          a && ("load" !== a.type || e.wasCalled(b) || (a = {
            type: "error"
          }), i = a.type, h = "error" === a.type ? 404 : 200), c && c(h, i)
        }, ne(d, "load", g), ne(d, "error", g), f.body.appendChild(d), g
      }
      return function(f, h, i, j, k, l, m, o, p, q) {
        function t() {
          w && w(), x && x.abort()
        }

        function u(b, d, e, f, g) {
          s(A) && c.cancel(A), w = x = null, b(d, e, f, g), a.$$completeOutstandingRequest(n)
        }
        if (a.$$incOutstandingRequestCount(), h = h || a.url(), "jsonp" === Gd(f)) var v = e.createCallback(h),
          w = g(h, v, function(a, b) {
            var c = 200 === a && e.getResponse(v);
            u(j, a, c, "", b), e.removeCallback(v)
          });
        else {
          var x = b(f, h);
          x.open(f, h, !0), d(k, function(a, b) {
            s(a) && x.setRequestHeader(b, a)
          }), x.onload = function() {
            var a = x.statusText || "",
              b = "response" in x ? x.response : x.responseText,
              c = 1223 === x.status ? 204 : x.status;
            0 === c && (c = b ? 200 : "file" == Hc(h).protocol ? 404 : 0), u(j, c, b, x.getAllResponseHeaders(), a)
          };
          var y = function() {
            u(j, -1, null, null, "")
          };
          if (x.onerror = y, x.onabort = y, d(p, function(a, b) {
              x.addEventListener(b, a)
            }), d(q, function(a, b) {
              x.upload.addEventListener(b, a)
            }), m && (x.withCredentials = !0), o) try {
            x.responseType = o
          } catch (z) {
            if ("json" !== o) throw z
          }
          x.send(r(i) ? null : i)
        }
        if (l > 0) var A = c(t, l);
        else G(l) && l.then(t)
      }
    }

    function Kb() {
      var a = "{{",
        b = "}}";
      this.startSymbol = function(b) {
        return b ? (a = b, this) : a
      }, this.endSymbol = function(a) {
        return a ? (b = a, this) : b
      }, this.$get = ["$parse", "$exceptionHandler", "$sce", function(c, d, e) {
        function f(a) {
          return "\\\\\\" + a
        }

        function g(c) {
          return c.replace(n, a).replace(o, b)
        }

        function h(a) {
          if (null == a) return "";
          switch (typeof a) {
            case "string":
              break;
            case "number":
              a = "" + a;
              break;
            default:
              a = T(a)
          }
          return a
        }

        function i(a, b, c, d) {
          var e;
          return e = a.$watch(function(a) {
            return e(), d(a)
          }, b, c)
        }

        function k(f, k, n, o) {
          function q(a) {
            try {
              return a = G(a), o && !s(a) ? a : h(a)
            } catch (b) {
              d(ef.interr(f, b))
            }
          }
          if (!f.length || -1 === f.indexOf(a)) {
            var t;
            if (!k) {
              var u = g(f);
              t = p(u), t.exp = f, t.expressions = [], t.$$watchDelegate = i
            }
            return t
          }
          o = !!o;
          for (var v, w, x, z = 0, A = [], B = [], C = f.length, D = [], E = []; C > z;) {
            if (-1 == (v = f.indexOf(a, z)) || -1 == (w = f.indexOf(b, v + l))) {
              z !== C && D.push(g(f.substring(z)));
              break
            }
            z !== v && D.push(g(f.substring(z, v))), x = f.substring(v + l, w), A.push(x), B.push(c(x, q)), z = w + m, E.push(D.length), D.push("")
          }
          if (n && D.length > 1 && ef.throwNoconcat(f), !k || A.length) {
            var F = function(a) {
                for (var b = 0, c = A.length; c > b; b++) {
                  if (o && r(a[b])) return;
                  D[E[b]] = a[b]
                }
                return D.join("")
              },
              G = function(a) {
                return n ? e.getTrusted(n, a) : e.valueOf(a)
              };
            return j(function(a) {
              var b = 0,
                c = A.length,
                e = new Array(c);
              try {
                for (; c > b; b++) e[b] = B[b](a);
                return F(e)
              } catch (g) {
                d(ef.interr(f, g))
              }
            }, {
              exp: f,
              expressions: A,
              $$watchDelegate: function(a, b) {
                var c;
                return a.$watchGroup(B, function(d, e) {
                  var f = F(d);
                  y(b) && b.call(this, f, d !== e ? c : f, a), c = f
                })
              }
            })
          }
        }
        var l = a.length,
          m = b.length,
          n = new RegExp(a.replace(/./g, f), "g"),
          o = new RegExp(b.replace(/./g, f), "g");
        return k.startSymbol = function() {
          return a
        }, k.endSymbol = function() {
          return b
        }, k
      }]
    }

    function Lb() {
      this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function(a, b, c, d, e) {
        function f(f, h, i, j) {
          function k() {
            l ? f.apply(null, m) : f(p)
          }
          var l = arguments.length > 4,
            m = l ? Q(arguments, 4) : [],
            n = b.setInterval,
            o = b.clearInterval,
            p = 0,
            q = s(j) && !j,
            r = (q ? d : c).defer(),
            t = r.promise;
          return i = s(i) ? i : 0, t.$$intervalId = n(function() {
            q ? e.defer(k) : a.$evalAsync(k), r.notify(p++), i > 0 && p >= i && (r.resolve(p), o(t.$$intervalId), delete g[t.$$intervalId]), q || a.$apply()
          }, h), g[t.$$intervalId] = r, t
        }
        var g = {};
        return f.cancel = function(a) {
          return a && a.$$intervalId in g ? (g[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete g[a.$$intervalId], !0) : !1
        }, f
      }]
    }

    function Mb(a) {
      for (var b = a.split("/"), c = b.length; c--;) b[c] = aa(b[c]);
      return b.join("/")
    }

    function Nb(a, b) {
      var c = Hc(a);
      b.$$protocol = c.protocol, b.$$host = c.hostname, b.$$port = l(c.port) || hf[c.protocol] || null
    }

    function Ob(a, b) {
      var c = "/" !== a.charAt(0);
      c && (a = "/" + a);
      var d = Hc(a);
      b.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname), b.$$search = $(d.search), b.$$hash = decodeURIComponent(d.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
    }

    function Pb(a, b) {
      return 0 === a.lastIndexOf(b, 0)
    }

    function Qb(a, b) {
      return Pb(b, a) ? b.substr(a.length) : void 0
    }

    function Rb(a) {
      var b = a.indexOf("#");
      return -1 == b ? a : a.substr(0, b)
    }

    function Sb(a) {
      return a.replace(/(#.+)|#$/, "$1")
    }

    function Tb(a) {
      return a.substr(0, Rb(a).lastIndexOf("/") + 1)
    }

    function Ub(a) {
      return a.substring(0, a.indexOf("/", a.indexOf("//") + 2))
    }

    function Vb(a, b, c) {
      this.$$html5 = !0, c = c || "", Nb(a, this), this.$$parse = function(a) {
        var c = Qb(b, a);
        if (!v(c)) throw jf("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', a, b);
        Ob(c, this), this.$$path || (this.$$path = "/"), this.$$compose()
      }, this.$$compose = function() {
        var a = _(this.$$search),
          c = this.$$hash ? "#" + aa(this.$$hash) : "";
        this.$$url = Mb(this.$$path) + (a ? "?" + a : "") + c, this.$$absUrl = b + this.$$url.substr(1)
      }, this.$$parseLinkUrl = function(d, e) {
        if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
        var f, g, h;
        return s(f = Qb(a, d)) ? (g = f, h = s(f = Qb(c, f)) ? b + (Qb("/", f) || f) : a + g) : s(f = Qb(b, d)) ? h = b + f : b == d + "/" && (h = b), h && this.$$parse(h), !!h
      }
    }

    function Wb(a, b, c) {
      Nb(a, this), this.$$parse = function(d) {
        function e(a, b, c) {
          var d, e = /^\/[A-Z]:(\/.*)/;
          return Pb(b, c) && (b = b.replace(c, "")), e.exec(b) ? a : (d = e.exec(a), d ? d[1] : a)
        }
        var f, g = Qb(a, d) || Qb(b, d);
        r(g) || "#" !== g.charAt(0) ? this.$$html5 ? f = g : (f = "", r(g) && (a = d, this.replace())) : (f = Qb(c, g), r(f) && (f = g)), Ob(f, this), this.$$path = e(this.$$path, f, a), this.$$compose()
      }, this.$$compose = function() {
        var b = _(this.$$search),
          d = this.$$hash ? "#" + aa(this.$$hash) : "";
        this.$$url = Mb(this.$$path) + (b ? "?" + b : "") + d, this.$$absUrl = a + (this.$$url ? c + this.$$url : "")
      }, this.$$parseLinkUrl = function(b, c) {
        return Rb(a) == Rb(b) ? (this.$$parse(b), !0) : !1
      }
    }

    function Xb(a, b, c) {
      this.$$html5 = !0, Wb.apply(this, arguments), this.$$parseLinkUrl = function(d, e) {
        if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
        var f, g;
        return a == Rb(d) ? f = d : (g = Qb(b, d)) ? f = a + c + g : b === d + "/" && (f = b), f && this.$$parse(f), !!f
      }, this.$$compose = function() {
        var b = _(this.$$search),
          d = this.$$hash ? "#" + aa(this.$$hash) : "";
        this.$$url = Mb(this.$$path) + (b ? "?" + b : "") + d, this.$$absUrl = a + c + this.$$url
      }
    }

    function Yb(a) {
      return function() {
        return this[a]
      }
    }

    function Zb(a, b) {
      return function(c) {
        return r(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
      }
    }

    function $b() {
      var a = "",
        b = {
          enabled: !1,
          requireBase: !0,
          rewriteLinks: !0
        };
      this.hashPrefix = function(b) {
        return s(b) ? (a = b, this) : a
      }, this.html5Mode = function(a) {
        return F(a) ? (b.enabled = a, this) : t(a) ? (F(a.enabled) && (b.enabled = a.enabled), F(a.requireBase) && (b.requireBase = a.requireBase), F(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b
      }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function(c, d, e, f, g) {
        function h(a, b, c) {
          var e = j.url(),
            f = j.$$state;
          try {
            d.url(a, b, c), j.$$state = d.state()
          } catch (g) {
            throw j.url(e), j.$$state = f, g
          }
        }

        function i(a, b) {
          c.$broadcast("$locationChangeSuccess", j.absUrl(), a, j.$$state, b)
        }
        var j, k, l, m = d.baseHref(),
          n = d.url();
        if (b.enabled) {
          if (!m && b.requireBase) throw jf("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
          l = Ub(n) + (m || "/"), k = e.history ? Vb : Xb
        } else l = Rb(n), k = Wb;
        var o = Tb(l);
        j = new k(l, o, "#" + a), j.$$parseLinkUrl(n, n), j.$$state = d.state();
        var p = /^\s*(javascript|mailto):/i;
        f.on("click", function(a) {
          if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
            for (var e = Ld(a.target);
              "a" !== L(e[0]);)
              if (e[0] === f[0] || !(e = e.parent())[0]) return;
            var h = e.prop("href"),
              i = e.attr("href") || e.attr("xlink:href");
            t(h) && "[object SVGAnimatedString]" === h.toString() && (h = Hc(h.animVal).href), p.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || j.$$parseLinkUrl(h, i) && (a.preventDefault(), j.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0))
          }
        }), Sb(j.absUrl()) != Sb(n) && d.url(j.absUrl(), !0);
        var q = !0;
        return d.onUrlChange(function(a, b) {
          return r(Qb(o, a)) ? void(g.location.href = a) : (c.$evalAsync(function() {
            var d, e = j.absUrl(),
              f = j.$$state;
            a = Sb(a), j.$$parse(a), j.$$state = b, d = c.$broadcast("$locationChangeStart", a, e, b, f).defaultPrevented, j.absUrl() === a && (d ? (j.$$parse(e), j.$$state = f, h(e, !1, f)) : (q = !1, i(e, f)))
          }), void(c.$$phase || c.$digest()))
        }), c.$watch(function() {
          var a = Sb(d.url()),
            b = Sb(j.absUrl()),
            f = d.state(),
            g = j.$$replace,
            k = a !== b || j.$$html5 && e.history && f !== j.$$state;
          (q || k) && (q = !1, c.$evalAsync(function() {
            var b = j.absUrl(),
              d = c.$broadcast("$locationChangeStart", b, a, j.$$state, f).defaultPrevented;
            j.absUrl() === b && (d ? (j.$$parse(a), j.$$state = f) : (k && h(b, g, f === j.$$state ? null : j.$$state), i(a, f)))
          })), j.$$replace = !1
        }), j
      }]
    }

    function _b() {
      var a = !0,
        b = this;
      this.debugEnabled = function(b) {
        return s(b) ? (a = b, this) : a
      }, this.$get = ["$window", function(c) {
        function e(a) {
          return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), a
        }

        function f(a) {
          var b = c.console || {},
            f = b[a] || b.log || n,
            g = !1;
          try {
            g = !!f.apply
          } catch (h) {}
          return g ? function() {
            var a = [];
            return d(arguments, function(b) {
              a.push(e(b))
            }), f.apply(b, a)
          } : function(a, b) {
            f(a, null == b ? "" : b)
          }
        }
        return {
          log: f("log"),
          info: f("info"),
          warn: f("warn"),
          error: f("error"),
          debug: function() {
            var c = f("debug");
            return function() {
              a && c.apply(b, arguments)
            }
          }()
        }
      }]
    }

    function ac(a, b) {
      if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw lf("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", b);
      return a
    }

    function bc(a) {
      return a + ""
    }

    function cc(a, b) {
      if (a) {
        if (a.constructor === a) throw lf("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
        if (a.window === a) throw lf("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b);
        if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw lf("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b);
        if (a === Object) throw lf("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", b)
      }
      return a
    }

    function dc(a, b) {
      if (a) {
        if (a.constructor === a) throw lf("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
        if (a === mf || a === nf || a === of) throw lf("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", b)
      }
    }

    function ec(a, b) {
      if (a && (a === 0..constructor || a === (!1).constructor || a === "".constructor || a === {}.constructor || a === [].constructor || a === Function.constructor)) throw lf("isecaf", "Assigning to a constructor is disallowed! Expression: {0}", b)
    }

    function fc(a, b) {
      return "undefined" != typeof a ? a : b
    }

    function gc(a, b) {
      return "undefined" == typeof a ? b : "undefined" == typeof b ? a : a + b
    }

    function hc(a, b) {
      var c = a(b);
      return !c.$stateful
    }

    function ic(a, b) {
      var c, e;
      switch (a.type) {
        case sf.Program:
          c = !0, d(a.body, function(a) {
            ic(a.expression, b), c = c && a.expression.constant
          }), a.constant = c;
          break;
        case sf.Literal:
          a.constant = !0, a.toWatch = [];
          break;
        case sf.UnaryExpression:
          ic(a.argument, b), a.constant = a.argument.constant, a.toWatch = a.argument.toWatch;
          break;
        case sf.BinaryExpression:
          ic(a.left, b), ic(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = a.left.toWatch.concat(a.right.toWatch);
          break;
        case sf.LogicalExpression:
          ic(a.left, b), ic(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = a.constant ? [] : [a];
          break;
        case sf.ConditionalExpression:
          ic(a.test, b), ic(a.alternate, b), ic(a.consequent, b), a.constant = a.test.constant && a.alternate.constant && a.consequent.constant, a.toWatch = a.constant ? [] : [a];
          break;
        case sf.Identifier:
          a.constant = !1, a.toWatch = [a];
          break;
        case sf.MemberExpression:
          ic(a.object, b), a.computed && ic(a.property, b), a.constant = a.object.constant && (!a.computed || a.property.constant), a.toWatch = [a];
          break;
        case sf.CallExpression:
          c = a.filter ? hc(b, a.callee.name) : !1, e = [], d(a.arguments, function(a) {
            ic(a, b), c = c && a.constant, a.constant || e.push.apply(e, a.toWatch)
          }), a.constant = c, a.toWatch = a.filter && hc(b, a.callee.name) ? e : [a];
          break;
        case sf.AssignmentExpression:
          ic(a.left, b), ic(a.right, b), a.constant = a.left.constant && a.right.constant, a.toWatch = [a];
          break;
        case sf.ArrayExpression:
          c = !0, e = [], d(a.elements, function(a) {
            ic(a, b), c = c && a.constant, a.constant || e.push.apply(e, a.toWatch)
          }), a.constant = c, a.toWatch = e;
          break;
        case sf.ObjectExpression:
          c = !0, e = [], d(a.properties, function(a) {
            ic(a.value, b), c = c && a.value.constant && !a.computed, a.value.constant || e.push.apply(e, a.value.toWatch)
          }), a.constant = c, a.toWatch = e;
          break;
        case sf.ThisExpression:
          a.constant = !1, a.toWatch = [];
          break;
        case sf.LocalsExpression:
          a.constant = !1, a.toWatch = []
      }
    }

    function jc(a) {
      if (1 == a.length) {
        var b = a[0].expression,
          c = b.toWatch;
        return 1 !== c.length ? c : c[0] !== b ? c : void 0
      }
    }

    function kc(a) {
      return a.type === sf.Identifier || a.type === sf.MemberExpression
    }

    function lc(a) {
      return 1 === a.body.length && kc(a.body[0].expression) ? {
        type: sf.AssignmentExpression,
        left: a.body[0].expression,
        right: {
          type: sf.NGValueParameter
        },
        operator: "="
      } : void 0
    }

    function mc(a) {
      return 0 === a.body.length || 1 === a.body.length && (a.body[0].expression.type === sf.Literal || a.body[0].expression.type === sf.ArrayExpression || a.body[0].expression.type === sf.ObjectExpression)
    }

    function nc(a) {
      return a.constant
    }

    function oc(a, b) {
      this.astBuilder = a, this.$filter = b
    }

    function pc(a, b) {
      this.astBuilder = a, this.$filter = b
    }

    function qc(a) {
      return "constructor" == a
    }

    function rc(a) {
      return y(a.valueOf) ? a.valueOf() : uf.call(a)
    }

    function sc() {
      var a, b, c = oa(),
        e = oa(),
        f = {
          "true": !0,
          "false": !1,
          "null": null,
          undefined: void 0
        };
      this.addLiteral = function(a, b) {
        f[a] = b
      }, this.setIdentifierFns = function(c, d) {
        return a = c, b = d, this
      }, this.$get = ["$filter", function(g) {
        function h(a, b, d) {
          var f, h, j;
          switch (d = d || u, typeof a) {
            case "string":
              a = a.trim(), j = a;
              var q = d ? e : c;
              if (f = q[j], !f) {
                ":" === a.charAt(0) && ":" === a.charAt(1) && (h = !0, a = a.substring(2));
                var s = d ? t : r,
                  v = new rf(s),
                  w = new tf(v, g, s);
                f = w.parse(a), f.constant ? f.$$watchDelegate = o : h ? f.$$watchDelegate = f.literal ? m : l : f.inputs && (f.$$watchDelegate = k), d && (f = i(f)), q[j] = f
              }
              return p(f, b);
            case "function":
              return p(a, b);
            default:
              return p(n, b)
          }
        }

        function i(a) {
          function b(b, c, d, e) {
            var f = u;
            u = !0;
            try {
              return a(b, c, d, e)
            } finally {
              u = f
            }
          }
          if (!a) return a;
          b.$$watchDelegate = a.$$watchDelegate, b.assign = i(a.assign), b.constant = a.constant, b.literal = a.literal;
          for (var c = 0; a.inputs && c < a.inputs.length; ++c) a.inputs[c] = i(a.inputs[c]);
          return b.inputs = a.inputs, b
        }

        function j(a, b) {
          return null == a || null == b ? a === b : "object" == typeof a && (a = rc(a), "object" == typeof a) ? !1 : a === b || a !== a && b !== b
        }

        function k(a, b, c, d, e) {
          var f, g = d.inputs;
          if (1 === g.length) {
            var h = j;
            return g = g[0], a.$watch(function(a) {
              var b = g(a);
              return j(b, h) || (f = d(a, void 0, void 0, [b]), h = b && rc(b)), f
            }, b, c, e)
          }
          for (var i = [], k = [], l = 0, m = g.length; m > l; l++) i[l] = j, k[l] = null;
          return a.$watch(function(a) {
            for (var b = !1, c = 0, e = g.length; e > c; c++) {
              var h = g[c](a);
              (b || (b = !j(h, i[c]))) && (k[c] = h, i[c] = h && rc(h))
            }
            return b && (f = d(a, void 0, void 0, k)), f
          }, b, c, e)
        }

        function l(a, b, c, d) {
          var e, f;
          return e = a.$watch(function(a) {
            return d(a)
          }, function(a, c, d) {
            f = a, y(b) && b.apply(this, arguments), s(a) && d.$$postDigest(function() {
              s(f) && e()
            })
          }, c)
        }

        function m(a, b, c, e) {
          function f(a) {
            var b = !0;
            return d(a, function(a) {
              s(a) || (b = !1)
            }), b
          }
          var g, h;
          return g = a.$watch(function(a) {
            return e(a)
          }, function(a, c, d) {
            h = a, y(b) && b.call(this, a, c, d), f(a) && d.$$postDigest(function() {
              f(h) && g()
            })
          }, c)
        }

        function o(a, b, c, d) {
          var e;
          return e = a.$watch(function(a) {
            return e(), d(a)
          }, b, c)
        }

        function p(a, b) {
          if (!b) return a;
          var c = a.$$watchDelegate,
            d = !1,
            e = c !== m && c !== l,
            f = e ? function(c, e, f, g) {
              var h = d && g ? g[0] : a(c, e, f, g);
              return b(h, c, e)
            } : function(c, d, e, f) {
              var g = a(c, d, e, f),
                h = b(g, c, d);
              return s(g) ? h : g
            };
          return a.$$watchDelegate && a.$$watchDelegate !== k ? f.$$watchDelegate = a.$$watchDelegate : b.$stateful || (f.$$watchDelegate = k, d = !a.inputs, f.inputs = a.inputs ? a.inputs : [a]), f
        }
        var q = $d().noUnsafeEval,
          r = {
            csp: q,
            expensiveChecks: !1,
            literals: N(f),
            isIdentifierStart: y(a) && a,
            isIdentifierContinue: y(b) && b
          },
          t = {
            csp: q,
            expensiveChecks: !0,
            literals: N(f),
            isIdentifierStart: y(a) && a,
            isIdentifierContinue: y(b) && b
          },
          u = !1;
        return h.$$runningExpensiveChecks = function() {
          return u
        }, h
      }]
    }

    function tc() {
      this.$get = ["$rootScope", "$exceptionHandler", function(a, b) {
        return vc(function(b) {
          a.$evalAsync(b)
        }, b)
      }]
    }

    function uc() {
      this.$get = ["$browser", "$exceptionHandler", function(a, b) {
        return vc(function(b) {
          a.defer(b)
        }, b)
      }]
    }

    function vc(a, c) {
      function e() {
        this.$$state = {
          status: 0
        }
      }

      function f(a, b) {
        return function(c) {
          b.call(a, c)
        }
      }

      function g(a) {
        var b, d, e;
        e = a.pending, a.processScheduled = !1, a.pending = void 0;
        for (var f = 0, g = e.length; g > f; ++f) {
          d = e[f][0], b = e[f][a.status];
          try {
            y(b) ? d.resolve(b(a.value)) : 1 === a.status ? d.resolve(a.value) : d.reject(a.value)
          } catch (h) {
            d.reject(h), c(h)
          }
        }
      }

      function h(b) {
        !b.processScheduled && b.pending && (b.processScheduled = !0, a(function() {
          g(b)
        }))
      }

      function i() {
        this.promise = new e
      }

      function k(a) {
        var b = new i,
          c = 0,
          e = Wd(a) ? [] : {};
        return d(a, function(a, d) {
          c++, s(a).then(function(a) {
            e.hasOwnProperty(d) || (e[d] = a, --c || b.resolve(e))
          }, function(a) {
            e.hasOwnProperty(d) || b.reject(a)
          })
        }), 0 === c && b.resolve(e), b.promise
      }

      function l(a) {
        var b = n();
        return d(a, function(a) {
          s(a).then(b.resolve, b.reject)
        }), b.promise
      }
      var m = b("$q", TypeError),
        n = function() {
          var a = new i;
          return a.resolve = f(a, a.resolve), a.reject = f(a, a.reject), a.notify = f(a, a.notify), a
        };
      j(e.prototype, {
        then: function(a, b, c) {
          if (r(a) && r(b) && r(c)) return this;
          var d = new i;
          return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([d, a, b, c]), this.$$state.status > 0 && h(this.$$state), d.promise
        },
        "catch": function(a) {
          return this.then(null, a)
        },
        "finally": function(a, b) {
          return this.then(function(b) {
            return q(b, !0, a)
          }, function(b) {
            return q(b, !1, a)
          }, b)
        }
      }), j(i.prototype, {
        resolve: function(a) {
          this.promise.$$state.status || (a === this.promise ? this.$$reject(m("qcycle", "Expected promise to be resolved with value other than itself '{0}'", a)) : this.$$resolve(a))
        },
        $$resolve: function(a) {
          function b(a) {
            i || (i = !0, g.$$resolve(a))
          }

          function d(a) {
            i || (i = !0, g.$$reject(a))
          }
          var e, g = this,
            i = !1;
          try {
            (t(a) || y(a)) && (e = a && a.then), y(e) ? (this.promise.$$state.status = -1, e.call(a, b, d, f(this, this.notify))) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, h(this.promise.$$state))
          } catch (j) {
            d(j), c(j)
          }
        },
        reject: function(a) {
          this.promise.$$state.status || this.$$reject(a)
        },
        $$reject: function(a) {
          this.promise.$$state.value = a, this.promise.$$state.status = 2, h(this.promise.$$state)
        },
        notify: function(b) {
          var d = this.promise.$$state.pending;
          this.promise.$$state.status <= 0 && d && d.length && a(function() {
            for (var a, e, f = 0, g = d.length; g > f; f++) {
              e = d[f][0], a = d[f][3];
              try {
                e.notify(y(a) ? a(b) : b)
              } catch (h) {
                c(h)
              }
            }
          })
        }
      });
      var o = function(a) {
          var b = new i;
          return b.reject(a), b.promise
        },
        p = function(a, b) {
          var c = new i;
          return b ? c.resolve(a) : c.reject(a), c.promise
        },
        q = function(a, b, c) {
          var d = null;
          try {
            y(c) && (d = c())
          } catch (e) {
            return p(e, !1)
          }
          return G(d) ? d.then(function() {
            return p(a, b)
          }, function(a) {
            return p(a, !1)
          }) : p(a, b)
        },
        s = function(a, b, c, d) {
          var e = new i;
          return e.resolve(a), e.promise.then(b, c, d)
        },
        u = s,
        v = function(a) {
          function b(a) {
            d.resolve(a)
          }

          function c(a) {
            d.reject(a)
          }
          if (!y(a)) throw m("norslvr", "Expected resolverFn, got '{0}'", a);
          var d = new i;
          return a(b, c), d.promise
        };
      return v.prototype = e.prototype, v.defer = n, v.reject = o, v.when = s, v.resolve = u, v.all = k, v.race = l, v
    }

    function wc() {
      this.$get = ["$window", "$timeout", function(a, b) {
        var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
          d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
          e = !!c,
          f = e ? function(a) {
            var b = c(a);
            return function() {
              d(b)
            }
          } : function(a) {
            var c = b(a, 16.66, !1);
            return function() {
              b.cancel(c)
            }
          };
        return f.supported = e, f
      }]
    }

    function xc() {
      function a(a) {
        function b() {
          this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = g(), this.$$ChildScope = null
        }
        return b.prototype = a, b
      }
      var e = 10,
        f = b("$rootScope"),
        h = null,
        i = null;
      this.digestTtl = function(a) {
        return arguments.length && (e = a), e
      }, this.$get = ["$exceptionHandler", "$parse", "$browser", function(b, j, k) {
        function l(a) {
          a.currentScope.$$destroyed = !0
        }

        function m(a) {
          9 === Kd && (a.$$childHead && m(a.$$childHead), a.$$nextSibling && m(a.$$nextSibling)), a.$parent = a.$$nextSibling = a.$$prevSibling = a.$$childHead = a.$$childTail = a.$root = a.$$watchers = null
        }

        function o() {
          this.$id = g(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
        }

        function p(a) {
          if (z.$$phase) throw f("inprog", "{0} already in progress", z.$$phase);
          z.$$phase = a
        }

        function q() {
          z.$$phase = null
        }

        function s(a, b) {
          do a.$$watchersCount += b; while (a = a.$parent)
        }

        function u(a, b, c) {
          do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
        }

        function v() {}

        function w() {
          for (; C.length;) try {
            C.shift()()
          } catch (a) {
            b(a)
          }
          i = null
        }

        function x() {
          null === i && (i = k.defer(function() {
            z.$apply(w)
          }))
        }
        o.prototype = {
          constructor: o,
          $new: function(b, c) {
            var d;
            return c = c || this, b ? (d = new o, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = a(this)), d = new this.$$ChildScope), d.$parent = c, d.$$prevSibling = c.$$childTail, c.$$childHead ? (c.$$childTail.$$nextSibling = d, c.$$childTail = d) : c.$$childHead = c.$$childTail = d, (b || c != this) && d.$on("$destroy", l), d
          },
          $watch: function(a, b, c, d) {
            var e = j(a);
            if (e.$$watchDelegate) return e.$$watchDelegate(this, b, c, e, a);
            var f = this,
              g = f.$$watchers,
              i = {
                fn: b,
                last: v,
                get: e,
                exp: d || a,
                eq: !!c
              };
            return h = null, y(b) || (i.fn = n), g || (g = f.$$watchers = []), g.unshift(i), s(this, 1),
              function() {
                M(g, i) >= 0 && s(f, -1), h = null
              }
          },
          $watchGroup: function(a, b) {
            function c() {
              i = !1, j ? (j = !1, b(f, f, h)) : b(f, e, h)
            }
            var e = new Array(a.length),
              f = new Array(a.length),
              g = [],
              h = this,
              i = !1,
              j = !0;
            if (!a.length) {
              var k = !0;
              return h.$evalAsync(function() {
                  k && b(f, f, h)
                }),
                function() {
                  k = !1
                }
            }
            return 1 === a.length ? this.$watch(a[0], function(a, c, d) {
              f[0] = a, e[0] = c, b(f, a === c ? f : e, d)
            }) : (d(a, function(a, b) {
              var d = h.$watch(a, function(a, d) {
                f[b] = a, e[b] = d, i || (i = !0, h.$evalAsync(c))
              });
              g.push(d)
            }), function() {
              for (; g.length;) g.shift()()
            })
          },
          $watchCollection: function(a, b) {
            function d(a) {
              f = a;
              var b, d, e, h, i;
              if (!r(f)) {
                if (t(f))
                  if (c(f)) {
                    g !== n && (g = n, q = g.length = 0, l++), b = f.length, q !== b && (l++, g.length = q = b);
                    for (var j = 0; b > j; j++) i = g[j], h = f[j], e = i !== i && h !== h, e || i === h || (l++, g[j] = h)
                  } else {
                    g !== o && (g = o = {}, q = 0, l++), b = 0;
                    for (d in f) Fd.call(f, d) && (b++, h = f[d], i = g[d], d in g ? (e = i !== i && h !== h, e || i === h || (l++, g[d] = h)) : (q++, g[d] = h, l++));
                    if (q > b) {
                      l++;
                      for (d in g) Fd.call(f, d) || (q--, delete g[d])
                    }
                  }
                else g !== f && (g = f, l++);
                return l
              }
            }

            function e() {
              if (p ? (p = !1, b(f, f, i)) : b(f, h, i), k)
                if (t(f))
                  if (c(f)) {
                    h = new Array(f.length);
                    for (var a = 0; a < f.length; a++) h[a] = f[a]
                  } else {
                    h = {};
                    for (var d in f) Fd.call(f, d) && (h[d] = f[d])
                  }
              else h = f
            }
            d.$stateful = !0;
            var f, g, h, i = this,
              k = b.length > 1,
              l = 0,
              m = j(a, d),
              n = [],
              o = {},
              p = !0,
              q = 0;
            return this.$watch(m, e)
          },
          $digest: function() {
            var a, c, d, g, j, l, m, n, o, r, s, t, u = e,
              x = this,
              C = [];
            p("$digest"), k.$$checkUrlChange(), this === z && null !== i && (k.defer.cancel(i), w()), h = null;
            do {
              n = !1, r = x;
              for (var E = 0; E < A.length; E++) {
                try {
                  t = A[E], t.scope.$eval(t.expression, t.locals)
                } catch (F) {
                  b(F)
                }
                h = null
              }
              A.length = 0;
              a: do {
                if (l = r.$$watchers)
                  for (m = l.length; m--;) try {
                    if (a = l[m])
                      if (j = a.get, (c = j(r)) === (d = a.last) || (a.eq ? O(c, d) : "number" == typeof c && "number" == typeof d && isNaN(c) && isNaN(d))) {
                        if (a === h) {
                          n = !1;
                          break a
                        }
                      } else n = !0, h = a, a.last = a.eq ? N(c, null) : c, g = a.fn, g(c, d === v ? c : d, r), 5 > u && (s = 4 - u, C[s] || (C[s] = []), C[s].push({
                        msg: y(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp,
                        newVal: c,
                        oldVal: d
                      }))
                  } catch (F) {
                    b(F)
                  }
                if (!(o = r.$$watchersCount && r.$$childHead || r !== x && r.$$nextSibling))
                  for (; r !== x && !(o = r.$$nextSibling);) r = r.$parent
              } while (r = o);
              if ((n || A.length) && !u--) throw q(), f("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", e, C)
            } while (n || A.length);
            for (q(); D < B.length;) try {
              B[D++]()
            } catch (F) {
              b(F)
            }
            B.length = D = 0
          },
          $destroy: function() {
            if (!this.$$destroyed) {
              var a = this.$parent;
              this.$broadcast("$destroy"), this.$$destroyed = !0, this === z && k.$$applicationDestroyed(), s(this, -this.$$watchersCount);
              for (var b in this.$$listenerCount) u(this, this.$$listenerCount[b], b);
              a && a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a && a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = n, this.$on = this.$watch = this.$watchGroup = function() {
                return n
              }, this.$$listeners = {}, this.$$nextSibling = null, m(this)
            }
          },
          $eval: function(a, b) {
            return j(a)(this, b)
          },
          $evalAsync: function(a, b) {
            z.$$phase || A.length || k.defer(function() {
              A.length && z.$digest()
            }), A.push({
              scope: this,
              expression: j(a),
              locals: b
            })
          },
          $$postDigest: function(a) {
            B.push(a)
          },
          $apply: function(a) {
            try {
              p("$apply");
              try {
                return this.$eval(a)
              } finally {
                q()
              }
            } catch (c) {
              b(c)
            } finally {
              try {
                z.$digest()
              } catch (c) {
                throw b(c), c
              }
            }
          },
          $applyAsync: function(a) {
            function b() {
              c.$eval(a)
            }
            var c = this;
            a && C.push(b), a = j(a), x()
          },
          $on: function(a, b) {
            var c = this.$$listeners[a];
            c || (this.$$listeners[a] = c = []), c.push(b);
            var d = this;
            do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
            var e = this;
            return function() {
              var d = c.indexOf(b); - 1 !== d && (c[d] = null, u(e, 1, a))
            }
          },
          $emit: function(a, c) {
            var d, e, f, g = [],
              h = this,
              i = !1,
              j = {
                name: a,
                targetScope: h,
                stopPropagation: function() {
                  i = !0
                },
                preventDefault: function() {
                  j.defaultPrevented = !0
                },
                defaultPrevented: !1
              },
              k = P([j], arguments, 1);
            do {
              for (d = h.$$listeners[a] || g, j.currentScope = h, e = 0, f = d.length; f > e; e++)
                if (d[e]) try {
                  d[e].apply(null, k)
                } catch (l) {
                  b(l)
                } else d.splice(e, 1), e--, f--;
              if (i) return j.currentScope = null, j;
              h = h.$parent
            } while (h);
            return j.currentScope = null, j
          },
          $broadcast: function(a, c) {
            var d = this,
              e = d,
              f = d,
              g = {
                name: a,
                targetScope: d,
                preventDefault: function() {
                  g.defaultPrevented = !0
                },
                defaultPrevented: !1
              };
            if (!d.$$listenerCount[a]) return g;
            for (var h, i, j, k = P([g], arguments, 1); e = f;) {
              for (g.currentScope = e, h = e.$$listeners[a] || [], i = 0, j = h.length; j > i; i++)
                if (h[i]) try {
                  h[i].apply(null, k)
                } catch (l) {
                  b(l)
                } else h.splice(i, 1), i--, j--;
              if (!(f = e.$$listenerCount[a] && e.$$childHead || e !== d && e.$$nextSibling))
                for (; e !== d && !(f = e.$$nextSibling);) e = e.$parent
            }
            return g.currentScope = null, g
          }
        };
        var z = new o,
          A = z.$$asyncQueue = [],
          B = z.$$postDigestQueue = [],
          C = z.$$applyAsyncQueue = [],
          D = 0;
        return z
      }]
    }

    function yc() {
      var a = /^\s*(https?|ftp|mailto|tel|file):/,
        b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
      this.aHrefSanitizationWhitelist = function(b) {
        return s(b) ? (a = b, this) : a
      }, this.imgSrcSanitizationWhitelist = function(a) {
        return s(a) ? (b = a, this) : b
      }, this.$get = function() {
        return function(c, d) {
          var e, f = d ? b : a;
          return e = Hc(c).href, "" === e || e.match(f) ? c : "unsafe:" + e
        }
      }
    }

    function zc(a) {
      if ("self" === a) return a;
      if (v(a)) {
        if (a.indexOf("***") > -1) throw vf("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a);
        return a = Zd(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$")
      }
      if (z(a)) return new RegExp("^" + a.source + "$");
      throw vf("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
    }

    function Ac(a) {
      var b = [];
      return s(a) && d(a, function(a) {
        b.push(zc(a))
      }), b
    }

    function Bc() {
      this.SCE_CONTEXTS = wf;
      var a = ["self"],
        b = [];
      this.resourceUrlWhitelist = function(b) {
        return arguments.length && (a = Ac(b)), a
      }, this.resourceUrlBlacklist = function(a) {
        return arguments.length && (b = Ac(a)), b
      }, this.$get = ["$injector", function(c) {
        function d(a, b) {
          return "self" === a ? Ic(b) : !!a.exec(b.href)
        }

        function e(c) {
          var e, f, g = Hc(c.toString()),
            h = !1;
          for (e = 0, f = a.length; f > e; e++)
            if (d(a[e], g)) {
              h = !0;
              break
            }
          if (h)
            for (e = 0, f = b.length; f > e; e++)
              if (d(b[e], g)) {
                h = !1;
                break
              }
          return h
        }

        function f(a) {
          var b = function(a) {
            this.$$unwrapTrustedValue = function() {
              return a
            }
          };
          return a && (b.prototype = new a), b.prototype.valueOf = function() {
            return this.$$unwrapTrustedValue()
          }, b.prototype.toString = function() {
            return this.$$unwrapTrustedValue().toString()
          }, b
        }

        function g(a, b) {
          var c = l.hasOwnProperty(a) ? l[a] : null;
          if (!c) throw vf("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b);
          if (null === b || r(b) || "" === b) return b;
          if ("string" != typeof b) throw vf("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a);
          return new c(b)
        }

        function h(a) {
          return a instanceof k ? a.$$unwrapTrustedValue() : a
        }

        function i(a, b) {
          if (null === b || r(b) || "" === b) return b;
          var c = l.hasOwnProperty(a) ? l[a] : null;
          if (c && b instanceof c) return b.$$unwrapTrustedValue();
          if (a === wf.RESOURCE_URL) {
            if (e(b)) return b;
            throw vf("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString())
          }
          if (a === wf.HTML) return j(b);
          throw vf("unsafe", "Attempting to use an unsafe value in a safe context.")
        }
        var j = function(a) {
          throw vf("unsafe", "Attempting to use an unsafe value in a safe context.")
        };
        c.has("$sanitize") && (j = c.get("$sanitize"));
        var k = f(),
          l = {};
        return l[wf.HTML] = f(k), l[wf.CSS] = f(k), l[wf.URL] = f(k), l[wf.JS] = f(k), l[wf.RESOURCE_URL] = f(l[wf.URL]), {
          trustAs: g,
          getTrusted: i,
          valueOf: h
        }
      }]
    }

    function Cc() {
      var a = !0;
      this.enabled = function(b) {
        return arguments.length && (a = !!b), a
      }, this.$get = ["$parse", "$sceDelegate", function(b, c) {
        if (a && 8 > Kd) throw vf("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
        var e = qa(wf);
        e.isEnabled = function() {
          return a
        }, e.trustAs = c.trustAs, e.getTrusted = c.getTrusted, e.valueOf = c.valueOf, a || (e.trustAs = e.getTrusted = function(a, b) {
          return b
        }, e.valueOf = o), e.parseAs = function(a, c) {
          var d = b(c);
          return d.literal && d.constant ? d : b(c, function(b) {
            return e.getTrusted(a, b)
          })
        };
        var f = e.parseAs,
          g = e.getTrusted,
          h = e.trustAs;
        return d(wf, function(a, b) {
          var c = Gd(b);
          e[va("parse_as_" + c)] = function(b) {
            return f(a, b)
          }, e[va("get_trusted_" + c)] = function(b) {
            return g(a, b)
          }, e[va("trust_as_" + c)] = function(b) {
            return h(a, b)
          }
        }), e
      }]
    }

    function Dc() {
      this.$get = ["$window", "$document", function(a, b) {
        var c, d, e = {},
          f = a.chrome && a.chrome.app && a.chrome.app.runtime,
          g = !f && a.history && a.history.pushState,
          h = l((/android (\d+)/.exec(Gd((a.navigator || {}).userAgent)) || [])[1]),
          i = /Boxee/i.test((a.navigator || {}).userAgent),
          j = b[0] || {},
          k = /^(Moz|webkit|ms)(?=[A-Z])/,
          m = j.body && j.body.style,
          n = !1,
          o = !1;
        if (m) {
          for (var p in m)
            if (d = k.exec(p)) {
              c = d[0], c = c[0].toUpperCase() + c.substr(1);
              break
            }
          c || (c = "WebkitOpacity" in m && "webkit"), n = !!("transition" in m || c + "Transition" in m), o = !!("animation" in m || c + "Animation" in m), !h || n && o || (n = v(m.webkitTransition), o = v(m.webkitAnimation))
        }
        return {
          history: !(!g || 4 > h || i),
          hasEvent: function(a) {
            if ("input" === a && 11 >= Kd) return !1;
            if (r(e[a])) {
              var b = j.createElement("div");
              e[a] = "on" + a in b
            }
            return e[a]
          },
          csp: $d(),
          vendorPrefix: c,
          transitions: n,
          animations: o,
          android: h
        }
      }]
    }

    function Ec() {
      var a;
      this.httpOptions = function(b) {
        return b ? (a = b, this) : a
      }, this.$get = ["$templateCache", "$http", "$q", "$sce", function(b, c, d, e) {
        function f(g, h) {
          function i(a) {
            if (!h) throw xf("tpload", "Failed to load template: {0} (HTTP status: {1} {2})", g, a.status, a.statusText);
            return d.reject(a)
          }
          f.totalPendingRequests++, (!v(g) || r(b.get(g))) && (g = e.getTrustedResourceUrl(g));
          var k = c.defaults && c.defaults.transformResponse;
          return Wd(k) ? k = k.filter(function(a) {
            return a !== Ab
          }) : k === Ab && (k = null), c.get(g, j({
            cache: b,
            transformResponse: k
          }, a))["finally"](function() {
            f.totalPendingRequests--
          }).then(function(a) {
            return b.put(g, a.data), a.data
          }, i)
        }
        return f.totalPendingRequests = 0, f
      }]
    }

    function Fc() {
      this.$get = ["$rootScope", "$browser", "$location", function(a, b, c) {
        var e = {};
        return e.findBindings = function(a, b, c) {
          var e = a.getElementsByClassName("ng-binding"),
            f = [];
          return d(e, function(a) {
            var e = Ud.element(a).data("$binding");
            e && d(e, function(d) {
              if (c) {
                var e = new RegExp("(^|\\s)" + Zd(b) + "(\\s|\\||$)");
                e.test(d) && f.push(a)
              } else -1 != d.indexOf(b) && f.push(a)
            })
          }), f
        }, e.findModels = function(a, b, c) {
          for (var d = ["ng-", "data-ng-", "ng\\:"], e = 0; e < d.length; ++e) {
            var f = c ? "=" : "*=",
              g = "[" + d[e] + "model" + f + '"' + b + '"]',
              h = a.querySelectorAll(g);
            if (h.length) return h
          }
        }, e.getLocation = function() {
          return c.url()
        }, e.setLocation = function(b) {
          b !== c.url() && (c.url(b), a.$digest())
        }, e.whenStable = function(a) {
          b.notifyWhenNoOutstandingRequests(a)
        }, e
      }]
    }

    function Gc() {
      this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function(a, b, c, d, e) {
        function f(f, h, i) {
          y(f) || (i = h, h = f, f = n);
          var j, k = Q(arguments, 3),
            l = s(i) && !i,
            m = (l ? d : c).defer(),
            o = m.promise;
          return j = b.defer(function() {
            try {
              m.resolve(f.apply(null, k))
            } catch (b) {
              m.reject(b), e(b)
            } finally {
              delete g[o.$$timeoutId]
            }
            l || a.$apply()
          }, h), o.$$timeoutId = j, g[j] = m, o
        }
        var g = {};
        return f.cancel = function(a) {
          return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
        }, f
      }]
    }

    function Hc(a) {
      var b = a;
      return Kd && (yf.setAttribute("href", b), b = yf.href), yf.setAttribute("href", b), {
        href: yf.href,
        protocol: yf.protocol ? yf.protocol.replace(/:$/, "") : "",
        host: yf.host,
        search: yf.search ? yf.search.replace(/^\?/, "") : "",
        hash: yf.hash ? yf.hash.replace(/^#/, "") : "",
        hostname: yf.hostname,
        port: yf.port,
        pathname: "/" === yf.pathname.charAt(0) ? yf.pathname : "/" + yf.pathname
      }
    }

    function Ic(a) {
      var b = v(a) ? Hc(a) : a;
      return b.protocol === zf.protocol && b.host === zf.host
    }

    function Jc() {
      this.$get = p(a)
    }

    function Kc(a) {
      function b(a) {
        try {
          return decodeURIComponent(a)
        } catch (b) {
          return a
        }
      }
      var c = a[0] || {},
        d = {},
        e = "";
      return function() {
        var a, f, g, h, i, j = c.cookie || "";
        if (j !== e)
          for (e = j, a = e.split("; "), d = {}, g = 0; g < a.length; g++) f = a[g], h = f.indexOf("="), h > 0 && (i = b(f.substring(0, h)), r(d[i]) && (d[i] = b(f.substring(h + 1))));
        return d
      }
    }

    function Lc() {
      this.$get = Kc
    }

    function Mc(a) {
      function b(e, f) {
        if (t(e)) {
          var g = {};
          return d(e, function(a, c) {
            g[c] = b(c, a)
          }), g
        }
        return a.factory(e + c, f)
      }
      var c = "Filter";
      this.register = b, this.$get = ["$injector", function(a) {
        return function(b) {
          return a.get(b + c)
        }
      }], b("currency", Rc), b("date", ed), b("filter", Nc), b("json", fd), b("limitTo", gd), b("lowercase", Gf), b("number", Sc), b("orderBy", id), b("uppercase", Hf)
    }

    function Nc() {
      return function(a, d, e, f) {
        if (!c(a)) {
          if (null == a) return a;
          throw b("filter")("notarray", "Expected array but received: {0}", a)
        }
        f = f || "$";
        var g, h, i = Qc(d);
        switch (i) {
          case "function":
            g = d;
            break;
          case "boolean":
          case "null":
          case "number":
          case "string":
            h = !0;
          case "object":
            g = Oc(d, e, f, h);
            break;
          default:
            return a
        }
        return Array.prototype.filter.call(a, g)
      }
    }

    function Oc(a, b, c, d) {
      var e, f = t(a) && c in a;
      return b === !0 ? b = O : y(b) || (b = function(a, b) {
        return r(a) ? !1 : null === a || null === b ? a === b : t(b) || t(a) && !q(a) ? !1 : (a = Gd("" + a), b = Gd("" + b), -1 !== a.indexOf(b))
      }), e = function(e) {
        return f && !t(e) ? Pc(e, a[c], b, c, !1) : Pc(e, a, b, c, d)
      }
    }

    function Pc(a, b, c, d, e, f) {
      var g = Qc(a),
        h = Qc(b);
      if ("string" === h && "!" === b.charAt(0)) return !Pc(a, b.substring(1), c, d, e);
      if (Wd(a)) return a.some(function(a) {
        return Pc(a, b, c, d, e)
      });
      switch (g) {
        case "object":
          var i;
          if (e) {
            for (i in a)
              if ("$" !== i.charAt(0) && Pc(a[i], b, c, d, !0)) return !0;
            return f ? !1 : Pc(a, b, c, d, !1)
          }
          if ("object" === h) {
            for (i in b) {
              var j = b[i];
              if (!y(j) && !r(j)) {
                var k = i === d,
                  l = k ? a : a[i];
                if (!Pc(l, j, c, d, k, k)) return !1
              }
            }
            return !0
          }
          return c(a, b);
        case "function":
          return !1;
        default:
          return c(a, b)
      }
    }

    function Qc(a) {
      return null === a ? "null" : typeof a
    }

    function Rc(a) {
      var b = a.NUMBER_FORMATS;
      return function(a, c, d) {
        return r(c) && (c = b.CURRENCY_SYM), r(d) && (d = b.PATTERNS[1].maxFrac), null == a ? a : Vc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, d).replace(/\u00A4/g, c)
      }
    }

    function Sc(a) {
      var b = a.NUMBER_FORMATS;
      return function(a, c) {
        return null == a ? a : Vc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
      }
    }

    function Tc(a) {
      var b, c, d, e, f, g = 0;
      for ((c = a.indexOf(Bf)) > -1 && (a = a.replace(Bf, "")), (d = a.search(/e/i)) > 0 ? (0 > c && (c = d), c += +a.slice(d + 1), a = a.substring(0, d)) : 0 > c && (c = a.length), d = 0; a.charAt(d) == Cf; d++);
      if (d == (f = a.length)) b = [0], c = 1;
      else {
        for (f--; a.charAt(f) == Cf;) f--;
        for (c -= d, b = [], e = 0; f >= d; d++, e++) b[e] = +a.charAt(d)
      }
      return c > Af && (b = b.splice(0, Af - 1), g = c - 1, c = 1), {
        d: b,
        e: g,
        i: c
      }
    }

    function Uc(a, b, c, d) {
      var e = a.d,
        f = e.length - a.i;
      b = r(b) ? Math.min(Math.max(c, f), d) : +b;
      var g = b + a.i,
        h = e[g];
      if (g > 0) {
        e.splice(Math.max(a.i, g));
        for (var i = g; i < e.length; i++) e[i] = 0
      } else {
        f = Math.max(0, f), a.i = 1, e.length = Math.max(1, g = b + 1), e[0] = 0;
        for (var j = 1; g > j; j++) e[j] = 0
      }
      if (h >= 5)
        if (0 > g - 1) {
          for (var k = 0; k > g; k--) e.unshift(0), a.i++;
          e.unshift(1), a.i++
        } else e[g - 1]++;
      for (; f < Math.max(0, b); f++) e.push(0);
      var l = e.reduceRight(function(a, b, c, d) {
        return b += a, d[c] = b % 10, Math.floor(b / 10)
      }, 0);
      l && (e.unshift(l), a.i++)
    }

    function Vc(a, b, c, d, e) {
      if (!v(a) && !w(a) || isNaN(a)) return "";
      var f, g = !isFinite(a),
        h = !1,
        i = Math.abs(a) + "",
        j = "";
      if (g) j = "∞";
      else {
        f = Tc(i), Uc(f, e, b.minFrac, b.maxFrac);
        var k = f.d,
          l = f.i,
          m = f.e,
          n = [];
        for (h = k.reduce(function(a, b) {
            return a && !b
          }, !0); 0 > l;) k.unshift(0), l++;
        l > 0 ? n = k.splice(l, k.length) : (n = k, k = [0]);
        var o = [];
        for (k.length >= b.lgSize && o.unshift(k.splice(-b.lgSize, k.length).join("")); k.length > b.gSize;) o.unshift(k.splice(-b.gSize, k.length).join(""));
        k.length && o.unshift(k.join("")), j = o.join(c), n.length && (j += d + n.join("")), m && (j += "e+" + m)
      }
      return 0 > a && !h ? b.negPre + j + b.negSuf : b.posPre + j + b.posSuf
    }

    function Wc(a, b, c, d) {
      var e = "";
      for ((0 > a || d && 0 >= a) && (d ? a = -a + 1 : (a = -a, e = "-")), a = "" + a; a.length < b;) a = Cf + a;
      return c && (a = a.substr(a.length - b)), e + a
    }

    function Xc(a, b, c, d, e) {
      return c = c || 0,
        function(f) {
          var g = f["get" + a]();
          return (c > 0 || g > -c) && (g += c), 0 === g && -12 == c && (g = 12), Wc(g, b, d, e)
        }
    }

    function Yc(a, b, c) {
      return function(d, e) {
        var f = d["get" + a](),
          g = (c ? "STANDALONE" : "") + (b ? "SHORT" : ""),
          h = Hd(g + a);
        return e[h][f]
      }
    }

    function Zc(a, b, c) {
      var d = -1 * c,
        e = d >= 0 ? "+" : "";
      return e += Wc(Math[d > 0 ? "floor" : "ceil"](d / 60), 2) + Wc(Math.abs(d % 60), 2)
    }

    function $c(a) {
      var b = new Date(a, 0, 1).getDay();
      return new Date(a, 0, (4 >= b ? 5 : 12) - b)
    }

    function _c(a) {
      return new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay()))
    }

    function ad(a) {
      return function(b) {
        var c = $c(b.getFullYear()),
          d = _c(b),
          e = +d - +c,
          f = 1 + Math.round(e / 6048e5);
        return Wc(f, a)
      }
    }

    function bd(a, b) {
      return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1]
    }

    function cd(a, b) {
      return a.getFullYear() <= 0 ? b.ERAS[0] : b.ERAS[1]
    }

    function dd(a, b) {
      return a.getFullYear() <= 0 ? b.ERANAMES[0] : b.ERANAMES[1]
    }

    function ed(a) {
      function b(a) {
        var b;
        if (b = a.match(c)) {
          var d = new Date(0),
            e = 0,
            f = 0,
            g = b[8] ? d.setUTCFullYear : d.setFullYear,
            h = b[8] ? d.setUTCHours : d.setHours;
          b[9] && (e = l(b[9] + b[10]), f = l(b[9] + b[11])), g.call(d, l(b[1]), l(b[2]) - 1, l(b[3]));
          var i = l(b[4] || 0) - e,
            j = l(b[5] || 0) - f,
            k = l(b[6] || 0),
            m = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
          return h.call(d, i, j, k, m), d
        }
        return a
      }
      var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
      return function(c, e, f) {
        var g, h, i = "",
          j = [];
        if (e = e || "mediumDate", e = a.DATETIME_FORMATS[e] || e, v(c) && (c = Ff.test(c) ? l(c) : b(c)), w(c) && (c = new Date(c)), !x(c) || !isFinite(c.getTime())) return c;
        for (; e;) h = Ef.exec(e), h ? (j = P(j, h, 1), e = j.pop()) : (j.push(e), e = null);
        var k = c.getTimezoneOffset();
        return f && (k = V(f, k), c = X(c, f, !0)), d(j, function(b) {
          g = Df[b], i += g ? g(c, a.DATETIME_FORMATS, k) : "''" === b ? "'" : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
        }), i
      }
    }

    function fd() {
      return function(a, b) {
        return r(b) && (b = 2), T(a, b)
      }
    }

    function gd() {
      return function(a, b, d) {
        return b = Math.abs(Number(b)) === 1 / 0 ? Number(b) : l(b), isNaN(b) ? a : (w(a) && (a = a.toString()), c(a) ? (d = !d || isNaN(d) ? 0 : l(d), d = 0 > d ? Math.max(0, a.length + d) : d, b >= 0 ? hd(a, d, d + b) : 0 === d ? hd(a, b, a.length) : hd(a, Math.max(0, d + b), d)) : a)
      }
    }

    function hd(a, b, c) {
      return v(a) ? a.slice(b, c) : Od.call(a, b, c)
    }

    function id(a) {
      function d(b) {
        return b.map(function(b) {
          var c = 1,
            d = o;
          if (y(b)) d = b;
          else if (v(b) && (("+" == b.charAt(0) || "-" == b.charAt(0)) && (c = "-" == b.charAt(0) ? -1 : 1, b = b.substring(1)), "" !== b && (d = a(b), d.constant))) {
            var e = d();
            d = function(a) {
              return a[e]
            }
          }
          return {
            get: d,
            descending: c
          }
        })
      }

      function e(a) {
        switch (typeof a) {
          case "number":
          case "boolean":
          case "string":
            return !0;
          default:
            return !1
        }
      }

      function f(a) {
        return y(a.valueOf) && (a = a.valueOf(), e(a)) ? a : q(a) && (a = a.toString(), e(a)) ? a : a
      }

      function g(a, b) {
        var c = typeof a;
        return null === a ? (c = "string", a = "null") : "object" === c && (a = f(a)), {
          value: a,
          type: c,
          index: b
        }
      }

      function h(a, b) {
        var c = 0,
          d = a.type,
          e = b.type;
        if (d === e) {
          var f = a.value,
            g = b.value;
          "string" === d ? (f = f.toLowerCase(), g = g.toLowerCase()) : "object" === d && (t(f) && (f = a.index), t(g) && (g = b.index)), f !== g && (c = g > f ? -1 : 1)
        } else c = e > d ? -1 : 1;
        return c
      }
      return function(a, e, f, i) {
        function j(a, b) {
          return {
            value: a,
            tieBreaker: {
              value: b,
              type: "number",
              index: b
            },
            predicateValues: l.map(function(c) {
              return g(c.get(a), b)
            })
          }
        }

        function k(a, b) {
          for (var c = 0, d = l.length; d > c; c++) {
            var e = n(a.predicateValues[c], b.predicateValues[c]);
            if (e) return e * l[c].descending * m
          }
          return n(a.tieBreaker, b.tieBreaker) * m
        }
        if (null == a) return a;
        if (!c(a)) throw b("orderBy")("notarray", "Expected array but received: {0}", a);
        Wd(e) || (e = [e]), 0 === e.length && (e = ["+"]);
        var l = d(e),
          m = f ? -1 : 1,
          n = y(i) ? i : h,
          o = Array.prototype.map.call(a, j);
        return o.sort(k), a = o.map(function(a) {
          return a.value
        })
      }
    }

    function jd(a) {
      return y(a) && (a = {
        link: a
      }), a.restrict = a.restrict || "AC", p(a)
    }

    function kd(a, b) {
      a.$name = b
    }

    function ld(a, b, c, e, f) {
      var g = this,
        h = [];
      g.$error = {}, g.$$success = {}, g.$pending = void 0, g.$name = f(b.name || b.ngForm || "")(c), g.$dirty = !1, g.$pristine = !0, g.$valid = !0, g.$invalid = !1, g.$submitted = !1, g.$$parentForm = Kf, g.$rollbackViewValue = function() {
        d(h, function(a) {
          a.$rollbackViewValue()
        })
      }, g.$commitViewValue = function() {
        d(h, function(a) {
          a.$commitViewValue()
        })
      }, g.$addControl = function(a) {
        la(a.$name, "input"), h.push(a), a.$name && (g[a.$name] = a), a.$$parentForm = g
      }, g.$$renameControl = function(a, b) {
        var c = a.$name;
        g[c] === a && delete g[c], g[b] = a, a.$name = b
      }, g.$removeControl = function(a) {
        a.$name && g[a.$name] === a && delete g[a.$name], d(g.$pending, function(b, c) {
          g.$setValidity(c, null, a)
        }), d(g.$error, function(b, c) {
          g.$setValidity(c, null, a)
        }), d(g.$$success, function(b, c) {
          g.$setValidity(c, null, a)
        }), M(h, a), a.$$parentForm = Kf
      }, Ad({
        ctrl: this,
        $element: a,
        set: function(a, b, c) {
          var d = a[b];
          if (d) {
            var e = d.indexOf(c); - 1 === e && d.push(c)
          } else a[b] = [c]
        },
        unset: function(a, b, c) {
          var d = a[b];
          d && (M(d, c), 0 === d.length && delete a[b])
        },
        $animate: e
      }), g.$setDirty = function() {
        e.removeClass(a, ug), e.addClass(a, vg), g.$dirty = !0, g.$pristine = !1, g.$$parentForm.$setDirty()
      }, g.$setPristine = function() {
        e.setClass(a, ug, vg + " " + Lf), g.$dirty = !1, g.$pristine = !0, g.$submitted = !1, d(h, function(a) {
          a.$setPristine()
        })
      }, g.$setUntouched = function() {
        d(h, function(a) {
          a.$setUntouched()
        })
      }, g.$setSubmitted = function() {
        e.addClass(a, Lf), g.$submitted = !0, g.$$parentForm.$setSubmitted()
      }
    }

    function md(a) {
      a.$formatters.push(function(b) {
        return a.$isEmpty(b) ? b : b.toString()
      })
    }

    function nd(a, b, c, d, e, f) {
      od(a, b, c, d, e, f), md(d)
    }

    function od(a, b, c, d, e, f) {
      var g = Gd(b[0].type);
      if (!e.android) {
        var h = !1;
        b.on("compositionstart", function() {
          h = !0
        }), b.on("compositionend", function() {
          h = !1, j()
        })
      }
      var i, j = function(a) {
        if (i && (f.defer.cancel(i), i = null), !h) {
          var e = b.val(),
            j = a && a.type;
          "password" === g || c.ngTrim && "false" === c.ngTrim || (e = Yd(e)), (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, j)
        }
      };
      if (e.hasEvent("input")) b.on("input", j);
      else {
        var k = function(a, b, c) {
          i || (i = f.defer(function() {
            i = null, b && b.value === c || j(a)
          }))
        };
        b.on("keydown", function(a) {
          var b = a.keyCode;
          91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || k(a, this, this.value)
        }), e.hasEvent("paste") && b.on("paste cut", k)
      }
      b.on("change", j), Zf[g] && d.$$hasNativeValidators && g === c.type && b.on(Yf, function(a) {
        if (!i) {
          var b = this[Ed],
            c = b.badInput,
            d = b.typeMismatch;
          i = f.defer(function() {
            i = null, (b.badInput !== c || b.typeMismatch !== d) && j(a)
          })
        }
      }), d.$render = function() {
        var a = d.$isEmpty(d.$viewValue) ? "" : d.$viewValue;
        b.val() !== a && b.val(a)
      }
    }

    function pd(a, b) {
      if (x(a)) return a;
      if (v(a)) {
        Vf.lastIndex = 0;
        var c = Vf.exec(a);
        if (c) {
          var d = +c[1],
            e = +c[2],
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = $c(d),
            k = 7 * (e - 1);
          return b && (f = b.getHours(), g = b.getMinutes(), h = b.getSeconds(), i = b.getMilliseconds()), new Date(d, 0, j.getDate() + k, f, g, h, i)
        }
      }
      return NaN
    }

    function qd(a, b) {
      return function(c, e) {
        var f, g;
        if (x(c)) return c;
        if (v(c)) {
          if ('"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1)), Pf.test(c)) return new Date(c);
          if (a.lastIndex = 0, f = a.exec(c)) return f.shift(), g = e ? {
            yyyy: e.getFullYear(),
            MM: e.getMonth() + 1,
            dd: e.getDate(),
            HH: e.getHours(),
            mm: e.getMinutes(),
            ss: e.getSeconds(),
            sss: e.getMilliseconds() / 1e3
          } : {
            yyyy: 1970,
            MM: 1,
            dd: 1,
            HH: 0,
            mm: 0,
            ss: 0,
            sss: 0
          }, d(f, function(a, c) {
            c < b.length && (g[b[c]] = +a)
          }), new Date(g.yyyy, g.MM - 1, g.dd, g.HH, g.mm, g.ss || 0, 1e3 * g.sss || 0)
        }
        return NaN
      }
    }

    function rd(a, b, c, d) {
      return function(e, f, g, h, i, j, k) {
        function l(a) {
          return a && !(a.getTime && a.getTime() !== a.getTime())
        }

        function m(a) {
          return s(a) && !x(a) ? c(a) || void 0 : a
        }
        sd(e, f, g, h), od(e, f, g, h, i, j);
        var n, o = h && h.$options && h.$options.timezone;
        if (h.$$parserName = a, h.$parsers.push(function(a) {
            if (h.$isEmpty(a)) return null;
            if (b.test(a)) {
              var d = c(a, n);
              return o && (d = X(d, o)), d
            }
            return void 0
          }), h.$formatters.push(function(a) {
            if (a && !x(a)) throw Bg("datefmt", "Expected `{0}` to be a date", a);
            return l(a) ? (n = a, n && o && (n = X(n, o, !0)), k("date")(a, d, o)) : (n = null, "")
          }), s(g.min) || g.ngMin) {
          var p;
          h.$validators.min = function(a) {
            return !l(a) || r(p) || c(a) >= p
          }, g.$observe("min", function(a) {
            p = m(a), h.$validate()
          })
        }
        if (s(g.max) || g.ngMax) {
          var q;
          h.$validators.max = function(a) {
            return !l(a) || r(q) || c(a) <= q
          }, g.$observe("max", function(a) {
            q = m(a), h.$validate()
          })
        }
      }
    }

    function sd(a, b, c, d) {
      var e = b[0],
        f = d.$$hasNativeValidators = t(e.validity);
      f && d.$parsers.push(function(a) {
        var c = b.prop(Ed) || {};
        return c.badInput || c.typeMismatch ? void 0 : a
      })
    }

    function td(a, b, c, d, e, f) {
      if (sd(a, b, c, d), od(a, b, c, d, e, f), d.$$parserName = "number", d.$parsers.push(function(a) {
          return d.$isEmpty(a) ? null : Sf.test(a) ? parseFloat(a) : void 0
        }), d.$formatters.push(function(a) {
          if (!d.$isEmpty(a)) {
            if (!w(a)) throw Bg("numfmt", "Expected `{0}` to be a number", a);
            a = a.toString()
          }
          return a
        }), s(c.min) || c.ngMin) {
        var g;
        d.$validators.min = function(a) {
          return d.$isEmpty(a) || r(g) || a >= g
        }, c.$observe("min", function(a) {
          s(a) && !w(a) && (a = parseFloat(a)), g = w(a) && !isNaN(a) ? a : void 0, d.$validate()
        })
      }
      if (s(c.max) || c.ngMax) {
        var h;
        d.$validators.max = function(a) {
          return d.$isEmpty(a) || r(h) || h >= a
        }, c.$observe("max", function(a) {
          s(a) && !w(a) && (a = parseFloat(a)), h = w(a) && !isNaN(a) ? a : void 0, d.$validate()
        })
      }
    }

    function ud(a, b, c, d, e, f) {
      od(a, b, c, d, e, f), md(d), d.$$parserName = "url", d.$validators.url = function(a, b) {
        var c = a || b;
        return d.$isEmpty(c) || Qf.test(c)
      }
    }

    function vd(a, b, c, d, e, f) {
      od(a, b, c, d, e, f), md(d), d.$$parserName = "email", d.$validators.email = function(a, b) {
        var c = a || b;
        return d.$isEmpty(c) || Rf.test(c)
      }
    }

    function wd(a, b, c, d) {
      r(c.name) && b.attr("name", g());
      var e = function(a) {
        b[0].checked && d.$setViewValue(c.value, a && a.type)
      };
      b.on("click", e), d.$render = function() {
        var a = c.value;
        b[0].checked = a == d.$viewValue
      }, c.$observe("value", d.$render)
    }

    function xd(a, b, c, d, e) {
      var f;
      if (s(d)) {
        if (f = a(d), !f.constant) throw Bg("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", c, d);
        return f(b)
      }
      return e
    }

    function yd(a, b, c, d, e, f, g, h) {
      var i = xd(h, a, "ngTrueValue", c.ngTrueValue, !0),
        j = xd(h, a, "ngFalseValue", c.ngFalseValue, !1),
        k = function(a) {
          d.$setViewValue(b[0].checked, a && a.type)
        };
      b.on("click", k), d.$render = function() {
        b[0].checked = d.$viewValue
      }, d.$isEmpty = function(a) {
        return a === !1
      }, d.$formatters.push(function(a) {
        return O(a, i)
      }), d.$parsers.push(function(a) {
        return a ? i : j
      })
    }

    function zd(a, b) {
      return a = "ngClass" + a, ["$animate", function(c) {
        function e(a, b) {
          var c = [];
          a: for (var d = 0; d < a.length; d++) {
            for (var e = a[d], f = 0; f < b.length; f++)
              if (e == b[f]) continue a;
            c.push(e)
          }
          return c
        }

        function f(a) {
          var b = [];
          return Wd(a) ? (d(a, function(a) {
            b = b.concat(f(a))
          }), b) : v(a) ? a.split(" ") : t(a) ? (d(a, function(a, c) {
            a && (b = b.concat(c.split(" ")))
          }), b) : a
        }
        return {
          restrict: "AC",
          link: function(g, h, i) {
            function j(a) {
              var b = l(a, 1);
              i.$addClass(b)
            }

            function k(a) {
              var b = l(a, -1);
              i.$removeClass(b)
            }

            function l(a, b) {
              var c = h.data("$classCounts") || oa(),
                e = [];
              return d(a, function(a) {
                (b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === +(b > 0) && e.push(a))
              }), h.data("$classCounts", c), e.join(" ")
            }

            function m(a, b) {
              var d = e(b, a),
                f = e(a, b);
              d = l(d, 1), f = l(f, -1), d && d.length && c.addClass(h, d), f && f.length && c.removeClass(h, f)
            }

            function n(a) {
              if (b === !0 || (1 & g.$index) === b) {
                var c = f(a || []);
                if (o) {
                  if (!O(a, o)) {
                    var d = f(o);
                    m(d, c)
                  }
                } else j(c)
              }
              o = Wd(a) ? a.map(function(a) {
                return qa(a)
              }) : qa(a)
            }
            var o;
            g.$watch(i[a], n, !0), i.$observe("class", function(b) {
              n(g.$eval(i[a]))
            }), "ngClass" !== a && g.$watch("$index", function(c, d) {
              var e = 1 & c;
              if (e !== (1 & d)) {
                var h = f(g.$eval(i[a]));
                e === b ? j(h) : k(h)
              }
            })
          }
        }
      }]
    }

    function Ad(a) {
      function b(a, b, h) {
        r(b) ? c("$pending", a, h) : d("$pending", a, h), F(b) ? b ? (k(g.$error, a, h), j(g.$$success, a, h)) : (j(g.$error, a, h), k(g.$$success, a, h)) : (k(g.$error, a, h), k(g.$$success, a, h)), g.$pending ? (e(yg, !0), g.$valid = g.$invalid = void 0, f("", null)) : (e(yg, !1), g.$valid = Bd(g.$error), g.$invalid = !g.$valid, f("", g.$valid));
        var i;
        i = g.$pending && g.$pending[a] ? void 0 : g.$error[a] ? !1 : g.$$success[a] ? !0 : null, f(a, i), g.$$parentForm.$setValidity(a, i, g)
      }

      function c(a, b, c) {
        g[a] || (g[a] = {}), j(g[a], b, c)
      }

      function d(a, b, c) {
        g[a] && k(g[a], b, c), Bd(g[a]) && (g[a] = void 0)
      }

      function e(a, b) {
        b && !i[a] ? (l.addClass(h, a), i[a] = !0) : !b && i[a] && (l.removeClass(h, a), i[a] = !1)
      }

      function f(a, b) {
        a = a ? "-" + ha(a, "-") : "", e(sg + a, b === !0), e(tg + a, b === !1)
      }
      var g = a.ctrl,
        h = a.$element,
        i = {},
        j = a.set,
        k = a.unset,
        l = a.$animate;
      i[tg] = !(i[sg] = h.hasClass(sg)), g.$setValidity = b
    }

    function Bd(a) {
      if (a)
        for (var b in a)
          if (a.hasOwnProperty(b)) return !1;
      return !0
    }

    function Cd(a) {
      a[0].hasAttribute("selected") && (a[0].selected = !0)
    }
    var Dd = /^\/(.+)\/([a-z]*)$/,
      Ed = "validity",
      Fd = Object.prototype.hasOwnProperty,
      Gd = function(a) {
        return v(a) ? a.toLowerCase() : a
      },
      Hd = function(a) {
        return v(a) ? a.toUpperCase() : a
      },
      Id = function(a) {
        return v(a) ? a.replace(/[A-Z]/g, function(a) {
          return String.fromCharCode(32 | a.charCodeAt(0))
        }) : a
      },
      Jd = function(a) {
        return v(a) ? a.replace(/[a-z]/g, function(a) {
          return String.fromCharCode(-33 & a.charCodeAt(0))
        }) : a
      };
    "i" !== "I".toLowerCase() && (Gd = Id, Hd = Jd);
    var Kd, Ld, Md, Nd, Od = [].slice,
      Pd = [].splice,
      Qd = [].push,
      Rd = Object.prototype.toString,
      Sd = Object.getPrototypeOf,
      Td = b("ng"),
      Ud = a.angular || (a.angular = {}),
      Vd = 0;
    Kd = a.document.documentMode, n.$inject = [], o.$inject = [];
    var Wd = Array.isArray,
      Xd = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
      Yd = function(a) {
        return v(a) ? a.trim() : a
      },
      Zd = function(a) {
        return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
      },
      $d = function() {
        function b() {
          try {
            return new Function(""), !1
          } catch (a) {
            return !0
          }
        }
        if (!s($d.rules)) {
          var c = a.document.querySelector("[ng-csp]") || a.document.querySelector("[data-ng-csp]");
          if (c) {
            var d = c.getAttribute("ng-csp") || c.getAttribute("data-ng-csp");
            $d.rules = {
              noUnsafeEval: !d || -1 !== d.indexOf("no-unsafe-eval"),
              noInlineStyle: !d || -1 !== d.indexOf("no-inline-style")
            }
          } else $d.rules = {
            noUnsafeEval: b(),
            noInlineStyle: !1
          }
        }
        return $d.rules
      },
      _d = function() {
        if (s(_d.name_)) return _d.name_;
        var b, c, d, e, f = be.length;
        for (c = 0; f > c; ++c)
          if (d = be[c], b = a.document.querySelector("[" + d.replace(":", "\\:") + "jq]")) {
            e = b.getAttribute(d + "jq");
            break
          }
        return _d.name_ = e
      },
      ae = /:/g,
      be = ["ng-", "data-ng-", "ng:", "x-ng-"],
      ce = /[A-Z]/g,
      de = !1,
      ee = 1,
      fe = 2,
      ge = 3,
      he = 8,
      ie = 9,
      je = 11,
      ke = {
        full: "1.5.8",
        major: 1,
        minor: 5,
        dot: 8,
        codeName: "arbitrary-fallbacks"
      };
    Da.expando = "ng339";
    var le = Da.cache = {},
      me = 1,
      ne = function(a, b, c) {
        a.addEventListener(b, c, !1)
      },
      oe = function(a, b, c) {
        a.removeEventListener(b, c, !1)
      };
    Da._data = function(a) {
      return this.cache[a[this.expando]] || {}
    };
    var pe = /([\:\-\_]+(.))/g,
      qe = /^moz([A-Z])/,
      re = {
        mouseleave: "mouseout",
        mouseenter: "mouseover"
      },
      se = b("jqLite"),
      te = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      ue = /<|&#?\w+;/,
      ve = /<([\w:-]+)/,
      we = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      xe = {
        option: [1, '<select multiple="multiple">', "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
    xe.optgroup = xe.option, xe.tbody = xe.tfoot = xe.colgroup = xe.caption = xe.thead, xe.th = xe.td;
    var ye = a.Node.prototype.contains || function(a) {
        return !!(16 & this.compareDocumentPosition(a))
      },
      ze = Da.prototype = {
        ready: function(b) {
          function c() {
            d || (d = !0, b())
          }
          var d = !1;
          "complete" === a.document.readyState ? a.setTimeout(c) : (this.on("DOMContentLoaded", c), Da(a).on("load", c))
        },
        toString: function() {
          var a = [];
          return d(this, function(b) {
            a.push("" + b)
          }), "[" + a.join(", ") + "]"
        },
        eq: function(a) {
          return Ld(a >= 0 ? this[a] : this[this.length + a])
        },
        length: 0,
        push: Qd,
        sort: [].sort,
        splice: [].splice
      },
      Ae = {};
    d("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(a) {
      Ae[Gd(a)] = a
    });
    var Be = {};
    d("input,select,option,textarea,button,form,details".split(","), function(a) {
      Be[a] = !0
    });
    var Ce = {
      ngMinlength: "minlength",
      ngMaxlength: "maxlength",
      ngMin: "min",
      ngMax: "max",
      ngPattern: "pattern"
    };
    d({
      data: Ja,
      removeData: Ha,
      hasData: ya,
      cleanData: za
    }, function(a, b) {
      Da[b] = a
    }), d({
      data: Ja,
      inheritedData: Pa,
      scope: function(a) {
        return Ld.data(a, "$scope") || Pa(a.parentNode || a, ["$isolateScope", "$scope"])
      },
      isolateScope: function(a) {
        return Ld.data(a, "$isolateScope") || Ld.data(a, "$isolateScopeNoTemplate")
      },
      controller: Oa,
      injector: function(a) {
        return Pa(a, "$injector")
      },
      removeAttr: function(a, b) {
        a.removeAttribute(b)
      },
      hasClass: Ka,
      css: function(a, b, c) {
        return b = va(b), s(c) ? void(a.style[b] = c) : a.style[b]
      },
      attr: function(a, b, c) {
        var d = a.nodeType;
        if (d !== ge && d !== fe && d !== he) {
          var e = Gd(b);
          if (Ae[e]) {
            if (!s(c)) return a[b] || (a.attributes.getNamedItem(b) || n).specified ? e : void 0;
            c ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e))
          } else if (s(c)) a.setAttribute(b, c);
          else if (a.getAttribute) {
            var f = a.getAttribute(b, 2);
            return null === f ? void 0 : f
          }
        }
      },
      prop: function(a, b, c) {
        return s(c) ? void(a[b] = c) : a[b]
      },
      text: function() {
        function a(a, b) {
          if (r(b)) {
            var c = a.nodeType;
            return c === ee || c === ge ? a.textContent : ""
          }
          a.textContent = b
        }
        return a.$dv = "", a
      }(),
      val: function(a, b) {
        if (r(b)) {
          if (a.multiple && "select" === L(a)) {
            var c = [];
            return d(a.options, function(a) {
              a.selected && c.push(a.value || a.text)
            }), 0 === c.length ? null : c
          }
          return a.value
        }
        a.value = b
      },
      html: function(a, b) {
        return r(b) ? a.innerHTML : (Fa(a, !0), void(a.innerHTML = b))
      },
      empty: Qa
    }, function(a, b) {
      Da.prototype[b] = function(b, c) {
        var d, e, f = this.length;
        if (a !== Qa && r(2 == a.length && a !== Ka && a !== Oa ? b : c)) {
          if (t(b)) {
            for (d = 0; f > d; d++)
              if (a === Ja) a(this[d], b);
              else
                for (e in b) a(this[d], e, b[e]);
            return this
          }
          for (var g = a.$dv, h = r(g) ? Math.min(f, 1) : f, i = 0; h > i; i++) {
            var j = a(this[i], b, c);
            g = g ? g + j : j
          }
          return g
        }
        for (d = 0; f > d; d++) a(this[d], b, c);
        return this
      }
    }), d({
      removeData: Ha,
      on: function(a, b, c, d) {
        if (s(d)) throw se("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
        if (xa(a)) {
          var e = Ia(a, !0),
            f = e.events,
            g = e.handle;
          g || (g = e.handle = Va(a, f));
          for (var h = b.indexOf(" ") >= 0 ? b.split(" ") : [b], i = h.length, j = function(b, d, e) {
              var h = f[b];
              h || (h = f[b] = [], h.specialHandlerWrapper = d, "$destroy" === b || e || ne(a, b, g)), h.push(c)
            }; i--;) b = h[i], re[b] ? (j(re[b], Xa), j(b, void 0, !0)) : j(b)
        }
      },
      off: Ga,
      one: function(a, b, c) {
        a = Ld(a), a.on(b, function d() {
          a.off(b, c), a.off(b, d)
        }), a.on(b, c)
      },
      replaceWith: function(a, b) {
        var c, e = a.parentNode;
        Fa(a), d(new Da(b), function(b) {
          c ? e.insertBefore(b, c.nextSibling) : e.replaceChild(b, a), c = b
        })
      },
      children: function(a) {
        var b = [];
        return d(a.childNodes, function(a) {
          a.nodeType === ee && b.push(a)
        }), b
      },
      contents: function(a) {
        return a.contentDocument || a.childNodes || []
      },
      append: function(a, b) {
        var c = a.nodeType;
        if (c === ee || c === je) {
          b = new Da(b);
          for (var d = 0, e = b.length; e > d; d++) {
            var f = b[d];
            a.appendChild(f)
          }
        }
      },
      prepend: function(a, b) {
        if (a.nodeType === ee) {
          var c = a.firstChild;
          d(new Da(b), function(b) {
            a.insertBefore(b, c)
          })
        }
      },
      wrap: function(a, b) {
        Ca(a, Ld(b).eq(0).clone()[0])
      },
      remove: Ra,
      detach: function(a) {
        Ra(a, !0)
      },
      after: function(a, b) {
        var c = a,
          d = a.parentNode;
        b = new Da(b);
        for (var e = 0, f = b.length; f > e; e++) {
          var g = b[e];
          d.insertBefore(g, c.nextSibling), c = g
        }
      },
      addClass: Ma,
      removeClass: La,
      toggleClass: function(a, b, c) {
        b && d(b.split(" "), function(b) {
          var d = c;
          r(d) && (d = !Ka(a, b)), (d ? Ma : La)(a, b)
        })
      },
      parent: function(a) {
        var b = a.parentNode;
        return b && b.nodeType !== je ? b : null
      },
      next: function(a) {
        return a.nextElementSibling
      },
      find: function(a, b) {
        return a.getElementsByTagName ? a.getElementsByTagName(b) : []
      },
      clone: Ea,
      triggerHandler: function(a, b, c) {
        var e, f, g, h = b.type || b,
          i = Ia(a),
          k = i && i.events,
          l = k && k[h];
        l && (e = {
          preventDefault: function() {
            this.defaultPrevented = !0
          },
          isDefaultPrevented: function() {
            return this.defaultPrevented === !0
          },
          stopImmediatePropagation: function() {
            this.immediatePropagationStopped = !0
          },
          isImmediatePropagationStopped: function() {
            return this.immediatePropagationStopped === !0
          },
          stopPropagation: n,
          type: h,
          target: a
        }, b.type && (e = j(e, b)), f = qa(l), g = c ? [e].concat(c) : [e], d(f, function(b) {
          e.isImmediatePropagationStopped() || b.apply(a, g)
        }))
      }
    }, function(a, b) {
      Da.prototype[b] = function(b, c, d) {
        for (var e, f = 0, g = this.length; g > f; f++) r(e) ? (e = a(this[f], b, c, d), s(e) && (e = Ld(e))) : Na(e, a(this[f], b, c, d));
        return s(e) ? e : this
      }, Da.prototype.bind = Da.prototype.on, Da.prototype.unbind = Da.prototype.off
    }), $a.prototype = {
      put: function(a, b) {
        this[Za(a, this.nextUid)] = b
      },
      get: function(a) {
        return this[Za(a, this.nextUid)]
      },
      remove: function(a) {
        var b = this[a = Za(a, this.nextUid)];
        return delete this[a], b
      }
    };
    var De = [function() {
        this.$get = [function() {
          return $a
        }]
      }],
      Ee = /^([^\(]+?)=>/,
      Fe = /^[^\(]*\(\s*([^\)]*)\)/m,
      Ge = /,/,
      He = /^\s*(_?)(\S+?)\1\s*$/,
      Ie = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
      Je = b("$injector");
    db.$$annotate = cb;
    var Ke = b("$animate"),
      Le = 1,
      Me = "ng-animate",
      Ne = function() {
        this.$get = n
      },
      Oe = function() {
        var a = new $a,
          b = [];
        this.$get = ["$$AnimateRunner", "$rootScope", function(c, e) {
          function f(a, b, c) {
            var e = !1;
            return b && (b = v(b) ? b.split(" ") : Wd(b) ? b : [], d(b, function(b) {
              b && (e = !0, a[b] = c)
            })), e
          }

          function g() {
            d(b, function(b) {
              var c = a.get(b);
              if (c) {
                var e = hb(b.attr("class")),
                  f = "",
                  g = "";
                d(c, function(a, b) {
                  var c = !!e[b];
                  a !== c && (a ? f += (f.length ? " " : "") + b : g += (g.length ? " " : "") + b)
                }), d(b, function(a) {
                  f && Ma(a, f), g && La(a, g)
                }), a.remove(b)
              }
            }), b.length = 0
          }

          function h(c, d, h) {
            var i = a.get(c) || {},
              j = f(i, d, !0),
              k = f(i, h, !1);
            (j || k) && (a.put(c, i), b.push(c), 1 === b.length && e.$$postDigest(g))
          }
          return {
            enabled: n,
            on: n,
            off: n,
            pin: n,
            push: function(a, b, d, e) {
              e && e(), d = d || {}, d.from && a.css(d.from), d.to && a.css(d.to), (d.addClass || d.removeClass) && h(a, d.addClass, d.removeClass);
              var f = new c;
              return f.complete(), f
            }
          }
        }]
      },
      Pe = ["$provide", function(a) {
        var b = this;
        this.$$registeredAnimations = Object.create(null), this.register = function(c, d) {
          if (c && "." !== c.charAt(0)) throw Ke("notcsel", "Expecting class selector starting with '.' got '{0}'.", c);
          var e = c + "-animation";
          b.$$registeredAnimations[c.substr(1)] = e, a.factory(e, d)
        }, this.classNameFilter = function(a) {
          if (1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null, this.$$classNameFilter)) {
            var b = new RegExp("(\\s+|\\/)" + Me + "(\\s+|\\/)");
            if (b.test(this.$$classNameFilter.toString())) throw Ke("nongcls", '$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.', Me)
          }
          return this.$$classNameFilter
        }, this.$get = ["$$animateQueue", function(a) {
          function b(a, b, c) {
            if (c) {
              var d = gb(c);
              !d || d.parentNode || d.previousElementSibling || (c = null)
            }
            c ? c.after(a) : b.prepend(a)
          }
          return {
            on: a.on,
            off: a.off,
            pin: a.pin,
            enabled: a.enabled,
            cancel: function(a) {
              a.end && a.end()
            },
            enter: function(c, d, e, f) {
              return d = d && Ld(d), e = e && Ld(e), d = d || e.parent(), b(c, d, e), a.push(c, "enter", ib(f))
            },
            move: function(c, d, e, f) {
              return d = d && Ld(d), e = e && Ld(e), d = d || e.parent(), b(c, d, e), a.push(c, "move", ib(f))
            },
            leave: function(b, c) {
              return a.push(b, "leave", ib(c), function() {
                b.remove()
              })
            },
            addClass: function(b, c, d) {
              return d = ib(d), d.addClass = fb(d.addclass, c), a.push(b, "addClass", d)
            },
            removeClass: function(b, c, d) {
              return d = ib(d), d.removeClass = fb(d.removeClass, c), a.push(b, "removeClass", d)
            },
            setClass: function(b, c, d, e) {
              return e = ib(e), e.addClass = fb(e.addClass, c), e.removeClass = fb(e.removeClass, d), a.push(b, "setClass", e)
            },
            animate: function(b, c, d, e, f) {
              return f = ib(f), f.from = f.from ? j(f.from, c) : c, f.to = f.to ? j(f.to, d) : d, e = e || "ng-inline-animate", f.tempClasses = fb(f.tempClasses, e), a.push(b, "animate", f)
            }
          }
        }]
      }],
      Qe = function() {
        this.$get = ["$$rAF", function(a) {
          function b(b) {
            c.push(b), c.length > 1 || a(function() {
              for (var a = 0; a < c.length; a++) c[a]();
              c = []
            })
          }
          var c = [];
          return function() {
            var a = !1;
            return b(function() {
                a = !0
              }),
              function(c) {
                a ? c() : b(c)
              }
          }
        }]
      },
      Re = function() {
        this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function(a, b, c, e, f) {
          function g(a) {
            this.setHost(a);
            var b = c(),
              d = function(a) {
                f(a, 0, !1)
              };
            this._doneCallbacks = [], this._tick = function(a) {
              var c = e[0];
              c && c.hidden ? d(a) : b(a)
            }, this._state = 0
          }
          var h = 0,
            i = 1,
            j = 2;
          return g.chain = function(a, b) {
            function c() {
              return d === a.length ? void b(!0) : void a[d](function(a) {
                return a === !1 ? void b(!1) : (d++, void c())
              })
            }
            var d = 0;
            c()
          }, g.all = function(a, b) {
            function c(c) {
              f = f && c, ++e === a.length && b(f)
            }
            var e = 0,
              f = !0;
            d(a, function(a) {
              a.done(c)
            })
          }, g.prototype = {
            setHost: function(a) {
              this.host = a || {}
            },
            done: function(a) {
              this._state === j ? a() : this._doneCallbacks.push(a)
            },
            progress: n,
            getPromise: function() {
              if (!this.promise) {
                var b = this;
                this.promise = a(function(a, c) {
                  b.done(function(b) {
                    b === !1 ? c() : a()
                  })
                })
              }
              return this.promise
            },
            then: function(a, b) {
              return this.getPromise().then(a, b)
            },
            "catch": function(a) {
              return this.getPromise()["catch"](a)
            },
            "finally": function(a) {
              return this.getPromise()["finally"](a)
            },
            pause: function() {
              this.host.pause && this.host.pause()
            },
            resume: function() {
              this.host.resume && this.host.resume()
            },
            end: function() {
              this.host.end && this.host.end(), this._resolve(!0)
            },
            cancel: function() {
              this.host.cancel && this.host.cancel(), this._resolve(!1)
            },
            complete: function(a) {
              var b = this;
              b._state === h && (b._state = i, b._tick(function() {
                b._resolve(a)
              }))
            },
            _resolve: function(a) {
              this._state !== j && (d(this._doneCallbacks, function(b) {
                b(a)
              }), this._doneCallbacks.length = 0, this._state = j)
            }
          }, g
        }]
      },
      Se = function() {
        this.$get = ["$$rAF", "$q", "$$AnimateRunner", function(a, b, c) {
          return function(b, d) {
            function e() {
              return a(function() {
                f(), h || i.complete(), h = !0
              }), i
            }

            function f() {
              g.addClass && (b.addClass(g.addClass), g.addClass = null), g.removeClass && (b.removeClass(g.removeClass), g.removeClass = null), g.to && (b.css(g.to), g.to = null)
            }
            var g = d || {};
            g.$$prepared || (g = N(g)), g.cleanupStyles && (g.from = g.to = null), g.from && (b.css(g.from), g.from = null);
            var h, i = new c;
            return {
              start: e,
              end: e
            }
          }
        }]
      },
      Te = b("$compile"),
      Ue = new nb;
    ob.$inject = ["$provide", "$$sanitizeUriProvider"], pb.prototype.isFirstChange = function() {
      return this.previousValue === Ue
    };
    var Ve = /^((?:x|data)[\:\-_])/i,
      We = b("$controller"),
      Xe = /^(\S+)(\s+as\s+([\w$]+))?$/,
      Ye = function() {
        this.$get = ["$document", function(a) {
          return function(b) {
            return b ? !b.nodeType && b instanceof Ld && (b = b[0]) : b = a[0].body, b.offsetWidth + 1
          }
        }]
      },
      Ze = "application/json",
      $e = {
        "Content-Type": Ze + ";charset=utf-8"
      },
      _e = /^\[|^\{(?!\{)/,
      af = {
        "[": /]$/,
        "{": /}$/
      },
      bf = /^\)\]\}',?\n/,
      cf = b("$http"),
      df = function(a) {
        return function() {
          throw cf("legacy", "The method `{0}` on the promise returned from `$http` has been disabled.", a)
        }
      },
      ef = Ud.$interpolateMinErr = b("$interpolate");
    ef.throwNoconcat = function(a) {
      throw ef("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", a)
    }, ef.interr = function(a, b) {
      return ef("interr", "Can't interpolate: {0}\n{1}", a, b.toString())
    };
    var ff = function() {
        this.$get = ["$window", function(a) {
          function b(a) {
            var b = function(a) {
              b.data = a, b.called = !0
            };
            return b.id = a, b
          }
          var c = a.angular.callbacks,
            d = {};
          return {
            createCallback: function(a) {
              var e = "_" + (c.$$counter++).toString(36),
                f = "angular.callbacks." + e,
                g = b(e);
              return d[f] = c[e] = g, f
            },
            wasCalled: function(a) {
              return d[a].called
            },
            getResponse: function(a) {
              return d[a].data
            },
            removeCallback: function(a) {
              var b = d[a];
              delete c[b.id], delete d[a]
            }
          }
        }]
      },
      gf = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
      hf = {
        http: 80,
        https: 443,
        ftp: 21
      },
      jf = b("$location"),
      kf = {
        $$absUrl: "",
        $$html5: !1,
        $$replace: !1,
        absUrl: Yb("$$absUrl"),
        url: function(a) {
          if (r(a)) return this.$$url;
          var b = gf.exec(a);
          return (b[1] || "" === a) && this.path(decodeURIComponent(b[1])), (b[2] || b[1] || "" === a) && this.search(b[3] || ""), this.hash(b[5] || ""), this
        },
        protocol: Yb("$$protocol"),
        host: Yb("$$host"),
        port: Yb("$$port"),
        path: Zb("$$path", function(a) {
          return a = null !== a ? a.toString() : "", "/" == a.charAt(0) ? a : "/" + a
        }),
        search: function(a, b) {
          switch (arguments.length) {
            case 0:
              return this.$$search;
            case 1:
              if (v(a) || w(a)) a = a.toString(), this.$$search = $(a);
              else {
                if (!t(a)) throw jf("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                a = N(a, {}), d(a, function(b, c) {
                  null == b && delete a[c]
                }), this.$$search = a
              }
              break;
            default:
              r(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
          }
          return this.$$compose(), this
        },
        hash: Zb("$$hash", function(a) {
          return null !== a ? a.toString() : ""
        }),
        replace: function() {
          return this.$$replace = !0, this
        }
      };
    d([Xb, Wb, Vb], function(a) {
      a.prototype = Object.create(kf), a.prototype.state = function(b) {
        if (!arguments.length) return this.$$state;
        if (a !== Vb || !this.$$html5) throw jf("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
        return this.$$state = r(b) ? null : b, this
      }
    });
    var lf = b("$parse"),
      mf = Function.prototype.call,
      nf = Function.prototype.apply,
      of = Function.prototype.bind,
      pf = oa();
    d("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function(a) {
      pf[a] = !0
    });
    var qf = {
        n: "\n",
        f: "\f",
        r: "\r",
        t: "	",
        v: "",
        "'": "'",
        '"': '"'
      },
      rf = function(a) {
        this.options = a
      };
    rf.prototype = {
      constructor: rf,
      lex: function(a) {
        for (this.text = a, this.index = 0, this.tokens = []; this.index < this.text.length;) {
          var b = this.text.charAt(this.index);
          if ('"' === b || "'" === b) this.readString(b);
          else if (this.isNumber(b) || "." === b && this.isNumber(this.peek())) this.readNumber();
          else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();
          else if (this.is(b, "(){}[].,;:?")) this.tokens.push({
            index: this.index,
            text: b
          }), this.index++;
          else if (this.isWhitespace(b)) this.index++;
          else {
            var c = b + this.peek(),
              d = c + this.peek(2),
              e = pf[b],
              f = pf[c],
              g = pf[d];
            if (e || f || g) {
              var h = g ? d : f ? c : b;
              this.tokens.push({
                index: this.index,
                text: h,
                operator: !0
              }), this.index += h.length
            } else this.throwError("Unexpected next character ", this.index, this.index + 1)
          }
        }
        return this.tokens
      },
      is: function(a, b) {
        return -1 !== b.indexOf(a)
      },
      peek: function(a) {
        var b = a || 1;
        return this.index + b < this.text.length ? this.text.charAt(this.index + b) : !1
      },
      isNumber: function(a) {
        return a >= "0" && "9" >= a && "string" == typeof a
      },
      isWhitespace: function(a) {
        return " " === a || "\r" === a || "	" === a || "\n" === a || "" === a || " " === a
      },
      isIdentifierStart: function(a) {
        return this.options.isIdentifierStart ? this.options.isIdentifierStart(a, this.codePointAt(a)) : this.isValidIdentifierStart(a)
      },
      isValidIdentifierStart: function(a) {
        return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a
      },
      isIdentifierContinue: function(a) {
        return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(a, this.codePointAt(a)) : this.isValidIdentifierContinue(a)
      },
      isValidIdentifierContinue: function(a, b) {
        return this.isValidIdentifierStart(a, b) || this.isNumber(a)
      },
      codePointAt: function(a) {
        return 1 === a.length ? a.charCodeAt(0) : (a.charCodeAt(0) << 10) + a.charCodeAt(1) - 56613888
      },
      peekMultichar: function() {
        var a = this.text.charAt(this.index),
          b = this.peek();
        if (!b) return a;
        var c = a.charCodeAt(0),
          d = b.charCodeAt(0);
        return c >= 55296 && 56319 >= c && d >= 56320 && 57343 >= d ? a + b : a
      },
      isExpOperator: function(a) {
        return "-" === a || "+" === a || this.isNumber(a)
      },
      throwError: function(a, b, c) {
        c = c || this.index;
        var d = s(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c;
        throw lf("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text)
      },
      readNumber: function() {
        for (var a = "", b = this.index; this.index < this.text.length;) {
          var c = Gd(this.text.charAt(this.index));
          if ("." == c || this.isNumber(c)) a += c;
          else {
            var d = this.peek();
            if ("e" == c && this.isExpOperator(d)) a += c;
            else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1)) a += c;
            else {
              if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1)) break;
              this.throwError("Invalid exponent")
            }
          }
          this.index++
        }
        this.tokens.push({
          index: b,
          text: a,
          constant: !0,
          value: Number(a)
        })
      },
      readIdent: function() {
        var a = this.index;
        for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
          var b = this.peekMultichar();
          if (!this.isIdentifierContinue(b)) break;
          this.index += b.length
        }
        this.tokens.push({
          index: a,
          text: this.text.slice(a, this.index),
          identifier: !0
        })
      },
      readString: function(a) {
        var b = this.index;
        this.index++;
        for (var c = "", d = a, e = !1; this.index < this.text.length;) {
          var f = this.text.charAt(this.index);
          if (d += f, e) {
            if ("u" === f) {
              var g = this.text.substring(this.index + 1, this.index + 5);
              g.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + g + "]"), this.index += 4, c += String.fromCharCode(parseInt(g, 16))
            } else {
              var h = qf[f];
              c += h || f
            }
            e = !1
          } else if ("\\" === f) e = !0;
          else {
            if (f === a) return this.index++, void this.tokens.push({
              index: b,
              text: d,
              constant: !0,
              value: c
            });
            c += f
          }
          this.index++
        }
        this.throwError("Unterminated quote", b)
      }
    };
    var sf = function(a, b) {
      this.lexer = a, this.options = b
    };
    sf.Program = "Program", sf.ExpressionStatement = "ExpressionStatement", sf.AssignmentExpression = "AssignmentExpression", sf.ConditionalExpression = "ConditionalExpression", sf.LogicalExpression = "LogicalExpression", sf.BinaryExpression = "BinaryExpression", sf.UnaryExpression = "UnaryExpression", sf.CallExpression = "CallExpression", sf.MemberExpression = "MemberExpression", sf.Identifier = "Identifier", sf.Literal = "Literal", sf.ArrayExpression = "ArrayExpression", sf.Property = "Property", sf.ObjectExpression = "ObjectExpression", sf.ThisExpression = "ThisExpression", sf.LocalsExpression = "LocalsExpression", sf.NGValueParameter = "NGValueParameter", sf.prototype = {
      ast: function(a) {
        this.text = a, this.tokens = this.lexer.lex(a);
        var b = this.program();
        return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), b
      },
      program: function() {
        for (var a = [];;)
          if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && a.push(this.expressionStatement()), !this.expect(";")) return {
            type: sf.Program,
            body: a
          }
      },
      expressionStatement: function() {
        return {
          type: sf.ExpressionStatement,
          expression: this.filterChain()
        }
      },
      filterChain: function() {
        for (var a, b = this.expression(); a = this.expect("|");) b = this.filter(b);
        return b
      },
      expression: function() {
        return this.assignment()
      },
      assignment: function() {
        var a = this.ternary();
        return this.expect("=") && (a = {
          type: sf.AssignmentExpression,
          left: a,
          right: this.assignment(),
          operator: "="
        }), a
      },
      ternary: function() {
        var a, b, c = this.logicalOR();
        return this.expect("?") && (a = this.expression(), this.consume(":")) ? (b = this.expression(), {
          type: sf.ConditionalExpression,
          test: c,
          alternate: a,
          consequent: b
        }) : c
      },
      logicalOR: function() {
        for (var a = this.logicalAND(); this.expect("||");) a = {
          type: sf.LogicalExpression,
          operator: "||",
          left: a,
          right: this.logicalAND()
        };
        return a
      },
      logicalAND: function() {
        for (var a = this.equality(); this.expect("&&");) a = {
          type: sf.LogicalExpression,
          operator: "&&",
          left: a,
          right: this.equality()
        };
        return a
      },
      equality: function() {
        for (var a, b = this.relational(); a = this.expect("==", "!=", "===", "!==");) b = {
          type: sf.BinaryExpression,
          operator: a.text,
          left: b,
          right: this.relational()
        };
        return b
      },
      relational: function() {
        for (var a, b = this.additive(); a = this.expect("<", ">", "<=", ">=");) b = {
          type: sf.BinaryExpression,
          operator: a.text,
          left: b,
          right: this.additive()
        };
        return b
      },
      additive: function() {
        for (var a, b = this.multiplicative(); a = this.expect("+", "-");) b = {
          type: sf.BinaryExpression,
          operator: a.text,
          left: b,
          right: this.multiplicative()
        };
        return b
      },
      multiplicative: function() {
        for (var a, b = this.unary(); a = this.expect("*", "/", "%");) b = {
          type: sf.BinaryExpression,
          operator: a.text,
          left: b,
          right: this.unary()
        };
        return b
      },
      unary: function() {
        var a;
        return (a = this.expect("+", "-", "!")) ? {
          type: sf.UnaryExpression,
          operator: a.text,
          prefix: !0,
          argument: this.unary()
        } : this.primary()
      },
      primary: function() {
        var a;
        this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? a = N(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? a = {
          type: sf.Literal,
          value: this.options.literals[this.consume().text]
        } : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
        for (var b; b = this.expect("(", "[", ".");) "(" === b.text ? (a = {
          type: sf.CallExpression,
          callee: a,
          arguments: this.parseArguments()
        }, this.consume(")")) : "[" === b.text ? (a = {
          type: sf.MemberExpression,
          object: a,
          property: this.expression(),
          computed: !0
        }, this.consume("]")) : "." === b.text ? a = {
          type: sf.MemberExpression,
          object: a,
          property: this.identifier(),
          computed: !1
        } : this.throwError("IMPOSSIBLE");
        return a
      },
      filter: function(a) {
        for (var b = [a], c = {
            type: sf.CallExpression,
            callee: this.identifier(),
            arguments: b,
            filter: !0
          }; this.expect(":");) b.push(this.expression());
        return c
      },
      parseArguments: function() {
        var a = [];
        if (")" !== this.peekToken().text)
          do a.push(this.filterChain()); while (this.expect(","));
        return a
      },
      identifier: function() {
        var a = this.consume();
        return a.identifier || this.throwError("is not a valid identifier", a), {
          type: sf.Identifier,
          name: a.text
        }
      },
      constant: function() {
        return {
          type: sf.Literal,
          value: this.consume().value
        }
      },
      arrayDeclaration: function() {
        var a = [];
        if ("]" !== this.peekToken().text)
          do {
            if (this.peek("]")) break;
            a.push(this.expression())
          } while (this.expect(","));
        return this.consume("]"), {
          type: sf.ArrayExpression,
          elements: a
        }
      },
      object: function() {
        var a, b = [];
        if ("}" !== this.peekToken().text)
          do {
            if (this.peek("}")) break;
            a = {
              type: sf.Property,
              kind: "init"
            }, this.peek().constant ? (a.key = this.constant(), a.computed = !1, this.consume(":"), a.value = this.expression()) : this.peek().identifier ? (a.key = this.identifier(), a.computed = !1, this.peek(":") ? (this.consume(":"), a.value = this.expression()) : a.value = a.key) : this.peek("[") ? (this.consume("["), a.key = this.expression(), this.consume("]"), a.computed = !0, this.consume(":"), a.value = this.expression()) : this.throwError("invalid key", this.peek()), b.push(a)
          } while (this.expect(","));
        return this.consume("}"), {
          type: sf.ObjectExpression,
          properties: b
        }
      },
      throwError: function(a, b) {
        throw lf("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index))
      },
      consume: function(a) {
        if (0 === this.tokens.length) throw lf("ueoe", "Unexpected end of expression: {0}", this.text);
        var b = this.expect(a);
        return b || this.throwError("is unexpected, expecting [" + a + "]", this.peek()), b
      },
      peekToken: function() {
        if (0 === this.tokens.length) throw lf("ueoe", "Unexpected end of expression: {0}", this.text);
        return this.tokens[0]
      },
      peek: function(a, b, c, d) {
        return this.peekAhead(0, a, b, c, d)
      },
      peekAhead: function(a, b, c, d, e) {
        if (this.tokens.length > a) {
          var f = this.tokens[a],
            g = f.text;
          if (g === b || g === c || g === d || g === e || !b && !c && !d && !e) return f
        }
        return !1
      },
      expect: function(a, b, c, d) {
        var e = this.peek(a, b, c, d);
        return e ? (this.tokens.shift(), e) : !1
      },
      selfReferential: {
        "this": {
          type: sf.ThisExpression
        },
        $locals: {
          type: sf.LocalsExpression
        }
      }
    }, oc.prototype = {
      compile: function(a, b) {
        var c = this,
          e = this.astBuilder.ast(a);
        this.state = {
          nextId: 0,
          filters: {},
          expensiveChecks: b,
          fn: {
            vars: [],
            body: [],
            own: {}
          },
          assign: {
            vars: [],
            body: [],
            own: {}
          },
          inputs: []
        }, ic(e, c.$filter);
        var f, g = "";
        if (this.stage = "assign", f = lc(e)) {
          this.state.computing = "assign";
          var h = this.nextId();
          this.recurse(f, h), this.return_(h), g = "fn.assign=" + this.generateFunction("assign", "s,v,l")
        }
        var i = jc(e.body);
        c.stage = "inputs", d(i, function(a, b) {
          var d = "fn" + b;
          c.state[d] = {
            vars: [],
            body: [],
            own: {}
          }, c.state.computing = d;
          var e = c.nextId();
          c.recurse(a, e), c.return_(e), c.state.inputs.push(d), a.watchId = b
        }), this.state.computing = "fn", this.stage = "main", this.recurse(e);
        var j = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + g + this.watchFns() + "return fn;",
          k = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", j)(this.$filter, ac, cc, dc, bc, ec, fc, gc, a);
        return this.state = this.stage = void 0, k.literal = mc(e), k.constant = nc(e), k
      },
      USE: "use",
      STRICT: "strict",
      watchFns: function() {
        var a = [],
          b = this.state.inputs,
          c = this;
        return d(b, function(b) {
          a.push("var " + b + "=" + c.generateFunction(b, "s"))
        }), b.length && a.push("fn.inputs=[" + b.join(",") + "];"), a.join("")
      },
      generateFunction: function(a, b) {
        return "function(" + b + "){" + this.varsPrefix(a) + this.body(a) + "};"
      },
      filterPrefix: function() {
        var a = [],
          b = this;
        return d(this.state.filters, function(c, d) {
          a.push(c + "=$filter(" + b.escape(d) + ")")
        }), a.length ? "var " + a.join(",") + ";" : ""
      },
      varsPrefix: function(a) {
        return this.state[a].vars.length ? "var " + this.state[a].vars.join(",") + ";" : ""
      },
      body: function(a) {
        return this.state[a].body.join("")
      },
      recurse: function(a, b, c, e, f, g) {
        var h, i, j, k, l, m = this;
        if (e = e || n, !g && s(a.watchId)) return b = b || this.nextId(), void this.if_("i", this.lazyAssign(b, this.computedMember("i", a.watchId)), this.lazyRecurse(a, b, c, e, f, !0));
        switch (a.type) {
          case sf.Program:
            d(a.body, function(b, c) {
              m.recurse(b.expression, void 0, void 0, function(a) {
                i = a
              }), c !== a.body.length - 1 ? m.current().body.push(i, ";") : m.return_(i)
            });
            break;
          case sf.Literal:
            k = this.escape(a.value), this.assign(b, k), e(k);
            break;
          case sf.UnaryExpression:
            this.recurse(a.argument, void 0, void 0, function(a) {
              i = a
            }), k = a.operator + "(" + this.ifDefined(i, 0) + ")", this.assign(b, k), e(k);
            break;
          case sf.BinaryExpression:
            this.recurse(a.left, void 0, void 0, function(a) {
              h = a
            }), this.recurse(a.right, void 0, void 0, function(a) {
              i = a
            }), k = "+" === a.operator ? this.plus(h, i) : "-" === a.operator ? this.ifDefined(h, 0) + a.operator + this.ifDefined(i, 0) : "(" + h + ")" + a.operator + "(" + i + ")", this.assign(b, k), e(k);
            break;
          case sf.LogicalExpression:
            b = b || this.nextId(), m.recurse(a.left, b), m.if_("&&" === a.operator ? b : m.not(b), m.lazyRecurse(a.right, b)), e(b);
            break;
          case sf.ConditionalExpression:
            b = b || this.nextId(), m.recurse(a.test, b), m.if_(b, m.lazyRecurse(a.alternate, b), m.lazyRecurse(a.consequent, b)), e(b);
            break;
          case sf.Identifier:
            b = b || this.nextId(), c && (c.context = "inputs" === m.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", a.name) + "?l:s"), c.computed = !1, c.name = a.name), ac(a.name), m.if_("inputs" === m.stage || m.not(m.getHasOwnProperty("l", a.name)), function() {
              m.if_("inputs" === m.stage || "s", function() {
                f && 1 !== f && m.if_(m.not(m.nonComputedMember("s", a.name)), m.lazyAssign(m.nonComputedMember("s", a.name), "{}")), m.assign(b, m.nonComputedMember("s", a.name))
              })
            }, b && m.lazyAssign(b, m.nonComputedMember("l", a.name))), (m.state.expensiveChecks || qc(a.name)) && m.addEnsureSafeObject(b), e(b);
            break;
          case sf.MemberExpression:
            h = c && (c.context = this.nextId()) || this.nextId(), b = b || this.nextId(), m.recurse(a.object, h, void 0, function() {
              m.if_(m.notNull(h), function() {
                f && 1 !== f && m.addEnsureSafeAssignContext(h), a.computed ? (i = m.nextId(), m.recurse(a.property, i), m.getStringValue(i), m.addEnsureSafeMemberName(i), f && 1 !== f && m.if_(m.not(m.computedMember(h, i)), m.lazyAssign(m.computedMember(h, i), "{}")), k = m.ensureSafeObject(m.computedMember(h, i)), m.assign(b, k), c && (c.computed = !0, c.name = i)) : (ac(a.property.name), f && 1 !== f && m.if_(m.not(m.nonComputedMember(h, a.property.name)), m.lazyAssign(m.nonComputedMember(h, a.property.name), "{}")), k = m.nonComputedMember(h, a.property.name), (m.state.expensiveChecks || qc(a.property.name)) && (k = m.ensureSafeObject(k)), m.assign(b, k), c && (c.computed = !1, c.name = a.property.name))
              }, function() {
                m.assign(b, "undefined")
              }), e(b)
            }, !!f);
            break;
          case sf.CallExpression:
            b = b || this.nextId(), a.filter ? (i = m.filter(a.callee.name), j = [], d(a.arguments, function(a) {
              var b = m.nextId();
              m.recurse(a, b), j.push(b)
            }), k = i + "(" + j.join(",") + ")", m.assign(b, k), e(b)) : (i = m.nextId(), h = {}, j = [], m.recurse(a.callee, i, h, function() {
              m.if_(m.notNull(i), function() {
                m.addEnsureSafeFunction(i), d(a.arguments, function(a) {
                  m.recurse(a, m.nextId(), void 0, function(a) {
                    j.push(m.ensureSafeObject(a))
                  })
                }), h.name ? (m.state.expensiveChecks || m.addEnsureSafeObject(h.context), k = m.member(h.context, h.name, h.computed) + "(" + j.join(",") + ")") : k = i + "(" + j.join(",") + ")", k = m.ensureSafeObject(k), m.assign(b, k)
              }, function() {
                m.assign(b, "undefined")
              }), e(b)
            }));
            break;
          case sf.AssignmentExpression:
            if (i = this.nextId(), h = {}, !kc(a.left)) throw lf("lval", "Trying to assign a value to a non l-value");
            this.recurse(a.left, void 0, h, function() {
              m.if_(m.notNull(h.context), function() {
                m.recurse(a.right, i), m.addEnsureSafeObject(m.member(h.context, h.name, h.computed)), m.addEnsureSafeAssignContext(h.context), k = m.member(h.context, h.name, h.computed) + a.operator + i, m.assign(b, k), e(b || k)
              })
            }, 1);
            break;
          case sf.ArrayExpression:
            j = [], d(a.elements, function(a) {
              m.recurse(a, m.nextId(), void 0, function(a) {
                j.push(a)
              })
            }), k = "[" + j.join(",") + "]", this.assign(b, k), e(k);
            break;
          case sf.ObjectExpression:
            j = [], l = !1, d(a.properties, function(a) {
              a.computed && (l = !0)
            }), l ? (b = b || this.nextId(), this.assign(b, "{}"), d(a.properties, function(a) {
              a.computed ? (h = m.nextId(), m.recurse(a.key, h)) : h = a.key.type === sf.Identifier ? a.key.name : "" + a.key.value, i = m.nextId(), m.recurse(a.value, i), m.assign(m.member(b, h, a.computed), i)
            })) : (d(a.properties, function(b) {
              m.recurse(b.value, a.constant ? void 0 : m.nextId(), void 0, function(a) {
                j.push(m.escape(b.key.type === sf.Identifier ? b.key.name : "" + b.key.value) + ":" + a)
              })
            }), k = "{" + j.join(",") + "}", this.assign(b, k)), e(b || k);
            break;
          case sf.ThisExpression:
            this.assign(b, "s"), e("s");
            break;
          case sf.LocalsExpression:
            this.assign(b, "l"), e("l");
            break;
          case sf.NGValueParameter:
            this.assign(b, "v"), e("v")
        }
      },
      getHasOwnProperty: function(a, b) {
        var c = a + "." + b,
          d = this.current().own;
        return d.hasOwnProperty(c) || (d[c] = this.nextId(!1, a + "&&(" + this.escape(b) + " in " + a + ")")), d[c]
      },
      assign: function(a, b) {
        return a ? (this.current().body.push(a, "=", b, ";"), a) : void 0
      },
      filter: function(a) {
        return this.state.filters.hasOwnProperty(a) || (this.state.filters[a] = this.nextId(!0)), this.state.filters[a]
      },
      ifDefined: function(a, b) {
        return "ifDefined(" + a + "," + this.escape(b) + ")"
      },
      plus: function(a, b) {
        return "plus(" + a + "," + b + ")"
      },
      return_: function(a) {
        this.current().body.push("return ", a, ";")
      },
      if_: function(a, b, c) {
        if (a === !0) b();
        else {
          var d = this.current().body;
          d.push("if(", a, "){"), b(), d.push("}"), c && (d.push("else{"), c(), d.push("}"))
        }
      },
      not: function(a) {
        return "!(" + a + ")"
      },
      notNull: function(a) {
        return a + "!=null"
      },
      nonComputedMember: function(a, b) {
        var c = /[$_a-zA-Z][$_a-zA-Z0-9]*/,
          d = /[^$_a-zA-Z0-9]/g;
        return c.test(b) ? a + "." + b : a + '["' + b.replace(d, this.stringEscapeFn) + '"]'
      },
      computedMember: function(a, b) {
        return a + "[" + b + "]"
      },
      member: function(a, b, c) {
        return c ? this.computedMember(a, b) : this.nonComputedMember(a, b)
      },
      addEnsureSafeObject: function(a) {
        this.current().body.push(this.ensureSafeObject(a), ";")
      },
      addEnsureSafeMemberName: function(a) {
        this.current().body.push(this.ensureSafeMemberName(a), ";")
      },
      addEnsureSafeFunction: function(a) {
        this.current().body.push(this.ensureSafeFunction(a), ";")
      },
      addEnsureSafeAssignContext: function(a) {
        this.current().body.push(this.ensureSafeAssignContext(a), ";")
      },
      ensureSafeObject: function(a) {
        return "ensureSafeObject(" + a + ",text)"
      },
      ensureSafeMemberName: function(a) {
        return "ensureSafeMemberName(" + a + ",text)"
      },
      ensureSafeFunction: function(a) {
        return "ensureSafeFunction(" + a + ",text)"
      },
      getStringValue: function(a) {
        this.assign(a, "getStringValue(" + a + ")")
      },
      ensureSafeAssignContext: function(a) {
        return "ensureSafeAssignContext(" + a + ",text)"
      },
      lazyRecurse: function(a, b, c, d, e, f) {
        var g = this;
        return function() {
          g.recurse(a, b, c, d, e, f)
        }
      },
      lazyAssign: function(a, b) {
        var c = this;
        return function() {
          c.assign(a, b)
        }
      },
      stringEscapeRegex: /[^ a-zA-Z0-9]/g,
      stringEscapeFn: function(a) {
        return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
      },
      escape: function(a) {
        if (v(a)) return "'" + a.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
        if (w(a)) return a.toString();
        if (a === !0) return "true";
        if (a === !1) return "false";
        if (null === a) return "null";
        if ("undefined" == typeof a) return "undefined";
        throw lf("esc", "IMPOSSIBLE")
      },
      nextId: function(a, b) {
        var c = "v" + this.state.nextId++;
        return a || this.current().vars.push(c + (b ? "=" + b : "")), c
      },
      current: function() {
        return this.state[this.state.computing]
      }
    }, pc.prototype = {
      compile: function(a, b) {
        var c = this,
          e = this.astBuilder.ast(a);
        this.expression = a, this.expensiveChecks = b, ic(e, c.$filter);
        var f, g;
        (f = lc(e)) && (g = this.recurse(f));
        var h, i = jc(e.body);
        i && (h = [], d(i, function(a, b) {
          var d = c.recurse(a);
          a.input = d, h.push(d), a.watchId = b
        }));
        var j = [];
        d(e.body, function(a) {
          j.push(c.recurse(a.expression))
        });
        var k = 0 === e.body.length ? n : 1 === e.body.length ? j[0] : function(a, b) {
          var c;
          return d(j, function(d) {
            c = d(a, b)
          }), c
        };
        return g && (k.assign = function(a, b, c) {
          return g(a, c, b)
        }), h && (k.inputs = h), k.literal = mc(e), k.constant = nc(e), k
      },
      recurse: function(a, b, c) {
        var e, f, g, h = this;
        if (a.input) return this.inputs(a.input, a.watchId);
        switch (a.type) {
          case sf.Literal:
            return this.value(a.value, b);
          case sf.UnaryExpression:
            return f = this.recurse(a.argument), this["unary" + a.operator](f, b);
          case sf.BinaryExpression:
            return e = this.recurse(a.left), f = this.recurse(a.right), this["binary" + a.operator](e, f, b);
          case sf.LogicalExpression:
            return e = this.recurse(a.left), f = this.recurse(a.right), this["binary" + a.operator](e, f, b);
          case sf.ConditionalExpression:
            return this["ternary?:"](this.recurse(a.test), this.recurse(a.alternate), this.recurse(a.consequent), b);
          case sf.Identifier:
            return ac(a.name, h.expression), h.identifier(a.name, h.expensiveChecks || qc(a.name), b, c, h.expression);
          case sf.MemberExpression:
            return e = this.recurse(a.object, !1, !!c), a.computed || (ac(a.property.name, h.expression), f = a.property.name), a.computed && (f = this.recurse(a.property)), a.computed ? this.computedMember(e, f, b, c, h.expression) : this.nonComputedMember(e, f, h.expensiveChecks, b, c, h.expression);
          case sf.CallExpression:
            return g = [], d(a.arguments, function(a) {
              g.push(h.recurse(a))
            }), a.filter && (f = this.$filter(a.callee.name)), a.filter || (f = this.recurse(a.callee, !0)), a.filter ? function(a, c, d, e) {
              for (var h = [], i = 0; i < g.length; ++i) h.push(g[i](a, c, d, e));
              var j = f.apply(void 0, h, e);
              return b ? {
                context: void 0,
                name: void 0,
                value: j
              } : j
            } : function(a, c, d, e) {
              var i, j = f(a, c, d, e);
              if (null != j.value) {
                cc(j.context, h.expression), dc(j.value, h.expression);
                for (var k = [], l = 0; l < g.length; ++l) k.push(cc(g[l](a, c, d, e), h.expression));
                i = cc(j.value.apply(j.context, k), h.expression)
              }
              return b ? {
                value: i
              } : i
            };
          case sf.AssignmentExpression:
            return e = this.recurse(a.left, !0, 1), f = this.recurse(a.right),
              function(a, c, d, g) {
                var i = e(a, c, d, g),
                  j = f(a, c, d, g);
                return cc(i.value, h.expression), ec(i.context), i.context[i.name] = j, b ? {
                  value: j
                } : j
              };
          case sf.ArrayExpression:
            return g = [], d(a.elements, function(a) {
                g.push(h.recurse(a))
              }),
              function(a, c, d, e) {
                for (var f = [], h = 0; h < g.length; ++h) f.push(g[h](a, c, d, e));
                return b ? {
                  value: f
                } : f
              };
          case sf.ObjectExpression:
            return g = [], d(a.properties, function(a) {
                a.computed ? g.push({
                  key: h.recurse(a.key),
                  computed: !0,
                  value: h.recurse(a.value)
                }) : g.push({
                  key: a.key.type === sf.Identifier ? a.key.name : "" + a.key.value,
                  computed: !1,
                  value: h.recurse(a.value)
                })
              }),
              function(a, c, d, e) {
                for (var f = {}, h = 0; h < g.length; ++h) g[h].computed ? f[g[h].key(a, c, d, e)] = g[h].value(a, c, d, e) : f[g[h].key] = g[h].value(a, c, d, e);
                return b ? {
                  value: f
                } : f
              };
          case sf.ThisExpression:
            return function(a) {
              return b ? {
                value: a
              } : a
            };
          case sf.LocalsExpression:
            return function(a, c) {
              return b ? {
                value: c
              } : c
            };
          case sf.NGValueParameter:
            return function(a, c, d) {
              return b ? {
                value: d
              } : d
            }
        }
      },
      "unary+": function(a, b) {
        return function(c, d, e, f) {
          var g = a(c, d, e, f);
          return g = s(g) ? +g : 0, b ? {
            value: g
          } : g
        }
      },
      "unary-": function(a, b) {
        return function(c, d, e, f) {
          var g = a(c, d, e, f);
          return g = s(g) ? -g : 0, b ? {
            value: g
          } : g
        }
      },
      "unary!": function(a, b) {
        return function(c, d, e, f) {
          var g = !a(c, d, e, f);
          return b ? {
            value: g
          } : g
        }
      },
      "binary+": function(a, b, c) {
        return function(d, e, f, g) {
          var h = a(d, e, f, g),
            i = b(d, e, f, g),
            j = gc(h, i);
          return c ? {
            value: j
          } : j
        }
      },
      "binary-": function(a, b, c) {
        return function(d, e, f, g) {
          var h = a(d, e, f, g),
            i = b(d, e, f, g),
            j = (s(h) ? h : 0) - (s(i) ? i : 0);
          return c ? {
            value: j
          } : j
        }
      },
      "binary*": function(a, b, c) {
        return function(d, e, f, g) {
          var h = a(d, e, f, g) * b(d, e, f, g);
          return c ? {
            value: h
          } : h
        }
      },
      "binary/": function(a, b, c) {
        return function(d, e, f, g) {
          var h = a(d, e, f, g) / b(d, e, f, g);
          return c ? {
            value: h
          } : h
        }
      },
      "binary%": function(a, b, c) {
        return function(d, e, f, g) {
          var h = a(d, e, f, g) % b(d, e, f, g);
          return c ? {
            value: h
          } : h
        }
      },
      "binary===": function(a, b, c) {
        return function(d, e, f, g) {
          var h = a(d, e, f, g) === b(d, e, f, g);
          return c ? {
            value: h
          } : h
        }
      },
      "binary!==": function(a, b, c) {
        return function(d, e, f, g) {
          var h = a(d, e, f, g) !== b(d, e, f, g);
          return c ? {
            value: h
          } : h
        }
      },
      "binary==": function(a, b, c) {
        return function(d, e, f, g) {
          var h = a(d, e, f, g) == b(d, e, f, g);
          return c ? {
            value: h
          } : h
        }
      },
      "binary!=": function(a, b, c) {
        return function(d, e, f, g) {
          var h = a(d, e, f, g) != b(d, e, f, g);
          return c ? {
            value: h
          } : h
        }
      },
      "binary<": function(a, b, c) {
        return function(d, e, f, g) {
          var h = a(d, e, f, g) < b(d, e, f, g);
          return c ? {
            value: h
          } : h
        }
      },
      "binary>": function(a, b, c) {
        return function(d, e, f, g) {
          var h = a(d, e, f, g) > b(d, e, f, g);
          return c ? {
            value: h
          } : h
        }
      },
      "binary<=": function(a, b, c) {
        return function(d, e, f, g) {
          var h = a(d, e, f, g) <= b(d, e, f, g);
          return c ? {
            value: h
          } : h
        }
      },
      "binary>=": function(a, b, c) {
        return function(d, e, f, g) {
          var h = a(d, e, f, g) >= b(d, e, f, g);
          return c ? {
            value: h
          } : h
        }
      },
      "binary&&": function(a, b, c) {
        return function(d, e, f, g) {
          var h = a(d, e, f, g) && b(d, e, f, g);
          return c ? {
            value: h
          } : h
        }
      },
      "binary||": function(a, b, c) {
        return function(d, e, f, g) {
          var h = a(d, e, f, g) || b(d, e, f, g);
          return c ? {
            value: h
          } : h
        }
      },
      "ternary?:": function(a, b, c, d) {
        return function(e, f, g, h) {
          var i = a(e, f, g, h) ? b(e, f, g, h) : c(e, f, g, h);
          return d ? {
            value: i
          } : i
        }
      },
      value: function(a, b) {
        return function() {
          return b ? {
            context: void 0,
            name: void 0,
            value: a
          } : a
        }
      },
      identifier: function(a, b, c, d, e) {
        return function(f, g, h, i) {
          var j = g && a in g ? g : f;
          d && 1 !== d && j && !j[a] && (j[a] = {});
          var k = j ? j[a] : void 0;
          return b && cc(k, e), c ? {
            context: j,
            name: a,
            value: k
          } : k
        }
      },
      computedMember: function(a, b, c, d, e) {
        return function(f, g, h, i) {
          var j, k, l = a(f, g, h, i);
          return null != l && (j = b(f, g, h, i), j = bc(j), ac(j, e), d && 1 !== d && (ec(l), l && !l[j] && (l[j] = {})), k = l[j], cc(k, e)), c ? {
            context: l,
            name: j,
            value: k
          } : k
        }
      },
      nonComputedMember: function(a, b, c, d, e, f) {
        return function(g, h, i, j) {
          var k = a(g, h, i, j);
          e && 1 !== e && (ec(k), k && !k[b] && (k[b] = {}));
          var l = null != k ? k[b] : void 0;
          return (c || qc(b)) && cc(l, f), d ? {
            context: k,
            name: b,
            value: l
          } : l
        }
      },
      inputs: function(a, b) {
        return function(c, d, e, f) {
          return f ? f[b] : a(c, d, e)
        }
      }
    };
    var tf = function(a, b, c) {
      this.lexer = a, this.$filter = b, this.options = c, this.ast = new sf(a, c), this.astCompiler = c.csp ? new pc(this.ast, b) : new oc(this.ast, b)
    };
    tf.prototype = {
      constructor: tf,
      parse: function(a) {
        return this.astCompiler.compile(a, this.options.expensiveChecks)
      }
    };
    var uf = Object.prototype.valueOf,
      vf = b("$sce"),
      wf = {
        HTML: "html",
        CSS: "css",
        URL: "url",
        RESOURCE_URL: "resourceUrl",
        JS: "js"
      },
      xf = b("$compile"),
      yf = a.document.createElement("a"),
      zf = Hc(a.location.href);
    Kc.$inject = ["$document"], Mc.$inject = ["$provide"];
    var Af = 22,
      Bf = ".",
      Cf = "0";
    Rc.$inject = ["$locale"], Sc.$inject = ["$locale"];
    var Df = {
        yyyy: Xc("FullYear", 4, 0, !1, !0),
        yy: Xc("FullYear", 2, 0, !0, !0),
        y: Xc("FullYear", 1, 0, !1, !0),
        MMMM: Yc("Month"),
        MMM: Yc("Month", !0),
        MM: Xc("Month", 2, 1),
        M: Xc("Month", 1, 1),
        LLLL: Yc("Month", !1, !0),
        dd: Xc("Date", 2),
        d: Xc("Date", 1),
        HH: Xc("Hours", 2),
        H: Xc("Hours", 1),
        hh: Xc("Hours", 2, -12),
        h: Xc("Hours", 1, -12),
        mm: Xc("Minutes", 2),
        m: Xc("Minutes", 1),
        ss: Xc("Seconds", 2),
        s: Xc("Seconds", 1),
        sss: Xc("Milliseconds", 3),
        EEEE: Yc("Day"),
        EEE: Yc("Day", !0),
        a: bd,
        Z: Zc,
        ww: ad(2),
        w: ad(1),
        G: cd,
        GG: cd,
        GGG: cd,
        GGGG: dd
      },
      Ef = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
      Ff = /^\-?\d+$/;
    ed.$inject = ["$locale"];
    var Gf = p(Gd),
      Hf = p(Hd);
    id.$inject = ["$parse"];
    var If = p({
        restrict: "E",
        compile: function(a, b) {
          return b.href || b.xlinkHref ? void 0 : function(a, b) {
            if ("a" === b[0].nodeName.toLowerCase()) {
              var c = "[object SVGAnimatedString]" === Rd.call(b.prop("href")) ? "xlink:href" : "href";
              b.on("click", function(a) {
                b.attr(c) || a.preventDefault()
              })
            }
          }
        }
      }),
      Jf = {};
    d(Ae, function(a, b) {
      function c(a, c, e) {
        a.$watch(e[d], function(a) {
          e.$set(b, !!a)
        })
      }
      if ("multiple" != a) {
        var d = qb("ng-" + b),
          e = c;
        "checked" === a && (e = function(a, b, e) {
          e.ngModel !== e[d] && c(a, b, e)
        }), Jf[d] = function() {
          return {
            restrict: "A",
            priority: 100,
            link: e
          }
        }
      }
    }), d(Ce, function(a, b) {
      Jf[b] = function() {
        return {
          priority: 100,
          link: function(a, c, d) {
            if ("ngPattern" === b && "/" == d.ngPattern.charAt(0)) {
              var e = d.ngPattern.match(Dd);
              if (e) return void d.$set("ngPattern", new RegExp(e[1], e[2]))
            }
            a.$watch(d[b], function(a) {
              d.$set(b, a)
            })
          }
        }
      }
    }), d(["src", "srcset", "href"], function(a) {
      var b = qb("ng-" + a);
      Jf[b] = function() {
        return {
          priority: 99,
          link: function(c, d, e) {
            var f = a,
              g = a;
            "href" === a && "[object SVGAnimatedString]" === Rd.call(d.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null), e.$observe(b, function(b) {
              return b ? (e.$set(g, b), void(Kd && f && d.prop(f, e[g]))) : void("href" === a && e.$set(g, null))
            })
          }
        }
      }
    });
    var Kf = {
        $addControl: n,
        $$renameControl: kd,
        $removeControl: n,
        $setValidity: n,
        $setDirty: n,
        $setPristine: n,
        $setSubmitted: n
      },
      Lf = "ng-submitted";
    ld.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var Mf = function(a) {
        return ["$timeout", "$parse", function(b, c) {
          function d(a) {
            return "" === a ? c('this[""]').assign : c(a).assign || n
          }
          var e = {
            name: "form",
            restrict: a ? "EAC" : "E",
            require: ["form", "^^?form"],
            controller: ld,
            compile: function(c, e) {
              c.addClass(ug).addClass(sg);
              var f = e.name ? "name" : a && e.ngForm ? "ngForm" : !1;
              return {
                pre: function(a, c, e, g) {
                  var h = g[0];
                  if (!("action" in e)) {
                    var i = function(b) {
                      a.$apply(function() {
                        h.$commitViewValue(), h.$setSubmitted()
                      }), b.preventDefault()
                    };
                    ne(c[0], "submit", i), c.on("$destroy", function() {
                      b(function() {
                        oe(c[0], "submit", i)
                      }, 0, !1)
                    })
                  }
                  var k = g[1] || h.$$parentForm;
                  k.$addControl(h);
                  var l = f ? d(h.$name) : n;
                  f && (l(a, h), e.$observe(f, function(b) {
                    h.$name !== b && (l(a, void 0), h.$$parentForm.$$renameControl(h, b), (l = d(h.$name))(a, h))
                  })), c.on("$destroy", function() {
                    h.$$parentForm.$removeControl(h), l(a, void 0), j(h, Kf)
                  })
                }
              }
            }
          };
          return e
        }]
      },
      Nf = Mf(),
      Of = Mf(!0),
      Pf = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
      Qf = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
      Rf = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
      Sf = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
      Tf = /^(\d{4,})-(\d{2})-(\d{2})$/,
      Uf = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      Vf = /^(\d{4,})-W(\d\d)$/,
      Wf = /^(\d{4,})-(\d\d)$/,
      Xf = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
      Yf = "keydown wheel mousedown",
      Zf = oa();
    d("date,datetime-local,month,time,week".split(","), function(a) {
      Zf[a] = !0
    });
    var $f = {
        text: nd,
        date: rd("date", Tf, qd(Tf, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
        "datetime-local": rd("datetimelocal", Uf, qd(Uf, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
        time: rd("time", Xf, qd(Xf, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
        week: rd("week", Vf, pd, "yyyy-Www"),
        month: rd("month", Wf, qd(Wf, ["yyyy", "MM"]), "yyyy-MM"),
        number: td,
        url: ud,
        email: vd,
        radio: wd,
        checkbox: yd,
        hidden: n,
        button: n,
        submit: n,
        reset: n,
        file: n
      },
      _f = ["$browser", "$sniffer", "$filter", "$parse", function(a, b, c, d) {
        return {
          restrict: "E",
          require: ["?ngModel"],
          link: {
            pre: function(e, f, g, h) {
              h[0] && ($f[Gd(g.type)] || $f.text)(e, f, g, h[0], b, a, c, d)
            }
          }
        }
      }],
      ag = /^(true|false|\d+)$/,
      bg = function() {
        return {
          restrict: "A",
          priority: 100,
          compile: function(a, b) {
            return ag.test(b.ngValue) ? function(a, b, c) {
              c.$set("value", a.$eval(c.ngValue))
            } : function(a, b, c) {
              a.$watch(c.ngValue, function(a) {
                c.$set("value", a)
              })
            }
          }
        }
      },
      cg = ["$compile", function(a) {
        return {
          restrict: "AC",
          compile: function(b) {
            return a.$$addBindingClass(b),
              function(b, c, d) {
                a.$$addBindingInfo(c, d.ngBind), c = c[0], b.$watch(d.ngBind, function(a) {
                  c.textContent = r(a) ? "" : a
                })
              }
          }
        }
      }],
      dg = ["$interpolate", "$compile", function(a, b) {
        return {
          compile: function(c) {
            return b.$$addBindingClass(c),
              function(c, d, e) {
                var f = a(d.attr(e.$attr.ngBindTemplate));
                b.$$addBindingInfo(d, f.expressions), d = d[0], e.$observe("ngBindTemplate", function(a) {
                  d.textContent = r(a) ? "" : a
                })
              }
          }
        }
      }],
      eg = ["$sce", "$parse", "$compile", function(a, b, c) {
        return {
          restrict: "A",
          compile: function(d, e) {
            var f = b(e.ngBindHtml),
              g = b(e.ngBindHtml, function(b) {
                return a.valueOf(b)
              });
            return c.$$addBindingClass(d),
              function(b, d, e) {
                c.$$addBindingInfo(d, e.ngBindHtml), b.$watch(g, function() {
                  var c = f(b);
                  d.html(a.getTrustedHtml(c) || "")
                })
              }
          }
        }
      }],
      fg = p({
        restrict: "A",
        require: "ngModel",
        link: function(a, b, c, d) {
          d.$viewChangeListeners.push(function() {
            a.$eval(c.ngChange)
          })
        }
      }),
      gg = zd("", !0),
      hg = zd("Odd", 0),
      ig = zd("Even", 1),
      jg = jd({
        compile: function(a, b) {
          b.$set("ngCloak", void 0), a.removeClass("ng-cloak")
        }
      }),
      kg = [function() {
        return {
          restrict: "A",
          scope: !0,
          controller: "@",
          priority: 500
        }
      }],
      lg = {},
      mg = {
        blur: !0,
        focus: !0
      };
    d("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
      var b = qb("ng-" + a);
      lg[b] = ["$parse", "$rootScope", function(c, d) {
        return {
          restrict: "A",
          compile: function(e, f) {
            var g = c(f[b], null, !0);
            return function(b, c) {
              c.on(a, function(c) {
                var e = function() {
                  g(b, {
                    $event: c
                  })
                };
                mg[a] && d.$$phase ? b.$evalAsync(e) : b.$apply(e)
              })
            }
          }
        }
      }]
    });
    var ng = ["$animate", "$compile", function(a, b) {
        return {
          multiElement: !0,
          transclude: "element",
          priority: 600,
          terminal: !0,
          restrict: "A",
          $$tlb: !0,
          link: function(c, d, e, f, g) {
            var h, i, j;
            c.$watch(e.ngIf, function(c) {
              c ? i || g(function(c, f) {
                i = f, c[c.length++] = b.$$createComment("end ngIf", e.ngIf), h = {
                  clone: c
                }, a.enter(c, d.parent(), d)
              }) : (j && (j.remove(), j = null), i && (i.$destroy(), i = null), h && (j = na(h.clone), a.leave(j).then(function() {
                j = null
              }), h = null))
            })
          }
        }
      }],
      og = ["$templateRequest", "$anchorScroll", "$animate", function(a, b, c) {
        return {
          restrict: "ECA",
          priority: 400,
          terminal: !0,
          transclude: "element",
          controller: Ud.noop,
          compile: function(d, e) {
            var f = e.ngInclude || e.src,
              g = e.onload || "",
              h = e.autoscroll;
            return function(d, e, i, j, k) {
              var l, m, n, o = 0,
                p = function() {
                  m && (m.remove(), m = null), l && (l.$destroy(), l = null), n && (c.leave(n).then(function() {
                    m = null
                  }), m = n, n = null)
                };
              d.$watch(f, function(f) {
                var i = function() {
                    !s(h) || h && !d.$eval(h) || b()
                  },
                  m = ++o;
                f ? (a(f, !0).then(function(a) {
                  if (!d.$$destroyed && m === o) {
                    var b = d.$new();
                    j.template = a;
                    var h = k(b, function(a) {
                      p(), c.enter(a, null, e).then(i)
                    });
                    l = b, n = h, l.$emit("$includeContentLoaded", f), d.$eval(g)
                  }
                }, function() {
                  d.$$destroyed || m === o && (p(), d.$emit("$includeContentError", f))
                }), d.$emit("$includeContentRequested", f)) : (p(), j.template = null)
              })
            }
          }
        }
      }],
      pg = ["$compile", function(b) {
        return {
          restrict: "ECA",
          priority: -400,
          require: "ngInclude",
          link: function(c, d, e, f) {
            return Rd.call(d[0]).match(/SVG/) ? (d.empty(), void b(Aa(f.template, a.document).childNodes)(c, function(a) {
              d.append(a)
            }, {
              futureParentElement: d
            })) : (d.html(f.template), void b(d.contents())(c))
          }
        }
      }],
      qg = jd({
        priority: 450,
        compile: function() {
          return {
            pre: function(a, b, c) {
              a.$eval(c.ngInit)
            }
          }
        }
      }),
      rg = function() {
        return {
          restrict: "A",
          priority: 100,
          require: "ngModel",
          link: function(a, b, c, e) {
            var f = b.attr(c.$attr.ngList) || ", ",
              g = "false" !== c.ngTrim,
              h = g ? Yd(f) : f,
              i = function(a) {
                if (!r(a)) {
                  var b = [];
                  return a && d(a.split(h), function(a) {
                    a && b.push(g ? Yd(a) : a)
                  }), b
                }
              };
            e.$parsers.push(i), e.$formatters.push(function(a) {
              return Wd(a) ? a.join(f) : void 0
            }), e.$isEmpty = function(a) {
              return !a || !a.length
            }
          }
        }
      },
      sg = "ng-valid",
      tg = "ng-invalid",
      ug = "ng-pristine",
      vg = "ng-dirty",
      wg = "ng-untouched",
      xg = "ng-touched",
      yg = "ng-pending",
      zg = "ng-empty",
      Ag = "ng-not-empty",
      Bg = b("ngModel"),
      Cg = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function(a, b, c, e, f, g, h, i, j, k) {
        this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = void 0, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = k(c.name || "", !1)(a), this.$$parentForm = Kf;
        var l, m = f(c.ngModel),
          o = m.assign,
          p = m,
          q = o,
          t = null,
          u = this;
        this.$$setOptions = function(a) {
          if (u.$options = a, a && a.getterSetter) {
            var b = f(c.ngModel + "()"),
              d = f(c.ngModel + "($$$p)");
            p = function(a) {
              var c = m(a);
              return y(c) && (c = b(a)), c
            }, q = function(a, b) {
              y(m(a)) ? d(a, {
                $$$p: b
              }) : o(a, b)
            }
          } else if (!m.assign) throw Bg("nonassign", "Expression '{0}' is non-assignable. Element: {1}", c.ngModel, Y(e))
        }, this.$render = n, this.$isEmpty = function(a) {
          return r(a) || "" === a || null === a || a !== a
        }, this.$$updateEmptyClasses = function(a) {
          u.$isEmpty(a) ? (g.removeClass(e, Ag), g.addClass(e, zg)) : (g.removeClass(e, zg), g.addClass(e, Ag))
        };
        var v = 0;
        Ad({
          ctrl: this,
          $element: e,
          set: function(a, b) {
            a[b] = !0
          },
          unset: function(a, b) {
            delete a[b]
          },
          $animate: g
        }), this.$setPristine = function() {
          u.$dirty = !1, u.$pristine = !0, g.removeClass(e, vg), g.addClass(e, ug)
        }, this.$setDirty = function() {
          u.$dirty = !0, u.$pristine = !1, g.removeClass(e, ug), g.addClass(e, vg), u.$$parentForm.$setDirty()
        }, this.$setUntouched = function() {
          u.$touched = !1, u.$untouched = !0, g.setClass(e, wg, xg)
        }, this.$setTouched = function() {
          u.$touched = !0, u.$untouched = !1, g.setClass(e, xg, wg)
        }, this.$rollbackViewValue = function() {
          h.cancel(t), u.$viewValue = u.$$lastCommittedViewValue, u.$render()
        }, this.$validate = function() {
          if (!w(u.$modelValue) || !isNaN(u.$modelValue)) {
            var a = u.$$lastCommittedViewValue,
              b = u.$$rawModelValue,
              c = u.$valid,
              d = u.$modelValue,
              e = u.$options && u.$options.allowInvalid;
            u.$$runValidators(b, a, function(a) {
              e || c === a || (u.$modelValue = a ? b : void 0, u.$modelValue !== d && u.$$writeModelToScope())
            })
          }
        }, this.$$runValidators = function(a, b, c) {
          function e() {
            var a = u.$$parserName || "parse";
            return r(l) ? (h(a, null), !0) : (l || (d(u.$validators, function(a, b) {
              h(b, null)
            }), d(u.$asyncValidators, function(a, b) {
              h(b, null)
            })), h(a, l), l)
          }

          function f() {
            var c = !0;
            return d(u.$validators, function(d, e) {
              var f = d(a, b);
              c = c && f, h(e, f)
            }), c ? !0 : (d(u.$asyncValidators, function(a, b) {
              h(b, null)
            }), !1)
          }

          function g() {
            var c = [],
              e = !0;
            d(u.$asyncValidators, function(d, f) {
              var g = d(a, b);
              if (!G(g)) throw Bg("nopromise", "Expected asynchronous validator to return a promise but got '{0}' instead.", g);
              h(f, void 0), c.push(g.then(function() {
                h(f, !0)
              }, function() {
                e = !1, h(f, !1)
              }))
            }), c.length ? j.all(c).then(function() {
              i(e)
            }, n) : i(!0)
          }

          function h(a, b) {
            k === v && u.$setValidity(a, b)
          }

          function i(a) {
            k === v && c(a)
          }
          v++;
          var k = v;
          return e() && f() ? void g() : void i(!1)
        }, this.$commitViewValue = function() {
          var a = u.$viewValue;
          h.cancel(t), (u.$$lastCommittedViewValue !== a || "" === a && u.$$hasNativeValidators) && (u.$$updateEmptyClasses(a), u.$$lastCommittedViewValue = a, u.$pristine && this.$setDirty(), this.$$parseAndValidate())
        }, this.$$parseAndValidate = function() {
          function b() {
            u.$modelValue !== f && u.$$writeModelToScope()
          }
          var c = u.$$lastCommittedViewValue,
            d = c;
          if (l = r(d) ? void 0 : !0)
            for (var e = 0; e < u.$parsers.length; e++)
              if (d = u.$parsers[e](d), r(d)) {
                l = !1;
                break
              }
          w(u.$modelValue) && isNaN(u.$modelValue) && (u.$modelValue = p(a));
          var f = u.$modelValue,
            g = u.$options && u.$options.allowInvalid;
          u.$$rawModelValue = d, g && (u.$modelValue = d, b()), u.$$runValidators(d, u.$$lastCommittedViewValue, function(a) {
            g || (u.$modelValue = a ? d : void 0, b())
          })
        }, this.$$writeModelToScope = function() {
          q(a, u.$modelValue), d(u.$viewChangeListeners, function(a) {
            try {
              a()
            } catch (c) {
              b(c)
            }
          })
        }, this.$setViewValue = function(a, b) {
          u.$viewValue = a, (!u.$options || u.$options.updateOnDefault) && u.$$debounceViewValueCommit(b)
        }, this.$$debounceViewValueCommit = function(b) {
          var c, d = 0,
            e = u.$options;
          e && s(e.debounce) && (c = e.debounce, w(c) ? d = c : w(c[b]) ? d = c[b] : w(c["default"]) && (d = c["default"])), h.cancel(t), d ? t = h(function() {
            u.$commitViewValue()
          }, d) : i.$$phase ? u.$commitViewValue() : a.$apply(function() {
            u.$commitViewValue()
          })
        }, a.$watch(function() {
          var b = p(a);
          if (b !== u.$modelValue && (u.$modelValue === u.$modelValue || b === b)) {
            u.$modelValue = u.$$rawModelValue = b, l = void 0;
            for (var c = u.$formatters, d = c.length, e = b; d--;) e = c[d](e);
            u.$viewValue !== e && (u.$$updateEmptyClasses(e), u.$viewValue = u.$$lastCommittedViewValue = e, u.$render(), u.$$runValidators(b, e, n))
          }
          return b
        })
      }],
      Dg = ["$rootScope", function(a) {
        return {
          restrict: "A",
          require: ["ngModel", "^?form", "^?ngModelOptions"],
          controller: Cg,
          priority: 1,
          compile: function(b) {
            return b.addClass(ug).addClass(wg).addClass(sg), {
              pre: function(a, b, c, d) {
                var e = d[0],
                  f = d[1] || e.$$parentForm;
                e.$$setOptions(d[2] && d[2].$options), f.$addControl(e), c.$observe("name", function(a) {
                  e.$name !== a && e.$$parentForm.$$renameControl(e, a)
                }), a.$on("$destroy", function() {
                  e.$$parentForm.$removeControl(e)
                })
              },
              post: function(b, c, d, e) {
                var f = e[0];
                f.$options && f.$options.updateOn && c.on(f.$options.updateOn, function(a) {
                  f.$$debounceViewValueCommit(a && a.type)
                }), c.on("blur", function() {
                  f.$touched || (a.$$phase ? b.$evalAsync(f.$setTouched) : b.$apply(f.$setTouched))
                })
              }
            }
          }
        }
      }],
      Eg = /(\s+|^)default(\s+|$)/,
      Fg = function() {
        return {
          restrict: "A",
          controller: ["$scope", "$attrs", function(a, b) {
            var c = this;
            this.$options = N(a.$eval(b.ngModelOptions)), s(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = Yd(this.$options.updateOn.replace(Eg, function() {
              return c.$options.updateOnDefault = !0, " "
            }))) : this.$options.updateOnDefault = !0
          }]
        }
      },
      Gg = jd({
        terminal: !0,
        priority: 1e3
      }),
      Hg = b("ngOptions"),
      Ig = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
      Jg = ["$compile", "$document", "$parse", function(b, e, f) {
        function g(a, b, d) {
          function e(a, b, c, d, e) {
            this.selectValue = a, this.viewValue = b, this.label = c, this.group = d, this.disabled = e
          }

          function g(a) {
            var b;
            if (!j && c(a)) b = a;
            else {
              b = [];
              for (var d in a) a.hasOwnProperty(d) && "$" !== d.charAt(0) && b.push(d)
            }
            return b
          }
          var h = a.match(Ig);
          if (!h) throw Hg("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", a, Y(b));
          var i = h[5] || h[7],
            j = h[6],
            k = / as /.test(h[0]) && h[1],
            l = h[9],
            m = f(h[2] ? h[1] : i),
            n = k && f(k),
            o = n || m,
            p = l && f(l),
            q = l ? function(a, b) {
              return p(d, b)
            } : function(a) {
              return Za(a)
            },
            r = function(a, b) {
              return q(a, x(a, b))
            },
            s = f(h[2] || h[1]),
            t = f(h[3] || ""),
            u = f(h[4] || ""),
            v = f(h[8]),
            w = {},
            x = j ? function(a, b) {
              return w[j] = b, w[i] = a, w
            } : function(a) {
              return w[i] = a, w
            };
          return {
            trackBy: l,
            getTrackByValue: r,
            getWatchables: f(v, function(a) {
              var b = [];
              a = a || [];
              for (var c = g(a), e = c.length, f = 0; e > f; f++) {
                var i = a === c ? f : c[f],
                  j = a[i],
                  k = x(j, i),
                  l = q(j, k);
                if (b.push(l), h[2] || h[1]) {
                  var m = s(d, k);
                  b.push(m)
                }
                if (h[4]) {
                  var n = u(d, k);
                  b.push(n)
                }
              }
              return b
            }),
            getOptions: function() {
              for (var a = [], b = {}, c = v(d) || [], f = g(c), h = f.length, i = 0; h > i; i++) {
                var j = c === f ? i : f[i],
                  k = c[j],
                  m = x(k, j),
                  n = o(d, m),
                  p = q(n, m),
                  w = s(d, m),
                  y = t(d, m),
                  z = u(d, m),
                  A = new e(p, n, w, y, z);
                a.push(A), b[p] = A
              }
              return {
                items: a,
                selectValueMap: b,
                getOptionFromViewValue: function(a) {
                  return b[r(a)]
                },
                getViewValueFromOption: function(a) {
                  return l ? Ud.copy(a.viewValue) : a.viewValue
                }
              }
            }
          }
        }

        function h(a, c, f, h) {
          function k(a, b) {
            var c = i.cloneNode(!1);
            b.appendChild(c), l(a, c)
          }

          function l(a, b) {
            a.element = b, b.disabled = a.disabled, a.label !== b.label && (b.label = a.label, b.textContent = a.label), a.value !== b.value && (b.value = a.selectValue)
          }

          function m() {
            var a = x && o.readValue();
            if (x)
              for (var b = x.items.length - 1; b >= 0; b--) {
                var d = x.items[b];
                Ra(s(d.group) ? d.element.parentNode : d.element)
              }
            x = y.getOptions();
            var e = {};
            if (v && c.prepend(n), x.items.forEach(function(a) {
                var b;
                s(a.group) ? (b = e[a.group], b || (b = j.cloneNode(!1), z.appendChild(b), b.label = null === a.group ? "null" : a.group, e[a.group] = b), k(a, b)) : k(a, z)
              }), c[0].appendChild(z), p.$render(), !p.$isEmpty(a)) {
              var f = o.readValue(),
                g = y.trackBy || q;
              (g ? O(a, f) : a === f) || (p.$setViewValue(f), p.$render())
            }
          }
          for (var n, o = h[0], p = h[1], q = f.multiple, r = 0, t = c.children(), u = t.length; u > r; r++)
            if ("" === t[r].value) {
              n = t.eq(r);
              break
            }
          var v = !!n,
            w = Ld(i.cloneNode(!1));
          w.val("?");
          var x, y = g(f.ngOptions, c, a),
            z = e[0].createDocumentFragment(),
            A = function() {
              v || c.prepend(n), c.val(""), n.prop("selected", !0), n.attr("selected", !0)
            },
            B = function() {
              v || n.remove()
            },
            C = function() {
              c.prepend(w), c.val("?"), w.prop("selected", !0), w.attr("selected", !0)
            },
            D = function() {
              w.remove()
            };
          q ? (p.$isEmpty = function(a) {
            return !a || 0 === a.length
          }, o.writeValue = function(a) {
            x.items.forEach(function(a) {
              a.element.selected = !1
            }), a && a.forEach(function(a) {
              var b = x.getOptionFromViewValue(a);
              b && (b.element.selected = !0)
            })
          }, o.readValue = function() {
            var a = c.val() || [],
              b = [];
            return d(a, function(a) {
              var c = x.selectValueMap[a];
              c && !c.disabled && b.push(x.getViewValueFromOption(c))
            }), b
          }, y.trackBy && a.$watchCollection(function() {
            return Wd(p.$viewValue) ? p.$viewValue.map(function(a) {
              return y.getTrackByValue(a)
            }) : void 0
          }, function() {
            p.$render()
          })) : (o.writeValue = function(a) {
            var b = x.getOptionFromViewValue(a);
            b ? (c[0].value !== b.selectValue && (D(), B(), c[0].value = b.selectValue, b.element.selected = !0), b.element.setAttribute("selected", "selected")) : null === a || v ? (D(), A()) : (B(), C())
          }, o.readValue = function() {
            var a = x.selectValueMap[c.val()];
            return a && !a.disabled ? (B(), D(), x.getViewValueFromOption(a)) : null
          }, y.trackBy && a.$watch(function() {
            return y.getTrackByValue(p.$viewValue)
          }, function() {
            p.$render()
          })), v ? (n.remove(), b(n)(a), n.removeClass("ng-scope")) : n = Ld(i.cloneNode(!1)), c.empty(), m(), a.$watchCollection(y.getWatchables, m)
        }
        var i = a.document.createElement("option"),
          j = a.document.createElement("optgroup");
        return {
          restrict: "A",
          terminal: !0,
          require: ["select", "ngModel"],
          link: {
            pre: function(a, b, c, d) {
              d[0].registerOption = n
            },
            post: h
          }
        }
      }],
      Kg = ["$locale", "$interpolate", "$log", function(a, b, c) {
        var e = /{}/g,
          f = /^when(Minus)?(.+)$/;
        return {
          link: function(g, h, i) {
            function j(a) {
              h.text(a || "")
            }
            var k, l = i.count,
              m = i.$attr.when && h.attr(i.$attr.when),
              o = i.offset || 0,
              p = g.$eval(m) || {},
              q = {},
              s = b.startSymbol(),
              t = b.endSymbol(),
              u = s + l + "-" + o + t,
              v = Ud.noop;
            d(i, function(a, b) {
              var c = f.exec(b);
              if (c) {
                var d = (c[1] ? "-" : "") + Gd(c[2]);
                p[d] = h.attr(i.$attr[b])
              }
            }), d(p, function(a, c) {
              q[c] = b(a.replace(e, u))
            }), g.$watch(l, function(b) {
              var d = parseFloat(b),
                e = isNaN(d);
              if (e || d in p || (d = a.pluralCat(d - o)), d !== k && !(e && w(k) && isNaN(k))) {
                v();
                var f = q[d];
                r(f) ? (null != b && c.debug("ngPluralize: no rule defined for '" + d + "' in " + m), v = n, j()) : v = g.$watch(f, j), k = d
              }
            })
          }
        }
      }],
      Lg = ["$parse", "$animate", "$compile", function(a, e, f) {
        var g = "$$NG_REMOVED",
          h = b("ngRepeat"),
          i = function(a, b, c, d, e, f, g) {
            a[c] = d, e && (a[e] = f), a.$index = b, a.$first = 0 === b, a.$last = b === g - 1, a.$middle = !(a.$first || a.$last), a.$odd = !(a.$even = 0 === (1 & b))
          },
          j = function(a) {
            return a.clone[0]
          },
          k = function(a) {
            return a.clone[a.clone.length - 1]
          };
        return {
          restrict: "A",
          multiElement: !0,
          transclude: "element",
          priority: 1e3,
          terminal: !0,
          $$tlb: !0,
          compile: function(b, l) {
            var m = l.ngRepeat,
              n = f.$$createComment("end ngRepeat", m),
              o = m.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
            if (!o) throw h("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", m);
            var p = o[1],
              q = o[2],
              r = o[3],
              s = o[4];
            if (o = p.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !o) throw h("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", p);
            var t = o[3] || o[1],
              u = o[2];
            if (r && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r))) throw h("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", r);
            var v, w, x, y, z = {
              $id: Za
            };
            return s ? v = a(s) : (x = function(a, b) {
                return Za(b)
              }, y = function(a) {
                return a
              }),
              function(a, b, f, l, o) {
                v && (w = function(b, c, d) {
                  return u && (z[u] = b), z[t] = c, z.$index = d, v(a, z)
                });
                var p = oa();
                a.$watchCollection(q, function(f) {
                  var l, q, s, v, z, A, B, C, D, E, F, G, H = b[0],
                    I = oa();
                  if (r && (a[r] = f), c(f)) D = f, C = w || x;
                  else {
                    C = w || y, D = [];
                    for (var J in f) Fd.call(f, J) && "$" !== J.charAt(0) && D.push(J)
                  }
                  for (v = D.length, F = new Array(v), l = 0; v > l; l++)
                    if (z = f === D ? l : D[l], A = f[z], B = C(z, A, l), p[B]) E = p[B], delete p[B], I[B] = E, F[l] = E;
                    else {
                      if (I[B]) throw d(F, function(a) {
                        a && a.scope && (p[a.id] = a)
                      }), h("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", m, B, A);
                      F[l] = {
                        id: B,
                        scope: void 0,
                        clone: void 0
                      }, I[B] = !0
                    }
                  for (var K in p) {
                    if (E = p[K], G = na(E.clone), e.leave(G), G[0].parentNode)
                      for (l = 0, q = G.length; q > l; l++) G[l][g] = !0;
                    E.scope.$destroy()
                  }
                  for (l = 0; v > l; l++)
                    if (z = f === D ? l : D[l], A = f[z], E = F[l], E.scope) {
                      s = H;
                      do s = s.nextSibling; while (s && s[g]);
                      j(E) != s && e.move(na(E.clone), null, H), H = k(E), i(E.scope, l, t, A, u, z, v)
                    } else o(function(a, b) {
                      E.scope = b;
                      var c = n.cloneNode(!1);
                      a[a.length++] = c, e.enter(a, null, H), H = c, E.clone = a, I[E.id] = E, i(E.scope, l, t, A, u, z, v)
                    });
                  p = I
                })
              }
          }
        }
      }],
      Mg = "ng-hide",
      Ng = "ng-hide-animate",
      Og = ["$animate", function(a) {
        return {
          restrict: "A",
          multiElement: !0,
          link: function(b, c, d) {
            b.$watch(d.ngShow, function(b) {
              a[b ? "removeClass" : "addClass"](c, Mg, {
                tempClasses: Ng
              })
            })
          }
        }
      }],
      Pg = ["$animate", function(a) {
        return {
          restrict: "A",
          multiElement: !0,
          link: function(b, c, d) {
            b.$watch(d.ngHide, function(b) {
              a[b ? "addClass" : "removeClass"](c, Mg, {
                tempClasses: Ng
              })
            })
          }
        }
      }],
      Qg = jd(function(a, b, c) {
        a.$watch(c.ngStyle, function(a, c) {
          c && a !== c && d(c, function(a, c) {
            b.css(c, "")
          }), a && b.css(a)
        }, !0)
      }),
      Rg = ["$animate", "$compile", function(a, b) {
        return {
          require: "ngSwitch",
          controller: ["$scope", function() {
            this.cases = {}
          }],
          link: function(c, e, f, g) {
            var h = f.ngSwitch || f.on,
              i = [],
              j = [],
              k = [],
              l = [],
              m = function(a, b) {
                return function() {
                  a.splice(b, 1)
                }
              };
            c.$watch(h, function(c) {
              var e, f;
              for (e = 0, f = k.length; f > e; ++e) a.cancel(k[e]);
              for (k.length = 0, e = 0, f = l.length; f > e; ++e) {
                var h = na(j[e].clone);
                l[e].$destroy();
                var n = k[e] = a.leave(h);
                n.then(m(k, e))
              }
              j.length = 0, l.length = 0, (i = g.cases["!" + c] || g.cases["?"]) && d(i, function(c) {
                c.transclude(function(d, e) {
                  l.push(e);
                  var f = c.element;
                  d[d.length++] = b.$$createComment("end ngSwitchWhen");
                  var g = {
                    clone: d
                  };
                  j.push(g), a.enter(d, f.parent(), f)
                })
              })
            })
          }
        }
      }],
      Sg = jd({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(a, b, c, d, e) {
          d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || [], d.cases["!" + c.ngSwitchWhen].push({
            transclude: e,
            element: b
          })
        }
      }),
      Tg = jd({
        transclude: "element",
        priority: 1200,
        require: "^ngSwitch",
        multiElement: !0,
        link: function(a, b, c, d, e) {
          d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({
            transclude: e,
            element: b
          })
        }
      }),
      Ug = b("ngTransclude"),
      Vg = ["$compile", function(a) {
        return {
          restrict: "EAC",
          terminal: !0,
          compile: function(b) {
            var c = a(b.contents());
            return b.empty(),
              function(a, b, d, e, f) {
                function g(a, c) {
                  a.length ? b.append(a) : (h(), c.$destroy())
                }

                function h() {
                  c(a, function(a) {
                    b.append(a)
                  })
                }
                if (!f) throw Ug("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", Y(b));
                d.ngTransclude === d.$attr.ngTransclude && (d.ngTransclude = "");
                var i = d.ngTransclude || d.ngTranscludeSlot;
                f(g, null, i), i && !f.isSlotFilled(i) && h()
              }
          }
        }
      }],
      Wg = ["$templateCache", function(a) {
        return {
          restrict: "E",
          terminal: !0,
          compile: function(b, c) {
            if ("text/ng-template" == c.type) {
              var d = c.id,
                e = b[0].text;
              a.put(d, e)
            }
          }
        }
      }],
      Xg = {
        $setViewValue: n,
        $render: n
      },
      Yg = ["$element", "$scope", function(b, c) {
        var d = this,
          e = new $a;
        d.ngModelCtrl = Xg, d.unknownOption = Ld(a.document.createElement("option")), d.renderUnknownOption = function(a) {
          var c = "? " + Za(a) + " ?";
          d.unknownOption.val(c), b.prepend(d.unknownOption), b.val(c)
        }, c.$on("$destroy", function() {
          d.renderUnknownOption = n
        }), d.removeUnknownOption = function() {
          d.unknownOption.parent() && d.unknownOption.remove()
        }, d.readValue = function() {
          return d.removeUnknownOption(), b.val()
        }, d.writeValue = function(a) {
          d.hasOption(a) ? (d.removeUnknownOption(), b.val(a), "" === a && d.emptyOption.prop("selected", !0)) : null == a && d.emptyOption ? (d.removeUnknownOption(), b.val("")) : d.renderUnknownOption(a)
        }, d.addOption = function(a, b) {
          if (b[0].nodeType !== he) {
            la(a, '"option value"'), "" === a && (d.emptyOption = b);
            var c = e.get(a) || 0;
            e.put(a, c + 1), d.ngModelCtrl.$render(), Cd(b)
          }
        }, d.removeOption = function(a) {
          var b = e.get(a);
          b && (1 === b ? (e.remove(a), "" === a && (d.emptyOption = void 0)) : e.put(a, b - 1))
        }, d.hasOption = function(a) {
          return !!e.get(a)
        }, d.registerOption = function(a, b, c, e, f) {
          if (e) {
            var g;
            c.$observe("value", function(a) {
              s(g) && d.removeOption(g), g = a, d.addOption(a, b)
            })
          } else f ? a.$watch(f, function(a, e) {
            c.$set("value", a), e !== a && d.removeOption(e), d.addOption(a, b)
          }) : d.addOption(c.value, b);
          b.on("$destroy", function() {
            d.removeOption(c.value), d.ngModelCtrl.$render()
          })
        }
      }],
      Zg = function() {
        function a(a, b, c, e) {
          var f = e[1];
          if (f) {
            var g = e[0];
            if (g.ngModelCtrl = f, b.on("change", function() {
                a.$apply(function() {
                  f.$setViewValue(g.readValue())
                })
              }), c.multiple) {
              g.readValue = function() {
                var a = [];
                return d(b.find("option"), function(b) {
                  b.selected && a.push(b.value)
                }), a
              }, g.writeValue = function(a) {
                var c = new $a(a);
                d(b.find("option"), function(a) {
                  a.selected = s(c.get(a.value))
                })
              };
              var h, i = NaN;
              a.$watch(function() {
                i !== f.$viewValue || O(h, f.$viewValue) || (h = qa(f.$viewValue), f.$render()), i = f.$viewValue
              }), f.$isEmpty = function(a) {
                return !a || 0 === a.length
              }
            }
          }
        }

        function b(a, b, c, d) {
          var e = d[1];
          if (e) {
            var f = d[0];
            e.$render = function() {
              f.writeValue(e.$viewValue)
            }
          }
        }
        return {
          restrict: "E",
          require: ["select", "?ngModel"],
          controller: Yg,
          priority: 1,
          link: {
            pre: a,
            post: b
          }
        }
      },
      $g = ["$interpolate", function(a) {
        return {
          restrict: "E",
          priority: 100,
          compile: function(b, c) {
            if (s(c.value)) var d = a(c.value, !0);
            else {
              var e = a(b.text(), !0);
              e || c.$set("value", b.text())
            }
            return function(a, b, c) {
              var f = "$selectController",
                g = b.parent(),
                h = g.data(f) || g.parent().data(f);
              h && h.registerOption(a, b, c, d, e)
            }
          }
        }
      }],
      _g = p({
        restrict: "E",
        terminal: !1
      }),
      ah = function() {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function(a, b, c, d) {
            d && (c.required = !0, d.$validators.required = function(a, b) {
              return !c.required || !d.$isEmpty(b)
            }, c.$observe("required", function() {
              d.$validate()
            }))
          }
        }
      },
      bh = function() {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function(a, c, d, e) {
            if (e) {
              var f, g = d.ngPattern || d.pattern;
              d.$observe("pattern", function(a) {
                if (v(a) && a.length > 0 && (a = new RegExp("^" + a + "$")), a && !a.test) throw b("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", g, a, Y(c));
                f = a || void 0, e.$validate()
              }), e.$validators.pattern = function(a, b) {
                return e.$isEmpty(b) || r(f) || f.test(b)
              }
            }
          }
        }
      },
      ch = function() {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function(a, b, c, d) {
            if (d) {
              var e = -1;
              c.$observe("maxlength", function(a) {
                var b = l(a);
                e = isNaN(b) ? -1 : b, d.$validate()
              }), d.$validators.maxlength = function(a, b) {
                return 0 > e || d.$isEmpty(b) || b.length <= e
              }
            }
          }
        }
      },
      dh = function() {
        return {
          restrict: "A",
          require: "?ngModel",
          link: function(a, b, c, d) {
            if (d) {
              var e = 0;
              c.$observe("minlength", function(a) {
                e = l(a) || 0, d.$validate()
              }), d.$validators.minlength = function(a, b) {
                return d.$isEmpty(b) || b.length >= e
              }
            }
          }
        }
      };
    return a.angular.bootstrap ? void(a.console && console.log("WARNING: Tried to load angular more than once.")) : (ia(), ta(Ud), Ud.module("ngLocale", [], ["$provide", function(a) {
      function b(a) {
        a += "";
        var b = a.indexOf(".");
        return -1 == b ? 0 : a.length - b - 1
      }

      function c(a, c) {
        var d = c;
        void 0 === d && (d = Math.min(b(a), 3));
        var e = Math.pow(10, d),
          f = (a * e | 0) % e;
        return {
          v: d,
          f: f
        }
      }
      var d = {
        ZERO: "zero",
        ONE: "one",
        TWO: "two",
        FEW: "few",
        MANY: "many",
        OTHER: "other"
      };
      a.value("$locale", {
        DATETIME_FORMATS: {
          AMPMS: ["AM", "PM"],
          DAY: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          ERANAMES: ["Before Christ", "Anno Domini"],
          ERAS: ["BC", "AD"],
          FIRSTDAYOFWEEK: 6,
          MONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          SHORTDAY: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          SHORTMONTH: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          STANDALONEMONTH: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          WEEKENDRANGE: [5, 6],
          fullDate: "EEEE, MMMM d, y",
          longDate: "MMMM d, y",
          medium: "MMM d, y h:mm:ss a",
          mediumDate: "MMM d, y",
          mediumTime: "h:mm:ss a",
          "short": "M/d/yy h:mm a",
          shortDate: "M/d/yy",
          shortTime: "h:mm a"
        },
        NUMBER_FORMATS: {
          CURRENCY_SYM: "$",
          DECIMAL_SEP: ".",
          GROUP_SEP: ",",
          PATTERNS: [{
            gSize: 3,
            lgSize: 3,
            maxFrac: 3,
            minFrac: 0,
            minInt: 1,
            negPre: "-",
            negSuf: "",
            posPre: "",
            posSuf: ""
          }, {
            gSize: 3,
            lgSize: 3,
            maxFrac: 2,
            minFrac: 2,
            minInt: 1,
            negPre: "-¤",
            negSuf: "",
            posPre: "¤",
            posSuf: ""
          }]
        },
        id: "en-us",
        localeID: "en_US",
        pluralCat: function(a, b) {
          var e = 0 | a,
            f = c(a, b);
          return 1 == e && 0 == f.v ? d.ONE : d.OTHER
        }
      })
    }]), void Ld(a.document).ready(function() {
      da(a.document, ea)
    }))
  }(window), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +

function(a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");
  if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function(a) {
  "use strict";

  function b() {
    var a = document.createElement("bootstrap"),
      b = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      };
    for (var c in b)
      if (void 0 !== a.style[c]) return {
        end: b[c]
      };
    return !1
  }
  a.fn.emulateTransitionEnd = function(b) {
    var c = !1,
      d = this;
    a(this).one("bsTransitionEnd", function() {
      c = !0
    });
    var e = function() {
      c || a(d).trigger(a.support.transition.end)
    };
    return setTimeout(e, b), this
  }, a(function() {
    a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
      bindType: a.support.transition.end,
      delegateType: a.support.transition.end,
      handle: function(b) {
        return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
      }
    })
  })
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var c = a(this),
        e = c.data("bs.alert");
      e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
    })
  }
  var c = '[data-dismiss="alert"]',
    d = function(b) {
      a(b).on("click", c, this.close)
    };
  d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
    function c() {
      g.detach().trigger("closed.bs.alert").remove()
    }
    var e = a(this),
      f = e.attr("data-target");
    f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
    var g = a("#" === f ? [] : f);
    b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
  };
  var e = a.fn.alert;
  a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() {
    return a.fn.alert = e, this
  }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.button"),
        f = "object" == typeof b && b;
      e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
    })
  }
  var c = function(b, d) {
    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
  };
  c.VERSION = "3.3.7", c.DEFAULTS = {
    loadingText: "loading..."
  }, c.prototype.setState = function(b) {
    var c = "disabled",
      d = this.$element,
      e = d.is("input") ? "val" : "html",
      f = d.data();
    b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() {
      d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1))
    }, this), 0)
  }, c.prototype.toggle = function() {
    var a = !0,
      b = this.$element.closest('[data-toggle="buttons"]');
    if (b.length) {
      var c = this.$element.find("input");
      "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
  };
  var d = a.fn.button;
  a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() {
    return a.fn.button = d, this
  }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
    var d = a(c.target).closest(".btn");
    b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"))
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
    a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
  })
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.carousel"),
        f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
        g = "string" == typeof b ? b : f.slide;
      e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
    })
  }
  var c = function(b, c) {
    this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
  };
  c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, c.prototype.keydown = function(a) {
    if (!/input|textarea/i.test(a.target.tagName)) {
      switch (a.which) {
        case 37:
          this.prev();
          break;
        case 39:
          this.next();
          break;
        default:
          return
      }
      a.preventDefault()
    }
  }, c.prototype.cycle = function(b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
  }, c.prototype.getItemIndex = function(a) {
    return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
  }, c.prototype.getItemForDirection = function(a, b) {
    var c = this.getItemIndex(b),
      d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
    if (d && !this.options.wrap) return b;
    var e = "prev" == a ? -1 : 1,
      f = (c + e) % this.$items.length;
    return this.$items.eq(f)
  }, c.prototype.to = function(a) {
    var b = this,
      c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
      b.to(a)
    }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
  }, c.prototype.pause = function(b) {
    return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
  }, c.prototype.next = function() {
    return this.sliding ? void 0 : this.slide("next")
  }, c.prototype.prev = function() {
    return this.sliding ? void 0 : this.slide("prev")
  }, c.prototype.slide = function(b, d) {
    var e = this.$element.find(".item.active"),
      f = d || this.getItemForDirection(b, e),
      g = this.interval,
      h = "next" == b ? "left" : "right",
      i = this;
    if (f.hasClass("active")) return this.sliding = !1;
    var j = f[0],
      k = a.Event("slide.bs.carousel", {
        relatedTarget: j,
        direction: h
      });
    if (this.$element.trigger(k), !k.isDefaultPrevented()) {
      if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var l = a(this.$indicators.children()[this.getItemIndex(f)]);
        l && l.addClass("active")
      }
      var m = a.Event("slid.bs.carousel", {
        relatedTarget: j,
        direction: h
      });
      return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
        f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() {
          i.$element.trigger(m)
        }, 0)
      }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
    }
  };
  var d = a.fn.carousel;
  a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() {
    return a.fn.carousel = d, this
  };
  var e = function(c) {
    var d, e = a(this),
      f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
    if (f.hasClass("carousel")) {
      var g = a.extend({}, f.data(), e.data()),
        h = e.attr("data-slide-to");
      h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
    }
  };
  a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() {
    a('[data-ride="carousel"]').each(function() {
      var c = a(this);
      b.call(c, c.data())
    })
  })
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
    return a(d)
  }

  function c(b) {
    return this.each(function() {
      var c = a(this),
        e = c.data("bs.collapse"),
        f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
      !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
    })
  }
  var d = function(b, c) {
    this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
  };
  d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
    toggle: !0
  }, d.prototype.dimension = function() {
    var a = this.$element.hasClass("width");
    return a ? "width" : "height"
  }, d.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
      if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
        var f = a.Event("show.bs.collapse");
        if (this.$element.trigger(f), !f.isDefaultPrevented()) {
          e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
          var g = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
          var h = function() {
            this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
          };
          if (!a.support.transition) return h.call(this);
          var i = a.camelCase(["scroll", g].join("-"));
          this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
        }
      }
    }
  }, d.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b = a.Event("hide.bs.collapse");
      if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();
        this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
        var e = function() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        };
        return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
      }
    }
  }, d.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  }, d.prototype.getParent = function() {
    return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
      var e = a(d);
      this.addAriaAndCollapsedClass(b(e), e)
    }, this)).end()
  }, d.prototype.addAriaAndCollapsedClass = function(a, b) {
    var c = a.hasClass("in");
    a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
  };
  var e = a.fn.collapse;
  a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() {
    return a.fn.collapse = e, this
  }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
    var e = a(this);
    e.attr("data-target") || d.preventDefault();
    var f = b(e),
      g = f.data("bs.collapse"),
      h = g ? "toggle" : e.data();
    c.call(f, h)
  })
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    var c = b.attr("data-target");
    c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
    var d = c && a(c);
    return d && d.length ? d : b.parent()
  }

  function c(c) {
    c && 3 === c.which || (a(e).remove(), a(f).each(function() {
      var d = a(this),
        e = b(d),
        f = {
          relatedTarget: this
        };
      e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
    }))
  }

  function d(b) {
    return this.each(function() {
      var c = a(this),
        d = c.data("bs.dropdown");
      d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
    })
  }
  var e = ".dropdown-backdrop",
    f = '[data-toggle="dropdown"]',
    g = function(b) {
      a(b).on("click.bs.dropdown", this.toggle)
    };
  g.VERSION = "3.3.7", g.prototype.toggle = function(d) {
    var e = a(this);
    if (!e.is(".disabled, :disabled")) {
      var f = b(e),
        g = f.hasClass("open");
      if (c(), !g) {
        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
        var h = {
          relatedTarget: this
        };
        if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
        e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
      }
      return !1
    }
  }, g.prototype.keydown = function(c) {
    if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
      var d = a(this);
      if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
        var e = b(d),
          g = e.hasClass("open");
        if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
        var h = " li:not(.disabled):visible a",
          i = e.find(".dropdown-menu" + h);
        if (i.length) {
          var j = i.index(c.target);
          38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
        }
      }
    }
  };
  var h = a.fn.dropdown;
  a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() {
    return a.fn.dropdown = h, this
  }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
    a.stopPropagation()
  }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function(a) {
  "use strict";

  function b(b, d) {
    return this.each(function() {
      var e = a(this),
        f = e.data("bs.modal"),
        g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
      f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
    })
  }
  var c = function(b, c) {
    this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
      this.$element.trigger("loaded.bs.modal")
    }, this))
  };
  c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, c.prototype.toggle = function(a) {
    return this.isShown ? this.hide() : this.show(a)
  }, c.prototype.show = function(b) {
    var d = this,
      e = a.Event("show.bs.modal", {
        relatedTarget: b
      });
    this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
      d.$element.one("mouseup.dismiss.bs.modal", function(b) {
        a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
      })
    }), this.backdrop(function() {
      var e = a.support.transition && d.$element.hasClass("fade");
      d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
      var f = a.Event("shown.bs.modal", {
        relatedTarget: b
      });
      e ? d.$dialog.one("bsTransitionEnd", function() {
        d.$element.trigger("focus").trigger(f)
      }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
    }))
  }, c.prototype.hide = function(b) {
    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
  }, c.prototype.enforceFocus = function() {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
      document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
    }, this))
  }, c.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
      27 == a.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
  }, c.prototype.resize = function() {
    this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
  }, c.prototype.hideModal = function() {
    var a = this;
    this.$element.hide(), this.backdrop(function() {
      a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
    })
  }, c.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
  }, c.prototype.backdrop = function(b) {
    var d = this,
      e = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var f = a.support.transition && e;
      if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
          return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
        }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
      f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var g = function() {
        d.removeBackdrop(), b && b()
      };
      a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
    } else b && b()
  }, c.prototype.handleUpdate = function() {
    this.adjustDialog()
  }, c.prototype.adjustDialog = function() {
    var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
    })
  }, c.prototype.resetAdjustments = function() {
    this.$element.css({
      paddingLeft: "",
      paddingRight: ""
    })
  }, c.prototype.checkScrollbar = function() {
    var a = window.innerWidth;
    if (!a) {
      var b = document.documentElement.getBoundingClientRect();
      a = b.right - Math.abs(b.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
  }, c.prototype.setScrollbar = function() {
    var a = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
  }, c.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", this.originalBodyPad)
  }, c.prototype.measureScrollbar = function() {
    var a = document.createElement("div");
    a.className = "modal-scrollbar-measure", this.$body.append(a);
    var b = a.offsetWidth - a.clientWidth;
    return this.$body[0].removeChild(a), b
  };
  var d = a.fn.modal;
  a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() {
    return a.fn.modal = d, this
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
    var d = a(this),
      e = d.attr("href"),
      f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
      g = f.data("bs.modal") ? "toggle" : a.extend({
        remote: !/#/.test(e) && e
      }, f.data(), d.data());
    d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) {
      a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
        d.is(":visible") && d.trigger("focus")
      })
    }), b.call(f, g, this)
  })
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.tooltip"),
        f = "object" == typeof b && b;
      (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
    })
  }
  var c = function(a, b) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
  };
  c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    }
  }, c.prototype.init = function(b, c, d) {
    if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
        click: !1,
        hover: !1,
        focus: !1
      }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
      var g = e[f];
      if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
      else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter" : "focusin",
          i = "hover" == g ? "mouseleave" : "focusout";
        this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
      }
    }
    this.options.selector ? this._options = a.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle()
  }, c.prototype.getDefaults = function() {
    return c.DEFAULTS
  }, c.prototype.getOptions = function(b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
      show: b.delay,
      hide: b.delay
    }), b
  }, c.prototype.getDelegateOptions = function() {
    var b = {},
      c = this.getDefaults();
    return this._options && a.each(this._options, function(a, d) {
      c[a] != d && (b[a] = d)
    }), b
  }, c.prototype.enter = function(b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
      "in" == c.hoverState && c.show()
    }, c.options.delay.show)) : c.show())
  }, c.prototype.isInStateTrue = function() {
    for (var a in this.inState)
      if (this.inState[a]) return !0;
    return !1
  }, c.prototype.leave = function(b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
      "out" == c.hoverState && c.hide()
    }, c.options.delay.hide)) : c.hide())
  }, c.prototype.show = function() {
    var b = a.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(b);
      var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (b.isDefaultPrevented() || !d) return;
      var e = this,
        f = this.tip(),
        g = this.getUID(this.type);
      this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
      var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
        i = /\s?auto?\s?/i,
        j = i.test(h);
      j && (h = h.replace(i, "") || "top"), f.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
      var k = this.getPosition(),
        l = f[0].offsetWidth,
        m = f[0].offsetHeight;
      if (j) {
        var n = h,
          o = this.getPosition(this.$viewport);
        h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
      }
      var p = this.getCalculatedOffset(h, k, l, m);
      this.applyPlacement(p, h);
      var q = function() {
        var a = e.hoverState;
        e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
      };
      a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
    }
  }, c.prototype.applyPlacement = function(b, c) {
    var d = this.tip(),
      e = d[0].offsetWidth,
      f = d[0].offsetHeight,
      g = parseInt(d.css("margin-top"), 10),
      h = parseInt(d.css("margin-left"), 10);
    isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
      using: function(a) {
        d.css({
          top: Math.round(a.top),
          left: Math.round(a.left)
        })
      }
    }, b), 0), d.addClass("in");
    var i = d[0].offsetWidth,
      j = d[0].offsetHeight;
    "top" == c && j != f && (b.top = b.top + f - j);
    var k = this.getViewportAdjustedDelta(c, b, i, j);
    k.left ? b.left += k.left : b.top += k.top;
    var l = /top|bottom/.test(c),
      m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
      n = l ? "offsetWidth" : "offsetHeight";
    d.offset(b), this.replaceArrow(m, d[0][n], l)
  }, c.prototype.replaceArrow = function(a, b, c) {
    this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
  }, c.prototype.setContent = function() {
    var a = this.tip(),
      b = this.getTitle();
    a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
  }, c.prototype.hide = function(b) {
    function d() {
      "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
    }
    var e = this,
      f = a(this.$tip),
      g = a.Event("hide.bs." + this.type);
    return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
  }, c.prototype.fixTitle = function() {
    var a = this.$element;
    (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
  }, c.prototype.hasContent = function() {
    return this.getTitle()
  }, c.prototype.getPosition = function(b) {
    b = b || this.$element;
    var c = b[0],
      d = "BODY" == c.tagName,
      e = c.getBoundingClientRect();
    null == e.width && (e = a.extend({}, e, {
      width: e.right - e.left,
      height: e.bottom - e.top
    }));
    var f = window.SVGElement && c instanceof window.SVGElement,
      g = d ? {
        top: 0,
        left: 0
      } : f ? null : b.offset(),
      h = {
        scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
      },
      i = d ? {
        width: a(window).width(),
        height: a(window).height()
      } : null;
    return a.extend({}, e, h, i, g)
  }, c.prototype.getCalculatedOffset = function(a, b, c, d) {
    return "bottom" == a ? {
      top: b.top + b.height,
      left: b.left + b.width / 2 - c / 2
    } : "top" == a ? {
      top: b.top - d,
      left: b.left + b.width / 2 - c / 2
    } : "left" == a ? {
      top: b.top + b.height / 2 - d / 2,
      left: b.left - c
    } : {
      top: b.top + b.height / 2 - d / 2,
      left: b.left + b.width
    }
  }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
    var e = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return e;
    var f = this.options.viewport && this.options.viewport.padding || 0,
      g = this.getPosition(this.$viewport);
    if (/right|left/.test(a)) {
      var h = b.top - f - g.scroll,
        i = b.top + f - g.scroll + d;
      h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
    } else {
      var j = b.left - f,
        k = b.left + f + c;
      j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
    }
    return e
  }, c.prototype.getTitle = function() {
    var a, b = this.$element,
      c = this.options;
    return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
  }, c.prototype.getUID = function(a) {
    do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
    return a
  }, c.prototype.tip = function() {
    if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip
  }, c.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }, c.prototype.enable = function() {
    this.enabled = !0
  }, c.prototype.disable = function() {
    this.enabled = !1
  }, c.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
  }, c.prototype.toggle = function(b) {
    var c = this;
    b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
  }, c.prototype.destroy = function() {
    var a = this;
    clearTimeout(this.timeout), this.hide(function() {
      a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null
    })
  };
  var d = a.fn.tooltip;
  a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() {
    return a.fn.tooltip = d, this
  }
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.popover"),
        f = "object" == typeof b && b;
      (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
    })
  }
  var c = function(a, b) {
    this.init("popover", a, b)
  };
  if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
  c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() {
    return c.DEFAULTS
  }, c.prototype.setContent = function() {
    var a = this.tip(),
      b = this.getTitle(),
      c = this.getContent();
    a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
  }, c.prototype.hasContent = function() {
    return this.getTitle() || this.getContent()
  }, c.prototype.getContent = function() {
    var a = this.$element,
      b = this.options;
    return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
  }, c.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
  };
  var d = a.fn.popover;
  a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() {
    return a.fn.popover = d, this
  }
}(jQuery), + function(a) {
  "use strict";

  function b(c, d) {
    this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
  }

  function c(c) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.scrollspy"),
        f = "object" == typeof c && c;
      e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
    })
  }
  b.VERSION = "3.3.7", b.DEFAULTS = {
    offset: 10
  }, b.prototype.getScrollHeight = function() {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }, b.prototype.refresh = function() {
    var b = this,
      c = "offset",
      d = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
      var b = a(this),
        e = b.data("target") || b.attr("href"),
        f = /^#./.test(e) && a(e);
      return f && f.length && f.is(":visible") && [
        [f[c]().top + d, e]
      ] || null
    }).sort(function(a, b) {
      return a[0] - b[0]
    }).each(function() {
      b.offsets.push(this[0]), b.targets.push(this[1])
    })
  }, b.prototype.process = function() {
    var a, b = this.$scrollElement.scrollTop() + this.options.offset,
      c = this.getScrollHeight(),
      d = this.options.offset + c - this.$scrollElement.height(),
      e = this.offsets,
      f = this.targets,
      g = this.activeTarget;
    if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
    if (g && b < e[0]) return this.activeTarget = null, this.clear();
    for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
  }, b.prototype.activate = function(b) {
    this.activeTarget = b, this.clear();
    var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
      d = a(c).parents("li").addClass("active");
    d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
  }, b.prototype.clear = function() {
    a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
  };
  var d = a.fn.scrollspy;
  a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
    return a.fn.scrollspy = d, this
  }, a(window).on("load.bs.scrollspy.data-api", function() {
    a('[data-spy="scroll"]').each(function() {
      var b = a(this);
      c.call(b, b.data())
    })
  })
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.tab");
      e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
    })
  }
  var c = function(b) {
    this.element = a(b)
  };
  c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function() {
    var b = this.element,
      c = b.closest("ul:not(.dropdown-menu)"),
      d = b.data("target");
    if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
      var e = c.find(".active:last a"),
        f = a.Event("hide.bs.tab", {
          relatedTarget: b[0]
        }),
        g = a.Event("show.bs.tab", {
          relatedTarget: e[0]
        });
      if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
        var h = a(d);
        this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() {
          e.trigger({
            type: "hidden.bs.tab",
            relatedTarget: b[0]
          }), b.trigger({
            type: "shown.bs.tab",
            relatedTarget: e[0]
          })
        })
      }
    }
  }, c.prototype.activate = function(b, d, e) {
    function f() {
      g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
    }
    var g = d.find("> .active"),
      h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
    g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
  };
  var d = a.fn.tab;
  a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() {
    return a.fn.tab = d, this
  };
  var e = function(c) {
    c.preventDefault(), b.call(a(this), "show")
  };
  a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function(a) {
  "use strict";

  function b(b) {
    return this.each(function() {
      var d = a(this),
        e = d.data("bs.affix"),
        f = "object" == typeof b && b;
      e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
    })
  }
  var c = function(b, d) {
    this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
  };
  c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
    offset: 0,
    target: window
  }, c.prototype.getState = function(a, b, c, d) {
    var e = this.$target.scrollTop(),
      f = this.$element.offset(),
      g = this.$target.height();
    if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
    if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
    var h = null == this.affixed,
      i = h ? e : f.top,
      j = h ? g : b;
    return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
  }, c.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(c.RESET).addClass("affix");
    var a = this.$target.scrollTop(),
      b = this.$element.offset();
    return this.pinnedOffset = b.top - a
  }, c.prototype.checkPositionWithEventLoop = function() {
    setTimeout(a.proxy(this.checkPosition, this), 1)
  }, c.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
      var b = this.$element.height(),
        d = this.options.offset,
        e = d.top,
        f = d.bottom,
        g = Math.max(a(document).height(), a(document.body).height());
      "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
      var h = this.getState(g, b, e, f);
      if (this.affixed != h) {
        null != this.unpin && this.$element.css("top", "");
        var i = "affix" + (h ? "-" + h : ""),
          j = a.Event(i + ".bs.affix");
        if (this.$element.trigger(j), j.isDefaultPrevented()) return;
        this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
      }
      "bottom" == h && this.$element.offset({
        top: g - b - f
      })
    }
  };
  var d = a.fn.affix;
  a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() {
    return a.fn.affix = d, this
  }, a(window).on("load", function() {
    a('[data-spy="affix"]').each(function() {
      var c = a(this),
        d = c.data();
      d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
    })
  })
}(jQuery),
function(a, b) {
  "use strict";

  function c(a, b, c) {
    if (!a) throw pa("areq", "Argument '{0}' is {1}", b || "?", c || "required");
    return a
  }

  function d(a, b) {
    return a || b ? a ? b ? (X(a) && (a = a.join(" ")), X(b) && (b = b.join(" ")), a + " " + b) : a : b : ""
  }

  function e(a) {
    var b = {};
    return a && (a.to || a.from) && (b.to = a.to, b.from = a.from), b
  }

  function f(a, b, c) {
    var d = "";
    return a = X(a) ? a : a && aa(a) && a.length ? a.split(/\s+/) : [], W(a, function(a, e) {
      a && a.length > 0 && (d += e > 0 ? " " : "", d += c ? b + a : a + b)
    }), d
  }

  function g(a, b) {
    var c = a.indexOf(b);
    b >= 0 && a.splice(c, 1)
  }

  function h(a) {
    if (a instanceof ca) switch (a.length) {
      case 0:
        return a;
      case 1:
        if (a[0].nodeType === L) return a;
        break;
      default:
        return ca(i(a))
    }
    return a.nodeType === L ? ca(a) : void 0
  }

  function i(a) {
    if (!a[0]) return a;
    for (var b = 0; b < a.length; b++) {
      var c = a[b];
      if (c.nodeType == L) return c
    }
  }

  function j(a, b, c) {
    W(b, function(b) {
      a.addClass(b, c)
    })
  }

  function k(a, b, c) {
    W(b, function(b) {
      a.removeClass(b, c)
    })
  }

  function l(a) {
    return function(b, c) {
      c.addClass && (j(a, b, c.addClass), c.addClass = null), c.removeClass && (k(a, b, c.removeClass), c.removeClass = null)
    }
  }

  function m(a) {
    if (a = a || {}, !a.$$prepared) {
      var b = a.domOperation || da;
      a.domOperation = function() {
        a.$$domOperationFired = !0, b(), b = da
      }, a.$$prepared = !0
    }
    return a
  }

  function n(a, b) {
    o(a, b), p(a, b)
  }

  function o(a, b) {
    b.from && (a.css(b.from), b.from = null)
  }

  function p(a, b) {
    b.to && (a.css(b.to), b.to = null)
  }

  function q(a, b, c) {
    var d = b.options || {},
      e = c.options || {},
      f = (d.addClass || "") + " " + (e.addClass || ""),
      g = (d.removeClass || "") + " " + (e.removeClass || ""),
      h = r(a.attr("class"), f, g);
    e.preparationClasses && (d.preparationClasses = y(e.preparationClasses, d.preparationClasses), delete e.preparationClasses);
    var i = d.domOperation !== da ? d.domOperation : null;
    return V(d, e), i && (d.domOperation = i), h.addClass ? d.addClass = h.addClass : d.addClass = null, h.removeClass ? d.removeClass = h.removeClass : d.removeClass = null, b.addClass = d.addClass, b.removeClass = d.removeClass, d
  }

  function r(a, b, c) {
    function d(a) {
      aa(a) && (a = a.split(" "));
      var b = {};
      return W(a, function(a) {
        a.length && (b[a] = !0)
      }), b
    }
    var e = 1,
      f = -1,
      g = {};
    a = d(a), b = d(b), W(b, function(a, b) {
      g[b] = e
    }), c = d(c), W(c, function(a, b) {
      g[b] = g[b] === e ? null : f
    });
    var h = {
      addClass: "",
      removeClass: ""
    };
    return W(g, function(b, c) {
      var d, g;
      b === e ? (d = "addClass", g = !a[c] || a[c + N]) : b === f && (d = "removeClass", g = a[c] || a[c + M]), g && (h[d].length && (h[d] += " "), h[d] += c)
    }), h
  }

  function s(a) {
    return a instanceof ca ? a[0] : a
  }

  function t(a, b, c) {
    var d = "";
    b && (d = f(b, O, !0)), c.addClass && (d = y(d, f(c.addClass, M))), c.removeClass && (d = y(d, f(c.removeClass, N))), d.length && (c.preparationClasses = d, a.addClass(d))
  }

  function u(a, b) {
    b.preparationClasses && (a.removeClass(b.preparationClasses), b.preparationClasses = null), b.activeClasses && (a.removeClass(b.activeClasses), b.activeClasses = null)
  }

  function v(a, b) {
    var c = b ? "-" + b + "s" : "";
    return x(a, [na, c]), [na, c]
  }

  function w(a, b) {
    var c = b ? "paused" : "",
      d = J + ja;
    return x(a, [d, c]), [d, c]
  }

  function x(a, b) {
    var c = b[0],
      d = b[1];
    a.style[c] = d
  }

  function y(a, b) {
    return a ? b ? a + " " + b : a : b
  }

  function z(a) {
    return [ma, a + "s"]
  }

  function A(a, b) {
    var c = b ? la : na;
    return [c, a + "s"]
  }

  function B(a, b, c) {
    var d = Object.create(null),
      e = a.getComputedStyle(b) || {};
    return W(c, function(a, b) {
      var c = e[a];
      if (c) {
        var f = c.charAt(0);
        ("-" === f || "+" === f || f >= 0) && (c = C(c)), 0 === c && (c = null), d[b] = c
      }
    }), d
  }

  function C(a) {
    var b = 0,
      c = a.split(/\s*,\s*/);
    return W(c, function(a) {
      "s" == a.charAt(a.length - 1) && (a = a.substring(0, a.length - 1)), a = parseFloat(a) || 0, b = b ? Math.max(a, b) : a
    }), b
  }

  function D(a) {
    return 0 === a || null != a
  }

  function E(a, b) {
    var c = H,
      d = a + "s";
    return b ? c += ea : d += " linear all", [c, d]
  }

  function F() {
    var a = Object.create(null);
    return {
      flush: function() {
        a = Object.create(null)
      },
      count: function(b) {
        var c = a[b];
        return c ? c.total : 0
      },
      get: function(b) {
        var c = a[b];
        return c && c.value
      },
      put: function(b, c) {
        a[b] ? a[b].total++ : a[b] = {
          total: 1,
          value: c
        }
      }
    }
  }

  function G(a, b, c) {
    W(c, function(c) {
      a[c] = Y(a[c]) ? a[c] : b.style.getPropertyValue(c)
    })
  }
  var H, I, J, K, L = 1,
    M = "-add",
    N = "-remove",
    O = "ng-",
    P = "-active",
    Q = "-prepare",
    R = "ng-animate",
    S = "$$ngAnimateChildren",
    T = "";
  void 0 === a.ontransitionend && void 0 !== a.onwebkittransitionend ? (T = "-webkit-", H = "WebkitTransition", I = "webkitTransitionEnd transitionend") : (H = "transition", I = "transitionend"), void 0 === a.onanimationend && void 0 !== a.onwebkitanimationend ? (T = "-webkit-", J = "WebkitAnimation", K = "webkitAnimationEnd animationend") : (J = "animation", K = "animationend");
  var U, V, W, X, Y, Z, $, _, aa, ba, ca, da, ea = "Duration",
    fa = "Property",
    ga = "Delay",
    ha = "TimingFunction",
    ia = "IterationCount",
    ja = "PlayState",
    ka = 9999,
    la = J + ga,
    ma = J + ea,
    na = H + ga,
    oa = H + ea,
    pa = b.$$minErr("ng"),
    qa = ["$$rAF", function(a) {
      function b(a) {
        d = d.concat(a), c()
      }

      function c() {
        if (d.length) {
          for (var b = d.shift(), f = 0; f < b.length; f++) b[f]();
          e || a(function() {
            e || c()
          })
        }
      }
      var d, e;
      return d = b.queue = [], b.waitUntilQuiet = function(b) {
        e && e(), e = a(function() {
          e = null, b(), c()
        })
      }, b
    }],
    ra = ["$interpolate", function(a) {
      return {
        link: function(b, c, d) {
          function e(a) {
            a = "on" === a || "true" === a, c.data(S, a)
          }
          var f = d.ngAnimateChildren;
          aa(f) && 0 === f.length ? c.data(S, !0) : (e(a(f)(b)), d.$observe("ngAnimateChildren", e))
        }
      }
    }],
    sa = "$$animateCss",
    ta = 1e3,
    ua = 3,
    va = 1.5,
    wa = {
      transitionDuration: oa,
      transitionDelay: na,
      transitionProperty: H + fa,
      animationDuration: ma,
      animationDelay: la,
      animationIterationCount: J + ia
    },
    xa = {
      transitionDuration: oa,
      transitionDelay: na,
      animationDuration: ma,
      animationDelay: la
    },
    ya = ["$animateProvider", function(a) {
      var b = F(),
        c = F();
      this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue", function(a, d, h, i, j, k, q, r) {
        function t(a, b) {
          var c = "$$ngAnimateParentKey",
            d = a.parentNode,
            e = d[c] || (d[c] = ++Q);
          return e + "-" + a.getAttribute("class") + "-" + b
        }

        function u(c, d, e, f) {
          var g = b.get(e);
          return g || (g = B(a, c, f), "infinite" === g.animationIterationCount && (g.animationIterationCount = 1)), b.put(e, g), g
        }

        function y(e, g, h, i) {
          var j;
          if (b.count(h) > 0 && (j = c.get(h), !j)) {
            var k = f(g, "-stagger");
            d.addClass(e, k), j = B(a, e, i), j.animationDuration = Math.max(j.animationDuration, 0), j.transitionDuration = Math.max(j.transitionDuration, 0), d.removeClass(e, k), c.put(h, j)
          }
          return j || {}
        }

        function C(a) {
          R.push(a), q.waitUntilQuiet(function() {
            b.flush(), c.flush();
            for (var a = j(), d = 0; d < R.length; d++) R[d](a);
            R.length = 0
          })
        }

        function F(a, b, c) {
          var d = u(a, b, c, wa),
            e = d.animationDelay,
            f = d.transitionDelay;
          return d.maxDelay = e && f ? Math.max(e, f) : e || f, d.maxDuration = Math.max(d.animationDuration * d.animationIterationCount, d.transitionDuration), d
        }
        var L = l(d),
          Q = 0,
          R = [];
        return function(a, c) {
          function j() {
            q()
          }

          function l() {
            q(!0)
          }

          function q(b) {
            if (!(Y || $ && Z)) {
              Y = !0, Z = !1, S.$$skipPreparationClasses || d.removeClass(a, wa), d.removeClass(a, za), w(V, !1), v(V, !1), W(ja, function(a) {
                V.style[a[0]] = ""
              }), L(a, S), n(a, S), Object.keys(T).length && W(T, function(a, b) {
                a ? V.style.setProperty(b, a) : V.style.removeProperty(b)
              }), S.onDone && S.onDone(), na && na.length && a.off(na.join(" "), Q);
              var c = a.data(sa);
              c && (i.cancel(c[0].timer), a.removeData(sa)), _ && _.complete(!b)
            }
          }

          function u(a) {
            Na.blockTransition && v(V, a), Na.blockKeyframeAnimation && w(V, !!a)
          }

          function B() {
            return _ = new h({
              end: j,
              cancel: l
            }), C(da), q(), {
              $$willAnimate: !1,
              start: function() {
                return _
              },
              end: j
            }
          }

          function Q(a) {
            a.stopPropagation();
            var b = a.originalEvent || a,
              c = b.$manualTimeStamp || Date.now(),
              d = parseFloat(b.elapsedTime.toFixed(ua));
            Math.max(c - ia, 0) >= ca && d >= ea && ($ = !0, q())
          }

          function R() {
            function b() {
              if (!Y) {
                if (u(!1), W(ja, function(a) {
                    var b = a[0],
                      c = a[1];
                    V.style[b] = c
                  }), L(a, S), d.addClass(a, za), Na.recalculateTimingStyles) {
                  if (ya = V.className + " " + wa, Ca = t(V, ya), La = F(V, ya, Ca), Ma = La.maxDelay, ba = Math.max(Ma, 0), ea = La.maxDuration, 0 === ea) return void q();
                  Na.hasTransitions = La.transitionDuration > 0, Na.hasAnimations = La.animationDuration > 0
                }
                if (Na.applyAnimationDelay && (Ma = "boolean" != typeof S.delay && D(S.delay) ? parseFloat(S.delay) : Ma, ba = Math.max(Ma, 0), La.animationDelay = Ma, Oa = A(Ma, !0), ja.push(Oa), V.style[Oa[0]] = Oa[1]), ca = ba * ta, ga = ea * ta, S.easing) {
                  var b, e = S.easing;
                  Na.hasTransitions && (b = H + ha, ja.push([b, e]), V.style[b] = e), Na.hasAnimations && (b = J + ha, ja.push([b, e]), V.style[b] = e)
                }
                La.transitionDuration && na.push(I), La.animationDuration && na.push(K), ia = Date.now();
                var f = ca + va * ga,
                  g = ia + f,
                  h = a.data(sa) || [],
                  j = !0;
                if (h.length) {
                  var k = h[0];
                  j = g > k.expectedEndTime, j ? i.cancel(k.timer) : h.push(q)
                }
                if (j) {
                  var l = i(c, f, !1);
                  h[0] = {
                    timer: l,
                    expectedEndTime: g
                  }, h.push(q), a.data(sa, h)
                }
                na.length && a.on(na.join(" "), Q), S.to && (S.cleanupStyles && G(T, V, Object.keys(S.to)), p(a, S))
              }
            }

            function c() {
              var b = a.data(sa);
              if (b) {
                for (var c = 1; c < b.length; c++) b[c]();
                a.removeData(sa)
              }
            }
            if (!Y) {
              if (!V.parentNode) return void q();
              var e = function(a) {
                  if ($) Z && a && (Z = !1, q());
                  else if (Z = !a, La.animationDuration) {
                    var b = w(V, Z);
                    Z ? ja.push(b) : g(ja, b)
                  }
                },
                f = Ja > 0 && (La.transitionDuration && 0 === Da.transitionDuration || La.animationDuration && 0 === Da.animationDuration) && Math.max(Da.animationDelay, Da.transitionDelay);
              f ? i(b, Math.floor(f * Ja * ta), !1) : b(), aa.resume = function() {
                e(!0)
              }, aa.pause = function() {
                e(!1)
              }
            }
          }
          var S = c || {};
          S.$$prepared || (S = m(U(S)));
          var T = {},
            V = s(a);
          if (!V || !V.parentNode || !r.enabled()) return B();
          var Y, Z, $, _, aa, ba, ca, ea, ga, ia, ja = [],
            la = a.attr("class"),
            ma = e(S),
            na = [];
          if (0 === S.duration || !k.animations && !k.transitions) return B();
          var oa = S.event && X(S.event) ? S.event.join(" ") : S.event,
            pa = oa && S.structural,
            qa = "",
            ra = "";
          pa ? qa = f(oa, O, !0) : oa && (qa = oa), S.addClass && (ra += f(S.addClass, M)), S.removeClass && (ra.length && (ra += " "), ra += f(S.removeClass, N)), S.applyClassesEarly && ra.length && L(a, S);
          var wa = [qa, ra].join(" ").trim(),
            ya = la + " " + wa,
            za = f(wa, P),
            Aa = ma.to && Object.keys(ma.to).length > 0,
            Ba = (S.keyframeStyle || "").length > 0;
          if (!Ba && !Aa && !wa) return B();
          var Ca, Da;
          if (S.stagger > 0) {
            var Ea = parseFloat(S.stagger);
            Da = {
              transitionDelay: Ea,
              animationDelay: Ea,
              transitionDuration: 0,
              animationDuration: 0
            }
          } else Ca = t(V, ya), Da = y(V, wa, Ca, xa);
          S.$$skipPreparationClasses || d.addClass(a, wa);
          var Fa;
          if (S.transitionStyle) {
            var Ga = [H, S.transitionStyle];
            x(V, Ga), ja.push(Ga)
          }
          if (S.duration >= 0) {
            Fa = V.style[H].length > 0;
            var Ha = E(S.duration, Fa);
            x(V, Ha), ja.push(Ha)
          }
          if (S.keyframeStyle) {
            var Ia = [J, S.keyframeStyle];
            x(V, Ia), ja.push(Ia)
          }
          var Ja = Da ? S.staggerIndex >= 0 ? S.staggerIndex : b.count(Ca) : 0,
            Ka = 0 === Ja;
          Ka && !S.skipBlocking && v(V, ka);
          var La = F(V, ya, Ca),
            Ma = La.maxDelay;
          ba = Math.max(Ma, 0), ea = La.maxDuration;
          var Na = {};
          if (Na.hasTransitions = La.transitionDuration > 0, Na.hasAnimations = La.animationDuration > 0, Na.hasTransitionAll = Na.hasTransitions && "all" == La.transitionProperty, Na.applyTransitionDuration = Aa && (Na.hasTransitions && !Na.hasTransitionAll || Na.hasAnimations && !Na.hasTransitions), Na.applyAnimationDuration = S.duration && Na.hasAnimations, Na.applyTransitionDelay = D(S.delay) && (Na.applyTransitionDuration || Na.hasTransitions), Na.applyAnimationDelay = D(S.delay) && Na.hasAnimations, Na.recalculateTimingStyles = ra.length > 0, (Na.applyTransitionDuration || Na.applyAnimationDuration) && (ea = S.duration ? parseFloat(S.duration) : ea, Na.applyTransitionDuration && (Na.hasTransitions = !0, La.transitionDuration = ea, Fa = V.style[H + fa].length > 0, ja.push(E(ea, Fa))), Na.applyAnimationDuration && (Na.hasAnimations = !0, La.animationDuration = ea, ja.push(z(ea)))), 0 === ea && !Na.recalculateTimingStyles) return B();
          if (null != S.delay) {
            var Oa;
            "boolean" != typeof S.delay && (Oa = parseFloat(S.delay), ba = Math.max(Oa, 0)), Na.applyTransitionDelay && ja.push(A(Oa)), Na.applyAnimationDelay && ja.push(A(Oa, !0))
          }
          return null == S.duration && La.transitionDuration > 0 && (Na.recalculateTimingStyles = Na.recalculateTimingStyles || Ka), ca = ba * ta, ga = ea * ta, S.skipBlocking || (Na.blockTransition = La.transitionDuration > 0, Na.blockKeyframeAnimation = La.animationDuration > 0 && Da.animationDelay > 0 && 0 === Da.animationDuration), S.from && (S.cleanupStyles && G(T, V, Object.keys(S.from)), o(a, S)), Na.blockTransition || Na.blockKeyframeAnimation ? u(ea) : S.skipBlocking || v(V, !1), {
            $$willAnimate: !0,
            end: j,
            start: function() {
              return Y ? void 0 : (aa = {
                end: j,
                cancel: l,
                resume: null,
                pause: null
              }, _ = new h(aa), C(R), _)
            }
          }
        }
      }]
    }],
    za = ["$$animationProvider", function(a) {
      function b(a) {
        return a.parentNode && 11 === a.parentNode.nodeType
      }
      a.drivers.push("$$animateCssDriver");
      var c = "ng-animate-shim",
        d = "ng-anchor",
        e = "ng-anchor-out",
        f = "ng-anchor-in";
      this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function(a, g, h, i, j, k, m) {
        function n(a) {
          return a.replace(/\bng-\S+\b/g, "")
        }

        function o(a, b) {
          return aa(a) && (a = a.split(" ")), aa(b) && (b = b.split(" ")), a.filter(function(a) {
            return -1 === b.indexOf(a)
          }).join(" ")
        }

        function p(b, g, i) {
          function j(a) {
            var b = {},
              c = s(a).getBoundingClientRect();
            return W(["width", "height", "top", "left"], function(a) {
              var d = c[a];
              switch (a) {
                case "top":
                  d += t.scrollTop;
                  break;
                case "left":
                  d += t.scrollLeft
              }
              b[a] = Math.floor(d) + "px"
            }), b
          }

          function k() {
            var b = a(q, {
              addClass: e,
              delay: !0,
              from: j(g)
            });
            return b.$$willAnimate ? b : null
          }

          function l(a) {
            return a.attr("class") || ""
          }

          function m() {
            var b = n(l(i)),
              c = o(b, r),
              d = o(r, b),
              g = a(q, {
                to: j(i),
                addClass: f + " " + c,
                removeClass: e + " " + d,
                delay: !0
              });
            return g.$$willAnimate ? g : null
          }

          function p() {
            q.remove(), g.removeClass(c), i.removeClass(c)
          }
          var q = ca(s(g).cloneNode(!0)),
            r = n(l(q));
          g.addClass(c), i.addClass(c), q.addClass(d), v.append(q);
          var u, w = k();
          if (!w && (u = m(), !u)) return p();
          var x = w || u;
          return {
            start: function() {
              function a() {
                c && c.end()
              }
              var b, c = x.start();
              return c.done(function() {
                return c = null, !u && (u = m()) ? (c = u.start(), c.done(function() {
                  c = null, p(), b.complete()
                }), c) : (p(), void b.complete())
              }), b = new h({
                end: a,
                cancel: a
              })
            }
          }
        }

        function q(a, b, c, d) {
          var e = r(a, da),
            f = r(b, da),
            g = [];
          return W(d, function(a) {
            var b = a.out,
              d = a["in"],
              e = p(c, b, d);
            e && g.push(e)
          }), e || f || 0 !== g.length ? {
            start: function() {
              function a() {
                W(b, function(a) {
                  a.end()
                })
              }
              var b = [];
              e && b.push(e.start()), f && b.push(f.start()), W(g, function(a) {
                b.push(a.start())
              });
              var c = new h({
                end: a,
                cancel: a
              });
              return h.all(b, function(a) {
                c.complete(a)
              }), c
            }
          } : void 0
        }

        function r(b) {
          var c = b.element,
            d = b.options || {};
          b.structural && (d.event = b.event, d.structural = !0, d.applyClassesEarly = !0, "leave" === b.event && (d.onDone = d.domOperation)), d.preparationClasses && (d.event = y(d.event, d.preparationClasses));
          var e = a(c, d);
          return e.$$willAnimate ? e : null
        }
        if (!j.animations && !j.transitions) return da;
        var t = m[0].body,
          u = s(i),
          v = ca(b(u) || t.contains(u) ? u : t);
        l(k);
        return function(a) {
          return a.from && a.to ? q(a.from, a.to, a.classes, a.anchors) : r(a)
        }
      }]
    }],
    Aa = ["$animateProvider", function(a) {
      this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function(b, c, d) {
        function e(c) {
          c = X(c) ? c : c.split(" ");
          for (var d = [], e = {}, f = 0; f < c.length; f++) {
            var g = c[f],
              h = a.$$registeredAnimations[g];
            h && !e[g] && (d.push(b.get(h)), e[g] = !0)
          }
          return d
        }
        var f = l(d);
        return function(a, b, d, g) {
          function h() {
            g.domOperation(), f(a, g)
          }

          function i() {
            o = !0, h(), n(a, g)
          }

          function j(a, b, d, e, f) {
            var g;
            switch (d) {
              case "animate":
                g = [b, e.from, e.to, f];
                break;
              case "setClass":
                g = [b, r, s, f];
                break;
              case "addClass":
                g = [b, r, f];
                break;
              case "removeClass":
                g = [b, s, f];
                break;
              default:
                g = [b, f]
            }
            g.push(e);
            var h = a.apply(a, g);
            if (h)
              if ($(h.start) && (h = h.start()), h instanceof c) h.done(f);
              else if ($(h)) return h;
            return da
          }

          function k(a, b, d, e, f) {
            var g = [];
            return W(e, function(e) {
              var h = e[f];
              h && g.push(function() {
                var e, f, g = !1,
                  i = function(a) {
                    g || (g = !0, (f || da)(a), e.complete(!a))
                  };
                return e = new c({
                  end: function() {
                    i()
                  },
                  cancel: function() {
                    i(!0)
                  }
                }), f = j(h, a, b, d, function(a) {
                  var b = a === !1;
                  i(b)
                }), e
              })
            }), g
          }

          function l(a, b, d, e, f) {
            var g = k(a, b, d, e, f);
            if (0 === g.length) {
              var h, i;
              "beforeSetClass" === f ? (h = k(a, "removeClass", d, e, "beforeRemoveClass"), i = k(a, "addClass", d, e, "beforeAddClass")) : "setClass" === f && (h = k(a, "removeClass", d, e, "removeClass"), i = k(a, "addClass", d, e, "addClass")), h && (g = g.concat(h)), i && (g = g.concat(i))
            }
            if (0 !== g.length) return function(a) {
              var b = [];
              return g.length && W(g, function(a) {
                  b.push(a())
                }), b.length ? c.all(b, a) : a(),
                function(a) {
                  W(b, function(b) {
                    a ? b.cancel() : b.end()
                  })
                }
            }
          }
          var o = !1;
          3 === arguments.length && _(d) && (g = d, d = null), g = m(g), d || (d = a.attr("class") || "", g.addClass && (d += " " + g.addClass), g.removeClass && (d += " " + g.removeClass));
          var p, q, r = g.addClass,
            s = g.removeClass,
            t = e(d);
          if (t.length) {
            var u, v;
            "leave" == b ? (v = "leave", u = "afterLeave") : (v = "before" + b.charAt(0).toUpperCase() + b.substr(1), u = b), "enter" !== b && "move" !== b && (p = l(a, b, g, t, v)), q = l(a, b, g, t, u)
          }
          if (p || q) {
            var w;
            return {
              $$willAnimate: !0,
              end: function() {
                return w ? w.end() : (i(), w = new c, w.complete(!0)), w
              },
              start: function() {
                function a(a) {
                  i(a), w.complete(a)
                }

                function b(b) {
                  o || ((d || da)(b), a(b))
                }
                if (w) return w;
                w = new c;
                var d, e = [];
                return p && e.push(function(a) {
                  d = p(a)
                }), e.length ? e.push(function(a) {
                  h(), a(!0)
                }) : h(), q && e.push(function(a) {
                  d = q(a)
                }), w.setHost({
                  end: function() {
                    b()
                  },
                  cancel: function() {
                    b(!0)
                  }
                }), c.chain(e, a), w
              }
            }
          }
        }
      }]
    }],
    Ba = ["$$animationProvider", function(a) {
      a.drivers.push("$$animateJsDriver"), this.$get = ["$$animateJs", "$$AnimateRunner", function(a, b) {
        function c(b) {
          var c = b.element,
            d = b.event,
            e = b.options,
            f = b.classes;
          return a(c, d, f, e)
        }
        return function(a) {
          if (a.from && a.to) {
            var d = c(a.from),
              e = c(a.to);
            if (!d && !e) return;
            return {
              start: function() {
                function a() {
                  return function() {
                    W(f, function(a) {
                      a.end()
                    })
                  }
                }

                function c(a) {
                  g.complete(a)
                }
                var f = [];
                d && f.push(d.start()), e && f.push(e.start()), b.all(f, c);
                var g = new b({
                  end: a(),
                  cancel: a()
                });
                return g
              }
            }
          }
          return c(a)
        }
      }]
    }],
    Ca = "data-ng-animate",
    Da = "$ngAnimatePin",
    Ea = ["$animateProvider", function(b) {
      function d(a) {
        if (!a) return null;
        var b = a.split(o),
          c = Object.create(null);
        return W(b, function(a) {
          c[a] = !0
        }), c
      }

      function e(a, b) {
        if (a && b) {
          var c = d(b);
          return a.split(o).some(function(a) {
            return c[a]
          })
        }
      }

      function f(a, b, c, d) {
        return p[a].some(function(a) {
          return a(b, c, d)
        })
      }

      function g(a, b) {
        var c = (a.addClass || "").length > 0,
          d = (a.removeClass || "").length > 0;
        return b ? c && d : c || d
      }
      var j = 1,
        k = 2,
        o = " ",
        p = this.rules = {
          skip: [],
          cancel: [],
          join: []
        };
      p.join.push(function(a, b, c) {
        return !b.structural && g(b)
      }), p.skip.push(function(a, b, c) {
        return !b.structural && !g(b)
      }), p.skip.push(function(a, b, c) {
        return "leave" == c.event && b.structural
      }), p.skip.push(function(a, b, c) {
        return c.structural && c.state === k && !b.structural
      }), p.cancel.push(function(a, b, c) {
        return c.structural && b.structural
      }), p.cancel.push(function(a, b, c) {
        return c.state === k && b.structural
      }), p.cancel.push(function(a, b, c) {
        if (c.structural) return !1;
        var d = b.addClass,
          f = b.removeClass,
          g = c.addClass,
          h = c.removeClass;
        return ba(d) && ba(f) || ba(g) && ba(h) ? !1 : e(d, h) || e(f, g)
      }), this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", function(d, e, o, p, r, v, w, x, y, z) {
        function A() {
          var a = !1;
          return function(b) {
            a ? b() : e.$$postDigest(function() {
              a = !0, b()
            })
          }
        }

        function B(a, b) {
          return q(a, b, {})
        }

        function C(a, b, c) {
          var d = s(b),
            e = s(a),
            f = [],
            g = Q[c];
          return g && W(g, function(a) {
            da.call(a.node, d) ? f.push(a.callback) : "leave" === c && da.call(a.node, e) && f.push(a.callback)
          }), f
        }

        function D(a, b, c) {
          var d = i(b);
          return a.filter(function(a) {
            var b = a.node === d && (!c || a.callback === c);
            return !b
          })
        }

        function E(a, b) {
          "close" !== a || b[0].parentNode || ea.off(b)
        }

        function F(a, b, c) {
          function i(b, c, e, f) {
            z(function() {
              var b = C(r, a, c);
              b.length ? d(function() {
                W(b, function(b) {
                  b(a, e, f)
                }), E(e, a)
              }) : E(e, a)
            }), b.progress(c, e, f)
          }

          function l(b) {
            u(a, x), $(a, x), n(a, x), x.domOperation(), y.complete(!b)
          }
          var o, r, x = U(c);
          a = h(a), a && (o = s(a), r = a.parent()), x = m(x);
          var y = new w,
            z = A();
          if (X(x.addClass) && (x.addClass = x.addClass.join(" ")), x.addClass && !aa(x.addClass) && (x.addClass = null), X(x.removeClass) && (x.removeClass = x.removeClass.join(" ")), x.removeClass && !aa(x.removeClass) && (x.removeClass = null), x.from && !_(x.from) && (x.from = null), x.to && !_(x.to) && (x.to = null), !o) return l(), y;
          var D = [o.className, x.addClass, x.removeClass].join(" ");
          if (!T(D)) return l(), y;
          var F = ["enter", "move", "leave"].indexOf(b) >= 0,
            I = p[0].hidden,
            L = !O || I || N.get(o),
            P = !L && M.get(o) || {},
            Q = !!P.state;
          if (L || Q && P.state == j || (L = !J(a, r, b)), L) return I && i(y, b, "start"), l(), I && i(y, b, "close"), y;
          F && G(a);
          var R = {
            structural: F,
            element: a,
            event: b,
            addClass: x.addClass,
            removeClass: x.removeClass,
            close: l,
            options: x,
            runner: y
          };
          if (Q) {
            var S = f("skip", a, R, P);
            if (S) return P.state === k ? (l(), y) : (q(a, P, R), P.runner);
            var V = f("cancel", a, R, P);
            if (V)
              if (P.state === k) P.runner.end();
              else {
                if (!P.structural) return q(a, P, R), P.runner;
                P.close()
              }
            else {
              var Y = f("join", a, R, P);
              if (Y) {
                if (P.state !== k) return t(a, F ? b : null, x), b = R.event = P.event, x = q(a, P, R), P.runner;
                B(a, R)
              }
            }
          } else B(a, R);
          var Z = R.structural;
          if (Z || (Z = "animate" === R.event && Object.keys(R.options.to || {}).length > 0 || g(R)), !Z) return l(), H(a), y;
          var ba = (P.counter || 0) + 1;
          return R.counter = ba, K(a, j, R), e.$$postDigest(function() {
            var c = M.get(o),
              d = !c;
            c = c || {};
            var e = a.parent() || [],
              f = e.length > 0 && ("animate" === c.event || c.structural || g(c));
            if (d || c.counter !== ba || !f) return d && ($(a, x), n(a, x)), (d || F && c.event !== b) && (x.domOperation(), y.end()), void(f || H(a));
            b = !c.structural && g(c, !0) ? "setClass" : c.event, K(a, k);
            var h = v(a, b, c.options);
            y.setHost(h), i(y, b, "start", {}), h.done(function(c) {
              l(!c);
              var d = M.get(o);
              d && d.counter === ba && H(s(a)), i(y, b, "close", {})
            })
          }), y
        }

        function G(a) {
          var b = s(a),
            c = b.querySelectorAll("[" + Ca + "]");
          W(c, function(a) {
            var b = parseInt(a.getAttribute(Ca)),
              c = M.get(a);
            if (c) switch (b) {
              case k:
                c.runner.end();
              case j:
                M.remove(a)
            }
          })
        }

        function H(a) {
          var b = s(a);
          b.removeAttribute(Ca), M.remove(b)
        }

        function I(a, b) {
          return s(a) === s(b)
        }

        function J(a, b, c) {
          var d, e = ca(p[0].body),
            f = I(a, e) || "HTML" === a[0].nodeName,
            g = I(a, o),
            h = !1,
            i = N.get(s(a)),
            j = ca.data(a[0], Da);
          for (j && (b = j), b = s(b); b && (g || (g = I(b, o)), b.nodeType === L);) {
            var k = M.get(b) || {};
            if (!h) {
              var l = N.get(b);
              if (l === !0 && i !== !1) {
                i = !0;
                break
              }
              l === !1 && (i = !1), h = k.structural
            }
            if (ba(d) || d === !0) {
              var m = ca.data(b, S);
              Y(m) && (d = m)
            }
            if (h && d === !1) break;
            if (f || (f = I(b, e)), f && g) break;
            b = g || !(j = ca.data(b, Da)) ? b.parentNode : s(j)
          }
          var n = (!h || d) && i !== !0;
          return n && g && f
        }

        function K(a, b, c) {
          c = c || {}, c.state = b;
          var d = s(a);
          d.setAttribute(Ca, b);
          var e = M.get(d),
            f = e ? V(e, c) : c;
          M.put(d, f)
        }
        var M = new r,
          N = new r,
          O = null,
          P = e.$watch(function() {
            return 0 === x.totalPendingRequests
          }, function(a) {
            a && (P(), e.$$postDigest(function() {
              e.$$postDigest(function() {
                null === O && (O = !0)
              })
            }))
          }),
          Q = Object.create(null),
          R = b.classNameFilter(),
          T = R ? function(a) {
            return R.test(a)
          } : function() {
            return !0
          },
          $ = l(y),
          da = a.Node.prototype.contains || function(a) {
            return this === a || !!(16 & this.compareDocumentPosition(a))
          },
          ea = {
            on: function(a, b, c) {
              var d = i(b);
              Q[a] = Q[a] || [], Q[a].push({
                node: d,
                callback: c
              }), ca(b).on("$destroy", function() {
                var e = M.get(d);
                e || ea.off(a, b, c)
              })
            },
            off: function(a, b, c) {
              if (1 !== arguments.length || aa(arguments[0])) {
                var d = Q[a];
                d && (Q[a] = 1 === arguments.length ? null : D(d, b, c))
              } else {
                b = arguments[0];
                for (var e in Q) Q[e] = D(Q[e], b)
              }
            },
            pin: function(a, b) {
              c(Z(a), "element", "not an element"), c(Z(b), "parentElement", "not an element"), a.data(Da, b)
            },
            push: function(a, b, c, d) {
              return c = c || {}, c.domOperation = d, F(a, b, c)
            },
            enabled: function(a, b) {
              var c = arguments.length;
              if (0 === c) b = !!O;
              else {
                var d = Z(a);
                if (d) {
                  var e = s(a);
                  1 === c ? b = !N.get(e) : N.put(e, !b)
                } else b = O = !!a
              }
              return b
            }
          };
        return ea
      }]
    }],
    Fa = ["$animateProvider", function(a) {
      function b(a, b) {
        a.data(h, b)
      }

      function c(a) {
        a.removeData(h)
      }

      function e(a) {
        return a.data(h)
      }
      var f = "ng-animate-ref",
        g = this.drivers = [],
        h = "$$animationRunner";
      this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$HashMap", "$$rAFScheduler", function(a, h, i, j, k, o) {
        function p(a) {
          function b(a) {
            if (a.processed) return a;
            a.processed = !0;
            var c = a.domNode,
              d = c.parentNode;
            f.put(c, a);
            for (var g; d;) {
              if (g = f.get(d)) {
                g.processed || (g = b(g));
                break
              }
              d = d.parentNode
            }
            return (g || e).children.push(a), a
          }

          function c(a) {
            var b, c = [],
              d = [];
            for (b = 0; b < a.children.length; b++) d.push(a.children[b]);
            var e = d.length,
              f = 0,
              g = [];
            for (b = 0; b < d.length; b++) {
              var h = d[b];
              0 >= e && (e = f, f = 0, c.push(g), g = []), g.push(h.fn), h.children.forEach(function(a) {
                f++, d.push(a)
              }), e--
            }
            return g.length && c.push(g), c
          }
          var d, e = {
              children: []
            },
            f = new k;
          for (d = 0; d < a.length; d++) {
            var g = a[d];
            f.put(g.domNode, a[d] = {
              domNode: g.domNode,
              fn: g.fn,
              children: []
            })
          }
          for (d = 0; d < a.length; d++) b(a[d]);
          return c(e)
        }
        var q = [],
          r = l(a);
        return function(k, l, t) {
          function u(a) {
            var b = "[" + f + "]",
              c = a.hasAttribute(f) ? [a] : a.querySelectorAll(b),
              d = [];
            return W(c, function(a) {
              var b = a.getAttribute(f);
              b && b.length && d.push(a)
            }), d
          }

          function v(a) {
            var b = [],
              c = {};
            W(a, function(a, d) {
              var e = a.element,
                g = s(e),
                h = a.event,
                i = ["enter", "move"].indexOf(h) >= 0,
                j = a.structural ? u(g) : [];
              if (j.length) {
                var k = i ? "to" : "from";
                W(j, function(a) {
                  var b = a.getAttribute(f);
                  c[b] = c[b] || {}, c[b][k] = {
                    animationID: d,
                    element: ca(a)
                  }
                })
              } else b.push(a)
            });
            var d = {},
              e = {};
            return W(c, function(c, f) {
              var g = c.from,
                h = c.to;
              if (!g || !h) {
                var i = g ? g.animationID : h.animationID,
                  j = i.toString();
                return void(d[j] || (d[j] = !0, b.push(a[i])))
              }
              var k = a[g.animationID],
                l = a[h.animationID],
                m = g.animationID.toString();
              if (!e[m]) {
                var n = e[m] = {
                  structural: !0,
                  beforeStart: function() {
                    k.beforeStart(), l.beforeStart()
                  },
                  close: function() {
                    k.close(), l.close()
                  },
                  classes: w(k.classes, l.classes),
                  from: k,
                  to: l,
                  anchors: []
                };
                n.classes.length ? b.push(n) : (b.push(k), b.push(l))
              }
              e[m].anchors.push({
                out: g.element,
                "in": h.element
              })
            }), b
          }

          function w(a, b) {
            a = a.split(" "), b = b.split(" ");
            for (var c = [], d = 0; d < a.length; d++) {
              var e = a[d];
              if ("ng-" !== e.substring(0, 3))
                for (var f = 0; f < b.length; f++)
                  if (e === b[f]) {
                    c.push(e);
                    break
                  }
            }
            return c.join(" ")
          }

          function x(a) {
            for (var b = g.length - 1; b >= 0; b--) {
              var c = g[b],
                d = i.get(c),
                e = d(a);
              if (e) return e
            }
          }

          function y() {
            k.addClass(R), F && a.addClass(k, F), G && (a.removeClass(k, G), G = null)
          }

          function z(a, b) {
            function c(a) {
              var c = e(a);
              c && c.setHost(b)
            }
            a.from && a.to ? (c(a.from.element), c(a.to.element)) : c(a.element)
          }

          function A() {
            var a = e(k);
            !a || "leave" === l && t.$$domOperationFired || a.end()
          }

          function B(b) {
            k.off("$destroy", A), c(k), r(k, t), n(k, t), t.domOperation(), F && a.removeClass(k, F), k.removeClass(R), D.complete(!b)
          }
          t = m(t);
          var C = ["enter", "move", "leave"].indexOf(l) >= 0,
            D = new j({
              end: function() {
                B()
              },
              cancel: function() {
                B(!0)
              }
            });
          if (!g.length) return B(), D;
          b(k, D);
          var E = d(k.attr("class"), d(t.addClass, t.removeClass)),
            F = t.tempClasses;
          F && (E += " " + F, t.tempClasses = null);
          var G;
          return C && (G = "ng-" + l + Q, a.addClass(k, G)), q.push({
            element: k,
            classes: E,
            event: l,
            structural: C,
            options: t,
            beforeStart: y,
            close: B
          }), k.on("$destroy", A), q.length > 1 ? D : (h.$$postDigest(function() {
            var a = [];
            W(q, function(b) {
              e(b.element) ? a.push(b) : b.close()
            }), q.length = 0;
            var b = v(a),
              c = [];
            W(b, function(a) {
              c.push({
                domNode: s(a.from ? a.from.element : a.element),
                fn: function() {
                  a.beforeStart();
                  var b, c = a.close,
                    d = a.anchors ? a.from.element || a.to.element : a.element;
                  if (e(d)) {
                    var f = x(a);
                    f && (b = f.start)
                  }
                  if (b) {
                    var g = b();
                    g.done(function(a) {
                      c(!a)
                    }), z(a, g)
                  } else c()
                }
              })
            }), o(p(c))
          }), D)
        }
      }]
    }],
    Ga = ["$animate", "$rootScope", function(a, b) {
      return {
        restrict: "A",
        transclude: "element",
        terminal: !0,
        priority: 600,
        link: function(b, c, d, e, f) {
          var g, h;
          b.$watchCollection(d.ngAnimateSwap || d["for"], function(d) {
            g && a.leave(g), h && (h.$destroy(), h = null), (d || 0 === d) && (h = b.$new(), f(h, function(b) {
              g = b, a.enter(b, null, c)
            }))
          })
        }
      }
    }];
  b.module("ngAnimate", [], function() {
    da = b.noop, U = b.copy, V = b.extend, ca = b.element, W = b.forEach, X = b.isArray, aa = b.isString, _ = b.isObject, ba = b.isUndefined, Y = b.isDefined, $ = b.isFunction, Z = b.isElement
  }).directive("ngAnimateSwap", Ga).directive("ngAnimateChildren", ra).factory("$$rAFScheduler", qa).provider("$$animateQueue", Ea).provider("$$animation", Fa).provider("$animateCss", ya).provider("$$animateCssDriver", za).provider("$$animateJs", Aa).provider("$$animateJsDriver", Ba)
}(window, window.angular),
function(a, b) {
  "use strict";

  function c(a, c, d) {
    function e(a, d, e) {
      var g, h;
      e = e || {}, h = e.expires, g = b.isDefined(e.path) ? e.path : f, b.isUndefined(d) && (h = "Thu, 01 Jan 1970 00:00:00 GMT", d = ""), b.isString(h) && (h = new Date(h));
      var i = encodeURIComponent(a) + "=" + encodeURIComponent(d);
      i += g ? ";path=" + g : "", i += e.domain ? ";domain=" + e.domain : "", i += h ? ";expires=" + h.toUTCString() : "", i += e.secure ? ";secure" : "";
      var j = i.length + 1;
      return j > 4096 && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + j + " > 4096 bytes)!"), i
    }
    var f = d.baseHref(),
      g = a[0];
    return function(a, b, c) {
      g.cookie = e(a, b, c)
    }
  }
  b.module("ngCookies", ["ng"]).provider("$cookies", [function() {
    function a(a) {
      return a ? b.extend({}, c, a) : c
    }
    var c = this.defaults = {};
    this.$get = ["$$cookieReader", "$$cookieWriter", function(c, d) {
      return {
        get: function(a) {
          return c()[a]
        },
        getObject: function(a) {
          var c = this.get(a);
          return c ? b.fromJson(c) : c
        },
        getAll: function() {
          return c()
        },
        put: function(b, c, e) {
          d(b, c, a(e))
        },
        putObject: function(a, c, d) {
          this.put(a, b.toJson(c), d)
        },
        remove: function(b, c) {
          d(b, void 0, a(c))
        }
      }
    }]
  }]), b.module("ngCookies").factory("$cookieStore", ["$cookies", function(a) {
    return {
      get: function(b) {
        return a.getObject(b)
      },
      put: function(b, c) {
        a.putObject(b, c);
      },
      remove: function(b) {
        a.remove(b)
      }
    }
  }]), c.$inject = ["$document", "$log", "$browser"], b.module("ngCookies").provider("$$cookieWriter", function() {
    this.$get = c
  })
}(window, window.angular),
function(a, b) {
  "use strict";

  function c(a) {
    return null != a && "" !== a && "hasOwnProperty" !== a && g.test("." + a)
  }

  function d(a, d) {
    if (!c(d)) throw f("badmember", 'Dotted member path "@{0}" is invalid.', d);
    for (var e = d.split("."), g = 0, h = e.length; h > g && b.isDefined(a); g++) {
      var i = e[g];
      a = null !== a ? a[i] : void 0
    }
    return a
  }

  function e(a, c) {
    c = c || {}, b.forEach(c, function(a, b) {
      delete c[b]
    });
    for (var d in a) !a.hasOwnProperty(d) || "$" === d.charAt(0) && "$" === d.charAt(1) || (c[d] = a[d]);
    return c
  }
  var f = b.$$minErr("$resource"),
    g = /^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;
  b.module("ngResource", ["ng"]).provider("$resource", function() {
    var a = /^https?:\/\/[^\/]*/,
      c = this;
    this.defaults = {
      stripTrailingSlashes: !0,
      cancellable: !1,
      actions: {
        get: {
          method: "GET"
        },
        save: {
          method: "POST"
        },
        query: {
          method: "GET",
          isArray: !0
        },
        remove: {
          method: "DELETE"
        },
        "delete": {
          method: "DELETE"
        }
      }
    }, this.$get = ["$http", "$log", "$q", "$timeout", function(g, h, i, j) {
      function k(a) {
        return l(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
      }

      function l(a, b) {
        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+")
      }

      function m(a, b) {
        this.template = a, this.defaults = q({}, c.defaults, b), this.urlParams = {}
      }

      function n(a, k, l, t) {
        function u(a, b) {
          var c = {};
          return b = q({}, k, b), p(b, function(b, e) {
            s(b) && (b = b(a)), c[e] = b && b.charAt && "@" == b.charAt(0) ? d(a, b.substr(1)) : b
          }), c
        }

        function v(a) {
          return a.resource
        }

        function w(a) {
          e(a || {}, this)
        }
        var x = new m(a, t);
        return l = q({}, c.defaults.actions, l), w.prototype.toJSON = function() {
          var a = q({}, this);
          return delete a.$promise, delete a.$resolved, a
        }, p(l, function(a, d) {
          var k = /^(POST|PUT|PATCH)$/i.test(a.method),
            l = a.timeout,
            m = b.isDefined(a.cancellable) ? a.cancellable : t && b.isDefined(t.cancellable) ? t.cancellable : c.defaults.cancellable;
          l && !b.isNumber(l) && (h.debug("ngResource:\n  Only numeric values are allowed as `timeout`.\n  Promises are not supported in $resource, because the same value would be used for multiple requests. If you are looking for a way to cancel requests, you should use the `cancellable` option."), delete a.timeout, l = null), w[d] = function(c, h, n, t) {
            var y, z, A, B = {};
            switch (arguments.length) {
              case 4:
                A = t, z = n;
              case 3:
              case 2:
                if (!s(h)) {
                  B = c, y = h, z = n;
                  break
                }
                if (s(c)) {
                  z = c, A = h;
                  break
                }
                z = h, A = n;
              case 1:
                s(c) ? z = c : k ? y = c : B = c;
                break;
              case 0:
                break;
              default:
                throw f("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length)
            }
            var C, D, E = this instanceof w,
              F = E ? y : a.isArray ? [] : new w(y),
              G = {},
              H = a.interceptor && a.interceptor.response || v,
              I = a.interceptor && a.interceptor.responseError || void 0;
            p(a, function(a, b) {
              switch (b) {
                default: G[b] = r(a);
                break;
                case "params":
                    case "isArray":
                    case "interceptor":
                    case "cancellable":
              }
            }), !E && m && (C = i.defer(), G.timeout = C.promise, l && (D = j(C.resolve, l))), k && (G.data = y), x.setUrlParams(G, q({}, u(y, a.params || {}), B), a.url);
            var J = g(G).then(function(c) {
              var g = c.data;
              if (g) {
                if (b.isArray(g) !== !!a.isArray) throw f("badcfg", "Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2} (Request: {3} {4})", d, a.isArray ? "array" : "object", b.isArray(g) ? "array" : "object", G.method, G.url);
                if (a.isArray) F.length = 0, p(g, function(a) {
                  "object" == typeof a ? F.push(new w(a)) : F.push(a)
                });
                else {
                  var h = F.$promise;
                  e(g, F), F.$promise = h
                }
              }
              return c.resource = F, c
            }, function(a) {
              return (A || o)(a), i.reject(a)
            });
            return J["finally"](function() {
              F.$resolved = !0, !E && m && (F.$cancelRequest = b.noop, j.cancel(D), C = D = G.timeout = null)
            }), J = J.then(function(a) {
              var b = H(a);
              return (z || o)(b, a.headers), b
            }, I), E ? J : (F.$promise = J, F.$resolved = !1, m && (F.$cancelRequest = C.resolve), F)
          }, w.prototype["$" + d] = function(a, b, c) {
            s(a) && (c = b, b = a, a = {});
            var e = w[d].call(this, a, this, b, c);
            return e.$promise || e
          }
        }), w.bind = function(b) {
          return n(a, q({}, k, b), l)
        }, w
      }
      var o = b.noop,
        p = b.forEach,
        q = b.extend,
        r = b.copy,
        s = b.isFunction;
      return m.prototype = {
        setUrlParams: function(c, d, e) {
          var g, h, i = this,
            j = e || i.template,
            m = "",
            n = i.urlParams = {};
          p(j.split(/\W/), function(a) {
            if ("hasOwnProperty" === a) throw f("badname", "hasOwnProperty is not a valid parameter name.");
            !new RegExp("^\\d+$").test(a) && a && new RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(j) && (n[a] = {
              isQueryParamValue: new RegExp("\\?.*=:" + a + "(?:\\W|$)").test(j)
            })
          }), j = j.replace(/\\:/g, ":"), j = j.replace(a, function(a) {
            return m = a, ""
          }), d = d || {}, p(i.urlParams, function(a, c) {
            g = d.hasOwnProperty(c) ? d[c] : i.defaults[c], b.isDefined(g) && null !== g ? (h = a.isQueryParamValue ? l(g, !0) : k(g), j = j.replace(new RegExp(":" + c + "(\\W|$)", "g"), function(a, b) {
              return h + b
            })) : j = j.replace(new RegExp("(/?):" + c + "(\\W|$)", "g"), function(a, b, c) {
              return "/" == c.charAt(0) ? c : b + c
            })
          }), i.defaults.stripTrailingSlashes && (j = j.replace(/\/+$/, "") || "/"), j = j.replace(/\/\.(?=\w+($|\?))/, "."), c.url = m + j.replace(/\/\\\./, "/."), p(d, function(a, b) {
            i.urlParams[b] || (c.params = c.params || {}, c.params[b] = a)
          })
        }
      }, n
    }]
  })
}(window, window.angular),
function(a, b) {
  "use strict";

  function c(a, b) {
    if (h(a)) {
      b = b || [];
      for (var c = 0, d = a.length; d > c; c++) b[c] = a[c]
    } else if (i(a)) {
      b = b || {};
      for (var e in a)("$" !== e.charAt(0) || "$" !== e.charAt(1)) && (b[e] = a[e])
    }
    return b || a
  }

  function d() {
    function a(a, c) {
      return b.extend(Object.create(a), c)
    }

    function d(a, b) {
      var c = b.caseInsensitiveMatch,
        d = {
          originalPath: a,
          regexp: a
        },
        e = d.keys = [];
      return a = a.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)(\*\?|[\?\*])?/g, function(a, b, c, d) {
        var f = "?" === d || "*?" === d ? "?" : null,
          g = "*" === d || "*?" === d ? "*" : null;
        return e.push({
          name: c,
          optional: !!f
        }), b = b || "", "" + (f ? "" : b) + "(?:" + (f ? b : "") + (g && "(.+?)" || "([^/]+)") + (f || "") + ")" + (f || "")
      }).replace(/([\/$\*])/g, "\\$1"), d.regexp = new RegExp("^" + a + "$", c ? "i" : ""), d
    }
    h = b.isArray, i = b.isObject;
    var e = {};
    this.when = function(a, f) {
      var g = c(f);
      if (b.isUndefined(g.reloadOnSearch) && (g.reloadOnSearch = !0), b.isUndefined(g.caseInsensitiveMatch) && (g.caseInsensitiveMatch = this.caseInsensitiveMatch), e[a] = b.extend(g, a && d(a, g)), a) {
        var h = "/" == a[a.length - 1] ? a.substr(0, a.length - 1) : a + "/";
        e[h] = b.extend({
          redirectTo: a
        }, d(h, g))
      }
      return this
    }, this.caseInsensitiveMatch = !1, this.otherwise = function(a) {
      return "string" == typeof a && (a = {
        redirectTo: a
      }), this.when(null, a), this
    }, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", function(c, d, f, g, h, i, j) {
      function l(a, b) {
        var c = b.keys,
          d = {};
        if (!b.regexp) return null;
        var e = b.regexp.exec(a);
        if (!e) return null;
        for (var f = 1, g = e.length; g > f; ++f) {
          var h = c[f - 1],
            i = e[f];
          h && i && (d[h.name] = i)
        }
        return d
      }

      function m(a) {
        var d = v.current;
        s = q(), t = s && d && s.$$route === d.$$route && b.equals(s.pathParams, d.pathParams) && !s.reloadOnSearch && !u, t || !d && !s || c.$broadcast("$routeChangeStart", s, d).defaultPrevented && a && a.preventDefault()
      }

      function n() {
        var a = v.current,
          e = s;
        t ? (a.params = e.params, b.copy(a.params, f), c.$broadcast("$routeUpdate", a)) : (e || a) && (u = !1, v.current = e, e && e.redirectTo && (b.isString(e.redirectTo) ? d.path(r(e.redirectTo, e.params)).search(e.params).replace() : d.url(e.redirectTo(e.pathParams, d.path(), d.search())).replace()), g.when(e).then(o).then(function(d) {
          e == v.current && (e && (e.locals = d, b.copy(e.params, f)), c.$broadcast("$routeChangeSuccess", e, a))
        }, function(b) {
          e == v.current && c.$broadcast("$routeChangeError", e, a, b)
        }))
      }

      function o(a) {
        if (a) {
          var c = b.extend({}, a.resolve);
          b.forEach(c, function(a, d) {
            c[d] = b.isString(a) ? h.get(a) : h.invoke(a, null, null, d)
          });
          var d = p(a);
          return b.isDefined(d) && (c.$template = d), g.all(c)
        }
      }

      function p(a) {
        var c, d;
        return b.isDefined(c = a.template) ? b.isFunction(c) && (c = c(a.params)) : b.isDefined(d = a.templateUrl) && (b.isFunction(d) && (d = d(a.params)), b.isDefined(d) && (a.loadedTemplateUrl = j.valueOf(d), c = i(d))), c
      }

      function q() {
        var c, f;
        return b.forEach(e, function(e, g) {
          !f && (c = l(d.path(), e)) && (f = a(e, {
            params: b.extend({}, d.search(), c),
            pathParams: c
          }), f.$$route = e)
        }), f || e[null] && a(e[null], {
          params: {},
          pathParams: {}
        })
      }

      function r(a, c) {
        var d = [];
        return b.forEach((a || "").split(":"), function(a, b) {
          if (0 === b) d.push(a);
          else {
            var e = a.match(/(\w+)(?:[?*])?(.*)/),
              f = e[1];
            d.push(c[f]), d.push(e[2] || ""), delete c[f]
          }
        }), d.join("")
      }
      var s, t, u = !1,
        v = {
          routes: e,
          reload: function() {
            u = !0;
            var a = {
              defaultPrevented: !1,
              preventDefault: function() {
                this.defaultPrevented = !0, u = !1
              }
            };
            c.$evalAsync(function() {
              m(a), a.defaultPrevented || n()
            })
          },
          updateParams: function(a) {
            if (!this.current || !this.current.$$route) throw k("norout", "Tried updating route when with no current route");
            a = b.extend({}, this.current.params, a), d.path(r(this.current.$$route.originalPath, a)), d.search(a)
          }
        };
      return c.$on("$locationChangeStart", m), c.$on("$locationChangeSuccess", n), v
    }]
  }

  function e() {
    this.$get = function() {
      return {}
    }
  }

  function f(a, c, d) {
    return {
      restrict: "ECA",
      terminal: !0,
      priority: 400,
      transclude: "element",
      link: function(e, f, g, h, i) {
        function j() {
          n && (d.cancel(n), n = null), l && (l.$destroy(), l = null), m && (n = d.leave(m), n.then(function() {
            n = null
          }), m = null)
        }

        function k() {
          var g = a.current && a.current.locals,
            h = g && g.$template;
          if (b.isDefined(h)) {
            var k = e.$new(),
              n = a.current,
              q = i(k, function(a) {
                d.enter(a, null, m || f).then(function() {
                  !b.isDefined(o) || o && !e.$eval(o) || c()
                }), j()
              });
            m = q, l = n.scope = k, l.$emit("$viewContentLoaded"), l.$eval(p)
          } else j()
        }
        var l, m, n, o = g.autoscroll,
          p = g.onload || "";
        e.$on("$routeChangeSuccess", k), k()
      }
    }
  }

  function g(a, b, c) {
    return {
      restrict: "ECA",
      priority: -400,
      link: function(d, e) {
        var f = c.current,
          g = f.locals;
        e.html(g.$template);
        var h = a(e.contents());
        if (f.controller) {
          g.$scope = d;
          var i = b(f.controller, g);
          f.controllerAs && (d[f.controllerAs] = i), e.data("$ngControllerController", i), e.children().data("$ngControllerController", i)
        }
        d[f.resolveAs || "$resolve"] = g, h(d)
      }
    }
  }
  var h, i, j = b.module("ngRoute", ["ng"]).provider("$route", d),
    k = b.$$minErr("ngRoute");
  j.provider("$routeParams", e), j.directive("ngView", f), j.directive("ngView", g), f.$inject = ["$route", "$anchorScroll", "$animate"], g.$inject = ["$compile", "$controller", "$route"]
}(window, window.angular),
function(a, b) {
  "use strict";

  function c() {
    function c(a, b) {
      var c, d = {},
        e = a.split(",");
      for (c = 0; c < e.length; c++) d[b ? i(e[c]) : e[c]] = !0;
      return d
    }

    function d(b, c) {
      null === b || void 0 === b ? b = "" : "string" != typeof b && (b = "" + b), s.innerHTML = b;
      var d = 5;
      do {
        if (0 === d) throw m("uinput", "Failed to sanitize html because the input is unstable");
        d--, a.document.documentMode && q(s), b = s.innerHTML, s.innerHTML = b
      } while (b !== s.innerHTML);
      for (var e = s.firstChild; e;) {
        switch (e.nodeType) {
          case 1:
            c.start(e.nodeName.toLowerCase(), n(e.attributes));
            break;
          case 3:
            c.chars(e.textContent)
        }
        var f;
        if (!(f = e.firstChild) && (1 == e.nodeType && c.end(e.nodeName.toLowerCase()), f = e.nextSibling, !f))
          for (; null == f && (e = e.parentNode, e !== s);) f = e.nextSibling, 1 == e.nodeType && c.end(e.nodeName.toLowerCase());
        e = f
      }
      for (; e = s.firstChild;) s.removeChild(e)
    }

    function n(a) {
      for (var b = {}, c = 0, d = a.length; d > c; c++) {
        var e = a[c];
        b[e.name] = e.value
      }
      return b
    }

    function o(a) {
      return a.replace(/&/g, "&amp;").replace(t, function(a) {
        var b = a.charCodeAt(0),
          c = a.charCodeAt(1);
        return "&#" + (1024 * (b - 55296) + (c - 56320) + 65536) + ";"
      }).replace(u, function(a) {
        return "&#" + a.charCodeAt(0) + ";"
      }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function p(a, b) {
      var c = !1,
        d = e(a, a.push);
      return {
        start: function(a, e) {
          a = i(a), !c && C[a] && (c = a), c || D[a] !== !0 || (d("<"), d(a), g(e, function(c, e) {
            var f = i(e),
              g = "img" === a && "src" === f || "background" === f;
            H[f] !== !0 || E[f] === !0 && !b(c, g) || (d(" "), d(e), d('="'), d(o(c)), d('"'))
          }), d(">"))
        },
        end: function(a) {
          a = i(a), c || D[a] !== !0 || v[a] === !0 || (d("</"), d(a), d(">")), a == c && (c = !1)
        },
        chars: function(a) {
          c || d(o(a))
        }
      }
    }

    function q(b) {
      if (b.nodeType === a.Node.ELEMENT_NODE)
        for (var c = b.attributes, d = 0, e = c.length; e > d; d++) {
          var f = c[d],
            g = f.name.toLowerCase();
          ("xmlns:ns1" === g || 0 === g.lastIndexOf("ns1:", 0)) && (b.removeAttributeNode(f), d--, e--)
        }
      var h = b.firstChild;
      h && q(h), h = b.nextSibling, h && q(h)
    }
    var r = !1;
    this.$get = ["$$sanitizeUri", function(a) {
      return r && f(D, B),
        function(b) {
          var c = [];
          return k(b, l(c, function(b, c) {
            return !/^unsafe:/.test(a(b, c))
          })), c.join("")
        }
    }], this.enableSvg = function(a) {
      return h(a) ? (r = a, this) : r
    }, e = b.bind, f = b.extend, g = b.forEach, h = b.isDefined, i = b.lowercase, j = b.noop, k = d, l = p;
    var s, t = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      u = /([^\#-~ |!])/g,
      v = c("area,br,col,hr,img,wbr"),
      w = c("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
      x = c("rp,rt"),
      y = f({}, x, w),
      z = f({}, w, c("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul")),
      A = f({}, x, c("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
      B = c("circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,stop,svg,switch,text,title,tspan"),
      C = c("script,style"),
      D = f({}, v, z, A, y),
      E = c("background,cite,href,longdesc,src,xlink:href"),
      F = c("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,valign,value,vspace,width"),
      G = c("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan", !0),
      H = f({}, E, G, F);
    ! function(a) {
      var b;
      if (!a.document || !a.document.implementation) throw m("noinert", "Can't create an inert html document");
      b = a.document.implementation.createHTMLDocument("inert");
      var c = b.documentElement || b.getDocumentElement(),
        d = c.getElementsByTagName("body");
      if (1 === d.length) s = d[0];
      else {
        var e = b.createElement("html");
        s = b.createElement("body"), e.appendChild(s), b.appendChild(e)
      }
    }(a)
  }

  function d(a) {
    var b = [],
      c = l(b, j);
    return c.chars(a), b.join("")
  }
  var e, f, g, h, i, j, k, l, m = b.$$minErr("$sanitize");
  b.module("ngSanitize", []).provider("$sanitize", c), b.module("ngSanitize").filter("linky", ["$sanitize", function(a) {
    var c = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/i,
      e = /^mailto:/i,
      f = b.$$minErr("linky"),
      g = b.isDefined,
      h = b.isFunction,
      i = b.isObject,
      j = b.isString;
    return function(b, k, l) {
      function m(a) {
        a && t.push(d(a))
      }

      function n(a, b) {
        var c, d = r(a);
        t.push("<a ");
        for (c in d) t.push(c + '="' + d[c] + '" ');
        !g(k) || "target" in d || t.push('target="', k, '" '), t.push('href="', a.replace(/"/g, "&quot;"), '">'), m(b), t.push("</a>")
      }
      if (null == b || "" === b) return b;
      if (!j(b)) throw f("notstring", "Expected string but received: {0}", b);
      for (var o, p, q, r = h(l) ? l : i(l) ? function() {
          return l
        } : function() {
          return {}
        }, s = b, t = []; o = s.match(c);) p = o[0], o[2] || o[4] || (p = (o[3] ? "http://" : "mailto:") + p), q = o.index, m(s.substr(0, q)), n(p, o[0].replace(e, "")), s = s.substring(q + o[0].length);
      return m(s), a(t.join(""))
    }
  }])
}(window, window.angular),
function(a, b) {
  "use strict";

  function c(a) {
    return b.lowercase(a.nodeName || a[0] && a[0].nodeName)
  }

  function d(a, c) {
    var d = !1,
      e = !1;
    this.ngClickOverrideEnabled = function(f) {
      return b.isDefined(f) ? (f && !e && (e = !0, g.$$moduleName = "ngTouch", c.directive("ngClick", g), a.decorator("ngClickDirective", ["$delegate", function(a) {
        if (d) a.shift();
        else
          for (var b = a.length - 1; b >= 0;) {
            if ("ngTouch" === a[b].$$moduleName) {
              a.splice(b, 1);
              break
            }
            b--
          }
        return a
      }])), d = f, this) : d
    }, this.$get = function() {
      return {
        ngClickOverrideEnabled: function() {
          return d
        }
      }
    }
  }

  function e(a, c, d) {
    f.directive(a, ["$parse", "$swipe", function(e, f) {
      var g = 75,
        h = .3,
        i = 30;
      return function(j, k, l) {
        function m(a) {
          if (!n) return !1;
          var b = Math.abs(a.y - n.y),
            d = (a.x - n.x) * c;
          return o && g > b && d > 0 && d > i && h > b / d
        }
        var n, o, p = e(l[a]),
          q = ["touch"];
        b.isDefined(l.ngSwipeDisableMouse) || q.push("mouse"), f.bind(k, {
          start: function(a, b) {
            n = a, o = !0
          },
          cancel: function(a) {
            o = !1
          },
          end: function(a, b) {
            m(a) && j.$apply(function() {
              k.triggerHandler(d), p(j, {
                $event: b
              })
            })
          }
        }, q)
      }
    }])
  }
  var f = b.module("ngTouch", []);
  f.provider("$touch", d), d.$inject = ["$provide", "$compileProvider"], f.factory("$swipe", [function() {
    function a(a) {
      var b = a.originalEvent || a,
        c = b.touches && b.touches.length ? b.touches : [b],
        d = b.changedTouches && b.changedTouches[0] || c[0];
      return {
        x: d.clientX,
        y: d.clientY
      }
    }

    function c(a, c) {
      var d = [];
      return b.forEach(a, function(a) {
        var b = e[a][c];
        b && d.push(b)
      }), d.join(" ")
    }
    var d = 10,
      e = {
        mouse: {
          start: "mousedown",
          move: "mousemove",
          end: "mouseup"
        },
        touch: {
          start: "touchstart",
          move: "touchmove",
          end: "touchend",
          cancel: "touchcancel"
        },
        pointer: {
          start: "pointerdown",
          move: "pointermove",
          end: "pointerup",
          cancel: "pointercancel"
        }
      };
    return {
      bind: function(b, e, f) {
        var g, h, i, j, k = !1;
        f = f || ["mouse", "touch", "pointer"], b.on(c(f, "start"), function(b) {
          i = a(b), k = !0, g = 0, h = 0, j = i, e.start && e.start(i, b)
        });
        var l = c(f, "cancel");
        l && b.on(l, function(a) {
          k = !1, e.cancel && e.cancel(a)
        }), b.on(c(f, "move"), function(b) {
          if (k && i) {
            var c = a(b);
            if (g += Math.abs(c.x - j.x), h += Math.abs(c.y - j.y), j = c, !(d > g && d > h)) return h > g ? (k = !1, void(e.cancel && e.cancel(b))) : (b.preventDefault(), void(e.move && e.move(c, b)))
          }
        }), b.on(c(f, "end"), function(b) {
          k && (k = !1, e.end && e.end(a(b), b))
        })
      }
    }
  }]);
  var g = ["$parse", "$timeout", "$rootElement", function(a, d, e) {
    function f(a, b, c, d) {
      return Math.abs(a - c) < q && Math.abs(b - d) < q
    }

    function g(a, b, c) {
      for (var d = 0; d < a.length; d += 2)
        if (f(a[d], a[d + 1], b, c)) return a.splice(d, d + 2), !0;
      return !1
    }

    function h(a) {
      if (!(Date.now() - k > p)) {
        var b = a.touches && a.touches.length ? a.touches : [a],
          d = b[0].clientX,
          e = b[0].clientY;
        1 > d && 1 > e || m && m[0] === d && m[1] === e || (m && (m = null), "label" === c(a.target) && (m = [d, e]), g(l, d, e) || (a.stopPropagation(), a.preventDefault(), a.target && a.target.blur && a.target.blur()))
      }
    }

    function i(a) {
      var b = a.touches && a.touches.length ? a.touches : [a],
        c = b[0].clientX,
        e = b[0].clientY;
      l.push(c, e), d(function() {
        for (var a = 0; a < l.length; a += 2)
          if (l[a] == c && l[a + 1] == e) return void l.splice(a, a + 2)
      }, p, !1)
    }

    function j(a, b) {
      l || (e[0].addEventListener("click", h, !0), e[0].addEventListener("touchstart", i, !0), l = []), k = Date.now(), g(l, a, b)
    }
    var k, l, m, n = 750,
      o = 12,
      p = 2500,
      q = 25,
      r = "ng-click-active";
    return function(c, d, e) {
      function f() {
        m = !1, d.removeClass(r)
      }
      var g, h, i, k, l = a(e.ngClick),
        m = !1;
      d.on("touchstart", function(a) {
        m = !0, g = a.target ? a.target : a.srcElement, 3 == g.nodeType && (g = g.parentNode), d.addClass(r), h = Date.now();
        var b = a.originalEvent || a,
          c = b.touches && b.touches.length ? b.touches : [b],
          e = c[0];
        i = e.clientX, k = e.clientY
      }), d.on("touchcancel", function(a) {
        f()
      }), d.on("touchend", function(a) {
        var c = Date.now() - h,
          l = a.originalEvent || a,
          p = l.changedTouches && l.changedTouches.length ? l.changedTouches : l.touches && l.touches.length ? l.touches : [l],
          q = p[0],
          r = q.clientX,
          s = q.clientY,
          t = Math.sqrt(Math.pow(r - i, 2) + Math.pow(s - k, 2));
        m && n > c && o > t && (j(r, s), g && g.blur(), b.isDefined(e.disabled) && e.disabled !== !1 || d.triggerHandler("click", [a])), f()
      }), d.onclick = function(a) {}, d.on("click", function(a, b) {
        c.$apply(function() {
          l(c, {
            $event: b || a
          })
        })
      }), d.on("mousedown", function(a) {
        d.addClass(r)
      }), d.on("mousemove mouseup", function(a) {
        d.removeClass(r)
      })
    }
  }];
  e("ngSwipeLeft", -1, "swipeleft"), e("ngSwipeRight", 1, "swiperight")
}(window, window.angular);
