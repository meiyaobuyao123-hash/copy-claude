// Module: KE0
// Params: FF8,VE0

var { defineProperty: SD1, getOwnPropertyDescriptor: tc4, getOwnPropertyNames: ec4 } = Object,
  Al4 = Object.prototype.hasOwnProperty,
  va = (A, B) => SD1(A, 'name', { value: B, configurable: !0 }),
  Bl4 = (A, B) => {
    for (var Q in B) SD1(A, Q, { get: B[Q], enumerable: !0 });
  },
  Ql4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of ec4(B))
        if (!Al4.call(A, G) && G !== Q)
          SD1(A, G, { get: () => B[G], enumerable: !(I = tc4(B, G)) || I.enumerable });
    }
    return A;
  },
  Il4 = (A) => Ql4(SD1({}, '__esModule', { value: !0 }), A),
  ZE0 = {};
Bl4(ZE0, {
  eventStreamHandlingMiddleware: () => FE0,
  eventStreamHandlingMiddlewareOptions: () => JE0,
  eventStreamHeaderMiddleware: () => CE0,
  eventStreamHeaderMiddlewareOptions: () => XE0,
  getEventStreamPlugin: () => Gl4,
  resolveEventStreamConfig: () => YE0,
});
VE0.exports = Il4(ZE0);
function YE0(A) {
  let { signer: B, signer: Q } = A,
    I = Object.assign(A, { eventSigner: B, messageSigner: Q }),
    G = I.eventStreamPayloadHandlerProvider(I);
  return Object.assign(I, { eventStreamPayloadHandler: G });
}
va(YE0, 'resolveEventStreamConfig');
var WE0 = DE0(),
  FE0 = va(
    (A) => (B, Q) => async (I) => {
      let { request: G } = I;
      if (!WE0.HttpRequest.isInstance(G)) return B(I);
      return A.eventStreamPayloadHandler.handle(B, I, Q);
    },
    'eventStreamHandlingMiddleware'
  ),
  JE0 = {
    tags: ['EVENT_STREAM', 'SIGNATURE', 'HANDLE'],
    name: 'eventStreamHandlingMiddleware',
    relation: 'after',
    toMiddleware: 'awsAuthMiddleware',
    override: !0,
  },
  CE0 = va(
    (A) => async (B) => {
      let { request: Q } = B;
      if (!WE0.HttpRequest.isInstance(Q)) return A(B);
      return (
        (Q.headers = {
          ...Q.headers,
          'content-type': 'application/vnd.amazon.eventstream',
          'x-amz-content-sha256': 'STREAMING-AWS4-HMAC-SHA256-EVENTS',
        }),
        A({ ...B, request: Q })
      );
    },
    'eventStreamHeaderMiddleware'
  ),
  XE0 = {
    step: 'build',
    tags: ['EVENT_STREAM', 'HEADER', 'CONTENT_TYPE', 'CONTENT_SHA256'],
    name: 'eventStreamHeaderMiddleware',
    override: !0,
  },
  Gl4 = va(
    (A) => ({
      applyToStack: va((B) => {
        (B.addRelativeTo(FE0(A), JE0), B.add(CE0, XE0));
      }, 'applyToStack'),
    }),
    'getEventStreamPlugin'
  );
