// Module: ek
// Params: UXA

Object.defineProperty(UXA, '__esModule', { value: !0 });
UXA.take = void 0;
var rC9 = qX(),
  oC9 = w2(),
  tC9 = t2();
function eC9(A) {
  return A <= 0
    ? function () {
        return rC9.EMPTY;
      }
    : oC9.operate(function (B, Q) {
        var I = 0;
        B.subscribe(
          tC9.createOperatorSubscriber(Q, function (G) {
            if (++I <= A) {
              if ((Q.next(G), A <= I)) Q.complete();
            }
          })
        );
      });
}
UXA.take = eC9;
