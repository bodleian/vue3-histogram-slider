import e from "jquery";
import { createCommentVNode as t, createElementBlock as n, createElementVNode as r, nextTick as i, normalizeStyle as a, openBlock as o, renderSlot as s } from "vue";
(/* @__PURE__ */ ((e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports))(((t) => {
	window.$ = e, window.jQuery = e, (function(e) {
		(typeof jQuery > "u" || !jQuery) && typeof define == "function" && define.amd ? define(["jquery"], function(t) {
			return e(t, document, window, navigator);
		}) : e(jQuery, document, window, navigator);
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
var c = {
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
function l(e, t) {
	return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region node_modules/d3-array/src/descending.js
function u(e, t) {
	return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
//#endregion
//#region node_modules/d3-array/src/bisector.js
function d(e) {
	let t, n, r;
	e.length === 2 ? (t = e === l || e === u ? e : f, n = e, r = e) : (t = l, n = (t, n) => l(e(t), n), r = (t, n) => e(t) - n);
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
function f() {
	return 0;
}
//#endregion
//#region node_modules/d3-array/src/number.js
function p(e) {
	return e === null ? NaN : +e;
}
//#endregion
//#region node_modules/d3-array/src/bisect.js
var m = d(l), h = m.right;
m.left, d(p).center;
//#endregion
//#region node_modules/d3-array/src/count.js
function g(e, t) {
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
function _(e, t) {
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
function v(e) {
	return e;
}
//#endregion
//#region node_modules/d3-array/src/array.js
var y = Array.prototype, b = y.slice;
y.map;
//#endregion
//#region node_modules/d3-array/src/constant.js
function x(e) {
	return () => e;
}
//#endregion
//#region node_modules/d3-array/src/ticks.js
var S = Math.sqrt(50), C = Math.sqrt(10), w = Math.sqrt(2);
function T(e, t, n) {
	let r = (t - e) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / 10 ** i, o = a >= S ? 10 : a >= C ? 5 : a >= w ? 2 : 1, s, c, l;
	return i < 0 ? (l = 10 ** -i / o, s = Math.round(e * l), c = Math.round(t * l), s / l < e && ++s, c / l > t && --c, l = -l) : (l = 10 ** i * o, s = Math.round(e / l), c = Math.round(t / l), s * l < e && ++s, c * l > t && --c), c < s && .5 <= n && n < 2 ? T(e, t, n * 2) : [
		s,
		c,
		l
	];
}
function E(e, t, n) {
	if (t = +t, e = +e, n = +n, !(n > 0)) return [];
	if (e === t) return [e];
	let r = t < e, [i, a, o] = r ? T(t, e, n) : T(e, t, n);
	if (!(a >= i)) return [];
	let s = a - i + 1, c = Array(s);
	if (r) if (o < 0) for (let e = 0; e < s; ++e) c[e] = (a - e) / -o;
	else for (let e = 0; e < s; ++e) c[e] = (a - e) * o;
	else if (o < 0) for (let e = 0; e < s; ++e) c[e] = (i + e) / -o;
	else for (let e = 0; e < s; ++e) c[e] = (i + e) * o;
	return c;
}
function D(e, t, n) {
	return t = +t, e = +e, n = +n, T(e, t, n)[2];
}
function O(e, t, n) {
	t = +t, e = +e, n = +n;
	let r = t < e, i = r ? D(t, e, n) : D(e, t, n);
	return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
//#endregion
//#region node_modules/d3-array/src/nice.js
function ee(e, t, n) {
	let r;
	for (;;) {
		let i = D(e, t, n);
		if (i === r || i === 0 || !isFinite(i)) return [e, t];
		i > 0 ? (e = Math.floor(e / i) * i, t = Math.ceil(t / i) * i) : i < 0 && (e = Math.ceil(e * i) / i, t = Math.floor(t * i) / i), r = i;
	}
}
//#endregion
//#region node_modules/d3-array/src/threshold/sturges.js
function te(e) {
	return Math.max(1, Math.ceil(Math.log(g(e)) / Math.LN2) + 1);
}
//#endregion
//#region node_modules/d3-array/src/bin.js
function ne() {
	var e = v, t = _, n = te;
	function r(r) {
		Array.isArray(r) || (r = Array.from(r));
		var i, a = r.length, o, s, c = Array(a);
		for (i = 0; i < a; ++i) c[i] = e(r[i], i, r);
		var l = t(c), u = l[0], d = l[1], f = n(c, u, d);
		if (!Array.isArray(f)) {
			let e = d, n = +f;
			if (t === _ && ([u, d] = ee(u, d, n)), f = E(u, d, n), f[0] <= u && (s = D(u, d, n)), f[f.length - 1] >= d) if (e >= d && t === _) {
				let e = D(u, d, n);
				isFinite(e) && (e > 0 ? d = (Math.floor(d / e) + 1) * e : e < 0 && (d = (Math.ceil(d * -e) + 1) / -e));
			} else f.pop();
		}
		for (var p = f.length, m = 0, g = p; f[m] <= u;) ++m;
		for (; f[g - 1] > d;) --g;
		(m || g < p) && (f = f.slice(m, g), p = g - m);
		var v = Array(p + 1), y;
		for (i = 0; i <= p; ++i) y = v[i] = [], y.x0 = i > 0 ? f[i - 1] : u, y.x1 = i < p ? f[i] : d;
		if (isFinite(s)) {
			if (s > 0) for (i = 0; i < a; ++i) (o = c[i]) != null && u <= o && o <= d && v[Math.min(p, Math.floor((o - u) / s))].push(r[i]);
			else if (s < 0) {
				for (i = 0; i < a; ++i) if ((o = c[i]) != null && u <= o && o <= d) {
					let e = Math.floor((u - o) * s);
					v[Math.min(p, e + (f[e] <= o))].push(r[i]);
				}
			}
		} else for (i = 0; i < a; ++i) (o = c[i]) != null && u <= o && o <= d && v[h(f, o, 0, p)].push(r[i]);
		return v;
	}
	return r.value = function(t) {
		return arguments.length ? (e = typeof t == "function" ? t : x(t), r) : e;
	}, r.domain = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : x([e[0], e[1]]), r) : t;
	}, r.thresholds = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : x(Array.isArray(e) ? b.call(e) : e), r) : n;
	}, r;
}
//#endregion
//#region node_modules/d3-array/src/max.js
function re(e, t) {
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
function k(e, t) {
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
function ie(e, t) {
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
function ae(e, t, n) {
	e.prototype = t.prototype = n, n.constructor = e;
}
function A(e, t) {
	var n = Object.create(e.prototype);
	for (var r in t) n[r] = t[r];
	return n;
}
//#endregion
//#region node_modules/d3-color/src/color.js
function j() {}
var M = .7, N = 1 / M, P = "\\s*([+-]?\\d+)\\s*", F = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", I = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", oe = /^#([0-9a-f]{3,8})$/, se = RegExp(`^rgb\\(${P},${P},${P}\\)$`), ce = RegExp(`^rgb\\(${I},${I},${I}\\)$`), le = RegExp(`^rgba\\(${P},${P},${P},${F}\\)$`), ue = RegExp(`^rgba\\(${I},${I},${I},${F}\\)$`), de = RegExp(`^hsl\\(${F},${I},${I}\\)$`), fe = RegExp(`^hsla\\(${F},${I},${I},${F}\\)$`), pe = {
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
ae(j, L, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e);
	},
	displayable() {
		return this.rgb().displayable();
	},
	hex: me,
	formatHex: me,
	formatHex8: he,
	formatHsl: ge,
	formatRgb: _e,
	toString: _e
});
function me() {
	return this.rgb().formatHex();
}
function he() {
	return this.rgb().formatHex8();
}
function ge() {
	return De(this).formatHsl();
}
function _e() {
	return this.rgb().formatRgb();
}
function L(e) {
	var t, n;
	return e = (e + "").trim().toLowerCase(), (t = oe.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? ve(t) : n === 3 ? new R(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? ye(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? ye(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = se.exec(e)) ? new R(t[1], t[2], t[3], 1) : (t = ce.exec(e)) ? new R(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = le.exec(e)) ? ye(t[1], t[2], t[3], t[4]) : (t = ue.exec(e)) ? ye(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = de.exec(e)) ? Ee(t[1], t[2] / 100, t[3] / 100, 1) : (t = fe.exec(e)) ? Ee(t[1], t[2] / 100, t[3] / 100, t[4]) : pe.hasOwnProperty(e) ? ve(pe[e]) : e === "transparent" ? new R(NaN, NaN, NaN, 0) : null;
}
function ve(e) {
	return new R(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ye(e, t, n, r) {
	return r <= 0 && (e = t = n = NaN), new R(e, t, n, r);
}
function be(e) {
	return e instanceof j || (e = L(e)), e ? (e = e.rgb(), new R(e.r, e.g, e.b, e.opacity)) : new R();
}
function xe(e, t, n, r) {
	return arguments.length === 1 ? be(e) : new R(e, t, n, r ?? 1);
}
function R(e, t, n, r) {
	this.r = +e, this.g = +t, this.b = +n, this.opacity = +r;
}
ae(R, xe, A(j, {
	brighter(e) {
		return e = e == null ? N : N ** +e, new R(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? M : M ** +e, new R(this.r * e, this.g * e, this.b * e, this.opacity);
	},
	rgb() {
		return this;
	},
	clamp() {
		return new R(z(this.r), z(this.g), z(this.b), Te(this.opacity));
	},
	displayable() {
		return -.5 <= this.r && this.r < 255.5 && -.5 <= this.g && this.g < 255.5 && -.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
	},
	hex: Se,
	formatHex: Se,
	formatHex8: Ce,
	formatRgb: we,
	toString: we
}));
function Se() {
	return `#${B(this.r)}${B(this.g)}${B(this.b)}`;
}
function Ce() {
	return `#${B(this.r)}${B(this.g)}${B(this.b)}${B((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function we() {
	let e = Te(this.opacity);
	return `${e === 1 ? "rgb(" : "rgba("}${z(this.r)}, ${z(this.g)}, ${z(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Te(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function z(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function B(e) {
	return e = z(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Ee(e, t, n, r) {
	return r <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new V(e, t, n, r);
}
function De(e) {
	if (e instanceof V) return new V(e.h, e.s, e.l, e.opacity);
	if (e instanceof j || (e = L(e)), !e) return new V();
	if (e instanceof V) return e;
	e = e.rgb();
	var t = e.r / 255, n = e.g / 255, r = e.b / 255, i = Math.min(t, n, r), a = Math.max(t, n, r), o = NaN, s = a - i, c = (a + i) / 2;
	return s ? (o = t === a ? (n - r) / s + (n < r) * 6 : n === a ? (r - t) / s + 2 : (t - n) / s + 4, s /= c < .5 ? a + i : 2 - a - i, o *= 60) : s = c > 0 && c < 1 ? 0 : o, new V(o, s, c, e.opacity);
}
function Oe(e, t, n, r) {
	return arguments.length === 1 ? De(e) : new V(e, t, n, r ?? 1);
}
function V(e, t, n, r) {
	this.h = +e, this.s = +t, this.l = +n, this.opacity = +r;
}
ae(V, Oe, A(j, {
	brighter(e) {
		return e = e == null ? N : N ** +e, new V(this.h, this.s, this.l * e, this.opacity);
	},
	darker(e) {
		return e = e == null ? M : M ** +e, new V(this.h, this.s, this.l * e, this.opacity);
	},
	rgb() {
		var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < .5 ? n : 1 - n) * t, i = 2 * n - r;
		return new R(je(e >= 240 ? e - 240 : e + 120, i, r), je(e, i, r), je(e < 120 ? e + 240 : e - 120, i, r), this.opacity);
	},
	clamp() {
		return new V(ke(this.h), Ae(this.s), Ae(this.l), Te(this.opacity));
	},
	displayable() {
		return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
	},
	formatHsl() {
		let e = Te(this.opacity);
		return `${e === 1 ? "hsl(" : "hsla("}${ke(this.h)}, ${Ae(this.s) * 100}%, ${Ae(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
	}
}));
function ke(e) {
	return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Ae(e) {
	return Math.max(0, Math.min(1, e || 0));
}
function je(e, t, n) {
	return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
//#endregion
//#region node_modules/d3-interpolate/src/constant.js
var Me = (e) => () => e;
//#endregion
//#region node_modules/d3-interpolate/src/color.js
function Ne(e, t) {
	return function(n) {
		return e + n * t;
	};
}
function Pe(e, t, n) {
	return e **= +n, t = t ** +n - e, n = 1 / n, function(r) {
		return (e + r * t) ** +n;
	};
}
function Fe(e) {
	return (e = +e) == 1 ? Ie : function(t, n) {
		return n - t ? Pe(t, n, e) : Me(isNaN(t) ? n : t);
	};
}
function Ie(e, t) {
	var n = t - e;
	return n ? Ne(e, n) : Me(isNaN(e) ? t : e);
}
//#endregion
//#region node_modules/d3-interpolate/src/rgb.js
var Le = (function e(t) {
	var n = Fe(t);
	function r(e, t) {
		var r = n((e = xe(e)).r, (t = xe(t)).r), i = n(e.g, t.g), a = n(e.b, t.b), o = Ie(e.opacity, t.opacity);
		return function(t) {
			return e.r = r(t), e.g = i(t), e.b = a(t), e.opacity = o(t), e + "";
		};
	}
	return r.gamma = e, r;
})(1);
//#endregion
//#region node_modules/d3-interpolate/src/numberArray.js
function Re(e, t) {
	t ||= [];
	var n = e ? Math.min(t.length, e.length) : 0, r = t.slice(), i;
	return function(a) {
		for (i = 0; i < n; ++i) r[i] = e[i] * (1 - a) + t[i] * a;
		return r;
	};
}
function ze(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
//#endregion
//#region node_modules/d3-interpolate/src/array.js
function Be(e, t) {
	var n = t ? t.length : 0, r = e ? Math.min(n, e.length) : 0, i = Array(r), a = Array(n), o;
	for (o = 0; o < r; ++o) i[o] = Je(e[o], t[o]);
	for (; o < n; ++o) a[o] = t[o];
	return function(e) {
		for (o = 0; o < r; ++o) a[o] = i[o](e);
		return a;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/date.js
function Ve(e, t) {
	var n = /* @__PURE__ */ new Date();
	return e = +e, t = +t, function(r) {
		return n.setTime(e * (1 - r) + t * r), n;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/number.js
function H(e, t) {
	return e = +e, t = +t, function(n) {
		return e * (1 - n) + t * n;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/object.js
function He(e, t) {
	var n = {}, r = {}, i;
	for (i in (typeof e != "object" || !e) && (e = {}), (typeof t != "object" || !t) && (t = {}), t) i in e ? n[i] = Je(e[i], t[i]) : r[i] = t[i];
	return function(e) {
		for (i in n) r[i] = n[i](e);
		return r;
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/string.js
var Ue = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, We = new RegExp(Ue.source, "g");
function Ge(e) {
	return function() {
		return e;
	};
}
function Ke(e) {
	return function(t) {
		return e(t) + "";
	};
}
function qe(e, t) {
	var n = Ue.lastIndex = We.lastIndex = 0, r, i, a, o = -1, s = [], c = [];
	for (e += "", t += ""; (r = Ue.exec(e)) && (i = We.exec(t));) (a = i.index) > n && (a = t.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, c.push({
		i: o,
		x: H(r, i)
	})), n = We.lastIndex;
	return n < t.length && (a = t.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? c[0] ? Ke(c[0].x) : Ge(t) : (t = c.length, function(e) {
		for (var n = 0, r; n < t; ++n) s[(r = c[n]).i] = r.x(e);
		return s.join("");
	});
}
//#endregion
//#region node_modules/d3-interpolate/src/value.js
function Je(e, t) {
	var n = typeof t, r;
	return t == null || n === "boolean" ? Me(t) : (n === "number" ? H : n === "string" ? (r = L(t)) ? (t = r, Le) : qe : t instanceof L ? Le : t instanceof Date ? Ve : ze(t) ? Re : Array.isArray(t) ? Be : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? He : H)(e, t);
}
//#endregion
//#region node_modules/d3-interpolate/src/round.js
function Ye(e, t) {
	return e = +e, t = +t, function(n) {
		return Math.round(e * (1 - n) + t * n);
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/decompose.js
var Xe = 180 / Math.PI, Ze = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function Qe(e, t, n, r, i, a) {
	var o, s, c;
	return (o = Math.sqrt(e * e + t * t)) && (e /= o, t /= o), (c = e * n + t * r) && (n -= e * c, r -= t * c), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, c /= s), e * r < t * n && (e = -e, t = -t, c = -c, o = -o), {
		translateX: i,
		translateY: a,
		rotate: Math.atan2(t, e) * Xe,
		skewX: Math.atan(c) * Xe,
		scaleX: o,
		scaleY: s
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/parse.js
var $e;
function et(e) {
	let t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
	return t.isIdentity ? Ze : Qe(t.a, t.b, t.c, t.d, t.e, t.f);
}
function tt(e) {
	return e == null || ($e ||= document.createElementNS("http://www.w3.org/2000/svg", "g"), $e.setAttribute("transform", e), !(e = $e.transform.baseVal.consolidate())) ? Ze : (e = e.matrix, Qe(e.a, e.b, e.c, e.d, e.e, e.f));
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/index.js
function nt(e, t, n, r) {
	function i(e) {
		return e.length ? e.pop() + " " : "";
	}
	function a(e, r, i, a, o, s) {
		if (e !== i || r !== a) {
			var c = o.push("translate(", null, t, null, n);
			s.push({
				i: c - 4,
				x: H(e, i)
			}, {
				i: c - 2,
				x: H(r, a)
			});
		} else (i || a) && o.push("translate(" + i + t + a + n);
	}
	function o(e, t, n, a) {
		e === t ? t && n.push(i(n) + "rotate(" + t + r) : (e - t > 180 ? t += 360 : t - e > 180 && (e += 360), a.push({
			i: n.push(i(n) + "rotate(", null, r) - 2,
			x: H(e, t)
		}));
	}
	function s(e, t, n, a) {
		e === t ? t && n.push(i(n) + "skewX(" + t + r) : a.push({
			i: n.push(i(n) + "skewX(", null, r) - 2,
			x: H(e, t)
		});
	}
	function c(e, t, n, r, a, o) {
		if (e !== n || t !== r) {
			var s = a.push(i(a) + "scale(", null, ",", null, ")");
			o.push({
				i: s - 4,
				x: H(e, n)
			}, {
				i: s - 2,
				x: H(t, r)
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
var rt = nt(et, "px, ", "px)", "deg)"), it = nt(tt, ", ", ")", ")");
//#endregion
//#region node_modules/d3-scale/src/constant.js
function at(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-scale/src/number.js
function ot(e) {
	return +e;
}
//#endregion
//#region node_modules/d3-scale/src/continuous.js
var st = [0, 1];
function U(e) {
	return e;
}
function ct(e, t) {
	return (t -= e = +e) ? function(n) {
		return (n - e) / t;
	} : at(isNaN(t) ? NaN : .5);
}
function lt(e, t) {
	var n;
	return e > t && (n = e, e = t, t = n), function(n) {
		return Math.max(e, Math.min(t, n));
	};
}
function ut(e, t, n) {
	var r = e[0], i = e[1], a = t[0], o = t[1];
	return i < r ? (r = ct(i, r), a = n(o, a)) : (r = ct(r, i), a = n(a, o)), function(e) {
		return a(r(e));
	};
}
function dt(e, t, n) {
	var r = Math.min(e.length, t.length) - 1, i = Array(r), a = Array(r), o = -1;
	for (e[r] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++o < r;) i[o] = ct(e[o], e[o + 1]), a[o] = n(t[o], t[o + 1]);
	return function(t) {
		var n = h(e, t, 1, r) - 1;
		return a[n](i[n](t));
	};
}
function ft(e, t) {
	return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function pt() {
	var e = st, t = st, n = Je, r, i, a, o = U, s, c, l;
	function u() {
		var n = Math.min(e.length, t.length);
		return o !== U && (o = lt(e[0], e[n - 1])), s = n > 2 ? dt : ut, c = l = null, d;
	}
	function d(i) {
		return i == null || isNaN(i = +i) ? a : (c ||= s(e.map(r), t, n))(r(o(i)));
	}
	return d.invert = function(n) {
		return o(i((l ||= s(t, e.map(r), H))(n)));
	}, d.domain = function(t) {
		return arguments.length ? (e = Array.from(t, ot), u()) : e.slice();
	}, d.range = function(e) {
		return arguments.length ? (t = Array.from(e), u()) : t.slice();
	}, d.rangeRound = function(e) {
		return t = Array.from(e), n = Ye, u();
	}, d.clamp = function(e) {
		return arguments.length ? (o = e ? !0 : U, u()) : o !== U;
	}, d.interpolate = function(e) {
		return arguments.length ? (n = e, u()) : n;
	}, d.unknown = function(e) {
		return arguments.length ? (a = e, d) : a;
	}, function(e, t) {
		return r = e, i = t, u();
	};
}
function mt() {
	return pt()(U, U);
}
//#endregion
//#region node_modules/d3-format/src/formatDecimal.js
function ht(e) {
	return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function gt(e, t) {
	if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0) return null;
	var n, r = e.slice(0, n);
	return [r.length > 1 ? r[0] + r.slice(2) : r, +e.slice(n + 1)];
}
//#endregion
//#region node_modules/d3-format/src/exponent.js
function _t(e) {
	return e = gt(Math.abs(e)), e ? e[1] : NaN;
}
//#endregion
//#region node_modules/d3-format/src/formatGroup.js
function vt(e, t) {
	return function(n, r) {
		for (var i = n.length, a = [], o = 0, s = e[0], c = 0; i > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), a.push(n.substring(i -= s, i + s)), !((c += s + 1) > r));) s = e[o = (o + 1) % e.length];
		return a.reverse().join(t);
	};
}
//#endregion
//#region node_modules/d3-format/src/formatNumerals.js
function yt(e) {
	return function(t) {
		return t.replace(/[0-9]/g, function(t) {
			return e[+t];
		});
	};
}
//#endregion
//#region node_modules/d3-format/src/formatSpecifier.js
var bt = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function xt(e) {
	if (!(t = bt.exec(e))) throw Error("invalid format: " + e);
	var t;
	return new St({
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
xt.prototype = St.prototype;
function St(e) {
	this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
St.prototype.toString = function() {
	return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
//#endregion
//#region node_modules/d3-format/src/formatTrim.js
function Ct(e) {
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
var wt;
function Tt(e, t) {
	var n = gt(e, t);
	if (!n) return e + "";
	var r = n[0], i = n[1], a = i - (wt = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
	return a === o ? r : a > o ? r + Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + Array(1 - a).join("0") + gt(e, Math.max(0, t + a - 1))[0];
}
//#endregion
//#region node_modules/d3-format/src/formatRounded.js
function Et(e, t) {
	var n = gt(e, t);
	if (!n) return e + "";
	var r = n[0], i = n[1];
	return i < 0 ? "0." + Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + Array(i - r.length + 2).join("0");
}
//#endregion
//#region node_modules/d3-format/src/formatTypes.js
var Dt = {
	"%": (e, t) => (e * 100).toFixed(t),
	b: (e) => Math.round(e).toString(2),
	c: (e) => e + "",
	d: ht,
	e: (e, t) => e.toExponential(t),
	f: (e, t) => e.toFixed(t),
	g: (e, t) => e.toPrecision(t),
	o: (e) => Math.round(e).toString(8),
	p: (e, t) => Et(e * 100, t),
	r: Et,
	s: Tt,
	X: (e) => Math.round(e).toString(16).toUpperCase(),
	x: (e) => Math.round(e).toString(16)
};
//#endregion
//#region node_modules/d3-format/src/identity.js
function Ot(e) {
	return e;
}
//#endregion
//#region node_modules/d3-format/src/locale.js
var kt = Array.prototype.map, At = [
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
function jt(e) {
	var t = e.grouping === void 0 || e.thousands === void 0 ? Ot : vt(kt.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", r = e.currency === void 0 ? "" : e.currency[1] + "", i = e.decimal === void 0 ? "." : e.decimal + "", a = e.numerals === void 0 ? Ot : yt(kt.call(e.numerals, String)), o = e.percent === void 0 ? "%" : e.percent + "", s = e.minus === void 0 ? "−" : e.minus + "", c = e.nan === void 0 ? "NaN" : e.nan + "";
	function l(e) {
		e = xt(e);
		var l = e.fill, u = e.align, d = e.sign, f = e.symbol, p = e.zero, m = e.width, h = e.comma, g = e.precision, _ = e.trim, v = e.type;
		v === "n" ? (h = !0, v = "g") : Dt[v] || (g === void 0 && (g = 12), _ = !0, v = "g"), (p || l === "0" && u === "=") && (p = !0, l = "0", u = "=");
		var y = f === "$" ? n : f === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", b = f === "$" ? r : /[%p]/.test(v) ? o : "", x = Dt[v], S = /[defgprs%]/.test(v);
		g = g === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, g)) : Math.max(0, Math.min(20, g));
		function C(e) {
			var n = y, r = b, o, f, C;
			if (v === "c") r = x(e) + r, e = "";
			else {
				e = +e;
				var w = e < 0 || 1 / e < 0;
				if (e = isNaN(e) ? c : x(Math.abs(e), g), _ && (e = Ct(e)), w && +e == 0 && d !== "+" && (w = !1), n = (w ? d === "(" ? d : s : d === "-" || d === "(" ? "" : d) + n, r = (v === "s" ? At[8 + wt / 3] : "") + r + (w && d === "(" ? ")" : ""), S) {
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
		var n = l((e = xt(e), e.type = "f", e)), r = Math.max(-8, Math.min(8, Math.floor(_t(t) / 3))) * 3, i = 10 ** -r, a = At[8 + r / 3];
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
var Mt, Nt, Pt;
Ft({
	thousands: ",",
	grouping: [3],
	currency: ["$", ""]
});
function Ft(e) {
	return Mt = jt(e), Nt = Mt.format, Pt = Mt.formatPrefix, Mt;
}
//#endregion
//#region node_modules/d3-format/src/precisionFixed.js
function It(e) {
	return Math.max(0, -_t(Math.abs(e)));
}
//#endregion
//#region node_modules/d3-format/src/precisionPrefix.js
function Lt(e, t) {
	return Math.max(0, Math.max(-8, Math.min(8, Math.floor(_t(t) / 3))) * 3 - _t(Math.abs(e)));
}
//#endregion
//#region node_modules/d3-format/src/precisionRound.js
function Rt(e, t) {
	return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, _t(t) - _t(e)) + 1;
}
//#endregion
//#region node_modules/d3-scale/src/tickFormat.js
function zt(e, t, n, r) {
	var i = O(e, t, n), a;
	switch (r = xt(r ?? ",f"), r.type) {
		case "s":
			var o = Math.max(Math.abs(e), Math.abs(t));
			return r.precision == null && !isNaN(a = Lt(i, o)) && (r.precision = a), Pt(r, o);
		case "":
		case "e":
		case "g":
		case "p":
		case "r":
			r.precision == null && !isNaN(a = Rt(i, Math.max(Math.abs(e), Math.abs(t)))) && (r.precision = a - (r.type === "e"));
			break;
		case "f":
		case "%":
			r.precision == null && !isNaN(a = It(i)) && (r.precision = a - (r.type === "%") * 2);
			break;
	}
	return Nt(r);
}
//#endregion
//#region node_modules/d3-scale/src/linear.js
function Bt(e) {
	var t = e.domain;
	return e.ticks = function(e) {
		var n = t();
		return E(n[0], n[n.length - 1], e ?? 10);
	}, e.tickFormat = function(e, n) {
		var r = t();
		return zt(r[0], r[r.length - 1], e ?? 10, n);
	}, e.nice = function(n) {
		n ??= 10;
		var r = t(), i = 0, a = r.length - 1, o = r[i], s = r[a], c, l, u = 10;
		for (s < o && (l = o, o = s, s = l, l = i, i = a, a = l); u-- > 0;) {
			if (l = D(o, s, n), l === c) return r[i] = o, r[a] = s, t(r);
			if (l > 0) o = Math.floor(o / l) * l, s = Math.ceil(s / l) * l;
			else if (l < 0) o = Math.ceil(o * l) / l, s = Math.floor(s * l) / l;
			else break;
			c = l;
		}
		return e;
	}, e;
}
function Vt() {
	var e = mt();
	return e.copy = function() {
		return ft(e, Vt());
	}, ie.apply(e, arguments), Bt(e);
}
var Ht = {
	svg: "http://www.w3.org/2000/svg",
	xhtml: "http://www.w3.org/1999/xhtml",
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
};
//#endregion
//#region node_modules/d3-selection/src/namespace.js
function Ut(e) {
	var t = e += "", n = t.indexOf(":");
	return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Ht.hasOwnProperty(t) ? {
		space: Ht[t],
		local: e
	} : e;
}
//#endregion
//#region node_modules/d3-selection/src/creator.js
function Wt(e) {
	return function() {
		var t = this.ownerDocument, n = this.namespaceURI;
		return n === "http://www.w3.org/1999/xhtml" && t.documentElement.namespaceURI === "http://www.w3.org/1999/xhtml" ? t.createElement(e) : t.createElementNS(n, e);
	};
}
function Gt(e) {
	return function() {
		return this.ownerDocument.createElementNS(e.space, e.local);
	};
}
function Kt(e) {
	var t = Ut(e);
	return (t.local ? Gt : Wt)(t);
}
//#endregion
//#region node_modules/d3-selection/src/selector.js
function qt() {}
function Jt(e) {
	return e == null ? qt : function() {
		return this.querySelector(e);
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/select.js
function Yt(e) {
	typeof e != "function" && (e = Jt(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = Array(o), c, l, u = 0; u < o; ++u) (c = a[u]) && (l = e.call(c, c.__data__, u, a)) && ("__data__" in c && (l.__data__ = c.__data__), s[u] = l);
	return new W(r, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/array.js
function Xt(e) {
	return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
//#endregion
//#region node_modules/d3-selection/src/selectorAll.js
function Zt() {
	return [];
}
function Qt(e) {
	return e == null ? Zt : function() {
		return this.querySelectorAll(e);
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/selectAll.js
function $t(e) {
	return function() {
		return Xt(e.apply(this, arguments));
	};
}
function en(e) {
	e = typeof e == "function" ? $t(e) : Qt(e);
	for (var t = this._groups, n = t.length, r = [], i = [], a = 0; a < n; ++a) for (var o = t[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && (r.push(e.call(c, c.__data__, l, o)), i.push(c));
	return new W(r, i);
}
//#endregion
//#region node_modules/d3-selection/src/matcher.js
function tn(e) {
	return function() {
		return this.matches(e);
	};
}
function nn(e) {
	return function(t) {
		return t.matches(e);
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/selectChild.js
var rn = Array.prototype.find;
function an(e) {
	return function() {
		return rn.call(this.children, e);
	};
}
function on() {
	return this.firstElementChild;
}
function sn(e) {
	return this.select(e == null ? on : an(typeof e == "function" ? e : nn(e)));
}
//#endregion
//#region node_modules/d3-selection/src/selection/selectChildren.js
var cn = Array.prototype.filter;
function ln() {
	return Array.from(this.children);
}
function un(e) {
	return function() {
		return cn.call(this.children, e);
	};
}
function dn(e) {
	return this.selectAll(e == null ? ln : un(typeof e == "function" ? e : nn(e)));
}
//#endregion
//#region node_modules/d3-selection/src/selection/filter.js
function fn(e) {
	typeof e != "function" && (e = tn(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new W(r, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/sparse.js
function pn(e) {
	return Array(e.length);
}
//#endregion
//#region node_modules/d3-selection/src/selection/enter.js
function mn() {
	return new W(this._enter || this._groups.map(pn), this._parents);
}
function hn(e, t) {
	this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
hn.prototype = {
	constructor: hn,
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
function gn(e) {
	return function() {
		return e;
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/data.js
function _n(e, t, n, r, i, a) {
	for (var o = 0, s, c = t.length, l = a.length; o < l; ++o) (s = t[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new hn(e, a[o]);
	for (; o < c; ++o) (s = t[o]) && (i[o] = s);
}
function vn(e, t, n, r, i, a, o) {
	var s, c, l = /* @__PURE__ */ new Map(), u = t.length, d = a.length, f = Array(u), p;
	for (s = 0; s < u; ++s) (c = t[s]) && (f[s] = p = o.call(c, c.__data__, s, t) + "", l.has(p) ? i[s] = c : l.set(p, c));
	for (s = 0; s < d; ++s) p = o.call(e, a[s], s, a) + "", (c = l.get(p)) ? (r[s] = c, c.__data__ = a[s], l.delete(p)) : n[s] = new hn(e, a[s]);
	for (s = 0; s < u; ++s) (c = t[s]) && l.get(f[s]) === c && (i[s] = c);
}
function yn(e) {
	return e.__data__;
}
function bn(e, t) {
	if (!arguments.length) return Array.from(this, yn);
	var n = t ? vn : _n, r = this._parents, i = this._groups;
	typeof e != "function" && (e = gn(e));
	for (var a = i.length, o = Array(a), s = Array(a), c = Array(a), l = 0; l < a; ++l) {
		var u = r[l], d = i[l], f = d.length, p = xn(e.call(u, u && u.__data__, l, r)), m = p.length, h = s[l] = Array(m), g = o[l] = Array(m);
		n(u, d, h, g, c[l] = Array(f), p, t);
		for (var _ = 0, v = 0, y, b; _ < m; ++_) if (y = h[_]) {
			for (_ >= v && (v = _ + 1); !(b = g[v]) && ++v < m;);
			y._next = b || null;
		}
	}
	return o = new W(o, r), o._enter = s, o._exit = c, o;
}
function xn(e) {
	return typeof e == "object" && "length" in e ? e : Array.from(e);
}
//#endregion
//#region node_modules/d3-selection/src/selection/exit.js
function Sn() {
	return new W(this._exit || this._groups.map(pn), this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/join.js
function Cn(e, t, n) {
	var r = this.enter(), i = this, a = this.exit();
	return typeof e == "function" ? (r = e(r), r &&= r.selection()) : r = r.append(e + ""), t != null && (i = t(i), i &&= i.selection()), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
//#endregion
//#region node_modules/d3-selection/src/selection/merge.js
function wn(e) {
	for (var t = e.selection ? e.selection() : e, n = this._groups, r = t._groups, i = n.length, a = r.length, o = Math.min(i, a), s = Array(i), c = 0; c < o; ++c) for (var l = n[c], u = r[c], d = l.length, f = s[c] = Array(d), p, m = 0; m < d; ++m) (p = l[m] || u[m]) && (f[m] = p);
	for (; c < i; ++c) s[c] = n[c];
	return new W(s, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/order.js
function Tn() {
	for (var e = this._groups, t = -1, n = e.length; ++t < n;) for (var r = e[t], i = r.length - 1, a = r[i], o; --i >= 0;) (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/sort.js
function En(e) {
	e ||= Dn;
	function t(t, n) {
		return t && n ? e(t.__data__, n.__data__) : !t - !n;
	}
	for (var n = this._groups, r = n.length, i = Array(r), a = 0; a < r; ++a) {
		for (var o = n[a], s = o.length, c = i[a] = Array(s), l, u = 0; u < s; ++u) (l = o[u]) && (c[u] = l);
		c.sort(t);
	}
	return new W(i, this._parents).order();
}
function Dn(e, t) {
	return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
//#endregion
//#region node_modules/d3-selection/src/selection/call.js
function On() {
	var e = arguments[0];
	return arguments[0] = this, e.apply(null, arguments), this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/nodes.js
function kn() {
	return Array.from(this);
}
//#endregion
//#region node_modules/d3-selection/src/selection/node.js
function An() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length; i < a; ++i) {
		var o = r[i];
		if (o) return o;
	}
	return null;
}
//#endregion
//#region node_modules/d3-selection/src/selection/size.js
function jn() {
	let e = 0;
	for (let t of this) ++e;
	return e;
}
//#endregion
//#region node_modules/d3-selection/src/selection/empty.js
function Mn() {
	return !this.node();
}
//#endregion
//#region node_modules/d3-selection/src/selection/each.js
function Nn(e) {
	for (var t = this._groups, n = 0, r = t.length; n < r; ++n) for (var i = t[n], a = 0, o = i.length, s; a < o; ++a) (s = i[a]) && e.call(s, s.__data__, a, i);
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/attr.js
function Pn(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function Fn(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function In(e, t) {
	return function() {
		this.setAttribute(e, t);
	};
}
function Ln(e, t) {
	return function() {
		this.setAttributeNS(e.space, e.local, t);
	};
}
function Rn(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
	};
}
function zn(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
	};
}
function Bn(e, t) {
	var n = Ut(e);
	if (arguments.length < 2) {
		var r = this.node();
		return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
	}
	return this.each((t == null ? n.local ? Fn : Pn : typeof t == "function" ? n.local ? zn : Rn : n.local ? Ln : In)(n, t));
}
//#endregion
//#region node_modules/d3-selection/src/window.js
function Vn(e) {
	return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
//#endregion
//#region node_modules/d3-selection/src/selection/style.js
function Hn(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function Un(e, t, n) {
	return function() {
		this.style.setProperty(e, t, n);
	};
}
function Wn(e, t, n) {
	return function() {
		var r = t.apply(this, arguments);
		r == null ? this.style.removeProperty(e) : this.style.setProperty(e, r, n);
	};
}
function Gn(e, t, n) {
	return arguments.length > 1 ? this.each((t == null ? Hn : typeof t == "function" ? Wn : Un)(e, t, n ?? "")) : Kn(this.node(), e);
}
function Kn(e, t) {
	return e.style.getPropertyValue(t) || Vn(e).getComputedStyle(e, null).getPropertyValue(t);
}
//#endregion
//#region node_modules/d3-selection/src/selection/property.js
function qn(e) {
	return function() {
		delete this[e];
	};
}
function Jn(e, t) {
	return function() {
		this[e] = t;
	};
}
function Yn(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		n == null ? delete this[e] : this[e] = n;
	};
}
function Xn(e, t) {
	return arguments.length > 1 ? this.each((t == null ? qn : typeof t == "function" ? Yn : Jn)(e, t)) : this.node()[e];
}
//#endregion
//#region node_modules/d3-selection/src/selection/classed.js
function Zn(e) {
	return e.trim().split(/^|\s+/);
}
function Qn(e) {
	return e.classList || new $n(e);
}
function $n(e) {
	this._node = e, this._names = Zn(e.getAttribute("class") || "");
}
$n.prototype = {
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
function er(e, t) {
	for (var n = Qn(e), r = -1, i = t.length; ++r < i;) n.add(t[r]);
}
function tr(e, t) {
	for (var n = Qn(e), r = -1, i = t.length; ++r < i;) n.remove(t[r]);
}
function nr(e) {
	return function() {
		er(this, e);
	};
}
function rr(e) {
	return function() {
		tr(this, e);
	};
}
function ir(e, t) {
	return function() {
		(t.apply(this, arguments) ? er : tr)(this, e);
	};
}
function ar(e, t) {
	var n = Zn(e + "");
	if (arguments.length < 2) {
		for (var r = Qn(this.node()), i = -1, a = n.length; ++i < a;) if (!r.contains(n[i])) return !1;
		return !0;
	}
	return this.each((typeof t == "function" ? ir : t ? nr : rr)(n, t));
}
//#endregion
//#region node_modules/d3-selection/src/selection/text.js
function or() {
	this.textContent = "";
}
function sr(e) {
	return function() {
		this.textContent = e;
	};
}
function cr(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.textContent = t ?? "";
	};
}
function lr(e) {
	return arguments.length ? this.each(e == null ? or : (typeof e == "function" ? cr : sr)(e)) : this.node().textContent;
}
//#endregion
//#region node_modules/d3-selection/src/selection/html.js
function ur() {
	this.innerHTML = "";
}
function dr(e) {
	return function() {
		this.innerHTML = e;
	};
}
function fr(e) {
	return function() {
		var t = e.apply(this, arguments);
		this.innerHTML = t ?? "";
	};
}
function pr(e) {
	return arguments.length ? this.each(e == null ? ur : (typeof e == "function" ? fr : dr)(e)) : this.node().innerHTML;
}
//#endregion
//#region node_modules/d3-selection/src/selection/raise.js
function mr() {
	this.nextSibling && this.parentNode.appendChild(this);
}
function hr() {
	return this.each(mr);
}
//#endregion
//#region node_modules/d3-selection/src/selection/lower.js
function gr() {
	this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function _r() {
	return this.each(gr);
}
//#endregion
//#region node_modules/d3-selection/src/selection/append.js
function vr(e) {
	var t = typeof e == "function" ? e : Kt(e);
	return this.select(function() {
		return this.appendChild(t.apply(this, arguments));
	});
}
//#endregion
//#region node_modules/d3-selection/src/selection/insert.js
function yr() {
	return null;
}
function br(e, t) {
	var n = typeof e == "function" ? e : Kt(e), r = t == null ? yr : typeof t == "function" ? t : Jt(t);
	return this.select(function() {
		return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
	});
}
//#endregion
//#region node_modules/d3-selection/src/selection/remove.js
function xr() {
	var e = this.parentNode;
	e && e.removeChild(this);
}
function Sr() {
	return this.each(xr);
}
//#endregion
//#region node_modules/d3-selection/src/selection/clone.js
function Cr() {
	var e = this.cloneNode(!1), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function wr() {
	var e = this.cloneNode(!0), t = this.parentNode;
	return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Tr(e) {
	return this.select(e ? wr : Cr);
}
//#endregion
//#region node_modules/d3-selection/src/selection/datum.js
function Er(e) {
	return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
//#endregion
//#region node_modules/d3-selection/src/selection/on.js
function Dr(e) {
	return function(t) {
		e.call(this, t, this.__data__);
	};
}
function Or(e) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var t = "", n = e.indexOf(".");
		return n >= 0 && (t = e.slice(n + 1), e = e.slice(0, n)), {
			type: e,
			name: t
		};
	});
}
function kr(e) {
	return function() {
		var t = this.__on;
		if (t) {
			for (var n = 0, r = -1, i = t.length, a; n < i; ++n) a = t[n], (!e.type || a.type === e.type) && a.name === e.name ? this.removeEventListener(a.type, a.listener, a.options) : t[++r] = a;
			++r ? t.length = r : delete this.__on;
		}
	};
}
function Ar(e, t, n) {
	return function() {
		var r = this.__on, i, a = Dr(t);
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
function jr(e, t, n) {
	var r = Or(e + ""), i, a = r.length, o;
	if (arguments.length < 2) {
		var s = this.node().__on;
		if (s) {
			for (var c = 0, l = s.length, u; c < l; ++c) for (i = 0, u = s[c]; i < a; ++i) if ((o = r[i]).type === u.type && o.name === u.name) return u.value;
		}
		return;
	}
	for (s = t ? Ar : kr, i = 0; i < a; ++i) this.each(s(r[i], t, n));
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/dispatch.js
function Mr(e, t, n) {
	var r = Vn(e), i = r.CustomEvent;
	typeof i == "function" ? i = new i(t, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function Nr(e, t) {
	return function() {
		return Mr(this, e, t);
	};
}
function Pr(e, t) {
	return function() {
		return Mr(this, e, t.apply(this, arguments));
	};
}
function Fr(e, t) {
	return this.each((typeof t == "function" ? Pr : Nr)(e, t));
}
//#endregion
//#region node_modules/d3-selection/src/selection/iterator.js
function* Ir() {
	for (var e = this._groups, t = 0, n = e.length; t < n; ++t) for (var r = e[t], i = 0, a = r.length, o; i < a; ++i) (o = r[i]) && (yield o);
}
//#endregion
//#region node_modules/d3-selection/src/selection/index.js
var Lr = [null];
function W(e, t) {
	this._groups = e, this._parents = t;
}
function Rr() {
	return new W([[document.documentElement]], Lr);
}
function zr() {
	return this;
}
W.prototype = Rr.prototype = {
	constructor: W,
	select: Yt,
	selectAll: en,
	selectChild: sn,
	selectChildren: dn,
	filter: fn,
	data: bn,
	enter: mn,
	exit: Sn,
	join: Cn,
	merge: wn,
	selection: zr,
	order: Tn,
	sort: En,
	call: On,
	nodes: kn,
	node: An,
	size: jn,
	empty: Mn,
	each: Nn,
	attr: Bn,
	style: Gn,
	property: Xn,
	classed: ar,
	text: lr,
	html: pr,
	raise: hr,
	lower: _r,
	append: vr,
	insert: br,
	remove: Sr,
	clone: Tr,
	datum: Er,
	on: jr,
	dispatch: Fr,
	[Symbol.iterator]: Ir
};
//#endregion
//#region node_modules/d3-selection/src/select.js
function G(e) {
	return typeof e == "string" ? new W([[document.querySelector(e)]], [document.documentElement]) : new W([[e]], Lr);
}
//#endregion
//#region node_modules/d3-selection/src/sourceEvent.js
function Br(e) {
	let t;
	for (; t = e.sourceEvent;) e = t;
	return e;
}
//#endregion
//#region node_modules/d3-selection/src/pointer.js
function Vr(e, t) {
	if (e = Br(e), t === void 0 && (t = e.currentTarget), t) {
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
var Hr = { value: () => {} };
function Ur() {
	for (var e = 0, t = arguments.length, n = {}, r; e < t; ++e) {
		if (!(r = arguments[e] + "") || r in n || /[\s.]/.test(r)) throw Error("illegal type: " + r);
		n[r] = [];
	}
	return new Wr(n);
}
function Wr(e) {
	this._ = e;
}
function Gr(e, t) {
	return e.trim().split(/^|\s+/).map(function(e) {
		var n = "", r = e.indexOf(".");
		if (r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), e && !t.hasOwnProperty(e)) throw Error("unknown type: " + e);
		return {
			type: e,
			name: n
		};
	});
}
Wr.prototype = Ur.prototype = {
	constructor: Wr,
	on: function(e, t) {
		var n = this._, r = Gr(e + "", n), i, a = -1, o = r.length;
		if (arguments.length < 2) {
			for (; ++a < o;) if ((i = (e = r[a]).type) && (i = Kr(n[i], e.name))) return i;
			return;
		}
		if (t != null && typeof t != "function") throw Error("invalid callback: " + t);
		for (; ++a < o;) if (i = (e = r[a]).type) n[i] = qr(n[i], e.name, t);
		else if (t == null) for (i in n) n[i] = qr(n[i], e.name, null);
		return this;
	},
	copy: function() {
		var e = {}, t = this._;
		for (var n in t) e[n] = t[n].slice();
		return new Wr(e);
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
function Kr(e, t) {
	for (var n = 0, r = e.length, i; n < r; ++n) if ((i = e[n]).name === t) return i.value;
}
function qr(e, t, n) {
	for (var r = 0, i = e.length; r < i; ++r) if (e[r].name === t) {
		e[r] = Hr, e = e.slice(0, r).concat(e.slice(r + 1));
		break;
	}
	return n != null && e.push({
		name: t,
		value: n
	}), e;
}
//#endregion
//#region node_modules/d3-timer/src/timer.js
var Jr = 0, Yr = 0, Xr = 0, Zr = 1e3, Qr, $r, ei = 0, ti = 0, ni = 0, ri = typeof performance == "object" && performance.now ? performance : Date, ii = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
	setTimeout(e, 17);
};
function ai() {
	return ti ||= (ii(oi), ri.now() + ni);
}
function oi() {
	ti = 0;
}
function si() {
	this._call = this._time = this._next = null;
}
si.prototype = ci.prototype = {
	constructor: si,
	restart: function(e, t, n) {
		if (typeof e != "function") throw TypeError("callback is not a function");
		n = (n == null ? ai() : +n) + (t == null ? 0 : +t), !this._next && $r !== this && ($r ? $r._next = this : Qr = this, $r = this), this._call = e, this._time = n, pi();
	},
	stop: function() {
		this._call && (this._call = null, this._time = Infinity, pi());
	}
};
function ci(e, t, n) {
	var r = new si();
	return r.restart(e, t, n), r;
}
function li() {
	ai(), ++Jr;
	for (var e = Qr, t; e;) (t = ti - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
	--Jr;
}
function ui() {
	ti = (ei = ri.now()) + ni, Jr = Yr = 0;
	try {
		li();
	} finally {
		Jr = 0, fi(), ti = 0;
	}
}
function di() {
	var e = ri.now(), t = e - ei;
	t > Zr && (ni -= t, ei = e);
}
function fi() {
	for (var e, t = Qr, n, r = Infinity; t;) t._call ? (r > t._time && (r = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Qr = n);
	$r = e, pi(r);
}
function pi(e) {
	Jr || (Yr &&= clearTimeout(Yr), e - ti > 24 ? (e < Infinity && (Yr = setTimeout(ui, e - ri.now() - ni)), Xr &&= clearInterval(Xr)) : (Xr ||= (ei = ri.now(), setInterval(di, Zr)), Jr = 1, ii(ui)));
}
//#endregion
//#region node_modules/d3-timer/src/timeout.js
function mi(e, t, n) {
	var r = new si();
	return t = t == null ? 0 : +t, r.restart((n) => {
		r.stop(), e(n + t);
	}, t, n), r;
}
//#endregion
//#region node_modules/d3-transition/src/transition/schedule.js
var hi = Ur("start", "end", "cancel", "interrupt"), gi = [];
function _i(e, t, n, r, i, a) {
	var o = e.__transition;
	if (!o) e.__transition = {};
	else if (n in o) return;
	yi(e, n, {
		name: t,
		index: r,
		group: i,
		on: hi,
		tween: gi,
		time: a.time,
		delay: a.delay,
		duration: a.duration,
		ease: a.ease,
		timer: null,
		state: 0
	});
}
function vi(e, t) {
	var n = q(e, t);
	if (n.state > 0) throw Error("too late; already scheduled");
	return n;
}
function K(e, t) {
	var n = q(e, t);
	if (n.state > 3) throw Error("too late; already running");
	return n;
}
function q(e, t) {
	var n = e.__transition;
	if (!n || !(n = n[t])) throw Error("transition not found");
	return n;
}
function yi(e, t, n) {
	var r = e.__transition, i;
	r[t] = n, n.timer = ci(a, 0, n.time);
	function a(e) {
		n.state = 1, n.timer.restart(o, n.delay, n.time), n.delay <= e && o(e - n.delay);
	}
	function o(a) {
		var l, u, d, f;
		if (n.state !== 1) return c();
		for (l in r) if (f = r[l], f.name === n.name) {
			if (f.state === 3) return mi(o);
			f.state === 4 ? (f.state = 6, f.timer.stop(), f.on.call("interrupt", e, e.__data__, f.index, f.group), delete r[l]) : +l < t && (f.state = 6, f.timer.stop(), f.on.call("cancel", e, e.__data__, f.index, f.group), delete r[l]);
		}
		if (mi(function() {
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
function bi(e, t) {
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
function xi(e) {
	return this.each(function() {
		bi(this, e);
	});
}
//#endregion
//#region node_modules/d3-transition/src/transition/tween.js
function Si(e, t) {
	var n, r;
	return function() {
		var i = K(this, e), a = i.tween;
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
function Ci(e, t, n) {
	var r, i;
	if (typeof n != "function") throw Error();
	return function() {
		var a = K(this, e), o = a.tween;
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
function wi(e, t) {
	var n = this._id;
	if (e += "", arguments.length < 2) {
		for (var r = q(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i) if ((o = r[i]).name === e) return o.value;
		return null;
	}
	return this.each((t == null ? Si : Ci)(n, e, t));
}
function Ti(e, t, n) {
	var r = e._id;
	return e.each(function() {
		var e = K(this, r);
		(e.value ||= {})[t] = n.apply(this, arguments);
	}), function(e) {
		return q(e, r).value[t];
	};
}
//#endregion
//#region node_modules/d3-transition/src/transition/interpolate.js
function Ei(e, t) {
	var n;
	return (typeof t == "number" ? H : t instanceof L ? Le : (n = L(t)) ? (t = n, Le) : qe)(e, t);
}
//#endregion
//#region node_modules/d3-transition/src/transition/attr.js
function Di(e) {
	return function() {
		this.removeAttribute(e);
	};
}
function Oi(e) {
	return function() {
		this.removeAttributeNS(e.space, e.local);
	};
}
function ki(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttribute(e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function Ai(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = this.getAttributeNS(e.space, e.local);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function ji(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttribute(e) : (o = this.getAttribute(e), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function Mi(e, t, n) {
	var r, i, a;
	return function() {
		var o, s = n(this), c;
		return s == null ? void this.removeAttributeNS(e.space, e.local) : (o = this.getAttributeNS(e.space, e.local), c = s + "", o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s)));
	};
}
function Ni(e, t) {
	var n = Ut(e), r = n === "transform" ? it : Ei;
	return this.attrTween(e, typeof t == "function" ? (n.local ? Mi : ji)(n, r, Ti(this, "attr." + e, t)) : t == null ? (n.local ? Oi : Di)(n) : (n.local ? Ai : ki)(n, r, t));
}
//#endregion
//#region node_modules/d3-transition/src/transition/attrTween.js
function Pi(e, t) {
	return function(n) {
		this.setAttribute(e, t.call(this, n));
	};
}
function Fi(e, t) {
	return function(n) {
		this.setAttributeNS(e.space, e.local, t.call(this, n));
	};
}
function Ii(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && Fi(e, i)), n;
	}
	return i._value = t, i;
}
function Li(e, t) {
	var n, r;
	function i() {
		var i = t.apply(this, arguments);
		return i !== r && (n = (r = i) && Pi(e, i)), n;
	}
	return i._value = t, i;
}
function Ri(e, t) {
	var n = "attr." + e;
	if (arguments.length < 2) return (n = this.tween(n)) && n._value;
	if (t == null) return this.tween(n, null);
	if (typeof t != "function") throw Error();
	var r = Ut(e);
	return this.tween(n, (r.local ? Ii : Li)(r, t));
}
//#endregion
//#region node_modules/d3-transition/src/transition/delay.js
function zi(e, t) {
	return function() {
		vi(this, e).delay = +t.apply(this, arguments);
	};
}
function Bi(e, t) {
	return t = +t, function() {
		vi(this, e).delay = t;
	};
}
function Vi(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? zi : Bi)(t, e)) : q(this.node(), t).delay;
}
//#endregion
//#region node_modules/d3-transition/src/transition/duration.js
function Hi(e, t) {
	return function() {
		K(this, e).duration = +t.apply(this, arguments);
	};
}
function Ui(e, t) {
	return t = +t, function() {
		K(this, e).duration = t;
	};
}
function Wi(e) {
	var t = this._id;
	return arguments.length ? this.each((typeof e == "function" ? Hi : Ui)(t, e)) : q(this.node(), t).duration;
}
//#endregion
//#region node_modules/d3-transition/src/transition/ease.js
function Gi(e, t) {
	if (typeof t != "function") throw Error();
	return function() {
		K(this, e).ease = t;
	};
}
function Ki(e) {
	var t = this._id;
	return arguments.length ? this.each(Gi(t, e)) : q(this.node(), t).ease;
}
//#endregion
//#region node_modules/d3-transition/src/transition/easeVarying.js
function qi(e, t) {
	return function() {
		var n = t.apply(this, arguments);
		if (typeof n != "function") throw Error();
		K(this, e).ease = n;
	};
}
function Ji(e) {
	if (typeof e != "function") throw Error();
	return this.each(qi(this._id, e));
}
//#endregion
//#region node_modules/d3-transition/src/transition/filter.js
function Yi(e) {
	typeof e != "function" && (e = tn(e));
	for (var t = this._groups, n = t.length, r = Array(n), i = 0; i < n; ++i) for (var a = t[i], o = a.length, s = r[i] = [], c, l = 0; l < o; ++l) (c = a[l]) && e.call(c, c.__data__, l, a) && s.push(c);
	return new J(r, this._parents, this._name, this._id);
}
//#endregion
//#region node_modules/d3-transition/src/transition/merge.js
function Xi(e) {
	if (e._id !== this._id) throw Error();
	for (var t = this._groups, n = e._groups, r = t.length, i = n.length, a = Math.min(r, i), o = Array(r), s = 0; s < a; ++s) for (var c = t[s], l = n[s], u = c.length, d = o[s] = Array(u), f, p = 0; p < u; ++p) (f = c[p] || l[p]) && (d[p] = f);
	for (; s < r; ++s) o[s] = t[s];
	return new J(o, this._parents, this._name, this._id);
}
//#endregion
//#region node_modules/d3-transition/src/transition/on.js
function Zi(e) {
	return (e + "").trim().split(/^|\s+/).every(function(e) {
		var t = e.indexOf(".");
		return t >= 0 && (e = e.slice(0, t)), !e || e === "start";
	});
}
function Qi(e, t, n) {
	var r, i, a = Zi(t) ? vi : K;
	return function() {
		var o = a(this, e), s = o.on;
		s !== r && (i = (r = s).copy()).on(t, n), o.on = i;
	};
}
function $i(e, t) {
	var n = this._id;
	return arguments.length < 2 ? q(this.node(), n).on.on(e) : this.each(Qi(n, e, t));
}
//#endregion
//#region node_modules/d3-transition/src/transition/remove.js
function ea(e) {
	return function() {
		var t = this.parentNode;
		for (var n in this.__transition) if (+n !== e) return;
		t && t.removeChild(this);
	};
}
function ta() {
	return this.on("end.remove", ea(this._id));
}
//#endregion
//#region node_modules/d3-transition/src/transition/select.js
function na(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = Jt(e));
	for (var r = this._groups, i = r.length, a = Array(i), o = 0; o < i; ++o) for (var s = r[o], c = s.length, l = a[o] = Array(c), u, d, f = 0; f < c; ++f) (u = s[f]) && (d = e.call(u, u.__data__, f, s)) && ("__data__" in u && (d.__data__ = u.__data__), l[f] = d, _i(l[f], t, n, f, l, q(u, n)));
	return new J(a, this._parents, t, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/selectAll.js
function ra(e) {
	var t = this._name, n = this._id;
	typeof e != "function" && (e = Qt(e));
	for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s) for (var c = r[s], l = c.length, u, d = 0; d < l; ++d) if (u = c[d]) {
		for (var f = e.call(u, u.__data__, d, c), p, m = q(u, n), h = 0, g = f.length; h < g; ++h) (p = f[h]) && _i(p, t, n, h, f, m);
		a.push(f), o.push(u);
	}
	return new J(a, o, t, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/selection.js
var ia = Rr.prototype.constructor;
function aa() {
	return new ia(this._groups, this._parents);
}
//#endregion
//#region node_modules/d3-transition/src/transition/style.js
function oa(e, t) {
	var n, r, i;
	return function() {
		var a = Kn(this, e), o = (this.style.removeProperty(e), Kn(this, e));
		return a === o ? null : a === n && o === r ? i : i = t(n = a, r = o);
	};
}
function sa(e) {
	return function() {
		this.style.removeProperty(e);
	};
}
function ca(e, t, n) {
	var r, i = n + "", a;
	return function() {
		var o = Kn(this, e);
		return o === i ? null : o === r ? a : a = t(r = o, n);
	};
}
function la(e, t, n) {
	var r, i, a;
	return function() {
		var o = Kn(this, e), s = n(this), c = s + "";
		return s ?? (c = s = (this.style.removeProperty(e), Kn(this, e))), o === c ? null : o === r && c === i ? a : (i = c, a = t(r = o, s));
	};
}
function ua(e, t) {
	var n, r, i, a = "style." + t, o = "end." + a, s;
	return function() {
		var c = K(this, e), l = c.on, u = c.value[a] == null ? s ||= sa(t) : void 0;
		(l !== n || i !== u) && (r = (n = l).copy()).on(o, i = u), c.on = r;
	};
}
function da(e, t, n) {
	var r = (e += "") == "transform" ? rt : Ei;
	return t == null ? this.styleTween(e, oa(e, r)).on("end.style." + e, sa(e)) : typeof t == "function" ? this.styleTween(e, la(e, r, Ti(this, "style." + e, t))).each(ua(this._id, e)) : this.styleTween(e, ca(e, r, t), n).on("end.style." + e, null);
}
//#endregion
//#region node_modules/d3-transition/src/transition/styleTween.js
function fa(e, t, n) {
	return function(r) {
		this.style.setProperty(e, t.call(this, r), n);
	};
}
function pa(e, t, n) {
	var r, i;
	function a() {
		var a = t.apply(this, arguments);
		return a !== i && (r = (i = a) && fa(e, a, n)), r;
	}
	return a._value = t, a;
}
function ma(e, t, n) {
	var r = "style." + (e += "");
	if (arguments.length < 2) return (r = this.tween(r)) && r._value;
	if (t == null) return this.tween(r, null);
	if (typeof t != "function") throw Error();
	return this.tween(r, pa(e, t, n ?? ""));
}
//#endregion
//#region node_modules/d3-transition/src/transition/text.js
function ha(e) {
	return function() {
		this.textContent = e;
	};
}
function ga(e) {
	return function() {
		var t = e(this);
		this.textContent = t ?? "";
	};
}
function _a(e) {
	return this.tween("text", typeof e == "function" ? ga(Ti(this, "text", e)) : ha(e == null ? "" : e + ""));
}
//#endregion
//#region node_modules/d3-transition/src/transition/textTween.js
function va(e) {
	return function(t) {
		this.textContent = e.call(this, t);
	};
}
function ya(e) {
	var t, n;
	function r() {
		var r = e.apply(this, arguments);
		return r !== n && (t = (n = r) && va(r)), t;
	}
	return r._value = e, r;
}
function ba(e) {
	var t = "text";
	if (arguments.length < 1) return (t = this.tween(t)) && t._value;
	if (e == null) return this.tween(t, null);
	if (typeof e != "function") throw Error();
	return this.tween(t, ya(e));
}
//#endregion
//#region node_modules/d3-transition/src/transition/transition.js
function xa() {
	for (var e = this._name, t = this._id, n = Ta(), r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) if (c = o[l]) {
		var u = q(c, t);
		_i(c, e, n, l, o, {
			time: u.time + u.delay + u.duration,
			delay: 0,
			duration: u.duration,
			ease: u.ease
		});
	}
	return new J(r, this._parents, e, n);
}
//#endregion
//#region node_modules/d3-transition/src/transition/end.js
function Sa() {
	var e, t, n = this, r = n._id, i = n.size();
	return new Promise(function(a, o) {
		var s = { value: o }, c = { value: function() {
			--i === 0 && a();
		} };
		n.each(function() {
			var n = K(this, r), i = n.on;
			i !== e && (t = (e = i).copy(), t._.cancel.push(s), t._.interrupt.push(s), t._.end.push(c)), n.on = t;
		}), i === 0 && a();
	});
}
//#endregion
//#region node_modules/d3-transition/src/transition/index.js
var Ca = 0;
function J(e, t, n, r) {
	this._groups = e, this._parents = t, this._name = n, this._id = r;
}
function wa(e) {
	return Rr().transition(e);
}
function Ta() {
	return ++Ca;
}
var Y = Rr.prototype;
J.prototype = wa.prototype = {
	constructor: J,
	select: na,
	selectAll: ra,
	selectChild: Y.selectChild,
	selectChildren: Y.selectChildren,
	filter: Yi,
	merge: Xi,
	selection: aa,
	transition: xa,
	call: Y.call,
	nodes: Y.nodes,
	node: Y.node,
	size: Y.size,
	empty: Y.empty,
	each: Y.each,
	on: $i,
	attr: Ni,
	attrTween: Ri,
	style: da,
	styleTween: ma,
	text: _a,
	textTween: ba,
	remove: ta,
	tween: wi,
	delay: Vi,
	duration: Wi,
	ease: Ki,
	easeVarying: Ji,
	end: Sa,
	[Symbol.iterator]: Y[Symbol.iterator]
};
//#endregion
//#region node_modules/d3-ease/src/cubic.js
function Ea(e) {
	return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
//#endregion
//#region node_modules/d3-transition/src/selection/transition.js
var Da = {
	time: null,
	delay: 0,
	duration: 250,
	ease: Ea
};
function Oa(e, t) {
	for (var n; !(n = e.__transition) || !(n = n[t]);) if (!(e = e.parentNode)) throw Error(`transition ${t} not found`);
	return n;
}
function ka(e) {
	var t, n;
	e instanceof J ? (t = e._id, e = e._name) : (t = Ta(), (n = Da).time = ai(), e = e == null ? null : e + "");
	for (var r = this._groups, i = r.length, a = 0; a < i; ++a) for (var o = r[a], s = o.length, c, l = 0; l < s; ++l) (c = o[l]) && _i(c, e, t, l, o, n || Oa(c, t));
	return new J(r, this._parents, e, t);
}
Rr.prototype.interrupt = xi, Rr.prototype.transition = ka;
//#endregion
//#region node_modules/d3-drag/src/noevent.js
var Aa = {
	capture: !0,
	passive: !1
};
function ja(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
//#endregion
//#region node_modules/d3-drag/src/nodrag.js
function Ma(e) {
	var t = e.document.documentElement, n = G(e).on("dragstart.drag", ja, Aa);
	"onselectstart" in t ? n.on("selectstart.drag", ja, Aa) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Na(e, t) {
	var n = e.document.documentElement, r = G(e).on("dragstart.drag", null);
	t && (r.on("click.drag", ja, Aa), setTimeout(function() {
		r.on("click.drag", null);
	}, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
//#endregion
//#region node_modules/d3-brush/src/constant.js
var Pa = (e) => () => e;
//#endregion
//#region node_modules/d3-brush/src/event.js
function Fa(e, { sourceEvent: t, target: n, selection: r, mode: i, dispatch: a }) {
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
function Ia(e) {
	e.stopImmediatePropagation();
}
function La(e) {
	e.preventDefault(), e.stopImmediatePropagation();
}
//#endregion
//#region node_modules/d3-brush/src/brush.js
var Ra = { name: "drag" }, za = { name: "space" }, Ba = { name: "handle" }, X = { name: "center" }, { abs: Va, max: Z, min: Q } = Math;
function Ha(e) {
	return [+e[0], +e[1]];
}
function Ua(e) {
	return [Ha(e[0]), Ha(e[1])];
}
var Wa = {
	name: "x",
	handles: ["w", "e"].map(Xa),
	input: function(e, t) {
		return e == null ? null : [[+e[0], t[0][1]], [+e[1], t[1][1]]];
	},
	output: function(e) {
		return e && [e[0][0], e[1][0]];
	}
}, Ga = {
	name: "y",
	handles: ["n", "s"].map(Xa),
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
].map(Xa);
var $ = {
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
}, Ka = {
	e: "w",
	w: "e",
	nw: "ne",
	ne: "nw",
	se: "sw",
	sw: "se"
}, qa = {
	n: "s",
	s: "n",
	nw: "sw",
	ne: "se",
	se: "ne",
	sw: "nw"
}, Ja = {
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
}, Ya = {
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
function Xa(e) {
	return { type: e };
}
function Za(e) {
	return !e.ctrlKey && !e.button;
}
function Qa() {
	var e = this.ownerSVGElement || this;
	return e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
}
function $a() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function eo(e) {
	for (; !e.__brush;) if (!(e = e.parentNode)) return;
	return e.__brush;
}
function to(e) {
	return e[0][0] === e[1][0] || e[0][1] === e[1][1];
}
function no() {
	return ro(Wa);
}
function ro(e) {
	var t = Qa, n = Za, r = $a, i = !0, a = Ur("start", "brush", "end"), o = 6, s;
	function c(t) {
		var n = t.property("__brush", h).selectAll(".overlay").data([Xa("overlay")]);
		n.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", $.overlay).merge(n).each(function() {
			var e = eo(this).extent;
			G(this).attr("x", e[0][0]).attr("y", e[0][1]).attr("width", e[1][0] - e[0][0]).attr("height", e[1][1] - e[0][1]);
		}), t.selectAll(".selection").data([Xa("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", $.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
		var i = t.selectAll(".handle").data(e.handles, function(e) {
			return e.type;
		});
		i.exit().remove(), i.enter().append("rect").attr("class", function(e) {
			return "handle handle--" + e.type;
		}).attr("cursor", function(e) {
			return $[e.type];
		}), t.each(l).attr("fill", "none").attr("pointer-events", "all").on("mousedown.brush", f).filter(r).on("touchstart.brush", f).on("touchmove.brush", p).on("touchend.brush touchcancel.brush", m).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	c.move = function(t, n, r) {
		t.tween ? t.on("start.brush", function(e) {
			u(this, arguments).beforestart().start(e);
		}).on("interrupt.brush end.brush", function(e) {
			u(this, arguments).end(e);
		}).tween("brush", function() {
			var t = this, r = t.__brush, i = u(t, arguments), a = r.selection, o = e.input(typeof n == "function" ? n.apply(this, arguments) : n, r.extent), s = Je(a, o);
			function c(e) {
				r.selection = e === 1 && o === null ? null : s(e), l.call(t), i.brush();
			}
			return a !== null && o !== null ? c : c(1);
		}) : t.each(function() {
			var t = this, i = arguments, a = t.__brush, o = e.input(typeof n == "function" ? n.apply(t, i) : n, a.extent), s = u(t, i).beforestart();
			bi(t), a.selection = o === null ? null : o, l.call(t), s.start(r).brush(r).end(r);
		});
	}, c.clear = function(e, t) {
		c.move(e, null, t);
	};
	function l() {
		var e = G(this), t = eo(this).selection;
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
			var i = G(this.that).datum();
			a.call(t, this.that, new Fa(t, {
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
		var r = this, a = t.target.__data__.type, o = (i && t.metaKey ? a = "overlay" : a) === "selection" ? Ra : i && t.altKey ? X : Ba, c = e === Ga ? null : Ja[a], d = e === Wa ? null : Ya[a], f = eo(r), p = f.extent, m = f.selection, h = p[0][0], g, _, v = p[0][1], y, b, x = p[1][0], S, C, w = p[1][1], T, E, D = 0, O = 0, ee, te = c && d && i && t.shiftKey, ne, re, k = Array.from(t.touches || [t], (e) => {
			let t = e.identifier;
			return e = Vr(e, r), e.point0 = e.slice(), e.identifier = t, e;
		});
		bi(r);
		var ie = u(r, arguments, !0).beforestart();
		if (a === "overlay") {
			m && (ee = !0);
			let n = [k[0], k[1] || k[0]];
			f.selection = m = [[g = e === Ga ? h : Q(n[0][0], n[1][0]), y = e === Wa ? v : Q(n[0][1], n[1][1])], [S = e === Ga ? x : Z(n[0][0], n[1][0]), T = e === Wa ? w : Z(n[0][1], n[1][1])]], k.length > 1 && N(t);
		} else g = m[0][0], y = m[0][1], S = m[1][0], T = m[1][1];
		_ = g, b = y, C = S, E = T;
		var ae = G(r).attr("pointer-events", "none"), A = ae.selectAll(".overlay").attr("cursor", $[a]);
		if (t.touches) ie.moved = M, ie.ended = P;
		else {
			var j = G(t.view).on("mousemove.brush", M, !0).on("mouseup.brush", P, !0);
			i && j.on("keydown.brush", F, !0).on("keyup.brush", I, !0), Ma(t.view);
		}
		l.call(r), ie.start(t, o.name);
		function M(e) {
			for (let t of e.changedTouches || [e]) for (let e of k) e.identifier === t.identifier && (e.cur = Vr(t, r));
			if (te && !ne && !re && k.length === 1) {
				let e = k[0];
				Va(e.cur[0] - e[0]) > Va(e.cur[1] - e[1]) ? re = !0 : ne = !0;
			}
			for (let e of k) e.cur && (e[0] = e.cur[0], e[1] = e.cur[1]);
			ee = !0, La(e), N(e);
		}
		function N(e) {
			let t = k[0], n = t.point0;
			var i;
			switch (D = t[0] - n[0], O = t[1] - n[1], o) {
				case za:
				case Ra:
					c && (D = Z(h - g, Q(x - S, D)), _ = g + D, C = S + D), d && (O = Z(v - y, Q(w - T, O)), b = y + O, E = T + O);
					break;
				case Ba:
					k[1] ? (c &&= (_ = Z(h, Q(x, k[0][0])), C = Z(h, Q(x, k[1][0])), 1), d &&= (b = Z(v, Q(w, k[0][1])), E = Z(v, Q(w, k[1][1])), 1)) : (c < 0 ? (D = Z(h - g, Q(x - g, D)), _ = g + D, C = S) : c > 0 && (D = Z(h - S, Q(x - S, D)), _ = g, C = S + D), d < 0 ? (O = Z(v - y, Q(w - y, O)), b = y + O, E = T) : d > 0 && (O = Z(v - T, Q(w - T, O)), b = y, E = T + O));
					break;
				case X:
					c && (_ = Z(h, Q(x, g - D * c)), C = Z(h, Q(x, S + D * c))), d && (b = Z(v, Q(w, y - O * d)), E = Z(v, Q(w, T + O * d)));
					break;
			}
			C < _ && (c *= -1, i = g, g = S, S = i, i = _, _ = C, C = i, a in Ka && A.attr("cursor", $[a = Ka[a]])), E < b && (d *= -1, i = y, y = T, T = i, i = b, b = E, E = i, a in qa && A.attr("cursor", $[a = qa[a]])), f.selection && (m = f.selection), ne && (_ = m[0][0], C = m[1][0]), re && (b = m[0][1], E = m[1][1]), (m[0][0] !== _ || m[0][1] !== b || m[1][0] !== C || m[1][1] !== E) && (f.selection = [[_, b], [C, E]], l.call(r), ie.brush(e, o.name));
		}
		function P(e) {
			if (Ia(e), e.touches) {
				if (e.touches.length) return;
				s && clearTimeout(s), s = setTimeout(function() {
					s = null;
				}, 500);
			} else Na(e.view, ee), j.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);
			ae.attr("pointer-events", "all"), A.attr("cursor", $.overlay), f.selection && (m = f.selection), to(m) && (f.selection = null, l.call(r)), ie.end(e, o.name);
		}
		function F(e) {
			switch (e.keyCode) {
				case 16:
					te = c && d;
					break;
				case 18:
					o === Ba && (c && (S = C - D * c, g = _ + D * c), d && (T = E - O * d, y = b + O * d), o = X, N(e));
					break;
				case 32:
					(o === Ba || o === X) && (c < 0 ? S = C - D : c > 0 && (g = _ - D), d < 0 ? T = E - O : d > 0 && (y = b - O), o = za, A.attr("cursor", $.selection), N(e));
					break;
				default: return;
			}
			La(e);
		}
		function I(e) {
			switch (e.keyCode) {
				case 16:
					te && (ne = re = te = !1, N(e));
					break;
				case 18:
					o === X && (c < 0 ? S = C : c > 0 && (g = _), d < 0 ? T = E : d > 0 && (y = b), o = Ba, N(e));
					break;
				case 32:
					o === za && (e.altKey ? (c && (S = C - D * c, g = _ + D * c), d && (T = E - O * d, y = b + O * d), o = X) : (c < 0 ? S = C : c > 0 && (g = _), d < 0 ? T = E : d > 0 && (y = b), o = Ba), A.attr("cursor", $[a]), N(e));
					break;
				default: return;
			}
			La(e);
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
		return n.extent = Ua(t.apply(this, arguments)), n.dim = e, n;
	}
	return c.extent = function(e) {
		return arguments.length ? (t = typeof e == "function" ? e : Pa(Ua(e)), c) : t;
	}, c.filter = function(e) {
		return arguments.length ? (n = typeof e == "function" ? e : Pa(!!e), c) : n;
	}, c.touchable = function(e) {
		return arguments.length ? (r = typeof e == "function" ? e : Pa(!!e), c) : r;
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
var io = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ao = {
	name: "HistogramSlider",
	props: c,
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
			await i();
			let t = document.querySelector(`#parent_${this.elementId}`).clientWidth - 20, n = this.min || k(this.data), r = this.max || re(this.data), a = this.type == "single", o, s, c, l, u, d, f, p;
			this.updateBarColor = (e) => {
				wa(wa().duration(this.transitionDuration)).selectAll(`.vue-histogram-slider-bar-${this.elementId}`).attr("fill", (t) => a ? t.x0 < e.from ? f(t.x0) : this.holderColor : t.x0 <= e.to && t.x0 >= e.from ? f(t.x0) : this.holderColor);
			}, c = Vt().domain([n, r]).range([0, t]).clamp(!0), l = Vt().range([this.barHeight, 0]), o = G(`#${this.elementId}`).attr("width", t).attr("height", this.barHeight), u = o.append("g").attr("class", "histogram"), this.clip && u.attr("clip-path", `url(#${this.clipId})`), f = this.colors ? Vt().domain([n, r]).range(this.colors) : () => this.primaryColor;
			let m = ([n, r]) => {
				let i = wa().duration(this.transitionDuration);
				u.selectAll(`.vue-histogram-slider-bar-${this.elementId}`).remove(), s = ne().domain(c.domain()).thresholds(t / (this.barWidth + this.barGap)), d = s(this.data), l.domain([0, re(d, (e) => e.length)]), u.selectAll(`.vue-histogram-slider-bar-${this.elementId}`).data(d).enter().insert("rect", "rect.overlay").attr("class", `vue-histogram-slider-bar-${this.elementId}`).attr("x", (e) => c(e.x0)).attr("y", (e) => l(e.length)).attr("rx", this.barRadius).attr("width", this.barWidth).transition(i).attr("height", (e) => this.barHeight - l(e.length)).attr("fill", (e) => a ? this.holderColor : f(e.x0)), this.ionRangeSlider && this.ionRangeSlider.destroy(), this.histSlider = e(`#${this.histogramId}`).ionRangeSlider({
					skin: "round",
					min: n,
					max: r,
					from: n,
					to: r,
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
			this.clip && (p = no().on("end", (e) => {
				let t = e.selection;
				if (t) {
					let e = [c.invert(t[0]), c.invert(t[1])];
					c.domain(e), this.minPos = this.ionRangeSlider.result.from, this.maxPos = this.ionRangeSlider.result.to;
					let n = {
						from: Math.max(e[0], this.ionRangeSlider.result.from),
						to: Math.min(e[1], this.ionRangeSlider.result.to)
					};
					this.$emit("finish", n), this.$emit("change", n), this.zoomed = !0, m(e), u.call(p.clear);
				}
			}), u.call(p)), m([n, r]);
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
			G(`#${this.elementId}`).selectAll("*").remove(), await this.init();
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
}, oo = ["id"], so = ["id"], co = ["id"], lo = ["height"], uo = { class: "slider-wrapper" }, fo = ["id", "name"];
function po(e, i, c, l, u, d) {
	return o(), n("div", {
		style: a(d.style),
		id: `parent_${d.elementId}`,
		class: "vue-histogram-slider-wrapper"
	}, [
		e.resettable && u.zoomed ? s(e.$slots, "default", {
			key: 0,
			reset: d.reset
		}, () => [r("button", { onClick: i[0] ||= (...e) => d.reset && d.reset(...e) }, "Reset zoom")]) : t("", !0),
		(o(), n("svg", {
			id: d.elementId,
			class: "vue-histogram-view"
		}, [r("defs", null, [r("clipPath", { id: d.clipId }, [r("rect", {
			width: "100%",
			height: e.barHeight,
			x: "0",
			y: "0"
		}, null, 8, lo)], 8, co)])], 8, so)),
		r("div", uo, [r("input", {
			type: "text",
			id: d.histogramId,
			name: d.histogramId,
			value: "",
			"aria-hidden": "true"
		}, null, 8, fo)])
	], 12, oo);
}
var mo = /*#__PURE__*/ io(ao, [["render", po]]), ho = mo;
//#endregion
export { mo as HistogramSlider, ho as default };
