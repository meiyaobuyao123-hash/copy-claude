// Module: QU1
// Params: s8A

Object.defineProperty(s8A, '__esModule', { value: !0 });
var Mr2 = I4(),
  x01 = tA(),
  BU1 = Jp(),
  Lr2 = 2000;
function Rr2(A) {
  x01.consoleSandbox(() => {
    console.error(A);
  });
  let B = Mr2.getClient();
  if (B === void 0)
    (BU1.DEBUG_BUILD &&
      x01.logger.warn('No NodeClient was defined, we are exiting the process now.'),
      global.process.exit(1));
  let Q = B.getOptions(),
    I = (Q && Q.shutdownTimeout && Q.shutdownTimeout > 0 && Q.shutdownTimeout) || Lr2;
  B.close(I).then(
    (G) => {
      if (!G)
        BU1.DEBUG_BUILD &&
          x01.logger.warn(
            'We reached the timeout for emptying the request buffer, still exiting now!'
          );
      global.process.exit(1);
    },
    (G) => {
      BU1.DEBUG_BUILD && x01.logger.error(G);
    }
  );
}
s8A.logAndExitProcess = Rr2;
