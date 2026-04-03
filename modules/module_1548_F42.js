// Module: F42
// Params: Y42

Object.defineProperty(Y42, '__esModule', { value: !0 });
Y42.AsyncMetricStorage = void 0;
var Wv6 = Ql1(),
  Fv6 = Dl1(),
  Jv6 = Zl1(),
  Cv6 = Ho();
class Z42 extends Wv6.MetricStorage {
  _attributesProcessor;
  _aggregationCardinalityLimit;
  _deltaMetricStorage;
  _temporalMetricStorage;
  constructor(A, B, Q, I, G) {
    super(A);
    ((this._attributesProcessor = Q),
      (this._aggregationCardinalityLimit = G),
      (this._deltaMetricStorage = new Fv6.DeltaMetricProcessor(
        B,
        this._aggregationCardinalityLimit
      )),
      (this._temporalMetricStorage = new Jv6.TemporalMetricProcessor(B, I)));
  }
  record(A, B) {
    let Q = new Cv6.AttributeHashMap();
    (Array.from(A.entries()).forEach(([I, G]) => {
      Q.set(this._attributesProcessor.process(I), G);
    }),
      this._deltaMetricStorage.batchCumulate(Q, B));
  }
  collect(A, B) {
    let Q = this._deltaMetricStorage.collect();
    return this._temporalMetricStorage.buildMetrics(A, this._instrumentDescriptor, Q, B);
  }
}
Y42.AsyncMetricStorage = Z42;
