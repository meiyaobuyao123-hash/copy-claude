// Module: $g1
// Params: uA6

uA6.byteLength = vA6;
uA6.toByteArray = gA6;
uA6.fromByteArray = dA6;
var Rz = [],
  eJ = [],
  fA6 = typeof Uint8Array !== 'undefined' ? Uint8Array : Array,
  Ug1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for (EL = 0, Ng1 = Ug1.length; EL < Ng1; ++EL) ((Rz[EL] = Ug1[EL]), (eJ[Ug1.charCodeAt(EL)] = EL));
var EL, Ng1;
eJ[45] = 62;
eJ[95] = 63;
function hR0(A) {
  var B = A.length;
  if (B % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
  var Q = A.indexOf('=');
  if (Q === -1) Q = B;
  var I = Q === B ? 0 : 4 - (Q % 4);
  return [Q, I];
}
function vA6(A) {
  var B = hR0(A),
    Q = B[0],
    I = B[1];
  return ((Q + I) * 3) / 4 - I;
}
function bA6(A, B, Q) {
  return ((B + Q) * 3) / 4 - Q;
}
function gA6(A) {
  var B,
    Q = hR0(A),
    I = Q[0],
    G = Q[1],
    D = new fA6(bA6(A, I, G)),
    Z = 0,
    Y = G > 0 ? I - 4 : I,
    W;
  for (W = 0; W < Y; W += 4)
    ((B =
      (eJ[A.charCodeAt(W)] << 18) |
      (eJ[A.charCodeAt(W + 1)] << 12) |
      (eJ[A.charCodeAt(W + 2)] << 6) |
      eJ[A.charCodeAt(W + 3)]),
      (D[Z++] = (B >> 16) & 255),
      (D[Z++] = (B >> 8) & 255),
      (D[Z++] = B & 255));
  if (G === 2)
    ((B = (eJ[A.charCodeAt(W)] << 2) | (eJ[A.charCodeAt(W + 1)] >> 4)), (D[Z++] = B & 255));
  if (G === 1)
    ((B =
      (eJ[A.charCodeAt(W)] << 10) |
      (eJ[A.charCodeAt(W + 1)] << 4) |
      (eJ[A.charCodeAt(W + 2)] >> 2)),
      (D[Z++] = (B >> 8) & 255),
      (D[Z++] = B & 255));
  return D;
}
function hA6(A) {
  return Rz[(A >> 18) & 63] + Rz[(A >> 12) & 63] + Rz[(A >> 6) & 63] + Rz[A & 63];
}
function mA6(A, B, Q) {
  var I,
    G = [];
  for (var D = B; D < Q; D += 3)
    ((I = ((A[D] << 16) & 16711680) + ((A[D + 1] << 8) & 65280) + (A[D + 2] & 255)),
      G.push(hA6(I)));
  return G.join('');
}
function dA6(A) {
  var B,
    Q = A.length,
    I = Q % 3,
    G = [],
    D = 16383;
  for (var Z = 0, Y = Q - I; Z < Y; Z += D) G.push(mA6(A, Z, Z + D > Y ? Y : Z + D));
  if (I === 1) ((B = A[Q - 1]), G.push(Rz[B >> 2] + Rz[(B << 4) & 63] + '=='));
  else if (I === 2)
    ((B = (A[Q - 2] << 8) + A[Q - 1]),
      G.push(Rz[B >> 10] + Rz[(B >> 4) & 63] + Rz[(B << 2) & 63] + '='));
  return G.join('');
}
