// Module: iZ
// Params: V0A

Object.defineProperty(V0A, '__esModule', { value: !0 });
var Pw1 = tA(),
  Yk2 = 0,
  J0A = 1;
function Wk2(A) {
  let { spanId: B, traceId: Q } = A.spanContext(),
    { data: I, op: G, parent_span_id: D, status: Z, tags: Y, origin: W } = C0A(A);
  return Pw1.dropUndefinedKeys({
    data: I,
    op: G,
    parent_span_id: D,
    span_id: B,
    status: Z,
    tags: Y,
    trace_id: Q,
    origin: W,
  });
}
function Fk2(A) {
  let { traceId: B, spanId: Q } = A.spanContext(),
    I = X0A(A);
  return Pw1.generateSentryTraceHeader(B, Q, I);
}
function Jk2(A) {
  if (typeof A === 'number') return F0A(A);
  if (Array.isArray(A)) return A[0] + A[1] / 1e9;
  if (A instanceof Date) return F0A(A.getTime());
  return Pw1.timestampInSeconds();
}
function F0A(A) {
  return A > 9999999999 ? A / 1000 : A;
}
function C0A(A) {
  if (Ck2(A)) return A.getSpanJSON();
  if (typeof A.toJSON === 'function') return A.toJSON();
  return {};
}
function Ck2(A) {
  return typeof A.getSpanJSON === 'function';
}
function X0A(A) {
  let { traceFlags: B } = A.spanContext();
  return Boolean(B & J0A);
}
V0A.TRACE_FLAG_NONE = Yk2;
V0A.TRACE_FLAG_SAMPLED = J0A;
V0A.spanIsSampled = X0A;
V0A.spanTimeInputToSeconds = Jk2;
V0A.spanToJSON = C0A;
V0A.spanToTraceContext = Wk2;
V0A.spanToTraceHeader = Fk2;
