// Module: U$1
// Params: SXA

Object.defineProperty(SXA, '__esModule', { value: !0 });
SXA.delay = void 0;
var CX9 = QY(),
  XX9 = y91(),
  VX9 = Xq();
function KX9(A, B) {
  if (B === void 0) B = CX9.asyncScheduler;
  var Q = VX9.timer(A, B);
  return XX9.delayWhen(function () {
    return Q;
  });
}
SXA.delay = KX9;
