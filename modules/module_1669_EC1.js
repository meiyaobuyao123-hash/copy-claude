// Module: EC1
// Params: tO8,h72

h72.exports = Dw;
var kc6 = Bw();
function Dw(A) {
  if (A) for (var B = Object.keys(A), Q = 0; Q < B.length; ++Q) this[B[Q]] = A[B[Q]];
}
Dw.create = function A(B) {
  return this.$type.create(B);
};
Dw.encode = function A(B, Q) {
  return this.$type.encode(B, Q);
};
Dw.encodeDelimited = function A(B, Q) {
  return this.$type.encodeDelimited(B, Q);
};
Dw.decode = function A(B) {
  return this.$type.decode(B);
};
Dw.decodeDelimited = function A(B) {
  return this.$type.decodeDelimited(B);
};
Dw.verify = function A(B) {
  return this.$type.verify(B);
};
Dw.fromObject = function A(B) {
  return this.$type.fromObject(B);
};
Dw.toObject = function A(B, Q) {
  return this.$type.toObject(B, Q);
};
Dw.prototype.toJSON = function A() {
  return this.$type.toObject(this, kc6.toJSONOptions);
};
