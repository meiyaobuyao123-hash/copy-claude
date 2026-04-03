// Module: gBA
// Params: bBA

var { _optionalChain: l01 } = tA();
Object.defineProperty(bBA, '__esModule', { value: !0 });
var p7 = I4(),
  ly = tA(),
  Zt2 = Jp(),
  i01 = GU1(),
  Yt2 = WU1(),
  vBA = fBA();
function Wt2() {
  return function A(B, Q, I) {
    let G = l01([
      p7.getClient,
      'call',
      (J) => J(),
      'optionalAccess',
      (J) => J.getOptions,
      'call',
      (J) => J(),
    ]);
    if (
      !G ||
      G.instrumenter !== 'sentry' ||
      l01([
        B,
        'access',
        (J) => J.method,
        'optionalAccess',
        (J) => J.toUpperCase,
        'call',
        (J) => J(),
      ]) === 'OPTIONS' ||
      l01([
        B,
        'access',
        (J) => J.method,
        'optionalAccess',
        (J) => J.toUpperCase,
        'call',
        (J) => J(),
      ]) === 'HEAD'
    )
      return I();
    let D =
        B.headers && ly.isString(B.headers['sentry-trace']) ? B.headers['sentry-trace'] : void 0,
      Z = l01([B, 'access', (J) => J.headers, 'optionalAccess', (J) => J.baggage]);
    if (!p7.hasTracingEnabled(G)) return I();
    let [Y, W] = ly.extractPathForTransaction(B, { path: !0, method: !0 }),
      F = p7.continueTrace({ sentryTrace: D, baggage: Z }, (J) =>
        p7.startTransaction(
          {
            name: Y,
            op: 'http.server',
            origin: 'auto.http.node.tracingHandler',
            ...J,
            data: { [p7.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: W },
            metadata: { ...J.metadata, request: B },
          },
          { request: ly.extractRequestData(B) }
        )
      );
    (p7.getCurrentScope().setSpan(F),
      (Q.__sentry_transaction = F),
      Q.once('finish', () => {
        setImmediate(() => {
          (ly.addRequestDataToTransaction(F, B), p7.setHttpStatus(F, Q.statusCode), F.end());
        });
      }),
      I());
  };
}
function Ft2(A = {}) {
  let B;
  if ('include' in A) B = { include: A.include };
  else {
    let { ip: Q, request: I, transaction: G, user: D } = A;
    if (Q || I || G || D)
      B = { include: ly.dropUndefinedKeys({ ip: Q, request: I, transaction: G, user: D }) };
  }
  return B;
}
function Jt2(A) {
  let B = Ft2(A),
    Q = p7.getClient();
  if (Q && i01.isAutoSessionTrackingEnabled(Q)) {
    Q.initSessionFlusher();
    let I = p7.getCurrentScope();
    if (I.getSession()) I.setSession();
  }
  return function I(G, D, Z) {
    if (A && A.flushTimeout && A.flushTimeout > 0) {
      let Y = D.end;
      D.end = function (W, F, J) {
        p7.flush(A.flushTimeout)
          .then(() => {
            Y.call(this, W, F, J);
          })
          .then(null, (C) => {
            (Zt2.DEBUG_BUILD && ly.logger.error(C), Y.call(this, W, F, J));
          });
      };
    }
    p7.runWithAsyncContext(() => {
      let Y = p7.getCurrentScope();
      Y.setSDKProcessingMetadata({ request: G, requestDataOptionsFromExpressHandler: B });
      let W = p7.getClient();
      if (i01.isAutoSessionTrackingEnabled(W)) Y.setRequestSession({ status: 'ok' });
      (D.once('finish', () => {
        let F = p7.getClient();
        if (i01.isAutoSessionTrackingEnabled(F))
          setImmediate(() => {
            if (F && F._captureRequestSession) F._captureRequestSession();
          });
      }),
        Z());
    });
  };
}
function Ct2(A) {
  let B = A.status || A.statusCode || A.status_code || (A.output && A.output.statusCode);
  return B ? parseInt(B, 10) : 500;
}
function Xt2(A) {
  return Ct2(A) >= 500;
}
function Vt2(A) {
  return function B(Q, I, G, D) {
    if (((A && A.shouldHandleError) || Xt2)(Q)) {
      p7.withScope((Y) => {
        Y.setSDKProcessingMetadata({ request: I });
        let W = G.__sentry_transaction;
        if (W && !p7.getActiveSpan()) Y.setSpan(W);
        let F = p7.getClient();
        if (F && i01.isAutoSessionTrackingEnabled(F)) {
          if (F._sessionFlusher !== void 0) {
            let X = Y.getRequestSession();
            if (X && X.status !== void 0) X.status = 'crashed';
          }
        }
        let J = p7.captureException(Q, { mechanism: { type: 'middleware', handled: !1 } });
        ((G.sentry = J), D(Q));
      });
      return;
    }
    D(Q);
  };
}
var Kt2 = Yt2.trpcMiddleware;
bBA.extractRequestData = vBA.extractRequestData;
bBA.parseRequest = vBA.parseRequest;
bBA.errorHandler = Vt2;
bBA.requestHandler = Jt2;
bBA.tracingHandler = Wt2;
bBA.trpcMiddleware = Kt2;
