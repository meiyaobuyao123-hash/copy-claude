// Module: Yq1
// Params: TKA

Object.defineProperty(TKA, '__esModule', { value: !0 });
TKA.skipLast = void 0;
var vH9 = lI(),
  bH9 = w2(),
  gH9 = t2();
function hH9(A) {
  return A <= 0
    ? vH9.identity
    : bH9.operate(function (B, Q) {
        var I = new Array(A),
          G = 0;
        return (
          B.subscribe(
            gH9.createOperatorSubscriber(Q, function (D) {
              var Z = G++;
              if (Z < A) I[Z] = D;
              else {
                var Y = Z % A,
                  W = I[Y];
                ((I[Y] = D), Q.next(W));
              }
            })
          ),
          function () {
            I = null;
          }
        );
      });
}
TKA.skipLast = hH9;
