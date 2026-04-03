// Module: F$1
// Params: cCA

Object.defineProperty(cCA, '__esModule', { value: !0 });
cCA.joinAllInternals = void 0;
var aJ9 = lI(),
  sJ9 = Jq(),
  rJ9 = np(),
  oJ9 = RH(),
  tJ9 = T91();
function eJ9(A, B) {
  return rJ9.pipe(
    tJ9.toArray(),
    oJ9.mergeMap(function (Q) {
      return A(Q);
    }),
    B ? sJ9.mapOneOrManyArgs(B) : aJ9.identity
  );
}
cCA.joinAllInternals = eJ9;
