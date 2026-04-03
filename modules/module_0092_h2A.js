// Module: h2A
// Params: g2A

Object.defineProperty(g2A, '__esModule', { value: !0 });
var v2A = tA(),
  nu = iu(),
  dg2 = YE1(),
  ug2 = uu(),
  aA1 = lu();
class b2A {
  constructor(A) {
    if (
      ((this._client = A),
      (this._buckets = new Map()),
      (this._bucketsTotalWeight = 0),
      (this._interval = setInterval(() => this._flush(), nu.DEFAULT_FLUSH_INTERVAL)),
      this._interval.unref)
    )
      this._interval.unref();
    ((this._flushShift = Math.floor((Math.random() * nu.DEFAULT_FLUSH_INTERVAL) / 1000)),
      (this._forceFlush = !1));
  }
  add(A, B, Q, I = 'none', G = {}, D = v2A.timestampInSeconds()) {
    let Z = Math.floor(D),
      Y = aA1.sanitizeMetricKey(B),
      W = aA1.sanitizeTags(G),
      F = aA1.sanitizeUnit(I),
      J = aA1.getBucketKey(A, Y, F, W),
      C = this._buckets.get(J),
      X = C && A === nu.SET_METRIC_TYPE ? C.metric.weight : 0;
    if (C) {
      if ((C.metric.add(Q), C.timestamp < Z)) C.timestamp = Z;
    } else
      ((C = {
        metric: new dg2.METRIC_MAP[A](Q),
        timestamp: Z,
        metricType: A,
        name: Y,
        unit: F,
        tags: W,
      }),
        this._buckets.set(J, C));
    let V = typeof Q === 'string' ? C.metric.weight - X : Q;
    if (
      (ug2.updateMetricSummaryOnActiveSpan(A, Y, V, F, G, J),
      (this._bucketsTotalWeight += C.metric.weight),
      this._bucketsTotalWeight >= nu.MAX_WEIGHT)
    )
      this.flush();
  }
  flush() {
    ((this._forceFlush = !0), this._flush());
  }
  close() {
    ((this._forceFlush = !0), clearInterval(this._interval), this._flush());
  }
  _flush() {
    if (this._forceFlush) {
      ((this._forceFlush = !1),
        (this._bucketsTotalWeight = 0),
        this._captureMetrics(this._buckets),
        this._buckets.clear());
      return;
    }
    let A =
        Math.floor(v2A.timestampInSeconds()) - nu.DEFAULT_FLUSH_INTERVAL / 1000 - this._flushShift,
      B = new Map();
    for (let [Q, I] of this._buckets)
      if (I.timestamp <= A) (B.set(Q, I), (this._bucketsTotalWeight -= I.metric.weight));
    for (let [Q] of B) this._buckets.delete(Q);
    this._captureMetrics(B);
  }
  _captureMetrics(A) {
    if (A.size > 0 && this._client.captureAggregateMetrics) {
      let B = Array.from(A).map(([, Q]) => Q);
      this._client.captureAggregateMetrics(B);
    }
  }
}
g2A.MetricsAggregator = b2A;
