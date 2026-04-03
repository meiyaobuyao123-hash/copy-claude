// Module: $$0
// Params: U$0

Object.defineProperty(U$0, '__esModule', { value: !0 });
U$0.defaultEndpointResolver = void 0;
var da4 = IM(),
  Ub1 = QM(),
  ua4 = E$0(),
  pa4 = new Ub1.EndpointCache({
    size: 50,
    params: ['Endpoint', 'Region', 'UseDualStack', 'UseFIPS'],
  }),
  ca4 = (A, B = {}) => {
    return pa4.get(A, () =>
      Ub1.resolveEndpoint(ua4.ruleSet, { endpointParams: A, logger: B.logger })
    );
  };
U$0.defaultEndpointResolver = ca4;
Ub1.customEndpointFunctions.aws = da4.awsEndpointFunctions;
