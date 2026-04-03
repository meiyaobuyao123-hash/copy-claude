// Module: Eq1
// Params: DHA

Object.defineProperty(DHA, '__esModule', { value: !0 });
DHA.TimeInterval = DHA.timeInterval = void 0;
var Tz9 = QY(),
  Pz9 = w2(),
  Sz9 = t2();
function _z9(A) {
  if (A === void 0) A = Tz9.asyncScheduler;
  return Pz9.operate(function (B, Q) {
    var I = A.now();
    B.subscribe(
      Sz9.createOperatorSubscriber(Q, function (G) {
        var D = A.now(),
          Z = D - I;
        ((I = D), Q.next(new GHA(G, Z)));
      })
    );
  });
}
DHA.timeInterval = _z9;
var GHA = (function () {
  function A(B, Q) {
    ((this.value = B), (this.interval = Q));
  }
  return A;
})();
DHA.TimeInterval = GHA;
