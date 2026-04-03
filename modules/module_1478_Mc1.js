// Module: Mc1
// Params: wn0

Object.defineProperty(wn0, '__esModule', { value: !0 });
wn0.createConstMap = void 0;
function a$6(A) {
  let B = {},
    Q = A.length;
  for (let I = 0; I < Q; I++) {
    let G = A[I];
    if (G) B[String(G).toUpperCase().replace(/[-.]/g, '_')] = G;
  }
  return B;
}
wn0.createConstMap = a$6;
