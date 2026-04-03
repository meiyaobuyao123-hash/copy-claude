// Module: IO0
// Params: TC8,QO0

function Lg1(A) {
  var B = ((A / 8) | 0) + (A % 8 === 0 ? 0 : 1);
  return B;
}
var W06 = { ES256: Lg1(256), ES384: Lg1(384), ES512: Lg1(521) };
function F06(A) {
  var B = W06[A];
  if (B) return B;
  throw new Error('Unknown algorithm "' + A + '"');
}
QO0.exports = F06;
