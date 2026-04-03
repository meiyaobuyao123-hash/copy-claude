// Module: w02
// Params: H02

Object.defineProperty(H02, '__esModule', { value: !0 });
H02.diagLogLevelFromString = void 0;
var EN = C4(),
  K02 = {
    ALL: EN.DiagLogLevel.ALL,
    VERBOSE: EN.DiagLogLevel.VERBOSE,
    DEBUG: EN.DiagLogLevel.DEBUG,
    INFO: EN.DiagLogLevel.INFO,
    WARN: EN.DiagLogLevel.WARN,
    ERROR: EN.DiagLogLevel.ERROR,
    NONE: EN.DiagLogLevel.NONE,
  };
function ik6(A) {
  if (A == null) return;
  let B = K02[A.toUpperCase()];
  if (B == null)
    return (
      EN.diag.warn(`Unknown log level "${A}", expected one of ${Object.keys(K02)}, using default`),
      EN.DiagLogLevel.INFO
    );
  return B;
}
H02.diagLogLevelFromString = ik6;
