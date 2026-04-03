// Module: Pg0
// Params: Wz8,Tg0

class bV {
  constructor(A) {
    ((this.length = 0), (this.entries = []), (this.treeAdapter = A), (this.bookmark = null));
  }
  _getNoahArkConditionCandidates(A) {
    let B = [];
    if (this.length >= 3) {
      let Q = this.treeAdapter.getAttrList(A).length,
        I = this.treeAdapter.getTagName(A),
        G = this.treeAdapter.getNamespaceURI(A);
      for (let D = this.length - 1; D >= 0; D--) {
        let Z = this.entries[D];
        if (Z.type === bV.MARKER_ENTRY) break;
        let Y = Z.element,
          W = this.treeAdapter.getAttrList(Y);
        if (
          this.treeAdapter.getTagName(Y) === I &&
          this.treeAdapter.getNamespaceURI(Y) === G &&
          W.length === Q
        )
          B.push({ idx: D, attrs: W });
      }
    }
    return B.length < 3 ? [] : B;
  }
  _ensureNoahArkCondition(A) {
    let B = this._getNoahArkConditionCandidates(A),
      Q = B.length;
    if (Q) {
      let I = this.treeAdapter.getAttrList(A),
        G = I.length,
        D = Object.create(null);
      for (let Z = 0; Z < G; Z++) {
        let Y = I[Z];
        D[Y.name] = Y.value;
      }
      for (let Z = 0; Z < G; Z++)
        for (let Y = 0; Y < Q; Y++) {
          let W = B[Y].attrs[Z];
          if (D[W.name] !== W.value) (B.splice(Y, 1), Q--);
          if (B.length < 3) return;
        }
      for (let Z = Q - 1; Z >= 2; Z--) (this.entries.splice(B[Z].idx, 1), this.length--);
    }
  }
  insertMarker() {
    (this.entries.push({ type: bV.MARKER_ENTRY }), this.length++);
  }
  pushElement(A, B) {
    (this._ensureNoahArkCondition(A),
      this.entries.push({ type: bV.ELEMENT_ENTRY, element: A, token: B }),
      this.length++);
  }
  insertElementAfterBookmark(A, B) {
    let Q = this.length - 1;
    for (; Q >= 0; Q--) if (this.entries[Q] === this.bookmark) break;
    (this.entries.splice(Q + 1, 0, { type: bV.ELEMENT_ENTRY, element: A, token: B }),
      this.length++);
  }
  removeEntry(A) {
    for (let B = this.length - 1; B >= 0; B--)
      if (this.entries[B] === A) {
        (this.entries.splice(B, 1), this.length--);
        break;
      }
  }
  clearToLastMarker() {
    while (this.length) {
      let A = this.entries.pop();
      if ((this.length--, A.type === bV.MARKER_ENTRY)) break;
    }
  }
  getElementEntryInScopeWithTagName(A) {
    for (let B = this.length - 1; B >= 0; B--) {
      let Q = this.entries[B];
      if (Q.type === bV.MARKER_ENTRY) return null;
      if (this.treeAdapter.getTagName(Q.element) === A) return Q;
    }
    return null;
  }
  getElementEntry(A) {
    for (let B = this.length - 1; B >= 0; B--) {
      let Q = this.entries[B];
      if (Q.type === bV.ELEMENT_ENTRY && Q.element === A) return Q;
    }
    return null;
  }
}
bV.MARKER_ENTRY = 'MARKER_ENTRY';
bV.ELEMENT_ENTRY = 'ELEMENT_ENTRY';
Tg0.exports = bV;
