// Module: t2A
// Params: o2A

Object.defineProperty(o2A, '__esModule', { value: !0 });
var aZ = tA(),
  a2A = vQ(),
  r2A = 30;
function Zh2(A, B, Q = aZ.makePromiseBuffer(A.bufferSize || r2A)) {
  let I = {},
    G = (Z) => Q.drain(Z);
  function D(Z) {
    let Y = [];
    if (
      (aZ.forEachEnvelopeItem(Z, (C, X) => {
        let V = aZ.envelopeItemTypeToDataCategory(X);
        if (aZ.isRateLimited(I, V)) {
          let K = s2A(C, X);
          A.recordDroppedEvent('ratelimit_backoff', V, K);
        } else Y.push(C);
      }),
      Y.length === 0)
    )
      return aZ.resolvedSyncPromise();
    let W = aZ.createEnvelope(Z[0], Y),
      F = (C) => {
        aZ.forEachEnvelopeItem(W, (X, V) => {
          let K = s2A(X, V);
          A.recordDroppedEvent(C, aZ.envelopeItemTypeToDataCategory(V), K);
        });
      },
      J = () =>
        B({ body: aZ.serializeEnvelope(W, A.textEncoder) }).then(
          (C) => {
            if (C.statusCode !== void 0 && (C.statusCode < 200 || C.statusCode >= 300))
              a2A.DEBUG_BUILD &&
                aZ.logger.warn(`Sentry responded with status code ${C.statusCode} to sent event.`);
            return ((I = aZ.updateRateLimits(I, C)), C);
          },
          (C) => {
            throw (F('network_error'), C);
          }
        );
    return Q.add(J).then(
      (C) => C,
      (C) => {
        if (C instanceof aZ.SentryError)
          return (
            a2A.DEBUG_BUILD && aZ.logger.error('Skipped sending event because buffer is full.'),
            F('queue_overflow'),
            aZ.resolvedSyncPromise()
          );
        else throw C;
      }
    );
  }
  return ((D.__sentry__baseTransport__ = !0), { send: D, flush: G });
}
function s2A(A, B) {
  if (B !== 'event' && B !== 'transaction') return;
  return Array.isArray(A) ? A[1] : void 0;
}
o2A.DEFAULT_TRANSPORT_BUFFER_SIZE = r2A;
o2A.createTransport = Zh2;
