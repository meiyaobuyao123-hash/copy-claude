// Module: I4A
// Params: Q4A

Object.defineProperty(Q4A, '__esModule', { value: !0 });
var e9A = qE(),
  xm2 = t9A(),
  A4A = 'MetricsAggregator',
  fm2 = () => {
    return {
      name: A4A,
      setupOnce() {},
      setup(A) {
        A.metricsAggregator = new xm2.BrowserMetricsAggregator(A);
      },
    };
  },
  B4A = e9A.defineIntegration(fm2),
  vm2 = e9A.convertIntegrationFnToClass(A4A, B4A);
Q4A.MetricsAggregator = vm2;
Q4A.metricsAggregatorIntegration = B4A;
