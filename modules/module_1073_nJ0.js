// Module: nJ0
// Params: lJ0

Object.defineProperty(lJ0, '__esModule', { value: !0 });
lJ0.defaultEndpointResolver = void 0;
var lf4 = IM(),
  pf1 = QM(),
  if4 = cJ0(),
  nf4 = new pf1.EndpointCache({
    size: 50,
    params: ['Endpoint', 'Region', 'UseDualStack', 'UseFIPS'],
  }),
  af4 = (A, B = {}) => {
    return nf4.get(A, () =>
      pf1.resolveEndpoint(if4.ruleSet, { endpointParams: A, logger: B.logger })
    );
  };
lJ0.defaultEndpointResolver = af4;
pf1.customEndpointFunctions.aws = lf4.awsEndpointFunctions;
