// Module: aN1
// Params: bJA

Object.defineProperty(bJA, '__esModule', { value: !0 });
bJA.interval = void 0;
var CF9 = QY(),
  XF9 = Xq();
function VF9(A, B) {
  if (A === void 0) A = 0;
  if (B === void 0) B = CF9.asyncScheduler;
  if (A < 0) A = 0;
  return XF9.timer(A, A, B);
}
bJA.interval = VF9;
