// Module: N01
// Params: G5A

Object.defineProperty(G5A, '__esModule', { value: !0 });
var VX = I4(),
  KX = tA(),
  Pi2 = vE1(),
  Si2 = hy(),
  _i2 = LW(),
  U01 = ['localhost', /^\/(?!\/)/],
  bE1 = {
    traceFetch: !0,
    traceXHR: !0,
    enableHTTPTimings: !0,
    tracingOrigins: U01,
    tracePropagationTargets: U01,
  };
function ji2(A) {
  let {
      traceFetch: B,
      traceXHR: Q,
      tracePropagationTargets: I,
      tracingOrigins: G,
      shouldCreateSpanForRequest: D,
      enableHTTPTimings: Z,
    } = { traceFetch: bE1.traceFetch, traceXHR: bE1.traceXHR, ...A },
    Y = typeof D === 'function' ? D : (J) => !0,
    W = (J) => B5A(J, I || G),
    F = {};
  if (B)
    KX.addFetchInstrumentationHandler((J) => {
      let C = Pi2.instrumentFetchRequest(J, Y, W, F);
      if (C) {
        let X = I5A(J.fetchData.url),
          V = X ? KX.parseUrl(X).host : void 0;
        C.setAttributes({ 'http.url': X, 'server.address': V });
      }
      if (Z && C) e6A(C);
    });
  if (Q)
    KX.addXhrInstrumentationHandler((J) => {
      let C = Q5A(J, Y, W, F);
      if (Z && C) e6A(C);
    });
}
function yi2(A) {
  return (
    A.entryType === 'resource' &&
    'initiatorType' in A &&
    typeof A.nextHopProtocol === 'string' &&
    (A.initiatorType === 'fetch' || A.initiatorType === 'xmlhttprequest')
  );
}
function e6A(A) {
  let { url: B } = VX.spanToJSON(A).data || {};
  if (!B || typeof B !== 'string') return;
  let Q = Si2.addPerformanceInstrumentationHandler('resource', ({ entries: I }) => {
    I.forEach((G) => {
      if (yi2(G) && G.name.endsWith(B))
        (ki2(G).forEach((Z) => A.setAttribute(...Z)), setTimeout(Q));
    });
  });
}
function A5A(A) {
  let B = 'unknown',
    Q = 'unknown',
    I = '';
  for (let G of A) {
    if (G === '/') {
      [B, Q] = A.split('/');
      break;
    }
    if (!isNaN(Number(G))) {
      ((B = I === 'h' ? 'http' : I), (Q = A.split(I)[1]));
      break;
    }
    I += G;
  }
  if (I === A) B = I;
  return { name: B, version: Q };
}
function IH(A = 0) {
  return ((KX.browserPerformanceTimeOrigin || performance.timeOrigin) + A) / 1000;
}
function ki2(A) {
  let { name: B, version: Q } = A5A(A.nextHopProtocol),
    I = [];
  if (
    (I.push(['network.protocol.version', Q], ['network.protocol.name', B]),
    !KX.browserPerformanceTimeOrigin)
  )
    return I;
  return [
    ...I,
    ['http.request.redirect_start', IH(A.redirectStart)],
    ['http.request.fetch_start', IH(A.fetchStart)],
    ['http.request.domain_lookup_start', IH(A.domainLookupStart)],
    ['http.request.domain_lookup_end', IH(A.domainLookupEnd)],
    ['http.request.connect_start', IH(A.connectStart)],
    ['http.request.secure_connection_start', IH(A.secureConnectionStart)],
    ['http.request.connection_end', IH(A.connectEnd)],
    ['http.request.request_start', IH(A.requestStart)],
    ['http.request.response_start', IH(A.responseStart)],
    ['http.request.response_end', IH(A.responseEnd)],
  ];
}
function B5A(A, B) {
  return KX.stringMatchesSomePattern(A, B || U01);
}
function Q5A(A, B, Q, I) {
  let G = A.xhr,
    D = G && G[KX.SENTRY_XHR_DATA_KEY];
  if (!VX.hasTracingEnabled() || !G || G.__sentry_own_request__ || !D) return;
  let Z = B(D.url);
  if (A.endTimestamp && Z) {
    let V = G.__sentry_xhr_span_id__;
    if (!V) return;
    let K = I[V];
    if (K && D.status_code !== void 0) (VX.setHttpStatus(K, D.status_code), K.end(), delete I[V]);
    return;
  }
  let Y = VX.getCurrentScope(),
    W = VX.getIsolationScope(),
    F = I5A(D.url),
    J = F ? KX.parseUrl(F).host : void 0,
    C = Z
      ? VX.startInactiveSpan({
          name: `${D.method} ${D.url}`,
          onlyIfParent: !0,
          attributes: {
            type: 'xhr',
            'http.method': D.method,
            'http.url': F,
            url: D.url,
            'server.address': J,
            [VX.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: 'auto.http.browser',
          },
          op: 'http.client',
        })
      : void 0;
  if (C) ((G.__sentry_xhr_span_id__ = C.spanContext().spanId), (I[G.__sentry_xhr_span_id__] = C));
  let X = VX.getClient();
  if (G.setRequestHeader && Q(D.url) && X) {
    let {
        traceId: V,
        spanId: K,
        sampled: U,
        dsc: N,
      } = { ...W.getPropagationContext(), ...Y.getPropagationContext() },
      q = C ? VX.spanToTraceHeader(C) : KX.generateSentryTraceHeader(V, K, U),
      M = KX.dynamicSamplingContextToSentryBaggageHeader(
        N ||
          (C
            ? VX.getDynamicSamplingContextFromSpan(C)
            : VX.getDynamicSamplingContextFromClient(V, X, Y))
      );
    xi2(G, q, M);
  }
  return C;
}
function xi2(A, B, Q) {
  try {
    if ((A.setRequestHeader('sentry-trace', B), Q)) A.setRequestHeader(KX.BAGGAGE_HEADER_NAME, Q);
  } catch (I) {}
}
function I5A(A) {
  try {
    return new URL(A, _i2.WINDOW.location.origin).href;
  } catch (B) {
    return;
  }
}
G5A.DEFAULT_TRACE_PROPAGATION_TARGETS = U01;
G5A.defaultRequestInstrumentationOptions = bE1;
G5A.extractNetworkProtocol = A5A;
G5A.instrumentOutgoingRequests = ji2;
G5A.shouldAttachHeaders = B5A;
G5A.xhrCallback = Q5A;
