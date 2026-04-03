// Module: qc1
// Params: ri0

Object.defineProperty(ri0, '__esModule', { value: !0 });
ri0.loggingErrorHandler = void 0;
var k$6 = C4();
function x$6() {
  return (A) => {
    k$6.diag.error(f$6(A));
  };
}
ri0.loggingErrorHandler = x$6;
function f$6(A) {
  if (typeof A === 'string') return A;
  else return JSON.stringify(v$6(A));
}
function v$6(A) {
  let B = {},
    Q = A;
  while (Q !== null)
    (Object.getOwnPropertyNames(Q).forEach((I) => {
      if (B[I]) return;
      let G = Q[I];
      if (G) B[I] = String(G);
    }),
      (Q = Object.getPrototypeOf(Q)));
  return B;
}
