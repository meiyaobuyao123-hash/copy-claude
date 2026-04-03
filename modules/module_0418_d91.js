// Module: d91
// Params: AHA

Object.defineProperty(AHA, '__esModule', { value: !0 });
AHA.throttle = void 0;
var Nz9 = w2(),
  eKA = t2(),
  $z9 = j4();
function qz9(A, B) {
  return Nz9.operate(function (Q, I) {
    var G = B !== null && B !== void 0 ? B : {},
      D = G.leading,
      Z = D === void 0 ? !0 : D,
      Y = G.trailing,
      W = Y === void 0 ? !1 : Y,
      F = !1,
      J = null,
      C = null,
      X = !1,
      V = function () {
        if ((C === null || C === void 0 || C.unsubscribe(), (C = null), W))
          (N(), X && I.complete());
      },
      K = function () {
        ((C = null), X && I.complete());
      },
      U = function (q) {
        return (C = $z9.innerFrom(A(q)).subscribe(eKA.createOperatorSubscriber(I, V, K)));
      },
      N = function () {
        if (F) {
          F = !1;
          var q = J;
          ((J = null), I.next(q), !X && U(q));
        }
      };
    Q.subscribe(
      eKA.createOperatorSubscriber(
        I,
        function (q) {
          ((F = !0), (J = q), !(C && !C.closed) && (Z ? N() : U(q)));
        },
        function () {
          ((X = !0), !(W && F && C && !C.closed) && I.complete());
        }
      )
    );
  });
}
AHA.throttle = qz9;
