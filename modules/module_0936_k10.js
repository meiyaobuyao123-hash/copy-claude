// Module: k10
// Params: j10

Object.defineProperty(j10, '__esModule', { value: !0 });
j10.fromTokenFile = void 0;
var IJ4 = bX(),
  GJ4 = t7(),
  DJ4 = D1('fs'),
  ZJ4 = V_1(),
  _10 = 'AWS_WEB_IDENTITY_TOKEN_FILE',
  YJ4 = 'AWS_ROLE_ARN',
  WJ4 = 'AWS_ROLE_SESSION_NAME',
  FJ4 =
    (A = {}) =>
    async () => {
      A.logger?.debug('@aws-sdk/credential-provider-web-identity - fromTokenFile');
      let B = A?.webIdentityTokenFile ?? process.env[_10],
        Q = A?.roleArn ?? process.env[YJ4],
        I = A?.roleSessionName ?? process.env[WJ4];
      if (!B || !Q)
        throw new GJ4.CredentialsProviderError('Web identity configuration not specified', {
          logger: A.logger,
        });
      let G = await ZJ4.fromWebToken({
        ...A,
        webIdentityToken: DJ4.readFileSync(B, { encoding: 'ascii' }),
        roleArn: Q,
        roleSessionName: I,
      })();
      if (B === process.env[_10])
        IJ4.setCredentialFeature(G, 'CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN', 'h');
      return G;
    };
j10.fromTokenFile = FJ4;
