// Module: ad1
// Params: qK8,uv0

function RZ6(A) {
  for (let B = 0; B < A.length; ++B) {
    let Q = A.charCodeAt(B);
    if ((Q >= 0 && Q <= 8) || (Q >= 10 && Q <= 31) || Q === 127) return !0;
  }
  return !1;
}
function gv0(A) {
  for (let B = 0; B < A.length; ++B) {
    let Q = A.charCodeAt(B);
    if (
      Q < 33 ||
      Q > 126 ||
      Q === 34 ||
      Q === 40 ||
      Q === 41 ||
      Q === 60 ||
      Q === 62 ||
      Q === 64 ||
      Q === 44 ||
      Q === 59 ||
      Q === 58 ||
      Q === 92 ||
      Q === 47 ||
      Q === 91 ||
      Q === 93 ||
      Q === 63 ||
      Q === 61 ||
      Q === 123 ||
      Q === 125
    )
      throw new Error('Invalid cookie name');
  }
}
function hv0(A) {
  let B = A.length,
    Q = 0;
  if (A[0] === '"') {
    if (B === 1 || A[B - 1] !== '"') throw new Error('Invalid cookie value');
    (--B, ++Q);
  }
  while (Q < B) {
    let I = A.charCodeAt(Q++);
    if (I < 33 || I > 126 || I === 34 || I === 44 || I === 59 || I === 92)
      throw new Error('Invalid cookie value');
  }
}
function mv0(A) {
  for (let B = 0; B < A.length; ++B) {
    let Q = A.charCodeAt(B);
    if (Q < 32 || Q === 127 || Q === 59) throw new Error('Invalid cookie path');
  }
}
function OZ6(A) {
  if (A.startsWith('-') || A.endsWith('.') || A.endsWith('-'))
    throw new Error('Invalid cookie domain');
}
var TZ6 = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  PZ6 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  yW1 = Array(61)
    .fill(0)
    .map((A, B) => B.toString().padStart(2, '0'));
function dv0(A) {
  if (typeof A === 'number') A = new Date(A);
  return `${TZ6[A.getUTCDay()]}, ${yW1[A.getUTCDate()]} ${PZ6[A.getUTCMonth()]} ${A.getUTCFullYear()} ${yW1[A.getUTCHours()]}:${yW1[A.getUTCMinutes()]}:${yW1[A.getUTCSeconds()]} GMT`;
}
function SZ6(A) {
  if (A < 0) throw new Error('Invalid cookie max-age');
}
function _Z6(A) {
  if (A.name.length === 0) return null;
  (gv0(A.name), hv0(A.value));
  let B = [`${A.name}=${A.value}`];
  if (A.name.startsWith('__Secure-')) A.secure = !0;
  if (A.name.startsWith('__Host-')) ((A.secure = !0), (A.domain = null), (A.path = '/'));
  if (A.secure) B.push('Secure');
  if (A.httpOnly) B.push('HttpOnly');
  if (typeof A.maxAge === 'number') (SZ6(A.maxAge), B.push(`Max-Age=${A.maxAge}`));
  if (A.domain) (OZ6(A.domain), B.push(`Domain=${A.domain}`));
  if (A.path) (mv0(A.path), B.push(`Path=${A.path}`));
  if (A.expires && A.expires.toString() !== 'Invalid Date') B.push(`Expires=${dv0(A.expires)}`);
  if (A.sameSite) B.push(`SameSite=${A.sameSite}`);
  for (let Q of A.unparsed) {
    if (!Q.includes('=')) throw new Error('Invalid unparsed');
    let [I, ...G] = Q.split('=');
    B.push(`${I.trim()}=${G.join('=')}`);
  }
  return B.join('; ');
}
uv0.exports = {
  isCTLExcludingHtab: RZ6,
  validateCookieName: gv0,
  validateCookiePath: mv0,
  validateCookieValue: hv0,
  toIMFDate: dv0,
  stringify: _Z6,
};
