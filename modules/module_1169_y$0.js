// Module: y$0
// Params: _$0

Object.defineProperty(_$0, '__esModule', { value: !0 });
_$0.getRuntimeConfig = void 0;
var oa4 = aE0(),
  ta4 = oa4.__importDefault(sE0()),
  ea4 = c8(),
  As4 = Ji(),
  Bs4 = FN0(),
  T$0 = $P(),
  AZ1 = QZ(),
  Qs4 = NN0(),
  Is4 = qP(),
  P$0 = gW(),
  Ig = hX(),
  S$0 = GU(),
  Gs4 = MP(),
  Ds4 = KM(),
  Zs4 = O$0(),
  Ys4 = ua(),
  Ws4 = RP(),
  Fs4 = ua(),
  Js4 = (A) => {
    Fs4.emitWarningIfUnsupportedVersion(process.version);
    let B = Ws4.resolveDefaultsModeConfig(A),
      Q = () => B().then(Ys4.loadConfigsForDefaultMode),
      I = Zs4.getRuntimeConfig(A);
    ea4.emitWarningIfUnsupportedVersion(process.version);
    let G = { profile: A?.profile };
    return {
      ...I,
      ...A,
      runtime: 'node',
      defaultsMode: B,
      bodyLengthChecker: A?.bodyLengthChecker ?? Gs4.calculateBodyLength,
      credentialDefaultProvider: A?.credentialDefaultProvider ?? As4.defaultProvider,
      defaultUserAgentProvider:
        A?.defaultUserAgentProvider ??
        T$0.createDefaultUserAgentProvider({
          serviceId: I.serviceId,
          clientVersion: ta4.default.version,
        }),
      eventStreamPayloadHandlerProvider:
        A?.eventStreamPayloadHandlerProvider ?? Bs4.eventStreamPayloadHandlerProvider,
      eventStreamSerdeProvider: A?.eventStreamSerdeProvider ?? Qs4.eventStreamSerdeProvider,
      maxAttempts: A?.maxAttempts ?? Ig.loadConfig(P$0.NODE_MAX_ATTEMPT_CONFIG_OPTIONS, A),
      region:
        A?.region ??
        Ig.loadConfig(AZ1.NODE_REGION_CONFIG_OPTIONS, {
          ...AZ1.NODE_REGION_CONFIG_FILE_OPTIONS,
          ...G,
        }),
      requestHandler: S$0.NodeHttpHandler.create(A?.requestHandler ?? Q),
      retryMode:
        A?.retryMode ??
        Ig.loadConfig(
          {
            ...P$0.NODE_RETRY_MODE_CONFIG_OPTIONS,
            default: async () => (await Q()).retryMode || Ds4.DEFAULT_RETRY_MODE,
          },
          A
        ),
      sha256: A?.sha256 ?? Is4.Hash.bind(null, 'sha256'),
      streamCollector: A?.streamCollector ?? S$0.streamCollector,
      useDualstackEndpoint:
        A?.useDualstackEndpoint ?? Ig.loadConfig(AZ1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, G),
      useFipsEndpoint:
        A?.useFipsEndpoint ?? Ig.loadConfig(AZ1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, G),
      userAgentAppId: A?.userAgentAppId ?? Ig.loadConfig(T$0.NODE_APP_ID_CONFIG_OPTIONS, G),
    };
  };
_$0.getRuntimeConfig = Js4;
