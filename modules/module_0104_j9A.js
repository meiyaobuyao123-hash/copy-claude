// Module: j9A
// Params: _9A

Object.defineProperty(_9A, '__esModule', { value: !0 });
var O9A = tA(),
  T9A = qE(),
  ch2 = iZ(),
  KE1 = {
    include: {
      cookies: !0,
      data: !0,
      headers: !0,
      ip: !1,
      query_string: !0,
      url: !0,
      user: { id: !0, username: !0, email: !0 },
    },
    transactionNamingScheme: 'methodPath',
  },
  P9A = 'RequestData',
  lh2 = (A = {}) => {
    let B = O9A.addRequestDataToEvent,
      Q = {
        ...KE1,
        ...A,
        include: {
          method: !0,
          ...KE1.include,
          ...A.include,
          user:
            A.include && typeof A.include.user === 'boolean'
              ? A.include.user
              : { ...KE1.include.user, ...(A.include || {}).user },
        },
      };
    return {
      name: P9A,
      setupOnce() {},
      processEvent(I, G, D) {
        let { transactionNamingScheme: Z } = Q,
          { sdkProcessingMetadata: Y = {} } = I,
          W = Y.request;
        if (!W) return I;
        let F =
            Y.requestDataOptionsFromExpressHandler || Y.requestDataOptionsFromGCPWrapper || nh2(Q),
          J = B(I, W, F);
        if (I.type === 'transaction' || Z === 'handler') return J;
        let X = W._sentryTransaction;
        if (X) {
          let V = ch2.spanToJSON(X).description || '',
            K = ah2(D) === 'sentry.javascript.nextjs' ? V.startsWith('/api') : Z !== 'path',
            [U] = O9A.extractPathForTransaction(W, { path: !0, method: K, customRoute: V });
          J.transaction = U;
        }
        return J;
      },
    };
  },
  S9A = T9A.defineIntegration(lh2),
  ih2 = T9A.convertIntegrationFnToClass(P9A, S9A);
function nh2(A) {
  let {
      transactionNamingScheme: B,
      include: { ip: Q, user: I, ...G },
    } = A,
    D = [];
  for (let [Y, W] of Object.entries(G)) if (W) D.push(Y);
  let Z;
  if (I === void 0) Z = !0;
  else if (typeof I === 'boolean') Z = I;
  else {
    let Y = [];
    for (let [W, F] of Object.entries(I)) if (F) Y.push(W);
    Z = Y;
  }
  return { include: { ip: Q, user: Z, request: D.length !== 0 ? D : void 0, transaction: B } };
}
function ah2(A) {
  try {
    return A.getOptions()._metadata.sdk.name;
  } catch (B) {
    return;
  }
}
_9A.RequestData = ih2;
_9A.requestDataIntegration = S9A;
