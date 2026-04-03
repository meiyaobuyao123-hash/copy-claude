// Module: K9A
// Params: V9A

Object.defineProperty(V9A, '__esModule', { value: !0 });
var X9A = TA1();
function jh2(A, B, Q = [B], I = 'npm') {
  let G = A._metadata || {};
  if (!G.sdk)
    G.sdk = {
      name: `sentry.javascript.${B}`,
      packages: Q.map((D) => ({ name: `${I}:@sentry/${D}`, version: X9A.SDK_VERSION })),
      version: X9A.SDK_VERSION,
    };
  A._metadata = G;
}
V9A.applySdkMetadata = jh2;
