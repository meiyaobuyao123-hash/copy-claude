// Module: Jo
// Params: a02

Object.defineProperty(a02, '__esModule', { value: !0 });
a02.toAggregation = a02.AggregationType = void 0;
var U_ = i02(),
  N_;
(function (A) {
  ((A[(A.DEFAULT = 0)] = 'DEFAULT'),
    (A[(A.DROP = 1)] = 'DROP'),
    (A[(A.SUM = 2)] = 'SUM'),
    (A[(A.LAST_VALUE = 3)] = 'LAST_VALUE'),
    (A[(A.EXPLICIT_BUCKET_HISTOGRAM = 4)] = 'EXPLICIT_BUCKET_HISTOGRAM'),
    (A[(A.EXPONENTIAL_HISTOGRAM = 5)] = 'EXPONENTIAL_HISTOGRAM'));
})((N_ = a02.AggregationType || (a02.AggregationType = {})));
function Mx6(A) {
  switch (A.type) {
    case N_.DEFAULT:
      return U_.DEFAULT_AGGREGATION;
    case N_.DROP:
      return U_.DROP_AGGREGATION;
    case N_.SUM:
      return U_.SUM_AGGREGATION;
    case N_.LAST_VALUE:
      return U_.LAST_VALUE_AGGREGATION;
    case N_.EXPONENTIAL_HISTOGRAM: {
      let B = A;
      return new U_.ExponentialHistogramAggregation(B.options?.maxSize, B.options?.recordMinMax);
    }
    case N_.EXPLICIT_BUCKET_HISTOGRAM: {
      let B = A;
      if (B.options == null) return U_.HISTOGRAM_AGGREGATION;
      else
        return new U_.ExplicitBucketHistogramAggregation(
          B.options?.boundaries,
          B.options?.recordMinMax
        );
    }
    default:
      throw new Error('Unsupported Aggregation');
  }
}
a02.toAggregation = Mx6;
