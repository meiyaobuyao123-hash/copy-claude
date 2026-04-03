// Module: lY2
// Params: pY2

Object.defineProperty(pY2, '__esModule', { value: !0 });
pY2.OTLPMetricExporter = void 0;
var Bt6 = cJ1(),
  dY2 = mY2(),
  Qt6 = mJ1();
class uY2 extends Bt6.OTLPMetricExporterBase {
  constructor(A) {
    super(
      dY2.createOtlpGrpcExportDelegate(
        dY2.convertLegacyOtlpGrpcOptions(A ?? {}, 'METRICS'),
        Qt6.ProtobufMetricsSerializer,
        'MetricsExportService',
        '/opentelemetry.proto.collector.metrics.v1.MetricsService/Export'
      ),
      A
    );
  }
}
pY2.OTLPMetricExporter = uY2;
