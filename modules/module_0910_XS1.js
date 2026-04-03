// Module: XS1
// Params: xrA

Object.defineProperty(xrA, '__esModule', { value: !0 });
xrA.resolveHttpAuthSchemeConfig =
  xrA.defaultSSOOIDCHttpAuthSchemeProvider =
  xrA.defaultSSOOIDCHttpAuthSchemeParametersProvider =
    void 0;
var mD4 = c8(),
  CS1 = qJ(),
  dD4 = async (A, B, Q) => {
    return {
      operation: CS1.getSmithyContext(B).operation,
      region:
        (await CS1.normalizeProvider(A.region)()) ||
        (() => {
          throw new Error('expected `region` to be configured for `aws.auth#sigv4`');
        })(),
    };
  };
xrA.defaultSSOOIDCHttpAuthSchemeParametersProvider = dD4;
function uD4(A) {
  return {
    schemeId: 'aws.auth#sigv4',
    signingProperties: { name: 'sso-oauth', region: A.region },
    propertiesExtractor: (B, Q) => ({ signingProperties: { config: B, context: Q } }),
  };
}
function pD4(A) {
  return { schemeId: 'smithy.api#noAuth' };
}
var cD4 = (A) => {
  let B = [];
  switch (A.operation) {
    case 'CreateToken': {
      B.push(pD4(A));
      break;
    }
    default:
      B.push(uD4(A));
  }
  return B;
};
xrA.defaultSSOOIDCHttpAuthSchemeProvider = cD4;
var lD4 = (A) => {
  let B = mD4.resolveAwsSdkSigV4Config(A);
  return Object.assign(B, {
    authSchemePreference: CS1.normalizeProvider(A.authSchemePreference ?? []),
  });
};
xrA.resolveHttpAuthSchemeConfig = lD4;
