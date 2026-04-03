// Module: tJ0
// Params: rJ0

Object.defineProperty(rJ0, '__esModule', { value: !0 });
rJ0.getRuntimeConfig = void 0;
var sf4 = c8(),
  rf4 = o7(),
  of4 = Ra(),
  tf4 = WU(),
  aJ0 = TJ0(),
  sJ0 = DQ(),
  ef4 = Lf1(),
  Av4 = nJ0(),
  Bv4 = (A) => {
    return {
      apiVersion: '2014-06-30',
      base64Decoder: A?.base64Decoder ?? aJ0.fromBase64,
      base64Encoder: A?.base64Encoder ?? aJ0.toBase64,
      disableHostPrefix: A?.disableHostPrefix ?? !1,
      endpointProvider: A?.endpointProvider ?? Av4.defaultEndpointResolver,
      extensions: A?.extensions ?? [],
      httpAuthSchemeProvider:
        A?.httpAuthSchemeProvider ?? ef4.defaultCognitoIdentityHttpAuthSchemeProvider,
      httpAuthSchemes: A?.httpAuthSchemes ?? [
        {
          schemeId: 'aws.auth#sigv4',
          identityProvider: (B) => B.getIdentityProvider('aws.auth#sigv4'),
          signer: new sf4.AwsSdkSigV4Signer(),
        },
        {
          schemeId: 'smithy.api#noAuth',
          identityProvider: (B) => B.getIdentityProvider('smithy.api#noAuth') || (async () => ({})),
          signer: new rf4.NoAuthSigner(),
        },
      ],
      logger: A?.logger ?? new of4.NoOpLogger(),
      serviceId: A?.serviceId ?? 'Cognito Identity',
      urlParser: A?.urlParser ?? tf4.parseUrl,
      utf8Decoder: A?.utf8Decoder ?? sJ0.fromUtf8,
      utf8Encoder: A?.utf8Encoder ?? sJ0.toUtf8,
    };
  };
rJ0.getRuntimeConfig = Bv4;
