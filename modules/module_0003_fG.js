// Module: fG
// Params: Te1

Object.defineProperty(Te1, '__esModule', { value: !0 });
function t11(A) {
  return A && A.Math == Math ? A : void 0;
}
var qz1 =
  (typeof globalThis == 'object' && t11(globalThis)) ||
  (typeof window == 'object' && t11(window)) ||
  (typeof self == 'object' && t11(self)) ||
  (typeof global == 'object' && t11(global)) ||
  (function () {
    return this;
  })() ||
  {};
function sq2() {
  return qz1;
}
function rq2(A, B, Q) {
  let I = Q || qz1,
    G = (I.__SENTRY__ = I.__SENTRY__ || {});
  return G[A] || (G[A] = B());
}
Te1.GLOBAL_OBJ = qz1;
Te1.getGlobalObject = sq2;
Te1.getGlobalSingleton = rq2;
