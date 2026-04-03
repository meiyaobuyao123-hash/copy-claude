// Module: h91
// Params: JKA

Object.defineProperty(JKA, '__esModule', { value: !0 });
JKA.sample = void 0;
var DH9 = j4(),
  ZH9 = w2(),
  YH9 = cI(),
  FKA = t2();
function WH9(A) {
  return ZH9.operate(function (B, Q) {
    var I = !1,
      G = null;
    (B.subscribe(
      FKA.createOperatorSubscriber(Q, function (D) {
        ((I = !0), (G = D));
      })
    ),
      DH9.innerFrom(A).subscribe(
        FKA.createOperatorSubscriber(
          Q,
          function () {
            if (I) {
              I = !1;
              var D = G;
              ((G = null), Q.next(D));
            }
          },
          YH9.noop
        )
      ));
  });
}
JKA.sample = WH9;
