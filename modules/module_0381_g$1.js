// Module: g$1
// Params: TVA

Object.defineProperty(TVA, '__esModule', { value: !0 });
TVA.mergeMapTo = void 0;
var OVA = RH(),
  iV9 = l5();
function nV9(A, B, Q) {
  if (Q === void 0) Q = 1 / 0;
  if (iV9.isFunction(B))
    return OVA.mergeMap(
      function () {
        return A;
      },
      B,
      Q
    );
  if (typeof B === 'number') Q = B;
  return OVA.mergeMap(function () {
    return A;
  }, Q);
}
TVA.mergeMapTo = nV9;
