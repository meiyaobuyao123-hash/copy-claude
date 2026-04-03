// Module: Gi
// Params: xS1

Object.defineProperty(xS1, '__esModule', { value: !0 });
xS1.STSClient = xS1.__Client = void 0;
var ceA = WP(),
  yW4 = FP(),
  kW4 = JP(),
  leA = FM(),
  xW4 = QZ(),
  kS1 = o7(),
  fW4 = zP(),
  vW4 = mH(),
  ieA = gW(),
  aeA = T3();
Object.defineProperty(xS1, '__Client', {
  enumerable: !0,
  get: function () {
    return aeA.Client;
  },
});
var neA = PS1(),
  bW4 = Di(),
  gW4 = keA(),
  hW4 = peA();
class seA extends aeA.Client {
  config;
  constructor(...[A]) {
    let B = gW4.getRuntimeConfig(A || {});
    super(B);
    this.initConfig = B;
    let Q = bW4.resolveClientEndpointParameters(B),
      I = leA.resolveUserAgentConfig(Q),
      G = ieA.resolveRetryConfig(I),
      D = xW4.resolveRegionConfig(G),
      Z = ceA.resolveHostHeaderConfig(D),
      Y = vW4.resolveEndpointConfig(Z),
      W = neA.resolveHttpAuthSchemeConfig(Y),
      F = hW4.resolveRuntimeExtensions(W, A?.extensions || []);
    ((this.config = F),
      this.middlewareStack.use(leA.getUserAgentPlugin(this.config)),
      this.middlewareStack.use(ieA.getRetryPlugin(this.config)),
      this.middlewareStack.use(fW4.getContentLengthPlugin(this.config)),
      this.middlewareStack.use(ceA.getHostHeaderPlugin(this.config)),
      this.middlewareStack.use(yW4.getLoggerPlugin(this.config)),
      this.middlewareStack.use(kW4.getRecursionDetectionPlugin(this.config)),
      this.middlewareStack.use(
        kS1.getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
          httpAuthSchemeParametersProvider: neA.defaultSTSHttpAuthSchemeParametersProvider,
          identityProviderConfigProvider: async (J) =>
            new kS1.DefaultIdentityProviderConfig({ 'aws.auth#sigv4': J.credentials }),
        })
      ),
      this.middlewareStack.use(kS1.getHttpSigningPlugin(this.config)));
  }
  destroy() {
    super.destroy();
  }
}
xS1.STSClient = seA;
