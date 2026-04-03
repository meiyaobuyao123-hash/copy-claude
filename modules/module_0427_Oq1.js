// Module: Oq1
// Params: qHA

Object.defineProperty(qHA, '__esModule', { value: !0 });
qHA.windowWhen = void 0;
var Yw9 = iI(),
  Ww9 = w2(),
  $HA = t2(),
  Fw9 = j4();
function Jw9(A) {
  return Ww9.operate(function (B, Q) {
    var I,
      G,
      D = function (Y) {
        (I.error(Y), Q.error(Y));
      },
      Z = function () {
        (G === null || G === void 0 || G.unsubscribe(),
          I === null || I === void 0 || I.complete(),
          (I = new Yw9.Subject()),
          Q.next(I.asObservable()));
        var Y;
        try {
          Y = Fw9.innerFrom(A());
        } catch (W) {
          D(W);
          return;
        }
        Y.subscribe((G = $HA.createOperatorSubscriber(Q, Z, Z, D)));
      };
    (Z(),
      B.subscribe(
        $HA.createOperatorSubscriber(
          Q,
          function (Y) {
            return I.next(Y);
          },
          function () {
            (I.complete(), Q.complete());
          },
          D,
          function () {
            (G === null || G === void 0 || G.unsubscribe(), (I = null));
          }
        )
      ));
  });
}
qHA.windowWhen = Jw9;
