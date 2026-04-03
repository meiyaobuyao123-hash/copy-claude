// Module: j92
// Params: S92

Object.defineProperty(S92, '__esModule', { value: !0 });
S92.ViewRegistry = void 0;
class P92 {
  _registeredViews = [];
  addView(A) {
    this._registeredViews.push(A);
  }
  findViews(A, B) {
    return this._registeredViews.filter((I) => {
      return this._matchInstrument(I.instrumentSelector, A) && this._matchMeter(I.meterSelector, B);
    });
  }
  _matchInstrument(A, B) {
    return (
      (A.getType() === void 0 || B.type === A.getType()) &&
      A.getNameFilter().match(B.name) &&
      A.getUnitFilter().match(B.unit)
    );
  }
  _matchMeter(A, B) {
    return (
      A.getNameFilter().match(B.name) &&
      (B.version === void 0 || A.getVersionFilter().match(B.version)) &&
      (B.schemaUrl === void 0 || A.getSchemaUrlFilter().match(B.schemaUrl))
    );
  }
}
S92.ViewRegistry = P92;
