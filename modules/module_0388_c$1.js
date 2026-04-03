// Module: c$1
// Params: gVA

Object.defineProperty(gVA, '__esModule', { value: !0 });
gVA.pairwise = void 0;
var wK9 = w2(),
  EK9 = t2();
function UK9() {
  return wK9.operate(function (A, B) {
    var Q,
      I = !1;
    A.subscribe(
      EK9.createOperatorSubscriber(B, function (G) {
        var D = Q;
        ((Q = G), I && B.next([D, G]), (I = !0));
      })
    );
  });
}
gVA.pairwise = UK9;
