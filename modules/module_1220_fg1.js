// Module: fg1
// Params: vC8,xO0

var sZ1 = zg().Buffer,
  m06 = D1('stream'),
  d06 = D1('util');
function rZ1(A) {
  if (((this.buffer = null), (this.writable = !0), (this.readable = !0), !A))
    return ((this.buffer = sZ1.alloc(0)), this);
  if (typeof A.pipe === 'function') return ((this.buffer = sZ1.alloc(0)), A.pipe(this), this);
  if (A.length || typeof A === 'object')
    return (
      (this.buffer = A),
      (this.writable = !1),
      process.nextTick(
        function () {
          (this.emit('end', A), (this.readable = !1), this.emit('close'));
        }.bind(this)
      ),
      this
    );
  throw new TypeError('Unexpected data type (' + typeof A + ')');
}
d06.inherits(rZ1, m06);
rZ1.prototype.write = function A(B) {
  ((this.buffer = sZ1.concat([this.buffer, sZ1.from(B)])), this.emit('data', B));
};
rZ1.prototype.end = function A(B) {
  if (B) this.write(B);
  (this.emit('end', B), this.emit('close'), (this.writable = !1), (this.readable = !1));
};
xO0.exports = rZ1;
