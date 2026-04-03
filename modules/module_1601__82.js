// Module: _82
// Params: P82

Object.defineProperty(P82, '__esModule', { value: !0 });
P82.ProtobufMetricsSerializer = void 0;
var T82 = vJ1(),
  hg6 = ul1(),
  mg6 = T82.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceResponse,
  dg6 = T82.opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest;
P82.ProtobufMetricsSerializer = {
  serializeRequest: (A) => {
    let B = hg6.createExportMetricsServiceRequest([A]);
    return dg6.encode(B).finish();
  },
  deserializeResponse: (A) => {
    return mg6.decode(A);
  },
};
