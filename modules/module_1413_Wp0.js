// Module: Wp0
// Params: Zp0

Object.defineProperty(Zp0, '__esModule', { value: !0 });
Zp0.createLogLevelDiagLogger = void 0;
var zN = lF1();
function JE6(A, B) {
  if (A < zN.DiagLogLevel.NONE) A = zN.DiagLogLevel.NONE;
  else if (A > zN.DiagLogLevel.ALL) A = zN.DiagLogLevel.ALL;
  B = B || {};
  function Q(I, G) {
    let D = B[I];
    if (typeof D === 'function' && A >= G) return D.bind(B);
    return function () {};
  }
  return {
    error: Q('error', zN.DiagLogLevel.ERROR),
    warn: Q('warn', zN.DiagLogLevel.WARN),
    info: Q('info', zN.DiagLogLevel.INFO),
    debug: Q('debug', zN.DiagLogLevel.DEBUG),
    verbose: Q('verbose', zN.DiagLogLevel.VERBOSE),
  };
}
Zp0.createLogLevelDiagLogger = JE6;
