// Module: p1A
// Params: u1A

Object.defineProperty(u1A, '__esModule', { value: !0 });
function g1A(A, B) {
  let Q = 0;
  for (let I = A.length - 1; I >= 0; I--) {
    let G = A[I];
    if (G === '.') A.splice(I, 1);
    else if (G === '..') (A.splice(I, 1), Q++);
    else if (Q) (A.splice(I, 1), Q--);
  }
  if (B) for (; Q--; Q) A.unshift('..');
  return A;
}
var PO2 = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
function h1A(A) {
  let B = A.length > 1024 ? `<truncated>${A.slice(-1024)}` : A,
    Q = PO2.exec(B);
  return Q ? Q.slice(1) : [];
}
function Gw1(...A) {
  let B = '',
    Q = !1;
  for (let I = A.length - 1; I >= -1 && !Q; I--) {
    let G = I >= 0 ? A[I] : '/';
    if (!G) continue;
    ((B = `${G}/${B}`), (Q = G.charAt(0) === '/'));
  }
  return (
    (B = g1A(
      B.split('/').filter((I) => !!I),
      !Q
    ).join('/')),
    (Q ? '/' : '') + B || '.'
  );
}
function b1A(A) {
  let B = 0;
  for (; B < A.length; B++) if (A[B] !== '') break;
  let Q = A.length - 1;
  for (; Q >= 0; Q--) if (A[Q] !== '') break;
  if (B > Q) return [];
  return A.slice(B, Q - B + 1);
}
function SO2(A, B) {
  ((A = Gw1(A).slice(1)), (B = Gw1(B).slice(1)));
  let Q = b1A(A.split('/')),
    I = b1A(B.split('/')),
    G = Math.min(Q.length, I.length),
    D = G;
  for (let Y = 0; Y < G; Y++)
    if (Q[Y] !== I[Y]) {
      D = Y;
      break;
    }
  let Z = [];
  for (let Y = D; Y < Q.length; Y++) Z.push('..');
  return ((Z = Z.concat(I.slice(D))), Z.join('/'));
}
function m1A(A) {
  let B = d1A(A),
    Q = A.slice(-1) === '/',
    I = g1A(
      A.split('/').filter((G) => !!G),
      !B
    ).join('/');
  if (!I && !B) I = '.';
  if (I && Q) I += '/';
  return (B ? '/' : '') + I;
}
function d1A(A) {
  return A.charAt(0) === '/';
}
function _O2(...A) {
  return m1A(A.join('/'));
}
function jO2(A) {
  let B = h1A(A),
    Q = B[0],
    I = B[1];
  if (!Q && !I) return '.';
  if (I) I = I.slice(0, I.length - 1);
  return Q + I;
}
function yO2(A, B) {
  let Q = h1A(A)[2];
  if (B && Q.slice(B.length * -1) === B) Q = Q.slice(0, Q.length - B.length);
  return Q;
}
u1A.basename = yO2;
u1A.dirname = jO2;
u1A.isAbsolute = d1A;
u1A.join = _O2;
u1A.normalizePath = m1A;
u1A.relative = SO2;
u1A.resolve = Gw1;
