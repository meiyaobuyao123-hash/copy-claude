// Module: qX
// Params: DWA

Object.defineProperty(DWA, '__esModule', { value: !0 });
DWA.empty = DWA.EMPTY = void 0;
var GWA = G8();
DWA.EMPTY = new GWA.Observable(function (A) {
  return A.complete();
});
function KD9(A) {
  return A ? HD9(A) : DWA.EMPTY;
}
DWA.empty = KD9;
function HD9(A) {
  return new GWA.Observable(function (B) {
    return A.schedule(function () {
      return B.complete();
    });
  });
}
