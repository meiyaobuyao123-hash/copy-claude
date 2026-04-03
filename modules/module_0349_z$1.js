// Module: z$1
// Params: JXA

Object.defineProperty(JXA, '__esModule', { value: !0 });
JXA.count = void 0;
var bC9 = PT();
function gC9(A) {
  return bC9.reduce(function (B, Q, I) {
    return !A || A(Q, I) ? B + 1 : B;
  }, 0);
}
JXA.count = gC9;
