// Module: hX2
// Params: lg8,gX2

var g05 = 'Expected a function',
  vX2 = NaN,
  h05 = '[object Symbol]',
  m05 = /^\s+|\s+$/g,
  d05 = /^[-+]0x[0-9a-f]+$/i,
  u05 = /^0b[01]+$/i,
  p05 = /^0o[0-7]+$/i,
  c05 = parseInt,
  l05 = typeof global == 'object' && global && global.Object === Object && global,
  i05 = typeof self == 'object' && self && self.Object === Object && self,
  n05 = l05 || i05 || Function('return this')(),
  a05 = Object.prototype,
  s05 = a05.toString,
  r05 = Math.max,
  o05 = Math.min,
  Br1 = function () {
    return n05.Date.now();
  };
function t05(A, B, Q) {
  var I,
    G,
    D,
    Z,
    Y,
    W,
    F = 0,
    J = !1,
    C = !1,
    X = !0;
  if (typeof A != 'function') throw new TypeError(g05);
  if (((B = bX2(B) || 0), Qr1(Q)))
    ((J = !!Q.leading),
      (C = 'maxWait' in Q),
      (D = C ? r05(bX2(Q.maxWait) || 0, B) : D),
      (X = 'trailing' in Q ? !!Q.trailing : X));
  function V(S) {
    var f = I,
      a = G;
    return ((I = G = void 0), (F = S), (Z = A.apply(a, f)), Z);
  }
  function K(S) {
    return ((F = S), (Y = setTimeout(q, B)), J ? V(S) : Z);
  }
  function U(S) {
    var f = S - W,
      a = S - F,
      g = B - f;
    return C ? o05(g, D - a) : g;
  }
  function N(S) {
    var f = S - W,
      a = S - F;
    return W === void 0 || f >= B || f < 0 || (C && a >= D);
  }
  function q() {
    var S = Br1();
    if (N(S)) return M(S);
    Y = setTimeout(q, U(S));
  }
  function M(S) {
    if (((Y = void 0), X && I)) return V(S);
    return ((I = G = void 0), Z);
  }
  function R() {
    if (Y !== void 0) clearTimeout(Y);
    ((F = 0), (I = W = G = Y = void 0));
  }
  function T() {
    return Y === void 0 ? Z : M(Br1());
  }
  function O() {
    var S = Br1(),
      f = N(S);
    if (((I = arguments), (G = this), (W = S), f)) {
      if (Y === void 0) return K(W);
      if (C) return ((Y = setTimeout(q, B)), V(W));
    }
    if (Y === void 0) Y = setTimeout(q, B);
    return Z;
  }
  return ((O.cancel = R), (O.flush = T), O);
}
function Qr1(A) {
  var B = typeof A;
  return !!A && (B == 'object' || B == 'function');
}
function e05(A) {
  return !!A && typeof A == 'object';
}
function A25(A) {
  return typeof A == 'symbol' || (e05(A) && s05.call(A) == h05);
}
function bX2(A) {
  if (typeof A == 'number') return A;
  if (A25(A)) return vX2;
  if (Qr1(A)) {
    var B = typeof A.valueOf == 'function' ? A.valueOf() : A;
    A = Qr1(B) ? B + '' : B;
  }
  if (typeof A != 'string') return A === 0 ? A : +A;
  A = A.replace(m05, '');
  var Q = u05.test(A);
  return Q || p05.test(A) ? c05(A.slice(2), Q ? 2 : 8) : d05.test(A) ? vX2 : +A;
}
gX2.exports = t05;
