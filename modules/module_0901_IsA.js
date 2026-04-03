// Module: IsA
// Params: BsA

Object.defineProperty(BsA, '__esModule', { value: !0 });
BsA.defaultEndpointResolver = void 0;
var P74 = IM(),
  aP1 = QM(),
  S74 = AsA(),
  _74 = new aP1.EndpointCache({
    size: 50,
    params: ['Endpoint', 'Region', 'UseDualStack', 'UseFIPS'],
  }),
  j74 = (A, B = {}) => {
    return _74.get(A, () =>
      aP1.resolveEndpoint(S74.ruleSet, { endpointParams: A, logger: B.logger })
    );
  };
BsA.defaultEndpointResolver = j74;
aP1.customEndpointFunctions.aws = P74.awsEndpointFunctions;
