// Module: R$1
// Params: lXA

Object.defineProperty(lXA, '__esModule', { value: !0 });
lXA.every = void 0;
var lX9 = w2(),
  iX9 = t2();
function nX9(A, B) {
  return lX9.operate(function (Q, I) {
    var G = 0;
    Q.subscribe(
      iX9.createOperatorSubscriber(
        I,
        function (D) {
          if (!A.call(B, D, G++, Q)) (I.next(!1), I.complete());
        },
        function () {
          (I.next(!0), I.complete());
        }
      )
    );
  });
}
lXA.every = nX9;
