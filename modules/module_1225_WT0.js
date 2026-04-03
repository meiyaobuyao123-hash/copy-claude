// Module: WT0
// Params: dC8,YT0

var AT0 = zg().Buffer,
  eO0 = fg1(),
  Y26 = hg1(),
  W26 = D1('stream'),
  BT0 = mg1(),
  F26 = D1('util'),
  J26 = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
function C26(A) {
  return Object.prototype.toString.call(A) === '[object Object]';
}
function X26(A) {
  if (C26(A)) return A;
  try {
    return JSON.parse(A);
  } catch (B) {
    return;
  }
}
function QT0(A) {
  var B = A.split('.', 1)[0];
  return X26(AT0.from(B, 'base64').toString('binary'));
}
function V26(A) {
  return A.split('.', 2).join('.');
}
function IT0(A) {
  return A.split('.')[2];
}
function K26(A, B) {
  B = B || 'utf8';
  var Q = A.split('.')[1];
  return AT0.from(Q, 'base64').toString(B);
}
function GT0(A) {
  return J26.test(A) && !!QT0(A);
}
function DT0(A, B, Q) {
  if (!B) {
    var I = new Error('Missing algorithm parameter for jws.verify');
    throw ((I.code = 'MISSING_ALGORITHM'), I);
  }
  A = BT0(A);
  var G = IT0(A),
    D = V26(A),
    Z = Y26(B);
  return Z.verify(D, G, Q);
}
function ZT0(A, B) {
  if (((B = B || {}), (A = BT0(A)), !GT0(A))) return null;
  var Q = QT0(A);
  if (!Q) return null;
  var I = K26(A);
  if (Q.typ === 'JWT' || B.json) I = JSON.parse(I, B.encoding);
  return { header: Q, payload: I, signature: IT0(A) };
}
function Ng(A) {
  A = A || {};
  var B = A.secret || A.publicKey || A.key,
    Q = new eO0(B);
  ((this.readable = !0),
    (this.algorithm = A.algorithm),
    (this.encoding = A.encoding),
    (this.secret = this.publicKey = this.key = Q),
    (this.signature = new eO0(A.signature)),
    this.secret.once(
      'close',
      function () {
        if (!this.signature.writable && this.readable) this.verify();
      }.bind(this)
    ),
    this.signature.once(
      'close',
      function () {
        if (!this.secret.writable && this.readable) this.verify();
      }.bind(this)
    ));
}
F26.inherits(Ng, W26);
Ng.prototype.verify = function A() {
  try {
    var B = DT0(this.signature.buffer, this.algorithm, this.key.buffer),
      Q = ZT0(this.signature.buffer, this.encoding);
    return (
      this.emit('done', B, Q),
      this.emit('data', B),
      this.emit('end'),
      (this.readable = !1),
      B
    );
  } catch (I) {
    ((this.readable = !1), this.emit('error', I), this.emit('close'));
  }
};
Ng.decode = ZT0;
Ng.isValid = GT0;
Ng.verify = DT0;
YT0.exports = Ng;
