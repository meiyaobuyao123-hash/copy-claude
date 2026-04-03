// Module: a92
// Params: i92

Object.defineProperty(i92, '__esModule', { value: !0 });
i92.Meter = void 0;
var M_ = Ko(),
  L_ = qJ1(),
  R_ = YR();
class l92 {
  _meterSharedState;
  constructor(A) {
    this._meterSharedState = A;
  }
  createGauge(A, B) {
    let Q = M_.createInstrumentDescriptor(A, R_.InstrumentType.GAUGE, B),
      I = this._meterSharedState.registerMetricStorage(Q);
    return new L_.GaugeInstrument(I, Q);
  }
  createHistogram(A, B) {
    let Q = M_.createInstrumentDescriptor(A, R_.InstrumentType.HISTOGRAM, B),
      I = this._meterSharedState.registerMetricStorage(Q);
    return new L_.HistogramInstrument(I, Q);
  }
  createCounter(A, B) {
    let Q = M_.createInstrumentDescriptor(A, R_.InstrumentType.COUNTER, B),
      I = this._meterSharedState.registerMetricStorage(Q);
    return new L_.CounterInstrument(I, Q);
  }
  createUpDownCounter(A, B) {
    let Q = M_.createInstrumentDescriptor(A, R_.InstrumentType.UP_DOWN_COUNTER, B),
      I = this._meterSharedState.registerMetricStorage(Q);
    return new L_.UpDownCounterInstrument(I, Q);
  }
  createObservableGauge(A, B) {
    let Q = M_.createInstrumentDescriptor(A, R_.InstrumentType.OBSERVABLE_GAUGE, B),
      I = this._meterSharedState.registerAsyncMetricStorage(Q);
    return new L_.ObservableGaugeInstrument(Q, I, this._meterSharedState.observableRegistry);
  }
  createObservableCounter(A, B) {
    let Q = M_.createInstrumentDescriptor(A, R_.InstrumentType.OBSERVABLE_COUNTER, B),
      I = this._meterSharedState.registerAsyncMetricStorage(Q);
    return new L_.ObservableCounterInstrument(Q, I, this._meterSharedState.observableRegistry);
  }
  createObservableUpDownCounter(A, B) {
    let Q = M_.createInstrumentDescriptor(A, R_.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER, B),
      I = this._meterSharedState.registerAsyncMetricStorage(Q);
    return new L_.ObservableUpDownCounterInstrument(
      Q,
      I,
      this._meterSharedState.observableRegistry
    );
  }
  addBatchObservableCallback(A, B) {
    this._meterSharedState.observableRegistry.addBatchCallback(A, B);
  }
  removeBatchObservableCallback(A, B) {
    this._meterSharedState.observableRegistry.removeBatchCallback(A, B);
  }
}
i92.Meter = l92;
