// Module: zl0
// Params: Kl0

Object.defineProperty(Kl0, '__esModule', { value: !0 });
Kl0.PropagationAPI = void 0;
var Bc1 = F_(),
  lU6 = Yl0(),
  Xl0 = jp1(),
  oF1 = Cl0(),
  iU6 = Up1(),
  Vl0 = J_(),
  Qc1 = 'propagation',
  nU6 = new lU6.NoopTextMapPropagator();
class Ic1 {
  constructor() {
    ((this.createBaggage = iU6.createBaggage),
      (this.getBaggage = oF1.getBaggage),
      (this.getActiveBaggage = oF1.getActiveBaggage),
      (this.setBaggage = oF1.setBaggage),
      (this.deleteBaggage = oF1.deleteBaggage));
  }
  static getInstance() {
    if (!this._instance) this._instance = new Ic1();
    return this._instance;
  }
  setGlobalPropagator(A) {
    return Bc1.registerGlobal(Qc1, A, Vl0.DiagAPI.instance());
  }
  inject(A, B, Q = Xl0.defaultTextMapSetter) {
    return this._getGlobalPropagator().inject(A, B, Q);
  }
  extract(A, B, Q = Xl0.defaultTextMapGetter) {
    return this._getGlobalPropagator().extract(A, B, Q);
  }
  fields() {
    return this._getGlobalPropagator().fields();
  }
  disable() {
    Bc1.unregisterGlobal(Qc1, Vl0.DiagAPI.instance());
  }
  _getGlobalPropagator() {
    return Bc1.getGlobal(Qc1) || nU6;
  }
}
Kl0.PropagationAPI = Ic1;
