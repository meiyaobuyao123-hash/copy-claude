// Module: Qx
// Params: gKA

Object.defineProperty(gKA, '__esModule', { value: !0 });
gKA.switchMap = void 0;
var rH9 = j4(),
  oH9 = w2(),
  bKA = t2();
function tH9(A, B) {
  return oH9.operate(function (Q, I) {
    var G = null,
      D = 0,
      Z = !1,
      Y = function () {
        return Z && !G && I.complete();
      };
    Q.subscribe(
      bKA.createOperatorSubscriber(
        I,
        function (W) {
          G === null || G === void 0 || G.unsubscribe();
          var F = 0,
            J = D++;
          rH9.innerFrom(A(W, J)).subscribe(
            (G = bKA.createOperatorSubscriber(
              I,
              function (C) {
                return I.next(B ? B(W, C, J, F++) : C);
              },
              function () {
                ((G = null), Y());
              }
            ))
          );
        },
        function () {
          ((Z = !0), Y());
        }
      )
    );
  });
}
gKA.switchMap = tH9;
