// Module: FU1
// Params: lBA

Object.defineProperty(lBA, '__esModule', { value: !0 });
var tZ = I4(),
  mBA = tA();
function hBA(A) {
  return A && A.statusCode !== void 0;
}
function $t2(A) {
  return A && A.error !== void 0;
}
function qt2(A) {
  tZ.captureException(A, {
    mechanism: { type: 'hapi', handled: !1, data: { function: 'hapiErrorPlugin' } },
  });
}
var dBA = {
    name: 'SentryHapiErrorPlugin',
    version: tZ.SDK_VERSION,
    register: async function (A) {
      A.events.on('request', (Q, I) => {
        let G = tZ.getActiveTransaction();
        if ($t2(I)) qt2(I.error);
        if (G) (G.setStatus('internal_error'), G.end());
      });
    },
  },
  uBA = {
    name: 'SentryHapiTracingPlugin',
    version: tZ.SDK_VERSION,
    register: async function (A) {
      let B = A;
      (B.ext('onPreHandler', (Q, I) => {
        let G = tZ.continueTrace(
          {
            sentryTrace: Q.headers['sentry-trace'] || void 0,
            baggage: Q.headers.baggage || void 0,
          },
          (D) => {
            return tZ.startTransaction({
              ...D,
              op: 'hapi.request',
              name: Q.route.path,
              description: `${Q.route.method} ${Q.path}`,
            });
          }
        );
        return (tZ.getCurrentScope().setSpan(G), I.continue);
      }),
        B.ext('onPreResponse', (Q, I) => {
          let G = tZ.getActiveTransaction();
          if (Q.response && hBA(Q.response) && G) {
            let D = Q.response;
            D.header('sentry-trace', tZ.spanToTraceHeader(G));
            let Z = mBA.dynamicSamplingContextToSentryBaggageHeader(
              tZ.getDynamicSamplingContextFromSpan(G)
            );
            if (Z) D.header('baggage', Z);
          }
          return I.continue;
        }),
        B.ext('onPostHandler', (Q, I) => {
          let G = tZ.getActiveTransaction();
          if (G) {
            if (Q.response && hBA(Q.response)) tZ.setHttpStatus(G, Q.response.statusCode);
            G.end();
          }
          return I.continue;
        }));
    },
  },
  pBA = 'Hapi',
  Mt2 = (A = {}) => {
    let B = A.server;
    return {
      name: pBA,
      setupOnce() {
        if (!B) return;
        mBA.fill(B, 'start', (Q) => {
          return async function () {
            return (await this.register(uBA), await this.register(dBA), Q.apply(this));
          };
        });
      },
    };
  },
  cBA = tZ.defineIntegration(Mt2),
  Lt2 = tZ.convertIntegrationFnToClass(pBA, cBA);
lBA.Hapi = Lt2;
lBA.hapiErrorPlugin = dBA;
lBA.hapiIntegration = cBA;
lBA.hapiTracingPlugin = uBA;
