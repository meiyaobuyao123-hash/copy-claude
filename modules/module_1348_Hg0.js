// Module: Hg0
// Params: Bz8,Kg0

var Mh = iW1(),
  Yu1 = nW1(),
  aS = Mh.CODE_POINTS;
class Vg0 {
  constructor() {
    ((this.html = null),
      (this.pos = -1),
      (this.lastGapPos = -1),
      (this.lastCharPos = -1),
      (this.gapStack = []),
      (this.skipNextNewLine = !1),
      (this.lastChunkWritten = !1),
      (this.endOfChunkHit = !1),
      (this.bufferWaterline = 65536));
  }
  _err() {}
  _addGap() {
    (this.gapStack.push(this.lastGapPos), (this.lastGapPos = this.pos));
  }
  _processSurrogate(A) {
    if (this.pos !== this.lastCharPos) {
      let B = this.html.charCodeAt(this.pos + 1);
      if (Mh.isSurrogatePair(B))
        return (this.pos++, this._addGap(), Mh.getSurrogatePairCodePoint(A, B));
    } else if (!this.lastChunkWritten) return ((this.endOfChunkHit = !0), aS.EOF);
    return (this._err(Yu1.surrogateInInputStream), A);
  }
  dropParsedChunk() {
    if (this.pos > this.bufferWaterline)
      ((this.lastCharPos -= this.pos),
        (this.html = this.html.substring(this.pos)),
        (this.pos = 0),
        (this.lastGapPos = -1),
        (this.gapStack = []));
  }
  write(A, B) {
    if (this.html) this.html += A;
    else this.html = A;
    ((this.lastCharPos = this.html.length - 1),
      (this.endOfChunkHit = !1),
      (this.lastChunkWritten = B));
  }
  insertHtmlAtCurrentPos(A) {
    ((this.html =
      this.html.substring(0, this.pos + 1) +
      A +
      this.html.substring(this.pos + 1, this.html.length)),
      (this.lastCharPos = this.html.length - 1),
      (this.endOfChunkHit = !1));
  }
  advance() {
    if ((this.pos++, this.pos > this.lastCharPos))
      return ((this.endOfChunkHit = !this.lastChunkWritten), aS.EOF);
    let A = this.html.charCodeAt(this.pos);
    if (this.skipNextNewLine && A === aS.LINE_FEED)
      return ((this.skipNextNewLine = !1), this._addGap(), this.advance());
    if (A === aS.CARRIAGE_RETURN) return ((this.skipNextNewLine = !0), aS.LINE_FEED);
    if (((this.skipNextNewLine = !1), Mh.isSurrogate(A))) A = this._processSurrogate(A);
    if (
      !(
        (A > 31 && A < 127) ||
        A === aS.LINE_FEED ||
        A === aS.CARRIAGE_RETURN ||
        (A > 159 && A < 64976)
      )
    )
      this._checkForProblematicCharacters(A);
    return A;
  }
  _checkForProblematicCharacters(A) {
    if (Mh.isControlCodePoint(A)) this._err(Yu1.controlCharacterInInputStream);
    else if (Mh.isUndefinedCodePoint(A)) this._err(Yu1.noncharacterInInputStream);
  }
  retreat() {
    if (this.pos === this.lastGapPos) ((this.lastGapPos = this.gapStack.pop()), this.pos--);
    this.pos--;
  }
}
Kg0.exports = Vg0;
