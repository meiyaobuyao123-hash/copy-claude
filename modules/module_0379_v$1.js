// Module: v$1
// Params: qVA

Object.defineProperty(qVA, '__esModule', { value: !0 });
qVA.max = void 0;
var uV9 = PT(),
  pV9 = l5();
function cV9(A) {
  return uV9.reduce(
    pV9.isFunction(A)
      ? function (B, Q) {
          return A(B, Q) > 0 ? B : Q;
        }
      : function (B, Q) {
          return B > Q ? B : Q;
        }
  );
}
qVA.max = cV9;
