// Module: hc1
// Params: B22

Object.defineProperty(B22, '__esModule', { value: !0 });
B22.MetricReader = void 0;
var t02 = C4(),
  wJ1 = hV(),
  e02 = gc1();
class A22 {
  _shutdown = !1;
  _metricProducers;
  _sdkMetricProducer;
  _aggregationTemporalitySelector;
  _aggregationSelector;
  _cardinalitySelector;
  constructor(A) {
    ((this._aggregationSelector = A?.aggregationSelector ?? e02.DEFAULT_AGGREGATION_SELECTOR),
      (this._aggregationTemporalitySelector =
        A?.aggregationTemporalitySelector ?? e02.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR),
      (this._metricProducers = A?.metricProducers ?? []),
      (this._cardinalitySelector = A?.cardinalitySelector));
  }
  setMetricProducer(A) {
    if (this._sdkMetricProducer)
      throw new Error('MetricReader can not be bound to a MeterProvider again.');
    ((this._sdkMetricProducer = A), this.onInitialized());
  }
  selectAggregation(A) {
    return this._aggregationSelector(A);
  }
  selectAggregationTemporality(A) {
    return this._aggregationTemporalitySelector(A);
  }
  selectCardinalityLimit(A) {
    return this._cardinalitySelector ? this._cardinalitySelector(A) : 2000;
  }
  onInitialized() {}
  async collect(A) {
    if (this._sdkMetricProducer === void 0)
      throw new Error('MetricReader is not bound to a MetricProducer');
    if (this._shutdown) throw new Error('MetricReader is shutdown');
    let [B, ...Q] = await Promise.all([
        this._sdkMetricProducer.collect({ timeoutMillis: A?.timeoutMillis }),
        ...this._metricProducers.map((Z) => Z.collect({ timeoutMillis: A?.timeoutMillis })),
      ]),
      I = B.errors.concat(wJ1.FlatMap(Q, (Z) => Z.errors)),
      G = B.resourceMetrics.resource,
      D = B.resourceMetrics.scopeMetrics.concat(
        wJ1.FlatMap(Q, (Z) => Z.resourceMetrics.scopeMetrics)
      );
    return { resourceMetrics: { resource: G, scopeMetrics: D }, errors: I };
  }
  async shutdown(A) {
    if (this._shutdown) {
      t02.diag.error('Cannot call shutdown twice.');
      return;
    }
    if (A?.timeoutMillis == null) await this.onShutdown();
    else await wJ1.callWithTimeout(this.onShutdown(), A.timeoutMillis);
    this._shutdown = !0;
  }
  async forceFlush(A) {
    if (this._shutdown) {
      t02.diag.warn('Cannot forceFlush on already shutdown MetricReader.');
      return;
    }
    if (A?.timeoutMillis == null) {
      await this.onForceFlush();
      return;
    }
    await wJ1.callWithTimeout(this.onForceFlush(), A.timeoutMillis);
  }
}
B22.MetricReader = A22;
