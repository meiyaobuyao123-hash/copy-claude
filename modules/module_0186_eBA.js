// Module: eBA
// Params: tBA

Object.defineProperty(tBA, '__esModule', { value: !0 });
var VT = I4(),
  KT = tA(),
  rBA = 'CaptureConsole',
  We2 = (A = {}) => {
    let B = A.levels || KT.CONSOLE_LEVELS;
    return {
      name: rBA,
      setupOnce() {},
      setup(Q) {
        if (!('console' in KT.GLOBAL_OBJ)) return;
        KT.addConsoleInstrumentationHandler(({ args: I, level: G }) => {
          if (VT.getClient() !== Q || !B.includes(G)) return;
          Je2(I, G);
        });
      },
    };
  },
  oBA = VT.defineIntegration(We2),
  Fe2 = VT.convertIntegrationFnToClass(rBA, oBA);
function Je2(A, B) {
  let Q = { level: KT.severityLevelFromString(B), extra: { arguments: A } };
  VT.withScope((I) => {
    if (
      (I.addEventProcessor((Z) => {
        return (
          (Z.logger = 'console'),
          KT.addExceptionMechanism(Z, { handled: !1, type: 'console' }),
          Z
        );
      }),
      B === 'assert' && A[0] === !1)
    ) {
      let Z = `Assertion failed: ${KT.safeJoin(A.slice(1), ' ') || 'console.assert'}`;
      (I.setExtra('arguments', A.slice(1)), VT.captureMessage(Z, Q));
      return;
    }
    let G = A.find((Z) => Z instanceof Error);
    if (B === 'error' && G) {
      VT.captureException(G, Q);
      return;
    }
    let D = KT.safeJoin(A, ' ');
    VT.captureMessage(D, Q);
  });
}
tBA.CaptureConsole = Fe2;
tBA.captureConsoleIntegration = oBA;
