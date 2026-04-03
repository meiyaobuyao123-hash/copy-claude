// Module: S91
// Params: AXA

Object.defineProperty(AXA, '__esModule', { value: !0 });
AXA.concatMap = void 0;
var eCA = RH(),
  KC9 = l5();
function HC9(A, B) {
  return KC9.isFunction(B) ? eCA.mergeMap(A, B, 1) : eCA.mergeMap(A, 1);
}
AXA.concatMap = HC9;
