// Module: zq1
// Params: oKA

Object.defineProperty(oKA, '__esModule', { value: !0 });
oKA.tap = void 0;
var Hz9 = l5(),
  zz9 = w2(),
  wz9 = t2(),
  Ez9 = lI();
function Uz9(A, B, Q) {
  var I = Hz9.isFunction(A) || B || Q ? { next: A, error: B, complete: Q } : A;
  return I
    ? zz9.operate(function (G, D) {
        var Z;
        (Z = I.subscribe) === null || Z === void 0 || Z.call(I);
        var Y = !0;
        G.subscribe(
          wz9.createOperatorSubscriber(
            D,
            function (W) {
              var F;
              ((F = I.next) === null || F === void 0 || F.call(I, W), D.next(W));
            },
            function () {
              var W;
              ((Y = !1), (W = I.complete) === null || W === void 0 || W.call(I), D.complete());
            },
            function (W) {
              var F;
              ((Y = !1), (F = I.error) === null || F === void 0 || F.call(I, W), D.error(W));
            },
            function () {
              var W, F;
              if (Y) (W = I.unsubscribe) === null || W === void 0 || W.call(I);
              (F = I.finalize) === null || F === void 0 || F.call(I);
            }
          )
        );
      })
    : Ez9.identity;
}
oKA.tap = Uz9;
