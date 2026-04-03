// Module: Eo
// Params: g62

Object.defineProperty(g62, '__esModule', { value: !0 });
g62.getSharedConfigurationDefaults =
  g62.mergeOtlpSharedConfigurationWithDefaults =
  g62.wrapStaticHeadersInFunction =
  g62.validateTimeoutMillis =
    void 0;
function b62(A) {
  if (Number.isFinite(A) && A > 0) return A;
  throw new Error(
    `Configuration: timeoutMillis is invalid, expected number greater than 0 (actual: '${A}')`
  );
}
g62.validateTimeoutMillis = b62;
function Hb6(A) {
  if (A == null) return;
  return () => A;
}
g62.wrapStaticHeadersInFunction = Hb6;
function zb6(A, B, Q) {
  return {
    timeoutMillis: b62(A.timeoutMillis ?? B.timeoutMillis ?? Q.timeoutMillis),
    concurrencyLimit: A.concurrencyLimit ?? B.concurrencyLimit ?? Q.concurrencyLimit,
    compression: A.compression ?? B.compression ?? Q.compression,
  };
}
g62.mergeOtlpSharedConfigurationWithDefaults = zb6;
function wb6() {
  return { timeoutMillis: 1e4, concurrencyLimit: 30, compression: 'none' };
}
g62.getSharedConfigurationDefaults = wb6;
