// Module: wz2
// Params: bl8,zz2

var $55 = cV1(),
  q55 = Xo1();
zz2.exports = Oo1;
function Oo1(A, B) {
  ((this._window = A), (this._href = B));
}
Oo1.prototype = Object.create(q55.prototype, {
  constructor: { value: Oo1 },
  href: {
    get: function () {
      return this._href;
    },
    set: function (A) {
      this.assign(A);
    },
  },
  assign: {
    value: function (A) {
      var B = new $55(this._href),
        Q = B.resolve(A);
      this._href = Q;
    },
  },
  replace: {
    value: function (A) {
      this.assign(A);
    },
  },
  reload: {
    value: function () {
      this.assign(this.href);
    },
  },
  toString: {
    value: function () {
      return this.href;
    },
  },
});
