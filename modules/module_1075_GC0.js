// Module: GC0
// Params: QC0

Object.defineProperty(QC0, '__esModule', { value: !0 });
QC0.getRuntimeConfig = void 0;
var Qv4 = cF0(),
  Iv4 = Qv4.__importDefault(lF0()),
  Gv4 = c8(),
  Dv4 = Ji(),
  eJ0 = $P(),
  fG1 = QZ(),
  Zv4 = qP(),
  AC0 = gW(),
  gb = hX(),
  BC0 = GU(),
  Yv4 = MP(),
  Wv4 = KM(),
  Fv4 = tJ0(),
  Jv4 = Ra(),
  Cv4 = RP(),
  Xv4 = Ra(),
  Vv4 = (A) => {
    Xv4.emitWarningIfUnsupportedVersion(process.version);
    let B = Cv4.resolveDefaultsModeConfig(A),
      Q = () => B().then(Jv4.loadConfigsForDefaultMode),
      I = Fv4.getRuntimeConfig(A);
    Gv4.emitWarningIfUnsupportedVersion(process.version);
    let G = { profile: A?.profile };
    return {
      ...I,
      ...A,
      runtime: 'node',
      defaultsMode: B,
      bodyLengthChecker: A?.bodyLengthChecker ?? Yv4.calculateBodyLength,
      credentialDefaultProvider: A?.credentialDefaultProvider ?? Dv4.defaultProvider,
      defaultUserAgentProvider:
        A?.defaultUserAgentProvider ??
        eJ0.createDefaultUserAgentProvider({
          serviceId: I.serviceId,
          clientVersion: Iv4.default.version,
        }),
      maxAttempts: A?.maxAttempts ?? gb.loadConfig(AC0.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
      region:
        A?.region ??
        gb.loadConfig(fG1.NODE_REGION_CONFIG_OPTIONS, {
          ...fG1.NODE_REGION_CONFIG_FILE_OPTIONS,
          ...G,
        }),
      requestHandler: BC0.NodeHttpHandler.create(A?.requestHandler ?? Q),
      retryMode:
        A?.retryMode ??
        gb.loadConfig(
          {
            ...AC0.NODE_RETRY_MODE_CONFIG_OPTIONS,
            default: async () => (await Q()).retryMode || Wv4.DEFAULT_RETRY_MODE,
          },
          A
        ),
      sha256: A?.sha256 ?? Zv4.Hash.bind(null, 'sha256'),
      streamCollector: A?.streamCollector ?? BC0.streamCollector,
      useDualstackEndpoint:
        A?.useDualstackEndpoint ?? gb.loadConfig(fG1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, G),
      useFipsEndpoint:
        A?.useFipsEndpoint ?? gb.loadConfig(fG1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, G),
      userAgentAppId: A?.userAgentAppId ?? gb.loadConfig(eJ0.NODE_APP_ID_CONFIG_OPTIONS, G),
    };
  };
QC0.getRuntimeConfig = Vv4;
