// Module: aoA
// Params: ioA

Object.defineProperty(ioA, '__esModule', { value: !0 });
ioA.getRuntimeConfig = void 0;
var wZ4 = KS1(),
  EZ4 = wZ4.__importDefault(HS1()),
  UZ4 = c8(),
  poA = $P(),
  nB1 = QZ(),
  NZ4 = qP(),
  coA = gW(),
  Gv = hX(),
  loA = GU(),
  $Z4 = MP(),
  qZ4 = KM(),
  MZ4 = uoA(),
  LZ4 = T3(),
  RZ4 = RP(),
  OZ4 = T3(),
  TZ4 = (A) => {
    OZ4.emitWarningIfUnsupportedVersion(process.version);
    let B = RZ4.resolveDefaultsModeConfig(A),
      Q = () => B().then(LZ4.loadConfigsForDefaultMode),
      I = MZ4.getRuntimeConfig(A);
    UZ4.emitWarningIfUnsupportedVersion(process.version);
    let G = { profile: A?.profile };
    return {
      ...I,
      ...A,
      runtime: 'node',
      defaultsMode: B,
      bodyLengthChecker: A?.bodyLengthChecker ?? $Z4.calculateBodyLength,
      defaultUserAgentProvider:
        A?.defaultUserAgentProvider ??
        poA.createDefaultUserAgentProvider({
          serviceId: I.serviceId,
          clientVersion: EZ4.default.version,
        }),
      maxAttempts: A?.maxAttempts ?? Gv.loadConfig(coA.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
      region:
        A?.region ??
        Gv.loadConfig(nB1.NODE_REGION_CONFIG_OPTIONS, {
          ...nB1.NODE_REGION_CONFIG_FILE_OPTIONS,
          ...G,
        }),
      requestHandler: loA.NodeHttpHandler.create(A?.requestHandler ?? Q),
      retryMode:
        A?.retryMode ??
        Gv.loadConfig(
          {
            ...coA.NODE_RETRY_MODE_CONFIG_OPTIONS,
            default: async () => (await Q()).retryMode || qZ4.DEFAULT_RETRY_MODE,
          },
          A
        ),
      sha256: A?.sha256 ?? NZ4.Hash.bind(null, 'sha256'),
      streamCollector: A?.streamCollector ?? loA.streamCollector,
      useDualstackEndpoint:
        A?.useDualstackEndpoint ?? Gv.loadConfig(nB1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, G),
      useFipsEndpoint:
        A?.useFipsEndpoint ?? Gv.loadConfig(nB1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, G),
      userAgentAppId: A?.userAgentAppId ?? Gv.loadConfig(poA.NODE_APP_ID_CONFIG_OPTIONS, G),
    };
  };
ioA.getRuntimeConfig = TZ4;
