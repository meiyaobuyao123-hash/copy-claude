// Module: V4A
// Params: X4A

Object.defineProperty(X4A, '__esModule', { value: !0 });
var G4A = tA(),
  D4A = vQ(),
  Z4A = DJ(),
  hm2 = iZ(),
  tA1 = iu(),
  Y4A = I4A();
function eA1(A, B, Q, I = {}) {
  let G = Z4A.getClient(),
    D = Z4A.getCurrentScope();
  if (G) {
    if (!G.metricsAggregator) {
      D4A.DEBUG_BUILD &&
        G4A.logger.warn(
          'No metrics aggregator enabled. Please add the MetricsAggregator integration to use metrics APIs'
        );
      return;
    }
    let { unit: Z, tags: Y, timestamp: W } = I,
      { release: F, environment: J } = G.getOptions(),
      C = D.getTransaction(),
      X = {};
    if (F) X.release = F;
    if (J) X.environment = J;
    if (C) X.transaction = hm2.spanToJSON(C).description || '';
    (D4A.DEBUG_BUILD && G4A.logger.log(`Adding value of ${Q} to ${A} metric ${B}`),
      G.metricsAggregator.add(A, B, Q, Z, { ...X, ...Y }, W));
  }
}
function W4A(A, B = 1, Q) {
  eA1(tA1.COUNTER_METRIC_TYPE, A, B, Q);
}
function F4A(A, B, Q) {
  eA1(tA1.DISTRIBUTION_METRIC_TYPE, A, B, Q);
}
function J4A(A, B, Q) {
  eA1(tA1.SET_METRIC_TYPE, A, B, Q);
}
function C4A(A, B, Q) {
  eA1(tA1.GAUGE_METRIC_TYPE, A, B, Q);
}
var mm2 = {
  increment: W4A,
  distribution: F4A,
  set: J4A,
  gauge: C4A,
  MetricsAggregator: Y4A.MetricsAggregator,
  metricsAggregatorIntegration: Y4A.metricsAggregatorIntegration,
};
X4A.distribution = F4A;
X4A.gauge = C4A;
X4A.increment = W4A;
X4A.metrics = mm2;
X4A.set = J4A;
