// Module: UP
// Params: yu5,mlA

var { defineProperty: IB1, getOwnPropertyDescriptor: O54, getOwnPropertyNames: T54 } = Object,
  P54 = Object.prototype.hasOwnProperty,
  uQ = (A, B) => IB1(A, 'name', { value: B, configurable: !0 }),
  S54 = (A, B) => {
    for (var Q in B) IB1(A, Q, { get: B[Q], enumerable: !0 });
  },
  _54 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of T54(B))
        if (!P54.call(A, G) && G !== Q)
          IB1(A, G, { get: () => B[G], enumerable: !(I = O54(B, G)) || I.enumerable });
    }
    return A;
  },
  j54 = (A) => _54(IB1({}, '__esModule', { value: !0 }), A),
  jlA = {};
S54(jlA, {
  DEFAULT_MAX_RETRIES: () => flA,
  DEFAULT_TIMEOUT: () => xlA,
  ENV_CMDS_AUTH_TOKEN: () => ZP1,
  ENV_CMDS_FULL_URI: () => BB1,
  ENV_CMDS_RELATIVE_URI: () => QB1,
  Endpoint: () => vlA,
  fromContainerMetadata: () => f54,
  fromInstanceMetadata: () => Q84,
  getInstanceMetadataEndpoint: () => glA,
  httpRequest: () => vf,
  providerConfigFromInit: () => YP1,
});
mlA.exports = j54(jlA);
var y54 = D1('url'),
  uH = t7(),
  k54 = D1('buffer'),
  x54 = D1('http');
function vf(A) {
  return new Promise((B, Q) => {
    let I = x54.request({ method: 'GET', ...A, hostname: A.hostname?.replace(/^\[(.+)\]$/, '$1') });
    (I.on('error', (G) => {
      (Q(Object.assign(new uH.ProviderError('Unable to connect to instance metadata service'), G)),
        I.destroy());
    }),
      I.on('timeout', () => {
        (Q(new uH.ProviderError('TimeoutError from instance metadata service')), I.destroy());
      }),
      I.on('response', (G) => {
        let { statusCode: D = 400 } = G;
        if (D < 200 || 300 <= D)
          (Q(
            Object.assign(
              new uH.ProviderError('Error response received from instance metadata service'),
              { statusCode: D }
            )
          ),
            I.destroy());
        let Z = [];
        (G.on('data', (Y) => {
          Z.push(Y);
        }),
          G.on('end', () => {
            (B(k54.Buffer.concat(Z)), I.destroy());
          }));
      }),
      I.end());
  });
}
uQ(vf, 'httpRequest');
var ylA = uQ(
    (A) =>
      Boolean(A) &&
      typeof A === 'object' &&
      typeof A.AccessKeyId === 'string' &&
      typeof A.SecretAccessKey === 'string' &&
      typeof A.Token === 'string' &&
      typeof A.Expiration === 'string',
    'isImdsCredentials'
  ),
  klA = uQ(
    (A) => ({
      accessKeyId: A.AccessKeyId,
      secretAccessKey: A.SecretAccessKey,
      sessionToken: A.Token,
      expiration: new Date(A.Expiration),
      ...(A.AccountId && { accountId: A.AccountId }),
    }),
    'fromImdsCredentials'
  ),
  xlA = 1000,
  flA = 0,
  YP1 = uQ(
    ({ maxRetries: A = flA, timeout: B = xlA }) => ({ maxRetries: A, timeout: B }),
    'providerConfigFromInit'
  ),
  DP1 = uQ((A, B) => {
    let Q = A();
    for (let I = 0; I < B; I++) Q = Q.catch(A);
    return Q;
  }, 'retry'),
  BB1 = 'AWS_CONTAINER_CREDENTIALS_FULL_URI',
  QB1 = 'AWS_CONTAINER_CREDENTIALS_RELATIVE_URI',
  ZP1 = 'AWS_CONTAINER_AUTHORIZATION_TOKEN',
  f54 = uQ((A = {}) => {
    let { timeout: B, maxRetries: Q } = YP1(A);
    return () =>
      DP1(async () => {
        let I = await m54({ logger: A.logger }),
          G = JSON.parse(await v54(B, I));
        if (!ylA(G))
          throw new uH.CredentialsProviderError(
            'Invalid response received from instance metadata service.',
            { logger: A.logger }
          );
        return klA(G);
      }, Q);
  }, 'fromContainerMetadata'),
  v54 = uQ(async (A, B) => {
    if (process.env[ZP1]) B.headers = { ...B.headers, Authorization: process.env[ZP1] };
    return (await vf({ ...B, timeout: A })).toString();
  }, 'requestFromEcsImds'),
  b54 = '169.254.170.2',
  g54 = { localhost: !0, '127.0.0.1': !0 },
  h54 = { 'http:': !0, 'https:': !0 },
  m54 = uQ(async ({ logger: A }) => {
    if (process.env[QB1]) return { hostname: b54, path: process.env[QB1] };
    if (process.env[BB1]) {
      let B = y54.parse(process.env[BB1]);
      if (!B.hostname || !(B.hostname in g54))
        throw new uH.CredentialsProviderError(
          `${B.hostname} is not a valid container metadata service hostname`,
          { tryNextLink: !1, logger: A }
        );
      if (!B.protocol || !(B.protocol in h54))
        throw new uH.CredentialsProviderError(
          `${B.protocol} is not a valid container metadata service protocol`,
          { tryNextLink: !1, logger: A }
        );
      return { ...B, port: B.port ? parseInt(B.port, 10) : void 0 };
    }
    throw new uH.CredentialsProviderError(
      `The container metadata credential provider cannot be used unless the ${QB1} or ${BB1} environment variable is set`,
      { tryNextLink: !1, logger: A }
    );
  }, 'getCmdsUri'),
  d54 = class A extends uH.CredentialsProviderError {
    constructor(B, Q = !0) {
      super(B, Q);
      ((this.tryNextLink = Q),
        (this.name = 'InstanceMetadataV1FallbackError'),
        Object.setPrototypeOf(this, A.prototype));
    }
    static {
      uQ(this, 'InstanceMetadataV1FallbackError');
    }
  },
  WP1 = hX(),
  u54 = WU(),
  vlA = ((A) => {
    return ((A.IPv4 = 'http://169.254.169.254'), (A.IPv6 = 'http://[fd00:ec2::254]'), A);
  })(vlA || {}),
  p54 = 'AWS_EC2_METADATA_SERVICE_ENDPOINT',
  c54 = 'ec2_metadata_service_endpoint',
  l54 = {
    environmentVariableSelector: (A) => A[p54],
    configFileSelector: (A) => A[c54],
    default: void 0,
  },
  blA = ((A) => {
    return ((A.IPv4 = 'IPv4'), (A.IPv6 = 'IPv6'), A);
  })(blA || {}),
  i54 = 'AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE',
  n54 = 'ec2_metadata_service_endpoint_mode',
  a54 = {
    environmentVariableSelector: (A) => A[i54],
    configFileSelector: (A) => A[n54],
    default: 'IPv4',
  },
  glA = uQ(async () => u54.parseUrl((await s54()) || (await r54())), 'getInstanceMetadataEndpoint'),
  s54 = uQ(async () => WP1.loadConfig(l54)(), 'getFromEndpointConfig'),
  r54 = uQ(async () => {
    let A = await WP1.loadConfig(a54)();
    switch (A) {
      case 'IPv4':
        return 'http://169.254.169.254';
      case 'IPv6':
        return 'http://[fd00:ec2::254]';
      default:
        throw new Error(`Unsupported endpoint mode: ${A}. Select from ${Object.values(blA)}`);
    }
  }, 'getFromEndpointModeConfig'),
  o54 = 300,
  t54 = 300,
  e54 = 'https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html',
  PlA = uQ((A, B) => {
    let Q = o54 + Math.floor(Math.random() * t54),
      I = new Date(Date.now() + Q * 1000);
    B.warn(
      `Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(I)}.
For more information, please visit: ` + e54
    );
    let G = A.originalExpiration ?? A.expiration;
    return { ...A, ...(G ? { originalExpiration: G } : {}), expiration: I };
  }, 'getExtendedInstanceMetadataCredentials'),
  A84 = uQ((A, B = {}) => {
    let Q = B?.logger || console,
      I;
    return async () => {
      let G;
      try {
        if (((G = await A()), G.expiration && G.expiration.getTime() < Date.now())) G = PlA(G, Q);
      } catch (D) {
        if (I) (Q.warn('Credential renew failed: ', D), (G = PlA(I, Q)));
        else throw D;
      }
      return ((I = G), G);
    };
  }, 'staticStabilityProvider'),
  hlA = '/latest/meta-data/iam/security-credentials/',
  B84 = '/latest/api/token',
  GP1 = 'AWS_EC2_METADATA_V1_DISABLED',
  SlA = 'ec2_metadata_v1_disabled',
  _lA = 'x-aws-ec2-metadata-token',
  Q84 = uQ((A = {}) => A84(I84(A), { logger: A.logger }), 'fromInstanceMetadata'),
  I84 = uQ((A = {}) => {
    let B = !1,
      { logger: Q, profile: I } = A,
      { timeout: G, maxRetries: D } = YP1(A),
      Z = uQ(async (Y, W) => {
        if (B || W.headers?.[_lA] == null) {
          let C = !1,
            X = !1,
            V = await WP1.loadConfig(
              {
                environmentVariableSelector: (K) => {
                  let U = K[GP1];
                  if (((X = !!U && U !== 'false'), U === void 0))
                    throw new uH.CredentialsProviderError(
                      `${GP1} not set in env, checking config file next.`,
                      { logger: A.logger }
                    );
                  return X;
                },
                configFileSelector: (K) => {
                  let U = K[SlA];
                  return ((C = !!U && U !== 'false'), C);
                },
                default: !1,
              },
              { profile: I }
            )();
          if (A.ec2MetadataV1Disabled || V) {
            let K = [];
            if (A.ec2MetadataV1Disabled)
              K.push('credential provider initialization (runtime option ec2MetadataV1Disabled)');
            if (C) K.push(`config file profile (${SlA})`);
            if (X) K.push(`process environment variable (${GP1})`);
            throw new d54(
              `AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${K.join(', ')}].`
            );
          }
        }
        let J = (
          await DP1(async () => {
            let C;
            try {
              C = await D84(W);
            } catch (X) {
              if (X.statusCode === 401) B = !1;
              throw X;
            }
            return C;
          }, Y)
        ).trim();
        return DP1(async () => {
          let C;
          try {
            C = await Z84(J, W, A);
          } catch (X) {
            if (X.statusCode === 401) B = !1;
            throw X;
          }
          return C;
        }, Y);
      }, 'getCredentials');
    return async () => {
      let Y = await glA();
      if (B)
        return (
          Q?.debug('AWS SDK Instance Metadata', 'using v1 fallback (no token fetch)'),
          Z(D, { ...Y, timeout: G })
        );
      else {
        let W;
        try {
          W = (await G84({ ...Y, timeout: G })).toString();
        } catch (F) {
          if (F?.statusCode === 400)
            throw Object.assign(F, { message: 'EC2 Metadata token request returned error' });
          else if (F.message === 'TimeoutError' || [403, 404, 405].includes(F.statusCode)) B = !0;
          return (
            Q?.debug('AWS SDK Instance Metadata', 'using v1 fallback (initial)'),
            Z(D, { ...Y, timeout: G })
          );
        }
        return Z(D, { ...Y, headers: { [_lA]: W }, timeout: G });
      }
    };
  }, 'getInstanceMetadataProvider'),
  G84 = uQ(
    async (A) =>
      vf({
        ...A,
        path: B84,
        method: 'PUT',
        headers: { 'x-aws-ec2-metadata-token-ttl-seconds': '21600' },
      }),
    'getMetadataToken'
  ),
  D84 = uQ(async (A) => (await vf({ ...A, path: hlA })).toString(), 'getProfile'),
  Z84 = uQ(async (A, B, Q) => {
    let I = JSON.parse((await vf({ ...B, path: hlA + A })).toString());
    if (!ylA(I))
      throw new uH.CredentialsProviderError(
        'Invalid response received from instance metadata service.',
        { logger: Q.logger }
      );
    return klA(I);
  }, 'getCredentialsFromProfile');
