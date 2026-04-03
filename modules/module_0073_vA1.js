// Module: vA1
// Params: s0A

Object.defineProperty(s0A, '__esModule', { value: !0 });
var mu = tA(),
  lf2 = vQ(),
  v$ = oK(),
  kA1 = iZ();
jA1();
Ry();
var if2 = sO(),
  Oy = DJ(),
  pw1 = uw1(),
  c0A = yA1();
function nf2(A, B, Q = () => {}, I = () => {}) {
  let G = v$.getCurrentHub(),
    D = Oy.getCurrentScope(),
    Z = D.getSpan(),
    Y = fA1(A),
    W = xA1(G, { parentSpan: Z, spanContext: Y, forceTransaction: !1, scope: D });
  return (
    D.setSpan(W),
    pw1.handleCallbackErrors(
      () => B(W),
      (F) => {
        (W && W.setStatus('internal_error'), Q(F, W));
      },
      () => {
        (W && W.end(), D.setSpan(Z), I());
      }
    )
  );
}
function l0A(A, B) {
  let Q = fA1(A);
  return v$.runWithAsyncContext(() => {
    return Oy.withScope(A.scope, (I) => {
      let G = v$.getCurrentHub(),
        D = I.getSpan(),
        Y =
          A.onlyIfParent && !D
            ? void 0
            : xA1(G, {
                parentSpan: D,
                spanContext: Q,
                forceTransaction: A.forceTransaction,
                scope: I,
              });
      return pw1.handleCallbackErrors(
        () => B(Y),
        () => {
          if (Y) {
            let { status: W } = kA1.spanToJSON(Y);
            if (!W || W === 'ok') Y.setStatus('internal_error');
          }
        },
        () => Y && Y.end()
      );
    });
  });
}
var af2 = l0A;
function sf2(A, B) {
  let Q = fA1(A);
  return v$.runWithAsyncContext(() => {
    return Oy.withScope(A.scope, (I) => {
      let G = v$.getCurrentHub(),
        D = I.getSpan(),
        Y =
          A.onlyIfParent && !D
            ? void 0
            : xA1(G, {
                parentSpan: D,
                spanContext: Q,
                forceTransaction: A.forceTransaction,
                scope: I,
              });
      function W() {
        Y && Y.end();
      }
      return pw1.handleCallbackErrors(
        () => B(Y, W),
        () => {
          if (Y && Y.isRecording()) {
            let { status: F } = kA1.spanToJSON(Y);
            if (!F || F === 'ok') Y.setStatus('internal_error');
          }
        }
      );
    });
  });
}
function rf2(A) {
  if (!c0A.hasTracingEnabled()) return;
  let B = fA1(A),
    Q = v$.getCurrentHub(),
    I = A.scope ? A.scope.getSpan() : i0A();
  if (A.onlyIfParent && !I) return;
  let Z = (A.scope || Oy.getCurrentScope()).clone();
  return xA1(Q, { parentSpan: I, spanContext: B, forceTransaction: A.forceTransaction, scope: Z });
}
function i0A() {
  return Oy.getCurrentScope().getSpan();
}
var of2 = ({ sentryTrace: A, baggage: B }, Q) => {
  let I = Oy.getCurrentScope(),
    {
      traceparentData: G,
      dynamicSamplingContext: D,
      propagationContext: Z,
    } = mu.tracingContextFromHeaders(A, B);
  if ((I.setPropagationContext(Z), lf2.DEBUG_BUILD && G))
    mu.logger.log(`[Tracing] Continuing trace ${G.traceId}.`);
  let Y = { ...G, metadata: mu.dropUndefinedKeys({ dynamicSamplingContext: D }) };
  if (!Q) return Y;
  return v$.runWithAsyncContext(() => {
    return Q(Y);
  });
};
function xA1(A, { parentSpan: B, spanContext: Q, forceTransaction: I, scope: G }) {
  if (!c0A.hasTracingEnabled()) return;
  let D = v$.getIsolationScope(),
    Z;
  if (B && !I) Z = B.startChild(Q);
  else if (B) {
    let Y = if2.getDynamicSamplingContextFromSpan(B),
      { traceId: W, spanId: F } = B.spanContext(),
      J = kA1.spanIsSampled(B);
    Z = A.startTransaction({
      traceId: W,
      parentSpanId: F,
      parentSampled: J,
      ...Q,
      metadata: { dynamicSamplingContext: Y, ...Q.metadata },
    });
  } else {
    let {
      traceId: Y,
      dsc: W,
      parentSpanId: F,
      sampled: J,
    } = { ...D.getPropagationContext(), ...G.getPropagationContext() };
    Z = A.startTransaction({
      traceId: Y,
      parentSpanId: F,
      parentSampled: J,
      ...Q,
      metadata: { dynamicSamplingContext: W, ...Q.metadata },
    });
  }
  return (G.setSpan(Z), tf2(Z, G, D), Z);
}
function fA1(A) {
  if (A.startTime) {
    let B = { ...A };
    return ((B.startTimestamp = kA1.spanTimeInputToSeconds(A.startTime)), delete B.startTime, B);
  }
  return A;
}
var n0A = '_sentryScope',
  a0A = '_sentryIsolationScope';
function tf2(A, B, Q) {
  if (A) (mu.addNonEnumerableProperty(A, a0A, Q), mu.addNonEnumerableProperty(A, n0A, B));
}
function ef2(A) {
  return { scope: A[n0A], isolationScope: A[a0A] };
}
s0A.continueTrace = of2;
s0A.getActiveSpan = i0A;
s0A.getCapturedScopesOnSpan = ef2;
s0A.startActiveSpan = af2;
s0A.startInactiveSpan = rf2;
s0A.startSpan = l0A;
s0A.startSpanManual = sf2;
s0A.trace = nf2;
