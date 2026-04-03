// Module: hY2
// Params: bY2

Object.defineProperty(bY2, '__esModule', { value: !0 });
bY2.createOtlpGrpcExportDelegate = void 0;
var so6 = PJ1(),
  ro6 = Ft();
function oo6(A, B, Q, I) {
  return so6.createOtlpNetworkExportDelegate(
    A,
    B,
    ro6.createOtlpGrpcExporterTransport({
      address: A.url,
      compression: A.compression,
      credentials: A.credentials,
      metadata: A.metadata,
      grpcName: Q,
      grpcPath: I,
    })
  );
}
bY2.createOtlpGrpcExportDelegate = oo6;
