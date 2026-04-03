// Module: dr1
// Params: Yl8,UK2

UK2.exports = EK2;
var Vd = h3();
function EK2(A) {
  this.element = A;
}
Object.defineProperties(EK2.prototype, {
  length: { get: Vd.shouldOverride },
  item: { value: Vd.shouldOverride },
  getNamedItem: {
    value: function A(B) {
      return this.element.getAttributeNode(B);
    },
  },
  getNamedItemNS: {
    value: function A(B, Q) {
      return this.element.getAttributeNodeNS(B, Q);
    },
  },
  setNamedItem: { value: Vd.nyi },
  setNamedItemNS: { value: Vd.nyi },
  removeNamedItem: {
    value: function A(B) {
      var Q = this.element.getAttributeNode(B);
      if (Q) return (this.element.removeAttribute(B), Q);
      Vd.NotFoundError();
    },
  },
  removeNamedItemNS: {
    value: function A(B, Q) {
      var I = this.element.getAttributeNodeNS(B, Q);
      if (I) return (this.element.removeAttributeNS(B, Q), I);
      Vd.NotFoundError();
    },
  },
});
