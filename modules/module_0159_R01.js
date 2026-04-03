// Module: R01
// Params: W8A

Object.defineProperty(W8A, '__esModule', { value: !0 });
var sa2 = D1('util'),
  L01 = I4(),
  D8A = tA(),
  Z8A = 'Console',
  ra2 = () => {
    return {
      name: Z8A,
      setupOnce() {},
      setup(A) {
        D8A.addConsoleInstrumentationHandler(({ args: B, level: Q }) => {
          if (L01.getClient() !== A) return;
          L01.addBreadcrumb(
            {
              category: 'console',
              level: D8A.severityLevelFromString(Q),
              message: sa2.format.apply(void 0, B),
            },
            { input: [...B], level: Q }
          );
        });
      },
    };
  },
  Y8A = L01.defineIntegration(ra2),
  oa2 = L01.convertIntegrationFnToClass(Z8A, Y8A);
W8A.Console = oa2;
W8A.consoleIntegration = Y8A;
