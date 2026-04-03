// Module: m42
// Params: g42

Object.defineProperty(g42, '__esModule', { value: !0 });
g42.SyncMetricStorage = void 0;
var Mv6 = Ql1(),
  Lv6 = Dl1(),
  Rv6 = Zl1();
class b42 extends Mv6.MetricStorage {
  _attributesProcessor;
  _aggregationCardinalityLimit;
  _deltaMetricStorage;
  _temporalMetricStorage;
  constructor(A, B, Q, I, G) {
    super(A);
    ((this._attributesProcessor = Q),
      (this._aggregationCardinalityLimit = G),
      (this._deltaMetricStorage = new Lv6.DeltaMetricProcessor(
        B,
        this._aggregationCardinalityLimit
      )),
      (this._temporalMetricStorage = new Rv6.TemporalMetricProcessor(B, I)));
  }
  record(A, B, Q, I) {
    ((B = this._attributesProcessor.process(B, Q)), this._deltaMetricStorage.record(A, B, Q, I));
  }
  collect(A, B) {
    let Q = this._deltaMetricStorage.collect();
    return this._temporalMetricStorage.buildMetrics(A, this._instrumentDescriptor, Q, B);
  }
}
g42.SyncMetricStorage = b42;
