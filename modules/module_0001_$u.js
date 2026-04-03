// Module: $u
// Params: qe1

Object.defineProperty(qe1, '__esModule', { value: !0 });
var o11 = QJ();
function vq2(A, B = 0) {
  if (typeof A !== 'string' || B === 0) return A;
  return A.length <= B ? A : `${A.slice(0, B)}...`;
}
function bq2(A, B) {
  let Q = A,
    I = Q.length;
  if (I <= 150) return Q;
  if (B > I) B = I;
  let G = Math.max(B - 60, 0);
  if (G < 5) G = 0;
  let D = Math.min(G + 140, I);
  if (D > I - 5) D = I;
  if (D === I) G = Math.max(D - 140, 0);
  if (((Q = Q.slice(G, D)), G > 0)) Q = `'{snip} ${Q}`;
  if (D < I) Q += ' {snip}';
  return Q;
}
function gq2(A, B) {
  if (!Array.isArray(A)) return '';
  let Q = [];
  for (let I = 0; I < A.length; I++) {
    let G = A[I];
    try {
      if (o11.isVueViewModel(G)) Q.push('[VueViewModel]');
      else Q.push(String(G));
    } catch (D) {
      Q.push('[value cannot be serialized]');
    }
  }
  return Q.join(B);
}
function $e1(A, B, Q = !1) {
  if (!o11.isString(A)) return !1;
  if (o11.isRegExp(B)) return B.test(A);
  if (o11.isString(B)) return Q ? A === B : A.includes(B);
  return !1;
}
function hq2(A, B = [], Q = !1) {
  return B.some((I) => $e1(A, I, Q));
}
qe1.isMatchingPattern = $e1;
qe1.safeJoin = gq2;
qe1.snipLine = bq2;
qe1.stringMatchesSomePattern = hq2;
qe1.truncate = vq2;
