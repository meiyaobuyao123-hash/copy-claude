// Module: wC1
// Params: oO8,g72

g72.exports = RC;
var $R = $m();
((RC.prototype = Object.create($R.prototype)).constructor = RC).className = 'Service';
var di1 = zC1(),
  po = VI(),
  yc6 = yl1();
function RC(A, B) {
  ($R.call(this, A, B), (this.methods = {}), (this._methodsArray = null));
}
RC.fromJSON = function A(B, Q) {
  var I = new RC(B, Q.options);
  if (Q.methods)
    for (var G = Object.keys(Q.methods), D = 0; D < G.length; ++D)
      I.add(di1.fromJSON(G[D], Q.methods[G[D]]));
  if (Q.nested) I.addJSON(Q.nested);
  return ((I.comment = Q.comment), I);
};
RC.prototype.toJSON = function A(B) {
  var Q = $R.prototype.toJSON.call(this, B),
    I = B ? Boolean(B.keepComments) : !1;
  return po.toObject([
    'options',
    (Q && Q.options) || void 0,
    'methods',
    $R.arrayToJSON(this.methodsArray, B) || {},
    'nested',
    (Q && Q.nested) || void 0,
    'comment',
    I ? this.comment : void 0,
  ]);
};
Object.defineProperty(RC.prototype, 'methodsArray', {
  get: function () {
    return this._methodsArray || (this._methodsArray = po.toArray(this.methods));
  },
});
function b72(A) {
  return ((A._methodsArray = null), A);
}
RC.prototype.get = function A(B) {
  return this.methods[B] || $R.prototype.get.call(this, B);
};
RC.prototype.resolveAll = function A() {
  var B = this.methodsArray;
  for (var Q = 0; Q < B.length; ++Q) B[Q].resolve();
  return $R.prototype.resolve.call(this);
};
RC.prototype.add = function A(B) {
  if (this.get(B.name)) throw Error("duplicate name '" + B.name + "' in " + this);
  if (B instanceof di1) return ((this.methods[B.name] = B), (B.parent = this), b72(this));
  return $R.prototype.add.call(this, B);
};
RC.prototype.remove = function A(B) {
  if (B instanceof di1) {
    if (this.methods[B.name] !== B) throw Error(B + ' is not a member of ' + this);
    return (delete this.methods[B.name], (B.parent = null), b72(this));
  }
  return $R.prototype.remove.call(this, B);
};
RC.prototype.create = function A(B, Q, I) {
  var G = new yc6.Service(B, Q, I);
  for (var D = 0, Z; D < this.methodsArray.length; ++D) {
    var Y = po.lcFirst((Z = this._methodsArray[D]).resolve().name).replace(/[^$\w_]/g, '');
    G[Y] = po.codegen(['r', 'c'], po.isReserved(Y) ? Y + '_' : Y)('return this.rpcCall(m,q,s,r,c)')(
      { m: Z, q: Z.resolvedRequestType.ctor, s: Z.resolvedResponseType.ctor }
    );
  }
  return G;
};
