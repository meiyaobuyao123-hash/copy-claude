// Module: W$1
// Params: gCA

Object.defineProperty(gCA, '__esModule', { value: !0 });
gCA.scanInternals = void 0;
var hJ9 = t2();
function mJ9(A, B, Q, I, G) {
  return function (D, Z) {
    var Y = Q,
      W = B,
      F = 0;
    D.subscribe(
      hJ9.createOperatorSubscriber(
        Z,
        function (J) {
          var C = F++;
          ((W = Y ? A(W, J, C) : ((Y = !0), J)), I && Z.next(W));
        },
        G &&
          function () {
            (Y && Z.next(W), Z.complete());
          }
      )
    );
  };
}
gCA.scanInternals = mJ9;
