// Module: F9A
// Params: W9A

Object.defineProperty(W9A, '__esModule', { value: !0 });
function Lh2(A, B) {
  let Q = B && Th2(B) ? B.getClient() : B,
    I = Q && Q.getDsn(),
    G = Q && Q.getOptions().tunnel;
  return Oh2(A, I) || Rh2(A, G);
}
function Rh2(A, B) {
  if (!B) return !1;
  return Y9A(A) === Y9A(B);
}
function Oh2(A, B) {
  return B ? A.includes(B.host) : !1;
}
function Y9A(A) {
  return A[A.length - 1] === '/' ? A.slice(0, -1) : A;
}
function Th2(A) {
  return A.getClient !== void 0;
}
W9A.isSentryRequestUrl = Lh2;
