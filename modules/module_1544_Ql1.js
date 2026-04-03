// Module: Ql1
// Params: r92

Object.defineProperty(r92, '__esModule', { value: !0 });
r92.MetricStorage = void 0;
var Bv6 = Ko();
class s92 {
  _instrumentDescriptor;
  constructor(A) {
    this._instrumentDescriptor = A;
  }
  getInstrumentDescriptor() {
    return this._instrumentDescriptor;
  }
  updateDescription(A) {
    this._instrumentDescriptor = Bv6.createInstrumentDescriptor(
      this._instrumentDescriptor.name,
      this._instrumentDescriptor.type,
      {
        description: A,
        valueType: this._instrumentDescriptor.valueType,
        unit: this._instrumentDescriptor.unit,
        advice: this._instrumentDescriptor.advice,
      }
    );
  }
}
r92.MetricStorage = s92;
