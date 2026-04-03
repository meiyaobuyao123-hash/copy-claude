// Module: vO0
// Params: bC8,fO0

var Ws = D1('buffer').Buffer,
  vg1 = D1('buffer').SlowBuffer;
fO0.exports = oZ1;
function oZ1(A, B) {
  if (!Ws.isBuffer(A) || !Ws.isBuffer(B)) return !1;
  if (A.length !== B.length) return !1;
  var Q = 0;
  for (var I = 0; I < A.length; I++) Q |= A[I] ^ B[I];
  return Q === 0;
}
oZ1.install = function () {
  Ws.prototype.equal = vg1.prototype.equal = function A(B) {
    return oZ1(this, B);
  };
};
var u06 = Ws.prototype.equal,
  p06 = vg1.prototype.equal;
oZ1.restore = function () {
  ((Ws.prototype.equal = u06), (vg1.prototype.equal = p06));
};
