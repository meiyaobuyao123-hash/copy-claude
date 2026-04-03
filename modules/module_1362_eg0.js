// Module: eg0
// Params: wz8,tg0

var gF6 = rW1(),
  hF6 = sg0(),
  mF6 = Vu1(),
  rg0 = pz();
class og0 extends gF6 {
  constructor(A, B) {
    super(A, B);
    ((this.opts = B), (this.ctLoc = null), (this.locBeforeToken = !1));
  }
  _setErrorLocation(A) {
    if (this.ctLoc)
      ((A.startLine = this.ctLoc.startLine),
        (A.startCol = this.ctLoc.startCol),
        (A.startOffset = this.ctLoc.startOffset),
        (A.endLine = this.locBeforeToken ? this.ctLoc.startLine : this.ctLoc.endLine),
        (A.endCol = this.locBeforeToken ? this.ctLoc.startCol : this.ctLoc.endCol),
        (A.endOffset = this.locBeforeToken ? this.ctLoc.startOffset : this.ctLoc.endOffset));
  }
  _getOverriddenMethods(A, B) {
    return {
      _bootstrap(Q, I) {
        (B._bootstrap.call(this, Q, I),
          rg0.install(this.tokenizer, hF6, A.opts),
          rg0.install(this.tokenizer, mF6));
      },
      _processInputToken(Q) {
        ((A.ctLoc = Q.location), B._processInputToken.call(this, Q));
      },
      _err(Q, I) {
        ((A.locBeforeToken = I && I.beforeToken), A._reportError(Q));
      },
    };
  }
}
tg0.exports = og0;
