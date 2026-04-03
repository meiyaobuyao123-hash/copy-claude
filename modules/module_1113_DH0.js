// Module: DH0
// Params: IH0

Object.defineProperty(IH0, '__esModule', { value: !0 });
IH0.uint32ArrayFrom = void 0;
function oh4(A) {
  if (!Uint32Array.from) {
    var B = new Uint32Array(A.length),
      Q = 0;
    while (Q < A.length) ((B[Q] = A[Q]), (Q += 1));
    return B;
  }
  return Uint32Array.from(A);
}
IH0.uint32ArrayFrom = oh4;
