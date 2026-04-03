// Module: _42
// Params: P42

Object.defineProperty(P42, '__esModule', { value: !0 });
P42.BatchObservableResultImpl = P42.ObservableResultImpl = void 0;
var Zm = C4(),
  R42 = Ho(),
  Nv6 = qJ1();
class O42 {
  _instrumentName;
  _valueType;
  _buffer = new R42.AttributeHashMap();
  constructor(A, B) {
    ((this._instrumentName = A), (this._valueType = B));
  }
  observe(A, B = {}) {
    if (typeof A !== 'number') {
      Zm.diag.warn(`non-number value provided to metric ${this._instrumentName}: ${A}`);
      return;
    }
    if (this._valueType === Zm.ValueType.INT && !Number.isInteger(A)) {
      if (
        (Zm.diag.warn(
          `INT value type cannot accept a floating-point value for ${this._instrumentName}, ignoring the fractional digits.`
        ),
        (A = Math.trunc(A)),
        !Number.isInteger(A))
      )
        return;
    }
    this._buffer.set(B, A);
  }
}
P42.ObservableResultImpl = O42;
class T42 {
  _buffer = new Map();
  observe(A, B, Q = {}) {
    if (!Nv6.isObservableInstrument(A)) return;
    let I = this._buffer.get(A);
    if (I == null) ((I = new R42.AttributeHashMap()), this._buffer.set(A, I));
    if (typeof B !== 'number') {
      Zm.diag.warn(`non-number value provided to metric ${A._descriptor.name}: ${B}`);
      return;
    }
    if (A._descriptor.valueType === Zm.ValueType.INT && !Number.isInteger(B)) {
      if (
        (Zm.diag.warn(
          `INT value type cannot accept a floating-point value for ${A._descriptor.name}, ignoring the fractional digits.`
        ),
        (B = Math.trunc(B)),
        !Number.isInteger(B))
      )
        return;
    }
    I.set(Q, B);
  }
}
P42.BatchObservableResultImpl = T42;
