// Module: lV
// Params: YT8,GI2

GI2.exports = Yw;
var QI2 = x_();
((Yw.prototype = Object.create(QI2.prototype)).constructor = Yw).className = 'Enum';
var II2 = $m(),
  TC1 = VI();
function Yw(A, B, Q, I, G, D) {
  if ((QI2.call(this, A, Q), B && typeof B !== 'object'))
    throw TypeError('values must be an object');
  if (
    ((this.valuesById = {}),
    (this.values = Object.create(this.valuesById)),
    (this.comment = I),
    (this.comments = G || {}),
    (this.valuesOptions = D),
    (this.reserved = void 0),
    B)
  ) {
    for (var Z = Object.keys(B), Y = 0; Y < Z.length; ++Y)
      if (typeof B[Z[Y]] === 'number') this.valuesById[(this.values[Z[Y]] = B[Z[Y]])] = Z[Y];
  }
}
Yw.fromJSON = function A(B, Q) {
  var I = new Yw(B, Q.values, Q.options, Q.comment, Q.comments);
  return ((I.reserved = Q.reserved), I);
};
Yw.prototype.toJSON = function A(B) {
  var Q = B ? Boolean(B.keepComments) : !1;
  return TC1.toObject([
    'options',
    this.options,
    'valuesOptions',
    this.valuesOptions,
    'values',
    this.values,
    'reserved',
    this.reserved && this.reserved.length ? this.reserved : void 0,
    'comment',
    Q ? this.comment : void 0,
    'comments',
    Q ? this.comments : void 0,
  ]);
};
Yw.prototype.add = function A(B, Q, I, G) {
  if (!TC1.isString(B)) throw TypeError('name must be a string');
  if (!TC1.isInteger(Q)) throw TypeError('id must be an integer');
  if (this.values[B] !== void 0) throw Error("duplicate name '" + B + "' in " + this);
  if (this.isReservedId(Q)) throw Error('id ' + Q + ' is reserved in ' + this);
  if (this.isReservedName(B)) throw Error("name '" + B + "' is reserved in " + this);
  if (this.valuesById[Q] !== void 0) {
    if (!(this.options && this.options.allow_alias))
      throw Error('duplicate id ' + Q + ' in ' + this);
    this.values[B] = Q;
  } else this.valuesById[(this.values[B] = Q)] = B;
  if (G) {
    if (this.valuesOptions === void 0) this.valuesOptions = {};
    this.valuesOptions[B] = G || null;
  }
  return ((this.comments[B] = I || null), this);
};
Yw.prototype.remove = function A(B) {
  if (!TC1.isString(B)) throw TypeError('name must be a string');
  var Q = this.values[B];
  if (Q == null) throw Error("name '" + B + "' does not exist in " + this);
  if (
    (delete this.valuesById[Q], delete this.values[B], delete this.comments[B], this.valuesOptions)
  )
    delete this.valuesOptions[B];
  return this;
};
Yw.prototype.isReservedId = function A(B) {
  return II2.isReservedId(this.reserved, B);
};
Yw.prototype.isReservedName = function A(B) {
  return II2.isReservedName(this.reserved, B);
};
