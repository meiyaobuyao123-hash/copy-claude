// Module: h$1
// Params: SVA

Object.defineProperty(SVA, '__esModule', { value: !0 });
SVA.mergeScan = void 0;
var aV9 = w2(),
  sV9 = L91();
function rV9(A, B, Q) {
  if (Q === void 0) Q = 1 / 0;
  return aV9.operate(function (I, G) {
    var D = B;
    return sV9.mergeInternals(
      I,
      G,
      function (Z, Y) {
        return A(D, Z, Y);
      },
      Q,
      function (Z) {
        D = Z;
      },
      !1,
      void 0,
      function () {
        return (D = null);
      }
    );
  });
}
SVA.mergeScan = rV9;
