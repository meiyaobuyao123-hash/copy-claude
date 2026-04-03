// Module: eN1
// Params: LCA

Object.defineProperty(LCA, '__esModule', { value: !0 });
LCA.auditTime = void 0;
var YJ9 = QY(),
  WJ9 = O91(),
  FJ9 = Xq();
function JJ9(A, B) {
  if (B === void 0) B = YJ9.asyncScheduler;
  return WJ9.audit(function () {
    return FJ9.timer(A, B);
  });
}
LCA.auditTime = JJ9;
