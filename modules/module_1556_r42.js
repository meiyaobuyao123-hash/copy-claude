// Module: r42
// Params: a42

Object.defineProperty(a42, '__esModule', { value: !0 });
a42.MeterSharedState = void 0;
var xv6 = Ko(),
  fv6 = a92(),
  vv6 = hV(),
  bv6 = F42(),
  gv6 = N42(),
  hv6 = L42(),
  mv6 = v42(),
  dv6 = m42(),
  uv6 = LJ1();
class n42 {
  _meterProviderSharedState;
  _instrumentationScope;
  metricStorageRegistry = new gv6.MetricStorageRegistry();
  observableRegistry = new mv6.ObservableRegistry();
  meter;
  constructor(A, B) {
    ((this._meterProviderSharedState = A),
      (this._instrumentationScope = B),
      (this.meter = new fv6.Meter(this)));
  }
  registerMetricStorage(A) {
    let B = this._registerMetricStorage(A, dv6.SyncMetricStorage);
    if (B.length === 1) return B[0];
    return new hv6.MultiMetricStorage(B);
  }
  registerAsyncMetricStorage(A) {
    return this._registerMetricStorage(A, bv6.AsyncMetricStorage);
  }
  async collect(A, B, Q) {
    let I = await this.observableRegistry.observe(B, Q?.timeoutMillis),
      G = this.metricStorageRegistry.getStorages(A);
    if (G.length === 0) return null;
    let D = G.map((Z) => {
      return Z.collect(A, B);
    }).filter(vv6.isNotNullish);
    if (D.length === 0) return { errors: I };
    return { scopeMetrics: { scope: this._instrumentationScope, metrics: D }, errors: I };
  }
  _registerMetricStorage(A, B) {
    let I = this._meterProviderSharedState.viewRegistry
      .findViews(A, this._instrumentationScope)
      .map((G) => {
        let D = xv6.createInstrumentDescriptorWithView(G, A),
          Z = this.metricStorageRegistry.findOrUpdateCompatibleStorage(D);
        if (Z != null) return Z;
        let Y = G.aggregation.createAggregator(D),
          W = new B(
            D,
            Y,
            G.attributesProcessor,
            this._meterProviderSharedState.metricCollectors,
            G.aggregationCardinalityLimit
          );
        return (this.metricStorageRegistry.register(W), W);
      });
    if (I.length === 0) {
      let D = this._meterProviderSharedState.selectAggregations(A.type).map(([Z, Y]) => {
        let W = this.metricStorageRegistry.findOrUpdateCompatibleCollectorStorage(Z, A);
        if (W != null) return W;
        let F = Y.createAggregator(A),
          J = Z.selectCardinalityLimit(A.type),
          C = new B(A, F, uv6.createNoopAttributesProcessor(), [Z], J);
        return (this.metricStorageRegistry.registerForCollector(Z, C), C);
      });
      I = I.concat(D);
    }
    return I;
  }
}
a42.MeterSharedState = n42;
