// Module: EY0
// Params: Pb,WG1

var KY0 = If1(),
  HY0 = Gf1(),
  zY0 = VY0();
function wY0(A, B) {
  var Q = new zY0(B);
  return Q.process(A);
}
Pb = WG1.exports = wY0;
Pb.filterXSS = wY0;
Pb.FilterXSS = zY0;
(function () {
  for (var A in KY0) Pb[A] = KY0[A];
  for (var B in HY0) Pb[B] = HY0[B];
})();
if (typeof window !== 'undefined') window.filterXSS = WG1.exports;
function Gy4() {
  return (
    typeof self !== 'undefined' &&
    typeof DedicatedWorkerGlobalScope !== 'undefined' &&
    self instanceof DedicatedWorkerGlobalScope
  );
}
if (Gy4()) self.filterXSS = WG1.exports;
