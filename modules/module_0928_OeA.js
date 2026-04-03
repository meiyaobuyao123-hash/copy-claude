// Module: OeA
// Params: LeA

Object.defineProperty(LeA, '__esModule', { value: !0 });
LeA.getRuntimeConfig = void 0;
var JW4 = c8(),
  CW4 = o7(),
  XW4 = T3(),
  VW4 = WU(),
  qeA = ES1(),
  MeA = DQ(),
  KW4 = PS1(),
  HW4 = $eA(),
  zW4 = (A) => {
    return {
      apiVersion: '2011-06-15',
      base64Decoder: A?.base64Decoder ?? qeA.fromBase64,
      base64Encoder: A?.base64Encoder ?? qeA.toBase64,
      disableHostPrefix: A?.disableHostPrefix ?? !1,
      endpointProvider: A?.endpointProvider ?? HW4.defaultEndpointResolver,
      extensions: A?.extensions ?? [],
      httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? KW4.defaultSTSHttpAuthSchemeProvider,
      httpAuthSchemes: A?.httpAuthSchemes ?? [
        {
          schemeId: 'aws.auth#sigv4',
          identityProvider: (B) => B.getIdentityProvider('aws.auth#sigv4'),
          signer: new JW4.AwsSdkSigV4Signer(),
        },
        {
          schemeId: 'smithy.api#noAuth',
          identityProvider: (B) => B.getIdentityProvider('smithy.api#noAuth') || (async () => ({})),
          signer: new CW4.NoAuthSigner(),
        },
      ],
      logger: A?.logger ?? new XW4.NoOpLogger(),
      serviceId: A?.serviceId ?? 'STS',
      urlParser: A?.urlParser ?? VW4.parseUrl,
      utf8Decoder: A?.utf8Decoder ?? MeA.fromUtf8,
      utf8Encoder: A?.utf8Encoder ?? MeA.toUtf8,
    };
  };
LeA.getRuntimeConfig = zW4;
