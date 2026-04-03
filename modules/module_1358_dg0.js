// Module: dg0
// Params: Vz8,mg0

var Ku1 = pz(),
  gg0 = qr(),
  PF6 = Vu1(),
  SF6 = bg0(),
  _F6 = iL(),
  Hu1 = _F6.TAG_NAMES;
class hg0 extends Ku1 {
  constructor(A) {
    super(A);
    ((this.parser = A),
      (this.treeAdapter = this.parser.treeAdapter),
      (this.posTracker = null),
      (this.lastStartTagToken = null),
      (this.lastFosterParentingLocation = null),
      (this.currentToken = null));
  }
  _setStartLocation(A) {
    let B = null;
    if (this.lastStartTagToken)
      ((B = Object.assign({}, this.lastStartTagToken.location)),
        (B.startTag = this.lastStartTagToken.location));
    this.treeAdapter.setNodeSourceCodeLocation(A, B);
  }
  _setEndLocation(A, B) {
    let Q = this.treeAdapter.getNodeSourceCodeLocation(A);
    if (Q) {
      if (B.location) {
        let I = B.location,
          G = this.treeAdapter.getTagName(A);
        if (B.type === gg0.END_TAG_TOKEN && G === B.tagName)
          ((Q.endTag = Object.assign({}, I)),
            (Q.endLine = I.endLine),
            (Q.endCol = I.endCol),
            (Q.endOffset = I.endOffset));
        else ((Q.endLine = I.startLine), (Q.endCol = I.startCol), (Q.endOffset = I.startOffset));
      }
    }
  }
  _getOverriddenMethods(A, B) {
    return {
      _bootstrap(Q, I) {
        (B._bootstrap.call(this, Q, I),
          (A.lastStartTagToken = null),
          (A.lastFosterParentingLocation = null),
          (A.currentToken = null));
        let G = Ku1.install(this.tokenizer, PF6);
        ((A.posTracker = G.posTracker),
          Ku1.install(this.openElements, SF6, {
            onItemPop: function (D) {
              A._setEndLocation(D, A.currentToken);
            },
          }));
      },
      _runParsingLoop(Q) {
        B._runParsingLoop.call(this, Q);
        for (let I = this.openElements.stackTop; I >= 0; I--)
          A._setEndLocation(this.openElements.items[I], A.currentToken);
      },
      _processTokenInForeignContent(Q) {
        ((A.currentToken = Q), B._processTokenInForeignContent.call(this, Q));
      },
      _processToken(Q) {
        if (
          ((A.currentToken = Q),
          B._processToken.call(this, Q),
          Q.type === gg0.END_TAG_TOKEN &&
            (Q.tagName === Hu1.HTML ||
              (Q.tagName === Hu1.BODY && this.openElements.hasInScope(Hu1.BODY))))
        )
          for (let G = this.openElements.stackTop; G >= 0; G--) {
            let D = this.openElements.items[G];
            if (this.treeAdapter.getTagName(D) === Q.tagName) {
              A._setEndLocation(D, Q);
              break;
            }
          }
      },
      _setDocumentType(Q) {
        B._setDocumentType.call(this, Q);
        let I = this.treeAdapter.getChildNodes(this.document),
          G = I.length;
        for (let D = 0; D < G; D++) {
          let Z = I[D];
          if (this.treeAdapter.isDocumentTypeNode(Z)) {
            this.treeAdapter.setNodeSourceCodeLocation(Z, Q.location);
            break;
          }
        }
      },
      _attachElementToTree(Q) {
        (A._setStartLocation(Q),
          (A.lastStartTagToken = null),
          B._attachElementToTree.call(this, Q));
      },
      _appendElement(Q, I) {
        ((A.lastStartTagToken = Q), B._appendElement.call(this, Q, I));
      },
      _insertElement(Q, I) {
        ((A.lastStartTagToken = Q), B._insertElement.call(this, Q, I));
      },
      _insertTemplate(Q) {
        ((A.lastStartTagToken = Q), B._insertTemplate.call(this, Q));
        let I = this.treeAdapter.getTemplateContent(this.openElements.current);
        this.treeAdapter.setNodeSourceCodeLocation(I, null);
      },
      _insertFakeRootElement() {
        (B._insertFakeRootElement.call(this),
          this.treeAdapter.setNodeSourceCodeLocation(this.openElements.current, null));
      },
      _appendCommentNode(Q, I) {
        B._appendCommentNode.call(this, Q, I);
        let G = this.treeAdapter.getChildNodes(I),
          D = G[G.length - 1];
        this.treeAdapter.setNodeSourceCodeLocation(D, Q.location);
      },
      _findFosterParentingLocation() {
        return (
          (A.lastFosterParentingLocation = B._findFosterParentingLocation.call(this)),
          A.lastFosterParentingLocation
        );
      },
      _insertCharacters(Q) {
        B._insertCharacters.call(this, Q);
        let I = this._shouldFosterParentOnInsertion(),
          G =
            (I && A.lastFosterParentingLocation.parent) ||
            this.openElements.currentTmplContent ||
            this.openElements.current,
          D = this.treeAdapter.getChildNodes(G),
          Z =
            I && A.lastFosterParentingLocation.beforeElement
              ? D.indexOf(A.lastFosterParentingLocation.beforeElement) - 1
              : D.length - 1,
          Y = D[Z],
          W = this.treeAdapter.getNodeSourceCodeLocation(Y);
        if (W)
          ((W.endLine = Q.location.endLine),
            (W.endCol = Q.location.endCol),
            (W.endOffset = Q.location.endOffset));
        else this.treeAdapter.setNodeSourceCodeLocation(Y, Q.location);
      },
    };
  }
}
mg0.exports = hg0;
