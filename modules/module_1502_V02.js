// Module: V02
// Params: C02

Object.defineProperty(C02, '__esModule', { value: !0 });
C02.BindOnceFuture = void 0;
var lk6 = F02();
class J02 {
  _callback;
  _that;
  _isCalled = !1;
  _deferred = new lk6.Deferred();
  constructor(A, B) {
    ((this._callback = A), (this._that = B));
  }
  get isCalled() {
    return this._isCalled;
  }
  get promise() {
    return this._deferred.promise;
  }
  call(...A) {
    if (!this._isCalled) {
      this._isCalled = !0;
      try {
        Promise.resolve(this._callback.call(this._that, ...A)).then(
          (B) => this._deferred.resolve(B),
          (B) => this._deferred.reject(B)
        );
      } catch (B) {
        this._deferred.reject(B);
      }
    }
    return this._deferred.promise;
  }
}
C02.BindOnceFuture = J02;
