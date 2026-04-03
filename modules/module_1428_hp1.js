// Module: hp1
// Params: Qc0

Object.defineProperty(Qc0, '__esModule', { value: !0 });
Qc0.getSpanContext =
  Qc0.setSpanContext =
  Qc0.deleteSpan =
  Qc0.setSpan =
  Qc0.getActiveSpan =
  Qc0.getSpan =
    void 0;
var uE6 = or(),
  pE6 = sF1(),
  cE6 = er(),
  bp1 = uE6.createContextKey('OpenTelemetry Context Key SPAN');
function gp1(A) {
  return A.getValue(bp1) || void 0;
}
Qc0.getSpan = gp1;
function lE6() {
  return gp1(cE6.ContextAPI.getInstance().active());
}
Qc0.getActiveSpan = lE6;
function Bc0(A, B) {
  return A.setValue(bp1, B);
}
Qc0.setSpan = Bc0;
function iE6(A) {
  return A.deleteValue(bp1);
}
Qc0.deleteSpan = iE6;
function nE6(A, B) {
  return Bc0(A, new pE6.NonRecordingSpan(B));
}
Qc0.setSpanContext = nE6;
function aE6(A) {
  var B;
  return (B = gp1(A)) === null || B === void 0 ? void 0 : B.spanContext();
}
Qc0.getSpanContext = aE6;
