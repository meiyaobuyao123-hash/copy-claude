// Module: z62
// Params: K62

Object.defineProperty(K62, '__esModule', { value: !0 });
K62.MeterSelector = void 0;
var Fl1 = RJ1();
class V62 {
  _nameFilter;
  _versionFilter;
  _schemaUrlFilter;
  constructor(A) {
    ((this._nameFilter = new Fl1.ExactPredicate(A?.name)),
      (this._versionFilter = new Fl1.ExactPredicate(A?.version)),
      (this._schemaUrlFilter = new Fl1.ExactPredicate(A?.schemaUrl)));
  }
  getNameFilter() {
    return this._nameFilter;
  }
  getVersionFilter() {
    return this._versionFilter;
  }
  getSchemaUrlFilter() {
    return this._schemaUrlFilter;
  }
}
K62.MeterSelector = V62;
