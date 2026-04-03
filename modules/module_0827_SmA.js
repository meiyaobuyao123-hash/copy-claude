// Module: SmA
// Params: ye9

function Pe9(A, B) {
  return PmA(A, B);
}
function PmA(A, B, Q) {
  let I,
    G = {};
  for (let D = 0; D < A.length; D++) {
    let Z = A[D],
      Y = Se9(Z),
      W = '';
    if (Q === void 0) W = Y;
    else W = Q + '.' + Y;
    if (Y === B.textNodeName)
      if (I === void 0) I = Z[Y];
      else I += '' + Z[Y];
    else if (Y === void 0) continue;
    else if (Z[Y]) {
      let F = PmA(Z[Y], B, W),
        J = je9(F, B);
      if (Z[':@']) _e9(F, Z[':@'], W, B);
      else if (
        Object.keys(F).length === 1 &&
        F[B.textNodeName] !== void 0 &&
        !B.alwaysCreateTextNode
      )
        F = F[B.textNodeName];
      else if (Object.keys(F).length === 0)
        if (B.alwaysCreateTextNode) F[B.textNodeName] = '';
        else F = '';
      if (G[Y] !== void 0 && G.hasOwnProperty(Y)) {
        if (!Array.isArray(G[Y])) G[Y] = [G[Y]];
        G[Y].push(F);
      } else if (B.isArray(Y, W, J)) G[Y] = [F];
      else G[Y] = F;
    }
  }
  if (typeof I === 'string') {
    if (I.length > 0) G[B.textNodeName] = I;
  } else if (I !== void 0) G[B.textNodeName] = I;
  return G;
}
function Se9(A) {
  let B = Object.keys(A);
  for (let Q = 0; Q < B.length; Q++) {
    let I = B[Q];
    if (I !== ':@') return I;
  }
}
function _e9(A, B, Q, I) {
  if (B) {
    let G = Object.keys(B),
      D = G.length;
    for (let Z = 0; Z < D; Z++) {
      let Y = G[Z];
      if (I.isArray(Y, Q + '.' + Y, !0, !0)) A[Y] = [B[Y]];
      else A[Y] = B[Y];
    }
  }
}
function je9(A, B) {
  let { textNodeName: Q } = B,
    I = Object.keys(A).length;
  if (I === 0) return !0;
  if (I === 1 && (A[Q] || typeof A[Q] === 'boolean' || A[Q] === 0)) return !0;
  return !1;
}
ye9.prettify = Pe9;
