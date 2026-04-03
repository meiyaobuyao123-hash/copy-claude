// Module: DK2
// Params: Il8,GK2

GK2.exports = IK2;
var x45 = HG();
function IK2(A, B) {
  ((this.root = A),
    (this.filter = B),
    (this.lastModTime = A.lastModTime),
    (this.done = !1),
    (this.cache = []),
    this.traverse());
}
IK2.prototype = Object.create(Object.prototype, {
  length: {
    get: function () {
      if ((this.checkcache(), !this.done)) this.traverse();
      return this.cache.length;
    },
  },
  item: {
    value: function (A) {
      if ((this.checkcache(), !this.done && A >= this.cache.length)) this.traverse();
      return this.cache[A];
    },
  },
  checkcache: {
    value: function () {
      if (this.lastModTime !== this.root.lastModTime) {
        for (var A = this.cache.length - 1; A >= 0; A--) this[A] = void 0;
        ((this.cache.length = 0), (this.done = !1), (this.lastModTime = this.root.lastModTime));
      }
    },
  },
  traverse: {
    value: function (A) {
      if (A !== void 0) A++;
      var B;
      while ((B = this.next()) !== null)
        if (((this[this.cache.length] = B), this.cache.push(B), A && this.cache.length === A))
          return;
      this.done = !0;
    },
  },
  next: {
    value: function () {
      var A = this.cache.length === 0 ? this.root : this.cache[this.cache.length - 1],
        B;
      if (A.nodeType === x45.DOCUMENT_NODE) B = A.documentElement;
      else B = A.nextElement(this.root);
      while (B) {
        if (this.filter(B)) return B;
        B = B.nextElement(this.root);
      }
      return null;
    },
  },
});
