// Module: pG
// Params: BSA

Object.defineProperty(BSA, '__esModule', { value: !0 });
BSA.Log = BSA.LogLevel = void 0;
var Nb9 = ' DEBUG ',
  $b9 = '  INFO ',
  qb9 = '  WARN ',
  Mb9 = ' ERROR ';
function W61(A) {
  return (A.unshift('[Statsig]'), A);
}
BSA.LogLevel = { None: 0, Error: 1, Warn: 2, Info: 3, Debug: 4 };
class lT {
  static info(...A) {
    if (lT.level >= BSA.LogLevel.Info) console.info($b9, ...W61(A));
  }
  static debug(...A) {
    if (lT.level >= BSA.LogLevel.Debug) console.debug(Nb9, ...W61(A));
  }
  static warn(...A) {
    if (lT.level >= BSA.LogLevel.Warn) console.warn(qb9, ...W61(A));
  }
  static error(...A) {
    if (lT.level >= BSA.LogLevel.Error) console.error(Mb9, ...W61(A));
  }
}
BSA.Log = lT;
lT.level = BSA.LogLevel.Warn;
