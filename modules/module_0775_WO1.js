// Module: WO1
// Params: NxA

Object.defineProperty(NxA, '__esModule', { value: !0 });
NxA.ChecksumStream = void 0;
var _c9 = Nf(),
  jc9 = D1('stream');
class UxA extends jc9.Duplex {
  constructor({
    expectedChecksum: A,
    checksum: B,
    source: Q,
    checksumSourceLocation: I,
    base64Encoder: G,
  }) {
    var D, Z;
    super();
    if (typeof Q.pipe === 'function') this.source = Q;
    else
      throw new Error(
        `@smithy/util-stream: unsupported source type ${(Z = (D = Q === null || Q === void 0 ? void 0 : Q.constructor) === null || D === void 0 ? void 0 : D.name) !== null && Z !== void 0 ? Z : Q} in ChecksumStream.`
      );
    ((this.base64Encoder = G !== null && G !== void 0 ? G : _c9.toBase64),
      (this.expectedChecksum = A),
      (this.checksum = B),
      (this.checksumSourceLocation = I),
      this.source.pipe(this));
  }
  _read(A) {}
  _write(A, B, Q) {
    try {
      (this.checksum.update(A), this.push(A));
    } catch (I) {
      return Q(I);
    }
    return Q();
  }
  async _final(A) {
    try {
      let B = await this.checksum.digest(),
        Q = this.base64Encoder(B);
      if (this.expectedChecksum !== Q)
        return A(
          new Error(
            `Checksum mismatch: expected "${this.expectedChecksum}" but received "${Q}" in response header "${this.checksumSourceLocation}".`
          )
        );
    } catch (B) {
      return A(B);
    }
    return (this.push(null), A());
  }
}
NxA.ChecksumStream = UxA;
