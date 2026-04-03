// Module: k62
// Params: j62

Object.defineProperty(j62, '__esModule', { value: !0 });
j62.OTLPExporterBase = void 0;
class _62 {
  _delegate;
  constructor(A) {
    this._delegate = A;
  }
  export(A, B) {
    this._delegate.export(A, B);
  }
  forceFlush() {
    return this._delegate.forceFlush();
  }
  shutdown() {
    return this._delegate.shutdown();
  }
}
j62.OTLPExporterBase = _62;
