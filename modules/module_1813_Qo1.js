// Module: Qo1
// Params: Kl8,pK2

pK2.exports = Bo1;
var C65 = HG(),
  uK2 = $e();
function Bo1(A, B, Q) {
  (uK2.call(this),
    (this.nodeType = C65.PROCESSING_INSTRUCTION_NODE),
    (this.ownerDocument = A),
    (this.target = B),
    (this._data = Q));
}
var Le = {
  get: function () {
    return this._data;
  },
  set: function (A) {
    if (A === null || A === void 0) A = '';
    else A = String(A);
    if (((this._data = A), this.rooted)) this.ownerDocument.mutateValue(this);
  },
};
Bo1.prototype = Object.create(uK2.prototype, {
  nodeName: {
    get: function () {
      return this.target;
    },
  },
  nodeValue: Le,
  textContent: Le,
  innerText: Le,
  data: {
    get: Le.get,
    set: function (A) {
      Le.set.call(this, A === null ? '' : String(A));
    },
  },
  clone: {
    value: function A() {
      return new Bo1(this.ownerDocument, this.target, this._data);
    },
  },
  isEqual: {
    value: function A(B) {
      return this.target === B.target && this._data === B._data;
    },
  },
});
