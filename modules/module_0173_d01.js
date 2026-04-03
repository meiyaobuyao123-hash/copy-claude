// Module: d01
// Params: CBA

var { _optionalChain: m01 } = tA();
Object.defineProperty(CBA, '__esModule', { value: !0 });
var bQ = I4(),
  JT = tA(),
  or2 = ZT();
CBA.ChannelName = void 0;
(function (A) {
  A.RequestCreate = 'undici:request:create';
  let Q = 'undici:request:headers';
  A.RequestEnd = Q;
  let I = 'undici:request:error';
  A.RequestError = I;
})(CBA.ChannelName || (CBA.ChannelName = {}));
var tr2 = (A) => {
    return new oZ(A);
  },
  er2 = bQ.defineIntegration(tr2);
class oZ {
  static __initStatic() {
    this.id = 'Undici';
  }
  __init() {
    this.name = oZ.id;
  }
  __init2() {
    this._createSpanUrlMap = new JT.LRUMap(100);
  }
  __init3() {
    this._headersUrlMap = new JT.LRUMap(100);
  }
  constructor(A = {}) {
    (oZ.prototype.__init.call(this),
      oZ.prototype.__init2.call(this),
      oZ.prototype.__init3.call(this),
      oZ.prototype.__init4.call(this),
      oZ.prototype.__init5.call(this),
      oZ.prototype.__init6.call(this),
      (this._options = {
        breadcrumbs: A.breadcrumbs === void 0 ? !0 : A.breadcrumbs,
        tracing: A.tracing,
        shouldCreateSpanForRequest: A.shouldCreateSpanForRequest,
      }));
  }
  setupOnce(A) {
    if (or2.NODE_VERSION.major < 16) return;
    let B;
    try {
      B = D1('diagnostics_channel');
    } catch (Q) {}
    if (!B || !B.subscribe) return;
    (B.subscribe(CBA.ChannelName.RequestCreate, this._onRequestCreate),
      B.subscribe(CBA.ChannelName.RequestEnd, this._onRequestEnd),
      B.subscribe(CBA.ChannelName.RequestError, this._onRequestError));
  }
  _shouldCreateSpan(A) {
    if (
      this._options.tracing === !1 ||
      (this._options.tracing === void 0 && !bQ.hasTracingEnabled())
    )
      return !1;
    if (this._options.shouldCreateSpanForRequest === void 0) return !0;
    let B = this._createSpanUrlMap.get(A);
    if (B !== void 0) return B;
    let Q = this._options.shouldCreateSpanForRequest(A);
    return (this._createSpanUrlMap.set(A, Q), Q);
  }
  __init4() {
    this._onRequestCreate = (A) => {
      if (
        !m01([
          bQ.getClient,
          'call',
          (J) => J(),
          'optionalAccess',
          (J) => J.getIntegration,
          'call',
          (J) => J(oZ),
        ])
      )
        return;
      let { request: B } = A,
        Q = B.origin ? B.origin.toString() + B.path : B.path,
        I = bQ.getClient();
      if (!I) return;
      if (bQ.isSentryRequestUrl(Q, I) || B.__sentry_span__ !== void 0) return;
      let G = I.getOptions(),
        D = bQ.getCurrentScope(),
        Z = bQ.getIsolationScope(),
        Y = bQ.getActiveSpan(),
        W = this._shouldCreateSpan(Q) ? Bo2(Y, B, Q) : void 0;
      if (W) B.__sentry_span__ = W;
      if (
        ((J) => {
          if (G.tracePropagationTargets === void 0) return !0;
          let C = this._headersUrlMap.get(J);
          if (C !== void 0) return C;
          let X = JT.stringMatchesSomePattern(J, G.tracePropagationTargets);
          return (this._headersUrlMap.set(J, X), X);
        })(Q)
      ) {
        let {
            traceId: J,
            spanId: C,
            sampled: X,
            dsc: V,
          } = { ...Z.getPropagationContext(), ...D.getPropagationContext() },
          K = W ? bQ.spanToTraceHeader(W) : JT.generateSentryTraceHeader(J, C, X),
          U = JT.dynamicSamplingContextToSentryBaggageHeader(
            V ||
              (W
                ? bQ.getDynamicSamplingContextFromSpan(W)
                : bQ.getDynamicSamplingContextFromClient(J, I, D))
          );
        Ao2(B, K, U);
      }
    };
  }
  __init5() {
    this._onRequestEnd = (A) => {
      if (
        !m01([
          bQ.getClient,
          'call',
          (D) => D(),
          'optionalAccess',
          (D) => D.getIntegration,
          'call',
          (D) => D(oZ),
        ])
      )
        return;
      let { request: B, response: Q } = A,
        I = B.origin ? B.origin.toString() + B.path : B.path;
      if (bQ.isSentryRequestUrl(I, bQ.getClient())) return;
      let G = B.__sentry_span__;
      if (G) (bQ.setHttpStatus(G, Q.statusCode), G.end());
      if (this._options.breadcrumbs)
        bQ.addBreadcrumb(
          {
            category: 'http',
            data: { method: B.method, status_code: Q.statusCode, url: I },
            type: 'http',
          },
          { event: 'response', request: B, response: Q }
        );
    };
  }
  __init6() {
    this._onRequestError = (A) => {
      if (
        !m01([
          bQ.getClient,
          'call',
          (G) => G(),
          'optionalAccess',
          (G) => G.getIntegration,
          'call',
          (G) => G(oZ),
        ])
      )
        return;
      let { request: B } = A,
        Q = B.origin ? B.origin.toString() + B.path : B.path;
      if (bQ.isSentryRequestUrl(Q, bQ.getClient())) return;
      let I = B.__sentry_span__;
      if (I) (I.setStatus('internal_error'), I.end());
      if (this._options.breadcrumbs)
        bQ.addBreadcrumb(
          { category: 'http', data: { method: B.method, url: Q }, level: 'error', type: 'http' },
          { event: 'error', request: B }
        );
    };
  }
}
oZ.__initStatic();
function Ao2(A, B, Q) {
  let I;
  if (Array.isArray(A.headers)) I = A.headers.some((G) => G === 'sentry-trace');
  else
    I = A.headers
      .split(
        `\r
`
      )
      .some((D) => D.startsWith('sentry-trace:'));
  if (I) return;
  if ((A.addHeader('sentry-trace', B), Q)) A.addHeader('baggage', Q);
}
function Bo2(A, B, Q) {
  let I = JT.parseUrl(Q),
    G = B.method || 'GET',
    D = { 'http.method': G };
  if (I.search) D['http.query'] = I.search;
  if (I.hash) D['http.fragment'] = I.hash;
  return m01([
    A,
    'optionalAccess',
    (Z) => Z.startChild,
    'call',
    (Z) =>
      Z({
        op: 'http.client',
        origin: 'auto.http.node.undici',
        description: `${G} ${JT.getSanitizedUrlString(I)}`,
        data: D,
      }),
  ]);
}
CBA.Undici = oZ;
CBA.nativeNodeFetchintegration = er2;
