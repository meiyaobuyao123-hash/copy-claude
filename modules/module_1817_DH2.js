// Module: DH2
// Params: Ul8,GH2

GH2.exports = IH2;
var Wo1 = Re(),
  Fo1 = Do1(),
  QH2 = h3();
function z65(A, B, Q) {
  if (Q) return Fo1.next(A, B);
  else {
    if (A === B) return null;
    return Fo1.previous(A, null);
  }
}
function AH2(A, B) {
  for (; B; B = B.parentNode) if (A === B) return !0;
  return !1;
}
function BH2(A, B) {
  var Q, I;
  ((Q = A._referenceNode), (I = A._pointerBeforeReferenceNode));
  while (!0) {
    if (I === B) I = !I;
    else if (((Q = z65(Q, A._root, B)), Q === null)) return null;
    var G = A._internalFilter(Q);
    if (G === Wo1.FILTER_ACCEPT) break;
  }
  return ((A._referenceNode = Q), (A._pointerBeforeReferenceNode = I), Q);
}
function IH2(A, B, Q) {
  if (!A || !A.nodeType) QH2.NotSupportedError();
  ((this._root = A),
    (this._referenceNode = A),
    (this._pointerBeforeReferenceNode = !0),
    (this._whatToShow = Number(B) || 0),
    (this._filter = Q || null),
    (this._active = !1),
    A.doc._attachNodeIterator(this));
}
Object.defineProperties(IH2.prototype, {
  root: {
    get: function A() {
      return this._root;
    },
  },
  referenceNode: {
    get: function A() {
      return this._referenceNode;
    },
  },
  pointerBeforeReferenceNode: {
    get: function A() {
      return this._pointerBeforeReferenceNode;
    },
  },
  whatToShow: {
    get: function A() {
      return this._whatToShow;
    },
  },
  filter: {
    get: function A() {
      return this._filter;
    },
  },
  _internalFilter: {
    value: function A(B) {
      var Q, I;
      if (this._active) QH2.InvalidStateError();
      if (!((1 << (B.nodeType - 1)) & this._whatToShow)) return Wo1.FILTER_SKIP;
      if (((I = this._filter), I === null)) Q = Wo1.FILTER_ACCEPT;
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
  _preremove: {
    value: function A(B) {
      if (AH2(B, this._root)) return;
      if (!AH2(B, this._referenceNode)) return;
      if (this._pointerBeforeReferenceNode) {
        var Q = B;
        while (Q.lastChild) Q = Q.lastChild;
        if (((Q = Fo1.next(Q, this.root)), Q)) {
          this._referenceNode = Q;
          return;
        }
        this._pointerBeforeReferenceNode = !1;
      }
      if (B.previousSibling === null) this._referenceNode = B.parentNode;
      else {
        this._referenceNode = B.previousSibling;
        var I;
        for (I = this._referenceNode.lastChild; I; I = this._referenceNode.lastChild)
          this._referenceNode = I;
      }
    },
  },
  nextNode: {
    value: function A() {
      return BH2(this, !0);
    },
  },
  previousNode: {
    value: function A() {
      return BH2(this, !1);
    },
  },
  detach: { value: function A() {} },
  toString: {
    value: function A() {
      return '[object NodeIterator]';
    },
  },
});
