// Module: Xq1
// Params: pKA

Object.defineProperty(pKA, '__esModule', { value: !0 });
pKA.switchMapTo = void 0;
var uKA = Qx(),
  Qz9 = l5();
function Iz9(A, B) {
  return Qz9.isFunction(B)
    ? uKA.switchMap(function () {
        return A;
      }, B)
    : uKA.switchMap(function () {
        return A;
      });
}
pKA.switchMapTo = Iz9;
