// Module: x02
// Params: y02

Object.defineProperty(y02, '__esModule', { value: !0 });
y02.SumAggregator = y02.SumAccumulation = void 0;
var Fx6 = rh(),
  Jx6 = YR();
class w_ {
  startTime;
  monotonic;
  _current;
  reset;
  constructor(A, B, Q = 0, I = !1) {
    ((this.startTime = A), (this.monotonic = B), (this._current = Q), (this.reset = I));
  }
  record(A) {
    if (this.monotonic && A < 0) return;
    this._current += A;
  }
  setStartTime(A) {
    this.startTime = A;
  }
  toPointValue() {
    return this._current;
  }
}
y02.SumAccumulation = w_;
class j02 {
  monotonic;
  kind = Fx6.AggregatorKind.SUM;
  constructor(A) {
    this.monotonic = A;
  }
  createAccumulation(A) {
    return new w_(A, this.monotonic);
  }
  merge(A, B) {
    let Q = A.toPointValue(),
      I = B.toPointValue();
    if (B.reset) return new w_(B.startTime, this.monotonic, I, B.reset);
    return new w_(A.startTime, this.monotonic, Q + I);
  }
  diff(A, B) {
    let Q = A.toPointValue(),
      I = B.toPointValue();
    if (this.monotonic && Q > I) return new w_(B.startTime, this.monotonic, I, !0);
    return new w_(B.startTime, this.monotonic, I - Q);
  }
  toMetricData(A, B, Q, I) {
    return {
      descriptor: A,
      aggregationTemporality: B,
      dataPointType: Jx6.DataPointType.SUM,
      dataPoints: Q.map(([G, D]) => {
        return { attributes: G, startTime: D.startTime, endTime: I, value: D.toPointValue() };
      }),
      isMonotonic: this.monotonic,
    };
  }
}
y02.SumAggregator = j02;
