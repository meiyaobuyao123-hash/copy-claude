// Module: Rj0
// Params: qV8,Lj0

var { isUSVString: Nj0, bufferToLowerCasedHeaderName: p86 } = I6(),
  { utf8DecodeBytes: c86 } = GF(),
  { HTTP_TOKEN_CODEPOINTS: l86, isomorphicDecode: $j0 } = $Y(),
  { isFileLike: i86 } = Xm1(),
  { makeEntry: n86 } = Os(),
  SY1 = D1('node:assert'),
  { File: a86 } = D1('node:buffer'),
  s86 = globalThis.File ?? a86,
  r86 = Buffer.from('form-data; name="'),
  qj0 = Buffer.from('; filename'),
  o86 = Buffer.from('--'),
  t86 = Buffer.from(`--\r
`);
function e86(A) {
  for (let B = 0; B < A.length; ++B) if ((A.charCodeAt(B) & -128) !== 0) return !1;
  return !0;
}
function AB6(A) {
  let B = A.length;
  if (B < 27 || B > 70) return !1;
  for (let Q = 0; Q < B; ++Q) {
    let I = A.charCodeAt(Q);
    if (
      !(
        (I >= 48 && I <= 57) ||
        (I >= 65 && I <= 90) ||
        (I >= 97 && I <= 122) ||
        I === 39 ||
        I === 45 ||
        I === 95
      )
    )
      return !1;
  }
  return !0;
}
function BB6(A, B) {
  SY1(B !== 'failure' && B.essence === 'multipart/form-data');
  let Q = B.parameters.get('boundary');
  if (Q === void 0) return 'failure';
  let I = Buffer.from(`--${Q}`, 'utf8'),
    G = [],
    D = { position: 0 };
  while (A[D.position] === 13 && A[D.position + 1] === 10) D.position += 2;
  let Z = A.length;
  while (A[Z - 1] === 10 && A[Z - 2] === 13) Z -= 2;
  if (Z !== A.length) A = A.subarray(0, Z);
  while (!0) {
    if (A.subarray(D.position, D.position + I.length).equals(I)) D.position += I.length;
    else return 'failure';
    if (
      (D.position === A.length - 2 && _Y1(A, o86, D)) ||
      (D.position === A.length - 4 && _Y1(A, t86, D))
    )
      return G;
    if (A[D.position] !== 13 || A[D.position + 1] !== 10) return 'failure';
    D.position += 2;
    let Y = QB6(A, D);
    if (Y === 'failure') return 'failure';
    let { name: W, filename: F, contentType: J, encoding: C } = Y;
    D.position += 2;
    let X;
    {
      let K = A.indexOf(I.subarray(2), D.position);
      if (K === -1) return 'failure';
      if (((X = A.subarray(D.position, K - 4)), (D.position += X.length), C === 'base64'))
        X = Buffer.from(X.toString(), 'base64');
    }
    if (A[D.position] !== 13 || A[D.position + 1] !== 10) return 'failure';
    else D.position += 2;
    let V;
    if (F !== null) {
      if (((J ??= 'text/plain'), !e86(J))) J = '';
      V = new s86([X], F, { type: J });
    } else V = c86(Buffer.from(X));
    (SY1(Nj0(W)), SY1((typeof V === 'string' && Nj0(V)) || i86(V)), G.push(n86(W, V, F)));
  }
}
function QB6(A, B) {
  let Q = null,
    I = null,
    G = null,
    D = null;
  while (!0) {
    if (A[B.position] === 13 && A[B.position + 1] === 10) {
      if (Q === null) return 'failure';
      return { name: Q, filename: I, contentType: G, encoding: D };
    }
    let Z = ug((Y) => Y !== 10 && Y !== 13 && Y !== 58, A, B);
    if (((Z = Km1(Z, !0, !0, (Y) => Y === 9 || Y === 32)), !l86.test(Z.toString())))
      return 'failure';
    if (A[B.position] !== 58) return 'failure';
    switch ((B.position++, ug((Y) => Y === 32 || Y === 9, A, B), p86(Z))) {
      case 'content-disposition': {
        if (((Q = I = null), !_Y1(A, r86, B))) return 'failure';
        if (((B.position += 17), (Q = Mj0(A, B)), Q === null)) return 'failure';
        if (_Y1(A, qj0, B)) {
          let Y = B.position + qj0.length;
          if (A[Y] === 42) ((B.position += 1), (Y += 1));
          if (A[Y] !== 61 || A[Y + 1] !== 34) return 'failure';
          if (((B.position += 12), (I = Mj0(A, B)), I === null)) return 'failure';
        }
        break;
      }
      case 'content-type': {
        let Y = ug((W) => W !== 10 && W !== 13, A, B);
        ((Y = Km1(Y, !1, !0, (W) => W === 9 || W === 32)), (G = $j0(Y)));
        break;
      }
      case 'content-transfer-encoding': {
        let Y = ug((W) => W !== 10 && W !== 13, A, B);
        ((Y = Km1(Y, !1, !0, (W) => W === 9 || W === 32)), (D = $j0(Y)));
        break;
      }
      default:
        ug((Y) => Y !== 10 && Y !== 13, A, B);
    }
    if (A[B.position] !== 13 && A[B.position + 1] !== 10) return 'failure';
    else B.position += 2;
  }
}
function Mj0(A, B) {
  SY1(A[B.position - 1] === 34);
  let Q = ug((I) => I !== 10 && I !== 13 && I !== 34, A, B);
  if (A[B.position] !== 34) return null;
  else B.position++;
  return (
    (Q = new TextDecoder()
      .decode(Q)
      .replace(
        /%0A/gi,
        `
`
      )
      .replace(/%0D/gi, '\r')
      .replace(/%22/g, '"')),
    Q
  );
}
function ug(A, B, Q) {
  let I = Q.position;
  while (I < B.length && A(B[I])) ++I;
  return B.subarray(Q.position, (Q.position = I));
}
function Km1(A, B, Q, I) {
  let G = 0,
    D = A.length - 1;
  if (B) while (G < A.length && I(A[G])) G++;
  if (Q) while (D > 0 && I(A[D])) D--;
  return G === 0 && D === A.length - 1 ? A : A.subarray(G, D + 1);
}
function _Y1(A, B, Q) {
  if (A.length < B.length) return !1;
  for (let I = 0; I < B.length; I++) if (B[I] !== A[Q.position + I]) return !1;
  return !0;
}
Lj0.exports = { multipartFormDataParser: BB6, validateBoundary: AB6 };
