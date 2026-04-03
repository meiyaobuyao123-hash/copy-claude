// Module: yY2
// Params: _Y2

Object.defineProperty(_Y2, '__esModule', { value: !0 });
_Y2.getOtlpGrpcConfigurationFromEnv = void 0;
var OY2 = CD(),
  Ct = Ft(),
  xo6 = uJ1(),
  fo6 = D1('fs'),
  vo6 = D1('path'),
  PY2 = C4();
function Sa1(A, B) {
  if (A != null && A !== '') return A;
  if (B != null && B !== '') return B;
  return;
}
function bo6(A) {
  let B = process.env[`OTEL_EXPORTER_OTLP_${A}_HEADERS`]?.trim(),
    Q = process.env.OTEL_EXPORTER_OTLP_HEADERS?.trim(),
    I = OY2.parseKeyPairsIntoRecord(B),
    G = OY2.parseKeyPairsIntoRecord(Q);
  if (Object.keys(I).length === 0 && Object.keys(G).length === 0) return;
  let D = Object.assign({}, G, I),
    Z = Ct.createEmptyMetadata();
  for (let [Y, W] of Object.entries(D)) Z.set(Y, W);
  return Z;
}
function go6(A) {
  let B = bo6(A);
  if (B == null) return;
  return () => B;
}
function ho6(A) {
  let B = process.env[`OTEL_EXPORTER_OTLP_${A}_ENDPOINT`]?.trim(),
    Q = process.env.OTEL_EXPORTER_OTLP_ENDPOINT?.trim();
  return Sa1(B, Q);
}
function mo6(A) {
  let B = process.env[`OTEL_EXPORTER_OTLP_${A}_INSECURE`]?.toLowerCase().trim(),
    Q = process.env.OTEL_EXPORTER_OTLP_INSECURE?.toLowerCase().trim();
  return Sa1(B, Q) === 'true';
}
function _a1(A, B, Q) {
  let I = process.env[A]?.trim(),
    G = process.env[B]?.trim(),
    D = Sa1(I, G);
  if (D != null)
    try {
      return fo6.readFileSync(vo6.resolve(process.cwd(), D));
    } catch {
      PY2.diag.warn(Q);
      return;
    }
  else return;
}
function do6(A) {
  return _a1(
    `OTEL_EXPORTER_OTLP_${A}_CLIENT_CERTIFICATE`,
    'OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE',
    'Failed to read client certificate chain file'
  );
}
function uo6(A) {
  return _a1(
    `OTEL_EXPORTER_OTLP_${A}_CLIENT_KEY`,
    'OTEL_EXPORTER_OTLP_CLIENT_KEY',
    'Failed to read client certificate private key file'
  );
}
function TY2(A) {
  return _a1(
    `OTEL_EXPORTER_OTLP_${A}_CERTIFICATE`,
    'OTEL_EXPORTER_OTLP_CERTIFICATE',
    'Failed to read root certificate file'
  );
}
function SY2(A) {
  let B = uo6(A),
    Q = do6(A),
    I = TY2(A),
    G = B != null && Q != null;
  if (I != null && !G)
    return (
      PY2.diag.warn(
        'Client key and certificate must both be provided, but one was missing - attempting to create credentials from just the root certificate'
      ),
      Ct.createSslCredentials(TY2(A))
    );
  return Ct.createSslCredentials(I, B, Q);
}
function po6(A) {
  if (mo6(A)) return Ct.createInsecureCredentials();
  return SY2(A);
}
function co6(A) {
  return {
    ...xo6.getSharedConfigurationFromEnvironment(A),
    metadata: go6(A),
    url: ho6(A),
    credentials: (B) => {
      if (B.startsWith('http://'))
        return () => {
          return Ct.createInsecureCredentials();
        };
      else if (B.startsWith('https://'))
        return () => {
          return SY2(A);
        };
      return () => {
        return po6(A);
      };
    },
  };
}
_Y2.getOtlpGrpcConfigurationFromEnv = co6;
