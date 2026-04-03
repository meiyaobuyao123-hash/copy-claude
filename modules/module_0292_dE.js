// Module: dE
// Params: gFA

Object.defineProperty(gFA, '__esModule', { value: !0 });
gFA.map = void 0;
var LY9 = w2(),
  RY9 = t2();
function OY9(A, B) {
  return LY9.operate(function (Q, I) {
    var G = 0;
    Q.subscribe(
      RY9.createOperatorSubscriber(I, function (D) {
        I.next(A.call(B, D, G++));
      })
    );
  });
}
gFA.map = OY9;
