// Module: Ji
// Params: qc5,s10

var {
    create: kJ4,
    defineProperty: Fi,
    getOwnPropertyDescriptor: xJ4,
    getOwnPropertyNames: fJ4,
    getPrototypeOf: vJ4,
  } = Object,
  bJ4 = Object.prototype.hasOwnProperty,
  Y31 = (A, B) => Fi(A, 'name', { value: B, configurable: !0 }),
  gJ4 = (A, B) => {
    for (var Q in B) Fi(A, Q, { get: B[Q], enumerable: !0 });
  },
  l10 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of fJ4(B))
        if (!bJ4.call(A, G) && G !== Q)
          Fi(A, G, { get: () => B[G], enumerable: !(I = xJ4(B, G)) || I.enumerable });
    }
    return A;
  },
  zv = (A, B, Q) => (
    (Q = A != null ? kJ4(vJ4(A)) : {}),
    l10(B || !A || !A.__esModule ? Fi(Q, 'default', { value: A, enumerable: !0 }) : Q, A)
  ),
  hJ4 = (A) => l10(Fi({}, '__esModule', { value: !0 }), A),
  i10 = {};
gJ4(i10, {
  credentialsTreatedAsExpired: () => a10,
  credentialsWillNeedRefresh: () => n10,
  defaultProvider: () => uJ4,
});
s10.exports = hJ4(i10);
var U_1 = AB1(),
  mJ4 = XM(),
  SP = t7(),
  p10 = 'AWS_EC2_METADATA_DISABLED',
  dJ4 = Y31(async (A) => {
    let {
      ENV_CMDS_FULL_URI: B,
      ENV_CMDS_RELATIVE_URI: Q,
      fromContainerMetadata: I,
      fromInstanceMetadata: G,
    } = await Promise.resolve().then(() => zv(UP()));
    if (process.env[Q] || process.env[B]) {
      A.logger?.debug(
        '@aws-sdk/credential-provider-node - remoteProvider::fromHttp/fromContainerMetadata'
      );
      let { fromHttp: D } = await Promise.resolve().then(() => zv(VB1()));
      return SP.chain(D(A), I(A));
    }
    if (process.env[p10] && process.env[p10] !== 'false')
      return async () => {
        throw new SP.CredentialsProviderError('EC2 Instance Metadata Service access disabled', {
          logger: A.logger,
        });
      };
    return (
      A.logger?.debug('@aws-sdk/credential-provider-node - remoteProvider::fromInstanceMetadata'),
      G(A)
    );
  }, 'remoteProvider'),
  c10 = !1,
  uJ4 = Y31(
    (A = {}) =>
      SP.memoize(
        SP.chain(
          async () => {
            if (A.profile ?? process.env[mJ4.ENV_PROFILE]) {
              if (process.env[U_1.ENV_KEY] && process.env[U_1.ENV_SECRET]) {
                if (!c10)
                  ((A.logger?.warn && A.logger?.constructor?.name !== 'NoOpLogger'
                    ? A.logger.warn
                    : console.warn)(`@aws-sdk/credential-provider-node - defaultProvider::fromEnv WARNING:
    Multiple credential sources detected: 
    Both AWS_PROFILE and the pair AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY static credentials are set.
    This SDK will proceed with the AWS_PROFILE value.
    
    However, a future version may change this behavior to prefer the ENV static credentials.
    Please ensure that your environment only sets either the AWS_PROFILE or the
    AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY pair.
`),
                    (c10 = !0));
              }
              throw new SP.CredentialsProviderError(
                'AWS_PROFILE is set, skipping fromEnv provider.',
                { logger: A.logger, tryNextLink: !0 }
              );
            }
            return (
              A.logger?.debug('@aws-sdk/credential-provider-node - defaultProvider::fromEnv'),
              U_1.fromEnv(A)()
            );
          },
          async () => {
            A.logger?.debug('@aws-sdk/credential-provider-node - defaultProvider::fromSSO');
            let {
              ssoStartUrl: B,
              ssoAccountId: Q,
              ssoRegion: I,
              ssoRoleName: G,
              ssoSession: D,
            } = A;
            if (!B && !Q && !I && !G && !D)
              throw new SP.CredentialsProviderError(
                'Skipping SSO provider in default chain (inputs do not include SSO fields).',
                { logger: A.logger }
              );
            let { fromSSO: Z } = await Promise.resolve().then(() => zv(A31()));
            return Z(A)();
          },
          async () => {
            A.logger?.debug('@aws-sdk/credential-provider-node - defaultProvider::fromIni');
            let { fromIni: B } = await Promise.resolve().then(() => zv(E_1()));
            return B(A)();
          },
          async () => {
            A.logger?.debug('@aws-sdk/credential-provider-node - defaultProvider::fromProcess');
            let { fromProcess: B } = await Promise.resolve().then(() => zv(D31()));
            return B(A)();
          },
          async () => {
            A.logger?.debug('@aws-sdk/credential-provider-node - defaultProvider::fromTokenFile');
            let { fromTokenFile: B } = await Promise.resolve().then(() => zv(Zi()));
            return B(A)();
          },
          async () => {
            return (
              A.logger?.debug(
                '@aws-sdk/credential-provider-node - defaultProvider::remoteProvider'
              ),
              (await dJ4(A))()
            );
          },
          async () => {
            throw new SP.CredentialsProviderError('Could not load credentials from any providers', {
              tryNextLink: !1,
              logger: A.logger,
            });
          }
        ),
        a10,
        n10
      ),
    'defaultProvider'
  ),
  n10 = Y31((A) => A?.expiration !== void 0, 'credentialsWillNeedRefresh'),
  a10 = Y31(
    (A) => A?.expiration !== void 0 && A.expiration.getTime() - Date.now() < 300000,
    'credentialsTreatedAsExpired'
  );
