// Module: oV1
// Params: xl8,uH2

uH2.exports = rV1;
var s65 = HG(),
  dH2 = ar1(),
  r65 = hV1();
function rV1(A, B, Q, I) {
  (dH2.call(this),
    (this.nodeType = s65.DOCUMENT_TYPE_NODE),
    (this.ownerDocument = A || null),
    (this.name = B),
    (this.publicId = Q || ''),
    (this.systemId = I || ''));
}
rV1.prototype = Object.create(dH2.prototype, {
  nodeName: {
    get: function () {
      return this.name;
    },
  },
  nodeValue: {
    get: function () {
      return null;
    },
    set: function () {},
  },
  clone: {
    value: function A() {
      return new rV1(this.ownerDocument, this.name, this.publicId, this.systemId);
    },
  },
  isEqual: {
    value: function A(B) {
      return this.name === B.name && this.publicId === B.publicId && this.systemId === B.systemId;
    },
  },
});
Object.defineProperties(rV1.prototype, r65);
