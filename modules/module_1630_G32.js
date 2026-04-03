// Module: G32
// Params: Q32

Object.defineProperty(Q32, '__esModule', { value: !0 });
Q32.OTLPMetricExporter = void 0;
var Om6 = cJ1(),
  Tm6 = mJ1(),
  Pm6 = eB2(),
  A32 = uJ1();
class B32 extends Om6.OTLPMetricExporterBase {
  constructor(A) {
    super(
      A32.createOtlpHttpExportDelegate(
        A32.convertLegacyHttpOptions(A ?? {}, 'METRICS', 'v1/metrics', {
          'User-Agent': `OTel-OTLP-Exporter-JavaScript/${Pm6.VERSION}`,
          'Content-Type': 'application/x-protobuf',
        }),
        Tm6.ProtobufMetricsSerializer
      ),
      A
    );
  }
}
Q32.OTLPMetricExporter = B32;
