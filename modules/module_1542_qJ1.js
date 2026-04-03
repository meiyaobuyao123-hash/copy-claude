// Module: qJ1
// Params: p92

Object.defineProperty(p92, '__esModule', { value: !0 });
p92.isObservableInstrument =
  p92.ObservableUpDownCounterInstrument =
  p92.ObservableGaugeInstrument =
  p92.ObservableCounterInstrument =
  p92.ObservableInstrument =
  p92.HistogramInstrument =
  p92.GaugeInstrument =
  p92.CounterInstrument =
  p92.UpDownCounterInstrument =
  p92.SyncInstrument =
    void 0;
var Im = C4(),
  cf6 = CD();
class Gm {
  _writableMetricStorage;
  _descriptor;
  constructor(A, B) {
    ((this._writableMetricStorage = A), (this._descriptor = B));
  }
  _record(A, B = {}, Q = Im.context.active()) {
    if (typeof A !== 'number') {
      Im.diag.warn(`non-number value provided to metric ${this._descriptor.name}: ${A}`);
      return;
    }
    if (this._descriptor.valueType === Im.ValueType.INT && !Number.isInteger(A)) {
      if (
        (Im.diag.warn(
          `INT value type cannot accept a floating-point value for ${this._descriptor.name}, ignoring the fractional digits.`
        ),
        (A = Math.trunc(A)),
        !Number.isInteger(A))
      )
        return;
    }
    this._writableMetricStorage.record(A, B, Q, cf6.millisToHrTime(Date.now()));
  }
}
p92.SyncInstrument = Gm;
class v92 extends Gm {
  add(A, B, Q) {
    this._record(A, B, Q);
  }
}
p92.UpDownCounterInstrument = v92;
class b92 extends Gm {
  add(A, B, Q) {
    if (A < 0) {
      Im.diag.warn(`negative value provided to counter ${this._descriptor.name}: ${A}`);
      return;
    }
    this._record(A, B, Q);
  }
}
p92.CounterInstrument = b92;
class g92 extends Gm {
  record(A, B, Q) {
    this._record(A, B, Q);
  }
}
p92.GaugeInstrument = g92;
class h92 extends Gm {
  record(A, B, Q) {
    if (A < 0) {
      Im.diag.warn(`negative value provided to histogram ${this._descriptor.name}: ${A}`);
      return;
    }
    this._record(A, B, Q);
  }
}
p92.HistogramInstrument = h92;
class Dm {
  _observableRegistry;
  _metricStorages;
  _descriptor;
  constructor(A, B, Q) {
    ((this._observableRegistry = Q), (this._descriptor = A), (this._metricStorages = B));
  }
  addCallback(A) {
    this._observableRegistry.addCallback(A, this);
  }
  removeCallback(A) {
    this._observableRegistry.removeCallback(A, this);
  }
}
p92.ObservableInstrument = Dm;
class m92 extends Dm {}
p92.ObservableCounterInstrument = m92;
class d92 extends Dm {}
p92.ObservableGaugeInstrument = d92;
class u92 extends Dm {}
p92.ObservableUpDownCounterInstrument = u92;
function lf6(A) {
  return A instanceof Dm;
}
p92.isObservableInstrument = lf6;
