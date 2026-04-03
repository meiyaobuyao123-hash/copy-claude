// Module: WsA
// Params: ZsA

Object.defineProperty(ZsA, '__esModule', { value: !0 });
ZsA.getRuntimeConfig = void 0;
var y74 = c8(),
  k74 = o7(),
  x74 = ll(),
  f74 = WU(),
  GsA = baA(),
  DsA = DQ(),
  v74 = OP1(),
  b74 = IsA(),
  g74 = (A) => {
    return {
      apiVersion: '2019-06-10',
      base64Decoder: A?.base64Decoder ?? GsA.fromBase64,
      base64Encoder: A?.base64Encoder ?? GsA.toBase64,
      disableHostPrefix: A?.disableHostPrefix ?? !1,
      endpointProvider: A?.endpointProvider ?? b74.defaultEndpointResolver,
      extensions: A?.extensions ?? [],
      httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? v74.defaultSSOHttpAuthSchemeProvider,
      httpAuthSchemes: A?.httpAuthSchemes ?? [
        {
          schemeId: 'aws.auth#sigv4',
          identityProvider: (B) => B.getIdentityProvider('aws.auth#sigv4'),
          signer: new y74.AwsSdkSigV4Signer(),
        },
        {
          schemeId: 'smithy.api#noAuth',
          identityProvider: (B) => B.getIdentityProvider('smithy.api#noAuth') || (async () => ({})),
          signer: new k74.NoAuthSigner(),
        },
      ],
      logger: A?.logger ?? new x74.NoOpLogger(),
      serviceId: A?.serviceId ?? 'SSO',
      urlParser: A?.urlParser ?? f74.parseUrl,
      utf8Decoder: A?.utf8Decoder ?? DsA.fromUtf8,
      utf8Encoder: A?.utf8Encoder ?? DsA.toUtf8,
    };
  };
ZsA.getRuntimeConfig = g74;
