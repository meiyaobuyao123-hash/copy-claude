// Module: A$1
// Params: TCA

Object.defineProperty(TCA, '__esModule', { value: !0 });
TCA.buffer = void 0;
var CJ9 = w2(),
  XJ9 = cI(),
  OCA = t2(),
  VJ9 = j4();
function KJ9(A) {
  return CJ9.operate(function (B, Q) {
    var I = [];
    return (
      B.subscribe(
        OCA.createOperatorSubscriber(
          Q,
          function (G) {
            return I.push(G);
          },
          function () {
            (Q.next(I), Q.complete());
          }
        )
      ),
      VJ9.innerFrom(A).subscribe(
        OCA.createOperatorSubscriber(
          Q,
          function () {
            var G = I;
            ((I = []), Q.next(G));
          },
          XJ9.noop
        )
      ),
      function () {
        I = null;
      }
    );
  });
}
TCA.buffer = KJ9;
