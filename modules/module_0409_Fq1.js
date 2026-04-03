// Module: Fq1
// Params: yKA

Object.defineProperty(yKA, '__esModule', { value: !0 });
yKA.skipWhile = void 0;
var cH9 = w2(),
  lH9 = t2();
function iH9(A) {
  return cH9.operate(function (B, Q) {
    var I = !1,
      G = 0;
    B.subscribe(
      lH9.createOperatorSubscriber(Q, function (D) {
        return (I || (I = !A(D, G++))) && Q.next(D);
      })
    );
  });
}
yKA.skipWhile = iH9;
