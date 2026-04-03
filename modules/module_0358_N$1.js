// Module: N$1
// Params: jXA

Object.defineProperty(jXA, '__esModule', { value: !0 });
jXA.dematerialize = void 0;
var HX9 = $91(),
  zX9 = w2(),
  wX9 = t2();
function EX9() {
  return zX9.operate(function (A, B) {
    A.subscribe(
      wX9.createOperatorSubscriber(B, function (Q) {
        return HX9.observeNotification(Q, B);
      })
    );
  });
}
jXA.dematerialize = EX9;
