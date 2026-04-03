// Module: tG0
// Params: XI8,oG0

var ZP4 = zb(),
  YP4 = uJ();
oG0.exports = (A, B, Q) => {
  let I = [],
    G = null,
    D = null,
    Z = A.sort((J, C) => YP4(J, C, Q));
  for (let J of Z)
    if (ZP4(J, B, Q)) {
      if (((D = J), !G)) G = J;
    } else {
      if (D) I.push([G, D]);
      ((D = null), (G = null));
    }
  if (G) I.push([G, null]);
  let Y = [];
  for (let [J, C] of I)
    if (J === C) Y.push(J);
    else if (!C && J === Z[0]) Y.push('*');
    else if (!C) Y.push(`>=${J}`);
    else if (J === Z[0]) Y.push(`<=${C}`);
    else Y.push(`${J} - ${C}`);
  let W = Y.join(' || '),
    F = typeof B.raw === 'string' ? B.raw : String(B);
  return W.length < F.length ? W : B;
};
