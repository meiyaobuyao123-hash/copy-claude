// Module: er
// Params: lp0

Object.defineProperty(lp0, '__esModule', { value: !0 });
lp0.ContextAPI = void 0;
var bE6 = pp0(),
  yp1 = F_(),
  cp0 = J_(),
  kp1 = 'context',
  gE6 = new bE6.NoopContextManager();
class xp1 {
  constructor() {}
  static getInstance() {
    if (!this._instance) this._instance = new xp1();
    return this._instance;
  }
  setGlobalContextManager(A) {
    return yp1.registerGlobal(kp1, A, cp0.DiagAPI.instance());
  }
  active() {
    return this._getContextManager().active();
  }
  with(A, B, Q, ...I) {
    return this._getContextManager().with(A, B, Q, ...I);
  }
  bind(A, B) {
    return this._getContextManager().bind(A, B);
  }
  _getContextManager() {
    return yp1.getGlobal(kp1) || gE6;
  }
  disable() {
    (this._getContextManager().disable(), yp1.unregisterGlobal(kp1, cp0.DiagAPI.instance()));
  }
}
lp0.ContextAPI = xp1;
