// Module: O$0
// Params: L$0

Object.defineProperty(L$0, '__esModule', { value: !0 });
L$0.getRuntimeConfig = void 0;
var la4 = c8(),
  ia4 = ua(),
  na4 = WU(),
  q$0 = Q$0(),
  M$0 = DQ(),
  aa4 = lv1(),
  sa4 = $$0(),
  ra4 = (A) => {
    return {
      apiVersion: '2023-09-30',
      base64Decoder: A?.base64Decoder ?? q$0.fromBase64,
      base64Encoder: A?.base64Encoder ?? q$0.toBase64,
      disableHostPrefix: A?.disableHostPrefix ?? !1,
      endpointProvider: A?.endpointProvider ?? sa4.defaultEndpointResolver,
      extensions: A?.extensions ?? [],
      httpAuthSchemeProvider:
        A?.httpAuthSchemeProvider ?? aa4.defaultBedrockRuntimeHttpAuthSchemeProvider,
      httpAuthSchemes: A?.httpAuthSchemes ?? [
        {
          schemeId: 'aws.auth#sigv4',
          identityProvider: (B) => B.getIdentityProvider('aws.auth#sigv4'),
          signer: new la4.AwsSdkSigV4Signer(),
        },
      ],
      logger: A?.logger ?? new ia4.NoOpLogger(),
      serviceId: A?.serviceId ?? 'Bedrock Runtime',
      urlParser: A?.urlParser ?? na4.parseUrl,
      utf8Decoder: A?.utf8Decoder ?? M$0.fromUtf8,
      utf8Encoder: A?.utf8Encoder ?? M$0.toUtf8,
    };
  };
L$0.getRuntimeConfig = ra4;
