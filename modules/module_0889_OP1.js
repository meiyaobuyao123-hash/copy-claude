// Module: OP1
// Params: JnA

Object.defineProperty(JnA, '__esModule', { value: !0 });
JnA.resolveHttpAuthSchemeConfig =
  JnA.defaultSSOHttpAuthSchemeProvider =
  JnA.defaultSSOHttpAuthSchemeParametersProvider =
    void 0;
var V34 = c8(),
  RP1 = qJ(),
  K34 = async (A, B, Q) => {
    return {
      operation: RP1.getSmithyContext(B).operation,
      region:
        (await RP1.normalizeProvider(A.region)()) ||
        (() => {
          throw new Error('expected `region` to be configured for `aws.auth#sigv4`');
        })(),
    };
  };
JnA.defaultSSOHttpAuthSchemeParametersProvider = K34;
function H34(A) {
  return {
    schemeId: 'aws.auth#sigv4',
    signingProperties: { name: 'awsssoportal', region: A.region },
    propertiesExtractor: (B, Q) => ({ signingProperties: { config: B, context: Q } }),
  };
}
function KB1(A) {
  return { schemeId: 'smithy.api#noAuth' };
}
var z34 = (A) => {
  let B = [];
  switch (A.operation) {
    case 'GetRoleCredentials': {
      B.push(KB1(A));
      break;
    }
    case 'ListAccountRoles': {
      B.push(KB1(A));
      break;
    }
    case 'ListAccounts': {
      B.push(KB1(A));
      break;
    }
    case 'Logout': {
      B.push(KB1(A));
      break;
    }
    default:
      B.push(H34(A));
  }
  return B;
};
JnA.defaultSSOHttpAuthSchemeProvider = z34;
var w34 = (A) => {
  let B = V34.resolveAwsSdkSigV4Config(A);
  return Object.assign(B, {
    authSchemePreference: RP1.normalizeProvider(A.authSchemePreference ?? []),
  });
};
JnA.resolveHttpAuthSchemeConfig = w34;
