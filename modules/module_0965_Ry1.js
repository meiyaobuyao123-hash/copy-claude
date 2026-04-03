// Module: Ry1
// Params: Ar5,z80

var { tokenChars: ai } = gv();
function Gz(A, B, Q) {
  if (A[B] === void 0) A[B] = [Q];
  else A[B].push(Q);
}
function N$4(A) {
  let B = Object.create(null),
    Q = Object.create(null),
    I = !1,
    G = !1,
    D = !1,
    Z,
    Y,
    W = -1,
    F = -1,
    J = -1,
    C = 0;
  for (; C < A.length; C++)
    if (((F = A.charCodeAt(C)), Z === void 0))
      if (J === -1 && ai[F] === 1) {
        if (W === -1) W = C;
      } else if (C !== 0 && (F === 32 || F === 9)) {
        if (J === -1 && W !== -1) J = C;
      } else if (F === 59 || F === 44) {
        if (W === -1) throw new SyntaxError(`Unexpected character at index ${C}`);
        if (J === -1) J = C;
        let V = A.slice(W, J);
        if (F === 44) (Gz(B, V, Q), (Q = Object.create(null)));
        else Z = V;
        W = J = -1;
      } else throw new SyntaxError(`Unexpected character at index ${C}`);
    else if (Y === void 0)
      if (J === -1 && ai[F] === 1) {
        if (W === -1) W = C;
      } else if (F === 32 || F === 9) {
        if (J === -1 && W !== -1) J = C;
      } else if (F === 59 || F === 44) {
        if (W === -1) throw new SyntaxError(`Unexpected character at index ${C}`);
        if (J === -1) J = C;
        if ((Gz(Q, A.slice(W, J), !0), F === 44))
          (Gz(B, Z, Q), (Q = Object.create(null)), (Z = void 0));
        W = J = -1;
      } else if (F === 61 && W !== -1 && J === -1) ((Y = A.slice(W, C)), (W = J = -1));
      else throw new SyntaxError(`Unexpected character at index ${C}`);
    else if (G) {
      if (ai[F] !== 1) throw new SyntaxError(`Unexpected character at index ${C}`);
      if (W === -1) W = C;
      else if (!I) I = !0;
      G = !1;
    } else if (D)
      if (ai[F] === 1) {
        if (W === -1) W = C;
      } else if (F === 34 && W !== -1) ((D = !1), (J = C));
      else if (F === 92) G = !0;
      else throw new SyntaxError(`Unexpected character at index ${C}`);
    else if (F === 34 && A.charCodeAt(C - 1) === 61) D = !0;
    else if (J === -1 && ai[F] === 1) {
      if (W === -1) W = C;
    } else if (W !== -1 && (F === 32 || F === 9)) {
      if (J === -1) J = C;
    } else if (F === 59 || F === 44) {
      if (W === -1) throw new SyntaxError(`Unexpected character at index ${C}`);
      if (J === -1) J = C;
      let V = A.slice(W, J);
      if (I) ((V = V.replace(/\\/g, '')), (I = !1));
      if ((Gz(Q, Y, V), F === 44)) (Gz(B, Z, Q), (Q = Object.create(null)), (Z = void 0));
      ((Y = void 0), (W = J = -1));
    } else throw new SyntaxError(`Unexpected character at index ${C}`);
  if (W === -1 || D || F === 32 || F === 9) throw new SyntaxError('Unexpected end of input');
  if (J === -1) J = C;
  let X = A.slice(W, J);
  if (Z === void 0) Gz(B, X, Q);
  else {
    if (Y === void 0) Gz(Q, X, !0);
    else if (I) Gz(Q, Y, X.replace(/\\/g, ''));
    else Gz(Q, Y, X);
    Gz(B, Z, Q);
  }
  return B;
}
function $$4(A) {
  return Object.keys(A)
    .map((B) => {
      let Q = A[B];
      if (!Array.isArray(Q)) Q = [Q];
      return Q.map((I) => {
        return [B]
          .concat(
            Object.keys(I).map((G) => {
              let D = I[G];
              if (!Array.isArray(D)) D = [D];
              return D.map((Z) => (Z === !0 ? G : `${G}=${Z}`)).join('; ');
            })
          )
          .join('; ');
      }).join(', ');
    })
    .join(', ');
}
z80.exports = { format: $$4, parse: N$4 };
