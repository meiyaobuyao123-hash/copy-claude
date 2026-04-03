// Module: J_
// Params: Jp0

Object.defineProperty(Jp0, '__esModule', { value: !0 });
Jp0.DiagAPI = void 0;
var CE6 = Gp0(),
  XE6 = Wp0(),
  Fp0 = lF1(),
  iF1 = F_(),
  VE6 = 'diag';
class Ep1 {
  constructor() {
    function A(I) {
      return function (...G) {
        let D = iF1.getGlobal('diag');
        if (!D) return;
        return D[I](...G);
      };
    }
    let B = this,
      Q = (I, G = { logLevel: Fp0.DiagLogLevel.INFO }) => {
        var D, Z, Y;
        if (I === B) {
          let J = new Error(
            'Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation'
          );
          return (B.error((D = J.stack) !== null && D !== void 0 ? D : J.message), !1);
        }
        if (typeof G === 'number') G = { logLevel: G };
        let W = iF1.getGlobal('diag'),
          F = XE6.createLogLevelDiagLogger(
            (Z = G.logLevel) !== null && Z !== void 0 ? Z : Fp0.DiagLogLevel.INFO,
            I
          );
        if (W && !G.suppressOverrideMessage) {
          let J =
            (Y = new Error().stack) !== null && Y !== void 0
              ? Y
              : '<failed to generate stacktrace>';
          (W.warn(`Current logger will be overwritten from ${J}`),
            F.warn(`Current logger will overwrite one already registered from ${J}`));
        }
        return iF1.registerGlobal('diag', F, B, !0);
      };
    ((B.setLogger = Q),
      (B.disable = () => {
        iF1.unregisterGlobal(VE6, B);
      }),
      (B.createComponentLogger = (I) => {
        return new CE6.DiagComponentLogger(I);
      }),
      (B.verbose = A('verbose')),
      (B.debug = A('debug')),
      (B.info = A('info')),
      (B.warn = A('warn')),
      (B.error = A('error')));
  }
  static instance() {
    if (!this._instance) this._instance = new Ep1();
    return this._instance;
  }
}
Jp0.DiagAPI = Ep1;
