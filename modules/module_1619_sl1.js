// Module: sl1
// Params: PB2

Object.defineProperty(PB2, '__esModule', { value: !0 });
PB2.getSharedConfigurationFromEnvironment = void 0;
var TB2 = C4();
function RB2(A) {
  let B = process.env[A]?.trim();
  if (B != null && B !== '') {
    let Q = Number(B);
    if (Number.isFinite(Q) && Q > 0) return Q;
    TB2.diag.warn(`Configuration: ${A} is invalid, expected number greater than 0 (actual: ${B})`);
  }
  return;
}
function dh6(A) {
  let B = RB2(`OTEL_EXPORTER_OTLP_${A}_TIMEOUT`),
    Q = RB2('OTEL_EXPORTER_OTLP_TIMEOUT');
  return B ?? Q;
}
function OB2(A) {
  let B = process.env[A]?.trim();
  if (B === '') return;
  if (B == null || B === 'none' || B === 'gzip') return B;
  TB2.diag.warn(`Configuration: ${A} is invalid, expected 'none' or 'gzip' (actual: '${B}')`);
  return;
}
function uh6(A) {
  let B = OB2(`OTEL_EXPORTER_OTLP_${A}_COMPRESSION`),
    Q = OB2('OTEL_EXPORTER_OTLP_COMPRESSION');
  return B ?? Q;
}
function ph6(A) {
  return { timeoutMillis: dh6(A), compression: uh6(A) };
}
PB2.getSharedConfigurationFromEnvironment = ph6;
