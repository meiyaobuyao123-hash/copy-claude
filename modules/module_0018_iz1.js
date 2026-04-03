// Module: iz1
// Params: V1A

Object.defineProperty(V1A, '__esModule', { value: !0 });
var cz1 = fG(),
  lz1 = wE(),
  GA1 = null;
function $R2(A) {
  (lz1.addHandler('error', A), lz1.maybeInstrument('error', qR2));
}
function qR2() {
  ((GA1 = cz1.GLOBAL_OBJ.onerror),
    (cz1.GLOBAL_OBJ.onerror = function (A, B, Q, I, G) {
      let D = { column: I, error: G, line: Q, msg: A, url: B };
      if ((lz1.triggerHandlers('error', D), GA1 && !GA1.__SENTRY_LOADER__))
        return GA1.apply(this, arguments);
      return !1;
    }),
    (cz1.GLOBAL_OBJ.onerror.__SENTRY_INSTRUMENTED__ = !0));
}
V1A.addGlobalErrorInstrumentationHandler = $R2;
