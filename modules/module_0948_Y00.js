// Module: Y00
// Params: D00

Object.defineProperty(D00, '__esModule', { value: !0 });
D00.getRuntimeConfig = void 0;
var yX4 = ElA(),
  kX4 = yX4.__importDefault(UlA()),
  xX4 = c8(),
  fX4 = Ji(),
  Q00 = $P(),
  K31 = QZ(),
  vX4 = qP(),
  I00 = gW(),
  qv = hX(),
  G00 = GU(),
  bX4 = MP(),
  gX4 = KM(),
  hX4 = B00(),
  mX4 = Hi(),
  dX4 = RP(),
  uX4 = Hi(),
  pX4 = (A) => {
    uX4.emitWarningIfUnsupportedVersion(process.version);
    let B = dX4.resolveDefaultsModeConfig(A),
      Q = () => B().then(mX4.loadConfigsForDefaultMode),
      I = hX4.getRuntimeConfig(A);
    xX4.emitWarningIfUnsupportedVersion(process.version);
    let G = { profile: A?.profile };
    return {
      ...I,
      ...A,
      runtime: 'node',
      defaultsMode: B,
      bodyLengthChecker: A?.bodyLengthChecker ?? bX4.calculateBodyLength,
      credentialDefaultProvider: A?.credentialDefaultProvider ?? fX4.defaultProvider,
      defaultUserAgentProvider:
        A?.defaultUserAgentProvider ??
        Q00.createDefaultUserAgentProvider({
          serviceId: I.serviceId,
          clientVersion: kX4.default.version,
        }),
      maxAttempts: A?.maxAttempts ?? qv.loadConfig(I00.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
      region:
        A?.region ??
        qv.loadConfig(K31.NODE_REGION_CONFIG_OPTIONS, {
          ...K31.NODE_REGION_CONFIG_FILE_OPTIONS,
          ...G,
        }),
      requestHandler: G00.NodeHttpHandler.create(A?.requestHandler ?? Q),
      retryMode:
        A?.retryMode ??
        qv.loadConfig(
          {
            ...I00.NODE_RETRY_MODE_CONFIG_OPTIONS,
            default: async () => (await Q()).retryMode || gX4.DEFAULT_RETRY_MODE,
          },
          A
        ),
      sha256: A?.sha256 ?? vX4.Hash.bind(null, 'sha256'),
      streamCollector: A?.streamCollector ?? G00.streamCollector,
      useDualstackEndpoint:
        A?.useDualstackEndpoint ?? qv.loadConfig(K31.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, G),
      useFipsEndpoint:
        A?.useFipsEndpoint ?? qv.loadConfig(K31.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, G),
      userAgentAppId: A?.userAgentAppId ?? qv.loadConfig(Q00.NODE_APP_ID_CONFIG_OPTIONS, G),
    };
  };
D00.getRuntimeConfig = pX4;
