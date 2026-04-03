// Module: HyA
// Params: Yd9,uR1

var KyA = Symbol();
function Dd9(A, B, Q) {
  let I = B[KyA];
  if (I)
    return B.stat(A, (D, Z) => {
      if (D) return Q(D);
      Q(null, Z.mtime, I);
    });
  let G = new Date(Math.ceil(Date.now() / 1000) * 1000 + 5);
  B.utimes(A, G, G, (D) => {
    if (D) return Q(D);
    B.stat(A, (Z, Y) => {
      if (Z) return Q(Z);
      let W = Y.mtime.getTime() % 1000 === 0 ? 's' : 'ms';
      (Object.defineProperty(B, KyA, { value: W }), Q(null, Y.mtime, W));
    });
  });
}
function Zd9(A) {
  let B = Date.now();
  if (A === 's') B = Math.ceil(B / 1000) * 1000;
  return new Date(B);
}
Yd9.probe = Dd9;
Yd9.getMtime = Zd9;
