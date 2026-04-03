// Module: QT
// Params: V6A

Object.defineProperty(V6A, '__esModule', { value: !0 });
var Oc2 = (A, B, Q) => {
  try {
    if (PerformanceObserver.supportedEntryTypes.includes(A)) {
      let I = new PerformanceObserver((G) => {
        B(G.getEntries());
      });
      return (I.observe(Object.assign({ type: A, buffered: !0 }, Q || {})), I);
    }
  } catch (I) {}
  return;
};
V6A.observe = Oc2;
