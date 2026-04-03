// Module: $e
// Params: Jl8,yK2

yK2.exports = uV1;
var jK2 = ar1(),
  _K2 = h3(),
  D65 = hV1(),
  Z65 = mr1();
function uV1() {
  jK2.call(this);
}
uV1.prototype = Object.create(jK2.prototype, {
  substringData: {
    value: function A(B, Q) {
      if (arguments.length < 2) throw new TypeError('Not enough arguments');
      if (((B = B >>> 0), (Q = Q >>> 0), B > this.data.length || B < 0 || Q < 0))
        _K2.IndexSizeError();
      return this.data.substring(B, B + Q);
    },
  },
  appendData: {
    value: function A(B) {
      if (arguments.length < 1) throw new TypeError('Not enough arguments');
      this.data += String(B);
    },
  },
  insertData: {
    value: function A(B, Q) {
      return this.replaceData(B, 0, Q);
    },
  },
  deleteData: {
    value: function A(B, Q) {
      return this.replaceData(B, Q, '');
    },
  },
  replaceData: {
    value: function A(B, Q, I) {
      var G = this.data,
        D = G.length;
      if (((B = B >>> 0), (Q = Q >>> 0), (I = String(I)), B > D || B < 0)) _K2.IndexSizeError();
      if (B + Q > D) Q = D - B;
      var Z = G.substring(0, B),
        Y = G.substring(B + Q);
      this.data = Z + I + Y;
    },
  },
  isEqual: {
    value: function A(B) {
      return this._data === B._data;
    },
  },
  length: {
    get: function () {
      return this.data.length;
    },
  },
});
Object.defineProperties(uV1.prototype, D65);
Object.defineProperties(uV1.prototype, Z65);
