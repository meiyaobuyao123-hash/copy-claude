// Module: kT1
// Params: VpA

Object.defineProperty(VpA, '__esModule', { value: !0 });
VpA.default = void 0;
var W94 = F94(Sl());
function F94(A) {
  return A && A.__esModule ? A : { default: A };
}
function J94(A) {
  if (!W94.default(A)) throw TypeError('Invalid UUID');
  let B,
    Q = new Uint8Array(16);
  return (
    (Q[0] = (B = parseInt(A.slice(0, 8), 16)) >>> 24),
    (Q[1] = (B >>> 16) & 255),
    (Q[2] = (B >>> 8) & 255),
    (Q[3] = B & 255),
    (Q[4] = (B = parseInt(A.slice(9, 13), 16)) >>> 8),
    (Q[5] = B & 255),
    (Q[6] = (B = parseInt(A.slice(14, 18), 16)) >>> 8),
    (Q[7] = B & 255),
    (Q[8] = (B = parseInt(A.slice(19, 23), 16)) >>> 8),
    (Q[9] = B & 255),
    (Q[10] = ((B = parseInt(A.slice(24, 36), 16)) / 1099511627776) & 255),
    (Q[11] = (B / 4294967296) & 255),
    (Q[12] = (B >>> 24) & 255),
    (Q[13] = (B >>> 16) & 255),
    (Q[14] = (B >>> 8) & 255),
    (Q[15] = B & 255),
    Q
  );
}
var C94 = J94;
VpA.default = C94;
