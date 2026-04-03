// Module: wE
// Params: A1A

Object.defineProperty(A1A, '__esModule', { value: !0 });
var FL2 = aK(),
  JL2 = CX(),
  CL2 = AA1(),
  wy = {},
  ee1 = {};
function XL2(A, B) {
  ((wy[A] = wy[A] || []), wy[A].push(B));
}
function VL2() {
  Object.keys(wy).forEach((A) => {
    wy[A] = void 0;
  });
}
function KL2(A, B) {
  if (!ee1[A]) (B(), (ee1[A] = !0));
}
function HL2(A, B) {
  let Q = A && wy[A];
  if (!Q) return;
  for (let I of Q)
    try {
      I(B);
    } catch (G) {
      FL2.DEBUG_BUILD &&
        JL2.logger.error(
          `Error while triggering instrumentation handler.
Type: ${A}
Name: ${CL2.getFunctionName(I)}
Error:`,
          G
        );
    }
}
A1A.addHandler = XL2;
A1A.maybeInstrument = KL2;
A1A.resetInstrumentationHandlers = VL2;
A1A.triggerHandlers = HL2;
