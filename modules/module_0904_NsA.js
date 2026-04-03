// Module: NsA
// Params: EsA

Object.defineProperty(EsA, '__esModule', { value: !0 });
EsA.getRuntimeConfig = void 0;
var DI4 = mnA(),
  ZI4 = DI4.__importDefault(dnA()),
  YI4 = c8(),
  HsA = $P(),
  PB1 = QZ(),
  WI4 = qP(),
  zsA = gW(),
  sf = hX(),
  wsA = GU(),
  FI4 = MP(),
  JI4 = KM(),
  CI4 = WsA(),
  XI4 = ll(),
  VI4 = RP(),
  KI4 = ll(),
  HI4 = (A) => {
    KI4.emitWarningIfUnsupportedVersion(process.version);
    let B = VI4.resolveDefaultsModeConfig(A),
      Q = () => B().then(XI4.loadConfigsForDefaultMode),
      I = CI4.getRuntimeConfig(A);
    YI4.emitWarningIfUnsupportedVersion(process.version);
    let G = { profile: A?.profile };
    return {
      ...I,
      ...A,
      runtime: 'node',
      defaultsMode: B,
      bodyLengthChecker: A?.bodyLengthChecker ?? FI4.calculateBodyLength,
      defaultUserAgentProvider:
        A?.defaultUserAgentProvider ??
        HsA.createDefaultUserAgentProvider({
          serviceId: I.serviceId,
          clientVersion: ZI4.default.version,
        }),
      maxAttempts: A?.maxAttempts ?? sf.loadConfig(zsA.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
      region:
        A?.region ??
        sf.loadConfig(PB1.NODE_REGION_CONFIG_OPTIONS, {
          ...PB1.NODE_REGION_CONFIG_FILE_OPTIONS,
          ...G,
        }),
      requestHandler: wsA.NodeHttpHandler.create(A?.requestHandler ?? Q),
      retryMode:
        A?.retryMode ??
        sf.loadConfig(
          {
            ...zsA.NODE_RETRY_MODE_CONFIG_OPTIONS,
            default: async () => (await Q()).retryMode || JI4.DEFAULT_RETRY_MODE,
          },
          A
        ),
      sha256: A?.sha256 ?? WI4.Hash.bind(null, 'sha256'),
      streamCollector: A?.streamCollector ?? wsA.streamCollector,
      useDualstackEndpoint:
        A?.useDualstackEndpoint ?? sf.loadConfig(PB1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, G),
      useFipsEndpoint:
        A?.useFipsEndpoint ?? sf.loadConfig(PB1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, G),
      userAgentAppId: A?.userAgentAppId ?? sf.loadConfig(HsA.NODE_APP_ID_CONFIG_OPTIONS, G),
    };
  };
EsA.getRuntimeConfig = HI4;
