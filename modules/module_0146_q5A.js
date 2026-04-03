// Module: q5A
// Params: $5A

Object.defineProperty($5A, '__esModule', { value: !0 });
var QQ = I4(),
  ZJ = tA(),
  d$ = sZ(),
  oi2 = TE1(),
  H5A = hy(),
  Zp = fE1(),
  w5A = N01(),
  OW = LW(),
  E5A = 'BrowserTracing',
  ti2 = {
    ...QQ.TRACING_DEFAULTS,
    instrumentNavigation: !0,
    instrumentPageLoad: !0,
    markBackgroundSpan: !0,
    enableLongTask: !0,
    enableInp: !1,
    interactionsSampleRate: 1,
    _experiments: {},
    ...w5A.defaultRequestInstrumentationOptions,
  },
  ei2 = (A = {}) => {
    let B = d$.DEBUG_BUILD ? !!(A.tracePropagationTargets || A.tracingOrigins) : !1;
    if ((QQ.addTracingExtensions(), !A.tracePropagationTargets && A.tracingOrigins))
      A.tracePropagationTargets = A.tracingOrigins;
    let Q = { ...ti2, ...A },
      I = Zp.startTrackingWebVitals(),
      G = {};
    if (Q.enableInp) Zp.startTrackingINP(G, Q.interactionsSampleRate);
    if (Q.enableLongTask) Zp.startTrackingLongTasks();
    if (Q._experiments.enableInteractions) Zp.startTrackingInteractions();
    let D = { name: void 0, context: void 0 };
    function Z(Y) {
      let W = QQ.getCurrentHub(),
        { beforeStartSpan: F, idleTimeout: J, finalTimeout: C, heartbeatInterval: X } = Q,
        V = Y.op === 'pageload',
        K;
      if (V) {
        let M = V ? hE1('sentry-trace') : '',
          R = V ? hE1('baggage') : void 0,
          {
            traceId: T,
            dsc: O,
            parentSpanId: S,
            sampled: f,
          } = ZJ.propagationContextFromHeaders(M, R);
        K = {
          traceId: T,
          parentSpanId: S,
          parentSampled: f,
          ...Y,
          metadata: { ...Y.metadata, dynamicSamplingContext: O },
          trimEnd: !0,
        };
      } else K = { trimEnd: !0, ...Y };
      let U = F ? F(K) : K;
      if (
        ((U.metadata = U.name !== K.name ? { ...U.metadata, source: 'custom' } : U.metadata),
        (D.name = U.name),
        (D.context = U),
        U.sampled === !1)
      )
        d$.DEBUG_BUILD &&
          ZJ.logger.log(`[Tracing] Will not send ${U.op} transaction because of beforeNavigate.`);
      d$.DEBUG_BUILD && ZJ.logger.log(`[Tracing] Starting ${U.op} transaction on scope`);
      let { location: N } = OW.WINDOW,
        q = QQ.startIdleTransaction(W, U, J, C, !0, { location: N }, X, V);
      if (V && OW.WINDOW.document) {
        if (
          (OW.WINDOW.document.addEventListener('readystatechange', () => {
            if (['interactive', 'complete'].includes(OW.WINDOW.document.readyState))
              q.sendAutoFinishSignal();
          }),
          ['interactive', 'complete'].includes(OW.WINDOW.document.readyState))
        )
          q.sendAutoFinishSignal();
      }
      return (
        q.registerBeforeFinishCallback((M) => {
          (I(), Zp.addPerformanceEntries(M));
        }),
        q
      );
    }
    return {
      name: E5A,
      setupOnce: () => {},
      afterAllSetup(Y) {
        let W = Y.getOptions(),
          {
            markBackgroundSpan: F,
            traceFetch: J,
            traceXHR: C,
            shouldCreateSpanForRequest: X,
            enableHTTPTimings: V,
            _experiments: K,
          } = Q,
          U = W && W.tracePropagationTargets,
          N = U || Q.tracePropagationTargets;
        if (d$.DEBUG_BUILD && B && U)
          ZJ.logger.warn(
            '[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used.'
          );
        let q,
          M = OW.WINDOW.location && OW.WINDOW.location.href;
        if (Y.on)
          (Y.on('startNavigationSpan', (R) => {
            if (q)
              (d$.DEBUG_BUILD &&
                ZJ.logger.log(
                  `[Tracing] Finishing current transaction with op: ${QQ.spanToJSON(q).op}`
                ),
                q.end());
            q = Z({ op: 'navigation', ...R });
          }),
            Y.on('startPageLoadSpan', (R) => {
              if (q)
                (d$.DEBUG_BUILD &&
                  ZJ.logger.log(
                    `[Tracing] Finishing current transaction with op: ${QQ.spanToJSON(q).op}`
                  ),
                  q.end());
              q = Z({ op: 'pageload', ...R });
            }));
        if (Q.instrumentPageLoad && Y.emit && OW.WINDOW.location) {
          let R = {
            name: OW.WINDOW.location.pathname,
            startTimestamp: ZJ.browserPerformanceTimeOrigin
              ? ZJ.browserPerformanceTimeOrigin / 1000
              : void 0,
            origin: 'auto.pageload.browser',
            attributes: { [QQ.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: 'url' },
          };
          U5A(Y, R);
        }
        if (Q.instrumentNavigation && Y.emit && OW.WINDOW.location)
          ZJ.addHistoryInstrumentationHandler(({ to: R, from: T }) => {
            if (T === void 0 && M && M.indexOf(R) !== -1) {
              M = void 0;
              return;
            }
            if (T !== R) {
              M = void 0;
              let O = {
                name: OW.WINDOW.location.pathname,
                origin: 'auto.navigation.browser',
                attributes: { [QQ.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: 'url' },
              };
              N5A(Y, O);
            }
          });
        if (F) oi2.registerBackgroundTabDetection();
        if (K.enableInteractions) An2(Q, D);
        if (Q.enableInp) Qn2(G, D);
        w5A.instrumentOutgoingRequests({
          traceFetch: J,
          traceXHR: C,
          tracePropagationTargets: N,
          shouldCreateSpanForRequest: X,
          enableHTTPTimings: V,
        });
      },
      options: Q,
    };
  };
function U5A(A, B) {
  if (!A.emit) return;
  A.emit('startPageLoadSpan', B);
  let Q = QQ.getActiveSpan();
  return (Q && QQ.spanToJSON(Q).op) === 'pageload' ? Q : void 0;
}
function N5A(A, B) {
  if (!A.emit) return;
  A.emit('startNavigationSpan', B);
  let Q = QQ.getActiveSpan();
  return (Q && QQ.spanToJSON(Q).op) === 'navigation' ? Q : void 0;
}
function hE1(A) {
  let B = ZJ.getDomElement(`meta[name=${A}]`);
  return B ? B.getAttribute('content') : void 0;
}
function An2(A, B) {
  let Q,
    I = () => {
      let { idleTimeout: G, finalTimeout: D, heartbeatInterval: Z } = A,
        Y = 'ui.action.click',
        W = QQ.getActiveTransaction();
      if (W && W.op && ['navigation', 'pageload'].includes(W.op)) {
        d$.DEBUG_BUILD &&
          ZJ.logger.warn(
            '[Tracing] Did not create ui.action.click transaction because a pageload or navigation transaction is in progress.'
          );
        return;
      }
      if (Q) (Q.setFinishReason('interactionInterrupted'), Q.end(), (Q = void 0));
      if (!B.name) {
        d$.DEBUG_BUILD &&
          ZJ.logger.warn(
            '[Tracing] Did not create ui.action.click transaction because _latestRouteName is missing.'
          );
        return;
      }
      let { location: F } = OW.WINDOW,
        J = {
          name: B.name,
          op: 'ui.action.click',
          trimEnd: !0,
          data: { [QQ.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: B.context ? In2(B.context) : 'url' },
        };
      Q = QQ.startIdleTransaction(QQ.getCurrentHub(), J, G, D, !0, { location: F }, Z);
    };
  ['click'].forEach((G) => {
    if (OW.WINDOW.document) addEventListener(G, I, { once: !1, capture: !0 });
  });
}
function Bn2(A) {
  return 'duration' in A;
}
var z5A = 10;
function Qn2(A, B) {
  let Q = ({ entries: I }) => {
    let G = QQ.getClient(),
      D =
        G !== void 0 && G.getIntegrationByName !== void 0
          ? G.getIntegrationByName('Replay')
          : void 0,
      Z = D !== void 0 ? D.getReplayId() : void 0,
      Y = QQ.getActiveTransaction(),
      W = QQ.getCurrentScope(),
      F = W !== void 0 ? W.getUser() : void 0;
    I.forEach((J) => {
      if (Bn2(J)) {
        let C = J.interactionId;
        if (C === void 0) return;
        let X = A[C],
          V = J.duration,
          K = J.startTime,
          U = Object.keys(A),
          N =
            U.length > 0
              ? U.reduce((q, M) => {
                  return A[q].duration < A[M].duration ? q : M;
                })
              : void 0;
        if (J.entryType === 'first-input') {
          if (
            U.map((M) => A[M]).some((M) => {
              return M.duration === V && M.startTime === K;
            })
          )
            return;
        }
        if (!C) return;
        if (X) X.duration = Math.max(X.duration, V);
        else if (U.length < z5A || N === void 0 || V > A[N].duration) {
          let { name: q, context: M } = B;
          if (q && M) {
            if (N && Object.keys(A).length >= z5A) delete A[N];
            A[C] = {
              routeName: q,
              duration: V,
              parentContext: M,
              user: F,
              activeTransaction: Y,
              replayId: Z,
              startTime: K,
            };
          }
        }
      }
    });
  };
  (H5A.addPerformanceInstrumentationHandler('event', Q),
    H5A.addPerformanceInstrumentationHandler('first-input', Q));
}
function In2(A) {
  let B = A.attributes && A.attributes[QQ.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
    Q = A.data && A.data[QQ.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE],
    I = A.metadata && A.metadata.source;
  return B || Q || I;
}
$5A.BROWSER_TRACING_INTEGRATION_ID = E5A;
$5A.browserTracingIntegration = ei2;
$5A.getMetaContent = hE1;
$5A.startBrowserTracingNavigationSpan = N5A;
$5A.startBrowserTracingPageLoadSpan = U5A;
