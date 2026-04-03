// Module: sz1
// Params: K1A

Object.defineProperty(K1A, '__esModule', { value: !0 });
var nz1 = fG(),
  az1 = wE(),
  DA1 = null;
function LR2(A) {
  (az1.addHandler('unhandledrejection', A), az1.maybeInstrument('unhandledrejection', RR2));
}
function RR2() {
  ((DA1 = nz1.GLOBAL_OBJ.onunhandledrejection),
    (nz1.GLOBAL_OBJ.onunhandledrejection = function (A) {
      let B = A;
      if ((az1.triggerHandlers('unhandledrejection', B), DA1 && !DA1.__SENTRY_LOADER__))
        return DA1.apply(this, arguments);
      return !0;
    }),
    (nz1.GLOBAL_OBJ.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0));
}
K1A.addGlobalUnhandledRejectionInstrumentationHandler = LR2;
