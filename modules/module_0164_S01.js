// Module: S01
// Params: y8A

var { _optionalChain: dy } = tA();
Object.defineProperty(y8A, '__esModule', { value: !0 });
var hG = I4(),
  TW = tA(),
  rE1 = Jp(),
  ds2 = ZT(),
  Cp = P8A(),
  us2 = (A = {}) => {
    let { breadcrumbs: B, tracing: Q, shouldCreateSpanForRequest: I } = A,
      G = {
        breadcrumbs: B,
        tracing:
          Q === !1
            ? !1
            : TW.dropUndefinedKeys({
                enableIfHasTracingEnabled: Q === !0 ? void 0 : !0,
                shouldCreateSpanForRequest: I,
              }),
      };
    return new FT(G);
  },
  ps2 = hG.defineIntegration(us2);
class FT {
  static __initStatic() {
    this.id = 'Http';
  }
  __init() {
    this.name = FT.id;
  }
  constructor(A = {}) {
    (FT.prototype.__init.call(this),
      (this._breadcrumbs = typeof A.breadcrumbs === 'undefined' ? !0 : A.breadcrumbs),
      (this._tracing = !A.tracing ? void 0 : A.tracing === !0 ? {} : A.tracing));
  }
  setupOnce(A, B) {
    let Q = dy([
        B,
        'call',
        (W) => W(),
        'access',
        (W) => W.getClient,
        'call',
        (W) => W(),
        'optionalAccess',
        (W) => W.getOptions,
        'call',
        (W) => W(),
      ]),
      I = _8A(this._tracing, Q);
    if (!this._breadcrumbs && !I) return;
    if (Q && Q.instrumenter !== 'sentry') {
      rE1.DEBUG_BUILD &&
        TW.logger.log('HTTP Integration is skipped because of instrumenter configuration.');
      return;
    }
    let G = j8A(I, this._tracing, Q),
      D =
        dy([Q, 'optionalAccess', (W) => W.tracePropagationTargets]) ||
        dy([this, 'access', (W) => W._tracing, 'optionalAccess', (W) => W.tracePropagationTargets]),
      Z = D1('http'),
      Y = S8A(Z, this._breadcrumbs, G, D);
    if ((TW.fill(Z, 'get', Y), TW.fill(Z, 'request', Y), ds2.NODE_VERSION.major > 8)) {
      let W = D1('https'),
        F = S8A(W, this._breadcrumbs, G, D);
      (TW.fill(W, 'get', F), TW.fill(W, 'request', F));
    }
  }
}
FT.__initStatic();
function S8A(A, B, Q, I) {
  let G = new TW.LRUMap(100),
    D = new TW.LRUMap(100),
    Z = (F) => {
      if (Q === void 0) return !0;
      let J = G.get(F);
      if (J !== void 0) return J;
      let C = Q(F);
      return (G.set(F, C), C);
    },
    Y = (F) => {
      if (I === void 0) return !0;
      let J = D.get(F);
      if (J !== void 0) return J;
      let C = TW.stringMatchesSomePattern(F, I);
      return (D.set(F, C), C);
    };
  function W(F, J, C, X) {
    if (!hG.getCurrentHub().getIntegration(FT)) return;
    hG.addBreadcrumb(
      { category: 'http', data: { status_code: X && X.statusCode, ...J }, type: 'http' },
      { event: F, request: C, response: X }
    );
  }
  return function F(J) {
    return function C(...X) {
      let V = Cp.normalizeRequestArgs(A, X),
        K = V[0],
        U = Cp.extractRawUrl(K),
        N = Cp.extractUrl(K),
        q = hG.getClient();
      if (hG.isSentryRequestUrl(N, q)) return J.apply(A, V);
      let M = hG.getCurrentScope(),
        R = hG.getIsolationScope(),
        T = hG.getActiveSpan(),
        O = ls2(N, K),
        S = Z(U)
          ? dy([
              T,
              'optionalAccess',
              (f) => f.startChild,
              'call',
              (f) =>
                f({
                  op: 'http.client',
                  origin: 'auto.http.node.http',
                  description: `${O['http.method']} ${O.url}`,
                  data: O,
                }),
            ])
          : void 0;
      if (q && Y(U)) {
        let {
            traceId: f,
            spanId: a,
            sampled: g,
            dsc: Y1,
          } = { ...R.getPropagationContext(), ...M.getPropagationContext() },
          r = S ? hG.spanToTraceHeader(S) : TW.generateSentryTraceHeader(f, a, g),
          w1 = TW.dynamicSamplingContextToSentryBaggageHeader(
            Y1 ||
              (S
                ? hG.getDynamicSamplingContextFromSpan(S)
                : hG.getDynamicSamplingContextFromClient(f, q, M))
          );
        cs2(K, N, r, w1);
      } else
        rE1.DEBUG_BUILD &&
          TW.logger.log(
            `[Tracing] Not adding sentry-trace header to outgoing request (${N}) due to mismatching tracePropagationTargets option.`
          );
      return J.apply(A, V)
        .once('response', function (f) {
          let a = this;
          if (B) W('response', O, a, f);
          if (S) {
            if (f.statusCode) hG.setHttpStatus(S, f.statusCode);
            (S.updateName(Cp.cleanSpanDescription(hG.spanToJSON(S).description || '', K, a) || ''),
              S.end());
          }
        })
        .once('error', function () {
          let f = this;
          if (B) W('error', O, f);
          if (S)
            (hG.setHttpStatus(S, 500),
              S.updateName(Cp.cleanSpanDescription(hG.spanToJSON(S).description || '', K, f) || ''),
              S.end());
        });
    };
  };
}
function cs2(A, B, Q, I) {
  if ((A.headers || {})['sentry-trace']) return;
  (rE1.DEBUG_BUILD &&
    TW.logger.log(`[Tracing] Adding sentry-trace header ${Q} to outgoing request to "${B}": `),
    (A.headers = {
      ...A.headers,
      'sentry-trace': Q,
      ...(I && I.length > 0 && { baggage: is2(A, I) }),
    }));
}
function ls2(A, B) {
  let Q = B.method || 'GET',
    I = { url: A, 'http.method': Q };
  if (B.hash) I['http.fragment'] = B.hash.substring(1);
  if (B.search) I['http.query'] = B.search.substring(1);
  return I;
}
function is2(A, B) {
  if (!A.headers || !A.headers.baggage) return B;
  else if (!B) return A.headers.baggage;
  else if (Array.isArray(A.headers.baggage)) return [...A.headers.baggage, B];
  return [A.headers.baggage, B];
}
function _8A(A, B) {
  return A === void 0 ? !1 : A.enableIfHasTracingEnabled ? hG.hasTracingEnabled(B) : !0;
}
function j8A(A, B, Q) {
  return A
    ? dy([B, 'optionalAccess', (G) => G.shouldCreateSpanForRequest]) ||
        dy([Q, 'optionalAccess', (G) => G.shouldCreateSpanForRequest])
    : () => !1;
}
y8A.Http = FT;
y8A._getShouldCreateSpanForRequest = j8A;
y8A._shouldCreateSpans = _8A;
y8A.httpIntegration = ps2;
