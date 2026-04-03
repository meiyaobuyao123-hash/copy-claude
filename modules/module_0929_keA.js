// Module: keA
// Params: jeA

Object.defineProperty(jeA, '__esModule', { value: !0 });
jeA.getRuntimeConfig = void 0;
var wW4 = KS1(),
  EW4 = wW4.__importDefault(HS1()),
  TeA = c8(),
  PeA = $P(),
  B31 = QZ(),
  UW4 = o7(),
  NW4 = qP(),
  SeA = gW(),
  Yv = hX(),
  _eA = GU(),
  $W4 = MP(),
  qW4 = KM(),
  MW4 = OeA(),
  LW4 = T3(),
  RW4 = RP(),
  OW4 = T3(),
  TW4 = (A) => {
    OW4.emitWarningIfUnsupportedVersion(process.version);
    let B = RW4.resolveDefaultsModeConfig(A),
      Q = () => B().then(LW4.loadConfigsForDefaultMode),
      I = MW4.getRuntimeConfig(A);
    TeA.emitWarningIfUnsupportedVersion(process.version);
    let G = { profile: A?.profile };
    return {
      ...I,
      ...A,
      runtime: 'node',
      defaultsMode: B,
      bodyLengthChecker: A?.bodyLengthChecker ?? $W4.calculateBodyLength,
      defaultUserAgentProvider:
        A?.defaultUserAgentProvider ??
        PeA.createDefaultUserAgentProvider({
          serviceId: I.serviceId,
          clientVersion: EW4.default.version,
        }),
      httpAuthSchemes: A?.httpAuthSchemes ?? [
        {
          schemeId: 'aws.auth#sigv4',
          identityProvider: (D) =>
            D.getIdentityProvider('aws.auth#sigv4') ||
            (async (Z) => await A.credentialDefaultProvider(Z?.__config || {})()),
          signer: new TeA.AwsSdkSigV4Signer(),
        },
        {
          schemeId: 'smithy.api#noAuth',
          identityProvider: (D) => D.getIdentityProvider('smithy.api#noAuth') || (async () => ({})),
          signer: new UW4.NoAuthSigner(),
        },
      ],
      maxAttempts: A?.maxAttempts ?? Yv.loadConfig(SeA.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
      region:
        A?.region ??
        Yv.loadConfig(B31.NODE_REGION_CONFIG_OPTIONS, {
          ...B31.NODE_REGION_CONFIG_FILE_OPTIONS,
          ...G,
        }),
      requestHandler: _eA.NodeHttpHandler.create(A?.requestHandler ?? Q),
      retryMode:
        A?.retryMode ??
        Yv.loadConfig(
          {
            ...SeA.NODE_RETRY_MODE_CONFIG_OPTIONS,
            default: async () => (await Q()).retryMode || qW4.DEFAULT_RETRY_MODE,
          },
          A
        ),
      sha256: A?.sha256 ?? NW4.Hash.bind(null, 'sha256'),
      streamCollector: A?.streamCollector ?? _eA.streamCollector,
      useDualstackEndpoint:
        A?.useDualstackEndpoint ?? Yv.loadConfig(B31.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, G),
      useFipsEndpoint:
        A?.useFipsEndpoint ?? Yv.loadConfig(B31.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, G),
      userAgentAppId: A?.userAgentAppId ?? Yv.loadConfig(PeA.NODE_APP_ID_CONFIG_OPTIONS, G),
    };
  };
jeA.getRuntimeConfig = TW4;
