// Module: Nq1
// Params: FHA

Object.defineProperty(FHA, '__esModule', { value: !0 });
FHA.timestamp = void 0;
var vz9 = K91(),
  bz9 = dE();
function gz9(A) {
  if (A === void 0) A = vz9.dateTimestampProvider;
  return bz9.map(function (B) {
    return { value: B, timestamp: A.now() };
  });
}
FHA.timestamp = gz9;
