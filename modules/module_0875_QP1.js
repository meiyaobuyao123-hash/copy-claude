// Module: QP1
// Params: ucA

Object.defineProperty(ucA, '__esModule', { value: !0 });
ucA.resolveHttpAuthSchemeConfig =
  ucA.defaultBedrockHttpAuthSchemeProvider =
  ucA.defaultBedrockHttpAuthSchemeParametersProvider =
    void 0;
var W54 = c8(),
  BP1 = qJ(),
  F54 = async (A, B, Q) => {
    return {
      operation: BP1.getSmithyContext(B).operation,
      region:
        (await BP1.normalizeProvider(A.region)()) ||
        (() => {
          throw new Error('expected `region` to be configured for `aws.auth#sigv4`');
        })(),
    };
  };
ucA.defaultBedrockHttpAuthSchemeParametersProvider = F54;
function J54(A) {
  return {
    schemeId: 'aws.auth#sigv4',
    signingProperties: { name: 'bedrock', region: A.region },
    propertiesExtractor: (B, Q) => ({ signingProperties: { config: B, context: Q } }),
  };
}
var C54 = (A) => {
  let B = [];
  switch (A.operation) {
    default:
      B.push(J54(A));
  }
  return B;
};
ucA.defaultBedrockHttpAuthSchemeProvider = C54;
var X54 = (A) => {
  let B = W54.resolveAwsSdkSigV4Config(A);
  return Object.assign(B, {
    authSchemePreference: BP1.normalizeProvider(A.authSchemePreference ?? []),
  });
};
ucA.resolveHttpAuthSchemeConfig = X54;
