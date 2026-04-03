// Module: x_
// Params: ZT8,BI2

BI2.exports = zF;
zF.className = 'ReflectionObject';
var RC1 = VI(),
  OC1;
function zF(A, B) {
  if (!RC1.isString(A)) throw TypeError('name must be a string');
  if (B && !RC1.isObject(B)) throw TypeError('options must be an object');
  ((this.options = B),
    (this.parsedOptions = null),
    (this.name = A),
    (this.parent = null),
    (this.resolved = !1),
    (this.comment = null),
    (this.filename = null));
}
Object.defineProperties(zF.prototype, {
  root: {
    get: function () {
      var A = this;
      while (A.parent !== null) A = A.parent;
      return A;
    },
  },
  fullName: {
    get: function () {
      var A = [this.name],
        B = this.parent;
      while (B) (A.unshift(B.name), (B = B.parent));
      return A.join('.');
    },
  },
});
zF.prototype.toJSON = function A() {
  throw Error();
};
zF.prototype.onAdd = function A(B) {
  if (this.parent && this.parent !== B) this.parent.remove(this);
  ((this.parent = B), (this.resolved = !1));
  var Q = B.root;
  if (Q instanceof OC1) Q._handleAdd(this);
};
zF.prototype.onRemove = function A(B) {
  var Q = B.root;
  if (Q instanceof OC1) Q._handleRemove(this);
  ((this.parent = null), (this.resolved = !1));
};
zF.prototype.resolve = function A() {
  if (this.resolved) return this;
  if (this.root instanceof OC1) this.resolved = !0;
  return this;
};
zF.prototype.getOption = function A(B) {
  if (this.options) return this.options[B];
  return;
};
zF.prototype.setOption = function A(B, Q, I) {
  if (!I || !this.options || this.options[B] === void 0)
    (this.options || (this.options = {}))[B] = Q;
  return this;
};
zF.prototype.setParsedOption = function A(B, Q, I) {
  if (!this.parsedOptions) this.parsedOptions = [];
  var G = this.parsedOptions;
  if (I) {
    var D = G.find(function (W) {
      return Object.prototype.hasOwnProperty.call(W, B);
    });
    if (D) {
      var Z = D[B];
      RC1.setProperty(Z, I, Q);
    } else ((D = {}), (D[B] = RC1.setProperty({}, I, Q)), G.push(D));
  } else {
    var Y = {};
    ((Y[B] = Q), G.push(Y));
  }
  return this;
};
zF.prototype.setOptions = function A(B, Q) {
  if (B) for (var I = Object.keys(B), G = 0; G < I.length; ++G) this.setOption(I[G], B[I[G]], Q);
  return this;
};
zF.prototype.toString = function A() {
  var B = this.constructor.className,
    Q = this.fullName;
  if (Q.length) return B + ' ' + Q;
  return B;
};
zF._configure = function (A) {
  OC1 = A;
};
