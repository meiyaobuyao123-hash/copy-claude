// Module: Hq1
// Params: sKA

Object.defineProperty(sKA, '__esModule', { value: !0 });
sKA.takeWhile = void 0;
var Xz9 = w2(),
  Vz9 = t2();
function Kz9(A, B) {
  if (B === void 0) B = !1;
  return Xz9.operate(function (Q, I) {
    var G = 0;
    Q.subscribe(
      Vz9.createOperatorSubscriber(I, function (D) {
        var Z = A(D, G++);
        ((Z || B) && I.next(D), !Z && I.complete());
      })
    );
  });
}
sKA.takeWhile = Kz9;
