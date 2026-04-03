// Module: Ti0
// Params: Ri0

Object.defineProperty(Ri0, '__esModule', { value: !0 });
Ri0.ExponentialHistogramAggregator = Ri0.ExponentialHistogramAccumulation = void 0;
var I$6 = rh(),
  Qo = YR(),
  G$6 = C4(),
  qi0 = tl0(),
  Mi0 = $i0(),
  D$6 = AJ1();
class eh {
  low;
  high;
  static combine(A, B) {
    return new eh(Math.min(A.low, B.low), Math.max(A.high, B.high));
  }
  constructor(A, B) {
    ((this.low = A), (this.high = B));
  }
}
var Z$6 = 20,
  Y$6 = 160,
  zc1 = 2;
class QJ1 {
  startTime;
  _maxSize;
  _recordMinMax;
  _sum;
  _count;
  _zeroCount;
  _min;
  _max;
  _positive;
  _negative;
  _mapping;
  constructor(
    A = A,
    B = Y$6,
    Q = !0,
    I = 0,
    G = 0,
    D = 0,
    Z = Number.POSITIVE_INFINITY,
    Y = Number.NEGATIVE_INFINITY,
    W = new qi0.Buckets(),
    F = new qi0.Buckets(),
    J = Mi0.getMapping(Z$6)
  ) {
    if (
      ((this.startTime = A),
      (this._maxSize = B),
      (this._recordMinMax = Q),
      (this._sum = I),
      (this._count = G),
      (this._zeroCount = D),
      (this._min = Z),
      (this._max = Y),
      (this._positive = W),
      (this._negative = F),
      (this._mapping = J),
      this._maxSize < zc1)
    )
      (G$6.diag.warn(
        `Exponential Histogram Max Size set to ${this._maxSize},                 changing to the minimum size of: ${zc1}`
      ),
        (this._maxSize = zc1));
  }
  record(A) {
    this.updateByIncrement(A, 1);
  }
  setStartTime(A) {
    this.startTime = A;
  }
  toPointValue() {
    return {
      hasMinMax: this._recordMinMax,
      min: this.min,
      max: this.max,
      sum: this.sum,
      positive: { offset: this.positive.offset, bucketCounts: this.positive.counts() },
      negative: { offset: this.negative.offset, bucketCounts: this.negative.counts() },
      count: this.count,
      scale: this.scale,
      zeroCount: this.zeroCount,
    };
  }
  get sum() {
    return this._sum;
  }
  get min() {
    return this._min;
  }
  get max() {
    return this._max;
  }
  get count() {
    return this._count;
  }
  get zeroCount() {
    return this._zeroCount;
  }
  get scale() {
    if (this._count === this._zeroCount) return 0;
    return this._mapping.scale;
  }
  get positive() {
    return this._positive;
  }
  get negative() {
    return this._negative;
  }
  updateByIncrement(A, B) {
    if (Number.isNaN(A)) return;
    if (A > this._max) this._max = A;
    if (A < this._min) this._min = A;
    if (((this._count += B), A === 0)) {
      this._zeroCount += B;
      return;
    }
    if (((this._sum += A * B), A > 0)) this._updateBuckets(this._positive, A, B);
    else this._updateBuckets(this._negative, -A, B);
  }
  merge(A) {
    if (this._count === 0) ((this._min = A.min), (this._max = A.max));
    else if (A.count !== 0) {
      if (A.min < this.min) this._min = A.min;
      if (A.max > this.max) this._max = A.max;
    }
    ((this.startTime = A.startTime),
      (this._sum += A.sum),
      (this._count += A.count),
      (this._zeroCount += A.zeroCount));
    let B = this._minScale(A);
    (this._downscale(this.scale - B),
      this._mergeBuckets(this.positive, A, A.positive, B),
      this._mergeBuckets(this.negative, A, A.negative, B));
  }
  diff(A) {
    ((this._min = 1 / 0),
      (this._max = -1 / 0),
      (this._sum -= A.sum),
      (this._count -= A.count),
      (this._zeroCount -= A.zeroCount));
    let B = this._minScale(A);
    (this._downscale(this.scale - B),
      this._diffBuckets(this.positive, A, A.positive, B),
      this._diffBuckets(this.negative, A, A.negative, B));
  }
  clone() {
    return new QJ1(
      this.startTime,
      this._maxSize,
      this._recordMinMax,
      this._sum,
      this._count,
      this._zeroCount,
      this._min,
      this._max,
      this.positive.clone(),
      this.negative.clone(),
      this._mapping
    );
  }
  _updateBuckets(A, B, Q) {
    let I = this._mapping.mapToIndex(B),
      G = !1,
      D = 0,
      Z = 0;
    if (A.length === 0)
      ((A.indexStart = I), (A.indexEnd = A.indexStart), (A.indexBase = A.indexStart));
    else if (I < A.indexStart && A.indexEnd - I >= this._maxSize)
      ((G = !0), (Z = I), (D = A.indexEnd));
    else if (I > A.indexEnd && I - A.indexStart >= this._maxSize)
      ((G = !0), (Z = A.indexStart), (D = I));
    if (G) {
      let Y = this._changeScale(D, Z);
      (this._downscale(Y), (I = this._mapping.mapToIndex(B)));
    }
    this._incrementIndexBy(A, I, Q);
  }
  _incrementIndexBy(A, B, Q) {
    if (Q === 0) return;
    if (A.length === 0) A.indexStart = A.indexEnd = A.indexBase = B;
    if (B < A.indexStart) {
      let G = A.indexEnd - B;
      if (G >= A.backing.length) this._grow(A, G + 1);
      A.indexStart = B;
    } else if (B > A.indexEnd) {
      let G = B - A.indexStart;
      if (G >= A.backing.length) this._grow(A, G + 1);
      A.indexEnd = B;
    }
    let I = B - A.indexBase;
    if (I < 0) I += A.backing.length;
    A.incrementBucket(I, Q);
  }
  _grow(A, B) {
    let Q = A.backing.length,
      I = A.indexBase - A.indexStart,
      G = Q - I,
      D = D$6.nextGreaterSquare(B);
    if (D > this._maxSize) D = this._maxSize;
    let Z = D - I;
    A.backing.growTo(D, G, Z);
  }
  _changeScale(A, B) {
    let Q = 0;
    while (A - B >= this._maxSize) ((A >>= 1), (B >>= 1), Q++);
    return Q;
  }
  _downscale(A) {
    if (A === 0) return;
    if (A < 0) throw new Error(`impossible change of scale: ${this.scale}`);
    let B = this._mapping.scale - A;
    (this._positive.downscale(A), this._negative.downscale(A), (this._mapping = Mi0.getMapping(B)));
  }
  _minScale(A) {
    let B = Math.min(this.scale, A.scale),
      Q = eh.combine(
        this._highLowAtScale(this.positive, this.scale, B),
        this._highLowAtScale(A.positive, A.scale, B)
      ),
      I = eh.combine(
        this._highLowAtScale(this.negative, this.scale, B),
        this._highLowAtScale(A.negative, A.scale, B)
      );
    return Math.min(B - this._changeScale(Q.high, Q.low), B - this._changeScale(I.high, I.low));
  }
  _highLowAtScale(A, B, Q) {
    if (A.length === 0) return new eh(0, -1);
    let I = B - Q;
    return new eh(A.indexStart >> I, A.indexEnd >> I);
  }
  _mergeBuckets(A, B, Q, I) {
    let G = Q.offset,
      D = B.scale - I;
    for (let Z = 0; Z < Q.length; Z++) this._incrementIndexBy(A, (G + Z) >> D, Q.at(Z));
  }
  _diffBuckets(A, B, Q, I) {
    let G = Q.offset,
      D = B.scale - I;
    for (let Z = 0; Z < Q.length; Z++) {
      let W = ((G + Z) >> D) - A.indexBase;
      if (W < 0) W += A.backing.length;
      A.decrementBucket(W, Q.at(Z));
    }
    A.trim();
  }
}
Ri0.ExponentialHistogramAccumulation = QJ1;
class Li0 {
  _maxSize;
  _recordMinMax;
  kind = I$6.AggregatorKind.EXPONENTIAL_HISTOGRAM;
  constructor(A, B) {
    ((this._maxSize = A), (this._recordMinMax = B));
  }
  createAccumulation(A) {
    return new QJ1(A, this._maxSize, this._recordMinMax);
  }
  merge(A, B) {
    let Q = B.clone();
    return (Q.merge(A), Q);
  }
  diff(A, B) {
    let Q = B.clone();
    return (Q.diff(A), Q);
  }
  toMetricData(A, B, Q, I) {
    return {
      descriptor: A,
      aggregationTemporality: B,
      dataPointType: Qo.DataPointType.EXPONENTIAL_HISTOGRAM,
      dataPoints: Q.map(([G, D]) => {
        let Z = D.toPointValue(),
          Y =
            A.type === Qo.InstrumentType.GAUGE ||
            A.type === Qo.InstrumentType.UP_DOWN_COUNTER ||
            A.type === Qo.InstrumentType.OBSERVABLE_GAUGE ||
            A.type === Qo.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER;
        return {
          attributes: G,
          startTime: D.startTime,
          endTime: I,
          value: {
            min: Z.hasMinMax ? Z.min : void 0,
            max: Z.hasMinMax ? Z.max : void 0,
            sum: !Y ? Z.sum : void 0,
            positive: { offset: Z.positive.offset, bucketCounts: Z.positive.bucketCounts },
            negative: { offset: Z.negative.offset, bucketCounts: Z.negative.bucketCounts },
            count: Z.count,
            scale: Z.scale,
            zeroCount: Z.zeroCount,
          },
        };
      }),
    };
  }
}
Ri0.ExponentialHistogramAggregator = Li0;
