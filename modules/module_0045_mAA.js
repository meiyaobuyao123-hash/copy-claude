// Module: mAA
// Params: hAA

Object.defineProperty(hAA, '__esModule', { value: !0 });
var rP2 = IJ(),
  oP2 = e11();
function tP2(A, B, Q, I) {
  let G = A(),
    D = !1,
    Z = !0;
  return (
    setInterval(() => {
      let Y = G.getTimeMs();
      if (D === !1 && Y > B + Q) {
        if (((D = !0), Z)) I();
      }
      if (Y < B + Q) D = !1;
    }, 20),
    {
      poll: () => {
        G.reset();
      },
      enabled: (Y) => {
        Z = Y;
      },
    }
  );
}
function eP2(A, B, Q) {
  let I = B ? B.replace(/^file:\/\//, '') : void 0,
    G = A.location.columnNumber ? A.location.columnNumber + 1 : void 0,
    D = A.location.lineNumber ? A.location.lineNumber + 1 : void 0;
  return rP2.dropUndefinedKeys({
    filename: I,
    module: Q(I),
    function: A.functionName || '?',
    colno: G,
    lineno: D,
    in_app: I ? oP2.filenameIsInApp(I) : void 0,
  });
}
hAA.callFrameToStackFrame = eP2;
hAA.watchdogTimer = tP2;
