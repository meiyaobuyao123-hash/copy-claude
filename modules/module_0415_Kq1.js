// Module: Kq1
// Params: nKA

Object.defineProperty(nKA, '__esModule', { value: !0 });
nKA.takeUntil = void 0;
var Yz9 = w2(),
  Wz9 = t2(),
  Fz9 = j4(),
  Jz9 = cI();
function Cz9(A) {
  return Yz9.operate(function (B, Q) {
    (Fz9.innerFrom(A).subscribe(
      Wz9.createOperatorSubscriber(
        Q,
        function () {
          return Q.complete();
        },
        Jz9.noop
      )
    ),
      !Q.closed && B.subscribe(Q));
  });
}
nKA.takeUntil = Cz9;
