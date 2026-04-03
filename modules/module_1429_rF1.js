// Module: rF1
// Params: Yc0

Object.defineProperty(Yc0, '__esModule', { value: !0 });
Yc0.wrapSpanContext = Yc0.isSpanContextValid = Yc0.isValidSpanId = Yc0.isValidTraceId = void 0;
var Gc0 = aF1(),
  AU6 = sF1(),
  BU6 = /^([0-9a-f]{32})$/i,
  QU6 = /^[0-9a-f]{16}$/i;
function Dc0(A) {
  return BU6.test(A) && A !== Gc0.INVALID_TRACEID;
}
Yc0.isValidTraceId = Dc0;
function Zc0(A) {
  return QU6.test(A) && A !== Gc0.INVALID_SPANID;
}
Yc0.isValidSpanId = Zc0;
function IU6(A) {
  return Dc0(A.traceId) && Zc0(A.spanId);
}
Yc0.isSpanContextValid = IU6;
function GU6(A) {
  return new AU6.NonRecordingSpan(A);
}
Yc0.wrapSpanContext = GU6;
