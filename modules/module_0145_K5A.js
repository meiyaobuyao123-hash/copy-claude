// Module: K5A
// Params: V5A

Object.defineProperty(V5A, '__esModule', { value: !0 });
var HX = I4(),
  PE = tA(),
  m$ = sZ(),
  pi2 = TE1(),
  W5A = hy(),
  Dp = fE1(),
  J5A = N01(),
  ci2 = Y5A(),
  DT = LW(),
  C5A = 'BrowserTracing',
  li2 = {
    ...HX.TRACING_DEFAULTS,
    markBackgroundTransactions: !0,
    routingInstrumentation: ci2.instrumentRoutingWithDefaults,
    startTransactionOnLocationChange: !0,
    startTransactionOnPageLoad: !0,
    enableLongTask: !0,
    enableInp: !1,
    interactionsSampleRate: 1,
    _experiments: {},
    ...J5A.defaultRequestInstrumentationOptions,
  },
  F5A = 10;
class X5A {
  constructor(A) {
    if (
      ((this.name = C5A),
      (this._hasSetTracePropagationTargets = !1),
      HX.addTracingExtensions(),
      m$.DEBUG_BUILD)
    )
      this._hasSetTracePropagationTargets = !!(
        A &&
        (A.tracePropagationTargets || A.tracingOrigins)
      );
    if (((this.options = { ...li2, ...A }), this.options._experiments.enableLongTask !== void 0))
      this.options.enableLongTask = this.options._experiments.enableLongTask;
    if (A && !A.tracePropagationTargets && A.tracingOrigins)
      this.options.tracePropagationTargets = A.tracingOrigins;
    if (
      ((this._collectWebVitals = Dp.startTrackingWebVitals()),
      (this._interactionIdToRouteNameMapping = {}),
      this.options.enableInp)
    )
      Dp.startTrackingINP(
        this._interactionIdToRouteNameMapping,
        this.options.interactionsSampleRate
      );
    if (this.options.enableLongTask) Dp.startTrackingLongTasks();
    if (this.options._experiments.enableInteractions) Dp.startTrackingInteractions();
    this._latestRoute = { name: void 0, context: void 0 };
  }
  setupOnce(A, B) {
    this._getCurrentHub = B;
    let I = B().getClient(),
      G = I && I.getOptions(),
      {
        routingInstrumentation: D,
        startTransactionOnLocationChange: Z,
        startTransactionOnPageLoad: Y,
        markBackgroundTransactions: W,
        traceFetch: F,
        traceXHR: J,
        shouldCreateSpanForRequest: C,
        enableHTTPTimings: X,
        _experiments: V,
      } = this.options,
      K = G && G.tracePropagationTargets,
      U = K || this.options.tracePropagationTargets;
    if (m$.DEBUG_BUILD && this._hasSetTracePropagationTargets && K)
      PE.logger.warn(
        '[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used.'
      );
    if (
      (D(
        (N) => {
          let q = this._createRouteTransaction(N);
          return (
            this.options._experiments.onStartRouteTransaction &&
              this.options._experiments.onStartRouteTransaction(q, N, B),
            q
          );
        },
        Y,
        Z
      ),
      W)
    )
      pi2.registerBackgroundTabDetection();
    if (V.enableInteractions) this._registerInteractionListener();
    if (this.options.enableInp) this._registerInpInteractionListener();
    J5A.instrumentOutgoingRequests({
      traceFetch: F,
      traceXHR: J,
      tracePropagationTargets: U,
      shouldCreateSpanForRequest: C,
      enableHTTPTimings: X,
    });
  }
  _createRouteTransaction(A) {
    if (!this._getCurrentHub) {
      m$.DEBUG_BUILD &&
        PE.logger.warn(
          `[Tracing] Did not create ${A.op} transaction because _getCurrentHub is invalid.`
        );
      return;
    }
    let B = this._getCurrentHub(),
      { beforeNavigate: Q, idleTimeout: I, finalTimeout: G, heartbeatInterval: D } = this.options,
      Z = A.op === 'pageload',
      Y;
    if (Z) {
      let X = Z ? gE1('sentry-trace') : '',
        V = Z ? gE1('baggage') : void 0,
        {
          traceId: K,
          dsc: U,
          parentSpanId: N,
          sampled: q,
        } = PE.propagationContextFromHeaders(X, V);
      Y = {
        traceId: K,
        parentSpanId: N,
        parentSampled: q,
        ...A,
        metadata: { ...A.metadata, dynamicSamplingContext: U },
        trimEnd: !0,
      };
    } else Y = { trimEnd: !0, ...A };
    let W = typeof Q === 'function' ? Q(Y) : Y,
      F = W === void 0 ? { ...Y, sampled: !1 } : W;
    if (
      ((F.metadata = F.name !== Y.name ? { ...F.metadata, source: 'custom' } : F.metadata),
      (this._latestRoute.name = F.name),
      (this._latestRoute.context = F),
      F.sampled === !1)
    )
      m$.DEBUG_BUILD &&
        PE.logger.log(`[Tracing] Will not send ${F.op} transaction because of beforeNavigate.`);
    m$.DEBUG_BUILD && PE.logger.log(`[Tracing] Starting ${F.op} transaction on scope`);
    let { location: J } = DT.WINDOW,
      C = HX.startIdleTransaction(B, F, I, G, !0, { location: J }, D, Z);
    if (Z) {
      if (DT.WINDOW.document) {
        if (
          (DT.WINDOW.document.addEventListener('readystatechange', () => {
            if (['interactive', 'complete'].includes(DT.WINDOW.document.readyState))
              C.sendAutoFinishSignal();
          }),
          ['interactive', 'complete'].includes(DT.WINDOW.document.readyState))
        )
          C.sendAutoFinishSignal();
      }
    }
    return (
      C.registerBeforeFinishCallback((X) => {
        (this._collectWebVitals(), Dp.addPerformanceEntries(X));
      }),
      C
    );
  }
  _registerInteractionListener() {
    let A,
      B = () => {
        let { idleTimeout: Q, finalTimeout: I, heartbeatInterval: G } = this.options,
          D = 'ui.action.click',
          Z = HX.getActiveTransaction();
        if (Z && Z.op && ['navigation', 'pageload'].includes(Z.op)) {
          m$.DEBUG_BUILD &&
            PE.logger.warn(
              '[Tracing] Did not create ui.action.click transaction because a pageload or navigation transaction is in progress.'
            );
          return;
        }
        if (A) (A.setFinishReason('interactionInterrupted'), A.end(), (A = void 0));
        if (!this._getCurrentHub) {
          m$.DEBUG_BUILD &&
            PE.logger.warn(
              '[Tracing] Did not create ui.action.click transaction because _getCurrentHub is invalid.'
            );
          return;
        }
        if (!this._latestRoute.name) {
          m$.DEBUG_BUILD &&
            PE.logger.warn(
              '[Tracing] Did not create ui.action.click transaction because _latestRouteName is missing.'
            );
          return;
        }
        let Y = this._getCurrentHub(),
          { location: W } = DT.WINDOW,
          F = {
            name: this._latestRoute.name,
            op: 'ui.action.click',
            trimEnd: !0,
            data: {
              [HX.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: this._latestRoute.context
                ? ii2(this._latestRoute.context)
                : 'url',
            },
          };
        A = HX.startIdleTransaction(Y, F, Q, I, !0, { location: W }, G);
      };
    ['click'].forEach((Q) => {
      if (DT.WINDOW.document) addEventListener(Q, B, { once: !1, capture: !0 });
    });
  }
  _registerInpInteractionListener() {
    let A = ({ entries: B }) => {
      let Q = HX.getClient(),
        I =
          Q !== void 0 && Q.getIntegrationByName !== void 0
            ? Q.getIntegrationByName('Replay')
            : void 0,
        G = I !== void 0 ? I.getReplayId() : void 0,
        D = HX.getActiveTransaction(),
        Z = HX.getCurrentScope(),
        Y = Z !== void 0 ? Z.getUser() : void 0;
      B.forEach((W) => {
        if (ni2(W)) {
          let F = W.interactionId;
          if (F === void 0) return;
          let J = this._interactionIdToRouteNameMapping[F],
            C = W.duration,
            X = W.startTime,
            V = Object.keys(this._interactionIdToRouteNameMapping),
            K =
              V.length > 0
                ? V.reduce((U, N) => {
                    return this._interactionIdToRouteNameMapping[U].duration <
                      this._interactionIdToRouteNameMapping[N].duration
                      ? U
                      : N;
                  })
                : void 0;
          if (W.entryType === 'first-input') {
            if (
              V.map((N) => this._interactionIdToRouteNameMapping[N]).some((N) => {
                return N.duration === C && N.startTime === X;
              })
            )
              return;
          }
          if (!F) return;
          if (J) J.duration = Math.max(J.duration, C);
          else if (
            V.length < F5A ||
            K === void 0 ||
            C > this._interactionIdToRouteNameMapping[K].duration
          ) {
            let U = this._latestRoute.name,
              N = this._latestRoute.context;
            if (U && N) {
              if (K && Object.keys(this._interactionIdToRouteNameMapping).length >= F5A)
                delete this._interactionIdToRouteNameMapping[K];
              this._interactionIdToRouteNameMapping[F] = {
                routeName: U,
                duration: C,
                parentContext: N,
                user: Y,
                activeTransaction: D,
                replayId: G,
                startTime: X,
              };
            }
          }
        }
      });
    };
    (W5A.addPerformanceInstrumentationHandler('event', A),
      W5A.addPerformanceInstrumentationHandler('first-input', A));
  }
}
function gE1(A) {
  let B = PE.getDomElement(`meta[name=${A}]`);
  return B ? B.getAttribute('content') : void 0;
}
function ii2(A) {
  let B = A.attributes && A.attributes[HX.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
    Q = A.data && A.data[HX.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
    I = A.metadata && A.metadata.source;
  return B || Q || I;
}
function ni2(A) {
  return 'duration' in A;
}
V5A.BROWSER_TRACING_INTEGRATION_ID = C5A;
V5A.BrowserTracing = X5A;
V5A.getMetaContent = gE1;
