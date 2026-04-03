// Module: QZ
// Params: Td5,$dA

var { defineProperty: L81, getOwnPropertyDescriptor: f14, getOwnPropertyNames: v14 } = Object,
  b14 = Object.prototype.hasOwnProperty,
  gX = (A, B) => L81(A, 'name', { value: B, configurable: !0 }),
  g14 = (A, B) => {
    for (var Q in B) L81(A, Q, { get: B[Q], enumerable: !0 });
  },
  h14 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of v14(B))
        if (!b14.call(A, G) && G !== Q)
          L81(A, G, { get: () => B[G], enumerable: !(I = f14(B, G)) || I.enumerable });
    }
    return A;
  },
  m14 = (A) => h14(L81({}, '__esModule', { value: !0 }), A),
  VdA = {};
g14(VdA, {
  CONFIG_USE_DUALSTACK_ENDPOINT: () => HdA,
  CONFIG_USE_FIPS_ENDPOINT: () => wdA,
  DEFAULT_USE_DUALSTACK_ENDPOINT: () => d14,
  DEFAULT_USE_FIPS_ENDPOINT: () => p14,
  ENV_USE_DUALSTACK_ENDPOINT: () => KdA,
  ENV_USE_FIPS_ENDPOINT: () => zdA,
  NODE_REGION_CONFIG_FILE_OPTIONS: () => s14,
  NODE_REGION_CONFIG_OPTIONS: () => a14,
  NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS: () => u14,
  NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS: () => c14,
  REGION_ENV_NAME: () => EdA,
  REGION_INI_NAME: () => UdA,
  getRegionInfo: () => AA4,
  resolveCustomEndpointsConfig: () => l14,
  resolveEndpointsConfig: () => n14,
  resolveRegionConfig: () => r14,
});
$dA.exports = m14(VdA);
var JM = JdA(),
  KdA = 'AWS_USE_DUALSTACK_ENDPOINT',
  HdA = 'use_dualstack_endpoint',
  d14 = !1,
  u14 = {
    environmentVariableSelector: (A) => JM.booleanSelector(A, KdA, JM.SelectorType.ENV),
    configFileSelector: (A) => JM.booleanSelector(A, HdA, JM.SelectorType.CONFIG),
    default: !1,
  },
  zdA = 'AWS_USE_FIPS_ENDPOINT',
  wdA = 'use_fips_endpoint',
  p14 = !1,
  c14 = {
    environmentVariableSelector: (A) => JM.booleanSelector(A, zdA, JM.SelectorType.ENV),
    configFileSelector: (A) => JM.booleanSelector(A, wdA, JM.SelectorType.CONFIG),
    default: !1,
  },
  M81 = qJ(),
  l14 = gX((A) => {
    let { tls: B, endpoint: Q, urlParser: I, useDualstackEndpoint: G } = A;
    return Object.assign(A, {
      tls: B ?? !0,
      endpoint: M81.normalizeProvider(typeof Q === 'string' ? I(Q) : Q),
      isCustomEndpoint: !0,
      useDualstackEndpoint: M81.normalizeProvider(G ?? !1),
    });
  }, 'resolveCustomEndpointsConfig'),
  i14 = gX(async (A) => {
    let { tls: B = !0 } = A,
      Q = await A.region();
    if (!new RegExp(/^([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9])$/).test(Q))
      throw new Error('Invalid region in client config');
    let G = await A.useDualstackEndpoint(),
      D = await A.useFipsEndpoint(),
      { hostname: Z } =
        (await A.regionInfoProvider(Q, { useDualstackEndpoint: G, useFipsEndpoint: D })) ?? {};
    if (!Z) throw new Error('Cannot resolve hostname from client config');
    return A.urlParser(`${B ? 'https:' : 'http:'}//${Z}`);
  }, 'getEndpointFromRegion'),
  n14 = gX((A) => {
    let B = M81.normalizeProvider(A.useDualstackEndpoint ?? !1),
      { endpoint: Q, useFipsEndpoint: I, urlParser: G, tls: D } = A;
    return Object.assign(A, {
      tls: D ?? !0,
      endpoint: Q
        ? M81.normalizeProvider(typeof Q === 'string' ? G(Q) : Q)
        : () => i14({ ...A, useDualstackEndpoint: B, useFipsEndpoint: I }),
      isCustomEndpoint: !!Q,
      useDualstackEndpoint: B,
    });
  }, 'resolveEndpointsConfig'),
  EdA = 'AWS_REGION',
  UdA = 'region',
  a14 = {
    environmentVariableSelector: (A) => A[EdA],
    configFileSelector: (A) => A[UdA],
    default: () => {
      throw new Error('Region is missing');
    },
  },
  s14 = { preferredFile: 'credentials' },
  NdA = gX(
    (A) => typeof A === 'string' && (A.startsWith('fips-') || A.endsWith('-fips')),
    'isFipsRegion'
  ),
  CdA = gX(
    (A) =>
      NdA(A)
        ? ['fips-aws-global', 'aws-fips'].includes(A)
          ? 'us-east-1'
          : A.replace(/fips-(dkr-|prod-)?|-fips/, '')
        : A,
    'getRealRegion'
  ),
  r14 = gX((A) => {
    let { region: B, useFipsEndpoint: Q } = A;
    if (!B) throw new Error('Region is missing');
    return Object.assign(A, {
      region: async () => {
        if (typeof B === 'string') return CdA(B);
        let I = await B();
        return CdA(I);
      },
      useFipsEndpoint: async () => {
        let I = typeof B === 'string' ? B : await B();
        if (NdA(I)) return !0;
        return typeof Q !== 'function' ? Promise.resolve(!!Q) : Q();
      },
    });
  }, 'resolveRegionConfig'),
  XdA = gX(
    (A = [], { useFipsEndpoint: B, useDualstackEndpoint: Q }) =>
      A.find(({ tags: I }) => B === I.includes('fips') && Q === I.includes('dualstack'))?.hostname,
    'getHostnameFromVariants'
  ),
  o14 = gX(
    (A, { regionHostname: B, partitionHostname: Q }) =>
      B ? B : Q ? Q.replace('{region}', A) : void 0,
    'getResolvedHostname'
  ),
  t14 = gX(
    (A, { partitionHash: B }) =>
      Object.keys(B || {}).find((Q) => B[Q].regions.includes(A)) ?? 'aws',
    'getResolvedPartition'
  ),
  e14 = gX((A, { signingRegion: B, regionRegex: Q, useFipsEndpoint: I }) => {
    if (B) return B;
    else if (I) {
      let G = Q.replace('\\\\', '\\').replace(/^\^/g, '\\.').replace(/\$$/g, '\\.'),
        D = A.match(G);
      if (D) return D[0].slice(1, -1);
    }
  }, 'getResolvedSigningRegion'),
  AA4 = gX(
    (
      A,
      {
        useFipsEndpoint: B = !1,
        useDualstackEndpoint: Q = !1,
        signingService: I,
        regionHash: G,
        partitionHash: D,
      }
    ) => {
      let Z = t14(A, { partitionHash: D }),
        Y = A in G ? A : (D[Z]?.endpoint ?? A),
        W = { useFipsEndpoint: B, useDualstackEndpoint: Q },
        F = XdA(G[Y]?.variants, W),
        J = XdA(D[Z]?.variants, W),
        C = o14(Y, { regionHostname: F, partitionHostname: J });
      if (C === void 0)
        throw new Error(
          `Endpoint resolution failed for: ${{ resolvedRegion: Y, useFipsEndpoint: B, useDualstackEndpoint: Q }}`
        );
      let X = e14(C, {
        signingRegion: G[Y]?.signingRegion,
        regionRegex: D[Z].regionRegex,
        useFipsEndpoint: B,
      });
      return {
        partition: Z,
        signingService: I,
        hostname: C,
        ...(X && { signingRegion: X }),
        ...(G[Y]?.signingService && { signingService: G[Y].signingService }),
      };
    },
    'getRegionInfo'
  );
