// Module: YE1
// Params: f2A

Object.defineProperty(f2A, '__esModule', { value: !0 });
var nA1 = iu(),
  xg2 = lu();
class IE1 {
  constructor(A) {
    this._value = A;
  }
  get weight() {
    return 1;
  }
  add(A) {
    this._value += A;
  }
  toString() {
    return `${this._value}`;
  }
}
class GE1 {
  constructor(A) {
    ((this._last = A), (this._min = A), (this._max = A), (this._sum = A), (this._count = 1));
  }
  get weight() {
    return 5;
  }
  add(A) {
    if (((this._last = A), A < this._min)) this._min = A;
    if (A > this._max) this._max = A;
    ((this._sum += A), this._count++);
  }
  toString() {
    return `${this._last}:${this._min}:${this._max}:${this._sum}:${this._count}`;
  }
}
class DE1 {
  constructor(A) {
    this._value = [A];
  }
  get weight() {
    return this._value.length;
  }
  add(A) {
    this._value.push(A);
  }
  toString() {
    return this._value.join(':');
  }
}
class ZE1 {
  constructor(A) {
    ((this.first = A), (this._value = new Set([A])));
  }
  get weight() {
    return this._value.size;
  }
  add(A) {
    this._value.add(A);
  }
  toString() {
    return Array.from(this._value)
      .map((A) => (typeof A === 'string' ? xg2.simpleHash(A) : A))
      .join(':');
  }
}
var fg2 = {
  [nA1.COUNTER_METRIC_TYPE]: IE1,
  [nA1.GAUGE_METRIC_TYPE]: GE1,
  [nA1.DISTRIBUTION_METRIC_TYPE]: DE1,
  [nA1.SET_METRIC_TYPE]: ZE1,
};
f2A.CounterMetric = IE1;
f2A.DistributionMetric = DE1;
f2A.GaugeMetric = GE1;
f2A.METRIC_MAP = fg2;
f2A.SetMetric = ZE1;
