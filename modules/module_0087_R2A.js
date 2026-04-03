// Module: R2A
// Params: L2A

Object.defineProperty(L2A, '__esModule', { value: !0 });
var M2A = tA(),
  Qg2 = lu();
function Ig2(A, B, Q, I) {
  let G = { sent_at: new Date().toISOString() };
  if (Q && Q.sdk) G.sdk = { name: Q.sdk.name, version: Q.sdk.version };
  if (!!I && B) G.dsn = M2A.dsnToString(B);
  let D = Gg2(A);
  return M2A.createEnvelope(G, [D]);
}
function Gg2(A) {
  let B = Qg2.serializeMetricBuckets(A);
  return [{ type: 'statsd', length: B.length }, B];
}
L2A.createMetricEnvelope = Ig2;
