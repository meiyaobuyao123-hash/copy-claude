// Module: Em
// Params: nO8,_72

_72.exports = LC;
var VC1 = x_();
((LC.prototype = Object.create(VC1.prototype)).constructor = LC).className = 'OneOf';
var P72 = NR(),
  XC1 = VI();
function LC(A, B, Q, I) {
  if (!Array.isArray(B)) ((Q = B), (B = void 0));
  if ((VC1.call(this, A, Q), !(B === void 0 || Array.isArray(B))))
    throw TypeError('fieldNames must be an Array');
  ((this.oneof = B || []), (this.fieldsArray = []), (this.comment = I));
}
LC.fromJSON = function A(B, Q) {
  return new LC(B, Q.oneof, Q.options, Q.comment);
};
LC.prototype.toJSON = function A(B) {
  var Q = B ? Boolean(B.keepComments) : !1;
  return XC1.toObject([
    'options',
    this.options,
    'oneof',
    this.oneof,
    'comment',
    Q ? this.comment : void 0,
  ]);
};
function S72(A) {
  if (A.parent) {
    for (var B = 0; B < A.fieldsArray.length; ++B)
      if (!A.fieldsArray[B].parent) A.parent.add(A.fieldsArray[B]);
  }
}
LC.prototype.add = function A(B) {
  if (!(B instanceof P72)) throw TypeError('field must be a Field');
  if (B.parent && B.parent !== this.parent) B.parent.remove(B);
  return (this.oneof.push(B.name), this.fieldsArray.push(B), (B.partOf = this), S72(this), this);
};
LC.prototype.remove = function A(B) {
  if (!(B instanceof P72)) throw TypeError('field must be a Field');
  var Q = this.fieldsArray.indexOf(B);
  if (Q < 0) throw Error(B + ' is not a member of ' + this);
  if ((this.fieldsArray.splice(Q, 1), (Q = this.oneof.indexOf(B.name)), Q > -1))
    this.oneof.splice(Q, 1);
  return ((B.partOf = null), this);
};
LC.prototype.onAdd = function A(B) {
  VC1.prototype.onAdd.call(this, B);
  var Q = this;
  for (var I = 0; I < this.oneof.length; ++I) {
    var G = B.get(this.oneof[I]);
    if (G && !G.partOf) ((G.partOf = Q), Q.fieldsArray.push(G));
  }
  S72(this);
};
LC.prototype.onRemove = function A(B) {
  for (var Q = 0, I; Q < this.fieldsArray.length; ++Q)
    if ((I = this.fieldsArray[Q]).parent) I.parent.remove(I);
  VC1.prototype.onRemove.call(this, B);
};
LC.d = function A() {
  var B = new Array(arguments.length),
    Q = 0;
  while (Q < arguments.length) B[Q] = arguments[Q++];
  return function I(G, D) {
    (XC1.decorateType(G.constructor).add(new LC(D, B)),
      Object.defineProperty(G, D, { get: XC1.oneOfGetter(B), set: XC1.oneOfSetter(B) }));
  };
};
