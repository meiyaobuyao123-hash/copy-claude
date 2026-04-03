// Module: aB2
// Params: iB2

Object.defineProperty(iB2, '__esModule', { value: !0 });
iB2.OTLPMetricExporter = void 0;
var Hm6 = wl1(),
  zm6 = mJ1(),
  wm6 = QB2(),
  cB2 = uJ1(),
  Em6 = { 'User-Agent': `OTel-OTLP-Exporter-JavaScript/${wm6.VERSION}` };
class lB2 extends Hm6.OTLPMetricExporterBase {
  constructor(A) {
    super(
      cB2.createOtlpHttpExportDelegate(
        cB2.convertLegacyHttpOptions(A ?? {}, 'METRICS', 'v1/metrics', {
          ...Em6,
          'Content-Type': 'application/json',
        }),
        zm6.JsonMetricsSerializer
      ),
      A
    );
  }
}
iB2.OTLPMetricExporter = lB2;
