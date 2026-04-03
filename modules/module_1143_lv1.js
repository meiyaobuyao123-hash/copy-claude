// Module: lv1
// Params: EE0

Object.defineProperty(EE0, '__esModule', { value: !0 });
EE0.resolveHttpAuthSchemeConfig =
  EE0.defaultBedrockRuntimeHttpAuthSchemeProvider =
  EE0.defaultBedrockRuntimeHttpAuthSchemeParametersProvider =
    void 0;
var Vl4 = c8(),
  cv1 = qJ(),
  Kl4 = async (A, B, Q) => {
    return {
      operation: cv1.getSmithyContext(B).operation,
      region:
        (await cv1.normalizeProvider(A.region)()) ||
        (() => {
          throw new Error('expected `region` to be configured for `aws.auth#sigv4`');
        })(),
    };
  };
EE0.defaultBedrockRuntimeHttpAuthSchemeParametersProvider = Kl4;
function Hl4(A) {
  return {
    schemeId: 'aws.auth#sigv4',
    signingProperties: { name: 'bedrock', region: A.region },
    propertiesExtractor: (B, Q) => ({ signingProperties: { config: B, context: Q } }),
  };
}
var zl4 = (A) => {
  let B = [];
  switch (A.operation) {
    default:
      B.push(Hl4(A));
  }
  return B;
};
EE0.defaultBedrockRuntimeHttpAuthSchemeProvider = zl4;
var wl4 = (A) => {
  let B = Vl4.resolveAwsSdkSigV4Config(A);
  return Object.assign(B, {
    authSchemePreference: cv1.normalizeProvider(A.authSchemePreference ?? []),
  });
};
EE0.resolveHttpAuthSchemeConfig = wl4;
