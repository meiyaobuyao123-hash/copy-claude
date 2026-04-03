// Module: G3A
// Params: I3A

Object.defineProperty(I3A, '__esModule', { value: !0 });
var A3A = I4(),
  Ve2 = tA(),
  B3A = 'Debug',
  Ke2 = (A = {}) => {
    let B = { debugger: !1, stringify: !1, ...A };
    return {
      name: B3A,
      setupOnce() {},
      setup(Q) {
        if (!Q.on) return;
        Q.on('beforeSendEvent', (I, G) => {
          if (B.debugger) debugger;
          Ve2.consoleSandbox(() => {
            if (B.stringify) {
              if ((console.log(JSON.stringify(I, null, 2)), G && Object.keys(G).length))
                console.log(JSON.stringify(G, null, 2));
            } else if ((console.log(I), G && Object.keys(G).length)) console.log(G);
          });
        });
      },
    };
  },
  Q3A = A3A.defineIntegration(Ke2),
  He2 = A3A.convertIntegrationFnToClass(B3A, Q3A);
I3A.Debug = He2;
I3A.debugIntegration = Q3A;
