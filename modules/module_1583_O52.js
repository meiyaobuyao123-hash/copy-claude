// Module: O52
// Params: YR8,R52

R52.exports = XI;
var Uo = Bw();
function XI(A, B) {
  ((this.lo = A >>> 0), (this.hi = B >>> 0));
}
var P_ = (XI.zero = new XI(0, 0));
P_.toNumber = function () {
  return 0;
};
P_.zzEncode = P_.zzDecode = function () {
  return this;
};
P_.length = function () {
  return 1;
};
var rb6 = (XI.zeroHash = '\x00\x00\x00\x00\x00\x00\x00\x00');
XI.fromNumber = function A(B) {
  if (B === 0) return P_;
  var Q = B < 0;
  if (Q) B = -B;
  var I = B >>> 0,
    G = ((B - I) / 4294967296) >>> 0;
  if (Q) {
    if (((G = ~G >>> 0), (I = ~I >>> 0), ++I > 4294967295)) {
      if (((I = 0), ++G > 4294967295)) G = 0;
    }
  }
  return new XI(I, G);
};
XI.from = function A(B) {
  if (typeof B === 'number') return XI.fromNumber(B);
  if (Uo.isString(B))
    if (Uo.Long) B = Uo.Long.fromString(B);
    else return XI.fromNumber(parseInt(B, 10));
  return B.low || B.high ? new XI(B.low >>> 0, B.high >>> 0) : P_;
};
XI.prototype.toNumber = function A(B) {
  if (!B && this.hi >>> 31) {
    var Q = (~this.lo + 1) >>> 0,
      I = ~this.hi >>> 0;
    if (!Q) I = (I + 1) >>> 0;
    return -(Q + I * 4294967296);
  }
  return this.lo + this.hi * 4294967296;
};
XI.prototype.toLong = function A(B) {
  return Uo.Long
    ? new Uo.Long(this.lo | 0, this.hi | 0, Boolean(B))
    : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(B) };
};
var XR = String.prototype.charCodeAt;
XI.fromHash = function A(B) {
  if (B === rb6) return P_;
  return new XI(
    (XR.call(B, 0) | (XR.call(B, 1) << 8) | (XR.call(B, 2) << 16) | (XR.call(B, 3) << 24)) >>> 0,
    (XR.call(B, 4) | (XR.call(B, 5) << 8) | (XR.call(B, 6) << 16) | (XR.call(B, 7) << 24)) >>> 0
  );
};
XI.prototype.toHash = function A() {
  return String.fromCharCode(
    this.lo & 255,
    (this.lo >>> 8) & 255,
    (this.lo >>> 16) & 255,
    this.lo >>> 24,
    this.hi & 255,
    (this.hi >>> 8) & 255,
    (this.hi >>> 16) & 255,
    this.hi >>> 24
  );
};
XI.prototype.zzEncode = function A() {
  var B = this.hi >> 31;
  return (
    (this.hi = (((this.hi << 1) | (this.lo >>> 31)) ^ B) >>> 0),
    (this.lo = ((this.lo << 1) ^ B) >>> 0),
    this
  );
};
XI.prototype.zzDecode = function A() {
  var B = -(this.lo & 1);
  return (
    (this.lo = (((this.lo >>> 1) | (this.hi << 31)) ^ B) >>> 0),
    (this.hi = ((this.hi >>> 1) ^ B) >>> 0),
    this
  );
};
XI.prototype.length = function A() {
  var B = this.lo,
    Q = ((this.lo >>> 28) | (this.hi << 4)) >>> 0,
    I = this.hi >>> 24;
  return I === 0
    ? Q === 0
      ? B < 16384
        ? B < 128
          ? 1
          : 2
        : B < 2097152
          ? 3
          : 4
      : Q < 16384
        ? Q < 128
          ? 5
          : 6
        : Q < 2097152
          ? 7
          : 8
    : I < 128
      ? 9
      : 10;
};
