// Module: Wq1
// Params: _KA

Object.defineProperty(_KA, '__esModule', { value: !0 });
_KA.skipUntil = void 0;
var mH9 = w2(),
  SKA = t2(),
  dH9 = j4(),
  uH9 = cI();
function pH9(A) {
  return mH9.operate(function (B, Q) {
    var I = !1,
      G = SKA.createOperatorSubscriber(
        Q,
        function () {
          (G === null || G === void 0 || G.unsubscribe(), (I = !0));
        },
        uH9.noop
      );
    (dH9.innerFrom(A).subscribe(G),
      B.subscribe(
        SKA.createOperatorSubscriber(Q, function (D) {
          return I && Q.next(D);
        })
      ));
  });
}
_KA.skipUntil = pH9;
