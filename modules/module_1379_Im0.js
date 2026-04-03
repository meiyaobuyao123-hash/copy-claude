// Module: Im0
// Params: dz8,Qm0

var pV6 = (A, B, Q) => {
    let I = A.indexOf(B);
    if (I === -1) return A;
    let G = B.length,
      D = 0,
      Z = '';
    do ((Z += A.substr(D, I - D) + B + Q), (D = I + G), (I = A.indexOf(B, D)));
    while (I !== -1);
    return ((Z += A.substr(D)), Z);
  },
  cV6 = (A, B, Q, I) => {
    let G = 0,
      D = '';
    do {
      let Z = A[I - 1] === '\r';
      ((D +=
        A.substr(G, (Z ? I - 1 : I) - G) +
        B +
        (Z
          ? `\r
`
          : `
`) +
        Q),
        (G = I + 1),
        (I = A.indexOf(
          `
`,
          G
        )));
    } while (I !== -1);
    return ((D += A.substr(G)), D);
  };
Qm0.exports = { stringReplaceAll: pV6, stringEncaseCRLFWithFirstIndex: cV6 };
