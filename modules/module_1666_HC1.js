// Module: HC1
// Params: sO8,f72

f72.exports = $N;
var hi1 = NR();
(($N.prototype = Object.create(hi1.prototype)).constructor = $N).className = 'MapField';
var jc6 = k_(),
  uo = VI();
function $N(A, B, Q, I, G, D) {
  if ((hi1.call(this, A, B, I, void 0, void 0, G, D), !uo.isString(Q)))
    throw TypeError('keyType must be a string');
  ((this.keyType = Q), (this.resolvedKeyType = null), (this.map = !0));
}
$N.fromJSON = function A(B, Q) {
  return new $N(B, Q.id, Q.keyType, Q.type, Q.options, Q.comment);
};
$N.prototype.toJSON = function A(B) {
  var Q = B ? Boolean(B.keepComments) : !1;
  return uo.toObject([
    'keyType',
    this.keyType,
    'type',
    this.type,
    'id',
    this.id,
    'extend',
    this.extend,
    'options',
    this.options,
    'comment',
    Q ? this.comment : void 0,
  ]);
};
$N.prototype.resolve = function A() {
  if (this.resolved) return this;
  if (jc6.mapKey[this.keyType] === void 0) throw Error('invalid key type: ' + this.keyType);
  return hi1.prototype.resolve.call(this);
};
$N.d = function A(B, Q, I) {
  if (typeof I === 'function') I = uo.decorateType(I).name;
  else if (I && typeof I === 'object') I = uo.decorateEnum(I).name;
  return function G(D, Z) {
    uo.decorateType(D.constructor).add(new $N(Z, B, Q, I));
  };
};
