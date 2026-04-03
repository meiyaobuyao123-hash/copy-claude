// Module: OP
// Params: Ep5,OsA

var { defineProperty: SB1, getOwnPropertyDescriptor: zI4, getOwnPropertyNames: wI4 } = Object,
  EI4 = Object.prototype.hasOwnProperty,
  lH = (A, B) => SB1(A, 'name', { value: B, configurable: !0 }),
  UI4 = (A, B) => {
    for (var Q in B) SB1(A, Q, { get: B[Q], enumerable: !0 });
  },
  NI4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of wI4(B))
        if (!EI4.call(A, G) && G !== Q)
          SB1(A, G, { get: () => B[G], enumerable: !(I = zI4(B, G)) || I.enumerable });
    }
    return A;
  },
  $I4 = (A) => NI4(SB1({}, '__esModule', { value: !0 }), A),
  qsA = {};
UI4(qsA, {
  NODE_REGION_CONFIG_FILE_OPTIONS: () => RI4,
  NODE_REGION_CONFIG_OPTIONS: () => LI4,
  REGION_ENV_NAME: () => MsA,
  REGION_INI_NAME: () => LsA,
  getAwsRegionExtensionConfiguration: () => qI4,
  resolveAwsRegionExtensionConfiguration: () => MI4,
  resolveRegionConfig: () => OI4,
});
OsA.exports = $I4(qsA);
var qI4 = lH((A) => {
    return {
      setRegion(B) {
        A.region = B;
      },
      region() {
        return A.region;
      },
    };
  }, 'getAwsRegionExtensionConfiguration'),
  MI4 = lH((A) => {
    return { region: A.region() };
  }, 'resolveAwsRegionExtensionConfiguration'),
  MsA = 'AWS_REGION',
  LsA = 'region',
  LI4 = {
    environmentVariableSelector: lH((A) => A[MsA], 'environmentVariableSelector'),
    configFileSelector: lH((A) => A[LsA], 'configFileSelector'),
    default: lH(() => {
      throw new Error('Region is missing');
    }, 'default'),
  },
  RI4 = { preferredFile: 'credentials' },
  RsA = lH(
    (A) => typeof A === 'string' && (A.startsWith('fips-') || A.endsWith('-fips')),
    'isFipsRegion'
  ),
  $sA = lH(
    (A) =>
      RsA(A)
        ? ['fips-aws-global', 'aws-fips'].includes(A)
          ? 'us-east-1'
          : A.replace(/fips-(dkr-|prod-)?|-fips/, '')
        : A,
    'getRealRegion'
  ),
  OI4 = lH((A) => {
    let { region: B, useFipsEndpoint: Q } = A;
    if (!B) throw new Error('Region is missing');
    return Object.assign(A, {
      region: lH(async () => {
        if (typeof B === 'string') return $sA(B);
        let I = await B();
        return $sA(I);
      }, 'region'),
      useFipsEndpoint: lH(async () => {
        let I = typeof B === 'string' ? B : await B();
        if (RsA(I)) return !0;
        return typeof Q !== 'function' ? Promise.resolve(!!Q) : Q();
      }, 'useFipsEndpoint'),
    });
  }, 'resolveRegionConfig');
