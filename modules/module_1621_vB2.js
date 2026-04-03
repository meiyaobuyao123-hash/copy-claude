// Module: vB2
// Params: xB2

Object.defineProperty(xB2, '__esModule', { value: !0 });
xB2.getHttpConfigurationDefaults = xB2.mergeOtlpHttpConfigurationWithDefaults = void 0;
var kB2 = Eo(),
  ih6 = yB2();
function nh6(A, B, Q) {
  let I = { ...Q() },
    G = {};
  return () => {
    if (B != null) Object.assign(G, B());
    if (A != null) Object.assign(G, A());
    return Object.assign(G, I);
  };
}
function ah6(A) {
  if (A == null) return;
  try {
    return (new URL(A), A);
  } catch (B) {
    throw new Error(`Configuration: Could not parse user-provided export URL: '${A}'`);
  }
}
function sh6(A, B, Q) {
  return {
    ...kB2.mergeOtlpSharedConfigurationWithDefaults(A, B, Q),
    headers: nh6(ih6.validateAndNormalizeHeaders(A.headers), B.headers, Q.headers),
    url: ah6(A.url) ?? B.url ?? Q.url,
    agentOptions: A.agentOptions ?? B.agentOptions ?? Q.agentOptions,
  };
}
xB2.mergeOtlpHttpConfigurationWithDefaults = sh6;
function rh6(A, B) {
  return {
    ...kB2.getSharedConfigurationDefaults(),
    headers: () => A,
    url: 'http://localhost:4318/' + B,
    agentOptions: { keepAlive: !0 },
  };
}
xB2.getHttpConfigurationDefaults = rh6;
