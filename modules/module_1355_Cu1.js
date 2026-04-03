// Module: Cu1
// Params: Jz8,jg0

var RF6 = pz();
class _g0 extends RF6 {
  constructor(A) {
    super(A);
    ((this.preprocessor = A),
      (this.isEol = !1),
      (this.lineStartPos = 0),
      (this.droppedBufferSize = 0),
      (this.offset = 0),
      (this.col = 0),
      (this.line = 1));
  }
  _getOverriddenMethods(A, B) {
    return {
      advance() {
        let Q = this.pos + 1,
          I = this.html[Q];
        if (A.isEol) ((A.isEol = !1), A.line++, (A.lineStartPos = Q));
        if (
          I ===
            `
` ||
          (I === '\r' &&
            this.html[Q + 1] !==
              `
`)
        )
          A.isEol = !0;
        return (
          (A.col = Q - A.lineStartPos + 1),
          (A.offset = A.droppedBufferSize + Q),
          B.advance.call(this)
        );
      },
      retreat() {
        (B.retreat.call(this), (A.isEol = !1), (A.col = this.pos - A.lineStartPos + 1));
      },
      dropParsedChunk() {
        let Q = this.pos;
        B.dropParsedChunk.call(this);
        let I = Q - this.pos;
        ((A.lineStartPos -= I),
          (A.droppedBufferSize += I),
          (A.offset = A.droppedBufferSize + this.pos));
      },
    };
  }
}
jg0.exports = _g0;
