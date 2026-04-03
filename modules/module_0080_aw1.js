// Module: aw1
// Params: X2A

Object.defineProperty(X2A, '__esModule', { value: !0 });
var pv2 = tA(),
  cv2 = vQ(),
  lv2 = oK(),
  iv2 = iZ(),
  nv2 = jA1(),
  av2 = iw1(),
  C2A = nw1(),
  sv2 = mA1();
function rv2() {
  let B = this.getScope().getSpan();
  return B ? { 'sentry-trace': iv2.spanToTraceHeader(B) } : {};
}
function ov2(A, B) {
  let Q = this.getClient(),
    I = (Q && Q.getOptions()) || {},
    G = I.instrumenter || 'sentry',
    D = A.instrumenter || 'sentry';
  if (G !== D)
    (cv2.DEBUG_BUILD &&
      pv2.logger
        .error(`A transaction was started with instrumenter=\`${D}\`, but the SDK is configured with the \`${G}\` instrumenter.
The transaction will not be sampled. Please use the ${G} instrumentation to start transactions.`),
      (A.sampled = !1));
  let Z = new sv2.Transaction(A, this);
  if (
    ((Z = C2A.sampleTransaction(Z, I, {
      name: A.name,
      parentSampled: A.parentSampled,
      transactionContext: A,
      attributes: { ...A.data, ...A.attributes },
      ...B,
    })),
    Z.isRecording())
  )
    Z.initSpanRecorder(I._experiments && I._experiments.maxSpans);
  if (Q && Q.emit) Q.emit('startTransaction', Z);
  return Z;
}
function tv2(A, B, Q, I, G, D, Z, Y = !1) {
  let W = A.getClient(),
    F = (W && W.getOptions()) || {},
    J = new av2.IdleTransaction(B, A, Q, I, Z, G, Y);
  if (
    ((J = C2A.sampleTransaction(J, F, {
      name: B.name,
      parentSampled: B.parentSampled,
      transactionContext: B,
      attributes: { ...B.data, ...B.attributes },
      ...D,
    })),
    J.isRecording())
  )
    J.initSpanRecorder(F._experiments && F._experiments.maxSpans);
  if (W && W.emit) W.emit('startTransaction', J);
  return J;
}
function ev2() {
  let A = lv2.getMainCarrier();
  if (!A.__SENTRY__) return;
  if (
    ((A.__SENTRY__.extensions = A.__SENTRY__.extensions || {}),
    !A.__SENTRY__.extensions.startTransaction)
  )
    A.__SENTRY__.extensions.startTransaction = ov2;
  if (!A.__SENTRY__.extensions.traceHeaders) A.__SENTRY__.extensions.traceHeaders = rv2;
  nv2.registerErrorInstrumentation();
}
X2A.addTracingExtensions = ev2;
X2A.startIdleTransaction = tv2;
