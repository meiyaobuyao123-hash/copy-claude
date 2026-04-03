// Module: Vu1
// Params: Cz8,xg0

var yg0 = pz(),
  Xu1 = qr(),
  OF6 = Cu1();
class kg0 extends yg0 {
  constructor(A) {
    super(A);
    ((this.tokenizer = A),
      (this.posTracker = yg0.install(A.preprocessor, OF6)),
      (this.currentAttrLocation = null),
      (this.ctLoc = null));
  }
  _getCurrentLocation() {
    return {
      startLine: this.posTracker.line,
      startCol: this.posTracker.col,
      startOffset: this.posTracker.offset,
      endLine: -1,
      endCol: -1,
      endOffset: -1,
    };
  }
  _attachCurrentAttrLocationInfo() {
    ((this.currentAttrLocation.endLine = this.posTracker.line),
      (this.currentAttrLocation.endCol = this.posTracker.col),
      (this.currentAttrLocation.endOffset = this.posTracker.offset));
    let A = this.tokenizer.currentToken,
      B = this.tokenizer.currentAttr;
    if (!A.location.attrs) A.location.attrs = Object.create(null);
    A.location.attrs[B.name] = this.currentAttrLocation;
  }
  _getOverriddenMethods(A, B) {
    let Q = {
      _createStartTagToken() {
        (B._createStartTagToken.call(this), (this.currentToken.location = A.ctLoc));
      },
      _createEndTagToken() {
        (B._createEndTagToken.call(this), (this.currentToken.location = A.ctLoc));
      },
      _createCommentToken() {
        (B._createCommentToken.call(this), (this.currentToken.location = A.ctLoc));
      },
      _createDoctypeToken(I) {
        (B._createDoctypeToken.call(this, I), (this.currentToken.location = A.ctLoc));
      },
      _createCharacterToken(I, G) {
        (B._createCharacterToken.call(this, I, G), (this.currentCharacterToken.location = A.ctLoc));
      },
      _createEOFToken() {
        (B._createEOFToken.call(this), (this.currentToken.location = A._getCurrentLocation()));
      },
      _createAttr(I) {
        (B._createAttr.call(this, I), (A.currentAttrLocation = A._getCurrentLocation()));
      },
      _leaveAttrName(I) {
        (B._leaveAttrName.call(this, I), A._attachCurrentAttrLocationInfo());
      },
      _leaveAttrValue(I) {
        (B._leaveAttrValue.call(this, I), A._attachCurrentAttrLocationInfo());
      },
      _emitCurrentToken() {
        let I = this.currentToken.location;
        if (this.currentCharacterToken)
          ((this.currentCharacterToken.location.endLine = I.startLine),
            (this.currentCharacterToken.location.endCol = I.startCol),
            (this.currentCharacterToken.location.endOffset = I.startOffset));
        if (this.currentToken.type === Xu1.EOF_TOKEN)
          ((I.endLine = I.startLine), (I.endCol = I.startCol), (I.endOffset = I.startOffset));
        else
          ((I.endLine = A.posTracker.line),
            (I.endCol = A.posTracker.col + 1),
            (I.endOffset = A.posTracker.offset + 1));
        B._emitCurrentToken.call(this);
      },
      _emitCurrentCharacterToken() {
        let I = this.currentCharacterToken && this.currentCharacterToken.location;
        if (I && I.endOffset === -1)
          ((I.endLine = A.posTracker.line),
            (I.endCol = A.posTracker.col),
            (I.endOffset = A.posTracker.offset));
        B._emitCurrentCharacterToken.call(this);
      },
    };
    return (
      Object.keys(Xu1.MODE).forEach((I) => {
        let G = Xu1.MODE[I];
        Q[G] = function (D) {
          ((A.ctLoc = A._getCurrentLocation()), B[G].call(this, D));
        };
      }),
      Q
    );
  }
}
xg0.exports = kg0;
