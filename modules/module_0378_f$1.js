// Module: f$1
// Params: NVA

Object.defineProperty(NVA, '__esModule', { value: !0 });
NVA.materialize = void 0;
var x$1 = $91(),
  hV9 = w2(),
  mV9 = t2();
function dV9() {
  return hV9.operate(function (A, B) {
    A.subscribe(
      mV9.createOperatorSubscriber(
        B,
        function (Q) {
          B.next(x$1.Notification.createNext(Q));
        },
        function () {
          (B.next(x$1.Notification.createComplete()), B.complete());
        },
        function (Q) {
          (B.next(x$1.Notification.createError(Q)), B.complete());
        }
      )
    );
  });
}
NVA.materialize = dV9;
