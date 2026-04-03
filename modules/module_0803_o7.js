// Module: o7
// Params: Om5,FbA

var { defineProperty: h51, getOwnPropertyDescriptor: bn9, getOwnPropertyNames: gn9 } = Object,
  hn9 = Object.prototype.hasOwnProperty,
  yB = (A, B) => h51(A, 'name', { value: B, configurable: !0 }),
  mn9 = (A, B) => {
    for (var Q in B) h51(A, Q, { get: B[Q], enumerable: !0 });
  },
  dn9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of gn9(B))
        if (!hn9.call(A, G) && G !== Q)
          h51(A, G, { get: () => B[G], enumerable: !(I = bn9(B, G)) || I.enumerable });
    }
    return A;
  },
  un9 = (A) => dn9(h51({}, '__esModule', { value: !0 }), A),
  ovA = {};
mn9(ovA, {
  DefaultIdentityProviderConfig: () => Ba9,
  EXPIRATION_MS: () => YbA,
  HttpApiKeyAuthSigner: () => Qa9,
  HttpBearerAuthSigner: () => Ia9,
  NoAuthSigner: () => Ga9,
  createIsIdentityExpiredFunction: () => ZbA,
  createPaginator: () => GbA,
  doesIdentityRequireRefresh: () => WbA,
  getHttpAuthSchemeEndpointRuleSetPlugin: () => ln9,
  getHttpAuthSchemePlugin: () => nn9,
  getHttpSigningPlugin: () => rn9,
  getSmithyContext: () => pn9,
  httpAuthSchemeEndpointRuleSetMiddlewareOptions: () => AbA,
  httpAuthSchemeMiddleware: () => TO1,
  httpAuthSchemeMiddlewareOptions: () => BbA,
  httpSigningMiddleware: () => QbA,
  httpSigningMiddlewareOptions: () => IbA,
  isIdentityExpired: () => Da9,
  memoizeIdentityProvider: () => Za9,
  normalizeProvider: () => on9,
  requestBuilder: () => Aa9.requestBuilder,
  setFeature: () => DbA,
});
FbA.exports = un9(ovA);
var g51 = BO1(),
  pn9 = yB(
    (A) => A[g51.SMITHY_CONTEXT_KEY] || (A[g51.SMITHY_CONTEXT_KEY] = {}),
    'getSmithyContext'
  ),
  tvA = qJ(),
  cn9 = yB((A, B) => {
    if (!B || B.length === 0) return A;
    let Q = [];
    for (let I of B) for (let G of A) if (G.schemeId.split('#')[1] === I) Q.push(G);
    for (let I of A) if (!Q.find(({ schemeId: G }) => G === I.schemeId)) Q.push(I);
    return Q;
  }, 'resolveAuthOptions');
function evA(A) {
  let B = new Map();
  for (let Q of A) B.set(Q.schemeId, Q);
  return B;
}
yB(evA, 'convertHttpAuthSchemesToMap');
var TO1 = yB(
    (A, B) => (Q, I) => async (G) => {
      let D = A.httpAuthSchemeProvider(await B.httpAuthSchemeParametersProvider(A, I, G.input)),
        Z = A.authSchemePreference ? await A.authSchemePreference() : [],
        Y = cn9(D, Z),
        W = evA(A.httpAuthSchemes),
        F = tvA.getSmithyContext(I),
        J = [];
      for (let C of Y) {
        let X = W.get(C.schemeId);
        if (!X) {
          J.push(`HttpAuthScheme \`${C.schemeId}\` was not enabled for this service.`);
          continue;
        }
        let V = X.identityProvider(await B.identityProviderConfigProvider(A));
        if (!V) {
          J.push(`HttpAuthScheme \`${C.schemeId}\` did not have an IdentityProvider configured.`);
          continue;
        }
        let { identityProperties: K = {}, signingProperties: U = {} } =
          C.propertiesExtractor?.(A, I) || {};
        ((C.identityProperties = Object.assign(C.identityProperties || {}, K)),
          (C.signingProperties = Object.assign(C.signingProperties || {}, U)),
          (F.selectedHttpAuthScheme = {
            httpAuthOption: C,
            identity: await V(C.identityProperties),
            signer: X.signer,
          }));
        break;
      }
      if (!F.selectedHttpAuthScheme)
        throw new Error(
          J.join(`
`)
        );
      return Q(G);
    },
    'httpAuthSchemeMiddleware'
  ),
  AbA = {
    step: 'serialize',
    tags: ['HTTP_AUTH_SCHEME'],
    name: 'httpAuthSchemeMiddleware',
    override: !0,
    relation: 'before',
    toMiddleware: 'endpointV2Middleware',
  },
  ln9 = yB(
    (A, { httpAuthSchemeParametersProvider: B, identityProviderConfigProvider: Q }) => ({
      applyToStack: (I) => {
        I.addRelativeTo(
          TO1(A, { httpAuthSchemeParametersProvider: B, identityProviderConfigProvider: Q }),
          AbA
        );
      },
    }),
    'getHttpAuthSchemeEndpointRuleSetPlugin'
  ),
  in9 = kH(),
  BbA = {
    step: 'serialize',
    tags: ['HTTP_AUTH_SCHEME'],
    name: 'httpAuthSchemeMiddleware',
    override: !0,
    relation: 'before',
    toMiddleware: in9.serializerMiddlewareOption.name,
  },
  nn9 = yB(
    (A, { httpAuthSchemeParametersProvider: B, identityProviderConfigProvider: Q }) => ({
      applyToStack: (I) => {
        I.addRelativeTo(
          TO1(A, { httpAuthSchemeParametersProvider: B, identityProviderConfigProvider: Q }),
          BbA
        );
      },
    }),
    'getHttpAuthSchemePlugin'
  ),
  PO1 = IO1(),
  an9 = yB(
    (A) => (B) => {
      throw B;
    },
    'defaultErrorHandler'
  ),
  sn9 = yB((A, B) => {}, 'defaultSuccessHandler'),
  QbA = yB(
    (A) => (B, Q) => async (I) => {
      if (!PO1.HttpRequest.isInstance(I.request)) return B(I);
      let D = tvA.getSmithyContext(Q).selectedHttpAuthScheme;
      if (!D) throw new Error('No HttpAuthScheme was selected: unable to sign request');
      let {
          httpAuthOption: { signingProperties: Z = {} },
          identity: Y,
          signer: W,
        } = D,
        F = await B({ ...I, request: await W.sign(I.request, Y, Z) }).catch(
          (W.errorHandler || an9)(Z)
        );
      return ((W.successHandler || sn9)(F.response, Z), F);
    },
    'httpSigningMiddleware'
  ),
  IbA = {
    step: 'finalizeRequest',
    tags: ['HTTP_SIGNING'],
    name: 'httpSigningMiddleware',
    aliases: ['apiKeyMiddleware', 'tokenMiddleware', 'awsAuthMiddleware'],
    override: !0,
    relation: 'after',
    toMiddleware: 'retryMiddleware',
  },
  rn9 = yB(
    (A) => ({
      applyToStack: (B) => {
        B.addRelativeTo(QbA(A), IbA);
      },
    }),
    'getHttpSigningPlugin'
  ),
  on9 = yB((A) => {
    if (typeof A === 'function') return A;
    let B = Promise.resolve(A);
    return () => B;
  }, 'normalizeProvider'),
  tn9 = yB(async (A, B, Q, I = (D) => D, ...G) => {
    let D = new A(Q);
    return ((D = I(D) ?? D), await B.send(D, ...G));
  }, 'makePagedClientRequest');
function GbA(A, B, Q, I, G) {
  return yB(async function* D(Z, Y, ...W) {
    let F = Y,
      J = Z.startingToken ?? F[Q],
      C = !0,
      X;
    while (C) {
      if (((F[Q] = J), G)) F[G] = F[G] ?? Z.pageSize;
      if (Z.client instanceof A) X = await tn9(B, Z.client, Y, Z.withCommand, ...W);
      else throw new Error(`Invalid client, expected instance of ${A.name}`);
      yield X;
      let V = J;
      ((J = en9(X, I)), (C = !!(J && (!Z.stopOnSameToken || J !== V))));
    }
    return;
  }, 'paginateOperation');
}
yB(GbA, 'createPaginator');
var en9 = yB((A, B) => {
    let Q = A,
      I = B.split('.');
    for (let G of I) {
      if (!Q || typeof Q !== 'object') return;
      Q = Q[G];
    }
    return Q;
  }, 'get'),
  Aa9 = bH();
function DbA(A, B, Q) {
  if (!A.__smithy_context) A.__smithy_context = { features: {} };
  else if (!A.__smithy_context.features) A.__smithy_context.features = {};
  A.__smithy_context.features[B] = Q;
}
yB(DbA, 'setFeature');
var Ba9 = class {
    constructor(A) {
      this.authSchemes = new Map();
      for (let [B, Q] of Object.entries(A)) if (Q !== void 0) this.authSchemes.set(B, Q);
    }
    static {
      yB(this, 'DefaultIdentityProviderConfig');
    }
    getIdentityProvider(A) {
      return this.authSchemes.get(A);
    }
  },
  Qa9 = class {
    static {
      yB(this, 'HttpApiKeyAuthSigner');
    }
    async sign(A, B, Q) {
      if (!Q)
        throw new Error(
          'request could not be signed with `apiKey` since the `name` and `in` signer properties are missing'
        );
      if (!Q.name)
        throw new Error(
          'request could not be signed with `apiKey` since the `name` signer property is missing'
        );
      if (!Q.in)
        throw new Error(
          'request could not be signed with `apiKey` since the `in` signer property is missing'
        );
      if (!B.apiKey)
        throw new Error(
          'request could not be signed with `apiKey` since the `apiKey` is not defined'
        );
      let I = PO1.HttpRequest.clone(A);
      if (Q.in === g51.HttpApiKeyAuthLocation.QUERY) I.query[Q.name] = B.apiKey;
      else if (Q.in === g51.HttpApiKeyAuthLocation.HEADER)
        I.headers[Q.name] = Q.scheme ? `${Q.scheme} ${B.apiKey}` : B.apiKey;
      else
        throw new Error(
          'request can only be signed with `apiKey` locations `query` or `header`, but found: `' +
            Q.in +
            '`'
        );
      return I;
    }
  },
  Ia9 = class {
    static {
      yB(this, 'HttpBearerAuthSigner');
    }
    async sign(A, B, Q) {
      let I = PO1.HttpRequest.clone(A);
      if (!B.token)
        throw new Error(
          'request could not be signed with `token` since the `token` is not defined'
        );
      return ((I.headers.Authorization = `Bearer ${B.token}`), I);
    }
  },
  Ga9 = class {
    static {
      yB(this, 'NoAuthSigner');
    }
    async sign(A, B, Q) {
      return A;
    }
  },
  ZbA = yB(
    (A) => (B) => WbA(B) && B.expiration.getTime() - Date.now() < A,
    'createIsIdentityExpiredFunction'
  ),
  YbA = 300000,
  Da9 = ZbA(YbA),
  WbA = yB((A) => A.expiration !== void 0, 'doesIdentityRequireRefresh'),
  Za9 = yB((A, B, Q) => {
    if (A === void 0) return;
    let I = typeof A !== 'function' ? async () => Promise.resolve(A) : A,
      G,
      D,
      Z,
      Y = !1,
      W = yB(async (F) => {
        if (!D) D = I(F);
        try {
          ((G = await D), (Z = !0), (Y = !1));
        } finally {
          D = void 0;
        }
        return G;
      }, 'coalesceProvider');
    if (B === void 0)
      return async (F) => {
        if (!Z || F?.forceRefresh) G = await W(F);
        return G;
      };
    return async (F) => {
      if (!Z || F?.forceRefresh) G = await W(F);
      if (Y) return G;
      if (!Q(G)) return ((Y = !0), G);
      if (B(G)) return (await W(F), G);
      return G;
    };
  }, 'memoizeIdentityProvider');
