// Module: Io
// Params: Pi0

Object.defineProperty(Pi0, '__esModule', { value: !0 });
Pi0.isTracingSuppressed = Pi0.unsuppressTracing = Pi0.suppressTracing = void 0;
var F$6 = C4(),
  wc1 = F$6.createContextKey('OpenTelemetry SDK Context Key SUPPRESS_TRACING');
function J$6(A) {
  return A.setValue(wc1, !0);
}
Pi0.suppressTracing = J$6;
function C$6(A) {
  return A.deleteValue(wc1);
}
Pi0.unsuppressTracing = C$6;
function X$6(A) {
  return A.getValue(wc1) === !0;
}
Pi0.isTracingSuppressed = X$6;
