// Module: TE1
// Params: D6A

Object.defineProperty(D6A, '__esModule', { value: !0 });
var Q6A = I4(),
  I6A = tA(),
  G6A = sZ(),
  OE1 = LW();
function Fc2() {
  if (OE1.WINDOW.document)
    OE1.WINDOW.document.addEventListener('visibilitychange', () => {
      let A = Q6A.getActiveTransaction();
      if (OE1.WINDOW.document.hidden && A) {
        let { op: Q, status: I } = Q6A.spanToJSON(A);
        if (
          (G6A.DEBUG_BUILD &&
            I6A.logger.log(
              `[Tracing] Transaction: cancelled -> since tab moved to the background, op: ${Q}`
            ),
          !I)
        )
          A.setStatus('cancelled');
        (A.setTag('visibilitychange', 'document.hidden'), A.end());
      }
    });
  else
    G6A.DEBUG_BUILD &&
      I6A.logger.warn(
        '[Tracing] Could not set up background tab detection due to lack of global document'
      );
}
D6A.registerBackgroundTabDetection = Fc2;
