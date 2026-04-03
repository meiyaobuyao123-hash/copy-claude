// Module: cp1
// Params: $c0

Object.defineProperty($c0, '__esModule', { value: !0 });
$c0.ProxyTracerProvider = void 0;
var KU6 = pp1(),
  HU6 = Uc0(),
  zU6 = new HU6.NoopTracerProvider();
class Nc0 {
  getTracer(A, B, Q) {
    var I;
    return (I = this.getDelegateTracer(A, B, Q)) !== null && I !== void 0
      ? I
      : new KU6.ProxyTracer(this, A, B, Q);
  }
  getDelegate() {
    var A;
    return (A = this._delegate) !== null && A !== void 0 ? A : zU6;
  }
  setDelegate(A) {
    this._delegate = A;
  }
  getDelegateTracer(A, B, Q) {
    var I;
    return (I = this._delegate) === null || I === void 0 ? void 0 : I.getTracer(A, B, Q);
  }
}
$c0.ProxyTracerProvider = Nc0;
