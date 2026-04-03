// Module: X$2
// Params: y75

function _75(A, B) {
  if (Math.abs(A.length - B.length) > 3) return Math.max(A.length, B.length);
  let Q = [];
  for (let I = 0; I <= A.length; I++) Q[I] = [I];
  for (let I = 0; I <= B.length; I++) Q[0][I] = I;
  for (let I = 1; I <= B.length; I++)
    for (let G = 1; G <= A.length; G++) {
      let D = 1;
      if (A[G - 1] === B[I - 1]) D = 0;
      else D = 1;
      if (
        ((Q[G][I] = Math.min(Q[G - 1][I] + 1, Q[G][I - 1] + 1, Q[G - 1][I - 1] + D)),
        G > 1 && I > 1 && A[G - 1] === B[I - 2] && A[G - 2] === B[I - 1])
      )
        Q[G][I] = Math.min(Q[G][I], Q[G - 2][I - 2] + 1);
    }
  return Q[A.length][B.length];
}
function j75(A, B) {
  if (!B || B.length === 0) return '';
  B = Array.from(new Set(B));
  let Q = A.startsWith('--');
  if (Q) ((A = A.slice(2)), (B = B.map((Z) => Z.slice(2))));
  let I = [],
    G = 3,
    D = 0.4;
  if (
    (B.forEach((Z) => {
      if (Z.length <= 1) return;
      let Y = _75(A, Z),
        W = Math.max(A.length, Z.length);
      if ((W - Y) / W > D) {
        if (Y < G) ((G = Y), (I = [Z]));
        else if (Y === G) I.push(Z);
      }
    }),
    I.sort((Z, Y) => Z.localeCompare(Y)),
    Q)
  )
    I = I.map((Z) => `--${Z}`);
  if (I.length > 1)
    return `
(Did you mean one of ${I.join(', ')}?)`;
  if (I.length === 1)
    return `
(Did you mean ${I[0]}?)`;
  return '';
}
y75.suggestSimilar = j75;
