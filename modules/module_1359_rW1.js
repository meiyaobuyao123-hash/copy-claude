// Module: rW1
// Params: Kz8,pg0

var jF6 = pz();
class ug0 extends jF6 {
  constructor(A, B) {
    super(A);
    ((this.posTracker = null), (this.onParseError = B.onParseError));
  }
  _setErrorLocation(A) {
    ((A.startLine = A.endLine = this.posTracker.line),
      (A.startCol = A.endCol = this.posTracker.col),
      (A.startOffset = A.endOffset = this.posTracker.offset));
  }
  _reportError(A) {
    let B = {
      code: A,
      startLine: -1,
      startCol: -1,
      startOffset: -1,
      endLine: -1,
      endCol: -1,
      endOffset: -1,
    };
    (this._setErrorLocation(B), this.onParseError(B));
  }
  _getOverriddenMethods(A) {
    return {
      _err(B) {
        A._reportError(B);
      },
    };
  }
}
pg0.exports = ug0;
