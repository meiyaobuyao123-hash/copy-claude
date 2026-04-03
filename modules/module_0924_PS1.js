// Module: PS1
// Params: ctA

Object.defineProperty(ctA, '__esModule', { value: !0 });
ctA.resolveHttpAuthSchemeConfig =
  ctA.resolveStsAuthConfig =
  ctA.defaultSTSHttpAuthSchemeProvider =
  ctA.defaultSTSHttpAuthSchemeParametersProvider =
    void 0;
var nY4 = c8(),
  TS1 = qJ(),
  aY4 = Gi(),
  sY4 = async (A, B, Q) => {
    return {
      operation: TS1.getSmithyContext(B).operation,
      region:
        (await TS1.normalizeProvider(A.region)()) ||
        (() => {
          throw new Error('expected `region` to be configured for `aws.auth#sigv4`');
        })(),
    };
  };
ctA.defaultSTSHttpAuthSchemeParametersProvider = sY4;
function rY4(A) {
  return {
    schemeId: 'aws.auth#sigv4',
    signingProperties: { name: 'sts', region: A.region },
    propertiesExtractor: (B, Q) => ({ signingProperties: { config: B, context: Q } }),
  };
}
function oY4(A) {
  return { schemeId: 'smithy.api#noAuth' };
}
var tY4 = (A) => {
  let B = [];
  switch (A.operation) {
    case 'AssumeRoleWithWebIdentity': {
      B.push(oY4(A));
      break;
    }
    default:
      B.push(rY4(A));
  }
  return B;
};
ctA.defaultSTSHttpAuthSchemeProvider = tY4;
var eY4 = (A) => Object.assign(A, { stsClientCtor: aY4.STSClient });
ctA.resolveStsAuthConfig = eY4;
var AW4 = (A) => {
  let B = ctA.resolveStsAuthConfig(A),
    Q = nY4.resolveAwsSdkSigV4Config(B);
  return Object.assign(Q, {
    authSchemePreference: TS1.normalizeProvider(A.authSchemePreference ?? []),
  });
};
ctA.resolveHttpAuthSchemeConfig = AW4;
