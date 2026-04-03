// Module: Rl0
// Params: Ml0

Object.defineProperty(Ml0, '__esModule', { value: !0 });
Ml0.TraceAPI = void 0;
var Gc1 = F_(),
  Nl0 = cp1(),
  $l0 = rF1(),
  sh = hp1(),
  ql0 = J_(),
  Dc1 = 'trace';
class Zc1 {
  constructor() {
    ((this._proxyTracerProvider = new Nl0.ProxyTracerProvider()),
      (this.wrapSpanContext = $l0.wrapSpanContext),
      (this.isSpanContextValid = $l0.isSpanContextValid),
      (this.deleteSpan = sh.deleteSpan),
      (this.getSpan = sh.getSpan),
      (this.getActiveSpan = sh.getActiveSpan),
      (this.getSpanContext = sh.getSpanContext),
      (this.setSpan = sh.setSpan),
      (this.setSpanContext = sh.setSpanContext));
  }
  static getInstance() {
    if (!this._instance) this._instance = new Zc1();
    return this._instance;
  }
  setGlobalTracerProvider(A) {
    let B = Gc1.registerGlobal(Dc1, this._proxyTracerProvider, ql0.DiagAPI.instance());
    if (B) this._proxyTracerProvider.setDelegate(A);
    return B;
  }
  getTracerProvider() {
    return Gc1.getGlobal(Dc1) || this._proxyTracerProvider;
  }
  getTracer(A, B) {
    return this.getTracerProvider().getTracer(A, B);
  }
  disable() {
    (Gc1.unregisterGlobal(Dc1, ql0.DiagAPI.instance()),
      (this._proxyTracerProvider = new Nl0.ProxyTracerProvider()));
  }
}
Ml0.TraceAPI = Zc1;
