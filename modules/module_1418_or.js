// Module: or
// Params: Np0

Object.defineProperty(Np0, '__esModule', { value: !0 });
Np0.ROOT_CONTEXT = Np0.createContextKey = void 0;
function $E6(A) {
  return Symbol.for(A);
}
Np0.createContextKey = $E6;
class nF1 {
  constructor(A) {
    let B = this;
    ((B._currentContext = A ? new Map(A) : new Map()),
      (B.getValue = (Q) => B._currentContext.get(Q)),
      (B.setValue = (Q, I) => {
        let G = new nF1(B._currentContext);
        return (G._currentContext.set(Q, I), G);
      }),
      (B.deleteValue = (Q) => {
        let I = new nF1(B._currentContext);
        return (I._currentContext.delete(Q), I);
      }));
  }
}
Np0.ROOT_CONTEXT = new nF1();
