// Module: FnA
// Params: YnA

Object.defineProperty(YnA, '__esModule', { value: !0 });
YnA.fromHttp = void 0;
var eB4 = HiA(),
  A34 = bX(),
  B34 = GU(),
  DnA = t7(),
  Q34 = eB4.__importDefault(D1('fs/promises')),
  I34 = EiA(),
  ZnA = BnA(),
  G34 = GnA(),
  D34 = 'AWS_CONTAINER_CREDENTIALS_RELATIVE_URI',
  Z34 = 'http://169.254.170.2',
  Y34 = 'AWS_CONTAINER_CREDENTIALS_FULL_URI',
  W34 = 'AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE',
  F34 = 'AWS_CONTAINER_AUTHORIZATION_TOKEN',
  J34 = (A = {}) => {
    A.logger?.debug('@aws-sdk/credential-provider-http - fromHttp');
    let B,
      Q = A.awsContainerCredentialsRelativeUri ?? process.env[D34],
      I = A.awsContainerCredentialsFullUri ?? process.env[Y34],
      G = A.awsContainerAuthorizationToken ?? process.env[F34],
      D = A.awsContainerAuthorizationTokenFile ?? process.env[W34],
      Z = A.logger?.constructor?.name === 'NoOpLogger' || !A.logger ? console.warn : A.logger.warn;
    if (Q && I)
      (Z(
        '@aws-sdk/credential-provider-http: you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri.'
      ),
        Z('awsContainerCredentialsFullUri will take precedence.'));
    if (G && D)
      (Z(
        '@aws-sdk/credential-provider-http: you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile.'
      ),
        Z('awsContainerAuthorizationToken will take precedence.'));
    if (I) B = I;
    else if (Q) B = `${Z34}${Q}`;
    else
      throw new DnA.CredentialsProviderError(
        `No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`,
        { logger: A.logger }
      );
    let Y = new URL(B);
    I34.checkUrl(Y, A.logger);
    let W = new B34.NodeHttpHandler({
      requestTimeout: A.timeout ?? 1000,
      connectionTimeout: A.timeout ?? 1000,
    });
    return G34.retryWrapper(
      async () => {
        let F = ZnA.createGetRequest(Y);
        if (G) F.headers.Authorization = G;
        else if (D) F.headers.Authorization = (await Q34.default.readFile(D)).toString();
        try {
          let J = await W.handle(F);
          return ZnA.getCredentials(J.response).then((C) =>
            A34.setCredentialFeature(C, 'CREDENTIALS_HTTP', 'z')
          );
        } catch (J) {
          throw new DnA.CredentialsProviderError(String(J), { logger: A.logger });
        }
      },
      A.maxRetries ?? 3,
      A.timeout ?? 1000
    );
  };
YnA.fromHttp = J34;
