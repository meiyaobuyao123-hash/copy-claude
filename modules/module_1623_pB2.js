// Module: pB2
// Params: dB2

Object.defineProperty(dB2, '__esModule', { value: !0 });
dB2.convertLegacyHttpOptions = void 0;
var mB2 = vB2(),
  Zm6 = hB2(),
  Ym6 = C4(),
  Wm6 = Eo();
function Fm6(A) {
  if (A?.keepAlive != null)
    if (A.httpAgentOptions != null) {
      if (A.httpAgentOptions.keepAlive == null) A.httpAgentOptions.keepAlive = A.keepAlive;
    } else A.httpAgentOptions = { keepAlive: A.keepAlive };
  return A.httpAgentOptions;
}
function Jm6(A, B, Q, I) {
  if (A.metadata) Ym6.diag.warn('Metadata cannot be set when using http');
  return mB2.mergeOtlpHttpConfigurationWithDefaults(
    {
      url: A.url,
      headers: Wm6.wrapStaticHeadersInFunction(A.headers),
      concurrencyLimit: A.concurrencyLimit,
      timeoutMillis: A.timeoutMillis,
      compression: A.compression,
      agentOptions: Fm6(A),
    },
    Zm6.getHttpConfigurationFromEnvironment(B, Q),
    mB2.getHttpConfigurationDefaults(I, Q)
  );
}
dB2.convertLegacyHttpOptions = Jm6;
