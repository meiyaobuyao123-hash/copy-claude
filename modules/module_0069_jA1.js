// Module: jA1
// Params: m0A

Object.defineProperty(m0A, '__esModule', { value: !0 });
var gw1 = tA(),
  Sf2 = vQ(),
  _f2 = _A1(),
  h0A = !1;
function jf2() {
  if (h0A) return;
  ((h0A = !0),
    gw1.addGlobalErrorInstrumentationHandler(hw1),
    gw1.addGlobalUnhandledRejectionInstrumentationHandler(hw1));
}
function hw1() {
  let A = _f2.getActiveTransaction();
  if (A)
    (Sf2.DEBUG_BUILD &&
      gw1.logger.log('[Tracing] Transaction: internal_error -> Global error occured'),
      A.setStatus('internal_error'));
}
hw1.tag = 'sentry_tracingErrorCallback';
m0A.registerErrorInstrumentation = jf2;
