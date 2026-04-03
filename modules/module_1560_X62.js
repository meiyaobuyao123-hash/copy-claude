// Module: X62
// Params: J62

Object.defineProperty(J62, '__esModule', { value: !0 });
J62.InstrumentSelector = void 0;
var W62 = RJ1();
class F62 {
  _nameFilter;
  _type;
  _unitFilter;
  constructor(A) {
    ((this._nameFilter = new W62.PatternPredicate(A?.name ?? '*')),
      (this._type = A?.type),
      (this._unitFilter = new W62.ExactPredicate(A?.unit)));
  }
  getType() {
    return this._type;
  }
  getNameFilter() {
    return this._nameFilter;
  }
  getUnitFilter() {
    return this._unitFilter;
  }
}
J62.InstrumentSelector = F62;
