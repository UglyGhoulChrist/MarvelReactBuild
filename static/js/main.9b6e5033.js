/*! For license information please see main.9b6e5033.js.LICENSE.txt */
!(function () {
  "use strict";
  var e = {
      463: function (e, t, n) {
        var r = n(791),
          a = n(296);
        function l(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          c = {};
        function i(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (c[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var s = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          m = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          d = {};
        function v(e, t, n, r, a, l, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = l),
            (this.removeEmptyString = o);
        }
        var h = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            h[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            h[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              h[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            h[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              h[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            h[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            h[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            h[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            h[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = h.hasOwnProperty(t) ? h[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!m.call(d, e) ||
                    (!m.call(p, e) &&
                      (f.test(e) ? (d[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, y);
            h[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y);
              h[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y);
            h[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            h[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (h.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            h[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = Symbol.for("react.element"),
          R = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          _ = Symbol.for("react.strict_mode"),
          I = Symbol.for("react.profiler"),
          U = Symbol.for("react.provider"),
          A = Symbol.for("react.context"),
          E = Symbol.for("react.forward_ref"),
          x = Symbol.for("react.suspense"),
          C = Symbol.for("react.suspense_list"),
          N = Symbol.for("react.memo"),
          z = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var M = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var T = Symbol.iterator;
        function P(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (T && e[T]) || e["@@iterator"])
            ? e
            : null;
        }
        var O,
          L = Object.assign;
        function F(e) {
          if (void 0 === O)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              O = (t && t[1]) || "";
            }
          return "\n" + O + e;
        }
        var D = !1;
        function V(e, t) {
          if (!e || D) return "";
          D = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var a = u.stack.split("\n"),
                  l = r.stack.split("\n"),
                  o = a.length - 1,
                  c = l.length - 1;
                1 <= o && 0 <= c && a[o] !== l[c];

              )
                c--;
              for (; 1 <= o && 0 <= c; o--, c--)
                if (a[o] !== l[c]) {
                  if (1 !== o || 1 !== c)
                    do {
                      if ((o--, 0 > --c || a[o] !== l[c])) {
                        var i = "\n" + a[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            i.includes("<anonymous>") &&
                            (i = i.replace("<anonymous>", e.displayName)),
                          i
                        );
                      }
                    } while (1 <= o && 0 <= c);
                  break;
                }
            }
          } finally {
            (D = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? F(e) : "";
        }
        function j(e) {
          switch (e.tag) {
            case 5:
              return F(e.type);
            case 16:
              return F("Lazy");
            case 13:
              return F("Suspense");
            case 19:
              return F("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = V(e.type, !1));
            case 11:
              return (e = V(e.type.render, !1));
            case 1:
              return (e = V(e.type, !0));
            default:
              return "";
          }
        }
        function B(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case R:
              return "Portal";
            case I:
              return "Profiler";
            case _:
              return "StrictMode";
            case x:
              return "Suspense";
            case C:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case A:
                return (e.displayName || "Context") + ".Consumer";
              case U:
                return (e._context.displayName || "Context") + ".Provider";
              case E:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case N:
                return null !== (t = e.displayName || null)
                  ? t
                  : B(e.type) || "Memo";
              case z:
                (t = e._payload), (e = e._init);
                try {
                  return B(e(t));
                } catch (n) {}
            }
          return null;
        }
        function H(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return B(t);
            case 8:
              return t === _ ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function W(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  l = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), l.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function X(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function K(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function q(e, t) {
          var n = t.checked;
          return L({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = W(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function G(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function J(e, t) {
          G(e, t);
          var n = W(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, W(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && K(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + W(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(l(91));
          return L({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(l(92));
              if (te(n)) {
                if (1 < n.length) throw Error(l(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: W(n) };
        }
        function le(e, t) {
          var n = W(t.value),
            r = W(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function ce(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ie(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? ce(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          se,
          me =
            ((se = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return se(e, t);
                  });
                }
              : se);
        function fe(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          de = ["Webkit", "ms", "Moz", "O"];
        function ve(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function he(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = ve(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          de.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ge = L(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(l(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(l(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(l(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(l(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function ke(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Re = null,
          Se = null,
          _e = null;
        function Ie(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof Re) throw Error(l(280));
            var t = e.stateNode;
            t && ((t = ka(t)), Re(e.stateNode, e.type, t));
          }
        }
        function Ue(e) {
          Se ? (_e ? _e.push(e) : (_e = [e])) : (Se = e);
        }
        function Ae() {
          if (Se) {
            var e = Se,
              t = _e;
            if (((_e = Se = null), Ie(e), t))
              for (e = 0; e < t.length; e++) Ie(t[e]);
          }
        }
        function Ee(e, t) {
          return e(t);
        }
        function xe() {}
        var Ce = !1;
        function Ne(e, t, n) {
          if (Ce) return e(t, n);
          Ce = !0;
          try {
            return Ee(e, t, n);
          } finally {
            (Ce = !1), (null !== Se || null !== _e) && (xe(), Ae());
          }
        }
        function ze(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ka(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(l(231, t, typeof n));
          return n;
        }
        var Me = !1;
        if (s)
          try {
            var Te = {};
            Object.defineProperty(Te, "passive", {
              get: function () {
                Me = !0;
              },
            }),
              window.addEventListener("test", Te, Te),
              window.removeEventListener("test", Te, Te);
          } catch (se) {
            Me = !1;
          }
        function Pe(e, t, n, r, a, l, o, c, i) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (s) {
            this.onError(s);
          }
        }
        var Oe = !1,
          Le = null,
          Fe = !1,
          De = null,
          Ve = {
            onError: function (e) {
              (Oe = !0), (Le = e);
            },
          };
        function je(e, t, n, r, a, l, o, c, i) {
          (Oe = !1), (Le = null), Pe.apply(Ve, arguments);
        }
        function Be(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function We(e) {
          if (Be(e) !== e) throw Error(l(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Be(e))) throw Error(l(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return We(a), e;
                    if (o === r) return We(a), t;
                    o = o.sibling;
                  }
                  throw Error(l(188));
                }
                if (n.return !== r.return) (n = a), (r = o);
                else {
                  for (var c = !1, i = a.child; i; ) {
                    if (i === n) {
                      (c = !0), (n = a), (r = o);
                      break;
                    }
                    if (i === r) {
                      (c = !0), (r = a), (n = o);
                      break;
                    }
                    i = i.sibling;
                  }
                  if (!c) {
                    for (i = o.child; i; ) {
                      if (i === n) {
                        (c = !0), (n = o), (r = a);
                        break;
                      }
                      if (i === r) {
                        (c = !0), (r = o), (n = a);
                        break;
                      }
                      i = i.sibling;
                    }
                    if (!c) throw Error(l(189));
                  }
                }
                if (n.alternate !== r) throw Error(l(190));
              }
              if (3 !== n.tag) throw Error(l(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Xe = a.unstable_scheduleCallback,
          Ke = a.unstable_cancelCallback,
          qe = a.unstable_shouldYield,
          Ye = a.unstable_requestPaint,
          Ge = a.unstable_now,
          Je = a.unstable_getCurrentPriorityLevel,
          Ze = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          lt = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((ct(e) / it) | 0)) | 0;
              },
          ct = Math.log,
          it = Math.LN2;
        var ut = 64,
          st = 4194304;
        function mt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var c = o & ~a;
            0 !== c ? (r = mt(c)) : 0 !== (l &= o) && (r = mt(l));
          } else 0 !== (o = n & ~a) ? (r = mt(o)) : 0 !== l && (r = mt(l));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (l = t & -t) || (16 === a && 0 !== (4194240 & l)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function dt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function vt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function ht(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function gt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function yt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var kt,
          Rt,
          St,
          _t,
          It,
          Ut = !1,
          At = [],
          Et = null,
          xt = null,
          Ct = null,
          Nt = new Map(),
          zt = new Map(),
          Mt = [],
          Tt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Pt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Et = null;
              break;
            case "dragenter":
            case "dragleave":
              xt = null;
              break;
            case "mouseover":
            case "mouseout":
              Ct = null;
              break;
            case "pointerover":
            case "pointerout":
              Nt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              zt.delete(t.pointerId);
          }
        }
        function Ot(e, t, n, r, a, l) {
          return null === e || e.nativeEvent !== l
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: l,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && Rt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Lt(e) {
          var t = ya(e.target);
          if (null !== t) {
            var n = Be(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = He(n)))
                  return (
                    (e.blockedOn = t),
                    void It(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Ft(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && Rt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Dt(e, t, n) {
          Ft(e) && n.delete(t);
        }
        function Vt() {
          (Ut = !1),
            null !== Et && Ft(Et) && (Et = null),
            null !== xt && Ft(xt) && (xt = null),
            null !== Ct && Ft(Ct) && (Ct = null),
            Nt.forEach(Dt),
            zt.forEach(Dt);
        }
        function jt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ut ||
              ((Ut = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, Vt)));
        }
        function Bt(e) {
          function t(t) {
            return jt(t, e);
          }
          if (0 < At.length) {
            jt(At[0], e);
            for (var n = 1; n < At.length; n++) {
              var r = At[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== Et && jt(Et, e),
              null !== xt && jt(xt, e),
              null !== Ct && jt(Ct, e),
              Nt.forEach(t),
              zt.forEach(t),
              n = 0;
            n < Mt.length;
            n++
          )
            (r = Mt[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < Mt.length && null === (n = Mt[0]).blockedOn; )
            Lt(n), null === n.blockedOn && Mt.shift();
        }
        var Ht = w.ReactCurrentBatchConfig,
          Wt = !0;
        function $t(e, t, n, r) {
          var a = bt,
            l = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 1), Xt(e, t, n, r);
          } finally {
            (bt = a), (Ht.transition = l);
          }
        }
        function Qt(e, t, n, r) {
          var a = bt,
            l = Ht.transition;
          Ht.transition = null;
          try {
            (bt = 4), Xt(e, t, n, r);
          } finally {
            (bt = a), (Ht.transition = l);
          }
        }
        function Xt(e, t, n, r) {
          if (Wt) {
            var a = qt(e, t, n, r);
            if (null === a) Wr(e, t, r, Kt, n), Pt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (Et = Ot(Et, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (xt = Ot(xt, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Ct = Ot(Ct, e, t, n, r, a)), !0;
                  case "pointerover":
                    var l = a.pointerId;
                    return Nt.set(l, Ot(Nt.get(l) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (l = a.pointerId),
                      zt.set(l, Ot(zt.get(l) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Pt(e, r), 4 & t && -1 < Tt.indexOf(e))) {
              for (; null !== a; ) {
                var l = ba(a);
                if (
                  (null !== l && kt(l),
                  null === (l = qt(e, t, n, r)) && Wr(e, t, r, Kt, n),
                  l === a)
                )
                  break;
                a = l;
              }
              null !== a && r.stopPropagation();
            } else Wr(e, t, r, null, n);
          }
        }
        var Kt = null;
        function qt(e, t, n, r) {
          if (((Kt = null), null !== (e = ya((e = ke(r))))))
            if (null === (t = Be(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Kt = e), null;
        }
        function Yt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Je()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Gt = null,
          Jt = null,
          Zt = null;
        function en() {
          if (Zt) return Zt;
          var e,
            t,
            n = Jt,
            r = n.length,
            a = "value" in Gt ? Gt.value : Gt.textContent,
            l = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[l - t]; t++);
          return (Zt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, l) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = l),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            L(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var ln,
          on,
          cn,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          sn = an(un),
          mn = L({}, un, { view: 0, detail: 0 }),
          fn = an(mn),
          pn = L({}, mn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: In,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== cn &&
                    (cn && "mousemove" === e.type
                      ? ((ln = e.screenX - cn.screenX),
                        (on = e.screenY - cn.screenY))
                      : (on = ln = 0),
                    (cn = e)),
                  ln);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : on;
            },
          }),
          dn = an(pn),
          vn = an(L({}, pn, { dataTransfer: 0 })),
          hn = an(L({}, mn, { relatedTarget: 0 })),
          gn = an(
            L({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          yn = L({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(yn),
          wn = an(L({}, un, { data: 0 })),
          kn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          Rn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function _n(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function In() {
          return _n;
        }
        var Un = L({}, mn, {
            key: function (e) {
              if (e.key) {
                var t = kn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Rn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: In,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          An = an(Un),
          En = an(
            L({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          xn = an(
            L({}, mn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: In,
            })
          ),
          Cn = an(
            L({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Nn = L({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          zn = an(Nn),
          Mn = [9, 13, 27, 32],
          Tn = s && "CompositionEvent" in window,
          Pn = null;
        s && "documentMode" in document && (Pn = document.documentMode);
        var On = s && "TextEvent" in window && !Pn,
          Ln = s && (!Tn || (Pn && 8 < Pn && 11 >= Pn)),
          Fn = String.fromCharCode(32),
          Dn = !1;
        function Vn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== Mn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function jn(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Bn = !1;
        var Hn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Wn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Hn[e.type] : "textarea" === t;
        }
        function $n(e, t, n, r) {
          Ue(r),
            0 < (t = Qr(t, "onChange")).length &&
              ((n = new sn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Qn = null,
          Xn = null;
        function Kn(e) {
          Fr(e, 0);
        }
        function qn(e) {
          if (X(wa(e))) return e;
        }
        function Yn(e, t) {
          if ("change" === e) return t;
        }
        var Gn = !1;
        if (s) {
          var Jn;
          if (s) {
            var Zn = "oninput" in document;
            if (!Zn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Zn = "function" === typeof er.oninput);
            }
            Jn = Zn;
          } else Jn = !1;
          Gn = Jn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Qn && (Qn.detachEvent("onpropertychange", nr), (Xn = Qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && qn(Xn)) {
            var t = [];
            $n(t, Xn, e, ke(e)), Ne(Kn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Xn = n), (Qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return qn(Xn);
        }
        function lr(e, t) {
          if ("click" === e) return qn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return qn(t);
        }
        var cr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function ir(e, t) {
          if (cr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!m.call(t, a) || !cr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function sr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function mr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? mr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fr() {
          for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = K((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function dr(e) {
          var t = fr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            mr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  l = Math.min(r.start, a);
                (r = void 0 === r.end ? l : Math.min(r.end, a)),
                  !e.extend && l > r && ((a = r), (r = l), (l = a)),
                  (a = sr(n, l));
                var o = sr(n, r);
                a &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  l > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var vr = s && "documentMode" in document && 11 >= document.documentMode,
          hr = null,
          gr = null,
          yr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == hr ||
            hr !== K(r) ||
            ("selectionStart" in (r = hr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (yr && ir(yr, r)) ||
              ((yr = r),
              0 < (r = Qr(gr, "onSelect")).length &&
                ((t = new sn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = hr))));
        }
        function kr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var Rr = {
            animationend: kr("Animation", "AnimationEnd"),
            animationiteration: kr("Animation", "AnimationIteration"),
            animationstart: kr("Animation", "AnimationStart"),
            transitionend: kr("Transition", "TransitionEnd"),
          },
          Sr = {},
          _r = {};
        function Ir(e) {
          if (Sr[e]) return Sr[e];
          if (!Rr[e]) return e;
          var t,
            n = Rr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in _r) return (Sr[e] = n[t]);
          return e;
        }
        s &&
          ((_r = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete Rr.animationend.animation,
            delete Rr.animationiteration.animation,
            delete Rr.animationstart.animation),
          "TransitionEvent" in window || delete Rr.transitionend.transition);
        var Ur = Ir("animationend"),
          Ar = Ir("animationiteration"),
          Er = Ir("animationstart"),
          xr = Ir("transitionend"),
          Cr = new Map(),
          Nr =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function zr(e, t) {
          Cr.set(e, t), i(t, [e]);
        }
        for (var Mr = 0; Mr < Nr.length; Mr++) {
          var Tr = Nr[Mr];
          zr(Tr.toLowerCase(), "on" + (Tr[0].toUpperCase() + Tr.slice(1)));
        }
        zr(Ur, "onAnimationEnd"),
          zr(Ar, "onAnimationIteration"),
          zr(Er, "onAnimationStart"),
          zr("dblclick", "onDoubleClick"),
          zr("focusin", "onFocus"),
          zr("focusout", "onBlur"),
          zr(xr, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          i(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          i(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          i("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          i(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          i(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          i(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Pr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Or = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Pr)
          );
        function Lr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, o, c, i, u) {
              if ((je.apply(this, arguments), Oe)) {
                if (!Oe) throw Error(l(198));
                var s = Le;
                (Oe = !1), (Le = null), Fe || ((Fe = !0), (De = s));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Fr(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var l = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var c = r[o],
                    i = c.instance,
                    u = c.currentTarget;
                  if (((c = c.listener), i !== l && a.isPropagationStopped()))
                    break e;
                  Lr(a, c, u), (l = i);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((i = (c = r[o]).instance),
                    (u = c.currentTarget),
                    (c = c.listener),
                    i !== l && a.isPropagationStopped())
                  )
                    break e;
                  Lr(a, c, u), (l = i);
                }
            }
          }
          if (Fe) throw ((e = De), (Fe = !1), (De = null), e);
        }
        function Dr(e, t) {
          var n = t[va];
          void 0 === n && (n = t[va] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Hr(t, e, 2, !1), n.add(r));
        }
        function Vr(e, t, n) {
          var r = 0;
          t && (r |= 4), Hr(n, e, r, t);
        }
        var jr = "_reactListening" + Math.random().toString(36).slice(2);
        function Br(e) {
          if (!e[jr]) {
            (e[jr] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Or.has(t) || Vr(t, !1, e), Vr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[jr] || ((t[jr] = !0), Vr("selectionchange", !1, t));
          }
        }
        function Hr(e, t, n, r) {
          switch (Yt(t)) {
            case 1:
              var a = $t;
              break;
            case 4:
              a = Qt;
              break;
            default:
              a = Xt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Me ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Wr(e, t, n, r, a) {
          var l = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var c = r.stateNode.containerInfo;
                if (c === a || (8 === c.nodeType && c.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var i = o.tag;
                    if (
                      (3 === i || 4 === i) &&
                      ((i = o.stateNode.containerInfo) === a ||
                        (8 === i.nodeType && i.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== c; ) {
                  if (null === (o = ya(c))) return;
                  if (5 === (i = o.tag) || 6 === i) {
                    r = l = o;
                    continue e;
                  }
                  c = c.parentNode;
                }
              }
              r = r.return;
            }
          Ne(function () {
            var r = l,
              a = ke(n),
              o = [];
            e: {
              var c = Cr.get(e);
              if (void 0 !== c) {
                var i = sn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    i = An;
                    break;
                  case "focusin":
                    (u = "focus"), (i = hn);
                    break;
                  case "focusout":
                    (u = "blur"), (i = hn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    i = hn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    i = dn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    i = vn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    i = xn;
                    break;
                  case Ur:
                  case Ar:
                  case Er:
                    i = gn;
                    break;
                  case xr:
                    i = Cn;
                    break;
                  case "scroll":
                    i = fn;
                    break;
                  case "wheel":
                    i = zn;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    i = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    i = En;
                }
                var s = 0 !== (4 & t),
                  m = !s && "scroll" === e,
                  f = s ? (null !== c ? c + "Capture" : null) : c;
                s = [];
                for (var p, d = r; null !== d; ) {
                  var v = (p = d).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== f &&
                        null != (v = ze(d, f)) &&
                        s.push($r(d, v, p))),
                    m)
                  )
                    break;
                  d = d.return;
                }
                0 < s.length &&
                  ((c = new i(c, u, null, n, a)),
                  o.push({ event: c, listeners: s }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((i = "mouseout" === e || "pointerout" === e),
                (!(c = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ya(u) && !u[da])) &&
                  (i || c) &&
                  ((c =
                    a.window === a
                      ? a
                      : (c = a.ownerDocument)
                      ? c.defaultView || c.parentWindow
                      : window),
                  i
                    ? ((i = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? ya(u)
                          : null) &&
                        (u !== (m = Be(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((i = null), (u = r)),
                  i !== u))
              ) {
                if (
                  ((s = dn),
                  (v = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (d = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((s = En),
                    (v = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (d = "pointer")),
                  (m = null == i ? c : wa(i)),
                  (p = null == u ? c : wa(u)),
                  ((c = new s(v, d + "leave", i, n, a)).target = m),
                  (c.relatedTarget = p),
                  (v = null),
                  ya(a) === r &&
                    (((s = new s(f, d + "enter", u, n, a)).target = p),
                    (s.relatedTarget = m),
                    (v = s)),
                  (m = v),
                  i && u)
                )
                  e: {
                    for (f = u, d = 0, p = s = i; p; p = Xr(p)) d++;
                    for (p = 0, v = f; v; v = Xr(v)) p++;
                    for (; 0 < d - p; ) (s = Xr(s)), d--;
                    for (; 0 < p - d; ) (f = Xr(f)), p--;
                    for (; d--; ) {
                      if (s === f || (null !== f && s === f.alternate)) break e;
                      (s = Xr(s)), (f = Xr(f));
                    }
                    s = null;
                  }
                else s = null;
                null !== i && Kr(o, c, i, s, !1),
                  null !== u && null !== m && Kr(o, m, u, s, !0);
              }
              if (
                "select" ===
                  (i =
                    (c = r ? wa(r) : window).nodeName &&
                    c.nodeName.toLowerCase()) ||
                ("input" === i && "file" === c.type)
              )
                var h = Yn;
              else if (Wn(c))
                if (Gn) h = or;
                else {
                  h = ar;
                  var g = rr;
                }
              else
                (i = c.nodeName) &&
                  "input" === i.toLowerCase() &&
                  ("checkbox" === c.type || "radio" === c.type) &&
                  (h = lr);
              switch (
                (h && (h = h(e, r))
                  ? $n(o, h, n, a)
                  : (g && g(e, c, r),
                    "focusout" === e &&
                      (g = c._wrapperState) &&
                      g.controlled &&
                      "number" === c.type &&
                      ee(c, "number", c.value)),
                (g = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Wn(g) || "true" === g.contentEditable) &&
                    ((hr = g), (gr = r), (yr = null));
                  break;
                case "focusout":
                  yr = gr = hr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(o, n, a);
                  break;
                case "selectionchange":
                  if (vr) break;
                case "keydown":
                case "keyup":
                  wr(o, n, a);
              }
              var y;
              if (Tn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Bn
                  ? Vn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Ln &&
                  "ko" !== n.locale &&
                  (Bn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Bn && (y = en())
                    : ((Jt = "value" in (Gt = a) ? Gt.value : Gt.textContent),
                      (Bn = !0))),
                0 < (g = Qr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  o.push({ event: b, listeners: g }),
                  y ? (b.data = y) : null !== (y = jn(n)) && (b.data = y))),
                (y = On
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return jn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Dn = !0), Fn);
                        case "textInput":
                          return (e = t.data) === Fn && Dn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Bn)
                        return "compositionend" === e || (!Tn && Vn(e, t))
                          ? ((e = en()), (Zt = Jt = Gt = null), (Bn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Ln && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Qr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = y));
            }
            Fr(o, t);
          });
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              l = a.stateNode;
            5 === a.tag &&
              null !== l &&
              ((a = l),
              null != (l = ze(e, n)) && r.unshift($r(e, l, a)),
              null != (l = ze(e, t)) && r.push($r(e, l, a))),
              (e = e.return);
          }
          return r;
        }
        function Xr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kr(e, t, n, r, a) {
          for (var l = t._reactName, o = []; null !== n && n !== r; ) {
            var c = n,
              i = c.alternate,
              u = c.stateNode;
            if (null !== i && i === r) break;
            5 === c.tag &&
              null !== u &&
              ((c = u),
              a
                ? null != (i = ze(n, l)) && o.unshift($r(n, i, c))
                : a || (null != (i = ze(n, l)) && o.push($r(n, i, c)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var qr = /\r\n?/g,
          Yr = /\u0000|\uFFFD/g;
        function Gr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(qr, "\n")
            .replace(Yr, "");
        }
        function Jr(e, t, n) {
          if (((t = Gr(t)), Gr(e) !== t && n)) throw Error(l(425));
        }
        function Zr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          la = "function" === typeof Promise ? Promise : void 0,
          oa =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof la
              ? function (e) {
                  return la.resolve(null).then(e).catch(ca);
                }
              : ra;
        function ca(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ia(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Bt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Bt(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function sa(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var ma = Math.random().toString(36).slice(2),
          fa = "__reactFiber$" + ma,
          pa = "__reactProps$" + ma,
          da = "__reactContainer$" + ma,
          va = "__reactEvents$" + ma,
          ha = "__reactListeners$" + ma,
          ga = "__reactHandles$" + ma;
        function ya(e) {
          var t = e[fa];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[da] || n[fa])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = sa(e); null !== e; ) {
                  if ((n = e[fa])) return n;
                  e = sa(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[fa] || e[da]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(l(33));
        }
        function ka(e) {
          return e[pa] || null;
        }
        var Ra = [],
          Sa = -1;
        function _a(e) {
          return { current: e };
        }
        function Ia(e) {
          0 > Sa || ((e.current = Ra[Sa]), (Ra[Sa] = null), Sa--);
        }
        function Ua(e, t) {
          Sa++, (Ra[Sa] = e.current), (e.current = t);
        }
        var Aa = {},
          Ea = _a(Aa),
          xa = _a(!1),
          Ca = Aa;
        function Na(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Aa;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            l = {};
          for (a in n) l[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
          );
        }
        function za(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Ma() {
          Ia(xa), Ia(Ea);
        }
        function Ta(e, t, n) {
          if (Ea.current !== Aa) throw Error(l(168));
          Ua(Ea, t), Ua(xa, n);
        }
        function Pa(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(l(108, H(e) || "Unknown", a));
          return L({}, n, r);
        }
        function Oa(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Aa),
            (Ca = Ea.current),
            Ua(Ea, e),
            Ua(xa, xa.current),
            !0
          );
        }
        function La(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(l(169));
          n
            ? ((e = Pa(e, t, Ca)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ia(xa),
              Ia(Ea),
              Ua(Ea, e))
            : Ia(xa),
            Ua(xa, n);
        }
        var Fa = null,
          Da = !1,
          Va = !1;
        function ja(e) {
          null === Fa ? (Fa = [e]) : Fa.push(e);
        }
        function Ba() {
          if (!Va && null !== Fa) {
            Va = !0;
            var e = 0,
              t = bt;
            try {
              var n = Fa;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Fa = null), (Da = !1);
            } catch (a) {
              throw (null !== Fa && (Fa = Fa.slice(e + 1)), Xe(Ze, Ba), a);
            } finally {
              (bt = t), (Va = !1);
            }
          }
          return null;
        }
        var Ha = [],
          Wa = 0,
          $a = null,
          Qa = 0,
          Xa = [],
          Ka = 0,
          qa = null,
          Ya = 1,
          Ga = "";
        function Ja(e, t) {
          (Ha[Wa++] = Qa), (Ha[Wa++] = $a), ($a = e), (Qa = t);
        }
        function Za(e, t, n) {
          (Xa[Ka++] = Ya), (Xa[Ka++] = Ga), (Xa[Ka++] = qa), (qa = e);
          var r = Ya;
          e = Ga;
          var a = 32 - ot(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var l = 32 - ot(t) + a;
          if (30 < l) {
            var o = a - (a % 5);
            (l = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Ya = (1 << (32 - ot(t) + a)) | (n << a) | r),
              (Ga = l + e);
          } else (Ya = (1 << l) | (n << a) | r), (Ga = e);
        }
        function el(e) {
          null !== e.return && (Ja(e, 1), Za(e, 1, 0));
        }
        function tl(e) {
          for (; e === $a; )
            ($a = Ha[--Wa]), (Ha[Wa] = null), (Qa = Ha[--Wa]), (Ha[Wa] = null);
          for (; e === qa; )
            (qa = Xa[--Ka]),
              (Xa[Ka] = null),
              (Ga = Xa[--Ka]),
              (Xa[Ka] = null),
              (Ya = Xa[--Ka]),
              (Xa[Ka] = null);
        }
        var nl = null,
          rl = null,
          al = !1,
          ll = null;
        function ol(e, t) {
          var n = Nu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function cl(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (nl = e), (rl = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (nl = e), (rl = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== qa ? { id: Ya, overflow: Ga } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Nu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (nl = e),
                (rl = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function il(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ul(e) {
          if (al) {
            var t = rl;
            if (t) {
              var n = t;
              if (!cl(e, t)) {
                if (il(e)) throw Error(l(418));
                t = ua(n.nextSibling);
                var r = nl;
                t && cl(e, t)
                  ? ol(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e));
              }
            } else {
              if (il(e)) throw Error(l(418));
              (e.flags = (-4097 & e.flags) | 2), (al = !1), (nl = e);
            }
          }
        }
        function sl(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          nl = e;
        }
        function ml(e) {
          if (e !== nl) return !1;
          if (!al) return sl(e), (al = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = rl))
          ) {
            if (il(e)) throw (fl(), Error(l(418)));
            for (; t; ) ol(e, t), (t = ua(t.nextSibling));
          }
          if ((sl(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(l(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      rl = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              rl = null;
            }
          } else rl = nl ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function fl() {
          for (var e = rl; e; ) e = ua(e.nextSibling);
        }
        function pl() {
          (rl = nl = null), (al = !1);
        }
        function dl(e) {
          null === ll ? (ll = [e]) : ll.push(e);
        }
        var vl = w.ReactCurrentBatchConfig;
        function hl(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = L({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var gl = _a(null),
          yl = null,
          bl = null,
          wl = null;
        function kl() {
          wl = bl = yl = null;
        }
        function Rl(e) {
          var t = gl.current;
          Ia(gl), (e._currentValue = t);
        }
        function Sl(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function _l(e, t) {
          (yl = e),
            (wl = bl = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (wc = !0), (e.firstContext = null));
        }
        function Il(e) {
          var t = e._currentValue;
          if (wl !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === bl)
            ) {
              if (null === yl) throw Error(l(308));
              (bl = e), (yl.dependencies = { lanes: 0, firstContext: e });
            } else bl = bl.next = e;
          return t;
        }
        var Ul = null;
        function Al(e) {
          null === Ul ? (Ul = [e]) : Ul.push(e);
        }
        function El(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Al(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            xl(e, r)
          );
        }
        function xl(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Cl = !1;
        function Nl(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function zl(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Ml(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Tl(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & Ei))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              xl(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Al(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            xl(e, n)
          );
        }
        function Pl(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        function Ol(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              l = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === l ? (a = l = o) : (l = l.next = o), (n = n.next);
              } while (null !== n);
              null === l ? (a = l = t) : (l = l.next = t);
            } else a = l = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: l,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Ll(e, t, n, r) {
          var a = e.updateQueue;
          Cl = !1;
          var l = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            c = a.shared.pending;
          if (null !== c) {
            a.shared.pending = null;
            var i = c,
              u = i.next;
            (i.next = null), null === o ? (l = u) : (o.next = u), (o = i);
            var s = e.alternate;
            null !== s &&
              (c = (s = s.updateQueue).lastBaseUpdate) !== o &&
              (null === c ? (s.firstBaseUpdate = u) : (c.next = u),
              (s.lastBaseUpdate = i));
          }
          if (null !== l) {
            var m = a.baseState;
            for (o = 0, s = u = i = null, c = l; ; ) {
              var f = c.lane,
                p = c.eventTime;
              if ((r & f) === f) {
                null !== s &&
                  (s = s.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: c.tag,
                      payload: c.payload,
                      callback: c.callback,
                      next: null,
                    });
                e: {
                  var d = e,
                    v = c;
                  switch (((f = t), (p = n), v.tag)) {
                    case 1:
                      if ("function" === typeof (d = v.payload)) {
                        m = d.call(p, m, f);
                        break e;
                      }
                      m = d;
                      break e;
                    case 3:
                      d.flags = (-65537 & d.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (d = v.payload)
                              ? d.call(p, m, f)
                              : d) ||
                        void 0 === f
                      )
                        break e;
                      m = L({}, m, f);
                      break e;
                    case 2:
                      Cl = !0;
                  }
                }
                null !== c.callback &&
                  0 !== c.lane &&
                  ((e.flags |= 64),
                  null === (f = a.effects) ? (a.effects = [c]) : f.push(c));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: c.tag,
                  payload: c.payload,
                  callback: c.callback,
                  next: null,
                }),
                  null === s ? ((u = s = p), (i = m)) : (s = s.next = p),
                  (o |= f);
              if (null === (c = c.next)) {
                if (null === (c = a.shared.pending)) break;
                (c = (f = c).next),
                  (f.next = null),
                  (a.lastBaseUpdate = f),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === s && (i = m),
              (a.baseState = i),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = s),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (o |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === l && (a.shared.lanes = 0);
            (Oi |= o), (e.lanes = o), (e.memoizedState = m);
          }
        }
        function Fl(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(l(191, a));
                a.call(r);
              }
            }
        }
        var Dl = new r.Component().refs;
        function Vl(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : L({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var jl = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Be(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              l = Ml(r, a);
            (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Tl(e, l, a)) && (nu(t, e, a, r), Pl(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = eu(),
              a = tu(e),
              l = Ml(r, a);
            (l.tag = 1),
              (l.payload = t),
              void 0 !== n && null !== n && (l.callback = n),
              null !== (t = Tl(e, l, a)) && (nu(t, e, a, r), Pl(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = eu(),
              r = tu(e),
              a = Ml(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Tl(e, a, r)) && (nu(t, e, r, n), Pl(t, e, r));
          },
        };
        function Bl(e, t, n, r, a, l, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !ir(n, r) ||
                !ir(a, l);
        }
        function Hl(e, t, n) {
          var r = !1,
            a = Aa,
            l = t.contextType;
          return (
            "object" === typeof l && null !== l
              ? (l = Il(l))
              : ((a = za(t) ? Ca : Ea.current),
                (l = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Na(e, a)
                  : Aa)),
            (t = new t(n, l)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = jl),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            t
          );
        }
        function Wl(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && jl.enqueueReplaceState(t, t.state, null);
        }
        function $l(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Dl), Nl(e);
          var l = t.contextType;
          "object" === typeof l && null !== l
            ? (a.context = Il(l))
            : ((l = za(t) ? Ca : Ea.current), (a.context = Na(e, l))),
            (a.state = e.memoizedState),
            "function" === typeof (l = t.getDerivedStateFromProps) &&
              (Vl(e, t, l, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && jl.enqueueReplaceState(a, a.state, null),
              Ll(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Ql(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(l(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(l(147, e));
              var a = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Dl && (t = a.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(l(284));
            if (!n._owner) throw Error(l(290, e));
          }
          return e;
        }
        function Xl(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              l(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Kl(e) {
          return (0, e._init)(e._payload);
        }
        function ql(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Mu(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function c(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function i(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Lu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var l = n.type;
            return l === S
              ? m(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === l ||
                  ("object" === typeof l &&
                    null !== l &&
                    l.$$typeof === z &&
                    Kl(l) === t.type))
              ? (((r = a(t, n.props)).ref = Ql(e, t, n)), (r.return = e), r)
              : (((r = Tu(n.type, n.key, n.props, null, e.mode, r)).ref = Ql(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function s(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Fu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function m(e, t, n, r, l) {
            return null === t || 7 !== t.tag
              ? (((t = Pu(n, e.mode, r, l)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Lu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = Tu(t.type, t.key, t.props, null, e.mode, n)).ref = Ql(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case R:
                  return ((t = Fu(t, e.mode, n)).return = e), t;
                case z:
                  return f(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || P(t))
                return ((t = Pu(t, e.mode, n, null)).return = e), t;
              Xl(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : i(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === a ? u(e, t, n, r) : null;
                case R:
                  return n.key === a ? s(e, t, n, r) : null;
                case z:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || P(n)) return null !== a ? null : m(e, t, n, r, null);
              Xl(e, n);
            }
            return null;
          }
          function d(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return i(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case R:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case z:
                  return d(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || P(r))
                return m(t, (e = e.get(n) || null), r, a, null);
              Xl(t, r);
            }
            return null;
          }
          function v(a, l, c, i) {
            for (
              var u = null, s = null, m = l, v = (l = 0), h = null;
              null !== m && v < c.length;
              v++
            ) {
              m.index > v ? ((h = m), (m = null)) : (h = m.sibling);
              var g = p(a, m, c[v], i);
              if (null === g) {
                null === m && (m = h);
                break;
              }
              e && m && null === g.alternate && t(a, m),
                (l = o(g, l, v)),
                null === s ? (u = g) : (s.sibling = g),
                (s = g),
                (m = h);
            }
            if (v === c.length) return n(a, m), al && Ja(a, v), u;
            if (null === m) {
              for (; v < c.length; v++)
                null !== (m = f(a, c[v], i)) &&
                  ((l = o(m, l, v)),
                  null === s ? (u = m) : (s.sibling = m),
                  (s = m));
              return al && Ja(a, v), u;
            }
            for (m = r(a, m); v < c.length; v++)
              null !== (h = d(m, a, v, c[v], i)) &&
                (e &&
                  null !== h.alternate &&
                  m.delete(null === h.key ? v : h.key),
                (l = o(h, l, v)),
                null === s ? (u = h) : (s.sibling = h),
                (s = h));
            return (
              e &&
                m.forEach(function (e) {
                  return t(a, e);
                }),
              al && Ja(a, v),
              u
            );
          }
          function h(a, c, i, u) {
            var s = P(i);
            if ("function" !== typeof s) throw Error(l(150));
            if (null == (i = s.call(i))) throw Error(l(151));
            for (
              var m = (s = null), v = c, h = (c = 0), g = null, y = i.next();
              null !== v && !y.done;
              h++, y = i.next()
            ) {
              v.index > h ? ((g = v), (v = null)) : (g = v.sibling);
              var b = p(a, v, y.value, u);
              if (null === b) {
                null === v && (v = g);
                break;
              }
              e && v && null === b.alternate && t(a, v),
                (c = o(b, c, h)),
                null === m ? (s = b) : (m.sibling = b),
                (m = b),
                (v = g);
            }
            if (y.done) return n(a, v), al && Ja(a, h), s;
            if (null === v) {
              for (; !y.done; h++, y = i.next())
                null !== (y = f(a, y.value, u)) &&
                  ((c = o(y, c, h)),
                  null === m ? (s = y) : (m.sibling = y),
                  (m = y));
              return al && Ja(a, h), s;
            }
            for (v = r(a, v); !y.done; h++, y = i.next())
              null !== (y = d(v, a, h, y.value, u)) &&
                (e &&
                  null !== y.alternate &&
                  v.delete(null === y.key ? h : y.key),
                (c = o(y, c, h)),
                null === m ? (s = y) : (m.sibling = y),
                (m = y));
            return (
              e &&
                v.forEach(function (e) {
                  return t(a, e);
                }),
              al && Ja(a, h),
              s
            );
          }
          return function e(r, l, o, i) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === S &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case k:
                  e: {
                    for (var u = o.key, s = l; null !== s; ) {
                      if (s.key === u) {
                        if ((u = o.type) === S) {
                          if (7 === s.tag) {
                            n(r, s.sibling),
                              ((l = a(s, o.props.children)).return = r),
                              (r = l);
                            break e;
                          }
                        } else if (
                          s.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === z &&
                            Kl(u) === s.type)
                        ) {
                          n(r, s.sibling),
                            ((l = a(s, o.props)).ref = Ql(r, s, o)),
                            (l.return = r),
                            (r = l);
                          break e;
                        }
                        n(r, s);
                        break;
                      }
                      t(r, s), (s = s.sibling);
                    }
                    o.type === S
                      ? (((l = Pu(o.props.children, r.mode, i, o.key)).return =
                          r),
                        (r = l))
                      : (((i = Tu(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          i
                        )).ref = Ql(r, l, o)),
                        (i.return = r),
                        (r = i));
                  }
                  return c(r);
                case R:
                  e: {
                    for (s = o.key; null !== l; ) {
                      if (l.key === s) {
                        if (
                          4 === l.tag &&
                          l.stateNode.containerInfo === o.containerInfo &&
                          l.stateNode.implementation === o.implementation
                        ) {
                          n(r, l.sibling),
                            ((l = a(l, o.children || [])).return = r),
                            (r = l);
                          break e;
                        }
                        n(r, l);
                        break;
                      }
                      t(r, l), (l = l.sibling);
                    }
                    ((l = Fu(o, r.mode, i)).return = r), (r = l);
                  }
                  return c(r);
                case z:
                  return e(r, l, (s = o._init)(o._payload), i);
              }
              if (te(o)) return v(r, l, o, i);
              if (P(o)) return h(r, l, o, i);
              Xl(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== l && 6 === l.tag
                  ? (n(r, l.sibling), ((l = a(l, o)).return = r), (r = l))
                  : (n(r, l), ((l = Lu(o, r.mode, i)).return = r), (r = l)),
                c(r))
              : n(r, l);
          };
        }
        var Yl = ql(!0),
          Gl = ql(!1),
          Jl = {},
          Zl = _a(Jl),
          eo = _a(Jl),
          to = _a(Jl);
        function no(e) {
          if (e === Jl) throw Error(l(174));
          return e;
        }
        function ro(e, t) {
          switch ((Ua(to, t), Ua(eo, e), Ua(Zl, Jl), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ie(null, "");
              break;
            default:
              t = ie(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ia(Zl), Ua(Zl, t);
        }
        function ao() {
          Ia(Zl), Ia(eo), Ia(to);
        }
        function lo(e) {
          no(to.current);
          var t = no(Zl.current),
            n = ie(t, e.type);
          t !== n && (Ua(eo, e), Ua(Zl, n));
        }
        function oo(e) {
          eo.current === e && (Ia(Zl), Ia(eo));
        }
        var co = _a(0);
        function io(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var uo = [];
        function so() {
          for (var e = 0; e < uo.length; e++)
            uo[e]._workInProgressVersionPrimary = null;
          uo.length = 0;
        }
        var mo = w.ReactCurrentDispatcher,
          fo = w.ReactCurrentBatchConfig,
          po = 0,
          vo = null,
          ho = null,
          go = null,
          yo = !1,
          bo = !1,
          wo = 0,
          ko = 0;
        function Ro() {
          throw Error(l(321));
        }
        function So(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!cr(e[n], t[n])) return !1;
          return !0;
        }
        function _o(e, t, n, r, a, o) {
          if (
            ((po = o),
            (vo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (mo.current = null === e || null === e.memoizedState ? cc : ic),
            (e = n(r, a)),
            bo)
          ) {
            o = 0;
            do {
              if (((bo = !1), (wo = 0), 25 <= o)) throw Error(l(301));
              (o += 1),
                (go = ho = null),
                (t.updateQueue = null),
                (mo.current = uc),
                (e = n(r, a));
            } while (bo);
          }
          if (
            ((mo.current = oc),
            (t = null !== ho && null !== ho.next),
            (po = 0),
            (go = ho = vo = null),
            (yo = !1),
            t)
          )
            throw Error(l(300));
          return e;
        }
        function Io() {
          var e = 0 !== wo;
          return (wo = 0), e;
        }
        function Uo() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === go ? (vo.memoizedState = go = e) : (go = go.next = e), go
          );
        }
        function Ao() {
          if (null === ho) {
            var e = vo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ho.next;
          var t = null === go ? vo.memoizedState : go.next;
          if (null !== t) (go = t), (ho = e);
          else {
            if (null === e) throw Error(l(310));
            (e = {
              memoizedState: (ho = e).memoizedState,
              baseState: ho.baseState,
              baseQueue: ho.baseQueue,
              queue: ho.queue,
              next: null,
            }),
              null === go ? (vo.memoizedState = go = e) : (go = go.next = e);
          }
          return go;
        }
        function Eo(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function xo(e) {
          var t = Ao(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = ho,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var c = a.next;
              (a.next = o.next), (o.next = c);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (o = a.next), (r = r.baseState);
            var i = (c = null),
              u = null,
              s = o;
            do {
              var m = s.lane;
              if ((po & m) === m)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: s.action,
                      hasEagerState: s.hasEagerState,
                      eagerState: s.eagerState,
                      next: null,
                    }),
                  (r = s.hasEagerState ? s.eagerState : e(r, s.action));
              else {
                var f = {
                  lane: m,
                  action: s.action,
                  hasEagerState: s.hasEagerState,
                  eagerState: s.eagerState,
                  next: null,
                };
                null === u ? ((i = u = f), (c = r)) : (u = u.next = f),
                  (vo.lanes |= m),
                  (Oi |= m);
              }
              s = s.next;
            } while (null !== s && s !== o);
            null === u ? (c = r) : (u.next = i),
              cr(r, t.memoizedState) || (wc = !0),
              (t.memoizedState = r),
              (t.baseState = c),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (o = a.lane), (vo.lanes |= o), (Oi |= o), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function Co(e) {
          var t = Ao(),
            n = t.queue;
          if (null === n) throw Error(l(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var c = (a = a.next);
            do {
              (o = e(o, c.action)), (c = c.next);
            } while (c !== a);
            cr(o, t.memoizedState) || (wc = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function No() {}
        function zo(e, t) {
          var n = vo,
            r = Ao(),
            a = t(),
            o = !cr(r.memoizedState, a);
          if (
            (o && ((r.memoizedState = a), (wc = !0)),
            (r = r.queue),
            Wo(Po.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== go && 1 & go.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Do(9, To.bind(null, n, r, a, t), void 0, null),
              null === xi)
            )
              throw Error(l(349));
            0 !== (30 & po) || Mo(n, t, a);
          }
          return a;
        }
        function Mo(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = vo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function To(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Oo(t) && Lo(e);
        }
        function Po(e, t, n) {
          return n(function () {
            Oo(t) && Lo(e);
          });
        }
        function Oo(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !cr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Lo(e) {
          var t = xl(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function Fo(e) {
          var t = Uo();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Eo,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = nc.bind(null, vo, e)),
            [t.memoizedState, e]
          );
        }
        function Do(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = vo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function Vo() {
          return Ao().memoizedState;
        }
        function jo(e, t, n, r) {
          var a = Uo();
          (vo.flags |= e),
            (a.memoizedState = Do(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Bo(e, t, n, r) {
          var a = Ao();
          r = void 0 === r ? null : r;
          var l = void 0;
          if (null !== ho) {
            var o = ho.memoizedState;
            if (((l = o.destroy), null !== r && So(r, o.deps)))
              return void (a.memoizedState = Do(t, n, l, r));
          }
          (vo.flags |= e), (a.memoizedState = Do(1 | t, n, l, r));
        }
        function Ho(e, t) {
          return jo(8390656, 8, e, t);
        }
        function Wo(e, t) {
          return Bo(2048, 8, e, t);
        }
        function $o(e, t) {
          return Bo(4, 2, e, t);
        }
        function Qo(e, t) {
          return Bo(4, 4, e, t);
        }
        function Xo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ko(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Bo(4, 4, Xo.bind(null, t, e), n)
          );
        }
        function qo() {}
        function Yo(e, t) {
          var n = Ao();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && So(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Go(e, t) {
          var n = Ao();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && So(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Jo(e, t, n) {
          return 0 === (21 & po)
            ? (e.baseState && ((e.baseState = !1), (wc = !0)),
              (e.memoizedState = n))
            : (cr(n, t) ||
                ((n = vt()), (vo.lanes |= n), (Oi |= n), (e.baseState = !0)),
              t);
        }
        function Zo(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = fo.transition;
          fo.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (fo.transition = r);
          }
        }
        function ec() {
          return Ao().memoizedState;
        }
        function tc(e, t, n) {
          var r = tu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rc(e))
          )
            ac(t, n);
          else if (null !== (n = El(e, t, n, r))) {
            nu(n, e, r, eu()), lc(n, t, r);
          }
        }
        function nc(e, t, n) {
          var r = tu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rc(e)) ac(t, a);
          else {
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  c = l(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = c), cr(c, o))) {
                  var i = t.interleaved;
                  return (
                    null === i
                      ? ((a.next = a), Al(t))
                      : ((a.next = i.next), (i.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (n = El(e, t, a, r)) &&
              (nu(n, e, r, (a = eu())), lc(n, t, r));
          }
        }
        function rc(e) {
          var t = e.alternate;
          return e === vo || (null !== t && t === vo);
        }
        function ac(e, t) {
          bo = yo = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function lc(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), yt(e, n);
          }
        }
        var oc = {
            readContext: Il,
            useCallback: Ro,
            useContext: Ro,
            useEffect: Ro,
            useImperativeHandle: Ro,
            useInsertionEffect: Ro,
            useLayoutEffect: Ro,
            useMemo: Ro,
            useReducer: Ro,
            useRef: Ro,
            useState: Ro,
            useDebugValue: Ro,
            useDeferredValue: Ro,
            useTransition: Ro,
            useMutableSource: Ro,
            useSyncExternalStore: Ro,
            useId: Ro,
            unstable_isNewReconciler: !1,
          },
          cc = {
            readContext: Il,
            useCallback: function (e, t) {
              return (Uo().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Il,
            useEffect: Ho,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                jo(4194308, 4, Xo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return jo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return jo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Uo();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Uo();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tc.bind(null, vo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Uo().memoizedState = e);
            },
            useState: Fo,
            useDebugValue: qo,
            useDeferredValue: function (e) {
              return (Uo().memoizedState = e);
            },
            useTransition: function () {
              var e = Fo(!1),
                t = e[0];
              return (
                (e = Zo.bind(null, e[1])), (Uo().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = vo,
                a = Uo();
              if (al) {
                if (void 0 === n) throw Error(l(407));
                n = n();
              } else {
                if (((n = t()), null === xi)) throw Error(l(349));
                0 !== (30 & po) || Mo(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                Ho(Po.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Do(9, To.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Uo(),
                t = xi.identifierPrefix;
              if (al) {
                var n = Ga;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Ya & ~(1 << (32 - ot(Ya) - 1))).toString(32) + n)),
                  0 < (n = wo++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = ko++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ic = {
            readContext: Il,
            useCallback: Yo,
            useContext: Il,
            useEffect: Wo,
            useImperativeHandle: Ko,
            useInsertionEffect: $o,
            useLayoutEffect: Qo,
            useMemo: Go,
            useReducer: xo,
            useRef: Vo,
            useState: function () {
              return xo(Eo);
            },
            useDebugValue: qo,
            useDeferredValue: function (e) {
              return Jo(Ao(), ho.memoizedState, e);
            },
            useTransition: function () {
              return [xo(Eo)[0], Ao().memoizedState];
            },
            useMutableSource: No,
            useSyncExternalStore: zo,
            useId: ec,
            unstable_isNewReconciler: !1,
          },
          uc = {
            readContext: Il,
            useCallback: Yo,
            useContext: Il,
            useEffect: Wo,
            useImperativeHandle: Ko,
            useInsertionEffect: $o,
            useLayoutEffect: Qo,
            useMemo: Go,
            useReducer: Co,
            useRef: Vo,
            useState: function () {
              return Co(Eo);
            },
            useDebugValue: qo,
            useDeferredValue: function (e) {
              var t = Ao();
              return null === ho
                ? (t.memoizedState = e)
                : Jo(t, ho.memoizedState, e);
            },
            useTransition: function () {
              return [Co(Eo)[0], Ao().memoizedState];
            },
            useMutableSource: No,
            useSyncExternalStore: zo,
            useId: ec,
            unstable_isNewReconciler: !1,
          };
        function sc(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += j(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (l) {
            a = "\nError generating stack: " + l.message + "\n" + l.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function mc(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function fc(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var pc = "function" === typeof WeakMap ? WeakMap : Map;
        function dc(e, t, n) {
          ((n = Ml(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Wi || ((Wi = !0), ($i = r)), fc(0, t);
            }),
            n
          );
        }
        function vc(e, t, n) {
          (n = Ml(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                fc(0, t);
              });
          }
          var l = e.stateNode;
          return (
            null !== l &&
              "function" === typeof l.componentDidCatch &&
              (n.callback = function () {
                fc(0, t),
                  "function" !== typeof r &&
                    (null === Qi ? (Qi = new Set([this])) : Qi.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function hc(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new pc();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Iu.bind(null, e, t, n)), t.then(e, e));
        }
        function gc(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function yc(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ml(-1, 1)).tag = 2), Tl(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bc = w.ReactCurrentOwner,
          wc = !1;
        function kc(e, t, n, r) {
          t.child = null === e ? Gl(t, null, n, r) : Yl(t, e.child, n, r);
        }
        function Rc(e, t, n, r, a) {
          n = n.render;
          var l = t.ref;
          return (
            _l(t, a),
            (r = _o(e, t, n, r, l, a)),
            (n = Io()),
            null === e || wc
              ? (al && n && el(t), (t.flags |= 1), kc(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wc(e, t, a))
          );
        }
        function Sc(e, t, n, r, a) {
          if (null === e) {
            var l = n.type;
            return "function" !== typeof l ||
              zu(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Tu(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), _c(e, t, l, r, a));
          }
          if (((l = e.child), 0 === (e.lanes & a))) {
            var o = l.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : ir)(o, r) &&
              e.ref === t.ref
            )
              return Wc(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Mu(l, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function _c(e, t, n, r, a) {
          if (null !== e) {
            var l = e.memoizedProps;
            if (ir(l, r) && e.ref === t.ref) {
              if (((wc = !1), (t.pendingProps = r = l), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), Wc(e, t, a);
              0 !== (131072 & e.flags) && (wc = !0);
            }
          }
          return Ac(e, t, n, r, a);
        }
        function Ic(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Ua(Mi, zi),
                (zi |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== l ? l.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Ua(Mi, zi),
                  (zi |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== l ? l.baseLanes : n),
                Ua(Mi, zi),
                (zi |= r);
            }
          else
            null !== l
              ? ((r = l.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Ua(Mi, zi),
              (zi |= r);
          return kc(e, t, a, n), t.child;
        }
        function Uc(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ac(e, t, n, r, a) {
          var l = za(n) ? Ca : Ea.current;
          return (
            (l = Na(t, l)),
            _l(t, a),
            (n = _o(e, t, n, r, l, a)),
            (r = Io()),
            null === e || wc
              ? (al && r && el(t), (t.flags |= 1), kc(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                Wc(e, t, a))
          );
        }
        function Ec(e, t, n, r, a) {
          if (za(n)) {
            var l = !0;
            Oa(t);
          } else l = !1;
          if ((_l(t, a), null === t.stateNode))
            Hc(e, t), Hl(t, n, r), $l(t, n, r, a), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              c = t.memoizedProps;
            o.props = c;
            var i = o.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Il(u))
              : (u = Na(t, (u = za(n) ? Ca : Ea.current)));
            var s = n.getDerivedStateFromProps,
              m =
                "function" === typeof s ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            m ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((c !== r || i !== u) && Wl(t, o, r, u)),
              (Cl = !1);
            var f = t.memoizedState;
            (o.state = f),
              Ll(t, r, o, a),
              (i = t.memoizedState),
              c !== r || f !== i || xa.current || Cl
                ? ("function" === typeof s &&
                    (Vl(t, n, s, r), (i = t.memoizedState)),
                  (c = Cl || Bl(t, n, c, r, f, i, u))
                    ? (m ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = i)),
                  (o.props = r),
                  (o.state = i),
                  (o.context = u),
                  (r = c))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              zl(e, t),
              (c = t.memoizedProps),
              (u = t.type === t.elementType ? c : hl(t.type, c)),
              (o.props = u),
              (m = t.pendingProps),
              (f = o.context),
              "object" === typeof (i = n.contextType) && null !== i
                ? (i = Il(i))
                : (i = Na(t, (i = za(n) ? Ca : Ea.current)));
            var p = n.getDerivedStateFromProps;
            (s =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((c !== m || f !== i) && Wl(t, o, r, i)),
              (Cl = !1),
              (f = t.memoizedState),
              (o.state = f),
              Ll(t, r, o, a);
            var d = t.memoizedState;
            c !== m || f !== d || xa.current || Cl
              ? ("function" === typeof p &&
                  (Vl(t, n, p, r), (d = t.memoizedState)),
                (u = Cl || Bl(t, n, u, r, f, d, i) || !1)
                  ? (s ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, d, i),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, d, i)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (c === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (c === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = d)),
                (o.props = r),
                (o.state = d),
                (o.context = i),
                (r = u))
              : ("function" !== typeof o.componentDidUpdate ||
                  (c === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (c === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return xc(e, t, n, r, l, a);
        }
        function xc(e, t, n, r, a, l) {
          Uc(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return a && La(t, n, !1), Wc(e, t, l);
          (r = t.stateNode), (bc.current = t);
          var c =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Yl(t, e.child, null, l)),
                (t.child = Yl(t, null, c, l)))
              : kc(e, t, c, l),
            (t.memoizedState = r.state),
            a && La(t, n, !0),
            t.child
          );
        }
        function Cc(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ta(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ta(0, t.context, !1),
            ro(e, t.containerInfo);
        }
        function Nc(e, t, n, r, a) {
          return pl(), dl(a), (t.flags |= 256), kc(e, t, n, r), t.child;
        }
        var zc,
          Mc,
          Tc,
          Pc = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Oc(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Lc(e, t, n) {
          var r,
            a = t.pendingProps,
            o = co.current,
            c = !1,
            i = 0 !== (128 & t.flags);
          if (
            ((r = i) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((c = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Ua(co, 1 & o),
            null === e)
          )
            return (
              ul(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((i = a.children),
                  (e = a.fallback),
                  c
                    ? ((a = t.mode),
                      (c = t.child),
                      (i = { mode: "hidden", children: i }),
                      0 === (1 & a) && null !== c
                        ? ((c.childLanes = 0), (c.pendingProps = i))
                        : (c = Ou(i, a, 0, null)),
                      (e = Pu(e, a, n, null)),
                      (c.return = t),
                      (e.return = t),
                      (c.sibling = e),
                      (t.child = c),
                      (t.child.memoizedState = Oc(n)),
                      (t.memoizedState = Pc),
                      e)
                    : Fc(t, i))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, a, o, c) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), Dc(e, t, c, (r = mc(Error(l(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (a = t.mode),
                    (r = Ou(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((o = Pu(o, a, c, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 !== (1 & t.mode) && Yl(t, e.child, null, c),
                    (t.child.memoizedState = Oc(c)),
                    (t.memoizedState = Pc),
                    o);
              if (0 === (1 & t.mode)) return Dc(e, t, c, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var i = r.dgst;
                return (
                  (r = i), Dc(e, t, c, (r = mc((o = Error(l(419))), r, void 0)))
                );
              }
              if (((i = 0 !== (c & e.childLanes)), wc || i)) {
                if (null !== (r = xi)) {
                  switch (c & -c) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | c)) ? 0 : a) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), xl(e, a), nu(r, e, a, -1));
                }
                return vu(), Dc(e, t, c, (r = mc(Error(l(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Au.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (rl = ua(a.nextSibling)),
                  (nl = t),
                  (al = !0),
                  (ll = null),
                  null !== e &&
                    ((Xa[Ka++] = Ya),
                    (Xa[Ka++] = Ga),
                    (Xa[Ka++] = qa),
                    (Ya = e.id),
                    (Ga = e.overflow),
                    (qa = t)),
                  ((t = Fc(t, r.children)).flags |= 4096),
                  t);
            })(e, t, i, a, r, o, n);
          if (c) {
            (c = a.fallback), (i = t.mode), (r = (o = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 === (1 & i) && t.child !== o
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = Mu(o, u)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (c = Mu(r, c))
                : ((c = Pu(c, i, n, null)).flags |= 2),
              (c.return = t),
              (a.return = t),
              (a.sibling = c),
              (t.child = a),
              (a = c),
              (c = t.child),
              (i =
                null === (i = e.child.memoizedState)
                  ? Oc(n)
                  : {
                      baseLanes: i.baseLanes | n,
                      cachePool: null,
                      transitions: i.transitions,
                    }),
              (c.memoizedState = i),
              (c.childLanes = e.childLanes & ~n),
              (t.memoizedState = Pc),
              a
            );
          }
          return (
            (e = (c = e.child).sibling),
            (a = Mu(c, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Fc(e, t) {
          return (
            ((t = Ou(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function Dc(e, t, n, r) {
          return (
            null !== r && dl(r),
            Yl(t, e.child, null, n),
            ((e = Fc(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Vc(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Sl(e.return, t, n);
        }
        function jc(e, t, n, r, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = a));
        }
        function Bc(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if ((kc(e, t, r.children, n), 0 !== (2 & (r = co.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Vc(e, n, t);
                else if (19 === e.tag) Vc(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Ua(co, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === io(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  jc(t, !1, a, n, l);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === io(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                jc(t, !0, n, null, l);
                break;
              case "together":
                jc(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Hc(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function Wc(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Oi |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(l(153));
          if (null !== t.child) {
            for (
              n = Mu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Mu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function $c(e, t) {
          if (!al)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Qc(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function Xc(e, t, n) {
          var r = t.pendingProps;
          switch ((tl(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Qc(t), null;
            case 1:
            case 17:
              return za(t.type) && Ma(), Qc(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ao(),
                Ia(xa),
                Ia(Ea),
                so(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (ml(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ll && (ou(ll), (ll = null)))),
                Qc(t),
                null
              );
            case 5:
              oo(t);
              var a = no(to.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Mc(e, t, n, r),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(l(166));
                  return Qc(t), null;
                }
                if (((e = no(Zl.current)), ml(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[fa] = t), (r[pa] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Dr("cancel", r), Dr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Dr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Pr.length; a++) Dr(Pr[a], r);
                      break;
                    case "source":
                      Dr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Dr("error", r), Dr("load", r);
                      break;
                    case "details":
                      Dr("toggle", r);
                      break;
                    case "input":
                      Y(r, o), Dr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Dr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, o), Dr("invalid", r);
                  }
                  for (var i in (ye(n, o), (a = null), o))
                    if (o.hasOwnProperty(i)) {
                      var u = o[i];
                      "children" === i
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Jr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : c.hasOwnProperty(i) &&
                          null != u &&
                          "onScroll" === i &&
                          Dr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      Q(r), Z(r, o, !0);
                      break;
                    case "textarea":
                      Q(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = Zr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (i = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = ce(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = i.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = i.createElement(n, { is: r.is }))
                        : ((e = i.createElement(n)),
                          "select" === n &&
                            ((i = e),
                            r.multiple
                              ? (i.multiple = !0)
                              : r.size && (i.size = r.size)))
                      : (e = i.createElementNS(e, n)),
                    (e[fa] = t),
                    (e[pa] = r),
                    zc(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((i = be(n, r)), n)) {
                      case "dialog":
                        Dr("cancel", e), Dr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Dr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Pr.length; a++) Dr(Pr[a], e);
                        a = r;
                        break;
                      case "source":
                        Dr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Dr("error", e), Dr("load", e), (a = r);
                        break;
                      case "details":
                        Dr("toggle", e), (a = r);
                        break;
                      case "input":
                        Y(e, r), (a = q(e, r)), Dr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = L({}, r, { value: void 0 })),
                          Dr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Dr("invalid", e);
                    }
                    for (o in (ye(n, a), (u = a)))
                      if (u.hasOwnProperty(o)) {
                        var s = u[o];
                        "style" === o
                          ? he(e, s)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (s = s ? s.__html : void 0) && me(e, s)
                          : "children" === o
                          ? "string" === typeof s
                            ? ("textarea" !== n || "" !== s) && fe(e, s)
                            : "number" === typeof s && fe(e, "" + s)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (c.hasOwnProperty(o)
                              ? null != s && "onScroll" === o && Dr("scroll", e)
                              : null != s && b(e, o, s, i));
                      }
                    switch (n) {
                      case "input":
                        Q(e), Z(e, r, !1);
                        break;
                      case "textarea":
                        Q(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + W(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Zr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Qc(t), null;
            case 6:
              if (e && null != t.stateNode) Tc(0, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(l(166));
                if (((n = no(to.current)), no(Zl.current), ml(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[fa] = t),
                    (o = r.nodeValue !== n) && null !== (e = nl))
                  )
                    switch (e.tag) {
                      case 3:
                        Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[fa] = t),
                    (t.stateNode = r);
              }
              return Qc(t), null;
            case 13:
              if (
                (Ia(co),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  al &&
                  null !== rl &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  fl(), pl(), (t.flags |= 98560), (o = !1);
                else if (((o = ml(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(l(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(l(317));
                    o[fa] = t;
                  } else
                    pl(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Qc(t), (o = !1);
                } else null !== ll && (ou(ll), (ll = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & co.current)
                        ? 0 === Ti && (Ti = 3)
                        : vu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Qc(t),
                  null);
            case 4:
              return (
                ao(), null === e && Br(t.stateNode.containerInfo), Qc(t), null
              );
            case 10:
              return Rl(t.type._context), Qc(t), null;
            case 19:
              if ((Ia(co), null === (o = t.memoizedState))) return Qc(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (i = o.rendering)))
                if (r) $c(o, !1);
                else {
                  if (0 !== Ti || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (i = io(e))) {
                        for (
                          t.flags |= 128,
                            $c(o, !1),
                            null !== (r = i.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (i = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = i.childLanes),
                                (o.lanes = i.lanes),
                                (o.child = i.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = i.memoizedProps),
                                (o.memoizedState = i.memoizedState),
                                (o.updateQueue = i.updateQueue),
                                (o.type = i.type),
                                (e = i.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Ua(co, (1 & co.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Ge() > Bi &&
                    ((t.flags |= 128),
                    (r = !0),
                    $c(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = io(i))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      $c(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !i.alternate &&
                        !al)
                    )
                      return Qc(t), null;
                  } else
                    2 * Ge() - o.renderingStartTime > Bi &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      $c(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((i.sibling = t.child), (t.child = i))
                  : (null !== (n = o.last) ? (n.sibling = i) : (t.child = i),
                    (o.last = i));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Ge()),
                  (t.sibling = null),
                  (n = co.current),
                  Ua(co, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Qc(t), null);
            case 22:
            case 23:
              return (
                mu(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & zi) &&
                    (Qc(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Qc(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(l(156, t.tag));
        }
        function Kc(e, t) {
          switch ((tl(t), t.tag)) {
            case 1:
              return (
                za(t.type) && Ma(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ao(),
                Ia(xa),
                Ia(Ea),
                so(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return oo(t), null;
            case 13:
              if (
                (Ia(co),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(l(340));
                pl();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ia(co), null;
            case 4:
              return ao(), null;
            case 10:
              return Rl(t.type._context), null;
            case 22:
            case 23:
              return mu(), null;
            default:
              return null;
          }
        }
        (zc = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Mc = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), no(Zl.current);
              var l,
                o = null;
              switch (n) {
                case "input":
                  (a = q(e, a)), (r = q(e, r)), (o = []);
                  break;
                case "select":
                  (a = L({}, a, { value: void 0 })),
                    (r = L({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Zr);
              }
              for (s in (ye(n, r), (n = null), a))
                if (!r.hasOwnProperty(s) && a.hasOwnProperty(s) && null != a[s])
                  if ("style" === s) {
                    var i = a[s];
                    for (l in i)
                      i.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== s &&
                      "children" !== s &&
                      "suppressContentEditableWarning" !== s &&
                      "suppressHydrationWarning" !== s &&
                      "autoFocus" !== s &&
                      (c.hasOwnProperty(s)
                        ? o || (o = [])
                        : (o = o || []).push(s, null));
              for (s in r) {
                var u = r[s];
                if (
                  ((i = null != a ? a[s] : void 0),
                  r.hasOwnProperty(s) && u !== i && (null != u || null != i))
                )
                  if ("style" === s)
                    if (i) {
                      for (l in i)
                        !i.hasOwnProperty(l) ||
                          (u && u.hasOwnProperty(l)) ||
                          (n || (n = {}), (n[l] = ""));
                      for (l in u)
                        u.hasOwnProperty(l) &&
                          i[l] !== u[l] &&
                          (n || (n = {}), (n[l] = u[l]));
                    } else n || (o || (o = []), o.push(s, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === s
                      ? ((u = u ? u.__html : void 0),
                        (i = i ? i.__html : void 0),
                        null != u && i !== u && (o = o || []).push(s, u))
                      : "children" === s
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (o = o || []).push(s, "" + u)
                      : "suppressContentEditableWarning" !== s &&
                        "suppressHydrationWarning" !== s &&
                        (c.hasOwnProperty(s)
                          ? (null != u && "onScroll" === s && Dr("scroll", e),
                            o || i === u || (o = []))
                          : (o = o || []).push(s, u));
              }
              n && (o = o || []).push("style", n);
              var s = o;
              (t.updateQueue = s) && (t.flags |= 4);
            }
          }),
          (Tc = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var qc = !1,
          Yc = !1,
          Gc = "function" === typeof WeakSet ? WeakSet : Set,
          Jc = null;
        function Zc(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                _u(e, t, r);
              }
            else n.current = null;
        }
        function ei(e, t, n) {
          try {
            n();
          } catch (r) {
            _u(e, t, r);
          }
        }
        var ti = !1;
        function ni(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var l = a.destroy;
                (a.destroy = void 0), void 0 !== l && ei(t, n, l);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function ri(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ai(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function li(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), li(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[fa],
              delete t[pa],
              delete t[va],
              delete t[ha],
              delete t[ga]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function oi(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ci(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || oi(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ii(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Zr));
          else if (4 !== r && null !== (e = e.child))
            for (ii(e, t, n), e = e.sibling; null !== e; )
              ii(e, t, n), (e = e.sibling);
        }
        function ui(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (ui(e, t, n), e = e.sibling; null !== e; )
              ui(e, t, n), (e = e.sibling);
        }
        var si = null,
          mi = !1;
        function fi(e, t, n) {
          for (n = n.child; null !== n; ) pi(e, t, n), (n = n.sibling);
        }
        function pi(e, t, n) {
          if (lt && "function" === typeof lt.onCommitFiberUnmount)
            try {
              lt.onCommitFiberUnmount(at, n);
            } catch (c) {}
          switch (n.tag) {
            case 5:
              Yc || Zc(n, t);
            case 6:
              var r = si,
                a = mi;
              (si = null),
                fi(e, t, n),
                (mi = a),
                null !== (si = r) &&
                  (mi
                    ? ((e = si),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : si.removeChild(n.stateNode));
              break;
            case 18:
              null !== si &&
                (mi
                  ? ((e = si),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? ia(e.parentNode, n)
                      : 1 === e.nodeType && ia(e, n),
                    Bt(e))
                  : ia(si, n.stateNode));
              break;
            case 4:
              (r = si),
                (a = mi),
                (si = n.stateNode.containerInfo),
                (mi = !0),
                fi(e, t, n),
                (si = r),
                (mi = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Yc &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var l = a,
                    o = l.destroy;
                  (l = l.tag),
                    void 0 !== o &&
                      (0 !== (2 & l) || 0 !== (4 & l)) &&
                      ei(n, t, o),
                    (a = a.next);
                } while (a !== r);
              }
              fi(e, t, n);
              break;
            case 1:
              if (
                !Yc &&
                (Zc(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (c) {
                  _u(n, t, c);
                }
              fi(e, t, n);
              break;
            case 21:
              fi(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Yc = (r = Yc) || null !== n.memoizedState),
                  fi(e, t, n),
                  (Yc = r))
                : fi(e, t, n);
              break;
            default:
              fi(e, t, n);
          }
        }
        function di(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Gc()),
              t.forEach(function (t) {
                var r = Eu.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function vi(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var o = e,
                  c = t,
                  i = c;
                e: for (; null !== i; ) {
                  switch (i.tag) {
                    case 5:
                      (si = i.stateNode), (mi = !1);
                      break e;
                    case 3:
                    case 4:
                      (si = i.stateNode.containerInfo), (mi = !0);
                      break e;
                  }
                  i = i.return;
                }
                if (null === si) throw Error(l(160));
                pi(o, c, a), (si = null), (mi = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (s) {
                _u(a, t, s);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) hi(t, e), (t = t.sibling);
        }
        function hi(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((vi(t, e), gi(e), 4 & r)) {
                try {
                  ni(3, e, e.return), ri(3, e);
                } catch (h) {
                  _u(e, e.return, h);
                }
                try {
                  ni(5, e, e.return);
                } catch (h) {
                  _u(e, e.return, h);
                }
              }
              break;
            case 1:
              vi(t, e), gi(e), 512 & r && null !== n && Zc(n, n.return);
              break;
            case 5:
              if (
                (vi(t, e),
                gi(e),
                512 & r && null !== n && Zc(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  fe(a, "");
                } catch (h) {
                  _u(e, e.return, h);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var o = e.memoizedProps,
                  c = null !== n ? n.memoizedProps : o,
                  i = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === i &&
                      "radio" === o.type &&
                      null != o.name &&
                      G(a, o),
                      be(i, c);
                    var s = be(i, o);
                    for (c = 0; c < u.length; c += 2) {
                      var m = u[c],
                        f = u[c + 1];
                      "style" === m
                        ? he(a, f)
                        : "dangerouslySetInnerHTML" === m
                        ? me(a, f)
                        : "children" === m
                        ? fe(a, f)
                        : b(a, m, f, s);
                    }
                    switch (i) {
                      case "input":
                        J(a, o);
                        break;
                      case "textarea":
                        le(a, o);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!o.multiple;
                        var d = o.value;
                        null != d
                          ? ne(a, !!o.multiple, d, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(a, !!o.multiple, o.defaultValue, !0)
                              : ne(a, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    a[pa] = o;
                  } catch (h) {
                    _u(e, e.return, h);
                  }
              }
              break;
            case 6:
              if ((vi(t, e), gi(e), 4 & r)) {
                if (null === e.stateNode) throw Error(l(162));
                (a = e.stateNode), (o = e.memoizedProps);
                try {
                  a.nodeValue = o;
                } catch (h) {
                  _u(e, e.return, h);
                }
              }
              break;
            case 3:
              if (
                (vi(t, e),
                gi(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Bt(t.containerInfo);
                } catch (h) {
                  _u(e, e.return, h);
                }
              break;
            case 4:
            default:
              vi(t, e), gi(e);
              break;
            case 13:
              vi(t, e),
                gi(e),
                8192 & (a = e.child).flags &&
                  ((o = null !== a.memoizedState),
                  (a.stateNode.isHidden = o),
                  !o ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (ji = Ge())),
                4 & r && di(e);
              break;
            case 22:
              if (
                ((m = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Yc = (s = Yc) || m), vi(t, e), (Yc = s))
                  : vi(t, e),
                gi(e),
                8192 & r)
              ) {
                if (
                  ((s = null !== e.memoizedState),
                  (e.stateNode.isHidden = s) && !m && 0 !== (1 & e.mode))
                )
                  for (Jc = e, m = e.child; null !== m; ) {
                    for (f = Jc = m; null !== Jc; ) {
                      switch (((d = (p = Jc).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ni(4, p, p.return);
                          break;
                        case 1:
                          Zc(p, p.return);
                          var v = p.stateNode;
                          if ("function" === typeof v.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (v.props = t.memoizedProps),
                                (v.state = t.memoizedState),
                                v.componentWillUnmount();
                            } catch (h) {
                              _u(r, n, h);
                            }
                          }
                          break;
                        case 5:
                          Zc(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ki(f);
                            continue;
                          }
                      }
                      null !== d ? ((d.return = p), (Jc = d)) : ki(f);
                    }
                    m = m.sibling;
                  }
                e: for (m = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === m) {
                      m = f;
                      try {
                        (a = f.stateNode),
                          s
                            ? "function" === typeof (o = a.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((i = f.stateNode),
                              (c =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (i.style.display = ve("display", c)));
                      } catch (h) {
                        _u(e, e.return, h);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === m)
                      try {
                        f.stateNode.nodeValue = s ? "" : f.memoizedProps;
                      } catch (h) {
                        _u(e, e.return, h);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) ||
                      null === f.memoizedState ||
                      f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    m === f && (m = null), (f = f.return);
                  }
                  m === f && (m = null),
                    (f.sibling.return = f.return),
                    (f = f.sibling);
                }
              }
              break;
            case 19:
              vi(t, e), gi(e), 4 & r && di(e);
            case 21:
          }
        }
        function gi(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (oi(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(l(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (fe(a, ""), (r.flags &= -33)),
                    ui(e, ci(e), a);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  ii(e, ci(e), o);
                  break;
                default:
                  throw Error(l(161));
              }
            } catch (c) {
              _u(e, e.return, c);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function yi(e, t, n) {
          (Jc = e), bi(e, t, n);
        }
        function bi(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Jc; ) {
            var a = Jc,
              l = a.child;
            if (22 === a.tag && r) {
              var o = null !== a.memoizedState || qc;
              if (!o) {
                var c = a.alternate,
                  i = (null !== c && null !== c.memoizedState) || Yc;
                c = qc;
                var u = Yc;
                if (((qc = o), (Yc = i) && !u))
                  for (Jc = a; null !== Jc; )
                    (i = (o = Jc).child),
                      22 === o.tag && null !== o.memoizedState
                        ? Ri(a)
                        : null !== i
                        ? ((i.return = o), (Jc = i))
                        : Ri(a);
                for (; null !== l; ) (Jc = l), bi(l, t, n), (l = l.sibling);
                (Jc = a), (qc = c), (Yc = u);
              }
              wi(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== l
                ? ((l.return = a), (Jc = l))
                : wi(e);
          }
        }
        function wi(e) {
          for (; null !== Jc; ) {
            var t = Jc;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yc || ri(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Yc)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : hl(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && Fl(t, o, r);
                      break;
                    case 3:
                      var c = t.updateQueue;
                      if (null !== c) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Fl(t, c, n);
                      }
                      break;
                    case 5:
                      var i = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = i;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var s = t.alternate;
                        if (null !== s) {
                          var m = s.memoizedState;
                          if (null !== m) {
                            var f = m.dehydrated;
                            null !== f && Bt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(l(163));
                  }
                Yc || (512 & t.flags && ai(t));
              } catch (p) {
                _u(t, t.return, p);
              }
            }
            if (t === e) {
              Jc = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Jc = n);
              break;
            }
            Jc = t.return;
          }
        }
        function ki(e) {
          for (; null !== Jc; ) {
            var t = Jc;
            if (t === e) {
              Jc = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Jc = n);
              break;
            }
            Jc = t.return;
          }
        }
        function Ri(e) {
          for (; null !== Jc; ) {
            var t = Jc;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    ri(4, t);
                  } catch (i) {
                    _u(t, n, i);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (i) {
                      _u(t, a, i);
                    }
                  }
                  var l = t.return;
                  try {
                    ai(t);
                  } catch (i) {
                    _u(t, l, i);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    ai(t);
                  } catch (i) {
                    _u(t, o, i);
                  }
              }
            } catch (i) {
              _u(t, t.return, i);
            }
            if (t === e) {
              Jc = null;
              break;
            }
            var c = t.sibling;
            if (null !== c) {
              (c.return = t.return), (Jc = c);
              break;
            }
            Jc = t.return;
          }
        }
        var Si,
          _i = Math.ceil,
          Ii = w.ReactCurrentDispatcher,
          Ui = w.ReactCurrentOwner,
          Ai = w.ReactCurrentBatchConfig,
          Ei = 0,
          xi = null,
          Ci = null,
          Ni = 0,
          zi = 0,
          Mi = _a(0),
          Ti = 0,
          Pi = null,
          Oi = 0,
          Li = 0,
          Fi = 0,
          Di = null,
          Vi = null,
          ji = 0,
          Bi = 1 / 0,
          Hi = null,
          Wi = !1,
          $i = null,
          Qi = null,
          Xi = !1,
          Ki = null,
          qi = 0,
          Yi = 0,
          Gi = null,
          Ji = -1,
          Zi = 0;
        function eu() {
          return 0 !== (6 & Ei) ? Ge() : -1 !== Ji ? Ji : (Ji = Ge());
        }
        function tu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ei) && 0 !== Ni
            ? Ni & -Ni
            : null !== vl.transition
            ? (0 === Zi && (Zi = vt()), Zi)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function nu(e, t, n, r) {
          if (50 < Yi) throw ((Yi = 0), (Gi = null), Error(l(185)));
          gt(e, n, r),
            (0 !== (2 & Ei) && e === xi) ||
              (e === xi && (0 === (2 & Ei) && (Li |= n), 4 === Ti && cu(e, Ni)),
              ru(e, r),
              1 === n &&
                0 === Ei &&
                0 === (1 & t.mode) &&
                ((Bi = Ge() + 500), Da && Ba()));
        }
        function ru(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                l = e.pendingLanes;
              0 < l;

            ) {
              var o = 31 - ot(l),
                c = 1 << o,
                i = a[o];
              -1 === i
                ? (0 !== (c & n) && 0 === (c & r)) || (a[o] = pt(c, t))
                : i <= t && (e.expiredLanes |= c),
                (l &= ~c);
            }
          })(e, t);
          var r = ft(e, e === xi ? Ni : 0);
          if (0 === r)
            null !== n && Ke(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && Ke(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Da = !0), ja(e);
                  })(iu.bind(null, e))
                : ja(iu.bind(null, e)),
                oa(function () {
                  0 === (6 & Ei) && Ba();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Ze;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = xu(n, au.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function au(e, t) {
          if (((Ji = -1), (Zi = 0), 0 !== (6 & Ei))) throw Error(l(327));
          var n = e.callbackNode;
          if (Ru() && e.callbackNode !== n) return null;
          var r = ft(e, e === xi ? Ni : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = hu(e, r);
          else {
            t = r;
            var a = Ei;
            Ei |= 2;
            var o = du();
            for (
              (xi === e && Ni === t) ||
              ((Hi = null), (Bi = Ge() + 500), fu(e, t));
              ;

            )
              try {
                yu();
                break;
              } catch (i) {
                pu(e, i);
              }
            kl(),
              (Ii.current = o),
              (Ei = a),
              null !== Ci ? (t = 0) : ((xi = null), (Ni = 0), (t = Ti));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = dt(e)) && ((r = a), (t = lu(e, a))),
              1 === t)
            )
              throw ((n = Pi), fu(e, 0), cu(e, r), ru(e, Ge()), n);
            if (6 === t) cu(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              l = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!cr(l(), a)) return !1;
                            } catch (c) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = hu(e, r)) &&
                    0 !== (o = dt(e)) &&
                    ((r = o), (t = lu(e, o))),
                  1 === t))
              )
                throw ((n = Pi), fu(e, 0), cu(e, r), ru(e, Ge()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(l(345));
                case 2:
                case 5:
                  ku(e, Vi, Hi);
                  break;
                case 3:
                  if (
                    (cu(e, r),
                    (130023424 & r) === r && 10 < (t = ji + 500 - Ge()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      eu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(ku.bind(null, e, Vi, Hi), t);
                    break;
                  }
                  ku(e, Vi, Hi);
                  break;
                case 4:
                  if ((cu(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var c = 31 - ot(r);
                    (o = 1 << c), (c = t[c]) > a && (a = c), (r &= ~o);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ge() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * _i(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(ku.bind(null, e, Vi, Hi), r);
                    break;
                  }
                  ku(e, Vi, Hi);
                  break;
                default:
                  throw Error(l(329));
              }
            }
          }
          return ru(e, Ge()), e.callbackNode === n ? au.bind(null, e) : null;
        }
        function lu(e, t) {
          var n = Di;
          return (
            e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256),
            2 !== (e = hu(e, t)) && ((t = Vi), (Vi = n), null !== t && ou(t)),
            e
          );
        }
        function ou(e) {
          null === Vi ? (Vi = e) : Vi.push.apply(Vi, e);
        }
        function cu(e, t) {
          for (
            t &= ~Fi,
              t &= ~Li,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function iu(e) {
          if (0 !== (6 & Ei)) throw Error(l(327));
          Ru();
          var t = ft(e, 0);
          if (0 === (1 & t)) return ru(e, Ge()), null;
          var n = hu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = dt(e);
            0 !== r && ((t = r), (n = lu(e, r)));
          }
          if (1 === n) throw ((n = Pi), fu(e, 0), cu(e, t), ru(e, Ge()), n);
          if (6 === n) throw Error(l(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ku(e, Vi, Hi),
            ru(e, Ge()),
            null
          );
        }
        function uu(e, t) {
          var n = Ei;
          Ei |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ei = n) && ((Bi = Ge() + 500), Da && Ba());
          }
        }
        function su(e) {
          null !== Ki && 0 === Ki.tag && 0 === (6 & Ei) && Ru();
          var t = Ei;
          Ei |= 1;
          var n = Ai.transition,
            r = bt;
          try {
            if (((Ai.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (Ai.transition = n), 0 === (6 & (Ei = t)) && Ba();
          }
        }
        function mu() {
          (zi = Mi.current), Ia(Mi);
        }
        function fu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ci))
            for (n = Ci.return; null !== n; ) {
              var r = n;
              switch ((tl(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Ma();
                  break;
                case 3:
                  ao(), Ia(xa), Ia(Ea), so();
                  break;
                case 5:
                  oo(r);
                  break;
                case 4:
                  ao();
                  break;
                case 13:
                case 19:
                  Ia(co);
                  break;
                case 10:
                  Rl(r.type._context);
                  break;
                case 22:
                case 23:
                  mu();
              }
              n = n.return;
            }
          if (
            ((xi = e),
            (Ci = e = Mu(e.current, null)),
            (Ni = zi = t),
            (Ti = 0),
            (Pi = null),
            (Fi = Li = Oi = 0),
            (Vi = Di = null),
            null !== Ul)
          ) {
            for (t = 0; t < Ul.length; t++)
              if (null !== (r = (n = Ul[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  l = n.pending;
                if (null !== l) {
                  var o = l.next;
                  (l.next = a), (r.next = o);
                }
                n.pending = r;
              }
            Ul = null;
          }
          return e;
        }
        function pu(e, t) {
          for (;;) {
            var n = Ci;
            try {
              if ((kl(), (mo.current = oc), yo)) {
                for (var r = vo.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                yo = !1;
              }
              if (
                ((po = 0),
                (go = ho = vo = null),
                (bo = !1),
                (wo = 0),
                (Ui.current = null),
                null === n || null === n.return)
              ) {
                (Ti = 1), (Pi = t), (Ci = null);
                break;
              }
              e: {
                var o = e,
                  c = n.return,
                  i = n,
                  u = t;
                if (
                  ((t = Ni),
                  (i.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var s = u,
                    m = i,
                    f = m.tag;
                  if (0 === (1 & m.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = m.alternate;
                    p
                      ? ((m.updateQueue = p.updateQueue),
                        (m.memoizedState = p.memoizedState),
                        (m.lanes = p.lanes))
                      : ((m.updateQueue = null), (m.memoizedState = null));
                  }
                  var d = gc(c);
                  if (null !== d) {
                    (d.flags &= -257),
                      yc(d, c, i, 0, t),
                      1 & d.mode && hc(o, s, t),
                      (u = s);
                    var v = (t = d).updateQueue;
                    if (null === v) {
                      var h = new Set();
                      h.add(u), (t.updateQueue = h);
                    } else v.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    hc(o, s, t), vu();
                    break e;
                  }
                  u = Error(l(426));
                } else if (al && 1 & i.mode) {
                  var g = gc(c);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      yc(g, c, i, 0, t),
                      dl(sc(u, i));
                    break e;
                  }
                }
                (o = u = sc(u, i)),
                  4 !== Ti && (Ti = 2),
                  null === Di ? (Di = [o]) : Di.push(o),
                  (o = c);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        Ol(o, dc(0, u, t));
                      break e;
                    case 1:
                      i = u;
                      var y = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Qi || !Qi.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          Ol(o, vc(o, i, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              wu(n);
            } catch (w) {
              (t = w), Ci === n && null !== n && (Ci = n = n.return);
              continue;
            }
            break;
          }
        }
        function du() {
          var e = Ii.current;
          return (Ii.current = oc), null === e ? oc : e;
        }
        function vu() {
          (0 !== Ti && 3 !== Ti && 2 !== Ti) || (Ti = 4),
            null === xi ||
              (0 === (268435455 & Oi) && 0 === (268435455 & Li)) ||
              cu(xi, Ni);
        }
        function hu(e, t) {
          var n = Ei;
          Ei |= 2;
          var r = du();
          for ((xi === e && Ni === t) || ((Hi = null), fu(e, t)); ; )
            try {
              gu();
              break;
            } catch (a) {
              pu(e, a);
            }
          if ((kl(), (Ei = n), (Ii.current = r), null !== Ci))
            throw Error(l(261));
          return (xi = null), (Ni = 0), Ti;
        }
        function gu() {
          for (; null !== Ci; ) bu(Ci);
        }
        function yu() {
          for (; null !== Ci && !qe(); ) bu(Ci);
        }
        function bu(e) {
          var t = Si(e.alternate, e, zi);
          (e.memoizedProps = e.pendingProps),
            null === t ? wu(e) : (Ci = t),
            (Ui.current = null);
        }
        function wu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = Xc(n, t, zi))) return void (Ci = n);
            } else {
              if (null !== (n = Kc(n, t)))
                return (n.flags &= 32767), void (Ci = n);
              if (null === e) return (Ti = 6), void (Ci = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ci = t);
            Ci = t = e;
          } while (null !== t);
          0 === Ti && (Ti = 5);
        }
        function ku(e, t, n) {
          var r = bt,
            a = Ai.transition;
          try {
            (Ai.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Ru();
                } while (null !== Ki);
                if (0 !== (6 & Ei)) throw Error(l(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(l(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - ot(n),
                        l = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
                    }
                  })(e, o),
                  e === xi && ((Ci = xi = null), (Ni = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Xi ||
                    ((Xi = !0),
                    xu(tt, function () {
                      return Ru(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = Ai.transition), (Ai.transition = null);
                  var c = bt;
                  bt = 1;
                  var i = Ei;
                  (Ei |= 4),
                    (Ui.current = null),
                    (function (e, t) {
                      if (((ea = Wt), pr((e = fr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (k) {
                                n = null;
                                break e;
                              }
                              var c = 0,
                                i = -1,
                                u = -1,
                                s = 0,
                                m = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var d;
                                  f !== n ||
                                    (0 !== a && 3 !== f.nodeType) ||
                                    (i = c + a),
                                    f !== o ||
                                      (0 !== r && 3 !== f.nodeType) ||
                                      (u = c + r),
                                    3 === f.nodeType &&
                                      (c += f.nodeValue.length),
                                    null !== (d = f.firstChild);

                                )
                                  (p = f), (f = d);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === n && ++s === a && (i = c),
                                    p === o && ++m === r && (u = c),
                                    null !== (d = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = d;
                              }
                              n =
                                -1 === i || -1 === u
                                  ? null
                                  : { start: i, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Wt = !1,
                          Jc = t;
                        null !== Jc;

                      )
                        if (
                          ((e = (t = Jc).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Jc = e);
                        else
                          for (; null !== Jc; ) {
                            t = Jc;
                            try {
                              var v = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var h = v.memoizedProps,
                                        g = v.memoizedState,
                                        y = t.stateNode,
                                        b = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? h
                                            : hl(t.type, h),
                                          g
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(l(163));
                                }
                            } catch (k) {
                              _u(t, t.return, k);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Jc = e);
                              break;
                            }
                            Jc = t.return;
                          }
                      (v = ti), (ti = !1);
                    })(e, n),
                    hi(n, e),
                    dr(ta),
                    (Wt = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    yi(n, e, a),
                    Ye(),
                    (Ei = i),
                    (bt = c),
                    (Ai.transition = o);
                } else e.current = n;
                if (
                  (Xi && ((Xi = !1), (Ki = e), (qi = a)),
                  0 === (o = e.pendingLanes) && (Qi = null),
                  (function (e) {
                    if (lt && "function" === typeof lt.onCommitFiberRoot)
                      try {
                        lt.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  ru(e, Ge()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r((a = t[n]).value, {
                      componentStack: a.stack,
                      digest: a.digest,
                    });
                if (Wi) throw ((Wi = !1), (e = $i), ($i = null), e);
                0 !== (1 & qi) && 0 !== e.tag && Ru(),
                  0 !== (1 & (o = e.pendingLanes))
                    ? e === Gi
                      ? Yi++
                      : ((Yi = 0), (Gi = e))
                    : (Yi = 0),
                  Ba();
              })(e, t, n, r);
          } finally {
            (Ai.transition = a), (bt = r);
          }
          return null;
        }
        function Ru() {
          if (null !== Ki) {
            var e = wt(qi),
              t = Ai.transition,
              n = bt;
            try {
              if (((Ai.transition = null), (bt = 16 > e ? 16 : e), null === Ki))
                var r = !1;
              else {
                if (((e = Ki), (Ki = null), (qi = 0), 0 !== (6 & Ei)))
                  throw Error(l(331));
                var a = Ei;
                for (Ei |= 4, Jc = e.current; null !== Jc; ) {
                  var o = Jc,
                    c = o.child;
                  if (0 !== (16 & Jc.flags)) {
                    var i = o.deletions;
                    if (null !== i) {
                      for (var u = 0; u < i.length; u++) {
                        var s = i[u];
                        for (Jc = s; null !== Jc; ) {
                          var m = Jc;
                          switch (m.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ni(8, m, o);
                          }
                          var f = m.child;
                          if (null !== f) (f.return = m), (Jc = f);
                          else
                            for (; null !== Jc; ) {
                              var p = (m = Jc).sibling,
                                d = m.return;
                              if ((li(m), m === s)) {
                                Jc = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = d), (Jc = p);
                                break;
                              }
                              Jc = d;
                            }
                        }
                      }
                      var v = o.alternate;
                      if (null !== v) {
                        var h = v.child;
                        if (null !== h) {
                          v.child = null;
                          do {
                            var g = h.sibling;
                            (h.sibling = null), (h = g);
                          } while (null !== h);
                        }
                      }
                      Jc = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== c)
                    (c.return = o), (Jc = c);
                  else
                    e: for (; null !== Jc; ) {
                      if (0 !== (2048 & (o = Jc).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ni(9, o, o.return);
                        }
                      var y = o.sibling;
                      if (null !== y) {
                        (y.return = o.return), (Jc = y);
                        break e;
                      }
                      Jc = o.return;
                    }
                }
                var b = e.current;
                for (Jc = b; null !== Jc; ) {
                  var w = (c = Jc).child;
                  if (0 !== (2064 & c.subtreeFlags) && null !== w)
                    (w.return = c), (Jc = w);
                  else
                    e: for (c = b; null !== Jc; ) {
                      if (0 !== (2048 & (i = Jc).flags))
                        try {
                          switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ri(9, i);
                          }
                        } catch (R) {
                          _u(i, i.return, R);
                        }
                      if (i === c) {
                        Jc = null;
                        break e;
                      }
                      var k = i.sibling;
                      if (null !== k) {
                        (k.return = i.return), (Jc = k);
                        break e;
                      }
                      Jc = i.return;
                    }
                }
                if (
                  ((Ei = a),
                  Ba(),
                  lt && "function" === typeof lt.onPostCommitFiberRoot)
                )
                  try {
                    lt.onPostCommitFiberRoot(at, e);
                  } catch (R) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (Ai.transition = t);
            }
          }
          return !1;
        }
        function Su(e, t, n) {
          (e = Tl(e, (t = dc(0, (t = sc(n, t)), 1)), 1)),
            (t = eu()),
            null !== e && (gt(e, 1, t), ru(e, t));
        }
        function _u(e, t, n) {
          if (3 === e.tag) Su(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Su(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Qi || !Qi.has(r)))
                ) {
                  (t = Tl(t, (e = vc(t, (e = sc(n, e)), 1)), 1)),
                    (e = eu()),
                    null !== t && (gt(t, 1, e), ru(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Iu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = eu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            xi === e &&
              (Ni & n) === n &&
              (4 === Ti ||
              (3 === Ti && (130023424 & Ni) === Ni && 500 > Ge() - ji)
                ? fu(e, 0)
                : (Fi |= n)),
            ru(e, t);
        }
        function Uu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = st), 0 === (130023424 & (st <<= 1)) && (st = 4194304)));
          var n = eu();
          null !== (e = xl(e, t)) && (gt(e, t, n), ru(e, n));
        }
        function Au(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Uu(e, n);
        }
        function Eu(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(l(314));
          }
          null !== r && r.delete(t), Uu(e, n);
        }
        function xu(e, t) {
          return Xe(e, t);
        }
        function Cu(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Nu(e, t, n, r) {
          return new Cu(e, t, n, r);
        }
        function zu(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Mu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Nu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Tu(e, t, n, r, a, o) {
          var c = 2;
          if (((r = e), "function" === typeof e)) zu(e) && (c = 1);
          else if ("string" === typeof e) c = 5;
          else
            e: switch (e) {
              case S:
                return Pu(n.children, a, o, t);
              case _:
                (c = 8), (a |= 8);
                break;
              case I:
                return (
                  ((e = Nu(12, n, t, 2 | a)).elementType = I), (e.lanes = o), e
                );
              case x:
                return (
                  ((e = Nu(13, n, t, a)).elementType = x), (e.lanes = o), e
                );
              case C:
                return (
                  ((e = Nu(19, n, t, a)).elementType = C), (e.lanes = o), e
                );
              case M:
                return Ou(n, a, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case U:
                      c = 10;
                      break e;
                    case A:
                      c = 9;
                      break e;
                    case E:
                      c = 11;
                      break e;
                    case N:
                      c = 14;
                      break e;
                    case z:
                      (c = 16), (r = null);
                      break e;
                  }
                throw Error(l(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Nu(c, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Pu(e, t, n, r) {
          return ((e = Nu(7, e, r, t)).lanes = n), e;
        }
        function Ou(e, t, n, r) {
          return (
            ((e = Nu(22, e, r, t)).elementType = M),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Lu(e, t, n) {
          return ((e = Nu(6, e, null, t)).lanes = n), e;
        }
        function Fu(e, t, n) {
          return (
            ((t = Nu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Du(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = ht(0)),
            (this.expirationTimes = ht(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = ht(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Vu(e, t, n, r, a, l, o, c, i) {
          return (
            (e = new Du(e, t, n, c, i)),
            1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
            (l = Nu(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Nl(l),
            e
          );
        }
        function ju(e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: R,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        }
        function Bu(e) {
          if (!e) return Aa;
          e: {
            if (Be((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(l(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (za(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(l(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (za(n)) return Pa(e, n, t);
          }
          return t;
        }
        function Hu(e, t, n, r, a, l, o, c, i) {
          return (
            ((e = Vu(n, r, !0, e, 0, l, 0, c, i)).context = Bu(null)),
            (n = e.current),
            ((l = Ml((r = eu()), (a = tu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Tl(n, l, a),
            (e.current.lanes = a),
            gt(e, a, r),
            ru(e, r),
            e
          );
        }
        function Wu(e, t, n, r) {
          var a = t.current,
            l = eu(),
            o = tu(a);
          return (
            (n = Bu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ml(l, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Tl(a, t, o)) && (nu(e, a, o, l), Pl(e, a, o)),
            o
          );
        }
        function $u(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Qu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Xu(e, t) {
          Qu(e, t), (e = e.alternate) && Qu(e, t);
        }
        Si = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || xa.current) wc = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (wc = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Cc(t), pl();
                        break;
                      case 5:
                        lo(t);
                        break;
                      case 1:
                        za(t.type) && Oa(t);
                        break;
                      case 4:
                        ro(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Ua(gl, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Ua(co, 1 & co.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Lc(e, t, n)
                            : (Ua(co, 1 & co.current),
                              null !== (e = Wc(e, t, n)) ? e.sibling : null);
                        Ua(co, 1 & co.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Bc(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Ua(co, co.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Ic(e, t, n);
                    }
                    return Wc(e, t, n);
                  })(e, t, n)
                );
              wc = 0 !== (131072 & e.flags);
            }
          else (wc = !1), al && 0 !== (1048576 & t.flags) && Za(t, Qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Hc(e, t), (e = t.pendingProps);
              var a = Na(t, Ea.current);
              _l(t, n), (a = _o(null, t, r, e, a, n));
              var o = Io();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    za(r) ? ((o = !0), Oa(t)) : (o = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Nl(t),
                    (a.updater = jl),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    $l(t, r, e, n),
                    (t = xc(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    al && o && el(t),
                    kc(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Hc(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return zu(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === E) return 11;
                        if (e === N) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = hl(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ac(null, t, r, e, n);
                    break e;
                  case 1:
                    t = Ec(null, t, r, e, n);
                    break e;
                  case 11:
                    t = Rc(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Sc(null, t, r, hl(r.type, e), n);
                    break e;
                }
                throw Error(l(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ac(e, t, r, (a = t.elementType === r ? a : hl(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ec(e, t, r, (a = t.elementType === r ? a : hl(r, a)), n)
              );
            case 3:
              e: {
                if ((Cc(t), null === e)) throw Error(l(387));
                (r = t.pendingProps),
                  (a = (o = t.memoizedState).element),
                  zl(e, t),
                  Ll(t, r, null, n);
                var c = t.memoizedState;
                if (((r = c.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: c.cache,
                      pendingSuspenseBoundaries: c.pendingSuspenseBoundaries,
                      transitions: c.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Nc(e, t, r, n, (a = sc(Error(l(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Nc(e, t, r, n, (a = sc(Error(l(424)), t)));
                    break e;
                  }
                  for (
                    rl = ua(t.stateNode.containerInfo.firstChild),
                      nl = t,
                      al = !0,
                      ll = null,
                      n = Gl(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pl(), r === a)) {
                    t = Wc(e, t, n);
                    break e;
                  }
                  kc(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                lo(t),
                null === e && ul(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (c = a.children),
                na(r, a)
                  ? (c = null)
                  : null !== o && na(r, o) && (t.flags |= 32),
                Uc(e, t),
                kc(e, t, c, n),
                t.child
              );
            case 6:
              return null === e && ul(t), null;
            case 13:
              return Lc(e, t, n);
            case 4:
              return (
                ro(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Yl(t, null, r, n)) : kc(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Rc(e, t, r, (a = t.elementType === r ? a : hl(r, a)), n)
              );
            case 7:
              return kc(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return kc(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (o = t.memoizedProps),
                  (c = a.value),
                  Ua(gl, r._currentValue),
                  (r._currentValue = c),
                  null !== o)
                )
                  if (cr(o.value, c)) {
                    if (o.children === a.children && !xa.current) {
                      t = Wc(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var i = o.dependencies;
                      if (null !== i) {
                        c = o.child;
                        for (var u = i.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === o.tag) {
                              (u = Ml(-1, n & -n)).tag = 2;
                              var s = o.updateQueue;
                              if (null !== s) {
                                var m = (s = s.shared).pending;
                                null === m
                                  ? (u.next = u)
                                  : ((u.next = m.next), (m.next = u)),
                                  (s.pending = u);
                              }
                            }
                            (o.lanes |= n),
                              null !== (u = o.alternate) && (u.lanes |= n),
                              Sl(o.return, n, t),
                              (i.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === o.tag)
                        c = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (c = o.return)) throw Error(l(341));
                        (c.lanes |= n),
                          null !== (i = c.alternate) && (i.lanes |= n),
                          Sl(c, n, t),
                          (c = o.sibling);
                      } else c = o.child;
                      if (null !== c) c.return = o;
                      else
                        for (c = o; null !== c; ) {
                          if (c === t) {
                            c = null;
                            break;
                          }
                          if (null !== (o = c.sibling)) {
                            (o.return = c.return), (c = o);
                            break;
                          }
                          c = c.return;
                        }
                      o = c;
                    }
                kc(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                _l(t, n),
                (r = r((a = Il(a)))),
                (t.flags |= 1),
                kc(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = hl((r = t.type), t.pendingProps)),
                Sc(e, t, r, (a = hl(r.type, a)), n)
              );
            case 15:
              return _c(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : hl(r, a)),
                Hc(e, t),
                (t.tag = 1),
                za(r) ? ((e = !0), Oa(t)) : (e = !1),
                _l(t, n),
                Hl(t, r, a),
                $l(t, r, a, n),
                xc(null, t, r, !0, e, n)
              );
            case 19:
              return Bc(e, t, n);
            case 22:
              return Ic(e, t, n);
          }
          throw Error(l(156, t.tag));
        };
        var Ku =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function qu(e) {
          this._internalRoot = e;
        }
        function Yu(e) {
          this._internalRoot = e;
        }
        function Gu(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Ju(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Zu() {}
        function es(e, t, n, r, a) {
          var l = n._reactRootContainer;
          if (l) {
            var o = l;
            if ("function" === typeof a) {
              var c = a;
              a = function () {
                var e = $u(o);
                c.call(e);
              };
            }
            Wu(t, o, e, a);
          } else
            o = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var l = r;
                  r = function () {
                    var e = $u(o);
                    l.call(e);
                  };
                }
                var o = Hu(t, r, e, 0, null, !1, 0, "", Zu);
                return (
                  (e._reactRootContainer = o),
                  (e[da] = o.current),
                  Br(8 === e.nodeType ? e.parentNode : e),
                  su(),
                  o
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var c = r;
                r = function () {
                  var e = $u(i);
                  c.call(e);
                };
              }
              var i = Vu(e, 0, !1, null, 0, !1, 0, "", Zu);
              return (
                (e._reactRootContainer = i),
                (e[da] = i.current),
                Br(8 === e.nodeType ? e.parentNode : e),
                su(function () {
                  Wu(t, i, n, r);
                }),
                i
              );
            })(n, t, e, a, r);
          return $u(o);
        }
        (Yu.prototype.render = qu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(l(409));
            Wu(e, t, null, null);
          }),
          (Yu.prototype.unmount = qu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                su(function () {
                  Wu(null, e, null, null);
                }),
                  (t[da] = null);
              }
            }),
          (Yu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = _t();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < Mt.length && 0 !== t && t < Mt[n].priority;
                n++
              );
              Mt.splice(n, 0, e), 0 === n && Lt(e);
            }
          }),
          (kt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = mt(t.pendingLanes);
                  0 !== n &&
                    (yt(t, 1 | n),
                    ru(t, Ge()),
                    0 === (6 & Ei) && ((Bi = Ge() + 500), Ba()));
                }
                break;
              case 13:
                su(function () {
                  var t = xl(e, 1);
                  if (null !== t) {
                    var n = eu();
                    nu(t, e, 1, n);
                  }
                }),
                  Xu(e, 1);
            }
          }),
          (Rt = function (e) {
            if (13 === e.tag) {
              var t = xl(e, 134217728);
              if (null !== t) nu(t, e, 134217728, eu());
              Xu(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = tu(e),
                n = xl(e, t);
              if (null !== n) nu(n, e, t, eu());
              Xu(e, t);
            }
          }),
          (_t = function () {
            return bt;
          }),
          (It = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (Re = function (e, t, n) {
            switch (t) {
              case "input":
                if ((J(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = ka(r);
                      if (!a) throw Error(l(90));
                      X(r), J(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                le(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (Ee = uu),
          (xe = su);
        var ts = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, ka, Ue, Ae, uu],
          },
          ns = {
            findFiberByHostInstance: ya,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rs = {
            bundleType: ns.bundleType,
            version: ns.version,
            rendererPackageName: ns.rendererPackageName,
            rendererConfig: ns.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              ns.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var as = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!as.isDisabled && as.supportsFiber)
            try {
              (at = as.inject(rs)), (lt = as);
            } catch (se) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ts),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Gu(t)) throw Error(l(200));
            return ju(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Gu(e)) throw Error(l(299));
            var n = !1,
              r = "",
              a = Ku;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Vu(e, 1, !1, null, 0, n, 0, r, a)),
              (e[da] = t.current),
              Br(8 === e.nodeType ? e.parentNode : e),
              new qu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(l(188));
              throw ((e = Object.keys(e).join(",")), Error(l(268, e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return su(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Ju(t)) throw Error(l(200));
            return es(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Gu(e)) throw Error(l(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              o = "",
              c = Ku;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (c = n.onRecoverableError)),
              (t = Hu(t, null, e, 1, null != n ? n : null, a, 0, o, c)),
              (e[da] = t.current),
              Br(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Yu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Ju(t)) throw Error(l(200));
            return es(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Ju(e)) throw Error(l(40));
            return (
              !!e._reactRootContainer &&
              (su(function () {
                es(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[da] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = uu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Ju(n)) throw Error(l(200));
            if (null == e || void 0 === e._reactInternals) throw Error(l(38));
            return es(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        var r = n(791),
          a = Symbol.for("react.element"),
          l = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          c =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          i = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            l = {},
            u = null,
            s = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (s = t.ref),
          t))
            o.call(t, r) && !i.hasOwnProperty(r) && (l[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === l[r] && (l[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: s,
            props: l,
            _owner: c.current,
          };
        }
        (t.Fragment = l), (t.jsx = u), (t.jsxs = u);
      },
      117: function (e, t) {
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          c = Symbol.for("react.provider"),
          i = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          s = Symbol.for("react.suspense"),
          m = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var d = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          h = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = h),
            (this.updater = n || d);
        }
        function y() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = h),
            (this.updater = n || d);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = g.prototype);
        var w = (b.prototype = new y());
        (w.constructor = b), v(w, g.prototype), (w.isPureReactComponent = !0);
        var k = Array.isArray,
          R = Object.prototype.hasOwnProperty,
          S = { current: null },
          _ = { key: !0, ref: !0, __self: !0, __source: !0 };
        function I(e, t, r) {
          var a,
            l = {},
            o = null,
            c = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (c = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              R.call(t, a) && !_.hasOwnProperty(a) && (l[a] = t[a]);
          var i = arguments.length - 2;
          if (1 === i) l.children = r;
          else if (1 < i) {
            for (var u = Array(i), s = 0; s < i; s++) u[s] = arguments[s + 2];
            l.children = u;
          }
          if (e && e.defaultProps)
            for (a in (i = e.defaultProps)) void 0 === l[a] && (l[a] = i[a]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: c,
            props: l,
            _owner: S.current,
          };
        }
        function U(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var A = /\/+/g;
        function E(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function x(e, t, a, l, o) {
          var c = typeof e;
          ("undefined" !== c && "boolean" !== c) || (e = null);
          var i = !1;
          if (null === e) i = !0;
          else
            switch (c) {
              case "string":
              case "number":
                i = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    i = !0;
                }
            }
          if (i)
            return (
              (o = o((i = e))),
              (e = "" === l ? "." + E(i, 0) : l),
              k(o)
                ? ((a = ""),
                  null != e && (a = e.replace(A, "$&/") + "/"),
                  x(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (U(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      a +
                        (!o.key || (i && i.key === o.key)
                          ? ""
                          : ("" + o.key).replace(A, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((i = 0), (l = "" === l ? "." : l + ":"), k(e)))
            for (var u = 0; u < e.length; u++) {
              var s = l + E((c = e[u]), u);
              i += x(c, t, a, s, o);
            }
          else if (
            ((s = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof s)
          )
            for (e = s.call(e), u = 0; !(c = e.next()).done; )
              i += x((c = c.value), t, a, (s = l + E(c, u++)), o);
          else if ("object" === c)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return i;
        }
        function C(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            x(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function N(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var z = { current: null },
          M = { transition: null },
          T = {
            ReactCurrentDispatcher: z,
            ReactCurrentBatchConfig: M,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: C,
          forEach: function (e, t, n) {
            C(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              C(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              C(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!U(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = l),
          (t.Suspense = s),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = v({}, e.props),
              l = e.key,
              o = e.ref,
              c = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (c = S.current)),
                void 0 !== t.key && (l = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var i = e.type.defaultProps;
              for (u in t)
                R.call(t, u) &&
                  !_.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== i ? i[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              i = Array(u);
              for (var s = 0; s < u; s++) i[s] = arguments[s + 2];
              a.children = i;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: l,
              ref: o,
              props: a,
              _owner: c,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: i,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: c, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = I),
          (t.createFactory = function (e) {
            var t = I.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = U),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: N,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: m, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = M.transition;
            M.transition = {};
            try {
              e();
            } finally {
              M.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return z.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return z.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return z.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return z.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return z.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return z.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return z.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return z.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return z.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return z.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return z.current.useRef(e);
          }),
          (t.useState = function (e) {
            return z.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return z.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return z.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        e.exports = n(117);
      },
      184: function (e, t, n) {
        e.exports = n(374);
      },
      813: function (e, t) {
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < l(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var c = 2 * (r + 1) - 1,
                i = e[c],
                u = c + 1,
                s = e[u];
              if (0 > l(i, n))
                u < a && 0 > l(s, i)
                  ? ((e[r] = s), (e[u] = n), (r = u))
                  : ((e[r] = i), (e[c] = n), (r = c));
              else {
                if (!(u < a && 0 > l(s, n))) break e;
                (e[r] = s), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function l(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var c = Date,
            i = c.now();
          t.unstable_now = function () {
            return c.now() - i;
          };
        }
        var u = [],
          s = [],
          m = 1,
          f = null,
          p = 3,
          d = !1,
          v = !1,
          h = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(s); null !== t; ) {
            if (null === t.callback) a(s);
            else {
              if (!(t.startTime <= e)) break;
              a(s), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(s);
          }
        }
        function k(e) {
          if (((h = !1), w(e), !v))
            if (null !== r(u)) (v = !0), M(R);
            else {
              var t = r(s);
              null !== t && T(k, t.startTime - e);
            }
        }
        function R(e, n) {
          (v = !1), h && ((h = !1), y(U), (U = -1)), (d = !0);
          var l = p;
          try {
            for (
              w(n), f = r(u);
              null !== f && (!(f.expirationTime > n) || (e && !x()));

            ) {
              var o = f.callback;
              if ("function" === typeof o) {
                (f.callback = null), (p = f.priorityLevel);
                var c = o(f.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof c
                    ? (f.callback = c)
                    : f === r(u) && a(u),
                  w(n);
              } else a(u);
              f = r(u);
            }
            if (null !== f) var i = !0;
            else {
              var m = r(s);
              null !== m && T(k, m.startTime - n), (i = !1);
            }
            return i;
          } finally {
            (f = null), (p = l), (d = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          _ = !1,
          I = null,
          U = -1,
          A = 5,
          E = -1;
        function x() {
          return !(t.unstable_now() - E < A);
        }
        function C() {
          if (null !== I) {
            var e = t.unstable_now();
            E = e;
            var n = !0;
            try {
              n = I(!0, e);
            } finally {
              n ? S() : ((_ = !1), (I = null));
            }
          } else _ = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(C);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var N = new MessageChannel(),
            z = N.port2;
          (N.port1.onmessage = C),
            (S = function () {
              z.postMessage(null);
            });
        } else
          S = function () {
            g(C, 0);
          };
        function M(e) {
          (I = e), _ || ((_ = !0), S());
        }
        function T(e, n) {
          U = g(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            v || d || ((v = !0), M(R));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (A = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, l) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof l && null !== l
                ? (l = "number" === typeof (l = l.delay) && 0 < l ? o + l : o)
                : (l = o),
              e)
            ) {
              case 1:
                var c = -1;
                break;
              case 2:
                c = 250;
                break;
              case 5:
                c = 1073741823;
                break;
              case 4:
                c = 1e4;
                break;
              default:
                c = 5e3;
            }
            return (
              (e = {
                id: m++,
                callback: a,
                priorityLevel: e,
                startTime: l,
                expirationTime: (c = l + c),
                sortIndex: -1,
              }),
              l > o
                ? ((e.sortIndex = l),
                  n(s, e),
                  null === r(u) &&
                    e === r(s) &&
                    (h ? (y(U), (U = -1)) : (h = !0), T(k, l - o)))
                : ((e.sortIndex = c), n(u, e), v || d || ((v = !0), M(R))),
              e
            );
          }),
          (t.unstable_shouldYield = x),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        e.exports = n(813);
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var l = (t[r] = { exports: {} });
    return e[r](l, l.exports, n), l.exports;
  }
  !(function () {
    var e = n(791),
      t = n(250),
      r = "Header_header__-KMeG",
      a = "Header_nav__DanIT",
      l = "Header_link__nCCjM",
      o = n(184);
    var c = function () {
        return (0, o.jsx)("header", {
          className: r,
          children: (0, o.jsx)("nav", {
            className: a,
            children: (0, o.jsx)("a", {
              href: "https://www.marvel.com/",
              rel: "noreferrer",
              target: "_blank",
              className: l,
              children: "\xa9 Marvel",
            }),
          }),
        });
      },
      i = "Main_main__W+8cN",
      u = "Main_h1__7PCuv";
    function s(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    function m(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function f(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? m(Object(n), !0).forEach(function (t) {
              s(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : m(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function p(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
      return r;
    }
    function d(e, t) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, t) {
          var n =
            null == e
              ? null
              : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                e["@@iterator"];
          if (null != n) {
            var r,
              a,
              l = [],
              o = !0,
              c = !1;
            try {
              for (
                n = n.call(e);
                !(o = (r = n.next()).done) &&
                (l.push(r.value), !t || l.length !== t);
                o = !0
              );
            } catch (i) {
              (c = !0), (a = i);
            } finally {
              try {
                o || null == n.return || n.return();
              } finally {
                if (c) throw a;
              }
            }
            return l;
          }
        })(e, t) ||
        (function (e, t) {
          if (e) {
            if ("string" === typeof e) return p(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n ||
                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? p(e, t)
                : void 0
            );
          }
        })(e, t) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    var v = "Title_title__VHCKX";
    var h = function (e) {
        var t = e.title;
        return (0, o.jsx)("h3", { className: v, children: t });
      },
      g = "Modal_modal__f+iJl",
      y = "Modal_hidden__aQEg4",
      b = "Modal_content__hHQnf",
      w = "Modal_header__ZR4NM",
      k = "Modal_close__WsI9q",
      R = "Modal_body__JRhR1",
      S = "Modal_modified__EYlDw",
      _ = "Modal_h5__2yyXp",
      I = "Modal_description__O7vyI",
      U = "Modal_footer__5O+tf",
      A = "Picture_picture__bxTf4",
      E = "Picture_image__OxmC1";
    var x = function (e) {
        var t = e.name,
          n = e.thumbnail;
        return (0, o.jsx)("div", {
          className: A,
          children: (0, o.jsx)("img", { className: E, src: n, alt: t }),
        });
      },
      C = "Button_button__+z9G7";
    var N = function (e) {
      var t = e.text,
        n = e.onClick;
      return (0, o.jsx)("button", { onClick: n, className: C, children: t });
    };
    var z = function (e) {
        var t = e.name,
          n = e.thumbnail,
          r = e.modified,
          a = e.description,
          l = e.closeModal,
          c = e.showModal;
        return (0, o.jsx)("div", {
          className: "".concat(g, " ").concat(!c && y),
          children: (0, o.jsxs)("div", {
            className: b,
            children: [
              (0, o.jsxs)("div", {
                className: w,
                children: [
                  (0, o.jsx)(h, { title: t }),
                  (0, o.jsx)("button", {
                    onClick: l,
                    className: k,
                    children: "\xd7",
                  }),
                ],
              }),
              (0, o.jsxs)("div", {
                className: R,
                children: [
                  (0, o.jsx)(x, { name: t, thumbnail: n }),
                  (0, o.jsx)("p", { className: S, children: r }),
                  (0, o.jsx)("h5", {
                    className: _,
                    children:
                      "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:",
                  }),
                  (0, o.jsx)("p", { className: I, children: a }),
                ],
              }),
              (0, o.jsx)("div", {
                className: U,
                children: (0, o.jsx)(N, {
                  text: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c",
                  onClick: l,
                }),
              }),
            ],
          }),
        });
      },
      M = "Card_card__mUzVP",
      T = "Card_data__-IPhv";
    var P = function (t) {
        var n = t.name,
          r = t.thumbnail,
          a = d((0, e.useState)(!1), 2),
          l = a[0],
          c = a[1];
        return (0, o.jsxs)("div", {
          className: M,
          children: [
            (0, o.jsx)(x, { name: n, thumbnail: r }),
            (0, o.jsxs)("div", {
              className: T,
              children: [
                (0, o.jsx)(h, { title: n }),
                (0, o.jsx)(N, {
                  text: "\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435",
                  onClick: function () {
                    return c(!0);
                  },
                }),
              ],
            }),
            (0, o.jsx)(
              z,
              f(
                f({}, t),
                {},
                {
                  closeModal: function () {
                    return c(!1);
                  },
                  showModal: l,
                }
              )
            ),
          ],
        });
      },
      O = "Cards_list__E-MIg",
      L = [
        {
          id: 1009610,
          name: "\u0427\u0435\u043b\u043e\u0432\u0435\u043a-\u043f\u0430\u0443\u043a",
          nameor: "Spider-Man",
          description:
            "\u0423\u043a\u0443\u0448\u0435\u043d\u043d\u044b\u0439 \u0440\u0430\u0434\u0438\u043e\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u043c \u043f\u0430\u0443\u043a\u043e\u043c, \u0441\u0442\u0430\u0440\u0448\u0435\u043a\u043b\u0430\u0441\u0441\u043d\u0438\u043a \u041f\u0438\u0442\u0435\u0440 \u041f\u0430\u0440\u043a\u0435\u0440 \u043e\u0431\u0440\u0435\u043b \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c, \u0441\u0438\u043b\u0443 \u0438 \u0441\u0438\u043b\u0443 \u043f\u0430\u0443\u043a\u0430. \u041f\u0440\u0438\u043d\u044f\u0432 \u0438\u043c\u044f \u0427\u0435\u043b\u043e\u0432\u0435\u043a-\u043f\u0430\u0443\u043a, \u041f\u0438\u0442\u0435\u0440 \u043d\u0430\u0434\u0435\u044f\u043b\u0441\u044f \u043d\u0430\u0447\u0430\u0442\u044c \u043a\u0430\u0440\u044c\u0435\u0440\u0443, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0441\u0432\u043e\u0438 \u043d\u043e\u0432\u044b\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438. \u041d\u0430\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u0442\u043e\u043c\u0443, \u0447\u0442\u043e \u0441 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u0441\u0438\u043b\u043e\u0439 \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442 \u0431\u043e\u043b\u044c\u0448\u0430\u044f \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c, \u041f\u0430\u0443\u043a \u043f\u043e\u043a\u043b\u044f\u043b\u0441\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u0438 \u0441\u0438\u043b\u044b, \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043c\u043e\u0433\u0430\u0442\u044c \u043b\u044e\u0434\u044f\u043c.",
          modified: "2020-07-21T10:30:10-0400",
          thumbnail: "./static/img/526548a343e4b.webp",
          comics: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/62304",
              name: "Spider-Man: 101 Ways to End the Clone Saga (1997) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/78503",
              name: "2099 Alpha (2019) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/60151",
              name: "A YEAR OF MARVELS TPB (Trade Paperback)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/57926",
              name: "A Year of Marvels: April Infinite Comic (2016) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/57924",
              name: "A Year of Marvels: February Infinite Comic (2016) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/43501",
              name: "A+X (2012) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/76012",
              name: "Absolute Carnage (2019) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/76014",
              name: "Absolute Carnage (2019) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/78960",
              name: "Absolute Carnage (2019) #5",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/77071",
              name: "Absolute Carnage: Symbiote Spider-Man (2019) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/320",
              name: "Actor Presents Spider-Man and the Incredible Hulk (2003) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/76863",
              name: "Adventures of Spider-Man (1996) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/76864",
              name: "Adventures of Spider-Man (1996) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/76865",
              name: "Adventures of Spider-Man (1996) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/76866",
              name: "Adventures of Spider-Man (1996) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/76867",
              name: "Adventures of Spider-Man (1996) #5",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/76868",
              name: "Adventures of Spider-Man (1996) #6",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/76869",
              name: "Adventures of Spider-Man (1996) #7",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/76870",
              name: "Adventures of Spider-Man (1996) #8",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/76871",
              name: "Adventures of Spider-Man (1996) #9",
            },
          ],
          urls: [
            {
              type: "detail",
              url: "http://marvel.com/characters/54/spider-man?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "wiki",
              url: "http://marvel.com/universe/Spider-Man_(Peter_Parker)?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "comiclink",
              url: "http://marvel.com/comics/characters/1009610/spider-man?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
          ],
        },
        {
          id: 1009718,
          name: "\u0420\u043e\u0441\u0441\u043e\u043c\u0430\u0445\u0430",
          nameor: "Wolverine",
          description:
            '\u0420\u043e\u0436\u0434\u0435\u043d\u043d\u044b\u0439 \u0441\u043e \u0441\u0432\u0435\u0440\u0445\u0447\u0435\u043b\u043e\u0432\u0435\u0447\u0435\u0441\u043a\u0438\u043c\u0438 \u0447\u0443\u0432\u0441\u0442\u0432\u0430\u043c\u0438 \u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c\u044e \u0438\u0441\u0446\u0435\u043b\u044f\u0442\u044c \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0442 \u043b\u044e\u0431\u043e\u0439 \u0440\u0430\u043d\u044b, \u0420\u043e\u0441\u043e\u043c\u0430\u0445\u0430 \u0431\u044b\u043b \u0437\u0430\u0445\u0432\u0430\u0447\u0435\u043d \u0442\u0430\u0439\u043d\u043e\u0439 \u043a\u0430\u043d\u0430\u0434\u0441\u043a\u043e\u0439 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0435\u0439 \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u043b \u043d\u0435\u0440\u0443\u0448\u0438\u043c\u044b\u0439 \u0441\u043a\u0435\u043b\u0435\u0442 \u0438 \u043a\u043e\u0433\u0442\u0438. \u0421 \u043d\u0438\u043c \u043e\u0431\u0440\u0430\u0449\u0430\u043b\u0438\u0441\u044c \u043a\u0430\u043a \u0441 \u0436\u0438\u0432\u043e\u0442\u043d\u044b\u043c, \u0438 \u0435\u043c\u0443 \u043f\u043e\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043b\u0438\u0441\u044c \u0433\u043e\u0434\u044b, \u0447\u0442\u043e\u0431\u044b \u0432\u0437\u044f\u0442\u044c \u0441\u0435\u0431\u044f \u0432 \u0440\u0443\u043a\u0438. \u0422\u0435\u043f\u0435\u0440\u044c \u043e\u043d \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0435\u043c\u044c\u0435\u0440\u043e\u043c \u043a\u0430\u043a "\u041b\u044e\u0434\u0435\u0439 \u0418\u043a\u0441", \u0442\u0430\u043a \u0438 "\u041c\u0441\u0442\u0438\u0442\u0435\u043b\u0435\u0439".',
          modified: "2016-05-02T12:21:44-0400",
          thumbnail: "./static/img/537bcaef0f6cf.webp",
          comics: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/41113",
              name: "5 Ronin (Hardcover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/38756",
              name: "5 Ronin (2010) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/36162",
              name: "5 Ronin (2010) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/43488",
              name: "A+X (2012) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/43501",
              name: "A+X (2012) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/43505",
              name: "A+X (2012) #6",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/43508",
              name: "A+X (2012) #9",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/78497",
              name: "Acts Of Evil (Trade Paperback)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/29317",
              name: "ACTS OF VENGEANCE CROSSOVERS OMNIBUS (Hardcover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/29318",
              name: "ACTS OF VENGEANCE CROSSOVERS OMNIBUS (DM Only) (Hardcover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37996",
              name: "Age of X: Alpha (2010) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/24017",
              name: "Agents of Atlas (2009) #3 (Wolverine Art Appreciation Variant)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/24221",
              name: "Agents of Atlas (2009) #5",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/24222",
              name: "Agents of Atlas (2009) #5 (MCGUINNESS VARIANT)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/66661",
              name: "Agents of Atlas: The Complete Collection Vol. 1 (Trade Paperback)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/62094",
              name: "All-New Wolverine Vol. 5: Orphans of X (Trade Paperback)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/43467",
              name: "All-New X-Men (2012) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/12690",
              name: "Alpha Flight (1983) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/38564",
              name: "Alpha Flight (2011) #7",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/12671",
              name: "Alpha Flight (1983) #13",
            },
          ],
          urls: [
            {
              type: "detail",
              url: "http://marvel.com/comics/characters/1009718/wolverine?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "wiki",
              url: "http://marvel.com/universe/Wolverine_(James_Howlett)?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "comiclink",
              url: "http://marvel.com/comics/characters/1009718/wolverine?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
          ],
        },
        {
          id: 1009368,
          name: "\u0416\u0435\u043b\u0435\u0437\u043d\u044b\u0439 \u0447\u0435\u043b\u043e\u0432\u0435\u043a",
          nameor: "Iron Man",
          description:
            "\u0420\u0430\u043d\u0435\u043d\u044b\u0439, \u0437\u0430\u0445\u0432\u0430\u0447\u0435\u043d\u043d\u044b\u0439 \u0432 \u043f\u043b\u0435\u043d \u0438 \u0432\u044b\u043d\u0443\u0436\u0434\u0435\u043d\u043d\u044b\u0439 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043e\u0440\u0443\u0436\u0438\u0435 \u0441\u0432\u043e\u0438\u043c\u0438 \u0432\u0440\u0430\u0433\u0430\u043c\u0438, \u043c\u0438\u043b\u043b\u0438\u0430\u0440\u0434\u0435\u0440-\u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u0438\u043a \u0422\u043e\u043d\u0438 \u0421\u0442\u0430\u0440\u043a \u0432\u043c\u0435\u0441\u0442\u043e \u044d\u0442\u043e\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u043b \u0443\u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0441\u0442\u0432\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0434\u043e\u0441\u043f\u0435\u0445, \u0447\u0442\u043e\u0431\u044b \u0441\u043f\u0430\u0441\u0442\u0438 \u0441\u0432\u043e\u044e \u0436\u0438\u0437\u043d\u044c \u0438 \u0441\u0431\u0435\u0436\u0430\u0442\u044c \u0438\u0437 \u043f\u043b\u0435\u043d\u0430. \u0422\u0435\u043f\u0435\u0440\u044c, \u0441 \u043d\u043e\u0432\u044b\u043c \u0432\u0437\u0433\u043b\u044f\u0434\u043e\u043c \u043d\u0430 \u0436\u0438\u0437\u043d\u044c, \u0422\u043e\u043d\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0441\u0432\u043e\u0438 \u0434\u0435\u043d\u044c\u0433\u0438 \u0438 \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043c\u0438\u0440 \u0431\u043e\u043b\u0435\u0435 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u043c \u0438 \u043b\u0443\u0447\u0448\u0438\u043c \u043c\u0435\u0441\u0442\u043e\u043c \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0416\u0435\u043b\u0435\u0437\u043d\u043e\u0433\u043e \u0427\u0435\u043b\u043e\u0432\u0435\u043a\u0430.",
          modified: "2016-09-28T12:08:19-0400",
          thumbnail: "./static/img/527bb7b37ff55.webp",
          comics: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/43495",
              name: "A+X (2012) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/43506",
              name: "A+X (2012) #7",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/22461",
              name: "Adam: Legend of the Blue Marvel (2008) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/22856",
              name: "Adam: Legend of the Blue Marvel (2008) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/23733",
              name: "Adam: Legend of the Blue Marvel (2008) #5",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/76359",
              name: "Aero (2019) #11",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/76360",
              name: "Aero (2019) #12",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/30090",
              name: "Age of Heroes (2010) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/33566",
              name: "Age of Heroes (2010) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/30092",
              name: "Age of Heroes (2010) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/30093",
              name: "Age of Heroes (2010) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/67603",
              name: "Age of Innocence: The Rebirth of Iron Man (1996) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/38524",
              name: "Age of X: Universe (2011) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/38523",
              name: "Age of X: Universe (2011) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/21280",
              name: "All-New Iron Manual (2008) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/55363",
              name: "All-New, All-Different Avengers (2015) #10",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/55364",
              name: "All-New, All-Different Avengers (2015) #11",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/12653",
              name: "Alpha Flight (1983) #113",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/12668",
              name: "Alpha Flight (1983) #127",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/55311",
              name: "The Amazing Spider-Man (2015) #13",
            },
          ],
          urls: [
            {
              type: "detail",
              url: "http://marvel.com/characters/29/iron_man?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "wiki",
              url: "http://marvel.com/universe/Iron_Man_(Anthony_Stark)?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "comiclink",
              url: "http://marvel.com/comics/characters/1009368/iron_man?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
          ],
        },
        {
          id: 1009220,
          name: "\u041a\u0430\u043f\u0438\u0442\u0430\u043d \u0410\u043c\u0435\u0440\u0438\u043a\u0430",
          nameor: "Captain America",
          description:
            "\u041f\u043e\u043a\u043b\u044f\u0432\u0448\u0438\u0441\u044c \u0441\u043b\u0443\u0436\u0438\u0442\u044c \u0441\u0432\u043e\u0435\u0439 \u0441\u0442\u0440\u0430\u043d\u0435 \u0432\u043e \u0447\u0442\u043e \u0431\u044b \u0442\u043e \u043d\u0438 \u0441\u0442\u0430\u043b\u043e, \u043c\u043e\u043b\u043e\u0434\u043e\u0439 \u0421\u0442\u0438\u0432 \u0420\u043e\u0434\u0436\u0435\u0440\u0441 \u043f\u0440\u0438\u043d\u044f\u043b \u0441\u044b\u0432\u043e\u0440\u043e\u0442\u043a\u0443 \u0441\u0443\u043f\u0435\u0440\u0441\u043e\u043b\u0434\u0430\u0442\u0430, \u0447\u0442\u043e\u0431\u044b \u0441\u0442\u0430\u0442\u044c \u0430\u043c\u0435\u0440\u0438\u043a\u0430\u043d\u0441\u043a\u043e\u0439 \u0430\u0440\u043c\u0438\u0435\u0439 \u0438\u0437 \u043e\u0434\u043d\u043e\u0433\u043e \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430. \u0421\u0440\u0430\u0436\u0430\u044f\u0441\u044c \u0437\u0430 \u043a\u0440\u0430\u0441\u043d\u043e-\u0431\u0435\u043b\u043e-\u0441\u0438\u043d\u0438\u0445 \u043d\u0430 \u043f\u0440\u043e\u0442\u044f\u0436\u0435\u043d\u0438\u0438 \u0431\u043e\u043b\u0435\u0435 60 \u043b\u0435\u0442, \u041a\u0430\u043f\u0438\u0442\u0430\u043d \u0410\u043c\u0435\u0440\u0438\u043a\u0430 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0436\u0438\u0432\u044b\u043c, \u0434\u044b\u0448\u0430\u0449\u0438\u043c \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u043c \u0441\u0432\u043e\u0431\u043e\u0434\u044b \u0438 \u0441\u0432\u043e\u0431\u043e\u0434\u044b.",
          modified: "2020-04-04T19:01:59-0400",
          thumbnail: "./static/img/537ba56d31087.webp",
          comics: {
            available: 2371,
            collectionURI:
              "http://gateway.marvel.com/v1/public/characters/1009220/comics",
            items: [
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/43488",
                name: "A+X (2012) #1",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/43501",
                name: "A+X (2012) #4",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/43508",
                name: "A+X (2012) #9",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/17743",
                name: "A-Next (1998) #2",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/17744",
                name: "A-Next (1998) #3",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/17745",
                name: "A-Next (1998) #4",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/17746",
                name: "A-Next (1998) #5",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/17747",
                name: "A-Next (1998) #6",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/17748",
                name: "A-Next (1998) #7",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/17749",
                name: "A-Next (1998) #8",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/17750",
                name: "A-Next (1998) #9",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/17740",
                name: "A-Next (1998) #10",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/17741",
                name: "A-Next (1998) #11",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/17742",
                name: "A-Next (1998) #12",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/66978",
                name: "Adventures of Captain America (1991) #1",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/66979",
                name: "Adventures of Captain America (1991) #2",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/66980",
                name: "Adventures of Captain America (1991) #3",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/66981",
                name: "Adventures of Captain America (1991) #4",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/42539",
                name: "Age of Apocalypse (2011) #2 (Avengers Art Appreciation Variant)",
              },
              {
                resourceURI: "http://gateway.marvel.com/v1/public/comics/30090",
                name: "Age of Heroes (2010) #1",
              },
            ],
            returned: 20,
          },
          urls: [
            {
              type: "detail",
              url: "http://marvel.com/comics/characters/1009220/captain_america?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "wiki",
              url: "http://marvel.com/universe/Captain_America_(Steve_Rogers)?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "comiclink",
              url: "http://marvel.com/comics/characters/1009220/captain_america?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
          ],
        },
        {
          id: 1009664,
          name: "\u0422\u043e\u0440",
          nameor: "Thor",
          description:
            "\u0411\u0443\u0434\u0443\u0447\u0438 \u0441\u043a\u0430\u043d\u0434\u0438\u043d\u0430\u0432\u0441\u043a\u0438\u043c \u0431\u043e\u0433\u043e\u043c \u0433\u0440\u043e\u043c\u0430 \u0438 \u043c\u043e\u043b\u043d\u0438\u0438, \u0422\u043e\u0440 \u0432\u043b\u0430\u0434\u0435\u0435\u0442 \u043e\u0434\u043d\u0438\u043c \u0438\u0437 \u0432\u0435\u043b\u0438\u0447\u0430\u0439\u0448\u0438\u0445 \u0432\u0438\u0434\u043e\u0432 \u043e\u0440\u0443\u0436\u0438\u044f, \u043a\u043e\u0433\u0434\u0430-\u043b\u0438\u0431\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0445, - \u0437\u0430\u043a\u043e\u043b\u0434\u043e\u0432\u0430\u043d\u043d\u044b\u043c \u043c\u043e\u043b\u043e\u0442\u043e\u043c \u041c\u044c\u0435\u043b\u044c\u043d\u0438\u0440\u043e\u043c. \u0412 \u0442\u043e \u0432\u0440\u0435\u043c\u044f \u043a\u0430\u043a \u0434\u0440\u0443\u0433\u0438\u0435 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u043b\u0438 \u0422\u043e\u0440\u0430 \u043a\u0430\u043a \u0447\u0440\u0435\u0437\u043c\u0435\u0440\u043d\u043e \u043c\u0443\u0441\u043a\u0443\u043b\u0438\u0441\u0442\u043e\u0433\u043e, \u0442\u0443\u043f\u043e\u0432\u0430\u0442\u043e\u0433\u043e \u0438\u0434\u0438\u043e\u0442\u0430, \u043e\u043d \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u043e \u0443\u043c\u0435\u043d \u0438 \u0441\u043e\u0441\u0442\u0440\u0430\u0434\u0430\u0442\u0435\u043b\u044c\u0435\u043d. \u041e\u043d \u0443\u0432\u0435\u0440\u0435\u043d \u0432 \u0441\u0435\u0431\u0435 \u0438 \u043d\u0438\u043a\u043e\u0433\u0434\u0430, \u043d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u043d\u0435\u0442 \u0431\u043e\u0440\u043e\u0442\u044c\u0441\u044f \u0437\u0430 \u0434\u043e\u0441\u0442\u043e\u0439\u043d\u043e\u0435 \u0434\u0435\u043b\u043e.",
          modified: "2020-03-11T10:18:57-0400",
          thumbnail: "./static/img/5269657a74350.webp",
          comics: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/43506",
              name: "A+X (2012) #7",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/30090",
              name: "Age of Heroes (2010) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/33566",
              name: "Age of Heroes (2010) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/30092",
              name: "Age of Heroes (2010) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/30093",
              name: "Age of Heroes (2010) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/46852",
              name: "Alpha: Big Time (2013) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/12637",
              name: "Alpha Flight (1983) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/12725",
              name: "Alpha Flight (1983) #61",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/12668",
              name: "Alpha Flight (1983) #127",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/6748",
              name: "The Amazing Spider-Man (1963) #339",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/277",
              name: "Amazing Spider-Man (1999) #500",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/5808",
              name: "Amazing Spider-Man (1999) #538",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/16904",
              name: "Amazing Spider-Man Annual (1964) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/16890",
              name: "Amazing Spider-Man Annual (1964) #16",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/1262",
              name: "Amazing Spider-Man Vol. 6 (Trade Paperback)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/39896",
              name: "Art of Marvel Studios TPB Slipcase (Hardcover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/32769",
              name: "Astonishing Thor (2010) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/33652",
              name: "Astonishing Thor (2010) #1 (FOILOGRAM VARIANT)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/32771",
              name: "Astonishing Thor (2010) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/32774",
              name: "Astonishing Thor (2010) #3",
            },
          ],
          urls: [
            {
              type: "detail",
              url: "http://marvel.com/comics/characters/1009664/thor?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "wiki",
              url: "http://marvel.com/universe/Thor_(Thor_Odinson)?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "comiclink",
              url: "http://marvel.com/comics/characters/1009664/thor?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
          ],
        },
        {
          id: 1009351,
          name: "\u0425\u0430\u043b\u043a",
          nameor: "Hulk",
          description:
            "\u041f\u043e\u043f\u0430\u0432 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0432\u0437\u0440\u044b\u0432\u0430 \u0433\u0430\u043c\u043c\u0430-\u0431\u043e\u043c\u0431\u044b, \u043f\u044b\u0442\u0430\u044f\u0441\u044c \u0441\u043f\u0430\u0441\u0442\u0438 \u0436\u0438\u0437\u043d\u044c \u043f\u043e\u0434\u0440\u043e\u0441\u0442\u043a\u0430, \u0434\u043e\u043a\u0442\u043e\u0440 \u0411\u0440\u044e\u0441 \u0411\u0430\u043d\u043d\u0435\u0440 \u043f\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u043b\u0441\u044f \u0432 \u043d\u0435\u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e \u043c\u043e\u0449\u043d\u043e\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043e \u043f\u043e \u0438\u043c\u0435\u043d\u0438 \u0425\u0430\u043b\u043a. \u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0447\u0430\u0441\u0442\u043e \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u0435\u043c\u044b\u0439 \u0433\u0435\u0440\u043e\u0439, \u0447\u0435\u043c \u0437\u043b\u0435\u0435 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0425\u0430\u043b\u043a, \u0442\u0435\u043c \u0441\u0438\u043b\u044c\u043d\u0435\u0435 \u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0441\u044f \u0425\u0430\u043b\u043a.",
          modified: "2020-07-21T10:35:15-0400",
          thumbnail: "./static/img/538615ca33ab0.webp",
          comics: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/41112",
              name: "5 Ronin (Hardcover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/36365",
              name: "5 Ronin (2010) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/38753",
              name: "5 Ronin (2010) #2 (BROOKS COVER)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/43488",
              name: "A+X (2012) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/43506",
              name: "A+X (2012) #7",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/77060",
              name: "Absolute Carnage: Immortal Hulk (2019) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/320",
              name: "Actor Presents Spider-Man and the Incredible Hulk (2003) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/38524",
              name: "Age of X: Universe (2011) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/38523",
              name: "Age of X: Universe (2011) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/24053",
              name: "All-New Savage She-Hulk (2009) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/24252",
              name: "All-New Savage She-Hulk (2009) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/12689",
              name: "Alpha Flight (1983) #29",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/12650",
              name: "Alpha Flight (1983) #110",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/12651",
              name: "Alpha Flight (1983) #111",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/12668",
              name: "Alpha Flight (1983) #127",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/6527",
              name: "The Amazing Spider-Man (1963) #14",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/35528",
              name: "Amazing Spider-Man (1999) #667",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/16904",
              name: "Amazing Spider-Man Annual (1964) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/16886",
              name: "Amazing Spider-Man Annual (1964) #12",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/36956",
              name: "Amazing Spider-Man Annual (2011) #38",
            },
          ],
          urls: [
            {
              type: "detail",
              url: "http://marvel.com/comics/characters/1009351/hulk?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "wiki",
              url: "http://marvel.com/universe/Hulk_(Bruce_Banner)?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "comiclink",
              url: "http://marvel.com/comics/characters/1009351/hulk?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
          ],
        },
        {
          id: 1009268,
          name: "\u0414\u044d\u0434\u043f\u0443\u043b",
          nameor: "Deadpool",
          description:
            "\u0423\u044d\u0439\u0434 \u0423\u0438\u043b\u0441\u043e\u043d \u2014 \u043d\u0430\u0451\u043c\u043d\u0438\u043a. \u0411\u0443\u0434\u0443\u0447\u0438 \u043f\u043e\u0431\u043e\u0447\u043d\u044b\u043c \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u043c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0432\u043e\u043e\u0440\u0443\u0436\u0451\u043d\u043d\u044b\u0445 \u0441\u0438\u043b \u043f\u043e\u0434 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c \xab\u041e\u0440\u0443\u0436\u0438\u0435 X\xbb, \u0423\u0438\u043b\u0441\u043e\u043d \u043f\u0440\u0438\u043e\u0431\u0440\u0451\u043b \u043d\u0435\u0432\u0435\u0440\u043e\u044f\u0442\u043d\u0443\u044e \u0441\u0438\u043b\u0443, \u043f\u0440\u043e\u0432\u043e\u0440\u0441\u0442\u0432\u043e \u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u043a \u0438\u0441\u0446\u0435\u043b\u0435\u043d\u0438\u044e. \u041d\u043e \u0441\u0442\u0440\u0430\u0448\u043d\u043e\u0439 \u0446\u0435\u043d\u043e\u0439: \u0435\u0433\u043e \u043a\u043b\u0435\u0442\u043e\u0447\u043d\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f, \u0430 \u0437\u0434\u0440\u0430\u0432\u043e\u043c\u044b\u0441\u043b\u0438\u0435 \u0441\u043e\u043c\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e. \u0412\u0441\u0451, \u0447\u0435\u0433\u043e \u0445\u043e\u0447\u0435\u0442 \u0423\u0438\u043b\u0441\u043e\u043d, \u2014 \u0434\u0435\u0440\u0436\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043f\u043b\u0430\u0432\u0443 \u0432 \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u0432\u044b\u0433\u0440\u0435\u0431\u043d\u043e\u0439 \u044f\u043c\u0435. \u041d\u043e \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u0432 \u043d\u0435\u0439 \u0441\u043b\u0438\u0448\u043a\u043e\u043c \u0431\u044b\u0441\u0442\u0440\u043e\u0435.",
          modified: "2020-04-04T19:02:15-0400",
          thumbnail: "./static/img/5261a86cacb99.webp",
          comics: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/41112",
              name: "5 Ronin (Hardcover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/36160",
              name: "5 Ronin (2010) #5",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/38751",
              name: "5 Ronin (2010) #5 (MCGUINNESS COVER)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/43507",
              name: "A+X (2012) #8",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/77396",
              name: "Absolute Carnage Vs. Deadpool (2019) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/77397",
              name: "Absolute Carnage Vs. Deadpool (2019) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/77398",
              name: "Absolute Carnage Vs. Deadpool (2019) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17706",
              name: "Agent X (2002) #13",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17707",
              name: "Agent X (2002) #14",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/394",
              name: "Agent X (2002) #15",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/66262",
              name: "All-New Wolverine (2015) #31",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/24418",
              name: "Amazing Spider-Man (1999) #611",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/31556",
              name: "Amazing Spider-Man (1999) #620 (DEADPOOL VARIANT)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/36956",
              name: "Amazing Spider-Man Annual (2011) #38",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/61382",
              name: "Avengers (2016) #10",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/31560",
              name: "Avengers: The Initiative (2007) #33 (DEADPOOL VARIANT)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/39252",
              name: "Avenging Spider-Man (2011) #12",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/42565",
              name: "Avenging Spider-Man (2011) #13",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/73913",
              name: "Avenging Spider-Man: The Complete Collection (Trade Paperback)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/45720",
              name: "Baby's First Deadpool Book (1998) #1",
            },
          ],
          urls: [
            {
              type: "detail",
              url: "http://marvel.com/characters/12/deadpool?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "wiki",
              url: "http://marvel.com/universe/Deadpool_(Wade_Wilson)?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "comiclink",
              url: "http://marvel.com/comics/characters/1009268/deadpool?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
          ],
        },
        {
          id: 1009262,
          name: "\u0421\u043e\u0440\u0432\u0438\u0433\u043e\u043b\u043e\u0432\u0430 ",
          nameor: "Daredevil",
          description:
            '\u0411\u0440\u043e\u0448\u0435\u043d\u043d\u044b\u0439 \u043c\u0430\u0442\u0435\u0440\u044c\u044e, \u041c\u044d\u0442\u0442 \u041c\u0435\u0440\u0434\u043e\u043a \u0431\u044b\u043b \u0432\u043e\u0441\u043f\u0438\u0442\u0430\u043d \u0441\u0432\u043e\u0438\u043c \u043e\u0442\u0446\u043e\u043c, \u0431\u043e\u043a\u0441\u0435\u0440\u043e\u043c "\u0421\u0440\u0430\u0436\u0430\u044e\u0449\u0438\u043c\u0441\u044f \u0414\u0436\u0435\u043a\u043e\u043c" \u041c\u0435\u0440\u0434\u043e\u043a\u043e\u043c, \u0432 \u0410\u0434\u0441\u043a\u043e\u0439 \u043a\u0443\u0445\u043d\u0435. \u041f\u043e\u043d\u0438\u043c\u0430\u044f, \u0447\u0442\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043b\u044e\u0434\u0438 \u043d\u0435 \u0432\u0435\u043b\u0438 \u0441\u0435\u0431\u044f \u043f\u043b\u043e\u0445\u043e, \u043c\u043e\u043b\u043e\u0434\u043e\u0439 \u041c\u044d\u0442\u0442 \u0440\u0435\u0448\u0438\u043b \u0438\u0437\u0443\u0447\u0430\u0442\u044c \u043f\u0440\u0430\u0432\u043e; \u043e\u0434\u043d\u0430\u043a\u043e, \u043a\u043e\u0433\u0434\u0430 \u043e\u043d \u0441\u043f\u0430\u0441 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0430 \u043e\u0442 \u0432\u0441\u0442\u0440\u0435\u0447\u043d\u043e\u0433\u043e \u0433\u0440\u0443\u0437\u043e\u0432\u0438\u043a\u0430, \u043e\u043d \u0440\u0430\u0437\u043b\u0438\u043b \u0440\u0430\u0434\u0438\u043e\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u0433\u0440\u0443\u0437, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u0434\u0435\u043b\u0430\u043b \u041c\u044d\u0442\u0442\u0430 \u0441\u043b\u0435\u043f\u044b\u043c, \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0443\u0441\u0438\u043b\u0438\u0432\u0430\u044f \u0435\u0433\u043e \u043e\u0441\u0442\u0430\u0432\u0448\u0438\u0435\u0441\u044f \u0447\u0443\u0432\u0441\u0442\u0432\u0430. \u041f\u043e\u0434 \u0441\u0443\u0440\u043e\u0432\u043e\u0439 \u043e\u043f\u0435\u043a\u043e\u0439 \u0441\u043b\u0435\u043f\u043e\u0433\u043e \u043c\u0430\u0441\u0442\u0435\u0440\u0430 \u0431\u043e\u0435\u0432\u044b\u0445 \u0438\u0441\u043a\u0443\u0441\u0441\u0442\u0432 \u0421\u0442\u0438\u043a\u0430 \u041c\u044d\u0442\u0442 \u043e\u0432\u043b\u0430\u0434\u0435\u043b \u0441\u0432\u043e\u0438\u043c\u0438 \u043e\u0431\u043e\u0441\u0442\u0440\u0435\u043d\u043d\u044b\u043c\u0438 \u0447\u0443\u0432\u0441\u0442\u0432\u0430\u043c\u0438 \u0438 \u0441\u0442\u0430\u043b \u0433\u0440\u043e\u0437\u043d\u044b\u043c \u0431\u043e\u0439\u0446\u043e\u043c.',
          modified: "2020-03-04T16:09:36-0500",
          thumbnail: "./static/img/50febb79985ee.webp",
          comics: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/29317",
              name: "ACTS OF VENGEANCE CROSSOVERS OMNIBUS (Hardcover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/29318",
              name: "ACTS OF VENGEANCE CROSSOVERS OMNIBUS (DM Only) (Hardcover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37257",
              name: "Alias (2001) #10",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37255",
              name: "Alias Omnibus (Hardcover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/12637",
              name: "Alpha Flight (1983) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/12668",
              name: "Alpha Flight (1983) #127",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37894",
              name: "Amazing Spider-Man (1999) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/6549",
              name: "The Amazing Spider-Man (1963) #16",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/6811",
              name: "The Amazing Spider-Man (1963) #396",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/5808",
              name: "Amazing Spider-Man (1999) #538",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/21504",
              name: "Amazing Spider-Man (1999) #566",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/21702",
              name: "Amazing Spider-Man (1999) #567",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/23567",
              name: "Amazing Spider-Man (1999) #587",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/24407",
              name: "Amazing Spider-Man (1999) #600",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/29303",
              name: "Amazing Spider-Man (1999) #600 (2ND PRINTING VARIANT)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/35491",
              name: "Amazing Spider-Man (1999) #677",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/16904",
              name: "Amazing Spider-Man Annual (1964) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/16889",
              name: "Amazing Spider-Man Annual (1964) #15",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/23069",
              name: "Amazing Spider-Man: Extra! (2008) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/24201",
              name: "Astonishing Tales (2009) #4",
            },
          ],
          urls: [
            {
              type: "detail",
              url: "http://marvel.com/comics/characters/1009262/daredevil?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "wiki",
              url: "http://marvel.com/universe/Daredevil_(Matthew_Murdock)?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "comiclink",
              url: "http://marvel.com/comics/characters/1009262/daredevil?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
          ],
        },
        {
          id: 1009515,
          name: "\u041a\u0430\u0440\u0430\u0442\u0435\u043b\u044c",
          nameor: "Punisher",
          description:
            "\u0432\u0435\u0442\u0435\u0440\u0430\u043d \u0432\u043e\u0439\u043d\u044b, \u043f\u0440\u043e\u0448\u0435\u0434\u0448\u0438\u0439 \u0431\u043e\u0435\u0432\u0443\u044e \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0443 \u0432 \u0441\u0430\u043c\u044b\u0445 \u044d\u043b\u0438\u0442\u043d\u044b\u0445 \u0441\u043f\u0435\u0446\u043f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f\u0445. \u041e\u043d \u0432\u043b\u0430\u0434\u0435\u0435\u0442 \u0432\u0441\u0435\u043c\u0438 \u0432\u0438\u0434\u0430\u043c\u0438 \u043e\u0433\u043d\u0435\u0441\u0442\u0440\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u043e\u0440\u0443\u0436\u0438\u044f.",
          modified: "2017-08-24T11:20:12-0400",
          thumbnail: "./static/img/5261675f6b22f.webp",
          comics: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/41112",
              name: "5 Ronin (Hardcover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/35220",
              name: "5 Ronin (2010) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/57933",
              name: "A Year of Marvels: November Infinite Comic (2016) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/58634",
              name: "A Year of Marvels: The Uncanny (2016) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/76863",
              name: "Adventures of Spider-Man (1996) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17709",
              name: "Agent X (2002) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/5245",
              name: "Amazing Spider-Man (1999) #537",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/22468",
              name: "Amazing Spider-Man (1999) #577",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/35517",
              name: "Amazing Spider-Man (1999) #655",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/40886",
              name: "Amazing Spider-Man (1999) #655 (2nd Printing Variant)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/16889",
              name: "Amazing Spider-Man Annual (1964) #15",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/23645",
              name: "Astonishing Tales (2009) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/23803",
              name: "Astonishing Tales (2009) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/23996",
              name: "Astonishing Tales (2009) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/24201",
              name: "Astonishing Tales (2009) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/24492",
              name: "Astonishing Tales (2009) #5",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/5844",
              name: "Avengers Assemble Vol. 4 (Hardcover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/39253",
              name: "Avenging Spider-Man (2011) #6",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/45919",
              name: "Avenging Spider-Man (2011) #22",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/47986",
              name: "Black Widow (2014) #1",
            },
          ],
          urls: [
            {
              type: "detail",
              url: "http://marvel.com/comics/characters/1009515/punisher?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "wiki",
              url: "http://marvel.com/universe/Punisher_(Frank_Castle)?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "comiclink",
              url: "http://marvel.com/comics/characters/1009515/punisher?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
          ],
        },
        {
          id: 1009282,
          name: "\u0414\u043e\u043a\u0442\u043e\u0440 \u0421\u0442\u0440\u044d\u043d\u0434\u0436",
          nameor: "Doctor Strange",
          description:
            "\u0421\u0442\u0440\u0430\u0448\u043d\u0430\u044f \u0430\u0432\u0442\u043e\u043a\u0430\u0442\u0430\u0441\u0442\u0440\u043e\u0444\u0430 \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u043b\u0430 \u043a\u0440\u0435\u0441\u0442 \u043d\u0430 \u043a\u0430\u0440\u044c\u0435\u0440\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0433\u043e \u043d\u0435\u0439\u0440\u043e\u0445\u0438\u0440\u0443\u0440\u0433\u0430 \u0414\u043e\u043a\u0442\u043e\u0440\u0430 \u0421\u0442\u0440\u044d\u043d\u0434\u0436\u0430. \u041e\u0442\u0447\u0430\u044f\u0432\u0448\u0438\u0441\u044c, \u043e\u043d \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u0432 \u043f\u043e\u0438\u0441\u043a\u0430\u0445 \u0438\u0441\u0446\u0435\u043b\u0435\u043d\u0438\u044f \u0438 \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u0432 \u0441\u0435\u0431\u0435 \u043d\u0435\u0432\u0435\u0440\u043e\u044f\u0442\u043d\u044b\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u043a \u0442\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0438. \u0422\u0435\u043f\u0435\u0440\u044c \u043e\u043d - \u0441\u0432\u044f\u0437\u0443\u044e\u0449\u0435\u0435 \u0437\u0432\u0435\u043d\u043e \u043c\u0435\u0436\u0434\u0443 \u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f\u043c\u0438, \u0430 \u0435\u0433\u043e \u043c\u0438\u0441\u0441\u0438\u044f - \u0437\u0430\u0449\u0438\u0449\u0430\u0442\u044c \u0436\u0438\u0442\u0435\u043b\u0435\u0439 \u0417\u0435\u043c\u043b\u0438 \u0438 \u043f\u0440\u043e\u0442\u0438\u0432\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0417\u043b\u0443, \u043a\u0430\u043a\u043e\u0435 \u0431\u044b \u043e\u0431\u043b\u0438\u0447\u0438\u0435 \u043e\u043d\u043e \u043d\u0438 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u043b\u043e.",
          modified: "2020-07-21T10:33:36-0400",
          thumbnail: "./static/img/5261a85a501fe.webp",
          comics: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/43508",
              name: "A+X (2012) #9",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/29317",
              name: "ACTS OF VENGEANCE CROSSOVERS OMNIBUS (Hardcover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/29318",
              name: "ACTS OF VENGEANCE CROSSOVERS OMNIBUS (DM Only) (Hardcover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/61524",
              name: "All-New Guardians of the Galaxy (2017) #12",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/56435",
              name: "All-New Wolverine (2015) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/12668",
              name: "Alpha Flight (1983) #127",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/6745",
              name: "The Amazing Spider-Man (1963) #336",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/277",
              name: "Amazing Spider-Man (1999) #500",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/361",
              name: "Amazing Spider-Man (1999) #504",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/30314",
              name: "Amazing Spider-Man (1999) #639",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/34118",
              name: "Amazing Spider-Man (1999) #640",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/35509",
              name: "Amazing Spider-Man (1999) #673",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/16883",
              name: "Amazing Spider-Man Annual (1964) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/16894",
              name: "Amazing Spider-Man Annual (1964) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/16888",
              name: "Amazing Spider-Man Annual (1964) #14",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/1262",
              name: "Amazing Spider-Man Vol. 6 (Trade Paperback)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/2970",
              name: "AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/1333",
              name: "Amazing Spider-Man Vol. 7: The Book of Ezekiel (Trade Paperback)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/67002",
              name: "Avengers (2018) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/67311",
              name: "Avengers (2018) #2",
            },
          ],
          urls: [
            {
              type: "detail",
              url: "http://marvel.com/comics/characters/1009282/doctor_strange?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "wiki",
              url: "http://marvel.com/universe/Doctor_Strange_(Stephen_Strange)?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "comiclink",
              url: "http://marvel.com/comics/characters/1009282/doctor_strange?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
          ],
        },
        {
          id: 1009187,
          name: "\u0427\u0435\u0440\u043d\u0430\u044f \u041f\u0430\u043d\u0442\u0435\u0440\u0430",
          nameor: "Black Panther",
          description:
            "\u0421 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0432\u0437\u0433\u043b\u044f\u0434\u0430 \u043c\u043e\u0436\u043d\u043e \u0440\u0435\u0448\u0438\u0442\u044c, \u0447\u0442\u043e \u0412\u0430\u043a\u0430\u043d\u0434\u0430 - \u043e\u0431\u044b\u0447\u043d\u0430\u044f \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u044f \u0434\u0438\u043a\u043e\u0439 \u0410\u0444\u0440\u0438\u043a\u0438, \u043d\u043e \u044d\u0442\u043e \u043d\u0435 \u0442\u0430\u043a. \u0417\u0434\u0435\u0441\u044c, \u0432 \u043d\u0435\u0434\u0440\u0430\u0445 \u043f\u0443\u0441\u0442\u044b\u043d\u043d\u044b\u0445 \u0437\u0435\u043c\u0435\u043b\u044c, \u0441\u043a\u0440\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0437\u0430\u043b\u0435\u0436\u0438 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043c\u0435\u0442\u0430\u043b\u043b\u0430, \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0433\u043e \u043f\u043e\u0433\u043b\u043e\u0449\u0430\u0442\u044c \u0432\u0438\u0431\u0440\u0430\u0446\u0438\u044e. \u041c\u043d\u043e\u0433\u0438\u0435 \u043f\u044b\u0442\u0430\u043b\u0438\u0441\u044c \u0434\u043e\u0431\u0440\u0430\u0442\u044c\u0441\u044f \u0434\u043e \u043d\u0435\u0433\u043e, \u0440\u0430\u0437\u043e\u0440\u044f\u044f \u0432\u0441\u0451 \u043d\u0430 \u0441\u0432\u043e\u0451\u043c \u043f\u0443\u0442\u0438 \u0438 \u043f\u0440\u0438\u043d\u043e\u0441\u044f \u0441\u043c\u0435\u0440\u0442\u044c \u0430\u0431\u043e\u0440\u0438\u0433\u0435\u043d\u0430\u043c, \u043d\u043e \u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0430\u0437 \u0442\u0430\u0438\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0434\u0443\u0445 \u0441\u0430\u0432\u0430\u043d\u043d\u044b - \u0427\u0451\u0440\u043d\u0430\u044f \u041f\u0430\u043d\u0442\u0435\u0440\u0430 - \u0432\u0441\u0442\u0430\u0432\u0430\u043b \u043d\u0430 \u0437\u0430\u0449\u0438\u0442\u0443 \u0443\u0433\u043d\u0435\u0442\u0451\u043d\u043d\u044b\u0445. \u0421\u043f\u0443\u0441\u0442\u044f \u043c\u043d\u043e\u0433\u043e \u043b\u0435\u0442 \u0431\u0435\u0434\u0430 \u0441\u043d\u043e\u0432\u0430 \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442 \u0432 \u0412\u0430\u043a\u0430\u043d\u0434\u0443, \u0438 \u0432 \u044d\u0442\u043e\u0442 \u0440\u0430\u0437 \u0432\u0440\u0430\u0433 \u0437\u0430\u0440\u0443\u0447\u0438\u043b\u0441\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439. \u041a\u043e\u0433\u0434\u0430 \u0448\u0430\u043d\u0441\u043e\u0432 \u043f\u043e\u0447\u0442\u0438 \u043d\u0435 \u043e\u0441\u0442\u0430\u0451\u0442\u0441\u044f, \u0422'\u0427\u0430\u043b\u043b\u0430, \u043c\u043e\u043b\u043e\u0434\u043e\u0439 \u043f\u0440\u0438\u043d\u0446 \u0412\u0430\u043a\u0430\u043d\u0434\u044b, \u0443\u0437\u043d\u0430\u0451\u0442, \u0447\u0442\u043e \u0438\u043c\u0435\u043d\u043d\u043e \u0435\u043c\u0443 \u043f\u0440\u0435\u0434\u0441\u0442\u043e\u0438\u0442 \u0432\u043e\u0437\u0440\u043e\u0434\u0438\u0442\u044c \u043b\u0435\u0433\u0435\u043d\u0434\u0443 \u0438 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u0432\u0435\u0447\u043d\u0443\u044e \u0431\u043e\u0440\u044c\u0431\u0443, \u043d\u0430\u0434\u0435\u0432 \u043c\u0430\u0441\u043a\u0443 \u0427\u0451\u0440\u043d\u043e\u0439 \u041f\u0430\u043d\u0442\u0435\u0440\u044b.",
          modified: "2018-06-19T16:39:46-0400",
          thumbnail: "./static/img/5261a80a67e7d.webp",
          comics: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/43498",
              name: "A+X (2012) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/30885",
              name: "AGE OF HEROES TPB (Trade Paperback)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/16889",
              name: "Amazing Spider-Man Annual (1964) #15",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/16900",
              name: "Amazing Spider-Man Annual (1964) #25",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/62388",
              name: "Astonishing Tales (1970) #6",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/43221",
              name: "Astonishing X-Men (2004) #51 (Create Your Own Wedding Variant)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/67002",
              name: "Avengers (2018) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17490",
              name: "Avengers (1998) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/67311",
              name: "Avengers (2018) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17501",
              name: "Avengers (1998) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17512",
              name: "Avengers (1998) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17523",
              name: "Avengers (1998) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/67763",
              name: "Avengers (2018) #6",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/67769",
              name: "Avengers (2018) #12",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17500",
              name: "Avengers (1998) #19",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17502",
              name: "Avengers (1998) #20",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17503",
              name: "Avengers (1998) #21",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17504",
              name: "Avengers (1998) #22",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17505",
              name: "Avengers (1998) #23",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/77939",
              name: "Avengers (2018) #36",
            },
          ],
          urls: [
            {
              type: "detail",
              url: "http://marvel.com/comics/characters/1009187/black_panther?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "wiki",
              url: "http://marvel.com/universe/Black_Panther_(T%27Challa)?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "comiclink",
              url: "http://marvel.com/comics/characters/1009187/black_panther?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
          ],
        },
        {
          id: 1009707,
          name: "\u041e\u0441\u0430",
          nameor: "Wasp",
          description:
            '\u041a\u043e\u0433\u0434\u0430 \u0443\u043c\u0435\u0440 \u043e\u0442\u0435\u0446 \u0414\u0436\u0430\u043d\u0435\u0442 \u0412\u0430\u043d \u0414\u0430\u0439\u043d, \u043e\u043d\u0430 \u0443\u0431\u0435\u0434\u0438\u043b\u0430 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0430 \u0441\u0432\u043e\u0435\u0433\u043e \u043e\u0442\u0446\u0430 \u0425\u044d\u043d\u043a\u0430 \u041f\u0438\u043c\u0430 \u0434\u0430\u0442\u044c \u0435\u0439 \u0437\u0430\u043f\u0430\u0441 "\u0447\u0430\u0441\u0442\u0438\u0446 \u041f\u0438\u043c\u0430"; \u041f\u0438\u043c \u0442\u0430\u043a\u0436\u0435 \u043f\u043e\u0434\u0432\u0435\u0440\u0433 \u0435\u0435 \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u0435, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0434\u0430\u043b\u0430 \u0435\u0439 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c, \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0432\u0448\u0438\u0441\u044c, \u0432\u044b\u0440\u0430\u0441\u0442\u0438\u0442\u044c \u043a\u0440\u044b\u043b\u044c\u044f \u0438 \u0432\u044b\u0441\u0442\u0440\u0435\u043b\u0438\u0442\u044c \u0432\u0437\u0440\u044b\u0432\u0430\u043c\u0438 \u044d\u043d\u0435\u0440\u0433\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u043d\u0430 \u043d\u0430\u0437\u0432\u0430\u043b\u0430 "\u0443\u043a\u0443\u0441\u0430\u043c\u0438 \u043e\u0441\u044b".',
          modified: "2016-02-29T10:44:27-0500",
          thumbnail: "./static/img/5390dfd5ef165.webp",
          comics: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/22461",
              name: "Adam: Legend of the Blue Marvel (2008) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/56436",
              name: "All-New Wolverine (2015) #5",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/55367",
              name: "All-New, All-Different Avengers (2015) #14",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/67706",
              name: "Ant-Man & the Wasp: Living Legends (2018) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/67309",
              name: "Ant-Man and the Wasp Adventures (Digest)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/41530",
              name: "Ant-Man: Astonishing Origins (Trade Paperback)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17490",
              name: "Avengers (1998) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17501",
              name: "Avengers (1998) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17757",
              name: "Avengers (1996) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17512",
              name: "Avengers (1998) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17758",
              name: "Avengers (1996) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17523",
              name: "Avengers (1998) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/7299",
              name: "Avengers (1963) #5",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/7332",
              name: "Avengers (1963) #8",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17763",
              name: "Avengers (1996) #9",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17491",
              name: "Avengers (1998) #10",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/6953",
              name: "Avengers (1963) #10",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17752",
              name: "Avengers (1996) #10",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17753",
              name: "Avengers (1996) #11",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17492",
              name: "Avengers (1998) #11",
            },
          ],
          urls: [
            {
              type: "detail",
              url: "http://marvel.com/comics/characters/1009707/wasp?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "wiki",
              url: "http://marvel.com/universe/Wasp?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "comiclink",
              url: "http://marvel.com/comics/characters/1009707/wasp?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
          ],
        },
        {
          id: 1009191,
          name: "\u0411\u043b\u044d\u0439\u0434",
          nameor: "Blade",
          description:
            '\u041c\u0443\u0436\u0447\u0438\u043d\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0436\u0435 \u0441\u0442\u0430\u043d\u0435\u0442 \u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043d \u043a\u0430\u043a "\u0411\u043b\u044d\u0439\u0434" \u0440\u043e\u0434\u0438\u043b\u0441\u044f \u0432 \u0431\u043e\u0440\u0434\u0435\u043b\u0435 \u0421\u043e\u0445\u043e, \u0412\u0435\u043b\u0438\u043a\u043e\u0431\u0440\u0438\u0442\u0430\u043d\u0438\u044f \u0432 1929 \u0433\u043e\u0434\u0443. \u0415\u0433\u043e \u043e\u0442\u0435\u0446, \u041b\u0443\u043a\u0430\u0441 \u041a\u0440\u043e\u0441\u0441 (Lucas Cross), \u0447\u043b\u0435\u043d \u0442\u0430\u0439\u043d\u043e\u0433\u043e \u043e\u0431\u0449\u0435\u0441\u0442\u0432\u0430 "\u041e\u0440\u0434\u0435\u043d \u0422\u0438\u0440\u0430\u043d\u044b" (Order of Tyrana) (\u043f\u0440\u0438\u043c. - \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f, \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u044e\u0449\u0430\u044f\u0441\u044f \u043d\u0430 \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u0445 \u043e\u043a\u043a\u0443\u043b\u044c\u0442\u0438\u0437\u043c\u0430, \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u0432\u0430\u043c\u043f\u0438\u0440\u0438\u0437\u043c\u0430), \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043b \u0441\u0432\u043e\u044e \u0431\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u0436\u0435\u043d\u0443 \u0422\u0430\u0440\u0443 (Tara) \u0432 \u0410\u043d\u0433\u043b\u0438\u044e, \u043f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u0431\u044b\u043b \u043f\u043b\u0435\u043d\u0451\u043d \u0432 \u041b\u0430\u0442\u0432\u0435\u0440\u0438\u0438 (Latveria). \u0422\u0430\u043c \u043e\u043d\u0430 \u0438 \u043d\u0430\u0445\u043e\u0434\u0438\u0442 \u0441\u0432\u043e\u0439 \u0432\u0442\u043e\u0440\u043e\u0439 \u0434\u043e\u043c, \u043f\u043e\u0441\u0435\u043b\u0438\u0432\u0448\u0438\u0441\u044c \u0443 \u0432\u043b\u0430\u0434\u0435\u043b\u0438\u0446\u044b \u0431\u043e\u0440\u0434\u0435\u043b\u044f \u041c\u0430\u0434\u0430\u043c \u0412\u0430\u043d\u0438\u0442\u0438 (Madame Vanity), \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0447\u043b\u0435\u043d\u0430 "\u041e\u0440\u0434\u0435\u043d\u0430 \u0422\u0438\u0440\u0430\u043d\u0430", \u043f\u043e\u0434 \u0438\u043c\u0435\u043d\u0435\u043c \u0412\u0430\u043d\u0435\u0441\u0441\u044b \u0411\u0440\u0443\u043a\u0441 (Vanessa Brooks). \u200b',
          modified: "2013-10-04T18:29:21-0400",
          thumbnail: "./static/img/523ca6f2b11e4.webp",
          comics: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/71049",
              name: "Avengers (2018) #16",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/84363",
              name: "Avengers (2018) #45",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/3356",
              name: "Black Panther (2005) #12",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/65441",
              name: "Black Panther by Reginald Hudlin: The Complete Collection Vol. 1 (Trade Paperback)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/4140",
              name: "Black Panther: Bad Mutha (Trade Paperback)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/74892",
              name: "Blade (1998) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/5133",
              name: "Blade (2006) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/5288",
              name: "Blade (2006) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/74893",
              name: "Blade (1998) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/5596",
              name: "Blade (2006) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/74894",
              name: "Blade (1998) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/5713",
              name: "Blade (2006) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/5849",
              name: "Blade (2006) #5",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/5917",
              name: "Blade (2006) #5 (Bloody Variant)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/6002",
              name: "Blade (2006) #6",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/6129",
              name: "Blade (2006) #7",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/6267",
              name: "Blade (2006) #8",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/13475",
              name: "Blade (2006) #9",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/15854",
              name: "Blade (2006) #10",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/15964",
              name: "Blade (2006) #11",
            },
          ],
          urls: [
            {
              type: "detail",
              url: "http://marvel.com/comics/characters/1009191/blade?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "wiki",
              url: "http://marvel.com/universe/Blade_(Eric_Brooks)?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "comiclink",
              url: "http://marvel.com/comics/characters/1009191/blade?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
          ],
        },
        {
          id: 1009189,
          name: "\u0427\u0435\u0440\u043d\u0430\u044f \u0432\u0434\u043e\u0432\u0430",
          nameor: "Black Widow",
          description:
            "\u041d\u0430\u0442\u0430\u0448\u0435 \u0420\u043e\u043c\u0430\u043d\u043e\u0444\u0444 \u043f\u0440\u0435\u0434\u0441\u0442\u043e\u0438\u0442 \u043b\u0438\u0446\u043e\u043c \u043a \u043b\u0438\u0446\u0443 \u0432\u0441\u0442\u0440\u0435\u0442\u0438\u0442\u044c\u0441\u044f \u0441\u043e \u0441\u0432\u043e\u0438\u043c \u043f\u0440\u043e\u0448\u043b\u044b\u043c. \u0427\u0451\u0440\u043d\u043e\u0439 \u0412\u0434\u043e\u0432\u0435 \u043f\u0440\u0438\u0434\u0435\u0442\u0441\u044f \u0432\u0441\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043e \u0442\u043e\u043c, \u0447\u0442\u043e \u0431\u044b\u043b\u043e \u0432 \u0435\u0451 \u0436\u0438\u0437\u043d\u0438 \u0437\u0430\u0434\u043e\u043b\u0433\u043e \u0434\u043e \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u043a \u043a\u043e\u043c\u0430\u043d\u0434\u0435 \u041c\u0441\u0442\u0438\u0442\u0435\u043b\u0435\u0439, \u0438 \u0443\u0437\u043d\u0430\u0442\u044c \u043e\u0431 \u043e\u043f\u0430\u0441\u043d\u043e\u043c \u0437\u0430\u0433\u043e\u0432\u043e\u0440\u0435, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0432\u0442\u044f\u043d\u0443\u0442\u044b \u0435\u0451 \u0441\u0442\u0430\u0440\u044b\u0435 \u0437\u043d\u0430\u043a\u043e\u043c\u044b\u0435 \u2014 \u0415\u043b\u0435\u043d\u0430, \u0410\u043b\u0435\u043a\u0441\u0435\u0439 (\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439 \u043a\u0430\u043a \u041a\u0440\u0430\u0441\u043d\u044b\u0439 \u0421\u0442\u0440\u0430\u0436) \u0438 \u041c\u0435\u043b\u0438\u043d\u0430.",
          modified: "2016-01-04T18:09:26-0500",
          thumbnail: "./static/img/50fecad1f395b.webp",
          comics: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/43495",
              name: "A+X (2012) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/43509",
              name: "A+X (2012) #10",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/22461",
              name: "Adam: Legend of the Blue Marvel (2008) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/23245",
              name: "Amazing Adventures (1970) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/23256",
              name: "Amazing Adventures (1970) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/23267",
              name: "Amazing Adventures (1970) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/23278",
              name: "Amazing Adventures (1970) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/23279",
              name: "Amazing Adventures (1970) #5",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/23280",
              name: "Amazing Adventures (1970) #6",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/23281",
              name: "Amazing Adventures (1970) #7",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/23282",
              name: "Amazing Adventures (1970) #8",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/40109",
              name: "Amazing Spider-Man (1999) #684",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/40116",
              name: "Amazing Spider-Man (1999) #685",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/40115",
              name: "Amazing Spider-Man (1999) #686",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/40113",
              name: "Amazing Spider-Man (1999) #687",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17490",
              name: "Avengers (1998) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17501",
              name: "Avengers (1998) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17512",
              name: "Avengers (1998) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17523",
              name: "Avengers (1998) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/17509",
              name: "Avengers (1998) #27",
            },
          ],
          urls: [
            {
              type: "detail",
              url: "http://marvel.com/comics/characters/1009189/black_widow?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "wiki",
              url: "http://marvel.com/universe/Black_Widow_(Natasha_Romanova)?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "comiclink",
              url: "http://marvel.com/comics/characters/1009189/black_widow?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
          ],
        },
        {
          id: 1009338,
          name: "\u0421\u043e\u043a\u043e\u043b\u0438\u043d\u044b\u0439 \u0413\u043b\u0430\u0437",
          nameor: "Hawkeye",
          description:
            "\u0411\u0430\u0440\u0442\u043e\u043d \u0441 \u0447\u0435\u0442\u044b\u0440\u043d\u0430\u0434\u0446\u0430\u0442\u0438 \u043b\u0435\u0442 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u043e\u0432\u0430\u043b \u0441 \u0431\u0440\u043e\u0434\u044f\u0447\u0438\u043c \u0446\u0438\u0440\u043a\u043e\u043c, \u0433\u0434\u0435 \u0435\u0433\u043e \u043f\u0440\u0438\u0440\u043e\u0434\u043d\u0443\u044e \u043c\u0435\u0442\u043a\u043e\u0441\u0442\u044c \u0437\u0430\u043c\u0435\u0442\u0438\u043b\u0438 \u0437\u0432\u0435\u0437\u0434\u044b \u0448\u043e\u0443 \u0424\u0435\u0445\u0442\u043e\u0432\u0430\u043b\u044c\u0449\u0438\u043a \u0438 \u0422\u0440\u0438\u043a\u0448\u043e\u0442. \u041e\u043d\u0438 \u043f\u043e\u043c\u043e\u0433\u043b\u0438 \u044e\u043d\u043e\u043c\u0443 \u0411\u0430\u0440\u0442\u043e\u043d\u0443 \u043e\u0441\u0432\u043e\u0438\u0442\u044c \u0430\u043a\u0440\u043e\u0431\u0430\u0442\u0438\u043a\u0443, \u0441\u0442\u0440\u0435\u043b\u044c\u0431\u0443 \u0438\u0437 \u043b\u0443\u043a\u0430 \u0438 \u043d\u0430\u0443\u0447\u0438\u043b\u0438 \u043c\u0435\u0442\u0430\u0442\u044c \u043d\u043e\u0436\u0438. \u041a\u043e\u0433\u0434\u0430 \u0411\u0430\u0440\u0442\u043e\u043d \u0432\u044b\u044f\u0441\u043d\u0438\u043b, \u0447\u0442\u043e \u043e\u0431\u0430 \u0435\u0433\u043e \u043d\u0430\u0441\u0442\u0430\u0432\u043d\u0438\u043a\u0430 \u2014 \u043f\u0440\u0435\u0441\u0442\u0443\u043f\u043d\u0438\u043a\u0438, \u043e\u043d \u043f\u043e\u043a\u0438\u043d\u0443\u043b \u0446\u0438\u0440\u043a \u0438 \u0434\u043e\u043b\u0433\u043e\u0435 \u0432\u0440\u0435\u043c\u044f \u0432\u044b\u0441\u0442\u0443\u043f\u0430\u043b \u043d\u0430 \u044f\u0440\u043c\u0430\u0440\u043a\u0430\u0445 \u0438 \u043a\u0430\u0440\u043d\u0430\u0432\u0430\u043b\u0430\u0445 \u043f\u043e\u0434 \u043f\u0441\u0435\u0432\u0434\u043e\u043d\u0438\u043c\u043e\u043c \u0421\u043e\u043a\u043e\u043b\u0438\u043d\u044b\u0439 \u0413\u043b\u0430\u0437.",
          modified: "2016-06-22T12:53:31-0400",
          thumbnail: "./static/img/50fecaf4f101b.webp",
          comics: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/43498",
              name: "A+X (2012) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/43507",
              name: "A+X (2012) #8",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/51256",
              name: "All-New Hawkeye (2015) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/51260",
              name: "All-New Hawkeye (2015) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/51262",
              name: "All-New Hawkeye (2015) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/51263",
              name: "All-New Hawkeye (2015) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/51264",
              name: "All-New Hawkeye (2015) #5",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/35513",
              name: "Amazing Spider-Man (1999) #666",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/35528",
              name: "Amazing Spider-Man (1999) #667",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/35532",
              name: "Amazing Spider-Man (1999) #668",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/35522",
              name: "Amazing Spider-Man (1999) #670",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/39981",
              name: "Annihilators: Earthfall (2011) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/67309",
              name: "Ant-Man and the Wasp Adventures (Digest)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/29195",
              name: "Avengers (2010) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/33483",
              name: "Avengers (2010) #1 (DJURDJEVIC VARIANT)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/33562",
              name: "Avengers (2010) #1 (ROMITA SR. VARIANT)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/33572",
              name: "Avengers (2010) #1 (I AM AN AVENGER BLANK COVER VARIANT)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/33335",
              name: "Avengers (2010) #1 (HEROIC AGE VARIANT)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/33336",
              name: "Avengers (2010) #1 (ROMITA JR. VARIANT)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/29205",
              name: "Avengers (2010) #2",
            },
          ],
          urls: [
            {
              type: "detail",
              url: "http://marvel.com/comics/characters/1009338/hawkeye?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "wiki",
              url: "http://marvel.com/universe/Hawkeye_(Clint_Barton)?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "comiclink",
              url: "http://marvel.com/comics/characters/1009338/hawkeye?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
          ],
        },
        {
          id: 1009299,
          name: "\u0424\u0430\u043d\u0442\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0447\u0435\u0442\u0432\u0435\u0440\u043a\u0430",
          nameor: "Fantastic Four",
          description:
            '\u041f\u043e\u0441\u043b\u0435 \u0432\u043e\u0437\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043a\u043e\u0441\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043b\u0443\u0447\u0435\u0439 \u0420\u0438\u0434 \u0420\u0438\u0447\u0430\u0440\u0434\u0441, \u0421\u044c\u044e\u0437\u0435\u043d \u0421\u0442\u043e\u0440\u043c, \u0411\u0435\u043d \u0413\u0440\u0438\u043c\u043c \u0438 \u0414\u0436\u043e\u043d\u043d\u0438 \u0421\u0442\u043e\u0440\u043c \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0438\u043b\u0438, \u0447\u0442\u043e \u0443 \u043d\u0438\u0445 \u043f\u043e\u044f\u0432\u0438\u043b\u0438\u0441\u044c \u0443\u0434\u0438\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043d\u043e\u0432\u044b\u0435 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u0438. \u0420\u0438\u0434 \u0420\u0438\u0447\u0430\u0440\u0434\u0441 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0438\u043b, \u0447\u0442\u043e \u0443 \u043d\u0435\u0433\u043e \u0435\u0441\u0442\u044c \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u0440\u0430\u0441\u0442\u044f\u0433\u0438\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u0435 \u0442\u0435\u043b\u043e \u0442\u0430\u043a, \u043a\u0430\u043a \u043e\u043d \u0445\u043e\u0447\u0435\u0442, \u0432 \u0442\u043e \u0432\u0440\u0435\u043c\u044f \u043a\u0430\u043a \u0421\u044c\u044e\u0437\u0435\u043d \u0421\u0442\u043e\u0440\u043c \u043c\u043e\u0436\u0435\u0442 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u0435\u0431\u044f, \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043b\u044e\u0434\u0435\u0439 \u043d\u0435\u0432\u0438\u0434\u0438\u043c\u044b\u043c\u0438. \u0411\u0435\u043d \u0413\u0440\u0438\u043c\u043c \u043f\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u043b\u0441\u044f \u0432 \u0441\u043a\u0430\u043b\u0438\u0441\u0442\u043e\u0433\u043e, \u0441\u0432\u0435\u0440\u0445\u0441\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u0431\u0435\u0433\u0435\u043c\u043e\u0442\u0430, \u0430 \u0414\u0436\u043e\u043d\u043d\u0438 \u0428\u0442\u043e\u0440\u043c \u043e\u0431\u043b\u0430\u0434\u0430\u0435\u0442 \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c\u044e \u043f\u043e\u0434\u0436\u0438\u0433\u0430\u0442\u044c \u0441\u0435\u0431\u044f. \u041f\u043e\u043b\u0443\u0447\u0438\u0432\u0448\u0438\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 "\u0424\u0430\u043d\u0442\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0447\u0435\u0442\u0432\u0435\u0440\u043a\u0430", "\u041c\u0438\u0441\u0442\u0435\u0440 \u0424\u0430\u043d\u0442\u0430\u0441\u0442\u0438\u043a\u0430", "\u041d\u0435\u0432\u0438\u0434\u0438\u043c\u0430\u044f \u0436\u0435\u043d\u0449\u0438\u043d\u0430", "\u0412\u0435\u0449\u044c" \u0438 "\u0427\u0435\u043b\u043e\u0432\u0435\u0447\u0435\u0441\u043a\u0438\u0439 \u0444\u0430\u043a\u0435\u043b" - \u043f\u0435\u0440\u0432\u0430\u044f \u0441\u0435\u043c\u044c\u044f Marvel.',
          modified: "2016-05-05T14:38:42-0400",
          thumbnail: "./static/img/50febc4f55525.webp",
          comics: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/356",
              name: "4 (2004) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/388",
              name: "4 (2004) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/404",
              name: "4 (2004) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/471",
              name: "4 (2004) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/498",
              name: "4 (2004) #5",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/682",
              name: "4 (2004) #6",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/1812",
              name: "4 (2004) #7",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/571",
              name: "4 (2004) #8",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/556",
              name: "4 (2004) #9",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/811",
              name: "4 (2004) #10",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/892",
              name: "4 (2004) #11",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/52",
              name: "4 (2004) #12",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/1496",
              name: "4 (2004) #13",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/1584",
              name: "4 (2004) #14",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/1670",
              name: "4 (2004) #15",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/1771",
              name: "4 (2004) #16",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/1875",
              name: "4 (2004) #17",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/1977",
              name: "4 (2004) #18",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/2120",
              name: "4 (2004) #19",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/2230",
              name: "4 (2004) #20",
            },
          ],
          urls: [
            {
              type: "detail",
              url: "http://marvel.com/comics/characters/1009299/fantastic_four?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "wiki",
              url: "http://marvel.com/universe/Fantastic_Four?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "comiclink",
              url: "http://marvel.com/comics/characters/1009299/fantastic_four?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
          ],
        },
        {
          id: 1009215,
          name: "\u041b\u044e\u043a \u041a\u0435\u0439\u0434\u0436",
          nameor: "Luke Cage",
          description:
            "\u0412 \u043a\u0430\u043a\u043e\u0439-\u0442\u043e \u043c\u043e\u043c\u0435\u043d\u0442 \u041a\u0435\u0439\u0434\u0436 \u0443\u0447\u0430\u0441\u0442\u0432\u043e\u0432\u0430\u043b \u0432 \u044d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u0435, \u0438 \u0435\u0433\u043e \u043a\u043e\u0436\u0430 \u0441\u0442\u0430\u043b\u0430 \u043d\u0430\u0441\u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0447\u043d\u043e\u0439, \u0447\u0442\u043e \u0435\u0435 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0431\u044b\u043b\u043e \u043f\u043e\u0432\u0440\u0435\u0434\u0438\u0442\u044c \u0447\u0435\u043c-\u043b\u0438\u0431\u043e. \u041b\u044e\u043a \u0431\u044b\u043b \u0436\u0435\u043d\u0430\u0442 \u043d\u0430 \u0420\u0435\u0432\u0435 \u041a\u043e\u043d\u043d\u043e\u0440\u0441, \u043a\u043e\u0442\u043e\u0440\u0430\u044f, \u043a\u0430\u043a \u0441\u0447\u0438\u0442\u0430\u043b\u043e\u0441\u044c, \u043f\u043e\u0433\u0438\u0431\u043b\u0430 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0430\u0432\u0430\u0440\u0438\u0438 \u043d\u0430 \u0434\u043e\u0440\u043e\u0433\u0435 (\u0431\u044b\u043b\u0430 \u0441\u0431\u0438\u0442\u0430 \u0430\u0432\u0442\u043e\u0431\u0443\u0441\u043e\u043c). (\xabAKA \u042d\u0442\u043e \u043d\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432\u0438\u0441\u043a\u0438\xbb) \u041e\u0434\u043d\u0430\u043a\u043e \u041a\u0435\u0439\u0434\u0436 \u043f\u043e\u0447\u0443\u0432\u0441\u0442\u0432\u043e\u0432\u0430\u043b, \u0447\u0442\u043e \u0432 \u044d\u0442\u043e\u043c \u043f\u0440\u043e\u0438\u0441\u0448\u0435\u0441\u0442\u0432\u0438\u0438 \u0431\u044b\u043b\u043e \u0447\u0442\u043e-\u0442\u043e \u043d\u0435 \u0442\u0430\u043a, \u0438 \u043e\u0442 \u043d\u0435\u0433\u043e \u0441\u043a\u0440\u044b\u0432\u0430\u044e\u0442 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e, \u0430 \u043f\u043e\u0442\u043e\u043c\u0443 \u043f\u043e\u0441\u0432\u044f\u0442\u0438\u043b \u0441\u0432\u043e\u044e \u0436\u0438\u0437\u043d\u044c \u043f\u043e\u0438\u0441\u043a\u0430\u043c \u0442\u043e\u0433\u043e, \u043a\u0442\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0431\u044b\u043b \u0432\u0438\u043d\u043e\u0432\u0435\u043d \u0432 \u0441\u043c\u0435\u0440\u0442\u0438 \u0435\u0433\u043e \u0436\u0435\u043d\u044b.",
          modified: "2017-08-08T14:53:35-0400",
          thumbnail: "./static/img/5112d8b6e596c.webp",
          comics: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37405",
              name: "Age of Ultron (2013) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37406",
              name: "Age of Ultron (2013) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37256",
              name: "Alias (2001) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37267",
              name: "Alias (2001) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37277",
              name: "Alias (2001) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37262",
              name: "Alias (2001) #15",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37255",
              name: "Alias Omnibus (Hardcover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/1868",
              name: "Amazing Spider-Man (1999) #519",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/1966",
              name: "Amazing Spider-Man (1999) #520",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/2212",
              name: "Amazing Spider-Man (1999) #522",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/2980",
              name: "Amazing Spider-Man (1999) #523",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/24408",
              name: "Amazing Spider-Man (1999) #601",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/32217",
              name: "Amazing Spider-Man (1999) #653",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/35521",
              name: "Amazing Spider-Man (1999) #654",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/39595",
              name: "Amazing Spider-Man (1999) #654 (2nd Printing Variant)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/35513",
              name: "Amazing Spider-Man (1999) #666",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/35528",
              name: "Amazing Spider-Man (1999) #667",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/41817",
              name: "Amazing Spider-Man (1999) #669 (Slott Variant)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/41318",
              name: "Amazing Spider-Man (1999) #669 (Architect Variant)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/41661",
              name: "Amazing Spider-Man Annual (2012) #39",
            },
          ],
          urls: [
            {
              type: "detail",
              url: "http://marvel.com/comics/characters/1009215/luke_cage?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "wiki",
              url: "http://marvel.com/universe/Luke_Cage?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "comiclink",
              url: "http://marvel.com/comics/characters/1009215/luke_cage?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
          ],
        },
        {
          id: 1010776,
          name: "\u0416\u0435\u043b\u0435\u0437\u043d\u044b\u0439 \u043a\u0443\u043b\u0430\u043a",
          nameor: "Danny Rand",
          description:
            "\u0414\u044d\u043d\u0438\u0435\u043b \u0420\u044d\u043d\u0434 - \u0441\u044b\u043d \u0431\u0438\u0437\u043d\u0435\u0441\u043c\u0435\u043d\u0430 \u0412\u0435\u043d\u0434\u0435\u043b\u043b\u0430 \u0420\u044d\u043d\u0434\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043a\u043e\u0433\u0434\u0430-\u0442\u043e \u0436\u0438\u043b \u0432 \u0437\u0430\u0433\u0430\u0434\u043e\u0447\u043d\u043e\u043c \u0433\u043e\u0440\u043e\u0434\u0435 \u041a'\u0443\u043d\u044c-\u041b\u0443\u043d\u0435, \u0447\u0442\u043e \u0440\u0430\u0441\u043f\u043e\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f \u0432 \u0434\u0440\u0443\u0433\u043e\u043c \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u0438. \u0418\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439 \u0442\u0430\u043c \u043a\u0430\u043a \u0412\u0435\u043d\u0434\u0435\u043b\u043b \u0420\u044d\u043d\u0434-\u041a'\u0430\u0438 \u043e\u043d \u0431\u044b\u043b \u043d\u0430\u0441\u043b\u0435\u0434\u043d\u0438\u043a\u043e\u043c \u0438 \u0441\u0442\u0430\u0440\u0448\u0438\u043c \u0441\u044b\u043d\u043e\u043c \u0442\u0430\u043c\u043e\u0448\u043d\u0435\u0433\u043e \u043f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044f \u041b\u043e\u0440\u0434\u0430 \u0422\u0443\u0430\u043d\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0443\u0441\u044b\u043d\u043e\u0432\u0438\u043b \u0420\u044d\u043d\u0434\u0430 \u0432 \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u043d\u043e\u0441\u0442\u044c \u0437\u0430 \u0441\u043f\u0430\u0441\u0435\u043d\u0438\u0435 \u0441\u0432\u043e\u0435\u0439 \u0436\u0438\u0437\u043d\u0438.",
          modified: "2004-04-14T00:00:00-0400",
          thumbnail: "./static/img/4c00374b1008a.webp",
          comics: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/2",
              name: "Pulse (2004) #6",
            },
          ],
          urls: [
            {
              type: "detail",
              url: "http://marvel.com/characters/2716/danny_rand?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "wiki",
              url: "http://marvel.com/universe/Iron_Fist_%28Danny_Rand%29?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
            {
              type: "comiclink",
              url: "http://marvel.com/comics/characters/1010776/danny_rand?utm_campaign=apiRef&utm_source=aa6d39bfec93d0dc513c53c6cfb66853",
            },
          ],
        },
        {
          id: 1009378,
          name: "\u0414\u0436\u0435\u0441\u0441\u0438\u043a\u0430 \u0414\u0436\u043e\u043d\u0441",
          nameor: "Jessica Jones",
          description:
            "\u0414\u0436\u0435\u0441\u0441\u0438\u043a\u0430 \u0440\u043e\u0434\u0438\u043b\u0430\u0441\u044c \u0432 \u0441\u0435\u043c\u044c\u0435 \u0411\u0440\u0430\u0439\u0430\u043d\u0430 \u0438 \u0410\u043b\u0438\u0441\u0438\u0438 \u0414\u0436\u043e\u043d\u0441. \u0423 \u0414\u0436\u0435\u0441\u0441\u0438\u043a\u0438 \u0431\u044b\u043b \u043c\u043b\u0430\u0434\u0448\u0438\u0439 \u0431\u0440\u0430\u0442 \u043f\u043e \u0438\u043c\u0435\u043d\u0438 \u0424\u0438\u043b\u0438\u043f\u043f. \u0412\u043e \u0432\u0440\u0435\u043c\u044f \u043e\u0434\u043d\u043e\u0439 \u0438\u0437 \u0441\u0435\u043c\u0435\u0439\u043d\u044b\u0445 \u043f\u043e\u0435\u0437\u0434\u043e\u043a, \u0443 \u0414\u0436\u043e\u043d\u0441 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u0441\u0441\u043e\u0440\u0430 \u0441 \u043c\u043b\u0430\u0434\u0448\u0438\u043c \u0431\u0440\u0430\u0442\u043e\u043c. \u0411\u0440\u0430\u0439\u0430\u043d \u043e\u0442\u0432\u043b\u0435\u043a\u0441\u044f, \u0438 \u043c\u0430\u0448\u0438\u043d\u0430 \u043f\u043e\u043f\u0430\u043b\u0430 \u0432 \u0430\u0432\u0430\u0440\u0438\u044e. \u0414\u0436\u0435\u0441\u0441\u0438\u043a\u0430 \u0432\u043f\u0430\u043b\u0430 \u0432 \u043a\u043e\u043c\u0443, \u0430 \u0432\u0441\u044f \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0435\u043c\u044c\u044f \u043f\u043e\u0433\u0438\u0431\u043b\u0430.",
          modified: "2017-08-21T14:47:52-0400",
          thumbnail: "./static/img/5390e41260345.webp",
          comics: [
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37256",
              name: "Alias (2001) #1",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37267",
              name: "Alias (2001) #2",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37277",
              name: "Alias (2001) #3",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37278",
              name: "Alias (2001) #4",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37279",
              name: "Alias (2001) #5",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37280",
              name: "Alias (2001) #6",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37281",
              name: "Alias (2001) #7",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37282",
              name: "Alias (2001) #8",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37283",
              name: "Alias (2001) #9",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37257",
              name: "Alias (2001) #10",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37258",
              name: "Alias (2001) #11",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37259",
              name: "Alias (2001) #12",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37260",
              name: "Alias (2001) #13",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37261",
              name: "Alias (2001) #14",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37262",
              name: "Alias (2001) #15",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37263",
              name: "Alias (2001) #16",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37264",
              name: "Alias (2001) #17",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37265",
              name: "Alias (2001) #18",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/37255",
              name: "Alias Omnibus (Hardcover)",
            },
            {
              resourceURI: "http://gateway.marvel.com/v1/public/comics/24408",
              name: "Amazing Spider-Man (1999) #601",
            },
          ],
          urls: [
            {
              type: "detail",
              url: "http://marvel.com/comics/characters/1009378/jessica_jones?utm_campaign=apiRef&utm_source=6c377dd4a33872ac14cc899086a7c111",
            },
            {
              type: "wiki",
              url: "http://marvel.com/universe/Jessica_Jones?utm_campaign=apiRef&utm_source=6c377dd4a33872ac14cc899086a7c111",
            },
            {
              type: "comiclink",
              url: "http://marvel.com/comics/characters/1009378/jessica_jones?utm_campaign=apiRef&utm_source=6c377dd4a33872ac14cc899086a7c111",
            },
          ],
        },
      ];
    var F = function () {
      return (0, o.jsx)("div", {
        className: O,
        children: L.map(function (t) {
          return (0, e.createElement)(P, f(f({}, t), {}, { key: t.id }));
        }),
      });
    };
    var D = function () {
      return (0, o.jsxs)("main", {
        className: i,
        children: [
          (0, o.jsx)("h1", {
            className: u,
            children:
              "\u041f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0438 Marvel",
          }),
          (0, o.jsx)(F, {}),
        ],
      });
    };
    t.createRoot(document.getElementById("root")).render(
      (0, o.jsxs)(o.Fragment, {
        children: [(0, o.jsx)(c, {}), (0, o.jsx)(D, {})],
      })
    );
  })();
})();
//# sourceMappingURL=main.9b6e5033.js.map
