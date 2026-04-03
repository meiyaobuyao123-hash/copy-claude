// Module: v42
// Params: x42

Object.defineProperty(x42, '__esModule', { value: !0 });
x42.ObservableRegistry = void 0;
var qv6 = C4(),
  j42 = qJ1(),
  y42 = _42(),
  wo = hV();
class k42 {
  _callbacks = [];
  _batchCallbacks = [];
  addCallback(A, B) {
    if (this._findCallback(A, B) >= 0) return;
    this._callbacks.push({ callback: A, instrument: B });
  }
  removeCallback(A, B) {
    let Q = this._findCallback(A, B);
    if (Q < 0) return;
    this._callbacks.splice(Q, 1);
  }
  addBatchCallback(A, B) {
    let Q = new Set(B.filter(j42.isObservableInstrument));
    if (Q.size === 0) {
      qv6.diag.error('BatchObservableCallback is not associated with valid instruments', B);
      return;
    }
    if (this._findBatchCallback(A, Q) >= 0) return;
    this._batchCallbacks.push({ callback: A, instruments: Q });
  }
  removeBatchCallback(A, B) {
    let Q = new Set(B.filter(j42.isObservableInstrument)),
      I = this._findBatchCallback(A, Q);
    if (I < 0) return;
    this._batchCallbacks.splice(I, 1);
  }
  async observe(A, B) {
    let Q = this._observeCallbacks(A, B),
      I = this._observeBatchCallbacks(A, B);
    return (await wo.PromiseAllSettled([...Q, ...I]))
      .filter(wo.isPromiseAllSettledRejectionResult)
      .map((Z) => Z.reason);
  }
  _observeCallbacks(A, B) {
    return this._callbacks.map(async ({ callback: Q, instrument: I }) => {
      let G = new y42.ObservableResultImpl(I._descriptor.name, I._descriptor.valueType),
        D = Promise.resolve(Q(G));
      if (B != null) D = wo.callWithTimeout(D, B);
      (await D,
        I._metricStorages.forEach((Z) => {
          Z.record(G._buffer, A);
        }));
    });
  }
  _observeBatchCallbacks(A, B) {
    return this._batchCallbacks.map(async ({ callback: Q, instruments: I }) => {
      let G = new y42.BatchObservableResultImpl(),
        D = Promise.resolve(Q(G));
      if (B != null) D = wo.callWithTimeout(D, B);
      (await D,
        I.forEach((Z) => {
          let Y = G._buffer.get(Z);
          if (Y == null) return;
          Z._metricStorages.forEach((W) => {
            W.record(Y, A);
          });
        }));
    });
  }
  _findCallback(A, B) {
    return this._callbacks.findIndex((Q) => {
      return Q.callback === A && Q.instrument === B;
    });
  }
  _findBatchCallback(A, B) {
    return this._batchCallbacks.findIndex((Q) => {
      return Q.callback === A && wo.setEquals(Q.instruments, B);
    });
  }
}
x42.ObservableRegistry = k42;
