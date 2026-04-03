// Module: ju1
// Params: gz8,ih0

var _u1 = Su1(),
  vV6 = lh0(),
  Ph = {},
  bV6 = Object.keys(_u1);
function gV6(A) {
  let B = function (...Q) {
    let I = Q[0];
    if (I === void 0 || I === null) return I;
    if (I.length > 1) Q = I;
    return A(Q);
  };
  if ('conversion' in A) B.conversion = A.conversion;
  return B;
}
function hV6(A) {
  let B = function (...Q) {
    let I = Q[0];
    if (I === void 0 || I === null) return I;
    if (I.length > 1) Q = I;
    let G = A(Q);
    if (typeof G === 'object') for (let D = G.length, Z = 0; Z < D; Z++) G[Z] = Math.round(G[Z]);
    return G;
  };
  if ('conversion' in A) B.conversion = A.conversion;
  return B;
}
bV6.forEach((A) => {
  ((Ph[A] = {}),
    Object.defineProperty(Ph[A], 'channels', { value: _u1[A].channels }),
    Object.defineProperty(Ph[A], 'labels', { value: _u1[A].labels }));
  let B = vV6(A);
  Object.keys(B).forEach((I) => {
    let G = B[I];
    ((Ph[A][I] = hV6(G)), (Ph[A][I].raw = gV6(G)));
  });
});
ih0.exports = Ph;
