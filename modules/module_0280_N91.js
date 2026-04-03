// Module: N91
// Params: YFA

Object.defineProperty(YFA, '__esModule', { value: !0 });
YFA.of = void 0;
var cZ9 = IY(),
  lZ9 = mE();
function iZ9() {
  var A = [];
  for (var B = 0; B < arguments.length; B++) A[B] = arguments[B];
  var Q = cZ9.popScheduler(A);
  return lZ9.from(A, Q);
}
YFA.of = iZ9;
