// Module: QE1
// Params: k2A

Object.defineProperty(k2A, '__esModule', { value: !0 });
var BE1 = tA();
function wg2(A, B, Q, I, G) {
  let D = { sent_at: new Date().toISOString() };
  if (Q && Q.sdk) D.sdk = { name: Q.sdk.name, version: Q.sdk.version };
  if (!!I && !!G) D.dsn = BE1.dsnToString(G);
  if (B) D.trace = BE1.dropUndefinedKeys(B);
  let Z = Eg2(A);
  return BE1.createEnvelope(D, [Z]);
}
function Eg2(A) {
  return [{ type: 'check_in' }, A];
}
k2A.createCheckInEnvelope = wg2;
