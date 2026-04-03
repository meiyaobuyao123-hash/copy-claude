// Module: EiA
// Params: ziA

Object.defineProperty(ziA, '__esModule', { value: !0 });
ziA.checkUrl = void 0;
var Y84 = t7(),
  W84 = '169.254.170.2',
  F84 = '169.254.170.23',
  J84 = '[fd00:ec2::23]',
  C84 = (A, B) => {
    if (A.protocol === 'https:') return;
    if (A.hostname === W84 || A.hostname === F84 || A.hostname === J84) return;
    if (A.hostname.includes('[')) {
      if (A.hostname === '[::1]' || A.hostname === '[0000:0000:0000:0000:0000:0000:0000:0001]')
        return;
    } else {
      if (A.hostname === 'localhost') return;
      let Q = A.hostname.split('.'),
        I = (G) => {
          let D = parseInt(G, 10);
          return 0 <= D && D <= 255;
        };
      if (Q[0] === '127' && I(Q[1]) && I(Q[2]) && I(Q[3]) && Q.length === 4) return;
    }
    throw new Y84.CredentialsProviderError(
      `URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]`,
      { logger: B }
    );
  };
ziA.checkUrl = C84;
