// Module: wl1
// Params: G52

Object.defineProperty(G52, '__esModule', { value: !0 });
G52.OTLPMetricExporterBase =
  G52.LowMemoryTemporalitySelector =
  G52.DeltaTemporalitySelector =
  G52.CumulativeTemporalitySelector =
    void 0;
var bb6 = CD(),
  eQ = O_(),
  Q52 = Cl1(),
  gb6 = PJ1(),
  hb6 = C4(),
  mb6 = () => eQ.AggregationTemporality.CUMULATIVE;
G52.CumulativeTemporalitySelector = mb6;
var db6 = (A) => {
  switch (A) {
    case eQ.InstrumentType.COUNTER:
    case eQ.InstrumentType.OBSERVABLE_COUNTER:
    case eQ.InstrumentType.GAUGE:
    case eQ.InstrumentType.HISTOGRAM:
    case eQ.InstrumentType.OBSERVABLE_GAUGE:
      return eQ.AggregationTemporality.DELTA;
    case eQ.InstrumentType.UP_DOWN_COUNTER:
    case eQ.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
      return eQ.AggregationTemporality.CUMULATIVE;
  }
};
G52.DeltaTemporalitySelector = db6;
var ub6 = (A) => {
  switch (A) {
    case eQ.InstrumentType.COUNTER:
    case eQ.InstrumentType.HISTOGRAM:
      return eQ.AggregationTemporality.DELTA;
    case eQ.InstrumentType.GAUGE:
    case eQ.InstrumentType.UP_DOWN_COUNTER:
    case eQ.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
    case eQ.InstrumentType.OBSERVABLE_COUNTER:
    case eQ.InstrumentType.OBSERVABLE_GAUGE:
      return eQ.AggregationTemporality.CUMULATIVE;
  }
};
G52.LowMemoryTemporalitySelector = ub6;
function pb6() {
  let A = (
    bb6.getStringFromEnv('OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE') ?? 'cumulative'
  ).toLowerCase();
  if (A === 'cumulative') return G52.CumulativeTemporalitySelector;
  if (A === 'delta') return G52.DeltaTemporalitySelector;
  if (A === 'lowmemory') return G52.LowMemoryTemporalitySelector;
  return (
    hb6.diag.warn(
      `OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE is set to '${A}', but only 'cumulative' and 'delta' are allowed. Using default ('cumulative') instead.`
    ),
    G52.CumulativeTemporalitySelector
  );
}
function cb6(A) {
  if (A != null) {
    if (A === Q52.AggregationTemporalityPreference.DELTA) return G52.DeltaTemporalitySelector;
    else if (A === Q52.AggregationTemporalityPreference.LOWMEMORY)
      return G52.LowMemoryTemporalitySelector;
    return G52.CumulativeTemporalitySelector;
  }
  return pb6();
}
var lb6 = Object.freeze({ type: eQ.AggregationType.DEFAULT });
function ib6(A) {
  return A?.aggregationPreference ?? (() => lb6);
}
class I52 extends gb6.OTLPExporterBase {
  _aggregationTemporalitySelector;
  _aggregationSelector;
  constructor(A, B) {
    super(A);
    ((this._aggregationSelector = ib6(B)),
      (this._aggregationTemporalitySelector = cb6(B?.temporalityPreference)));
  }
  selectAggregation(A) {
    return this._aggregationSelector(A);
  }
  selectAggregationTemporality(A) {
    return this._aggregationTemporalitySelector(A);
  }
}
G52.OTLPMetricExporterBase = I52;
