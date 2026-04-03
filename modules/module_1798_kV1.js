// Module: kV1
// Params: Al8,tV2

tV2.exports = oV2;
var rV2 = HG(),
  E45 = Zj();
function oV2() {
  (rV2.call(this), (this._firstChild = this._childNodes = null));
}
oV2.prototype = Object.create(rV2.prototype, {
  hasChildNodes: {
    value: function () {
      if (this._childNodes) return this._childNodes.length > 0;
      return this._firstChild !== null;
    },
  },
  childNodes: {
    get: function () {
      return (this._ensureChildNodes(), this._childNodes);
    },
  },
  firstChild: {
    get: function () {
      if (this._childNodes) return this._childNodes.length === 0 ? null : this._childNodes[0];
      return this._firstChild;
    },
  },
  lastChild: {
    get: function () {
      var A = this._childNodes,
        B;
      if (A) return A.length === 0 ? null : A[A.length - 1];
      if (((B = this._firstChild), B === null)) return null;
      return B._previousSibling;
    },
  },
  _ensureChildNodes: {
    value: function () {
      if (this._childNodes) return;
      var A = this._firstChild,
        B = A,
        Q = (this._childNodes = new E45());
      if (A)
        do (Q.push(B), (B = B._nextSibling));
        while (B !== A);
      this._firstChild = null;
    },
  },
  removeChildren: {
    value: function A() {
      var B = this.rooted ? this.ownerDocument : null,
        Q = this.firstChild,
        I;
      while (Q !== null) {
        if (((I = Q), (Q = I.nextSibling), B)) B.mutateRemove(I);
        I.parentNode = null;
      }
      if (this._childNodes) this._childNodes.length = 0;
      else this._firstChild = null;
      this.modify();
    },
  },
});
