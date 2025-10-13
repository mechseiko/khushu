(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
  new MutationObserver((o) => {
    for (const u of o)
      if (u.type === 'childList')
        for (const c of u.addedNodes)
          c.tagName === 'LINK' && c.rel === 'modulepreload' && s(c);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(o) {
    const u = {};
    return (
      o.integrity && (u.integrity = o.integrity),
      o.referrerPolicy && (u.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (u.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (u.credentials = 'omit')
          : (u.credentials = 'same-origin'),
      u
    );
  }
  function s(o) {
    if (o.ep) return;
    o.ep = !0;
    const u = a(o);
    fetch(o.href, u);
  }
})();
function Ux(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, 'default')
    ? i.default
    : i;
}
var Mc = { exports: {} },
  Cs = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _g;
function Yx() {
  if (_g) return Cs;
  _g = 1;
  var i = Symbol.for('react.transitional.element'),
    e = Symbol.for('react.fragment');
  function a(s, o, u) {
    var c = null;
    if (
      (u !== void 0 && (c = '' + u),
      o.key !== void 0 && (c = '' + o.key),
      'key' in o)
    ) {
      u = {};
      for (var h in o) h !== 'key' && (u[h] = o[h]);
    } else u = o;
    return (
      (o = u.ref),
      { $$typeof: i, type: s, key: c, ref: o !== void 0 ? o : null, props: u }
    );
  }
  return ((Cs.Fragment = e), (Cs.jsx = a), (Cs.jsxs = a), Cs);
}
var Sg;
function qx() {
  return (Sg || ((Sg = 1), (Mc.exports = Yx())), Mc.exports);
}
var x = qx(),
  Ec = { exports: {} },
  ut = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wg;
function Vx() {
  if (wg) return ut;
  wg = 1;
  var i = Symbol.for('react.transitional.element'),
    e = Symbol.for('react.portal'),
    a = Symbol.for('react.fragment'),
    s = Symbol.for('react.strict_mode'),
    o = Symbol.for('react.profiler'),
    u = Symbol.for('react.consumer'),
    c = Symbol.for('react.context'),
    h = Symbol.for('react.forward_ref'),
    d = Symbol.for('react.suspense'),
    g = Symbol.for('react.memo'),
    p = Symbol.for('react.lazy'),
    b = Symbol.iterator;
  function v(O) {
    return O === null || typeof O != 'object'
      ? null
      : ((O = (b && O[b]) || O['@@iterator']),
        typeof O == 'function' ? O : null);
  }
  var S = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    w = Object.assign,
    E = {};
  function M(O, X, W) {
    ((this.props = O),
      (this.context = X),
      (this.refs = E),
      (this.updater = W || S));
  }
  ((M.prototype.isReactComponent = {}),
    (M.prototype.setState = function (O, X) {
      if (typeof O != 'object' && typeof O != 'function' && O != null)
        throw Error(
          'takes an object of state variables to update or a function which returns an object of state variables.'
        );
      this.updater.enqueueSetState(this, O, X, 'setState');
    }),
    (M.prototype.forceUpdate = function (O) {
      this.updater.enqueueForceUpdate(this, O, 'forceUpdate');
    }));
  function D() {}
  D.prototype = M.prototype;
  function k(O, X, W) {
    ((this.props = O),
      (this.context = X),
      (this.refs = E),
      (this.updater = W || S));
  }
  var Y = (k.prototype = new D());
  ((Y.constructor = k), w(Y, M.prototype), (Y.isPureReactComponent = !0));
  var G = Array.isArray,
    B = { H: null, A: null, T: null, S: null, V: null },
    F = Object.prototype.hasOwnProperty;
  function K(O, X, W, Z, I, ht) {
    return (
      (W = ht.ref),
      { $$typeof: i, type: O, key: X, ref: W !== void 0 ? W : null, props: ht }
    );
  }
  function Q(O, X) {
    return K(O.type, X, void 0, void 0, void 0, O.props);
  }
  function J(O) {
    return typeof O == 'object' && O !== null && O.$$typeof === i;
  }
  function rt(O) {
    var X = { '=': '=0', ':': '=2' };
    return (
      '$' +
      O.replace(/[=:]/g, function (W) {
        return X[W];
      })
    );
  }
  var st = /\/+/g;
  function ot(O, X) {
    return typeof O == 'object' && O !== null && O.key != null
      ? rt('' + O.key)
      : X.toString(36);
  }
  function Lt() {}
  function Qt(O) {
    switch (O.status) {
      case 'fulfilled':
        return O.value;
      case 'rejected':
        throw O.reason;
      default:
        switch (
          (typeof O.status == 'string'
            ? O.then(Lt, Lt)
            : ((O.status = 'pending'),
              O.then(
                function (X) {
                  O.status === 'pending' &&
                    ((O.status = 'fulfilled'), (O.value = X));
                },
                function (X) {
                  O.status === 'pending' &&
                    ((O.status = 'rejected'), (O.reason = X));
                }
              )),
          O.status)
        ) {
          case 'fulfilled':
            return O.value;
          case 'rejected':
            throw O.reason;
        }
    }
    throw O;
  }
  function ft(O, X, W, Z, I) {
    var ht = typeof O;
    (ht === 'undefined' || ht === 'boolean') && (O = null);
    var nt = !1;
    if (O === null) nt = !0;
    else
      switch (ht) {
        case 'bigint':
        case 'string':
        case 'number':
          nt = !0;
          break;
        case 'object':
          switch (O.$$typeof) {
            case i:
            case e:
              nt = !0;
              break;
            case p:
              return ((nt = O._init), ft(nt(O._payload), X, W, Z, I));
          }
      }
    if (nt)
      return (
        (I = I(O)),
        (nt = Z === '' ? '.' + ot(O, 0) : Z),
        G(I)
          ? ((W = ''),
            nt != null && (W = nt.replace(st, '$&/') + '/'),
            ft(I, X, W, '', function (jn) {
              return jn;
            }))
          : I != null &&
            (J(I) &&
              (I = Q(
                I,
                W +
                  (I.key == null || (O && O.key === I.key)
                    ? ''
                    : ('' + I.key).replace(st, '$&/') + '/') +
                  nt
              )),
            X.push(I)),
        1
      );
    nt = 0;
    var ve = Z === '' ? '.' : Z + ':';
    if (G(O))
      for (var Rt = 0; Rt < O.length; Rt++)
        ((Z = O[Rt]), (ht = ve + ot(Z, Rt)), (nt += ft(Z, X, W, ht, I)));
    else if (((Rt = v(O)), typeof Rt == 'function'))
      for (O = Rt.call(O), Rt = 0; !(Z = O.next()).done; )
        ((Z = Z.value), (ht = ve + ot(Z, Rt++)), (nt += ft(Z, X, W, ht, I)));
    else if (ht === 'object') {
      if (typeof O.then == 'function') return ft(Qt(O), X, W, Z, I);
      throw (
        (X = String(O)),
        Error(
          'Objects are not valid as a React child (found: ' +
            (X === '[object Object]'
              ? 'object with keys {' + Object.keys(O).join(', ') + '}'
              : X) +
            '). If you meant to render a collection of children, use an array instead.'
        )
      );
    }
    return nt;
  }
  function H(O, X, W) {
    if (O == null) return O;
    var Z = [],
      I = 0;
    return (
      ft(O, Z, '', '', function (ht) {
        return X.call(W, ht, I++);
      }),
      Z
    );
  }
  function P(O) {
    if (O._status === -1) {
      var X = O._result;
      ((X = X()),
        X.then(
          function (W) {
            (O._status === 0 || O._status === -1) &&
              ((O._status = 1), (O._result = W));
          },
          function (W) {
            (O._status === 0 || O._status === -1) &&
              ((O._status = 2), (O._result = W));
          }
        ),
        O._status === -1 && ((O._status = 0), (O._result = X)));
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var et =
    typeof reportError == 'function'
      ? reportError
      : function (O) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var X = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof O == 'object' &&
                O !== null &&
                typeof O.message == 'string'
                  ? String(O.message)
                  : String(O),
              error: O,
            });
            if (!window.dispatchEvent(X)) return;
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', O);
            return;
          }
          console.error(O);
        };
  function xt() {}
  return (
    (ut.Children = {
      map: H,
      forEach: function (O, X, W) {
        H(
          O,
          function () {
            X.apply(this, arguments);
          },
          W
        );
      },
      count: function (O) {
        var X = 0;
        return (
          H(O, function () {
            X++;
          }),
          X
        );
      },
      toArray: function (O) {
        return (
          H(O, function (X) {
            return X;
          }) || []
        );
      },
      only: function (O) {
        if (!J(O))
          throw Error(
            'React.Children.only expected to receive a single React element child.'
          );
        return O;
      },
    }),
    (ut.Component = M),
    (ut.Fragment = a),
    (ut.Profiler = o),
    (ut.PureComponent = k),
    (ut.StrictMode = s),
    (ut.Suspense = d),
    (ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = B),
    (ut.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (O) {
        return B.H.useMemoCache(O);
      },
    }),
    (ut.cache = function (O) {
      return function () {
        return O.apply(null, arguments);
      };
    }),
    (ut.cloneElement = function (O, X, W) {
      if (O == null)
        throw Error(
          'The argument must be a React element, but you passed ' + O + '.'
        );
      var Z = w({}, O.props),
        I = O.key,
        ht = void 0;
      if (X != null)
        for (nt in (X.ref !== void 0 && (ht = void 0),
        X.key !== void 0 && (I = '' + X.key),
        X))
          !F.call(X, nt) ||
            nt === 'key' ||
            nt === '__self' ||
            nt === '__source' ||
            (nt === 'ref' && X.ref === void 0) ||
            (Z[nt] = X[nt]);
      var nt = arguments.length - 2;
      if (nt === 1) Z.children = W;
      else if (1 < nt) {
        for (var ve = Array(nt), Rt = 0; Rt < nt; Rt++)
          ve[Rt] = arguments[Rt + 2];
        Z.children = ve;
      }
      return K(O.type, I, void 0, void 0, ht, Z);
    }),
    (ut.createContext = function (O) {
      return (
        (O = {
          $$typeof: c,
          _currentValue: O,
          _currentValue2: O,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (O.Provider = O),
        (O.Consumer = { $$typeof: u, _context: O }),
        O
      );
    }),
    (ut.createElement = function (O, X, W) {
      var Z,
        I = {},
        ht = null;
      if (X != null)
        for (Z in (X.key !== void 0 && (ht = '' + X.key), X))
          F.call(X, Z) &&
            Z !== 'key' &&
            Z !== '__self' &&
            Z !== '__source' &&
            (I[Z] = X[Z]);
      var nt = arguments.length - 2;
      if (nt === 1) I.children = W;
      else if (1 < nt) {
        for (var ve = Array(nt), Rt = 0; Rt < nt; Rt++)
          ve[Rt] = arguments[Rt + 2];
        I.children = ve;
      }
      if (O && O.defaultProps)
        for (Z in ((nt = O.defaultProps), nt))
          I[Z] === void 0 && (I[Z] = nt[Z]);
      return K(O, ht, void 0, void 0, null, I);
    }),
    (ut.createRef = function () {
      return { current: null };
    }),
    (ut.forwardRef = function (O) {
      return { $$typeof: h, render: O };
    }),
    (ut.isValidElement = J),
    (ut.lazy = function (O) {
      return { $$typeof: p, _payload: { _status: -1, _result: O }, _init: P };
    }),
    (ut.memo = function (O, X) {
      return { $$typeof: g, type: O, compare: X === void 0 ? null : X };
    }),
    (ut.startTransition = function (O) {
      var X = B.T,
        W = {};
      B.T = W;
      try {
        var Z = O(),
          I = B.S;
        (I !== null && I(W, Z),
          typeof Z == 'object' &&
            Z !== null &&
            typeof Z.then == 'function' &&
            Z.then(xt, et));
      } catch (ht) {
        et(ht);
      } finally {
        B.T = X;
      }
    }),
    (ut.unstable_useCacheRefresh = function () {
      return B.H.useCacheRefresh();
    }),
    (ut.use = function (O) {
      return B.H.use(O);
    }),
    (ut.useActionState = function (O, X, W) {
      return B.H.useActionState(O, X, W);
    }),
    (ut.useCallback = function (O, X) {
      return B.H.useCallback(O, X);
    }),
    (ut.useContext = function (O) {
      return B.H.useContext(O);
    }),
    (ut.useDebugValue = function () {}),
    (ut.useDeferredValue = function (O, X) {
      return B.H.useDeferredValue(O, X);
    }),
    (ut.useEffect = function (O, X, W) {
      var Z = B.H;
      if (typeof W == 'function')
        throw Error(
          'useEffect CRUD overload is not enabled in this build of React.'
        );
      return Z.useEffect(O, X);
    }),
    (ut.useId = function () {
      return B.H.useId();
    }),
    (ut.useImperativeHandle = function (O, X, W) {
      return B.H.useImperativeHandle(O, X, W);
    }),
    (ut.useInsertionEffect = function (O, X) {
      return B.H.useInsertionEffect(O, X);
    }),
    (ut.useLayoutEffect = function (O, X) {
      return B.H.useLayoutEffect(O, X);
    }),
    (ut.useMemo = function (O, X) {
      return B.H.useMemo(O, X);
    }),
    (ut.useOptimistic = function (O, X) {
      return B.H.useOptimistic(O, X);
    }),
    (ut.useReducer = function (O, X, W) {
      return B.H.useReducer(O, X, W);
    }),
    (ut.useRef = function (O) {
      return B.H.useRef(O);
    }),
    (ut.useState = function (O) {
      return B.H.useState(O);
    }),
    (ut.useSyncExternalStore = function (O, X, W) {
      return B.H.useSyncExternalStore(O, X, W);
    }),
    (ut.useTransition = function () {
      return B.H.useTransition();
    }),
    (ut.version = '19.1.1'),
    ut
  );
}
var Mg;
function nf() {
  return (Mg || ((Mg = 1), (Ec.exports = Vx())), Ec.exports);
}
var j = nf();
const af = Ux(j);
var Tc = { exports: {} },
  js = {},
  Oc = { exports: {} },
  Ac = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Eg;
function Xx() {
  return (
    Eg ||
      ((Eg = 1),
      (function (i) {
        function e(H, P) {
          var et = H.length;
          H.push(P);
          t: for (; 0 < et; ) {
            var xt = (et - 1) >>> 1,
              O = H[xt];
            if (0 < o(O, P)) ((H[xt] = P), (H[et] = O), (et = xt));
            else break t;
          }
        }
        function a(H) {
          return H.length === 0 ? null : H[0];
        }
        function s(H) {
          if (H.length === 0) return null;
          var P = H[0],
            et = H.pop();
          if (et !== P) {
            H[0] = et;
            t: for (var xt = 0, O = H.length, X = O >>> 1; xt < X; ) {
              var W = 2 * (xt + 1) - 1,
                Z = H[W],
                I = W + 1,
                ht = H[I];
              if (0 > o(Z, et))
                I < O && 0 > o(ht, Z)
                  ? ((H[xt] = ht), (H[I] = et), (xt = I))
                  : ((H[xt] = Z), (H[W] = et), (xt = W));
              else if (I < O && 0 > o(ht, et))
                ((H[xt] = ht), (H[I] = et), (xt = I));
              else break t;
            }
          }
          return P;
        }
        function o(H, P) {
          var et = H.sortIndex - P.sortIndex;
          return et !== 0 ? et : H.id - P.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == 'object' &&
            typeof performance.now == 'function')
        ) {
          var u = performance;
          i.unstable_now = function () {
            return u.now();
          };
        } else {
          var c = Date,
            h = c.now();
          i.unstable_now = function () {
            return c.now() - h;
          };
        }
        var d = [],
          g = [],
          p = 1,
          b = null,
          v = 3,
          S = !1,
          w = !1,
          E = !1,
          M = !1,
          D = typeof setTimeout == 'function' ? setTimeout : null,
          k = typeof clearTimeout == 'function' ? clearTimeout : null,
          Y = typeof setImmediate < 'u' ? setImmediate : null;
        function G(H) {
          for (var P = a(g); P !== null; ) {
            if (P.callback === null) s(g);
            else if (P.startTime <= H)
              (s(g), (P.sortIndex = P.expirationTime), e(d, P));
            else break;
            P = a(g);
          }
        }
        function B(H) {
          if (((E = !1), G(H), !w))
            if (a(d) !== null) ((w = !0), F || ((F = !0), ot()));
            else {
              var P = a(g);
              P !== null && ft(B, P.startTime - H);
            }
        }
        var F = !1,
          K = -1,
          Q = 5,
          J = -1;
        function rt() {
          return M ? !0 : !(i.unstable_now() - J < Q);
        }
        function st() {
          if (((M = !1), F)) {
            var H = i.unstable_now();
            J = H;
            var P = !0;
            try {
              t: {
                ((w = !1), E && ((E = !1), k(K), (K = -1)), (S = !0));
                var et = v;
                try {
                  e: {
                    for (
                      G(H), b = a(d);
                      b !== null && !(b.expirationTime > H && rt());

                    ) {
                      var xt = b.callback;
                      if (typeof xt == 'function') {
                        ((b.callback = null), (v = b.priorityLevel));
                        var O = xt(b.expirationTime <= H);
                        if (((H = i.unstable_now()), typeof O == 'function')) {
                          ((b.callback = O), G(H), (P = !0));
                          break e;
                        }
                        (b === a(d) && s(d), G(H));
                      } else s(d);
                      b = a(d);
                    }
                    if (b !== null) P = !0;
                    else {
                      var X = a(g);
                      (X !== null && ft(B, X.startTime - H), (P = !1));
                    }
                  }
                  break t;
                } finally {
                  ((b = null), (v = et), (S = !1));
                }
                P = void 0;
              }
            } finally {
              P ? ot() : (F = !1);
            }
          }
        }
        var ot;
        if (typeof Y == 'function')
          ot = function () {
            Y(st);
          };
        else if (typeof MessageChannel < 'u') {
          var Lt = new MessageChannel(),
            Qt = Lt.port2;
          ((Lt.port1.onmessage = st),
            (ot = function () {
              Qt.postMessage(null);
            }));
        } else
          ot = function () {
            D(st, 0);
          };
        function ft(H, P) {
          K = D(function () {
            H(i.unstable_now());
          }, P);
        }
        ((i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (H) {
            H.callback = null;
          }),
          (i.unstable_forceFrameRate = function (H) {
            0 > H || 125 < H
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                )
              : (Q = 0 < H ? Math.floor(1e3 / H) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return v;
          }),
          (i.unstable_next = function (H) {
            switch (v) {
              case 1:
              case 2:
              case 3:
                var P = 3;
                break;
              default:
                P = v;
            }
            var et = v;
            v = P;
            try {
              return H();
            } finally {
              v = et;
            }
          }),
          (i.unstable_requestPaint = function () {
            M = !0;
          }),
          (i.unstable_runWithPriority = function (H, P) {
            switch (H) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                H = 3;
            }
            var et = v;
            v = H;
            try {
              return P();
            } finally {
              v = et;
            }
          }),
          (i.unstable_scheduleCallback = function (H, P, et) {
            var xt = i.unstable_now();
            switch (
              (typeof et == 'object' && et !== null
                ? ((et = et.delay),
                  (et = typeof et == 'number' && 0 < et ? xt + et : xt))
                : (et = xt),
              H)
            ) {
              case 1:
                var O = -1;
                break;
              case 2:
                O = 250;
                break;
              case 5:
                O = 1073741823;
                break;
              case 4:
                O = 1e4;
                break;
              default:
                O = 5e3;
            }
            return (
              (O = et + O),
              (H = {
                id: p++,
                callback: P,
                priorityLevel: H,
                startTime: et,
                expirationTime: O,
                sortIndex: -1,
              }),
              et > xt
                ? ((H.sortIndex = et),
                  e(g, H),
                  a(d) === null &&
                    H === a(g) &&
                    (E ? (k(K), (K = -1)) : (E = !0), ft(B, et - xt)))
                : ((H.sortIndex = O),
                  e(d, H),
                  w || S || ((w = !0), F || ((F = !0), ot()))),
              H
            );
          }),
          (i.unstable_shouldYield = rt),
          (i.unstable_wrapCallback = function (H) {
            var P = v;
            return function () {
              var et = v;
              v = P;
              try {
                return H.apply(this, arguments);
              } finally {
                v = et;
              }
            };
          }));
      })(Ac)),
    Ac
  );
}
var Tg;
function Gx() {
  return (Tg || ((Tg = 1), (Oc.exports = Xx())), Oc.exports);
}
var Dc = { exports: {} },
  le = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Og;
function Px() {
  if (Og) return le;
  Og = 1;
  var i = nf();
  function e(d) {
    var g = 'https://react.dev/errors/' + d;
    if (1 < arguments.length) {
      g += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var p = 2; p < arguments.length; p++)
        g += '&args[]=' + encodeURIComponent(arguments[p]);
    }
    return (
      'Minified React error #' +
      d +
      '; visit ' +
      g +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function a() {}
  var s = {
      d: {
        f: a,
        r: function () {
          throw Error(e(522));
        },
        D: a,
        C: a,
        L: a,
        m: a,
        X: a,
        S: a,
        M: a,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for('react.portal');
  function u(d, g, p) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: b == null ? null : '' + b,
      children: d,
      containerInfo: g,
      implementation: p,
    };
  }
  var c = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(d, g) {
    if (d === 'font') return '';
    if (typeof g == 'string') return g === 'use-credentials' ? g : '';
  }
  return (
    (le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (le.createPortal = function (d, g) {
      var p =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(e(299));
      return u(d, g, null, p);
    }),
    (le.flushSync = function (d) {
      var g = c.T,
        p = s.p;
      try {
        if (((c.T = null), (s.p = 2), d)) return d();
      } finally {
        ((c.T = g), (s.p = p), s.d.f());
      }
    }),
    (le.preconnect = function (d, g) {
      typeof d == 'string' &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == 'string'
                ? g === 'use-credentials'
                  ? g
                  : ''
                : void 0))
          : (g = null),
        s.d.C(d, g));
    }),
    (le.prefetchDNS = function (d) {
      typeof d == 'string' && s.d.D(d);
    }),
    (le.preinit = function (d, g) {
      if (typeof d == 'string' && g && typeof g.as == 'string') {
        var p = g.as,
          b = h(p, g.crossOrigin),
          v = typeof g.integrity == 'string' ? g.integrity : void 0,
          S = typeof g.fetchPriority == 'string' ? g.fetchPriority : void 0;
        p === 'style'
          ? s.d.S(d, typeof g.precedence == 'string' ? g.precedence : void 0, {
              crossOrigin: b,
              integrity: v,
              fetchPriority: S,
            })
          : p === 'script' &&
            s.d.X(d, {
              crossOrigin: b,
              integrity: v,
              fetchPriority: S,
              nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
            });
      }
    }),
    (le.preinitModule = function (d, g) {
      if (typeof d == 'string')
        if (typeof g == 'object' && g !== null) {
          if (g.as == null || g.as === 'script') {
            var p = h(g.as, g.crossOrigin);
            s.d.M(d, {
              crossOrigin: p,
              integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
              nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
            });
          }
        } else g == null && s.d.M(d);
    }),
    (le.preload = function (d, g) {
      if (
        typeof d == 'string' &&
        typeof g == 'object' &&
        g !== null &&
        typeof g.as == 'string'
      ) {
        var p = g.as,
          b = h(p, g.crossOrigin);
        s.d.L(d, p, {
          crossOrigin: b,
          integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
          nonce: typeof g.nonce == 'string' ? g.nonce : void 0,
          type: typeof g.type == 'string' ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == 'string' ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == 'string' ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == 'string' ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == 'string' ? g.imageSizes : void 0,
          media: typeof g.media == 'string' ? g.media : void 0,
        });
      }
    }),
    (le.preloadModule = function (d, g) {
      if (typeof d == 'string')
        if (g) {
          var p = h(g.as, g.crossOrigin);
          s.d.m(d, {
            as: typeof g.as == 'string' && g.as !== 'script' ? g.as : void 0,
            crossOrigin: p,
            integrity: typeof g.integrity == 'string' ? g.integrity : void 0,
          });
        } else s.d.m(d);
    }),
    (le.requestFormReset = function (d) {
      s.d.r(d);
    }),
    (le.unstable_batchedUpdates = function (d, g) {
      return d(g);
    }),
    (le.useFormState = function (d, g, p) {
      return c.H.useFormState(d, g, p);
    }),
    (le.useFormStatus = function () {
      return c.H.useHostTransitionStatus();
    }),
    (le.version = '19.1.1'),
    le
  );
}
var Ag;
function Fx() {
  if (Ag) return Dc.exports;
  Ag = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (e) {
        console.error(e);
      }
  }
  return (i(), (Dc.exports = Px()), Dc.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dg;
function Qx() {
  if (Dg) return js;
  Dg = 1;
  var i = Gx(),
    e = nf(),
    a = Fx();
  function s(t) {
    var n = 'https://react.dev/errors/' + t;
    if (1 < arguments.length) {
      n += '?args[]=' + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        n += '&args[]=' + encodeURIComponent(arguments[l]);
    }
    return (
      'Minified React error #' +
      t +
      '; visit ' +
      n +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  function o(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function u(t) {
    var n = t,
      l = t;
    if (t.alternate) for (; n.return; ) n = n.return;
    else {
      t = n;
      do ((n = t), (n.flags & 4098) !== 0 && (l = n.return), (t = n.return));
      while (t);
    }
    return n.tag === 3 ? l : null;
  }
  function c(t) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        (n === null && ((t = t.alternate), t !== null && (n = t.memoizedState)),
        n !== null)
      )
        return n.dehydrated;
    }
    return null;
  }
  function h(t) {
    if (u(t) !== t) throw Error(s(188));
  }
  function d(t) {
    var n = t.alternate;
    if (!n) {
      if (((n = u(t)), n === null)) throw Error(s(188));
      return n !== t ? null : t;
    }
    for (var l = t, r = n; ; ) {
      var f = l.return;
      if (f === null) break;
      var m = f.alternate;
      if (m === null) {
        if (((r = f.return), r !== null)) {
          l = r;
          continue;
        }
        break;
      }
      if (f.child === m.child) {
        for (m = f.child; m; ) {
          if (m === l) return (h(f), t);
          if (m === r) return (h(f), n);
          m = m.sibling;
        }
        throw Error(s(188));
      }
      if (l.return !== r.return) ((l = f), (r = m));
      else {
        for (var y = !1, _ = f.child; _; ) {
          if (_ === l) {
            ((y = !0), (l = f), (r = m));
            break;
          }
          if (_ === r) {
            ((y = !0), (r = f), (l = m));
            break;
          }
          _ = _.sibling;
        }
        if (!y) {
          for (_ = m.child; _; ) {
            if (_ === l) {
              ((y = !0), (l = m), (r = f));
              break;
            }
            if (_ === r) {
              ((y = !0), (r = m), (l = f));
              break;
            }
            _ = _.sibling;
          }
          if (!y) throw Error(s(189));
        }
      }
      if (l.alternate !== r) throw Error(s(190));
    }
    if (l.tag !== 3) throw Error(s(188));
    return l.stateNode.current === l ? t : n;
  }
  function g(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((n = g(t)), n !== null)) return n;
      t = t.sibling;
    }
    return null;
  }
  var p = Object.assign,
    b = Symbol.for('react.element'),
    v = Symbol.for('react.transitional.element'),
    S = Symbol.for('react.portal'),
    w = Symbol.for('react.fragment'),
    E = Symbol.for('react.strict_mode'),
    M = Symbol.for('react.profiler'),
    D = Symbol.for('react.provider'),
    k = Symbol.for('react.consumer'),
    Y = Symbol.for('react.context'),
    G = Symbol.for('react.forward_ref'),
    B = Symbol.for('react.suspense'),
    F = Symbol.for('react.suspense_list'),
    K = Symbol.for('react.memo'),
    Q = Symbol.for('react.lazy'),
    J = Symbol.for('react.activity'),
    rt = Symbol.for('react.memo_cache_sentinel'),
    st = Symbol.iterator;
  function ot(t) {
    return t === null || typeof t != 'object'
      ? null
      : ((t = (st && t[st]) || t['@@iterator']),
        typeof t == 'function' ? t : null);
  }
  var Lt = Symbol.for('react.client.reference');
  function Qt(t) {
    if (t == null) return null;
    if (typeof t == 'function')
      return t.$$typeof === Lt ? null : t.displayName || t.name || null;
    if (typeof t == 'string') return t;
    switch (t) {
      case w:
        return 'Fragment';
      case M:
        return 'Profiler';
      case E:
        return 'StrictMode';
      case B:
        return 'Suspense';
      case F:
        return 'SuspenseList';
      case J:
        return 'Activity';
    }
    if (typeof t == 'object')
      switch (t.$$typeof) {
        case S:
          return 'Portal';
        case Y:
          return (t.displayName || 'Context') + '.Provider';
        case k:
          return (t._context.displayName || 'Context') + '.Consumer';
        case G:
          var n = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = n.displayName || n.name || ''),
              (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
            t
          );
        case K:
          return (
            (n = t.displayName || null),
            n !== null ? n : Qt(t.type) || 'Memo'
          );
        case Q:
          ((n = t._payload), (t = t._init));
          try {
            return Qt(t(n));
          } catch {}
      }
    return null;
  }
  var ft = Array.isArray,
    H = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    P = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    et = { pending: !1, data: null, method: null, action: null },
    xt = [],
    O = -1;
  function X(t) {
    return { current: t };
  }
  function W(t) {
    0 > O || ((t.current = xt[O]), (xt[O] = null), O--);
  }
  function Z(t, n) {
    (O++, (xt[O] = t.current), (t.current = n));
  }
  var I = X(null),
    ht = X(null),
    nt = X(null),
    ve = X(null);
  function Rt(t, n) {
    switch ((Z(nt, n), Z(ht, t), Z(I, null), n.nodeType)) {
      case 9:
      case 11:
        t = (t = n.documentElement) && (t = t.namespaceURI) ? Km(t) : 0;
        break;
      default:
        if (((t = n.tagName), (n = n.namespaceURI)))
          ((n = Km(n)), (t = Wm(n, t)));
        else
          switch (t) {
            case 'svg':
              t = 1;
              break;
            case 'math':
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (W(I), Z(I, t));
  }
  function jn() {
    (W(I), W(ht), W(nt));
  }
  function ur(t) {
    t.memoizedState !== null && Z(ve, t);
    var n = I.current,
      l = Wm(n, t.type);
    n !== l && (Z(ht, t), Z(I, l));
  }
  function rl(t) {
    (ht.current === t && (W(I), W(ht)),
      ve.current === t && (W(ve), (Es._currentValue = et)));
  }
  var cr = Object.prototype.hasOwnProperty,
    fr = i.unstable_scheduleCallback,
    hr = i.unstable_cancelCallback,
    yy = i.unstable_shouldYield,
    by = i.unstable_requestPaint,
    We = i.unstable_now,
    xy = i.unstable_getCurrentPriorityLevel,
    Df = i.unstable_ImmediatePriority,
    Cf = i.unstable_UserBlockingPriority,
    ul = i.unstable_NormalPriority,
    vy = i.unstable_LowPriority,
    jf = i.unstable_IdlePriority,
    _y = i.log,
    Sy = i.unstable_setDisableYieldValue,
    za = null,
    _e = null;
  function Rn(t) {
    if (
      (typeof _y == 'function' && Sy(t),
      _e && typeof _e.setStrictMode == 'function')
    )
      try {
        _e.setStrictMode(za, t);
      } catch {}
  }
  var Se = Math.clz32 ? Math.clz32 : Ey,
    wy = Math.log,
    My = Math.LN2;
  function Ey(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((wy(t) / My) | 0)) | 0);
  }
  var cl = 256,
    fl = 4194304;
  function si(t) {
    var n = t & 42;
    if (n !== 0) return n;
    switch (t & -t) {
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
        return 64;
      case 128:
        return 128;
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
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function hl(t, n, l) {
    var r = t.pendingLanes;
    if (r === 0) return 0;
    var f = 0,
      m = t.suspendedLanes,
      y = t.pingedLanes;
    t = t.warmLanes;
    var _ = r & 134217727;
    return (
      _ !== 0
        ? ((r = _ & ~m),
          r !== 0
            ? (f = si(r))
            : ((y &= _),
              y !== 0
                ? (f = si(y))
                : l || ((l = _ & ~t), l !== 0 && (f = si(l)))))
        : ((_ = r & ~m),
          _ !== 0
            ? (f = si(_))
            : y !== 0
              ? (f = si(y))
              : l || ((l = r & ~t), l !== 0 && (f = si(l)))),
      f === 0
        ? 0
        : n !== 0 &&
            n !== f &&
            (n & m) === 0 &&
            ((m = f & -f),
            (l = n & -n),
            m >= l || (m === 32 && (l & 4194048) !== 0))
          ? n
          : f
    );
  }
  function Na(t, n) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & n) === 0;
  }
  function Ty(t, n) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
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
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Rf() {
    var t = cl;
    return ((cl <<= 1), (cl & 4194048) === 0 && (cl = 256), t);
  }
  function zf() {
    var t = fl;
    return ((fl <<= 1), (fl & 62914560) === 0 && (fl = 4194304), t);
  }
  function dr(t) {
    for (var n = [], l = 0; 31 > l; l++) n.push(t);
    return n;
  }
  function ka(t, n) {
    ((t.pendingLanes |= n),
      n !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function Oy(t, n, l, r, f, m) {
    var y = t.pendingLanes;
    ((t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0));
    var _ = t.entanglements,
      T = t.expirationTimes,
      z = t.hiddenUpdates;
    for (l = y & ~l; 0 < l; ) {
      var U = 31 - Se(l),
        V = 1 << U;
      ((_[U] = 0), (T[U] = -1));
      var N = z[U];
      if (N !== null)
        for (z[U] = null, U = 0; U < N.length; U++) {
          var L = N[U];
          L !== null && (L.lane &= -536870913);
        }
      l &= ~V;
    }
    (r !== 0 && Nf(t, r, 0),
      m !== 0 && f === 0 && t.tag !== 0 && (t.suspendedLanes |= m & ~(y & ~n)));
  }
  function Nf(t, n, l) {
    ((t.pendingLanes |= n), (t.suspendedLanes &= ~n));
    var r = 31 - Se(n);
    ((t.entangledLanes |= n),
      (t.entanglements[r] = t.entanglements[r] | 1073741824 | (l & 4194090)));
  }
  function kf(t, n) {
    var l = (t.entangledLanes |= n);
    for (t = t.entanglements; l; ) {
      var r = 31 - Se(l),
        f = 1 << r;
      ((f & n) | (t[r] & n) && (t[r] |= n), (l &= ~f));
    }
  }
  function mr(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function gr(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Lf() {
    var t = P.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : gg(t.type));
  }
  function Ay(t, n) {
    var l = P.p;
    try {
      return ((P.p = t), n());
    } finally {
      P.p = l;
    }
  }
  var zn = Math.random().toString(36).slice(2),
    ae = '__reactFiber$' + zn,
    he = '__reactProps$' + zn,
    ki = '__reactContainer$' + zn,
    pr = '__reactEvents$' + zn,
    Dy = '__reactListeners$' + zn,
    Cy = '__reactHandles$' + zn,
    Hf = '__reactResources$' + zn,
    La = '__reactMarker$' + zn;
  function yr(t) {
    (delete t[ae], delete t[he], delete t[pr], delete t[Dy], delete t[Cy]);
  }
  function Li(t) {
    var n = t[ae];
    if (n) return n;
    for (var l = t.parentNode; l; ) {
      if ((n = l[ki] || l[ae])) {
        if (
          ((l = n.alternate),
          n.child !== null || (l !== null && l.child !== null))
        )
          for (t = tg(t); t !== null; ) {
            if ((l = t[ae])) return l;
            t = tg(t);
          }
        return n;
      }
      ((t = l), (l = t.parentNode));
    }
    return null;
  }
  function Hi(t) {
    if ((t = t[ae] || t[ki])) {
      var n = t.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return t;
    }
    return null;
  }
  function Ha(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return t.stateNode;
    throw Error(s(33));
  }
  function Bi(t) {
    var n = t[Hf];
    return (
      n ||
        (n = t[Hf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      n
    );
  }
  function Zt(t) {
    t[La] = !0;
  }
  var Bf = new Set(),
    Uf = {};
  function li(t, n) {
    (Ui(t, n), Ui(t + 'Capture', n));
  }
  function Ui(t, n) {
    for (Uf[t] = n, t = 0; t < n.length; t++) Bf.add(n[t]);
  }
  var jy = RegExp(
      '^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
    ),
    Yf = {},
    qf = {};
  function Ry(t) {
    return cr.call(qf, t)
      ? !0
      : cr.call(Yf, t)
        ? !1
        : jy.test(t)
          ? (qf[t] = !0)
          : ((Yf[t] = !0), !1);
  }
  function dl(t, n, l) {
    if (Ry(n))
      if (l === null) t.removeAttribute(n);
      else {
        switch (typeof l) {
          case 'undefined':
          case 'function':
          case 'symbol':
            t.removeAttribute(n);
            return;
          case 'boolean':
            var r = n.toLowerCase().slice(0, 5);
            if (r !== 'data-' && r !== 'aria-') {
              t.removeAttribute(n);
              return;
            }
        }
        t.setAttribute(n, '' + l);
      }
  }
  function ml(t, n, l) {
    if (l === null) t.removeAttribute(n);
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          t.removeAttribute(n);
          return;
      }
      t.setAttribute(n, '' + l);
    }
  }
  function un(t, n, l, r) {
    if (r === null) t.removeAttribute(l);
    else {
      switch (typeof r) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(n, l, '' + r);
    }
  }
  var br, Vf;
  function Yi(t) {
    if (br === void 0)
      try {
        throw Error();
      } catch (l) {
        var n = l.stack.trim().match(/\n( *(at )?)/);
        ((br = (n && n[1]) || ''),
          (Vf =
            -1 <
            l.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < l.stack.indexOf('@')
                ? '@unknown:0:0'
                : ''));
      }
    return (
      `
` +
      br +
      t +
      Vf
    );
  }
  var xr = !1;
  function vr(t, n) {
    if (!t || xr) return '';
    xr = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var r = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var V = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(V.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(V, []);
                } catch (L) {
                  var N = L;
                }
                Reflect.construct(t, [], V);
              } else {
                try {
                  V.call();
                } catch (L) {
                  N = L;
                }
                t.call(V.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (L) {
                N = L;
              }
              (V = t()) &&
                typeof V.catch == 'function' &&
                V.catch(function () {});
            }
          } catch (L) {
            if (L && N && typeof L.stack == 'string') return [L.stack, N.stack];
          }
          return [null, null];
        },
      };
      r.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot';
      var f = Object.getOwnPropertyDescriptor(
        r.DetermineComponentFrameRoot,
        'name'
      );
      f &&
        f.configurable &&
        Object.defineProperty(r.DetermineComponentFrameRoot, 'name', {
          value: 'DetermineComponentFrameRoot',
        });
      var m = r.DetermineComponentFrameRoot(),
        y = m[0],
        _ = m[1];
      if (y && _) {
        var T = y.split(`
`),
          z = _.split(`
`);
        for (
          f = r = 0;
          r < T.length && !T[r].includes('DetermineComponentFrameRoot');

        )
          r++;
        for (; f < z.length && !z[f].includes('DetermineComponentFrameRoot'); )
          f++;
        if (r === T.length || f === z.length)
          for (
            r = T.length - 1, f = z.length - 1;
            1 <= r && 0 <= f && T[r] !== z[f];

          )
            f--;
        for (; 1 <= r && 0 <= f; r--, f--)
          if (T[r] !== z[f]) {
            if (r !== 1 || f !== 1)
              do
                if ((r--, f--, 0 > f || T[r] !== z[f])) {
                  var U =
                    `
` + T[r].replace(' at new ', ' at ');
                  return (
                    t.displayName &&
                      U.includes('<anonymous>') &&
                      (U = U.replace('<anonymous>', t.displayName)),
                    U
                  );
                }
              while (1 <= r && 0 <= f);
            break;
          }
      }
    } finally {
      ((xr = !1), (Error.prepareStackTrace = l));
    }
    return (l = t ? t.displayName || t.name : '') ? Yi(l) : '';
  }
  function zy(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Yi(t.type);
      case 16:
        return Yi('Lazy');
      case 13:
        return Yi('Suspense');
      case 19:
        return Yi('SuspenseList');
      case 0:
      case 15:
        return vr(t.type, !1);
      case 11:
        return vr(t.type.render, !1);
      case 1:
        return vr(t.type, !0);
      case 31:
        return Yi('Activity');
      default:
        return '';
    }
  }
  function Xf(t) {
    try {
      var n = '';
      do ((n += zy(t)), (t = t.return));
      while (t);
      return n;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function Ce(t) {
    switch (typeof t) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return t;
      case 'object':
        return t;
      default:
        return '';
    }
  }
  function Gf(t) {
    var n = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === 'input' &&
      (n === 'checkbox' || n === 'radio')
    );
  }
  function Ny(t) {
    var n = Gf(t) ? 'checked' : 'value',
      l = Object.getOwnPropertyDescriptor(t.constructor.prototype, n),
      r = '' + t[n];
    if (
      !t.hasOwnProperty(n) &&
      typeof l < 'u' &&
      typeof l.get == 'function' &&
      typeof l.set == 'function'
    ) {
      var f = l.get,
        m = l.set;
      return (
        Object.defineProperty(t, n, {
          configurable: !0,
          get: function () {
            return f.call(this);
          },
          set: function (y) {
            ((r = '' + y), m.call(this, y));
          },
        }),
        Object.defineProperty(t, n, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (y) {
            r = '' + y;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[n]);
          },
        }
      );
    }
  }
  function gl(t) {
    t._valueTracker || (t._valueTracker = Ny(t));
  }
  function Pf(t) {
    if (!t) return !1;
    var n = t._valueTracker;
    if (!n) return !0;
    var l = n.getValue(),
      r = '';
    return (
      t && (r = Gf(t) ? (t.checked ? 'true' : 'false') : t.value),
      (t = r),
      t !== l ? (n.setValue(t), !0) : !1
    );
  }
  function pl(t) {
    if (
      ((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var ky = /[\n"\\]/g;
  function je(t) {
    return t.replace(ky, function (n) {
      return '\\' + n.charCodeAt(0).toString(16) + ' ';
    });
  }
  function _r(t, n, l, r, f, m, y, _) {
    ((t.name = ''),
      y != null &&
      typeof y != 'function' &&
      typeof y != 'symbol' &&
      typeof y != 'boolean'
        ? (t.type = y)
        : t.removeAttribute('type'),
      n != null
        ? y === 'number'
          ? ((n === 0 && t.value === '') || t.value != n) &&
            (t.value = '' + Ce(n))
          : t.value !== '' + Ce(n) && (t.value = '' + Ce(n))
        : (y !== 'submit' && y !== 'reset') || t.removeAttribute('value'),
      n != null
        ? Sr(t, y, Ce(n))
        : l != null
          ? Sr(t, y, Ce(l))
          : r != null && t.removeAttribute('value'),
      f == null && m != null && (t.defaultChecked = !!m),
      f != null &&
        (t.checked = f && typeof f != 'function' && typeof f != 'symbol'),
      _ != null &&
      typeof _ != 'function' &&
      typeof _ != 'symbol' &&
      typeof _ != 'boolean'
        ? (t.name = '' + Ce(_))
        : t.removeAttribute('name'));
  }
  function Ff(t, n, l, r, f, m, y, _) {
    if (
      (m != null &&
        typeof m != 'function' &&
        typeof m != 'symbol' &&
        typeof m != 'boolean' &&
        (t.type = m),
      n != null || l != null)
    ) {
      if (!((m !== 'submit' && m !== 'reset') || n != null)) return;
      ((l = l != null ? '' + Ce(l) : ''),
        (n = n != null ? '' + Ce(n) : l),
        _ || n === t.value || (t.value = n),
        (t.defaultValue = n));
    }
    ((r = r ?? f),
      (r = typeof r != 'function' && typeof r != 'symbol' && !!r),
      (t.checked = _ ? t.checked : !!r),
      (t.defaultChecked = !!r),
      y != null &&
        typeof y != 'function' &&
        typeof y != 'symbol' &&
        typeof y != 'boolean' &&
        (t.name = y));
  }
  function Sr(t, n, l) {
    (n === 'number' && pl(t.ownerDocument) === t) ||
      t.defaultValue === '' + l ||
      (t.defaultValue = '' + l);
  }
  function qi(t, n, l, r) {
    if (((t = t.options), n)) {
      n = {};
      for (var f = 0; f < l.length; f++) n['$' + l[f]] = !0;
      for (l = 0; l < t.length; l++)
        ((f = n.hasOwnProperty('$' + t[l].value)),
          t[l].selected !== f && (t[l].selected = f),
          f && r && (t[l].defaultSelected = !0));
    } else {
      for (l = '' + Ce(l), n = null, f = 0; f < t.length; f++) {
        if (t[f].value === l) {
          ((t[f].selected = !0), r && (t[f].defaultSelected = !0));
          return;
        }
        n !== null || t[f].disabled || (n = t[f]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Qf(t, n, l) {
    if (
      n != null &&
      ((n = '' + Ce(n)), n !== t.value && (t.value = n), l == null)
    ) {
      t.defaultValue !== n && (t.defaultValue = n);
      return;
    }
    t.defaultValue = l != null ? '' + Ce(l) : '';
  }
  function Zf(t, n, l, r) {
    if (n == null) {
      if (r != null) {
        if (l != null) throw Error(s(92));
        if (ft(r)) {
          if (1 < r.length) throw Error(s(93));
          r = r[0];
        }
        l = r;
      }
      (l == null && (l = ''), (n = l));
    }
    ((l = Ce(n)),
      (t.defaultValue = l),
      (r = t.textContent),
      r === l && r !== '' && r !== null && (t.value = r));
  }
  function Vi(t, n) {
    if (n) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = n;
        return;
      }
    }
    t.textContent = n;
  }
  var Ly = new Set(
    'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
      ' '
    )
  );
  function Kf(t, n, l) {
    var r = n.indexOf('--') === 0;
    l == null || typeof l == 'boolean' || l === ''
      ? r
        ? t.setProperty(n, '')
        : n === 'float'
          ? (t.cssFloat = '')
          : (t[n] = '')
      : r
        ? t.setProperty(n, l)
        : typeof l != 'number' || l === 0 || Ly.has(n)
          ? n === 'float'
            ? (t.cssFloat = l)
            : (t[n] = ('' + l).trim())
          : (t[n] = l + 'px');
  }
  function Wf(t, n, l) {
    if (n != null && typeof n != 'object') throw Error(s(62));
    if (((t = t.style), l != null)) {
      for (var r in l)
        !l.hasOwnProperty(r) ||
          (n != null && n.hasOwnProperty(r)) ||
          (r.indexOf('--') === 0
            ? t.setProperty(r, '')
            : r === 'float'
              ? (t.cssFloat = '')
              : (t[r] = ''));
      for (var f in n)
        ((r = n[f]), n.hasOwnProperty(f) && l[f] !== r && Kf(t, f, r));
    } else for (var m in n) n.hasOwnProperty(m) && Kf(t, m, n[m]);
  }
  function wr(t) {
    if (t.indexOf('-') === -1) return !1;
    switch (t) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  var Hy = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    By =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function yl(t) {
    return By.test('' + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  var Mr = null;
  function Er(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Xi = null,
    Gi = null;
  function $f(t) {
    var n = Hi(t);
    if (n && (t = n.stateNode)) {
      var l = t[he] || null;
      t: switch (((t = n.stateNode), n.type)) {
        case 'input':
          if (
            (_r(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (n = l.name),
            l.type === 'radio' && n != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + je('' + n) + '"][type="radio"]'
              ),
                n = 0;
              n < l.length;
              n++
            ) {
              var r = l[n];
              if (r !== t && r.form === t.form) {
                var f = r[he] || null;
                if (!f) throw Error(s(90));
                _r(
                  r,
                  f.value,
                  f.defaultValue,
                  f.defaultValue,
                  f.checked,
                  f.defaultChecked,
                  f.type,
                  f.name
                );
              }
            }
            for (n = 0; n < l.length; n++)
              ((r = l[n]), r.form === t.form && Pf(r));
          }
          break t;
        case 'textarea':
          Qf(t, l.value, l.defaultValue);
          break t;
        case 'select':
          ((n = l.value), n != null && qi(t, !!l.multiple, n, !1));
      }
    }
  }
  var Tr = !1;
  function Jf(t, n, l) {
    if (Tr) return t(n, l);
    Tr = !0;
    try {
      var r = t(n);
      return r;
    } finally {
      if (
        ((Tr = !1),
        (Xi !== null || Gi !== null) &&
          (no(), Xi && ((n = Xi), (t = Gi), (Gi = Xi = null), $f(n), t)))
      )
        for (n = 0; n < t.length; n++) $f(t[n]);
    }
  }
  function Ba(t, n) {
    var l = t.stateNode;
    if (l === null) return null;
    var r = l[he] || null;
    if (r === null) return null;
    l = r[n];
    t: switch (n) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ((r = !r.disabled) ||
          ((t = t.type),
          (r = !(
            t === 'button' ||
            t === 'input' ||
            t === 'select' ||
            t === 'textarea'
          ))),
          (t = !r));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != 'function') throw Error(s(231, n, typeof l));
    return l;
  }
  var cn = !(
      typeof window > 'u' ||
      typeof window.document > 'u' ||
      typeof window.document.createElement > 'u'
    ),
    Or = !1;
  if (cn)
    try {
      var Ua = {};
      (Object.defineProperty(Ua, 'passive', {
        get: function () {
          Or = !0;
        },
      }),
        window.addEventListener('test', Ua, Ua),
        window.removeEventListener('test', Ua, Ua));
    } catch {
      Or = !1;
    }
  var Nn = null,
    Ar = null,
    bl = null;
  function If() {
    if (bl) return bl;
    var t,
      n = Ar,
      l = n.length,
      r,
      f = 'value' in Nn ? Nn.value : Nn.textContent,
      m = f.length;
    for (t = 0; t < l && n[t] === f[t]; t++);
    var y = l - t;
    for (r = 1; r <= y && n[l - r] === f[m - r]; r++);
    return (bl = f.slice(t, 1 < r ? 1 - r : void 0));
  }
  function xl(t) {
    var n = t.keyCode;
    return (
      'charCode' in t
        ? ((t = t.charCode), t === 0 && n === 13 && (t = 13))
        : (t = n),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function vl() {
    return !0;
  }
  function th() {
    return !1;
  }
  function de(t) {
    function n(l, r, f, m, y) {
      ((this._reactName = l),
        (this._targetInst = f),
        (this.type = r),
        (this.nativeEvent = m),
        (this.target = y),
        (this.currentTarget = null));
      for (var _ in t)
        t.hasOwnProperty(_) && ((l = t[_]), (this[_] = l ? l(m) : m[_]));
      return (
        (this.isDefaultPrevented = (
          m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1
        )
          ? vl
          : th),
        (this.isPropagationStopped = th),
        this
      );
    }
    return (
      p(n.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != 'unknown' && (l.returnValue = !1),
            (this.isDefaultPrevented = vl));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0),
            (this.isPropagationStopped = vl));
        },
        persist: function () {},
        isPersistent: vl,
      }),
      n
    );
  }
  var oi = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    _l = de(oi),
    Ya = p({}, oi, { view: 0, detail: 0 }),
    Uy = de(Ya),
    Dr,
    Cr,
    qa,
    Sl = p({}, Ya, {
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
      getModifierState: Rr,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return 'movementX' in t
          ? t.movementX
          : (t !== qa &&
              (qa && t.type === 'mousemove'
                ? ((Dr = t.screenX - qa.screenX), (Cr = t.screenY - qa.screenY))
                : (Cr = Dr = 0),
              (qa = t)),
            Dr);
      },
      movementY: function (t) {
        return 'movementY' in t ? t.movementY : Cr;
      },
    }),
    eh = de(Sl),
    Yy = p({}, Sl, { dataTransfer: 0 }),
    qy = de(Yy),
    Vy = p({}, Ya, { relatedTarget: 0 }),
    jr = de(Vy),
    Xy = p({}, oi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Gy = de(Xy),
    Py = p({}, oi, {
      clipboardData: function (t) {
        return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Fy = de(Py),
    Qy = p({}, oi, { data: 0 }),
    nh = de(Qy),
    Zy = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    Ky = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    Wy = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function $y(t) {
    var n = this.nativeEvent;
    return n.getModifierState
      ? n.getModifierState(t)
      : (t = Wy[t])
        ? !!n[t]
        : !1;
  }
  function Rr() {
    return $y;
  }
  var Jy = p({}, Ya, {
      key: function (t) {
        if (t.key) {
          var n = Zy[t.key] || t.key;
          if (n !== 'Unidentified') return n;
        }
        return t.type === 'keypress'
          ? ((t = xl(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
          : t.type === 'keydown' || t.type === 'keyup'
            ? Ky[t.keyCode] || 'Unidentified'
            : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Rr,
      charCode: function (t) {
        return t.type === 'keypress' ? xl(t) : 0;
      },
      keyCode: function (t) {
        return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === 'keypress'
          ? xl(t)
          : t.type === 'keydown' || t.type === 'keyup'
            ? t.keyCode
            : 0;
      },
    }),
    Iy = de(Jy),
    tb = p({}, Sl, {
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
    }),
    ih = de(tb),
    eb = p({}, Ya, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Rr,
    }),
    nb = de(eb),
    ib = p({}, oi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ab = de(ib),
    sb = p({}, Sl, {
      deltaX: function (t) {
        return 'deltaX' in t
          ? t.deltaX
          : 'wheelDeltaX' in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return 'deltaY' in t
          ? t.deltaY
          : 'wheelDeltaY' in t
            ? -t.wheelDeltaY
            : 'wheelDelta' in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    lb = de(sb),
    ob = p({}, oi, { newState: 0, oldState: 0 }),
    rb = de(ob),
    ub = [9, 13, 27, 32],
    zr = cn && 'CompositionEvent' in window,
    Va = null;
  cn && 'documentMode' in document && (Va = document.documentMode);
  var cb = cn && 'TextEvent' in window && !Va,
    ah = cn && (!zr || (Va && 8 < Va && 11 >= Va)),
    sh = ' ',
    lh = !1;
  function oh(t, n) {
    switch (t) {
      case 'keyup':
        return ub.indexOf(n.keyCode) !== -1;
      case 'keydown':
        return n.keyCode !== 229;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function rh(t) {
    return (
      (t = t.detail),
      typeof t == 'object' && 'data' in t ? t.data : null
    );
  }
  var Pi = !1;
  function fb(t, n) {
    switch (t) {
      case 'compositionend':
        return rh(n);
      case 'keypress':
        return n.which !== 32 ? null : ((lh = !0), sh);
      case 'textInput':
        return ((t = n.data), t === sh && lh ? null : t);
      default:
        return null;
    }
  }
  function hb(t, n) {
    if (Pi)
      return t === 'compositionend' || (!zr && oh(t, n))
        ? ((t = If()), (bl = Ar = Nn = null), (Pi = !1), t)
        : null;
    switch (t) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case 'compositionend':
        return ah && n.locale !== 'ko' ? null : n.data;
      default:
        return null;
    }
  }
  var db = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
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
  function uh(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n === 'input' ? !!db[t.type] : n === 'textarea';
  }
  function ch(t, n, l, r) {
    (Xi ? (Gi ? Gi.push(r) : (Gi = [r])) : (Xi = r),
      (n = ro(n, 'onChange')),
      0 < n.length &&
        ((l = new _l('onChange', 'change', null, l, r)),
        t.push({ event: l, listeners: n })));
  }
  var Xa = null,
    Ga = null;
  function mb(t) {
    Gm(t, 0);
  }
  function wl(t) {
    var n = Ha(t);
    if (Pf(n)) return t;
  }
  function fh(t, n) {
    if (t === 'change') return n;
  }
  var hh = !1;
  if (cn) {
    var Nr;
    if (cn) {
      var kr = 'oninput' in document;
      if (!kr) {
        var dh = document.createElement('div');
        (dh.setAttribute('oninput', 'return;'),
          (kr = typeof dh.oninput == 'function'));
      }
      Nr = kr;
    } else Nr = !1;
    hh = Nr && (!document.documentMode || 9 < document.documentMode);
  }
  function mh() {
    Xa && (Xa.detachEvent('onpropertychange', gh), (Ga = Xa = null));
  }
  function gh(t) {
    if (t.propertyName === 'value' && wl(Ga)) {
      var n = [];
      (ch(n, Ga, t, Er(t)), Jf(mb, n));
    }
  }
  function gb(t, n, l) {
    t === 'focusin'
      ? (mh(), (Xa = n), (Ga = l), Xa.attachEvent('onpropertychange', gh))
      : t === 'focusout' && mh();
  }
  function pb(t) {
    if (t === 'selectionchange' || t === 'keyup' || t === 'keydown')
      return wl(Ga);
  }
  function yb(t, n) {
    if (t === 'click') return wl(n);
  }
  function bb(t, n) {
    if (t === 'input' || t === 'change') return wl(n);
  }
  function xb(t, n) {
    return (t === n && (t !== 0 || 1 / t === 1 / n)) || (t !== t && n !== n);
  }
  var we = typeof Object.is == 'function' ? Object.is : xb;
  function Pa(t, n) {
    if (we(t, n)) return !0;
    if (
      typeof t != 'object' ||
      t === null ||
      typeof n != 'object' ||
      n === null
    )
      return !1;
    var l = Object.keys(t),
      r = Object.keys(n);
    if (l.length !== r.length) return !1;
    for (r = 0; r < l.length; r++) {
      var f = l[r];
      if (!cr.call(n, f) || !we(t[f], n[f])) return !1;
    }
    return !0;
  }
  function ph(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function yh(t, n) {
    var l = ph(t);
    t = 0;
    for (var r; l; ) {
      if (l.nodeType === 3) {
        if (((r = t + l.textContent.length), t <= n && r >= n))
          return { node: l, offset: n - t };
        t = r;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = ph(l);
    }
  }
  function bh(t, n) {
    return t && n
      ? t === n
        ? !0
        : t && t.nodeType === 3
          ? !1
          : n && n.nodeType === 3
            ? bh(t, n.parentNode)
            : 'contains' in t
              ? t.contains(n)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(n) & 16)
                : !1
      : !1;
  }
  function xh(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var n = pl(t.document); n instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof n.contentWindow.location.href == 'string';
      } catch {
        l = !1;
      }
      if (l) t = n.contentWindow;
      else break;
      n = pl(t.document);
    }
    return n;
  }
  function Lr(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      n &&
      ((n === 'input' &&
        (t.type === 'text' ||
          t.type === 'search' ||
          t.type === 'tel' ||
          t.type === 'url' ||
          t.type === 'password')) ||
        n === 'textarea' ||
        t.contentEditable === 'true')
    );
  }
  var vb = cn && 'documentMode' in document && 11 >= document.documentMode,
    Fi = null,
    Hr = null,
    Fa = null,
    Br = !1;
  function vh(t, n, l) {
    var r =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Br ||
      Fi == null ||
      Fi !== pl(r) ||
      ((r = Fi),
      'selectionStart' in r && Lr(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (Fa && Pa(Fa, r)) ||
        ((Fa = r),
        (r = ro(Hr, 'onSelect')),
        0 < r.length &&
          ((n = new _l('onSelect', 'select', null, n, l)),
          t.push({ event: n, listeners: r }),
          (n.target = Fi))));
  }
  function ri(t, n) {
    var l = {};
    return (
      (l[t.toLowerCase()] = n.toLowerCase()),
      (l['Webkit' + t] = 'webkit' + n),
      (l['Moz' + t] = 'moz' + n),
      l
    );
  }
  var Qi = {
      animationend: ri('Animation', 'AnimationEnd'),
      animationiteration: ri('Animation', 'AnimationIteration'),
      animationstart: ri('Animation', 'AnimationStart'),
      transitionrun: ri('Transition', 'TransitionRun'),
      transitionstart: ri('Transition', 'TransitionStart'),
      transitioncancel: ri('Transition', 'TransitionCancel'),
      transitionend: ri('Transition', 'TransitionEnd'),
    },
    Ur = {},
    _h = {};
  cn &&
    ((_h = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Qi.animationend.animation,
      delete Qi.animationiteration.animation,
      delete Qi.animationstart.animation),
    'TransitionEvent' in window || delete Qi.transitionend.transition);
  function ui(t) {
    if (Ur[t]) return Ur[t];
    if (!Qi[t]) return t;
    var n = Qi[t],
      l;
    for (l in n) if (n.hasOwnProperty(l) && l in _h) return (Ur[t] = n[l]);
    return t;
  }
  var Sh = ui('animationend'),
    wh = ui('animationiteration'),
    Mh = ui('animationstart'),
    _b = ui('transitionrun'),
    Sb = ui('transitionstart'),
    wb = ui('transitioncancel'),
    Eh = ui('transitionend'),
    Th = new Map(),
    Yr =
      'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
        ' '
      );
  Yr.push('scrollEnd');
  function Xe(t, n) {
    (Th.set(t, n), li(n, [t]));
  }
  var Oh = new WeakMap();
  function Re(t, n) {
    if (typeof t == 'object' && t !== null) {
      var l = Oh.get(t);
      return l !== void 0
        ? l
        : ((n = { value: t, source: n, stack: Xf(n) }), Oh.set(t, n), n);
    }
    return { value: t, source: n, stack: Xf(n) };
  }
  var ze = [],
    Zi = 0,
    qr = 0;
  function Ml() {
    for (var t = Zi, n = (qr = Zi = 0); n < t; ) {
      var l = ze[n];
      ze[n++] = null;
      var r = ze[n];
      ze[n++] = null;
      var f = ze[n];
      ze[n++] = null;
      var m = ze[n];
      if (((ze[n++] = null), r !== null && f !== null)) {
        var y = r.pending;
        (y === null ? (f.next = f) : ((f.next = y.next), (y.next = f)),
          (r.pending = f));
      }
      m !== 0 && Ah(l, f, m);
    }
  }
  function El(t, n, l, r) {
    ((ze[Zi++] = t),
      (ze[Zi++] = n),
      (ze[Zi++] = l),
      (ze[Zi++] = r),
      (qr |= r),
      (t.lanes |= r),
      (t = t.alternate),
      t !== null && (t.lanes |= r));
  }
  function Vr(t, n, l, r) {
    return (El(t, n, l, r), Tl(t));
  }
  function Ki(t, n) {
    return (El(t, null, null, n), Tl(t));
  }
  function Ah(t, n, l) {
    t.lanes |= l;
    var r = t.alternate;
    r !== null && (r.lanes |= l);
    for (var f = !1, m = t.return; m !== null; )
      ((m.childLanes |= l),
        (r = m.alternate),
        r !== null && (r.childLanes |= l),
        m.tag === 22 &&
          ((t = m.stateNode), t === null || t._visibility & 1 || (f = !0)),
        (t = m),
        (m = m.return));
    return t.tag === 3
      ? ((m = t.stateNode),
        f &&
          n !== null &&
          ((f = 31 - Se(l)),
          (t = m.hiddenUpdates),
          (r = t[f]),
          r === null ? (t[f] = [n]) : r.push(n),
          (n.lane = l | 536870912)),
        m)
      : null;
  }
  function Tl(t) {
    if (50 < ys) throw ((ys = 0), (Zu = null), Error(s(185)));
    for (var n = t.return; n !== null; ) ((t = n), (n = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var Wi = {};
  function Mb(t, n, l, r) {
    ((this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = n),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Me(t, n, l, r) {
    return new Mb(t, n, l, r);
  }
  function Xr(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function fn(t, n) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = Me(t.tag, n, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = n),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 65011712),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (n = t.dependencies),
      (l.dependencies =
        n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function Dh(t, n) {
    t.flags &= 65011714;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = n),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (n = l.dependencies),
          (t.dependencies =
            n === null
              ? null
              : { lanes: n.lanes, firstContext: n.firstContext })),
      t
    );
  }
  function Ol(t, n, l, r, f, m) {
    var y = 0;
    if (((r = t), typeof t == 'function')) Xr(t) && (y = 1);
    else if (typeof t == 'string')
      y = Tx(t, l, I.current)
        ? 26
        : t === 'html' || t === 'head' || t === 'body'
          ? 27
          : 5;
    else
      t: switch (t) {
        case J:
          return ((t = Me(31, l, n, f)), (t.elementType = J), (t.lanes = m), t);
        case w:
          return ci(l.children, f, m, n);
        case E:
          ((y = 8), (f |= 24));
          break;
        case M:
          return (
            (t = Me(12, l, n, f | 2)),
            (t.elementType = M),
            (t.lanes = m),
            t
          );
        case B:
          return ((t = Me(13, l, n, f)), (t.elementType = B), (t.lanes = m), t);
        case F:
          return ((t = Me(19, l, n, f)), (t.elementType = F), (t.lanes = m), t);
        default:
          if (typeof t == 'object' && t !== null)
            switch (t.$$typeof) {
              case D:
              case Y:
                y = 10;
                break t;
              case k:
                y = 9;
                break t;
              case G:
                y = 11;
                break t;
              case K:
                y = 14;
                break t;
              case Q:
                ((y = 16), (r = null));
                break t;
            }
          ((y = 29),
            (l = Error(s(130, t === null ? 'null' : typeof t, ''))),
            (r = null));
      }
    return (
      (n = Me(y, l, n, f)),
      (n.elementType = t),
      (n.type = r),
      (n.lanes = m),
      n
    );
  }
  function ci(t, n, l, r) {
    return ((t = Me(7, t, r, n)), (t.lanes = l), t);
  }
  function Gr(t, n, l) {
    return ((t = Me(6, t, null, n)), (t.lanes = l), t);
  }
  function Pr(t, n, l) {
    return (
      (n = Me(4, t.children !== null ? t.children : [], t.key, n)),
      (n.lanes = l),
      (n.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      n
    );
  }
  var $i = [],
    Ji = 0,
    Al = null,
    Dl = 0,
    Ne = [],
    ke = 0,
    fi = null,
    hn = 1,
    dn = '';
  function hi(t, n) {
    (($i[Ji++] = Dl), ($i[Ji++] = Al), (Al = t), (Dl = n));
  }
  function Ch(t, n, l) {
    ((Ne[ke++] = hn), (Ne[ke++] = dn), (Ne[ke++] = fi), (fi = t));
    var r = hn;
    t = dn;
    var f = 32 - Se(r) - 1;
    ((r &= ~(1 << f)), (l += 1));
    var m = 32 - Se(n) + f;
    if (30 < m) {
      var y = f - (f % 5);
      ((m = (r & ((1 << y) - 1)).toString(32)),
        (r >>= y),
        (f -= y),
        (hn = (1 << (32 - Se(n) + f)) | (l << f) | r),
        (dn = m + t));
    } else ((hn = (1 << m) | (l << f) | r), (dn = t));
  }
  function Fr(t) {
    t.return !== null && (hi(t, 1), Ch(t, 1, 0));
  }
  function Qr(t) {
    for (; t === Al; )
      ((Al = $i[--Ji]), ($i[Ji] = null), (Dl = $i[--Ji]), ($i[Ji] = null));
    for (; t === fi; )
      ((fi = Ne[--ke]),
        (Ne[ke] = null),
        (dn = Ne[--ke]),
        (Ne[ke] = null),
        (hn = Ne[--ke]),
        (Ne[ke] = null));
  }
  var ce = null,
    Ht = null,
    _t = !1,
    di = null,
    $e = !1,
    Zr = Error(s(519));
  function mi(t) {
    var n = Error(s(418, ''));
    throw (Ka(Re(n, t)), Zr);
  }
  function jh(t) {
    var n = t.stateNode,
      l = t.type,
      r = t.memoizedProps;
    switch (((n[ae] = t), (n[he] = r), l)) {
      case 'dialog':
        (gt('cancel', n), gt('close', n));
        break;
      case 'iframe':
      case 'object':
      case 'embed':
        gt('load', n);
        break;
      case 'video':
      case 'audio':
        for (l = 0; l < xs.length; l++) gt(xs[l], n);
        break;
      case 'source':
        gt('error', n);
        break;
      case 'img':
      case 'image':
      case 'link':
        (gt('error', n), gt('load', n));
        break;
      case 'details':
        gt('toggle', n);
        break;
      case 'input':
        (gt('invalid', n),
          Ff(
            n,
            r.value,
            r.defaultValue,
            r.checked,
            r.defaultChecked,
            r.type,
            r.name,
            !0
          ),
          gl(n));
        break;
      case 'select':
        gt('invalid', n);
        break;
      case 'textarea':
        (gt('invalid', n), Zf(n, r.value, r.defaultValue, r.children), gl(n));
    }
    ((l = r.children),
      (typeof l != 'string' && typeof l != 'number' && typeof l != 'bigint') ||
      n.textContent === '' + l ||
      r.suppressHydrationWarning === !0 ||
      Zm(n.textContent, l)
        ? (r.popover != null && (gt('beforetoggle', n), gt('toggle', n)),
          r.onScroll != null && gt('scroll', n),
          r.onScrollEnd != null && gt('scrollend', n),
          r.onClick != null && (n.onclick = uo),
          (n = !0))
        : (n = !1),
      n || mi(t));
  }
  function Rh(t) {
    for (ce = t.return; ce; )
      switch (ce.tag) {
        case 5:
        case 13:
          $e = !1;
          return;
        case 27:
        case 3:
          $e = !0;
          return;
        default:
          ce = ce.return;
      }
  }
  function Qa(t) {
    if (t !== ce) return !1;
    if (!_t) return (Rh(t), (_t = !0), !1);
    var n = t.tag,
      l;
    if (
      ((l = n !== 3 && n !== 27) &&
        ((l = n === 5) &&
          ((l = t.type),
          (l =
            !(l !== 'form' && l !== 'button') || cc(t.type, t.memoizedProps))),
        (l = !l)),
      l && Ht && mi(t),
      Rh(t),
      n === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(s(317));
      t: {
        for (t = t.nextSibling, n = 0; t; ) {
          if (t.nodeType === 8)
            if (((l = t.data), l === '/$')) {
              if (n === 0) {
                Ht = Pe(t.nextSibling);
                break t;
              }
              n--;
            } else (l !== '$' && l !== '$!' && l !== '$?') || n++;
          t = t.nextSibling;
        }
        Ht = null;
      }
    } else
      n === 27
        ? ((n = Ht), Wn(t.type) ? ((t = mc), (mc = null), (Ht = t)) : (Ht = n))
        : (Ht = ce ? Pe(t.stateNode.nextSibling) : null);
    return !0;
  }
  function Za() {
    ((Ht = ce = null), (_t = !1));
  }
  function zh() {
    var t = di;
    return (
      t !== null &&
        (pe === null ? (pe = t) : pe.push.apply(pe, t), (di = null)),
      t
    );
  }
  function Ka(t) {
    di === null ? (di = [t]) : di.push(t);
  }
  var Kr = X(null),
    gi = null,
    mn = null;
  function kn(t, n, l) {
    (Z(Kr, n._currentValue), (n._currentValue = l));
  }
  function gn(t) {
    ((t._currentValue = Kr.current), W(Kr));
  }
  function Wr(t, n, l) {
    for (; t !== null; ) {
      var r = t.alternate;
      if (
        ((t.childLanes & n) !== n
          ? ((t.childLanes |= n), r !== null && (r.childLanes |= n))
          : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function $r(t, n, l, r) {
    var f = t.child;
    for (f !== null && (f.return = t); f !== null; ) {
      var m = f.dependencies;
      if (m !== null) {
        var y = f.child;
        m = m.firstContext;
        t: for (; m !== null; ) {
          var _ = m;
          m = f;
          for (var T = 0; T < n.length; T++)
            if (_.context === n[T]) {
              ((m.lanes |= l),
                (_ = m.alternate),
                _ !== null && (_.lanes |= l),
                Wr(m.return, l, t),
                r || (y = null));
              break t;
            }
          m = _.next;
        }
      } else if (f.tag === 18) {
        if (((y = f.return), y === null)) throw Error(s(341));
        ((y.lanes |= l),
          (m = y.alternate),
          m !== null && (m.lanes |= l),
          Wr(y, l, t),
          (y = null));
      } else y = f.child;
      if (y !== null) y.return = f;
      else
        for (y = f; y !== null; ) {
          if (y === t) {
            y = null;
            break;
          }
          if (((f = y.sibling), f !== null)) {
            ((f.return = y.return), (y = f));
            break;
          }
          y = y.return;
        }
      f = y;
    }
  }
  function Wa(t, n, l, r) {
    t = null;
    for (var f = n, m = !1; f !== null; ) {
      if (!m) {
        if ((f.flags & 524288) !== 0) m = !0;
        else if ((f.flags & 262144) !== 0) break;
      }
      if (f.tag === 10) {
        var y = f.alternate;
        if (y === null) throw Error(s(387));
        if (((y = y.memoizedProps), y !== null)) {
          var _ = f.type;
          we(f.pendingProps.value, y.value) ||
            (t !== null ? t.push(_) : (t = [_]));
        }
      } else if (f === ve.current) {
        if (((y = f.alternate), y === null)) throw Error(s(387));
        y.memoizedState.memoizedState !== f.memoizedState.memoizedState &&
          (t !== null ? t.push(Es) : (t = [Es]));
      }
      f = f.return;
    }
    (t !== null && $r(n, t, l, r), (n.flags |= 262144));
  }
  function Cl(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!we(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function pi(t) {
    ((gi = t),
      (mn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function se(t) {
    return Nh(gi, t);
  }
  function jl(t, n) {
    return (gi === null && pi(t), Nh(t, n));
  }
  function Nh(t, n) {
    var l = n._currentValue;
    if (((n = { context: n, memoizedValue: l, next: null }), mn === null)) {
      if (t === null) throw Error(s(308));
      ((mn = n),
        (t.dependencies = { lanes: 0, firstContext: n }),
        (t.flags |= 524288));
    } else mn = mn.next = n;
    return l;
  }
  var Eb =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var t = [],
              n = (this.signal = {
                aborted: !1,
                addEventListener: function (l, r) {
                  t.push(r);
                },
              });
            this.abort = function () {
              ((n.aborted = !0),
                t.forEach(function (l) {
                  return l();
                }));
            };
          },
    Tb = i.unstable_scheduleCallback,
    Ob = i.unstable_NormalPriority,
    Gt = {
      $$typeof: Y,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Jr() {
    return { controller: new Eb(), data: new Map(), refCount: 0 };
  }
  function $a(t) {
    (t.refCount--,
      t.refCount === 0 &&
        Tb(Ob, function () {
          t.controller.abort();
        }));
  }
  var Ja = null,
    Ir = 0,
    Ii = 0,
    ta = null;
  function Ab(t, n) {
    if (Ja === null) {
      var l = (Ja = []);
      ((Ir = 0),
        (Ii = ec()),
        (ta = {
          status: 'pending',
          value: void 0,
          then: function (r) {
            l.push(r);
          },
        }));
    }
    return (Ir++, n.then(kh, kh), n);
  }
  function kh() {
    if (--Ir === 0 && Ja !== null) {
      ta !== null && (ta.status = 'fulfilled');
      var t = Ja;
      ((Ja = null), (Ii = 0), (ta = null));
      for (var n = 0; n < t.length; n++) (0, t[n])();
    }
  }
  function Db(t, n) {
    var l = [],
      r = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (f) {
          l.push(f);
        },
      };
    return (
      t.then(
        function () {
          ((r.status = 'fulfilled'), (r.value = n));
          for (var f = 0; f < l.length; f++) (0, l[f])(n);
        },
        function (f) {
          for (r.status = 'rejected', r.reason = f, f = 0; f < l.length; f++)
            (0, l[f])(void 0);
        }
      ),
      r
    );
  }
  var Lh = H.S;
  H.S = function (t, n) {
    (typeof n == 'object' &&
      n !== null &&
      typeof n.then == 'function' &&
      Ab(t, n),
      Lh !== null && Lh(t, n));
  };
  var yi = X(null);
  function tu() {
    var t = yi.current;
    return t !== null ? t : Dt.pooledCache;
  }
  function Rl(t, n) {
    n === null ? Z(yi, yi.current) : Z(yi, n.pool);
  }
  function Hh() {
    var t = tu();
    return t === null ? null : { parent: Gt._currentValue, pool: t };
  }
  var Ia = Error(s(460)),
    Bh = Error(s(474)),
    zl = Error(s(542)),
    eu = { then: function () {} };
  function Uh(t) {
    return ((t = t.status), t === 'fulfilled' || t === 'rejected');
  }
  function Nl() {}
  function Yh(t, n, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(n) : l !== n && (n.then(Nl, Nl), (n = l)),
      n.status)
    ) {
      case 'fulfilled':
        return n.value;
      case 'rejected':
        throw ((t = n.reason), Vh(t), t);
      default:
        if (typeof n.status == 'string') n.then(Nl, Nl);
        else {
          if (((t = Dt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(s(482));
          ((t = n),
            (t.status = 'pending'),
            t.then(
              function (r) {
                if (n.status === 'pending') {
                  var f = n;
                  ((f.status = 'fulfilled'), (f.value = r));
                }
              },
              function (r) {
                if (n.status === 'pending') {
                  var f = n;
                  ((f.status = 'rejected'), (f.reason = r));
                }
              }
            ));
        }
        switch (n.status) {
          case 'fulfilled':
            return n.value;
          case 'rejected':
            throw ((t = n.reason), Vh(t), t);
        }
        throw ((ts = n), Ia);
    }
  }
  var ts = null;
  function qh() {
    if (ts === null) throw Error(s(459));
    var t = ts;
    return ((ts = null), t);
  }
  function Vh(t) {
    if (t === Ia || t === zl) throw Error(s(483));
  }
  var Ln = !1;
  function nu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function iu(t, n) {
    ((t = t.updateQueue),
      n.updateQueue === t &&
        (n.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function Hn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Bn(t, n, l) {
    var r = t.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (St & 2) !== 0)) {
      var f = r.pending;
      return (
        f === null ? (n.next = n) : ((n.next = f.next), (f.next = n)),
        (r.pending = n),
        (n = Tl(t)),
        Ah(t, null, l),
        n
      );
    }
    return (El(t, r, n, l), Tl(t));
  }
  function es(t, n, l) {
    if (
      ((n = n.updateQueue), n !== null && ((n = n.shared), (l & 4194048) !== 0))
    ) {
      var r = n.lanes;
      ((r &= t.pendingLanes), (l |= r), (n.lanes = l), kf(t, l));
    }
  }
  function au(t, n) {
    var l = t.updateQueue,
      r = t.alternate;
    if (r !== null && ((r = r.updateQueue), l === r)) {
      var f = null,
        m = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var y = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (m === null ? (f = m = y) : (m = m.next = y), (l = l.next));
        } while (l !== null);
        m === null ? (f = m = n) : (m = m.next = n);
      } else f = m = n;
      ((l = {
        baseState: r.baseState,
        firstBaseUpdate: f,
        lastBaseUpdate: m,
        shared: r.shared,
        callbacks: r.callbacks,
      }),
        (t.updateQueue = l));
      return;
    }
    ((t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = n) : (t.next = n),
      (l.lastBaseUpdate = n));
  }
  var su = !1;
  function ns() {
    if (su) {
      var t = ta;
      if (t !== null) throw t;
    }
  }
  function is(t, n, l, r) {
    su = !1;
    var f = t.updateQueue;
    Ln = !1;
    var m = f.firstBaseUpdate,
      y = f.lastBaseUpdate,
      _ = f.shared.pending;
    if (_ !== null) {
      f.shared.pending = null;
      var T = _,
        z = T.next;
      ((T.next = null), y === null ? (m = z) : (y.next = z), (y = T));
      var U = t.alternate;
      U !== null &&
        ((U = U.updateQueue),
        (_ = U.lastBaseUpdate),
        _ !== y &&
          (_ === null ? (U.firstBaseUpdate = z) : (_.next = z),
          (U.lastBaseUpdate = T)));
    }
    if (m !== null) {
      var V = f.baseState;
      ((y = 0), (U = z = T = null), (_ = m));
      do {
        var N = _.lane & -536870913,
          L = N !== _.lane;
        if (L ? (yt & N) === N : (r & N) === N) {
          (N !== 0 && N === Ii && (su = !0),
            U !== null &&
              (U = U.next =
                {
                  lane: 0,
                  tag: _.tag,
                  payload: _.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var lt = t,
              it = _;
            N = n;
            var Ot = l;
            switch (it.tag) {
              case 1:
                if (((lt = it.payload), typeof lt == 'function')) {
                  V = lt.call(Ot, V, N);
                  break t;
                }
                V = lt;
                break t;
              case 3:
                lt.flags = (lt.flags & -65537) | 128;
              case 0:
                if (
                  ((lt = it.payload),
                  (N = typeof lt == 'function' ? lt.call(Ot, V, N) : lt),
                  N == null)
                )
                  break t;
                V = p({}, V, N);
                break t;
              case 2:
                Ln = !0;
            }
          }
          ((N = _.callback),
            N !== null &&
              ((t.flags |= 64),
              L && (t.flags |= 8192),
              (L = f.callbacks),
              L === null ? (f.callbacks = [N]) : L.push(N)));
        } else
          ((L = {
            lane: N,
            tag: _.tag,
            payload: _.payload,
            callback: _.callback,
            next: null,
          }),
            U === null ? ((z = U = L), (T = V)) : (U = U.next = L),
            (y |= N));
        if (((_ = _.next), _ === null)) {
          if (((_ = f.shared.pending), _ === null)) break;
          ((L = _),
            (_ = L.next),
            (L.next = null),
            (f.lastBaseUpdate = L),
            (f.shared.pending = null));
        }
      } while (!0);
      (U === null && (T = V),
        (f.baseState = T),
        (f.firstBaseUpdate = z),
        (f.lastBaseUpdate = U),
        m === null && (f.shared.lanes = 0),
        (Fn |= y),
        (t.lanes = y),
        (t.memoizedState = V));
    }
  }
  function Xh(t, n) {
    if (typeof t != 'function') throw Error(s(191, t));
    t.call(n);
  }
  function Gh(t, n) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) Xh(l[t], n);
  }
  var ea = X(null),
    kl = X(0);
  function Ph(t, n) {
    ((t = Sn), Z(kl, t), Z(ea, n), (Sn = t | n.baseLanes));
  }
  function lu() {
    (Z(kl, Sn), Z(ea, ea.current));
  }
  function ou() {
    ((Sn = kl.current), W(ea), W(kl));
  }
  var Un = 0,
    ct = null,
    Et = null,
    Vt = null,
    Ll = !1,
    na = !1,
    bi = !1,
    Hl = 0,
    as = 0,
    ia = null,
    Cb = 0;
  function Ut() {
    throw Error(s(321));
  }
  function ru(t, n) {
    if (n === null) return !1;
    for (var l = 0; l < n.length && l < t.length; l++)
      if (!we(t[l], n[l])) return !1;
    return !0;
  }
  function uu(t, n, l, r, f, m) {
    return (
      (Un = m),
      (ct = n),
      (n.memoizedState = null),
      (n.updateQueue = null),
      (n.lanes = 0),
      (H.H = t === null || t.memoizedState === null ? Ad : Dd),
      (bi = !1),
      (m = l(r, f)),
      (bi = !1),
      na && (m = Qh(n, l, r, f)),
      Fh(t),
      m
    );
  }
  function Fh(t) {
    H.H = Xl;
    var n = Et !== null && Et.next !== null;
    if (((Un = 0), (Vt = Et = ct = null), (Ll = !1), (as = 0), (ia = null), n))
      throw Error(s(300));
    t === null ||
      Kt ||
      ((t = t.dependencies), t !== null && Cl(t) && (Kt = !0));
  }
  function Qh(t, n, l, r) {
    ct = t;
    var f = 0;
    do {
      if ((na && (ia = null), (as = 0), (na = !1), 25 <= f))
        throw Error(s(301));
      if (((f += 1), (Vt = Et = null), t.updateQueue != null)) {
        var m = t.updateQueue;
        ((m.lastEffect = null),
          (m.events = null),
          (m.stores = null),
          m.memoCache != null && (m.memoCache.index = 0));
      }
      ((H.H = Hb), (m = n(l, r)));
    } while (na);
    return m;
  }
  function jb() {
    var t = H.H,
      n = t.useState()[0];
    return (
      (n = typeof n.then == 'function' ? ss(n) : n),
      (t = t.useState()[0]),
      (Et !== null ? Et.memoizedState : null) !== t && (ct.flags |= 1024),
      n
    );
  }
  function cu() {
    var t = Hl !== 0;
    return ((Hl = 0), t);
  }
  function fu(t, n, l) {
    ((n.updateQueue = t.updateQueue), (n.flags &= -2053), (t.lanes &= ~l));
  }
  function hu(t) {
    if (Ll) {
      for (t = t.memoizedState; t !== null; ) {
        var n = t.queue;
        (n !== null && (n.pending = null), (t = t.next));
      }
      Ll = !1;
    }
    ((Un = 0), (Vt = Et = ct = null), (na = !1), (as = Hl = 0), (ia = null));
  }
  function me() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Vt === null ? (ct.memoizedState = Vt = t) : (Vt = Vt.next = t), Vt);
  }
  function Xt() {
    if (Et === null) {
      var t = ct.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Et.next;
    var n = Vt === null ? ct.memoizedState : Vt.next;
    if (n !== null) ((Vt = n), (Et = t));
    else {
      if (t === null)
        throw ct.alternate === null ? Error(s(467)) : Error(s(310));
      ((Et = t),
        (t = {
          memoizedState: Et.memoizedState,
          baseState: Et.baseState,
          baseQueue: Et.baseQueue,
          queue: Et.queue,
          next: null,
        }),
        Vt === null ? (ct.memoizedState = Vt = t) : (Vt = Vt.next = t));
    }
    return Vt;
  }
  function du() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ss(t) {
    var n = as;
    return (
      (as += 1),
      ia === null && (ia = []),
      (t = Yh(ia, t, n)),
      (n = ct),
      (Vt === null ? n.memoizedState : Vt.next) === null &&
        ((n = n.alternate),
        (H.H = n === null || n.memoizedState === null ? Ad : Dd)),
      t
    );
  }
  function Bl(t) {
    if (t !== null && typeof t == 'object') {
      if (typeof t.then == 'function') return ss(t);
      if (t.$$typeof === Y) return se(t);
    }
    throw Error(s(438, String(t)));
  }
  function mu(t) {
    var n = null,
      l = ct.updateQueue;
    if ((l !== null && (n = l.memoCache), n == null)) {
      var r = ct.alternate;
      r !== null &&
        ((r = r.updateQueue),
        r !== null &&
          ((r = r.memoCache),
          r != null &&
            (n = {
              data: r.data.map(function (f) {
                return f.slice();
              }),
              index: 0,
            })));
    }
    if (
      (n == null && (n = { data: [], index: 0 }),
      l === null && ((l = du()), (ct.updateQueue = l)),
      (l.memoCache = n),
      (l = n.data[n.index]),
      l === void 0)
    )
      for (l = n.data[n.index] = Array(t), r = 0; r < t; r++) l[r] = rt;
    return (n.index++, l);
  }
  function pn(t, n) {
    return typeof n == 'function' ? n(t) : n;
  }
  function Ul(t) {
    var n = Xt();
    return gu(n, Et, t);
  }
  function gu(t, n, l) {
    var r = t.queue;
    if (r === null) throw Error(s(311));
    r.lastRenderedReducer = l;
    var f = t.baseQueue,
      m = r.pending;
    if (m !== null) {
      if (f !== null) {
        var y = f.next;
        ((f.next = m.next), (m.next = y));
      }
      ((n.baseQueue = f = m), (r.pending = null));
    }
    if (((m = t.baseState), f === null)) t.memoizedState = m;
    else {
      n = f.next;
      var _ = (y = null),
        T = null,
        z = n,
        U = !1;
      do {
        var V = z.lane & -536870913;
        if (V !== z.lane ? (yt & V) === V : (Un & V) === V) {
          var N = z.revertLane;
          if (N === 0)
            (T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: z.action,
                  hasEagerState: z.hasEagerState,
                  eagerState: z.eagerState,
                  next: null,
                }),
              V === Ii && (U = !0));
          else if ((Un & N) === N) {
            ((z = z.next), N === Ii && (U = !0));
            continue;
          } else
            ((V = {
              lane: 0,
              revertLane: z.revertLane,
              action: z.action,
              hasEagerState: z.hasEagerState,
              eagerState: z.eagerState,
              next: null,
            }),
              T === null ? ((_ = T = V), (y = m)) : (T = T.next = V),
              (ct.lanes |= N),
              (Fn |= N));
          ((V = z.action),
            bi && l(m, V),
            (m = z.hasEagerState ? z.eagerState : l(m, V)));
        } else
          ((N = {
            lane: V,
            revertLane: z.revertLane,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null,
          }),
            T === null ? ((_ = T = N), (y = m)) : (T = T.next = N),
            (ct.lanes |= V),
            (Fn |= V));
        z = z.next;
      } while (z !== null && z !== n);
      if (
        (T === null ? (y = m) : (T.next = _),
        !we(m, t.memoizedState) && ((Kt = !0), U && ((l = ta), l !== null)))
      )
        throw l;
      ((t.memoizedState = m),
        (t.baseState = y),
        (t.baseQueue = T),
        (r.lastRenderedState = m));
    }
    return (f === null && (r.lanes = 0), [t.memoizedState, r.dispatch]);
  }
  function pu(t) {
    var n = Xt(),
      l = n.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = t;
    var r = l.dispatch,
      f = l.pending,
      m = n.memoizedState;
    if (f !== null) {
      l.pending = null;
      var y = (f = f.next);
      do ((m = t(m, y.action)), (y = y.next));
      while (y !== f);
      (we(m, n.memoizedState) || (Kt = !0),
        (n.memoizedState = m),
        n.baseQueue === null && (n.baseState = m),
        (l.lastRenderedState = m));
    }
    return [m, r];
  }
  function Zh(t, n, l) {
    var r = ct,
      f = Xt(),
      m = _t;
    if (m) {
      if (l === void 0) throw Error(s(407));
      l = l();
    } else l = n();
    var y = !we((Et || f).memoizedState, l);
    (y && ((f.memoizedState = l), (Kt = !0)), (f = f.queue));
    var _ = $h.bind(null, r, f, t);
    if (
      (ls(2048, 8, _, [t]),
      f.getSnapshot !== n || y || (Vt !== null && Vt.memoizedState.tag & 1))
    ) {
      if (
        ((r.flags |= 2048),
        aa(9, Yl(), Wh.bind(null, r, f, l, n), null),
        Dt === null)
      )
        throw Error(s(349));
      m || (Un & 124) !== 0 || Kh(r, n, l);
    }
    return l;
  }
  function Kh(t, n, l) {
    ((t.flags |= 16384),
      (t = { getSnapshot: n, value: l }),
      (n = ct.updateQueue),
      n === null
        ? ((n = du()), (ct.updateQueue = n), (n.stores = [t]))
        : ((l = n.stores), l === null ? (n.stores = [t]) : l.push(t)));
  }
  function Wh(t, n, l, r) {
    ((n.value = l), (n.getSnapshot = r), Jh(n) && Ih(t));
  }
  function $h(t, n, l) {
    return l(function () {
      Jh(n) && Ih(t);
    });
  }
  function Jh(t) {
    var n = t.getSnapshot;
    t = t.value;
    try {
      var l = n();
      return !we(t, l);
    } catch {
      return !0;
    }
  }
  function Ih(t) {
    var n = Ki(t, 2);
    n !== null && De(n, t, 2);
  }
  function yu(t) {
    var n = me();
    if (typeof t == 'function') {
      var l = t;
      if (((t = l()), bi)) {
        Rn(!0);
        try {
          l();
        } finally {
          Rn(!1);
        }
      }
    }
    return (
      (n.memoizedState = n.baseState = t),
      (n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pn,
        lastRenderedState: t,
      }),
      n
    );
  }
  function td(t, n, l, r) {
    return ((t.baseState = l), gu(t, Et, typeof r == 'function' ? r : pn));
  }
  function Rb(t, n, l, r, f) {
    if (Vl(t)) throw Error(s(485));
    if (((t = n.action), t !== null)) {
      var m = {
        payload: f,
        action: t,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (y) {
          m.listeners.push(y);
        },
      };
      (H.T !== null ? l(!0) : (m.isTransition = !1),
        r(m),
        (l = n.pending),
        l === null
          ? ((m.next = n.pending = m), ed(n, m))
          : ((m.next = l.next), (n.pending = l.next = m)));
    }
  }
  function ed(t, n) {
    var l = n.action,
      r = n.payload,
      f = t.state;
    if (n.isTransition) {
      var m = H.T,
        y = {};
      H.T = y;
      try {
        var _ = l(f, r),
          T = H.S;
        (T !== null && T(y, _), nd(t, n, _));
      } catch (z) {
        bu(t, n, z);
      } finally {
        H.T = m;
      }
    } else
      try {
        ((m = l(f, r)), nd(t, n, m));
      } catch (z) {
        bu(t, n, z);
      }
  }
  function nd(t, n, l) {
    l !== null && typeof l == 'object' && typeof l.then == 'function'
      ? l.then(
          function (r) {
            id(t, n, r);
          },
          function (r) {
            return bu(t, n, r);
          }
        )
      : id(t, n, l);
  }
  function id(t, n, l) {
    ((n.status = 'fulfilled'),
      (n.value = l),
      ad(n),
      (t.state = l),
      (n = t.pending),
      n !== null &&
        ((l = n.next),
        l === n ? (t.pending = null) : ((l = l.next), (n.next = l), ed(t, l))));
  }
  function bu(t, n, l) {
    var r = t.pending;
    if (((t.pending = null), r !== null)) {
      r = r.next;
      do ((n.status = 'rejected'), (n.reason = l), ad(n), (n = n.next));
      while (n !== r);
    }
    t.action = null;
  }
  function ad(t) {
    t = t.listeners;
    for (var n = 0; n < t.length; n++) (0, t[n])();
  }
  function sd(t, n) {
    return n;
  }
  function ld(t, n) {
    if (_t) {
      var l = Dt.formState;
      if (l !== null) {
        t: {
          var r = ct;
          if (_t) {
            if (Ht) {
              e: {
                for (var f = Ht, m = $e; f.nodeType !== 8; ) {
                  if (!m) {
                    f = null;
                    break e;
                  }
                  if (((f = Pe(f.nextSibling)), f === null)) {
                    f = null;
                    break e;
                  }
                }
                ((m = f.data), (f = m === 'F!' || m === 'F' ? f : null));
              }
              if (f) {
                ((Ht = Pe(f.nextSibling)), (r = f.data === 'F!'));
                break t;
              }
            }
            mi(r);
          }
          r = !1;
        }
        r && (n = l[0]);
      }
    }
    return (
      (l = me()),
      (l.memoizedState = l.baseState = n),
      (r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: sd,
        lastRenderedState: n,
      }),
      (l.queue = r),
      (l = Ed.bind(null, ct, r)),
      (r.dispatch = l),
      (r = yu(!1)),
      (m = wu.bind(null, ct, !1, r.queue)),
      (r = me()),
      (f = { state: n, dispatch: null, action: t, pending: null }),
      (r.queue = f),
      (l = Rb.bind(null, ct, f, m, l)),
      (f.dispatch = l),
      (r.memoizedState = t),
      [n, l, !1]
    );
  }
  function od(t) {
    var n = Xt();
    return rd(n, Et, t);
  }
  function rd(t, n, l) {
    if (
      ((n = gu(t, n, sd)[0]),
      (t = Ul(pn)[0]),
      typeof n == 'object' && n !== null && typeof n.then == 'function')
    )
      try {
        var r = ss(n);
      } catch (y) {
        throw y === Ia ? zl : y;
      }
    else r = n;
    n = Xt();
    var f = n.queue,
      m = f.dispatch;
    return (
      l !== n.memoizedState &&
        ((ct.flags |= 2048), aa(9, Yl(), zb.bind(null, f, l), null)),
      [r, m, t]
    );
  }
  function zb(t, n) {
    t.action = n;
  }
  function ud(t) {
    var n = Xt(),
      l = Et;
    if (l !== null) return rd(n, l, t);
    (Xt(), (n = n.memoizedState), (l = Xt()));
    var r = l.queue.dispatch;
    return ((l.memoizedState = t), [n, r, !1]);
  }
  function aa(t, n, l, r) {
    return (
      (t = { tag: t, create: l, deps: r, inst: n, next: null }),
      (n = ct.updateQueue),
      n === null && ((n = du()), (ct.updateQueue = n)),
      (l = n.lastEffect),
      l === null
        ? (n.lastEffect = t.next = t)
        : ((r = l.next), (l.next = t), (t.next = r), (n.lastEffect = t)),
      t
    );
  }
  function Yl() {
    return { destroy: void 0, resource: void 0 };
  }
  function cd() {
    return Xt().memoizedState;
  }
  function ql(t, n, l, r) {
    var f = me();
    ((r = r === void 0 ? null : r),
      (ct.flags |= t),
      (f.memoizedState = aa(1 | n, Yl(), l, r)));
  }
  function ls(t, n, l, r) {
    var f = Xt();
    r = r === void 0 ? null : r;
    var m = f.memoizedState.inst;
    Et !== null && r !== null && ru(r, Et.memoizedState.deps)
      ? (f.memoizedState = aa(n, m, l, r))
      : ((ct.flags |= t), (f.memoizedState = aa(1 | n, m, l, r)));
  }
  function fd(t, n) {
    ql(8390656, 8, t, n);
  }
  function hd(t, n) {
    ls(2048, 8, t, n);
  }
  function dd(t, n) {
    return ls(4, 2, t, n);
  }
  function md(t, n) {
    return ls(4, 4, t, n);
  }
  function gd(t, n) {
    if (typeof n == 'function') {
      t = t();
      var l = n(t);
      return function () {
        typeof l == 'function' ? l() : n(null);
      };
    }
    if (n != null)
      return (
        (t = t()),
        (n.current = t),
        function () {
          n.current = null;
        }
      );
  }
  function pd(t, n, l) {
    ((l = l != null ? l.concat([t]) : null), ls(4, 4, gd.bind(null, n, t), l));
  }
  function xu() {}
  function yd(t, n) {
    var l = Xt();
    n = n === void 0 ? null : n;
    var r = l.memoizedState;
    return n !== null && ru(n, r[1]) ? r[0] : ((l.memoizedState = [t, n]), t);
  }
  function bd(t, n) {
    var l = Xt();
    n = n === void 0 ? null : n;
    var r = l.memoizedState;
    if (n !== null && ru(n, r[1])) return r[0];
    if (((r = t()), bi)) {
      Rn(!0);
      try {
        t();
      } finally {
        Rn(!1);
      }
    }
    return ((l.memoizedState = [r, n]), r);
  }
  function vu(t, n, l) {
    return l === void 0 || (Un & 1073741824) !== 0
      ? (t.memoizedState = n)
      : ((t.memoizedState = l), (t = _m()), (ct.lanes |= t), (Fn |= t), l);
  }
  function xd(t, n, l, r) {
    return we(l, n)
      ? l
      : ea.current !== null
        ? ((t = vu(t, l, r)), we(t, n) || (Kt = !0), t)
        : (Un & 42) === 0
          ? ((Kt = !0), (t.memoizedState = l))
          : ((t = _m()), (ct.lanes |= t), (Fn |= t), n);
  }
  function vd(t, n, l, r, f) {
    var m = P.p;
    P.p = m !== 0 && 8 > m ? m : 8;
    var y = H.T,
      _ = {};
    ((H.T = _), wu(t, !1, n, l));
    try {
      var T = f(),
        z = H.S;
      if (
        (z !== null && z(_, T),
        T !== null && typeof T == 'object' && typeof T.then == 'function')
      ) {
        var U = Db(T, r);
        os(t, n, U, Ae(t));
      } else os(t, n, r, Ae(t));
    } catch (V) {
      os(t, n, { then: function () {}, status: 'rejected', reason: V }, Ae());
    } finally {
      ((P.p = m), (H.T = y));
    }
  }
  function Nb() {}
  function _u(t, n, l, r) {
    if (t.tag !== 5) throw Error(s(476));
    var f = _d(t).queue;
    vd(
      t,
      f,
      n,
      et,
      l === null
        ? Nb
        : function () {
            return (Sd(t), l(r));
          }
    );
  }
  function _d(t) {
    var n = t.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: et,
      baseState: et,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pn,
        lastRenderedState: et,
      },
      next: null,
    };
    var l = {};
    return (
      (n.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: pn,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = n),
      (t = t.alternate),
      t !== null && (t.memoizedState = n),
      n
    );
  }
  function Sd(t) {
    var n = _d(t).next.queue;
    os(t, n, {}, Ae());
  }
  function Su() {
    return se(Es);
  }
  function wd() {
    return Xt().memoizedState;
  }
  function Md() {
    return Xt().memoizedState;
  }
  function kb(t) {
    for (var n = t.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var l = Ae();
          t = Hn(l);
          var r = Bn(n, t, l);
          (r !== null && (De(r, n, l), es(r, n, l)),
            (n = { cache: Jr() }),
            (t.payload = n));
          return;
      }
      n = n.return;
    }
  }
  function Lb(t, n, l) {
    var r = Ae();
    ((l = {
      lane: r,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Vl(t)
        ? Td(n, l)
        : ((l = Vr(t, n, l, r)), l !== null && (De(l, t, r), Od(l, n, r))));
  }
  function Ed(t, n, l) {
    var r = Ae();
    os(t, n, l, r);
  }
  function os(t, n, l, r) {
    var f = {
      lane: r,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Vl(t)) Td(n, f);
    else {
      var m = t.alternate;
      if (
        t.lanes === 0 &&
        (m === null || m.lanes === 0) &&
        ((m = n.lastRenderedReducer), m !== null)
      )
        try {
          var y = n.lastRenderedState,
            _ = m(y, l);
          if (((f.hasEagerState = !0), (f.eagerState = _), we(_, y)))
            return (El(t, n, f, 0), Dt === null && Ml(), !1);
        } catch {
        } finally {
        }
      if (((l = Vr(t, n, f, r)), l !== null))
        return (De(l, t, r), Od(l, n, r), !0);
    }
    return !1;
  }
  function wu(t, n, l, r) {
    if (
      ((r = {
        lane: 2,
        revertLane: ec(),
        action: r,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Vl(t))
    ) {
      if (n) throw Error(s(479));
    } else ((n = Vr(t, l, r, 2)), n !== null && De(n, t, 2));
  }
  function Vl(t) {
    var n = t.alternate;
    return t === ct || (n !== null && n === ct);
  }
  function Td(t, n) {
    na = Ll = !0;
    var l = t.pending;
    (l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
      (t.pending = n));
  }
  function Od(t, n, l) {
    if ((l & 4194048) !== 0) {
      var r = n.lanes;
      ((r &= t.pendingLanes), (l |= r), (n.lanes = l), kf(t, l));
    }
  }
  var Xl = {
      readContext: se,
      use: Bl,
      useCallback: Ut,
      useContext: Ut,
      useEffect: Ut,
      useImperativeHandle: Ut,
      useLayoutEffect: Ut,
      useInsertionEffect: Ut,
      useMemo: Ut,
      useReducer: Ut,
      useRef: Ut,
      useState: Ut,
      useDebugValue: Ut,
      useDeferredValue: Ut,
      useTransition: Ut,
      useSyncExternalStore: Ut,
      useId: Ut,
      useHostTransitionStatus: Ut,
      useFormState: Ut,
      useActionState: Ut,
      useOptimistic: Ut,
      useMemoCache: Ut,
      useCacheRefresh: Ut,
    },
    Ad = {
      readContext: se,
      use: Bl,
      useCallback: function (t, n) {
        return ((me().memoizedState = [t, n === void 0 ? null : n]), t);
      },
      useContext: se,
      useEffect: fd,
      useImperativeHandle: function (t, n, l) {
        ((l = l != null ? l.concat([t]) : null),
          ql(4194308, 4, gd.bind(null, n, t), l));
      },
      useLayoutEffect: function (t, n) {
        return ql(4194308, 4, t, n);
      },
      useInsertionEffect: function (t, n) {
        ql(4, 2, t, n);
      },
      useMemo: function (t, n) {
        var l = me();
        n = n === void 0 ? null : n;
        var r = t();
        if (bi) {
          Rn(!0);
          try {
            t();
          } finally {
            Rn(!1);
          }
        }
        return ((l.memoizedState = [r, n]), r);
      },
      useReducer: function (t, n, l) {
        var r = me();
        if (l !== void 0) {
          var f = l(n);
          if (bi) {
            Rn(!0);
            try {
              l(n);
            } finally {
              Rn(!1);
            }
          }
        } else f = n;
        return (
          (r.memoizedState = r.baseState = f),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: f,
          }),
          (r.queue = t),
          (t = t.dispatch = Lb.bind(null, ct, t)),
          [r.memoizedState, t]
        );
      },
      useRef: function (t) {
        var n = me();
        return ((t = { current: t }), (n.memoizedState = t));
      },
      useState: function (t) {
        t = yu(t);
        var n = t.queue,
          l = Ed.bind(null, ct, n);
        return ((n.dispatch = l), [t.memoizedState, l]);
      },
      useDebugValue: xu,
      useDeferredValue: function (t, n) {
        var l = me();
        return vu(l, t, n);
      },
      useTransition: function () {
        var t = yu(!1);
        return (
          (t = vd.bind(null, ct, t.queue, !0, !1)),
          (me().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, n, l) {
        var r = ct,
          f = me();
        if (_t) {
          if (l === void 0) throw Error(s(407));
          l = l();
        } else {
          if (((l = n()), Dt === null)) throw Error(s(349));
          (yt & 124) !== 0 || Kh(r, n, l);
        }
        f.memoizedState = l;
        var m = { value: l, getSnapshot: n };
        return (
          (f.queue = m),
          fd($h.bind(null, r, m, t), [t]),
          (r.flags |= 2048),
          aa(9, Yl(), Wh.bind(null, r, m, l, n), null),
          l
        );
      },
      useId: function () {
        var t = me(),
          n = Dt.identifierPrefix;
        if (_t) {
          var l = dn,
            r = hn;
          ((l = (r & ~(1 << (32 - Se(r) - 1))).toString(32) + l),
            (n = '«' + n + 'R' + l),
            (l = Hl++),
            0 < l && (n += 'H' + l.toString(32)),
            (n += '»'));
        } else ((l = Cb++), (n = '«' + n + 'r' + l.toString(32) + '»'));
        return (t.memoizedState = n);
      },
      useHostTransitionStatus: Su,
      useFormState: ld,
      useActionState: ld,
      useOptimistic: function (t) {
        var n = me();
        n.memoizedState = n.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (n.queue = l),
          (n = wu.bind(null, ct, !0, l)),
          (l.dispatch = n),
          [t, n]
        );
      },
      useMemoCache: mu,
      useCacheRefresh: function () {
        return (me().memoizedState = kb.bind(null, ct));
      },
    },
    Dd = {
      readContext: se,
      use: Bl,
      useCallback: yd,
      useContext: se,
      useEffect: hd,
      useImperativeHandle: pd,
      useInsertionEffect: dd,
      useLayoutEffect: md,
      useMemo: bd,
      useReducer: Ul,
      useRef: cd,
      useState: function () {
        return Ul(pn);
      },
      useDebugValue: xu,
      useDeferredValue: function (t, n) {
        var l = Xt();
        return xd(l, Et.memoizedState, t, n);
      },
      useTransition: function () {
        var t = Ul(pn)[0],
          n = Xt().memoizedState;
        return [typeof t == 'boolean' ? t : ss(t), n];
      },
      useSyncExternalStore: Zh,
      useId: wd,
      useHostTransitionStatus: Su,
      useFormState: od,
      useActionState: od,
      useOptimistic: function (t, n) {
        var l = Xt();
        return td(l, Et, t, n);
      },
      useMemoCache: mu,
      useCacheRefresh: Md,
    },
    Hb = {
      readContext: se,
      use: Bl,
      useCallback: yd,
      useContext: se,
      useEffect: hd,
      useImperativeHandle: pd,
      useInsertionEffect: dd,
      useLayoutEffect: md,
      useMemo: bd,
      useReducer: pu,
      useRef: cd,
      useState: function () {
        return pu(pn);
      },
      useDebugValue: xu,
      useDeferredValue: function (t, n) {
        var l = Xt();
        return Et === null ? vu(l, t, n) : xd(l, Et.memoizedState, t, n);
      },
      useTransition: function () {
        var t = pu(pn)[0],
          n = Xt().memoizedState;
        return [typeof t == 'boolean' ? t : ss(t), n];
      },
      useSyncExternalStore: Zh,
      useId: wd,
      useHostTransitionStatus: Su,
      useFormState: ud,
      useActionState: ud,
      useOptimistic: function (t, n) {
        var l = Xt();
        return Et !== null
          ? td(l, Et, t, n)
          : ((l.baseState = t), [t, l.queue.dispatch]);
      },
      useMemoCache: mu,
      useCacheRefresh: Md,
    },
    sa = null,
    rs = 0;
  function Gl(t) {
    var n = rs;
    return ((rs += 1), sa === null && (sa = []), Yh(sa, t, n));
  }
  function us(t, n) {
    ((n = n.props.ref), (t.ref = n !== void 0 ? n : null));
  }
  function Pl(t, n) {
    throw n.$$typeof === b
      ? Error(s(525))
      : ((t = Object.prototype.toString.call(n)),
        Error(
          s(
            31,
            t === '[object Object]'
              ? 'object with keys {' + Object.keys(n).join(', ') + '}'
              : t
          )
        ));
  }
  function Cd(t) {
    var n = t._init;
    return n(t._payload);
  }
  function jd(t) {
    function n(C, A) {
      if (t) {
        var R = C.deletions;
        R === null ? ((C.deletions = [A]), (C.flags |= 16)) : R.push(A);
      }
    }
    function l(C, A) {
      if (!t) return null;
      for (; A !== null; ) (n(C, A), (A = A.sibling));
      return null;
    }
    function r(C) {
      for (var A = new Map(); C !== null; )
        (C.key !== null ? A.set(C.key, C) : A.set(C.index, C), (C = C.sibling));
      return A;
    }
    function f(C, A) {
      return ((C = fn(C, A)), (C.index = 0), (C.sibling = null), C);
    }
    function m(C, A, R) {
      return (
        (C.index = R),
        t
          ? ((R = C.alternate),
            R !== null
              ? ((R = R.index), R < A ? ((C.flags |= 67108866), A) : R)
              : ((C.flags |= 67108866), A))
          : ((C.flags |= 1048576), A)
      );
    }
    function y(C) {
      return (t && C.alternate === null && (C.flags |= 67108866), C);
    }
    function _(C, A, R, q) {
      return A === null || A.tag !== 6
        ? ((A = Gr(R, C.mode, q)), (A.return = C), A)
        : ((A = f(A, R)), (A.return = C), A);
    }
    function T(C, A, R, q) {
      var $ = R.type;
      return $ === w
        ? U(C, A, R.props.children, q, R.key)
        : A !== null &&
            (A.elementType === $ ||
              (typeof $ == 'object' &&
                $ !== null &&
                $.$$typeof === Q &&
                Cd($) === A.type))
          ? ((A = f(A, R.props)), us(A, R), (A.return = C), A)
          : ((A = Ol(R.type, R.key, R.props, null, C.mode, q)),
            us(A, R),
            (A.return = C),
            A);
    }
    function z(C, A, R, q) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== R.containerInfo ||
        A.stateNode.implementation !== R.implementation
        ? ((A = Pr(R, C.mode, q)), (A.return = C), A)
        : ((A = f(A, R.children || [])), (A.return = C), A);
    }
    function U(C, A, R, q, $) {
      return A === null || A.tag !== 7
        ? ((A = ci(R, C.mode, q, $)), (A.return = C), A)
        : ((A = f(A, R)), (A.return = C), A);
    }
    function V(C, A, R) {
      if (
        (typeof A == 'string' && A !== '') ||
        typeof A == 'number' ||
        typeof A == 'bigint'
      )
        return ((A = Gr('' + A, C.mode, R)), (A.return = C), A);
      if (typeof A == 'object' && A !== null) {
        switch (A.$$typeof) {
          case v:
            return (
              (R = Ol(A.type, A.key, A.props, null, C.mode, R)),
              us(R, A),
              (R.return = C),
              R
            );
          case S:
            return ((A = Pr(A, C.mode, R)), (A.return = C), A);
          case Q:
            var q = A._init;
            return ((A = q(A._payload)), V(C, A, R));
        }
        if (ft(A) || ot(A))
          return ((A = ci(A, C.mode, R, null)), (A.return = C), A);
        if (typeof A.then == 'function') return V(C, Gl(A), R);
        if (A.$$typeof === Y) return V(C, jl(C, A), R);
        Pl(C, A);
      }
      return null;
    }
    function N(C, A, R, q) {
      var $ = A !== null ? A.key : null;
      if (
        (typeof R == 'string' && R !== '') ||
        typeof R == 'number' ||
        typeof R == 'bigint'
      )
        return $ !== null ? null : _(C, A, '' + R, q);
      if (typeof R == 'object' && R !== null) {
        switch (R.$$typeof) {
          case v:
            return R.key === $ ? T(C, A, R, q) : null;
          case S:
            return R.key === $ ? z(C, A, R, q) : null;
          case Q:
            return (($ = R._init), (R = $(R._payload)), N(C, A, R, q));
        }
        if (ft(R) || ot(R)) return $ !== null ? null : U(C, A, R, q, null);
        if (typeof R.then == 'function') return N(C, A, Gl(R), q);
        if (R.$$typeof === Y) return N(C, A, jl(C, R), q);
        Pl(C, R);
      }
      return null;
    }
    function L(C, A, R, q, $) {
      if (
        (typeof q == 'string' && q !== '') ||
        typeof q == 'number' ||
        typeof q == 'bigint'
      )
        return ((C = C.get(R) || null), _(A, C, '' + q, $));
      if (typeof q == 'object' && q !== null) {
        switch (q.$$typeof) {
          case v:
            return (
              (C = C.get(q.key === null ? R : q.key) || null),
              T(A, C, q, $)
            );
          case S:
            return (
              (C = C.get(q.key === null ? R : q.key) || null),
              z(A, C, q, $)
            );
          case Q:
            var dt = q._init;
            return ((q = dt(q._payload)), L(C, A, R, q, $));
        }
        if (ft(q) || ot(q))
          return ((C = C.get(R) || null), U(A, C, q, $, null));
        if (typeof q.then == 'function') return L(C, A, R, Gl(q), $);
        if (q.$$typeof === Y) return L(C, A, R, jl(A, q), $);
        Pl(A, q);
      }
      return null;
    }
    function lt(C, A, R, q) {
      for (
        var $ = null, dt = null, tt = A, at = (A = 0), $t = null;
        tt !== null && at < R.length;
        at++
      ) {
        tt.index > at ? (($t = tt), (tt = null)) : ($t = tt.sibling);
        var vt = N(C, tt, R[at], q);
        if (vt === null) {
          tt === null && (tt = $t);
          break;
        }
        (t && tt && vt.alternate === null && n(C, tt),
          (A = m(vt, A, at)),
          dt === null ? ($ = vt) : (dt.sibling = vt),
          (dt = vt),
          (tt = $t));
      }
      if (at === R.length) return (l(C, tt), _t && hi(C, at), $);
      if (tt === null) {
        for (; at < R.length; at++)
          ((tt = V(C, R[at], q)),
            tt !== null &&
              ((A = m(tt, A, at)),
              dt === null ? ($ = tt) : (dt.sibling = tt),
              (dt = tt)));
        return (_t && hi(C, at), $);
      }
      for (tt = r(tt); at < R.length; at++)
        (($t = L(tt, C, at, R[at], q)),
          $t !== null &&
            (t &&
              $t.alternate !== null &&
              tt.delete($t.key === null ? at : $t.key),
            (A = m($t, A, at)),
            dt === null ? ($ = $t) : (dt.sibling = $t),
            (dt = $t)));
      return (
        t &&
          tt.forEach(function (ei) {
            return n(C, ei);
          }),
        _t && hi(C, at),
        $
      );
    }
    function it(C, A, R, q) {
      if (R == null) throw Error(s(151));
      for (
        var $ = null, dt = null, tt = A, at = (A = 0), $t = null, vt = R.next();
        tt !== null && !vt.done;
        at++, vt = R.next()
      ) {
        tt.index > at ? (($t = tt), (tt = null)) : ($t = tt.sibling);
        var ei = N(C, tt, vt.value, q);
        if (ei === null) {
          tt === null && (tt = $t);
          break;
        }
        (t && tt && ei.alternate === null && n(C, tt),
          (A = m(ei, A, at)),
          dt === null ? ($ = ei) : (dt.sibling = ei),
          (dt = ei),
          (tt = $t));
      }
      if (vt.done) return (l(C, tt), _t && hi(C, at), $);
      if (tt === null) {
        for (; !vt.done; at++, vt = R.next())
          ((vt = V(C, vt.value, q)),
            vt !== null &&
              ((A = m(vt, A, at)),
              dt === null ? ($ = vt) : (dt.sibling = vt),
              (dt = vt)));
        return (_t && hi(C, at), $);
      }
      for (tt = r(tt); !vt.done; at++, vt = R.next())
        ((vt = L(tt, C, at, vt.value, q)),
          vt !== null &&
            (t &&
              vt.alternate !== null &&
              tt.delete(vt.key === null ? at : vt.key),
            (A = m(vt, A, at)),
            dt === null ? ($ = vt) : (dt.sibling = vt),
            (dt = vt)));
      return (
        t &&
          tt.forEach(function (Bx) {
            return n(C, Bx);
          }),
        _t && hi(C, at),
        $
      );
    }
    function Ot(C, A, R, q) {
      if (
        (typeof R == 'object' &&
          R !== null &&
          R.type === w &&
          R.key === null &&
          (R = R.props.children),
        typeof R == 'object' && R !== null)
      ) {
        switch (R.$$typeof) {
          case v:
            t: {
              for (var $ = R.key; A !== null; ) {
                if (A.key === $) {
                  if ((($ = R.type), $ === w)) {
                    if (A.tag === 7) {
                      (l(C, A.sibling),
                        (q = f(A, R.props.children)),
                        (q.return = C),
                        (C = q));
                      break t;
                    }
                  } else if (
                    A.elementType === $ ||
                    (typeof $ == 'object' &&
                      $ !== null &&
                      $.$$typeof === Q &&
                      Cd($) === A.type)
                  ) {
                    (l(C, A.sibling),
                      (q = f(A, R.props)),
                      us(q, R),
                      (q.return = C),
                      (C = q));
                    break t;
                  }
                  l(C, A);
                  break;
                } else n(C, A);
                A = A.sibling;
              }
              R.type === w
                ? ((q = ci(R.props.children, C.mode, q, R.key)),
                  (q.return = C),
                  (C = q))
                : ((q = Ol(R.type, R.key, R.props, null, C.mode, q)),
                  us(q, R),
                  (q.return = C),
                  (C = q));
            }
            return y(C);
          case S:
            t: {
              for ($ = R.key; A !== null; ) {
                if (A.key === $)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === R.containerInfo &&
                    A.stateNode.implementation === R.implementation
                  ) {
                    (l(C, A.sibling),
                      (q = f(A, R.children || [])),
                      (q.return = C),
                      (C = q));
                    break t;
                  } else {
                    l(C, A);
                    break;
                  }
                else n(C, A);
                A = A.sibling;
              }
              ((q = Pr(R, C.mode, q)), (q.return = C), (C = q));
            }
            return y(C);
          case Q:
            return (($ = R._init), (R = $(R._payload)), Ot(C, A, R, q));
        }
        if (ft(R)) return lt(C, A, R, q);
        if (ot(R)) {
          if ((($ = ot(R)), typeof $ != 'function')) throw Error(s(150));
          return ((R = $.call(R)), it(C, A, R, q));
        }
        if (typeof R.then == 'function') return Ot(C, A, Gl(R), q);
        if (R.$$typeof === Y) return Ot(C, A, jl(C, R), q);
        Pl(C, R);
      }
      return (typeof R == 'string' && R !== '') ||
        typeof R == 'number' ||
        typeof R == 'bigint'
        ? ((R = '' + R),
          A !== null && A.tag === 6
            ? (l(C, A.sibling), (q = f(A, R)), (q.return = C), (C = q))
            : (l(C, A), (q = Gr(R, C.mode, q)), (q.return = C), (C = q)),
          y(C))
        : l(C, A);
    }
    return function (C, A, R, q) {
      try {
        rs = 0;
        var $ = Ot(C, A, R, q);
        return ((sa = null), $);
      } catch (tt) {
        if (tt === Ia || tt === zl) throw tt;
        var dt = Me(29, tt, null, C.mode);
        return ((dt.lanes = q), (dt.return = C), dt);
      } finally {
      }
    };
  }
  var la = jd(!0),
    Rd = jd(!1),
    Le = X(null),
    Je = null;
  function Yn(t) {
    var n = t.alternate;
    (Z(Pt, Pt.current & 1),
      Z(Le, t),
      Je === null &&
        (n === null || ea.current !== null || n.memoizedState !== null) &&
        (Je = t));
  }
  function zd(t) {
    if (t.tag === 22) {
      if ((Z(Pt, Pt.current), Z(Le, t), Je === null)) {
        var n = t.alternate;
        n !== null && n.memoizedState !== null && (Je = t);
      }
    } else qn();
  }
  function qn() {
    (Z(Pt, Pt.current), Z(Le, Le.current));
  }
  function yn(t) {
    (W(Le), Je === t && (Je = null), W(Pt));
  }
  var Pt = X(0);
  function Fl(t) {
    for (var n = t; n !== null; ) {
      if (n.tag === 13) {
        var l = n.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === '$?' || dc(l))
        )
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return null;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
    return null;
  }
  function Mu(t, n, l, r) {
    ((n = t.memoizedState),
      (l = l(r, n)),
      (l = l == null ? n : p({}, n, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l));
  }
  var Eu = {
    enqueueSetState: function (t, n, l) {
      t = t._reactInternals;
      var r = Ae(),
        f = Hn(r);
      ((f.payload = n),
        l != null && (f.callback = l),
        (n = Bn(t, f, r)),
        n !== null && (De(n, t, r), es(n, t, r)));
    },
    enqueueReplaceState: function (t, n, l) {
      t = t._reactInternals;
      var r = Ae(),
        f = Hn(r);
      ((f.tag = 1),
        (f.payload = n),
        l != null && (f.callback = l),
        (n = Bn(t, f, r)),
        n !== null && (De(n, t, r), es(n, t, r)));
    },
    enqueueForceUpdate: function (t, n) {
      t = t._reactInternals;
      var l = Ae(),
        r = Hn(l);
      ((r.tag = 2),
        n != null && (r.callback = n),
        (n = Bn(t, r, l)),
        n !== null && (De(n, t, l), es(n, t, l)));
    },
  };
  function Nd(t, n, l, r, f, m, y) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == 'function'
        ? t.shouldComponentUpdate(r, m, y)
        : n.prototype && n.prototype.isPureReactComponent
          ? !Pa(l, r) || !Pa(f, m)
          : !0
    );
  }
  function kd(t, n, l, r) {
    ((t = n.state),
      typeof n.componentWillReceiveProps == 'function' &&
        n.componentWillReceiveProps(l, r),
      typeof n.UNSAFE_componentWillReceiveProps == 'function' &&
        n.UNSAFE_componentWillReceiveProps(l, r),
      n.state !== t && Eu.enqueueReplaceState(n, n.state, null));
  }
  function xi(t, n) {
    var l = n;
    if ('ref' in n) {
      l = {};
      for (var r in n) r !== 'ref' && (l[r] = n[r]);
    }
    if ((t = t.defaultProps)) {
      l === n && (l = p({}, l));
      for (var f in t) l[f] === void 0 && (l[f] = t[f]);
    }
    return l;
  }
  var Ql =
    typeof reportError == 'function'
      ? reportError
      : function (t) {
          if (
            typeof window == 'object' &&
            typeof window.ErrorEvent == 'function'
          ) {
            var n = new window.ErrorEvent('error', {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == 'object' &&
                t !== null &&
                typeof t.message == 'string'
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(n)) return;
          } else if (
            typeof process == 'object' &&
            typeof process.emit == 'function'
          ) {
            process.emit('uncaughtException', t);
            return;
          }
          console.error(t);
        };
  function Ld(t) {
    Ql(t);
  }
  function Hd(t) {
    console.error(t);
  }
  function Bd(t) {
    Ql(t);
  }
  function Zl(t, n) {
    try {
      var l = t.onUncaughtError;
      l(n.value, { componentStack: n.stack });
    } catch (r) {
      setTimeout(function () {
        throw r;
      });
    }
  }
  function Ud(t, n, l) {
    try {
      var r = t.onCaughtError;
      r(l.value, {
        componentStack: l.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null,
      });
    } catch (f) {
      setTimeout(function () {
        throw f;
      });
    }
  }
  function Tu(t, n, l) {
    return (
      (l = Hn(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Zl(t, n);
      }),
      l
    );
  }
  function Yd(t) {
    return ((t = Hn(t)), (t.tag = 3), t);
  }
  function qd(t, n, l, r) {
    var f = l.type.getDerivedStateFromError;
    if (typeof f == 'function') {
      var m = r.value;
      ((t.payload = function () {
        return f(m);
      }),
        (t.callback = function () {
          Ud(n, l, r);
        }));
    }
    var y = l.stateNode;
    y !== null &&
      typeof y.componentDidCatch == 'function' &&
      (t.callback = function () {
        (Ud(n, l, r),
          typeof f != 'function' &&
            (Qn === null ? (Qn = new Set([this])) : Qn.add(this)));
        var _ = r.stack;
        this.componentDidCatch(r.value, {
          componentStack: _ !== null ? _ : '',
        });
      });
  }
  function Bb(t, n, l, r, f) {
    if (
      ((l.flags |= 32768),
      r !== null && typeof r == 'object' && typeof r.then == 'function')
    ) {
      if (
        ((n = l.alternate),
        n !== null && Wa(n, l, f, !0),
        (l = Le.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              Je === null ? Wu() : l.alternate === null && Bt === 0 && (Bt = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = f),
              r === eu
                ? (l.flags |= 16384)
                : ((n = l.updateQueue),
                  n === null ? (l.updateQueue = new Set([r])) : n.add(r),
                  Ju(t, r, f)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              r === eu
                ? (l.flags |= 16384)
                : ((n = l.updateQueue),
                  n === null
                    ? ((n = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([r]),
                      }),
                      (l.updateQueue = n))
                    : ((l = n.retryQueue),
                      l === null ? (n.retryQueue = new Set([r])) : l.add(r)),
                  Ju(t, r, f)),
              !1
            );
        }
        throw Error(s(435, l.tag));
      }
      return (Ju(t, r, f), Wu(), !1);
    }
    if (_t)
      return (
        (n = Le.current),
        n !== null
          ? ((n.flags & 65536) === 0 && (n.flags |= 256),
            (n.flags |= 65536),
            (n.lanes = f),
            r !== Zr && ((t = Error(s(422), { cause: r })), Ka(Re(t, l))))
          : (r !== Zr && ((n = Error(s(423), { cause: r })), Ka(Re(n, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (f &= -f),
            (t.lanes |= f),
            (r = Re(r, l)),
            (f = Tu(t.stateNode, r, f)),
            au(t, f),
            Bt !== 4 && (Bt = 2)),
        !1
      );
    var m = Error(s(520), { cause: r });
    if (
      ((m = Re(m, l)),
      ps === null ? (ps = [m]) : ps.push(m),
      Bt !== 4 && (Bt = 2),
      n === null)
    )
      return !0;
    ((r = Re(r, l)), (l = n));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = f & -f),
            (l.lanes |= t),
            (t = Tu(l.stateNode, r, t)),
            au(l, t),
            !1
          );
        case 1:
          if (
            ((n = l.type),
            (m = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof n.getDerivedStateFromError == 'function' ||
                (m !== null &&
                  typeof m.componentDidCatch == 'function' &&
                  (Qn === null || !Qn.has(m)))))
          )
            return (
              (l.flags |= 65536),
              (f &= -f),
              (l.lanes |= f),
              (f = Yd(f)),
              qd(f, t, l, r),
              au(l, f),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Vd = Error(s(461)),
    Kt = !1;
  function It(t, n, l, r) {
    n.child = t === null ? Rd(n, null, l, r) : la(n, t.child, l, r);
  }
  function Xd(t, n, l, r, f) {
    l = l.render;
    var m = n.ref;
    if ('ref' in r) {
      var y = {};
      for (var _ in r) _ !== 'ref' && (y[_] = r[_]);
    } else y = r;
    return (
      pi(n),
      (r = uu(t, n, l, y, m, f)),
      (_ = cu()),
      t !== null && !Kt
        ? (fu(t, n, f), bn(t, n, f))
        : (_t && _ && Fr(n), (n.flags |= 1), It(t, n, r, f), n.child)
    );
  }
  function Gd(t, n, l, r, f) {
    if (t === null) {
      var m = l.type;
      return typeof m == 'function' &&
        !Xr(m) &&
        m.defaultProps === void 0 &&
        l.compare === null
        ? ((n.tag = 15), (n.type = m), Pd(t, n, m, r, f))
        : ((t = Ol(l.type, null, r, n, n.mode, f)),
          (t.ref = n.ref),
          (t.return = n),
          (n.child = t));
    }
    if (((m = t.child), !Nu(t, f))) {
      var y = m.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : Pa), l(y, r) && t.ref === n.ref)
      )
        return bn(t, n, f);
    }
    return (
      (n.flags |= 1),
      (t = fn(m, r)),
      (t.ref = n.ref),
      (t.return = n),
      (n.child = t)
    );
  }
  function Pd(t, n, l, r, f) {
    if (t !== null) {
      var m = t.memoizedProps;
      if (Pa(m, r) && t.ref === n.ref)
        if (((Kt = !1), (n.pendingProps = r = m), Nu(t, f)))
          (t.flags & 131072) !== 0 && (Kt = !0);
        else return ((n.lanes = t.lanes), bn(t, n, f));
    }
    return Ou(t, n, l, r, f);
  }
  function Fd(t, n, l) {
    var r = n.pendingProps,
      f = r.children,
      m = t !== null ? t.memoizedState : null;
    if (r.mode === 'hidden') {
      if ((n.flags & 128) !== 0) {
        if (((r = m !== null ? m.baseLanes | l : l), t !== null)) {
          for (f = n.child = t.child, m = 0; f !== null; )
            ((m = m | f.lanes | f.childLanes), (f = f.sibling));
          n.childLanes = m & ~r;
        } else ((n.childLanes = 0), (n.child = null));
        return Qd(t, n, r, l);
      }
      if ((l & 536870912) !== 0)
        ((n.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Rl(n, m !== null ? m.cachePool : null),
          m !== null ? Ph(n, m) : lu(),
          zd(n));
      else
        return (
          (n.lanes = n.childLanes = 536870912),
          Qd(t, n, m !== null ? m.baseLanes | l : l, l)
        );
    } else
      m !== null
        ? (Rl(n, m.cachePool), Ph(n, m), qn(), (n.memoizedState = null))
        : (t !== null && Rl(n, null), lu(), qn());
    return (It(t, n, f, l), n.child);
  }
  function Qd(t, n, l, r) {
    var f = tu();
    return (
      (f = f === null ? null : { parent: Gt._currentValue, pool: f }),
      (n.memoizedState = { baseLanes: l, cachePool: f }),
      t !== null && Rl(n, null),
      lu(),
      zd(n),
      t !== null && Wa(t, n, r, !0),
      null
    );
  }
  function Kl(t, n) {
    var l = n.ref;
    if (l === null) t !== null && t.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof l != 'function' && typeof l != 'object') throw Error(s(284));
      (t === null || t.ref !== l) && (n.flags |= 4194816);
    }
  }
  function Ou(t, n, l, r, f) {
    return (
      pi(n),
      (l = uu(t, n, l, r, void 0, f)),
      (r = cu()),
      t !== null && !Kt
        ? (fu(t, n, f), bn(t, n, f))
        : (_t && r && Fr(n), (n.flags |= 1), It(t, n, l, f), n.child)
    );
  }
  function Zd(t, n, l, r, f, m) {
    return (
      pi(n),
      (n.updateQueue = null),
      (l = Qh(n, r, l, f)),
      Fh(t),
      (r = cu()),
      t !== null && !Kt
        ? (fu(t, n, m), bn(t, n, m))
        : (_t && r && Fr(n), (n.flags |= 1), It(t, n, l, m), n.child)
    );
  }
  function Kd(t, n, l, r, f) {
    if ((pi(n), n.stateNode === null)) {
      var m = Wi,
        y = l.contextType;
      (typeof y == 'object' && y !== null && (m = se(y)),
        (m = new l(r, m)),
        (n.memoizedState =
          m.state !== null && m.state !== void 0 ? m.state : null),
        (m.updater = Eu),
        (n.stateNode = m),
        (m._reactInternals = n),
        (m = n.stateNode),
        (m.props = r),
        (m.state = n.memoizedState),
        (m.refs = {}),
        nu(n),
        (y = l.contextType),
        (m.context = typeof y == 'object' && y !== null ? se(y) : Wi),
        (m.state = n.memoizedState),
        (y = l.getDerivedStateFromProps),
        typeof y == 'function' && (Mu(n, l, y, r), (m.state = n.memoizedState)),
        typeof l.getDerivedStateFromProps == 'function' ||
          typeof m.getSnapshotBeforeUpdate == 'function' ||
          (typeof m.UNSAFE_componentWillMount != 'function' &&
            typeof m.componentWillMount != 'function') ||
          ((y = m.state),
          typeof m.componentWillMount == 'function' && m.componentWillMount(),
          typeof m.UNSAFE_componentWillMount == 'function' &&
            m.UNSAFE_componentWillMount(),
          y !== m.state && Eu.enqueueReplaceState(m, m.state, null),
          is(n, r, m, f),
          ns(),
          (m.state = n.memoizedState)),
        typeof m.componentDidMount == 'function' && (n.flags |= 4194308),
        (r = !0));
    } else if (t === null) {
      m = n.stateNode;
      var _ = n.memoizedProps,
        T = xi(l, _);
      m.props = T;
      var z = m.context,
        U = l.contextType;
      ((y = Wi), typeof U == 'object' && U !== null && (y = se(U)));
      var V = l.getDerivedStateFromProps;
      ((U =
        typeof V == 'function' ||
        typeof m.getSnapshotBeforeUpdate == 'function'),
        (_ = n.pendingProps !== _),
        U ||
          (typeof m.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof m.componentWillReceiveProps != 'function') ||
          ((_ || z !== y) && kd(n, m, r, y)),
        (Ln = !1));
      var N = n.memoizedState;
      ((m.state = N),
        is(n, r, m, f),
        ns(),
        (z = n.memoizedState),
        _ || N !== z || Ln
          ? (typeof V == 'function' && (Mu(n, l, V, r), (z = n.memoizedState)),
            (T = Ln || Nd(n, l, T, r, N, z, y))
              ? (U ||
                  (typeof m.UNSAFE_componentWillMount != 'function' &&
                    typeof m.componentWillMount != 'function') ||
                  (typeof m.componentWillMount == 'function' &&
                    m.componentWillMount(),
                  typeof m.UNSAFE_componentWillMount == 'function' &&
                    m.UNSAFE_componentWillMount()),
                typeof m.componentDidMount == 'function' &&
                  (n.flags |= 4194308))
              : (typeof m.componentDidMount == 'function' &&
                  (n.flags |= 4194308),
                (n.memoizedProps = r),
                (n.memoizedState = z)),
            (m.props = r),
            (m.state = z),
            (m.context = y),
            (r = T))
          : (typeof m.componentDidMount == 'function' && (n.flags |= 4194308),
            (r = !1)));
    } else {
      ((m = n.stateNode),
        iu(t, n),
        (y = n.memoizedProps),
        (U = xi(l, y)),
        (m.props = U),
        (V = n.pendingProps),
        (N = m.context),
        (z = l.contextType),
        (T = Wi),
        typeof z == 'object' && z !== null && (T = se(z)),
        (_ = l.getDerivedStateFromProps),
        (z =
          typeof _ == 'function' ||
          typeof m.getSnapshotBeforeUpdate == 'function') ||
          (typeof m.UNSAFE_componentWillReceiveProps != 'function' &&
            typeof m.componentWillReceiveProps != 'function') ||
          ((y !== V || N !== T) && kd(n, m, r, T)),
        (Ln = !1),
        (N = n.memoizedState),
        (m.state = N),
        is(n, r, m, f),
        ns());
      var L = n.memoizedState;
      y !== V ||
      N !== L ||
      Ln ||
      (t !== null && t.dependencies !== null && Cl(t.dependencies))
        ? (typeof _ == 'function' && (Mu(n, l, _, r), (L = n.memoizedState)),
          (U =
            Ln ||
            Nd(n, l, U, r, N, L, T) ||
            (t !== null && t.dependencies !== null && Cl(t.dependencies)))
            ? (z ||
                (typeof m.UNSAFE_componentWillUpdate != 'function' &&
                  typeof m.componentWillUpdate != 'function') ||
                (typeof m.componentWillUpdate == 'function' &&
                  m.componentWillUpdate(r, L, T),
                typeof m.UNSAFE_componentWillUpdate == 'function' &&
                  m.UNSAFE_componentWillUpdate(r, L, T)),
              typeof m.componentDidUpdate == 'function' && (n.flags |= 4),
              typeof m.getSnapshotBeforeUpdate == 'function' &&
                (n.flags |= 1024))
            : (typeof m.componentDidUpdate != 'function' ||
                (y === t.memoizedProps && N === t.memoizedState) ||
                (n.flags |= 4),
              typeof m.getSnapshotBeforeUpdate != 'function' ||
                (y === t.memoizedProps && N === t.memoizedState) ||
                (n.flags |= 1024),
              (n.memoizedProps = r),
              (n.memoizedState = L)),
          (m.props = r),
          (m.state = L),
          (m.context = T),
          (r = U))
        : (typeof m.componentDidUpdate != 'function' ||
            (y === t.memoizedProps && N === t.memoizedState) ||
            (n.flags |= 4),
          typeof m.getSnapshotBeforeUpdate != 'function' ||
            (y === t.memoizedProps && N === t.memoizedState) ||
            (n.flags |= 1024),
          (r = !1));
    }
    return (
      (m = r),
      Kl(t, n),
      (r = (n.flags & 128) !== 0),
      m || r
        ? ((m = n.stateNode),
          (l =
            r && typeof l.getDerivedStateFromError != 'function'
              ? null
              : m.render()),
          (n.flags |= 1),
          t !== null && r
            ? ((n.child = la(n, t.child, null, f)),
              (n.child = la(n, null, l, f)))
            : It(t, n, l, f),
          (n.memoizedState = m.state),
          (t = n.child))
        : (t = bn(t, n, f)),
      t
    );
  }
  function Wd(t, n, l, r) {
    return (Za(), (n.flags |= 256), It(t, n, l, r), n.child);
  }
  var Au = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Du(t) {
    return { baseLanes: t, cachePool: Hh() };
  }
  function Cu(t, n, l) {
    return ((t = t !== null ? t.childLanes & ~l : 0), n && (t |= He), t);
  }
  function $d(t, n, l) {
    var r = n.pendingProps,
      f = !1,
      m = (n.flags & 128) !== 0,
      y;
    if (
      ((y = m) ||
        (y =
          t !== null && t.memoizedState === null ? !1 : (Pt.current & 2) !== 0),
      y && ((f = !0), (n.flags &= -129)),
      (y = (n.flags & 32) !== 0),
      (n.flags &= -33),
      t === null)
    ) {
      if (_t) {
        if ((f ? Yn(n) : qn(), _t)) {
          var _ = Ht,
            T;
          if ((T = _)) {
            t: {
              for (T = _, _ = $e; T.nodeType !== 8; ) {
                if (!_) {
                  _ = null;
                  break t;
                }
                if (((T = Pe(T.nextSibling)), T === null)) {
                  _ = null;
                  break t;
                }
              }
              _ = T;
            }
            _ !== null
              ? ((n.memoizedState = {
                  dehydrated: _,
                  treeContext: fi !== null ? { id: hn, overflow: dn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (T = Me(18, null, null, 0)),
                (T.stateNode = _),
                (T.return = n),
                (n.child = T),
                (ce = n),
                (Ht = null),
                (T = !0))
              : (T = !1);
          }
          T || mi(n);
        }
        if (
          ((_ = n.memoizedState),
          _ !== null && ((_ = _.dehydrated), _ !== null))
        )
          return (dc(_) ? (n.lanes = 32) : (n.lanes = 536870912), null);
        yn(n);
      }
      return (
        (_ = r.children),
        (r = r.fallback),
        f
          ? (qn(),
            (f = n.mode),
            (_ = Wl({ mode: 'hidden', children: _ }, f)),
            (r = ci(r, f, l, null)),
            (_.return = n),
            (r.return = n),
            (_.sibling = r),
            (n.child = _),
            (f = n.child),
            (f.memoizedState = Du(l)),
            (f.childLanes = Cu(t, y, l)),
            (n.memoizedState = Au),
            r)
          : (Yn(n), ju(n, _))
      );
    }
    if (
      ((T = t.memoizedState), T !== null && ((_ = T.dehydrated), _ !== null))
    ) {
      if (m)
        n.flags & 256
          ? (Yn(n), (n.flags &= -257), (n = Ru(t, n, l)))
          : n.memoizedState !== null
            ? (qn(), (n.child = t.child), (n.flags |= 128), (n = null))
            : (qn(),
              (f = r.fallback),
              (_ = n.mode),
              (r = Wl({ mode: 'visible', children: r.children }, _)),
              (f = ci(f, _, l, null)),
              (f.flags |= 2),
              (r.return = n),
              (f.return = n),
              (r.sibling = f),
              (n.child = r),
              la(n, t.child, null, l),
              (r = n.child),
              (r.memoizedState = Du(l)),
              (r.childLanes = Cu(t, y, l)),
              (n.memoizedState = Au),
              (n = f));
      else if ((Yn(n), dc(_))) {
        if (((y = _.nextSibling && _.nextSibling.dataset), y)) var z = y.dgst;
        ((y = z),
          (r = Error(s(419))),
          (r.stack = ''),
          (r.digest = y),
          Ka({ value: r, source: null, stack: null }),
          (n = Ru(t, n, l)));
      } else if (
        (Kt || Wa(t, n, l, !1), (y = (l & t.childLanes) !== 0), Kt || y)
      ) {
        if (
          ((y = Dt),
          y !== null &&
            ((r = l & -l),
            (r = (r & 42) !== 0 ? 1 : mr(r)),
            (r = (r & (y.suspendedLanes | l)) !== 0 ? 0 : r),
            r !== 0 && r !== T.retryLane))
        )
          throw ((T.retryLane = r), Ki(t, r), De(y, t, r), Vd);
        (_.data === '$?' || Wu(), (n = Ru(t, n, l)));
      } else
        _.data === '$?'
          ? ((n.flags |= 192), (n.child = t.child), (n = null))
          : ((t = T.treeContext),
            (Ht = Pe(_.nextSibling)),
            (ce = n),
            (_t = !0),
            (di = null),
            ($e = !1),
            t !== null &&
              ((Ne[ke++] = hn),
              (Ne[ke++] = dn),
              (Ne[ke++] = fi),
              (hn = t.id),
              (dn = t.overflow),
              (fi = n)),
            (n = ju(n, r.children)),
            (n.flags |= 4096));
      return n;
    }
    return f
      ? (qn(),
        (f = r.fallback),
        (_ = n.mode),
        (T = t.child),
        (z = T.sibling),
        (r = fn(T, { mode: 'hidden', children: r.children })),
        (r.subtreeFlags = T.subtreeFlags & 65011712),
        z !== null ? (f = fn(z, f)) : ((f = ci(f, _, l, null)), (f.flags |= 2)),
        (f.return = n),
        (r.return = n),
        (r.sibling = f),
        (n.child = r),
        (r = f),
        (f = n.child),
        (_ = t.child.memoizedState),
        _ === null
          ? (_ = Du(l))
          : ((T = _.cachePool),
            T !== null
              ? ((z = Gt._currentValue),
                (T = T.parent !== z ? { parent: z, pool: z } : T))
              : (T = Hh()),
            (_ = { baseLanes: _.baseLanes | l, cachePool: T })),
        (f.memoizedState = _),
        (f.childLanes = Cu(t, y, l)),
        (n.memoizedState = Au),
        r)
      : (Yn(n),
        (l = t.child),
        (t = l.sibling),
        (l = fn(l, { mode: 'visible', children: r.children })),
        (l.return = n),
        (l.sibling = null),
        t !== null &&
          ((y = n.deletions),
          y === null ? ((n.deletions = [t]), (n.flags |= 16)) : y.push(t)),
        (n.child = l),
        (n.memoizedState = null),
        l);
  }
  function ju(t, n) {
    return (
      (n = Wl({ mode: 'visible', children: n }, t.mode)),
      (n.return = t),
      (t.child = n)
    );
  }
  function Wl(t, n) {
    return (
      (t = Me(22, t, null, n)),
      (t.lanes = 0),
      (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      t
    );
  }
  function Ru(t, n, l) {
    return (
      la(n, t.child, null, l),
      (t = ju(n, n.pendingProps.children)),
      (t.flags |= 2),
      (n.memoizedState = null),
      t
    );
  }
  function Jd(t, n, l) {
    t.lanes |= n;
    var r = t.alternate;
    (r !== null && (r.lanes |= n), Wr(t.return, n, l));
  }
  function zu(t, n, l, r, f) {
    var m = t.memoizedState;
    m === null
      ? (t.memoizedState = {
          isBackwards: n,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: l,
          tailMode: f,
        })
      : ((m.isBackwards = n),
        (m.rendering = null),
        (m.renderingStartTime = 0),
        (m.last = r),
        (m.tail = l),
        (m.tailMode = f));
  }
  function Id(t, n, l) {
    var r = n.pendingProps,
      f = r.revealOrder,
      m = r.tail;
    if ((It(t, n, r.children, l), (r = Pt.current), (r & 2) !== 0))
      ((r = (r & 1) | 2), (n.flags |= 128));
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = n.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && Jd(t, l, n);
          else if (t.tag === 19) Jd(t, l, n);
          else if (t.child !== null) {
            ((t.child.return = t), (t = t.child));
            continue;
          }
          if (t === n) break t;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === n) break t;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      r &= 1;
    }
    switch ((Z(Pt, r), f)) {
      case 'forwards':
        for (l = n.child, f = null; l !== null; )
          ((t = l.alternate),
            t !== null && Fl(t) === null && (f = l),
            (l = l.sibling));
        ((l = f),
          l === null
            ? ((f = n.child), (n.child = null))
            : ((f = l.sibling), (l.sibling = null)),
          zu(n, !1, f, l, m));
        break;
      case 'backwards':
        for (l = null, f = n.child, n.child = null; f !== null; ) {
          if (((t = f.alternate), t !== null && Fl(t) === null)) {
            n.child = f;
            break;
          }
          ((t = f.sibling), (f.sibling = l), (l = f), (f = t));
        }
        zu(n, !0, l, null, m);
        break;
      case 'together':
        zu(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function bn(t, n, l) {
    if (
      (t !== null && (n.dependencies = t.dependencies),
      (Fn |= n.lanes),
      (l & n.childLanes) === 0)
    )
      if (t !== null) {
        if ((Wa(t, n, l, !1), (l & n.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && n.child !== t.child) throw Error(s(153));
    if (n.child !== null) {
      for (
        t = n.child, l = fn(t, t.pendingProps), n.child = l, l.return = n;
        t.sibling !== null;

      )
        ((t = t.sibling),
          (l = l.sibling = fn(t, t.pendingProps)),
          (l.return = n));
      l.sibling = null;
    }
    return n.child;
  }
  function Nu(t, n) {
    return (t.lanes & n) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Cl(t)));
  }
  function Ub(t, n, l) {
    switch (n.tag) {
      case 3:
        (Rt(n, n.stateNode.containerInfo),
          kn(n, Gt, t.memoizedState.cache),
          Za());
        break;
      case 27:
      case 5:
        ur(n);
        break;
      case 4:
        Rt(n, n.stateNode.containerInfo);
        break;
      case 10:
        kn(n, n.type, n.memoizedProps.value);
        break;
      case 13:
        var r = n.memoizedState;
        if (r !== null)
          return r.dehydrated !== null
            ? (Yn(n), (n.flags |= 128), null)
            : (l & n.child.childLanes) !== 0
              ? $d(t, n, l)
              : (Yn(n), (t = bn(t, n, l)), t !== null ? t.sibling : null);
        Yn(n);
        break;
      case 19:
        var f = (t.flags & 128) !== 0;
        if (
          ((r = (l & n.childLanes) !== 0),
          r || (Wa(t, n, l, !1), (r = (l & n.childLanes) !== 0)),
          f)
        ) {
          if (r) return Id(t, n, l);
          n.flags |= 128;
        }
        if (
          ((f = n.memoizedState),
          f !== null &&
            ((f.rendering = null), (f.tail = null), (f.lastEffect = null)),
          Z(Pt, Pt.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((n.lanes = 0), Fd(t, n, l));
      case 24:
        kn(n, Gt, t.memoizedState.cache);
    }
    return bn(t, n, l);
  }
  function tm(t, n, l) {
    if (t !== null)
      if (t.memoizedProps !== n.pendingProps) Kt = !0;
      else {
        if (!Nu(t, l) && (n.flags & 128) === 0) return ((Kt = !1), Ub(t, n, l));
        Kt = (t.flags & 131072) !== 0;
      }
    else ((Kt = !1), _t && (n.flags & 1048576) !== 0 && Ch(n, Dl, n.index));
    switch (((n.lanes = 0), n.tag)) {
      case 16:
        t: {
          t = n.pendingProps;
          var r = n.elementType,
            f = r._init;
          if (((r = f(r._payload)), (n.type = r), typeof r == 'function'))
            Xr(r)
              ? ((t = xi(r, t)), (n.tag = 1), (n = Kd(null, n, r, t, l)))
              : ((n.tag = 0), (n = Ou(null, n, r, t, l)));
          else {
            if (r != null) {
              if (((f = r.$$typeof), f === G)) {
                ((n.tag = 11), (n = Xd(null, n, r, t, l)));
                break t;
              } else if (f === K) {
                ((n.tag = 14), (n = Gd(null, n, r, t, l)));
                break t;
              }
            }
            throw ((n = Qt(r) || r), Error(s(306, n, '')));
          }
        }
        return n;
      case 0:
        return Ou(t, n, n.type, n.pendingProps, l);
      case 1:
        return ((r = n.type), (f = xi(r, n.pendingProps)), Kd(t, n, r, f, l));
      case 3:
        t: {
          if ((Rt(n, n.stateNode.containerInfo), t === null))
            throw Error(s(387));
          r = n.pendingProps;
          var m = n.memoizedState;
          ((f = m.element), iu(t, n), is(n, r, null, l));
          var y = n.memoizedState;
          if (
            ((r = y.cache),
            kn(n, Gt, r),
            r !== m.cache && $r(n, [Gt], l, !0),
            ns(),
            (r = y.element),
            m.isDehydrated)
          )
            if (
              ((m = { element: r, isDehydrated: !1, cache: y.cache }),
              (n.updateQueue.baseState = m),
              (n.memoizedState = m),
              n.flags & 256)
            ) {
              n = Wd(t, n, r, l);
              break t;
            } else if (r !== f) {
              ((f = Re(Error(s(424)), n)), Ka(f), (n = Wd(t, n, r, l)));
              break t;
            } else {
              switch (((t = n.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === 'HTML' ? t.ownerDocument.body : t;
              }
              for (
                Ht = Pe(t.firstChild),
                  ce = n,
                  _t = !0,
                  di = null,
                  $e = !0,
                  l = Rd(n, null, r, l),
                  n.child = l;
                l;

              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
            }
          else {
            if ((Za(), r === f)) {
              n = bn(t, n, l);
              break t;
            }
            It(t, n, r, l);
          }
          n = n.child;
        }
        return n;
      case 26:
        return (
          Kl(t, n),
          t === null
            ? (l = ag(n.type, null, n.pendingProps, null))
              ? (n.memoizedState = l)
              : _t ||
                ((l = n.type),
                (t = n.pendingProps),
                (r = co(nt.current).createElement(l)),
                (r[ae] = n),
                (r[he] = t),
                ee(r, l, t),
                Zt(r),
                (n.stateNode = r))
            : (n.memoizedState = ag(
                n.type,
                t.memoizedProps,
                n.pendingProps,
                t.memoizedState
              )),
          null
        );
      case 27:
        return (
          ur(n),
          t === null &&
            _t &&
            ((r = n.stateNode = eg(n.type, n.pendingProps, nt.current)),
            (ce = n),
            ($e = !0),
            (f = Ht),
            Wn(n.type) ? ((mc = f), (Ht = Pe(r.firstChild))) : (Ht = f)),
          It(t, n, n.pendingProps.children, l),
          Kl(t, n),
          t === null && (n.flags |= 4194304),
          n.child
        );
      case 5:
        return (
          t === null &&
            _t &&
            ((f = r = Ht) &&
              ((r = dx(r, n.type, n.pendingProps, $e)),
              r !== null
                ? ((n.stateNode = r),
                  (ce = n),
                  (Ht = Pe(r.firstChild)),
                  ($e = !1),
                  (f = !0))
                : (f = !1)),
            f || mi(n)),
          ur(n),
          (f = n.type),
          (m = n.pendingProps),
          (y = t !== null ? t.memoizedProps : null),
          (r = m.children),
          cc(f, m) ? (r = null) : y !== null && cc(f, y) && (n.flags |= 32),
          n.memoizedState !== null &&
            ((f = uu(t, n, jb, null, null, l)), (Es._currentValue = f)),
          Kl(t, n),
          It(t, n, r, l),
          n.child
        );
      case 6:
        return (
          t === null &&
            _t &&
            ((t = l = Ht) &&
              ((l = mx(l, n.pendingProps, $e)),
              l !== null
                ? ((n.stateNode = l), (ce = n), (Ht = null), (t = !0))
                : (t = !1)),
            t || mi(n)),
          null
        );
      case 13:
        return $d(t, n, l);
      case 4:
        return (
          Rt(n, n.stateNode.containerInfo),
          (r = n.pendingProps),
          t === null ? (n.child = la(n, null, r, l)) : It(t, n, r, l),
          n.child
        );
      case 11:
        return Xd(t, n, n.type, n.pendingProps, l);
      case 7:
        return (It(t, n, n.pendingProps, l), n.child);
      case 8:
        return (It(t, n, n.pendingProps.children, l), n.child);
      case 12:
        return (It(t, n, n.pendingProps.children, l), n.child);
      case 10:
        return (
          (r = n.pendingProps),
          kn(n, n.type, r.value),
          It(t, n, r.children, l),
          n.child
        );
      case 9:
        return (
          (f = n.type._context),
          (r = n.pendingProps.children),
          pi(n),
          (f = se(f)),
          (r = r(f)),
          (n.flags |= 1),
          It(t, n, r, l),
          n.child
        );
      case 14:
        return Gd(t, n, n.type, n.pendingProps, l);
      case 15:
        return Pd(t, n, n.type, n.pendingProps, l);
      case 19:
        return Id(t, n, l);
      case 31:
        return (
          (r = n.pendingProps),
          (l = n.mode),
          (r = { mode: r.mode, children: r.children }),
          t === null
            ? ((l = Wl(r, l)),
              (l.ref = n.ref),
              (n.child = l),
              (l.return = n),
              (n = l))
            : ((l = fn(t.child, r)),
              (l.ref = n.ref),
              (n.child = l),
              (l.return = n),
              (n = l)),
          n
        );
      case 22:
        return Fd(t, n, l);
      case 24:
        return (
          pi(n),
          (r = se(Gt)),
          t === null
            ? ((f = tu()),
              f === null &&
                ((f = Dt),
                (m = Jr()),
                (f.pooledCache = m),
                m.refCount++,
                m !== null && (f.pooledCacheLanes |= l),
                (f = m)),
              (n.memoizedState = { parent: r, cache: f }),
              nu(n),
              kn(n, Gt, f))
            : ((t.lanes & l) !== 0 && (iu(t, n), is(n, null, null, l), ns()),
              (f = t.memoizedState),
              (m = n.memoizedState),
              f.parent !== r
                ? ((f = { parent: r, cache: r }),
                  (n.memoizedState = f),
                  n.lanes === 0 &&
                    (n.memoizedState = n.updateQueue.baseState = f),
                  kn(n, Gt, r))
                : ((r = m.cache),
                  kn(n, Gt, r),
                  r !== f.cache && $r(n, [Gt], l, !0))),
          It(t, n, n.pendingProps.children, l),
          n.child
        );
      case 29:
        throw n.pendingProps;
    }
    throw Error(s(156, n.tag));
  }
  function xn(t) {
    t.flags |= 4;
  }
  function em(t, n) {
    if (n.type !== 'stylesheet' || (n.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !ug(n))) {
      if (
        ((n = Le.current),
        n !== null &&
          ((yt & 4194048) === yt
            ? Je !== null
            : ((yt & 62914560) !== yt && (yt & 536870912) === 0) || n !== Je))
      )
        throw ((ts = eu), Bh);
      t.flags |= 8192;
    }
  }
  function $l(t, n) {
    (n !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((n = t.tag !== 22 ? zf() : 536870912), (t.lanes |= n), (ca |= n)));
  }
  function cs(t, n) {
    if (!_t)
      switch (t.tailMode) {
        case 'hidden':
          n = t.tail;
          for (var l = null; n !== null; )
            (n.alternate !== null && (l = n), (n = n.sibling));
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case 'collapsed':
          l = t.tail;
          for (var r = null; l !== null; )
            (l.alternate !== null && (r = l), (l = l.sibling));
          r === null
            ? n || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function kt(t) {
    var n = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      r = 0;
    if (n)
      for (var f = t.child; f !== null; )
        ((l |= f.lanes | f.childLanes),
          (r |= f.subtreeFlags & 65011712),
          (r |= f.flags & 65011712),
          (f.return = t),
          (f = f.sibling));
    else
      for (f = t.child; f !== null; )
        ((l |= f.lanes | f.childLanes),
          (r |= f.subtreeFlags),
          (r |= f.flags),
          (f.return = t),
          (f = f.sibling));
    return ((t.subtreeFlags |= r), (t.childLanes = l), n);
  }
  function Yb(t, n, l) {
    var r = n.pendingProps;
    switch ((Qr(n), n.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (kt(n), null);
      case 1:
        return (kt(n), null);
      case 3:
        return (
          (l = n.stateNode),
          (r = null),
          t !== null && (r = t.memoizedState.cache),
          n.memoizedState.cache !== r && (n.flags |= 2048),
          gn(Gt),
          jn(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (Qa(n)
              ? xn(n)
              : t === null ||
                (t.memoizedState.isDehydrated && (n.flags & 256) === 0) ||
                ((n.flags |= 1024), zh())),
          kt(n),
          null
        );
      case 26:
        return (
          (l = n.memoizedState),
          t === null
            ? (xn(n),
              l !== null ? (kt(n), em(n, l)) : (kt(n), (n.flags &= -16777217)))
            : l
              ? l !== t.memoizedState
                ? (xn(n), kt(n), em(n, l))
                : (kt(n), (n.flags &= -16777217))
              : (t.memoizedProps !== r && xn(n), kt(n), (n.flags &= -16777217)),
          null
        );
      case 27:
        (rl(n), (l = nt.current));
        var f = n.type;
        if (t !== null && n.stateNode != null) t.memoizedProps !== r && xn(n);
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(s(166));
            return (kt(n), null);
          }
          ((t = I.current),
            Qa(n) ? jh(n) : ((t = eg(f, r, l)), (n.stateNode = t), xn(n)));
        }
        return (kt(n), null);
      case 5:
        if ((rl(n), (l = n.type), t !== null && n.stateNode != null))
          t.memoizedProps !== r && xn(n);
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(s(166));
            return (kt(n), null);
          }
          if (((t = I.current), Qa(n))) jh(n);
          else {
            switch (((f = co(nt.current)), t)) {
              case 1:
                t = f.createElementNS('http://www.w3.org/2000/svg', l);
                break;
              case 2:
                t = f.createElementNS('http://www.w3.org/1998/Math/MathML', l);
                break;
              default:
                switch (l) {
                  case 'svg':
                    t = f.createElementNS('http://www.w3.org/2000/svg', l);
                    break;
                  case 'math':
                    t = f.createElementNS(
                      'http://www.w3.org/1998/Math/MathML',
                      l
                    );
                    break;
                  case 'script':
                    ((t = f.createElement('div')),
                      (t.innerHTML = '<script><\/script>'),
                      (t = t.removeChild(t.firstChild)));
                    break;
                  case 'select':
                    ((t =
                      typeof r.is == 'string'
                        ? f.createElement('select', { is: r.is })
                        : f.createElement('select')),
                      r.multiple
                        ? (t.multiple = !0)
                        : r.size && (t.size = r.size));
                    break;
                  default:
                    t =
                      typeof r.is == 'string'
                        ? f.createElement(l, { is: r.is })
                        : f.createElement(l);
                }
            }
            ((t[ae] = n), (t[he] = r));
            t: for (f = n.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6) t.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                ((f.child.return = f), (f = f.child));
                continue;
              }
              if (f === n) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === n) break t;
                f = f.return;
              }
              ((f.sibling.return = f.return), (f = f.sibling));
            }
            n.stateNode = t;
            t: switch ((ee(t, l, r), l)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                t = !!r.autoFocus;
                break t;
              case 'img':
                t = !0;
                break t;
              default:
                t = !1;
            }
            t && xn(n);
          }
        }
        return (kt(n), (n.flags &= -16777217), null);
      case 6:
        if (t && n.stateNode != null) t.memoizedProps !== r && xn(n);
        else {
          if (typeof r != 'string' && n.stateNode === null) throw Error(s(166));
          if (((t = nt.current), Qa(n))) {
            if (
              ((t = n.stateNode),
              (l = n.memoizedProps),
              (r = null),
              (f = ce),
              f !== null)
            )
              switch (f.tag) {
                case 27:
                case 5:
                  r = f.memoizedProps;
              }
            ((t[ae] = n),
              (t = !!(
                t.nodeValue === l ||
                (r !== null && r.suppressHydrationWarning === !0) ||
                Zm(t.nodeValue, l)
              )),
              t || mi(n));
          } else
            ((t = co(t).createTextNode(r)), (t[ae] = n), (n.stateNode = t));
        }
        return (kt(n), null);
      case 13:
        if (
          ((r = n.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((f = Qa(n)), r !== null && r.dehydrated !== null)) {
            if (t === null) {
              if (!f) throw Error(s(318));
              if (
                ((f = n.memoizedState),
                (f = f !== null ? f.dehydrated : null),
                !f)
              )
                throw Error(s(317));
              f[ae] = n;
            } else
              (Za(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                (n.flags |= 4));
            (kt(n), (f = !1));
          } else
            ((f = zh()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = f),
              (f = !0));
          if (!f) return n.flags & 256 ? (yn(n), n) : (yn(n), null);
        }
        if ((yn(n), (n.flags & 128) !== 0)) return ((n.lanes = l), n);
        if (
          ((l = r !== null), (t = t !== null && t.memoizedState !== null), l)
        ) {
          ((r = n.child),
            (f = null),
            r.alternate !== null &&
              r.alternate.memoizedState !== null &&
              r.alternate.memoizedState.cachePool !== null &&
              (f = r.alternate.memoizedState.cachePool.pool));
          var m = null;
          (r.memoizedState !== null &&
            r.memoizedState.cachePool !== null &&
            (m = r.memoizedState.cachePool.pool),
            m !== f && (r.flags |= 2048));
        }
        return (
          l !== t && l && (n.child.flags |= 8192),
          $l(n, n.updateQueue),
          kt(n),
          null
        );
      case 4:
        return (jn(), t === null && sc(n.stateNode.containerInfo), kt(n), null);
      case 10:
        return (gn(n.type), kt(n), null);
      case 19:
        if ((W(Pt), (f = n.memoizedState), f === null)) return (kt(n), null);
        if (((r = (n.flags & 128) !== 0), (m = f.rendering), m === null))
          if (r) cs(f, !1);
          else {
            if (Bt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = n.child; t !== null; ) {
                if (((m = Fl(t)), m !== null)) {
                  for (
                    n.flags |= 128,
                      cs(f, !1),
                      t = m.updateQueue,
                      n.updateQueue = t,
                      $l(n, t),
                      n.subtreeFlags = 0,
                      t = l,
                      l = n.child;
                    l !== null;

                  )
                    (Dh(l, t), (l = l.sibling));
                  return (Z(Pt, (Pt.current & 1) | 2), n.child);
                }
                t = t.sibling;
              }
            f.tail !== null &&
              We() > to &&
              ((n.flags |= 128), (r = !0), cs(f, !1), (n.lanes = 4194304));
          }
        else {
          if (!r)
            if (((t = Fl(m)), t !== null)) {
              if (
                ((n.flags |= 128),
                (r = !0),
                (t = t.updateQueue),
                (n.updateQueue = t),
                $l(n, t),
                cs(f, !0),
                f.tail === null &&
                  f.tailMode === 'hidden' &&
                  !m.alternate &&
                  !_t)
              )
                return (kt(n), null);
            } else
              2 * We() - f.renderingStartTime > to &&
                l !== 536870912 &&
                ((n.flags |= 128), (r = !0), cs(f, !1), (n.lanes = 4194304));
          f.isBackwards
            ? ((m.sibling = n.child), (n.child = m))
            : ((t = f.last),
              t !== null ? (t.sibling = m) : (n.child = m),
              (f.last = m));
        }
        return f.tail !== null
          ? ((n = f.tail),
            (f.rendering = n),
            (f.tail = n.sibling),
            (f.renderingStartTime = We()),
            (n.sibling = null),
            (t = Pt.current),
            Z(Pt, r ? (t & 1) | 2 : t & 1),
            n)
          : (kt(n), null);
      case 22:
      case 23:
        return (
          yn(n),
          ou(),
          (r = n.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== r && (n.flags |= 8192)
            : r && (n.flags |= 8192),
          r
            ? (l & 536870912) !== 0 &&
              (n.flags & 128) === 0 &&
              (kt(n), n.subtreeFlags & 6 && (n.flags |= 8192))
            : kt(n),
          (l = n.updateQueue),
          l !== null && $l(n, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (r = null),
          n.memoizedState !== null &&
            n.memoizedState.cachePool !== null &&
            (r = n.memoizedState.cachePool.pool),
          r !== l && (n.flags |= 2048),
          t !== null && W(yi),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          n.memoizedState.cache !== l && (n.flags |= 2048),
          gn(Gt),
          kt(n),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, n.tag));
  }
  function qb(t, n) {
    switch ((Qr(n), n.tag)) {
      case 1:
        return (
          (t = n.flags),
          t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 3:
        return (
          gn(Gt),
          jn(),
          (t = n.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((n.flags = (t & -65537) | 128), n)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (rl(n), null);
      case 13:
        if (
          (yn(n), (t = n.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (n.alternate === null) throw Error(s(340));
          Za();
        }
        return (
          (t = n.flags),
          t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 19:
        return (W(Pt), null);
      case 4:
        return (jn(), null);
      case 10:
        return (gn(n.type), null);
      case 22:
      case 23:
        return (
          yn(n),
          ou(),
          t !== null && W(yi),
          (t = n.flags),
          t & 65536 ? ((n.flags = (t & -65537) | 128), n) : null
        );
      case 24:
        return (gn(Gt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function nm(t, n) {
    switch ((Qr(n), n.tag)) {
      case 3:
        (gn(Gt), jn());
        break;
      case 26:
      case 27:
      case 5:
        rl(n);
        break;
      case 4:
        jn();
        break;
      case 13:
        yn(n);
        break;
      case 19:
        W(Pt);
        break;
      case 10:
        gn(n.type);
        break;
      case 22:
      case 23:
        (yn(n), ou(), t !== null && W(yi));
        break;
      case 24:
        gn(Gt);
    }
  }
  function fs(t, n) {
    try {
      var l = n.updateQueue,
        r = l !== null ? l.lastEffect : null;
      if (r !== null) {
        var f = r.next;
        l = f;
        do {
          if ((l.tag & t) === t) {
            r = void 0;
            var m = l.create,
              y = l.inst;
            ((r = m()), (y.destroy = r));
          }
          l = l.next;
        } while (l !== f);
      }
    } catch (_) {
      At(n, n.return, _);
    }
  }
  function Vn(t, n, l) {
    try {
      var r = n.updateQueue,
        f = r !== null ? r.lastEffect : null;
      if (f !== null) {
        var m = f.next;
        r = m;
        do {
          if ((r.tag & t) === t) {
            var y = r.inst,
              _ = y.destroy;
            if (_ !== void 0) {
              ((y.destroy = void 0), (f = n));
              var T = l,
                z = _;
              try {
                z();
              } catch (U) {
                At(f, T, U);
              }
            }
          }
          r = r.next;
        } while (r !== m);
      }
    } catch (U) {
      At(n, n.return, U);
    }
  }
  function im(t) {
    var n = t.updateQueue;
    if (n !== null) {
      var l = t.stateNode;
      try {
        Gh(n, l);
      } catch (r) {
        At(t, t.return, r);
      }
    }
  }
  function am(t, n, l) {
    ((l.props = xi(t.type, t.memoizedProps)), (l.state = t.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (r) {
      At(t, n, r);
    }
  }
  function hs(t, n) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var r = t.stateNode;
            break;
          case 30:
            r = t.stateNode;
            break;
          default:
            r = t.stateNode;
        }
        typeof l == 'function' ? (t.refCleanup = l(r)) : (l.current = r);
      }
    } catch (f) {
      At(t, n, f);
    }
  }
  function Ie(t, n) {
    var l = t.ref,
      r = t.refCleanup;
    if (l !== null)
      if (typeof r == 'function')
        try {
          r();
        } catch (f) {
          At(t, n, f);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof l == 'function')
        try {
          l(null);
        } catch (f) {
          At(t, n, f);
        }
      else l.current = null;
  }
  function sm(t) {
    var n = t.type,
      l = t.memoizedProps,
      r = t.stateNode;
    try {
      t: switch (n) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          l.autoFocus && r.focus();
          break t;
        case 'img':
          l.src ? (r.src = l.src) : l.srcSet && (r.srcset = l.srcSet);
      }
    } catch (f) {
      At(t, t.return, f);
    }
  }
  function ku(t, n, l) {
    try {
      var r = t.stateNode;
      (rx(r, t.type, l, n), (r[he] = n));
    } catch (f) {
      At(t, t.return, f);
    }
  }
  function lm(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Wn(t.type)) ||
      t.tag === 4
    );
  }
  function Lu(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || lm(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && Wn(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Hu(t, n, l) {
    var r = t.tag;
    if (r === 5 || r === 6)
      ((t = t.stateNode),
        n
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === 'HTML'
                ? l.ownerDocument.body
                : l
            ).insertBefore(t, n)
          : ((n =
              l.nodeType === 9
                ? l.body
                : l.nodeName === 'HTML'
                  ? l.ownerDocument.body
                  : l),
            n.appendChild(t),
            (l = l._reactRootContainer),
            l != null || n.onclick !== null || (n.onclick = uo)));
    else if (
      r !== 4 &&
      (r === 27 && Wn(t.type) && ((l = t.stateNode), (n = null)),
      (t = t.child),
      t !== null)
    )
      for (Hu(t, n, l), t = t.sibling; t !== null; )
        (Hu(t, n, l), (t = t.sibling));
  }
  function Jl(t, n, l) {
    var r = t.tag;
    if (r === 5 || r === 6)
      ((t = t.stateNode), n ? l.insertBefore(t, n) : l.appendChild(t));
    else if (
      r !== 4 &&
      (r === 27 && Wn(t.type) && (l = t.stateNode), (t = t.child), t !== null)
    )
      for (Jl(t, n, l), t = t.sibling; t !== null; )
        (Jl(t, n, l), (t = t.sibling));
  }
  function om(t) {
    var n = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var r = t.type, f = n.attributes; f.length; )
        n.removeAttributeNode(f[0]);
      (ee(n, r, l), (n[ae] = t), (n[he] = l));
    } catch (m) {
      At(t, t.return, m);
    }
  }
  var vn = !1,
    Yt = !1,
    Bu = !1,
    rm = typeof WeakSet == 'function' ? WeakSet : Set,
    Wt = null;
  function Vb(t, n) {
    if (((t = t.containerInfo), (rc = yo), (t = xh(t)), Lr(t))) {
      if ('selectionStart' in t)
        var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var r = l.getSelection && l.getSelection();
          if (r && r.rangeCount !== 0) {
            l = r.anchorNode;
            var f = r.anchorOffset,
              m = r.focusNode;
            r = r.focusOffset;
            try {
              (l.nodeType, m.nodeType);
            } catch {
              l = null;
              break t;
            }
            var y = 0,
              _ = -1,
              T = -1,
              z = 0,
              U = 0,
              V = t,
              N = null;
            e: for (;;) {
              for (
                var L;
                V !== l || (f !== 0 && V.nodeType !== 3) || (_ = y + f),
                  V !== m || (r !== 0 && V.nodeType !== 3) || (T = y + r),
                  V.nodeType === 3 && (y += V.nodeValue.length),
                  (L = V.firstChild) !== null;

              )
                ((N = V), (V = L));
              for (;;) {
                if (V === t) break e;
                if (
                  (N === l && ++z === f && (_ = y),
                  N === m && ++U === r && (T = y),
                  (L = V.nextSibling) !== null)
                )
                  break;
                ((V = N), (N = V.parentNode));
              }
              V = L;
            }
            l = _ === -1 || T === -1 ? null : { start: _, end: T };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      uc = { focusedElem: t, selectionRange: l }, yo = !1, Wt = n;
      Wt !== null;

    )
      if (
        ((n = Wt), (t = n.child), (n.subtreeFlags & 1024) !== 0 && t !== null)
      )
        ((t.return = n), (Wt = t));
      else
        for (; Wt !== null; ) {
          switch (((n = Wt), (m = n.alternate), (t = n.flags), n.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && m !== null) {
                ((t = void 0),
                  (l = n),
                  (f = m.memoizedProps),
                  (m = m.memoizedState),
                  (r = l.stateNode));
                try {
                  var lt = xi(l.type, f, l.elementType === l.type);
                  ((t = r.getSnapshotBeforeUpdate(lt, m)),
                    (r.__reactInternalSnapshotBeforeUpdate = t));
                } catch (it) {
                  At(l, l.return, it);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = n.stateNode.containerInfo), (l = t.nodeType), l === 9)
                )
                  hc(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      hc(t);
                      break;
                    default:
                      t.textContent = '';
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(s(163));
          }
          if (((t = n.sibling), t !== null)) {
            ((t.return = n.return), (Wt = t));
            break;
          }
          Wt = n.return;
        }
  }
  function um(t, n, l) {
    var r = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (Xn(t, l), r & 4 && fs(5, l));
        break;
      case 1:
        if ((Xn(t, l), r & 4))
          if (((t = l.stateNode), n === null))
            try {
              t.componentDidMount();
            } catch (y) {
              At(l, l.return, y);
            }
          else {
            var f = xi(l.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              t.componentDidUpdate(f, n, t.__reactInternalSnapshotBeforeUpdate);
            } catch (y) {
              At(l, l.return, y);
            }
          }
        (r & 64 && im(l), r & 512 && hs(l, l.return));
        break;
      case 3:
        if ((Xn(t, l), r & 64 && ((t = l.updateQueue), t !== null))) {
          if (((n = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                n = l.child.stateNode;
                break;
              case 1:
                n = l.child.stateNode;
            }
          try {
            Gh(t, n);
          } catch (y) {
            At(l, l.return, y);
          }
        }
        break;
      case 27:
        n === null && r & 4 && om(l);
      case 26:
      case 5:
        (Xn(t, l), n === null && r & 4 && sm(l), r & 512 && hs(l, l.return));
        break;
      case 12:
        Xn(t, l);
        break;
      case 13:
        (Xn(t, l),
          r & 4 && hm(t, l),
          r & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = $b.bind(null, l)), gx(t, l)))));
        break;
      case 22:
        if (((r = l.memoizedState !== null || vn), !r)) {
          ((n = (n !== null && n.memoizedState !== null) || Yt), (f = vn));
          var m = Yt;
          ((vn = r),
            (Yt = n) && !m ? Gn(t, l, (l.subtreeFlags & 8772) !== 0) : Xn(t, l),
            (vn = f),
            (Yt = m));
        }
        break;
      case 30:
        break;
      default:
        Xn(t, l);
    }
  }
  function cm(t) {
    var n = t.alternate;
    (n !== null && ((t.alternate = null), cm(n)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((n = t.stateNode), n !== null && yr(n)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var zt = null,
    ge = !1;
  function _n(t, n, l) {
    for (l = l.child; l !== null; ) (fm(t, n, l), (l = l.sibling));
  }
  function fm(t, n, l) {
    if (_e && typeof _e.onCommitFiberUnmount == 'function')
      try {
        _e.onCommitFiberUnmount(za, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (Yt || Ie(l, n),
          _n(t, n, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        Yt || Ie(l, n);
        var r = zt,
          f = ge;
        (Wn(l.type) && ((zt = l.stateNode), (ge = !1)),
          _n(t, n, l),
          _s(l.stateNode),
          (zt = r),
          (ge = f));
        break;
      case 5:
        Yt || Ie(l, n);
      case 6:
        if (
          ((r = zt),
          (f = ge),
          (zt = null),
          _n(t, n, l),
          (zt = r),
          (ge = f),
          zt !== null)
        )
          if (ge)
            try {
              (zt.nodeType === 9
                ? zt.body
                : zt.nodeName === 'HTML'
                  ? zt.ownerDocument.body
                  : zt
              ).removeChild(l.stateNode);
            } catch (m) {
              At(l, n, m);
            }
          else
            try {
              zt.removeChild(l.stateNode);
            } catch (m) {
              At(l, n, m);
            }
        break;
      case 18:
        zt !== null &&
          (ge
            ? ((t = zt),
              Im(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === 'HTML'
                    ? t.ownerDocument.body
                    : t,
                l.stateNode
              ),
              Ds(t))
            : Im(zt, l.stateNode));
        break;
      case 4:
        ((r = zt),
          (f = ge),
          (zt = l.stateNode.containerInfo),
          (ge = !0),
          _n(t, n, l),
          (zt = r),
          (ge = f));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Yt || Vn(2, l, n), Yt || Vn(4, l, n), _n(t, n, l));
        break;
      case 1:
        (Yt ||
          (Ie(l, n),
          (r = l.stateNode),
          typeof r.componentWillUnmount == 'function' && am(l, n, r)),
          _n(t, n, l));
        break;
      case 21:
        _n(t, n, l);
        break;
      case 22:
        ((Yt = (r = Yt) || l.memoizedState !== null), _n(t, n, l), (Yt = r));
        break;
      default:
        _n(t, n, l);
    }
  }
  function hm(t, n) {
    if (
      n.memoizedState === null &&
      ((t = n.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Ds(t);
      } catch (l) {
        At(n, n.return, l);
      }
  }
  function Xb(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var n = t.stateNode;
        return (n === null && (n = t.stateNode = new rm()), n);
      case 22:
        return (
          (t = t.stateNode),
          (n = t._retryCache),
          n === null && (n = t._retryCache = new rm()),
          n
        );
      default:
        throw Error(s(435, t.tag));
    }
  }
  function Uu(t, n) {
    var l = Xb(t);
    n.forEach(function (r) {
      var f = Jb.bind(null, t, r);
      l.has(r) || (l.add(r), r.then(f, f));
    });
  }
  function Ee(t, n) {
    var l = n.deletions;
    if (l !== null)
      for (var r = 0; r < l.length; r++) {
        var f = l[r],
          m = t,
          y = n,
          _ = y;
        t: for (; _ !== null; ) {
          switch (_.tag) {
            case 27:
              if (Wn(_.type)) {
                ((zt = _.stateNode), (ge = !1));
                break t;
              }
              break;
            case 5:
              ((zt = _.stateNode), (ge = !1));
              break t;
            case 3:
            case 4:
              ((zt = _.stateNode.containerInfo), (ge = !0));
              break t;
          }
          _ = _.return;
        }
        if (zt === null) throw Error(s(160));
        (fm(m, y, f),
          (zt = null),
          (ge = !1),
          (m = f.alternate),
          m !== null && (m.return = null),
          (f.return = null));
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; ) (dm(n, t), (n = n.sibling));
  }
  var Ge = null;
  function dm(t, n) {
    var l = t.alternate,
      r = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Ee(n, t),
          Te(t),
          r & 4 && (Vn(3, t, t.return), fs(3, t), Vn(5, t, t.return)));
        break;
      case 1:
        (Ee(n, t),
          Te(t),
          r & 512 && (Yt || l === null || Ie(l, l.return)),
          r & 64 &&
            vn &&
            ((t = t.updateQueue),
            t !== null &&
              ((r = t.callbacks),
              r !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? r : l.concat(r))))));
        break;
      case 26:
        var f = Ge;
        if (
          (Ee(n, t),
          Te(t),
          r & 512 && (Yt || l === null || Ie(l, l.return)),
          r & 4)
        ) {
          var m = l !== null ? l.memoizedState : null;
          if (((r = t.memoizedState), l === null))
            if (r === null)
              if (t.stateNode === null) {
                t: {
                  ((r = t.type),
                    (l = t.memoizedProps),
                    (f = f.ownerDocument || f));
                  e: switch (r) {
                    case 'title':
                      ((m = f.getElementsByTagName('title')[0]),
                        (!m ||
                          m[La] ||
                          m[ae] ||
                          m.namespaceURI === 'http://www.w3.org/2000/svg' ||
                          m.hasAttribute('itemprop')) &&
                          ((m = f.createElement(r)),
                          f.head.insertBefore(
                            m,
                            f.querySelector('head > title')
                          )),
                        ee(m, r, l),
                        (m[ae] = t),
                        Zt(m),
                        (r = m));
                      break t;
                    case 'link':
                      var y = og('link', 'href', f).get(r + (l.href || ''));
                      if (y) {
                        for (var _ = 0; _ < y.length; _++)
                          if (
                            ((m = y[_]),
                            m.getAttribute('href') ===
                              (l.href == null || l.href === ''
                                ? null
                                : l.href) &&
                              m.getAttribute('rel') ===
                                (l.rel == null ? null : l.rel) &&
                              m.getAttribute('title') ===
                                (l.title == null ? null : l.title) &&
                              m.getAttribute('crossorigin') ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            y.splice(_, 1);
                            break e;
                          }
                      }
                      ((m = f.createElement(r)),
                        ee(m, r, l),
                        f.head.appendChild(m));
                      break;
                    case 'meta':
                      if (
                        (y = og('meta', 'content', f).get(
                          r + (l.content || '')
                        ))
                      ) {
                        for (_ = 0; _ < y.length; _++)
                          if (
                            ((m = y[_]),
                            m.getAttribute('content') ===
                              (l.content == null ? null : '' + l.content) &&
                              m.getAttribute('name') ===
                                (l.name == null ? null : l.name) &&
                              m.getAttribute('property') ===
                                (l.property == null ? null : l.property) &&
                              m.getAttribute('http-equiv') ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              m.getAttribute('charset') ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            y.splice(_, 1);
                            break e;
                          }
                      }
                      ((m = f.createElement(r)),
                        ee(m, r, l),
                        f.head.appendChild(m));
                      break;
                    default:
                      throw Error(s(468, r));
                  }
                  ((m[ae] = t), Zt(m), (r = m));
                }
                t.stateNode = r;
              } else rg(f, t.type, t.stateNode);
            else t.stateNode = lg(f, r, t.memoizedProps);
          else
            m !== r
              ? (m === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : m.count--,
                r === null
                  ? rg(f, t.type, t.stateNode)
                  : lg(f, r, t.memoizedProps))
              : r === null &&
                t.stateNode !== null &&
                ku(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (Ee(n, t),
          Te(t),
          r & 512 && (Yt || l === null || Ie(l, l.return)),
          l !== null && r & 4 && ku(t, t.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (Ee(n, t),
          Te(t),
          r & 512 && (Yt || l === null || Ie(l, l.return)),
          t.flags & 32)
        ) {
          f = t.stateNode;
          try {
            Vi(f, '');
          } catch (L) {
            At(t, t.return, L);
          }
        }
        (r & 4 &&
          t.stateNode != null &&
          ((f = t.memoizedProps), ku(t, f, l !== null ? l.memoizedProps : f)),
          r & 1024 && (Bu = !0));
        break;
      case 6:
        if ((Ee(n, t), Te(t), r & 4)) {
          if (t.stateNode === null) throw Error(s(162));
          ((r = t.memoizedProps), (l = t.stateNode));
          try {
            l.nodeValue = r;
          } catch (L) {
            At(t, t.return, L);
          }
        }
        break;
      case 3:
        if (
          ((mo = null),
          (f = Ge),
          (Ge = fo(n.containerInfo)),
          Ee(n, t),
          (Ge = f),
          Te(t),
          r & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Ds(n.containerInfo);
          } catch (L) {
            At(t, t.return, L);
          }
        Bu && ((Bu = !1), mm(t));
        break;
      case 4:
        ((r = Ge),
          (Ge = fo(t.stateNode.containerInfo)),
          Ee(n, t),
          Te(t),
          (Ge = r));
        break;
      case 12:
        (Ee(n, t), Te(t));
        break;
      case 13:
        (Ee(n, t),
          Te(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (Pu = We()),
          r & 4 &&
            ((r = t.updateQueue),
            r !== null && ((t.updateQueue = null), Uu(t, r))));
        break;
      case 22:
        f = t.memoizedState !== null;
        var T = l !== null && l.memoizedState !== null,
          z = vn,
          U = Yt;
        if (
          ((vn = z || f),
          (Yt = U || T),
          Ee(n, t),
          (Yt = U),
          (vn = z),
          Te(t),
          r & 8192)
        )
          t: for (
            n = t.stateNode,
              n._visibility = f ? n._visibility & -2 : n._visibility | 1,
              f && (l === null || T || vn || Yt || vi(t)),
              l = null,
              n = t;
            ;

          ) {
            if (n.tag === 5 || n.tag === 26) {
              if (l === null) {
                T = l = n;
                try {
                  if (((m = T.stateNode), f))
                    ((y = m.style),
                      typeof y.setProperty == 'function'
                        ? y.setProperty('display', 'none', 'important')
                        : (y.display = 'none'));
                  else {
                    _ = T.stateNode;
                    var V = T.memoizedProps.style,
                      N =
                        V != null && V.hasOwnProperty('display')
                          ? V.display
                          : null;
                    _.style.display =
                      N == null || typeof N == 'boolean' ? '' : ('' + N).trim();
                  }
                } catch (L) {
                  At(T, T.return, L);
                }
              }
            } else if (n.tag === 6) {
              if (l === null) {
                T = n;
                try {
                  T.stateNode.nodeValue = f ? '' : T.memoizedProps;
                } catch (L) {
                  At(T, T.return, L);
                }
              }
            } else if (
              ((n.tag !== 22 && n.tag !== 23) ||
                n.memoizedState === null ||
                n === t) &&
              n.child !== null
            ) {
              ((n.child.return = n), (n = n.child));
              continue;
            }
            if (n === t) break t;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === t) break t;
              (l === n && (l = null), (n = n.return));
            }
            (l === n && (l = null),
              (n.sibling.return = n.return),
              (n = n.sibling));
          }
        r & 4 &&
          ((r = t.updateQueue),
          r !== null &&
            ((l = r.retryQueue),
            l !== null && ((r.retryQueue = null), Uu(t, l))));
        break;
      case 19:
        (Ee(n, t),
          Te(t),
          r & 4 &&
            ((r = t.updateQueue),
            r !== null && ((t.updateQueue = null), Uu(t, r))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Ee(n, t), Te(t));
    }
  }
  function Te(t) {
    var n = t.flags;
    if (n & 2) {
      try {
        for (var l, r = t.return; r !== null; ) {
          if (lm(r)) {
            l = r;
            break;
          }
          r = r.return;
        }
        if (l == null) throw Error(s(160));
        switch (l.tag) {
          case 27:
            var f = l.stateNode,
              m = Lu(t);
            Jl(t, m, f);
            break;
          case 5:
            var y = l.stateNode;
            l.flags & 32 && (Vi(y, ''), (l.flags &= -33));
            var _ = Lu(t);
            Jl(t, _, y);
            break;
          case 3:
          case 4:
            var T = l.stateNode.containerInfo,
              z = Lu(t);
            Hu(t, z, T);
            break;
          default:
            throw Error(s(161));
        }
      } catch (U) {
        At(t, t.return, U);
      }
      t.flags &= -3;
    }
    n & 4096 && (t.flags &= -4097);
  }
  function mm(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var n = t;
        (mm(n),
          n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function Xn(t, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; ) (um(t, n.alternate, n), (n = n.sibling));
  }
  function vi(t) {
    for (t = t.child; t !== null; ) {
      var n = t;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Vn(4, n, n.return), vi(n));
          break;
        case 1:
          Ie(n, n.return);
          var l = n.stateNode;
          (typeof l.componentWillUnmount == 'function' && am(n, n.return, l),
            vi(n));
          break;
        case 27:
          _s(n.stateNode);
        case 26:
        case 5:
          (Ie(n, n.return), vi(n));
          break;
        case 22:
          n.memoizedState === null && vi(n);
          break;
        case 30:
          vi(n);
          break;
        default:
          vi(n);
      }
      t = t.sibling;
    }
  }
  function Gn(t, n, l) {
    for (l = l && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var r = n.alternate,
        f = t,
        m = n,
        y = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          (Gn(f, m, l), fs(4, m));
          break;
        case 1:
          if (
            (Gn(f, m, l),
            (r = m),
            (f = r.stateNode),
            typeof f.componentDidMount == 'function')
          )
            try {
              f.componentDidMount();
            } catch (z) {
              At(r, r.return, z);
            }
          if (((r = m), (f = r.updateQueue), f !== null)) {
            var _ = r.stateNode;
            try {
              var T = f.shared.hiddenCallbacks;
              if (T !== null)
                for (f.shared.hiddenCallbacks = null, f = 0; f < T.length; f++)
                  Xh(T[f], _);
            } catch (z) {
              At(r, r.return, z);
            }
          }
          (l && y & 64 && im(m), hs(m, m.return));
          break;
        case 27:
          om(m);
        case 26:
        case 5:
          (Gn(f, m, l), l && r === null && y & 4 && sm(m), hs(m, m.return));
          break;
        case 12:
          Gn(f, m, l);
          break;
        case 13:
          (Gn(f, m, l), l && y & 4 && hm(f, m));
          break;
        case 22:
          (m.memoizedState === null && Gn(f, m, l), hs(m, m.return));
          break;
        case 30:
          break;
        default:
          Gn(f, m, l);
      }
      n = n.sibling;
    }
  }
  function Yu(t, n) {
    var l = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      n.memoizedState !== null &&
        n.memoizedState.cachePool !== null &&
        (t = n.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && $a(l)));
  }
  function qu(t, n) {
    ((t = null),
      n.alternate !== null && (t = n.alternate.memoizedState.cache),
      (n = n.memoizedState.cache),
      n !== t && (n.refCount++, t != null && $a(t)));
  }
  function tn(t, n, l, r) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) (gm(t, n, l, r), (n = n.sibling));
  }
  function gm(t, n, l, r) {
    var f = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (tn(t, n, l, r), f & 2048 && fs(9, n));
        break;
      case 1:
        tn(t, n, l, r);
        break;
      case 3:
        (tn(t, n, l, r),
          f & 2048 &&
            ((t = null),
            n.alternate !== null && (t = n.alternate.memoizedState.cache),
            (n = n.memoizedState.cache),
            n !== t && (n.refCount++, t != null && $a(t))));
        break;
      case 12:
        if (f & 2048) {
          (tn(t, n, l, r), (t = n.stateNode));
          try {
            var m = n.memoizedProps,
              y = m.id,
              _ = m.onPostCommit;
            typeof _ == 'function' &&
              _(
                y,
                n.alternate === null ? 'mount' : 'update',
                t.passiveEffectDuration,
                -0
              );
          } catch (T) {
            At(n, n.return, T);
          }
        } else tn(t, n, l, r);
        break;
      case 13:
        tn(t, n, l, r);
        break;
      case 23:
        break;
      case 22:
        ((m = n.stateNode),
          (y = n.alternate),
          n.memoizedState !== null
            ? m._visibility & 2
              ? tn(t, n, l, r)
              : ds(t, n)
            : m._visibility & 2
              ? tn(t, n, l, r)
              : ((m._visibility |= 2),
                oa(t, n, l, r, (n.subtreeFlags & 10256) !== 0)),
          f & 2048 && Yu(y, n));
        break;
      case 24:
        (tn(t, n, l, r), f & 2048 && qu(n.alternate, n));
        break;
      default:
        tn(t, n, l, r);
    }
  }
  function oa(t, n, l, r, f) {
    for (f = f && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var m = t,
        y = n,
        _ = l,
        T = r,
        z = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          (oa(m, y, _, T, f), fs(8, y));
          break;
        case 23:
          break;
        case 22:
          var U = y.stateNode;
          (y.memoizedState !== null
            ? U._visibility & 2
              ? oa(m, y, _, T, f)
              : ds(m, y)
            : ((U._visibility |= 2), oa(m, y, _, T, f)),
            f && z & 2048 && Yu(y.alternate, y));
          break;
        case 24:
          (oa(m, y, _, T, f), f && z & 2048 && qu(y.alternate, y));
          break;
        default:
          oa(m, y, _, T, f);
      }
      n = n.sibling;
    }
  }
  function ds(t, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var l = t,
          r = n,
          f = r.flags;
        switch (r.tag) {
          case 22:
            (ds(l, r), f & 2048 && Yu(r.alternate, r));
            break;
          case 24:
            (ds(l, r), f & 2048 && qu(r.alternate, r));
            break;
          default:
            ds(l, r);
        }
        n = n.sibling;
      }
  }
  var ms = 8192;
  function ra(t) {
    if (t.subtreeFlags & ms)
      for (t = t.child; t !== null; ) (pm(t), (t = t.sibling));
  }
  function pm(t) {
    switch (t.tag) {
      case 26:
        (ra(t),
          t.flags & ms &&
            t.memoizedState !== null &&
            Ax(Ge, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        ra(t);
        break;
      case 3:
      case 4:
        var n = Ge;
        ((Ge = fo(t.stateNode.containerInfo)), ra(t), (Ge = n));
        break;
      case 22:
        t.memoizedState === null &&
          ((n = t.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = ms), (ms = 16777216), ra(t), (ms = n))
            : ra(t));
        break;
      default:
        ra(t);
    }
  }
  function ym(t) {
    var n = t.alternate;
    if (n !== null && ((t = n.child), t !== null)) {
      n.child = null;
      do ((n = t.sibling), (t.sibling = null), (t = n));
      while (t !== null);
    }
  }
  function gs(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var l = 0; l < n.length; l++) {
          var r = n[l];
          ((Wt = r), xm(r, t));
        }
      ym(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (bm(t), (t = t.sibling));
  }
  function bm(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (gs(t), t.flags & 2048 && Vn(9, t, t.return));
        break;
      case 3:
        gs(t);
        break;
      case 12:
        gs(t);
        break;
      case 22:
        var n = t.stateNode;
        t.memoizedState !== null &&
        n._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((n._visibility &= -3), Il(t))
          : gs(t);
        break;
      default:
        gs(t);
    }
  }
  function Il(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var l = 0; l < n.length; l++) {
          var r = n[l];
          ((Wt = r), xm(r, t));
        }
      ym(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((n = t), n.tag)) {
        case 0:
        case 11:
        case 15:
          (Vn(8, n, n.return), Il(n));
          break;
        case 22:
          ((l = n.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), Il(n)));
          break;
        default:
          Il(n);
      }
      t = t.sibling;
    }
  }
  function xm(t, n) {
    for (; Wt !== null; ) {
      var l = Wt;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Vn(8, l, n);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var r = l.memoizedState.cachePool.pool;
            r != null && r.refCount++;
          }
          break;
        case 24:
          $a(l.memoizedState.cache);
      }
      if (((r = l.child), r !== null)) ((r.return = l), (Wt = r));
      else
        t: for (l = t; Wt !== null; ) {
          r = Wt;
          var f = r.sibling,
            m = r.return;
          if ((cm(r), r === l)) {
            Wt = null;
            break t;
          }
          if (f !== null) {
            ((f.return = m), (Wt = f));
            break t;
          }
          Wt = m;
        }
    }
  }
  var Gb = {
      getCacheForType: function (t) {
        var n = se(Gt),
          l = n.data.get(t);
        return (l === void 0 && ((l = t()), n.data.set(t, l)), l);
      },
    },
    Pb = typeof WeakMap == 'function' ? WeakMap : Map,
    St = 0,
    Dt = null,
    mt = null,
    yt = 0,
    wt = 0,
    Oe = null,
    Pn = !1,
    ua = !1,
    Vu = !1,
    Sn = 0,
    Bt = 0,
    Fn = 0,
    _i = 0,
    Xu = 0,
    He = 0,
    ca = 0,
    ps = null,
    pe = null,
    Gu = !1,
    Pu = 0,
    to = 1 / 0,
    eo = null,
    Qn = null,
    te = 0,
    Zn = null,
    fa = null,
    ha = 0,
    Fu = 0,
    Qu = null,
    vm = null,
    ys = 0,
    Zu = null;
  function Ae() {
    if ((St & 2) !== 0 && yt !== 0) return yt & -yt;
    if (H.T !== null) {
      var t = Ii;
      return t !== 0 ? t : ec();
    }
    return Lf();
  }
  function _m() {
    He === 0 && (He = (yt & 536870912) === 0 || _t ? Rf() : 536870912);
    var t = Le.current;
    return (t !== null && (t.flags |= 32), He);
  }
  function De(t, n, l) {
    (((t === Dt && (wt === 2 || wt === 9)) || t.cancelPendingCommit !== null) &&
      (da(t, 0), Kn(t, yt, He, !1)),
      ka(t, l),
      ((St & 2) === 0 || t !== Dt) &&
        (t === Dt &&
          ((St & 2) === 0 && (_i |= l), Bt === 4 && Kn(t, yt, He, !1)),
        en(t)));
  }
  function Sm(t, n, l) {
    if ((St & 6) !== 0) throw Error(s(327));
    var r = (!l && (n & 124) === 0 && (n & t.expiredLanes) === 0) || Na(t, n),
      f = r ? Zb(t, n) : $u(t, n, !0),
      m = r;
    do {
      if (f === 0) {
        ua && !r && Kn(t, n, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), m && !Fb(l))) {
          ((f = $u(t, n, !1)), (m = !1));
          continue;
        }
        if (f === 2) {
          if (((m = n), t.errorRecoveryDisabledLanes & m)) var y = 0;
          else
            ((y = t.pendingLanes & -536870913),
              (y = y !== 0 ? y : y & 536870912 ? 536870912 : 0));
          if (y !== 0) {
            n = y;
            t: {
              var _ = t;
              f = ps;
              var T = _.current.memoizedState.isDehydrated;
              if ((T && (da(_, y).flags |= 256), (y = $u(_, y, !1)), y !== 2)) {
                if (Vu && !T) {
                  ((_.errorRecoveryDisabledLanes |= m), (_i |= m), (f = 4));
                  break t;
                }
                ((m = pe),
                  (pe = f),
                  m !== null &&
                    (pe === null ? (pe = m) : pe.push.apply(pe, m)));
              }
              f = y;
            }
            if (((m = !1), f !== 2)) continue;
          }
        }
        if (f === 1) {
          (da(t, 0), Kn(t, n, 0, !0));
          break;
        }
        t: {
          switch (((r = t), (m = f), m)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Kn(r, n, He, !Pn);
              break t;
            case 2:
              pe = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((n & 62914560) === n && ((f = Pu + 300 - We()), 10 < f)) {
            if ((Kn(r, n, He, !Pn), hl(r, 0, !0) !== 0)) break t;
            r.timeoutHandle = $m(
              wm.bind(null, r, l, pe, eo, Gu, n, He, _i, ca, Pn, m, 2, -0, 0),
              f
            );
            break t;
          }
          wm(r, l, pe, eo, Gu, n, He, _i, ca, Pn, m, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    en(t);
  }
  function wm(t, n, l, r, f, m, y, _, T, z, U, V, N, L) {
    if (
      ((t.timeoutHandle = -1),
      (V = n.subtreeFlags),
      (V & 8192 || (V & 16785408) === 16785408) &&
        ((Ms = { stylesheets: null, count: 0, unsuspend: Ox }),
        pm(n),
        (V = Dx()),
        V !== null))
    ) {
      ((t.cancelPendingCommit = V(
        Cm.bind(null, t, n, m, l, r, f, y, _, T, U, 1, N, L)
      )),
        Kn(t, m, y, !z));
      return;
    }
    Cm(t, n, m, l, r, f, y, _, T);
  }
  function Fb(t) {
    for (var n = t; ; ) {
      var l = n.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        n.flags & 16384 &&
        ((l = n.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var r = 0; r < l.length; r++) {
          var f = l[r],
            m = f.getSnapshot;
          f = f.value;
          try {
            if (!we(m(), f)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = n.child), n.subtreeFlags & 16384 && l !== null))
        ((l.return = n), (n = l));
      else {
        if (n === t) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === t) return !0;
          n = n.return;
        }
        ((n.sibling.return = n.return), (n = n.sibling));
      }
    }
    return !0;
  }
  function Kn(t, n, l, r) {
    ((n &= ~Xu),
      (n &= ~_i),
      (t.suspendedLanes |= n),
      (t.pingedLanes &= ~n),
      r && (t.warmLanes |= n),
      (r = t.expirationTimes));
    for (var f = n; 0 < f; ) {
      var m = 31 - Se(f),
        y = 1 << m;
      ((r[m] = -1), (f &= ~y));
    }
    l !== 0 && Nf(t, l, n);
  }
  function no() {
    return (St & 6) === 0 ? (bs(0), !1) : !0;
  }
  function Ku() {
    if (mt !== null) {
      if (wt === 0) var t = mt.return;
      else ((t = mt), (mn = gi = null), hu(t), (sa = null), (rs = 0), (t = mt));
      for (; t !== null; ) (nm(t.alternate, t), (t = t.return));
      mt = null;
    }
  }
  function da(t, n) {
    var l = t.timeoutHandle;
    (l !== -1 && ((t.timeoutHandle = -1), cx(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      Ku(),
      (Dt = t),
      (mt = l = fn(t.current, null)),
      (yt = n),
      (wt = 0),
      (Oe = null),
      (Pn = !1),
      (ua = Na(t, n)),
      (Vu = !1),
      (ca = He = Xu = _i = Fn = Bt = 0),
      (pe = ps = null),
      (Gu = !1),
      (n & 8) !== 0 && (n |= n & 32));
    var r = t.entangledLanes;
    if (r !== 0)
      for (t = t.entanglements, r &= n; 0 < r; ) {
        var f = 31 - Se(r),
          m = 1 << f;
        ((n |= t[f]), (r &= ~m));
      }
    return ((Sn = n), Ml(), l);
  }
  function Mm(t, n) {
    ((ct = null),
      (H.H = Xl),
      n === Ia || n === zl
        ? ((n = qh()), (wt = 3))
        : n === Bh
          ? ((n = qh()), (wt = 4))
          : (wt =
              n === Vd
                ? 8
                : n !== null &&
                    typeof n == 'object' &&
                    typeof n.then == 'function'
                  ? 6
                  : 1),
      (Oe = n),
      mt === null && ((Bt = 1), Zl(t, Re(n, t.current))));
  }
  function Em() {
    var t = H.H;
    return ((H.H = Xl), t === null ? Xl : t);
  }
  function Tm() {
    var t = H.A;
    return ((H.A = Gb), t);
  }
  function Wu() {
    ((Bt = 4),
      Pn || ((yt & 4194048) !== yt && Le.current !== null) || (ua = !0),
      ((Fn & 134217727) === 0 && (_i & 134217727) === 0) ||
        Dt === null ||
        Kn(Dt, yt, He, !1));
  }
  function $u(t, n, l) {
    var r = St;
    St |= 2;
    var f = Em(),
      m = Tm();
    ((Dt !== t || yt !== n) && ((eo = null), da(t, n)), (n = !1));
    var y = Bt;
    t: do
      try {
        if (wt !== 0 && mt !== null) {
          var _ = mt,
            T = Oe;
          switch (wt) {
            case 8:
              (Ku(), (y = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Le.current === null && (n = !0);
              var z = wt;
              if (((wt = 0), (Oe = null), ma(t, _, T, z), l && ua)) {
                y = 0;
                break t;
              }
              break;
            default:
              ((z = wt), (wt = 0), (Oe = null), ma(t, _, T, z));
          }
        }
        (Qb(), (y = Bt));
        break;
      } catch (U) {
        Mm(t, U);
      }
    while (!0);
    return (
      n && t.shellSuspendCounter++,
      (mn = gi = null),
      (St = r),
      (H.H = f),
      (H.A = m),
      mt === null && ((Dt = null), (yt = 0), Ml()),
      y
    );
  }
  function Qb() {
    for (; mt !== null; ) Om(mt);
  }
  function Zb(t, n) {
    var l = St;
    St |= 2;
    var r = Em(),
      f = Tm();
    Dt !== t || yt !== n
      ? ((eo = null), (to = We() + 500), da(t, n))
      : (ua = Na(t, n));
    t: do
      try {
        if (wt !== 0 && mt !== null) {
          n = mt;
          var m = Oe;
          e: switch (wt) {
            case 1:
              ((wt = 0), (Oe = null), ma(t, n, m, 1));
              break;
            case 2:
            case 9:
              if (Uh(m)) {
                ((wt = 0), (Oe = null), Am(n));
                break;
              }
              ((n = function () {
                ((wt !== 2 && wt !== 9) || Dt !== t || (wt = 7), en(t));
              }),
                m.then(n, n));
              break t;
            case 3:
              wt = 7;
              break t;
            case 4:
              wt = 5;
              break t;
            case 7:
              Uh(m)
                ? ((wt = 0), (Oe = null), Am(n))
                : ((wt = 0), (Oe = null), ma(t, n, m, 7));
              break;
            case 5:
              var y = null;
              switch (mt.tag) {
                case 26:
                  y = mt.memoizedState;
                case 5:
                case 27:
                  var _ = mt;
                  if (!y || ug(y)) {
                    ((wt = 0), (Oe = null));
                    var T = _.sibling;
                    if (T !== null) mt = T;
                    else {
                      var z = _.return;
                      z !== null ? ((mt = z), io(z)) : (mt = null);
                    }
                    break e;
                  }
              }
              ((wt = 0), (Oe = null), ma(t, n, m, 5));
              break;
            case 6:
              ((wt = 0), (Oe = null), ma(t, n, m, 6));
              break;
            case 8:
              (Ku(), (Bt = 6));
              break t;
            default:
              throw Error(s(462));
          }
        }
        Kb();
        break;
      } catch (U) {
        Mm(t, U);
      }
    while (!0);
    return (
      (mn = gi = null),
      (H.H = r),
      (H.A = f),
      (St = l),
      mt !== null ? 0 : ((Dt = null), (yt = 0), Ml(), Bt)
    );
  }
  function Kb() {
    for (; mt !== null && !yy(); ) Om(mt);
  }
  function Om(t) {
    var n = tm(t.alternate, t, Sn);
    ((t.memoizedProps = t.pendingProps), n === null ? io(t) : (mt = n));
  }
  function Am(t) {
    var n = t,
      l = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Zd(l, n, n.pendingProps, n.type, void 0, yt);
        break;
      case 11:
        n = Zd(l, n, n.pendingProps, n.type.render, n.ref, yt);
        break;
      case 5:
        hu(n);
      default:
        (nm(l, n), (n = mt = Dh(n, Sn)), (n = tm(l, n, Sn)));
    }
    ((t.memoizedProps = t.pendingProps), n === null ? io(t) : (mt = n));
  }
  function ma(t, n, l, r) {
    ((mn = gi = null), hu(n), (sa = null), (rs = 0));
    var f = n.return;
    try {
      if (Bb(t, f, n, l, yt)) {
        ((Bt = 1), Zl(t, Re(l, t.current)), (mt = null));
        return;
      }
    } catch (m) {
      if (f !== null) throw ((mt = f), m);
      ((Bt = 1), Zl(t, Re(l, t.current)), (mt = null));
      return;
    }
    n.flags & 32768
      ? (_t || r === 1
          ? (t = !0)
          : ua || (yt & 536870912) !== 0
            ? (t = !1)
            : ((Pn = t = !0),
              (r === 2 || r === 9 || r === 3 || r === 6) &&
                ((r = Le.current),
                r !== null && r.tag === 13 && (r.flags |= 16384))),
        Dm(n, t))
      : io(n);
  }
  function io(t) {
    var n = t;
    do {
      if ((n.flags & 32768) !== 0) {
        Dm(n, Pn);
        return;
      }
      t = n.return;
      var l = Yb(n.alternate, n, Sn);
      if (l !== null) {
        mt = l;
        return;
      }
      if (((n = n.sibling), n !== null)) {
        mt = n;
        return;
      }
      mt = n = t;
    } while (n !== null);
    Bt === 0 && (Bt = 5);
  }
  function Dm(t, n) {
    do {
      var l = qb(t.alternate, t);
      if (l !== null) {
        ((l.flags &= 32767), (mt = l));
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !n && ((t = t.sibling), t !== null))
      ) {
        mt = t;
        return;
      }
      mt = t = l;
    } while (t !== null);
    ((Bt = 6), (mt = null));
  }
  function Cm(t, n, l, r, f, m, y, _, T) {
    t.cancelPendingCommit = null;
    do ao();
    while (te !== 0);
    if ((St & 6) !== 0) throw Error(s(327));
    if (n !== null) {
      if (n === t.current) throw Error(s(177));
      if (
        ((m = n.lanes | n.childLanes),
        (m |= qr),
        Oy(t, l, m, y, _, T),
        t === Dt && ((mt = Dt = null), (yt = 0)),
        (fa = n),
        (Zn = t),
        (ha = l),
        (Fu = m),
        (Qu = f),
        (vm = r),
        (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            Ib(ul, function () {
              return (km(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (r = (n.flags & 13878) !== 0),
        (n.subtreeFlags & 13878) !== 0 || r)
      ) {
        ((r = H.T), (H.T = null), (f = P.p), (P.p = 2), (y = St), (St |= 4));
        try {
          Vb(t, n, l);
        } finally {
          ((St = y), (P.p = f), (H.T = r));
        }
      }
      ((te = 1), jm(), Rm(), zm());
    }
  }
  function jm() {
    if (te === 1) {
      te = 0;
      var t = Zn,
        n = fa,
        l = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || l) {
        ((l = H.T), (H.T = null));
        var r = P.p;
        P.p = 2;
        var f = St;
        St |= 4;
        try {
          dm(n, t);
          var m = uc,
            y = xh(t.containerInfo),
            _ = m.focusedElem,
            T = m.selectionRange;
          if (
            y !== _ &&
            _ &&
            _.ownerDocument &&
            bh(_.ownerDocument.documentElement, _)
          ) {
            if (T !== null && Lr(_)) {
              var z = T.start,
                U = T.end;
              if ((U === void 0 && (U = z), 'selectionStart' in _))
                ((_.selectionStart = z),
                  (_.selectionEnd = Math.min(U, _.value.length)));
              else {
                var V = _.ownerDocument || document,
                  N = (V && V.defaultView) || window;
                if (N.getSelection) {
                  var L = N.getSelection(),
                    lt = _.textContent.length,
                    it = Math.min(T.start, lt),
                    Ot = T.end === void 0 ? it : Math.min(T.end, lt);
                  !L.extend && it > Ot && ((y = Ot), (Ot = it), (it = y));
                  var C = yh(_, it),
                    A = yh(_, Ot);
                  if (
                    C &&
                    A &&
                    (L.rangeCount !== 1 ||
                      L.anchorNode !== C.node ||
                      L.anchorOffset !== C.offset ||
                      L.focusNode !== A.node ||
                      L.focusOffset !== A.offset)
                  ) {
                    var R = V.createRange();
                    (R.setStart(C.node, C.offset),
                      L.removeAllRanges(),
                      it > Ot
                        ? (L.addRange(R), L.extend(A.node, A.offset))
                        : (R.setEnd(A.node, A.offset), L.addRange(R)));
                  }
                }
              }
            }
            for (V = [], L = _; (L = L.parentNode); )
              L.nodeType === 1 &&
                V.push({ element: L, left: L.scrollLeft, top: L.scrollTop });
            for (
              typeof _.focus == 'function' && _.focus(), _ = 0;
              _ < V.length;
              _++
            ) {
              var q = V[_];
              ((q.element.scrollLeft = q.left), (q.element.scrollTop = q.top));
            }
          }
          ((yo = !!rc), (uc = rc = null));
        } finally {
          ((St = f), (P.p = r), (H.T = l));
        }
      }
      ((t.current = n), (te = 2));
    }
  }
  function Rm() {
    if (te === 2) {
      te = 0;
      var t = Zn,
        n = fa,
        l = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || l) {
        ((l = H.T), (H.T = null));
        var r = P.p;
        P.p = 2;
        var f = St;
        St |= 4;
        try {
          um(t, n.alternate, n);
        } finally {
          ((St = f), (P.p = r), (H.T = l));
        }
      }
      te = 3;
    }
  }
  function zm() {
    if (te === 4 || te === 3) {
      ((te = 0), by());
      var t = Zn,
        n = fa,
        l = ha,
        r = vm;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0
        ? (te = 5)
        : ((te = 0), (fa = Zn = null), Nm(t, t.pendingLanes));
      var f = t.pendingLanes;
      if (
        (f === 0 && (Qn = null),
        gr(l),
        (n = n.stateNode),
        _e && typeof _e.onCommitFiberRoot == 'function')
      )
        try {
          _e.onCommitFiberRoot(za, n, void 0, (n.current.flags & 128) === 128);
        } catch {}
      if (r !== null) {
        ((n = H.T), (f = P.p), (P.p = 2), (H.T = null));
        try {
          for (var m = t.onRecoverableError, y = 0; y < r.length; y++) {
            var _ = r[y];
            m(_.value, { componentStack: _.stack });
          }
        } finally {
          ((H.T = n), (P.p = f));
        }
      }
      ((ha & 3) !== 0 && ao(),
        en(t),
        (f = t.pendingLanes),
        (l & 4194090) !== 0 && (f & 42) !== 0
          ? t === Zu
            ? ys++
            : ((ys = 0), (Zu = t))
          : (ys = 0),
        bs(0));
    }
  }
  function Nm(t, n) {
    (t.pooledCacheLanes &= n) === 0 &&
      ((n = t.pooledCache), n != null && ((t.pooledCache = null), $a(n)));
  }
  function ao(t) {
    return (jm(), Rm(), zm(), km());
  }
  function km() {
    if (te !== 5) return !1;
    var t = Zn,
      n = Fu;
    Fu = 0;
    var l = gr(ha),
      r = H.T,
      f = P.p;
    try {
      ((P.p = 32 > l ? 32 : l), (H.T = null), (l = Qu), (Qu = null));
      var m = Zn,
        y = ha;
      if (((te = 0), (fa = Zn = null), (ha = 0), (St & 6) !== 0))
        throw Error(s(331));
      var _ = St;
      if (
        ((St |= 4),
        bm(m.current),
        gm(m, m.current, y, l),
        (St = _),
        bs(0, !1),
        _e && typeof _e.onPostCommitFiberRoot == 'function')
      )
        try {
          _e.onPostCommitFiberRoot(za, m);
        } catch {}
      return !0;
    } finally {
      ((P.p = f), (H.T = r), Nm(t, n));
    }
  }
  function Lm(t, n, l) {
    ((n = Re(l, n)),
      (n = Tu(t.stateNode, n, 2)),
      (t = Bn(t, n, 2)),
      t !== null && (ka(t, 2), en(t)));
  }
  function At(t, n, l) {
    if (t.tag === 3) Lm(t, t, l);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Lm(n, t, l);
          break;
        } else if (n.tag === 1) {
          var r = n.stateNode;
          if (
            typeof n.type.getDerivedStateFromError == 'function' ||
            (typeof r.componentDidCatch == 'function' &&
              (Qn === null || !Qn.has(r)))
          ) {
            ((t = Re(l, t)),
              (l = Yd(2)),
              (r = Bn(n, l, 2)),
              r !== null && (qd(l, r, n, t), ka(r, 2), en(r)));
            break;
          }
        }
        n = n.return;
      }
  }
  function Ju(t, n, l) {
    var r = t.pingCache;
    if (r === null) {
      r = t.pingCache = new Pb();
      var f = new Set();
      r.set(n, f);
    } else ((f = r.get(n)), f === void 0 && ((f = new Set()), r.set(n, f)));
    f.has(l) ||
      ((Vu = !0), f.add(l), (t = Wb.bind(null, t, n, l)), n.then(t, t));
  }
  function Wb(t, n, l) {
    var r = t.pingCache;
    (r !== null && r.delete(n),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      Dt === t &&
        (yt & l) === l &&
        (Bt === 4 || (Bt === 3 && (yt & 62914560) === yt && 300 > We() - Pu)
          ? (St & 2) === 0 && da(t, 0)
          : (Xu |= l),
        ca === yt && (ca = 0)),
      en(t));
  }
  function Hm(t, n) {
    (n === 0 && (n = zf()), (t = Ki(t, n)), t !== null && (ka(t, n), en(t)));
  }
  function $b(t) {
    var n = t.memoizedState,
      l = 0;
    (n !== null && (l = n.retryLane), Hm(t, l));
  }
  function Jb(t, n) {
    var l = 0;
    switch (t.tag) {
      case 13:
        var r = t.stateNode,
          f = t.memoizedState;
        f !== null && (l = f.retryLane);
        break;
      case 19:
        r = t.stateNode;
        break;
      case 22:
        r = t.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    (r !== null && r.delete(n), Hm(t, l));
  }
  function Ib(t, n) {
    return fr(t, n);
  }
  var so = null,
    ga = null,
    Iu = !1,
    lo = !1,
    tc = !1,
    Si = 0;
  function en(t) {
    (t !== ga &&
      t.next === null &&
      (ga === null ? (so = ga = t) : (ga = ga.next = t)),
      (lo = !0),
      Iu || ((Iu = !0), ex()));
  }
  function bs(t, n) {
    if (!tc && lo) {
      tc = !0;
      do
        for (var l = !1, r = so; r !== null; ) {
          if (t !== 0) {
            var f = r.pendingLanes;
            if (f === 0) var m = 0;
            else {
              var y = r.suspendedLanes,
                _ = r.pingedLanes;
              ((m = (1 << (31 - Se(42 | t) + 1)) - 1),
                (m &= f & ~(y & ~_)),
                (m = m & 201326741 ? (m & 201326741) | 1 : m ? m | 2 : 0));
            }
            m !== 0 && ((l = !0), qm(r, m));
          } else
            ((m = yt),
              (m = hl(
                r,
                r === Dt ? m : 0,
                r.cancelPendingCommit !== null || r.timeoutHandle !== -1
              )),
              (m & 3) === 0 || Na(r, m) || ((l = !0), qm(r, m)));
          r = r.next;
        }
      while (l);
      tc = !1;
    }
  }
  function tx() {
    Bm();
  }
  function Bm() {
    lo = Iu = !1;
    var t = 0;
    Si !== 0 && (ux() && (t = Si), (Si = 0));
    for (var n = We(), l = null, r = so; r !== null; ) {
      var f = r.next,
        m = Um(r, n);
      (m === 0
        ? ((r.next = null),
          l === null ? (so = f) : (l.next = f),
          f === null && (ga = l))
        : ((l = r), (t !== 0 || (m & 3) !== 0) && (lo = !0)),
        (r = f));
    }
    bs(t);
  }
  function Um(t, n) {
    for (
      var l = t.suspendedLanes,
        r = t.pingedLanes,
        f = t.expirationTimes,
        m = t.pendingLanes & -62914561;
      0 < m;

    ) {
      var y = 31 - Se(m),
        _ = 1 << y,
        T = f[y];
      (T === -1
        ? ((_ & l) === 0 || (_ & r) !== 0) && (f[y] = Ty(_, n))
        : T <= n && (t.expiredLanes |= _),
        (m &= ~_));
    }
    if (
      ((n = Dt),
      (l = yt),
      (l = hl(
        t,
        t === n ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      (r = t.callbackNode),
      l === 0 ||
        (t === n && (wt === 2 || wt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        r !== null && r !== null && hr(r),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Na(t, l)) {
      if (((n = l & -l), n === t.callbackPriority)) return n;
      switch ((r !== null && hr(r), gr(l))) {
        case 2:
        case 8:
          l = Cf;
          break;
        case 32:
          l = ul;
          break;
        case 268435456:
          l = jf;
          break;
        default:
          l = ul;
      }
      return (
        (r = Ym.bind(null, t)),
        (l = fr(l, r)),
        (t.callbackPriority = n),
        (t.callbackNode = l),
        n
      );
    }
    return (
      r !== null && r !== null && hr(r),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Ym(t, n) {
    if (te !== 0 && te !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var l = t.callbackNode;
    if (ao() && t.callbackNode !== l) return null;
    var r = yt;
    return (
      (r = hl(
        t,
        t === Dt ? r : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1
      )),
      r === 0
        ? null
        : (Sm(t, r, n),
          Um(t, We()),
          t.callbackNode != null && t.callbackNode === l
            ? Ym.bind(null, t)
            : null)
    );
  }
  function qm(t, n) {
    if (ao()) return null;
    Sm(t, n, !0);
  }
  function ex() {
    fx(function () {
      (St & 6) !== 0 ? fr(Df, tx) : Bm();
    });
  }
  function ec() {
    return (Si === 0 && (Si = Rf()), Si);
  }
  function Vm(t) {
    return t == null || typeof t == 'symbol' || typeof t == 'boolean'
      ? null
      : typeof t == 'function'
        ? t
        : yl('' + t);
  }
  function Xm(t, n) {
    var l = n.ownerDocument.createElement('input');
    return (
      (l.name = n.name),
      (l.value = n.value),
      t.id && l.setAttribute('form', t.id),
      n.parentNode.insertBefore(l, n),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function nx(t, n, l, r, f) {
    if (n === 'submit' && l && l.stateNode === f) {
      var m = Vm((f[he] || null).action),
        y = r.submitter;
      y &&
        ((n = (n = y[he] || null)
          ? Vm(n.formAction)
          : y.getAttribute('formAction')),
        n !== null && ((m = n), (y = null)));
      var _ = new _l('action', 'action', null, r, f);
      t.push({
        event: _,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (r.defaultPrevented) {
                if (Si !== 0) {
                  var T = y ? Xm(f, y) : new FormData(f);
                  _u(
                    l,
                    { pending: !0, data: T, method: f.method, action: m },
                    null,
                    T
                  );
                }
              } else
                typeof m == 'function' &&
                  (_.preventDefault(),
                  (T = y ? Xm(f, y) : new FormData(f)),
                  _u(
                    l,
                    { pending: !0, data: T, method: f.method, action: m },
                    m,
                    T
                  ));
            },
            currentTarget: f,
          },
        ],
      });
    }
  }
  for (var nc = 0; nc < Yr.length; nc++) {
    var ic = Yr[nc],
      ix = ic.toLowerCase(),
      ax = ic[0].toUpperCase() + ic.slice(1);
    Xe(ix, 'on' + ax);
  }
  (Xe(Sh, 'onAnimationEnd'),
    Xe(wh, 'onAnimationIteration'),
    Xe(Mh, 'onAnimationStart'),
    Xe('dblclick', 'onDoubleClick'),
    Xe('focusin', 'onFocus'),
    Xe('focusout', 'onBlur'),
    Xe(_b, 'onTransitionRun'),
    Xe(Sb, 'onTransitionStart'),
    Xe(wb, 'onTransitionCancel'),
    Xe(Eh, 'onTransitionEnd'),
    Ui('onMouseEnter', ['mouseout', 'mouseover']),
    Ui('onMouseLeave', ['mouseout', 'mouseover']),
    Ui('onPointerEnter', ['pointerout', 'pointerover']),
    Ui('onPointerLeave', ['pointerout', 'pointerover']),
    li(
      'onChange',
      'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
      )
    ),
    li(
      'onSelect',
      'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
      )
    ),
    li('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    li(
      'onCompositionEnd',
      'compositionend focusout keydown keypress keyup mousedown'.split(' ')
    ),
    li(
      'onCompositionStart',
      'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
    ),
    li(
      'onCompositionUpdate',
      'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
    ));
  var xs =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' '
      ),
    sx = new Set(
      'beforetoggle cancel close invalid load scroll scrollend toggle'
        .split(' ')
        .concat(xs)
    );
  function Gm(t, n) {
    n = (n & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var r = t[l],
        f = r.event;
      r = r.listeners;
      t: {
        var m = void 0;
        if (n)
          for (var y = r.length - 1; 0 <= y; y--) {
            var _ = r[y],
              T = _.instance,
              z = _.currentTarget;
            if (((_ = _.listener), T !== m && f.isPropagationStopped()))
              break t;
            ((m = _), (f.currentTarget = z));
            try {
              m(f);
            } catch (U) {
              Ql(U);
            }
            ((f.currentTarget = null), (m = T));
          }
        else
          for (y = 0; y < r.length; y++) {
            if (
              ((_ = r[y]),
              (T = _.instance),
              (z = _.currentTarget),
              (_ = _.listener),
              T !== m && f.isPropagationStopped())
            )
              break t;
            ((m = _), (f.currentTarget = z));
            try {
              m(f);
            } catch (U) {
              Ql(U);
            }
            ((f.currentTarget = null), (m = T));
          }
      }
    }
  }
  function gt(t, n) {
    var l = n[pr];
    l === void 0 && (l = n[pr] = new Set());
    var r = t + '__bubble';
    l.has(r) || (Pm(n, t, 2, !1), l.add(r));
  }
  function ac(t, n, l) {
    var r = 0;
    (n && (r |= 4), Pm(l, t, r, n));
  }
  var oo = '_reactListening' + Math.random().toString(36).slice(2);
  function sc(t) {
    if (!t[oo]) {
      ((t[oo] = !0),
        Bf.forEach(function (l) {
          l !== 'selectionchange' && (sx.has(l) || ac(l, !1, t), ac(l, !0, t));
        }));
      var n = t.nodeType === 9 ? t : t.ownerDocument;
      n === null || n[oo] || ((n[oo] = !0), ac('selectionchange', !1, n));
    }
  }
  function Pm(t, n, l, r) {
    switch (gg(n)) {
      case 2:
        var f = Rx;
        break;
      case 8:
        f = zx;
        break;
      default:
        f = xc;
    }
    ((l = f.bind(null, n, l, t)),
      (f = void 0),
      !Or ||
        (n !== 'touchstart' && n !== 'touchmove' && n !== 'wheel') ||
        (f = !0),
      r
        ? f !== void 0
          ? t.addEventListener(n, l, { capture: !0, passive: f })
          : t.addEventListener(n, l, !0)
        : f !== void 0
          ? t.addEventListener(n, l, { passive: f })
          : t.addEventListener(n, l, !1));
  }
  function lc(t, n, l, r, f) {
    var m = r;
    if ((n & 1) === 0 && (n & 2) === 0 && r !== null)
      t: for (;;) {
        if (r === null) return;
        var y = r.tag;
        if (y === 3 || y === 4) {
          var _ = r.stateNode.containerInfo;
          if (_ === f) break;
          if (y === 4)
            for (y = r.return; y !== null; ) {
              var T = y.tag;
              if ((T === 3 || T === 4) && y.stateNode.containerInfo === f)
                return;
              y = y.return;
            }
          for (; _ !== null; ) {
            if (((y = Li(_)), y === null)) return;
            if (((T = y.tag), T === 5 || T === 6 || T === 26 || T === 27)) {
              r = m = y;
              continue t;
            }
            _ = _.parentNode;
          }
        }
        r = r.return;
      }
    Jf(function () {
      var z = m,
        U = Er(l),
        V = [];
      t: {
        var N = Th.get(t);
        if (N !== void 0) {
          var L = _l,
            lt = t;
          switch (t) {
            case 'keypress':
              if (xl(l) === 0) break t;
            case 'keydown':
            case 'keyup':
              L = Iy;
              break;
            case 'focusin':
              ((lt = 'focus'), (L = jr));
              break;
            case 'focusout':
              ((lt = 'blur'), (L = jr));
              break;
            case 'beforeblur':
            case 'afterblur':
              L = jr;
              break;
            case 'click':
              if (l.button === 2) break t;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              L = eh;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              L = qy;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              L = nb;
              break;
            case Sh:
            case wh:
            case Mh:
              L = Gy;
              break;
            case Eh:
              L = ab;
              break;
            case 'scroll':
            case 'scrollend':
              L = Uy;
              break;
            case 'wheel':
              L = lb;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              L = Fy;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              L = ih;
              break;
            case 'toggle':
            case 'beforetoggle':
              L = rb;
          }
          var it = (n & 4) !== 0,
            Ot = !it && (t === 'scroll' || t === 'scrollend'),
            C = it ? (N !== null ? N + 'Capture' : null) : N;
          it = [];
          for (var A = z, R; A !== null; ) {
            var q = A;
            if (
              ((R = q.stateNode),
              (q = q.tag),
              (q !== 5 && q !== 26 && q !== 27) ||
                R === null ||
                C === null ||
                ((q = Ba(A, C)), q != null && it.push(vs(A, q, R))),
              Ot)
            )
              break;
            A = A.return;
          }
          0 < it.length &&
            ((N = new L(N, lt, null, l, U)),
            V.push({ event: N, listeners: it }));
        }
      }
      if ((n & 7) === 0) {
        t: {
          if (
            ((N = t === 'mouseover' || t === 'pointerover'),
            (L = t === 'mouseout' || t === 'pointerout'),
            N &&
              l !== Mr &&
              (lt = l.relatedTarget || l.fromElement) &&
              (Li(lt) || lt[ki]))
          )
            break t;
          if (
            (L || N) &&
            ((N =
              U.window === U
                ? U
                : (N = U.ownerDocument)
                  ? N.defaultView || N.parentWindow
                  : window),
            L
              ? ((lt = l.relatedTarget || l.toElement),
                (L = z),
                (lt = lt ? Li(lt) : null),
                lt !== null &&
                  ((Ot = u(lt)),
                  (it = lt.tag),
                  lt !== Ot || (it !== 5 && it !== 27 && it !== 6)) &&
                  (lt = null))
              : ((L = null), (lt = z)),
            L !== lt)
          ) {
            if (
              ((it = eh),
              (q = 'onMouseLeave'),
              (C = 'onMouseEnter'),
              (A = 'mouse'),
              (t === 'pointerout' || t === 'pointerover') &&
                ((it = ih),
                (q = 'onPointerLeave'),
                (C = 'onPointerEnter'),
                (A = 'pointer')),
              (Ot = L == null ? N : Ha(L)),
              (R = lt == null ? N : Ha(lt)),
              (N = new it(q, A + 'leave', L, l, U)),
              (N.target = Ot),
              (N.relatedTarget = R),
              (q = null),
              Li(U) === z &&
                ((it = new it(C, A + 'enter', lt, l, U)),
                (it.target = R),
                (it.relatedTarget = Ot),
                (q = it)),
              (Ot = q),
              L && lt)
            )
              e: {
                for (it = L, C = lt, A = 0, R = it; R; R = pa(R)) A++;
                for (R = 0, q = C; q; q = pa(q)) R++;
                for (; 0 < A - R; ) ((it = pa(it)), A--);
                for (; 0 < R - A; ) ((C = pa(C)), R--);
                for (; A--; ) {
                  if (it === C || (C !== null && it === C.alternate)) break e;
                  ((it = pa(it)), (C = pa(C)));
                }
                it = null;
              }
            else it = null;
            (L !== null && Fm(V, N, L, it, !1),
              lt !== null && Ot !== null && Fm(V, Ot, lt, it, !0));
          }
        }
        t: {
          if (
            ((N = z ? Ha(z) : window),
            (L = N.nodeName && N.nodeName.toLowerCase()),
            L === 'select' || (L === 'input' && N.type === 'file'))
          )
            var $ = fh;
          else if (uh(N))
            if (hh) $ = bb;
            else {
              $ = pb;
              var dt = gb;
            }
          else
            ((L = N.nodeName),
              !L ||
              L.toLowerCase() !== 'input' ||
              (N.type !== 'checkbox' && N.type !== 'radio')
                ? z && wr(z.elementType) && ($ = fh)
                : ($ = yb));
          if ($ && ($ = $(t, z))) {
            ch(V, $, l, U);
            break t;
          }
          (dt && dt(t, N, z),
            t === 'focusout' &&
              z &&
              N.type === 'number' &&
              z.memoizedProps.value != null &&
              Sr(N, 'number', N.value));
        }
        switch (((dt = z ? Ha(z) : window), t)) {
          case 'focusin':
            (uh(dt) || dt.contentEditable === 'true') &&
              ((Fi = dt), (Hr = z), (Fa = null));
            break;
          case 'focusout':
            Fa = Hr = Fi = null;
            break;
          case 'mousedown':
            Br = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ((Br = !1), vh(V, l, U));
            break;
          case 'selectionchange':
            if (vb) break;
          case 'keydown':
          case 'keyup':
            vh(V, l, U);
        }
        var tt;
        if (zr)
          t: {
            switch (t) {
              case 'compositionstart':
                var at = 'onCompositionStart';
                break t;
              case 'compositionend':
                at = 'onCompositionEnd';
                break t;
              case 'compositionupdate':
                at = 'onCompositionUpdate';
                break t;
            }
            at = void 0;
          }
        else
          Pi
            ? oh(t, l) && (at = 'onCompositionEnd')
            : t === 'keydown' &&
              l.keyCode === 229 &&
              (at = 'onCompositionStart');
        (at &&
          (ah &&
            l.locale !== 'ko' &&
            (Pi || at !== 'onCompositionStart'
              ? at === 'onCompositionEnd' && Pi && (tt = If())
              : ((Nn = U),
                (Ar = 'value' in Nn ? Nn.value : Nn.textContent),
                (Pi = !0))),
          (dt = ro(z, at)),
          0 < dt.length &&
            ((at = new nh(at, t, null, l, U)),
            V.push({ event: at, listeners: dt }),
            tt
              ? (at.data = tt)
              : ((tt = rh(l)), tt !== null && (at.data = tt)))),
          (tt = cb ? fb(t, l) : hb(t, l)) &&
            ((at = ro(z, 'onBeforeInput')),
            0 < at.length &&
              ((dt = new nh('onBeforeInput', 'beforeinput', null, l, U)),
              V.push({ event: dt, listeners: at }),
              (dt.data = tt))),
          nx(V, t, z, l, U));
      }
      Gm(V, n);
    });
  }
  function vs(t, n, l) {
    return { instance: t, listener: n, currentTarget: l };
  }
  function ro(t, n) {
    for (var l = n + 'Capture', r = []; t !== null; ) {
      var f = t,
        m = f.stateNode;
      if (
        ((f = f.tag),
        (f !== 5 && f !== 26 && f !== 27) ||
          m === null ||
          ((f = Ba(t, l)),
          f != null && r.unshift(vs(t, f, m)),
          (f = Ba(t, n)),
          f != null && r.push(vs(t, f, m))),
        t.tag === 3)
      )
        return r;
      t = t.return;
    }
    return [];
  }
  function pa(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Fm(t, n, l, r, f) {
    for (var m = n._reactName, y = []; l !== null && l !== r; ) {
      var _ = l,
        T = _.alternate,
        z = _.stateNode;
      if (((_ = _.tag), T !== null && T === r)) break;
      ((_ !== 5 && _ !== 26 && _ !== 27) ||
        z === null ||
        ((T = z),
        f
          ? ((z = Ba(l, m)), z != null && y.unshift(vs(l, z, T)))
          : f || ((z = Ba(l, m)), z != null && y.push(vs(l, z, T)))),
        (l = l.return));
    }
    y.length !== 0 && t.push({ event: n, listeners: y });
  }
  var lx = /\r\n?/g,
    ox = /\u0000|\uFFFD/g;
  function Qm(t) {
    return (typeof t == 'string' ? t : '' + t)
      .replace(
        lx,
        `
`
      )
      .replace(ox, '');
  }
  function Zm(t, n) {
    return ((n = Qm(n)), Qm(t) === n);
  }
  function uo() {}
  function Tt(t, n, l, r, f, m) {
    switch (l) {
      case 'children':
        typeof r == 'string'
          ? n === 'body' || (n === 'textarea' && r === '') || Vi(t, r)
          : (typeof r == 'number' || typeof r == 'bigint') &&
            n !== 'body' &&
            Vi(t, '' + r);
        break;
      case 'className':
        ml(t, 'class', r);
        break;
      case 'tabIndex':
        ml(t, 'tabindex', r);
        break;
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        ml(t, l, r);
        break;
      case 'style':
        Wf(t, r, m);
        break;
      case 'data':
        if (n !== 'object') {
          ml(t, 'data', r);
          break;
        }
      case 'src':
      case 'href':
        if (r === '' && (n !== 'a' || l !== 'href')) {
          t.removeAttribute(l);
          break;
        }
        if (
          r == null ||
          typeof r == 'function' ||
          typeof r == 'symbol' ||
          typeof r == 'boolean'
        ) {
          t.removeAttribute(l);
          break;
        }
        ((r = yl('' + r)), t.setAttribute(l, r));
        break;
      case 'action':
      case 'formAction':
        if (typeof r == 'function') {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof m == 'function' &&
            (l === 'formAction'
              ? (n !== 'input' && Tt(t, n, 'name', f.name, f, null),
                Tt(t, n, 'formEncType', f.formEncType, f, null),
                Tt(t, n, 'formMethod', f.formMethod, f, null),
                Tt(t, n, 'formTarget', f.formTarget, f, null))
              : (Tt(t, n, 'encType', f.encType, f, null),
                Tt(t, n, 'method', f.method, f, null),
                Tt(t, n, 'target', f.target, f, null)));
        if (r == null || typeof r == 'symbol' || typeof r == 'boolean') {
          t.removeAttribute(l);
          break;
        }
        ((r = yl('' + r)), t.setAttribute(l, r));
        break;
      case 'onClick':
        r != null && (t.onclick = uo);
        break;
      case 'onScroll':
        r != null && gt('scroll', t);
        break;
      case 'onScrollEnd':
        r != null && gt('scrollend', t);
        break;
      case 'dangerouslySetInnerHTML':
        if (r != null) {
          if (typeof r != 'object' || !('__html' in r)) throw Error(s(61));
          if (((l = r.__html), l != null)) {
            if (f.children != null) throw Error(s(60));
            t.innerHTML = l;
          }
        }
        break;
      case 'multiple':
        t.multiple = r && typeof r != 'function' && typeof r != 'symbol';
        break;
      case 'muted':
        t.muted = r && typeof r != 'function' && typeof r != 'symbol';
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break;
      case 'autoFocus':
        break;
      case 'xlinkHref':
        if (
          r == null ||
          typeof r == 'function' ||
          typeof r == 'boolean' ||
          typeof r == 'symbol'
        ) {
          t.removeAttribute('xlink:href');
          break;
        }
        ((l = yl('' + r)),
          t.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l));
        break;
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        r != null && typeof r != 'function' && typeof r != 'symbol'
          ? t.setAttribute(l, '' + r)
          : t.removeAttribute(l);
        break;
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        r && typeof r != 'function' && typeof r != 'symbol'
          ? t.setAttribute(l, '')
          : t.removeAttribute(l);
        break;
      case 'capture':
      case 'download':
        r === !0
          ? t.setAttribute(l, '')
          : r !== !1 &&
              r != null &&
              typeof r != 'function' &&
              typeof r != 'symbol'
            ? t.setAttribute(l, r)
            : t.removeAttribute(l);
        break;
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        r != null &&
        typeof r != 'function' &&
        typeof r != 'symbol' &&
        !isNaN(r) &&
        1 <= r
          ? t.setAttribute(l, r)
          : t.removeAttribute(l);
        break;
      case 'rowSpan':
      case 'start':
        r == null || typeof r == 'function' || typeof r == 'symbol' || isNaN(r)
          ? t.removeAttribute(l)
          : t.setAttribute(l, r);
        break;
      case 'popover':
        (gt('beforetoggle', t), gt('toggle', t), dl(t, 'popover', r));
        break;
      case 'xlinkActuate':
        un(t, 'http://www.w3.org/1999/xlink', 'xlink:actuate', r);
        break;
      case 'xlinkArcrole':
        un(t, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', r);
        break;
      case 'xlinkRole':
        un(t, 'http://www.w3.org/1999/xlink', 'xlink:role', r);
        break;
      case 'xlinkShow':
        un(t, 'http://www.w3.org/1999/xlink', 'xlink:show', r);
        break;
      case 'xlinkTitle':
        un(t, 'http://www.w3.org/1999/xlink', 'xlink:title', r);
        break;
      case 'xlinkType':
        un(t, 'http://www.w3.org/1999/xlink', 'xlink:type', r);
        break;
      case 'xmlBase':
        un(t, 'http://www.w3.org/XML/1998/namespace', 'xml:base', r);
        break;
      case 'xmlLang':
        un(t, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', r);
        break;
      case 'xmlSpace':
        un(t, 'http://www.w3.org/XML/1998/namespace', 'xml:space', r);
        break;
      case 'is':
        dl(t, 'is', r);
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== 'o' && l[0] !== 'O') ||
          (l[1] !== 'n' && l[1] !== 'N')) &&
          ((l = Hy.get(l) || l), dl(t, l, r));
    }
  }
  function oc(t, n, l, r, f, m) {
    switch (l) {
      case 'style':
        Wf(t, r, m);
        break;
      case 'dangerouslySetInnerHTML':
        if (r != null) {
          if (typeof r != 'object' || !('__html' in r)) throw Error(s(61));
          if (((l = r.__html), l != null)) {
            if (f.children != null) throw Error(s(60));
            t.innerHTML = l;
          }
        }
        break;
      case 'children':
        typeof r == 'string'
          ? Vi(t, r)
          : (typeof r == 'number' || typeof r == 'bigint') && Vi(t, '' + r);
        break;
      case 'onScroll':
        r != null && gt('scroll', t);
        break;
      case 'onScrollEnd':
        r != null && gt('scrollend', t);
        break;
      case 'onClick':
        r != null && (t.onclick = uo);
        break;
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break;
      case 'innerText':
      case 'textContent':
        break;
      default:
        if (!Uf.hasOwnProperty(l))
          t: {
            if (
              l[0] === 'o' &&
              l[1] === 'n' &&
              ((f = l.endsWith('Capture')),
              (n = l.slice(2, f ? l.length - 7 : void 0)),
              (m = t[he] || null),
              (m = m != null ? m[l] : null),
              typeof m == 'function' && t.removeEventListener(n, m, f),
              typeof r == 'function')
            ) {
              (typeof m != 'function' &&
                m !== null &&
                (l in t
                  ? (t[l] = null)
                  : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(n, r, f));
              break t;
            }
            l in t
              ? (t[l] = r)
              : r === !0
                ? t.setAttribute(l, '')
                : dl(t, l, r);
          }
    }
  }
  function ee(t, n, l) {
    switch (n) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'img':
        (gt('error', t), gt('load', t));
        var r = !1,
          f = !1,
          m;
        for (m in l)
          if (l.hasOwnProperty(m)) {
            var y = l[m];
            if (y != null)
              switch (m) {
                case 'src':
                  r = !0;
                  break;
                case 'srcSet':
                  f = !0;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(s(137, n));
                default:
                  Tt(t, n, m, y, l, null);
              }
          }
        (f && Tt(t, n, 'srcSet', l.srcSet, l, null),
          r && Tt(t, n, 'src', l.src, l, null));
        return;
      case 'input':
        gt('invalid', t);
        var _ = (m = y = f = null),
          T = null,
          z = null;
        for (r in l)
          if (l.hasOwnProperty(r)) {
            var U = l[r];
            if (U != null)
              switch (r) {
                case 'name':
                  f = U;
                  break;
                case 'type':
                  y = U;
                  break;
                case 'checked':
                  T = U;
                  break;
                case 'defaultChecked':
                  z = U;
                  break;
                case 'value':
                  m = U;
                  break;
                case 'defaultValue':
                  _ = U;
                  break;
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (U != null) throw Error(s(137, n));
                  break;
                default:
                  Tt(t, n, r, U, l, null);
              }
          }
        (Ff(t, m, _, T, z, y, f, !1), gl(t));
        return;
      case 'select':
        (gt('invalid', t), (r = y = m = null));
        for (f in l)
          if (l.hasOwnProperty(f) && ((_ = l[f]), _ != null))
            switch (f) {
              case 'value':
                m = _;
                break;
              case 'defaultValue':
                y = _;
                break;
              case 'multiple':
                r = _;
              default:
                Tt(t, n, f, _, l, null);
            }
        ((n = m),
          (l = y),
          (t.multiple = !!r),
          n != null ? qi(t, !!r, n, !1) : l != null && qi(t, !!r, l, !0));
        return;
      case 'textarea':
        (gt('invalid', t), (m = f = r = null));
        for (y in l)
          if (l.hasOwnProperty(y) && ((_ = l[y]), _ != null))
            switch (y) {
              case 'value':
                r = _;
                break;
              case 'defaultValue':
                f = _;
                break;
              case 'children':
                m = _;
                break;
              case 'dangerouslySetInnerHTML':
                if (_ != null) throw Error(s(91));
                break;
              default:
                Tt(t, n, y, _, l, null);
            }
        (Zf(t, r, f, m), gl(t));
        return;
      case 'option':
        for (T in l)
          if (l.hasOwnProperty(T) && ((r = l[T]), r != null))
            switch (T) {
              case 'selected':
                t.selected =
                  r && typeof r != 'function' && typeof r != 'symbol';
                break;
              default:
                Tt(t, n, T, r, l, null);
            }
        return;
      case 'dialog':
        (gt('beforetoggle', t),
          gt('toggle', t),
          gt('cancel', t),
          gt('close', t));
        break;
      case 'iframe':
      case 'object':
        gt('load', t);
        break;
      case 'video':
      case 'audio':
        for (r = 0; r < xs.length; r++) gt(xs[r], t);
        break;
      case 'image':
        (gt('error', t), gt('load', t));
        break;
      case 'details':
        gt('toggle', t);
        break;
      case 'embed':
      case 'source':
      case 'link':
        (gt('error', t), gt('load', t));
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (z in l)
          if (l.hasOwnProperty(z) && ((r = l[z]), r != null))
            switch (z) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(s(137, n));
              default:
                Tt(t, n, z, r, l, null);
            }
        return;
      default:
        if (wr(n)) {
          for (U in l)
            l.hasOwnProperty(U) &&
              ((r = l[U]), r !== void 0 && oc(t, n, U, r, l, void 0));
          return;
        }
    }
    for (_ in l)
      l.hasOwnProperty(_) && ((r = l[_]), r != null && Tt(t, n, _, r, l, null));
  }
  function rx(t, n, l, r) {
    switch (n) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break;
      case 'input':
        var f = null,
          m = null,
          y = null,
          _ = null,
          T = null,
          z = null,
          U = null;
        for (L in l) {
          var V = l[L];
          if (l.hasOwnProperty(L) && V != null)
            switch (L) {
              case 'checked':
                break;
              case 'value':
                break;
              case 'defaultValue':
                T = V;
              default:
                r.hasOwnProperty(L) || Tt(t, n, L, null, r, V);
            }
        }
        for (var N in r) {
          var L = r[N];
          if (((V = l[N]), r.hasOwnProperty(N) && (L != null || V != null)))
            switch (N) {
              case 'type':
                m = L;
                break;
              case 'name':
                f = L;
                break;
              case 'checked':
                z = L;
                break;
              case 'defaultChecked':
                U = L;
                break;
              case 'value':
                y = L;
                break;
              case 'defaultValue':
                _ = L;
                break;
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (L != null) throw Error(s(137, n));
                break;
              default:
                L !== V && Tt(t, n, N, L, r, V);
            }
        }
        _r(t, y, _, T, z, U, m, f);
        return;
      case 'select':
        L = y = _ = N = null;
        for (m in l)
          if (((T = l[m]), l.hasOwnProperty(m) && T != null))
            switch (m) {
              case 'value':
                break;
              case 'multiple':
                L = T;
              default:
                r.hasOwnProperty(m) || Tt(t, n, m, null, r, T);
            }
        for (f in r)
          if (
            ((m = r[f]),
            (T = l[f]),
            r.hasOwnProperty(f) && (m != null || T != null))
          )
            switch (f) {
              case 'value':
                N = m;
                break;
              case 'defaultValue':
                _ = m;
                break;
              case 'multiple':
                y = m;
              default:
                m !== T && Tt(t, n, f, m, r, T);
            }
        ((n = _),
          (l = y),
          (r = L),
          N != null
            ? qi(t, !!l, N, !1)
            : !!r != !!l &&
              (n != null ? qi(t, !!l, n, !0) : qi(t, !!l, l ? [] : '', !1)));
        return;
      case 'textarea':
        L = N = null;
        for (_ in l)
          if (
            ((f = l[_]),
            l.hasOwnProperty(_) && f != null && !r.hasOwnProperty(_))
          )
            switch (_) {
              case 'value':
                break;
              case 'children':
                break;
              default:
                Tt(t, n, _, null, r, f);
            }
        for (y in r)
          if (
            ((f = r[y]),
            (m = l[y]),
            r.hasOwnProperty(y) && (f != null || m != null))
          )
            switch (y) {
              case 'value':
                N = f;
                break;
              case 'defaultValue':
                L = f;
                break;
              case 'children':
                break;
              case 'dangerouslySetInnerHTML':
                if (f != null) throw Error(s(91));
                break;
              default:
                f !== m && Tt(t, n, y, f, r, m);
            }
        Qf(t, N, L);
        return;
      case 'option':
        for (var lt in l)
          if (
            ((N = l[lt]),
            l.hasOwnProperty(lt) && N != null && !r.hasOwnProperty(lt))
          )
            switch (lt) {
              case 'selected':
                t.selected = !1;
                break;
              default:
                Tt(t, n, lt, null, r, N);
            }
        for (T in r)
          if (
            ((N = r[T]),
            (L = l[T]),
            r.hasOwnProperty(T) && N !== L && (N != null || L != null))
          )
            switch (T) {
              case 'selected':
                t.selected =
                  N && typeof N != 'function' && typeof N != 'symbol';
                break;
              default:
                Tt(t, n, T, N, r, L);
            }
        return;
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var it in l)
          ((N = l[it]),
            l.hasOwnProperty(it) &&
              N != null &&
              !r.hasOwnProperty(it) &&
              Tt(t, n, it, null, r, N));
        for (z in r)
          if (
            ((N = r[z]),
            (L = l[z]),
            r.hasOwnProperty(z) && N !== L && (N != null || L != null))
          )
            switch (z) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (N != null) throw Error(s(137, n));
                break;
              default:
                Tt(t, n, z, N, r, L);
            }
        return;
      default:
        if (wr(n)) {
          for (var Ot in l)
            ((N = l[Ot]),
              l.hasOwnProperty(Ot) &&
                N !== void 0 &&
                !r.hasOwnProperty(Ot) &&
                oc(t, n, Ot, void 0, r, N));
          for (U in r)
            ((N = r[U]),
              (L = l[U]),
              !r.hasOwnProperty(U) ||
                N === L ||
                (N === void 0 && L === void 0) ||
                oc(t, n, U, N, r, L));
          return;
        }
    }
    for (var C in l)
      ((N = l[C]),
        l.hasOwnProperty(C) &&
          N != null &&
          !r.hasOwnProperty(C) &&
          Tt(t, n, C, null, r, N));
    for (V in r)
      ((N = r[V]),
        (L = l[V]),
        !r.hasOwnProperty(V) ||
          N === L ||
          (N == null && L == null) ||
          Tt(t, n, V, N, r, L));
  }
  var rc = null,
    uc = null;
  function co(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Km(t) {
    switch (t) {
      case 'http://www.w3.org/2000/svg':
        return 1;
      case 'http://www.w3.org/1998/Math/MathML':
        return 2;
      default:
        return 0;
    }
  }
  function Wm(t, n) {
    if (t === 0)
      switch (n) {
        case 'svg':
          return 1;
        case 'math':
          return 2;
        default:
          return 0;
      }
    return t === 1 && n === 'foreignObject' ? 0 : t;
  }
  function cc(t, n) {
    return (
      t === 'textarea' ||
      t === 'noscript' ||
      typeof n.children == 'string' ||
      typeof n.children == 'number' ||
      typeof n.children == 'bigint' ||
      (typeof n.dangerouslySetInnerHTML == 'object' &&
        n.dangerouslySetInnerHTML !== null &&
        n.dangerouslySetInnerHTML.__html != null)
    );
  }
  var fc = null;
  function ux() {
    var t = window.event;
    return t && t.type === 'popstate'
      ? t === fc
        ? !1
        : ((fc = t), !0)
      : ((fc = null), !1);
  }
  var $m = typeof setTimeout == 'function' ? setTimeout : void 0,
    cx = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Jm = typeof Promise == 'function' ? Promise : void 0,
    fx =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof Jm < 'u'
          ? function (t) {
              return Jm.resolve(null).then(t).catch(hx);
            }
          : $m;
  function hx(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Wn(t) {
    return t === 'head';
  }
  function Im(t, n) {
    var l = n,
      r = 0,
      f = 0;
    do {
      var m = l.nextSibling;
      if ((t.removeChild(l), m && m.nodeType === 8))
        if (((l = m.data), l === '/$')) {
          if (0 < r && 8 > r) {
            l = r;
            var y = t.ownerDocument;
            if ((l & 1 && _s(y.documentElement), l & 2 && _s(y.body), l & 4))
              for (l = y.head, _s(l), y = l.firstChild; y; ) {
                var _ = y.nextSibling,
                  T = y.nodeName;
                (y[La] ||
                  T === 'SCRIPT' ||
                  T === 'STYLE' ||
                  (T === 'LINK' && y.rel.toLowerCase() === 'stylesheet') ||
                  l.removeChild(y),
                  (y = _));
              }
          }
          if (f === 0) {
            (t.removeChild(m), Ds(n));
            return;
          }
          f--;
        } else
          l === '$' || l === '$?' || l === '$!'
            ? f++
            : (r = l.charCodeAt(0) - 48);
      else r = 0;
      l = m;
    } while (l);
    Ds(n);
  }
  function hc(t) {
    var n = t.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var l = n;
      switch (((n = n.nextSibling), l.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          (hc(l), yr(l));
          continue;
        case 'SCRIPT':
        case 'STYLE':
          continue;
        case 'LINK':
          if (l.rel.toLowerCase() === 'stylesheet') continue;
      }
      t.removeChild(l);
    }
  }
  function dx(t, n, l, r) {
    for (; t.nodeType === 1; ) {
      var f = l;
      if (t.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!r && (t.nodeName !== 'INPUT' || t.type !== 'hidden')) break;
      } else if (r) {
        if (!t[La])
          switch (n) {
            case 'meta':
              if (!t.hasAttribute('itemprop')) break;
              return t;
            case 'link':
              if (
                ((m = t.getAttribute('rel')),
                m === 'stylesheet' && t.hasAttribute('data-precedence'))
              )
                break;
              if (
                m !== f.rel ||
                t.getAttribute('href') !==
                  (f.href == null || f.href === '' ? null : f.href) ||
                t.getAttribute('crossorigin') !==
                  (f.crossOrigin == null ? null : f.crossOrigin) ||
                t.getAttribute('title') !== (f.title == null ? null : f.title)
              )
                break;
              return t;
            case 'style':
              if (t.hasAttribute('data-precedence')) break;
              return t;
            case 'script':
              if (
                ((m = t.getAttribute('src')),
                (m !== (f.src == null ? null : f.src) ||
                  t.getAttribute('type') !== (f.type == null ? null : f.type) ||
                  t.getAttribute('crossorigin') !==
                    (f.crossOrigin == null ? null : f.crossOrigin)) &&
                  m &&
                  t.hasAttribute('async') &&
                  !t.hasAttribute('itemprop'))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (n === 'input' && t.type === 'hidden') {
        var m = f.name == null ? null : '' + f.name;
        if (f.type === 'hidden' && t.getAttribute('name') === m) return t;
      } else return t;
      if (((t = Pe(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function mx(t, n, l) {
    if (n === '') return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') &&
          !l) ||
        ((t = Pe(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function dc(t) {
    return (
      t.data === '$!' ||
      (t.data === '$?' && t.ownerDocument.readyState === 'complete')
    );
  }
  function gx(t, n) {
    var l = t.ownerDocument;
    if (t.data !== '$?' || l.readyState === 'complete') n();
    else {
      var r = function () {
        (n(), l.removeEventListener('DOMContentLoaded', r));
      };
      (l.addEventListener('DOMContentLoaded', r), (t._reactRetry = r));
    }
  }
  function Pe(t) {
    for (; t != null; t = t.nextSibling) {
      var n = t.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (
          ((n = t.data),
          n === '$' || n === '$!' || n === '$?' || n === 'F!' || n === 'F')
        )
          break;
        if (n === '/$') return null;
      }
    }
    return t;
  }
  var mc = null;
  function tg(t) {
    t = t.previousSibling;
    for (var n = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === '$' || l === '$!' || l === '$?') {
          if (n === 0) return t;
          n--;
        } else l === '/$' && n++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function eg(t, n, l) {
    switch (((n = co(l)), t)) {
      case 'html':
        if (((t = n.documentElement), !t)) throw Error(s(452));
        return t;
      case 'head':
        if (((t = n.head), !t)) throw Error(s(453));
        return t;
      case 'body':
        if (((t = n.body), !t)) throw Error(s(454));
        return t;
      default:
        throw Error(s(451));
    }
  }
  function _s(t) {
    for (var n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
    yr(t);
  }
  var Be = new Map(),
    ng = new Set();
  function fo(t) {
    return typeof t.getRootNode == 'function'
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var wn = P.d;
  P.d = { f: px, r: yx, D: bx, C: xx, L: vx, m: _x, X: wx, S: Sx, M: Mx };
  function px() {
    var t = wn.f(),
      n = no();
    return t || n;
  }
  function yx(t) {
    var n = Hi(t);
    n !== null && n.tag === 5 && n.type === 'form' ? Sd(n) : wn.r(t);
  }
  var ya = typeof document > 'u' ? null : document;
  function ig(t, n, l) {
    var r = ya;
    if (r && typeof n == 'string' && n) {
      var f = je(n);
      ((f = 'link[rel="' + t + '"][href="' + f + '"]'),
        typeof l == 'string' && (f += '[crossorigin="' + l + '"]'),
        ng.has(f) ||
          (ng.add(f),
          (t = { rel: t, crossOrigin: l, href: n }),
          r.querySelector(f) === null &&
            ((n = r.createElement('link')),
            ee(n, 'link', t),
            Zt(n),
            r.head.appendChild(n))));
    }
  }
  function bx(t) {
    (wn.D(t), ig('dns-prefetch', t, null));
  }
  function xx(t, n) {
    (wn.C(t, n), ig('preconnect', t, n));
  }
  function vx(t, n, l) {
    wn.L(t, n, l);
    var r = ya;
    if (r && t && n) {
      var f = 'link[rel="preload"][as="' + je(n) + '"]';
      n === 'image' && l && l.imageSrcSet
        ? ((f += '[imagesrcset="' + je(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == 'string' &&
            (f += '[imagesizes="' + je(l.imageSizes) + '"]'))
        : (f += '[href="' + je(t) + '"]');
      var m = f;
      switch (n) {
        case 'style':
          m = ba(t);
          break;
        case 'script':
          m = xa(t);
      }
      Be.has(m) ||
        ((t = p(
          {
            rel: 'preload',
            href: n === 'image' && l && l.imageSrcSet ? void 0 : t,
            as: n,
          },
          l
        )),
        Be.set(m, t),
        r.querySelector(f) !== null ||
          (n === 'style' && r.querySelector(Ss(m))) ||
          (n === 'script' && r.querySelector(ws(m))) ||
          ((n = r.createElement('link')),
          ee(n, 'link', t),
          Zt(n),
          r.head.appendChild(n)));
    }
  }
  function _x(t, n) {
    wn.m(t, n);
    var l = ya;
    if (l && t) {
      var r = n && typeof n.as == 'string' ? n.as : 'script',
        f =
          'link[rel="modulepreload"][as="' + je(r) + '"][href="' + je(t) + '"]',
        m = f;
      switch (r) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          m = xa(t);
      }
      if (
        !Be.has(m) &&
        ((t = p({ rel: 'modulepreload', href: t }, n)),
        Be.set(m, t),
        l.querySelector(f) === null)
      ) {
        switch (r) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (l.querySelector(ws(m))) return;
        }
        ((r = l.createElement('link')),
          ee(r, 'link', t),
          Zt(r),
          l.head.appendChild(r));
      }
    }
  }
  function Sx(t, n, l) {
    wn.S(t, n, l);
    var r = ya;
    if (r && t) {
      var f = Bi(r).hoistableStyles,
        m = ba(t);
      n = n || 'default';
      var y = f.get(m);
      if (!y) {
        var _ = { loading: 0, preload: null };
        if ((y = r.querySelector(Ss(m)))) _.loading = 5;
        else {
          ((t = p({ rel: 'stylesheet', href: t, 'data-precedence': n }, l)),
            (l = Be.get(m)) && gc(t, l));
          var T = (y = r.createElement('link'));
          (Zt(T),
            ee(T, 'link', t),
            (T._p = new Promise(function (z, U) {
              ((T.onload = z), (T.onerror = U));
            })),
            T.addEventListener('load', function () {
              _.loading |= 1;
            }),
            T.addEventListener('error', function () {
              _.loading |= 2;
            }),
            (_.loading |= 4),
            ho(y, n, r));
        }
        ((y = { type: 'stylesheet', instance: y, count: 1, state: _ }),
          f.set(m, y));
      }
    }
  }
  function wx(t, n) {
    wn.X(t, n);
    var l = ya;
    if (l && t) {
      var r = Bi(l).hoistableScripts,
        f = xa(t),
        m = r.get(f);
      m ||
        ((m = l.querySelector(ws(f))),
        m ||
          ((t = p({ src: t, async: !0 }, n)),
          (n = Be.get(f)) && pc(t, n),
          (m = l.createElement('script')),
          Zt(m),
          ee(m, 'link', t),
          l.head.appendChild(m)),
        (m = { type: 'script', instance: m, count: 1, state: null }),
        r.set(f, m));
    }
  }
  function Mx(t, n) {
    wn.M(t, n);
    var l = ya;
    if (l && t) {
      var r = Bi(l).hoistableScripts,
        f = xa(t),
        m = r.get(f);
      m ||
        ((m = l.querySelector(ws(f))),
        m ||
          ((t = p({ src: t, async: !0, type: 'module' }, n)),
          (n = Be.get(f)) && pc(t, n),
          (m = l.createElement('script')),
          Zt(m),
          ee(m, 'link', t),
          l.head.appendChild(m)),
        (m = { type: 'script', instance: m, count: 1, state: null }),
        r.set(f, m));
    }
  }
  function ag(t, n, l, r) {
    var f = (f = nt.current) ? fo(f) : null;
    if (!f) throw Error(s(446));
    switch (t) {
      case 'meta':
      case 'title':
        return null;
      case 'style':
        return typeof l.precedence == 'string' && typeof l.href == 'string'
          ? ((n = ba(l.href)),
            (l = Bi(f).hoistableStyles),
            (r = l.get(n)),
            r ||
              ((r = { type: 'style', instance: null, count: 0, state: null }),
              l.set(n, r)),
            r)
          : { type: 'void', instance: null, count: 0, state: null };
      case 'link':
        if (
          l.rel === 'stylesheet' &&
          typeof l.href == 'string' &&
          typeof l.precedence == 'string'
        ) {
          t = ba(l.href);
          var m = Bi(f).hoistableStyles,
            y = m.get(t);
          if (
            (y ||
              ((f = f.ownerDocument || f),
              (y = {
                type: 'stylesheet',
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              m.set(t, y),
              (m = f.querySelector(Ss(t))) &&
                !m._p &&
                ((y.instance = m), (y.state.loading = 5)),
              Be.has(t) ||
                ((l = {
                  rel: 'preload',
                  as: 'style',
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                Be.set(t, l),
                m || Ex(f, t, l, y.state))),
            n && r === null)
          )
            throw Error(s(528, ''));
          return y;
        }
        if (n && r !== null) throw Error(s(529, ''));
        return null;
      case 'script':
        return (
          (n = l.async),
          (l = l.src),
          typeof l == 'string' &&
          n &&
          typeof n != 'function' &&
          typeof n != 'symbol'
            ? ((n = xa(l)),
              (l = Bi(f).hoistableScripts),
              (r = l.get(n)),
              r ||
                ((r = {
                  type: 'script',
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(n, r)),
              r)
            : { type: 'void', instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, t));
    }
  }
  function ba(t) {
    return 'href="' + je(t) + '"';
  }
  function Ss(t) {
    return 'link[rel="stylesheet"][' + t + ']';
  }
  function sg(t) {
    return p({}, t, { 'data-precedence': t.precedence, precedence: null });
  }
  function Ex(t, n, l, r) {
    t.querySelector('link[rel="preload"][as="style"][' + n + ']')
      ? (r.loading = 1)
      : ((n = t.createElement('link')),
        (r.preload = n),
        n.addEventListener('load', function () {
          return (r.loading |= 1);
        }),
        n.addEventListener('error', function () {
          return (r.loading |= 2);
        }),
        ee(n, 'link', l),
        Zt(n),
        t.head.appendChild(n));
  }
  function xa(t) {
    return '[src="' + je(t) + '"]';
  }
  function ws(t) {
    return 'script[async]' + t;
  }
  function lg(t, n, l) {
    if ((n.count++, n.instance === null))
      switch (n.type) {
        case 'style':
          var r = t.querySelector('style[data-href~="' + je(l.href) + '"]');
          if (r) return ((n.instance = r), Zt(r), r);
          var f = p({}, l, {
            'data-href': l.href,
            'data-precedence': l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (r = (t.ownerDocument || t).createElement('style')),
            Zt(r),
            ee(r, 'style', f),
            ho(r, l.precedence, t),
            (n.instance = r)
          );
        case 'stylesheet':
          f = ba(l.href);
          var m = t.querySelector(Ss(f));
          if (m) return ((n.state.loading |= 4), (n.instance = m), Zt(m), m);
          ((r = sg(l)),
            (f = Be.get(f)) && gc(r, f),
            (m = (t.ownerDocument || t).createElement('link')),
            Zt(m));
          var y = m;
          return (
            (y._p = new Promise(function (_, T) {
              ((y.onload = _), (y.onerror = T));
            })),
            ee(m, 'link', r),
            (n.state.loading |= 4),
            ho(m, l.precedence, t),
            (n.instance = m)
          );
        case 'script':
          return (
            (m = xa(l.src)),
            (f = t.querySelector(ws(m)))
              ? ((n.instance = f), Zt(f), f)
              : ((r = l),
                (f = Be.get(m)) && ((r = p({}, l)), pc(r, f)),
                (t = t.ownerDocument || t),
                (f = t.createElement('script')),
                Zt(f),
                ee(f, 'link', r),
                t.head.appendChild(f),
                (n.instance = f))
          );
        case 'void':
          return null;
        default:
          throw Error(s(443, n.type));
      }
    else
      n.type === 'stylesheet' &&
        (n.state.loading & 4) === 0 &&
        ((r = n.instance), (n.state.loading |= 4), ho(r, l.precedence, t));
    return n.instance;
  }
  function ho(t, n, l) {
    for (
      var r = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        f = r.length ? r[r.length - 1] : null,
        m = f,
        y = 0;
      y < r.length;
      y++
    ) {
      var _ = r[y];
      if (_.dataset.precedence === n) m = _;
      else if (m !== f) break;
    }
    m
      ? m.parentNode.insertBefore(t, m.nextSibling)
      : ((n = l.nodeType === 9 ? l.head : l), n.insertBefore(t, n.firstChild));
  }
  function gc(t, n) {
    (t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.title == null && (t.title = n.title));
  }
  function pc(t, n) {
    (t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.integrity == null && (t.integrity = n.integrity));
  }
  var mo = null;
  function og(t, n, l) {
    if (mo === null) {
      var r = new Map(),
        f = (mo = new Map());
      f.set(l, r);
    } else ((f = mo), (r = f.get(l)), r || ((r = new Map()), f.set(l, r)));
    if (r.has(t)) return r;
    for (
      r.set(t, null), l = l.getElementsByTagName(t), f = 0;
      f < l.length;
      f++
    ) {
      var m = l[f];
      if (
        !(
          m[La] ||
          m[ae] ||
          (t === 'link' && m.getAttribute('rel') === 'stylesheet')
        ) &&
        m.namespaceURI !== 'http://www.w3.org/2000/svg'
      ) {
        var y = m.getAttribute(n) || '';
        y = t + y;
        var _ = r.get(y);
        _ ? _.push(m) : r.set(y, [m]);
      }
    }
    return r;
  }
  function rg(t, n, l) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        n === 'title' ? t.querySelector('head > title') : null
      ));
  }
  function Tx(t, n, l) {
    if (l === 1 || n.itemProp != null) return !1;
    switch (t) {
      case 'meta':
      case 'title':
        return !0;
      case 'style':
        if (
          typeof n.precedence != 'string' ||
          typeof n.href != 'string' ||
          n.href === ''
        )
          break;
        return !0;
      case 'link':
        if (
          typeof n.rel != 'string' ||
          typeof n.href != 'string' ||
          n.href === '' ||
          n.onLoad ||
          n.onError
        )
          break;
        switch (n.rel) {
          case 'stylesheet':
            return (
              (t = n.disabled),
              typeof n.precedence == 'string' && t == null
            );
          default:
            return !0;
        }
      case 'script':
        if (
          n.async &&
          typeof n.async != 'function' &&
          typeof n.async != 'symbol' &&
          !n.onLoad &&
          !n.onError &&
          n.src &&
          typeof n.src == 'string'
        )
          return !0;
    }
    return !1;
  }
  function ug(t) {
    return !(t.type === 'stylesheet' && (t.state.loading & 3) === 0);
  }
  var Ms = null;
  function Ox() {}
  function Ax(t, n, l) {
    if (Ms === null) throw Error(s(475));
    var r = Ms;
    if (
      n.type === 'stylesheet' &&
      (typeof l.media != 'string' || matchMedia(l.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var f = ba(l.href),
          m = t.querySelector(Ss(f));
        if (m) {
          ((t = m._p),
            t !== null &&
              typeof t == 'object' &&
              typeof t.then == 'function' &&
              (r.count++, (r = go.bind(r)), t.then(r, r)),
            (n.state.loading |= 4),
            (n.instance = m),
            Zt(m));
          return;
        }
        ((m = t.ownerDocument || t),
          (l = sg(l)),
          (f = Be.get(f)) && gc(l, f),
          (m = m.createElement('link')),
          Zt(m));
        var y = m;
        ((y._p = new Promise(function (_, T) {
          ((y.onload = _), (y.onerror = T));
        })),
          ee(m, 'link', l),
          (n.instance = m));
      }
      (r.stylesheets === null && (r.stylesheets = new Map()),
        r.stylesheets.set(n, t),
        (t = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (r.count++,
          (n = go.bind(r)),
          t.addEventListener('load', n),
          t.addEventListener('error', n)));
    }
  }
  function Dx() {
    if (Ms === null) throw Error(s(475));
    var t = Ms;
    return (
      t.stylesheets && t.count === 0 && yc(t, t.stylesheets),
      0 < t.count
        ? function (n) {
            var l = setTimeout(function () {
              if ((t.stylesheets && yc(t, t.stylesheets), t.unsuspend)) {
                var r = t.unsuspend;
                ((t.unsuspend = null), r());
              }
            }, 6e4);
            return (
              (t.unsuspend = n),
              function () {
                ((t.unsuspend = null), clearTimeout(l));
              }
            );
          }
        : null
    );
  }
  function go() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) yc(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var po = null;
  function yc(t, n) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (po = new Map()),
        n.forEach(Cx, t),
        (po = null),
        go.call(t)));
  }
  function Cx(t, n) {
    if (!(n.state.loading & 4)) {
      var l = po.get(t);
      if (l) var r = l.get(null);
      else {
        ((l = new Map()), po.set(t, l));
        for (
          var f = t.querySelectorAll(
              'link[data-precedence],style[data-precedence]'
            ),
            m = 0;
          m < f.length;
          m++
        ) {
          var y = f[m];
          (y.nodeName === 'LINK' || y.getAttribute('media') !== 'not all') &&
            (l.set(y.dataset.precedence, y), (r = y));
        }
        r && l.set(null, r);
      }
      ((f = n.instance),
        (y = f.getAttribute('data-precedence')),
        (m = l.get(y) || r),
        m === r && l.set(null, f),
        l.set(y, f),
        this.count++,
        (r = go.bind(this)),
        f.addEventListener('load', r),
        f.addEventListener('error', r),
        m
          ? m.parentNode.insertBefore(f, m.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(f, t.firstChild)),
        (n.state.loading |= 4));
    }
  }
  var Es = {
    $$typeof: Y,
    Provider: null,
    Consumer: null,
    _currentValue: et,
    _currentValue2: et,
    _threadCount: 0,
  };
  function jx(t, n, l, r, f, m, y, _) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = dr(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = dr(0)),
      (this.hiddenUpdates = dr(null)),
      (this.identifierPrefix = r),
      (this.onUncaughtError = f),
      (this.onCaughtError = m),
      (this.onRecoverableError = y),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = _),
      (this.incompleteTransitions = new Map()));
  }
  function cg(t, n, l, r, f, m, y, _, T, z, U, V) {
    return (
      (t = new jx(t, n, l, y, _, T, z, V)),
      (n = 1),
      m === !0 && (n |= 24),
      (m = Me(3, null, null, n)),
      (t.current = m),
      (m.stateNode = t),
      (n = Jr()),
      n.refCount++,
      (t.pooledCache = n),
      n.refCount++,
      (m.memoizedState = { element: r, isDehydrated: l, cache: n }),
      nu(m),
      t
    );
  }
  function fg(t) {
    return t ? ((t = Wi), t) : Wi;
  }
  function hg(t, n, l, r, f, m) {
    ((f = fg(f)),
      r.context === null ? (r.context = f) : (r.pendingContext = f),
      (r = Hn(n)),
      (r.payload = { element: l }),
      (m = m === void 0 ? null : m),
      m !== null && (r.callback = m),
      (l = Bn(t, r, n)),
      l !== null && (De(l, t, n), es(l, t, n)));
  }
  function dg(t, n) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < n ? l : n;
    }
  }
  function bc(t, n) {
    (dg(t, n), (t = t.alternate) && dg(t, n));
  }
  function mg(t) {
    if (t.tag === 13) {
      var n = Ki(t, 67108864);
      (n !== null && De(n, t, 67108864), bc(t, 67108864));
    }
  }
  var yo = !0;
  function Rx(t, n, l, r) {
    var f = H.T;
    H.T = null;
    var m = P.p;
    try {
      ((P.p = 2), xc(t, n, l, r));
    } finally {
      ((P.p = m), (H.T = f));
    }
  }
  function zx(t, n, l, r) {
    var f = H.T;
    H.T = null;
    var m = P.p;
    try {
      ((P.p = 8), xc(t, n, l, r));
    } finally {
      ((P.p = m), (H.T = f));
    }
  }
  function xc(t, n, l, r) {
    if (yo) {
      var f = vc(r);
      if (f === null) (lc(t, n, r, bo, l), pg(t, r));
      else if (kx(f, t, n, l, r)) r.stopPropagation();
      else if ((pg(t, r), n & 4 && -1 < Nx.indexOf(t))) {
        for (; f !== null; ) {
          var m = Hi(f);
          if (m !== null)
            switch (m.tag) {
              case 3:
                if (((m = m.stateNode), m.current.memoizedState.isDehydrated)) {
                  var y = si(m.pendingLanes);
                  if (y !== 0) {
                    var _ = m;
                    for (_.pendingLanes |= 2, _.entangledLanes |= 2; y; ) {
                      var T = 1 << (31 - Se(y));
                      ((_.entanglements[1] |= T), (y &= ~T));
                    }
                    (en(m), (St & 6) === 0 && ((to = We() + 500), bs(0)));
                  }
                }
                break;
              case 13:
                ((_ = Ki(m, 2)), _ !== null && De(_, m, 2), no(), bc(m, 2));
            }
          if (((m = vc(r)), m === null && lc(t, n, r, bo, l), m === f)) break;
          f = m;
        }
        f !== null && r.stopPropagation();
      } else lc(t, n, r, null, l);
    }
  }
  function vc(t) {
    return ((t = Er(t)), _c(t));
  }
  var bo = null;
  function _c(t) {
    if (((bo = null), (t = Li(t)), t !== null)) {
      var n = u(t);
      if (n === null) t = null;
      else {
        var l = n.tag;
        if (l === 13) {
          if (((t = c(n)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          t = null;
        } else n !== t && (t = null);
      }
    }
    return ((bo = t), null);
  }
  function gg(t) {
    switch (t) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2;
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8;
      case 'message':
        switch (xy()) {
          case Df:
            return 2;
          case Cf:
            return 8;
          case ul:
          case vy:
            return 32;
          case jf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Sc = !1,
    $n = null,
    Jn = null,
    In = null,
    Ts = new Map(),
    Os = new Map(),
    ti = [],
    Nx =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
        ' '
      );
  function pg(t, n) {
    switch (t) {
      case 'focusin':
      case 'focusout':
        $n = null;
        break;
      case 'dragenter':
      case 'dragleave':
        Jn = null;
        break;
      case 'mouseover':
      case 'mouseout':
        In = null;
        break;
      case 'pointerover':
      case 'pointerout':
        Ts.delete(n.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        Os.delete(n.pointerId);
    }
  }
  function As(t, n, l, r, f, m) {
    return t === null || t.nativeEvent !== m
      ? ((t = {
          blockedOn: n,
          domEventName: l,
          eventSystemFlags: r,
          nativeEvent: m,
          targetContainers: [f],
        }),
        n !== null && ((n = Hi(n)), n !== null && mg(n)),
        t)
      : ((t.eventSystemFlags |= r),
        (n = t.targetContainers),
        f !== null && n.indexOf(f) === -1 && n.push(f),
        t);
  }
  function kx(t, n, l, r, f) {
    switch (n) {
      case 'focusin':
        return (($n = As($n, t, n, l, r, f)), !0);
      case 'dragenter':
        return ((Jn = As(Jn, t, n, l, r, f)), !0);
      case 'mouseover':
        return ((In = As(In, t, n, l, r, f)), !0);
      case 'pointerover':
        var m = f.pointerId;
        return (Ts.set(m, As(Ts.get(m) || null, t, n, l, r, f)), !0);
      case 'gotpointercapture':
        return (
          (m = f.pointerId),
          Os.set(m, As(Os.get(m) || null, t, n, l, r, f)),
          !0
        );
    }
    return !1;
  }
  function yg(t) {
    var n = Li(t.target);
    if (n !== null) {
      var l = u(n);
      if (l !== null) {
        if (((n = l.tag), n === 13)) {
          if (((n = c(l)), n !== null)) {
            ((t.blockedOn = n),
              Ay(t.priority, function () {
                if (l.tag === 13) {
                  var r = Ae();
                  r = mr(r);
                  var f = Ki(l, r);
                  (f !== null && De(f, l, r), bc(l, r));
                }
              }));
            return;
          }
        } else if (n === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function xo(t) {
    if (t.blockedOn !== null) return !1;
    for (var n = t.targetContainers; 0 < n.length; ) {
      var l = vc(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var r = new l.constructor(l.type, l);
        ((Mr = r), l.target.dispatchEvent(r), (Mr = null));
      } else return ((n = Hi(l)), n !== null && mg(n), (t.blockedOn = l), !1);
      n.shift();
    }
    return !0;
  }
  function bg(t, n, l) {
    xo(t) && l.delete(n);
  }
  function Lx() {
    ((Sc = !1),
      $n !== null && xo($n) && ($n = null),
      Jn !== null && xo(Jn) && (Jn = null),
      In !== null && xo(In) && (In = null),
      Ts.forEach(bg),
      Os.forEach(bg));
  }
  function vo(t, n) {
    t.blockedOn === n &&
      ((t.blockedOn = null),
      Sc ||
        ((Sc = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, Lx)));
  }
  var _o = null;
  function xg(t) {
    _o !== t &&
      ((_o = t),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        _o === t && (_o = null);
        for (var n = 0; n < t.length; n += 3) {
          var l = t[n],
            r = t[n + 1],
            f = t[n + 2];
          if (typeof r != 'function') {
            if (_c(r || l) === null) continue;
            break;
          }
          var m = Hi(l);
          m !== null &&
            (t.splice(n, 3),
            (n -= 3),
            _u(m, { pending: !0, data: f, method: l.method, action: r }, r, f));
        }
      }));
  }
  function Ds(t) {
    function n(T) {
      return vo(T, t);
    }
    ($n !== null && vo($n, t),
      Jn !== null && vo(Jn, t),
      In !== null && vo(In, t),
      Ts.forEach(n),
      Os.forEach(n));
    for (var l = 0; l < ti.length; l++) {
      var r = ti[l];
      r.blockedOn === t && (r.blockedOn = null);
    }
    for (; 0 < ti.length && ((l = ti[0]), l.blockedOn === null); )
      (yg(l), l.blockedOn === null && ti.shift());
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (r = 0; r < l.length; r += 3) {
        var f = l[r],
          m = l[r + 1],
          y = f[he] || null;
        if (typeof m == 'function') y || xg(l);
        else if (y) {
          var _ = null;
          if (m && m.hasAttribute('formAction')) {
            if (((f = m), (y = m[he] || null))) _ = y.formAction;
            else if (_c(f) !== null) continue;
          } else _ = y.action;
          (typeof _ == 'function' ? (l[r + 1] = _) : (l.splice(r, 3), (r -= 3)),
            xg(l));
        }
      }
  }
  function wc(t) {
    this._internalRoot = t;
  }
  ((So.prototype.render = wc.prototype.render =
    function (t) {
      var n = this._internalRoot;
      if (n === null) throw Error(s(409));
      var l = n.current,
        r = Ae();
      hg(l, r, t, n, null, null);
    }),
    (So.prototype.unmount = wc.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var n = t.containerInfo;
          (hg(t.current, 2, null, t, null, null), no(), (n[ki] = null));
        }
      }));
  function So(t) {
    this._internalRoot = t;
  }
  So.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var n = Lf();
      t = { blockedOn: null, target: t, priority: n };
      for (var l = 0; l < ti.length && n !== 0 && n < ti[l].priority; l++);
      (ti.splice(l, 0, t), l === 0 && yg(t));
    }
  };
  var vg = e.version;
  if (vg !== '19.1.1') throw Error(s(527, vg, '19.1.1'));
  P.findDOMNode = function (t) {
    var n = t._reactInternals;
    if (n === void 0)
      throw typeof t.render == 'function'
        ? Error(s(188))
        : ((t = Object.keys(t).join(',')), Error(s(268, t)));
    return (
      (t = d(n)),
      (t = t !== null ? g(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Hx = {
    bundleType: 0,
    version: '19.1.1',
    rendererPackageName: 'react-dom',
    currentDispatcherRef: H,
    reconcilerVersion: '19.1.1',
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var wo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wo.isDisabled && wo.supportsFiber)
      try {
        ((za = wo.inject(Hx)), (_e = wo));
      } catch {}
  }
  return (
    (js.createRoot = function (t, n) {
      if (!o(t)) throw Error(s(299));
      var l = !1,
        r = '',
        f = Ld,
        m = Hd,
        y = Bd,
        _ = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (f = n.onUncaughtError),
          n.onCaughtError !== void 0 && (m = n.onCaughtError),
          n.onRecoverableError !== void 0 && (y = n.onRecoverableError),
          n.unstable_transitionCallbacks !== void 0 &&
            (_ = n.unstable_transitionCallbacks)),
        (n = cg(t, 1, !1, null, null, l, r, f, m, y, _, null)),
        (t[ki] = n.current),
        sc(t),
        new wc(n)
      );
    }),
    (js.hydrateRoot = function (t, n, l) {
      if (!o(t)) throw Error(s(299));
      var r = !1,
        f = '',
        m = Ld,
        y = Hd,
        _ = Bd,
        T = null,
        z = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (r = !0),
          l.identifierPrefix !== void 0 && (f = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (m = l.onUncaughtError),
          l.onCaughtError !== void 0 && (y = l.onCaughtError),
          l.onRecoverableError !== void 0 && (_ = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (T = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (z = l.formState)),
        (n = cg(t, 1, !0, n, l ?? null, r, f, m, y, _, T, z)),
        (n.context = fg(null)),
        (l = n.current),
        (r = Ae()),
        (r = mr(r)),
        (f = Hn(r)),
        (f.callback = null),
        Bn(l, f, r),
        (l = r),
        (n.current.lanes = l),
        ka(n, l),
        en(n),
        (t[ki] = n.current),
        sc(t),
        new So(n)
      );
    }),
    (js.version = '19.1.1'),
    js
  );
}
var Cg;
function Zx() {
  if (Cg) return Tc.exports;
  Cg = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (e) {
        console.error(e);
      }
  }
  return (i(), (Tc.exports = Qx()), Tc.exports);
}
var Kx = Zx();
const Wx = 'modulepreload',
  $x = function (i) {
    return '/' + i;
  },
  jg = {},
  Jx = function (e, a, s) {
    let o = Promise.resolve();
    if (a && a.length > 0) {
      let g = function (p) {
        return Promise.all(
          p.map((b) =>
            Promise.resolve(b).then(
              (v) => ({ status: 'fulfilled', value: v }),
              (v) => ({ status: 'rejected', reason: v })
            )
          )
        );
      };
      var c = g;
      document.getElementsByTagName('link');
      const h = document.querySelector('meta[property=csp-nonce]'),
        d = h?.nonce || h?.getAttribute('nonce');
      o = g(
        a.map((p) => {
          if (((p = $x(p)), p in jg)) return;
          jg[p] = !0;
          const b = p.endsWith('.css'),
            v = b ? '[rel="stylesheet"]' : '';
          if (document.querySelector(`link[href="${p}"]${v}`)) return;
          const S = document.createElement('link');
          if (
            ((S.rel = b ? 'stylesheet' : Wx),
            b || (S.as = 'script'),
            (S.crossOrigin = ''),
            (S.href = p),
            d && S.setAttribute('nonce', d),
            document.head.appendChild(S),
            b)
          )
            return new Promise((w, E) => {
              (S.addEventListener('load', w),
                S.addEventListener('error', () =>
                  E(new Error(`Unable to preload CSS for ${p}`))
                ));
            });
        })
      );
    }
    function u(h) {
      const d = new Event('vite:preloadError', { cancelable: !0 });
      if (((d.payload = h), window.dispatchEvent(d), !d.defaultPrevented))
        throw h;
    }
    return o.then((h) => {
      for (const d of h || []) d.status === 'rejected' && u(d.reason);
      return e().catch(u);
    });
  };
/**
 * react-router v7.9.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Rg = 'popstate';
function Ix(i = {}) {
  function e(s, o) {
    let { pathname: u, search: c, hash: h } = s.location;
    return Gc(
      '',
      { pathname: u, search: c, hash: h },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || 'default'
    );
  }
  function a(s, o) {
    return typeof o == 'string' ? o : Fs(o);
  }
  return ev(e, a, null, i);
}
function Nt(i, e) {
  if (i === !1 || i === null || typeof i > 'u') throw new Error(e);
}
function Ze(i, e) {
  if (!i) {
    typeof console < 'u' && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
function tv() {
  return Math.random().toString(36).substring(2, 10);
}
function zg(i, e) {
  return { usr: i.state, key: i.key, idx: e };
}
function Gc(i, e, a = null, s) {
  return {
    pathname: typeof i == 'string' ? i : i.pathname,
    search: '',
    hash: '',
    ...(typeof e == 'string' ? Aa(e) : e),
    state: a,
    key: (e && e.key) || s || tv(),
  };
}
function Fs({ pathname: i = '/', search: e = '', hash: a = '' }) {
  return (
    e && e !== '?' && (i += e.charAt(0) === '?' ? e : '?' + e),
    a && a !== '#' && (i += a.charAt(0) === '#' ? a : '#' + a),
    i
  );
}
function Aa(i) {
  let e = {};
  if (i) {
    let a = i.indexOf('#');
    a >= 0 && ((e.hash = i.substring(a)), (i = i.substring(0, a)));
    let s = i.indexOf('?');
    (s >= 0 && ((e.search = i.substring(s)), (i = i.substring(0, s))),
      i && (e.pathname = i));
  }
  return e;
}
function ev(i, e, a, s = {}) {
  let { window: o = document.defaultView, v5Compat: u = !1 } = s,
    c = o.history,
    h = 'POP',
    d = null,
    g = p();
  g == null && ((g = 0), c.replaceState({ ...c.state, idx: g }, ''));
  function p() {
    return (c.state || { idx: null }).idx;
  }
  function b() {
    h = 'POP';
    let M = p(),
      D = M == null ? null : M - g;
    ((g = M), d && d({ action: h, location: E.location, delta: D }));
  }
  function v(M, D) {
    h = 'PUSH';
    let k = Gc(E.location, M, D);
    g = p() + 1;
    let Y = zg(k, g),
      G = E.createHref(k);
    try {
      c.pushState(Y, '', G);
    } catch (B) {
      if (B instanceof DOMException && B.name === 'DataCloneError') throw B;
      o.location.assign(G);
    }
    u && d && d({ action: h, location: E.location, delta: 1 });
  }
  function S(M, D) {
    h = 'REPLACE';
    let k = Gc(E.location, M, D);
    g = p();
    let Y = zg(k, g),
      G = E.createHref(k);
    (c.replaceState(Y, '', G),
      u && d && d({ action: h, location: E.location, delta: 0 }));
  }
  function w(M) {
    return nv(M);
  }
  let E = {
    get action() {
      return h;
    },
    get location() {
      return i(o, c);
    },
    listen(M) {
      if (d) throw new Error('A history only accepts one active listener');
      return (
        o.addEventListener(Rg, b),
        (d = M),
        () => {
          (o.removeEventListener(Rg, b), (d = null));
        }
      );
    },
    createHref(M) {
      return e(o, M);
    },
    createURL: w,
    encodeLocation(M) {
      let D = w(M);
      return { pathname: D.pathname, search: D.search, hash: D.hash };
    },
    push: v,
    replace: S,
    go(M) {
      return c.go(M);
    },
  };
  return E;
}
function nv(i, e = !1) {
  let a = 'http://localhost';
  (typeof window < 'u' &&
    (a =
      window.location.origin !== 'null'
        ? window.location.origin
        : window.location.href),
    Nt(a, 'No window.location.(origin|href) available to create URL'));
  let s = typeof i == 'string' ? i : Fs(i);
  return (
    (s = s.replace(/ $/, '%20')),
    !e && s.startsWith('//') && (s = a + s),
    new URL(s, a)
  );
}
function i0(i, e, a = '/') {
  return iv(i, e, a, !1);
}
function iv(i, e, a, s) {
  let o = typeof e == 'string' ? Aa(e) : e,
    u = Dn(o.pathname || '/', a);
  if (u == null) return null;
  let c = a0(i);
  av(c);
  let h = null;
  for (let d = 0; h == null && d < c.length; ++d) {
    let g = gv(u);
    h = dv(c[d], g, s);
  }
  return h;
}
function a0(i, e = [], a = [], s = '', o = !1) {
  let u = (c, h, d = o, g) => {
    let p = {
      relativePath: g === void 0 ? c.path || '' : g,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: h,
      route: c,
    };
    if (p.relativePath.startsWith('/')) {
      if (!p.relativePath.startsWith(s) && d) return;
      (Nt(
        p.relativePath.startsWith(s),
        `Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
        (p.relativePath = p.relativePath.slice(s.length)));
    }
    let b = An([s, p.relativePath]),
      v = a.concat(p);
    (c.children &&
      c.children.length > 0 &&
      (Nt(
        c.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${b}".`
      ),
      a0(c.children, e, v, b, d)),
      !(c.path == null && !c.index) &&
        e.push({ path: b, score: fv(b, c.index), routesMeta: v }));
  };
  return (
    i.forEach((c, h) => {
      if (c.path === '' || !c.path?.includes('?')) u(c, h);
      else for (let d of s0(c.path)) u(c, h, !0, d);
    }),
    e
  );
}
function s0(i) {
  let e = i.split('/');
  if (e.length === 0) return [];
  let [a, ...s] = e,
    o = a.endsWith('?'),
    u = a.replace(/\?$/, '');
  if (s.length === 0) return o ? [u, ''] : [u];
  let c = s0(s.join('/')),
    h = [];
  return (
    h.push(...c.map((d) => (d === '' ? u : [u, d].join('/')))),
    o && h.push(...c),
    h.map((d) => (i.startsWith('/') && d === '' ? '/' : d))
  );
}
function av(i) {
  i.sort((e, a) =>
    e.score !== a.score
      ? a.score - e.score
      : hv(
          e.routesMeta.map((s) => s.childrenIndex),
          a.routesMeta.map((s) => s.childrenIndex)
        )
  );
}
var sv = /^:[\w-]+$/,
  lv = 3,
  ov = 2,
  rv = 1,
  uv = 10,
  cv = -2,
  Ng = (i) => i === '*';
function fv(i, e) {
  let a = i.split('/'),
    s = a.length;
  return (
    a.some(Ng) && (s += cv),
    e && (s += ov),
    a
      .filter((o) => !Ng(o))
      .reduce((o, u) => o + (sv.test(u) ? lv : u === '' ? rv : uv), s)
  );
}
function hv(i, e) {
  return i.length === e.length && i.slice(0, -1).every((s, o) => s === e[o])
    ? i[i.length - 1] - e[e.length - 1]
    : 0;
}
function dv(i, e, a = !1) {
  let { routesMeta: s } = i,
    o = {},
    u = '/',
    c = [];
  for (let h = 0; h < s.length; ++h) {
    let d = s[h],
      g = h === s.length - 1,
      p = u === '/' ? e : e.slice(u.length) || '/',
      b = Xo(
        { path: d.relativePath, caseSensitive: d.caseSensitive, end: g },
        p
      ),
      v = d.route;
    if (
      (!b &&
        g &&
        a &&
        !s[s.length - 1].route.index &&
        (b = Xo(
          { path: d.relativePath, caseSensitive: d.caseSensitive, end: !1 },
          p
        )),
      !b)
    )
      return null;
    (Object.assign(o, b.params),
      c.push({
        params: o,
        pathname: An([u, b.pathname]),
        pathnameBase: xv(An([u, b.pathnameBase])),
        route: v,
      }),
      b.pathnameBase !== '/' && (u = An([u, b.pathnameBase])));
  }
  return c;
}
function Xo(i, e) {
  typeof i == 'string' && (i = { path: i, caseSensitive: !1, end: !0 });
  let [a, s] = mv(i.path, i.caseSensitive, i.end),
    o = e.match(a);
  if (!o) return null;
  let u = o[0],
    c = u.replace(/(.)\/+$/, '$1'),
    h = o.slice(1);
  return {
    params: s.reduce((g, { paramName: p, isOptional: b }, v) => {
      if (p === '*') {
        let w = h[v] || '';
        c = u.slice(0, u.length - w.length).replace(/(.)\/+$/, '$1');
      }
      const S = h[v];
      return (
        b && !S ? (g[p] = void 0) : (g[p] = (S || '').replace(/%2F/g, '/')),
        g
      );
    }, {}),
    pathname: u,
    pathnameBase: c,
    pattern: i,
  };
}
function mv(i, e = !1, a = !0) {
  Ze(
    i === '*' || !i.endsWith('*') || i.endsWith('/*'),
    `Route path "${i}" will be treated as if it were "${i.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/, '/*')}".`
  );
  let s = [],
    o =
      '^' +
      i
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (c, h, d) => (
            s.push({ paramName: h, isOptional: d != null }),
            d ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        )
        .replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2');
  return (
    i.endsWith('*')
      ? (s.push({ paramName: '*' }),
        (o += i === '*' || i === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : a
        ? (o += '\\/*$')
        : i !== '' && i !== '/' && (o += '(?:(?=\\/|$))'),
    [new RegExp(o, e ? void 0 : 'i'), s]
  );
}
function gv(i) {
  try {
    return i
      .split('/')
      .map((e) => decodeURIComponent(e).replace(/\//g, '%2F'))
      .join('/');
  } catch (e) {
    return (
      Ze(
        !1,
        `The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`
      ),
      i
    );
  }
}
function Dn(i, e) {
  if (e === '/') return i;
  if (!i.toLowerCase().startsWith(e.toLowerCase())) return null;
  let a = e.endsWith('/') ? e.length - 1 : e.length,
    s = i.charAt(a);
  return s && s !== '/' ? null : i.slice(a) || '/';
}
function pv(i, e = '/') {
  let {
    pathname: a,
    search: s = '',
    hash: o = '',
  } = typeof i == 'string' ? Aa(i) : i;
  return {
    pathname: a ? (a.startsWith('/') ? a : yv(a, e)) : e,
    search: vv(s),
    hash: _v(o),
  };
}
function yv(i, e) {
  let a = e.replace(/\/+$/, '').split('/');
  return (
    i.split('/').forEach((o) => {
      o === '..' ? a.length > 1 && a.pop() : o !== '.' && a.push(o);
    }),
    a.length > 1 ? a.join('/') : '/'
  );
}
function Cc(i, e, a, s) {
  return `Cannot include a '${i}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function bv(i) {
  return i.filter(
    (e, a) => a === 0 || (e.route.path && e.route.path.length > 0)
  );
}
function sf(i) {
  let e = bv(i);
  return e.map((a, s) => (s === e.length - 1 ? a.pathname : a.pathnameBase));
}
function lf(i, e, a, s = !1) {
  let o;
  typeof i == 'string'
    ? (o = Aa(i))
    : ((o = { ...i }),
      Nt(
        !o.pathname || !o.pathname.includes('?'),
        Cc('?', 'pathname', 'search', o)
      ),
      Nt(
        !o.pathname || !o.pathname.includes('#'),
        Cc('#', 'pathname', 'hash', o)
      ),
      Nt(!o.search || !o.search.includes('#'), Cc('#', 'search', 'hash', o)));
  let u = i === '' || o.pathname === '',
    c = u ? '/' : o.pathname,
    h;
  if (c == null) h = a;
  else {
    let b = e.length - 1;
    if (!s && c.startsWith('..')) {
      let v = c.split('/');
      for (; v[0] === '..'; ) (v.shift(), (b -= 1));
      o.pathname = v.join('/');
    }
    h = b >= 0 ? e[b] : '/';
  }
  let d = pv(o, h),
    g = c && c !== '/' && c.endsWith('/'),
    p = (u || c === '.') && a.endsWith('/');
  return (!d.pathname.endsWith('/') && (g || p) && (d.pathname += '/'), d);
}
var An = (i) => i.join('/').replace(/\/\/+/g, '/'),
  xv = (i) => i.replace(/\/+$/, '').replace(/^\/*/, '/'),
  vv = (i) => (!i || i === '?' ? '' : i.startsWith('?') ? i : '?' + i),
  _v = (i) => (!i || i === '#' ? '' : i.startsWith('#') ? i : '#' + i);
function Sv(i) {
  return (
    i != null &&
    typeof i.status == 'number' &&
    typeof i.statusText == 'string' &&
    typeof i.internal == 'boolean' &&
    'data' in i
  );
}
var l0 = ['POST', 'PUT', 'PATCH', 'DELETE'];
new Set(l0);
var wv = ['GET', ...l0];
new Set(wv);
var Da = j.createContext(null);
Da.displayName = 'DataRouter';
var $o = j.createContext(null);
$o.displayName = 'DataRouterState';
j.createContext(!1);
var o0 = j.createContext({ isTransitioning: !1 });
o0.displayName = 'ViewTransition';
var Mv = j.createContext(new Map());
Mv.displayName = 'Fetchers';
var Ev = j.createContext(null);
Ev.displayName = 'Await';
var Ke = j.createContext(null);
Ke.displayName = 'Navigation';
var el = j.createContext(null);
el.displayName = 'Location';
var rn = j.createContext({ outlet: null, matches: [], isDataRoute: !1 });
rn.displayName = 'Route';
var of = j.createContext(null);
of.displayName = 'RouteError';
function Tv(i, { relative: e } = {}) {
  Nt(
    Ca(),
    'useHref() may be used only in the context of a <Router> component.'
  );
  let { basename: a, navigator: s } = j.useContext(Ke),
    { hash: o, pathname: u, search: c } = nl(i, { relative: e }),
    h = u;
  return (
    a !== '/' && (h = u === '/' ? a : An([a, u])),
    s.createHref({ pathname: h, search: c, hash: o })
  );
}
function Ca() {
  return j.useContext(el) != null;
}
function Cn() {
  return (
    Nt(
      Ca(),
      'useLocation() may be used only in the context of a <Router> component.'
    ),
    j.useContext(el).location
  );
}
var r0 =
  'You should call navigate() in a React.useEffect(), not when your component is first rendered.';
function u0(i) {
  j.useContext(Ke).static || j.useLayoutEffect(i);
}
function ja() {
  let { isDataRoute: i } = j.useContext(rn);
  return i ? Uv() : Ov();
}
function Ov() {
  Nt(
    Ca(),
    'useNavigate() may be used only in the context of a <Router> component.'
  );
  let i = j.useContext(Da),
    { basename: e, navigator: a } = j.useContext(Ke),
    { matches: s } = j.useContext(rn),
    { pathname: o } = Cn(),
    u = JSON.stringify(sf(s)),
    c = j.useRef(!1);
  return (
    u0(() => {
      c.current = !0;
    }),
    j.useCallback(
      (d, g = {}) => {
        if ((Ze(c.current, r0), !c.current)) return;
        if (typeof d == 'number') {
          a.go(d);
          return;
        }
        let p = lf(d, JSON.parse(u), o, g.relative === 'path');
        (i == null &&
          e !== '/' &&
          (p.pathname = p.pathname === '/' ? e : An([e, p.pathname])),
          (g.replace ? a.replace : a.push)(p, g.state, g));
      },
      [e, a, u, o, i]
    )
  );
}
j.createContext(null);
function nl(i, { relative: e } = {}) {
  let { matches: a } = j.useContext(rn),
    { pathname: s } = Cn(),
    o = JSON.stringify(sf(a));
  return j.useMemo(() => lf(i, JSON.parse(o), s, e === 'path'), [i, o, s, e]);
}
function Av(i, e) {
  return c0(i, e);
}
function c0(i, e, a, s, o) {
  Nt(
    Ca(),
    'useRoutes() may be used only in the context of a <Router> component.'
  );
  let { navigator: u } = j.useContext(Ke),
    { matches: c } = j.useContext(rn),
    h = c[c.length - 1],
    d = h ? h.params : {},
    g = h ? h.pathname : '/',
    p = h ? h.pathnameBase : '/',
    b = h && h.route;
  {
    let k = (b && b.path) || '';
    f0(
      g,
      !b || k.endsWith('*') || k.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${k}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${k}"> to <Route path="${k === '/' ? '*' : `${k}/*`}">.`
    );
  }
  let v = Cn(),
    S;
  if (e) {
    let k = typeof e == 'string' ? Aa(e) : e;
    (Nt(
      p === '/' || k.pathname?.startsWith(p),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${k.pathname}" was given in the \`location\` prop.`
    ),
      (S = k));
  } else S = v;
  let w = S.pathname || '/',
    E = w;
  if (p !== '/') {
    let k = p.replace(/^\//, '').split('/');
    E = '/' + w.replace(/^\//, '').split('/').slice(k.length).join('/');
  }
  let M = i0(i, { pathname: E });
  (Ze(
    b || M != null,
    `No routes matched location "${S.pathname}${S.search}${S.hash}" `
  ),
    Ze(
      M == null ||
        M[M.length - 1].route.element !== void 0 ||
        M[M.length - 1].route.Component !== void 0 ||
        M[M.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    ));
  let D = zv(
    M &&
      M.map((k) =>
        Object.assign({}, k, {
          params: Object.assign({}, d, k.params),
          pathname: An([
            p,
            u.encodeLocation
              ? u.encodeLocation(
                  k.pathname.replace(/\?/g, '%3F').replace(/#/g, '%23')
                ).pathname
              : k.pathname,
          ]),
          pathnameBase:
            k.pathnameBase === '/'
              ? p
              : An([
                  p,
                  u.encodeLocation
                    ? u.encodeLocation(
                        k.pathnameBase
                          .replace(/\?/g, '%3F')
                          .replace(/#/g, '%23')
                      ).pathname
                    : k.pathnameBase,
                ]),
        })
      ),
    c,
    a,
    s,
    o
  );
  return e && D
    ? j.createElement(
        el.Provider,
        {
          value: {
            location: {
              pathname: '/',
              search: '',
              hash: '',
              state: null,
              key: 'default',
              ...S,
            },
            navigationType: 'POP',
          },
        },
        D
      )
    : D;
}
function Dv() {
  let i = Bv(),
    e = Sv(i)
      ? `${i.status} ${i.statusText}`
      : i instanceof Error
        ? i.message
        : JSON.stringify(i),
    a = i instanceof Error ? i.stack : null,
    s = 'rgba(200,200,200, 0.5)',
    o = { padding: '0.5rem', backgroundColor: s },
    u = { padding: '2px 4px', backgroundColor: s },
    c = null;
  return (
    console.error('Error handled by React Router default ErrorBoundary:', i),
    (c = j.createElement(
      j.Fragment,
      null,
      j.createElement('p', null, '💿 Hey developer 👋'),
      j.createElement(
        'p',
        null,
        'You can provide a way better UX than this when your app throws errors by providing your own ',
        j.createElement('code', { style: u }, 'ErrorBoundary'),
        ' or',
        ' ',
        j.createElement('code', { style: u }, 'errorElement'),
        ' prop on your route.'
      )
    )),
    j.createElement(
      j.Fragment,
      null,
      j.createElement('h2', null, 'Unexpected Application Error!'),
      j.createElement('h3', { style: { fontStyle: 'italic' } }, e),
      a ? j.createElement('pre', { style: o }, a) : null,
      c
    )
  );
}
var Cv = j.createElement(Dv, null),
  jv = class extends j.Component {
    constructor(i) {
      (super(i),
        (this.state = {
          location: i.location,
          revalidation: i.revalidation,
          error: i.error,
        }));
    }
    static getDerivedStateFromError(i) {
      return { error: i };
    }
    static getDerivedStateFromProps(i, e) {
      return e.location !== i.location ||
        (e.revalidation !== 'idle' && i.revalidation === 'idle')
        ? { error: i.error, location: i.location, revalidation: i.revalidation }
        : {
            error: i.error !== void 0 ? i.error : e.error,
            location: e.location,
            revalidation: i.revalidation || e.revalidation,
          };
    }
    componentDidCatch(i, e) {
      this.props.unstable_onError
        ? this.props.unstable_onError(i, e)
        : console.error(
            'React Router caught the following error during render',
            i
          );
    }
    render() {
      return this.state.error !== void 0
        ? j.createElement(
            rn.Provider,
            { value: this.props.routeContext },
            j.createElement(of.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Rv({ routeContext: i, match: e, children: a }) {
  let s = j.useContext(Da);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (e.route.errorElement || e.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = e.route.id),
    j.createElement(rn.Provider, { value: i }, a)
  );
}
function zv(i, e = [], a = null, s = null, o = null) {
  if (i == null) {
    if (!a) return null;
    if (a.errors) i = a.matches;
    else if (e.length === 0 && !a.initialized && a.matches.length > 0)
      i = a.matches;
    else return null;
  }
  let u = i,
    c = a?.errors;
  if (c != null) {
    let g = u.findIndex((p) => p.route.id && c?.[p.route.id] !== void 0);
    (Nt(
      g >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(c).join(',')}`
    ),
      (u = u.slice(0, Math.min(u.length, g + 1))));
  }
  let h = !1,
    d = -1;
  if (a)
    for (let g = 0; g < u.length; g++) {
      let p = u[g];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (d = g),
        p.route.id)
      ) {
        let { loaderData: b, errors: v } = a,
          S =
            p.route.loader &&
            !b.hasOwnProperty(p.route.id) &&
            (!v || v[p.route.id] === void 0);
        if (p.route.lazy || S) {
          ((h = !0), d >= 0 ? (u = u.slice(0, d + 1)) : (u = [u[0]]));
          break;
        }
      }
    }
  return u.reduceRight((g, p, b) => {
    let v,
      S = !1,
      w = null,
      E = null;
    a &&
      ((v = c && p.route.id ? c[p.route.id] : void 0),
      (w = p.route.errorElement || Cv),
      h &&
        (d < 0 && b === 0
          ? (f0(
              'route-fallback',
              !1,
              'No `HydrateFallback` element provided to render during initial hydration'
            ),
            (S = !0),
            (E = null))
          : d === b &&
            ((S = !0), (E = p.route.hydrateFallbackElement || null))));
    let M = e.concat(u.slice(0, b + 1)),
      D = () => {
        let k;
        return (
          v
            ? (k = w)
            : S
              ? (k = E)
              : p.route.Component
                ? (k = j.createElement(p.route.Component, null))
                : p.route.element
                  ? (k = p.route.element)
                  : (k = g),
          j.createElement(Rv, {
            match: p,
            routeContext: { outlet: g, matches: M, isDataRoute: a != null },
            children: k,
          })
        );
      };
    return a && (p.route.ErrorBoundary || p.route.errorElement || b === 0)
      ? j.createElement(jv, {
          location: a.location,
          revalidation: a.revalidation,
          component: w,
          error: v,
          children: D(),
          routeContext: { outlet: null, matches: M, isDataRoute: !0 },
          unstable_onError: s,
        })
      : D();
  }, null);
}
function rf(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Nv(i) {
  let e = j.useContext(Da);
  return (Nt(e, rf(i)), e);
}
function kv(i) {
  let e = j.useContext($o);
  return (Nt(e, rf(i)), e);
}
function Lv(i) {
  let e = j.useContext(rn);
  return (Nt(e, rf(i)), e);
}
function uf(i) {
  let e = Lv(i),
    a = e.matches[e.matches.length - 1];
  return (
    Nt(
      a.route.id,
      `${i} can only be used on routes that contain a unique "id"`
    ),
    a.route.id
  );
}
function Hv() {
  return uf('useRouteId');
}
function Bv() {
  let i = j.useContext(of),
    e = kv('useRouteError'),
    a = uf('useRouteError');
  return i !== void 0 ? i : e.errors?.[a];
}
function Uv() {
  let { router: i } = Nv('useNavigate'),
    e = uf('useNavigate'),
    a = j.useRef(!1);
  return (
    u0(() => {
      a.current = !0;
    }),
    j.useCallback(
      async (o, u = {}) => {
        (Ze(a.current, r0),
          a.current &&
            (typeof o == 'number'
              ? i.navigate(o)
              : await i.navigate(o, { fromRouteId: e, ...u })));
      },
      [i, e]
    )
  );
}
var kg = {};
function f0(i, e, a) {
  !e && !kg[i] && ((kg[i] = !0), Ze(!1, a));
}
j.memo(Yv);
function Yv({ routes: i, future: e, state: a, unstable_onError: s }) {
  return c0(i, void 0, a, s, e);
}
function qv({ to: i, replace: e, state: a, relative: s }) {
  Nt(
    Ca(),
    '<Navigate> may be used only in the context of a <Router> component.'
  );
  let { static: o } = j.useContext(Ke);
  Ze(
    !o,
    '<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.'
  );
  let { matches: u } = j.useContext(rn),
    { pathname: c } = Cn(),
    h = ja(),
    d = lf(i, sf(u), c, s === 'path'),
    g = JSON.stringify(d);
  return (
    j.useEffect(() => {
      h(JSON.parse(g), { replace: e, state: a, relative: s });
    }, [h, g, s, e, a]),
    null
  );
}
function ne(i) {
  Nt(
    !1,
    'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
  );
}
function Vv({
  basename: i = '/',
  children: e = null,
  location: a,
  navigationType: s = 'POP',
  navigator: o,
  static: u = !1,
}) {
  Nt(
    !Ca(),
    'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
  );
  let c = i.replace(/^\/*/, '/'),
    h = j.useMemo(
      () => ({ basename: c, navigator: o, static: u, future: {} }),
      [c, o, u]
    );
  typeof a == 'string' && (a = Aa(a));
  let {
      pathname: d = '/',
      search: g = '',
      hash: p = '',
      state: b = null,
      key: v = 'default',
    } = a,
    S = j.useMemo(() => {
      let w = Dn(d, c);
      return w == null
        ? null
        : {
            location: { pathname: w, search: g, hash: p, state: b, key: v },
            navigationType: s,
          };
    }, [c, d, g, p, b, v, s]);
  return (
    Ze(
      S != null,
      `<Router basename="${c}"> is not able to match the URL "${d}${g}${p}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    S == null
      ? null
      : j.createElement(
          Ke.Provider,
          { value: h },
          j.createElement(el.Provider, { children: e, value: S })
        )
  );
}
function Xv({ children: i, location: e }) {
  return Av(Pc(i), e);
}
function Pc(i, e = []) {
  let a = [];
  return (
    j.Children.forEach(i, (s, o) => {
      if (!j.isValidElement(s)) return;
      let u = [...e, o];
      if (s.type === j.Fragment) {
        a.push.apply(a, Pc(s.props.children, u));
        return;
      }
      (Nt(
        s.type === ne,
        `[${typeof s.type == 'string' ? s.type : s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Nt(
          !s.props.index || !s.props.children,
          'An index route cannot have child routes.'
        ));
      let c = {
        id: s.props.id || u.join('-'),
        caseSensitive: s.props.caseSensitive,
        element: s.props.element,
        Component: s.props.Component,
        index: s.props.index,
        path: s.props.path,
        middleware: s.props.middleware,
        loader: s.props.loader,
        action: s.props.action,
        hydrateFallbackElement: s.props.hydrateFallbackElement,
        HydrateFallback: s.props.HydrateFallback,
        errorElement: s.props.errorElement,
        ErrorBoundary: s.props.ErrorBoundary,
        hasErrorBoundary:
          s.props.hasErrorBoundary === !0 ||
          s.props.ErrorBoundary != null ||
          s.props.errorElement != null,
        shouldRevalidate: s.props.shouldRevalidate,
        handle: s.props.handle,
        lazy: s.props.lazy,
      };
      (s.props.children && (c.children = Pc(s.props.children, u)), a.push(c));
    }),
    a
  );
}
var Uo = 'get',
  Yo = 'application/x-www-form-urlencoded';
function Jo(i) {
  return i != null && typeof i.tagName == 'string';
}
function Gv(i) {
  return Jo(i) && i.tagName.toLowerCase() === 'button';
}
function Pv(i) {
  return Jo(i) && i.tagName.toLowerCase() === 'form';
}
function Fv(i) {
  return Jo(i) && i.tagName.toLowerCase() === 'input';
}
function Qv(i) {
  return !!(i.metaKey || i.altKey || i.ctrlKey || i.shiftKey);
}
function Zv(i, e) {
  return i.button === 0 && (!e || e === '_self') && !Qv(i);
}
var Mo = null;
function Kv() {
  if (Mo === null)
    try {
      (new FormData(document.createElement('form'), 0), (Mo = !1));
    } catch {
      Mo = !0;
    }
  return Mo;
}
var Wv = new Set([
  'application/x-www-form-urlencoded',
  'multipart/form-data',
  'text/plain',
]);
function jc(i) {
  return i != null && !Wv.has(i)
    ? (Ze(
        !1,
        `"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yo}"`
      ),
      null)
    : i;
}
function $v(i, e) {
  let a, s, o, u, c;
  if (Pv(i)) {
    let h = i.getAttribute('action');
    ((s = h ? Dn(h, e) : null),
      (a = i.getAttribute('method') || Uo),
      (o = jc(i.getAttribute('enctype')) || Yo),
      (u = new FormData(i)));
  } else if (Gv(i) || (Fv(i) && (i.type === 'submit' || i.type === 'image'))) {
    let h = i.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let d = i.getAttribute('formaction') || h.getAttribute('action');
    if (
      ((s = d ? Dn(d, e) : null),
      (a = i.getAttribute('formmethod') || h.getAttribute('method') || Uo),
      (o =
        jc(i.getAttribute('formenctype')) ||
        jc(h.getAttribute('enctype')) ||
        Yo),
      (u = new FormData(h, i)),
      !Kv())
    ) {
      let { name: g, type: p, value: b } = i;
      if (p === 'image') {
        let v = g ? `${g}.` : '';
        (u.append(`${v}x`, '0'), u.append(`${v}y`, '0'));
      } else g && u.append(g, b);
    }
  } else {
    if (Jo(i))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    ((a = Uo), (s = null), (o = Yo), (c = i));
  }
  return (
    u && o === 'text/plain' && ((c = u), (u = void 0)),
    { action: s, method: a.toLowerCase(), encType: o, formData: u, body: c }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function cf(i, e) {
  if (i === !1 || i === null || typeof i > 'u') throw new Error(e);
}
function Jv(i, e, a) {
  let s =
    typeof i == 'string'
      ? new URL(
          i,
          typeof window > 'u' ? 'server://singlefetch/' : window.location.origin
        )
      : i;
  return (
    s.pathname === '/'
      ? (s.pathname = `_root.${a}`)
      : e && Dn(s.pathname, e) === '/'
        ? (s.pathname = `${e.replace(/\/$/, '')}/_root.${a}`)
        : (s.pathname = `${s.pathname.replace(/\/$/, '')}.${a}`),
    s
  );
}
async function Iv(i, e) {
  if (i.id in e) return e[i.id];
  try {
    let a = await import(i.module);
    return ((e[i.id] = a), a);
  } catch (a) {
    return (
      console.error(
        `Error loading route module \`${i.module}\`, reloading page...`
      ),
      console.error(a),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function t1(i) {
  return i == null
    ? !1
    : i.href == null
      ? i.rel === 'preload' &&
        typeof i.imageSrcSet == 'string' &&
        typeof i.imageSizes == 'string'
      : typeof i.rel == 'string' && typeof i.href == 'string';
}
async function e1(i, e, a) {
  let s = await Promise.all(
    i.map(async (o) => {
      let u = e.routes[o.route.id];
      if (u) {
        let c = await Iv(u, a);
        return c.links ? c.links() : [];
      }
      return [];
    })
  );
  return s1(
    s
      .flat(1)
      .filter(t1)
      .filter((o) => o.rel === 'stylesheet' || o.rel === 'preload')
      .map((o) =>
        o.rel === 'stylesheet'
          ? { ...o, rel: 'prefetch', as: 'style' }
          : { ...o, rel: 'prefetch' }
      )
  );
}
function Lg(i, e, a, s, o, u) {
  let c = (d, g) => (a[g] ? d.route.id !== a[g].route.id : !0),
    h = (d, g) =>
      a[g].pathname !== d.pathname ||
      (a[g].route.path?.endsWith('*') && a[g].params['*'] !== d.params['*']);
  return u === 'assets'
    ? e.filter((d, g) => c(d, g) || h(d, g))
    : u === 'data'
      ? e.filter((d, g) => {
          let p = s.routes[d.route.id];
          if (!p || !p.hasLoader) return !1;
          if (c(d, g) || h(d, g)) return !0;
          if (d.route.shouldRevalidate) {
            let b = d.route.shouldRevalidate({
              currentUrl: new URL(
                o.pathname + o.search + o.hash,
                window.origin
              ),
              currentParams: a[0]?.params || {},
              nextUrl: new URL(i, window.origin),
              nextParams: d.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof b == 'boolean') return b;
          }
          return !0;
        })
      : [];
}
function n1(i, e, { includeHydrateFallback: a } = {}) {
  return i1(
    i
      .map((s) => {
        let o = e.routes[s.route.id];
        if (!o) return [];
        let u = [o.module];
        return (
          o.clientActionModule && (u = u.concat(o.clientActionModule)),
          o.clientLoaderModule && (u = u.concat(o.clientLoaderModule)),
          a &&
            o.hydrateFallbackModule &&
            (u = u.concat(o.hydrateFallbackModule)),
          o.imports && (u = u.concat(o.imports)),
          u
        );
      })
      .flat(1)
  );
}
function i1(i) {
  return [...new Set(i)];
}
function a1(i) {
  let e = {},
    a = Object.keys(i).sort();
  for (let s of a) e[s] = i[s];
  return e;
}
function s1(i, e) {
  let a = new Set();
  return (
    new Set(e),
    i.reduce((s, o) => {
      let u = JSON.stringify(a1(o));
      return (a.has(u) || (a.add(u), s.push({ key: u, link: o })), s);
    }, [])
  );
}
function h0() {
  let i = j.useContext(Da);
  return (
    cf(
      i,
      'You must render this element inside a <DataRouterContext.Provider> element'
    ),
    i
  );
}
function l1() {
  let i = j.useContext($o);
  return (
    cf(
      i,
      'You must render this element inside a <DataRouterStateContext.Provider> element'
    ),
    i
  );
}
var ff = j.createContext(void 0);
ff.displayName = 'FrameworkContext';
function d0() {
  let i = j.useContext(ff);
  return (
    cf(i, 'You must render this element inside a <HydratedRouter> element'),
    i
  );
}
function o1(i, e) {
  let a = j.useContext(ff),
    [s, o] = j.useState(!1),
    [u, c] = j.useState(!1),
    {
      onFocus: h,
      onBlur: d,
      onMouseEnter: g,
      onMouseLeave: p,
      onTouchStart: b,
    } = e,
    v = j.useRef(null);
  (j.useEffect(() => {
    if ((i === 'render' && c(!0), i === 'viewport')) {
      let E = (D) => {
          D.forEach((k) => {
            c(k.isIntersecting);
          });
        },
        M = new IntersectionObserver(E, { threshold: 0.5 });
      return (
        v.current && M.observe(v.current),
        () => {
          M.disconnect();
        }
      );
    }
  }, [i]),
    j.useEffect(() => {
      if (s) {
        let E = setTimeout(() => {
          c(!0);
        }, 100);
        return () => {
          clearTimeout(E);
        };
      }
    }, [s]));
  let S = () => {
      o(!0);
    },
    w = () => {
      (o(!1), c(!1));
    };
  return a
    ? i !== 'intent'
      ? [u, v, {}]
      : [
          u,
          v,
          {
            onFocus: Rs(h, S),
            onBlur: Rs(d, w),
            onMouseEnter: Rs(g, S),
            onMouseLeave: Rs(p, w),
            onTouchStart: Rs(b, S),
          },
        ]
    : [!1, v, {}];
}
function Rs(i, e) {
  return (a) => {
    (i && i(a), a.defaultPrevented || e(a));
  };
}
function r1({ page: i, ...e }) {
  let { router: a } = h0(),
    s = j.useMemo(() => i0(a.routes, i, a.basename), [a.routes, i, a.basename]);
  return s ? j.createElement(c1, { page: i, matches: s, ...e }) : null;
}
function u1(i) {
  let { manifest: e, routeModules: a } = d0(),
    [s, o] = j.useState([]);
  return (
    j.useEffect(() => {
      let u = !1;
      return (
        e1(i, e, a).then((c) => {
          u || o(c);
        }),
        () => {
          u = !0;
        }
      );
    }, [i, e, a]),
    s
  );
}
function c1({ page: i, matches: e, ...a }) {
  let s = Cn(),
    { manifest: o, routeModules: u } = d0(),
    { basename: c } = h0(),
    { loaderData: h, matches: d } = l1(),
    g = j.useMemo(() => Lg(i, e, d, o, s, 'data'), [i, e, d, o, s]),
    p = j.useMemo(() => Lg(i, e, d, o, s, 'assets'), [i, e, d, o, s]),
    b = j.useMemo(() => {
      if (i === s.pathname + s.search + s.hash) return [];
      let w = new Set(),
        E = !1;
      if (
        (e.forEach((D) => {
          let k = o.routes[D.route.id];
          !k ||
            !k.hasLoader ||
            ((!g.some((Y) => Y.route.id === D.route.id) &&
              D.route.id in h &&
              u[D.route.id]?.shouldRevalidate) ||
            k.hasClientLoader
              ? (E = !0)
              : w.add(D.route.id));
        }),
        w.size === 0)
      )
        return [];
      let M = Jv(i, c, 'data');
      return (
        E &&
          w.size > 0 &&
          M.searchParams.set(
            '_routes',
            e
              .filter((D) => w.has(D.route.id))
              .map((D) => D.route.id)
              .join(',')
          ),
        [M.pathname + M.search]
      );
    }, [c, h, s, o, g, e, i, u]),
    v = j.useMemo(() => n1(p, o), [p, o]),
    S = u1(p);
  return j.createElement(
    j.Fragment,
    null,
    b.map((w) =>
      j.createElement('link', {
        key: w,
        rel: 'prefetch',
        as: 'fetch',
        href: w,
        ...a,
      })
    ),
    v.map((w) =>
      j.createElement('link', { key: w, rel: 'modulepreload', href: w, ...a })
    ),
    S.map(({ key: w, link: E }) =>
      j.createElement('link', { key: w, nonce: a.nonce, ...E })
    )
  );
}
function f1(...i) {
  return (e) => {
    i.forEach((a) => {
      typeof a == 'function' ? a(e) : a != null && (a.current = e);
    });
  };
}
var m0 =
  typeof window < 'u' &&
  typeof window.document < 'u' &&
  typeof window.document.createElement < 'u';
try {
  m0 && (window.__reactRouterVersion = '7.9.2');
} catch {}
function h1({ basename: i, children: e, window: a }) {
  let s = j.useRef();
  s.current == null && (s.current = Ix({ window: a, v5Compat: !0 }));
  let o = s.current,
    [u, c] = j.useState({ action: o.action, location: o.location }),
    h = j.useCallback(
      (d) => {
        j.startTransition(() => c(d));
      },
      [c]
    );
  return (
    j.useLayoutEffect(() => o.listen(h), [o, h]),
    j.createElement(Vv, {
      basename: i,
      children: e,
      location: u.location,
      navigationType: u.action,
      navigator: o,
    })
  );
}
var g0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  xe = j.forwardRef(function (
    {
      onClick: e,
      discover: a = 'render',
      prefetch: s = 'none',
      relative: o,
      reloadDocument: u,
      replace: c,
      state: h,
      target: d,
      to: g,
      preventScrollReset: p,
      viewTransition: b,
      ...v
    },
    S
  ) {
    let { basename: w } = j.useContext(Ke),
      E = typeof g == 'string' && g0.test(g),
      M,
      D = !1;
    if (typeof g == 'string' && E && ((M = g), m0))
      try {
        let J = new URL(window.location.href),
          rt = g.startsWith('//') ? new URL(J.protocol + g) : new URL(g),
          st = Dn(rt.pathname, w);
        rt.origin === J.origin && st != null
          ? (g = st + rt.search + rt.hash)
          : (D = !0);
      } catch {
        Ze(
          !1,
          `<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let k = Tv(g, { relative: o }),
      [Y, G, B] = o1(s, v),
      F = p1(g, {
        replace: c,
        state: h,
        target: d,
        preventScrollReset: p,
        relative: o,
        viewTransition: b,
      });
    function K(J) {
      (e && e(J), J.defaultPrevented || F(J));
    }
    let Q = j.createElement('a', {
      ...v,
      ...B,
      href: M || k,
      onClick: D || u ? e : K,
      ref: f1(S, G),
      target: d,
      'data-discover': !E && a === 'render' ? 'true' : void 0,
    });
    return Y && !E
      ? j.createElement(j.Fragment, null, Q, j.createElement(r1, { page: k }))
      : Q;
  });
xe.displayName = 'Link';
var d1 = j.forwardRef(function (
  {
    'aria-current': e = 'page',
    caseSensitive: a = !1,
    className: s = '',
    end: o = !1,
    style: u,
    to: c,
    viewTransition: h,
    children: d,
    ...g
  },
  p
) {
  let b = nl(c, { relative: g.relative }),
    v = Cn(),
    S = j.useContext($o),
    { navigator: w, basename: E } = j.useContext(Ke),
    M = S != null && _1(b) && h === !0,
    D = w.encodeLocation ? w.encodeLocation(b).pathname : b.pathname,
    k = v.pathname,
    Y =
      S && S.navigation && S.navigation.location
        ? S.navigation.location.pathname
        : null;
  (a ||
    ((k = k.toLowerCase()),
    (Y = Y ? Y.toLowerCase() : null),
    (D = D.toLowerCase())),
    Y && E && (Y = Dn(Y, E) || Y));
  const G = D !== '/' && D.endsWith('/') ? D.length - 1 : D.length;
  let B = k === D || (!o && k.startsWith(D) && k.charAt(G) === '/'),
    F =
      Y != null &&
      (Y === D || (!o && Y.startsWith(D) && Y.charAt(D.length) === '/')),
    K = { isActive: B, isPending: F, isTransitioning: M },
    Q = B ? e : void 0,
    J;
  typeof s == 'function'
    ? (J = s(K))
    : (J = [
        s,
        B ? 'active' : null,
        F ? 'pending' : null,
        M ? 'transitioning' : null,
      ]
        .filter(Boolean)
        .join(' '));
  let rt = typeof u == 'function' ? u(K) : u;
  return j.createElement(
    xe,
    {
      ...g,
      'aria-current': Q,
      className: J,
      ref: p,
      style: rt,
      to: c,
      viewTransition: h,
    },
    typeof d == 'function' ? d(K) : d
  );
});
d1.displayName = 'NavLink';
var m1 = j.forwardRef(
  (
    {
      discover: i = 'render',
      fetcherKey: e,
      navigate: a,
      reloadDocument: s,
      replace: o,
      state: u,
      method: c = Uo,
      action: h,
      onSubmit: d,
      relative: g,
      preventScrollReset: p,
      viewTransition: b,
      ...v
    },
    S
  ) => {
    let w = x1(),
      E = v1(h, { relative: g }),
      M = c.toLowerCase() === 'get' ? 'get' : 'post',
      D = typeof h == 'string' && g0.test(h),
      k = (Y) => {
        if ((d && d(Y), Y.defaultPrevented)) return;
        Y.preventDefault();
        let G = Y.nativeEvent.submitter,
          B = G?.getAttribute('formmethod') || c;
        w(G || Y.currentTarget, {
          fetcherKey: e,
          method: B,
          navigate: a,
          replace: o,
          state: u,
          relative: g,
          preventScrollReset: p,
          viewTransition: b,
        });
      };
    return j.createElement('form', {
      ref: S,
      method: M,
      action: E,
      onSubmit: s ? d : k,
      ...v,
      'data-discover': !D && i === 'render' ? 'true' : void 0,
    });
  }
);
m1.displayName = 'Form';
function g1(i) {
  return `${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function p0(i) {
  let e = j.useContext(Da);
  return (Nt(e, g1(i)), e);
}
function p1(
  i,
  {
    target: e,
    replace: a,
    state: s,
    preventScrollReset: o,
    relative: u,
    viewTransition: c,
  } = {}
) {
  let h = ja(),
    d = Cn(),
    g = nl(i, { relative: u });
  return j.useCallback(
    (p) => {
      if (Zv(p, e)) {
        p.preventDefault();
        let b = a !== void 0 ? a : Fs(d) === Fs(g);
        h(i, {
          replace: b,
          state: s,
          preventScrollReset: o,
          relative: u,
          viewTransition: c,
        });
      }
    },
    [d, h, g, a, s, e, i, o, u, c]
  );
}
var y1 = 0,
  b1 = () => `__${String(++y1)}__`;
function x1() {
  let { router: i } = p0('useSubmit'),
    { basename: e } = j.useContext(Ke),
    a = Hv();
  return j.useCallback(
    async (s, o = {}) => {
      let { action: u, method: c, encType: h, formData: d, body: g } = $v(s, e);
      if (o.navigate === !1) {
        let p = o.fetcherKey || b1();
        await i.fetch(p, a, o.action || u, {
          preventScrollReset: o.preventScrollReset,
          formData: d,
          body: g,
          formMethod: o.method || c,
          formEncType: o.encType || h,
          flushSync: o.flushSync,
        });
      } else
        await i.navigate(o.action || u, {
          preventScrollReset: o.preventScrollReset,
          formData: d,
          body: g,
          formMethod: o.method || c,
          formEncType: o.encType || h,
          replace: o.replace,
          state: o.state,
          fromRouteId: a,
          flushSync: o.flushSync,
          viewTransition: o.viewTransition,
        });
    },
    [i, e, a]
  );
}
function v1(i, { relative: e } = {}) {
  let { basename: a } = j.useContext(Ke),
    s = j.useContext(rn);
  Nt(s, 'useFormAction must be used inside a RouteContext');
  let [o] = s.matches.slice(-1),
    u = { ...nl(i || '.', { relative: e }) },
    c = Cn();
  if (i == null) {
    u.search = c.search;
    let h = new URLSearchParams(u.search),
      d = h.getAll('index');
    if (d.some((p) => p === '')) {
      (h.delete('index'),
        d.filter((b) => b).forEach((b) => h.append('index', b)));
      let p = h.toString();
      u.search = p ? `?${p}` : '';
    }
  }
  return (
    (!i || i === '.') &&
      o.route.index &&
      (u.search = u.search ? u.search.replace(/^\?/, '?index&') : '?index'),
    a !== '/' && (u.pathname = u.pathname === '/' ? a : An([a, u.pathname])),
    Fs(u)
  );
}
function _1(i, { relative: e } = {}) {
  let a = j.useContext(o0);
  Nt(
    a != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: s } = p0('useViewTransitionState'),
    o = nl(i, { relative: e });
  if (!a.isTransitioning) return !1;
  let u = Dn(a.currentLocation.pathname, s) || a.currentLocation.pathname,
    c = Dn(a.nextLocation.pathname, s) || a.nextLocation.pathname;
  return Xo(o.pathname, c) != null || Xo(o.pathname, u) != null;
}
const Fc = j.createContext(),
  S1 = ({ children: i }) => {
    const [e, a] = j.useState(() => localStorage.getItem('token') || null),
      [s, o] = j.useState(
        () => JSON.parse(localStorage.getItem('user')) || null
      ),
      u = (h, d) => {
        (a(h), o(d));
        const { login: g } = useContext(Fc);
        g(result.token, result.user);
      },
      c = () => {
        (a(null),
          o(null),
          localStorage.removeItem('token'),
          localStorage.removeItem('user'));
      };
    return (
      j.useEffect(() => {}, []),
      x.jsx(Fc.Provider, {
        value: { token: e, user: s, login: u, logout: c },
        children: i,
      })
    );
  },
  nn = ({ children: i }) => {
    const { token: e } = j.useContext(Fc);
    return e ? i : x.jsx(qv, { to: '/login', replace: !0 });
  },
  hf = '/assets/logo-DGxljrw-.png',
  Ci = ({ title: i, subtitle: e, children: a }) =>
    x.jsxs('div', {
      className: 'bg-muted flex flex-col items-center justify-center',
      children: [
        x.jsx('img', {
          src: hf,
          alt: 'Fischerbon-logo',
          className: 'm-5',
          width: 200,
          height: 100,
        }),
        x.jsxs('div', {
          className: 'text-center mb-5',
          children: [
            x.jsx('h5', {
              className:
                'text-[#232729]  font-medium text-[20px] lg:text-[32px] leading-7 lg:leading-12 mb-1',
              children: i,
            }),
            x.jsx('p', {
              className: 'text-[#525B61] text-lg leading-7 font-normal mx-5',
              children: e,
            }),
          ],
        }),
        x.jsx('div', {
          className:
            'bg-white rounded-lg py-10 md:px-10 px-5 md:mx-auto shadow-md w-[90%] max-w-xl',
          children: a,
        }),
      ],
    });
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w1 = (i) => i.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
  M1 = (i) =>
    i.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, a, s) =>
      s ? s.toUpperCase() : a.toLowerCase()
    ),
  Hg = (i) => {
    const e = M1(i);
    return e.charAt(0).toUpperCase() + e.slice(1);
  },
  y0 = (...i) =>
    i
      .filter((e, a, s) => !!e && e.trim() !== '' && s.indexOf(e) === a)
      .join(' ')
      .trim(),
  E1 = (i) => {
    for (const e in i)
      if (e.startsWith('aria-') || e === 'role' || e === 'title') return !0;
  };
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var T1 = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const O1 = j.forwardRef(
  (
    {
      color: i = 'currentColor',
      size: e = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: s,
      className: o = '',
      children: u,
      iconNode: c,
      ...h
    },
    d
  ) =>
    j.createElement(
      'svg',
      {
        ref: d,
        ...T1,
        width: e,
        height: e,
        stroke: i,
        strokeWidth: s ? (Number(a) * 24) / Number(e) : a,
        className: y0('lucide', o),
        ...(!u && !E1(h) && { 'aria-hidden': 'true' }),
        ...h,
      },
      [
        ...c.map(([g, p]) => j.createElement(g, p)),
        ...(Array.isArray(u) ? u : [u]),
      ]
    )
);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ie = (i, e) => {
  const a = j.forwardRef(({ className: s, ...o }, u) =>
    j.createElement(O1, {
      ref: u,
      iconNode: e,
      className: y0(`lucide-${w1(Hg(i))}`, `lucide-${i}`, s),
      ...o,
    })
  );
  return ((a.displayName = Hg(i)), a);
};
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const A1 = [
    ['path', { d: 'm12 19-7-7 7-7', key: '1l729n' }],
    ['path', { d: 'M19 12H5', key: 'x3x0zl' }],
  ],
  b0 = ie('arrow-left', A1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const D1 = [
    ['path', { d: 'M5 12h14', key: '1ays0h' }],
    ['path', { d: 'm12 5 7 7-7 7', key: 'xquz4c' }],
  ],
  C1 = ie('arrow-right', D1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const j1 = [
    ['path', { d: 'M12 7v14', key: '1akyts' }],
    [
      'path',
      {
        d: 'M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z',
        key: 'ruj8y',
      },
    ],
  ],
  il = ie('book-open', j1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const R1 = [
    ['path', { d: 'M3 3v16a2 2 0 0 0 2 2h16', key: 'c24i48' }],
    ['path', { d: 'M7 16h8', key: 'srdodz' }],
    ['path', { d: 'M7 11h12', key: '127s9w' }],
    ['path', { d: 'M7 6h3', key: 'w9rmul' }],
  ],
  z1 = ie('chart-bar', R1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const N1 = [
    ['path', { d: 'M21.801 10A10 10 0 1 1 17 3.335', key: 'yps3ct' }],
    ['path', { d: 'm9 11 3 3L22 4', key: '1pflzl' }],
  ],
  df = ie('circle-check-big', N1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const k1 = [
    [
      'path',
      {
        d: 'M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49',
        key: 'ct8e1f',
      },
    ],
    ['path', { d: 'M14.084 14.158a3 3 0 0 1-4.242-4.242', key: '151rxh' }],
    [
      'path',
      {
        d: 'M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143',
        key: '13bj9a',
      },
    ],
    ['path', { d: 'm2 2 20 20', key: '1ooewy' }],
  ],
  Qs = ie('eye-off', k1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const L1 = [
    [
      'path',
      {
        d: 'M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0',
        key: '1nclc0',
      },
    ],
    ['circle', { cx: '12', cy: '12', r: '3', key: '1v7zrd' }],
  ],
  Zs = ie('eye', L1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const H1 = [
    [
      'path',
      { d: 'M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8', key: '5wwlr5' },
    ],
    [
      'path',
      {
        d: 'M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
        key: 'r6nss1',
      },
    ],
  ],
  x0 = ie('house', H1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const B1 = [
    ['path', { d: 'm16 17 5-5-5-5', key: '1bji2h' }],
    ['path', { d: 'M21 12H9', key: 'dn1m92' }],
    ['path', { d: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4', key: '1uf3rs' }],
  ],
  v0 = ie('log-out', B1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const U1 = [
    ['path', { d: 'M4 5h16', key: '1tepv9' }],
    ['path', { d: 'M4 12h16', key: '1lakjw' }],
    ['path', { d: 'M4 19h16', key: '1djgab' }],
  ],
  _0 = ie('menu', U1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y1 = [
    ['circle', { cx: '12', cy: '5', r: '1', key: 'gxeob9' }],
    ['path', { d: 'm9 20 3-6 3 6', key: 'se2kox' }],
    ['path', { d: 'm6 8 6 2 6-2', key: '4o3us4' }],
    ['path', { d: 'M12 10v4', key: '1kjpxc' }],
  ],
  Io = ie('person-standing', Y1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q1 = [
    [
      'path',
      {
        d: 'M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z',
        key: 'w46dr5',
      },
    ],
  ],
  al = ie('puzzle', q1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const V1 = [
    [
      'path',
      {
        d: 'M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z',
        key: '1bo67w',
      },
    ],
    [
      'rect',
      { x: '3', y: '14', width: '7', height: '7', rx: '1', key: '1bkyp8' },
    ],
    ['circle', { cx: '17.5', cy: '17.5', r: '3.5', key: 'w3z12y' }],
  ],
  X1 = ie('shapes', V1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const G1 = [
    [
      'path',
      {
        d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3',
        key: 'wmoenq',
      },
    ],
    ['path', { d: 'M12 9v4', key: 'juzpu7' }],
    ['path', { d: 'M12 17h.01', key: 'p32p05' }],
  ],
  P1 = ie('triangle-alert', G1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const F1 = [
    ['path', { d: 'M12 3v12', key: '1x0j5s' }],
    ['path', { d: 'm17 8-5-5-5 5', key: '7q97r8' }],
    ['path', { d: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', key: 'ih7n3h' }],
  ],
  Q1 = ie('upload', F1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z1 = [
    ['path', { d: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2', key: '975kel' }],
    ['circle', { cx: '12', cy: '7', r: '4', key: '17ys0d' }],
  ],
  S0 = ie('user', Z1);
/**
 * @license lucide-react v0.544.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const K1 = [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ],
  tr = ie('x', K1),
  Bg = {
    success: x.jsx(df, { className: 'text-primary', size: 28 }),
    error: x.jsx(P1, { className: 'text-red-400', size: 28 }),
  },
  fe = ({
    header: i = '',
    message: e = '',
    iconType: a = '',
    border: s = '',
    onClose: o,
  }) => {
    const [u, c] = j.useState(!1),
      [h, d] = j.useState(100);
    return (
      j.useEffect(() => {
        c(!0);
        const g = setTimeout(() => {
            (c(!1), setTimeout(() => o && o(), 400));
          }, 2500),
          p = setInterval(() => {
            d((b) => b - 1);
          }, 25);
        return () => {
          (clearInterval(p), clearTimeout(g));
        };
      }, []),
      x.jsxs('div', {
        className: `fixed top-5 right-5 z-[1000] font-inter transition-transform duration-400 ease-in-out
        ${u ? 'animate-jump-in' : 'animate-jump-out'}`,
        children: [
          x.jsxs('div', {
            className: `flex flex-col bg-white rounded-xl shadow-sm border-2 ${s ? 'border-primary' : 'border-red-400'}`,
            children: [
              x.jsxs('div', {
                className: 'relative flex items-center gap-3 p-3',
                children: [
                  x.jsx('span', { children: Bg[a] && Bg[a] }),
                  x.jsxs('div', {
                    className: 'flex-1',
                    children: [
                      x.jsx('h1', {
                        className: 'text-lg font-bold mb-1',
                        children: i,
                      }),
                      x.jsx('p', {
                        className: 'text-sm text-gray',
                        children: e,
                      }),
                    ],
                  }),
                  x.jsx('button', {
                    onClick: () => {
                      (c(!1), setTimeout(() => o && o(), 400));
                    },
                    className:
                      'absolute top-2 right-2 p-1 rounded-full hover:bg-accent cursor-pointer',
                    children: x.jsx(tr, { size: 20 }),
                  }),
                ],
              }),
              x.jsx('div', {
                style: { width: `${h}%` },
                className: `mx-1.5 h-[2.5px] -mb-[0.5px] rounded-xl ${s ? 'bg-primary' : 'bg-red-400'}`,
              }),
            ],
          }),
          x.jsx('style', {
            children: `
          @keyframes jump-in {
          0% { transform: translateY(-60px) scale(0.8); opacity: 0; }
          60% { transform: translateY(10px) scale(1.05); opacity: 1; }
          80% { transform: translateY(-2px) scale(0.98); }
          100% { transform: translateY(0) scale(1); }
          }
          @keyframes jump-out {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-60px) scale(0.8); opacity: 0; }
          }
          .animate-jump-in { animation: jump-in 0.4s cubic-bezier(.4,2,.6,1) both; }
          .animate-jump-out { animation: jump-out 0.4s cubic-bezier(.4,2,.6,1) both; }
        `,
          }),
        ],
      })
    );
  },
  Rc = () => {
    const i = ja(),
      [e, a] = j.useState({}),
      [s, o] = j.useState(!1),
      [u, c] = j.useState(!1),
      [h, d] = j.useState(''),
      g = () => {
        const E = {};
        return (
          p.email.trim() || (E.email = 'Email is required'),
          p.password.trim() || (E.password = 'Password is required'),
          E
        );
      },
      [p, b] = j.useState({ email: '', password: '' }),
      v = 'https://fischerbon.onrender.com',
      S = (E) => {
        const { name: M, value: D } = E.target;
        (b((k) => ({ ...k, [M]: D })), a((k) => ({ ...k, [M]: '' })));
      },
      w = async (E) => {
        E.preventDefault();
        const M = g();
        if (Object.keys(M).length > 0) {
          a(M);
          return;
        }
        c(!0);
        try {
          const D = await fetch(`${v}/auth/login`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(p),
            }),
            k = await D.json();
          (console.log('Login response:', k),
            !D.ok || !k.success
              ? d('failure')
              : (d('success'),
                localStorage.setItem('token', k.token),
                localStorage.setItem('user', JSON.stringify(k.user)),
                i('/dashboard')));
        } catch {
          d('network');
        } finally {
          c(!1);
        }
      };
    return x.jsxs('div', {
      children: [
        h === 'success'
          ? x.jsx(fe, {
              header: 'Logged In',
              message: 'You can now access your dashboard',
              iconType: 'success',
              border: '#3c97d0',
              onClose: () => d(''),
            })
          : h === 'failure'
            ? x.jsx(fe, {
                header: 'Oops',
                message: 'Something went wrong, try that again later',
                iconType: 'error',
                onClose: () => d(''),
              })
            : h === 'network'
              ? x.jsx(fe, {
                  header: 'Network Error',
                  message: "You're not connected to the internet",
                  iconType: 'error',
                  onClose: () => d(''),
                })
              : '',
        x.jsx(x.Fragment, {
          children: x.jsx(Ci, {
            children: x.jsxs('form', {
              onSubmit: w,
              className: 'space-y-6',
              children: [
                x.jsxs('div', {
                  children: [
                    x.jsx('h5', {
                      className: 'text-dark text-2xl leading-9',
                      children: 'Login',
                    }),
                    x.jsx('p', {
                      className:
                        'text-[16px] lg:text-lg leading-6 lg:leading-7 text-gray font-normal',
                      children: 'Enter your details to access your dashboard',
                    }),
                  ],
                }),
                x.jsxs('div', {
                  children: [
                    x.jsx('label', {
                      htmlFor: 'email',
                      className: 'block text-sm font-medium text-gray mb-1',
                      children: 'Email Address',
                    }),
                    x.jsx('input', {
                      type: 'email',
                      id: 'email',
                      name: 'email',
                      value: p.email,
                      onChange: S,
                      placeholder: 'Enter your email address',
                      className:
                        'w-full p-3 border-2 rounded-md border-accent outline-none placeholder:text-accent text-[16px] leading-6 focus:border-primary transition-colors duration-200 ease-in-out',
                    }),
                    e.email &&
                      x.jsx('p', {
                        className: 'text-red-500 text-sm mt-1',
                        children: e.email,
                      }),
                  ],
                }),
                x.jsxs('div', {
                  className: 'relative',
                  children: [
                    x.jsxs('div', {
                      children: [
                        x.jsx('label', {
                          htmlFor: 'password',
                          className: 'block text-sm font-medium text-gray mb-1',
                          children: 'Enter your password',
                        }),
                        x.jsx('input', {
                          type: s ? 'text' : 'password',
                          name: 'password',
                          value: p.password,
                          onChange: S,
                          placeholder: 'Password',
                          className:
                            'w-full p-3 border-2 rounded-md border-accent outline-none placeholder:text-accent text-[16px] leading-6 focus:border-primary transition-colors duration-200 ease-in-out',
                        }),
                        x.jsx('span', {
                          onClick: () => o(!s),
                          className:
                            'absolute right-3 top-10 cursor-pointer text-accent',
                          children: s
                            ? x.jsx(Qs, { size: 20 })
                            : x.jsx(Zs, { size: 20 }),
                        }),
                        e.password &&
                          x.jsx('p', {
                            className: 'text-red-500 text-sm mt-1',
                            children: e.password,
                          }),
                      ],
                    }),
                    x.jsx('p', {
                      className:
                        'text-right text-[13px] text-primary leading-5',
                      children: x.jsx(xe, {
                        to: '/forgot-password',
                        children: 'Forgot password?',
                      }),
                    }),
                  ],
                }),
                x.jsx('button', {
                  type: 'submit',
                  disabled: u,
                  className: `cursor-pointer w-full py-3 px-4 rounded-md font-medium text-white transition-colors ${u ? 'bg-accent cursor-not-allowed' : 'bg-primary hover:bg-primaryHover'}`,
                  children: u ? 'Logging you in...' : 'Log in',
                }),
                x.jsxs('p', {
                  className: 'text-sm text-[#69757C] leading-5',
                  children: [
                    "Don't have an account?",
                    ' ',
                    x.jsx(xe, {
                      to: '/signup',
                      children: x.jsx('span', {
                        className: 'text-primary',
                        children: 'Sign up',
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  W1 = () => {
    const i = ja(),
      e = 'https://fischerbon.onrender.com',
      [a, s] = j.useState({
        fullName: '',
        email: '',
        password: '',
        role: 'student',
      }),
      [o, u] = j.useState({}),
      [c, h] = j.useState(!1),
      [d, g] = j.useState(!1),
      [p, b] = j.useState(''),
      [v, S] = j.useState(''),
      w = () => {
        const D = {};
        return (
          a.fullName.trim() || (D.fullName = 'Full name is required'),
          a.email.trim() || (D.email = 'Email is required'),
          a.password.trim() || (D.password = 'Password is required'),
          p !== '' && (D.email = 'An account with that mail already exists'),
          a.password.trim().length < 8 &&
            a.password.trim() &&
            (D.password = 'Password must have a minimum of 8 characters'),
          D
        );
      },
      E = (D) => {
        const { name: k, value: Y } = D.target;
        (s((G) => ({ ...G, [k]: Y })), u((G) => ({ ...G, [k]: '' })));
      },
      M = async (D) => {
        D.preventDefault();
        const k = w();
        if (Object.keys(k).length > 0) {
          u(k);
          return;
        }
        g(!0);
        try {
          const G = await (
            await fetch(`${e}/auth/register`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(a),
            })
          ).json();
          G.success
            ? (S('success'), i('/login'))
            : (S('failure'), b(G.message));
        } catch {
          S('network');
        } finally {
          g(!1);
        }
      };
    return x.jsxs('div', {
      children: [
        v === 'success'
          ? x.jsx(fe, {
              header: 'Logged In',
              message: 'You can now access your dashboard',
              iconType: 'success',
              border: '#3c97d0',
              onClose: () => S(''),
            })
          : v === 'failure'
            ? x.jsx(fe, {
                header: 'Oops',
                message: 'Something went wrong, try that again later',
                iconType: 'error',
                onClose: () => S(''),
              })
            : v === 'network'
              ? x.jsx(fe, {
                  header: 'Network Error',
                  message: "You're not connected to the internet",
                  iconType: 'error',
                  onClose: () => S(''),
                })
              : '',
        x.jsx(Ci, {
          children: x.jsxs('form', {
            onSubmit: M,
            className: 'space-y-6',
            children: [
              x.jsxs('div', {
                children: [
                  x.jsx('h5', {
                    className: 'text-dark text-2xl leading-9',
                    children: 'Sign up',
                  }),
                  x.jsx('p', {
                    className:
                      'text-[16px] lg:text-lg leading-6 lg:leading-7 text-gray font-normal',
                    children: 'Create an account and start learning today',
                  }),
                ],
              }),
              x.jsxs('div', {
                children: [
                  x.jsx('label', {
                    htmlFor: 'fullName',
                    className: 'block text-sm font-medium text-gray mb-1',
                    children: 'Full Name',
                  }),
                  x.jsx('input', {
                    type: 'text',
                    id: 'fullName',
                    name: 'fullName',
                    value: a.fullName,
                    onChange: E,
                    placeholder: 'Enter your full name',
                    className:
                      'w-full p-3 border-2 rounded-md border-accent placeholder:text-accent focus:border-primary outline-none',
                  }),
                  o.fullName &&
                    x.jsx('p', {
                      className: 'text-red-500 text-sm mt-1',
                      children: o.fullName,
                    }),
                ],
              }),
              x.jsxs('div', {
                children: [
                  x.jsx('label', {
                    htmlFor: 'email',
                    className: 'block text-sm font-medium text-gray mb-1',
                    children: 'Email Address',
                  }),
                  x.jsx('input', {
                    type: 'email',
                    id: 'email',
                    name: 'email',
                    value: a.email,
                    onChange: E,
                    placeholder: 'Enter your email',
                    className:
                      'w-full p-3 border-2 rounded-md border-accent placeholder:text-accent focus:border-primary outline-none',
                  }),
                  o.email &&
                    x.jsx('p', {
                      className: 'text-red-500 text-sm mt-1',
                      children: o.email,
                    }),
                ],
              }),
              x.jsxs('div', {
                className: 'relative',
                children: [
                  x.jsx('label', {
                    htmlFor: 'password',
                    className: 'block text-sm font-medium text-gray mb-1',
                    children: 'Password',
                  }),
                  x.jsx('input', {
                    type: c ? 'text' : 'password',
                    id: 'password',
                    name: 'password',
                    value: a.password,
                    onChange: E,
                    placeholder: 'Enter your password',
                    className:
                      'w-full p-3 border-2 rounded-md border-accent placeholder:text-accent focus:border-primary outline-none',
                  }),
                  x.jsx('span', {
                    onClick: () => h((D) => !D),
                    className:
                      'absolute right-3 top-10 cursor-pointer text-accent',
                    children: c
                      ? x.jsx(Qs, { size: 20 })
                      : x.jsx(Zs, { size: 20 }),
                  }),
                  o.password &&
                    x.jsx('p', {
                      className: 'text-red-500 text-sm mt-1',
                      children: o.password,
                    }),
                ],
              }),
              x.jsx('button', {
                type: 'submit',
                disabled: d,
                className: `cursor-pointer w-full py-3 px-4 rounded-md font-medium text-white transition-colors ${d ? 'bg-accent cursor-not-allowed' : 'bg-primary hover:bg-primaryHover'}`,
                children: d ? 'Signing up...' : 'Sign Up',
              }),
              x.jsxs('p', {
                className: 'text-sm text-[#69757C] leading-5',
                children: [
                  'Already have an account?',
                  ' ',
                  x.jsx(xe, {
                    to: '/login',
                    className: 'text-primary font-medium',
                    children: 'Login',
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  $1 = () => {
    const i = Cn();
    let e = new URLSearchParams(i.search).get('token');
    const [a, s] = j.useState({
        newPassword: '',
        token: e,
        confirmPassword: '',
        showPassword: !1,
        showConfirmPassword: !1,
        showMismatchError: !1,
      }),
      [o, u] = j.useState(''),
      [c, h] = j.useState({}),
      d = () => {
        const w = {};
        return (
          a.newPassword.trim() || (w.newPassword = 'Password is required'),
          a.confirmPassword.trim() ||
            (w.confirmPassword = 'Password is required'),
          a.newPassword.trim().length < 8 &&
            a.newPassword.trim() &&
            (w.newPassword = 'Password must have a minimum of 8 characters'),
          a.confirmPassword.trim().length < 8 &&
            a.confirmPassword.trim() &&
            (w.confirmPassword =
              'Password must have a minimum of 8 characters'),
          w
        );
      },
      g = (w) => {
        const { name: E, value: M } = w.target;
        (s((D) => ({ ...D, [E]: M })), h((D) => ({ ...D, [E]: '' })));
      },
      p = 'https://fischerbon.onrender.com',
      [b, v] = j.useState(''),
      S = async (w) => {
        w.preventDefault();
        const E = d();
        if (Object.keys(E).length > 0) {
          h(E);
          return;
        }
        if (a.newPassword !== a.confirmPassword) {
          s((M) => ({ ...M, showMismatchError: !0 }));
          return;
        } else s((M) => ({ ...M, showMismatchError: !1 }));
        try {
          (
            await (
              await fetch(`${p}/auth/reset-password`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  password: a.newPassword,
                  token: a.token,
                }),
              })
            ).json()
          ).success
            ? v('success')
            : v('failure');
        } catch {
          u('network');
        }
      };
    return x.jsxs(x.Fragment, {
      children: [
        o === 'network'
          ? x.jsx(fe, {
              header: 'Network Error',
              message: "You're not connected to the internet",
              iconType: 'error',
              onClose: () => u(''),
            })
          : '',
        b === 'failure'
          ? x.jsxs(Ci, {
              children: [
                x.jsxs('div', {
                  className:
                    'space-y-7 text-center items-center justify-center flex flex-col',
                  children: [
                    x.jsx('div', {
                      className:
                        'rounded-full bg-[#e89999] text-[#F11010] p-5 opacity-90',
                      children: x.jsx(tr, {}),
                    }),
                    x.jsxs('div', {
                      className: 'max-w-md',
                      children: [
                        x.jsx('h5', {
                          className:
                            'text-dark font-medium text-[16px] lg:text-[22px] leading-6 lg:leading-9',
                          children: 'Password Reset Failed',
                        }),
                        x.jsx('p', {
                          className:
                            'text-[16px] lg:text-lg leading-6 lg:leading-7 text-gray font-normal',
                          children: 'We couldn’t update your password',
                        }),
                      ],
                    }),
                    x.jsx('button', {
                      onClick: () => v(''),
                      className:
                        'mb-5 bg-primary text-white hover:bg-primaryHover w-full font-medium py-3 px-4 rounded-md cursor-pointer transition-colors',
                      children: 'Try Again',
                    }),
                  ],
                }),
                x.jsx(xe, {
                  to: '/login',
                  children: x.jsxs('p', {
                    className:
                      'text-center flex justify-center text-[14px] text-dark cursor-pointer leading-5 items-center gap-2',
                    children: [
                      x.jsx('span', {
                        className: 'text-center',
                        children: x.jsx(b0, { size: '20' }),
                      }),
                      x.jsx('span', {
                        className: 'text-center',
                        children: 'Back to log in',
                      }),
                    ],
                  }),
                }),
              ],
            })
          : b === 'success'
            ? x.jsx(Ci, {
                children: x.jsxs('div', {
                  className:
                    'space-y-5 text-center items-center justify-center flex flex-col',
                  children: [
                    x.jsx('div', {
                      className:
                        'rounded-full bg-[#c1d4de] text-primary p-5 opacity-90',
                      children: x.jsx(df, {}),
                    }),
                    x.jsxs('div', {
                      className: 'max-w-md',
                      children: [
                        x.jsx('h5', {
                          className:
                            'text-dark font-medium text-[16px] lg:text-[22px] leading-6 lg:leading-9',
                          children: 'Password Reset Successful',
                        }),
                        x.jsx('p', {
                          className:
                            'text-[16px] lg:text-lg leading-6 lg:leading-7 text-gray font-normal',
                          children:
                            'Your new password has been saved. You can now sign in to your account',
                        }),
                      ],
                    }),
                    x.jsx(xe, {
                      to: '/login',
                      className: 'w-full',
                      children: x.jsx('button', {
                        className:
                          'mb-3 bg-primary text-white hover:bg-primaryHover w-full font-medium py-3 px-4 rounded-md cursor-pointer transition-colors',
                        children: 'Go to Login',
                      }),
                    }),
                  ],
                }),
              })
            : x.jsx(Ci, {
                title: 'Reset Your Password',
                subtitle: 'Create a new password to secure your account',
                children: x.jsxs('form', {
                  onSubmit: S,
                  className: 'space-y-6',
                  children: [
                    x.jsxs('div', {
                      children: [
                        x.jsxs('div', {
                          className: 'relative',
                          children: [
                            x.jsx('label', {
                              htmlFor: 'password',
                              className:
                                'block text-sm font-medium text-gray mb-1',
                              children: 'Enter your password',
                            }),
                            x.jsx('input', {
                              type: a.showPassword ? 'text' : 'password',
                              name: 'newPassword',
                              value: a.newPassword,
                              onChange: g,
                              placeholder: 'Enter your new password',
                              className:
                                'w-full p-3 border-2 rounded-md border-accent outline-none placeholder:text-accent text-[16px] leading-6 focus:border-primary transition-colors duration-200 ease-in-out',
                            }),
                            x.jsx('span', {
                              onClick: () =>
                                s((w) => ({
                                  ...w,
                                  showPassword: !w.showPassword,
                                })),
                              className:
                                'absolute right-3 top-10 cursor-pointer text-accent',
                              children: a.showPassword
                                ? x.jsx(Qs, { size: 20 })
                                : x.jsx(Zs, { size: 20 }),
                            }),
                          ],
                        }),
                        c.newPassword &&
                          x.jsx('p', {
                            className: 'text-red-500 text-sm mt-1',
                            children: c.newPassword,
                          }),
                      ],
                    }),
                    x.jsxs('div', {
                      children: [
                        x.jsxs('div', {
                          className: 'relative',
                          children: [
                            x.jsx('label', {
                              htmlFor: 'confirmPassword',
                              className:
                                'block text-sm font-medium text-gray mb-1',
                              children: 'Confirm password',
                            }),
                            x.jsx('input', {
                              type: a.showConfirmPassword ? 'text' : 'password',
                              name: 'confirmPassword',
                              value: a.confirmPassword,
                              onChange: g,
                              placeholder: 'Confirm new password',
                              className:
                                'w-full p-3 border-2 rounded-md border-accent outline-none placeholder:text-accent text-[16px] leading-6 focus:border-primary transition-colors duration-200 ease-in-out',
                            }),
                            x.jsx('span', {
                              onClick: () =>
                                s((w) => ({
                                  ...w,
                                  showConfirmPassword: !w.showConfirmPassword,
                                })),
                              className:
                                'absolute right-3 top-10 cursor-pointer text-accent',
                              children: a.showConfirmPassword
                                ? x.jsx(Qs, { size: 20 })
                                : x.jsx(Zs, { size: 20 }),
                            }),
                          ],
                        }),
                        c.confirmPassword &&
                          x.jsx('p', {
                            className: 'text-red-500 text-sm mt-1',
                            children: c.confirmPassword,
                          }),
                      ],
                    }),
                    a.showMismatchError &&
                      x.jsx('p', {
                        className: 'text-red-500 text-sm mt-1',
                        children: '*Passwords do not match',
                      }),
                    x.jsx('button', {
                      type: 'submit',
                      className:
                        'mb-2 bg-primary text-white hover:bg-primaryHover w-full font-medium py-3 px-4 rounded-md cursor-pointer transition-colors',
                      children: 'Update Password',
                    }),
                  ],
                }),
              }),
      ],
    });
  },
  J1 = () => {
    ja();
    const [i, e] = j.useState({ email: '' }),
      [a, s] = j.useState(''),
      [o, u] = j.useState({}),
      c = () => {
        const p = {};
        return (i.email.trim() || (p.email = 'Email is required'), p);
      },
      h = (p) => {
        const { name: b, value: v } = p.target;
        (e((S) => ({ ...S, [b]: v })), u((S) => ({ ...S, [b]: '' })));
      },
      d = 'https://fischerbon.onrender.com',
      g = async (p) => {
        p.preventDefault();
        const b = c();
        if (Object.keys(b).length > 0) {
          u(b);
          return;
        }
        try {
          const S = await (
            await fetch(`${d}/auth/forgot-password`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(i),
            })
          ).json();
          if (!S.success) s('failure');
          else {
            let w = `https://fischerbon.vercel.app/reset-password?token=${S.data?.token}`;
            (
              await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/jsCon' },
                body: JSON.stringify({
                  service_id: 'service_zh0vj84',
                  template_id: 'template_ol09wxr',
                  user_id: '9nHCjbJ8w8yQTswge',
                  template_params: {
                    user_email: i.email,
                    name: 'Fischerbon Engineering LTD.',
                    time: `${new Date().getHours().toString().padStart(2, '0')}:${new Date().getMinutes().toString().padStart(2, '0')}`,
                    subject: 'Password reset link',
                    message: `😃Hi, You requested a password reset link, use the link below to reset your password, note that this link will expire in 5 minutes: ${w}`,
                  },
                }),
              })
            ).ok
              ? s('success')
              : s('failure');
          }
        } catch {
          s('network');
        }
      };
    return x.jsxs('div', {
      children: [
        a === 'failure'
          ? x.jsx(fe, {
              header: 'Oops',
              message: 'Something went wrong, try that again later',
              iconType: 'error',
              onClose: () => s(''),
            })
          : a === 'network'
            ? x.jsx(fe, {
                header: 'Network Error',
                message: "You're not connected to the internet",
                iconType: 'error',
                onClose: () => s(''),
              })
            : '',
        a === 'success'
          ? x.jsx(Ci, {
              children: x.jsxs('div', {
                className:
                  'space-y-5 text-center items-center justify-center flex flex-col',
                children: [
                  x.jsx('div', {
                    className:
                      'rounded-full bg-[#c1d4de] text-primary p-5 opacity-90',
                    children: x.jsx(df, {}),
                  }),
                  x.jsxs('div', {
                    className: 'max-w-md',
                    children: [
                      x.jsx('h5', {
                        className:
                          'text-dark font-medium text-[16px] lg:text-[22px] leading-6 lg:leading-9',
                        children: 'Check Your Mail',
                      }),
                      x.jsx('p', {
                        className:
                          'text-[16px] lg:text-lg leading-6 lg:leading-7 text-gray font-normal',
                        children:
                          'Please check your mail and follow the instructions to reset your password.',
                      }),
                    ],
                  }),
                  x.jsxs('div', {
                    className: 'w-full',
                    children: [
                      x.jsx(xe, {
                        to: '/login',
                        children: x.jsx('button', {
                          type: 'submit',
                          className:
                            'mb-3 bg-primary text-white hover:bg-primaryHover w-full font-medium py-3 px-4 rounded-md cursor-pointer transition-colors',
                          children: 'Back to Login',
                        }),
                      }),
                      x.jsx('button', {
                        onClick: g,
                        className:
                          'border-1 border-primary text-primary w-full font-medium py-3 px-4 rounded-md cursor-pointer',
                        children: 'Resend Link',
                      }),
                    ],
                  }),
                ],
              }),
            })
          : x.jsxs(Ci, {
              title: 'Forgot Your Password',
              subtitle: "Enter your email and we'll send you a reset link",
              children: [
                x.jsxs('form', {
                  onSubmit: g,
                  className: 'space-y-10',
                  children: [
                    x.jsxs('div', {
                      children: [
                        x.jsx('label', {
                          htmlFor: 'email',
                          className:
                            'block text-sm font-medium text-gray mb-1 text-left',
                          children: 'Email Address',
                        }),
                        x.jsx('input', {
                          type: 'email',
                          id: 'email',
                          name: 'email',
                          value: i.email,
                          onChange: h,
                          placeholder: 'Enter your email address',
                          className:
                            'w-full p-3 border-2 rounded-md border-accent outline-none placeholder:text-accent text-[16px] leading-6 focus:border-primary transition-colors duration-200 ease-in-out',
                        }),
                        o.email &&
                          x.jsx('p', {
                            className: 'text-red-500 text-sm mt-1',
                            children: o.email,
                          }),
                      ],
                    }),
                    x.jsx('button', {
                      type: 'submit',
                      className:
                        'mb-2 bg-primary text-white hover:bg-primaryHover w-full font-medium py-3 px-4 rounded-md cursor-pointer transition-colors',
                      children: 'Send reset link',
                    }),
                  ],
                }),
                x.jsx('p', {
                  children: x.jsxs(xe, {
                    to: '/login',
                    className:
                      'mt-1 flex justify-center text-[14px] text-dark cursor-pointer leading-5 items-center gap-2',
                    children: [
                      x.jsx('span', {
                        className: 'text-center',
                        children: x.jsx(b0, { size: '20' }),
                      }),
                      x.jsx('span', {
                        className: 'text-center',
                        children: 'Back to Login',
                      }),
                    ],
                  }),
                }),
              ],
            }),
      ],
    });
  },
  I1 = new Date(),
  va = I1.getHours(),
  Ug = (i) =>
    va >= 5 && va < 12
      ? `${i}morning`
      : va >= 12 && va < 17
        ? `${i}afternoon`
        : va >= 17 && va < 20
          ? `${i}evening`
          : `${i}night`,
  w0 = [
    {
      name: 'Dashboard',
      icon: x0,
      link: '/dashboard',
      tag: `${Ug('Good ')}, Abdulqoyum`,
      subTag: `What would you like to do this ${Ug('')}?`,
    },
    {
      name: 'Courses',
      icon: il,
      link: '/courses',
      tag: 'Your Courses',
      subTag:
        "You're making progress, continue watching all your registered lessons from here",
    },
    {
      name: 'Challenges',
      icon: al,
      link: '/challenges',
      tag: 'Enter a new challenge',
      subTag: 'Hands-on exercises to practice your CAD skills',
    },
    {
      name: 'Quizzes',
      icon: X1,
      link: '/quizzes',
      tag: "It's quiz time",
      subTag:
        "Take a  quiz on your drawing knowledge and see how much you'll score",
    },
    {
      name: 'Profile',
      icon: S0,
      link: '/profile',
      tag: 'Your Profile',
      subTag: 'You can view and edit your personal information from here',
    },
  ],
  t_ = ({ onClick: i }) => {
    const e = window.location.pathname;
    return x.jsx(x.Fragment, {
      children: x.jsxs('div', {
        className:
          'bg-[#F1F2F3] w-[15rem] md:animate-none animate-navBar h-screen overflow-y-auto flex flex-col px-3 pt-4 pb-4 no-scrollbar md:ml-4 rounded-lg',
        children: [
          x.jsxs('section', {
            className: 'flex justify-between items-center',
            children: [
              x.jsx('img', {
                src: hf,
                alt: 'Fischerbon-Logo',
                width: 150,
                height: 50,
              }),
              x.jsx('div', {
                onClick: i,
                className: 'md:hidden flex',
                children: x.jsx(tr, {}),
              }),
            ],
          }),
          x.jsx('div', {
            className: 'flex-grow mt-1.5',
            children: x.jsx('div', {
              className: 'flex flex-col space-y-3 py-4',
              children: w0.map((a) => {
                const s = a.icon,
                  o = e === a.link;
                return x.jsx('span', {
                  onClick: window.innerWidth < 768 && i,
                  children: x.jsxs(
                    xe,
                    {
                      to: a.link,
                      className: `
                    flex items-center space-x-2 py-2 px-5 w-3/4 rounded-full text-sm font-normal leading-6 
                    transition-all duration-300 ease-in-out
                    ${o ? 'bg-primary text-white' : 'hover:bg-primaryHover hover:text-white'}
                  `,
                      children: [
                        x.jsx(s, {
                          className: '',
                          size: '22',
                          variant: 'Outline',
                        }),
                        x.jsx('span', { children: a.name }),
                      ],
                    },
                    a.name
                  ),
                });
              }),
            }),
          }),
          x.jsx('div', {
            children: x.jsxs(xe, {
              to: '/login',
              className:
                'hover:animate-pulse flex items-center space-x-2 py-3 px-5 rounded-full text-sm font-normal leading-6',
              children: [
                x.jsx(v0, { size: '22', variant: 'Outline' }),
                x.jsx('span', { children: 'Logout' }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  e_ = ({ onClick: i }) => {
    let e = window.location.pathname;
    const a = w0.find((o) => o.link === e),
      s = ({ mode: o }) =>
        x.jsxs('div', {
          className: `flex justify-between ${o === 'desktop' ? 'gap-3' : 'w-full'} items-center`,
          children: [
            x.jsx('h4', {
              className: 'text-lg font-medium text-dark',
              children: 'Abdulqoyum Olohuntomi Amuda',
            }),
            x.jsx('div', {
              className: 'flex items-center gap-3',
              children: x.jsx('img', {
                src: 'https://randomuser.me/api/portraits/men/40.jpg',
                alt: 'User-Profile',
                className: 'w-[45px] h-[45px] rounded-full',
              }),
            }),
          ],
        });
    return x.jsxs('header', {
      className: '*:mt-1',
      children: [
        x.jsx('div', {
          className: 'my-1 px-5 h-[50px] md:hidden flex',
          children: x.jsx(s, { mode: 'mobile' }),
        }),
        x.jsxs('div', {
          className:
            'bg-muted md:py-3.5 md:px-3 p-3 rounded-md mx-3 md:mx-0 flex justify-between items-center',
          children: [
            x.jsx('h4', {
              className: 'text-xl text-dark font-semibold',
              children: a && a.name,
            }),
            x.jsx('div', {
              className: 'px-5 md:flex hidden',
              children: x.jsx(s, { mode: 'desktop' }),
            }),
            x.jsx('div', {
              onClick: i,
              className: 'md:hidden flex',
              children: x.jsx(_0, {}),
            }),
          ],
        }),
        x.jsxs('div', {
          className: 'md:mx-3 mx-5 mt-1.5',
          children: [
            a.tag &&
              x.jsxs('div', {
                className: 'flex gap-3 items-center',
                children: [
                  x.jsx('div', { className: 'bg-primary size-3 rounded-full' }),
                  x.jsx('h4', {
                    className: 'text-dark leading-6 text-lg font-semibold',
                    children: a.tag,
                  }),
                ],
              }),
            a.subTag &&
              x.jsx('p', {
                className: 'text-gray text-sm',
                children: a.subTag,
              }),
          ],
        }),
        a.subTag &&
          x.jsx('hr', {
            className:
              'bg-secondary h-1 text-secondary md:mx-1 mx-3 rounded-md mt-1',
          }),
      ],
    });
  },
  sl = ({ children: i }) => {
    let [e, a] = j.useState(window.innerWidth > 768);
    return x.jsxs('div', {
      className:
        'bg-[hsl(203,11%,90%)] text-dark md:flex gap-4 h-screen overflow-y-hidden md:pt-2',
      children: [
        x.jsx('div', {
          className: 'absolute md:relative z-12',
          children: e && x.jsx(t_, { onClick: () => a(!1) }),
        }),
        x.jsxs('div', {
          onClick: () => e === !0 && (window.innerWidth < 768 ? a(!1) : a(!0)),
          className: `${e ? 'opacity-50 md:opacity-100' : ''} flex flex-col h-full w-full md:mr-4`,
          children: [
            x.jsx(e_, { onClick: () => a(!0) }),
            x.jsx('main', {
              className:
                'flex-1 h-full overflow-x-hidden pb-5 no-scrollbar mt-4 md:px-0 px-5',
              children: i,
            }),
          ],
        }),
      ],
    });
  };
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */ function ll(i) {
  return (i + 0.5) | 0;
}
const ni = (i, e, a) => Math.max(Math.min(i, a), e);
function Bs(i) {
  return ni(ll(i * 2.55), 0, 255);
}
function ii(i) {
  return ni(ll(i * 255), 0, 255);
}
function On(i) {
  return ni(ll(i / 2.55) / 100, 0, 1);
}
function Yg(i) {
  return ni(ll(i * 100), 0, 100);
}
const Ue = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  Qc = [...'0123456789ABCDEF'],
  n_ = (i) => Qc[i & 15],
  i_ = (i) => Qc[(i & 240) >> 4] + Qc[i & 15],
  Eo = (i) => (i & 240) >> 4 === (i & 15),
  a_ = (i) => Eo(i.r) && Eo(i.g) && Eo(i.b) && Eo(i.a);
function s_(i) {
  var e = i.length,
    a;
  return (
    i[0] === '#' &&
      (e === 4 || e === 5
        ? (a = {
            r: 255 & (Ue[i[1]] * 17),
            g: 255 & (Ue[i[2]] * 17),
            b: 255 & (Ue[i[3]] * 17),
            a: e === 5 ? Ue[i[4]] * 17 : 255,
          })
        : (e === 7 || e === 9) &&
          (a = {
            r: (Ue[i[1]] << 4) | Ue[i[2]],
            g: (Ue[i[3]] << 4) | Ue[i[4]],
            b: (Ue[i[5]] << 4) | Ue[i[6]],
            a: e === 9 ? (Ue[i[7]] << 4) | Ue[i[8]] : 255,
          })),
    a
  );
}
const l_ = (i, e) => (i < 255 ? e(i) : '');
function o_(i) {
  var e = a_(i) ? n_ : i_;
  return i ? '#' + e(i.r) + e(i.g) + e(i.b) + l_(i.a, e) : void 0;
}
const r_ =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function M0(i, e, a) {
  const s = e * Math.min(a, 1 - a),
    o = (u, c = (u + i / 30) % 12) =>
      a - s * Math.max(Math.min(c - 3, 9 - c, 1), -1);
  return [o(0), o(8), o(4)];
}
function u_(i, e, a) {
  const s = (o, u = (o + i / 60) % 6) =>
    a - a * e * Math.max(Math.min(u, 4 - u, 1), 0);
  return [s(5), s(3), s(1)];
}
function c_(i, e, a) {
  const s = M0(i, 1, 0.5);
  let o;
  for (e + a > 1 && ((o = 1 / (e + a)), (e *= o), (a *= o)), o = 0; o < 3; o++)
    ((s[o] *= 1 - e - a), (s[o] += e));
  return s;
}
function f_(i, e, a, s, o) {
  return i === o
    ? (e - a) / s + (e < a ? 6 : 0)
    : e === o
      ? (a - i) / s + 2
      : (i - e) / s + 4;
}
function mf(i) {
  const a = i.r / 255,
    s = i.g / 255,
    o = i.b / 255,
    u = Math.max(a, s, o),
    c = Math.min(a, s, o),
    h = (u + c) / 2;
  let d, g, p;
  return (
    u !== c &&
      ((p = u - c),
      (g = h > 0.5 ? p / (2 - u - c) : p / (u + c)),
      (d = f_(a, s, o, p, u)),
      (d = d * 60 + 0.5)),
    [d | 0, g || 0, h]
  );
}
function gf(i, e, a, s) {
  return (Array.isArray(e) ? i(e[0], e[1], e[2]) : i(e, a, s)).map(ii);
}
function pf(i, e, a) {
  return gf(M0, i, e, a);
}
function h_(i, e, a) {
  return gf(c_, i, e, a);
}
function d_(i, e, a) {
  return gf(u_, i, e, a);
}
function E0(i) {
  return ((i % 360) + 360) % 360;
}
function m_(i) {
  const e = r_.exec(i);
  let a = 255,
    s;
  if (!e) return;
  e[5] !== s && (a = e[6] ? Bs(+e[5]) : ii(+e[5]));
  const o = E0(+e[2]),
    u = +e[3] / 100,
    c = +e[4] / 100;
  return (
    e[1] === 'hwb'
      ? (s = h_(o, u, c))
      : e[1] === 'hsv'
        ? (s = d_(o, u, c))
        : (s = pf(o, u, c)),
    { r: s[0], g: s[1], b: s[2], a }
  );
}
function g_(i, e) {
  var a = mf(i);
  ((a[0] = E0(a[0] + e)),
    (a = pf(a)),
    (i.r = a[0]),
    (i.g = a[1]),
    (i.b = a[2]));
}
function p_(i) {
  if (!i) return;
  const e = mf(i),
    a = e[0],
    s = Yg(e[1]),
    o = Yg(e[2]);
  return i.a < 255
    ? `hsla(${a}, ${s}%, ${o}%, ${On(i.a)})`
    : `hsl(${a}, ${s}%, ${o}%)`;
}
const qg = {
    x: 'dark',
    Z: 'light',
    Y: 're',
    X: 'blu',
    W: 'gr',
    V: 'medium',
    U: 'slate',
    A: 'ee',
    T: 'ol',
    S: 'or',
    B: 'ra',
    C: 'lateg',
    D: 'ights',
    R: 'in',
    Q: 'turquois',
    E: 'hi',
    P: 'ro',
    O: 'al',
    N: 'le',
    M: 'de',
    L: 'yello',
    F: 'en',
    K: 'ch',
    G: 'arks',
    H: 'ea',
    I: 'ightg',
    J: 'wh',
  },
  Vg = {
    OiceXe: 'f0f8ff',
    antiquewEte: 'faebd7',
    aqua: 'ffff',
    aquamarRe: '7fffd4',
    azuY: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '0',
    blanKedOmond: 'ffebcd',
    Xe: 'ff',
    XeviTet: '8a2be2',
    bPwn: 'a52a2a',
    burlywood: 'deb887',
    caMtXe: '5f9ea0',
    KartYuse: '7fff00',
    KocTate: 'd2691e',
    cSO: 'ff7f50',
    cSnflowerXe: '6495ed',
    cSnsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: 'ffff',
    xXe: '8b',
    xcyan: '8b8b',
    xgTMnPd: 'b8860b',
    xWay: 'a9a9a9',
    xgYF: '6400',
    xgYy: 'a9a9a9',
    xkhaki: 'bdb76b',
    xmagFta: '8b008b',
    xTivegYF: '556b2f',
    xSange: 'ff8c00',
    xScEd: '9932cc',
    xYd: '8b0000',
    xsOmon: 'e9967a',
    xsHgYF: '8fbc8f',
    xUXe: '483d8b',
    xUWay: '2f4f4f',
    xUgYy: '2f4f4f',
    xQe: 'ced1',
    xviTet: '9400d3',
    dAppRk: 'ff1493',
    dApskyXe: 'bfff',
    dimWay: '696969',
    dimgYy: '696969',
    dodgerXe: '1e90ff',
    fiYbrick: 'b22222',
    flSOwEte: 'fffaf0',
    foYstWAn: '228b22',
    fuKsia: 'ff00ff',
    gaRsbSo: 'dcdcdc',
    ghostwEte: 'f8f8ff',
    gTd: 'ffd700',
    gTMnPd: 'daa520',
    Way: '808080',
    gYF: '8000',
    gYFLw: 'adff2f',
    gYy: '808080',
    honeyMw: 'f0fff0',
    hotpRk: 'ff69b4',
    RdianYd: 'cd5c5c',
    Rdigo: '4b0082',
    ivSy: 'fffff0',
    khaki: 'f0e68c',
    lavFMr: 'e6e6fa',
    lavFMrXsh: 'fff0f5',
    lawngYF: '7cfc00',
    NmoncEffon: 'fffacd',
    ZXe: 'add8e6',
    ZcSO: 'f08080',
    Zcyan: 'e0ffff',
    ZgTMnPdLw: 'fafad2',
    ZWay: 'd3d3d3',
    ZgYF: '90ee90',
    ZgYy: 'd3d3d3',
    ZpRk: 'ffb6c1',
    ZsOmon: 'ffa07a',
    ZsHgYF: '20b2aa',
    ZskyXe: '87cefa',
    ZUWay: '778899',
    ZUgYy: '778899',
    ZstAlXe: 'b0c4de',
    ZLw: 'ffffe0',
    lime: 'ff00',
    limegYF: '32cd32',
    lRF: 'faf0e6',
    magFta: 'ff00ff',
    maPon: '800000',
    VaquamarRe: '66cdaa',
    VXe: 'cd',
    VScEd: 'ba55d3',
    VpurpN: '9370db',
    VsHgYF: '3cb371',
    VUXe: '7b68ee',
    VsprRggYF: 'fa9a',
    VQe: '48d1cc',
    VviTetYd: 'c71585',
    midnightXe: '191970',
    mRtcYam: 'f5fffa',
    mistyPse: 'ffe4e1',
    moccasR: 'ffe4b5',
    navajowEte: 'ffdead',
    navy: '80',
    Tdlace: 'fdf5e6',
    Tive: '808000',
    TivedBb: '6b8e23',
    Sange: 'ffa500',
    SangeYd: 'ff4500',
    ScEd: 'da70d6',
    pOegTMnPd: 'eee8aa',
    pOegYF: '98fb98',
    pOeQe: 'afeeee',
    pOeviTetYd: 'db7093',
    papayawEp: 'ffefd5',
    pHKpuff: 'ffdab9',
    peru: 'cd853f',
    pRk: 'ffc0cb',
    plum: 'dda0dd',
    powMrXe: 'b0e0e6',
    purpN: '800080',
    YbeccapurpN: '663399',
    Yd: 'ff0000',
    Psybrown: 'bc8f8f',
    PyOXe: '4169e1',
    saddNbPwn: '8b4513',
    sOmon: 'fa8072',
    sandybPwn: 'f4a460',
    sHgYF: '2e8b57',
    sHshell: 'fff5ee',
    siFna: 'a0522d',
    silver: 'c0c0c0',
    skyXe: '87ceeb',
    UXe: '6a5acd',
    UWay: '708090',
    UgYy: '708090',
    snow: 'fffafa',
    sprRggYF: 'ff7f',
    stAlXe: '4682b4',
    tan: 'd2b48c',
    teO: '8080',
    tEstN: 'd8bfd8',
    tomato: 'ff6347',
    Qe: '40e0d0',
    viTet: 'ee82ee',
    JHt: 'f5deb3',
    wEte: 'ffffff',
    wEtesmoke: 'f5f5f5',
    Lw: 'ffff00',
    LwgYF: '9acd32',
  };
function y_() {
  const i = {},
    e = Object.keys(Vg),
    a = Object.keys(qg);
  let s, o, u, c, h;
  for (s = 0; s < e.length; s++) {
    for (c = h = e[s], o = 0; o < a.length; o++)
      ((u = a[o]), (h = h.replace(u, qg[u])));
    ((u = parseInt(Vg[c], 16)),
      (i[h] = [(u >> 16) & 255, (u >> 8) & 255, u & 255]));
  }
  return i;
}
let To;
function b_(i) {
  To || ((To = y_()), (To.transparent = [0, 0, 0, 0]));
  const e = To[i.toLowerCase()];
  return e && { r: e[0], g: e[1], b: e[2], a: e.length === 4 ? e[3] : 255 };
}
const x_ =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function v_(i) {
  const e = x_.exec(i);
  let a = 255,
    s,
    o,
    u;
  if (e) {
    if (e[7] !== s) {
      const c = +e[7];
      a = e[8] ? Bs(c) : ni(c * 255, 0, 255);
    }
    return (
      (s = +e[1]),
      (o = +e[3]),
      (u = +e[5]),
      (s = 255 & (e[2] ? Bs(s) : ni(s, 0, 255))),
      (o = 255 & (e[4] ? Bs(o) : ni(o, 0, 255))),
      (u = 255 & (e[6] ? Bs(u) : ni(u, 0, 255))),
      { r: s, g: o, b: u, a }
    );
  }
}
function __(i) {
  return (
    i &&
    (i.a < 255
      ? `rgba(${i.r}, ${i.g}, ${i.b}, ${On(i.a)})`
      : `rgb(${i.r}, ${i.g}, ${i.b})`)
  );
}
const zc = (i) =>
    i <= 0.0031308 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - 0.055,
  _a = (i) => (i <= 0.04045 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4));
function S_(i, e, a) {
  const s = _a(On(i.r)),
    o = _a(On(i.g)),
    u = _a(On(i.b));
  return {
    r: ii(zc(s + a * (_a(On(e.r)) - s))),
    g: ii(zc(o + a * (_a(On(e.g)) - o))),
    b: ii(zc(u + a * (_a(On(e.b)) - u))),
    a: i.a + a * (e.a - i.a),
  };
}
function Oo(i, e, a) {
  if (i) {
    let s = mf(i);
    ((s[e] = Math.max(0, Math.min(s[e] + s[e] * a, e === 0 ? 360 : 1))),
      (s = pf(s)),
      (i.r = s[0]),
      (i.g = s[1]),
      (i.b = s[2]));
  }
}
function T0(i, e) {
  return i && Object.assign(e || {}, i);
}
function Xg(i) {
  var e = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(i)
      ? i.length >= 3 &&
        ((e = { r: i[0], g: i[1], b: i[2], a: 255 }),
        i.length > 3 && (e.a = ii(i[3])))
      : ((e = T0(i, { r: 0, g: 0, b: 0, a: 1 })), (e.a = ii(e.a))),
    e
  );
}
function w_(i) {
  return i.charAt(0) === 'r' ? v_(i) : m_(i);
}
class Ks {
  constructor(e) {
    if (e instanceof Ks) return e;
    const a = typeof e;
    let s;
    (a === 'object'
      ? (s = Xg(e))
      : a === 'string' && (s = s_(e) || b_(e) || w_(e)),
      (this._rgb = s),
      (this._valid = !!s));
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var e = T0(this._rgb);
    return (e && (e.a = On(e.a)), e);
  }
  set rgb(e) {
    this._rgb = Xg(e);
  }
  rgbString() {
    return this._valid ? __(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? o_(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? p_(this._rgb) : void 0;
  }
  mix(e, a) {
    if (e) {
      const s = this.rgb,
        o = e.rgb;
      let u;
      const c = a === u ? 0.5 : a,
        h = 2 * c - 1,
        d = s.a - o.a,
        g = ((h * d === -1 ? h : (h + d) / (1 + h * d)) + 1) / 2;
      ((u = 1 - g),
        (s.r = 255 & (g * s.r + u * o.r + 0.5)),
        (s.g = 255 & (g * s.g + u * o.g + 0.5)),
        (s.b = 255 & (g * s.b + u * o.b + 0.5)),
        (s.a = c * s.a + (1 - c) * o.a),
        (this.rgb = s));
    }
    return this;
  }
  interpolate(e, a) {
    return (e && (this._rgb = S_(this._rgb, e._rgb, a)), this);
  }
  clone() {
    return new Ks(this.rgb);
  }
  alpha(e) {
    return ((this._rgb.a = ii(e)), this);
  }
  clearer(e) {
    const a = this._rgb;
    return ((a.a *= 1 - e), this);
  }
  greyscale() {
    const e = this._rgb,
      a = ll(e.r * 0.3 + e.g * 0.59 + e.b * 0.11);
    return ((e.r = e.g = e.b = a), this);
  }
  opaquer(e) {
    const a = this._rgb;
    return ((a.a *= 1 + e), this);
  }
  negate() {
    const e = this._rgb;
    return ((e.r = 255 - e.r), (e.g = 255 - e.g), (e.b = 255 - e.b), this);
  }
  lighten(e) {
    return (Oo(this._rgb, 2, e), this);
  }
  darken(e) {
    return (Oo(this._rgb, 2, -e), this);
  }
  saturate(e) {
    return (Oo(this._rgb, 1, e), this);
  }
  desaturate(e) {
    return (Oo(this._rgb, 1, -e), this);
  }
  rotate(e) {
    return (g_(this._rgb, e), this);
  }
}
/*!
 * Chart.js v4.5.0
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */ function Mn() {}
const M_ = (() => {
  let i = 0;
  return () => i++;
})();
function Ct(i) {
  return i == null;
}
function Ft(i) {
  if (Array.isArray && Array.isArray(i)) return !0;
  const e = Object.prototype.toString.call(i);
  return e.slice(0, 7) === '[object' && e.slice(-6) === 'Array]';
}
function bt(i) {
  return i !== null && Object.prototype.toString.call(i) === '[object Object]';
}
function ue(i) {
  return (typeof i == 'number' || i instanceof Number) && isFinite(+i);
}
function an(i, e) {
  return ue(i) ? i : e;
}
function pt(i, e) {
  return typeof i > 'u' ? e : i;
}
const E_ = (i, e) =>
  typeof i == 'string' && i.endsWith('%') ? (parseFloat(i) / 100) * e : +i;
function jt(i, e, a) {
  if (i && typeof i.call == 'function') return i.apply(a, e);
}
function Mt(i, e, a, s) {
  let o, u, c;
  if (Ft(i)) for (u = i.length, o = 0; o < u; o++) e.call(a, i[o], o);
  else if (bt(i))
    for (c = Object.keys(i), u = c.length, o = 0; o < u; o++)
      e.call(a, i[c[o]], c[o]);
}
function Go(i, e) {
  let a, s, o, u;
  if (!i || !e || i.length !== e.length) return !1;
  for (a = 0, s = i.length; a < s; ++a)
    if (
      ((o = i[a]),
      (u = e[a]),
      o.datasetIndex !== u.datasetIndex || o.index !== u.index)
    )
      return !1;
  return !0;
}
function Po(i) {
  if (Ft(i)) return i.map(Po);
  if (bt(i)) {
    const e = Object.create(null),
      a = Object.keys(i),
      s = a.length;
    let o = 0;
    for (; o < s; ++o) e[a[o]] = Po(i[a[o]]);
    return e;
  }
  return i;
}
function O0(i) {
  return ['__proto__', 'prototype', 'constructor'].indexOf(i) === -1;
}
function T_(i, e, a, s) {
  if (!O0(i)) return;
  const o = e[i],
    u = a[i];
  bt(o) && bt(u) ? Ws(o, u, s) : (e[i] = Po(u));
}
function Ws(i, e, a) {
  const s = Ft(e) ? e : [e],
    o = s.length;
  if (!bt(i)) return i;
  a = a || {};
  const u = a.merger || T_;
  let c;
  for (let h = 0; h < o; ++h) {
    if (((c = s[h]), !bt(c))) continue;
    const d = Object.keys(c);
    for (let g = 0, p = d.length; g < p; ++g) u(d[g], i, c, a);
  }
  return i;
}
function qs(i, e) {
  return Ws(i, e, { merger: O_ });
}
function O_(i, e, a) {
  if (!O0(i)) return;
  const s = e[i],
    o = a[i];
  bt(s) && bt(o)
    ? qs(s, o)
    : Object.prototype.hasOwnProperty.call(e, i) || (e[i] = Po(o));
}
const Gg = { '': (i) => i, x: (i) => i.x, y: (i) => i.y };
function A_(i) {
  const e = i.split('.'),
    a = [];
  let s = '';
  for (const o of e)
    ((s += o),
      s.endsWith('\\') ? (s = s.slice(0, -1) + '.') : (a.push(s), (s = '')));
  return a;
}
function D_(i) {
  const e = A_(i);
  return (a) => {
    for (const s of e) {
      if (s === '') break;
      a = a && a[s];
    }
    return a;
  };
}
function Fo(i, e) {
  return (Gg[e] || (Gg[e] = D_(e)))(i);
}
function yf(i) {
  return i.charAt(0).toUpperCase() + i.slice(1);
}
const Qo = (i) => typeof i < 'u',
  ai = (i) => typeof i == 'function',
  Pg = (i, e) => {
    if (i.size !== e.size) return !1;
    for (const a of i) if (!e.has(a)) return !1;
    return !0;
  };
function C_(i) {
  return i.type === 'mouseup' || i.type === 'click' || i.type === 'contextmenu';
}
const Jt = Math.PI,
  Qe = 2 * Jt,
  j_ = Qe + Jt,
  Zo = Number.POSITIVE_INFINITY,
  R_ = Jt / 180,
  Fe = Jt / 2,
  wi = Jt / 4,
  Fg = (Jt * 2) / 3,
  A0 = Math.log10,
  Ea = Math.sign;
function Vs(i, e, a) {
  return Math.abs(i - e) < a;
}
function Qg(i) {
  const e = Math.round(i);
  i = Vs(i, e, i / 1e3) ? e : i;
  const a = Math.pow(10, Math.floor(A0(i))),
    s = i / a;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * a;
}
function z_(i) {
  const e = [],
    a = Math.sqrt(i);
  let s;
  for (s = 1; s < a; s++) i % s === 0 && (e.push(s), e.push(i / s));
  return (a === (a | 0) && e.push(a), e.sort((o, u) => o - u).pop(), e);
}
function N_(i) {
  return (
    typeof i == 'symbol' ||
    (typeof i == 'object' &&
      i !== null &&
      !(Symbol.toPrimitive in i || 'toString' in i || 'valueOf' in i))
  );
}
function $s(i) {
  return !N_(i) && !isNaN(parseFloat(i)) && isFinite(i);
}
function k_(i, e) {
  const a = Math.round(i);
  return a - e <= i && a + e >= i;
}
function L_(i, e, a) {
  let s, o, u;
  for (s = 0, o = i.length; s < o; s++)
    ((u = i[s][a]),
      isNaN(u) || ((e.min = Math.min(e.min, u)), (e.max = Math.max(e.max, u))));
}
function Ai(i) {
  return i * (Jt / 180);
}
function H_(i) {
  return i * (180 / Jt);
}
function Zg(i) {
  if (!ue(i)) return;
  let e = 1,
    a = 0;
  for (; Math.round(i * e) / e !== i; ) ((e *= 10), a++);
  return a;
}
function B_(i, e) {
  const a = e.x - i.x,
    s = e.y - i.y,
    o = Math.sqrt(a * a + s * s);
  let u = Math.atan2(s, a);
  return (u < -0.5 * Jt && (u += Qe), { angle: u, distance: o });
}
function Zc(i, e) {
  return Math.sqrt(Math.pow(e.x - i.x, 2) + Math.pow(e.y - i.y, 2));
}
function U_(i, e) {
  return ((i - e + j_) % Qe) - Jt;
}
function on(i) {
  return ((i % Qe) + Qe) % Qe;
}
function D0(i, e, a, s) {
  const o = on(i),
    u = on(e),
    c = on(a),
    h = on(u - o),
    d = on(c - o),
    g = on(o - u),
    p = on(o - c);
  return o === u || o === c || (s && u === c) || (h > d && g < p);
}
function Ye(i, e, a) {
  return Math.max(e, Math.min(a, i));
}
function Y_(i) {
  return Ye(i, -32768, 32767);
}
function wa(i, e, a, s = 1e-6) {
  return i >= Math.min(e, a) - s && i <= Math.max(e, a) + s;
}
function bf(i, e, a) {
  a = a || ((c) => i[c] < e);
  let s = i.length - 1,
    o = 0,
    u;
  for (; s - o > 1; ) ((u = (o + s) >> 1), a(u) ? (o = u) : (s = u));
  return { lo: o, hi: s };
}
const Di = (i, e, a, s) =>
    bf(
      i,
      a,
      s
        ? (o) => {
            const u = i[o][e];
            return u < a || (u === a && i[o + 1][e] === a);
          }
        : (o) => i[o][e] < a
    ),
  q_ = (i, e, a) => bf(i, a, (s) => i[s][e] >= a);
function V_(i, e, a) {
  let s = 0,
    o = i.length;
  for (; s < o && i[s] < e; ) s++;
  for (; o > s && i[o - 1] > a; ) o--;
  return s > 0 || o < i.length ? i.slice(s, o) : i;
}
const C0 = ['push', 'pop', 'shift', 'splice', 'unshift'];
function X_(i, e) {
  if (i._chartjs) {
    i._chartjs.listeners.push(e);
    return;
  }
  (Object.defineProperty(i, '_chartjs', {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [e] },
  }),
    C0.forEach((a) => {
      const s = '_onData' + yf(a),
        o = i[a];
      Object.defineProperty(i, a, {
        configurable: !0,
        enumerable: !1,
        value(...u) {
          const c = o.apply(this, u);
          return (
            i._chartjs.listeners.forEach((h) => {
              typeof h[s] == 'function' && h[s](...u);
            }),
            c
          );
        },
      });
    }));
}
function Kg(i, e) {
  const a = i._chartjs;
  if (!a) return;
  const s = a.listeners,
    o = s.indexOf(e);
  (o !== -1 && s.splice(o, 1),
    !(s.length > 0) &&
      (C0.forEach((u) => {
        delete i[u];
      }),
      delete i._chartjs));
}
function G_(i) {
  const e = new Set(i);
  return e.size === i.length ? i : Array.from(e);
}
const j0 = (function () {
  return typeof window > 'u'
    ? function (i) {
        return i();
      }
    : window.requestAnimationFrame;
})();
function R0(i, e) {
  let a = [],
    s = !1;
  return function (...o) {
    ((a = o),
      s ||
        ((s = !0),
        j0.call(window, () => {
          ((s = !1), i.apply(e, a));
        })));
  };
}
function P_(i, e) {
  let a;
  return function (...s) {
    return (
      e ? (clearTimeout(a), (a = setTimeout(i, e, s))) : i.apply(this, s),
      e
    );
  };
}
const xf = (i) => (i === 'start' ? 'left' : i === 'end' ? 'right' : 'center'),
  oe = (i, e, a) => (i === 'start' ? e : i === 'end' ? a : (e + a) / 2),
  F_ = (i, e, a, s) =>
    i === (s ? 'left' : 'right') ? a : i === 'center' ? (e + a) / 2 : e;
function Q_(i, e, a) {
  const s = e.length;
  let o = 0,
    u = s;
  if (i._sorted) {
    const { iScale: c, vScale: h, _parsed: d } = i,
      g = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null,
      p = c.axis,
      { min: b, max: v, minDefined: S, maxDefined: w } = c.getUserBounds();
    if (S) {
      if (
        ((o = Math.min(
          Di(d, p, b).lo,
          a ? s : Di(e, p, c.getPixelForValue(b)).lo
        )),
        g)
      ) {
        const E = d
          .slice(0, o + 1)
          .reverse()
          .findIndex((M) => !Ct(M[h.axis]));
        o -= Math.max(0, E);
      }
      o = Ye(o, 0, s - 1);
    }
    if (w) {
      let E = Math.max(
        Di(d, c.axis, v, !0).hi + 1,
        a ? 0 : Di(e, p, c.getPixelForValue(v), !0).hi + 1
      );
      if (g) {
        const M = d.slice(E - 1).findIndex((D) => !Ct(D[h.axis]));
        E += Math.max(0, M);
      }
      u = Ye(E, o, s) - o;
    } else u = s - o;
  }
  return { start: o, count: u };
}
function Z_(i) {
  const { xScale: e, yScale: a, _scaleRanges: s } = i,
    o = { xmin: e.min, xmax: e.max, ymin: a.min, ymax: a.max };
  if (!s) return ((i._scaleRanges = o), !0);
  const u =
    s.xmin !== e.min ||
    s.xmax !== e.max ||
    s.ymin !== a.min ||
    s.ymax !== a.max;
  return (Object.assign(s, o), u);
}
const Ao = (i) => i === 0 || i === 1,
  Wg = (i, e, a) =>
    -(Math.pow(2, 10 * (i -= 1)) * Math.sin(((i - e) * Qe) / a)),
  $g = (i, e, a) => Math.pow(2, -10 * i) * Math.sin(((i - e) * Qe) / a) + 1,
  Xs = {
    linear: (i) => i,
    easeInQuad: (i) => i * i,
    easeOutQuad: (i) => -i * (i - 2),
    easeInOutQuad: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i : -0.5 * (--i * (i - 2) - 1),
    easeInCubic: (i) => i * i * i,
    easeOutCubic: (i) => (i -= 1) * i * i + 1,
    easeInOutCubic: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i * i : 0.5 * ((i -= 2) * i * i + 2),
    easeInQuart: (i) => i * i * i * i,
    easeOutQuart: (i) => -((i -= 1) * i * i * i - 1),
    easeInOutQuart: (i) =>
      (i /= 0.5) < 1 ? 0.5 * i * i * i * i : -0.5 * ((i -= 2) * i * i * i - 2),
    easeInQuint: (i) => i * i * i * i * i,
    easeOutQuint: (i) => (i -= 1) * i * i * i * i + 1,
    easeInOutQuint: (i) =>
      (i /= 0.5) < 1
        ? 0.5 * i * i * i * i * i
        : 0.5 * ((i -= 2) * i * i * i * i + 2),
    easeInSine: (i) => -Math.cos(i * Fe) + 1,
    easeOutSine: (i) => Math.sin(i * Fe),
    easeInOutSine: (i) => -0.5 * (Math.cos(Jt * i) - 1),
    easeInExpo: (i) => (i === 0 ? 0 : Math.pow(2, 10 * (i - 1))),
    easeOutExpo: (i) => (i === 1 ? 1 : -Math.pow(2, -10 * i) + 1),
    easeInOutExpo: (i) =>
      Ao(i)
        ? i
        : i < 0.5
          ? 0.5 * Math.pow(2, 10 * (i * 2 - 1))
          : 0.5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
    easeInCirc: (i) => (i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1)),
    easeOutCirc: (i) => Math.sqrt(1 - (i -= 1) * i),
    easeInOutCirc: (i) =>
      (i /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - i * i) - 1)
        : 0.5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
    easeInElastic: (i) => (Ao(i) ? i : Wg(i, 0.075, 0.3)),
    easeOutElastic: (i) => (Ao(i) ? i : $g(i, 0.075, 0.3)),
    easeInOutElastic(i) {
      return Ao(i)
        ? i
        : i < 0.5
          ? 0.5 * Wg(i * 2, 0.1125, 0.45)
          : 0.5 + 0.5 * $g(i * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(i) {
      return i * i * ((1.70158 + 1) * i - 1.70158);
    },
    easeOutBack(i) {
      return (i -= 1) * i * ((1.70158 + 1) * i + 1.70158) + 1;
    },
    easeInOutBack(i) {
      let e = 1.70158;
      return (i /= 0.5) < 1
        ? 0.5 * (i * i * (((e *= 1.525) + 1) * i - e))
        : 0.5 * ((i -= 2) * i * (((e *= 1.525) + 1) * i + e) + 2);
    },
    easeInBounce: (i) => 1 - Xs.easeOutBounce(1 - i),
    easeOutBounce(i) {
      return i < 1 / 2.75
        ? 7.5625 * i * i
        : i < 2 / 2.75
          ? 7.5625 * (i -= 1.5 / 2.75) * i + 0.75
          : i < 2.5 / 2.75
            ? 7.5625 * (i -= 2.25 / 2.75) * i + 0.9375
            : 7.5625 * (i -= 2.625 / 2.75) * i + 0.984375;
    },
    easeInOutBounce: (i) =>
      i < 0.5
        ? Xs.easeInBounce(i * 2) * 0.5
        : Xs.easeOutBounce(i * 2 - 1) * 0.5 + 0.5,
  };
function vf(i) {
  if (i && typeof i == 'object') {
    const e = i.toString();
    return e === '[object CanvasPattern]' || e === '[object CanvasGradient]';
  }
  return !1;
}
function Jg(i) {
  return vf(i) ? i : new Ks(i);
}
function Nc(i) {
  return vf(i) ? i : new Ks(i).saturate(0.5).darken(0.1).hexString();
}
const K_ = ['x', 'y', 'borderWidth', 'radius', 'tension'],
  W_ = ['color', 'borderColor', 'backgroundColor'];
function $_(i) {
  (i.set('animation', {
    delay: void 0,
    duration: 1e3,
    easing: 'easeOutQuart',
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0,
  }),
    i.describe('animation', {
      _fallback: !1,
      _indexable: !1,
      _scriptable: (e) =>
        e !== 'onProgress' && e !== 'onComplete' && e !== 'fn',
    }),
    i.set('animations', {
      colors: { type: 'color', properties: W_ },
      numbers: { type: 'number', properties: K_ },
    }),
    i.describe('animations', { _fallback: 'animation' }),
    i.set('transitions', {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: {
          colors: { from: 'transparent' },
          visible: { type: 'boolean', duration: 0 },
        },
      },
      hide: {
        animations: {
          colors: { to: 'transparent' },
          visible: { type: 'boolean', easing: 'linear', fn: (e) => e | 0 },
        },
      },
    }));
}
function J_(i) {
  i.set('layout', {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 },
  });
}
const Ig = new Map();
function I_(i, e) {
  e = e || {};
  const a = i + JSON.stringify(e);
  let s = Ig.get(a);
  return (s || ((s = new Intl.NumberFormat(i, e)), Ig.set(a, s)), s);
}
function z0(i, e, a) {
  return I_(e, a).format(i);
}
const tS = {
  values(i) {
    return Ft(i) ? i : '' + i;
  },
  numeric(i, e, a) {
    if (i === 0) return '0';
    const s = this.chart.options.locale;
    let o,
      u = i;
    if (a.length > 1) {
      const g = Math.max(Math.abs(a[0].value), Math.abs(a[a.length - 1].value));
      ((g < 1e-4 || g > 1e15) && (o = 'scientific'), (u = eS(i, a)));
    }
    const c = A0(Math.abs(u)),
      h = isNaN(c) ? 1 : Math.max(Math.min(-1 * Math.floor(c), 20), 0),
      d = { notation: o, minimumFractionDigits: h, maximumFractionDigits: h };
    return (Object.assign(d, this.options.ticks.format), z0(i, s, d));
  },
};
function eS(i, e) {
  let a = e.length > 3 ? e[2].value - e[1].value : e[1].value - e[0].value;
  return (
    Math.abs(a) >= 1 && i !== Math.floor(i) && (a = i - Math.floor(i)),
    a
  );
}
var N0 = { formatters: tS };
function nS(i) {
  (i.set('scale', {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: 'ticks',
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (e, a) => a.lineWidth,
      tickColor: (e, a) => a.color,
      offset: !1,
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: '',
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: N0.formatters.values,
      minor: {},
      major: {},
      align: 'center',
      crossAlign: 'near',
      showLabelBackdrop: !1,
      backdropColor: 'rgba(255, 255, 255, 0.75)',
      backdropPadding: 2,
    },
  }),
    i.route('scale.ticks', 'color', '', 'color'),
    i.route('scale.grid', 'color', '', 'borderColor'),
    i.route('scale.border', 'color', '', 'borderColor'),
    i.route('scale.title', 'color', '', 'color'),
    i.describe('scale', {
      _fallback: !1,
      _scriptable: (e) =>
        !e.startsWith('before') &&
        !e.startsWith('after') &&
        e !== 'callback' &&
        e !== 'parser',
      _indexable: (e) =>
        e !== 'borderDash' && e !== 'tickBorderDash' && e !== 'dash',
    }),
    i.describe('scales', { _fallback: 'scale' }),
    i.describe('scale.ticks', {
      _scriptable: (e) => e !== 'backdropPadding' && e !== 'callback',
      _indexable: (e) => e !== 'backdropPadding',
    }));
}
const Ri = Object.create(null),
  Kc = Object.create(null);
function Gs(i, e) {
  if (!e) return i;
  const a = e.split('.');
  for (let s = 0, o = a.length; s < o; ++s) {
    const u = a[s];
    i = i[u] || (i[u] = Object.create(null));
  }
  return i;
}
function kc(i, e, a) {
  return typeof e == 'string' ? Ws(Gs(i, e), a) : Ws(Gs(i, ''), e);
}
class iS {
  constructor(e, a) {
    ((this.animation = void 0),
      (this.backgroundColor = 'rgba(0,0,0,0.1)'),
      (this.borderColor = 'rgba(0,0,0,0.1)'),
      (this.color = '#666'),
      (this.datasets = {}),
      (this.devicePixelRatio = (s) => s.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        'mousemove',
        'mouseout',
        'click',
        'touchstart',
        'touchmove',
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: 'normal',
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (s, o) => Nc(o.backgroundColor)),
      (this.hoverBorderColor = (s, o) => Nc(o.borderColor)),
      (this.hoverColor = (s, o) => Nc(o.color)),
      (this.indexAxis = 'x'),
      (this.interaction = {
        mode: 'nearest',
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(e),
      this.apply(a));
  }
  set(e, a) {
    return kc(this, e, a);
  }
  get(e) {
    return Gs(this, e);
  }
  describe(e, a) {
    return kc(Kc, e, a);
  }
  override(e, a) {
    return kc(Ri, e, a);
  }
  route(e, a, s, o) {
    const u = Gs(this, e),
      c = Gs(this, s),
      h = '_' + a;
    Object.defineProperties(u, {
      [h]: { value: u[a], writable: !0 },
      [a]: {
        enumerable: !0,
        get() {
          const d = this[h],
            g = c[o];
          return bt(d) ? Object.assign({}, g, d) : pt(d, g);
        },
        set(d) {
          this[h] = d;
        },
      },
    });
  }
  apply(e) {
    e.forEach((a) => a(this));
  }
}
var qt = new iS(
  {
    _scriptable: (i) => !i.startsWith('on'),
    _indexable: (i) => i !== 'events',
    hover: { _fallback: 'interaction' },
    interaction: { _scriptable: !1, _indexable: !1 },
  },
  [$_, J_, nS]
);
function aS(i) {
  return !i || Ct(i.size) || Ct(i.family)
    ? null
    : (i.style ? i.style + ' ' : '') +
        (i.weight ? i.weight + ' ' : '') +
        i.size +
        'px ' +
        i.family;
}
function tp(i, e, a, s, o) {
  let u = e[o];
  return (
    u || ((u = e[o] = i.measureText(o).width), a.push(o)),
    u > s && (s = u),
    s
  );
}
function Mi(i, e, a) {
  const s = i.currentDevicePixelRatio,
    o = a !== 0 ? Math.max(a / 2, 0.5) : 0;
  return Math.round((e - o) * s) / s + o;
}
function ep(i, e) {
  (!e && !i) ||
    ((e = e || i.getContext('2d')),
    e.save(),
    e.resetTransform(),
    e.clearRect(0, 0, i.width, i.height),
    e.restore());
}
function Wc(i, e, a, s) {
  k0(i, e, a, s, null);
}
function k0(i, e, a, s, o) {
  let u, c, h, d, g, p, b, v;
  const S = e.pointStyle,
    w = e.rotation,
    E = e.radius;
  let M = (w || 0) * R_;
  if (
    S &&
    typeof S == 'object' &&
    ((u = S.toString()),
    u === '[object HTMLImageElement]' || u === '[object HTMLCanvasElement]')
  ) {
    (i.save(),
      i.translate(a, s),
      i.rotate(M),
      i.drawImage(S, -S.width / 2, -S.height / 2, S.width, S.height),
      i.restore());
    return;
  }
  if (!(isNaN(E) || E <= 0)) {
    switch ((i.beginPath(), S)) {
      default:
        (o ? i.ellipse(a, s, o / 2, E, 0, 0, Qe) : i.arc(a, s, E, 0, Qe),
          i.closePath());
        break;
      case 'triangle':
        ((p = o ? o / 2 : E),
          i.moveTo(a + Math.sin(M) * p, s - Math.cos(M) * E),
          (M += Fg),
          i.lineTo(a + Math.sin(M) * p, s - Math.cos(M) * E),
          (M += Fg),
          i.lineTo(a + Math.sin(M) * p, s - Math.cos(M) * E),
          i.closePath());
        break;
      case 'rectRounded':
        ((g = E * 0.516),
          (d = E - g),
          (c = Math.cos(M + wi) * d),
          (b = Math.cos(M + wi) * (o ? o / 2 - g : d)),
          (h = Math.sin(M + wi) * d),
          (v = Math.sin(M + wi) * (o ? o / 2 - g : d)),
          i.arc(a - b, s - h, g, M - Jt, M - Fe),
          i.arc(a + v, s - c, g, M - Fe, M),
          i.arc(a + b, s + h, g, M, M + Fe),
          i.arc(a - v, s + c, g, M + Fe, M + Jt),
          i.closePath());
        break;
      case 'rect':
        if (!w) {
          ((d = Math.SQRT1_2 * E),
            (p = o ? o / 2 : d),
            i.rect(a - p, s - d, 2 * p, 2 * d));
          break;
        }
        M += wi;
      case 'rectRot':
        ((b = Math.cos(M) * (o ? o / 2 : E)),
          (c = Math.cos(M) * E),
          (h = Math.sin(M) * E),
          (v = Math.sin(M) * (o ? o / 2 : E)),
          i.moveTo(a - b, s - h),
          i.lineTo(a + v, s - c),
          i.lineTo(a + b, s + h),
          i.lineTo(a - v, s + c),
          i.closePath());
        break;
      case 'crossRot':
        M += wi;
      case 'cross':
        ((b = Math.cos(M) * (o ? o / 2 : E)),
          (c = Math.cos(M) * E),
          (h = Math.sin(M) * E),
          (v = Math.sin(M) * (o ? o / 2 : E)),
          i.moveTo(a - b, s - h),
          i.lineTo(a + b, s + h),
          i.moveTo(a + v, s - c),
          i.lineTo(a - v, s + c));
        break;
      case 'star':
        ((b = Math.cos(M) * (o ? o / 2 : E)),
          (c = Math.cos(M) * E),
          (h = Math.sin(M) * E),
          (v = Math.sin(M) * (o ? o / 2 : E)),
          i.moveTo(a - b, s - h),
          i.lineTo(a + b, s + h),
          i.moveTo(a + v, s - c),
          i.lineTo(a - v, s + c),
          (M += wi),
          (b = Math.cos(M) * (o ? o / 2 : E)),
          (c = Math.cos(M) * E),
          (h = Math.sin(M) * E),
          (v = Math.sin(M) * (o ? o / 2 : E)),
          i.moveTo(a - b, s - h),
          i.lineTo(a + b, s + h),
          i.moveTo(a + v, s - c),
          i.lineTo(a - v, s + c));
        break;
      case 'line':
        ((c = o ? o / 2 : Math.cos(M) * E),
          (h = Math.sin(M) * E),
          i.moveTo(a - c, s - h),
          i.lineTo(a + c, s + h));
        break;
      case 'dash':
        (i.moveTo(a, s),
          i.lineTo(a + Math.cos(M) * (o ? o / 2 : E), s + Math.sin(M) * E));
        break;
      case !1:
        i.closePath();
        break;
    }
    (i.fill(), e.borderWidth > 0 && i.stroke());
  }
}
function Js(i, e, a) {
  return (
    (a = a || 0.5),
    !e ||
      (i &&
        i.x > e.left - a &&
        i.x < e.right + a &&
        i.y > e.top - a &&
        i.y < e.bottom + a)
  );
}
function er(i, e) {
  (i.save(),
    i.beginPath(),
    i.rect(e.left, e.top, e.right - e.left, e.bottom - e.top),
    i.clip());
}
function nr(i) {
  i.restore();
}
function sS(i, e, a, s, o) {
  if (!e) return i.lineTo(a.x, a.y);
  if (o === 'middle') {
    const u = (e.x + a.x) / 2;
    (i.lineTo(u, e.y), i.lineTo(u, a.y));
  } else (o === 'after') != !!s ? i.lineTo(e.x, a.y) : i.lineTo(a.x, e.y);
  i.lineTo(a.x, a.y);
}
function lS(i, e, a, s) {
  if (!e) return i.lineTo(a.x, a.y);
  i.bezierCurveTo(
    s ? e.cp1x : e.cp2x,
    s ? e.cp1y : e.cp2y,
    s ? a.cp2x : a.cp1x,
    s ? a.cp2y : a.cp1y,
    a.x,
    a.y
  );
}
function oS(i, e) {
  (e.translation && i.translate(e.translation[0], e.translation[1]),
    Ct(e.rotation) || i.rotate(e.rotation),
    e.color && (i.fillStyle = e.color),
    e.textAlign && (i.textAlign = e.textAlign),
    e.textBaseline && (i.textBaseline = e.textBaseline));
}
function rS(i, e, a, s, o) {
  if (o.strikethrough || o.underline) {
    const u = i.measureText(s),
      c = e - u.actualBoundingBoxLeft,
      h = e + u.actualBoundingBoxRight,
      d = a - u.actualBoundingBoxAscent,
      g = a + u.actualBoundingBoxDescent,
      p = o.strikethrough ? (d + g) / 2 : g;
    ((i.strokeStyle = i.fillStyle),
      i.beginPath(),
      (i.lineWidth = o.decorationWidth || 2),
      i.moveTo(c, p),
      i.lineTo(h, p),
      i.stroke());
  }
}
function uS(i, e) {
  const a = i.fillStyle;
  ((i.fillStyle = e.color),
    i.fillRect(e.left, e.top, e.width, e.height),
    (i.fillStyle = a));
}
function Is(i, e, a, s, o, u = {}) {
  const c = Ft(e) ? e : [e],
    h = u.strokeWidth > 0 && u.strokeColor !== '';
  let d, g;
  for (i.save(), i.font = o.string, oS(i, u), d = 0; d < c.length; ++d)
    ((g = c[d]),
      u.backdrop && uS(i, u.backdrop),
      h &&
        (u.strokeColor && (i.strokeStyle = u.strokeColor),
        Ct(u.strokeWidth) || (i.lineWidth = u.strokeWidth),
        i.strokeText(g, a, s, u.maxWidth)),
      i.fillText(g, a, s, u.maxWidth),
      rS(i, a, s, g, u),
      (s += Number(o.lineHeight)));
  i.restore();
}
function $c(i, e) {
  const { x: a, y: s, w: o, h: u, radius: c } = e;
  (i.arc(a + c.topLeft, s + c.topLeft, c.topLeft, 1.5 * Jt, Jt, !0),
    i.lineTo(a, s + u - c.bottomLeft),
    i.arc(a + c.bottomLeft, s + u - c.bottomLeft, c.bottomLeft, Jt, Fe, !0),
    i.lineTo(a + o - c.bottomRight, s + u),
    i.arc(
      a + o - c.bottomRight,
      s + u - c.bottomRight,
      c.bottomRight,
      Fe,
      0,
      !0
    ),
    i.lineTo(a + o, s + c.topRight),
    i.arc(a + o - c.topRight, s + c.topRight, c.topRight, 0, -Fe, !0),
    i.lineTo(a + c.topLeft, s));
}
const cS = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  fS = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function hS(i, e) {
  const a = ('' + i).match(cS);
  if (!a || a[1] === 'normal') return e * 1.2;
  switch (((i = +a[2]), a[3])) {
    case 'px':
      return i;
    case '%':
      i /= 100;
      break;
  }
  return e * i;
}
const dS = (i) => +i || 0;
function L0(i, e) {
  const a = {},
    s = bt(e),
    o = s ? Object.keys(e) : e,
    u = bt(i) ? (s ? (c) => pt(i[c], i[e[c]]) : (c) => i[c]) : () => i;
  for (const c of o) a[c] = dS(u(c));
  return a;
}
function mS(i) {
  return L0(i, { top: 'y', right: 'x', bottom: 'y', left: 'x' });
}
function Ps(i) {
  return L0(i, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
}
function Ve(i) {
  const e = mS(i);
  return ((e.width = e.left + e.right), (e.height = e.top + e.bottom), e);
}
function re(i, e) {
  ((i = i || {}), (e = e || qt.font));
  let a = pt(i.size, e.size);
  typeof a == 'string' && (a = parseInt(a, 10));
  let s = pt(i.style, e.style);
  s &&
    !('' + s).match(fS) &&
    (console.warn('Invalid font style specified: "' + s + '"'), (s = void 0));
  const o = {
    family: pt(i.family, e.family),
    lineHeight: hS(pt(i.lineHeight, e.lineHeight), a),
    size: a,
    style: s,
    weight: pt(i.weight, e.weight),
    string: '',
  };
  return ((o.string = aS(o)), o);
}
function Do(i, e, a, s) {
  let o, u, c;
  for (o = 0, u = i.length; o < u; ++o)
    if (((c = i[o]), c !== void 0 && c !== void 0)) return c;
}
function gS(i, e, a) {
  const { min: s, max: o } = i,
    u = E_(e, (o - s) / 2),
    c = (h, d) => (a && h === 0 ? 0 : h + d);
  return { min: c(s, -Math.abs(u)), max: c(o, u) };
}
function zi(i, e) {
  return Object.assign(Object.create(i), e);
}
function _f(i, e = [''], a, s, o = () => i[0]) {
  const u = a || i;
  typeof s > 'u' && (s = Y0('_fallback', i));
  const c = {
    [Symbol.toStringTag]: 'Object',
    _cacheable: !0,
    _scopes: i,
    _rootScopes: u,
    _fallback: s,
    _getTarget: o,
    override: (h) => _f([h, ...i], e, u, s),
  };
  return new Proxy(c, {
    deleteProperty(h, d) {
      return (delete h[d], delete h._keys, delete i[0][d], !0);
    },
    get(h, d) {
      return B0(h, d, () => wS(d, e, i, h));
    },
    getOwnPropertyDescriptor(h, d) {
      return Reflect.getOwnPropertyDescriptor(h._scopes[0], d);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i[0]);
    },
    has(h, d) {
      return ip(h).includes(d);
    },
    ownKeys(h) {
      return ip(h);
    },
    set(h, d, g) {
      const p = h._storage || (h._storage = o());
      return ((h[d] = p[d] = g), delete h._keys, !0);
    },
  });
}
function Ta(i, e, a, s) {
  const o = {
    _cacheable: !1,
    _proxy: i,
    _context: e,
    _subProxy: a,
    _stack: new Set(),
    _descriptors: H0(i, s),
    setContext: (u) => Ta(i, u, a, s),
    override: (u) => Ta(i.override(u), e, a, s),
  };
  return new Proxy(o, {
    deleteProperty(u, c) {
      return (delete u[c], delete i[c], !0);
    },
    get(u, c, h) {
      return B0(u, c, () => yS(u, c, h));
    },
    getOwnPropertyDescriptor(u, c) {
      return u._descriptors.allKeys
        ? Reflect.has(i, c)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(i, c);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(i);
    },
    has(u, c) {
      return Reflect.has(i, c);
    },
    ownKeys() {
      return Reflect.ownKeys(i);
    },
    set(u, c, h) {
      return ((i[c] = h), delete u[c], !0);
    },
  });
}
function H0(i, e = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: a = e.scriptable,
    _indexable: s = e.indexable,
    _allKeys: o = e.allKeys,
  } = i;
  return {
    allKeys: o,
    scriptable: a,
    indexable: s,
    isScriptable: ai(a) ? a : () => a,
    isIndexable: ai(s) ? s : () => s,
  };
}
const pS = (i, e) => (i ? i + yf(e) : e),
  Sf = (i, e) =>
    bt(e) &&
    i !== 'adapters' &&
    (Object.getPrototypeOf(e) === null || e.constructor === Object);
function B0(i, e, a) {
  if (Object.prototype.hasOwnProperty.call(i, e) || e === 'constructor')
    return i[e];
  const s = a();
  return ((i[e] = s), s);
}
function yS(i, e, a) {
  const { _proxy: s, _context: o, _subProxy: u, _descriptors: c } = i;
  let h = s[e];
  return (
    ai(h) && c.isScriptable(e) && (h = bS(e, h, i, a)),
    Ft(h) && h.length && (h = xS(e, h, i, c.isIndexable)),
    Sf(e, h) && (h = Ta(h, o, u && u[e], c)),
    h
  );
}
function bS(i, e, a, s) {
  const { _proxy: o, _context: u, _subProxy: c, _stack: h } = a;
  if (h.has(i))
    throw new Error(
      'Recursion detected: ' + Array.from(h).join('->') + '->' + i
    );
  h.add(i);
  let d = e(u, c || s);
  return (h.delete(i), Sf(i, d) && (d = wf(o._scopes, o, i, d)), d);
}
function xS(i, e, a, s) {
  const { _proxy: o, _context: u, _subProxy: c, _descriptors: h } = a;
  if (typeof u.index < 'u' && s(i)) return e[u.index % e.length];
  if (bt(e[0])) {
    const d = e,
      g = o._scopes.filter((p) => p !== d);
    e = [];
    for (const p of d) {
      const b = wf(g, o, i, p);
      e.push(Ta(b, u, c && c[i], h));
    }
  }
  return e;
}
function U0(i, e, a) {
  return ai(i) ? i(e, a) : i;
}
const vS = (i, e) => (i === !0 ? e : typeof i == 'string' ? Fo(e, i) : void 0);
function _S(i, e, a, s, o) {
  for (const u of e) {
    const c = vS(a, u);
    if (c) {
      i.add(c);
      const h = U0(c._fallback, a, o);
      if (typeof h < 'u' && h !== a && h !== s) return h;
    } else if (c === !1 && typeof s < 'u' && a !== s) return null;
  }
  return !1;
}
function wf(i, e, a, s) {
  const o = e._rootScopes,
    u = U0(e._fallback, a, s),
    c = [...i, ...o],
    h = new Set();
  h.add(s);
  let d = np(h, c, a, u || a, s);
  return d === null ||
    (typeof u < 'u' && u !== a && ((d = np(h, c, u, d, s)), d === null))
    ? !1
    : _f(Array.from(h), [''], o, u, () => SS(e, a, s));
}
function np(i, e, a, s, o) {
  for (; a; ) a = _S(i, e, a, s, o);
  return a;
}
function SS(i, e, a) {
  const s = i._getTarget();
  e in s || (s[e] = {});
  const o = s[e];
  return Ft(o) && bt(a) ? a : o || {};
}
function wS(i, e, a, s) {
  let o;
  for (const u of e)
    if (((o = Y0(pS(u, i), a)), typeof o < 'u'))
      return Sf(i, o) ? wf(a, s, i, o) : o;
}
function Y0(i, e) {
  for (const a of e) {
    if (!a) continue;
    const s = a[i];
    if (typeof s < 'u') return s;
  }
}
function ip(i) {
  let e = i._keys;
  return (e || (e = i._keys = MS(i._scopes)), e);
}
function MS(i) {
  const e = new Set();
  for (const a of i)
    for (const s of Object.keys(a).filter((o) => !o.startsWith('_'))) e.add(s);
  return Array.from(e);
}
const ES = Number.EPSILON || 1e-14,
  Oa = (i, e) => e < i.length && !i[e].skip && i[e],
  q0 = (i) => (i === 'x' ? 'y' : 'x');
function TS(i, e, a, s) {
  const o = i.skip ? e : i,
    u = e,
    c = a.skip ? e : a,
    h = Zc(u, o),
    d = Zc(c, u);
  let g = h / (h + d),
    p = d / (h + d);
  ((g = isNaN(g) ? 0 : g), (p = isNaN(p) ? 0 : p));
  const b = s * g,
    v = s * p;
  return {
    previous: { x: u.x - b * (c.x - o.x), y: u.y - b * (c.y - o.y) },
    next: { x: u.x + v * (c.x - o.x), y: u.y + v * (c.y - o.y) },
  };
}
function OS(i, e, a) {
  const s = i.length;
  let o,
    u,
    c,
    h,
    d,
    g = Oa(i, 0);
  for (let p = 0; p < s - 1; ++p)
    if (((d = g), (g = Oa(i, p + 1)), !(!d || !g))) {
      if (Vs(e[p], 0, ES)) {
        a[p] = a[p + 1] = 0;
        continue;
      }
      ((o = a[p] / e[p]),
        (u = a[p + 1] / e[p]),
        (h = Math.pow(o, 2) + Math.pow(u, 2)),
        !(h <= 9) &&
          ((c = 3 / Math.sqrt(h)),
          (a[p] = o * c * e[p]),
          (a[p + 1] = u * c * e[p])));
    }
}
function AS(i, e, a = 'x') {
  const s = q0(a),
    o = i.length;
  let u,
    c,
    h,
    d = Oa(i, 0);
  for (let g = 0; g < o; ++g) {
    if (((c = h), (h = d), (d = Oa(i, g + 1)), !h)) continue;
    const p = h[a],
      b = h[s];
    (c &&
      ((u = (p - c[a]) / 3),
      (h[`cp1${a}`] = p - u),
      (h[`cp1${s}`] = b - u * e[g])),
      d &&
        ((u = (d[a] - p) / 3),
        (h[`cp2${a}`] = p + u),
        (h[`cp2${s}`] = b + u * e[g])));
  }
}
function DS(i, e = 'x') {
  const a = q0(e),
    s = i.length,
    o = Array(s).fill(0),
    u = Array(s);
  let c,
    h,
    d,
    g = Oa(i, 0);
  for (c = 0; c < s; ++c)
    if (((h = d), (d = g), (g = Oa(i, c + 1)), !!d)) {
      if (g) {
        const p = g[e] - d[e];
        o[c] = p !== 0 ? (g[a] - d[a]) / p : 0;
      }
      u[c] = h
        ? g
          ? Ea(o[c - 1]) !== Ea(o[c])
            ? 0
            : (o[c - 1] + o[c]) / 2
          : o[c - 1]
        : o[c];
    }
  (OS(i, o, u), AS(i, u, e));
}
function Co(i, e, a) {
  return Math.max(Math.min(i, a), e);
}
function CS(i, e) {
  let a,
    s,
    o,
    u,
    c,
    h = Js(i[0], e);
  for (a = 0, s = i.length; a < s; ++a)
    ((c = u),
      (u = h),
      (h = a < s - 1 && Js(i[a + 1], e)),
      u &&
        ((o = i[a]),
        c &&
          ((o.cp1x = Co(o.cp1x, e.left, e.right)),
          (o.cp1y = Co(o.cp1y, e.top, e.bottom))),
        h &&
          ((o.cp2x = Co(o.cp2x, e.left, e.right)),
          (o.cp2y = Co(o.cp2y, e.top, e.bottom)))));
}
function jS(i, e, a, s, o) {
  let u, c, h, d;
  if (
    (e.spanGaps && (i = i.filter((g) => !g.skip)),
    e.cubicInterpolationMode === 'monotone')
  )
    DS(i, o);
  else {
    let g = s ? i[i.length - 1] : i[0];
    for (u = 0, c = i.length; u < c; ++u)
      ((h = i[u]),
        (d = TS(g, h, i[Math.min(u + 1, c - (s ? 0 : 1)) % c], e.tension)),
        (h.cp1x = d.previous.x),
        (h.cp1y = d.previous.y),
        (h.cp2x = d.next.x),
        (h.cp2y = d.next.y),
        (g = h));
  }
  e.capBezierPoints && CS(i, a);
}
function Mf() {
  return typeof window < 'u' && typeof document < 'u';
}
function Ef(i) {
  let e = i.parentNode;
  return (e && e.toString() === '[object ShadowRoot]' && (e = e.host), e);
}
function Ko(i, e, a) {
  let s;
  return (
    typeof i == 'string'
      ? ((s = parseInt(i, 10)),
        i.indexOf('%') !== -1 && (s = (s / 100) * e.parentNode[a]))
      : (s = i),
    s
  );
}
const ir = (i) => i.ownerDocument.defaultView.getComputedStyle(i, null);
function RS(i, e) {
  return ir(i).getPropertyValue(e);
}
const zS = ['top', 'right', 'bottom', 'left'];
function ji(i, e, a) {
  const s = {};
  a = a ? '-' + a : '';
  for (let o = 0; o < 4; o++) {
    const u = zS[o];
    s[u] = parseFloat(i[e + '-' + u + a]) || 0;
  }
  return ((s.width = s.left + s.right), (s.height = s.top + s.bottom), s);
}
const NS = (i, e, a) => (i > 0 || e > 0) && (!a || !a.shadowRoot);
function kS(i, e) {
  const a = i.touches,
    s = a && a.length ? a[0] : i,
    { offsetX: o, offsetY: u } = s;
  let c = !1,
    h,
    d;
  if (NS(o, u, i.target)) ((h = o), (d = u));
  else {
    const g = e.getBoundingClientRect();
    ((h = s.clientX - g.left), (d = s.clientY - g.top), (c = !0));
  }
  return { x: h, y: d, box: c };
}
function Ti(i, e) {
  if ('native' in i) return i;
  const { canvas: a, currentDevicePixelRatio: s } = e,
    o = ir(a),
    u = o.boxSizing === 'border-box',
    c = ji(o, 'padding'),
    h = ji(o, 'border', 'width'),
    { x: d, y: g, box: p } = kS(i, a),
    b = c.left + (p && h.left),
    v = c.top + (p && h.top);
  let { width: S, height: w } = e;
  return (
    u && ((S -= c.width + h.width), (w -= c.height + h.height)),
    {
      x: Math.round((((d - b) / S) * a.width) / s),
      y: Math.round((((g - v) / w) * a.height) / s),
    }
  );
}
function LS(i, e, a) {
  let s, o;
  if (e === void 0 || a === void 0) {
    const u = i && Ef(i);
    if (!u) ((e = i.clientWidth), (a = i.clientHeight));
    else {
      const c = u.getBoundingClientRect(),
        h = ir(u),
        d = ji(h, 'border', 'width'),
        g = ji(h, 'padding');
      ((e = c.width - g.width - d.width),
        (a = c.height - g.height - d.height),
        (s = Ko(h.maxWidth, u, 'clientWidth')),
        (o = Ko(h.maxHeight, u, 'clientHeight')));
    }
  }
  return { width: e, height: a, maxWidth: s || Zo, maxHeight: o || Zo };
}
const jo = (i) => Math.round(i * 10) / 10;
function HS(i, e, a, s) {
  const o = ir(i),
    u = ji(o, 'margin'),
    c = Ko(o.maxWidth, i, 'clientWidth') || Zo,
    h = Ko(o.maxHeight, i, 'clientHeight') || Zo,
    d = LS(i, e, a);
  let { width: g, height: p } = d;
  if (o.boxSizing === 'content-box') {
    const v = ji(o, 'border', 'width'),
      S = ji(o, 'padding');
    ((g -= S.width + v.width), (p -= S.height + v.height));
  }
  return (
    (g = Math.max(0, g - u.width)),
    (p = Math.max(0, s ? g / s : p - u.height)),
    (g = jo(Math.min(g, c, d.maxWidth))),
    (p = jo(Math.min(p, h, d.maxHeight))),
    g && !p && (p = jo(g / 2)),
    (e !== void 0 || a !== void 0) &&
      s &&
      d.height &&
      p > d.height &&
      ((p = d.height), (g = jo(Math.floor(p * s)))),
    { width: g, height: p }
  );
}
function ap(i, e, a) {
  const s = e || 1,
    o = Math.floor(i.height * s),
    u = Math.floor(i.width * s);
  ((i.height = Math.floor(i.height)), (i.width = Math.floor(i.width)));
  const c = i.canvas;
  return (
    c.style &&
      (a || (!c.style.height && !c.style.width)) &&
      ((c.style.height = `${i.height}px`), (c.style.width = `${i.width}px`)),
    i.currentDevicePixelRatio !== s || c.height !== o || c.width !== u
      ? ((i.currentDevicePixelRatio = s),
        (c.height = o),
        (c.width = u),
        i.ctx.setTransform(s, 0, 0, s, 0, 0),
        !0)
      : !1
  );
}
const BS = (function () {
  let i = !1;
  try {
    const e = {
      get passive() {
        return ((i = !0), !1);
      },
    };
    Mf() &&
      (window.addEventListener('test', null, e),
      window.removeEventListener('test', null, e));
  } catch {}
  return i;
})();
function sp(i, e) {
  const a = RS(i, e),
    s = a && a.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function Oi(i, e, a, s) {
  return { x: i.x + a * (e.x - i.x), y: i.y + a * (e.y - i.y) };
}
function US(i, e, a, s) {
  return {
    x: i.x + a * (e.x - i.x),
    y:
      s === 'middle'
        ? a < 0.5
          ? i.y
          : e.y
        : s === 'after'
          ? a < 1
            ? i.y
            : e.y
          : a > 0
            ? e.y
            : i.y,
  };
}
function YS(i, e, a, s) {
  const o = { x: i.cp2x, y: i.cp2y },
    u = { x: e.cp1x, y: e.cp1y },
    c = Oi(i, o, a),
    h = Oi(o, u, a),
    d = Oi(u, e, a),
    g = Oi(c, h, a),
    p = Oi(h, d, a);
  return Oi(g, p, a);
}
const qS = function (i, e) {
    return {
      x(a) {
        return i + i + e - a;
      },
      setWidth(a) {
        e = a;
      },
      textAlign(a) {
        return a === 'center' ? a : a === 'right' ? 'left' : 'right';
      },
      xPlus(a, s) {
        return a - s;
      },
      leftForLtr(a, s) {
        return a - s;
      },
    };
  },
  VS = function () {
    return {
      x(i) {
        return i;
      },
      setWidth(i) {},
      textAlign(i) {
        return i;
      },
      xPlus(i, e) {
        return i + e;
      },
      leftForLtr(i, e) {
        return i;
      },
    };
  };
function Ma(i, e, a) {
  return i ? qS(e, a) : VS();
}
function V0(i, e) {
  let a, s;
  (e === 'ltr' || e === 'rtl') &&
    ((a = i.canvas.style),
    (s = [a.getPropertyValue('direction'), a.getPropertyPriority('direction')]),
    a.setProperty('direction', e, 'important'),
    (i.prevTextDirection = s));
}
function X0(i, e) {
  e !== void 0 &&
    (delete i.prevTextDirection,
    i.canvas.style.setProperty('direction', e[0], e[1]));
}
function G0(i) {
  return i === 'angle'
    ? { between: D0, compare: U_, normalize: on }
    : { between: wa, compare: (e, a) => e - a, normalize: (e) => e };
}
function lp({ start: i, end: e, count: a, loop: s, style: o }) {
  return {
    start: i % a,
    end: e % a,
    loop: s && (e - i + 1) % a === 0,
    style: o,
  };
}
function XS(i, e, a) {
  const { property: s, start: o, end: u } = a,
    { between: c, normalize: h } = G0(s),
    d = e.length;
  let { start: g, end: p, loop: b } = i,
    v,
    S;
  if (b) {
    for (g += d, p += d, v = 0, S = d; v < S && c(h(e[g % d][s]), o, u); ++v)
      (g--, p--);
    ((g %= d), (p %= d));
  }
  return (p < g && (p += d), { start: g, end: p, loop: b, style: i.style });
}
function P0(i, e, a) {
  if (!a) return [i];
  const { property: s, start: o, end: u } = a,
    c = e.length,
    { compare: h, between: d, normalize: g } = G0(s),
    { start: p, end: b, loop: v, style: S } = XS(i, e, a),
    w = [];
  let E = !1,
    M = null,
    D,
    k,
    Y;
  const G = () => d(o, Y, D) && h(o, Y) !== 0,
    B = () => h(u, D) === 0 || d(u, Y, D),
    F = () => E || G(),
    K = () => !E || B();
  for (let Q = p, J = p; Q <= b; ++Q)
    ((k = e[Q % c]),
      !k.skip &&
        ((D = g(k[s])),
        D !== Y &&
          ((E = d(D, o, u)),
          M === null && F() && (M = h(D, o) === 0 ? Q : J),
          M !== null &&
            K() &&
            (w.push(lp({ start: M, end: Q, loop: v, count: c, style: S })),
            (M = null)),
          (J = Q),
          (Y = D))));
  return (
    M !== null && w.push(lp({ start: M, end: b, loop: v, count: c, style: S })),
    w
  );
}
function F0(i, e) {
  const a = [],
    s = i.segments;
  for (let o = 0; o < s.length; o++) {
    const u = P0(s[o], i.points, e);
    u.length && a.push(...u);
  }
  return a;
}
function GS(i, e, a, s) {
  let o = 0,
    u = e - 1;
  if (a && !s) for (; o < e && !i[o].skip; ) o++;
  for (; o < e && i[o].skip; ) o++;
  for (o %= e, a && (u += o); u > o && i[u % e].skip; ) u--;
  return ((u %= e), { start: o, end: u });
}
function PS(i, e, a, s) {
  const o = i.length,
    u = [];
  let c = e,
    h = i[e],
    d;
  for (d = e + 1; d <= a; ++d) {
    const g = i[d % o];
    (g.skip || g.stop
      ? h.skip ||
        ((s = !1),
        u.push({ start: e % o, end: (d - 1) % o, loop: s }),
        (e = c = g.stop ? d : null))
      : ((c = d), h.skip && (e = d)),
      (h = g));
  }
  return (c !== null && u.push({ start: e % o, end: c % o, loop: s }), u);
}
function FS(i, e) {
  const a = i.points,
    s = i.options.spanGaps,
    o = a.length;
  if (!o) return [];
  const u = !!i._loop,
    { start: c, end: h } = GS(a, o, u, s);
  if (s === !0) return op(i, [{ start: c, end: h, loop: u }], a, e);
  const d = h < c ? h + o : h,
    g = !!i._fullLoop && c === 0 && h === o - 1;
  return op(i, PS(a, c, d, g), a, e);
}
function op(i, e, a, s) {
  return !s || !s.setContext || !a ? e : QS(i, e, a, s);
}
function QS(i, e, a, s) {
  const o = i._chart.getContext(),
    u = rp(i.options),
    {
      _datasetIndex: c,
      options: { spanGaps: h },
    } = i,
    d = a.length,
    g = [];
  let p = u,
    b = e[0].start,
    v = b;
  function S(w, E, M, D) {
    const k = h ? -1 : 1;
    if (w !== E) {
      for (w += d; a[w % d].skip; ) w -= k;
      for (; a[E % d].skip; ) E += k;
      w % d !== E % d &&
        (g.push({ start: w % d, end: E % d, loop: M, style: D }),
        (p = D),
        (b = E % d));
    }
  }
  for (const w of e) {
    b = h ? b : w.start;
    let E = a[b % d],
      M;
    for (v = b + 1; v <= w.end; v++) {
      const D = a[v % d];
      ((M = rp(
        s.setContext(
          zi(o, {
            type: 'segment',
            p0: E,
            p1: D,
            p0DataIndex: (v - 1) % d,
            p1DataIndex: v % d,
            datasetIndex: c,
          })
        )
      )),
        ZS(M, p) && S(b, v - 1, w.loop, p),
        (E = D),
        (p = M));
    }
    b < v - 1 && S(b, v - 1, w.loop, p);
  }
  return g;
}
function rp(i) {
  return {
    backgroundColor: i.backgroundColor,
    borderCapStyle: i.borderCapStyle,
    borderDash: i.borderDash,
    borderDashOffset: i.borderDashOffset,
    borderJoinStyle: i.borderJoinStyle,
    borderWidth: i.borderWidth,
    borderColor: i.borderColor,
  };
}
function ZS(i, e) {
  if (!e) return !1;
  const a = [],
    s = function (o, u) {
      return vf(u) ? (a.includes(u) || a.push(u), a.indexOf(u)) : u;
    };
  return JSON.stringify(i, s) !== JSON.stringify(e, s);
}
function Ro(i, e, a) {
  return i.options.clip ? i[a] : e[a];
}
function KS(i, e) {
  const { xScale: a, yScale: s } = i;
  return a && s
    ? {
        left: Ro(a, e, 'left'),
        right: Ro(a, e, 'right'),
        top: Ro(s, e, 'top'),
        bottom: Ro(s, e, 'bottom'),
      }
    : e;
}
function Q0(i, e) {
  const a = e._clip;
  if (a.disabled) return !1;
  const s = KS(e, i.chartArea);
  return {
    left: a.left === !1 ? 0 : s.left - (a.left === !0 ? 0 : a.left),
    right: a.right === !1 ? i.width : s.right + (a.right === !0 ? 0 : a.right),
    top: a.top === !1 ? 0 : s.top - (a.top === !0 ? 0 : a.top),
    bottom:
      a.bottom === !1 ? i.height : s.bottom + (a.bottom === !0 ? 0 : a.bottom),
  };
}
/*!
 * Chart.js v4.5.0
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */ class WS {
  constructor() {
    ((this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0));
  }
  _notify(e, a, s, o) {
    const u = a.listeners[o],
      c = a.duration;
    u.forEach((h) =>
      h({
        chart: e,
        initial: a.initial,
        numSteps: c,
        currentStep: Math.min(s - a.start, c),
      })
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = j0.call(window, () => {
        (this._update(),
          (this._request = null),
          this._running && this._refresh());
      })));
  }
  _update(e = Date.now()) {
    let a = 0;
    (this._charts.forEach((s, o) => {
      if (!s.running || !s.items.length) return;
      const u = s.items;
      let c = u.length - 1,
        h = !1,
        d;
      for (; c >= 0; --c)
        ((d = u[c]),
          d._active
            ? (d._total > s.duration && (s.duration = d._total),
              d.tick(e),
              (h = !0))
            : ((u[c] = u[u.length - 1]), u.pop()));
      (h && (o.draw(), this._notify(o, s, e, 'progress')),
        u.length ||
          ((s.running = !1),
          this._notify(o, s, e, 'complete'),
          (s.initial = !1)),
        (a += u.length));
    }),
      (this._lastDate = e),
      a === 0 && (this._running = !1));
  }
  _getAnims(e) {
    const a = this._charts;
    let s = a.get(e);
    return (
      s ||
        ((s = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        a.set(e, s)),
      s
    );
  }
  listen(e, a, s) {
    this._getAnims(e).listeners[a].push(s);
  }
  add(e, a) {
    !a || !a.length || this._getAnims(e).items.push(...a);
  }
  has(e) {
    return this._getAnims(e).items.length > 0;
  }
  start(e) {
    const a = this._charts.get(e);
    a &&
      ((a.running = !0),
      (a.start = Date.now()),
      (a.duration = a.items.reduce((s, o) => Math.max(s, o._duration), 0)),
      this._refresh());
  }
  running(e) {
    if (!this._running) return !1;
    const a = this._charts.get(e);
    return !(!a || !a.running || !a.items.length);
  }
  stop(e) {
    const a = this._charts.get(e);
    if (!a || !a.items.length) return;
    const s = a.items;
    let o = s.length - 1;
    for (; o >= 0; --o) s[o].cancel();
    ((a.items = []), this._notify(e, a, Date.now(), 'complete'));
  }
  remove(e) {
    return this._charts.delete(e);
  }
}
var En = new WS();
const up = 'transparent',
  $S = {
    boolean(i, e, a) {
      return a > 0.5 ? e : i;
    },
    color(i, e, a) {
      const s = Jg(i || up),
        o = s.valid && Jg(e || up);
      return o && o.valid ? o.mix(s, a).hexString() : e;
    },
    number(i, e, a) {
      return i + (e - i) * a;
    },
  };
class JS {
  constructor(e, a, s, o) {
    const u = a[s];
    o = Do([e.to, o, u, e.from]);
    const c = Do([e.from, u, o]);
    ((this._active = !0),
      (this._fn = e.fn || $S[e.type || typeof c]),
      (this._easing = Xs[e.easing] || Xs.linear),
      (this._start = Math.floor(Date.now() + (e.delay || 0))),
      (this._duration = this._total = Math.floor(e.duration)),
      (this._loop = !!e.loop),
      (this._target = a),
      (this._prop = s),
      (this._from = c),
      (this._to = o),
      (this._promises = void 0));
  }
  active() {
    return this._active;
  }
  update(e, a, s) {
    if (this._active) {
      this._notify(!1);
      const o = this._target[this._prop],
        u = s - this._start,
        c = this._duration - u;
      ((this._start = s),
        (this._duration = Math.floor(Math.max(c, e.duration))),
        (this._total += u),
        (this._loop = !!e.loop),
        (this._to = Do([e.to, a, o, e.from])),
        (this._from = Do([e.from, o, a])));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(e) {
    const a = e - this._start,
      s = this._duration,
      o = this._prop,
      u = this._from,
      c = this._loop,
      h = this._to;
    let d;
    if (((this._active = u !== h && (c || a < s)), !this._active)) {
      ((this._target[o] = h), this._notify(!0));
      return;
    }
    if (a < 0) {
      this._target[o] = u;
      return;
    }
    ((d = (a / s) % 2),
      (d = c && d > 1 ? 2 - d : d),
      (d = this._easing(Math.min(1, Math.max(0, d)))),
      (this._target[o] = this._fn(u, h, d)));
  }
  wait() {
    const e = this._promises || (this._promises = []);
    return new Promise((a, s) => {
      e.push({ res: a, rej: s });
    });
  }
  _notify(e) {
    const a = e ? 'res' : 'rej',
      s = this._promises || [];
    for (let o = 0; o < s.length; o++) s[o][a]();
  }
}
class Z0 {
  constructor(e, a) {
    ((this._chart = e), (this._properties = new Map()), this.configure(a));
  }
  configure(e) {
    if (!bt(e)) return;
    const a = Object.keys(qt.animation),
      s = this._properties;
    Object.getOwnPropertyNames(e).forEach((o) => {
      const u = e[o];
      if (!bt(u)) return;
      const c = {};
      for (const h of a) c[h] = u[h];
      ((Ft(u.properties) && u.properties) || [o]).forEach((h) => {
        (h === o || !s.has(h)) && s.set(h, c);
      });
    });
  }
  _animateOptions(e, a) {
    const s = a.options,
      o = t2(e, s);
    if (!o) return [];
    const u = this._createAnimations(o, s);
    return (
      s.$shared &&
        IS(e.options.$animations, s).then(
          () => {
            e.options = s;
          },
          () => {}
        ),
      u
    );
  }
  _createAnimations(e, a) {
    const s = this._properties,
      o = [],
      u = e.$animations || (e.$animations = {}),
      c = Object.keys(a),
      h = Date.now();
    let d;
    for (d = c.length - 1; d >= 0; --d) {
      const g = c[d];
      if (g.charAt(0) === '$') continue;
      if (g === 'options') {
        o.push(...this._animateOptions(e, a));
        continue;
      }
      const p = a[g];
      let b = u[g];
      const v = s.get(g);
      if (b)
        if (v && b.active()) {
          b.update(v, p, h);
          continue;
        } else b.cancel();
      if (!v || !v.duration) {
        e[g] = p;
        continue;
      }
      ((u[g] = b = new JS(v, e, g, p)), o.push(b));
    }
    return o;
  }
  update(e, a) {
    if (this._properties.size === 0) {
      Object.assign(e, a);
      return;
    }
    const s = this._createAnimations(e, a);
    if (s.length) return (En.add(this._chart, s), !0);
  }
}
function IS(i, e) {
  const a = [],
    s = Object.keys(e);
  for (let o = 0; o < s.length; o++) {
    const u = i[s[o]];
    u && u.active() && a.push(u.wait());
  }
  return Promise.all(a);
}
function t2(i, e) {
  if (!e) return;
  let a = i.options;
  if (!a) {
    i.options = e;
    return;
  }
  return (
    a.$shared &&
      (i.options = a = Object.assign({}, a, { $shared: !1, $animations: {} })),
    a
  );
}
function cp(i, e) {
  const a = (i && i.options) || {},
    s = a.reverse,
    o = a.min === void 0 ? e : 0,
    u = a.max === void 0 ? e : 0;
  return { start: s ? u : o, end: s ? o : u };
}
function e2(i, e, a) {
  if (a === !1) return !1;
  const s = cp(i, a),
    o = cp(e, a);
  return { top: o.end, right: s.end, bottom: o.start, left: s.start };
}
function n2(i) {
  let e, a, s, o;
  return (
    bt(i)
      ? ((e = i.top), (a = i.right), (s = i.bottom), (o = i.left))
      : (e = a = s = o = i),
    { top: e, right: a, bottom: s, left: o, disabled: i === !1 }
  );
}
function K0(i, e) {
  const a = [],
    s = i._getSortedDatasetMetas(e);
  let o, u;
  for (o = 0, u = s.length; o < u; ++o) a.push(s[o].index);
  return a;
}
function fp(i, e, a, s = {}) {
  const o = i.keys,
    u = s.mode === 'single';
  let c, h, d, g;
  if (e === null) return;
  let p = !1;
  for (c = 0, h = o.length; c < h; ++c) {
    if (((d = +o[c]), d === a)) {
      if (((p = !0), s.all)) continue;
      break;
    }
    ((g = i.values[d]), ue(g) && (u || e === 0 || Ea(e) === Ea(g)) && (e += g));
  }
  return !p && !s.all ? 0 : e;
}
function i2(i, e) {
  const { iScale: a, vScale: s } = e,
    o = a.axis === 'x' ? 'x' : 'y',
    u = s.axis === 'x' ? 'x' : 'y',
    c = Object.keys(i),
    h = new Array(c.length);
  let d, g, p;
  for (d = 0, g = c.length; d < g; ++d)
    ((p = c[d]), (h[d] = { [o]: p, [u]: i[p] }));
  return h;
}
function Lc(i, e) {
  const a = i && i.options.stacked;
  return a || (a === void 0 && e.stack !== void 0);
}
function a2(i, e, a) {
  return `${i.id}.${e.id}.${a.stack || a.type}`;
}
function s2(i) {
  const { min: e, max: a, minDefined: s, maxDefined: o } = i.getUserBounds();
  return {
    min: s ? e : Number.NEGATIVE_INFINITY,
    max: o ? a : Number.POSITIVE_INFINITY,
  };
}
function l2(i, e, a) {
  const s = i[e] || (i[e] = {});
  return s[a] || (s[a] = {});
}
function hp(i, e, a, s) {
  for (const o of e.getMatchingVisibleMetas(s).reverse()) {
    const u = i[o.index];
    if ((a && u > 0) || (!a && u < 0)) return o.index;
  }
  return null;
}
function dp(i, e) {
  const { chart: a, _cachedMeta: s } = i,
    o = a._stacks || (a._stacks = {}),
    { iScale: u, vScale: c, index: h } = s,
    d = u.axis,
    g = c.axis,
    p = a2(u, c, s),
    b = e.length;
  let v;
  for (let S = 0; S < b; ++S) {
    const w = e[S],
      { [d]: E, [g]: M } = w,
      D = w._stacks || (w._stacks = {});
    ((v = D[g] = l2(o, p, E)),
      (v[h] = M),
      (v._top = hp(v, c, !0, s.type)),
      (v._bottom = hp(v, c, !1, s.type)));
    const k = v._visualValues || (v._visualValues = {});
    k[h] = M;
  }
}
function Hc(i, e) {
  const a = i.scales;
  return Object.keys(a)
    .filter((s) => a[s].axis === e)
    .shift();
}
function o2(i, e) {
  return zi(i, {
    active: !1,
    dataset: void 0,
    datasetIndex: e,
    index: e,
    mode: 'default',
    type: 'dataset',
  });
}
function r2(i, e, a) {
  return zi(i, {
    active: !1,
    dataIndex: e,
    parsed: void 0,
    raw: void 0,
    element: a,
    index: e,
    mode: 'default',
    type: 'data',
  });
}
function zs(i, e) {
  const a = i.controller.index,
    s = i.vScale && i.vScale.axis;
  if (s) {
    e = e || i._parsed;
    for (const o of e) {
      const u = o._stacks;
      if (!u || u[s] === void 0 || u[s][a] === void 0) return;
      (delete u[s][a],
        u[s]._visualValues !== void 0 &&
          u[s]._visualValues[a] !== void 0 &&
          delete u[s]._visualValues[a]);
    }
  }
}
const Bc = (i) => i === 'reset' || i === 'none',
  mp = (i, e) => (e ? i : Object.assign({}, i)),
  u2 = (i, e, a) =>
    i && !e.hidden && e._stacked && { keys: K0(a, !0), values: null };
class W0 {
  static defaults = {};
  static datasetElementType = null;
  static dataElementType = null;
  constructor(e, a) {
    ((this.chart = e),
      (this._ctx = e.ctx),
      (this.index = a),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize());
  }
  initialize() {
    const e = this._cachedMeta;
    (this.configure(),
      this.linkScales(),
      (e._stacked = Lc(e.vScale, e)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled('filler') &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
        ));
  }
  updateIndex(e) {
    (this.index !== e && zs(this._cachedMeta), (this.index = e));
  }
  linkScales() {
    const e = this.chart,
      a = this._cachedMeta,
      s = this.getDataset(),
      o = (b, v, S, w) => (b === 'x' ? v : b === 'r' ? w : S),
      u = (a.xAxisID = pt(s.xAxisID, Hc(e, 'x'))),
      c = (a.yAxisID = pt(s.yAxisID, Hc(e, 'y'))),
      h = (a.rAxisID = pt(s.rAxisID, Hc(e, 'r'))),
      d = a.indexAxis,
      g = (a.iAxisID = o(d, u, c, h)),
      p = (a.vAxisID = o(d, c, u, h));
    ((a.xScale = this.getScaleForId(u)),
      (a.yScale = this.getScaleForId(c)),
      (a.rScale = this.getScaleForId(h)),
      (a.iScale = this.getScaleForId(g)),
      (a.vScale = this.getScaleForId(p)));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(e) {
    return this.chart.scales[e];
  }
  _getOtherScale(e) {
    const a = this._cachedMeta;
    return e === a.iScale ? a.vScale : a.iScale;
  }
  reset() {
    this._update('reset');
  }
  _destroy() {
    const e = this._cachedMeta;
    (this._data && Kg(this._data, this), e._stacked && zs(e));
  }
  _dataCheck() {
    const e = this.getDataset(),
      a = e.data || (e.data = []),
      s = this._data;
    if (bt(a)) {
      const o = this._cachedMeta;
      this._data = i2(a, o);
    } else if (s !== a) {
      if (s) {
        Kg(s, this);
        const o = this._cachedMeta;
        (zs(o), (o._parsed = []));
      }
      (a && Object.isExtensible(a) && X_(a, this),
        (this._syncList = []),
        (this._data = a));
    }
  }
  addElements() {
    const e = this._cachedMeta;
    (this._dataCheck(),
      this.datasetElementType && (e.dataset = new this.datasetElementType()));
  }
  buildOrUpdateElements(e) {
    const a = this._cachedMeta,
      s = this.getDataset();
    let o = !1;
    this._dataCheck();
    const u = a._stacked;
    ((a._stacked = Lc(a.vScale, a)),
      a.stack !== s.stack && ((o = !0), zs(a), (a.stack = s.stack)),
      this._resyncElements(e),
      (o || u !== a._stacked) &&
        (dp(this, a._parsed), (a._stacked = Lc(a.vScale, a))));
  }
  configure() {
    const e = this.chart.config,
      a = e.datasetScopeKeys(this._type),
      s = e.getOptionScopes(this.getDataset(), a, !0);
    ((this.options = e.createResolver(s, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {}));
  }
  parse(e, a) {
    const { _cachedMeta: s, _data: o } = this,
      { iScale: u, _stacked: c } = s,
      h = u.axis;
    let d = e === 0 && a === o.length ? !0 : s._sorted,
      g = e > 0 && s._parsed[e - 1],
      p,
      b,
      v;
    if (this._parsing === !1) ((s._parsed = o), (s._sorted = !0), (v = o));
    else {
      Ft(o[e])
        ? (v = this.parseArrayData(s, o, e, a))
        : bt(o[e])
          ? (v = this.parseObjectData(s, o, e, a))
          : (v = this.parsePrimitiveData(s, o, e, a));
      const S = () => b[h] === null || (g && b[h] < g[h]);
      for (p = 0; p < a; ++p)
        ((s._parsed[p + e] = b = v[p]), d && (S() && (d = !1), (g = b)));
      s._sorted = d;
    }
    c && dp(this, v);
  }
  parsePrimitiveData(e, a, s, o) {
    const { iScale: u, vScale: c } = e,
      h = u.axis,
      d = c.axis,
      g = u.getLabels(),
      p = u === c,
      b = new Array(o);
    let v, S, w;
    for (v = 0, S = o; v < S; ++v)
      ((w = v + s),
        (b[v] = { [h]: p || u.parse(g[w], w), [d]: c.parse(a[w], w) }));
    return b;
  }
  parseArrayData(e, a, s, o) {
    const { xScale: u, yScale: c } = e,
      h = new Array(o);
    let d, g, p, b;
    for (d = 0, g = o; d < g; ++d)
      ((p = d + s),
        (b = a[p]),
        (h[d] = { x: u.parse(b[0], p), y: c.parse(b[1], p) }));
    return h;
  }
  parseObjectData(e, a, s, o) {
    const { xScale: u, yScale: c } = e,
      { xAxisKey: h = 'x', yAxisKey: d = 'y' } = this._parsing,
      g = new Array(o);
    let p, b, v, S;
    for (p = 0, b = o; p < b; ++p)
      ((v = p + s),
        (S = a[v]),
        (g[p] = { x: u.parse(Fo(S, h), v), y: c.parse(Fo(S, d), v) }));
    return g;
  }
  getParsed(e) {
    return this._cachedMeta._parsed[e];
  }
  getDataElement(e) {
    return this._cachedMeta.data[e];
  }
  applyStack(e, a, s) {
    const o = this.chart,
      u = this._cachedMeta,
      c = a[e.axis],
      h = { keys: K0(o, !0), values: a._stacks[e.axis]._visualValues };
    return fp(h, c, u.index, { mode: s });
  }
  updateRangeFromParsed(e, a, s, o) {
    const u = s[a.axis];
    let c = u === null ? NaN : u;
    const h = o && s._stacks[a.axis];
    (o && h && ((o.values = h), (c = fp(o, u, this._cachedMeta.index))),
      (e.min = Math.min(e.min, c)),
      (e.max = Math.max(e.max, c)));
  }
  getMinMax(e, a) {
    const s = this._cachedMeta,
      o = s._parsed,
      u = s._sorted && e === s.iScale,
      c = o.length,
      h = this._getOtherScale(e),
      d = u2(a, s, this.chart),
      g = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: p, max: b } = s2(h);
    let v, S;
    function w() {
      S = o[v];
      const E = S[h.axis];
      return !ue(S[e.axis]) || p > E || b < E;
    }
    for (
      v = 0;
      v < c && !(!w() && (this.updateRangeFromParsed(g, e, S, d), u));
      ++v
    );
    if (u) {
      for (v = c - 1; v >= 0; --v)
        if (!w()) {
          this.updateRangeFromParsed(g, e, S, d);
          break;
        }
    }
    return g;
  }
  getAllParsedValues(e) {
    const a = this._cachedMeta._parsed,
      s = [];
    let o, u, c;
    for (o = 0, u = a.length; o < u; ++o)
      ((c = a[o][e.axis]), ue(c) && s.push(c));
    return s;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(e) {
    const a = this._cachedMeta,
      s = a.iScale,
      o = a.vScale,
      u = this.getParsed(e);
    return {
      label: s ? '' + s.getLabelForValue(u[s.axis]) : '',
      value: o ? '' + o.getLabelForValue(u[o.axis]) : '',
    };
  }
  _update(e) {
    const a = this._cachedMeta;
    (this.update(e || 'default'),
      (a._clip = n2(
        pt(this.options.clip, e2(a.xScale, a.yScale, this.getMaxOverflow()))
      )));
  }
  update(e) {}
  draw() {
    const e = this._ctx,
      a = this.chart,
      s = this._cachedMeta,
      o = s.data || [],
      u = a.chartArea,
      c = [],
      h = this._drawStart || 0,
      d = this._drawCount || o.length - h,
      g = this.options.drawActiveElementsOnTop;
    let p;
    for (s.dataset && s.dataset.draw(e, u, h, d), p = h; p < h + d; ++p) {
      const b = o[p];
      b.hidden || (b.active && g ? c.push(b) : b.draw(e, u));
    }
    for (p = 0; p < c.length; ++p) c[p].draw(e, u);
  }
  getStyle(e, a) {
    const s = a ? 'active' : 'default';
    return e === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(s)
      : this.resolveDataElementOptions(e || 0, s);
  }
  getContext(e, a, s) {
    const o = this.getDataset();
    let u;
    if (e >= 0 && e < this._cachedMeta.data.length) {
      const c = this._cachedMeta.data[e];
      ((u = c.$context || (c.$context = r2(this.getContext(), e, c))),
        (u.parsed = this.getParsed(e)),
        (u.raw = o.data[e]),
        (u.index = u.dataIndex = e));
    } else
      ((u =
        this.$context ||
        (this.$context = o2(this.chart.getContext(), this.index))),
        (u.dataset = o),
        (u.index = u.datasetIndex = this.index));
    return ((u.active = !!a), (u.mode = s), u);
  }
  resolveDatasetElementOptions(e) {
    return this._resolveElementOptions(this.datasetElementType.id, e);
  }
  resolveDataElementOptions(e, a) {
    return this._resolveElementOptions(this.dataElementType.id, a, e);
  }
  _resolveElementOptions(e, a = 'default', s) {
    const o = a === 'active',
      u = this._cachedDataOpts,
      c = e + '-' + a,
      h = u[c],
      d = this.enableOptionSharing && Qo(s);
    if (h) return mp(h, d);
    const g = this.chart.config,
      p = g.datasetElementScopeKeys(this._type, e),
      b = o ? [`${e}Hover`, 'hover', e, ''] : [e, ''],
      v = g.getOptionScopes(this.getDataset(), p),
      S = Object.keys(qt.elements[e]),
      w = () => this.getContext(s, o, a),
      E = g.resolveNamedOptions(v, S, w, b);
    return (
      E.$shared && ((E.$shared = d), (u[c] = Object.freeze(mp(E, d)))),
      E
    );
  }
  _resolveAnimations(e, a, s) {
    const o = this.chart,
      u = this._cachedDataOpts,
      c = `animation-${a}`,
      h = u[c];
    if (h) return h;
    let d;
    if (o.options.animation !== !1) {
      const p = this.chart.config,
        b = p.datasetAnimationScopeKeys(this._type, a),
        v = p.getOptionScopes(this.getDataset(), b);
      d = p.createResolver(v, this.getContext(e, s, a));
    }
    const g = new Z0(o, d && d.animations);
    return (d && d._cacheable && (u[c] = Object.freeze(g)), g);
  }
  getSharedOptions(e) {
    if (e.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, e))
      );
  }
  includeOptions(e, a) {
    return !a || Bc(e) || this.chart._animationsDisabled;
  }
  _getSharedOptions(e, a) {
    const s = this.resolveDataElementOptions(e, a),
      o = this._sharedOptions,
      u = this.getSharedOptions(s),
      c = this.includeOptions(a, u) || u !== o;
    return (
      this.updateSharedOptions(u, a, s),
      { sharedOptions: u, includeOptions: c }
    );
  }
  updateElement(e, a, s, o) {
    Bc(o) ? Object.assign(e, s) : this._resolveAnimations(a, o).update(e, s);
  }
  updateSharedOptions(e, a, s) {
    e && !Bc(a) && this._resolveAnimations(void 0, a).update(e, s);
  }
  _setStyle(e, a, s, o) {
    e.active = o;
    const u = this.getStyle(a, o);
    this._resolveAnimations(a, s, o).update(e, {
      options: (!o && this.getSharedOptions(u)) || u,
    });
  }
  removeHoverStyle(e, a, s) {
    this._setStyle(e, s, 'active', !1);
  }
  setHoverStyle(e, a, s) {
    this._setStyle(e, s, 'active', !0);
  }
  _removeDatasetHoverStyle() {
    const e = this._cachedMeta.dataset;
    e && this._setStyle(e, void 0, 'active', !1);
  }
  _setDatasetHoverStyle() {
    const e = this._cachedMeta.dataset;
    e && this._setStyle(e, void 0, 'active', !0);
  }
  _resyncElements(e) {
    const a = this._data,
      s = this._cachedMeta.data;
    for (const [h, d, g] of this._syncList) this[h](d, g);
    this._syncList = [];
    const o = s.length,
      u = a.length,
      c = Math.min(u, o);
    (c && this.parse(0, c),
      u > o
        ? this._insertElements(o, u - o, e)
        : u < o && this._removeElements(u, o - u));
  }
  _insertElements(e, a, s = !0) {
    const o = this._cachedMeta,
      u = o.data,
      c = e + a;
    let h;
    const d = (g) => {
      for (g.length += a, h = g.length - 1; h >= c; h--) g[h] = g[h - a];
    };
    for (d(u), h = e; h < c; ++h) u[h] = new this.dataElementType();
    (this._parsing && d(o._parsed),
      this.parse(e, a),
      s && this.updateElements(u, e, a, 'reset'));
  }
  updateElements(e, a, s, o) {}
  _removeElements(e, a) {
    const s = this._cachedMeta;
    if (this._parsing) {
      const o = s._parsed.splice(e, a);
      s._stacked && zs(s, o);
    }
    s.data.splice(e, a);
  }
  _sync(e) {
    if (this._parsing) this._syncList.push(e);
    else {
      const [a, s, o] = e;
      this[a](s, o);
    }
    this.chart._dataChanges.push([this.index, ...e]);
  }
  _onDataPush() {
    const e = arguments.length;
    this._sync(['_insertElements', this.getDataset().data.length - e, e]);
  }
  _onDataPop() {
    this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(['_removeElements', 0, 1]);
  }
  _onDataSplice(e, a) {
    a && this._sync(['_removeElements', e, a]);
    const s = arguments.length - 2;
    s && this._sync(['_insertElements', e, s]);
  }
  _onDataUnshift() {
    this._sync(['_insertElements', 0, arguments.length]);
  }
}
class c2 extends W0 {
  static id = 'line';
  static defaults = {
    datasetElementType: 'line',
    dataElementType: 'point',
    showLine: !0,
    spanGaps: !1,
  };
  static overrides = {
    scales: { _index_: { type: 'category' }, _value_: { type: 'linear' } },
  };
  initialize() {
    ((this.enableOptionSharing = !0),
      (this.supportsDecimation = !0),
      super.initialize());
  }
  update(e) {
    const a = this._cachedMeta,
      { dataset: s, data: o = [], _dataset: u } = a,
      c = this.chart._animationsDisabled;
    let { start: h, count: d } = Q_(a, o, c);
    ((this._drawStart = h),
      (this._drawCount = d),
      Z_(a) && ((h = 0), (d = o.length)),
      (s._chart = this.chart),
      (s._datasetIndex = this.index),
      (s._decimated = !!u._decimated),
      (s.points = o));
    const g = this.resolveDatasetElementOptions(e);
    (this.options.showLine || (g.borderWidth = 0),
      (g.segment = this.options.segment),
      this.updateElement(s, void 0, { animated: !c, options: g }, e),
      this.updateElements(o, h, d, e));
  }
  updateElements(e, a, s, o) {
    const u = o === 'reset',
      { iScale: c, vScale: h, _stacked: d, _dataset: g } = this._cachedMeta,
      { sharedOptions: p, includeOptions: b } = this._getSharedOptions(a, o),
      v = c.axis,
      S = h.axis,
      { spanGaps: w, segment: E } = this.options,
      M = $s(w) ? w : Number.POSITIVE_INFINITY,
      D = this.chart._animationsDisabled || u || o === 'none',
      k = a + s,
      Y = e.length;
    let G = a > 0 && this.getParsed(a - 1);
    for (let B = 0; B < Y; ++B) {
      const F = e[B],
        K = D ? F : {};
      if (B < a || B >= k) {
        K.skip = !0;
        continue;
      }
      const Q = this.getParsed(B),
        J = Ct(Q[S]),
        rt = (K[v] = c.getPixelForValue(Q[v], B)),
        st = (K[S] =
          u || J
            ? h.getBasePixel()
            : h.getPixelForValue(d ? this.applyStack(h, Q, d) : Q[S], B));
      ((K.skip = isNaN(rt) || isNaN(st) || J),
        (K.stop = B > 0 && Math.abs(Q[v] - G[v]) > M),
        E && ((K.parsed = Q), (K.raw = g.data[B])),
        b &&
          (K.options =
            p || this.resolveDataElementOptions(B, F.active ? 'active' : o)),
        D || this.updateElement(F, B, K, o),
        (G = Q));
    }
  }
  getMaxOverflow() {
    const e = this._cachedMeta,
      a = e.dataset,
      s = (a.options && a.options.borderWidth) || 0,
      o = e.data || [];
    if (!o.length) return s;
    const u = o[0].size(this.resolveDataElementOptions(0)),
      c = o[o.length - 1].size(this.resolveDataElementOptions(o.length - 1));
    return Math.max(s, u, c) / 2;
  }
  draw() {
    const e = this._cachedMeta;
    (e.dataset.updateControlPoints(this.chart.chartArea, e.iScale.axis),
      super.draw());
  }
}
function Ei() {
  throw new Error(
    'This method is not implemented: Check that a complete date adapter is provided.'
  );
}
class Tf {
  static override(e) {
    Object.assign(Tf.prototype, e);
  }
  options;
  constructor(e) {
    this.options = e || {};
  }
  init() {}
  formats() {
    return Ei();
  }
  parse() {
    return Ei();
  }
  format() {
    return Ei();
  }
  add() {
    return Ei();
  }
  diff() {
    return Ei();
  }
  startOf() {
    return Ei();
  }
  endOf() {
    return Ei();
  }
}
var f2 = { _date: Tf };
function h2(i, e, a, s) {
  const { controller: o, data: u, _sorted: c } = i,
    h = o._cachedMeta.iScale,
    d = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null;
  if (h && e === h.axis && e !== 'r' && c && u.length) {
    const g = h._reversePixels ? q_ : Di;
    if (s) {
      if (o._sharedOptions) {
        const p = u[0],
          b = typeof p.getRange == 'function' && p.getRange(e);
        if (b) {
          const v = g(u, e, a - b),
            S = g(u, e, a + b);
          return { lo: v.lo, hi: S.hi };
        }
      }
    } else {
      const p = g(u, e, a);
      if (d) {
        const { vScale: b } = o._cachedMeta,
          { _parsed: v } = i,
          S = v
            .slice(0, p.lo + 1)
            .reverse()
            .findIndex((E) => !Ct(E[b.axis]));
        p.lo -= Math.max(0, S);
        const w = v.slice(p.hi).findIndex((E) => !Ct(E[b.axis]));
        p.hi += Math.max(0, w);
      }
      return p;
    }
  }
  return { lo: 0, hi: u.length - 1 };
}
function ar(i, e, a, s, o) {
  const u = i.getSortedVisibleDatasetMetas(),
    c = a[e];
  for (let h = 0, d = u.length; h < d; ++h) {
    const { index: g, data: p } = u[h],
      { lo: b, hi: v } = h2(u[h], e, c, o);
    for (let S = b; S <= v; ++S) {
      const w = p[S];
      w.skip || s(w, g, S);
    }
  }
}
function d2(i) {
  const e = i.indexOf('x') !== -1,
    a = i.indexOf('y') !== -1;
  return function (s, o) {
    const u = e ? Math.abs(s.x - o.x) : 0,
      c = a ? Math.abs(s.y - o.y) : 0;
    return Math.sqrt(Math.pow(u, 2) + Math.pow(c, 2));
  };
}
function Uc(i, e, a, s, o) {
  const u = [];
  return (
    (!o && !i.isPointInArea(e)) ||
      ar(
        i,
        a,
        e,
        function (h, d, g) {
          (!o && !Js(h, i.chartArea, 0)) ||
            (h.inRange(e.x, e.y, s) &&
              u.push({ element: h, datasetIndex: d, index: g }));
        },
        !0
      ),
    u
  );
}
function m2(i, e, a, s) {
  let o = [];
  function u(c, h, d) {
    const { startAngle: g, endAngle: p } = c.getProps(
        ['startAngle', 'endAngle'],
        s
      ),
      { angle: b } = B_(c, { x: e.x, y: e.y });
    D0(b, g, p) && o.push({ element: c, datasetIndex: h, index: d });
  }
  return (ar(i, a, e, u), o);
}
function g2(i, e, a, s, o, u) {
  let c = [];
  const h = d2(a);
  let d = Number.POSITIVE_INFINITY;
  function g(p, b, v) {
    const S = p.inRange(e.x, e.y, o);
    if (s && !S) return;
    const w = p.getCenterPoint(o);
    if (!(!!u || i.isPointInArea(w)) && !S) return;
    const M = h(e, w);
    M < d
      ? ((c = [{ element: p, datasetIndex: b, index: v }]), (d = M))
      : M === d && c.push({ element: p, datasetIndex: b, index: v });
  }
  return (ar(i, a, e, g), c);
}
function Yc(i, e, a, s, o, u) {
  return !u && !i.isPointInArea(e)
    ? []
    : a === 'r' && !s
      ? m2(i, e, a, o)
      : g2(i, e, a, s, o, u);
}
function gp(i, e, a, s, o) {
  const u = [],
    c = a === 'x' ? 'inXRange' : 'inYRange';
  let h = !1;
  return (
    ar(i, a, e, (d, g, p) => {
      d[c] &&
        d[c](e[a], o) &&
        (u.push({ element: d, datasetIndex: g, index: p }),
        (h = h || d.inRange(e.x, e.y, o)));
    }),
    s && !h ? [] : u
  );
}
var p2 = {
  modes: {
    index(i, e, a, s) {
      const o = Ti(e, i),
        u = a.axis || 'x',
        c = a.includeInvisible || !1,
        h = a.intersect ? Uc(i, o, u, s, c) : Yc(i, o, u, !1, s, c),
        d = [];
      return h.length
        ? (i.getSortedVisibleDatasetMetas().forEach((g) => {
            const p = h[0].index,
              b = g.data[p];
            b &&
              !b.skip &&
              d.push({ element: b, datasetIndex: g.index, index: p });
          }),
          d)
        : [];
    },
    dataset(i, e, a, s) {
      const o = Ti(e, i),
        u = a.axis || 'xy',
        c = a.includeInvisible || !1;
      let h = a.intersect ? Uc(i, o, u, s, c) : Yc(i, o, u, !1, s, c);
      if (h.length > 0) {
        const d = h[0].datasetIndex,
          g = i.getDatasetMeta(d).data;
        h = [];
        for (let p = 0; p < g.length; ++p)
          h.push({ element: g[p], datasetIndex: d, index: p });
      }
      return h;
    },
    point(i, e, a, s) {
      const o = Ti(e, i),
        u = a.axis || 'xy',
        c = a.includeInvisible || !1;
      return Uc(i, o, u, s, c);
    },
    nearest(i, e, a, s) {
      const o = Ti(e, i),
        u = a.axis || 'xy',
        c = a.includeInvisible || !1;
      return Yc(i, o, u, a.intersect, s, c);
    },
    x(i, e, a, s) {
      const o = Ti(e, i);
      return gp(i, o, 'x', a.intersect, s);
    },
    y(i, e, a, s) {
      const o = Ti(e, i);
      return gp(i, o, 'y', a.intersect, s);
    },
  },
};
const $0 = ['left', 'top', 'right', 'bottom'];
function Ns(i, e) {
  return i.filter((a) => a.pos === e);
}
function pp(i, e) {
  return i.filter((a) => $0.indexOf(a.pos) === -1 && a.box.axis === e);
}
function ks(i, e) {
  return i.sort((a, s) => {
    const o = e ? s : a,
      u = e ? a : s;
    return o.weight === u.weight ? o.index - u.index : o.weight - u.weight;
  });
}
function y2(i) {
  const e = [];
  let a, s, o, u, c, h;
  for (a = 0, s = (i || []).length; a < s; ++a)
    ((o = i[a]),
      ({
        position: u,
        options: { stack: c, stackWeight: h = 1 },
      } = o),
      e.push({
        index: a,
        box: o,
        pos: u,
        horizontal: o.isHorizontal(),
        weight: o.weight,
        stack: c && u + c,
        stackWeight: h,
      }));
  return e;
}
function b2(i) {
  const e = {};
  for (const a of i) {
    const { stack: s, pos: o, stackWeight: u } = a;
    if (!s || !$0.includes(o)) continue;
    const c = e[s] || (e[s] = { count: 0, placed: 0, weight: 0, size: 0 });
    (c.count++, (c.weight += u));
  }
  return e;
}
function x2(i, e) {
  const a = b2(i),
    { vBoxMaxWidth: s, hBoxMaxHeight: o } = e;
  let u, c, h;
  for (u = 0, c = i.length; u < c; ++u) {
    h = i[u];
    const { fullSize: d } = h.box,
      g = a[h.stack],
      p = g && h.stackWeight / g.weight;
    h.horizontal
      ? ((h.width = p ? p * s : d && e.availableWidth), (h.height = o))
      : ((h.width = s), (h.height = p ? p * o : d && e.availableHeight));
  }
  return a;
}
function v2(i) {
  const e = y2(i),
    a = ks(
      e.filter((g) => g.box.fullSize),
      !0
    ),
    s = ks(Ns(e, 'left'), !0),
    o = ks(Ns(e, 'right')),
    u = ks(Ns(e, 'top'), !0),
    c = ks(Ns(e, 'bottom')),
    h = pp(e, 'x'),
    d = pp(e, 'y');
  return {
    fullSize: a,
    leftAndTop: s.concat(u),
    rightAndBottom: o.concat(d).concat(c).concat(h),
    chartArea: Ns(e, 'chartArea'),
    vertical: s.concat(o).concat(d),
    horizontal: u.concat(c).concat(h),
  };
}
function yp(i, e, a, s) {
  return Math.max(i[a], e[a]) + Math.max(i[s], e[s]);
}
function J0(i, e) {
  ((i.top = Math.max(i.top, e.top)),
    (i.left = Math.max(i.left, e.left)),
    (i.bottom = Math.max(i.bottom, e.bottom)),
    (i.right = Math.max(i.right, e.right)));
}
function _2(i, e, a, s) {
  const { pos: o, box: u } = a,
    c = i.maxPadding;
  if (!bt(o)) {
    a.size && (i[o] -= a.size);
    const b = s[a.stack] || { size: 0, count: 1 };
    ((b.size = Math.max(b.size, a.horizontal ? u.height : u.width)),
      (a.size = b.size / b.count),
      (i[o] += a.size));
  }
  u.getPadding && J0(c, u.getPadding());
  const h = Math.max(0, e.outerWidth - yp(c, i, 'left', 'right')),
    d = Math.max(0, e.outerHeight - yp(c, i, 'top', 'bottom')),
    g = h !== i.w,
    p = d !== i.h;
  return (
    (i.w = h),
    (i.h = d),
    a.horizontal ? { same: g, other: p } : { same: p, other: g }
  );
}
function S2(i) {
  const e = i.maxPadding;
  function a(s) {
    const o = Math.max(e[s] - i[s], 0);
    return ((i[s] += o), o);
  }
  ((i.y += a('top')), (i.x += a('left')), a('right'), a('bottom'));
}
function w2(i, e) {
  const a = e.maxPadding;
  function s(o) {
    const u = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      o.forEach((c) => {
        u[c] = Math.max(e[c], a[c]);
      }),
      u
    );
  }
  return s(i ? ['left', 'right'] : ['top', 'bottom']);
}
function Us(i, e, a, s) {
  const o = [];
  let u, c, h, d, g, p;
  for (u = 0, c = i.length, g = 0; u < c; ++u) {
    ((h = i[u]),
      (d = h.box),
      d.update(h.width || e.w, h.height || e.h, w2(h.horizontal, e)));
    const { same: b, other: v } = _2(e, a, h, s);
    ((g |= b && o.length), (p = p || v), d.fullSize || o.push(h));
  }
  return (g && Us(o, e, a, s)) || p;
}
function zo(i, e, a, s, o) {
  ((i.top = a),
    (i.left = e),
    (i.right = e + s),
    (i.bottom = a + o),
    (i.width = s),
    (i.height = o));
}
function bp(i, e, a, s) {
  const o = a.padding;
  let { x: u, y: c } = e;
  for (const h of i) {
    const d = h.box,
      g = s[h.stack] || { placed: 0, weight: 1 },
      p = h.stackWeight / g.weight || 1;
    if (h.horizontal) {
      const b = e.w * p,
        v = g.size || d.height;
      (Qo(g.start) && (c = g.start),
        d.fullSize
          ? zo(d, o.left, c, a.outerWidth - o.right - o.left, v)
          : zo(d, e.left + g.placed, c, b, v),
        (g.start = c),
        (g.placed += b),
        (c = d.bottom));
    } else {
      const b = e.h * p,
        v = g.size || d.width;
      (Qo(g.start) && (u = g.start),
        d.fullSize
          ? zo(d, u, o.top, v, a.outerHeight - o.bottom - o.top)
          : zo(d, u, e.top + g.placed, v, b),
        (g.start = u),
        (g.placed += b),
        (u = d.right));
    }
  }
  ((e.x = u), (e.y = c));
}
var qe = {
  addBox(i, e) {
    (i.boxes || (i.boxes = []),
      (e.fullSize = e.fullSize || !1),
      (e.position = e.position || 'top'),
      (e.weight = e.weight || 0),
      (e._layers =
        e._layers ||
        function () {
          return [
            {
              z: 0,
              draw(a) {
                e.draw(a);
              },
            },
          ];
        }),
      i.boxes.push(e));
  },
  removeBox(i, e) {
    const a = i.boxes ? i.boxes.indexOf(e) : -1;
    a !== -1 && i.boxes.splice(a, 1);
  },
  configure(i, e, a) {
    ((e.fullSize = a.fullSize),
      (e.position = a.position),
      (e.weight = a.weight));
  },
  update(i, e, a, s) {
    if (!i) return;
    const o = Ve(i.options.layout.padding),
      u = Math.max(e - o.width, 0),
      c = Math.max(a - o.height, 0),
      h = v2(i.boxes),
      d = h.vertical,
      g = h.horizontal;
    Mt(i.boxes, (E) => {
      typeof E.beforeLayout == 'function' && E.beforeLayout();
    });
    const p =
        d.reduce(
          (E, M) => (M.box.options && M.box.options.display === !1 ? E : E + 1),
          0
        ) || 1,
      b = Object.freeze({
        outerWidth: e,
        outerHeight: a,
        padding: o,
        availableWidth: u,
        availableHeight: c,
        vBoxMaxWidth: u / 2 / p,
        hBoxMaxHeight: c / 2,
      }),
      v = Object.assign({}, o);
    J0(v, Ve(s));
    const S = Object.assign(
        { maxPadding: v, w: u, h: c, x: o.left, y: o.top },
        o
      ),
      w = x2(d.concat(g), b);
    (Us(h.fullSize, S, b, w),
      Us(d, S, b, w),
      Us(g, S, b, w) && Us(d, S, b, w),
      S2(S),
      bp(h.leftAndTop, S, b, w),
      (S.x += S.w),
      (S.y += S.h),
      bp(h.rightAndBottom, S, b, w),
      (i.chartArea = {
        left: S.left,
        top: S.top,
        right: S.left + S.w,
        bottom: S.top + S.h,
        height: S.h,
        width: S.w,
      }),
      Mt(h.chartArea, (E) => {
        const M = E.box;
        (Object.assign(M, i.chartArea),
          M.update(S.w, S.h, { left: 0, top: 0, right: 0, bottom: 0 }));
      }));
  },
};
class I0 {
  acquireContext(e, a) {}
  releaseContext(e) {
    return !1;
  }
  addEventListener(e, a, s) {}
  removeEventListener(e, a, s) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(e, a, s, o) {
    return (
      (a = Math.max(0, a || e.width)),
      (s = s || e.height),
      { width: a, height: Math.max(0, o ? Math.floor(a / o) : s) }
    );
  }
  isAttached(e) {
    return !0;
  }
  updateConfig(e) {}
}
class M2 extends I0 {
  acquireContext(e) {
    return (e && e.getContext && e.getContext('2d')) || null;
  }
  updateConfig(e) {
    e.options.animation = !1;
  }
}
const qo = '$chartjs',
  E2 = {
    touchstart: 'mousedown',
    touchmove: 'mousemove',
    touchend: 'mouseup',
    pointerenter: 'mouseenter',
    pointerdown: 'mousedown',
    pointermove: 'mousemove',
    pointerup: 'mouseup',
    pointerleave: 'mouseout',
    pointerout: 'mouseout',
  },
  xp = (i) => i === null || i === '';
function T2(i, e) {
  const a = i.style,
    s = i.getAttribute('height'),
    o = i.getAttribute('width');
  if (
    ((i[qo] = {
      initial: {
        height: s,
        width: o,
        style: { display: a.display, height: a.height, width: a.width },
      },
    }),
    (a.display = a.display || 'block'),
    (a.boxSizing = a.boxSizing || 'border-box'),
    xp(o))
  ) {
    const u = sp(i, 'width');
    u !== void 0 && (i.width = u);
  }
  if (xp(s))
    if (i.style.height === '') i.height = i.width / (e || 2);
    else {
      const u = sp(i, 'height');
      u !== void 0 && (i.height = u);
    }
  return i;
}
const ty = BS ? { passive: !0 } : !1;
function O2(i, e, a) {
  i && i.addEventListener(e, a, ty);
}
function A2(i, e, a) {
  i && i.canvas && i.canvas.removeEventListener(e, a, ty);
}
function D2(i, e) {
  const a = E2[i.type] || i.type,
    { x: s, y: o } = Ti(i, e);
  return {
    type: a,
    chart: e,
    native: i,
    x: s !== void 0 ? s : null,
    y: o !== void 0 ? o : null,
  };
}
function Wo(i, e) {
  for (const a of i) if (a === e || a.contains(e)) return !0;
}
function C2(i, e, a) {
  const s = i.canvas,
    o = new MutationObserver((u) => {
      let c = !1;
      for (const h of u)
        ((c = c || Wo(h.addedNodes, s)), (c = c && !Wo(h.removedNodes, s)));
      c && a();
    });
  return (o.observe(document, { childList: !0, subtree: !0 }), o);
}
function j2(i, e, a) {
  const s = i.canvas,
    o = new MutationObserver((u) => {
      let c = !1;
      for (const h of u)
        ((c = c || Wo(h.removedNodes, s)), (c = c && !Wo(h.addedNodes, s)));
      c && a();
    });
  return (o.observe(document, { childList: !0, subtree: !0 }), o);
}
const tl = new Map();
let vp = 0;
function ey() {
  const i = window.devicePixelRatio;
  i !== vp &&
    ((vp = i),
    tl.forEach((e, a) => {
      a.currentDevicePixelRatio !== i && e();
    }));
}
function R2(i, e) {
  (tl.size || window.addEventListener('resize', ey), tl.set(i, e));
}
function z2(i) {
  (tl.delete(i), tl.size || window.removeEventListener('resize', ey));
}
function N2(i, e, a) {
  const s = i.canvas,
    o = s && Ef(s);
  if (!o) return;
  const u = R0((h, d) => {
      const g = o.clientWidth;
      (a(h, d), g < o.clientWidth && a());
    }, window),
    c = new ResizeObserver((h) => {
      const d = h[0],
        g = d.contentRect.width,
        p = d.contentRect.height;
      (g === 0 && p === 0) || u(g, p);
    });
  return (c.observe(o), R2(i, u), c);
}
function qc(i, e, a) {
  (a && a.disconnect(), e === 'resize' && z2(i));
}
function k2(i, e, a) {
  const s = i.canvas,
    o = R0((u) => {
      i.ctx !== null && a(D2(u, i));
    }, i);
  return (O2(s, e, o), o);
}
class L2 extends I0 {
  acquireContext(e, a) {
    const s = e && e.getContext && e.getContext('2d');
    return s && s.canvas === e ? (T2(e, a), s) : null;
  }
  releaseContext(e) {
    const a = e.canvas;
    if (!a[qo]) return !1;
    const s = a[qo].initial;
    ['height', 'width'].forEach((u) => {
      const c = s[u];
      Ct(c) ? a.removeAttribute(u) : a.setAttribute(u, c);
    });
    const o = s.style || {};
    return (
      Object.keys(o).forEach((u) => {
        a.style[u] = o[u];
      }),
      (a.width = a.width),
      delete a[qo],
      !0
    );
  }
  addEventListener(e, a, s) {
    this.removeEventListener(e, a);
    const o = e.$proxies || (e.$proxies = {}),
      c = { attach: C2, detach: j2, resize: N2 }[a] || k2;
    o[a] = c(e, a, s);
  }
  removeEventListener(e, a) {
    const s = e.$proxies || (e.$proxies = {}),
      o = s[a];
    if (!o) return;
    ((({ attach: qc, detach: qc, resize: qc })[a] || A2)(e, a, o),
      (s[a] = void 0));
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(e, a, s, o) {
    return HS(e, a, s, o);
  }
  isAttached(e) {
    const a = e && Ef(e);
    return !!(a && a.isConnected);
  }
}
function H2(i) {
  return !Mf() || (typeof OffscreenCanvas < 'u' && i instanceof OffscreenCanvas)
    ? M2
    : L2;
}
class Ni {
  static defaults = {};
  static defaultRoutes = void 0;
  x;
  y;
  active = !1;
  options;
  $animations;
  tooltipPosition(e) {
    const { x: a, y: s } = this.getProps(['x', 'y'], e);
    return { x: a, y: s };
  }
  hasValue() {
    return $s(this.x) && $s(this.y);
  }
  getProps(e, a) {
    const s = this.$animations;
    if (!a || !s) return this;
    const o = {};
    return (
      e.forEach((u) => {
        o[u] = s[u] && s[u].active() ? s[u]._to : this[u];
      }),
      o
    );
  }
}
function B2(i, e) {
  const a = i.options.ticks,
    s = U2(i),
    o = Math.min(a.maxTicksLimit || s, s),
    u = a.major.enabled ? q2(e) : [],
    c = u.length,
    h = u[0],
    d = u[c - 1],
    g = [];
  if (c > o) return (V2(e, g, u, c / o), g);
  const p = Y2(u, e, o);
  if (c > 0) {
    let b, v;
    const S = c > 1 ? Math.round((d - h) / (c - 1)) : null;
    for (No(e, g, p, Ct(S) ? 0 : h - S, h), b = 0, v = c - 1; b < v; b++)
      No(e, g, p, u[b], u[b + 1]);
    return (No(e, g, p, d, Ct(S) ? e.length : d + S), g);
  }
  return (No(e, g, p), g);
}
function U2(i) {
  const e = i.options.offset,
    a = i._tickSize(),
    s = i._length / a + (e ? 0 : 1),
    o = i._maxLength / a;
  return Math.floor(Math.min(s, o));
}
function Y2(i, e, a) {
  const s = X2(i),
    o = e.length / a;
  if (!s) return Math.max(o, 1);
  const u = z_(s);
  for (let c = 0, h = u.length - 1; c < h; c++) {
    const d = u[c];
    if (d > o) return d;
  }
  return Math.max(o, 1);
}
function q2(i) {
  const e = [];
  let a, s;
  for (a = 0, s = i.length; a < s; a++) i[a].major && e.push(a);
  return e;
}
function V2(i, e, a, s) {
  let o = 0,
    u = a[0],
    c;
  for (s = Math.ceil(s), c = 0; c < i.length; c++)
    c === u && (e.push(i[c]), o++, (u = a[o * s]));
}
function No(i, e, a, s, o) {
  const u = pt(s, 0),
    c = Math.min(pt(o, i.length), i.length);
  let h = 0,
    d,
    g,
    p;
  for (
    a = Math.ceil(a), o && ((d = o - s), (a = d / Math.floor(d / a))), p = u;
    p < 0;

  )
    (h++, (p = Math.round(u + h * a)));
  for (g = Math.max(u, 0); g < c; g++)
    g === p && (e.push(i[g]), h++, (p = Math.round(u + h * a)));
}
function X2(i) {
  const e = i.length;
  let a, s;
  if (e < 2) return !1;
  for (s = i[0], a = 1; a < e; ++a) if (i[a] - i[a - 1] !== s) return !1;
  return s;
}
const G2 = (i) => (i === 'left' ? 'right' : i === 'right' ? 'left' : i),
  _p = (i, e, a) => (e === 'top' || e === 'left' ? i[e] + a : i[e] - a),
  Sp = (i, e) => Math.min(e || i, i);
function wp(i, e) {
  const a = [],
    s = i.length / e,
    o = i.length;
  let u = 0;
  for (; u < o; u += s) a.push(i[Math.floor(u)]);
  return a;
}
function P2(i, e, a) {
  const s = i.ticks.length,
    o = Math.min(e, s - 1),
    u = i._startPixel,
    c = i._endPixel,
    h = 1e-6;
  let d = i.getPixelForTick(o),
    g;
  if (
    !(
      a &&
      (s === 1
        ? (g = Math.max(d - u, c - d))
        : e === 0
          ? (g = (i.getPixelForTick(1) - d) / 2)
          : (g = (d - i.getPixelForTick(o - 1)) / 2),
      (d += o < e ? g : -g),
      d < u - h || d > c + h)
    )
  )
    return d;
}
function F2(i, e) {
  Mt(i, (a) => {
    const s = a.gc,
      o = s.length / 2;
    let u;
    if (o > e) {
      for (u = 0; u < o; ++u) delete a.data[s[u]];
      s.splice(0, o);
    }
  });
}
function Ls(i) {
  return i.drawTicks ? i.tickLength : 0;
}
function Mp(i, e) {
  if (!i.display) return 0;
  const a = re(i.font, e),
    s = Ve(i.padding);
  return (Ft(i.text) ? i.text.length : 1) * a.lineHeight + s.height;
}
function Q2(i, e) {
  return zi(i, { scale: e, type: 'scale' });
}
function Z2(i, e, a) {
  return zi(i, { tick: a, index: e, type: 'tick' });
}
function K2(i, e, a) {
  let s = xf(i);
  return (((a && e !== 'right') || (!a && e === 'right')) && (s = G2(s)), s);
}
function W2(i, e, a, s) {
  const { top: o, left: u, bottom: c, right: h, chart: d } = i,
    { chartArea: g, scales: p } = d;
  let b = 0,
    v,
    S,
    w;
  const E = c - o,
    M = h - u;
  if (i.isHorizontal()) {
    if (((S = oe(s, u, h)), bt(a))) {
      const D = Object.keys(a)[0],
        k = a[D];
      w = p[D].getPixelForValue(k) + E - e;
    } else
      a === 'center' ? (w = (g.bottom + g.top) / 2 + E - e) : (w = _p(i, a, e));
    v = h - u;
  } else {
    if (bt(a)) {
      const D = Object.keys(a)[0],
        k = a[D];
      S = p[D].getPixelForValue(k) - M + e;
    } else
      a === 'center' ? (S = (g.left + g.right) / 2 - M + e) : (S = _p(i, a, e));
    ((w = oe(s, c, o)), (b = a === 'left' ? -Fe : Fe));
  }
  return { titleX: S, titleY: w, maxWidth: v, rotation: b };
}
class Ra extends Ni {
  constructor(e) {
    (super(),
      (this.id = e.id),
      (this.type = e.type),
      (this.options = void 0),
      (this.ctx = e.ctx),
      (this.chart = e.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0));
  }
  init(e) {
    ((this.options = e.setContext(this.getContext())),
      (this.axis = e.axis),
      (this._userMin = this.parse(e.min)),
      (this._userMax = this.parse(e.max)),
      (this._suggestedMin = this.parse(e.suggestedMin)),
      (this._suggestedMax = this.parse(e.suggestedMax)));
  }
  parse(e, a) {
    return e;
  }
  getUserBounds() {
    let { _userMin: e, _userMax: a, _suggestedMin: s, _suggestedMax: o } = this;
    return (
      (e = an(e, Number.POSITIVE_INFINITY)),
      (a = an(a, Number.NEGATIVE_INFINITY)),
      (s = an(s, Number.POSITIVE_INFINITY)),
      (o = an(o, Number.NEGATIVE_INFINITY)),
      { min: an(e, s), max: an(a, o), minDefined: ue(e), maxDefined: ue(a) }
    );
  }
  getMinMax(e) {
    let { min: a, max: s, minDefined: o, maxDefined: u } = this.getUserBounds(),
      c;
    if (o && u) return { min: a, max: s };
    const h = this.getMatchingVisibleMetas();
    for (let d = 0, g = h.length; d < g; ++d)
      ((c = h[d].controller.getMinMax(this, e)),
        o || (a = Math.min(a, c.min)),
        u || (s = Math.max(s, c.max)));
    return (
      (a = u && a > s ? s : a),
      (s = o && a > s ? a : s),
      { min: an(a, an(s, a)), max: an(s, an(a, s)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const e = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? e.xLabels : e.yLabels) ||
      e.labels ||
      []
    );
  }
  getLabelItems(e = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(e));
  }
  beforeLayout() {
    ((this._cache = {}), (this._dataLimitsCached = !1));
  }
  beforeUpdate() {
    jt(this.options.beforeUpdate, [this]);
  }
  update(e, a, s) {
    const { beginAtZero: o, grace: u, ticks: c } = this.options,
      h = c.sampleSize;
    (this.beforeUpdate(),
      (this.maxWidth = e),
      (this.maxHeight = a),
      (this._margins = s =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, s)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + s.left + s.right
        : this.height + s.top + s.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = gS(this, u, o)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks());
    const d = h < this.ticks.length;
    (this._convertTicksToLabels(d ? wp(this.ticks, h) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      c.display &&
        (c.autoSkip || c.source === 'auto') &&
        ((this.ticks = B2(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      d && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate());
  }
  configure() {
    let e = this.options.reverse,
      a,
      s;
    (this.isHorizontal()
      ? ((a = this.left), (s = this.right))
      : ((a = this.top), (s = this.bottom), (e = !e)),
      (this._startPixel = a),
      (this._endPixel = s),
      (this._reversePixels = e),
      (this._length = s - a),
      (this._alignToPixels = this.options.alignToPixels));
  }
  afterUpdate() {
    jt(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    jt(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    (this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0));
  }
  afterSetDimensions() {
    jt(this.options.afterSetDimensions, [this]);
  }
  _callHooks(e) {
    (this.chart.notifyPlugins(e, this.getContext()),
      jt(this.options[e], [this]));
  }
  beforeDataLimits() {
    this._callHooks('beforeDataLimits');
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks('afterDataLimits');
  }
  beforeBuildTicks() {
    this._callHooks('beforeBuildTicks');
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks('afterBuildTicks');
  }
  beforeTickToLabelConversion() {
    jt(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(e) {
    const a = this.options.ticks;
    let s, o, u;
    for (s = 0, o = e.length; s < o; s++)
      ((u = e[s]), (u.label = jt(a.callback, [u.value, s, e], this)));
  }
  afterTickToLabelConversion() {
    jt(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    jt(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const e = this.options,
      a = e.ticks,
      s = Sp(this.ticks.length, e.ticks.maxTicksLimit),
      o = a.minRotation || 0,
      u = a.maxRotation;
    let c = o,
      h,
      d,
      g;
    if (
      !this._isVisible() ||
      !a.display ||
      o >= u ||
      s <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = o;
      return;
    }
    const p = this._getLabelSizes(),
      b = p.widest.width,
      v = p.highest.height,
      S = Ye(this.chart.width - b, 0, this.maxWidth);
    ((h = e.offset ? this.maxWidth / s : S / (s - 1)),
      b + 6 > h &&
        ((h = S / (s - (e.offset ? 0.5 : 1))),
        (d =
          this.maxHeight -
          Ls(e.grid) -
          a.padding -
          Mp(e.title, this.chart.options.font)),
        (g = Math.sqrt(b * b + v * v)),
        (c = H_(
          Math.min(
            Math.asin(Ye((p.highest.height + 6) / h, -1, 1)),
            Math.asin(Ye(d / g, -1, 1)) - Math.asin(Ye(v / g, -1, 1))
          )
        )),
        (c = Math.max(o, Math.min(u, c)))),
      (this.labelRotation = c));
  }
  afterCalculateLabelRotation() {
    jt(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    jt(this.options.beforeFit, [this]);
  }
  fit() {
    const e = { width: 0, height: 0 },
      {
        chart: a,
        options: { ticks: s, title: o, grid: u },
      } = this,
      c = this._isVisible(),
      h = this.isHorizontal();
    if (c) {
      const d = Mp(o, a.options.font);
      if (
        (h
          ? ((e.width = this.maxWidth), (e.height = Ls(u) + d))
          : ((e.height = this.maxHeight), (e.width = Ls(u) + d)),
        s.display && this.ticks.length)
      ) {
        const {
            first: g,
            last: p,
            widest: b,
            highest: v,
          } = this._getLabelSizes(),
          S = s.padding * 2,
          w = Ai(this.labelRotation),
          E = Math.cos(w),
          M = Math.sin(w);
        if (h) {
          const D = s.mirror ? 0 : M * b.width + E * v.height;
          e.height = Math.min(this.maxHeight, e.height + D + S);
        } else {
          const D = s.mirror ? 0 : E * b.width + M * v.height;
          e.width = Math.min(this.maxWidth, e.width + D + S);
        }
        this._calculatePadding(g, p, M, E);
      }
    }
    (this._handleMargins(),
      h
        ? ((this.width = this._length =
            a.width - this._margins.left - this._margins.right),
          (this.height = e.height))
        : ((this.width = e.width),
          (this.height = this._length =
            a.height - this._margins.top - this._margins.bottom)));
  }
  _calculatePadding(e, a, s, o) {
    const {
        ticks: { align: u, padding: c },
        position: h,
      } = this.options,
      d = this.labelRotation !== 0,
      g = h !== 'top' && this.axis === 'x';
    if (this.isHorizontal()) {
      const p = this.getPixelForTick(0) - this.left,
        b = this.right - this.getPixelForTick(this.ticks.length - 1);
      let v = 0,
        S = 0;
      (d
        ? g
          ? ((v = o * e.width), (S = s * a.height))
          : ((v = s * e.height), (S = o * a.width))
        : u === 'start'
          ? (S = a.width)
          : u === 'end'
            ? (v = e.width)
            : u !== 'inner' && ((v = e.width / 2), (S = a.width / 2)),
        (this.paddingLeft = Math.max(
          ((v - p + c) * this.width) / (this.width - p),
          0
        )),
        (this.paddingRight = Math.max(
          ((S - b + c) * this.width) / (this.width - b),
          0
        )));
    } else {
      let p = a.height / 2,
        b = e.height / 2;
      (u === 'start'
        ? ((p = 0), (b = e.height))
        : u === 'end' && ((p = a.height), (b = 0)),
        (this.paddingTop = p + c),
        (this.paddingBottom = b + c));
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom
      )));
  }
  afterFit() {
    jt(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: e, position: a } = this.options;
    return a === 'top' || a === 'bottom' || e === 'x';
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(e) {
    (this.beforeTickToLabelConversion(), this.generateTickLabels(e));
    let a, s;
    for (a = 0, s = e.length; a < s; a++)
      Ct(e[a].label) && (e.splice(a, 1), s--, a--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let e = this._labelSizes;
    if (!e) {
      const a = this.options.ticks.sampleSize;
      let s = this.ticks;
      (a < s.length && (s = wp(s, a)),
        (this._labelSizes = e =
          this._computeLabelSizes(
            s,
            s.length,
            this.options.ticks.maxTicksLimit
          )));
    }
    return e;
  }
  _computeLabelSizes(e, a, s) {
    const { ctx: o, _longestTextCache: u } = this,
      c = [],
      h = [],
      d = Math.floor(a / Sp(a, s));
    let g = 0,
      p = 0,
      b,
      v,
      S,
      w,
      E,
      M,
      D,
      k,
      Y,
      G,
      B;
    for (b = 0; b < a; b += d) {
      if (
        ((w = e[b].label),
        (E = this._resolveTickFontOptions(b)),
        (o.font = M = E.string),
        (D = u[M] = u[M] || { data: {}, gc: [] }),
        (k = E.lineHeight),
        (Y = G = 0),
        !Ct(w) && !Ft(w))
      )
        ((Y = tp(o, D.data, D.gc, Y, w)), (G = k));
      else if (Ft(w))
        for (v = 0, S = w.length; v < S; ++v)
          ((B = w[v]),
            !Ct(B) && !Ft(B) && ((Y = tp(o, D.data, D.gc, Y, B)), (G += k)));
      (c.push(Y), h.push(G), (g = Math.max(Y, g)), (p = Math.max(G, p)));
    }
    F2(u, a);
    const F = c.indexOf(g),
      K = h.indexOf(p),
      Q = (J) => ({ width: c[J] || 0, height: h[J] || 0 });
    return {
      first: Q(0),
      last: Q(a - 1),
      widest: Q(F),
      highest: Q(K),
      widths: c,
      heights: h,
    };
  }
  getLabelForValue(e) {
    return e;
  }
  getPixelForValue(e, a) {
    return NaN;
  }
  getValueForPixel(e) {}
  getPixelForTick(e) {
    const a = this.ticks;
    return e < 0 || e > a.length - 1 ? null : this.getPixelForValue(a[e].value);
  }
  getPixelForDecimal(e) {
    this._reversePixels && (e = 1 - e);
    const a = this._startPixel + e * this._length;
    return Y_(this._alignToPixels ? Mi(this.chart, a, 0) : a);
  }
  getDecimalForPixel(e) {
    const a = (e - this._startPixel) / this._length;
    return this._reversePixels ? 1 - a : a;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: e, max: a } = this;
    return e < 0 && a < 0 ? a : e > 0 && a > 0 ? e : 0;
  }
  getContext(e) {
    const a = this.ticks || [];
    if (e >= 0 && e < a.length) {
      const s = a[e];
      return s.$context || (s.$context = Z2(this.getContext(), e, s));
    }
    return this.$context || (this.$context = Q2(this.chart.getContext(), this));
  }
  _tickSize() {
    const e = this.options.ticks,
      a = Ai(this.labelRotation),
      s = Math.abs(Math.cos(a)),
      o = Math.abs(Math.sin(a)),
      u = this._getLabelSizes(),
      c = e.autoSkipPadding || 0,
      h = u ? u.widest.width + c : 0,
      d = u ? u.highest.height + c : 0;
    return this.isHorizontal()
      ? d * s > h * o
        ? h / s
        : d / o
      : d * o < h * s
        ? d / s
        : h / o;
  }
  _isVisible() {
    const e = this.options.display;
    return e !== 'auto' ? !!e : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(e) {
    const a = this.axis,
      s = this.chart,
      o = this.options,
      { grid: u, position: c, border: h } = o,
      d = u.offset,
      g = this.isHorizontal(),
      b = this.ticks.length + (d ? 1 : 0),
      v = Ls(u),
      S = [],
      w = h.setContext(this.getContext()),
      E = w.display ? w.width : 0,
      M = E / 2,
      D = function (H) {
        return Mi(s, H, E);
      };
    let k, Y, G, B, F, K, Q, J, rt, st, ot, Lt;
    if (c === 'top')
      ((k = D(this.bottom)),
        (K = this.bottom - v),
        (J = k - M),
        (st = D(e.top) + M),
        (Lt = e.bottom));
    else if (c === 'bottom')
      ((k = D(this.top)),
        (st = e.top),
        (Lt = D(e.bottom) - M),
        (K = k + M),
        (J = this.top + v));
    else if (c === 'left')
      ((k = D(this.right)),
        (F = this.right - v),
        (Q = k - M),
        (rt = D(e.left) + M),
        (ot = e.right));
    else if (c === 'right')
      ((k = D(this.left)),
        (rt = e.left),
        (ot = D(e.right) - M),
        (F = k + M),
        (Q = this.left + v));
    else if (a === 'x') {
      if (c === 'center') k = D((e.top + e.bottom) / 2 + 0.5);
      else if (bt(c)) {
        const H = Object.keys(c)[0],
          P = c[H];
        k = D(this.chart.scales[H].getPixelForValue(P));
      }
      ((st = e.top), (Lt = e.bottom), (K = k + M), (J = K + v));
    } else if (a === 'y') {
      if (c === 'center') k = D((e.left + e.right) / 2);
      else if (bt(c)) {
        const H = Object.keys(c)[0],
          P = c[H];
        k = D(this.chart.scales[H].getPixelForValue(P));
      }
      ((F = k - M), (Q = F - v), (rt = e.left), (ot = e.right));
    }
    const Qt = pt(o.ticks.maxTicksLimit, b),
      ft = Math.max(1, Math.ceil(b / Qt));
    for (Y = 0; Y < b; Y += ft) {
      const H = this.getContext(Y),
        P = u.setContext(H),
        et = h.setContext(H),
        xt = P.lineWidth,
        O = P.color,
        X = et.dash || [],
        W = et.dashOffset,
        Z = P.tickWidth,
        I = P.tickColor,
        ht = P.tickBorderDash || [],
        nt = P.tickBorderDashOffset;
      ((G = P2(this, Y, d)),
        G !== void 0 &&
          ((B = Mi(s, G, xt)),
          g ? (F = Q = rt = ot = B) : (K = J = st = Lt = B),
          S.push({
            tx1: F,
            ty1: K,
            tx2: Q,
            ty2: J,
            x1: rt,
            y1: st,
            x2: ot,
            y2: Lt,
            width: xt,
            color: O,
            borderDash: X,
            borderDashOffset: W,
            tickWidth: Z,
            tickColor: I,
            tickBorderDash: ht,
            tickBorderDashOffset: nt,
          })));
    }
    return ((this._ticksLength = b), (this._borderValue = k), S);
  }
  _computeLabelItems(e) {
    const a = this.axis,
      s = this.options,
      { position: o, ticks: u } = s,
      c = this.isHorizontal(),
      h = this.ticks,
      { align: d, crossAlign: g, padding: p, mirror: b } = u,
      v = Ls(s.grid),
      S = v + p,
      w = b ? -p : S,
      E = -Ai(this.labelRotation),
      M = [];
    let D,
      k,
      Y,
      G,
      B,
      F,
      K,
      Q,
      J,
      rt,
      st,
      ot,
      Lt = 'middle';
    if (o === 'top')
      ((F = this.bottom - w), (K = this._getXAxisLabelAlignment()));
    else if (o === 'bottom')
      ((F = this.top + w), (K = this._getXAxisLabelAlignment()));
    else if (o === 'left') {
      const ft = this._getYAxisLabelAlignment(v);
      ((K = ft.textAlign), (B = ft.x));
    } else if (o === 'right') {
      const ft = this._getYAxisLabelAlignment(v);
      ((K = ft.textAlign), (B = ft.x));
    } else if (a === 'x') {
      if (o === 'center') F = (e.top + e.bottom) / 2 + S;
      else if (bt(o)) {
        const ft = Object.keys(o)[0],
          H = o[ft];
        F = this.chart.scales[ft].getPixelForValue(H) + S;
      }
      K = this._getXAxisLabelAlignment();
    } else if (a === 'y') {
      if (o === 'center') B = (e.left + e.right) / 2 - S;
      else if (bt(o)) {
        const ft = Object.keys(o)[0],
          H = o[ft];
        B = this.chart.scales[ft].getPixelForValue(H);
      }
      K = this._getYAxisLabelAlignment(v).textAlign;
    }
    a === 'y' &&
      (d === 'start' ? (Lt = 'top') : d === 'end' && (Lt = 'bottom'));
    const Qt = this._getLabelSizes();
    for (D = 0, k = h.length; D < k; ++D) {
      ((Y = h[D]), (G = Y.label));
      const ft = u.setContext(this.getContext(D));
      ((Q = this.getPixelForTick(D) + u.labelOffset),
        (J = this._resolveTickFontOptions(D)),
        (rt = J.lineHeight),
        (st = Ft(G) ? G.length : 1));
      const H = st / 2,
        P = ft.color,
        et = ft.textStrokeColor,
        xt = ft.textStrokeWidth;
      let O = K;
      c
        ? ((B = Q),
          K === 'inner' &&
            (D === k - 1
              ? (O = this.options.reverse ? 'left' : 'right')
              : D === 0
                ? (O = this.options.reverse ? 'right' : 'left')
                : (O = 'center')),
          o === 'top'
            ? g === 'near' || E !== 0
              ? (ot = -st * rt + rt / 2)
              : g === 'center'
                ? (ot = -Qt.highest.height / 2 - H * rt + rt)
                : (ot = -Qt.highest.height + rt / 2)
            : g === 'near' || E !== 0
              ? (ot = rt / 2)
              : g === 'center'
                ? (ot = Qt.highest.height / 2 - H * rt)
                : (ot = Qt.highest.height - st * rt),
          b && (ot *= -1),
          E !== 0 && !ft.showLabelBackdrop && (B += (rt / 2) * Math.sin(E)))
        : ((F = Q), (ot = ((1 - st) * rt) / 2));
      let X;
      if (ft.showLabelBackdrop) {
        const W = Ve(ft.backdropPadding),
          Z = Qt.heights[D],
          I = Qt.widths[D];
        let ht = ot - W.top,
          nt = 0 - W.left;
        switch (Lt) {
          case 'middle':
            ht -= Z / 2;
            break;
          case 'bottom':
            ht -= Z;
            break;
        }
        switch (K) {
          case 'center':
            nt -= I / 2;
            break;
          case 'right':
            nt -= I;
            break;
          case 'inner':
            D === k - 1 ? (nt -= I) : D > 0 && (nt -= I / 2);
            break;
        }
        X = {
          left: nt,
          top: ht,
          width: I + W.width,
          height: Z + W.height,
          color: ft.backdropColor,
        };
      }
      M.push({
        label: G,
        font: J,
        textOffset: ot,
        options: {
          rotation: E,
          color: P,
          strokeColor: et,
          strokeWidth: xt,
          textAlign: O,
          textBaseline: Lt,
          translation: [B, F],
          backdrop: X,
        },
      });
    }
    return M;
  }
  _getXAxisLabelAlignment() {
    const { position: e, ticks: a } = this.options;
    if (-Ai(this.labelRotation)) return e === 'top' ? 'left' : 'right';
    let o = 'center';
    return (
      a.align === 'start'
        ? (o = 'left')
        : a.align === 'end'
          ? (o = 'right')
          : a.align === 'inner' && (o = 'inner'),
      o
    );
  }
  _getYAxisLabelAlignment(e) {
    const {
        position: a,
        ticks: { crossAlign: s, mirror: o, padding: u },
      } = this.options,
      c = this._getLabelSizes(),
      h = e + u,
      d = c.widest.width;
    let g, p;
    return (
      a === 'left'
        ? o
          ? ((p = this.right + u),
            s === 'near'
              ? (g = 'left')
              : s === 'center'
                ? ((g = 'center'), (p += d / 2))
                : ((g = 'right'), (p += d)))
          : ((p = this.right - h),
            s === 'near'
              ? (g = 'right')
              : s === 'center'
                ? ((g = 'center'), (p -= d / 2))
                : ((g = 'left'), (p = this.left)))
        : a === 'right'
          ? o
            ? ((p = this.left + u),
              s === 'near'
                ? (g = 'right')
                : s === 'center'
                  ? ((g = 'center'), (p -= d / 2))
                  : ((g = 'left'), (p -= d)))
            : ((p = this.left + h),
              s === 'near'
                ? (g = 'left')
                : s === 'center'
                  ? ((g = 'center'), (p += d / 2))
                  : ((g = 'right'), (p = this.right)))
          : (g = 'right'),
      { textAlign: g, x: p }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const e = this.chart,
      a = this.options.position;
    if (a === 'left' || a === 'right')
      return { top: 0, left: this.left, bottom: e.height, right: this.right };
    if (a === 'top' || a === 'bottom')
      return { top: this.top, left: 0, bottom: this.bottom, right: e.width };
  }
  drawBackground() {
    const {
      ctx: e,
      options: { backgroundColor: a },
      left: s,
      top: o,
      width: u,
      height: c,
    } = this;
    a && (e.save(), (e.fillStyle = a), e.fillRect(s, o, u, c), e.restore());
  }
  getLineWidthForValue(e) {
    const a = this.options.grid;
    if (!this._isVisible() || !a.display) return 0;
    const o = this.ticks.findIndex((u) => u.value === e);
    return o >= 0 ? a.setContext(this.getContext(o)).lineWidth : 0;
  }
  drawGrid(e) {
    const a = this.options.grid,
      s = this.ctx,
      o =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(e));
    let u, c;
    const h = (d, g, p) => {
      !p.width ||
        !p.color ||
        (s.save(),
        (s.lineWidth = p.width),
        (s.strokeStyle = p.color),
        s.setLineDash(p.borderDash || []),
        (s.lineDashOffset = p.borderDashOffset),
        s.beginPath(),
        s.moveTo(d.x, d.y),
        s.lineTo(g.x, g.y),
        s.stroke(),
        s.restore());
    };
    if (a.display)
      for (u = 0, c = o.length; u < c; ++u) {
        const d = o[u];
        (a.drawOnChartArea && h({ x: d.x1, y: d.y1 }, { x: d.x2, y: d.y2 }, d),
          a.drawTicks &&
            h(
              { x: d.tx1, y: d.ty1 },
              { x: d.tx2, y: d.ty2 },
              {
                color: d.tickColor,
                width: d.tickWidth,
                borderDash: d.tickBorderDash,
                borderDashOffset: d.tickBorderDashOffset,
              }
            ));
      }
  }
  drawBorder() {
    const {
        chart: e,
        ctx: a,
        options: { border: s, grid: o },
      } = this,
      u = s.setContext(this.getContext()),
      c = s.display ? u.width : 0;
    if (!c) return;
    const h = o.setContext(this.getContext(0)).lineWidth,
      d = this._borderValue;
    let g, p, b, v;
    (this.isHorizontal()
      ? ((g = Mi(e, this.left, c) - c / 2),
        (p = Mi(e, this.right, h) + h / 2),
        (b = v = d))
      : ((b = Mi(e, this.top, c) - c / 2),
        (v = Mi(e, this.bottom, h) + h / 2),
        (g = p = d)),
      a.save(),
      (a.lineWidth = u.width),
      (a.strokeStyle = u.color),
      a.beginPath(),
      a.moveTo(g, b),
      a.lineTo(p, v),
      a.stroke(),
      a.restore());
  }
  drawLabels(e) {
    if (!this.options.ticks.display) return;
    const s = this.ctx,
      o = this._computeLabelArea();
    o && er(s, o);
    const u = this.getLabelItems(e);
    for (const c of u) {
      const h = c.options,
        d = c.font,
        g = c.label,
        p = c.textOffset;
      Is(s, g, 0, p, d, h);
    }
    o && nr(s);
  }
  drawTitle() {
    const {
      ctx: e,
      options: { position: a, title: s, reverse: o },
    } = this;
    if (!s.display) return;
    const u = re(s.font),
      c = Ve(s.padding),
      h = s.align;
    let d = u.lineHeight / 2;
    a === 'bottom' || a === 'center' || bt(a)
      ? ((d += c.bottom),
        Ft(s.text) && (d += u.lineHeight * (s.text.length - 1)))
      : (d += c.top);
    const {
      titleX: g,
      titleY: p,
      maxWidth: b,
      rotation: v,
    } = W2(this, d, a, h);
    Is(e, s.text, 0, 0, u, {
      color: s.color,
      maxWidth: b,
      rotation: v,
      textAlign: K2(h, a, o),
      textBaseline: 'middle',
      translation: [g, p],
    });
  }
  draw(e) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(e),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(e));
  }
  _layers() {
    const e = this.options,
      a = (e.ticks && e.ticks.z) || 0,
      s = pt(e.grid && e.grid.z, -1),
      o = pt(e.border && e.border.z, 0);
    return !this._isVisible() || this.draw !== Ra.prototype.draw
      ? [
          {
            z: a,
            draw: (u) => {
              this.draw(u);
            },
          },
        ]
      : [
          {
            z: s,
            draw: (u) => {
              (this.drawBackground(), this.drawGrid(u), this.drawTitle());
            },
          },
          {
            z: o,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: a,
            draw: (u) => {
              this.drawLabels(u);
            },
          },
        ];
  }
  getMatchingVisibleMetas(e) {
    const a = this.chart.getSortedVisibleDatasetMetas(),
      s = this.axis + 'AxisID',
      o = [];
    let u, c;
    for (u = 0, c = a.length; u < c; ++u) {
      const h = a[u];
      h[s] === this.id && (!e || h.type === e) && o.push(h);
    }
    return o;
  }
  _resolveTickFontOptions(e) {
    const a = this.options.ticks.setContext(this.getContext(e));
    return re(a.font);
  }
  _maxDigits() {
    const e = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / e;
  }
}
class ko {
  constructor(e, a, s) {
    ((this.type = e),
      (this.scope = a),
      (this.override = s),
      (this.items = Object.create(null)));
  }
  isForType(e) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      e.prototype
    );
  }
  register(e) {
    const a = Object.getPrototypeOf(e);
    let s;
    I2(a) && (s = this.register(a));
    const o = this.items,
      u = e.id,
      c = this.scope + '.' + u;
    if (!u) throw new Error('class does not have id: ' + e);
    return (
      u in o ||
        ((o[u] = e),
        $2(e, c, s),
        this.override && qt.override(e.id, e.overrides)),
      c
    );
  }
  get(e) {
    return this.items[e];
  }
  unregister(e) {
    const a = this.items,
      s = e.id,
      o = this.scope;
    (s in a && delete a[s],
      o && s in qt[o] && (delete qt[o][s], this.override && delete Ri[s]));
  }
}
function $2(i, e, a) {
  const s = Ws(Object.create(null), [
    a ? qt.get(a) : {},
    qt.get(e),
    i.defaults,
  ]);
  (qt.set(e, s),
    i.defaultRoutes && J2(e, i.defaultRoutes),
    i.descriptors && qt.describe(e, i.descriptors));
}
function J2(i, e) {
  Object.keys(e).forEach((a) => {
    const s = a.split('.'),
      o = s.pop(),
      u = [i].concat(s).join('.'),
      c = e[a].split('.'),
      h = c.pop(),
      d = c.join('.');
    qt.route(u, o, d, h);
  });
}
function I2(i) {
  return 'id' in i && 'defaults' in i;
}
class tw {
  constructor() {
    ((this.controllers = new ko(W0, 'datasets', !0)),
      (this.elements = new ko(Ni, 'elements')),
      (this.plugins = new ko(Object, 'plugins')),
      (this.scales = new ko(Ra, 'scales')),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]));
  }
  add(...e) {
    this._each('register', e);
  }
  remove(...e) {
    this._each('unregister', e);
  }
  addControllers(...e) {
    this._each('register', e, this.controllers);
  }
  addElements(...e) {
    this._each('register', e, this.elements);
  }
  addPlugins(...e) {
    this._each('register', e, this.plugins);
  }
  addScales(...e) {
    this._each('register', e, this.scales);
  }
  getController(e) {
    return this._get(e, this.controllers, 'controller');
  }
  getElement(e) {
    return this._get(e, this.elements, 'element');
  }
  getPlugin(e) {
    return this._get(e, this.plugins, 'plugin');
  }
  getScale(e) {
    return this._get(e, this.scales, 'scale');
  }
  removeControllers(...e) {
    this._each('unregister', e, this.controllers);
  }
  removeElements(...e) {
    this._each('unregister', e, this.elements);
  }
  removePlugins(...e) {
    this._each('unregister', e, this.plugins);
  }
  removeScales(...e) {
    this._each('unregister', e, this.scales);
  }
  _each(e, a, s) {
    [...a].forEach((o) => {
      const u = s || this._getRegistryForType(o);
      s || u.isForType(o) || (u === this.plugins && o.id)
        ? this._exec(e, u, o)
        : Mt(o, (c) => {
            const h = s || this._getRegistryForType(c);
            this._exec(e, h, c);
          });
    });
  }
  _exec(e, a, s) {
    const o = yf(e);
    (jt(s['before' + o], [], s), a[e](s), jt(s['after' + o], [], s));
  }
  _getRegistryForType(e) {
    for (let a = 0; a < this._typedRegistries.length; a++) {
      const s = this._typedRegistries[a];
      if (s.isForType(e)) return s;
    }
    return this.plugins;
  }
  _get(e, a, s) {
    const o = a.get(e);
    if (o === void 0)
      throw new Error('"' + e + '" is not a registered ' + s + '.');
    return o;
  }
}
var ln = new tw();
class ew {
  constructor() {
    this._init = [];
  }
  notify(e, a, s, o) {
    a === 'beforeInit' &&
      ((this._init = this._createDescriptors(e, !0)),
      this._notify(this._init, e, 'install'));
    const u = o ? this._descriptors(e).filter(o) : this._descriptors(e),
      c = this._notify(u, e, a, s);
    return (
      a === 'afterDestroy' &&
        (this._notify(u, e, 'stop'), this._notify(this._init, e, 'uninstall')),
      c
    );
  }
  _notify(e, a, s, o) {
    o = o || {};
    for (const u of e) {
      const c = u.plugin,
        h = c[s],
        d = [a, o, u.options];
      if (jt(h, d, c) === !1 && o.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    Ct(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(e) {
    if (this._cache) return this._cache;
    const a = (this._cache = this._createDescriptors(e));
    return (this._notifyStateChanges(e), a);
  }
  _createDescriptors(e, a) {
    const s = e && e.config,
      o = pt(s.options && s.options.plugins, {}),
      u = nw(s);
    return o === !1 && !a ? [] : aw(e, u, o, a);
  }
  _notifyStateChanges(e) {
    const a = this._oldCache || [],
      s = this._cache,
      o = (u, c) =>
        u.filter((h) => !c.some((d) => h.plugin.id === d.plugin.id));
    (this._notify(o(a, s), e, 'stop'), this._notify(o(s, a), e, 'start'));
  }
}
function nw(i) {
  const e = {},
    a = [],
    s = Object.keys(ln.plugins.items);
  for (let u = 0; u < s.length; u++) a.push(ln.getPlugin(s[u]));
  const o = i.plugins || [];
  for (let u = 0; u < o.length; u++) {
    const c = o[u];
    a.indexOf(c) === -1 && (a.push(c), (e[c.id] = !0));
  }
  return { plugins: a, localIds: e };
}
function iw(i, e) {
  return !e && i === !1 ? null : i === !0 ? {} : i;
}
function aw(i, { plugins: e, localIds: a }, s, o) {
  const u = [],
    c = i.getContext();
  for (const h of e) {
    const d = h.id,
      g = iw(s[d], o);
    g !== null &&
      u.push({
        plugin: h,
        options: sw(i.config, { plugin: h, local: a[d] }, g, c),
      });
  }
  return u;
}
function sw(i, { plugin: e, local: a }, s, o) {
  const u = i.pluginScopeKeys(e),
    c = i.getOptionScopes(s, u);
  return (
    a && e.defaults && c.push(e.defaults),
    i.createResolver(c, o, [''], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function Jc(i, e) {
  const a = qt.datasets[i] || {};
  return (
    ((e.datasets || {})[i] || {}).indexAxis || e.indexAxis || a.indexAxis || 'x'
  );
}
function lw(i, e) {
  let a = i;
  return (
    i === '_index_' ? (a = e) : i === '_value_' && (a = e === 'x' ? 'y' : 'x'),
    a
  );
}
function ow(i, e) {
  return i === e ? '_index_' : '_value_';
}
function Ep(i) {
  if (i === 'x' || i === 'y' || i === 'r') return i;
}
function rw(i) {
  if (i === 'top' || i === 'bottom') return 'x';
  if (i === 'left' || i === 'right') return 'y';
}
function Ic(i, ...e) {
  if (Ep(i)) return i;
  for (const a of e) {
    const s =
      a.axis || rw(a.position) || (i.length > 1 && Ep(i[0].toLowerCase()));
    if (s) return s;
  }
  throw new Error(
    `Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`
  );
}
function Tp(i, e, a) {
  if (a[e + 'AxisID'] === i) return { axis: e };
}
function uw(i, e) {
  if (e.data && e.data.datasets) {
    const a = e.data.datasets.filter((s) => s.xAxisID === i || s.yAxisID === i);
    if (a.length) return Tp(i, 'x', a[0]) || Tp(i, 'y', a[0]);
  }
  return {};
}
function cw(i, e) {
  const a = Ri[i.type] || { scales: {} },
    s = e.scales || {},
    o = Jc(i.type, e),
    u = Object.create(null);
  return (
    Object.keys(s).forEach((c) => {
      const h = s[c];
      if (!bt(h))
        return console.error(`Invalid scale configuration for scale: ${c}`);
      if (h._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${c}`
        );
      const d = Ic(c, h, uw(c, i), qt.scales[h.type]),
        g = ow(d, o),
        p = a.scales || {};
      u[c] = qs(Object.create(null), [{ axis: d }, h, p[d], p[g]]);
    }),
    i.data.datasets.forEach((c) => {
      const h = c.type || i.type,
        d = c.indexAxis || Jc(h, e),
        p = (Ri[h] || {}).scales || {};
      Object.keys(p).forEach((b) => {
        const v = lw(b, d),
          S = c[v + 'AxisID'] || v;
        ((u[S] = u[S] || Object.create(null)),
          qs(u[S], [{ axis: v }, s[S], p[b]]));
      });
    }),
    Object.keys(u).forEach((c) => {
      const h = u[c];
      qs(h, [qt.scales[h.type], qt.scale]);
    }),
    u
  );
}
function ny(i) {
  const e = i.options || (i.options = {});
  ((e.plugins = pt(e.plugins, {})), (e.scales = cw(i, e)));
}
function iy(i) {
  return (
    (i = i || {}),
    (i.datasets = i.datasets || []),
    (i.labels = i.labels || []),
    i
  );
}
function fw(i) {
  return ((i = i || {}), (i.data = iy(i.data)), ny(i), i);
}
const Op = new Map(),
  ay = new Set();
function Lo(i, e) {
  let a = Op.get(i);
  return (a || ((a = e()), Op.set(i, a), ay.add(a)), a);
}
const Hs = (i, e, a) => {
  const s = Fo(e, a);
  s !== void 0 && i.add(s);
};
class hw {
  constructor(e) {
    ((this._config = fw(e)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map()));
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(e) {
    this._config.type = e;
  }
  get data() {
    return this._config.data;
  }
  set data(e) {
    this._config.data = iy(e);
  }
  get options() {
    return this._config.options;
  }
  set options(e) {
    this._config.options = e;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const e = this._config;
    (this.clearCache(), ny(e));
  }
  clearCache() {
    (this._scopeCache.clear(), this._resolverCache.clear());
  }
  datasetScopeKeys(e) {
    return Lo(e, () => [[`datasets.${e}`, '']]);
  }
  datasetAnimationScopeKeys(e, a) {
    return Lo(`${e}.transition.${a}`, () => [
      [`datasets.${e}.transitions.${a}`, `transitions.${a}`],
      [`datasets.${e}`, ''],
    ]);
  }
  datasetElementScopeKeys(e, a) {
    return Lo(`${e}-${a}`, () => [
      [`datasets.${e}.elements.${a}`, `datasets.${e}`, `elements.${a}`, ''],
    ]);
  }
  pluginScopeKeys(e) {
    const a = e.id,
      s = this.type;
    return Lo(`${s}-plugin-${a}`, () => [
      [`plugins.${a}`, ...(e.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(e, a) {
    const s = this._scopeCache;
    let o = s.get(e);
    return ((!o || a) && ((o = new Map()), s.set(e, o)), o);
  }
  getOptionScopes(e, a, s) {
    const { options: o, type: u } = this,
      c = this._cachedScopes(e, s),
      h = c.get(a);
    if (h) return h;
    const d = new Set();
    a.forEach((p) => {
      (e && (d.add(e), p.forEach((b) => Hs(d, e, b))),
        p.forEach((b) => Hs(d, o, b)),
        p.forEach((b) => Hs(d, Ri[u] || {}, b)),
        p.forEach((b) => Hs(d, qt, b)),
        p.forEach((b) => Hs(d, Kc, b)));
    });
    const g = Array.from(d);
    return (
      g.length === 0 && g.push(Object.create(null)),
      ay.has(a) && c.set(a, g),
      g
    );
  }
  chartOptionScopes() {
    const { options: e, type: a } = this;
    return [e, Ri[a] || {}, qt.datasets[a] || {}, { type: a }, qt, Kc];
  }
  resolveNamedOptions(e, a, s, o = ['']) {
    const u = { $shared: !0 },
      { resolver: c, subPrefixes: h } = Ap(this._resolverCache, e, o);
    let d = c;
    if (mw(c, a)) {
      ((u.$shared = !1), (s = ai(s) ? s() : s));
      const g = this.createResolver(e, s, h);
      d = Ta(c, s, g);
    }
    for (const g of a) u[g] = d[g];
    return u;
  }
  createResolver(e, a, s = [''], o) {
    const { resolver: u } = Ap(this._resolverCache, e, s);
    return bt(a) ? Ta(u, a, void 0, o) : u;
  }
}
function Ap(i, e, a) {
  let s = i.get(e);
  s || ((s = new Map()), i.set(e, s));
  const o = a.join();
  let u = s.get(o);
  return (
    u ||
      ((u = {
        resolver: _f(e, a),
        subPrefixes: a.filter((h) => !h.toLowerCase().includes('hover')),
      }),
      s.set(o, u)),
    u
  );
}
const dw = (i) => bt(i) && Object.getOwnPropertyNames(i).some((e) => ai(i[e]));
function mw(i, e) {
  const { isScriptable: a, isIndexable: s } = H0(i);
  for (const o of e) {
    const u = a(o),
      c = s(o),
      h = (c || u) && i[o];
    if ((u && (ai(h) || dw(h))) || (c && Ft(h))) return !0;
  }
  return !1;
}
var gw = '4.5.0';
const pw = ['top', 'bottom', 'left', 'right', 'chartArea'];
function Dp(i, e) {
  return i === 'top' || i === 'bottom' || (pw.indexOf(i) === -1 && e === 'x');
}
function Cp(i, e) {
  return function (a, s) {
    return a[i] === s[i] ? a[e] - s[e] : a[i] - s[i];
  };
}
function jp(i) {
  const e = i.chart,
    a = e.options.animation;
  (e.notifyPlugins('afterRender'), jt(a && a.onComplete, [i], e));
}
function yw(i) {
  const e = i.chart,
    a = e.options.animation;
  jt(a && a.onProgress, [i], e);
}
function sy(i) {
  return (
    Mf() && typeof i == 'string'
      ? (i = document.getElementById(i))
      : i && i.length && (i = i[0]),
    i && i.canvas && (i = i.canvas),
    i
  );
}
const Vo = {},
  Rp = (i) => {
    const e = sy(i);
    return Object.values(Vo)
      .filter((a) => a.canvas === e)
      .pop();
  };
function bw(i, e, a) {
  const s = Object.keys(i);
  for (const o of s) {
    const u = +o;
    if (u >= e) {
      const c = i[o];
      (delete i[o], (a > 0 || u > e) && (i[u + a] = c));
    }
  }
}
function xw(i, e, a, s) {
  return !a || i.type === 'mouseout' ? null : s ? e : i;
}
let sr = class {
  static defaults = qt;
  static instances = Vo;
  static overrides = Ri;
  static registry = ln;
  static version = gw;
  static getChart = Rp;
  static register(...e) {
    (ln.add(...e), zp());
  }
  static unregister(...e) {
    (ln.remove(...e), zp());
  }
  constructor(e, a) {
    const s = (this.config = new hw(a)),
      o = sy(e),
      u = Rp(o);
    if (u)
      throw new Error(
        "Canvas is already in use. Chart with ID '" +
          u.id +
          "' must be destroyed before the canvas with ID '" +
          u.canvas.id +
          "' can be reused."
      );
    const c = s.createResolver(s.chartOptionScopes(), this.getContext());
    ((this.platform = new (s.platform || H2(o))()),
      this.platform.updateConfig(s));
    const h = this.platform.acquireContext(o, c.aspectRatio),
      d = h && h.canvas,
      g = d && d.height,
      p = d && d.width;
    if (
      ((this.id = M_()),
      (this.ctx = h),
      (this.canvas = d),
      (this.width = p),
      (this.height = g),
      (this._options = c),
      (this._aspectRatio = this.aspectRatio),
      (this._layers = []),
      (this._metasets = []),
      (this._stacks = void 0),
      (this.boxes = []),
      (this.currentDevicePixelRatio = void 0),
      (this.chartArea = void 0),
      (this._active = []),
      (this._lastEvent = void 0),
      (this._listeners = {}),
      (this._responsiveListeners = void 0),
      (this._sortedMetasets = []),
      (this.scales = {}),
      (this._plugins = new ew()),
      (this.$proxies = {}),
      (this._hiddenIndices = {}),
      (this.attached = !1),
      (this._animationsDisabled = void 0),
      (this.$context = void 0),
      (this._doResize = P_((b) => this.update(b), c.resizeDelay || 0)),
      (this._dataChanges = []),
      (Vo[this.id] = this),
      !h || !d)
    ) {
      console.error(
        "Failed to create chart: can't acquire context from the given item"
      );
      return;
    }
    (En.listen(this, 'complete', jp),
      En.listen(this, 'progress', yw),
      this._initialize(),
      this.attached && this.update());
  }
  get aspectRatio() {
    const {
      options: { aspectRatio: e, maintainAspectRatio: a },
      width: s,
      height: o,
      _aspectRatio: u,
    } = this;
    return Ct(e) ? (a && u ? u : o ? s / o : null) : e;
  }
  get data() {
    return this.config.data;
  }
  set data(e) {
    this.config.data = e;
  }
  get options() {
    return this._options;
  }
  set options(e) {
    this.config.options = e;
  }
  get registry() {
    return ln;
  }
  _initialize() {
    return (
      this.notifyPlugins('beforeInit'),
      this.options.responsive
        ? this.resize()
        : ap(this, this.options.devicePixelRatio),
      this.bindEvents(),
      this.notifyPlugins('afterInit'),
      this
    );
  }
  clear() {
    return (ep(this.canvas, this.ctx), this);
  }
  stop() {
    return (En.stop(this), this);
  }
  resize(e, a) {
    En.running(this)
      ? (this._resizeBeforeDraw = { width: e, height: a })
      : this._resize(e, a);
  }
  _resize(e, a) {
    const s = this.options,
      o = this.canvas,
      u = s.maintainAspectRatio && this.aspectRatio,
      c = this.platform.getMaximumSize(o, e, a, u),
      h = s.devicePixelRatio || this.platform.getDevicePixelRatio(),
      d = this.width ? 'resize' : 'attach';
    ((this.width = c.width),
      (this.height = c.height),
      (this._aspectRatio = this.aspectRatio),
      ap(this, h, !0) &&
        (this.notifyPlugins('resize', { size: c }),
        jt(s.onResize, [this, c], this),
        this.attached && this._doResize(d) && this.render()));
  }
  ensureScalesHaveIDs() {
    const a = this.options.scales || {};
    Mt(a, (s, o) => {
      s.id = o;
    });
  }
  buildOrUpdateScales() {
    const e = this.options,
      a = e.scales,
      s = this.scales,
      o = Object.keys(s).reduce((c, h) => ((c[h] = !1), c), {});
    let u = [];
    (a &&
      (u = u.concat(
        Object.keys(a).map((c) => {
          const h = a[c],
            d = Ic(c, h),
            g = d === 'r',
            p = d === 'x';
          return {
            options: h,
            dposition: g ? 'chartArea' : p ? 'bottom' : 'left',
            dtype: g ? 'radialLinear' : p ? 'category' : 'linear',
          };
        })
      )),
      Mt(u, (c) => {
        const h = c.options,
          d = h.id,
          g = Ic(d, h),
          p = pt(h.type, c.dtype);
        ((h.position === void 0 || Dp(h.position, g) !== Dp(c.dposition)) &&
          (h.position = c.dposition),
          (o[d] = !0));
        let b = null;
        if (d in s && s[d].type === p) b = s[d];
        else {
          const v = ln.getScale(p);
          ((b = new v({ id: d, type: p, ctx: this.ctx, chart: this })),
            (s[b.id] = b));
        }
        b.init(h, e);
      }),
      Mt(o, (c, h) => {
        c || delete s[h];
      }),
      Mt(s, (c) => {
        (qe.configure(this, c, c.options), qe.addBox(this, c));
      }));
  }
  _updateMetasets() {
    const e = this._metasets,
      a = this.data.datasets.length,
      s = e.length;
    if ((e.sort((o, u) => o.index - u.index), s > a)) {
      for (let o = a; o < s; ++o) this._destroyDatasetMeta(o);
      e.splice(a, s - a);
    }
    this._sortedMetasets = e.slice(0).sort(Cp('order', 'index'));
  }
  _removeUnreferencedMetasets() {
    const {
      _metasets: e,
      data: { datasets: a },
    } = this;
    (e.length > a.length && delete this._stacks,
      e.forEach((s, o) => {
        a.filter((u) => u === s._dataset).length === 0 &&
          this._destroyDatasetMeta(o);
      }));
  }
  buildOrUpdateControllers() {
    const e = [],
      a = this.data.datasets;
    let s, o;
    for (this._removeUnreferencedMetasets(), s = 0, o = a.length; s < o; s++) {
      const u = a[s];
      let c = this.getDatasetMeta(s);
      const h = u.type || this.config.type;
      if (
        (c.type &&
          c.type !== h &&
          (this._destroyDatasetMeta(s), (c = this.getDatasetMeta(s))),
        (c.type = h),
        (c.indexAxis = u.indexAxis || Jc(h, this.options)),
        (c.order = u.order || 0),
        (c.index = s),
        (c.label = '' + u.label),
        (c.visible = this.isDatasetVisible(s)),
        c.controller)
      )
        (c.controller.updateIndex(s), c.controller.linkScales());
      else {
        const d = ln.getController(h),
          { datasetElementType: g, dataElementType: p } = qt.datasets[h];
        (Object.assign(d, {
          dataElementType: ln.getElement(p),
          datasetElementType: g && ln.getElement(g),
        }),
          (c.controller = new d(this, s)),
          e.push(c.controller));
      }
    }
    return (this._updateMetasets(), e);
  }
  _resetElements() {
    Mt(
      this.data.datasets,
      (e, a) => {
        this.getDatasetMeta(a).controller.reset();
      },
      this
    );
  }
  reset() {
    (this._resetElements(), this.notifyPlugins('reset'));
  }
  update(e) {
    const a = this.config;
    a.update();
    const s = (this._options = a.createResolver(
        a.chartOptionScopes(),
        this.getContext()
      )),
      o = (this._animationsDisabled = !s.animation);
    if (
      (this._updateScales(),
      this._checkEventBindings(),
      this._updateHiddenIndices(),
      this._plugins.invalidate(),
      this.notifyPlugins('beforeUpdate', { mode: e, cancelable: !0 }) === !1)
    )
      return;
    const u = this.buildOrUpdateControllers();
    this.notifyPlugins('beforeElementsUpdate');
    let c = 0;
    for (let g = 0, p = this.data.datasets.length; g < p; g++) {
      const { controller: b } = this.getDatasetMeta(g),
        v = !o && u.indexOf(b) === -1;
      (b.buildOrUpdateElements(v), (c = Math.max(+b.getMaxOverflow(), c)));
    }
    ((c = this._minPadding = s.layout.autoPadding ? c : 0),
      this._updateLayout(c),
      o ||
        Mt(u, (g) => {
          g.reset();
        }),
      this._updateDatasets(e),
      this.notifyPlugins('afterUpdate', { mode: e }),
      this._layers.sort(Cp('z', '_idx')));
    const { _active: h, _lastEvent: d } = this;
    (d
      ? this._eventHandler(d, !0)
      : h.length && this._updateHoverStyles(h, h, !0),
      this.render());
  }
  _updateScales() {
    (Mt(this.scales, (e) => {
      qe.removeBox(this, e);
    }),
      this.ensureScalesHaveIDs(),
      this.buildOrUpdateScales());
  }
  _checkEventBindings() {
    const e = this.options,
      a = new Set(Object.keys(this._listeners)),
      s = new Set(e.events);
    (!Pg(a, s) || !!this._responsiveListeners !== e.responsive) &&
      (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: e } = this,
      a = this._getUniformDataChanges() || [];
    for (const { method: s, start: o, count: u } of a) {
      const c = s === '_removeElements' ? -u : u;
      bw(e, o, c);
    }
  }
  _getUniformDataChanges() {
    const e = this._dataChanges;
    if (!e || !e.length) return;
    this._dataChanges = [];
    const a = this.data.datasets.length,
      s = (u) =>
        new Set(
          e
            .filter((c) => c[0] === u)
            .map((c, h) => h + ',' + c.splice(1).join(','))
        ),
      o = s(0);
    for (let u = 1; u < a; u++) if (!Pg(o, s(u))) return;
    return Array.from(o)
      .map((u) => u.split(','))
      .map((u) => ({ method: u[1], start: +u[2], count: +u[3] }));
  }
  _updateLayout(e) {
    if (this.notifyPlugins('beforeLayout', { cancelable: !0 }) === !1) return;
    qe.update(this, this.width, this.height, e);
    const a = this.chartArea,
      s = a.width <= 0 || a.height <= 0;
    ((this._layers = []),
      Mt(
        this.boxes,
        (o) => {
          (s && o.position === 'chartArea') ||
            (o.configure && o.configure(), this._layers.push(...o._layers()));
        },
        this
      ),
      this._layers.forEach((o, u) => {
        o._idx = u;
      }),
      this.notifyPlugins('afterLayout'));
  }
  _updateDatasets(e) {
    if (
      this.notifyPlugins('beforeDatasetsUpdate', {
        mode: e,
        cancelable: !0,
      }) !== !1
    ) {
      for (let a = 0, s = this.data.datasets.length; a < s; ++a)
        this.getDatasetMeta(a).controller.configure();
      for (let a = 0, s = this.data.datasets.length; a < s; ++a)
        this._updateDataset(a, ai(e) ? e({ datasetIndex: a }) : e);
      this.notifyPlugins('afterDatasetsUpdate', { mode: e });
    }
  }
  _updateDataset(e, a) {
    const s = this.getDatasetMeta(e),
      o = { meta: s, index: e, mode: a, cancelable: !0 };
    this.notifyPlugins('beforeDatasetUpdate', o) !== !1 &&
      (s.controller._update(a),
      (o.cancelable = !1),
      this.notifyPlugins('afterDatasetUpdate', o));
  }
  render() {
    this.notifyPlugins('beforeRender', { cancelable: !0 }) !== !1 &&
      (En.has(this)
        ? this.attached && !En.running(this) && En.start(this)
        : (this.draw(), jp({ chart: this })));
  }
  draw() {
    let e;
    if (this._resizeBeforeDraw) {
      const { width: s, height: o } = this._resizeBeforeDraw;
      ((this._resizeBeforeDraw = null), this._resize(s, o));
    }
    if (
      (this.clear(),
      this.width <= 0 ||
        this.height <= 0 ||
        this.notifyPlugins('beforeDraw', { cancelable: !0 }) === !1)
    )
      return;
    const a = this._layers;
    for (e = 0; e < a.length && a[e].z <= 0; ++e) a[e].draw(this.chartArea);
    for (this._drawDatasets(); e < a.length; ++e) a[e].draw(this.chartArea);
    this.notifyPlugins('afterDraw');
  }
  _getSortedDatasetMetas(e) {
    const a = this._sortedMetasets,
      s = [];
    let o, u;
    for (o = 0, u = a.length; o < u; ++o) {
      const c = a[o];
      (!e || c.visible) && s.push(c);
    }
    return s;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 }) === !1)
      return;
    const e = this.getSortedVisibleDatasetMetas();
    for (let a = e.length - 1; a >= 0; --a) this._drawDataset(e[a]);
    this.notifyPlugins('afterDatasetsDraw');
  }
  _drawDataset(e) {
    const a = this.ctx,
      s = { meta: e, index: e.index, cancelable: !0 },
      o = Q0(this, e);
    this.notifyPlugins('beforeDatasetDraw', s) !== !1 &&
      (o && er(a, o),
      e.controller.draw(),
      o && nr(a),
      (s.cancelable = !1),
      this.notifyPlugins('afterDatasetDraw', s));
  }
  isPointInArea(e) {
    return Js(e, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(e, a, s, o) {
    const u = p2.modes[a];
    return typeof u == 'function' ? u(this, e, s, o) : [];
  }
  getDatasetMeta(e) {
    const a = this.data.datasets[e],
      s = this._metasets;
    let o = s.filter((u) => u && u._dataset === a).pop();
    return (
      o ||
        ((o = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: (a && a.order) || 0,
          index: e,
          _dataset: a,
          _parsed: [],
          _sorted: !1,
        }),
        s.push(o)),
      o
    );
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = zi(null, { chart: this, type: 'chart' }))
    );
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(e) {
    const a = this.data.datasets[e];
    if (!a) return !1;
    const s = this.getDatasetMeta(e);
    return typeof s.hidden == 'boolean' ? !s.hidden : !a.hidden;
  }
  setDatasetVisibility(e, a) {
    const s = this.getDatasetMeta(e);
    s.hidden = !a;
  }
  toggleDataVisibility(e) {
    this._hiddenIndices[e] = !this._hiddenIndices[e];
  }
  getDataVisibility(e) {
    return !this._hiddenIndices[e];
  }
  _updateVisibility(e, a, s) {
    const o = s ? 'show' : 'hide',
      u = this.getDatasetMeta(e),
      c = u.controller._resolveAnimations(void 0, o);
    Qo(a)
      ? ((u.data[a].hidden = !s), this.update())
      : (this.setDatasetVisibility(e, s),
        c.update(u, { visible: s }),
        this.update((h) => (h.datasetIndex === e ? o : void 0)));
  }
  hide(e, a) {
    this._updateVisibility(e, a, !1);
  }
  show(e, a) {
    this._updateVisibility(e, a, !0);
  }
  _destroyDatasetMeta(e) {
    const a = this._metasets[e];
    (a && a.controller && a.controller._destroy(), delete this._metasets[e]);
  }
  _stop() {
    let e, a;
    for (
      this.stop(), En.remove(this), e = 0, a = this.data.datasets.length;
      e < a;
      ++e
    )
      this._destroyDatasetMeta(e);
  }
  destroy() {
    this.notifyPlugins('beforeDestroy');
    const { canvas: e, ctx: a } = this;
    (this._stop(),
      this.config.clearCache(),
      e &&
        (this.unbindEvents(),
        ep(e, a),
        this.platform.releaseContext(a),
        (this.canvas = null),
        (this.ctx = null)),
      delete Vo[this.id],
      this.notifyPlugins('afterDestroy'));
  }
  toBase64Image(...e) {
    return this.canvas.toDataURL(...e);
  }
  bindEvents() {
    (this.bindUserEvents(),
      this.options.responsive
        ? this.bindResponsiveEvents()
        : (this.attached = !0));
  }
  bindUserEvents() {
    const e = this._listeners,
      a = this.platform,
      s = (u, c) => {
        (a.addEventListener(this, u, c), (e[u] = c));
      },
      o = (u, c, h) => {
        ((u.offsetX = c), (u.offsetY = h), this._eventHandler(u));
      };
    Mt(this.options.events, (u) => s(u, o));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const e = this._responsiveListeners,
      a = this.platform,
      s = (d, g) => {
        (a.addEventListener(this, d, g), (e[d] = g));
      },
      o = (d, g) => {
        e[d] && (a.removeEventListener(this, d, g), delete e[d]);
      },
      u = (d, g) => {
        this.canvas && this.resize(d, g);
      };
    let c;
    const h = () => {
      (o('attach', h),
        (this.attached = !0),
        this.resize(),
        s('resize', u),
        s('detach', c));
    };
    ((c = () => {
      ((this.attached = !1),
        o('resize', u),
        this._stop(),
        this._resize(0, 0),
        s('attach', h));
    }),
      a.isAttached(this.canvas) ? h() : c());
  }
  unbindEvents() {
    (Mt(this._listeners, (e, a) => {
      this.platform.removeEventListener(this, a, e);
    }),
      (this._listeners = {}),
      Mt(this._responsiveListeners, (e, a) => {
        this.platform.removeEventListener(this, a, e);
      }),
      (this._responsiveListeners = void 0));
  }
  updateHoverStyle(e, a, s) {
    const o = s ? 'set' : 'remove';
    let u, c, h, d;
    for (
      a === 'dataset' &&
        ((u = this.getDatasetMeta(e[0].datasetIndex)),
        u.controller['_' + o + 'DatasetHoverStyle']()),
        h = 0,
        d = e.length;
      h < d;
      ++h
    ) {
      c = e[h];
      const g = c && this.getDatasetMeta(c.datasetIndex).controller;
      g && g[o + 'HoverStyle'](c.element, c.datasetIndex, c.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(e) {
    const a = this._active || [],
      s = e.map(({ datasetIndex: u, index: c }) => {
        const h = this.getDatasetMeta(u);
        if (!h) throw new Error('No dataset found at index ' + u);
        return { datasetIndex: u, element: h.data[c], index: c };
      });
    !Go(s, a) &&
      ((this._active = s),
      (this._lastEvent = null),
      this._updateHoverStyles(s, a));
  }
  notifyPlugins(e, a, s) {
    return this._plugins.notify(this, e, a, s);
  }
  isPluginEnabled(e) {
    return this._plugins._cache.filter((a) => a.plugin.id === e).length === 1;
  }
  _updateHoverStyles(e, a, s) {
    const o = this.options.hover,
      u = (d, g) =>
        d.filter(
          (p) =>
            !g.some(
              (b) => p.datasetIndex === b.datasetIndex && p.index === b.index
            )
        ),
      c = u(a, e),
      h = s ? e : u(e, a);
    (c.length && this.updateHoverStyle(c, o.mode, !1),
      h.length && o.mode && this.updateHoverStyle(h, o.mode, !0));
  }
  _eventHandler(e, a) {
    const s = {
        event: e,
        replay: a,
        cancelable: !0,
        inChartArea: this.isPointInArea(e),
      },
      o = (c) =>
        (c.options.events || this.options.events).includes(e.native.type);
    if (this.notifyPlugins('beforeEvent', s, o) === !1) return;
    const u = this._handleEvent(e, a, s.inChartArea);
    return (
      (s.cancelable = !1),
      this.notifyPlugins('afterEvent', s, o),
      (u || s.changed) && this.render(),
      this
    );
  }
  _handleEvent(e, a, s) {
    const { _active: o = [], options: u } = this,
      c = a,
      h = this._getActiveElements(e, o, s, c),
      d = C_(e),
      g = xw(e, this._lastEvent, s, d);
    s &&
      ((this._lastEvent = null),
      jt(u.onHover, [e, h, this], this),
      d && jt(u.onClick, [e, h, this], this));
    const p = !Go(h, o);
    return (
      (p || a) && ((this._active = h), this._updateHoverStyles(h, o, a)),
      (this._lastEvent = g),
      p
    );
  }
  _getActiveElements(e, a, s, o) {
    if (e.type === 'mouseout') return [];
    if (!s) return a;
    const u = this.options.hover;
    return this.getElementsAtEventForMode(e, u.mode, u, o);
  }
};
function zp() {
  return Mt(sr.instances, (i) => i._plugins.invalidate());
}
function ly(i, e, a = e) {
  ((i.lineCap = pt(a.borderCapStyle, e.borderCapStyle)),
    i.setLineDash(pt(a.borderDash, e.borderDash)),
    (i.lineDashOffset = pt(a.borderDashOffset, e.borderDashOffset)),
    (i.lineJoin = pt(a.borderJoinStyle, e.borderJoinStyle)),
    (i.lineWidth = pt(a.borderWidth, e.borderWidth)),
    (i.strokeStyle = pt(a.borderColor, e.borderColor)));
}
function vw(i, e, a) {
  i.lineTo(a.x, a.y);
}
function _w(i) {
  return i.stepped
    ? sS
    : i.tension || i.cubicInterpolationMode === 'monotone'
      ? lS
      : vw;
}
function oy(i, e, a = {}) {
  const s = i.length,
    { start: o = 0, end: u = s - 1 } = a,
    { start: c, end: h } = e,
    d = Math.max(o, c),
    g = Math.min(u, h),
    p = (o < c && u < c) || (o > h && u > h);
  return {
    count: s,
    start: d,
    loop: e.loop,
    ilen: g < d && !p ? s + g - d : g - d,
  };
}
function Sw(i, e, a, s) {
  const { points: o, options: u } = e,
    { count: c, start: h, loop: d, ilen: g } = oy(o, a, s),
    p = _w(u);
  let { move: b = !0, reverse: v } = s || {},
    S,
    w,
    E;
  for (S = 0; S <= g; ++S)
    ((w = o[(h + (v ? g - S : S)) % c]),
      !w.skip &&
        (b ? (i.moveTo(w.x, w.y), (b = !1)) : p(i, E, w, v, u.stepped),
        (E = w)));
  return (d && ((w = o[(h + (v ? g : 0)) % c]), p(i, E, w, v, u.stepped)), !!d);
}
function ww(i, e, a, s) {
  const o = e.points,
    { count: u, start: c, ilen: h } = oy(o, a, s),
    { move: d = !0, reverse: g } = s || {};
  let p = 0,
    b = 0,
    v,
    S,
    w,
    E,
    M,
    D;
  const k = (G) => (c + (g ? h - G : G)) % u,
    Y = () => {
      E !== M && (i.lineTo(p, M), i.lineTo(p, E), i.lineTo(p, D));
    };
  for (d && ((S = o[k(0)]), i.moveTo(S.x, S.y)), v = 0; v <= h; ++v) {
    if (((S = o[k(v)]), S.skip)) continue;
    const G = S.x,
      B = S.y,
      F = G | 0;
    (F === w
      ? (B < E ? (E = B) : B > M && (M = B), (p = (b * p + G) / ++b))
      : (Y(), i.lineTo(G, B), (w = F), (b = 0), (E = M = B)),
      (D = B));
  }
  Y();
}
function tf(i) {
  const e = i.options,
    a = e.borderDash && e.borderDash.length;
  return !i._decimated &&
    !i._loop &&
    !e.tension &&
    e.cubicInterpolationMode !== 'monotone' &&
    !e.stepped &&
    !a
    ? ww
    : Sw;
}
function Mw(i) {
  return i.stepped
    ? US
    : i.tension || i.cubicInterpolationMode === 'monotone'
      ? YS
      : Oi;
}
function Ew(i, e, a, s) {
  let o = e._path;
  (o || ((o = e._path = new Path2D()), e.path(o, a, s) && o.closePath()),
    ly(i, e.options),
    i.stroke(o));
}
function Tw(i, e, a, s) {
  const { segments: o, options: u } = e,
    c = tf(e);
  for (const h of o)
    (ly(i, u, h.style),
      i.beginPath(),
      c(i, e, h, { start: a, end: a + s - 1 }) && i.closePath(),
      i.stroke());
}
const Ow = typeof Path2D == 'function';
function Aw(i, e, a, s) {
  Ow && !e.options.segment ? Ew(i, e, a, s) : Tw(i, e, a, s);
}
class lr extends Ni {
  static id = 'line';
  static defaults = {
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: 'miter',
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: 'default',
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0,
  };
  static defaultRoutes = {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor',
  };
  static descriptors = {
    _scriptable: !0,
    _indexable: (e) => e !== 'borderDash' && e !== 'fill',
  };
  constructor(e) {
    (super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      e && Object.assign(this, e));
  }
  updateControlPoints(e, a) {
    const s = this.options;
    if (
      (s.tension || s.cubicInterpolationMode === 'monotone') &&
      !s.stepped &&
      !this._pointsUpdated
    ) {
      const o = s.spanGaps ? this._loop : this._fullLoop;
      (jS(this._points, s, e, o, a), (this._pointsUpdated = !0));
    }
  }
  set points(e) {
    ((this._points = e),
      delete this._segments,
      delete this._path,
      (this._pointsUpdated = !1));
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = FS(this, this.options.segment));
  }
  first() {
    const e = this.segments,
      a = this.points;
    return e.length && a[e[0].start];
  }
  last() {
    const e = this.segments,
      a = this.points,
      s = e.length;
    return s && a[e[s - 1].end];
  }
  interpolate(e, a) {
    const s = this.options,
      o = e[a],
      u = this.points,
      c = F0(this, { property: a, start: o, end: o });
    if (!c.length) return;
    const h = [],
      d = Mw(s);
    let g, p;
    for (g = 0, p = c.length; g < p; ++g) {
      const { start: b, end: v } = c[g],
        S = u[b],
        w = u[v];
      if (S === w) {
        h.push(S);
        continue;
      }
      const E = Math.abs((o - S[a]) / (w[a] - S[a])),
        M = d(S, w, E, s.stepped);
      ((M[a] = e[a]), h.push(M));
    }
    return h.length === 1 ? h[0] : h;
  }
  pathSegment(e, a, s) {
    return tf(this)(e, this, a, s);
  }
  path(e, a, s) {
    const o = this.segments,
      u = tf(this);
    let c = this._loop;
    ((a = a || 0), (s = s || this.points.length - a));
    for (const h of o) c &= u(e, this, h, { start: a, end: a + s - 1 });
    return !!c;
  }
  draw(e, a, s, o) {
    const u = this.options || {};
    ((this.points || []).length &&
      u.borderWidth &&
      (e.save(), Aw(e, this, s, o), e.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0)));
  }
}
function Np(i, e, a, s) {
  const o = i.options,
    { [a]: u } = i.getProps([a], s);
  return Math.abs(e - u) < o.radius + o.hitRadius;
}
class Dw extends Ni {
  static id = 'point';
  parsed;
  skip;
  stop;
  static defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: 'circle',
    radius: 3,
    rotation: 0,
  };
  static defaultRoutes = {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor',
  };
  constructor(e) {
    (super(),
      (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      e && Object.assign(this, e));
  }
  inRange(e, a, s) {
    const o = this.options,
      { x: u, y: c } = this.getProps(['x', 'y'], s);
    return (
      Math.pow(e - u, 2) + Math.pow(a - c, 2) <
      Math.pow(o.hitRadius + o.radius, 2)
    );
  }
  inXRange(e, a) {
    return Np(this, e, 'x', a);
  }
  inYRange(e, a) {
    return Np(this, e, 'y', a);
  }
  getCenterPoint(e) {
    const { x: a, y: s } = this.getProps(['x', 'y'], e);
    return { x: a, y: s };
  }
  size(e) {
    e = e || this.options || {};
    let a = e.radius || 0;
    a = Math.max(a, (a && e.hoverRadius) || 0);
    const s = (a && e.borderWidth) || 0;
    return (a + s) * 2;
  }
  draw(e, a) {
    const s = this.options;
    this.skip ||
      s.radius < 0.1 ||
      !Js(this, a, this.size(s) / 2) ||
      ((e.strokeStyle = s.borderColor),
      (e.lineWidth = s.borderWidth),
      (e.fillStyle = s.backgroundColor),
      Wc(e, s, this.x, this.y));
  }
  getRange() {
    const e = this.options || {};
    return e.radius + e.hitRadius;
  }
}
function Cw(i, e, a) {
  const s = i.segments,
    o = i.points,
    u = e.points,
    c = [];
  for (const h of s) {
    let { start: d, end: g } = h;
    g = or(d, g, o);
    const p = ef(a, o[d], o[g], h.loop);
    if (!e.segments) {
      c.push({ source: h, target: p, start: o[d], end: o[g] });
      continue;
    }
    const b = F0(e, p);
    for (const v of b) {
      const S = ef(a, u[v.start], u[v.end], v.loop),
        w = P0(h, o, S);
      for (const E of w)
        c.push({
          source: E,
          target: v,
          start: { [a]: kp(p, S, 'start', Math.max) },
          end: { [a]: kp(p, S, 'end', Math.min) },
        });
    }
  }
  return c;
}
function ef(i, e, a, s) {
  if (s) return;
  let o = e[i],
    u = a[i];
  return (
    i === 'angle' && ((o = on(o)), (u = on(u))),
    { property: i, start: o, end: u }
  );
}
function jw(i, e) {
  const { x: a = null, y: s = null } = i || {},
    o = e.points,
    u = [];
  return (
    e.segments.forEach(({ start: c, end: h }) => {
      h = or(c, h, o);
      const d = o[c],
        g = o[h];
      s !== null
        ? (u.push({ x: d.x, y: s }), u.push({ x: g.x, y: s }))
        : a !== null && (u.push({ x: a, y: d.y }), u.push({ x: a, y: g.y }));
    }),
    u
  );
}
function or(i, e, a) {
  for (; e > i; e--) {
    const s = a[e];
    if (!isNaN(s.x) && !isNaN(s.y)) break;
  }
  return e;
}
function kp(i, e, a, s) {
  return i && e ? s(i[a], e[a]) : i ? i[a] : e ? e[a] : 0;
}
function ry(i, e) {
  let a = [],
    s = !1;
  return (
    Ft(i) ? ((s = !0), (a = i)) : (a = jw(i, e)),
    a.length
      ? new lr({ points: a, options: { tension: 0 }, _loop: s, _fullLoop: s })
      : null
  );
}
function Lp(i) {
  return i && i.fill !== !1;
}
function Rw(i, e, a) {
  let o = i[e].fill;
  const u = [e];
  let c;
  if (!a) return o;
  for (; o !== !1 && u.indexOf(o) === -1; ) {
    if (!ue(o)) return o;
    if (((c = i[o]), !c)) return !1;
    if (c.visible) return o;
    (u.push(o), (o = c.fill));
  }
  return !1;
}
function zw(i, e, a) {
  const s = Hw(i);
  if (bt(s)) return isNaN(s.value) ? !1 : s;
  let o = parseFloat(s);
  return ue(o) && Math.floor(o) === o
    ? Nw(s[0], e, o, a)
    : ['origin', 'start', 'end', 'stack', 'shape'].indexOf(s) >= 0 && s;
}
function Nw(i, e, a, s) {
  return (
    (i === '-' || i === '+') && (a = e + a),
    a === e || a < 0 || a >= s ? !1 : a
  );
}
function kw(i, e) {
  let a = null;
  return (
    i === 'start'
      ? (a = e.bottom)
      : i === 'end'
        ? (a = e.top)
        : bt(i)
          ? (a = e.getPixelForValue(i.value))
          : e.getBasePixel && (a = e.getBasePixel()),
    a
  );
}
function Lw(i, e, a) {
  let s;
  return (
    i === 'start'
      ? (s = a)
      : i === 'end'
        ? (s = e.options.reverse ? e.min : e.max)
        : bt(i)
          ? (s = i.value)
          : (s = e.getBaseValue()),
    s
  );
}
function Hw(i) {
  const e = i.options,
    a = e.fill;
  let s = pt(a && a.target, a);
  return (
    s === void 0 && (s = !!e.backgroundColor),
    s === !1 || s === null ? !1 : s === !0 ? 'origin' : s
  );
}
function Bw(i) {
  const { scale: e, index: a, line: s } = i,
    o = [],
    u = s.segments,
    c = s.points,
    h = Uw(e, a);
  h.push(ry({ x: null, y: e.bottom }, s));
  for (let d = 0; d < u.length; d++) {
    const g = u[d];
    for (let p = g.start; p <= g.end; p++) Yw(o, c[p], h);
  }
  return new lr({ points: o, options: {} });
}
function Uw(i, e) {
  const a = [],
    s = i.getMatchingVisibleMetas('line');
  for (let o = 0; o < s.length; o++) {
    const u = s[o];
    if (u.index === e) break;
    u.hidden || a.unshift(u.dataset);
  }
  return a;
}
function Yw(i, e, a) {
  const s = [];
  for (let o = 0; o < a.length; o++) {
    const u = a[o],
      { first: c, last: h, point: d } = qw(u, e, 'x');
    if (!(!d || (c && h))) {
      if (c) s.unshift(d);
      else if ((i.push(d), !h)) break;
    }
  }
  i.push(...s);
}
function qw(i, e, a) {
  const s = i.interpolate(e, a);
  if (!s) return {};
  const o = s[a],
    u = i.segments,
    c = i.points;
  let h = !1,
    d = !1;
  for (let g = 0; g < u.length; g++) {
    const p = u[g],
      b = c[p.start][a],
      v = c[p.end][a];
    if (wa(o, b, v)) {
      ((h = o === b), (d = o === v));
      break;
    }
  }
  return { first: h, last: d, point: s };
}
class uy {
  constructor(e) {
    ((this.x = e.x), (this.y = e.y), (this.radius = e.radius));
  }
  pathSegment(e, a, s) {
    const { x: o, y: u, radius: c } = this;
    return (
      (a = a || { start: 0, end: Qe }),
      e.arc(o, u, c, a.end, a.start, !0),
      !s.bounds
    );
  }
  interpolate(e) {
    const { x: a, y: s, radius: o } = this,
      u = e.angle;
    return { x: a + Math.cos(u) * o, y: s + Math.sin(u) * o, angle: u };
  }
}
function Vw(i) {
  const { chart: e, fill: a, line: s } = i;
  if (ue(a)) return Xw(e, a);
  if (a === 'stack') return Bw(i);
  if (a === 'shape') return !0;
  const o = Gw(i);
  return o instanceof uy ? o : ry(o, s);
}
function Xw(i, e) {
  const a = i.getDatasetMeta(e);
  return a && i.isDatasetVisible(e) ? a.dataset : null;
}
function Gw(i) {
  return (i.scale || {}).getPointPositionForValue ? Fw(i) : Pw(i);
}
function Pw(i) {
  const { scale: e = {}, fill: a } = i,
    s = kw(a, e);
  if (ue(s)) {
    const o = e.isHorizontal();
    return { x: o ? s : null, y: o ? null : s };
  }
  return null;
}
function Fw(i) {
  const { scale: e, fill: a } = i,
    s = e.options,
    o = e.getLabels().length,
    u = s.reverse ? e.max : e.min,
    c = Lw(a, e, u),
    h = [];
  if (s.grid.circular) {
    const d = e.getPointPositionForValue(0, u);
    return new uy({
      x: d.x,
      y: d.y,
      radius: e.getDistanceFromCenterForValue(c),
    });
  }
  for (let d = 0; d < o; ++d) h.push(e.getPointPositionForValue(d, c));
  return h;
}
function Vc(i, e, a) {
  const s = Vw(e),
    { chart: o, index: u, line: c, scale: h, axis: d } = e,
    g = c.options,
    p = g.fill,
    b = g.backgroundColor,
    { above: v = b, below: S = b } = p || {},
    w = o.getDatasetMeta(u),
    E = Q0(o, w);
  s &&
    c.points.length &&
    (er(i, a),
    Qw(i, {
      line: c,
      target: s,
      above: v,
      below: S,
      area: a,
      scale: h,
      axis: d,
      clip: E,
    }),
    nr(i));
}
function Qw(i, e) {
  const {
      line: a,
      target: s,
      above: o,
      below: u,
      area: c,
      scale: h,
      clip: d,
    } = e,
    g = a._loop ? 'angle' : e.axis;
  i.save();
  let p = u;
  (u !== o &&
    (g === 'x'
      ? (Hp(i, s, c.top),
        Xc(i, { line: a, target: s, color: o, scale: h, property: g, clip: d }),
        i.restore(),
        i.save(),
        Hp(i, s, c.bottom))
      : g === 'y' &&
        (Bp(i, s, c.left),
        Xc(i, { line: a, target: s, color: u, scale: h, property: g, clip: d }),
        i.restore(),
        i.save(),
        Bp(i, s, c.right),
        (p = o))),
    Xc(i, { line: a, target: s, color: p, scale: h, property: g, clip: d }),
    i.restore());
}
function Hp(i, e, a) {
  const { segments: s, points: o } = e;
  let u = !0,
    c = !1;
  i.beginPath();
  for (const h of s) {
    const { start: d, end: g } = h,
      p = o[d],
      b = o[or(d, g, o)];
    (u
      ? (i.moveTo(p.x, p.y), (u = !1))
      : (i.lineTo(p.x, a), i.lineTo(p.x, p.y)),
      (c = !!e.pathSegment(i, h, { move: c })),
      c ? i.closePath() : i.lineTo(b.x, a));
  }
  (i.lineTo(e.first().x, a), i.closePath(), i.clip());
}
function Bp(i, e, a) {
  const { segments: s, points: o } = e;
  let u = !0,
    c = !1;
  i.beginPath();
  for (const h of s) {
    const { start: d, end: g } = h,
      p = o[d],
      b = o[or(d, g, o)];
    (u
      ? (i.moveTo(p.x, p.y), (u = !1))
      : (i.lineTo(a, p.y), i.lineTo(p.x, p.y)),
      (c = !!e.pathSegment(i, h, { move: c })),
      c ? i.closePath() : i.lineTo(a, b.y));
  }
  (i.lineTo(a, e.first().y), i.closePath(), i.clip());
}
function Xc(i, e) {
  const { line: a, target: s, property: o, color: u, scale: c, clip: h } = e,
    d = Cw(a, s, o);
  for (const { source: g, target: p, start: b, end: v } of d) {
    const { style: { backgroundColor: S = u } = {} } = g,
      w = s !== !0;
    (i.save(), (i.fillStyle = S), Zw(i, c, h, w && ef(o, b, v)), i.beginPath());
    const E = !!a.pathSegment(i, g);
    let M;
    if (w) {
      E ? i.closePath() : Up(i, s, v, o);
      const D = !!s.pathSegment(i, p, { move: E, reverse: !0 });
      ((M = E && D), M || Up(i, s, b, o));
    }
    (i.closePath(), i.fill(M ? 'evenodd' : 'nonzero'), i.restore());
  }
}
function Zw(i, e, a, s) {
  const o = e.chart.chartArea,
    { property: u, start: c, end: h } = s || {};
  if (u === 'x' || u === 'y') {
    let d, g, p, b;
    (u === 'x'
      ? ((d = c), (g = o.top), (p = h), (b = o.bottom))
      : ((d = o.left), (g = c), (p = o.right), (b = h)),
      i.beginPath(),
      a &&
        ((d = Math.max(d, a.left)),
        (p = Math.min(p, a.right)),
        (g = Math.max(g, a.top)),
        (b = Math.min(b, a.bottom))),
      i.rect(d, g, p - d, b - g),
      i.clip());
  }
}
function Up(i, e, a, s) {
  const o = e.interpolate(a, s);
  o && i.lineTo(o.x, o.y);
}
var Kw = {
  id: 'filler',
  afterDatasetsUpdate(i, e, a) {
    const s = (i.data.datasets || []).length,
      o = [];
    let u, c, h, d;
    for (c = 0; c < s; ++c)
      ((u = i.getDatasetMeta(c)),
        (h = u.dataset),
        (d = null),
        h &&
          h.options &&
          h instanceof lr &&
          (d = {
            visible: i.isDatasetVisible(c),
            index: c,
            fill: zw(h, c, s),
            chart: i,
            axis: u.controller.options.indexAxis,
            scale: u.vScale,
            line: h,
          }),
        (u.$filler = d),
        o.push(d));
    for (c = 0; c < s; ++c)
      ((d = o[c]), !(!d || d.fill === !1) && (d.fill = Rw(o, c, a.propagate)));
  },
  beforeDraw(i, e, a) {
    const s = a.drawTime === 'beforeDraw',
      o = i.getSortedVisibleDatasetMetas(),
      u = i.chartArea;
    for (let c = o.length - 1; c >= 0; --c) {
      const h = o[c].$filler;
      h &&
        (h.line.updateControlPoints(u, h.axis), s && h.fill && Vc(i.ctx, h, u));
    }
  },
  beforeDatasetsDraw(i, e, a) {
    if (a.drawTime !== 'beforeDatasetsDraw') return;
    const s = i.getSortedVisibleDatasetMetas();
    for (let o = s.length - 1; o >= 0; --o) {
      const u = s[o].$filler;
      Lp(u) && Vc(i.ctx, u, i.chartArea);
    }
  },
  beforeDatasetDraw(i, e, a) {
    const s = e.meta.$filler;
    !Lp(s) || a.drawTime !== 'beforeDatasetDraw' || Vc(i.ctx, s, i.chartArea);
  },
  defaults: { propagate: !0, drawTime: 'beforeDatasetDraw' },
};
const Yp = (i, e) => {
    let { boxHeight: a = e, boxWidth: s = e } = i;
    return (
      i.usePointStyle &&
        ((a = Math.min(a, e)), (s = i.pointStyleWidth || Math.min(s, e))),
      { boxWidth: s, boxHeight: a, itemHeight: Math.max(e, a) }
    );
  },
  Ww = (i, e) =>
    i !== null &&
    e !== null &&
    i.datasetIndex === e.datasetIndex &&
    i.index === e.index;
class qp extends Ni {
  constructor(e) {
    (super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = e.chart),
      (this.options = e.options),
      (this.ctx = e.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0));
  }
  update(e, a, s) {
    ((this.maxWidth = e),
      (this.maxHeight = a),
      (this._margins = s),
      this.setDimensions(),
      this.buildLabels(),
      this.fit());
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const e = this.options.labels || {};
    let a = jt(e.generateLabels, [this.chart], this) || [];
    (e.filter && (a = a.filter((s) => e.filter(s, this.chart.data))),
      e.sort && (a = a.sort((s, o) => e.sort(s, o, this.chart.data))),
      this.options.reverse && a.reverse(),
      (this.legendItems = a));
  }
  fit() {
    const { options: e, ctx: a } = this;
    if (!e.display) {
      this.width = this.height = 0;
      return;
    }
    const s = e.labels,
      o = re(s.font),
      u = o.size,
      c = this._computeTitleHeight(),
      { boxWidth: h, itemHeight: d } = Yp(s, u);
    let g, p;
    ((a.font = o.string),
      this.isHorizontal()
        ? ((g = this.maxWidth), (p = this._fitRows(c, u, h, d) + 10))
        : ((p = this.maxHeight), (g = this._fitCols(c, o, h, d) + 10)),
      (this.width = Math.min(g, e.maxWidth || this.maxWidth)),
      (this.height = Math.min(p, e.maxHeight || this.maxHeight)));
  }
  _fitRows(e, a, s, o) {
    const {
        ctx: u,
        maxWidth: c,
        options: {
          labels: { padding: h },
        },
      } = this,
      d = (this.legendHitBoxes = []),
      g = (this.lineWidths = [0]),
      p = o + h;
    let b = e;
    ((u.textAlign = 'left'), (u.textBaseline = 'middle'));
    let v = -1,
      S = -p;
    return (
      this.legendItems.forEach((w, E) => {
        const M = s + a / 2 + u.measureText(w.text).width;
        ((E === 0 || g[g.length - 1] + M + 2 * h > c) &&
          ((b += p), (g[g.length - (E > 0 ? 0 : 1)] = 0), (S += p), v++),
          (d[E] = { left: 0, top: S, row: v, width: M, height: o }),
          (g[g.length - 1] += M + h));
      }),
      b
    );
  }
  _fitCols(e, a, s, o) {
    const {
        ctx: u,
        maxHeight: c,
        options: {
          labels: { padding: h },
        },
      } = this,
      d = (this.legendHitBoxes = []),
      g = (this.columnSizes = []),
      p = c - e;
    let b = h,
      v = 0,
      S = 0,
      w = 0,
      E = 0;
    return (
      this.legendItems.forEach((M, D) => {
        const { itemWidth: k, itemHeight: Y } = $w(s, a, u, M, o);
        (D > 0 &&
          S + Y + 2 * h > p &&
          ((b += v + h),
          g.push({ width: v, height: S }),
          (w += v + h),
          E++,
          (v = S = 0)),
          (d[D] = { left: w, top: S, col: E, width: k, height: Y }),
          (v = Math.max(v, k)),
          (S += Y + h));
      }),
      (b += v),
      g.push({ width: v, height: S }),
      b
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const e = this._computeTitleHeight(),
      {
        legendHitBoxes: a,
        options: {
          align: s,
          labels: { padding: o },
          rtl: u,
        },
      } = this,
      c = Ma(u, this.left, this.width);
    if (this.isHorizontal()) {
      let h = 0,
        d = oe(s, this.left + o, this.right - this.lineWidths[h]);
      for (const g of a)
        (h !== g.row &&
          ((h = g.row),
          (d = oe(s, this.left + o, this.right - this.lineWidths[h]))),
          (g.top += this.top + e + o),
          (g.left = c.leftForLtr(c.x(d), g.width)),
          (d += g.width + o));
    } else {
      let h = 0,
        d = oe(s, this.top + e + o, this.bottom - this.columnSizes[h].height);
      for (const g of a)
        (g.col !== h &&
          ((h = g.col),
          (d = oe(
            s,
            this.top + e + o,
            this.bottom - this.columnSizes[h].height
          ))),
          (g.top = d),
          (g.left += this.left + o),
          (g.left = c.leftForLtr(c.x(g.left), g.width)),
          (d += g.height + o));
    }
  }
  isHorizontal() {
    return (
      this.options.position === 'top' || this.options.position === 'bottom'
    );
  }
  draw() {
    if (this.options.display) {
      const e = this.ctx;
      (er(e, this), this._draw(), nr(e));
    }
  }
  _draw() {
    const { options: e, columnSizes: a, lineWidths: s, ctx: o } = this,
      { align: u, labels: c } = e,
      h = qt.color,
      d = Ma(e.rtl, this.left, this.width),
      g = re(c.font),
      { padding: p } = c,
      b = g.size,
      v = b / 2;
    let S;
    (this.drawTitle(),
      (o.textAlign = d.textAlign('left')),
      (o.textBaseline = 'middle'),
      (o.lineWidth = 0.5),
      (o.font = g.string));
    const { boxWidth: w, boxHeight: E, itemHeight: M } = Yp(c, b),
      D = function (F, K, Q) {
        if (isNaN(w) || w <= 0 || isNaN(E) || E < 0) return;
        o.save();
        const J = pt(Q.lineWidth, 1);
        if (
          ((o.fillStyle = pt(Q.fillStyle, h)),
          (o.lineCap = pt(Q.lineCap, 'butt')),
          (o.lineDashOffset = pt(Q.lineDashOffset, 0)),
          (o.lineJoin = pt(Q.lineJoin, 'miter')),
          (o.lineWidth = J),
          (o.strokeStyle = pt(Q.strokeStyle, h)),
          o.setLineDash(pt(Q.lineDash, [])),
          c.usePointStyle)
        ) {
          const rt = {
              radius: (E * Math.SQRT2) / 2,
              pointStyle: Q.pointStyle,
              rotation: Q.rotation,
              borderWidth: J,
            },
            st = d.xPlus(F, w / 2),
            ot = K + v;
          k0(o, rt, st, ot, c.pointStyleWidth && w);
        } else {
          const rt = K + Math.max((b - E) / 2, 0),
            st = d.leftForLtr(F, w),
            ot = Ps(Q.borderRadius);
          (o.beginPath(),
            Object.values(ot).some((Lt) => Lt !== 0)
              ? $c(o, { x: st, y: rt, w, h: E, radius: ot })
              : o.rect(st, rt, w, E),
            o.fill(),
            J !== 0 && o.stroke());
        }
        o.restore();
      },
      k = function (F, K, Q) {
        Is(o, Q.text, F, K + M / 2, g, {
          strikethrough: Q.hidden,
          textAlign: d.textAlign(Q.textAlign),
        });
      },
      Y = this.isHorizontal(),
      G = this._computeTitleHeight();
    (Y
      ? (S = {
          x: oe(u, this.left + p, this.right - s[0]),
          y: this.top + p + G,
          line: 0,
        })
      : (S = {
          x: this.left + p,
          y: oe(u, this.top + G + p, this.bottom - a[0].height),
          line: 0,
        }),
      V0(this.ctx, e.textDirection));
    const B = M + p;
    (this.legendItems.forEach((F, K) => {
      ((o.strokeStyle = F.fontColor), (o.fillStyle = F.fontColor));
      const Q = o.measureText(F.text).width,
        J = d.textAlign(F.textAlign || (F.textAlign = c.textAlign)),
        rt = w + v + Q;
      let st = S.x,
        ot = S.y;
      (d.setWidth(this.width),
        Y
          ? K > 0 &&
            st + rt + p > this.right &&
            ((ot = S.y += B),
            S.line++,
            (st = S.x = oe(u, this.left + p, this.right - s[S.line])))
          : K > 0 &&
            ot + B > this.bottom &&
            ((st = S.x = st + a[S.line].width + p),
            S.line++,
            (ot = S.y =
              oe(u, this.top + G + p, this.bottom - a[S.line].height))));
      const Lt = d.x(st);
      if (
        (D(Lt, ot, F),
        (st = F_(J, st + w + v, Y ? st + rt : this.right, e.rtl)),
        k(d.x(st), ot, F),
        Y)
      )
        S.x += rt + p;
      else if (typeof F.text != 'string') {
        const Qt = g.lineHeight;
        S.y += cy(F, Qt) + p;
      } else S.y += B;
    }),
      X0(this.ctx, e.textDirection));
  }
  drawTitle() {
    const e = this.options,
      a = e.title,
      s = re(a.font),
      o = Ve(a.padding);
    if (!a.display) return;
    const u = Ma(e.rtl, this.left, this.width),
      c = this.ctx,
      h = a.position,
      d = s.size / 2,
      g = o.top + d;
    let p,
      b = this.left,
      v = this.width;
    if (this.isHorizontal())
      ((v = Math.max(...this.lineWidths)),
        (p = this.top + g),
        (b = oe(e.align, b, this.right - v)));
    else {
      const w = this.columnSizes.reduce((E, M) => Math.max(E, M.height), 0);
      p =
        g +
        oe(
          e.align,
          this.top,
          this.bottom - w - e.labels.padding - this._computeTitleHeight()
        );
    }
    const S = oe(h, b, b + v);
    ((c.textAlign = u.textAlign(xf(h))),
      (c.textBaseline = 'middle'),
      (c.strokeStyle = a.color),
      (c.fillStyle = a.color),
      (c.font = s.string),
      Is(c, a.text, S, p, s));
  }
  _computeTitleHeight() {
    const e = this.options.title,
      a = re(e.font),
      s = Ve(e.padding);
    return e.display ? a.lineHeight + s.height : 0;
  }
  _getLegendItemAt(e, a) {
    let s, o, u;
    if (wa(e, this.left, this.right) && wa(a, this.top, this.bottom)) {
      for (u = this.legendHitBoxes, s = 0; s < u.length; ++s)
        if (
          ((o = u[s]),
          wa(e, o.left, o.left + o.width) && wa(a, o.top, o.top + o.height))
        )
          return this.legendItems[s];
    }
    return null;
  }
  handleEvent(e) {
    const a = this.options;
    if (!tM(e.type, a)) return;
    const s = this._getLegendItemAt(e.x, e.y);
    if (e.type === 'mousemove' || e.type === 'mouseout') {
      const o = this._hoveredItem,
        u = Ww(o, s);
      (o && !u && jt(a.onLeave, [e, o, this], this),
        (this._hoveredItem = s),
        s && !u && jt(a.onHover, [e, s, this], this));
    } else s && jt(a.onClick, [e, s, this], this);
  }
}
function $w(i, e, a, s, o) {
  const u = Jw(s, i, e, a),
    c = Iw(o, s, e.lineHeight);
  return { itemWidth: u, itemHeight: c };
}
function Jw(i, e, a, s) {
  let o = i.text;
  return (
    o &&
      typeof o != 'string' &&
      (o = o.reduce((u, c) => (u.length > c.length ? u : c))),
    e + a.size / 2 + s.measureText(o).width
  );
}
function Iw(i, e, a) {
  let s = i;
  return (typeof e.text != 'string' && (s = cy(e, a)), s);
}
function cy(i, e) {
  const a = i.text ? i.text.length : 0;
  return e * a;
}
function tM(i, e) {
  return !!(
    ((i === 'mousemove' || i === 'mouseout') && (e.onHover || e.onLeave)) ||
    (e.onClick && (i === 'click' || i === 'mouseup'))
  );
}
var eM = {
  id: 'legend',
  _element: qp,
  start(i, e, a) {
    const s = (i.legend = new qp({ ctx: i.ctx, options: a, chart: i }));
    (qe.configure(i, s, a), qe.addBox(i, s));
  },
  stop(i) {
    (qe.removeBox(i, i.legend), delete i.legend);
  },
  beforeUpdate(i, e, a) {
    const s = i.legend;
    (qe.configure(i, s, a), (s.options = a));
  },
  afterUpdate(i) {
    const e = i.legend;
    (e.buildLabels(), e.adjustHitBoxes());
  },
  afterEvent(i, e) {
    e.replay || i.legend.handleEvent(e.event);
  },
  defaults: {
    display: !0,
    position: 'top',
    align: 'center',
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(i, e, a) {
      const s = e.datasetIndex,
        o = a.chart;
      o.isDatasetVisible(s)
        ? (o.hide(s), (e.hidden = !0))
        : (o.show(s), (e.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (i) => i.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(i) {
        const e = i.data.datasets,
          {
            labels: {
              usePointStyle: a,
              pointStyle: s,
              textAlign: o,
              color: u,
              useBorderRadius: c,
              borderRadius: h,
            },
          } = i.legend.options;
        return i._getSortedDatasetMetas().map((d) => {
          const g = d.controller.getStyle(a ? 0 : void 0),
            p = Ve(g.borderWidth);
          return {
            text: e[d.index].label,
            fillStyle: g.backgroundColor,
            fontColor: u,
            hidden: !d.visible,
            lineCap: g.borderCapStyle,
            lineDash: g.borderDash,
            lineDashOffset: g.borderDashOffset,
            lineJoin: g.borderJoinStyle,
            lineWidth: (p.width + p.height) / 4,
            strokeStyle: g.borderColor,
            pointStyle: s || g.pointStyle,
            rotation: g.rotation,
            textAlign: o || g.textAlign,
            borderRadius: c && (h || g.borderRadius),
            datasetIndex: d.index,
          };
        }, this);
      },
    },
    title: {
      color: (i) => i.chart.options.color,
      display: !1,
      position: 'center',
      text: '',
    },
  },
  descriptors: {
    _scriptable: (i) => !i.startsWith('on'),
    labels: {
      _scriptable: (i) => !['generateLabels', 'filter', 'sort'].includes(i),
    },
  },
};
class fy extends Ni {
  constructor(e) {
    (super(),
      (this.chart = e.chart),
      (this.options = e.options),
      (this.ctx = e.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0));
  }
  update(e, a) {
    const s = this.options;
    if (((this.left = 0), (this.top = 0), !s.display)) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    ((this.width = this.right = e), (this.height = this.bottom = a));
    const o = Ft(s.text) ? s.text.length : 1;
    this._padding = Ve(s.padding);
    const u = o * re(s.font).lineHeight + this._padding.height;
    this.isHorizontal() ? (this.height = u) : (this.width = u);
  }
  isHorizontal() {
    const e = this.options.position;
    return e === 'top' || e === 'bottom';
  }
  _drawArgs(e) {
    const { top: a, left: s, bottom: o, right: u, options: c } = this,
      h = c.align;
    let d = 0,
      g,
      p,
      b;
    return (
      this.isHorizontal()
        ? ((p = oe(h, s, u)), (b = a + e), (g = u - s))
        : (c.position === 'left'
            ? ((p = s + e), (b = oe(h, o, a)), (d = Jt * -0.5))
            : ((p = u - e), (b = oe(h, a, o)), (d = Jt * 0.5)),
          (g = o - a)),
      { titleX: p, titleY: b, maxWidth: g, rotation: d }
    );
  }
  draw() {
    const e = this.ctx,
      a = this.options;
    if (!a.display) return;
    const s = re(a.font),
      u = s.lineHeight / 2 + this._padding.top,
      { titleX: c, titleY: h, maxWidth: d, rotation: g } = this._drawArgs(u);
    Is(e, a.text, 0, 0, s, {
      color: a.color,
      maxWidth: d,
      rotation: g,
      textAlign: xf(a.align),
      textBaseline: 'middle',
      translation: [c, h],
    });
  }
}
function nM(i, e) {
  const a = new fy({ ctx: i.ctx, options: e, chart: i });
  (qe.configure(i, a, e), qe.addBox(i, a), (i.titleBlock = a));
}
var iM = {
  id: 'title',
  _element: fy,
  start(i, e, a) {
    nM(i, a);
  },
  stop(i) {
    const e = i.titleBlock;
    (qe.removeBox(i, e), delete i.titleBlock);
  },
  beforeUpdate(i, e, a) {
    const s = i.titleBlock;
    (qe.configure(i, s, a), (s.options = a));
  },
  defaults: {
    align: 'center',
    display: !1,
    font: { weight: 'bold' },
    fullSize: !0,
    padding: 10,
    position: 'top',
    text: '',
    weight: 2e3,
  },
  defaultRoutes: { color: 'color' },
  descriptors: { _scriptable: !0, _indexable: !1 },
};
const Ys = {
  average(i) {
    if (!i.length) return !1;
    let e,
      a,
      s = new Set(),
      o = 0,
      u = 0;
    for (e = 0, a = i.length; e < a; ++e) {
      const h = i[e].element;
      if (h && h.hasValue()) {
        const d = h.tooltipPosition();
        (s.add(d.x), (o += d.y), ++u);
      }
    }
    return u === 0 || s.size === 0
      ? !1
      : { x: [...s].reduce((h, d) => h + d) / s.size, y: o / u };
  },
  nearest(i, e) {
    if (!i.length) return !1;
    let a = e.x,
      s = e.y,
      o = Number.POSITIVE_INFINITY,
      u,
      c,
      h;
    for (u = 0, c = i.length; u < c; ++u) {
      const d = i[u].element;
      if (d && d.hasValue()) {
        const g = d.getCenterPoint(),
          p = Zc(e, g);
        p < o && ((o = p), (h = d));
      }
    }
    if (h) {
      const d = h.tooltipPosition();
      ((a = d.x), (s = d.y));
    }
    return { x: a, y: s };
  },
};
function sn(i, e) {
  return (e && (Ft(e) ? Array.prototype.push.apply(i, e) : i.push(e)), i);
}
function Tn(i) {
  return (typeof i == 'string' || i instanceof String) &&
    i.indexOf(`
`) > -1
    ? i.split(`
`)
    : i;
}
function aM(i, e) {
  const { element: a, datasetIndex: s, index: o } = e,
    u = i.getDatasetMeta(s).controller,
    { label: c, value: h } = u.getLabelAndValue(o);
  return {
    chart: i,
    label: c,
    parsed: u.getParsed(o),
    raw: i.data.datasets[s].data[o],
    formattedValue: h,
    dataset: u.getDataset(),
    dataIndex: o,
    datasetIndex: s,
    element: a,
  };
}
function Vp(i, e) {
  const a = i.chart.ctx,
    { body: s, footer: o, title: u } = i,
    { boxWidth: c, boxHeight: h } = e,
    d = re(e.bodyFont),
    g = re(e.titleFont),
    p = re(e.footerFont),
    b = u.length,
    v = o.length,
    S = s.length,
    w = Ve(e.padding);
  let E = w.height,
    M = 0,
    D = s.reduce(
      (G, B) => G + B.before.length + B.lines.length + B.after.length,
      0
    );
  if (
    ((D += i.beforeBody.length + i.afterBody.length),
    b &&
      (E += b * g.lineHeight + (b - 1) * e.titleSpacing + e.titleMarginBottom),
    D)
  ) {
    const G = e.displayColors ? Math.max(h, d.lineHeight) : d.lineHeight;
    E += S * G + (D - S) * d.lineHeight + (D - 1) * e.bodySpacing;
  }
  v && (E += e.footerMarginTop + v * p.lineHeight + (v - 1) * e.footerSpacing);
  let k = 0;
  const Y = function (G) {
    M = Math.max(M, a.measureText(G).width + k);
  };
  return (
    a.save(),
    (a.font = g.string),
    Mt(i.title, Y),
    (a.font = d.string),
    Mt(i.beforeBody.concat(i.afterBody), Y),
    (k = e.displayColors ? c + 2 + e.boxPadding : 0),
    Mt(s, (G) => {
      (Mt(G.before, Y), Mt(G.lines, Y), Mt(G.after, Y));
    }),
    (k = 0),
    (a.font = p.string),
    Mt(i.footer, Y),
    a.restore(),
    (M += w.width),
    { width: M, height: E }
  );
}
function sM(i, e) {
  const { y: a, height: s } = e;
  return a < s / 2 ? 'top' : a > i.height - s / 2 ? 'bottom' : 'center';
}
function lM(i, e, a, s) {
  const { x: o, width: u } = s,
    c = a.caretSize + a.caretPadding;
  if ((i === 'left' && o + u + c > e.width) || (i === 'right' && o - u - c < 0))
    return !0;
}
function oM(i, e, a, s) {
  const { x: o, width: u } = a,
    {
      width: c,
      chartArea: { left: h, right: d },
    } = i;
  let g = 'center';
  return (
    s === 'center'
      ? (g = o <= (h + d) / 2 ? 'left' : 'right')
      : o <= u / 2
        ? (g = 'left')
        : o >= c - u / 2 && (g = 'right'),
    lM(g, i, e, a) && (g = 'center'),
    g
  );
}
function Xp(i, e, a) {
  const s = a.yAlign || e.yAlign || sM(i, a);
  return { xAlign: a.xAlign || e.xAlign || oM(i, e, a, s), yAlign: s };
}
function rM(i, e) {
  let { x: a, width: s } = i;
  return (e === 'right' ? (a -= s) : e === 'center' && (a -= s / 2), a);
}
function uM(i, e, a) {
  let { y: s, height: o } = i;
  return (
    e === 'top' ? (s += a) : e === 'bottom' ? (s -= o + a) : (s -= o / 2),
    s
  );
}
function Gp(i, e, a, s) {
  const { caretSize: o, caretPadding: u, cornerRadius: c } = i,
    { xAlign: h, yAlign: d } = a,
    g = o + u,
    { topLeft: p, topRight: b, bottomLeft: v, bottomRight: S } = Ps(c);
  let w = rM(e, h);
  const E = uM(e, d, g);
  return (
    d === 'center'
      ? h === 'left'
        ? (w += g)
        : h === 'right' && (w -= g)
      : h === 'left'
        ? (w -= Math.max(p, v) + o)
        : h === 'right' && (w += Math.max(b, S) + o),
    { x: Ye(w, 0, s.width - e.width), y: Ye(E, 0, s.height - e.height) }
  );
}
function Ho(i, e, a) {
  const s = Ve(a.padding);
  return e === 'center'
    ? i.x + i.width / 2
    : e === 'right'
      ? i.x + i.width - s.right
      : i.x + s.left;
}
function Pp(i) {
  return sn([], Tn(i));
}
function cM(i, e, a) {
  return zi(i, { tooltip: e, tooltipItems: a, type: 'tooltip' });
}
function Fp(i, e) {
  const a = e && e.dataset && e.dataset.tooltip && e.dataset.tooltip.callbacks;
  return a ? i.override(a) : i;
}
const hy = {
  beforeTitle: Mn,
  title(i) {
    if (i.length > 0) {
      const e = i[0],
        a = e.chart.data.labels,
        s = a ? a.length : 0;
      if (this && this.options && this.options.mode === 'dataset')
        return e.dataset.label || '';
      if (e.label) return e.label;
      if (s > 0 && e.dataIndex < s) return a[e.dataIndex];
    }
    return '';
  },
  afterTitle: Mn,
  beforeBody: Mn,
  beforeLabel: Mn,
  label(i) {
    if (this && this.options && this.options.mode === 'dataset')
      return i.label + ': ' + i.formattedValue || i.formattedValue;
    let e = i.dataset.label || '';
    e && (e += ': ');
    const a = i.formattedValue;
    return (Ct(a) || (e += a), e);
  },
  labelColor(i) {
    const a = i.chart
      .getDatasetMeta(i.datasetIndex)
      .controller.getStyle(i.dataIndex);
    return {
      borderColor: a.borderColor,
      backgroundColor: a.backgroundColor,
      borderWidth: a.borderWidth,
      borderDash: a.borderDash,
      borderDashOffset: a.borderDashOffset,
      borderRadius: 0,
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(i) {
    const a = i.chart
      .getDatasetMeta(i.datasetIndex)
      .controller.getStyle(i.dataIndex);
    return { pointStyle: a.pointStyle, rotation: a.rotation };
  },
  afterLabel: Mn,
  afterBody: Mn,
  beforeFooter: Mn,
  footer: Mn,
  afterFooter: Mn,
};
function ye(i, e, a, s) {
  const o = i[e].call(a, s);
  return typeof o > 'u' ? hy[e].call(a, s) : o;
}
class Qp extends Ni {
  static positioners = Ys;
  constructor(e) {
    (super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = e.chart),
      (this.options = e.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0));
  }
  initialize(e) {
    ((this.options = e),
      (this._cachedAnimations = void 0),
      (this.$context = void 0));
  }
  _resolveAnimations() {
    const e = this._cachedAnimations;
    if (e) return e;
    const a = this.chart,
      s = this.options.setContext(this.getContext()),
      o = s.enabled && a.options.animation && s.animations,
      u = new Z0(this.chart, o);
    return (o._cacheable && (this._cachedAnimations = Object.freeze(u)), u);
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = cM(this.chart.getContext(), this, this._tooltipItems))
    );
  }
  getTitle(e, a) {
    const { callbacks: s } = a,
      o = ye(s, 'beforeTitle', this, e),
      u = ye(s, 'title', this, e),
      c = ye(s, 'afterTitle', this, e);
    let h = [];
    return ((h = sn(h, Tn(o))), (h = sn(h, Tn(u))), (h = sn(h, Tn(c))), h);
  }
  getBeforeBody(e, a) {
    return Pp(ye(a.callbacks, 'beforeBody', this, e));
  }
  getBody(e, a) {
    const { callbacks: s } = a,
      o = [];
    return (
      Mt(e, (u) => {
        const c = { before: [], lines: [], after: [] },
          h = Fp(s, u);
        (sn(c.before, Tn(ye(h, 'beforeLabel', this, u))),
          sn(c.lines, ye(h, 'label', this, u)),
          sn(c.after, Tn(ye(h, 'afterLabel', this, u))),
          o.push(c));
      }),
      o
    );
  }
  getAfterBody(e, a) {
    return Pp(ye(a.callbacks, 'afterBody', this, e));
  }
  getFooter(e, a) {
    const { callbacks: s } = a,
      o = ye(s, 'beforeFooter', this, e),
      u = ye(s, 'footer', this, e),
      c = ye(s, 'afterFooter', this, e);
    let h = [];
    return ((h = sn(h, Tn(o))), (h = sn(h, Tn(u))), (h = sn(h, Tn(c))), h);
  }
  _createItems(e) {
    const a = this._active,
      s = this.chart.data,
      o = [],
      u = [],
      c = [];
    let h = [],
      d,
      g;
    for (d = 0, g = a.length; d < g; ++d) h.push(aM(this.chart, a[d]));
    return (
      e.filter && (h = h.filter((p, b, v) => e.filter(p, b, v, s))),
      e.itemSort && (h = h.sort((p, b) => e.itemSort(p, b, s))),
      Mt(h, (p) => {
        const b = Fp(e.callbacks, p);
        (o.push(ye(b, 'labelColor', this, p)),
          u.push(ye(b, 'labelPointStyle', this, p)),
          c.push(ye(b, 'labelTextColor', this, p)));
      }),
      (this.labelColors = o),
      (this.labelPointStyles = u),
      (this.labelTextColors = c),
      (this.dataPoints = h),
      h
    );
  }
  update(e, a) {
    const s = this.options.setContext(this.getContext()),
      o = this._active;
    let u,
      c = [];
    if (!o.length) this.opacity !== 0 && (u = { opacity: 0 });
    else {
      const h = Ys[s.position].call(this, o, this._eventPosition);
      ((c = this._createItems(s)),
        (this.title = this.getTitle(c, s)),
        (this.beforeBody = this.getBeforeBody(c, s)),
        (this.body = this.getBody(c, s)),
        (this.afterBody = this.getAfterBody(c, s)),
        (this.footer = this.getFooter(c, s)));
      const d = (this._size = Vp(this, s)),
        g = Object.assign({}, h, d),
        p = Xp(this.chart, s, g),
        b = Gp(s, g, p, this.chart);
      ((this.xAlign = p.xAlign),
        (this.yAlign = p.yAlign),
        (u = {
          opacity: 1,
          x: b.x,
          y: b.y,
          width: d.width,
          height: d.height,
          caretX: h.x,
          caretY: h.y,
        }));
    }
    ((this._tooltipItems = c),
      (this.$context = void 0),
      u && this._resolveAnimations().update(this, u),
      e &&
        s.external &&
        s.external.call(this, { chart: this.chart, tooltip: this, replay: a }));
  }
  drawCaret(e, a, s, o) {
    const u = this.getCaretPosition(e, s, o);
    (a.lineTo(u.x1, u.y1), a.lineTo(u.x2, u.y2), a.lineTo(u.x3, u.y3));
  }
  getCaretPosition(e, a, s) {
    const { xAlign: o, yAlign: u } = this,
      { caretSize: c, cornerRadius: h } = s,
      { topLeft: d, topRight: g, bottomLeft: p, bottomRight: b } = Ps(h),
      { x: v, y: S } = e,
      { width: w, height: E } = a;
    let M, D, k, Y, G, B;
    return (
      u === 'center'
        ? ((G = S + E / 2),
          o === 'left'
            ? ((M = v), (D = M - c), (Y = G + c), (B = G - c))
            : ((M = v + w), (D = M + c), (Y = G - c), (B = G + c)),
          (k = M))
        : (o === 'left'
            ? (D = v + Math.max(d, p) + c)
            : o === 'right'
              ? (D = v + w - Math.max(g, b) - c)
              : (D = this.caretX),
          u === 'top'
            ? ((Y = S), (G = Y - c), (M = D - c), (k = D + c))
            : ((Y = S + E), (G = Y + c), (M = D + c), (k = D - c)),
          (B = Y)),
      { x1: M, x2: D, x3: k, y1: Y, y2: G, y3: B }
    );
  }
  drawTitle(e, a, s) {
    const o = this.title,
      u = o.length;
    let c, h, d;
    if (u) {
      const g = Ma(s.rtl, this.x, this.width);
      for (
        e.x = Ho(this, s.titleAlign, s),
          a.textAlign = g.textAlign(s.titleAlign),
          a.textBaseline = 'middle',
          c = re(s.titleFont),
          h = s.titleSpacing,
          a.fillStyle = s.titleColor,
          a.font = c.string,
          d = 0;
        d < u;
        ++d
      )
        (a.fillText(o[d], g.x(e.x), e.y + c.lineHeight / 2),
          (e.y += c.lineHeight + h),
          d + 1 === u && (e.y += s.titleMarginBottom - h));
    }
  }
  _drawColorBox(e, a, s, o, u) {
    const c = this.labelColors[s],
      h = this.labelPointStyles[s],
      { boxHeight: d, boxWidth: g } = u,
      p = re(u.bodyFont),
      b = Ho(this, 'left', u),
      v = o.x(b),
      S = d < p.lineHeight ? (p.lineHeight - d) / 2 : 0,
      w = a.y + S;
    if (u.usePointStyle) {
      const E = {
          radius: Math.min(g, d) / 2,
          pointStyle: h.pointStyle,
          rotation: h.rotation,
          borderWidth: 1,
        },
        M = o.leftForLtr(v, g) + g / 2,
        D = w + d / 2;
      ((e.strokeStyle = u.multiKeyBackground),
        (e.fillStyle = u.multiKeyBackground),
        Wc(e, E, M, D),
        (e.strokeStyle = c.borderColor),
        (e.fillStyle = c.backgroundColor),
        Wc(e, E, M, D));
    } else {
      ((e.lineWidth = bt(c.borderWidth)
        ? Math.max(...Object.values(c.borderWidth))
        : c.borderWidth || 1),
        (e.strokeStyle = c.borderColor),
        e.setLineDash(c.borderDash || []),
        (e.lineDashOffset = c.borderDashOffset || 0));
      const E = o.leftForLtr(v, g),
        M = o.leftForLtr(o.xPlus(v, 1), g - 2),
        D = Ps(c.borderRadius);
      Object.values(D).some((k) => k !== 0)
        ? (e.beginPath(),
          (e.fillStyle = u.multiKeyBackground),
          $c(e, { x: E, y: w, w: g, h: d, radius: D }),
          e.fill(),
          e.stroke(),
          (e.fillStyle = c.backgroundColor),
          e.beginPath(),
          $c(e, { x: M, y: w + 1, w: g - 2, h: d - 2, radius: D }),
          e.fill())
        : ((e.fillStyle = u.multiKeyBackground),
          e.fillRect(E, w, g, d),
          e.strokeRect(E, w, g, d),
          (e.fillStyle = c.backgroundColor),
          e.fillRect(M, w + 1, g - 2, d - 2));
    }
    e.fillStyle = this.labelTextColors[s];
  }
  drawBody(e, a, s) {
    const { body: o } = this,
      {
        bodySpacing: u,
        bodyAlign: c,
        displayColors: h,
        boxHeight: d,
        boxWidth: g,
        boxPadding: p,
      } = s,
      b = re(s.bodyFont);
    let v = b.lineHeight,
      S = 0;
    const w = Ma(s.rtl, this.x, this.width),
      E = function (Q) {
        (a.fillText(Q, w.x(e.x + S), e.y + v / 2), (e.y += v + u));
      },
      M = w.textAlign(c);
    let D, k, Y, G, B, F, K;
    for (
      a.textAlign = c,
        a.textBaseline = 'middle',
        a.font = b.string,
        e.x = Ho(this, M, s),
        a.fillStyle = s.bodyColor,
        Mt(this.beforeBody, E),
        S = h && M !== 'right' ? (c === 'center' ? g / 2 + p : g + 2 + p) : 0,
        G = 0,
        F = o.length;
      G < F;
      ++G
    ) {
      for (
        D = o[G],
          k = this.labelTextColors[G],
          a.fillStyle = k,
          Mt(D.before, E),
          Y = D.lines,
          h &&
            Y.length &&
            (this._drawColorBox(a, e, G, w, s),
            (v = Math.max(b.lineHeight, d))),
          B = 0,
          K = Y.length;
        B < K;
        ++B
      )
        (E(Y[B]), (v = b.lineHeight));
      Mt(D.after, E);
    }
    ((S = 0), (v = b.lineHeight), Mt(this.afterBody, E), (e.y -= u));
  }
  drawFooter(e, a, s) {
    const o = this.footer,
      u = o.length;
    let c, h;
    if (u) {
      const d = Ma(s.rtl, this.x, this.width);
      for (
        e.x = Ho(this, s.footerAlign, s),
          e.y += s.footerMarginTop,
          a.textAlign = d.textAlign(s.footerAlign),
          a.textBaseline = 'middle',
          c = re(s.footerFont),
          a.fillStyle = s.footerColor,
          a.font = c.string,
          h = 0;
        h < u;
        ++h
      )
        (a.fillText(o[h], d.x(e.x), e.y + c.lineHeight / 2),
          (e.y += c.lineHeight + s.footerSpacing));
    }
  }
  drawBackground(e, a, s, o) {
    const { xAlign: u, yAlign: c } = this,
      { x: h, y: d } = e,
      { width: g, height: p } = s,
      {
        topLeft: b,
        topRight: v,
        bottomLeft: S,
        bottomRight: w,
      } = Ps(o.cornerRadius);
    ((a.fillStyle = o.backgroundColor),
      (a.strokeStyle = o.borderColor),
      (a.lineWidth = o.borderWidth),
      a.beginPath(),
      a.moveTo(h + b, d),
      c === 'top' && this.drawCaret(e, a, s, o),
      a.lineTo(h + g - v, d),
      a.quadraticCurveTo(h + g, d, h + g, d + v),
      c === 'center' && u === 'right' && this.drawCaret(e, a, s, o),
      a.lineTo(h + g, d + p - w),
      a.quadraticCurveTo(h + g, d + p, h + g - w, d + p),
      c === 'bottom' && this.drawCaret(e, a, s, o),
      a.lineTo(h + S, d + p),
      a.quadraticCurveTo(h, d + p, h, d + p - S),
      c === 'center' && u === 'left' && this.drawCaret(e, a, s, o),
      a.lineTo(h, d + b),
      a.quadraticCurveTo(h, d, h + b, d),
      a.closePath(),
      a.fill(),
      o.borderWidth > 0 && a.stroke());
  }
  _updateAnimationTarget(e) {
    const a = this.chart,
      s = this.$animations,
      o = s && s.x,
      u = s && s.y;
    if (o || u) {
      const c = Ys[e.position].call(this, this._active, this._eventPosition);
      if (!c) return;
      const h = (this._size = Vp(this, e)),
        d = Object.assign({}, c, this._size),
        g = Xp(a, e, d),
        p = Gp(e, d, g, a);
      (o._to !== p.x || u._to !== p.y) &&
        ((this.xAlign = g.xAlign),
        (this.yAlign = g.yAlign),
        (this.width = h.width),
        (this.height = h.height),
        (this.caretX = c.x),
        (this.caretY = c.y),
        this._resolveAnimations().update(this, p));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(e) {
    const a = this.options.setContext(this.getContext());
    let s = this.opacity;
    if (!s) return;
    this._updateAnimationTarget(a);
    const o = { width: this.width, height: this.height },
      u = { x: this.x, y: this.y };
    s = Math.abs(s) < 0.001 ? 0 : s;
    const c = Ve(a.padding),
      h =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    a.enabled &&
      h &&
      (e.save(),
      (e.globalAlpha = s),
      this.drawBackground(u, e, o, a),
      V0(e, a.textDirection),
      (u.y += c.top),
      this.drawTitle(u, e, a),
      this.drawBody(u, e, a),
      this.drawFooter(u, e, a),
      X0(e, a.textDirection),
      e.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(e, a) {
    const s = this._active,
      o = e.map(({ datasetIndex: h, index: d }) => {
        const g = this.chart.getDatasetMeta(h);
        if (!g) throw new Error('Cannot find a dataset at index ' + h);
        return { datasetIndex: h, element: g.data[d], index: d };
      }),
      u = !Go(s, o),
      c = this._positionChanged(o, a);
    (u || c) &&
      ((this._active = o),
      (this._eventPosition = a),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(e, a, s = !0) {
    if (a && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const o = this.options,
      u = this._active || [],
      c = this._getActiveElements(e, u, a, s),
      h = this._positionChanged(c, e),
      d = a || !Go(c, u) || h;
    return (
      d &&
        ((this._active = c),
        (o.enabled || o.external) &&
          ((this._eventPosition = { x: e.x, y: e.y }), this.update(!0, a))),
      d
    );
  }
  _getActiveElements(e, a, s, o) {
    const u = this.options;
    if (e.type === 'mouseout') return [];
    if (!o)
      return a.filter(
        (h) =>
          this.chart.data.datasets[h.datasetIndex] &&
          this.chart
            .getDatasetMeta(h.datasetIndex)
            .controller.getParsed(h.index) !== void 0
      );
    const c = this.chart.getElementsAtEventForMode(e, u.mode, u, s);
    return (u.reverse && c.reverse(), c);
  }
  _positionChanged(e, a) {
    const { caretX: s, caretY: o, options: u } = this,
      c = Ys[u.position].call(this, e, a);
    return c !== !1 && (s !== c.x || o !== c.y);
  }
}
var fM = {
  id: 'tooltip',
  _element: Qp,
  positioners: Ys,
  afterInit(i, e, a) {
    a && (i.tooltip = new Qp({ chart: i, options: a }));
  },
  beforeUpdate(i, e, a) {
    i.tooltip && i.tooltip.initialize(a);
  },
  reset(i, e, a) {
    i.tooltip && i.tooltip.initialize(a);
  },
  afterDraw(i) {
    const e = i.tooltip;
    if (e && e._willRender()) {
      const a = { tooltip: e };
      if (i.notifyPlugins('beforeTooltipDraw', { ...a, cancelable: !0 }) === !1)
        return;
      (e.draw(i.ctx), i.notifyPlugins('afterTooltipDraw', a));
    }
  },
  afterEvent(i, e) {
    if (i.tooltip) {
      const a = e.replay;
      i.tooltip.handleEvent(e.event, a, e.inChartArea) && (e.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: 'average',
    backgroundColor: 'rgba(0,0,0,0.8)',
    titleColor: '#fff',
    titleFont: { weight: 'bold' },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: 'left',
    bodyColor: '#fff',
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: 'left',
    footerColor: '#fff',
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: { weight: 'bold' },
    footerAlign: 'left',
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (i, e) => e.bodyFont.size,
    boxWidth: (i, e) => e.bodyFont.size,
    multiKeyBackground: '#fff',
    displayColors: !0,
    boxPadding: 0,
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    animation: { duration: 400, easing: 'easeOutQuart' },
    animations: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY'],
      },
      opacity: { easing: 'linear', duration: 200 },
    },
    callbacks: hy,
  },
  defaultRoutes: { bodyFont: 'font', footerFont: 'font', titleFont: 'font' },
  descriptors: {
    _scriptable: (i) => i !== 'filter' && i !== 'itemSort' && i !== 'external',
    _indexable: !1,
    callbacks: { _scriptable: !1, _indexable: !1 },
    animation: { _fallback: !1 },
    animations: { _fallback: 'animation' },
  },
  additionalOptionScopes: ['interaction'],
};
const hM = (i, e, a, s) => (
  typeof e == 'string'
    ? ((a = i.push(e) - 1), s.unshift({ index: a, label: e }))
    : isNaN(e) && (a = null),
  a
);
function dM(i, e, a, s) {
  const o = i.indexOf(e);
  if (o === -1) return hM(i, e, a, s);
  const u = i.lastIndexOf(e);
  return o !== u ? a : o;
}
const mM = (i, e) => (i === null ? null : Ye(Math.round(i), 0, e));
function Zp(i) {
  const e = this.getLabels();
  return i >= 0 && i < e.length ? e[i] : i;
}
class gM extends Ra {
  static id = 'category';
  static defaults = { ticks: { callback: Zp } };
  constructor(e) {
    (super(e),
      (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = []));
  }
  init(e) {
    const a = this._addedLabels;
    if (a.length) {
      const s = this.getLabels();
      for (const { index: o, label: u } of a) s[o] === u && s.splice(o, 1);
      this._addedLabels = [];
    }
    super.init(e);
  }
  parse(e, a) {
    if (Ct(e)) return null;
    const s = this.getLabels();
    return (
      (a =
        isFinite(a) && s[a] === e ? a : dM(s, e, pt(a, e), this._addedLabels)),
      mM(a, s.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: e, maxDefined: a } = this.getUserBounds();
    let { min: s, max: o } = this.getMinMax(!0);
    (this.options.bounds === 'ticks' &&
      (e || (s = 0), a || (o = this.getLabels().length - 1)),
      (this.min = s),
      (this.max = o));
  }
  buildTicks() {
    const e = this.min,
      a = this.max,
      s = this.options.offset,
      o = [];
    let u = this.getLabels();
    ((u = e === 0 && a === u.length - 1 ? u : u.slice(e, a + 1)),
      (this._valueRange = Math.max(u.length - (s ? 0 : 1), 1)),
      (this._startValue = this.min - (s ? 0.5 : 0)));
    for (let c = e; c <= a; c++) o.push({ value: c });
    return o;
  }
  getLabelForValue(e) {
    return Zp.call(this, e);
  }
  configure() {
    (super.configure(),
      this.isHorizontal() || (this._reversePixels = !this._reversePixels));
  }
  getPixelForValue(e) {
    return (
      typeof e != 'number' && (e = this.parse(e)),
      e === null
        ? NaN
        : this.getPixelForDecimal((e - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(e) {
    const a = this.ticks;
    return e < 0 || e > a.length - 1 ? null : this.getPixelForValue(a[e].value);
  }
  getValueForPixel(e) {
    return Math.round(
      this._startValue + this.getDecimalForPixel(e) * this._valueRange
    );
  }
  getBasePixel() {
    return this.bottom;
  }
}
function pM(i, e) {
  const a = [],
    {
      bounds: o,
      step: u,
      min: c,
      max: h,
      precision: d,
      count: g,
      maxTicks: p,
      maxDigits: b,
      includeBounds: v,
    } = i,
    S = u || 1,
    w = p - 1,
    { min: E, max: M } = e,
    D = !Ct(c),
    k = !Ct(h),
    Y = !Ct(g),
    G = (M - E) / (b + 1);
  let B = Qg((M - E) / w / S) * S,
    F,
    K,
    Q,
    J;
  if (B < 1e-14 && !D && !k) return [{ value: E }, { value: M }];
  ((J = Math.ceil(M / B) - Math.floor(E / B)),
    J > w && (B = Qg((J * B) / w / S) * S),
    Ct(d) || ((F = Math.pow(10, d)), (B = Math.ceil(B * F) / F)),
    o === 'ticks'
      ? ((K = Math.floor(E / B) * B), (Q = Math.ceil(M / B) * B))
      : ((K = E), (Q = M)),
    D && k && u && k_((h - c) / u, B / 1e3)
      ? ((J = Math.round(Math.min((h - c) / B, p))),
        (B = (h - c) / J),
        (K = c),
        (Q = h))
      : Y
        ? ((K = D ? c : K), (Q = k ? h : Q), (J = g - 1), (B = (Q - K) / J))
        : ((J = (Q - K) / B),
          Vs(J, Math.round(J), B / 1e3)
            ? (J = Math.round(J))
            : (J = Math.ceil(J))));
  const rt = Math.max(Zg(B), Zg(K));
  ((F = Math.pow(10, Ct(d) ? rt : d)),
    (K = Math.round(K * F) / F),
    (Q = Math.round(Q * F) / F));
  let st = 0;
  for (
    D &&
    (v && K !== c
      ? (a.push({ value: c }),
        K < c && st++,
        Vs(Math.round((K + st * B) * F) / F, c, Kp(c, G, i)) && st++)
      : K < c && st++);
    st < J;
    ++st
  ) {
    const ot = Math.round((K + st * B) * F) / F;
    if (k && ot > h) break;
    a.push({ value: ot });
  }
  return (
    k && v && Q !== h
      ? a.length && Vs(a[a.length - 1].value, h, Kp(h, G, i))
        ? (a[a.length - 1].value = h)
        : a.push({ value: h })
      : (!k || Q === h) && a.push({ value: Q }),
    a
  );
}
function Kp(i, e, { horizontal: a, minRotation: s }) {
  const o = Ai(s),
    u = (a ? Math.sin(o) : Math.cos(o)) || 0.001,
    c = 0.75 * e * ('' + i).length;
  return Math.min(e / u, c);
}
class yM extends Ra {
  constructor(e) {
    (super(e),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0));
  }
  parse(e, a) {
    return Ct(e) ||
      ((typeof e == 'number' || e instanceof Number) && !isFinite(+e))
      ? null
      : +e;
  }
  handleTickRangeOptions() {
    const { beginAtZero: e } = this.options,
      { minDefined: a, maxDefined: s } = this.getUserBounds();
    let { min: o, max: u } = this;
    const c = (d) => (o = a ? o : d),
      h = (d) => (u = s ? u : d);
    if (e) {
      const d = Ea(o),
        g = Ea(u);
      d < 0 && g < 0 ? h(0) : d > 0 && g > 0 && c(0);
    }
    if (o === u) {
      let d = u === 0 ? 1 : Math.abs(u * 0.05);
      (h(u + d), e || c(o - d));
    }
    ((this.min = o), (this.max = u));
  }
  getTickLimit() {
    const e = this.options.ticks;
    let { maxTicksLimit: a, stepSize: s } = e,
      o;
    return (
      s
        ? ((o = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1),
          o > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${o} ticks. Limiting to 1000.`
            ),
            (o = 1e3)))
        : ((o = this.computeTickLimit()), (a = a || 11)),
      a && (o = Math.min(a, o)),
      o
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const e = this.options,
      a = e.ticks;
    let s = this.getTickLimit();
    s = Math.max(2, s);
    const o = {
        maxTicks: s,
        bounds: e.bounds,
        min: e.min,
        max: e.max,
        precision: a.precision,
        step: a.stepSize,
        count: a.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: a.minRotation || 0,
        includeBounds: a.includeBounds !== !1,
      },
      u = this._range || this,
      c = pM(o, u);
    return (
      e.bounds === 'ticks' && L_(c, this, 'value'),
      e.reverse
        ? (c.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      c
    );
  }
  configure() {
    const e = this.ticks;
    let a = this.min,
      s = this.max;
    if ((super.configure(), this.options.offset && e.length)) {
      const o = (s - a) / Math.max(e.length - 1, 1) / 2;
      ((a -= o), (s += o));
    }
    ((this._startValue = a), (this._endValue = s), (this._valueRange = s - a));
  }
  getLabelForValue(e) {
    return z0(e, this.chart.options.locale, this.options.ticks.format);
  }
}
class bM extends yM {
  static id = 'linear';
  static defaults = { ticks: { callback: N0.formatters.numeric } };
  determineDataLimits() {
    const { min: e, max: a } = this.getMinMax(!0);
    ((this.min = ue(e) ? e : 0),
      (this.max = ue(a) ? a : 1),
      this.handleTickRangeOptions());
  }
  computeTickLimit() {
    const e = this.isHorizontal(),
      a = e ? this.width : this.height,
      s = Ai(this.options.ticks.minRotation),
      o = (e ? Math.sin(s) : Math.cos(s)) || 0.001,
      u = this._resolveTickFontOptions(0);
    return Math.ceil(a / Math.min(40, u.lineHeight / o));
  }
  getPixelForValue(e) {
    return e === null
      ? NaN
      : this.getPixelForDecimal((e - this._startValue) / this._valueRange);
  }
  getValueForPixel(e) {
    return this._startValue + this.getDecimalForPixel(e) * this._valueRange;
  }
}
const rr = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  be = Object.keys(rr);
function Wp(i, e) {
  return i - e;
}
function $p(i, e) {
  if (Ct(e)) return null;
  const a = i._adapter,
    { parser: s, round: o, isoWeekday: u } = i._parseOpts;
  let c = e;
  return (
    typeof s == 'function' && (c = s(c)),
    ue(c) || (c = typeof s == 'string' ? a.parse(c, s) : a.parse(c)),
    c === null
      ? null
      : (o &&
          (c =
            o === 'week' && ($s(u) || u === !0)
              ? a.startOf(c, 'isoWeek', u)
              : a.startOf(c, o)),
        +c)
  );
}
function Jp(i, e, a, s) {
  const o = be.length;
  for (let u = be.indexOf(i); u < o - 1; ++u) {
    const c = rr[be[u]],
      h = c.steps ? c.steps : Number.MAX_SAFE_INTEGER;
    if (c.common && Math.ceil((a - e) / (h * c.size)) <= s) return be[u];
  }
  return be[o - 1];
}
function xM(i, e, a, s, o) {
  for (let u = be.length - 1; u >= be.indexOf(a); u--) {
    const c = be[u];
    if (rr[c].common && i._adapter.diff(o, s, c) >= e - 1) return c;
  }
  return be[a ? be.indexOf(a) : 0];
}
function vM(i) {
  for (let e = be.indexOf(i) + 1, a = be.length; e < a; ++e)
    if (rr[be[e]].common) return be[e];
}
function Ip(i, e, a) {
  if (!a) i[e] = !0;
  else if (a.length) {
    const { lo: s, hi: o } = bf(a, e),
      u = a[s] >= e ? a[s] : a[o];
    i[u] = !0;
  }
}
function _M(i, e, a, s) {
  const o = i._adapter,
    u = +o.startOf(e[0].value, s),
    c = e[e.length - 1].value;
  let h, d;
  for (h = u; h <= c; h = +o.add(h, 1, s))
    ((d = a[h]), d >= 0 && (e[d].major = !0));
  return e;
}
function t0(i, e, a) {
  const s = [],
    o = {},
    u = e.length;
  let c, h;
  for (c = 0; c < u; ++c)
    ((h = e[c]), (o[h] = c), s.push({ value: h, major: !1 }));
  return u === 0 || !a ? s : _M(i, s, o, a);
}
class e0 extends Ra {
  static id = 'time';
  static defaults = {
    bounds: 'data',
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: 'millisecond',
      displayFormats: {},
    },
    ticks: { source: 'auto', callback: !1, major: { enabled: !1 } },
  };
  constructor(e) {
    (super(e),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = 'day'),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0));
  }
  init(e, a = {}) {
    const s = e.time || (e.time = {}),
      o = (this._adapter = new f2._date(e.adapters.date));
    (o.init(a),
      qs(s.displayFormats, o.formats()),
      (this._parseOpts = {
        parser: s.parser,
        round: s.round,
        isoWeekday: s.isoWeekday,
      }),
      super.init(e),
      (this._normalized = a.normalized));
  }
  parse(e, a) {
    return e === void 0 ? null : $p(this, e);
  }
  beforeLayout() {
    (super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] }));
  }
  determineDataLimits() {
    const e = this.options,
      a = this._adapter,
      s = e.time.unit || 'day';
    let { min: o, max: u, minDefined: c, maxDefined: h } = this.getUserBounds();
    function d(g) {
      (!c && !isNaN(g.min) && (o = Math.min(o, g.min)),
        !h && !isNaN(g.max) && (u = Math.max(u, g.max)));
    }
    ((!c || !h) &&
      (d(this._getLabelBounds()),
      (e.bounds !== 'ticks' || e.ticks.source !== 'labels') &&
        d(this.getMinMax(!1))),
      (o = ue(o) && !isNaN(o) ? o : +a.startOf(Date.now(), s)),
      (u = ue(u) && !isNaN(u) ? u : +a.endOf(Date.now(), s) + 1),
      (this.min = Math.min(o, u - 1)),
      (this.max = Math.max(o + 1, u)));
  }
  _getLabelBounds() {
    const e = this.getLabelTimestamps();
    let a = Number.POSITIVE_INFINITY,
      s = Number.NEGATIVE_INFINITY;
    return (
      e.length && ((a = e[0]), (s = e[e.length - 1])),
      { min: a, max: s }
    );
  }
  buildTicks() {
    const e = this.options,
      a = e.time,
      s = e.ticks,
      o = s.source === 'labels' ? this.getLabelTimestamps() : this._generate();
    e.bounds === 'ticks' &&
      o.length &&
      ((this.min = this._userMin || o[0]),
      (this.max = this._userMax || o[o.length - 1]));
    const u = this.min,
      c = this.max,
      h = V_(o, u, c);
    return (
      (this._unit =
        a.unit ||
        (s.autoSkip
          ? Jp(a.minUnit, this.min, this.max, this._getLabelCapacity(u))
          : xM(this, h.length, a.minUnit, this.min, this.max))),
      (this._majorUnit =
        !s.major.enabled || this._unit === 'year' ? void 0 : vM(this._unit)),
      this.initOffsets(o),
      e.reverse && h.reverse(),
      t0(this, h, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((e) => +e.value));
  }
  initOffsets(e = []) {
    let a = 0,
      s = 0,
      o,
      u;
    this.options.offset &&
      e.length &&
      ((o = this.getDecimalForValue(e[0])),
      e.length === 1
        ? (a = 1 - o)
        : (a = (this.getDecimalForValue(e[1]) - o) / 2),
      (u = this.getDecimalForValue(e[e.length - 1])),
      e.length === 1
        ? (s = u)
        : (s = (u - this.getDecimalForValue(e[e.length - 2])) / 2));
    const c = e.length < 3 ? 0.5 : 0.25;
    ((a = Ye(a, 0, c)),
      (s = Ye(s, 0, c)),
      (this._offsets = { start: a, end: s, factor: 1 / (a + 1 + s) }));
  }
  _generate() {
    const e = this._adapter,
      a = this.min,
      s = this.max,
      o = this.options,
      u = o.time,
      c = u.unit || Jp(u.minUnit, a, s, this._getLabelCapacity(a)),
      h = pt(o.ticks.stepSize, 1),
      d = c === 'week' ? u.isoWeekday : !1,
      g = $s(d) || d === !0,
      p = {};
    let b = a,
      v,
      S;
    if (
      (g && (b = +e.startOf(b, 'isoWeek', d)),
      (b = +e.startOf(b, g ? 'day' : c)),
      e.diff(s, a, c) > 1e5 * h)
    )
      throw new Error(
        a + ' and ' + s + ' are too far apart with stepSize of ' + h + ' ' + c
      );
    const w = o.ticks.source === 'data' && this.getDataTimestamps();
    for (v = b, S = 0; v < s; v = +e.add(v, h, c), S++) Ip(p, v, w);
    return (
      (v === s || o.bounds === 'ticks' || S === 1) && Ip(p, v, w),
      Object.keys(p)
        .sort(Wp)
        .map((E) => +E)
    );
  }
  getLabelForValue(e) {
    const a = this._adapter,
      s = this.options.time;
    return s.tooltipFormat
      ? a.format(e, s.tooltipFormat)
      : a.format(e, s.displayFormats.datetime);
  }
  format(e, a) {
    const o = this.options.time.displayFormats,
      u = this._unit,
      c = a || o[u];
    return this._adapter.format(e, c);
  }
  _tickFormatFunction(e, a, s, o) {
    const u = this.options,
      c = u.ticks.callback;
    if (c) return jt(c, [e, a, s], this);
    const h = u.time.displayFormats,
      d = this._unit,
      g = this._majorUnit,
      p = d && h[d],
      b = g && h[g],
      v = s[a],
      S = g && b && v && v.major;
    return this._adapter.format(e, o || (S ? b : p));
  }
  generateTickLabels(e) {
    let a, s, o;
    for (a = 0, s = e.length; a < s; ++a)
      ((o = e[a]), (o.label = this._tickFormatFunction(o.value, a, e)));
  }
  getDecimalForValue(e) {
    return e === null ? NaN : (e - this.min) / (this.max - this.min);
  }
  getPixelForValue(e) {
    const a = this._offsets,
      s = this.getDecimalForValue(e);
    return this.getPixelForDecimal((a.start + s) * a.factor);
  }
  getValueForPixel(e) {
    const a = this._offsets,
      s = this.getDecimalForPixel(e) / a.factor - a.end;
    return this.min + s * (this.max - this.min);
  }
  _getLabelSize(e) {
    const a = this.options.ticks,
      s = this.ctx.measureText(e).width,
      o = Ai(this.isHorizontal() ? a.maxRotation : a.minRotation),
      u = Math.cos(o),
      c = Math.sin(o),
      h = this._resolveTickFontOptions(0).size;
    return { w: s * u + h * c, h: s * c + h * u };
  }
  _getLabelCapacity(e) {
    const a = this.options.time,
      s = a.displayFormats,
      o = s[a.unit] || s.millisecond,
      u = this._tickFormatFunction(e, 0, t0(this, [e], this._majorUnit), o),
      c = this._getLabelSize(u),
      h =
        Math.floor(this.isHorizontal() ? this.width / c.w : this.height / c.h) -
        1;
    return h > 0 ? h : 1;
  }
  getDataTimestamps() {
    let e = this._cache.data || [],
      a,
      s;
    if (e.length) return e;
    const o = this.getMatchingVisibleMetas();
    if (this._normalized && o.length)
      return (this._cache.data = o[0].controller.getAllParsedValues(this));
    for (a = 0, s = o.length; a < s; ++a)
      e = e.concat(o[a].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(e));
  }
  getLabelTimestamps() {
    const e = this._cache.labels || [];
    let a, s;
    if (e.length) return e;
    const o = this.getLabels();
    for (a = 0, s = o.length; a < s; ++a) e.push($p(this, o[a]));
    return (this._cache.labels = this._normalized ? e : this.normalize(e));
  }
  normalize(e) {
    return G_(e.sort(Wp));
  }
}
function Bo(i, e, a) {
  let s = 0,
    o = i.length - 1,
    u,
    c,
    h,
    d;
  a
    ? (e >= i[s].pos && e <= i[o].pos && ({ lo: s, hi: o } = Di(i, 'pos', e)),
      ({ pos: u, time: h } = i[s]),
      ({ pos: c, time: d } = i[o]))
    : (e >= i[s].time &&
        e <= i[o].time &&
        ({ lo: s, hi: o } = Di(i, 'time', e)),
      ({ time: u, pos: h } = i[s]),
      ({ time: c, pos: d } = i[o]));
  const g = c - u;
  return g ? h + ((d - h) * (e - u)) / g : h;
}
class ZM extends e0 {
  static id = 'timeseries';
  static defaults = e0.defaults;
  constructor(e) {
    (super(e),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0));
  }
  initOffsets() {
    const e = this._getTimestampsForTable(),
      a = (this._table = this.buildLookupTable(e));
    ((this._minPos = Bo(a, this.min)),
      (this._tableRange = Bo(a, this.max) - this._minPos),
      super.initOffsets(e));
  }
  buildLookupTable(e) {
    const { min: a, max: s } = this,
      o = [],
      u = [];
    let c, h, d, g, p;
    for (c = 0, h = e.length; c < h; ++c)
      ((g = e[c]), g >= a && g <= s && o.push(g));
    if (o.length < 2)
      return [
        { time: a, pos: 0 },
        { time: s, pos: 1 },
      ];
    for (c = 0, h = o.length; c < h; ++c)
      ((p = o[c + 1]),
        (d = o[c - 1]),
        (g = o[c]),
        Math.round((p + d) / 2) !== g && u.push({ time: g, pos: c / (h - 1) }));
    return u;
  }
  _generate() {
    const e = this.min,
      a = this.max;
    let s = super.getDataTimestamps();
    return (
      (!s.includes(e) || !s.length) && s.splice(0, 0, e),
      (!s.includes(a) || s.length === 1) && s.push(a),
      s.sort((o, u) => o - u)
    );
  }
  _getTimestampsForTable() {
    let e = this._cache.all || [];
    if (e.length) return e;
    const a = this.getDataTimestamps(),
      s = this.getLabelTimestamps();
    return (
      a.length && s.length
        ? (e = this.normalize(a.concat(s)))
        : (e = a.length ? a : s),
      (e = this._cache.all = e),
      e
    );
  }
  getDecimalForValue(e) {
    return (Bo(this._table, e) - this._minPos) / this._tableRange;
  }
  getValueForPixel(e) {
    const a = this._offsets,
      s = this.getDecimalForPixel(e) / a.factor - a.end;
    return Bo(this._table, s * this._tableRange + this._minPos, !0);
  }
}
const dy = 'label';
function n0(i, e) {
  typeof i == 'function' ? i(e) : i && (i.current = e);
}
function SM(i, e) {
  const a = i.options;
  a && e && Object.assign(a, e);
}
function my(i, e) {
  i.labels = e;
}
function gy(i, e) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : dy;
  const s = [];
  i.datasets = e.map((o) => {
    const u = i.datasets.find((c) => c[a] === o[a]);
    return !u || !o.data || s.includes(u)
      ? { ...o }
      : (s.push(u), Object.assign(u, o), u);
  });
}
function wM(i) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : dy;
  const a = { labels: [], datasets: [] };
  return (my(a, i.labels), gy(a, i.datasets, e), a);
}
function MM(i, e) {
  const {
      height: a = 150,
      width: s = 300,
      redraw: o = !1,
      datasetIdKey: u,
      type: c,
      data: h,
      options: d,
      plugins: g = [],
      fallbackContent: p,
      updateMode: b,
      ...v
    } = i,
    S = j.useRef(null),
    w = j.useRef(null),
    E = () => {
      S.current &&
        ((w.current = new sr(S.current, {
          type: c,
          data: wM(h, u),
          options: d && { ...d },
          plugins: g,
        })),
        n0(e, w.current));
    },
    M = () => {
      (n0(e, null), w.current && (w.current.destroy(), (w.current = null)));
    };
  return (
    j.useEffect(() => {
      !o && w.current && d && SM(w.current, d);
    }, [o, d]),
    j.useEffect(() => {
      !o && w.current && my(w.current.config.data, h.labels);
    }, [o, h.labels]),
    j.useEffect(() => {
      !o && w.current && h.datasets && gy(w.current.config.data, h.datasets, u);
    }, [o, h.datasets]),
    j.useEffect(() => {
      w.current && (o ? (M(), setTimeout(E)) : w.current.update(b));
    }, [o, d, h.labels, h.datasets, b]),
    j.useEffect(() => {
      w.current && (M(), setTimeout(E));
    }, [c]),
    j.useEffect(() => (E(), () => M()), []),
    af.createElement(
      'canvas',
      { ref: S, role: 'img', height: a, width: s, ...v },
      p
    )
  );
}
const EM = j.forwardRef(MM);
function TM(i, e) {
  return (
    sr.register(e),
    j.forwardRef((a, s) => af.createElement(EM, { ...a, ref: s, type: i }))
  );
}
const OM = TM('line', c2);
sr.register(lr, Dw, gM, bM, iM, fM, eM, Kw);
const AM = {
    labels: [
      'Week 1',
      'Week 2',
      'Week 3',
      'Week 4',
      'Week 5',
      'Week 6',
      'Week 7',
      'Week 8',
    ],
    datasets: [
      {
        label: 'Lessons Completed',
        data: [2, 0, 0, 3, 0, 1, 1, 0],
        borderColor: '#30C10B',
        backgroundColor: 'transparent',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 5,
        pointBackgroundColor: '#30C10B',
        pointBorderColor: '#30C10B17',
      },
      {
        label: 'Quizzes Passed',
        data: [2, 0, 0, 0, 0, 2, 0, 1],
        borderColor: '#3B82F6',
        backgroundColor: 'transparent',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 5,
        pointBackgroundColor: '#3B82F6',
        pointBorderColor: '#3B82F617',
      },
    ],
  },
  DM = {
    responsive: !0,
    maintainAspectRatio: !1,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: !0,
          pointStyle: 'circle',
          color: '#69757C',
          padding: 16,
          font: { size: 13 },
        },
      },
      tooltip: {
        backgroundColor: '#fff',
        titleColor: '#374151',
        bodyColor: '#111827',
        padding: 10,
        borderColor: '#E5E7EB',
        borderWidth: 1,
      },
    },
    scales: {
      x: { ticks: { color: '#6B7280' }, grid: { display: !1 } },
      y: {
        ticks: { color: '#6B7280', stepSize: 5 },
        grid: { color: '#E5E7EB', borderDash: [4, 4] },
      },
    },
  },
  CM = () =>
    x.jsx(x.Fragment, {
      children: x.jsx(sl, {
        children: x.jsx('section', {
          children: x.jsxs('div', {
            className:
              'bg-[#F1F2F3] font-serif md:p-5 p-3 rounded-lg shadow-md mb-5',
            children: [
              x.jsxs('div', {
                className: 'flex items-center space-x-2 mb-4',
                children: [
                  x.jsx(z1, { size: '24', color: '#111827' }),
                  x.jsxs('div', {
                    children: [
                      x.jsx('h4', {
                        className: 'text-[#111827]',
                        children: 'Progress Overview',
                      }),
                      x.jsx('p', {
                        className: 'text-[#6B7280] text-sm',
                        children: "You're making progress, keep it up",
                      }),
                    ],
                  }),
                ],
              }),
              x.jsx('div', {
                className: 'h-[320px]',
                children: x.jsx(OM, { data: AM, options: DM }),
              }),
            ],
          }),
        }),
      }),
    }),
  jM = () =>
    x.jsx(x.Fragment, {
      children: x.jsx(sl, {
        children: x.jsx('section', { children: 'Courses' }),
      }),
    }),
  RM = '/assets/Screenshot%20(1679)-ZcTLmMah.png',
  zM = () => {
    const i = ['2d drawing', '3d drawing', 'isometric drawing'];
    return x.jsx(x.Fragment, {
      children: x.jsx(sl, {
        children: x.jsx('section', {
          className: 'grid md:grid-cols-2 grid-cols-1',
          children: i.map((e, a) =>
            x.jsx('img', {
              src: RM,
              className: 'm-5 w-[90%] rounded-lg',
              alt: '',
            })
          ),
        }),
      }),
    });
  },
  NM = () => {
    const i = ['2d drawing', '3d drawing', 'isometric drawing'];
    return x.jsx(x.Fragment, {
      children: x.jsx(sl, {
        children: x.jsx('section', {
          className: 'grid md:grid-cols-2 grid-cols-1',
          children: i.map((e, a) =>
            x.jsx(
              'div',
              {
                className:
                  'bg-primary text-center md:p-20 p-15 m-5 rounded-xl cursor-pointer hover:bg-primaryHover ease-in-out transition-all duration-300',
                children: x.jsx('h4', {
                  className: 'text-4xl text-white',
                  children: e.toLocaleUpperCase(),
                }),
              },
              a
            )
          ),
        }),
      }),
    });
  },
  kM = () =>
    x.jsx(x.Fragment, {
      children: x.jsx(sl, {
        children: x.jsx('section', { children: 'Profile' }),
      }),
    }),
  LM = new Date(),
  Sa = LM.getHours(),
  HM = (i) =>
    Sa >= 5 && Sa < 12
      ? `${i} morning`
      : Sa >= 12 && Sa < 17
        ? `${i} afternoon`
        : Sa >= 17 && Sa < 20
          ? `${i} evening`
          : `${i} night`,
  py = [
    {
      name: 'Dashboard',
      icon: x0,
      link: '/dashboard/admin',
      subTag: `${HM('Good')}, what would you like to do now?`,
    },
    {
      name: 'Create Course',
      icon: il,
      link: '/course/create',
      subTag: 'Create a new course for students',
    },
    {
      name: 'Register Student',
      icon: Io,
      link: '/student/register',
      subTag: 'Create an account for a new student',
    },
    {
      name: 'Post Challenge',
      icon: al,
      link: '/challenge/post',
      subTag: 'Post a new challenge for students',
    },
    {
      name: 'Profile',
      icon: S0,
      link: '/profile/admin',
      subTag: 'You can view and edit your personal information from here',
    },
  ],
  BM = ({ onClick: i }) => {
    const e = window.location.pathname;
    return x.jsxs('div', {
      className:
        'bg-[#F1F2F3] w-[15rem] md:animate-none animate-navBar h-screen overflow-y-auto flex flex-col px-3 pt-4 pb-4 no-scrollbar md:ml-4 rounded-lg',
      children: [
        x.jsxs('section', {
          className: 'flex justify-between items-center',
          children: [
            x.jsx('img', {
              src: hf,
              alt: 'Fischerbon-Logo',
              width: 150,
              height: 50,
            }),
            x.jsx('div', {
              onClick: i,
              className: 'md:hidden flex',
              children: x.jsx(tr, {}),
            }),
          ],
        }),
        x.jsx('div', {
          className: 'flex-grow mt-1.5',
          children: x.jsx('div', {
            className: 'flex flex-col space-y-5 py-4',
            children: py.map((a, s) => {
              const o = a.icon,
                u = e === a.link;
              return x.jsx(
                'span',
                {
                  onClick: window.innerWidth < 768 && i,
                  children: x.jsxs(
                    xe,
                    {
                      to: a.link,
                      className: `
                        flex items-center space-x-2 py-2 px-5 w-10/12 rounded-full text-sm font-normal leading-6 
                        transition-all duration-300 ease-in-out
                        ${u ? 'bg-primary text-white' : 'hover:bg-primaryHover hover:text-white'}
                    `,
                      children: [
                        x.jsx(o, {
                          className: '',
                          size: '22',
                          variant: 'Outline',
                        }),
                        x.jsx('span', { children: a.name }),
                      ],
                    },
                    a.name
                  ),
                },
                s
              );
            }),
          }),
        }),
        x.jsx('div', {
          children: x.jsxs(xe, {
            to: '/login',
            className:
              'hover:animate-pulse flex items-center space-x-2 py-3 px-5 rounded-full text-sm font-normal leading-6',
            children: [
              x.jsx(v0, { size: '22', variant: 'Outline' }),
              x.jsx('span', { children: 'Logout' }),
            ],
          }),
        }),
      ],
    });
  },
  UM = ({ onClick: i }) => {
    let e = window.location.pathname;
    const a = py.find((u) => u.link === e);
    let s = 'Abdulqoyum Amuda';
    const o = ({ mode: u }) =>
      x.jsxs('div', {
        className: `flex justify-between ${u === 'desktop' ? 'gap-3' : 'w-full'} items-center`,
        children: [
          x.jsxs('h4', {
            className: 'text-lg font-medium text-dark',
            children: [
              'Engr Iskil Ismail - ',
              x.jsx('span', { className: 'font-bold', children: 'Admin' }),
            ],
          }),
          x.jsx('div', {
            className: 'flex items-center gap-3',
            children: x.jsxs('div', {
              className:
                'size-10 bg-primary text-white font-bold justify-center rounded-full flex items-center text-center hover:bg-primaryHover',
              children: [
                s.split(' ')[0][0].toUpperCase(),
                s.split(' ')[1][0].toUpperCase(),
              ],
            }),
          }),
        ],
      });
    return x.jsxs('header', {
      className: 'md:space-y-2 md:py-0',
      children: [
        x.jsx('div', {
          className: 'my-1 px-5 h-[50px] md:hidden flex',
          children: x.jsx(o, { mode: 'mobile' }),
        }),
        x.jsxs('div', {
          className:
            'bg-muted md:py-3.5 md:px-3 p-3 rounded-md mx-3 md:mx-0 flex justify-between items-center',
          children: [
            x.jsx('h4', {
              className: 'text-xl text-dark font-semibold',
              children: a && a.name,
            }),
            x.jsx('div', {
              className: 'px-5 md:flex hidden',
              children: x.jsx(o, { mode: 'desktop' }),
            }),
            x.jsx('div', {
              onClick: i,
              className: 'md:hidden flex',
              children: x.jsx(_0, {}),
            }),
          ],
        }),
        x.jsx('div', {
          className: 'md:mx-3 mx-5 mt-1.5',
          children: x.jsxs('div', {
            className: 'flex gap-3 items-center',
            children: [
              x.jsx('div', { className: 'bg-primary size-3 rounded-full' }),
              a.subTag &&
                x.jsx('p', {
                  className: 'text-dark font-serif text-md md:text-lg',
                  children: a.subTag,
                }),
            ],
          }),
        }),
        a.subTag &&
          x.jsx('hr', {
            className:
              'bg-secondary h-1 text-secondary md:mx-1 mx-3 rounded-md mt-1',
          }),
      ],
    });
  },
  ol = ({ children: i }) => {
    let [e, a] = j.useState(window.innerWidth > 768);
    return x.jsxs('div', {
      className:
        'bg-[hsl(204,10%,90%)] text-dark md:flex gap-4 h-screen overflow-y-hidden md:pt-2',
      children: [
        x.jsx('div', {
          className: 'absolute md:relative z-12',
          children: e && x.jsx(BM, { onClick: () => a(!1) }),
        }),
        x.jsxs('div', {
          onClick: () => e === !0 && (window.innerWidth < 768 ? a(!1) : a(!0)),
          className: `${e ? 'opacity-50 md:opacity-100' : ''} flex flex-col h-full w-full md:mr-4`,
          children: [
            x.jsx(UM, { onClick: () => a(!0) }),
            x.jsx('main', {
              className:
                'flex-1 h-full overflow-x-hidden pb-5 no-scrollbar mt-4 md:px-3 px-5',
              children: x.jsx('section', {
                className: 'overflow-y-auto no-scrollbar w-full',
                children: i,
              }),
            }),
          ],
        }),
      ],
    });
  },
  YM = () => {
    const i = [
      {
        Icon: il,
        label: 'Create a course',
        description: 'Create a new course for students',
        button: 'Create a course',
        link: '/course/create',
      },
      {
        Icon: Io,
        label: 'Register a student',
        description: 'Create an account for a new student',
        button: 'Register a new student',
        link: '/student/register',
      },
      {
        Icon: al,
        label: 'Post a challenge',
        description: 'Post a new challenge for all students',
        button: 'Post a challenge',
        link: '/challenge/post',
      },
    ];
    return x.jsx(x.Fragment, {
      children: x.jsx(ol, {
        children: x.jsx('div', {
          className: 'grid lg:grid-cols-2 grid-cols-1 mx-auto px-3 md:px-0',
          children: i.map((e, a) => {
            const s = e.Icon;
            return x.jsxs(
              'div',
              {
                className:
                  'flex md:flex-row flex-col w-full gap-0 grow md:m-5 md:mt-0.5 mt-10',
                children: [
                  x.jsx('div', {
                    className:
                      'rounded-l-md h-[100px] flex md:py-20 py-15 md:w-[30%] w-full text-white bg-primary hover:bg-primaryHover duration-300 ease-in-out text-center items-center justify-center',
                    children: x.jsx(s, { size: 60 }),
                  }),
                  x.jsxs('div', {
                    className:
                      'rounded-r-md md:h-[160px] md:w-[65%] w-full bg-white p-5 flex flex-col justify-between',
                    children: [
                      x.jsxs('div', {
                        children: [
                          x.jsx('h4', {
                            className: 'text-dark leading-10 text-xl font-bold',
                            children: e.label,
                          }),
                          x.jsx('p', {
                            className: 'text-gray mb-1 md:mb-0 text-md',
                            children: e.description,
                          }),
                        ],
                      }),
                      x.jsx(xe, {
                        to: e.link,
                        children: x.jsxs('p', {
                          className:
                            'mt-3 flex md:text-[16px] text-sm hover:scale-x-[102%] hover:text-primaryHover text-primary duration-300 ease-in-out cursor-pointer items-center gap-2',
                          children: [
                            x.jsx('span', { children: e.button }),
                            x.jsx('span', {
                              children: x.jsx(C1, { size: '20' }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              },
              a
            );
          }),
        }),
      }),
    });
  },
  Of = ({ Icon: i, message: e, onClick: a, button: s }) =>
    x.jsxs('div', {
      className:
        'text-center border-2 border-dashed rounded-lg border-accent px-5 py-15',
      children: [
        x.jsx('div', {
          className:
            'size-15 mx-auto rounded-full text-secondary bg-[#c1d4de] flex items-center justify-center',
          children: x.jsx(i, { size: '24' }),
        }),
        x.jsx('p', { className: 'my-4 md:text-lg font-serif', children: e }),
        x.jsx('button', {
          className:
            'py-3 px-4 rounded-sm bg-primary font-medium text-sm leading-6 text-white hover:bg-primaryHover ease-in-out duration-300 cursor-pointer mt-2',
          onClick: a,
          children: s,
        }),
      ],
    }),
  Af = ({ text: i, disabled: e }) =>
    x.jsx('div', {
      className: 'text-right',
      children: x.jsx('button', {
        type: 'submit',
        className: `py-3 px-5 ${e ? 'bg-accent cursor-not-allowed' : 'bg-primary hover:bg-primaryHover cursor-pointer'} rounded-sm font-medium text-sm leading-6 text-white ease-in-out duration-300 mt-2`,
        children: i,
      }),
    }),
  qM = () => {
    const [i, e] = j.useState(!0),
      [a, s] = j.useState(null),
      [o, u] = j.useState(null),
      [c, h] = j.useState({
        title: '',
        description: '',
        price: '',
        thumbnail: File,
        category: '',
        level: '',
      }),
      d = (v) => {
        const { name: S, files: w, value: E } = v.target;
        h(S === 'thumbnail' ? { ...c, file: w } : { ...c, [S]: E });
      };
    async function g(v) {
      v.preventDefault();
    }
    const p = 'text-gray font-serif leading-9 md:text-lg text-md',
      b =
        'w-full p-3 border-2 border-[#C8CDD0] rounded-lg outline-none placeholder:text-[#ACB4B9] text-[16px] leading-6 focus:border-primary transition-colors duration-200 ease-in-out';
    return x.jsx(x.Fragment, {
      children: x.jsx(ol, {
        children: x.jsx('div', {
          className: 'md:bg-[#F1F2F3] bg-none rounded-lg md:p-3',
          children: i
            ? x.jsx(Of, {
                Icon: il,
                message: "You haven't created any course yet",
                button: 'Create your first course',
                onClick: () => e(!1),
              })
            : x.jsxs('form', {
                onSubmit: (v) => g(v),
                className: 'space-y-5 mt-5 p-5 bg-white rounded-lg',
                children: [
                  x.jsxs('div', {
                    children: [
                      x.jsx('label', {
                        htmlFor: 'title',
                        className: p,
                        children: 'Course Title',
                      }),
                      x.jsx('input', {
                        type: 'text',
                        id: 'title',
                        onChange: d,
                        placeholder: 'Enter a title for the course',
                        className: b,
                      }),
                    ],
                  }),
                  x.jsxs('div', {
                    children: [
                      x.jsx('label', {
                        htmlFor: 'description',
                        className: p,
                        children: 'Course Description',
                      }),
                      x.jsx('input', {
                        type: 'text',
                        id: 'description',
                        onChange: d,
                        placeholder: 'Enter a description title for the course',
                        className: b,
                      }),
                    ],
                  }),
                  x.jsxs('div', {
                    children: [
                      x.jsx('label', {
                        htmlFor: 'price',
                        className: p,
                        children: 'Course Price',
                      }),
                      x.jsx('input', {
                        type: 'number',
                        id: 'price',
                        onChange: d,
                        placeholder: 'Enter a price for the course',
                        className: b,
                      }),
                    ],
                  }),
                  x.jsxs('div', {
                    children: [
                      x.jsx('label', {
                        htmlFor: 'thumbnail',
                        className: p,
                        children: 'Upload Thumbnail',
                      }),
                      x.jsx('input', {
                        id: 'thumbnail',
                        onChange: () => {},
                        name: 'thumbnail',
                        type: 'file',
                        accept: 'image/*',
                        placeholder: 'Upload a thumbnail image for the course',
                        className: b,
                      }),
                      x.jsx('img', {
                        src: c.thumbnailPreview,
                        className: 'w-full',
                        alt: 'thumbnail',
                      }),
                    ],
                  }),
                  x.jsxs('div', {
                    children: [
                      x.jsx('label', {
                        id: 'level',
                        className: p,
                        children: 'Level',
                      }),
                      x.jsxs('select', {
                        name: 'level',
                        onChange: d,
                        placeholder: 'Enter a price for the course',
                        className: b,
                        id: 'selectLevel',
                        children: [
                          x.jsx('option', {
                            value: 'beginner',
                            children: 'beginner',
                          }),
                          x.jsx('option', {
                            value: 'intermediate',
                            children: 'intermediate',
                          }),
                          x.jsx('option', {
                            value: 'advanced',
                            children: 'advanced',
                          }),
                        ],
                      }),
                    ],
                  }),
                  x.jsx(Af, {
                    text: i ? 'Creating Course...' : 'Create Course',
                    disabled: i,
                  }),
                ],
              }),
        }),
      }),
    });
  },
  VM = () => {
    ja();
    const [i, e] = j.useState(!0),
      a = 'https://fischerbon.onrender.com',
      [s, o] = j.useState({
        fullName: '',
        email: '',
        password: '',
        role: 'student',
      }),
      [u, c] = j.useState({}),
      [h, d] = j.useState(!1),
      [g, p] = j.useState(!1),
      [b, v] = j.useState(''),
      [S, w] = j.useState(''),
      E = () => {
        const Y = {};
        return (
          s.fullName.trim() || (Y.fullName = 'Full name is required'),
          s.email.trim() || (Y.email = 'Email is required'),
          s.password.trim() || (Y.password = 'Password is required'),
          b !== '' && (Y.email = 'An account with that mail already exists'),
          s.password.trim().length < 8 &&
            s.password.trim() &&
            (Y.password = 'Password must have a minimum of 8 characters'),
          Y
        );
      },
      M = (Y) => {
        const { name: G, value: B } = Y.target;
        (o((F) => ({ ...F, [G]: B })), c((F) => ({ ...F, [G]: '' })));
      },
      D = async (Y) => {
        Y.preventDefault();
        const G = E();
        if (Object.keys(G).length > 0) {
          c(G);
          return;
        }
        p(!0);
        try {
          const F = (
            await fetch(`${a}/auth/register`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(s),
            })
          ).json();
          F.success ? w('success') : (w('failure'), v(F.message));
        } catch {
          w('network');
        } finally {
          p(!1);
        }
      },
      k = 'text-gray font-serif leading-9 md:text-lg text-md block mb-1';
    return x.jsxs(x.Fragment, {
      children: [
        S === 'success'
          ? x.jsx(fe, {
              header: 'Successful',
              message: `You've successfully registered ${s.fullName}`,
              iconType: 'success',
              border: '#3c97d0',
              onClose: () => w(''),
            })
          : S === 'failure'
            ? x.jsx(fe, {
                header: 'Oops',
                message: 'Something went wrong, try that again later',
                iconType: 'error',
                onClose: () => w(''),
              })
            : S === 'network'
              ? x.jsx(fe, {
                  header: 'Network Error',
                  message: "You're not connected to the internet",
                  iconType: 'error',
                  onClose: () => w(''),
                })
              : '',
        x.jsx(ol, {
          children: x.jsx('div', {
            className: 'bg-[#F1F2F3] rounded-lg p-3',
            children: i
              ? x.jsx(Of, {
                  Icon: Io,
                  message: "You haven't registered any student yet",
                  button: 'Register a new student',
                  onClick: () => e(!1),
                })
              : x.jsx('div', {
                  children: x.jsxs('form', {
                    onSubmit: D,
                    className: 'space-y-6',
                    children: [
                      x.jsxs('div', {
                        children: [
                          x.jsx('label', {
                            htmlFor: 'fullName',
                            className: k,
                            children: "Student's Full Name",
                          }),
                          x.jsx('input', {
                            type: 'text',
                            id: 'fullName',
                            name: 'fullName',
                            value: s.fullName,
                            onChange: M,
                            placeholder: "Enter the student's full name",
                            className:
                              'w-full p-3 border-2 rounded-md border-accent placeholder:text-accent focus:border-primary outline-none',
                          }),
                          u.fullName &&
                            x.jsx('p', {
                              className: 'text-red-500 text-sm mt-1',
                              children: u.fullName,
                            }),
                        ],
                      }),
                      x.jsxs('div', {
                        children: [
                          x.jsx('label', {
                            htmlFor: 'email',
                            className: k,
                            children: "Student's Email Address",
                          }),
                          x.jsx('input', {
                            type: 'email',
                            id: 'email',
                            name: 'email',
                            value: s.email,
                            onChange: M,
                            placeholder: "Enter the student's email adress",
                            className:
                              'w-full p-3 border-2 rounded-md border-accent placeholder:text-accent focus:border-primary outline-none',
                          }),
                          u.email &&
                            x.jsx('p', {
                              className: 'text-red-500 text-sm mt-1',
                              children: u.email,
                            }),
                        ],
                      }),
                      x.jsxs('div', {
                        className: 'relative',
                        children: [
                          x.jsx('label', {
                            htmlFor: 'password',
                            className: k,
                            children: 'Password',
                          }),
                          x.jsx('input', {
                            type: h ? 'text' : 'password',
                            id: 'password',
                            name: 'password',
                            value: s.password,
                            onChange: M,
                            placeholder: 'Set a password for the student',
                            className:
                              'w-full p-3 border-2 rounded-md border-accent placeholder:text-accent focus:border-primary outline-none',
                          }),
                          x.jsx('span', {
                            onClick: () => d((Y) => !Y),
                            className:
                              'absolute right-3 top-14 cursor-pointer text-accent',
                            children: h
                              ? x.jsx(Qs, { size: 20 })
                              : x.jsx(Zs, { size: 20 }),
                          }),
                          u.password &&
                            x.jsx('p', {
                              className: 'text-red-500 text-sm mt-1',
                              children: u.password,
                            }),
                        ],
                      }),
                      x.jsx(Af, {
                        text: g ? 'Registering...' : 'Register Student',
                        disabled: g,
                      }),
                    ],
                  }),
                }),
          }),
        }),
      ],
    });
  },
  XM = () => {
    const i = [
      { label: 'Challenges Posted', count: 10, icon: al },
      { label: 'Students Registered', count: 29, icon: Io },
      { label: 'Courses Created', count: 12, icon: il },
    ];
    return x.jsx(x.Fragment, {
      children: x.jsx(ol, {
        children: x.jsxs('div', {
          className: 'bg-[#F1F2F3] rounded-lg p-3 flex flex-col items-center',
          children: [
            x.jsx('div', {
              className:
                'mb-5 size-20 bg-primary text-white text-3xl font-bold justify-center rounded-full flex items-center text-center hover:bg-primaryHover',
              children: 'EI',
            }),
            x.jsxs('h4', {
              className: 'text-lg font-serif text-dark leading-9',
              children: [
                'Engr Iskil Ismail /',
                ' ',
                x.jsx('span', {
                  className: 'font-gray text-secondary',
                  children: 'Admin',
                }),
              ],
            }),
            x.jsx('section', {
              className: 'grid lg:grid-cols-3 grid-cols-1',
              children: i.map((e, a) => {
                const s = e.icon;
                return x.jsxs(
                  'article',
                  {
                    className:
                      'rounded-lg bg-[#F1F6F3] font-serif border-1 border-gray m-5 flex-1 p-5 gap-3 flex justify-between items-center',
                    children: [
                      x.jsx('div', {
                        className:
                          ' bg-primary p-5 rounded-full flex items-center justify-center',
                        children: x.jsx(s, { size: '24', color: e.challenges }),
                      }),
                      x.jsxs('p', {
                        className:
                          'text-[#2F3437] text-base leading-6 font-medium',
                        children: [
                          x.jsx('span', {
                            className: 'text-3xl',
                            children: `${e.count}`,
                          }),
                          ' ',
                          `${e.label}`,
                        ],
                      }),
                    ],
                  },
                  a
                );
              }),
            }),
          ],
        }),
      }),
    });
  },
  GM = () => {
    const [i, e] = j.useState(!0),
      a = 'text-gray font-serif leading-9 md:text-lg text-md',
      s =
        'text-white text-[16px] py-3 px-3 rounded-sm w-[102px] bg-primary font-medium hover:bg-primaryHover ease-in-out duration-300 cursor-pointer mt-2',
      [o, u] = j.useState(!1),
      [c, h] = j.useState(''),
      d = async (g) => {
        g.preventDefault();
        let p = File;
        try {
          (
            await fetch(`${BASE_URL}/challenge/post`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(p),
            })
          ).json().success
            ? h('success')
            : h('failure');
        } catch {
          h('network');
        }
      };
    return x.jsxs(x.Fragment, {
      children: [
        c === 'success' && o
          ? x.jsx(fe, {
              header: 'Logged In',
              message: 'You can now access your dashboard',
              iconType: 'success',
              border: '#3c97d0',
              onClose: () => h(''),
            })
          : c === 'failure' && o
            ? x.jsx(fe, {
                header: 'Oops',
                message: 'Something went wrong, try that again later',
                iconType: 'error',
                onClose: () => h(''),
              })
            : c === 'network' && o
              ? x.jsx(fe, {
                  header: 'Network Error',
                  message: "You're not connected to the internet",
                  iconType: 'error',
                  onClose: () => h(''),
                })
              : '',
        x.jsx(ol, {
          children: x.jsx('div', {
            className: 'bg-[#F1F2F3] rounded-lg p-3',
            children: i
              ? x.jsx(Of, {
                  Icon: al,
                  message: "You haven't posted any challenges yet",
                  button: 'Post your first challenge',
                  onClick: () => e(!1),
                })
              : x.jsxs('form', {
                  onSubmit: d,
                  children: [
                    x.jsxs('div', {
                      children: [
                        x.jsx('label', {
                          htmlFor: 'challenge',
                          className: a,
                          children: 'Upload Challenge',
                        }),
                        x.jsx('div', {
                          className:
                            'border-3 border-accent p-10 border-double space-y-5 flex-col justify-center text-center rounded-2xl focus:border-primary transition-colors duration-200 ease-in-out',
                          children: o
                            ? x.jsx(x.Fragment, { children: 'Image' })
                            : x.jsxs(x.Fragment, {
                                children: [
                                  x.jsx('div', {
                                    className:
                                      'size-15 mx-auto rounded-full text-secondary bg-[#c1d4de] flex items-center justify-center',
                                    children: x.jsx(Q1, { size: '24' }),
                                  }),
                                  x.jsx('p', {
                                    className: 'my-4 md:text-lg font-serif',
                                    children:
                                      'Upload a challenge image [MAX - 10MB]',
                                  }),
                                  x.jsx('input', {
                                    id: 'challenge',
                                    name: 'challenge',
                                    type: 'file',
                                    accept: 'image/*',
                                    className: s,
                                  }),
                                ],
                              }),
                        }),
                      ],
                    }),
                    x.jsx(Af, {
                      text: i ? 'Post Challenge' : 'Posting...',
                      disabled: i,
                    }),
                  ],
                }),
          }),
        }),
      ],
    });
  },
  PM = () =>
    x.jsx(x.Fragment, {
      children: x.jsx(h1, {
        children: x.jsxs(Xv, {
          children: [
            x.jsx(ne, { path: '/', element: x.jsx(Rc, {}) }),
            x.jsx(ne, { path: '/login', element: x.jsx(Rc, {}) }),
            x.jsx(ne, { path: '/signup', element: x.jsx(W1, {}) }),
            x.jsx(ne, { path: '/forgot-password', element: x.jsx(J1, {}) }),
            x.jsx(ne, { path: '/reset-password', element: x.jsx($1, {}) }),
            x.jsx(ne, {
              path: '/dashboard',
              element: x.jsx(nn, { children: x.jsx(CM, {}) }),
            }),
            x.jsx(ne, {
              path: '/courses',
              element: x.jsx(nn, { children: x.jsx(jM, {}) }),
            }),
            x.jsx(ne, {
              path: '/challenges',
              element: x.jsx(nn, { children: x.jsx(zM, {}) }),
            }),
            x.jsx(ne, {
              path: '/quizzes',
              element: x.jsx(nn, { children: x.jsx(NM, {}) }),
            }),
            x.jsx(ne, {
              path: '/profile',
              element: x.jsx(nn, { children: x.jsx(kM, {}) }),
            }),
            x.jsx(ne, {
              path: '/dashboard/admin',
              element: x.jsx(nn, { children: x.jsx(YM, {}) }),
            }),
            x.jsx(ne, {
              path: '/course/create',
              element: x.jsx(nn, { children: x.jsx(qM, {}) }),
            }),
            x.jsx(ne, {
              path: '/student/register',
              element: x.jsx(nn, { children: x.jsx(VM, {}) }),
            }),
            x.jsx(ne, {
              path: '/challenge/post',
              element: x.jsx(nn, { children: x.jsx(GM, {}) }),
            }),
            x.jsx(ne, {
              path: '/profile/admin',
              element: x.jsx(nn, { children: x.jsx(XM, {}) }),
            }),
            x.jsx(ne, { path: '/*', element: x.jsx(Rc, {}) }),
          ],
        }),
      }),
    });
function FM(i = {}) {
  const {
    immediate: e = !1,
    onNeedRefresh: a,
    onOfflineReady: s,
    onRegistered: o,
    onRegisteredSW: u,
    onRegisterError: c,
  } = i;
  let h, d;
  const g = async (b = !0) => {
    await d;
  };
  async function p() {
    if ('serviceWorker' in navigator) {
      if (
        ((h = await Jx(async () => {
          const { Workbox: b } = await import(
            './workbox-window.prod.es5-B9K5rw8f.js'
          );
          return { Workbox: b };
        }, [])
          .then(
            ({ Workbox: b }) => new b('/sw.js', { scope: '/', type: 'classic' })
          )
          .catch((b) => {
            c?.(b);
          })),
        !h)
      )
        return;
      (h.addEventListener('activated', (b) => {
        (b.isUpdate || b.isExternal) && window.location.reload();
      }),
        h.addEventListener('installed', (b) => {
          b.isUpdate || s?.();
        }),
        h
          .register({ immediate: e })
          .then((b) => {
            u ? u('/sw.js', b) : o?.(b);
          })
          .catch((b) => {
            c?.(b);
          }));
    }
  }
  return ((d = p()), g);
}
Kx.createRoot(document.getElementById('root')).render(
  x.jsx(af.StrictMode, { children: x.jsx(S1, { children: x.jsx(PM, {}) }) })
);
FM({ immediate: !0 });
