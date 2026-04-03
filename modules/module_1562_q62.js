// Module: q62
// Params: N62

Object.defineProperty(N62, '__esModule', { value: !0 });
N62.View = void 0;
var rv6 = RJ1(),
  w62 = LJ1(),
  ov6 = X62(),
  tv6 = z62(),
  E62 = Jo();
function ev6(A) {
  return (
    A.instrumentName == null &&
    A.instrumentType == null &&
    A.instrumentUnit == null &&
    A.meterName == null &&
    A.meterVersion == null &&
    A.meterSchemaUrl == null
  );
}
function Ab6(A) {
  if (ev6(A)) throw new Error('Cannot create view with no selector arguments supplied');
  if (
    A.name != null &&
    (A?.instrumentName == null || rv6.PatternPredicate.hasWildcard(A.instrumentName))
  )
    throw new Error(
      'Views with a specified name must be declared with an instrument selector that selects at most one instrument per meter.'
    );
}
class U62 {
  name;
  description;
  aggregation;
  attributesProcessor;
  instrumentSelector;
  meterSelector;
  aggregationCardinalityLimit;
  constructor(A) {
    if ((Ab6(A), A.attributesProcessors != null))
      this.attributesProcessor = w62.createMultiAttributesProcessor(A.attributesProcessors);
    else this.attributesProcessor = w62.createNoopAttributesProcessor();
    ((this.name = A.name),
      (this.description = A.description),
      (this.aggregation = E62.toAggregation(
        A.aggregation ?? { type: E62.AggregationType.DEFAULT }
      )),
      (this.instrumentSelector = new ov6.InstrumentSelector({
        name: A.instrumentName,
        type: A.instrumentType,
        unit: A.instrumentUnit,
      })),
      (this.meterSelector = new tv6.MeterSelector({
        name: A.meterName,
        version: A.meterVersion,
        schemaUrl: A.meterSchemaUrl,
      })),
      (this.aggregationCardinalityLimit = A.aggregationCardinalityLimit));
  }
}
N62.View = U62;
