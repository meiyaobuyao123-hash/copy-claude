// Module: uE
// Params: QCA

Object.defineProperty(QCA, '__esModule', { value: !0 });
QCA.filter = void 0;
var yF9 = w2(),
  kF9 = t2();
function xF9(A, B) {
  return yF9.operate(function (Q, I) {
    var G = 0;
    Q.subscribe(
      kF9.createOperatorSubscriber(I, function (D) {
        return A.call(B, D, G++) && I.next(D);
      })
    );
  });
}
QCA.filter = xF9;
