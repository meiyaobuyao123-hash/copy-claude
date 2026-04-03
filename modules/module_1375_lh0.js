// Module: lh0
// Params: bz8,ch0

var GF1 = Su1();
function yV6() {
  let A = {},
    B = Object.keys(GF1);
  for (let Q = B.length, I = 0; I < Q; I++) A[B[I]] = { distance: -1, parent: null };
  return A;
}
function kV6(A) {
  let B = yV6(),
    Q = [A];
  B[A].distance = 0;
  while (Q.length) {
    let I = Q.pop(),
      G = Object.keys(GF1[I]);
    for (let D = G.length, Z = 0; Z < D; Z++) {
      let Y = G[Z],
        W = B[Y];
      if (W.distance === -1) ((W.distance = B[I].distance + 1), (W.parent = I), Q.unshift(Y));
    }
  }
  return B;
}
function xV6(A, B) {
  return function (Q) {
    return B(A(Q));
  };
}
function fV6(A, B) {
  let Q = [B[A].parent, A],
    I = GF1[B[A].parent][A],
    G = B[A].parent;
  while (B[G].parent)
    (Q.unshift(B[G].parent), (I = xV6(GF1[B[G].parent][G], I)), (G = B[G].parent));
  return ((I.conversion = Q), I);
}
ch0.exports = function (A) {
  let B = kV6(A),
    Q = {},
    I = Object.keys(B);
  for (let G = I.length, D = 0; D < G; D++) {
    let Z = I[D];
    if (B[Z].parent === null) continue;
    Q[Z] = fV6(Z, B);
  }
  return Q;
};
