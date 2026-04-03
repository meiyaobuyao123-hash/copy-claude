// Module: cv0
// Params: MK8,pv0

var { maxNameValuePairSize: jZ6, maxAttributeValueSize: yZ6 } = bv0(),
  { isCTLExcludingHtab: kZ6 } = ad1(),
  { collectASequenceOfCodePointsFast: kW1 } = $Y(),
  xZ6 = D1('node:assert');
function fZ6(A) {
  if (kZ6(A)) return null;
  let B = '',
    Q = '',
    I = '',
    G = '';
  if (A.includes(';')) {
    let D = { position: 0 };
    ((B = kW1(';', A, D)), (Q = A.slice(D.position)));
  } else B = A;
  if (!B.includes('=')) G = B;
  else {
    let D = { position: 0 };
    ((I = kW1('=', B, D)), (G = B.slice(D.position + 1)));
  }
  if (((I = I.trim()), (G = G.trim()), I.length + G.length > jZ6)) return null;
  return { name: I, value: G, ...Kh(Q) };
}
function Kh(A, B = {}) {
  if (A.length === 0) return B;
  (xZ6(A[0] === ';'), (A = A.slice(1)));
  let Q = '';
  if (A.includes(';')) ((Q = kW1(';', A, { position: 0 })), (A = A.slice(Q.length)));
  else ((Q = A), (A = ''));
  let I = '',
    G = '';
  if (Q.includes('=')) {
    let Z = { position: 0 };
    ((I = kW1('=', Q, Z)), (G = Q.slice(Z.position + 1)));
  } else I = Q;
  if (((I = I.trim()), (G = G.trim()), G.length > yZ6)) return Kh(A, B);
  let D = I.toLowerCase();
  if (D === 'expires') {
    let Z = new Date(G);
    B.expires = Z;
  } else if (D === 'max-age') {
    let Z = G.charCodeAt(0);
    if ((Z < 48 || Z > 57) && G[0] !== '-') return Kh(A, B);
    if (!/^\d+$/.test(G)) return Kh(A, B);
    let Y = Number(G);
    B.maxAge = Y;
  } else if (D === 'domain') {
    let Z = G;
    if (Z[0] === '.') Z = Z.slice(1);
    ((Z = Z.toLowerCase()), (B.domain = Z));
  } else if (D === 'path') {
    let Z = '';
    if (G.length === 0 || G[0] !== '/') Z = '/';
    else Z = G;
    B.path = Z;
  } else if (D === 'secure') B.secure = !0;
  else if (D === 'httponly') B.httpOnly = !0;
  else if (D === 'samesite') {
    let Z = 'Default',
      Y = G.toLowerCase();
    if (Y.includes('none')) Z = 'None';
    if (Y.includes('strict')) Z = 'Strict';
    if (Y.includes('lax')) Z = 'Lax';
    B.sameSite = Z;
  } else ((B.unparsed ??= []), B.unparsed.push(`${I}=${G}`));
  return Kh(A, B);
}
pv0.exports = { parseSetCookie: fZ6, parseUnparsedAttributes: Kh };
