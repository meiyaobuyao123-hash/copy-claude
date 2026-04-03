// Module: zK0
// Params: KK0

Object.defineProperty(KK0, '__esModule', { value: !0 });
KK0.uint32ArrayFrom = void 0;
function fh4(A) {
  if (!Uint32Array.from) {
    var B = new Uint32Array(A.length),
      Q = 0;
    while (Q < A.length) ((B[Q] = A[Q]), (Q += 1));
    return B;
  }
  return Uint32Array.from(A);
}
KK0.uint32ArrayFrom = fh4;
