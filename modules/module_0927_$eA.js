// Module: $eA
// Params: UeA

Object.defineProperty(UeA, '__esModule', { value: !0 });
UeA.defaultEndpointResolver = void 0;
var ZW4 = IM(),
  yS1 = QM(),
  YW4 = EeA(),
  WW4 = new yS1.EndpointCache({
    size: 50,
    params: ['Endpoint', 'Region', 'UseDualStack', 'UseFIPS', 'UseGlobalEndpoint'],
  }),
  FW4 = (A, B = {}) => {
    return WW4.get(A, () =>
      yS1.resolveEndpoint(YW4.ruleSet, { endpointParams: A, logger: B.logger })
    );
  };
UeA.defaultEndpointResolver = FW4;
yS1.customEndpointFunctions.aws = ZW4.awsEndpointFunctions;
