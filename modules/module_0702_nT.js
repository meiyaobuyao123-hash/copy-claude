// Module: nT
// Params: ESA

Object.defineProperty(ESA, '__esModule', { value: !0 });
ESA._getCurrentPageUrlSafe =
  ESA._addDocumentEventListenerSafe =
  ESA._addWindowEventListenerSafe =
  ESA._isServerEnv =
  ESA._getDocumentSafe =
  ESA._getWindowSafe =
    void 0;
var ub9 = () => {
  return typeof window !== 'undefined' ? window : null;
};
ESA._getWindowSafe = ub9;
var pb9 = () => {
  var A;
  let B = ESA._getWindowSafe();
  return (A = B === null || B === void 0 ? void 0 : B.document) !== null && A !== void 0 ? A : null;
};
ESA._getDocumentSafe = pb9;
var cb9 = () => {
  if (ESA._getDocumentSafe() !== null) return !1;
  let A =
    typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
  return typeof EdgeRuntime === 'string' || A;
};
ESA._isServerEnv = cb9;
var lb9 = (A, B) => {
  let Q = ESA._getWindowSafe();
  if (typeof (Q === null || Q === void 0 ? void 0 : Q.addEventListener) === 'function')
    Q.addEventListener(A, B);
};
ESA._addWindowEventListenerSafe = lb9;
var ib9 = (A, B) => {
  let Q = ESA._getDocumentSafe();
  if (typeof (Q === null || Q === void 0 ? void 0 : Q.addEventListener) === 'function')
    Q.addEventListener(A, B);
};
ESA._addDocumentEventListenerSafe = ib9;
var nb9 = () => {
  var A;
  try {
    return (A = ESA._getWindowSafe()) === null || A === void 0
      ? void 0
      : A.location.href.split(/[?#]/)[0];
  } catch (B) {
    return;
  }
};
ESA._getCurrentPageUrlSafe = nb9;
