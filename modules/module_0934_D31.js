// Module: D31
// Params: wc5,S10

var { defineProperty: G31, getOwnPropertyDescriptor: dF4, getOwnPropertyNames: uF4 } = Object,
  pF4 = Object.prototype.hasOwnProperty,
  X_1 = (A, B) => G31(A, 'name', { value: B, configurable: !0 }),
  cF4 = (A, B) => {
    for (var Q in B) G31(A, Q, { get: B[Q], enumerable: !0 });
  },
  lF4 = (A, B, Q, I) => {
    if ((B && typeof B === 'object') || typeof B === 'function') {
      for (let G of uF4(B))
        if (!pF4.call(A, G) && G !== Q)
          G31(A, G, { get: () => B[G], enumerable: !(I = dF4(B, G)) || I.enumerable });
    }
    return A;
  },
  iF4 = (A) => lF4(G31({}, '__esModule', { value: !0 }), A),
  P10 = {};
cF4(P10, { fromProcess: () => tF4 });
S10.exports = iF4(P10);
var T10 = XM(),
  C_1 = t7(),
  nF4 = D1('child_process'),
  aF4 = D1('util'),
  sF4 = bX(),
  rF4 = X_1((A, B, Q) => {
    if (B.Version !== 1) throw Error(`Profile ${A} credential_process did not return Version 1.`);
    if (B.AccessKeyId === void 0 || B.SecretAccessKey === void 0)
      throw Error(`Profile ${A} credential_process returned invalid credentials.`);
    if (B.Expiration) {
      let D = new Date();
      if (new Date(B.Expiration) < D)
        throw Error(`Profile ${A} credential_process returned expired credentials.`);
    }
    let I = B.AccountId;
    if (!I && Q?.[A]?.aws_account_id) I = Q[A].aws_account_id;
    let G = {
      accessKeyId: B.AccessKeyId,
      secretAccessKey: B.SecretAccessKey,
      ...(B.SessionToken && { sessionToken: B.SessionToken }),
      ...(B.Expiration && { expiration: new Date(B.Expiration) }),
      ...(B.CredentialScope && { credentialScope: B.CredentialScope }),
      ...(I && { accountId: I }),
    };
    return (sF4.setCredentialFeature(G, 'CREDENTIALS_PROCESS', 'w'), G);
  }, 'getValidatedProcessCredentials'),
  oF4 = X_1(async (A, B, Q) => {
    let I = B[A];
    if (B[A]) {
      let G = I.credential_process;
      if (G !== void 0) {
        let D = aF4.promisify(nF4.exec);
        try {
          let { stdout: Z } = await D(G),
            Y;
          try {
            Y = JSON.parse(Z.trim());
          } catch {
            throw Error(`Profile ${A} credential_process returned invalid JSON.`);
          }
          return rF4(A, Y, B);
        } catch (Z) {
          throw new C_1.CredentialsProviderError(Z.message, { logger: Q });
        }
      } else
        throw new C_1.CredentialsProviderError(`Profile ${A} did not contain credential_process.`, {
          logger: Q,
        });
    } else
      throw new C_1.CredentialsProviderError(
        `Profile ${A} could not be found in shared credentials file.`,
        { logger: Q }
      );
  }, 'resolveProcessCredentials'),
  tF4 = X_1(
    (A = {}) =>
      async ({ callerClientConfig: B } = {}) => {
        A.logger?.debug('@aws-sdk/credential-provider-process - fromProcess');
        let Q = await T10.parseKnownFiles(A);
        return oF4(T10.getProfileName({ profile: A.profile ?? B?.profile }), Q, A.logger);
      },
    'fromProcess'
  );
