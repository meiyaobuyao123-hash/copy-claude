// Module: DAA
// Params: GAA

Object.defineProperty(GAA, '__esModule', { value: !0 });
var QAA = ['fatal', 'error', 'warning', 'log', 'info', 'debug'];
function LT2(A) {
  return IAA(A);
}
function IAA(A) {
  return A === 'warn' ? 'warning' : QAA.includes(A) ? A : 'log';
}
GAA.severityFromString = LT2;
GAA.severityLevelFromString = IAA;
GAA.validSeverityLevels = QAA;
