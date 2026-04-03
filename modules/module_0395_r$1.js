// Module: r$1
// Params: tVA

Object.defineProperty(tVA, '__esModule', { value: !0 });
tVA.repeat = void 0;
var dK9 = qX(),
  uK9 = w2(),
  oVA = t2(),
  pK9 = j4(),
  cK9 = Xq();
function lK9(A) {
  var B,
    Q = 1 / 0,
    I;
  if (A != null)
    if (typeof A === 'object') ((B = A.count), (Q = B === void 0 ? 1 / 0 : B), (I = A.delay));
    else Q = A;
  return Q <= 0
    ? function () {
        return dK9.EMPTY;
      }
    : uK9.operate(function (G, D) {
        var Z = 0,
          Y,
          W = function () {
            if ((Y === null || Y === void 0 || Y.unsubscribe(), (Y = null), I != null)) {
              var J = typeof I === 'number' ? cK9.timer(I) : pK9.innerFrom(I(Z)),
                C = oVA.createOperatorSubscriber(D, function () {
                  (C.unsubscribe(), F());
                });
              J.subscribe(C);
            } else F();
          },
          F = function () {
            var J = !1;
            if (
              ((Y = G.subscribe(
                oVA.createOperatorSubscriber(D, void 0, function () {
                  if (++Z < Q)
                    if (Y) W();
                    else J = !0;
                  else D.complete();
                })
              )),
              J)
            )
              W();
          };
        F();
      });
}
tVA.repeat = lK9;
