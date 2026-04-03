// Module: $C1
// Params: IT8,n72

n72.exports = o8;
var iV = $m();
((o8.prototype = Object.create(iV.prototype)).constructor = o8).className = 'Type';
var uc6 = lV(),
  ti1 = Em(),
  UC1 = NR(),
  pc6 = HC1(),
  cc6 = wC1(),
  ri1 = EC1(),
  oi1 = fJ1(),
  lc6 = kJ1(),
  VD = VI(),
  ic6 = ei1(),
  nc6 = ui1(),
  ac6 = li1(),
  i72 = ai1(),
  sc6 = si1();
function o8(A, B) {
  (iV.call(this, A, B),
    (this.fields = {}),
    (this.oneofs = void 0),
    (this.extensions = void 0),
    (this.reserved = void 0),
    (this.group = void 0),
    (this._fieldsById = null),
    (this._fieldsArray = null),
    (this._oneofsArray = null),
    (this._ctor = null));
}
Object.defineProperties(o8.prototype, {
  fieldsById: {
    get: function () {
      if (this._fieldsById) return this._fieldsById;
      this._fieldsById = {};
      for (var A = Object.keys(this.fields), B = 0; B < A.length; ++B) {
        var Q = this.fields[A[B]],
          I = Q.id;
        if (this._fieldsById[I]) throw Error('duplicate id ' + I + ' in ' + this);
        this._fieldsById[I] = Q;
      }
      return this._fieldsById;
    },
  },
  fieldsArray: {
    get: function () {
      return this._fieldsArray || (this._fieldsArray = VD.toArray(this.fields));
    },
  },
  oneofsArray: {
    get: function () {
      return this._oneofsArray || (this._oneofsArray = VD.toArray(this.oneofs));
    },
  },
  ctor: {
    get: function () {
      return this._ctor || (this.ctor = o8.generateConstructor(this)());
    },
    set: function (A) {
      var B = A.prototype;
      if (!(B instanceof ri1))
        (((A.prototype = new ri1()).constructor = A), VD.merge(A.prototype, B));
      ((A.$type = A.prototype.$type = this), VD.merge(A, ri1, !0), (this._ctor = A));
      var Q = 0;
      for (; Q < this.fieldsArray.length; ++Q) this._fieldsArray[Q].resolve();
      var I = {};
      for (Q = 0; Q < this.oneofsArray.length; ++Q)
        I[this._oneofsArray[Q].resolve().name] = {
          get: VD.oneOfGetter(this._oneofsArray[Q].oneof),
          set: VD.oneOfSetter(this._oneofsArray[Q].oneof),
        };
      if (Q) Object.defineProperties(A.prototype, I);
    },
  },
});
o8.generateConstructor = function A(B) {
  var Q = VD.codegen(['p'], B.name);
  for (var I = 0, G; I < B.fieldsArray.length; ++I)
    if ((G = B._fieldsArray[I]).map) Q('this%s={}', VD.safeProp(G.name));
    else if (G.repeated) Q('this%s=[]', VD.safeProp(G.name));
  return Q('if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)')(
    'this[ks[i]]=p[ks[i]]'
  );
};
function NC1(A) {
  return (
    (A._fieldsById = A._fieldsArray = A._oneofsArray = null),
    delete A.encode,
    delete A.decode,
    delete A.verify,
    A
  );
}
o8.fromJSON = function A(B, Q) {
  var I = new o8(B, Q.options);
  ((I.extensions = Q.extensions), (I.reserved = Q.reserved));
  var G = Object.keys(Q.fields),
    D = 0;
  for (; D < G.length; ++D)
    I.add(
      (typeof Q.fields[G[D]].keyType !== 'undefined' ? pc6.fromJSON : UC1.fromJSON)(
        G[D],
        Q.fields[G[D]]
      )
    );
  if (Q.oneofs)
    for (G = Object.keys(Q.oneofs), D = 0; D < G.length; ++D)
      I.add(ti1.fromJSON(G[D], Q.oneofs[G[D]]));
  if (Q.nested)
    for (G = Object.keys(Q.nested), D = 0; D < G.length; ++D) {
      var Z = Q.nested[G[D]];
      I.add(
        (Z.id !== void 0
          ? UC1.fromJSON
          : Z.fields !== void 0
            ? o8.fromJSON
            : Z.values !== void 0
              ? uc6.fromJSON
              : Z.methods !== void 0
                ? cc6.fromJSON
                : iV.fromJSON)(G[D], Z)
      );
    }
  if (Q.extensions && Q.extensions.length) I.extensions = Q.extensions;
  if (Q.reserved && Q.reserved.length) I.reserved = Q.reserved;
  if (Q.group) I.group = !0;
  if (Q.comment) I.comment = Q.comment;
  return I;
};
o8.prototype.toJSON = function A(B) {
  var Q = iV.prototype.toJSON.call(this, B),
    I = B ? Boolean(B.keepComments) : !1;
  return VD.toObject([
    'options',
    (Q && Q.options) || void 0,
    'oneofs',
    iV.arrayToJSON(this.oneofsArray, B),
    'fields',
    iV.arrayToJSON(
      this.fieldsArray.filter(function (G) {
        return !G.declaringField;
      }),
      B
    ) || {},
    'extensions',
    this.extensions && this.extensions.length ? this.extensions : void 0,
    'reserved',
    this.reserved && this.reserved.length ? this.reserved : void 0,
    'group',
    this.group || void 0,
    'nested',
    (Q && Q.nested) || void 0,
    'comment',
    I ? this.comment : void 0,
  ]);
};
o8.prototype.resolveAll = function A() {
  var B = this.fieldsArray,
    Q = 0;
  while (Q < B.length) B[Q++].resolve();
  var I = this.oneofsArray;
  Q = 0;
  while (Q < I.length) I[Q++].resolve();
  return iV.prototype.resolveAll.call(this);
};
o8.prototype.get = function A(B) {
  return (
    this.fields[B] || (this.oneofs && this.oneofs[B]) || (this.nested && this.nested[B]) || null
  );
};
o8.prototype.add = function A(B) {
  if (this.get(B.name)) throw Error("duplicate name '" + B.name + "' in " + this);
  if (B instanceof UC1 && B.extend === void 0) {
    if (this._fieldsById ? this._fieldsById[B.id] : this.fieldsById[B.id])
      throw Error('duplicate id ' + B.id + ' in ' + this);
    if (this.isReservedId(B.id)) throw Error('id ' + B.id + ' is reserved in ' + this);
    if (this.isReservedName(B.name)) throw Error("name '" + B.name + "' is reserved in " + this);
    if (B.parent) B.parent.remove(B);
    return ((this.fields[B.name] = B), (B.message = this), B.onAdd(this), NC1(this));
  }
  if (B instanceof ti1) {
    if (!this.oneofs) this.oneofs = {};
    return ((this.oneofs[B.name] = B), B.onAdd(this), NC1(this));
  }
  return iV.prototype.add.call(this, B);
};
o8.prototype.remove = function A(B) {
  if (B instanceof UC1 && B.extend === void 0) {
    if (!this.fields || this.fields[B.name] !== B) throw Error(B + ' is not a member of ' + this);
    return (delete this.fields[B.name], (B.parent = null), B.onRemove(this), NC1(this));
  }
  if (B instanceof ti1) {
    if (!this.oneofs || this.oneofs[B.name] !== B) throw Error(B + ' is not a member of ' + this);
    return (delete this.oneofs[B.name], (B.parent = null), B.onRemove(this), NC1(this));
  }
  return iV.prototype.remove.call(this, B);
};
o8.prototype.isReservedId = function A(B) {
  return iV.isReservedId(this.reserved, B);
};
o8.prototype.isReservedName = function A(B) {
  return iV.isReservedName(this.reserved, B);
};
o8.prototype.create = function A(B) {
  return new this.ctor(B);
};
o8.prototype.setup = function A() {
  var B = this.fullName,
    Q = [];
  for (var I = 0; I < this.fieldsArray.length; ++I)
    Q.push(this._fieldsArray[I].resolve().resolvedType);
  ((this.encode = ic6(this)({ Writer: lc6, types: Q, util: VD })),
    (this.decode = nc6(this)({ Reader: oi1, types: Q, util: VD })),
    (this.verify = ac6(this)({ types: Q, util: VD })),
    (this.fromObject = i72.fromObject(this)({ types: Q, util: VD })),
    (this.toObject = i72.toObject(this)({ types: Q, util: VD })));
  var G = sc6[B];
  if (G) {
    var D = Object.create(this);
    ((D.fromObject = this.fromObject),
      (this.fromObject = G.fromObject.bind(D)),
      (D.toObject = this.toObject),
      (this.toObject = G.toObject.bind(D)));
  }
  return this;
};
o8.prototype.encode = function A(B, Q) {
  return this.setup().encode(B, Q);
};
o8.prototype.encodeDelimited = function A(B, Q) {
  return this.encode(B, Q && Q.len ? Q.fork() : Q).ldelim();
};
o8.prototype.decode = function A(B, Q) {
  return this.setup().decode(B, Q);
};
o8.prototype.decodeDelimited = function A(B) {
  if (!(B instanceof oi1)) B = oi1.create(B);
  return this.decode(B, B.uint32());
};
o8.prototype.verify = function A(B) {
  return this.setup().verify(B);
};
o8.prototype.fromObject = function A(B) {
  return this.setup().fromObject(B);
};
o8.prototype.toObject = function A(B, Q) {
  return this.setup().toObject(B, Q);
};
o8.d = function A(B) {
  return function Q(I) {
    VD.decorateType(I, B);
  };
};
