// Module: mg1
// Params: hC8,iO0

var Q26 = D1('buffer').Buffer;
iO0.exports = function A(B) {
  if (typeof B === 'string') return B;
  if (typeof B === 'number' || Q26.isBuffer(B)) return B.toString();
  return JSON.stringify(B);
};
