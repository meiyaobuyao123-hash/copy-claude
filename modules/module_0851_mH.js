// Module: mH
// Params: ld5,guA

var { defineProperty: g81, getOwnPropertyDescriptor: B24, getOwnPropertyNames: Q24 } = Object,
  I24 = Object.prototype.hasOwnProperty,
  mX = (A, B) => g81(A, 'name', { value: B, configurable: !0 }),
  G24 = (A, B) => {
    for (var Q in B) g81(A, Q, { get: B[Q], enumerable: !0 });
  },
  D24 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of Q24(B))
        if (!I24.call(A, G) && G !== Q)
          g81(A, G, { get: () => B[G], enumerable: !(I = B24(B, G)) || I.enumerable });
    }
    return A;
  },
  Z24 = (A) => D24(g81({}, '__esModule', { value: !0 }), A),
  kuA = {};
G24(kuA, {
  endpointMiddleware: () => vuA,
  endpointMiddlewareOptions: () => buA,
  getEndpointFromInstructions: () => xuA,
  getEndpointPlugin: () => w24,
  resolveEndpointConfig: () => U24,
  resolveParams: () => fuA,
  toEndpointV1: () => TT1,
});
guA.exports = Z24(kuA);
var Y24 = mX(async (A) => {
    let B = A?.Bucket || '';
    if (typeof A.Bucket === 'string')
      A.Bucket = B.replace(/#/g, encodeURIComponent('#')).replace(/\?/g, encodeURIComponent('?'));
    if (X24(B)) {
      if (A.ForcePathStyle === !0)
        throw new Error('Path-style addressing cannot be used with ARN buckets');
    } else if (
      !C24(B) ||
      (B.indexOf('.') !== -1 && !String(A.Endpoint).startsWith('http:')) ||
      B.toLowerCase() !== B ||
      B.length < 3
    )
      A.ForcePathStyle = !0;
    if (A.DisableMultiRegionAccessPoints)
      ((A.disableMultiRegionAccessPoints = !0), (A.DisableMRAP = !0));
    return A;
  }, 'resolveParamsForS3'),
  W24 = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/,
  F24 = /(\d+\.){3}\d+/,
  J24 = /\.\./,
  C24 = mX((A) => W24.test(A) && !F24.test(A) && !J24.test(A), 'isDnsCompatibleBucketName'),
  X24 = mX((A) => {
    let [B, Q, I, , , G] = A.split(':'),
      D = B === 'arn' && A.split(':').length >= 6,
      Z = Boolean(D && Q && I && G);
    if (D && !Z) throw new Error(`Invalid ARN: ${A} was an invalid ARN.`);
    return Z;
  }, 'isArnBucketName'),
  V24 = mX((A, B, Q) => {
    let I = mX(async () => {
      let G = Q[A] ?? Q[B];
      if (typeof G === 'function') return G();
      return G;
    }, 'configProvider');
    if (A === 'credentialScope' || B === 'CredentialScope')
      return async () => {
        let G = typeof Q.credentials === 'function' ? await Q.credentials() : Q.credentials;
        return G?.credentialScope ?? G?.CredentialScope;
      };
    if (A === 'accountId' || B === 'AccountId')
      return async () => {
        let G = typeof Q.credentials === 'function' ? await Q.credentials() : Q.credentials;
        return G?.accountId ?? G?.AccountId;
      };
    if (A === 'endpoint' || B === 'endpoint')
      return async () => {
        let G = await I();
        if (G && typeof G === 'object') {
          if ('url' in G) return G.url.href;
          if ('hostname' in G) {
            let { protocol: D, hostname: Z, port: Y, path: W } = G;
            return `${D}//${Z}${Y ? ':' + Y : ''}${W}`;
          }
        }
        return G;
      };
    return I;
  }, 'createConfigValueProvider'),
  K24 = OT1(),
  yuA = WU(),
  TT1 = mX((A) => {
    if (typeof A === 'object') {
      if ('url' in A) return yuA.parseUrl(A.url);
      return A;
    }
    return yuA.parseUrl(A);
  }, 'toEndpointV1'),
  xuA = mX(async (A, B, Q, I) => {
    if (!Q.endpoint) {
      let Z;
      if (Q.serviceConfiguredEndpoint) Z = await Q.serviceConfiguredEndpoint();
      else Z = await K24.getEndpointFromConfig(Q.serviceId);
      if (Z) Q.endpoint = () => Promise.resolve(TT1(Z));
    }
    let G = await fuA(A, B, Q);
    if (typeof Q.endpointProvider !== 'function')
      throw new Error('config.endpointProvider is not set.');
    return Q.endpointProvider(G, I);
  }, 'getEndpointFromInstructions'),
  fuA = mX(async (A, B, Q) => {
    let I = {},
      G = B?.getEndpointParameterInstructions?.() || {};
    for (let [D, Z] of Object.entries(G))
      switch (Z.type) {
        case 'staticContextParams':
          I[D] = Z.value;
          break;
        case 'contextParams':
          I[D] = A[Z.name];
          break;
        case 'clientContextParams':
        case 'builtInParams':
          I[D] = await V24(Z.name, D, Q)();
          break;
        case 'operationContextParams':
          I[D] = Z.get(A);
          break;
        default:
          throw new Error('Unrecognized endpoint parameter instruction: ' + JSON.stringify(Z));
      }
    if (Object.keys(G).length === 0) Object.assign(I, Q);
    if (String(Q.serviceId).toLowerCase() === 's3') await Y24(I);
    return I;
  }, 'resolveParams'),
  H24 = o7(),
  b81 = qJ(),
  vuA = mX(({ config: A, instructions: B }) => {
    return (Q, I) => async (G) => {
      if (A.endpoint) H24.setFeature(I, 'ENDPOINT_OVERRIDE', 'N');
      let D = await xuA(
        G.input,
        {
          getEndpointParameterInstructions() {
            return B;
          },
        },
        { ...A },
        I
      );
      ((I.endpointV2 = D), (I.authSchemes = D.properties?.authSchemes));
      let Z = I.authSchemes?.[0];
      if (Z) {
        ((I.signing_region = Z.signingRegion), (I.signing_service = Z.signingName));
        let W = b81.getSmithyContext(I)?.selectedHttpAuthScheme?.httpAuthOption;
        if (W)
          W.signingProperties = Object.assign(
            W.signingProperties || {},
            {
              signing_region: Z.signingRegion,
              signingRegion: Z.signingRegion,
              signing_service: Z.signingName,
              signingName: Z.signingName,
              signingRegionSet: Z.signingRegionSet,
            },
            Z.properties
          );
      }
      return Q({ ...G });
    };
  }, 'endpointMiddleware'),
  z24 = kH(),
  buA = {
    step: 'serialize',
    tags: ['ENDPOINT_PARAMETERS', 'ENDPOINT_V2', 'ENDPOINT'],
    name: 'endpointV2Middleware',
    override: !0,
    relation: 'before',
    toMiddleware: z24.serializerMiddlewareOption.name,
  },
  w24 = mX(
    (A, B) => ({
      applyToStack: (Q) => {
        Q.addRelativeTo(vuA({ config: A, instructions: B }), buA);
      },
    }),
    'getEndpointPlugin'
  ),
  E24 = OT1(),
  U24 = mX((A) => {
    let B = A.tls ?? !0,
      { endpoint: Q, useDualstackEndpoint: I, useFipsEndpoint: G } = A,
      D = Q != null ? async () => TT1(await b81.normalizeProvider(Q)()) : void 0,
      Y = Object.assign(A, {
        endpoint: D,
        tls: B,
        isCustomEndpoint: !!Q,
        useDualstackEndpoint: b81.normalizeProvider(I ?? !1),
        useFipsEndpoint: b81.normalizeProvider(G ?? !1),
      }),
      W = void 0;
    return (
      (Y.serviceConfiguredEndpoint = async () => {
        if (A.serviceId && !W) W = E24.getEndpointFromConfig(A.serviceId);
        return W;
      }),
      Y
    );
  }, 'resolveEndpointConfig');
