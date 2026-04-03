// Module: KH2
// Params: XH2

Object.defineProperty(XH2, '__esModule', { value: !0 });
XH2.hyphenate = XH2.parse = void 0;
function w65(A) {
  let B = [],
    Q = 0,
    I = 0,
    G = 0,
    D = 0,
    Z = 0,
    Y = null;
  while (Q < A.length)
    switch (A.charCodeAt(Q++)) {
      case 40:
        I++;
        break;
      case 41:
        I--;
        break;
      case 39:
        if (G === 0) G = 39;
        else if (G === 39 && A.charCodeAt(Q - 1) !== 92) G = 0;
        break;
      case 34:
        if (G === 0) G = 34;
        else if (G === 34 && A.charCodeAt(Q - 1) !== 92) G = 0;
        break;
      case 58:
        if (!Y && I === 0 && G === 0) ((Y = CH2(A.substring(Z, Q - 1).trim())), (D = Q));
        break;
      case 59:
        if (Y && D > 0 && I === 0 && G === 0) {
          let F = A.substring(D, Q - 1).trim();
          (B.push(Y, F), (Z = Q), (D = 0), (Y = null));
        }
        break;
    }
  if (Y && D) {
    let W = A.slice(D).trim();
    B.push(Y, W);
  }
  return B;
}
XH2.parse = w65;
function CH2(A) {
  return A.replace(/[a-z][A-Z]/g, (B) => {
    return B.charAt(0) + '-' + B.charAt(1);
  }).toLowerCase();
}
XH2.hyphenate = CH2;
