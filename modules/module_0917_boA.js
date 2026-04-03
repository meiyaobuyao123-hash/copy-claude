// Module: boA
// Params: foA

Object.defineProperty(foA, '__esModule', { value: !0 });
foA.defaultEndpointResolver = void 0;
var ZZ4 = IM(),
  $S1 = QM(),
  YZ4 = xoA(),
  WZ4 = new $S1.EndpointCache({
    size: 50,
    params: ['Endpoint', 'Region', 'UseDualStack', 'UseFIPS'],
  }),
  FZ4 = (A, B = {}) => {
    return WZ4.get(A, () =>
      $S1.resolveEndpoint(YZ4.ruleSet, { endpointParams: A, logger: B.logger })
    );
  };
foA.defaultEndpointResolver = FZ4;
$S1.customEndpointFunctions.aws = ZZ4.awsEndpointFunctions;
