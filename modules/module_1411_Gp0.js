// Module: Gp0
// Params: Qp0

Object.defineProperty(Qp0, '__esModule', { value: !0 });
Qp0.DiagComponentLogger = void 0;
var WE6 = F_();
class Bp0 {
  constructor(A) {
    this._namespace = A.namespace || 'DiagComponentLogger';
  }
  debug(...A) {
    return rr('debug', this._namespace, A);
  }
  error(...A) {
    return rr('error', this._namespace, A);
  }
  info(...A) {
    return rr('info', this._namespace, A);
  }
  warn(...A) {
    return rr('warn', this._namespace, A);
  }
  verbose(...A) {
    return rr('verbose', this._namespace, A);
  }
}
Qp0.DiagComponentLogger = Bp0;
function rr(A, B, Q) {
  let I = WE6.getGlobal('diag');
  if (!I) return;
  return (Q.unshift(B), I[A](...Q));
}
