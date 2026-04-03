// Module: n2A
// Params: i2A

Object.defineProperty(i2A, '__esModule', { value: !0 });
var c2A = tA(),
  eg2 = vQ(),
  Ah2 = DJ(),
  Bh2 = oK();
function Qh2(A, B) {
  if (B.debug === !0)
    if (eg2.DEBUG_BUILD) c2A.logger.enable();
    else
      c2A.consoleSandbox(() => {
        console.warn(
          '[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.'
        );
      });
  Ah2.getCurrentScope().update(B.initialScope);
  let I = new A(B);
  (l2A(I), Ih2(I));
}
function l2A(A) {
  let Q = Bh2.getCurrentHub().getStackTop();
  ((Q.client = A), Q.scope.setClient(A));
}
function Ih2(A) {
  if (A.init) A.init();
  else if (A.setupIntegrations) A.setupIntegrations();
}
i2A.initAndBind = Qh2;
i2A.setCurrentClient = l2A;
