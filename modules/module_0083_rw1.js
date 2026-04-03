// Module: rw1
// Params: w2A

Object.defineProperty(w2A, '__esModule', { value: !0 });
var Jb2 = tA(),
  Cb2 = DJ();
class z2A {
  constructor(A, B) {
    if (
      ((this._client = A),
      (this.flushTimeout = 60),
      (this._pendingAggregates = {}),
      (this._isEnabled = !0),
      (this._intervalId = setInterval(() => this.flush(), this.flushTimeout * 1000)),
      this._intervalId.unref)
    )
      this._intervalId.unref();
    this._sessionAttrs = B;
  }
  flush() {
    let A = this.getSessionAggregates();
    if (A.aggregates.length === 0) return;
    ((this._pendingAggregates = {}), this._client.sendSession(A));
  }
  getSessionAggregates() {
    let A = Object.keys(this._pendingAggregates).map((Q) => {
        return this._pendingAggregates[parseInt(Q)];
      }),
      B = { attrs: this._sessionAttrs, aggregates: A };
    return Jb2.dropUndefinedKeys(B);
  }
  close() {
    (clearInterval(this._intervalId), (this._isEnabled = !1), this.flush());
  }
  incrementSessionStatusCount() {
    if (!this._isEnabled) return;
    let A = Cb2.getCurrentScope(),
      B = A.getRequestSession();
    if (B && B.status)
      (this._incrementSessionStatusCount(B.status, new Date()), A.setRequestSession(void 0));
  }
  _incrementSessionStatusCount(A, B) {
    let Q = new Date(B).setSeconds(0, 0);
    this._pendingAggregates[Q] = this._pendingAggregates[Q] || {};
    let I = this._pendingAggregates[Q];
    if (!I.started) I.started = new Date(Q).toISOString();
    switch (A) {
      case 'errored':
        return ((I.errored = (I.errored || 0) + 1), I.errored);
      case 'ok':
        return ((I.exited = (I.exited || 0) + 1), I.exited);
      default:
        return ((I.crashed = (I.crashed || 0) + 1), I.crashed);
    }
  }
}
w2A.SessionFlusher = z2A;
