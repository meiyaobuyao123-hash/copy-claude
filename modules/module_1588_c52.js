// Module: c52
// Params: XR8,p52

p52.exports = S_;
var u52 = fJ1();
(S_.prototype = Object.create(u52.prototype)).constructor = S_;
var d52 = Bw();
function S_(A) {
  u52.call(this, A);
}
S_._configure = function () {
  if (d52.Buffer) S_.prototype._slice = d52.Buffer.prototype.slice;
};
S_.prototype.string = function A() {
  var B = this.uint32();
  return this.buf.utf8Slice
    ? this.buf.utf8Slice(this.pos, (this.pos = Math.min(this.pos + B, this.len)))
    : this.buf.toString('utf-8', this.pos, (this.pos = Math.min(this.pos + B, this.len)));
};
S_._configure();
