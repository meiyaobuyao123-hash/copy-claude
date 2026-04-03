// Module: nw1
// Params: J2A

Object.defineProperty(J2A, '__esModule', { value: !0 });
var tO = tA(),
  _y = vQ(),
  pA1 = pu(),
  gv2 = yA1(),
  hv2 = iZ();
function mv2(A, B, Q) {
  if (!gv2.hasTracingEnabled(B)) return ((A.sampled = !1), A);
  if (A.sampled !== void 0)
    return (A.setAttribute(pA1.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, Number(A.sampled)), A);
  let I;
  if (typeof B.tracesSampler === 'function')
    ((I = B.tracesSampler(Q)),
      A.setAttribute(pA1.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, Number(I)));
  else if (Q.parentSampled !== void 0) I = Q.parentSampled;
  else if (typeof B.tracesSampleRate !== 'undefined')
    ((I = B.tracesSampleRate),
      A.setAttribute(pA1.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, Number(I)));
  else ((I = 1), A.setAttribute(pA1.SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE, I));
  if (!F2A(I))
    return (
      _y.DEBUG_BUILD &&
        tO.logger.warn('[Tracing] Discarding transaction because of invalid sample rate.'),
      (A.sampled = !1),
      A
    );
  if (!I)
    return (
      _y.DEBUG_BUILD &&
        tO.logger.log(
          `[Tracing] Discarding transaction because ${typeof B.tracesSampler === 'function' ? 'tracesSampler returned 0 or false' : 'a negative sampling decision was inherited or tracesSampleRate is set to 0'}`
        ),
      (A.sampled = !1),
      A
    );
  if (((A.sampled = Math.random() < I), !A.sampled))
    return (
      _y.DEBUG_BUILD &&
        tO.logger.log(
          `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(I)})`
        ),
      A
    );
  return (
    _y.DEBUG_BUILD &&
      tO.logger.log(`[Tracing] starting ${A.op} transaction - ${hv2.spanToJSON(A).description}`),
    A
  );
}
function F2A(A) {
  if (tO.isNaN(A) || !(typeof A === 'number' || typeof A === 'boolean'))
    return (
      _y.DEBUG_BUILD &&
        tO.logger.warn(
          `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(A)} of type ${JSON.stringify(typeof A)}.`
        ),
      !1
    );
  if (A < 0 || A > 1)
    return (
      _y.DEBUG_BUILD &&
        tO.logger.warn(
          `[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${A}.`
        ),
      !1
    );
  return !0;
}
J2A.isValidSampleRate = F2A;
J2A.sampleTransaction = mv2;
