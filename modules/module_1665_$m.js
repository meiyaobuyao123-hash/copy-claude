// Module: $m
// Params: aO8,x72

x72.exports = w5;
var gi1 = x_();
((w5.prototype = Object.create(gi1.prototype)).constructor = w5).className = 'Namespace';
var j72 = NR(),
  KC1 = VI(),
  _c6 = Em(),
  Um,
  mo,
  Nm;
w5.fromJSON = function A(B, Q) {
  return new w5(B, Q.options).addJSON(Q.nested);
};
function y72(A, B) {
  if (!(A && A.length)) return;
  var Q = {};
  for (var I = 0; I < A.length; ++I) Q[A[I].name] = A[I].toJSON(B);
  return Q;
}
w5.arrayToJSON = y72;
w5.isReservedId = function A(B, Q) {
  if (B) {
    for (var I = 0; I < B.length; ++I)
      if (typeof B[I] !== 'string' && B[I][0] <= Q && B[I][1] > Q) return !0;
  }
  return !1;
};
w5.isReservedName = function A(B, Q) {
  if (B) {
    for (var I = 0; I < B.length; ++I) if (B[I] === Q) return !0;
  }
  return !1;
};
function w5(A, B) {
  (gi1.call(this, A, B), (this.nested = void 0), (this._nestedArray = null));
}
function k72(A) {
  return ((A._nestedArray = null), A);
}
Object.defineProperty(w5.prototype, 'nestedArray', {
  get: function () {
    return this._nestedArray || (this._nestedArray = KC1.toArray(this.nested));
  },
});
w5.prototype.toJSON = function A(B) {
  return KC1.toObject(['options', this.options, 'nested', y72(this.nestedArray, B)]);
};
w5.prototype.addJSON = function A(B) {
  var Q = this;
  if (B)
    for (var I = Object.keys(B), G = 0, D; G < I.length; ++G)
      ((D = B[I[G]]),
        Q.add(
          (D.fields !== void 0
            ? Um.fromJSON
            : D.values !== void 0
              ? Nm.fromJSON
              : D.methods !== void 0
                ? mo.fromJSON
                : D.id !== void 0
                  ? j72.fromJSON
                  : w5.fromJSON)(I[G], D)
        ));
  return this;
};
w5.prototype.get = function A(B) {
  return (this.nested && this.nested[B]) || null;
};
w5.prototype.getEnum = function A(B) {
  if (this.nested && this.nested[B] instanceof Nm) return this.nested[B].values;
  throw Error('no such enum: ' + B);
};
w5.prototype.add = function A(B) {
  if (
    !(
      (B instanceof j72 && B.extend !== void 0) ||
      B instanceof Um ||
      B instanceof _c6 ||
      B instanceof Nm ||
      B instanceof mo ||
      B instanceof w5
    )
  )
    throw TypeError('object must be a valid nested object');
  if (!this.nested) this.nested = {};
  else {
    var Q = this.get(B.name);
    if (Q)
      if (Q instanceof w5 && B instanceof w5 && !(Q instanceof Um || Q instanceof mo)) {
        var I = Q.nestedArray;
        for (var G = 0; G < I.length; ++G) B.add(I[G]);
        if ((this.remove(Q), !this.nested)) this.nested = {};
        B.setOptions(Q.options, !0);
      } else throw Error("duplicate name '" + B.name + "' in " + this);
  }
  return ((this.nested[B.name] = B), B.onAdd(this), k72(this));
};
w5.prototype.remove = function A(B) {
  if (!(B instanceof gi1)) throw TypeError('object must be a ReflectionObject');
  if (B.parent !== this) throw Error(B + ' is not a member of ' + this);
  if ((delete this.nested[B.name], !Object.keys(this.nested).length)) this.nested = void 0;
  return (B.onRemove(this), k72(this));
};
w5.prototype.define = function A(B, Q) {
  if (KC1.isString(B)) B = B.split('.');
  else if (!Array.isArray(B)) throw TypeError('illegal path');
  if (B && B.length && B[0] === '') throw Error('path must be relative');
  var I = this;
  while (B.length > 0) {
    var G = B.shift();
    if (I.nested && I.nested[G]) {
      if (((I = I.nested[G]), !(I instanceof w5)))
        throw Error('path conflicts with non-namespace objects');
    } else I.add((I = new w5(G)));
  }
  if (Q) I.addJSON(Q);
  return I;
};
w5.prototype.resolveAll = function A() {
  var B = this.nestedArray,
    Q = 0;
  while (Q < B.length)
    if (B[Q] instanceof w5) B[Q++].resolveAll();
    else B[Q++].resolve();
  return this.resolve();
};
w5.prototype.lookup = function A(B, Q, I) {
  if (typeof Q === 'boolean') ((I = Q), (Q = void 0));
  else if (Q && !Array.isArray(Q)) Q = [Q];
  if (KC1.isString(B) && B.length) {
    if (B === '.') return this.root;
    B = B.split('.');
  } else if (!B.length) return this;
  if (B[0] === '') return this.root.lookup(B.slice(1), Q);
  var G = this.get(B[0]);
  if (G) {
    if (B.length === 1) {
      if (!Q || Q.indexOf(G.constructor) > -1) return G;
    } else if (G instanceof w5 && (G = G.lookup(B.slice(1), Q, !0))) return G;
  } else
    for (var D = 0; D < this.nestedArray.length; ++D)
      if (this._nestedArray[D] instanceof w5 && (G = this._nestedArray[D].lookup(B, Q, !0)))
        return G;
  if (this.parent === null || I) return null;
  return this.parent.lookup(B, Q);
};
w5.prototype.lookupType = function A(B) {
  var Q = this.lookup(B, [Um]);
  if (!Q) throw Error('no such type: ' + B);
  return Q;
};
w5.prototype.lookupEnum = function A(B) {
  var Q = this.lookup(B, [Nm]);
  if (!Q) throw Error("no such Enum '" + B + "' in " + this);
  return Q;
};
w5.prototype.lookupTypeOrEnum = function A(B) {
  var Q = this.lookup(B, [Um, Nm]);
  if (!Q) throw Error("no such Type or Enum '" + B + "' in " + this);
  return Q;
};
w5.prototype.lookupService = function A(B) {
  var Q = this.lookup(B, [mo]);
  if (!Q) throw Error("no such Service '" + B + "' in " + this);
  return Q;
};
w5._configure = function (A, B, Q) {
  ((Um = A), (mo = B), (Nm = Q));
};
