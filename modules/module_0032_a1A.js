// Module: a1A
// Params: n1A

Object.defineProperty(n1A, '__esModule', { value: !0 });
function sO2(A) {
  let B = {},
    Q = 0;
  while (Q < A.length) {
    let I = A.indexOf('=', Q);
    if (I === -1) break;
    let G = A.indexOf(';', Q);
    if (G === -1) G = A.length;
    else if (G < I) {
      Q = A.lastIndexOf(';', I - 1) + 1;
      continue;
    }
    let D = A.slice(Q, I).trim();
    if (B[D] === void 0) {
      let Z = A.slice(I + 1, G).trim();
      if (Z.charCodeAt(0) === 34) Z = Z.slice(1, -1);
      try {
        B[D] = Z.indexOf('%') !== -1 ? decodeURIComponent(Z) : Z;
      } catch (Y) {
        B[D] = Z;
      }
    }
    Q = G + 1;
  }
  return B;
}
n1A.parseCookie = sO2;
