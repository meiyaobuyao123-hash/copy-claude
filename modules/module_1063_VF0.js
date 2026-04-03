// Module: VF0
// Params: XF0

Object.defineProperty(XF0, '__esModule', { value: !0 });
XF0.propertyProviderChain = XF0.createCredentialChain = void 0;
var Ax4 = t7(),
  Bx4 = (...A) => {
    let B = -1,
      I = Object.assign(
        async (G) => {
          let D = await XF0.propertyProviderChain(...A)(G);
          if (!D.expiration && B !== -1) D.expiration = new Date(Date.now() + B);
          return D;
        },
        {
          expireAfter(G) {
            if (G < 300000)
              throw new Error(
                '@aws-sdk/credential-providers - createCredentialChain(...).expireAfter(ms) may not be called with a duration lower than five minutes.'
              );
            return ((B = G), I);
          },
        }
      );
    return I;
  };
XF0.createCredentialChain = Bx4;
var Qx4 =
  (...A) =>
  async (B) => {
    if (A.length === 0) throw new Ax4.ProviderError('No providers in chain');
    let Q;
    for (let I of A)
      try {
        return await I(B);
      } catch (G) {
        if (((Q = G), G?.tryNextLink)) continue;
        throw G;
      }
    throw Q;
  };
XF0.propertyProviderChain = Qx4;
