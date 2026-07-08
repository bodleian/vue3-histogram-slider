import { createApp as e, createCommentVNode as t, createElementBlock as n, createElementVNode as r, createVNode as i, nextTick as a, normalizeStyle as o, openBlock as s, renderSlot as c, resolveComponent as l, withCtx as u } from "vue";
//#region \0rolldown/runtime.js
var d = Object.defineProperty, f = Object.getOwnPropertyDescriptor, p = Object.getOwnPropertyNames, m = Object.prototype.hasOwnProperty, h = (e, t, n) => () => {
	if (n) throw n[0];
	try {
		return e && (t = e(e = 0)), t;
	} catch (e) {
		throw n = [e], e;
	}
}, g = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), _ = (e, t) => {
	let n = {};
	for (var r in e) d(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || d(n, Symbol.toStringTag, { value: "Module" }), n;
}, v = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = p(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !m.call(e, s) && s !== n && d(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = f(t, s)) || r.enumerable
	});
	return e;
}, y = (e) => m.call(e, "module.exports") ? e["module.exports"] : v(d({}, "__esModule", { value: !0 }), e), b = /* @__PURE__ */ g(((e, t) => {
	(function(e, n) {
		typeof t == "object" && typeof t.exports == "object" ? t.exports = e.document ? n(e, !0) : function(e) {
			if (!e.document) throw Error("jQuery requires a window with a document");
			return n(e);
		} : n(e);
	})(typeof window < "u" ? window : e, function(e, t) {
		var n = [], r = Object.getPrototypeOf, i = n.slice, a = n.flat ? function(e) {
			return n.flat.call(e);
		} : function(e) {
			return n.concat.apply([], e);
		}, o = n.push, s = n.indexOf, c = {}, l = c.toString, u = c.hasOwnProperty, d = u.toString, f = d.call(Object), p = {}, m = function(e) {
			return typeof e == "function" && typeof e.nodeType != "number";
		}, h = function(e) {
			return e != null && e === e.window;
		}, g = e.document, _ = {
			type: !0,
			src: !0,
			nonce: !0,
			noModule: !0
		};
		function v(e, t, n) {
			n ||= g;
			var r, i, a = n.createElement("script");
			if (a.text = e, t) for (r in _) i = t[r] || t.getAttribute && t.getAttribute(r), i && a.setAttribute(r, i);
			n.head.appendChild(a).parentNode.removeChild(a);
		}
		function y(e) {
			return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? c[l.call(e)] || "object" : typeof e;
		}
		var b = "3.5.0", x = function(e, t) {
			return new x.fn.init(e, t);
		};
		x.fn = x.prototype = {
			jquery: b,
			constructor: x,
			length: 0,
			toArray: function() {
				return i.call(this);
			},
			get: function(e) {
				return e == null ? i.call(this) : e < 0 ? this[e + this.length] : this[e];
			},
			pushStack: function(e) {
				var t = x.merge(this.constructor(), e);
				return t.prevObject = this, t;
			},
			each: function(e) {
				return x.each(this, e);
			},
			map: function(e) {
				return this.pushStack(x.map(this, function(t, n) {
					return e.call(t, n, t);
				}));
			},
			slice: function() {
				return this.pushStack(i.apply(this, arguments));
			},
			first: function() {
				return this.eq(0);
			},
			last: function() {
				return this.eq(-1);
			},
			even: function() {
				return this.pushStack(x.grep(this, function(e, t) {
					return (t + 1) % 2;
				}));
			},
			odd: function() {
				return this.pushStack(x.grep(this, function(e, t) {
					return t % 2;
				}));
			},
			eq: function(e) {
				var t = this.length, n = +e + (e < 0 ? t : 0);
				return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
			},
			end: function() {
				return this.prevObject || this.constructor();
			},
			push: o,
			sort: n.sort,
			splice: n.splice
		}, x.extend = x.fn.extend = function() {
			var e, t, n, r, i, a, o = arguments[0] || {}, s = 1, c = arguments.length, l = !1;
			for (typeof o == "boolean" && (l = o, o = arguments[s] || {}, s++), typeof o != "object" && !m(o) && (o = {}), s === c && (o = this, s--); s < c; s++) if ((e = arguments[s]) != null) for (t in e) r = e[t], !(t === "__proto__" || o === r) && (l && r && (x.isPlainObject(r) || (i = Array.isArray(r))) ? (n = o[t], a = i && !Array.isArray(n) ? [] : !i && !x.isPlainObject(n) ? {} : n, i = !1, o[t] = x.extend(l, a, r)) : r !== void 0 && (o[t] = r));
			return o;
		}, x.extend({
			expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function(e) {
				throw Error(e);
			},
			noop: function() {},
			isPlainObject: function(e) {
				var t, n;
				return !e || l.call(e) !== "[object Object]" ? !1 : (t = r(e), t ? (n = u.call(t, "constructor") && t.constructor, typeof n == "function" && d.call(n) === f) : !0);
			},
			isEmptyObject: function(e) {
				for (var t in e) return !1;
				return !0;
			},
			globalEval: function(e, t, n) {
				v(e, { nonce: t && t.nonce }, n);
			},
			each: function(e, t) {
				var n, r = 0;
				if (S(e)) for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
				else for (r in e) if (t.call(e[r], r, e[r]) === !1) break;
				return e;
			},
			makeArray: function(e, t) {
				var n = t || [];
				return e != null && (S(Object(e)) ? x.merge(n, typeof e == "string" ? [e] : e) : o.call(n, e)), n;
			},
			inArray: function(e, t, n) {
				return t == null ? -1 : s.call(t, e, n);
			},
			merge: function(e, t) {
				for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
				return e.length = i, e;
			},
			grep: function(e, t, n) {
				for (var r, i = [], a = 0, o = e.length, s = !n; a < o; a++) r = !t(e[a], a), r !== s && i.push(e[a]);
				return i;
			},
			map: function(e, t, n) {
				var r, i, o = 0, s = [];
				if (S(e)) for (r = e.length; o < r; o++) i = t(e[o], o, n), i != null && s.push(i);
				else for (o in e) i = t(e[o], o, n), i != null && s.push(i);
				return a(s);
			},
			guid: 1,
			support: p
		}), typeof Symbol == "function" && (x.fn[Symbol.iterator] = n[Symbol.iterator]), x.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
			c["[object " + t + "]"] = t.toLowerCase();
		});
		function S(e) {
			var t = !!e && "length" in e && e.length, n = y(e);
			return m(e) || h(e) ? !1 : n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e;
		}
		var C = (function(e) {
			var t, n, r, i, a, o, s, c, l, u, d, f, p, m, h, g, _, v, y, b = "sizzle" + 1 * /* @__PURE__ */ new Date(), x = e.document, S = 0, C = 0, w = Se(), T = Se(), E = Se(), D = Se(), O = function(e, t) {
				return e === t && (d = !0), 0;
			}, ee = {}.hasOwnProperty, k = [], te = k.pop, ne = k.push, A = k.push, re = k.slice, ie = function(e, t) {
				for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
				return -1;
			}, j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + M + "*\\]", ae = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", oe = RegExp(M + "+", "g"), se = RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), ce = RegExp("^" + M + "*," + M + "*"), le = RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), ue = RegExp(M + "|>"), de = new RegExp(ae), fe = RegExp("^" + N + "$"), F = {
				ID: RegExp("^#(" + N + ")"),
				CLASS: RegExp("^\\.(" + N + ")"),
				TAG: RegExp("^(" + N + "|[*])"),
				ATTR: RegExp("^" + P),
				PSEUDO: RegExp("^" + ae),
				CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
				bool: RegExp("^(?:" + j + ")$", "i"),
				needsContext: RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
			}, pe = /HTML$/i, me = /^(?:input|select|textarea|button)$/i, I = /^h\d$/i, L = /^[^{]+\{\s*\[native \w/, he = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /[+~]/, R = RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"), _e = function(e, t) {
				var n = "0x" + e.slice(1) - 65536;
				return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, n & 1023 | 56320));
			}, ve = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ye = function(e, t) {
				return t ? e === "\0" ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
			}, be = function() {
				f();
			}, xe = De(function(e) {
				return e.disabled === !0 && e.nodeName.toLowerCase() === "fieldset";
			}, {
				dir: "parentNode",
				next: "legend"
			});
			try {
				A.apply(k = re.call(x.childNodes), x.childNodes), k[x.childNodes.length].nodeType;
			} catch {
				A = { apply: k.length ? function(e, t) {
					ne.apply(e, re.call(t));
				} : function(e, t) {
					for (var n = e.length, r = 0; e[n++] = t[r++];);
					e.length = n - 1;
				} };
			}
			function z(e, t, r, i) {
				var a, s, l, u, d, m, _, v = t && t.ownerDocument, x = t ? t.nodeType : 9;
				if (r ||= [], typeof e != "string" || !e || x !== 1 && x !== 9 && x !== 11) return r;
				if (!i && (f(t), t ||= p, h)) {
					if (x !== 11 && (d = he.exec(e))) {
						if (a = d[1]) {
							if (x === 9) if (l = t.getElementById(a)) {
								if (l.id === a) return r.push(l), r;
							} else return r;
							else if (v && (l = v.getElementById(a)) && y(t, l) && l.id === a) return r.push(l), r;
						} else if (d[2]) return A.apply(r, t.getElementsByTagName(e)), r;
						else if ((a = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return A.apply(r, t.getElementsByClassName(a)), r;
					}
					if (n.qsa && !D[e + " "] && (!g || !g.test(e)) && (x !== 1 || t.nodeName.toLowerCase() !== "object")) {
						if (_ = e, v = t, x === 1 && (ue.test(e) || le.test(e))) {
							for (v = ge.test(e) && W(t.parentNode) || t, (v !== t || !n.scope) && ((u = t.getAttribute("id")) ? u = u.replace(ve, ye) : t.setAttribute("id", u = b)), m = o(e), s = m.length; s--;) m[s] = (u ? "#" + u : ":scope") + " " + K(m[s]);
							_ = m.join(",");
						}
						try {
							return A.apply(r, v.querySelectorAll(_)), r;
						} catch {
							D(e, !0);
						} finally {
							u === b && t.removeAttribute("id");
						}
					}
				}
				return c(e.replace(se, "$1"), t, r, i);
			}
			function Se() {
				var e = [];
				function t(n, i) {
					return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
				}
				return t;
			}
			function B(e) {
				return e[b] = !0, e;
			}
			function V(e) {
				var t = p.createElement("fieldset");
				try {
					return !!e(t);
				} catch {
					return !1;
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null;
				}
			}
			function Ce(e, t) {
				for (var n = e.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = t;
			}
			function we(e, t) {
				var n = t && e, r = n && e.nodeType === 1 && t.nodeType === 1 && e.sourceIndex - t.sourceIndex;
				if (r) return r;
				if (n) {
					for (; n = n.nextSibling;) if (n === t) return -1;
				}
				return e ? 1 : -1;
			}
			function Te(e) {
				return function(t) {
					return t.nodeName.toLowerCase() === "input" && t.type === e;
				};
			}
			function H(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return (n === "input" || n === "button") && t.type === e;
				};
			}
			function Ee(e) {
				return function(t) {
					return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && xe(t) === e : t.disabled === e : "label" in t ? t.disabled === e : !1;
				};
			}
			function U(e) {
				return B(function(t) {
					return t = +t, B(function(n, r) {
						for (var i, a = e([], n.length, t), o = a.length; o--;) n[i = a[o]] && (n[i] = !(r[i] = n[i]));
					});
				});
			}
			function W(e) {
				return e && e.getElementsByTagName !== void 0 && e;
			}
			for (t in n = z.support = {}, a = z.isXML = function(e) {
				var t = e.namespaceURI, n = (e.ownerDocument || e).documentElement;
				return !pe.test(t || n && n.nodeName || "HTML");
			}, f = z.setDocument = function(e) {
				var t, i, o = e ? e.ownerDocument || e : x;
				return o == p || o.nodeType !== 9 || !o.documentElement ? p : (p = o, m = p.documentElement, h = !a(p), x != p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", be, !1) : i.attachEvent && i.attachEvent("onunload", be)), n.scope = V(function(e) {
					return m.appendChild(e).appendChild(p.createElement("div")), e.querySelectorAll !== void 0 && !e.querySelectorAll(":scope fieldset div").length;
				}), n.attributes = V(function(e) {
					return e.className = "i", !e.getAttribute("className");
				}), n.getElementsByTagName = V(function(e) {
					return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length;
				}), n.getElementsByClassName = L.test(p.getElementsByClassName), n.getById = V(function(e) {
					return m.appendChild(e).id = b, !p.getElementsByName || !p.getElementsByName(b).length;
				}), n.getById ? (r.filter.ID = function(e) {
					var t = e.replace(R, _e);
					return function(e) {
						return e.getAttribute("id") === t;
					};
				}, r.find.ID = function(e, t) {
					if (t.getElementById !== void 0 && h) {
						var n = t.getElementById(e);
						return n ? [n] : [];
					}
				}) : (r.filter.ID = function(e) {
					var t = e.replace(R, _e);
					return function(e) {
						var n = e.getAttributeNode !== void 0 && e.getAttributeNode("id");
						return n && n.value === t;
					};
				}, r.find.ID = function(e, t) {
					if (t.getElementById !== void 0 && h) {
						var n, r, i, a = t.getElementById(e);
						if (a) {
							if (n = a.getAttributeNode("id"), n && n.value === e) return [a];
							for (i = t.getElementsByName(e), r = 0; a = i[r++];) if (n = a.getAttributeNode("id"), n && n.value === e) return [a];
						}
						return [];
					}
				}), r.find.TAG = n.getElementsByTagName ? function(e, t) {
					if (t.getElementsByTagName !== void 0) return t.getElementsByTagName(e);
					if (n.qsa) return t.querySelectorAll(e);
				} : function(e, t) {
					var n, r = [], i = 0, a = t.getElementsByTagName(e);
					if (e === "*") {
						for (; n = a[i++];) n.nodeType === 1 && r.push(n);
						return r;
					}
					return a;
				}, r.find.CLASS = n.getElementsByClassName && function(e, t) {
					if (t.getElementsByClassName !== void 0 && h) return t.getElementsByClassName(e);
				}, _ = [], g = [], (n.qsa = L.test(p.querySelectorAll)) && (V(function(e) {
					var t;
					m.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + M + "*(?:value|" + j + ")"), e.querySelectorAll("[id~=" + b + "-]").length || g.push("~="), t = p.createElement("input"), t.setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || g.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]"), e.querySelectorAll("\\\f"), g.push("[\\r\\n\\f]");
				}), V(function(e) {
					e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
					var t = p.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + M + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length !== 2 && g.push(":enabled", ":disabled"), m.appendChild(e).disabled = !0, e.querySelectorAll(":disabled").length !== 2 && g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:");
				})), (n.matchesSelector = L.test(v = m.matches || m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && V(function(e) {
					n.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), _.push("!=", ae);
				}), g = g.length && new RegExp(g.join("|")), _ = _.length && new RegExp(_.join("|")), t = L.test(m.compareDocumentPosition), y = t || L.test(m.contains) ? function(e, t) {
					var n = e.nodeType === 9 ? e.documentElement : e, r = t && t.parentNode;
					return e === r || !!(r && r.nodeType === 1 && (n.contains ? n.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16));
				} : function(e, t) {
					if (t) {
						for (; t = t.parentNode;) if (t === e) return !0;
					}
					return !1;
				}, O = t ? function(e, t) {
					if (e === t) return d = !0, 0;
					var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
					return r || (r = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, r & 1 || !n.sortDetached && t.compareDocumentPosition(e) === r ? e == p || e.ownerDocument == x && y(x, e) ? -1 : t == p || t.ownerDocument == x && y(x, t) ? 1 : u ? ie(u, e) - ie(u, t) : 0 : r & 4 ? -1 : 1);
				} : function(e, t) {
					if (e === t) return d = !0, 0;
					var n, r = 0, i = e.parentNode, a = t.parentNode, o = [e], s = [t];
					if (!i || !a) return e == p ? -1 : t == p ? 1 : i ? -1 : a ? 1 : u ? ie(u, e) - ie(u, t) : 0;
					if (i === a) return we(e, t);
					for (n = e; n = n.parentNode;) o.unshift(n);
					for (n = t; n = n.parentNode;) s.unshift(n);
					for (; o[r] === s[r];) r++;
					return r ? we(o[r], s[r]) : o[r] == x ? -1 : +(s[r] == x);
				}, p);
			}, z.matches = function(e, t) {
				return z(e, null, null, t);
			}, z.matchesSelector = function(e, t) {
				if (f(e), n.matchesSelector && h && !D[t + " "] && (!_ || !_.test(t)) && (!g || !g.test(t))) try {
					var r = v.call(e, t);
					if (r || n.disconnectedMatch || e.document && e.document.nodeType !== 11) return r;
				} catch {
					D(t, !0);
				}
				return z(t, p, null, [e]).length > 0;
			}, z.contains = function(e, t) {
				return (e.ownerDocument || e) != p && f(e), y(e, t);
			}, z.attr = function(e, t) {
				(e.ownerDocument || e) != p && f(e);
				var i = r.attrHandle[t.toLowerCase()], a = i && ee.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !h) : void 0;
				return a === void 0 ? n.attributes || !h ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null : a;
			}, z.escape = function(e) {
				return (e + "").replace(ve, ye);
			}, z.error = function(e) {
				throw Error("Syntax error, unrecognized expression: " + e);
			}, z.uniqueSort = function(e) {
				var t, r = [], i = 0, a = 0;
				if (d = !n.detectDuplicates, u = !n.sortStable && e.slice(0), e.sort(O), d) {
					for (; t = e[a++];) t === e[a] && (i = r.push(a));
					for (; i--;) e.splice(r[i], 1);
				}
				return u = null, e;
			}, i = z.getText = function(e) {
				var t, n = "", r = 0, a = e.nodeType;
				if (!a) for (; t = e[r++];) n += i(t);
				else if (a === 1 || a === 9 || a === 11) {
					if (typeof e.textContent == "string") return e.textContent;
					for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
				} else if (a === 3 || a === 4) return e.nodeValue;
				return n;
			}, r = z.selectors = {
				cacheLength: 50,
				createPseudo: B,
				match: F,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": { dir: "parentNode" },
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": { dir: "previousSibling" }
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(R, _e), e[3] = (e[3] || e[4] || e[5] || "").replace(R, _e), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4);
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), e[1].slice(0, 3) === "nth" ? (e[3] || z.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd")), e[5] = +(e[7] + e[8] || e[3] === "odd")) : e[3] && z.error(e[0]), e;
					},
					PSEUDO: function(e) {
						var t, n = !e[6] && e[2];
						return F.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(R, _e).toLowerCase();
						return e === "*" ? function() {
							return !0;
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t;
						};
					},
					CLASS: function(e) {
						var t = w[e + " "];
						return t || (t = RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && w(e, function(e) {
							return t.test(typeof e.className == "string" && e.className || e.getAttribute !== void 0 && e.getAttribute("class") || "");
						});
					},
					ATTR: function(e, t, n) {
						return function(r) {
							var i = z.attr(r, e);
							return i == null ? t === "!=" : t ? (i += "", t === "=" ? i === n : t === "!=" ? i !== n : t === "^=" ? n && i.indexOf(n) === 0 : t === "*=" ? n && i.indexOf(n) > -1 : t === "$=" ? n && i.slice(-n.length) === n : t === "~=" ? (" " + i.replace(oe, " ") + " ").indexOf(n) > -1 : t === "|=" ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0;
						};
					},
					CHILD: function(e, t, n, r, i) {
						var a = e.slice(0, 3) !== "nth", o = e.slice(-4) !== "last", s = t === "of-type";
						return r === 1 && i === 0 ? function(e) {
							return !!e.parentNode;
						} : function(t, n, c) {
							var l, u, d, f, p, m, h = a === o ? "previousSibling" : "nextSibling", g = t.parentNode, _ = s && t.nodeName.toLowerCase(), v = !c && !s, y = !1;
							if (g) {
								if (a) {
									for (; h;) {
										for (f = t; f = f[h];) if (s ? f.nodeName.toLowerCase() === _ : f.nodeType === 1) return !1;
										m = h = e === "only" && !m && "nextSibling";
									}
									return !0;
								}
								if (m = [o ? g.firstChild : g.lastChild], o && v) {
									for (f = g, d = f[b] || (f[b] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), l = u[e] || [], p = l[0] === S && l[1], y = p && l[2], f = p && g.childNodes[p]; f = ++p && f && f[h] || (y = p = 0) || m.pop();) if (f.nodeType === 1 && ++y && f === t) {
										u[e] = [
											S,
											p,
											y
										];
										break;
									}
								} else if (v && (f = t, d = f[b] || (f[b] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), l = u[e] || [], p = l[0] === S && l[1], y = p), y === !1) for (; (f = ++p && f && f[h] || (y = p = 0) || m.pop()) && !((s ? f.nodeName.toLowerCase() === _ : f.nodeType === 1) && ++y && (v && (d = f[b] || (f[b] = {}), u = d[f.uniqueID] || (d[f.uniqueID] = {}), u[e] = [S, y]), f === t)););
								return y -= i, y === r || y % r === 0 && y / r >= 0;
							}
						};
					},
					PSEUDO: function(e, t) {
						var n, i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || z.error("unsupported pseudo: " + e);
						return i[b] ? i(t) : i.length > 1 ? (n = [
							e,
							e,
							"",
							t
						], r.setFilters.hasOwnProperty(e.toLowerCase()) ? B(function(e, n) {
							for (var r, a = i(e, t), o = a.length; o--;) r = ie(e, a[o]), e[r] = !(n[r] = a[o]);
						}) : function(e) {
							return i(e, 0, n);
						}) : i;
					}
				},
				pseudos: {
					not: B(function(e) {
						var t = [], n = [], r = s(e.replace(se, "$1"));
						return r[b] ? B(function(e, t, n, i) {
							for (var a, o = r(e, null, i, []), s = e.length; s--;) (a = o[s]) && (e[s] = !(t[s] = a));
						}) : function(e, i, a) {
							return t[0] = e, r(t, null, a, n), t[0] = null, !n.pop();
						};
					}),
					has: B(function(e) {
						return function(t) {
							return z(e, t).length > 0;
						};
					}),
					contains: B(function(e) {
						return e = e.replace(R, _e), function(t) {
							return (t.textContent || i(t)).indexOf(e) > -1;
						};
					}),
					lang: B(function(e) {
						return fe.test(e || "") || z.error("unsupported lang: " + e), e = e.replace(R, _e).toLowerCase(), function(t) {
							var n;
							do
								if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || n.indexOf(e + "-") === 0;
							while ((t = t.parentNode) && t.nodeType === 1);
							return !1;
						};
					}),
					target: function(t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id;
					},
					root: function(e) {
						return e === m;
					},
					focus: function(e) {
						return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
					},
					enabled: Ee(!1),
					disabled: Ee(!0),
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return t === "input" && !!e.checked || t === "option" && !!e.selected;
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
						return !0;
					},
					parent: function(e) {
						return !r.pseudos.empty(e);
					},
					header: function(e) {
						return I.test(e.nodeName);
					},
					input: function(e) {
						return me.test(e.nodeName);
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return t === "input" && e.type === "button" || t === "button";
					},
					text: function(e) {
						var t;
						return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text");
					},
					first: U(function() {
						return [0];
					}),
					last: U(function(e, t) {
						return [t - 1];
					}),
					eq: U(function(e, t, n) {
						return [n < 0 ? n + t : n];
					}),
					even: U(function(e, t) {
						for (var n = 0; n < t; n += 2) e.push(n);
						return e;
					}),
					odd: U(function(e, t) {
						for (var n = 1; n < t; n += 2) e.push(n);
						return e;
					}),
					lt: U(function(e, t, n) {
						for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
						return e;
					}),
					gt: U(function(e, t, n) {
						for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
						return e;
					})
				}
			}, r.pseudos.nth = r.pseudos.eq, {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) r.pseudos[t] = Te(t);
			for (t in {
				submit: !0,
				reset: !0
			}) r.pseudos[t] = H(t);
			function G() {}
			G.prototype = r.filters = r.pseudos, r.setFilters = new G(), o = z.tokenize = function(e, t) {
				var n, i, a, o, s, c, l, u = T[e + " "];
				if (u) return t ? 0 : u.slice(0);
				for (s = e, c = [], l = r.preFilter; s;) {
					for (o in (!n || (i = ce.exec(s))) && (i && (s = s.slice(i[0].length) || s), c.push(a = [])), n = !1, (i = le.exec(s)) && (n = i.shift(), a.push({
						value: n,
						type: i[0].replace(se, " ")
					}), s = s.slice(n.length)), r.filter) (i = F[o].exec(s)) && (!l[o] || (i = l[o](i))) && (n = i.shift(), a.push({
						value: n,
						type: o,
						matches: i
					}), s = s.slice(n.length));
					if (!n) break;
				}
				return t ? s.length : s ? z.error(e) : T(e, c).slice(0);
			};
			function K(e) {
				for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
				return r;
			}
			function De(e, t, n) {
				var r = t.dir, i = t.next, a = i || r, o = n && a === "parentNode", s = C++;
				return t.first ? function(t, n, i) {
					for (; t = t[r];) if (t.nodeType === 1 || o) return e(t, n, i);
					return !1;
				} : function(t, n, c) {
					var l, u, d, f = [S, s];
					if (c) {
						for (; t = t[r];) if ((t.nodeType === 1 || o) && e(t, n, c)) return !0;
					} else for (; t = t[r];) if (t.nodeType === 1 || o) {
						if (d = t[b] || (t[b] = {}), u = d[t.uniqueID] || (d[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
						else if ((l = u[a]) && l[0] === S && l[1] === s) return f[2] = l[2];
						else if (u[a] = f, f[2] = e(t, n, c)) return !0;
					}
					return !1;
				};
			}
			function Oe(e) {
				return e.length > 1 ? function(t, n, r) {
					for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
					return !0;
				} : e[0];
			}
			function ke(e, t, n) {
				for (var r = 0, i = t.length; r < i; r++) z(e, t[r], n);
				return n;
			}
			function Ae(e, t, n, r, i) {
				for (var a, o = [], s = 0, c = e.length, l = t != null; s < c; s++) (a = e[s]) && (!n || n(a, r, i)) && (o.push(a), l && t.push(s));
				return o;
			}
			function je(e, t, n, r, i, a) {
				return r && !r[b] && (r = je(r)), i && !i[b] && (i = je(i, a)), B(function(a, o, s, c) {
					var l, u, d, f = [], p = [], m = o.length, h = a || ke(t || "*", s.nodeType ? [s] : s, []), g = e && (a || !t) ? Ae(h, f, e, s, c) : h, _ = n ? i || (a ? e : m || r) ? [] : o : g;
					if (n && n(g, _, s, c), r) for (l = Ae(_, p), r(l, [], s, c), u = l.length; u--;) (d = l[u]) && (_[p[u]] = !(g[p[u]] = d));
					if (a) {
						if (i || e) {
							if (i) {
								for (l = [], u = _.length; u--;) (d = _[u]) && l.push(g[u] = d);
								i(null, _ = [], l, c);
							}
							for (u = _.length; u--;) (d = _[u]) && (l = i ? ie(a, d) : f[u]) > -1 && (a[l] = !(o[l] = d));
						}
					} else _ = Ae(_ === o ? _.splice(m, _.length) : _), i ? i(null, o, _, c) : A.apply(o, _);
				});
			}
			function q(e) {
				for (var t, n, i, a = e.length, o = r.relative[e[0].type], s = o || r.relative[" "], c = +!!o, u = De(function(e) {
					return e === t;
				}, s, !0), d = De(function(e) {
					return ie(t, e) > -1;
				}, s, !0), f = [function(e, n, r) {
					var i = !o && (r || n !== l) || ((t = n).nodeType ? u(e, n, r) : d(e, n, r));
					return t = null, i;
				}]; c < a; c++) if (n = r.relative[e[c].type]) f = [De(Oe(f), n)];
				else {
					if (n = r.filter[e[c].type].apply(null, e[c].matches), n[b]) {
						for (i = ++c; i < a && !r.relative[e[i].type]; i++);
						return je(c > 1 && Oe(f), c > 1 && K(e.slice(0, c - 1).concat({ value: e[c - 2].type === " " ? "*" : "" })).replace(se, "$1"), n, c < i && q(e.slice(c, i)), i < a && q(e = e.slice(i)), i < a && K(e));
					}
					f.push(n);
				}
				return Oe(f);
			}
			function Me(e, t) {
				var n = t.length > 0, i = e.length > 0, a = function(a, o, s, c, u) {
					var d, m, g, _ = 0, v = "0", y = a && [], b = [], x = l, C = a || i && r.find.TAG("*", u), w = S += x == null ? 1 : Math.random() || .1, T = C.length;
					for (u && (l = o == p || o || u); v !== T && (d = C[v]) != null; v++) {
						if (i && d) {
							for (m = 0, !o && d.ownerDocument != p && (f(d), s = !h); g = e[m++];) if (g(d, o || p, s)) {
								c.push(d);
								break;
							}
							u && (S = w);
						}
						n && ((d = !g && d) && _--, a && y.push(d));
					}
					if (_ += v, n && v !== _) {
						for (m = 0; g = t[m++];) g(y, b, o, s);
						if (a) {
							if (_ > 0) for (; v--;) y[v] || b[v] || (b[v] = te.call(c));
							b = Ae(b);
						}
						A.apply(c, b), u && !a && b.length > 0 && _ + t.length > 1 && z.uniqueSort(c);
					}
					return u && (S = w, l = x), y;
				};
				return n ? B(a) : a;
			}
			return s = z.compile = function(e, t) {
				var n, r = [], i = [], a = E[e + " "];
				if (!a) {
					for (t ||= o(e), n = t.length; n--;) a = q(t[n]), a[b] ? r.push(a) : i.push(a);
					a = E(e, Me(i, r)), a.selector = e;
				}
				return a;
			}, c = z.select = function(e, t, n, i) {
				var a, c, l, u, d, f = typeof e == "function" && e, p = !i && o(e = f.selector || e);
				if (n ||= [], p.length === 1) {
					if (c = p[0] = p[0].slice(0), c.length > 2 && (l = c[0]).type === "ID" && t.nodeType === 9 && h && r.relative[c[1].type]) {
						if (t = (r.find.ID(l.matches[0].replace(R, _e), t) || [])[0], t) f && (t = t.parentNode);
						else return n;
						e = e.slice(c.shift().value.length);
					}
					for (a = F.needsContext.test(e) ? 0 : c.length; a-- && (l = c[a], !r.relative[u = l.type]);) if ((d = r.find[u]) && (i = d(l.matches[0].replace(R, _e), ge.test(c[0].type) && W(t.parentNode) || t))) {
						if (c.splice(a, 1), e = i.length && K(c), !e) return A.apply(n, i), n;
						break;
					}
				}
				return (f || s(e, p))(i, t, !h, n, !t || ge.test(e) && W(t.parentNode) || t), n;
			}, n.sortStable = b.split("").sort(O).join("") === b, n.detectDuplicates = !!d, f(), n.sortDetached = V(function(e) {
				return e.compareDocumentPosition(p.createElement("fieldset")) & 1;
			}), V(function(e) {
				return e.innerHTML = "<a href='#'></a>", e.firstChild.getAttribute("href") === "#";
			}) || Ce("type|href|height|width", function(e, t, n) {
				if (!n) return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2);
			}), (!n.attributes || !V(function(e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), e.firstChild.getAttribute("value") === "";
			})) && Ce("value", function(e, t, n) {
				if (!n && e.nodeName.toLowerCase() === "input") return e.defaultValue;
			}), V(function(e) {
				return e.getAttribute("disabled") == null;
			}) || Ce(j, function(e, t, n) {
				var r;
				if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
			}), z;
		})(e);
		x.find = C, x.expr = C.selectors, x.expr[":"] = x.expr.pseudos, x.uniqueSort = x.unique = C.uniqueSort, x.text = C.getText, x.isXMLDoc = C.isXML, x.contains = C.contains, x.escapeSelector = C.escape;
		var w = function(e, t, n) {
			for (var r = [], i = n !== void 0; (e = e[t]) && e.nodeType !== 9;) if (e.nodeType === 1) {
				if (i && x(e).is(n)) break;
				r.push(e);
			}
			return r;
		}, T = function(e, t) {
			for (var n = []; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
			return n;
		}, E = x.expr.match.needsContext;
		function D(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
		}
		var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
		function ee(e, t, n) {
			return m(t) ? x.grep(e, function(e, r) {
				return !!t.call(e, r, e) !== n;
			}) : t.nodeType ? x.grep(e, function(e) {
				return e === t !== n;
			}) : typeof t == "string" ? x.filter(t, e, n) : x.grep(e, function(e) {
				return s.call(t, e) > -1 !== n;
			});
		}
		x.filter = function(e, t, n) {
			var r = t[0];
			return n && (e = ":not(" + e + ")"), t.length === 1 && r.nodeType === 1 ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function(e) {
				return e.nodeType === 1;
			}));
		}, x.fn.extend({
			find: function(e) {
				var t, n, r = this.length, i = this;
				if (typeof e != "string") return this.pushStack(x(e).filter(function() {
					for (t = 0; t < r; t++) if (x.contains(i[t], this)) return !0;
				}));
				for (n = this.pushStack([]), t = 0; t < r; t++) x.find(e, i[t], n);
				return r > 1 ? x.uniqueSort(n) : n;
			},
			filter: function(e) {
				return this.pushStack(ee(this, e || [], !1));
			},
			not: function(e) {
				return this.pushStack(ee(this, e || [], !0));
			},
			is: function(e) {
				return !!ee(this, typeof e == "string" && E.test(e) ? x(e) : e || [], !1).length;
			}
		});
		var k, te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, ne = x.fn.init = function(e, t, n) {
			var r, i;
			if (!e) return this;
			if (n ||= k, typeof e == "string") if (r = e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? [
				null,
				e,
				null
			] : te.exec(e), r && (r[1] || !t)) if (r[1]) {
				if (t = t instanceof x ? t[0] : t, x.merge(this, x.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : g, !0)), O.test(r[1]) && x.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
				return this;
			} else return i = g.getElementById(r[2]), i && (this[0] = i, this.length = 1), this;
			else if (!t || t.jquery) return (t || n).find(e);
			else return this.constructor(t).find(e);
			else if (e.nodeType) return this[0] = e, this.length = 1, this;
			else if (m(e)) return n.ready === void 0 ? e(x) : n.ready(e);
			return x.makeArray(e, this);
		};
		ne.prototype = x.fn, k = x(g);
		var A = /^(?:parents|prev(?:Until|All))/, re = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
		x.fn.extend({
			has: function(e) {
				var t = x(e, this), n = t.length;
				return this.filter(function() {
					for (var e = 0; e < n; e++) if (x.contains(this, t[e])) return !0;
				});
			},
			closest: function(e, t) {
				var n, r = 0, i = this.length, a = [], o = typeof e != "string" && x(e);
				if (!E.test(e)) {
					for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && x.find.matchesSelector(n, e))) {
						a.push(n);
						break;
					}
				}
				return this.pushStack(a.length > 1 ? x.uniqueSort(a) : a);
			},
			index: function(e) {
				return e ? typeof e == "string" ? s.call(x(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
			},
			add: function(e, t) {
				return this.pushStack(x.uniqueSort(x.merge(this.get(), x(e, t))));
			},
			addBack: function(e) {
				return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
			}
		});
		function ie(e, t) {
			for (; (e = e[t]) && e.nodeType !== 1;);
			return e;
		}
		x.each({
			parent: function(e) {
				var t = e.parentNode;
				return t && t.nodeType !== 11 ? t : null;
			},
			parents: function(e) {
				return w(e, "parentNode");
			},
			parentsUntil: function(e, t, n) {
				return w(e, "parentNode", n);
			},
			next: function(e) {
				return ie(e, "nextSibling");
			},
			prev: function(e) {
				return ie(e, "previousSibling");
			},
			nextAll: function(e) {
				return w(e, "nextSibling");
			},
			prevAll: function(e) {
				return w(e, "previousSibling");
			},
			nextUntil: function(e, t, n) {
				return w(e, "nextSibling", n);
			},
			prevUntil: function(e, t, n) {
				return w(e, "previousSibling", n);
			},
			siblings: function(e) {
				return T((e.parentNode || {}).firstChild, e);
			},
			children: function(e) {
				return T(e.firstChild);
			},
			contents: function(e) {
				return e.contentDocument != null && r(e.contentDocument) ? e.contentDocument : (D(e, "template") && (e = e.content || e), x.merge([], e.childNodes));
			}
		}, function(e, t) {
			x.fn[e] = function(n, r) {
				var i = x.map(this, t, n);
				return e.slice(-5) !== "Until" && (r = n), r && typeof r == "string" && (i = x.filter(r, i)), this.length > 1 && (re[e] || x.uniqueSort(i), A.test(e) && i.reverse()), this.pushStack(i);
			};
		});
		var j = /[^\x20\t\r\n\f]+/g;
		function M(e) {
			var t = {};
			return x.each(e.match(j) || [], function(e, n) {
				t[n] = !0;
			}), t;
		}
		x.Callbacks = function(e) {
			e = typeof e == "string" ? M(e) : x.extend({}, e);
			var t, n, r, i, a = [], o = [], s = -1, c = function() {
				for (i ||= e.once, r = t = !0; o.length; s = -1) for (n = o.shift(); ++s < a.length;) a[s].apply(n[0], n[1]) === !1 && e.stopOnFalse && (s = a.length, n = !1);
				e.memory || (n = !1), t = !1, i && (a = n ? [] : "");
			}, l = {
				add: function() {
					return a && (n && !t && (s = a.length - 1, o.push(n)), (function t(n) {
						x.each(n, function(n, r) {
							m(r) ? (!e.unique || !l.has(r)) && a.push(r) : r && r.length && y(r) !== "string" && t(r);
						});
					})(arguments), n && !t && c()), this;
				},
				remove: function() {
					return x.each(arguments, function(e, t) {
						for (var n; (n = x.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= s && s--;
					}), this;
				},
				has: function(e) {
					return e ? x.inArray(e, a) > -1 : a.length > 0;
				},
				empty: function() {
					return a &&= [], this;
				},
				disable: function() {
					return i = o = [], a = n = "", this;
				},
				disabled: function() {
					return !a;
				},
				lock: function() {
					return i = o = [], !n && !t && (a = n = ""), this;
				},
				locked: function() {
					return !!i;
				},
				fireWith: function(e, n) {
					return i || (n ||= [], n = [e, n.slice ? n.slice() : n], o.push(n), t || c()), this;
				},
				fire: function() {
					return l.fireWith(this, arguments), this;
				},
				fired: function() {
					return !!r;
				}
			};
			return l;
		};
		function N(e) {
			return e;
		}
		function P(e) {
			throw e;
		}
		function ae(e, t, n, r) {
			var i;
			try {
				e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
			} catch (e) {
				n.apply(void 0, [e]);
			}
		}
		x.extend({
			Deferred: function(t) {
				var n = [
					[
						"notify",
						"progress",
						x.Callbacks("memory"),
						x.Callbacks("memory"),
						2
					],
					[
						"resolve",
						"done",
						x.Callbacks("once memory"),
						x.Callbacks("once memory"),
						0,
						"resolved"
					],
					[
						"reject",
						"fail",
						x.Callbacks("once memory"),
						x.Callbacks("once memory"),
						1,
						"rejected"
					]
				], r = "pending", i = {
					state: function() {
						return r;
					},
					always: function() {
						return a.done(arguments).fail(arguments), this;
					},
					catch: function(e) {
						return i.then(null, e);
					},
					pipe: function() {
						var e = arguments;
						return x.Deferred(function(t) {
							x.each(n, function(n, r) {
								var i = m(e[r[4]]) && e[r[4]];
								a[r[1]](function() {
									var e = i && i.apply(this, arguments);
									e && m(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments);
								});
							}), e = null;
						}).promise();
					},
					then: function(t, r, i) {
						var a = 0;
						function o(t, n, r, i) {
							return function() {
								var s = this, c = arguments, l = function() {
									var e, l;
									if (!(t < a)) {
										if (e = r.apply(s, c), e === n.promise()) throw TypeError("Thenable self-resolution");
										l = e && (typeof e == "object" || typeof e == "function") && e.then, m(l) ? i ? l.call(e, o(a, n, N, i), o(a, n, P, i)) : (a++, l.call(e, o(a, n, N, i), o(a, n, P, i), o(a, n, N, n.notifyWith))) : (r !== N && (s = void 0, c = [e]), (i || n.resolveWith)(s, c));
									}
								}, u = i ? l : function() {
									try {
										l();
									} catch (e) {
										x.Deferred.exceptionHook && x.Deferred.exceptionHook(e, u.stackTrace), t + 1 >= a && (r !== P && (s = void 0, c = [e]), n.rejectWith(s, c));
									}
								};
								t ? u() : (x.Deferred.getStackHook && (u.stackTrace = x.Deferred.getStackHook()), e.setTimeout(u));
							};
						}
						return x.Deferred(function(e) {
							n[0][3].add(o(0, e, m(i) ? i : N, e.notifyWith)), n[1][3].add(o(0, e, m(t) ? t : N)), n[2][3].add(o(0, e, m(r) ? r : P));
						}).promise();
					},
					promise: function(e) {
						return e == null ? i : x.extend(e, i);
					}
				}, a = {};
				return x.each(n, function(e, t) {
					var o = t[2], s = t[5];
					i[t[1]] = o.add, s && o.add(function() {
						r = s;
					}, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), o.add(t[3].fire), a[t[0]] = function() {
						return a[t[0] + "With"](this === a ? void 0 : this, arguments), this;
					}, a[t[0] + "With"] = o.fireWith;
				}), i.promise(a), t && t.call(a, a), a;
			},
			when: function(e) {
				var t = arguments.length, n = t, r = Array(n), a = i.call(arguments), o = x.Deferred(), s = function(e) {
					return function(n) {
						r[e] = this, a[e] = arguments.length > 1 ? i.call(arguments) : n, --t || o.resolveWith(r, a);
					};
				};
				if (t <= 1 && (ae(e, o.done(s(n)).resolve, o.reject, !t), o.state() === "pending" || m(a[n] && a[n].then))) return o.then();
				for (; n--;) ae(a[n], s(n), o.reject);
				return o.promise();
			}
		});
		var oe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
		x.Deferred.exceptionHook = function(t, n) {
			e.console && e.console.warn && t && oe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
		}, x.readyException = function(t) {
			e.setTimeout(function() {
				throw t;
			});
		};
		var se = x.Deferred();
		x.fn.ready = function(e) {
			return se.then(e).catch(function(e) {
				x.readyException(e);
			}), this;
		}, x.extend({
			isReady: !1,
			readyWait: 1,
			ready: function(e) {
				(e === !0 ? --x.readyWait : x.isReady) || (x.isReady = !0, !(e !== !0 && --x.readyWait > 0) && se.resolveWith(g, [x]));
			}
		}), x.ready.then = se.then;
		function ce() {
			g.removeEventListener("DOMContentLoaded", ce), e.removeEventListener("load", ce), x.ready();
		}
		g.readyState === "complete" || g.readyState !== "loading" && !g.documentElement.doScroll ? e.setTimeout(x.ready) : (g.addEventListener("DOMContentLoaded", ce), e.addEventListener("load", ce));
		var le = function(e, t, n, r, i, a, o) {
			var s = 0, c = e.length, l = n == null;
			if (y(n) === "object") for (s in i = !0, n) le(e, t, s, n[s], !0, a, o);
			else if (r !== void 0 && (i = !0, m(r) || (o = !0), l && (o ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
				return l.call(x(e), n);
			})), t)) for (; s < c; s++) t(e[s], n, o ? r : r.call(e[s], s, t(e[s], n)));
			return i ? e : l ? t.call(e) : c ? t(e[0], n) : a;
		}, ue = /^-ms-/, de = /-([a-z])/g;
		function fe(e, t) {
			return t.toUpperCase();
		}
		function F(e) {
			return e.replace(ue, "ms-").replace(de, fe);
		}
		var pe = function(e) {
			return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
		};
		function me() {
			this.expando = x.expando + me.uid++;
		}
		me.uid = 1, me.prototype = {
			cache: function(e) {
				var t = e[this.expando];
				return t || (t = Object.create(null), pe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
					value: t,
					configurable: !0
				}))), t;
			},
			set: function(e, t, n) {
				var r, i = this.cache(e);
				if (typeof t == "string") i[F(t)] = n;
				else for (r in t) i[F(r)] = t[r];
				return i;
			},
			get: function(e, t) {
				return t === void 0 ? this.cache(e) : e[this.expando] && e[this.expando][F(t)];
			},
			access: function(e, t, n) {
				return t === void 0 || t && typeof t == "string" && n === void 0 ? this.get(e, t) : (this.set(e, t, n), n === void 0 ? t : n);
			},
			remove: function(e, t) {
				var n, r = e[this.expando];
				if (r !== void 0) {
					if (t !== void 0) for (Array.isArray(t) ? t = t.map(F) : (t = F(t), t = (t in r) ? [t] : t.match(j) || []), n = t.length; n--;) delete r[t[n]];
					(t === void 0 || x.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
				}
			},
			hasData: function(e) {
				var t = e[this.expando];
				return t !== void 0 && !x.isEmptyObject(t);
			}
		};
		var I = new me(), L = new me(), he = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ge = /[A-Z]/g;
		function R(e) {
			return e === "true" ? !0 : e === "false" ? !1 : e === "null" ? null : e === +e + "" ? +e : he.test(e) ? JSON.parse(e) : e;
		}
		function _e(e, t, n) {
			var r;
			if (n === void 0 && e.nodeType === 1) if (r = "data-" + t.replace(ge, "-$&").toLowerCase(), n = e.getAttribute(r), typeof n == "string") {
				try {
					n = R(n);
				} catch {}
				L.set(e, t, n);
			} else n = void 0;
			return n;
		}
		x.extend({
			hasData: function(e) {
				return L.hasData(e) || I.hasData(e);
			},
			data: function(e, t, n) {
				return L.access(e, t, n);
			},
			removeData: function(e, t) {
				L.remove(e, t);
			},
			_data: function(e, t, n) {
				return I.access(e, t, n);
			},
			_removeData: function(e, t) {
				I.remove(e, t);
			}
		}), x.fn.extend({
			data: function(e, t) {
				var n, r, i, a = this[0], o = a && a.attributes;
				if (e === void 0) {
					if (this.length && (i = L.get(a), a.nodeType === 1 && !I.get(a, "hasDataAttrs"))) {
						for (n = o.length; n--;) o[n] && (r = o[n].name, r.indexOf("data-") === 0 && (r = F(r.slice(5)), _e(a, r, i[r])));
						I.set(a, "hasDataAttrs", !0);
					}
					return i;
				}
				return typeof e == "object" ? this.each(function() {
					L.set(this, e);
				}) : le(this, function(t) {
					var n;
					if (a && t === void 0) return n = L.get(a, e), n !== void 0 || (n = _e(a, e), n !== void 0) ? n : void 0;
					this.each(function() {
						L.set(this, e, t);
					});
				}, null, t, arguments.length > 1, null, !0);
			},
			removeData: function(e) {
				return this.each(function() {
					L.remove(this, e);
				});
			}
		}), x.extend({
			queue: function(e, t, n) {
				var r;
				if (e) return t = (t || "fx") + "queue", r = I.get(e, t), n && (!r || Array.isArray(n) ? r = I.access(e, t, x.makeArray(n)) : r.push(n)), r || [];
			},
			dequeue: function(e, t) {
				t ||= "fx";
				var n = x.queue(e, t), r = n.length, i = n.shift(), a = x._queueHooks(e, t);
				i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete a.stop, i.call(e, function() {
					x.dequeue(e, t);
				}, a)), !r && a && a.empty.fire();
			},
			_queueHooks: function(e, t) {
				var n = t + "queueHooks";
				return I.get(e, n) || I.access(e, n, { empty: x.Callbacks("once memory").add(function() {
					I.remove(e, [t + "queue", n]);
				}) });
			}
		}), x.fn.extend({
			queue: function(e, t) {
				var n = 2;
				return typeof e != "string" && (t = e, e = "fx", n--), arguments.length < n ? x.queue(this[0], e) : t === void 0 ? this : this.each(function() {
					var n = x.queue(this, e, t);
					x._queueHooks(this, e), e === "fx" && n[0] !== "inprogress" && x.dequeue(this, e);
				});
			},
			dequeue: function(e) {
				return this.each(function() {
					x.dequeue(this, e);
				});
			},
			clearQueue: function(e) {
				return this.queue(e || "fx", []);
			},
			promise: function(e, t) {
				var n, r = 1, i = x.Deferred(), a = this, o = this.length, s = function() {
					--r || i.resolveWith(a, [a]);
				};
				for (typeof e != "string" && (t = e, e = void 0), e ||= "fx"; o--;) n = I.get(a[o], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
				return s(), i.promise(t);
			}
		});
		var ve = "[+-]?(?:\\d*\\.|)\\d+(?:[eE][+-]?\\d+|)", ye = RegExp("^(?:([+-])=|)(" + ve + ")([a-z%]*)$", "i"), be = [
			"Top",
			"Right",
			"Bottom",
			"Left"
		], xe = g.documentElement, z = function(e) {
			return x.contains(e.ownerDocument, e);
		}, Se = { composed: !0 };
		xe.getRootNode && (z = function(e) {
			return x.contains(e.ownerDocument, e) || e.getRootNode(Se) === e.ownerDocument;
		});
		var B = function(e, t) {
			return e = t || e, e.style.display === "none" || e.style.display === "" && z(e) && x.css(e, "display") === "none";
		};
		function V(e, t, n, r) {
			var i, a, o = 20, s = r ? function() {
				return r.cur();
			} : function() {
				return x.css(e, t, "");
			}, c = s(), l = n && n[3] || (x.cssNumber[t] ? "" : "px"), u = e.nodeType && (x.cssNumber[t] || l !== "px" && +c) && ye.exec(x.css(e, t));
			if (u && u[3] !== l) {
				for (c /= 2, l ||= u[3], u = +c || 1; o--;) x.style(e, t, u + l), (1 - a) * (1 - (a = s() / c || .5)) <= 0 && (o = 0), u /= a;
				u *= 2, x.style(e, t, u + l), n ||= [];
			}
			return n && (u = +u || +c || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = u, r.end = i)), i;
		}
		var Ce = {};
		function we(e) {
			var t, n = e.ownerDocument, r = e.nodeName, i = Ce[r];
			return i || (t = n.body.appendChild(n.createElement(r)), i = x.css(t, "display"), t.parentNode.removeChild(t), i === "none" && (i = "block"), Ce[r] = i, i);
		}
		function Te(e, t) {
			for (var n, r, i = [], a = 0, o = e.length; a < o; a++) r = e[a], r.style && (n = r.style.display, t ? (n === "none" && (i[a] = I.get(r, "display") || null, i[a] || (r.style.display = "")), r.style.display === "" && B(r) && (i[a] = we(r))) : n !== "none" && (i[a] = "none", I.set(r, "display", n)));
			for (a = 0; a < o; a++) i[a] != null && (e[a].style.display = i[a]);
			return e;
		}
		x.fn.extend({
			show: function() {
				return Te(this, !0);
			},
			hide: function() {
				return Te(this);
			},
			toggle: function(e) {
				return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
					B(this) ? x(this).show() : x(this).hide();
				});
			}
		});
		var H = /^(?:checkbox|radio)$/i, Ee = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, U = /^$|^module$|\/(?:java|ecma)script/i;
		(function() {
			var e = g.createDocumentFragment().appendChild(g.createElement("div")), t = g.createElement("input");
			t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), p.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, e.innerHTML = "<option></option>", p.option = !!e.lastChild;
		})();
		var W = {
			thead: [
				1,
				"<table>",
				"</table>"
			],
			col: [
				2,
				"<table><colgroup>",
				"</colgroup></table>"
			],
			tr: [
				2,
				"<table><tbody>",
				"</tbody></table>"
			],
			td: [
				3,
				"<table><tbody><tr>",
				"</tr></tbody></table>"
			],
			_default: [
				0,
				"",
				""
			]
		};
		W.tbody = W.tfoot = W.colgroup = W.caption = W.thead, W.th = W.td, p.option || (W.optgroup = W.option = [
			1,
			"<select multiple='multiple'>",
			"</select>"
		]);
		function G(e, t) {
			var n = e.getElementsByTagName === void 0 ? e.querySelectorAll === void 0 ? [] : e.querySelectorAll(t || "*") : e.getElementsByTagName(t || "*");
			return t === void 0 || t && D(e, t) ? x.merge([e], n) : n;
		}
		function K(e, t) {
			for (var n = 0, r = e.length; n < r; n++) I.set(e[n], "globalEval", !t || I.get(t[n], "globalEval"));
		}
		var De = /<|&#?\w+;/;
		function Oe(e, t, n, r, i) {
			for (var a, o, s, c, l, u, d = t.createDocumentFragment(), f = [], p = 0, m = e.length; p < m; p++) if (a = e[p], a || a === 0) if (y(a) === "object") x.merge(f, a.nodeType ? [a] : a);
			else if (!De.test(a)) f.push(t.createTextNode(a));
			else {
				for (o ||= d.appendChild(t.createElement("div")), s = (Ee.exec(a) || ["", ""])[1].toLowerCase(), c = W[s] || W._default, o.innerHTML = c[1] + x.htmlPrefilter(a) + c[2], u = c[0]; u--;) o = o.lastChild;
				x.merge(f, o.childNodes), o = d.firstChild, o.textContent = "";
			}
			for (d.textContent = "", p = 0; a = f[p++];) {
				if (r && x.inArray(a, r) > -1) {
					i && i.push(a);
					continue;
				}
				if (l = z(a), o = G(d.appendChild(a), "script"), l && K(o), n) for (u = 0; a = o[u++];) U.test(a.type || "") && n.push(a);
			}
			return d;
		}
		var ke = /^key/, Ae = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, je = /^([^.]*)(?:\.(.+)|)/;
		function q() {
			return !0;
		}
		function Me() {
			return !1;
		}
		function Ne(e, t) {
			return e === Pe() == (t === "focus");
		}
		function Pe() {
			try {
				return g.activeElement;
			} catch {}
		}
		function J(e, t, n, r, i, a) {
			var o, s;
			if (typeof t == "object") {
				for (s in typeof n != "string" && (r ||= n, n = void 0), t) J(e, s, n, r, t[s], a);
				return e;
			}
			if (r == null && i == null ? (i = n, r = n = void 0) : i ?? (typeof n == "string" ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = Me;
			else if (!i) return e;
			return a === 1 && (o = i, i = function(e) {
				return x().off(e), o.apply(this, arguments);
			}, i.guid = o.guid ||= x.guid++), e.each(function() {
				x.event.add(this, t, i, r, n);
			});
		}
		x.event = {
			global: {},
			add: function(e, t, n, r, i) {
				var a, o, s, c, l, u, d, f, p, m, h, g = I.get(e);
				if (pe(e)) for (n.handler && (a = n, n = a.handler, i = a.selector), i && x.find.matchesSelector(xe, i), n.guid ||= x.guid++, (c = g.events) || (c = g.events = Object.create(null)), (o = g.handle) || (o = g.handle = function(t) {
					return x !== void 0 && x.event.triggered !== t.type ? x.event.dispatch.apply(e, arguments) : void 0;
				}), t = (t || "").match(j) || [""], l = t.length; l--;) s = je.exec(t[l]) || [], p = h = s[1], m = (s[2] || "").split(".").sort(), p && (d = x.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, d = x.event.special[p] || {}, u = x.extend({
					type: p,
					origType: h,
					data: r,
					handler: n,
					guid: n.guid,
					selector: i,
					needsContext: i && x.expr.match.needsContext.test(i),
					namespace: m.join(".")
				}, a), (f = c[p]) || (f = c[p] = [], f.delegateCount = 0, (!d.setup || d.setup.call(e, r, m, o) === !1) && e.addEventListener && e.addEventListener(p, o)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, u) : f.push(u), x.event.global[p] = !0);
			},
			remove: function(e, t, n, r, i) {
				var a, o, s, c, l, u, d, f, p, m, h, g = I.hasData(e) && I.get(e);
				if (!(!g || !(c = g.events))) {
					for (t = (t || "").match(j) || [""], l = t.length; l--;) {
						if (s = je.exec(t[l]) || [], p = h = s[1], m = (s[2] || "").split(".").sort(), !p) {
							for (p in c) x.event.remove(e, p + t[l], n, r, !0);
							continue;
						}
						for (d = x.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = c[p] || [], s = s[2] && RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = f.length; a--;) u = f[a], (i || h === u.origType) && (!n || n.guid === u.guid) && (!s || s.test(u.namespace)) && (!r || r === u.selector || r === "**" && u.selector) && (f.splice(a, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
						o && !f.length && ((!d.teardown || d.teardown.call(e, m, g.handle) === !1) && x.removeEvent(e, p, g.handle), delete c[p]);
					}
					x.isEmptyObject(c) && I.remove(e, "handle events");
				}
			},
			dispatch: function(e) {
				var t, n, r, i, a, o, s = Array(arguments.length), c = x.event.fix(e), l = (I.get(this, "events") || Object.create(null))[c.type] || [], u = x.event.special[c.type] || {};
				for (s[0] = c, t = 1; t < arguments.length; t++) s[t] = arguments[t];
				if (c.delegateTarget = this, !(u.preDispatch && u.preDispatch.call(this, c) === !1)) {
					for (o = x.event.handlers.call(this, c, l), t = 0; (i = o[t++]) && !c.isPropagationStopped();) for (c.currentTarget = i.elem, n = 0; (a = i.handlers[n++]) && !c.isImmediatePropagationStopped();) (!c.rnamespace || a.namespace === !1 || c.rnamespace.test(a.namespace)) && (c.handleObj = a, c.data = a.data, r = ((x.event.special[a.origType] || {}).handle || a.handler).apply(i.elem, s), r !== void 0 && (c.result = r) === !1 && (c.preventDefault(), c.stopPropagation()));
					return u.postDispatch && u.postDispatch.call(this, c), c.result;
				}
			},
			handlers: function(e, t) {
				var n, r, i, a, o, s = [], c = t.delegateCount, l = e.target;
				if (c && l.nodeType && !(e.type === "click" && e.button >= 1)) {
					for (; l !== this; l = l.parentNode || this) if (l.nodeType === 1 && !(e.type === "click" && l.disabled === !0)) {
						for (a = [], o = {}, n = 0; n < c; n++) r = t[n], i = r.selector + " ", o[i] === void 0 && (o[i] = r.needsContext ? x(i, this).index(l) > -1 : x.find(i, this, null, [l]).length), o[i] && a.push(r);
						a.length && s.push({
							elem: l,
							handlers: a
						});
					}
				}
				return l = this, c < t.length && s.push({
					elem: l,
					handlers: t.slice(c)
				}), s;
			},
			addProp: function(e, t) {
				Object.defineProperty(x.Event.prototype, e, {
					enumerable: !0,
					configurable: !0,
					get: m(t) ? function() {
						if (this.originalEvent) return t(this.originalEvent);
					} : function() {
						if (this.originalEvent) return this.originalEvent[e];
					},
					set: function(t) {
						Object.defineProperty(this, e, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: t
						});
					}
				});
			},
			fix: function(e) {
				return e[x.expando] ? e : new x.Event(e);
			},
			special: {
				load: { noBubble: !0 },
				click: {
					setup: function(e) {
						var t = this || e;
						return H.test(t.type) && t.click && D(t, "input") && Fe(t, "click", q), !1;
					},
					trigger: function(e) {
						var t = this || e;
						return H.test(t.type) && t.click && D(t, "input") && Fe(t, "click"), !0;
					},
					_default: function(e) {
						var t = e.target;
						return H.test(t.type) && t.click && D(t, "input") && I.get(t, "click") || D(t, "a");
					}
				},
				beforeunload: { postDispatch: function(e) {
					e.result !== void 0 && e.originalEvent && (e.originalEvent.returnValue = e.result);
				} }
			}
		};
		function Fe(e, t, n) {
			if (!n) {
				I.get(e, t) === void 0 && x.event.add(e, t, q);
				return;
			}
			I.set(e, t, !1), x.event.add(e, t, {
				namespace: !1,
				handler: function(e) {
					var r, a, o = I.get(this, t);
					if (e.isTrigger & 1 && this[t]) {
						if (o.length) (x.event.special[t] || {}).delegateType && e.stopPropagation();
						else if (o = i.call(arguments), I.set(this, t, o), r = n(this, t), this[t](), a = I.get(this, t), o !== a || r ? I.set(this, t, !1) : a = {}, o !== a) return e.stopImmediatePropagation(), e.preventDefault(), a.value;
					} else o.length && (I.set(this, t, { value: x.event.trigger(x.extend(o[0], x.Event.prototype), o.slice(1), this) }), e.stopImmediatePropagation());
				}
			});
		}
		x.removeEvent = function(e, t, n) {
			e.removeEventListener && e.removeEventListener(t, n);
		}, x.Event = function(e, t) {
			if (!(this instanceof x.Event)) return new x.Event(e, t);
			e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === void 0 && e.returnValue === !1 ? q : Me, this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && x.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[x.expando] = !0;
		}, x.Event.prototype = {
			constructor: x.Event,
			isDefaultPrevented: Me,
			isPropagationStopped: Me,
			isImmediatePropagationStopped: Me,
			isSimulated: !1,
			preventDefault: function() {
				var e = this.originalEvent;
				this.isDefaultPrevented = q, e && !this.isSimulated && e.preventDefault();
			},
			stopPropagation: function() {
				var e = this.originalEvent;
				this.isPropagationStopped = q, e && !this.isSimulated && e.stopPropagation();
			},
			stopImmediatePropagation: function() {
				var e = this.originalEvent;
				this.isImmediatePropagationStopped = q, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
			}
		}, x.each({
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
			which: function(e) {
				var t = e.button;
				return e.which == null && ke.test(e.type) ? e.charCode == null ? e.keyCode : e.charCode : !e.which && t !== void 0 && Ae.test(e.type) ? t & 1 ? 1 : t & 2 ? 3 : t & 4 ? 2 : 0 : e.which;
			}
		}, x.event.addProp), x.each({
			focus: "focusin",
			blur: "focusout"
		}, function(e, t) {
			x.event.special[e] = {
				setup: function() {
					return Fe(this, e, Ne), !1;
				},
				trigger: function() {
					return Fe(this, e), !0;
				},
				delegateType: t
			};
		}), x.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function(e, t) {
			x.event.special[e] = {
				delegateType: t,
				bindType: t,
				handle: function(e) {
					var n, r = this, i = e.relatedTarget, a = e.handleObj;
					return (!i || i !== r && !x.contains(r, i)) && (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n;
				}
			};
		}), x.fn.extend({
			on: function(e, t, n, r) {
				return J(this, e, t, n, r);
			},
			one: function(e, t, n, r) {
				return J(this, e, t, n, r, 1);
			},
			off: function(e, t, n) {
				var r, i;
				if (e && e.preventDefault && e.handleObj) return r = e.handleObj, x(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
				if (typeof e == "object") {
					for (i in e) this.off(i, t, e[i]);
					return this;
				}
				return (t === !1 || typeof t == "function") && (n = t, t = void 0), n === !1 && (n = Me), this.each(function() {
					x.event.remove(this, e, n, t);
				});
			}
		});
		var Ie = /<script|<style|<link/i, Le = /checked\s*(?:[^=]|=\s*.checked.)/i, Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
		function ze(e, t) {
			return D(e, "table") && D(t.nodeType === 11 ? t.firstChild : t, "tr") && x(e).children("tbody")[0] || e;
		}
		function Be(e) {
			return e.type = (e.getAttribute("type") !== null) + "/" + e.type, e;
		}
		function Ve(e) {
			return (e.type || "").slice(0, 5) === "true/" ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
		}
		function He(e, t) {
			var n, r, i, a, o, s, c;
			if (t.nodeType === 1) {
				if (I.hasData(e) && (a = I.get(e), c = a.events, c)) for (i in I.remove(t, "handle events"), c) for (n = 0, r = c[i].length; n < r; n++) x.event.add(t, i, c[i][n]);
				L.hasData(e) && (o = L.access(e), s = x.extend({}, o), L.set(t, s));
			}
		}
		function Ue(e, t) {
			var n = t.nodeName.toLowerCase();
			n === "input" && H.test(e.type) ? t.checked = e.checked : (n === "input" || n === "textarea") && (t.defaultValue = e.defaultValue);
		}
		function We(e, t, n, r) {
			t = a(t);
			var i, o, s, c, l, u, d = 0, f = e.length, h = f - 1, g = t[0], _ = m(g);
			if (_ || f > 1 && typeof g == "string" && !p.checkClone && Le.test(g)) return e.each(function(i) {
				var a = e.eq(i);
				_ && (t[0] = g.call(this, i, a.html())), We(a, t, n, r);
			});
			if (f && (i = Oe(t, e[0].ownerDocument, !1, e, r), o = i.firstChild, i.childNodes.length === 1 && (i = o), o || r)) {
				for (s = x.map(G(i, "script"), Be), c = s.length; d < f; d++) l = i, d !== h && (l = x.clone(l, !0, !0), c && x.merge(s, G(l, "script"))), n.call(e[d], l, d);
				if (c) for (u = s[s.length - 1].ownerDocument, x.map(s, Ve), d = 0; d < c; d++) l = s[d], U.test(l.type || "") && !I.access(l, "globalEval") && x.contains(u, l) && (l.src && (l.type || "").toLowerCase() !== "module" ? x._evalUrl && !l.noModule && x._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }, u) : v(l.textContent.replace(Re, ""), l, u));
			}
			return e;
		}
		function Ge(e, t, n) {
			for (var r, i = t ? x.filter(t, e) : e, a = 0; (r = i[a]) != null; a++) !n && r.nodeType === 1 && x.cleanData(G(r)), r.parentNode && (n && z(r) && K(G(r, "script")), r.parentNode.removeChild(r));
			return e;
		}
		x.extend({
			htmlPrefilter: function(e) {
				return e;
			},
			clone: function(e, t, n) {
				var r, i, a, o, s = e.cloneNode(!0), c = z(e);
				if (!p.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !x.isXMLDoc(e)) for (o = G(s), a = G(e), r = 0, i = a.length; r < i; r++) Ue(a[r], o[r]);
				if (t) if (n) for (a ||= G(e), o ||= G(s), r = 0, i = a.length; r < i; r++) He(a[r], o[r]);
				else He(e, s);
				return o = G(s, "script"), o.length > 0 && K(o, !c && G(e, "script")), s;
			},
			cleanData: function(e) {
				for (var t, n, r, i = x.event.special, a = 0; (n = e[a]) !== void 0; a++) if (pe(n)) {
					if (t = n[I.expando]) {
						if (t.events) for (r in t.events) i[r] ? x.event.remove(n, r) : x.removeEvent(n, r, t.handle);
						n[I.expando] = void 0;
					}
					n[L.expando] && (n[L.expando] = void 0);
				}
			}
		}), x.fn.extend({
			detach: function(e) {
				return Ge(this, e, !0);
			},
			remove: function(e) {
				return Ge(this, e);
			},
			text: function(e) {
				return le(this, function(e) {
					return e === void 0 ? x.text(this) : this.empty().each(function() {
						(this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = e);
					});
				}, null, e, arguments.length);
			},
			append: function() {
				return We(this, arguments, function(e) {
					(this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && ze(this, e).appendChild(e);
				});
			},
			prepend: function() {
				return We(this, arguments, function(e) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var t = ze(this, e);
						t.insertBefore(e, t.firstChild);
					}
				});
			},
			before: function() {
				return We(this, arguments, function(e) {
					this.parentNode && this.parentNode.insertBefore(e, this);
				});
			},
			after: function() {
				return We(this, arguments, function(e) {
					this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
				});
			},
			empty: function() {
				for (var e, t = 0; (e = this[t]) != null; t++) e.nodeType === 1 && (x.cleanData(G(e, !1)), e.textContent = "");
				return this;
			},
			clone: function(e, t) {
				return e ??= !1, t ??= e, this.map(function() {
					return x.clone(this, e, t);
				});
			},
			html: function(e) {
				return le(this, function(e) {
					var t = this[0] || {}, n = 0, r = this.length;
					if (e === void 0 && t.nodeType === 1) return t.innerHTML;
					if (typeof e == "string" && !Ie.test(e) && !W[(Ee.exec(e) || ["", ""])[1].toLowerCase()]) {
						e = x.htmlPrefilter(e);
						try {
							for (; n < r; n++) t = this[n] || {}, t.nodeType === 1 && (x.cleanData(G(t, !1)), t.innerHTML = e);
							t = 0;
						} catch {}
					}
					t && this.empty().append(e);
				}, null, e, arguments.length);
			},
			replaceWith: function() {
				var e = [];
				return We(this, arguments, function(t) {
					var n = this.parentNode;
					x.inArray(this, e) < 0 && (x.cleanData(G(this)), n && n.replaceChild(t, this));
				}, e);
			}
		}), x.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function(e, t) {
			x.fn[e] = function(e) {
				for (var n, r = [], i = x(e), a = i.length - 1, s = 0; s <= a; s++) n = s === a ? this : this.clone(!0), x(i[s])[t](n), o.apply(r, n.get());
				return this.pushStack(r);
			};
		});
		var Ke = RegExp("^(" + ve + ")(?!px)[a-z%]+$", "i"), qe = function(t) {
			var n = t.ownerDocument.defaultView;
			return (!n || !n.opener) && (n = e), n.getComputedStyle(t);
		}, Y = function(e, t, n) {
			var r, i, a = {};
			for (i in t) a[i] = e.style[i], e.style[i] = t[i];
			for (i in r = n.call(e), t) e.style[i] = a[i];
			return r;
		}, Je = new RegExp(be.join("|"), "i");
		(function() {
			function t() {
				if (u) {
					l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", xe.appendChild(l).appendChild(u);
					var t = e.getComputedStyle(u);
					r = t.top !== "1%", c = n(t.marginLeft) === 12, u.style.right = "60%", o = n(t.right) === 36, i = n(t.width) === 36, u.style.position = "absolute", a = n(u.offsetWidth / 3) === 12, xe.removeChild(l), u = null;
				}
			}
			function n(e) {
				return Math.round(parseFloat(e));
			}
			var r, i, a, o, s, c, l = g.createElement("div"), u = g.createElement("div");
			u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = u.style.backgroundClip === "content-box", x.extend(p, {
				boxSizingReliable: function() {
					return t(), i;
				},
				pixelBoxStyles: function() {
					return t(), o;
				},
				pixelPosition: function() {
					return t(), r;
				},
				reliableMarginLeft: function() {
					return t(), c;
				},
				scrollboxSize: function() {
					return t(), a;
				},
				reliableTrDimensions: function() {
					var t, n, r, i;
					return s ?? (t = g.createElement("table"), n = g.createElement("tr"), r = g.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", n.style.height = "1px", r.style.height = "9px", xe.appendChild(t).appendChild(n).appendChild(r), i = e.getComputedStyle(n), s = parseInt(i.height) > 3, xe.removeChild(t)), s;
				}
			}));
		})();
		function Ye(e, t, n) {
			var r, i, a, o, s = e.style;
			return n ||= qe(e), n && (o = n.getPropertyValue(t) || n[t], o === "" && !z(e) && (o = x.style(e, t)), !p.pixelBoxStyles() && Ke.test(o) && Je.test(t) && (r = s.width, i = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = r, s.minWidth = i, s.maxWidth = a)), o === void 0 ? o : o + "";
		}
		function Xe(e, t) {
			return { get: function() {
				if (e()) {
					delete this.get;
					return;
				}
				return (this.get = t).apply(this, arguments);
			} };
		}
		var Ze = [
			"Webkit",
			"Moz",
			"ms"
		], Qe = g.createElement("div").style, $e = {};
		function et(e) {
			for (var t = e[0].toUpperCase() + e.slice(1), n = Ze.length; n--;) if (e = Ze[n] + t, e in Qe) return e;
		}
		function tt(e) {
			return x.cssProps[e] || $e[e] || (e in Qe ? e : $e[e] = et(e) || e);
		}
		var nt = /^(none|table(?!-c[ea]).+)/, rt = /^--/, it = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		}, at = {
			letterSpacing: "0",
			fontWeight: "400"
		};
		function ot(e, t, n) {
			var r = ye.exec(t);
			return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
		}
		function st(e, t, n, r, i, a) {
			var o = +(t === "width"), s = 0, c = 0;
			if (n === (r ? "border" : "content")) return 0;
			for (; o < 4; o += 2) n === "margin" && (c += x.css(e, n + be[o], !0, i)), r ? (n === "content" && (c -= x.css(e, "padding" + be[o], !0, i)), n !== "margin" && (c -= x.css(e, "border" + be[o] + "Width", !0, i))) : (c += x.css(e, "padding" + be[o], !0, i), n === "padding" ? s += x.css(e, "border" + be[o] + "Width", !0, i) : c += x.css(e, "border" + be[o] + "Width", !0, i));
			return !r && a >= 0 && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - c - s - .5)) || 0), c;
		}
		function ct(e, t, n) {
			var r = qe(e), i = (!p.boxSizingReliable() || n) && x.css(e, "boxSizing", !1, r) === "border-box", a = i, o = Ye(e, t, r), s = "offset" + t[0].toUpperCase() + t.slice(1);
			if (Ke.test(o)) {
				if (!n) return o;
				o = "auto";
			}
			return (!p.boxSizingReliable() && i || !p.reliableTrDimensions() && D(e, "tr") || o === "auto" || !parseFloat(o) && x.css(e, "display", !1, r) === "inline") && e.getClientRects().length && (i = x.css(e, "boxSizing", !1, r) === "border-box", a = s in e, a && (o = e[s])), o = parseFloat(o) || 0, o + st(e, t, n || (i ? "border" : "content"), a, r, o) + "px";
		}
		x.extend({
			cssHooks: { opacity: { get: function(e, t) {
				if (t) {
					var n = Ye(e, "opacity");
					return n === "" ? "1" : n;
				}
			} } },
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
				zoom: !0
			},
			cssProps: {},
			style: function(e, t, n, r) {
				if (!(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)) {
					var i, a, o, s = F(t), c = rt.test(t), l = e.style;
					if (c || (t = tt(s)), o = x.cssHooks[t] || x.cssHooks[s], n !== void 0) {
						if (a = typeof n, a === "string" && (i = ye.exec(n)) && i[1] && (n = V(e, t, i), a = "number"), n == null || n !== n) return;
						a === "number" && !c && (n += i && i[3] || (x.cssNumber[s] ? "" : "px")), !p.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (l[t] = "inherit"), (!o || !("set" in o) || (n = o.set(e, n, r)) !== void 0) && (c ? l.setProperty(t, n) : l[t] = n);
					} else return o && "get" in o && (i = o.get(e, !1, r)) !== void 0 ? i : l[t];
				}
			},
			css: function(e, t, n, r) {
				var i, a, o, s = F(t);
				return rt.test(t) || (t = tt(s)), o = x.cssHooks[t] || x.cssHooks[s], o && "get" in o && (i = o.get(e, !0, n)), i === void 0 && (i = Ye(e, t, r)), i === "normal" && t in at && (i = at[t]), n === "" || n ? (a = parseFloat(i), n === !0 || isFinite(a) ? a || 0 : i) : i;
			}
		}), x.each(["height", "width"], function(e, t) {
			x.cssHooks[t] = {
				get: function(e, n, r) {
					if (n) return nt.test(x.css(e, "display")) && (!e.getClientRects().length || !e.getBoundingClientRect().width) ? Y(e, it, function() {
						return ct(e, t, r);
					}) : ct(e, t, r);
				},
				set: function(e, n, r) {
					var i, a = qe(e), o = !p.scrollboxSize() && a.position === "absolute", s = (o || r) && x.css(e, "boxSizing", !1, a) === "border-box", c = r ? st(e, t, r, s, a) : 0;
					return s && o && (c -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - st(e, t, "border", !1, a) - .5)), c && (i = ye.exec(n)) && (i[3] || "px") !== "px" && (e.style[t] = n, n = x.css(e, t)), ot(e, n, c);
				}
			};
		}), x.cssHooks.marginLeft = Xe(p.reliableMarginLeft, function(e, t) {
			if (t) return (parseFloat(Ye(e, "marginLeft")) || e.getBoundingClientRect().left - Y(e, { marginLeft: 0 }, function() {
				return e.getBoundingClientRect().left;
			})) + "px";
		}), x.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function(e, t) {
			x.cssHooks[e + t] = { expand: function(n) {
				for (var r = 0, i = {}, a = typeof n == "string" ? n.split(" ") : [n]; r < 4; r++) i[e + be[r] + t] = a[r] || a[r - 2] || a[0];
				return i;
			} }, e !== "margin" && (x.cssHooks[e + t].set = ot);
		}), x.fn.extend({ css: function(e, t) {
			return le(this, function(e, t, n) {
				var r, i, a = {}, o = 0;
				if (Array.isArray(t)) {
					for (r = qe(e), i = t.length; o < i; o++) a[t[o]] = x.css(e, t[o], !1, r);
					return a;
				}
				return n === void 0 ? x.css(e, t) : x.style(e, t, n);
			}, e, t, arguments.length > 1);
		} });
		function X(e, t, n, r, i) {
			return new X.prototype.init(e, t, n, r, i);
		}
		x.Tween = X, X.prototype = {
			constructor: X,
			init: function(e, t, n, r, i, a) {
				this.elem = e, this.prop = n, this.easing = i || x.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = a || (x.cssNumber[n] ? "" : "px");
			},
			cur: function() {
				var e = X.propHooks[this.prop];
				return e && e.get ? e.get(this) : X.propHooks._default.get(this);
			},
			run: function(e) {
				var t, n = X.propHooks[this.prop];
				return this.options.duration ? this.pos = t = x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : X.propHooks._default.set(this), this;
			}
		}, X.prototype.init.prototype = X.prototype, X.propHooks = { _default: {
			get: function(e) {
				var t;
				return e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null ? e.elem[e.prop] : (t = x.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t);
			},
			set: function(e) {
				x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.nodeType === 1 && (x.cssHooks[e.prop] || e.elem.style[tt(e.prop)] != null) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
			}
		} }, X.propHooks.scrollTop = X.propHooks.scrollLeft = { set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
		} }, x.easing = {
			linear: function(e) {
				return e;
			},
			swing: function(e) {
				return .5 - Math.cos(e * Math.PI) / 2;
			},
			_default: "swing"
		}, x.fx = X.prototype.init, x.fx.step = {};
		var lt, ut, dt = /^(?:toggle|show|hide)$/, ft = /queueHooks$/;
		function pt() {
			ut && (g.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(pt) : e.setTimeout(pt, x.fx.interval), x.fx.tick());
		}
		function mt() {
			return e.setTimeout(function() {
				lt = void 0;
			}), lt = Date.now();
		}
		function ht(e, t) {
			var n, r = 0, i = { height: e };
			for (t = +!!t; r < 4; r += 2 - t) n = be[r], i["margin" + n] = i["padding" + n] = e;
			return t && (i.opacity = i.width = e), i;
		}
		function gt(e, t, n) {
			for (var r, i = (yt.tweeners[t] || []).concat(yt.tweeners["*"]), a = 0, o = i.length; a < o; a++) if (r = i[a].call(n, t, e)) return r;
		}
		function _t(e, t, n) {
			var r, i, a, o, s, c, l, u, d = "width" in t || "height" in t, f = this, p = {}, m = e.style, h = e.nodeType && B(e), g = I.get(e, "fxshow");
			for (r in n.queue || (o = x._queueHooks(e, "fx"), o.unqueued ?? (o.unqueued = 0, s = o.empty.fire, o.empty.fire = function() {
				o.unqueued || s();
			}), o.unqueued++, f.always(function() {
				f.always(function() {
					o.unqueued--, x.queue(e, "fx").length || o.empty.fire();
				});
			})), t) if (i = t[r], dt.test(i)) {
				if (delete t[r], a ||= i === "toggle", i === (h ? "hide" : "show")) if (i === "show" && g && g[r] !== void 0) h = !0;
				else continue;
				p[r] = g && g[r] || x.style(e, r);
			}
			if (c = !x.isEmptyObject(t), !(!c && x.isEmptyObject(p))) for (r in d && e.nodeType === 1 && (n.overflow = [
				m.overflow,
				m.overflowX,
				m.overflowY
			], l = g && g.display, l ??= I.get(e, "display"), u = x.css(e, "display"), u === "none" && (l ? u = l : (Te([e], !0), l = e.style.display || l, u = x.css(e, "display"), Te([e]))), (u === "inline" || u === "inline-block" && l != null) && x.css(e, "float") === "none" && (c || (f.done(function() {
				m.display = l;
			}), l ??= (u = m.display, u === "none" ? "" : u)), m.display = "inline-block")), n.overflow && (m.overflow = "hidden", f.always(function() {
				m.overflow = n.overflow[0], m.overflowX = n.overflow[1], m.overflowY = n.overflow[2];
			})), c = !1, p) c || (g ? "hidden" in g && (h = g.hidden) : g = I.access(e, "fxshow", { display: l }), a && (g.hidden = !h), h && Te([e], !0), f.done(function() {
				for (r in h || Te([e]), I.remove(e, "fxshow"), p) x.style(e, r, p[r]);
			})), c = gt(h ? g[r] : 0, r, f), r in g || (g[r] = c.start, h && (c.end = c.start, c.start = 0));
		}
		function vt(e, t) {
			var n, r, i, a, o;
			for (n in e) if (r = F(n), i = t[r], a = e[n], Array.isArray(a) && (i = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), o = x.cssHooks[r], o && "expand" in o) for (n in a = o.expand(a), delete e[r], a) n in e || (e[n] = a[n], t[n] = i);
			else t[r] = i;
		}
		function yt(e, t, n) {
			var r, i, a = 0, o = yt.prefilters.length, s = x.Deferred().always(function() {
				delete c.elem;
			}), c = function() {
				if (i) return !1;
				for (var t = lt || mt(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), a = 0, o = l.tweens.length; a < o; a++) l.tweens[a].run(r);
				return s.notifyWith(e, [
					l,
					r,
					n
				]), r < 1 && o ? n : (o || s.notifyWith(e, [
					l,
					1,
					0
				]), s.resolveWith(e, [l]), !1);
			}, l = s.promise({
				elem: e,
				props: x.extend({}, t),
				opts: x.extend(!0, {
					specialEasing: {},
					easing: x.easing._default
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: lt || mt(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var r = x.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
					return l.tweens.push(r), r;
				},
				stop: function(t) {
					var n = 0, r = t ? l.tweens.length : 0;
					if (i) return this;
					for (i = !0; n < r; n++) l.tweens[n].run(1);
					return t ? (s.notifyWith(e, [
						l,
						1,
						0
					]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
				}
			}), u = l.props;
			for (vt(u, l.opts.specialEasing); a < o; a++) if (r = yt.prefilters[a].call(l, e, u, l.opts), r) return m(r.stop) && (x._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
			return x.map(u, gt, l), m(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), x.fx.timer(x.extend(c, {
				elem: e,
				anim: l,
				queue: l.opts.queue
			})), l;
		}
		x.Animation = x.extend(yt, {
			tweeners: { "*": [function(e, t) {
				var n = this.createTween(e, t);
				return V(n.elem, e, ye.exec(t), n), n;
			}] },
			tweener: function(e, t) {
				m(e) ? (t = e, e = ["*"]) : e = e.match(j);
				for (var n, r = 0, i = e.length; r < i; r++) n = e[r], yt.tweeners[n] = yt.tweeners[n] || [], yt.tweeners[n].unshift(t);
			},
			prefilters: [_t],
			prefilter: function(e, t) {
				t ? yt.prefilters.unshift(e) : yt.prefilters.push(e);
			}
		}), x.speed = function(e, t, n) {
			var r = e && typeof e == "object" ? x.extend({}, e) : {
				complete: n || !n && t || m(e) && e,
				duration: e,
				easing: n && t || t && !m(t) && t
			};
			return x.fx.off ? r.duration = 0 : typeof r.duration != "number" && (r.duration in x.fx.speeds ? r.duration = x.fx.speeds[r.duration] : r.duration = x.fx.speeds._default), (r.queue == null || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
				m(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue);
			}, r;
		}, x.fn.extend({
			fadeTo: function(e, t, n, r) {
				return this.filter(B).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
			},
			animate: function(e, t, n, r) {
				var i = x.isEmptyObject(e), a = x.speed(t, n, r), o = function() {
					var t = yt(this, x.extend({}, e), a);
					(i || I.get(this, "finish")) && t.stop(!0);
				};
				return o.finish = o, i || a.queue === !1 ? this.each(o) : this.queue(a.queue, o);
			},
			stop: function(e, t, n) {
				var r = function(e) {
					var t = e.stop;
					delete e.stop, t(n);
				};
				return typeof e != "string" && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
					var t = !0, i = e != null && e + "queueHooks", a = x.timers, o = I.get(this);
					if (i) o[i] && o[i].stop && r(o[i]);
					else for (i in o) o[i] && o[i].stop && ft.test(i) && r(o[i]);
					for (i = a.length; i--;) a[i].elem === this && (e == null || a[i].queue === e) && (a[i].anim.stop(n), t = !1, a.splice(i, 1));
					(t || !n) && x.dequeue(this, e);
				});
			},
			finish: function(e) {
				return e !== !1 && (e ||= "fx"), this.each(function() {
					var t, n = I.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], a = x.timers, o = r ? r.length : 0;
					for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
					for (t = 0; t < o; t++) r[t] && r[t].finish && r[t].finish.call(this);
					delete n.finish;
				});
			}
		}), x.each([
			"toggle",
			"show",
			"hide"
		], function(e, t) {
			var n = x.fn[t];
			x.fn[t] = function(e, r, i) {
				return e == null || typeof e == "boolean" ? n.apply(this, arguments) : this.animate(ht(t, !0), e, r, i);
			};
		}), x.each({
			slideDown: ht("show"),
			slideUp: ht("hide"),
			slideToggle: ht("toggle"),
			fadeIn: { opacity: "show" },
			fadeOut: { opacity: "hide" },
			fadeToggle: { opacity: "toggle" }
		}, function(e, t) {
			x.fn[e] = function(e, n, r) {
				return this.animate(t, e, n, r);
			};
		}), x.timers = [], x.fx.tick = function() {
			var e, t = 0, n = x.timers;
			for (lt = Date.now(); t < n.length; t++) e = n[t], !e() && n[t] === e && n.splice(t--, 1);
			n.length || x.fx.stop(), lt = void 0;
		}, x.fx.timer = function(e) {
			x.timers.push(e), x.fx.start();
		}, x.fx.interval = 13, x.fx.start = function() {
			ut || (ut = !0, pt());
		}, x.fx.stop = function() {
			ut = null;
		}, x.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, x.fn.delay = function(t, n) {
			return t = x.fx && x.fx.speeds[t] || t, n ||= "fx", this.queue(n, function(n, r) {
				var i = e.setTimeout(n, t);
				r.stop = function() {
					e.clearTimeout(i);
				};
			});
		}, (function() {
			var e = g.createElement("input"), t = g.createElement("select").appendChild(g.createElement("option"));
			e.type = "checkbox", p.checkOn = e.value !== "", p.optSelected = t.selected, e = g.createElement("input"), e.value = "t", e.type = "radio", p.radioValue = e.value === "t";
		})();
		var bt, xt = x.expr.attrHandle;
		x.fn.extend({
			attr: function(e, t) {
				return le(this, x.attr, e, t, arguments.length > 1);
			},
			removeAttr: function(e) {
				return this.each(function() {
					x.removeAttr(this, e);
				});
			}
		}), x.extend({
			attr: function(e, t, n) {
				var r, i, a = e.nodeType;
				if (!(a === 3 || a === 8 || a === 2)) {
					if (e.getAttribute === void 0) return x.prop(e, t, n);
					if ((a !== 1 || !x.isXMLDoc(e)) && (i = x.attrHooks[t.toLowerCase()] || (x.expr.match.bool.test(t) ? bt : void 0)), n !== void 0) {
						if (n === null) {
							x.removeAttr(e, t);
							return;
						}
						return i && "set" in i && (r = i.set(e, n, t)) !== void 0 ? r : (e.setAttribute(t, n + ""), n);
					}
					return i && "get" in i && (r = i.get(e, t)) !== null ? r : (r = x.find.attr(e, t), r ?? void 0);
				}
			},
			attrHooks: { type: { set: function(e, t) {
				if (!p.radioValue && t === "radio" && D(e, "input")) {
					var n = e.value;
					return e.setAttribute("type", t), n && (e.value = n), t;
				}
			} } },
			removeAttr: function(e, t) {
				var n, r = 0, i = t && t.match(j);
				if (i && e.nodeType === 1) for (; n = i[r++];) e.removeAttribute(n);
			}
		}), bt = { set: function(e, t, n) {
			return t === !1 ? x.removeAttr(e, n) : e.setAttribute(n, n), n;
		} }, x.each(x.expr.match.bool.source.match(/\w+/g), function(e, t) {
			var n = xt[t] || x.find.attr;
			xt[t] = function(e, t, r) {
				var i, a, o = t.toLowerCase();
				return r || (a = xt[o], xt[o] = i, i = n(e, t, r) == null ? null : o, xt[o] = a), i;
			};
		});
		var St = /^(?:input|select|textarea|button)$/i, Ct = /^(?:a|area)$/i;
		x.fn.extend({
			prop: function(e, t) {
				return le(this, x.prop, e, t, arguments.length > 1);
			},
			removeProp: function(e) {
				return this.each(function() {
					delete this[x.propFix[e] || e];
				});
			}
		}), x.extend({
			prop: function(e, t, n) {
				var r, i, a = e.nodeType;
				if (!(a === 3 || a === 8 || a === 2)) return (a !== 1 || !x.isXMLDoc(e)) && (t = x.propFix[t] || t, i = x.propHooks[t]), n === void 0 ? i && "get" in i && (r = i.get(e, t)) !== null ? r : e[t] : i && "set" in i && (r = i.set(e, n, t)) !== void 0 ? r : e[t] = n;
			},
			propHooks: { tabIndex: { get: function(e) {
				var t = x.find.attr(e, "tabindex");
				return t ? parseInt(t, 10) : St.test(e.nodeName) || Ct.test(e.nodeName) && e.href ? 0 : -1;
			} } },
			propFix: {
				for: "htmlFor",
				class: "className"
			}
		}), p.optSelected || (x.propHooks.selected = {
			get: function(e) {
				var t = e.parentNode;
				return t && t.parentNode && t.parentNode.selectedIndex, null;
			},
			set: function(e) {
				var t = e.parentNode;
				t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
			}
		}), x.each([
			"tabIndex",
			"readOnly",
			"maxLength",
			"cellSpacing",
			"cellPadding",
			"rowSpan",
			"colSpan",
			"useMap",
			"frameBorder",
			"contentEditable"
		], function() {
			x.propFix[this.toLowerCase()] = this;
		});
		function wt(e) {
			return (e.match(j) || []).join(" ");
		}
		function Tt(e) {
			return e.getAttribute && e.getAttribute("class") || "";
		}
		function Et(e) {
			return Array.isArray(e) ? e : typeof e == "string" && e.match(j) || [];
		}
		x.fn.extend({
			addClass: function(e) {
				var t, n, r, i, a, o, s, c = 0;
				if (m(e)) return this.each(function(t) {
					x(this).addClass(e.call(this, t, Tt(this)));
				});
				if (t = Et(e), t.length) {
					for (; n = this[c++];) if (i = Tt(n), r = n.nodeType === 1 && " " + wt(i) + " ", r) {
						for (o = 0; a = t[o++];) r.indexOf(" " + a + " ") < 0 && (r += a + " ");
						s = wt(r), i !== s && n.setAttribute("class", s);
					}
				}
				return this;
			},
			removeClass: function(e) {
				var t, n, r, i, a, o, s, c = 0;
				if (m(e)) return this.each(function(t) {
					x(this).removeClass(e.call(this, t, Tt(this)));
				});
				if (!arguments.length) return this.attr("class", "");
				if (t = Et(e), t.length) {
					for (; n = this[c++];) if (i = Tt(n), r = n.nodeType === 1 && " " + wt(i) + " ", r) {
						for (o = 0; a = t[o++];) for (; r.indexOf(" " + a + " ") > -1;) r = r.replace(" " + a + " ", " ");
						s = wt(r), i !== s && n.setAttribute("class", s);
					}
				}
				return this;
			},
			toggleClass: function(e, t) {
				var n = typeof e, r = n === "string" || Array.isArray(e);
				return typeof t == "boolean" && r ? t ? this.addClass(e) : this.removeClass(e) : m(e) ? this.each(function(n) {
					x(this).toggleClass(e.call(this, n, Tt(this), t), t);
				}) : this.each(function() {
					var t, i, a, o;
					if (r) for (i = 0, a = x(this), o = Et(e); t = o[i++];) a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
					else (e === void 0 || n === "boolean") && (t = Tt(this), t && I.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : I.get(this, "__className__") || ""));
				});
			},
			hasClass: function(e) {
				var t, n, r = 0;
				for (t = " " + e + " "; n = this[r++];) if (n.nodeType === 1 && (" " + wt(Tt(n)) + " ").indexOf(t) > -1) return !0;
				return !1;
			}
		});
		var Dt = /\r/g;
		x.fn.extend({ val: function(e) {
			var t, n, r, i = this[0];
			return arguments.length ? (r = m(e), this.each(function(n) {
				var i;
				this.nodeType === 1 && (i = r ? e.call(this, n, x(this).val()) : e, i == null ? i = "" : typeof i == "number" ? i += "" : Array.isArray(i) && (i = x.map(i, function(e) {
					return e == null ? "" : e + "";
				})), t = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], (!t || !("set" in t) || t.set(this, i, "value") === void 0) && (this.value = i));
			})) : i ? (t = x.valHooks[i.type] || x.valHooks[i.nodeName.toLowerCase()], t && "get" in t && (n = t.get(i, "value")) !== void 0 ? n : (n = i.value, typeof n == "string" ? n.replace(Dt, "") : n ?? "")) : void 0;
		} }), x.extend({ valHooks: {
			option: { get: function(e) {
				return x.find.attr(e, "value") ?? wt(x.text(e));
			} },
			select: {
				get: function(e) {
					var t, n, r, i = e.options, a = e.selectedIndex, o = e.type === "select-one", s = o ? null : [], c = o ? a + 1 : i.length;
					for (r = a < 0 ? c : o ? a : 0; r < c; r++) if (n = i[r], (n.selected || r === a) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
						if (t = x(n).val(), o) return t;
						s.push(t);
					}
					return s;
				},
				set: function(e, t) {
					for (var n, r, i = e.options, a = x.makeArray(t), o = i.length; o--;) r = i[o], (r.selected = x.inArray(x.valHooks.option.get(r), a) > -1) && (n = !0);
					return n || (e.selectedIndex = -1), a;
				}
			}
		} }), x.each(["radio", "checkbox"], function() {
			x.valHooks[this] = { set: function(e, t) {
				if (Array.isArray(t)) return e.checked = x.inArray(x(e).val(), t) > -1;
			} }, p.checkOn || (x.valHooks[this].get = function(e) {
				return e.getAttribute("value") === null ? "on" : e.value;
			});
		}), p.focusin = "onfocusin" in e;
		var Ot = /^(?:focusinfocus|focusoutblur)$/, kt = function(e) {
			e.stopPropagation();
		};
		x.extend(x.event, {
			trigger: function(t, n, r, i) {
				var a, o, s, c, l, d, f, p, _ = [r || g], v = u.call(t, "type") ? t.type : t, y = u.call(t, "namespace") ? t.namespace.split(".") : [];
				if (o = p = s = r ||= g, !(r.nodeType === 3 || r.nodeType === 8) && !Ot.test(v + x.event.triggered) && (v.indexOf(".") > -1 && (y = v.split("."), v = y.shift(), y.sort()), l = v.indexOf(":") < 0 && "on" + v, t = t[x.expando] ? t : new x.Event(v, typeof t == "object" && t), t.isTrigger = i ? 2 : 3, t.namespace = y.join("."), t.rnamespace = t.namespace ? RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target ||= r, n = n == null ? [t] : x.makeArray(n, [t]), f = x.event.special[v] || {}, !(!i && f.trigger && f.trigger.apply(r, n) === !1))) {
					if (!i && !f.noBubble && !h(r)) {
						for (c = f.delegateType || v, Ot.test(c + v) || (o = o.parentNode); o; o = o.parentNode) _.push(o), s = o;
						s === (r.ownerDocument || g) && _.push(s.defaultView || s.parentWindow || e);
					}
					for (a = 0; (o = _[a++]) && !t.isPropagationStopped();) p = o, t.type = a > 1 ? c : f.bindType || v, d = (I.get(o, "events") || Object.create(null))[t.type] && I.get(o, "handle"), d && d.apply(o, n), d = l && o[l], d && d.apply && pe(o) && (t.result = d.apply(o, n), t.result === !1 && t.preventDefault());
					return t.type = v, !i && !t.isDefaultPrevented() && (!f._default || f._default.apply(_.pop(), n) === !1) && pe(r) && l && m(r[v]) && !h(r) && (s = r[l], s && (r[l] = null), x.event.triggered = v, t.isPropagationStopped() && p.addEventListener(v, kt), r[v](), t.isPropagationStopped() && p.removeEventListener(v, kt), x.event.triggered = void 0, s && (r[l] = s)), t.result;
				}
			},
			simulate: function(e, t, n) {
				var r = x.extend(new x.Event(), n, {
					type: e,
					isSimulated: !0
				});
				x.event.trigger(r, null, t);
			}
		}), x.fn.extend({
			trigger: function(e, t) {
				return this.each(function() {
					x.event.trigger(e, t, this);
				});
			},
			triggerHandler: function(e, t) {
				var n = this[0];
				if (n) return x.event.trigger(e, t, n, !0);
			}
		}), p.focusin || x.each({
			focus: "focusin",
			blur: "focusout"
		}, function(e, t) {
			var n = function(e) {
				x.event.simulate(t, e.target, x.event.fix(e));
			};
			x.event.special[t] = {
				setup: function() {
					var r = this.ownerDocument || this.document || this, i = I.access(r, t);
					i || r.addEventListener(e, n, !0), I.access(r, t, (i || 0) + 1);
				},
				teardown: function() {
					var r = this.ownerDocument || this.document || this, i = I.access(r, t) - 1;
					i ? I.access(r, t, i) : (r.removeEventListener(e, n, !0), I.remove(r, t));
				}
			};
		});
		var At = e.location, jt = { guid: Date.now() }, Mt = /\?/;
		x.parseXML = function(t) {
			var n;
			if (!t || typeof t != "string") return null;
			try {
				n = new e.DOMParser().parseFromString(t, "text/xml");
			} catch {
				n = void 0;
			}
			return (!n || n.getElementsByTagName("parsererror").length) && x.error("Invalid XML: " + t), n;
		};
		var Nt = /\[\]$/, Pt = /\r?\n/g, Ft = /^(?:submit|button|image|reset|file)$/i, It = /^(?:input|select|textarea|keygen)/i;
		function Lt(e, t, n, r) {
			var i;
			if (Array.isArray(t)) x.each(t, function(t, i) {
				n || Nt.test(e) ? r(e, i) : Lt(e + "[" + (typeof i == "object" && i ? t : "") + "]", i, n, r);
			});
			else if (!n && y(t) === "object") for (i in t) Lt(e + "[" + i + "]", t[i], n, r);
			else r(e, t);
		}
		x.param = function(e, t) {
			var n, r = [], i = function(e, t) {
				var n = m(t) ? t() : t;
				r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(n ?? "");
			};
			if (e == null) return "";
			if (Array.isArray(e) || e.jquery && !x.isPlainObject(e)) x.each(e, function() {
				i(this.name, this.value);
			});
			else for (n in e) Lt(n, e[n], t, i);
			return r.join("&");
		}, x.fn.extend({
			serialize: function() {
				return x.param(this.serializeArray());
			},
			serializeArray: function() {
				return this.map(function() {
					var e = x.prop(this, "elements");
					return e ? x.makeArray(e) : this;
				}).filter(function() {
					var e = this.type;
					return this.name && !x(this).is(":disabled") && It.test(this.nodeName) && !Ft.test(e) && (this.checked || !H.test(e));
				}).map(function(e, t) {
					var n = x(this).val();
					return n == null ? null : Array.isArray(n) ? x.map(n, function(e) {
						return {
							name: t.name,
							value: e.replace(Pt, "\r\n")
						};
					}) : {
						name: t.name,
						value: n.replace(Pt, "\r\n")
					};
				}).get();
			}
		});
		var Rt = /%20/g, zt = /#.*$/, Bt = /([?&])_=[^&]*/, Vt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ut = /^(?:GET|HEAD)$/, Wt = /^\/\//, Gt = {}, Kt = {}, qt = "*/*", Jt = g.createElement("a");
		Jt.href = At.href;
		function Yt(e) {
			return function(t, n) {
				typeof t != "string" && (n = t, t = "*");
				var r, i = 0, a = t.toLowerCase().match(j) || [];
				if (m(n)) for (; r = a[i++];) r[0] === "+" ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
			};
		}
		function Xt(e, t, n, r) {
			var i = {}, a = e === Kt;
			function o(s) {
				var c;
				return i[s] = !0, x.each(e[s] || [], function(e, s) {
					var l = s(t, n, r);
					if (typeof l == "string" && !a && !i[l]) return t.dataTypes.unshift(l), o(l), !1;
					if (a) return !(c = l);
				}), c;
			}
			return o(t.dataTypes[0]) || !i["*"] && o("*");
		}
		function Zt(e, t) {
			var n, r, i = x.ajaxSettings.flatOptions || {};
			for (n in t) t[n] !== void 0 && ((i[n] ? e : r ||= {})[n] = t[n]);
			return r && x.extend(!0, e, r), e;
		}
		function Qt(e, t, n) {
			for (var r, i, a, o, s = e.contents, c = e.dataTypes; c[0] === "*";) c.shift(), r === void 0 && (r = e.mimeType || t.getResponseHeader("Content-Type"));
			if (r) {
				for (i in s) if (s[i] && s[i].test(r)) {
					c.unshift(i);
					break;
				}
			}
			if (c[0] in n) a = c[0];
			else {
				for (i in n) {
					if (!c[0] || e.converters[i + " " + c[0]]) {
						a = i;
						break;
					}
					o ||= i;
				}
				a ||= o;
			}
			if (a) return a !== c[0] && c.unshift(a), n[a];
		}
		function $t(e, t, n, r) {
			var i, a, o, s, c, l = {}, u = e.dataTypes.slice();
			if (u[1]) for (o in e.converters) l[o.toLowerCase()] = e.converters[o];
			for (a = u.shift(); a;) if (e.responseFields[a] && (n[e.responseFields[a]] = t), !c && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), c = a, a = u.shift(), a) {
				if (a === "*") a = c;
				else if (c !== "*" && c !== a) {
					if (o = l[c + " " + a] || l["* " + a], !o) {
						for (i in l) if (s = i.split(" "), s[1] === a && (o = l[c + " " + s[0]] || l["* " + s[0]], o)) {
							o === !0 ? o = l[i] : l[i] !== !0 && (a = s[0], u.unshift(s[1]));
							break;
						}
					}
					if (o !== !0) if (o && e.throws) t = o(t);
					else try {
						t = o(t);
					} catch (e) {
						return {
							state: "parsererror",
							error: o ? e : "No conversion from " + c + " to " + a
						};
					}
				}
			}
			return {
				state: "success",
				data: t
			};
		}
		x.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: At.href,
				type: "GET",
				isLocal: Ht.test(At.protocol),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": qt,
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
					"text xml": x.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function(e, t) {
				return t ? Zt(Zt(e, x.ajaxSettings), t) : Zt(x.ajaxSettings, e);
			},
			ajaxPrefilter: Yt(Gt),
			ajaxTransport: Yt(Kt),
			ajax: function(t, n) {
				typeof t == "object" && (n = t, t = void 0), n ||= {};
				var r, i, a, o, s, c, l, u, d, f, p = x.ajaxSetup({}, n), m = p.context || p, h = p.context && (m.nodeType || m.jquery) ? x(m) : x.event, _ = x.Deferred(), v = x.Callbacks("once memory"), y = p.statusCode || {}, b = {}, S = {}, C = "canceled", w = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (l) {
							if (!o) for (o = {}; t = Vt.exec(a);) o[t[1].toLowerCase() + " "] = (o[t[1].toLowerCase() + " "] || []).concat(t[2]);
							t = o[e.toLowerCase() + " "];
						}
						return t == null ? null : t.join(", ");
					},
					getAllResponseHeaders: function() {
						return l ? a : null;
					},
					setRequestHeader: function(e, t) {
						return l ?? (e = S[e.toLowerCase()] = S[e.toLowerCase()] || e, b[e] = t), this;
					},
					overrideMimeType: function(e) {
						return l ?? (p.mimeType = e), this;
					},
					statusCode: function(e) {
						var t;
						if (e) if (l) w.always(e[w.status]);
						else for (t in e) y[t] = [y[t], e[t]];
						return this;
					},
					abort: function(e) {
						var t = e || C;
						return r && r.abort(t), T(0, t), this;
					}
				};
				if (_.promise(w), p.url = ((t || p.url || At.href) + "").replace(Wt, At.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(j) || [""], p.crossDomain == null) {
					c = g.createElement("a");
					try {
						c.href = p.url, c.href = c.href, p.crossDomain = Jt.protocol + "//" + Jt.host != c.protocol + "//" + c.host;
					} catch {
						p.crossDomain = !0;
					}
				}
				if (p.data && p.processData && typeof p.data != "string" && (p.data = x.param(p.data, p.traditional)), Xt(Gt, p, n, w), l) return w;
				for (d in u = x.event && p.global, u && x.active++ === 0 && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ut.test(p.type), i = p.url.replace(zt, ""), p.hasContent ? p.data && p.processData && (p.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (p.data = p.data.replace(Rt, "+")) : (f = p.url.slice(i.length), p.data && (p.processData || typeof p.data == "string") && (i += (Mt.test(i) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (i = i.replace(Bt, "$1"), f = (Mt.test(i) ? "&" : "?") + "_=" + jt.guid++ + f), p.url = i + f), p.ifModified && (x.lastModified[i] && w.setRequestHeader("If-Modified-Since", x.lastModified[i]), x.etag[i] && w.setRequestHeader("If-None-Match", x.etag[i])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + (p.dataTypes[0] === "*" ? "" : ", " + qt + "; q=0.01") : p.accepts["*"]), p.headers) w.setRequestHeader(d, p.headers[d]);
				if (p.beforeSend && (p.beforeSend.call(m, w, p) === !1 || l)) return w.abort();
				if (C = "abort", v.add(p.complete), w.done(p.success), w.fail(p.error), r = Xt(Kt, p, n, w), !r) T(-1, "No Transport");
				else {
					if (w.readyState = 1, u && h.trigger("ajaxSend", [w, p]), l) return w;
					p.async && p.timeout > 0 && (s = e.setTimeout(function() {
						w.abort("timeout");
					}, p.timeout));
					try {
						l = !1, r.send(b, T);
					} catch (e) {
						if (l) throw e;
						T(-1, e);
					}
				}
				function T(t, n, o, c) {
					var d, f, g, b, S, C = n;
					l || (l = !0, s && e.clearTimeout(s), r = void 0, a = c || "", w.readyState = t > 0 ? 4 : 0, d = t >= 200 && t < 300 || t === 304, o && (b = Qt(p, w, o)), !d && x.inArray("script", p.dataTypes) > -1 && (p.converters["text script"] = function() {}), b = $t(p, b, w, d), d ? (p.ifModified && (S = w.getResponseHeader("Last-Modified"), S && (x.lastModified[i] = S), S = w.getResponseHeader("etag"), S && (x.etag[i] = S)), t === 204 || p.type === "HEAD" ? C = "nocontent" : t === 304 ? C = "notmodified" : (C = b.state, f = b.data, g = b.error, d = !g)) : (g = C, (t || !C) && (C = "error", t < 0 && (t = 0))), w.status = t, w.statusText = (n || C) + "", d ? _.resolveWith(m, [
						f,
						C,
						w
					]) : _.rejectWith(m, [
						w,
						C,
						g
					]), w.statusCode(y), y = void 0, u && h.trigger(d ? "ajaxSuccess" : "ajaxError", [
						w,
						p,
						d ? f : g
					]), v.fireWith(m, [w, C]), u && (h.trigger("ajaxComplete", [w, p]), --x.active || x.event.trigger("ajaxStop")));
				}
				return w;
			},
			getJSON: function(e, t, n) {
				return x.get(e, t, n, "json");
			},
			getScript: function(e, t) {
				return x.get(e, void 0, t, "script");
			}
		}), x.each(["get", "post"], function(e, t) {
			x[t] = function(e, n, r, i) {
				return m(n) && (i ||= r, r = n, n = void 0), x.ajax(x.extend({
					url: e,
					type: t,
					dataType: i,
					data: n,
					success: r
				}, x.isPlainObject(e) && e));
			};
		}), x.ajaxPrefilter(function(e) {
			for (var t in e.headers) t.toLowerCase() === "content-type" && (e.contentType = e.headers[t] || "");
		}), x._evalUrl = function(e, t, n) {
			return x.ajax({
				url: e,
				type: "GET",
				dataType: "script",
				cache: !0,
				async: !1,
				global: !1,
				converters: { "text script": function() {} },
				dataFilter: function(e) {
					x.globalEval(e, t, n);
				}
			});
		}, x.fn.extend({
			wrapAll: function(e) {
				var t;
				return this[0] && (m(e) && (e = e.call(this[0])), t = x(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					for (var e = this; e.firstElementChild;) e = e.firstElementChild;
					return e;
				}).append(this)), this;
			},
			wrapInner: function(e) {
				return m(e) ? this.each(function(t) {
					x(this).wrapInner(e.call(this, t));
				}) : this.each(function() {
					var t = x(this), n = t.contents();
					n.length ? n.wrapAll(e) : t.append(e);
				});
			},
			wrap: function(e) {
				var t = m(e);
				return this.each(function(n) {
					x(this).wrapAll(t ? e.call(this, n) : e);
				});
			},
			unwrap: function(e) {
				return this.parent(e).not("body").each(function() {
					x(this).replaceWith(this.childNodes);
				}), this;
			}
		}), x.expr.pseudos.hidden = function(e) {
			return !x.expr.pseudos.visible(e);
		}, x.expr.pseudos.visible = function(e) {
			return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
		}, x.ajaxSettings.xhr = function() {
			try {
				return new e.XMLHttpRequest();
			} catch {}
		};
		var en = {
			0: 200,
			1223: 204
		}, tn = x.ajaxSettings.xhr();
		p.cors = !!tn && "withCredentials" in tn, p.ajax = tn = !!tn, x.ajaxTransport(function(t) {
			var n, r;
			if (p.cors || tn && !t.crossDomain) return {
				send: function(i, a) {
					var o, s = t.xhr();
					if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (o in t.xhrFields) s[o] = t.xhrFields[o];
					for (o in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), !t.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(o, i[o]);
					n = function(e) {
						return function() {
							n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, e === "abort" ? s.abort() : e === "error" ? typeof s.status == "number" ? a(s.status, s.statusText) : a(0, "error") : a(en[s.status] || s.status, s.statusText, (s.responseType || "text") !== "text" || typeof s.responseText != "string" ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
						};
					}, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), s.onabort === void 0 ? s.onreadystatechange = function() {
						s.readyState === 4 && e.setTimeout(function() {
							n && r();
						});
					} : s.onabort = r, n = n("abort");
					try {
						s.send(t.hasContent && t.data || null);
					} catch (e) {
						if (n) throw e;
					}
				},
				abort: function() {
					n && n();
				}
			};
		}), x.ajaxPrefilter(function(e) {
			e.crossDomain && (e.contents.script = !1);
		}), x.ajaxSetup({
			accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
			contents: { script: /\b(?:java|ecma)script\b/ },
			converters: { "text script": function(e) {
				return x.globalEval(e), e;
			} }
		}), x.ajaxPrefilter("script", function(e) {
			e.cache === void 0 && (e.cache = !1), e.crossDomain && (e.type = "GET");
		}), x.ajaxTransport("script", function(e) {
			if (e.crossDomain || e.scriptAttrs) {
				var t, n;
				return {
					send: function(r, i) {
						t = x("<script>").attr(e.scriptAttrs || {}).prop({
							charset: e.scriptCharset,
							src: e.url
						}).on("load error", n = function(e) {
							t.remove(), n = null, e && i(e.type === "error" ? 404 : 200, e.type);
						}), g.head.appendChild(t[0]);
					},
					abort: function() {
						n && n();
					}
				};
			}
		});
		var nn = [], rn = /(=)\?(?=&|$)|\?\?/;
		x.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function() {
				var e = nn.pop() || x.expando + "_" + jt.guid++;
				return this[e] = !0, e;
			}
		}), x.ajaxPrefilter("json jsonp", function(t, n, r) {
			var i, a, o, s = t.jsonp !== !1 && (rn.test(t.url) ? "url" : typeof t.data == "string" && (t.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rn.test(t.data) && "data");
			if (s || t.dataTypes[0] === "jsonp") return i = t.jsonpCallback = m(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(rn, "$1" + i) : t.jsonp !== !1 && (t.url += (Mt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
				return o || x.error(i + " was not called"), o[0];
			}, t.dataTypes[0] = "json", a = e[i], e[i] = function() {
				o = arguments;
			}, r.always(function() {
				a === void 0 ? x(e).removeProp(i) : e[i] = a, t[i] && (t.jsonpCallback = n.jsonpCallback, nn.push(i)), o && m(a) && a(o[0]), o = a = void 0;
			}), "script";
		}), p.createHTMLDocument = (function() {
			var e = g.implementation.createHTMLDocument("").body;
			return e.innerHTML = "<form></form><form></form>", e.childNodes.length === 2;
		})(), x.parseHTML = function(e, t, n) {
			if (typeof e != "string") return [];
			typeof t == "boolean" && (n = t, t = !1);
			var r, i, a;
			return t || (p.createHTMLDocument ? (t = g.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = g.location.href, t.head.appendChild(r)) : t = g), i = O.exec(e), a = !n && [], i ? [t.createElement(i[1])] : (i = Oe([e], t, a), a && a.length && x(a).remove(), x.merge([], i.childNodes));
		}, x.fn.load = function(e, t, n) {
			var r, i, a, o = this, s = e.indexOf(" ");
			return s > -1 && (r = wt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && typeof t == "object" && (i = "POST"), o.length > 0 && x.ajax({
				url: e,
				type: i || "GET",
				dataType: "html",
				data: t
			}).done(function(e) {
				a = arguments, o.html(r ? x("<div>").append(x.parseHTML(e)).find(r) : e);
			}).always(n && function(e, t) {
				o.each(function() {
					n.apply(this, a || [
						e.responseText,
						t,
						e
					]);
				});
			}), this;
		}, x.expr.pseudos.animated = function(e) {
			return x.grep(x.timers, function(t) {
				return e === t.elem;
			}).length;
		}, x.offset = { setOffset: function(e, t, n) {
			var r, i, a, o, s, c, l, u = x.css(e, "position"), d = x(e), f = {};
			u === "static" && (e.style.position = "relative"), s = d.offset(), a = x.css(e, "top"), c = x.css(e, "left"), l = (u === "absolute" || u === "fixed") && (a + c).indexOf("auto") > -1, l ? (r = d.position(), o = r.top, i = r.left) : (o = parseFloat(a) || 0, i = parseFloat(c) || 0), m(t) && (t = t.call(e, n, x.extend({}, s))), t.top != null && (f.top = t.top - s.top + o), t.left != null && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : (typeof f.top == "number" && (f.top += "px"), typeof f.left == "number" && (f.left += "px"), d.css(f));
		} }, x.fn.extend({
			offset: function(e) {
				if (arguments.length) return e === void 0 ? this : this.each(function(t) {
					x.offset.setOffset(this, e, t);
				});
				var t, n, r = this[0];
				if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
					top: t.top + n.pageYOffset,
					left: t.left + n.pageXOffset
				}) : {
					top: 0,
					left: 0
				};
			},
			position: function() {
				if (this[0]) {
					var e, t, n, r = this[0], i = {
						top: 0,
						left: 0
					};
					if (x.css(r, "position") === "fixed") t = r.getBoundingClientRect();
					else {
						for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && x.css(e, "position") === "static";) e = e.parentNode;
						e && e !== r && e.nodeType === 1 && (i = x(e).offset(), i.top += x.css(e, "borderTopWidth", !0), i.left += x.css(e, "borderLeftWidth", !0));
					}
					return {
						top: t.top - i.top - x.css(r, "marginTop", !0),
						left: t.left - i.left - x.css(r, "marginLeft", !0)
					};
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for (var e = this.offsetParent; e && x.css(e, "position") === "static";) e = e.offsetParent;
					return e || xe;
				});
			}
		}), x.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function(e, t) {
			var n = t === "pageYOffset";
			x.fn[e] = function(r) {
				return le(this, function(e, r, i) {
					var a;
					if (h(e) ? a = e : e.nodeType === 9 && (a = e.defaultView), i === void 0) return a ? a[t] : e[r];
					a ? a.scrollTo(n ? a.pageXOffset : i, n ? i : a.pageYOffset) : e[r] = i;
				}, e, r, arguments.length);
			};
		}), x.each(["top", "left"], function(e, t) {
			x.cssHooks[t] = Xe(p.pixelPosition, function(e, n) {
				if (n) return n = Ye(e, t), Ke.test(n) ? x(e).position()[t] + "px" : n;
			});
		}), x.each({
			Height: "height",
			Width: "width"
		}, function(e, t) {
			x.each({
				padding: "inner" + e,
				content: t,
				"": "outer" + e
			}, function(n, r) {
				x.fn[r] = function(i, a) {
					var o = arguments.length && (n || typeof i != "boolean"), s = n || (i === !0 || a === !0 ? "margin" : "border");
					return le(this, function(t, n, i) {
						var a;
						return h(t) ? r.indexOf("outer") === 0 ? t["inner" + e] : t.document.documentElement["client" + e] : t.nodeType === 9 ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : i === void 0 ? x.css(t, n, s) : x.style(t, n, i, s);
					}, t, o ? i : void 0, o);
				};
			});
		}), x.each([
			"ajaxStart",
			"ajaxStop",
			"ajaxComplete",
			"ajaxError",
			"ajaxSuccess",
			"ajaxSend"
		], function(e, t) {
			x.fn[t] = function(e) {
				return this.on(t, e);
			};
		}), x.fn.extend({
			bind: function(e, t, n) {
				return this.on(e, null, t, n);
			},
			unbind: function(e, t) {
				return this.off(e, null, t);
			},
			delegate: function(e, t, n, r) {
				return this.on(t, e, n, r);
			},
			undelegate: function(e, t, n) {
				return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n);
			},
			hover: function(e, t) {
				return this.mouseenter(e).mouseleave(t || e);
			}
		}), x.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
			x.fn[t] = function(e, n) {
				return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
			};
		});
		var an = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
		x.proxy = function(e, t) {
			var n, r, a;
			if (typeof t == "string" && (n = e[t], t = e, e = n), m(e)) return r = i.call(arguments, 2), a = function() {
				return e.apply(t || this, r.concat(i.call(arguments)));
			}, a.guid = e.guid = e.guid || x.guid++, a;
		}, x.holdReady = function(e) {
			e ? x.readyWait++ : x.ready(!0);
		}, x.isArray = Array.isArray, x.parseJSON = JSON.parse, x.nodeName = D, x.isFunction = m, x.isWindow = h, x.camelCase = F, x.type = y, x.now = Date.now, x.isNumeric = function(e) {
			var t = x.type(e);
			return (t === "number" || t === "string") && !isNaN(e - parseFloat(e));
		}, x.trim = function(e) {
			return e == null ? "" : (e + "").replace(an, "");
		}, typeof define == "function" && define.amd && define("jquery", [], function() {
			return x;
		});
		var on = e.jQuery, sn = e.$;
		return x.noConflict = function(t) {
			return e.$ === x && (e.$ = sn), t && e.jQuery === x && (e.jQuery = on), x;
		}, t === void 0 && (e.jQuery = e.$ = x), x;
	});
}));
(/* @__PURE__ */ g(((e) => {
	var t = b();
	(function(n) {
		(t === void 0 || !t) && typeof define == "function" && define.amd ? define(["jquery"], function(e) {
			return n(e, document, window, navigator);
		}) : n((t === void 0 || !t) && typeof e == "object" ? b() : t, document, window, navigator);
	})(function(e, t, n, r, i) {
		var a = 0, o = (function() {
			var t = r.userAgent, n = /msie\s\d+/i, i;
			return t.search(n) > 0 && (i = n.exec(t).toString(), i = i.split(" ")[1], i < 9) ? (e("html").addClass("lt-ie9"), !0) : !1;
		})();
		Function.prototype.bind || (Function.prototype.bind = function(e) {
			var t = this, n = [].slice;
			if (typeof t != "function") throw TypeError();
			var r = n.call(arguments, 1), i = function() {
				if (this instanceof i) {
					var a = function() {};
					a.prototype = t.prototype;
					var o = new a(), s = t.apply(o, r.concat(n.call(arguments)));
					return Object(s) === s ? s : o;
				} else return t.apply(e, r.concat(n.call(arguments)));
			};
			return i;
		}), Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
			var n;
			if (this == null) throw TypeError("\"this\" is null or not defined");
			var r = Object(this), i = r.length >>> 0;
			if (i === 0) return -1;
			var a = +t || 0;
			if (Math.abs(a) === Infinity && (a = 0), a >= i) return -1;
			for (n = Math.max(a >= 0 ? a : i - Math.abs(a), 0); n < i;) {
				if (n in r && r[n] === e) return n;
				n++;
			}
			return -1;
		});
		var s = "<span class=\"irs\"><span class=\"irs-line\" tabindex=\"0\"></span><span class=\"irs-min\">0</span><span class=\"irs-max\">1</span><span class=\"irs-from\">0</span><span class=\"irs-to\">0</span><span class=\"irs-single\">0</span></span><span class=\"irs-grid\"></span>", c = "<span class=\"irs-bar irs-bar--single\"></span><span class=\"irs-shadow shadow-single\"></span><span class=\"irs-handle single\"><i></i><i></i><i></i></span>", l = "<span class=\"irs-bar\"></span><span class=\"irs-shadow shadow-from\"></span><span class=\"irs-shadow shadow-to\"></span><span class=\"irs-handle from\"><i></i><i></i><i></i></span><span class=\"irs-handle to\"><i></i><i></i><i></i></span>", u = "<span class=\"irs-disable-mask\"></span>", d = function(r, a, o) {
			this.VERSION = "2.3.1", this.input = r, this.plugin_count = o, this.current_plugin = 0, this.calc_count = 0, this.update_tm = 0, this.old_from = 0, this.old_to = 0, this.old_min_interval = null, this.raf_id = null, this.dragging = !1, this.force_redraw = !1, this.no_diapason = !1, this.has_tab_index = !0, this.is_key = !1, this.is_update = !1, this.is_start = !0, this.is_finish = !1, this.is_active = !1, this.is_resize = !1, this.is_click = !1, a ||= {}, this.$cache = {
				win: e(n),
				body: e(t.body),
				input: e(r),
				cont: null,
				rs: null,
				min: null,
				max: null,
				from: null,
				to: null,
				single: null,
				bar: null,
				line: null,
				s_single: null,
				s_from: null,
				s_to: null,
				shad_single: null,
				shad_from: null,
				shad_to: null,
				edge: null,
				grid: null,
				grid_labels: []
			}, this.coords = {
				x_gap: 0,
				x_pointer: 0,
				w_rs: 0,
				w_rs_old: 0,
				w_handle: 0,
				p_gap: 0,
				p_gap_left: 0,
				p_gap_right: 0,
				p_step: 0,
				p_pointer: 0,
				p_handle: 0,
				p_single_fake: 0,
				p_single_real: 0,
				p_from_fake: 0,
				p_from_real: 0,
				p_to_fake: 0,
				p_to_real: 0,
				p_bar_x: 0,
				p_bar_w: 0,
				grid_gap: 0,
				big_num: 0,
				big: [],
				big_w: [],
				big_p: [],
				big_x: []
			}, this.labels = {
				w_min: 0,
				w_max: 0,
				w_from: 0,
				w_to: 0,
				w_single: 0,
				p_min: 0,
				p_max: 0,
				p_from_fake: 0,
				p_from_left: 0,
				p_to_fake: 0,
				p_to_left: 0,
				p_single_fake: 0,
				p_single_left: 0
			};
			var s = this.$cache.input, c = s.prop("value"), l = {
				skin: "flat",
				type: "single",
				min: 10,
				max: 100,
				from: null,
				to: null,
				step: 1,
				min_interval: 0,
				max_interval: 0,
				drag_interval: !1,
				values: [],
				p_values: [],
				from_fixed: !1,
				from_min: null,
				from_max: null,
				from_shadow: !1,
				to_fixed: !1,
				to_min: null,
				to_max: null,
				to_shadow: !1,
				prettify_enabled: !0,
				prettify_separator: " ",
				prettify: null,
				force_edges: !1,
				keyboard: !0,
				grid: !1,
				grid_margin: !0,
				grid_num: 4,
				grid_snap: !1,
				hide_min_max: !1,
				hide_from_to: !1,
				prefix: "",
				postfix: "",
				max_postfix: "",
				decorate_both: !0,
				values_separator: " — ",
				input_values_separator: ";",
				disable: !1,
				block: !1,
				extra_classes: "",
				scope: null,
				onStart: null,
				onChange: null,
				onFinish: null,
				onUpdate: null
			}, u, d;
			for (d in s[0].nodeName !== "INPUT" && console && console.warn && console.warn("Base element should be <input>!", s[0]), u = {
				skin: s.data("skin"),
				type: s.data("type"),
				min: s.data("min"),
				max: s.data("max"),
				from: s.data("from"),
				to: s.data("to"),
				step: s.data("step"),
				min_interval: s.data("minInterval"),
				max_interval: s.data("maxInterval"),
				drag_interval: s.data("dragInterval"),
				values: s.data("values"),
				from_fixed: s.data("fromFixed"),
				from_min: s.data("fromMin"),
				from_max: s.data("fromMax"),
				from_shadow: s.data("fromShadow"),
				to_fixed: s.data("toFixed"),
				to_min: s.data("toMin"),
				to_max: s.data("toMax"),
				to_shadow: s.data("toShadow"),
				prettify_enabled: s.data("prettifyEnabled"),
				prettify_separator: s.data("prettifySeparator"),
				force_edges: s.data("forceEdges"),
				keyboard: s.data("keyboard"),
				grid: s.data("grid"),
				grid_margin: s.data("gridMargin"),
				grid_num: s.data("gridNum"),
				grid_snap: s.data("gridSnap"),
				hide_min_max: s.data("hideMinMax"),
				hide_from_to: s.data("hideFromTo"),
				prefix: s.data("prefix"),
				postfix: s.data("postfix"),
				max_postfix: s.data("maxPostfix"),
				decorate_both: s.data("decorateBoth"),
				values_separator: s.data("valuesSeparator"),
				input_values_separator: s.data("inputValuesSeparator"),
				disable: s.data("disable"),
				block: s.data("block"),
				extra_classes: s.data("extraClasses")
			}, u.values = u.values && u.values.split(","), u) u.hasOwnProperty(d) && (u[d] === i || u[d] === "") && delete u[d];
			c !== i && c !== "" && (c = c.split(u.input_values_separator || a.input_values_separator || ";"), c[0] && c[0] == +c[0] && (c[0] = +c[0]), c[1] && c[1] == +c[1] && (c[1] = +c[1]), a && a.values && a.values.length ? (l.from = c[0] && a.values.indexOf(c[0]), l.to = c[1] && a.values.indexOf(c[1])) : (l.from = c[0] && +c[0], l.to = c[1] && +c[1])), e.extend(l, a), e.extend(l, u), this.options = l, this.update_check = {}, this.validate(), this.result = {
				input: this.$cache.input,
				slider: null,
				min: this.options.min,
				max: this.options.max,
				from: this.options.from,
				from_percent: 0,
				from_value: null,
				to: this.options.to,
				to_percent: 0,
				to_value: null
			}, this.init();
		};
		d.prototype = {
			init: function(e) {
				this.no_diapason = !1, this.coords.p_step = this.convertToPercent(this.options.step, !0), this.target = "base", this.toggleInput(), this.append(), this.setMinMax(), e ? (this.force_redraw = !0, this.calc(!0), this.callOnUpdate()) : (this.force_redraw = !0, this.calc(!0), this.callOnStart()), this.updateScene();
			},
			append: function() {
				var e = "<span class=\"irs irs--" + this.options.skin + " js-irs-" + this.plugin_count + " " + this.options.extra_classes + "\"></span>";
				this.$cache.input.before(e), this.$cache.input.prop("readonly", !0), this.$cache.cont = this.$cache.input.prev(), this.result.slider = this.$cache.cont, this.$cache.cont.html(s), this.$cache.rs = this.$cache.cont.find(".irs"), this.$cache.min = this.$cache.cont.find(".irs-min"), this.$cache.max = this.$cache.cont.find(".irs-max"), this.$cache.from = this.$cache.cont.find(".irs-from"), this.$cache.to = this.$cache.cont.find(".irs-to"), this.$cache.single = this.$cache.cont.find(".irs-single"), this.$cache.line = this.$cache.cont.find(".irs-line"), this.$cache.grid = this.$cache.cont.find(".irs-grid"), this.options.type === "single" ? (this.$cache.cont.append(c), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.edge = this.$cache.cont.find(".irs-bar-edge"), this.$cache.s_single = this.$cache.cont.find(".single"), this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.shad_single = this.$cache.cont.find(".shadow-single")) : (this.$cache.cont.append(l), this.$cache.bar = this.$cache.cont.find(".irs-bar"), this.$cache.s_from = this.$cache.cont.find(".from"), this.$cache.s_to = this.$cache.cont.find(".to"), this.$cache.shad_from = this.$cache.cont.find(".shadow-from"), this.$cache.shad_to = this.$cache.cont.find(".shadow-to"), this.setTopHandler()), this.options.hide_from_to && (this.$cache.from[0].style.display = "none", this.$cache.to[0].style.display = "none", this.$cache.single[0].style.display = "none"), this.appendGrid(), this.options.disable ? (this.appendDisableMask(), this.$cache.input[0].disabled = !0) : (this.$cache.input[0].disabled = !1, this.removeDisableMask(), this.bindEvents()), this.options.disable || (this.options.block ? this.appendDisableMask() : this.removeDisableMask()), this.options.drag_interval && (this.$cache.bar[0].style.cursor = "ew-resize");
			},
			setTopHandler: function() {
				var e = this.options.min, t = this.options.max, n = this.options.from, r = this.options.to;
				n > e && r === t ? this.$cache.s_from.addClass("type_last") : r < t && this.$cache.s_to.addClass("type_last");
			},
			changeLevel: function(e) {
				switch (e) {
					case "single":
						this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_single_fake), this.$cache.s_single.addClass("state_hover");
						break;
					case "from":
						this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.$cache.s_from.addClass("state_hover"), this.$cache.s_from.addClass("type_last"), this.$cache.s_to.removeClass("type_last");
						break;
					case "to":
						this.coords.p_gap = this.toFixed(this.coords.p_pointer - this.coords.p_to_fake), this.$cache.s_to.addClass("state_hover"), this.$cache.s_to.addClass("type_last"), this.$cache.s_from.removeClass("type_last");
						break;
					case "both":
						this.coords.p_gap_left = this.toFixed(this.coords.p_pointer - this.coords.p_from_fake), this.coords.p_gap_right = this.toFixed(this.coords.p_to_fake - this.coords.p_pointer), this.$cache.s_to.removeClass("type_last"), this.$cache.s_from.removeClass("type_last");
						break;
				}
			},
			appendDisableMask: function() {
				this.$cache.cont.append(u), this.$cache.cont.addClass("irs-disabled");
			},
			removeDisableMask: function() {
				this.$cache.cont.remove(".irs-disable-mask"), this.$cache.cont.removeClass("irs-disabled");
			},
			remove: function() {
				this.$cache.cont.remove(), this.$cache.cont = null, this.$cache.line.off("keydown.irs_" + this.plugin_count), this.$cache.body.off("touchmove.irs_" + this.plugin_count), this.$cache.body.off("mousemove.irs_" + this.plugin_count), this.$cache.win.off("touchend.irs_" + this.plugin_count), this.$cache.win.off("mouseup.irs_" + this.plugin_count), o && (this.$cache.body.off("mouseup.irs_" + this.plugin_count), this.$cache.body.off("mouseleave.irs_" + this.plugin_count)), this.$cache.grid_labels = [], this.coords.big = [], this.coords.big_w = [], this.coords.big_p = [], this.coords.big_x = [], cancelAnimationFrame(this.raf_id);
			},
			bindEvents: function() {
				this.no_diapason || (this.$cache.body.on("touchmove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.body.on("mousemove.irs_" + this.plugin_count, this.pointerMove.bind(this)), this.$cache.win.on("touchend.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.win.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.line.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.line.on("focus.irs_" + this.plugin_count, this.pointerFocus.bind(this)), this.options.drag_interval && this.options.type === "double" ? (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "both")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "both"))) : (this.$cache.bar.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.bar.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), this.options.type === "single" ? (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.shad_single.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.s_single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "single")), this.$cache.edge.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_single.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))) : (this.$cache.single.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.single.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, null)), this.$cache.from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("touchstart.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("touchstart.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.s_from.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "from")), this.$cache.to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.s_to.on("mousedown.irs_" + this.plugin_count, this.pointerDown.bind(this, "to")), this.$cache.shad_from.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click")), this.$cache.shad_to.on("mousedown.irs_" + this.plugin_count, this.pointerClick.bind(this, "click"))), this.options.keyboard && this.$cache.line.on("keydown.irs_" + this.plugin_count, this.key.bind(this, "keyboard")), o && (this.$cache.body.on("mouseup.irs_" + this.plugin_count, this.pointerUp.bind(this)), this.$cache.body.on("mouseleave.irs_" + this.plugin_count, this.pointerUp.bind(this))));
			},
			pointerFocus: function(e) {
				if (!this.target) {
					var t, n = this.options.type === "single" ? this.$cache.single : this.$cache.from;
					t = n.offset().left, t += n.width() / 2 - 1, this.pointerClick("single", {
						preventDefault: function() {},
						pageX: t
					});
				}
			},
			pointerMove: function(e) {
				if (this.dragging) {
					var t = e.pageX || e.originalEvent.touches && e.originalEvent.touches[0].pageX;
					this.coords.x_pointer = t - this.coords.x_gap, this.calc();
				}
			},
			pointerUp: function(t) {
				if (this.current_plugin === this.plugin_count) {
					if (this.is_active) this.is_active = !1;
					else return;
					this.$cache.cont.find(".state_hover").removeClass("state_hover"), this.force_redraw = !0, o && e("*").prop("unselectable", !1), this.updateScene(), this.restoreOriginalMinInterval(), (e.contains(this.$cache.cont[0], t.target) || this.dragging) && this.callOnFinish(), this.dragging = !1;
				}
			},
			pointerDown: function(t, n) {
				n.preventDefault();
				var r = n.pageX || n.originalEvent.touches && n.originalEvent.touches[0].pageX;
				n.button !== 2 && (t === "both" && this.setTempMinInterval(), t ||= this.target || "from", this.current_plugin = this.plugin_count, this.target = t, this.is_active = !0, this.dragging = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = r - this.coords.x_gap, this.calcPointerPercent(), this.changeLevel(t), o && e("*").prop("unselectable", !0), this.$cache.line.trigger("focus"), this.updateScene());
			},
			pointerClick: function(e, t) {
				t.preventDefault();
				var n = t.pageX || t.originalEvent.touches && t.originalEvent.touches[0].pageX;
				t.button !== 2 && (this.current_plugin = this.plugin_count, this.target = e, this.is_click = !0, this.coords.x_gap = this.$cache.rs.offset().left, this.coords.x_pointer = +(n - this.coords.x_gap).toFixed(), this.force_redraw = !0, this.calc(), this.$cache.line.trigger("focus"));
			},
			key: function(e, t) {
				if (!(this.current_plugin !== this.plugin_count || t.altKey || t.ctrlKey || t.shiftKey || t.metaKey)) {
					switch (t.which) {
						case 83:
						case 65:
						case 40:
						case 37:
							t.preventDefault(), this.moveByKey(!1);
							break;
						case 87:
						case 68:
						case 38:
						case 39:
							t.preventDefault(), this.moveByKey(!0);
							break;
					}
					return !0;
				}
			},
			moveByKey: function(e) {
				var t = this.coords.p_pointer, n = (this.options.max - this.options.min) / 100;
				n = this.options.step / n, e ? t += n : t -= n, this.coords.x_pointer = this.toFixed(this.coords.w_rs / 100 * t), this.is_key = !0, this.calc();
			},
			setMinMax: function() {
				if (this.options) {
					if (this.options.hide_min_max) {
						this.$cache.min[0].style.display = "none", this.$cache.max[0].style.display = "none";
						return;
					}
					if (this.options.values.length) this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])), this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]));
					else {
						var e = this._prettify(this.options.min), t = this._prettify(this.options.max);
						this.result.min_pretty = e, this.result.max_pretty = t, this.$cache.min.html(this.decorate(e, this.options.min)), this.$cache.max.html(this.decorate(t, this.options.max));
					}
					this.labels.w_min = this.$cache.min.outerWidth(!1), this.labels.w_max = this.$cache.max.outerWidth(!1);
				}
			},
			setTempMinInterval: function() {
				var e = this.result.to - this.result.from;
				this.old_min_interval === null && (this.old_min_interval = this.options.min_interval), this.options.min_interval = e;
			},
			restoreOriginalMinInterval: function() {
				this.old_min_interval !== null && (this.options.min_interval = this.old_min_interval, this.old_min_interval = null);
			},
			calc: function(e) {
				if (this.options && (this.calc_count++, (this.calc_count === 10 || e) && (this.calc_count = 0, this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.calcHandlePercent()), this.coords.w_rs)) {
					this.calcPointerPercent();
					var t = this.getHandleX();
					switch (this.target === "both" && (this.coords.p_gap = 0, t = this.getHandleX()), this.target === "click" && (this.coords.p_gap = this.coords.p_handle / 2, t = this.getHandleX(), this.options.drag_interval ? this.target = "both_one" : this.target = this.chooseHandle(t)), this.target) {
						case "base":
							var n = (this.options.max - this.options.min) / 100, r = (this.result.from - this.options.min) / n, i = (this.result.to - this.options.min) / n;
							this.coords.p_single_real = this.toFixed(r), this.coords.p_from_real = this.toFixed(r), this.coords.p_to_real = this.toFixed(i), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real), this.target = null;
							break;
						case "single":
							if (this.options.from_fixed) break;
							this.coords.p_single_real = this.convertToRealPercent(t), this.coords.p_single_real = this.calcWithStep(this.coords.p_single_real), this.coords.p_single_real = this.checkDiapason(this.coords.p_single_real, this.options.from_min, this.options.from_max), this.coords.p_single_fake = this.convertToFakePercent(this.coords.p_single_real);
							break;
						case "from":
							if (this.options.from_fixed) break;
							this.coords.p_from_real = this.convertToRealPercent(t), this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real > this.coords.p_to_real && (this.coords.p_from_real = this.coords.p_to_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_real = this.checkMaxInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real);
							break;
						case "to":
							if (this.options.to_fixed) break;
							this.coords.p_to_real = this.convertToRealPercent(t), this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real < this.coords.p_from_real && (this.coords.p_to_real = this.coords.p_from_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_real = this.checkMaxInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
							break;
						case "both":
							if (this.options.from_fixed || this.options.to_fixed) break;
							t = this.toFixed(t + this.coords.p_handle * .001), this.coords.p_from_real = this.convertToRealPercent(t) - this.coords.p_gap_left, this.coords.p_from_real = this.calcWithStep(this.coords.p_from_real), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_real = this.checkMinInterval(this.coords.p_from_real, this.coords.p_to_real, "from"), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.convertToRealPercent(t) + this.coords.p_gap_right, this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_real = this.checkMinInterval(this.coords.p_to_real, this.coords.p_from_real, "to"), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
							break;
						case "both_one":
							if (this.options.from_fixed || this.options.to_fixed) break;
							var a = this.convertToRealPercent(t), o = this.result.from_percent, s = this.result.to_percent - o, c = s / 2, l = a - c, u = a + c;
							l < 0 && (l = 0, u = l + s), u > 100 && (u = 100, l = u - s), this.coords.p_from_real = this.calcWithStep(l), this.coords.p_from_real = this.checkDiapason(this.coords.p_from_real, this.options.from_min, this.options.from_max), this.coords.p_from_fake = this.convertToFakePercent(this.coords.p_from_real), this.coords.p_to_real = this.calcWithStep(u), this.coords.p_to_real = this.checkDiapason(this.coords.p_to_real, this.options.to_min, this.options.to_max), this.coords.p_to_fake = this.convertToFakePercent(this.coords.p_to_real);
							break;
					}
					this.options.type === "single" ? (this.coords.p_bar_x = this.coords.p_handle / 2, this.coords.p_bar_w = this.coords.p_single_fake, this.result.from_percent = this.coords.p_single_real, this.result.from = this.convertToValue(this.coords.p_single_real), this.result.from_pretty = this._prettify(this.result.from), this.options.values.length && (this.result.from_value = this.options.values[this.result.from])) : (this.coords.p_bar_x = this.toFixed(this.coords.p_from_fake + this.coords.p_handle / 2), this.coords.p_bar_w = this.toFixed(this.coords.p_to_fake - this.coords.p_from_fake), this.result.from_percent = this.coords.p_from_real, this.result.from = this.convertToValue(this.coords.p_from_real), this.result.from_pretty = this._prettify(this.result.from), this.result.to_percent = this.coords.p_to_real, this.result.to = this.convertToValue(this.coords.p_to_real), this.result.to_pretty = this._prettify(this.result.to), this.options.values.length && (this.result.from_value = this.options.values[this.result.from], this.result.to_value = this.options.values[this.result.to])), this.calcMinMax(), this.calcLabels();
				}
			},
			calcPointerPercent: function() {
				if (!this.coords.w_rs) {
					this.coords.p_pointer = 0;
					return;
				}
				this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer) ? this.coords.x_pointer = 0 : this.coords.x_pointer > this.coords.w_rs && (this.coords.x_pointer = this.coords.w_rs), this.coords.p_pointer = this.toFixed(this.coords.x_pointer / this.coords.w_rs * 100);
			},
			convertToRealPercent: function(e) {
				return e / (100 - this.coords.p_handle) * 100;
			},
			convertToFakePercent: function(e) {
				var t = 100 - this.coords.p_handle;
				return e / 100 * t;
			},
			getHandleX: function() {
				var e = 100 - this.coords.p_handle, t = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
				return t < 0 ? t = 0 : t > e && (t = e), t;
			},
			calcHandlePercent: function() {
				this.options.type === "single" ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100);
			},
			chooseHandle: function(e) {
				return this.options.type === "single" ? "single" : e >= this.coords.p_from_real + (this.coords.p_to_real - this.coords.p_from_real) / 2 ? this.options.to_fixed ? "from" : "to" : this.options.from_fixed ? "to" : "from";
			},
			calcMinMax: function() {
				this.coords.w_rs && (this.labels.p_min = this.labels.w_min / this.coords.w_rs * 100, this.labels.p_max = this.labels.w_max / this.coords.w_rs * 100);
			},
			calcLabels: function() {
				!this.coords.w_rs || this.options.hide_from_to || (this.options.type === "single" ? (this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = this.coords.p_single_fake + this.coords.p_handle / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake)) : (this.labels.w_from = this.$cache.from.outerWidth(!1), this.labels.p_from_fake = this.labels.w_from / this.coords.w_rs * 100, this.labels.p_from_left = this.coords.p_from_fake + this.coords.p_handle / 2 - this.labels.p_from_fake / 2, this.labels.p_from_left = this.toFixed(this.labels.p_from_left), this.labels.p_from_left = this.checkEdges(this.labels.p_from_left, this.labels.p_from_fake), this.labels.w_to = this.$cache.to.outerWidth(!1), this.labels.p_to_fake = this.labels.w_to / this.coords.w_rs * 100, this.labels.p_to_left = this.coords.p_to_fake + this.coords.p_handle / 2 - this.labels.p_to_fake / 2, this.labels.p_to_left = this.toFixed(this.labels.p_to_left), this.labels.p_to_left = this.checkEdges(this.labels.p_to_left, this.labels.p_to_fake), this.labels.w_single = this.$cache.single.outerWidth(!1), this.labels.p_single_fake = this.labels.w_single / this.coords.w_rs * 100, this.labels.p_single_left = (this.labels.p_from_left + this.labels.p_to_left + this.labels.p_to_fake) / 2 - this.labels.p_single_fake / 2, this.labels.p_single_left = this.toFixed(this.labels.p_single_left), this.labels.p_single_left = this.checkEdges(this.labels.p_single_left, this.labels.p_single_fake)));
			},
			updateScene: function() {
				this.raf_id &&= (cancelAnimationFrame(this.raf_id), null), clearTimeout(this.update_tm), this.update_tm = null, this.options && (this.drawHandles(), this.is_active ? this.raf_id = requestAnimationFrame(this.updateScene.bind(this)) : this.update_tm = setTimeout(this.updateScene.bind(this), 300));
			},
			drawHandles: function() {
				this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.coords.w_rs !== this.coords.w_rs_old && (this.target = "base", this.is_resize = !0), (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) && (this.setMinMax(), this.calc(!0), this.drawLabels(), this.options.grid && (this.calcGridMargin(), this.calcGridLabels()), this.force_redraw = !0, this.coords.w_rs_old = this.coords.w_rs, this.drawShadow()), this.coords.w_rs && (!this.dragging && !this.force_redraw && !this.is_key || ((this.old_from !== this.result.from || this.old_to !== this.result.to || this.force_redraw || this.is_key) && (this.drawLabels(), this.$cache.bar[0].style.left = this.coords.p_bar_x + "%", this.$cache.bar[0].style.width = this.coords.p_bar_w + "%", this.options.type === "single" ? (this.$cache.bar[0].style.left = 0, this.$cache.bar[0].style.width = this.coords.p_bar_w + this.coords.p_bar_x + "%", this.$cache.s_single[0].style.left = this.coords.p_single_fake + "%", this.$cache.single[0].style.left = this.labels.p_single_left + "%") : (this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%", this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%", (this.old_from !== this.result.from || this.force_redraw) && (this.$cache.from[0].style.left = this.labels.p_from_left + "%"), (this.old_to !== this.result.to || this.force_redraw) && (this.$cache.to[0].style.left = this.labels.p_to_left + "%"), this.$cache.single[0].style.left = this.labels.p_single_left + "%"), this.writeToInput(), (this.old_from !== this.result.from || this.old_to !== this.result.to) && !this.is_start && (this.$cache.input.trigger("change"), this.$cache.input.trigger("input")), this.old_from = this.result.from, this.old_to = this.result.to, !this.is_resize && !this.is_update && !this.is_start && !this.is_finish && this.callOnChange(), (this.is_key || this.is_click) && (this.is_key = !1, this.is_click = !1, this.callOnFinish()), this.is_update = !1, this.is_resize = !1, this.is_finish = !1), this.is_start = !1, this.is_key = !1, this.is_click = !1, this.force_redraw = !1)));
			},
			drawLabels: function() {
				if (this.options) {
					var e = this.options.values.length, t = this.options.p_values, n, r, i, a, o;
					if (!this.options.hide_from_to) if (this.options.type === "single") e ? (n = this.decorate(t[this.result.from]), this.$cache.single.html(n)) : (a = this._prettify(this.result.from), n = this.decorate(a, this.result.from), this.$cache.single.html(n)), this.calcLabels(), this.labels.p_single_left < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", this.labels.p_single_left + this.labels.p_single_fake > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible";
					else {
						e ? (this.options.decorate_both ? (n = this.decorate(t[this.result.from]), n += this.options.values_separator, n += this.decorate(t[this.result.to])) : n = this.decorate(t[this.result.from] + this.options.values_separator + t[this.result.to]), r = this.decorate(t[this.result.from]), i = this.decorate(t[this.result.to]), this.$cache.single.html(n), this.$cache.from.html(r), this.$cache.to.html(i)) : (a = this._prettify(this.result.from), o = this._prettify(this.result.to), this.options.decorate_both ? (n = this.decorate(a, this.result.from), n += this.options.values_separator, n += this.decorate(o, this.result.to)) : n = this.decorate(a + this.options.values_separator + o, this.result.to), r = this.decorate(a, this.result.from), i = this.decorate(o, this.result.to), this.$cache.single.html(n), this.$cache.from.html(r), this.$cache.to.html(i)), this.calcLabels();
						var s = Math.min(this.labels.p_single_left, this.labels.p_from_left), c = this.labels.p_single_left + this.labels.p_single_fake, l = this.labels.p_to_left + this.labels.p_to_fake, u = Math.max(c, l);
						this.labels.p_from_left + this.labels.p_from_fake >= this.labels.p_to_left ? (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", this.result.from === this.result.to ? (this.target === "from" ? this.$cache.from[0].style.visibility = "visible" : this.target === "to" ? this.$cache.to[0].style.visibility = "visible" : this.target || (this.$cache.from[0].style.visibility = "visible"), this.$cache.single[0].style.visibility = "hidden", u = l) : (this.$cache.from[0].style.visibility = "hidden", this.$cache.to[0].style.visibility = "hidden", this.$cache.single[0].style.visibility = "visible", u = Math.max(c, l))) : (this.$cache.from[0].style.visibility = "visible", this.$cache.to[0].style.visibility = "visible", this.$cache.single[0].style.visibility = "hidden"), s < this.labels.p_min + 1 ? this.$cache.min[0].style.visibility = "hidden" : this.$cache.min[0].style.visibility = "visible", u > 100 - this.labels.p_max - 1 ? this.$cache.max[0].style.visibility = "hidden" : this.$cache.max[0].style.visibility = "visible";
					}
				}
			},
			drawShadow: function() {
				var e = this.options, t = this.$cache, n = typeof e.from_min == "number" && !isNaN(e.from_min), r = typeof e.from_max == "number" && !isNaN(e.from_max), i = typeof e.to_min == "number" && !isNaN(e.to_min), a = typeof e.to_max == "number" && !isNaN(e.to_max), o, s, c, l;
				e.type === "single" ? e.from_shadow && (n || r) ? (o = this.convertToPercent(n ? e.from_min : e.min), s = this.convertToPercent(r ? e.from_max : e.max) - o, o = this.toFixed(o - this.coords.p_handle / 100 * o), s = this.toFixed(s - this.coords.p_handle / 100 * s), o += this.coords.p_handle / 2, t.shad_single[0].style.display = "block", t.shad_single[0].style.left = o + "%", t.shad_single[0].style.width = s + "%") : t.shad_single[0].style.display = "none" : (e.from_shadow && (n || r) ? (o = this.convertToPercent(n ? e.from_min : e.min), s = this.convertToPercent(r ? e.from_max : e.max) - o, o = this.toFixed(o - this.coords.p_handle / 100 * o), s = this.toFixed(s - this.coords.p_handle / 100 * s), o += this.coords.p_handle / 2, t.shad_from[0].style.display = "block", t.shad_from[0].style.left = o + "%", t.shad_from[0].style.width = s + "%") : t.shad_from[0].style.display = "none", e.to_shadow && (i || a) ? (c = this.convertToPercent(i ? e.to_min : e.min), l = this.convertToPercent(a ? e.to_max : e.max) - c, c = this.toFixed(c - this.coords.p_handle / 100 * c), l = this.toFixed(l - this.coords.p_handle / 100 * l), c += this.coords.p_handle / 2, t.shad_to[0].style.display = "block", t.shad_to[0].style.left = c + "%", t.shad_to[0].style.width = l + "%") : t.shad_to[0].style.display = "none");
			},
			writeToInput: function() {
				this.options.type === "single" ? (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value) : this.$cache.input.prop("value", this.result.from), this.$cache.input.data("from", this.result.from)) : (this.options.values.length ? this.$cache.input.prop("value", this.result.from_value + this.options.input_values_separator + this.result.to_value) : this.$cache.input.prop("value", this.result.from + this.options.input_values_separator + this.result.to), this.$cache.input.data("from", this.result.from), this.$cache.input.data("to", this.result.to));
			},
			callOnStart: function() {
				this.writeToInput(), this.options.onStart && typeof this.options.onStart == "function" && (this.options.scope ? this.options.onStart.call(this.options.scope, this.result) : this.options.onStart(this.result));
			},
			callOnChange: function() {
				this.writeToInput(), this.options.onChange && typeof this.options.onChange == "function" && (this.options.scope ? this.options.onChange.call(this.options.scope, this.result) : this.options.onChange(this.result));
			},
			callOnFinish: function() {
				this.writeToInput(), this.options.onFinish && typeof this.options.onFinish == "function" && (this.options.scope ? this.options.onFinish.call(this.options.scope, this.result) : this.options.onFinish(this.result));
			},
			callOnUpdate: function() {
				this.writeToInput(), this.options.onUpdate && typeof this.options.onUpdate == "function" && (this.options.scope ? this.options.onUpdate.call(this.options.scope, this.result) : this.options.onUpdate(this.result));
			},
			toggleInput: function() {
				this.$cache.input.toggleClass("irs-hidden-input"), this.has_tab_index ? this.$cache.input.prop("tabindex", -1) : this.$cache.input.removeProp("tabindex"), this.has_tab_index = !this.has_tab_index;
			},
			convertToPercent: function(e, t) {
				var n = this.options.max - this.options.min, r = n / 100, i, a;
				return n ? (i = t ? e : e - this.options.min, a = i / r, this.toFixed(a)) : (this.no_diapason = !0, 0);
			},
			convertToValue: function(e) {
				var t = this.options.min, n = this.options.max, r = t.toString().split(".")[1], i = n.toString().split(".")[1], a, o, s = 0, c = 0;
				if (e === 0) return this.options.min;
				if (e === 100) return this.options.max;
				r && (a = r.length, s = a), i && (o = i.length, s = o), a && o && (s = a >= o ? a : o), t < 0 && (c = Math.abs(t), t = +(t + c).toFixed(s), n = +(n + c).toFixed(s));
				var l = (n - t) / 100 * e + t, u = this.options.step.toString().split(".")[1], d;
				return u ? l = +l.toFixed(u.length) : (l /= this.options.step, l *= this.options.step, l = +l.toFixed(0)), c && (l -= c), d = u ? +l.toFixed(u.length) : this.toFixed(l), d < this.options.min ? d = this.options.min : d > this.options.max && (d = this.options.max), d;
			},
			calcWithStep: function(e) {
				var t = Math.round(e / this.coords.p_step) * this.coords.p_step;
				return t > 100 && (t = 100), e === 100 && (t = 100), this.toFixed(t);
			},
			checkMinInterval: function(e, t, n) {
				var r = this.options, i, a;
				return r.min_interval ? (i = this.convertToValue(e), a = this.convertToValue(t), n === "from" ? a - i < r.min_interval && (i = a - r.min_interval) : i - a < r.min_interval && (i = a + r.min_interval), this.convertToPercent(i)) : e;
			},
			checkMaxInterval: function(e, t, n) {
				var r = this.options, i, a;
				return r.max_interval ? (i = this.convertToValue(e), a = this.convertToValue(t), n === "from" ? a - i > r.max_interval && (i = a - r.max_interval) : i - a > r.max_interval && (i = a + r.max_interval), this.convertToPercent(i)) : e;
			},
			checkDiapason: function(e, t, n) {
				var r = this.convertToValue(e), i = this.options;
				return typeof t != "number" && (t = i.min), typeof n != "number" && (n = i.max), r < t && (r = t), r > n && (r = n), this.convertToPercent(r);
			},
			toFixed: function(e) {
				return e = e.toFixed(20), +e;
			},
			_prettify: function(e) {
				return this.options.prettify_enabled ? this.options.prettify && typeof this.options.prettify == "function" ? this.options.prettify(e) : this.prettify(e) : e;
			},
			prettify: function(e) {
				return e.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + this.options.prettify_separator);
			},
			checkEdges: function(e, t) {
				return this.options.force_edges && (e < 0 ? e = 0 : e > 100 - t && (e = 100 - t)), this.toFixed(e);
			},
			validate: function() {
				var e = this.options, t = this.result, n = e.values, r = n.length, i, a;
				if (typeof e.min == "string" && (e.min = +e.min), typeof e.max == "string" && (e.max = +e.max), typeof e.from == "string" && (e.from = +e.from), typeof e.to == "string" && (e.to = +e.to), typeof e.step == "string" && (e.step = +e.step), typeof e.from_min == "string" && (e.from_min = +e.from_min), typeof e.from_max == "string" && (e.from_max = +e.from_max), typeof e.to_min == "string" && (e.to_min = +e.to_min), typeof e.to_max == "string" && (e.to_max = +e.to_max), typeof e.grid_num == "string" && (e.grid_num = +e.grid_num), e.max < e.min && (e.max = e.min), r) for (e.p_values = [], e.min = 0, e.max = r - 1, e.step = 1, e.grid_num = e.max, e.grid_snap = !0, a = 0; a < r; a++) i = +n[a], isNaN(i) ? i = n[a] : (n[a] = i, i = this._prettify(i)), e.p_values.push(i);
				(typeof e.from != "number" || isNaN(e.from)) && (e.from = e.min), (typeof e.to != "number" || isNaN(e.to)) && (e.to = e.max), e.type === "single" ? (e.from < e.min && (e.from = e.min), e.from > e.max && (e.from = e.max)) : (e.from < e.min && (e.from = e.min), e.from > e.max && (e.from = e.max), e.to < e.min && (e.to = e.min), e.to > e.max && (e.to = e.max), this.update_check.from && (this.update_check.from !== e.from && e.from > e.to && (e.from = e.to), this.update_check.to !== e.to && e.to < e.from && (e.to = e.from)), e.from > e.to && (e.from = e.to), e.to < e.from && (e.to = e.from)), (typeof e.step != "number" || isNaN(e.step) || !e.step || e.step < 0) && (e.step = 1), typeof e.from_min == "number" && e.from < e.from_min && (e.from = e.from_min), typeof e.from_max == "number" && e.from > e.from_max && (e.from = e.from_max), typeof e.to_min == "number" && e.to < e.to_min && (e.to = e.to_min), typeof e.to_max == "number" && e.from > e.to_max && (e.to = e.to_max), t && (t.min !== e.min && (t.min = e.min), t.max !== e.max && (t.max = e.max), (t.from < t.min || t.from > t.max) && (t.from = e.from), (t.to < t.min || t.to > t.max) && (t.to = e.to)), (typeof e.min_interval != "number" || isNaN(e.min_interval) || !e.min_interval || e.min_interval < 0) && (e.min_interval = 0), (typeof e.max_interval != "number" || isNaN(e.max_interval) || !e.max_interval || e.max_interval < 0) && (e.max_interval = 0), e.min_interval && e.min_interval > e.max - e.min && (e.min_interval = e.max - e.min), e.max_interval && e.max_interval > e.max - e.min && (e.max_interval = e.max - e.min);
			},
			decorate: function(e, t) {
				var n = "", r = this.options;
				return r.prefix && (n += r.prefix), n += e, r.max_postfix && (r.values.length && e === r.p_values[r.max] || t === r.max) && (n += r.max_postfix, r.postfix && (n += " ")), r.postfix && (n += r.postfix), n;
			},
			updateFrom: function() {
				this.result.from = this.options.from, this.result.from_percent = this.convertToPercent(this.result.from), this.result.from_pretty = this._prettify(this.result.from), this.options.values && (this.result.from_value = this.options.values[this.result.from]);
			},
			updateTo: function() {
				this.result.to = this.options.to, this.result.to_percent = this.convertToPercent(this.result.to), this.result.to_pretty = this._prettify(this.result.to), this.options.values && (this.result.to_value = this.options.values[this.result.to]);
			},
			updateResult: function() {
				this.result.min = this.options.min, this.result.max = this.options.max, this.updateFrom(), this.updateTo();
			},
			appendGrid: function() {
				if (this.options.grid) {
					var e = this.options, t, n, r = e.max - e.min, i = e.grid_num, a = 0, o = 0, s = 4, c, l, u = 0, d, f = "";
					for (this.calcGridMargin(), e.grid_snap && (i = r / e.step), i > 50 && (i = 50), a = this.toFixed(100 / i), i > 4 && (s = 3), i > 7 && (s = 2), i > 14 && (s = 1), i > 28 && (s = 0), t = 0; t < i + 1; t++) {
						for (c = s, o = this.toFixed(a * t), o > 100 && (o = 100), this.coords.big[t] = o, l = (o - a * (t - 1)) / (c + 1), n = 1; n <= c && o !== 0; n++) u = this.toFixed(o - l * n), f += "<span class=\"irs-grid-pol small\" style=\"left: " + u + "%\"></span>";
						f += "<span class=\"irs-grid-pol\" style=\"left: " + o + "%\"></span>", d = this.convertToValue(o), d = e.values.length ? e.p_values[d] : this._prettify(d), f += "<span class=\"irs-grid-text js-grid-text-" + t + "\" style=\"left: " + o + "%\">" + d + "</span>";
					}
					this.coords.big_num = Math.ceil(i + 1), this.$cache.cont.addClass("irs-with-grid"), this.$cache.grid.html(f), this.cacheGridLabels();
				}
			},
			cacheGridLabels: function() {
				var e, t, n = this.coords.big_num;
				for (t = 0; t < n; t++) e = this.$cache.grid.find(".js-grid-text-" + t), this.$cache.grid_labels.push(e);
				this.calcGridLabels();
			},
			calcGridLabels: function() {
				var e, t, n = [], r = [], i = this.coords.big_num;
				for (e = 0; e < i; e++) this.coords.big_w[e] = this.$cache.grid_labels[e].outerWidth(!1), this.coords.big_p[e] = this.toFixed(this.coords.big_w[e] / this.coords.w_rs * 100), this.coords.big_x[e] = this.toFixed(this.coords.big_p[e] / 2), n[e] = this.toFixed(this.coords.big[e] - this.coords.big_x[e]), r[e] = this.toFixed(n[e] + this.coords.big_p[e]);
				for (this.options.force_edges && (n[0] < -this.coords.grid_gap && (n[0] = -this.coords.grid_gap, r[0] = this.toFixed(n[0] + this.coords.big_p[0]), this.coords.big_x[0] = this.coords.grid_gap), r[i - 1] > 100 + this.coords.grid_gap && (r[i - 1] = 100 + this.coords.grid_gap, n[i - 1] = this.toFixed(r[i - 1] - this.coords.big_p[i - 1]), this.coords.big_x[i - 1] = this.toFixed(this.coords.big_p[i - 1] - this.coords.grid_gap))), this.calcGridCollision(2, n, r), this.calcGridCollision(4, n, r), e = 0; e < i; e++) t = this.$cache.grid_labels[e][0], this.coords.big_x[e] !== Infinity && (t.style.marginLeft = -this.coords.big_x[e] + "%");
			},
			calcGridCollision: function(e, t, n) {
				var r, i, a, o = this.coords.big_num;
				for (r = 0; r < o && (i = r + e / 2, !(i >= o)); r += e) a = this.$cache.grid_labels[i][0], n[r] <= t[i] ? a.style.visibility = "visible" : a.style.visibility = "hidden";
			},
			calcGridMargin: function() {
				this.options.grid_margin && (this.coords.w_rs = this.$cache.rs.outerWidth(!1), this.coords.w_rs && (this.options.type === "single" ? this.coords.w_handle = this.$cache.s_single.outerWidth(!1) : this.coords.w_handle = this.$cache.s_from.outerWidth(!1), this.coords.p_handle = this.toFixed(this.coords.w_handle / this.coords.w_rs * 100), this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - .1), this.$cache.grid[0].style.width = this.toFixed(100 - this.coords.p_handle) + "%", this.$cache.grid[0].style.left = this.coords.grid_gap + "%"));
			},
			update: function(t) {
				this.input && (this.is_update = !0, this.options.from = this.result.from, this.options.to = this.result.to, this.update_check.from = this.result.from, this.update_check.to = this.result.to, this.options = e.extend(this.options, t), this.validate(), this.updateResult(t), this.toggleInput(), this.remove(), this.init(!0));
			},
			reset: function() {
				this.input && (this.updateResult(), this.update());
			},
			destroy: function() {
				this.input && (this.toggleInput(), this.$cache.input.prop("readonly", !1), e.data(this.input, "ionRangeSlider", null), this.remove(), this.input = null, this.options = null);
			}
		}, e.fn.ionRangeSlider = function(t) {
			return this.each(function() {
				e.data(this, "ionRangeSlider") || e.data(this, "ionRangeSlider", new d(this, t, a++));
			});
		}, (function() {
			for (var e = 0, t = [
				"ms",
				"moz",
				"webkit",
				"o"
			], r = 0; r < t.length && !n.requestAnimationFrame; ++r) n.requestAnimationFrame = n[t[r] + "RequestAnimationFrame"], n.cancelAnimationFrame = n[t[r] + "CancelAnimationFrame"] || n[t[r] + "CancelRequestAnimationFrame"];
			n.requestAnimationFrame ||= function(t, r) {
				var i = (/* @__PURE__ */ new Date()).getTime(), a = Math.max(0, 16 - (i - e)), o = n.setTimeout(function() {
					t(i + a);
				}, a);
				return e = i + a, o;
			}, n.cancelAnimationFrame ||= function(e) {
				clearTimeout(e);
			};
		})();
	});
})))();
var x = {
	data: {
		type: Array,
		required: !0
	},
	min: { type: Number },
	max: { type: Number },
	clip: {
		type: Boolean,
		default: !0
	},
	block: {
		type: Boolean,
		default: !1
	},
	grid: {
		type: Boolean,
		default: !0
	},
	gridNum: {
		type: Number,
		default: 4
	},
	step: {
		type: Number,
		default: 1
	},
	hideMinMax: {
		type: Boolean,
		default: !0
	},
	hideFromTo: {
		type: Boolean,
		default: !1
	},
	toFixed: {
		type: Boolean,
		default: !1
	},
	fromFixed: {
		type: Boolean,
		default: !1
	},
	forceEdges: {
		type: Boolean,
		default: !1
	},
	dragInterval: {
		type: Boolean,
		default: !1
	},
	keyboard: {
		type: Boolean,
		default: !0
	},
	type: {
		type: String,
		default: "double",
		validator: function(e) {
			return ["double", "single"].indexOf(e) !== -1;
		}
	},
	width: {
		type: [Number, String],
		default: 650
	},
	barHeight: {
		type: Number,
		default: 100
	},
	barWidth: {
		type: Number,
		default: 6
	},
	barGap: {
		type: Number,
		default: 5
	},
	barRadius: {
		type: Number,
		default: 4
	},
	prettify: Function,
	labelColor: {
		type: String,
		default: "#0091ff"
	},
	primaryColor: {
		type: String,
		default: "#0091ff"
	},
	holderColor: {
		type: String,
		default: "#dee4ec"
	},
	handleColor: {
		type: String,
		default: "#ffffff"
	},
	gridTextColor: {
		type: String,
		default: "silver"
	},
	lineHeight: {
		type: Number,
		default: 6
	},
	transitionDuration: {
		type: Number,
		default: 80
	},
	fontFamily: {
		type: String,
		default: "Arial, sans-serif"
	},
	fontSize: {
		type: Number,
		default: 12
	},
	histSliderGap: {
		type: Number,
		default: 6
	},
	colors: { type: Array },
	updateColorOnChange: {
		type: Boolean,
		default: !0
	},
	handleSize: {
		type: Number,
		default: 26
	},
	resettable: {
		type: Boolean,
		default: !1
	}
};
//#endregion
//#region node_modules/d3-array/src/ascending.js
function S(e, t) {
	return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region node_modules/d3-array/src/descending.js
function C(e, t) {
	return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
//#endregion
//#region node_modules/d3-array/src/bisector.js
function w(e) {
	let t, n, r;
	e.length === 2 ? (t = e === S || e === C ? e : T, n = e, r = e) : (t = S, n = (t, n) => S(e(t), n), r = (t, n) => e(t) - n);
	function i(e, r, i = 0, a = e.length) {
		if (i < a) {
			if (t(r, r) !== 0) return a;
			do {
				let t = i + a >>> 1;
				n(e[t], r) < 0 ? i = t + 1 : a = t;
			} while (i < a);
		}
		return i;
	}
	function a(e, r, i = 0, a = e.length) {
		if (i < a) {
			if (t(r, r) !== 0) return a;
			do {
				let t = i + a >>> 1;
				n(e[t], r) <= 0 ? i = t + 1 : a = t;
			} while (i < a);
		}
		return i;
	}
	function o(e, t, n = 0, a = e.length) {
		let o = i(e, t, n, a - 1);
		return o > n && r(e[o - 1], t) > -r(e[o], t) ? o - 1 : o;
	}
	return {
		left: i,
		center: o,
		right: a
	};
}
function T() {
	return 0;
}
//#endregion
//#region node_modules/d3-array/src/number.js
function E(e) {
	return e === null ? NaN : +e;
}
//#endregion
//#region node_modules/d3-array/src/bisect.js
var D = w(S), O = D.right;
D.left, w(E).center;
//#endregion
//#region node_modules/d3-array/src/count.js
function ee(e, t) {
	let n = 0;
	if (t === void 0) for (let t of e) t != null && (t = +t) >= t && ++n;
	else {
		let r = -1;
		for (let i of e) (i = t(i, ++r, e)) != null && (i = +i) >= i && ++n;
	}
	return n;
}
//#endregion
//#region node_modules/d3-array/src/extent.js
function k(e, t) {
	let n, r;
	if (t === void 0) for (let t of e) t != null && (n === void 0 ? t >= t && (n = r = t) : (n > t && (n = t), r < t && (r = t)));
	else {
		let i = -1;
		for (let a of e) (a = t(a, ++i, e)) != null && (n === void 0 ? a >= a && (n = r = a) : (n > a && (n = a), r < a && (r = a)));
	}
	return [n, r];
}
//#endregion
//#region node_modules/d3-array/src/identity.js
function te(e) {
	return e;
}
//#endregion
//#region node_modules/d3-array/src/array.js
var ne = Array.prototype, A = ne.slice;
ne.map;
//#endregion
//#region node_modules/d3-array/src/constant.js
function re(e) {
	return () => e;
}
//#endregion
//#region node_modules/d3-array/src/ticks.js
var ie = Math.sqrt(50), j = Math.sqrt(10), M = Math.sqrt(2);
function N(e, t, n) {
	let r = (t - e) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / 10 ** i, o = a >= ie ? 10 : a >= j ? 5 : a >= M ? 2 : 1, s, c, l;
	return i < 0 ? (l = 10 ** -i / o, s = Math.round(e * l), c = Math.round(t * l), s / l < e && ++s, c / l > t && --c, l = -l) : (l = 10 ** i * o, s = Math.round(e / l), c = Math.round(t / l), s * l < e && ++s, c * l > t && --c), c < s && .5 <= n && n < 2 ? N(e, t, n * 2) : [
		s,
		c,
		l
	];
}
function P(e, t, n) {
	if (t = +t, e = +e, n = +n, !(n > 0)) return [];
	if (e === t) return [e];
	let r = t < e, [i, a, o] = r ? N(t, e, n) : N(e, t, n);
	if (!(a >= i)) return [];
	let s = a - i + 1, c = Array(s);
	if (r) if (o < 0) for (let e = 0; e < s; ++e) c[e] = (a - e) / -o;
	else for (let e = 0; e < s; ++e) c[e] = (a - e) * o;
	else if (o < 0) for (let e = 0; e < s; ++e) c[e] = (i + e) / -o;
	else for (let e = 0; e < s; ++e) c[e] = (i + e) * o;
	return c;
}
function ae(e, t, n) {
	return t = +t, e = +e, n = +n, N(e, t, n)[2];
}
function oe(e, t, n) {
	t = +t, e = +e, n = +n;
	let r = t < e, i = r ? ae(t, e, n) : ae(e, t, n);
	return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
//#endregion
//#region node_modules/d3-array/src/nice.js
function se(e, t, n) {
	let r;
	for (;;) {
		let i = ae(e, t, n);
		if (i === r || i === 0 || !isFinite(i)) return [e, t];
		i > 0 ? (e = Math.floor(e / i) * i, t = Math.ceil(t / i) * i) : i < 0 && (e = Math.ceil(e * i) / i, t = Math.floor(t * i) / i), r = i;
	}
}
//#endregion
//#region node_modules/d3-array/src/threshold/sturges.js
function ce(e) {
	return Math.max(1, Math.ceil(Math.log(ee(e)) / Math.LN2) + 1);
}
//#endregion
//#region node_modules/d3-array/src/bin.js
function le() {
	var e = te, t = k, n = ce;
	function r(r) {
		Array.isArray(r) || (r = Array.from(r));
		var i, a = r.length, o, s, c = Array(a);
		for (i = 0; i < a; ++i) c[i] = e(r[i], i, r);
		var l = t(c), u = l[0], d = l[1], f = n(c, u, d);
		if (!Array.isArray(f)) {
			let e = d, n = +f;
			if (t === k && ([u, d] = se(u, d, n)), f = P(u, d, n), f[0] <= u && (s = ae(u, d, n)), f[f.length - 1] >= d) if (e >= d && t === k) {
				let e = ae(u, d, n);
				isFinite(e) && (e > 0 ? d = (Math.floor(d / e) + 1) * e : e < 0 && (d = (Math.ceil(d * -e) + 1) / -e));
			} else f.pop();
		}
		for (var p = f.length, m = 0, h = p; f[m] <= u;) ++m;
		for (; f[h - 1] > d;) --h;
		(m || h < p) && (f = f.slice(m, h), p = h - m);
		var g = Array(p + 1), _;
		for (i = 0; i <= p; ++i) _ = g[i] = [], _.x0 = i > 0 ? f[i - 1] : u, _.x1 = i < p ? f[i] : d;
		if (isFinite(s)) {
			if (s > 0) for (i = 0; i < a; ++i) (o = c[i]) != null && u <= o && o <= d && g[Math.min(p, Math.floor((o - u) / s))].push(r[i]);
			else if (s < 0) {
				for (i = 0; i < a; ++i) if ((o = c[i]) != null && u <= o && o <= d) {
					let e = Math.floor((u - o) * s);
					g[Math.min(p, e + (f[e] <= o))].push(r[i]);
				}
			}
		} else for (i = 0; i < a; ++i) (o = c[i]) != null && u <= o && o <= d && g[O(f, o, 0, p)].push(r[i]);
		return g;
	}
	return r.value = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : re(t), r) : e;
	}, r.domain = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : re([e[0], e[1]]), r) : t;
	}, r.thresholds = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : re(Array.isArray(e) ? A.call(e) : e), r) : n;
	}, r;
}
//#endregion
//#region node_modules/d3-array/src/max.js
function ue(e, t) {
	let n;
	if (t === void 0) for (let t of e) t != null && (n < t || n === void 0 && t >= t) && (n = t);
	else {
		let r = -1;
		for (let i of e) (i = t(i, ++r, e)) != null && (n < i || n === void 0 && i >= i) && (n = i);
	}
	return n;
}
//#endregion
//#region node_modules/d3-array/src/min.js
function de(e, t) {
	let n;
	if (t === void 0) for (let t of e) t != null && (n > t || n === void 0 && t >= t) && (n = t);
	else {
		let r = -1;
		for (let i of e) (i = t(i, ++r, e)) != null && (n > i || n === void 0 && i >= i) && (n = i);
	}
	return n;
}
//#endregion
//#region node_modules/d3-scale/src/init.js
function fe(e, t) {
	switch (arguments.length) {
		case 0: break;
		case 1:
			this.range(e);
			break;
		default:
			this.range(t).domain(e);
			break;
	}
	return this;
}
//#endregion
//#region node_modules/d3-color/src/define.js
function F(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e;
}
function pe(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
//#endregion
//#region node_modules/d3-color/src/color.js
function me() {}
var I = .7, L = 1 / I, he = "\\s*([+-]?\\d+)\\s*", ge = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", R = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", _e = /^#([0-9a-f]{3,8})$/, ve = RegExp(`^rgb\\(${he},${he},${he}\\)$`), ye = RegExp(`^rgb\\(${R},${R},${R}\\)$`), be = RegExp(`^rgba\\(${he},${he},${he},${ge}\\)$`), xe = RegExp(`^rgba\\(${R},${R},${R},${ge}\\)$`), z = RegExp(`^hsl\\(${ge},${R},${R}\\)$`), Se = RegExp(`^hsla\\(${ge},${R},${R},${ge}\\)$`), B = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
};
F(me, H, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: V,
	formatHex: V,
	formatHex8: Ce,
	formatHsl: we,
	formatRgb: Te,
	toString: Te
});
function V() {
	return this.rgb().formatHex();
}
function Ce() {
	return this.rgb().formatHex8();
}
function we() {
	return Ne(this).formatHsl();
}
function Te() {
	return this.rgb().formatRgb();
}
function H(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = _e.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Ee(t) : n === 3 ? new K(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? U(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? U(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = ve.exec(e)) ? new K(t[1], t[2], t[3], 1) : (t = ye.exec(e)) ? new K(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = be.exec(e)) ? U(t[1], t[2], t[3], t[4]) : (t = xe.exec(e)) ? U(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = z.exec(e)) ? Me(t[1], t[2] / 100, t[3] / 100, 1) : (t = Se.exec(e)) ? Me(t[1], t[2] / 100, t[3] / 100, t[4]) : B.hasOwnProperty(e) ? Ee(B[e]) : e === "transparent" ? new K(NaN, NaN, NaN, 0) : null;
}
function Ee(e) {
	return new K(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function U(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new K(e, t, n, r);
}
function W(e) {
	return e instanceof me || (e = H(e)), e ? (e = e.rgb(), new K(e.r, e.g, e.b, e.opacity)) : new K();
}
function G(e, t, n, r) {
	return arguments.length === 1 ? W(e) : new K(e, t, n, r ?? 1);
}
function K(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
F(K, G, pe(me, {
	brighter(e) {
		return e = e == null ? L : L ** +e, new K(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? I : I ** +e, new K(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new K(je(this.r), je(this.g), je(this.b), Ae(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: De,
	formatHex: De,
	formatHex8: Oe,
	formatRgb: ke,
	toString: ke
}));
function De() {
	return `#${q(this.r)}${q(this.g)}${q(this.b)}`;
}
function Oe() {
	return `#${q(this.r)}${q(this.g)}${q(this.b)}${q((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ke() {
	let e = Ae(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${je(this.r)}, ${je(this.g)}, ${je(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Ae(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function je(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function q(e) {
	return e = je(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Me(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new J(e, t, n, r);
}
function Ne(e) {
	if (e instanceof J) return new J(e.h, e.s, e.l, e.opacity);
	if (e instanceof me || (e = H(e)), !e) return new J();
	if (e instanceof J) return e;
	e = e.rgb();
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, s = a - i, c = (a + i) / 2;
	return s ? (o = t === a ? (n - r) / s + (n < r) * 6 : n === a ? (r - t) / s + 2 : (t - n) / s + 4, s /= c < .5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new J(o, s, c, e.opacity);
}
function Pe(e, t, n, r) {
	return arguments.length === 1 ? Ne(e) : new J(e, t, n, r ?? 1);
}
function J(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
F(J, Pe, pe(me, {
	brighter(e) {
		return e = e == null ? L : L ** +e, new J(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? I : I ** +e, new J(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, i = 2 * n - r;
		return new K(Le(e >= 240 ? e - 240 : e + 120, i, r), Le(e, i, r), Le(e < 120 ? e + 240 : e - 120, i, r), this.opacity);
	},
	clamp() {
		return new J(Fe(this.h), Ie(this.s), Ie(this.l), Ae(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = Ae(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${Fe(this.h)}, ${Ie(this.s) * 100}%, ${Ie(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function Fe(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ie(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function Le(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
//#endregion
//#region node_modules/d3-interpolate/src/constant.js
var Re = (e) => () => e;
//#endregion
//#region node_modules/d3-interpolate/src/color.js
function ze(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function Be(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function Ve(e) {
	return (e = +e) == 1 ? He : function(t, n) {
		return n - t ? Be(t, n, e) : Re(isNaN(t) ? n : t);
	};
}
function He(e, t) {
	var n = t - e;
	return n ? ze(e, n) : Re(isNaN(e) ? t : e);
}
//#endregion
//#region node_modules/d3-interpolate/src/rgb.js
var Ue = (function e(t) {
	var n = Ve(t);
	function r(e, t) {
		var r = n((e = G(e)).r, (t = G(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = He(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
//#endregion
//#region node_modules/d3-interpolate/src/numberArray.js
function We(e, t) {
	t ||= [];
	var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
	return function(a) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
		return r;
	};
}
function Ge(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
//#endregion
//#region node_modules/d3-interpolate/src/array.js
function Ke(e, t) {
	var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o;
	for (o = 0; o < r; ++o) i[o] = et(e[o], t[o]);
	for (; o < n; ++o) a[o] = t[o];
	return function(e) {
		for (o = 0; o < r; ++o) a[o] = i[o](e);
		return a;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/date.js
function qe(e, t) {
	var n = /* @__PURE__ */ new Date();
	return e = +e, t = +t, function(r) {
		return n.setTime(e * (1 - r) + t * r), n;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/number.js
function Y(e, t) {
	return e = +e, t = +t, function(n) {
		return e * (1 - n) + t * n;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/object.js
function Je(e, t) {
	var n = {}, r = {}, i;
	for (i in (typeof e != "object" || !e) && (e = {}), (typeof t != "object" || !t) && (t = {}), t) i in e ? n[i] = et(e[i], t[i]) : r[i] = t[i];
	return function(e) {
		for (i in n) r[i] = n[i](e);
		return r;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/string.js
var Ye = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Xe = new RegExp(Ye.source, "g");
function Ze(e) {
	return function() {
		return e;
	};
}
function Qe(e) {
	return function(t) {
		return e(t) + "";
	};
}
function $e(e, t) {
	var n = Ye.lastIndex = Xe.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = Ye.exec(e)) && (i = Xe.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: Y(r, i)
	})), n = Xe.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? Qe(c[0].x) : Ze(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
//#endregion
//#region node_modules/d3-interpolate/src/value.js
function et(e, t) {
	var n = typeof t, r;
	return t == null || n === "boolean" ? Re(t) : (n === "number" ? Y : n === "string" ? (r = H(t)) ? (t = r, Ue) : $e : t instanceof H ? Ue : t instanceof Date ? qe : Ge(t) ? We : Array.isArray(t) ? Ke : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? Je : Y)(e, t);
}
//#endregion
//#region node_modules/d3-interpolate/src/round.js
function tt(e, t) {
	return e = +e, t = +t, function(n) {
		return Math.round(e * (1 - n) + t * n);
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/decompose.js
var nt = 180 / Math.PI, rt = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function it(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * nt,
		skewX: Math.atan(c) * nt,
		scaleX: o,
		scaleY: s
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/parse.js
var at;
function ot(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? rt : it(t.a, t.b, t.c, t.d, t.e, t.f);
}
function st(e) {
	return e == null || (at ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), at.setAttribute("transform", e), !(e = at.transform.baseVal.consolidate())) ? rt : (e = e.matrix, it(e.a, e.b, e.c, e.d, e.e, e.f));
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/index.js
function ct(e, t, n, r) {
	function i(e) {
		return e.length ? e.pop() + " " : "";
	}
	function a(e, r, i, a, o, s) {
		if (e !== i || r !== a) {
			var c = o.push("translate(", null, t, null, n);
			s.push({
				i: c - 4,
				x: Y(e, i)
			}, {
				i: c - 2,
				x: Y(r, a)
			});
		} else (i || a) && o.push("translate(" + i + t + a + n);
	}
	function o(e, t, n, a) {
		e === t ? t && n.push(i(n) + "rotate(" + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
			i: n.push(i(n) + "rotate(", null, r) - 2,
			x: Y(e, t)
		}));
	}
	function s(e, t, n, a) {
		e === t ? t && n.push(i(n) + "skewX(" + t + r) : a.push({
			i: n.push(i(n) + "skewX(", null, r) - 2,
			x: Y(e, t)
		});
	}
	function c(e, t, n, r, a, o) {
		if (e !== n || t !== r) {
			var s = a.push(i(a) + "scale(", null, ",", null, ")");
			o.push({
				i: s - 4,
				x: Y(e, n)
			}, {
				i: s - 2,
				x: Y(t, r)
			});
		} else (n !== 1 || r !== 1) && a.push(i(a) + "scale(" + n + "," + r + ")");
	}
	return function(t, n) {
		var r = [], i = [];
		return t = e(t), n = e(n), a(t.translateX, t.translateY, n.translateX, n.translateY, r, i), o(t.rotate, n.rotate, r, i), s(t.skewX, n.skewX, r, i), c(t.scaleX, t.scaleY, n.scaleX, n.scaleY, r, i), t = n = null, function(e) {
			for (var t = -1, n = i.length, a; ++t < n;) r[(a = i[t]).i] = a.x(e);
			return r.join("");
		};
	};
}
var X = ct(ot, "px, ", "px)", "deg)"), lt = ct(st, ", ", ")", ")");
//#endregion
//#region node_modules/d3-scale/src/constant.js
function ut(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-scale/src/number.js
function dt(e) {
	return +e;
}
//#endregion
//#region node_modules/d3-scale/src/continuous.js
var ft = [0, 1];
function pt(e) {
	return e;
}
function mt(e, t) {
	return (t -= e = +e) ? function(n) {
		return (n - e) / t;
	} : ut(isNaN(t) ? NaN : .5);
}
function ht(e, t) {
	var n;
	return e > t && (n = e, e = t, t = n), function(n) {
		return Math.max(e, Math.min(t, n));
	};
}
function gt(e, t, n) {
	var r = e[0], i = e[1], a = t[0], o = t[1];
	return i < r ? (r = mt(i, r), a = n(o, a)) : (r = mt(r, i), a = n(a, o)), function(e) {
		return a(r(e));
	};
}
function _t(e, t, n) {
	var r = Math.min(e.length, t.length) - 1, i = Array(r), a = Array(r), o = -1;
	for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < r;) i[o] = mt(e[o], e[o + 1]), a[o] = n(t[o], t[o + 1]);
	return function(t) {
		var n = O(e, t, 1, r) - 1;
		return a[n](i[n](t));
	};
}
function vt(e, t) {
	return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function yt() {
	var e = ft, t = ft, n = et, r, i, a, o = pt, s, c, l;
	function u() {
		var n = Math.min(e.length, t.length);
		return o !== pt && (o = ht(e[0], e[n - 1])), s = n > 2 ? _t : gt, c = l = null, d;
	}
	function d(i) {
		return i == null || isNaN(i = +i) ? a : (c ||= s(e.map(r), t, n))(r(o(i)));
	}
	return d.invert = function(n) {
		return o(i((l ||= s(t, e.map(r), Y))(n)));
	}, d.domain = function(t) {
		return arguments.length ? (e = Array.from(t, dt), u()) : e.slice();
	}, d.range = function(e) {
		return arguments.length ? (t = Array.from(e), u()) : t.slice();
	}, d.rangeRound = function(e) {
		return t = Array.from(e), n = tt, u();
	}, d.clamp = function(e) {
		return arguments.length ? (o = e ? !0 : pt, u()) : o !== pt;
	}, d.interpolate = function(e) {
		return arguments.length ? (n = e, u()) : n;
	}, d.unknown = function(e) {
		return arguments.length ? (a = e, d) : a;
	}, function(e, t) {
		return r = e, i = t, u();
	};
}
function bt() {
	return yt()(pt, pt);
}
//#endregion
//#region node_modules/d3-format/src/formatDecimal.js
function xt(e) {
	return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function St(e, t) {
	if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
	var n, r = e.slice(0, n);
	return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
//#endregion
//#region node_modules/d3-format/src/exponent.js
function Ct(e) {
	return e = St(Math.abs(e)), e ? e[1] : NaN;
}
//#endregion
//#region node_modules/d3-format/src/formatGroup.js
function wt(e, t) {
	return function(n, r) {
		for (var i = n.length, a = [], o = 0, s = e[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r));) s = e[o = (o + 1) % e.length];
		return a.reverse().join(t);
	};
}
//#endregion
//#region node_modules/d3-format/src/formatNumerals.js
function Tt(e) {
	return function(t) {
		return t.replace(/[0-9]/g, function(t) {
			return e[+t];
		});
	};
}
//#endregion
//#region node_modules/d3-format/src/formatSpecifier.js
var Et = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Dt(e) {
	if (!(t = Et.exec(e))) throw Error("invalid format: " + e);
	var t;
	return new Ot({
		fill: t[1],
		align: t[2],
		sign: t[3],
		symbol: t[4],
		zero: t[5],
		width: t[6],
		comma: t[7],
		precision: t[8] && t[8].slice(1),
		trim: t[9],
		type: t[10]
	});
}
Dt.prototype = Ot.prototype;
function Ot(e) {
	this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Ot.prototype.toString = function() {
	return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
//#endregion
//#region node_modules/d3-format/src/formatTrim.js
function kt(e) {
	out: for (var t = e.length, n = 1, r = -1, i; n < t; ++n) switch (e[n]) {
		case ".":
			r = i = n;
			break;
		case "0":
			r === 0 && (r = n), i = n;
			break;
		default:
			if (!+e[n]) break out;
			r > 0 && (r = 0);
			break;
	}
	return r > 0 ? e.slice(0, r) + e.slice(i + 1) : e;
}
//#endregion
//#region node_modules/d3-format/src/formatPrefixAuto.js
var At;
function jt(e, t) {
	var n = St(e, t);
	if (!n) return e + "";
	var r = n[0], i = n[1], a = i - (At = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
	return a === o ? r : a > o ? r + Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + Array(1 - a).join("0") + St(e, Math.max(0, t + a - 1))[0];
}
//#endregion
//#region node_modules/d3-format/src/formatRounded.js
function Mt(e, t) {
	var n = St(e, t);
	if (!n) return e + "";
	var r = n[0], i = n[1];
	return i < 0 ? "0." + Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + Array(i - r.length + 2).join("0");
}
//#endregion
//#region node_modules/d3-format/src/formatTypes.js
var Nt = {
	"%": (e, t) => (e * 100).toFixed(t),
	b: (e) => Math.round(e).toString(2),
	c: (e) => e + "",
	d: xt,
	e: (e, t) => e.toExponential(t),
	f: (e, t) => e.toFixed(t),
	g: (e, t) => e.toPrecision(t),
	o: (e) => Math.round(e).toString(8),
	p: (e, t) => Mt(e * 100, t),
	r: Mt,
	s: jt,
	X: (e) => Math.round(e).toString(16).toUpperCase(),
	x: (e) => Math.round(e).toString(16)
};
//#endregion
//#region node_modules/d3-format/src/identity.js
function Pt(e) {
	return e;
}
//#endregion
//#region node_modules/d3-format/src/locale.js
var Ft = Array.prototype.map, It = [
	"y",
	"z",
	"a",
	"f",
	"p",
	"n",
	"µ",
	"m",
	"",
	"k",
	"M",
	"G",
	"T",
	"P",
	"E",
	"Z",
	"Y"
];
function Lt(e) {
	var t = e.grouping === void 0 || e.thousands === void 0 ? Pt : wt(Ft.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? Pt : Tt(Ft.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
	function l(e) {
		e = Dt(e);
		var l = e.fill, u = e.align, d = e.sign, f = e.symbol, p = e.zero, m = e.width, h = e.comma, g = e.precision, _ = e.trim, v = e.type;
		v === "n" ? (h = !0, v = "g") : Nt[v] || (g === void 0 && (g = 12), _ = !0, v = "g"), (p || l === "0" && u === "=") && (p = !0, l = "0", u = "=");
		var y = f === "$" ? n : f === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", b = f === "$" ? r : /[%p]/.test(v) ? o : "", x = Nt[v], S = /[defgprs%]/.test(v);
		g = g === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, g)) : Math.max(0, Math.min(20, g));
		function C(e) {
			var n = y, r = b, o, f, C;
			if (v === "c") r = x(e) + r, e = "";
			else {
				e = +e;
				var w = e < 0 || 1 / e < 0;
				if (e = isNaN(e) ? c : x(Math.abs(e), g), _ && (e = kt(e)), w && +e == 0 && d !== "+" && (w = !1), n = (w ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + n, r = (v === "s" ? It[8 + At / 3] : "") + r + (w && d === "(" ? ")" : ""), S) {
					for (o = -1, f = e.length; ++o < f;) if (C = e.charCodeAt(o), 48 > C || C > 57) {
						r = (C === 46 ? i + e.slice(o + 1) : e.slice(o)) + r, e = e.slice(0, o);
						break;
					}
				}
			}
			h && !p && (e = t(e, Infinity));
			var T = n.length + e.length + r.length, E = T < m ? Array(m - T + 1).join(l) : "";
			switch (h && p && (e = t(E + e, E.length ? m - r.length : Infinity), E = ""), u) {
				case "<":
					e = n + e + r + E;
					break;
				case "=":
					e = n + E + e + r;
					break;
				case "^":
					e = E.slice(0, T = E.length >> 1) + n + e + r + E.slice(T);
					break;
				default:
					e = E + n + e + r;
					break;
			}
			return a(e);
		}
		return C.toString = function() {
			return e + "";
		}, C;
	}
	function u(e, t) {
		var n = l((e = Dt(e), e.type = "f", e)), r = Math.max(-8, Math.min(8, Math.floor(Ct(t) / 3))) * 3, i = 10 ** -r, a = It[8 + r / 3];
		return function(e) {
			return n(i * e) + a;
		};
	}
	return {
		format: l,
		formatPrefix: u
	};
}
//#endregion
//#region node_modules/d3-format/src/defaultLocale.js
var Rt, zt, Bt;
Vt({
	thousands: ",",
	grouping: [3],
	currency: ["$", ""]
});
function Vt(e) {
	return Rt = Lt(e), zt = Rt.format, Bt = Rt.formatPrefix, Rt;
}
//#endregion
//#region node_modules/d3-format/src/precisionFixed.js
function Ht(e) {
	return Math.max(0, -Ct(Math.abs(e)));
}
//#endregion
//#region node_modules/d3-format/src/precisionPrefix.js
function Ut(e, t) {
	return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ct(t) / 3))) * 3 - Ct(Math.abs(e)));
}
//#endregion
//#region node_modules/d3-format/src/precisionRound.js
function Wt(e, t) {
	return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Ct(t) - Ct(e)) + 1;
}
//#endregion
//#region node_modules/d3-scale/src/tickFormat.js
function Gt(e, t, n, r) {
	var i = oe(e, t, n), a;
	switch (r = Dt(r ?? ",f"), r.type) {
		case "s":
			var o = Math.max(Math.abs(e), Math.abs(t));
			return r.precision == null && !isNaN(a = Ut(i, o)) && (r.precision = a), Bt(r, o);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			r.precision == null && !isNaN(a = Wt(i, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = a - (r.type === "e"));
			break;
		case "f":
		case "%":
			r.precision == null && !isNaN(a = Ht(i)) && (r.precision = a - (r.type === "%") * 2);
			break;
	}
	return zt(r);
}
//#endregion
//#region node_modules/d3-scale/src/linear.js
function Kt(e) {
	var t = e.domain;
	return e.ticks = function(e) {
		var n = t();
		return P(n[0], n[n.length - 1], e ?? 10);
	}, e.tickFormat = function(e, n) {
		var r = t();
		return Gt(r[0], r[r.length - 1], e ?? 10, n);
	}, e.nice = function(n) {
		n ??= 10;
		var r = t(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, l, u = 10;
		for (s < o && (l = o, o = s, s = l, l = i, i = a, a = l); u-- > 0;) {
			if (l = ae(o, s, n), l === c) return r[i] = o, r[a] = s, t(r);
			if (l > 0) o = Math.floor(o / l) * l, s = Math.ceil(s / l) * l;
			else if (l < 0) o = Math.ceil(o * l) / l, s = Math.floor(s * l) / l;
			else break;
			c = l;
		}
		return e;
	}, e;
}
function qt() {
	var e = bt();
	return e.copy = function() {
		return vt(e, qt());
	}, fe.apply(e, arguments), Kt(e);
}
var Jt = {
	svg: "http://www.w3.org/2000/svg",
	xhtml: "http://www.w3.org/1999/xhtml",
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
};
//#endregion
//#region node_modules/d3-selection/src/namespace.js
function Yt(e) {
	var t = e += "", n = t.indexOf(":");
	return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Jt.hasOwnProperty(t) ? {
		space: Jt[t],
		local: e
	} : e;
}
//#endregion
//#region node_modules/d3-selection/src/creator.js
function Xt(e) {
	return function() {
		var t = this.ownerDocument, n = this.namespaceURI;
		return n === "http://www.w3.org/1999/xhtml" && t.documentElement.namespaceURI === "http://www.w3.org/1999/xhtml" ? t.createElement(e) : t.createElementNS(n, e);
	};
}
function Zt(e) {
	return function() {
		return this.ownerDocument.createElementNS(e.space, e.local);
	};
}
function Qt(e) {
	var t = Yt(e);
	return (t.local ? Zt : Xt)(t);
}
//#endregion
//#region node_modules/d3-selection/src/selector.js
function $t() {}
function en(e) {
	return e == null ? $t : function() {
		return this.querySelector(e);
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/select.js
function tn(e) {
	typeof e != "function" && (e = en(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = Array(o), c, l, u = 0; u < o; ++u) (c = a[u]) && (l = e.call(c, c.__data__, u, a)) && ("__data__" in c && (l.__data__ = c.__data__), s[u] = l);
	return new Z(r, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/array.js
function nn(e) {
	return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
//#endregion
//#region node_modules/d3-selection/src/selectorAll.js
function rn() {
	return [];
}
function an(e) {
	return e == null ? rn : function() {
		return this.querySelectorAll(e);
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/selectAll.js
function on(e) {
	return function() {
		return nn(e.apply(this, arguments));
	};
}
function sn(e) {
	e = typeof e == "function" ? on(e) : an(e);
	for (var t = this._groups, n = t.length, r = [], i = [], a = 0; a < n; ++a) for (var o = t[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && (r.push(e.call(c, c.__data__, l, o)), i.push(c));
	return new Z(r, i);
}
//#endregion
//#region node_modules/d3-selection/src/matcher.js
function cn(e) {
	return function() {
		return this.matches(e);
	};
}
function ln(e) {
	return function(t) {
		return t.matches(e);
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/selectChild.js
var un = Array.prototype.find;
function dn(e) {
	return function() {
		return un.call(this.children, e);
	};
}
function fn() {
	return this.firstElementChild;
}
function pn(e) {
	return this.select(e == null ? fn : dn(typeof e == "function" ? e : ln(e)));
}
//#endregion
//#region node_modules/d3-selection/src/selection/selectChildren.js
var mn = Array.prototype.filter;
function hn() {
	return Array.from(this.children);
}
function gn(e) {
	return function() {
		return mn.call(this.children, e);
	};
}
function _n(e) {
	return this.selectAll(e == null ? hn : gn(typeof e == "function" ? e : ln(e)));
}
//#endregion
//#region node_modules/d3-selection/src/selection/filter.js
function vn(e) {
	typeof e != "function" && (e = cn(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new Z(r, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/sparse.js
function yn(e) {
	return Array(e.length);
}
//#endregion
//#region node_modules/d3-selection/src/selection/enter.js
function bn() {
	return new Z(this._enter || this._groups.map(yn), this._parents);
}
function xn(e, t) {
	this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
xn.prototype = {
	constructor: xn,
	appendChild: function(e) {
		return this._parent.insertBefore(e, this._next);
	},
	insertBefore: function(e, t) {
		return this._parent.insertBefore(e, t);
	},
	querySelector: function(e) {
		return this._parent.querySelector(e);
	},
	querySelectorAll: function(e) {
		return this._parent.querySelectorAll(e);
	}
};
//#endregion
//#region node_modules/d3-selection/src/constant.js
function Sn(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/data.js
function Cn(e, t, n, r, i, a) {
	for (var o = 0, s, c = t.length, l = a.length; o < l; ++o) (s = t[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new xn(e, a[o]);
	for (; o < c; ++o) (s = t[o]) && (i[o] = s);
}
function wn(e, t, n, r, i, a, o) {
	var s, c, l = /* @__PURE__ */ new Map(), u = t.length, d = a.length, f = Array(u), p;
	for (s = 0; s < u; ++s) (c = t[s]) && (f[s] = p = o.call(c, c.__data__, s, t) + "", l.has(p) ? i[s] = c : l.set(p, c));
	for (s = 0; s < d; ++s) p = o.call(e, a[s], s, a) + "", (c = l.get(p)) ? (r[s] = c, c.__data__ = a[s], l.delete(p)) : n[s] = new xn(e, a[s]);
	for (s = 0; s < u; ++s) (c = t[s]) && l.get(f[s]) === c && (i[s] = c);
}
function Tn(e) {
	return e.__data__;
}
function En(e, t) {
	if (!arguments.length) return Array.from(this, Tn);
	var n = t ? wn : Cn, r = this._parents, i = this._groups;
	typeof e != "function" && (e = Sn(e));
	for (var a = i.length, o = Array(a), s = Array(a), c = Array(a), l = 0; l < a; ++l) {
		var u = r[l], d = i[l], f = d.length, p = Dn(e.call(u, u && u.__data__, l, r)), m = p.length, h = s[l] = Array(m), g = o[l] = Array(m);
		n(u, d, h, g, c[l] = Array(f), p, t);
		for (var _ = 0, v = 0, y, b; _ < m; ++_) if (y = h[_]) {
			for (_ >= v && (v = _ + 1); !(b = g[v]) && ++v < m;);
			y._next = b || null;
		}
	}
	return o = new Z(o, r), o._enter = s, o._exit = c, o;
}
function Dn(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
//#endregion
//#region node_modules/d3-selection/src/selection/exit.js
function On() {
	return new Z(this._exit || this._groups.map(yn), this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/join.js
function kn(e, t, n) {
	var r = this.enter(), i = this, a = this.exit();
	return typeof e == "function" ? (r = e(r), r &&= r.selection()) : r = r.append(e + ""), t != null && (i = t(i), i &&= i.selection()), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
//#endregion
//#region node_modules/d3-selection/src/selection/merge.js
function An(e) {
	for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, a = r.length, o = Math.min(i, a), s = Array(i), c = 0; c < o; ++c) for (var l = n[c], u = r[c], d = l.length, f = s[c] = Array(d), p, m = 0; m < d; ++m) (p = l[m] || u[m]) && (f[m] = p);
	for (; c < i; ++c) s[c] = n[c];
	return new Z(s, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/order.js
function jn() {
	for (var e = this._groups, t = -1, n = e.length; ++t < n;) for (var r = e[t], i = r.length - 1, a = r[i], o; --i >= 0;) (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/sort.js
function Mn(e) {
	e ||= Nn;
	function t(t, n) {
		return t && n ? e(t.__data__, n.__data__) : !t - !n;
	}
	for (var n = this._groups, r = n.length, i = Array(r), a = 0; a < r; ++a) {
		for (var o = n[a], s = o.length, c = i[a] = Array(s), l, u = 0; u < s; ++u) (l = o[u]) && (c[u] = l);
		c.sort(t);
	}
	return new Z(i, this._parents).order();
}
function Nn(e, t) {
	return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region node_modules/d3-selection/src/selection/call.js
function Pn() {
	var e = arguments[0];
	return arguments[0] = this, e.apply(null, arguments), this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/nodes.js
function Fn() {
	return Array.from(this);
}
//#endregion
//#region node_modules/d3-selection/src/selection/node.js
function In() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length; i < a; ++i) {
		var o = r[i];
		if (o) return o;
	}
	return null;
}
//#endregion
//#region node_modules/d3-selection/src/selection/size.js
function Ln() {
	let e = 0;
	for (let t of this) ++e;
	return e;
}
//#endregion
//#region node_modules/d3-selection/src/selection/empty.js
function Rn() {
	return !this.node();
}
//#endregion
//#region node_modules/d3-selection/src/selection/each.js
function zn(e) {
	for (var t = this._groups, n = 0, r = t.length; n < r; ++n) for (var i = t[n], a = 0, o = i.length, s; a < o; ++a) (s = i[a]) && e.call(s, s.__data__, a, i);
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/attr.js
function Bn(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function Vn(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function Hn(e, t) {
	return function() {
		this.setAttribute(e, t);
	};
}
function Un(e, t) {
	return function() {
		this.setAttributeNS(e.space, e.local, t);
	};
}
function Wn(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
	};
}
function Gn(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
	};
}
function Kn(e, t) {
	var n = Yt(e);
	if (arguments.length < 2) {
		var r = this.node();
		return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
	}
	return this.each((t == null ? n.local ? Vn : Bn : typeof t == "function" ? n.local ? Gn : Wn : n.local ? Un : Hn)(n, t));
}
//#endregion
//#region node_modules/d3-selection/src/window.js
function qn(e) {
	return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
//#endregion
//#region node_modules/d3-selection/src/selection/style.js
function Jn(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function Yn(e, t, n) {
	return function() {
		this.style.setProperty(e, t, n);
	};
}
function Xn(e, t, n) {
	return function() {
		var r = t.apply(this, arguments);
		r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
	};
}
function Zn(e, t, n) {
	return arguments.length > 1 ? this.each((t == null ? Jn : typeof t == "function" ? Xn : Yn)(e, t, n ?? "")) : Qn(this.node(), e);
}
function Qn(e, t) {
	return e.style.getPropertyValue(t) || qn(e).getComputedStyle(e, null).getPropertyValue(t);
}
//#endregion
//#region node_modules/d3-selection/src/selection/property.js
function $n(e) {
	return function() {
		delete this[e];
	};
}
function er(e, t) {
	return function() {
		this[e] = t;
	};
}
function tr(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? delete this[e] : this[e] = n;
	};
}
function nr(e, t) {
	return arguments.length > 1 ? this.each((t == null ? $n : typeof t == "function" ? tr : er)(e, t)) : this.node()[e];
}
//#endregion
//#region node_modules/d3-selection/src/selection/classed.js
function rr(e) {
	return e.trim().split(/^|\s+/);
}
function ir(e) {
	return e.classList || new ar(e);
}
function ar(e) {
	this._node = e, this._names = rr(e.getAttribute("class") || "");
}
ar.prototype = {
	add: function(e) {
		this._names.indexOf(e) < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
	},
	remove: function(e) {
		var t = this._names.indexOf(e);
		t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
	},
	contains: function(e) {
		return this._names.indexOf(e) >= 0;
	}
};
function or(e, t) {
	for (var n = ir(e), r = -1, i = t.length; ++r < i;) n.add(t[r]);
}
function sr(e, t) {
	for (var n = ir(e), r = -1, i = t.length; ++r < i;) n.remove(t[r]);
}
function cr(e) {
	return function() {
		or(this, e);
	};
}
function lr(e) {
	return function() {
		sr(this, e);
	};
}
function ur(e, t) {
	return function() {
		(t.apply(this, arguments) ? or : sr)(this, e);
	};
}
function dr(e, t) {
	var n = rr(e + "");
	if (arguments.length < 2) {
		for (var r = ir(this.node()), i = -1, a = n.length; ++i < a;) if (!r.contains(n[i])) return !1;
		return !0;
	}
	return this.each((typeof t == "function" ? ur : t ? cr : lr)(n, t));
}
//#endregion
//#region node_modules/d3-selection/src/selection/text.js
function fr() {
	this.textContent = "";
}
function pr(e) {
	return function() {
		this.textContent = e;
	};
}
function mr(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.textContent = t ?? "";
	};
}
function hr(e) {
	return arguments.length ? this.each(e == null ? fr : (typeof e == "function" ? mr : pr)(e)) : this.node().textContent;
}
//#endregion
//#region node_modules/d3-selection/src/selection/html.js
function gr() {
	this.innerHTML = "";
}
function _r(e) {
	return function() {
		this.innerHTML = e;
	};
}
function vr(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.innerHTML = t ?? "";
	};
}
function yr(e) {
	return arguments.length ? this.each(e == null ? gr : (typeof e == "function" ? vr : _r)(e)) : this.node().innerHTML;
}
//#endregion
//#region node_modules/d3-selection/src/selection/raise.js
function br() {
	this.nextSibling && this.parentNode.appendChild(this);
}
function xr() {
	return this.each(br);
}
//#endregion
//#region node_modules/d3-selection/src/selection/lower.js
function Sr() {
	this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Cr() {
	return this.each(Sr);
}
//#endregion
//#region node_modules/d3-selection/src/selection/append.js
function wr(e) {
	var t = typeof e == "function" ? e : Qt(e);
	return this.select(function() {
		return this.appendChild(t.apply(this, arguments));
	});
}
//#endregion
//#region node_modules/d3-selection/src/selection/insert.js
function Tr() {
	return null;
}
function Er(e, t) {
	var n = typeof e == "function" ? e : Qt(e), r = t == null ? Tr : typeof t == "function" ? t : en(t);
	return this.select(function() {
		return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
	});
}
//#endregion
//#region node_modules/d3-selection/src/selection/remove.js
function Dr() {
	var e = this.parentNode;
	e && e.removeChild(this);
}
function Or() {
	return this.each(Dr);
}
//#endregion
//#region node_modules/d3-selection/src/selection/clone.js
function kr() {
	var e = this.cloneNode(!1), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Ar() {
	var e = this.cloneNode(!0), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function jr(e) {
	return this.select(e ? Ar : kr);
}
//#endregion
//#region node_modules/d3-selection/src/selection/datum.js
function Mr(e) {
	return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
//#endregion
//#region node_modules/d3-selection/src/selection/on.js
function Nr(e) {
	return function(t) {
		e.call(this, t, this.__data__);
	};
}
function Pr(e) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var t = "", n = e.indexOf(".");
		return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), {
			type: e,
			name: t
		};
	});
}
function Fr(e) {
	return function() {
		var t = this.__on;
		if (t) {
			for (var n = 0, r = -1, i = t.length, a; n < i; ++n) a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
			++r ? t.length = r : delete this.__on;
		}
	};
}
function Ir(e, t, n) {
	return function() {
		var r = this.__on, i, a = Nr(t);
		if (r) {
			for (var o = 0, s = r.length; o < s; ++o) if ((i = r[o]).type === e.type && i.name === e.name) {
				this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = n), i.value = t;
				return;
			}
		}
		this.addEventListener(e.type, a, n), i = {
			type: e.type,
			name: e.name,
			value: t,
			listener: a,
			options: n
		}, r ? r.push(i) : this.__on = [i];
	};
}
function Lr(e, t, n) {
	var r = Pr(e + ""), i, a = r.length, o;
	if (arguments.length < 2) {
		var s = this.node().__on;
		if (s) {
			for (var c = 0, l = s.length, u; c < l; ++c) for (i = 0, u = s[c]; i < a; ++i) if ((o = r[i]).type === u.type && o.name === u.name) return u.value;
		}
		return;
	}
	for (s = t ? Ir : Fr, i = 0; i < a; ++i) this.each(s(r[i], t, n));
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/dispatch.js
function Rr(e, t, n) {
	var r = qn(e), i = r.CustomEvent;
	typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function zr(e, t) {
	return function() {
		return Rr(this, e, t);
	};
}
function Br(e, t) {
	return function() {
		return Rr(this, e, t.apply(this, arguments));
	};
}
function Vr(e, t) {
	return this.each((typeof t == "function" ? Br : zr)(e, t));
}
//#endregion
//#region node_modules/d3-selection/src/selection/iterator.js
function* Hr() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length, o; i < a; ++i) (o = r[i]) && (yield o);
}
//#endregion
//#region node_modules/d3-selection/src/selection/index.js
var Ur = [null];
function Z(e, t) {
	this._groups = e, this._parents = t;
}
function Wr() {
	return new Z([[document.documentElement]], Ur);
}
function Gr() {
	return this;
}
Z.prototype = Wr.prototype = {
	constructor: Z,
	select: tn,
	selectAll: sn,
	selectChild: pn,
	selectChildren: _n,
	filter: vn,
	data: En,
	enter: bn,
	exit: On,
	join: kn,
	merge: An,
	selection: Gr,
	order: jn,
	sort: Mn,
	call: Pn,
	nodes: Fn,
	node: In,
	size: Ln,
	empty: Rn,
	each: zn,
	attr: Kn,
	style: Zn,
	property: nr,
	classed: dr,
	text: hr,
	html: yr,
	raise: xr,
	lower: Cr,
	append: wr,
	insert: Er,
	remove: Or,
	clone: jr,
	datum: Mr,
	on: Lr,
	dispatch: Vr,
	[Symbol.iterator]: Hr
};
//#endregion
//#region node_modules/d3-selection/src/select.js
function Kr(e) {
	return typeof e == "string" ? new Z([[document.querySelector(e)]], [document.documentElement]) : new Z([[e]], Ur);
}
//#endregion
//#region node_modules/d3-selection/src/sourceEvent.js
function qr(e) {
	let t;
	for (; t = e.sourceEvent;) e = t;
	return e;
}
//#endregion
//#region node_modules/d3-selection/src/pointer.js
function Jr(e, t) {
	if (e = qr(e), t === void 0 && (t = e.currentTarget), t) {
		var n = t.ownerSVGElement || t;
		if (n.createSVGPoint) {
			var r = n.createSVGPoint();
			return r.x = e.clientX, r.y = e.clientY, r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y];
		}
		if (t.getBoundingClientRect) {
			var i = t.getBoundingClientRect();
			return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop];
		}
	}
	return [e.pageX, e.pageY];
}
//#endregion
//#region node_modules/d3-dispatch/src/dispatch.js
var Yr = { value: () => {} };
function Xr() {
	for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
		if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw Error("illegal type: " + r);
		n[r] = [];
	}
	return new Zr(n);
}
function Zr(e) {
	this._ = e;
}
function Qr(e, t) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var n = "", r = e.indexOf(".");
		if (r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), e && !t.hasOwnProperty(e)) throw Error("unknown type: " + e);
		return {
			type: e,
			name: n
		};
	});
}
Zr.prototype = Xr.prototype = {
	constructor: Zr,
	on: function(e, t) {
		var n = this._, r = Qr(e + "", n), i, a = -1, o = r.length;
		if (arguments.length < 2) {
			for (; ++a < o;) if ((i = (e = r[a]).type) && (i = $r(n[i], e.name))) return i;
			return;
		}
		if (t != null && typeof t != "function") throw Error("invalid callback: " + t);
		for (; ++a < o;) if (i = (e = r[a]).type) n[i] = ei(n[i], e.name, t);
		else if (t == null) for (i in n) n[i] = ei(n[i], e.name, null);
		return this;
	},
	copy: function() {
		var e = {}, t = this._;
		for (var n in t) e[n] = t[n].slice();
		return new Zr(e);
	},
	call: function(e, t) {
		if ((i = arguments.length - 2) > 0) for (var n = Array(i), r = 0, i, a; r < i; ++r) n[r] = arguments[r + 2];
		if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
		for (a = this._[e], r = 0, i = a.length; r < i; ++r) a[r].value.apply(t, n);
	},
	apply: function(e, t, n) {
		if (!this._.hasOwnProperty(e)) throw Error("unknown type: " + e);
		for (var r = this._[e], i = 0, a = r.length; i < a; ++i) r[i].value.apply(t, n);
	}
};
function $r(e, t) {
	for (var n = 0, r = e.length, i; n < r; ++n) if ((i = e[n]).name === t) return i.value;
}
function ei(e, t, n) {
	for (var r = 0, i = e.length; r < i; ++r) if (e[r].name === t) {
		e[r] = Yr, e = e.slice(0, r).concat(e.slice(r + 1));
		break;
	}
	return n != null && e.push({
		name: t,
		value: n
	}), e;
}
//#endregion
//#region node_modules/d3-timer/src/timer.js
var ti = 0, ni = 0, ri = 0, ii = 1e3, ai, oi, si = 0, ci = 0, li = 0, ui = typeof performance == "object" && performance.now ? performance : Date, di = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
	setTimeout(e, 17);
};
function fi() {
	return ci ||= (di(pi), ui.now() + li);
}
function pi() {
	ci = 0;
}
function mi() {
	this._call = this._time = this._next = null;
}
mi.prototype = hi.prototype = {
	constructor: mi,
	restart: function(e, t, n) {
		if (typeof e != "function") throw TypeError("callback is not a function");
		n = (n == null ? fi() : +n) + (t == null ? 0 : +t), !this._next && oi !== this && (oi ? oi._next = this : ai = this, oi = this), this._call = e, this._time = n, bi();
	},
	stop: function() {
		this._call && (this._call = null, this._time = Infinity, bi());
	}
};
function hi(e, t, n) {
	var r = new mi();
	return r.restart(e, t, n), r;
}
function gi() {
	fi(), ++ti;
	for (var e = ai, t; e;) (t = ci - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
	--ti;
}
function _i() {
	ci = (si = ui.now()) + li, ti = ni = 0;
	try {
		gi();
	} finally {
		ti = 0, yi(), ci = 0;
	}
}
function vi() {
	var e = ui.now(), t = e - si;
	t > ii && (li -= t, si = e);
}
function yi() {
	for (var e, t = ai, n, r = Infinity; t;) t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : ai = n);
	oi = e, bi(r);
}
function bi(e) {
	ti || (ni &&= clearTimeout(ni), e - ci > 24 ? (e < Infinity && (ni = setTimeout(_i, e - ui.now() - li)), ri &&= clearInterval(ri)) : (ri ||= (si = ui.now(), setInterval(vi, ii)), ti = 1, di(_i)));
}
//#endregion
//#region node_modules/d3-timer/src/timeout.js
function xi(e, t, n) {
	var r = new mi();
	return t = t == null ? 0 : +t, r.restart((n) => {
		r.stop(), e(n + t);
	}, t, n), r;
}
//#endregion
//#region node_modules/d3-transition/src/transition/schedule.js
var Si = Xr("start", "end", "cancel", "interrupt"), Ci = [];
function wi(e, t, n, r, i, a) {
	var o = e.__transition;
	if (!o) e.__transition = {};
	else if (n in o) return;
	Oi(e, n, {
		name: t,
		index: r,
		group: i,
		on: Si,
		tween: Ci,
		time: a.time,
		delay: a.delay,
		duration: a.duration,
		ease: a.ease,
		timer: null,
		state: 0
	});
}
function Ti(e, t) {
	var n = Di(e, t);
	if (n.state > 0) throw Error("too late; already scheduled");
	return n;
}
function Ei(e, t) {
	var n = Di(e, t);
	if (n.state > 3) throw Error("too late; already running");
	return n;
}
function Di(e, t) {
	var n = e.__transition;
	if (!n || !(n = n[t])) throw Error("transition not found");
	return n;
}
function Oi(e, t, n) {
	var r = e.__transition, i;
	r[t] = n, n.timer = hi(a, 0, n.time);
	function a(e) {
		n.state = 1, n.timer.restart(o, n.delay, n.time), n.delay <= e && o(e - n.delay);
	}
	function o(a) {
		var l, u, d, f;
		if (n.state !== 1) return c();
		for (l in r) if (f = r[l], f.name === n.name) {
			if (f.state === 3) return xi(o);
			f.state === 4 ? (f.state = 6, f.timer.stop(), f.on.call("interrupt", e, e.__data__, f.index, f.group), delete r[l]) : +l < t && (f.state = 6, f.timer.stop(), f.on.call("cancel", e, e.__data__, f.index, f.group), delete r[l]);
		}
		if (xi(function() {
			n.state === 3 && (n.state = 4, n.timer.restart(s, n.delay, n.time), s(a));
		}), n.state = 2, n.on.call("start", e, e.__data__, n.index, n.group), n.state === 2) {
			for (n.state = 3, i = Array(d = n.tween.length), l = 0, u = -1; l < d; ++l) (f = n.tween[l].value.call(e, e.__data__, n.index, n.group)) && (i[++u] = f);
			i.length = u + 1;
		}
	}
	function s(t) {
		for (var r = t < n.duration ? n.ease.call(null, t / n.duration) : (n.timer.restart(c), n.state = 5, 1), a = -1, o = i.length; ++a < o;) i[a].call(e, r);
		n.state === 5 && (n.on.call("end", e, e.__data__, n.index, n.group), c());
	}
	function c() {
		for (var i in n.state = 6, n.timer.stop(), delete r[t], r) return;
		delete e.__transition;
	}
}
//#endregion
//#region node_modules/d3-transition/src/interrupt.js
function ki(e, t) {
	var n = e.__transition, r, i, a = !0, o;
	if (n) {
		for (o in t = t == null ? null : t + "", n) {
			if ((r = n[o]).name !== t) {
				a = !1;
				continue;
			}
			i = r.state > 2 && r.state < 5, r.state = 6, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", e, e.__data__, r.index, r.group), delete n[o];
		}
		a && delete e.__transition;
	}
}
//#endregion
//#region node_modules/d3-transition/src/selection/interrupt.js
function Ai(e) {
	return this.each(function() {
		ki(this, e);
	});
}
//#endregion
//#region node_modules/d3-transition/src/transition/tween.js
function ji(e, t) {
	var n, r;
	return function() {
		var i = Ei(this, e), a = i.tween;
		if (a !== n) {
			r = n = a;
			for (var o = 0, s = r.length; o < s; ++o) if (r[o].name === t) {
				r = r.slice(), r.splice(o, 1);
				break;
			}
		}
		i.tween = r;
	};
}
function Mi(e, t, n) {
	var r, i;
	if (typeof n != "function") throw Error();
	return function() {
		var a = Ei(this, e), o = a.tween;
		if (o !== r) {
			i = (r = o).slice();
			for (var s = {
				name: t,
				value: n
			}, c = 0, l = i.length; c < l; ++c) if (i[c].name === t) {
				i[c] = s;
				break;
			}
			c === l && i.push(s);
		}
		a.tween = i;
	};
}
function Ni(e, t) {
	var n = this._id;
	if (e += "", arguments.length < 2) {
		for (var r = Di(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i) if ((o = r[i]).name === e) return o.value;
		return null;
	}
	return this.each((t == null ? ji : Mi)(n, e, t));
}
function Pi(e, t, n) {
	var r = e._id;
	return e.each(function() {
		var e = Ei(this, r);
		(e.value ||= {})[t] = n.apply(this, arguments);
	}), function(e) {
		return Di(e, r).value[t];
	};
}
//#endregion
//#region node_modules/d3-transition/src/transition/interpolate.js
function Fi(e, t) {
	var n;
	return (typeof t == "number" ? Y : t instanceof H ? Ue : (n = H(t)) ? (t = n, Ue) : $e)(e, t);
}
//#endregion
//#region node_modules/d3-transition/src/transition/attr.js
function Ii(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function Li(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function Ri(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttribute(e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function zi(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttributeNS(e.space, e.local);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function Bi(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function Vi(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function Hi(e, t) {
	var n = Yt(e), r = n === "transform" ? lt : Fi;
	return this.attrTween(e, typeof t == "function" ? (n.local ? Vi : Bi)(n, r, Pi(this, "attr." + e, t)) : t == null ? (n.local ? Li : Ii)(n) : (n.local ? zi : Ri)(n, r, t));
}
//#endregion
//#region node_modules/d3-transition/src/transition/attrTween.js
function Ui(e, t) {
	return function(n) {
		this.setAttribute(e, t.call(this, n));
	};
}
function Wi(e, t) {
	return function(n) {
		this.setAttributeNS(e.space, e.local, t.call(this, n));
	};
}
function Gi(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && Wi(e, i)), n;
	}
	return i._value = t, i;
}
function Ki(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && Ui(e, i)), n;
	}
	return i._value = t, i;
}
function qi(e, t) {
	var n = "attr." + e;
	if (arguments.length < 2) return (n = this.tween(n)) && n._value;
	if (t == null) return this.tween(n, null);
	if (typeof t != "function") throw Error();
	var r = Yt(e);
	return this.tween(n, (r.local ? Gi : Ki)(r, t));
}
//#endregion
//#region node_modules/d3-transition/src/transition/delay.js
function Ji(e, t) {
	return function() {
		Ti(this, e).delay = +t.apply(this, arguments);
	};
}
function Yi(e, t) {
	return t = +t, function() {
		Ti(this, e).delay = t;
	};
}
function Xi(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? Ji : Yi)(t, e)) : Di(this.node(), t).delay;
}
//#endregion
//#region node_modules/d3-transition/src/transition/duration.js
function Zi(e, t) {
	return function() {
		Ei(this, e).duration = +t.apply(this, arguments);
	};
}
function Qi(e, t) {
	return t = +t, function() {
		Ei(this, e).duration = t;
	};
}
function $i(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? Zi : Qi)(t, e)) : Di(this.node(), t).duration;
}
//#endregion
//#region node_modules/d3-transition/src/transition/ease.js
function ea(e, t) {
	if (typeof t != "function") throw Error();
	return function() {
		Ei(this, e).ease = t;
	};
}
function ta(e) {
	var t = this._id;
	return arguments.length ? this.each(ea(t, e)) : Di(this.node(), t).ease;
}
//#endregion
//#region node_modules/d3-transition/src/transition/easeVarying.js
function na(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		if (typeof n != "function") throw Error();
		Ei(this, e).ease = n;
	};
}
function ra(e) {
	if (typeof e != "function") throw Error();
	return this.each(na(this._id, e));
}
//#endregion
//#region node_modules/d3-transition/src/transition/filter.js
function ia(e) {
	typeof e != "function" && (e = cn(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new Na(r, this._parents, this._name, this._id);
}
//#endregion
//#region node_modules/d3-transition/src/transition/merge.js
function aa(e) {
	if (e._id !== this._id) throw Error();
	for (var t = this._groups, n = e._groups, r = t.length, i = n.length, a = Math.min(r, i), o = Array(r), s = 0; s < a; ++s) for (var c = t[s], l = n[s], u = c.length, d = o[s] = Array(u), f, p = 0; p < u; ++p) (f = c[p] || l[p]) && (d[p] = f);
	for (; s < r; ++s) o[s] = t[s];
	return new Na(o, this._parents, this._name, this._id);
}
//#endregion
//#region node_modules/d3-transition/src/transition/on.js
function oa(e) {
	return (e + "").trim().split(/^|\s+/).every(function(e) {
		var t = e.indexOf(".");
		return t >= 0 && (e = e.slice(0, t)), !e || e === "start";
	});
}
function sa(e, t, n) {
	var r, i, a = oa(t) ? Ti : Ei;
	return function() {
		var o = a(this, e), s = o.on;
		s !== r && (i = (r = s).copy()).on(t, n), o.on = i;
	};
}
function ca(e, t) {
	var n = this._id;
	return arguments.length < 2 ? Di(this.node(), n).on.on(e) : this.each(sa(n, e, t));
}
//#endregion
//#region node_modules/d3-transition/src/transition/remove.js
function la(e) {
	return function() {
		var t = this.parentNode;
		for (var n in this.__transition) if (+n !== e) return;
		t && t.removeChild(this);
	};
}
function ua() {
	return this.on("end.remove", la(this._id));
}
//#endregion
//#region node_modules/d3-transition/src/transition/select.js
function da(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = en(e));
	for (var r = this._groups, i = r.length, a = Array(i), o = 0; o < i; ++o) for (var s = r[o], c = s.length, l = a[o] = Array(c), u, d, f = 0; f < c; ++f) (u = s[f]) && (d = e.call(u, u.__data__, f, s)) && ("__data__" in u && (d.__data__ = u.__data__), l[f] = d, wi(l[f], t, n, f, l, Di(u, n)));
	return new Na(a, this._parents, t, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/selectAll.js
function fa(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = an(e));
	for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s) for (var c = r[s], l = c.length, u, d = 0; d < l; ++d) if (u = c[d]) {
		for (var f = e.call(u, u.__data__, d, c), p, m = Di(u, n), h = 0, g = f.length; h < g; ++h) (p = f[h]) && wi(p, t, n, h, f, m);
		a.push(f), o.push(u);
	}
	return new Na(a, o, t, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/selection.js
var pa = Wr.prototype.constructor;
function ma() {
	return new pa(this._groups, this._parents);
}
//#endregion
//#region node_modules/d3-transition/src/transition/style.js
function ha(e, t) {
	var n, r, i;
	return function() {
		var a = Qn(this, e), o = (this.style.removeProperty(e), Qn(this, e));
		return a === o ? null : a === n && o === r ? i : i = t(n = a, r = o);
	};
}
function ga(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function _a(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = Qn(this, e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function va(e, t, n) {
	var r, i, a;
	return function() {
		var o = Qn(this, e), s = n(this), c = s + "";
		return s ?? (c = s = (this.style.removeProperty(e), Qn(this, e))), o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s));
	};
}
function ya(e, t) {
	var n, r, i, a = "style." + t, o = "end." + a, s;
	return function() {
		var c = Ei(this, e), l = c.on, u = c.value[a] == null ? s ||= ga(t) : void 0;
		(l !== n || i !== u) && (r = (n = l).copy()).on(o, i = u), c.on = r;
	};
}
function ba(e, t, n) {
	var r = (e += "") == "transform" ? X : Fi;
	return t == null ? this.styleTween(e, ha(e, r)).on("end.style." + e, ga(e)) : typeof t == "function" ? this.styleTween(e, va(e, r, Pi(this, "style." + e, t))).each(ya(this._id, e)) : this.styleTween(e, _a(e, r, t), n).on("end.style." + e, null);
}
//#endregion
//#region node_modules/d3-transition/src/transition/styleTween.js
function xa(e, t, n) {
	return function(r) {
		this.style.setProperty(e, t.call(this, r), n);
	};
}
function Sa(e, t, n) {
	var r, i;
	function a() {
		var a = t.apply(this, arguments);
		return a !== i && (r = (i = a) && xa(e, a, n)), r;
	}
	return a._value = t, a;
}
function Ca(e, t, n) {
	var r = "style." + (e += "");
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (t == null) return this.tween(r, null);
	if (typeof t != "function") throw Error();
	return this.tween(r, Sa(e, t, n ?? ""));
}
//#endregion
//#region node_modules/d3-transition/src/transition/text.js
function wa(e) {
	return function() {
		this.textContent = e;
	};
}
function Ta(e) {
	return function() {
		var t = e(this);
		this.textContent = t ?? "";
	};
}
function Ea(e) {
	return this.tween("text", typeof e == "function" ? Ta(Pi(this, "text", e)) : wa(e == null ? "" : e + ""));
}
//#endregion
//#region node_modules/d3-transition/src/transition/textTween.js
function Da(e) {
	return function(t) {
		this.textContent = e.call(this, t);
	};
}
function Oa(e) {
	var t, n;
	function r() {
		var r = e.apply(this, arguments);
		return r !== n && (t = (n = r) && Da(r)), t;
	}
	return r._value = e, r;
}
function ka(e) {
	var t = "text";
	if (arguments.length < 1) return (t = this.tween(t)) && t._value;
	if (e == null) return this.tween(t, null);
	if (typeof e != "function") throw Error();
	return this.tween(t, Oa(e));
}
//#endregion
//#region node_modules/d3-transition/src/transition/transition.js
function Aa() {
	for (var e = this._name, t = this._id, n = Fa(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) if (c = o[l]) {
		var u = Di(c, t);
		wi(c, e, n, l, o, {
			time: u.time + u.delay + u.duration,
			delay: 0,
			duration: u.duration,
			ease: u.ease
		});
	}
	return new Na(r, this._parents, e, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/end.js
function ja() {
	var e, t, n = this, r = n._id, i = n.size();
	return new Promise(function(a, o) {
		var s = { value: o }, c = { value: function() {
			--i === 0 && a();
		} };
		n.each(function() {
			var n = Ei(this, r), i = n.on;
			i !== e && (t = (e = i).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(c)), n.on = t;
		}), i === 0 && a();
	});
}
//#endregion
//#region node_modules/d3-transition/src/transition/index.js
var Ma = 0;
function Na(e, t, n, r) {
	this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function Pa(e) {
	return Wr().transition(e);
}
function Fa() {
	return ++Ma;
}
var Ia = Wr.prototype;
Na.prototype = Pa.prototype = {
	constructor: Na,
	select: da,
	selectAll: fa,
	selectChild: Ia.selectChild,
	selectChildren: Ia.selectChildren,
	filter: ia,
	merge: aa,
	selection: ma,
	transition: Aa,
	call: Ia.call,
	nodes: Ia.nodes,
	node: Ia.node,
	size: Ia.size,
	empty: Ia.empty,
	each: Ia.each,
	on: ca,
	attr: Hi,
	attrTween: qi,
	style: ba,
	styleTween: Ca,
	text: Ea,
	textTween: ka,
	remove: ua,
	tween: Ni,
	delay: Xi,
	duration: $i,
	ease: ta,
	easeVarying: ra,
	end: ja,
	[Symbol.iterator]: Ia[Symbol.iterator]
};
//#endregion
//#region node_modules/d3-ease/src/cubic.js
function La(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
//#endregion
//#region node_modules/d3-transition/src/selection/transition.js
var Ra = {
	time: null,
	delay: 0,
	duration: 250,
	ease: La
};
function za(e, t) {
	for (var n; !(n = e.__transition) || !(n = n[t]);) if (!(e = e.parentNode)) throw Error(`transition ${t} not found`);
	return n;
}
function Ba(e) {
	var t, n;
	e instanceof Na ? (t = e._id, e = e._name) : (t = Fa(), (n = Ra).time = fi(), e = e == null ? null : e + "");
	for (var r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && wi(c, e, t, l, o, n || za(c, t));
	return new Na(r, this._parents, e, t);
}
Wr.prototype.interrupt = Ai, Wr.prototype.transition = Ba;
//#endregion
//#region node_modules/d3-drag/src/noevent.js
var Va = {
	capture: !0,
	passive: !1
};
function Ha(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
//#endregion
//#region node_modules/d3-drag/src/nodrag.js
function Ua(e) {
	var t = e.document.documentElement, n = Kr(e).on("dragstart.drag", Ha, Va);
	"onselectstart" in t ? n.on("selectstart.drag", Ha, Va) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Wa(e, t) {
	var n = e.document.documentElement, r = Kr(e).on("dragstart.drag", null);
	t && (r.on("click.drag", Ha, Va), setTimeout(function() {
		r.on("click.drag", null);
	}, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
//#endregion
//#region node_modules/d3-brush/src/constant.js
var Ga = (e) => () => e;
//#endregion
//#region node_modules/d3-brush/src/event.js
function Ka(e, { sourceEvent: t, target: n, selection: r, mode: i, dispatch: a }) {
	Object.defineProperties(this, {
		type: {
			value: e,
			enumerable: !0,
			configurable: !0
		},
		sourceEvent: {
			value: t,
			enumerable: !0,
			configurable: !0
		},
		target: {
			value: n,
			enumerable: !0,
			configurable: !0
		},
		selection: {
			value: r,
			enumerable: !0,
			configurable: !0
		},
		mode: {
			value: i,
			enumerable: !0,
			configurable: !0
		},
		_: { value: a }
	});
}
//#endregion
//#region node_modules/d3-brush/src/noevent.js
function qa(e) {
	e.stopImmediatePropagation();
}
function Ja(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
//#endregion
//#region node_modules/d3-brush/src/brush.js
var Ya = { name: "drag" }, Xa = { name: "space" }, Za = { name: "handle" }, Qa = { name: "center" }, { abs: $a, max: Q, min: $ } = Math;
function eo(e) {
	return [+e[0], +e[1]];
}
function to(e) {
	return [eo(e[0]), eo(e[1])];
}
var no = {
	name: "x",
	handles: ["w", "e"].map(lo),
	input: function(e, t) {
		return e == null ? null : [[+e[0], t[0][1]], [+e[1], t[1][1]]];
	},
	output: function(e) {
		return e && [e[0][0], e[1][0]];
	}
}, ro = {
	name: "y",
	handles: ["n", "s"].map(lo),
	input: function(e, t) {
		return e == null ? null : [[t[0][0], +e[0]], [t[1][0], +e[1]]];
	},
	output: function(e) {
		return e && [e[0][1], e[1][1]];
	}
};
[
	"n",
	"w",
	"e",
	"s",
	"nw",
	"ne",
	"sw",
	"se"
].map(lo);
var io = {
	overlay: "crosshair",
	selection: "move",
	n: "ns-resize",
	e: "ew-resize",
	s: "ns-resize",
	w: "ew-resize",
	nw: "nwse-resize",
	ne: "nesw-resize",
	se: "nwse-resize",
	sw: "nesw-resize"
}, ao = {
	e: "w",
	w: "e",
	nw: "ne",
	ne: "nw",
	se: "sw",
	sw: "se"
}, oo = {
	n: "s",
	s: "n",
	nw: "sw",
	ne: "se",
	se: "ne",
	sw: "nw"
}, so = {
	overlay: 1,
	selection: 1,
	n: null,
	e: 1,
	s: null,
	w: -1,
	nw: -1,
	ne: 1,
	se: 1,
	sw: -1
}, co = {
	overlay: 1,
	selection: 1,
	n: -1,
	e: null,
	s: 1,
	w: null,
	nw: -1,
	ne: -1,
	se: 1,
	sw: 1
};
function lo(e) {
	return { type: e };
}
function uo(e) {
	return !e.ctrlKey && !e.button;
}
function fo() {
	var e = this.ownerSVGElement || this;
	return e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
}
function po() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function mo(e) {
	for (; !e.__brush;) if (!(e = e.parentNode)) return;
	return e.__brush;
}
function ho(e) {
	return e[0][0] === e[1][0] || e[0][1] === e[1][1];
}
function go() {
	return _o(no);
}
function _o(e) {
	var t = fo, n = uo, r = po, i = !0, a = Xr("start", "brush", "end"), o = 6, s;
	function c(t) {
		var n = t.property("__brush", h).selectAll(".overlay").data([lo("overlay")]);
		n.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", io.overlay).merge(n).each(function() {
			var e = mo(this).extent;
			Kr(this).attr("x", e[0][0]).attr("y", e[0][1]).attr("width", e[1][0] - e[0][0]).attr("height", e[1][1] - e[0][1]);
		}), t.selectAll(".selection").data([lo("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", io.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
		var i = t.selectAll(".handle").data(e.handles, function(e) {
			return e.type;
		});
		i.exit().remove(), i.enter().append("rect").attr("class", function(e) {
			return "handle handle--" + e.type;
		}).attr("cursor", function(e) {
			return io[e.type];
		}), t.each(l).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", f).filter(r).on("touchstart.brush", f).on("touchmove.brush", p).on("touchend.brush touchcancel.brush", m).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	c.move = function(t, n, r) {
		t.tween ? t.on("start.brush", function(e) {
			u(this, arguments).beforestart().start(e);
		}).on("interrupt.brush end.brush", function(e) {
			u(this, arguments).end(e);
		}).tween("brush", function() {
			var t = this, r = t.__brush, i = u(t, arguments), a = r.selection, o = e.input(typeof n == "function" ? n.apply(this, arguments) : n, r.extent), s = et(a, o);
			function c(e) {
				r.selection = e === 1 && o === null ? null : s(e), l.call(t), i.brush();
			}
			return a !== null && o !== null ? c : c(1);
		}) : t.each(function() {
			var t = this, i = arguments, a = t.__brush, o = e.input(typeof n == "function" ? n.apply(t, i) : n, a.extent), s = u(t, i).beforestart();
			ki(t), a.selection = o === null ? null : o, l.call(t), s.start(r).brush(r).end(r);
		});
	}, c.clear = function(e, t) {
		c.move(e, null, t);
	};
	function l() {
		var e = Kr(this), t = mo(this).selection;
		t ? (e.selectAll(".selection").style("display", null).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1]), e.selectAll(".handle").style("display", null).attr("x", function(e) {
			return e.type[e.type.length - 1] === "e" ? t[1][0] - o / 2 : t[0][0] - o / 2;
		}).attr("y", function(e) {
			return e.type[0] === "s" ? t[1][1] - o / 2 : t[0][1] - o / 2;
		}).attr("width", function(e) {
			return e.type === "n" || e.type === "s" ? t[1][0] - t[0][0] + o : o;
		}).attr("height", function(e) {
			return e.type === "e" || e.type === "w" ? t[1][1] - t[0][1] + o : o;
		})) : e.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
	}
	function u(e, t, n) {
		var r = e.__brush.emitter;
		return r && (!n || !r.clean) ? r : new d(e, t, n);
	}
	function d(e, t, n) {
		this.that = e, this.args = t, this.state = e.__brush, this.active = 0, this.clean = n;
	}
	d.prototype = {
		beforestart: function() {
			return ++this.active === 1 && (this.state.emitter = this, this.starting = !0), this;
		},
		start: function(e, t) {
			return this.starting ? (this.starting = !1, this.emit("start", e, t)) : this.emit("brush", e), this;
		},
		brush: function(e, t) {
			return this.emit("brush", e, t), this;
		},
		end: function(e, t) {
			return --this.active === 0 && (delete this.state.emitter, this.emit("end", e, t)), this;
		},
		emit: function(t, n, r) {
			var i = Kr(this.that).datum();
			a.call(t, this.that, new Ka(t, {
				sourceEvent: n,
				target: c,
				selection: e.output(this.state.selection),
				mode: r,
				dispatch: a
			}), i);
		}
	};
	function f(t) {
		if (s && !t.touches || !n.apply(this, arguments)) return;
		var r = this, a = t.target.__data__.type, o = (i && t.metaKey ? a = "overlay" : a) === "selection" ? Ya : i && t.altKey ? Qa : Za, c = e === ro ? null : so[a], d = e === no ? null : co[a], f = mo(r), p = f.extent, m = f.selection, h = p[0][0], g, _, v = p[0][1], y, b, x = p[1][0], S, C, w = p[1][1], T, E, D = 0, O = 0, ee, k = c && d && i && t.shiftKey, te, ne, A = Array.from(t.touches || [t], (e) => {
			let t = e.identifier;
			return e = Jr(e, r), e.point0 = e.slice(), e.identifier = t, e;
		});
		ki(r);
		var re = u(r, arguments, !0).beforestart();
		if (a === "overlay") {
			m && (ee = !0);
			let n = [A[0], A[1] || A[0]];
			f.selection = m = [[g = e === ro ? h : $(n[0][0], n[1][0]), y = e === no ? v : $(n[0][1], n[1][1])], [S = e === ro ? x : Q(n[0][0], n[1][0]), T = e === no ? w : Q(n[0][1], n[1][1])]], A.length > 1 && P(t);
		} else g = m[0][0], y = m[0][1], S = m[1][0], T = m[1][1];
		_ = g, b = y, C = S, E = T;
		var ie = Kr(r).attr("pointer-events", "none"), j = ie.selectAll(".overlay").attr("cursor", io[a]);
		if (t.touches) re.moved = N, re.ended = ae;
		else {
			var M = Kr(t.view).on("mousemove.brush", N, !0).on("mouseup.brush", ae, !0);
			i && M.on("keydown.brush", oe, !0).on("keyup.brush", se, !0), Ua(t.view);
		}
		l.call(r), re.start(t, o.name);
		function N(e) {
			for (let t of e.changedTouches || [e]) for (let e of A) e.identifier === t.identifier && (e.cur = Jr(t, r));
			if (k && !te && !ne && A.length === 1) {
				let e = A[0];
				$a(e.cur[0] - e[0]) > $a(e.cur[1] - e[1]) ? ne = !0 : te = !0;
			}
			for (let e of A) e.cur && (e[0] = e.cur[0], e[1] = e.cur[1]);
			ee = !0, Ja(e), P(e);
		}
		function P(e) {
			let t = A[0], n = t.point0;
			var i;
			switch (D = t[0] - n[0], O = t[1] - n[1], o) {
				case Xa:
				case Ya:
					c && (D = Q(h - g, $(x - S, D)), _ = g + D, C = S + D), d && (O = Q(v - y, $(w - T, O)), b = y + O, E = T + O);
					break;
				case Za:
					A[1] ? (c &&= (_ = Q(h, $(x, A[0][0])), C = Q(h, $(x, A[1][0])), 1), d &&= (b = Q(v, $(w, A[0][1])), E = Q(v, $(w, A[1][1])), 1)) : (c < 0 ? (D = Q(h - g, $(x - g, D)), _ = g + D, C = S) : c > 0 && (D = Q(h - S, $(x - S, D)), _ = g, C = S + D), d < 0 ? (O = Q(v - y, $(w - y, O)), b = y + O, E = T) : d > 0 && (O = Q(v - T, $(w - T, O)), b = y, E = T + O));
					break;
				case Qa:
					c && (_ = Q(h, $(x, g - D * c)), C = Q(h, $(x, S + D * c))), d && (b = Q(v, $(w, y - O * d)), E = Q(v, $(w, T + O * d)));
					break;
			}
			C < _ && (c *= -1, i = g, g = S, S = i, i = _, _ = C, C = i, a in ao && j.attr("cursor", io[a = ao[a]])), E < b && (d *= -1, i = y, y = T, T = i, i = b, b = E, E = i, a in oo && j.attr("cursor", io[a = oo[a]])), f.selection && (m = f.selection), te && (_ = m[0][0], C = m[1][0]), ne && (b = m[0][1], E = m[1][1]), (m[0][0] !== _ || m[0][1] !== b || m[1][0] !== C || m[1][1] !== E) && (f.selection = [[_, b], [C, E]], l.call(r), re.brush(e, o.name));
		}
		function ae(e) {
			if (qa(e), e.touches) {
				if (e.touches.length) return;
				s && clearTimeout(s), s = setTimeout(function() {
					s = null;
				}, 500);
			} else Wa(e.view, ee), M.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
			ie.attr("pointer-events", "all"), j.attr("cursor", io.overlay), f.selection && (m = f.selection), ho(m) && (f.selection = null, l.call(r)), re.end(e, o.name);
		}
		function oe(e) {
			switch (e.keyCode) {
				case 16:
					k = c && d;
					break;
				case 18:
					o === Za && (c && (S = C - D * c, g = _ + D * c), d && (T = E - O * d, y = b + O * d), o = Qa, P(e));
					break;
				case 32:
					(o === Za || o === Qa) && (c < 0 ? S = C - D : c > 0 && (g = _ - D), d < 0 ? T = E - O : d > 0 && (y = b - O), o = Xa, j.attr("cursor", io.selection), P(e));
					break;
				default: return;
			}
			Ja(e);
		}
		function se(e) {
			switch (e.keyCode) {
				case 16:
					k && (te = ne = k = !1, P(e));
					break;
				case 18:
					o === Qa && (c < 0 ? S = C : c > 0 && (g = _), d < 0 ? T = E : d > 0 && (y = b), o = Za, P(e));
					break;
				case 32:
					o === Xa && (e.altKey ? (c && (S = C - D * c, g = _ + D * c), d && (T = E - O * d, y = b + O * d), o = Qa) : (c < 0 ? S = C : c > 0 && (g = _), d < 0 ? T = E : d > 0 && (y = b), o = Za), j.attr("cursor", io[a]), P(e));
					break;
				default: return;
			}
			Ja(e);
		}
	}
	function p(e) {
		u(this, arguments).moved(e);
	}
	function m(e) {
		u(this, arguments).ended(e);
	}
	function h() {
		var n = this.__brush || { selection: null };
		return n.extent = to(t.apply(this, arguments)), n.dim = e, n;
	}
	return c.extent = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : Ga(to(e)), c) : t;
	}, c.filter = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : Ga(!!e), c) : n;
	}, c.touchable = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : Ga(!!e), c) : r;
	}, c.handleSize = function(e) {
		return arguments.length ? (o = +e, c) : o;
	}, c.keyModifiers = function(e) {
		return arguments.length ? (i = !!e, c) : i;
	}, c.on = function() {
		var e = a.on.apply(a, arguments);
		return e === a ? c : e;
	}, c;
}
//#endregion
//#region \0plugin-vue:export-helper
var vo = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, yo = b(), bo = {
	name: "HistogramSlider",
	props: x,
	data() {
		return {
			zoomed: !1,
			uid: this.uuidv4()
		};
	},
	computed: {
		style() {
			return `
        width: ${this.computedWidth};
        --primary-color: ${this.primaryColor};
        --label-color: ${this.labelColor};
        --holder-color: ${this.holderColor};
        --handle-color: ${this.handleColor};
        --grid-text-color: ${this.gridTextColor};
        --line-height: ${this.lineHeight}px;
        --font-family: ${this.fontFamily};
        --font-size: ${this.fontSize};
        --hist-slider-gap: ${-36 + this.histSliderGap}px;
        --handle-size: ${this.handleSize}px;
      `;
		},
		computedWidth() {
			return Object.prototype.toString.call(this.width) === "[object String]" ? this.width : this.width + "px";
		},
		elementId() {
			return `vue-histogram-${this.uid}`;
		},
		histogramId() {
			return `histogram-slider-${this.uid}`;
		},
		clipId() {
			return `clip-${this.uid}`;
		}
	},
	methods: {
		async init() {
			await a();
			let e = document.querySelector(`#parent_${this.elementId}`).clientWidth - 20, t = this.min || de(this.data), n = this.max || ue(this.data), r = this.type == "single", i, o, s, c, l, u, d, f;
			this.updateBarColor = (e) => {
				Pa(Pa().duration(this.transitionDuration)).selectAll(`.vue-histogram-slider-bar-${this.elementId}`).attr("fill", (t) => r ? t.x0 < e.from ? d(t.x0) : this.holderColor : t.x0 <= e.to && t.x0 >= e.from ? d(t.x0) : this.holderColor);
			}, s = qt().domain([t, n]).range([0, e]).clamp(!0), c = qt().range([this.barHeight, 0]), i = Kr(`#${this.elementId}`).attr("width", e).attr("height", this.barHeight), l = i.append("g").attr("class", "histogram"), this.clip && l.attr("clip-path", `url(#${this.clipId})`), d = this.colors ? qt().domain([t, n]).range(this.colors) : () => this.primaryColor;
			let p = ([t, n]) => {
				let i = Pa().duration(this.transitionDuration);
				l.selectAll(`.vue-histogram-slider-bar-${this.elementId}`).remove(), o = le().domain(s.domain()).thresholds(e / (this.barWidth + this.barGap)), u = o(this.data), c.domain([0, ue(u, (e) => e.length)]), l.selectAll(`.vue-histogram-slider-bar-${this.elementId}`).data(u).enter().insert("rect", "rect.overlay").attr("class", `vue-histogram-slider-bar-${this.elementId}`).attr("x", (e) => s(e.x0)).attr("y", (e) => c(e.length)).attr("rx", this.barRadius).attr("width", this.barWidth).transition(i).attr("height", (e) => this.barHeight - c(e.length)).attr("fill", (e) => r ? this.holderColor : d(e.x0)), this.ionRangeSlider && this.ionRangeSlider.destroy(), this.histSlider = yo(`#${this.histogramId}`).ionRangeSlider({
					skin: "round",
					min: t,
					max: n,
					from: t,
					to: n,
					type: this.type,
					grid: this.grid,
					step: this.step,
					from_fixed: this.fromFixed,
					to_fixed: this.toFixed,
					hide_min_max: this.hideMinMax,
					hide_from_to: this.hideFromTo,
					force_edges: this.forceEdges,
					drag_interval: this.dragInterval,
					grid_num: this.gridNum,
					block: this.block,
					keyboard: this.keyboard,
					prettify: this.prettify,
					onStart: (e) => {
						this.$emit("start", e);
					},
					onUpdate: (e) => {
						this.$emit("update", e);
					},
					onFinish: (e) => {
						this.updateColorOnChange || this.updateBarColor(e), this.$emit("finish", e);
					},
					onChange: (e) => {
						this.updateColorOnChange && this.updateBarColor(e), this.$emit("change", e);
					}
				}), this.ionRangeSlider = this.histSlider.data("ionRangeSlider"), setTimeout(() => this.updateBarColor(this.ionRangeSlider.result), this.transitionDuration + 10);
			};
			this.clip && (f = go().on("end", (e) => {
				let t = e.selection;
				if (t) {
					let e = [s.invert(t[0]), s.invert(t[1])];
					s.domain(e), this.minPos = this.ionRangeSlider.result.from, this.maxPos = this.ionRangeSlider.result.to;
					let n = {
						from: Math.max(e[0], this.ionRangeSlider.result.from),
						to: Math.min(e[1], this.ionRangeSlider.result.to)
					};
					this.$emit("finish", n), this.$emit("change", n), this.zoomed = !0, p(e), l.call(f.clear);
				}
			}), l.call(f)), p([t, n]);
		},
		update({ from: e, to: t }) {
			this.ionRangeSlider && (this.ionRangeSlider.update({
				from: e,
				to: t
			}), this.updateBarColor({
				from: e,
				to: t
			}));
		},
		async reset() {
			Kr(`#${this.elementId}`).selectAll("*").remove(), await this.init();
		},
		uuidv4() {
			return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
				var t = Math.random() * 16 | 0;
				return (e == "x" ? t : t & 3 | 8).toString(16);
			});
		}
	},
	async mounted() {
		this.uid = this.uuidv4(), await this.init();
	},
	unmounted() {
		this.ionRangeSlider.destroy();
	}
}, xo = ["id"], So = ["id"], Co = ["id"], wo = ["height"], To = { class: "slider-wrapper" }, Eo = ["id", "name"];
function Do(e, i, a, l, u, d) {
	return s(), n("div", {
		style: o(d.style),
		id: `parent_${d.elementId}`,
		class: "vue-histogram-slider-wrapper"
	}, [
		e.resettable && u.zoomed ? c(e.$slots, "default", {
			key: 0,
			reset: d.reset
		}, () => [r("button", { onClick: i[0] ||= (...e) => d.reset && d.reset(...e) }, "Reset zoom")]) : t("", !0),
		(s(), n("svg", {
			id: d.elementId,
			class: "vue-histogram-view"
		}, [r("defs", null, [r("clipPath", { id: d.clipId }, [r("rect", {
			width: "100%",
			height: e.barHeight,
			x: "0",
			y: "0"
		}, null, 8, wo)], 8, Co)])], 8, So)),
		r("div", To, [r("input", {
			type: "text",
			id: d.histogramId,
			name: d.histogramId,
			value: ""
		}, null, 8, Eo)])
	], 12, xo);
}
var Oo = /*#__PURE__*/ vo(bo, [["render", Do]]), ko = /* @__PURE__ */ _({ default: () => Ao }), Ao, jo = h((() => {
	Ao = /*#__PURE__*/ JSON.parse("[\"2004-11-23T22:00:00.000Z\",\"2005-02-28T22:00:00.000Z\",\"2005-03-09T22:00:00.000Z\",\"2005-03-21T22:00:00.000Z\",\"2005-05-06T21:00:00.000Z\",\"2005-06-01T21:00:00.000Z\",\"2005-06-13T21:00:00.000Z\",\"2005-06-30T21:00:00.000Z\",\"2005-07-03T21:00:00.000Z\",\"2005-07-14T21:00:00.000Z\",\"2005-07-30T21:00:00.000Z\",\"2005-08-30T21:00:00.000Z\",\"2005-08-31T21:00:00.000Z\",\"2005-09-30T21:00:00.000Z\",\"2005-11-13T22:00:00.000Z\",\"2005-11-30T22:00:00.000Z\",\"2005-12-08T22:00:00.000Z\",\"2005-12-14T22:00:00.000Z\",\"2005-12-18T22:00:00.000Z\",\"2005-12-28T22:00:00.000Z\",\"2006-02-06T22:00:00.000Z\",\"2006-02-13T22:00:00.000Z\",\"2006-02-14T22:00:00.000Z\",\"2006-02-14T22:00:00.000Z\",\"2006-03-14T22:00:00.000Z\",\"2006-03-16T22:00:00.000Z\",\"2006-03-31T21:00:00.000Z\",\"2006-04-04T21:00:00.000Z\",\"2006-04-05T21:00:00.000Z\",\"2006-04-11T21:00:00.000Z\",\"2006-04-23T21:00:00.000Z\",\"2006-04-30T21:00:00.000Z\",\"2006-05-09T21:00:00.000Z\",\"2006-05-11T21:00:00.000Z\",\"2006-05-11T21:00:00.000Z\",\"2006-05-25T21:00:00.000Z\",\"2006-05-29T21:00:00.000Z\",\"2006-06-01T21:00:00.000Z\",\"2006-06-06T21:00:00.000Z\",\"2006-06-07T21:00:00.000Z\",\"2006-06-08T21:00:00.000Z\",\"2006-06-13T21:00:00.000Z\",\"2006-06-15T21:00:00.000Z\",\"2006-06-20T21:00:00.000Z\",\"2006-06-25T21:00:00.000Z\",\"2006-06-27T21:00:00.000Z\",\"2006-07-04T21:00:00.000Z\",\"2006-07-04T21:00:00.000Z\",\"2006-07-06T21:00:00.000Z\",\"2006-07-31T21:00:00.000Z\",\"2006-08-02T21:00:00.000Z\",\"2006-08-20T21:00:00.000Z\",\"2006-08-22T21:00:00.000Z\",\"2006-09-13T21:00:00.000Z\",\"2006-09-27T21:00:00.000Z\",\"2006-09-30T21:00:00.000Z\",\"2006-09-30T21:00:00.000Z\",\"2006-10-05T21:00:00.000Z\",\"2006-10-17T21:00:00.000Z\",\"2006-10-19T21:00:00.000Z\",\"2006-10-24T21:00:00.000Z\",\"2006-11-06T22:00:00.000Z\",\"2006-11-09T22:00:00.000Z\",\"2006-11-10T22:00:00.000Z\",\"2006-11-19T22:00:00.000Z\",\"2006-11-21T22:00:00.000Z\",\"2006-11-30T22:00:00.000Z\",\"2006-12-11T22:00:00.000Z\",\"2006-12-17T22:00:00.000Z\",\"2006-12-18T22:00:00.000Z\",\"2006-12-18T22:00:00.000Z\",\"2006-12-19T22:00:00.000Z\",\"2006-12-20T22:00:00.000Z\",\"2006-12-23T22:00:00.000Z\",\"2006-12-25T22:00:00.000Z\",\"2006-12-26T22:00:00.000Z\",\"2006-12-27T22:00:00.000Z\",\"2006-12-28T22:00:00.000Z\",\"2007-01-22T22:00:00.000Z\",\"2007-01-29T22:00:00.000Z\",\"2007-01-30T22:00:00.000Z\",\"2007-01-31T22:00:00.000Z\",\"2007-02-24T22:00:00.000Z\",\"2007-02-24T22:00:00.000Z\",\"2007-03-04T22:00:00.000Z\",\"2007-03-10T22:00:00.000Z\",\"2007-03-11T22:00:00.000Z\",\"2007-03-12T22:00:00.000Z\",\"2007-03-13T22:00:00.000Z\",\"2007-03-15T22:00:00.000Z\",\"2007-03-25T21:00:00.000Z\",\"2007-04-01T21:00:00.000Z\",\"2007-04-02T21:00:00.000Z\",\"2007-04-07T21:00:00.000Z\",\"2007-04-08T21:00:00.000Z\",\"2007-04-12T21:00:00.000Z\",\"2007-04-22T21:00:00.000Z\",\"2007-04-23T21:00:00.000Z\",\"2007-04-23T21:00:00.000Z\",\"2007-04-25T21:00:00.000Z\",\"2007-04-29T21:00:00.000Z\",\"2007-05-04T21:00:00.000Z\",\"2007-05-14T21:00:00.000Z\",\"2007-05-15T21:00:00.000Z\",\"2007-05-17T21:00:00.000Z\",\"2007-05-23T21:00:00.000Z\",\"2007-05-24T21:00:00.000Z\",\"2007-06-12T21:00:00.000Z\",\"2007-06-15T21:00:00.000Z\",\"2007-06-24T21:00:00.000Z\",\"2007-06-26T21:00:00.000Z\",\"2007-07-05T21:00:00.000Z\",\"2007-07-18T21:00:00.000Z\",\"2007-07-22T21:00:00.000Z\",\"2007-08-01T21:00:00.000Z\",\"2007-08-03T21:00:00.000Z\",\"2007-08-12T21:00:00.000Z\",\"2007-08-31T21:00:00.000Z\",\"2007-08-31T21:00:00.000Z\",\"2007-09-05T21:00:00.000Z\",\"2007-09-11T21:00:00.000Z\",\"2007-09-13T21:00:00.000Z\",\"2007-09-16T21:00:00.000Z\",\"2007-09-24T21:00:00.000Z\",\"2007-09-27T21:00:00.000Z\",\"2007-10-07T21:00:00.000Z\",\"2007-10-10T21:00:00.000Z\",\"2007-10-18T21:00:00.000Z\",\"2007-10-21T21:00:00.000Z\",\"2007-10-23T21:00:00.000Z\",\"2007-10-29T22:00:00.000Z\",\"2007-10-31T22:00:00.000Z\",\"2007-10-31T22:00:00.000Z\",\"2007-11-01T22:00:00.000Z\",\"2007-11-04T22:00:00.000Z\",\"2007-11-05T22:00:00.000Z\",\"2007-11-08T22:00:00.000Z\",\"2007-11-10T22:00:00.000Z\",\"2007-11-11T22:00:00.000Z\",\"2007-11-13T22:00:00.000Z\",\"2007-11-19T22:00:00.000Z\",\"2007-11-21T22:00:00.000Z\",\"2007-11-24T22:00:00.000Z\",\"2007-11-25T22:00:00.000Z\",\"2007-12-04T22:00:00.000Z\",\"2007-12-10T22:00:00.000Z\",\"2007-12-10T22:00:00.000Z\",\"2007-12-27T22:00:00.000Z\",\"2007-12-31T22:00:00.000Z\",\"2008-02-05T22:00:00.000Z\",\"2008-02-27T22:00:00.000Z\",\"2008-02-29T22:00:00.000Z\",\"2008-02-29T22:00:00.000Z\",\"2008-02-29T22:00:00.000Z\",\"2008-03-04T22:00:00.000Z\",\"2008-03-05T22:00:00.000Z\",\"2008-03-08T22:00:00.000Z\",\"2008-03-10T22:00:00.000Z\",\"2008-03-17T22:00:00.000Z\",\"2008-03-31T21:00:00.000Z\",\"2008-03-31T21:00:00.000Z\",\"2008-04-24T21:00:00.000Z\",\"2008-04-27T21:00:00.000Z\",\"2008-04-27T21:00:00.000Z\",\"2008-04-27T21:00:00.000Z\",\"2008-04-28T21:00:00.000Z\",\"2008-04-28T21:00:00.000Z\",\"2008-04-28T21:00:00.000Z\",\"2008-04-28T21:00:00.000Z\",\"2008-04-30T21:00:00.000Z\",\"2008-04-30T21:00:00.000Z\",\"2008-05-03T21:00:00.000Z\",\"2008-05-05T21:00:00.000Z\",\"2008-06-02T21:00:00.000Z\",\"2008-06-13T21:00:00.000Z\",\"2008-06-14T21:00:00.000Z\",\"2008-06-16T21:00:00.000Z\",\"2008-06-22T21:00:00.000Z\",\"2008-06-30T21:00:00.000Z\",\"2008-07-02T21:00:00.000Z\",\"2008-07-17T21:00:00.000Z\",\"2008-08-19T21:00:00.000Z\",\"2008-08-27T21:00:00.000Z\",\"2008-08-31T21:00:00.000Z\",\"2008-08-31T21:00:00.000Z\",\"2008-09-17T21:00:00.000Z\",\"2008-09-18T21:00:00.000Z\",\"2008-09-21T21:00:00.000Z\",\"2008-09-30T21:00:00.000Z\",\"2008-10-07T21:00:00.000Z\",\"2008-10-07T21:00:00.000Z\",\"2008-10-29T22:00:00.000Z\",\"2008-11-02T22:00:00.000Z\",\"2008-11-11T22:00:00.000Z\",\"2008-11-12T22:00:00.000Z\",\"2008-11-18T22:00:00.000Z\",\"2008-11-25T22:00:00.000Z\",\"2008-11-27T22:00:00.000Z\",\"2008-12-04T22:00:00.000Z\",\"2008-12-17T22:00:00.000Z\",\"2008-12-31T22:00:00.000Z\",\"2008-12-31T22:00:00.000Z\",\"2009-01-19T22:00:00.000Z\",\"2009-01-31T22:00:00.000Z\",\"2009-02-12T22:00:00.000Z\",\"2009-02-16T22:00:00.000Z\",\"2009-02-21T22:00:00.000Z\",\"2009-02-22T22:00:00.000Z\",\"2009-02-24T22:00:00.000Z\",\"2009-02-25T22:00:00.000Z\",\"2009-02-27T22:00:00.000Z\",\"2009-03-19T22:00:00.000Z\",\"2009-03-31T21:00:00.000Z\",\"2009-03-31T21:00:00.000Z\",\"2009-04-03T21:00:00.000Z\",\"2009-04-08T21:00:00.000Z\",\"2009-04-09T21:00:00.000Z\",\"2009-04-12T21:00:00.000Z\",\"2009-04-15T21:00:00.000Z\",\"2009-04-30T21:00:00.000Z\",\"2009-05-04T21:00:00.000Z\",\"2009-05-18T21:00:00.000Z\",\"2009-05-26T21:00:00.000Z\",\"2009-05-29T21:00:00.000Z\",\"2009-06-04T21:00:00.000Z\",\"2009-06-14T21:00:00.000Z\",\"2009-07-02T21:00:00.000Z\",\"2009-07-19T21:00:00.000Z\",\"2009-07-22T21:00:00.000Z\",\"2009-07-29T21:00:00.000Z\",\"2009-08-06T21:00:00.000Z\",\"2009-08-09T21:00:00.000Z\",\"2009-08-16T21:00:00.000Z\",\"2009-08-16T21:00:00.000Z\",\"2009-08-26T21:00:00.000Z\",\"2009-08-27T21:00:00.000Z\",\"2009-08-31T21:00:00.000Z\",\"2009-09-07T21:00:00.000Z\",\"2009-09-14T21:00:00.000Z\",\"2009-10-02T21:00:00.000Z\",\"2009-10-18T21:00:00.000Z\",\"2009-10-20T21:00:00.000Z\",\"2009-10-29T22:00:00.000Z\",\"2009-10-30T22:00:00.000Z\",\"2009-11-01T22:00:00.000Z\",\"2009-11-04T22:00:00.000Z\",\"2009-11-05T22:00:00.000Z\",\"2009-11-05T22:00:00.000Z\",\"2009-11-05T22:00:00.000Z\",\"2009-11-09T22:00:00.000Z\",\"2009-11-22T22:00:00.000Z\",\"2009-11-29T22:00:00.000Z\",\"2009-11-30T22:00:00.000Z\",\"2009-12-16T22:00:00.000Z\",\"2010-02-07T22:00:00.000Z\",\"2010-02-09T22:00:00.000Z\",\"2010-02-15T22:00:00.000Z\",\"2010-02-28T22:00:00.000Z\",\"2010-03-13T22:00:00.000Z\",\"2010-03-22T22:00:00.000Z\",\"2010-03-22T22:00:00.000Z\",\"2010-03-22T22:00:00.000Z\",\"2010-03-28T21:00:00.000Z\",\"2010-03-31T21:00:00.000Z\",\"2010-04-08T21:00:00.000Z\",\"2010-04-13T21:00:00.000Z\",\"2010-04-20T21:00:00.000Z\",\"2010-04-25T21:00:00.000Z\",\"2010-04-28T21:00:00.000Z\",\"2010-04-29T21:00:00.000Z\",\"2010-05-04T21:00:00.000Z\",\"2010-05-04T21:00:00.000Z\",\"2010-05-04T21:00:00.000Z\",\"2010-05-11T21:00:00.000Z\",\"2010-05-18T21:00:00.000Z\",\"2010-05-18T21:00:00.000Z\",\"2010-05-18T21:00:00.000Z\",\"2010-05-26T21:00:00.000Z\",\"2010-06-07T21:00:00.000Z\",\"2010-06-18T21:00:00.000Z\",\"2010-06-19T21:00:00.000Z\",\"2010-06-21T21:00:00.000Z\",\"2010-06-30T21:00:00.000Z\",\"2010-08-23T21:00:00.000Z\",\"2010-08-31T21:00:00.000Z\",\"2010-08-31T21:00:00.000Z\",\"2010-08-31T21:00:00.000Z\",\"2010-09-30T21:00:00.000Z\",\"2010-09-30T21:00:00.000Z\",\"2010-09-30T21:00:00.000Z\",\"2010-10-18T21:00:00.000Z\",\"2010-10-18T21:00:00.000Z\",\"2010-10-21T21:00:00.000Z\",\"2010-10-22T21:00:00.000Z\",\"2010-10-26T21:00:00.000Z\",\"2010-11-05T22:00:00.000Z\",\"2010-11-07T22:00:00.000Z\",\"2010-11-10T22:00:00.000Z\",\"2010-11-18T22:00:00.000Z\",\"2010-11-25T22:00:00.000Z\",\"2010-12-09T22:00:00.000Z\",\"2010-12-09T22:00:00.000Z\",\"2010-12-09T22:00:00.000Z\",\"2010-12-26T22:00:00.000Z\",\"2010-12-31T22:00:00.000Z\",\"2011-01-17T22:00:00.000Z\",\"2011-01-27T22:00:00.000Z\",\"2011-02-21T22:00:00.000Z\",\"2011-03-10T22:00:00.000Z\",\"2011-03-22T22:00:00.000Z\",\"2011-03-22T22:00:00.000Z\",\"2011-03-23T22:00:00.000Z\",\"2011-03-28T21:00:00.000Z\",\"2011-04-05T21:00:00.000Z\",\"2011-04-06T21:00:00.000Z\",\"2011-04-06T21:00:00.000Z\",\"2011-04-08T21:00:00.000Z\",\"2011-04-25T21:00:00.000Z\",\"2011-05-10T21:00:00.000Z\",\"2011-05-15T21:00:00.000Z\",\"2011-05-18T21:00:00.000Z\",\"2011-05-19T21:00:00.000Z\",\"2011-05-24T21:00:00.000Z\",\"2011-07-13T21:00:00.000Z\",\"2011-07-26T21:00:00.000Z\",\"2011-08-31T21:00:00.000Z\",\"2011-09-02T21:00:00.000Z\",\"2011-09-18T21:00:00.000Z\",\"2011-09-27T21:00:00.000Z\",\"2011-09-30T21:00:00.000Z\",\"2011-10-31T22:00:00.000Z\",\"2011-11-03T22:00:00.000Z\",\"2011-11-06T22:00:00.000Z\",\"2011-11-08T22:00:00.000Z\",\"2011-11-15T22:00:00.000Z\",\"2011-11-23T22:00:00.000Z\",\"2011-11-25T22:00:00.000Z\",\"2011-11-27T22:00:00.000Z\",\"2011-12-27T22:00:00.000Z\",\"2012-02-16T22:00:00.000Z\",\"2012-02-19T22:00:00.000Z\",\"2012-03-19T22:00:00.000Z\",\"2012-03-27T21:00:00.000Z\",\"2012-04-15T21:00:00.000Z\",\"2012-04-15T21:00:00.000Z\",\"2012-04-16T21:00:00.000Z\",\"2012-04-18T21:00:00.000Z\",\"2012-04-24T21:00:00.000Z\",\"2012-05-03T21:00:00.000Z\",\"2012-05-13T21:00:00.000Z\",\"2012-06-15T21:00:00.000Z\",\"2012-06-17T21:00:00.000Z\",\"2012-07-17T21:00:00.000Z\",\"2012-07-18T21:00:00.000Z\",\"2012-07-30T21:00:00.000Z\",\"2012-08-09T21:00:00.000Z\",\"2012-08-31T21:00:00.000Z\",\"2012-09-05T21:00:00.000Z\",\"2012-09-05T21:00:00.000Z\",\"2012-09-15T21:00:00.000Z\",\"2012-09-19T21:00:00.000Z\",\"2012-09-20T21:00:00.000Z\",\"2012-10-09T21:00:00.000Z\",\"2012-10-10T21:00:00.000Z\",\"2012-10-16T21:00:00.000Z\",\"2012-10-19T21:00:00.000Z\",\"2012-10-20T21:00:00.000Z\",\"2012-10-30T22:00:00.000Z\",\"2012-11-01T22:00:00.000Z\",\"2012-11-08T22:00:00.000Z\",\"2012-11-14T22:00:00.000Z\",\"2012-12-02T22:00:00.000Z\",\"2013-01-14T22:00:00.000Z\",\"2013-01-23T22:00:00.000Z\",\"2013-02-06T22:00:00.000Z\",\"2013-02-28T22:00:00.000Z\",\"2013-03-18T22:00:00.000Z\",\"2013-03-23T22:00:00.000Z\",\"2013-04-02T21:00:00.000Z\",\"2013-04-09T21:00:00.000Z\",\"2013-04-10T21:00:00.000Z\",\"2013-04-11T21:00:00.000Z\",\"2013-04-16T21:00:00.000Z\",\"2013-04-17T21:00:00.000Z\",\"2013-04-18T21:00:00.000Z\",\"2013-04-24T21:00:00.000Z\",\"2013-04-25T21:00:00.000Z\",\"2013-04-27T21:00:00.000Z\",\"2013-04-30T21:00:00.000Z\",\"2013-04-30T21:00:00.000Z\",\"2013-05-06T21:00:00.000Z\",\"2013-05-12T21:00:00.000Z\",\"2013-05-19T21:00:00.000Z\",\"2013-05-21T21:00:00.000Z\",\"2013-06-04T21:00:00.000Z\",\"2013-06-06T21:00:00.000Z\",\"2013-07-02T21:00:00.000Z\",\"2013-08-22T21:00:00.000Z\",\"2013-08-29T21:00:00.000Z\",\"2013-09-05T21:00:00.000Z\",\"2013-09-21T21:00:00.000Z\",\"2013-09-22T21:00:00.000Z\",\"2013-09-26T21:00:00.000Z\",\"2013-10-08T21:00:00.000Z\",\"2013-10-16T21:00:00.000Z\",\"2013-10-19T21:00:00.000Z\",\"2013-10-22T21:00:00.000Z\",\"2013-11-04T22:00:00.000Z\",\"2013-11-13T22:00:00.000Z\",\"2013-11-25T22:00:00.000Z\",\"2013-11-28T22:00:00.000Z\",\"2013-11-28T22:00:00.000Z\",\"2013-12-05T22:00:00.000Z\",\"2014-02-03T22:00:00.000Z\",\"2014-02-19T22:00:00.000Z\",\"2014-04-14T21:00:00.000Z\",\"2014-06-05T21:00:00.000Z\",\"2014-06-10T21:00:00.000Z\",\"2014-06-11T21:00:00.000Z\",\"2014-07-02T21:00:00.000Z\",\"2014-07-03T21:00:00.000Z\",\"2014-07-06T21:00:00.000Z\",\"2014-07-16T21:00:00.000Z\",\"2014-07-16T21:00:00.000Z\",\"2014-08-04T21:00:00.000Z\",\"2014-08-26T21:00:00.000Z\",\"2014-09-01T21:00:00.000Z\",\"2014-09-01T21:00:00.000Z\",\"2014-09-18T21:00:00.000Z\",\"2014-09-20T21:00:00.000Z\",\"2014-09-23T21:00:00.000Z\",\"2014-10-23T21:00:00.000Z\",\"2014-10-27T22:00:00.000Z\",\"2014-10-30T22:00:00.000Z\",\"2014-11-04T22:00:00.000Z\",\"2014-12-06T22:00:00.000Z\",\"2014-12-18T22:00:00.000Z\",\"2015-02-05T22:00:00.000Z\",\"2015-02-28T22:00:00.000Z\",\"2015-04-09T21:00:00.000Z\",\"2015-05-17T21:00:00.000Z\",\"2015-05-21T21:00:00.000Z\",\"2015-05-31T21:00:00.000Z\",\"2015-06-28T21:00:00.000Z\",\"2015-08-19T21:00:00.000Z\",\"2015-09-01T21:00:00.000Z\",\"2015-09-09T21:00:00.000Z\",\"2015-09-18T21:00:00.000Z\",\"2015-09-20T21:00:00.000Z\",\"2015-09-30T21:00:00.000Z\",\"2015-11-10T22:00:00.000Z\",\"2015-11-25T22:00:00.000Z\",\"2016-06-23T21:00:00.000Z\",\"2016-08-31T21:00:00.000Z\",\"2016-10-05T21:00:00.000Z\",\"2016-10-21T21:00:00.000Z\",\"2016-12-12T21:00:00.000Z\",\"2016-12-25T21:00:00.000Z\",\"2017-02-15T21:00:00.000Z\",\"2017-03-23T21:00:00.000Z\"]");
})), Mo = {
	data() {
		return {
			data: (jo(), y(ko).default).map((e) => new Date(e).valueOf()),
			prettify: function(e) {
				return new Date(e).toLocaleDateString("en", {
					year: "numeric",
					month: "short",
					day: "numeric"
				});
			}
		};
	},
	methods: { finish() {} },
	components: { HistogramSlider: Oo }
}, No = ["onClick"];
function Po(e, t, a, o, c, d) {
	let f = l("HistogramSlider");
	return s(), n("div", null, [i(f, {
		style: { margin: "200px auto" },
		type: "double",
		width: 900,
		"bar-height": 110,
		data: c.data,
		prettify: c.prettify,
		clip: !0,
		"drag-interval": !0,
		hideFromTo: !0,
		onFinish: d.finish,
		"force-edges": !1,
		colors: ["#4facfe", "#00f2fe"],
		"grid-num": 2
	}, null, 8, [
		"data",
		"prettify",
		"onFinish"
	]), i(f, {
		style: { margin: "200px auto" },
		ref: "hist",
		type: "double",
		width: 900,
		"bar-height": 110,
		data: c.data,
		prettify: c.prettify,
		clip: !0,
		"drag-interval": !0,
		hideFromTo: !0,
		onFinish: d.finish,
		"force-edges": !1,
		colors: ["#4facfe", "#00f2fe"],
		resettable: ""
	}, {
		default: u(({ reset: e }) => [r("button", { onClick: e }, "Ah", 8, No)]),
		_: 1
	}, 8, [
		"data",
		"prettify",
		"onFinish"
	])]);
}
//#endregion
//#region src/main.js
e(/* @__PURE__ */ vo(Mo, [["render", Po]])).mount("#app");
//#endregion
