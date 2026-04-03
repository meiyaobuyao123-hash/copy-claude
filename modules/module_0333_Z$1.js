// Module: Z$1
// Params: kCA

Object.defineProperty(kCA, '__esModule', { value: !0 });
kCA.bufferWhen = void 0;
var yJ9 = w2(),
  kJ9 = cI(),
  yCA = t2(),
  xJ9 = j4();
function fJ9(A) {
  return yJ9.operate(function (B, Q) {
    var I = null,
      G = null,
      D = function () {
        G === null || G === void 0 || G.unsubscribe();
        var Z = I;
        ((I = []),
          Z && Q.next(Z),
          xJ9.innerFrom(A()).subscribe((G = yCA.createOperatorSubscriber(Q, D, kJ9.noop))));
      };
    (D(),
      B.subscribe(
        yCA.createOperatorSubscriber(
          Q,
          function (Z) {
            return I === null || I === void 0 ? void 0 : I.push(Z);
          },
          function () {
            (I && Q.next(I), Q.complete());
          },
          void 0,
          function () {
            return (I = G = null);
          }
        )
      ));
  });
}
kCA.bufferWhen = fJ9;
