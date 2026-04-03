// Module: y$1
// Params: zVA

Object.defineProperty(zVA, '__esModule', { value: !0 });
zVA.isEmpty = void 0;
var LV9 = w2(),
  RV9 = t2();
function OV9() {
  return LV9.operate(function (A, B) {
    A.subscribe(
      RV9.createOperatorSubscriber(
        B,
        function () {
          (B.next(!1), B.complete());
        },
        function () {
          (B.next(!0), B.complete());
        }
      )
    );
  });
}
zVA.isEmpty = OV9;
