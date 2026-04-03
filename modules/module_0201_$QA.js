// Module: $QA
// Params: NQA

Object.defineProperty(NQA, '__esModule', { value: !0 });
var wQA = I4(),
  EQA = a01(),
  UQA = 'Automatic instrumentation of CronJob only supports crontab string';
function s19(A, B) {
  let Q = !1;
  return new Proxy(A, {
    construct(I, G) {
      let [D, Z, Y, W, F, ...J] = G;
      if (typeof D !== 'string') throw new Error(UQA);
      if (Q) throw new Error(`A job named '${B}' has already been scheduled`);
      Q = !0;
      let C = EQA.replaceCronNames(D);
      function X(V, K) {
        return wQA.withMonitor(
          B,
          () => {
            return Z(V, K);
          },
          { schedule: { type: 'crontab', value: C }, timezone: F || void 0 }
        );
      }
      return new I(D, X, Y, W, F, ...J);
    },
    get(I, G) {
      if (G === 'from')
        return (D) => {
          let { cronTime: Z, onTick: Y, timeZone: W } = D;
          if (typeof Z !== 'string') throw new Error(UQA);
          if (Q) throw new Error(`A job named '${B}' has already been scheduled`);
          Q = !0;
          let F = EQA.replaceCronNames(Z);
          return (
            (D.onTick = (J, C) => {
              return wQA.withMonitor(
                B,
                () => {
                  return Y(J, C);
                },
                { schedule: { type: 'crontab', value: F }, timezone: W || void 0 }
              );
            }),
            I.from(D)
          );
        };
      else return I[G];
    },
  });
}
NQA.instrumentCron = s19;
