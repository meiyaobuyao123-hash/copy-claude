// Module: Q82
// Params: A82

Object.defineProperty(A82, '__esModule', { value: !0 });
A82.hexToBinary = void 0;
function e52(A) {
  if (A >= 48 && A <= 57) return A - 48;
  if (A >= 97 && A <= 102) return A - 87;
  return A - 55;
}
function Ig6(A) {
  let B = new Uint8Array(A.length / 2),
    Q = 0;
  for (let I = 0; I < A.length; I += 2) {
    let G = e52(A.charCodeAt(I)),
      D = e52(A.charCodeAt(I + 1));
    B[Q++] = (G << 4) | D;
  }
  return B;
}
A82.hexToBinary = Ig6;
