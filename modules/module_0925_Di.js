// Module: Di
// Params: ntA

Object.defineProperty(ntA, '__esModule', { value: !0 });
ntA.commonParams = ntA.resolveClientEndpointParameters = void 0;
var IW4 = (A) => {
  return Object.assign(A, {
    useDualstackEndpoint: A.useDualstackEndpoint ?? !1,
    useFipsEndpoint: A.useFipsEndpoint ?? !1,
    useGlobalEndpoint: A.useGlobalEndpoint ?? !1,
    defaultSigningName: 'sts',
  });
};
ntA.resolveClientEndpointParameters = IW4;
ntA.commonParams = {
  UseGlobalEndpoint: { type: 'builtInParams', name: 'useGlobalEndpoint' },
  UseFIPS: { type: 'builtInParams', name: 'useFipsEndpoint' },
  Endpoint: { type: 'builtInParams', name: 'endpoint' },
  Region: { type: 'builtInParams', name: 'region' },
  UseDualStack: { type: 'builtInParams', name: 'useDualstackEndpoint' },
};
