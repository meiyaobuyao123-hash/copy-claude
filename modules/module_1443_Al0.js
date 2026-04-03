// Module: Al0
// Params: tc0

Object.defineProperty(tc0, '__esModule', { value: !0 });
tc0.MetricsAPI = void 0;
var fU6 = rc0(),
  op1 = F_(),
  oc0 = J_(),
  tp1 = 'metrics';
class ep1 {
  constructor() {}
  static getInstance() {
    if (!this._instance) this._instance = new ep1();
    return this._instance;
  }
  setGlobalMeterProvider(A) {
    return op1.registerGlobal(tp1, A, oc0.DiagAPI.instance());
  }
  getMeterProvider() {
    return op1.getGlobal(tp1) || fU6.NOOP_METER_PROVIDER;
  }
  getMeter(A, B, Q) {
    return this.getMeterProvider().getMeter(A, B, Q);
  }
  disable() {
    op1.unregisterGlobal(tp1, oc0.DiagAPI.instance());
  }
}
tc0.MetricsAPI = ep1;
