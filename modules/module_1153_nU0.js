// Module: nU0
// Params: lU0

Object.defineProperty(lU0, '__esModule', { value: !0 });
lU0.uint32ArrayFrom = void 0;
function ol4(A) {
  if (!Uint32Array.from) {
    var B = new Uint32Array(A.length),
      Q = 0;
    while (Q < A.length) ((B[Q] = A[Q]), (Q += 1));
    return B;
  }
  return Uint32Array.from(A);
}
lU0.uint32ArrayFrom = ol4;
