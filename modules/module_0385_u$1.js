// Module: u$1
// Params: yVA

Object.defineProperty(yVA, '__esModule', { value: !0 });
yVA.min = void 0;
var YK9 = PT(),
  WK9 = l5();
function FK9(A) {
  return YK9.reduce(
    WK9.isFunction(A)
      ? function (B, Q) {
          return A(B, Q) < 0 ? B : Q;
        }
      : function (B, Q) {
          return B < Q ? B : Q;
        }
  );
}
yVA.min = FK9;
