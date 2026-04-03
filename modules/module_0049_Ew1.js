// Module: Ew1
// Params: nAA

Object.defineProperty(nAA, '__esModule', { value: !0 });
async function WS2(A) {
  let B = void 0,
    Q = A[0],
    I = 1;
  while (I < A.length) {
    let G = A[I],
      D = A[I + 1];
    if (((I += 2), (G === 'optionalAccess' || G === 'optionalCall') && Q == null)) return;
    if (G === 'access' || G === 'optionalAccess') ((B = Q), (Q = await D(Q)));
    else if (G === 'call' || G === 'optionalCall')
      ((Q = await D((...Z) => Q.call(B, ...Z))), (B = void 0));
  }
  return Q;
}
nAA._asyncOptionalChain = WS2;
