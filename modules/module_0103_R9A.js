// Module: R9A
// Params: L9A

Object.defineProperty(L9A, '__esModule', { value: !0 });
var hh2 = tA(),
  $9A = qE(),
  N9A = U9A(),
  q9A = 'ModuleMetadata',
  mh2 = () => {
    return {
      name: q9A,
      setupOnce() {},
      setup(A) {
        if (typeof A.on !== 'function') return;
        A.on('beforeEnvelope', (B) => {
          hh2.forEachEnvelopeItem(B, (Q, I) => {
            if (I === 'event') {
              let G = Array.isArray(Q) ? Q[1] : void 0;
              if (G) (N9A.stripMetadataFromStackFrames(G), (Q[1] = G));
            }
          });
        });
      },
      processEvent(A, B, Q) {
        let I = Q.getOptions().stackParser;
        return (N9A.addMetadataToStackFrames(I, A), A);
      },
    };
  },
  M9A = $9A.defineIntegration(mh2),
  dh2 = $9A.convertIntegrationFnToClass(q9A, M9A);
L9A.ModuleMetadata = dh2;
L9A.moduleMetadataIntegration = M9A;
