// Module: kz1
// Params: B1A

Object.defineProperty(B1A, '__esModule', { value: !0 });
var jz1 = CX(),
  NL2 = IJ(),
  BA1 = fG(),
  yz1 = wE();
function $L2(A) {
  (yz1.addHandler('console', A), yz1.maybeInstrument('console', qL2));
}
function qL2() {
  if (!('console' in BA1.GLOBAL_OBJ)) return;
  jz1.CONSOLE_LEVELS.forEach(function (A) {
    if (!(A in BA1.GLOBAL_OBJ.console)) return;
    NL2.fill(BA1.GLOBAL_OBJ.console, A, function (B) {
      return (
        (jz1.originalConsoleMethods[A] = B),
        function (...Q) {
          let I = { args: Q, level: A };
          yz1.triggerHandlers('console', I);
          let G = jz1.originalConsoleMethods[A];
          G && G.apply(BA1.GLOBAL_OBJ.console, Q);
        }
      );
    });
  });
}
B1A.addConsoleInstrumentationHandler = $L2;
