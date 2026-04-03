// Module: uoA
// Params: moA

Object.defineProperty(moA, '__esModule', { value: !0 });
moA.getRuntimeConfig = void 0;
var JZ4 = c8(),
  CZ4 = o7(),
  XZ4 = T3(),
  VZ4 = WU(),
  goA = ES1(),
  hoA = DQ(),
  KZ4 = XS1(),
  HZ4 = boA(),
  zZ4 = (A) => {
    return {
      apiVersion: '2019-06-10',
      base64Decoder: A?.base64Decoder ?? goA.fromBase64,
      base64Encoder: A?.base64Encoder ?? goA.toBase64,
      disableHostPrefix: A?.disableHostPrefix ?? !1,
      endpointProvider: A?.endpointProvider ?? HZ4.defaultEndpointResolver,
      extensions: A?.extensions ?? [],
      httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? KZ4.defaultSSOOIDCHttpAuthSchemeProvider,
      httpAuthSchemes: A?.httpAuthSchemes ?? [
        {
          schemeId: 'aws.auth#sigv4',
          identityProvider: (B) => B.getIdentityProvider('aws.auth#sigv4'),
          signer: new JZ4.AwsSdkSigV4Signer(),
        },
        {
          schemeId: 'smithy.api#noAuth',
          identityProvider: (B) => B.getIdentityProvider('smithy.api#noAuth') || (async () => ({})),
          signer: new CZ4.NoAuthSigner(),
        },
      ],
      logger: A?.logger ?? new XZ4.NoOpLogger(),
      serviceId: A?.serviceId ?? 'SSO OIDC',
      urlParser: A?.urlParser ?? VZ4.parseUrl,
      utf8Decoder: A?.utf8Decoder ?? hoA.fromUtf8,
      utf8Encoder: A?.utf8Encoder ?? hoA.toUtf8,
    };
  };
moA.getRuntimeConfig = zZ4;
