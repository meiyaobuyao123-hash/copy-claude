// Module: y5A
// Params: j5A

Object.defineProperty(j5A, '__esModule', { value: !0 });
var Aa2 = dE1(),
  Ba2 = tA();
function Qa2() {
  let A = Aa2.lazyLoadedNodePerformanceMonitoringIntegrations
    .map((B) => {
      try {
        return B();
      } catch (Q) {
        return;
      }
    })
    .filter((B) => !!B);
  if (A.length === 0)
    Ba2.logger.warn('Performance monitoring integrations could not be automatically loaded.');
  return A.filter((B) => !!B.loadDependency());
}
j5A.autoDiscoverNodePerformanceMonitoringIntegrations = Qa2;
