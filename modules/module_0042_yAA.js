// Module: yAA
// Params: jAA

Object.defineProperty(jAA, '__esModule', { value: !0 });
function SAA(A, B, Q) {
  let I = B.match(/([a-z_]+)\.(.*)/i);
  if (I === null) A[B] = Q;
  else {
    let G = A[I[1]];
    SAA(G, I[2], Q);
  }
}
function vP2(A, B, Q = {}) {
  return Array.isArray(B) ? _AA(A, B, Q) : bP2(A, B, Q);
}
function _AA(A, B, Q) {
  let I = B.find((G) => G.name === A.name);
  if (I) {
    for (let [G, D] of Object.entries(Q)) SAA(I, G, D);
    return B;
  }
  return [...B, A];
}
function bP2(A, B, Q) {
  return (G) => {
    let D = B(G);
    if (A.allowExclusionByUser) {
      if (!D.find((Y) => Y.name === A.name)) return D;
    }
    return _AA(A, D, Q);
  };
}
jAA.addOrUpdateIntegration = vP2;
