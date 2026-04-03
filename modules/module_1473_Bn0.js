// Module: Bn0
// Params: ei0

Object.defineProperty(ei0, '__esModule', { value: !0 });
ei0.globalErrorHandler = ei0.setGlobalErrorHandler = void 0;
var b$6 = qc1(),
  ti0 = b$6.loggingErrorHandler();
function g$6(A) {
  ti0 = A;
}
ei0.setGlobalErrorHandler = g$6;
function h$6(A) {
  try {
    ti0(A);
  } catch {}
}
ei0.globalErrorHandler = h$6;
