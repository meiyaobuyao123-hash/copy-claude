// Module: wq1
// Params: QHA

Object.defineProperty(QHA, '__esModule', { value: !0 });
QHA.throttleTime = void 0;
var Mz9 = QY(),
  Lz9 = d91(),
  Rz9 = Xq();
function Oz9(A, B, Q) {
  if (B === void 0) B = Mz9.asyncScheduler;
  var I = Rz9.timer(A, B);
  return Lz9.throttle(function () {
    return I;
  }, Q);
}
QHA.throttleTime = Oz9;
