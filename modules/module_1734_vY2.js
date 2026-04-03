// Module: vY2
// Params: xY2

Object.defineProperty(xY2, '__esModule', { value: !0 });
xY2.convertLegacyOtlpGrpcOptions = void 0;
var lo6 = C4(),
  kY2 = RY2(),
  io6 = Ft(),
  no6 = yY2();
function ao6(A, B) {
  if (A.headers) lo6.diag.warn('Headers cannot be set when using grpc');
  let Q = A.credentials;
  return kY2.mergeOtlpGrpcConfigurationWithDefaults(
    {
      url: A.url,
      metadata: () => {
        return A.metadata ?? io6.createEmptyMetadata();
      },
      compression: A.compression,
      timeoutMillis: A.timeoutMillis,
      concurrencyLimit: A.concurrencyLimit,
      credentials: Q != null ? () => Q : void 0,
    },
    no6.getOtlpGrpcConfigurationFromEnv(B),
    kY2.getOtlpGrpcDefaultConfiguration()
  );
}
xY2.convertLegacyOtlpGrpcOptions = ao6;
