// Module: sw1
// Params: H2A

Object.defineProperty(H2A, '__esModule', { value: !0 });
var jy = tA();
function Db2(A, B) {
  if (!B) return A;
  return (
    (A.sdk = A.sdk || {}),
    (A.sdk.name = A.sdk.name || B.name),
    (A.sdk.version = A.sdk.version || B.version),
    (A.sdk.integrations = [...(A.sdk.integrations || []), ...(B.integrations || [])]),
    (A.sdk.packages = [...(A.sdk.packages || []), ...(B.packages || [])]),
    A
  );
}
function Zb2(A, B, Q, I) {
  let G = jy.getSdkMetadataForEnvelopeHeader(Q),
    D = {
      sent_at: new Date().toISOString(),
      ...(G && { sdk: G }),
      ...(!!I && B && { dsn: jy.dsnToString(B) }),
    },
    Z = 'aggregates' in A ? [{ type: 'sessions' }, A] : [{ type: 'session' }, A.toJSON()];
  return jy.createEnvelope(D, [Z]);
}
function Yb2(A, B, Q, I) {
  let G = jy.getSdkMetadataForEnvelopeHeader(Q),
    D = A.type && A.type !== 'replay_event' ? A.type : 'event';
  Db2(A, Q && Q.sdk);
  let Z = jy.createEventEnvelopeHeaders(A, G, I, B);
  delete A.sdkProcessingMetadata;
  let Y = [{ type: D }, A];
  return jy.createEnvelope(Z, [Y]);
}
H2A.createEventEnvelope = Yb2;
H2A.createSessionEnvelope = Zb2;
