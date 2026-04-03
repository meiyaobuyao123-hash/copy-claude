// Module: tr1
// Params: Xl8,gK2

gK2.exports = or1;
var Y65 = HG(),
  bK2 = $e();
function or1(A, B) {
  (bK2.call(this), (this.nodeType = Y65.COMMENT_NODE), (this.ownerDocument = A), (this._data = B));
}
var Me = {
  get: function () {
    return this._data;
  },
  set: function (A) {
    if (A === null || A === void 0) A = '';
    else A = String(A);
    if (((this._data = A), this.rooted)) this.ownerDocument.mutateValue(this);
  },
};
or1.prototype = Object.create(bK2.prototype, {
  nodeName: { value: '#comment' },
  nodeValue: Me,
  textContent: Me,
  innerText: Me,
  data: {
    get: Me.get,
    set: function (A) {
      Me.set.call(this, A === null ? '' : String(A));
    },
  },
  clone: {
    value: function A() {
      return new or1(this.ownerDocument, this._data);
    },
  },
});
