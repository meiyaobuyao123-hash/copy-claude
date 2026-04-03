// Module: AB1
// Params: ju5,TlA

var { defineProperty: e81, getOwnPropertyDescriptor: z54, getOwnPropertyNames: w54 } = Object,
  E54 = Object.prototype.hasOwnProperty,
  U54 = (A, B) => e81(A, 'name', { value: B, configurable: !0 }),
  N54 = (A, B) => {
    for (var Q in B) e81(A, Q, { get: B[Q], enumerable: !0 });
  },
  $54 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of w54(B))
        if (!E54.call(A, G) && G !== Q)
          e81(A, G, { get: () => B[G], enumerable: !(I = z54(B, G)) || I.enumerable });
    }
    return A;
  },
  q54 = (A) => $54(e81({}, '__esModule', { value: !0 }), A),
  NlA = {};
N54(NlA, {
  ENV_ACCOUNT_ID: () => OlA,
  ENV_CREDENTIAL_SCOPE: () => RlA,
  ENV_EXPIRATION: () => LlA,
  ENV_KEY: () => $lA,
  ENV_SECRET: () => qlA,
  ENV_SESSION: () => MlA,
  fromEnv: () => R54,
});
TlA.exports = q54(NlA);
var M54 = bX(),
  L54 = t7(),
  $lA = 'AWS_ACCESS_KEY_ID',
  qlA = 'AWS_SECRET_ACCESS_KEY',
  MlA = 'AWS_SESSION_TOKEN',
  LlA = 'AWS_CREDENTIAL_EXPIRATION',
  RlA = 'AWS_CREDENTIAL_SCOPE',
  OlA = 'AWS_ACCOUNT_ID',
  R54 = U54(
    (A) => async () => {
      A?.logger?.debug('@aws-sdk/credential-provider-env - fromEnv');
      let B = process.env[$lA],
        Q = process.env[qlA],
        I = process.env[MlA],
        G = process.env[LlA],
        D = process.env[RlA],
        Z = process.env[OlA];
      if (B && Q) {
        let Y = {
          accessKeyId: B,
          secretAccessKey: Q,
          ...(I && { sessionToken: I }),
          ...(G && { expiration: new Date(G) }),
          ...(D && { credentialScope: D }),
          ...(Z && { accountId: Z }),
        };
        return (M54.setCredentialFeature(Y, 'CREDENTIALS_ENV_VARS', 'g'), Y);
      }
      throw new L54.CredentialsProviderError('Unable to find environment variable credentials.', {
        logger: A?.logger,
      });
    },
    'fromEnv'
  );
