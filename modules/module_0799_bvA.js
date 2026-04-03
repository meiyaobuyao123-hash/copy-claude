// Module: bvA
// Params: fvA

Object.defineProperty(fvA, '__esModule', { value: !0 });
fvA.splitStream = void 0;
async function Nn9(A) {
  if (typeof A.stream === 'function') A = A.stream();
  return A.tee();
}
fvA.splitStream = Nn9;
