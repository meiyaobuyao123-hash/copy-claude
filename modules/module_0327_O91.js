// Module: O91
// Params: qCA

Object.defineProperty(qCA, '__esModule', { value: !0 });
qCA.audit = void 0;
var GJ9 = w2(),
  DJ9 = j4(),
  $CA = t2();
function ZJ9(A) {
  return GJ9.operate(function (B, Q) {
    var I = !1,
      G = null,
      D = null,
      Z = !1,
      Y = function () {
        if ((D === null || D === void 0 || D.unsubscribe(), (D = null), I)) {
          I = !1;
          var F = G;
          ((G = null), Q.next(F));
        }
        Z && Q.complete();
      },
      W = function () {
        ((D = null), Z && Q.complete());
      };
    B.subscribe(
      $CA.createOperatorSubscriber(
        Q,
        function (F) {
          if (((I = !0), (G = F), !D))
            DJ9.innerFrom(A(F)).subscribe((D = $CA.createOperatorSubscriber(Q, Y, W)));
        },
        function () {
          ((Z = !0), (!I || !D || D.closed) && Q.complete());
        }
      )
    );
  });
}
qCA.audit = ZJ9;
