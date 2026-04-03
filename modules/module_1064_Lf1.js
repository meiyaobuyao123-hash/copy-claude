// Module: Lf1
// Params: KF0

Object.defineProperty(KF0, '__esModule', { value: !0 });
KF0.resolveHttpAuthSchemeConfig =
  KF0.defaultCognitoIdentityHttpAuthSchemeProvider =
  KF0.defaultCognitoIdentityHttpAuthSchemeParametersProvider =
    void 0;
var Gx4 = c8(),
  Mf1 = qJ(),
  Dx4 = async (A, B, Q) => {
    return {
      operation: Mf1.getSmithyContext(B).operation,
      region:
        (await Mf1.normalizeProvider(A.region)()) ||
        (() => {
          throw new Error('expected `region` to be configured for `aws.auth#sigv4`');
        })(),
    };
  };
KF0.defaultCognitoIdentityHttpAuthSchemeParametersProvider = Dx4;
function Zx4(A) {
  return {
    schemeId: 'aws.auth#sigv4',
    signingProperties: { name: 'cognito-identity', region: A.region },
    propertiesExtractor: (B, Q) => ({ signingProperties: { config: B, context: Q } }),
  };
}
function RG1(A) {
  return { schemeId: 'smithy.api#noAuth' };
}
var Yx4 = (A) => {
  let B = [];
  switch (A.operation) {
    case 'GetCredentialsForIdentity': {
      B.push(RG1(A));
      break;
    }
    case 'GetId': {
      B.push(RG1(A));
      break;
    }
    case 'GetOpenIdToken': {
      B.push(RG1(A));
      break;
    }
    case 'UnlinkIdentity': {
      B.push(RG1(A));
      break;
    }
    default:
      B.push(Zx4(A));
  }
  return B;
};
KF0.defaultCognitoIdentityHttpAuthSchemeProvider = Yx4;
var Wx4 = (A) => {
  let B = Gx4.resolveAwsSdkSigV4Config(A);
  return Object.assign(B, {
    authSchemePreference: Mf1.normalizeProvider(A.authSchemePreference ?? []),
  });
};
KF0.resolveHttpAuthSchemeConfig = Wx4;
