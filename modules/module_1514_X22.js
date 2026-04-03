// Module: X22
// Params: J22

Object.defineProperty(J22, '__esModule', { value: !0 });
J22.InMemoryMetricExporter = void 0;
var W22 = CD();
class F22 {
  _shutdown = !1;
  _aggregationTemporality;
  _metrics = [];
  constructor(A) {
    this._aggregationTemporality = A;
  }
  export(A, B) {
    if (this._shutdown) {
      setTimeout(() => B({ code: W22.ExportResultCode.FAILED }), 0);
      return;
    }
    (this._metrics.push(A), setTimeout(() => B({ code: W22.ExportResultCode.SUCCESS }), 0));
  }
  getMetrics() {
    return this._metrics;
  }
  forceFlush() {
    return Promise.resolve();
  }
  reset() {
    this._metrics = [];
  }
  selectAggregationTemporality(A) {
    return this._aggregationTemporality;
  }
  shutdown() {
    return ((this._shutdown = !0), Promise.resolve());
  }
}
J22.InMemoryMetricExporter = F22;
