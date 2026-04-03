// Module: tO0
// Params: mC8,oO0

var I26 = zg().Buffer,
  nO0 = fg1(),
  G26 = hg1(),
  D26 = D1('stream'),
  aO0 = mg1(),
  dg1 = D1('util');
function sO0(A, B) {
  return I26.from(A, B)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}
function Z26(A, B, Q) {
  Q = Q || 'utf8';
  var I = sO0(aO0(A), 'binary'),
    G = sO0(aO0(B), Q);
  return dg1.format('%s.%s', I, G);
}
function rO0(A) {
  var { header: B, payload: Q } = A,
    I = A.secret || A.privateKey,
    G = A.encoding,
    D = G26(B.alg),
    Z = Z26(B, Q, G),
    Y = D.sign(Z, I);
  return dg1.format('%s.%s', Z, Y);
}
function tZ1(A) {
  var B = A.secret || A.privateKey || A.key,
    Q = new nO0(B);
  ((this.readable = !0),
    (this.header = A.header),
    (this.encoding = A.encoding),
    (this.secret = this.privateKey = this.key = Q),
    (this.payload = new nO0(A.payload)),
    this.secret.once(
      'close',
      function () {
        if (!this.payload.writable && this.readable) this.sign();
      }.bind(this)
    ),
    this.payload.once(
      'close',
      function () {
        if (!this.secret.writable && this.readable) this.sign();
      }.bind(this)
    ));
}
dg1.inherits(tZ1, D26);
tZ1.prototype.sign = function A() {
  try {
    var B = rO0({
      header: this.header,
      payload: this.payload.buffer,
      secret: this.secret.buffer,
      encoding: this.encoding,
    });
    return (this.emit('done', B), this.emit('data', B), this.emit('end'), (this.readable = !1), B);
  } catch (Q) {
    ((this.readable = !1), this.emit('error', Q), this.emit('close'));
  }
};
tZ1.sign = rO0;
oO0.exports = tZ1;
