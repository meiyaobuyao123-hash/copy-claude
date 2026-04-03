// Module: tA2
// Params: rA2

Object.defineProperty(rA2, '__esModule', { value: !0 });
rA2.merge = void 0;
var iA2 = lA2(),
  gk6 = 20;
function hk6(...A) {
  let B = A.shift(),
    Q = new WeakMap();
  while (A.length > 0) B = aA2(B, A.shift(), 0, Q);
  return B;
}
rA2.merge = hk6;
function kc1(A) {
  if (JJ1(A)) return A.slice();
  return A;
}
function aA2(A, B, Q = 0, I) {
  let G;
  if (Q > gk6) return;
  if ((Q++, FJ1(A) || FJ1(B) || sA2(B))) G = kc1(B);
  else if (JJ1(A)) {
    if (((G = A.slice()), JJ1(B))) for (let D = 0, Z = B.length; D < Z; D++) G.push(kc1(B[D]));
    else if (Zo(B)) {
      let D = Object.keys(B);
      for (let Z = 0, Y = D.length; Z < Y; Z++) {
        let W = D[Z];
        G[W] = kc1(B[W]);
      }
    }
  } else if (Zo(A))
    if (Zo(B)) {
      if (!mk6(A, B)) return B;
      G = Object.assign({}, A);
      let D = Object.keys(B);
      for (let Z = 0, Y = D.length; Z < Y; Z++) {
        let W = D[Z],
          F = B[W];
        if (FJ1(F))
          if (typeof F === 'undefined') delete G[W];
          else G[W] = F;
        else {
          let J = G[W],
            C = F;
          if (nA2(A, W, I) || nA2(B, W, I)) delete G[W];
          else {
            if (Zo(J) && Zo(C)) {
              let X = I.get(J) || [],
                V = I.get(C) || [];
              (X.push({ obj: A, key: W }), V.push({ obj: B, key: W }), I.set(J, X), I.set(C, V));
            }
            G[W] = aA2(G[W], F, Q, I);
          }
        }
      }
    } else G = B;
  return G;
}
function nA2(A, B, Q) {
  let I = Q.get(A[B]) || [];
  for (let G = 0, D = I.length; G < D; G++) {
    let Z = I[G];
    if (Z.key === B && Z.obj === A) return !0;
  }
  return !1;
}
function JJ1(A) {
  return Array.isArray(A);
}
function sA2(A) {
  return typeof A === 'function';
}
function Zo(A) {
  return !FJ1(A) && !JJ1(A) && !sA2(A) && typeof A === 'object';
}
function FJ1(A) {
  return (
    typeof A === 'string' ||
    typeof A === 'number' ||
    typeof A === 'boolean' ||
    typeof A === 'undefined' ||
    A instanceof Date ||
    A instanceof RegExp ||
    A === null
  );
}
function mk6(A, B) {
  if (!iA2.isPlainObject(A) || !iA2.isPlainObject(B)) return !1;
  return !0;
}
