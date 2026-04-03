// Module: HG
// Params: rc8,cV2

cV2.exports = pB;
var pV2 = Ur1(),
  jV1 = Nr1(),
  hV2 = $r1(),
  x5 = h3();
function pB() {
  (pV2.call(this),
    (this.parentNode = null),
    (this._nextSibling = this._previousSibling = this),
    (this._index = void 0));
}
var iY = (pB.ELEMENT_NODE = 1),
  qr1 = (pB.ATTRIBUTE_NODE = 2),
  yV1 = (pB.TEXT_NODE = 3),
  K45 = (pB.CDATA_SECTION_NODE = 4),
  H45 = (pB.ENTITY_REFERENCE_NODE = 5),
  Mr1 = (pB.ENTITY_NODE = 6),
  mV2 = (pB.PROCESSING_INSTRUCTION_NODE = 7),
  dV2 = (pB.COMMENT_NODE = 8),
  Ke = (pB.DOCUMENT_NODE = 9),
  xC = (pB.DOCUMENT_TYPE_NODE = 10),
  dR = (pB.DOCUMENT_FRAGMENT_NODE = 11),
  Lr1 = (pB.NOTATION_NODE = 12),
  Rr1 = (pB.DOCUMENT_POSITION_DISCONNECTED = 1),
  Or1 = (pB.DOCUMENT_POSITION_PRECEDING = 2),
  Tr1 = (pB.DOCUMENT_POSITION_FOLLOWING = 4),
  uV2 = (pB.DOCUMENT_POSITION_CONTAINS = 8),
  Pr1 = (pB.DOCUMENT_POSITION_CONTAINED_BY = 16),
  Sr1 = (pB.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32);
pB.prototype = Object.create(pV2.prototype, {
  baseURI: { get: x5.nyi },
  parentElement: {
    get: function () {
      return this.parentNode && this.parentNode.nodeType === iY ? this.parentNode : null;
    },
  },
  hasChildNodes: { value: x5.shouldOverride },
  firstChild: { get: x5.shouldOverride },
  lastChild: { get: x5.shouldOverride },
  isConnected: {
    get: function () {
      let A = this;
      while (A != null) {
        if (A.nodeType === pB.DOCUMENT_NODE) return !0;
        if (((A = A.parentNode), A != null && A.nodeType === pB.DOCUMENT_FRAGMENT_NODE)) A = A.host;
      }
      return !1;
    },
  },
  previousSibling: {
    get: function () {
      var A = this.parentNode;
      if (!A) return null;
      if (this === A.firstChild) return null;
      return this._previousSibling;
    },
  },
  nextSibling: {
    get: function () {
      var A = this.parentNode,
        B = this._nextSibling;
      if (!A) return null;
      if (B === A.firstChild) return null;
      return B;
    },
  },
  textContent: {
    get: function () {
      return null;
    },
    set: function (A) {},
  },
  innerText: {
    get: function () {
      return null;
    },
    set: function (A) {},
  },
  _countChildrenOfType: {
    value: function (A) {
      var B = 0;
      for (var Q = this.firstChild; Q !== null; Q = Q.nextSibling) if (Q.nodeType === A) B++;
      return B;
    },
  },
  _ensureInsertValid: {
    value: function A(B, Q, I) {
      var G = this,
        D,
        Z;
      if (!B.nodeType) throw new TypeError('not a node');
      switch (G.nodeType) {
        case Ke:
        case dR:
        case iY:
          break;
        default:
          x5.HierarchyRequestError();
      }
      if (B.isAncestor(G)) x5.HierarchyRequestError();
      if (Q !== null || !I) {
        if (Q.parentNode !== G) x5.NotFoundError();
      }
      switch (B.nodeType) {
        case dR:
        case xC:
        case iY:
        case yV1:
        case mV2:
        case dV2:
          break;
        default:
          x5.HierarchyRequestError();
      }
      if (G.nodeType === Ke)
        switch (B.nodeType) {
          case yV1:
            x5.HierarchyRequestError();
            break;
          case dR:
            if (B._countChildrenOfType(yV1) > 0) x5.HierarchyRequestError();
            switch (B._countChildrenOfType(iY)) {
              case 0:
                break;
              case 1:
                if (Q !== null) {
                  if (I && Q.nodeType === xC) x5.HierarchyRequestError();
                  for (Z = Q.nextSibling; Z !== null; Z = Z.nextSibling)
                    if (Z.nodeType === xC) x5.HierarchyRequestError();
                }
                if (((D = G._countChildrenOfType(iY)), I)) {
                  if (D > 0) x5.HierarchyRequestError();
                } else if (D > 1 || (D === 1 && Q.nodeType !== iY)) x5.HierarchyRequestError();
                break;
              default:
                x5.HierarchyRequestError();
            }
            break;
          case iY:
            if (Q !== null) {
              if (I && Q.nodeType === xC) x5.HierarchyRequestError();
              for (Z = Q.nextSibling; Z !== null; Z = Z.nextSibling)
                if (Z.nodeType === xC) x5.HierarchyRequestError();
            }
            if (((D = G._countChildrenOfType(iY)), I)) {
              if (D > 0) x5.HierarchyRequestError();
            } else if (D > 1 || (D === 1 && Q.nodeType !== iY)) x5.HierarchyRequestError();
            break;
          case xC:
            if (Q === null) {
              if (G._countChildrenOfType(iY)) x5.HierarchyRequestError();
            } else
              for (Z = G.firstChild; Z !== null; Z = Z.nextSibling) {
                if (Z === Q) break;
                if (Z.nodeType === iY) x5.HierarchyRequestError();
              }
            if (((D = G._countChildrenOfType(xC)), I)) {
              if (D > 0) x5.HierarchyRequestError();
            } else if (D > 1 || (D === 1 && Q.nodeType !== xC)) x5.HierarchyRequestError();
            break;
        }
      else if (B.nodeType === xC) x5.HierarchyRequestError();
    },
  },
  insertBefore: {
    value: function A(B, Q) {
      var I = this;
      I._ensureInsertValid(B, Q, !0);
      var G = Q;
      if (G === B) G = B.nextSibling;
      return (I.doc.adoptNode(B), B._insertOrReplace(I, G, !1), B);
    },
  },
  appendChild: {
    value: function (A) {
      return this.insertBefore(A, null);
    },
  },
  _appendChild: {
    value: function (A) {
      A._insertOrReplace(this, null, !1);
    },
  },
  removeChild: {
    value: function A(B) {
      var Q = this;
      if (!B.nodeType) throw new TypeError('not a node');
      if (B.parentNode !== Q) x5.NotFoundError();
      return (B.remove(), B);
    },
  },
  replaceChild: {
    value: function A(B, Q) {
      var I = this;
      if ((I._ensureInsertValid(B, Q, !1), B.doc !== I.doc)) I.doc.adoptNode(B);
      return (B._insertOrReplace(I, Q, !0), Q);
    },
  },
  contains: {
    value: function A(B) {
      if (B === null) return !1;
      if (this === B) return !0;
      return (this.compareDocumentPosition(B) & Pr1) !== 0;
    },
  },
  compareDocumentPosition: {
    value: function A(B) {
      if (this === B) return 0;
      if (this.doc !== B.doc || this.rooted !== B.rooted) return Rr1 + Sr1;
      var Q = [],
        I = [];
      for (var G = this; G !== null; G = G.parentNode) Q.push(G);
      for (G = B; G !== null; G = G.parentNode) I.push(G);
      if ((Q.reverse(), I.reverse(), Q[0] !== I[0])) return Rr1 + Sr1;
      G = Math.min(Q.length, I.length);
      for (var D = 1; D < G; D++)
        if (Q[D] !== I[D])
          if (Q[D].index < I[D].index) return Tr1;
          else return Or1;
      if (Q.length < I.length) return Tr1 + Pr1;
      else return Or1 + uV2;
    },
  },
  isSameNode: {
    value: function A(B) {
      return this === B;
    },
  },
  isEqualNode: {
    value: function A(B) {
      if (!B) return !1;
      if (B.nodeType !== this.nodeType) return !1;
      if (!this.isEqual(B)) return !1;
      for (var Q = this.firstChild, I = B.firstChild; Q && I; Q = Q.nextSibling, I = I.nextSibling)
        if (!Q.isEqualNode(I)) return !1;
      return Q === null && I === null;
    },
  },
  cloneNode: {
    value: function (A) {
      var B = this.clone();
      if (A)
        for (var Q = this.firstChild; Q !== null; Q = Q.nextSibling)
          B._appendChild(Q.cloneNode(!0));
      return B;
    },
  },
  lookupPrefix: {
    value: function A(B) {
      var Q;
      if (B === '' || B === null || B === void 0) return null;
      switch (this.nodeType) {
        case iY:
          return this._lookupNamespacePrefix(B, this);
        case Ke:
          return ((Q = this.documentElement), Q ? Q.lookupPrefix(B) : null);
        case Mr1:
        case Lr1:
        case dR:
        case xC:
          return null;
        case qr1:
          return ((Q = this.ownerElement), Q ? Q.lookupPrefix(B) : null);
        default:
          return ((Q = this.parentElement), Q ? Q.lookupPrefix(B) : null);
      }
    },
  },
  lookupNamespaceURI: {
    value: function A(B) {
      if (B === '' || B === void 0) B = null;
      var Q;
      switch (this.nodeType) {
        case iY:
          return x5.shouldOverride();
        case Ke:
          return ((Q = this.documentElement), Q ? Q.lookupNamespaceURI(B) : null);
        case Mr1:
        case Lr1:
        case xC:
        case dR:
          return null;
        case qr1:
          return ((Q = this.ownerElement), Q ? Q.lookupNamespaceURI(B) : null);
        default:
          return ((Q = this.parentElement), Q ? Q.lookupNamespaceURI(B) : null);
      }
    },
  },
  isDefaultNamespace: {
    value: function A(B) {
      if (B === '' || B === void 0) B = null;
      var Q = this.lookupNamespaceURI(null);
      return Q === B;
    },
  },
  index: {
    get: function () {
      var A = this.parentNode;
      if (this === A.firstChild) return 0;
      var B = A.childNodes;
      if (this._index === void 0 || B[this._index] !== this) {
        for (var Q = 0; Q < B.length; Q++) B[Q]._index = Q;
        x5.assert(B[this._index] === this);
      }
      return this._index;
    },
  },
  isAncestor: {
    value: function (A) {
      if (this.doc !== A.doc) return !1;
      if (this.rooted !== A.rooted) return !1;
      for (var B = A; B; B = B.parentNode) if (B === this) return !0;
      return !1;
    },
  },
  ensureSameDoc: {
    value: function (A) {
      if (A.ownerDocument === null) A.ownerDocument = this.doc;
      else if (A.ownerDocument !== this.doc) x5.WrongDocumentError();
    },
  },
  removeChildren: { value: x5.shouldOverride },
  _insertOrReplace: {
    value: function A(B, Q, I) {
      var G = this,
        D,
        Z;
      if (G.nodeType === dR && G.rooted) x5.HierarchyRequestError();
      if (B._childNodes) {
        if (((D = Q === null ? B._childNodes.length : Q.index), G.parentNode === B)) {
          var Y = G.index;
          if (Y < D) D--;
        }
      }
      if (I) {
        if (Q.rooted) Q.doc.mutateRemove(Q);
        Q.parentNode = null;
      }
      var W = Q;
      if (W === null) W = B.firstChild;
      var F = G.rooted && B.rooted;
      if (G.nodeType === dR) {
        var J = [0, I ? 1 : 0],
          C;
        for (var X = G.firstChild; X !== null; X = C)
          ((C = X.nextSibling), J.push(X), (X.parentNode = B));
        var V = J.length;
        if (I) jV1.replace(W, V > 2 ? J[2] : null);
        else if (V > 2 && W !== null) jV1.insertBefore(J[2], W);
        if (B._childNodes) {
          ((J[0] = Q === null ? B._childNodes.length : Q._index),
            B._childNodes.splice.apply(B._childNodes, J));
          for (Z = 2; Z < V; Z++) J[Z]._index = J[0] + (Z - 2);
        } else if (B._firstChild === Q) {
          if (V > 2) B._firstChild = J[2];
          else if (I) B._firstChild = null;
        }
        if (G._childNodes) G._childNodes.length = 0;
        else G._firstChild = null;
        if (B.rooted) {
          B.modify();
          for (Z = 2; Z < V; Z++) B.doc.mutateInsert(J[Z]);
        }
      } else {
        if (Q === G) return;
        if (F) G._remove();
        else if (G.parentNode) G.remove();
        if (((G.parentNode = B), I)) {
          if ((jV1.replace(W, G), B._childNodes)) ((G._index = D), (B._childNodes[D] = G));
          else if (B._firstChild === Q) B._firstChild = G;
        } else {
          if (W !== null) jV1.insertBefore(G, W);
          if (B._childNodes) ((G._index = D), B._childNodes.splice(D, 0, G));
          else if (B._firstChild === Q) B._firstChild = G;
        }
        if (F) (B.modify(), B.doc.mutateMove(G));
        else if (B.rooted) (B.modify(), B.doc.mutateInsert(G));
      }
    },
  },
  lastModTime: {
    get: function () {
      if (!this._lastModTime) this._lastModTime = this.doc.modclock;
      return this._lastModTime;
    },
  },
  modify: {
    value: function () {
      if (this.doc.modclock) {
        var A = ++this.doc.modclock;
        for (var B = this; B; B = B.parentElement) if (B._lastModTime) B._lastModTime = A;
      }
    },
  },
  doc: {
    get: function () {
      return this.ownerDocument || this;
    },
  },
  rooted: {
    get: function () {
      return !!this._nid;
    },
  },
  normalize: {
    value: function () {
      var A;
      for (var B = this.firstChild; B !== null; B = A) {
        if (((A = B.nextSibling), B.normalize)) B.normalize();
        if (B.nodeType !== pB.TEXT_NODE) continue;
        if (B.nodeValue === '') {
          this.removeChild(B);
          continue;
        }
        var Q = B.previousSibling;
        if (Q === null) continue;
        else if (Q.nodeType === pB.TEXT_NODE) (Q.appendData(B.nodeValue), this.removeChild(B));
      }
    },
  },
  serialize: {
    value: function () {
      if (this._innerHTML) return this._innerHTML;
      var A = '';
      for (var B = this.firstChild; B !== null; B = B.nextSibling) A += hV2.serializeOne(B, this);
      return A;
    },
  },
  outerHTML: {
    get: function () {
      return hV2.serializeOne(this, { nodeType: 0 });
    },
    set: x5.nyi,
  },
  ELEMENT_NODE: { value: iY },
  ATTRIBUTE_NODE: { value: qr1 },
  TEXT_NODE: { value: yV1 },
  CDATA_SECTION_NODE: { value: K45 },
  ENTITY_REFERENCE_NODE: { value: H45 },
  ENTITY_NODE: { value: Mr1 },
  PROCESSING_INSTRUCTION_NODE: { value: mV2 },
  COMMENT_NODE: { value: dV2 },
  DOCUMENT_NODE: { value: Ke },
  DOCUMENT_TYPE_NODE: { value: xC },
  DOCUMENT_FRAGMENT_NODE: { value: dR },
  NOTATION_NODE: { value: Lr1 },
  DOCUMENT_POSITION_DISCONNECTED: { value: Rr1 },
  DOCUMENT_POSITION_PRECEDING: { value: Or1 },
  DOCUMENT_POSITION_FOLLOWING: { value: Tr1 },
  DOCUMENT_POSITION_CONTAINS: { value: uV2 },
  DOCUMENT_POSITION_CONTAINED_BY: { value: Pr1 },
  DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: { value: Sr1 },
});
