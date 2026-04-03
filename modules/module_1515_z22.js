// Module: z22
// Params: K22

Object.defineProperty(K22, '__esModule', { value: !0 });
K22.ConsoleMetricExporter = void 0;
var V22 = CD(),
  _x6 = gc1();
class dc1 {
  _shutdown = !1;
  _temporalitySelector;
  constructor(A) {
    this._temporalitySelector =
      A?.temporalitySelector ?? _x6.DEFAULT_AGGREGATION_TEMPORALITY_SELECTOR;
  }
  export(A, B) {
    if (this._shutdown) {
      setImmediate(B, { code: V22.ExportResultCode.FAILED });
      return;
    }
    return dc1._sendMetrics(A, B);
  }
  forceFlush() {
    return Promise.resolve();
  }
  selectAggregationTemporality(A) {
    return this._temporalitySelector(A);
  }
  shutdown() {
    return ((this._shutdown = !0), Promise.resolve());
  }
  static _sendMetrics(A, B) {
    for (let Q of A.scopeMetrics)
      for (let I of Q.metrics)
        console.dir(
          { descriptor: I.descriptor, dataPointType: I.dataPointType, dataPoints: I.dataPoints },
          { depth: null }
        );
    B({ code: V22.ExportResultCode.SUCCESS });
  }
}
K22.ConsoleMetricExporter = dc1;
