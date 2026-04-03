// Module: oz1
// Params: w1A

Object.defineProperty(w1A, '__esModule', { value: !0 });
var z1A = IJ();
aK();
CX();
var _R2 = fG(),
  jR2 = rz1(),
  WA1 = wE(),
  Ru = _R2.GLOBAL_OBJ,
  YA1;
function yR2(A) {
  (WA1.addHandler('history', A), WA1.maybeInstrument('history', kR2));
}
function kR2() {
  if (!jR2.supportsHistory()) return;
  let A = Ru.onpopstate;
  Ru.onpopstate = function (...Q) {
    let I = Ru.location.href,
      G = YA1;
    YA1 = I;
    let D = { from: G, to: I };
    if ((WA1.triggerHandlers('history', D), A))
      try {
        return A.apply(this, Q);
      } catch (Z) {}
  };
  function B(Q) {
    return function (...I) {
      let G = I.length > 2 ? I[2] : void 0;
      if (G) {
        let D = YA1,
          Z = String(G);
        YA1 = Z;
        let Y = { from: D, to: Z };
        WA1.triggerHandlers('history', Y);
      }
      return Q.apply(this, I);
    };
  }
  (z1A.fill(Ru.history, 'pushState', B), z1A.fill(Ru.history, 'replaceState', B));
}
w1A.addHistoryInstrumentationHandler = yR2;
