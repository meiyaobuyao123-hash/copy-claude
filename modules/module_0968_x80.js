// Module: x80
// Params: Zr5,k80

var { tokenChars: t$4 } = gv();
function e$4(A) {
  let B = new Set(),
    Q = -1,
    I = -1,
    G = 0;
  for (G; G < A.length; G++) {
    let Z = A.charCodeAt(G);
    if (I === -1 && t$4[Z] === 1) {
      if (Q === -1) Q = G;
    } else if (G !== 0 && (Z === 32 || Z === 9)) {
      if (I === -1 && Q !== -1) I = G;
    } else if (Z === 44) {
      if (Q === -1) throw new SyntaxError(`Unexpected character at index ${G}`);
      if (I === -1) I = G;
      let Y = A.slice(Q, I);
      if (B.has(Y)) throw new SyntaxError(`The "${Y}" subprotocol is duplicated`);
      (B.add(Y), (Q = I = -1));
    } else throw new SyntaxError(`Unexpected character at index ${G}`);
  }
  if (Q === -1 || I !== -1) throw new SyntaxError('Unexpected end of input');
  let D = A.slice(Q, G);
  if (B.has(D)) throw new SyntaxError(`The "${D}" subprotocol is duplicated`);
  return (B.add(D), B);
}
k80.exports = { parse: e$4 };
