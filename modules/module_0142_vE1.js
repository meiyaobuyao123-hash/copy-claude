// Module: vE1
// Params: t6A

Object.defineProperty(t6A, '__esModule', { value: !0 });
var QH = I4(),
  GT = tA();
function Mi2(A, B, Q, I, G = 'auto.http.browser') {
  if (!QH.hasTracingEnabled() || !A.fetchData) return;
  let D = B(A.fetchData.url);
  if (A.endTimestamp && D) {
    let V = A.fetchData.__span;
    if (!V) return;
    let K = I[V];
    if (K) (Ri2(K, A), delete I[V]);
    return;
  }
  let Z = QH.getCurrentScope(),
    Y = QH.getClient(),
    { method: W, url: F } = A.fetchData,
    J = Li2(F),
    C = J ? GT.parseUrl(J).host : void 0,
    X = D
      ? QH.startInactiveSpan({
          name: `${W} ${F}`,
          onlyIfParent: !0,
          attributes: {
            url: F,
            type: 'fetch',
            'http.method': W,
            'http.url': J,
            'server.address': C,
            [QH.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: G,
          },
          op: 'http.client',
        })
      : void 0;
  if (X) ((A.fetchData.__span = X.spanContext().spanId), (I[X.spanContext().spanId] = X));
  if (Q(A.fetchData.url) && Y) {
    let V = A.args[0];
    A.args[1] = A.args[1] || {};
    let K = A.args[1];
    K.headers = o6A(V, Y, Z, K, X);
  }
  return X;
}
function o6A(A, B, Q, I, G) {
  let D = G || Q.getSpan(),
    Z = QH.getIsolationScope(),
    {
      traceId: Y,
      spanId: W,
      sampled: F,
      dsc: J,
    } = { ...Z.getPropagationContext(), ...Q.getPropagationContext() },
    C = D ? QH.spanToTraceHeader(D) : GT.generateSentryTraceHeader(Y, W, F),
    X = GT.dynamicSamplingContextToSentryBaggageHeader(
      J ||
        (D
          ? QH.getDynamicSamplingContextFromSpan(D)
          : QH.getDynamicSamplingContextFromClient(Y, B, Q))
    ),
    V =
      I.headers ||
      (typeof Request !== 'undefined' && GT.isInstanceOf(A, Request) ? A.headers : void 0);
  if (!V) return { 'sentry-trace': C, baggage: X };
  else if (typeof Headers !== 'undefined' && GT.isInstanceOf(V, Headers)) {
    let K = new Headers(V);
    if ((K.append('sentry-trace', C), X)) K.append(GT.BAGGAGE_HEADER_NAME, X);
    return K;
  } else if (Array.isArray(V)) {
    let K = [...V, ['sentry-trace', C]];
    if (X) K.push([GT.BAGGAGE_HEADER_NAME, X]);
    return K;
  } else {
    let K = 'baggage' in V ? V.baggage : void 0,
      U = [];
    if (Array.isArray(K)) U.push(...K);
    else if (K) U.push(K);
    if (X) U.push(X);
    return { ...V, 'sentry-trace': C, baggage: U.length > 0 ? U.join(',') : void 0 };
  }
}
function Li2(A) {
  try {
    return new URL(A).href;
  } catch (B) {
    return;
  }
}
function Ri2(A, B) {
  if (B.response) {
    QH.setHttpStatus(A, B.response.status);
    let Q = B.response && B.response.headers && B.response.headers.get('content-length');
    if (Q) {
      let I = parseInt(Q);
      if (I > 0) A.setAttribute('http.response_content_length', I);
    }
  } else if (B.error) A.setStatus('internal_error');
  A.end();
}
t6A.addTracingHeadersToFetchRequest = o6A;
t6A.instrumentFetchRequest = Mi2;
