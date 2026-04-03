// Module: CDA
// Params: TU5,JDA

JDA.exports = WDA;
function WDA(A, B, Q) {
  if (A instanceof RegExp) A = YDA(A, Q);
  if (B instanceof RegExp) B = YDA(B, Q);
  var I = FDA(A, B, Q);
  return (
    I && {
      start: I[0],
      end: I[1],
      pre: Q.slice(0, I[0]),
      body: Q.slice(I[0] + A.length, I[1]),
      post: Q.slice(I[1] + B.length),
    }
  );
}
function YDA(A, B) {
  var Q = B.match(A);
  return Q ? Q[0] : null;
}
WDA.range = FDA;
function FDA(A, B, Q) {
  var I,
    G,
    D,
    Z,
    Y,
    W = Q.indexOf(A),
    F = Q.indexOf(B, W + 1),
    J = W;
  if (W >= 0 && F > 0) {
    if (A === B) return [W, F];
    ((I = []), (D = Q.length));
    while (J >= 0 && !Y) {
      if (J == W) (I.push(J), (W = Q.indexOf(A, J + 1)));
      else if (I.length == 1) Y = [I.pop(), F];
      else {
        if (((G = I.pop()), G < D)) ((D = G), (Z = F));
        F = Q.indexOf(B, J + 1);
      }
      J = W < F && W >= 0 ? W : F;
    }
    if (I.length) Y = [D, Z];
  }
  return Y;
}
