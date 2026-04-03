// Module: TJ1
// Params: f62

Object.defineProperty(f62, '__esModule', { value: !0 });
f62.OTLPExporterError = void 0;
class x62 extends Error {
  code;
  name = 'OTLPExporterError';
  data;
  constructor(A, B, Q) {
    super(A);
    ((this.data = Q), (this.code = B));
  }
}
f62.OTLPExporterError = x62;
