// Module: rA0
// Params: aA0

Object.defineProperty(aA0, '__esModule', { value: !0 });
aA0.defaultEndpointResolver = void 0;
var qX4 = IM(),
  v_1 = QM(),
  MX4 = nA0(),
  LX4 = new v_1.EndpointCache({
    size: 50,
    params: ['Endpoint', 'Region', 'UseDualStack', 'UseFIPS'],
  }),
  RX4 = (A, B = {}) => {
    return LX4.get(A, () =>
      v_1.resolveEndpoint(MX4.ruleSet, { endpointParams: A, logger: B.logger })
    );
  };
aA0.defaultEndpointResolver = RX4;
v_1.customEndpointFunctions.aws = qX4.awsEndpointFunctions;
