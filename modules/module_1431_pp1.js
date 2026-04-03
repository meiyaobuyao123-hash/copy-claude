// Module: pp1
// Params: Kc0

Object.defineProperty(Kc0, '__esModule', { value: !0 });
Kc0.ProxyTracer = void 0;
var CU6 = up1(),
  XU6 = new CU6.NoopTracer();
class Vc0 {
  constructor(A, B, Q, I) {
    ((this._provider = A), (this.name = B), (this.version = Q), (this.options = I));
  }
  startSpan(A, B, Q) {
    return this._getTracer().startSpan(A, B, Q);
  }
  startActiveSpan(A, B, Q, I) {
    let G = this._getTracer();
    return Reflect.apply(G.startActiveSpan, G, arguments);
  }
  _getTracer() {
    if (this._delegate) return this._delegate;
    let A = this._provider.getDelegateTracer(this.name, this.version, this.options);
    if (!A) return XU6;
    return ((this._delegate = A), this._delegate);
  }
}
Kc0.ProxyTracer = Vc0;
