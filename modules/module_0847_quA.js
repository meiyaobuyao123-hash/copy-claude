// Module: quA
// Params: NuA

Object.defineProperty(NuA, '__esModule', { value: !0 });
NuA.getEndpointUrlConfig = void 0;
var wuA = XM(),
  EuA = 'AWS_ENDPOINT_URL',
  UuA = 'endpoint_url',
  v04 = (A) => ({
    environmentVariableSelector: (B) => {
      let Q = A.split(' ').map((D) => D.toUpperCase()),
        I = B[[EuA, ...Q].join('_')];
      if (I) return I;
      let G = B[EuA];
      if (G) return G;
      return;
    },
    configFileSelector: (B, Q) => {
      if (Q && B.services) {
        let G = Q[['services', B.services].join(wuA.CONFIG_PREFIX_SEPARATOR)];
        if (G) {
          let D = A.split(' ').map((Y) => Y.toLowerCase()),
            Z = G[[D.join('_'), UuA].join(wuA.CONFIG_PREFIX_SEPARATOR)];
          if (Z) return Z;
        }
      }
      let I = B[UuA];
      if (I) return I;
      return;
    },
    default: void 0,
  });
NuA.getEndpointUrlConfig = v04;
