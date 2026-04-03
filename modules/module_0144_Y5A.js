// Module: Y5A
// Params: Z5A

Object.defineProperty(Z5A, '__esModule', { value: !0 });
var Ip = tA(),
  D5A = sZ(),
  Gp = LW();
function di2(A, B = !0, Q = !0) {
  if (!Gp.WINDOW || !Gp.WINDOW.location) {
    D5A.DEBUG_BUILD &&
      Ip.logger.warn('Could not initialize routing instrumentation due to invalid location');
    return;
  }
  let I = Gp.WINDOW.location.href,
    G;
  if (B)
    G = A({
      name: Gp.WINDOW.location.pathname,
      startTimestamp: Ip.browserPerformanceTimeOrigin
        ? Ip.browserPerformanceTimeOrigin / 1000
        : void 0,
      op: 'pageload',
      origin: 'auto.pageload.browser',
      metadata: { source: 'url' },
    });
  if (Q)
    Ip.addHistoryInstrumentationHandler(({ to: D, from: Z }) => {
      if (Z === void 0 && I && I.indexOf(D) !== -1) {
        I = void 0;
        return;
      }
      if (Z !== D) {
        if (((I = void 0), G))
          (D5A.DEBUG_BUILD &&
            Ip.logger.log(`[Tracing] Finishing current transaction with op: ${G.op}`),
            G.end());
        G = A({
          name: Gp.WINDOW.location.pathname,
          op: 'navigation',
          origin: 'auto.navigation.browser',
          metadata: { source: 'url' },
        });
      }
    });
}
Z5A.instrumentRoutingWithDefaults = di2;
