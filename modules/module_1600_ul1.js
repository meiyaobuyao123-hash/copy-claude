// Module: ul1
// Params: R82

Object.defineProperty(R82, '__esModule', { value: !0 });
R82.createExportMetricsServiceRequest =
  R82.toMetric =
  R82.toScopeMetrics =
  R82.toResourceMetrics =
    void 0;
var N82 = C4(),
  Wm = O_(),
  _g6 = bJ1(),
  qo = gJ1();
function q82(A, B) {
  let Q = _g6.getOtlpEncoder(B);
  return {
    resource: qo.createResource(A.resource),
    schemaUrl: void 0,
    scopeMetrics: M82(A.scopeMetrics, Q),
  };
}
R82.toResourceMetrics = q82;
function M82(A, B) {
  return Array.from(
    A.map((Q) => ({
      scope: qo.createInstrumentationScope(Q.scope),
      metrics: Q.metrics.map((I) => L82(I, B)),
      schemaUrl: Q.scope.schemaUrl,
    }))
  );
}
R82.toScopeMetrics = M82;
function L82(A, B) {
  let Q = {
      name: A.descriptor.name,
      description: A.descriptor.description,
      unit: A.descriptor.unit,
    },
    I = xg6(A.aggregationTemporality);
  switch (A.dataPointType) {
    case Wm.DataPointType.SUM:
      Q.sum = { aggregationTemporality: I, isMonotonic: A.isMonotonic, dataPoints: $82(A, B) };
      break;
    case Wm.DataPointType.GAUGE:
      Q.gauge = { dataPoints: $82(A, B) };
      break;
    case Wm.DataPointType.HISTOGRAM:
      Q.histogram = { aggregationTemporality: I, dataPoints: yg6(A, B) };
      break;
    case Wm.DataPointType.EXPONENTIAL_HISTOGRAM:
      Q.exponentialHistogram = { aggregationTemporality: I, dataPoints: kg6(A, B) };
      break;
  }
  return Q;
}
R82.toMetric = L82;
function jg6(A, B, Q) {
  let I = {
    attributes: qo.toAttributes(A.attributes),
    startTimeUnixNano: Q.encodeHrTime(A.startTime),
    timeUnixNano: Q.encodeHrTime(A.endTime),
  };
  switch (B) {
    case N82.ValueType.INT:
      I.asInt = A.value;
      break;
    case N82.ValueType.DOUBLE:
      I.asDouble = A.value;
      break;
  }
  return I;
}
function $82(A, B) {
  return A.dataPoints.map((Q) => {
    return jg6(Q, A.descriptor.valueType, B);
  });
}
function yg6(A, B) {
  return A.dataPoints.map((Q) => {
    let I = Q.value;
    return {
      attributes: qo.toAttributes(Q.attributes),
      bucketCounts: I.buckets.counts,
      explicitBounds: I.buckets.boundaries,
      count: I.count,
      sum: I.sum,
      min: I.min,
      max: I.max,
      startTimeUnixNano: B.encodeHrTime(Q.startTime),
      timeUnixNano: B.encodeHrTime(Q.endTime),
    };
  });
}
function kg6(A, B) {
  return A.dataPoints.map((Q) => {
    let I = Q.value;
    return {
      attributes: qo.toAttributes(Q.attributes),
      count: I.count,
      min: I.min,
      max: I.max,
      sum: I.sum,
      positive: { offset: I.positive.offset, bucketCounts: I.positive.bucketCounts },
      negative: { offset: I.negative.offset, bucketCounts: I.negative.bucketCounts },
      scale: I.scale,
      zeroCount: I.zeroCount,
      startTimeUnixNano: B.encodeHrTime(Q.startTime),
      timeUnixNano: B.encodeHrTime(Q.endTime),
    };
  });
}
function xg6(A) {
  switch (A) {
    case Wm.AggregationTemporality.DELTA:
      return 1;
    case Wm.AggregationTemporality.CUMULATIVE:
      return 2;
  }
}
function fg6(A, B) {
  return { resourceMetrics: A.map((Q) => q82(Q, B)) };
}
R82.createExportMetricsServiceRequest = fg6;
