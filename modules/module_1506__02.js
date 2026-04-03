// Module: _02
// Params: P02

Object.defineProperty(P02, '__esModule', { value: !0 });
P02.LastValueAggregator = P02.LastValueAccumulation = void 0;
var Zx6 = rh(),
  Yo = CD(),
  Yx6 = YR();
class Wo {
  startTime;
  _current;
  sampleTime;
  constructor(A, B = 0, Q = [0, 0]) {
    ((this.startTime = A), (this._current = B), (this.sampleTime = Q));
  }
  record(A) {
    ((this._current = A), (this.sampleTime = Yo.millisToHrTime(Date.now())));
  }
  setStartTime(A) {
    this.startTime = A;
  }
  toPointValue() {
    return this._current;
  }
}
P02.LastValueAccumulation = Wo;
class T02 {
  kind = Zx6.AggregatorKind.LAST_VALUE;
  createAccumulation(A) {
    return new Wo(A);
  }
  merge(A, B) {
    let Q = Yo.hrTimeToMicroseconds(B.sampleTime) >= Yo.hrTimeToMicroseconds(A.sampleTime) ? B : A;
    return new Wo(A.startTime, Q.toPointValue(), Q.sampleTime);
  }
  diff(A, B) {
    let Q = Yo.hrTimeToMicroseconds(B.sampleTime) >= Yo.hrTimeToMicroseconds(A.sampleTime) ? B : A;
    return new Wo(B.startTime, Q.toPointValue(), Q.sampleTime);
  }
  toMetricData(A, B, Q, I) {
    return {
      descriptor: A,
      aggregationTemporality: B,
      dataPointType: Yx6.DataPointType.GAUGE,
      dataPoints: Q.map(([G, D]) => {
        return { attributes: G, startTime: D.startTime, endTime: I, value: D.toPointValue() };
      }),
    };
  }
}
P02.LastValueAggregator = T02;
