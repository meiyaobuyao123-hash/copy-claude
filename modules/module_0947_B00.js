// Module: B00
// Params: eA0

Object.defineProperty(eA0, '__esModule', { value: !0 });
eA0.getRuntimeConfig = void 0;
var OX4 = c8(),
  TX4 = Hi(),
  PX4 = WU(),
  oA0 = jA0(),
  tA0 = DQ(),
  SX4 = QP1(),
  _X4 = rA0(),
  jX4 = (A) => {
    return {
      apiVersion: '2023-04-20',
      base64Decoder: A?.base64Decoder ?? oA0.fromBase64,
      base64Encoder: A?.base64Encoder ?? oA0.toBase64,
      disableHostPrefix: A?.disableHostPrefix ?? !1,
      endpointProvider: A?.endpointProvider ?? _X4.defaultEndpointResolver,
      extensions: A?.extensions ?? [],
      httpAuthSchemeProvider: A?.httpAuthSchemeProvider ?? SX4.defaultBedrockHttpAuthSchemeProvider,
      httpAuthSchemes: A?.httpAuthSchemes ?? [
        {
          schemeId: 'aws.auth#sigv4',
          identityProvider: (B) => B.getIdentityProvider('aws.auth#sigv4'),
          signer: new OX4.AwsSdkSigV4Signer(),
        },
      ],
      logger: A?.logger ?? new TX4.NoOpLogger(),
      serviceId: A?.serviceId ?? 'Bedrock',
      urlParser: A?.urlParser ?? PX4.parseUrl,
      utf8Decoder: A?.utf8Decoder ?? tA0.fromUtf8,
      utf8Encoder: A?.utf8Encoder ?? tA0.toUtf8,
    };
  };
eA0.getRuntimeConfig = jX4;
