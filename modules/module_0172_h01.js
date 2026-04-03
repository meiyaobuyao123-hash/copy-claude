// Module: h01
// Params: JBA

Object.defineProperty(JBA, '__esModule', { value: !0 });
var dr2 = D1('http'),
  ur2 = D1('url'),
  ZBA = I4(),
  uy = tA(),
  YBA = 'Spotlight',
  pr2 = (A = {}) => {
    let B = { sidecarUrl: A.sidecarUrl || 'http://localhost:8969/stream' };
    return {
      name: YBA,
      setupOnce() {},
      setup(Q) {
        if (typeof process === 'object' && process.env)
          uy.logger.warn(
            "[Spotlight] It seems you're not in dev mode. Do you really want to have Spotlight enabled?"
          );
        lr2(Q, B);
      },
    };
  },
  WBA = ZBA.defineIntegration(pr2),
  cr2 = ZBA.convertIntegrationFnToClass(YBA, WBA);
function lr2(A, B) {
  let Q = ir2(B.sidecarUrl);
  if (!Q) return;
  let I = 0;
  if (typeof A.on !== 'function') {
    uy.logger.warn(
      '[Spotlight] Cannot connect to spotlight due to missing method on SDK client (`client.on`)'
    );
    return;
  }
  A.on('beforeEnvelope', (G) => {
    if (I > 3) {
      uy.logger.warn(
        '[Spotlight] Disabled Sentry -> Spotlight integration due to too many failed requests'
      );
      return;
    }
    let D = uy.serializeEnvelope(G),
      Y = FBA()(
        {
          method: 'POST',
          path: Q.pathname,
          hostname: Q.hostname,
          port: Q.port,
          headers: { 'Content-Type': 'application/x-sentry-envelope' },
        },
        (W) => {
          (W.on('data', () => {}), W.on('end', () => {}), W.setEncoding('utf8'));
        }
      );
    (Y.on('error', () => {
      (I++, uy.logger.warn('[Spotlight] Failed to send envelope to Spotlight Sidecar'));
    }),
      Y.write(D),
      Y.end());
  });
}
function ir2(A) {
  try {
    return new ur2.URL(`${A}`);
  } catch (B) {
    uy.logger.warn(`[Spotlight] Invalid sidecar URL: ${A}`);
    return;
  }
}
function FBA() {
  let { request: A } = dr2;
  if (nr2(A)) return A.__sentry_original__;
  return A;
}
function nr2(A) {
  return '__sentry_original__' in A;
}
JBA.Spotlight = cr2;
JBA.getNativeHttpRequest = FBA;
JBA.spotlightIntegration = WBA;
