// Module: G62
// Params: Q62

Object.defineProperty(Q62, '__esModule', { value: !0 });
Q62.MetricCollector = void 0;
var nv6 = CD();
class B62 {
  _sharedState;
  _metricReader;
  constructor(A, B) {
    ((this._sharedState = A), (this._metricReader = B));
  }
  async collect(A) {
    let B = nv6.millisToHrTime(Date.now()),
      Q = [],
      I = [],
      G = Array.from(this._sharedState.meterSharedStates.values()).map(async (D) => {
        let Z = await D.collect(this, B, A);
        if (Z?.scopeMetrics != null) Q.push(Z.scopeMetrics);
        if (Z?.errors != null) I.push(...Z.errors);
      });
    return (
      await Promise.all(G),
      { resourceMetrics: { resource: this._sharedState.resource, scopeMetrics: Q }, errors: I }
    );
  }
  async forceFlush(A) {
    await this._metricReader.forceFlush(A);
  }
  async shutdown(A) {
    await this._metricReader.shutdown(A);
  }
  selectAggregationTemporality(A) {
    return this._metricReader.selectAggregationTemporality(A);
  }
  selectAggregation(A) {
    return this._metricReader.selectAggregation(A);
  }
  selectCardinalityLimit(A) {
    return this._metricReader.selectCardinalityLimit?.(A) ?? 2000;
  }
}
Q62.MetricCollector = B62;
