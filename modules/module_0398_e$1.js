// Module: e$1
// Params: YKA

Object.defineProperty(YKA, '__esModule', { value: !0 });
YKA.retryWhen = void 0;
var BH9 = j4(),
  QH9 = iI(),
  IH9 = w2(),
  ZKA = t2();
function GH9(A) {
  return IH9.operate(function (B, Q) {
    var I,
      G = !1,
      D,
      Z = function () {
        if (
          ((I = B.subscribe(
            ZKA.createOperatorSubscriber(Q, void 0, void 0, function (Y) {
              if (!D)
                ((D = new QH9.Subject()),
                  BH9.innerFrom(A(D)).subscribe(
                    ZKA.createOperatorSubscriber(Q, function () {
                      return I ? Z() : (G = !0);
                    })
                  ));
              if (D) D.next(Y);
            })
          )),
          G)
        )
          (I.unsubscribe(), (I = null), (G = !1), Z());
      };
    Z();
  });
}
YKA.retryWhen = GH9;
