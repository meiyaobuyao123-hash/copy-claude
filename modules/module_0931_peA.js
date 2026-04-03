// Module: peA
// Params: deA

Object.defineProperty(deA, '__esModule', { value: !0 });
deA.resolveRuntimeExtensions = void 0;
var beA = OP(),
  geA = sB1(),
  heA = T3(),
  meA = veA(),
  jW4 = (A, B) => {
    let Q = Object.assign(
      beA.getAwsRegionExtensionConfiguration(A),
      heA.getDefaultExtensionConfiguration(A),
      geA.getHttpHandlerExtensionConfiguration(A),
      meA.getHttpAuthExtensionConfiguration(A)
    );
    return (
      B.forEach((I) => I.configure(Q)),
      Object.assign(
        A,
        beA.resolveAwsRegionExtensionConfiguration(Q),
        heA.resolveDefaultRuntimeConfig(Q),
        geA.resolveHttpHandlerRuntimeConfig(Q),
        meA.resolveHttpAuthRuntimeConfig(Q)
      )
    );
  };
deA.resolveRuntimeExtensions = jW4;
