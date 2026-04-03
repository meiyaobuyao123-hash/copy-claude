// Module: Ao1
// Params: Vl8,dK2

dK2.exports = er1;
var W65 = HG(),
  F65 = Zj(),
  mK2 = kV1(),
  pV1 = Hd(),
  J65 = gV1(),
  hK2 = h3();
function er1(A) {
  (mK2.call(this), (this.nodeType = W65.DOCUMENT_FRAGMENT_NODE), (this.ownerDocument = A));
}
er1.prototype = Object.create(mK2.prototype, {
  nodeName: { value: '#document-fragment' },
  nodeValue: {
    get: function () {
      return null;
    },
    set: function () {},
  },
  textContent: Object.getOwnPropertyDescriptor(pV1.prototype, 'textContent'),
  innerText: Object.getOwnPropertyDescriptor(pV1.prototype, 'innerText'),
  querySelector: {
    value: function (A) {
      var B = this.querySelectorAll(A);
      return B.length ? B[0] : null;
    },
  },
  querySelectorAll: {
    value: function (A) {
      var B = Object.create(this);
      ((B.isHTML = !0),
        (B.getElementsByTagName = pV1.prototype.getElementsByTagName),
        (B.nextElement = Object.getOwnPropertyDescriptor(pV1.prototype, 'firstElementChild').get));
      var Q = J65(A, B);
      return Q.item ? Q : new F65(Q);
    },
  },
  clone: {
    value: function A() {
      return new er1(this.ownerDocument);
    },
  },
  isEqual: {
    value: function A(B) {
      return !0;
    },
  },
  innerHTML: {
    get: function () {
      return this.serialize();
    },
    set: hK2.nyi,
  },
  outerHTML: {
    get: function () {
      return this.serialize();
    },
    set: hK2.nyi,
  },
});
