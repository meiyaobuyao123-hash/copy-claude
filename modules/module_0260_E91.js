// Module: E91
// Params: XWA

Object.defineProperty(XWA, '__esModule', { value: !0 });
XWA.isArrayLike = void 0;
XWA.isArrayLike = function (A) {
  return A && typeof A.length === 'number' && typeof A !== 'function';
};
