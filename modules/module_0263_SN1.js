// Module: SN1
// Params: EWA

Object.defineProperty(EWA, '__esModule', { value: !0 });
EWA.isAsyncIterable = void 0;
var _D9 = l5();
function jD9(A) {
  return (
    Symbol.asyncIterator &&
    _D9.isFunction(A === null || A === void 0 ? void 0 : A[Symbol.asyncIterator])
  );
}
EWA.isAsyncIterable = jD9;
