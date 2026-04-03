// Module: eK2
// Params: El8,tK2

tK2.exports = oK2;
var H65 = HG(),
  zG = Re(),
  nK2 = Do1(),
  rK2 = h3(),
  Zo1 = { first: 'firstChild', last: 'lastChild', next: 'firstChild', previous: 'lastChild' },
  Yo1 = {
    first: 'nextSibling',
    last: 'previousSibling',
    next: 'nextSibling',
    previous: 'previousSibling',
  };
function aK2(A, B) {
  var Q, I, G, D, Z;
  I = A._currentNode[Zo1[B]];
  while (I !== null) {
    if (((D = A._internalFilter(I)), D === zG.FILTER_ACCEPT)) return ((A._currentNode = I), I);
    if (D === zG.FILTER_SKIP) {
      if (((Q = I[Zo1[B]]), Q !== null)) {
        I = Q;
        continue;
      }
    }
    while (I !== null) {
      if (((Z = I[Yo1[B]]), Z !== null)) {
        I = Z;
        break;
      }
      if (((G = I.parentNode), G === null || G === A.root || G === A._currentNode)) return null;
      else I = G;
    }
  }
  return null;
}
function sK2(A, B) {
  var Q, I, G;
  if (((Q = A._currentNode), Q === A.root)) return null;
  while (!0) {
    G = Q[Yo1[B]];
    while (G !== null) {
      if (((Q = G), (I = A._internalFilter(Q)), I === zG.FILTER_ACCEPT))
        return ((A._currentNode = Q), Q);
      if (((G = Q[Zo1[B]]), I === zG.FILTER_REJECT || G === null)) G = Q[Yo1[B]];
    }
    if (((Q = Q.parentNode), Q === null || Q === A.root)) return null;
    if (A._internalFilter(Q) === zG.FILTER_ACCEPT) return null;
  }
}
function oK2(A, B, Q) {
  if (!A || !A.nodeType) rK2.NotSupportedError();
  ((this._root = A),
    (this._whatToShow = Number(B) || 0),
    (this._filter = Q || null),
    (this._active = !1),
    (this._currentNode = A));
}
Object.defineProperties(oK2.prototype, {
  root: {
    get: function () {
      return this._root;
    },
  },
  whatToShow: {
    get: function () {
      return this._whatToShow;
    },
  },
  filter: {
    get: function () {
      return this._filter;
    },
  },
  currentNode: {
    get: function A() {
      return this._currentNode;
    },
    set: function A(B) {
      if (!(B instanceof H65)) throw new TypeError('Not a Node');
      this._currentNode = B;
    },
  },
  _internalFilter: {
    value: function A(B) {
      var Q, I;
      if (this._active) rK2.InvalidStateError();
      if (!((1 << (B.nodeType - 1)) & this._whatToShow)) return zG.FILTER_SKIP;
      if (((I = this._filter), I === null)) Q = zG.FILTER_ACCEPT;
      else {
        this._active = !0;
        try {
          if (typeof I === 'function') Q = I(B);
          else Q = I.acceptNode(B);
        } finally {
          this._active = !1;
        }
      }
      return +Q;
    },
  },
  parentNode: {
    value: function A() {
      var B = this._currentNode;
      while (B !== this.root) {
        if (((B = B.parentNode), B === null)) return null;
        if (this._internalFilter(B) === zG.FILTER_ACCEPT) return ((this._currentNode = B), B);
      }
      return null;
    },
  },
  firstChild: {
    value: function A() {
      return aK2(this, 'first');
    },
  },
  lastChild: {
    value: function A() {
      return aK2(this, 'last');
    },
  },
  previousSibling: {
    value: function A() {
      return sK2(this, 'previous');
    },
  },
  nextSibling: {
    value: function A() {
      return sK2(this, 'next');
    },
  },
  previousNode: {
    value: function A() {
      var B, Q, I, G;
      B = this._currentNode;
      while (B !== this._root) {
        for (I = B.previousSibling; I; I = B.previousSibling) {
          if (((B = I), (Q = this._internalFilter(B)), Q === zG.FILTER_REJECT)) continue;
          for (G = B.lastChild; G; G = B.lastChild)
            if (((B = G), (Q = this._internalFilter(B)), Q === zG.FILTER_REJECT)) break;
          if (Q === zG.FILTER_ACCEPT) return ((this._currentNode = B), B);
        }
        if (B === this.root || B.parentNode === null) return null;
        if (((B = B.parentNode), this._internalFilter(B) === zG.FILTER_ACCEPT))
          return ((this._currentNode = B), B);
      }
      return null;
    },
  },
  nextNode: {
    value: function A() {
      var B, Q, I, G;
      ((B = this._currentNode), (Q = zG.FILTER_ACCEPT));
      A: while (!0) {
        for (I = B.firstChild; I; I = B.firstChild)
          if (((B = I), (Q = this._internalFilter(B)), Q === zG.FILTER_ACCEPT))
            return ((this._currentNode = B), B);
          else if (Q === zG.FILTER_REJECT) break;
        for (
          G = nK2.nextSkippingChildren(B, this.root);
          G;
          G = nK2.nextSkippingChildren(B, this.root)
        )
          if (((B = G), (Q = this._internalFilter(B)), Q === zG.FILTER_ACCEPT))
            return ((this._currentNode = B), B);
          else if (Q === zG.FILTER_SKIP) continue A;
        return null;
      }
    },
  },
  toString: {
    value: function A() {
      return '[object TreeWalker]';
    },
  },
});
