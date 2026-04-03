// Module: Vl1
// Params: p62

Object.defineProperty(p62, '__esModule', { value: !0 });
p62.createBoundedQueueExportPromiseHandler = void 0;
class u62 {
  _concurrencyLimit;
  _sendingPromises = [];
  constructor(A) {
    this._concurrencyLimit = A;
  }
  pushPromise(A) {
    if (this.hasReachedLimit()) throw new Error('Concurrency Limit reached');
    this._sendingPromises.push(A);
    let B = () => {
      let Q = this._sendingPromises.indexOf(A);
      this._sendingPromises.splice(Q, 1);
    };
    A.then(B, B);
  }
  hasReachedLimit() {
    return this._sendingPromises.length >= this._concurrencyLimit;
  }
  async awaitAll() {
    await Promise.all(this._sendingPromises);
  }
}
function qb6(A) {
  return new u62(A.concurrencyLimit);
}
p62.createBoundedQueueExportPromiseHandler = qb6;
