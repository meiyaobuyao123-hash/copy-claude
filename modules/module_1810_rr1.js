// Module: rr1
// Params: Cl8,vK2

vK2.exports = sr1;
var kK2 = h3(),
  xK2 = HG(),
  fK2 = $e();
function sr1(A, B) {
  (fK2.call(this),
    (this.nodeType = xK2.TEXT_NODE),
    (this.ownerDocument = A),
    (this._data = B),
    (this._index = void 0));
}
var qe = {
  get: function () {
    return this._data;
  },
  set: function (A) {
    if (A === null || A === void 0) A = '';
    else A = String(A);
    if (A === this._data) return;
    if (((this._data = A), this.rooted)) this.ownerDocument.mutateValue(this);
    if (this.parentNode && this.parentNode._textchangehook) this.parentNode._textchangehook(this);
  },
};
sr1.prototype = Object.create(fK2.prototype, {
  nodeName: { value: '#text' },
  nodeValue: qe,
  textContent: qe,
  innerText: qe,
  data: {
    get: qe.get,
    set: function (A) {
      qe.set.call(this, A === null ? '' : String(A));
    },
  },
  splitText: {
    value: function A(B) {
      if (B > this._data.length || B < 0) kK2.IndexSizeError();
      var Q = this._data.substring(B),
        I = this.ownerDocument.createTextNode(Q);
      this.data = this.data.substring(0, B);
      var G = this.parentNode;
      if (G !== null) G.insertBefore(I, this.nextSibling);
      return I;
    },
  },
  wholeText: {
    get: function A() {
      var B = this.textContent;
      for (var Q = this.nextSibling; Q; Q = Q.nextSibling) {
        if (Q.nodeType !== xK2.TEXT_NODE) break;
        B += Q.textContent;
      }
      return B;
    },
  },
  replaceWholeText: { value: kK2.nyi },
  clone: {
    value: function A() {
      return new sr1(this.ownerDocument, this._data);
    },
  },
});
