// Module: Vq1
// Params: lKA

Object.defineProperty(lKA, '__esModule', { value: !0 });
lKA.switchScan = void 0;
var Gz9 = Qx(),
  Dz9 = w2();
function Zz9(A, B) {
  return Dz9.operate(function (Q, I) {
    var G = B;
    return (
      Gz9.switchMap(
        function (D, Z) {
          return A(G, D, Z);
        },
        function (D, Z) {
          return ((G = Z), Z);
        }
      )(Q).subscribe(I),
      function () {
        G = null;
      }
    );
  });
}
lKA.switchScan = Zz9;
