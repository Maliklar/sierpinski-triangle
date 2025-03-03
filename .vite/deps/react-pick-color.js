import {
  __toESM,
  require_react
} from "./chunk-AY6LENDD.js";

// node_modules/react-pick-color/build/index.es.js
var import_react = __toESM(require_react());
var i = function() {
  return (i = Object.assign || function(e2) {
    for (var r2, t2 = 1, n2 = arguments.length; t2 < n2; t2++) for (var a2 in r2 = arguments[t2]) Object.prototype.hasOwnProperty.call(r2, a2) && (e2[a2] = r2[a2]);
    return e2;
  }).apply(this, arguments);
};
function l(e2, r2, t2) {
  if (t2 || 2 === arguments.length) for (var n2, a2 = 0, o2 = r2.length; a2 < o2; a2++) !n2 && a2 in r2 || (n2 || (n2 = Array.prototype.slice.call(r2, 0, a2)), n2[a2] = r2[a2]);
  return e2.concat(n2 || Array.prototype.slice.call(r2));
}
var s;
var c = (function(e2) {
  !function(r2) {
    var t2 = /^\s+/, n2 = /\s+$/, a2 = 0, o2 = r2.round, i2 = r2.min, l2 = r2.max, s2 = r2.random;
    function c2(e3, s3) {
      if (s3 = s3 || {}, (e3 = e3 || "") instanceof c2) return e3;
      if (!(this instanceof c2)) return new c2(e3, s3);
      var u3 = function(e4) {
        var a3, o3, s4, c3 = { r: 0, g: 0, b: 0 }, u4 = 1, f3 = null, h3 = null, d3 = null, g3 = false, p3 = false;
        return "string" == typeof e4 && (e4 = function(e5) {
          e5 = e5.replace(t2, "").replace(n2, "").toLowerCase();
          var r3, a4 = false;
          if (R2[e5]) e5 = R2[e5], a4 = true;
          else if ("transparent" == e5) return { r: 0, g: 0, b: 0, a: 0, format: "name" };
          return (r3 = P2.rgb.exec(e5)) ? { r: r3[1], g: r3[2], b: r3[3] } : (r3 = P2.rgba.exec(e5)) ? { r: r3[1], g: r3[2], b: r3[3], a: r3[4] } : (r3 = P2.hsl.exec(e5)) ? { h: r3[1], s: r3[2], l: r3[3] } : (r3 = P2.hsla.exec(e5)) ? { h: r3[1], s: r3[2], l: r3[3], a: r3[4] } : (r3 = P2.hsv.exec(e5)) ? { h: r3[1], s: r3[2], v: r3[3] } : (r3 = P2.hsva.exec(e5)) ? { h: r3[1], s: r3[2], v: r3[3], a: r3[4] } : (r3 = P2.hex8.exec(e5)) ? { r: B2(r3[1]), g: B2(r3[2]), b: B2(r3[3]), a: O2(r3[4]), format: a4 ? "name" : "hex8" } : (r3 = P2.hex6.exec(e5)) ? { r: B2(r3[1]), g: B2(r3[2]), b: B2(r3[3]), format: a4 ? "name" : "hex" } : (r3 = P2.hex4.exec(e5)) ? { r: B2(r3[1] + "" + r3[1]), g: B2(r3[2] + "" + r3[2]), b: B2(r3[3] + "" + r3[3]), a: O2(r3[4] + "" + r3[4]), format: a4 ? "name" : "hex8" } : !!(r3 = P2.hex3.exec(e5)) && { r: B2(r3[1] + "" + r3[1]), g: B2(r3[2] + "" + r3[2]), b: B2(r3[3] + "" + r3[3]), format: a4 ? "name" : "hex" };
        }(e4)), "object" == typeof e4 && (j2(e4.r) && j2(e4.g) && j2(e4.b) ? (a3 = e4.r, o3 = e4.g, s4 = e4.b, c3 = { r: 255 * F2(a3, 255), g: 255 * F2(o3, 255), b: 255 * F2(s4, 255) }, g3 = true, p3 = "%" === String(e4.r).substr(-1) ? "prgb" : "rgb") : j2(e4.h) && j2(e4.s) && j2(e4.v) ? (f3 = N2(e4.s), h3 = N2(e4.v), c3 = function(e5, t3, n3) {
          e5 = 6 * F2(e5, 360), t3 = F2(t3, 100), n3 = F2(n3, 100);
          var a4 = r2.floor(e5), o4 = e5 - a4, i3 = n3 * (1 - t3), l3 = n3 * (1 - o4 * t3), s5 = n3 * (1 - (1 - o4) * t3), c4 = a4 % 6;
          return { r: 255 * [n3, l3, i3, i3, s5, n3][c4], g: 255 * [s5, n3, n3, l3, i3, i3][c4], b: 255 * [i3, i3, s5, n3, n3, l3][c4] };
        }(e4.h, f3, h3), g3 = true, p3 = "hsv") : j2(e4.h) && j2(e4.s) && j2(e4.l) && (f3 = N2(e4.s), d3 = N2(e4.l), c3 = function(e5, r3, t3) {
          var n3, a4, o4;
          function i3(e6, r4, t4) {
            return t4 < 0 && (t4 += 1), t4 > 1 && (t4 -= 1), t4 < 1 / 6 ? e6 + 6 * (r4 - e6) * t4 : t4 < 0.5 ? r4 : t4 < 2 / 3 ? e6 + (r4 - e6) * (2 / 3 - t4) * 6 : e6;
          }
          if (e5 = F2(e5, 360), r3 = F2(r3, 100), t3 = F2(t3, 100), 0 === r3) n3 = a4 = o4 = t3;
          else {
            var l3 = t3 < 0.5 ? t3 * (1 + r3) : t3 + r3 - t3 * r3, s5 = 2 * t3 - l3;
            n3 = i3(s5, l3, e5 + 1 / 3), a4 = i3(s5, l3, e5), o4 = i3(s5, l3, e5 - 1 / 3);
          }
          return { r: 255 * n3, g: 255 * a4, b: 255 * o4 };
        }(e4.h, f3, d3), g3 = true, p3 = "hsl"), e4.hasOwnProperty("a") && (u4 = e4.a)), u4 = H2(u4), { ok: g3, format: e4.format || p3, r: i2(255, l2(c3.r, 0)), g: i2(255, l2(c3.g, 0)), b: i2(255, l2(c3.b, 0)), a: u4 };
      }(e3);
      this._originalInput = e3, this._r = u3.r, this._g = u3.g, this._b = u3.b, this._a = u3.a, this._roundA = o2(100 * this._a) / 100, this._format = s3.format || u3.format, this._gradientType = s3.gradientType, this._r < 1 && (this._r = o2(this._r)), this._g < 1 && (this._g = o2(this._g)), this._b < 1 && (this._b = o2(this._b)), this._ok = u3.ok, this._tc_id = a2++;
    }
    function u2(e3, r3, t3) {
      e3 = F2(e3, 255), r3 = F2(r3, 255), t3 = F2(t3, 255);
      var n3, a3, o3 = l2(e3, r3, t3), s3 = i2(e3, r3, t3), c3 = (o3 + s3) / 2;
      if (o3 == s3) n3 = a3 = 0;
      else {
        var u3 = o3 - s3;
        switch (a3 = c3 > 0.5 ? u3 / (2 - o3 - s3) : u3 / (o3 + s3), o3) {
          case e3:
            n3 = (r3 - t3) / u3 + (r3 < t3 ? 6 : 0);
            break;
          case r3:
            n3 = (t3 - e3) / u3 + 2;
            break;
          case t3:
            n3 = (e3 - r3) / u3 + 4;
        }
        n3 /= 6;
      }
      return { h: n3, s: a3, l: c3 };
    }
    function f2(e3, r3, t3) {
      e3 = F2(e3, 255), r3 = F2(r3, 255), t3 = F2(t3, 255);
      var n3, a3, o3 = l2(e3, r3, t3), s3 = i2(e3, r3, t3), c3 = o3, u3 = o3 - s3;
      if (a3 = 0 === o3 ? 0 : u3 / o3, o3 == s3) n3 = 0;
      else {
        switch (o3) {
          case e3:
            n3 = (r3 - t3) / u3 + (r3 < t3 ? 6 : 0);
            break;
          case r3:
            n3 = (t3 - e3) / u3 + 2;
            break;
          case t3:
            n3 = (e3 - r3) / u3 + 4;
        }
        n3 /= 6;
      }
      return { h: n3, s: a3, v: c3 };
    }
    function h2(e3, r3, t3, n3) {
      var a3 = [U2(o2(e3).toString(16)), U2(o2(r3).toString(16)), U2(o2(t3).toString(16))];
      return n3 && a3[0].charAt(0) == a3[0].charAt(1) && a3[1].charAt(0) == a3[1].charAt(1) && a3[2].charAt(0) == a3[2].charAt(1) ? a3[0].charAt(0) + a3[1].charAt(0) + a3[2].charAt(0) : a3.join("");
    }
    function d2(e3, r3, t3, n3) {
      return [U2(z2(n3)), U2(o2(e3).toString(16)), U2(o2(r3).toString(16)), U2(o2(t3).toString(16))].join("");
    }
    function g2(e3, r3) {
      r3 = 0 === r3 ? 0 : r3 || 10;
      var t3 = c2(e3).toHsl();
      return t3.s -= r3 / 100, t3.s = I2(t3.s), c2(t3);
    }
    function p2(e3, r3) {
      r3 = 0 === r3 ? 0 : r3 || 10;
      var t3 = c2(e3).toHsl();
      return t3.s += r3 / 100, t3.s = I2(t3.s), c2(t3);
    }
    function b2(e3) {
      return c2(e3).desaturate(100);
    }
    function m2(e3, r3) {
      r3 = 0 === r3 ? 0 : r3 || 10;
      var t3 = c2(e3).toHsl();
      return t3.l += r3 / 100, t3.l = I2(t3.l), c2(t3);
    }
    function v2(e3, r3) {
      r3 = 0 === r3 ? 0 : r3 || 10;
      var t3 = c2(e3).toRgb();
      return t3.r = l2(0, i2(255, t3.r - o2(-r3 / 100 * 255))), t3.g = l2(0, i2(255, t3.g - o2(-r3 / 100 * 255))), t3.b = l2(0, i2(255, t3.b - o2(-r3 / 100 * 255))), c2(t3);
    }
    function x2(e3, r3) {
      r3 = 0 === r3 ? 0 : r3 || 10;
      var t3 = c2(e3).toHsl();
      return t3.l -= r3 / 100, t3.l = I2(t3.l), c2(t3);
    }
    function A2(e3, r3) {
      var t3 = c2(e3).toHsl(), n3 = (t3.h + r3) % 360;
      return t3.h = n3 < 0 ? 360 + n3 : n3, c2(t3);
    }
    function y2(e3) {
      var r3 = c2(e3).toHsl();
      return r3.h = (r3.h + 180) % 360, c2(r3);
    }
    function _2(e3) {
      var r3 = c2(e3).toHsl(), t3 = r3.h;
      return [c2(e3), c2({ h: (t3 + 120) % 360, s: r3.s, l: r3.l }), c2({ h: (t3 + 240) % 360, s: r3.s, l: r3.l })];
    }
    function w2(e3) {
      var r3 = c2(e3).toHsl(), t3 = r3.h;
      return [c2(e3), c2({ h: (t3 + 90) % 360, s: r3.s, l: r3.l }), c2({ h: (t3 + 180) % 360, s: r3.s, l: r3.l }), c2({ h: (t3 + 270) % 360, s: r3.s, l: r3.l })];
    }
    function k2(e3) {
      var r3 = c2(e3).toHsl(), t3 = r3.h;
      return [c2(e3), c2({ h: (t3 + 72) % 360, s: r3.s, l: r3.l }), c2({ h: (t3 + 216) % 360, s: r3.s, l: r3.l })];
    }
    function E2(e3, r3, t3) {
      r3 = r3 || 6, t3 = t3 || 30;
      var n3 = c2(e3).toHsl(), a3 = 360 / t3, o3 = [c2(e3)];
      for (n3.h = (n3.h - (a3 * r3 >> 1) + 720) % 360; --r3; ) n3.h = (n3.h + a3) % 360, o3.push(c2(n3));
      return o3;
    }
    function S2(e3, r3) {
      r3 = r3 || 6;
      for (var t3 = c2(e3).toHsv(), n3 = t3.h, a3 = t3.s, o3 = t3.v, i3 = [], l3 = 1 / r3; r3--; ) i3.push(c2({ h: n3, s: a3, v: o3 })), o3 = (o3 + l3) % 1;
      return i3;
    }
    c2.prototype = { isDark: function() {
      return this.getBrightness() < 128;
    }, isLight: function() {
      return !this.isDark();
    }, isValid: function() {
      return this._ok;
    }, getOriginalInput: function() {
      return this._originalInput;
    }, getFormat: function() {
      return this._format;
    }, getAlpha: function() {
      return this._a;
    }, getBrightness: function() {
      var e3 = this.toRgb();
      return (299 * e3.r + 587 * e3.g + 114 * e3.b) / 1e3;
    }, getLuminance: function() {
      var e3, t3, n3, a3 = this.toRgb();
      return e3 = a3.r / 255, t3 = a3.g / 255, n3 = a3.b / 255, 0.2126 * (e3 <= 0.03928 ? e3 / 12.92 : r2.pow((e3 + 0.055) / 1.055, 2.4)) + 0.7152 * (t3 <= 0.03928 ? t3 / 12.92 : r2.pow((t3 + 0.055) / 1.055, 2.4)) + 0.0722 * (n3 <= 0.03928 ? n3 / 12.92 : r2.pow((n3 + 0.055) / 1.055, 2.4));
    }, setAlpha: function(e3) {
      return this._a = H2(e3), this._roundA = o2(100 * this._a) / 100, this;
    }, toHsv: function() {
      var e3 = f2(this._r, this._g, this._b);
      return { h: 360 * e3.h, s: e3.s, v: e3.v, a: this._a };
    }, toHsvString: function() {
      var e3 = f2(this._r, this._g, this._b), r3 = o2(360 * e3.h), t3 = o2(100 * e3.s), n3 = o2(100 * e3.v);
      return 1 == this._a ? "hsv(" + r3 + ", " + t3 + "%, " + n3 + "%)" : "hsva(" + r3 + ", " + t3 + "%, " + n3 + "%, " + this._roundA + ")";
    }, toHsl: function() {
      var e3 = u2(this._r, this._g, this._b);
      return { h: 360 * e3.h, s: e3.s, l: e3.l, a: this._a };
    }, toHslString: function() {
      var e3 = u2(this._r, this._g, this._b), r3 = o2(360 * e3.h), t3 = o2(100 * e3.s), n3 = o2(100 * e3.l);
      return 1 == this._a ? "hsl(" + r3 + ", " + t3 + "%, " + n3 + "%)" : "hsla(" + r3 + ", " + t3 + "%, " + n3 + "%, " + this._roundA + ")";
    }, toHex: function(e3) {
      return h2(this._r, this._g, this._b, e3);
    }, toHexString: function(e3) {
      return "#" + this.toHex(e3);
    }, toHex8: function(e3) {
      return function(e4, r3, t3, n3, a3) {
        var i3 = [U2(o2(e4).toString(16)), U2(o2(r3).toString(16)), U2(o2(t3).toString(16)), U2(z2(n3))];
        return a3 && i3[0].charAt(0) == i3[0].charAt(1) && i3[1].charAt(0) == i3[1].charAt(1) && i3[2].charAt(0) == i3[2].charAt(1) && i3[3].charAt(0) == i3[3].charAt(1) ? i3[0].charAt(0) + i3[1].charAt(0) + i3[2].charAt(0) + i3[3].charAt(0) : i3.join("");
      }(this._r, this._g, this._b, this._a, e3);
    }, toHex8String: function(e3) {
      return "#" + this.toHex8(e3);
    }, toRgb: function() {
      return { r: o2(this._r), g: o2(this._g), b: o2(this._b), a: this._a };
    }, toRgbString: function() {
      return 1 == this._a ? "rgb(" + o2(this._r) + ", " + o2(this._g) + ", " + o2(this._b) + ")" : "rgba(" + o2(this._r) + ", " + o2(this._g) + ", " + o2(this._b) + ", " + this._roundA + ")";
    }, toPercentageRgb: function() {
      return { r: o2(100 * F2(this._r, 255)) + "%", g: o2(100 * F2(this._g, 255)) + "%", b: o2(100 * F2(this._b, 255)) + "%", a: this._a };
    }, toPercentageRgbString: function() {
      return 1 == this._a ? "rgb(" + o2(100 * F2(this._r, 255)) + "%, " + o2(100 * F2(this._g, 255)) + "%, " + o2(100 * F2(this._b, 255)) + "%)" : "rgba(" + o2(100 * F2(this._r, 255)) + "%, " + o2(100 * F2(this._g, 255)) + "%, " + o2(100 * F2(this._b, 255)) + "%, " + this._roundA + ")";
    }, toName: function() {
      return 0 === this._a ? "transparent" : !(this._a < 1) && (C2[h2(this._r, this._g, this._b, true)] || false);
    }, toFilter: function(e3) {
      var r3 = "#" + d2(this._r, this._g, this._b, this._a), t3 = r3, n3 = this._gradientType ? "GradientType = 1, " : "";
      if (e3) {
        var a3 = c2(e3);
        t3 = "#" + d2(a3._r, a3._g, a3._b, a3._a);
      }
      return "progid:DXImageTransform.Microsoft.gradient(" + n3 + "startColorstr=" + r3 + ",endColorstr=" + t3 + ")";
    }, toString: function(e3) {
      var r3 = !!e3;
      e3 = e3 || this._format;
      var t3 = false, n3 = this._a < 1 && this._a >= 0;
      return r3 || !n3 || "hex" !== e3 && "hex6" !== e3 && "hex3" !== e3 && "hex4" !== e3 && "hex8" !== e3 && "name" !== e3 ? ("rgb" === e3 && (t3 = this.toRgbString()), "prgb" === e3 && (t3 = this.toPercentageRgbString()), "hex" !== e3 && "hex6" !== e3 || (t3 = this.toHexString()), "hex3" === e3 && (t3 = this.toHexString(true)), "hex4" === e3 && (t3 = this.toHex8String(true)), "hex8" === e3 && (t3 = this.toHex8String()), "name" === e3 && (t3 = this.toName()), "hsl" === e3 && (t3 = this.toHslString()), "hsv" === e3 && (t3 = this.toHsvString()), t3 || this.toHexString()) : "name" === e3 && 0 === this._a ? this.toName() : this.toRgbString();
    }, clone: function() {
      return c2(this.toString());
    }, _applyModification: function(e3, r3) {
      var t3 = e3.apply(null, [this].concat([].slice.call(r3)));
      return this._r = t3._r, this._g = t3._g, this._b = t3._b, this.setAlpha(t3._a), this;
    }, lighten: function() {
      return this._applyModification(m2, arguments);
    }, brighten: function() {
      return this._applyModification(v2, arguments);
    }, darken: function() {
      return this._applyModification(x2, arguments);
    }, desaturate: function() {
      return this._applyModification(g2, arguments);
    }, saturate: function() {
      return this._applyModification(p2, arguments);
    }, greyscale: function() {
      return this._applyModification(b2, arguments);
    }, spin: function() {
      return this._applyModification(A2, arguments);
    }, _applyCombination: function(e3, r3) {
      return e3.apply(null, [this].concat([].slice.call(r3)));
    }, analogous: function() {
      return this._applyCombination(E2, arguments);
    }, complement: function() {
      return this._applyCombination(y2, arguments);
    }, monochromatic: function() {
      return this._applyCombination(S2, arguments);
    }, splitcomplement: function() {
      return this._applyCombination(k2, arguments);
    }, triad: function() {
      return this._applyCombination(_2, arguments);
    }, tetrad: function() {
      return this._applyCombination(w2, arguments);
    } }, c2.fromRatio = function(e3, r3) {
      if ("object" == typeof e3) {
        var t3 = {};
        for (var n3 in e3) e3.hasOwnProperty(n3) && (t3[n3] = "a" === n3 ? e3[n3] : N2(e3[n3]));
        e3 = t3;
      }
      return c2(e3, r3);
    }, c2.equals = function(e3, r3) {
      return !(!e3 || !r3) && c2(e3).toRgbString() == c2(r3).toRgbString();
    }, c2.random = function() {
      return c2.fromRatio({ r: s2(), g: s2(), b: s2() });
    }, c2.mix = function(e3, r3, t3) {
      t3 = 0 === t3 ? 0 : t3 || 50;
      var n3 = c2(e3).toRgb(), a3 = c2(r3).toRgb(), o3 = t3 / 100;
      return c2({ r: (a3.r - n3.r) * o3 + n3.r, g: (a3.g - n3.g) * o3 + n3.g, b: (a3.b - n3.b) * o3 + n3.b, a: (a3.a - n3.a) * o3 + n3.a });
    }, c2.readability = function(e3, t3) {
      var n3 = c2(e3), a3 = c2(t3);
      return (r2.max(n3.getLuminance(), a3.getLuminance()) + 0.05) / (r2.min(n3.getLuminance(), a3.getLuminance()) + 0.05);
    }, c2.isReadable = function(e3, r3, t3) {
      var n3, a3, o3, i3, l3, s3 = c2.readability(e3, r3);
      switch (a3 = false, (o3 = t3, i3 = ((o3 = o3 || { level: "AA", size: "small" }).level || "AA").toUpperCase(), l3 = (o3.size || "small").toLowerCase(), "AA" !== i3 && "AAA" !== i3 && (i3 = "AA"), "small" !== l3 && "large" !== l3 && (l3 = "small"), n3 = { level: i3, size: l3 }).level + n3.size) {
        case "AAsmall":
        case "AAAlarge":
          a3 = s3 >= 4.5;
          break;
        case "AAlarge":
          a3 = s3 >= 3;
          break;
        case "AAAsmall":
          a3 = s3 >= 7;
      }
      return a3;
    }, c2.mostReadable = function(e3, r3, t3) {
      var n3, a3, o3, i3, l3 = null, s3 = 0;
      a3 = (t3 = t3 || {}).includeFallbackColors, o3 = t3.level, i3 = t3.size;
      for (var u3 = 0; u3 < r3.length; u3++) (n3 = c2.readability(e3, r3[u3])) > s3 && (s3 = n3, l3 = c2(r3[u3]));
      return c2.isReadable(e3, l3, { level: o3, size: i3 }) || !a3 ? l3 : (t3.includeFallbackColors = false, c2.mostReadable(e3, ["#fff", "#000"], t3));
    };
    var R2 = c2.names = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "0ff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "00f", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", burntsienna: "ea7e5d", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "0ff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "f0f", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "663399", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" }, C2 = c2.hexNames = function(e3) {
      var r3 = {};
      for (var t3 in e3) e3.hasOwnProperty(t3) && (r3[e3[t3]] = t3);
      return r3;
    }(R2);
    function H2(e3) {
      return e3 = parseFloat(e3), (isNaN(e3) || e3 < 0 || e3 > 1) && (e3 = 1), e3;
    }
    function F2(e3, t3) {
      (function(e4) {
        return "string" == typeof e4 && -1 != e4.indexOf(".") && 1 === parseFloat(e4);
      })(e3) && (e3 = "100%");
      var n3 = function(e4) {
        return "string" == typeof e4 && -1 != e4.indexOf("%");
      }(e3);
      return e3 = i2(t3, l2(0, parseFloat(e3))), n3 && (e3 = parseInt(e3 * t3, 10) / 100), r2.abs(e3 - t3) < 1e-6 ? 1 : e3 % t3 / parseFloat(t3);
    }
    function I2(e3) {
      return i2(1, l2(0, e3));
    }
    function B2(e3) {
      return parseInt(e3, 16);
    }
    function U2(e3) {
      return 1 == e3.length ? "0" + e3 : "" + e3;
    }
    function N2(e3) {
      return e3 <= 1 && (e3 = 100 * e3 + "%"), e3;
    }
    function z2(e3) {
      return r2.round(255 * parseFloat(e3)).toString(16);
    }
    function O2(e3) {
      return B2(e3) / 255;
    }
    var M2, L2, T2, P2 = (L2 = "[\\s|\\(]+(" + (M2 = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + M2 + ")[,|\\s]+(" + M2 + ")\\s*\\)?", T2 = "[\\s|\\(]+(" + M2 + ")[,|\\s]+(" + M2 + ")[,|\\s]+(" + M2 + ")[,|\\s]+(" + M2 + ")\\s*\\)?", { CSS_UNIT: new RegExp(M2), rgb: new RegExp("rgb" + L2), rgba: new RegExp("rgba" + T2), hsl: new RegExp("hsl" + L2), hsla: new RegExp("hsla" + T2), hsv: new RegExp("hsv" + L2), hsva: new RegExp("hsva" + T2), hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/, hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/, hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/ });
    function j2(e3) {
      return !!P2.CSS_UNIT.exec(e3);
    }
    e2.exports ? e2.exports = c2 : window.tinycolor = c2;
  }(Math);
}(s = { exports: {} }, s.exports), s.exports);
var u = function(e2) {
  var r2 = c(e2);
  return r2.isValid() ? { hex: r2.toHexString(), rgb: r2.toRgb(), hsl: r2.toHsl(), hsv: r2.toHsv(), alpha: r2.getAlpha() } : { hex: "#000000", rgb: { r: 0, g: 0, b: 0, a: 1 }, hsl: { h: 0, s: 0, l: 0, a: 1 }, hsv: { h: 0, s: 0, v: 0, a: 1 }, alpha: 1 };
};
var f = function(e2, r2) {
  var t2 = e2.hex, n2 = c(t2), a2 = [];
  return ("string" == typeof r2 ? [r2] : r2).forEach(function(e3) {
    return "analogous" === e3 ? n2.analogous().forEach(function(e4) {
      return a2.push(e4.toHexString());
    }) : "monochromatic" === e3 ? n2.monochromatic().forEach(function(e4) {
      return a2.push(e4.toHexString());
    }) : "splitcomplement" === e3 ? n2.splitcomplement().forEach(function(e4) {
      return a2.push(e4.toHexString());
    }) : "tetrad" === e3 ? n2.tetrad().forEach(function(e4) {
      return a2.push(e4.toHexString());
    }) : "triad" === e3 ? n2.triad().forEach(function(e4) {
      return a2.push(e4.toHexString());
    }) : a2.push(n2.complement().toHexString());
  }), a2;
};
var h = { light: { background: "#fff", inputBackground: "#f4f4f4", color: "#262626", borderColor: "#D4D4D4", borderRadius: "4px", boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)", width: "280px" }, dark: { background: "rgba(40, 40, 40, 0.95)", inputBackground: "#454545", color: "#E3E3E3", borderRadius: "4px", borderColor: "#575657", boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)", width: "280px" } };
var d = { width: "100%", height: "8px", background: "linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)", boxShadow: "inset 0 0 1px rgba(0, 0, 0, .2)", position: "relative", borderRadius: "4px" };
var g = { width: "calc(100% - 8px)", height: "100%", position: "relative", marginLeft: "8px" };
var p = { width: "12px", borderRadius: "12px", height: "12px", boxSizing: "border-box", boxShadow: "0 0 1px rgba(0, 0, 0, .9)", border: "2px solid #fff", position: "absolute", transform: "translate(-2px, -2px)", cursor: "pointer", left: "calc(var(--rpc-hue-pointer) - 8px)" };
var b = function(e2) {
  return e2 > 1 ? 1 : e2 < 0 ? 0 : e2;
};
var m = function(e2) {
  var o2 = e2.onMove, i2 = (0, import_react.useState)(false), l2 = i2[0], s2 = i2[1], c2 = (0, import_react.useRef)(null), u2 = (0, import_react.useCallback)(function(e3) {
    if (!c2.current) return { left: 0, top: 0 };
    var r2 = c2.current.getBoundingClientRect(), t2 = r2.width, n2 = r2.left, a2 = r2.top, o3 = r2.height, i3 = e3.pageX && "number" == typeof e3.pageX ? e3 : e3.touches[0], l3 = i3.pageX, s3 = i3.pageY;
    return { left: b((l3 - (n2 + window.pageXOffset)) / t2), top: b((s3 - (a2 + window.pageYOffset)) / o3) };
  }, []), f2 = (0, import_react.useCallback)(function(e3) {
    e3.preventDefault(), c2.current && o2(u2(e3));
  }, [o2, u2]), h2 = (0, import_react.useCallback)(function(e3) {
    o2(u2(e3)), s2(true);
  }, [o2, u2]), d2 = (0, import_react.useCallback)(function() {
    return s2(false);
  }, []), g2 = (0, import_react.useCallback)(function(e3) {
    var r2 = e3 ? document.addEventListener : document.removeEventListener;
    r2("mousemove", f2), r2("touchmove", f2), r2("mouseup", d2), r2("touchend", d2);
  }, [f2, d2]);
  return (0, import_react.useLayoutEffect)(function() {
    return g2(l2), function() {
      l2 && g2(false);
    };
  }, [l2, g2]), { ref: c2, handleStart: h2 };
};
var v = import_react.default.memo(function(r2) {
  var t2 = r2.hsl, a2 = r2.onChange, o2 = (0, import_react.useCallback)(function(e2) {
    var r3 = e2.left;
    return a2 && a2({ h: 360 * r3, s: t2.s, l: t2.l, a: t2.a });
  }, [a2]), i2 = m({ onMove: o2 }), l2 = i2.ref, s2 = i2.handleStart;
  return import_react.default.createElement("div", { style: d, ref: l2, onTouchStart: s2, onMouseDown: s2 }, import_react.default.createElement("div", { style: g }, import_react.default.createElement("div", { style: p })));
});
var x = { margin: "5px 0 0", width: "100%", height: "8px", boxShadow: "inset 0 0 1px rgba(0, 0, 0, .2)", position: "relative", zIndex: 1, borderRadius: "4px", background: "var(--rpc-input-background)" };
var A = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to right, rgba(var(--rpc-red), var(--rpc-green), var(--rpc-blue), 0) 0%, rgba(var(--rpc-red), var(--rpc-green), var(--rpc-blue), 1) 100%)", borderRadius: "4px" };
var y = { width: "calc(100% - 8px)", height: "100%", position: "relative", marginLeft: "8px" };
var _ = { width: "12px", borderRadius: "12px", height: "12px", boxShadow: "0 0 1px rgba(0, 0, 0, .9)", border: "2px solid #fff", position: "absolute", transform: "translate(-2px, -2px)", cursor: "pointer", left: "calc(var(--rpc-alpha-pointer) - 8px)", boxSizing: "border-box" };
var w = { position: "absolute", top: "0px", right: "0px", bottom: "0px", left: "0px", backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAC9JREFUOBFjZGBgEAFifOANPkkmfJLEyI0awMAw8GHASERU4U0nA++FURdQISEBAFeUATP+HuV8AAAAAElFTkSuQmCC")', backgroundPosition: "left center", zIndex: -1, borderRadius: "calc(var(--rpc-border-radius) / 2)" };
var k = import_react.default.memo(function(r2) {
  var t2 = r2.onChange, a2 = (0, import_react.useCallback)(function(e2) {
    var r3 = e2.left;
    return t2 && t2(parseFloat(r3.toFixed(2)));
  }, [t2]), o2 = m({ onMove: a2 }), i2 = o2.ref, l2 = o2.handleStart;
  return import_react.default.createElement("div", { style: x, ref: i2, onTouchStart: l2, onMouseDown: l2 }, import_react.default.createElement("div", { style: A }), import_react.default.createElement("div", { style: w }), import_react.default.createElement("div", { style: y }, import_react.default.createElement("div", { style: _ })));
});
var E = { padding: "0.4rem", borderTop: "1px solid var(--rpc-border-color)", display: "grid", gridTemplateColumns: "repeat(10, 1fr)", gridGap: "0.4rem" };
var S = { height: "20px", margin: "0", outline: "none", appearance: "none", cursor: "pointer", padding: "0", borderRadius: "var(--rpc-border-radius)", border: "1px solid var(--rpc-border-color)", overflow: "hidden", position: "relative", background: "none", gridColumnEnd: "span 1" };
var R = { height: "20px", margin: "0", padding: "0", outline: "none", background: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", border: "none", borderRadius: "var(--rpc-border-radius)", gridColumnEnd: "span 1" };
var C = { height: "9px", width: "9px", fill: "var(--rpc-color)" };
var H = function(e2) {
  return { position: "absolute", background: "rgba(".concat(e2.r, ", ").concat(e2.g, ", ").concat(e2.b, ", ").concat(e2.a, ")"), top: "0px", right: "0px", bottom: "0px", left: "0px", zIndex: 2 };
};
var F = { position: "absolute", top: "0px", right: "0px", bottom: "0px", left: "0px", backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAC9JREFUOBFjZGBgEAFifOANPkkmfJLEyI0awMAw8GHASERU4U0nA++FURdQISEBAFeUATP+HuV8AAAAAElFTkSuQmCC")', backgroundPosition: "left center", zIndex: 1 };
var I = import_react.default.memo(function(r2) {
  var t2 = r2.colors, n2 = r2.onClick, a2 = r2.onAdd;
  return import_react.default.createElement("div", { style: E }, t2.map(function(r3, t3) {
    var a3 = c(r3);
    if (!a3.isValid()) throw Error("".concat(r3, " is not a valid color."));
    var o2 = a3.toRgb();
    return import_react.default.createElement("button", { key: t3, style: S, onClick: function() {
      return n2(o2);
    }, type: "button" }, import_react.default.createElement("div", { style: H(o2) }), import_react.default.createElement("div", { style: F }));
  }), a2 && import_react.default.createElement("button", { style: R, onClick: a2, type: "button" }, import_react.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "50", height: "50", viewBox: "0 0 50 50", style: C }, import_react.default.createElement("path", { d: "M27.5 50h-5V27.5H0v-5h22.5V0h5v22.5H50v5H27.5z" }))));
});
var B = { position: "absolute", top: 0, left: 0, bottom: 0, right: 0 };
var U = { width: "calc(100% - 0.8rem)", height: "200px", margin: "0.4rem", position: "relative", background: "hsl(var(--rpc-hue),100%, 50%)", borderRadius: "var(--rpc-border-radius)", border: "1px solid var(--rpc-border-color)", overflow: "hidden" };
var N = { position: "absolute", cursor: "hand", top: "var(--rpc-saturation-pointer-top)", left: "var(--rpc-saturation-pointer-left)" };
var z = { width: "12px", borderRadius: "12px", height: "12px", boxSizing: "border-box", boxShadow: "0 0 1px rgba(0, 0, 0, .9)", border: "2px solid #fff" };
var O = import_react.default.memo(function(r2) {
  var t2 = r2.hsl, a2 = r2.onChange, o2 = (0, import_react.useCallback)(function(e2) {
    var r3 = e2.left, n2 = e2.top;
    return a2 && a2(i(i({}, t2), { s: r3, v: 1 - n2 }));
  }, [a2]), l2 = m({ onMove: o2 }), s2 = l2.ref, c2 = l2.handleStart;
  return import_react.default.createElement("div", { style: U, ref: s2, onTouchStart: c2, onMouseDown: c2 }, import_react.default.createElement("style", null, "\n        .saturation-white {\n          background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n          background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n        }\n        .saturation-black {\n          background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n          background: linear-gradient(to top, #000, rgba(0,0,0,0));\n        }\n        "), import_react.default.createElement("div", { style: B, className: "saturation-white" }, import_react.default.createElement("div", { style: B, className: "saturation-black" }), import_react.default.createElement("div", { style: N }, import_react.default.createElement("div", { style: z }))));
});
var M = import_react.default.memo(function(t2) {
  var a2 = t2.colors, i2 = t2.onClick, s2 = t2.currentColor, c2 = (0, import_react.useState)([]), u2 = c2[0], f2 = c2[1];
  (0, import_react.useEffect)(function() {
    var e2 = JSON.parse(window.localStorage.getItem("rpc-presets") || "[]");
    Array.isArray(e2) && f2(e2);
  }, []);
  var h2 = (0, import_react.useCallback)(function() {
    var e2 = l(l([], u2, true), [s2], false);
    window.localStorage.setItem("rpc-presets", JSON.stringify(e2)), f2(e2);
  }, [a2, s2]);
  return import_react.default.createElement(I, { onClick: i2, colors: l(l([], a2, true), u2, true), onAdd: h2 });
});
var L = { background: "var(--rpc-background)", boxShadow: "var(--rpc-box-shadow)", borderRadius: "var(--rpc-border-radius)", width: "var(--rpc-width)", minWidth: "280px", border: "1px solid var(--rpc-border-color)" };
var T = { position: "relative", width: "25px", height: "25px", borderRadius: "var(--rpc-border-radius)", overflow: "hidden", boxShadow: "inset 0 0 2px 0px rgba(0, 0, 0, .2)", backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAC9JREFUOBFjZGBgEAFifOANPkkmfJLEyI0awMAw8GHASERU4U0nA++FURdQISEBAFeUATP+HuV8AAAAAElFTkSuQmCC")', backgroundPosition: "left center" };
var P = { background: "var(--rpc-input-background)", borderRadius: "var(--rpc-border-radius)" };
var j = { position: "absolute", top: "0px", right: "0px", bottom: "0px", left: "0px", background: "var(--rpc-rgba)", zIndex: 1, border: "1px solid var(--rpc-border-color)", borderRadius: "var(--rpc-border-radius)" };
var G = { margin: "0.4rem 0.4rem", width: "calc(100% - 0.8rem)", display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" };
var Q = { flexGrow: 2, marginLeft: "0.4rem" };
var D = { margin: "0 0.3rem 0.3rem", display: "flex", alignItems: "center", justifyContent: "space-between" };
var V = { display: "flex", alignItems: "center", color: "var(--rpc-color)", border: "1px solid var(--rpc-border-color)", borderRadius: "var(--rpc-border-radius)", margin: "0.1rem", background: "var(--rpc-input-background)" };
var q = { width: "45px", background: "none", color: "var(--rpc-color)", border: "none", borderRadius: "var(--rpc-border-radius)", padding: "5px", fontSize: "10px", margin: "0", textTransform: "uppercase", boxSizing: "border-box" };
var J = { paddingLeft: "5px", fontSize: "10px", color: "var(--rpc-borderColor)" };
var X = { display: "flex", flexDirection: "column", alignItems: "center", fontFamily: "sans-serif", fontSize: "10px", color: "var(--rpc-color)" };
var $ = import_react.default.memo(function(r2) {
  var t2 = r2.name, n2 = r2.value, a2 = r2.type, o2 = void 0 === a2 ? "text" : a2, l2 = r2.label, s2 = r2.prefix, c2 = r2.min, u2 = r2.max, f2 = r2.step, h2 = r2.maxLength, d2 = r2.size, g2 = void 0 === d2 ? "small" : d2, p2 = r2.onChange, b2 = r2.onBlur, m2 = "small" === g2 ? "42px" : "54px";
  return import_react.default.createElement("label", { style: X }, import_react.default.createElement("div", { style: V }, s2 && import_react.default.createElement("span", { style: J }, s2), import_react.default.createElement("input", { autoComplete: "off", type: o2, name: t2, value: n2, onChange: function(e2) {
    return p2(e2.target.value);
  }, onBlur: function(e2) {
    if (b2) return b2(e2.target.value);
    p2(e2.target.value);
  }, style: i(i({}, q), { width: m2 }), spellCheck: false, maxLength: h2, min: c2, max: u2, step: f2 })), import_react.default.createElement("span", null, l2));
});
var Y = import_react.default.memo(function(t2) {
  var a2 = t2.theme, l2 = t2.color, s2 = t2.presets, d2 = t2.onChange, g2 = t2.hideAlpha, p2 = t2.hideInputs, b2 = t2.className, m2 = t2.combinations, x2 = (0, import_react.useState)(u(l2)), A2 = x2[0], y2 = x2[1];
  (0, import_react.useEffect)(function() {
    y2(u(l2));
  }, [l2]);
  var _2 = (0, import_react.useCallback)(function(e2) {
    var r2 = u(e2);
    y2(r2), d2 && d2(r2);
  }, [A2]), w2 = (0, import_react.useCallback)(function(e2) {
    return _2(i(i({}, A2.rgb), { a: e2 }));
  }, [A2]), E2 = A2.rgb, S2 = A2.hsl, R2 = A2.hsv, C2 = A2.hex, H2 = A2.alpha, F2 = { "--rpc-background": (null == a2 ? void 0 : a2.background) || h.light.background, "--rpc-input-background": (null == a2 ? void 0 : a2.inputBackground) || h.light.inputBackground, "--rpc-color": (null == a2 ? void 0 : a2.color) || h.light.color, "--rpc-border-color": (null == a2 ? void 0 : a2.borderColor) || h.light.borderColor, "--rpc-border-radius": (null == a2 ? void 0 : a2.borderRadius) || h.light.borderRadius, "--rpc-box-shadow": (null == a2 ? void 0 : a2.boxShadow) || h.light.boxShadow, "--rpc-width": (null == a2 ? void 0 : a2.width) || h.light.width }, B2 = { "--rpc-hue": S2.h, "--rpc-red": E2.r, "--rpc-green": E2.g, "--rpc-blue": E2.b, "--rpc-hex": C2, "--rpc-alpha": H2, "--rpc-rgba": "rgba(".concat(E2.r, ", ").concat(E2.g, ", ").concat(E2.b, ", ").concat(H2, ")"), "--rpc-hue-pointer": "".concat(100 * S2.h / 360, "%"), "--rpc-alpha-pointer": "".concat(100 * H2, "%"), "--rpc-saturation-pointer-top": "calc(".concat(-100 * R2.v + 100, "% - 6px)"), "--rpc-saturation-pointer-left": "calc(".concat(100 * R2.s, "% - 6px)") }, U2 = function(e2, r2) {
    var t3;
    if (!("" === r2 || r2.length > 3)) {
      var n2 = "a" === e2 ? parseInt(r2) / 100 : parseInt(r2);
      _2(i(i({}, E2), ((t3 = {})[e2] = n2, t3)));
    }
  };
  return import_react.default.createElement("div", { style: i(i(i({}, F2), L), B2), className: b2 }, import_react.default.createElement(O, { hsl: S2, onChange: _2 }), import_react.default.createElement("div", { style: G }, import_react.default.createElement("div", { style: P }, import_react.default.createElement("div", { style: T }, import_react.default.createElement("div", { style: j }))), import_react.default.createElement("div", { style: Q }, import_react.default.createElement(v, { hsl: S2, onChange: _2 }), !g2 && import_react.default.createElement(k, { onChange: w2 }))), !p2 && import_react.default.createElement("div", { style: D }, import_react.default.createElement($, { type: "text", name: "hex", label: "Hex", size: "large", prefix: "#", onChange: function(e2) {
    if (/^[0-9A-Fa-f]+$/.test(e2)) {
      var r2 = c("#".concat(e2));
      y2({ hex: "#".concat(e2), rgb: r2.toRgb(), hsl: r2.toHsl(), hsv: r2.toHsv(), alpha: r2.getAlpha() });
    }
  }, onBlur: _2, maxLength: 6, value: C2.replace("#", "") }), import_react.default.createElement("div", { style: { display: "flex" } }, import_react.default.createElement($, { value: E2.r, label: "R", name: "red", type: "number", min: 0, max: 255, step: 1, onChange: function(e2) {
    return U2("r", e2);
  } }), import_react.default.createElement($, { value: E2.g, label: "G", name: "green", type: "number", min: 0, max: 255, step: 1, onChange: function(e2) {
    return U2("g", e2);
  } }), import_react.default.createElement($, { value: E2.b, label: "B", name: "blue", type: "number", min: 0, max: 255, step: 1, onChange: function(e2) {
    return U2("b", e2);
  } }), !g2 && import_react.default.createElement($, { value: 100 * E2.a, label: "Alpha", name: "alpha", type: "number", min: 0, max: 100, step: 1, onChange: function(e2) {
    return U2("a", e2);
  } }))), s2 && import_react.default.createElement(M, { colors: s2, onClick: _2, currentColor: A2.rgb }), m2 && import_react.default.createElement(I, { colors: f(A2, m2), onClick: _2 }));
});
export {
  Y as ColorPicker,
  Y as default,
  u as initColor,
  h as themes
};
//# sourceMappingURL=react-pick-color.js.map
