// Module: _3A
// Params: S3A

Object.defineProperty(S3A, '__esModule', { value: !0 });
var Kp = I4(),
  O3A = tA(),
  ge2 = O3A.GLOBAL_OBJ,
  T3A = 'ReportingObserver',
  R3A = new WeakMap(),
  he2 = (A = {}) => {
    let B = A.types || ['crash', 'deprecation', 'intervention'];
    function Q(I) {
      if (!R3A.has(Kp.getClient())) return;
      for (let G of I)
        Kp.withScope((D) => {
          D.setExtra('url', G.url);
          let Z = `ReportingObserver [${G.type}]`,
            Y = 'No details available';
          if (G.body) {
            let W = {};
            for (let F in G.body) W[F] = G.body[F];
            if ((D.setExtra('body', W), G.type === 'crash')) {
              let F = G.body;
              Y = [F.crashId || '', F.reason || ''].join(' ').trim() || Y;
            } else Y = G.body.message || Y;
          }
          Kp.captureMessage(`${Z}: ${Y}`);
        });
    }
    return {
      name: T3A,
      setupOnce() {
        if (!O3A.supportsReportingObserver()) return;
        new ge2.ReportingObserver(Q, { buffered: !0, types: B }).observe();
      },
      setup(I) {
        R3A.set(I, !0);
      },
    };
  },
  P3A = Kp.defineIntegration(he2),
  me2 = Kp.convertIntegrationFnToClass(T3A, P3A);
S3A.ReportingObserver = me2;
S3A.reportingObserverIntegration = P3A;
