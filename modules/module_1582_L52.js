// Module: L52
// Params: ZR8,M52

M52.exports = sb6;
function sb6(A, B, Q) {
  var I = Q || 8192,
    G = I >>> 1,
    D = null,
    Z = I;
  return function Y(W) {
    if (W < 1 || W > G) return A(W);
    if (Z + W > I) ((D = A(I)), (Z = 0));
    var F = B.call(D, Z, (Z += W));
    if (Z & 7) Z = (Z | 7) + 1;
    return F;
  };
}
