// Module: EAA
// Params: wAA

Object.defineProperty(wAA, '__esModule', { value: !0 });
var HAA = Cw1(),
  GJ = Mu(),
  zAA = new RegExp('^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$');
function Xw1(A) {
  if (!A) return;
  let B = A.match(zAA);
  if (!B) return;
  let Q;
  if (B[3] === '1') Q = !0;
  else if (B[3] === '0') Q = !1;
  return { traceId: B[1], parentSampled: Q, parentSpanId: B[2] };
}
function aT2(A, B) {
  let Q = Xw1(A),
    I = HAA.baggageHeaderToDynamicSamplingContext(B),
    { traceId: G, parentSpanId: D, parentSampled: Z } = Q || {};
  if (!Q)
    return {
      traceparentData: Q,
      dynamicSamplingContext: void 0,
      propagationContext: { traceId: G || GJ.uuid4(), spanId: GJ.uuid4().substring(16) },
    };
  else
    return {
      traceparentData: Q,
      dynamicSamplingContext: I || {},
      propagationContext: {
        traceId: G || GJ.uuid4(),
        parentSpanId: D || GJ.uuid4().substring(16),
        spanId: GJ.uuid4().substring(16),
        sampled: Z,
        dsc: I || {},
      },
    };
}
function sT2(A, B) {
  let Q = Xw1(A),
    I = HAA.baggageHeaderToDynamicSamplingContext(B),
    { traceId: G, parentSpanId: D, parentSampled: Z } = Q || {};
  if (!Q) return { traceId: G || GJ.uuid4(), spanId: GJ.uuid4().substring(16) };
  else
    return {
      traceId: G || GJ.uuid4(),
      parentSpanId: D || GJ.uuid4().substring(16),
      spanId: GJ.uuid4().substring(16),
      sampled: Z,
      dsc: I || {},
    };
}
function rT2(A = GJ.uuid4(), B = GJ.uuid4().substring(16), Q) {
  let I = '';
  if (Q !== void 0) I = Q ? '-1' : '-0';
  return `${A}-${B}${I}`;
}
wAA.TRACEPARENT_REGEXP = zAA;
wAA.extractTraceparentData = Xw1;
wAA.generateSentryTraceHeader = rT2;
wAA.propagationContextFromHeaders = sT2;
wAA.tracingContextFromHeaders = aT2;
