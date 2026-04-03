// Module: mr1
// Params: Zl8,wK2

var zK2 = HG(),
  n45 = {
    nextElementSibling: {
      get: function () {
        if (this.parentNode) {
          for (var A = this.nextSibling; A !== null; A = A.nextSibling)
            if (A.nodeType === zK2.ELEMENT_NODE) return A;
        }
        return null;
      },
    },
    previousElementSibling: {
      get: function () {
        if (this.parentNode) {
          for (var A = this.previousSibling; A !== null; A = A.previousSibling)
            if (A.nodeType === zK2.ELEMENT_NODE) return A;
        }
        return null;
      },
    },
  };
wK2.exports = n45;
