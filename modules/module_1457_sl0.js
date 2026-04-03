// Module: sl0
// Params: nl0

Object.defineProperty(nl0, '__esModule', { value: !0 });
nl0.HistogramAggregator = nl0.HistogramAccumulation = void 0;
var fN6 = rh(),
  Ao = YR(),
  vN6 = hV();
function bN6(A) {
  let B = A.map(() => 0);
  return (
    B.push(0),
    {
      buckets: { boundaries: A, counts: B },
      sum: 0,
      count: 0,
      hasMinMax: !1,
      min: 1 / 0,
      max: -1 / 0,
    }
  );
}
class Bo {
  startTime;
  _boundaries;
  _recordMinMax;
  _current;
  constructor(A, B, Q = !0, I = bN6(B)) {
    ((this.startTime = A), (this._boundaries = B), (this._recordMinMax = Q), (this._current = I));
  }
  record(A) {
    if (Number.isNaN(A)) return;
    if (((this._current.count += 1), (this._current.sum += A), this._recordMinMax))
      ((this._current.min = Math.min(A, this._current.min)),
        (this._current.max = Math.max(A, this._current.max)),
        (this._current.hasMinMax = !0));
    let B = vN6.binarySearchUB(this._boundaries, A);
    this._current.buckets.counts[B] += 1;
  }
  setStartTime(A) {
    this.startTime = A;
  }
  toPointValue() {
    return this._current;
  }
}
nl0.HistogramAccumulation = Bo;
class il0 {
  _boundaries;
  _recordMinMax;
  kind = fN6.AggregatorKind.HISTOGRAM;
  constructor(A, B) {
    ((this._boundaries = A), (this._recordMinMax = B));
  }
  createAccumulation(A) {
    return new Bo(A, this._boundaries, this._recordMinMax);
  }
  merge(A, B) {
    let Q = A.toPointValue(),
      I = B.toPointValue(),
      G = Q.buckets.counts,
      D = I.buckets.counts,
      Z = new Array(G.length);
    for (let F = 0; F < G.length; F++) Z[F] = G[F] + D[F];
    let Y = 1 / 0,
      W = -1 / 0;
    if (this._recordMinMax) {
      if (Q.hasMinMax && I.hasMinMax) ((Y = Math.min(Q.min, I.min)), (W = Math.max(Q.max, I.max)));
      else if (Q.hasMinMax) ((Y = Q.min), (W = Q.max));
      else if (I.hasMinMax) ((Y = I.min), (W = I.max));
    }
    return new Bo(A.startTime, Q.buckets.boundaries, this._recordMinMax, {
      buckets: { boundaries: Q.buckets.boundaries, counts: Z },
      count: Q.count + I.count,
      sum: Q.sum + I.sum,
      hasMinMax: this._recordMinMax && (Q.hasMinMax || I.hasMinMax),
      min: Y,
      max: W,
    });
  }
  diff(A, B) {
    let Q = A.toPointValue(),
      I = B.toPointValue(),
      G = Q.buckets.counts,
      D = I.buckets.counts,
      Z = new Array(G.length);
    for (let Y = 0; Y < G.length; Y++) Z[Y] = D[Y] - G[Y];
    return new Bo(B.startTime, Q.buckets.boundaries, this._recordMinMax, {
      buckets: { boundaries: Q.buckets.boundaries, counts: Z },
      count: I.count - Q.count,
      sum: I.sum - Q.sum,
      hasMinMax: !1,
      min: 1 / 0,
      max: -1 / 0,
    });
  }
  toMetricData(A, B, Q, I) {
    return {
      descriptor: A,
      aggregationTemporality: B,
      dataPointType: Ao.DataPointType.HISTOGRAM,
      dataPoints: Q.map(([G, D]) => {
        let Z = D.toPointValue(),
          Y =
            A.type === Ao.InstrumentType.GAUGE ||
            A.type === Ao.InstrumentType.UP_DOWN_COUNTER ||
            A.type === Ao.InstrumentType.OBSERVABLE_GAUGE ||
            A.type === Ao.InstrumentType.OBSERVABLE_UP_DOWN_COUNTER;
        return {
          attributes: G,
          startTime: D.startTime,
          endTime: I,
          value: {
            min: Z.hasMinMax ? Z.min : void 0,
            max: Z.hasMinMax ? Z.max : void 0,
            sum: !Y ? Z.sum : void 0,
            buckets: Z.buckets,
            count: Z.count,
          },
        };
      }),
    };
  }
}
nl0.HistogramAggregator = il0;
