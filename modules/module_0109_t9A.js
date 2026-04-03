// Module: t9A
// Params: o9A

Object.defineProperty(o9A, '__esModule', { value: !0 });
var _m2 = tA(),
  s9A = iu(),
  jm2 = YE1(),
  ym2 = uu(),
  oA1 = lu();
class r9A {
  constructor(A) {
    ((this._client = A),
      (this._buckets = new Map()),
      (this._interval = setInterval(() => this.flush(), s9A.DEFAULT_BROWSER_FLUSH_INTERVAL)));
  }
  add(A, B, Q, I = 'none', G = {}, D = _m2.timestampInSeconds()) {
    let Z = Math.floor(D),
      Y = oA1.sanitizeMetricKey(B),
      W = oA1.sanitizeTags(G),
      F = oA1.sanitizeUnit(I),
      J = oA1.getBucketKey(A, Y, F, W),
      C = this._buckets.get(J),
      X = C && A === s9A.SET_METRIC_TYPE ? C.metric.weight : 0;
    if (C) {
      if ((C.metric.add(Q), C.timestamp < Z)) C.timestamp = Z;
    } else
      ((C = {
        metric: new jm2.METRIC_MAP[A](Q),
        timestamp: Z,
        metricType: A,
        name: Y,
        unit: F,
        tags: W,
      }),
        this._buckets.set(J, C));
    let V = typeof Q === 'string' ? C.metric.weight - X : Q;
    ym2.updateMetricSummaryOnActiveSpan(A, Y, V, F, G, J);
  }
  flush() {
    if (this._buckets.size === 0) return;
    if (this._client.captureAggregateMetrics) {
      let A = Array.from(this._buckets).map(([, B]) => B);
      this._client.captureAggregateMetrics(A);
    }
    this._buckets.clear();
  }
  close() {
    (clearInterval(this._interval), this.flush());
  }
}
o9A.BrowserMetricsAggregator = r9A;
