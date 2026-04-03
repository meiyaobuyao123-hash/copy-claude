// Module: NR
// Params: iO8,T72

T72.exports = MC;
var CC1 = x_();
((MC.prototype = Object.create(CC1.prototype)).constructor = MC).className = 'Field';
var R72 = lV(),
  O72 = k_(),
  A7 = VI(),
  bi1,
  Sc6 = /^required|optional|repeated$/;
MC.fromJSON = function A(B, Q) {
  return new MC(B, Q.id, Q.type, Q.rule, Q.extend, Q.options, Q.comment);
};
function MC(A, B, Q, I, G, D, Z) {
  if (A7.isObject(I)) ((Z = G), (D = I), (I = G = void 0));
  else if (A7.isObject(G)) ((Z = D), (D = G), (G = void 0));
  if ((CC1.call(this, A, D), !A7.isInteger(B) || B < 0))
    throw TypeError('id must be a non-negative integer');
  if (!A7.isString(Q)) throw TypeError('type must be a string');
  if (I !== void 0 && !Sc6.test((I = I.toString().toLowerCase())))
    throw TypeError('rule must be a string rule');
  if (G !== void 0 && !A7.isString(G)) throw TypeError('extend must be a string');
  if (I === 'proto3_optional') I = 'optional';
  ((this.rule = I && I !== 'optional' ? I : void 0),
    (this.type = Q),
    (this.id = B),
    (this.extend = G || void 0),
    (this.required = I === 'required'),
    (this.optional = !this.required),
    (this.repeated = I === 'repeated'),
    (this.map = !1),
    (this.message = null),
    (this.partOf = null),
    (this.typeDefault = null),
    (this.defaultValue = null),
    (this.long = A7.Long ? O72.long[Q] !== void 0 : !1),
    (this.bytes = Q === 'bytes'),
    (this.resolvedType = null),
    (this.extensionField = null),
    (this.declaringField = null),
    (this._packed = null),
    (this.comment = Z));
}
Object.defineProperty(MC.prototype, 'packed', {
  get: function () {
    if (this._packed === null) this._packed = this.getOption('packed') !== !1;
    return this._packed;
  },
});
MC.prototype.setOption = function A(B, Q, I) {
  if (B === 'packed') this._packed = null;
  return CC1.prototype.setOption.call(this, B, Q, I);
};
MC.prototype.toJSON = function A(B) {
  var Q = B ? Boolean(B.keepComments) : !1;
  return A7.toObject([
    'rule',
    (this.rule !== 'optional' && this.rule) || void 0,
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
MC.prototype.resolve = function A() {
  if (this.resolved) return this;
  if ((this.typeDefault = O72.defaults[this.type]) === void 0)
    if (
      ((this.resolvedType = (
        this.declaringField ? this.declaringField.parent : this.parent
      ).lookupTypeOrEnum(this.type)),
      this.resolvedType instanceof bi1)
    )
      this.typeDefault = null;
    else this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
  else if (this.options && this.options.proto3_optional) this.typeDefault = null;
  if (this.options && this.options.default != null) {
    if (
      ((this.typeDefault = this.options.default),
      this.resolvedType instanceof R72 && typeof this.typeDefault === 'string')
    )
      this.typeDefault = this.resolvedType.values[this.typeDefault];
  }
  if (this.options) {
    if (
      this.options.packed === !0 ||
      (this.options.packed !== void 0 && this.resolvedType && !(this.resolvedType instanceof R72))
    )
      delete this.options.packed;
    if (!Object.keys(this.options).length) this.options = void 0;
  }
  if (this.long) {
    if (
      ((this.typeDefault = A7.Long.fromNumber(this.typeDefault, this.type.charAt(0) === 'u')),
      Object.freeze)
    )
      Object.freeze(this.typeDefault);
  } else if (this.bytes && typeof this.typeDefault === 'string') {
    var B;
    if (A7.base64.test(this.typeDefault))
      A7.base64.decode(this.typeDefault, (B = A7.newBuffer(A7.base64.length(this.typeDefault))), 0);
    else A7.utf8.write(this.typeDefault, (B = A7.newBuffer(A7.utf8.length(this.typeDefault))), 0);
    this.typeDefault = B;
  }
  if (this.map) this.defaultValue = A7.emptyObject;
  else if (this.repeated) this.defaultValue = A7.emptyArray;
  else this.defaultValue = this.typeDefault;
  if (this.parent instanceof bi1) this.parent.ctor.prototype[this.name] = this.defaultValue;
  return CC1.prototype.resolve.call(this);
};
MC.d = function A(B, Q, I, G) {
  if (typeof Q === 'function') Q = A7.decorateType(Q).name;
  else if (Q && typeof Q === 'object') Q = A7.decorateEnum(Q).name;
  return function D(Z, Y) {
    A7.decorateType(Z.constructor).add(new MC(Y, B, Q, I, { default: G }));
  };
};
MC._configure = function A(B) {
  bi1 = B;
};
