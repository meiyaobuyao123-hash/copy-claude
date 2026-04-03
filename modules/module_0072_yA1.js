// Module: yA1
// Params: p0A

Object.defineProperty(p0A, '__esModule', { value: !0 });
var uf2 = DJ();
function pf2(A) {
  if (typeof __SENTRY_TRACING__ === 'boolean' && !__SENTRY_TRACING__) return !1;
  let B = uf2.getClient(),
    Q = A || (B && B.getOptions());
  return !!Q && (Q.enableTracing || 'tracesSampleRate' in Q || 'tracesSampler' in Q);
}
p0A.hasTracingEnabled = pf2;
