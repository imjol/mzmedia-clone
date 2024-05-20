"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [213],
  {
    622: function (e, r, o) {
      var t = o(2265),
        n = Symbol.for("react.element"),
        l = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        s =
          t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        a = { key: !0, ref: !0, __self: !0, __source: !0 };
      function c(e, r, o) {
        var t,
          l = {},
          c = null,
          d = null;
        for (t in (void 0 !== o && (c = "" + o),
        void 0 !== r.key && (c = "" + r.key),
        void 0 !== r.ref && (d = r.ref),
        r))
          i.call(r, t) && !a.hasOwnProperty(t) && (l[t] = r[t]);
        if (e && e.defaultProps)
          for (t in (r = e.defaultProps)) void 0 === l[t] && (l[t] = r[t]);
        return {
          $$typeof: n,
          type: e,
          key: c,
          ref: d,
          props: l,
          _owner: s.current,
        };
      }
      (r.Fragment = l), (r.jsx = c), (r.jsxs = c);
    },
    7437: function (e, r, o) {
      e.exports = o(622);
    },
    4769: function (e, r, o) {
      o.d(r, {
        m6: function () {
          return M;
        },
      });
      let t = /^\[(.+)\]$/;
      function n(e, r) {
        let o = e;
        return (
          r.split("-").forEach((e) => {
            o.nextPart.has(e) ||
              o.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (o = o.nextPart.get(e));
          }),
          o
        );
      }
      let l = /\s+/;
      function i() {
        let e,
          r,
          o = 0,
          t = "";
        for (; o < arguments.length; )
          (e = arguments[o++]) &&
            (r = (function e(r) {
              let o;
              if ("string" == typeof r) return r;
              let t = "";
              for (let n = 0; n < r.length; n++)
                r[n] && (o = e(r[n])) && (t && (t += " "), (t += o));
              return t;
            })(e)) &&
            (t && (t += " "), (t += r));
        return t;
      }
      function s(e) {
        let r = (r) => r[e] || [];
        return (r.isThemeGetter = !0), r;
      }
      let a = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        c = /^\d+\/\d+$/,
        d = new Set(["px", "full", "screen"]),
        u = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        p =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        b = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        f =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
      function m(e) {
        return h(e) || d.has(e) || c.test(e);
      }
      function g(e) {
        return O(e, "length", N);
      }
      function h(e) {
        return !!e && !Number.isNaN(Number(e));
      }
      function y(e) {
        return O(e, "number", h);
      }
      function x(e) {
        return !!e && Number.isInteger(Number(e));
      }
      function w(e) {
        return e.endsWith("%") && h(e.slice(0, -1));
      }
      function v(e) {
        return a.test(e);
      }
      function k(e) {
        return u.test(e);
      }
      let z = new Set(["length", "size", "percentage"]);
      function j(e) {
        return O(e, z, G);
      }
      function _(e) {
        return O(e, "position", G);
      }
      let C = new Set(["image", "url"]);
      function S(e) {
        return O(e, C, R);
      }
      function E(e) {
        return O(e, "", I);
      }
      function P() {
        return !0;
      }
      function O(e, r, o) {
        let t = a.exec(e);
        return (
          !!t &&
          (t[1] ? ("string" == typeof r ? t[1] === r : r.has(t[1])) : o(t[2]))
        );
      }
      function N(e) {
        return p.test(e);
      }
      function G() {
        return !1;
      }
      function I(e) {
        return b.test(e);
      }
      function R(e) {
        return f.test(e);
      }
      let M = (function (e) {
        let r, o, s;
        let a = function (l) {
          var i;
          return (
            (o = (r = {
              cache: (function (e) {
                if (e < 1) return { get: () => void 0, set: () => {} };
                let r = 0,
                  o = new Map(),
                  t = new Map();
                function n(n, l) {
                  o.set(n, l), ++r > e && ((r = 0), (t = o), (o = new Map()));
                }
                return {
                  get(e) {
                    let r = o.get(e);
                    return void 0 !== r
                      ? r
                      : void 0 !== (r = t.get(e))
                      ? (n(e, r), r)
                      : void 0;
                  },
                  set(e, r) {
                    o.has(e) ? o.set(e, r) : n(e, r);
                  },
                };
              })((i = [].reduce((e, r) => r(e), e())).cacheSize),
              splitModifiers: (function (e) {
                let r = e.separator,
                  o = 1 === r.length,
                  t = r[0],
                  n = r.length;
                return function (e) {
                  let l;
                  let i = [],
                    s = 0,
                    a = 0;
                  for (let c = 0; c < e.length; c++) {
                    let d = e[c];
                    if (0 === s) {
                      if (d === t && (o || e.slice(c, c + n) === r)) {
                        i.push(e.slice(a, c)), (a = c + n);
                        continue;
                      }
                      if ("/" === d) {
                        l = c;
                        continue;
                      }
                    }
                    "[" === d ? s++ : "]" === d && s--;
                  }
                  let c = 0 === i.length ? e : e.substring(a),
                    d = c.startsWith("!"),
                    u = d ? c.substring(1) : c;
                  return {
                    modifiers: i,
                    hasImportantModifier: d,
                    baseClassName: u,
                    maybePostfixModifierPosition: l && l > a ? l - a : void 0,
                  };
                };
              })(i),
              ...(function (e) {
                let r = (function (e) {
                    var r;
                    let { theme: o, prefix: t } = e,
                      l = { nextPart: new Map(), validators: [] };
                    return (
                      ((r = Object.entries(e.classGroups)),
                      t
                        ? r.map(([e, r]) => [
                            e,
                            r.map((e) =>
                              "string" == typeof e
                                ? t + e
                                : "object" == typeof e
                                ? Object.fromEntries(
                                    Object.entries(e).map(([e, r]) => [
                                      t + e,
                                      r,
                                    ])
                                  )
                                : e
                            ),
                          ])
                        : r).forEach(([e, r]) => {
                        (function e(r, o, t, l) {
                          r.forEach((r) => {
                            if ("string" == typeof r) {
                              ("" === r ? o : n(o, r)).classGroupId = t;
                              return;
                            }
                            if ("function" == typeof r) {
                              if (r.isThemeGetter) {
                                e(r(l), o, t, l);
                                return;
                              }
                              o.validators.push({
                                validator: r,
                                classGroupId: t,
                              });
                              return;
                            }
                            Object.entries(r).forEach(([r, i]) => {
                              e(i, n(o, r), t, l);
                            });
                          });
                        })(r, l, e, o);
                      }),
                      l
                    );
                  })(e),
                  {
                    conflictingClassGroups: o,
                    conflictingClassGroupModifiers: l,
                  } = e;
                return {
                  getClassGroupId: function (e) {
                    let o = e.split("-");
                    return (
                      "" === o[0] && 1 !== o.length && o.shift(),
                      (function e(r, o) {
                        if (0 === r.length) return o.classGroupId;
                        let t = r[0],
                          n = o.nextPart.get(t),
                          l = n ? e(r.slice(1), n) : void 0;
                        if (l) return l;
                        if (0 === o.validators.length) return;
                        let i = r.join("-");
                        return o.validators.find(({ validator: e }) => e(i))
                          ?.classGroupId;
                      })(o, r) ||
                        (function (e) {
                          if (t.test(e)) {
                            let r = t.exec(e)[1],
                              o = r?.substring(0, r.indexOf(":"));
                            if (o) return "arbitrary.." + o;
                          }
                        })(e)
                    );
                  },
                  getConflictingClassGroupIds: function (e, r) {
                    let t = o[e] || [];
                    return r && l[e] ? [...t, ...l[e]] : t;
                  },
                };
              })(i),
            }).cache.get),
            (s = r.cache.set),
            (a = c),
            c(l)
          );
        };
        function c(e) {
          let t = o(e);
          if (t) return t;
          let n = (function (e, r) {
            let {
                splitModifiers: o,
                getClassGroupId: t,
                getConflictingClassGroupIds: n,
              } = r,
              i = new Set();
            return e
              .trim()
              .split(l)
              .map((e) => {
                let {
                    modifiers: r,
                    hasImportantModifier: n,
                    baseClassName: l,
                    maybePostfixModifierPosition: i,
                  } = o(e),
                  s = t(i ? l.substring(0, i) : l),
                  a = !!i;
                if (!s) {
                  if (!i || !(s = t(l)))
                    return { isTailwindClass: !1, originalClassName: e };
                  a = !1;
                }
                let c = (function (e) {
                  if (e.length <= 1) return e;
                  let r = [],
                    o = [];
                  return (
                    e.forEach((e) => {
                      "[" === e[0]
                        ? (r.push(...o.sort(), e), (o = []))
                        : o.push(e);
                    }),
                    r.push(...o.sort()),
                    r
                  );
                })(r).join(":");
                return {
                  isTailwindClass: !0,
                  modifierId: n ? c + "!" : c,
                  classGroupId: s,
                  originalClassName: e,
                  hasPostfixModifier: a,
                };
              })
              .reverse()
              .filter((e) => {
                if (!e.isTailwindClass) return !0;
                let {
                    modifierId: r,
                    classGroupId: o,
                    hasPostfixModifier: t,
                  } = e,
                  l = r + o;
                return (
                  !i.has(l) &&
                  (i.add(l), n(o, t).forEach((e) => i.add(r + e)), !0)
                );
              })
              .reverse()
              .map((e) => e.originalClassName)
              .join(" ");
          })(e, r);
          return s(e, n), n;
        }
        return function () {
          return a(i.apply(null, arguments));
        };
      })(function () {
        let e = s("colors"),
          r = s("spacing"),
          o = s("blur"),
          t = s("brightness"),
          n = s("borderColor"),
          l = s("borderRadius"),
          i = s("borderSpacing"),
          a = s("borderWidth"),
          c = s("contrast"),
          d = s("grayscale"),
          u = s("hueRotate"),
          p = s("invert"),
          b = s("gap"),
          f = s("gradientColorStops"),
          z = s("gradientColorStopPositions"),
          C = s("inset"),
          O = s("margin"),
          N = s("opacity"),
          G = s("padding"),
          I = s("saturate"),
          R = s("scale"),
          M = s("sepia"),
          T = s("skew"),
          $ = s("space"),
          W = s("translate"),
          L = () => ["auto", "contain", "none"],
          q = () => ["auto", "hidden", "clip", "visible", "scroll"],
          D = () => ["auto", v, r],
          F = () => [v, r],
          U = () => ["", m, g],
          A = () => ["auto", h, v],
          B = () => [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
          ],
          Y = () => ["solid", "dashed", "dotted", "double", "none"],
          H = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
            "plus-lighter",
          ],
          J = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
          ],
          K = () => ["", "0", v],
          Q = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          V = () => [h, y],
          X = () => [h, v];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [P],
            spacing: [m, g],
            blur: ["none", "", k, v],
            brightness: V(),
            borderColor: [e],
            borderRadius: ["none", "", "full", k, v],
            borderSpacing: F(),
            borderWidth: U(),
            contrast: V(),
            grayscale: K(),
            hueRotate: X(),
            invert: K(),
            gap: F(),
            gradientColorStops: [e],
            gradientColorStopPositions: [w, g],
            inset: D(),
            margin: D(),
            opacity: V(),
            padding: F(),
            saturate: V(),
            scale: V(),
            sepia: K(),
            skew: X(),
            space: F(),
            translate: F(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", v] }],
            container: ["container"],
            columns: [{ columns: [k] }],
            "break-after": [{ "break-after": Q() }],
            "break-before": [{ "break-before": Q() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [...B(), v] }],
            overflow: [{ overflow: q() }],
            "overflow-x": [{ "overflow-x": q() }],
            "overflow-y": [{ "overflow-y": q() }],
            overscroll: [{ overscroll: L() }],
            "overscroll-x": [{ "overscroll-x": L() }],
            "overscroll-y": [{ "overscroll-y": L() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [C] }],
            "inset-x": [{ "inset-x": [C] }],
            "inset-y": [{ "inset-y": [C] }],
            start: [{ start: [C] }],
            end: [{ end: [C] }],
            top: [{ top: [C] }],
            right: [{ right: [C] }],
            bottom: [{ bottom: [C] }],
            left: [{ left: [C] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", x, v] }],
            basis: [{ basis: D() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", v] }],
            grow: [{ grow: K() }],
            shrink: [{ shrink: K() }],
            order: [{ order: ["first", "last", "none", x, v] }],
            "grid-cols": [{ "grid-cols": [P] }],
            "col-start-end": [{ col: ["auto", { span: ["full", x, v] }, v] }],
            "col-start": [{ "col-start": A() }],
            "col-end": [{ "col-end": A() }],
            "grid-rows": [{ "grid-rows": [P] }],
            "row-start-end": [{ row: ["auto", { span: [x, v] }, v] }],
            "row-start": [{ "row-start": A() }],
            "row-end": [{ "row-end": A() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", v] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", v] }],
            gap: [{ gap: [b] }],
            "gap-x": [{ "gap-x": [b] }],
            "gap-y": [{ "gap-y": [b] }],
            "justify-content": [{ justify: ["normal", ...J()] }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [{ content: ["normal", ...J(), "baseline"] }],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [{ "place-content": [...J(), "baseline"] }],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [G] }],
            px: [{ px: [G] }],
            py: [{ py: [G] }],
            ps: [{ ps: [G] }],
            pe: [{ pe: [G] }],
            pt: [{ pt: [G] }],
            pr: [{ pr: [G] }],
            pb: [{ pb: [G] }],
            pl: [{ pl: [G] }],
            m: [{ m: [O] }],
            mx: [{ mx: [O] }],
            my: [{ my: [O] }],
            ms: [{ ms: [O] }],
            me: [{ me: [O] }],
            mt: [{ mt: [O] }],
            mr: [{ mr: [O] }],
            mb: [{ mb: [O] }],
            ml: [{ ml: [O] }],
            "space-x": [{ "space-x": [$] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [$] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [
              { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", v, r] },
            ],
            "min-w": [{ "min-w": [v, r, "min", "max", "fit"] }],
            "max-w": [
              {
                "max-w": [
                  v,
                  r,
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [k] },
                  k,
                ],
              },
            ],
            h: [
              { h: [v, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "min-h": [
              { "min-h": [v, r, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "max-h": [
              { "max-h": [v, r, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            size: [{ size: [v, r, "auto", "min", "max", "fit"] }],
            "font-size": [{ text: ["base", k, g] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  y,
                ],
              },
            ],
            "font-family": [{ font: [P] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  v,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", h, y] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  m,
                  v,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", v] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", v] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [N] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [N] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...Y(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", m, g] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", m, v] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: F() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  v,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", v] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [N] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [...B(), _] }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", j] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  S,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [z] }],
            "gradient-via-pos": [{ via: [z] }],
            "gradient-to-pos": [{ to: [z] }],
            "gradient-from": [{ from: [f] }],
            "gradient-via": [{ via: [f] }],
            "gradient-to": [{ to: [f] }],
            rounded: [{ rounded: [l] }],
            "rounded-s": [{ "rounded-s": [l] }],
            "rounded-e": [{ "rounded-e": [l] }],
            "rounded-t": [{ "rounded-t": [l] }],
            "rounded-r": [{ "rounded-r": [l] }],
            "rounded-b": [{ "rounded-b": [l] }],
            "rounded-l": [{ "rounded-l": [l] }],
            "rounded-ss": [{ "rounded-ss": [l] }],
            "rounded-se": [{ "rounded-se": [l] }],
            "rounded-ee": [{ "rounded-ee": [l] }],
            "rounded-es": [{ "rounded-es": [l] }],
            "rounded-tl": [{ "rounded-tl": [l] }],
            "rounded-tr": [{ "rounded-tr": [l] }],
            "rounded-br": [{ "rounded-br": [l] }],
            "rounded-bl": [{ "rounded-bl": [l] }],
            "border-w": [{ border: [a] }],
            "border-w-x": [{ "border-x": [a] }],
            "border-w-y": [{ "border-y": [a] }],
            "border-w-s": [{ "border-s": [a] }],
            "border-w-e": [{ "border-e": [a] }],
            "border-w-t": [{ "border-t": [a] }],
            "border-w-r": [{ "border-r": [a] }],
            "border-w-b": [{ "border-b": [a] }],
            "border-w-l": [{ "border-l": [a] }],
            "border-opacity": [{ "border-opacity": [N] }],
            "border-style": [{ border: [...Y(), "hidden"] }],
            "divide-x": [{ "divide-x": [a] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [a] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [N] }],
            "divide-style": [{ divide: Y() }],
            "border-color": [{ border: [n] }],
            "border-color-x": [{ "border-x": [n] }],
            "border-color-y": [{ "border-y": [n] }],
            "border-color-t": [{ "border-t": [n] }],
            "border-color-r": [{ "border-r": [n] }],
            "border-color-b": [{ "border-b": [n] }],
            "border-color-l": [{ "border-l": [n] }],
            "divide-color": [{ divide: [n] }],
            "outline-style": [{ outline: ["", ...Y()] }],
            "outline-offset": [{ "outline-offset": [m, v] }],
            "outline-w": [{ outline: [m, g] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: U() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [N] }],
            "ring-offset-w": [{ "ring-offset": [m, g] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", k, E] }],
            "shadow-color": [{ shadow: [P] }],
            opacity: [{ opacity: [N] }],
            "mix-blend": [{ "mix-blend": H() }],
            "bg-blend": [{ "bg-blend": H() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [o] }],
            brightness: [{ brightness: [t] }],
            contrast: [{ contrast: [c] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", k, v] }],
            grayscale: [{ grayscale: [d] }],
            "hue-rotate": [{ "hue-rotate": [u] }],
            invert: [{ invert: [p] }],
            saturate: [{ saturate: [I] }],
            sepia: [{ sepia: [M] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [o] }],
            "backdrop-brightness": [{ "backdrop-brightness": [t] }],
            "backdrop-contrast": [{ "backdrop-contrast": [c] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [d] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
            "backdrop-invert": [{ "backdrop-invert": [p] }],
            "backdrop-opacity": [{ "backdrop-opacity": [N] }],
            "backdrop-saturate": [{ "backdrop-saturate": [I] }],
            "backdrop-sepia": [{ "backdrop-sepia": [M] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [i] }],
            "border-spacing-x": [{ "border-spacing-x": [i] }],
            "border-spacing-y": [{ "border-spacing-y": [i] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  v,
                ],
              },
            ],
            duration: [{ duration: X() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", v] }],
            delay: [{ delay: X() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", v] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [R] }],
            "scale-x": [{ "scale-x": [R] }],
            "scale-y": [{ "scale-y": [R] }],
            rotate: [{ rotate: [x, v] }],
            "translate-x": [{ "translate-x": [W] }],
            "translate-y": [{ "translate-y": [W] }],
            "skew-x": [{ "skew-x": [T] }],
            "skew-y": [{ "skew-y": [T] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  v,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: [{ appearance: ["none", "auto"] }],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  v,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": F() }],
            "scroll-mx": [{ "scroll-mx": F() }],
            "scroll-my": [{ "scroll-my": F() }],
            "scroll-ms": [{ "scroll-ms": F() }],
            "scroll-me": [{ "scroll-me": F() }],
            "scroll-mt": [{ "scroll-mt": F() }],
            "scroll-mr": [{ "scroll-mr": F() }],
            "scroll-mb": [{ "scroll-mb": F() }],
            "scroll-ml": [{ "scroll-ml": F() }],
            "scroll-p": [{ "scroll-p": F() }],
            "scroll-px": [{ "scroll-px": F() }],
            "scroll-py": [{ "scroll-py": F() }],
            "scroll-ps": [{ "scroll-ps": F() }],
            "scroll-pe": [{ "scroll-pe": F() }],
            "scroll-pt": [{ "scroll-pt": F() }],
            "scroll-pr": [{ "scroll-pr": F() }],
            "scroll-pb": [{ "scroll-pb": F() }],
            "scroll-pl": [{ "scroll-pl": F() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", v] },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [m, g, y] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      });
    },
  },
]);
