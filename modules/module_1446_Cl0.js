// Module: Cl0
// Params: Fl0

Object.defineProperty(Fl0, '__esModule', { value: !0 });
Fl0.deleteBaggage = Fl0.setBaggage = Fl0.getActiveBaggage = Fl0.getBaggage = void 0;
var bU6 = er(),
  gU6 = or(),
  Ac1 = gU6.createContextKey('OpenTelemetry Baggage Key');
function Wl0(A) {
  return A.getValue(Ac1) || void 0;
}
Fl0.getBaggage = Wl0;
function hU6() {
  return Wl0(bU6.ContextAPI.getInstance().active());
}
Fl0.getActiveBaggage = hU6;
function mU6(A, B) {
  return A.setValue(Ac1, B);
}
Fl0.setBaggage = mU6;
function dU6(A) {
  return A.deleteValue(Ac1);
}
Fl0.deleteBaggage = dU6;
