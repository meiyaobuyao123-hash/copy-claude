// Module: _A1
// Params: g0A

Object.defineProperty(g0A, '__esModule', { value: !0 });
var b0A = tA(),
  Mf2 = oK();
function Lf2(A) {
  return (A || Mf2.getCurrentHub()).getScope().getTransaction();
}
var Rf2 = b0A.extractTraceparentData;
g0A.stripUrlQueryAndFragment = b0A.stripUrlQueryAndFragment;
g0A.extractTraceparentData = Rf2;
g0A.getActiveTransaction = Lf2;
