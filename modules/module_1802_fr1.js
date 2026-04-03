// Module: fr1
// Params: Gl8,WK2

var xr1 = h3();
WK2.exports = YK2;
function YK2(A, B) {
  ((this._getString = A),
    (this._setString = B),
    (this._length = 0),
    (this._lastStringValue = ''),
    this._update());
}
Object.defineProperties(YK2.prototype, {
  length: {
    get: function () {
      return this._length;
    },
  },
  item: {
    value: function (A) {
      var B = Fd(this);
      if (A < 0 || A >= B.length) return null;
      return B[A];
    },
  },
  contains: {
    value: function (A) {
      A = String(A);
      var B = Fd(this);
      return B.indexOf(A) > -1;
    },
  },
  add: {
    value: function () {
      var A = Fd(this);
      for (var B = 0, Q = arguments.length; B < Q; B++) {
        var I = we(arguments[B]);
        if (A.indexOf(I) < 0) A.push(I);
      }
      this._update(A);
    },
  },
  remove: {
    value: function () {
      var A = Fd(this);
      for (var B = 0, Q = arguments.length; B < Q; B++) {
        var I = we(arguments[B]),
          G = A.indexOf(I);
        if (G > -1) A.splice(G, 1);
      }
      this._update(A);
    },
  },
  toggle: {
    value: function A(B, Q) {
      if (((B = we(B)), this.contains(B))) {
        if (Q === void 0 || Q === !1) return (this.remove(B), !1);
        return !0;
      } else {
        if (Q === void 0 || Q === !0) return (this.add(B), !0);
        return !1;
      }
    },
  },
  replace: {
    value: function A(B, Q) {
      if (String(Q) === '') xr1.SyntaxError();
      ((B = we(B)), (Q = we(Q)));
      var I = Fd(this),
        G = I.indexOf(B);
      if (G < 0) return !1;
      var D = I.indexOf(Q);
      if (D < 0) I[G] = Q;
      else if (G < D) ((I[G] = Q), I.splice(D, 1));
      else I.splice(G, 1);
      return (this._update(I), !0);
    },
  },
  toString: {
    value: function () {
      return this._getString();
    },
  },
  value: {
    get: function () {
      return this._getString();
    },
    set: function (A) {
      (this._setString(A), this._update());
    },
  },
  _update: {
    value: function (A) {
      if (A) (ZK2(this, A), this._setString(A.join(' ').trim()));
      else ZK2(this, Fd(this));
      this._lastStringValue = this._getString();
    },
  },
});
function ZK2(A, B) {
  var Q = A._length,
    I;
  A._length = B.length;
  for (I = 0; I < B.length; I++) A[I] = B[I];
  for (; I < Q; I++) A[I] = void 0;
}
function we(A) {
  if (((A = String(A)), A === '')) xr1.SyntaxError();
  if (/[ \t\r\n\f]/.test(A)) xr1.InvalidCharacterError();
  return A;
}
function f45(A) {
  var B = A._length,
    Q = Array(B);
  for (var I = 0; I < B; I++) Q[I] = A[I];
  return Q;
}
function Fd(A) {
  var B = A._getString();
  if (B === A._lastStringValue) return f45(A);
  var Q = B.replace(/(^[ \t\r\n\f]+)|([ \t\r\n\f]+$)/g, '');
  if (Q === '') return [];
  else {
    var I = Object.create(null);
    return Q.split(/[ \t\r\n\f]+/g).filter(function (G) {
      var D = '$' + G;
      if (I[D]) return !1;
      return ((I[D] = !0), !0);
    });
  }
}
