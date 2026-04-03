// Module: Z9A
// Params: D9A

Object.defineProperty(D9A, '__esModule', { value: !0 });
var G9A = tA();
function $h2(A, B) {
  let Q = { sent_at: new Date().toISOString() };
  if (B) Q.dsn = G9A.dsnToString(B);
  let I = A.map(qh2);
  return G9A.createEnvelope(Q, I);
}
function qh2(A) {
  return [{ type: 'span' }, A];
}
D9A.createSpanEnvelope = $h2;
