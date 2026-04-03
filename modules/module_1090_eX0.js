// Module: eX0
// Params: oX0

Object.defineProperty(oX0, '__esModule', { value: !0 });
oX0.fromTemporaryCredentials = void 0;
var fg4 = QZ(),
  vg4 = hX(),
  bg4 = tf1(),
  gg4 = rX0(),
  hg4 = (A) => {
    return gg4.fromTemporaryCredentials(
      A,
      bg4.fromNodeProviderChain,
      async ({ profile: B = process.env.AWS_PROFILE }) =>
        vg4.loadConfig(
          {
            environmentVariableSelector: (Q) => Q.AWS_REGION,
            configFileSelector: (Q) => {
              return Q.region;
            },
            default: () => {
              return;
            },
          },
          { ...fg4.NODE_REGION_CONFIG_FILE_OPTIONS, profile: B }
        )()
    );
  };
oX0.fromTemporaryCredentials = hg4;
