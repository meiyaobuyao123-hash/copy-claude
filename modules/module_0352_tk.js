// Module: tk
// Params: wXA

Object.defineProperty(wXA, '__esModule', { value: !0 });
wXA.defaultIfEmpty = void 0;
var nC9 = w2(),
  aC9 = t2();
function sC9(A) {
  return nC9.operate(function (B, Q) {
    var I = !1;
    B.subscribe(
      aC9.createOperatorSubscriber(
        Q,
        function (G) {
          ((I = !0), Q.next(G));
        },
        function () {
          if (!I) Q.next(A);
          Q.complete();
        }
      )
    );
  });
}
wXA.defaultIfEmpty = sC9;
