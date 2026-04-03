// Module: MmA
// Params: zd5,qmA

var Fe9 = /^[-+]?0x[a-fA-F0-9]+$/,
  Je9 = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
if (!Number.parseInt && window.parseInt) Number.parseInt = window.parseInt;
if (!Number.parseFloat && window.parseFloat) Number.parseFloat = window.parseFloat;
var Ce9 = { hex: !0, leadingZeros: !0, decimalPoint: '.', eNotation: !0 };
function Xe9(A, B = {}) {
  if (((B = Object.assign({}, Ce9, B)), !A || typeof A !== 'string')) return A;
  let Q = A.trim();
  if (B.skipLike !== void 0 && B.skipLike.test(Q)) return A;
  else if (B.hex && Fe9.test(Q)) return Number.parseInt(Q, 16);
  else {
    let I = Je9.exec(Q);
    if (I) {
      let G = I[1],
        D = I[2],
        Z = Ve9(I[3]),
        Y = I[4] || I[6];
      if (!B.leadingZeros && D.length > 0 && G && Q[2] !== '.') return A;
      else if (!B.leadingZeros && D.length > 0 && !G && Q[1] !== '.') return A;
      else {
        let W = Number(Q),
          F = '' + W;
        if (F.search(/[eE]/) !== -1)
          if (B.eNotation) return W;
          else return A;
        else if (Y)
          if (B.eNotation) return W;
          else return A;
        else if (Q.indexOf('.') !== -1)
          if (F === '0' && Z === '') return W;
          else if (F === Z) return W;
          else if (G && F === '-' + Z) return W;
          else return A;
        if (D)
          if (Z === F) return W;
          else if (G + Z === F) return W;
          else return A;
        if (Q === F) return W;
        else if (Q === G + F) return W;
        return A;
      }
    } else return A;
  }
}
function Ve9(A) {
  if (A && A.indexOf('.') !== -1) {
    if (((A = A.replace(/0+$/, '')), A === '.')) A = '0';
    else if (A[0] === '.') A = '0' + A;
    else if (A[A.length - 1] === '.') A = A.substr(0, A.length - 1);
    return A;
  }
  return A;
}
qmA.exports = Xe9;
