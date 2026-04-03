// Module: hB2
// Params: bB2

Object.defineProperty(bB2, '__esModule', { value: !0 });
bB2.getHttpConfigurationFromEnvironment = void 0;
var dJ1 = CD(),
  rl1 = C4(),
  th6 = sl1(),
  eh6 = Eo();
function Am6(A) {
  let B = process.env[`OTEL_EXPORTER_OTLP_${A}_HEADERS`]?.trim(),
    Q = process.env.OTEL_EXPORTER_OTLP_HEADERS?.trim(),
    I = dJ1.parseKeyPairsIntoRecord(B),
    G = dJ1.parseKeyPairsIntoRecord(Q);
  if (Object.keys(I).length === 0 && Object.keys(G).length === 0) return;
  return Object.assign({}, dJ1.parseKeyPairsIntoRecord(Q), dJ1.parseKeyPairsIntoRecord(B));
}
function Bm6(A) {
  try {
    return new URL(A).toString();
  } catch {
    rl1.diag.warn(
      `Configuration: Could not parse environment-provided export URL: '${A}', falling back to undefined`
    );
    return;
  }
}
function Qm6(A, B) {
  try {
    new URL(A);
  } catch {
    rl1.diag.warn(
      `Configuration: Could not parse environment-provided export URL: '${A}', falling back to undefined`
    );
    return;
  }
  if (!A.endsWith('/')) A = A + '/';
  A += B;
  try {
    new URL(A);
  } catch {
    rl1.diag.warn(
      `Configuration: Provided URL appended with '${B}' is not a valid URL, using 'undefined' instead of '${A}'`
    );
    return;
  }
  return A;
}
function Im6(A) {
  let B = process.env.OTEL_EXPORTER_OTLP_ENDPOINT?.trim();
  if (B == null || B === '') return;
  return Qm6(B, A);
}
function Gm6(A) {
  let B = process.env[`OTEL_EXPORTER_OTLP_${A}_ENDPOINT`]?.trim();
  if (B == null || B === '') return;
  return Bm6(B);
}
function Dm6(A, B) {
  return {
    ...th6.getSharedConfigurationFromEnvironment(A),
    url: Gm6(A) ?? Im6(B),
    headers: eh6.wrapStaticHeadersInFunction(Am6(A)),
  };
}
bB2.getHttpConfigurationFromEnvironment = Dm6;
