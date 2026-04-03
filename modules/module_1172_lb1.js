// Module: lb1
// Params: nJ8,yM0

var TZ1 = Object.prototype.hasOwnProperty,
  jM0 = Object.prototype.toString,
  RM0 = Object.defineProperty,
  OM0 = Object.getOwnPropertyDescriptor,
  TM0 = function A(B) {
    if (typeof Array.isArray === 'function') return Array.isArray(B);
    return jM0.call(B) === '[object Array]';
  },
  PM0 = function A(B) {
    if (!B || jM0.call(B) !== '[object Object]') return !1;
    var Q = TZ1.call(B, 'constructor'),
      I =
        B.constructor &&
        B.constructor.prototype &&
        TZ1.call(B.constructor.prototype, 'isPrototypeOf');
    if (B.constructor && !Q && !I) return !1;
    var G;
    for (G in B);
    return typeof G === 'undefined' || TZ1.call(B, G);
  },
  SM0 = function A(B, Q) {
    if (RM0 && Q.name === '__proto__')
      RM0(B, Q.name, { enumerable: !0, configurable: !0, value: Q.newValue, writable: !0 });
    else B[Q.name] = Q.newValue;
  },
  _M0 = function A(B, Q) {
    if (Q === '__proto__') {
      if (!TZ1.call(B, Q)) return;
      else if (OM0) return OM0(B, Q).value;
    }
    return B[Q];
  };
yM0.exports = function A() {
  var B,
    Q,
    I,
    G,
    D,
    Z,
    Y = arguments[0],
    W = 1,
    F = arguments.length,
    J = !1;
  if (typeof Y === 'boolean') ((J = Y), (Y = arguments[1] || {}), (W = 2));
  if (Y == null || (typeof Y !== 'object' && typeof Y !== 'function')) Y = {};
  for (; W < F; ++W)
    if (((B = arguments[W]), B != null)) {
      for (Q in B)
        if (((I = _M0(Y, Q)), (G = _M0(B, Q)), Y !== G)) {
          if (J && G && (PM0(G) || (D = TM0(G)))) {
            if (D) ((D = !1), (Z = I && TM0(I) ? I : []));
            else Z = I && PM0(I) ? I : {};
            SM0(Y, { name: Q, newValue: A(J, Z, G) });
          } else if (typeof G !== 'undefined') SM0(Y, { name: Q, newValue: G });
        }
    }
  return Y;
};
