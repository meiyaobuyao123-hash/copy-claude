// Module: OQA
// Params: RQA

Object.defineProperty(RQA, '__esModule', { value: !0 });
var BA9 = I4(),
  QA9 = a01();
function IA9(A) {
  return new Proxy(A, {
    get(B, Q) {
      if (Q === 'scheduleJob')
        return new Proxy(B.scheduleJob, {
          apply(I, G, D) {
            let [Z, Y] = D;
            if (typeof Z !== 'string' || typeof Y !== 'string')
              throw new Error(
                "Automatic instrumentation of 'node-schedule' requires the first parameter of 'scheduleJob' to be a job name string and the second parameter to be a crontab string"
              );
            let W = Z,
              F = Y;
            return BA9.withMonitor(
              W,
              () => {
                return I.apply(G, D);
              },
              { schedule: { type: 'crontab', value: QA9.replaceCronNames(F) } }
            );
          },
        });
      return B[Q];
    },
  });
}
RQA.instrumentNodeSchedule = IA9;
