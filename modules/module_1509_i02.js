// Module: i02
// Params: m02

Object.defineProperty(m02, '__esModule', { value: !0 });
m02.DEFAULT_AGGREGATION =
  m02.EXPONENTIAL_HISTOGRAM_AGGREGATION =
  m02.HISTOGRAM_AGGREGATION =
  m02.LAST_VALUE_AGGREGATION =
  m02.SUM_AGGREGATION =
  m02.DROP_AGGREGATION =
  m02.DefaultAggregation =
  m02.ExponentialHistogramAggregation =
  m02.ExplicitBucketHistogramAggregation =
  m02.HistogramAggregation =
  m02.LastValueAggregation =
  m02.SumAggregation =
  m02.DropAggregation =
    void 0;
var Kx6 = C4(),
  E_ = h02(),
  Aw = YR();
class KJ1 {
  static DEFAULT_INSTANCE = new E_.DropAggregator();
  createAggregator(A) {
    return KJ1.DEFAULT_INSTANCE;
  }
}
m02.DropAggregation = KJ1;
class Fo {
  static MONOTONIC_INSTANCE = new E_.SumAggregator(!0);
  static NON_MONOTONIC_INSTANCE = new E_.SumAggregator(!1);
  createAggregator(A) {
    switch (A.type) {
      case Aw.InstrumentType.COUNTER:
      case Aw.InstrumentType.OBSERVABLE_COUNTER:
      case Aw.InstrumentType.HISTOGRAM:
        return Fo.MONOTONIC_INSTANCE;
      default:
        return Fo.NON_MONOTONIC_INSTANCE;
    }
  }
}
m02.SumAggregation = Fo;
class HJ1 {
  static DEFAULT_INSTANCE = new E_.LastValueAggregator();
  createAggregator(A) {
    return HJ1.DEFAULT_INSTANCE;
  }
}
m02.LastValueAggregation = HJ1;
class zJ1 {
  static DEFAULT_INSTANCE = new E_.HistogramAggregator(
    [0, 5, 10, 25, 50, 75, 100, 250, 500, 750, 1000, 2500, 5000, 7500, 1e4],
    !0
  );
  createAggregator(A) {
    return zJ1.DEFAULT_INSTANCE;
  }
}
m02.HistogramAggregation = zJ1;
class fc1 {
  _recordMinMax;
  _boundaries;
  constructor(A, B = !0) {
    if (((this._recordMinMax = B), A == null))
      throw new Error(
        'ExplicitBucketHistogramAggregation should be created with explicit boundaries, if a single bucket histogram is required, please pass an empty array'
      );
    ((A = A.concat()), (A = A.sort((G, D) => G - D)));
    let Q = A.lastIndexOf(-1 / 0),
      I = A.indexOf(1 / 0);
    if (I === -1) I = void 0;
    this._boundaries = A.slice(Q + 1, I);
  }
  createAggregator(A) {
    return new E_.HistogramAggregator(this._boundaries, this._recordMinMax);
  }
}
m02.ExplicitBucketHistogramAggregation = fc1;
class vc1 {
  _maxSize;
  _recordMinMax;
  constructor(A = 160, B = !0) {
    ((this._maxSize = A), (this._recordMinMax = B));
  }
  createAggregator(A) {
    return new E_.ExponentialHistogramAggregator(this._maxSize, this._recordMinMax);
  }
}
m02.ExponentialHistogramAggregation = vc1;
class bc1 {
  _resolve(A) {
    switch (A.type) {
      case Aw.InstrumentType.COUNTER:
      case Aw.InstrumentType.UP_DOWN_COUNTER:
      case Aw.InstrumentType.OBSERVABLE_COUNTER:
      case Aw.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER:
        return m02.SUM_AGGREGATION;
      case Aw.InstrumentType.GAUGE:
      case Aw.InstrumentType.OBSERVABLE_GAUGE:
        return m02.LAST_VALUE_AGGREGATION;
      case Aw.InstrumentType.HISTOGRAM: {
        if (A.advice.explicitBucketBoundaries) return new fc1(A.advice.explicitBucketBoundaries);
        return m02.HISTOGRAM_AGGREGATION;
      }
    }
    return (Kx6.diag.warn(`Unable to recognize instrument type: ${A.type}`), m02.DROP_AGGREGATION);
  }
  createAggregator(A) {
    return this._resolve(A).createAggregator(A);
  }
}
m02.DefaultAggregation = bc1;
m02.DROP_AGGREGATION = new KJ1();
m02.SUM_AGGREGATION = new Fo();
m02.LAST_VALUE_AGGREGATION = new HJ1();
m02.HISTOGRAM_AGGREGATION = new zJ1();
m02.EXPONENTIAL_HISTOGRAM_AGGREGATION = new vc1();
m02.DEFAULT_AGGREGATION = new bc1();
