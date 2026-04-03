// Module: o$1
// Params: BKA

Object.defineProperty(BKA, '__esModule', { value: !0 });
BKA.repeatWhen = void 0;
var iK9 = j4(),
  nK9 = iI(),
  aK9 = w2(),
  AKA = t2();
function sK9(A) {
  return aK9.operate(function (B, Q) {
    var I,
      G = !1,
      D,
      Z = !1,
      Y = !1,
      W = function () {
        return Y && Z && (Q.complete(), !0);
      },
      F = function () {
        if (!D)
          ((D = new nK9.Subject()),
            iK9.innerFrom(A(D)).subscribe(
              AKA.createOperatorSubscriber(
                Q,
                function () {
                  if (I) J();
                  else G = !0;
                },
                function () {
                  ((Z = !0), W());
                }
              )
            ));
        return D;
      },
      J = function () {
        if (
          ((Y = !1),
          (I = B.subscribe(
            AKA.createOperatorSubscriber(Q, void 0, function () {
              ((Y = !0), !W() && F().next());
            })
          )),
          G)
        )
          (I.unsubscribe(), (I = null), (G = !1), J());
      };
    J();
  });
}
BKA.repeatWhen = sK9;
