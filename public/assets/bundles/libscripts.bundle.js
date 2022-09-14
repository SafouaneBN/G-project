!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document)
                        throw new Error(
                            "jQuery requires a window with a document"
                        );
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (x, e) {
    "use strict";
    function g(e) {
        return null != e && e === e.window;
    }
    var t = [],
        n = Object.getPrototypeOf,
        a = t.slice,
        m = t.flat
            ? function (e) {
                  return t.flat.call(e);
              }
            : function (e) {
                  return t.concat.apply([], e);
              },
        l = t.push,
        r = t.indexOf,
        i = {},
        o = i.toString,
        v = i.hasOwnProperty,
        s = v.toString,
        c = s.call(Object),
        y = {},
        b = function (e) {
            return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
            );
        },
        E = x.document,
        u = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function _(e, t, n) {
        var i,
            r,
            o = (n = n || E).createElement("script");
        if (((o.text = e), t))
            for (i in u)
                (r = t[i] || (t.getAttribute && t.getAttribute(i))) &&
                    o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function p(e) {
        return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? i[o.call(e)] || "object"
            : typeof e;
    }
    var d = "3.6.0",
        T = function (e, t) {
            return new T.fn.init(e, t);
        };
    function f(e) {
        var t = !!e && "length" in e && e.length,
            n = p(e);
        return (
            !b(e) &&
            !g(e) &&
            ("array" === n ||
                0 === t ||
                ("number" == typeof t && 0 < t && t - 1 in e))
        );
    }
    (T.fn = T.prototype =
        {
            jquery: d,
            constructor: T,
            length: 0,
            toArray: function () {
                return a.call(this);
            },
            get: function (e) {
                return null == e
                    ? a.call(this)
                    : e < 0
                    ? this[e + this.length]
                    : this[e];
            },
            pushStack: function (e) {
                e = T.merge(this.constructor(), e);
                return (e.prevObject = this), e;
            },
            each: function (e) {
                return T.each(this, e);
            },
            map: function (n) {
                return this.pushStack(
                    T.map(this, function (e, t) {
                        return n.call(e, t, e);
                    })
                );
            },
            slice: function () {
                return this.pushStack(a.apply(this, arguments));
            },
            first: function () {
                return this.eq(0);
            },
            last: function () {
                return this.eq(-1);
            },
            even: function () {
                return this.pushStack(
                    T.grep(this, function (e, t) {
                        return (t + 1) % 2;
                    })
                );
            },
            odd: function () {
                return this.pushStack(
                    T.grep(this, function (e, t) {
                        return t % 2;
                    })
                );
            },
            eq: function (e) {
                var t = this.length,
                    e = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= e && e < t ? [this[e]] : []);
            },
            end: function () {
                return this.prevObject || this.constructor();
            },
            push: l,
            sort: t.sort,
            splice: t.splice,
        }),
        (T.extend = T.fn.extend =
            function () {
                var e,
                    t,
                    n,
                    i,
                    r,
                    o = arguments[0] || {},
                    s = 1,
                    a = arguments.length,
                    l = !1;
                for (
                    "boolean" == typeof o &&
                        ((l = o), (o = arguments[s] || {}), s++),
                        "object" == typeof o || b(o) || (o = {}),
                        s === a && ((o = this), s--);
                    s < a;
                    s++
                )
                    if (null != (e = arguments[s]))
                        for (t in e)
                            (n = e[t]),
                                "__proto__" !== t &&
                                    o !== n &&
                                    (l &&
                                    n &&
                                    (T.isPlainObject(n) ||
                                        (i = Array.isArray(n)))
                                        ? ((r = o[t]),
                                          (r =
                                              i && !Array.isArray(r)
                                                  ? []
                                                  : i || T.isPlainObject(r)
                                                  ? r
                                                  : {}),
                                          (i = !1),
                                          (o[t] = T.extend(l, r, n)))
                                        : void 0 !== n && (o[t] = n));
                return o;
            }),
        T.extend({
            expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                return (
                    !(!e || "[object Object]" !== o.call(e)) &&
                    (!(e = n(e)) ||
                        ("function" ==
                            typeof (e =
                                v.call(e, "constructor") && e.constructor) &&
                            s.call(e) === c))
                );
            },
            isEmptyObject: function (e) {
                for (var t in e) return !1;
                return !0;
            },
            globalEval: function (e, t, n) {
                _(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
                var n,
                    i = 0;
                if (f(e))
                    for (
                        n = e.length;
                        i < n && !1 !== t.call(e[i], i, e[i]);
                        i++
                    );
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
            },
            makeArray: function (e, t) {
                t = t || [];
                return (
                    null != e &&
                        (f(Object(e))
                            ? T.merge(t, "string" == typeof e ? [e] : e)
                            : l.call(t, e)),
                    t
                );
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : r.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                    e[r++] = t[i];
                return (e.length = r), e;
            },
            grep: function (e, t, n) {
                for (var i = [], r = 0, o = e.length, s = !n; r < o; r++)
                    !t(e[r], r) != s && i.push(e[r]);
                return i;
            },
            map: function (e, t, n) {
                var i,
                    r,
                    o = 0,
                    s = [];
                if (f(e))
                    for (i = e.length; o < i; o++)
                        null != (r = t(e[o], o, n)) && s.push(r);
                else for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
                return m(s);
            },
            guid: 1,
            support: y,
        }),
        "function" == typeof Symbol &&
            (T.fn[Symbol.iterator] = t[Symbol.iterator]),
        T.each(
            "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
            ),
            function (e, t) {
                i["[object " + t + "]"] = t.toLowerCase();
            }
        );
    var h = (function (n) {
        function d(e, t) {
            return (
                (e = "0x" + e.slice(1) - 65536),
                t ||
                    (e < 0
                        ? String.fromCharCode(65536 + e)
                        : String.fromCharCode(
                              (e >> 10) | 55296,
                              (1023 & e) | 56320
                          ))
            );
        }
        function i() {
            x();
        }
        var e,
            f,
            _,
            o,
            r,
            h,
            p,
            g,
            w,
            l,
            c,
            x,
            E,
            s,
            T,
            m,
            a,
            u,
            v,
            C = "sizzle" + +new Date(),
            y = n.document,
            A = 0,
            b = 0,
            k = le(),
            S = le(),
            D = le(),
            L = le(),
            O = function (e, t) {
                return e === t && (c = !0), 0;
            },
            N = {}.hasOwnProperty,
            t = [],
            j = t.pop,
            I = t.push,
            P = t.push,
            H = t.slice,
            M = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1;
            },
            q =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            $ = "[\\x20\\t\\r\\n\\f]",
            R =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                $ +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            B =
                "\\[" +
                $ +
                "*(" +
                R +
                ")(?:" +
                $ +
                "*([*^$|!~]?=)" +
                $ +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                R +
                "))|)" +
                $ +
                "*\\]",
            W =
                ":(" +
                R +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                B +
                ")*)|.*)\\)|)",
            F = new RegExp($ + "+", "g"),
            z = new RegExp(
                "^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$",
                "g"
            ),
            U = new RegExp("^" + $ + "*," + $ + "*"),
            X = new RegExp("^" + $ + "*([>+~]|" + $ + ")" + $ + "*"),
            V = new RegExp($ + "|>"),
            Y = new RegExp(W),
            Q = new RegExp("^" + R + "$"),
            K = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + B),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                        $ +
                        "*(even|odd|(([+-]|)(\\d*)n|)" +
                        $ +
                        "*(?:([+-]|)" +
                        $ +
                        "*(\\d+)|))" +
                        $ +
                        "*\\)|)",
                    "i"
                ),
                bool: new RegExp("^(?:" + q + ")$", "i"),
                needsContext: new RegExp(
                    "^" +
                        $ +
                        "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                        $ +
                        "*((?:-\\d)?\\d*)" +
                        $ +
                        "*\\)|)(?=[^-]|$)",
                    "i"
                ),
            },
            G = /HTML$/i,
            J = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            ee = /^[^{]+\{\s*\[native \w/,
            te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ne = /[+~]/,
            ie = new RegExp(
                "\\\\[\\da-fA-F]{1,6}" + $ + "?|\\\\([^\\r\\n\\f])",
                "g"
            ),
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function (e, t) {
                return t
                    ? "\0" === e
                        ? "�"
                        : e.slice(0, -1) +
                          "\\" +
                          e.charCodeAt(e.length - 1).toString(16) +
                          " "
                    : "\\" + e;
            },
            se = ye(
                function (e) {
                    return (
                        !0 === e.disabled &&
                        "fieldset" === e.nodeName.toLowerCase()
                    );
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            P.apply((t = H.call(y.childNodes)), y.childNodes),
                t[y.childNodes.length].nodeType;
        } catch (e) {
            P = {
                apply: t.length
                    ? function (e, t) {
                          I.apply(e, H.call(t));
                      }
                    : function (e, t) {
                          for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                          e.length = n - 1;
                      },
            };
        }
        function ae(t, e, n, i) {
            var r,
                o,
                s,
                a,
                l,
                c,
                u = e && e.ownerDocument,
                d = e ? e.nodeType : 9;
            if (
                ((n = n || []),
                "string" != typeof t || !t || (1 !== d && 9 !== d && 11 !== d))
            )
                return n;
            if (!i && (x(e), (e = e || E), T)) {
                if (11 !== d && (a = te.exec(t)))
                    if ((c = a[1])) {
                        if (9 === d) {
                            if (!(o = e.getElementById(c))) return n;
                            if (o.id === c) return n.push(o), n;
                        } else if (
                            u &&
                            (o = u.getElementById(c)) &&
                            v(e, o) &&
                            o.id === c
                        )
                            return n.push(o), n;
                    } else {
                        if (a[2])
                            return P.apply(n, e.getElementsByTagName(t)), n;
                        if (
                            (c = a[3]) &&
                            f.getElementsByClassName &&
                            e.getElementsByClassName
                        )
                            return P.apply(n, e.getElementsByClassName(c)), n;
                    }
                if (
                    f.qsa &&
                    !L[t + " "] &&
                    (!m || !m.test(t)) &&
                    (1 !== d || "object" !== e.nodeName.toLowerCase())
                ) {
                    if (
                        ((c = t), (u = e), 1 === d && (V.test(t) || X.test(t)))
                    ) {
                        for (
                            ((u = (ne.test(t) && ge(e.parentNode)) || e) ===
                                e &&
                                f.scope) ||
                                ((s = e.getAttribute("id"))
                                    ? (s = s.replace(re, oe))
                                    : e.setAttribute("id", (s = C))),
                                r = (l = h(t)).length;
                            r--;

                        )
                            l[r] = (s ? "#" + s : ":scope") + " " + ve(l[r]);
                        c = l.join(",");
                    }
                    try {
                        return P.apply(n, u.querySelectorAll(c)), n;
                    } catch (e) {
                        L(t, !0);
                    } finally {
                        s === C && e.removeAttribute("id");
                    }
                }
            }
            return g(t.replace(z, "$1"), e, n, i);
        }
        function le() {
            var n = [];
            function i(e, t) {
                return (
                    n.push(e + " ") > _.cacheLength && delete i[n.shift()],
                    (i[e + " "] = t)
                );
            }
            return i;
        }
        function ce(e) {
            return (e[C] = !0), e;
        }
        function ue(e) {
            var t = E.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function de(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
                _.attrHandle[n[i]] = t;
        }
        function fe(e, t) {
            var n = t && e,
                i =
                    n &&
                    1 === e.nodeType &&
                    1 === t.nodeType &&
                    e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function he(t) {
            return function (e) {
                return "form" in e
                    ? e.parentNode && !1 === e.disabled
                        ? "label" in e
                            ? "label" in e.parentNode
                                ? e.parentNode.disabled === t
                                : e.disabled === t
                            : e.isDisabled === t ||
                              (e.isDisabled !== !t && se(e) === t)
                        : e.disabled === t
                    : "label" in e && e.disabled === t;
            };
        }
        function pe(s) {
            return ce(function (o) {
                return (
                    (o = +o),
                    ce(function (e, t) {
                        for (var n, i = s([], e.length, o), r = i.length; r--; )
                            e[(n = i[r])] && (e[n] = !(t[n] = e[n]));
                    })
                );
            });
        }
        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        for (e in ((f = ae.support = {}),
        (r = ae.isXML =
            function (e) {
                var t = e && e.namespaceURI,
                    e = e && (e.ownerDocument || e).documentElement;
                return !G.test(t || (e && e.nodeName) || "HTML");
            }),
        (x = ae.setDocument =
            function (e) {
                var t,
                    e = e ? e.ownerDocument || e : y;
                return (
                    e != E &&
                        9 === e.nodeType &&
                        e.documentElement &&
                        ((s = (E = e).documentElement),
                        (T = !r(E)),
                        y != E &&
                            (t = E.defaultView) &&
                            t.top !== t &&
                            (t.addEventListener
                                ? t.addEventListener("unload", i, !1)
                                : t.attachEvent &&
                                  t.attachEvent("onunload", i)),
                        (f.scope = ue(function (e) {
                            return (
                                s
                                    .appendChild(e)
                                    .appendChild(E.createElement("div")),
                                void 0 !== e.querySelectorAll &&
                                    !e.querySelectorAll(":scope fieldset div")
                                        .length
                            );
                        })),
                        (f.attributes = ue(function (e) {
                            return (
                                (e.className = "i"),
                                !e.getAttribute("className")
                            );
                        })),
                        (f.getElementsByTagName = ue(function (e) {
                            return (
                                e.appendChild(E.createComment("")),
                                !e.getElementsByTagName("*").length
                            );
                        })),
                        (f.getElementsByClassName = ee.test(
                            E.getElementsByClassName
                        )),
                        (f.getById = ue(function (e) {
                            return (
                                (s.appendChild(e).id = C),
                                !E.getElementsByName ||
                                    !E.getElementsByName(C).length
                            );
                        })),
                        f.getById
                            ? ((_.filter.ID = function (e) {
                                  var t = e.replace(ie, d);
                                  return function (e) {
                                      return e.getAttribute("id") === t;
                                  };
                              }),
                              (_.find.ID = function (e, t) {
                                  if (void 0 !== t.getElementById && T) {
                                      e = t.getElementById(e);
                                      return e ? [e] : [];
                                  }
                              }))
                            : ((_.filter.ID = function (e) {
                                  var t = e.replace(ie, d);
                                  return function (e) {
                                      e =
                                          void 0 !== e.getAttributeNode &&
                                          e.getAttributeNode("id");
                                      return e && e.value === t;
                                  };
                              }),
                              (_.find.ID = function (e, t) {
                                  if (void 0 !== t.getElementById && T) {
                                      var n,
                                          i,
                                          r,
                                          o = t.getElementById(e);
                                      if (o) {
                                          if (
                                              (n = o.getAttributeNode("id")) &&
                                              n.value === e
                                          )
                                              return [o];
                                          for (
                                              r = t.getElementsByName(e), i = 0;
                                              (o = r[i++]);

                                          )
                                              if (
                                                  (n =
                                                      o.getAttributeNode(
                                                          "id"
                                                      )) &&
                                                  n.value === e
                                              )
                                                  return [o];
                                      }
                                      return [];
                                  }
                              })),
                        (_.find.TAG = f.getElementsByTagName
                            ? function (e, t) {
                                  return void 0 !== t.getElementsByTagName
                                      ? t.getElementsByTagName(e)
                                      : f.qsa
                                      ? t.querySelectorAll(e)
                                      : void 0;
                              }
                            : function (e, t) {
                                  var n,
                                      i = [],
                                      r = 0,
                                      o = t.getElementsByTagName(e);
                                  if ("*" !== e) return o;
                                  for (; (n = o[r++]); )
                                      1 === n.nodeType && i.push(n);
                                  return i;
                              }),
                        (_.find.CLASS =
                            f.getElementsByClassName &&
                            function (e, t) {
                                if (void 0 !== t.getElementsByClassName && T)
                                    return t.getElementsByClassName(e);
                            }),
                        (a = []),
                        (m = []),
                        (f.qsa = ee.test(E.querySelectorAll)) &&
                            (ue(function (e) {
                                var t;
                                (s.appendChild(e).innerHTML =
                                    "<a id='" +
                                    C +
                                    "'></a><select id='" +
                                    C +
                                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                    e.querySelectorAll("[msallowcapture^='']")
                                        .length &&
                                        m.push("[*^$]=" + $ + "*(?:''|\"\")"),
                                    e.querySelectorAll("[selected]").length ||
                                        m.push(
                                            "\\[" + $ + "*(?:value|" + q + ")"
                                        ),
                                    e.querySelectorAll("[id~=" + C + "-]")
                                        .length || m.push("~="),
                                    (t = E.createElement("input")).setAttribute(
                                        "name",
                                        ""
                                    ),
                                    e.appendChild(t),
                                    e.querySelectorAll("[name='']").length ||
                                        m.push(
                                            "\\[" +
                                                $ +
                                                "*name" +
                                                $ +
                                                "*=" +
                                                $ +
                                                "*(?:''|\"\")"
                                        ),
                                    e.querySelectorAll(":checked").length ||
                                        m.push(":checked"),
                                    e.querySelectorAll("a#" + C + "+*")
                                        .length || m.push(".#.+[+~]"),
                                    e.querySelectorAll("\\\f"),
                                    m.push("[\\r\\n\\f]");
                            }),
                            ue(function (e) {
                                e.innerHTML =
                                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                var t = E.createElement("input");
                                t.setAttribute("type", "hidden"),
                                    e.appendChild(t).setAttribute("name", "D"),
                                    e.querySelectorAll("[name=d]").length &&
                                        m.push("name" + $ + "*[*^$|!~]?="),
                                    2 !==
                                        e.querySelectorAll(":enabled").length &&
                                        m.push(":enabled", ":disabled"),
                                    (s.appendChild(e).disabled = !0),
                                    2 !==
                                        e.querySelectorAll(":disabled")
                                            .length &&
                                        m.push(":enabled", ":disabled"),
                                    e.querySelectorAll("*,:x"),
                                    m.push(",.*:");
                            })),
                        (f.matchesSelector = ee.test(
                            (u =
                                s.matches ||
                                s.webkitMatchesSelector ||
                                s.mozMatchesSelector ||
                                s.oMatchesSelector ||
                                s.msMatchesSelector)
                        )) &&
                            ue(function (e) {
                                (f.disconnectedMatch = u.call(e, "*")),
                                    u.call(e, "[s!='']:x"),
                                    a.push("!=", W);
                            }),
                        (m = m.length && new RegExp(m.join("|"))),
                        (a = a.length && new RegExp(a.join("|"))),
                        (t = ee.test(s.compareDocumentPosition)),
                        (v =
                            t || ee.test(s.contains)
                                ? function (e, t) {
                                      var n =
                                              9 === e.nodeType
                                                  ? e.documentElement
                                                  : e,
                                          t = t && t.parentNode;
                                      return (
                                          e === t ||
                                          !(
                                              !t ||
                                              1 !== t.nodeType ||
                                              !(n.contains
                                                  ? n.contains(t)
                                                  : e.compareDocumentPosition &&
                                                    16 &
                                                        e.compareDocumentPosition(
                                                            t
                                                        ))
                                          )
                                      );
                                  }
                                : function (e, t) {
                                      if (t)
                                          for (; (t = t.parentNode); )
                                              if (t === e) return !0;
                                      return !1;
                                  }),
                        (O = t
                            ? function (e, t) {
                                  if (e === t) return (c = !0), 0;
                                  var n =
                                      !e.compareDocumentPosition -
                                      !t.compareDocumentPosition;
                                  return (
                                      n ||
                                      (1 &
                                          (n =
                                              (e.ownerDocument || e) ==
                                              (t.ownerDocument || t)
                                                  ? e.compareDocumentPosition(t)
                                                  : 1) ||
                                      (!f.sortDetached &&
                                          t.compareDocumentPosition(e) === n)
                                          ? e == E ||
                                            (e.ownerDocument == y && v(y, e))
                                              ? -1
                                              : t == E ||
                                                (t.ownerDocument == y &&
                                                    v(y, t))
                                              ? 1
                                              : l
                                              ? M(l, e) - M(l, t)
                                              : 0
                                          : 4 & n
                                          ? -1
                                          : 1)
                                  );
                              }
                            : function (e, t) {
                                  if (e === t) return (c = !0), 0;
                                  var n,
                                      i = 0,
                                      r = e.parentNode,
                                      o = t.parentNode,
                                      s = [e],
                                      a = [t];
                                  if (!r || !o)
                                      return e == E
                                          ? -1
                                          : t == E
                                          ? 1
                                          : r
                                          ? -1
                                          : o
                                          ? 1
                                          : l
                                          ? M(l, e) - M(l, t)
                                          : 0;
                                  if (r === o) return fe(e, t);
                                  for (n = e; (n = n.parentNode); )
                                      s.unshift(n);
                                  for (n = t; (n = n.parentNode); )
                                      a.unshift(n);
                                  for (; s[i] === a[i]; ) i++;
                                  return i
                                      ? fe(s[i], a[i])
                                      : s[i] == y
                                      ? -1
                                      : a[i] == y
                                      ? 1
                                      : 0;
                              })),
                    E
                );
            }),
        (ae.matches = function (e, t) {
            return ae(e, null, null, t);
        }),
        (ae.matchesSelector = function (e, t) {
            if (
                (x(e),
                f.matchesSelector &&
                    T &&
                    !L[t + " "] &&
                    (!a || !a.test(t)) &&
                    (!m || !m.test(t)))
            )
                try {
                    var n = u.call(e, t);
                    if (
                        n ||
                        f.disconnectedMatch ||
                        (e.document && 11 !== e.document.nodeType)
                    )
                        return n;
                } catch (e) {
                    L(t, !0);
                }
            return 0 < ae(t, E, null, [e]).length;
        }),
        (ae.contains = function (e, t) {
            return (e.ownerDocument || e) != E && x(e), v(e, t);
        }),
        (ae.attr = function (e, t) {
            (e.ownerDocument || e) != E && x(e);
            var n = _.attrHandle[t.toLowerCase()],
                n =
                    n && N.call(_.attrHandle, t.toLowerCase())
                        ? n(e, t, !T)
                        : void 0;
            return void 0 !== n
                ? n
                : f.attributes || !T
                ? e.getAttribute(t)
                : (n = e.getAttributeNode(t)) && n.specified
                ? n.value
                : null;
        }),
        (ae.escape = function (e) {
            return (e + "").replace(re, oe);
        }),
        (ae.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (ae.uniqueSort = function (e) {
            var t,
                n = [],
                i = 0,
                r = 0;
            if (
                ((c = !f.detectDuplicates),
                (l = !f.sortStable && e.slice(0)),
                e.sort(O),
                c)
            ) {
                for (; (t = e[r++]); ) t === e[r] && (i = n.push(r));
                for (; i--; ) e.splice(n[i], 1);
            }
            return (l = null), e;
        }),
        (o = ae.getText =
            function (e) {
                var t,
                    n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                    } else if (3 === r || 4 === r) return e.nodeValue;
                } else for (; (t = e[i++]); ) n += o(t);
                return n;
            }),
        ((_ = ae.selectors =
            {
                cacheLength: 50,
                createPseudo: ce,
                match: K,
                attrHandle: {},
                find: {},
                relative: {
                    ">": { dir: "parentNode", first: !0 },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: !0 },
                    "~": { dir: "previousSibling" },
                },
                preFilter: {
                    ATTR: function (e) {
                        return (
                            (e[1] = e[1].replace(ie, d)),
                            (e[3] = (e[3] || e[4] || e[5] || "").replace(
                                ie,
                                d
                            )),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                        );
                    },
                    CHILD: function (e) {
                        return (
                            (e[1] = e[1].toLowerCase()),
                            "nth" === e[1].slice(0, 3)
                                ? (e[3] || ae.error(e[0]),
                                  (e[4] = +(e[4]
                                      ? e[5] + (e[6] || 1)
                                      : 2 *
                                        ("even" === e[3] || "odd" === e[3]))),
                                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                                : e[3] && ae.error(e[0]),
                            e
                        );
                    },
                    PSEUDO: function (e) {
                        var t,
                            n = !e[6] && e[2];
                        return K.CHILD.test(e[0])
                            ? null
                            : (e[3]
                                  ? (e[2] = e[4] || e[5] || "")
                                  : n &&
                                    Y.test(n) &&
                                    (t = h(n, !0)) &&
                                    (t =
                                        n.indexOf(")", n.length - t) -
                                        n.length) &&
                                    ((e[0] = e[0].slice(0, t)),
                                    (e[2] = n.slice(0, t))),
                              e.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(ie, d).toLowerCase();
                        return "*" === e
                            ? function () {
                                  return !0;
                              }
                            : function (e) {
                                  return (
                                      e.nodeName &&
                                      e.nodeName.toLowerCase() === t
                                  );
                              };
                    },
                    CLASS: function (e) {
                        var t = k[e + " "];
                        return (
                            t ||
                            ((t = new RegExp(
                                "(^|" + $ + ")" + e + "(" + $ + "|$)"
                            )) &&
                                k(e, function (e) {
                                    return t.test(
                                        ("string" == typeof e.className &&
                                            e.className) ||
                                            (void 0 !== e.getAttribute &&
                                                e.getAttribute("class")) ||
                                            ""
                                    );
                                }))
                        );
                    },
                    ATTR: function (t, n, i) {
                        return function (e) {
                            e = ae.attr(e, t);
                            return null == e
                                ? "!=" === n
                                : !n ||
                                      ((e += ""),
                                      "=" === n
                                          ? e === i
                                          : "!=" === n
                                          ? e !== i
                                          : "^=" === n
                                          ? i && 0 === e.indexOf(i)
                                          : "*=" === n
                                          ? i && -1 < e.indexOf(i)
                                          : "$=" === n
                                          ? i && e.slice(-i.length) === i
                                          : "~=" === n
                                          ? -1 <
                                            (
                                                " " +
                                                e.replace(F, " ") +
                                                " "
                                            ).indexOf(i)
                                          : "|=" === n &&
                                            (e === i ||
                                                e.slice(0, i.length + 1) ===
                                                    i + "-"));
                        };
                    },
                    CHILD: function (p, e, t, g, m) {
                        var v = "nth" !== p.slice(0, 3),
                            y = "last" !== p.slice(-4),
                            b = "of-type" === e;
                        return 1 === g && 0 === m
                            ? function (e) {
                                  return !!e.parentNode;
                              }
                            : function (e, t, n) {
                                  var i,
                                      r,
                                      o,
                                      s,
                                      a,
                                      l,
                                      c =
                                          v != y
                                              ? "nextSibling"
                                              : "previousSibling",
                                      u = e.parentNode,
                                      d = b && e.nodeName.toLowerCase(),
                                      f = !n && !b,
                                      h = !1;
                                  if (u) {
                                      if (v) {
                                          for (; c; ) {
                                              for (s = e; (s = s[c]); )
                                                  if (
                                                      b
                                                          ? s.nodeName.toLowerCase() ===
                                                            d
                                                          : 1 === s.nodeType
                                                  )
                                                      return !1;
                                              l = c =
                                                  "only" === p &&
                                                  !l &&
                                                  "nextSibling";
                                          }
                                          return !0;
                                      }
                                      if (
                                          ((l = [
                                              y ? u.firstChild : u.lastChild,
                                          ]),
                                          y && f)
                                      ) {
                                          for (
                                              h =
                                                  (a =
                                                      (i =
                                                          (r =
                                                              (o =
                                                                  (s = u)[C] ||
                                                                  (s[C] = {}))[
                                                                  s.uniqueID
                                                              ] ||
                                                              (o[s.uniqueID] =
                                                                  {}))[p] ||
                                                          [])[0] === A &&
                                                      i[1]) && i[2],
                                                  s = a && u.childNodes[a];
                                              (s =
                                                  (++a && s && s[c]) ||
                                                  (h = a = 0) ||
                                                  l.pop());

                                          )
                                              if (
                                                  1 === s.nodeType &&
                                                  ++h &&
                                                  s === e
                                              ) {
                                                  r[p] = [A, a, h];
                                                  break;
                                              }
                                      } else if (
                                          !1 ===
                                          (h = f
                                              ? (a =
                                                    (i =
                                                        (r =
                                                            (o =
                                                                (s = e)[C] ||
                                                                (s[C] = {}))[
                                                                s.uniqueID
                                                            ] ||
                                                            (o[s.uniqueID] =
                                                                {}))[p] ||
                                                        [])[0] === A && i[1])
                                              : h)
                                      )
                                          for (
                                              ;
                                              (s =
                                                  (++a && s && s[c]) ||
                                                  (h = a = 0) ||
                                                  l.pop()) &&
                                              ((b
                                                  ? s.nodeName.toLowerCase() !==
                                                    d
                                                  : 1 !== s.nodeType) ||
                                                  !++h ||
                                                  (f &&
                                                      ((r =
                                                          (o =
                                                              s[C] ||
                                                              (s[C] = {}))[
                                                              s.uniqueID
                                                          ] ||
                                                          (o[s.uniqueID] = {}))[
                                                          p
                                                      ] = [A, h]),
                                                  s !== e));

                                          );
                                      return (
                                          (h -= m) === g ||
                                          (h % g == 0 && 0 <= h / g)
                                      );
                                  }
                              };
                    },
                    PSEUDO: function (e, o) {
                        var t,
                            s =
                                _.pseudos[e] ||
                                _.setFilters[e.toLowerCase()] ||
                                ae.error("unsupported pseudo: " + e);
                        return s[C]
                            ? s(o)
                            : 1 < s.length
                            ? ((t = [e, e, "", o]),
                              _.setFilters.hasOwnProperty(e.toLowerCase())
                                  ? ce(function (e, t) {
                                        for (
                                            var n, i = s(e, o), r = i.length;
                                            r--;

                                        )
                                            e[(n = M(e, i[r]))] = !(t[n] =
                                                i[r]);
                                    })
                                  : function (e) {
                                        return s(e, 0, t);
                                    })
                            : s;
                    },
                },
                pseudos: {
                    not: ce(function (e) {
                        var i = [],
                            r = [],
                            a = p(e.replace(z, "$1"));
                        return a[C]
                            ? ce(function (e, t, n, i) {
                                  for (
                                      var r,
                                          o = a(e, null, i, []),
                                          s = e.length;
                                      s--;

                                  )
                                      (r = o[s]) && (e[s] = !(t[s] = r));
                              })
                            : function (e, t, n) {
                                  return (
                                      (i[0] = e),
                                      a(i, null, n, r),
                                      (i[0] = null),
                                      !r.pop()
                                  );
                              };
                    }),
                    has: ce(function (t) {
                        return function (e) {
                            return 0 < ae(t, e).length;
                        };
                    }),
                    contains: ce(function (t) {
                        return (
                            (t = t.replace(ie, d)),
                            function (e) {
                                return -1 < (e.textContent || o(e)).indexOf(t);
                            }
                        );
                    }),
                    lang: ce(function (n) {
                        return (
                            Q.test(n || "") ||
                                ae.error("unsupported lang: " + n),
                            (n = n.replace(ie, d).toLowerCase()),
                            function (e) {
                                var t;
                                do {
                                    if (
                                        (t = T
                                            ? e.lang
                                            : e.getAttribute("xml:lang") ||
                                              e.getAttribute("lang"))
                                    )
                                        return (
                                            (t = t.toLowerCase()) === n ||
                                            0 === t.indexOf(n + "-")
                                        );
                                } while (
                                    (e = e.parentNode) &&
                                    1 === e.nodeType
                                );
                                return !1;
                            }
                        );
                    }),
                    target: function (e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id;
                    },
                    root: function (e) {
                        return e === s;
                    },
                    focus: function (e) {
                        return (
                            e === E.activeElement &&
                            (!E.hasFocus || E.hasFocus()) &&
                            !!(e.type || e.href || ~e.tabIndex)
                        );
                    },
                    enabled: he(!1),
                    disabled: he(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                            ("input" === t && !!e.checked) ||
                            ("option" === t && !!e.selected)
                        );
                    },
                    selected: function (e) {
                        return (
                            e.parentNode && e.parentNode.selectedIndex,
                            !0 === e.selected
                        );
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function (e) {
                        return !_.pseudos.empty(e);
                    },
                    header: function (e) {
                        return Z.test(e.nodeName);
                    },
                    input: function (e) {
                        return J.test(e.nodeName);
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return (
                            ("input" === t && "button" === e.type) ||
                            "button" === t
                        );
                    },
                    text: function (e) {
                        return (
                            "input" === e.nodeName.toLowerCase() &&
                            "text" === e.type &&
                            (null == (e = e.getAttribute("type")) ||
                                "text" === e.toLowerCase())
                        );
                    },
                    first: pe(function () {
                        return [0];
                    }),
                    last: pe(function (e, t) {
                        return [t - 1];
                    }),
                    eq: pe(function (e, t, n) {
                        return [n < 0 ? n + t : n];
                    }),
                    even: pe(function (e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    odd: pe(function (e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e;
                    }),
                    lt: pe(function (e, t, n) {
                        for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; )
                            e.push(i);
                        return e;
                    }),
                    gt: pe(function (e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                        return e;
                    }),
                },
            }).pseudos.nth = _.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            _.pseudos[e] = (function (t) {
                return function (e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t;
                };
            })(e);
        for (e in { submit: !0, reset: !0 })
            _.pseudos[e] = (function (n) {
                return function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n;
                };
            })(e);
        function me() {}
        function ve(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
        }
        function ye(s, e, t) {
            var a = e.dir,
                l = e.next,
                c = l || a,
                u = t && "parentNode" === c,
                d = b++;
            return e.first
                ? function (e, t, n) {
                      for (; (e = e[a]); )
                          if (1 === e.nodeType || u) return s(e, t, n);
                      return !1;
                  }
                : function (e, t, n) {
                      var i,
                          r,
                          o = [A, d];
                      if (n) {
                          for (; (e = e[a]); )
                              if ((1 === e.nodeType || u) && s(e, t, n))
                                  return !0;
                      } else
                          for (; (e = e[a]); )
                              if (1 === e.nodeType || u)
                                  if (
                                      ((i =
                                          (r = e[C] || (e[C] = {}))[
                                              e.uniqueID
                                          ] || (r[e.uniqueID] = {})),
                                      l && l === e.nodeName.toLowerCase())
                                  )
                                      e = e[a] || e;
                                  else {
                                      if (
                                          (r = i[c]) &&
                                          r[0] === A &&
                                          r[1] === d
                                      )
                                          return (o[2] = r[2]);
                                      if (((i[c] = o)[2] = s(e, t, n)))
                                          return !0;
                                  }
                      return !1;
                  };
        }
        function be(r) {
            return 1 < r.length
                ? function (e, t, n) {
                      for (var i = r.length; i--; )
                          if (!r[i](e, t, n)) return !1;
                      return !0;
                  }
                : r[0];
        }
        function _e(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
                (o = e[a]) &&
                    ((n && !n(o, i, r)) || (s.push(o), c && t.push(a)));
            return s;
        }
        function we(h, p, g, m, v, e) {
            return (
                m && !m[C] && (m = we(m)),
                v && !v[C] && (v = we(v, e)),
                ce(function (e, t, n, i) {
                    var r,
                        o,
                        s,
                        a = [],
                        l = [],
                        c = t.length,
                        u =
                            e ||
                            (function (e, t, n) {
                                for (var i = 0, r = t.length; i < r; i++)
                                    ae(e, t[i], n);
                                return n;
                            })(p || "*", n.nodeType ? [n] : n, []),
                        d = !h || (!e && p) ? u : _e(u, a, h, n, i),
                        f = g ? (v || (e ? h : c || m) ? [] : t) : d;
                    if ((g && g(d, f, n, i), m))
                        for (r = _e(f, l), m(r, [], n, i), o = r.length; o--; )
                            (s = r[o]) && (f[l[o]] = !(d[l[o]] = s));
                    if (e) {
                        if (v || h) {
                            if (v) {
                                for (r = [], o = f.length; o--; )
                                    (s = f[o]) && r.push((d[o] = s));
                                v(null, (f = []), r, i);
                            }
                            for (o = f.length; o--; )
                                (s = f[o]) &&
                                    -1 < (r = v ? M(e, s) : a[o]) &&
                                    (e[r] = !(t[r] = s));
                        }
                    } else (f = _e(f === t ? f.splice(c, f.length) : f)), v ? v(null, t, f, i) : P.apply(t, f);
                })
            );
        }
        function xe(m, v) {
            function e(e, t, n, i, r) {
                var o,
                    s,
                    a,
                    l = 0,
                    c = "0",
                    u = e && [],
                    d = [],
                    f = w,
                    h = e || (b && _.find.TAG("*", r)),
                    p = (A += null == f ? 1 : Math.random() || 0.1),
                    g = h.length;
                for (
                    r && (w = t == E || t || r);
                    c !== g && null != (o = h[c]);
                    c++
                ) {
                    if (b && o) {
                        for (
                            s = 0,
                                t || o.ownerDocument == E || (x(o), (n = !T));
                            (a = m[s++]);

                        )
                            if (a(o, t || E, n)) {
                                i.push(o);
                                break;
                            }
                        r && (A = p);
                    }
                    y && ((o = !a && o) && l--, e && u.push(o));
                }
                if (((l += c), y && c !== l)) {
                    for (s = 0; (a = v[s++]); ) a(u, d, t, n);
                    if (e) {
                        if (0 < l)
                            for (; c--; ) u[c] || d[c] || (d[c] = j.call(i));
                        d = _e(d);
                    }
                    P.apply(i, d),
                        r &&
                            !e &&
                            0 < d.length &&
                            1 < l + v.length &&
                            ae.uniqueSort(i);
                }
                return r && ((A = p), (w = f)), u;
            }
            var y = 0 < v.length,
                b = 0 < m.length;
            return y ? ce(e) : e;
        }
        return (
            (me.prototype = _.filters = _.pseudos),
            (_.setFilters = new me()),
            (h = ae.tokenize =
                function (e, t) {
                    var n,
                        i,
                        r,
                        o,
                        s,
                        a,
                        l,
                        c = S[e + " "];
                    if (c) return t ? 0 : c.slice(0);
                    for (s = e, a = [], l = _.preFilter; s; ) {
                        for (o in ((n && !(i = U.exec(s))) ||
                            (i && (s = s.slice(i[0].length) || s),
                            a.push((r = []))),
                        (n = !1),
                        (i = X.exec(s)) &&
                            ((n = i.shift()),
                            r.push({ value: n, type: i[0].replace(z, " ") }),
                            (s = s.slice(n.length))),
                        _.filter))
                            !(i = K[o].exec(s)) ||
                                (l[o] && !(i = l[o](i))) ||
                                ((n = i.shift()),
                                r.push({ value: n, type: o, matches: i }),
                                (s = s.slice(n.length)));
                        if (!n) break;
                    }
                    return t ? s.length : s ? ae.error(e) : S(e, a).slice(0);
                }),
            (p = ae.compile =
                function (e, t) {
                    var n,
                        i = [],
                        r = [],
                        o = D[e + " "];
                    if (!o) {
                        for (n = (t = t || h(e)).length; n--; )
                            ((o = (function e(t) {
                                for (
                                    var i,
                                        n,
                                        r,
                                        o = t.length,
                                        s = _.relative[t[0].type],
                                        a = s || _.relative[" "],
                                        l = s ? 1 : 0,
                                        c = ye(
                                            function (e) {
                                                return e === i;
                                            },
                                            a,
                                            !0
                                        ),
                                        u = ye(
                                            function (e) {
                                                return -1 < M(i, e);
                                            },
                                            a,
                                            !0
                                        ),
                                        d = [
                                            function (e, t, n) {
                                                return (
                                                    (n =
                                                        (!s &&
                                                            (n || t !== w)) ||
                                                        ((i = t).nodeType
                                                            ? c
                                                            : u)(e, t, n)),
                                                    (i = null),
                                                    n
                                                );
                                            },
                                        ];
                                    l < o;
                                    l++
                                )
                                    if ((n = _.relative[t[l].type]))
                                        d = [ye(be(d), n)];
                                    else {
                                        if (
                                            (n = _.filter[t[l].type].apply(
                                                null,
                                                t[l].matches
                                            ))[C]
                                        ) {
                                            for (
                                                r = ++l;
                                                r < o && !_.relative[t[r].type];
                                                r++
                                            );
                                            return we(
                                                1 < l && be(d),
                                                1 < l &&
                                                    ve(
                                                        t
                                                            .slice(0, l - 1)
                                                            .concat({
                                                                value:
                                                                    " " ===
                                                                    t[l - 2]
                                                                        .type
                                                                        ? "*"
                                                                        : "",
                                                            })
                                                    ).replace(z, "$1"),
                                                n,
                                                l < r && e(t.slice(l, r)),
                                                r < o && e((t = t.slice(r))),
                                                r < o && ve(t)
                                            );
                                        }
                                        d.push(n);
                                    }
                                return be(d);
                            })(t[n]))[C]
                                ? i
                                : r
                            ).push(o);
                        (o = D(e, xe(r, i))).selector = e;
                    }
                    return o;
                }),
            (g = ae.select =
                function (e, t, n, i) {
                    var r,
                        o,
                        s,
                        a,
                        l,
                        c = "function" == typeof e && e,
                        u = !i && h((e = c.selector || e));
                    if (((n = n || []), 1 === u.length)) {
                        if (
                            2 < (o = u[0] = u[0].slice(0)).length &&
                            "ID" === (s = o[0]).type &&
                            9 === t.nodeType &&
                            T &&
                            _.relative[o[1].type]
                        ) {
                            if (
                                !(t = (_.find.ID(
                                    s.matches[0].replace(ie, d),
                                    t
                                ) || [])[0])
                            )
                                return n;
                            c && (t = t.parentNode),
                                (e = e.slice(o.shift().value.length));
                        }
                        for (
                            r = K.needsContext.test(e) ? 0 : o.length;
                            r-- && ((s = o[r]), !_.relative[(a = s.type)]);

                        )
                            if (
                                (l = _.find[a]) &&
                                (i = l(
                                    s.matches[0].replace(ie, d),
                                    (ne.test(o[0].type) && ge(t.parentNode)) ||
                                        t
                                ))
                            ) {
                                if ((o.splice(r, 1), !(e = i.length && ve(o))))
                                    return P.apply(n, i), n;
                                break;
                            }
                    }
                    return (
                        (c || p(e, u))(
                            i,
                            t,
                            !T,
                            n,
                            !t || (ne.test(e) && ge(t.parentNode)) || t
                        ),
                        n
                    );
                }),
            (f.sortStable = C.split("").sort(O).join("") === C),
            (f.detectDuplicates = !!c),
            x(),
            (f.sortDetached = ue(function (e) {
                return (
                    1 & e.compareDocumentPosition(E.createElement("fieldset"))
                );
            })),
            ue(function (e) {
                return (
                    (e.innerHTML = "<a href='#'></a>"),
                    "#" === e.firstChild.getAttribute("href")
                );
            }) ||
                de("type|href|height|width", function (e, t, n) {
                    if (!n)
                        return e.getAttribute(
                            t,
                            "type" === t.toLowerCase() ? 1 : 2
                        );
                }),
            (f.attributes &&
                ue(function (e) {
                    return (
                        (e.innerHTML = "<input/>"),
                        e.firstChild.setAttribute("value", ""),
                        "" === e.firstChild.getAttribute("value")
                    );
                })) ||
                de("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase())
                        return e.defaultValue;
                }),
            ue(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                de(q, function (e, t, n) {
                    if (!n)
                        return !0 === e[t]
                            ? t.toLowerCase()
                            : (t = e.getAttributeNode(t)) && t.specified
                            ? t.value
                            : null;
                }),
            ae
        );
    })(x);
    (T.find = h),
        (T.expr = h.selectors),
        (T.expr[":"] = T.expr.pseudos),
        (T.uniqueSort = T.unique = h.uniqueSort),
        (T.text = h.getText),
        (T.isXMLDoc = h.isXML),
        (T.contains = h.contains),
        (T.escapeSelector = h.escape);
    function w(e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (r && T(e).is(n)) break;
                i.push(e);
            }
        return i;
    }
    function C(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n;
    }
    var A = T.expr.match.needsContext;
    function k(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function D(e, n, i) {
        return b(n)
            ? T.grep(e, function (e, t) {
                  return !!n.call(e, t, e) !== i;
              })
            : n.nodeType
            ? T.grep(e, function (e) {
                  return (e === n) !== i;
              })
            : "string" != typeof n
            ? T.grep(e, function (e) {
                  return -1 < r.call(n, e) !== i;
              })
            : T.filter(n, e, i);
    }
    (T.filter = function (e, t, n) {
        var i = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType
                ? T.find.matchesSelector(i, e)
                    ? [i]
                    : []
                : T.find.matches(
                      e,
                      T.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        T.fn.extend({
            find: function (e) {
                var t,
                    n,
                    i = this.length,
                    r = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        T(e).filter(function () {
                            for (t = 0; t < i; t++)
                                if (T.contains(r[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < i; t++)
                    T.find(e, r[t], n);
                return 1 < i ? T.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(D(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(D(this, e || [], !0));
            },
            is: function (e) {
                return !!D(
                    this,
                    "string" == typeof e && A.test(e) ? T(e) : e || [],
                    !1
                ).length;
            },
        });
    var L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (T.fn.init = function (e, t, n) {
        if (!e) return this;
        if (((n = n || O), "string" != typeof e))
            return e.nodeType
                ? ((this[0] = e), (this.length = 1), this)
                : b(e)
                ? void 0 !== n.ready
                    ? n.ready(e)
                    : e(T)
                : T.makeArray(e, this);
        if (
            !(i =
                "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
                    ? [null, e, null]
                    : L.exec(e)) ||
            (!i[1] && t)
        )
            return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
        if (i[1]) {
            if (
                ((t = t instanceof T ? t[0] : t),
                T.merge(
                    this,
                    T.parseHTML(
                        i[1],
                        t && t.nodeType ? t.ownerDocument || t : E,
                        !0
                    )
                ),
                S.test(i[1]) && T.isPlainObject(t))
            )
                for (var i in t)
                    b(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this;
        }
        return (
            (e = E.getElementById(i[2])) && ((this[0] = e), (this.length = 1)),
            this
        );
    }).prototype = T.fn;
    var O = T(E),
        N = /^(?:parents|prev(?:Until|All))/,
        j = { children: !0, contents: !0, next: !0, prev: !0 };
    function I(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
    }
    T.fn.extend({
        has: function (e) {
            var t = T(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++)
                    if (T.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                i = 0,
                r = this.length,
                o = [],
                s = "string" != typeof e && T(e);
            if (!A.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (
                            n.nodeType < 11 &&
                            (s
                                ? -1 < s.index(n)
                                : 1 === n.nodeType &&
                                  T.find.matchesSelector(n, e))
                        ) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(1 < o.length ? T.uniqueSort(o) : o);
        },
        index: function (e) {
            return e
                ? "string" == typeof e
                    ? r.call(T(e), this[0])
                    : r.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
        },
        add: function (e, t) {
            return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
        },
        addBack: function (e) {
            return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
            );
        },
    }),
        T.each(
            {
                parent: function (e) {
                    e = e.parentNode;
                    return e && 11 !== e.nodeType ? e : null;
                },
                parents: function (e) {
                    return w(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return w(e, "parentNode", n);
                },
                next: function (e) {
                    return I(e, "nextSibling");
                },
                prev: function (e) {
                    return I(e, "previousSibling");
                },
                nextAll: function (e) {
                    return w(e, "nextSibling");
                },
                prevAll: function (e) {
                    return w(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return w(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return w(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return C((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return C(e.firstChild);
                },
                contents: function (e) {
                    return null != e.contentDocument && n(e.contentDocument)
                        ? e.contentDocument
                        : (k(e, "template") && (e = e.content || e),
                          T.merge([], e.childNodes));
                },
            },
            function (i, r) {
                T.fn[i] = function (e, t) {
                    var n = T.map(this, r, e);
                    return (
                        (t = "Until" !== i.slice(-5) ? e : t) &&
                            "string" == typeof t &&
                            (n = T.filter(t, n)),
                        1 < this.length &&
                            (j[i] || T.uniqueSort(n), N.test(i) && n.reverse()),
                        this.pushStack(n)
                    );
                };
            }
        );
    var P = /[^\x20\t\r\n\f]+/g;
    function H(e) {
        return e;
    }
    function M(e) {
        throw e;
    }
    function q(e, t, n, i) {
        var r;
        try {
            e && b((r = e.promise))
                ? r.call(e).done(t).fail(n)
                : e && b((r = e.then))
                ? r.call(e, t, n)
                : t.apply(void 0, [e].slice(i));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (T.Callbacks = function (i) {
        var e, n;
        i =
            "string" == typeof i
                ? ((e = i),
                  (n = {}),
                  T.each(e.match(P) || [], function (e, t) {
                      n[t] = !0;
                  }),
                  n)
                : T.extend({}, i);
        function r() {
            for (a = a || i.once, s = o = !0; c.length; u = -1)
                for (t = c.shift(); ++u < l.length; )
                    !1 === l[u].apply(t[0], t[1]) &&
                        i.stopOnFalse &&
                        ((u = l.length), (t = !1));
            i.memory || (t = !1), (o = !1), a && (l = t ? [] : "");
        }
        var o,
            t,
            s,
            a,
            l = [],
            c = [],
            u = -1,
            d = {
                add: function () {
                    return (
                        l &&
                            (t && !o && ((u = l.length - 1), c.push(t)),
                            (function n(e) {
                                T.each(e, function (e, t) {
                                    b(t)
                                        ? (i.unique && d.has(t)) || l.push(t)
                                        : t &&
                                          t.length &&
                                          "string" !== p(t) &&
                                          n(t);
                                });
                            })(arguments),
                            t && !o && r()),
                        this
                    );
                },
                remove: function () {
                    return (
                        T.each(arguments, function (e, t) {
                            for (var n; -1 < (n = T.inArray(t, l, n)); )
                                l.splice(n, 1), n <= u && u--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? -1 < T.inArray(e, l) : 0 < l.length;
                },
                empty: function () {
                    return (l = l && []), this;
                },
                disable: function () {
                    return (a = c = []), (l = t = ""), this;
                },
                disabled: function () {
                    return !l;
                },
                lock: function () {
                    return (a = c = []), t || o || (l = t = ""), this;
                },
                locked: function () {
                    return !!a;
                },
                fireWith: function (e, t) {
                    return (
                        a ||
                            ((t = [e, (t = t || []).slice ? t.slice() : t]),
                            c.push(t),
                            o || r()),
                        this
                    );
                },
                fire: function () {
                    return d.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!s;
                },
            };
        return d;
    }),
        T.extend({
            Deferred: function (e) {
                var o = [
                        [
                            "notify",
                            "progress",
                            T.Callbacks("memory"),
                            T.Callbacks("memory"),
                            2,
                        ],
                        [
                            "resolve",
                            "done",
                            T.Callbacks("once memory"),
                            T.Callbacks("once memory"),
                            0,
                            "resolved",
                        ],
                        [
                            "reject",
                            "fail",
                            T.Callbacks("once memory"),
                            T.Callbacks("once memory"),
                            1,
                            "rejected",
                        ],
                    ],
                    r = "pending",
                    s = {
                        state: function () {
                            return r;
                        },
                        always: function () {
                            return a.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return s.then(null, e);
                        },
                        pipe: function () {
                            var r = arguments;
                            return T.Deferred(function (i) {
                                T.each(o, function (e, t) {
                                    var n = b(r[t[4]]) && r[t[4]];
                                    a[t[1]](function () {
                                        var e = n && n.apply(this, arguments);
                                        e && b(e.promise)
                                            ? e
                                                  .promise()
                                                  .progress(i.notify)
                                                  .done(i.resolve)
                                                  .fail(i.reject)
                                            : i[t[0] + "With"](
                                                  this,
                                                  n ? [e] : arguments
                                              );
                                    });
                                }),
                                    (r = null);
                            }).promise();
                        },
                        then: function (t, n, i) {
                            var l = 0;
                            function c(r, o, s, a) {
                                return function () {
                                    function e() {
                                        var e, t;
                                        if (!(r < l)) {
                                            if (
                                                (e = s.apply(n, i)) ===
                                                o.promise()
                                            )
                                                throw new TypeError(
                                                    "Thenable self-resolution"
                                                );
                                            (t =
                                                e &&
                                                ("object" == typeof e ||
                                                    "function" == typeof e) &&
                                                e.then),
                                                b(t)
                                                    ? a
                                                        ? t.call(
                                                              e,
                                                              c(l, o, H, a),
                                                              c(l, o, M, a)
                                                          )
                                                        : (l++,
                                                          t.call(
                                                              e,
                                                              c(l, o, H, a),
                                                              c(l, o, M, a),
                                                              c(
                                                                  l,
                                                                  o,
                                                                  H,
                                                                  o.notifyWith
                                                              )
                                                          ))
                                                    : (s !== H &&
                                                          ((n = void 0),
                                                          (i = [e])),
                                                      (a || o.resolveWith)(
                                                          n,
                                                          i
                                                      ));
                                        }
                                    }
                                    var n = this,
                                        i = arguments,
                                        t = a
                                            ? e
                                            : function () {
                                                  try {
                                                      e();
                                                  } catch (e) {
                                                      T.Deferred
                                                          .exceptionHook &&
                                                          T.Deferred.exceptionHook(
                                                              e,
                                                              t.stackTrace
                                                          ),
                                                          l <= r + 1 &&
                                                              (s !== M &&
                                                                  ((n = void 0),
                                                                  (i = [e])),
                                                              o.rejectWith(
                                                                  n,
                                                                  i
                                                              ));
                                                  }
                                              };
                                    r
                                        ? t()
                                        : (T.Deferred.getStackHook &&
                                              (t.stackTrace =
                                                  T.Deferred.getStackHook()),
                                          x.setTimeout(t));
                                };
                            }
                            return T.Deferred(function (e) {
                                o[0][3].add(
                                    c(0, e, b(i) ? i : H, e.notifyWith)
                                ),
                                    o[1][3].add(c(0, e, b(t) ? t : H)),
                                    o[2][3].add(c(0, e, b(n) ? n : M));
                            }).promise();
                        },
                        promise: function (e) {
                            return null != e ? T.extend(e, s) : s;
                        },
                    },
                    a = {};
                return (
                    T.each(o, function (e, t) {
                        var n = t[2],
                            i = t[5];
                        (s[t[1]] = n.add),
                            i &&
                                n.add(
                                    function () {
                                        r = i;
                                    },
                                    o[3 - e][2].disable,
                                    o[3 - e][3].disable,
                                    o[0][2].lock,
                                    o[0][3].lock
                                ),
                            n.add(t[3].fire),
                            (a[t[0]] = function () {
                                return (
                                    a[t[0] + "With"](
                                        this === a ? void 0 : this,
                                        arguments
                                    ),
                                    this
                                );
                            }),
                            (a[t[0] + "With"] = n.fireWith);
                    }),
                    s.promise(a),
                    e && e.call(a, a),
                    a
                );
            },
            when: function (e) {
                function t(t) {
                    return function (e) {
                        (r[t] = this),
                            (o[t] =
                                1 < arguments.length ? a.call(arguments) : e),
                            --n || s.resolveWith(r, o);
                    };
                }
                var n = arguments.length,
                    i = n,
                    r = Array(i),
                    o = a.call(arguments),
                    s = T.Deferred();
                if (
                    n <= 1 &&
                    (q(e, s.done(t(i)).resolve, s.reject, !n),
                    "pending" === s.state() || b(o[i] && o[i].then))
                )
                    return s.then();
                for (; i--; ) q(o[i], t(i), s.reject);
                return s.promise();
            },
        });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (T.Deferred.exceptionHook = function (e, t) {
        x.console &&
            x.console.warn &&
            e &&
            $.test(e.name) &&
            x.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
            );
    }),
        (T.readyException = function (e) {
            x.setTimeout(function () {
                throw e;
            });
        });
    var R = T.Deferred();
    function B() {
        E.removeEventListener("DOMContentLoaded", B),
            x.removeEventListener("load", B),
            T.ready();
    }
    (T.fn.ready = function (e) {
        return (
            R.then(e).catch(function (e) {
                T.readyException(e);
            }),
            this
        );
    }),
        T.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --T.readyWait : T.isReady) ||
                    ((T.isReady = !0) !== e && 0 < --T.readyWait) ||
                    R.resolveWith(E, [T]);
            },
        }),
        (T.ready.then = R.then),
        "complete" === E.readyState ||
        ("loading" !== E.readyState && !E.documentElement.doScroll)
            ? x.setTimeout(T.ready)
            : (E.addEventListener("DOMContentLoaded", B),
              x.addEventListener("load", B));
    var W = function (e, t, n, i, r, o, s) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === p(n))
                for (a in ((r = !0), n)) W(e, t, a, n[a], !0, o, s);
            else if (
                void 0 !== i &&
                ((r = !0),
                b(i) || (s = !0),
                (t = c
                    ? s
                        ? (t.call(e, i), null)
                        : ((c = t),
                          function (e, t, n) {
                              return c.call(T(e), n);
                          })
                    : t))
            )
                for (; a < l; a++)
                    t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return r ? e : c ? t.call(e) : l ? t(e[0], n) : o;
        },
        F = /^-ms-/,
        z = /-([a-z])/g;
    function U(e, t) {
        return t.toUpperCase();
    }
    function X(e) {
        return e.replace(F, "ms-").replace(z, U);
    }
    function V(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    }
    function Y() {
        this.expando = T.expando + Y.uid++;
    }
    (Y.uid = 1),
        (Y.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return (
                    t ||
                        ((t = {}),
                        V(e) &&
                            (e.nodeType
                                ? (e[this.expando] = t)
                                : Object.defineProperty(e, this.expando, {
                                      value: t,
                                      configurable: !0,
                                  }))),
                    t
                );
            },
            set: function (e, t, n) {
                var i,
                    r = this.cache(e);
                if ("string" == typeof t) r[X(t)] = n;
                else for (i in t) r[X(i)] = t[i];
                return r;
            },
            get: function (e, t) {
                return void 0 === t
                    ? this.cache(e)
                    : e[this.expando] && e[this.expando][X(t)];
            },
            access: function (e, t, n) {
                return void 0 === t ||
                    (t && "string" == typeof t && void 0 === n)
                    ? this.get(e, t)
                    : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t)
                            ? t.map(X)
                            : (t = X(t)) in i
                            ? [t]
                            : t.match(P) || []).length;
                        for (; n--; ) delete i[t[n]];
                    }
                    (void 0 !== t && !T.isEmptyObject(i)) ||
                        (e.nodeType
                            ? (e[this.expando] = void 0)
                            : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                e = e[this.expando];
                return void 0 !== e && !T.isEmptyObject(e);
            },
        });
    var Q = new Y(),
        K = new Y(),
        G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;
    function Z(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType)
            if (
                ((i = "data-" + t.replace(J, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(i)))
            ) {
                try {
                    n =
                        "true" === (r = n) ||
                        ("false" !== r &&
                            ("null" === r
                                ? null
                                : r === +r + ""
                                ? +r
                                : G.test(r)
                                ? JSON.parse(r)
                                : r));
                } catch (e) {}
                K.set(e, t, n);
            } else n = void 0;
        return n;
    }
    T.extend({
        hasData: function (e) {
            return K.hasData(e) || Q.hasData(e);
        },
        data: function (e, t, n) {
            return K.access(e, t, n);
        },
        removeData: function (e, t) {
            K.remove(e, t);
        },
        _data: function (e, t, n) {
            return Q.access(e, t, n);
        },
        _removeData: function (e, t) {
            Q.remove(e, t);
        },
    }),
        T.fn.extend({
            data: function (n, e) {
                var t,
                    i,
                    r,
                    o = this[0],
                    s = o && o.attributes;
                if (void 0 !== n)
                    return "object" == typeof n
                        ? this.each(function () {
                              K.set(this, n);
                          })
                        : W(
                              this,
                              function (e) {
                                  var t;
                                  return o && void 0 === e
                                      ? void 0 !== (t = K.get(o, n)) ||
                                        void 0 !== (t = Z(o, n))
                                          ? t
                                          : void 0
                                      : void this.each(function () {
                                            K.set(this, n, e);
                                        });
                              },
                              null,
                              e,
                              1 < arguments.length,
                              null,
                              !0
                          );
                if (
                    this.length &&
                    ((r = K.get(o)),
                    1 === o.nodeType && !Q.get(o, "hasDataAttrs"))
                ) {
                    for (t = s.length; t--; )
                        s[t] &&
                            0 === (i = s[t].name).indexOf("data-") &&
                            ((i = X(i.slice(5))), Z(o, i, r[i]));
                    Q.set(o, "hasDataAttrs", !0);
                }
                return r;
            },
            removeData: function (e) {
                return this.each(function () {
                    K.remove(this, e);
                });
            },
        }),
        T.extend({
            queue: function (e, t, n) {
                var i;
                if (e)
                    return (
                        (i = Q.get(e, (t = (t || "fx") + "queue"))),
                        n &&
                            (!i || Array.isArray(n)
                                ? (i = Q.access(e, t, T.makeArray(n)))
                                : i.push(n)),
                        i || []
                    );
            },
            dequeue: function (e, t) {
                var n = T.queue(e, (t = t || "fx")),
                    i = n.length,
                    r = n.shift(),
                    o = T._queueHooks(e, t);
                "inprogress" === r && ((r = n.shift()), i--),
                    r &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        r.call(
                            e,
                            function () {
                                T.dequeue(e, t);
                            },
                            o
                        )),
                    !i && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    Q.get(e, n) ||
                    Q.access(e, n, {
                        empty: T.Callbacks("once memory").add(function () {
                            Q.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        T.fn.extend({
            queue: function (t, n) {
                var e = 2;
                return (
                    "string" != typeof t && ((n = t), (t = "fx"), e--),
                    arguments.length < e
                        ? T.queue(this[0], t)
                        : void 0 === n
                        ? this
                        : this.each(function () {
                              var e = T.queue(this, t, n);
                              T._queueHooks(this, t),
                                  "fx" === t &&
                                      "inprogress" !== e[0] &&
                                      T.dequeue(this, t);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    T.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                function n() {
                    --r || o.resolveWith(s, [s]);
                }
                var i,
                    r = 1,
                    o = T.Deferred(),
                    s = this,
                    a = this.length;
                for (
                    "string" != typeof e && ((t = e), (e = void 0)),
                        e = e || "fx";
                    a--;

                )
                    (i = Q.get(s[a], e + "queueHooks")) &&
                        i.empty &&
                        (r++, i.empty.add(n));
                return n(), o.promise(t);
            },
        });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        ie = E.documentElement,
        re = function (e) {
            return T.contains(e.ownerDocument, e);
        },
        oe = { composed: !0 };
    ie.getRootNode &&
        (re = function (e) {
            return (
                T.contains(e.ownerDocument, e) ||
                e.getRootNode(oe) === e.ownerDocument
            );
        });
    var se = function (e, t) {
        return (
            "none" === (e = t || e).style.display ||
            ("" === e.style.display && re(e) && "none" === T.css(e, "display"))
        );
    };
    function ae(e, t, n, i) {
        var r,
            o,
            s = 20,
            a = i
                ? function () {
                      return i.cur();
                  }
                : function () {
                      return T.css(e, t, "");
                  },
            l = a(),
            c = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
            u =
                e.nodeType &&
                (T.cssNumber[t] || ("px" !== c && +l)) &&
                te.exec(T.css(e, t));
        if (u && u[3] !== c) {
            for (c = c || u[3], u = +(l /= 2) || 1; s--; )
                T.style(e, t, u + c),
                    (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
                    (u /= o);
            T.style(e, t, (u *= 2) + c), (n = n || []);
        }
        return (
            n &&
                ((u = +u || +l || 0),
                (r = n[1] ? u + (n[1] + 1) * n[2] : +n[2]),
                i && ((i.unit = c), (i.start = u), (i.end = r))),
            r
        );
    }
    var le = {};
    function ce(e, t) {
        for (var n, i, r, o, s, a = [], l = 0, c = e.length; l < c; l++)
            (i = e[l]).style &&
                ((n = i.style.display),
                t
                    ? ("none" === n &&
                          ((a[l] = Q.get(i, "display") || null),
                          a[l] || (i.style.display = "")),
                      "" === i.style.display &&
                          se(i) &&
                          (a[l] =
                              ((s = o = void 0),
                              (o = (r = i).ownerDocument),
                              (s = r.nodeName),
                              (r = le[s]) ||
                                  ((o = o.body.appendChild(o.createElement(s))),
                                  (r = T.css(o, "display")),
                                  o.parentNode.removeChild(o),
                                  (le[s] = r = "none" === r ? "block" : r)))))
                    : "none" !== n &&
                      ((a[l] = "none"), Q.set(i, "display", n)));
        for (l = 0; l < c; l++) null != a[l] && (e[l].style.display = a[l]);
        return e;
    }
    T.fn.extend({
        show: function () {
            return ce(this, !0);
        },
        hide: function () {
            return ce(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      se(this) ? T(this).show() : T(this).hide();
                  });
        },
    });
    var ue = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        fe = /^$|^module$|\/(?:java|ecma)script/i;
    (d = E.createDocumentFragment().appendChild(E.createElement("div"))),
        (h = E.createElement("input")).setAttribute("type", "radio"),
        h.setAttribute("checked", "checked"),
        h.setAttribute("name", "t"),
        d.appendChild(h),
        (y.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (d.innerHTML = "<textarea>x</textarea>"),
        (y.noCloneChecked = !!d.cloneNode(!0).lastChild.defaultValue),
        (d.innerHTML = "<option></option>"),
        (y.option = !!d.lastChild);
    var he = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
    };
    function pe(e, t) {
        var n =
            void 0 !== e.getElementsByTagName
                ? e.getElementsByTagName(t || "*")
                : void 0 !== e.querySelectorAll
                ? e.querySelectorAll(t || "*")
                : [];
        return void 0 === t || (t && k(e, t)) ? T.merge([e], n) : n;
    }
    function ge(e, t) {
        for (var n = 0, i = e.length; n < i; n++)
            Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
    }
    (he.tbody = he.tfoot = he.colgroup = he.caption = he.thead),
        (he.th = he.td),
        y.option ||
            (he.optgroup = he.option =
                [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;
    function ve(e, t, n, i, r) {
        for (
            var o,
                s,
                a,
                l,
                c,
                u = t.createDocumentFragment(),
                d = [],
                f = 0,
                h = e.length;
            f < h;
            f++
        )
            if ((o = e[f]) || 0 === o)
                if ("object" === p(o)) T.merge(d, o.nodeType ? [o] : o);
                else if (me.test(o)) {
                    for (
                        s = s || u.appendChild(t.createElement("div")),
                            a = (de.exec(o) || ["", ""])[1].toLowerCase(),
                            a = he[a] || he._default,
                            s.innerHTML = a[1] + T.htmlPrefilter(o) + a[2],
                            c = a[0];
                        c--;

                    )
                        s = s.lastChild;
                    T.merge(d, s.childNodes),
                        ((s = u.firstChild).textContent = "");
                } else d.push(t.createTextNode(o));
        for (u.textContent = "", f = 0; (o = d[f++]); )
            if (i && -1 < T.inArray(o, i)) r && r.push(o);
            else if (
                ((l = re(o)),
                (s = pe(u.appendChild(o), "script")),
                l && ge(s),
                n)
            )
                for (c = 0; (o = s[c++]); ) fe.test(o.type || "") && n.push(o);
        return u;
    }
    var ye = /^([^.]*)(?:\.(.+)|)/;
    function be() {
        return !0;
    }
    function _e() {
        return !1;
    }
    function we(e, t) {
        return (
            (e ===
                (function () {
                    try {
                        return E.activeElement;
                    } catch (e) {}
                })()) ==
            ("focus" === t)
        );
    }
    function xe(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t))
                xe(e, a, n, i, t[a], o);
            return e;
        }
        if (
            (null == i && null == r
                ? ((r = n), (i = n = void 0))
                : null == r &&
                  ("string" == typeof n
                      ? ((r = i), (i = void 0))
                      : ((r = i), (i = n), (n = void 0))),
            !1 === r)
        )
            r = _e;
        else if (!r) return e;
        return (
            1 === o &&
                ((s = r),
                ((r = function (e) {
                    return T().off(e), s.apply(this, arguments);
                }).guid = s.guid || (s.guid = T.guid++))),
            e.each(function () {
                T.event.add(this, t, r, i, n);
            })
        );
    }
    function Ee(e, r, o) {
        o
            ? (Q.set(e, r, !1),
              T.event.add(e, r, {
                  namespace: !1,
                  handler: function (e) {
                      var t,
                          n,
                          i = Q.get(this, r);
                      if (1 & e.isTrigger && this[r]) {
                          if (i.length)
                              (T.event.special[r] || {}).delegateType &&
                                  e.stopPropagation();
                          else if (
                              ((i = a.call(arguments)),
                              Q.set(this, r, i),
                              (t = o(this, r)),
                              this[r](),
                              i !== (n = Q.get(this, r)) || t
                                  ? Q.set(this, r, !1)
                                  : (n = {}),
                              i !== n)
                          )
                              return (
                                  e.stopImmediatePropagation(),
                                  e.preventDefault(),
                                  n && n.value
                              );
                      } else
                          i.length &&
                              (Q.set(this, r, {
                                  value: T.event.trigger(
                                      T.extend(i[0], T.Event.prototype),
                                      i.slice(1),
                                      this
                                  ),
                              }),
                              e.stopImmediatePropagation());
                  },
              }))
            : void 0 === Q.get(e, r) && T.event.add(e, r, be);
    }
    (T.event = {
        global: {},
        add: function (t, e, n, i, r) {
            var o,
                s,
                a,
                l,
                c,
                u,
                d,
                f,
                h,
                p = Q.get(t);
            if (V(t))
                for (
                    n.handler && ((n = (o = n).handler), (r = o.selector)),
                        r && T.find.matchesSelector(ie, r),
                        n.guid || (n.guid = T.guid++),
                        (a = p.events) || (a = p.events = Object.create(null)),
                        (s = p.handle) ||
                            (s = p.handle =
                                function (e) {
                                    return void 0 !== T &&
                                        T.event.triggered !== e.type
                                        ? T.event.dispatch.apply(t, arguments)
                                        : void 0;
                                }),
                        l = (e = (e || "").match(P) || [""]).length;
                    l--;

                )
                    (d = h = (c = ye.exec(e[l]) || [])[1]),
                        (f = (c[2] || "").split(".").sort()),
                        d &&
                            ((u = T.event.special[d] || {}),
                            (d = (r ? u.delegateType : u.bindType) || d),
                            (u = T.event.special[d] || {}),
                            (c = T.extend(
                                {
                                    type: d,
                                    origType: h,
                                    data: i,
                                    handler: n,
                                    guid: n.guid,
                                    selector: r,
                                    needsContext:
                                        r && T.expr.match.needsContext.test(r),
                                    namespace: f.join("."),
                                },
                                o
                            )),
                            (h = a[d]) ||
                                (((h = a[d] = []).delegateCount = 0),
                                (u.setup && !1 !== u.setup.call(t, i, f, s)) ||
                                    (t.addEventListener &&
                                        t.addEventListener(d, s))),
                            u.add &&
                                (u.add.call(t, c),
                                c.handler.guid || (c.handler.guid = n.guid)),
                            r ? h.splice(h.delegateCount++, 0, c) : h.push(c),
                            (T.event.global[d] = !0));
        },
        remove: function (e, t, n, i, r) {
            var o,
                s,
                a,
                l,
                c,
                u,
                d,
                f,
                h,
                p,
                g,
                m = Q.hasData(e) && Q.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(P) || [""]).length; c--; )
                    if (
                        ((h = g = (a = ye.exec(t[c]) || [])[1]),
                        (p = (a[2] || "").split(".").sort()),
                        h)
                    ) {
                        for (
                            d = T.event.special[h] || {},
                                f =
                                    l[
                                        (h =
                                            (i ? d.delegateType : d.bindType) ||
                                            h)
                                    ] || [],
                                a =
                                    a[2] &&
                                    new RegExp(
                                        "(^|\\.)" +
                                            p.join("\\.(?:.*\\.|)") +
                                            "(\\.|$)"
                                    ),
                                s = o = f.length;
                            o--;

                        )
                            (u = f[o]),
                                (!r && g !== u.origType) ||
                                    (n && n.guid !== u.guid) ||
                                    (a && !a.test(u.namespace)) ||
                                    (i &&
                                        i !== u.selector &&
                                        ("**" !== i || !u.selector)) ||
                                    (f.splice(o, 1),
                                    u.selector && f.delegateCount--,
                                    d.remove && d.remove.call(e, u));
                        s &&
                            !f.length &&
                            ((d.teardown &&
                                !1 !== d.teardown.call(e, p, m.handle)) ||
                                T.removeEvent(e, h, m.handle),
                            delete l[h]);
                    } else for (h in l) T.event.remove(e, h + t[c], n, i, !0);
                T.isEmptyObject(l) && Q.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                n,
                i,
                r,
                o,
                s = new Array(arguments.length),
                a = T.event.fix(e),
                l =
                    (Q.get(this, "events") || Object.create(null))[a.type] ||
                    [],
                e = T.event.special[a.type] || {};
            for (s[0] = a, t = 1; t < arguments.length; t++)
                s[t] = arguments[t];
            if (
                ((a.delegateTarget = this),
                !e.preDispatch || !1 !== e.preDispatch.call(this, a))
            ) {
                for (
                    o = T.event.handlers.call(this, a, l), t = 0;
                    (i = o[t++]) && !a.isPropagationStopped();

                )
                    for (
                        a.currentTarget = i.elem, n = 0;
                        (r = i.handlers[n++]) &&
                        !a.isImmediatePropagationStopped();

                    )
                        (a.rnamespace &&
                            !1 !== r.namespace &&
                            !a.rnamespace.test(r.namespace)) ||
                            ((a.handleObj = r),
                            (a.data = r.data),
                            void 0 !==
                                (r = (
                                    (T.event.special[r.origType] || {})
                                        .handle || r.handler
                                ).apply(i.elem, s)) &&
                                !1 === (a.result = r) &&
                                (a.preventDefault(), a.stopPropagation()));
                return e.postDispatch && e.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function (e, t) {
            var n,
                i,
                r,
                o,
                s,
                a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (
                        1 === c.nodeType &&
                        ("click" !== e.type || !0 !== c.disabled)
                    ) {
                        for (o = [], s = {}, n = 0; n < l; n++)
                            void 0 === s[(r = (i = t[n]).selector + " ")] &&
                                (s[r] = i.needsContext
                                    ? -1 < T(r, this).index(c)
                                    : T.find(r, this, null, [c]).length),
                                s[r] && o.push(i);
                        o.length && a.push({ elem: c, handlers: o });
                    }
            return (
                (c = this),
                l < t.length && a.push({ elem: c, handlers: t.slice(l) }),
                a
            );
        },
        addProp: function (t, e) {
            Object.defineProperty(T.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: b(e)
                    ? function () {
                          if (this.originalEvent) return e(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[t];
                      },
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e,
                    });
                },
            });
        },
        fix: function (e) {
            return e[T.expando] ? e : new T.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function (e) {
                    e = this || e;
                    return (
                        ue.test(e.type) &&
                            e.click &&
                            k(e, "input") &&
                            Ee(e, "click", be),
                        !1
                    );
                },
                trigger: function (e) {
                    e = this || e;
                    return (
                        ue.test(e.type) &&
                            e.click &&
                            k(e, "input") &&
                            Ee(e, "click"),
                        !0
                    );
                },
                _default: function (e) {
                    e = e.target;
                    return (
                        (ue.test(e.type) &&
                            e.click &&
                            k(e, "input") &&
                            Q.get(e, "click")) ||
                        k(e, "a")
                    );
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result &&
                        e.originalEvent &&
                        (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (T.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (T.Event = function (e, t) {
            if (!(this instanceof T.Event)) return new T.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                      e.defaultPrevented ||
                      (void 0 === e.defaultPrevented && !1 === e.returnValue)
                          ? be
                          : _e),
                  (this.target =
                      e.target && 3 === e.target.nodeType
                          ? e.target.parentNode
                          : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && T.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[T.expando] = !0);
        }),
        (T.Event.prototype = {
            constructor: T.Event,
            isDefaultPrevented: _e,
            isPropagationStopped: _e,
            isImmediatePropagationStopped: _e,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = be),
                    e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = be),
                    e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = be),
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation();
            },
        }),
        T.each(
            {
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
                char: !0,
                code: !0,
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
                which: !0,
            },
            T.event.addProp
        ),
        T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            T.event.special[e] = {
                setup: function () {
                    return Ee(this, e, we), !1;
                },
                trigger: function () {
                    return Ee(this, e), !0;
                },
                _default: function () {
                    return !0;
                },
                delegateType: t,
            };
        }),
        T.each(
            {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
            },
            function (e, r) {
                T.event.special[e] = {
                    delegateType: r,
                    bindType: r,
                    handle: function (e) {
                        var t,
                            n = e.relatedTarget,
                            i = e.handleObj;
                        return (
                            (n && (n === this || T.contains(this, n))) ||
                                ((e.type = i.origType),
                                (t = i.handler.apply(this, arguments)),
                                (e.type = r)),
                            t
                        );
                    },
                };
            }
        ),
        T.fn.extend({
            on: function (e, t, n, i) {
                return xe(this, e, t, n, i);
            },
            one: function (e, t, n, i) {
                return xe(this, e, t, n, i, 1);
            },
            off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)
                    return (
                        (i = e.handleObj),
                        T(e.delegateTarget).off(
                            i.namespace
                                ? i.origType + "." + i.namespace
                                : i.origType,
                            i.selector,
                            i.handler
                        ),
                        this
                    );
                if ("object" != typeof e)
                    return (
                        (!1 !== t && "function" != typeof t) ||
                            ((n = t), (t = void 0)),
                        !1 === n && (n = _e),
                        this.each(function () {
                            T.event.remove(this, e, n, t);
                        })
                    );
                for (r in e) this.off(r, t, e[r]);
                return this;
            },
        });
    var Te = /<script|<style|<link/i,
        Ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function ke(e, t) {
        return (
            (k(e, "table") &&
                k(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                T(e).children("tbody")[0]) ||
            e
        );
    }
    function Se(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function De(e) {
        return (
            "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
            e
        );
    }
    function Le(e, t) {
        var n, i, r, o;
        if (1 === t.nodeType) {
            if (Q.hasData(e) && (o = Q.get(e).events))
                for (r in (Q.remove(t, "handle events"), o))
                    for (n = 0, i = o[r].length; n < i; n++)
                        T.event.add(t, r, o[r][n]);
            K.hasData(e) &&
                ((e = K.access(e)), (e = T.extend({}, e)), K.set(t, e));
        }
    }
    function Oe(n, i, r, o) {
        i = m(i);
        var e,
            t,
            s,
            a,
            l,
            c,
            u = 0,
            d = n.length,
            f = d - 1,
            h = i[0],
            p = b(h);
        if (p || (1 < d && "string" == typeof h && !y.checkClone && Ce.test(h)))
            return n.each(function (e) {
                var t = n.eq(e);
                p && (i[0] = h.call(this, e, t.html())), Oe(t, i, r, o);
            });
        if (
            d &&
            ((t = (e = ve(i, n[0].ownerDocument, !1, n, o)).firstChild),
            1 === e.childNodes.length && (e = t),
            t || o)
        ) {
            for (a = (s = T.map(pe(e, "script"), Se)).length; u < d; u++)
                (l = e),
                    u !== f &&
                        ((l = T.clone(l, !0, !0)),
                        a && T.merge(s, pe(l, "script"))),
                    r.call(n[u], l, u);
            if (a)
                for (
                    c = s[s.length - 1].ownerDocument, T.map(s, De), u = 0;
                    u < a;
                    u++
                )
                    (l = s[u]),
                        fe.test(l.type || "") &&
                            !Q.access(l, "globalEval") &&
                            T.contains(c, l) &&
                            (l.src && "module" !== (l.type || "").toLowerCase()
                                ? T._evalUrl &&
                                  !l.noModule &&
                                  T._evalUrl(
                                      l.src,
                                      {
                                          nonce:
                                              l.nonce ||
                                              l.getAttribute("nonce"),
                                      },
                                      c
                                  )
                                : _(l.textContent.replace(Ae, ""), l, c));
        }
        return n;
    }
    function Ne(e, t, n) {
        for (var i, r = t ? T.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
            n || 1 !== i.nodeType || T.cleanData(pe(i)),
                i.parentNode &&
                    (n && re(i) && ge(pe(i, "script")),
                    i.parentNode.removeChild(i));
        return e;
    }
    T.extend({
        htmlPrefilter: function (e) {
            return e;
        },
        clone: function (e, t, n) {
            var i,
                r,
                o,
                s,
                a,
                l,
                c,
                u = e.cloneNode(!0),
                d = re(e);
            if (
                !(
                    y.noCloneChecked ||
                    (1 !== e.nodeType && 11 !== e.nodeType) ||
                    T.isXMLDoc(e)
                )
            )
                for (s = pe(u), i = 0, r = (o = pe(e)).length; i < r; i++)
                    (a = o[i]),
                        (l = s[i]),
                        (c = void 0),
                        "input" === (c = l.nodeName.toLowerCase()) &&
                        ue.test(a.type)
                            ? (l.checked = a.checked)
                            : ("input" !== c && "textarea" !== c) ||
                              (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (
                        o = o || pe(e), s = s || pe(u), i = 0, r = o.length;
                        i < r;
                        i++
                    )
                        Le(o[i], s[i]);
                else Le(e, u);
            return (
                0 < (s = pe(u, "script")).length &&
                    ge(s, !d && pe(e, "script")),
                u
            );
        },
        cleanData: function (e) {
            for (
                var t, n, i, r = T.event.special, o = 0;
                void 0 !== (n = e[o]);
                o++
            )
                if (V(n)) {
                    if ((t = n[Q.expando])) {
                        if (t.events)
                            for (i in t.events)
                                r[i]
                                    ? T.event.remove(n, i)
                                    : T.removeEvent(n, i, t.handle);
                        n[Q.expando] = void 0;
                    }
                    n[K.expando] && (n[K.expando] = void 0);
                }
        },
    }),
        T.fn.extend({
            detach: function (e) {
                return Ne(this, e, !0);
            },
            remove: function (e) {
                return Ne(this, e);
            },
            text: function (e) {
                return W(
                    this,
                    function (e) {
                        return void 0 === e
                            ? T.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType &&
                                      11 !== this.nodeType &&
                                      9 !== this.nodeType) ||
                                      (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return Oe(this, arguments, function (e) {
                    (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        ke(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return Oe(this, arguments, function (e) {
                    var t;
                    (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (t = ke(this, e)).insertBefore(e, t.firstChild);
                });
            },
            before: function () {
                return Oe(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return Oe(this, arguments, function (e) {
                    this.parentNode &&
                        this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType &&
                        (T.cleanData(pe(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return T.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return W(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === e && 1 === t.nodeType)
                            return t.innerHTML;
                        if (
                            "string" == typeof e &&
                            !Te.test(e) &&
                            !he[(de.exec(e) || ["", ""])[1].toLowerCase()]
                        ) {
                            e = T.htmlPrefilter(e);
                            try {
                                for (; n < i; n++)
                                    1 === (t = this[n] || {}).nodeType &&
                                        (T.cleanData(pe(t, !1)),
                                        (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var n = [];
                return Oe(
                    this,
                    arguments,
                    function (e) {
                        var t = this.parentNode;
                        T.inArray(this, n) < 0 &&
                            (T.cleanData(pe(this)),
                            t && t.replaceChild(e, this));
                    },
                    n
                );
            },
        }),
        T.each(
            {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
            },
            function (e, s) {
                T.fn[e] = function (e) {
                    for (
                        var t, n = [], i = T(e), r = i.length - 1, o = 0;
                        o <= r;
                        o++
                    )
                        (t = o === r ? this : this.clone(!0)),
                            T(i[o])[s](t),
                            l.apply(n, t.get());
                    return this.pushStack(n);
                };
            }
        );
    function je(e, t, n) {
        var i,
            r = {};
        for (i in t) (r[i] = e.style[i]), (e.style[i] = t[i]);
        for (i in ((n = n.call(e)), t)) e.style[i] = r[i];
        return n;
    }
    var Ie,
        Pe,
        He,
        Me,
        qe,
        $e,
        Re,
        Be,
        We = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Fe = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t = !t || !t.opener ? x : t).getComputedStyle(e);
        },
        ze = new RegExp(ne.join("|"), "i");
    function Ue() {
        var e;
        Be &&
            ((Re.style.cssText =
                "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (Be.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            ie.appendChild(Re).appendChild(Be),
            (e = x.getComputedStyle(Be)),
            (Ie = "1%" !== e.top),
            ($e = 12 === Xe(e.marginLeft)),
            (Be.style.right = "60%"),
            (Me = 36 === Xe(e.right)),
            (Pe = 36 === Xe(e.width)),
            (Be.style.position = "absolute"),
            (He = 12 === Xe(Be.offsetWidth / 3)),
            ie.removeChild(Re),
            (Be = null));
    }
    function Xe(e) {
        return Math.round(parseFloat(e));
    }
    function Ve(e, t, n) {
        var i,
            r,
            o = e.style;
        return (
            (n = n || Fe(e)) &&
                ("" !== (r = n.getPropertyValue(t) || n[t]) ||
                    re(e) ||
                    (r = T.style(e, t)),
                !y.pixelBoxStyles() &&
                    We.test(r) &&
                    ze.test(t) &&
                    ((i = o.width),
                    (e = o.minWidth),
                    (t = o.maxWidth),
                    (o.minWidth = o.maxWidth = o.width = r),
                    (r = n.width),
                    (o.width = i),
                    (o.minWidth = e),
                    (o.maxWidth = t))),
            void 0 !== r ? r + "" : r
        );
    }
    function Ye(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    (Re = E.createElement("div")),
        (Be = E.createElement("div")).style &&
            ((Be.style.backgroundClip = "content-box"),
            (Be.cloneNode(!0).style.backgroundClip = ""),
            (y.clearCloneStyle = "content-box" === Be.style.backgroundClip),
            T.extend(y, {
                boxSizingReliable: function () {
                    return Ue(), Pe;
                },
                pixelBoxStyles: function () {
                    return Ue(), Me;
                },
                pixelPosition: function () {
                    return Ue(), Ie;
                },
                reliableMarginLeft: function () {
                    return Ue(), $e;
                },
                scrollboxSize: function () {
                    return Ue(), He;
                },
                reliableTrDimensions: function () {
                    var e, t, n;
                    return (
                        null == qe &&
                            ((e = E.createElement("table")),
                            (t = E.createElement("tr")),
                            (n = E.createElement("div")),
                            (e.style.cssText =
                                "position:absolute;left:-11111px;border-collapse:separate"),
                            (t.style.cssText = "border:1px solid"),
                            (t.style.height = "1px"),
                            (n.style.height = "9px"),
                            (n.style.display = "block"),
                            ie.appendChild(e).appendChild(t).appendChild(n),
                            (n = x.getComputedStyle(t)),
                            (qe =
                                parseInt(n.height, 10) +
                                    parseInt(n.borderTopWidth, 10) +
                                    parseInt(n.borderBottomWidth, 10) ===
                                t.offsetHeight),
                            ie.removeChild(e)),
                        qe
                    );
                },
            }));
    var Qe = ["Webkit", "Moz", "ms"],
        Ke = E.createElement("div").style,
        Ge = {};
    function Je(e) {
        var t = T.cssProps[e] || Ge[e];
        return (
            t ||
            (e in Ke
                ? e
                : (Ge[e] =
                      (function (e) {
                          for (
                              var t = e[0].toUpperCase() + e.slice(1),
                                  n = Qe.length;
                              n--;

                          )
                              if ((e = Qe[n] + t) in Ke) return e;
                      })(e) || e))
        );
    }
    var Ze = /^(none|table(?!-c[ea]).+)/,
        et = /^--/,
        tt = { position: "absolute", visibility: "hidden", display: "block" },
        nt = { letterSpacing: "0", fontWeight: "400" };
    function it(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function rt(e, t, n, i, r, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2)
            "margin" === n && (l += T.css(e, n + ne[s], !0, r)),
                i
                    ? ("content" === n &&
                          (l -= T.css(e, "padding" + ne[s], !0, r)),
                      "margin" !== n &&
                          (l -= T.css(e, "border" + ne[s] + "Width", !0, r)))
                    : ((l += T.css(e, "padding" + ne[s], !0, r)),
                      "padding" !== n
                          ? (l += T.css(e, "border" + ne[s] + "Width", !0, r))
                          : (a += T.css(e, "border" + ne[s] + "Width", !0, r)));
        return (
            !i &&
                0 <= o &&
                (l +=
                    Math.max(
                        0,
                        Math.ceil(
                            e["offset" + t[0].toUpperCase() + t.slice(1)] -
                                o -
                                l -
                                a -
                                0.5
                        )
                    ) || 0),
            l
        );
    }
    function ot(e, t, n) {
        var i = Fe(e),
            r =
                (!y.boxSizingReliable() || n) &&
                "border-box" === T.css(e, "boxSizing", !1, i),
            o = r,
            s = Ve(e, t, i),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (We.test(s)) {
            if (!n) return s;
            s = "auto";
        }
        return (
            ((!y.boxSizingReliable() && r) ||
                (!y.reliableTrDimensions() && k(e, "tr")) ||
                "auto" === s ||
                (!parseFloat(s) && "inline" === T.css(e, "display", !1, i))) &&
                e.getClientRects().length &&
                ((r = "border-box" === T.css(e, "boxSizing", !1, i)),
                (o = a in e) && (s = e[a])),
            (s = parseFloat(s) || 0) +
                rt(e, t, n || (r ? "border" : "content"), o, i, s) +
                "px"
        );
    }
    function st(e, t, n, i, r) {
        return new st.prototype.init(e, t, n, i, r);
    }
    T.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        e = Ve(e, "opacity");
                        return "" === e ? "1" : e;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r,
                    o,
                    s,
                    a = X(t),
                    l = et.test(t),
                    c = e.style;
                if (
                    (l || (t = Je(a)),
                    (s = T.cssHooks[t] || T.cssHooks[a]),
                    void 0 === n)
                )
                    return s && "get" in s && void 0 !== (r = s.get(e, !1, i))
                        ? r
                        : c[t];
                "string" === (o = typeof n) &&
                    (r = te.exec(n)) &&
                    r[1] &&
                    ((n = ae(e, t, r)), (o = "number")),
                    null != n &&
                        n == n &&
                        ("number" !== o ||
                            l ||
                            (n += (r && r[3]) || (T.cssNumber[a] ? "" : "px")),
                        y.clearCloneStyle ||
                            "" !== n ||
                            0 !== t.indexOf("background") ||
                            (c[t] = "inherit"),
                        (s && "set" in s && void 0 === (n = s.set(e, n, i))) ||
                            (l ? c.setProperty(t, n) : (c[t] = n)));
            }
        },
        css: function (e, t, n, i) {
            var r,
                o = X(t);
            return (
                et.test(t) || (t = Je(o)),
                "normal" ===
                    (r =
                        void 0 ===
                        (r =
                            (o = T.cssHooks[t] || T.cssHooks[o]) && "get" in o
                                ? o.get(e, !0, n)
                                : r)
                            ? Ve(e, t, i)
                            : r) &&
                    t in nt &&
                    (r = nt[t]),
                "" === n || n
                    ? ((t = parseFloat(r)),
                      !0 === n || isFinite(t) ? t || 0 : r)
                    : r
            );
        },
    }),
        T.each(["height", "width"], function (e, a) {
            T.cssHooks[a] = {
                get: function (e, t, n) {
                    if (t)
                        return !Ze.test(T.css(e, "display")) ||
                            (e.getClientRects().length &&
                                e.getBoundingClientRect().width)
                            ? ot(e, a, n)
                            : je(e, tt, function () {
                                  return ot(e, a, n);
                              });
                },
                set: function (e, t, n) {
                    var i,
                        r = Fe(e),
                        o = !y.scrollboxSize() && "absolute" === r.position,
                        s =
                            (o || n) &&
                            "border-box" === T.css(e, "boxSizing", !1, r),
                        n = n ? rt(e, a, n, s, r) : 0;
                    return (
                        s &&
                            o &&
                            (n -= Math.ceil(
                                e["offset" + a[0].toUpperCase() + a.slice(1)] -
                                    parseFloat(r[a]) -
                                    rt(e, a, "border", !1, r) -
                                    0.5
                            )),
                        n &&
                            (i = te.exec(t)) &&
                            "px" !== (i[3] || "px") &&
                            ((e.style[a] = t), (t = T.css(e, a))),
                        it(0, t, n)
                    );
                },
            };
        }),
        (T.cssHooks.marginLeft = Ye(y.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(Ve(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            je(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        T.each({ margin: "", padding: "", border: "Width" }, function (r, o) {
            (T.cssHooks[r + o] = {
                expand: function (e) {
                    for (
                        var t = 0,
                            n = {},
                            i = "string" == typeof e ? e.split(" ") : [e];
                        t < 4;
                        t++
                    )
                        n[r + ne[t] + o] = i[t] || i[t - 2] || i[0];
                    return n;
                },
            }),
                "margin" !== r && (T.cssHooks[r + o].set = it);
        }),
        T.fn.extend({
            css: function (e, t) {
                return W(
                    this,
                    function (e, t, n) {
                        var i,
                            r,
                            o = {},
                            s = 0;
                        if (Array.isArray(t)) {
                            for (i = Fe(e), r = t.length; s < r; s++)
                                o[t[s]] = T.css(e, t[s], !1, i);
                            return o;
                        }
                        return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        ((T.Tween = st).prototype = {
            constructor: st,
            init: function (e, t, n, i, r, o) {
                (this.elem = e),
                    (this.prop = n),
                    (this.easing = r || T.easing._default),
                    (this.options = t),
                    (this.start = this.now = this.cur()),
                    (this.end = i),
                    (this.unit = o || (T.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = st.propHooks[this.prop];
                return (e && e.get ? e : st.propHooks._default).get(this);
            },
            run: function (e) {
                var t,
                    n = st.propHooks[this.prop];
                return (
                    this.options.duration
                        ? (this.pos = t =
                              T.easing[this.easing](
                                  e,
                                  this.options.duration * e,
                                  0,
                                  1,
                                  this.options.duration
                              ))
                        : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step &&
                        this.options.step.call(this.elem, this.now, this),
                    (n && n.set ? n : st.propHooks._default).set(this),
                    this
                );
            },
        }),
        (st.prototype.init.prototype = st.prototype),
        (st.propHooks = {
            _default: {
                get: function (e) {
                    return 1 !== e.elem.nodeType ||
                        (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                        ? e.elem[e.prop]
                        : (e = T.css(e.elem, e.prop, "")) && "auto" !== e
                        ? e
                        : 0;
                },
                set: function (e) {
                    T.fx.step[e.prop]
                        ? T.fx.step[e.prop](e)
                        : 1 !== e.elem.nodeType ||
                          (!T.cssHooks[e.prop] &&
                              null == e.elem.style[Je(e.prop)])
                        ? (e.elem[e.prop] = e.now)
                        : T.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }),
        (st.propHooks.scrollTop = st.propHooks.scrollLeft =
            {
                set: function (e) {
                    e.elem.nodeType &&
                        e.elem.parentNode &&
                        (e.elem[e.prop] = e.now);
                },
            }),
        (T.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (T.fx = st.prototype.init),
        (T.fx.step = {});
    var at,
        lt,
        ct = /^(?:toggle|show|hide)$/,
        ut = /queueHooks$/;
    function dt() {
        lt &&
            (!1 === E.hidden && x.requestAnimationFrame
                ? x.requestAnimationFrame(dt)
                : x.setTimeout(dt, T.fx.interval),
            T.fx.tick());
    }
    function ft() {
        return (
            x.setTimeout(function () {
                at = void 0;
            }),
            (at = Date.now())
        );
    }
    function ht(e, t) {
        var n,
            i = 0,
            r = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t)
            r["margin" + (n = ne[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function pt(e, t, n) {
        for (
            var i,
                r = (gt.tweeners[t] || []).concat(gt.tweeners["*"]),
                o = 0,
                s = r.length;
            o < s;
            o++
        )
            if ((i = r[o].call(n, t, e))) return i;
    }
    function gt(r, e, t) {
        var n,
            o,
            i = 0,
            s = gt.prefilters.length,
            a = T.Deferred().always(function () {
                delete l.elem;
            }),
            l = function () {
                if (o) return !1;
                for (
                    var e = at || ft(),
                        e = Math.max(0, c.startTime + c.duration - e),
                        t = 1 - (e / c.duration || 0),
                        n = 0,
                        i = c.tweens.length;
                    n < i;
                    n++
                )
                    c.tweens[n].run(t);
                return (
                    a.notifyWith(r, [c, t, e]),
                    t < 1 && i
                        ? e
                        : (i || a.notifyWith(r, [c, 1, 0]),
                          a.resolveWith(r, [c]),
                          !1)
                );
            },
            c = a.promise({
                elem: r,
                props: T.extend({}, e),
                opts: T.extend(
                    !0,
                    { specialEasing: {}, easing: T.easing._default },
                    t
                ),
                originalProperties: e,
                originalOptions: t,
                startTime: at || ft(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    e = T.Tween(
                        r,
                        c.opts,
                        e,
                        t,
                        c.opts.specialEasing[e] || c.opts.easing
                    );
                    return c.tweens.push(e), e;
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; t < n; t++) c.tweens[t].run(1);
                    return (
                        e
                            ? (a.notifyWith(r, [c, 1, 0]),
                              a.resolveWith(r, [c, e]))
                            : a.rejectWith(r, [c, e]),
                        this
                    );
                },
            }),
            u = c.props;
        for (
            !(function (e, t) {
                var n, i, r, o, s;
                for (n in e)
                    if (
                        ((r = t[(i = X(n))]),
                        (o = e[n]),
                        Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
                        n !== i && ((e[i] = o), delete e[n]),
                        (s = T.cssHooks[i]) && ("expand" in s))
                    )
                        for (n in ((o = s.expand(o)), delete e[i], o))
                            (n in e) || ((e[n] = o[n]), (t[n] = r));
                    else t[i] = r;
            })(u, c.opts.specialEasing);
            i < s;
            i++
        )
            if ((n = gt.prefilters[i].call(c, r, u, c.opts)))
                return (
                    b(n.stop) &&
                        (T._queueHooks(c.elem, c.opts.queue).stop =
                            n.stop.bind(n)),
                    n
                );
        return (
            T.map(u, pt, c),
            b(c.opts.start) && c.opts.start.call(r, c),
            c
                .progress(c.opts.progress)
                .done(c.opts.done, c.opts.complete)
                .fail(c.opts.fail)
                .always(c.opts.always),
            T.fx.timer(T.extend(l, { elem: r, anim: c, queue: c.opts.queue })),
            c
        );
    }
    (T.Animation = T.extend(gt, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return ae(n.elem, e, te.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            for (
                var n,
                    i = 0,
                    r = (e = b(e) ? ((t = e), ["*"]) : e.match(P)).length;
                i < r;
                i++
            )
                (n = e[i]),
                    (gt.tweeners[n] = gt.tweeners[n] || []),
                    gt.tweeners[n].unshift(t);
        },
        prefilters: [
            function (e, t, n) {
                var i,
                    r,
                    o,
                    s,
                    a,
                    l,
                    c,
                    u = "width" in t || "height" in t,
                    d = this,
                    f = {},
                    h = e.style,
                    p = e.nodeType && se(e),
                    g = Q.get(e, "fxshow");
                for (i in (n.queue ||
                    (null == (s = T._queueHooks(e, "fx")).unqueued &&
                        ((s.unqueued = 0),
                        (a = s.empty.fire),
                        (s.empty.fire = function () {
                            s.unqueued || a();
                        })),
                    s.unqueued++,
                    d.always(function () {
                        d.always(function () {
                            s.unqueued--,
                                T.queue(e, "fx").length || s.empty.fire();
                        });
                    })),
                t))
                    if (((r = t[i]), ct.test(r))) {
                        if (
                            (delete t[i],
                            (o = o || "toggle" === r),
                            r === (p ? "hide" : "show"))
                        ) {
                            if ("show" !== r || !g || void 0 === g[i]) continue;
                            p = !0;
                        }
                        f[i] = (g && g[i]) || T.style(e, i);
                    }
                if ((l = !T.isEmptyObject(t)) || !T.isEmptyObject(f))
                    for (i in (u &&
                        1 === e.nodeType &&
                        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                        null == (c = g && g.display) &&
                            (c = Q.get(e, "display")),
                        "none" === (u = T.css(e, "display")) &&
                            (c
                                ? (u = c)
                                : (ce([e], !0),
                                  (c = e.style.display || c),
                                  (u = T.css(e, "display")),
                                  ce([e]))),
                        ("inline" === u ||
                            ("inline-block" === u && null != c)) &&
                            "none" === T.css(e, "float") &&
                            (l ||
                                (d.done(function () {
                                    h.display = c;
                                }),
                                null == c &&
                                    ((u = h.display),
                                    (c = "none" === u ? "" : u))),
                            (h.display = "inline-block"))),
                    n.overflow &&
                        ((h.overflow = "hidden"),
                        d.always(function () {
                            (h.overflow = n.overflow[0]),
                                (h.overflowX = n.overflow[1]),
                                (h.overflowY = n.overflow[2]);
                        })),
                    (l = !1),
                    f))
                        l ||
                            (g
                                ? "hidden" in g && (p = g.hidden)
                                : (g = Q.access(e, "fxshow", { display: c })),
                            o && (g.hidden = !p),
                            p && ce([e], !0),
                            d.done(function () {
                                for (i in (p || ce([e]),
                                Q.remove(e, "fxshow"),
                                f))
                                    T.style(e, i, f[i]);
                            })),
                            (l = pt(p ? g[i] : 0, i, d)),
                            i in g ||
                                ((g[i] = l.start),
                                p && ((l.end = l.start), (l.start = 0)));
            },
        ],
        prefilter: function (e, t) {
            t ? gt.prefilters.unshift(e) : gt.prefilters.push(e);
        },
    })),
        (T.speed = function (e, t, n) {
            var i =
                e && "object" == typeof e
                    ? T.extend({}, e)
                    : {
                          complete: n || (!n && t) || (b(e) && e),
                          duration: e,
                          easing: (n && t) || (t && !b(t) && t),
                      };
            return (
                T.fx.off
                    ? (i.duration = 0)
                    : "number" != typeof i.duration &&
                      (i.duration in T.fx.speeds
                          ? (i.duration = T.fx.speeds[i.duration])
                          : (i.duration = T.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                    b(i.old) && i.old.call(this),
                        i.queue && T.dequeue(this, i.queue);
                }),
                i
            );
        }),
        T.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(se)
                    .css("opacity", 0)
                    .show()
                    .end()
                    .animate({ opacity: t }, e, n, i);
            },
            animate: function (t, e, n, i) {
                var r = T.isEmptyObject(t),
                    o = T.speed(e, n, i),
                    i = function () {
                        var e = gt(this, T.extend({}, t), o);
                        (r || Q.get(this, "finish")) && e.stop(!0);
                    };
                return (
                    (i.finish = i),
                    r || !1 === o.queue ? this.each(i) : this.queue(o.queue, i)
                );
            },
            stop: function (r, e, o) {
                function s(e) {
                    var t = e.stop;
                    delete e.stop, t(o);
                }
                return (
                    "string" != typeof r && ((o = e), (e = r), (r = void 0)),
                    e && this.queue(r || "fx", []),
                    this.each(function () {
                        var e = !0,
                            t = null != r && r + "queueHooks",
                            n = T.timers,
                            i = Q.get(this);
                        if (t) i[t] && i[t].stop && s(i[t]);
                        else
                            for (t in i)
                                i[t] && i[t].stop && ut.test(t) && s(i[t]);
                        for (t = n.length; t--; )
                            n[t].elem !== this ||
                                (null != r && n[t].queue !== r) ||
                                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
                        (!e && o) || T.dequeue(this, r);
                    })
                );
            },
            finish: function (s) {
                return (
                    !1 !== s && (s = s || "fx"),
                    this.each(function () {
                        var e,
                            t = Q.get(this),
                            n = t[s + "queue"],
                            i = t[s + "queueHooks"],
                            r = T.timers,
                            o = n ? n.length : 0;
                        for (
                            t.finish = !0,
                                T.queue(this, s, []),
                                i && i.stop && i.stop.call(this, !0),
                                e = r.length;
                            e--;

                        )
                            r[e].elem === this &&
                                r[e].queue === s &&
                                (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; e < o; e++)
                            n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish;
                    })
                );
            },
        }),
        T.each(["toggle", "show", "hide"], function (e, i) {
            var r = T.fn[i];
            T.fn[i] = function (e, t, n) {
                return null == e || "boolean" == typeof e
                    ? r.apply(this, arguments)
                    : this.animate(ht(i, !0), e, t, n);
            };
        }),
        T.each(
            {
                slideDown: ht("show"),
                slideUp: ht("hide"),
                slideToggle: ht("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
            },
            function (e, i) {
                T.fn[e] = function (e, t, n) {
                    return this.animate(i, e, t, n);
                };
            }
        ),
        (T.timers = []),
        (T.fx.tick = function () {
            var e,
                t = 0,
                n = T.timers;
            for (at = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || T.fx.stop(), (at = void 0);
        }),
        (T.fx.timer = function (e) {
            T.timers.push(e), T.fx.start();
        }),
        (T.fx.interval = 13),
        (T.fx.start = function () {
            lt || ((lt = !0), dt());
        }),
        (T.fx.stop = function () {
            lt = null;
        }),
        (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (T.fn.delay = function (i, e) {
            return (
                (i = (T.fx && T.fx.speeds[i]) || i),
                this.queue((e = e || "fx"), function (e, t) {
                    var n = x.setTimeout(e, i);
                    t.stop = function () {
                        x.clearTimeout(n);
                    };
                })
            );
        }),
        (d = E.createElement("input")),
        (ee = E.createElement("select").appendChild(E.createElement("option"))),
        (d.type = "checkbox"),
        (y.checkOn = "" !== d.value),
        (y.optSelected = ee.selected),
        ((d = E.createElement("input")).value = "t"),
        (d.type = "radio"),
        (y.radioValue = "t" === d.value);
    var mt,
        vt = T.expr.attrHandle;
    T.fn.extend({
        attr: function (e, t) {
            return W(this, T.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
            return this.each(function () {
                T.removeAttr(this, e);
            });
        },
    }),
        T.extend({
            attr: function (e, t, n) {
                var i,
                    r,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return void 0 === e.getAttribute
                        ? T.prop(e, t, n)
                        : ((1 === o && T.isXMLDoc(e)) ||
                              (r =
                                  T.attrHooks[t.toLowerCase()] ||
                                  (T.expr.match.bool.test(t) ? mt : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void T.removeAttr(e, t)
                                  : r &&
                                    "set" in r &&
                                    void 0 !== (i = r.set(e, n, t))
                                  ? i
                                  : (e.setAttribute(t, n + ""), n)
                              : !(
                                    r &&
                                    "get" in r &&
                                    null !== (i = r.get(e, t))
                                ) && null == (i = T.find.attr(e, t))
                              ? void 0
                              : i);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!y.radioValue && "radio" === t && k(e, "input")) {
                            var n = e.value;
                            return (
                                e.setAttribute("type", t), n && (e.value = n), t
                            );
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    i = 0,
                    r = t && t.match(P);
                if (r && 1 === e.nodeType)
                    for (; (n = r[i++]); ) e.removeAttribute(n);
            },
        }),
        (mt = {
            set: function (e, t, n) {
                return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var s = vt[t] || T.find.attr;
            vt[t] = function (e, t, n) {
                var i,
                    r,
                    o = t.toLowerCase();
                return (
                    n ||
                        ((r = vt[o]),
                        (vt[o] = i),
                        (i = null != s(e, t, n) ? o : null),
                        (vt[o] = r)),
                    i
                );
            };
        });
    var yt = /^(?:input|select|textarea|button)$/i,
        bt = /^(?:a|area)$/i;
    function _t(e) {
        return (e.match(P) || []).join(" ");
    }
    function wt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function xt(e) {
        return Array.isArray(e)
            ? e
            : ("string" == typeof e && e.match(P)) || [];
    }
    T.fn.extend({
        prop: function (e, t) {
            return W(this, T.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[T.propFix[e] || e];
            });
        },
    }),
        T.extend({
            prop: function (e, t, n) {
                var i,
                    r,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && T.isXMLDoc(e)) ||
                            ((t = T.propFix[t] || t), (r = T.propHooks[t])),
                        void 0 !== n
                            ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                                ? i
                                : (e[t] = n)
                            : r && "get" in r && null !== (i = r.get(e, t))
                            ? i
                            : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = T.find.attr(e, "tabindex");
                        return t
                            ? parseInt(t, 10)
                            : yt.test(e.nodeName) ||
                              (bt.test(e.nodeName) && e.href)
                            ? 0
                            : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        y.optSelected ||
            (T.propHooks.selected = {
                get: function (e) {
                    e = e.parentNode;
                    return (
                        e && e.parentNode && e.parentNode.selectedIndex, null
                    );
                },
                set: function (e) {
                    e = e.parentNode;
                    e &&
                        (e.selectedIndex,
                        e.parentNode && e.parentNode.selectedIndex);
                },
            }),
        T.each(
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
                T.propFix[this.toLowerCase()] = this;
            }
        ),
        T.fn.extend({
            addClass: function (t) {
                var e,
                    n,
                    i,
                    r,
                    o,
                    s,
                    a = 0;
                if (b(t))
                    return this.each(function (e) {
                        T(this).addClass(t.call(this, e, wt(this)));
                    });
                if ((e = xt(t)).length)
                    for (; (n = this[a++]); )
                        if (
                            ((s = wt(n)),
                            (i = 1 === n.nodeType && " " + _t(s) + " "))
                        ) {
                            for (o = 0; (r = e[o++]); )
                                i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            s !== (s = _t(i)) && n.setAttribute("class", s);
                        }
                return this;
            },
            removeClass: function (t) {
                var e,
                    n,
                    i,
                    r,
                    o,
                    s,
                    a = 0;
                if (b(t))
                    return this.each(function (e) {
                        T(this).removeClass(t.call(this, e, wt(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ((e = xt(t)).length)
                    for (; (n = this[a++]); )
                        if (
                            ((s = wt(n)),
                            (i = 1 === n.nodeType && " " + _t(s) + " "))
                        ) {
                            for (o = 0; (r = e[o++]); )
                                for (; -1 < i.indexOf(" " + r + " "); )
                                    i = i.replace(" " + r + " ", " ");
                            s !== (s = _t(i)) && n.setAttribute("class", s);
                        }
                return this;
            },
            toggleClass: function (r, t) {
                var o = typeof r,
                    s = "string" == o || Array.isArray(r);
                return "boolean" == typeof t && s
                    ? t
                        ? this.addClass(r)
                        : this.removeClass(r)
                    : b(r)
                    ? this.each(function (e) {
                          T(this).toggleClass(r.call(this, e, wt(this), t), t);
                      })
                    : this.each(function () {
                          var e, t, n, i;
                          if (s)
                              for (
                                  t = 0, n = T(this), i = xt(r);
                                  (e = i[t++]);

                              )
                                  n.hasClass(e)
                                      ? n.removeClass(e)
                                      : n.addClass(e);
                          else
                              (void 0 !== r && "boolean" != o) ||
                                  ((e = wt(this)) &&
                                      Q.set(this, "__className__", e),
                                  this.setAttribute &&
                                      this.setAttribute(
                                          "class",
                                          (!e &&
                                              !1 !== r &&
                                              Q.get(this, "__className__")) ||
                                              ""
                                      ));
                      });
            },
            hasClass: function (e) {
                for (var t, n = 0, i = " " + e + " "; (t = this[n++]); )
                    if (
                        1 === t.nodeType &&
                        -1 < (" " + _t(wt(t)) + " ").indexOf(i)
                    )
                        return !0;
                return !1;
            },
        });
    var Et = /\r/g;
    T.fn.extend({
        val: function (t) {
            var n,
                e,
                i,
                r = this[0];
            return arguments.length
                ? ((i = b(t)),
                  this.each(function (e) {
                      1 === this.nodeType &&
                          (null == (e = i ? t.call(this, e, T(this).val()) : t)
                              ? (e = "")
                              : "number" == typeof e
                              ? (e += "")
                              : Array.isArray(e) &&
                                (e = T.map(e, function (e) {
                                    return null == e ? "" : e + "";
                                })),
                          ((n =
                              T.valHooks[this.type] ||
                              T.valHooks[this.nodeName.toLowerCase()]) &&
                              "set" in n &&
                              void 0 !== n.set(this, e, "value")) ||
                              (this.value = e));
                  }))
                : r
                ? (n =
                      T.valHooks[r.type] ||
                      T.valHooks[r.nodeName.toLowerCase()]) &&
                  "get" in n &&
                  void 0 !== (e = n.get(r, "value"))
                    ? e
                    : "string" == typeof (e = r.value)
                    ? e.replace(Et, "")
                    : null == e
                    ? ""
                    : e
                : void 0;
        },
    }),
        T.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = T.find.attr(e, "value");
                        return null != t ? t : _t(T.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        for (
                            var t,
                                n = e.options,
                                i = e.selectedIndex,
                                r = "select-one" === e.type,
                                o = r ? null : [],
                                s = r ? i + 1 : n.length,
                                a = i < 0 ? s : r ? i : 0;
                            a < s;
                            a++
                        )
                            if (
                                ((t = n[a]).selected || a === i) &&
                                !t.disabled &&
                                (!t.parentNode.disabled ||
                                    !k(t.parentNode, "optgroup"))
                            ) {
                                if (((t = T(t).val()), r)) return t;
                                o.push(t);
                            }
                        return o;
                    },
                    set: function (e, t) {
                        for (
                            var n,
                                i,
                                r = e.options,
                                o = T.makeArray(t),
                                s = r.length;
                            s--;

                        )
                            ((i = r[s]).selected =
                                -1 < T.inArray(T.valHooks.option.get(i), o)) &&
                                (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        T.each(["radio", "checkbox"], function () {
            (T.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t))
                        return (e.checked = -1 < T.inArray(T(e).val(), t));
                },
            }),
                y.checkOn ||
                    (T.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value")
                            ? "on"
                            : e.value;
                    });
        }),
        (y.focusin = "onfocusin" in x);
    function Tt(e) {
        e.stopPropagation();
    }
    var Ct = /^(?:focusinfocus|focusoutblur)$/;
    T.extend(T.event, {
        trigger: function (e, t, n, i) {
            var r,
                o,
                s,
                a,
                l,
                c,
                u,
                d = [n || E],
                f = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [],
                p = (u = o = n = n || E);
            if (
                3 !== n.nodeType &&
                8 !== n.nodeType &&
                !Ct.test(f + T.event.triggered) &&
                (-1 < f.indexOf(".") &&
                    ((f = (h = f.split(".")).shift()), h.sort()),
                (a = f.indexOf(":") < 0 && "on" + f),
                ((e = e[T.expando]
                    ? e
                    : new T.Event(f, "object" == typeof e && e)).isTrigger = i
                    ? 2
                    : 3),
                (e.namespace = h.join(".")),
                (e.rnamespace = e.namespace
                    ? new RegExp(
                          "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                (e.result = void 0),
                e.target || (e.target = n),
                (t = null == t ? [e] : T.makeArray(t, [e])),
                (c = T.event.special[f] || {}),
                i || !c.trigger || !1 !== c.trigger.apply(n, t))
            ) {
                if (!i && !c.noBubble && !g(n)) {
                    for (
                        s = c.delegateType || f,
                            Ct.test(s + f) || (p = p.parentNode);
                        p;
                        p = p.parentNode
                    )
                        d.push(p), (o = p);
                    o === (n.ownerDocument || E) &&
                        d.push(o.defaultView || o.parentWindow || x);
                }
                for (r = 0; (p = d[r++]) && !e.isPropagationStopped(); )
                    (u = p),
                        (e.type = 1 < r ? s : c.bindType || f),
                        (l =
                            (Q.get(p, "events") || Object.create(null))[
                                e.type
                            ] && Q.get(p, "handle")) && l.apply(p, t),
                        (l = a && p[a]) &&
                            l.apply &&
                            V(p) &&
                            ((e.result = l.apply(p, t)),
                            !1 === e.result && e.preventDefault());
                return (
                    (e.type = f),
                    i ||
                        e.isDefaultPrevented() ||
                        (c._default && !1 !== c._default.apply(d.pop(), t)) ||
                        !V(n) ||
                        (a &&
                            b(n[f]) &&
                            !g(n) &&
                            ((o = n[a]) && (n[a] = null),
                            (T.event.triggered = f),
                            e.isPropagationStopped() &&
                                u.addEventListener(f, Tt),
                            n[f](),
                            e.isPropagationStopped() &&
                                u.removeEventListener(f, Tt),
                            (T.event.triggered = void 0),
                            o && (n[a] = o))),
                    e.result
                );
            }
        },
        simulate: function (e, t, n) {
            e = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
            T.event.trigger(e, null, t);
        },
    }),
        T.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    T.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return T.event.trigger(e, t, n, !0);
            },
        }),
        y.focusin ||
            T.each({ focus: "focusin", blur: "focusout" }, function (n, i) {
                function r(e) {
                    T.event.simulate(i, e.target, T.event.fix(e));
                }
                T.event.special[i] = {
                    setup: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = Q.access(e, i);
                        t || e.addEventListener(n, r, !0),
                            Q.access(e, i, (t || 0) + 1);
                    },
                    teardown: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = Q.access(e, i) - 1;
                        t
                            ? Q.access(e, i, t)
                            : (e.removeEventListener(n, r, !0), Q.remove(e, i));
                    },
                };
            });
    var At = x.location,
        kt = { guid: Date.now() },
        St = /\?/;
    T.parseXML = function (e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = new x.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {}
        return (
            (n = t && t.getElementsByTagName("parsererror")[0]),
            (t && !n) ||
                T.error(
                    "Invalid XML: " +
                        (n
                            ? T.map(n.childNodes, function (e) {
                                  return e.textContent;
                              }).join("\n")
                            : e)
                ),
            t
        );
    };
    var Dt = /\[\]$/,
        Lt = /\r?\n/g,
        Ot = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;
    (T.param = function (e, t) {
        function n(e, t) {
            (t = b(t) ? t() : t),
                (r[r.length] =
                    encodeURIComponent(e) +
                    "=" +
                    encodeURIComponent(null == t ? "" : t));
        }
        var i,
            r = [];
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
            T.each(e, function () {
                n(this.name, this.value);
            });
        else
            for (i in e)
                !(function n(i, e, r, o) {
                    if (Array.isArray(e))
                        T.each(e, function (e, t) {
                            r || Dt.test(i)
                                ? o(i, t)
                                : n(
                                      i +
                                          "[" +
                                          ("object" == typeof t && null != t
                                              ? e
                                              : "") +
                                          "]",
                                      t,
                                      r,
                                      o
                                  );
                        });
                    else if (r || "object" !== p(e)) o(i, e);
                    else for (var t in e) n(i + "[" + t + "]", e[t], r, o);
                })(i, e[i], t, n);
        return r.join("&");
    }),
        T.fn.extend({
            serialize: function () {
                return T.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = T.prop(this, "elements");
                    return e ? T.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return (
                            this.name &&
                            !T(this).is(":disabled") &&
                            Nt.test(this.nodeName) &&
                            !Ot.test(e) &&
                            (this.checked || !ue.test(e))
                        );
                    })
                    .map(function (e, t) {
                        var n = T(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? T.map(n, function (e) {
                                  return {
                                      name: t.name,
                                      value: e.replace(Lt, "\r\n"),
                                  };
                              })
                            : { name: t.name, value: n.replace(Lt, "\r\n") };
                    })
                    .get();
            },
        });
    var jt = /%20/g,
        It = /#.*$/,
        Pt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Mt = /^(?:GET|HEAD)$/,
        qt = /^\/\//,
        $t = {},
        Rt = {},
        Bt = "*/".concat("*"),
        Wt = E.createElement("a");
    function Ft(o) {
        return function (e, t) {
            "string" != typeof e && ((t = e), (e = "*"));
            var n,
                i = 0,
                r = e.toLowerCase().match(P) || [];
            if (b(t))
                for (; (n = r[i++]); )
                    "+" === n[0]
                        ? ((n = n.slice(1) || "*"),
                          (o[n] = o[n] || []).unshift(t))
                        : (o[n] = o[n] || []).push(t);
        };
    }
    function zt(t, i, r, o) {
        var s = {},
            a = t === Rt;
        function l(e) {
            var n;
            return (
                (s[e] = !0),
                T.each(t[e] || [], function (e, t) {
                    t = t(i, r, o);
                    return "string" != typeof t || a || s[t]
                        ? a
                            ? !(n = t)
                            : void 0
                        : (i.dataTypes.unshift(t), l(t), !1);
                }),
                n
            );
        }
        return l(i.dataTypes[0]) || (!s["*"] && l("*"));
    }
    function Ut(e, t) {
        var n,
            i,
            r = T.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : (i = i || {}))[n] = t[n]);
        return i && T.extend(!0, e, i), e;
    }
    (Wt.href = At.href),
        T.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: At.href,
                type: "GET",
                isLocal:
                    /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                        At.protocol
                    ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Bt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON",
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": T.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? Ut(Ut(e, T.ajaxSettings), t) : Ut(T.ajaxSettings, e);
            },
            ajaxPrefilter: Ft($t),
            ajaxTransport: Ft(Rt),
            ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0));
                var l,
                    c,
                    u,
                    n,
                    d,
                    f,
                    h,
                    i,
                    r,
                    p = T.ajaxSetup({}, (t = t || {})),
                    g = p.context || p,
                    m = p.context && (g.nodeType || g.jquery) ? T(g) : T.event,
                    v = T.Deferred(),
                    y = T.Callbacks("once memory"),
                    b = p.statusCode || {},
                    o = {},
                    s = {},
                    a = "canceled",
                    _ = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (f) {
                                if (!n)
                                    for (n = {}; (t = Ht.exec(u)); )
                                        n[t[1].toLowerCase() + " "] = (
                                            n[t[1].toLowerCase() + " "] || []
                                        ).concat(t[2]);
                                t = n[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return f ? u : null;
                        },
                        setRequestHeader: function (e, t) {
                            return (
                                null == f &&
                                    ((e = s[e.toLowerCase()] =
                                        s[e.toLowerCase()] || e),
                                    (o[e] = t)),
                                this
                            );
                        },
                        overrideMimeType: function (e) {
                            return null == f && (p.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            if (e)
                                if (f) _.always(e[_.status]);
                                else for (var t in e) b[t] = [b[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            e = e || a;
                            return l && l.abort(e), w(0, e), this;
                        },
                    };
                if (
                    (v.promise(_),
                    (p.url = ((e || p.url || At.href) + "").replace(
                        qt,
                        At.protocol + "//"
                    )),
                    (p.type = t.method || t.type || p.method || p.type),
                    (p.dataTypes = (p.dataType || "*")
                        .toLowerCase()
                        .match(P) || [""]),
                    null == p.crossDomain)
                ) {
                    r = E.createElement("a");
                    try {
                        (r.href = p.url),
                            (r.href = r.href),
                            (p.crossDomain =
                                Wt.protocol + "//" + Wt.host !=
                                r.protocol + "//" + r.host);
                    } catch (e) {
                        p.crossDomain = !0;
                    }
                }
                if (
                    (p.data &&
                        p.processData &&
                        "string" != typeof p.data &&
                        (p.data = T.param(p.data, p.traditional)),
                    zt($t, p, t, _),
                    f)
                )
                    return _;
                for (i in ((h = T.event && p.global) &&
                    0 == T.active++ &&
                    T.event.trigger("ajaxStart"),
                (p.type = p.type.toUpperCase()),
                (p.hasContent = !Mt.test(p.type)),
                (c = p.url.replace(It, "")),
                p.hasContent
                    ? p.data &&
                      p.processData &&
                      0 ===
                          (p.contentType || "").indexOf(
                              "application/x-www-form-urlencoded"
                          ) &&
                      (p.data = p.data.replace(jt, "+"))
                    : ((r = p.url.slice(c.length)),
                      p.data &&
                          (p.processData || "string" == typeof p.data) &&
                          ((c += (St.test(c) ? "&" : "?") + p.data),
                          delete p.data),
                      !1 === p.cache &&
                          ((c = c.replace(Pt, "$1")),
                          (r =
                              (St.test(c) ? "&" : "?") + "_=" + kt.guid++ + r)),
                      (p.url = c + r)),
                p.ifModified &&
                    (T.lastModified[c] &&
                        _.setRequestHeader(
                            "If-Modified-Since",
                            T.lastModified[c]
                        ),
                    T.etag[c] &&
                        _.setRequestHeader("If-None-Match", T.etag[c])),
                ((p.data && p.hasContent && !1 !== p.contentType) ||
                    t.contentType) &&
                    _.setRequestHeader("Content-Type", p.contentType),
                _.setRequestHeader(
                    "Accept",
                    p.dataTypes[0] && p.accepts[p.dataTypes[0]]
                        ? p.accepts[p.dataTypes[0]] +
                              ("*" !== p.dataTypes[0]
                                  ? ", " + Bt + "; q=0.01"
                                  : "")
                        : p.accepts["*"]
                ),
                p.headers))
                    _.setRequestHeader(i, p.headers[i]);
                if (p.beforeSend && (!1 === p.beforeSend.call(g, _, p) || f))
                    return _.abort();
                if (
                    ((a = "abort"),
                    y.add(p.complete),
                    _.done(p.success),
                    _.fail(p.error),
                    (l = zt(Rt, p, t, _)))
                ) {
                    if (
                        ((_.readyState = 1),
                        h && m.trigger("ajaxSend", [_, p]),
                        f)
                    )
                        return _;
                    p.async &&
                        0 < p.timeout &&
                        (d = x.setTimeout(function () {
                            _.abort("timeout");
                        }, p.timeout));
                    try {
                        (f = !1), l.send(o, w);
                    } catch (e) {
                        if (f) throw e;
                        w(-1, e);
                    }
                } else w(-1, "No Transport");
                function w(e, t, n, i) {
                    var r,
                        o,
                        s,
                        a = t;
                    f ||
                        ((f = !0),
                        d && x.clearTimeout(d),
                        (l = void 0),
                        (u = i || ""),
                        (_.readyState = 0 < e ? 4 : 0),
                        (i = (200 <= e && e < 300) || 304 === e),
                        n &&
                            (s = (function (e, t, n) {
                                for (
                                    var i,
                                        r,
                                        o,
                                        s,
                                        a = e.contents,
                                        l = e.dataTypes;
                                    "*" === l[0];

                                )
                                    l.shift(),
                                        void 0 === i &&
                                            (i =
                                                e.mimeType ||
                                                t.getResponseHeader(
                                                    "Content-Type"
                                                ));
                                if (i)
                                    for (r in a)
                                        if (a[r] && a[r].test(i)) {
                                            l.unshift(r);
                                            break;
                                        }
                                if (l[0] in n) o = l[0];
                                else {
                                    for (r in n) {
                                        if (
                                            !l[0] ||
                                            e.converters[r + " " + l[0]]
                                        ) {
                                            o = r;
                                            break;
                                        }
                                        s = s || r;
                                    }
                                    o = o || s;
                                }
                                if (o) return o !== l[0] && l.unshift(o), n[o];
                            })(p, _, n)),
                        !i &&
                            -1 < T.inArray("script", p.dataTypes) &&
                            T.inArray("json", p.dataTypes) < 0 &&
                            (p.converters["text script"] = function () {}),
                        (s = (function (e, t, n, i) {
                            var r,
                                o,
                                s,
                                a,
                                l,
                                c = {},
                                u = e.dataTypes.slice();
                            if (u[1])
                                for (s in e.converters)
                                    c[s.toLowerCase()] = e.converters[s];
                            for (o = u.shift(); o; )
                                if (
                                    (e.responseFields[o] &&
                                        (n[e.responseFields[o]] = t),
                                    !l &&
                                        i &&
                                        e.dataFilter &&
                                        (t = e.dataFilter(t, e.dataType)),
                                    (l = o),
                                    (o = u.shift()))
                                )
                                    if ("*" === o) o = l;
                                    else if ("*" !== l && l !== o) {
                                        if (
                                            !(s = c[l + " " + o] || c["* " + o])
                                        )
                                            for (r in c)
                                                if (
                                                    ((a = r.split(" ")),
                                                    a[1] === o &&
                                                        (s =
                                                            c[l + " " + a[0]] ||
                                                            c["* " + a[0]]))
                                                ) {
                                                    !0 === s
                                                        ? (s = c[r])
                                                        : !0 !== c[r] &&
                                                          ((o = a[0]),
                                                          u.unshift(a[1]));
                                                    break;
                                                }
                                        if (!0 !== s)
                                            if (s && e.throws) t = s(t);
                                            else
                                                try {
                                                    t = s(t);
                                                } catch (e) {
                                                    return {
                                                        state: "parsererror",
                                                        error: s
                                                            ? e
                                                            : "No conversion from " +
                                                              l +
                                                              " to " +
                                                              o,
                                                    };
                                                }
                                    }
                            return { state: "success", data: t };
                        })(p, s, _, i)),
                        i
                            ? (p.ifModified &&
                                  ((n = _.getResponseHeader("Last-Modified")) &&
                                      (T.lastModified[c] = n),
                                  (n = _.getResponseHeader("etag")) &&
                                      (T.etag[c] = n)),
                              204 === e || "HEAD" === p.type
                                  ? (a = "nocontent")
                                  : 304 === e
                                  ? (a = "notmodified")
                                  : ((a = s.state),
                                    (r = s.data),
                                    (i = !(o = s.error))))
                            : ((o = a),
                              (!e && a) || ((a = "error"), e < 0 && (e = 0))),
                        (_.status = e),
                        (_.statusText = (t || a) + ""),
                        i
                            ? v.resolveWith(g, [r, a, _])
                            : v.rejectWith(g, [_, a, o]),
                        _.statusCode(b),
                        (b = void 0),
                        h &&
                            m.trigger(i ? "ajaxSuccess" : "ajaxError", [
                                _,
                                p,
                                i ? r : o,
                            ]),
                        y.fireWith(g, [_, a]),
                        h &&
                            (m.trigger("ajaxComplete", [_, p]),
                            --T.active || T.event.trigger("ajaxStop")));
                }
                return _;
            },
            getJSON: function (e, t, n) {
                return T.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return T.get(e, void 0, t, "script");
            },
        }),
        T.each(["get", "post"], function (e, r) {
            T[r] = function (e, t, n, i) {
                return (
                    b(t) && ((i = i || n), (n = t), (t = void 0)),
                    T.ajax(
                        T.extend(
                            {
                                url: e,
                                type: r,
                                dataType: i,
                                data: t,
                                success: n,
                            },
                            T.isPlainObject(e) && e
                        )
                    )
                );
            };
        }),
        T.ajaxPrefilter(function (e) {
            for (var t in e.headers)
                "content-type" === t.toLowerCase() &&
                    (e.contentType = e.headers[t] || "");
        }),
        (T._evalUrl = function (e, t, n) {
            return T.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                    T.globalEval(e, t, n);
                },
            });
        }),
        T.fn.extend({
            wrapAll: function (e) {
                return (
                    this[0] &&
                        (b(e) && (e = e.call(this[0])),
                        (e = T(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && e.insertBefore(this[0]),
                        e
                            .map(function () {
                                for (var e = this; e.firstElementChild; )
                                    e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (n) {
                return b(n)
                    ? this.each(function (e) {
                          T(this).wrapInner(n.call(this, e));
                      })
                    : this.each(function () {
                          var e = T(this),
                              t = e.contents();
                          t.length ? t.wrapAll(n) : e.append(n);
                      });
            },
            wrap: function (t) {
                var n = b(t);
                return this.each(function (e) {
                    T(this).wrapAll(n ? t.call(this, e) : t);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            T(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (T.expr.pseudos.hidden = function (e) {
            return !T.expr.pseudos.visible(e);
        }),
        (T.expr.pseudos.visible = function (e) {
            return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
            );
        }),
        (T.ajaxSettings.xhr = function () {
            try {
                return new x.XMLHttpRequest();
            } catch (e) {}
        });
    var Xt = { 0: 200, 1223: 204 },
        Vt = T.ajaxSettings.xhr();
    (y.cors = !!Vt && "withCredentials" in Vt),
        (y.ajax = Vt = !!Vt),
        T.ajaxTransport(function (r) {
            var o, s;
            if (y.cors || (Vt && !r.crossDomain))
                return {
                    send: function (e, t) {
                        var n,
                            i = r.xhr();
                        if (
                            (i.open(
                                r.type,
                                r.url,
                                r.async,
                                r.username,
                                r.password
                            ),
                            r.xhrFields)
                        )
                            for (n in r.xhrFields) i[n] = r.xhrFields[n];
                        for (n in (r.mimeType &&
                            i.overrideMimeType &&
                            i.overrideMimeType(r.mimeType),
                        r.crossDomain ||
                            e["X-Requested-With"] ||
                            (e["X-Requested-With"] = "XMLHttpRequest"),
                        e))
                            i.setRequestHeader(n, e[n]);
                        (o = function (e) {
                            return function () {
                                o &&
                                    ((o =
                                        s =
                                        i.onload =
                                        i.onerror =
                                        i.onabort =
                                        i.ontimeout =
                                        i.onreadystatechange =
                                            null),
                                    "abort" === e
                                        ? i.abort()
                                        : "error" === e
                                        ? "number" != typeof i.status
                                            ? t(0, "error")
                                            : t(i.status, i.statusText)
                                        : t(
                                              Xt[i.status] || i.status,
                                              i.statusText,
                                              "text" !==
                                                  (i.responseType || "text") ||
                                                  "string" !=
                                                      typeof i.responseText
                                                  ? { binary: i.response }
                                                  : { text: i.responseText },
                                              i.getAllResponseHeaders()
                                          ));
                            };
                        }),
                            (i.onload = o()),
                            (s = i.onerror = i.ontimeout = o("error")),
                            void 0 !== i.onabort
                                ? (i.onabort = s)
                                : (i.onreadystatechange = function () {
                                      4 === i.readyState &&
                                          x.setTimeout(function () {
                                              o && s();
                                          });
                                  }),
                            (o = o("abort"));
                        try {
                            i.send((r.hasContent && r.data) || null);
                        } catch (e) {
                            if (o) throw e;
                        }
                    },
                    abort: function () {
                        o && o();
                    },
                };
        }),
        T.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        T.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return T.globalEval(e), e;
                },
            },
        }),
        T.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
        }),
        T.ajaxTransport("script", function (n) {
            var i, r;
            if (n.crossDomain || n.scriptAttrs)
                return {
                    send: function (e, t) {
                        (i = T("<script>")
                            .attr(n.scriptAttrs || {})
                            .prop({ charset: n.scriptCharset, src: n.url })
                            .on(
                                "load error",
                                (r = function (e) {
                                    i.remove(),
                                        (r = null),
                                        e &&
                                            t(
                                                "error" === e.type ? 404 : 200,
                                                e.type
                                            );
                                })
                            )),
                            E.head.appendChild(i[0]);
                    },
                    abort: function () {
                        r && r();
                    },
                };
        });
    var Yt = [],
        Qt = /(=)\?(?=&|$)|\?\?/;
    T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Yt.pop() || T.expando + "_" + kt.guid++;
            return (this[e] = !0), e;
        },
    }),
        T.ajaxPrefilter("json jsonp", function (e, t, n) {
            var i,
                r,
                o,
                s =
                    !1 !== e.jsonp &&
                    (Qt.test(e.url)
                        ? "url"
                        : "string" == typeof e.data &&
                          0 ===
                              (e.contentType || "").indexOf(
                                  "application/x-www-form-urlencoded"
                              ) &&
                          Qt.test(e.data) &&
                          "data");
            if (s || "jsonp" === e.dataTypes[0])
                return (
                    (i = e.jsonpCallback =
                        b(e.jsonpCallback)
                            ? e.jsonpCallback()
                            : e.jsonpCallback),
                    s
                        ? (e[s] = e[s].replace(Qt, "$1" + i))
                        : !1 !== e.jsonp &&
                          (e.url +=
                              (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                    (e.converters["script json"] = function () {
                        return o || T.error(i + " was not called"), o[0];
                    }),
                    (e.dataTypes[0] = "json"),
                    (r = x[i]),
                    (x[i] = function () {
                        o = arguments;
                    }),
                    n.always(function () {
                        void 0 === r ? T(x).removeProp(i) : (x[i] = r),
                            e[i] &&
                                ((e.jsonpCallback = t.jsonpCallback),
                                Yt.push(i)),
                            o && b(r) && r(o[0]),
                            (o = r = void 0);
                    }),
                    "script"
                );
        }),
        (y.createHTMLDocument =
            (((d = E.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
            2 === d.childNodes.length)),
        (T.parseHTML = function (e, t, n) {
            return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                      (y.createHTMLDocument
                          ? (((i = (t =
                                E.implementation.createHTMLDocument(
                                    ""
                                )).createElement("base")).href =
                                E.location.href),
                            t.head.appendChild(i))
                          : (t = E)),
                  (i = !n && []),
                  (n = S.exec(e))
                      ? [t.createElement(n[1])]
                      : ((n = ve([e], t, i)),
                        i && i.length && T(i).remove(),
                        T.merge([], n.childNodes)));
            var i;
        }),
        (T.fn.load = function (e, t, n) {
            var i,
                r,
                o,
                s = this,
                a = e.indexOf(" ");
            return (
                -1 < a && ((i = _t(e.slice(a))), (e = e.slice(0, a))),
                b(t)
                    ? ((n = t), (t = void 0))
                    : t && "object" == typeof t && (r = "POST"),
                0 < s.length &&
                    T.ajax({
                        url: e,
                        type: r || "GET",
                        dataType: "html",
                        data: t,
                    })
                        .done(function (e) {
                            (o = arguments),
                                s.html(
                                    i
                                        ? T("<div>")
                                              .append(T.parseHTML(e))
                                              .find(i)
                                        : e
                                );
                        })
                        .always(
                            n &&
                                function (e, t) {
                                    s.each(function () {
                                        n.apply(
                                            this,
                                            o || [e.responseText, t, e]
                                        );
                                    });
                                }
                        ),
                this
            );
        }),
        (T.expr.pseudos.animated = function (t) {
            return T.grep(T.timers, function (e) {
                return t === e.elem;
            }).length;
        }),
        (T.offset = {
            setOffset: function (e, t, n) {
                var i,
                    r,
                    o,
                    s,
                    a = T.css(e, "position"),
                    l = T(e),
                    c = {};
                "static" === a && (e.style.position = "relative"),
                    (o = l.offset()),
                    (i = T.css(e, "top")),
                    (s = T.css(e, "left")),
                    (s =
                        ("absolute" === a || "fixed" === a) &&
                        -1 < (i + s).indexOf("auto")
                            ? ((r = (a = l.position()).top), a.left)
                            : ((r = parseFloat(i) || 0), parseFloat(s) || 0)),
                    null !=
                        (t = b(t) ? t.call(e, n, T.extend({}, o)) : t).top &&
                        (c.top = t.top - o.top + r),
                    null != t.left && (c.left = t.left - o.left + s),
                    "using" in t ? t.using.call(e, c) : l.css(c);
            },
        }),
        T.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t
                        ? this
                        : this.each(function (e) {
                              T.offset.setOffset(this, t, e);
                          });
                var e,
                    n = this[0];
                return n
                    ? n.getClientRects().length
                        ? ((e = n.getBoundingClientRect()),
                          (n = n.ownerDocument.defaultView),
                          {
                              top: e.top + n.pageYOffset,
                              left: e.left + n.pageXOffset,
                          })
                        : { top: 0, left: 0 }
                    : void 0;
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        i = this[0],
                        r = { top: 0, left: 0 };
                    if ("fixed" === T.css(i, "position"))
                        t = i.getBoundingClientRect();
                    else {
                        for (
                            t = this.offset(),
                                n = i.ownerDocument,
                                e = i.offsetParent || n.documentElement;
                            e &&
                            (e === n.body || e === n.documentElement) &&
                            "static" === T.css(e, "position");

                        )
                            e = e.parentNode;
                        e &&
                            e !== i &&
                            1 === e.nodeType &&
                            (((r = T(e).offset()).top += T.css(
                                e,
                                "borderTopWidth",
                                !0
                            )),
                            (r.left += T.css(e, "borderLeftWidth", !0)));
                    }
                    return {
                        top: t.top - r.top - T.css(i, "marginTop", !0),
                        left: t.left - r.left - T.css(i, "marginLeft", !0),
                    };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (
                        var e = this.offsetParent;
                        e && "static" === T.css(e, "position");

                    )
                        e = e.offsetParent;
                    return e || ie;
                });
            },
        }),
        T.each(
            { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
            function (t, r) {
                var o = "pageYOffset" === r;
                T.fn[t] = function (e) {
                    return W(
                        this,
                        function (e, t, n) {
                            var i;
                            return (
                                g(e)
                                    ? (i = e)
                                    : 9 === e.nodeType && (i = e.defaultView),
                                void 0 === n
                                    ? i
                                        ? i[r]
                                        : e[t]
                                    : void (i
                                          ? i.scrollTo(
                                                o ? i.pageXOffset : n,
                                                o ? n : i.pageYOffset
                                            )
                                          : (e[t] = n))
                            );
                        },
                        t,
                        e,
                        arguments.length
                    );
                };
            }
        ),
        T.each(["top", "left"], function (e, n) {
            T.cssHooks[n] = Ye(y.pixelPosition, function (e, t) {
                if (t)
                    return (
                        (t = Ve(e, n)),
                        We.test(t) ? T(e).position()[n] + "px" : t
                    );
            });
        }),
        T.each({ Height: "height", Width: "width" }, function (s, a) {
            T.each(
                { padding: "inner" + s, content: a, "": "outer" + s },
                function (i, o) {
                    T.fn[o] = function (e, t) {
                        var n =
                                arguments.length &&
                                (i || "boolean" != typeof e),
                            r =
                                i ||
                                (!0 === e || !0 === t ? "margin" : "border");
                        return W(
                            this,
                            function (e, t, n) {
                                var i;
                                return g(e)
                                    ? 0 === o.indexOf("outer")
                                        ? e["inner" + s]
                                        : e.document.documentElement[
                                              "client" + s
                                          ]
                                    : 9 === e.nodeType
                                    ? ((i = e.documentElement),
                                      Math.max(
                                          e.body["scroll" + s],
                                          i["scroll" + s],
                                          e.body["offset" + s],
                                          i["offset" + s],
                                          i["client" + s]
                                      ))
                                    : void 0 === n
                                    ? T.css(e, t, r)
                                    : T.style(e, t, n, r);
                            },
                            a,
                            n ? e : void 0,
                            n
                        );
                    };
                }
            );
        }),
        T.each(
            [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
            ],
            function (e, t) {
                T.fn[t] = function (e) {
                    return this.on(t, e);
                };
            }
        ),
        T.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, i) {
                return this.on(t, e, n, i);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length
                    ? this.off(e, "**")
                    : this.off(t, e || "**", n);
            },
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        T.each(
            "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
            ),
            function (e, n) {
                T.fn[n] = function (e, t) {
                    return 0 < arguments.length
                        ? this.on(n, null, e, t)
                        : this.trigger(n);
                };
            }
        );
    var Kt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (T.proxy = function (e, t) {
        var n, i;
        if (("string" == typeof t && ((i = e[t]), (t = e), (e = i)), b(e)))
            return (
                (n = a.call(arguments, 2)),
                ((i = function () {
                    return e.apply(t || this, n.concat(a.call(arguments)));
                }).guid = e.guid =
                    e.guid || T.guid++),
                i
            );
    }),
        (T.holdReady = function (e) {
            e ? T.readyWait++ : T.ready(!0);
        }),
        (T.isArray = Array.isArray),
        (T.parseJSON = JSON.parse),
        (T.nodeName = k),
        (T.isFunction = b),
        (T.isWindow = g),
        (T.camelCase = X),
        (T.type = p),
        (T.now = Date.now),
        (T.isNumeric = function (e) {
            var t = T.type(e);
            return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
            );
        }),
        (T.trim = function (e) {
            return null == e ? "" : (e + "").replace(Kt, "");
        }),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return T;
            });
    var Gt = x.jQuery,
        Jt = x.$;
    return (
        (T.noConflict = function (e) {
            return (
                x.$ === T && (x.$ = Jt),
                e && x.jQuery === T && (x.jQuery = Gt),
                T
            );
        }),
        void 0 === e && (x.jQuery = x.$ = T),
        T
    );
}),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = t())
            : "function" == typeof define && define.amd
            ? define(t)
            : ((e =
                  "undefined" != typeof globalThis
                      ? globalThis
                      : e || self).bootstrap = t());
    })(this, function () {
        "use strict";
        const d = {
                find(e, t = document.documentElement) {
                    return [].concat(
                        ...Element.prototype.querySelectorAll.call(t, e)
                    );
                },
                findOne(e, t = document.documentElement) {
                    return Element.prototype.querySelector.call(t, e);
                },
                children(e, t) {
                    return [].concat(...e.children).filter((e) => e.matches(t));
                },
                parents(e, t) {
                    const n = [];
                    let i = e.parentNode;
                    for (
                        ;
                        i &&
                        i.nodeType === Node.ELEMENT_NODE &&
                        3 !== i.nodeType;

                    )
                        i.matches(t) && n.push(i), (i = i.parentNode);
                    return n;
                },
                prev(e, t) {
                    let n = e.previousElementSibling;
                    for (; n; ) {
                        if (n.matches(t)) return [n];
                        n = n.previousElementSibling;
                    }
                    return [];
                },
                next(e, t) {
                    let n = e.nextElementSibling;
                    for (; n; ) {
                        if (n.matches(t)) return [n];
                        n = n.nextElementSibling;
                    }
                    return [];
                },
            },
            o = "transitionend",
            s = (e) => {
                for (
                    ;
                    (e += Math.floor(1e6 * Math.random())),
                        document.getElementById(e);

                );
                return e;
            },
            t = (t) => {
                let n = t.getAttribute("data-bs-target");
                if (!n || "#" === n) {
                    let e = t.getAttribute("href");
                    if (!e || (!e.includes("#") && !e.startsWith(".")))
                        return null;
                    e.includes("#") &&
                        !e.startsWith("#") &&
                        (e = `#${e.split("#")[1]}`),
                        (n = e && "#" !== e ? e.trim() : null);
                }
                return n;
            },
            a = (e) => {
                e = t(e);
                return e && document.querySelector(e) ? e : null;
            },
            r = (e) => {
                e = t(e);
                return e ? document.querySelector(e) : null;
            },
            l = (e) => {
                e.dispatchEvent(new Event(o));
            },
            c = (e) =>
                !(!e || "object" != typeof e) &&
                void 0 !== (e = void 0 !== e.jquery ? e[0] : e).nodeType,
            u = (e) =>
                c(e)
                    ? e.jquery
                        ? e[0]
                        : e
                    : "string" == typeof e && 0 < e.length
                    ? d.findOne(e)
                    : null,
            n = (r, o, s) => {
                Object.keys(s).forEach((e) => {
                    var t,
                        n = s[e],
                        i = o[e],
                        t =
                            i && c(i)
                                ? "element"
                                : null == (t = i)
                                ? `${t}`
                                : {}.toString
                                      .call(t)
                                      .match(/\s([a-z]+)/i)[1]
                                      .toLowerCase();
                    if (!new RegExp(n).test(t))
                        throw new TypeError(
                            `${r.toUpperCase()}: Option "${e}" provided type "${t}" but expected type "${n}".`
                        );
                });
            },
            i = (e) =>
                !(!c(e) || 0 === e.getClientRects().length) &&
                "visible" ===
                    getComputedStyle(e).getPropertyValue("visibility"),
            f = (e) =>
                !e ||
                e.nodeType !== Node.ELEMENT_NODE ||
                !!e.classList.contains("disabled") ||
                (void 0 !== e.disabled
                    ? e.disabled
                    : e.hasAttribute("disabled") &&
                      "false" !== e.getAttribute("disabled")),
            h = (e) => {
                if (!document.documentElement.attachShadow) return null;
                if ("function" != typeof e.getRootNode)
                    return e instanceof ShadowRoot
                        ? e
                        : e.parentNode
                        ? h(e.parentNode)
                        : null;
                e = e.getRootNode();
                return e instanceof ShadowRoot ? e : null;
            },
            p = () => {},
            g = (e) => e.offsetHeight,
            m = () => {
                var { jQuery: e } = window;
                return e && !document.body.hasAttribute("data-bs-no-jquery")
                    ? e
                    : null;
            },
            v = [],
            y = () => "rtl" === document.documentElement.dir;
        var e = (i) => {
            var e;
            (e = () => {
                const e = m();
                if (e) {
                    const t = i.NAME,
                        n = e.fn[t];
                    (e.fn[t] = i.jQueryInterface),
                        (e.fn[t].Constructor = i),
                        (e.fn[t].noConflict = () => (
                            (e.fn[t] = n), i.jQueryInterface
                        ));
                }
            }),
                "loading" === document.readyState
                    ? (v.length ||
                          document.addEventListener("DOMContentLoaded", () => {
                              v.forEach((e) => e());
                          }),
                      v.push(e))
                    : e();
        };
        const b = (e) => {
                "function" == typeof e && e();
            },
            _ = (n, i, e = !0) => {
                if (e) {
                    e =
                        ((e) => {
                            if (!e) return 0;
                            let { transitionDuration: t, transitionDelay: n } =
                                window.getComputedStyle(e);
                            var i = Number.parseFloat(t),
                                e = Number.parseFloat(n);
                            return i || e
                                ? ((t = t.split(",")[0]),
                                  (n = n.split(",")[0]),
                                  1e3 *
                                      (Number.parseFloat(t) +
                                          Number.parseFloat(n)))
                                : 0;
                        })(i) + 5;
                    let t = !1;
                    const r = ({ target: e }) => {
                        e === i &&
                            ((t = !0), i.removeEventListener(o, r), b(n));
                    };
                    i.addEventListener(o, r),
                        setTimeout(() => {
                            t || l(i);
                        }, e);
                } else b(n);
            },
            w = (e, t, n, i) => {
                let r = e.indexOf(t);
                if (-1 === r) return e[!n && i ? e.length - 1 : 0];
                t = e.length;
                return (
                    (r += n ? 1 : -1),
                    i && (r = (r + t) % t),
                    e[Math.max(0, Math.min(r, t - 1))]
                );
            },
            x = /[^.]*(?=\..*)\.|.*/,
            E = /\..*/,
            T = /::\d+$/,
            C = {};
        let A = 1;
        const k = { mouseenter: "mouseover", mouseleave: "mouseout" },
            S = /^(mouseenter|mouseleave)/i,
            D = new Set([
                "click",
                "dblclick",
                "mouseup",
                "mousedown",
                "contextmenu",
                "mousewheel",
                "DOMMouseScroll",
                "mouseover",
                "mouseout",
                "mousemove",
                "selectstart",
                "selectend",
                "keydown",
                "keypress",
                "keyup",
                "orientationchange",
                "touchstart",
                "touchmove",
                "touchend",
                "touchcancel",
                "pointerdown",
                "pointermove",
                "pointerup",
                "pointerleave",
                "pointercancel",
                "gesturestart",
                "gesturechange",
                "gestureend",
                "focus",
                "blur",
                "change",
                "reset",
                "select",
                "submit",
                "focusin",
                "focusout",
                "load",
                "unload",
                "beforeunload",
                "resize",
                "move",
                "DOMContentLoaded",
                "readystatechange",
                "error",
                "abort",
                "scroll",
            ]);
        function L(e, t) {
            return (t && `${t}::${A++}`) || e.uidEvent || A++;
        }
        function O(e) {
            var t = L(e);
            return (e.uidEvent = t), (C[t] = C[t] || {}), C[t];
        }
        function N(n, i, r = null) {
            var o = Object.keys(n);
            for (let e = 0, t = o.length; e < t; e++) {
                var s = n[o[e]];
                if (s.originalHandler === i && s.delegationSelector === r)
                    return s;
            }
            return null;
        }
        function j(e, t, n) {
            var i = "string" == typeof t,
                t = i ? n : t;
            let r = H(e);
            return D.has(r) || (r = e), [i, t, r];
        }
        function I(e, t, n, i, r) {
            if ("string" == typeof t && e) {
                n || ((n = i), (i = null)),
                    S.test(t) &&
                        ((a = (t) =>
                            function (e) {
                                if (
                                    !e.relatedTarget ||
                                    (e.relatedTarget !== e.delegateTarget &&
                                        !e.delegateTarget.contains(
                                            e.relatedTarget
                                        ))
                                )
                                    return t.call(this, e);
                            }),
                        i ? (i = a(i)) : (n = a(n)));
                var [o, s, a] = j(t, n, i);
                const h = O(e),
                    p = h[a] || (h[a] = {}),
                    g = N(p, s, o ? n : null);
                if (g) g.oneOff = g.oneOff && r;
                else {
                    var l,
                        c,
                        u,
                        d,
                        f,
                        t = L(s, t.replace(x, ""));
                    const m = o
                        ? ((u = e),
                          (d = n),
                          (f = i),
                          function n(i) {
                              var r = u.querySelectorAll(d);
                              for (
                                  let { target: t } = i;
                                  t && t !== this;
                                  t = t.parentNode
                              )
                                  for (let e = r.length; e--; )
                                      if (r[e] === t)
                                          return (
                                              (i.delegateTarget = t),
                                              n.oneOff &&
                                                  M.off(u, i.type, d, f),
                                              f.apply(t, [i])
                                          );
                              return null;
                          })
                        : ((l = e),
                          (c = n),
                          function e(t) {
                              return (
                                  (t.delegateTarget = l),
                                  e.oneOff && M.off(l, t.type, c),
                                  c.apply(l, [t])
                              );
                          });
                    (m.delegationSelector = o ? n : null),
                        (m.originalHandler = s),
                        (m.oneOff = r),
                        (m.uidEvent = t),
                        (p[t] = m),
                        e.addEventListener(a, m, o);
                }
            }
        }
        function P(e, t, n, i, r) {
            i = N(t[n], i, r);
            i &&
                (e.removeEventListener(n, i, Boolean(r)),
                delete t[n][i.uidEvent]);
        }
        function H(e) {
            return (e = e.replace(E, "")), k[e] || e;
        }
        const M = {
                on(e, t, n, i) {
                    I(e, t, n, i, !1);
                },
                one(e, t, n, i) {
                    I(e, t, n, i, !0);
                },
                off(n, i, e, t) {
                    if ("string" == typeof i && n) {
                        const [r, o, s] = j(i, e, t),
                            a = s !== i,
                            l = O(n);
                        t = i.startsWith(".");
                        if (void 0 !== o)
                            return l && l[s]
                                ? void P(n, l, s, o, r ? e : null)
                                : void 0;
                        t &&
                            Object.keys(l).forEach((e) => {
                                !(function (t, n, i, r) {
                                    const o = n[i] || {};
                                    Object.keys(o).forEach((e) => {
                                        e.includes(r) &&
                                            ((e = o[e]),
                                            P(
                                                t,
                                                n,
                                                i,
                                                e.originalHandler,
                                                e.delegationSelector
                                            ));
                                    });
                                })(n, l, e, i.slice(1));
                            });
                        const c = l[s] || {};
                        Object.keys(c).forEach((e) => {
                            var t = e.replace(T, "");
                            (a && !i.includes(t)) ||
                                ((e = c[e]),
                                P(
                                    n,
                                    l,
                                    s,
                                    e.originalHandler,
                                    e.delegationSelector
                                ));
                        });
                    }
                },
                trigger(e, t, n) {
                    if ("string" != typeof t || !e) return null;
                    const i = m();
                    var r = H(t),
                        o = t !== r,
                        s = D.has(r);
                    let a,
                        l = !0,
                        c = !0,
                        u = !1,
                        d = null;
                    return (
                        o &&
                            i &&
                            ((a = i.Event(t, n)),
                            i(e).trigger(a),
                            (l = !a.isPropagationStopped()),
                            (c = !a.isImmediatePropagationStopped()),
                            (u = a.isDefaultPrevented())),
                        s
                            ? ((d = document.createEvent("HTMLEvents")),
                              d.initEvent(r, l, !0))
                            : (d = new CustomEvent(t, {
                                  bubbles: l,
                                  cancelable: !0,
                              })),
                        void 0 !== n &&
                            Object.keys(n).forEach((e) => {
                                Object.defineProperty(d, e, {
                                    get() {
                                        return n[e];
                                    },
                                });
                            }),
                        u && d.preventDefault(),
                        c && e.dispatchEvent(d),
                        d.defaultPrevented &&
                            void 0 !== a &&
                            a.preventDefault(),
                        d
                    );
                },
            },
            q = new Map();
        var $ = function (e, t, n) {
                q.has(e) || q.set(e, new Map());
                const i = q.get(e);
                i.has(t) || 0 === i.size
                    ? i.set(t, n)
                    : console.error(
                          `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                              Array.from(i.keys())[0]
                          }.`
                      );
            },
            R = function (e, t) {
                return (q.has(e) && q.get(e).get(t)) || null;
            },
            B = function (e, t) {
                if (q.has(e)) {
                    const n = q.get(e);
                    n.delete(t), 0 === n.size && q.delete(e);
                }
            };
        class W {
            constructor(e) {
                (e = u(e)) &&
                    ((this._element = e),
                    $(this._element, this.constructor.DATA_KEY, this));
            }
            dispose() {
                B(this._element, this.constructor.DATA_KEY),
                    M.off(this._element, this.constructor.EVENT_KEY),
                    Object.getOwnPropertyNames(this).forEach((e) => {
                        this[e] = null;
                    });
            }
            _queueCallback(e, t, n = !0) {
                _(e, t, n);
            }
            static getInstance(e) {
                return R(e, this.DATA_KEY);
            }
            static getOrCreateInstance(e, t = {}) {
                return (
                    this.getInstance(e) ||
                    new this(e, "object" == typeof t ? t : null)
                );
            }
            static get VERSION() {
                return "5.0.2";
            }
            static get NAME() {
                throw new Error(
                    'You have to implement the static method "NAME", for each component!'
                );
            }
            static get DATA_KEY() {
                return `bs.${this.NAME}`;
            }
            static get EVENT_KEY() {
                return `.${this.DATA_KEY}`;
            }
        }
        class F extends W {
            static get NAME() {
                return "alert";
            }
            close(e) {
                var t = e ? this._getRootElement(e) : this._element,
                    e = this._triggerCloseEvent(t);
                null === e || e.defaultPrevented || this._removeElement(t);
            }
            _getRootElement(e) {
                return r(e) || e.closest(".alert");
            }
            _triggerCloseEvent(e) {
                return M.trigger(e, "close.bs.alert");
            }
            _removeElement(e) {
                e.classList.remove("show");
                var t = e.classList.contains("fade");
                this._queueCallback(() => this._destroyElement(e), e, t);
            }
            _destroyElement(e) {
                e.remove(), M.trigger(e, "closed.bs.alert");
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    const e = F.getOrCreateInstance(this);
                    "close" === t && e[t](this);
                });
            }
            static handleDismiss(t) {
                return function (e) {
                    e && e.preventDefault(), t.close(this);
                };
            }
        }
        M.on(
            document,
            "click.bs.alert.data-api",
            '[data-bs-dismiss="alert"]',
            F.handleDismiss(new F())
        ),
            e(F);
        const z = '[data-bs-toggle="button"]';
        class U extends W {
            static get NAME() {
                return "button";
            }
            toggle() {
                this._element.setAttribute(
                    "aria-pressed",
                    this._element.classList.toggle("active")
                );
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    const e = U.getOrCreateInstance(this);
                    "toggle" === t && e[t]();
                });
            }
        }
        function X(e) {
            return (
                "true" === e ||
                ("false" !== e &&
                    (e === Number(e).toString()
                        ? Number(e)
                        : "" === e || "null" === e
                        ? null
                        : e))
            );
        }
        function V(e) {
            return e.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
        }
        M.on(document, "click.bs.button.data-api", z, (e) => {
            e.preventDefault();
            e = e.target.closest(z);
            const t = U.getOrCreateInstance(e);
            t.toggle();
        }),
            e(U);
        const Y = {
                setDataAttribute(e, t, n) {
                    e.setAttribute(`data-bs-${V(t)}`, n);
                },
                removeDataAttribute(e, t) {
                    e.removeAttribute(`data-bs-${V(t)}`);
                },
                getDataAttributes(n) {
                    if (!n) return {};
                    const i = {};
                    return (
                        Object.keys(n.dataset)
                            .filter((e) => e.startsWith("bs"))
                            .forEach((e) => {
                                let t = e.replace(/^bs/, "");
                                (t =
                                    t.charAt(0).toLowerCase() +
                                    t.slice(1, t.length)),
                                    (i[t] = X(n.dataset[e]));
                            }),
                        i
                    );
                },
                getDataAttribute(e, t) {
                    return X(e.getAttribute(`data-bs-${V(t)}`));
                },
                offset(e) {
                    e = e.getBoundingClientRect();
                    return {
                        top: e.top + document.body.scrollTop,
                        left: e.left + document.body.scrollLeft,
                    };
                },
                position(e) {
                    return { top: e.offsetTop, left: e.offsetLeft };
                },
            },
            Q = "carousel";
        var K = ".bs.carousel";
        const G = {
                interval: 5e3,
                keyboard: !0,
                slide: !1,
                pause: "hover",
                wrap: !0,
                touch: !0,
            },
            J = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean",
                touch: "boolean",
            },
            Z = "next",
            ee = "prev",
            te = "left",
            ne = "right",
            ie = { ArrowLeft: ne, ArrowRight: te },
            re = `slid${K}`;
        const oe = "active",
            se = ".active.carousel-item";
        class ae extends W {
            constructor(e, t) {
                super(e),
                    (this._items = null),
                    (this._interval = null),
                    (this._activeElement = null),
                    (this._isPaused = !1),
                    (this._isSliding = !1),
                    (this.touchTimeout = null),
                    (this.touchStartX = 0),
                    (this.touchDeltaX = 0),
                    (this._config = this._getConfig(t)),
                    (this._indicatorsElement = d.findOne(
                        ".carousel-indicators",
                        this._element
                    )),
                    (this._touchSupported =
                        "ontouchstart" in document.documentElement ||
                        0 < navigator.maxTouchPoints),
                    (this._pointerEvent = Boolean(window.PointerEvent)),
                    this._addEventListeners();
            }
            static get Default() {
                return G;
            }
            static get NAME() {
                return Q;
            }
            next() {
                this._slide(Z);
            }
            nextWhenVisible() {
                !document.hidden && i(this._element) && this.next();
            }
            prev() {
                this._slide(ee);
            }
            pause(e) {
                e || (this._isPaused = !0),
                    d.findOne(
                        ".carousel-item-next, .carousel-item-prev",
                        this._element
                    ) && (l(this._element), this.cycle(!0)),
                    clearInterval(this._interval),
                    (this._interval = null);
            }
            cycle(e) {
                e || (this._isPaused = !1),
                    this._interval &&
                        (clearInterval(this._interval),
                        (this._interval = null)),
                    this._config &&
                        this._config.interval &&
                        !this._isPaused &&
                        (this._updateInterval(),
                        (this._interval = setInterval(
                            (document.visibilityState
                                ? this.nextWhenVisible
                                : this.next
                            ).bind(this),
                            this._config.interval
                        )));
            }
            to(e) {
                this._activeElement = d.findOne(se, this._element);
                var t = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding)
                        M.one(this._element, re, () => this.to(e));
                    else {
                        if (t === e) return this.pause(), void this.cycle();
                        t = t < e ? Z : ee;
                        this._slide(t, this._items[e]);
                    }
            }
            _getConfig(e) {
                return (
                    (e = {
                        ...G,
                        ...Y.getDataAttributes(this._element),
                        ...("object" == typeof e ? e : {}),
                    }),
                    n(Q, e, J),
                    e
                );
            }
            _handleSwipe() {
                var e = Math.abs(this.touchDeltaX);
                e <= 40 ||
                    ((e = e / this.touchDeltaX),
                    (this.touchDeltaX = 0),
                    e && this._slide(0 < e ? ne : te));
            }
            _addEventListeners() {
                this._config.keyboard &&
                    M.on(this._element, "keydown.bs.carousel", (e) =>
                        this._keydown(e)
                    ),
                    "hover" === this._config.pause &&
                        (M.on(this._element, "mouseenter.bs.carousel", (e) =>
                            this.pause(e)
                        ),
                        M.on(this._element, "mouseleave.bs.carousel", (e) =>
                            this.cycle(e)
                        )),
                    this._config.touch &&
                        this._touchSupported &&
                        this._addTouchEventListeners();
            }
            _addTouchEventListeners() {
                const t = (e) => {
                        !this._pointerEvent ||
                        ("pen" !== e.pointerType && "touch" !== e.pointerType)
                            ? this._pointerEvent ||
                              (this.touchStartX = e.touches[0].clientX)
                            : (this.touchStartX = e.clientX);
                    },
                    n = (e) => {
                        this.touchDeltaX =
                            e.touches && 1 < e.touches.length
                                ? 0
                                : e.touches[0].clientX - this.touchStartX;
                    },
                    i = (e) => {
                        !this._pointerEvent ||
                            ("pen" !== e.pointerType &&
                                "touch" !== e.pointerType) ||
                            (this.touchDeltaX = e.clientX - this.touchStartX),
                            this._handleSwipe(),
                            "hover" === this._config.pause &&
                                (this.pause(),
                                this.touchTimeout &&
                                    clearTimeout(this.touchTimeout),
                                (this.touchTimeout = setTimeout(
                                    (e) => this.cycle(e),
                                    500 + this._config.interval
                                )));
                    };
                d.find(".carousel-item img", this._element).forEach((e) => {
                    M.on(e, "dragstart.bs.carousel", (e) => e.preventDefault());
                }),
                    this._pointerEvent
                        ? (M.on(this._element, "pointerdown.bs.carousel", (e) =>
                              t(e)
                          ),
                          M.on(this._element, "pointerup.bs.carousel", (e) =>
                              i(e)
                          ),
                          this._element.classList.add("pointer-event"))
                        : (M.on(this._element, "touchstart.bs.carousel", (e) =>
                              t(e)
                          ),
                          M.on(this._element, "touchmove.bs.carousel", (e) =>
                              n(e)
                          ),
                          M.on(this._element, "touchend.bs.carousel", (e) =>
                              i(e)
                          ));
            }
            _keydown(e) {
                var t;
                /input|textarea/i.test(e.target.tagName) ||
                    ((t = ie[e.key]) && (e.preventDefault(), this._slide(t)));
            }
            _getItemIndex(e) {
                return (
                    (this._items =
                        e && e.parentNode
                            ? d.find(".carousel-item", e.parentNode)
                            : []),
                    this._items.indexOf(e)
                );
            }
            _getItemByOrder(e, t) {
                e = e === Z;
                return w(this._items, t, e, this._config.wrap);
            }
            _triggerSlideEvent(e, t) {
                var n = this._getItemIndex(e),
                    i = this._getItemIndex(d.findOne(se, this._element));
                return M.trigger(this._element, "slide.bs.carousel", {
                    relatedTarget: e,
                    direction: t,
                    from: i,
                    to: n,
                });
            }
            _setActiveIndicatorElement(t) {
                if (this._indicatorsElement) {
                    const e = d.findOne(".active", this._indicatorsElement);
                    e.classList.remove(oe), e.removeAttribute("aria-current");
                    const n = d.find(
                        "[data-bs-target]",
                        this._indicatorsElement
                    );
                    for (let e = 0; e < n.length; e++)
                        if (
                            Number.parseInt(
                                n[e].getAttribute("data-bs-slide-to"),
                                10
                            ) === this._getItemIndex(t)
                        ) {
                            n[e].classList.add(oe),
                                n[e].setAttribute("aria-current", "true");
                            break;
                        }
                }
            }
            _updateInterval() {
                const e = this._activeElement || d.findOne(se, this._element);
                var t;
                e &&
                    ((t = Number.parseInt(
                        e.getAttribute("data-bs-interval"),
                        10
                    ))
                        ? ((this._config.defaultInterval =
                              this._config.defaultInterval ||
                              this._config.interval),
                          (this._config.interval = t))
                        : (this._config.interval =
                              this._config.defaultInterval ||
                              this._config.interval));
            }
            _slide(e, t) {
                var n = this._directionToOrder(e);
                const i = d.findOne(se, this._element),
                    r = this._getItemIndex(i),
                    o = t || this._getItemByOrder(n, i),
                    s = this._getItemIndex(o);
                (e = Boolean(this._interval)), (t = n === Z);
                const a = t ? "carousel-item-start" : "carousel-item-end",
                    l = t ? "carousel-item-next" : "carousel-item-prev",
                    c = this._orderToDirection(n);
                if (o && o.classList.contains(oe)) this._isSliding = !1;
                else if (!this._isSliding) {
                    n = this._triggerSlideEvent(o, c);
                    if (!n.defaultPrevented && i && o) {
                        (this._isSliding = !0),
                            e && this.pause(),
                            this._setActiveIndicatorElement(o),
                            (this._activeElement = o);
                        const u = () => {
                            M.trigger(this._element, re, {
                                relatedTarget: o,
                                direction: c,
                                from: r,
                                to: s,
                            });
                        };
                        this._element.classList.contains("slide")
                            ? (o.classList.add(l),
                              g(o),
                              i.classList.add(a),
                              o.classList.add(a),
                              this._queueCallback(
                                  () => {
                                      o.classList.remove(a, l),
                                          o.classList.add(oe),
                                          i.classList.remove(oe, l, a),
                                          (this._isSliding = !1),
                                          setTimeout(u, 0);
                                  },
                                  i,
                                  !0
                              ))
                            : (i.classList.remove(oe),
                              o.classList.add(oe),
                              (this._isSliding = !1),
                              u()),
                            e && this.cycle();
                    }
                }
            }
            _directionToOrder(e) {
                return [ne, te].includes(e)
                    ? y()
                        ? e === te
                            ? ee
                            : Z
                        : e === te
                        ? Z
                        : ee
                    : e;
            }
            _orderToDirection(e) {
                return [Z, ee].includes(e)
                    ? y()
                        ? e === ee
                            ? te
                            : ne
                        : e === ee
                        ? ne
                        : te
                    : e;
            }
            static carouselInterface(e, t) {
                const n = ae.getOrCreateInstance(e, t);
                let { _config: i } = n;
                "object" == typeof t && (i = { ...i, ...t });
                e = "string" == typeof t ? t : i.slide;
                if ("number" == typeof t) n.to(t);
                else if ("string" == typeof e) {
                    if (void 0 === n[e])
                        throw new TypeError(`No method named "${e}"`);
                    n[e]();
                } else i.interval && i.ride && (n.pause(), n.cycle());
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    ae.carouselInterface(this, e);
                });
            }
            static dataApiClickHandler(e) {
                const t = r(this);
                if (t && t.classList.contains("carousel")) {
                    const i = {
                        ...Y.getDataAttributes(t),
                        ...Y.getDataAttributes(this),
                    };
                    var n = this.getAttribute("data-bs-slide-to");
                    n && (i.interval = !1),
                        ae.carouselInterface(t, i),
                        n && ae.getInstance(t).to(n),
                        e.preventDefault();
                }
            }
        }
        M.on(
            document,
            "click.bs.carousel.data-api",
            "[data-bs-slide], [data-bs-slide-to]",
            ae.dataApiClickHandler
        ),
            M.on(window, "load.bs.carousel.data-api", () => {
                var n = d.find('[data-bs-ride="carousel"]');
                for (let e = 0, t = n.length; e < t; e++)
                    ae.carouselInterface(n[e], ae.getInstance(n[e]));
            }),
            e(ae);
        const le = "collapse",
            ce = "bs.collapse";
        ce;
        const ue = { toggle: !0, parent: "" },
            de = { toggle: "boolean", parent: "(string|element)" };
        const fe = "show",
            he = "collapse",
            pe = "collapsing",
            ge = "collapsed",
            me = '[data-bs-toggle="collapse"]';
        class ve extends W {
            constructor(e, t) {
                super(e),
                    (this._isTransitioning = !1),
                    (this._config = this._getConfig(t)),
                    (this._triggerArray = d.find(
                        `${me}[href="#${this._element.id}"],` +
                            `${me}[data-bs-target="#${this._element.id}"]`
                    ));
                var n = d.find(me);
                for (let e = 0, t = n.length; e < t; e++) {
                    var i = n[e],
                        r = a(i),
                        o = d.find(r).filter((e) => e === this._element);
                    null !== r &&
                        o.length &&
                        ((this._selector = r), this._triggerArray.push(i));
                }
                (this._parent = this._config.parent ? this._getParent() : null),
                    this._config.parent ||
                        this._addAriaAndCollapsedClass(
                            this._element,
                            this._triggerArray
                        ),
                    this._config.toggle && this.toggle();
            }
            static get Default() {
                return ue;
            }
            static get NAME() {
                return le;
            }
            toggle() {
                this._element.classList.contains(fe)
                    ? this.hide()
                    : this.show();
            }
            show() {
                if (
                    !this._isTransitioning &&
                    !this._element.classList.contains(fe)
                ) {
                    let e, t;
                    this._parent &&
                        ((e = d
                            .find(".show, .collapsing", this._parent)
                            .filter((e) =>
                                "string" == typeof this._config.parent
                                    ? e.getAttribute("data-bs-parent") ===
                                      this._config.parent
                                    : e.classList.contains(he)
                            )),
                        0 === e.length && (e = null));
                    const i = d.findOne(this._selector);
                    if (e) {
                        var n = e.find((e) => i !== e);
                        if (
                            ((t = n ? ve.getInstance(n) : null),
                            t && t._isTransitioning)
                        )
                            return;
                    }
                    if (
                        !M.trigger(this._element, "show.bs.collapse")
                            .defaultPrevented
                    ) {
                        e &&
                            e.forEach((e) => {
                                i !== e && ve.collapseInterface(e, "hide"),
                                    t || $(e, ce, null);
                            });
                        const r = this._getDimension();
                        this._element.classList.remove(he),
                            this._element.classList.add(pe),
                            (this._element.style[r] = 0),
                            this._triggerArray.length &&
                                this._triggerArray.forEach((e) => {
                                    e.classList.remove(ge),
                                        e.setAttribute("aria-expanded", !0);
                                }),
                            this.setTransitioning(!0);
                        n = `scroll${r[0].toUpperCase() + r.slice(1)}`;
                        this._queueCallback(
                            () => {
                                this._element.classList.remove(pe),
                                    this._element.classList.add(he, fe),
                                    (this._element.style[r] = ""),
                                    this.setTransitioning(!1),
                                    M.trigger(
                                        this._element,
                                        "shown.bs.collapse"
                                    );
                            },
                            this._element,
                            !0
                        ),
                            (this._element.style[r] = `${this._element[n]}px`);
                    }
                }
            }
            hide() {
                if (
                    !this._isTransitioning &&
                    this._element.classList.contains(fe) &&
                    !M.trigger(this._element, "hide.bs.collapse")
                        .defaultPrevented
                ) {
                    var e = this._getDimension();
                    (this._element.style[e] = `${
                        this._element.getBoundingClientRect()[e]
                    }px`),
                        g(this._element),
                        this._element.classList.add(pe),
                        this._element.classList.remove(he, fe);
                    var t = this._triggerArray.length;
                    if (0 < t)
                        for (let e = 0; e < t; e++) {
                            const n = this._triggerArray[e],
                                i = r(n);
                            i &&
                                !i.classList.contains(fe) &&
                                (n.classList.add(ge),
                                n.setAttribute("aria-expanded", !1));
                        }
                    this.setTransitioning(!0);
                    (this._element.style[e] = ""),
                        this._queueCallback(
                            () => {
                                this.setTransitioning(!1),
                                    this._element.classList.remove(pe),
                                    this._element.classList.add(he),
                                    M.trigger(
                                        this._element,
                                        "hidden.bs.collapse"
                                    );
                            },
                            this._element,
                            !0
                        );
                }
            }
            setTransitioning(e) {
                this._isTransitioning = e;
            }
            _getConfig(e) {
                return (
                    ((e = { ...ue, ...e }).toggle = Boolean(e.toggle)),
                    n(le, e, de),
                    e
                );
            }
            _getDimension() {
                return this._element.classList.contains("width")
                    ? "width"
                    : "height";
            }
            _getParent() {
                var { parent: e } = this._config,
                    e = u(e),
                    t = `${me}[data-bs-parent="${e}"]`;
                return (
                    d.find(t, e).forEach((e) => {
                        var t = r(e);
                        this._addAriaAndCollapsedClass(t, [e]);
                    }),
                    e
                );
            }
            _addAriaAndCollapsedClass(e, t) {
                if (e && t.length) {
                    const n = e.classList.contains(fe);
                    t.forEach((e) => {
                        n ? e.classList.remove(ge) : e.classList.add(ge),
                            e.setAttribute("aria-expanded", n);
                    });
                }
            }
            static collapseInterface(e, t) {
                let n = ve.getInstance(e);
                const i = {
                    ...ue,
                    ...Y.getDataAttributes(e),
                    ...("object" == typeof t && t ? t : {}),
                };
                if (
                    (!n &&
                        i.toggle &&
                        "string" == typeof t &&
                        /show|hide/.test(t) &&
                        (i.toggle = !1),
                    (n = n || new ve(e, i)),
                    "string" == typeof t)
                ) {
                    if (void 0 === n[t])
                        throw new TypeError(`No method named "${t}"`);
                    n[t]();
                }
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    ve.collapseInterface(this, e);
                });
            }
        }
        M.on(document, "click.bs.collapse.data-api", me, function (e) {
            ("A" === e.target.tagName ||
                (e.delegateTarget && "A" === e.delegateTarget.tagName)) &&
                e.preventDefault();
            const i = Y.getDataAttributes(this);
            e = a(this);
            const t = d.find(e);
            t.forEach((e) => {
                const t = ve.getInstance(e);
                let n;
                (n = t
                    ? (null === t._parent &&
                          "string" == typeof i.parent &&
                          ((t._config.parent = i.parent),
                          (t._parent = t._getParent())),
                      "toggle")
                    : i),
                    ve.collapseInterface(e, n);
            });
        }),
            e(ve);
        var ye = "top",
            be = "bottom",
            _e = "right",
            we = "left",
            xe = "auto",
            Ee = [ye, be, _e, we],
            Te = "start",
            Ce = "end",
            Ae = "clippingParents",
            ke = "viewport",
            Se = "popper",
            De = "reference",
            Le = Ee.reduce(function (e, t) {
                return e.concat([t + "-" + Te, t + "-" + Ce]);
            }, []),
            Oe = [].concat(Ee, [xe]).reduce(function (e, t) {
                return e.concat([t, t + "-" + Te, t + "-" + Ce]);
            }, []),
            Ne = "beforeRead",
            je = "afterRead",
            Ie = "beforeMain",
            Pe = "afterMain",
            He = "beforeWrite",
            Me = "afterWrite",
            qe = [Ne, "read", je, Ie, "main", Pe, He, "write", Me];
        function $e(e) {
            return e ? (e.nodeName || "").toLowerCase() : null;
        }
        function Re(e) {
            if (null == e) return window;
            if ("[object Window]" === e.toString()) return e;
            e = e.ownerDocument;
            return (e && e.defaultView) || window;
        }
        function Be(e) {
            return e instanceof Re(e).Element || e instanceof Element;
        }
        function We(e) {
            return e instanceof Re(e).HTMLElement || e instanceof HTMLElement;
        }
        function Fe(e) {
            return (
                "undefined" != typeof ShadowRoot &&
                (e instanceof Re(e).ShadowRoot || e instanceof ShadowRoot)
            );
        }
        var ze = {
            name: "applyStyles",
            enabled: !0,
            phase: "write",
            fn: function (e) {
                var r = e.state;
                Object.keys(r.elements).forEach(function (e) {
                    var t = r.styles[e] || {},
                        n = r.attributes[e] || {},
                        i = r.elements[e];
                    We(i) &&
                        $e(i) &&
                        (Object.assign(i.style, t),
                        Object.keys(n).forEach(function (e) {
                            var t = n[e];
                            !1 === t
                                ? i.removeAttribute(e)
                                : i.setAttribute(e, !0 === t ? "" : t);
                        }));
                });
            },
            effect: function (e) {
                var i = e.state,
                    r = {
                        popper: {
                            position: i.options.strategy,
                            left: "0",
                            top: "0",
                            margin: "0",
                        },
                        arrow: { position: "absolute" },
                        reference: {},
                    };
                return (
                    Object.assign(i.elements.popper.style, r.popper),
                    (i.styles = r),
                    i.elements.arrow &&
                        Object.assign(i.elements.arrow.style, r.arrow),
                    function () {
                        Object.keys(i.elements).forEach(function (e) {
                            var t = i.elements[e],
                                n = i.attributes[e] || {},
                                e = Object.keys(
                                    (i.styles.hasOwnProperty(e) ? i.styles : r)[
                                        e
                                    ]
                                ).reduce(function (e, t) {
                                    return (e[t] = ""), e;
                                }, {});
                            We(t) &&
                                $e(t) &&
                                (Object.assign(t.style, e),
                                Object.keys(n).forEach(function (e) {
                                    t.removeAttribute(e);
                                }));
                        });
                    }
                );
            },
            requires: ["computeStyles"],
        };
        function Ue(e) {
            return e.split("-")[0];
        }
        function Xe(e) {
            e = e.getBoundingClientRect();
            return {
                width: e.width,
                height: e.height,
                top: e.top,
                right: e.right,
                bottom: e.bottom,
                left: e.left,
                x: e.left,
                y: e.top,
            };
        }
        function Ve(e) {
            var t = Xe(e),
                n = e.offsetWidth,
                i = e.offsetHeight;
            return (
                Math.abs(t.width - n) <= 1 && (n = t.width),
                Math.abs(t.height - i) <= 1 && (i = t.height),
                { x: e.offsetLeft, y: e.offsetTop, width: n, height: i }
            );
        }
        function Ye(e, t) {
            var n = t.getRootNode && t.getRootNode();
            if (e.contains(t)) return !0;
            if (n && Fe(n)) {
                var i = t;
                do {
                    if (i && e.isSameNode(i)) return !0;
                } while ((i = i.parentNode || i.host));
            }
            return !1;
        }
        function Qe(e) {
            return Re(e).getComputedStyle(e);
        }
        function Ke(e) {
            return (
                (Be(e) ? e.ownerDocument : e.document) || window.document
            ).documentElement;
        }
        function Ge(e) {
            return "html" === $e(e)
                ? e
                : e.assignedSlot ||
                      e.parentNode ||
                      (Fe(e) ? e.host : null) ||
                      Ke(e);
        }
        function Je(e) {
            return We(e) && "fixed" !== Qe(e).position ? e.offsetParent : null;
        }
        function Ze(e) {
            for (
                var t = Re(e), n = Je(e);
                n &&
                0 <= ["table", "td", "th"].indexOf($e(n)) &&
                "static" === Qe(n).position;

            )
                n = Je(n);
            return (
                ((!n ||
                    ("html" !== $e(n) &&
                        ("body" !== $e(n) || "static" !== Qe(n).position))) &&
                    (n ||
                        (function (e) {
                            var t =
                                    -1 !==
                                    navigator.userAgent
                                        .toLowerCase()
                                        .indexOf("firefox"),
                                n =
                                    -1 !==
                                    navigator.userAgent.indexOf("Trident");
                            if (n && We(e) && "fixed" === Qe(e).position)
                                return null;
                            for (
                                var i = Ge(e);
                                We(i) && ["html", "body"].indexOf($e(i)) < 0;

                            ) {
                                var r = Qe(i);
                                if (
                                    "none" !== r.transform ||
                                    "none" !== r.perspective ||
                                    "paint" === r.contain ||
                                    -1 !==
                                        ["transform", "perspective"].indexOf(
                                            r.willChange
                                        ) ||
                                    (t && "filter" === r.willChange) ||
                                    (t && r.filter && "none" !== r.filter)
                                )
                                    return i;
                                i = i.parentNode;
                            }
                            return null;
                        })(e))) ||
                t
            );
        }
        function et(e) {
            return 0 <= ["top", "bottom"].indexOf(e) ? "x" : "y";
        }
        var tt = Math.max,
            nt = Math.min,
            it = Math.round;
        function rt(e, t, n) {
            return tt(e, nt(t, n));
        }
        function ot() {
            return { top: 0, right: 0, bottom: 0, left: 0 };
        }
        function st(e) {
            return Object.assign({}, ot(), e);
        }
        function at(n, e) {
            return e.reduce(function (e, t) {
                return (e[t] = n), e;
            }, {});
        }
        var lt = {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function (e) {
                    var t,
                        n,
                        i = e.state,
                        r = e.name,
                        o = e.options,
                        s = i.elements.arrow,
                        a = i.modifiersData.popperOffsets,
                        l = Ue(i.placement),
                        c = et(l),
                        u = 0 <= [we, _e].indexOf(l) ? "height" : "width";
                    s &&
                        a &&
                        ((t = o.padding),
                        (n = i),
                        (e = st(
                            "number" !=
                                typeof (t =
                                    "function" == typeof t
                                        ? t(
                                              Object.assign({}, n.rects, {
                                                  placement: n.placement,
                                              })
                                          )
                                        : t)
                                ? t
                                : at(t, Ee)
                        )),
                        (l = Ve(s)),
                        (o = "y" === c ? ye : we),
                        (n = "y" === c ? be : _e),
                        (t =
                            i.rects.reference[u] +
                            i.rects.reference[c] -
                            a[c] -
                            i.rects.popper[u]),
                        (a = a[c] - i.rects.reference[c]),
                        (s = (s = Ze(s))
                            ? "y" === c
                                ? s.clientHeight || 0
                                : s.clientWidth || 0
                            : 0),
                        (o = e[o]),
                        (n = s - l[u] - e[n]),
                        (n = rt(
                            o,
                            (a = s / 2 - l[u] / 2 + (t / 2 - a / 2)),
                            n
                        )),
                        (i.modifiersData[r] =
                            (((r = {})[c] = n), (r.centerOffset = n - a), r)));
                },
                effect: function (e) {
                    var t = e.state;
                    null !=
                        (e =
                            void 0 === (e = e.options.element)
                                ? "[data-popper-arrow]"
                                : e) &&
                        ("string" != typeof e ||
                            (e = t.elements.popper.querySelector(e))) &&
                        Ye(t.elements.popper, e) &&
                        (t.elements.arrow = e);
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"],
            },
            ct = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
        function ut(e) {
            var t = e.popper,
                n = e.popperRect,
                i = e.placement,
                r = e.offsets,
                o = e.position,
                s = e.gpuAcceleration,
                a = e.adaptive,
                l = e.roundOffsets,
                c =
                    !0 === l
                        ? ((h = (g = r).x),
                          (p = g.y),
                          (g = window.devicePixelRatio || 1),
                          {
                              x: it(it(h * g) / g) || 0,
                              y: it(it(p * g) / g) || 0,
                          })
                        : "function" == typeof l
                        ? l(r)
                        : r,
                u = c.x,
                d = void 0 === u ? 0 : u,
                f = c.y,
                e = void 0 === f ? 0 : f,
                h = r.hasOwnProperty("x"),
                p = r.hasOwnProperty("y"),
                g = we,
                l = ye,
                u = window;
            a &&
                ((c = "clientHeight"),
                (f = "clientWidth"),
                (r = Ze(t)) === Re(t) &&
                    "static" !== Qe((r = Ke(t))).position &&
                    ((c = "scrollHeight"), (f = "scrollWidth")),
                i === ye &&
                    ((l = be), (e -= r[c] - n.height), (e *= s ? 1 : -1)),
                i === we &&
                    ((g = _e), (d -= r[f] - n.width), (d *= s ? 1 : -1)));
            var a = Object.assign({ position: o }, a && ct);
            return s
                ? Object.assign(
                      {},
                      a,
                      (((s = {})[l] = p ? "0" : ""),
                      (s[g] = h ? "0" : ""),
                      (s.transform =
                          (u.devicePixelRatio || 1) < 2
                              ? "translate(" + d + "px, " + e + "px)"
                              : "translate3d(" + d + "px, " + e + "px, 0)"),
                      s)
                  )
                : Object.assign(
                      {},
                      a,
                      (((a = {})[l] = p ? e + "px" : ""),
                      (a[g] = h ? d + "px" : ""),
                      (a.transform = ""),
                      a)
                  );
        }
        var dt = {
                name: "computeStyles",
                enabled: !0,
                phase: "beforeWrite",
                fn: function (e) {
                    var t = e.state,
                        n = e.options,
                        e = void 0 === (i = n.gpuAcceleration) || i,
                        i = void 0 === (i = n.adaptive) || i,
                        n = void 0 === (n = n.roundOffsets) || n,
                        e = {
                            placement: Ue(t.placement),
                            popper: t.elements.popper,
                            popperRect: t.rects.popper,
                            gpuAcceleration: e,
                        };
                    null != t.modifiersData.popperOffsets &&
                        (t.styles.popper = Object.assign(
                            {},
                            t.styles.popper,
                            ut(
                                Object.assign({}, e, {
                                    offsets: t.modifiersData.popperOffsets,
                                    position: t.options.strategy,
                                    adaptive: i,
                                    roundOffsets: n,
                                })
                            )
                        )),
                        null != t.modifiersData.arrow &&
                            (t.styles.arrow = Object.assign(
                                {},
                                t.styles.arrow,
                                ut(
                                    Object.assign({}, e, {
                                        offsets: t.modifiersData.arrow,
                                        position: "absolute",
                                        adaptive: !1,
                                        roundOffsets: n,
                                    })
                                )
                            )),
                        (t.attributes.popper = Object.assign(
                            {},
                            t.attributes.popper,
                            { "data-popper-placement": t.placement }
                        ));
                },
                data: {},
            },
            ft = { passive: !0 };
        var ht = {
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function () {},
                effect: function (e) {
                    var t = e.state,
                        n = e.instance,
                        i = e.options,
                        r = void 0 === (e = i.scroll) || e,
                        o = void 0 === (i = i.resize) || i,
                        s = Re(t.elements.popper),
                        a = [].concat(
                            t.scrollParents.reference,
                            t.scrollParents.popper
                        );
                    return (
                        r &&
                            a.forEach(function (e) {
                                e.addEventListener("scroll", n.update, ft);
                            }),
                        o && s.addEventListener("resize", n.update, ft),
                        function () {
                            r &&
                                a.forEach(function (e) {
                                    e.removeEventListener(
                                        "scroll",
                                        n.update,
                                        ft
                                    );
                                }),
                                o &&
                                    s.removeEventListener(
                                        "resize",
                                        n.update,
                                        ft
                                    );
                        }
                    );
                },
                data: {},
            },
            pt = { left: "right", right: "left", bottom: "top", top: "bottom" };
        function gt(e) {
            return e.replace(/left|right|bottom|top/g, function (e) {
                return pt[e];
            });
        }
        var mt = { start: "end", end: "start" };
        function vt(e) {
            return e.replace(/start|end/g, function (e) {
                return mt[e];
            });
        }
        function yt(e) {
            e = Re(e);
            return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
        }
        function bt(e) {
            return Xe(Ke(e)).left + yt(e).scrollLeft;
        }
        function _t(e) {
            var t = Qe(e),
                n = t.overflow,
                e = t.overflowX,
                t = t.overflowY;
            return /auto|scroll|overlay|hidden/.test(n + t + e);
        }
        function wt(e, t) {
            void 0 === t && (t = []);
            var n = (function e(t) {
                    return 0 <= ["html", "body", "#document"].indexOf($e(t))
                        ? t.ownerDocument.body
                        : We(t) && _t(t)
                        ? t
                        : e(Ge(t));
                })(e),
                e = n === (null == (i = e.ownerDocument) ? void 0 : i.body),
                i = Re(n),
                n = e ? [i].concat(i.visualViewport || [], _t(n) ? n : []) : n,
                t = t.concat(n);
            return e ? t : t.concat(wt(Ge(n)));
        }
        function xt(e) {
            return Object.assign({}, e, {
                left: e.x,
                top: e.y,
                right: e.x + e.width,
                bottom: e.y + e.height,
            });
        }
        function Et(e, t) {
            return t === ke
                ? xt(
                      ((o = Re((r = e))),
                      (s = Ke(r)),
                      (a = o.visualViewport),
                      (l = s.clientWidth),
                      (c = s.clientHeight),
                      (s = o = 0),
                      a &&
                          ((l = a.width),
                          (c = a.height),
                          /^((?!chrome|android).)*safari/i.test(
                              navigator.userAgent
                          ) || ((o = a.offsetLeft), (s = a.offsetTop))),
                      { width: l, height: c, x: o + bt(r), y: s })
                  )
                : We(t)
                ? (((i = Xe((n = t))).top = i.top + n.clientTop),
                  (i.left = i.left + n.clientLeft),
                  (i.bottom = i.top + n.clientHeight),
                  (i.right = i.left + n.clientWidth),
                  (i.width = n.clientWidth),
                  (i.height = n.clientHeight),
                  (i.x = i.left),
                  (i.y = i.top),
                  i)
                : xt(
                      ((r = Ke(e)),
                      (s = Ke(r)),
                      (t = yt(r)),
                      (i = null == (n = r.ownerDocument) ? void 0 : n.body),
                      (e = tt(
                          s.scrollWidth,
                          s.clientWidth,
                          i ? i.scrollWidth : 0,
                          i ? i.clientWidth : 0
                      )),
                      (n = tt(
                          s.scrollHeight,
                          s.clientHeight,
                          i ? i.scrollHeight : 0,
                          i ? i.clientHeight : 0
                      )),
                      (r = -t.scrollLeft + bt(r)),
                      (t = -t.scrollTop),
                      "rtl" === Qe(i || s).direction &&
                          (r += tt(s.clientWidth, i ? i.clientWidth : 0) - e),
                      { width: e, height: n, x: r, y: t })
                  );
            var n, i, r, o, s, a, l, c;
        }
        function Tt(n, e, t) {
            var i,
                r,
                o,
                e =
                    "clippingParents" === e
                        ? ((r = wt(Ge((i = n)))),
                          Be(
                              (o =
                                  0 <=
                                      ["absolute", "fixed"].indexOf(
                                          Qe(i).position
                                      ) && We(i)
                                      ? Ze(i)
                                      : i)
                          )
                              ? r.filter(function (e) {
                                    return (
                                        Be(e) && Ye(e, o) && "body" !== $e(e)
                                    );
                                })
                              : [])
                        : [].concat(e),
                e = [].concat(e, [t]),
                t = e[0],
                t = e.reduce(function (e, t) {
                    t = Et(n, t);
                    return (
                        (e.top = tt(t.top, e.top)),
                        (e.right = nt(t.right, e.right)),
                        (e.bottom = nt(t.bottom, e.bottom)),
                        (e.left = tt(t.left, e.left)),
                        e
                    );
                }, Et(n, t));
            return (
                (t.width = t.right - t.left),
                (t.height = t.bottom - t.top),
                (t.x = t.left),
                (t.y = t.top),
                t
            );
        }
        function Ct(e) {
            return e.split("-")[1];
        }
        function At(e) {
            var t,
                n = e.reference,
                i = e.element,
                r = e.placement,
                e = r ? Ue(r) : null,
                r = r ? Ct(r) : null,
                o = n.x + n.width / 2 - i.width / 2,
                s = n.y + n.height / 2 - i.height / 2;
            switch (e) {
                case ye:
                    t = { x: o, y: n.y - i.height };
                    break;
                case be:
                    t = { x: o, y: n.y + n.height };
                    break;
                case _e:
                    t = { x: n.x + n.width, y: s };
                    break;
                case we:
                    t = { x: n.x - i.width, y: s };
                    break;
                default:
                    t = { x: n.x, y: n.y };
            }
            var a = e ? et(e) : null;
            if (null != a) {
                var l = "y" === a ? "height" : "width";
                switch (r) {
                    case Te:
                        t[a] = t[a] - (n[l] / 2 - i[l] / 2);
                        break;
                    case Ce:
                        t[a] = t[a] + (n[l] / 2 - i[l] / 2);
                }
            }
            return t;
        }
        function kt(e, t) {
            var i,
                n = (t = void 0 === t ? {} : t).placement,
                r = void 0 === n ? e.placement : n,
                o = t.boundary,
                s = void 0 === o ? Ae : o,
                a = t.rootBoundary,
                l = void 0 === a ? ke : a,
                c = t.elementContext,
                n = void 0 === c ? Se : c,
                o = t.altBoundary,
                a = void 0 !== o && o,
                c = t.padding,
                o = void 0 === c ? 0 : c,
                t = st("number" != typeof o ? o : at(o, Ee)),
                c = e.elements.reference,
                o = e.rects.popper,
                a = e.elements[a ? (n === Se ? De : Se) : n],
                s = Tt(
                    Be(a) ? a : a.contextElement || Ke(e.elements.popper),
                    s,
                    l
                ),
                l = Xe(c),
                c = At({
                    reference: l,
                    element: o,
                    strategy: "absolute",
                    placement: r,
                }),
                c = xt(Object.assign({}, o, c)),
                l = n === Se ? c : l,
                u = {
                    top: s.top - l.top + t.top,
                    bottom: l.bottom - s.bottom + t.bottom,
                    left: s.left - l.left + t.left,
                    right: l.right - s.right + t.right,
                },
                e = e.modifiersData.offset;
            return (
                n === Se &&
                    e &&
                    ((i = e[r]),
                    Object.keys(u).forEach(function (e) {
                        var t = 0 <= [_e, be].indexOf(e) ? 1 : -1,
                            n = 0 <= [ye, be].indexOf(e) ? "y" : "x";
                        u[e] += i[n] * t;
                    })),
                u
            );
        }
        var St = {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var d = e.state,
                    t = e.options,
                    n = e.name;
                if (!d.modifiersData[n]._skip) {
                    for (
                        var i = t.mainAxis,
                            r = void 0 === i || i,
                            e = t.altAxis,
                            o = void 0 === e || e,
                            i = t.fallbackPlacements,
                            f = t.padding,
                            h = t.boundary,
                            p = t.rootBoundary,
                            s = t.altBoundary,
                            e = t.flipVariations,
                            g = void 0 === e || e,
                            m = t.allowedAutoPlacements,
                            e = d.options.placement,
                            t = Ue(e),
                            t =
                                i ||
                                (t === e || !g
                                    ? [gt(e)]
                                    : (function (e) {
                                          if (Ue(e) === xe) return [];
                                          var t = gt(e);
                                          return [vt(e), t, vt(t)];
                                      })(e)),
                            a = [e].concat(t).reduce(function (e, t) {
                                return e.concat(
                                    Ue(t) === xe
                                        ? ((n = d),
                                          (r = (i =
                                              void 0 ===
                                              (i = {
                                                  placement: t,
                                                  boundary: h,
                                                  rootBoundary: p,
                                                  padding: f,
                                                  flipVariations: g,
                                                  allowedAutoPlacements: m,
                                              })
                                                  ? {}
                                                  : i).placement),
                                          (o = i.boundary),
                                          (s = i.rootBoundary),
                                          (a = i.padding),
                                          (e = i.flipVariations),
                                          (l =
                                              void 0 ===
                                              (i = i.allowedAutoPlacements)
                                                  ? Oe
                                                  : i),
                                          (c = Ct(r)),
                                          (r = c
                                              ? e
                                                  ? Le
                                                  : Le.filter(function (e) {
                                                        return Ct(e) === c;
                                                    })
                                              : Ee),
                                          (u = (e =
                                              0 ===
                                              (e = r.filter(function (e) {
                                                  return 0 <= l.indexOf(e);
                                              })).length
                                                  ? r
                                                  : e).reduce(function (e, t) {
                                              return (
                                                  (e[t] = kt(n, {
                                                      placement: t,
                                                      boundary: o,
                                                      rootBoundary: s,
                                                      padding: a,
                                                  })[Ue(t)]),
                                                  e
                                              );
                                          }, {})),
                                          Object.keys(u).sort(function (e, t) {
                                              return u[e] - u[t];
                                          }))
                                        : t
                                );
                                var n, i, r, o, s, a, l, c, u;
                            }, []),
                            l = d.rects.reference,
                            c = d.rects.popper,
                            u = new Map(),
                            v = !0,
                            y = a[0],
                            b = 0;
                        b < a.length;
                        b++
                    ) {
                        var _ = a[b],
                            w = Ue(_),
                            x = Ct(_) === Te,
                            E = 0 <= [ye, be].indexOf(w),
                            T = E ? "width" : "height",
                            C = kt(d, {
                                placement: _,
                                boundary: h,
                                rootBoundary: p,
                                altBoundary: s,
                                padding: f,
                            }),
                            E = E ? (x ? _e : we) : x ? be : ye;
                        l[T] > c[T] && (E = gt(E));
                        (x = gt(E)), (T = []);
                        if (
                            (r && T.push(C[w] <= 0),
                            o && T.push(C[E] <= 0, C[x] <= 0),
                            T.every(function (e) {
                                return e;
                            }))
                        ) {
                            (y = _), (v = !1);
                            break;
                        }
                        u.set(_, T);
                    }
                    if (v)
                        for (var A = g ? 3 : 1; 0 < A; A--)
                            if (
                                "break" ===
                                (function (t) {
                                    var e = a.find(function (e) {
                                        e = u.get(e);
                                        if (e)
                                            return e
                                                .slice(0, t)
                                                .every(function (e) {
                                                    return e;
                                                });
                                    });
                                    if (e) return (y = e), "break";
                                })(A)
                            )
                                break;
                    d.placement !== y &&
                        ((d.modifiersData[n]._skip = !0),
                        (d.placement = y),
                        (d.reset = !0));
                }
            },
            requiresIfExists: ["offset"],
            data: { _skip: !1 },
        };
        function Dt(e, t, n) {
            return {
                top:
                    e.top -
                    t.height -
                    (n = void 0 === n ? { x: 0, y: 0 } : n).y,
                right: e.right - t.width + n.x,
                bottom: e.bottom - t.height + n.y,
                left: e.left - t.width - n.x,
            };
        }
        function Lt(t) {
            return [ye, _e, be, we].some(function (e) {
                return 0 <= t[e];
            });
        }
        var Ot = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (e) {
                var t = e.state,
                    n = e.name,
                    i = t.rects.reference,
                    r = t.rects.popper,
                    o = t.modifiersData.preventOverflow,
                    s = kt(t, { elementContext: "reference" }),
                    e = kt(t, { altBoundary: !0 }),
                    i = Dt(s, i),
                    e = Dt(e, r, o),
                    r = Lt(i),
                    o = Lt(e);
                (t.modifiersData[n] = {
                    referenceClippingOffsets: i,
                    popperEscapeOffsets: e,
                    isReferenceHidden: r,
                    hasPopperEscaped: o,
                }),
                    (t.attributes.popper = Object.assign(
                        {},
                        t.attributes.popper,
                        {
                            "data-popper-reference-hidden": r,
                            "data-popper-escaped": o,
                        }
                    ));
            },
        };
        K = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function (e) {
                var s = e.state,
                    t = e.options,
                    n = e.name,
                    a = void 0 === (i = t.offset) ? [0, 0] : i,
                    e = Oe.reduce(function (e, t) {
                        var n, i, r, o;
                        return (
                            (e[t] =
                                ((n = t),
                                (i = s.rects),
                                (r = a),
                                (o = Ue(n)),
                                (t = 0 <= [we, ye].indexOf(o) ? -1 : 1),
                                (r =
                                    (r = (n =
                                        "function" == typeof r
                                            ? r(
                                                  Object.assign({}, i, {
                                                      placement: n,
                                                  })
                                              )
                                            : r)[0]) || 0),
                                (n = ((n = n[1]) || 0) * t),
                                0 <= [we, _e].indexOf(o)
                                    ? { x: n, y: r }
                                    : { x: r, y: n })),
                            e
                        );
                    }, {}),
                    i = (t = e[s.placement]).x,
                    t = t.y;
                null != s.modifiersData.popperOffsets &&
                    ((s.modifiersData.popperOffsets.x += i),
                    (s.modifiersData.popperOffsets.y += t)),
                    (s.modifiersData[n] = e);
            },
        };
        var Nt = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (e) {
                var t = e.state,
                    e = e.name;
                t.modifiersData[e] = At({
                    reference: t.rects.reference,
                    element: t.rects.popper,
                    strategy: "absolute",
                    placement: t.placement,
                });
            },
            data: {},
        };
        var jt = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function (e) {
                var t = e.state,
                    n = e.options,
                    i = e.name,
                    r = void 0 === (x = n.mainAxis) || x,
                    o = void 0 !== (E = n.altAxis) && E,
                    s = n.boundary,
                    a = n.rootBoundary,
                    l = n.altBoundary,
                    c = n.padding,
                    u = n.tether,
                    d = void 0 === u || u,
                    f = n.tetherOffset,
                    h = void 0 === f ? 0 : f,
                    p = kt(t, {
                        boundary: s,
                        rootBoundary: a,
                        padding: c,
                        altBoundary: l,
                    }),
                    g = Ue(t.placement),
                    m = Ct(t.placement),
                    v = !m,
                    y = et(g),
                    b = "x" === y ? "y" : "x",
                    _ = t.modifiersData.popperOffsets,
                    w = t.rects.reference,
                    e = t.rects.popper,
                    x =
                        "function" == typeof h
                            ? h(
                                  Object.assign({}, t.rects, {
                                      placement: t.placement,
                                  })
                              )
                            : h,
                    E = { x: 0, y: 0 };
                _ &&
                    ((r || o) &&
                        ((u = "y" === y ? "height" : "width"),
                        (n = _[y]),
                        (s = _[y] + p[(f = "y" === y ? ye : we)]),
                        (c = _[y] - p[(a = "y" === y ? be : _e)]),
                        (l = d ? -e[u] / 2 : 0),
                        (g = (m === Te ? w : e)[u]),
                        (h = m === Te ? -e[u] : -w[u]),
                        (m = t.elements.arrow),
                        (e = d && m ? Ve(m) : { width: 0, height: 0 }),
                        (f = (m = t.modifiersData["arrow#persistent"]
                            ? t.modifiersData["arrow#persistent"].padding
                            : ot())[f]),
                        (a = m[a]),
                        (e = rt(0, w[u], e[u])),
                        (f = v ? w[u] / 2 - l - e - f - x : g - e - f - x),
                        (e = v ? -w[u] / 2 + l + e + a + x : h + e + a + x),
                        (x = (a = t.elements.arrow && Ze(t.elements.arrow))
                            ? "y" === y
                                ? a.clientTop || 0
                                : a.clientLeft || 0
                            : 0),
                        (a = t.modifiersData.offset
                            ? t.modifiersData.offset[t.placement][y]
                            : 0),
                        (x = _[y] + f - a - x),
                        (a = _[y] + e - a),
                        r &&
                            ((c = rt(d ? nt(s, x) : s, n, d ? tt(c, a) : c)),
                            (_[y] = c),
                            (E[y] = c - n)),
                        o &&
                            ((o = (n = _[b]) + p["x" === y ? ye : we]),
                            (y = n - p["x" === y ? be : _e]),
                            (y = rt(d ? nt(o, x) : o, n, d ? tt(y, a) : y)),
                            (_[b] = y),
                            (E[b] = y - n))),
                    (t.modifiersData[i] = E));
            },
            requiresIfExists: ["offset"],
        };
        function It(e, t, n) {
            void 0 === n && (n = !1);
            var i = Ke(t),
                r = Xe(e),
                o = We(t),
                s = { scrollLeft: 0, scrollTop: 0 },
                e = { x: 0, y: 0 };
            return (
                (!o && (o || n)) ||
                    (("body" === $e(t) && !_t(i)) ||
                        (s =
                            (o = t) !== Re(o) && We(o)
                                ? {
                                      scrollLeft: (n = o).scrollLeft,
                                      scrollTop: n.scrollTop,
                                  }
                                : yt(o)),
                    We(t)
                        ? (((e = Xe(t)).x += t.clientLeft),
                          (e.y += t.clientTop))
                        : i && (e.x = bt(i))),
                {
                    x: r.left + s.scrollLeft - e.x,
                    y: r.top + s.scrollTop - e.y,
                    width: r.width,
                    height: r.height,
                }
            );
        }
        function Pt(e) {
            var n = new Map(),
                i = new Set(),
                r = [];
            return (
                e.forEach(function (e) {
                    n.set(e.name, e);
                }),
                e.forEach(function (e) {
                    i.has(e.name) ||
                        !(function t(e) {
                            i.add(e.name),
                                []
                                    .concat(
                                        e.requires || [],
                                        e.requiresIfExists || []
                                    )
                                    .forEach(function (e) {
                                        i.has(e) || ((e = n.get(e)) && t(e));
                                    }),
                                r.push(e);
                        })(e);
                }),
                r
            );
        }
        var Ht = { placement: "bottom", modifiers: [], strategy: "absolute" };
        function Mt() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return !t.some(function (e) {
                return !(e && "function" == typeof e.getBoundingClientRect);
            });
        }
        function qt(e) {
            var t = (e = void 0 === e ? {} : e).defaultModifiers,
                d = void 0 === t ? [] : t,
                e = e.defaultOptions,
                f = void 0 === e ? Ht : e;
            return function (i, r, t) {
                void 0 === t && (t = f);
                var n,
                    o,
                    s = {
                        placement: "bottom",
                        orderedModifiers: [],
                        options: Object.assign({}, Ht, f),
                        modifiersData: {},
                        elements: { reference: i, popper: r },
                        attributes: {},
                        styles: {},
                    },
                    a = [],
                    l = !1,
                    c = {
                        state: s,
                        setOptions: function (e) {
                            u(),
                                (s.options = Object.assign(
                                    {},
                                    f,
                                    s.options,
                                    e
                                )),
                                (s.scrollParents = {
                                    reference: Be(i)
                                        ? wt(i)
                                        : i.contextElement
                                        ? wt(i.contextElement)
                                        : [],
                                    popper: wt(r),
                                });
                            var n,
                                t,
                                e =
                                    ((e = [].concat(d, s.options.modifiers)),
                                    (t = e.reduce(function (e, t) {
                                        var n = e[t.name];
                                        return (
                                            (e[t.name] = n
                                                ? Object.assign({}, n, t, {
                                                      options: Object.assign(
                                                          {},
                                                          n.options,
                                                          t.options
                                                      ),
                                                      data: Object.assign(
                                                          {},
                                                          n.data,
                                                          t.data
                                                      ),
                                                  })
                                                : t),
                                            e
                                        );
                                    }, {})),
                                    (e = Object.keys(t).map(function (e) {
                                        return t[e];
                                    })),
                                    (n = Pt(e)),
                                    qe.reduce(function (e, t) {
                                        return e.concat(
                                            n.filter(function (e) {
                                                return e.phase === t;
                                            })
                                        );
                                    }, []));
                            return (
                                (s.orderedModifiers = e.filter(function (e) {
                                    return e.enabled;
                                })),
                                s.orderedModifiers.forEach(function (e) {
                                    var t = e.name,
                                        n = e.options,
                                        e = e.effect;
                                    "function" == typeof e &&
                                        ((n = e({
                                            state: s,
                                            name: t,
                                            instance: c,
                                            options: void 0 === n ? {} : n,
                                        })),
                                        a.push(n || function () {}));
                                }),
                                c.update()
                            );
                        },
                        forceUpdate: function () {
                            if (!l) {
                                var e = s.elements,
                                    t = e.reference,
                                    e = e.popper;
                                if (Mt(t, e)) {
                                    (s.rects = {
                                        reference: It(
                                            t,
                                            Ze(e),
                                            "fixed" === s.options.strategy
                                        ),
                                        popper: Ve(e),
                                    }),
                                        (s.reset = !1),
                                        (s.placement = s.options.placement),
                                        s.orderedModifiers.forEach(function (
                                            e
                                        ) {
                                            return (s.modifiersData[e.name] =
                                                Object.assign({}, e.data));
                                        });
                                    for (
                                        var n, i, r, o = 0;
                                        o < s.orderedModifiers.length;
                                        o++
                                    )
                                        !0 !== s.reset
                                            ? ((n = (r = s.orderedModifiers[o])
                                                  .fn),
                                              (i = r.options),
                                              (r = r.name),
                                              "function" == typeof n &&
                                                  (s =
                                                      n({
                                                          state: s,
                                                          options:
                                                              void 0 === i
                                                                  ? {}
                                                                  : i,
                                                          name: r,
                                                          instance: c,
                                                      }) || s))
                                            : ((s.reset = !1), (o = -1));
                                }
                            }
                        },
                        update:
                            ((n = function () {
                                return new Promise(function (e) {
                                    c.forceUpdate(), e(s);
                                });
                            }),
                            function () {
                                return (o =
                                    o ||
                                    new Promise(function (e) {
                                        Promise.resolve().then(function () {
                                            (o = void 0), e(n());
                                        });
                                    }));
                            }),
                        destroy: function () {
                            u(), (l = !0);
                        },
                    };
                return (
                    Mt(i, r) &&
                        c.setOptions(t).then(function (e) {
                            !l && t.onFirstUpdate && t.onFirstUpdate(e);
                        }),
                    c
                );
                function u() {
                    a.forEach(function (e) {
                        return e();
                    }),
                        (a = []);
                }
            };
        }
        var $t = qt({ defaultModifiers: [ht, Nt, dt, ze, K, St, jt, lt, Ot] }),
            Rt = Object.freeze({
                __proto__: null,
                popperGenerator: qt,
                detectOverflow: kt,
                createPopperBase: qt(),
                createPopper: $t,
                createPopperLite: qt({ defaultModifiers: [ht, Nt, dt, ze] }),
                top: ye,
                bottom: be,
                right: _e,
                left: we,
                auto: xe,
                basePlacements: Ee,
                start: Te,
                end: Ce,
                clippingParents: Ae,
                viewport: ke,
                popper: Se,
                reference: De,
                variationPlacements: Le,
                placements: Oe,
                beforeRead: Ne,
                read: "read",
                afterRead: je,
                beforeMain: Ie,
                main: "main",
                afterMain: Pe,
                beforeWrite: He,
                write: "write",
                afterWrite: Me,
                modifierPhases: qe,
                applyStyles: ze,
                arrow: lt,
                computeStyles: dt,
                eventListeners: ht,
                flip: St,
                hide: Ot,
                offset: K,
                popperOffsets: Nt,
                preventOverflow: jt,
            });
        const Bt = "dropdown";
        (Ot = ".bs.dropdown"), (K = ".data-api");
        const Wt = "Escape",
            Ft = "ArrowUp",
            zt = "ArrowDown",
            Ut = new RegExp(`${Ft}|${zt}|${Wt}`);
        (Nt = `click${Ot}${K}`), (jt = `keydown${Ot}${K}`);
        const Xt = "show",
            Vt = '[data-bs-toggle="dropdown"]',
            Yt = ".dropdown-menu",
            Qt = y() ? "top-end" : "top-start",
            Kt = y() ? "top-start" : "top-end",
            Gt = y() ? "bottom-end" : "bottom-start",
            Jt = y() ? "bottom-start" : "bottom-end",
            Zt = y() ? "left-start" : "right-start",
            en = y() ? "right-start" : "left-start",
            tn = {
                offset: [0, 2],
                boundary: "clippingParents",
                reference: "toggle",
                display: "dynamic",
                popperConfig: null,
                autoClose: !0,
            },
            nn = {
                offset: "(array|string|function)",
                boundary: "(string|element)",
                reference: "(string|element|object)",
                display: "string",
                popperConfig: "(null|object|function)",
                autoClose: "(boolean|string)",
            };
        class rn extends W {
            constructor(e, t) {
                super(e),
                    (this._popper = null),
                    (this._config = this._getConfig(t)),
                    (this._menu = this._getMenuElement()),
                    (this._inNavbar = this._detectNavbar()),
                    this._addEventListeners();
            }
            static get Default() {
                return tn;
            }
            static get DefaultType() {
                return nn;
            }
            static get NAME() {
                return Bt;
            }
            toggle() {
                f(this._element) ||
                    (this._element.classList.contains(Xt)
                        ? this.hide()
                        : this.show());
            }
            show() {
                if (!f(this._element) && !this._menu.classList.contains(Xt)) {
                    const n = rn.getParentFromElement(this._element);
                    var e = { relatedTarget: this._element };
                    if (
                        !M.trigger(this._element, "show.bs.dropdown", e)
                            .defaultPrevented
                    ) {
                        if (this._inNavbar)
                            Y.setDataAttribute(this._menu, "popper", "none");
                        else {
                            if (void 0 === Rt)
                                throw new TypeError(
                                    "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                                );
                            let e = this._element;
                            "parent" === this._config.reference
                                ? (e = n)
                                : c(this._config.reference)
                                ? (e = u(this._config.reference))
                                : "object" == typeof this._config.reference &&
                                  (e = this._config.reference);
                            const i = this._getPopperConfig();
                            var t = i.modifiers.find(
                                (e) =>
                                    "applyStyles" === e.name && !1 === e.enabled
                            );
                            (this._popper = $t(e, this._menu, i)),
                                t &&
                                    Y.setDataAttribute(
                                        this._menu,
                                        "popper",
                                        "static"
                                    );
                        }
                        "ontouchstart" in document.documentElement &&
                            !n.closest(".navbar-nav") &&
                            []
                                .concat(...document.body.children)
                                .forEach((e) => M.on(e, "mouseover", p)),
                            this._element.focus(),
                            this._element.setAttribute("aria-expanded", !0),
                            this._menu.classList.toggle(Xt),
                            this._element.classList.toggle(Xt),
                            M.trigger(this._element, "shown.bs.dropdown", e);
                    }
                }
            }
            hide() {
                var e;
                !f(this._element) &&
                    this._menu.classList.contains(Xt) &&
                    ((e = { relatedTarget: this._element }),
                    this._completeHide(e));
            }
            dispose() {
                this._popper && this._popper.destroy(), super.dispose();
            }
            update() {
                (this._inNavbar = this._detectNavbar()),
                    this._popper && this._popper.update();
            }
            _addEventListeners() {
                M.on(this._element, "click.bs.dropdown", (e) => {
                    e.preventDefault(), this.toggle();
                });
            }
            _completeHide(e) {
                M.trigger(this._element, "hide.bs.dropdown", e)
                    .defaultPrevented ||
                    ("ontouchstart" in document.documentElement &&
                        []
                            .concat(...document.body.children)
                            .forEach((e) => M.off(e, "mouseover", p)),
                    this._popper && this._popper.destroy(),
                    this._menu.classList.remove(Xt),
                    this._element.classList.remove(Xt),
                    this._element.setAttribute("aria-expanded", "false"),
                    Y.removeDataAttribute(this._menu, "popper"),
                    M.trigger(this._element, "hidden.bs.dropdown", e));
            }
            _getConfig(e) {
                if (
                    ((e = {
                        ...this.constructor.Default,
                        ...Y.getDataAttributes(this._element),
                        ...e,
                    }),
                    n(Bt, e, this.constructor.DefaultType),
                    "object" == typeof e.reference &&
                        !c(e.reference) &&
                        "function" != typeof e.reference.getBoundingClientRect)
                )
                    throw new TypeError(
                        `${Bt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
                    );
                return e;
            }
            _getMenuElement() {
                return d.next(this._element, Yt)[0];
            }
            _getPlacement() {
                const e = this._element.parentNode;
                if (e.classList.contains("dropend")) return Zt;
                if (e.classList.contains("dropstart")) return en;
                var t =
                    "end" ===
                    getComputedStyle(this._menu)
                        .getPropertyValue("--bs-position")
                        .trim();
                return e.classList.contains("dropup")
                    ? t
                        ? Kt
                        : Qt
                    : t
                    ? Jt
                    : Gt;
            }
            _detectNavbar() {
                return null !== this._element.closest(".navbar");
            }
            _getOffset() {
                const { offset: t } = this._config;
                return "string" == typeof t
                    ? t.split(",").map((e) => Number.parseInt(e, 10))
                    : "function" == typeof t
                    ? (e) => t(e, this._element)
                    : t;
            }
            _getPopperConfig() {
                const e = {
                    placement: this._getPlacement(),
                    modifiers: [
                        {
                            name: "preventOverflow",
                            options: { boundary: this._config.boundary },
                        },
                        {
                            name: "offset",
                            options: { offset: this._getOffset() },
                        },
                    ],
                };
                return (
                    "static" === this._config.display &&
                        (e.modifiers = [{ name: "applyStyles", enabled: !1 }]),
                    {
                        ...e,
                        ...("function" == typeof this._config.popperConfig
                            ? this._config.popperConfig(e)
                            : this._config.popperConfig),
                    }
                );
            }
            _selectMenuItem({ key: e, target: t }) {
                const n = d
                    .find(
                        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                        this._menu
                    )
                    .filter(i);
                n.length && w(n, t, e === zt, !n.includes(t)).focus();
            }
            static dropdownInterface(e, t) {
                const n = rn.getOrCreateInstance(e, t);
                if ("string" == typeof t) {
                    if (void 0 === n[t])
                        throw new TypeError(`No method named "${t}"`);
                    n[t]();
                }
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    rn.dropdownInterface(this, e);
                });
            }
            static clearMenus(n) {
                if (
                    !n ||
                    (2 !== n.button && ("keyup" !== n.type || "Tab" === n.key))
                ) {
                    var i = d.find(Vt);
                    for (let e = 0, t = i.length; e < t; e++) {
                        const o = rn.getInstance(i[e]);
                        if (
                            o &&
                            !1 !== o._config.autoClose &&
                            o._element.classList.contains(Xt)
                        ) {
                            const s = { relatedTarget: o._element };
                            if (n) {
                                const a = n.composedPath();
                                var r = a.includes(o._menu);
                                if (
                                    a.includes(o._element) ||
                                    ("inside" === o._config.autoClose && !r) ||
                                    ("outside" === o._config.autoClose && r)
                                )
                                    continue;
                                if (
                                    o._menu.contains(n.target) &&
                                    (("keyup" === n.type && "Tab" === n.key) ||
                                        /input|select|option|textarea|form/i.test(
                                            n.target.tagName
                                        ))
                                )
                                    continue;
                                "click" === n.type && (s.clickEvent = n);
                            }
                            o._completeHide(s);
                        }
                    }
                }
            }
            static getParentFromElement(e) {
                return r(e) || e.parentNode;
            }
            static dataApiKeydownHandler(e) {
                if (
                    /input|textarea/i.test(e.target.tagName)
                        ? !(
                              "Space" === e.key ||
                              (e.key !== Wt &&
                                  ((e.key !== zt && e.key !== Ft) ||
                                      e.target.closest(Yt)))
                          )
                        : Ut.test(e.key)
                ) {
                    var t = this.classList.contains(Xt);
                    if (
                        (t || e.key !== Wt) &&
                        (e.preventDefault(), e.stopPropagation(), !f(this))
                    ) {
                        var n = () =>
                            this.matches(Vt) ? this : d.prev(this, Vt)[0];
                        return e.key === Wt
                            ? (n().focus(), void rn.clearMenus())
                            : e.key === Ft || e.key === zt
                            ? (t || n().click(),
                              void rn.getInstance(n())._selectMenuItem(e))
                            : void (
                                  (t && "Space" !== e.key) ||
                                  rn.clearMenus()
                              );
                    }
                }
            }
        }
        M.on(document, jt, Vt, rn.dataApiKeydownHandler),
            M.on(document, jt, Yt, rn.dataApiKeydownHandler),
            M.on(document, Nt, rn.clearMenus),
            M.on(document, "keyup.bs.dropdown.data-api", rn.clearMenus),
            M.on(document, Nt, Vt, function (e) {
                e.preventDefault(), rn.dropdownInterface(this);
            }),
            e(rn);
        const on = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            sn = ".sticky-top";
        class an {
            constructor() {
                this._element = document.body;
            }
            getWidth() {
                var e = document.documentElement.clientWidth;
                return Math.abs(window.innerWidth - e);
            }
            hide() {
                const t = this.getWidth();
                this._disableOverFlow(),
                    this._setElementAttributes(
                        this._element,
                        "paddingRight",
                        (e) => e + t
                    ),
                    this._setElementAttributes(
                        on,
                        "paddingRight",
                        (e) => e + t
                    ),
                    this._setElementAttributes(sn, "marginRight", (e) => e - t);
            }
            _disableOverFlow() {
                this._saveInitialAttribute(this._element, "overflow"),
                    (this._element.style.overflow = "hidden");
            }
            _setElementAttributes(e, n, i) {
                const r = this.getWidth();
                this._applyManipulationCallback(e, (e) => {
                    var t;
                    (e !== this._element &&
                        window.innerWidth > e.clientWidth + r) ||
                        (this._saveInitialAttribute(e, n),
                        (t = window.getComputedStyle(e)[n]),
                        (e.style[n] = `${i(Number.parseFloat(t))}px`));
                });
            }
            reset() {
                this._resetElementAttributes(this._element, "overflow"),
                    this._resetElementAttributes(this._element, "paddingRight"),
                    this._resetElementAttributes(on, "paddingRight"),
                    this._resetElementAttributes(sn, "marginRight");
            }
            _saveInitialAttribute(e, t) {
                var n = e.style[t];
                n && Y.setDataAttribute(e, t, n);
            }
            _resetElementAttributes(e, n) {
                this._applyManipulationCallback(e, (e) => {
                    var t = Y.getDataAttribute(e, n);
                    void 0 === t
                        ? e.style.removeProperty(n)
                        : (Y.removeDataAttribute(e, n), (e.style[n] = t));
                });
            }
            _applyManipulationCallback(e, t) {
                c(e) ? t(e) : d.find(e, this._element).forEach(t);
            }
            isOverflowing() {
                return 0 < this.getWidth();
            }
        }
        const ln = {
                isVisible: !0,
                isAnimated: !1,
                rootElement: "body",
                clickCallback: null,
            },
            cn = {
                isVisible: "boolean",
                isAnimated: "boolean",
                rootElement: "(element|string)",
                clickCallback: "(function|null)",
            },
            un = "backdrop",
            dn = `mousedown.bs.${un}`;
        class fn {
            constructor(e) {
                (this._config = this._getConfig(e)),
                    (this._isAppended = !1),
                    (this._element = null);
            }
            show(e) {
                this._config.isVisible
                    ? (this._append(),
                      this._config.isAnimated && g(this._getElement()),
                      this._getElement().classList.add("show"),
                      this._emulateAnimation(() => {
                          b(e);
                      }))
                    : b(e);
            }
            hide(e) {
                this._config.isVisible
                    ? (this._getElement().classList.remove("show"),
                      this._emulateAnimation(() => {
                          this.dispose(), b(e);
                      }))
                    : b(e);
            }
            _getElement() {
                if (!this._element) {
                    const e = document.createElement("div");
                    (e.className = "modal-backdrop"),
                        this._config.isAnimated && e.classList.add("fade"),
                        (this._element = e);
                }
                return this._element;
            }
            _getConfig(e) {
                return (
                    ((e = {
                        ...ln,
                        ...("object" == typeof e ? e : {}),
                    }).rootElement = u(e.rootElement)),
                    n(un, e, cn),
                    e
                );
            }
            _append() {
                this._isAppended ||
                    (this._config.rootElement.appendChild(this._getElement()),
                    M.on(this._getElement(), dn, () => {
                        b(this._config.clickCallback);
                    }),
                    (this._isAppended = !0));
            }
            dispose() {
                this._isAppended &&
                    (M.off(this._element, dn),
                    this._element.remove(),
                    (this._isAppended = !1));
            }
            _emulateAnimation(e) {
                _(e, this._getElement(), this._config.isAnimated);
            }
        }
        const hn = ".bs.modal";
        const pn = { backdrop: !0, keyboard: !0, focus: !0 },
            gn = {
                backdrop: "(boolean|string)",
                keyboard: "boolean",
                focus: "boolean",
            },
            mn = (hn, hn, `hidden${hn}`),
            vn = `show${hn}`,
            yn = (hn, `focusin${hn}`),
            bn = `resize${hn}`,
            _n = `click.dismiss${hn}`,
            wn = `keydown.dismiss${hn}`,
            xn = (hn, `mousedown.dismiss${hn}`);
        hn;
        const En = "modal-open",
            Tn = "modal-static";
        class Cn extends W {
            constructor(e, t) {
                super(e),
                    (this._config = this._getConfig(t)),
                    (this._dialog = d.findOne(".modal-dialog", this._element)),
                    (this._backdrop = this._initializeBackDrop()),
                    (this._isShown = !1),
                    (this._ignoreBackdropClick = !1),
                    (this._isTransitioning = !1),
                    (this._scrollBar = new an());
            }
            static get Default() {
                return pn;
            }
            static get NAME() {
                return "modal";
            }
            toggle(e) {
                return this._isShown ? this.hide() : this.show(e);
            }
            show(e) {
                this._isShown ||
                    this._isTransitioning ||
                    M.trigger(this._element, vn, { relatedTarget: e })
                        .defaultPrevented ||
                    ((this._isShown = !0),
                    this._isAnimated() && (this._isTransitioning = !0),
                    this._scrollBar.hide(),
                    document.body.classList.add(En),
                    this._adjustDialog(),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    M.on(this._element, _n, '[data-bs-dismiss="modal"]', (e) =>
                        this.hide(e)
                    ),
                    M.on(this._dialog, xn, () => {
                        M.one(
                            this._element,
                            "mouseup.dismiss.bs.modal",
                            (e) => {
                                e.target === this._element &&
                                    (this._ignoreBackdropClick = !0);
                            }
                        );
                    }),
                    this._showBackdrop(() => this._showElement(e)));
            }
            hide(e) {
                e &&
                    ["A", "AREA"].includes(e.target.tagName) &&
                    e.preventDefault(),
                    this._isShown &&
                        !this._isTransitioning &&
                        (M.trigger(this._element, "hide.bs.modal")
                            .defaultPrevented ||
                            ((this._isShown = !1),
                            (e = this._isAnimated()) &&
                                (this._isTransitioning = !0),
                            this._setEscapeEvent(),
                            this._setResizeEvent(),
                            M.off(document, yn),
                            this._element.classList.remove("show"),
                            M.off(this._element, _n),
                            M.off(this._dialog, xn),
                            this._queueCallback(
                                () => this._hideModal(),
                                this._element,
                                e
                            )));
            }
            dispose() {
                [window, this._dialog].forEach((e) => M.off(e, hn)),
                    this._backdrop.dispose(),
                    super.dispose(),
                    M.off(document, yn);
            }
            handleUpdate() {
                this._adjustDialog();
            }
            _initializeBackDrop() {
                return new fn({
                    isVisible: Boolean(this._config.backdrop),
                    isAnimated: this._isAnimated(),
                });
            }
            _getConfig(e) {
                return (
                    (e = {
                        ...pn,
                        ...Y.getDataAttributes(this._element),
                        ...("object" == typeof e ? e : {}),
                    }),
                    n("modal", e, gn),
                    e
                );
            }
            _showElement(e) {
                var t = this._isAnimated();
                const n = d.findOne(".modal-body", this._dialog);
                (this._element.parentNode &&
                    this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                    document.body.appendChild(this._element),
                    (this._element.style.display = "block"),
                    this._element.removeAttribute("aria-hidden"),
                    this._element.setAttribute("aria-modal", !0),
                    this._element.setAttribute("role", "dialog"),
                    (this._element.scrollTop = 0),
                    n && (n.scrollTop = 0),
                    t && g(this._element),
                    this._element.classList.add("show"),
                    this._config.focus && this._enforceFocus();
                this._queueCallback(
                    () => {
                        this._config.focus && this._element.focus(),
                            (this._isTransitioning = !1),
                            M.trigger(this._element, "shown.bs.modal", {
                                relatedTarget: e,
                            });
                    },
                    this._dialog,
                    t
                );
            }
            _enforceFocus() {
                M.off(document, yn),
                    M.on(document, yn, (e) => {
                        document === e.target ||
                            this._element === e.target ||
                            this._element.contains(e.target) ||
                            this._element.focus();
                    });
            }
            _setEscapeEvent() {
                this._isShown
                    ? M.on(this._element, wn, (e) => {
                          this._config.keyboard && "Escape" === e.key
                              ? (e.preventDefault(), this.hide())
                              : this._config.keyboard ||
                                "Escape" !== e.key ||
                                this._triggerBackdropTransition();
                      })
                    : M.off(this._element, wn);
            }
            _setResizeEvent() {
                this._isShown
                    ? M.on(window, bn, () => this._adjustDialog())
                    : M.off(window, bn);
            }
            _hideModal() {
                (this._element.style.display = "none"),
                    this._element.setAttribute("aria-hidden", !0),
                    this._element.removeAttribute("aria-modal"),
                    this._element.removeAttribute("role"),
                    (this._isTransitioning = !1),
                    this._backdrop.hide(() => {
                        document.body.classList.remove(En),
                            this._resetAdjustments(),
                            this._scrollBar.reset(),
                            M.trigger(this._element, mn);
                    });
            }
            _showBackdrop(e) {
                M.on(this._element, _n, (e) => {
                    this._ignoreBackdropClick
                        ? (this._ignoreBackdropClick = !1)
                        : e.target === e.currentTarget &&
                          (!0 === this._config.backdrop
                              ? this.hide()
                              : "static" === this._config.backdrop &&
                                this._triggerBackdropTransition());
                }),
                    this._backdrop.show(e);
            }
            _isAnimated() {
                return this._element.classList.contains("fade");
            }
            _triggerBackdropTransition() {
                if (
                    !M.trigger(this._element, "hidePrevented.bs.modal")
                        .defaultPrevented
                ) {
                    const {
                            classList: e,
                            scrollHeight: t,
                            style: n,
                        } = this._element,
                        i = t > document.documentElement.clientHeight;
                    (!i && "hidden" === n.overflowY) ||
                        e.contains(Tn) ||
                        (i || (n.overflowY = "hidden"),
                        e.add(Tn),
                        this._queueCallback(() => {
                            e.remove(Tn),
                                i ||
                                    this._queueCallback(() => {
                                        n.overflowY = "";
                                    }, this._dialog);
                        }, this._dialog),
                        this._element.focus());
                }
            }
            _adjustDialog() {
                var e =
                        this._element.scrollHeight >
                        document.documentElement.clientHeight,
                    t = this._scrollBar.getWidth(),
                    n = 0 < t;
                ((!n && e && !y()) || (n && !e && y())) &&
                    (this._element.style.paddingLeft = `${t}px`),
                    ((n && !e && !y()) || (!n && e && y())) &&
                        (this._element.style.paddingRight = `${t}px`);
            }
            _resetAdjustments() {
                (this._element.style.paddingLeft = ""),
                    (this._element.style.paddingRight = "");
            }
            static jQueryInterface(t, n) {
                return this.each(function () {
                    const e = Cn.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t])
                            throw new TypeError(`No method named "${t}"`);
                        e[t](n);
                    }
                });
            }
        }
        M.on(
            document,
            "click.bs.modal.data-api",
            '[data-bs-toggle="modal"]',
            function (e) {
                const t = r(this);
                ["A", "AREA"].includes(this.tagName) && e.preventDefault(),
                    M.one(t, vn, (e) => {
                        e.defaultPrevented ||
                            M.one(t, mn, () => {
                                i(this) && this.focus();
                            });
                    });
                const n = Cn.getOrCreateInstance(t);
                n.toggle(this);
            }
        ),
            e(Cn);
        const An = "offcanvas";
        jt = ".bs.offcanvas";
        const kn = { backdrop: !0, keyboard: !0, scroll: !1 },
            Sn = {
                backdrop: "boolean",
                keyboard: "boolean",
                scroll: "boolean",
            },
            Dn = ".offcanvas.show",
            Ln = `hidden${jt}`,
            On = `focusin${jt}`;
        class Nn extends W {
            constructor(e, t) {
                super(e),
                    (this._config = this._getConfig(t)),
                    (this._isShown = !1),
                    (this._backdrop = this._initializeBackDrop()),
                    this._addEventListeners();
            }
            static get NAME() {
                return An;
            }
            static get Default() {
                return kn;
            }
            toggle(e) {
                return this._isShown ? this.hide() : this.show(e);
            }
            show(e) {
                this._isShown ||
                    M.trigger(this._element, "show.bs.offcanvas", {
                        relatedTarget: e,
                    }).defaultPrevented ||
                    ((this._isShown = !0),
                    (this._element.style.visibility = "visible"),
                    this._backdrop.show(),
                    this._config.scroll ||
                        (new an().hide(),
                        this._enforceFocusOnElement(this._element)),
                    this._element.removeAttribute("aria-hidden"),
                    this._element.setAttribute("aria-modal", !0),
                    this._element.setAttribute("role", "dialog"),
                    this._element.classList.add("show"),
                    this._queueCallback(
                        () => {
                            M.trigger(this._element, "shown.bs.offcanvas", {
                                relatedTarget: e,
                            });
                        },
                        this._element,
                        !0
                    ));
            }
            hide() {
                this._isShown &&
                    (M.trigger(this._element, "hide.bs.offcanvas")
                        .defaultPrevented ||
                        (M.off(document, On),
                        this._element.blur(),
                        (this._isShown = !1),
                        this._element.classList.remove("show"),
                        this._backdrop.hide(),
                        this._queueCallback(
                            () => {
                                this._element.setAttribute("aria-hidden", !0),
                                    this._element.removeAttribute("aria-modal"),
                                    this._element.removeAttribute("role"),
                                    (this._element.style.visibility = "hidden"),
                                    this._config.scroll || new an().reset(),
                                    M.trigger(this._element, Ln);
                            },
                            this._element,
                            !0
                        )));
            }
            dispose() {
                this._backdrop.dispose(), super.dispose(), M.off(document, On);
            }
            _getConfig(e) {
                return (
                    (e = {
                        ...kn,
                        ...Y.getDataAttributes(this._element),
                        ...("object" == typeof e ? e : {}),
                    }),
                    n(An, e, Sn),
                    e
                );
            }
            _initializeBackDrop() {
                return new fn({
                    isVisible: this._config.backdrop,
                    isAnimated: !0,
                    rootElement: this._element.parentNode,
                    clickCallback: () => this.hide(),
                });
            }
            _enforceFocusOnElement(t) {
                M.off(document, On),
                    M.on(document, On, (e) => {
                        document === e.target ||
                            t === e.target ||
                            t.contains(e.target) ||
                            t.focus();
                    }),
                    t.focus();
            }
            _addEventListeners() {
                M.on(
                    this._element,
                    "click.dismiss.bs.offcanvas",
                    '[data-bs-dismiss="offcanvas"]',
                    () => this.hide()
                ),
                    M.on(this._element, "keydown.dismiss.bs.offcanvas", (e) => {
                        this._config.keyboard &&
                            "Escape" === e.key &&
                            this.hide();
                    });
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    const e = Nn.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (
                            void 0 === e[t] ||
                            t.startsWith("_") ||
                            "constructor" === t
                        )
                            throw new TypeError(`No method named "${t}"`);
                        e[t](this);
                    }
                });
            }
        }
        M.on(
            document,
            "click.bs.offcanvas.data-api",
            '[data-bs-toggle="offcanvas"]',
            function (e) {
                var t = r(this);
                if (
                    (["A", "AREA"].includes(this.tagName) && e.preventDefault(),
                    !f(this))
                ) {
                    M.one(t, Ln, () => {
                        i(this) && this.focus();
                    });
                    e = d.findOne(Dn);
                    e && e !== t && Nn.getInstance(e).hide();
                    const n = Nn.getOrCreateInstance(t);
                    n.toggle(this);
                }
            }
        ),
            M.on(window, "load.bs.offcanvas.data-api", () =>
                d.find(Dn).forEach((e) => Nn.getOrCreateInstance(e).show())
            ),
            e(Nn);
        const jn = new Set([
            "background",
            "cite",
            "href",
            "itemtype",
            "longdesc",
            "poster",
            "src",
            "xlink:href",
        ]);
        const In = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
            Pn =
                /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
        Nt = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: [],
        };
        function Hn(e, n, t) {
            if (!e.length) return e;
            if (t && "function" == typeof t) return t(e);
            const i = new window.DOMParser(),
                r = i.parseFromString(e, "text/html"),
                o = Object.keys(n);
            var s = [].concat(...r.body.querySelectorAll("*"));
            for (let e = 0, t = s.length; e < t; e++) {
                const l = s[e];
                var a = l.nodeName.toLowerCase();
                if (o.includes(a)) {
                    const c = [].concat(...l.attributes),
                        u = [].concat(n["*"] || [], n[a] || []);
                    c.forEach((e) => {
                        ((e, t) => {
                            var n = e.nodeName.toLowerCase();
                            if (t.includes(n))
                                return (
                                    !jn.has(n) ||
                                    Boolean(
                                        In.test(e.nodeValue) ||
                                            Pn.test(e.nodeValue)
                                    )
                                );
                            const i = t.filter((e) => e instanceof RegExp);
                            for (let e = 0, t = i.length; e < t; e++)
                                if (i[e].test(n)) return !0;
                            return !1;
                        })(e, u) || l.removeAttribute(e.nodeName);
                    });
                } else l.remove();
            }
            return r.body.innerHTML;
        }
        const Mn = "tooltip";
        jt = ".bs.tooltip";
        const qn = "bs-tooltip",
            $n = new RegExp(`(^|\\s)${qn}\\S+`, "g"),
            Rn = new Set(["sanitize", "allowList", "sanitizeFn"]),
            Bn = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(array|string|function)",
                container: "(string|element|boolean)",
                fallbackPlacements: "array",
                boundary: "(string|element)",
                customClass: "(string|function)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                allowList: "object",
                popperConfig: "(null|object|function)",
            },
            Wn = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: y() ? "left" : "right",
                BOTTOM: "bottom",
                LEFT: y() ? "right" : "left",
            },
            Fn = {
                animation: !0,
                template:
                    '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: [0, 0],
                container: !1,
                fallbackPlacements: ["top", "right", "bottom", "left"],
                boundary: "clippingParents",
                customClass: "",
                sanitize: !0,
                sanitizeFn: null,
                allowList: Nt,
                popperConfig: null,
            },
            zn = {
                HIDE: `hide${jt}`,
                HIDDEN: `hidden${jt}`,
                SHOW: `show${jt}`,
                SHOWN: `shown${jt}`,
                INSERTED: `inserted${jt}`,
                CLICK: `click${jt}`,
                FOCUSIN: `focusin${jt}`,
                FOCUSOUT: `focusout${jt}`,
                MOUSEENTER: `mouseenter${jt}`,
                MOUSELEAVE: `mouseleave${jt}`,
            },
            Un = "fade",
            Xn = "show",
            Vn = "show",
            Yn = "hover",
            Qn = "focus";
        class Kn extends W {
            constructor(e, t) {
                if (void 0 === Rt)
                    throw new TypeError(
                        "Bootstrap's tooltips require Popper (https://popper.js.org)"
                    );
                super(e),
                    (this._isEnabled = !0),
                    (this._timeout = 0),
                    (this._hoverState = ""),
                    (this._activeTrigger = {}),
                    (this._popper = null),
                    (this._config = this._getConfig(t)),
                    (this.tip = null),
                    this._setListeners();
            }
            static get Default() {
                return Fn;
            }
            static get NAME() {
                return Mn;
            }
            static get Event() {
                return zn;
            }
            static get DefaultType() {
                return Bn;
            }
            enable() {
                this._isEnabled = !0;
            }
            disable() {
                this._isEnabled = !1;
            }
            toggleEnabled() {
                this._isEnabled = !this._isEnabled;
            }
            toggle(e) {
                if (this._isEnabled)
                    if (e) {
                        const t = this._initializeOnDelegatedTarget(e);
                        (t._activeTrigger.click = !t._activeTrigger.click),
                            t._isWithActiveTrigger()
                                ? t._enter(null, t)
                                : t._leave(null, t);
                    } else
                        this.getTipElement().classList.contains(Xn)
                            ? this._leave(null, this)
                            : this._enter(null, this);
            }
            dispose() {
                clearTimeout(this._timeout),
                    M.off(
                        this._element.closest(".modal"),
                        "hide.bs.modal",
                        this._hideModalHandler
                    ),
                    this.tip && this.tip.remove(),
                    this._popper && this._popper.destroy(),
                    super.dispose();
            }
            show() {
                if ("none" === this._element.style.display)
                    throw new Error("Please use show on visible elements");
                if (this.isWithContent() && this._isEnabled) {
                    var e = M.trigger(
                        this._element,
                        this.constructor.Event.SHOW
                    );
                    const n = h(this._element);
                    var t = (
                        null === n
                            ? this._element.ownerDocument.documentElement
                            : n
                    ).contains(this._element);
                    if (!e.defaultPrevented && t) {
                        const i = this.getTipElement();
                        t = s(this.constructor.NAME);
                        i.setAttribute("id", t),
                            this._element.setAttribute("aria-describedby", t),
                            this.setContent(),
                            this._config.animation && i.classList.add(Un);
                        (t =
                            "function" == typeof this._config.placement
                                ? this._config.placement.call(
                                      this,
                                      i,
                                      this._element
                                  )
                                : this._config.placement),
                            (t = this._getAttachment(t));
                        this._addAttachmentClass(t);
                        const { container: r } = this._config;
                        $(i, this.constructor.DATA_KEY, this),
                            this._element.ownerDocument.documentElement.contains(
                                this.tip
                            ) ||
                                (r.appendChild(i),
                                M.trigger(
                                    this._element,
                                    this.constructor.Event.INSERTED
                                )),
                            this._popper
                                ? this._popper.update()
                                : (this._popper = $t(
                                      this._element,
                                      i,
                                      this._getPopperConfig(t)
                                  )),
                            i.classList.add(Xn);
                        const o =
                            "function" == typeof this._config.customClass
                                ? this._config.customClass()
                                : this._config.customClass;
                        o && i.classList.add(...o.split(" ")),
                            "ontouchstart" in document.documentElement &&
                                []
                                    .concat(...document.body.children)
                                    .forEach((e) => {
                                        M.on(e, "mouseover", p);
                                    });
                        t = this.tip.classList.contains(Un);
                        this._queueCallback(
                            () => {
                                var e = this._hoverState;
                                (this._hoverState = null),
                                    M.trigger(
                                        this._element,
                                        this.constructor.Event.SHOWN
                                    ),
                                    "out" === e && this._leave(null, this);
                            },
                            this.tip,
                            t
                        );
                    }
                }
            }
            hide() {
                if (this._popper) {
                    const t = this.getTipElement();
                    var e;
                    M.trigger(this._element, this.constructor.Event.HIDE)
                        .defaultPrevented ||
                        (t.classList.remove(Xn),
                        "ontouchstart" in document.documentElement &&
                            []
                                .concat(...document.body.children)
                                .forEach((e) => M.off(e, "mouseover", p)),
                        (this._activeTrigger.click = !1),
                        (this._activeTrigger[Qn] = !1),
                        (this._activeTrigger[Yn] = !1),
                        (e = this.tip.classList.contains(Un)),
                        this._queueCallback(
                            () => {
                                this._isWithActiveTrigger() ||
                                    (this._hoverState !== Vn && t.remove(),
                                    this._cleanTipClass(),
                                    this._element.removeAttribute(
                                        "aria-describedby"
                                    ),
                                    M.trigger(
                                        this._element,
                                        this.constructor.Event.HIDDEN
                                    ),
                                    this._popper &&
                                        (this._popper.destroy(),
                                        (this._popper = null)));
                            },
                            this.tip,
                            e
                        ),
                        (this._hoverState = ""));
                }
            }
            update() {
                null !== this._popper && this._popper.update();
            }
            isWithContent() {
                return Boolean(this.getTitle());
            }
            getTipElement() {
                if (this.tip) return this.tip;
                const e = document.createElement("div");
                return (
                    (e.innerHTML = this._config.template),
                    (this.tip = e.children[0]),
                    this.tip
                );
            }
            setContent() {
                const e = this.getTipElement();
                this.setElementContent(
                    d.findOne(".tooltip-inner", e),
                    this.getTitle()
                ),
                    e.classList.remove(Un, Xn);
            }
            setElementContent(e, t) {
                if (null !== e)
                    return c(t)
                        ? ((t = u(t)),
                          void (this._config.html
                              ? t.parentNode !== e &&
                                ((e.innerHTML = ""), e.appendChild(t))
                              : (e.textContent = t.textContent)))
                        : void (this._config.html
                              ? (this._config.sanitize &&
                                    (t = Hn(
                                        t,
                                        this._config.allowList,
                                        this._config.sanitizeFn
                                    )),
                                (e.innerHTML = t))
                              : (e.textContent = t));
            }
            getTitle() {
                let e = this._element.getAttribute("data-bs-original-title");
                return (
                    (e =
                        e ||
                        ("function" == typeof this._config.title
                            ? this._config.title.call(this._element)
                            : this._config.title)),
                    e
                );
            }
            updateAttachment(e) {
                return "right" === e ? "end" : "left" === e ? "start" : e;
            }
            _initializeOnDelegatedTarget(e, t) {
                var n = this.constructor.DATA_KEY;
                return (
                    (t = t || R(e.delegateTarget, n)) ||
                        ((t = new this.constructor(
                            e.delegateTarget,
                            this._getDelegateConfig()
                        )),
                        $(e.delegateTarget, n, t)),
                    t
                );
            }
            _getOffset() {
                const { offset: t } = this._config;
                return "string" == typeof t
                    ? t.split(",").map((e) => Number.parseInt(e, 10))
                    : "function" == typeof t
                    ? (e) => t(e, this._element)
                    : t;
            }
            _getPopperConfig(e) {
                e = {
                    placement: e,
                    modifiers: [
                        {
                            name: "flip",
                            options: {
                                fallbackPlacements:
                                    this._config.fallbackPlacements,
                            },
                        },
                        {
                            name: "offset",
                            options: { offset: this._getOffset() },
                        },
                        {
                            name: "preventOverflow",
                            options: { boundary: this._config.boundary },
                        },
                        {
                            name: "arrow",
                            options: {
                                element: `.${this.constructor.NAME}-arrow`,
                            },
                        },
                        {
                            name: "onChange",
                            enabled: !0,
                            phase: "afterWrite",
                            fn: (e) => this._handlePopperPlacementChange(e),
                        },
                    ],
                    onFirstUpdate: (e) => {
                        e.options.placement !== e.placement &&
                            this._handlePopperPlacementChange(e);
                    },
                };
                return {
                    ...e,
                    ...("function" == typeof this._config.popperConfig
                        ? this._config.popperConfig(e)
                        : this._config.popperConfig),
                };
            }
            _addAttachmentClass(e) {
                this.getTipElement().classList.add(
                    `${qn}-${this.updateAttachment(e)}`
                );
            }
            _getAttachment(e) {
                return Wn[e.toUpperCase()];
            }
            _setListeners() {
                const e = this._config.trigger.split(" ");
                e.forEach((e) => {
                    var t;
                    "click" === e
                        ? M.on(
                              this._element,
                              this.constructor.Event.CLICK,
                              this._config.selector,
                              (e) => this.toggle(e)
                          )
                        : "manual" !== e &&
                          ((t =
                              e === Yn
                                  ? this.constructor.Event.MOUSEENTER
                                  : this.constructor.Event.FOCUSIN),
                          (e =
                              e === Yn
                                  ? this.constructor.Event.MOUSELEAVE
                                  : this.constructor.Event.FOCUSOUT),
                          M.on(this._element, t, this._config.selector, (e) =>
                              this._enter(e)
                          ),
                          M.on(this._element, e, this._config.selector, (e) =>
                              this._leave(e)
                          ));
                }),
                    (this._hideModalHandler = () => {
                        this._element && this.hide();
                    }),
                    M.on(
                        this._element.closest(".modal"),
                        "hide.bs.modal",
                        this._hideModalHandler
                    ),
                    this._config.selector
                        ? (this._config = {
                              ...this._config,
                              trigger: "manual",
                              selector: "",
                          })
                        : this._fixTitle();
            }
            _fixTitle() {
                var e = this._element.getAttribute("title"),
                    t = typeof this._element.getAttribute(
                        "data-bs-original-title"
                    );
                (!e && "string" == t) ||
                    (this._element.setAttribute(
                        "data-bs-original-title",
                        e || ""
                    ),
                    !e ||
                        this._element.getAttribute("aria-label") ||
                        this._element.textContent ||
                        this._element.setAttribute("aria-label", e),
                    this._element.setAttribute("title", ""));
            }
            _enter(e, t) {
                (t = this._initializeOnDelegatedTarget(e, t)),
                    e &&
                        (t._activeTrigger["focusin" === e.type ? Qn : Yn] = !0),
                    t.getTipElement().classList.contains(Xn) ||
                    t._hoverState === Vn
                        ? (t._hoverState = Vn)
                        : (clearTimeout(t._timeout),
                          (t._hoverState = Vn),
                          t._config.delay && t._config.delay.show
                              ? (t._timeout = setTimeout(() => {
                                    t._hoverState === Vn && t.show();
                                }, t._config.delay.show))
                              : t.show());
            }
            _leave(e, t) {
                (t = this._initializeOnDelegatedTarget(e, t)),
                    e &&
                        (t._activeTrigger["focusout" === e.type ? Qn : Yn] =
                            t._element.contains(e.relatedTarget)),
                    t._isWithActiveTrigger() ||
                        (clearTimeout(t._timeout),
                        (t._hoverState = "out"),
                        t._config.delay && t._config.delay.hide
                            ? (t._timeout = setTimeout(() => {
                                  "out" === t._hoverState && t.hide();
                              }, t._config.delay.hide))
                            : t.hide());
            }
            _isWithActiveTrigger() {
                for (const e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                return !1;
            }
            _getConfig(e) {
                const t = Y.getDataAttributes(this._element);
                return (
                    Object.keys(t).forEach((e) => {
                        Rn.has(e) && delete t[e];
                    }),
                    ((e = {
                        ...this.constructor.Default,
                        ...t,
                        ...("object" == typeof e && e ? e : {}),
                    }).container =
                        !1 === e.container ? document.body : u(e.container)),
                    "number" == typeof e.delay &&
                        (e.delay = { show: e.delay, hide: e.delay }),
                    "number" == typeof e.title &&
                        (e.title = e.title.toString()),
                    "number" == typeof e.content &&
                        (e.content = e.content.toString()),
                    n(Mn, e, this.constructor.DefaultType),
                    e.sanitize &&
                        (e.template = Hn(
                            e.template,
                            e.allowList,
                            e.sanitizeFn
                        )),
                    e
                );
            }
            _getDelegateConfig() {
                const e = {};
                if (this._config)
                    for (const t in this._config)
                        this.constructor.Default[t] !== this._config[t] &&
                            (e[t] = this._config[t]);
                return e;
            }
            _cleanTipClass() {
                const t = this.getTipElement(),
                    e = t.getAttribute("class").match($n);
                null !== e &&
                    0 < e.length &&
                    e
                        .map((e) => e.trim())
                        .forEach((e) => t.classList.remove(e));
            }
            _handlePopperPlacementChange(e) {
                var { state: e } = e;
                e &&
                    ((this.tip = e.elements.popper),
                    this._cleanTipClass(),
                    this._addAttachmentClass(this._getAttachment(e.placement)));
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    const e = Kn.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t])
                            throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                });
            }
        }
        e(Kn);
        jt = ".bs.popover";
        const Gn = "bs-popover",
            Jn = new RegExp(`(^|\\s)${Gn}\\S+`, "g"),
            Zn = {
                ...Kn.Default,
                placement: "right",
                offset: [0, 8],
                trigger: "click",
                content: "",
                template:
                    '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            },
            ei = { ...Kn.DefaultType, content: "(string|element|function)" },
            ti = {
                HIDE: `hide${jt}`,
                HIDDEN: `hidden${jt}`,
                SHOW: `show${jt}`,
                SHOWN: `shown${jt}`,
                INSERTED: `inserted${jt}`,
                CLICK: `click${jt}`,
                FOCUSIN: `focusin${jt}`,
                FOCUSOUT: `focusout${jt}`,
                MOUSEENTER: `mouseenter${jt}`,
                MOUSELEAVE: `mouseleave${jt}`,
            },
            ni = ".popover-header",
            ii = ".popover-body";
        class ri extends Kn {
            static get Default() {
                return Zn;
            }
            static get NAME() {
                return "popover";
            }
            static get Event() {
                return ti;
            }
            static get DefaultType() {
                return ei;
            }
            isWithContent() {
                return this.getTitle() || this._getContent();
            }
            getTipElement() {
                return (
                    this.tip ||
                    ((this.tip = super.getTipElement()),
                    this.getTitle() || d.findOne(ni, this.tip).remove(),
                    this._getContent() || d.findOne(ii, this.tip).remove(),
                    this.tip)
                );
            }
            setContent() {
                const e = this.getTipElement();
                this.setElementContent(d.findOne(ni, e), this.getTitle());
                let t = this._getContent();
                "function" == typeof t && (t = t.call(this._element)),
                    this.setElementContent(d.findOne(ii, e), t),
                    e.classList.remove("fade", "show");
            }
            _addAttachmentClass(e) {
                this.getTipElement().classList.add(
                    `${Gn}-${this.updateAttachment(e)}`
                );
            }
            _getContent() {
                return (
                    this._element.getAttribute("data-bs-content") ||
                    this._config.content
                );
            }
            _cleanTipClass() {
                const t = this.getTipElement(),
                    e = t.getAttribute("class").match(Jn);
                null !== e &&
                    0 < e.length &&
                    e
                        .map((e) => e.trim())
                        .forEach((e) => t.classList.remove(e));
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    const e = ri.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t])
                            throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                });
            }
        }
        e(ri);
        const oi = "scrollspy";
        const si = ".bs.scrollspy";
        const ai = { offset: 10, method: "auto", target: "" },
            li = {
                offset: "number",
                method: "string",
                target: "(string|element)",
            };
        si, si;
        si;
        const ci = "dropdown-item",
            ui = "active",
            di = ".nav-link",
            fi = ".list-group-item",
            hi = "position";
        class pi extends W {
            constructor(e, t) {
                super(e),
                    (this._scrollElement =
                        "BODY" === this._element.tagName
                            ? window
                            : this._element),
                    (this._config = this._getConfig(t)),
                    (this._selector = `${this._config.target} ${di}, ${this._config.target} ${fi}, ${this._config.target} .${ci}`),
                    (this._offsets = []),
                    (this._targets = []),
                    (this._activeTarget = null),
                    (this._scrollHeight = 0),
                    M.on(this._scrollElement, "scroll.bs.scrollspy", () =>
                        this._process()
                    ),
                    this.refresh(),
                    this._process();
            }
            static get Default() {
                return ai;
            }
            static get NAME() {
                return oi;
            }
            refresh() {
                var e =
                    this._scrollElement === this._scrollElement.window
                        ? "offset"
                        : hi;
                const i =
                        "auto" === this._config.method
                            ? e
                            : this._config.method,
                    r = i === hi ? this._getScrollTop() : 0;
                (this._offsets = []),
                    (this._targets = []),
                    (this._scrollHeight = this._getScrollHeight());
                const t = d.find(this._selector);
                t.map((e) => {
                    var t = a(e);
                    const n = t ? d.findOne(t) : null;
                    if (n) {
                        e = n.getBoundingClientRect();
                        if (e.width || e.height) return [Y[i](n).top + r, t];
                    }
                    return null;
                })
                    .filter((e) => e)
                    .sort((e, t) => e[0] - t[0])
                    .forEach((e) => {
                        this._offsets.push(e[0]), this._targets.push(e[1]);
                    });
            }
            dispose() {
                M.off(this._scrollElement, si), super.dispose();
            }
            _getConfig(t) {
                if (
                    "string" !=
                        typeof (t = {
                            ...ai,
                            ...Y.getDataAttributes(this._element),
                            ...("object" == typeof t && t ? t : {}),
                        }).target &&
                    c(t.target)
                ) {
                    let { id: e } = t.target;
                    e || ((e = s(oi)), (t.target.id = e)), (t.target = `#${e}`);
                }
                return n(oi, t, li), t;
            }
            _getScrollTop() {
                return this._scrollElement === window
                    ? this._scrollElement.pageYOffset
                    : this._scrollElement.scrollTop;
            }
            _getScrollHeight() {
                return (
                    this._scrollElement.scrollHeight ||
                    Math.max(
                        document.body.scrollHeight,
                        document.documentElement.scrollHeight
                    )
                );
            }
            _getOffsetHeight() {
                return this._scrollElement === window
                    ? window.innerHeight
                    : this._scrollElement.getBoundingClientRect().height;
            }
            _process() {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
                    n = this._targets[this._targets.length - 1];
                    this._activeTarget !== n && this._activate(n);
                } else {
                    if (
                        this._activeTarget &&
                        t < this._offsets[0] &&
                        0 < this._offsets[0]
                    )
                        return (this._activeTarget = null), void this._clear();
                    for (let e = this._offsets.length; e--; )
                        this._activeTarget !== this._targets[e] &&
                            t >= this._offsets[e] &&
                            (void 0 === this._offsets[e + 1] ||
                                t < this._offsets[e + 1]) &&
                            this._activate(this._targets[e]);
                }
            }
            _activate(t) {
                (this._activeTarget = t), this._clear();
                const e = this._selector
                        .split(",")
                        .map(
                            (e) =>
                                `${e}[data-bs-target="${t}"],${e}[href="${t}"]`
                        ),
                    n = d.findOne(e.join(","));
                n.classList.contains(ci)
                    ? (d
                          .findOne(".dropdown-toggle", n.closest(".dropdown"))
                          .classList.add(ui),
                      n.classList.add(ui))
                    : (n.classList.add(ui),
                      d.parents(n, ".nav, .list-group").forEach((e) => {
                          d
                              .prev(e, `${di}, ${fi}`)
                              .forEach((e) => e.classList.add(ui)),
                              d.prev(e, ".nav-item").forEach((e) => {
                                  d.children(e, di).forEach((e) =>
                                      e.classList.add(ui)
                                  );
                              });
                      })),
                    M.trigger(this._scrollElement, "activate.bs.scrollspy", {
                        relatedTarget: t,
                    });
            }
            _clear() {
                d.find(this._selector)
                    .filter((e) => e.classList.contains(ui))
                    .forEach((e) => e.classList.remove(ui));
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    const e = pi.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t])
                            throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                });
            }
        }
        M.on(window, "load.bs.scrollspy.data-api", () => {
            d.find('[data-bs-spy="scroll"]').forEach((e) => new pi(e));
        }),
            e(pi);
        const gi = "active",
            mi = ".active",
            vi = ":scope > li > .active";
        class yi extends W {
            static get NAME() {
                return "tab";
            }
            show() {
                if (
                    !this._element.parentNode ||
                    this._element.parentNode.nodeType !== Node.ELEMENT_NODE ||
                    !this._element.classList.contains(gi)
                ) {
                    let e;
                    var t = r(this._element),
                        n = this._element.closest(".nav, .list-group");
                    n &&
                        ((i =
                            "UL" === n.nodeName || "OL" === n.nodeName
                                ? vi
                                : mi),
                        (e = d.find(i, n)),
                        (e = e[e.length - 1]));
                    var i = e
                        ? M.trigger(e, "hide.bs.tab", {
                              relatedTarget: this._element,
                          })
                        : null;
                    M.trigger(this._element, "show.bs.tab", {
                        relatedTarget: e,
                    }).defaultPrevented ||
                        (null !== i && i.defaultPrevented) ||
                        (this._activate(this._element, n),
                        (n = () => {
                            M.trigger(e, "hidden.bs.tab", {
                                relatedTarget: this._element,
                            }),
                                M.trigger(this._element, "shown.bs.tab", {
                                    relatedTarget: e,
                                });
                        }),
                        t ? this._activate(t, t.parentNode, n) : n());
                }
            }
            _activate(e, t, n) {
                const i = (
                    !t || ("UL" !== t.nodeName && "OL" !== t.nodeName)
                        ? d.children(t, mi)
                        : d.find(vi, t)
                )[0];
                var r = n && i && i.classList.contains("fade"),
                    t = () => this._transitionComplete(e, i, n);
                i && r
                    ? (i.classList.remove("show"),
                      this._queueCallback(t, e, !0))
                    : t();
            }
            _transitionComplete(e, t, n) {
                if (t) {
                    t.classList.remove(gi);
                    const r = d.findOne(
                        ":scope > .dropdown-menu .active",
                        t.parentNode
                    );
                    r && r.classList.remove(gi),
                        "tab" === t.getAttribute("role") &&
                            t.setAttribute("aria-selected", !1);
                }
                e.classList.add(gi),
                    "tab" === e.getAttribute("role") &&
                        e.setAttribute("aria-selected", !0),
                    g(e),
                    e.classList.contains("fade") && e.classList.add("show");
                let i = e.parentNode;
                i && "LI" === i.nodeName && (i = i.parentNode),
                    i &&
                        i.classList.contains("dropdown-menu") &&
                        ((t = e.closest(".dropdown")) &&
                            d
                                .find(".dropdown-toggle", t)
                                .forEach((e) => e.classList.add(gi)),
                        e.setAttribute("aria-expanded", !0)),
                    n && n();
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    const e = yi.getOrCreateInstance(this);
                    if ("string" == typeof t) {
                        if (void 0 === e[t])
                            throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                });
            }
        }
        M.on(
            document,
            "click.bs.tab.data-api",
            '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
            function (e) {
                if (
                    (["A", "AREA"].includes(this.tagName) && e.preventDefault(),
                    !f(this))
                ) {
                    const t = yi.getOrCreateInstance(this);
                    t.show();
                }
            }
        ),
            e(yi);
        const bi = "show",
            _i = "showing",
            wi = { animation: "boolean", autohide: "boolean", delay: "number" },
            xi = { animation: !0, autohide: !0, delay: 5e3 };
        class Ei extends W {
            constructor(e, t) {
                super(e),
                    (this._config = this._getConfig(t)),
                    (this._timeout = null),
                    (this._hasMouseInteraction = !1),
                    (this._hasKeyboardInteraction = !1),
                    this._setListeners();
            }
            static get DefaultType() {
                return wi;
            }
            static get Default() {
                return xi;
            }
            static get NAME() {
                return "toast";
            }
            show() {
                M.trigger(this._element, "show.bs.toast").defaultPrevented ||
                    (this._clearTimeout(),
                    this._config.animation &&
                        this._element.classList.add("fade"),
                    this._element.classList.remove("hide"),
                    g(this._element),
                    this._element.classList.add(_i),
                    this._queueCallback(
                        () => {
                            this._element.classList.remove(_i),
                                this._element.classList.add(bi),
                                M.trigger(this._element, "shown.bs.toast"),
                                this._maybeScheduleHide();
                        },
                        this._element,
                        this._config.animation
                    ));
            }
            hide() {
                this._element.classList.contains(bi) &&
                    (M.trigger(this._element, "hide.bs.toast")
                        .defaultPrevented ||
                        (this._element.classList.remove(bi),
                        this._queueCallback(
                            () => {
                                this._element.classList.add("hide"),
                                    M.trigger(this._element, "hidden.bs.toast");
                            },
                            this._element,
                            this._config.animation
                        )));
            }
            dispose() {
                this._clearTimeout(),
                    this._element.classList.contains(bi) &&
                        this._element.classList.remove(bi),
                    super.dispose();
            }
            _getConfig(e) {
                return (
                    (e = {
                        ...xi,
                        ...Y.getDataAttributes(this._element),
                        ...("object" == typeof e && e ? e : {}),
                    }),
                    n("toast", e, this.constructor.DefaultType),
                    e
                );
            }
            _maybeScheduleHide() {
                this._config.autohide &&
                    (this._hasMouseInteraction ||
                        this._hasKeyboardInteraction ||
                        (this._timeout = setTimeout(() => {
                            this.hide();
                        }, this._config.delay)));
            }
            _onInteraction(e, t) {
                switch (e.type) {
                    case "mouseover":
                    case "mouseout":
                        this._hasMouseInteraction = t;
                        break;
                    case "focusin":
                    case "focusout":
                        this._hasKeyboardInteraction = t;
                }
                t
                    ? this._clearTimeout()
                    : ((e = e.relatedTarget),
                      this._element === e ||
                          this._element.contains(e) ||
                          this._maybeScheduleHide());
            }
            _setListeners() {
                M.on(
                    this._element,
                    "click.dismiss.bs.toast",
                    '[data-bs-dismiss="toast"]',
                    () => this.hide()
                ),
                    M.on(this._element, "mouseover.bs.toast", (e) =>
                        this._onInteraction(e, !0)
                    ),
                    M.on(this._element, "mouseout.bs.toast", (e) =>
                        this._onInteraction(e, !1)
                    ),
                    M.on(this._element, "focusin.bs.toast", (e) =>
                        this._onInteraction(e, !0)
                    ),
                    M.on(this._element, "focusout.bs.toast", (e) =>
                        this._onInteraction(e, !1)
                    );
            }
            _clearTimeout() {
                clearTimeout(this._timeout), (this._timeout = null);
            }
            static jQueryInterface(t) {
                return this.each(function () {
                    const e = Ei.getOrCreateInstance(this, t);
                    if ("string" == typeof t) {
                        if (void 0 === e[t])
                            throw new TypeError(`No method named "${t}"`);
                        e[t](this);
                    }
                });
            }
        }
        return (
            e(Ei),
            {
                Alert: F,
                Button: U,
                Carousel: ae,
                Collapse: ve,
                Dropdown: rn,
                Modal: Cn,
                Offcanvas: Nn,
                Popover: ri,
                ScrollSpy: pi,
                Tab: yi,
                Toast: Ei,
                Tooltip: Kn,
            }
        );
    });
