// Module: P$1
// Params: GVA

Object.defineProperty(GVA, '__esModule', { value: !0 });
GVA.finalize = void 0;
var IV9 = w2();
function GV9(A) {
  return IV9.operate(function (B, Q) {
    try {
      B.subscribe(Q);
    } finally {
      Q.add(A);
    }
  });
}
GVA.finalize = GV9;
