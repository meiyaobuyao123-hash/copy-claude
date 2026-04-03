// Module: O62
// Params: L62

Object.defineProperty(L62, '__esModule', { value: !0 });
L62.MeterProvider = void 0;
var OJ1 = C4(),
  Bb6 = Bl1(),
  Qb6 = A62(),
  Ib6 = G62(),
  Gb6 = q62();
class M62 {
  _sharedState;
  _shutdown = !1;
  constructor(A) {
    if (
      ((this._sharedState = new Qb6.MeterProviderSharedState(A?.resource ?? Bb6.defaultResource())),
      A?.views != null && A.views.length > 0)
    )
      for (let B of A.views) this._sharedState.viewRegistry.addView(new Gb6.View(B));
    if (A?.readers != null && A.readers.length > 0)
      for (let B of A.readers) {
        let Q = new Ib6.MetricCollector(this._sharedState, B);
        (B.setMetricProducer(Q), this._sharedState.metricCollectors.push(Q));
      }
  }
  getMeter(A, B = '', Q = {}) {
    if (this._shutdown)
      return (
        OJ1.diag.warn('A shutdown MeterProvider cannot provide a Meter'),
        OJ1.createNoopMeter()
      );
    return this._sharedState.getMeterSharedState({ name: A, version: B, schemaUrl: Q.schemaUrl })
      .meter;
  }
  async shutdown(A) {
    if (this._shutdown) {
      OJ1.diag.warn('shutdown may only be called once per MeterProvider');
      return;
    }
    ((this._shutdown = !0),
      await Promise.all(
        this._sharedState.metricCollectors.map((B) => {
          return B.shutdown(A);
        })
      ));
  }
  async forceFlush(A) {
    if (this._shutdown) {
      OJ1.diag.warn('invalid attempt to force flush after MeterProvider shutdown');
      return;
    }
    await Promise.all(
      this._sharedState.metricCollectors.map((B) => {
        return B.forceFlush(A);
      })
    );
  }
}
L62.MeterProvider = M62;
