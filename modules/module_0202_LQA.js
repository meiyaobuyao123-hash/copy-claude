// Module: LQA
// Params: MQA

var { _optionalChain: qQA } = tA();
Object.defineProperty(MQA, '__esModule', { value: !0 });
var o19 = I4(),
  t19 = a01();
function e19(A) {
  return new Proxy(A, {
    get(B, Q) {
      if (Q === 'schedule' && B.schedule)
        return new Proxy(B.schedule, {
          apply(I, G, D) {
            let [Z, , Y] = D;
            if (!qQA([Y, 'optionalAccess', (W) => W.name]))
              throw new Error(
                'Missing "name" for scheduled job. A name is required for Sentry check-in monitoring.'
              );
            return o19.withMonitor(
              Y.name,
              () => {
                return I.apply(G, D);
              },
              {
                schedule: { type: 'crontab', value: t19.replaceCronNames(Z) },
                timezone: qQA([Y, 'optionalAccess', (W) => W.timezone]),
              }
            );
          },
        });
      else return B[Q];
    },
  });
}
MQA.instrumentNodeCron = e19;
