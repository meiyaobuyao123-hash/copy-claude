// Module: F02
// Params: Y02

Object.defineProperty(Y02, '__esModule', { value: !0 });
Y02.Deferred = void 0;
class Z02 {
  _promise;
  _resolve;
  _reject;
  constructor() {
    this._promise = new Promise((A, B) => {
      ((this._resolve = A), (this._reject = B));
    });
  }
  get promise() {
    return this._promise;
  }
  resolve(A) {
    this._resolve(A);
  }
  reject(A) {
    this._reject(A);
  }
}
Y02.Deferred = Z02;
