// Module: d3A
// Params: m3A

Object.defineProperty(m3A, '__esModule', { value: !0 });
var b3A = I4(),
  g3A = 'SessionTiming',
  ne2 = () => {
    let A = Date.now();
    return {
      name: g3A,
      setupOnce() {},
      processEvent(B) {
        let Q = Date.now();
        return {
          ...B,
          extra: {
            ...B.extra,
            ['session:start']: A,
            ['session:duration']: Q - A,
            ['session:end']: Q,
          },
        };
      },
    };
  },
  h3A = b3A.defineIntegration(ne2),
  ae2 = b3A.convertIntegrationFnToClass(g3A, h3A);
m3A.SessionTiming = ae2;
m3A.sessionTimingIntegration = h3A;
