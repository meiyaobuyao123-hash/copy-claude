// Module: q$1
// Params: gXA

Object.defineProperty(gXA, '__esModule', { value: !0 });
gXA.distinctUntilKeyChanged = void 0;
var PX9 = k91();
function SX9(A, B) {
  return PX9.distinctUntilChanged(function (Q, I) {
    return B ? B(Q[A], I[A]) : Q[A] === I[A];
  });
}
gXA.distinctUntilKeyChanged = SX9;
