// Module: mhA
// Params: Bd5,hhA

var { defineProperty: X81, getOwnPropertyDescriptor: ar9, getOwnPropertyNames: sr9 } = Object,
  rr9 = Object.prototype.hasOwnProperty,
  oI = (A, B) => X81(A, 'name', { value: B, configurable: !0 }),
  or9 = (A, B) => {
    for (var Q in B) X81(A, Q, { get: B[Q], enumerable: !0 });
  },
  tr9 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of sr9(B))
        if (!rr9.call(A, G) && G !== Q)
          X81(A, G, { get: () => B[G], enumerable: !(I = ar9(B, G)) || I.enumerable });
    }
    return A;
  },
  er9 = (A) => tr9(X81({}, '__esModule', { value: !0 }), A),
  fhA = {};
or9(fhA, {
  AWSSDKSigV4Signer: () => Io9,
  AwsSdkSigV4ASigner: () => Do9,
  AwsSdkSigV4Signer: () => rO1,
  NODE_SIGV4A_CONFIG_OPTIONS: () => Wo9,
  resolveAWSSDKSigV4Config: () => Jo9,
  resolveAwsSdkSigV4AConfig: () => Yo9,
  resolveAwsSdkSigV4Config: () => vhA,
  validateSigningProperties: () => sO1,
});
hhA.exports = er9(fhA);
var Ao9 = wl(),
  Bo9 = wl(),
  jhA = oI(
    (A) => (Bo9.HttpResponse.isInstance(A) ? (A.headers?.date ?? A.headers?.Date) : void 0),
    'getDateHeader'
  ),
  aO1 = oI((A) => new Date(Date.now() + A), 'getSkewCorrectedDate'),
  Qo9 = oI((A, B) => Math.abs(aO1(B).getTime() - A) >= 300000, 'isClockSkewed'),
  yhA = oI((A, B) => {
    let Q = Date.parse(A);
    if (Qo9(Q, B)) return Q - Date.now();
    return B;
  }, 'getUpdatedSystemClockOffset'),
  El = oI((A, B) => {
    if (!B) throw new Error(`Property \`${A}\` is not resolved for AWS SDK SigV4Auth`);
    return B;
  }, 'throwSigningPropertyError'),
  sO1 = oI(async (A) => {
    let B = El('context', A.context),
      Q = El('config', A.config),
      I = B.endpointV2?.properties?.authSchemes?.[0],
      D = await El('signer', Q.signer)(I),
      Z = A?.signingRegion,
      Y = A?.signingRegionSet,
      W = A?.signingName;
    return { config: Q, signer: D, signingRegion: Z, signingRegionSet: Y, signingName: W };
  }, 'validateSigningProperties'),
  rO1 = class {
    static {
      oI(this, 'AwsSdkSigV4Signer');
    }
    async sign(A, B, Q) {
      if (!Ao9.HttpRequest.isInstance(A))
        throw new Error('The request is not an instance of `HttpRequest` and cannot be signed');
      let I = await sO1(Q),
        { config: G, signer: D } = I,
        { signingRegion: Z, signingName: Y } = I,
        W = Q.context;
      if (W?.authSchemes?.length ?? 0 > 1) {
        let [J, C] = W.authSchemes;
        if (J?.name === 'sigv4a' && C?.name === 'sigv4')
          ((Z = C?.signingRegion ?? Z), (Y = C?.signingName ?? Y));
      }
      return await D.sign(A, {
        signingDate: aO1(G.systemClockOffset),
        signingRegion: Z,
        signingService: Y,
      });
    }
    errorHandler(A) {
      return (B) => {
        let Q = B.ServerTime ?? jhA(B.$response);
        if (Q) {
          let I = El('config', A.config),
            G = I.systemClockOffset;
          if (
            ((I.systemClockOffset = yhA(Q, I.systemClockOffset)),
            I.systemClockOffset !== G && B.$metadata)
          )
            B.$metadata.clockSkewCorrected = !0;
        }
        throw B;
      };
    }
    successHandler(A, B) {
      let Q = jhA(A);
      if (Q) {
        let I = El('config', B.config);
        I.systemClockOffset = yhA(Q, I.systemClockOffset);
      }
    }
  },
  Io9 = rO1,
  Go9 = wl(),
  Do9 = class extends rO1 {
    static {
      oI(this, 'AwsSdkSigV4ASigner');
    }
    async sign(A, B, Q) {
      if (!Go9.HttpRequest.isInstance(A))
        throw new Error('The request is not an instance of `HttpRequest` and cannot be signed');
      let {
          config: I,
          signer: G,
          signingRegion: D,
          signingRegionSet: Z,
          signingName: Y,
        } = await sO1(Q),
        F = ((await I.sigv4aSigningRegionSet?.()) ?? Z ?? [D]).join(',');
      return await G.sign(A, {
        signingDate: aO1(I.systemClockOffset),
        signingRegion: F,
        signingService: Y,
      });
    }
  },
  Zo9 = o7(),
  khA = t7(),
  Yo9 = oI((A) => {
    return ((A.sigv4aSigningRegionSet = Zo9.normalizeProvider(A.sigv4aSigningRegionSet)), A);
  }, 'resolveAwsSdkSigV4AConfig'),
  Wo9 = {
    environmentVariableSelector(A) {
      if (A.AWS_SIGV4A_SIGNING_REGION_SET)
        return A.AWS_SIGV4A_SIGNING_REGION_SET.split(',').map((B) => B.trim());
      throw new khA.ProviderError('AWS_SIGV4A_SIGNING_REGION_SET not set in env.', {
        tryNextLink: !0,
      });
    },
    configFileSelector(A) {
      if (A.sigv4a_signing_region_set)
        return (A.sigv4a_signing_region_set ?? '').split(',').map((B) => B.trim());
      throw new khA.ProviderError('sigv4a_signing_region_set not set in profile.', {
        tryNextLink: !0,
      });
    },
    default: void 0,
  },
  Fo9 = bX(),
  XP = o7(),
  xhA = _hA(),
  vhA = oI((A) => {
    let B = A.credentials,
      Q = !!A.credentials,
      I = void 0;
    (Object.defineProperty(A, 'credentials', {
      set(F) {
        if (F && F !== B && F !== I) Q = !0;
        B = F;
        let J = bhA(A, { credentials: B, credentialDefaultProvider: A.credentialDefaultProvider }),
          C = ghA(A, J);
        if (Q && !C.attributed)
          ((I = oI(
            async (X) => C(X).then((V) => Fo9.setCredentialFeature(V, 'CREDENTIALS_CODE', 'e')),
            'resolvedCredentials'
          )),
            (I.memoized = C.memoized),
            (I.configBound = C.configBound),
            (I.attributed = !0));
        else I = C;
      },
      get() {
        return I;
      },
      enumerable: !0,
      configurable: !0,
    }),
      (A.credentials = B));
    let {
        signingEscapePath: G = !0,
        systemClockOffset: D = A.systemClockOffset || 0,
        sha256: Z,
      } = A,
      Y;
    if (A.signer) Y = XP.normalizeProvider(A.signer);
    else if (A.regionInfoProvider)
      Y = oI(
        () =>
          XP.normalizeProvider(A.region)()
            .then(async (F) => [
              (await A.regionInfoProvider(F, {
                useFipsEndpoint: await A.useFipsEndpoint(),
                useDualstackEndpoint: await A.useDualstackEndpoint(),
              })) || {},
              F,
            ])
            .then(([F, J]) => {
              let { signingRegion: C, signingService: X } = F;
              ((A.signingRegion = A.signingRegion || C || J),
                (A.signingName = A.signingName || X || A.serviceId));
              let V = {
                ...A,
                credentials: A.credentials,
                region: A.signingRegion,
                service: A.signingName,
                sha256: Z,
                uriEscapePath: G,
              };
              return new (A.signerConstructor || xhA.SignatureV4)(V);
            }),
        'signer'
      );
    else
      Y = oI(async (F) => {
        F = Object.assign(
          {},
          {
            name: 'sigv4',
            signingName: A.signingName || A.defaultSigningName,
            signingRegion: await XP.normalizeProvider(A.region)(),
            properties: {},
          },
          F
        );
        let { signingRegion: J, signingName: C } = F;
        ((A.signingRegion = A.signingRegion || J),
          (A.signingName = A.signingName || C || A.serviceId));
        let X = {
          ...A,
          credentials: A.credentials,
          region: A.signingRegion,
          service: A.signingName,
          sha256: Z,
          uriEscapePath: G,
        };
        return new (A.signerConstructor || xhA.SignatureV4)(X);
      }, 'signer');
    return Object.assign(A, { systemClockOffset: D, signingEscapePath: G, signer: Y });
  }, 'resolveAwsSdkSigV4Config'),
  Jo9 = vhA;
function bhA(A, { credentials: B, credentialDefaultProvider: Q }) {
  let I;
  if (B)
    if (!B?.memoized)
      I = XP.memoizeIdentityProvider(B, XP.isIdentityExpired, XP.doesIdentityRequireRefresh);
    else I = B;
  else if (Q) I = XP.normalizeProvider(Q(Object.assign({}, A, { parentClientConfig: A })));
  else
    I = oI(async () => {
      throw new Error(
        '@aws-sdk/core::resolveAwsSdkSigV4Config - `credentials` not provided and no credentialDefaultProvider was configured.'
      );
    }, 'credentialsProvider');
  return ((I.memoized = !0), I);
}
oI(bhA, 'normalizeCredentialProvider');
function ghA(A, B) {
  if (B.configBound) return B;
  let Q = oI(async (I) => B({ ...I, callerClientConfig: A }), 'fn');
  return ((Q.memoized = B.memoized), (Q.configBound = !0), Q);
}
oI(ghA, 'bindCallerConfig');
